'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function TwentyFourHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const nycTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = nycTime.getHours()
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
  
  const hourlyBreakdown = [
    { hour: '5-6 AM', icon: '🌅', title: 'Early risers', desc: 'Runners hit Central Park. Subway starts filling with early shift workers. Bakeries fire up. The city is quiet but waking.' },
    { hour: '6-7 AM', icon: '☕', title: 'Coffee culture begins', desc: 'Lines form at coffee carts. Gyms are busy with before-work crowds. Doormen end their night shifts. First tourists appear at popular breakfast spots.' },
    { hour: '7-8 AM', icon: '🚇', title: 'Rush hour kicks in', desc: 'Subway platforms get packed. Yellow cabs are impossible to find. Sidewalks fill with commuters. Everyone walks fast and looks annoyed.' },
    { hour: '8-9 AM', icon: '🏃', title: 'Peak commute', desc: 'The absolute worst time for transit. Delayed trains, crowded cars. Midtown becomes a sea of suits. Smart tourists stay in their hotels.' },
    { hour: '9-10 AM', icon: '💼', title: 'Business begins', desc: 'Offices fill up. Wall Street is fully operational. Museums start opening. Rush hour begins to ease. Brunch spots prep for weekends.' },
    { hour: '10-11 AM', icon: '🗽', title: 'Tourist prime time', desc: 'Attractions open fully. Empire State deck gets busy. Staten Island Ferry fills up. Midtown sidewalks are tourist-heavy. Perfect time for outer borough exploration.' },
    { hour: '11 AM-12 PM', icon: '🥯', title: 'Late breakfast, early lunch', desc: 'Brunch lines form at trendy spots. Food carts do brisk business. Museums are busy but manageable. Central Park fills with visitors.' },
    { hour: '12-1 PM', icon: '🍕', title: 'Lunch rush', desc: 'Midtown becomes a feeding frenzy. Pizza slices fly across counters. Parks fill with office workers. Restaurant wait times peak.' },
    { hour: '1-2 PM', icon: '🏙️', title: 'Afternoon lull begins', desc: 'Post-lunch calm. Good time for museums (school groups leave). Shopping is less chaotic. Office workers hide in meetings.' },
    { hour: '2-4 PM', icon: '☀️', title: 'Afternoon golden hours', desc: 'Great time for walking tours. Light is beautiful for photos. Attractions are less packed. Perfect for Brooklyn Bridge walks.' },
    { hour: '4-5 PM', icon: '📱', title: 'Stock market closes', desc: 'Wall Street wraps up. Bars in FiDi start happy hour. NYSE bell rings. Early commuters head home.' },
    { hour: '5-6 PM', icon: '🚌', title: 'Evening rush begins', desc: 'Subways pack up again. Buses crawl through Midtown. After-work drinks start. Restaurants begin dinner prep.' },
    { hour: '6-7 PM', icon: '🍝', title: 'Early dinner', desc: 'Restaurant first seatings. Theater district gets busy. Lincoln Center crowds arrive. Best time for prix fixe deals.' },
    { hour: '7-8 PM', icon: '🎭', title: 'Showtime', desc: 'Broadway curtains rise. Restaurant peak time. Sunset views from rooftops. The city transitions to night mode.' },
    { hour: '8-9 PM', icon: '🌆', title: 'Night settles in', desc: 'Dinner is in full swing. Times Square neon blazes. Tourists photograph everything. Locals head to neighborhood spots.' },
    { hour: '9-10 PM', icon: '🍷', title: 'Peak evening', desc: 'Bars fill up. Late dinner reservations. Comedy shows start. Broadway intermissions. Live music kicks off.' },
    { hour: '10-11 PM', icon: '🎤', title: 'Nightlife begins', desc: 'Clubs open their doors. Jazz sets start. Broadway lets out. Restaurant kitchens wind down. The party people emerge.' },
    { hour: '11 PM-12 AM', icon: '🌃', title: 'Late night energy', desc: 'Nightclubs are packed. Late shows at comedy clubs. Diners serve drunk food. Subway thins but runs. The real NYC comes out.' },
    { hour: '12-2 AM', icon: '🍔', title: 'After hours', desc: 'Bars serve last calls at 4 AM, so plenty of time. Late-night eats thrive. Club lines are longest. Street performers in Times Square.' },
    { hour: '2-4 AM', icon: '🌙', title: 'The city "sleeps"', desc: 'Last call approaches. 24-hour diners are lifelines. Subway runs sparse. Pizza shops feed the brave. Streets are eerily quiet in some areas, chaotic in others.' },
    { hour: '4-5 AM', icon: '🗞️', title: 'The quiet hours', desc: 'Bars close. Streets empty. Newspaper trucks appear. Bakeries start again. The brief moment when NYC actually rests.' },
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
    if (currentHour >= 2 && currentHour < 4) return 19
    return 20
  }
  
  const currentPeriod = getCurrentPeriod()
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          24 Hours in New York City
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          The city's daily rhythm, hour by hour
        </p>
        
        {/* Current Time Highlight */}
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm mb-1">Right now in NYC ({timeStr}):</p>
          <p className={`font-semibold ${headingColor}`}>
            {hourlyBreakdown[currentPeriod]?.icon} {hourlyBreakdown[currentPeriod]?.title}
          </p>
          <p className="text-sm mt-1">{hourlyBreakdown[currentPeriod]?.desc}</p>
        </div>
      </header>
      
      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          "The city that never sleeps" — it's a cliché, but it's also basically true. Unlike 
          most cities that have clear on/off hours, New York operates on a continuous spectrum. 
          Something is always happening, somewhere. The question is: what?
        </p>
        <p>
          This guide breaks down what's actually going on in NYC at every hour of the day. 
          Whether you're trying to avoid rush hour, find late-night food, or just understand 
          the rhythm of this ridiculous city, here's your hour-by-hour guide.
        </p>
      </section>
      
      {/* Hour by Hour Breakdown */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Hour by Hour
        </h2>
        
        <div className="space-y-3">
          {hourlyBreakdown.map((period, index) => (
            <div 
              key={period.hour}
              className={`p-4 rounded-xl border transition-all ${
                index === currentPeriod 
                  ? isLight 
                    ? 'border-amber-400 bg-amber-50 ring-2 ring-amber-200' 
                    : 'border-amber-500 bg-amber-900/30 ring-2 ring-amber-500/50'
                  : isLight 
                    ? 'border-slate-200 bg-white' 
                    : 'border-slate-600 bg-slate-800/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{period.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-mono text-sm ${mutedColor}`}>{period.hour}</span>
                    <h3 className={`font-semibold ${headingColor}`}>{period.title}</h3>
                    {index === currentPeriod && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500 text-white">NOW</span>
                    )}
                  </div>
                  <p className="text-sm mt-1">{period.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Rush Hour Guide */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🚇 Rush Hour Survival Guide
        </h2>
        
        <div className={`p-5 rounded-xl ${cardBg}`}>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>Morning Rush</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>Peak:</strong> 7:30 AM - 9:00 AM</li>
                <li>• <strong>Avoid:</strong> Penn Station, Grand Central</li>
                <li>• <strong>Tip:</strong> Leave before 7 AM or after 9:30 AM</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>Evening Rush</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>Peak:</strong> 5:00 PM - 7:00 PM</li>
                <li>• <strong>Avoid:</strong> Times Square, Midtown stations</li>
                <li>• <strong>Tip:</strong> Grab dinner and wait it out</li>
              </ul>
            </div>
          </div>
          <p className={`text-sm mt-4 ${mutedColor}`}>
            The subway runs 24/7, but service is reduced late night (12 AM - 6 AM). 
            Check MTA alerts for weekend service changes.
          </p>
        </div>
        
        {/* Late Night Subway Details - NEW */}
        <div className={`mt-4 p-4 rounded-xl border-l-4 border-yellow-500 ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🚇 Late Night Subway Warning</h3>
          <ul className="text-sm space-y-2">
            <li>⚠️ <strong>Express → Local:</strong> After midnight, many express trains switch to local service. Your "quick" 20-minute ride could become 45 minutes.</li>
            <li>⏱️ <strong>Wait times:</strong> Expect 10-20 minute waits between trains (vs. 3-5 minutes during the day).</li>
            <li>🔀 <strong>Route changes:</strong> Some lines don't run at all late night. The 7 train, for example, runs limited service.</li>
            <li>💡 <strong>Pro tip:</strong> Use the MTA app or Google Maps real-time — schedules mean nothing at 2 AM.</li>
          </ul>
        </div>
      </section>
      
      {/* Late Night NYC */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌙 What's Open Late at Night
        </h2>
        
        <p className="mb-4">
          Yes, things actually stay open. Here's what you can find after midnight:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Food (Until 4 AM+)</h3>
            <ul className="text-sm space-y-1">
              <li>• Pizza by the slice (everywhere)</li>
              <li>• Diners (Veselka, Katz's on weekends)</li>
              <li>• Halal carts</li>
              <li>• Koreatown restaurants</li>
              <li>• Bodegas for sandwiches</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Bars (Until 4 AM)</h3>
            <ul className="text-sm space-y-1">
              <li>• Legal closing time: 4 AM</li>
              <li>• Most bars close 2-4 AM</li>
              <li>• East Village, LES have latest scenes</li>
              <li>• Rooftops close earlier (12 AM-2 AM)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>24 Hour Options</h3>
            <ul className="text-sm space-y-1">
              <li>• CVS/Walgreens (select locations)</li>
              <li>• Some diners</li>
              <li>• Bodegas (corner stores)</li>
              <li>• Planet Fitness (some locations)</li>
              <li>• Subway (reduced service)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Closed After Midnight</h3>
            <ul className="text-sm space-y-1">
              <li>• Museums</li>
              <li>• Most retail stores</li>
              <li>• Banks</li>
              <li>• Coffee shops (most)</li>
              <li>• Department stores</li>
            </ul>
          </div>
        </div>
        
        {/* Emergency & Essential Services - NEW */}
        <div className={`mt-4 p-4 rounded-xl border-l-4 border-red-500 ${cardBg}`}>
          <h3 className={`font-medium mb-3 ${headingColor}`}>🚨 Late Night Emergencies</h3>
          <ul className="text-sm space-y-2">
            <li>💊 <strong>24hr Pharmacies:</strong> Duane Reade and CVS have 24-hour locations throughout Manhattan. Search "24 hour pharmacy near me" — locations vary.</li>
            <li>🦷 <strong>Emergency Dental:</strong> NYC has 24hr dental clinics. Search "emergency dentist NYC" — expect $200+ for after-hours visits.</li>
            <li>🏥 <strong>Urgent Care:</strong> CityMD and many ERs open 24/7. For non-life-threatening issues, urgent care is faster and cheaper than ER.</li>
            <li>📞 <strong>Emergency:</strong> 911 for police, fire, ambulance. 311 for non-emergency city services.</li>
          </ul>
        </div>
      </section>
      
      {/* Best Times For */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ⏰ Best Times For...
        </h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Photography</h3>
            <p className="text-sm mt-1">
              Golden hour (1 hour before sunset) for skyline shots. Early morning (6-7 AM) 
              for empty streets. Blue hour (just after sunset) for moody city lights.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Avoiding Crowds</h3>
            <p className="text-sm mt-1">
              Major attractions: Opening time or 2-4 PM. Restaurants: 5:30 PM or after 9 PM. 
              Central Park: Early morning or weekday afternoons.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Shopping</h3>
            <p className="text-sm mt-1">
              Weekday mornings (10-11 AM) for personal attention. Avoid Saturday afternoons 
              in SoHo at all costs. Sunday mornings are surprisingly quiet.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Walking the Brooklyn Bridge</h3>
            <p className="text-sm mt-1">
              Sunrise (minimal crowds, beautiful light) or after 8 PM (locals jogging, 
              tourists mostly gone). Avoid 10 AM - 6 PM on weekends.
            </p>
          </div>
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
              What time do New Yorkers actually wake up?
            </h3>
            <p className="text-sm">
              Most working New Yorkers are up by 6:30-7:30 AM. Finance types are earlier (5:30-6 AM). 
              Creative industries and service workers often start later. Weekends? Brunch doesn't 
              start until 10 AM for a reason.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              When is Times Square least crowded?
            </h3>
            <p className="text-sm">
              Early morning (6-8 AM) before tourist buses arrive, or late at night (after midnight) 
              when it's mostly people coming from Broadway shows. It's never truly empty, but 
              it's much more manageable at these times.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Is it safe to be out at 3 AM in NYC?
            </h3>
            <p className="text-sm">
              Depends on the neighborhood. Midtown, Times Square, East Village, and most of 
              Manhattan are generally fine — just stay aware. Avoid isolated areas, parks, and 
              unfamiliar neighborhoods late at night. Take an Uber if you're unsure.
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
            href={`/${city.slug}/guide/business-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>💼</span>
            <span>NYC Business Hours</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/best-time-to-visit/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🗽</span>
            <span>Best Time to Visit</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/digital-nomad/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🎒</span>
            <span>Digital Nomad Guide</span>
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
      
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2025. Hours and availability may vary by location and season.
      </p>
    </div>
  )
}
