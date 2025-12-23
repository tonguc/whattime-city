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

export default function DubaiOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'

  return (
    <div className={textColor}>
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Dubai Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the UAE's global hub
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Dubai Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Planning a call with colleagues in Dubai, tracking the DFM market opening, or wondering 
          if that mall will still be open at 11 PM? Understanding Dubai's time zone — and its 
          unique weekend — is essential.
        </p>
        <p>
          Dubai runs on <strong>Gulf Standard Time (GST)</strong>, which is UTC+4 year-round. 
          Like most of the Middle East, the UAE does not observe daylight saving time, keeping 
          time calculations consistent throughout the year.
        </p>
        <p>
          But the real surprise for visitors? The UAE weekend is <strong>Friday-Saturday</strong>, 
          not Saturday-Sunday. This shifted from the traditional Friday-only weekend in 2022 to 
          better align with global markets.
        </p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: Dubai Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Time Zone:</strong> GST (UTC+4)</li>
              <li>• <strong>Daylight Saving:</strong> Not observed</li>
              <li>• <strong>Weekend:</strong> Friday-Saturday</li>
              <li>• <strong>Same as:</strong> Oman, Mauritius</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>New York:</strong> +9 hours</li>
              <li>• <strong>London:</strong> +4 hours</li>
              <li>• <strong>Mumbai:</strong> -1.5 hours</li>
              <li>• <strong>Singapore:</strong> -4 hours</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          Need exact conversions? Try our{' '}
          <Link href="/tools/converter/" className={linkColor}>Time Converter</Link>
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
                  ? 'bg-white border-slate-200 hover:border-emerald-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-emerald-500/50'
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
          Understanding Dubai Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          The Friday-Saturday Weekend
        </h3>
        <p>
          Until 2022, the UAE had a Friday-only weekend (with some organizations taking Thursday 
          afternoon off). The shift to Friday-Saturday was designed to improve work-life balance 
          and better align with global financial markets. Sunday is now a full working day.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Strategic Time Zone Position
        </h3>
        <p>
          Dubai's UTC+4 position makes it a global business hub. Morning meetings catch the end 
          of the Asian business day (Tokyo, Singapore), while afternoon meetings overlap with 
          European markets. Late afternoon can even catch early morning US East Coast.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Dubai Morning (9 AM GST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• New York: 12 AM midnight (prev day)</li>
                <li>• London: 5 AM</li>
                <li>• Mumbai: 10:30 AM</li>
                <li>• Singapore: 1 PM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Dubai Evening (6 PM GST)</h4>
              <ul className="mt-2 space-y-1">
                <li>• New York: 9 AM</li>
                <li>• London: 2 PM</li>
                <li>• Mumbai: 7:30 PM</li>
                <li>• Singapore: 10 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Dubai Time vs Major Cities
        </h2>
        <div className={`overflow-x-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>When it's 12 PM in Dubai</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr><td className="px-4 py-3">🇺🇸 New York</td><td className="px-4 py-3">-9 hours</td><td className="px-4 py-3">3:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇺🇸 Los Angeles</td><td className="px-4 py-3">-12 hours</td><td className="px-4 py-3">12:00 AM midnight</td></tr>
              <tr><td className="px-4 py-3">🇬🇧 London</td><td className="px-4 py-3">-4 hours</td><td className="px-4 py-3">8:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇫🇷 Paris</td><td className="px-4 py-3">-3 hours</td><td className="px-4 py-3">9:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇮🇳 Mumbai</td><td className="px-4 py-3">+1.5 hours</td><td className="px-4 py-3">1:30 PM</td></tr>
              <tr><td className="px-4 py-3">🇸🇬 Singapore</td><td className="px-4 py-3">+4 hours</td><td className="px-4 py-3">4:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇯🇵 Tokyo</td><td className="px-4 py-3">+5 hours</td><td className="px-4 py-3">5:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇦🇺 Sydney</td><td className="px-4 py-3">+7 hours</td><td className="px-4 py-3">7:00 PM</td></tr>
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
          Practical Tips for Dealing with Dubai Time
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🌍 For International Business</h3>
            <p className="text-sm">
              Dubai excels as a meeting point between East and West. Schedule 10 AM-12 PM Dubai 
              for Asia overlap, or 3-6 PM Dubai for European/early US overlap. The Friday-Saturday 
              weekend means Thursday is often a shorter day.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🕌 During Ramadan</h3>
            <p className="text-sm">
              Business hours shift during Ramadan. Many offices work reduced hours (typically 9 AM - 2 PM). 
              Restaurants don't serve during daylight hours (takeaway available). Evening hours after 
              Iftar (sunset) become very active.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>☀️ Summer Heat Consideration</h3>
            <p className="text-sm">
              Summer (June-August) sees 40°C+ temperatures. Outdoor activities shift to early morning 
              or evening. Malls and indoor attractions are busiest during afternoon heat. Many expats 
              leave for summer holidays.
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
            <h3 className={`font-medium mb-2 ${headingColor}`}>What is the weekend in Dubai?</h3>
            <p className="text-sm">
              Friday and Saturday. This changed in January 2022 from the previous Friday-only weekend. 
              Sunday through Thursday are working days.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does Dubai have daylight saving time?</h3>
            <p className="text-sm">
              No. The UAE stays on GST (UTC+4) year-round. This means the time difference with 
              Europe changes when they adjust clocks, not when Dubai does.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the time difference between Dubai and New York?</h3>
            <p className="text-sm">
              Dubai is 9 hours ahead of New York (EST). When it's noon in Dubai, it's 3 AM in New York. 
              During US daylight saving time, the difference is 8 hours.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${isLight ? 'bg-emerald-50 border border-emerald-200' : 'bg-emerald-900/20 border border-emerald-700'}`}>
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
            📅 UAE Holidays
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
