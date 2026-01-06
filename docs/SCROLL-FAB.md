# ScrollFAB - Scroll Navigation System

## 📋 Genel Bakış

ScrollFAB, uzun sayfalarda kullanıcı deneyimini iyileştiren context-aware bir floating action button'dur.

### Davranış
- **Sayfa başı (<%15):** "Skip intro" → İlk section'a git
- **Sayfa ortası (15-85%):** "Next" → Sonraki section'a git  
- **Sayfa sonu (>85%):** "Back to top" → Sayfanın başına git

### Aktivasyon Koşulları (Auto Mode)
```
scrollHeight > 4 * viewportHeight && sectionCount >= 3
```

---

## 🚀 Kullanım

### 1. Global (Otomatik - Önerilen)

Layout'ta zaten aktif:
```tsx
// app/layout.tsx
<CityProvider>
  {children}
  <GlobalScrollFAB />  {/* ← Tüm uzun sayfalarda otomatik */}
</CityProvider>
```

### 2. Section Tanımlama (3 Yöntem)

#### Yöntem A: H2'ye ID Ekle (En Kolay)
```tsx
<h2 id="bank-hours" className="...">
  🏦 Bank Hours in New York
</h2>
```

ScrollFAB otomatik olarak `h2[id]` elementlerini tespit eder.

#### Yöntem B: data-scroll-section Attribute (En Esnek)
```tsx
<section 
  id="bank-hours"
  data-scroll-section
  data-scroll-label="Bank Hours"
  data-scroll-icon="🏦"
>
  ...
</section>
```

#### Yöntem C: Manuel Section Geçirme
```tsx
import ScrollFAB from '@/components/ScrollFAB'

const sections = [
  { id: 'intro', label: 'Introduction', icon: '📖' },
  { id: 'bank-hours', label: 'Bank Hours', icon: '🏦' },
  { id: 'retail', label: 'Retail Stores', icon: '🛍️' },
  { id: 'faq', label: 'FAQ', icon: '❓' }
]

<ScrollFAB sections={sections} mode="forced" isLight={isLight} />
```

---

## 📐 Best Practices

### ID Naming Convention
```
✅ Doğru:
- bank-hours
- retail-stores
- faq-section

❌ Yanlış:
- BankHours (camelCase)
- bank_hours (underscore)
- section1 (anlamsız)
```

### Section Sayısı
- **Minimum:** 3 section (daha az = FAB görünmez)
- **Optimum:** 5-10 section
- **Maximum:** 15+ section varsa TOC kullan

### Emoji İkonları
ScrollFAB h2 içindeki emoji'leri otomatik algılar:
```tsx
<h2 id="banks">🏦 Bank Hours</h2>
// → icon: "🏦", label: "Bank Hours"
```

---

## 🎨 Tema Entegrasyonu

GlobalScrollFAB `useCityContext` ile tema bilgisi alır:

```tsx
// Otomatik tema algılama
const { isLight } = useCityContext()

// Light mode: Koyu buton (bg-slate-800)
// Dark mode: Açık buton (bg-white)
```

---

## ♿ Accessibility

### Otomatik Özellikler
- Dynamic `aria-label` (state'e göre değişir)
- `focus:ring` keyboard navigation için
- `prefers-reduced-motion` desteği

### Ekstra Öneriler
```tsx
// Skip link ekleyin (isteğe bağlı)
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## 🔧 Troubleshooting

### FAB Görünmüyor
1. Sayfa yeterince uzun mu? (`> 4 * viewport height`)
2. En az 3 section var mı?
3. Section'ların ID'leri var mı?

### Section'lar Algılanmıyor
```tsx
// Console'da kontrol:
document.querySelectorAll('h2[id], [data-scroll-section]')
```

### Mobilde Görünüm Sorunu
```tsx
// safe-area-inset kontrolü
style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
```

---

## 📊 Analytics (İsteğe Bağlı)

FAB click'lerini track etmek için:

```tsx
const handleClick = () => {
  // GA4 event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'scroll_fab_click', {
      action: fabState,
      page_path: window.location.pathname
    })
  }
}
```

---

## 📁 Dosya Yapısı

```
components/
├── ScrollFAB.tsx           # Core component
├── GlobalScrollFAB.tsx     # Context-aware wrapper
└── TableOfContents.tsx     # Mevcut TOC (guide sayfaları için)
```

---

## 🔄 Güncelleme Geçmişi

- **v1.0** (2025-01-06): İlk sürüm
  - Context-aware morphing FAB
  - Auto section detection
  - First-time label
  - Haptic feedback
  - Accessibility support
