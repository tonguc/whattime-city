# whattime.city — 1-Month SEO Roadmap
## March 25 – April 25, 2026

> **Baseline (Last 28 days):** 12,739 impressions · 6 clicks · 0 pages in top 10
> **Target (Next 28 days):** 50,000+ impressions · 150+ clicks · 10+ pages in top 10

---

## Stratejik Tablo — Ne Görüyoruz?

### Güçlü Yön (Exploit This)
**`/time/[from]/[to]` sayfaları organik sinyalimizin tamamı.**
- 1,127 sayfa indexlendi, 989'u impression alıyor
- Sorun: Ortalama pozisyon 40-60 (sayfa 4-6). İçerik ince.
- Fırsat: Positions 10-15'te olan 50+ sayfa var → bunları sayfa 1'e çekmek için küçük iyileştirmeler yeterli.

### Kör Nokta (Critical Gap)
**India time = sıfır.** Rakipler 1M+ hacimli keywordlerde pozisyon 1-11'de. Bizde 5 sorgu, pos 74-82.

### Organik Moat
**"Time difference" long-tail sorgular zaten bizi buluyor.** 258 farklı sorgu, GSC'de bizden geçiyor.
Örnek: "bombay and cairo time difference" pos 17 · "delhi to viana time difference" pos 19 · "singapore lagos time difference" pos 16.
Bu, Google'ın `/time/` sayfalarımızı anladığını gösteriyor.

---

## Priority Matrix

| Impact | Effort | Action |
|--------|--------|--------|
| 🔴 Çok yüksek | Orta | India time hub (/india/ sayfası) |
| 🔴 Çok yüksek | Düşük | /time/ pair sayfaları title+meta optimize |
| 🟠 Yüksek | Düşük | Top /time/ sayfalarına FAQ schema ekle |
| 🟠 Yüksek | Orta | Broken guide links fix (16 sayfa) |
| 🟡 Orta | Orta | DST country cluster (usa/uk/europe/australia) |
| 🟡 Orta | Orta | Daha fazla TZ abbreviation pair (IST→PST, IST→CST vb.) |
| 🟢 Düşük | Düşük | Duplicate title/meta description fix |

---

## Hafta 1 — Teknik Sağlık + /time/ Sayfaları Metadata Fix
**Hedef: Google'a "bu sayfalar kaliteli" sinyali ver**

### 1.1 — /time/ Pair Sayfaları Metadata Optimize (EN KRİTİK)
Şu an tüm /time/ sayfaları muhtemelen generic title/meta alıyor.
Oysa GSC'de şunları görüyoruz:
- `/time/singapore/london/` → pos 48, 137 impression — CTR düşük çünkü başlık çekici değil
- `/time/london/sydney/` → pos 58, 112 impression
- `/time/new-york/london/` → pos 56, 110 impression

**Yapılacak:**
- Title pattern: `"Singapore to London Time — Current Time Difference | whattime.city"`
- Meta desc: `"It is currently [X hours] [ahead/behind] in Singapore vs London. Live clock, conversion table, and best overlap hours."`
- H1 içinde "time difference" kelimesini açıkça kullan
- **JSON-LD BreadcrumbList** schema ekle

**Öncelikli sayfalar** (pozisyon 10-20, impression >20):
1. /time/singapore/lagos/ (pos 16)
2. /time/dublin/dubai/ (pos 13)
3. /time/los-angeles/san-francisco/ (pos 11)
4. /time/tokyo/seattle/ (pos 10)
5. /time/delhi/tel-aviv/ (pos 12)
6. /time/san-francisco/dublin/ (pos 11)
7. /time/sao-paulo/san-francisco/ (pos 13)
8. /time/tokyo/san-francisco/ (pos 14)

Bu 8 sayfa sayfa 2'nin üst kısmında. Küçük bir iyileştirme = tıklamalar.

### 1.2 — Broken Guide Links Fix
16 broken internal link guide sayfalarından geliyor.
Her 8 premium şehir için 2 missing sayfa:
- `/{city}/guide/best-time-to-call/`
- `/{city}/guide/public-holidays/`

**Seçenek A (hızlı):** Guide pillar sayfasından bu linkleri kaldır veya "coming soon" ile değiştir.
**Seçenek B (doğru):** Sayfaları inşa et — holiday ve calling time sayfaları zaten yüksek hacimli.

### 1.3 — Duplicate Title Tags
Screaming Frog'dan gelen duplicate title issue — muhtemelen tz pair sayfaları generic başlık alıyor.
Fix: Her /time/ sayfasının unique title'ı dinamik olarak üretilmeli.

---

## Hafta 2 — India Time Hub (En Büyük Trafik Fırsatı)
**Hedef: "time in india" cluster için Google'a bir otorite sayfası sun**

### Neden Kritik?
| Keyword | Aylık Hacim | Rakip Pozisyonlar |
|---------|-------------|-------------------|
| time in india | 1,000,000 | TAD:1, time.is:3, 24tz:2 |
| india time now | 823,000 | TAD:2, time.is:2 |
| india time | 673,000 | time.is:1, 24tz:2 |
| india time zone utc | araştır | Bizde pos 82 |

**Bizim mevcut durum:** 5 India sorgusu, pos 74-82. Yani Google /new-delhi/ sayfamızı biliyor ama zayıf buluyor.

### Yapılacak: `/india/` Standalone Hub Sayfası
Bu sadece bir şehir sayfası değil. "India time" için özel bir hub.

**Sayfa yapısı:**
```
/india/
├── H1: "Current Time in India (IST)"
├── Live clock — IST (UTC+5:30)
├── "India does NOT observe Daylight Saving Time" — unique fact
├── India's 5 major time zones fact (all IST — no zones)
├── IST to major cities conversion table (NY, London, Dubai, Singapore, Tokyo, Sydney)
├── Business hours India (9 AM – 6 PM IST)
├── FAQ schema (10+ questions)
│   - What is India's time zone?
│   - Does India have DST?
│   - What time is it in India right now?
│   - What UTC is India?
│   - How many time zones does India have?
└── Related: /new-delhi/, /mumbai/, /bangalore/, /chennai/, /kolkata/
```

**URL:** `whattime.city/india/` (yeni standalone sayfa)
**Canonical:** `/india/`
**Sitemap'e ekle:** priority 0.9

---

## Hafta 3 — Top /time/ Sayfaları İçerik Kalitesi
**Hedef: Pozisyon 40-60 → Pozisyon 15-25 (sayfa 2 → sayfa 1-2 üstü)**

### Mevcut Sorun
`/time/singapore/london/` — 137 impression ama pos 48.
Kullanıcı "singapore london time difference" arıyor, biz görünüyoruz ama çok deriniz.

### Yapılacak: Top 20 /time/ sayfasına içerik zenginleştirme
Her sayfa için:

**1. H2 Soru Yapısı Ekle** (FAQ olarak kullanıcının arama niyetiyle eşleşir)
- "How many hours is Singapore ahead of London?"
- "What is the best time to call Singapore from London?"
- "Does the Singapore–London time difference change?"

**2. FAQ JSON-LD Schema**
Bunu zaten TZ pair sayfalarında yaptık. /time/ sayfalarına da ekleyelim.

**3. Meta Description CTR Optimizasyonu**
Şu an: muhtemelen generic
Hedef: "Singapore is **X hours ahead** of London right now. Best call window: 9-11 AM London. Live clock ↗"

**Öncelikli sayfalar (volume + position kombine):**
1. /time/singapore/london/ (137 imp, pos 48)
2. /time/london/sydney/ (112 imp, pos 58)
3. /time/new-york/london/ (110 imp, pos 56)
4. /time/sydney/london/ (98 imp, pos 58)
5. /time/los-angeles/london/ (60 imp, pos 36)

---

## Hafta 4 — İçerik Genişleme: DST Cluster + Daha Fazla TZ Pair
**Hedef: DST seasonal trafiğini yakala + TZ pair coverage'ı genişlet**

### 4.1 — DST Country Cluster
Ana sayfamız var: `/daylight-saving-time/`
Şimdi: alt cluster sayfaları

- `/daylight-saving-time/usa/` — "daylight saving time usa 2026" (yüksek hacim, seasonal)
- `/daylight-saving-time/uk/` — UK farklı tarihte geçiyor
- `/daylight-saving-time/europe/` — AB ülkeleri
- `/daylight-saving-time/australia/` — Güney yarımküre = Mart'ta bitiyor

Bu sayfalar timeanddate.com'un en güçlü DST trafiğine direkt rakip olur.

### 4.2 — Daha Fazla TZ Abbreviation Pair
Şu an: PST↔EST, GMT↔EST, CST↔EST, IST↔EST, CST↔PST, EST↔GMT

Eklenecek:
- `ist-to-pst` — IST to Pacific (Hint-Silikon Vadisi koridoru, çok aranıyor)
- `ist-to-cst` — IST to Central
- `ist-to-gmt` — IST to UK
- `aest-to-est` — Australia to US East
- `jst-to-est` — Japan to US East
- `cet-to-est` — Central European to US East

---

## Aylık Başarı Metrikleri

### GSC (1 Ay Sonra Bakılacaklar)
| Metrik | Şimdi | Hedef |
|--------|-------|-------|
| Aylık tıklamalar | 6 | 150+ |
| Aylık gösterimler | 12,739 | 50,000+ |
| Sayfa 1'deki sayfa sayısı (top 10) | 0 | 10+ |
| Sayfa 2'deki sayfa sayısı (top 20) | ~5 | 40+ |
| India sorgularında görünürlük | sıfır | Mevcut |
| /time/ pair tıklamaları | 1 | 50+ |

### Takip Edilecek Özel Sorgular (GSC'de bakılacak)
1. "time in india" — şu an yok, hedef: top 20
2. "singapore london time difference" — pos 48 → hedef: pos 15
3. "new york london time difference" — pos 56 → hedef: pos 15
4. "pst to est" — şu an belirsiz → hedef: top 10
5. "daylight saving time usa 2026" — şu an yok → hedef: top 20

---

## Yapılmayacaklar (1 Ay İçin)

- ❌ "what time is it" (1.5M hacim) — time.is, timeanddate.com çok güçlü. Şu an için rekabet edemeyiz.
- ❌ "calendar" (3.35M) — timeanddate.com'un kalesi, alakasız.
- ❌ "timer/stopwatch" — yanlış ürün kategorisi.
- ❌ Yeni şehir sayfaları eklemek — yeterince var, kalite artırmak lazım.
- ❌ Link building kampanyası — henüz içerik kalitesi yeterli değilken bekleme.

---

## Neden Bu Strateji?

1. **`/time/` sayfaları organik ivmemiz.** Google onları indexledi, anladı, gösteriyor. Sadece çok derindeler. Küçük kalite iyileştirmeleri = big position jumps.

2. **India time tek bir sayfayla 50K+ trafik getirebilir.** Rakiplerin hepsinin bunu nasıl yakaladığına bakıyoruz — biz aynısını yapabiliriz.

3. **Long-tail time difference sorguları bizim için çalışıyor.** "bombay and cairo time difference" pos 17. Bunu sayfa 1'e çıkarmak = traffic.

4. **Teknik sorunlar sinyalleri kötüleştiriyor.** 16 broken link, duplicate titles — bunlar "bu site kaliteli değil" diyor Google'a.

---

## 1 Ay Sonraki Analiz Toplantısı İçin Checklistesi

- [ ] India time sayfası indexlendi mi?
- [ ] /time/ top 8 sayfası sayfa 1-2'ye çıktı mı?
- [ ] Broken link sayısı sıfıra indi mi?
- [ ] Toplam tıklama 150'yi geçti mi?
- [ ] Hangi yeni sorgular GSC'de belirdi?
- [ ] TZ pair sayfaları impression almaya başladı mı (PST→EST vb.)?
- [ ] India sorgularında ilk görünürlük var mı?
