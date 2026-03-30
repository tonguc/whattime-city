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
- [ ] "how many hours/seconds in a year" — indexlenme ve ranking takibi (1M + 301K vol)

---

### 33. Title Length Mass Fix + Atlanta/Nairobi AI SEO ✅ (Mart 2026)

**Sorun:** 100+ static page.tsx dosyasında `metadata.title` > 60 char toplam (template +16 dahil).
**Fix:** Tüm >70 total char olan sayfalar düzeltildi. 0 sayfa >70 total kaldı.
- New Zealand: 89→44 chars, Michigan: 87→40, Arizona: 80→52, Virginia: 78→41
- Florida: 64→40 chars (AI SEO first sentence da eklendi)
- Converter pages: BST→, JST→, AEST→, CET→ series — hepsi kısaltıldı
- Country pages: Spain, Chile, Canada, South Africa, Poland, Iran, Greece, Netherlands, Ukraine, Pennsylvania, Russia, UK, Turkey, Ohio, Georgia State, Portugal, Australia, Argentina

**Atlanta SEO JSON (`data/seo/atlanta-seo.json`):**
- AI SEO first sentence eklendi: "Atlanta, Georgia, USA uses Eastern Standard Time (EST, UTC-5)..."
- Duplicate root-level @context/mainEntity temizlendi
- IANA identifier eklendi: America/New_York

**Nairobi SEO JSON (`data/seo/nairobi-seo.json`):**
- AI SEO first sentence eklendi: "Nairobi, Kenya uses East Africa Time (EAT, UTC+3) year-round..."
- IANA identifier eklendi: Africa/Nairobi

**8 SEO JSON seo_title >44 char fix:**
- sydney, paris, karachi, indianapolis, louisville, bali, new-york, cornwall

### 34. Sitemap Güncellemesi ✅ (Mart 2026)
- `/stopwatch/` eklendi (0.9 priority)
- `/days-ago/` eklendi (0.8)
- `/days-from-today/[d]/` × 20 sayfa eklendi (0.7, daily)
- `/days-ago/[d]/` × 20 sayfa eklendi (0.7, daily)
- `how-many-hours-in-a-year`, `how-many-seconds-in-a-year`, `how-many-months-in-a-year` articles eklendi

### 35. Hours-Ago / Hours-From-Now Cluster ✅ (Mart 2026)
- `/hours-ago/` hub page + `/hours-ago/[hours]/` — 19 pre-generated (1-72h)
  Target: "what time was it 9 hours ago" (27K vol, SD 15-16)
- `/hours-from-now/` hub page + `/hours-from-now/[hours]/` — 19 pre-generated
  Target: "what time will it be in X hours" cluster
- `revalidate = 3600` — hourly revalidation (times must be current)
- Orange color scheme for ago, green for from-now
- Sitemap updated with hub pages + all 38 individual pages (hourly changeFreq)

### 36. 20+ Yeni SEO JSON Dosyaları ✅ (Mart 2026)
Ubersuggest CSV analizi sonucu (SD<35, vol>10K):

**Yeni şehirler:**
- `brasilia-seo.json` (60K vol, SD 27): BRT UTC-3, America/Sao_Paulo
- `perth-seo.json` (33K vol, SD 24): AWST UTC+8, no DST, 2009 referendum
- `new-orleans-seo.json` (40K vol, SD 25-29): CST/CDT, America/Chicago
- `dublin-seo.json` (74K vol, SD 33): GMT/IST, Europe/Dublin, tech hub
- `tel-aviv-seo.json` (74K vol, SD 33): IST UTC+2/IDT UTC+3, Sun-Thu work week
- `cancun-seo.json` (49.5K vol, SD 28): UTC-5 year-round (no DST since 2015!)
- `lisbon-seo.json`: WET UTC+0/WEST UTC+1, 1h behind Madrid, Web Summit
- `beirut-seo.json`: EET UTC+2/EEST UTC+3, Asia/Beirut
- `salt-lake-city-seo.json` (49.5K vol, SD 30): MST/MDT, America/Denver
- `orlando-seo.json` (40.5K vol, SD 33): EST/EDT, Disney context
- `minneapolis-seo.json` (49.5K vol, SD 34): CST/CDT, Fortune 500 context
- `san-antonio-seo.json` (49.5K vol, SD 34): CST/CDT, military/tourism context
- `taipei-seo.json` (49.5K vol, SD 28): CST UTC+8, no DST since 1979, TSMC
- `casablanca-seo.json`: WET/WEST, unique Ramadan DST suspension
- `cape-town-seo.json` (22K vol, SD 22): SAST UTC+2, no DST, Africa/Johannesburg
- `auckland-seo.json`: NZST UTC+12/NZDT UTC+13, southern hemisphere DST
- `riyadh-seo.json` (49.5K vol, SD 28): AST UTC+3, no DST, Sun-Thu work week
- `bangalore-seo.json`: IST UTC+5:30, Silicon Valley of India, TSMC/Infosys
- `san-francisco-seo.json` (49.5K vol, SD 24)
- `portland-seo.json`, `austin-seo.json`, `detroit-seo.json`
- `bogota-seo.json`: COT UTC-5, no DST, aligns with NYC EST in winter
- `warsaw-seo.json`: CET/CEST, GPW stock exchange
- `lima-seo.json`: PET UTC-5, no DST, America/Lima
- `budapest-seo.json`: CET/CEST, automotive industry
- `santiago-seo.json`: CLT UTC-4/CLST UTC-3, southern hemisphere DST
- `lagos-seo.json`: WAT UTC+1, no DST, Africa's largest city, NGX
- `amman-seo.json`: EET UTC+2/EEST UTC+3, Friday DST transitions

**Title uzunluk fix (bu oturumda):**
- auckland, austin, budapest, cairo, casablanca, costa-rica, detroit, fiji, portland
- "Now" removed from: cairo, costa-rica, fiji

### 37. AI SEO First Sentence Format Fixes ✅ (Mart 2026)
- beijing: "Beijing, China uses China Standard Time (CST, UTC+8)..."
- delhi: "New Delhi, India uses India Standard Time (IST, UTC+5:30)..."
- hong-kong: "Hong Kong uses Hong Kong Time (HKT, UTC+8)..."
- singapore: "Singapore uses Singapore Standard Time (SGT, UTC+8)..."
- indianapolis, louisville: "City, IN/KY, USA uses EST (UTC-5)..."
- tehran: "Tehran, Iran uses Iran Standard Time (IRST, UTC+3:30)..."

### 38. PAIR_CONTEXTS 56→64 ✅ (Mart 2026)
New pairs: los-angeles↔new-york, san-francisco↔berlin, sydney↔zurich, miami↔chicago

---

## Açık Konular / Sonraki Adımlar

- [ ] DST clock change (673K vol, SD 24) — `/daylight-saving-time/` meta already good, monitor GSC
- [ ] Sunrise/sunset "what time does sun set today" (201K vol, SD 19) — meta updated, monitor
- [ ] Hours-ago/hours-from-now pages — need 4 weeks to index and appear in GSC
- [ ] Santiago, Lagos, Amman, Budapest, Warsaw, Lima, Bogota SEO JSONs need indexing
- [ ] Cape Town, Auckland, Riyadh, Bangalore, Taipei SEO JSONs — monitor rankings
- [ ] Remaining tier 2 cities without SEO JSON: abuja, accra, addis-ababa, algiers, baku,
  baltimore, dhaka, edinburgh, guadalajara, hanoi, islamabad, khartoum, kinshasa,
  lahore, lusaka

---

## Git Workflow
- Feature branch: `main` (working directly)
- Yeni oturumda yeni branch aç: `claude/[konu]-[id]`
