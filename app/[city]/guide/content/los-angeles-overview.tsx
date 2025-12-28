'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
<<<<<<< HEAD
=======
import { useCityContext } from '@/lib/CityContext'
>>>>>>> main

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

export default function LosAngelesOverviewContent({ city, config, isLight, timeStr }: Props) {
<<<<<<< HEAD
=======
  const { time } = useCityContext()
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = cityTime.getHours()
  
  // Dynamic colors based on theme
>>>>>>> main
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
<<<<<<< HEAD

  return (
    <div className={textColor}>
      {/* Hero Section */}
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Los Angeles Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the City of Angels
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current LA Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Introduction - Natural, conversational tone */}
      <section className="mb-10 space-y-4">
        <p>
          Whether you're coordinating with a Hollywood studio, scheduling a call with a tech startup in 
          Silicon Beach, or planning your dream trip to see the Hollywood sign — understanding 
          LA's time zone is essential.
        </p>
        <p>
          Los Angeles operates on <strong>Pacific Standard Time (PST)</strong> in winter and <strong>Pacific 
          Daylight Time (PDT)</strong> in summer. As the entertainment capital of the world and home to 
          California's booming tech industry, LA's schedule drives everything from movie premieres to 
          product launches.
        </p>
        <p>
          But there's more to LA time than just knowing it's "PST." What matters is understanding 
          when businesses actually open (hint: West Coast work culture starts later than East Coast), 
          how traffic affects meeting times, and when you can realistically expect someone to answer 
          their phone (definitely not during rush hour on the 405).
        </p>
        <p>
          This guide covers everything you need to know — from Hollywood production schedules and tech 
          startup hours to the best times to call LA from abroad and tips for maximizing your California visit.
        </p>
      </section>
      
      {/* Quick Facts Box */}
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: Los Angeles Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Standard Time:</strong> PST (UTC-8)</li>
              <li>• <strong>Daylight Time:</strong> PDT (UTC-7)</li>
              <li>• <strong>Clocks Forward:</strong> Second Sunday of March</li>
              <li>• <strong>Clocks Back:</strong> First Sunday of November</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>New York:</strong> -3 hours</li>
              <li>• <strong>London:</strong> -8 hours</li>
              <li>• <strong>Tokyo:</strong> +17 hours (next day)</li>
              <li>• <strong>Sydney:</strong> +19 hours (next day)</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          Need exact conversions? Try our{' '}
          <Link href="/tools/converter/" className={linkColor}>
            Time Converter
          </Link>
        </p>
      </section>
      
      {/* Guide Navigation Cards */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          📚 Explore This Guide
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          {/* Business Hours */}
          <Link
            href={`/${city.slug}/guide/business-hours/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">💼</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>Business Hours</h3>
                <p className={`text-sm ${mutedColor}`}>
                  When do banks, stores, and restaurants open in LA? Complete guide to California business schedules.
                </p>
              </div>
            </div>
          </Link>

          {/* Best Time to Visit */}
          <Link
            href={`/${city.slug}/guide/best-time-to-visit/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌴</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>Best Time to Visit</h3>
                <p className={`text-sm ${mutedColor}`}>
                  Month-by-month weather guide, tourist seasons, and what to expect year-round in Southern California.
                </p>
              </div>
            </div>
          </Link>

          {/* Remote Work */}
          <Link
            href={`/${city.slug}/guide/remote-work/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">💻</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>Remote Work</h3>
                <p className={`text-sm ${mutedColor}`}>
                  Working with LA teams? Overlap hours with East Coast, Europe, and Asia. Plus coworking spots.
                </p>
              </div>
            </div>
          </Link>

          {/* 24 Hours in LA */}
          <Link
            href={`/${city.slug}/guide/24-hours/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌆</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>24 Hours in LA</h3>
                <p className={`text-sm ${mutedColor}`}>
                  Hour-by-hour guide to LA life: sunrise at the beach, rush hour, late-night tacos, and everything between.
                </p>
              </div>
            </div>
          </Link>

          {/* Call Times */}
          <Link
            href={`/${city.slug}/guide/call-times/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">📞</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>Call Times</h3>
                <p className={`text-sm ${mutedColor}`}>
                  Best times to call LA from NYC, London, Tokyo, and other major cities. Avoid catching people at the beach!
                </p>
              </div>
            </div>
          </Link>

          {/* Stock Market */}
          <Link
            href={`/${city.slug}/guide/stock-market/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">📈</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>Stock Market Hours</h3>
                <p className={`text-sm ${mutedColor}`}>
                  When NYSE and NASDAQ open in LA time. Pre-market, regular hours, and after-hours trading schedules.
                </p>
              </div>
            </div>
          </Link>

          {/* California Holidays */}
          <Link
            href={`/${city.slug}/guide/holidays/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">📅</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>California Holidays</h3>
                <p className={`text-sm ${mutedColor}`}>
                  State and federal holidays when banks, government offices, and many businesses are closed.
                </p>
              </div>
            </div>
          </Link>

          {/* Digital Nomad */}
          <Link
            href={`/${city.slug}/guide/digital-nomad/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">🎒</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>Digital Nomad Guide</h3>
                <p className={`text-sm ${mutedColor}`}>
                  Best neighborhoods, coworking spaces, internet cafes, and cost of living for remote workers in LA.
                </p>
              </div>
            </div>
          </Link>

          {/* Time Difference */}
          <Link
            href={`/${city.slug}/guide/time-difference/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">🌐</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>Time Difference Calculator</h3>
                <p className={`text-sm ${mutedColor}`}>
                  Quick reference for LA vs major cities worldwide. Never miss a meeting across time zones.
                </p>
              </div>
            </div>
          </Link>

          {/* Travel Planning */}
          <Link
            href={`/${city.slug}/guide/travel-planning/`}
            className={`block p-6 rounded-xl border-2 ${
              isLight ? 'border-slate-200 hover:border-amber-400 bg-white' : 'border-slate-700 hover:border-amber-500 bg-slate-800/50'
            } transition-colors`}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">✈️</span>
              <div>
                <h3 className={`font-semibold mb-2 ${headingColor}`}>Travel Planning</h3>
                <p className={`text-sm ${mutedColor}`}>
                  Flight times from major cities, jet lag tips, and what to do in your first 24 hours in LA.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Why LA Time Matters */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎬 Why LA Time Matters
        </h2>
        <div className="space-y-4">
          <p>
            Los Angeles isn't just another city in the Pacific time zone — it's the <strong>global center 
            of entertainment</strong> and a major tech hub. When Hollywood sets a premiere time or a Silicon 
            Beach startup schedules a product launch, the world pays attention.
          </p>
          <p>
            <strong>The entertainment industry</strong> runs on LA time. Movie release schedules, TV show 
            airings, streaming platform drops, and award show broadcasts are all timed to Pacific hours. 
            If you're working in media, entertainment, or content creation, understanding PST/PDT is crucial.
          </p>
          <p>
            <strong>The tech sector</strong> in LA (especially Silicon Beach areas like Santa Monica, Venice, 
            and Playa Vista) operates on Pacific time but often coordinates with San Francisco, Seattle, and 
            international teams. The 3-hour difference from East Coast creates unique scheduling challenges.
          </p>
          <p>
            <strong>West Coast work culture</strong> tends to start later than East Coast (many offices open 
            at 9 AM PST, which is already noon in NYC), but also extends later into the evening. Don't be 
            surprised by 6 PM meeting requests — that's 9 PM for East Coasters!
          </p>
        </div>
      </section>

      {/* LA-Specific Tips */}
      <section className={`mb-10 p-6 rounded-2xl border-l-4 border-blue-500 ${
        isLight ? 'bg-blue-50' : 'bg-blue-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          💡 LA Time Zone Tips
        </h2>
        <ul className="space-y-3">
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Traffic affects everything:</strong> A 9 AM meeting in Downtown LA could require leaving 
            at 7:30 AM from the Westside. Always factor in LA's legendary traffic when scheduling.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Industry lunch culture:</strong> In entertainment, lunch meetings are sacred and 
            typically run 12:30-2:30 PM. Avoid scheduling calls during this window if possible.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Beach proximity:</strong> On Fridays, especially in summer, many Westside offices 
            empty out by 4 PM as people head to the beach. East Coast 5 PM calls = 2 PM PST = risky.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Awards season timing:</strong> During January-March (Oscar season), entertainment 
            industry schedules become unpredictable with screenings, panels, and events.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-blue-500">•</span>
            <span><strong>Pacific = last time zone:</strong> For US-wide launches or announcements, 
            companies often wait until LA business hours, making PST the "go" signal for national rollouts.</span>
          </li>
        </ul>
      </section>

      {/* Related Tools */}
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🛠️ Helpful Time Tools
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/tools/converter/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🔄</span>
            <span className={`font-medium ${headingColor}`}>Time Zone Converter</span>
          </Link>
          <Link
            href="/tools/meeting-planner/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📅</span>
            <span className={`font-medium ${headingColor}`}>Meeting Planner</span>
          </Link>
        </div>
      </section>
    </div>
=======
  
  return (
    <>
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className={`text-5xl font-bold mb-4 ${headingColor}`}>
          {config.icon} {config.cityName} Time Zone: The Complete Guide
        </h1>
        <p className={`text-xl mb-8 ${textColor}`}>{config.tagline}</p>
        
        {/* Current Time */}
        <div className={`${isLight ? 'bg-gradient-to-br from-orange-100 to-orange-50 border-orange-200' : 'bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-orange-700/30'} rounded-2xl p-8 border mb-12`}>
          <p className={`text-sm ${isLight ? 'text-orange-700' : 'text-orange-300'} mb-1`}>
            Current {config.timezoneAbbr} Time:
          </p>
          <p className={`text-6xl font-bold ${headingColor}`}>{timeStr}</p>
        </div>

        {/* Quick Facts */}
        <div className={`${cardBg} rounded-xl p-6 mb-8 border ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
          <h2 className={`text-2xl font-bold mb-4 ${headingColor}`}>
            ⚡ Quick Facts: Los Angeles Time Zone
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className={mutedColor}>Standard Time (PST):</span>
              <strong className={`ml-2 ${textColor}`}>UTC-8 (Nov-Mar)</strong>
            </div>
            <div>
              <span className={mutedColor}>Daylight Time (PDT):</span>
              <strong className={`ml-2 ${textColor}`}>UTC-7 (Mar-Nov)</strong>
            </div>
            <div>
              <span className={mutedColor}>Location:</span>
              <strong className={`ml-2 ${textColor}`}>California, USA</strong>
            </div>
            <div>
              <span className={mutedColor}>Difference from NYC:</span>
              <strong className={`ml-2 ${textColor}`}>3 hours behind</strong>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className={`prose ${isLight ? 'prose-slate' : 'prose-invert'} max-w-none mb-12`}>
          <p className={`text-lg leading-relaxed ${textColor}`}>
            Los Angeles runs on <strong>Pacific Time</strong> — 3 hours behind New York. Whether you're calling East Coast clients, 
            watching morning stock markets, or coordinating with international teams, understanding LA's time zone is essential.
          </p>
        </div>

        {/* Guide Sections */}
        <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
          Explore the Complete Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {config.clusters.map((cluster) => (
            <Link
              key={cluster.slug}
              href={`/${config.citySlug}/guide/${cluster.slug}`}
              className="block group"
            >
              <div className={`${cardBg} rounded-lg p-6 border ${isLight ? 'border-slate-200 hover:border-orange-400 hover:bg-orange-50' : 'border-slate-800 hover:border-orange-700 hover:bg-slate-800'} transition`}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{cluster.icon}</span>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-2 ${headingColor} group-hover:text-orange-400 transition`}>
                      {cluster.title}
                    </h3>
                    <p className={`text-sm ${mutedColor}`}>{cluster.desc}</p>
                  </div>
                  <span className={`${mutedColor} group-hover:text-orange-400 transition`}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className={`prose ${isLight ? 'prose-slate' : 'prose-invert'} max-w-none`}>
          <h2 className={`text-3xl font-bold mb-6 ${headingColor}`}>
            Understanding Los Angeles Time
          </h2>
          
          <h3 className={`text-2xl font-semibold mt-8 mb-4 ${headingColor}`}>
            PST vs PDT: What's the Difference?
          </h3>
          <p className={textColor}>
            LA uses <strong>Pacific Standard Time (PST, UTC-8)</strong> in winter and <strong>Pacific Daylight Time (PDT, UTC-7)</strong> 
            in summer. The switch happens in March (spring forward) and November (fall back).
          </p>

          <h3 className={`text-2xl font-semibold mt-8 mb-4 ${headingColor}`}>
            Why Does LA Time Matter Globally?
          </h3>
          <p className={textColor}>
            Beyond beaches and movies, LA is a major business hub. Entertainment industry, tech companies, and international trade 
            all run on Pacific Time. When Wall Street opens at 9:30 AM EST, it's only 6:30 AM in LA.
          </p>

          <h3 className={`text-2xl font-semibold mt-8 mb-4 ${headingColor}`}>
            What You'll Find in This Guide
          </h3>
          <p className={textColor}>This guide covers everything about LA time:</p>
          <ul className={textColor}>
            <li><strong>Business Hours:</strong> When do banks, stores, and restaurants open?</li>
            <li><strong>Best Time to Visit:</strong> Weather and crowds by month</li>
            <li><strong>Remote Work:</strong> Overlap with NYC, London, Tokyo teams</li>
            <li><strong>Stock Market:</strong> NASDAQ hours from Pacific Time perspective</li>
            <li><strong>Call Times:</strong> Best windows for international calls</li>
          </ul>
        </div>
      </div>
    </>
>>>>>>> main
  )
}
