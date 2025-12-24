# whattime.city Frontend Mimari Dokümanı

**Versiyon:** 1.0  
**Tarih:** Aralık 2024  
**Yazar:** Staff+ Frontend Architect

---

## 📋 İçindekiler

1. [Mevcut Durum Analizi](#1-mevcut-durum-analizi)
2. [Mimari Genel Bakış](#2-mimari-genel-bakış)
3. [Klasör ve Dosya Yapısı](#3-klasör-ve-dosya-yapısı)
4. [Component ve Logic Kuralları](#4-component-ve-logic-kuralları)
5. [State Yönetimi Stratejisi](#5-state-yönetimi-stratejisi)
6. [Routing ve Sayfa Mimarisi](#6-routing-ve-sayfa-mimarisi)
7. [Performans ve Ölçeklenebilirlik](#7-performans-ve-ölçeklenebilirlik)
8. [Kod Standartları ve Syntax Kuralları](#8-kod-standartları-ve-syntax-kuralları)
9. [Definition of Done (DoD)](#9-definition-of-done-dod)
10. [Migration ve Refactor Planı](#10-migration-ve-refactor-planı)
11. [Somut Örnekler](#11-somut-örnekler)
12. [Asla İhlal Edilmemesi Gereken 10 Kural](#12-asla-ihlal-edilmemesi-gereken-10-kural)

---

## 1. Mevcut Durum Analizi

### 📊 Sayısal Veriler

| Metrik | Değer | Risk Seviyesi |
|--------|-------|---------------|
| Toplam dosya sayısı | 152 | 🟡 Orta |
| En büyük dosya (WorldClock.tsx) | 1,179 satır | 🔴 Kritik |
| lib/cities.ts | 5,212 satır | 🔴 Kritik |
| Component sayısı | 34 | 🟢 Normal |
| useState/useEffect (WorldClock) | 22 | 🔴 Kritik |
| Tekrar eden kod pattern'leri | 15+ | 🔴 Kritik |

### 🔴 Tespit Edilen Sorunlar

#### Sorun 1: God Components
```
WorldClock.tsx (1,179 satır)
├── Alarm logic
├── Weather fetching
├── Theme calculation
├── Favorites management
├── City selection
├── Time formatting
└── 22 useState/useEffect
```
**Problem:** Tek dosyada çok fazla sorumluluk, test edilemez, bakımı zor.

#### Sorun 2: Data + Logic Karışımı
```
lib/cities.ts (5,212 satır)
├── 401 şehir verisi (data)
├── 191 ülke verisi (data)
├── getCityBySlug() (logic)
├── searchCities() (logic)
└── getCitiesByContinent() (logic)
```
**Problem:** Data değişikliği tüm fonksiyonları etkiliyor, import süresi uzun.

#### Sorun 3: Tekrar Eden Kod
```typescript
// 2 farklı dosyada aynı fonksiyon:
// app/country/[country]/page.tsx
function getFlagUrl(countryCode: string): string { ... }

// components/CountriesContent.tsx  
function getFlagUrl(countryCode: string): string { ... }
```
**Problem:** Bir yerde düzeltme yapılınca diğeri unutuluyor.

#### Sorun 4: Tutarsız Theme Yönetimi
```
Header        → CityContext'ten ✅
HomePage      → Kendi hesaplıyordu ❌ (düzeltildi)
CitiesContent → Kendi hesaplıyordu ❌ (düzeltildi)
WorldClock    → Kendi hesaplıyor ⚠️
TimeComparison→ Kendi header'ı var ❌
```
**Problem:** Theme değişikliği tüm sayfalara yansımıyor.

---

## 2. Mimari Genel Bakış

### 🎯 Temel Prensipler

| Prensip | Açıklama |
|---------|----------|
| **Single Responsibility** | Her dosya TEK bir iş yapar |
| **Separation of Concerns** | UI, Logic, Data ayrı katmanlarda |
| **DRY (Don't Repeat Yourself)** | Ortak kod utils/ altında |
| **Composition over Inheritance** | Küçük component'ler birleşir |
| **Colocation** | İlişkili dosyalar yakın durur |
| **Explicit over Implicit** | Açık import, açık dependency |

### 🏗️ Katmanlı Mimari

```
┌─────────────────────────────────────────────────────────────┐
│                        PAGES (app/)                         │
│  Route tanımı, metadata, minimal logic, layout composition  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    FEATURES (features/)                      │
│  Feature-specific components, hooks, utils                   │
│  Örnek: features/clock/, features/tools/, features/guide/   │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    SHARED (shared/)                          │
│  Reusable UI components, common hooks, utilities            │
│  Örnek: shared/ui/, shared/hooks/, shared/utils/            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      CORE (core/)                            │
│  Global state, types, constants, API clients                 │
│  Örnek: core/context/, core/types/, core/api/               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATA (data/)                            │
│  Static data, JSON files, constants                          │
│  Örnek: data/cities.json, data/countries.json               │
└─────────────────────────────────────────────────────────────┘
```

### 📦 Feature-Based Organizasyon

```
Her feature kendi içinde complete:
features/
├── clock/
│   ├── components/
│   │   ├── DigitalClock.tsx
│   │   ├── AnalogClock.tsx
│   │   └── ClockDisplay.tsx
│   ├── hooks/
│   │   └── useClockTime.ts
│   ├── utils/
│   │   └── formatTime.ts
│   └── index.ts          # Public API
│
├── alarm/
│   ├── components/
│   ├── hooks/
│   └── index.ts
```

---

## 3. Klasör ve Dosya Yapısı

### 📁 Hedef Klasör Yapısı

```
whattime-city/
├── app/                          # Next.js App Router (SADECE routing)
│   ├── (main)/                   # Ana layout grubu
│   │   ├── layout.tsx
│   │   ├── page.tsx              # HomePage feature'ını render eder
│   │   ├── [city]/
│   │   │   └── page.tsx          # CityPage feature'ını render eder
│   │   └── ...
│   ├── (tools)/                  # Tools layout grubu
│   │   ├── layout.tsx
│   │   └── tools/
│   │       ├── page.tsx
│   │       ├── converter/
│   │       └── ...
│   └── globals.css
│
├── core/                         # Uygulama çekirdeği
│   ├── context/
│   │   ├── CityContext.tsx
│   │   ├── ThemeContext.tsx      # Theme logic ayrıldı
│   │   └── index.ts
│   ├── types/
│   │   ├── city.ts
│   │   ├── country.ts
│   │   ├── weather.ts
│   │   ├── alarm.ts
│   │   └── index.ts
│   ├── constants/
│   │   ├── routes.ts
│   │   └── config.ts
│   └── api/
│       └── weather.ts
│
├── data/                         # Statik veriler (SADECE data)
│   ├── cities.ts                 # Şehir array'i
│   ├── countries.ts              # Ülke array'i
│   └── translations.ts
│
├── features/                     # Feature modülleri
│   ├── home/
│   │   ├── components/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── WorldCitiesGrid.tsx
│   │   │   ├── CompareWidget.tsx
│   │   │   └── QuickTools.tsx
│   │   ├── hooks/
│   │   │   └── useHomeWeather.ts
│   │   └── index.ts
│   │
│   ├── clock/
│   │   ├── components/
│   │   │   ├── WorldClock/
│   │   │   │   ├── WorldClock.tsx       # Ana container (max 150 satır)
│   │   │   │   ├── ClockHeader.tsx
│   │   │   │   ├── ClockDisplay.tsx
│   │   │   │   ├── CitySelector.tsx
│   │   │   │   └── FavoritesList.tsx
│   │   │   ├── DigitalClock.tsx
│   │   │   └── AnalogClock.tsx
│   │   ├── hooks/
│   │   │   ├── useClockTime.ts
│   │   │   └── useFavorites.ts
│   │   └── index.ts
│   │
│   ├── alarm/
│   │   ├── components/
│   │   │   ├── AlarmModal.tsx
│   │   │   ├── AlarmList.tsx
│   │   │   └── AlarmPopup.tsx
│   │   ├── hooks/
│   │   │   └── useAlarm.ts
│   │   └── index.ts
│   │
│   ├── weather/
│   │   ├── components/
│   │   │   ├── WeatherBadge.tsx
│   │   │   └── WeatherBackground.tsx
│   │   ├── hooks/
│   │   │   └── useWeather.ts
│   │   └── index.ts
│   │
│   ├── tools/
│   │   ├── converter/
│   │   ├── meeting-planner/
│   │   ├── flight-times/
│   │   └── ...
│   │
│   ├── city/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   │
│   ├── country/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   │
│   └── guide/
│       ├── components/
│       ├── content/
│       └── index.ts
│
├── shared/                       # Paylaşılan (cross-feature)
│   ├── ui/                       # UI Primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Input.tsx
│   │   ├── Dropdown.tsx
│   │   └── index.ts
│   │
│   ├── components/               # Composite components
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── NavLinks.tsx
│   │   │   └── SettingsDropdown.tsx
│   │   ├── Footer.tsx
│   │   ├── PageWrapper.tsx
│   │   ├── FlagImage.tsx
│   │   ├── TimeIcons.tsx
│   │   └── ScrollToTop.tsx
│   │
│   ├── hooks/                    # Ortak hooks
│   │   ├── useLocalStorage.ts
│   │   ├── useMediaQuery.ts
│   │   ├── useDebounce.ts
│   │   └── index.ts
│   │
│   └── utils/                    # Utility fonksiyonlar
│       ├── time.ts               # formatTime, parseTime
│       ├── date.ts               # formatDate, parseDate
│       ├── flags.ts              # getFlagUrl (TEK YER!)
│       ├── string.ts             # slugify, capitalize
│       ├── cn.ts                 # className helper
│       └── index.ts
│
├── lib/                          # Domain logic (business rules)
│   ├── cities/
│   │   ├── queries.ts            # getCityBySlug, searchCities
│   │   ├── filters.ts            # getCitiesByContinent
│   │   └── index.ts
│   ├── countries/
│   │   ├── queries.ts
│   │   └── index.ts
│   ├── sun-calculator.ts
│   └── themes.ts
│
├── public/
│   ├── icons/
│   ├── images/
│   └── ...
│
├── ARCHITECTURE.md               # Bu doküman
├── CHANGELOG.md
├── README.md
└── package.json
```

### 📝 Dosya İsimlendirme Kuralları

| Tip | Format | Örnek |
|-----|--------|-------|
| Component | PascalCase | `ClockDisplay.tsx` |
| Hook | camelCase, use prefix | `useClockTime.ts` |
| Utility | camelCase | `formatTime.ts` |
| Type | PascalCase | `City.ts` |
| Constant | SCREAMING_SNAKE | `API_ENDPOINTS.ts` |
| Data file | kebab-case | `cities-data.ts` |
| Index (barrel) | lowercase | `index.ts` |

### 📏 Dosya Boyut Limitleri

| Tip | Max Satır | Aksiyon |
|-----|-----------|---------|
| Component | 200 | Parçala |
| Hook | 100 | Parçala |
| Utility | 50 | Yeni dosya |
| Page | 50 | Feature'a taşı |
| Index | 30 | Sadece export |

---

## 4. Component ve Logic Kuralları

### ✅ Component'ler SADECE Şunları Yapabilir

```typescript
// ✅ DOĞRU: Pure presentational component
function CityCard({ city, time, onSelect }: CityCardProps) {
  return (
    <div onClick={() => onSelect(city)} className="...">
      <h3>{city.name}</h3>
      <span>{time}</span>
    </div>
  )
}
```

| İzin Verilen | Yasak |
|--------------|-------|
| Props alır | API çağrısı yapar |
| JSX render eder | Business logic içerir |
| Event handler çağırır | Global state manipüle eder |
| Local UI state (hover, open) | Data transformation |
| Styling | Side effects (fetch, localStorage) |

### ❌ Component'lerde ASLA Yapılmaması Gerekenler

```typescript
// ❌ YANLIŞ: Component içinde business logic
function CityCard({ city }: { city: City }) {
  const [weather, setWeather] = useState(null)
  
  // ❌ API çağrısı component içinde
  useEffect(() => {
    fetch(`/api/weather/${city.id}`)
      .then(r => r.json())
      .then(setWeather)
  }, [city.id])
  
  // ❌ Data transformation component içinde
  const formattedTime = new Date().toLocaleTimeString('en-US', {
    timeZone: city.timezone,
    hour: '2-digit',
    minute: '2-digit'
  })
  
  return <div>...</div>
}
```

### 🪝 Hook Kuralları

#### Hook Ne Zaman Oluşturulmalı?

| Durum | Aksiyon |
|-------|---------|
| 3+ component aynı state logic kullanıyor | Hook oluştur |
| Side effect (fetch, subscription) | Hook oluştur |
| Complex state (reducer gerekli) | Hook oluştur |
| Sadece 1 component kullanıyor | Component içinde kal |

#### Hook Yapısı

```typescript
// features/alarm/hooks/useAlarm.ts

import { useState, useCallback, useEffect } from 'react'
import type { Alarm } from '@/core/types'

interface UseAlarmReturn {
  alarms: Alarm[]
  activeAlarm: Alarm | null
  addAlarm: (alarm: Omit<Alarm, 'id'>) => void
  removeAlarm: (id: number) => void
  dismissAlarm: () => void
}

export function useAlarm(): UseAlarmReturn {
  const [alarms, setAlarms] = useState<Alarm[]>([])
  const [activeAlarm, setActiveAlarm] = useState<Alarm | null>(null)
  
  const addAlarm = useCallback((alarm: Omit<Alarm, 'id'>) => {
    setAlarms(prev => [...prev, { ...alarm, id: Date.now() }])
  }, [])
  
  const removeAlarm = useCallback((id: number) => {
    setAlarms(prev => prev.filter(a => a.id !== id))
  }, [])
  
  const dismissAlarm = useCallback(() => {
    setActiveAlarm(null)
  }, [])
  
  // Alarm check effect
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const triggered = alarms.find(a => a.active && a.triggerTime <= now)
      if (triggered) {
        setActiveAlarm(triggered)
        setAlarms(prev => prev.map(a => 
          a.id === triggered.id ? { ...a, active: false } : a
        ))
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [alarms])
  
  return { alarms, activeAlarm, addAlarm, removeAlarm, dismissAlarm }
}
```

### 📊 Sorumluluk Dağılımı Tablosu

| Katman | Sorumluluk | Örnek |
|--------|------------|-------|
| `app/` | Route, metadata | `page.tsx`, `layout.tsx` |
| `features/*/components/` | UI render | `ClockDisplay.tsx` |
| `features/*/hooks/` | Feature logic | `useAlarm.ts` |
| `shared/ui/` | Primitive UI | `Button.tsx` |
| `shared/hooks/` | Generic logic | `useLocalStorage.ts` |
| `shared/utils/` | Pure functions | `formatTime.ts` |
| `core/context/` | Global state | `CityContext.tsx` |
| `core/types/` | TypeScript types | `City.ts` |
| `lib/` | Domain logic | `getCityBySlug.ts` |
| `data/` | Static data | `cities.ts` |

---

## 5. State Yönetimi Stratejisi

### 🌍 Global State (Context)

**Sadece şunlar global olmalı:**

| State | Neden Global? | Context |
|-------|---------------|---------|
| `activeCity` | Tüm sayfalar kullanıyor | CityContext |
| `detectedCity` | User location, bir kez detect | CityContext |
| `themeMode` | Header + tüm sayfalar | CityContext |
| `use12Hour` | Tüm saat gösterimleri | CityContext |
| `clockMode` | Digital/Analog preference | CityContext |
| `favorites` | Birden fazla sayfa | CityContext |

### 🏠 Local State (Component/Hook)

**Şunlar local kalmalı:**

| State | Neden Local? | Yer |
|-------|--------------|-----|
| `searchQuery` | Sadece o component | Component |
| `isDropdownOpen` | UI state | Component |
| `weather` | Sayfa bazlı | Feature hook |
| `alarms` | Tool specific | Feature hook |
| `formData` | Form specific | Component |

### 🚫 State Sprawl Önleme Kuralları

```typescript
// ❌ YANLIŞ: Her şey global
const CityContext = {
  activeCity,
  weather,        // ❌ Sadece bazı sayfalarda lazım
  alarms,         // ❌ Sadece alarm tool'unda lazım
  searchResults,  // ❌ Sadece search'te lazım
  formData,       // ❌ Sadece form'da lazım
  // ... 50 tane daha
}

// ✅ DOĞRU: Minimal global, feature-specific hooks
const CityContext = { activeCity, detectedCity, themeMode }
const useAlarm = () => { /* alarm logic */ }
const useWeather = (city) => { /* weather logic */ }
```

### 📐 Context Yapısı

```typescript
// core/context/CityContext.tsx

interface CityContextValue {
  // === CITY STATE ===
  activeCity: City
  setActiveCity: (city: City) => void
  detectedCity: City | null
  
  // === THEME STATE ===
  themeMode: 'auto' | 'light' | 'dark'
  setThemeMode: (mode: 'auto' | 'light' | 'dark') => void
  theme: Theme           // Computed
  isLight: boolean       // Computed
  
  // === PREFERENCES ===
  use12Hour: boolean
  setUse12Hour: (v: boolean) => void
  clockMode: 'digital' | 'analog'
  setClockMode: (v: 'digital' | 'analog') => void
  
  // === FAVORITES ===
  favorites: City[]
  toggleFavorite: (city: City) => void
  
  // === COMPUTED HELPERS ===
  time: Date
  getLocalTime: (city: City) => string
  getLocalDate: (city: City) => string
  getCityTimeOfDay: (city: City) => TimeOfDay
}
```

---

## 6. Routing ve Sayfa Mimarisi

### 📍 Page Dosyası Kuralları

```typescript
// app/[city]/page.tsx - SADECE routing ve metadata

import { Metadata } from 'next'
import { getCityBySlug } from '@/lib/cities'
import { CityPage } from '@/features/city'  // Feature'dan import

interface Props {
  params: Promise<{ city: string }>
}

// Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  // ... metadata return
}

// Static params
export async function generateStaticParams() {
  // ... return paths
}

// Page component - SADECE feature'ı render eder
export default async function Page({ params }: Props) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) notFound()
  
  return <CityPage city={city} />  // Feature component
}
```

### 🗂️ Layout Grupları

```
app/
├── (main)/                    # Ana site layout
│   ├── layout.tsx             # Header + Footer
│   ├── page.tsx               # Home
│   ├── [city]/
│   ├── cities/
│   └── country/
│
├── (tools)/                   # Tools layout (farklı sidebar?)
│   ├── layout.tsx
│   └── tools/
│
├── (embed)/                   # Embed layout (minimal, no header)
│   ├── layout.tsx
│   └── embed/
│
└── (guide)/                   # Guide layout
    ├── layout.tsx
    └── [city]/guide/
```

### 🔗 Shared Layout

```typescript
// app/(main)/layout.tsx

import { Header } from '@/shared/components/Header'
import { Footer } from '@/shared/components/Footer'
import { CityProvider } from '@/core/context'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <CityProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </CityProvider>
  )
}
```

---

## 7. Performans ve Ölçeklenebilirlik

### ⚡ Code Splitting Kuralları

```typescript
// ✅ Lazy load heavy components
const WorldMap = dynamic(() => import('@/features/map'), {
  loading: () => <MapSkeleton />,
  ssr: false  // Map client-only
})

const AlarmModal = dynamic(() => import('@/features/alarm').then(m => m.AlarmModal))

// ✅ Route-based splitting (Next.js otomatik)
// Her page.tsx ayrı chunk

// ❌ YANLIŞ: Her şeyi eager import
import { WorldClock } from '@/features/clock'
import { WorldMap } from '@/features/map'
import { AlarmModal } from '@/features/alarm'
import { MeetingPlanner } from '@/features/tools'
// ... hepsi ana bundle'a giriyor
```

### 🗃️ Caching Stratejisi

```typescript
// Data fetching with caching
// lib/cities/queries.ts

import { cache } from 'react'

// React cache - request deduplication
export const getCityBySlug = cache((slug: string): City | undefined => {
  return cities.find(c => c.slug === slug)
})

// Static data - build time
export const getAllCities = cache((): City[] => {
  return cities
})
```

### 🔄 Re-render Önleme

```typescript
// ✅ Memoize expensive computations
const sortedCities = useMemo(() => {
  return [...cities].sort((a, b) => a.city.localeCompare(b.city))
}, []) // cities değişmeyeceği için boş dependency

// ✅ Memoize callbacks
const handleSelect = useCallback((city: City) => {
  setActiveCity(city)
  router.push(`/${city.slug}`)
}, [setActiveCity, router])

// ✅ Memoize components
const CityCard = memo(function CityCard({ city, onSelect }: Props) {
  return <div>...</div>
})

// ❌ YANLIŞ: Her render'da yeni referans
<CityCard 
  onClick={() => handleClick(city)}  // Her render'da yeni fonksiyon
  style={{ color: 'red' }}            // Her render'da yeni object
/>
```

### 🖼️ Asset Optimizasyonu

```typescript
// ✅ Next.js Image component
import Image from 'next/image'

<Image 
  src={getFlagUrl(code)} 
  alt={`${name} flag`}
  width={32} 
  height={24}
  loading="lazy"
/>

// ✅ SVG inline for icons
import { ClockIcon } from '@/shared/icons'

// ❌ YANLIŞ: Büyük resimler için <img>
<img src="/large-map.png" />
```

---

## 8. Kod Standartları ve Syntax Kuralları

### 📦 Import Sırası

```typescript
// 1. React
import { useState, useEffect, memo } from 'react'

// 2. Next.js
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

// 3. External libraries
import { format } from 'date-fns'

// 4. Core (types, context)
import type { City, Country } from '@/core/types'
import { useCityContext } from '@/core/context'

// 5. Features (feature imports)
import { ClockDisplay } from '@/features/clock'

// 6. Shared (components, hooks, utils)
import { Button, Card } from '@/shared/ui'
import { useDebounce } from '@/shared/hooks'
import { formatTime } from '@/shared/utils'

// 7. Lib (domain logic)
import { getCityBySlug } from '@/lib/cities'

// 8. Relative imports (same feature)
import { CityCard } from './CityCard'
import { useCityList } from '../hooks'

// 9. Styles
import styles from './Component.module.css'
```

### 📏 TypeScript Kuralları

```typescript
// ✅ Explicit return types for public functions
export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

// ✅ Interface for props
interface CityCardProps {
  city: City
  isSelected?: boolean
  onSelect: (city: City) => void
}

// ✅ Type for hooks return
interface UseAlarmReturn {
  alarms: Alarm[]
  addAlarm: (alarm: Omit<Alarm, 'id'>) => void
}

// ✅ Const assertion for static data
export const CONTINENTS = ['americas', 'europe', 'asia', 'africa', 'oceania'] as const
type Continent = typeof CONTINENTS[number]

// ❌ YANLIŞ: any kullanımı
function processData(data: any) { }  // ❌

// ❌ YANLIŞ: Type assertion suistimali
const city = data as City  // ❌ Validation olmadan
```

### 📝 ESLint / Prettier Kuralları

```json
// .eslintrc.json
{
  "extends": ["next/core-web-vitals"],
  "rules": {
    "react/no-unescaped-entities": "off",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "prefer-const": "error",
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/explicit-function-return-type": ["error", {
      "allowExpressions": true
    }],
    "max-lines": ["warn", { "max": 200, "skipBlankLines": true }],
    "complexity": ["warn", 10]
  }
}
```

```json
// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

### 🤖 AI-Generated Kod Kuralları

AI (Claude) tarafından üretilen kod şu kurallara UYGUN olmalı:

| Kural | Açıklama |
|-------|----------|
| **Tek Sorumluluk** | Her fonksiyon/component tek iş yapmalı |
| **Mevcut Pattern'leri Kullan** | Yeni pattern icat etme |
| **Utils'e Bak** | Ortak fonksiyon var mı kontrol et |
| **Import Check** | Doğru yerden import edildiğini doğrula |
| **Type Safety** | any kullanma, proper types kullan |
| **Max 200 Satır** | Dosya 200 satırı geçmesin |
| **Grep First** | Değişiklik öncesi mevcut kodu tara |

---

## 9. Definition of Done (DoD)

### ✅ Her Feature İçin Checklist

```markdown
## Feature: [Feature Name]

### 📁 Yapı
- [ ] Feature kendi klasöründe (`features/[name]/`)
- [ ] Public API `index.ts`'den export ediliyor
- [ ] Component dosyaları max 200 satır
- [ ] Hook dosyaları max 100 satır

### 🎨 Component
- [ ] Props interface tanımlı
- [ ] UI logic component'te, business logic hook'ta
- [ ] Memoization gerekli yerlerde uygulandı
- [ ] Error boundary var (gerekirse)

### 🔧 Logic
- [ ] Business logic hook'a taşındı
- [ ] Side effect'ler hook'ta
- [ ] Pure functions utils'te

### 🌍 State
- [ ] Global state sadece gerekli olanlar
- [ ] Local state component/hook'ta
- [ ] Context doğru yerden consume ediliyor

### 📝 Types
- [ ] Tüm props typed
- [ ] Return types explicit
- [ ] no `any`

### ⚡ Performans
- [ ] Lazy loading uygulandı (gerekirse)
- [ ] useMemo/useCallback doğru kullanıldı
- [ ] Gereksiz re-render yok

### 🧪 Test (gelecekte)
- [ ] Unit test yazıldı
- [ ] Integration test yazıldı

### 📚 Dokümantasyon
- [ ] JSDoc comments (public API)
- [ ] README güncellendi (gerekirse)
```

---

## 10. Migration ve Refactor Planı

### 📅 Faz Planı

```
Faz 0: Altyapı Hazırlığı (1 gün)
├── Klasör yapısı oluştur
├── tsconfig paths güncelle
└── Barrel files (index.ts) oluştur

Faz 1: Utils & Types (1 gün)
├── shared/utils/ oluştur
├── core/types/ oluştur
└── Tekrar eden kodları taşı

Faz 2: Data Ayrımı (1 gün)
├── data/cities.ts (sadece data)
├── lib/cities/queries.ts (fonksiyonlar)
└── Import'ları güncelle

Faz 3: Shared Components (2 gün)
├── shared/ui/ primitives
├── shared/components/Header/
├── shared/components/Footer
└── FlagImage, ScrollToTop vb.

Faz 4: Feature Modülleri (3-5 gün)
├── features/clock/ (WorldClock parçalama)
├── features/alarm/
├── features/weather/
├── features/home/
└── features/city/

Faz 5: Tools Feature (2 gün)
├── features/tools/converter/
├── features/tools/meeting-planner/
└── Diğer tools...

Faz 6: Temizlik (1 gün)
├── Eski dosyaları sil
├── Import'ları kontrol et
└── Build & test
```

### 🎯 Faz 1: Utils & Types (İLK ADIM)

#### Adım 1.1: Klasör Yapısı
```bash
mkdir -p core/types
mkdir -p shared/utils
mkdir -p shared/hooks
```

#### Adım 1.2: Types Oluştur
```typescript
// core/types/city.ts
export interface City {
  slug: string
  city: string
  timezone: string
  country: string
  countryCode: string
  lat: number
  lng: number
  tier: 1 | 2 | 3
  continent: Continent
  info?: CityInfo
}

export interface CityInfo {
  currency: string
  currencySymbol: string
  population: string
  // ...
}

export type Continent = 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'
export type TimeOfDay = 'dawn' | 'day' | 'dusk' | 'night'
```

#### Adım 1.3: Utils Oluştur
```typescript
// shared/utils/flags.ts
export function getFlagUrl(countryCode: string, size: 'sm' | 'md' | 'lg' = 'md'): string {
  const sizeMap = { sm: 20, md: 40, lg: 80 }
  return `https://flagcdn.com/w${sizeMap[size]}/${countryCode.toLowerCase()}.png`
}

// shared/utils/time.ts
export function formatTime(date: Date, timezone: string, use12Hour: boolean): string {
  return date.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: use12Hour
  })
}

// shared/utils/index.ts
export * from './flags'
export * from './time'
export * from './date'
export * from './string'
```

#### Adım 1.4: tsconfig paths
```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"],
      "@/core/*": ["./core/*"],
      "@/features/*": ["./features/*"],
      "@/shared/*": ["./shared/*"],
      "@/lib/*": ["./lib/*"],
      "@/data/*": ["./data/*"]
    }
  }
}
```

### 🔄 Migration Güvenliği

```typescript
// GÜVENLI TAŞIMA PROSEDÜRÜ:

// 1. Yeni dosya oluştur
// shared/utils/flags.ts
export function getFlagUrl(...) { ... }

// 2. Eski dosyada yeni dosyayı re-export et (backward compat)
// components/CountriesContent.tsx (geçici)
export { getFlagUrl } from '@/shared/utils/flags'

// 3. Tüm import'ları güncelle
// import { getFlagUrl } from '@/shared/utils'

// 4. Eski export'u sil

// 5. Build & test
```

---

## 11. Somut Örnekler

### 📁 Örnek: Clock Feature Yapısı

```
features/
└── clock/
    ├── components/
    │   ├── WorldClock/
    │   │   ├── WorldClock.tsx        # Container (150 satır)
    │   │   ├── ClockHeader.tsx       # Header section
    │   │   ├── ClockDisplay.tsx      # Time display
    │   │   ├── CitySelector.tsx      # City dropdown
    │   │   ├── FavoritesList.tsx     # Favorites
    │   │   └── index.ts
    │   ├── DigitalClock.tsx
    │   ├── AnalogClock.tsx
    │   └── index.ts
    ├── hooks/
    │   ├── useClockTime.ts
    │   ├── useFavorites.ts
    │   └── index.ts
    ├── utils/
    │   └── formatClockTime.ts
    └── index.ts                      # Public API
```

### 📝 Örnek: WorldClock Parçalama

```typescript
// features/clock/components/WorldClock/WorldClock.tsx (CONTAINER)

import { useCityContext } from '@/core/context'
import { useWeather } from '@/features/weather'
import { useAlarm } from '@/features/alarm'
import { ClockHeader } from './ClockHeader'
import { ClockDisplay } from './ClockDisplay'
import { CitySelector } from './CitySelector'
import { FavoritesList } from './FavoritesList'

interface WorldClockProps {
  initialCity?: City
}

export function WorldClock({ initialCity }: WorldClockProps) {
  const { activeCity, theme, isLight } = useCityContext()
  const { weather } = useWeather(activeCity)
  const { alarms, addAlarm } = useAlarm()
  
  const city = initialCity || activeCity
  
  return (
    <div className={theme.bg}>
      <ClockHeader city={city} weather={weather} />
      <ClockDisplay city={city} />
      <CitySelector />
      <FavoritesList />
    </div>
  )
}
```

```typescript
// features/clock/components/WorldClock/ClockDisplay.tsx

import { memo } from 'react'
import { useCityContext } from '@/core/context'
import { DigitalClock } from '../DigitalClock'
import { AnalogClock } from '../AnalogClock'

interface ClockDisplayProps {
  city: City
}

export const ClockDisplay = memo(function ClockDisplay({ city }: ClockDisplayProps) {
  const { clockMode, use12Hour, getLocalTime } = useCityContext()
  const timeStr = getLocalTime(city)
  
  return (
    <div className="clock-display">
      {clockMode === 'digital' ? (
        <DigitalClock time={timeStr} />
      ) : (
        <AnalogClock timezone={city.timezone} />
      )}
    </div>
  )
})
```

### 📝 Örnek: Hook

```typescript
// features/weather/hooks/useWeather.ts

import { useState, useEffect } from 'react'
import type { City } from '@/core/types'
import type { WeatherData } from '../types'
import { fetchWeather } from '../api'

interface UseWeatherReturn {
  weather: WeatherData | null
  isLoading: boolean
  error: Error | null
  refetch: () => void
}

export function useWeather(city: City): UseWeatherReturn {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  
  const fetchData = async () => {
    setIsLoading(true)
    setError(null)
    
    try {
      const data = await fetchWeather(city.lat, city.lng)
      setWeather(data)
    } catch (err) {
      setError(err as Error)
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(() => {
    fetchData()
    
    // Refresh every 30 minutes
    const interval = setInterval(fetchData, 30 * 60 * 1000)
    return () => clearInterval(interval)
  }, [city.slug])
  
  return { weather, isLoading, error, refetch: fetchData }
}
```

### 📝 Örnek: Page Dosyası

```typescript
// app/[city]/page.tsx

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCityBySlug, getAllSlugs } from '@/lib/cities'
import { CityPage } from '@/features/city'

interface Props {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ city: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) return { title: 'City Not Found' }
  
  return {
    title: `Time in ${city.city} - whattime.city`,
    description: `Current local time in ${city.city}, ${city.country}`
  }
}

export default async function Page({ params }: Props) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) notFound()
  
  return <CityPage city={city} />
}
```

---

## 12. Asla İhlal Edilmemesi Gereken 10 Kural

### 🔴 THE 10 COMMANDMENTS

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  1. TEK SORUMLULUK                                                  │
│     Her dosya TEK bir iş yapar. 200 satırı geçen dosya PARÇALANIR. │
│                                                                     │
│  2. UI ≠ LOGIC                                                      │
│     Component'ler SADECE render eder.                               │
│     Business logic HOOK'larda yaşar.                                │
│                                                                     │
│  3. DRY - TEK KAYNAK                                                │
│     Aynı kod 2 yerde OLAMAZ.                                        │
│     Ortak kod shared/utils/ altında TEK yerde olur.                 │
│                                                                     │
│  4. GLOBAL STATE MİNİMAL                                            │
│     Context'e sadece GERÇEKTEN global olan state girer.             │
│     "Belki lazım olur" yeterli sebep DEĞİL.                         │
│                                                                     │
│  5. TYPE SAFETY                                                     │
│     `any` YASAKTIR.                                                 │
│     Tüm props, return types EXPLICIT olmalı.                        │
│                                                                     │
│  6. FEATURE ISOLATION                                               │
│     Her feature kendi klasöründe COMPLETE olmalı.                   │
│     Cross-feature import SADECE public API (index.ts) üzerinden.    │
│                                                                     │
│  7. PAGE = ROUTING ONLY                                             │
│     app/ klasöründeki dosyalar SADECE routing ve metadata içerir.   │
│     Tüm UI logic features/ altında.                                 │
│                                                                     │
│  8. CONTEXT'TEN THEME AL                                            │
│     Theme ASLA component içinde hesaplanmaz.                        │
│     SADECE useCityContext()'ten alınır.                             │
│                                                                     │
│  9. ÖNCE GREP, SONRA KOD                                            │
│     Yeni kod yazmadan önce mevcut implementasyon ARANIR.            │
│     Duplicate kod YASAKTIR.                                         │
│                                                                     │
│  10. BUILD KIRILMAZ                                                 │
│      Her değişiklik sonrası `npm run build` ÇALIŞMALI.              │
│      TypeScript hataları KABUL EDİLMEZ.                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### 📋 Quick Reference Card

```
┌──────────────────────────────────────────────────────────────┐
│ NEREYE KOYACAĞIM?                                            │
├──────────────────────────────────────────────────────────────┤
│ Static data (cities, countries)     → data/                  │
│ Type definitions                    → core/types/            │
│ Global state (city, theme)          → core/context/          │
│ Domain logic (getCityBySlug)        → lib/                   │
│ Feature components                  → features/[name]/       │
│ Reusable UI (Button, Card)          → shared/ui/             │
│ Common hooks (useDebounce)          → shared/hooks/          │
│ Utility functions (formatTime)      → shared/utils/          │
│ Page routing & metadata             → app/                   │
├──────────────────────────────────────────────────────────────┤
│ DOSYA BOYUTU                                                 │
├──────────────────────────────────────────────────────────────┤
│ Component    → max 200 satır                                 │
│ Hook         → max 100 satır                                 │
│ Utility      → max 50 satır                                  │
│ Page         → max 50 satır                                  │
├──────────────────────────────────────────────────────────────┤
│ IMPORT SIRASI                                                │
├──────────────────────────────────────────────────────────────┤
│ 1. React                                                     │
│ 2. Next.js                                                   │
│ 3. External libs                                             │
│ 4. @/core/*                                                  │
│ 5. @/features/*                                              │
│ 6. @/shared/*                                                │
│ 7. @/lib/*                                                   │
│ 8. Relative (./)                                             │
│ 9. Styles                                                    │
└──────────────────────────────────────────────────────────────┘
```

---

## 📎 Ekler

### A. tsconfig.json Paths

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/core/*": ["./core/*"],
      "@/features/*": ["./features/*"],
      "@/shared/*": ["./shared/*"],
      "@/lib/*": ["./lib/*"],
      "@/data/*": ["./data/*"]
    }
  }
}
```

### B. Barrel File Template

```typescript
// features/clock/index.ts

// Components
export { WorldClock } from './components/WorldClock'
export { DigitalClock } from './components/DigitalClock'
export { AnalogClock } from './components/AnalogClock'

// Hooks
export { useClockTime } from './hooks/useClockTime'
export { useFavorites } from './hooks/useFavorites'

// Types
export type { ClockDisplayProps } from './components/WorldClock/ClockDisplay'
```

### C. Migration Checklist Template

```markdown
## Migration: [Component/Feature Name]

### Pre-Migration
- [ ] Mevcut kodu analiz et
- [ ] Dependency'leri listele
- [ ] Test senaryolarını belirle

### Migration
- [ ] Yeni klasör yapısını oluştur
- [ ] Kodu parçalara ayır
- [ ] Types oluştur
- [ ] Hooks oluştur
- [ ] Components oluştur
- [ ] Index.ts (barrel) oluştur

### Post-Migration
- [ ] Eski import'ları güncelle
- [ ] Build test
- [ ] Manual test
- [ ] Eski dosyaları sil
```

---

**Son Güncelleme:** Aralık 2024  
**Sonraki Review:** Mart 2025
