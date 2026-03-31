'use client'

interface Fact {
  label: string
  value: string
}

interface FactsGridProps {
  facts: Fact[]
  card: string
  heading: string
  subText: string
  mutedText: string
}

export default function FactsGrid({ facts, card, heading, subText, mutedText }: FactsGridProps) {
  return (
    <div className={`${card} mt-6`}>
      <h2 className={`text-lg font-semibold mb-4 ${heading}`}>Quick Facts</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {facts.map((f, i) => (
          <div key={i}>
            <div className={`text-xs uppercase tracking-wide ${mutedText}`}>{f.label}</div>
            <div className={`text-sm font-medium ${subText}`}>{f.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
