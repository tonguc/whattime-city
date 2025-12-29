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

export default function ParisOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'

  return (
    <div className={textColor}>
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Paris Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the City of Light
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Paris Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Planning a business call with colleagues in Paris, tracking the CAC 40 market opening, or 
          wondering when that charming café on the corner opens? Understanding Paris's time zone — 
          and the French approach to time — is essential.
        </p>
        <p>
          Paris runs on <strong>Central European Time (CET)</strong>, which is UTC+1 in winter and 
          UTC+2 in summer (CEST). France observes daylight saving time, switching clocks forward 
          in late March and back in late October.
        </p>
        <p>
          The French have a distinct relationship with time. Lunch is sacred (12-2 PM), many shops 
          close on Sundays, and August sees much of Paris take a collective vacation. Understanding 
          these rhythms is key to a successful visit or business relationship.
        </p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: Paris Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Winter:</strong> CET (UTC+1)</li>
              <li>• <strong>Summer:</strong> CEST (UTC+2)</li>
              <li>• <strong>DST:</strong> Last Sunday March → Last Sunday October</li>
              <li>• <strong>Same as:</strong> Berlin, Rome, Madrid, Amsterdam</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>New York:</strong> +6 hours (winter) / +6 hours (summer)</li>
              <li>• <strong>London:</strong> +1 hour</li>
              <li>• <strong>Dubai:</strong> -3 hours</li>
              <li>• <strong>Tokyo:</strong> -8 hours</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          Need exact conversions? Try our{' '}
          <Link href="/time-converter/" className={linkColor}>Time Converter</Link>
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Explore the Complete Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {config.clusters.map(cluster => (
            <Link
              key={cluster.slug}
              href={`/${city.slug}/guide/${cluster.slug}/`}
              className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                isLight 
                  ? 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{cluster.icon}</span>
                <div>
                  <h3 className={`font-semibold ${headingColor}`}>{cluster.title}</h3>
                  <p className={`text-sm mt-1 ${mutedColor}`}>{cluster.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding Paris Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          The French Approach to Time
        </h3>
        <p>
          French culture has a unique relationship with time. Punctuality matters for business, 
          but social gatherings often start 15 minutes late ("le quart d'heure de politesse"). 
          Lunch is not to be rushed — the two-hour lunch break is a cherished tradition.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Strategic Time Zone Position
        </h3>
        <p>
          Paris's CET timezone makes it ideal for European business. Morning overlap with Asia 
          (8-10 AM catches end of Tokyo/Singapore day), midday with the UK, and afternoon 
          overlap with the US East Coast (2-6 PM Paris = 8 AM - 12 PM NYC).
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Paris Morning (9 AM CET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• New York: 3 AM</li>
                <li>• London: 8 AM</li>
                <li>• Dubai: 12 PM</li>
                <li>• Tokyo: 5 PM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Paris Evening (6 PM CET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• New York: 12 PM noon</li>
                <li>• London: 5 PM</li>
                <li>• Dubai: 9 PM</li>
                <li>• Tokyo: 2 AM (next day)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Paris Time vs Major Cities
        </h2>
        <div className={`overflow-x-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>When it's 12 PM in Paris</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr><td className="px-4 py-3">🇺🇸 New York</td><td className="px-4 py-3">-6 hours</td><td className="px-4 py-3">6:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇺🇸 Los Angeles</td><td className="px-4 py-3">-9 hours</td><td className="px-4 py-3">3:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇬🇧 London</td><td className="px-4 py-3">-1 hour</td><td className="px-4 py-3">11:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇩🇪 Berlin</td><td className="px-4 py-3">Same</td><td className="px-4 py-3">12:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇦🇪 Dubai</td><td className="px-4 py-3">+3 hours</td><td className="px-4 py-3">3:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇮🇳 Mumbai</td><td className="px-4 py-3">+4.5 hours</td><td className="px-4 py-3">4:30 PM</td></tr>
              <tr><td className="px-4 py-3">🇸🇬 Singapore</td><td className="px-4 py-3">+7 hours</td><td className="px-4 py-3">7:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇯🇵 Tokyo</td><td className="px-4 py-3">+8 hours</td><td className="px-4 py-3">8:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇦🇺 Sydney</td><td className="px-4 py-3">+10 hours</td><td className="px-4 py-3">10:00 PM</td></tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Differences shown for winter (CET). Summer adds 1 hour to Paris time.{' '}
          <Link href={`/${city.slug}/guide/time-difference/`} className={linkColor}>
            See detailed time differences →
          </Link>
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Practical Tips for Dealing with Paris Time
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🍽️ The Sacred Lunch Hour</h3>
            <p className="text-sm">
              French lunch is 12-2 PM, and it's taken seriously. Many small shops close during this 
              time. Business meetings over lunch can last 2+ hours. Plan your schedule accordingly — 
              don't expect quick responses between noon and 2 PM.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🗓️ August: The Empty City</h3>
            <p className="text-sm">
              Much of Paris takes vacation in August. Many local shops and restaurants close for 
              2-4 weeks. Tourist spots stay open, but business operations slow significantly. 
              Avoid scheduling important meetings in August if possible.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🏪 Sunday Closures</h3>
            <p className="text-sm">
              Most non-tourist shops are closed on Sundays. This is the law in France ("repos 
              dominical"). Supermarkets may open until 1 PM. Tourist areas like the Champs-Élysées 
              and the Marais are exceptions with Sunday trading.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What time zone is Paris in?</h3>
            <p className="text-sm">
              Paris uses Central European Time (CET, UTC+1) in winter and Central European Summer 
              Time (CEST, UTC+2) from late March to late October.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does Paris observe daylight saving time?</h3>
            <p className="text-sm">
              Yes. France switches to summer time on the last Sunday of March (clocks forward 1 hour) 
              and back to winter time on the last Sunday of October (clocks back 1 hour).
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the time difference between Paris and New York?</h3>
            <p className="text-sm">
              Paris is 6 hours ahead of New York year-round. When it's noon in Paris, it's 6 AM in 
              New York. Both cities observe DST on similar schedules, so the difference stays constant.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'}`}>
        <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>
          Ready to Dive Deeper?
        </h2>
        <p className="mb-4">
          Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            💼 Business Hours
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            📈 Euronext Paris
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            📅 French Holidays
          </Link>
          <Link href={`/${city.slug}/guide/digital-nomad/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            🎒 Digital Nomad
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2024.
      </p>
    </div>
  )
}
