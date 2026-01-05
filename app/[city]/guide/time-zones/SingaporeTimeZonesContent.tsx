'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface SingaporeTimeZonesContentProps {
  city: City
}

export default function SingaporeTimeZonesContent({ city }: SingaporeTimeZonesContentProps) {
  const now = new Date()
  const sgTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Singapore</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>Time Zones</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Singapore Time Zone: SGT (UTC+8) Explained | No Daylight Saving
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Singapore Standard Time (SGT) is UTC+8 year-round with no daylight saving. Same time as 
            Hong Kong, Beijing, Perth. Excellent overlap with Asian markets, limited US overlap.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Current Time in Singapore</div>
              <div className="text-3xl font-bold">{sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>
              <div className="text-sm opacity-90 mt-1">{sgTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">UTC+8</div>
              <div className="text-sm opacity-90">Year-round</div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🕐 Understanding SGT</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold mb-2">Key Facts</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <li className="flex justify-between"><span>Time Zone:</span><span className="font-medium">Singapore Standard Time</span></li>
                <li className="flex justify-between"><span>UTC Offset:</span><span className="font-medium">UTC+8:00</span></li>
                <li className="flex justify-between"><span>IANA Zone:</span><span className="font-mono">Asia/Singapore</span></li>
                <li className="flex justify-between"><span>DST:</span><span className="font-medium text-green-600">None</span></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <h4 className="font-semibold mb-2">Same Time As</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <li>🇭🇰 Hong Kong</li>
                <li>🇨🇳 Beijing, Shanghai</li>
                <li>🇹🇼 Taipei</li>
                <li>🇲🇾 Kuala Lumpur</li>
                <li>🇦🇺 Perth</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌍 Time Difference from Singapore</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold">City</th>
                  <th className="px-4 py-3 text-left font-semibold">Standard</th>
                  <th className="px-4 py-3 text-left font-semibold">DST Period</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><td className="px-4 py-3 font-medium">🇬🇧 London</td><td className="px-4 py-3">SG -8 hours</td><td className="px-4 py-3">SG -7 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇫🇷 Paris</td><td className="px-4 py-3">SG -7 hours</td><td className="px-4 py-3">SG -6 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 New York</td><td className="px-4 py-3">SG -13 hours</td><td className="px-4 py-3">SG -12 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 Los Angeles</td><td className="px-4 py-3">SG -16 hours</td><td className="px-4 py-3">SG -15 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇦🇪 Dubai</td><td className="px-4 py-3" colSpan={2}>SG -4 hours (year-round)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇯🇵 Tokyo</td><td className="px-4 py-3" colSpan={2}>SG +1 hour (year-round)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇦🇺 Sydney</td><td className="px-4 py-3">SG +2 hours</td><td className="px-4 py-3">SG +3 hours</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📞 Best Call Times from Singapore</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold">Region</th>
                  <th className="px-4 py-3 text-left font-semibold">Best SG Time</th>
                  <th className="px-4 py-3 text-left font-semibold">Overlap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">🇯🇵 Japan/Korea</td><td className="px-4 py-3">9 AM - 6 PM</td><td className="px-4 py-3 text-green-600">Excellent</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">🇭🇰 Hong Kong/China</td><td className="px-4 py-3">9 AM - 6 PM</td><td className="px-4 py-3 text-green-600">Same time!</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">🇦🇺 Australia</td><td className="px-4 py-3">9 AM - 4 PM</td><td className="px-4 py-3 text-green-600">Good</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇬🇧 UK/Europe</td><td className="px-4 py-3">3 PM - 7 PM</td><td className="px-4 py-3 text-amber-600">Moderate</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 US East</td><td className="px-4 py-3">9 PM - 11 PM</td><td className="px-4 py-3 text-red-600">Difficult</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 US West</td><td className="px-4 py-3">11 PM - 1 AM</td><td className="px-4 py-3 text-red-600">Very Difficult</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span>
              <div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">SGX, banking</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span>
              <div><div className="font-medium">Work Remote</div><div className="text-sm text-slate-500">Tech Pass, visas</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
