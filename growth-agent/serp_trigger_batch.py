"""
serp_trigger_batch.py — Growth Agent v4.5
whattime.city SEO Automation

GSC-first trigger pipeline. SerpApi sadece kanıt eşiği geçince çağrılır.
Default: HOLD. Rewrite en son seçenek.

Revizyon notları (v2 → v3):
  - Duplicate action koruması eklendi (14 gün cooldown)
  - CTR_OPT artık site ortalama CTR ile karşılaştırıyor
  - SERP karar ağacı genişletildi (_classify_competitor ile)
  - out_path tarih eklenerek overwrite riski kaldırıldı
  - ensure_limit mevcut limiti ezmiyor (guard eklendi)
  - SerpApi kanıt eşiği (para bölgesi kaybı) koruması eklendi
"""

from __future__ import annotations

import json
import math
import os
from dataclasses import dataclass, asdict
from datetime import datetime, timezone, timedelta
from typing import Any, Callable, Dict, List, Optional


# ─────────────────────────────────────────────────────────────
# Data models
# ─────────────────────────────────────────────────────────────

@dataclass
class GscRow:
    """
    Haftalık GSC metrikleri — şehir URL başına.
    pos_7d / pos_prev7d: ortalama pozisyon (düşük = iyi).
    ctr_7d: 0-100 arası yüzde.
    """
    url: str
    clicks_7d: float
    impr_7d: float
    ctr_7d: float
    pos_7d: float

    clicks_prev7d: float
    impr_prev7d: float
    ctr_prev7d: float
    pos_prev7d: float


@dataclass
class Candidate:
    url: str
    candidate_type: str          # SERP_CHECK | CTR_OPT | HOLD
    priority: float
    reasons: List[str]
    gsc: Dict[str, Any]


@dataclass
class SerpDecision:
    url: str
    keyword: str
    action: str                  # HOLD | CTR_TEST | MINOR_OPTIMIZE | SNIPPET_TARGET | AUTHORITY_PUSH | MAJOR_REWRITE
    size: str                    # small | medium | large
    notes: List[str]
    serp_meta: Dict[str, Any]
    decided_at_iso: str


# ─────────────────────────────────────────────────────────────
# State store
# ─────────────────────────────────────────────────────────────

class JsonStateStore:
    """
    Hafif yerel kalıcılık. Atomic write (tmp → replace).
    Corrupt state: bozuk dosyayı .bak'a taşı, temiz başla.
    """

    def __init__(self, path: str):
        self.path = path
        self.state: Dict[str, Any] = {
            "serp_budget": {},
            "history": {},
            "decisions": {},
        }
        self._load()

    def _load(self) -> None:
        if not os.path.exists(self.path):
            return
        try:
            with open(self.path, "r", encoding="utf-8") as f:
                self.state = json.load(f)
        except Exception:
            bak = self.path + ".bak"
            try:
                os.replace(self.path, bak)
            except Exception:
                pass
            self.state = {"serp_budget": {}, "history": {}, "decisions": {}}

    def save(self) -> None:
        tmp = self.path + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(self.state, f, ensure_ascii=False, indent=2)
        os.replace(tmp, self.path)

    # ── Budget ────────────────────────────────────────────────

    def get_budget(self, day_key: str) -> Dict[str, Any]:
        return self.state.setdefault("serp_budget", {}).setdefault(
            day_key, {"used": 0, "limit": 8}
        )

    def inc_budget_used(self, day_key: str, n: int = 1) -> None:
        b = self.get_budget(day_key)
        b["used"] = int(b.get("used", 0)) + n

    def set_budget_limit(self, day_key: str, limit: int) -> None:
        b = self.get_budget(day_key)
        b["limit"] = int(limit)

    # ── History ───────────────────────────────────────────────

    def add_history(self, url: str, payload: Dict[str, Any]) -> None:
        h = self.state.setdefault("history", {}).setdefault(url, [])
        h.append(payload)
        if len(h) > 30:
            self.state["history"][url] = h[-30:]

    # ── Decisions ─────────────────────────────────────────────

    def add_decision(self, decision: SerpDecision) -> None:
        lst = self.state.setdefault("decisions", {}).setdefault(decision.url, [])
        lst.append(asdict(decision))
        if len(lst) > 50:
            self.state["decisions"][decision.url] = lst[-50:]

    def last_decision(self, url: str) -> Optional[Dict[str, Any]]:
        """URL için en son kaydedilmiş kararı döndür."""
        lst = self.state.get("decisions", {}).get(url, [])
        return lst[-1] if lst else None

    def was_recently_acted(self, url: str, cooldown_days: int = 14) -> bool:
        """
        Son <cooldown_days> gün içinde HOLD dışı bir karar verildiyse True.
        Aynı şehrin tekrar tekrar işlenmesini önler.
        """
        last = self.last_decision(url)
        if not last:
            return False
        if last.get("action", "HOLD") == "HOLD":
            return False
        ts = last.get("decided_at_iso", "")
        if not ts:
            return False
        try:
            last_dt = datetime.fromisoformat(ts)
            return (datetime.now(timezone.utc) - last_dt) < timedelta(days=cooldown_days)
        except ValueError:
            return False


# ─────────────────────────────────────────────────────────────
# GSC Trigger Engine
# ─────────────────────────────────────────────────────────────

class GscTriggerEngine:
    """
    GSC-first aday üretici.
    SerpApi tüketmeden hangi şehrin aksiyon adayı olduğunu belirler.
    """

    def __init__(
        self,
        impr_floor_for_actions: float = 50.0,
        impr_floor_for_serp_check: float = 200.0,
        dpos_serp_check: float = 5.0,
        click_drop_pct_serp_check: float = 0.30,
        impr_drop_pct_serp_check: float = 0.30,
        ctr_opt_pos_min: float = 5.0,
        ctr_opt_pos_max: float = 15.0,
        stable_dpos_abs: float = 2.0,
        site_avg_ctr: float = 0.0,      # 0 = otomatik hesapla
    ):
        self.impr_floor_for_actions     = impr_floor_for_actions
        self.impr_floor_for_serp_check  = impr_floor_for_serp_check
        self.dpos_serp_check            = dpos_serp_check
        self.click_drop_pct_serp_check  = click_drop_pct_serp_check
        self.impr_drop_pct_serp_check   = impr_drop_pct_serp_check
        self.ctr_opt_pos_min            = ctr_opt_pos_min
        self.ctr_opt_pos_max            = ctr_opt_pos_max
        self.stable_dpos_abs            = stable_dpos_abs
        self._site_avg_ctr_override     = site_avg_ctr

    # ── Helpers ───────────────────────────────────────────────

    @staticmethod
    def _safe_pct(new: float, old: float) -> float:
        return (new - old) / old if old else 0.0

    @staticmethod
    def _log1(x: float) -> float:
        return math.log(x + 1.0)

    def _compute_site_avg_ctr(self, rows: List[GscRow]) -> float:
        """İmpresyon eşiğini geçen sayfaların CTR ortalaması."""
        valid = [r for r in rows if r.impr_7d >= self.impr_floor_for_actions]
        return sum(r.ctr_7d for r in valid) / len(valid) if valid else 5.0

    def meets_serp_call_criteria(self, r: GscRow, dpos: float) -> bool:
        """
        Gerçekten SerpApi harcamaya değer mi?

        Kural 1: Yüksek impression + ciddi düşüş
        Kural 2: Para bölgesi kaybı (pos 4-12 → 10-20)
        """
        if r.impr_7d >= self.impr_floor_for_serp_check and dpos >= self.dpos_serp_check:
            return True
        if (4.0 <= r.pos_prev7d <= 12.0) and (10.0 <= r.pos_7d <= 20.0):
            return True
        return False

    # ── Core ─────────────────────────────────────────────────

    def build_candidates(self, rows: List[GscRow]) -> List[Candidate]:
        site_avg_ctr = (
            self._site_avg_ctr_override
            if self._site_avg_ctr_override > 0
            else self._compute_site_avg_ctr(rows)
        )

        out: List[Candidate] = []

        for r in rows:
            dpos        = r.pos_7d - r.pos_prev7d
            dclicks_pct = self._safe_pct(r.clicks_7d, r.clicks_prev7d)
            dimpr_pct   = self._safe_pct(r.impr_7d,   r.impr_prev7d)
            reasons: List[str] = []

            # ── Yetersiz veri → HOLD ─────────────────────────
            if r.impr_7d < self.impr_floor_for_actions:
                out.append(Candidate(
                    url=r.url,
                    candidate_type="HOLD",
                    priority=0.0,
                    reasons=[f"Düşük impression (impr_7d={r.impr_7d:.0f})"],
                    gsc=self._gsc_dict(r, dpos, dclicks_pct, dimpr_pct),
                ))
                continue

            # ── SERP_CHECK kriterleri ────────────────────────
            serp_check = False

            if r.impr_7d >= self.impr_floor_for_serp_check and dpos >= self.dpos_serp_check:
                serp_check = True
                reasons.append(f"Pozisyon {dpos:+.1f} kötüleşti (impr={r.impr_7d:.0f})")

            if r.impr_7d >= self.impr_floor_for_serp_check and dclicks_pct <= -self.click_drop_pct_serp_check:
                serp_check = True
                reasons.append(f"Click %{dclicks_pct*100:.0f} düştü")

            if r.impr_7d >= self.impr_floor_for_serp_check and dimpr_pct <= -self.impr_drop_pct_serp_check:
                serp_check = True
                reasons.append(f"Impression %{dimpr_pct*100:.0f} düştü")

            # Para bölgesi kaybı: pos 4-12.5 → 10-20 (impr_floor_for_serp_check şartı aranmaz)
            if not serp_check and (4.0 <= r.pos_prev7d <= 12.5) and (10.0 <= r.pos_7d <= 20.0):
                serp_check = True
                reasons.append(f"Para bölgesi kaybı: pos {r.pos_prev7d:.1f} → {r.pos_7d:.1f}")

            # ── CTR_OPT kriterleri ───────────────────────────
            # Pozisyon bant + CTR referans karşılaştırması (bu olmadan yanlış pozitif üretir)
            ctr_opt = False
            if (self.ctr_opt_pos_min <= r.pos_7d <= self.ctr_opt_pos_max
                    and r.ctr_7d < site_avg_ctr
                    and r.impr_7d >= 100):
                ctr_opt = True
                reasons.append(
                    f"Fırsat bandı pos={r.pos_7d:.1f}, "
                    f"CTR={r.ctr_7d:.2f}% < site ort. {site_avg_ctr:.2f}%"
                )

            # ── Stabil → HOLD ────────────────────────────────
            stable = abs(dpos) < self.stable_dpos_abs and dimpr_pct > -0.10
            if stable and not serp_check and not ctr_opt:
                out.append(Candidate(
                    url=r.url,
                    candidate_type="HOLD",
                    priority=0.0,
                    reasons=["Stabil — haftalık değişim normal sınırlarda"],
                    gsc=self._gsc_dict(r, dpos, dclicks_pct, dimpr_pct),
                ))
                continue

            # ── Priority score ───────────────────────────────
            traffic       = self._log1(r.impr_7d)
            risk          = (
                max(dpos, 0.0)
                + abs(min(dclicks_pct, 0.0)) * 10.0
                + abs(min(dimpr_pct,   0.0)) * 10.0
            )
            band_bonus    = 2.0 if self.ctr_opt_pos_min <= r.pos_7d <= 20.0 else 0.0
            ctr_gap_bonus = max(site_avg_ctr - r.ctr_7d, 0.0) * 0.5
            priority      = traffic * (1.0 + risk) + band_bonus + ctr_gap_bonus

            ctype = "SERP_CHECK" if serp_check else ("CTR_OPT" if ctr_opt else "HOLD")

            out.append(Candidate(
                url=r.url,
                candidate_type=ctype,
                priority=float(priority),
                reasons=reasons if reasons else ["Heuristik tetikleme"],
                gsc=self._gsc_dict(r, dpos, dclicks_pct, dimpr_pct),
            ))

        out.sort(key=lambda c: (c.candidate_type == "HOLD", -c.priority))
        return out

    @staticmethod
    def _gsc_dict(
        r: GscRow,
        dpos: float,
        dclicks_pct: float,
        dimpr_pct: float,
    ) -> Dict[str, Any]:
        return {
            "clicks_7d":     r.clicks_7d,
            "impr_7d":       r.impr_7d,
            "ctr_7d":        r.ctr_7d,
            "pos_7d":        r.pos_7d,
            "clicks_prev7d": r.clicks_prev7d,
            "impr_prev7d":   r.impr_prev7d,
            "ctr_prev7d":    r.ctr_prev7d,
            "pos_prev7d":    r.pos_prev7d,
            "dPos":          dpos,
            "dClicksPct":    dclicks_pct,
            "dImprPct":      dimpr_pct,
        }


# ─────────────────────────────────────────────────────────────
# SerpApi budget manager
# ─────────────────────────────────────────────────────────────

class SerpBudgetManager:

    def __init__(self, store: JsonStateStore, daily_limit: int = 8):
        self.store = store
        self.daily_limit_default = daily_limit

    @staticmethod
    def today_key() -> str:
        return datetime.now(timezone.utc).strftime("%Y-%m-%d")

    def ensure_limit(self, daily_limit: Optional[int] = None) -> None:
        """Limit bugün için henüz set edilmediyse yazar — mevcut değeri ezmez."""
        k = self.today_key()
        b = self.store.get_budget(k)
        if "limit" not in b:
            self.store.set_budget_limit(k, daily_limit if daily_limit is not None else self.daily_limit_default)
            self.store.save()

    def can_spend(self, n: int = 1) -> bool:
        k = self.today_key()
        b = self.store.get_budget(k)
        return (int(b.get("used", 0)) + n) <= int(b.get("limit", self.daily_limit_default))

    def spend(self, n: int = 1) -> None:
        self.store.inc_budget_used(self.today_key(), n)
        self.store.save()

    def remaining(self) -> int:
        k = self.today_key()
        b = self.store.get_budget(k)
        return max(0, int(b.get("limit", self.daily_limit_default)) - int(b.get("used", 0)))


# ─────────────────────────────────────────────────────────────
# Competitor classifier
# ─────────────────────────────────────────────────────────────

_TOOL_DOMAINS = frozenset({
    "timeanddate.com", "time.is", "worldtimeserver.com",
    "24timezones.com", "worldclock.com", "currenttimeanddate.com",
    "thetimezoneconverter.com", "whattime.city",
})
_AUTHORITY_DOMAINS = frozenset({
    "wikipedia.org", "britannica.com", "nationalgeographic.com",
    "bbc.com", "bbc.co.uk", "reuters.com", "ap.org",
    "theguardian.com", "nytimes.com",
})
_BLOG_SIGNALS = ("blog", "post", "article", "news", "guide", "how-to", "tips")


def classify_competitor(url: str) -> str:
    """
    URL'den rakip tipini belirle.
    Döndürür: 'tool' | 'authority' | 'blog' | 'other'
    """
    lower  = url.lower()
    domain = lower.split("/")[2] if lower.startswith("http") else lower.split("/")[0]

    for d in _TOOL_DOMAINS:
        if d in domain:
            return "tool"
    for d in _AUTHORITY_DOMAINS:
        if d in domain:
            return "authority"
    if any(sig in lower for sig in _BLOG_SIGNALS):
        return "blog"
    if ".edu" in domain or ".gov" in domain:
        return "authority"
    return "other"


# ─────────────────────────────────────────────────────────────
# SERP action decision
# ─────────────────────────────────────────────────────────────

_ACTION_SIZE: Dict[str, str] = {
    "HOLD":           "small",
    "CTR_TEST":       "small",
    "MINOR_OPTIMIZE": "medium",
    "SNIPPET_TARGET": "medium",
    "AUTHORITY_PUSH": "large",
    "MAJOR_REWRITE":  "large",
}


def decide_action_from_serp(
    *,
    url: str,
    keyword: str,
    serp: Dict[str, Any],
    gsc_meta: Dict[str, Any],
) -> SerpDecision:
    """
    SERP verisi + GSC meta'dan action kararı üret.

    serp dict beklenen yapı:
      {
        "top_urls":   ["https://...", ...],
        "features":   {"paa": bool, "featured_snippet": bool,
                       "local_box": bool, "time_widget": bool},
        "top_titles": ["...", ...]   # opsiyonel
      }
    """
    features: Dict[str, bool] = serp.get("features") or {}
    top_urls: List[str]       = serp.get("top_urls")  or []

    pos   = float(gsc_meta.get("pos_7d",    999.0))
    dpos  = float(gsc_meta.get("dPos",        0.0))
    impr  = float(gsc_meta.get("impr_7d",     0.0))
    d_ctr = float(gsc_meta.get("dCtrPct",     0.0))   # negatif = CTR düştü

    notes: List[str] = []

    # Rakip tipleri (top 5)
    top5_types = [classify_competitor(u) for u in top_urls[:5]]
    has_authority    = "authority" in top5_types
    tool_count       = top5_types.count("tool")
    has_tool_dominance = tool_count >= 3

    # ── Karar ağacı ──────────────────────────────────────────

    # 1. Otorite rakip + ciddi düşüş → AUTHORITY_PUSH
    if dpos >= 5.0 and has_authority and impr >= 300:
        notes.append(
            f"Top 5'te otorite domain var + ciddi düşüş (dPos={dpos:+.1f}, impr={impr:.0f})"
        )
        notes.append("Aksiyon: sitewide internal link, hub sayfa, topical cluster güçlendir")
        return _build_decision(url, keyword, "AUTHORITY_PUSH", notes, serp, top5_types)

    # 2. Featured snippet veya PAA aktif → SNIPPET_TARGET
    if features.get("featured_snippet") or features.get("paa"):
        notes.append("SERP'te featured snippet veya PAA mevcut")
        notes.append("Aksiyon: kısa cevap blokları, soru başlıkları, tablo, FAQ schema")
        return _build_decision(url, keyword, "SNIPPET_TARGET", notes, serp, top5_types)

    # 3. Tool hakimiyeti + feature yok → MINOR_OPTIMIZE
    if has_tool_dominance and not features.get("featured_snippet") and not features.get("paa"):
        notes.append(
            f"Top 5 tool ağırlıklı ({tool_count}/5), snippet yok — on-page optimize yeterli"
        )
        notes.append("Aksiyon: H1/H2 yapı, intro, FAQ, internal link, schema")
        return _build_decision(url, keyword, "MINOR_OPTIMIZE", notes, serp, top5_types)

    # 4. Para bandı + CTR negatif trend → CTR_TEST
    if 5.0 <= pos <= 15.0 and d_ctr < 0:
        notes.append(f"Pozisyon {pos:.1f}, CTR trend negatif (dCtrPct={d_ctr:.3f})")
        notes.append("Aksiyon: title/meta varyasyon testi")
        return _build_decision(url, keyword, "CTR_TEST", notes, serp, top5_types)

    # 5. Para bandı + CTR nötr → minor dokunuş
    if 5.0 <= pos <= 15.0:
        notes.append(f"Pozisyon {pos:.1f} — stabil band, hafif dokunuş")
        notes.append("Aksiyon: internal link kontrolü, meta taze tut")
        return _build_decision(url, keyword, "MINOR_OPTIMIZE", notes, serp, top5_types)

    # 6. Düşük ROI bölgesi → HOLD
    if pos > 30.0 and impr < 500.0:
        notes.append(f"Düşük ROI (pos={pos:.1f}, impr={impr:.0f}) — bekle")
        return _build_decision(url, keyword, "HOLD", notes, serp, top5_types)

    # 7. Default
    notes.append("Anlamlı sinyal yok — değişiklik yapma")
    return _build_decision(url, keyword, "HOLD", notes, serp, top5_types)


def _build_decision(
    url: str,
    keyword: str,
    action: str,
    notes: List[str],
    serp: Dict[str, Any],
    top5_types: List[str],
) -> SerpDecision:
    return SerpDecision(
        url=url,
        keyword=keyword,
        action=action,
        size=_ACTION_SIZE.get(action, "medium"),
        notes=notes,
        serp_meta={
            "features":        serp.get("features", {}),
            "top_urls_sample": (serp.get("top_urls") or [])[:10],
            "top5_comp_types": top5_types,
        },
        decided_at_iso=datetime.now(timezone.utc).isoformat(),
    )


# ─────────────────────────────────────────────────────────────
# Public pipeline functions
# ─────────────────────────────────────────────────────────────

def run_weekly_gsc_trigger(
    store_path: str,
    gsc_rows: List[GscRow],
    out_path: Optional[str] = None,
    site_avg_ctr: float = 0.0,
) -> List[Candidate]:
    """
    Haftalık job:
      - GSC delta'larından aday üret
      - History'e kaydet
      - JSON çıktısı (tarihli dosya — overwrite yok)
    """
    store      = JsonStateStore(store_path)
    engine     = GscTriggerEngine(site_avg_ctr=site_avg_ctr)
    candidates = engine.build_candidates(gsc_rows)

    now_iso = datetime.now(timezone.utc).isoformat()
    for c in candidates:
        store.add_history(c.url, {
            "ts":             now_iso,
            "candidate_type": c.candidate_type,
            "priority":       c.priority,
            "gsc":            c.gsc,
        })
    store.save()

    if out_path:
        date_str   = datetime.now(timezone.utc).strftime("%Y%m%d")
        base, ext  = os.path.splitext(out_path)
        dated_path = f"{base}_{date_str}{ext}"
        with open(dated_path, "w", encoding="utf-8") as f:
            json.dump([asdict(c) for c in candidates], f, ensure_ascii=False, indent=2)

    return candidates


def run_daily_serp_decisions(
    store_path: str,
    candidates: List[Candidate],
    serp_fetch_fn: Callable[[str, str], Dict[str, Any]],
    keyword_for_url_fn: Callable[[str], str],
    daily_limit: int = 8,
    max_per_run: Optional[int] = None,
    action_cooldown_days: int = 14,
) -> List[SerpDecision]:
    """
    Günlük job:
      - Candidate listesini alır
      - Duplicate koruması: son <action_cooldown_days> içinde aktif karar yapılan şehirler atlanır
      - Bütçe kapısını geçer
      - SERP_CHECK zorunlu; CTR_OPT bütçe varsa top 2
      - Kararları kaydeder

    serp_fetch_fn(url, keyword) -> {"top_urls": [...], "features": {...}}
    keyword_for_url_fn(url)     -> "istanbul time now"
    """
    store  = JsonStateStore(store_path)
    budget = SerpBudgetManager(store, daily_limit=daily_limit)
    budget.ensure_limit(daily_limit)

    decisions: List[SerpDecision] = []

    spend_list = [c for c in candidates if c.candidate_type == "SERP_CHECK"]
    ctr_opts   = sorted(
        [c for c in candidates if c.candidate_type == "CTR_OPT"],
        key=lambda x: -x.priority,
    )
    spend_list.extend(ctr_opts[:2])
    spend_list.sort(key=lambda x: -x.priority)

    if max_per_run is not None:
        spend_list = spend_list[:max_per_run]

    for c in spend_list:
        # Duplicate koruması
        if store.was_recently_acted(c.url, cooldown_days=action_cooldown_days):
            _log(f"SKIP (cooldown {action_cooldown_days}d): {c.url}")
            continue

        if not budget.can_spend(1):
            _log(f"Günlük bütçe doldu ({daily_limit}). Kalan adaylar bir sonraki güne ertelendi.")
            break

        kw       = keyword_for_url_fn(c.url)
        serp     = serp_fetch_fn(c.url, kw)
        decision = decide_action_from_serp(
            url=c.url, keyword=kw, serp=serp, gsc_meta=c.gsc,
        )
        decisions.append(decision)
        store.add_decision(decision)
        budget.spend(1)

        _log(
            f"[{decision.action:20s}] [{decision.size:6s}]  "
            f"{c.url}  pos={c.gsc.get('pos_7d', '?')}"
        )

    store.save()
    _log(f"Kalan günlük SerpApi bütçesi: {budget.remaining()}")
    return decisions


# ─────────────────────────────────────────────────────────────
# Helpers
# ─────────────────────────────────────────────────────────────

def _log(msg: str) -> None:
    ts = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")
    print(f"[serp_trigger] {ts}  {msg}")


def build_action_summary(decisions: List[SerpDecision]) -> Dict[str, Any]:
    """Karar listesinden özet istatistik."""
    from collections import Counter
    action_counts = Counter(d.action for d in decisions)
    size_counts   = Counter(d.size   for d in decisions)
    return {
        "total":     len(decisions),
        "by_action": dict(action_counts),
        "by_size":   dict(size_counts),
        "hold_pct":  round(action_counts.get("HOLD", 0) / max(len(decisions), 1) * 100, 1),
        "decisions": [asdict(d) for d in decisions],
    }


# ─────────────────────────────────────────────────────────────
# agent.py entegrasyon örneği
# ─────────────────────────────────────────────────────────────
"""
from serp_trigger_batch import (
    GscRow, run_weekly_gsc_trigger, run_daily_serp_decisions, build_action_summary
)

STORE_PATH = "/root/tonguckaracay/trigger_state.json"

def gsc_rows_from_api() -> list[GscRow]:
    # GSC Search Analytics API → GscRow listesi
    ...

def my_serp_fetch(url: str, keyword: str) -> dict:
    # SerpApi çağrısı → {"top_urls": [...], "features": {...}}
    ...

def keyword_for_url(url: str) -> str:
    slug = url.rstrip("/").split("/")[-1]
    return f"{slug.replace('-', ' ')} time now"

# Haftalık (her pazartesi 06:00):
candidates = []
def weekly_scan():
    global candidates
    candidates = run_weekly_gsc_trigger(
        STORE_PATH, gsc_rows_from_api(), out_path="candidates.json"
    )
schedule.every().monday.at("06:00").do(weekly_scan)

# Günlük (her gün 07:00):
def daily_serp():
    if not candidates:
        return
    decisions = run_daily_serp_decisions(
        STORE_PATH, candidates, my_serp_fetch, keyword_for_url
    )
    print(build_action_summary(decisions))
schedule.every().day.at("07:00").do(daily_serp)
"""
