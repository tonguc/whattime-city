'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesBestTimeToVisitContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const greenBg = isLight ? 'bg-green-50' : 'bg-green-900/20'
  const blueBg = isLight ? 'bg-blue-50' : 'bg-blue-900/20'
  const amberBg = isLight ? 'bg-amber-50' : 'bg-amber-900/20'
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Visit Los Angeles
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Weather, seasons, events, and insider tips for planning your LA trip
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${greenBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          The <strong>best time to visit LA is March-May and September-November</strong> — perfect weather 
          (65-75°F), fewer crowds than summer, lower hotel prices, and great outdoor conditions. Summer 
          (June-August) is peak tourist season with crowded beaches and higher prices. Winter (December-February) 
          offers mild weather and lowest prices, but more rain. LA's year-round sunshine means there's never 
          a truly bad time to visit!
        </p>
      </section>

      {/* Month-by-Month Guide */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📅 Month-by-Month Guide
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Month</th>
                <th className="text-left p-3 font-medium">Weather</th>
                <th className="text-left p-3 font-medium">Crowds</th>
                <th className="text-left p-3 font-medium">Prices</th>
                <th className="text-left p-3 font-medium">Rating</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 font-medium">January</td>
                <td className="p-3">Cool, occasional rain (60-65°F)</td>
                <td className="p-3">Low</td>
                <td className="p-3">💰 Cheapest</td>
                <td className="p-3">⭐⭐⭐ Good</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">February</td>
                <td className="p-3">Mild, some rain (60-68°F)</td>
                <td className="p-3">Low</td>
                <td className="p-3">💰 Low</td>
                <td className="p-3">⭐⭐⭐ Good</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-bold">March</td>
                <td className="p-3">Perfect! (65-70°F)</td>
                <td className="p-3">Medium</td>
                <td className="p-3">💰💰 Moderate</td>
                <td className="p-3">⭐⭐⭐⭐⭐ Excellent</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-bold">April</td>
                <td className="p-3">Ideal (65-72°F)</td>
                <td className="p-3">Medium</td>
                <td className="p-3">💰💰 Moderate</td>
                <td className="p-3">⭐⭐⭐⭐⭐ Excellent</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-bold">May</td>
                <td className="p-3">Beautiful (68-75°F)</td>
                <td className="p-3">Medium-High</td>
                <td className="p-3">💰💰 Moderate</td>
                <td className="p-3">⭐⭐⭐⭐⭐ Excellent</td>
              </tr>
              <tr className={amberBg}>
                <td className="p-3 font-medium">June</td>
                <td className="p-3">Warm, "June Gloom" fog (70-78°F)</td>
                <td className="p-3">High</td>
                <td className="p-3">💰💰💰 High</td>
                <td className="p-3">⭐⭐⭐⭐ Very Good</td>
              </tr>
              <tr className={amberBg}>
                <td className="p-3 font-medium">July</td>
                <td className="p-3">Hot (75-85°F)</td>
                <td className="p-3">Very High</td>
                <td className="p-3">💰💰💰 Peak</td>
                <td className="p-3">⭐⭐⭐ Good (crowded)</td>
              </tr>
              <tr className={amberBg}>
                <td className="p-3 font-medium">August</td>
                <td className="p-3">Hot (75-85°F)</td>
                <td className="p-3">Very High</td>
                <td className="p-3">💰💰💰 Peak</td>
                <td className="p-3">⭐⭐⭐ Good (crowded)</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-bold">September</td>
                <td className="p-3">Perfect! (75-80°F)</td>
                <td className="p-3">Medium</td>
                <td className="p-3">💰💰 Moderate</td>
                <td className="p-3">⭐⭐⭐⭐⭐ Excellent</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-bold">October</td>
                <td className="p-3">Ideal (70-78°F)</td>
                <td className="p-3">Medium</td>
                <td className="p-3">💰💰 Moderate</td>
                <td className="p-3">⭐⭐⭐⭐⭐ Excellent</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">November</td>
                <td className="p-3">Pleasant (65-72°F)</td>
                <td className="p-3">Low</td>
                <td className="p-3">💰 Low</td>
                <td className="p-3">⭐⭐⭐⭐ Very Good</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">December</td>
                <td className="p-3">Mild (60-68°F)</td>
                <td className="p-3">Medium (holidays)</td>
                <td className="p-3">💰💰 Moderate</td>
                <td className="p-3">⭐⭐⭐ Good</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Seasonal Breakdown */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌤️ Seasonal Breakdown
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌸 Spring (March-May) ⭐ BEST</h3>
            <p className="text-sm mb-3">
              <strong>Weather:</strong> 65-75°F, minimal rain, blooming flowers<br/>
              <strong>Crowds:</strong> Moderate, manageable<br/>
              <strong>Prices:</strong> Mid-range, great value
            </p>
            <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">Why It's Great:</p>
            <ul className="text-sm space-y-1">
              <li>✓ Perfect beach weather</li>
              <li>✓ Wildflower super blooms (after rain years)</li>
              <li>✓ Lower hotel rates than summer</li>
              <li>✓ Outdoor festivals and concerts</li>
              <li>✓ Clear skies for Hollywood Sign photos</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${amberBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>☀️ Summer (June-August)</h3>
            <p className="text-sm mb-3">
              <strong>Weather:</strong> 70-85°F, hot inland, "June Gloom" coast<br/>
              <strong>Crowds:</strong> Very high, peak season<br/>
              <strong>Prices:</strong> Highest of the year
            </p>
            <p className="text-sm font-medium mb-2">Pros & Cons:</p>
            <ul className="text-sm space-y-1">
              <li>✓ Best beach season</li>
              <li>✓ Outdoor concerts & events</li>
              <li>✓ Long daylight hours</li>
              <li>✗ Crowded attractions</li>
              <li>✗ Higher prices everywhere</li>
              <li>✗ Morning coastal fog (May-June)</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🍂 Fall (September-November) ⭐ BEST</h3>
            <p className="text-sm mb-3">
              <strong>Weather:</strong> 65-80°F, warmest ocean temps<br/>
              <strong>Crowds:</strong> Moderate after Labor Day<br/>
              <strong>Prices:</strong> Drop after summer peak
            </p>
            <p className="text-sm font-medium text-green-700 dark:text-green-400 mb-2">Why It's Great:</p>
            <ul className="text-sm space-y-1">
              <li>✓ Warmest ocean water (September)</li>
              <li>✓ No June Gloom fog</li>
              <li>✓ Perfect hiking weather</li>
              <li>✓ Lower hotel rates</li>
              <li>✓ Less crowded beaches</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌧️ Winter (December-February)</h3>
            <p className="text-sm mb-3">
              <strong>Weather:</strong> 60-68°F, most rain (still mild!)<br/>
              <strong>Crowds:</strong> Low except holidays<br/>
              <strong>Prices:</strong> Lowest rates (Jan-Feb)
            </p>
            <p className="text-sm font-medium mb-2">Best For:</p>
            <ul className="text-sm space-y-1">
              <li>✓ Budget travelers</li>
              <li>✓ Museum & indoor activities</li>
              <li>✓ Avoiding crowds</li>
              <li>✓ Mild escape from cold climates</li>
              <li>✗ Some rain (5-6 days/month)</li>
              <li>✗ Cooler ocean (not ideal for swimming)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Major Events */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎭 Major Events & Festivals
        </h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>🏆 Oscars / Academy Awards</h3>
              <span className="text-sm px-2 py-1 rounded bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">March</span>
            </div>
            <p className="text-sm">Hollywood's biggest night. Book hotels early, expect higher prices.</p>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>🎵 Coachella</h3>
              <span className="text-sm px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">April</span>
            </div>
            <p className="text-sm">Two weekends in Indio (2h from LA). LA hotels fill up with festival-goers.</p>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>🎬 LA Film Festival</h3>
              <span className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">June</span>
            </div>
            <p className="text-sm">Premieres, panels, celebrity sightings downtown.</p>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>🎃 Halloween</h3>
              <span className="text-sm px-2 py-1 rounded bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">October</span>
            </div>
            <p className="text-sm">West Hollywood Carnaval (huge street party), haunted attractions.</p>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>🎆 New Year's Eve</h3>
              <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">December 31</span>
            </div>
            <p className="text-sm">Grand Park downtown, beach parties, expensive but festive.</p>
          </div>
        </div>
      </section>

      {/* Insider Tips */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          💡 Insider Tips
        </h2>
        <ul className="space-y-2">
          <li>🌊 <strong>"June Gloom":</strong> May-June mornings are foggy/overcast at the beach. Clears by afternoon.</li>
          <li>🔥 <strong>Avoid September-October:</strong> Fire season, air quality can be poor during Santa Ana winds.</li>
          <li>🏖️ <strong>Best beach weather:</strong> September-October (warmest ocean, no fog)</li>
          <li>💰 <strong>Book hotels 3+ months ahead:</strong> For summer and major events</li>
          <li>🚗 <strong>Traffic is ALWAYS bad:</strong> No "good traffic" season exists in LA</li>
          <li>☀️ <strong>Sunscreen year-round:</strong> Even winter sun is strong (340 days of sunshine!)</li>
          <li>🌙 <strong>Temperature drops at night:</strong> Bring layers, even in summer</li>
        </ul>
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
            href={`/${city.slug}/guide/travel-planning/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>✈️</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Travel Planning</span>
              <p className={`text-xs ${mutedColor}`}>LAX tips & jet lag</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/business-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🏢</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Business Hours</span>
              <p className={`text-xs ${mutedColor}`}>When things are open</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
