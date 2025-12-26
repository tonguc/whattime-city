'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LondonHolidaysContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const holidays2025 = [
    { date: 'January 1', day: 'Wednesday', name: "New Year's Day", impact: 'Banks, government closed. Many shops open (Sunday hours)', isBank: true },
    { date: 'April 18', day: 'Friday', name: 'Good Friday', impact: 'Banks, most shops closed. Restaurants usually open', isBank: true },
    { date: 'April 21', day: 'Monday', name: 'Easter Monday', impact: 'Banks closed. Shops open (Sunday hours)', isBank: true },
    { date: 'May 5', day: 'Monday', name: 'Early May Bank Holiday', impact: 'Banks closed. Shops open (Sunday hours)', isBank: true },
    { date: 'May 26', day: 'Monday', name: 'Spring Bank Holiday', impact: 'Banks closed. Shops open (Sunday hours)', isBank: true },
    { date: 'August 25', day: 'Monday', name: 'Summer Bank Holiday', impact: 'Banks closed. Shops open (Sunday hours)', isBank: true },
    { date: 'December 25', day: 'Thursday', name: 'Christmas Day', impact: 'Almost everything closed including transport', isBank: true },
    { date: 'December 26', day: 'Friday', name: 'Boxing Day', impact: 'Banks closed. Major sales begin. Some shops open', isBank: true },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          UK Bank Holidays & London Closures
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          What's open and closed on public holidays in London
        </p>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          The UK has <strong>8 bank holidays</strong> per year in England and Wales. Banks and government offices 
          close completely. Most shops treat bank holidays like Sundays (6-hour limit for large stores). 
          Transport runs on reduced schedules. Only Christmas Day sees near-total closure.
        </p>
      </section>
      
      {/* Holiday Calendar */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 Bank Holidays Calendar</h2>
        
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
              {holidays2025.map(h => (
                <tr key={h.date} className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                  <td className="px-4 py-3 font-medium">{h.date}</td>
                  <td className="px-4 py-3">{h.day}</td>
                  <td className="px-4 py-3">{h.name}</td>
                  <td className="px-4 py-3 text-sm">{h.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* What's Open/Closed */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔓 What's Open on Bank Holidays?</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 text-green-600`}>✅ Usually Open</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>Supermarkets:</strong> Sunday hours (typically 10 AM - 4 PM or 11 AM - 5 PM)</li>
              <li>• <strong>Restaurants & Pubs:</strong> Most open, some with special menus</li>
              <li>• <strong>Tourist Attractions:</strong> Major museums usually open</li>
              <li>• <strong>Public Transport:</strong> Sunday schedule on most services</li>
              <li>• <strong>Corner Shops:</strong> Normal or extended hours</li>
              <li>• <strong>Pharmacies:</strong> Rota system ensures some are open</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 text-red-600`}>❌ Usually Closed</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>Banks:</strong> All branches closed</li>
              <li>• <strong>Government Offices:</strong> Council, DVLA, etc.</li>
              <li>• <strong>GP Surgeries:</strong> Call 111 for out-of-hours</li>
              <li>• <strong>Post Offices:</strong> Most closed</li>
              <li>• <strong>Schools:</strong> All closed</li>
              <li>• <strong>Many Small Businesses:</strong> Independent shops vary</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Special Holidays */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🎄 Special Holiday Notes</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl border-2 border-red-300 ${isLight ? 'bg-red-50' : 'bg-red-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🎅 Christmas Day (December 25)</h3>
            <p className="text-sm">
              The <strong>only day</strong> when London truly shuts down. Almost all shops, restaurants, and pubs are closed. 
              No Tube service. Very limited bus service. Plan ahead if you're in London — stock up on food and entertainment.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🎁 Boxing Day (December 26)</h3>
            <p className="text-sm">
              The start of the famous <strong>Boxing Day Sales</strong>. Major department stores (Selfridges, Harrods, John Lewis) 
              open early with huge crowds. Smaller shops may stay closed. Transport runs on reduced schedules.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 border-purple-300 ${isLight ? 'bg-purple-50' : 'bg-purple-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🐣 Good Friday & Easter</h3>
            <p className="text-sm">
              Good Friday is more "closed" than Easter Monday — many shops don't open at all. 
              Easter Sunday: large shops legally can't open (except Scotland). Easter Monday: Sunday trading hours apply.
            </p>
          </div>
        </div>
      </section>
      
      {/* Transport */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚇 Transport on Bank Holidays</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Service</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Bank Holiday Schedule</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">London Underground</td>
                <td className="px-4 py-3">Sunday timetable</td>
                <td className="px-4 py-3">Less frequent, check TfL for engineering works</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Buses</td>
                <td className="px-4 py-3">Sunday timetable</td>
                <td className="px-4 py-3">Night buses run normally</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">National Rail</td>
                <td className="px-4 py-3">Reduced / Sunday service</td>
                <td className="px-4 py-3">Major engineering often scheduled</td>
              </tr>
              <tr className={isLight ? 'bg-red-50' : 'bg-red-900/20'}>
                <td className="px-4 py-3 font-medium">Christmas Day</td>
                <td className="px-4 py-3">No Tube, very limited buses</td>
                <td className="px-4 py-3">Taxis and Ubers at premium prices</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm">
            <strong>Pro tip:</strong> TfL often schedules maintenance on bank holidays. Always check the 
            <a href="https://tfl.gov.uk" target="_blank" className={`ml-1 ${linkColor}`}>TfL website</a> before travelling.
          </p>
        </div>
      </section>
      
      {/* Scotland Difference */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland Has Different Holidays</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm mb-3">
            Scotland observes different bank holidays. Key differences:
          </p>
          <ul className="text-sm space-y-1">
            <li>• <strong>January 2:</strong> Bank holiday in Scotland only</li>
            <li>• <strong>St Andrew's Day (Nov 30):</strong> Scottish bank holiday</li>
            <li>• <strong>Easter Monday:</strong> Not a bank holiday in Scotland</li>
            <li>• <strong>Summer Bank Holiday:</strong> First Monday of August (not last)</li>
            <li>• <strong>Sunday trading laws:</strong> Don't apply in Scotland</li>
          </ul>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Do I get paid extra for working bank holidays?</h3>
            <p className="text-sm">
              There's no legal right to extra pay for bank holidays — it depends on your contract. 
              Many employers offer time and a half or double pay, but it's not required by law.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are museums free on bank holidays?</h3>
            <p className="text-sm">
              The major national museums (British Museum, V&A, Natural History, etc.) are always free — 
              bank holidays included. They'll be busier than usual though.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>When is the next bank holiday?</h3>
            <p className="text-sm">
              Check the calendar above — the next bank holiday depends on when you're reading this. 
              After New Year's Day, there's usually a long gap until Good Friday in spring.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Guides */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>London Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🇬🇧</span><span>Best Time to Visit London</span>
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📈</span><span>LSE Market Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete London Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
