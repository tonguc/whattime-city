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

export default function SingaporeOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'

  return (
    <div className={textColor}>
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Singapore Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in Asia's premier financial hub
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Singapore Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Planning a call with colleagues in Singapore, tracking the SGX market opening, or wondering 
          when hawker centers are busiest? Understanding Singapore's time zone is essential for 
          business and travel in the Lion City.
        </p>
        <p>
          Singapore runs on <strong>Singapore Standard Time (SGT)</strong>, which is UTC+8 year-round. 
          Like most of Asia, Singapore does not observe daylight saving time, keeping time calculations 
          consistent throughout the year.
        </p>
        <p>
          Fun fact: Singapore is geographically in the UTC+7 zone but uses UTC+8 to align with 
          major trading partners like Hong Kong, Beijing, and Kuala Lumpur. This makes Singapore 
          a perfect bridge between Asian and Western markets.
        </p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: Singapore Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Time Zone:</strong> SGT (UTC+8)</li>
              <li>• <strong>Daylight Saving:</strong> Not observed</li>
              <li>• <strong>Weekend:</strong> Saturday-Sunday</li>
              <li>• <strong>Same as:</strong> Hong Kong, Beijing, Taipei, KL</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>New York:</strong> +13 hours</li>
              <li>• <strong>London:</strong> +8 hours</li>
              <li>• <strong>Sydney:</strong> -3 hours</li>
              <li>• <strong>Tokyo:</strong> -1 hour</li>
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
                  ? 'bg-white border-slate-200 hover:border-red-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-red-500/50'
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
          Understanding Singapore Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          The Perfect APAC Hub
        </h3>
        <p>
          Singapore's UTC+8 timezone makes it the ideal hub for Asia-Pacific business. Morning 
          meetings catch the end of the Australian business day, regular hours align perfectly 
          with China, Hong Kong, and Malaysia, and late afternoon can overlap with European 
          markets opening.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Bridge Between East and West
        </h3>
        <p>
          For multinational companies, Singapore is often chosen as a regional headquarters 
          precisely because of its timezone. A Singapore-based team can coordinate with Tokyo 
          in the morning, hold internal meetings during the day, and catch London in the late 
          afternoon - all in normal working hours.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Singapore Morning (9 AM SGT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• New York: 8 PM (prev day)</li>
                <li>• London: 1 AM</li>
                <li>• Tokyo: 10 AM</li>
                <li>• Sydney: 12 PM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Singapore Evening (6 PM SGT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• New York: 5 AM</li>
                <li>• London: 10 AM</li>
                <li>• Tokyo: 7 PM</li>
                <li>• Sydney: 9 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Singapore Time vs Major Cities
        </h2>
        <div className={`overflow-x-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>When it's 12 PM in Singapore</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr><td className="px-4 py-3">🇺🇸 New York</td><td className="px-4 py-3">-13 hours</td><td className="px-4 py-3">11:00 PM (prev day)</td></tr>
              <tr><td className="px-4 py-3">🇺🇸 Los Angeles</td><td className="px-4 py-3">-16 hours</td><td className="px-4 py-3">8:00 PM (prev day)</td></tr>
              <tr><td className="px-4 py-3">🇬🇧 London</td><td className="px-4 py-3">-8 hours</td><td className="px-4 py-3">4:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇩🇪 Berlin</td><td className="px-4 py-3">-7 hours</td><td className="px-4 py-3">5:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇦🇪 Dubai</td><td className="px-4 py-3">-4 hours</td><td className="px-4 py-3">8:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇮🇳 Mumbai</td><td className="px-4 py-3">-2.5 hours</td><td className="px-4 py-3">9:30 AM</td></tr>
              <tr><td className="px-4 py-3">🇭🇰 Hong Kong</td><td className="px-4 py-3">0 hours</td><td className="px-4 py-3">12:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇯🇵 Tokyo</td><td className="px-4 py-3">+1 hour</td><td className="px-4 py-3">1:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇦🇺 Sydney</td><td className="px-4 py-3">+3 hours</td><td className="px-4 py-3">3:00 PM</td></tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Sydney difference varies due to Australian DST.{' '}
          <Link href={`/${city.slug}/guide/time-difference/`} className={linkColor}>
            See detailed time differences →
          </Link>
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Practical Tips for Dealing with Singapore Time
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🌍 For International Business</h3>
            <p className="text-sm">
              Singapore works well as a meeting point for APAC teams. Schedule 9-11 AM for Japan/Korea 
              overlap, midday for China/HK, and 3-6 PM for European overlap. US calls typically require 
              evening meetings (8-10 PM SGT catches US East Coast morning).
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🍜 Hawker Culture</h3>
            <p className="text-sm">
              Singapore's famous hawker centers run on their own schedule. Breakfast crowds hit 7-9 AM, 
              lunch rush is 12-1:30 PM (avoid for popular stalls), and the supper scene kicks off after 
              10 PM. Many hawkers have specific rest days - usually Monday or Tuesday.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 Work Culture</h3>
            <p className="text-sm">
              Standard office hours are 9 AM - 6 PM. However, many Singaporeans work late, with 7-8 PM 
              departures common in finance and consulting. The famous "5-day work week" is increasingly 
              respected, though some industries still expect Saturday presence.
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
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is Singapore GMT+8?</h3>
            <p className="text-sm">
              Yes! Singapore is UTC+8 (same as GMT+8) year-round. It shares this timezone with 
              Hong Kong, Beijing, Taipei, Kuala Lumpur, and Perth.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does Singapore have daylight saving time?</h3>
            <p className="text-sm">
              No. Singapore stays on SGT (UTC+8) year-round. This means the time difference with 
              Europe and North America changes when they adjust clocks, not when Singapore does.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the time difference between Singapore and New York?</h3>
            <p className="text-sm">
              Singapore is 13 hours ahead of New York (EST). When it's noon in Singapore, it's 
              11 PM the previous day in New York. During US daylight saving time, the difference is 12 hours.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${isLight ? 'bg-red-50 border border-red-200' : 'bg-red-900/20 border border-red-700'}`}>
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
            📈 Stock Market
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`px-4 py-2 rounded-lg text-sm font-medium ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            📅 Public Holidays
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
