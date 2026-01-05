'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function ParisWorkRemoteContent({ city }: { city: City }) {
  const now = new Date()
  const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }))
  const hour = parisTime.getHours()
  const isWorkHours = hour >= 9 && hour < 18

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work From Paris 2025: French Tech Visa, Coworking & Remote Work Guide</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Complete guide: French Tech Visa for startups, Schengen access, excellent coworking scene (Station F!), and the famous 35-hour work week culture.</p>
        </div>

        <div className={`rounded-xl p-6 mb-10 ${isWorkHours ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gradient-to-r from-purple-600 to-pink-600'} text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Paris Work Status</div>
              <div className="text-2xl font-bold">{isWorkHours ? '💼 Business Hours' : '🌙 After Hours'}</div>
              <div className="text-sm opacity-90 mt-1">{parisTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} CET</div>
            </div>
            <div className="text-right"><div className="text-3xl font-bold">🇪🇺</div><div className="text-sm opacity-90">Schengen</div></div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🛂 Visa Options</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Visa</th><th className="px-4 py-3 text-left">For</th><th className="px-4 py-3 text-left">Duration</th></tr></thead>
              <tbody className="divide-y">
                <tr className="bg-blue-50 dark:bg-blue-900/20"><td className="px-4 py-3 font-medium text-blue-700">French Tech Visa ⭐</td><td className="px-4 py-3">Tech workers/founders</td><td className="px-4 py-3">4 years</td></tr>
                <tr><td className="px-4 py-3 font-medium">Talent Passport</td><td className="px-4 py-3">Skilled workers</td><td className="px-4 py-3">4 years</td></tr>
                <tr><td className="px-4 py-3 font-medium">Long-Stay Visa</td><td className="px-4 py-3">Remote workers</td><td className="px-4 py-3">1 year</td></tr>
                <tr><td className="px-4 py-3 font-medium">Schengen Tourist</td><td className="px-4 py-3">Short visits</td><td className="px-4 py-3">90 days</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏢 Best Coworking Spaces</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Space</th><th className="px-4 py-3 text-left">Monthly</th><th className="px-4 py-3 text-left">Highlight</th></tr></thead>
              <tbody className="divide-y">
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">Station F ⭐</td><td className="px-4 py-3">€195+</td><td className="px-4 py-3">World's largest startup campus</td></tr>
                <tr><td className="px-4 py-3 font-medium">WeWork</td><td className="px-4 py-3">€350+</td><td className="px-4 py-3">Multiple locations</td></tr>
                <tr><td className="px-4 py-3 font-medium">Morning Coworking</td><td className="px-4 py-3">€300+</td><td className="px-4 py-3">Design-focused</td></tr>
                <tr><td className="px-4 py-3 font-medium">Anticafé</td><td className="px-4 py-3">€5/hour</td><td className="px-4 py-3">Pay by time, not drinks</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">💰 Cost of Living</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">€1,200+</div>
              <div className="text-sm text-slate-500">Room/Studio</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">€400</div>
              <div className="text-sm text-slate-500">Food/Month</div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">€85</div>
              <div className="text-sm text-slate-500">Metro Pass</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span>
              <div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">Euronext, banking</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/time-zones`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌍</span>
              <div><div className="font-medium">Time Zone Guide</div><div className="text-sm text-slate-500">CET/CEST</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
