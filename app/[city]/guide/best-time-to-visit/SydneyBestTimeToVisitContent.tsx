'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyBestTimeToVisitContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const months = [
    {
      name: 'January',
      temp: '65-79°F (18-26°C)',
      crowd: 'Very High',
      price: '💰💰💰 Expensive',
      icon: '☀️',
      desc: 'Peak summer! New Year celebrations, Sydney Festival, and Australia Day (Jan 26). Beaches are packed, hotel prices peak. Book months ahead.',
    },
    {
      name: 'February',
      temp: '65-78°F (18-26°C)',
      crowd: 'Very High',
      price: '💰💰💰 Expensive',
      icon: '🎭',
      desc: 'Still hot and busy. Sydney Gay and Lesbian Mardi Gras is massive (late Feb/early Mar). Beach weather continues. School holidays end mid-month.',
    },
    {
      name: 'March',
      temp: '63-75°F (17-24°C)',
      crowd: 'Medium-High',
      price: '💰💰 Moderate',
      icon: '🍂',
      desc: 'Autumn begins — perfect weather! Crowds thin after Mardi Gras. Still warm enough for beaches. Excellent time for outdoor activities without the summer crush.',
    },
    {
      name: 'April',
      temp: '59-71°F (15-22°C)',
      crowd: 'Medium',
      price: '💰💰 Moderate',
      icon: '🍁',
      desc: 'Beautiful autumn weather. Easter holidays can be busy. Daylight saving ends (first Sunday). Less humid, comfortable for sightseeing.',
    },
    {
      name: 'May',
      temp: '54-66°F (12-19°C)',
      crowd: 'Low',
      price: '💰 Budget',
      icon: '🍃',
      desc: 'Cooler but still pleasant. Vivid Sydney light festival (late May-June) starts. Off-season prices. Great for hiking and outdoor markets.',
    },
    {
      name: 'June',
      temp: '50-61°F (10-16°C)',
      crowd: 'Medium',
      price: '💰💰 Moderate',
      icon: '🎆',
      desc: 'Winter begins. Vivid Sydney in full swing — harbor lights up! School holidays mid-month can bring domestic tourists. Still mild by global standards.',
    },
    {
      name: 'July',
      temp: '48-60°F (9-16°C)',
      crowd: 'Medium',
      price: '💰💰 Moderate',
      icon: '❄️',
      desc: 'Coldest month, but still warmer than most Northern Hemisphere cities. School holidays bring crowds. Good time for indoor attractions and whale watching begins.',
    },
    {
      name: 'August',
      temp: '50-63°F (10-17°C)',
      crowd: 'Low-Medium',
      price: '💰 Budget',
      icon: '🐋',
      desc: 'Late winter. Peak whale watching season! Quieter tourism. City to Surf fun run. Good hotel deals.',
    },
    {
      name: 'September',
      temp: '54-67°F (12-19°C)',
      crowd: 'Medium',
      price: '💰💰 Moderate',
      icon: '🌸',
      desc: 'Spring arrives! Beautiful weather returns. Festival of the Winds (kite festival at Bondi). Jacaranda trees bloom.',
    },
    {
      name: 'October',
      temp: '58-71°F (14-22°C)',
      crowd: 'Medium-High',
      price: '💰💰 Moderate',
      icon: '🌺',
      desc: 'Daylight saving starts (first Sunday). Perfect weather! Sculpture by the Sea at Bondi. Increasing crowds as summer approaches.',
    },
    {
      name: 'November',
      temp: '61-75°F (16-24°C)',
      crowd: 'High',
      price: '💰💰💰 Higher',
      icon: '🏖️',
      desc: 'Late spring/early summer. Beach season begins. Major events ramp up. Christmas shopping starts. Book ahead for December stays.',
    },
    {
      name: 'December',
      temp: '64-78°F (18-26°C)',
      crowd: 'Very High',
      price: '💰💰💰 Expensive',
      icon: '🎄',
      desc: 'Peak tourist season! Christmas by the beach, NYE fireworks over the harbour. Schools break mid-month. Book 6+ months ahead for NYE.',
    },
  ]
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Visit Sydney
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Complete month-by-month guide to weather, crowds, events, and prices
        </p>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p className="mb-2">
          <strong>Best overall:</strong> March-May (autumn) and September-November (spring) 
          — perfect weather, fewer crowds, reasonable prices.
        </p>
        <p className="mb-2">
          <strong>For beaches:</strong> December-February (summer) — hot and busy, book well ahead.
        </p>
        <p>
          <strong>Budget travel:</strong> May and August — lowest prices, still mild weather.
        </p>
      </section>
      
      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          Here's the thing about Sydney: there's no truly "bad" time to visit. Even in winter 
          (June-August), temperatures rarely drop below 50°F (10°C). You can swim in the ocean 
          year-round if you're brave, and sunny winter days are perfect for coastal walks.
        </p>
        <p>
          That said, timing your visit can make a huge difference to your experience — and your wallet. 
          Summer (December-February) brings packed beaches, skyrocketing hotel prices, and the famous 
          New Year's Eve fireworks. Shoulder seasons offer the sweet spot: gorgeous weather without 
          the crowds.
        </p>
        <p>
          One unique consideration: Sydney's seasons are opposite to the Northern Hemisphere. When 
          Europe and North America are freezing, Sydney is basking in summer sun. This makes it a 
          popular escape during Northern winter holidays.
        </p>
      </section>
      
      {/* Month-by-Month Breakdown */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          📅 Month-by-Month Breakdown
        </h2>
        
        <div className="space-y-4">
          {months.map((month) => (
            <div key={month.name} className={`p-5 rounded-xl border ${
              isLight ? 'border-slate-200' : 'border-slate-600'
            }`}>
              <div className="flex flex-wrap items-start gap-3 mb-3">
                <span className="text-3xl">{month.icon}</span>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-xl font-semibold ${headingColor}`}>{month.name}</h3>
                  <div className="flex flex-wrap gap-3 mt-1 text-sm">
                    <span className={mutedColor}>🌡️ {month.temp}</span>
                    <span className={mutedColor}>👥 Crowds: {month.crowd}</span>
                    <span>{month.price}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm">{month.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Season Deep Dives */}
      <section className="mb-10 space-y-6">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌏 Season Deep Dives
        </h2>
        
        {/* Summer */}
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>
            ☀️ Summer (December - February)
          </h3>
          <p className="mb-3">
            <strong>Weather:</strong> Hot and humid (65-80°F / 18-27°C). Occasional thunderstorms. 
            High UV — sunscreen essential.
          </p>
          <p className="mb-3">
            <strong>Pros:</strong> Beach season! Bondi and Manly are spectacular. Outdoor events like 
            Sydney Festival and Australia Day. Long daylight hours (sunset around 8 PM).
          </p>
          <p className="mb-3">
            <strong>Cons:</strong> Peak tourist season = peak prices. Hotels near beaches book out 
            months ahead. NYE fireworks accommodation requires 6+ month advance booking. Crowds everywhere.
          </p>
          <p>
            <strong>Events:</strong> New Year's Eve Fireworks, Australia Day (Jan 26), Sydney Festival, 
            Tropfest film festival, Mardi Gras (late Feb/early Mar).
          </p>
        </div>
        
        {/* Autumn */}
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>
            🍂 Autumn (March - May)
          </h3>
          <p className="mb-3">
            <strong>Weather:</strong> Warm and pleasant (54-75°F / 12-24°C). Less humid. Still beach-worthy 
            in March and early April.
          </p>
          <p className="mb-3">
            <strong>Pros:</strong> Best weather of the year! Comfortable for sightseeing. Fewer tourists 
            after school holidays. Prices drop. Vivid Sydney light festival starts late May.
          </p>
          <p className="mb-3">
            <strong>Cons:</strong> Easter holidays (April) can bring crowds. Beaches get cooler by late May.
          </p>
          <p>
            <strong>Events:</strong> Royal Easter Show, Granny Smith Festival, Anzac Day (Apr 25), 
            Vivid Sydney begins (late May).
          </p>
        </div>
        
        {/* Winter */}
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>
            ❄️ Winter (June - August)
          </h3>
          <p className="mb-3">
            <strong>Weather:</strong> Mild and dry (48-63°F / 9-17°C). Occasional rain. Rarely below 
            freezing. Sydney's "winter" is milder than most Northern Hemisphere springs.
          </p>
          <p className="mb-3">
            <strong>Pros:</strong> Vivid Sydney transforms the city with lights (May-June). Whale watching 
            season (June-November). Lower hotel prices. Perfect for hiking. Indoor attractions less crowded.
          </p>
          <p className="mb-3">
            <strong>Cons:</strong> Too cold for most to swim. Shorter days. July school holidays bring 
            domestic tourists.
          </p>
          <p>
            <strong>Events:</strong> Vivid Sydney, Sydney Film Festival, City to Surf run, National Rugby 
            League finals.
          </p>
        </div>
        
        {/* Spring */}
        <div className={`p-6 rounded-xl ${cardBg}`}>
          <h3 className={`text-xl font-semibold mb-3 ${headingColor}`}>
            🌸 Spring (September - November)
          </h3>
          <p className="mb-3">
            <strong>Weather:</strong> Beautiful and warming (54-75°F / 12-24°C). Jacaranda trees bloom 
            (purple flowers everywhere!). Beach season restarts by November.
          </p>
          <p className="mb-3">
            <strong>Pros:</strong> Ideal weather! Sculpture by the Sea at Bondi. Coastal walks are 
            spectacular. Gardens bloom. Moderate prices until late November.
          </p>
          <p className="mb-3">
            <strong>Cons:</strong> Melbourne Cup long weekend (early Nov) books out hotels. Crowds increase 
            as summer approaches.
          </p>
          <p>
            <strong>Events:</strong> Sculpture by the Sea, Festival of the Winds, Sydney International Art 
            Series, Melbourne Cup, Sydney to Hobart yacht race preparation.
          </p>
        </div>
      </section>
      
      {/* Budget Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💰 Budget Tips by Season
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Cheapest Months</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>May:</strong> Post-autumn, pre-Vivid</li>
              <li>• <strong>August:</strong> Late winter deals</li>
              <li>• <strong>Early September:</strong> Before spring rush</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Most Expensive</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Late December - Early January:</strong> NYE premium</li>
              <li>• <strong>Late February:</strong> Mardi Gras week</li>
              <li>• <strong>School holidays:</strong> Mid-late Dec, Jan, April, July</li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg border-2 border-dashed ${
          isLight ? 'border-amber-300' : 'border-amber-500/50'
        }`}>
          <p className="text-sm">
            <strong>💡 Pro tip:</strong> Book 3-4 months ahead for autumn/spring, 6+ months for summer, 
            especially if targeting NYE or Mardi Gras. Last-minute deals exist in winter (May-August).
          </p>
        </div>
      </section>
      
      {/* What to Pack */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎒 What to Pack (by Season)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Summer (Dec-Feb)</h3>
            <ul className="text-sm space-y-1">
              <li>• Sunscreen (SPF 50+) — Australian sun is intense!</li>
              <li>• Swimwear, beach towel, hat</li>
              <li>• Light clothing, shorts, sundresses</li>
              <li>• Sunglasses, sandals</li>
              <li>• Light rain jacket (thunderstorms)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Autumn/Spring (Mar-May, Sep-Nov)</h3>
            <ul className="text-sm space-y-1">
              <li>• Layers! Mornings cool, afternoons warm</li>
              <li>• Light jacket or cardigan</li>
              <li>• Comfortable walking shoes</li>
              <li>• Sunscreen still essential</li>
              <li>• Swimwear (early autumn, late spring)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Winter (Jun-Aug)</h3>
            <ul className="text-sm space-y-1">
              <li>• Warm jacket (mornings/evenings)</li>
              <li>• Long pants, closed shoes</li>
              <li>• Scarf (optional — it's mild)</li>
              <li>• Umbrella for occasional rain</li>
              <li>• Still pack sunscreen (UV high year-round!)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Year-Round Essentials</h3>
            <ul className="text-sm space-y-1">
              <li>• Reusable water bottle (free refills everywhere)</li>
              <li>• Power adapter (Australia uses Type I plugs)</li>
              <li>• Opal card for public transport</li>
              <li>• Comfortable walking shoes (Sydney is hilly!)</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Special Events Calendar */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎉 Major Events Calendar 2025
        </h2>
        
        <div className={`overflow-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3 font-medium">Month</th>
                <th className="text-left p-3 font-medium">Event</th>
                <th className="text-left p-3 font-medium">Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">Jan 1</td>
                <td className="p-3">New Year's Eve Fireworks</td>
                <td className="p-3">Massive crowds, hotels book 6-12 months ahead</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Jan 26</td>
                <td className="p-3">Australia Day</td>
                <td className="p-3">Harbour events, some closures</td>
              </tr>
              <tr>
                <td className="p-3">Late Jan-Feb</td>
                <td className="p-3">Sydney Festival</td>
                <td className="p-3">Art shows, performances across city</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Late Feb/Early Mar</td>
                <td className="p-3">Sydney Gay & Lesbian Mardi Gras</td>
                <td className="p-3">Hotels spike in price, Oxford St packed</td>
              </tr>
              <tr>
                <td className="p-3">Late May-Mid Jun</td>
                <td className="p-3">Vivid Sydney</td>
                <td className="p-3">Light festival, harbour crowded evenings</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Sep</td>
                <td className="p-3">Festival of the Winds (Bondi)</td>
                <td className="p-3">Bondi Beach very busy that day</td>
              </tr>
              <tr>
                <td className="p-3">Oct-Nov</td>
                <td className="p-3">Sculpture by the Sea</td>
                <td className="p-3">Bondi to Tamarama coastal walk packed</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3">Dec 26</td>
                <td className="p-3">Sydney to Hobart Yacht Race</td>
                <td className="p-3">Harbour crowded with spectator boats</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      {/* Related Resources */}
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          📚 Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/travel-planning/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>✈️</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Travel Planning</span>
              <p className={`text-xs ${mutedColor}`}>Flight times & jet lag tips</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/holidays/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>📅</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Public Holidays 2025</span>
              <p className={`text-xs ${mutedColor}`}>Full holiday calendar</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
