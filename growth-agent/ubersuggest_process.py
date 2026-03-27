#!/usr/bin/env python3
"""
ubersuggest_process.py — whattime.city SEO Opportunity Extractor

Tüm Ubersuggest rakip CSV'lerini işler, fırsatları çıkarır, JSON'a kaydeder.
Bir kez çalıştır → data/seo-intel/ubersuggest_opportunities.json kullan.

Çıktı dosyası her oturumda referans olarak kullanılır — CSV'leri bir daha okumak gerekmez.
"""

import csv
import json
from pathlib import Path
from collections import defaultdict

CSV_DIR = Path(__file__).parent.parent / "seo-data-upload"
OUTPUT_FILE = Path(__file__).parent.parent / "data" / "seo-intel" / "ubersuggest_opportunities.json"

COMPETITORS = {
    "timeanddate": "ubersuggest timeanddate.com.csv",
    "time.is": "ubersuggest time.is.csv",
    "thetimenow": "ubersuggest thetimenow.com.csv",
    "time.now": "ubersuggest time.now.csv",
    "24timezones": "ubersuggest 24timezones.com.csv",
}

# Bizim sitemizdeki mevcut sayfalar (route → canonical path)
OUR_PAGES = [
    "/est/", "/pst/", "/cst/", "/mst/", "/utc/", "/gmt/",
    "/india/", "/japan/", "/london/", "/california/", "/texas/",
    "/new-york/", "/florida/", "/illinois/", "/washington/",
    "/pst-to-est/", "/cst-to-est/", "/mst-to-est/", "/est-to-pst/",
    "/gmt-to-est/", "/gmt-to-pst/", "/utc-to-est/",
    "/ist-to-est/", "/ist-to-pst/", "/ist-to-cst/",
    "/jst-to-est/", "/jst-to-pst/",
    "/aest-to-est/", "/aest-to-pst/",
    "/bst-to-est/", "/bst-to-pst/",
    "/cet-to-est/", "/cet-to-pst/",
    "/time-converter/", "/meeting/", "/flight-time/", "/military-time/",
    "/daylight-saving-time/", "/daylight-saving-time/usa/", "/daylight-saving-time/uk/",
    "/daylight-saving-time/europe/", "/daylight-saving-time/australia/",
    "/daylight-saving-time/canada/", "/daylight-saving-time/new-zealand/",
    "/daylight-saving-time/mexico/", "/daylight-saving-time/countries/",
    "/eastern-time-zone/", "/central-time-zone/", "/mountain-time-zone/",
    "/pacific-time-zone/", "/alaska-time-zone/", "/hawaii-time-zone/",
    "/us-time-zones/", "/bst-timezone/", "/cest-timezone/",
]

def load_competitor_csv(filepath):
    rows = []
    with open(filepath, encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            try:
                volume = int(str(row.get("Volume", "0")).replace(",", "").strip() or "0")
                position = int(str(row.get("Position", "0")).replace(",", "").strip() or "0")
                sd = int(str(row.get("Seo Difficulty", "0")).replace(",", "").strip() or "0")
                rows.append({
                    "keyword": row.get("Keywords", "").strip().lower(),
                    "volume": volume,
                    "position": position,
                    "sd": sd,
                    "url": row.get("Ranking Url", "").strip(),
                })
            except (ValueError, KeyError):
                continue
    return rows

def url_matches_our_page(url):
    """Rakibin URL'si bizim mevcut sayfalarımızdan biriyle örtüşüyor mu?"""
    url_lower = url.lower()
    for page in OUR_PAGES:
        slug = page.strip("/")
        if slug and slug in url_lower:
            return page
    return None

def categorize_keyword(kw):
    """Keyword'ü kategoriye koy."""
    kw = kw.lower()
    if any(x in kw for x in ["to est", "to pst", "to cst", "to mst", "to utc", "to gmt", "converter", "convert"]):
        return "converter"
    if any(x in kw for x in ["time now", "time in ", "current time", "what time is it"]):
        return "time_now"
    if any(x in kw for x in ["dst", "daylight saving", "daylight saving time"]):
        return "dst"
    if any(x in kw for x in ["time zone", "timezone", "time difference"]):
        return "tz_info"
    if any(x in kw for x in ["flight", "arrival"]):
        return "flight"
    if any(x in kw for x in ["meeting", "schedule", "overlap"]):
        return "meeting"
    return "other"

def main():
    # Her keyword için: hangi rakipler sıralanıyor, volume nedir
    keyword_data = defaultdict(lambda: {
        "keyword": "",
        "volume": 0,
        "category": "",
        "competitors": {},  # {competitor_name: {position, sd, url}}
        "min_position": 999,
        "max_sd": 0,
        "our_page": None,
        "gap": False,  # Bizde sayfa yok ama rakipte var
    })

    for comp_name, csv_file in COMPETITORS.items():
        filepath = CSV_DIR / csv_file
        if not filepath.exists():
            print(f"UYARI: {csv_file} bulunamadı, atlanıyor.")
            continue

        rows = load_competitor_csv(filepath)
        print(f"{comp_name}: {len(rows)} keyword yüklendi")

        for row in rows:
            kw = row["keyword"]
            if not kw:
                continue

            entry = keyword_data[kw]
            entry["keyword"] = kw
            entry["volume"] = max(entry["volume"], row["volume"])
            entry["category"] = categorize_keyword(kw)
            entry["competitors"][comp_name] = {
                "position": row["position"],
                "sd": row["sd"],
                "url": row["url"],
            }
            entry["min_position"] = min(entry["min_position"], row["position"])
            entry["max_sd"] = max(entry["max_sd"], row["sd"])
            our_page = url_matches_our_page(row["url"])
            if our_page:
                entry["our_page"] = our_page

    # Gap analizi: rakipte var, bizde sayfa yok
    for kw, entry in keyword_data.items():
        has_competitor = len(entry["competitors"]) > 0
        has_our_page = entry["our_page"] is not None
        entry["gap"] = has_competitor and not has_our_page

    # Listeye çevir ve filtrele
    all_keywords = list(keyword_data.values())

    # Volume > 500 olanları al
    filtered = [k for k in all_keywords if k["volume"] >= 500]

    # Sırala: gap'ler önce, sonra volume'a göre
    filtered.sort(key=lambda x: (-int(x["gap"]), -x["volume"]))

    # Çıktı yapısı
    output = {
        "generated_at": __import__("datetime").datetime.utcnow().isoformat(),
        "total_keywords_processed": len(all_keywords),
        "total_volume_500_plus": len(filtered),
        "gaps": [k for k in filtered if k["gap"]],
        "covered": [k for k in filtered if not k["gap"]],
        "by_category": {},
    }

    # Kategoriye göre grupla
    for cat in ["converter", "time_now", "dst", "tz_info", "flight", "meeting", "other"]:
        output["by_category"][cat] = {
            "gaps": [k for k in filtered if k["category"] == cat and k["gap"]],
            "covered": [k for k in filtered if k["category"] == cat and not k["gap"]],
        }

    # Kaydet
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_FILE.write_text(json.dumps(output, ensure_ascii=False, indent=2))

    print(f"\n✓ Tamamlandı.")
    print(f"  Toplam keyword: {len(all_keywords)}")
    print(f"  Volume ≥500: {len(filtered)}")
    print(f"  GAP (bizde yok): {len(output['gaps'])}")
    print(f"  Covered (bizde var): {len(output['covered'])}")
    print(f"\n  Kategoriye göre GAP'ler:")
    for cat, data in output["by_category"].items():
        if data["gaps"]:
            print(f"    {cat}: {len(data['gaps'])} gap keyword")
    print(f"\n  → {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
