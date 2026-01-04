'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function ParisTimeZonesContent({ city }: { city: City }) {
  const now = new Date()
  const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Paris Time Zone: CET/CEST (UTC+1/+2) Explained</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Central European Time (CET) in winter (UTC+1), CEST in summer (UTC+2). DST changes: last Sunday of March and October.</p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 mb-10 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Current Time in Paris</div>
              <div className="text-3xl font-bold">{parisTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>
              <div className="text-sm opacity-90 mt-1">{parisTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</div>
            </div>
            <div className="text-right"><div className="text-3xl font-bold">CET</div><div className="text-sm opacity-90">UTC+1/+2</div></div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🌍 Time Difference from Paris</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">City</th><th className="px-4 py-3 text-left">Winter (CET)</th><th className="px-4 py-3 text-left">Summer (CEST)</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3 font-medium">🇬🇧 London</td><td className="px-4 py-3">Paris -1 hour</td><td className="px-4 py-3">Paris -1 hour</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 New York</td><td className="px-4 py-3">Paris -6 hours</td><td className="px-4 py-3">Paris -6 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇺🇸 Los Angeles</td><td className="px-4 py-3">Paris -9 hours</td><td className="px-4 py-3">Paris -9 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇯🇵 Tokyo</td><td className="px-4 py-3">Paris +8 hours</td><td className="px-4 py-3">Paris +7 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇸🇬 Singapore</td><td className="px-4 py-3">Paris +7 hours</td><td className="px-4 py-3">Paris +6 hours</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇦🇺 Sydney</td><td className="px-4 py-3">Paris +10 hours</td><td className="px-4 py-3">Paris +8 hours</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">⏰ DST Changes 2025</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 rounded-xl p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Spring Forward</h4>
              <p className="text-sm text-amber-700">March 30, 2025 at 2 AM → 3 AM (CET → CEST)</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Fall Back</h4>
              <p className="text-sm text-blue-700">October 26, 2025 at 3 AM → 2 AM (CEST → CET)</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span><div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">Euronext trading</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span><div><div className="font-medium">Work Remote</div><div className="text-sm text-slate-500">French Tech Visa</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
