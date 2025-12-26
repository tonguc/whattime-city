'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiBusinessHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const dubaiTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = dubaiTime.getHours()
  const dayOfWeek = dubaiTime.getDay()
  const timeStr = dubaiTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  // Friday (5) and Saturday (6) are weekend in UAE
  const isWeekend = dayOfWeek === 5 || dayOfWeek === 6
  const isBankOpen = !isWeekend && currentHour >= 8 && currentHour < 15
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Dubai Business Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          When shops, banks, malls, and souks are open
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">Dubai ({timeStr}): Banks are <strong>{isBankOpen ? 'Open' : 'Closed'}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>Weekend: Friday-Saturday</strong> (not Saturday-Sunday!). Malls open late 
          <strong> 10 AM - 10 PM</strong> (until midnight Thu-Sat). Banks <strong>8 AM - 3 PM</strong> 
          Sun-Thu. Government offices <strong>7:30 AM - 2:30 PM</strong>. During Ramadan, 
          hours shift significantly.
        </p>
      </section>
      
      <section className={`mb-8 p-4 rounded-xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700'}`}>
        <h3 className={`font-semibold mb-2 ${headingColor}`}>⚠️ Important: Friday-Saturday Weekend</h3>
        <p className="text-sm">
          The UAE switched to a Friday-Saturday weekend in January 2022. Sunday is a regular 
          working day. Friday mornings are quieter due to Friday prayers (Jummah) around 12:30 PM.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏦 Banks & Financial Services</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Service</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Banks (Sun-Thu)</td>
                <td className="px-4 py-3">8:00 AM - 3:00 PM</td>
                <td className="px-4 py-3">Some branches open until 5 PM</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Banks (Sat)</td>
                <td className="px-4 py-3">Some open 9 AM - 1 PM</td>
                <td className="px-4 py-3">Mall branches more likely open</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">ATMs</td>
                <td className="px-4 py-3">24 hours</td>
                <td className="px-4 py-3">Widely available in malls, metro stations</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Currency Exchange</td>
                <td className="px-4 py-3">9:00 AM - 9:00 PM</td>
                <td className="px-4 py-3">Mall locations open later</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛍️ Malls & Retail</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Venue</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Sun-Wed</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Thu-Sat</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Dubai Mall</td>
                <td className="px-4 py-3">10 AM - 11 PM</td>
                <td className="px-4 py-3">10 AM - 12 AM</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Mall of the Emirates</td>
                <td className="px-4 py-3">10 AM - 10 PM</td>
                <td className="px-4 py-3">10 AM - 12 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Supermarkets (Carrefour, Spinneys)</td>
                <td className="px-4 py-3">8 AM - 12 AM</td>
                <td className="px-4 py-3">8 AM - 12 AM (some 24h)</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Gold Souk</td>
                <td className="px-4 py-3">10 AM - 10 PM</td>
                <td className="px-4 py-3">4 PM - 10 PM (Fri)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Pro Tip:</strong> Malls are essentially indoor cities in Dubai. They stay 
            open late and are busiest from 7-10 PM when families come out after the heat of the day.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🍽️ Restaurants & Dining</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Type</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Hotel Restaurants</td>
                <td className="px-4 py-3">6 AM - 12 AM</td>
                <td className="px-4 py-3">Often serve alcohol</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Mall Food Courts</td>
                <td className="px-4 py-3">10 AM - 11 PM</td>
                <td className="px-4 py-3">Later on weekends</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Street Cafes/Cafeterias</td>
                <td className="px-4 py-3">6 AM - 2 AM</td>
                <td className="px-4 py-3">Many 24-hour options</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Fine Dining</td>
                <td className="px-4 py-3">7 PM - 11 PM</td>
                <td className="px-4 py-3">Reservations recommended</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🕌 During Ramadan</h2>
        <div className={`p-6 rounded-xl border-2 border-purple-300 ${isLight ? 'bg-purple-50' : 'bg-purple-900/20'}`}>
          <p className="mb-4">
            Ramadan significantly changes daily life in Dubai. While non-Muslims can eat in private, 
            public dining is restricted during fasting hours.
          </p>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Working hours:</strong> Reduced to 6 hours for Muslims (typically 9 AM - 3 PM)</li>
            <li>• <strong>Restaurants:</strong> Closed or screened off until Iftar (sunset)</li>
            <li>• <strong>Malls:</strong> Open later (often until 2 AM during last 10 days)</li>
            <li>• <strong>Iftar time:</strong> Everything comes alive after sunset (~6-7 PM)</li>
            <li>• <strong>Music/entertainment:</strong> Reduced in public spaces</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏛️ Government & Services</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Service</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Government Offices</td>
                <td className="px-4 py-3">7:30 AM - 2:30 PM</td>
                <td className="px-4 py-3">Sun-Thu only</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Post Offices</td>
                <td className="px-4 py-3">8:00 AM - 8:00 PM</td>
                <td className="px-4 py-3">Some mall branches open late</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Dubai Metro</td>
                <td className="px-4 py-3">5 AM - 12 AM</td>
                <td className="px-4 py-3">Fri 10 AM - 1 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What days are businesses closed in Dubai?</h3>
            <p className="text-sm">
              Friday and Saturday are the weekend. Most malls/restaurants still open, but banks 
              and government offices are closed. Friday mornings are quieter due to prayers.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are shops open on Friday in Dubai?</h3>
            <p className="text-sm">
              Yes! Malls open around 10 AM (some later on Friday morning). Souks typically open 
              after Friday prayers, around 4 PM.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What time do malls close?</h3>
            <p className="text-sm">
              Major malls close at 10-11 PM on weekdays and midnight on Thu-Sat. During Ramadan 
              and sales festivals, they often stay open until 1-2 AM.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in Dubai</span>
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>UAE Holidays</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
