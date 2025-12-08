import { TimeOfDay } from './sun-calculator'

export interface Theme {
  bg: string
  card: string
  text: string
  textMuted: string
  accent: string
  accentClass: string
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
    accentBg: 'bg-cyan-500',
    accentBgLight: 'bg-cyan-500/20',
    accentBorder: 'border-cyan-500/50',
    glow: 'bg-indigo-500/10',
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
    accentBg: 'bg-amber-500',
    accentBgLight: 'bg-amber-500/20',
    accentBorder: 'border-amber-500/50',
    glow: 'bg-orange-500/10',
    icon: 'dawn',
    label: 'Dawn'
  },
  day: {
    bg: 'from-sky-100 via-blue-100 to-cyan-100',
    card: 'bg-white/60 border-sky-200/50',
    text: 'text-slate-800',
    textMuted: 'text-slate-600',
    accent: 'amber',
    accentClass: 'text-amber-500',
    accentBg: 'bg-amber-500',
    accentBgLight: 'bg-amber-500/20',
    accentBorder: 'border-amber-500/50',
    glow: 'bg-sky-500/10',
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
    accentBg: 'bg-purple-500',
    accentBgLight: 'bg-purple-500/20',
    accentBorder: 'border-purple-500/50',
    glow: 'bg-purple-500/10',
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
    accentBg: 'bg-cyan-500',
    accentBgLight: 'bg-cyan-500/20',
    accentBorder: 'border-cyan-500/50',
    glow: 'bg-slate-500/10',
    icon: 'night',
    label: 'Dark'
  },
  light: {
    bg: 'from-gray-50 via-white to-gray-100',
    card: 'bg-white/80 border-gray-200',
    text: 'text-slate-800',
    textMuted: 'text-slate-500',
    accent: 'amber',
    accentClass: 'text-amber-500',
    accentBg: 'bg-amber-500',
    accentBgLight: 'bg-amber-500/20',
    accentBorder: 'border-amber-500/50',
    glow: 'bg-blue-500/5',
    icon: 'day',
    label: 'Light'
  }
}

export function isLightTheme(theme: string): boolean {
  return ['day', 'light'].includes(theme)
}
