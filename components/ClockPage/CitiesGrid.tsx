'use client'

interface CitiesGridProps {
  title: string
  cities: Array<{ name: string; detail?: string }>
  card: string
  innerCard: string
  heading: string
  subText: string
  mutedText: string
}

export default function CitiesGrid({ title, cities, card, innerCard, heading, subText, mutedText }: CitiesGridProps) {
  return (
    <div className={`${card} mt-6`}>
      <h2 className={`text-lg font-semibold mb-4 ${heading}`}>{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {cities.map((c, i) => (
          <div key={i} className={`${innerCard} text-center`}>
            <div className={`text-sm font-medium ${subText}`}>{c.name}</div>
            {c.detail && <div className={`text-xs ${mutedText}`}>{c.detail}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
