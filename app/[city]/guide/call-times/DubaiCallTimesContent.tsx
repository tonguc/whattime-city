'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiCallTimesContent({ city }: Props) {
  const { isLight } = useCityContext()
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'

  const callWindows = [
    { from: '🇺🇸 New York', best: '9-11 AM (NYC) → 6-8 PM (Dubai)', alt: '3-5 PM (NYC) → 12-2 AM (Dubai)', note: 'Morning NYC = evening Dubai works well' },
    { from: '🇬🇧 London', best: '9-11 AM (London) → 1-3 PM (Dubai)', alt: '2-4 PM (London) → 6-8 PM (Dubai)', note: 'Excellent 4-hour overlap' },
    { from: '🇮🇳 Mumbai', best: '10 AM-12 PM (Mumbai) → 8:30-10:30 AM (Dubai)', alt: '6-8 PM (Mumbai) → 4:30-6:30 PM (Dubai)', note: 'Only 1.5 hour difference!' },
    { from: '🇸🇬 Singapore', best: '2-4 PM (SG) → 10 AM-12 PM (Dubai)', alt: '8-10 AM (SG) → 4-6 AM (Dubai)', note: '4-hour difference manageable' },
    { from: '🇦🇺 Sydney', best: '4-6 PM (Sydney) → 9-11 AM (Dubai)', alt: '9-11 AM (Sydney) → 2-4 AM (Dubai)', note: '7-hour difference, plan carefully' },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Best Time to Call Dubai</h1>
        <p className={`text-lg ${mutedColor}`}>Optimal calling windows from major cities worldwide</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Dubai is <strong>GST (UTC+4)</strong>. Great overlap with Europe, India, and East Africa. 
          <strong>From US:</strong> Morning US = Evening Dubai. <strong>From UK:</strong> Full business 
          day overlap. <strong>Remember:</strong> Weekend is Friday-Saturday!
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
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>⚠️ Friday-Saturday Weekend</h2>
        <div className={`p-4 rounded-xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700'}`}>
          <p className="text-sm">
            <strong>Remember:</strong> Dubai's weekend is Friday-Saturday. If you're calling on 
            Friday from the US/UK, Dubai offices are closed. Sunday is a regular working day in Dubai!
          </p>
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
