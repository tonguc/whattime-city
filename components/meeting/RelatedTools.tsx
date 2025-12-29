'use client'

import Link from 'next/link'

interface RelatedToolsProps {
  isLight: boolean
}

const relatedTools = [
  {
    name: 'Time Converter',
    description: 'Convert times instantly',
    url: '/tools/converter',
    icon: '🕐'
  },
  {
    name: 'Event Time',
    description: 'Share event times',
    url: '/tools/event-time',
    icon: '📅'
  },
  {
    name: 'Flight Time',
    description: 'Calculate flight times',
    url: '/tools/flight-times',
    icon: '✈️'
  },
  {
    name: 'Jet Lag Advisor',
    description: 'Beat jet lag',
    url: '/tools/jet-lag',
    icon: '🌍'
  }
]

export default function RelatedTools({ isLight }: RelatedToolsProps) {
  return (
    <section>
      <h3 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-900' : 'text-white'}`}>
        Related Tools
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedTools.map((tool) => (
          <Link
            key={tool.url}
            href={tool.url}
            className={`block p-4 rounded-xl border transition-all hover:scale-105 ${
              isLight
                ? 'bg-white/60 border-white/50 hover:bg-white/80'
                : 'bg-slate-800/60 border-slate-700/50 hover:bg-slate-800/80'
            }`}
          >
            <div className="text-3xl mb-2">{tool.icon}</div>
            <h4 className={`font-semibold mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
              {tool.name}
            </h4>
            <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
