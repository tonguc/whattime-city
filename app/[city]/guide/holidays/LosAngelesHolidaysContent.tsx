'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesHolidaysContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const redBg = isLight ? 'bg-red-50' : 'bg-red-900/20'
  const blueBg = isLight ? 'bg-blue-50' : 'bg-blue-900/20'
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Los Angeles Holidays & Observances
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Federal holidays, California state closures, and entertainment industry breaks
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Los Angeles observes all <strong>11 federal holidays</strong> (banks and government closed) plus 
          California-specific observances like <strong>César Chávez Day</strong>. The entertainment industry 
          has its own rhythm with a <strong>major shutdown from Christmas through New Year's</strong> and 
          slower periods around Thanksgiving and summer. LA schools follow a different calendar with breaks 
          in spring and winter.
        </p>
      </section>

      {/* Federal Holidays */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🇺🇸 Federal Holidays (Banks & Government Closed)
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Holiday</th>
                <th className="text-left p-3 font-medium">Date</th>
                <th className="text-left p-3 font-medium">What's Closed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 font-medium">New Year's Day</td>
                <td className="p-3">January 1</td>
                <td className="p-3">Banks, government, many businesses</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Martin Luther King Jr. Day</td>
                <td className="p-3">3rd Monday in January</td>
                <td className="p-3">Banks, government, schools</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Presidents' Day</td>
                <td className="p-3">3rd Monday in February</td>
                <td className="p-3">Banks, government, schools</td>
              </tr>
              <tr className={redBg}>
                <td className="p-3 font-medium">César Chávez Day 🌟</td>
                <td className="p-3">March 31</td>
                <td className="p-3">California state offices, schools (CA-specific)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Memorial Day</td>
                <td className="p-3">Last Monday in May</td>
                <td className="p-3">Banks, government, major businesses</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Juneteenth</td>
                <td className="p-3">June 19</td>
                <td className="p-3">Banks, government (newer federal holiday)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Independence Day</td>
                <td className="p-3">July 4</td>
                <td className="p-3">Banks, government, most businesses</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Labor Day</td>
                <td className="p-3">1st Monday in September</td>
                <td className="p-3">Banks, government, schools</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Columbus/Indigenous Peoples' Day</td>
                <td className="p-3">2nd Monday in October</td>
                <td className="p-3">Banks, government (LA calls it Indigenous Peoples' Day)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Veterans Day</td>
                <td className="p-3">November 11</td>
                <td className="p-3">Banks, government, schools</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Thanksgiving</td>
                <td className="p-3">4th Thursday in November</td>
                <td className="p-3">Banks, government, most businesses</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Christmas Day</td>
                <td className="p-3">December 25</td>
                <td className="p-3">Banks, government, most businesses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Entertainment Industry */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎬 Entertainment Industry Calendar
        </h2>
        
        <p className="mb-4">
          LA's entertainment industry (film, TV, music) follows its own rhythm distinct from traditional business calendars.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl border-2 border-red-300 dark:border-red-700 ${redBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🎄 Holiday Shutdown</h3>
            <p className="text-sm mb-3">
              <strong>Period:</strong> ~December 20 - January 3<br/>
              <strong>Impact:</strong> Almost everything stops
            </p>
            <ul className="text-sm space-y-1">
              <li>• Studios closed</li>
              <li>• No production</li>
              <li>• Agencies on skeleton staff</li>
              <li>• Development on hold</li>
              <li>• Returns early January</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🦃 Thanksgiving Week</h3>
            <p className="text-sm mb-3">
              <strong>Period:</strong> Week of Thanksgiving<br/>
              <strong>Impact:</strong> Significantly slower
            </p>
            <ul className="text-sm space-y-1">
              <li>• Many take full week off</li>
              <li>• Reduced production schedules</li>
              <li>• Few meetings scheduled</li>
              <li>• Offices open but quiet</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>☀️ Summer Fridays</h3>
            <p className="text-sm mb-3">
              <strong>Period:</strong> Late May - Labor Day<br/>
              <strong>Impact:</strong> Half-day Fridays common
            </p>
            <ul className="text-sm space-y-1">
              <li>• Many offices close at 1-2 PM Friday</li>
              <li>• Production continues normally</li>
              <li>• Slower decision-making</li>
              <li>• People at beaches after lunch</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🏆 Awards Season</h3>
            <p className="text-sm mb-3">
              <strong>Period:</strong> January - March<br/>
              <strong>Impact:</strong> Busy but celebratory
            </p>
            <ul className="text-sm space-y-1">
              <li>• Oscar campaigns peak</li>
              <li>• Many events and screenings</li>
              <li>• Traffic worse around venues</li>
              <li>• Hotels expensive</li>
            </ul>
          </div>
        </div>
      </section>

      {/* School Calendar */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📚 LA School Calendar (LAUSD)
        </h2>
        
        <div className={`p-5 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Major School Breaks</h3>
          <ul className="space-y-2">
            <li>
              <strong>Winter Break:</strong> ~December 20 - January 8<br/>
              <span className="text-sm">Overlaps with entertainment shutdown, traffic lighter</span>
            </li>
            <li>
              <strong>Spring Break:</strong> One week in March/April<br/>
              <span className="text-sm">Beach areas more crowded, family travel peak</span>
            </li>
            <li>
              <strong>Summer Break:</strong> ~June 15 - August 20<br/>
              <span className="text-sm">Heaviest family traffic, attractions packed</span>
            </li>
            <li>
              <strong>Thanksgiving Break:</strong> Wednesday - Sunday<br/>
              <span className="text-sm">Many extend to full week</span>
            </li>
          </ul>
        </div>
      </section>

      {/* What's Open */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏪 What's Open During Major Holidays?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl ${redBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Always Closed</h3>
            <ul className="text-sm space-y-1">
              <li>• Banks</li>
              <li>• Government offices</li>
              <li>• Post offices</li>
              <li>• Schools (public)</li>
              <li>• Courts</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Usually Closed</h3>
            <ul className="text-sm space-y-1">
              <li>• Museums (some)</li>
              <li>• Libraries</li>
              <li>• DMV</li>
              <li>• Many retailers (Christmas)</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${
            isLight ? 'bg-green-50' : 'bg-green-900/20'
          }`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Always Open</h3>
            <ul className="text-sm space-y-1">
              <li>• LAX Airport</li>
              <li>• Most restaurants</li>
              <li>• Gas stations</li>
              <li>• 24-hour pharmacies</li>
              <li>• Tourist attractions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          💡 Holiday Planning Tips
        </h2>
        <ul className="space-y-2">
          <li>🏦 <strong>Banking:</strong> Use mobile apps on holidays, ATMs work 24/7</li>
          <li>🍽️ <strong>Dining:</strong> Make reservations for major holidays (especially Thanksgiving, Easter brunch)</li>
          <li>🚗 <strong>Traffic:</strong> Holiday weekends = lighter traffic (many leave LA)</li>
          <li>✈️ <strong>LAX:</strong> Insanely busy before Thanksgiving & Christmas, arrive 3 hours early</li>
          <li>🎬 <strong>Entertainment work:</strong> Don't expect responses Dec 20-Jan 3</li>
          <li>🏖️ <strong>Beaches:</strong> Packed on Memorial Day, July 4, Labor Day</li>
          <li>🎆 <strong>July 4th:</strong> Best fireworks at Santa Monica Pier, Marina del Rey</li>
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
            href={`/${city.slug}/guide/business-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🏢</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Business Hours</span>
              <p className={`text-xs ${mutedColor}`}>When businesses operate</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/best-time-to-visit/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🌴</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Best Time to Visit</span>
              <p className={`text-xs ${mutedColor}`}>Seasonal planning</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
