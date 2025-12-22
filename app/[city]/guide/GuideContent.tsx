'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function GuideContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  // Get current NYC time
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
  
  const clusters = [
    {
      slug: 'business-hours',
      icon: '💼',
      title: 'Business Hours',
      desc: 'Banks, offices, stores, and government hours in NYC',
    },
    {
      slug: 'best-time-to-visit',
      icon: '🗽',
      title: 'Best Time to Visit',
      desc: 'Month-by-month weather, crowds, and events guide',
    },
    {
      slug: 'remote-work',
      icon: '💻',
      title: 'Remote Work Guide',
      desc: 'Working with NYC teams across time zones',
    },
    {
      slug: '24-hours',
      icon: '🌆',
      title: '24 Hours in NYC',
      desc: "The city's daily rhythm from dawn to night",
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
      desc: 'NYSE & NASDAQ trading times for global investors',
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
      desc: 'NYC time compared to London, Tokyo, Dubai, and more',
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
          New York Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Everything you need to know about time in the city that never sleeps
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current NYC Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      {/* Introduction - Natural, conversational tone */}
      <section className="mb-10 space-y-4">
        <p>
          If you've ever tried to schedule a meeting with someone in New York, figure out when 
          the stock market opens, or wondered if that store on Fifth Avenue will still be open 
          when you arrive — you know how confusing time zones can be.
        </p>
        <p>
          New York City runs on <strong>Eastern Time (ET)</strong>, which is either EST (Eastern 
          Standard Time, UTC-5) or EDT (Eastern Daylight Time, UTC-4), depending on the time of year. 
          The city switches to daylight saving time in March and falls back in November.
        </p>
        <p>
          But knowing the technical details is just the beginning. What really matters is understanding 
          how time works <em>in practice</em> in New York — when businesses actually open, when the 
          subway gets packed, and when you can realistically expect someone to answer your call.
        </p>
        <p>
          That's exactly what this guide covers. Whether you're planning a trip, coordinating with 
          colleagues, or just curious about life in NYC, you'll find everything you need below.
        </p>
      </section>
      
      {/* Quick Facts Box */}
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: New York Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Standard Time:</strong> EST (UTC-5)</li>
              <li>• <strong>Daylight Saving:</strong> EDT (UTC-4)</li>
              <li>• <strong>DST Starts:</strong> Second Sunday of March</li>
              <li>• <strong>DST Ends:</strong> First Sunday of November</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>London:</strong> +5 hours (usually)</li>
              <li>• <strong>Tokyo:</strong> +14 hours</li>
              <li>• <strong>Dubai:</strong> +9 hours</li>
              <li>• <strong>Los Angeles:</strong> -3 hours</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          Need exact conversions? Try our{' '}
          <Link href="/tools/converter/" className={linkColor}>Time Converter</Link>
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
      
      {/* Understanding NYC Time - Detailed content */}
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding New York Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          EST vs EDT: What's the Difference?
        </h3>
        <p>
          Here's something that trips up a lot of people: New York isn't always on EST (Eastern 
          Standard Time). For about 8 months of the year, the city actually observes EDT (Eastern 
          Daylight Time), which is one hour ahead.
        </p>
        <p>
          The switch happens in March when clocks "spring forward" by an hour, and again in November 
          when they "fall back." If you're scheduling something months in advance, it's worth double-checking 
          whether daylight saving time will be in effect.
        </p>
        <p className={`${mutedColor} text-sm`}>
          Pro tip: When in doubt, just say "Eastern Time" or "ET" — that automatically accounts for 
          whichever one is currently active.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Why New York Time Matters Globally
        </h3>
        <p>
          New York isn't just any city — it's the financial capital of the world. When Wall Street 
          opens at 9:30 AM Eastern, traders in London, Tokyo, and Sydney are all paying attention. 
          The{' '}
          <Link href={`/${city.slug}/guide/stock-market/`} className={linkColor}>
            NYSE trading hours
          </Link>{' '}
          essentially set the rhythm for global markets.
        </p>
        <p>
          Beyond finance, New York serves as the headquarters for countless international businesses, 
          media companies, and the United Nations. Understanding NYC time is practically a requirement 
          for anyone working in global business.
        </p>
      </section>
      
      {/* What You'll Find Section */}
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          What You'll Find in This Guide
        </h2>
        
        <p>
          I've organized this guide into sections based on what people actually need to know. 
          Here's a quick overview:
        </p>
        
        <div className="space-y-3 mt-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h4 className={`font-medium ${headingColor}`}>For Business Travelers & Professionals</h4>
            <p className="text-sm mt-1">
              Check out{' '}
              <Link href={`/${city.slug}/guide/business-hours/`} className={linkColor}>Business Hours</Link>,{' '}
              <Link href={`/${city.slug}/guide/stock-market/`} className={linkColor}>Stock Market Hours</Link>, and{' '}
              <Link href={`/${city.slug}/guide/call-times/`} className={linkColor}>Best Time to Call</Link>.
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
              <Link href={`/${city.slug}/guide/24-hours/`} className={linkColor}>24 Hours in NYC</Link>.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h4 className={`font-medium ${headingColor}`}>For Digital Nomads</h4>
            <p className="text-sm mt-1">
              The{' '}
              <Link href={`/${city.slug}/guide/digital-nomad/`} className={linkColor}>Digital Nomad Guide</Link>{' '}
              covers coworking spaces, cafes, costs, and tips for working remotely in NYC.
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
            href="/tools/converter/"
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
            href="/tools/meeting-planner/"
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
            href="/tools/flight-times/"
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
            href="/tools/jet-lag/"
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
              Is New York EST or EDT right now?
            </h3>
            <p className="text-sm">
              {currentHour >= 2 && new Date().getMonth() >= 2 && new Date().getMonth() <= 10
                ? "New York is currently on EDT (Eastern Daylight Time), which is UTC-4. Clocks will 'fall back' to EST in November."
                : "New York is currently on EST (Eastern Standard Time), which is UTC-5. Clocks will 'spring forward' to EDT in March."
              }
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              How many hours ahead is New York from California?
            </h3>
            <p className="text-sm">
              New York is always 3 hours ahead of California (Pacific Time). When it's 9 AM in 
              New York, it's 6 AM in Los Angeles. Both states observe daylight saving time on 
              the same dates, so the difference stays constant year-round.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              What time does New York Stock Exchange open?
            </h3>
            <p className="text-sm">
              The NYSE opens at 9:30 AM and closes at 4:00 PM Eastern Time, Monday through Friday. 
              Pre-market trading starts as early as 4:00 AM, and after-hours trading continues until 
              8:00 PM. See our{' '}
              <Link href={`/${city.slug}/guide/stock-market/`} className={linkColor}>
                stock market hours guide
              </Link>{' '}
              for times in your local zone.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              When is the best time to call New York from Europe?
            </h3>
            <p className="text-sm">
              If you're in the UK or Western Europe, aim for late afternoon your time (2 PM - 6 PM). 
              That corresponds to morning in New York (9 AM - 1 PM), which is ideal for business calls. 
              Check our{' '}
              <Link href={`/${city.slug}/guide/call-times/`} className={linkColor}>
                call times guide
              </Link>{' '}
              for other regions.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Does New York observe Daylight Saving Time?
            </h3>
            <p className="text-sm">
              Yes, New York follows DST along with most of the United States. Clocks move forward 
              one hour on the second Sunday of March and back one hour on the first Sunday of November. 
              This has been the pattern since 2007 under the Energy Policy Act.
            </p>
          </div>
        </div>
      </section>
      
      {/* Closing CTA */}
      <section className={`p-6 rounded-2xl text-center ${
        isLight ? 'bg-gradient-to-r from-amber-50 to-orange-50' : 'bg-gradient-to-r from-amber-900/30 to-orange-900/30'
      }`}>
        <h2 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need the Current Time in New York?
        </h2>
        <p className={`mb-4 ${mutedColor}`}>
          Check our live clock with weather, sunrise/sunset times, and more.
        </p>
        <Link
          href={`/${city.slug}/`}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
            isLight 
              ? 'bg-slate-800 text-white hover:bg-slate-700' 
              : 'bg-white text-slate-800 hover:bg-slate-100'
          }`}
        >
          View New York Time Now →
        </Link>
      </section>
      
      {/* Last Updated */}
      <p className={`mt-8 text-sm ${mutedColor}`}>
        Last updated: December 2025. Information is reviewed monthly for accuracy.
      </p>
    </div>
  )
}
