'use client'
import { City } from '@/lib/cities'
import Link from 'next/link'

export default function IstanbulTimeBusinessContent({ city }: { city: City }) {
  const now = new Date()
  const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Istanbul' }))
  const hour = istTime.getHours()
  const day = istTime.getDay()
  const isWeekend = day === 0 || day === 6
  const isMarketOpen = !isWeekend && hour >= 10 && hour < 18

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Istanbul Business Hours, Borsa Istanbul Trading & Turkish Holidays 2025</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">Complete guide: BIST trading hours (10 AM - 6 PM TRT), Turkish public holidays, banking hours, and working with Turkish businesses.</p>
        </div>

        <div className={`rounded-xl p-6 mb-10 ${isMarketOpen ? 'bg-gradient-to-r from-red-500 to-red-600' : 'bg-gradient-to-r from-slate-600 to-slate-700'} text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Borsa Istanbul (BIST)</div>
              <div className="text-2xl font-bold">{isMarketOpen ? '🟢 Piyasa Açık' : '🔴 Piyasa Kapalı'}</div>
              <div className="text-sm opacity-90 mt-1">{istTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} TRT</div>
            </div>
            <div className="text-4xl">🇹🇷</div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">📈 BIST Trading Hours</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Session</th><th className="px-4 py-3 text-left">Time (TRT)</th><th className="px-4 py-3 text-left">UTC</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3">Pre-Session</td><td className="px-4 py-3 font-medium">9:40 AM - 10:00 AM</td><td className="px-4 py-3 text-slate-500">6:40 - 7:00 UTC</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">Continuous Trading</td><td className="px-4 py-3 font-bold text-green-700">10:00 AM - 6:00 PM</td><td className="px-4 py-3 text-green-600">7:00 - 15:00 UTC</td></tr>
                <tr><td className="px-4 py-3">Closing Session</td><td className="px-4 py-3 font-medium">6:00 PM - 6:10 PM</td><td className="px-4 py-3 text-slate-500">15:00 - 15:10 UTC</td></tr>
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 rounded-xl p-4">
            <h4 className="font-semibold text-red-800 mb-2">🕐 Turkey Time (TRT)</h4>
            <p className="text-sm text-red-700">Turkey permanently switched to UTC+3 in 2016, no longer observing DST. This is same as Moscow time.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎉 Turkish Public Holidays 2025</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead><tr className="bg-slate-50 dark:bg-slate-700/50"><th className="px-4 py-3 text-left">Holiday</th><th className="px-4 py-3 text-left">Date 2025</th></tr></thead>
              <tbody className="divide-y">
                <tr><td className="px-4 py-3 font-medium">🎆 New Year's Day</td><td className="px-4 py-3">January 1 (Wed)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇹🇷 National Sovereignty Day</td><td className="px-4 py-3">April 23 (Wed)</td></tr>
                <tr><td className="px-4 py-3 font-medium">👷 Labour Day</td><td className="px-4 py-3">May 1 (Thu)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🇹🇷 Commemoration of Atatürk</td><td className="px-4 py-3">May 19 (Mon)</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">🌙 Eid al-Fitr (Ramazan Bayramı)</td><td className="px-4 py-3 text-green-600">March 30 - April 1 (3 days)</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">🐑 Eid al-Adha (Kurban Bayramı)</td><td className="px-4 py-3 text-green-600">June 6-9 (4 days)</td></tr>
                <tr><td className="px-4 py-3 font-medium">🎖️ Democracy Day</td><td className="px-4 py-3">July 15 (Tue)</td></tr>
                <tr className="bg-red-50 dark:bg-red-900/20"><td className="px-4 py-3 font-medium text-red-700">🇹🇷 Victory Day</td><td className="px-4 py-3 text-red-600">August 30 (Sat)</td></tr>
                <tr className="bg-red-50 dark:bg-red-900/20"><td className="px-4 py-3 font-medium text-red-700">🇹🇷 Republic Day</td><td className="px-4 py-3 text-red-600">October 29 (Wed)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏦 Banking Hours</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4">
              <h4 className="font-semibold mb-2">Standard Hours</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Mon-Fri: 9:00 AM - 5:00 PM</li>
                <li>• Some close for lunch 12:30-1:30</li>
                <li>• Saturday: Some open mornings</li>
                <li>• ATMs: 24/7</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl border p-4">
              <h4 className="font-semibold mb-2">Major Banks</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Garanti BBVA</li>
                <li>• İş Bankası</li>
                <li>• Akbank</li>
                <li>• Yapı Kredi</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/work-remote`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border hover:border-blue-300 transition-colors">
              <span className="text-2xl">💻</span><div><div className="font-medium">Work Remote Guide</div><div className="text-sm text-slate-500">Digital nomad, coworking</div></div>
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
