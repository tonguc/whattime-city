'use client'

import Link from 'next/link'

interface City {
  slug: string
  name: string
  timezone: string
}

interface Props {
  city: City
}

export default function LondonCallTimesContent({ city }: Props) {
  const callTimes = [
    { from: 'New York', flag: '🇺🇸', diff: '-5h', bestBusiness: '2 PM - 5 PM', bestPersonal: '6 PM - 10 PM' },
    { from: 'Los Angeles', flag: '🇺🇸', diff: '-8h', bestBusiness: '5 PM - 6 PM', bestPersonal: '8 PM - 11 PM' },
    { from: 'Dubai', flag: '🇦🇪', diff: '+4h', bestBusiness: '9 AM - 1 PM', bestPersonal: '6 AM - 10 AM' },
    { from: 'Mumbai', flag: '🇮🇳', diff: '+5.5h', bestBusiness: '9 AM - 12 PM', bestPersonal: '5 AM - 9 AM' },
    { from: 'Singapore', flag: '🇸🇬', diff: '+8h', bestBusiness: '9 AM - 11 AM', bestPersonal: '6 AM - 8 AM' },
    { from: 'Tokyo', flag: '🇯🇵', diff: '+9h', bestBusiness: '5 PM - 7 PM', bestPersonal: '6 AM - 8 AM' },
    { from: 'Sydney', flag: '🇦🇺', diff: '+11h', bestBusiness: '7 AM - 9 AM', bestPersonal: '6 AM - 8 AM' },
    { from: 'Paris/Berlin', flag: '🇪🇺', diff: '+1h', bestBusiness: '9 AM - 5 PM', bestPersonal: 'Anytime reasonable' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <header className="mb-8">
        <div className="text-sm mb-2 text-slate-500">
          <Link href={`/${city.slug}/guide/`} className="text-amber-600 hover:text-amber-700">
            ← Back to London Guide
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Best Time to Call London
        </h1>
        <p className="text-lg text-slate-600">
          Optimal calling times from major cities worldwide
        </p>
      </header>

      {/* Featured Snippet Section */}
      <section id="snippet-target" className="mb-10 p-6 rounded-xl border bg-slate-50 border-slate-200">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">
          Best Time to Call London from New York
        </h2>
        
        <p className="mb-4 leading-relaxed text-base text-slate-700">
          The best time to call London from New York for business is between{' '}
          <strong>9:00 AM and 12:00 PM EST</strong>. This window aligns with{' '}
          <strong>2:00 PM to 5:00 PM in London</strong>, ensuring both parties are 
          within standard working hours. For personal calls, you can extend this until 
          5:00 PM EST (10:00 PM London).
        </p>

        {/* DST Warning */}
        <div className="mb-6 p-4 rounded-lg border text-sm bg-blue-50 border-blue-100 text-slate-700">
          <p>
            <strong>⚠️ Note:</strong> London is typically 5 hours ahead of New York. 
            However, during Daylight Saving Time (DST) transition weeks in March and October, 
            the gap briefly changes to <strong>4 hours</strong> due to different switch-over dates.
          </p>
        </div>

        {/* NYC-Specific Table */}
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-slate-100">
              <tr>
                <th className="p-4 border-b font-semibold text-sm md:text-base whitespace-nowrap text-slate-900 border-slate-200">
                  New York (EST)
                </th>
                <th className="p-4 border-b font-semibold text-sm md:text-base whitespace-nowrap text-slate-900 border-slate-200">
                  London (GMT/BST)
                </th>
                <th className="p-4 border-b font-semibold text-sm md:text-base whitespace-nowrap text-slate-900 border-slate-200">
                  Suitability
                </th>
              </tr>
            </thead>
            <tbody className="text-sm md:text-base text-slate-700">
              <tr>
                <td className="p-4 border-b border-slate-100">8:00 AM</td>
                <td className="p-4 border-b border-slate-100">1:00 PM</td>
                <td className="p-4 border-b border-slate-100 font-medium text-yellow-600">⚠️ Early for NYC</td>
              </tr>
              
              <tr className="bg-green-50">
                <td className="p-4 border-b border-green-100 font-bold text-slate-900">9:00 AM</td>
                <td className="p-4 border-b border-green-100 font-bold text-slate-900">2:00 PM</td>
                <td className="p-4 border-b border-green-100 font-bold text-green-700">✅ Perfect (Overlap)</td>
              </tr>
              
              <tr className="bg-green-50">
                <td className="p-4 border-b border-green-100 font-bold text-slate-900">11:00 AM</td>
                <td className="p-4 border-b border-green-100 font-bold text-slate-900">4:00 PM</td>
                <td className="p-4 border-b border-green-100 font-bold text-green-700">✅ Perfect (Overlap)</td>
              </tr>
              
              <tr>
                <td className="p-4 border-b border-slate-100">2:00 PM</td>
                <td className="p-4 border-b border-slate-100">7:00 PM</td>
                <td className="p-4 border-b border-slate-100 font-medium text-yellow-600">⚠️ Late for London</td>
              </tr>
              
              <tr>
                <td className="p-4 border-b border-slate-100">5:00 PM</td>
                <td className="p-4 border-b border-slate-100">10:00 PM</td>
                <td className="p-4 border-b border-slate-100 font-medium text-red-600">❌ Avoid (Too Late)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Reverse Direction */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">
          Best Time to Call New York from London
        </h2>
        
        <p className="leading-relaxed text-base mb-4 text-slate-700">
          If you are starting the call from London, your ideal window is restricted to your afternoon.
          New York generally starts work when it is already 2:00 PM in London.
        </p>
        
        <div className="p-5 rounded-lg border bg-slate-50 border-slate-200">
          <h3 className="font-semibold mb-3 text-slate-900">
            Quick Reference (London Perspective)
          </h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <span>🌅</span> 
              <span><strong>2 PM - 5 PM:</strong> Best for business (Catches NYC 9 AM - 12 PM)</span>
            </li>
            <li className="flex items-center gap-2">
              <span>🌆</span> 
              <span><strong>6 PM - 9 PM:</strong> Good for personal calls (NYC Afternoon)</span>
            </li>
            <li className="flex items-center gap-2">
              <span>❌</span> 
              <span><strong>Before 2 PM:</strong> Avoid (NYC is asleep / early morning)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Multiple Cities Table */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">
          📞 Best Calling Times by City
        </h2>
        
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-4 py-3 text-left text-slate-900">Calling From</th>
                <th className="px-4 py-3 text-left text-slate-900">Time Diff</th>
                <th className="px-4 py-3 text-left text-slate-900">Best for Business</th>
                <th className="px-4 py-3 text-left text-slate-900">Best for Personal</th>
              </tr>
            </thead>
            <tbody className="divide-y border-slate-200">
              {callTimes.map(t => (
                <tr key={t.from} className="hover:bg-slate-50">
                  <td className="px-4 py-3">{t.flag} {t.from}</td>
                  <td className="px-4 py-3 font-medium">{t.diff}</td>
                  <td className="px-4 py-3">
                    {t.bestBusiness} <span className="text-slate-500">(your time)</span>
                  </td>
                  <td className="px-4 py-3">
                    {t.bestPersonal} <span className="text-slate-500">(your time)</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* UK Call Culture */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">
          🇬🇧 UK Calling Culture
        </h2>
        
        <div className="p-4 rounded-xl bg-slate-50">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2 text-slate-900">📞 Business Calls</h3>
              <ul className="text-sm space-y-2">
                <li><strong>Punctuality expected</strong> — call at the agreed time</li>
                <li>Start with brief pleasantries before business</li>
                <li>Avoid calling during lunch (12-1 PM) if possible</li>
                <li>Friday afternoons: many start winding down after 4 PM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2 text-slate-900">💬 Tone &amp; Style</h3>
              <ul className="text-sm space-y-2">
                <li>British understatement is common</li>
                <li>Polite hedging: Would you mind if... rather than direct requests</li>
                <li>Saying sorry does not always mean apologizing</li>
                <li>Less small talk than US, more than Germans</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-slate-900">
          ❓ Frequently Asked Questions
        </h2>
        
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-slate-50">
            <h3 className="font-medium mb-2 text-slate-900">
              What is the best time to call London from the US?
            </h3>
            <p className="text-sm">
              Your morning (7-10 AM EST) catches London in the afternoon (12-3 PM) — ideal overlap. 
              US West Coast should aim for 6-9 AM PST to catch London at 2-5 PM.
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-slate-50">
            <h3 className="font-medium mb-2 text-slate-900">
              Is it rude to call on weekends?
            </h3>
            <p className="text-sm">
              For business: yes, unless previously agreed. For personal calls: Saturday is fine, 
              Sunday is more family-oriented but acceptable for close friends. Avoid calling before 10 AM on weekends.
            </p>
          </div>
          
          <div className="p-4 rounded-lg bg-slate-50">
            <h3 className="font-medium mb-2 text-slate-900">
              What time do UK offices close?
            </h3>
            <p className="text-sm">
              Most offices close at 5:30 PM, though many professionals work until 6 PM or later. 
              Friday afternoons tend to wind down earlier — aim for morning calls on Fridays.
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="p-6 rounded-2xl bg-slate-50">
        <h2 className="text-lg font-semibold mb-4 text-slate-900">
          Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link 
            href={`/${city.slug}/guide/time-difference/`} 
            className="flex items-center gap-2 p-3 rounded-lg transition-colors bg-white hover:bg-slate-100 border border-slate-200"
          >
            <span>🌐</span>
            <span>London Time Difference</span>
          </Link>
          <Link 
            href={`/${city.slug}/guide/remote-work/`} 
            className="flex items-center gap-2 p-3 rounded-lg transition-colors bg-white hover:bg-slate-100 border border-slate-200"
          >
            <span>💻</span>
            <span>Remote Work Guide</span>
          </Link>
          <Link 
            href={`/${city.slug}/guide/business-hours/`} 
            className="flex items-center gap-2 p-3 rounded-lg transition-colors bg-white hover:bg-slate-100 border border-slate-200"
          >
            <span>💼</span>
            <span>London Business Hours</span>
          </Link>
          <Link 
            href={`/${city.slug}/guide/`} 
            className="flex items-center gap-2 p-3 rounded-lg transition-colors bg-white hover:bg-slate-100 border border-slate-200"
          >
            <span>📖</span>
            <span>Complete London Guide</span>
          </Link>
        </div>
      </section>

      <p className="mt-8 text-sm text-slate-500">
        Last updated: December 2024.
      </p>
    </div>
  )
}
