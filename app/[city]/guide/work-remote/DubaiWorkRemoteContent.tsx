'use client'

import { City } from '@/lib/cities'
import Link from 'next/link'

interface DubaiWorkRemoteContentProps {
  city: City
}

export default function DubaiWorkRemoteContent({ city }: DubaiWorkRemoteContentProps) {
  const now = new Date()
  const dubaiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }))
  const hour = dubaiTime.getHours()
  const isWorkHours = hour >= 9 && hour < 18

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        
        {/* Hero Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
            <Link href={`/${city.slug}`} className="hover:text-blue-600">Dubai</Link>
            <span>/</span>
            <Link href={`/${city.slug}/guide`} className="hover:text-blue-600">Guide</Link>
            <span>/</span>
            <span>Work Remote</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work From Dubai 2025: Digital Nomad Visa, Coworking &amp; Remote Work Guide
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Complete guide to working remotely from Dubai: Virtual Work Visa ($5,000/month income), 
            0% income tax, world-class coworking spaces, cost of living, and the tax-free lifestyle.
          </p>
        </div>

        {/* Live Status */}
        <div className={`rounded-xl p-6 mb-10 ${
          isWorkHours 
            ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
            : 'bg-gradient-to-r from-indigo-500 to-purple-500'
        } text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm opacity-90 mb-1">Dubai Work Status</div>
              <div className="text-2xl font-bold">
                {isWorkHours ? '💼 Business Hours' : '🌙 After Hours'}
              </div>
              <div className="text-sm opacity-90 mt-1">
                {dubaiTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })} GST
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">0%</div>
              <div className="text-sm opacity-90">Income Tax</div>
            </div>
          </div>
        </div>

        {/* Digital Nomad Visa */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🛂 Dubai Virtual Work Visa (Digital Nomad Visa)
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Launched in 2020, Dubai's Virtual Working Programme allows remote workers to live in 
            Dubai while working for employers outside the UAE. One of the most attractive digital 
            nomad visas globally due to 0% income tax.
          </p>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 border border-amber-200 dark:border-amber-700 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-bold text-amber-800 dark:text-amber-200 mb-4">Key Requirements</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Income &amp; Employment</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>✓ $5,000 USD/month minimum income</li>
                  <li>✓ Employment with non-UAE company</li>
                  <li>✓ 1-year minimum employment contract</li>
                  <li>✓ OR own a business outside UAE (1+ year)</li>
                  <li>✓ 3 months bank statements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">Documents Needed</h4>
                <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                  <li>✓ Valid passport (6+ months)</li>
                  <li>✓ Passport photo (white background)</li>
                  <li>✓ Health insurance (UAE coverage)</li>
                  <li>✓ Proof of accommodation</li>
                  <li>✓ Employment/ownership proof</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Detail</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Information</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Duration</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">1 year (renewable)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Total Cost</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">$611 - $3,000+ (incl. insurance)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Processing Time</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">5-7 business days</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Income Tax</td>
                    <td className="px-4 py-3 text-sm font-bold text-green-600 dark:text-green-400">0%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dependents</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Spouse &amp; children can join</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Benefits</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Emirates ID, bank account, local SIM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl p-4">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">💰 Tax Advantage</h4>
            <p className="text-sm text-green-700 dark:text-green-300">
              The UAE has <strong>0% personal income tax</strong>, making it one of the world's 
              most attractive destinations for high-earning remote workers. Your foreign income 
              is completely untaxed while living in Dubai under the Virtual Work Visa.
            </p>
          </div>
        </section>

        {/* Coworking Spaces */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🏢 Best Coworking Spaces in Dubai
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Space</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Day Pass</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Monthly</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="px-4 py-3 text-sm font-medium text-green-700 dark:text-green-300">A4 Alserkal ⭐</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">FREE</td>
                    <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400">FREE</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Al Quoz</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">WO-RK Metro</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">AED 35 ($10)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">-</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Burjuman Metro</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Letswork</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">AED 39 ($11)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Packages</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Multiple</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Cloud Spaces</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">AED 120 ($33)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">AED 1,200+</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Dubai Mall</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Regus</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">-</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">AED 750+ ($200)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">20+ locations</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">WeWork</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Available</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">AED 1,100+ ($300)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">One Central</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-slate-900 dark:text-slate-100">Servcorp</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">-</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">AED 760+ ($207)</td>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Emirates Towers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">☕ Free/Budget Alternatives</h4>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              <strong>A4 at Alserkal Avenue</strong> (Al Quoz arts district) offers free coworking. 
              Most hotel lobbies and mall cafés have excellent WiFi. Starbucks Reserve, % Arabica, 
              and specialty coffee shops welcome laptop workers.
            </p>
          </div>
        </section>

        {/* Best Neighborhoods */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🏙️ Best Neighborhoods for Remote Workers
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⭐</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Dubai Marina</h3>
                    <span className="text-sm font-medium text-slate-500">AED 6,000-12,000/mo</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Most popular for expats. Walkable, waterfront lifestyle, abundant restaurants, 
                    Metro access. Studios from AED 6,000/month. Vibrant nightlife.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏙️</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Downtown Dubai</h3>
                    <span className="text-sm font-medium text-slate-500">AED 8,000-15,000/mo</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Burj Khalifa views, Dubai Mall at doorstep, central location. 
                    Premium pricing but unbeatable lifestyle. Metro accessible.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💼</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">Business Bay</h3>
                    <span className="text-sm font-medium text-slate-500">AED 5,000-10,000/mo</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Newer area with modern apartments, canal views, good value. 
                    Walking distance to Downtown. Great for professionals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏖️</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-slate-100">JLT (Jumeirah Lake Towers)</h3>
                    <span className="text-sm font-medium text-slate-500">AED 4,500-8,000/mo</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                    More affordable Marina alternative. Lake views, restaurants, 
                    Metro access. Popular with young professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of Living */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            💰 Cost of Living in Dubai
          </h2>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-700/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Expense</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Budget</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Mid-Range</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">Comfortable</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Accommodation</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$1,400</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$2,500</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$4,000+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Coworking</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$0 (free)</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$200</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$400</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Food</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$400</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$800</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$1,500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Transport</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$100</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$300</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$600+</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-slate-600 dark:text-slate-300">Entertainment</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$200</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$500</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$1,000+</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-700/50 font-medium">
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">TOTAL/month</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">~$2,100</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">~$4,300</td>
                    <td className="px-4 py-3 text-sm text-slate-900 dark:text-slate-100">$7,500+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-xl p-4">
            <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">📱 Connectivity</h4>
            <p className="text-sm text-purple-700 dark:text-purple-300">
              <strong>Internet:</strong> 100+ Mbps common in apartments. Mobile data via du or Etisalat 
              (AED 200-300/month for unlimited). Public WiFi widely available. 5G coverage excellent. 
              <strong>Note:</strong> VoIP services (WhatsApp calls, Zoom) require VPN in UAE.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            🔗 Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link 
              href={`/${city.slug}/guide/time-business`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">💼</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Business Hours</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">DFM, banking, holidays</div>
              </div>
            </Link>
            <Link 
              href={`/${city.slug}/guide/time-zones`}
              className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <span className="text-2xl">🌍</span>
              <div>
                <div className="font-medium text-slate-900 dark:text-slate-100">Time Zone Guide</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">GST, global overlap</div>
              </div>
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}
