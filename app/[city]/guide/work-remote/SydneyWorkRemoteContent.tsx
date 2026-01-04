'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function SydneyWorkRemoteContent({ city }: { city: City }) {
  const now = new Date()
  const sydneyTime = new Date(now.toLocaleString('en-US', { timeZone: 'Australia/Sydney' }))
  const hour = sydneyTime.getHours()
  const isWorkHours = hour >= 9 && hour < 17

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work From Sydney 2025: Working Holiday Visa, Coworking & Remote Work Guide</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Complete guide: Working Holiday Visa (417/462) for under 35s, skilled visas, coworking spaces, and Sydney's tech startup scene.</p>
        </div>

        <div className={`rounded-xl p-6 mb-10 ${isWorkHours ? 'bg-gradient-to-r from-green-500 to-teal-500' : 'bg-gradient-to-r from-purple-500 to-pink-500'} text-white`}>
          <div className="flex items-center justify-between">
            <div><div className="text-sm opacity-90 mb-1">Sydney Work Status</div><div className="text-2xl font-bold">{isWorkHours ? '💼 Business Hours' : '🌙 After Hours'}</div><div className="text-sm opacity-90 mt-1">{sydneyTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} AEDT</div></div>
            <div className="text-right"><div className="text-3xl font-bold">WHV</div><div className="text-sm opacity-90">Under 35</div></div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🛂 Visa Options</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Visa</th><th className="px-4 py-3 text-left">For</th><th className="px-4 py-3 text-left">Duration</th></tr></thead>
              <tbody className="divide-y">
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">Working Holiday (417) ⭐</td><td className="px-4 py-3">18-35, select countries</td><td className="px-4 py-3">1 year (extendable)</td></tr>
                <tr><td className="px-4 py-3 font-medium">Work & Holiday (462)</td><td className="px-4 py-3">18-35, other countries</td><td className="px-4 py-3">1 year</td></tr>
                <tr><td className="px-4 py-3 font-medium">Skilled Worker (482)</td><td className="px-4 py-3">Employer sponsored</td><td className="px-4 py-3">2-4 years</td></tr>
                <tr><td className="px-4 py-3 font-medium">Global Talent (858)</td><td className="px-4 py-3">Top talent</td><td className="px-4 py-3">Permanent</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏢 Best Coworking Spaces</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Space</th><th className="px-4 py-3 text-left">Monthly</th><th className="px-4 py-3 text-left">Location</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3 font-medium">WeWork</td><td className="px-4 py-3">A$450+</td><td className="px-4 py-3">Multiple CBD</td></tr>
                <tr><td className="px-4 py-3 font-medium">Hub Australia</td><td className="px-4 py-3">A$500+</td><td className="px-4 py-3">Multiple</td></tr>
                <tr><td className="px-4 py-3 font-medium">Fishburners</td><td className="px-4 py-3">A$250+</td><td className="px-4 py-3">Ultimo (startups)</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">State Library</td><td className="px-4 py-3 text-green-600">FREE</td><td className="px-4 py-3">CBD</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">💰 Cost of Living</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center"><div className="text-2xl font-bold">A$1,400+</div><div className="text-sm text-slate-500">Room/Share</div></div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center"><div className="text-2xl font-bold">A$400</div><div className="text-sm text-slate-500">Food/Month</div></div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center"><div className="text-2xl font-bold">A$50/wk</div><div className="text-sm text-slate-500">Opal Card</div></div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span><div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">ASX, banking</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/time-zones`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌍</span><div><div className="font-medium">Time Zone Guide</div><div className="text-sm text-slate-500">AEST/AEDT</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
