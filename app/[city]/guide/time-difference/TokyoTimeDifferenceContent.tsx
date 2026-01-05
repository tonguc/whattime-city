'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoTimeDifferenceContent({ city }: Props) {
  const { isLight } = useCityContext()
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'

  const cities = [
    { city: '🇺🇸 New York', diff: '-14 hours', when12: '10:00 PM (prev day)' },
    { city: '🇺🇸 Los Angeles', diff: '-17 hours', when12: '7:00 PM (prev day)' },
    { city: '🇬🇧 London', diff: '-9 hours', when12: '3:00 AM' },
    { city: '🇫🇷 Paris', diff: '-8 hours', when12: '4:00 AM' },
    { city: '🇦🇪 Dubai', diff: '-5 hours', when12: '7:00 AM' },
    { city: '🇮🇳 Mumbai', diff: '-3.5 hours', when12: '8:30 AM' },
    { city: '🇸🇬 Singapore', diff: '-1 hour', when12: '11:00 AM' },
    { city: '🇭🇰 Hong Kong', diff: '-1 hour', when12: '11:00 AM' },
    { city: '🇰🇷 Seoul', diff: '0 hours', when12: '12:00 PM' },
    { city: '🇦🇺 Sydney', diff: '+2 hours*', when12: '2:00 PM' },
    { city: '🇳🇿 Auckland', diff: '+4 hours*', when12: '4:00 PM' },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Tokyo Time Difference</h1>
        <p className={`text-lg ${mutedColor}`}>JST vs major world cities</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-indigo-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Tokyo is <strong>JST (UTC+9)</strong> year-round — no daylight saving. 
          That's <strong>14 hours ahead of NYC</strong>, <strong>9 hours ahead of London</strong>, 
          and <strong>2 hours behind Sydney</strong>.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 When it's 12:00 PM in Tokyo</h2>
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Difference from Tokyo</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Local Time</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {cities.map((c, i) => (
                <tr key={c.city} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="px-4 py-3 font-medium">{c.city}</td>
                  <td className="px-4 py-3">{c.diff}</td>
                  <td className="px-4 py-3">{c.when12}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>* Sydney/Auckland differences vary due to their DST.</p>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/call-times/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📞</span><span>Best Time to Call</span>
          </Link>
          <Link href="/time/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🔄</span><span>Time Converter</span>
          </Link>
        </div>
      </section>
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
