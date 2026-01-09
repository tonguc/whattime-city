'use client'

import { useCityContext } from './CityContext'
import { TimeOfDay } from './sun-calculator'

/**
 * useThemeClasses - Single Source of Truth for Theme Styling
 * 
 * TYPOGRAPHY HIERARCHY (3 Layers):
 * 1. SHOUT (Bağıran) - Hero, anchors, critical numbers → 700 weight, 100% opacity
 * 2. SPEAK (Konuşan) - Section titles, card headers → 600 weight, 100% opacity  
 * 3. WHISPER (Fısıldayan) - Meta, helpers, labels → 400 weight, 60% opacity
 * 
 * USAGE:
 * const { card, textHero, textSection, textBody, textMeta } = useThemeClasses()
 */

export interface ThemeClasses {
  // Core
  card: string
  cardWithRound: string
  
  // ═══════════════════════════════════════════════════════════
  // TYPOGRAPHY HIERARCHY - 3 Katmanlı Sistem
  // ═══════════════════════════════════════════════════════════
  
  // Layer 1: SHOUT (Bağıran) - Dikkat yakalama
  textHero: string        // 48px/700 - Page title, main clock
  textAnchor: string      // 40px/700 - Secondary anchors
  textNumber: string      // Tabular nums, bold - Critical data
  
  // Layer 2: SPEAK (Konuşan) - Section tanımlama
  textSection: string     // 22px/600 - Section headlines
  textCardTitle: string   // 17px/600 - Card headers
  textStrong: string      // 15px/600 - Emphasized body
  
  // Layer 3: WHISPER (Fısıldayan) - Destek bilgisi
  textBody: string        // 15px/400 - Main content
  textMeta: string        // 13px/400 - Helper text (60% opacity)
  textMicro: string       // 11px/500 - Badges, labels (60% opacity)
  
  // Legacy (backward compat) - yeni projelerde kullanma
  text: string
  textMuted: string
  
  // ═══════════════════════════════════════════════════════════
  // NUMERIC DISPLAY - Saatler ve rakamlar için
  // ═══════════════════════════════════════════════════════════
  textTime: string        // Monospace, tabular-nums for clocks
  textTimeLarge: string   // Large clock display
  textData: string        // Data values in tables
  
  // Inputs
  input: string
  inputFocused: string
  
  // Buttons
  btnPrimary: string
  btnSecondary: string
  
  // Backgrounds
  bg: string
  bgGradient: string
  
  // Borders
  border: string
  borderAccent: string
  
  // Accents (for highlights, badges, etc.)
  accent: string
  accentBg: string
  accentText: string
  
  // States
  isLight: boolean
  isDark: boolean
  timeOfDay: TimeOfDay | 'light' | 'dark'
  
  // Raw theme object
  theme: ReturnType<typeof useCityContext>['theme']
}

export function useThemeClasses(): ThemeClasses {
  const { theme, isLight, currentTheme } = useCityContext()
  const isDark = !isLight
  
  // Determine card class based on time of day for auto mode
  const getCardClass = (): string => {
    if (isLight) {
      return 'bg-white border border-slate-200 backdrop-blur-xl'
    }
    
    // Dark themes with time-specific borders
    switch (currentTheme) {
      case 'dawn':
        return 'bg-slate-800/60 border border-orange-700/50 backdrop-blur-xl'
      case 'dusk':
        return 'bg-slate-800/60 border border-purple-700/50 backdrop-blur-xl'
      case 'night':
      case 'dark':
      default:
        return 'bg-slate-800/60 border border-slate-700/50 backdrop-blur-xl'
    }
  }
  
  // ═══════════════════════════════════════════════════════════
  // COLOR DEFINITIONS - Opacity-based hierarchy
  // ═══════════════════════════════════════════════════════════
  
  // 100% - Full contrast (Hero, Section titles)
  const colorFull = isLight ? 'text-slate-900' : 'text-white'
  // 80% - Body text
  const colorBody = isLight ? 'text-slate-700' : 'text-slate-200'
  // 60% - Meta/helper text
  const colorMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  // 50% - Micro labels
  const colorMicro = isLight ? 'text-slate-400' : 'text-slate-500'
  
  return {
    // Card styling - use this for all content containers
    card: getCardClass(),
    cardWithRound: `${getCardClass()} rounded-2xl`,
    
    // ═══════════════════════════════════════════════════════════
    // LAYER 1: SHOUT (Bağıran) - Dikkat Yakalama
    // ═══════════════════════════════════════════════════════════
    
    // Page hero title - 48px, bold, tight line-height
    textHero: `text-hero ${colorFull} tracking-tight`,
    
    // Secondary anchor - 40px equivalent
    textAnchor: `text-4xl font-bold ${colorFull} leading-tight tracking-tight`,
    
    // Critical numbers - bold, full contrast
    textNumber: `font-bold ${colorFull} tabular-nums`,
    
    // ═══════════════════════════════════════════════════════════
    // LAYER 2: SPEAK (Konuşan) - Section Tanımlama
    // ═══════════════════════════════════════════════════════════
    
    // Section headlines - 22px, semibold
    textSection: `text-section ${colorFull}`,
    
    // Card headers - 17px, semibold
    textCardTitle: `text-card-title ${colorFull}`,
    
    // Emphasized body text
    textStrong: `text-body font-semibold ${colorFull}`,
    
    // ═══════════════════════════════════════════════════════════
    // LAYER 3: WHISPER (Fısıldayan) - Destek Bilgisi
    // ═══════════════════════════════════════════════════════════
    
    // Main body content - 15px, regular
    textBody: `text-body ${colorBody}`,
    
    // Helper/meta text - 13px, muted
    textMeta: `text-meta ${colorMuted}`,
    
    // Micro labels (badges, tiny labels) - 11px
    textMicro: `text-micro uppercase tracking-wider ${colorMicro}`,
    
    // ═══════════════════════════════════════════════════════════
    // LEGACY - Backward compatibility (deprecate over time)
    // ═══════════════════════════════════════════════════════════
    text: colorFull,
    textMuted: colorMuted,
    
    // ═══════════════════════════════════════════════════════════
    // NUMERIC DISPLAY - Saatler ve rakamlar
    // ═══════════════════════════════════════════════════════════
    
    // Standard time display (tables, small clocks)
    textTime: `font-mono tabular-nums font-medium ${colorFull}`,
    
    // Large clock display
    textTimeLarge: `font-mono tabular-nums font-bold ${colorFull} tracking-tight`,
    
    // Data values in tables
    textData: `font-mono tabular-nums text-sm ${colorBody}`,
    
    // Input styling
    input: isLight 
      ? 'bg-slate-50 border border-slate-300 text-slate-800 placeholder:text-slate-400'
      : 'bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500',
    inputFocused: 'focus:ring-2 focus:ring-blue-500 focus:outline-none',
    
    // Button styling
    btnPrimary: isLight
      ? 'bg-slate-800 text-white hover:bg-slate-700 font-semibold'
      : 'bg-white text-slate-800 hover:bg-slate-100 font-semibold',
    btnSecondary: isLight
      ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 font-medium'
      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 font-medium',
    
    // Background
    bg: theme.bg,
    bgGradient: `bg-gradient-to-br ${theme.bg}`,
    
    // Borders
    border: isLight ? 'border-slate-200' : 'border-slate-700',
    borderAccent: theme.accentBorder,
    
    // Accent colors (from theme)
    accent: theme.accent,
    accentBg: theme.accentBg,
    accentText: theme.accentText,
    
    // State helpers
    isLight,
    isDark,
    timeOfDay: currentTheme,
    
    // Raw theme for edge cases
    theme,
  }
}

/**
 * getStaticThemeClasses - For components without context access
 * Use this only when useCityContext is not available
 * 
 * @param isLight - Whether to use light theme
 * @param timeOfDay - Optional time of day for auto mode
 */
export function getStaticThemeClasses(isLight: boolean, timeOfDay?: TimeOfDay) {
  const colorFull = isLight ? 'text-slate-900' : 'text-white'
  const colorBody = isLight ? 'text-slate-700' : 'text-slate-200'
  const colorMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  
  const getCardClass = (): string => {
    if (isLight) {
      return 'bg-white border border-slate-200 backdrop-blur-xl'
    }
    
    switch (timeOfDay) {
      case 'dawn':
        return 'bg-slate-800/60 border border-orange-700/50 backdrop-blur-xl'
      case 'dusk':
        return 'bg-slate-800/60 border border-purple-700/50 backdrop-blur-xl'
      default:
        return 'bg-slate-800/60 border border-slate-700/50 backdrop-blur-xl'
    }
  }
  
  return {
    card: getCardClass(),
    cardWithRound: `${getCardClass()} rounded-2xl`,
    // Legacy
    text: colorFull,
    textMuted: colorMuted,
    // New hierarchy
    textHero: `text-hero ${colorFull} tracking-tight`,
    textSection: `text-section ${colorFull}`,
    textCardTitle: `text-card-title ${colorFull}`,
    textBody: `text-body ${colorBody}`,
    textMeta: `text-meta ${colorMuted}`,
    textTime: `font-mono tabular-nums font-medium ${colorFull}`,
    input: isLight 
      ? 'bg-slate-50 border border-slate-300 text-slate-800 placeholder:text-slate-400'
      : 'bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500',
    btnPrimary: isLight
      ? 'bg-slate-800 text-white hover:bg-slate-700 font-semibold'
      : 'bg-white text-slate-800 hover:bg-slate-100 font-semibold',
    btnSecondary: isLight
      ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 font-medium'
      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 font-medium',
    isLight,
    isDark: !isLight,
  }
}
