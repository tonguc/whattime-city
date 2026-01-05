'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
import { QuickFacts, CityComparisonTable } from '../components'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

export default function LosAngelesOverviewContent({ city, config, isLight, timeStr }: Props) {
  const { time } = useCityContext()
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = cityTime.getHours()
  
  // Dynamic colors based on theme
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  return (
    <>
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className={`text-5xl font-bold mb-4 ${headingColor}`}>
          {config.icon} {config.cityName} Time Zone: The Complete Guide
        </h1>
        <p className={`text-xl mb-8 ${textColor}`}>{config.tagline}</p>
        
        {/* Current Time */}
        <div className={`${isLight ? 'bg-gradient-to-br from-orange-100 to-orange-50 border-orange-200' : 'bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-orange-700/30'} rounded-2xl p-8 border mb-12`}>
          <p className={`text-sm ${isLight ? 'text-orange-700' : 'text-orange-300'} mb-1`}>
            Current {config.timezoneAbbr} Time:
          </p>
          <p className={`text-6xl font-bold ${headingColor}`}>{timeStr}</p>
        </div>

        {/* Quick Facts - Technical info only */}
        <QuickFacts config={config} isLight={isLight} />

        {/* Intro */}
        <div className={`prose ${isLight ? 'prose-slate' : 'prose-invert'} max-w-none mb-12`}>
          <p className={`text-lg leading-relaxed ${textColor}`}>
            Los Angeles runs on <strong>Pacific Time</strong> — 3 hours behind New York. Whether you're calling East Coast clients, 
            watching morning stock markets, or coordinating with international teams, understanding LA's time zone is essential.
          </p>
        </div>

        {/* Guide Sections */}
        <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
          Explore the Complete Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {config.clusters.map((cluster) => (
            <Link
              key={cluster.slug}
              href={`/${config.citySlug}/guide/${cluster.slug}`}
              className="block group"
            >
              <div className={`${cardBg} rounded-lg p-6 border ${isLight ? 'border-slate-200 hover:border-orange-400 hover:bg-orange-50' : 'border-slate-800 hover:border-orange-700 hover:bg-slate-800'} transition`}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{cluster.icon}</span>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${headingColor} group-hover:text-orange-400 transition`}>
                      {cluster.title}
                    </h3>
                    <p className={`text-sm ${mutedColor}`}>{cluster.desc}</p>
                  </div>
                  <span className={`${mutedColor} group-hover:text-orange-400 transition`}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Region-based City Comparison Table */}
        <div className="my-12">
          <CityComparisonTable config={config} isLight={isLight} />
        </div>

        {/* Content */}
        <div className={`prose ${isLight ? 'prose-slate' : 'prose-invert'} max-w-none`}>
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Understanding Los Angeles Time
          </h2>
          
          <h3 className={`text-2xl font-semibold mt-8 mb-4 ${headingColor}`}>
            PST vs PDT: What's the Difference?
          </h3>
          <p className={textColor}>
            LA uses <strong>Pacific Standard Time (PST, UTC-8)</strong> in winter and <strong>Pacific Daylight Time (PDT, UTC-7)</strong> 
            in summer. The switch happens in March (spring forward) and November (fall back).
          </p>

          <h3 className={`text-2xl font-semibold mt-8 mb-4 ${headingColor}`}>
            Why Does LA Time Matter Globally?
          </h3>
          <p className={textColor}>
            Beyond beaches and movies, LA is a major business hub. Entertainment industry, tech companies, and international trade 
            all run on Pacific Time. When Wall Street opens at 9:30 AM EST, it's only 6:30 AM in LA.
          </p>

          <h3 className={`text-2xl font-semibold mt-8 mb-4 ${headingColor}`}>
            What You'll Find in This Guide
          </h3>
          <p className={textColor}>This guide covers everything about LA time:</p>
          <ul className={textColor}>
            <li><strong>Business Hours:</strong> When do banks, stores, and restaurants open?</li>
            <li><strong>Best Time to Visit:</strong> Weather and crowds by month</li>
            <li><strong>Remote Work:</strong> Overlap with NYC, London, Tokyo teams</li>
            <li><strong>Stock Market:</strong> NASDAQ hours from Pacific Time perspective</li>
            <li><strong>Call Times:</strong> Best windows for international calls</li>
          </ul>
        </div>
      </div>
    </>
  )
}
