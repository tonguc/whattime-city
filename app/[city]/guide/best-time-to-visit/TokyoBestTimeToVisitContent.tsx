'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoBestTimeToVisitContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const months = [
    { name: 'January', temp: '2-10°C', crowd: 'Low', price: '💰', icon: '❄️', desc: 'Post-New Year quiet (after Jan 3). Cold but crisp. Fukubukuro (lucky bags) sales early January. Great deals after 7th.' },
    { name: 'February', temp: '2-11°C', crowd: 'Low', price: '💰', icon: '💝', desc: 'Cheapest month. Cold but less tourists. Plum blossoms start late Feb. Pre-cherry blossom calm before the storm.' },
    { name: 'March', temp: '5-14°C', crowd: 'Very High', price: '💰💰💰💰', icon: '🌸', desc: 'Cherry blossom season begins (late March). Prices spike. Book 6+ months ahead. Magical but packed.' },
    { name: 'April', temp: '10-19°C', crowd: 'Extreme', price: '💰💰💰💰', icon: '🌸', desc: 'Peak cherry blossoms (early April). Most crowded month. Golden Week starts late April. Beautiful but expensive.' },
    { name: 'May', temp: '15-23°C', crowd: 'Extreme', price: '💰💰💰💰', icon: '🎏', desc: 'Golden Week nightmare (Apr 29 - May 6). AVOID unless you book a year ahead. Late May pleasant if you skip GW.' },
    { name: 'June', temp: '19-26°C', crowd: 'Low', price: '💰💰', icon: '☔', desc: 'Rainy season (tsuyu). Humid but fewer tourists. Good deals. Indoor attractions work well. Hydrangeas bloom.' },
    { name: 'July', temp: '23-30°C', crowd: 'Medium', price: '💰💰💰', icon: '🎆', desc: 'Hot and humid. Summer festivals, fireworks. Schools out mid-July brings families. Mt. Fuji climbing season.' },
    { name: 'August', temp: '24-31°C', crowd: 'High', price: '💰💰💰', icon: '🏮', desc: 'Peak summer heat. Obon week (mid-Aug) is crazy. But Tokyo empties as locals leave. Sweaty sightseeing.' },
    { name: 'September', temp: '20-27°C', crowd: 'Medium', price: '💰💰', icon: '🌾', desc: 'Typhoon season risk. Heat easing. Good shoulder season if no storms. Autumn festivals begin.' },
    { name: 'October', temp: '14-22°C', crowd: 'Medium-High', price: '💰💰💰', icon: '🍂', desc: 'Perfect weather. Sports Day holiday. Autumn colors begin late month. Halloween events in Shibuya.' },
    { name: 'November', temp: '9-17°C', crowd: 'High', price: '💰💰💰', icon: '🍁', desc: 'Peak autumn foliage. Gorgeous but busy. 7-5-3 festival for kids. Great photography weather.' },
    { name: 'December', temp: '4-12°C', crowd: 'High', price: '💰💰💰', icon: '🎄', desc: 'Christmas illuminations. Cold but festive. Avoid Dec 28 - Jan 3 (everything closed). Good early December.' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Best Time to Visit Tokyo</h1>
        <p className={`text-lg ${mutedColor}`}>Cherry blossoms, weather, crowds & prices by month</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-pink-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>Best overall: Late October - mid November</strong> (autumn colors, perfect weather). 
          <strong>Cherry blossoms:</strong> Late March - early April (magical but packed). 
          <strong>AVOID:</strong> Golden Week (Apr 29 - May 6), Obon (mid-Aug), New Year (Dec 31 - Jan 3).
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>📅 Month by Month</h2>
        <div className="space-y-4">
          {months.map((month) => (
            <div key={month.name} className={`p-4 rounded-xl ${cardBg} border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-2xl">{month.icon}</span>
                <h3 className={`text-lg font-semibold ${headingColor}`}>{month.name}</h3>
                <span className={`text-sm px-2 py-1 rounded ${isLight ? 'bg-slate-200' : 'bg-slate-600'}`}>{month.temp}</span>
                <span className={`text-sm px-2 py-1 rounded ${
                  month.crowd === 'Low' ? 'bg-green-100 text-green-700' :
                  month.crowd === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  month.crowd === 'High' || month.crowd === 'Medium-High' ? 'bg-orange-100 text-orange-700' :
                  'bg-red-100 text-red-700'
                }`}>{month.crowd}</span>
                <span className="text-sm">{month.price}</span>
              </div>
              <p className="text-sm">{month.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌸 Cherry Blossom Season</h2>
        <div className={`p-6 rounded-xl border-2 border-pink-300 ${isLight ? 'bg-pink-50' : 'bg-pink-900/20'}`}>
          <p className="mb-4">
            Tokyo's cherry blossoms (sakura) typically bloom <strong>late March to early April</strong>. 
            Peak viewing lasts only about 1 week. Dates vary by year — check forecasts starting February.
          </p>
          <ul className="space-y-2 text-sm">
            <li>• <strong>2024 peak:</strong> ~April 4 (was early due to warm weather)</li>
            <li>• <strong>Best spots:</strong> Ueno Park, Meguro River, Shinjuku Gyoen, Chidorigafuchi</li>
            <li>• <strong>Book ahead:</strong> Hotels sell out 6+ months in advance</li>
            <li>• <strong>Prices:</strong> 2-3x normal rates during peak bloom</li>
          </ul>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>Japanese Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/travel-planning/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>✈️</span><span>Travel Planning</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
