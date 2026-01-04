'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface DubaiTravelGuideContentProps {
  city: City
}

export default function DubaiTravelGuideContent({ city }: DubaiTravelGuideContentProps) {
  const now = new Date()
  const month = now.getMonth()
  
  const getCurrentSeason = () => {
    if (month >= 10 || month <= 2) return { name: 'Winter (Peak)', emoji: '☀️', desc: 'Perfect weather 20-25°C' }
    if (month >= 3 && month <= 4) return { name: 'Spring', emoji: '🌡️', desc: 'Warming up 25-35°C' }
    if (month >= 5 && month <= 8) return { name: 'Summer', emoji: '🔥', desc: 'Extreme heat 35-45°C' }
    return { name: 'Autumn', emoji: '🍂', desc: 'Cooling down 25-35°C' }
  }
  
  const season = getCurrentSeason()

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
            <span>Travel Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Best Time to Visit Dubai 2025: Weather, Events &amp; Seasonal Guide
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Complete Dubai travel guide: November to March offers perfect weather, while summer 
            brings extreme heat but incredible deals. Dubai Shopping Festival, Ramadan considerations, 
            and month-by-month planning tips.
          </p>
        </div>

        {/* Current Season Banner */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Current Season in Dubai</div>
              <div className="text-2xl font-bold">{season.emoji} {season.name}</div>
              <div className="text-sm opacity-90 mt-1">{season.desc}</div>
            </div>
            <div className="text-5xl">🏜️</div>
          </div>
        </div>

        {/* Best Time Overview */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            📅 When to Visit Dubai
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl p-4">
              <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Best Time: November - March</h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Perfect weather: 20-28°C</li>
                <li>• Beach weather without extreme heat</li>
                <li>• Dubai Shopping Festival (Jan)</li>
                <li>• Peak season = higher prices</li>
                <li>• Book hotels 2-3 months ahead</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl p-4">
              <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Avoid: June - August</h3>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Extreme heat: 40-48°C</li>
                <li>• High humidity (60-70%)</li>
                <li>• Outdoor activities impossible</li>
                <li>• BUT: Cheapest prices (50% off)</li>
                <li>• Great for mall/indoor tourism</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Month by Month */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🌡️ Dubai Weather by Month
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Month</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Temp °C</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Crowds</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Prices</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">January</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">14-24°C</td>
                    <td className="px-4 py-3 text-sm text-red-600">High</td>
                    <td className="px-4 py-3 text-sm text-red-600">$$$</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">February</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">15-26°C</td>
                    <td className="px-4 py-3 text-sm text-red-600">High</td>
                    <td className="px-4 py-3 text-sm text-red-600">$$$</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">March</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">18-29°C</td>
                    <td className="px-4 py-3 text-sm text-amber-600">Medium</td>
                    <td className="px-4 py-3 text-sm text-amber-600">$$</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">April</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">22-34°C</td>
                    <td className="px-4 py-3 text-sm text-amber-600">Medium</td>
                    <td className="px-4 py-3 text-sm text-amber-600">$$</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">May</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">26-39°C</td>
                    <td className="px-4 py-3 text-sm text-green-600">Low</td>
                    <td className="px-4 py-3 text-sm text-green-600">$</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">June</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">29-41°C</td>
                    <td className="px-4 py-3 text-sm text-green-600">Very Low</td>
                    <td className="px-4 py-3 text-sm text-green-600">$</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">July</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">30-42°C</td>
                    <td className="px-4 py-3 text-sm text-green-600">Very Low</td>
                    <td className="px-4 py-3 text-sm text-green-600">$</td>
                  </tr>
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-red-700 dark:text-red-300">August</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">31-42°C</td>
                    <td className="px-4 py-3 text-sm text-green-600">Very Low</td>
                    <td className="px-4 py-3 text-sm text-green-600">$</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">September</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">28-39°C</td>
                    <td className="px-4 py-3 text-sm text-green-600">Low</td>
                    <td className="px-4 py-3 text-sm text-green-600">$</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">October</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">24-35°C</td>
                    <td className="px-4 py-3 text-sm text-amber-600">Medium</td>
                    <td className="px-4 py-3 text-sm text-amber-600">$$</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">November</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">20-30°C</td>
                    <td className="px-4 py-3 text-sm text-amber-600">Medium</td>
                    <td className="px-4 py-3 text-sm text-amber-600">$$</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">December</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">16-26°C</td>
                    <td className="px-4 py-3 text-sm text-red-600">Very High</td>
                    <td className="px-4 py-3 text-sm text-red-600">$$$$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Major Events 2025 */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🎊 Dubai Events &amp; Festivals 2025
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🛍️</span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Dubai Shopping Festival</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">December 2024 - January 2025</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    World's longest running shopping festival. Massive discounts, daily raffles 
                    (cars, gold), fireworks, and entertainment across all malls.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌙</span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Ramadan</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">~Feb 28 - Mar 29, 2025</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Holy month of fasting. No eating/drinking in public during daylight. 
                    Restaurants closed until sunset. Beautiful iftar experiences available.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏇</span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">Dubai World Cup</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">March 2025</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    World's richest horse race ($30.5M prize). Glamorous social event at 
                    Meydan Racecourse. Free general admission.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎆</span>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">UAE National Day &amp; New Year's Eve</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">December 2 &amp; December 31</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Spectacular fireworks at Burj Khalifa, Palm Jumeirah, and across the city. 
                    Book restaurants/venues months in advance for NYE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ramadan Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🌙 Visiting During Ramadan
          </h2>
          
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-xl p-6">
            <p className="text-amber-700 dark:text-amber-300 mb-4">
              Ramadan 2025 is expected around <strong>February 28 - March 29</strong>. While Dubai 
              remains tourist-friendly, there are important considerations:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Restrictions</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• No eating/drinking in public (sunrise-sunset)</li>
                  <li>• No smoking in public areas</li>
                  <li>• Modest dress expected</li>
                  <li>• No loud music in public</li>
                  <li>• Alcohol served only after sunset</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Benefits</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• Lower hotel prices</li>
                  <li>• Beautiful iftar experiences</li>
                  <li>• Malls open late (until 2 AM)</li>
                  <li>• Cultural immersion opportunity</li>
                  <li>• Less crowded attractions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            ✈️ Dubai Travel Tips
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">🚇 Getting Around</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Dubai Metro: Clean, cheap (AED 3-8)</li>
                <li>• Taxis: Metered, safe, affordable</li>
                <li>• Uber/Careem: Widely available</li>
                <li>• Water taxis (abras): AED 1</li>
                <li>• Rent a car for desert trips</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">👔 Dress Code</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Beach/pool: Swimwear OK</li>
                <li>• Malls: Casual, shoulders covered</li>
                <li>• Mosques: Conservative (abaya provided)</li>
                <li>• Fine dining: Smart casual</li>
                <li>• More conservative during Ramadan</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">💰 Money Tips</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Currency: AED (1 USD = ~3.67 AED)</li>
                <li>• Cards widely accepted</li>
                <li>• Tipping: 10-15% at restaurants</li>
                <li>• Bargain at souks, not malls</li>
                <li>• No income tax = competitive prices</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">🌡️ Beat the Heat</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Stay hydrated (water everywhere)</li>
                <li>• Use SPF 50+ sunscreen</li>
                <li>• Plan outdoor activities for morning</li>
                <li>• Malls are air-conditioned sanctuaries</li>
                <li>• Hotel pools often temperature-controlled</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🔗 Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href={`/${city.slug}/guide/24-hours-itinerary`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">⏰</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">24 Hours in Dubai</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Daily rhythm, best times</div>
              </div>
            </Link>
            <Link 
              href={`/${city.slug}/guide/work-remote`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">💻</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Work Remote Guide</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Digital nomad visa, coworking</div>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
