'use client'

import { ReactNode } from 'react'

interface Badge {
  label: string
  highlight?: boolean // red/amber badge for DST active
}

interface ClockHeroProps {
  /** Background color class, e.g. "bg-red-700", "bg-amber-600" */
  bgColor: string
  /** Array of { label, time } for multi-zone, or single entry for single zone */
  clocks: Array<{ label: string; time: string }>
  date: string
  badges: Badge[]
  mounted: boolean
  /** Override time text size, default "text-6xl" for single, "text-4xl" for multi */
  timeSize?: string
}

export default function ClockHero({ bgColor, clocks, date, badges, mounted, timeSize }: ClockHeroProps) {
  const isMulti = clocks.length > 1
  const defaultSize = isMulti ? 'text-4xl' : 'text-6xl'
  const size = timeSize ?? defaultSize

  return (
    <div className={`${bgColor} rounded-2xl p-8 text-center text-white`}>
      {isMulti ? (
        <div className="flex justify-center gap-8 flex-wrap">
          {clocks.map(c => (
            <div key={c.label}>
              <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-80">{c.label}</div>
              <div className={`${size} font-bold tabular-nums tracking-tight`}>
                {mounted ? c.time : '--:--:--'}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="text-sm font-bold uppercase tracking-widest mb-3">{clocks[0]?.label}</div>
          <div className={`${size} font-bold tabular-nums tracking-tight`}>
            {mounted ? clocks[0]?.time : '--:--:--'}
          </div>
        </>
      )}
      <div className="text-sm opacity-80 mt-3">{mounted ? date : '\u00A0'}</div>
      {badges.length > 0 && (
        <div className="flex justify-center gap-3 mt-4 text-sm flex-wrap">
          {badges.map((b, i) => (
            <span
              key={i}
              className={`px-3 py-1 rounded-full font-medium ${
                b.highlight ? 'bg-red-400/40' : 'bg-white/20'
              }`}
            >
              {b.label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
