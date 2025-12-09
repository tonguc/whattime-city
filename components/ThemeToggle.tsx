'use client'

import { Theme } from '@/lib/themes'
import { Translations } from '@/lib/translations'
import TimeIcons from './TimeIcons'

interface ThemeToggleProps {
  mode: 'auto' | 'light' | 'dark'
  setMode: (mode: 'auto' | 'light' | 'dark') => void
  currentTheme: string
  t: Translations
  themeData: Theme
}

export default function ThemeToggle({ mode, setMode, currentTheme, t, themeData }: ThemeToggleProps) {
  const isLight = ['day', 'light'].includes(currentTheme)
  
  const options: { id: 'auto' | 'light' | 'dark', iconKey: 'dawn' | 'day' | 'night', labelKey: keyof Translations, tooltipKey: keyof Translations }[] = [
    { id: 'auto', iconKey: 'dawn', labelKey: 'themeAuto', tooltipKey: 'themeAutoTooltip' },
    { id: 'light', iconKey: 'day', labelKey: 'themeLight', tooltipKey: 'themeLightTooltip' },
    { id: 'dark', iconKey: 'night', labelKey: 'themeDark', tooltipKey: 'themeDarkTooltip' }
  ]
  
  return (
    <div className={`flex rounded-full p-1 ${isLight ? 'bg-white/60' : 'bg-slate-800/60'} backdrop-blur-xl`}>
      {options.map((opt) => {
        const Icon = TimeIcons[opt.iconKey]
        return (
          <button
            key={opt.id}
            onClick={() => setMode(opt.id)}
            title={t[opt.tooltipKey]}
            className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-sm transition-all ${
              mode === opt.id
                ? `${themeData.accentBg} text-white shadow-lg`
                : isLight ? 'text-slate-600 hover:text-slate-800' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            {mode === opt.id && (
              <span className="hidden sm:flex items-center">
                <span className="opacity-40">|</span>
                <span className="text-xs font-medium ml-1.5">{t[opt.labelKey]}</span>
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
