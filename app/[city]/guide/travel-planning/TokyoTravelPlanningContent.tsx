'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoTravelPlanningContent({ city }: Props) {
  const { isLight } = useCityContext()
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'

  const flightTimes = [
    { from: 'New York (JFK)', time: '14-15 hours', jetLag: 'Severe', direction: '+14h (cross date line)' },
    { from: 'Los Angeles', time: '11-12 hours', jetLag: 'Severe', direction: '+17h' },
    { from: 'London', time: '11-12 hours', jetLag: 'Significant', direction: '+9h' },
    { from: 'Sydney', time: '9-10 hours', jetLag: 'Moderate', direction: '-2h (varies)' },
    { from: 'Singapore', time: '7 hours', jetLag: 'Minimal', direction: '+1h' },
    { from: 'Seoul', time: '2-2.5 hours', jetLag: 'None', direction: '0h' },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Travel Planning: Flying to Tokyo</h1>
        <p className={`text-lg ${mutedColor}`}>Flight times, airports, jet lag & JR Pass tips</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-cyan-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>Narita (NRT)</strong> is the main international airport (60 min to city). 
          <strong>Haneda (HND)</strong> is closer (30 min) and increasingly has international flights. 
          <strong>JR Pass:</strong> Worth it if taking 2+ long Shinkansen trips. Jet lag from US is brutal 
          — plan 3-5 days to adjust.
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
                  <td className="px-4 py-3"><span className={`px-2 py-1 rounded text-xs ${f.jetLag === 'Severe' ? 'bg-red-100 text-red-700' : f.jetLag === 'Significant' ? 'bg-orange-100 text-orange-700' : f.jetLag === 'Moderate' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>{f.jetLag}</span></td>
                  <td className="px-4 py-3">{f.direction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛬 Narita vs Haneda</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Narita (NRT)</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Distance:</strong> 60km from Tokyo center</li>
              <li>• <strong>To city:</strong> 60-90 min (Narita Express ¥3,070)</li>
              <li>• <strong>Best for:</strong> Most international flights</li>
              <li>• <strong>Budget:</strong> Access Express ¥1,270 (slower)</li>
            </ul>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Haneda (HND)</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Distance:</strong> 15km from Tokyo center</li>
              <li>• <strong>To city:</strong> 20-30 min (Keikyu/Monorail ~¥500)</li>
              <li>• <strong>Best for:</strong> Domestic + growing international</li>
              <li>• <strong>Tip:</strong> Pay more for Haneda if available</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚅 JR Pass Worth It?</h2>
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-4">The JR Pass (¥50,000 for 7 days) is worth it if you're taking multiple long-distance trips:</p>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>Worth it:</strong> Tokyo → Kyoto → Hiroshima → Tokyo loop</li>
            <li>✅ <strong>Worth it:</strong> Multiple day trips (Nikko, Hakone, etc.)</li>
            <li>❌ <strong>Not worth it:</strong> Staying only in Tokyo</li>
            <li>❌ <strong>Not worth it:</strong> Just Tokyo → Kyoto round trip (buy individual tickets)</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>😴 Jet Lag Tips</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From USA (hardest)</h3>
            <p className="text-sm">You're crossing the International Date Line. Arrive exhausted in morning Tokyo time. Force yourself to stay awake until 9-10 PM. Expect 4-5 days to fully adjust.</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From Europe</h3>
            <p className="text-sm">Going east +9 hours. Morning flight arrives evening Tokyo time — good for sleep adjustment. Expect 2-3 days to adjust.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌸</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in Tokyo</span>
          </Link>
        </div>
      </section>
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
