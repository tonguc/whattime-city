'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function IstanbulHolidaysContent({ city }: Props) {
  const { isLight } = useCityContext()

  const textColor    = isLight ? 'text-slate-700'   : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800'   : 'text-white'
  const mutedColor   = isLight ? 'text-slate-500'   : 'text-slate-400'
  const cardBg       = isLight ? 'bg-slate-50'      : 'bg-slate-700/50'
  const linkColor    = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder  = isLight ? 'border-slate-200' : 'border-slate-600'
  const warningBg    = isLight ? 'bg-amber-50'      : 'bg-amber-900/20'
  const warningBorder = isLight ? 'border-amber-200': 'border-amber-700'

  const officialHolidays2026 = [
    { date: 'January 1',   day: 'Thursday', name: "New Year's Day (Yılbaşı)",           impact: 'All offices, banks, and most shops closed' },
    { date: 'March 19–21', day: 'Thu–Sat',  name: 'Eid al-Fitr — Ramazan Bayramı ★',   impact: '3.5-day holiday. Most businesses closed. Shopping malls may open limited hours' },
    { date: 'April 23',    day: 'Thursday', name: 'National Sovereignty & Children\'s Day (23 Nisan)', impact: 'Public holiday. Government, banks closed' },
    { date: 'May 1',       day: 'Friday',   name: 'Labour & Solidarity Day (İşçi Bayramı)', impact: 'Public holiday. Banks, government closed' },
    { date: 'May 19',      day: 'Tuesday',  name: 'Atatürk Commemoration, Youth & Sports Day (19 Mayıs)', impact: 'Public holiday. Schools closed. Ceremonies across the country' },
    { date: 'May 26–29',   day: 'Tue–Fri',  name: 'Eid al-Adha — Kurban Bayramı ★',    impact: '4.5-day holiday. Near-total shutdown. Banks, offices, many shops closed' },
    { date: 'July 15',     day: 'Wednesday',name: 'Democracy & National Unity Day (15 Temmuz)', impact: 'Public holiday. Banks, government closed. Commemorations held' },
    { date: 'August 30',   day: 'Sunday',   name: 'Victory Day (Zafer Bayramı)',         impact: 'Public holiday. Military parades in major cities' },
    { date: 'October 29',  day: 'Thursday', name: 'Republic Day (Cumhuriyet Bayramı)',   impact: 'National holiday. Fireworks, parades. Banks & offices closed' },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Istanbul Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Turkish Public Holidays & Istanbul Closures 2026
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          What's open and closed — including Eid, Republic Day, and religious holidays
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Turkey has <strong>9 official public holidays</strong> in 2026, including two multi-day
          Islamic holidays (Eid al-Fitr and Eid al-Adha). During Eid, businesses in Istanbul nearly
          shut down for 3–4 days. Banks and government offices close on all official holidays.
        </p>
      </section>

      {/* Lunar Holiday Warning */}
      <div className={`mb-8 p-4 rounded-xl border text-sm ${warningBg} ${warningBorder}`}>
        <p>
          <strong>★ Islamic holidays follow the lunar Hijri calendar</strong> and shift
          ~11 days earlier each year. Exact dates are announced by Turkey's Diyanet İşleri Başkanlığı
          (Religious Affairs Directorate) based on moon sighting. The 2026 dates above are approximate.
        </p>
      </div>

      {/* Holiday Calendar */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 2026 Holiday Calendar</h2>

        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Date</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Day</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>What to Expect</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {officialHolidays2026.map(h => (
                <tr key={h.date} className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{h.date}</td>
                  <td className={`px-4 py-3 ${mutedColor}`}>{h.day}</td>
                  <td className="px-4 py-3">{h.name}</td>
                  <td className={`px-4 py-3 text-sm ${mutedColor}`}>{h.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ramadan Note */}
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>🌙 Ramadan — Not a Holiday, But It Matters</h2>
        <p className="mb-3 text-sm">
          Ramadan is not an official public holiday, but it significantly impacts business life in
          Istanbul. Expect:
        </p>
        <ul className="text-sm space-y-2">
          <li>• Reduced business hours in many traditional offices and bazaars</li>
          <li>• Restaurants closed until Iftar (sunset) in conservative areas</li>
          <li>• Slower pace, reduced productivity in the final week</li>
          <li>• Massive Iftar gatherings — traffic very heavy around sunset</li>
        </ul>
        <p className={`mt-3 text-xs ${mutedColor}`}>
          Ramadan 2026: approximately February 17 – March 18
        </p>
      </section>

      {/* What's Open/Closed */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔓 What's Open on Turkish Holidays?</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className="font-semibold mb-3 text-green-600">✅ Usually Open</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>Supermarkets & Migros:</strong> Often open reduced hours</li>
              <li>• <strong>Shopping Malls:</strong> Usually open on national holidays (may close on Eid)</li>
              <li>• <strong>Restaurants:</strong> Most open; special Eid menus in some</li>
              <li>• <strong>Tourist Attractions:</strong> Topkapı, Hagia Sophia, Blue Mosque — typically open</li>
              <li>• <strong>Pharmacies:</strong> Nöbetçi eczane (on-call system) ensures coverage</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className="font-semibold mb-3 text-red-500">❌ Closed</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>Banks & ATMs:</strong> Lobbies closed; ATMs operational</li>
              <li>• <strong>Government Offices:</strong> All closed on official holidays</li>
              <li>• <strong>Grand Bazaar:</strong> Closed on Sundays and Eid holidays</li>
              <li>• <strong>Notaries & Courts:</strong> Closed on all public holidays</li>
              <li>• <strong>Schools:</strong> Closed on national holidays</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <nav className={`text-sm ${mutedColor}`}>
        <p className="mb-2 font-medium">Explore more Istanbul guides:</p>
        <div className="flex flex-wrap gap-3">
          <Link href={`/${city.slug}/guide/call-times/`} className={linkColor}>Best Time to Call</Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={linkColor}>Business Hours</Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={linkColor}>Time Difference</Link>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>Full Guide</Link>
        </div>
      </nav>
    </div>
  )
}
