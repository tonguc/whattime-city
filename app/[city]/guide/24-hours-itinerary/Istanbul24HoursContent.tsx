'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function Istanbul24HoursContent({ city }: { city: City }) {
  const now = new Date()
  const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }))
  const hour = istTime.getHours()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">24 Hours in Istanbul: The City's Daily Rhythm</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">From early simit sellers to late-night meyhane. Istanbul runs late - dinner at 8-9 PM, bars until 4 AM. Bazaars, call to prayer five times daily, çay culture.</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div><div className="text-sm opacity-90 mb-1">Right Now</div><div className="text-3xl font-bold">{istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
              <div className="text-sm opacity-90 mt-1">
                {hour >= 6 && hour < 10 && '🥯 Kahvaltı (breakfast) time'}
                {hour >= 10 && hour < 13 && '🛍️ Grand Bazaar open'}
                {hour >= 13 && hour < 17 && '☕ Çay break'}
                {hour >= 17 && hour < 20 && '🌅 Bosphorus sunset'}
                {hour >= 20 || hour < 6 && '🍽️ Dinner & nightlife'}
              </div>
            </div>
            <div className="text-4xl">🕌</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌅 Hour by Hour</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🥯</div><div className="text-xs text-slate-500">7-10 AM</div></div>
              <div><h3 className="font-semibold">Morning</h3><p className="text-sm text-slate-600">Turkish breakfast (kahvaltı) - elaborate spreads of cheese, olives, eggs, honey. Simit sellers on streets. First call to prayer ~5:30 AM.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🛍️</div><div className="text-xs text-slate-500">10-1 PM</div></div>
              <div><h3 className="font-semibold">Shopping Time</h3><p className="text-sm text-slate-600">Grand Bazaar opens at 9 AM. Best time before crowds. Mosque visits (not during prayer). Museums open.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🍽️</div><div className="text-xs text-slate-500">1-3 PM</div></div>
              <div><h3 className="font-semibold">Lunch</h3><p className="text-sm text-slate-600">Lokanta (local restaurants) for affordable set meals. Döner, pide, lahmacun. Long lunches common. Shops may close 1-2 PM.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">☕</div><div className="text-xs text-slate-500">3-6 PM</div></div>
              <div><h3 className="font-semibold">Çay Time</h3><p className="text-sm text-slate-600">Turkish tea culture at its finest. Çay bahçesi (tea gardens) buzzing. Hammam (Turkish bath) perfect now. BIST closes 6 PM.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🌅</div><div className="text-xs text-slate-500">6-9 PM</div></div>
              <div><h3 className="font-semibold">Evening</h3><p className="text-sm text-slate-600">Bosphorus ferry at sunset. Rooftop bars in Karaköy. Dinner starts late (8-9 PM). Meyhane (tavern) culture begins.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🍷</div><div className="text-xs text-slate-500">9 PM+</div></div>
              <div><h3 className="font-semibold">Nightlife</h3><p className="text-sm text-slate-600">Rakı with meze at meyhane. Live music venues. Clubs in Beyoğlu open until 4 AM+. Late-night döner after parties.</p></div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">☕ Çay Culture</h2>
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 mb-2"><strong>Tea (çay) is life in Istanbul.</strong> Offered everywhere - shops, offices, homes.</p>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Served in tulip-shaped glasses</li>
              <li>• Never refuse - it's hospitality</li>
              <li>• ~₺10-15 at cafes (~$0.30-0.50)</li>
              <li>• Sugar cubes on the side</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/travel-guide`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌡️</span><div><div className="font-medium">Best Time to Visit</div><div className="text-sm text-slate-500">Weather, events</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span><div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">BIST, banking</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
