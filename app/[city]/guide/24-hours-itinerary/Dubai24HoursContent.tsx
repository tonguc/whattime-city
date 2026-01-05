'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface Dubai24HoursContentProps {
  city: City
}

export default function Dubai24HoursContent({ city }: Dubai24HoursContentProps) {
  const now = new Date()
  const dubaiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }))
  const hour = dubaiTime.getHours()
  
  const getCurrentPeriod = (h: number) => {
    if (h >= 5 && h < 9) return 'early-morning'
    if (h >= 9 && h < 12) return 'morning'
    if (h >= 12 && h < 15) return 'afternoon'
    if (h >= 15 && h < 18) return 'late-afternoon'
    if (h >= 18 && h < 21) return 'evening'
    if (h >= 21 && h < 24) return 'night'
    return 'late-night'
  }
  
  const currentPeriod = getCurrentPeriod(hour)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Hero Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Dubai</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>24 Hours</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            24 Hours in Dubai: The City's Daily Rhythm
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Experience Dubai hour by hour: from sunrise desert safaris to midnight mall shopping. 
            When to brave the heat, the after-dark transformation, and the 24/7 services that 
            never stop in this city of superlatives.
          </p>
        </div>

        {/* Current Time Banner */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Right Now in Dubai</div>
              <div className="text-3xl font-bold">
                {dubaiTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </div>
              <div className="text-sm opacity-90 mt-1">
                {currentPeriod === 'early-morning' && '🌅 Early Morning - Best outdoor time'}
                {currentPeriod === 'morning' && '☀️ Morning - Business hours begin'}
                {currentPeriod === 'afternoon' && '🔥 Afternoon - Stay indoors'}
                {currentPeriod === 'late-afternoon' && '🏙️ Late Afternoon - Heat easing'}
                {currentPeriod === 'evening' && '🌆 Evening - City comes alive'}
                {currentPeriod === 'night' && '✨ Night - Prime time Dubai'}
                {currentPeriod === 'late-night' && '🌙 Late Night - Clubs & lounges'}
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl">🏙️</div>
              <div className="text-sm font-medium mt-1">Dubai</div>
            </div>
          </div>
        </div>

        {/* Key Timings */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            ⏰ Essential Dubai Timings
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">🛒 Shopping</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex justify-between">
                  <span>Malls (weekdays):</span>
                  <span className="font-medium">10 AM - 10 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Malls (weekends):</span>
                  <span className="font-medium">10 AM - 12 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Souks:</span>
                  <span className="font-medium">9 AM - 10 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Supermarkets:</span>
                  <span className="font-medium text-green-600">24/7 (many)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">🍽️ Dining</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex justify-between">
                  <span>Brunch (Fri):</span>
                  <span className="font-medium">12 PM - 4 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Lunch:</span>
                  <span className="font-medium">12 PM - 3 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Dinner:</span>
                  <span className="font-medium">7 PM - 12 AM</span>
                </li>
                <li className="flex justify-between">
                  <span>Late night:</span>
                  <span className="font-medium text-green-600">Until 3-4 AM</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hour by Hour Timeline */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🌅 Dubai: Hour by Hour
          </h2>
          
          <div className="space-y-4">
            
            {/* 5-9 AM */}
            <div className={`bg-white dark:bg-slate-800 rounded-xl border ${currentPeriod === 'early-morning' ? 'border-amber-400 dark:border-amber-500 ring-2 ring-amber-200 dark:ring-amber-900' : 'border-slate-200 dark:border-slate-700'} p-4`}>
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[60px]">
                  <div className="text-2xl">🌅</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">5-9 AM</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Golden Hours (Best Outdoor Time)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    The only comfortable outdoor hours in summer. Sunrise at ~5:30 AM. Joggers hit 
                    JBR Beach and Dubai Marina. Desert safari balloons launch. Golf courses busy. 
                    Temperature: 25-30°C before the heat kicks in.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded">Best beach time</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Desert safaris</span>
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">Outdoor exercise</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 9 AM - 12 PM */}
            <div className={`bg-white dark:bg-slate-800 rounded-xl border ${currentPeriod === 'morning' ? 'border-blue-400 dark:border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900' : 'border-slate-200 dark:border-slate-700'} p-4`}>
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[60px]">
                  <div className="text-2xl">☀️</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">9-12 PM</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Business Morning</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    Offices open (many start at 9 AM). DFM trading begins at 10 AM. Malls open at 10 AM. 
                    Heat already building - transition to indoor activities. Coffee shops fill with 
                    remote workers and business meetings.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">DFM opens 10 AM</span>
                    <span className="text-xs bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">Malls open</span>
                    <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-1 rounded">Business meetings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 12-3 PM */}
            <div className={`bg-white dark:bg-slate-800 rounded-xl border ${currentPeriod === 'afternoon' ? 'border-red-400 dark:border-red-500 ring-2 ring-red-200 dark:ring-red-900' : 'border-slate-200 dark:border-slate-700'} p-4`}>
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[60px]">
                  <div className="text-2xl">🔥</div>
                  <div className="text-xs font-medium text-red-500 dark:text-red-400 mt-1">12-3 PM</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Peak Heat (Stay Indoors)</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    <strong>Avoid outdoor activities.</strong> Temperature peaks at 40-48°C in summer. 
                    This is mall time - Dubai Mall, Mall of the Emirates, and others are air-conditioned 
                    sanctuaries. Lunch at food courts or restaurants. Indoor attractions thrive.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-2 py-1 rounded">Peak heat 40°C+</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Mall time</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded">DFM closes 2:45 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3-6 PM */}
            <div className={`bg-white dark:bg-slate-800 rounded-xl border ${currentPeriod === 'late-afternoon' ? 'border-amber-400 dark:border-amber-500 ring-2 ring-amber-200 dark:ring-amber-900' : 'border-slate-200 dark:border-slate-700'} p-4`}>
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[60px]">
                  <div className="text-2xl">🏙️</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">3-6 PM</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Late Afternoon</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    Heat begins to ease. Indoor attractions still popular. Rooftop pool time at hotels. 
                    Many offices close by 6 PM. Banks close at 3 PM. Desert safari pickups begin (4-5 PM). 
                    Good time for Burj Khalifa At The Top visits.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 px-2 py-1 rounded">Banks close 3 PM</span>
                    <span className="text-xs bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">Safari pickups</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Burj Khalifa sunset</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 6-9 PM */}
            <div className={`bg-white dark:bg-slate-800 rounded-xl border ${currentPeriod === 'evening' ? 'border-orange-400 dark:border-orange-500 ring-2 ring-orange-200 dark:ring-orange-900' : 'border-slate-200 dark:border-slate-700'} p-4`}>
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[60px]">
                  <div className="text-2xl">🌆</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">6-9 PM</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Evening &amp; Sunset</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    Dubai transforms. Sunset around 6-7 PM. Dubai Fountain shows begin (every 30 min). 
                    Temperature drops to 30-35°C - comfortable for outdoor dining. Marina Walk fills up. 
                    Prime restaurant time. JBR Beach Walk comes alive.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">Dubai Fountain</span>
                    <span className="text-xs bg-pink-100 dark:bg-pink-900/50 text-pink-700 dark:text-pink-300 px-2 py-1 rounded">Outdoor dining</span>
                    <span className="text-xs bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">Golden hour photos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 9 PM - 12 AM */}
            <div className={`bg-white dark:bg-slate-800 rounded-xl border ${currentPeriod === 'night' ? 'border-purple-400 dark:border-purple-500 ring-2 ring-purple-200 dark:ring-purple-900' : 'border-slate-200 dark:border-slate-700'} p-4`}>
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[60px]">
                  <div className="text-2xl">✨</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">9 PM-12 AM</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Prime Time Dubai</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    This is when Dubai truly comes alive. Malls packed (open until 10-12 PM). 
                    Restaurants at peak (book ahead). Rooftop bars and lounges buzzing. 
                    Temperature finally pleasant at 25-30°C. Beach walks popular.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">Rooftop bars</span>
                    <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">Peak dining</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded">Pleasant outdoors</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 12-5 AM */}
            <div className={`bg-white dark:bg-slate-800 rounded-xl border ${currentPeriod === 'late-night' ? 'border-indigo-400 dark:border-indigo-500 ring-2 ring-indigo-200 dark:ring-indigo-900' : 'border-slate-200 dark:border-slate-700'} p-4`}>
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[60px]">
                  <div className="text-2xl">🌙</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">12-5 AM</div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Late Night</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                    Clubs run until 3-4 AM. Late-night food spots open (Al Reef Bakery, Operation Falafel). 
                    24-hour supermarkets for midnight cravings. Shawarma joints thriving. 
                    Taxis and Uber readily available. Temperature drops to comfortable 22-28°C.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded">Clubs until 3-4 AM</span>
                    <span className="text-xs bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded">24hr supermarkets</span>
                    <span className="text-xs bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 px-2 py-1 rounded">Late-night shawarma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Friday Brunch */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🥂 Friday Brunch Culture
          </h2>
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/30 dark:to-purple-900/30 border border-pink-200 dark:border-pink-700 rounded-xl p-6">
            <p className="text-pink-800 dark:text-pink-200 mb-4">
              <strong>Friday brunch is a Dubai institution.</strong> Every weekend, hotels and 
              restaurants host elaborate all-you-can-eat-and-drink brunches that last 3-4 hours.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">What to Expect</h4>
                <ul className="text-sm text-pink-700 dark:text-pink-300 space-y-1">
                  <li>• Buffet + unlimited drinks</li>
                  <li>• 12 PM - 4 PM typically</li>
                  <li>• AED 300-600+ per person</li>
                  <li>• Dress code: smart casual</li>
                  <li>• Book 1-2 weeks ahead</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-pink-700 dark:text-pink-300 mb-2">Popular Venues</h4>
                <ul className="text-sm text-pink-700 dark:text-pink-300 space-y-1">
                  <li>• Atlantis The Palm</li>
                  <li>• Bubbalicious (Westin)</li>
                  <li>• Yalumba (Le Méridien)</li>
                  <li>• Saffron (Atlantis)</li>
                  <li>• McGettigan's (Irish pub style)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 24/7 Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🌙 24/7 Services in Dubai
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Open 24/7</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Most Carrefour supermarkets</li>
                <li>• Spinneys (select locations)</li>
                <li>• Choithram (select locations)</li>
                <li>• Many petrol station shops</li>
                <li>• McDonald's (many branches)</li>
                <li>• Dubai Airport (always)</li>
                <li>• Hotel concierges</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Late Night (Until 3-4 AM)</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Al Mallah (shawarma, Satwa)</li>
                <li>• Ravi Restaurant (Pakistani)</li>
                <li>• Operation Falafel</li>
                <li>• Al Reef Bakery (Lebanese)</li>
                <li>• Most hotel restaurants</li>
                <li>• Clubs and lounges</li>
                <li>• Food delivery apps</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🔗 Plan Your Day
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href={`/${city.slug}/guide/travel-guide`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">🌡️</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Best Time to Visit</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Weather, seasons, events</div>
              </div>
            </Link>
            <Link 
              href={`/${city.slug}/guide/time-business`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">💼</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Business Hours</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">DFM, banks, Sun-Thu week</div>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
