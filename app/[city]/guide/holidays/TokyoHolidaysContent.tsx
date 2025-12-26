'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoHolidaysContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const holidays2025 = [
    { date: 'Jan 1', name: "New Year's Day (元日)", impact: 'extreme', note: 'Jan 1-3 most businesses closed' },
    { date: 'Jan 13', name: 'Coming of Age Day (成人の日)', impact: 'moderate', note: 'Second Monday of Jan' },
    { date: 'Feb 11', name: 'National Foundation Day (建国記念の日)', impact: 'moderate', note: '' },
    { date: 'Feb 23', name: "Emperor's Birthday (天皇誕生日)", impact: 'moderate', note: 'Observed Feb 24 (Mon)' },
    { date: 'Mar 20', name: 'Vernal Equinox Day (春分の日)', impact: 'moderate', note: '' },
    { date: 'Apr 29', name: 'Showa Day (昭和の日)', impact: 'high', note: 'Start of Golden Week' },
    { date: 'May 3', name: 'Constitution Day (憲法記念日)', impact: 'extreme', note: 'Golden Week peak' },
    { date: 'May 4', name: 'Greenery Day (みどりの日)', impact: 'extreme', note: 'Golden Week' },
    { date: 'May 5', name: "Children's Day (こどもの日)", impact: 'extreme', note: 'Golden Week' },
    { date: 'May 6', name: 'Substitute Holiday', impact: 'extreme', note: 'Golden Week extended' },
    { date: 'Jul 21', name: 'Marine Day (海の日)', impact: 'moderate', note: 'Third Monday of Jul' },
    { date: 'Aug 11', name: 'Mountain Day (山の日)', impact: 'high', note: 'Near Obon season' },
    { date: 'Sep 15', name: 'Respect for the Aged Day (敬老の日)', impact: 'moderate', note: 'Third Monday of Sep' },
    { date: 'Sep 23', name: 'Autumnal Equinox Day (秋分の日)', impact: 'moderate', note: '' },
    { date: 'Oct 13', name: 'Sports Day (スポーツの日)', impact: 'moderate', note: 'Second Monday of Oct' },
    { date: 'Nov 3', name: 'Culture Day (文化の日)', impact: 'moderate', note: '' },
    { date: 'Nov 23', name: 'Labor Thanksgiving Day (勤労感謝の日)', impact: 'moderate', note: 'Observed Nov 24 (Mon)' },
    { date: 'Dec 31', name: "New Year's Eve (大晦日)", impact: 'high', note: 'Many close early' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Japanese Holidays & What's Closed
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Golden Week, Obon, New Year & more — when to visit and when to avoid
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>Avoid:</strong> Golden Week (Apr 29 - May 6), Obon (mid-August), New Year (Dec 31 - Jan 3). 
          Prices spike 2-3x, everything is booked solid. <strong>Good news:</strong> Most tourist attractions 
          stay open during holidays — it's transport and accommodation that's the challenge.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 2025 Public Holidays</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Date</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Impact</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {holidays2025.map((h, i) => (
                <tr key={h.date} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{h.date}</td>
                  <td className="px-4 py-3">{h.name}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      h.impact === 'extreme' ? 'bg-red-100 text-red-700' :
                      h.impact === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {h.impact === 'extreme' ? 'Extreme' : h.impact === 'high' ? 'High' : 'Moderate'}
                    </span>
                  </td>
                  <td className={`px-4 py-3 ${mutedColor}`}>{h.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🎌 The Big Three Holiday Periods</h2>
        
        <div className="space-y-6">
          <div className={`p-6 rounded-xl border-2 border-red-300 ${isLight ? 'bg-red-50' : 'bg-red-900/20'}`}>
            <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>🌸 Golden Week (Apr 29 - May 6)</h3>
            <p className="mb-4">
              Japan's longest holiday period combines four national holidays. The entire country 
              travels simultaneously. This is the <strong>worst time to visit Japan</strong> as a tourist.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Transport:</strong> Shinkansen and flights fully booked weeks ahead</li>
              <li>• <strong>Hotels:</strong> Prices 2-3x normal, often sold out</li>
              <li>• <strong>Attractions:</strong> Open but expect 2+ hour queues everywhere</li>
              <li>• <strong>Restaurants:</strong> Long waits, many fully booked</li>
              <li>• <strong>Banks/Post:</strong> Closed May 3-5 (or longer)</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl border-2 border-orange-300 ${isLight ? 'bg-orange-50' : 'bg-orange-900/20'}`}>
            <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>🏮 Obon (Aug 13-16)</h3>
            <p className="mb-4">
              Buddhist festival honoring ancestors. Many Japanese return to hometowns. Not an 
              official public holiday, but many companies close for the week.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>When:</strong> Typically Aug 13-16, some areas July</li>
              <li>• <strong>Transport:</strong> Highways jammed, trains packed</li>
              <li>• <strong>Tokyo:</strong> Actually quieter as locals leave the city</li>
              <li>• <strong>Rural areas:</strong> Beautiful festivals but very crowded</li>
              <li>• <strong>Many businesses:</strong> Closed Aug 13-16</li>
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl border-2 border-purple-300 ${isLight ? 'bg-purple-50' : 'bg-purple-900/20'}`}>
            <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>🎍 New Year (Dec 31 - Jan 3)</h3>
            <p className="mb-4">
              Japan's most important holiday. The country essentially shuts down. Most businesses 
              close Dec 31 - Jan 3, many through Jan 4-5.
            </p>
            <ul className="space-y-2 text-sm">
              <li>• <strong>Dec 31:</strong> Most shops close by afternoon, trains run but limited</li>
              <li>• <strong>Jan 1-3:</strong> Banks, post offices, most shops closed</li>
              <li>• <strong>Temples/Shrines:</strong> PACKED for hatsumode (first shrine visit)</li>
              <li>• <strong>Konbini:</strong> Open but may have limited stock</li>
              <li>• <strong>Restaurants:</strong> Many closed, hotel dining your best bet</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 What's Open During Holidays?</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Business Type</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Regular Holidays</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Golden Week</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>New Year</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Konbini (7-Eleven, etc.)</td>
                <td className="px-4 py-3 text-green-600">✓ Open 24/7</td>
                <td className="px-4 py-3 text-green-600">✓ Open 24/7</td>
                <td className="px-4 py-3 text-green-600">✓ Open 24/7</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Tourist Attractions</td>
                <td className="px-4 py-3 text-green-600">✓ Usually open</td>
                <td className="px-4 py-3 text-green-600">✓ Open (crowded)</td>
                <td className="px-4 py-3 text-yellow-600">⚠ Many closed Jan 1</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Department Stores</td>
                <td className="px-4 py-3 text-green-600">✓ Open</td>
                <td className="px-4 py-3 text-green-600">✓ Open</td>
                <td className="px-4 py-3 text-red-600">✗ Closed Jan 1-2</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Banks</td>
                <td className="px-4 py-3 text-red-600">✗ Closed</td>
                <td className="px-4 py-3 text-red-600">✗ Closed</td>
                <td className="px-4 py-3 text-red-600">✗ Closed Dec 31 - Jan 3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Post Offices</td>
                <td className="px-4 py-3 text-red-600">✗ Closed</td>
                <td className="px-4 py-3 text-red-600">✗ Closed (major open)</td>
                <td className="px-4 py-3 text-red-600">✗ Closed</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Restaurants</td>
                <td className="px-4 py-3 text-green-600">✓ Mostly open</td>
                <td className="px-4 py-3 text-green-600">✓ Open (busy)</td>
                <td className="px-4 py-3 text-yellow-600">⚠ Many closed</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Public Transport</td>
                <td className="px-4 py-3 text-green-600">✓ Holiday schedule</td>
                <td className="px-4 py-3 text-green-600">✓ Runs (packed)</td>
                <td className="px-4 py-3 text-yellow-600">⚠ Reduced Dec 31</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💡 Planning Tips</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🎌 If You Must Visit During Golden Week</h3>
            <p className="text-sm">
              Book everything 3+ months ahead. Consider less popular destinations (rural areas, 
              smaller cities). Start early each day to beat crowds. Accept that prices will be high 
              and queues long.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🎍 Experiencing Japanese New Year</h3>
            <p className="text-sm">
              If visiting during New Year, embrace the cultural experience. Book hotel dinners 
              (osechi). Visit a shrine for hatsumode (arrive before midnight or early morning). 
              Stock up on food from konbini Dec 30-31.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>💰 Best Value Periods</h3>
            <p className="text-sm">
              Avoid Big Three periods plus: cherry blossom season (late March-early April), 
              autumn leaves (November). Best deals: January (after 7th), February, June (rainy 
              but cheap), September-early November.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are ATMs available during holidays?</h3>
            <p className="text-sm">
              Yes! Konbini ATMs (7-Eleven, Lawson) work 24/7, 365 days. Bank ATMs may have reduced 
              hours or higher fees during holidays. Always keep some cash as backup.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Will trains run during New Year?</h3>
            <p className="text-sm">
              Yes, but with reduced schedules on Dec 31 - Jan 1. Many lines run all night on 
              New Year's Eve for shrine visits. Check your specific line's holiday schedule.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is Obon a good time to visit Tokyo?</h3>
            <p className="text-sm">
              Surprisingly, yes! Many Tokyoites leave the city, so it's actually less crowded than 
              usual. Just be aware that some restaurants/shops may be closed, and it's hot and humid.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌸</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📈</span><span>TSE Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete Tokyo Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
