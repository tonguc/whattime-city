'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function SydneyTravelGuideContent({ city }: { city: City }) {
  const month = new Date().getMonth()
  const season = month >= 11 || month <= 1 ? { name: 'Summer', emoji: '☀️', desc: 'Peak season 22-28°C' }
    : month >= 2 && month <= 4 ? { name: 'Autumn', emoji: '🍂', desc: 'Pleasant 18-24°C' }
    : month >= 5 && month <= 7 ? { name: 'Winter', emoji: '🌧️', desc: 'Mild 10-18°C' }
    : { name: 'Spring', emoji: '🌸', desc: 'Beautiful 16-22°C' }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Best Time to Visit Sydney 2025: Weather, Events & Seasonal Guide</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Sydney has mild weather year-round. Best: September-November (spring) or March-May (autumn). Summer (Dec-Feb) is peak season with beaches at their best.</p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div><div className="text-sm opacity-90 mb-1">Current Season</div><div className="text-2xl font-bold">{season.emoji} {season.name}</div><div className="text-sm opacity-90 mt-1">{season.desc}</div></div>
            <div className="text-5xl">🦘</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📅 When to Visit</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 rounded-xl p-4">
              <h3 className="font-bold text-green-800 mb-2">✅ Best: Sep-Nov, Mar-May</h3>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Perfect weather 18-24°C</li>
                <li>• Fewer crowds than summer</li>
                <li>• Lower prices</li>
                <li>• Great for outdoor activities</li>
              </ul>
            </div>
            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 rounded-xl p-4">
              <h3 className="font-bold text-amber-800 mb-2">🏖️ Summer: Dec-Feb</h3>
              <ul className="text-sm text-amber-700 space-y-1">
                <li>• Beach season! 22-28°C</li>
                <li>• NYE fireworks world-famous</li>
                <li>• Most expensive period</li>
                <li>• School holidays = crowds</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎊 Major Events 2025</h2>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-3">
              <span className="text-2xl">🎆</span>
              <div><h3 className="font-semibold">New Year's Eve</h3><p className="text-sm text-slate-500">Dec 31 - Harbour Bridge fireworks (world's first!)</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-3">
              <span className="text-2xl">🌈</span>
              <div><h3 className="font-semibold">Sydney WorldPride/Mardi Gras</h3><p className="text-sm text-slate-500">February-March - LGBTQ+ celebration</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-3">
              <span className="text-2xl">💡</span>
              <div><h3 className="font-semibold">Vivid Sydney</h3><p className="text-sm text-slate-500">May-June - Light festival, Opera House projections</p></div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/24-hours-itinerary`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">⏰</span><div><div className="font-medium">24 Hours in Sydney</div><div className="text-sm text-slate-500">Beaches to bars</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span><div><div className="font-medium">Work Remote Guide</div><div className="text-sm text-slate-500">Working Holiday Visa</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
