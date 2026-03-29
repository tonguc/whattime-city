# CLAUDE.md — whattime.city Project Memory

Bu dosya oturumlar arası hafıza kaybını önlemek için tutulur.
**Her yeni oturumda önce bu dosyayı oku. Bir şey "eksik" gibi görünüyorsa önce kodu kontrol et.**
**CLAUDE.md'yi her oturum sonunda güncelle. Yapılan her şeyi buraya ekle.**

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
   - **Bu adım atlanamaz.**

2. **SERP Verisi — İKİNCİ** (`/data/seo-intel/serp_results.json`)

3. **GSC Verisi — ÜÇÜNCÜ** (`/data/seo-intel/gsc_pages.json`, `gsc_queries.json`)

4. **Sayfa yaz** — Ancak yukarıdaki 3 adım tamamlandıktan sonra.

### SEO Framework
- SERP clustering (%60+ overlap = aynı cluster = tek sayfa)
- Featured snippet hedefi: kısa cevap + soru başlıkları + FAQ schema
- Her karar veri ile desteklenmeli, tahmin yok

**⚠️ CSV'ler stale olabilir.** `duplicate_title_tags.csv`, `broken_links.csv` gibi dosyalar eski crawl'dan gelebilir. Kodu her zaman doğrudan kontrol et, CSV'ye körü körüne güvenme.

---

## Site Mimarisi — Genel Bakış

### Route Tipleri
| Tip | Pattern | Açıklama |
|-----|---------|----------|
| **Şehir sayfası** | `/[city]/` | 2000+ şehir, dinamik route |
| **Şehir guide'ları** | `/[city]/guide/*` | Her şehir için rehber alt sayfaları |
| **Şehir güneş** | `/[city]/sun/` | Sunrise/sunset sayfaları |
| **Ülke/eyalet saatı** | `/india/`, `/japan/`, `/california/` vb. | Standalone ClockClient sayfaları |
| **TZ converter** | `/pst-to-est/` vb. | 62+ converter sayfası, ConverterPageShell kullanır |
| **DST cluster** | `/daylight-saving-time/*` | Ana hub + 8 bölge + countries tablosu |
| **Araçlar** | `/meeting/`, `/time-converter/` vb. | Interaktif araçlar |
| **Bilgi sayfaları** | `/eastern-time-zone/` vb. | TZ açıklayıcı sayfalar |
| **Makaleler** | `/articles/*` | Uzun form SEO içerikleri |

---

## Tamamlanan İşler

### 1. Ülke/Eyalet Standalone Sayfaları ✅
**236 ClockClient** — Afghanistan → Zimbabwe arası tüm ülkeler + tüm ABD eyaletleri.
Her biri renkli banner (UTC offset'e göre renk kodu), live saat, quick facts, önemli şehirler grid'i içeriyor.

**Banner renk kodu (UTC offset'e göre):**
- `bg-blue-700` — Amerika (UTC-12 → UTC-5)
- `bg-cyan-600` — Karayipler/Atlantik (UTC-4 → UTC-1)
- `bg-emerald-600` — Avrupa/Afrika (UTC 0 → UTC+2)
- `bg-amber-600` — Orta Doğu/Güney Asya (UTC+3 → UTC+5:30)
- `bg-red-700` — Doğu/GD Asya (UTC+6 → UTC+9)
- `bg-purple-700` — Okyanusya/Pasifik (UTC+10 → UTC+14)

**Özel hub sayfaları (CountryFactsSection + HubPageLayout):**
- `/india/` ✅ — IST UTC+5:30, 11 FAQ
- `/pakistan/` ✅ — PKT UTC+5
- `/bangladesh/` ✅ — BST UTC+6
- `/sri-lanka/` ✅
- `/nepal/` ✅ — NPT UTC+5:45

### 2. TZ Converter Sayfaları (62 sayfa) ✅ — ConverterPageShell kullanır
```
aest↔{cst,est,gmt,mst,pst,utc}     bst↔{cst,est,pst}
cet↔{cst,est,gmt,ist,pst}          cst↔{est,gmt,mst,pst,utc}
est↔{cst,gmt,mst,pst,utc}          gmt↔{cst,est,ist,mst,pst}
ist↔{cet,cst,est,gmt,jst,mst,pst,utc}   jst↔{cst,est,gmt,ist,mst,pst,utc}
mst↔{cst,est,gmt,pst,utc}          pst↔{cst,est,gmt,mst,utc}
utc↔{cst,est,ist,jst,mst,pst}
```
**Yeni converter eklenecekse yeni pair olmalı — bunlar zaten yapılmış.**

### 3. DST Sayfaları ✅ — Tümü tamamlandı
- `/daylight-saving-time/` — ana hub
- `/daylight-saving-time/[region]/` — usa, uk, europe, australia, canada, new-zealand, mexico
- `/daylight-saving-time/countries/` — tüm ülkeler tablosu

### 4. City Guide Sistemi ✅ — `/[city]/guide/*`
**Ortak fallback bileşenlerle:** `holidays/`, `call-times/`, `business-hours/`, `best-time-to-visit/`, `digital-nomad/`, `remote-work/`, `travel-guide/`, vb.

**Özel city-specific bileşenler:**
| Şehir | holidays | call-times | business-hours |
|-------|----------|------------|----------------|
| London | ✅ | ✅ | ✅ |
| Tokyo | ✅ | ✅ | — |
| Dubai | ✅ | ✅ | ✅ |
| Singapore | ✅ | ✅ | ✅ |
| Paris | ✅ | ✅ | ✅ |
| Sydney | ✅ | ✅ | ✅ |
| Istanbul | ✅ | ✅ | — |
| Los Angeles | ✅ | ✅ | ✅ |
| New York | ✅ | ✅ | — |

**Guide URL 301 redirectler next.config.js'te var:**
- `best-time-to-call/` → `call-times/`
- `public-holidays/` → `holidays/`

### 5. SEO Data Dosyaları ✅ — `data/seo/*.json` (101 dosya)
abidjan, amsterdam, ankara, athens, atlanta, baghdad, bali, bangkok, beijing, berlin,
boston, bratislava, bridgetown, brussels, buenos-aires, cairo, calgary, charlotte,
chennai, chicago, chisinau, copenhagen, cornwall, costa-rica, cotswolds, dakar, dallas,
delhi, denizli, denver, doha, dubai, fiji, frankfurt, geneva, havana, hong-kong,
houston, indianapolis, istanbul, izmir, jakarta, johannesburg, kansas-city, karachi,
kuala-lumpur, las-vegas, london, los-angeles, louisville, madrid, male, manila, maputo,
marrakech, melbourne, mexico-city, miami, milan, monrovia, montreal, moscow, mumbai,
munich, nairobi, new-york, nozawa-onsen, oslo, otaru, paris, phoenix, prague, quito,
reykjavik, rio-de-janeiro, rome, san-jose-cr, san-salvador, sao-paulo, seattle, seoul,
shanghai, singapore, skopje, sofia, stockholm, sydney, tashkent, tbilisi, tehran,
tirana, tokyo, toronto, tunis, vancouver, vienna, washington-dc, windhoek, zurich

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
- `/articles/how-many-hours-in-a-year/` — 1M vol, SD ~29
- `/articles/how-many-seconds-in-a-year/` — 301K vol
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
### 17. Days From Today / Days Ago Individual Sayfalar ✅ (Mart 2026)
**Rakip gap:** time.now bu sorgularda dominant, timeanddate yok. SD 15-22 = çok düşük rekabet.

- `/days-from-today/[days]/page.tsx` — 20 sayfa pre-generate
- `/days-ago/[days]/page.tsx` — 20 sayfa pre-generate
- Her sayfa: FAQPage + BreadcrumbList schema, featured snippet answer box
- `revalidate = 86400` — günlük yenileme (tarihler güncel kalsın)
- `/days-from-today/` hub'a internal link grid eklendi (crawling için)

**Pre-generated day counts:** 7, 8, 10, 14, 15, 17, 20, 22, 25, 29, 30, 42, 45, 60, 90, 100, 120, 150, 180, 365

**Hedef sorgular:**
- "180 days from today" — 90K vol, SD 17
- "15 days from today" — 40K vol, SD 19
- "90 days ago" — 33K vol, SD 15
- "60 days from now" — 27K vol, SD 22
- "30 days today" — 301K vol, SD 38

### 18. Tool Page Container + Sunrise-Sunset Dark Mode Fix ✅ (Mart 2026)

**Container genişlik sorunu (6 sayfa):**
- Sorun: client bileşenler içinde `max-w-3xl/4xl mx-auto px-4 py-8` vardı; `ContentPageWrapper`'ın `max-w-6xl`'i içinde double-daraltıyordu
- Düzeltme: inner container → `w-full space-y-8` (max-w ve mx-auto kaldırıldı)
- Etkilenen sayfalar: `PrayerTimesClient`, `TodaysDateClient`, `TimerClient`, `CountdownClient`, `DateCalculatorClient`, `DaysFromTodayClient`

**Sunrise-sunset dark mode:**
- Sorun: `SunriseSunsetClient` tüm `bg-white`, `border-slate-100`, `text-slate-*` hardcoded light — dark modda beyaz kartlar görünüyordu
- Düzeltme: `useCityContext()` eklendi, tüm renkler `isLight` conditional'a çevrildi
- Kartlar, tablolar, input, dropdown, şehir linkleri, SEO section, FAQ — hepsi artık tema duyarlı

**⚠️ Kural: Tool client bileşenlerinde inner max-w kullanma.**
`ContentPageWrapper` zaten `max-w-6xl` veriyor. Client bileşenler sadece `w-full` veya bare div kullanmalı.

### 19. How Many Hours/Seconds/Months in a Year Makaleleri ✅ (Mart 2026)

- `/articles/how-many-hours-in-a-year/` — 1M vol, SD ~29
  8,760 (regular) / 8,784 (leap), monthly breakdown, working hours, time unit table, year-by-year 2024–2030
- `/articles/how-many-seconds-in-a-year/` — 301K vol
  31,536,000 seconds, step-by-step calculation, monthly/unit tables, fun context (heartbeats, light-year)
- `/articles/how-many-months-in-a-year/` — 33K vol, SD 22
  12 months, days per month table, quarter grid, month name origins, memory tricks
- Her biri: Article + FAQPage + BreadcrumbList JSON-LD schema
- `/articles/` hub güncellendi

---

## Design System — Tema Kuralları

### ❌ ASLA `dark:` Tailwind Variant Kullanma
`dark:bg-slate-800` vb. çalışmaz. **`useCityContext()` kullan.**

### ✅ Doğru Kullanım
```tsx
'use client'
import { useCityContext } from '@/lib/CityContext'
const { theme, isLight } = useCityContext()
```

### Tema Modları
| Mod | isLight | theme.card | theme.text |
|-----|---------|------------|------------|
| `day`, `light` | **true** | `border border-slate-100 bg-white` | `text-slate-800` |
| `night`, `dark`, `dawn`, `dusk` | false | `border border-slate-700/50 bg-slate-800/60` | `text-slate-100` |

### Sık Kullanılan Pattern'lar
```tsx
// Nested kart
const nestedCard = isLight
  ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
  : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'

// Footer/bilgi kutusu
const footer = isLight
  ? 'rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500'
  : 'rounded-xl border border-slate-700/50 p-4 bg-slate-800/50 text-xs text-slate-400'
```

### Font Kuralı
- Saat/rakam: `tabular-nums` — `font-mono` KULLANMA

---

## Bileşen Mimarisi

### ConverterPageShell — TZ converter sayfaları için
```tsx
<ConverterPageShell
  title="PST to EST Converter"
  subtitle={<>Pacific → Eastern · PST is <strong>3 hours behind</strong> EST</>}
  config={config}
  infoTitle="PST vs EST"
  infoBody={<>...</>}
  faqSchema={faqSchema}
/>
```

### HubPageLayout + CountryFactsSection — Ülke hub sayfaları için
```tsx
<HubPageHeader title="Current Time in India" subtitle="IST · UTC+5:30 · No DST" />
<IndiaClockClient />
<CountryFactsSection hubSlug="india" />
<HubPageLayout faqItems={...} links={...} />
```

### HeroClockDisplay — Live saat
```tsx
<HeroClockDisplay tz="Asia/Kolkata" countryCode="IN" countryName="India" tzLabel="IST · UTC+5:30" />
```

---

## Bilinen Veri Sorunları (düzeltildi)

- `santarem-pa` data: Marabá'nın info'su kopyalanmıştı → düzeltildi (phone +55 93, doğru attractions)
- 29 seo_title çok uzundu (55-68 char) → hepsi ≤42 char'a kısaltıldı

---

## Açık Konular / Sonraki İzleme

- [ ] GSC'de 4 hafta sonra etki ölçümü (baseline: 12,739 imp, 6 click, 0 top-10)
- [ ] singapore/london (137 imp pos 48), new-york/london (110 imp pos 56) takibi
- [ ] Top city pages içerik derinliği: moscow, berlin, paris, shanghai (pos 60+ ama yüksek impression)
- [ ] CTR iyileşmesi: "City N Hours Ahead" title formatı etkisi
- [ ] "how many hours/seconds in a year" — indexlenme ve ranking takibi (1M + 301K vol)

---

## Git Workflow
- Feature branch: `claude/plan-next-actions-ONJ8y` (bu oturum bitti, merge edildi)
- Squash merge to main
- Yeni oturumda yeni branch aç: `claude/[konu]-[id]`
