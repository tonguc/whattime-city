'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function BestTimeToVisitContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const months = [
    {
      name: 'January',
      temp: '27-39°F (-3 to 4°C)',
      crowd: 'Low',
      price: '💰 Budget',
      icon: '❄️',
      desc: 'Post-holiday quiet. Great hotel deals, but bundle up — temperatures regularly drop below freezing. Indoor attractions like museums and Broadway shows are perfect for this weather.',
    },
    {
      name: 'February',
      temp: '29-42°F (-2 to 6°C)',
      crowd: 'Low',
      price: '💰 Budget',
      icon: '💝',
      desc: 'Still cold, but Fashion Week brings energy to the city. Valentine\'s Day sees restaurant prices spike. Presidents\' Day weekend can be busy at museums.',
    },
    {
      name: 'March',
      temp: '35-50°F (2 to 10°C)',
      crowd: 'Medium',
      price: '💰💰 Moderate',
      icon: '🌷',
      desc: 'Weather is a gamble — could be 60°F or snowing. St. Patrick\'s Day parade brings massive crowds to Fifth Avenue. Spring break travelers start arriving.',
    },
    {
      name: 'April',
      temp: '45-62°F (7 to 17°C)',
      crowd: 'High',
      price: '💰💰💰 Higher',
      icon: '🌸',
      desc: 'Cherry blossoms in Central Park, perfect walking weather. Easter brings families. This is when NYC starts feeling magical — but everyone else knows it too.',
    },
    {
      name: 'May',
      temp: '55-72°F (13 to 22°C)',
      crowd: 'High',
      price: '💰💰💰 Higher',
      icon: '☀️',
      desc: 'Arguably the best month. Warm but not humid, long days, outdoor cafes open. Memorial Day weekend is packed. Book everything well in advance.',
    },
    {
      name: 'June',
      temp: '64-80°F (18 to 27°C)',
      crowd: 'Very High',
      price: '💰💰💰💰 Peak',
      icon: '🎭',
      desc: 'Pride Month brings celebrations and crowds. Schools out means families everywhere. Free outdoor concerts and Shakespeare in the Park. Humidity starts creeping in.',
    },
    {
      name: 'July',
      temp: '69-85°F (21 to 29°C)',
      crowd: 'Very High',
      price: '💰💰💰💰 Peak',
      icon: '🎆',
      desc: 'July 4th fireworks are spectacular but intense. Heat and humidity can be brutal. Rooftop bars thrive. Many New Yorkers actually leave the city.',
    },
    {
      name: 'August',
      temp: '68-84°F (20 to 29°C)',
      crowd: 'High',
      price: '💰💰💰 Higher',
      icon: '🌡️',
      desc: 'Hottest month. Sticky, sweaty, subway platforms become saunas. But it\'s the best time for Broadway deals as locals vacation. US Open tennis starts late month.',
    },
    {
      name: 'September',
      temp: '61-76°F (16 to 24°C)',
      crowd: 'Medium-High',
      price: '💰💰💰 Higher',
      icon: '🍂',
      desc: 'Heat breaks, kids are back in school, perfect walking weather. Fashion Week and UN General Assembly mean parts of Manhattan get hectic. Generally excellent.',
    },
    {
      name: 'October',
      temp: '50-65°F (10 to 18°C)',
      crowd: 'High',
      price: '💰💰💰 Higher',
      icon: '🎃',
      desc: 'Central Park foliage is stunning. Columbus Day weekend is busy. Halloween in the Village is legendary. Crisp, perfect weather — but everyone knows it.',
    },
    {
      name: 'November',
      temp: '42-54°F (6 to 12°C)',
      crowd: 'Very High (late)',
      price: '💰💰 → 💰💰💰💰',
      icon: '🦃',
      desc: 'Early November is underrated and affordable. Then Thanksgiving hits and prices explode. The parade, Black Friday, and holiday season kickoff make late November insane.',
    },
    {
      name: 'December',
      temp: '32-43°F (0 to 6°C)',
      crowd: 'Very High',
      price: '💰💰💰💰 Peak',
      icon: '🎄',
      desc: 'Rockefeller tree, holiday windows, ice skating — it\'s a movie set. But hotels cost a fortune, restaurants need reservations weeks out, and Times Square is a zoo.',
    },
  ]
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Visit New York City
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Month-by-month guide to weather, crowds, prices, and what to expect
        </p>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          The <strong>best time to visit New York</strong> is <strong>late April to early June</strong> or{' '}
          <strong>September to early November</strong>. You'll get pleasant weather (55-75°F), 
          manageable crowds, and the city at its most beautiful. Avoid mid-July to August if you 
          hate humidity, and December if you hate crowds (or love holiday magic and don't mind paying for it).
        </p>
      </section>
      
      {/* Overview Grid */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          At a Glance: NYC by Season
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border-2 ${
            isLight ? 'border-green-200 bg-green-50' : 'border-green-800 bg-green-900/20'
          }`}>
            <h3 className={`font-semibold ${isLight ? 'text-green-800' : 'text-green-300'}`}>
              🌸 Spring (Apr-May)
            </h3>
            <p className="text-sm mt-2">Perfect weather, cherry blossoms, outdoor dining. Prices rise but worth it.</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 ${
            isLight ? 'border-yellow-200 bg-yellow-50' : 'border-yellow-800 bg-yellow-900/20'
          }`}>
            <h3 className={`font-semibold ${isLight ? 'text-yellow-800' : 'text-yellow-300'}`}>
              ☀️ Summer (Jun-Aug)
            </h3>
            <p className="text-sm mt-2">Hot, humid, crowded. Free outdoor events. Broadway deals in August.</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 ${
            isLight ? 'border-orange-200 bg-orange-50' : 'border-orange-800 bg-orange-900/20'
          }`}>
            <h3 className={`font-semibold ${isLight ? 'text-orange-800' : 'text-orange-300'}`}>
              🍂 Fall (Sep-Nov)
            </h3>
            <p className="text-sm mt-2">Stunning foliage, crisp air, fashion weeks. Best overall value.</p>
          </div>
          
          <div className={`p-4 rounded-xl border-2 ${
            isLight ? 'border-blue-200 bg-blue-50' : 'border-blue-800 bg-blue-900/20'
          }`}>
            <h3 className={`font-semibold ${isLight ? 'text-blue-800' : 'text-blue-300'}`}>
              ❄️ Winter (Dec-Mar)
            </h3>
            <p className="text-sm mt-2">Holiday magic in Dec, then bargains Jan-Feb. Cold but cheaper (mostly).</p>
          </div>
        </div>
      </section>
      
      {/* Month by Month */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Month-by-Month Breakdown
        </h2>
        
        <div className="space-y-4">
          {months.map((month) => (
            <div 
              key={month.name}
              className={`p-4 rounded-xl border ${
                isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-800/50'
              }`}
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className="text-3xl">{month.icon}</div>
                <div className="flex-1 min-w-[200px]">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`font-semibold ${headingColor}`}>{month.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      month.crowd === 'Low' ? 'bg-green-100 text-green-700' :
                      month.crowd === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      month.crowd === 'High' || month.crowd === 'Medium-High' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {month.crowd} crowds
                    </span>
                  </div>
                  <p className={`text-sm ${mutedColor}`}>{month.temp} · {month.price}</p>
                  <p className="text-sm mt-2">{month.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Budget Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💰 When to Visit on a Budget
        </h2>
        
        <p className="mb-4">
          Want the cheapest trip possible? Here's the honest truth about saving money in NYC:
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-3 ${headingColor}`}>Cheapest Times to Visit</h3>
          <ol className="space-y-2 text-sm">
            <li><strong>1. January (post-New Year's)</strong> — Hotels drop 40-50% from December peaks. Cold, but museums are warm.</li>
            <li><strong>2. February (except Valentine's week)</strong> — Similar deals, slightly less brutal weather.</li>
            <li><strong>3. Early March</strong> — Before spring break crowds arrive.</li>
            <li><strong>4. August weekdays</strong> — Locals leave, hotels discount. Just bring deodorant.</li>
            <li><strong>5. Early November (before Thanksgiving)</strong> — Fall beauty, pre-holiday prices.</li>
          </ol>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl border-l-4 border-red-500 ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🚨 Avoid These for Budget Travel</h3>
          <ul className="text-sm space-y-1">
            <li>• Thanksgiving week (hotel prices 3x normal)</li>
            <li>• December 20 - January 2 (absolute peak)</li>
            <li>• Fashion Week (early Sept, early Feb)</li>
            <li>• UN General Assembly week (late Sept)</li>
            <li>• Marathon weekend (early November)</li>
          </ul>
        </div>
      </section>
      
      {/* Weather Deep Dive */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌡️ What to Actually Expect Weather-Wise
        </h2>
        
        <p className="mb-4">
          New York has four distinct seasons, and none of them are subtle. Here's what nobody 
          tells you about NYC weather:
        </p>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Summer humidity is no joke</h3>
            <p className="text-sm mt-1">
              It's not just hot — it's sticky. The subway platforms feel like saunas. Your 
              clothes will cling to you. 85°F in NYC feels worse than 95°F in dry climates. 
              July and August afternoons can be genuinely miserable if you're not prepared.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Winter wind is the real enemy</h3>
            <p className="text-sm mt-1">
              35°F sounds manageable until you're walking through the wind tunnels created by 
              skyscrapers. "Feels like" temperatures can be 15-20 degrees colder than actual. 
              Layer up, bring a good scarf, and accept that your face will hurt.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Spring is unpredictable</h3>
            <p className="text-sm mt-1">
              March can swing from 70°F to a snowstorm within days. April and May are generally 
              lovely, but pack layers. One day you're in a t-shirt, the next you need a jacket.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Fall is (usually) perfect</h3>
            <p className="text-sm mt-1">
              September through early November offers the most consistent pleasant weather. 
              Crisp, cool, clear skies. This is when New Yorkers themselves are happiest 
              about living here.
            </p>
          </div>
        </div>
      </section>
      
      {/* Events Calendar */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📅 Major Events to Plan Around
        </h2>
        
        <p className="mb-4">
          These events either make or break a NYC trip depending on your interests:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Worth planning FOR</h3>
            <ul className="text-sm space-y-2">
              <li>🎭 <strong>Broadway Week</strong> (Jan & Sept) — 2-for-1 tickets</li>
              <li>🌸 <strong>Cherry Blossom Festival</strong> (April) — Brooklyn Botanic Garden</li>
              <li>🏳️‍🌈 <strong>Pride March</strong> (June) — Historic celebration</li>
              <li>🎆 <strong>July 4th Fireworks</strong> — Spectacular if you stake out a spot</li>
              <li>🎃 <strong>Village Halloween Parade</strong> (Oct 31) — Uniquely NYC</li>
              <li>🦃 <strong>Macy's Thanksgiving Parade</strong> — Iconic (arrive 6 AM for views)</li>
              <li>🎄 <strong>Rockefeller Tree Lighting</strong> (early Dec) — Magical chaos</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Might want to AVOID</h3>
            <ul className="text-sm space-y-2">
              <li>🎽 <strong>NYC Marathon</strong> (Nov) — Streets closed, transit rerouted</li>
              <li>🏛️ <strong>UN General Assembly</strong> (Sept) — Midtown becomes a fortress</li>
              <li>👗 <strong>Fashion Week</strong> (Feb & Sept) — Hotel prices spike</li>
              <li>🏈 <strong>Super Bowl Sunday</strong> — Great day to visit (everyone's indoors)</li>
              <li>📅 <strong>New Year's Eve Times Square</strong> — Unless you want to stand for 12 hours</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* First Timer Recommendations */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🗽 For First-Time Visitors
        </h2>
        
        <p className="mb-4">
          If this is your first trip to NYC, here's my honest recommendation:
        </p>
        
        <div className={`p-6 rounded-2xl border-2 ${
          isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
        }`}>
          <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
            The Sweet Spot: Late September to Mid-October
          </h3>
          <p className="mb-3">
            This is when NYC is at its absolute best for first-timers. Here's why:
          </p>
          <ul className="space-y-2 text-sm">
            <li>✓ Weather is perfect for walking (60-70°F, low humidity)</li>
            <li>✓ Central Park foliage is stunning</li>
            <li>✓ Kids are back in school, so fewer family crowds</li>
            <li>✓ Broadway fall season has great new shows</li>
            <li>✓ Outdoor activities are still possible</li>
            <li>✓ Restaurant reservations are easier than summer</li>
          </ul>
          <p className={`mt-3 text-sm ${mutedColor}`}>
            Second choice: Late April through May. Similar vibes, just with cherry blossoms 
            instead of fall colors.
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
              Is New York worth visiting in winter?
            </h3>
            <p className="text-sm">
              Absolutely — if you're prepared. December has holiday magic you won't find anywhere 
              else. January and February are cold but offer the best hotel deals of the year. 
              Just pack layers, plan indoor activities, and embrace the cozy restaurant/museum vibe.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              What's the worst time to visit NYC?
            </h3>
            <p className="text-sm">
              Subjectively? Late July to mid-August if you hate heat and humidity. The city can 
              feel oppressive. For crowds and prices, the week between Christmas and New Year's 
              is the most chaotic and expensive time of year.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              How many days do you need in New York?
            </h3>
            <p className="text-sm">
              First visit: 4-5 days minimum to hit the highlights without exhausting yourself. 
              You could spend a lifetime here and not see everything, but 5 days gives you a 
              real taste. 3 days feels rushed; a week is ideal.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>
              Should I visit New York in December?
            </h3>
            <p className="text-sm">
              If you want the holiday experience — tree, ice skating, window displays — yes. 
              But book hotels 2-3 months ahead, expect high prices, and prepare for crowds 
              everywhere from Rockefeller Center to the Dyker Heights lights. It's magical 
              but intense.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Links */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>
          Plan Your Trip
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/travel-planning/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>✈️</span>
            <span>Flight Times & Jet Lag Tips</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/24-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🌆</span>
            <span>24 Hours in NYC</span>
          </Link>
          <Link
            href={`/${city.slug}/guide/holidays/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📅</span>
            <span>NYC Holidays & Closures</span>
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
        Last updated: December 2025. Weather averages based on historical data; actual conditions vary.
      </p>
    </div>
  )
}
