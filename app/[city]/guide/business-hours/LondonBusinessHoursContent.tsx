'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LondonBusinessHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const londonTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = londonTime.getHours()
  const currentDay = londonTime.getDay() // 0 = Sunday
  const timeStr = londonTime.toLocaleTimeString('en-US', { 
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
  const isBankOpen = currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17
  const isWeekend = currentDay === 0 || currentDay === 6
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          London Business Hours Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Banks, shops, restaurants, and government hours in the UK capital
        </p>
        
        {/* Live Status */}
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">
            It's {timeStr} in London — Banks are {isBankOpen ? 'open' : 'closed'}
          </span>
        </div>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Most businesses in London operate <strong>Monday through Saturday, 9 AM to 5:30 PM</strong> (GMT/BST). 
          Banks typically close at 4:30-5 PM, retail shops stay open later (often until 8-9 PM in central London), 
          and <strong>Sunday trading laws</strong> limit large stores to 6 hours (usually 11 AM - 5 PM or 12 PM - 6 PM).
        </p>
      </section>
      
      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          London has its own rhythm when it comes to business hours — and it's quite different from other 
          major cities. The biggest surprise for visitors? <strong>Sunday trading restrictions</strong> mean 
          large stores can only open for 6 hours, a law unique to England and Wales.
        </p>
        <p>
          Whether you're planning meetings, need to visit a bank, or want to know if the shops will be 
          open after work, this guide covers everything you need to know about when London does business.
        </p>
        <p>
          <strong>Key takeaway:</strong> Weekdays are fairly predictable (9-5:30ish), Saturdays have 
          extended retail hours, but Sundays require planning due to restricted opening times.
        </p>
      </section>
      
      {/* Banks */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏦 Bank Hours</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Bank Type</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Mon-Fri</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Saturday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Sunday</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">High Street Banks (Barclays, HSBC, Lloyds, NatWest)</td>
                <td className="px-4 py-3">9:00 AM - 4:30 PM</td>
                <td className="px-4 py-3">9:00 AM - 12:30 PM (some branches)</td>
                <td className="px-4 py-3">Closed</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Metro Bank</td>
                <td className="px-4 py-3">8:30 AM - 6:00 PM</td>
                <td className="px-4 py-3">8:30 AM - 6:00 PM</td>
                <td className="px-4 py-3">11:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Post Office Banking Services</td>
                <td className="px-4 py-3">9:00 AM - 5:30 PM</td>
                <td className="px-4 py-3">9:00 AM - 12:30 PM</td>
                <td className="px-4 py-3">Closed (most)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💡 Good to Know</h3>
          <ul className="text-sm space-y-1">
            <li>• Most banks close early on Saturdays — usually by 12:30 PM</li>
            <li>• <strong>Metro Bank</strong> is the exception with 7-day opening</li>
            <li>• Many high street banks have reduced their branch networks — always check online first</li>
            <li>• Post Offices offer banking services for most UK banks (deposits, withdrawals)</li>
            <li>• Bank holidays = all banks closed</li>
          </ul>
        </div>
      </section>
      
      {/* Retail Shops */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛍️ Retail & Shopping Hours</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Store Type</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Mon-Sat</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Sunday</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Large Supermarkets (Tesco, Sainsbury's, Asda)</td>
                <td className="px-4 py-3">6:00 AM - 11:00 PM</td>
                <td className="px-4 py-3">10:00 AM - 4:00 PM (6 hours)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Small Convenience Stores</td>
                <td className="px-4 py-3">6:00 AM - 11:00 PM</td>
                <td className="px-4 py-3">All day (exempt from Sunday trading)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Department Stores (Selfridges, John Lewis, Harrods)</td>
                <td className="px-4 py-3">10:00 AM - 9:00 PM</td>
                <td className="px-4 py-3">11:30 AM - 6:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Oxford Street / West End</td>
                <td className="px-4 py-3">10:00 AM - 9:00 PM</td>
                <td className="px-4 py-3">12:00 PM - 6:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Local High Street Shops</td>
                <td className="px-4 py-3">9:30 AM - 5:30 PM</td>
                <td className="px-4 py-3">Closed or limited hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Westfield Shopping Centres</td>
                <td className="px-4 py-3">10:00 AM - 10:00 PM</td>
                <td className="px-4 py-3">12:00 PM - 6:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>⚠️ Sunday Trading Laws Explained</h3>
          <p className="text-sm mb-2">
            In England and Wales, shops over 280 square metres can only open for <strong>6 consecutive hours</strong> on Sundays.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Large stores choose their 6-hour window (usually 10 AM - 4 PM, 11 AM - 5 PM, or 12 PM - 6 PM)</li>
            <li>• Small shops (under 280 sqm) can open all day — including corner shops, newsagents, etc.</li>
            <li>• Scotland has no Sunday trading restrictions</li>
            <li>• Christmas Day and Easter Sunday: most large stores must close entirely</li>
          </ul>
        </div>
      </section>
      
      {/* Restaurants & Pubs */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🍽️ Restaurants & Pubs</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Venue Type</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Typical Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Traditional Pubs</td>
                <td className="px-4 py-3">11:00 AM - 11:00 PM</td>
                <td className="px-4 py-3">Many close earlier on Sundays (10:30 PM)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">City Centre Bars</td>
                <td className="px-4 py-3">12:00 PM - 12:00 AM (later Fri/Sat)</td>
                <td className="px-4 py-3">Some have late licenses until 2-3 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Restaurants</td>
                <td className="px-4 py-3">12:00 PM - 10:30 PM</td>
                <td className="px-4 py-3">Last orders usually 30 mins before close</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Cafés</td>
                <td className="px-4 py-3">7:30 AM - 6:00 PM</td>
                <td className="px-4 py-3">Some stay open later in central London</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Fast Food Chains</td>
                <td className="px-4 py-3">6:00 AM - 12:00 AM</td>
                <td className="px-4 py-3">24-hour locations in Leicester Sq, Victoria</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🍺 Pub Culture Notes</h3>
          <ul className="text-sm space-y-1">
            <li>• "Last orders" is called 10-15 minutes before closing</li>
            <li>• Many pubs serve food until 9-10 PM only (kitchen closes early)</li>
            <li>• Sunday roasts typically served 12 PM - 4 PM</li>
            <li>• Bank holiday Mondays often have normal opening hours</li>
          </ul>
        </div>
      </section>
      
      {/* Museums & Attractions */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏛️ Museums & Attractions</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Attraction</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Best Time to Visit</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">British Museum</td>
                <td className="px-4 py-3">10:00 AM - 5:00 PM (Fri until 8:30 PM)</td>
                <td className="px-4 py-3">Weekday mornings, Friday evenings</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Natural History Museum</td>
                <td className="px-4 py-3">10:00 AM - 5:50 PM daily</td>
                <td className="px-4 py-3">Weekdays after 2 PM (school groups leave)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Tate Modern</td>
                <td className="px-4 py-3">10:00 AM - 6:00 PM (Fri/Sat until 10 PM)</td>
                <td className="px-4 py-3">Friday evenings are quieter</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Tower of London</td>
                <td className="px-4 py-3">9:00 AM - 5:30 PM (varies seasonally)</td>
                <td className="px-4 py-3">Opening time or late afternoon</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">National Gallery</td>
                <td className="px-4 py-3">10:00 AM - 6:00 PM (Fri until 9 PM)</td>
                <td className="px-4 py-3">Friday evening, weekday mornings</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💡 Pro Tips for Museums</h3>
          <ul className="text-sm space-y-1">
            <li>• Most national museums are <strong>free</strong> (British Museum, Natural History, V&A, etc.)</li>
            <li>• Friday evening "late" openings are less crowded and often have special events</li>
            <li>• School holidays (half-terms, summer) = much busier</li>
            <li>• Book timed tickets online even for free museums to skip queues</li>
          </ul>
        </div>
      </section>
      
      {/* Government Services */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏛️ Government & Public Services</h2>
        
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
                <td className="px-4 py-3 font-medium">Post Office (main branches)</td>
                <td className="px-4 py-3">Mon-Fri 9:00 AM - 5:30 PM, Sat 9:00 AM - 12:30 PM</td>
                <td className="px-4 py-3">Trafalgar Square branch open 7 days</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">DVLA (driving services)</td>
                <td className="px-4 py-3">Online 24/7, Phone Mon-Fri 8 AM - 7 PM, Sat 8 AM - 2 PM</td>
                <td className="px-4 py-3">Most services done online or by post</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">GP Surgeries</td>
                <td className="px-4 py-3">Mon-Fri 8:00 AM - 6:30 PM</td>
                <td className="px-4 py-3">Some offer extended hours; 111 for out-of-hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Council Offices</td>
                <td className="px-4 py-3">Mon-Fri 9:00 AM - 5:00 PM</td>
                <td className="px-4 py-3">Appointment often required</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Libraries</td>
                <td className="px-4 py-3">Varies widely by borough</td>
                <td className="px-4 py-3">Many open Saturdays, some Sundays</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Transport */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚇 Transport Hours</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Service</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Operating Hours</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">London Underground</td>
                <td className="px-4 py-3">5:00 AM - 12:30 AM (varies by line)</td>
                <td className="px-4 py-3">Night Tube: Fri/Sat on 5 lines (24-hour)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Buses</td>
                <td className="px-4 py-3">24 hours (many routes)</td>
                <td className="px-4 py-3">"N" night buses run 24/7</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Overground / Elizabeth Line</td>
                <td className="px-4 py-3">5:30 AM - 12:00 AM</td>
                <td className="px-4 py-3">Some Night Overground on Fri/Sat</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">National Rail (into London)</td>
                <td className="px-4 py-3">5:00 AM - 12:30 AM (varies)</td>
                <td className="px-4 py-3">First/last trains vary by route</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🌙 Night Tube Lines (24-hour Fri/Sat)</h3>
          <p className="text-sm">
            Victoria, Jubilee, Central, Northern, Piccadilly lines run all night on Fridays and Saturdays. 
            Perfect for late nights out without the night bus.
          </p>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Why do shops close early on Sundays?</h3>
            <p className="text-sm">
              The Sunday Trading Act 1994 restricts large stores (over 280 sqm) to 6 hours on Sundays. 
              It was a compromise between retail lobbies and those wanting to preserve Sunday as a rest day.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are shops open on bank holidays?</h3>
            <p className="text-sm">
              Most shops treat bank holidays like Sundays (6-hour limit for large stores). Exception: 
              Christmas Day and Easter Sunday, when most large shops must close entirely.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's open late in London?</h3>
            <p className="text-sm">
              Supermarkets (small ones), some restaurants/bars, 24-hour McDonald's/KFC in central areas, 
              pharmacies in major stations, and of course the Night Tube on weekends.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>When is the best day for shopping in London?</h3>
            <p className="text-sm">
              Saturday offers the most hours, but also the biggest crowds. Thursday evenings in the West End 
              (late-night shopping) or weekday mornings are quieter options.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Guides */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>UK Bank Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in London</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🇬🇧</span><span>Best Time to Visit</span>
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
