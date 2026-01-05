# 🏆 Premium Şehir İçerik Kriterleri

## Mevcut Premium Şehirler (8)
- London, New York, Tokyo, Dubai, Singapore, Paris, Sydney, Istanbul

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
