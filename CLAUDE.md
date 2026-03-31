# CLAUDE.md — whattime.city Project Memory

Bu dosya oturumlar arası hafıza kaybını önlemek için tutulur.
**Her yeni oturumda önce bu dosyayı oku. Bir şey "eksik" gibi görünüyorsa önce kodu kontrol et.**

---

## 🚀 KRİTİK: PERFORMANS KRİTERLERİ (HER DEĞİŞİKLİKTE KORU)

**Mevcut durum (31 Mart 2026, desktop):**
- Performance: **99** | LCP: **0.7s** | FCP: **0.2s** | TBT: **40ms** | CLS: **0** | SEO: **100**

**Bu skorları DÜŞÜRECEK her şeyden kaçın. Yeni bileşen yazarken şu kurallara uy:**

### ❌ ASLA YAPMA

1. **`mounted` pattern kullanma** — LCP'yi öldürür
   ```tsx
   // ❌ YANLIŞ — saat useEffect'e kadar boş görünür
   const [mounted, setMounted] = useState(false)
   {mounted ? time : '--:--:--'}
   
   // ✅ DOĞRU — SSR'dan itibaren gerçek değer
   const [time, setTime] = useState(() => getTimeInTZ(tz))
   <div suppressHydrationWarning>{time}</div>
   ```

2. **`ssr: false` dynamic import kullanma** — above-the-fold bileşenler için yasak
   ```tsx
   // ❌ YANLIŞ — LCP elementi lazy yükleniyor
   const Clock = dynamic(() => import('./Clock'), { ssr: false })
   
   // ✅ DOĞRU — ya ssr:true ya da static import
   import Clock from './Clock'
   ```

3. **`@/lib/cities` veya `@/data` barrel'ından client component'e import etme** — 2.4MB bundle
   ```tsx
   // ❌ YANLIŞ — data/cities.ts (2.6MB) client bundle'a girer
   import { cities } from '@/lib/cities'
   import { countries } from '@/data'
   
   // ✅ DOĞRU — sadece client-safe modüller
   import { citiesCore } from '@/lib/cities-client'        // 272KB
   import { countries } from '@/data/countries'            // 80KB
   import { COUNTRY_HUB_SLUGS } from '@/data/hubPages'     // 8KB
   ```

4. **`detectedCity ? (big element) : (skeleton)` pattern kullanma**
   ```tsx
   // ❌ YANLIŞ — detectedCity null'dan başlar, LCP elementi yok
   {detectedCity ? <BigClock /> : <Skeleton />}
   
   // ✅ DOĞRU — activeCity fallback ile SSR'da gerçek içerik
   const displayCity = detectedCity ?? activeCity
   <BigClock city={displayCity} suppressHydrationWarning />
   ```

### ✅ DOĞRU PATTERN — Yeni Saat Bileşeni

```tsx
'use client'
import { useState, useEffect } from 'react'

function getTimeInTZ(tz: string) {
  const now = new Date()
  return now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
}

export default function Clock({ tz }: { tz: string }) {
  const [time, setTime] = useState(() => getTimeInTZ(tz))  // SSR-safe

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeInTZ(tz)), 1000)
    return () => clearInterval(id)
  }, [tz])

  return <div suppressHydrationWarning>{time}</div>  // hydration mismatch OK
}
```

### Bundle Boyut Limitleri

| Modül | Max boyut | Notlar |
|-------|-----------|--------|
| En büyük client chunk | **300KB** | Şu an 245KB |
| `data/cities.ts` | server-only | Client'a GİRMEZ |
| `lib/cities-client.ts` | 272KB | Client için bu kullanılır |
| `data/countries.ts` | 80KB | Direct import OK |

**Build sonrası kontrol:** `ls -la .next/static/chunks/*.js | sort -k5 -rn | head -5`
→ En büyük chunk 300KB'ı geçiyorsa dur ve incele.

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

### 39. Honolulu + 14 Tier 2 City SEO JSONs ✅ (Mart 2026)
Committed in sequence, completing all key tier 2 cities:

**Batch 1 (Honolulu):**
- `honolulu-seo.json`: HST UTC-10, no DST (Hawaii exempt from Uniform Time Act 1966), Pacific/Honolulu, 33K vol SD 22

**Batch 2 (10 cities):**
- `adelaide-seo.json`: ACST UTC+9:30/ACDT UTC+10:30, DST, unique 30-min offset, 18K vol SD 29
- `manchester-seo.json`: GMT/BST, same as London, Europe/London, 8K vol SD 25
- `baku-seo.json`: AZT UTC+4, no DST (abolished 2016), Asia/Baku, 8K vol SD 30
- `helsinki-seo.json`: EET UTC+2/EEST UTC+3, EU DST, easternmost EU capital, Europe/Helsinki
- `wellington-seo.json`: NZST UTC+12/NZDT UTC+13, southern hemisphere DST, Pacific/Auckland
- `belfast-seo.json`: GMT/BST, Europe/London, same offset as Dublin (IST) year-round
- `caracas-seo.json`: VET UTC-4, no DST, briefly UTC-4:30 2007-2016, America/Caracas
- `abuja-seo.json`: WAT UTC+1, no DST, Africa/Lagos (same as Lagos)
- `algiers-seo.json`: CET UTC+1, no DST (since 1981), UTC+1 despite prime meridian proximity
- `accra-seo.json`: GMT UTC+0, no DST, prime meridian passes through eastern Ghana

**Batch 3 (4 cities):**
- `brisbane-seo.json`: AEST UTC+10, no DST (Queensland referendum 1992), 27K vol SD 47
- `islamabad-seo.json`: PKT UTC+5, no DST, Asia/Karachi, 30 min behind Delhi
- `lahore-seo.json`: PKT UTC+5, no DST, Asia/Karachi, cultural capital of Pakistan
- `addis-ababa-seo.json`: EAT UTC+3, no DST, African Union HQ, Ethiopian calendar note

**Total SEO JSON files: 201+**

### 40. New State Hub Pages + 34 City SEO JSONs + PAIR_CONTEXTS 64→72 ✅ (Mart 2026)

**Yeni State Hub Sayfaları:**
- `/idaho/` — split MT (America/Boise) + PT panhandle (America/Los_Angeles). Coeur d'Alene quirk explained.
- `/wyoming/` — entire state Mountain Time (America/Denver). Yellowstone, energy, least populous state.
- `/south-dakota/` — split CT (Sioux Falls) + MT (Rapid City/Black Hills). Mount Rushmore context.
- Sitemap güncellemesi: idaho, wyoming, south-dakota eklendi (0.8 priority).

**Yeni ABD Şehir SEO JSON Dosyaları:**
- `sacramento-seo.json`: PST/PDT, America/Los_Angeles, state capital context
- `oklahoma-city-seo.json`: CST/CDT, America/Chicago, Devon Energy, Bricktown
- `tampa-seo.json`: EST/EDT, America/New_York, Florida DST controversy note
- `raleigh-seo.json`: EST/EDT, America/New_York, Research Triangle, Red Hat
- `baltimore-seo.json`: EST/EDT, America/New_York, Johns Hopkins, Under Armour
- `albuquerque-seo.json`: MST/MDT, America/Denver, Arizona DST comparison, Sandia Labs
- `milwaukee-seo.json`: CST/CDT, America/Chicago, same time as Chicago, Harley-Davidson
- `memphis-seo.json`: CST/CDT, America/Chicago, FedEx HQ, Beale Street
- `tucson-seo.json`: MST no DST, America/Phoenix, Arizona exception, Raytheon
- `cleveland-seo.json`: EST/EDT, America/New_York, Cleveland Clinic, Progressive
- `pittsburgh-seo.json`: EST/EDT, America/New_York, UPMC, Carnegie Mellon, robotics
- `st-louis-seo.json`: CST/CDT, America/Chicago, Gateway Arch, Enterprise Holdings
- `cincinnati-seo.json`: EST/EDT, America/New_York, P&G HQ, Kroger

**Yeni Uluslararası Şehir SEO JSON Dosyaları:**
- `kiev-seo.json` (Kyiv): EET/EEST UTC+2/+3, Europe/Kyiv, Ukraine IT sector
- `yangon-seo.json`: MMT UTC+6:30, Asia/Yangon, half-hour offset unique
- `almaty-seo.json`: ALMT UTC+6, Asia/Almaty, DST abolished 2005, KASE exchange
- `dar-es-salaam-seo.json`: EAT UTC+3, Africa/Dar_es_Salaam, DSE stock exchange
- `kampala-seo.json`: EAT UTC+3, Africa/Kampala, equator location, USE exchange
- `kinshasa-seo.json`: WAT UTC+1, Africa/Kinshasa, cobalt/coltan, eastern DRC is UTC+2
- `lusaka-seo.json`: CAT UTC+2, Africa/Lusaka, Copperbelt, LuSE exchange
- `khartoum-seo.json`: UTC+3, Africa/Khartoum, Islamic work week Sun-Thu, UTC change 2021
- `montevideo-seo.json`: UYT UTC-3, America/Montevideo, DST abolished 2015

**Pre-existing files committed by background agent (also in this session):**
- `abuja`, `adelaide`, `baku`, `belfast`, `caracas`, `helsinki`, `manchester`, `wellington`
- `brisbane`, `islamabad`, `lahore`, `addis-ababa`

**PAIR_CONTEXTS 64 → 72:**
- `mumbai↔cairo`: IST vs EET, 3.5h gap, India–Egypt MENA corridor
- `lagos↔amsterdam`: WAT vs CET/CEST, same in winter / +1 in summer (Dutch DST)
- `sao-paulo↔san-francisco`: BRT no DST vs PST/PDT, 4-5h gap, Brazil tech corridor
- `frankfurt↔tehran`: CET vs IRST/IRDT, 2.5h constant (both observe DST)

**Total SEO JSON files: ~230+**

### 41. 14 New City SEO JSONs + Title Fixes + Costa Rica FAQ Enrichment ✅ (Mart 2026)

**Title fixes (1 char over 44):**
- `vilnius-seo.json`: removed "(UTC+2/+3)" from title → 38 chars
- `tallinn-seo.json`: removed "(UTC+2/+3)" from title → 38 chars
- `el-paso-seo.json`: "MST (UTC-7, No DST)" → "MST (No DST)" → 42 chars

**Costa Rica page.tsx FAQ enrichment:**
- Expanded faqSchema from 4 thin answers to 7 rich answers
- Added: NY time diff (1h winter, 2h summer), London (6-7h), LA (1-2h)
- AI SEO first sentence format applied to first FAQ
- No-DST since 1980, equatorial latitude context, nearshore outsourcing angle

**New city SEO JSON files (all: AI SEO format, faq_schema, title ≤44 chars):**
Middle East:
- `abu-dhabi-seo.json`: GST UTC+4, Asia/Dubai, ADIA & Mubadala sovereign wealth
- `kuwait-city-seo.json`: AST UTC+3, Asia/Kuwait, Boursa Kuwait, KPC
- `muscat-seo.json`: GST UTC+4, Asia/Muscat, Port of Salalah
- `manama-seo.json`: AST UTC+3, Asia/Bahrain, Bahrain Bourse, financial hub

South Asia:
- `kathmandu-seo.json`: NPT UTC+5:45, Asia/Kathmandu, 45-min offset unique, 15min ahead of India
- `colombo-seo.json`: SLST UTC+5:30, Asia/Colombo, reverted from UTC+6 in 2006, CSE exchange

Southeast Asia:
- `phnom-penh-seo.json`: ICT UTC+7, Asia/Phnom_Penh, same TZ as Bangkok/HCMC
- `vientiane-seo.json`: ICT UTC+7, Asia/Vientiane, same TZ as Bangkok

Central Asia / East Asia:
- `ulaanbaatar-seo.json`: ULAT UTC+8, Asia/Ulaanbaatar, DST abolished 2017, coldest capital city
- `yerevan-seo.json`: AMT UTC+4, Asia/Yerevan, DST abolished 2012, Silicon Mountain tech hub

Latin America:
- `asuncion-seo.json`: PYT/PYST UTC-4/-3, America/Asuncion, Southern Hemisphere DST, Itaipú dam
- `la-paz-seo.json`: BOT UTC-4, America/La_Paz, world's highest admin capital
- `monterrey-seo.json`: CST/CDT, America/Monterrey, border state retained DST post-2022, CEMEX/FEMSA

North Africa:
- `tripoli-seo.json`: EET UTC+2, Africa/Tripoli, DST abolished 2013, largest African oil reserves

**Total SEO JSON files: 242**

### 42. CTR Optimizasyonu — Bu Oturum ✅ (Mart 2026)

**Flight-time + time-converter description fix:**
- `data/seo/flight-time-seo.ts`: title "What Time Do I Land" (60 total ✅), desc 192→154 chars
- `app/time-converter/page.tsx`: desc 174→155 chars

**6 city description differentiation:**
- berlin: 145 chars, differentiated from paris (tech capital angle)
- paris: 147 chars, differentiated from berlin (cultural capital angle)
- tokyo: 141 chars — "no DST since 1951" hook
- istanbul: 170→142 chars — "Turkey abolished DST in 2016" hook (Python3 edit, unicode-safe)
- sao-paulo: 170→133 chars (Python3 edit, unicode-safe)
- hong-kong: 162→143 chars — HKEX trading hours angle

**Guide pages title fix (was 80-84 total, 0 clicks despite pos 5-7):**
- `app/[city]/guide/time-business/page.tsx`: 81-84→max 58 total; removed `${city.timezone}` IANA leak in desc
- `app/[city]/guide/24-hours-itinerary/page.tsx`: 74-84→max 53 total
- `app/[city]/guide/time-zones/page.tsx`: 66-76→max 59 total
- `app/[city]/guide/work-remote/page.tsx`: 62-72→max 59 total
- `app/[city]/guide/travel-guide/page.tsx`: 77-87→max 59 total

**Country description trim:** `app/country/[country]/page.tsx` — removed population/currency/phone from desc template (was 196+ chars), now 117-147 chars

**All 242 city SEO JSONs description bulk fix:**
- All trimmed to ≤160 chars with sentence-boundary algorithm
- 8 over-trimmed files manually fixed to 145-156 chars
- copenhagen: 164→146 chars

**PAIR_CONTEXTS 68→92:** 24 new pairs from GSC impressions data (tokyo-auckland, barcelona-zurich, doha-bangkok, la-hong-kong, rome-seattle, etc.)

**days-from-today + days-ago descriptions:** 169-175 chars → ~103-108 chars ✅

**Area code description template fix:**
- `app/area-code/[code]/page.tsx`: template was generating 172-229 chars (over limit)
- New template uses `majorCities.slice(0,3)` instead of full `coverageArea`
- All codes now 128-150 chars ✅ (929, 437, 904, 760, 213 verified)

### 43. Time-Converter + Flight-Time İçerik Zenginleştirme ✅ (Mart 2026)

**SEO Engine analizi sonucu (3 kalan madde):**
- Area code içerik → zaten iyi, authority/yaş sorunu (yapacak şey yok)
- DST USA page → zaten iyi, 2026 tarihleri title/H1/FAQ'ta belirgin
- Time-converter (pos 11.36) + Flight-time (pos 10.85) → içerik eklendi

**`app/time-converter/TimeConverterClient.tsx`:**
- "Popular Time Zone Conversions" tablosu (18 pair: EST→GMT, PST→IST, JST→EST vb.)
  → long-tail: "9am est to gmt", "pst to ist conversion table"
- "Time Zone Quick Reference" tablosu (22 TZ kısaltması, UTC offset, bölge)
  → long-tail: "what is EST in UTC", "CET full name"
- Görünen FAQ 3 → 8 soruya çıkarıldı (JSON-LD'deki 14 ile tutarlı)

**`data/seo/flight-time-seo.ts` + `app/flight-time/FlightTimeClient.tsx`:**
- "Popular Flight Routes — Arrival Time Examples" tablosu (14 rota)
  → NYC→London, LAX→Tokyo, London→Dubai vb.
  → long-tail: "new york to london what time do I land"
  → her satır potansiyel featured snippet

### 44. Teknik SEO Bug Fixes — Bot Traffic + 404 Cleanup ✅ (Mart 2026)

**Sorun:** 3 aylık sitede günlük 3-5 tıklama → kök neden analizi yapıldı.

**GSC honeymoon period sona erdi:**
- Google yeni siteleri geçici yüksek pozisyona alır, CTR ölçer
- "time in [city]" queryleri → Google kendi live clock widget'ını gösteriyor → 0 tıklama
- Strateji: tool sayfaları (flight-time, time-converter) + pair sayfalarına odaklan

**`force-dynamic` kritik bug fix:**
- `/time/[from]/[to]/page.tsx`: `force-dynamic` → `revalidate = 3600` (ISR)
- `force-dynamic`, middleware'in set ettiği `Cache-Control: s-maxage=86400` header'ını `no-store` ile override ediyordu
- Her bot isteği ayrı serverless function çalıştırıyordu → Vercel invocation limit riski

**Middleware bot blocking:**
- `middleware.ts` — `/time/` ve `/meeting/` rotalarında User-Agent tabanlı bot engelleme
- `BAD_BOT_UA` listesi: python-requests, scrapy, wget, curl, ahrefsbot, semrushbot vb.
- Kısa UA (< 20 char) + browser token yok → otomatik block
- 429 + `Retry-After: 3600` response

**`app/manifest.ts` eklendi:**
- `/manifest.json` 404'lerini çözüyor
- Web app metadata: name, short_name, theme_color (#0f172a), icon.svg

**404 cleanup:**
- `og-image.png` → `og-image.svg` fix (`/time/[from]/[to]/page.tsx` line 177)
- `public/robots.txt`: `Disallow: /api/` eklendi — bot'ların API route'larına erişimi engellendi
- `/api/weather/` 404'leri: `TimeComparisonContent.tsx` doğru çağırıyor (trailing slash yok), 404'ler harici bot'lardan geliyor — robots.txt fix yeterli

### 45. Mimari Quick Wins — Faz 1 ✅ (Mart 2026)

**Teknik mimari analizi sonucu uygulanan düzeltmeler:**

**Cache ve rendering:**
- `/meeting/[cities]/page.tsx`: `force-dynamic` → `revalidate = 3600` (Googlebot NOINDEX sayfalar için invocation yakıyordu)
- `stale-while-revalidate`: 604800 (7 gün) → 86400 (1 gün) — DST geçişlerinde stale içerik riskini azaltır
- `middleware.ts`: duplicate cache header kaldırıldı — `next.config.js` tek kaynak

**Guide sayfaları (15 dosya):**
- Hardcoded 8-9 şehir listesi → `getSupportedGuideCities()` — şehir eklenince tek yer güncellenir

**`lib/constants.ts` — SITE_URL sabiti:**
- `export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://whattime.city'`
- `layout.tsx`, `sitemap.ts`, `[city]/page.tsx`, `time/[from]/[to]/page.tsx`, `area-code/[code]/page.tsx` güncellendi

**`scripts/validate-seo-titles.js` — prebuild validator:**
- `data/seo/*.json` dosyalarında `seo_title ≤44 char` kuralını enforce eder
- Build başında fail eder, CI güvenliği sağlar
- Prebuild: `generate-search-index.js && validate-seo-titles.js`

**Sonraki faz (Faz 2 — Tip Güvenliği):**
- `weather: any` → `WeatherData | null`
- `CitySEOData` interface + `seoData: any` pipeline fix
- `generate-search-index.js` regex → gerçek TS import

### 46. Mimari Faz 2 — Tip Güvenliği ✅ (Mart 2026)

**Weather any → typed:**
- `InfoRow.tsx`, `GuidePreview.tsx`: `weather: any` → `WeatherData | null` (from `@/core/types/weather`)
- `TimeComparisonContent.tsx`: `useState<any>` → `useState<WeatherResponse | null>`, `setWeather: (w: any)` → typed

**CitySEOData pipeline:**
- `core/types/seo.ts`: `CitySEOData`, `FAQItem`, `FAQSchema`, `ContentBlock`, `TimezoneFacts` interface'leri eklendi
- `core/types/index.ts`: re-export eklendi
- `app/[city]/page.tsx`: `seoData: any` → `CitySEOData | null` (iki yerde — generateMetadata + Page)
- `components/CityPage/index.tsx`, `SEOContent.tsx`, `FAQSection.tsx`: `seoData?: any` → `seoData?: CitySEOData | null`

**JSON-LD guard:**
- `FAQSection.tsx`: `faq_schema` kullanmadan önce `@type === 'FAQPage'` kontrolü eklendi

**generate-search-index.js:**
- Sanity check eklendi: `searchIndex.length < 1800` ise build fail — regex kırılırsa sessiz hata olmaz

**Faz 3 (sonraki):**
- `/time/` tier1×tier1 generateStaticParams
- Meeting URL max şehir limiti
- Weather API rate limiting

---

### 45. Teknik Mimari Refactor — Phase 1+2+3 ✅ (Mart 2026)

**14 boyutlu derin analiz:** Architecture, server/client separation, rendering strategy, performance,
data flow, component architecture, SEO, bot resilience, TypeScript quality, error handling,
scalability, tech debt, build/deploy efficiency, content growth.

**Phase 1 — Quick Wins:**
- `lib/constants.ts` oluşturuldu: `SITE_URL` sabit → 5 dosyada hardcoded URL'ler değiştirildi
  (`layout.tsx`, `sitemap.ts`, `[city]/page.tsx`, `time/[from]/[to]/page.tsx`, `area-code/[code]/page.tsx`)
- `core/types/seo.ts` oluşturuldu: `CitySEOData`, `FAQItem`, `FAQSchema`, `ContentBlock`, `TimezoneFacts`
  → `seoData: any` pipeline 5 dosyada temizlendi
- `core/types/index.ts` güncellendi: yeni tipler re-export edildi
- `scripts/validate-seo-titles.js` oluşturuldu: prebuild kontrolü, `seo_title > 44 char` → exit 1
- `scripts/generate-search-index.js` güncellendi: `< 1800 city` → exit 1 sanity check
- `package.json`: `prebuild` hook → her ikisi de çalışır

**Phase 2 — Type Safety:**
- `InfoRow.tsx`: `weather: any` → `WeatherData | null`
- `GuidePreview.tsx`: `weather?: any` → `WeatherData | null`
- `TimeComparisonContent.tsx`: `useState<any>` → `useState<WeatherResponse | null>` (2 state)
- `FAQSection.tsx`: `@type` guard eklendi (faq_schema corrupted data koruması)
- `[city]/guide/*/page.tsx` (15 dosya): hardcoded 8-9 city array → `getSupportedGuideCities()`
- Guide pages ayrıca: `cities.map(...)` (ALL cities) → `getSupportedGuideCities().map(...)` fix
- `next.config.js`: `stale-while-revalidate: 604800` → `86400` (7 gün DST accuracy riski)
- `app/meeting/[cities]/page.tsx`: `force-dynamic` → `revalidate = 3600` (bot invocation fix)
- `middleware.ts`: duplicate `addCacheHeaders` kaldırıldı (next.config.js tek kaynak)

**Phase 3 — Parametric Explosion + ISR:**
- `app/time/[from]/[to]/page.tsx`: `generateStaticParams` eklendi → 92 PAIR_CONTEXTS pair build-time pre-built
  (PAIR_CONTEXTS key split: iterative hyphen check, `Set<slug>` lookup ile doğru parse)
- `middleware.ts`: `/meeting/` URL'lerinde max 5 city limit — `cityParts.length > 5` → 400 response
- `app/api/weather/route.ts`: IP-based rate limiter eklendi (10 req/dakika/IP, in-memory Map)
  - `x-forwarded-for` / `x-real-ip` header'dan IP çıkarımı
  - Sliding window: son 60 sn içindeki timestamp'ler tutulur
  - Otomatik cleanup: Map > 5000 entry olunca expired IP'ler temizlenir
  - 429 + `Retry-After: 60` response
- `app/sitemap.ts`: `export const revalidate = 86400` eklendi (O(N²) tier1×tier1 pair computation cache)

**Phase 4 — Redirect Fix + Error Boundary ✅ (Mart 2026):**

**Redirect loop + chain fix (`next.config.js`):**
- **BUG FIX (loop):** `24-hours-itinerary → 24-hours` redirect removed — conflicted with middleware
  `24-hours → 24-hours-itinerary`, creating infinite redirect loop for 8 premium cities
- **Chain elimination:** `best-time-to-call` now redirects directly to `time-business` (was `call-times`,
  which middleware then redirected to `time-business` — 2 hops instead of 1)
- **Chain elimination:** `public-holidays` now redirects directly to `travel-guide` (was `holidays`,
  which middleware then redirected to `travel-guide` — 2 hops instead of 1)

**Error boundary:** `app/[city]/error.tsx` eklendi — city sayfalarında hata olursa contextual UI
(Try again + Browse all cities) gösterir. Root `app/error.tsx` zaten mevcut ama generic 500 gösteriyor.

**Phase 4b — ClockPage Shared Components + Converter Generator ✅ (Mart 2026):**

**`components/ClockPage/` — Yeniden kullanılabilir bileşen kütüphanesi:**
- `useClockState.ts`: Single-zone + multi-zone clock hooks (useState, useEffect, setInterval, DST detection)
- `useClockTheme.ts`: Standart tema class'ları (card, innerCard, heading, subText, mutedText) — 242 dosyada
  tekrarlanan isLight ternary pattern'i tek hook'a çekildi
- `ClockHero.tsx`: Hero section (single/multi-zone, DST badges, configurable bg color)
- `FactsGrid.tsx`: 6-item facts grid
- `ComparisonTable.tsx`: Location vs winter/summer comparison table
- `NarrativeSection.tsx`: Themed card with title + children (prose content)
- `CitiesGrid.tsx`: Major cities grid with name + detail
- `index.ts`: Barrel export

**5 representative ClockClient converted:**
- `JapanClockClient.tsx`: 181 → 96 lines (no DST, comparison table, business hours)
- `WyomingClockClient.tsx`: 120 → 68 lines (DST, simple single zone US state)
- `TexasClockClient.tsx`: 128 → 76 lines (multi-zone, useMultiClockState)
- `IcelandClockClient.tsx`: 200 → 135 lines (no DST, embedded grids, multiple narratives)
- `NepalClockClient.tsx`: 189 → 120 lines (unusual offset, multiple narratives)

Kalan 237 dosya aynı pattern ile dönüştürülebilir. Her dosya ~40-50% küçülür.

**`scripts/generate-converter.js` — Converter page generator:**
- `node scripts/generate-converter.js PST IST` → `app/pst-to-ist/page.tsx` oluşturur
- 20 timezone abbreviation desteği (EST, CST, MST, PST, GMT, BST, CET, IST, JST, AEST, UTC, SGT, KST, HKT, GST, EET, WAT, EAT, CST8, NZST)
- Metadata, TZPairConfig, FAQ schema, ConverterPageShell boilerplate otomatik
- TODO placeholder'lar ile üretir — FAQ cevapları ve DST detayları manual dolduruluyor

**Değerlendirilip ertelenen maddeler:**
- 64 converter sayfası → dynamic route: **ertelendi** — routing conflict. Generator script alternatif olarak eklendi.
- `data/cities.ts` tier split: **ertelendi** — 24K satır, ama server-only, client bundle'a gitmiyor.
- `translations.ts` bundle riski: **sorun yok** — gerçekte sadece 892 satır (13 dil × ~60 key).

---

### 47. Phase 5 — ClockPage Migration Tamamlandı ✅ (Mart 2026)

**20 ülke/eyalet ClockClient dosyası** `@/components/ClockPage` shared kütüphanesine dönüştürüldü.
Net azalma: ~3,200+ satır (%45–50 per file).

**Dönüştürülen dosyalar (branch: `claude/phase5-clockclient-migration-oPHt6`, main'e merge edildi):**
- Batch 1 (Phase 4b): Japan, Wyoming, Texas, Iceland, Nepal
- Batch 2: France, Germany, UK, Spain
- Batch 3a: Italy, China, Thailand, Norway, Israel
- Batch 3b: SouthAfrica, Philippines, Iran, Denmark, Finland
- Batch 3c: Mongolia, Ecuador, Turkey, Indonesia, Russia, Kazakhstan, Mexico, Australia, NewZealand, Canada

**Orphan page audit fixes (aynı branch):**
- `app/sitemap.ts`: `/about/`, `/blog/`, `/contact/`, `/privacy/` eklendi
- `next.config.js`: 8 redirect eklendi — converter→time-converter, flight-times→flight-time, jet-lag→jet-lag-advisor, alarm→world-alarm

**Pattern — tüm dönüştürülen dosyalar:**
```tsx
import { useClockState, useClockTheme, ClockHero, FactsGrid, NarrativeSection, CitiesGrid } from '@/components/ClockPage'
// Multi-zone: useMultiClockState({ 'Label · UTC+X': 'IANA/TZ' }, 'primary/tz')
// ClockHero timeSize="text-2xl sm:text-3xl" for 3+ zones
```

**Kalan ~217 dosya** aynı pattern ile dönüştürülebilir. Her yeni oturumda batch yapılabilir.

---

## Açık Konular / Sonraki Adımlar

- [ ] DST clock change (673K vol, SD 24) — `/daylight-saving-time/` meta already good, monitor GSC
- [ ] Sunrise/sunset "what time does sun set today" (201K vol, SD 19) — meta updated, monitor
- [ ] Hours-ago/hours-from-now pages — need 4 weeks to index and appear in GSC
- [ ] Idaho/Wyoming/South Dakota state pages — monitor for "time in idaho" (33K), "time in wyoming" (18K) queries
- [ ] New city pages (tucson, cleveland, pittsburgh, st-louis, etc.) — monitor GSC indexing
- [ ] PAIR_CONTEXTS 92 pairs — monitor /time/ pair pages for new impressions (pre-built now)
- [ ] New 14 city pages (abu-dhabi, kathmandu, colombo, etc.) — monitor GSC indexing
- [ ] Area code pages (929 246K, 213 673K, 917 246K) — description fixed; monitor GSC indexing + authority
- [ ] Phase 5 devamı: Kalan ~217 ClockClient dosyasını shared library'ye migrate et (batch başına 15-20)

---

## Git Workflow
- Feature branch: `main` (working directly)
- Yeni oturumda yeni branch aç: `claude/[konu]-[id]`
