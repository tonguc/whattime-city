'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function Paris24HoursContent({ city }: { city: City }) {
  const now = new Date()
  const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))
  const hour = parisTime.getHours()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">24 Hours in Paris: The City's Daily Rhythm</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">From morning croissants to midnight cocktails. Boulangeries open 7 AM, long lunches 12-2 PM, apéro at 6 PM, late dinners from 8 PM.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Right Now</div>
              <div className="text-3xl font-bold">{parisTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
              <div className="text-sm opacity-90 mt-1">
                {hour >= 7 && hour < 10 && '🥐 Petit déjeuner time'}
                {hour >= 10 && hour < 12 && '☕ Mid-morning café'}
                {hour >= 12 && hour < 14 && '🍽️ Déjeuner (lunch)'}
                {hour >= 14 && hour < 18 && '🏛️ Museum/walking time'}
                {hour >= 18 && hour < 20 && '🍷 Apéro hour!'}
                {hour >= 20 || hour < 7 && '✨ Dîner & nightlife'}
              </div>
            </div>
            <div className="text-4xl">🗼</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌅 Hour by Hour</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🥐</div><div className="text-xs text-slate-500">7-10 AM</div></div>
              <div><h3 className="font-semibold">Petit Déjeuner</h3><p className="text-sm text-slate-600 dark:text-slate-300">Boulangeries open. Fresh croissants, pain au chocolat. Café crème at a zinc bar. Markets setting up.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🏛️</div><div className="text-xs text-slate-500">10-12 PM</div></div>
              <div><h3 className="font-semibold">Morning Culture</h3><p className="text-sm text-slate-600 dark:text-slate-300">Museums open (Louvre from 9 AM). Best time before crowds. Galleries, bookshops. Window shopping.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🍽️</div><div className="text-xs text-slate-500">12-2 PM</div></div>
              <div><h3 className="font-semibold">Déjeuner</h3><p className="text-sm text-slate-600 dark:text-slate-300">Sacred lunch time! Many shops close. Prix fixe menus best value. Sit-down is expected. No rush.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">☀️</div><div className="text-xs text-slate-500">2-6 PM</div></div>
              <div><h3 className="font-semibold">Afternoon</h3><p className="text-sm text-slate-600 dark:text-slate-300">Walking neighborhoods (Marais, St-Germain). Parks (Luxembourg, Tuileries). Shopping on Champs-Élysées.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🍷</div><div className="text-xs text-slate-500">6-8 PM</div></div>
              <div><h3 className="font-semibold">L'Apéro</h3><p className="text-sm text-slate-600 dark:text-slate-300">Sacred pre-dinner drinks! Terrasse seating. Wine, pastis, kir. Small bites. Social hour.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">✨</div><div className="text-xs text-slate-500">8 PM+</div></div>
              <div><h3 className="font-semibold">Dîner & Night</h3><p className="text-sm text-slate-600 dark:text-slate-300">Dinner starts late! Reservations essential. Eiffel Tower sparkles hourly until 1 AM. Bars until 2 AM.</p></div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🥐 Café Culture Tips</h2>
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 rounded-xl p-4">
            <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-2">
              <li>• <strong>Terrasse</strong> seats cost more than bar (zinc) seats</li>
              <li>• <strong>"Un café"</strong> = espresso (not drip coffee)</li>
              <li>• Service is included but rounding up is polite</li>
              <li>• Never rush - you're renting the seat</li>
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
              <span className="text-2xl">💼</span><div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">Euronext, banking</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
