'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface SingaporeTravelGuideContentProps {
  city: City
}

export default function SingaporeTravelGuideContent({ city }: SingaporeTravelGuideContentProps) {
  const now = new Date()
  const month = now.getMonth()
  
  const getCurrentSeason = () => {
    if (month >= 11 || month <= 1) return { name: 'Monsoon Season', emoji: '🌧️', desc: 'Wet but warm 24-31°C' }
    if (month >= 2 && month <= 4) return { name: 'Inter-Monsoon', emoji: '⛅', desc: 'Hot & humid 25-33°C' }
    if (month >= 5 && month <= 8) return { name: 'Dry Season', emoji: '☀️', desc: 'Best time 25-32°C' }
    return { name: 'Inter-Monsoon', emoji: '⛅', desc: 'Thunderstorms likely' }
  }
  const season = getCurrentSeason()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Singapore</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>Travel Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Best Time to Visit Singapore 2025: Weather, Events & Seasonal Guide
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Singapore has tropical climate year-round (25-33°C). Best months: June-August (driest). 
            Avoid: December-January (monsoon). Major events: Chinese New Year, F1 Grand Prix, National Day.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Current Season</div>
              <div className="text-2xl font-bold">{season.emoji} {season.name}</div>
              <div className="text-sm opacity-90 mt-1">{season.desc}</div>
            </div>
            <div className="text-5xl">🇸🇬</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📅 When to Visit</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl p-4">
              <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Best: June - August</h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Driest months of the year</li>
                <li>• Great Sale Singapore (Jun-Aug)</li>
                <li>• Singapore Food Festival</li>
                <li>• Comfortable for walking</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-xl p-4">
              <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Monsoon: Nov - Jan</h3>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Heavy afternoon rain daily</li>
                <li>• Still warm (24-30°C)</li>
                <li>• Great hotel deals</li>
                <li>• Indoor attractions shine</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌡️ Weather by Month</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-3 py-2 text-left font-semibold">Month</th>
                  <th className="px-3 py-2 text-left font-semibold">Temp</th>
                  <th className="px-3 py-2 text-left font-semibold">Rain</th>
                  <th className="px-3 py-2 text-left font-semibold">Crowds</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="bg-red-50 dark:bg-red-900/20"><td className="px-3 py-2">Jan</td><td className="px-3 py-2">24-30°C</td><td className="px-3 py-2">🌧️ High</td><td className="px-3 py-2">Medium</td></tr>
                <tr><td className="px-3 py-2">Feb</td><td className="px-3 py-2">24-31°C</td><td className="px-3 py-2">⛅ Medium</td><td className="px-3 py-2">High (CNY)</td></tr>
                <tr><td className="px-3 py-2">Mar</td><td className="px-3 py-2">25-32°C</td><td className="px-3 py-2">⛅ Medium</td><td className="px-3 py-2">Medium</td></tr>
                <tr><td className="px-3 py-2">Apr</td><td className="px-3 py-2">25-32°C</td><td className="px-3 py-2">⛅ Medium</td><td className="px-3 py-2">Medium</td></tr>
                <tr><td className="px-3 py-2">May</td><td className="px-3 py-2">25-32°C</td><td className="px-3 py-2">⛅ Medium</td><td className="px-3 py-2">Low</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-3 py-2 font-medium text-green-700">Jun</td><td className="px-3 py-2">25-32°C</td><td className="px-3 py-2">☀️ Low</td><td className="px-3 py-2">Medium</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-3 py-2 font-medium text-green-700">Jul</td><td className="px-3 py-2">25-31°C</td><td className="px-3 py-2">☀️ Low</td><td className="px-3 py-2">Medium</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-3 py-2 font-medium text-green-700">Aug</td><td className="px-3 py-2">25-31°C</td><td className="px-3 py-2">☀️ Low</td><td className="px-3 py-2">High (Nat Day)</td></tr>
                <tr><td className="px-3 py-2">Sep</td><td className="px-3 py-2">25-31°C</td><td className="px-3 py-2">⛅ Medium</td><td className="px-3 py-2">High (F1)</td></tr>
                <tr><td className="px-3 py-2">Oct</td><td className="px-3 py-2">25-31°C</td><td className="px-3 py-2">⛅ Medium</td><td className="px-3 py-2">Medium</td></tr>
                <tr><td className="px-3 py-2">Nov</td><td className="px-3 py-2">24-31°C</td><td className="px-3 py-2">🌧️ High</td><td className="px-3 py-2">Medium</td></tr>
                <tr className="bg-red-50 dark:bg-red-900/20"><td className="px-3 py-2">Dec</td><td className="px-3 py-2">24-30°C</td><td className="px-3 py-2">🌧️ High</td><td className="px-3 py-2">High (Holidays)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎊 Major Events 2025</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧧</span>
                <div>
                  <h3 className="font-semibold">Chinese New Year</h3>
                  <p className="text-sm text-slate-500">January 29-30, 2025</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Chinatown light-up, River Hongbao, Chingay Parade. Book hotels early!</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏎️</span>
                <div>
                  <h3 className="font-semibold">Singapore F1 Grand Prix</h3>
                  <p className="text-sm text-slate-500">September 2025 (TBC)</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Night race around Marina Bay. Hotels 3-4x normal prices.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇸🇬</span>
                <div>
                  <h3 className="font-semibold">National Day</h3>
                  <p className="text-sm text-slate-500">August 9, 2025</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">60th anniversary! Massive parade at Padang, fireworks over Marina Bay.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/24-hours-itinerary`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">⏰</span>
              <div><div className="font-medium">24 Hours in Singapore</div><div className="text-sm text-slate-500">Hawker centres, nightlife</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span>
              <div><div className="font-medium">Work Remote Guide</div><div className="text-sm text-slate-500">Tech Pass, coworking</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
