'use client'

import { City } from '@/lib/cities'
import { CompromiseSlot, formatHour, getStatusIcon, getStatusLabel } from '@/lib/meetingPlanner'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface Props {
  city1: City
  city2: City
  slots: CompromiseSlot[]
}

export default function SmartCompromise({ city1, city2, slots }: Props) {
  const { text, textMuted, isLight } = useThemeClasses()
  
  if (slots.length === 0) return null

  return (
    <div className="space-y-4">
      <div className={`flex items-center gap-2 mb-4 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
        <span className="text-yellow-500">⚠️</span>
        <span className="font-medium">
          Perfect overlap not possible, but here are the best options:
        </span>
      </div>

      <div className="grid gap-3">
        {slots.map((slot, index) => (
          <div
            key={slot.hour}
            className={`p-4 rounded-xl border transition-all hover:scale-[1.01] ${
              isLight 
                ? 'bg-white/60 border-slate-200 hover:border-slate-300' 
                : 'bg-slate-700/60 border-slate-600 hover:border-slate-500'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-lg font-semibold ${text}`}>
                  Option {index + 1}
                </span>
                <span className={`text-sm px-2 py-0.5 rounded ${
                  slot.score >= 70 
                    ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                    : slot.score >= 50
                      ? 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-400'
                      : 'bg-orange-500/20 text-orange-700 dark:text-orange-400'
                }`}>
                  Score: {slot.score}/100
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {city1.city}:
                  </span>
                  <span className={`text-sm ${textMuted}`}>
                    {formatHour(slot.city1LocalHour)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>{getStatusIcon(slot.city1Status)}</span>
                  <span className={`text-xs ${textMuted}`}>
                    {getStatusLabel(slot.city1Status)}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                    {city2.city}:
                  </span>
                  <span className={`text-sm ${textMuted}`}>
                    {formatHour(slot.city2LocalHour)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>{getStatusIcon(slot.city2Status)}</span>
                  <span className={`text-xs ${textMuted}`}>
                    {getStatusLabel(slot.city2Status)}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                alert(`Selected: ${formatHour(slot.city1LocalHour)} ${city1.city} / ${formatHour(slot.city2LocalHour)} ${city2.city}`)
              }}
              className={`w-full mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isLight
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Select This Time
            </button>
          </div>
        ))}
      </div>

      <div className={`mt-4 p-3 rounded-lg text-xs ${
        isLight ? 'bg-blue-50 text-blue-700' : 'bg-blue-900/30 text-blue-300'
      }`}>
        <strong>💡 Pro tip:</strong> For challenging time zones, consider recording meetings for async review.
      </div>
    </div>
  )
}
