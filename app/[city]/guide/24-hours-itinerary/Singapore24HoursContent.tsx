'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface Singapore24HoursContentProps {
  city: City
}

export default function Singapore24HoursContent({ city }: Singapore24HoursContentProps) {
  const now = new Date()
  const sgTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }))
  const hour = sgTime.getHours()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Singapore</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>24 Hours</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            24 Hours in Singapore: The City's Daily Rhythm
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Experience Singapore hour by hour: hawker centres from 6 AM, business district 9-6, 
            evening at Marina Bay, supper culture until 3 AM. MRT runs 5:30 AM - midnight.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Right Now</div>
              <div className="text-3xl font-bold">{sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
              <div className="text-sm opacity-90 mt-1">
                {hour >= 6 && hour < 11 && '🌅 Morning - Kaya toast time'}
                {hour >= 11 && hour < 14 && '🍜 Lunch - Hawker centre rush'}
                {hour >= 14 && hour < 18 && '☀️ Afternoon - Mall AC escape'}
                {hour >= 18 && hour < 21 && '🌆 Evening - Marina Bay lights'}
                {hour >= 21 || hour < 6 && '🌙 Night - Supper time'}
              </div>
            </div>
            <div className="text-4xl">🇸🇬</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">⏰ Essential Timings</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold mb-2">🚇 MRT (Metro)</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• First train: ~5:30 AM</li>
                <li>• Last train: ~11:45 PM</li>
                <li>• Frequency: 2-5 mins (peak)</li>
                <li>• Extended Fri/Sat nights sometimes</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold mb-2">🍽️ Food</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>• Hawker centres: 6 AM - 10 PM</li>
                <li>• Restaurants: 11:30 AM - 10 PM</li>
                <li>• Supper spots: until 2-4 AM</li>
                <li>• 24hr: Mustafa, some kopitiam</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌅 Hour by Hour</h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[50px]"><div className="text-xl">🌅</div><div className="text-xs text-slate-500">6-9 AM</div></div>
                <div>
                  <h3 className="font-semibold">Early Morning</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Kaya toast breakfast at Ya Kun or Toast Box. Joggers at East Coast Park, Botanic Gardens. Hawker centres open. Comfortable temperature before heat.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[50px]"><div className="text-xl">💼</div><div className="text-xs text-slate-500">9 AM-12</div></div>
                <div>
                  <h3 className="font-semibold">Business Morning</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">CBD comes alive. SGX trading (9 AM - 12 PM morning session). Attractions open 10 AM. Heat building - head to malls or museums.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[50px]"><div className="text-xl">🍜</div><div className="text-xs text-slate-500">12-2 PM</div></div>
                <div>
                  <h3 className="font-semibold">Lunch Rush</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Hawker centres packed (Maxwell, Lau Pa Sat). SGX lunch break 12-1 PM. Queue for chicken rice, laksa. Best deals at kopitiams.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[50px]"><div className="text-xl">🏬</div><div className="text-xs text-slate-500">2-6 PM</div></div>
                <div>
                  <h3 className="font-semibold">Afternoon</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Peak heat 32-34°C - stay in AC! Orchard Road malls, Gardens by the Bay (indoor domes), museums. SGX afternoon session 1-5:16 PM.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[50px]"><div className="text-xl">🌆</div><div className="text-xs text-slate-500">6-9 PM</div></div>
                <div>
                  <h3 className="font-semibold">Evening Prime Time</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Sunset ~7 PM. Marina Bay Sands light show (8 PM & 9 PM). Dinner at hawker or restaurant. Gardens by the Bay Supertree light show 7:45 & 8:45 PM.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-4">
                <div className="text-center min-w-[50px]"><div className="text-xl">🌙</div><div className="text-xs text-slate-500">9 PM-2 AM</div></div>
                <div>
                  <h3 className="font-semibold">Night & Supper</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Clarke Quay bars, rooftop lounges. Supper culture: prata at Jalan Kayu, zi char at Geylang, steamboat. Last MRT ~11:45 PM. Taxis/Grab after.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🍜 Hawker Centre Guide</h2>
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
            <p className="text-amber-800 dark:text-amber-200 mb-3"><strong>Hawker centres are Singapore's soul.</strong> Cheap, delicious, communal dining.</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Top Hawker Centres</h4>
                <ul className="text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• Maxwell Food Centre (Chinatown)</li>
                  <li>• Lau Pa Sat (CBD)</li>
                  <li>• Old Airport Road</li>
                  <li>• Tiong Bahru Market</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Must-Try Dishes</h4>
                <ul className="text-amber-700 dark:text-amber-300 space-y-1">
                  <li>• Chicken Rice: $4-6</li>
                  <li>• Laksa: $4-5</li>
                  <li>• Char Kway Teow: $4-5</li>
                  <li>• Roti Prata: $1.50-3</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/travel-guide`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌡️</span>
              <div><div className="font-medium">Best Time to Visit</div><div className="text-sm text-slate-500">Weather, events</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span>
              <div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">SGX, banking</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
