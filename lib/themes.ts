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
    bg: 'from-slate-950 via-indigo-950 to-slate-900',
    card: 'bg-slate-900/60 border-slate-700/50',
    text: 'text-white',
    textMuted: 'text-slate-400',
    accent: 'cyan',
    accentClass: 'text-cyan-400',
    accentText: 'text-cyan-400',
    accentBg: 'bg-cyan-500',
    accentBgLight: 'bg-cyan-500/20',
    accentBorder: 'border-cyan-500/50',
    glow: 'bg-indigo-500/10',
    icon: 'night',
    label: 'Night'
  },
  dawn: {
    // Soft rose → peach → warm amber (fresh morning feel)
    bg: 'from-rose-100 via-orange-100 to-amber-50',
    card: 'bg-white/60 border-rose-200/50',
    text: 'text-slate-800',
    textMuted: 'text-rose-600',
    accent: 'rose',
    accentClass: 'text-rose-500',
    accentText: 'text-rose-500',
    accentBg: 'bg-rose-500',
    accentBgLight: 'bg-rose-500/20',
    accentBorder: 'border-rose-500/50',
    glow: 'bg-rose-500/10',
    icon: 'dawn',
    label: 'Dawn'
  },
  day: {
    bg: 'from-sky-100 via-blue-100 to-cyan-50',
    card: 'bg-white/60 border-sky-200/50',
    text: 'text-slate-800',
    textMuted: 'text-slate-600',
    accent: 'sky',
    accentClass: 'text-sky-500',
    accentText: 'text-sky-500',
    accentBg: 'bg-sky-500',
    accentBgLight: 'bg-sky-500/20',
    accentBorder: 'border-sky-500/50',
    glow: 'bg-sky-500/10',
    icon: 'day',
    label: 'Day'
  },
  dusk: {
    // Golden hour → purple → deep indigo (warm sunset feel)
    bg: 'from-amber-600 via-orange-700 to-purple-900',
    card: 'bg-slate-900/50 border-orange-500/30',
    text: 'text-white',
    textMuted: 'text-orange-200',
    accent: 'orange',
    accentClass: 'text-orange-400',
    accentText: 'text-orange-400',
    accentBg: 'bg-orange-500',
    accentBgLight: 'bg-orange-500/20',
    accentBorder: 'border-orange-500/50',
    glow: 'bg-orange-500/10',
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
    accentText: 'text-amber-500',
    accentBg: 'bg-amber-500',
    accentBgLight: 'bg-amber-500/20',
    accentBorder: 'border-amber-500/50',
    glow: 'bg-blue-500/5',
    icon: 'day',
    label: 'Light'
  }
}

export function isLightTheme(theme: string): boolean {
  return ['day', 'dawn', 'light'].includes(theme)
}
