# SEO Engine

Veri öncelik sırasına göre keyword araştırması ve sayfa yapısı analizi yap.

## Adım 1 — Ubersuggest CSV'leri oku (HER ZAMAN ÖNCE)

Şu dosyaları tara, $ARGUMENTS ile ilgili keyword satırlarını çıkar:
- `/home/user/whattime-city/seo-data-upload/ubersuggest timeanddate.com.csv`
- `/home/user/whattime-city/seo-data-upload/ubersuggest thetimenow.com.csv`
- `/home/user/whattime-city/seo-data-upload/ubersuggest 24timezones.com.csv`
- `/home/user/whattime-city/seo-data-upload/ubersuggest time.is.csv`
- `/home/user/whattime-city/seo-data-upload/ubersuggest time.now.csv`
- `/home/user/whattime-city/seo-data-upload/competitors_data_for_whattime.city.csv`

## Adım 2 — SERP verisi oku

- `/home/user/whattime-city/data/seo-intel/serp_results.json` — $ARGUMENTS için rakip pozisyonları
- `/home/user/whattime-city/data/seo-intel/ubersuggest_opportunities.json`

## Adım 3 — GSC verisi oku

- `/home/user/whattime-city/data/seo-intel/gsc_queries.json` — $ARGUMENTS ile ilgili sorgular
- `/home/user/whattime-city/data/seo-intel/gsc_pages.json` — mevcut sayfa performansı

## Çıktı formatı

Her keyword için:
- Arama hacmi (vol)
- Search Difficulty (SD)
- timeanddate pozisyonu (YOK ise → fırsat!)
- thetimenow / 24tz / time.is / time.now pozisyonları
- whattime.city mevcut durumu

Ardından sayfa yapısı öner:
- `seo_title` (≤44 char)
- `seo_description`
- Önerilen FAQ soruları (8 adet)
- İç link önerileri
- SERP cluster analizi (%60+ overlap = tek sayfa)
