import { TimeOfDay } from './sun-calculator'

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

export const themes: Record<TimeOfDay | 'dark' | 'light', Theme> = {
  night: {
    bg: 'from-slate-950 via-indigo-950 to-slate-950',
    card: 'bg-slate-900/60 border-slate-700/50',
    text: 'text-white',
    textMuted: 'text-slate-400',
    accent: 'cyan',
    accentClass: 'text-cyan-400',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-500',
    accentBgLight: 'bg-cyan-500/20',
    accentBorder: 'border-cyan-500/50',
    glow: 'bg-indigo-500/30',
    icon: 'night',
    label: 'Night'
  },
  dawn: {
    bg: 'from-slate-900 via-orange-900 to-amber-800',
    card: 'bg-slate-800/60 border-orange-700/50',
    text: 'text-white',
    textMuted: 'text-orange-300',
    accent: 'amber',
    accentClass: 'text-amber-400',
    accentText: 'text-amber-400',
    accentBg: 'bg-amber-500',
    accentBgLight: 'bg-amber-500/20',
    accentBorder: 'border-amber-500/50',
    glow: 'bg-orange-500/30',
    icon: 'dawn',
    label: 'Dawn'
  },
  day: {
    bg: 'from-blue-500 via-sky-400 to-cyan-400',
    card: 'bg-white/95 border-blue-500/40',
    text: 'text-slate-900',
    textMuted: 'text-slate-700',
    accent: 'amber',
    accentClass: 'text-amber-600',
    accentText: 'text-amber-600',
    accentBg: 'bg-amber-500',
    accentBgLight: 'bg-amber-500/25',
    accentBorder: 'border-amber-500/50',
    glow: 'bg-yellow-300/40',
    icon: 'day',
    label: 'Day'
  },
  dusk: {
    bg: 'from-purple-900 via-rose-900 to-orange-900',
    card: 'bg-slate-800/60 border-purple-700/50',
    text: 'text-white',
    textMuted: 'text-purple-300',
    accent: 'purple',
    accentClass: 'text-purple-400',
    accentText: 'text-purple-400',
    accentBg: 'bg-purple-500',
    accentBgLight: 'bg-purple-500/20',
    accentBorder: 'border-purple-500/50',
    glow: 'bg-purple-500/30',
    icon: 'dusk',
    label: 'Dusk'
  },
  dark: {
    bg: 'from-slate-950 via-slate-900 to-slate-950',
    card: 'bg-slate-800/60 border-slate-700/50',
    text: 'text-white',
    textMuted: 'text-slate-400',
    accent: 'cyan',
    accentClass: 'text-cyan-400',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-500',
    accentBgLight: 'bg-cyan-500/20',
    accentBorder: 'border-cyan-500/50',
    glow: 'bg-slate-500/25',
    icon: 'night',
    label: 'Dark'
  },
  light: {
    bg: 'from-gray-100 via-white to-gray-100',
    card: 'bg-white border-gray-200',
    text: 'text-slate-800',
    textMuted: 'text-slate-500',
    accent: 'slate',
    accentClass: 'text-slate-600',
    accentText: 'text-slate-700',
    accentBg: 'bg-slate-600',
    accentBgLight: 'bg-slate-500/20',
    accentBorder: 'border-slate-300',
    glow: 'bg-slate-200/50',
    icon: 'day',
    label: 'Light'
  }
}

export function isLightTheme(theme: string): boolean {
  return ['day', 'light'].includes(theme)
}
