'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyStockMarketContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Australian Stock Exchange (ASX) Trading Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          ASX hours in Sydney time and major global timezones
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          ASX trading hours: <strong>10:00 AM - 4:00 PM AEST/AEDT</strong>, Monday-Friday. Pre-market 
          starts 7:00 AM, after-hours until 5:10 PM.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 ASX Trading Sessions</h2>
        
        <div className={`overflow-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3">Session</th>
                <th className="text-left p-3">Sydney Time</th>
                <th className="text-left p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">Pre-Open</td>
                <td className="p-3 font-medium">7:00 AM - 10:00 AM</td>
                <td className="p-3">Order entry, no execution</td>
              </tr>
              <tr>
                <td className="p-3">Normal Trading</td>
                <td className="p-3 font-medium">10:00 AM - 4:00 PM</td>
                <td className="p-3">Main trading session</td>
              </tr>
              <tr>
                <td className="p-3">Closing Single Price Auction</td>
                <td className="p-3 font-medium">4:00 PM - 4:10 PM</td>
                <td className="p-3">Closing auction</td>
              </tr>
              <tr>
                <td className="p-3">Adjust Phase</td>
                <td className="p-3 font-medium">4:10 PM - 5:10 PM</td>
                <td className="p-3">After-hours adjustments</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 ASX Hours in Your Timezone</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🇺🇸 New York (EST/EDT)</h3>
            <p className="text-sm">6:00 PM - 12:00 AM (previous day)</p>
            <p className="text-xs text-amber-600">Overnight trading for US investors</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🇬🇧 London (GMT/BST)</h3>
            <p className="text-sm">11:00 PM - 5:00 AM (previous day)</p>
            <p className="text-xs text-amber-600">Late night / early morning</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🇯🇵 Tokyo (JST)</h3>
            <p className="text-sm">8:00 AM - 2:00 PM</p>
            <p className="text-xs text-amber-600">Morning hours - good overlap</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🇸🇬 Singapore (SGT)</h3>
            <p className="text-sm">7:00 AM - 1:00 PM</p>
            <p className="text-xs text-amber-600">Early morning trading</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>📚 Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>💼</span>
            <span className={`font-medium ${headingColor}`}>Business Hours</span>
          </Link>
          <Link href="/tools/converter/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>🔄</span>
            <span className={`font-medium ${headingColor}`}>Time Converter</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
