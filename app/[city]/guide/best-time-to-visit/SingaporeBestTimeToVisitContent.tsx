'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeBestTimeToVisitContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Visit Singapore
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Weather, festivals, events, and when to find the best deals
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>February to April</strong> for the driest weather and post-CNY calm. 
          Singapore is hot and humid year-round (28-32°C), so weather varies little. 
          Visit during <strong>F1 Grand Prix (September)</strong> for excitement, or 
          avoid peak seasons for better hotel rates.
        </p>
      </section>
      
      <section className={`mb-8 p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'}`}>
        <h3 className={`font-semibold mb-2 ${headingColor}`}>🌡️ Singapore's Climate</h3>
        <p className="text-sm">
          Singapore has a tropical rainforest climate - hot and humid all year with no distinct 
          seasons. Temperature: 25-32°C (77-90°F). Humidity: 70-90%. Rain can happen any time, 
          usually brief afternoon thunderstorms. Always carry an umbrella!
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 Month-by-Month Guide</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Month</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Weather</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Events</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Rating</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">January</td>
                <td className="px-4 py-3">🌧️ Wet monsoon</td>
                <td className="px-4 py-3">New Year, CNY prep</td>
                <td className="px-4 py-3">⭐⭐⭐</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">February</td>
                <td className="px-4 py-3">☁️ Less rain</td>
                <td className="px-4 py-3">Chinese New Year 🧧</td>
                <td className="px-4 py-3">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">March</td>
                <td className="px-4 py-3">☀️ Drier</td>
                <td className="px-4 py-3">Quieter period</td>
                <td className="px-4 py-3">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">April</td>
                <td className="px-4 py-3">☀️ Hot, less rain</td>
                <td className="px-4 py-3">Quieter period</td>
                <td className="px-4 py-3">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">May</td>
                <td className="px-4 py-3">🌧️ SW monsoon starts</td>
                <td className="px-4 py-3">Vesak Day</td>
                <td className="px-4 py-3">⭐⭐⭐⭐</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">June</td>
                <td className="px-4 py-3">☀️ Hot</td>
                <td className="px-4 py-3">Great Singapore Sale 🛍️</td>
                <td className="px-4 py-3">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">July</td>
                <td className="px-4 py-3">☀️ Hot</td>
                <td className="px-4 py-3">GSS continues</td>
                <td className="px-4 py-3">⭐⭐⭐⭐</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">August</td>
                <td className="px-4 py-3">☀️ Hot</td>
                <td className="px-4 py-3">National Day 🇸🇬 (9th)</td>
                <td className="px-4 py-3">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">September</td>
                <td className="px-4 py-3">☀️ Hot</td>
                <td className="px-4 py-3">F1 Grand Prix 🏎️</td>
                <td className="px-4 py-3">⭐⭐⭐⭐⭐</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">October</td>
                <td className="px-4 py-3">🌧️ Rain increases</td>
                <td className="px-4 py-3">Deepavali 🪔</td>
                <td className="px-4 py-3">⭐⭐⭐⭐</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">November</td>
                <td className="px-4 py-3">🌧️ NE monsoon</td>
                <td className="px-4 py-3">Year-end sales</td>
                <td className="px-4 py-3">⭐⭐⭐</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">December</td>
                <td className="px-4 py-3">🌧️ Wettest month</td>
                <td className="px-4 py-3">Christmas, Orchard lights ✨</td>
                <td className="px-4 py-3">⭐⭐⭐</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🎉 Major Events & Festivals</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🧧 Chinese New Year (Jan/Feb)</h3>
            <p className="text-sm mb-2">Singapore's biggest festival. Chinatown lights up, 
            River Hongbao celebration, Chingay parade. Many businesses close for 2-3 days.</p>
            <p className="text-xs text-amber-500">⚠️ Book hotels early, expect crowds</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🏎️ F1 Singapore GP (September)</h3>
            <p className="text-sm mb-2">The world's first night race! Marina Bay street circuit 
            with concerts and parties. The city buzzes for race week.</p>
            <p className="text-xs text-amber-500">⚠️ Hotel prices 2-3x normal</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🇸🇬 National Day (Aug 9)</h3>
            <p className="text-sm mb-2">Singapore's independence celebration. Spectacular 
            parade at Marina Bay with fireworks, military displays, and performances.</p>
            <p className="text-xs text-green-500">✓ Great for experiencing local pride</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🪔 Deepavali (Oct/Nov)</h3>
            <p className="text-sm mb-2">Festival of Lights. Little India glows with decorations, 
            special markets, and street performances. Beautiful photo opportunities.</p>
            <p className="text-xs text-green-500">✓ Wonderful cultural experience</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💰 Budget Considerations</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Peak Season (Higher Prices)</h3>
          <ul className="text-sm space-y-2 mb-4">
            <li>• <strong>Chinese New Year week</strong> - Hotels 50-100% more</li>
            <li>• <strong>F1 Grand Prix week</strong> - Hotels 2-3x normal prices</li>
            <li>• <strong>Christmas/New Year</strong> - School holidays, family travel</li>
            <li>• <strong>June/July</strong> - School holiday period</li>
          </ul>
          
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Off-Peak (Better Deals)</h3>
          <ul className="text-sm space-y-2">
            <li>• <strong>February (post-CNY)</strong> - Quieter, good deals</li>
            <li>• <strong>March-April</strong> - Best combination of weather + prices</li>
            <li>• <strong>Early November</strong> - Before holiday rush</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌧️ Dealing with Rain</h2>
        
        <div className={`p-6 rounded-xl border-2 border-blue-300 ${isLight ? 'bg-blue-50' : 'bg-blue-900/20'}`}>
          <p className="mb-4">
            Rain in Singapore is usually short afternoon thunderstorms (30-60 mins). 
            Don't let it ruin your plans!
          </p>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Always carry an umbrella</strong> - Available everywhere for S$5-10</li>
            <li>• <strong>Plan indoor activities for afternoon</strong> - Malls, museums, etc.</li>
            <li>• <strong>Use underground connections</strong> - Many MRT stations link to malls</li>
            <li>• <strong>Embrace it</strong> - Rain cools things down, locals barely notice</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>When is Singapore least crowded?</h3>
            <p className="text-sm">
              February (after CNY) and September-October (excluding F1 week) tend to be 
              quieter. Avoid school holidays (June, December) for fewer crowds.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is December a bad time to visit?</h3>
            <p className="text-sm">
              It's the wettest month, but Orchard Road Christmas lights are magical, 
              and there's festive atmosphere everywhere. Just prepare for rain.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How hot does Singapore get?</h3>
            <p className="text-sm">
              Typically 28-32°C (82-90°F) year-round. Humidity makes it feel hotter. 
              Everything is air-conditioned, so you'll constantly go from hot to cold.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>Singapore Public Holidays</span>
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
