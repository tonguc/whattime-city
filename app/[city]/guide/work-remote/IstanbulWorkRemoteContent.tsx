'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function IstanbulWorkRemoteContent({ city }: { city: City }) {
  const now = new Date()
  const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }))
  const hour = istTime.getHours()
  const isWorkHours = hour >= 9 && hour < 18

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work From Istanbul 2025: Digital Nomad, Coworking & Remote Work Guide</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Affordable cost of living, excellent WiFi, vibrant cafe culture, and a growing startup scene. Tourist visa allows 90-day stays (180-day rule).</p>
        </div>

        <div className={`rounded-xl p-6 mb-10 ${isWorkHours ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-purple-500 to-pink-500'} text-white`}>
          <div className="flex items-center justify-between">
            <div><div className="text-sm opacity-90 mb-1">Istanbul Work Status</div><div className="text-2xl font-bold">{isWorkHours ? '💼 Business Hours' : '🌙 After Hours'}</div><div className="text-sm opacity-90 mt-1">{istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} TRT</div></div>
            <div className="text-right"><div className="text-3xl font-bold">💰</div><div className="text-sm opacity-90">Budget-friendly</div></div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🛂 Visa Options</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Visa</th><th className="px-4 py-3 text-left">Duration</th><th className="px-4 py-3 text-left">Notes</th></tr></thead>
              <tbody className="divide-y">
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">e-Visa (Tourist)</td><td className="px-4 py-3">90 days / 180</td><td className="px-4 py-3">Easy online, most nationalities</td></tr>
                <tr><td className="px-4 py-3 font-medium">Short-Term Residence</td><td className="px-4 py-3">1-2 years</td><td className="px-4 py-3">For stays over 90 days</td></tr>
                <tr><td className="px-4 py-3 font-medium">Work Permit</td><td className="px-4 py-3">1 year</td><td className="px-4 py-3">Requires employer sponsor</td></tr>
                <tr><td className="px-4 py-3 font-medium">Turkuaz Card</td><td className="px-4 py-3">Permanent</td><td className="px-4 py-3">For high-skilled workers</td></tr>
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
                <tr><td className="px-4 py-3 font-medium">Kolektif House</td><td className="px-4 py-3">₺3,000+ (~$90)</td><td className="px-4 py-3">Levent, Şişli</td></tr>
                <tr><td className="px-4 py-3 font-medium">WeWork</td><td className="px-4 py-3">₺5,000+ (~$150)</td><td className="px-4 py-3">Maslak</td></tr>
                <tr><td className="px-4 py-3 font-medium">ATÖLYE</td><td className="px-4 py-3">₺2,500+ (~$75)</td><td className="px-4 py-3">Bomonti</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">Cafes (3rd wave)</td><td className="px-4 py-3 text-green-600">~₺50/day</td><td className="px-4 py-3">Karaköy, Kadıköy</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">💰 Cost of Living (Very Affordable!)</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center"><div className="text-2xl font-bold">$400-800</div><div className="text-sm text-slate-500">Apartment/Month</div></div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center"><div className="text-2xl font-bold">$200</div><div className="text-sm text-slate-500">Food/Month</div></div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4 text-center"><div className="text-2xl font-bold">$50</div><div className="text-sm text-slate-500">Transport/Month</div></div>
          </div>
          <p className="text-sm text-slate-500 mt-4 text-center">Istanbul is one of the most affordable major cities for digital nomads - comparable quality of life to Western Europe at 1/3 the cost.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span><div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">BIST, banking</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/time-zones`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌍</span><div><div className="font-medium">Time Zone Guide</div><div className="text-sm text-slate-500">TRT (UTC+3)</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
