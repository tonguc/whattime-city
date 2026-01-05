'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function IstanbulTimeZonesContent({ city }: { city: City }) {
  const now = new Date()
  const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Istanbul Time Zone: TRT (UTC+3) Explained - No DST Since 2016</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Turkey Time (TRT) is permanently UTC+3. No daylight saving since 2016! Same time as Moscow, 1 hour ahead of Central Europe in winter, same in summer.</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div><div className="text-sm opacity-90 mb-1">Current Time in Istanbul</div><div className="text-3xl font-bold">{istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div><div className="text-sm opacity-90 mt-1">{istTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div></div>
            <div className="text-right"><div className="text-3xl font-bold">UTC+3</div><div className="text-sm opacity-90">Year-round</div></div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌍 Time Difference from Istanbul</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">City</th><th className="px-4 py-3 text-left">Winter</th><th className="px-4 py-3 text-left">Summer</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3 font-medium">🇬🇧 London</td><td className="px-4 py-3">Istanbul -3 hours</td><td className="px-4 py-3">Istanbul -2 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇫🇷 Paris/Berlin</td><td className="px-4 py-3">Istanbul -2 hours</td><td className="px-4 py-3">Istanbul -1 hour</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 New York</td><td className="px-4 py-3">Istanbul -8 hours</td><td className="px-4 py-3">Istanbul -7 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇦🇪 Dubai</td><td className="px-4 py-3" colSpan={2}>Istanbul -1 hour (year-round)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇸🇬 Singapore</td><td className="px-4 py-3" colSpan={2}>Istanbul +5 hours (year-round)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇯🇵 Tokyo</td><td className="px-4 py-3" colSpan={2}>Istanbul +6 hours (year-round)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">⚠️ No Daylight Saving Time!</h2>
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 rounded-xl p-4">
            <p className="text-amber-800 mb-2"><strong>Turkey abolished DST in 2016</strong> and permanently adopted UTC+3 (former summer time).</p>
            <p className="text-sm text-amber-700">This means:</p>
            <ul className="text-sm text-amber-700 space-y-1 mt-2">
              <li>• In winter, Istanbul is 3 hours ahead of London (not 2)</li>
              <li>• In summer, Istanbul is 2 hours ahead of London (same as before)</li>
              <li>• Dark winter mornings, lighter winter evenings</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span><div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">BIST trading</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span><div><div className="font-medium">Work Remote</div><div className="text-sm text-slate-500">Digital nomad</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
