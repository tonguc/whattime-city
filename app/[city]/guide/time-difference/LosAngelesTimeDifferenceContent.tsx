'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesTimeDifferenceContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const greenBg = isLight ? 'bg-green-50' : 'bg-green-900/20'
  const blueBg = isLight ? 'bg-blue-50' : 'bg-blue-900/20'
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Los Angeles Time Difference Calculator
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Complete guide to time differences between LA and major world cities
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Los Angeles operates on <strong>Pacific Standard Time (PST, UTC-8)</strong> in winter and 
          <strong> Pacific Daylight Time (PDT, UTC-7)</strong> in summer. LA is <strong>3 hours behind 
          New York</strong>, <strong>8 hours behind London</strong>, and <strong>16-17 hours behind Sydney</strong>. 
          Daylight saving time runs from early March to early November.
        </p>
      </section>

      {/* Major Cities Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Time Differences to Major Cities
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">City</th>
                <th className="text-left p-3 font-medium">Winter (PST)</th>
                <th className="text-left p-3 font-medium">Summer (PDT)</th>
                <th className="text-left p-3 font-medium">When It's 12 PM in LA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className={greenBg}>
                <td className="p-3 font-medium">🇺🇸 New York</td>
                <td className="p-3">+3 hours</td>
                <td className="p-3">+3 hours</td>
                <td className="p-3">3:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇺🇸 Chicago</td>
                <td className="p-3">+2 hours</td>
                <td className="p-3">+2 hours</td>
                <td className="p-3">2:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇺🇸 Denver</td>
                <td className="p-3">+1 hour</td>
                <td className="p-3">+1 hour</td>
                <td className="p-3">1:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇺🇸 Honolulu</td>
                <td className="p-3">-2 hours</td>
                <td className="p-3">-3 hours</td>
                <td className="p-3">10:00 AM / 9:00 AM</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">🇬🇧 London</td>
                <td className="p-3">+8 hours</td>
                <td className="p-3">+7 hours</td>
                <td className="p-3">8:00 PM / 7:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇫🇷 Paris</td>
                <td className="p-3">+9 hours</td>
                <td className="p-3">+9 hours</td>
                <td className="p-3">9:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇩🇪 Berlin</td>
                <td className="p-3">+9 hours</td>
                <td className="p-3">+9 hours</td>
                <td className="p-3">9:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇦🇪 Dubai</td>
                <td className="p-3">+12 hours</td>
                <td className="p-3">+11 hours</td>
                <td className="p-3">12:00 AM / 11:00 PM</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">🇯🇵 Tokyo</td>
                <td className="p-3">+17 hours</td>
                <td className="p-3">+16 hours</td>
                <td className="p-3">5:00 AM (next day)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇸🇬 Singapore</td>
                <td className="p-3">+16 hours</td>
                <td className="p-3">+15 hours</td>
                <td className="p-3">4:00 AM (next day)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇦🇺 Sydney</td>
                <td className="p-3">+19 hours</td>
                <td className="p-3">+17 hours</td>
                <td className="p-3">7:00 AM (next day)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">🇳🇿 Auckland</td>
                <td className="p-3">+21 hours</td>
                <td className="p-3">+19 hours</td>
                <td className="p-3">9:00 AM (next day)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* DST Info */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          🕐 Daylight Saving Time in Los Angeles
        </h2>
        <div className="space-y-3">
          <p>
            <strong>Spring Forward:</strong> Second Sunday in March (2:00 AM → 3:00 AM)  
            <br/>Los Angeles switches from PST (UTC-8) to PDT (UTC-7)
          </p>
          <p>
            <strong>Fall Back:</strong> First Sunday in November (2:00 AM → 1:00 AM)  
            <br/>Los Angeles switches from PDT (UTC-7) to PST (UTC-8)
          </p>
          <p className="text-sm">
            <strong>Important:</strong> Not all countries observe DST on the same dates. Europe changes clocks 
            2-3 weeks later in March and 1 week earlier in October. This creates temporary 1-hour shifts in 
            time differences.
          </p>
        </div>
      </section>

      {/* Best Overlap Times */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📞 Best Times to Call from LA
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇺🇸 US East Coast</h3>
            <p className="text-sm mb-2"><strong>Best window:</strong> 9:00 AM - 3:00 PM PST</p>
            <p className="text-sm mb-2">Reaches NYC during 12:00 PM - 6:00 PM EST</p>
            <p className="text-sm text-green-600 dark:text-green-400">✅ Excellent overlap all day</p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇬🇧 UK/Ireland</h3>
            <p className="text-sm mb-2"><strong>Best window:</strong> 8:00 AM - 12:00 PM PST</p>
            <p className="text-sm mb-2">Reaches London during 4:00 PM - 8:00 PM GMT</p>
            <p className="text-sm text-amber-600 dark:text-amber-400">⚠️ Limited - requires early LA mornings</p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇪🇺 Europe</h3>
            <p className="text-sm mb-2"><strong>Best window:</strong> 8:00 AM - 11:00 AM PST</p>
            <p className="text-sm mb-2">Reaches Paris/Berlin during 5:00 PM - 8:00 PM CET</p>
            <p className="text-sm text-amber-600 dark:text-amber-400">⚠️ Narrow window - early calls work best</p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇯🇵 Japan/Korea</h3>
            <p className="text-sm mb-2"><strong>Best window:</strong> 5:00 PM - 9:00 PM PST</p>
            <p className="text-sm mb-2">Reaches Tokyo during 10:00 AM - 2:00 PM JST (next day)</p>
            <p className="text-sm text-red-600 dark:text-red-400">❌ Difficult - evening LA time required</p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇸🇬 Singapore</h3>
            <p className="text-sm mb-2"><strong>Best window:</strong> 6:00 PM - 10:00 PM PST</p>
            <p className="text-sm mb-2">Reaches Singapore during 10:00 AM - 2:00 PM SGT (next day)</p>
            <p className="text-sm text-red-600 dark:text-red-400">❌ Challenging - late LA evenings</p>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇦🇺 Australia</h3>
            <p className="text-sm mb-2"><strong>Best window:</strong> 4:00 PM - 10:00 PM PST</p>
            <p className="text-sm mb-2">Reaches Sydney during 10:00 AM - 4:00 PM AEST (next day)</p>
            <p className="text-sm text-red-600 dark:text-red-400">❌ Very difficult - massive time gap</p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Mental Math
        </h2>
        
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-4 ${headingColor}`}>Easy Calculations from LA Time</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-2">North America:</p>
              <ul className="space-y-1">
                <li>• <strong>East Coast:</strong> Add 3 hours</li>
                <li>• <strong>Central:</strong> Add 2 hours</li>
                <li>• <strong>Mountain:</strong> Add 1 hour</li>
                <li>• <strong>Alaska:</strong> Subtract 1 hour</li>
                <li>• <strong>Hawaii:</strong> Subtract 2-3 hours</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">International:</p>
              <ul className="space-y-1">
                <li>• <strong>London:</strong> Add 8 hours (winter) / 7 (summer)</li>
                <li>• <strong>Paris/Berlin:</strong> Add 9 hours</li>
                <li>• <strong>Dubai:</strong> Add 12 hours (winter) / 11 (summer)</li>
                <li>• <strong>Tokyo:</strong> Add 17 hours (winter) / 16 (summer)</li>
                <li>• <strong>Sydney:</strong> Add 19 hours (winter) / 17 (summer)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-red-500 ${
        isLight ? 'bg-red-50' : 'bg-red-900/20'
      }`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          ⚠️ Common Time Difference Mistakes
        </h2>
        <ul className="space-y-2">
          <li>❌ <strong>Forgetting DST transitions:</strong> March/November time shifts can surprise you</li>
          <li>❌ <strong>Not checking if both cities observe DST:</strong> Dubai, Tokyo don't change clocks</li>
          <li>❌ <strong>Assuming same DST dates globally:</strong> Europe changes 2-3 weeks after US</li>
          <li>❌ <strong>Mixing up "ahead" and "behind":</strong> LA is behind NYC, ahead of Hawaii</li>
          <li>❌ <strong>Forgetting the date change:</strong> Asia calls are next day in their timezone</li>
        </ul>
      </section>

      {/* Related Links */}
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          📚 Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/call-times/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📞</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Call Times from LA</span>
              <p className={`text-xs ${mutedColor}`}>Best calling windows</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/remote-work/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>💻</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Remote Work in LA</span>
              <p className={`text-xs ${mutedColor}`}>Timezone overlap strategies</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
