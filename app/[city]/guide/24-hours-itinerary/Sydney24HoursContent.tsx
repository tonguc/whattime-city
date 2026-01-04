'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function Sydney24HoursContent({ city }: { city: City }) {
  const now = new Date()
  const sydneyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }))
  const hour = sydneyTime.getHours()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">24 Hours in Sydney: The City's Daily Rhythm</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">From morning beach swims to rooftop bars at sunset. Sydney starts early, closes relatively early (lockout laws reformed but still early compared to Europe).</p>
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div><div className="text-sm opacity-90 mb-1">Right Now</div><div className="text-3xl font-bold">{sydneyTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
              <div className="text-sm opacity-90 mt-1">
                {hour >= 5 && hour < 9 && '🏊 Morning swim/coffee time'}
                {hour >= 9 && hour < 12 && '☀️ Beach or brunch'}
                {hour >= 12 && hour < 15 && '🍽️ Lunch time'}
                {hour >= 15 && hour < 18 && '🏄 Afternoon activities'}
                {hour >= 18 && hour < 21 && '🌅 Sunset drinks!'}
                {hour >= 21 || hour < 5 && '🍷 Dinner & nightlife'}
              </div>
            </div>
            <div className="text-4xl">🦘</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌅 Hour by Hour</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🏊</div><div className="text-xs text-slate-500">5-8 AM</div></div>
              <div><h3 className="font-semibold">Early Morning</h3><p className="text-sm text-slate-600 dark:text-slate-300">Dawn swim at Bondi Icebergs or ocean pools. Joggers on coastal walk. Cafes opening for flat whites. Surfers at Manly.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">☕</div><div className="text-xs text-slate-500">8-12 PM</div></div>
              <div><h3 className="font-semibold">Morning</h3><p className="text-sm text-slate-600 dark:text-slate-300">World-class coffee culture. Brunch at Bills or Surry Hills cafes. ASX opens 10 AM. Beach fills up.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🍽️</div><div className="text-xs text-slate-500">12-3 PM</div></div>
              <div><h3 className="font-semibold">Lunch</h3><p className="text-sm text-slate-600 dark:text-slate-300">Fish & chips at Sydney Fish Market. Chinatown yum cha. Harbour-side dining at Circular Quay.</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🏖️</div><div className="text-xs text-slate-500">3-6 PM</div></div>
              <div><h3 className="font-semibold">Afternoon</h3><p className="text-sm text-slate-600 dark:text-slate-300">Peak beach time. Bondi to Coogee walk. Opera House tours. Shopping in CBD or Paddington Markets (Sat).</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🌅</div><div className="text-xs text-slate-500">6-9 PM</div></div>
              <div><h3 className="font-semibold">Evening</h3><p className="text-sm text-slate-600 dark:text-slate-300">Sunset drinks at Opera Bar. Rooftop bars in CBD. Dinner in Surry Hills, Newtown. Early dinner common (6-8 PM).</p></div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 flex gap-4">
              <div className="text-center min-w-[50px]"><div className="text-xl">🍷</div><div className="text-xs text-slate-500">9 PM+</div></div>
              <div><h3 className="font-semibold">Night</h3><p className="text-sm text-slate-600 dark:text-slate-300">Bars and clubs in Kings Cross, Darlinghurst, Newtown. Most venues close by 3 AM. Late-night food in Chinatown.</p></div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">☕ Coffee Culture</h2>
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800 mb-2"><strong>Sydney has world-class coffee.</strong> Skip Starbucks - find local roasters.</p>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• <strong>Flat white</strong> = Sydney invention (smooth espresso + microfoam)</li>
              <li>• <strong>Long black</strong> = Australian americano</li>
              <li>• Tipping not expected at cafes</li>
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
              <span className="text-2xl">💼</span><div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">ASX, banking</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
