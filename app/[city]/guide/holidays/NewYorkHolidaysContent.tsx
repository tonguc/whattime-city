'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function NewYorkHolidaysContent({ city }: Props) {
  const { isLight, time } = useCityContext()

  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'

  const holidays2026 = [
    { date: 'January 1', day: 'Thursday', name: "New Year's Day", impact: 'Banks, government, NYSE closed. Most shops open.', isBank: true },
    { date: 'January 19', day: 'Monday', name: 'Martin Luther King Jr. Day', impact: 'Federal holiday. NYSE closed. Many businesses open.', isBank: true },
    { date: 'February 16', day: 'Monday', name: "Presidents' Day (Washington's Birthday)", impact: 'Federal holiday. NYSE closed. Many businesses open.', isBank: true },
    { date: 'May 25', day: 'Monday', name: 'Memorial Day', impact: 'Federal holiday. NYSE closed. Summer begins culturally.', isBank: true },
    { date: 'June 19', day: 'Friday', name: 'Juneteenth National Independence Day', impact: 'Federal holiday. NYSE closed. New since 2021.', isBank: true },
    { date: 'July 4', day: 'Saturday', name: 'Independence Day (observed Jul 3)', impact: 'Fireworks, parades. NYSE closed Friday Jul 3.', isBank: true },
    { date: 'September 7', day: 'Monday', name: 'Labor Day', impact: 'Federal holiday. NYSE closed. End of summer.', isBank: true },
    { date: 'October 12', day: 'Monday', name: 'Columbus Day / Indigenous Peoples Day', impact: 'Federal, not universally observed. NYSE open. Banks may close.', isBank: false },
    { date: 'November 11', day: 'Wednesday', name: 'Veterans Day', impact: 'Federal holiday. NYSE open. Banks may close.', isBank: false },
    { date: 'November 26', day: 'Thursday', name: 'Thanksgiving Day', impact: 'Major US holiday. NYSE closed. Almost everything shuts down.', isBank: true },
    { date: 'November 27', day: 'Friday', name: 'Black Friday', impact: 'Not a holiday. NYSE closes early (1 PM EST). Biggest shopping day.', isBank: false },
    { date: 'December 25', day: 'Friday', name: 'Christmas Day', impact: 'NYSE closed. Most everything closed.', isBank: true },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to New York Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          New York Public Holidays & NYC Business Closures 2026
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          What's open and closed on federal holidays in New York City
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          The US has <strong>11 federal holidays</strong> per year. NYSE follows these closures. NYC government,
          banks, and federal offices close. Most private businesses remain open except Christmas and Thanksgiving.
        </p>
      </section>

      {/* Holiday Calendar */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 US Federal Holidays & NYC Closures 2026</h2>

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
                <tr key={h.date} className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                  <td className="px-4 py-3 font-medium">{h.date}</td>
                  <td className="px-4 py-3">{h.day}</td>
                  <td className="px-4 py-3">{h.name}</td>
                  <td className="px-4 py-3 text-sm">{h.impact}</td>
                  <td className="px-4 py-3 text-sm">{h.isBank ? '✅ Yes' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* NYSE Trading Schedule */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📈 NYSE & NASDAQ Trading Schedule</h2>

        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>NYSE / NASDAQ</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">New Year's Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Full closure</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">MLK Jr. Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Full closure</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Presidents' Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Full closure</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Good Friday</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Not a federal holiday but NYSE closes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Memorial Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Full closure</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Juneteenth</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Added to SEC schedule from 2022</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Independence Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Jul 3 (Fri) when Jul 4 falls on Saturday</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Labor Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Full closure</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Thanksgiving Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Full closure</td>
              </tr>
              <tr className={isLight ? 'bg-amber-50' : 'bg-amber-900/20'}>
                <td className="px-4 py-3 font-medium">Black Friday</td>
                <td className="px-4 py-3 text-amber-600 font-medium">Early Close</td>
                <td className="px-4 py-3">Closes at 1:00 PM EST (not a holiday)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Christmas Day</td>
                <td className="px-4 py-3 text-red-500 font-medium">Closed</td>
                <td className="px-4 py-3">Full closure</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm">
            <strong>Note:</strong> NYSE and NASDAQ follow the SEC holiday schedule — 11 full closures per year plus
            one early close on Black Friday. Columbus Day and Veterans Day are federal holidays but markets remain open.
          </p>
        </div>
      </section>

      {/* What's Open/Closed */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔓 What's Open on Federal Holidays in NYC?</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 text-green-600`}>✅ Usually Open</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>Grocery Stores:</strong> Most open, hours may vary</li>
              <li>• <strong>Restaurants & Bars:</strong> Majority open, some with holiday menus</li>
              <li>• <strong>Subway (MTA):</strong> Runs 24/7, weekend schedule on holidays</li>
              <li>• <strong>Tourist Attractions:</strong> Times Square, Central Park always accessible</li>
              <li>• <strong>Museums:</strong> Check individually — many open on federal holidays</li>
              <li>• <strong>Pharmacies:</strong> Major chains (CVS, Walgreens) usually open</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 text-red-600`}>❌ Usually Closed</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>Banks:</strong> All branches closed on bank holidays</li>
              <li>• <strong>Government Offices:</strong> Federal, state, and city agencies</li>
              <li>• <strong>Post Offices (USPS):</strong> No mail delivery on federal holidays</li>
              <li>• <strong>Schools:</strong> NYC public schools closed</li>
              <li>• <strong>NYSE / NASDAQ:</strong> Markets closed (per SEC schedule)</li>
              <li>• <strong>Courts:</strong> Federal and state courts closed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Special Holiday Notes */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🎉 Special NYC Holiday Notes</h2>

        <div className="space-y-4">
          <div className={`p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🎆 New Year's Eve — Times Square Ball Drop</h3>
            <p className="text-sm">
              Times Square hosts the world's most-watched New Year's celebration, drawing over <strong>1 million people</strong>.
              Streets around Times Square close hours before midnight. Expect major subway crowding.
              New Year's Day (Jan 1) is a federal holiday — banks and NYSE closed.
            </p>
          </div>

          <div className={`p-4 rounded-xl border-2 border-orange-300 ${isLight ? 'bg-orange-50' : 'bg-orange-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🦃 Thanksgiving in NYC</h3>
            <p className="text-sm">
              The <strong>Macy's Thanksgiving Day Parade</strong> is an NYC institution, running from 77th Street
              down Central Park West to Macy's Herald Square. Most of the city shuts down Thanksgiving Day.
              Black Friday brings massive retail crowds — and an early NYSE close at 1 PM EST.
            </p>
          </div>

          <div className={`p-4 rounded-xl border-2 border-blue-300 ${isLight ? 'bg-blue-50' : 'bg-blue-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🗽 Independence Day</h3>
            <p className="text-sm">
              July 4 falls on a Saturday in 2026 — NYSE observes the holiday on <strong>Friday, July 3</strong>.
              The <strong>Macy's 4th of July Fireworks</strong> are among the largest in the country, typically
              launched from the East River. Expect heavy crowds and street closures in Midtown and along the waterfront.
            </p>
          </div>

          <div className={`p-4 rounded-xl border-2 border-purple-300 ${isLight ? 'bg-purple-50' : 'bg-purple-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🗳️ NYC Primary Election Days</h3>
            <p className="text-sm">
              NYC primary election days can affect business hours and polling-place access in certain neighborhoods.
              City employees may be assigned as poll workers. Check the NYC Board of Elections for specific dates in 2026.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>

        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is the NYSE open on federal holidays?</h3>
            <p className="text-sm">
              No — the NYSE and NASDAQ follow the SEC holiday schedule and close on 11 federal holidays per year.
              Columbus Day and Veterans Day are exceptions: they are federal holidays but markets remain open.
              Good Friday is the reverse — not a federal holiday, but NYSE closes.
            </p>
          </div>

          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's closed on Thanksgiving in NYC?</h3>
            <p className="text-sm">
              Nearly everything. NYSE is closed, banks are closed, government offices are closed, and most restaurants
              close or offer limited service. Grocery stores may have reduced hours. The Macy's Thanksgiving Day Parade
              runs in the morning, but plan your day around very limited options for food and services.
            </p>
          </div>

          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does NYC have additional holidays beyond federal ones?</h3>
            <p className="text-sm">
              NYC observes all 11 federal holidays. City employees receive those days off, plus occasional additional
              days designated by the Mayor. There is no city-specific holiday unique to New York. However, election
              days (Primary, General) are treated as schedule-affecting events for city workers.
            </p>
          </div>

          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does the NYC subway run on holidays?</h3>
            <p className="text-sm">
              Yes — the NYC subway runs 24/7, 365 days a year including all federal holidays and Christmas Day.
              Service typically runs on a weekend (Saturday or Sunday) schedule on holidays, meaning less frequent
              trains. Always check the <a href="https://mta.info" target="_blank" className={`ml-1 ${linkColor}`}>MTA website</a> for service advisories.
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>NYC Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🗽</span><span>Best Time to Visit New York</span>
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📈</span><span>NYSE Market Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete New York Guide</span>
          </Link>
        </div>
      </section>

      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: March 2026.</p>
    </div>
  )
}
