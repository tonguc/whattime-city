'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

export default function GenericGuideContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const clusters = config.clusters || [
    { slug: 'time-business', icon: '💼', title: 'Time & Business', desc: `Business hours in ${city.city}` },
    { slug: 'travel-guide', icon: '✈️', title: 'Travel Guide', desc: `Best time to visit ${city.city}` },
    { slug: 'work-remote', icon: '💻', title: 'Work Remote', desc: `Remote work guide for ${city.city}` },
    { slug: 'time-zones', icon: '🌍', title: 'Time Zones', desc: `Time zone info for ${city.city}` },
    { slug: '24-hours-itinerary', icon: '🌆', title: '24 Hours', desc: `One day in ${city.city}` },
  ]
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          {config.icon} {city.city} Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          {config.tagline || `Your complete guide to ${city.city} time zones and local insights`}
        </p>
        
        {/* Live Time Badge */}
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-lg">🕐</span>
          <span className="text-sm">Current time in {city.city}: <strong>{timeStr}</strong></span>
        </div>
      </header>
      
      {/* Quick Overview */}
      <section className={`mb-10 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Overview
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}>
            <p className="text-2xl mb-2">🌍</p>
            <p className={`font-medium ${headingColor}`}>Timezone</p>
            <p className={`text-sm ${mutedColor}`}>{city.timezone.split('/').pop()?.replace('_', ' ')}</p>
          </div>
          <div className={`p-4 rounded-xl ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}>
            <p className="text-2xl mb-2">🏢</p>
            <p className={`font-medium ${headingColor}`}>Business Hours</p>
            <p className={`text-sm ${mutedColor}`}>9 AM - 6 PM (typical)</p>
          </div>
          <div className={`p-4 rounded-xl ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}>
            <p className="text-2xl mb-2">🌡️</p>
            <p className={`font-medium ${headingColor}`}>Country</p>
            <p className={`text-sm ${mutedColor}`}>{city.country}</p>
          </div>
        </div>
      </section>
      
      {/* Guide Sections */}
      <section className="mb-10">
        <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
          📚 Explore {city.city} Guides
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {clusters.map((cluster) => (
            <Link
              key={cluster.slug}
              href={`/${city.slug}/guide/${cluster.slug}/`}
              className={`p-5 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block group`}
            >
              <span className="text-3xl mb-3 block">{cluster.icon}</span>
              <h3 className={`font-semibold mb-1 ${headingColor} group-hover:${linkColor.split(' ')[0]}`}>
                {cluster.title}
              </h3>
              <p className={`text-sm ${mutedColor}`}>
                {cluster.desc || `Learn more about ${cluster.title.toLowerCase()}`}
              </p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* About This City */}
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          📍 About {city.city}
        </h2>
        <p className={mutedColor}>
          {city.city} is located in {city.country} in the {city.timezone.split('/')[0].replace('_', ' ')} region. 
          Use our comprehensive guides above to learn about business hours, the best time to visit, 
          remote work opportunities, and how to make the most of your time in {city.city}.
        </p>
      </section>
      
      {/* Quick Tools */}
      <section>
        <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>
          🛠️ Quick Tools
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/time/"
            className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}
          >
            <span className="text-2xl mb-2 block">🔄</span>
            <h3 className={`font-medium ${headingColor}`}>Time Converter</h3>
            <p className={`text-sm ${mutedColor}`}>Convert time between {city.city} and other cities</p>
          </Link>
          <Link
            href="/meeting/"
            className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}
          >
            <span className="text-2xl mb-2 block">📅</span>
            <h3 className={`font-medium ${headingColor}`}>Meeting Planner</h3>
            <p className={`text-sm ${mutedColor}`}>Find the best meeting time with {city.city}</p>
          </Link>
        </div>
      </section>
    </div>
  )
}
