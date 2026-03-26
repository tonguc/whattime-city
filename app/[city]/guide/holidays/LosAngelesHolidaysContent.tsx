'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesHolidaysContent({ city }: Props) {
  const { isLight, time } = useCityContext()

  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'

  const holidays2026 = [
    { date: 'January 1', day: 'Thursday', name: "New Year's Day", impact: 'Banks, government, NYSE closed. Most shops open.', isBank: true, isState: false },
    { date: 'January 19', day: 'Monday', name: 'Martin Luther King Jr. Day', impact: 'Federal holiday. NYSE closed. Many businesses open.', isBank: true, isState: false },
    { date: 'February 16', day: 'Monday', name: "Presidents' Day (Washington's Birthday)", impact: 'Federal holiday. NYSE closed. Studios may stay open.', isBank: true, isState: false },
    { date: 'March 31', day: 'Tuesday', name: 'César Chávez Day', impact: 'California state holiday. State offices closed. NOT a federal holiday. NYSE open.', isBank: false, isState: true },
    { date: 'May 25', day: 'Monday', name: 'Memorial Day', impact: 'Federal holiday. NYSE closed. Summer begins culturally.', isBank: true, isState: false },
    { date: 'June 19', day: 'Friday', name: 'Juneteenth National Independence Day', impact: 'Federal holiday. NYSE closed.', isBank: true, isState: false },
    { date: 'July 4', day: 'Saturday', name: 'Independence Day (observed Jul 3)', impact: 'Fireworks, parades. NYSE closed Friday Jul 3.', isBank: true, isState: false },
    { date: 'September 7', day: 'Monday', name: 'Labor Day', impact: 'Federal holiday. NYSE closed. End of summer.', isBank: true, isState: false },
    { date: 'October 12', day: 'Monday', name: 'Columbus Day / Indigenous Peoples Day', impact: 'Federal, not universally observed. NYSE open. Banks may close.', isBank: false, isState: false },
    { date: 'November 11', day: 'Wednesday', name: 'Veterans Day', impact: 'Federal holiday. NYSE open. Banks may close.', isBank: false, isState: false },
    { date: 'November 26', day: 'Thursday', name: 'Thanksgiving Day', impact: 'Major US holiday. NYSE closed. Most everything closed.', isBank: true, isState: false },
    { date: 'December 25', day: 'Friday', name: 'Christmas Day', impact: 'NYSE closed. Most everything closed.', isBank: true, isState: false },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Los Angeles Public Holidays & LA Business Closures 2026
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Federal and California state holidays — what's open in LA
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          LA observes <strong>11 federal holidays</strong> plus <strong>César Chávez Day (March 31)</strong> as a
          California state holiday. Entertainment studios often stay open. State and county offices follow the
          California holiday schedule.
        </p>
      </section>

      {/* Holiday Calendar */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 California Holidays & Los Angeles Closures 2026</h2>

        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Date</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Day</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>What to Expect</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Banks Close</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {holidays2026.map(h => (
                <tr
                  key={h.date}
                  className={
                    h.isState
                      ? isLight ? 'bg-green-50 hover:bg-green-100' : 'bg-green-900/20 hover:bg-green-900/30'
                      : isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'
                  }
                >
                  <td className="px-4 py-3 font-medium">{h.date}</td>
                  <td className="px-4 py-3">{h.day}</td>
                  <td className="px-4 py-3">
                    {h.name}
                    {h.isState && (
                      <span className={`ml-2 text-xs px-1.5 py-0.5 rounded font-medium ${isLight ? 'bg-green-100 text-green-700' : 'bg-green-800 text-green-300'}`}>
                        CA State
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm">{h.impact}</td>
                  <td className="px-4 py-3 text-sm">{h.isBank ? '✅ Yes' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`mt-3 p-3 rounded-lg ${cardBg}`}>
          <p className="text-xs">
            <span className={`inline-block px-1.5 py-0.5 rounded font-medium mr-2 ${isLight ? 'bg-green-100 text-green-700' : 'bg-green-800 text-green-300'}`}>CA State</span>
            indicates California state holidays not observed federally.
          </p>
        </div>
      </section>

      {/* Entertainment Industry Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🎬 Entertainment Industry Hours</h2>

        <div className={`p-5 rounded-xl border-2 border-purple-300 ${isLight ? 'bg-purple-50' : 'bg-purple-900/20'} mb-4`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Hollywood Studios & Production Companies</h3>
          <p className="text-sm mb-3">
            The entertainment industry follows its own rhythm. Major studios (Disney, Warner Bros., Universal, Sony, Paramount)
            generally observe federal holidays but rarely shut down completely — development, post-production, and streaming
            operations often continue year-round.
          </p>
          <ul className="text-sm space-y-2">
            <li>• <strong>Thanksgiving & Christmas:</strong> The closest thing to a true industry shutdown. Most studio lots and production offices close.</li>
            <li>• <strong>SAG-AFTRA / WGA agreements:</strong> Guild contracts may specify additional observed days for covered productions.</li>
            <li>• <strong>César Chávez Day:</strong> State offices close, but most studios and agencies remain open — it is not a federal holiday.</li>
            <li>• <strong>Pilot season (Jan–Apr):</strong> Production activity is highest; offices are rarely closed beyond federal holidays.</li>
          </ul>
        </div>

        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Studio Lots</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Talent Agencies</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">New Year's Day</td>
                <td className="px-4 py-3">Closed</td>
                <td className="px-4 py-3">Closed</td>
                <td className="px-4 py-3">Skeleton crews for streaming ops</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Presidents' Day</td>
                <td className="px-4 py-3">Usually open</td>
                <td className="px-4 py-3">Usually open</td>
                <td className="px-4 py-3">Active production season</td>
              </tr>
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className="px-4 py-3 font-medium">César Chávez Day (Mar 31)</td>
                <td className="px-4 py-3">Usually open</td>
                <td className="px-4 py-3">Usually open</td>
                <td className="px-4 py-3">State holiday only; most studios not closed</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Memorial Day</td>
                <td className="px-4 py-3">Closed</td>
                <td className="px-4 py-3">Closed</td>
                <td className="px-4 py-3">Summer movie season kicks off</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Independence Day</td>
                <td className="px-4 py-3">Closed</td>
                <td className="px-4 py-3">Closed</td>
                <td className="px-4 py-3">Peak summer box office</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Labor Day</td>
                <td className="px-4 py-3">Closed</td>
                <td className="px-4 py-3">Closed</td>
                <td className="px-4 py-3">Fall development season begins</td>
              </tr>
              <tr className={isLight ? 'bg-red-50' : 'bg-red-900/20'}>
                <td className="px-4 py-3 font-medium">Thanksgiving</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">One of the few near-total shutdowns</td>
              </tr>
              <tr className={isLight ? 'bg-red-50' : 'bg-red-900/20'}>
                <td className="px-4 py-3 font-medium">Christmas Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Major theatrical releases open; studio offices closed</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm">
            <strong>Oscars & LA Film Market:</strong> Late February and early March see elevated hotel rates and event
            activity around awards season. The Academy Awards (typically late February or early March) and the
            American Film Market (AFM, usually November) significantly affect hotel and venue availability citywide.
          </p>
        </div>
      </section>

      {/* What's Open/Closed */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔓 What's Open on Holidays in LA?</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 text-green-600`}>✅ Always / Usually Open</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>LAX Airport:</strong> Never closes — 24/7/365</li>
              <li>• <strong>Grocery Stores:</strong> Most open with holiday hours</li>
              <li>• <strong>Restaurants:</strong> Huge variety open on all holidays</li>
              <li>• <strong>Metro Rail & Bus:</strong> Runs on holiday (weekend) schedule</li>
              <li>• <strong>Entertainment venues:</strong> Theaters, theme parks, stadiums open</li>
              <li>• <strong>Beaches:</strong> Public beaches always accessible</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 text-red-600`}>❌ Usually Closed</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>CA State Offices:</strong> Closed on all state + federal holidays</li>
              <li>• <strong>Banks:</strong> Closed on federal bank holidays</li>
              <li>• <strong>USPS:</strong> No mail delivery on federal holidays</li>
              <li>• <strong>LA County offices:</strong> Follow California holiday schedule</li>
              <li>• <strong>Port of LA / Long Beach:</strong> Federal holiday schedule applies</li>
              <li>• <strong>Public Schools (LAUSD):</strong> Closed on all observed holidays</li>
            </ul>
          </div>
        </div>
      </section>

      {/* César Chávez Day highlight */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌾 César Chávez Day — California's Unique Holiday</h2>

        <div className={`p-5 rounded-xl border-2 border-green-300 ${isLight ? 'bg-green-50' : 'bg-green-900/20'}`}>
          <p className="text-sm mb-3">
            March 31 is a <strong>paid California state holiday</strong> commemorating labor leader César Chávez.
            California is one of only <strong>three US states</strong> (along with Colorado and Texas) that officially
            observe this day as a paid state holiday.
          </p>
          <ul className="text-sm space-y-1">
            <li>• <strong>State and county offices:</strong> Closed</li>
            <li>• <strong>CA public schools:</strong> Closed (including LAUSD)</li>
            <li>• <strong>Banks:</strong> Open — it is not a federal bank holiday</li>
            <li>• <strong>NYSE / NASDAQ:</strong> Open — not on the SEC holiday schedule</li>
            <li>• <strong>Private businesses:</strong> Choice of employer — most remain open</li>
            <li>• <strong>Entertainment studios:</strong> Generally open and operating normally</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>

        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is César Chávez Day a holiday in LA?</h3>
            <p className="text-sm">
              Yes — César Chávez Day (March 31) is a paid California state holiday. California state offices,
              LA County offices, and public schools (including LAUSD) are closed. However, it is not a federal
              holiday: banks, NYSE, and most private businesses including entertainment studios remain open.
            </p>
          </div>

          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are Hollywood studios open on Thanksgiving?</h3>
            <p className="text-sm">
              Thanksgiving is one of the few times Hollywood truly shuts down. Studio lots and agency offices close.
              However, movie theaters are open — Thanksgiving and Black Friday are among the biggest box office
              days of the year. LAX remains open and operates on a normal schedule.
            </p>
          </div>

          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does California have more holidays than other states?</h3>
            <p className="text-sm">
              California observes the same 11 federal holidays as every state, plus <strong>César Chávez Day</strong> as
              a paid state holiday — making it 12 official public holidays for state employees. California is one of only
              three states with César Chávez Day. Some California counties and cities may recognize additional local
              observances.
            </p>
          </div>

          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is LAX closed on holidays?</h3>
            <p className="text-sm">
              No — Los Angeles International Airport (LAX) never closes. It operates 24 hours a day, 365 days a year,
              including Christmas Day and Thanksgiving. In fact, the days before Thanksgiving and the Sunday after are
              among the busiest travel days of the year at LAX.
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>LA Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌴</span><span>Best Time to Visit Los Angeles</span>
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📈</span><span>NYSE Market Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete Los Angeles Guide</span>
          </Link>
        </div>
      </section>

      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: March 2026.</p>
    </div>
  )
}
