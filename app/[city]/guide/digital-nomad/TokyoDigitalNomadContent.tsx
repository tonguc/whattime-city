'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoDigitalNomadContent({ city }: Props) {
  const { isLight } = useCityContext()
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Digital Nomad Guide: Tokyo</h1>
        <p className={`text-lg ${mutedColor}`}>Coworking, WiFi cafés, costs & visa options</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-violet-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Tokyo is amazing but <strong>expensive</strong>. Expect ¥150,000-250,000/month ($1,000-1,700) 
          minimum for basic living. Coworking from ¥20,000-50,000/month. WiFi is excellent. 
          Visa options are limited — the new <strong>Digital Nomad Visa (2024)</strong> requires 
          $68,000+/year income proof.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💰 Monthly Cost Breakdown</h2>
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Expense</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Budget</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Comfortable</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr><td className="px-4 py-3 font-medium">Accommodation</td><td className="px-4 py-3">¥60,000-80,000</td><td className="px-4 py-3">¥120,000-180,000</td></tr>
              <tr className={cardBg}><td className="px-4 py-3 font-medium">Food</td><td className="px-4 py-3">¥40,000-60,000</td><td className="px-4 py-3">¥80,000-120,000</td></tr>
              <tr><td className="px-4 py-3 font-medium">Transport</td><td className="px-4 py-3">¥10,000-15,000</td><td className="px-4 py-3">¥15,000-25,000</td></tr>
              <tr className={cardBg}><td className="px-4 py-3 font-medium">Coworking</td><td className="px-4 py-3">Cafés (¥5,000)</td><td className="px-4 py-3">¥30,000-50,000</td></tr>
              <tr><td className="px-4 py-3 font-medium">Phone/SIM</td><td className="px-4 py-3">¥3,000-5,000</td><td className="px-4 py-3">¥5,000-10,000</td></tr>
              <tr className={`font-bold ${isLight ? 'bg-violet-50' : 'bg-violet-900/20'}`}><td className="px-4 py-3">TOTAL</td><td className="px-4 py-3">¥120,000-170,000</td><td className="px-4 py-3">¥250,000-400,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>Roughly $800-1,150 (budget) to $1,700-2,700 (comfortable) per month.</p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏢 Coworking Spaces</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>WeWork Japan</h3>
            <p className="text-sm mb-1">Multiple locations (Roppongi, Shibuya, Marunouchi)</p>
            <p className="text-sm"><strong>Price:</strong> ¥50,000-80,000/mo | Day passes from ¥3,000</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Fabbit</h3>
            <p className="text-sm mb-1">Popular Japanese chain, multiple locations</p>
            <p className="text-sm"><strong>Price:</strong> ¥20,000-40,000/mo</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Coins (Drop-in)</h3>
            <p className="text-sm mb-1">Pay-per-minute booths across Tokyo</p>
            <p className="text-sm"><strong>Price:</strong> ¥200-400/hour</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>☕ Laptop-Friendly Cafés</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Chains with WiFi & Power</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Starbucks</strong> — Reliable, but 1-hour WiFi limits</li>
              <li>• <strong>Doutor</strong> — Cheap, power outlets vary</li>
              <li>• <strong>Tully's</strong> — Good for work, less crowded</li>
              <li>• <strong>Excelsior Caffé</strong> — Spacious, power available</li>
            </ul>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Work-Friendly Indies</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Fuglen Tokyo</strong> (Shibuya) — Norwegian design</li>
              <li>• <strong>Blue Bottle Coffee</strong> — Premium, outlets limited</li>
              <li>• <strong>Streamer Coffee</strong> — Hip, work-acceptable</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛂 Visa Options</h2>
        <div className={`p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>⚠️ Digital Nomad Visa (2024)</h3>
          <p className="text-sm mb-3">Japan launched a DN visa in 2024 with strict requirements:</p>
          <ul className="text-sm space-y-1">
            <li>• <strong>Income:</strong> ¥10M+/year (~$68,000+) proof required</li>
            <li>• <strong>Duration:</strong> Up to 6 months</li>
            <li>• <strong>Health insurance:</strong> Required (private)</li>
            <li>• <strong>Countries:</strong> Limited to visa-waiver countries</li>
          </ul>
          <p className={`text-sm mt-3 ${mutedColor}`}>Alternative: 90-day tourist visa (no work allowed technically).</p>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Business Hours</span>
          </Link>
        </div>
      </section>
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
