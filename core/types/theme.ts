/**
 * Theme Types
 * Tema sistemi için type tanımları
 */

import type { TimeOfDay } from './city'

export type ThemeMode = 'auto' | 'light' | 'dark'

export type ThemeKey = TimeOfDay | 'light' | 'dark'

export interface Theme {
  bg: string
  card: string
  text: string
  textMuted: string
  accent: string
  accentClass: string
  accentText: string
  accentBg: string
  accentBgLight: string
  accentBorder: string
  glow: string
  icon: string
  label: string
}
