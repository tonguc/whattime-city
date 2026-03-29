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
- [x] Şehir aramasında US eyalet desteği — Florida, Texas vb. yazınca şehirler çıkıyor
  - `lib/cities.ts`, `components/Search.tsx`, `scripts/generate-search-index.js` güncellendi
- [x] 236 ClockClient dosyası zenginleştirildi — 6 satır stub'dan 80-150 satır bileşenlere
  - Live saat, quick facts, unique içerik, major cities
- [x] Tüm clock banner renkleri timezone offset'e göre standardize edildi (6 renk grubu):
  - `bg-blue-700` (UTC-12→-5), `bg-cyan-600` (UTC-4→-1), `bg-emerald-600` (UTC 0→+2)
  - `bg-amber-600` (UTC+3→+5:30), `bg-red-700` (UTC+6→+9), `bg-purple-700` (UTC+10→+14)
- [x] Countries sayfası SEO intro metni grid altına taşındı (mobil UX iyileştirme)
- [x] HubPageHeader'a breadcrumb navigasyonu eklendi (Home / Countries / Ülke)
- [x] Global scroll-to-top butonu — tüm sayfalarda (`GlobalProviders` wrapper ile)
  - `components/ScrollToTop.tsx` — ScrollFAB ile aynı görünüm (chevron, w-12 h-12)
  - `components/GlobalProviders.tsx` — CityProvider + ScrollToTop, layout.tsx'te kullanılır

### ⏳ Sonraki İzleme
- [ ] 4 hafta sonra GSC'de etki ölçümü: pos 40-60 sayfaları → hedef pos 15-25
- [ ] singapore/london (137 imp), new-york/london (110 imp) takibi
- [ ] CTR iyileşmesi: "City N Hours Ahead" title formatı etkisi

---

## Git Workflow
- Feature branch: `claude/add-area-code-content-4BfEf`
- Squash merge to main
- Her squash merge sonrası branch'i senkronize et:
  ```bash
  git fetch origin main && git reset --hard origin/main && git push --force-with-lease origin claude/add-area-code-content-4BfEf
  ```
