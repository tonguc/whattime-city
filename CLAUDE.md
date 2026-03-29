# CLAUDE.md — whattime.city Project Memory

Bu dosya oturumlar arası hafıza kaybını önlemek için tutulur.
**Her yeni oturumda önce bu dosyayı oku. Bir şey "eksik" gibi görünüyorsa önce kodu kontrol et.**

---

## ⚠️ KRİTİK: İÇERİK YAZMA KURALLARI (ASLA ATLANMAZ)

**SEO kararlarında tahmin veya genel bilgi KULLANMA. Her zaman gerçek veriyi önceliklendir.**

### Veri Öncelik Sırası — Her Sayfa İçin Zorunlu

Herhangi bir sayfa veya içerik yazmadan önce **bu sırayla** veri toplanır:

1. **Ubersuggest CSV'leri — HER ZAMAN ÖNCE** (`/seo-data-upload/*.csv`)
   - `ubersuggest timeanddate.com.csv` — ana rakip keyword'leri + hacimler
   - `ubersuggest 24timezones.com.csv`, `ubersuggest thetimenow.com.csv`, `ubersuggest time.is.csv`, `ubersuggest time.now.csv`
   - `competitors_data_for_whattime.city.csv`
   - `broken_links.csv`, `duplicate_title_tags.csv`, `duplicate_meta_descriptions.csv`
   - `Sorgular.csv`, `Sayfa sayısı.csv` (GSC export)
   - Hedef keyword'ün volume'unu doğrula, rakiplerin pozisyonlarını çıkar, ilgili cluster'ları bul
   - **Bu adım atlanamaz. "Rakip verisi önemliydi" demek kabul edilemez.**

2. **SERP Verisi — İKİNCİ** (`/data/seo-intel/serp_results.json`)
   - Featured snippet / answer box var mı?
   - PAA soruları neler?
   - Top 5 organik sonuç hangi siteler? Güçlü mü zayıf mı?
   - SERP tipi: tool/converter mu, informational mı, widget mı?

3. **GSC Verisi — ÜÇÜNCÜ** (`/data/seo-intel/gsc_pages.json`, `gsc_queries.json`)
   - Mevcut sayfamız bu keyword'de görünüyor mu?
   - Impression var mı, pozisyon kaç?
   - `competitor_timeanddate_com.json` vb. rakip JSON dosyaları

4. **Sayfa yaz** — Ancak yukarıdaki 3 adım tamamlandıktan sonra.

### SEO Framework (her içerik kararında uygulanır)
- SERP clustering (%60+ overlap = aynı cluster = tek sayfa)
- Competitor page analizi (H1/H2, içerik bölümleri, PAA yanıtları)
- Gap analizi: rakiplerin vermediği değeri ver
- Featured snippet hedefi: kısa cevap + soru başlıkları + FAQ schema
- Her karar veri ile desteklenmeli, tahmin yok

**Yeni içerik yazarken:** Önce ilgili CSV'yi oku → hangi keyword'ler yüksek hacimli → o keyword'lere göre yaz.
**Yeni sayfa eklerken:** GSC'de bu konuda impression var mı → pozisyon nerede → rakipler ne yapıyor.
**Hiçbir zaman:** Kafadan keyword hacmi tahmin etme, rakiplerin yazdıklarını okumadan içerik üretme.

---

## Site Mimarisi — Genel Bakış

### Route Tipleri
| Tip | Pattern | Açıklama |
|-----|---------|----------|
| **Şehir sayfası** | `/[city]/` | 400+ şehir, dinamik route, SEO data ile zenginleştirilmiş |
| **Şehir guide'ları** | `/[city]/guide/*` | Her şehir için rehber alt sayfaları |
| **Ülke/eyalet saatı** | `/india/`, `/japan/`, `/california/` vb. | Özel ClockClient + HubPageLayout ile standalone sayfalar |
| **TZ converter** | `/pst-to-est/` vb. | 62 converter sayfası, ConverterPageShell kullanır |
| **DST cluster** | `/daylight-saving-time/*` | Ana hub + 7 bölge + countries tablosu |
| **Araçlar** | `/meeting/`, `/time-converter/`, `/flight-time/` vb. | Interaktif araçlar |
| **Bilgi sayfaları** | `/eastern-time-zone/`, `/military-time/` vb. | TZ açıklayıcı sayfalar |

---

## Tamamlanan İşler

### 1. Ülke/Eyalet Standalone Sayfaları
Her ülke ve ABD eyaleti kendi `ClockClient.tsx` + `page.tsx` dosyasına sahip.
**180+ sayfa** — Afghanistan'dan Zimbabwe'ye kadar her ülke, Alabama'dan Wisconsin'e kadar her eyalet.
Tüm bu sayfalar `HeroClockDisplay` bileşeniyle live saat gösterir.

**Özel içerikli hub sayfaları (CountryFactsSection + HubPageLayout):**
- `/india/` ✅ — IST UTC+5:30, 11 FAQ, no DST vurgusu
- `/pakistan/` ✅ — PKT UTC+5
- `/bangladesh/` ✅ — BST UTC+6
- `/sri-lanka/` ✅
- `/nepal/` ✅ — NPT UTC+5:45

### 2. TZ Converter Sayfaları (62 sayfa) — ConverterPageShell kullanır
```
aest↔{cst,est,gmt,mst,pst,utc}     bst↔{cst,est,pst}
cet↔{cst,est,gmt,ist,pst}          cst↔{est,gmt,mst,pst,utc}
est↔{cst,gmt,mst,pst,utc}          gmt↔{cst,est,ist,mst,pst}
ist↔{cet,cst,est,gmt,jst,mst,pst,utc}   jst↔{cst,est,gmt,ist,mst,pst,utc}
mst↔{cst,est,gmt,pst,utc}          pst↔{cst,est,gmt,mst,utc}
utc↔{cst,est,ist,jst,mst,pst}
```
**ÖNEMLİ:** Bunlar zaten yapılmış. Yeni converter eklenecekse yeni pair olmalı.

### 3. DST Sayfaları — Tümü tamamlandı
- `/daylight-saving-time/` — ana hub ✅
- `/daylight-saving-time/usa/` ✅
- `/daylight-saving-time/uk/` ✅
- `/daylight-saving-time/europe/` ✅
- `/daylight-saving-time/australia/` ✅
- `/daylight-saving-time/canada/` ✅
- `/daylight-saving-time/new-zealand/` ✅
- `/daylight-saving-time/mexico/` ✅ (2022'de kaldırıldı — SEO açısı)
- `/daylight-saving-time/countries/` ✅ (tüm ülkeler tablosu)

### 4. City Guide Sistemi — `/[city]/guide/*`
**Her şehir için ortak guide sayfaları** (generic fallback bileşenlerle):
- `holidays/` — tatil takvimi
- `call-times/` — en iyi arama saatleri
- `business-hours/` — iş saatleri
- `best-time-to-visit/`, `digital-nomad/`, `remote-work/`, `travel-guide/`, vb.

**Özel city-specific bileşenler olan şehirler:**

| Şehir | holidays | call-times | business-hours |
|-------|----------|------------|----------------|
| London | ✅ LondonHolidaysContent | ✅ LondonCallTimesContent | ✅ LondonBusinessHoursContent |
| Tokyo | ✅ TokyoHolidaysContent | ✅ TokyoCallTimesContent | — |
| Dubai | ✅ DubaiHolidaysContent | ✅ DubaiCallTimesContent | ✅ DubaiBusinessHoursContent |
| Singapore | ✅ SingaporeHolidaysContent | ✅ SingaporeCallTimesContent | ✅ SingaporeBusinessHoursContent |
| Paris | ✅ ParisHolidaysContent | ✅ ParisCallTimesContent | ✅ ParisBusinessHoursContent |
| Sydney | ✅ SydneyHolidaysContent | ✅ SydneyCallTimesContent | ✅ SydneyBusinessHoursContent |
| Istanbul | ✅ IstanbulHolidaysContent | ✅ IstanbulCallTimesContent | — |
| Los Angeles | ✅ LosAngelesHolidaysContent | ✅ LosAngelesCallTimesContent | ✅ LosAngelesBusinessHoursContent |
| New York | ✅ NewYorkHolidaysContent | ✅ NewYorkCallTimesContent | — |

### 5. SEO Data Dosyaları (data/seo/*.json)
Şu an JSON SEO data'sı olan şehirler:
amsterdam, ankara, atlanta, baghdad, beijing, berlin, boston, brussels, buenos-aires,
cairo, calgary, dallas, delhi, denver, dubai, frankfurt, geneva, havana, houston,
jakarta, johannesburg, kuala-lumpur, las-vegas, los-angeles, madrid, melbourne,
mexico-city, miami, milan, montreal, moscow, munich, oslo, paris, phoenix, prague,
rio-de-janeiro, rome, sao-paulo, **seattle** ✅, **singapore** ✅, shanghai,
stockholm, tehran, **tokyo** ✅, vancouver, vienna, washington-dc, zurich

### 6. TZ Açıklayıcı Sayfalar
- `/eastern-time-zone/` ✅
- `/central-time-zone/` ✅
- `/mountain-time-zone/` ✅
- `/pacific-time-zone/` ✅
- `/alaska-time-zone/` ✅
- `/hawaii-time-zone/` ✅
- `/us-time-zones/` ✅
- `/bst-timezone/` ✅
- `/cest-timezone/` ✅

**Title uzunluk kuralı:** `seo_title` ≤44 karakter olmalı (template " | whattime.city" = 16 char ekler → toplam ≤60).

### 6. TZ Açıklayıcı Sayfalar ✅
`/eastern-time-zone/`, `/central-time-zone/`, `/mountain-time-zone/`, `/pacific-time-zone/`,
`/alaska-time-zone/`, `/hawaii-time-zone/`, `/us-time-zones/`, `/bst-timezone/`, `/cest-timezone/`

### 7. TZ Kısaltma Hub Sayfaları ✅ — HubPageHeader ile
`/est/`, `/cst/`, `/pst/`, `/mst/`, `/gmt/`, `/utc/`, `/ist/`, `/cdt/`, `/edt/`, `/pdt/`
Her biri o TZ hakkında içerik + converter + FAQ içeriyor.

### 8. Ülke Zaman Sayfaları ✅ — `/country/`
- `/country/` — tüm ülkeler listesi (CountriesContent bileşeni)
- `/country/[country]/` — her ülke için saat + şehirler listesi
Ayrı standalone ClockClient'lardan farklı — bu route genel ülke-zaman sayfaları.

### 9. Araçlar ✅

Her araçta: **FAQPage + BreadcrumbList JSON-LD** var (aksi belirtilmedikçe).

| Araç | URL | Hedef keyword / hacim | Özellikler |
|------|-----|----------------------|------------|
| Meeting Planner | `/meeting/` | "meeting planner time zones" | Çok şehir seçimi, overlap görsel, paylaşılabilir link (/meet/) |
| Time Converter | `/time-converter/` | "time zone converter" | 400+ şehir, DST-aware date picker, gece yarısı geçiş göstergesi |
| Flight Time | `/flight-time/` | "flight time calculator" | Kalkış/varış şehri + süre → yerel varış saati, DST otomatik |
| Military Time | `/military-time/` | "military time" | 24h↔12h çevirici, tam tablo (0000–2359), live clock | FAQ var, breadcrumb yok |
| Days From Today | `/days-from-today/` | "days from today" | X gün sonrası/öncesi, preset (30/60/90/180), gün adı + hafta no |
| Date Calculator | `/date-calculator/` | "date calculator" (673K) | İki tarih arası: takvim günü, iş günü, hafta sonu ayrımı, preset'ler |
| Today's Date | `/todays-date/` | "today's date" (823K) | Tam tarih, haftanın günü, hafta no, yıl ilerlemesi, ISO/US/EU format |
| Calendar | `/calendar/` | "2026 calendar" (823K) | Yıllık takvim, ABD federal tatilleri, yıl navigasyonu, ay filtresi |
| Timer | `/timer/` | "online timer" (2.24M) | Countdown + stopwatch, lap times, alarm sesi, preset (1/5/10/25/60 dk) |
| Countdown | `/countdown/` | "countdown timer" (1.5M+) | 8 preset (NY/Noel/Halloween vb.), custom tarih/başlık, saniye hassasiyeti |
| Prayer Times | `/prayer-times/` | "prayer times [city]" (33K-60K, SD 15-21) | Fajr/Dhuhr/Asr/Maghrib/Isha, 7 hesap yöntemi, Shafi/Hanafi toggle, 7 günlük tablo, suncalc |
| Sunrise & Sunset | `/sunrise-sunset/` | "sunrise sunset times" (1M+) | Şehir seçici, dawn/dusk/solar noon, günlük güncelleme, suncalc |
| Alarm | `/alarm/` | "world alarm" | Dünya saati alarm kurma |
| Event Time | `/event-time/` | "event time" | Etkinlik zamanı planlama |
| Jet Lag Advisor | `/jet-lag-advisor/` | "jet lag" | Uçuş sonrası uyum önerileri |
| World Map | `/map/` | "time zone map" (2.7M) | Canlı dünya saat dilimi haritası |
| Embed Widget | `/widget/` | — | Site sahipleri için embed clock kodu |

**Paylaşım/özel sayfalar:**
- `/meet/` — SharedMeetingView (meeting planner paylaşım linki)
- `/embed/[city]/` — Şehir bazlı embeddable clock
- `/meeting-planner/` → `/meeting/` (301 redirect)

### 10. Makaleler ✅ — `/articles/*`
- `/articles/how-many-weeks-in-a-year/`
- `/articles/how-many-days-in-a-year/`
- `/articles/how-many-minutes-in-a-year/`
- `/articles/am-pm/`

### 11. Sunrise/Sunset ✅
- `/sunrise-sunset/` — hub sayfası (şehir seçici, suncalc ile hesaplama)
- `/[city]/sun/` — her şehir için individual sunrise/sunset sayfası

### 12. /time/ Pair Sayfaları ✅ — Tam içerik
- `app/time/[from]/[to]/page.tsx` — FAQPage + BreadcrumbList JSON-LD
- 26 city pair için PAIR_CONTEXTS (SSR, Google görür)
- Dynamic title: "CityA to CityB Time — CityB X Hours Ahead/Behind"

### 13. Alan Kodları ✅ — `/area-code/`
- `/area-code/` — hub sayfası (search, all codes)
- `/area-code/[code]/` — 272 individual code pages (US + Canada)
- Her sayfada: FAQPage + BreadcrumbList schema, live clock, DST info, related codes
- **Title pattern:** `${code} Area Code — ${city}, ${stateCode}` (≤33 chars, no parentheses)
- **Rakip fırsatı:** 24timezones.com bu alanda dominant (213: 673K, 929: 246K, 917: 246K, 347/437/202/754: 201K vol). Bizim sayfalar mevcut, indexlenmesi gerekiyor.

### 14. Blog / Guides ✅
- `/blog/` — Blog hub sayfası
- `/guides/` — Guides hub sayfası

### 15. Teknik SEO ✅
- Scroll-to-top butonu global (tüm sayfalarda)
- BreadcrumbList schema: /time/, DST, TZ info sayfaları
- `overflow-x: clip` — mobil sticky header düzeltmesi
- `/country/` sayfalarında breadcrumb navigasyon
- Arizona time page enriched (246K vol, `/arizona/`)

### 16. SEO Metadata Optimizasyonları ✅ (Mart 2026)
**Rakip analizinden** (24tz, timenow, timeis, timedotnow CSV'leri) gelen fırsatlar:

**Area code sayfaları:**
- Title format düzeltildi: `(213) Area Code — ... | Time Zone & Location` → `213 Area Code — Los Angeles, CA`
- Parentheses kaldırıldı, " | Time Zone & Location" kaldırıldı (title çok uzundu)

**"How many weeks in a year" (1M vol, SD 29):**
- `/articles/how-many-weeks-in-a-year/` — Article JSON-LD schema eklendi
- Title: 61 char → 41 char (`How Many Weeks in a Year? 52 Weeks (2026)`)
- time.now bu cluster'da pos 3-10 kazanıyor, timeanddate yok

**Converter sayfaları:**
- `pst-to-cst`: Bug fix — description "1 hour" → "2 hours behind" (PST UTC-8 vs CST UTC-6 = 2 saat)
- Tüm over-long titles düzeltildi (≤44 char kuralına uygun):
  - `pst-to-cst`: 46 → 36 chars
  - `pst-to-est`: 58 → 46 chars
  - `cst-to-est`: 60 → 46 chars
  - `est-to-cst`: 46 → 46 chars
  - `mountain-time-zone`: 59 → 48 chars

**Rakip keyword gaps (timenow kazanıyor, biz yok):**
- PST↔CST, EST↔CST, MST↔EST converters: 110K-135K vol, SD 34-55
- "mountain time" cluster: 301K vol, SD 22-55 — `/mountain-time-zone/` sayfamız var
- Bunlar var ama indexlenme ve authority meselesi

---

## Design System — Tema Kuralları

### ❌ ASLA `dark:` Tailwind Variant Kullanma
`dark:bg-slate-800`, `dark:text-white` vb. class'lar ÇALIŞMAZ.
Neden: `ContentPageWrapper` iç div'e `dark` class ekliyor ama Tailwind JIT bu class'ları üretmiyor.
**Bunun yerine `useCityContext()` kullan.**

### ✅ Doğru Kullanım
```tsx
'use client'
import { useCityContext } from '@/lib/CityContext'

const { theme, isLight } = useCityContext()
// theme.card, theme.text, theme.textMuted kullan
```

### 6 Tema Modu
| Mod | isLight | theme.card | theme.text | theme.textMuted |
|-----|---------|------------|------------|-----------------|
| `day` | **true** | `border border-slate-100 bg-white` | `text-slate-800` | `text-slate-500` |
| `light` | **true** | `border border-slate-100 bg-white` | `text-slate-800` | `text-slate-500` |
| `night` | false | `border border-slate-700/50 bg-slate-900/60` | `text-slate-100` | `text-slate-400` |
| `dark` | false | `border border-slate-700/50 bg-slate-800/60` | `text-slate-100` | `text-slate-400` |
| `dawn` | false | `border border-slate-700/50 bg-slate-800/60` | `text-slate-100` | `text-slate-400` |
| `dusk` | false | `border border-slate-700/50 bg-slate-800/60` | `text-slate-100` | `text-slate-400` |

**isLight = true SADECE `day` ve `light` modlarında.**

### Nested Kart (kart içinde kart)
```tsx
const nestedCardClass = isLight
  ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
  : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
```

### Footer / Bilgi Kutusu
```tsx
const footerClass = isLight
  ? 'rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500'
  : 'rounded-xl border border-slate-700/50 p-4 bg-slate-800/50 text-xs text-slate-400'
```

### Font Kuralı
- Saat/rakam: `tabular-nums` kullan — `font-mono` KULLANMA

---

## Bileşen Mimarisi

### ConverterPageShell — TZ converter sayfaları için
`'use client'` bileşeni, `useCityContext()` içeride kullanır.
```tsx
import ConverterPageShell from '@/components/ConverterPageShell'
import type { TZPairConfig } from '@/components/TZPairClient'

<ConverterPageShell
  title="PST to EST Converter"
  subtitle={<>Pacific → Eastern · PST is <strong>3 hours behind</strong> EST</>}
  config={config}
  infoTitle="PST vs EST — West Coast to East Coast"
  infoBody={<>...</>}
  extraSections={[{ title: "Reference Table", content: <table>...</table> }]}
  faqSchema={faqSchema}
/>
```

### ContentPageWrapper — İçerik sayfaları için wrapper
Tema context'ini sağlar. Server component olabilir.

### HubPageLayout + HubPageHeader + CountryFactsSection
Ülke hub sayfaları için (india, pakistan vb.):
```tsx
<HubPageHeader title="Current Time in India" subtitle="IST · UTC+5:30 · No DST" />
<IndiaClockClient />
<CountryFactsSection hubSlug="india" />
<HubPageLayout faqItems={...} links={...} linksTitle="..." footerText="..." />
```

### HeroClockDisplay — Live saat bileşeni
```tsx
<HeroClockDisplay tz="Asia/Kolkata" countryCode="IN" countryName="India" tzLabel="IST · UTC+5:30" />
```

---

## Roadmap — Tamamlanan Maddeler (Bu Oturum)

### ✅ Tamamlandı
- [x] Full site teknik SEO audit — tüm `ssr: false` sorunu tespit ve düzeltme
- [x] `/time/` pair sayfaları title+meta optimize:
  - "Current Time Difference" → "City N Hours Ahead/Behind"
  - UTC offset labels description'a eklendi
  - `other:` alanı temizlendi (redundant schema gürültüsü)
- [x] Broken guide links fix — Miami, GuidePreview.tsx + CityGuideCard.tsx'e eklendi
- [x] Top 20 `/time/` sayfasına içerik zenginleştirme:
  - 26 city pair için PAIR_CONTEXTS lookup eklendi (SSR, Google görür)
  - singapore/london, london/sydney, new-york/london, sydney/london, la/london vb.
  - Her pair için: DST davranışı, UTC offset'ler, iş koridoru bilgisi
- [x] `ist-to-pst`, `ist-to-cst`, `ist-to-gmt`, `aest-to-est`, `jst-to-est`, `cet-to-est` — ZATEN MEVCUTTU
- [x] BreadcrumbList schema — zaten mevcut (`<script>` tag JSX'te, satır 267-270)
- [x] DST cluster — ZATEN TAMAMLANMIŞTI (usa/uk/europe/australia/canada/nz/mexico/countries)
- [x] India time hub — ZATEN MEVCUTTU (/india/page.tsx)

### ⏳ Sonraki İzleme
- [ ] 4 hafta sonra GSC'de etki ölçümü: pos 40-60 sayfaları → hedef pos 15-25
- [ ] singapore/london (137 imp), new-york/london (110 imp) takibi
- [ ] CTR iyileşmesi: "City N Hours Ahead" title formatı etkisi

---

## Git Workflow
- Feature branch: `claude/review-seo-analysis-sBM2v`
- Squash merge to main
- Her squash merge sonrası branch'i senkronize et:
  ```bash
  git fetch origin main && git reset --hard origin/main && git push --force-with-lease origin claude/review-seo-analysis-sBM2v
  ```
