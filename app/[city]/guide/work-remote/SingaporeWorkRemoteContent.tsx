'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface SingaporeWorkRemoteContentProps {
  city: City
}

export default function SingaporeWorkRemoteContent({ city }: SingaporeWorkRemoteContentProps) {
  const now = new Date()
  const sgTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }))
  const hour = sgTime.getHours()
  const isWorkHours = hour >= 9 && hour < 18

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Singapore</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>Work Remote</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work From Singapore 2025: Tech Pass, Coworking & Remote Work Guide
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Complete guide to working remotely from Singapore: Tech Pass for tech talent, 
            ONE Pass for high earners, world-class infrastructure, coworking spaces, and 
            the 17% corporate tax rate.
          </p>
        </div>

        <div className={`rounded-xl p-6 mb-10 ${isWorkHours ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'} text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Singapore Work Status</div>
              <div className="text-2xl font-bold">{isWorkHours ? '💼 Business Hours' : '🌙 After Hours'}</div>
              <div className="text-sm opacity-90 mt-1">{sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} SGT</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">17%</div>
              <div className="text-sm opacity-90">Corporate Tax</div>
            </div>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🛂 Work Visa Options</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold">Visa</th>
                  <th className="px-4 py-3 text-left font-semibold">For</th>
                  <th className="px-4 py-3 text-left font-semibold">Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="bg-green-50 dark:bg-green-900/20">
                  <td className="px-4 py-3 font-medium text-green-700">Tech.Pass ⭐</td>
                  <td className="px-4 py-3">Tech founders/talent</td>
                  <td className="px-4 py-3">$20K+ salary or $500K funding</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">ONE Pass</td>
                  <td className="px-4 py-3">High earners</td>
                  <td className="px-4 py-3">$30K+ monthly salary</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Employment Pass</td>
                  <td className="px-4 py-3">Professionals</td>
                  <td className="px-4 py-3">$5K+ salary + employer</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">EntrePass</td>
                  <td className="px-4 py-3">Entrepreneurs</td>
                  <td className="px-4 py-3">Innovative business plan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">PEP</td>
                  <td className="px-4 py-3">Senior executives</td>
                  <td className="px-4 py-3">$22.5K+ salary history</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-xl p-4">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ No Digital Nomad Visa</h4>
            <p className="text-sm text-amber-700 dark:text-amber-300">Singapore does not have a dedicated digital nomad visa. Tourist visa (90 days) doesn't allow work. You need employer sponsorship or qualify for Tech.Pass/EntrePass.</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🏢 Best Coworking Spaces</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold">Space</th>
                  <th className="px-4 py-3 text-left font-semibold">Monthly</th>
                  <th className="px-4 py-3 text-left font-semibold">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><td className="px-4 py-3 font-medium">WeWork</td><td className="px-4 py-3">S$450+ (~$335)</td><td className="px-4 py-3">Multiple (CBD)</td></tr>
                <tr><td className="px-4 py-3 font-medium">The Great Room</td><td className="px-4 py-3">S$600+ (~$450)</td><td className="px-4 py-3">Raffles Place</td></tr>
                <tr><td className="px-4 py-3 font-medium">JustCo</td><td className="px-4 py-3">S$350+ (~$260)</td><td className="px-4 py-3">Multiple</td></tr>
                <tr><td className="px-4 py-3 font-medium">The Hive</td><td className="px-4 py-3">S$300+ (~$225)</td><td className="px-4 py-3">Lavender</td></tr>
                <tr className="bg-green-50 dark:bg-green-900/20"><td className="px-4 py-3 font-medium text-green-700">National Library</td><td className="px-4 py-3 text-green-600">FREE</td><td className="px-4 py-3">Bugis</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">💰 Cost of Living</h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-700/50">
                  <th className="px-4 py-3 text-left font-semibold">Expense</th>
                  <th className="px-4 py-3 text-left font-semibold">Budget</th>
                  <th className="px-4 py-3 text-left font-semibold">Comfortable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr><td className="px-4 py-3">Room (shared)</td><td className="px-4 py-3">S$1,200</td><td className="px-4 py-3">S$2,500+</td></tr>
                <tr><td className="px-4 py-3">Studio apartment</td><td className="px-4 py-3">S$2,500</td><td className="px-4 py-3">S$4,000+</td></tr>
                <tr><td className="px-4 py-3">Food (hawker)</td><td className="px-4 py-3">S$400</td><td className="px-4 py-3">S$800</td></tr>
                <tr><td className="px-4 py-3">Transport (MRT)</td><td className="px-4 py-3">S$100</td><td className="px-4 py-3">S$200</td></tr>
                <tr className="bg-slate-50 dark:bg-slate-700/50 font-medium"><td className="px-4 py-3">TOTAL/month</td><td className="px-4 py-3">~S$2,500 ($1,850)</td><td className="px-4 py-3">~S$5,000+ ($3,700+)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🔗 Related Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href={`/${city.slug}/guide/time-business`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">💼</span>
              <div><div className="font-medium">Business Hours</div><div className="text-sm text-slate-500">SGX, banking, holidays</div></div>
            </Link>
            <Link href={`/${city.slug}/guide/time-zones`} className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 transition-colors">
              <span className="text-2xl">🌍</span>
              <div><div className="font-medium">Time Zone Guide</div><div className="text-sm text-slate-500">SGT, global overlap</div></div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
