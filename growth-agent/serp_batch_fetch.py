#!/usr/bin/env python3
"""
serp_batch_fetch.py — whattime.city SEO Research
Tüm hedef keyword'lerin SERP verisini çeker, JSON'a kaydeder.
Claude Code bu dosyayı okuyarak analiz yapar — terminal copy-paste gerekmez.

Kullanım:
  python3 serp_batch_fetch.py

Çıktı:
  ../data/seo-intel/serp_results.json
"""

import json
import time
import os
from pathlib import Path

try:
    import requests
except ImportError:
    print("requests yüklü değil: pip install requests")
    exit(1)

# ── Config ────────────────────────────────────────────────────
CONFIG_FILE = Path(__file__).parent / "config-whattime.env"
OUTPUT_FILE = Path(__file__).parent.parent / "data" / "seo-intel" / "serp_results.json"

def load_key():
    if not CONFIG_FILE.exists():
        raise FileNotFoundError(f"{CONFIG_FILE} bulunamadı")
    for line in CONFIG_FILE.read_text().splitlines():
        if line.startswith("SERPAPI_KEY="):
            return line.split("=", 1)[1].strip()
    raise ValueError("SERPAPI_KEY config dosyasında yok")

# ── Hedef keyword'ler ─────────────────────────────────────────
KEYWORDS = [
    # US TZ "now" cluster
    "EST time now",
    "PST time now",
    "CST time now",
    "MST time now",
    "what time is it in EST",
    "what time is it in PST",

    # US TZ comparison cluster
    "eastern and pacific time difference",
    "central time to eastern time",
    "mountain time to eastern time",
    "PST to EST",
    "CST to EST",
    "MST to EST",
    "pacific time and eastern time",
    "central time and eastern time",

    # ET vs EST vs EDT disambiguation
    "eastern time eastern standard time",
    "is it EST or EDT right now",
    "EST vs EDT difference",
    "eastern time now",

    # India / IST cluster
    "time in india now",
    "india time now",
    "IST time zone",
    "india standard time",

    # Country time cluster
    "time in costa rica",
    "time in australia",
    "time in japan",
    "time in russia",
    "time in uk now",
    "time in germany now",

    # Flight time
    "flight time calculator",
    "flight arrival time calculator",

    # Time zone converter
    "time zone converter",
    "convert time zones",

    # DST
    "daylight saving time 2026",
    "when does daylight saving time end 2026",

    # GMT/UTC
    "gmt to est",
    "utc to est",
    "gmt time now",
]

# ── SerpAPI fetch ─────────────────────────────────────────────
def fetch_serp(keyword: str, api_key: str) -> dict:
    params = {
        "q": keyword,
        "api_key": api_key,
        "num": 10,
        "gl": "us",
        "hl": "en",
        "engine": "google",
    }
    r = requests.get("https://serpapi.com/search.json", params=params, timeout=15)
    r.raise_for_status()
    return r.json()

def extract_key_data(raw: dict) -> dict:
    """Raw SERP response'dan sadece gerekli veriyi çıkar — dosya boyutunu küçültür."""
    out = {
        "keyword": raw.get("search_parameters", {}).get("q", ""),
        "fetched_at": raw.get("search_metadata", {}).get("processed_at", ""),
        "featured_snippet": None,
        "answer_box": None,
        "paa": [],
        "organic": [],
        "related_searches": [],
    }

    # Featured snippet / answer box
    ab = raw.get("answer_box") or raw.get("featured_snippet")
    if ab:
        out["answer_box"] = {
            "type": ab.get("type"),
            "answer": ab.get("answer") or ab.get("snippet", "")[:300],
            "source": ab.get("link") or ab.get("source", {}).get("link", ""),
        }

    # People Also Ask
    for q in raw.get("related_questions", [])[:6]:
        out["paa"].append({
            "question": q.get("question", ""),
            "snippet": (q.get("snippet") or q.get("answer", ""))[:200],
            "source": q.get("link", ""),
        })

    # Organic top 10
    for r in raw.get("organic_results", [])[:10]:
        out["organic"].append({
            "pos": r.get("position"),
            "title": r.get("title", ""),
            "url": r.get("link", ""),
            "snippet": r.get("snippet", "")[:200],
        })

    # Related searches
    for rs in raw.get("related_searches", [])[:8]:
        out["related_searches"].append(rs.get("query", ""))

    return out

# ── Main ──────────────────────────────────────────────────────
def main():
    api_key = load_key()
    print(f"Key yüklendi. {len(KEYWORDS)} keyword çekilecek.\n")

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Varolan sonuçları yükle (kaldığı yerden devam için)
    existing = {}
    if OUTPUT_FILE.exists():
        try:
            existing = {r["keyword"]: r for r in json.loads(OUTPUT_FILE.read_text())}
            print(f"Mevcut {len(existing)} sonuç yüklendi — yalnızca eksikler çekilecek.\n")
        except Exception:
            pass

    results = list(existing.values())
    fetched_keywords = set(existing.keys())

    for i, kw in enumerate(KEYWORDS):
        if kw in fetched_keywords:
            print(f"[{i+1}/{len(KEYWORDS)}] SKIP (zaten var): {kw}")
            continue

        print(f"[{i+1}/{len(KEYWORDS)}] Çekiliyor: {kw} ...", end=" ", flush=True)
        try:
            raw = fetch_serp(kw, api_key)
            data = extract_key_data(raw)
            results.append(data)
            print(f"OK — organic:{len(data['organic'])} paa:{len(data['paa'])}")
        except Exception as e:
            print(f"HATA: {e}")

        # Araya kaydet — kesintiye karşı
        OUTPUT_FILE.write_text(json.dumps(results, ensure_ascii=False, indent=2))

        # Rate limit: saniyede max 2 istek
        if i < len(KEYWORDS) - 1:
            time.sleep(0.6)

    print(f"\nTamamlandı. {len(results)} sonuç → {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
