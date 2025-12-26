'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoBusinessHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const tokyoTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = tokyoTime.getHours()
  const dayOfWeek = tokyoTime.getDay()
  const timeStr = tokyoTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
  const isBankOpen = !isWeekend && currentHour >= 9 && currentHour < 15
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Tokyo Business Hours
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          When shops, banks, restaurants, and konbini are open
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">Tokyo ({timeStr}): Banks are <strong>{isBankOpen ? 'Open' : 'Closed'}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Most Tokyo shops open <strong>10 AM - 8 PM</strong>. Banks are <strong>9 AM - 3 PM weekdays only</strong>. 
          Restaurants typically <strong>11:30 AM - 2 PM, 5:30 PM - 10 PM</strong>. 
          <strong>Konbini (convenience stores) are 24/7</strong> — your lifeline for everything from ATMs to onigiri at 3 AM.
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
                <td className="px-4 py-3 font-medium">Major Banks (MUFG, SMBC, Mizuho)</td>
                <td className="px-4 py-3">9:00 AM - 3:00 PM</td>
                <td className="px-4 py-3">Weekdays only. Closed weekends & holidays</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Japan Post Bank</td>
                <td className="px-4 py-3">9:00 AM - 4:00 PM</td>
                <td className="px-4 py-3">Some open Saturdays until noon</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Bank ATMs (in-branch)</td>
                <td className="px-4 py-3">8:00 AM - 9:00 PM</td>
                <td className="px-4 py-3">May charge fees outside business hours</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Konbini ATMs (7-Eleven, Lawson)</td>
                <td className="px-4 py-3">24 hours</td>
                <td className="px-4 py-3">Best for foreign cards. 7-Eleven most reliable</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Currency Exchange</td>
                <td className="px-4 py-3">10:00 AM - 7:00 PM</td>
                <td className="px-4 py-3">Airport exchanges open longer</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700'}`}>
          <p className="text-sm">
            <strong>💡 Pro Tip:</strong> Japanese bank hours are notoriously short. For ATM access, 
            head to any 7-Eleven — their ATMs accept most international cards 24/7 with English menus.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏪 Retail & Shopping</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Store Type</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Typical Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Konbini (7-Eleven, Lawson, FamilyMart)</td>
                <td className="px-4 py-3">24 hours</td>
                <td className="px-4 py-3">365 days. ATMs, food, tickets, everything</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Department Stores (Isetan, Mitsukoshi)</td>
                <td className="px-4 py-3">10:00 AM - 8:00 PM</td>
                <td className="px-4 py-3">Depachika (basement food) opens at 10 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Electronics (Yodobashi, Bic Camera)</td>
                <td className="px-4 py-3">10:00 AM - 10:00 PM</td>
                <td className="px-4 py-3">Some Akihabara shops open earlier</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Supermarkets</td>
                <td className="px-4 py-3">9:00 AM - 10:00 PM</td>
                <td className="px-4 py-3">Some 24-hour locations in urban areas</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Don Quijote (Donki)</td>
                <td className="px-4 py-3">24 hours (many)</td>
                <td className="px-4 py-3">Discount store paradise. Tax-free available</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Drugstores (Matsumoto Kiyoshi)</td>
                <td className="px-4 py-3">10:00 AM - 9:00 PM</td>
                <td className="px-4 py-3">Some open until 10-11 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">100 Yen Shops (Daiso, Seria)</td>
                <td className="px-4 py-3">10:00 AM - 9:00 PM</td>
                <td className="px-4 py-3">Great for souvenirs and daily items</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🍜 Restaurants & Dining</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Type</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Lunch</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Dinner</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Ramen Shops</td>
                <td className="px-4 py-3">11:00 AM - 3:00 PM</td>
                <td className="px-4 py-3">5:00 PM - Late</td>
                <td className="px-4 py-3">Some open 24h. May close when soup runs out</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Sushi Restaurants</td>
                <td className="px-4 py-3">11:30 AM - 2:00 PM</td>
                <td className="px-4 py-3">5:30 PM - 10:00 PM</td>
                <td className="px-4 py-3">High-end omakase may require reservations</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Izakaya (Pubs)</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">5:00 PM - 12:00 AM</td>
                <td className="px-4 py-3">Some open for lunch. Late night options exist</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Gyudon/Fast Food (Yoshinoya)</td>
                <td className="px-4 py-3" colSpan={2}>24 hours (many locations)</td>
                <td className="px-4 py-3">Cheap, quick, reliable</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Cafés (Starbucks, Doutor)</td>
                <td className="px-4 py-3" colSpan={2}>7:00 AM - 10:00 PM</td>
                <td className="px-4 py-3">Station cafés may open earlier</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Fine Dining</td>
                <td className="px-4 py-3">12:00 PM - 2:00 PM</td>
                <td className="px-4 py-3">6:00 PM - 9:00 PM</td>
                <td className="px-4 py-3">Last order often 1 hour before close</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm">
            <strong>🍱 Between Meals?</strong> Many restaurants close between lunch and dinner (2-5 PM). 
            Your options: konbini, department store food halls (depachika), or chain restaurants 
            like Matsuya that stay open continuously.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏛️ Attractions & Museums</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Attraction</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Closed</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Tokyo National Museum</td>
                <td className="px-4 py-3">9:30 AM - 5:00 PM</td>
                <td className="px-4 py-3">Mondays</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">teamLab Planets/Borderless</td>
                <td className="px-4 py-3">9:00 AM - 9:00 PM</td>
                <td className="px-4 py-3">Varies. Book ahead</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Senso-ji Temple</td>
                <td className="px-4 py-3">6:00 AM - 5:00 PM</td>
                <td className="px-4 py-3">Grounds always open</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Tokyo Skytree</td>
                <td className="px-4 py-3">10:00 AM - 9:00 PM</td>
                <td className="px-4 py-3">Open daily</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Imperial Palace East Gardens</td>
                <td className="px-4 py-3">9:00 AM - 4:30 PM</td>
                <td className="px-4 py-3">Mon, Fri</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Tsukiji Outer Market</td>
                <td className="px-4 py-3">5:00 AM - 2:00 PM</td>
                <td className="px-4 py-3">Sundays, some Wed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚃 Transportation</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Service</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>First Train</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Last Train</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">JR Yamanote Line</td>
                <td className="px-4 py-3">~4:30 AM</td>
                <td className="px-4 py-3">~1:00 AM</td>
                <td className="px-4 py-3">Loop line. Most useful for tourists</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Tokyo Metro</td>
                <td className="px-4 py-3">~5:00 AM</td>
                <td className="px-4 py-3">~12:00 AM</td>
                <td className="px-4 py-3">Varies by line. Check app</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Shinkansen (to/from Tokyo)</td>
                <td className="px-4 py-3">6:00 AM</td>
                <td className="px-4 py-3">9:00 PM</td>
                <td className="px-4 py-3">Book reserved seats in advance</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Taxis</td>
                <td className="px-4 py-3" colSpan={2}>24 hours</td>
                <td className="px-4 py-3">Night surcharge after 10 PM (20%)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${isLight ? 'bg-red-50 border border-red-200' : 'bg-red-900/20 border border-red-700'}`}>
          <p className="text-sm">
            <strong>⚠️ Last Train Warning:</strong> Tokyo's famous "last train" (終電 shūden) leaves around 
            midnight-1 AM. Miss it and you're stuck until 5 AM — options are taxi (expensive), 
            karaoke (fun), or manga café (budget). Plan accordingly!
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's open 24 hours in Tokyo?</h3>
            <p className="text-sm">
              Konbini (7-Eleven, Lawson, FamilyMart), Don Quijote discount stores, some gyudon 
              chains (Yoshinoya, Sukiya), manga cafés, karaoke, and select ramen shops.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Why do Japanese banks close at 3 PM?</h3>
            <p className="text-sm">
              Japanese banks use the afternoon for back-office operations and inter-bank settlements. 
              This dates back decades and hasn't changed despite customer complaints. Use konbini ATMs instead.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are shops open on Japanese holidays?</h3>
            <p className="text-sm">
              Most retail stays open — shops, restaurants, and attractions operate normally. 
              Only banks, government offices, and some businesses close.{' '}
              <Link href={`/${city.slug}/guide/holidays/`} className={linkColor}>See holiday guide →</Link>
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in Tokyo</span>
          </Link>
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>Japanese Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📈</span><span>TSE Trading Hours</span>
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
