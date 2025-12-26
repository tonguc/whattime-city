'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LondonTwentyFourHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const londonTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = londonTime.getHours()
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
  
  const hourlyBreakdown = [
    { hour: '5-6 AM', icon: '🌅', title: 'Early risers', desc: `Runners hit Hyde Park and Regent's Park. Night buses hand over to the first Tubes. Bakeries and cafés prepare for the morning rush. The City is ghost-town quiet.` },
    { hour: '6-7 AM', icon: '☕', title: 'The city stirs', desc: `Tube stations start filling. Coffee shops open — Pret queues begin. City workers arrive early to beat the rush. Joggers circle the Serpentine.` },
    { hour: '7-8 AM', icon: '🚇', title: 'Rush hour begins', desc: `Tube platforms get dangerously crowded. Victoria, Liverpool Street, and Waterloo are heaving. Buses crawl through Central London. Everyone looks tired and avoids eye contact.` },
    { hour: '8-9 AM', icon: '🏃', title: 'Peak commute chaos', desc: `The absolute worst time to travel. Tube delays make everyone miserable. The Central and Northern lines are sardine cans. Smart tourists stay in their hotels.` },
    { hour: '9-10 AM', icon: '💼', title: 'Business kicks off', desc: `Offices fill up. The City and Canary Wharf are buzzing. Museums and galleries start opening. Rush hour begins to ease. Breakfast meetings wrap up.` },
    { hour: '10-11 AM', icon: '🏛️', title: 'Tourist prime time', desc: `Attractions open fully. Tower of London and Westminster Abbey get busy. South Bank fills with walkers. Perfect time for British Museum (still manageable).` },
    { hour: '11 AM-12 PM', icon: '☕', title: 'Elevenses', desc: `The British tradition of mid-morning tea. Cafés fill briefly. Museum crowds build. Borough Market gets lively on weekends. Good time for gallery visits.` },
    { hour: '12-1 PM', icon: '🥪', title: 'Lunch rush', desc: `Pret and Itsu queues stretch out the door. City pubs serve quick lunches. Parks fill with sandwich-eaters if sunny. Restaurant pre-theatre menus begin.` },
    { hour: '1-2 PM', icon: '🏙️', title: 'Afternoon begins', desc: `Post-lunch calm. Good time for museums (school groups leave). Oxford Street shopping is less manic. Office workers hide in meetings.` },
    { hour: '2-4 PM', icon: '☀️', title: 'Afternoon golden hours', desc: `Great time for walking tours. Light is perfect for Thames-side photos. South Bank and Bankside are lovely. Tea time approaches.` },
    { hour: '4-5 PM', icon: '🫖', title: 'Afternoon tea time', desc: `Traditional tea at fancy hotels. Stock market winds down. School run traffic clogs residential areas. Early commuters start heading home.` },
    { hour: '5-6 PM', icon: '🍺', title: 'Pub o\'clock', desc: `Offices empty. Pub gardens fill (weather permitting). After-work drinks are a British institution. Tube crush begins again.` },
    { hour: '6-7 PM', icon: '🚇', title: 'Evening rush', desc: `Tubes are packed again but mood is lighter than morning. Commuters head to Zone 2-6. West End starts buzzing. Restaurant reservations begin.` },
    { hour: '7-8 PM', icon: '🎭', title: 'Theatre time', desc: `West End curtains rise at 7:30. Pre-theatre dining wraps up. Leicester Square fills with tourists. Pubs transition from work drinks to evening drinks.` },
    { hour: '8-9 PM', icon: '🍝', title: 'Dinner peak', desc: `Restaurants are fully booked. Theatre interval drinks. Soho and Shoreditch come alive. Sunset views from the Shard or Sky Garden.` },
    { hour: '9-10 PM', icon: '🍷', title: 'Evening in full swing', desc: `Bars fill up. Theatre performances end. Comedy clubs kick off. Live music starts in Camden and Brixton. Date night continues.` },
    { hour: '10-11 PM', icon: '🎤', title: 'Nightlife begins', desc: `Clubs open their doors. Last Tube countdown begins (most lines end ~midnight). Pubs call last orders at 11 PM (some licensed later). Night owls emerge.` },
    { hour: '11 PM-12 AM', icon: '🌃', title: 'Last orders', desc: `Traditional pubs close. Late-license bars continue. Club queues form. Night Tube starts on Fri/Sat. Kebab shops do brisk business.` },
    { hour: '12-2 AM', icon: '🎉', title: 'Night Tube hours', desc: `Clubs are packed in Shoreditch, Dalston, and Brixton. Night Tube runs on 5 lines (Fri/Sat). Night buses ("N" routes) for other areas. Late-night chicken shops thrive.` },
    { hour: '2-5 AM', icon: '🌙', title: 'The quiet hours', desc: `Most clubs wind down by 3-4 AM (some until 6 AM). Night buses are the only transit. 24-hour supermarkets serve night workers. The brief hours when London actually sleeps.` },
  ]
  
  // Find current period
  const getCurrentPeriod = () => {
    if (currentHour >= 5 && currentHour < 6) return 0
    if (currentHour >= 6 && currentHour < 7) return 1
    if (currentHour >= 7 && currentHour < 8) return 2
    if (currentHour >= 8 && currentHour < 9) return 3
    if (currentHour >= 9 && currentHour < 10) return 4
    if (currentHour >= 10 && currentHour < 11) return 5
    if (currentHour >= 11 && currentHour < 12) return 6
    if (currentHour >= 12 && currentHour < 13) return 7
    if (currentHour >= 13 && currentHour < 14) return 8
    if (currentHour >= 14 && currentHour < 16) return 9
    if (currentHour >= 16 && currentHour < 17) return 10
    if (currentHour >= 17 && currentHour < 18) return 11
    if (currentHour >= 18 && currentHour < 19) return 12
    if (currentHour >= 19 && currentHour < 20) return 13
    if (currentHour >= 20 && currentHour < 21) return 14
    if (currentHour >= 21 && currentHour < 22) return 15
    if (currentHour >= 22 && currentHour < 23) return 16
    if (currentHour >= 23 || currentHour < 0) return 17
    if (currentHour >= 0 && currentHour < 2) return 18
    return 19
  }
  
  const currentPeriod = getCurrentPeriod()
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          24 Hours in London
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          The daily rhythm of Britain's capital, hour by hour
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">{hourlyBreakdown[currentPeriod]?.icon || '🕐'}</span>
          <span className="text-sm">
            London: {timeStr} — <strong>{hourlyBreakdown[currentPeriod]?.title || 'Current'}</strong>
          </span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          London doesn't quite match New York's "never sleeps" reputation — pubs traditionally close 
          at 11 PM, and the Tube doesn't run 24/7 (except Night Tube on Fri/Sat). But the city has 
          plenty of life from dawn to late night, with distinct rhythms shaped by teatime, pub culture, 
          and the legendary British commute.
        </p>
      </section>
      
      <section className="mb-10 space-y-4">
        <p>
          London has a rhythm unlike any other city. It's shaped by centuries of tradition — 
          from morning commuter crushes to the sacred ritual of the tea break, from the 5 PM 
          pub exodus to the Theatre District's nightly transformation.
        </p>
        <p>
          Understanding this rhythm will help you plan your visit, avoid the worst crowds, 
          and experience London the way Londoners actually live it.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>🕐 Hour by Hour</h2>
        
        <div className="space-y-4">
          {hourlyBreakdown.map((period, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl border-l-4 ${
                index === currentPeriod 
                  ? 'border-amber-500 ring-2 ring-amber-200' 
                  : 'border-transparent'
              } ${cardBg}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{period.icon}</span>
                <div>
                  <span className={`text-sm ${mutedColor}`}>{period.hour}</span>
                  <h3 className={`font-semibold ${headingColor}`}>{period.title}</h3>
                </div>
                {index === currentPeriod && (
                  <span className="ml-auto px-2 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-700">NOW</span>
                )}
              </div>
              <p className="text-sm ml-11">{period.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌙 Late Night London Tips</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🚇 Night Tube (Fri & Sat only)</h3>
            <p className="text-sm">
              Five lines run 24 hours on weekends: Victoria, Jubilee, Central, Northern, and Piccadilly. 
              Other nights, the Tube stops around midnight. Plan your journey home before you go out.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🚌 Night Buses</h3>
            <p className="text-sm">
              "N" buses run through the night on most major routes. They're reliable but can take 
              much longer than the Tube. Trafalgar Square is a major hub for night bus connections.
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🍕 Late Night Food</h3>
            <p className="text-sm">
              Best options: kebab shops (open until 3-4 AM in nightlife areas), Bagel Bake in Brick Lane 
              (24 hours), Polo Bar Bishopsgate (24 hours), McDonald's in Leicester Square (24 hours).
            </p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🏪 24-Hour Supermarkets</h3>
            <p className="text-sm">
              Many large Tesco and Asda stores are 24-hour (check before going). Good for emergency 
              supplies, but remember they close midnight Saturday to open 10 AM Sunday (Sunday trading laws).
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📍 Best Times for Common Activities</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Activity</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Best Time</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Avoid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="px-4 py-3 font-medium">British Museum</td>
                <td className="px-4 py-3">Weekdays 10-11 AM or after 3 PM</td>
                <td className="px-4 py-3">Weekends, school holidays</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Tower of London</td>
                <td className="px-4 py-3">Opening time (9 AM) or late afternoon</td>
                <td className="px-4 py-3">11 AM - 2 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Oxford Street Shopping</td>
                <td className="px-4 py-3">Weekday mornings (10-11 AM)</td>
                <td className="px-4 py-3">Saturdays, December</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Borough Market</td>
                <td className="px-4 py-3">Weekday lunchtimes</td>
                <td className="px-4 py-3">Saturday afternoon (insanely busy)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Thames River Walk</td>
                <td className="px-4 py-3">Early morning or sunset</td>
                <td className="px-4 py-3">Peak tourist hours (12-4 PM)</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Traditional Pub Experience</td>
                <td className="px-4 py-3">5-7 PM weekdays (authentic after-work crowd)</td>
                <td className="px-4 py-3">Late Friday night (too rowdy)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What time do pubs close in London?</h3>
            <p className="text-sm">
              Traditional pubs close at 11 PM on weeknights, sometimes earlier on Sundays. However, 
              many venues have late licenses (until 12 AM-3 AM), especially in Soho, Shoreditch, and 
              other nightlife areas. Clubs can stay open until 3-6 AM.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>When is the Tube busiest?</h3>
            <p className="text-sm">
              8-9 AM and 5:30-6:30 PM on weekdays. Avoid the Central, Northern, and Victoria lines 
              during these times if possible. Friday evenings are also very busy as people head out.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is London safe at night?</h3>
            <p className="text-sm">
              Generally yes, especially in central and tourist areas. Use common sense: stick to 
              well-lit areas, avoid empty Tube carriages late at night, and be aware of your 
              surroundings in nightlife areas where pickpockets operate.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's open on Sunday mornings?</h3>
            <p className="text-sm">
              Not much before 10-11 AM due to Sunday trading laws. Cafés and smaller shops open 
              earlier. Many museums open at 10 AM. Large shops typically open at 11 AM or 12 PM.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>London Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🇬🇧</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/digital-nomad/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🎒</span><span>Digital Nomad Guide</span>
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
