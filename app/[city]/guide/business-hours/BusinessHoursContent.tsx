'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function BusinessHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const nycTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = nycTime.getHours()
  const currentDay = nycTime.getDay() // 0 = Sunday
  const timeStr = nycTime.toLocaleTimeString('en-US', { 
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          New York Business Hours Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Banks, offices, stores, and government hours in NYC — updated for 2025
        </p>
        
        {/* Live Status */}
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">
            It's {timeStr} in NYC — Banks are {isBankOpen ? 'open' : 'closed'}
          </span>
        </div>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Most businesses in New York operate <strong>Monday through Friday, 9 AM to 5 PM</strong> (Eastern Time). 
          Banks typically close at 4-5 PM, retail stores stay open later (often until 9-10 PM), and many 
          services are available on Saturdays with reduced hours. Sunday hours vary significantly.
        </p>
      </section>
      
      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          New York likes to call itself "the city that never sleeps," but let's be honest — banks 
          definitely sleep. And close early on Fridays. And don't work weekends (mostly).
        </p>
        <p>
          Whether you're planning a trip, trying to wire money internationally, or just need to 
          know if the DMV will be open when you arrive, this guide breaks down the actual operating 
          hours for different types of businesses in NYC.
        </p>
        <p>
          One important note: hours can vary between Manhattan, Brooklyn, and the outer boroughs. 
          Tourist areas like Times Square and the Financial District often have extended hours, 
          while neighborhood shops might keep more traditional schedules.
        </p>
      </section>
      
      {/* Bank Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏦 Bank Hours in New York
        </h2>
        
        <p className="mb-4">
          Most major banks in NYC follow similar schedules, though some branches (especially in 
          busy areas) offer extended hours. Here's what to expect:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Bank</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Mon-Fri</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Saturday</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Sunday</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-medium">Chase</td>
                <td className="p-3">9 AM - 5 PM</td>
                <td className="p-3">9 AM - 2 PM</td>
                <td className="p-3">Closed</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">Bank of America</td>
                <td className="p-3">9 AM - 4 PM</td>
                <td className="p-3">9 AM - 1 PM</td>
                <td className="p-3">Closed</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Citi</td>
                <td className="p-3">9 AM - 4 PM</td>
                <td className="p-3">10 AM - 2 PM</td>
                <td className="p-3">Closed</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">TD Bank</td>
                <td className="p-3">8:30 AM - 6 PM</td>
                <td className="p-3">9 AM - 4 PM</td>
                <td className="p-3">11 AM - 3 PM*</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Wells Fargo</td>
                <td className="p-3">9 AM - 5 PM</td>
                <td className="p-3">9 AM - 12 PM</td>
                <td className="p-3">Closed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-2 text-sm ${mutedColor}`}>
          *TD Bank is one of the few major banks open on Sundays at select locations. ATMs are 
          available 24/7 at most branches.
        </p>
        
        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💡 Pro Tips for Banking in NYC</h3>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Avoid lunch hour:</strong> Banks get crowded between 12-2 PM</li>
            <li>• <strong>Friday afternoons</strong> are the worst time — long lines before the weekend</li>
            <li>• <strong>First/last of the month</strong> tends to be busier</li>
            <li>• Many banks close early (1-2 PM) the day before major holidays</li>
          </ul>
        </div>
      </section>
      
      {/* Retail Store Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🛍️ Retail Store Hours
        </h2>
        
        <p className="mb-4">
          New York retail hours vary wildly depending on the neighborhood and type of store. 
          Here's a general guide:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Department Stores</h3>
            <p className="text-sm mb-2">(Macy's, Bloomingdale's, Nordstrom)</p>
            <ul className="text-sm space-y-1">
              <li>Mon-Sat: 10 AM - 9 PM</li>
              <li>Sunday: 11 AM - 7 PM</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Times Square Stores</h3>
            <p className="text-sm mb-2">(Tourist area, extended hours)</p>
            <ul className="text-sm space-y-1">
              <li>Mon-Sat: 9 AM - 11 PM</li>
              <li>Sunday: 10 AM - 10 PM</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Neighborhood Boutiques</h3>
            <p className="text-sm mb-2">(SoHo, Williamsburg, etc.)</p>
            <ul className="text-sm space-y-1">
              <li>Mon-Sat: 11 AM - 7 PM</li>
              <li>Sunday: 12 PM - 6 PM</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Grocery Stores</h3>
            <p className="text-sm mb-2">(Whole Foods, Trader Joe's)</p>
            <ul className="text-sm space-y-1">
              <li>Daily: 7 AM - 10 PM</li>
              <li>Some 24-hour options available</li>
            </ul>
          </div>
        </div>
        
        <p className="text-sm">
          <strong>Note:</strong> Drugstores like CVS and Walgreens often have 24-hour locations in 
          Manhattan. There's almost always one open nearby if you need something late at night.
        </p>
      </section>
      
      {/* Government & Services */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏛️ Government Offices & Services
        </h2>
        
        <p className="mb-4">
          Government offices in NYC generally keep traditional hours. Here's what to expect:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Service</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Hours</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-medium">DMV</td>
                <td className="p-3">8:30 AM - 4 PM (Mon-Fri)</td>
                <td className="p-3">Some locations open Sat 8:30 AM - 1 PM</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">Post Office</td>
                <td className="p-3">9 AM - 5 PM (Mon-Fri)</td>
                <td className="p-3">Main branches Sat 9 AM - 4 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">City Hall</td>
                <td className="p-3">9 AM - 5 PM (Mon-Fri)</td>
                <td className="p-3">Closed weekends & holidays</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">Social Security Office</td>
                <td className="p-3">9 AM - 4 PM (Mon-Fri)</td>
                <td className="p-3">Appointment recommended</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Courts</td>
                <td className="p-3">9 AM - 5 PM (Mon-Fri)</td>
                <td className="p-3">Closed weekends & holidays</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg border-l-4 border-blue-500 ${cardBg}`}>
          <p className="text-sm">
            <strong>📋 Tip:</strong> The NYC DMV strongly recommends making an appointment online 
            at <span className={mutedColor}>dmv.ny.gov</span> before visiting. Walk-ins often 
            face 2+ hour waits, especially at Manhattan locations.
          </p>
        </div>
      </section>
      
      {/* Restaurant Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🍽️ Restaurant Hours
        </h2>
        
        <p className="mb-4">
          New York's dining scene operates on its own schedule. Here's the general pattern:
        </p>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>☕ Breakfast/Brunch</h3>
            <p className="text-sm mt-1">
              Most cafes open between 6-8 AM. Weekend brunch typically runs 10 AM - 3 PM, and 
              popular spots fill up by 11 AM. Pro tip: make reservations or go before 10:30 AM.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>🥗 Lunch</h3>
            <p className="text-sm mt-1">
              11:30 AM - 2:30 PM is the standard lunch window. Fast-casual spots stay open all 
              afternoon, but sit-down restaurants often close between lunch and dinner.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>🍝 Dinner</h3>
            <p className="text-sm mt-1">
              Dinner service usually starts at 5-6 PM. Kitchens in Manhattan often stay open 
              until 10-11 PM, while trendy Brooklyn spots might go until midnight on weekends.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>🌙 Late Night</h3>
            <p className="text-sm mt-1">
              Diners, pizza shops, and select restaurants serve until 2-4 AM. There's always 
              somewhere to eat, even at 3 AM — just maybe not fine dining.
            </p>
          </div>
        </div>
      </section>
      
      {/* Holiday Impacts */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📅 Holiday Hours & Closures
        </h2>
        
        <p className="mb-4">
          Major holidays significantly affect business hours in NYC. Here's what to expect:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border ${
            isLight ? 'border-red-200 bg-red-50' : 'border-red-900 bg-red-900/20'
          }`}>
            <h3 className={`font-medium mb-2 ${isLight ? 'text-red-800' : 'text-red-300'}`}>
              Most Closures
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Thanksgiving Day</li>
              <li>• Christmas Day</li>
              <li>• New Year's Day</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl border ${
            isLight ? 'border-yellow-200 bg-yellow-50' : 'border-yellow-900 bg-yellow-900/20'
          }`}>
            <h3 className={`font-medium mb-2 ${isLight ? 'text-yellow-800' : 'text-yellow-300'}`}>
              Reduced Hours
            </h3>
            <ul className="text-sm space-y-1">
              <li>• Christmas Eve & NYE</li>
              <li>• Independence Day</li>
              <li>• Memorial/Labor Day</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-4 text-sm">
          For a complete list of{' '}
          <Link href={`/${city.slug}/guide/holidays/`} className={linkColor}>
            NYC public holidays and closures →
          </Link>
        </p>
      </section>
      
      {/* International Considerations */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 For International Visitors
        </h2>
        
        <p className="mb-4">
          If you're coordinating with NYC from overseas, keep these time zone overlaps in mind:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Your Location</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>NYC 9 AM - 5 PM is your...</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Best overlap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3">London (UK)</td>
                <td className="p-3">2 PM - 10 PM</td>
                <td className="p-3">2 PM - 5 PM your time</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Berlin (Germany)</td>
                <td className="p-3">3 PM - 11 PM</td>
                <td className="p-3">3 PM - 6 PM your time</td>
              </tr>
              <tr>
                <td className="p-3">Dubai (UAE)</td>
                <td className="p-3">6 PM - 2 AM</td>
                <td className="p-3">6 PM - 9 PM your time</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Tokyo (Japan)</td>
                <td className="p-3">11 PM - 7 AM*</td>
                <td className="p-3">Early morning (7-9 AM)</td>
              </tr>
              <tr>
                <td className="p-3">Sydney (Australia)</td>
                <td className="p-3">1 AM - 9 AM*</td>
                <td className="p-3">8-9 AM your time</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-2 text-sm ${mutedColor}`}>
          *Next day. For precise calculations, use our{' '}
          <Link href="/tools/converter/" className={linkColor}>Time Converter</Link>.
        </p>
      </section>
      
      {/* Museum Quiet Hours - NEW */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎨 Museum Quiet Hours (Avoid the Crowds)
        </h2>
        
        <p className="mb-4">
          NYC museums can be overwhelming during peak times. Here's when locals go to avoid the crowds:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>The Met</h3>
            <ul className="text-sm space-y-1">
              <li>🟢 <strong>Best:</strong> Tuesday & Wednesday, 10-11 AM</li>
              <li>🟢 <strong>Good:</strong> Friday evenings (open until 9 PM)</li>
              <li>🔴 <strong>Avoid:</strong> Saturday 11 AM - 4 PM, Sunday afternoons</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>MoMA</h3>
            <ul className="text-sm space-y-1">
              <li>🟢 <strong>Best:</strong> Weekday mornings (10:30-11:30 AM)</li>
              <li>🟢 <strong>Good:</strong> Friday evenings (free after 5:30 PM — but busy)</li>
              <li>🔴 <strong>Avoid:</strong> Weekends, school vacation weeks</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Natural History Museum</h3>
            <ul className="text-sm space-y-1">
              <li>🟢 <strong>Best:</strong> Weekday afternoons (2-4 PM)</li>
              <li>🟡 <strong>Note:</strong> Morning school groups leave by 2 PM</li>
              <li>🔴 <strong>Avoid:</strong> Weekend mornings, rainy days (everyone goes inside)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Guggenheim</h3>
            <ul className="text-sm space-y-1">
              <li>🟢 <strong>Best:</strong> Weekday late afternoons (3-5 PM)</li>
              <li>🟢 <strong>Good:</strong> Saturday "Pay What You Wish" 4-6 PM (crowded but free)</li>
              <li>🔴 <strong>Avoid:</strong> Sunday afternoons</li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl border-l-4 border-amber-500 ${cardBg}`}>
          <p className="text-sm">
            💡 <strong>Pro tip:</strong> Many museums have "late night" hours on Fridays or Saturdays. 
            The last 2 hours before closing are often the quietest — most tourists have left for dinner.
          </p>
        </div>
      </section>
      
      {/* Blue Laws - Alcohol Sales - NEW */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🍷 Alcohol Sales Hours (Blue Laws)
        </h2>
        
        <p className="mb-4">
          New York has specific laws about when and where you can buy alcohol. Don't get caught off guard:
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Where</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Beer/Wine</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Liquor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              <tr>
                <td className="p-3 font-medium">Grocery/Bodega</td>
                <td className="p-3">Daily: 8 AM - 12 AM<br/>Sunday: 12 PM - 12 AM</td>
                <td className="p-3 text-red-500">❌ Not sold</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-medium">Liquor Store</td>
                <td className="p-3 text-red-500">❌ Not sold</td>
                <td className="p-3">Mon-Sat: Store hours<br/>Sunday: 12 PM onwards</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Bars/Restaurants</td>
                <td className="p-3" colSpan={2}>8 AM - 4 AM daily (last call ~3:30 AM)</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-3 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>Key point:</strong> Liquor stores can't sell beer/wine, and grocery stores can't sell liquor. 
            This is why you'll see separate "beer" and "liquor" stores next to each other. Sunday alcohol sales 
            start at noon (not morning).
          </p>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Are banks open on Saturday in New York?
            </h3>
            <p className="text-sm">
              Yes, most major banks have Saturday hours, typically 9 AM to 1-2 PM. However, not 
              all branches are open — check your specific location. TD Bank has the most extensive 
              Saturday hours (until 4 PM at many locations).
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              What time do stores close in Times Square?
            </h3>
            <p className="text-sm">
              Times Square stores typically stay open until 10-11 PM, much later than other 
              parts of the city. Some locations, like the Disney Store and certain drugstores, 
              may stay open even later.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Is the post office open on weekends in NYC?
            </h3>
            <p className="text-sm">
              Most post offices are open Saturday mornings (9 AM - 1 PM or 4 PM depending on 
              the branch). Sundays are generally closed, except for the main facility at 
              421 8th Avenue, which has limited weekend hours.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              What businesses are open 24 hours in NYC?
            </h3>
            <p className="text-sm">
              Several businesses operate 24/7 in NYC: select CVS and Walgreens pharmacies, 
              some Duane Reade locations, many diners and bodegas, gyms like Planet Fitness, 
              and certain grocery stores. The subway also runs 24 hours.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Links */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/holidays/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📅</span>
            <span>NYC Public Holidays 2025</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/stock-market/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📈</span>
            <span>Stock Market Hours</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/call-times/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📞</span>
            <span>Best Time to Call NYC</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📖</span>
            <span>Complete NYC Time Guide</span>
          </Link>
        </div>
      </section>
      
      {/* Last Updated */}
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2025. Hours may vary by location and season. Always confirm 
        with the specific business before visiting.
      </p>
    </div>
  )
}
