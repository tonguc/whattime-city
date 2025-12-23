'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiTravelPlanningContent({ city }: Props) {
  const { isLight } = useCityContext()
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'

  const flightTimes = [
    { from: 'New York (JFK)', time: '13-14 hours', jetLag: 'Significant', direction: '+9h' },
    { from: 'London', time: '7 hours', jetLag: 'Moderate', direction: '+4h' },
    { from: 'Mumbai', time: '3 hours', jetLag: 'Minimal', direction: '-1.5h' },
    { from: 'Singapore', time: '7 hours', jetLag: 'Moderate', direction: '-4h' },
    { from: 'Sydney', time: '14 hours', jetLag: 'Significant', direction: '-7h' },
    { from: 'Johannesburg', time: '8 hours', jetLag: 'Minimal', direction: '+2h' },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Travel Planning: Flying to Dubai</h1>
        <p className={`text-lg ${mutedColor}`}>Flight times, DXB airport, visa & getting around</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-cyan-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>DXB (Dubai International)</strong> is the main airport — one of the world's busiest. 
          Most nationalities get <strong>visa on arrival (30 days)</strong>. Emirates and flydubai are 
          the home carriers. Metro connects airport to city (Red Line). Taxis are plentiful and affordable.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>✈️ Flight Times</h2>
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>From</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Duration</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Jet Lag</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Time Change</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {flightTimes.map((f, i) => (
                <tr key={f.from} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="px-4 py-3 font-medium">{f.from}</td>
                  <td className="px-4 py-3">{f.time}</td>
                  <td className="px-4 py-3"><span className={`px-2 py-1 rounded text-xs ${f.jetLag === 'Significant' ? 'bg-orange-100 text-orange-700' : f.jetLag === 'Moderate' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{f.jetLag}</span></td>
                  <td className="px-4 py-3">{f.direction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛬 Dubai Airports</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>DXB (Dubai International)</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Main hub</strong> for Emirates</li>
              <li>• Terminal 3 = Emirates exclusive</li>
              <li>• Metro: Red Line to city (AED 8-15)</li>
              <li>• Taxi: ~AED 50-80 to Downtown</li>
              <li>• 30 min to city center</li>
            </ul>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>DWC (Al Maktoum International)</h3>
            <ul className="text-sm space-y-1">
              <li>• Secondary airport (Jebel Ali area)</li>
              <li>• Some budget carriers</li>
              <li>• Far from city (~50 km)</li>
              <li>• Limited public transport</li>
              <li>• Growing, but DXB is preferred</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛂 Visa Information</h2>
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-3"><strong>Most nationalities get visa on arrival:</strong></p>
          <ul className="text-sm space-y-1">
            <li>• 🇺🇸 🇬🇧 🇪🇺 🇦🇺 🇨🇦 — 30 days visa-free on arrival</li>
            <li>• 🇮🇳 — 14-day visa on arrival (conditions apply) or pre-apply</li>
            <li>• Free extension for some nationalities</li>
            <li>• Always check current requirements before travel</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚗 Getting Around</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🚇 Dubai Metro</h3>
            <p className="text-sm">Clean, efficient, cheap. Red Line connects airport to Downtown, Marina. 
            Gold Class available (AED 7 vs AED 3). Runs 5 AM - midnight (Thu/Fri until 1 AM).</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🚕 Taxis</h3>
            <p className="text-sm">Plentiful, metered, affordable. Use RTA Careem/Uber. Starting fare 
            AED 12 (airport AED 25). Pink taxis = women drivers (optional for women passengers).</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🚌 Buses</h3>
            <p className="text-sm">Extensive network but slow. Good for budget travelers. 
            All use Nol card (same as metro). AC buses.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>☀️</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in Dubai</span>
          </Link>
        </div>
      </section>
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
