# 🎨 whattime.city Theme System Guide

## Overview

whattime.city uses a dynamic theme system based on **sun position** with manual override support.

### Theme Modes

| Mode | Behavior |
|------|----------|
| **Auto** | Dynamic themes based on city coordinates + sun position |
| **Light** | Fixed light theme (similar to day) |
| **Dark** | Fixed dark theme (similar to night) |

### Auto Mode Themes (4 states)

| Theme | Trigger | Vibe |
|-------|---------|------|
| 🌅 **Dawn** | ~45min before sunrise to ~30min after | Dark Blue → Orange gradient |
| ☀️ **Day** | After dawn, before dusk | Clean sky blue, professional |
| 🌆 **Dusk** | ~30min before sunset to ~45min after | Purple → Pink → Orange |
| 🌙 **Night** | After dusk, before dawn | Dark slate/deep blue |

---

## ✅ How to Use Themes (CORRECT WAY)

### Option 1: useThemeClasses Hook (RECOMMENDED)

```tsx
import { useThemeClasses } from '@/lib/useThemeClasses'

function MyComponent() {
  const { card, text, textMuted, input, isLight } = useThemeClasses()
  
  return (
    <div className={`rounded-2xl p-6 ${card}`}>
      <h2 className={text}>Title</h2>
      <p className={textMuted}>Description</p>
      <input className={`rounded-lg px-4 py-2 ${input}`} />
    </div>
  )
}
```

### Option 2: useCityContext + theme object

```tsx
import { useCityContext } from '@/lib/CityContext'

function MyComponent() {
  const { theme, isLight } = useCityContext()
  
  return (
    <div className={`rounded-2xl p-6 ${theme.card}`}>
      <h2 className={theme.text}>Title</h2>
      <p className={theme.textMuted}>Description</p>
    </div>
  )
}
```

### Option 3: CSS Component Classes

```tsx
// For simple cases, use globals.css classes
<div className={isLight ? 'card-light' : 'card-dark'}>
  Content
</div>
```

---

## ❌ WRONG WAY (Never Do This!)

### ❌ Don't calculate theme yourself

```tsx
// WRONG - breaks single source of truth
const autoTheme = themes[getTimeOfDay(lat, lng)]

// CORRECT - use context
const { theme } = useCityContext()
```

### ❌ Don't hardcode colors

```tsx
// WRONG - won't adapt to theme
<div className="bg-white border-gray-200">

// CORRECT - use theme classes
<div className={theme.card}>
```

### ❌ Don't forget the `border` keyword

```tsx
// WRONG - border color without border width doesn't work!
className="border-slate-200"

// CORRECT - always include `border`
className="border border-slate-200"
```

### ❌ Don't use transparent backgrounds on light themes

```tsx
// WRONG - gradient shows through
className="bg-white/70"

// CORRECT - solid background
className="bg-white"
```

---

## 🎯 Theme Classes Reference

### useThemeClasses() Returns

| Property | Light Value | Dark Value |
|----------|-------------|------------|
| `card` | `bg-white border border-slate-200 backdrop-blur-xl` | `bg-slate-800/60 border border-slate-700/50 backdrop-blur-xl` |
| `text` | `text-slate-800` | `text-white` |
| `textMuted` | `text-slate-500` | `text-slate-400` |
| `input` | `bg-slate-50 border border-slate-300 text-slate-800` | `bg-slate-900 border border-slate-700 text-white` |
| `btnPrimary` | `bg-slate-800 text-white` | `bg-white text-slate-800` |
| `btnSecondary` | `bg-slate-100 text-slate-800 border border-slate-200` | `bg-slate-800 text-white border border-slate-700` |

### Auto Mode Card Variants

| Time | Border Color |
|------|--------------|
| Dawn | `border-orange-700/50` |
| Day | `border-slate-200` |
| Dusk | `border-purple-700/50` |
| Night | `border-slate-700/50` |

---

## 📁 File Structure

```
lib/
├── CityContext.tsx      # Main context provider (theme source)
├── themes.ts            # Theme definitions
├── useThemeClasses.ts   # Theme utility hook
├── sun-calculator.ts    # Sunrise/sunset calculations
└── useToolsTheme.ts     # DEPRECATED - use useThemeClasses

app/
└── globals.css          # CSS component classes
```

---

## 🔧 Adding New Themed Components

1. **Always use `useThemeClasses()` or `useCityContext()`**
2. **Never hardcode colors** - use theme properties
3. **Test all 4 auto themes** - dawn, day, dusk, night
4. **Test light/dark toggle** - ensure overrides work

### Example: New Card Component

```tsx
'use client'

import { useThemeClasses } from '@/lib/useThemeClasses'

interface MyCardProps {
  title: string
  description: string
  children?: React.ReactNode
}

export function MyCard({ title, description, children }: MyCardProps) {
  const { card, text, textMuted } = useThemeClasses()
  
  return (
    <div className={`rounded-2xl p-6 ${card}`}>
      <h3 className={`text-lg font-semibold ${text}`}>{title}</h3>
      <p className={`text-sm mt-2 ${textMuted}`}>{description}</p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  )
}
```

---

## ⚠️ Common Mistakes & Fixes

| Mistake | Fix |
|---------|-----|
| `border-slate-200` alone | Add `border` → `border border-slate-200` |
| `bg-white/70` in light mode | Use solid `bg-white` |
| Manual theme calculation | Use `useCityContext()` |
| Different theme hooks per component | Standardize on `useThemeClasses()` |
| Inline color values | Use theme classes |

---

## 🧪 Testing Checklist

- [ ] Light mode toggle works
- [ ] Dark mode toggle works
- [ ] Auto mode shows correct theme for time
- [ ] Dawn border is orange-tinted
- [ ] Dusk border is purple-tinted
- [ ] Cards have visible borders in all modes
- [ ] Inputs are readable in all modes
- [ ] Text contrast is sufficient

---

## Version History

- **v2.1.0** - Centralized Architecture Refactor
  - All core components now use `useThemeClasses()`
  - Removed prop drilling (themeData, isLight props)
  - Header, Footer no longer need props
  - DigitalClock, AnalogClock simplified
  - CityCard, TimeConverter use context
  - Deprecated `useToolsTheme` - removed all usages
  - MeetingPlanner uses context
  
- **v2.0.0** - Complete theme system overhaul
  - Added `useThemeClasses` hook
  - Fixed `border` keyword issue in themes.ts
  - Solid backgrounds for light themes
  - CSS component classes in globals.css
  - This documentation

---

## v2.2.0 - FULL CENTRALIZATION COMPLETE (Jan 2, 2025)

### Achievement: 100% Prop Drilling Eliminated

| Metric | Before | After |
|--------|--------|-------|
| themeData prop | 10+ | **0** |
| theme: Theme prop | 5+ | **0** |
| isLight: boolean prop | 15+ | **0** |
| use12Hour prop | 5+ | **0** |
| useToolsTheme usages | 11 | **0** |
| useThemeClasses usages | 0 | **46** |

### Quick Start - New Components

```tsx
import { useThemeClasses } from '@/lib/useThemeClasses'

function MyComponent() {
  const { card, text, textMuted, isLight, accentBg } = useThemeClasses()
  return <div className={`rounded-2xl p-6 ${card}`}>...</div>
}
```

### Available from useThemeClasses()

- `bg` - Background gradient
- `card` - Card background with border
- `text` - Primary text color
- `textMuted` - Secondary text color
- `accentBg` - Accent background (buttons)
- `accentText` - Accent text color
- `isLight` - boolean for light/dark determination
- `theme` - Full theme object for edge cases
