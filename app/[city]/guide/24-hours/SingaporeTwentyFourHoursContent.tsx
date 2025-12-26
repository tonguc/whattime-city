'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeTwentyFourHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const sgTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = sgTime.getHours()
  const timeStr = sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const getTimeStatus = () => {
    if (currentHour >= 6 && currentHour < 9) return { emoji: '☀️', status: 'Morning rush - kopi time!' }
    if (currentHour >= 9 && currentHour < 12) return { emoji: '💼', status: 'Business hours - offices active' }
    if (currentHour >= 12 && currentHour < 14) return { emoji: '🍜', status: 'Lunch hour - hawker centers busy' }
    if (currentHour >= 14 && currentHour < 18) return { emoji: '💼', status: 'Afternoon work - tea break at 3' }
    if (currentHour >= 18 && currentHour < 21) return { emoji: '🍺', status: 'Evening - dinner and drinks' }
    if (currentHour >= 21 && currentHour < 24) return { emoji: '🌃', status: 'Night - Clarke Quay alive' }
    return { emoji: '🌙', status: 'Late night - supper time!' }
  }
  
  const { emoji, status } = getTimeStatus()
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          24 Hours in Singapore
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          How the Lion City moves from dawn kopi to midnight supper
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span>{emoji}</span>
          <span className="text-sm">It's {timeStr} in Singapore — <strong>{status}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Singapore's Rhythm</h2>
        <p>
          Singapore runs like clockwork. Early risers grab <strong>kopi at 6 AM</strong>, 
          lunch crowds hit hawker centers at <strong>12-1 PM</strong>, 
          after-work drinks flow from <strong>6 PM</strong>, and the famous supper culture 
          keeps many places buzzing until <strong>2-3 AM</strong>. Despite being compact, 
          Singapore genuinely never sleeps.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌅 Morning (6 AM - 12 PM)</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>6:00 AM - 7:00 AM ☀️ Early Birds</h3>
            <ul className="text-sm space-y-1">
              <li>• Kopitiams open, uncles gathering for kopi-o</li>
              <li>• Joggers and cyclists at East Coast Park, MacRitchie</li>
              <li>• Wet markets (pasar) at peak activity</li>
              <li>• MRT starts at 5:30 AM, getting busy</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>7:30 AM - 9:00 AM 🚇 Rush Hour</h3>
            <ul className="text-sm space-y-1">
              <li>• MRT packed - Raffles Place, Tanjong Pagar stations busiest</li>
              <li>• Ya Kun, Toast Box queues for kaya toast</li>
              <li>• Office workers grabbing breakfast on the go</li>
              <li>• School runs - roads congested near schools</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>9:00 AM - 12:00 PM 💼 Business Hours</h3>
            <ul className="text-sm space-y-1">
              <li>• Offices fully operational</li>
              <li>• Malls open at 10 AM (quieter until lunch)</li>
              <li>• Tourist attractions open - Gardens by the Bay, Sentosa</li>
              <li>• Hawker centers serving breakfast crowd</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>☀️ Afternoon (12 PM - 6 PM)</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>12:00 PM - 1:30 PM 🍜 Lunch Rush</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Peak hawker hours!</strong> Maxwell, Amoy Street Food Centre packed</li>
              <li>• CBD lunch crowds - expect queues at popular stalls</li>
              <li>• Office workers scattered across food courts</li>
              <li>• Famous stalls often sell out by 1 PM</li>
              <li>• Pro tip: Go at 11:30 AM or 1:30 PM to avoid crowds</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>2:00 PM - 3:30 PM 😴 Post-Lunch Lull</h3>
            <ul className="text-sm space-y-1">
              <li>• Food coma time - offices quieter</li>
              <li>• Mall foot traffic picks up (air-con escape!)</li>
              <li>• Best time for tourist spots - fewer crowds</li>
              <li>• Afternoon tea becoming popular</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>3:30 PM - 6:00 PM ☕ Tea Break & Wind Down</h3>
            <ul className="text-sm space-y-1">
              <li>• Traditional tea break at 3 PM - kopi time!</li>
              <li>• School kids heading to tuition centers</li>
              <li>• Orchard Road getting busier</li>
              <li>• Pre-dinner gym crowd</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌆 Evening (6 PM - 10 PM)</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl border-2 border-blue-300 ${isLight ? 'bg-blue-50' : 'bg-blue-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>6:00 PM - 7:30 PM 🚇 Evening Rush</h3>
            <ul className="text-sm space-y-1">
              <li>• MRT sardine-packed - CBD to heartlands</li>
              <li>• Boat Quay fills with after-work drinkers</li>
              <li>• Gym peak hours at most outlets</li>
              <li>• Some leave early - work-life balance improving</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>7:30 PM - 9:00 PM 🍺 Prime Dining Time</h3>
            <ul className="text-sm space-y-1">
              <li>• Restaurants fully booked - reservations recommended</li>
              <li>• Clarke Quay nightlife warming up</li>
              <li>• Marina Bay Sands light show at 8 PM & 9 PM</li>
              <li>• Gardens by the Bay light show at 7:45 PM & 8:45 PM</li>
              <li>• Families at hawker centers for dinner</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>9:00 PM - 10:00 PM 🎬 Evening Wind Down</h3>
            <ul className="text-sm space-y-1">
              <li>• Movie prime time at Golden Village, Shaw</li>
              <li>• Malls closing (10 PM most days)</li>
              <li>• Night markets at Bugis, Chinatown still active</li>
              <li>• Bar crowds picking up</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌙 Night & Supper (10 PM - 6 AM)</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>10:00 PM - 12:00 AM 🎉 Nightlife Peak</h3>
            <ul className="text-sm space-y-1">
              <li>• Clarke Quay clubs getting started</li>
              <li>• Zouk, Marquee crowds arriving</li>
              <li>• Boat Quay and Robertson Quay lively</li>
              <li>• Last MRT around 12:30 AM</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl border-2 border-purple-300 ${isLight ? 'bg-purple-50' : 'bg-purple-900/20'}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>12:00 AM - 3:00 AM 🍲 Supper Culture!</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Singapore's famous supper scene!</strong></li>
              <li>• Geylang - frog porridge, beef hor fun</li>
              <li>• Jalan Besar - bak kut teh, wonton noodles</li>
              <li>• Newton Food Centre - satay until 2 AM</li>
              <li>• Prata shops - 24-hour classics</li>
              <li>• Al-Ameen for late night Indian Muslim food</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>3:00 AM - 6:00 AM 🌙 The Quiet Hours</h3>
            <ul className="text-sm space-y-1">
              <li>• Club-goers heading home</li>
              <li>• 24-hour Mustafa Centre in Little India still open</li>
              <li>• Shift workers at 24-hour McDonald's, prata shops</li>
              <li>• Early morning fresh produce deliveries</li>
              <li>• Wet markets setting up from 4 AM</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🍜 24-Hour Essentials</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Always Open in Singapore</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-2">🛒 Convenience</p>
              <ul className="space-y-1">
                <li>• 7-Eleven (everywhere)</li>
                <li>• Cheers convenience stores</li>
                <li>• Mustafa Centre (Little India)</li>
                <li>• Some NTUC FairPrice outlets</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">🍜 Food</p>
              <ul className="space-y-1">
                <li>• Lau Pa Sat (CBD)</li>
                <li>• Selected prata shops</li>
                <li>• Some McDonald's locations</li>
                <li>• Geylang food strip (mostly)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What time does the MRT stop running?</h3>
            <p className="text-sm">
              Last trains are around 12:00-12:30 AM on most lines. Night bus services 
              (NightRider) run on weekends. Grab/taxi always available.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is it safe to be out late at night?</h3>
            <p className="text-sm">
              Singapore is one of the safest cities in the world. Walking around at 
              3 AM is completely normal. Just use common sense like anywhere.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the best time for hawker food?</h3>
            <p className="text-sm">
              Avoid 12-1 PM lunch rush. Best times: 11 AM (early lunch), 3-4 PM (quiet), 
              or 6-7 PM (early dinner). Famous stalls can sell out by early afternoon.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/digital-nomad/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🎒</span><span>Digital Nomad Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
