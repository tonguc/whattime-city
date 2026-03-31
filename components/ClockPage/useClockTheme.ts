'use client'

import { useCityContext } from '@/lib/CityContext'

/**
 * Returns the standard theme classes used by all ClockClient pages.
 * Replaces the duplicated isLight ternary pattern in every file.
 */
export function useClockTheme() {
  const { isLight } = useCityContext()

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-400' : 'text-slate-500'

  return { isLight, card, innerCard, heading, subText, mutedText }
}
