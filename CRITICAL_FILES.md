# ⚠️ CRITICAL FILES - DO NOT DELETE OR MODIFY WITHOUT CARE

This document lists files that are CRITICAL for the application to function properly.
These files should NEVER be deleted or have their core functionality removed during refactoring.

---

## 🔴 GOOGLE ANALYTICS (Revenue Critical)

### Architecture:
```
components/analytics/
├── GoogleAnalytics.tsx  ← GA script loader (contains GA_MEASUREMENT_ID)
├── RouteTracker.tsx     ← SPA page view tracking
└── index.ts             ← Exports both components

app/layout.tsx           ← Imports and renders both components
```

### Files:
1. **`components/analytics/GoogleAnalytics.tsx`** - GA script initialization
   - Contains `GA_MEASUREMENT_ID = 'G-060GV967M0'`
   - Uses `send_page_view: false` (important for SPA)

2. **`components/analytics/RouteTracker.tsx`** - SPA page view tracking
   - Tracks route changes in Next.js App Router
   - Without this, only first page load is tracked!

3. **`app/layout.tsx`** - Must import and render both:
   ```tsx
   import { GoogleAnalytics, RouteTracker } from '@/components/analytics'
   
   // In head:
   <GoogleAnalytics />
   
   // In body:
   <RouteTracker />
   ```

### Why This Structure:
- GA code is **isolated** in its own folder
- Even if `layout.tsx` is completely rewritten, the analytics folder stays intact
- Clear separation of concerns

### Test After Any Change:
1. Open browser DevTools → Network tab
2. Navigate between pages
3. Look for `collect?` requests to google-analytics.com
4. Each navigation should trigger a new request

---

## 🟡 THEME SYSTEM

### Files:
1. **`app/layout.tsx`** - Theme initialization script (prevents FOUC)
2. **`lib/useThemeClasses.ts`** - Theme hook
3. **`lib/themes.ts`** - Theme definitions
4. **`lib/sun-calculator.ts`** - Astronomical calculations

---

## 🟢 CORE FUNCTIONALITY

### Files:
1. **`lib/CityContext.tsx`** - Global city state
2. **`lib/cities.ts`** - City database
3. **`data/cities.ts`** - City data source

---

## 📋 CHECKLIST BEFORE REFACTORING layout.tsx

Before making changes to `app/layout.tsx`:
- [ ] `GoogleAnalytics` component imported from `@/components/analytics`?
- [ ] `RouteTracker` component imported from `@/components/analytics`?
- [ ] `<GoogleAnalytics />` rendered in `<head>`?
- [ ] `<RouteTracker />` rendered in `<body>`?
- [ ] Theme initialization script present?
- [ ] CityProvider wrapping children?

---

## ⚠️ NEVER DELETE

```
components/analytics/     ← ENTIRE FOLDER IS CRITICAL
```

---

Last Updated: 2025-01-02
