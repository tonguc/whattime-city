'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

export default function SydneyGuideContent({ city, config, isLight, timeStr }: Props) {
  const { time } = useCityContext()
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = cityTime.getHours()
  const currentMonth = cityTime.getMonth()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  // Sydney is in DST from October to April
  const isDST = currentMonth >= 9 || currentMonth <= 3
  
  const clusters = [
    {
      slug: 'business-hours',
      icon: '💼',
      title: 'Business Hours',
      desc: 'Banks, offices, stores, and government hours in Sydney',
    },
    {
      slug: 'best-time-to-visit',
      icon: '🏖️',
      title: 'Best Time to Visit',
      desc: 'Month-by-month weather, crowds, and events guide',
    },
    {
      slug: 'remote-work',
      icon: '💻',
      title: 'Remote Work Guide',
      desc: 'Working with Sydney teams across time zones',
    },
    {
      slug: '24-hours',
      icon: '🌆',
      title: '24 Hours in Sydney',
      desc: "The harbour city's daily rhythm from dawn to night",
    },
    {
      slug: 'call-times',
      icon: '📞',
      title: 'Best Time to Call',
      desc: 'Optimal calling times from major cities worldwide',
    },
    {
      slug: 'stock-market',
      icon: '📈',
      title: 'Stock Market Hours',
      desc: 'ASX trading times for global investors',
    },
    {
      slug: 'holidays',
      icon: '📅',
      title: 'Public Holidays 2025',
      desc: 'Bank holidays, closures, and what to expect',
    },
    {
      slug: 'digital-nomad',
      icon: '🎒',
      title: 'Digital Nomad Guide',
      desc: 'Coworking, cafes, WiFi, and cost of living',
    },
    {
      slug: 'time-difference',
      icon: '🌐',
      title: 'Time Difference',
      desc: 'Sydney time compared to London, NYC, Tokyo, and more',
    },
    {
      slug: 'travel-planning',
      icon: '✈️',
      title: 'Travel Planning',
      desc: 'Flight times, jet lag tips, and arrival advice',
    },
  ]
  
  return (
    <div className={textColor}>
      {/* Hero Section */}
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Sydney Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Everything you need to know about time in Australia's harbour city
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Sydney Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Introduction - Natural, conversational tone */}
      <section className="mb-10 space-y-4">
        <p>
          If you've ever tried to schedule a meeting with someone in Sydney, figure out when 
          the ASX opens, or wondered what time to call your Australian colleagues without 
          waking them up — you know that Sydney's time zone can be tricky to navigate.
        </p>
        <p>
          Sydney operates on <strong>Australian Eastern Time (AET)</strong>, which is either AEST 
          (Australian Eastern Standard Time, UTC+10) or AEDT (Australian Eastern Daylight Time, UTC+11), 
          depending on the season. Unlike the Northern Hemisphere, Sydney's daylight saving runs from 
          October to April — right through the Australian summer.
        </p>
        <p>
          But knowing the offset is just the start. What really helps is understanding Sydney's 
          daily rhythm — when business hours begin, when the beaches get crowded, when cafes 
          fill with remote workers, and the best windows for international calls.
        </p>
        <p>
          Whether you're planning a trip to see the Opera House, coordinating with Sydney-based 
          teams, or considering a digital nomad stint in Bondi, this guide has everything you need.
        </p>
      </section>
      
      {/* Quick Facts Box */}
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: Sydney Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Standard Time:</strong> AEST (UTC+10)</li>
              <li>• <strong>Daylight Saving:</strong> AEDT (UTC+11)</li>
              <li>• <strong>DST Starts:</strong> First Sunday of October</li>
              <li>• <strong>DST Ends:</strong> First Sunday of April</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>London:</strong> +11 hours (usually)</li>
              <li>• <strong>New York:</strong> +16 hours</li>
              <li>• <strong>Tokyo:</strong> +2 hours</li>
              <li>• <strong>Singapore:</strong> +3 hours</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          Need exact conversions? Try our{' '}
          <Link href="/time-converter/" className={linkColor}>Time Converter</Link>
        </p>
      </section>
      
      {/* Guide Topics Grid */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Explore the Complete Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {clusters.map(cluster => (
            <Link
              key={cluster.slug}
              href={`/${city.slug}/guide/${cluster.slug}/`}
              className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                isLight 
                  ? 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-amber-500/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{cluster.icon}</span>
                <div>
                  <h3 className={`font-semibold ${headingColor}`}>{cluster.title}</h3>
                  <p className={`text-sm mt-1 ${mutedColor}`}>{cluster.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Understanding Sydney Time - Detailed content */}
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding Sydney Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          AEST vs AEDT: What's the Difference?
        </h3>
        <p>
          Here's something that trips up Northern Hemisphere travelers: Sydney observes daylight 
          saving time, but on the <em>opposite</em> schedule to Europe and North America. When 
          New York "springs forward" in March, Sydney is actually "falling back" — and vice versa.
        </p>
        <p>
          <strong>AEST (Australian Eastern Standard Time)</strong> is UTC+10 and runs from the 
          first Sunday of April to the first Sunday of October. This is Sydney's winter time.
        </p>
        <p>
          <strong>AEDT (Australian Eastern Daylight Time)</strong> is UTC+11 and runs from the 
          first Sunday of October to the first Sunday of April. Clocks move <em>forward</em> one 
          hour in spring (October) and <em>back</em> one hour in autumn (April).
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Why New York Matters Globally
        </h3>
        <p>
          Beyond Wall Street, New York is the de facto "coordination hub" for many global operations. 
          Companies around the world often align their schedules, calls, and deadlines to accommodate 
          New York business hours — especially those working with American clients or markets.
        </p>
        <p>
          This means that even if you're based in Sydney or Singapore, you'll frequently find yourself 
          calculating, "What time is it in New York right now?" Understanding EST/EDT helps you coordinate 
          effectively.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Twice a Year, the Gap Changes
        </h3>
        <p>
          Because Sydney and most Northern Hemisphere cities switch to daylight saving on different 
          dates, the time difference shifts twice a year. For a few weeks in March-April and 
          October-November, the gap between Sydney and cities like London or New York is one hour 
          different than usual.
        </p>
        <p>
          This can cause confusion for standing meetings. Always double-check your calendar during 
          the DST transition weeks, especially if you schedule recurring international calls.
        </p>
      </section>
      
      {/* What You'll Find in This Guide */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          What You'll Find in This Guide
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h4 className={`font-medium ${headingColor}`}>For Business Travelers & Professionals</h4>
            <p className="text-sm mt-1">
              Check out{' '}
              <Link href={`/${city.slug}/guide/business-hours/`} className={linkColor}>Business Hours</Link>,{' '}
              <Link href={`/${city.slug}/guide/stock-market/`} className={linkColor}>ASX Stock Market Hours</Link>, and{' '}
              <Link href={`/${city.slug}/guide/call-times/`} className={linkColor}>Best Time to Call</Link>{' '}
              for practical coordination tips.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h4 className={`font-medium ${headingColor}`}>For Remote Workers & Global Teams</h4>
            <p className="text-sm mt-1">
              The{' '}
              <Link href={`/${city.slug}/guide/remote-work/`} className={linkColor}>Remote Work Guide</Link>{' '}
              and{' '}
              <Link href={`/${city.slug}/guide/time-difference/`} className={linkColor}>Time Difference</Link>{' '}
              pages will help you coordinate across time zones.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h4 className={`font-medium ${headingColor}`}>For Tourists & Visitors</h4>
            <p className="text-sm mt-1">
              Start with{' '}
              <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={linkColor}>Best Time to Visit</Link>,{' '}
              <Link href={`/${city.slug}/guide/travel-planning/`} className={linkColor}>Travel Planning</Link>, and{' '}
              <Link href={`/${city.slug}/guide/24-hours/`} className={linkColor}>24 Hours in Sydney</Link>.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h4 className={`font-medium ${headingColor}`}>For Digital Nomads</h4>
            <p className="text-sm mt-1">
              The{' '}
              <Link href={`/${city.slug}/guide/digital-nomad/`} className={linkColor}>Digital Nomad Guide</Link>{' '}
              covers coworking spaces, beach-side cafes, costs, and visa options for remote work in Sydney.
            </p>
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className={`mb-10 p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🛠️ Helpful Tools
        </h2>
        <p className="mb-4">
          Need to do a quick calculation? These tools work great alongside this guide:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/time-converter/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🔄</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Time Converter</span>
              <p className={`text-xs ${mutedColor}`}>Convert between any time zones</p>
            </div>
          </Link>
          <Link
            href="/meeting/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📅</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Meeting Planner</span>
              <p className={`text-xs ${mutedColor}`}>Find the best time for everyone</p>
            </div>
          </Link>
          <Link
            href="/flight-time/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>✈️</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Flight Time Calculator</span>
              <p className={`text-xs ${mutedColor}`}>Estimate your arrival time</p>
            </div>
          </Link>
          <Link
            href="/jet-lag-advisor/"
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>😴</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Jet Lag Calculator</span>
              <p className={`text-xs ${mutedColor}`}>Plan your sleep schedule</p>
            </div>
          </Link>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Is Sydney AEST or AEDT right now?
            </h3>
            <p className="text-sm">
              {isDST
                ? "Sydney is currently on AEDT (Australian Eastern Daylight Time), which is UTC+11. Clocks will 'fall back' to AEST in April."
                : "Sydney is currently on AEST (Australian Eastern Standard Time), which is UTC+10. Clocks will 'spring forward' to AEDT in October."
              }
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              How many hours ahead is Sydney from London?
            </h3>
            <p className="text-sm">
              Sydney is typically 11 hours ahead of London (GMT), but this can vary slightly when 
              the UK and Australia are on different daylight saving schedules. During the Northern 
              Hemisphere summer, the gap may be 9-10 hours, while in Australian summer it's 11 hours.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              What time does the Australian Stock Exchange open?
            </h3>
            <p className="text-sm">
              The ASX (Australian Securities Exchange) opens at 10:00 AM and closes at 4:00 PM Sydney time, 
              Monday through Friday. Pre-market trading starts at 7:00 AM, and after-hours trading 
              extends to 5:10 PM. See our{' '}
              <Link href={`/${city.slug}/guide/stock-market/`} className={linkColor}>
                stock market hours guide
              </Link>{' '}
              for global time conversions.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              When is the best time to call Sydney from the US?
            </h3>
            <p className="text-sm">
              If you're on the US East Coast, early evening your time (6 PM - 9 PM) corresponds to 
              morning in Sydney (9 AM - 12 PM), which is ideal for business calls. West Coast callers 
              should aim for 3 PM - 6 PM Pacific Time. Check our{' '}
              <Link href={`/${city.slug}/guide/call-times/`} className={linkColor}>
                call times guide
              </Link>{' '}
              for detailed schedules.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Does Sydney observe Daylight Saving Time?
            </h3>
            <p className="text-sm">
              Yes, Sydney follows daylight saving time. Clocks move forward one hour on the first 
              Sunday of October (start of summer) and back one hour on the first Sunday of April 
              (start of autumn). Note that not all Australian states observe DST — Queensland, 
              Western Australia, and Northern Territory stay on standard time year-round.
            </p>
          </div>
        </div>
      </section>
      
      {/* Closing CTA */}
      <section className={`p-6 rounded-2xl text-center ${
        isLight ? 'bg-gradient-to-r from-amber-50 to-orange-50' : 'bg-gradient-to-r from-amber-900/30 to-orange-900/30'
      }`}>
        <h2 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need the Current Time in Sydney?
        </h2>
        <p className={`mb-4 ${mutedColor}`}>
          Check our live clock with weather, sunrise/sunset times, and harbour views.
        </p>
        <Link
          href={`/${city.slug}/`}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
            isLight 
              ? 'bg-slate-800 text-white hover:bg-slate-700' 
              : 'bg-white text-slate-800 hover:bg-slate-100'
          }`}
        >
          View Sydney Time Now →
        </Link>
      </section>
      
      {/* Last Updated */}
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2025. Information is reviewed monthly for accuracy.
      </p>
    </div>
  )
}
