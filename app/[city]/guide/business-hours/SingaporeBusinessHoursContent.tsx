'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeBusinessHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const sgTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = sgTime.getHours()
  const dayOfWeek = sgTime.getDay()
  const timeStr = sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  const isBankOpen = !isWeekend && currentHour >= 9 && currentHour < 17
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Singapore Business Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          When shops, banks, malls, and hawker centers are open in the Lion City
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">Singapore ({timeStr}): Banks are <strong>{isBankOpen ? 'Open' : 'Closed'}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>Standard workweek: Monday-Friday</strong>. Malls open <strong>10 AM - 10 PM</strong> daily. 
          Banks <strong>9:30 AM - 4:30 PM</strong> Mon-Fri (some Sat mornings). 
          Hawker centers <strong>6 AM - midnight</strong> (many 24 hours). 
          Most places stay open on public holidays.
        </p>
      </section>
      
      <section className={`mb-8 p-4 rounded-xl ${isLight ? 'bg-red-50 border border-red-200' : 'bg-red-900/20 border border-red-700'}`}>
        <h3 className={`font-semibold mb-2 ${headingColor}`}>🌟 Singapore's 24/7 Culture</h3>
        <p className="text-sm">
          Singapore is one of the world's most convenient cities. 7-Eleven and Cheers are everywhere 
          and open 24 hours. Many hawker centers never close. Need something at 3 AM? You'll find it.
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
                <td className="px-4 py-3 font-medium">Banks (Mon-Fri)</td>
                <td className="px-4 py-3">9:30 AM - 4:30 PM</td>
                <td className="px-4 py-3">Some branches 9 AM - 6 PM</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Banks (Sat)</td>
                <td className="px-4 py-3">9:30 AM - 1:00 PM</td>
                <td className="px-4 py-3">Select branches only</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">ATMs</td>
                <td className="px-4 py-3">24 hours</td>
                <td className="px-4 py-3">Everywhere - MRT stations, malls, 7-Eleven</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Money Changers</td>
                <td className="px-4 py-3">10 AM - 9 PM</td>
                <td className="px-4 py-3">Best rates at Mustafa Centre (24h!)</td>
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
                <th className={`px-4 py-3 text-left ${headingColor}`}>Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Orchard Road Malls</td>
                <td className="px-4 py-3">10 AM - 10 PM</td>
                <td className="px-4 py-3">ION, Takashimaya, Paragon</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">VivoCity</td>
                <td className="px-4 py-3">10 AM - 10 PM</td>
                <td className="px-4 py-3">Some F&B until 11 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Mustafa Centre</td>
                <td className="px-4 py-3">24 hours</td>
                <td className="px-4 py-3">Little India's famous 24h mall</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">NTUC FairPrice (supermarket)</td>
                <td className="px-4 py-3">7 AM - 11 PM</td>
                <td className="px-4 py-3">Some locations 24 hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">7-Eleven / Cheers</td>
                <td className="px-4 py-3">24 hours</td>
                <td className="px-4 py-3">Ubiquitous throughout Singapore</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Pro Tip:</strong> GSS (Great Singapore Sale) runs June-August with 
            extended mall hours. Christmas shopping season (Nov-Dec) also sees later closings.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🍜 Hawker Centers & Food</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Venue</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Maxwell Food Centre</td>
                <td className="px-4 py-3">8 AM - 8 PM</td>
                <td className="px-4 py-3">Famous for Tian Tian chicken rice</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Lau Pa Sat</td>
                <td className="px-4 py-3">24 hours</td>
                <td className="px-4 py-3">CBD location, satay street at night</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Old Airport Road</td>
                <td className="px-4 py-3">6 AM - 11 PM</td>
                <td className="px-4 py-3">Locals' favorite, huge selection</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Newton Food Centre</td>
                <td className="px-4 py-3">12 PM - 2 AM</td>
                <td className="px-4 py-3">Seafood focused, tourist-friendly</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Chomp Chomp</td>
                <td className="px-4 py-3">5 PM - 12 AM</td>
                <td className="px-4 py-3">Evening/supper spot, BBQ seafood</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700'}`}>
          <p className="text-sm">
            <strong>☕ Kopi Culture:</strong> Traditional coffee shops (kopitiams) open as early as 
            6 AM for breakfast. Order "kopi" for coffee with condensed milk, "kopi-o" for black 
            with sugar, "kopi-c" with evaporated milk.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🍻 Nightlife & Entertainment</h2>
        
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
                <td className="px-4 py-3 font-medium">Clarke Quay Bars</td>
                <td className="px-4 py-3">5 PM - 3 AM</td>
                <td className="px-4 py-3">Later on weekends</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Boat Quay</td>
                <td className="px-4 py-3">5 PM - 1 AM</td>
                <td className="px-4 py-3">After-work drinks spot</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Nightclubs (Zouk, etc)</td>
                <td className="px-4 py-3">10 PM - 4 AM</td>
                <td className="px-4 py-3">Wed, Fri, Sat busiest</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Cinemas</td>
                <td className="px-4 py-3">10 AM - 2 AM</td>
                <td className="px-4 py-3">Late shows available</td>
              </tr>
            </tbody>
          </table>
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
                <td className="px-4 py-3">8:30 AM - 5:30 PM</td>
                <td className="px-4 py-3">Mon-Fri only</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Post Offices</td>
                <td className="px-4 py-3">8:30 AM - 5:00 PM</td>
                <td className="px-4 py-3">Some Sat mornings</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">MRT (Train)</td>
                <td className="px-4 py-3">5:30 AM - 12:30 AM</td>
                <td className="px-4 py-3">Extended for major events</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Buses</td>
                <td className="px-4 py-3">5:30 AM - 12:00 AM</td>
                <td className="px-4 py-3">Night buses on weekends</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are shops open on Sundays in Singapore?</h3>
            <p className="text-sm">
              Yes! Malls, shops, and most businesses are open 7 days a week. Sunday hours are 
              usually the same as weekdays (10 AM - 10 PM for malls).
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What time do hawker centers close?</h3>
            <p className="text-sm">
              It varies widely. Some close by 8 PM, others are 24 hours. Individual stalls have 
              their own hours and rest days (often Monday or Tuesday).
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is anything 24 hours in Singapore?</h3>
            <p className="text-sm">
              Plenty! 7-Eleven, Mustafa Centre, Lau Pa Sat, many prata shops, 
              some McDonald's, and various supper spots throughout the city.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in Singapore</span>
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>Singapore Public Holidays</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
