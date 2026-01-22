# 🏆 Premium Şehir İçerik Kriterleri

## Mevcut Premium Şehirler (15)
- London, New York, Tokyo, Dubai, Singapore, Paris, Sydney, Istanbul, Los Angeles, Hong Kong, Toronto, Shanghai, Seoul, Berlin, **Amsterdam**

---

## 🏠 HUB SAYFASI KRİTERLERİ (`/[city]/`)

Hub sayfası = Şehrin ana sayfası (örn: `/istanbul/`, `/new-york/`)

### A) Sayfa Yapısı (Yukarıdan Aşağıya)

| # | Bölüm | Komponent | Açıklama |
|---|-------|-----------|----------|
| 1 | Hero | HeroSection | H1 + Clock (Analog/Digital) |
| 2 | Info Row | InfoRow | Weather, Sunrise/Sunset |
| 3 | Snippet | SnippetBlock | Quick info |
| 4 | Quick Info | CompactInfoCards | Currency, Phone, Language pills |
| 5 | Converter | TimeConverter | İki şehir karşılaştırma |
| 6 | CTA Banner | TravelBridge | Guide'a yönlendirme |
| 7 | Guide Preview | GuidePreview | Premium şehirler için cluster kartları |
| 8 | Time Facts | TimeZoneFacts + BusinessHoursBox | DST, UTC offset, iş saatleri |
| 9 | Climate | Climate & Attractions | Hava durumu, turistik yerler |
| 10 | SEO Content | SEOContent | Keyword-rich paragraflar |
| 11 | Time Table | TimeDifferenceTable | 8 şehir karşılaştırma tablosu |
| 12 | **FAQ** | **FAQSection** | **7 soru, Accordion, Schema markup** |
| 13 | Favorites | FavoriteCard | Kullanıcının favori şehirleri |
| 14 | More Cities | MoreCitiesSection | Aynı ülke/bölgedeki şehirler |
| 15 | World Cities | CompactWorldCities | Tier 1 şehirler grid |

### B) TimeDifferenceTable - Internal Linking

Tablodaki şehir linkleri `/time/[from]/[to]/` formatında olmalı:

```tsx
// ✅ DOĞRU - Long-tail SEO değeri
<a href={`/time/${city.slug}/${targetCity.slug}/`}>
  {targetCity.city}
</a>

// ❌ YANLIŞ - Sadece hub'a link
<a href={`/${targetCity.slug}`}>
```

### C) FAQSection - Otomatik Dinamik Sorular

7 soru otomatik oluşturulur (Google Keyword Planner verisine dayalı):

| # | Soru Şablonu | Arama Hacmi |
|---|--------------|-------------|
| 1 | What time is it in {city} right now? | 1M-10M 🔥 |
| 2 | What time zone is {city} in? | 100K-1M |
| 3 | Does {city} use daylight saving time? | High intent |
| 4 | What is the time difference between {city} and London? | 10K-100K |
| 5 | What is the time difference between {city} and New York? | 10K-100K |
| 6 | What is the best time to call {city}? | Business intent |
| 7 | What are typical business hours in {city}? | Business intent |

### D) FAQSection - Teknik Özellikler

```tsx
// 1. Accordion yapısı (tıkla aç/kapa)
const [openIndex, setOpenIndex] = useState<number | null>(0) // İlk soru açık

// 2. JSON-LD Schema
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(...)
}

// 3. HTML Microdata
<div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
  <h3 itemProp="name">{question}</h3>
  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
    <p itemProp="text">{answer}</p>
  </div>
</div>

// 4. E-E-A-T Footer (FAQ içinde)
<span>Last updated: {month} {year}</span>
<span>✓ Data verified by WhatTime.city Editorial Team</span>
```

### E) Dosya Konumları

| Dosya | Konum |
|-------|-------|
| FAQSection | `components/CityPage/FAQSection.tsx` |
| TimeDifferenceTable | `components/CityPage/TimeDifferenceTable.tsx` |
| CityPage index | `components/CityPage/index.tsx` |

---

## 📋 Her Premium Şehir İçin Gerekli Dosyalar

### 1. Guide Config (`lib/guide-content.ts`)
```typescript
export const [city]Guide: GuideConfig = {
  citySlug, cityName, timezone, timezoneAbbr, timezoneName, utcOffset,
  icon, tagline,
  seo: { title, description, keywords, ogTitle, ogDescription },
  pages: { overview, businessHours, bestTimeToVisit, remoteWork, twentyFourHours, 
           callTimes, stockMarket, holidays, digitalNomad, timeDifference, travelPlanning },
  clusters: [10 items]  // ÖNEMLİ: Tam 10 cluster olmalı!
}
```

### 2. Overview Content (`app/[city]/guide/content/[city]-overview.tsx`)

---

## 🎯 Premium Overview Sayfası Yapısı

### A) Teknik Gereksinimler

```tsx
// 1. FAQ Schema (JSON-LD)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQ_DATA.map(...)
}

// 2. HTML Microdata
<section itemScope itemType="https://schema.org/FAQPage">
  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">

// 3. Link Renkleri
const linkColor = isLight 
  ? 'text-blue-600 hover:text-blue-800 hover:underline'
  : 'text-sky-400 hover:text-sky-300 hover:underline'
```

### B) İçerik Bileşenleri (Sırayla)

| # | Bölüm | Açıklama |
|---|-------|----------|
| 1 | **Header** | H1 + tagline + current time badge |
| 2 | **Intro** | 3 paragraf, şehir hakkında genel bilgi |
| 3 | **Quick Facts Card** | Time zone basics + Key time differences (linkli) |
| 4 | **Explore Guide** | 10 cluster kartı (config'den) |
| 5 | **Understanding Time** | DST açıklaması, morning/evening karşılaştırma tablosu |
| 6 | **Time vs Major Cities Table** | 8-9 şehir, HEPSİ LİNKLİ (`/time/[city1]/[city2]/`) |
| 7 | **Dynamic CTA** | Meeting Planner butonu (gradient bg, hover:scale) |
| 8 | **Practical Tips** | Business, Travellers, Remote Workers (3 kart) |
| 9 | **FAQ Section** | 8 soru, Schema markup, long-tail keywords |
| 10 | **Deep Dive Links** | 4 cluster butonu |
| 11 | **E-E-A-T Footer** | Last updated + "Verified by WhatTime.city Editorial Team" |

---

## 🔑 8 FAQ Sorusu Kriterleri (Long-Tail Keywords)

Her şehir için şu sorular OLMALI:

1. **"What is the time difference between [City] and New York right now?"**
2. **"Is [City] on [TZ1] or [TZ2] right now?"** (DST sorusu)
3. **"When do the clocks change in [Country] in 2025?"**
4. **"What time does the [Stock Exchange] open and close?"**
5. **"What is the best time to call [City] from [Major Country]?"**
6. **"How many hours ahead/behind is [City] from [Major City]?"**
7. **"What time zone is [City] in?"** (basit ama yüksek hacimli)
8. **"What are typical business hours in [City]?"**

### FAQ Cevap Kuralları:
- Spesifik saatler ver (9:00 AM, not "morning")
- DST farkını belirt
- Alternatif şehirler için de bilgi ver
- 2-4 cümle, çok uzun değil

---

## 🔗 Internal Linking Kuralları

### Tablo Şehirleri
```tsx
<Link href="/time/[base-city]/[target-city]/" className={linkColor}>New York</Link>
```

### Paragraf İçi Linkler
- Şehir adları: `/[city]/`
- Tool referansları: `/time/`, `/meeting/`, `/jet-lag-advisor/`
- Aynı şehir: `/${city.slug}/guide/[cluster]/`

### Quick Facts "Same as" Şehirleri
```tsx
<Link href="/moscow/" className={linkColor}>Moscow</Link>, Riyadh, Nairobi
```

---

## 🎨 CTA Button Stili

```tsx
<section className={`mb-10 p-6 rounded-2xl text-center ${
  isLight 
    ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200' 
    : 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-700/50'
}`}>
  <h3>Need to schedule a meeting with [City]?</h3>
  <Link href="/meeting/" className="...bg-blue-600 hover:bg-blue-700...hover:scale-105">
    🚀 Launch Meeting Planner
  </Link>
</section>
```

---

## ✅ E-E-A-T Footer

```tsx
<footer className={`text-sm border-t pt-6`}>
  <div className="flex justify-between">
    <p><strong>Last updated:</strong> January 2025</p>
    <p>✓ Data verified by WhatTime.city Editorial Team</p>
  </div>
  <p className="text-xs mt-2">
    Time zone data sourced from IANA Time Zone Database...
  </p>
</footer>
```

---

## 📊 Kalite Kontrol Checklist

Yeni şehir eklerken kontrol et:

- [ ] `guideConfigs` registry'de var mı?
- [ ] 10 cluster tanımlı mı?
- [ ] Overview dosyası oluşturuldu mu?
- [ ] FAQ Schema (JSON-LD) eklendi mi?
- [ ] 8 FAQ sorusu var mı?
- [ ] Tablo şehirleri linkli mi?
- [ ] CTA butonu var mı?
- [ ] E-E-A-T footer var mı?
- [ ] Link renkleri doğru mu? (blue/sky)
- [ ] GuideContent.tsx'e import eklendi mi?

---

## 🚀 Yarın Hatırlatma

Claude'a şunu söyle:
> "Premium şehir içeriği için çalışmaya devam edelim. PREMIUM-CITY-CRITERIA.md dosyasını oku ve [şehir adı] için aynı yapıyı uygula."

veya

> "Dün 8 premium şehir için FAQ Schema + internal linking + E-E-A-T footer ekledik. Devam edelim, yeni şehir: [şehir adı]"
