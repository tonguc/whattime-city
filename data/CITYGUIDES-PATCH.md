# cityGuides.ts GÜNCELLEME TALİMATI

⚠️ **ÖNEMLİ:** Yeni dosya değil, mevcut dosyanıza EKLEMELER yapacaksınız!

---

## 📍 Dosya Konumu
`data/cityGuides.ts` (veya `src/data/cityGuides.ts`)

---

## ✏️ Yapılacak Değişiklikler

### 1️⃣ DOSYA BAŞINA IMPORT EKLEYİN

Mevcut import'larınızın altına şunu ekleyin:

```typescript
// Mevcut import'lar (DOKUNMAYIN)
// import { newYorkGuide } from './guides/new-york';
// import { sydneyGuide } from './guides/sydney';
// ... diğer import'larınız

// YENİ - Los Angeles import'u EKLE
import { losAngelesGuide } from './guides/los-angeles';
```

---

### 2️⃣ cityGuides OBJECT'İNE ENTRY EKLEYİN

```typescript
export const cityGuides = {
  'new-york': newYorkGuide,  // Mevcut - DOKUNMAYIN
  'sydney': sydneyGuide,      // Mevcut - DOKUNMAYIN
  
  // YENİ - Los Angeles entry EKLE
  'los-angeles': losAngelesGuide,
  
  // ... diğer şehirleriniz - DOKUNMAYIN
  'london': londonGuide,
  'tokyo': tokyoGuide,
  // vs.
};
```

---

## 📋 ÖRNEK: Tam Dosya Görünümü

```typescript
// data/cityGuides.ts

// MEVCUT IMPORTS (örnekler - sizinkilere benzer)
import { newYorkGuide } from './guides/new-york';
import { sydneyGuide } from './guides/sydney';
import { londonGuide } from './guides/london';

// YENİ - LOS ANGELES IMPORT ← BURAYI EKLEYİN
import { losAngelesGuide } from './guides/los-angeles';

// Types (eğer varsa - DOKUNMAYIN)
interface CityTime {
  name: string;
  timezone: string;
}

interface SubPage {
  icon: string;
  title: string;
  slug: string;
  description: string;
}

interface CityGuide {
  city: string;
  slug: string;
  timezone: string;
  quickTimeCities: CityTime[];
  subPages: SubPage[];
}

// MAIN EXPORT
export const cityGuides: Record<string, CityGuide> = {
  'new-york': newYorkGuide,        // Mevcut
  'sydney': sydneyGuide,            // Mevcut
  'london': londonGuide,            // Mevcut (örnek)
  
  'los-angeles': losAngelesGuide,   // ← YENİ - BURAYI EKLEYİN
  
  // ... diğer şehirleriniz
};

// Helper functions (eğer varsa - DOKUNMAYIN)
export function getCityGuide(slug: string): CityGuide | null {
  return cityGuides[slug] || null;
}

export function getAllCitySlugs(): string[] {
  return Object.keys(cityGuides);
}
```

---

## ⚠️ YAPMAYIN

❌ Tüm dosyayı silip yeniden yazmayın
❌ Mevcut şehir entry'lerini değiştirmeyin
❌ Mevcut import'ları silmeyin

## ✅ YAPIN

✅ Sadece 2 satır ekleyin:
   - 1 import satırı (dosya başında)
   - 1 object entry (cityGuides içinde)

---

## 🔍 Doğrulama

Değişiklikten sonra dosyanız şöyle görünmeli:

```typescript
import { losAngelesGuide } from './guides/los-angeles';  ← Yeni import var
// ... diğer import'lar

export const cityGuides = {
  'new-york': ...,
  'los-angeles': losAngelesGuide,  ← Yeni entry var
  // ...
};
```

---

## 🚀 Alternatif: GitHub Web UI'de Düzenleme

1. GitHub'da `data/cityGuides.ts` dosyasını açın
2. Sağ üstteki **✏️ Edit** butonuna tıklayın
3. Import bölümüne `import { losAngelesGuide } from './guides/los-angeles';` ekleyin
4. `cityGuides` object'ine `'los-angeles': losAngelesGuide,` ekleyin
5. **Commit changes** tıklayın

---

**Bu kadar!** Sadece 2 satır ekleme, build başarılı olmalı. ✅
