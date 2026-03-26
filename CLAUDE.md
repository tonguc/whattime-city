# CLAUDE.md — whattime.city Project Memory

Bu dosya oturumlar arası hafıza kaybını önlemek için tutulur.
**Her yeni oturumda önce bu dosyayı oku.**

---

## Tamamlanan İşler (Kronolojik)

### Converter Sayfaları (62 sayfa)
Tüm TZ çifti converter sayfaları `ConverterPageShell` bileşenini kullanıyor:
- `aest-to-{cst,est,gmt,mst,pst,utc}` (6 sayfa)
- `bst-to-{cst,est,pst}` (3 sayfa)
- `cet-to-{cst,est,gmt,ist,pst}` (5 sayfa)
- `cst-to-{est,gmt,mst,pst,utc}` (5 sayfa)
- `est-to-{cst,gmt,mst,pst,utc}` (5 sayfa)
- `gmt-to-{cst,est,ist,mst,pst}` (5 sayfa)
- `ist-to-{cet,cst,est,gmt,jst,mst,pst,utc}` (8 sayfa)
- `jst-to-{cst,est,gmt,ist,mst,pst,utc}` (7 sayfa)
- `mst-to-{cst,est,gmt,pst,utc}` (5 sayfa)
- `pst-to-{cst,est,gmt,mst,utc}` (5 sayfa)
- `utc-to-{cst,est,ist,jst,mst,pst}` (6 sayfa)
- `bst-timezone`, `cest-timezone`, `alaska-time-zone`, `central-time-zone`, `eastern-time-zone`, `hawaii-time-zone`, `mountain-time-zone`, `pacific-time-zone`, `us-time-zones` (açıklayıcı sayfalar)

**ÖNEMLİ:** Tüm converter sayfaları `ConverterPageShell` kullanır — `ContentPageWrapper` + ham JSX DEĞİL.

### DST Sayfaları
- `/daylight-saving-time/` — ana hub (tüm bölge özet tablosu) ✅
- `/daylight-saving-time/usa/` ✅
- `/daylight-saving-time/uk/` ✅
- `/daylight-saving-time/europe/` ✅
- `/daylight-saving-time/australia/` ✅
- `/daylight-saving-time/canada/` ✅
- `/daylight-saving-time/new-zealand/` ✅
- `/daylight-saving-time/mexico/` ✅ (2022'de kaldırıldı — önemli SEO açısı)
- `/daylight-saving-time/countries/` ✅ (tüm ülkeler tablosu)

### India Hub Sayfası
- `/india/` ✅ — live clock, 11 FAQ schema, IST vs US/UK/Dubai/Singapore/Australia
- `app/india/IndiaClockClient.tsx` + `app/india/page.tsx` mevcut
- İlgili şehirler: /new-delhi/, /mumbai/, /bangalore/, /chennai/, /kolkata/

### SEO Data Dosyaları (data/seo/)
Mevcut şehirler için SEO JSON dosyaları var (FAQ schema, content blocks, time_difference_table):
amsterdam, ankara, atlanta, baghdad, beijing, berlin, boston, brussels, buenos-aires,
cairo, calgary, dallas, delhi, denver, dubai, frankfurt, geneva, havana, houston,
jakarta, johannesburg, kuala-lumpur, las-vegas, los-angeles, madrid, melbourne,
mexico-city, miami, milan, montreal, moscow, munich, oslo, paris, phoenix, prague,
rio-de-janeiro, rome, sao-paulo, **seattle** ✅, **singapore** ✅, shanghai, stockholm,
tehran, **tokyo** ✅ (placeholder fix), vancouver, vienna, washington-dc, zurich

### Tatil Sayfaları (app/[city]/guide/holidays/)
City-specific HolidaysContent bileşenleri:
- `LondonHolidaysContent.tsx` ✅
- `TokyoHolidaysContent.tsx` ✅
- `DubaiHolidaysContent.tsx` ✅
- `SingaporeHolidaysContent.tsx` ✅
- `ParisHolidaysContent.tsx` ✅
- `SydneyHolidaysContent.tsx` ✅
- `IstanbulHolidaysContent.tsx` ✅
- `LosAngelesHolidaysContent.tsx` ✅ (César Chávez Day dahil)
- `NewYorkHolidaysContent.tsx` ✅ (NYSE trading notes dahil)
- Generic `HolidaysContent.tsx` — diğer şehirler için fallback

holidays/page.tsx routing sırası: london → tokyo → dubai → singapore → paris → sydney → istanbul → los-angeles → new-york → generic

---

## Design System — Tema Kuralları

### ASLA `dark:` Tailwind Variant Kullanma
`dark:bg-slate-800`, `dark:text-white` gibi class'lar ÇALIŞMAZ.
Bunun yerine `useCityContext()` hook'undan `theme` ve `isLight` kullan.

### useCityContext() Kullanımı
```tsx
'use client'
import { useCityContext } from '@/lib/CityContext'

const { theme, isLight } = useCityContext()
```

### theme Objesindeki Alanlar
| Alan | Açıklama |
|------|----------|
| `theme.card` | Kart arka planı + border (rounded-2xl dahil değil, sadece bg+border) |
| `theme.text` | Başlık/ana metin rengi |
| `theme.textMuted` | İkincil metin rengi |
| `theme.bg` | Sayfa arka planı |

### 6 Tema Modu
| Mod | isLight | theme.card | theme.text | theme.textMuted |
|-----|---------|-----------|-----------|----------------|
| `day` | true | `border border-slate-100 bg-white` | `text-slate-800` | `text-slate-500` |
| `light` | true | `border border-slate-100 bg-white` | `text-slate-800` | `text-slate-500` |
| `night` | false | `border border-slate-700/50 bg-slate-900/60` | `text-slate-100` | `text-slate-400` |
| `dark` | false | `border border-slate-700/50 bg-slate-800/60` | `text-slate-100` | `text-slate-400` |
| `dawn` | false | `border border-slate-700/50 bg-slate-800/60` | `text-slate-100` | `text-slate-400` |
| `dusk` | false | `border border-slate-700/50 bg-slate-800/60` | `text-slate-100` | `text-slate-400` |

**isLight = true SADECE `day` ve `light` modlarında.**

### Nested Kart (Kart İçinde Kart)
```tsx
const nestedCardClass = isLight
  ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
  : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
```

### Footer / Küçük Bilgi Kutusu
```tsx
const footerClass = isLight
  ? 'rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500'
  : 'rounded-xl border border-slate-700/50 p-4 bg-slate-800/50 text-xs text-slate-400'
```

### Font Kuralı
- Saat/rakam gösterimi: `tabular-nums` (font-mono KULLANMA)

---

## Bileşen Mimarisi

### ConverterPageShell
Tüm TZ converter sayfalarının şablonu. `'use client'` bileşeni.
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

### ContentPageWrapper
Tüm içerik sayfalarının wrapper'ı. Tema context'ini sağlar.
Server component olabilir (ConverterPageShell gibi client sub-component'ler içinde useCityContext kullan).

### HubPageLayout + HubPageHeader
Şehir hub sayfaları (india, pakistan vb.) için kullanılır.

---

## Git Workflow
- Feature branch: `claude/review-seo-analysis-sBM2v`
- Squash merge to main
- Her squash merge sonrası local branch'i senkronize et:
  ```bash
  git fetch origin main && git reset --hard origin/main && git push --force-with-lease origin <branch>
  ```

---

## Roadmap — Kalan Maddeler (ROADMAP_MARCH_APRIL_2026.md)

### Tamamlandı ✅
- [x] India hub sayfası (`/india/`)
- [x] DST country cluster (usa/uk/europe/australia/canada/new-zealand/mexico/countries)
- [x] Seattle SEO data
- [x] Singapore SEO data
- [x] Tokyo SEO data (placeholder fix)
- [x] NewYork + LosAngeles holiday sayfaları
- [x] 62 converter sayfa dark mode fix (ConverterPageShell)

### Bekleyen ⏳
- [ ] `/time/` pair sayfaları title+meta optimize (§1.1) — pos 10-20'deki 8 sayfa
- [ ] Broken guide links fix (§1.2) — 16 broken link
- [ ] Top 20 `/time/` sayfasına içerik zenginleştirme (§3)
- [ ] IST↔PST, IST↔CST converter sayfaları (§4.2) — `ist-to-pst`, `ist-to-cst` eksik
