'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoCallTimesContent({ city }: Props) {
  const { isLight } = useCityContext()
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'

  const callWindows = [
    { from: '🇺🇸 New York', best: '8-10 PM (NYC) → 10 AM-12 PM (Tokyo)', alt: '7-9 AM (NYC) → 9-11 PM (Tokyo)', note: 'Evening NYC = morning Tokyo works best' },
    { from: '🇺🇸 Los Angeles', best: '5-7 PM (LA) → 10 AM-12 PM (Tokyo)', alt: '4-6 AM (LA) → 9-11 PM (Tokyo)', note: '17-hour difference is brutal' },
    { from: '🇬🇧 London', best: '7-9 AM (London) → 4-6 PM (Tokyo)', alt: '8-10 PM (London) → 5-7 AM (Tokyo)', note: 'Morning UK = afternoon Tokyo' },
    { from: '🇦🇺 Sydney', best: '11 AM-1 PM (Sydney) → 9-11 AM (Tokyo)', alt: '7-9 PM (Sydney) → 5-7 PM (Tokyo)', note: 'Only 2-hour difference (varies with DST)' },
    { from: '🇸🇬 Singapore', best: '10 AM-12 PM (SG) → 11 AM-1 PM (Tokyo)', alt: '6-8 PM (SG) → 7-9 PM (Tokyo)', note: 'Easy 1-hour difference' },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Best Time to Call Tokyo</h1>
        <p className={`text-lg ${mutedColor}`}>Optimal calling windows from major cities worldwide</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>From US:</strong> Call Tokyo in your evening (7-10 PM EST = 9 AM-12 PM Tokyo next day). 
          <strong>From UK:</strong> Morning calls work (8 AM London = 5 PM Tokyo). 
          Tokyo business hours: <strong>9 AM - 6 PM JST</strong>, but expect late nights in Japanese work culture.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📞 Best Calling Windows</h2>
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>From</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Best Window</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Alternative</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {callWindows.map((cw, i) => (
                <tr key={cw.from} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="px-4 py-3 font-medium">{cw.from}</td>
                  <td className="px-4 py-3">{cw.best}</td>
                  <td className="px-4 py-3">{cw.alt}</td>
                  <td className={`px-4 py-3 ${mutedColor}`}>{cw.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💡 Japanese Business Culture Tips</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 Late Working Culture</h3>
            <p className="text-sm">Japanese professionals often work late (until 8-9 PM). Don't be surprised if colleagues are available later than expected. However, calling before 9 AM or after 9 PM is considered rude.</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📧 Email First</h3>
            <p className="text-sm">Japanese business culture often prefers email before calls. Send a meeting request first, especially for formal business. Cold calls are less common.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>Time Difference</span>
          </Link>
        </div>
      </section>
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
