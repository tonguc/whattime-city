'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesBusinessHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const laTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = laTime.getHours()
  const currentDay = laTime.getDay() // 0 = Sunday
  const timeStr = laTime.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: true 
  })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'text-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const isBankOpen = currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17
  const isWeekend = currentDay === 0 || currentDay === 6
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Los Angeles Business Hours Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Banks, shops, restaurants, studios, and business hours in the City of Angels
        </p>
        
        {/* Live Status */}
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isBankOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
          <span className="text-sm">
            It's {timeStr} in LA — Banks are {isBankOpen ? 'open' : 'closed'}
          </span>
        </div>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Most businesses in Los Angeles operate <strong>Monday through Friday, 9 AM to 6 PM</strong> (PST/PDT). 
          Retail shops typically open 10 AM - 9 PM daily, banks close at 5-6 PM weekdays, and the entertainment 
          industry follows <strong>studio hours (9 AM - 6 PM)</strong> with production schedules varying widely. 
          LA's 24/7 culture means many services never close.
        </p>
      </section>
      
      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          Los Angeles operates on a unique business rhythm shaped by three major industries: <strong>entertainment, 
          technology, and finance</strong>. Unlike East Coast cities with rigid 9-to-5 schedules, LA embraces 
          flexibility — tech startups in Silicon Beach might start at 10 AM, while film studios run on strict 
          union hours.
        </p>
        <p>
          The city's sprawl creates distinct business districts with different vibes: Downtown LA keeps traditional 
          banking hours, Santa Monica runs on tech startup time, and Hollywood operates around production schedules. 
          Add in LA's car culture and traffic patterns, and you'll find many businesses adjust hours to avoid 
          rush hour chaos.
        </p>
        <p>
          This guide covers standard business hours across LA's major sectors, from banks and retail to studios 
          and restaurants, plus the 24/7 services that keep the city running around the clock.
        </p>
      </section>

      {/* Core Business Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏢 Standard Business Hours
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Business Type</th>
                <th className="text-left p-3 font-medium">Weekday Hours</th>
                <th className="text-left p-3 font-medium">Weekend Hours</th>
                <th className="text-left p-3 font-medium">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 font-medium">Banks</td>
                <td className="p-3">9:00 AM - 5:00 PM</td>
                <td className="p-3">Closed (some Sat 9-2)</td>
                <td className="p-3">Drive-thrus may open earlier</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Corporate Offices</td>
                <td className="p-3">9:00 AM - 6:00 PM</td>
                <td className="p-3">Closed</td>
                <td className="p-3">Tech companies more flexible</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Retail Shops</td>
                <td className="p-3">10:00 AM - 9:00 PM</td>
                <td className="p-3">10:00 AM - 8:00 PM</td>
                <td className="p-3">Malls often close at 10 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Restaurants</td>
                <td className="p-3">Varies (11 AM - 10 PM typical)</td>
                <td className="p-3">10 AM - 11 PM</td>
                <td className="p-3">Many open later on weekends</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Government Offices</td>
                <td className="p-3">8:00 AM - 5:00 PM</td>
                <td className="p-3">Closed</td>
                <td className="p-3">DMV by appointment only</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Post Office</td>
                <td className="p-3">9:00 AM - 5:00 PM</td>
                <td className="p-3">Sat 9-12 (some locations)</td>
                <td className="p-3">Major branches open longer</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Gyms</td>
                <td className="p-3">5:00 AM - 11:00 PM</td>
                <td className="p-3">6:00 AM - 10:00 PM</td>
                <td className="p-3">24/7 options common</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Grocery Stores</td>
                <td className="p-3">6:00 AM - 12:00 AM</td>
                <td className="p-3">6:00 AM - 12:00 AM</td>
                <td className="p-3">Many 24-hour locations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Entertainment Industry Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎬 Entertainment Industry Hours
        </h2>
        
        <p className="mb-4">
          LA's entertainment industry operates on strict union-regulated schedules for crew but maintains 
          flexible hours for executives and creatives.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🎥 Film/TV Production</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Studio Hours:</strong> 9:00 AM - 6:00 PM (executives)</li>
              <li><strong>Production:</strong> Varies widely (12-14 hour days common)</li>
              <li><strong>Call Times:</strong> Often 6:00 AM - 7:00 PM</li>
              <li><strong>Lunch:</strong> 1:00 PM (strictly enforced)</li>
              <li><strong>Friday Wrap:</strong> Often earlier (3-4 PM)</li>
            </ul>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🎵 Music & Entertainment</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Record Labels:</strong> 10:00 AM - 6:00 PM</li>
              <li><strong>Recording Studios:</strong> 24/7 (by session)</li>
              <li><strong>Talent Agencies:</strong> 9:00 AM - 7:00 PM</li>
              <li><strong>Casting:</strong> 10:00 AM - 6:00 PM</li>
              <li><strong>Post-Production:</strong> Flexible, often late hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tech Industry Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💻 Silicon Beach Tech Hours
        </h2>
        
        <p className="mb-4">
          LA's tech scene (concentrated in Santa Monica, Venice, Playa Vista) follows West Coast startup culture 
          with flexible hours and remote-friendly policies.
        </p>
        
        <div className={`p-5 rounded-xl ${cardBg} mb-4`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Typical Tech Startup Schedule</h3>
          <ul className="space-y-2">
            <li><strong>Core Hours:</strong> 10:00 AM - 4:00 PM (when everyone's expected in office)</li>
            <li><strong>Flexible Start:</strong> Anytime 8-10 AM accepted</li>
            <li><strong>Late Workers:</strong> Many stay until 7-8 PM</li>
            <li><strong>Remote Work:</strong> Hybrid common (2-3 days office)</li>
            <li><strong>Fridays:</strong> Often half-days or fully remote</li>
          </ul>
        </div>
        
        <p className="text-sm italic">
          <strong>Note:</strong> Larger tech companies (Google, Snap, TikTok) maintain more traditional 9-6 schedules 
          but with extreme flexibility and remote options.
        </p>
      </section>

      {/* Traffic Impact */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🚗 How Traffic Shapes Business Hours
        </h2>
        
        <p className="mb-4">
          LA's notorious traffic significantly impacts when businesses operate and when people actually work.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl border-2 border-red-300 dark:border-red-700 ${
            isLight ? 'bg-red-50' : 'bg-red-900/20'
          }`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>⚠️ Rush Hour Reality</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Morning Rush:</strong> 7:00-10:00 AM</li>
              <li><strong>Evening Rush:</strong> 4:00-7:00 PM</li>
              <li><strong>Average Commute:</strong> 30-60 minutes each way</li>
              <li><strong>Impact:</strong> Many start work 10 AM to avoid traffic</li>
              <li><strong>Result:</strong> Offices often busy until 7-8 PM</li>
            </ul>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💡 Adapted Schedules</h3>
            <ul className="space-y-2 text-sm">
              <li>Early birds: 7 AM start, 3 PM finish</li>
              <li>Traffic avoiders: 10 AM start, 7 PM finish</li>
              <li>Hybrid workers: Office 2-3 days/week</li>
              <li>Meeting times: 10 AM - 4 PM optimal</li>
              <li>Lunch meetings: Often longer (traffic buffer)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 24/7 Services */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌙 LA's 24/7 Culture
        </h2>
        
        <p className="mb-4">
          Unlike many cities, Los Angeles has extensive 24-hour services across the city.
        </p>
        
        <div className={`p-5 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Always Open in LA</h3>
          <ul className="grid md:grid-cols-2 gap-2 text-sm">
            <li>✓ Many grocery stores (Ralphs, Vons)</li>
            <li>✓ 24 Hour Fitness locations</li>
            <li>✓ CVS/Walgreens pharmacies</li>
            <li>✓ In-N-Out Burger (some locations)</li>
            <li>✓ Gas stations (most)</li>
            <li>✓ LAX airport</li>
            <li>✓ Emergency services</li>
            <li>✓ Some diners (Canter's, Fred 62)</li>
          </ul>
        </div>
      </section>

      {/* Dining Hours */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🍽️ Restaurant & Dining Hours
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-left p-3 font-medium">Breakfast</th>
                <th className="text-left p-3 font-medium">Lunch</th>
                <th className="text-left p-3 font-medium">Dinner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 font-medium">Cafes</td>
                <td className="p-3">7:00-11:00 AM</td>
                <td className="p-3">11:00 AM-3:00 PM</td>
                <td className="p-3">Closed or limited</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Casual Dining</td>
                <td className="p-3">8:00-11:00 AM</td>
                <td className="p-3">11:00 AM-4:00 PM</td>
                <td className="p-3">5:00-10:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Fine Dining</td>
                <td className="p-3">Weekend brunch</td>
                <td className="p-3">Limited</td>
                <td className="p-3">5:30-10:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Food Trucks</td>
                <td className="p-3">Varies</td>
                <td className="p-3">11:00 AM-2:00 PM</td>
                <td className="p-3">5:00-9:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-4 text-sm">
          <strong>LA Dining Culture:</strong> Brunch is huge (10 AM - 2 PM weekends), dinner starts later than 
          East Coast (7-8 PM common), and outdoor dining is year-round.
        </p>
      </section>

      {/* Related Links */}
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          📚 Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/remote-work/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>💻</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Remote Work in LA</span>
              <p className={`text-xs ${mutedColor}`}>Tech industry overlap & coworking</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/call-times/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📞</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Call Times from LA</span>
              <p className={`text-xs ${mutedColor}`}>Best times to call other cities</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
