'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function ParisTravelGuideContent({ city }: { city: City }) {
  const month = new Date().getMonth()
  const season = month >= 3 && month <= 5 ? { name: 'Spring', emoji: '🌸', desc: 'Best time 15-20°C' }
    : month >= 6 && month <= 8 ? { name: 'Summer', emoji: '☀️', desc: 'Peak season 20-25°C' }
    : month >= 9 && month <= 10 ? { name: 'Autumn', emoji: '🍂', desc: 'Beautiful colors 10-18°C' }
    : { name: 'Winter', emoji: '❄️', desc: 'Cold but magical 3-8°C' }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Best Time to Visit Paris 2025: Weather, Events & Seasonal Guide</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Spring (April-June) and Fall (September-October) offer ideal weather and fewer crowds. Avoid August when many Parisians leave and some shops close.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Current Season</div>
              <div className="text-2xl font-bold">{season.emoji} {season.name}</div>
              <div className="text-sm opacity-90 mt-1">{season.desc}</div>
            </div>
            <div className="text-5xl">🗼</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📅 When to Visit</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 rounded-xl p-4">
              <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Best: Apr-Jun, Sep-Oct</h3>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Perfect weather 15-22°C</li>
                <li>• Gardens in bloom (spring)</li>
                <li>• Manageable crowds</li>
                <li>• Outdoor café season</li>
              </ul>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 rounded-xl p-4">
              <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ Avoid: August</h3>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                <li>• Locals on vacation</li>
                <li>• Many shops/restaurants closed</li>
                <li>• Hot and crowded with tourists</li>
                <li>• Less authentic experience</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎊 Major Events 2025</h2>
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-3">
              <span className="text-2xl">🎭</span>
              <div><h3 className="font-semibold">Paris Fashion Week</h3><p className="text-sm text-slate-500">Jan, Mar, Jun, Sep-Oct</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-3">
              <span className="text-2xl">🎆</span>
              <div><h3 className="font-semibold">Bastille Day</h3><p className="text-sm text-slate-500">July 14 - Fireworks at Eiffel Tower</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-3">
              <span className="text-2xl">🎄</span>
              <div><h3 className="font-semibold">Christmas Markets</h3><p className="text-sm text-slate-500">Nov-Dec - Champs-Élysées lights</p></div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/24-hours-itinerary`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">⏰</span>
              <div><div className="font-medium">24 Hours in Paris</div><div className="text-sm text-slate-500">Croissants to cocktails</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span>
              <div><div className="font-medium">Work Remote Guide</div><div className="text-sm text-slate-500">French Tech Visa</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
