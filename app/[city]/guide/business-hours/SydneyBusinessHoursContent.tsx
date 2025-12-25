'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyBusinessHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const sydneyTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = sydneyTime.getHours()
  const currentDay = sydneyTime.getDay() // 0 = Sunday
  const timeStr = sydneyTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  // Determine if banks are likely open right now
  const isBankOpen = currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 16
  const isWeekend = currentDay === 0 || currentDay === 6
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Sydney Business Hours Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Banks, offices, stores, and government hours in Sydney — updated for 2025
        </p>
        
        {/* Live Status */}
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">
            It's {timeStr} in Sydney — Banks are {isBankOpen ? 'open' : 'closed'}
          </span>
        </div>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Most businesses in Sydney operate <strong>Monday through Friday, 9 AM to 5 PM</strong> (AEST/AEDT). 
          Banks typically close at 4 PM, retail stores in the CBD stay open later (often until 6-9 PM), and 
          Saturday trading is common with reduced hours. Sunday hours vary by location.
        </p>
      </section>
      
      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          Sydney has a more relaxed business culture than New York or London, but that doesn't mean you can 
          rock up to the bank at 5 PM on a Friday. Understanding Sydney's business hours — especially if 
          you're coordinating from overseas — can save you a lot of frustration.
        </p>
        <p>
          Australian business culture values work-life balance, which means many offices empty out by 
          5:30 PM, and you'll rarely find people working late into the evening. The upside? Friday afternoon 
          drinks are practically a national institution.
        </p>
        <p>
          Hours can vary significantly between the CBD (Central Business District), beach suburbs like Bondi, 
          and western suburbs. Tourist areas and shopping centers often have extended hours.
        </p>
      </section>
      
      {/* Bank Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏦 Bank Hours in Sydney
        </h2>
        
        <p className="mb-4">
          Australian banks (Commonwealth, Westpac, ANZ, NAB) generally follow similar schedules. 
          Note that Australian banks close earlier than their US or European counterparts.
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Day</th>
                <th className="text-left p-3 font-medium">Hours</th>
                <th className="text-left p-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">Monday - Thursday</td>
                <td className="p-3 font-medium">9:30 AM - 4:00 PM</td>
                <td className="p-3">Standard banking hours</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Friday</td>
                <td className="p-3 font-medium">9:30 AM - 5:00 PM</td>
                <td className="p-3">Extended by 1 hour</td>
              </tr>
              <tr>
                <td className="p-3">Saturday</td>
                <td className="p-3 font-medium">Closed (mostly)</td>
                <td className="p-3">Some CBD branches open 9 AM - 12 PM</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Sunday</td>
                <td className="p-3 font-medium">Closed</td>
                <td className="p-3">No weekend banking</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Pro tip:</strong> ATMs are everywhere and work 24/7. Most banking can be done online 
            in Australia — physical branches are increasingly rare. If you need face-to-face service, book 
            an appointment online beforehand.
          </p>
        </div>
      </section>
      
      {/* Office Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏢 Office & Corporate Hours
        </h2>
        
        <p className="mb-4">
          Sydney's corporate culture typically follows these patterns:
        </p>
        
        <div className={`grid md:grid-cols-2 gap-4 mb-6`}>
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Standard Office Hours</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Start:</strong> 8:30 AM - 9:00 AM</li>
              <li>• <strong>Lunch:</strong> 12:00 PM - 1:00 PM</li>
              <li>• <strong>Finish:</strong> 5:00 PM - 5:30 PM</li>
              <li>• <strong>Friday finish:</strong> Often by 4:30 PM</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Cultural Notes</h3>
            <ul className="space-y-1 text-sm">
              <li>• Coffee runs at 10 AM are sacred</li>
              <li>• Lunch breaks are actual breaks</li>
              <li>• Friday drinks start at 4 PM</li>
              <li>• Work-life balance is respected</li>
            </ul>
          </div>
        </div>
        
        <p className="text-sm">
          <strong>For international calls:</strong> The best time to reach Sydney offices is 10 AM - 4 PM 
          (AEST/AEDT), Monday to Friday. Avoid Friday afternoons — half the office will be at the pub.
        </p>
      </section>
      
      {/* Retail Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🛍️ Retail Store Hours
        </h2>
        
        <p className="mb-4">
          Shopping hours in Sydney have become much more flexible in recent years:
        </p>
        
        <div className={`space-y-4`}>
          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>CBD & Major Shopping Centers</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Monday - Wednesday:</strong> 9:00 AM - 6:00 PM</li>
              <li>• <strong>Thursday (late night):</strong> 9:00 AM - 9:00 PM</li>
              <li>• <strong>Friday:</strong> 9:00 AM - 9:00 PM</li>
              <li>• <strong>Saturday:</strong> 9:00 AM - 6:00 PM</li>
              <li>• <strong>Sunday:</strong> 10:00 AM - 5:00 PM</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg border ${tableBorder}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Bondi, Manly & Beach Suburbs</h3>
            <ul className="space-y-1 text-sm">
              <li>• More relaxed hours, often 10 AM start</li>
              <li>• Open 7 days a week (most)</li>
              <li>• Later hours in summer (until 8-9 PM)</li>
              <li>• Cafes open earlier (6-7 AM)</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Government Services */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏛️ Government Services
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Service</th>
                <th className="text-left p-3 font-medium">Hours</th>
                <th className="text-left p-3 font-medium">Booking Required?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">Service NSW</td>
                <td className="p-3">Mon-Fri 8:30 AM - 5:00 PM</td>
                <td className="p-3">Recommended</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Post Office</td>
                <td className="p-3">Mon-Fri 9:00 AM - 5:00 PM</td>
                <td className="p-3">No</td>
              </tr>
              <tr>
                <td className="p-3">Medicare Office</td>
                <td className="p-3">Mon-Fri 8:30 AM - 4:30 PM</td>
                <td className="p-3">Yes (online)</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Libraries</td>
                <td className="p-3">Mon-Fri 9:00 AM - 8:00 PM</td>
                <td className="p-3">No</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>Important:</strong> Most government services now require online booking. Walk-ins 
            can face 1-2 hour waits. Book via Service NSW app or website.
          </p>
        </div>
      </section>
      
      {/* Public Holidays Impact */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📅 Public Holiday Impact
        </h2>
        
        <p className="mb-4">
          Sydney has 11-13 public holidays per year (including NSW-specific ones). On public holidays:
        </p>
        
        <ul className="space-y-2 mb-4">
          <li>• <strong>Banks:</strong> Closed completely</li>
          <li>• <strong>Offices:</strong> Closed completely</li>
          <li>• <strong>Retail (CBD):</strong> Many closed or reduced hours</li>
          <li>• <strong>Tourist areas:</strong> Usually open (Circular Quay, Darling Harbour)</li>
          <li>• <strong>Restaurants & cafes:</strong> Open with surcharge (10-15%)</li>
        </ul>
        
        <div className={`p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            See our{' '}
            <Link href={`/${city.slug}/guide/holidays/`} className={linkColor}>
              Public Holidays 2025
            </Link>{' '}
            guide for full calendar and what's open.
          </p>
        </div>
      </section>
      
      {/* Best Times for Different Activities */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ⏰ Best Times for Different Activities
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Banking & Official Business</h3>
            <p className="text-sm">
              Tuesday-Thursday, 10 AM - 3 PM. Avoid Mondays (busy) and Fridays (reduced staff).
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Shopping in CBD</h3>
            <p className="text-sm">
              Thursday/Friday evenings (late night shopping) or weekends. Weekday mornings are quietest.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Meeting Someone for Business</h3>
            <p className="text-sm">
              10 AM coffee meeting or 12:30 PM lunch. Avoid 8-9 AM (commute chaos) and post-4 PM Fridays.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Government Services</h3>
            <p className="text-sm">
              Book first appointment (8:30 AM) or mid-morning (10-11 AM) Tuesday/Wednesday.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Resources */}
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
              <span className={`font-medium ${headingColor}`}>Best Time to Call Sydney</span>
              <p className={`text-xs ${mutedColor}`}>International calling windows</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/holidays/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📅</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Public Holidays 2025</span>
              <p className={`text-xs ${mutedColor}`}>Full holiday calendar</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
