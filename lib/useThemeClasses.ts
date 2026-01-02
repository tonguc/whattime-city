'use client'

import { useCityContext } from './CityContext'
import { TimeOfDay } from './sun-calculator'

/**
 * useThemeClasses - Single Source of Truth for Theme Styling
 * 
 * USAGE:
 * const { card, text, textMuted, input, btnPrimary } = useThemeClasses()
 * 
 * <div className={`rounded-2xl p-6 ${card}`}>
 *   <h2 className={text}>Title</h2>
 *   <p className={textMuted}>Description</p>
 * </div>
 * 
 * THEME MODES:
 * - Auto: Uses dawn/day/dusk/night based on sun position
 * - Light: Fixed light theme
 * - Dark: Fixed dark theme
 */

export interface ThemeClasses {
  // Core
  card: string
  cardWithRound: string
  text: string
  textMuted: string
  
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
  
  return {
    // Card styling - use this for all content containers
    card: getCardClass(),
    cardWithRound: `${getCardClass()} rounded-2xl`,
    
    // Text colors
    text: isLight ? 'text-slate-800' : 'text-white',
    textMuted: isLight ? 'text-slate-500' : 'text-slate-400',
    
    // Input styling
    input: isLight 
      ? 'bg-slate-50 border border-slate-300 text-slate-800 placeholder:text-slate-400'
      : 'bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500',
    inputFocused: 'focus:ring-2 focus:ring-blue-500 focus:outline-none',
    
    // Button styling
    btnPrimary: isLight
      ? 'bg-slate-800 text-white hover:bg-slate-700'
      : 'bg-white text-slate-800 hover:bg-slate-100',
    btnSecondary: isLight
      ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700',
    
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
    text: isLight ? 'text-slate-800' : 'text-white',
    textMuted: isLight ? 'text-slate-500' : 'text-slate-400',
    input: isLight 
      ? 'bg-slate-50 border border-slate-300 text-slate-800 placeholder:text-slate-400'
      : 'bg-slate-900 border border-slate-700 text-white placeholder:text-slate-500',
    btnPrimary: isLight
      ? 'bg-slate-800 text-white hover:bg-slate-700'
      : 'bg-white text-slate-800 hover:bg-slate-100',
    btnSecondary: isLight
      ? 'bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200'
      : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700',
    isLight,
    isDark: !isLight,
  }
}
