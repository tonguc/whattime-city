# CLAUDE.md — whattime.city Project Memory

Bu dosya oturumlar arası hafıza kaybını önlemek için tutulur.
**Her yeni oturumda önce bu dosyayı oku. Bir şey "eksik" gibi görünüyorsa önce kodu kontrol et.**

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

### 7. Araçlar (app/tools/ + standalone)
- `/meeting/` — Meeting Planner ✅
- `/time-converter/` — Time Converter ✅
- `/flight-time/` — Flight Time Calculator ✅
- `/military-time/` — Military Time Converter ✅
- `/alarm/` — World Alarm ✅
- `/widget/` — Embed Widget ✅

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

## Roadmap — Kalan Maddeler

### ⏳ Yüksek Öncelikli
- [ ] `/time/` pair sayfaları title+meta optimize — pos 10-20'deki 8 sayfa:
  - /time/singapore/lagos/ (pos 16), /time/dublin/dubai/ (pos 13)
  - /time/los-angeles/san-francisco/ (pos 11), /time/tokyo/seattle/ (pos 10)
- [ ] Broken guide links fix — 16 broken internal link
- [ ] Top 20 `/time/` sayfasına içerik zenginleştirme (FAQ H2, meta desc CTR)

### ⏳ Orta Öncelikli
- [ ] `ist-to-pst` converter sayfası — IST↔Pacific (Hint-Silikon Vadisi koridoru)
- [ ] `ist-to-cst` converter sayfası
- [ ] BreadcrumbList schema — /time/ pair sayfalarına ekle

---

## Git Workflow
- Feature branch: `claude/review-seo-analysis-sBM2v`
- Squash merge to main
- Her squash merge sonrası branch'i senkronize et:
  ```bash
  git fetch origin main && git reset --hard origin/main && git push --force-with-lease origin claude/review-seo-analysis-sBM2v
  ```
