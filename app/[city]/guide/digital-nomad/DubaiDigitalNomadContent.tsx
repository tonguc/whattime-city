'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiDigitalNomadContent({ city }: Props) {
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Digital Nomad Guide: Dubai</h1>
        <p className={`text-lg ${mutedColor}`}>Remote work visa, coworking, costs & the expat lifestyle</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-violet-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Dubai has the famous <strong>1-year Virtual Working Program</strong> (remote work visa) requiring 
          $5,000/month income. No income tax! Expect <strong>AED 8,000-15,000/month</strong> ($2,200-4,100) 
          for comfortable living. Excellent infrastructure, safe, but summer heat is brutal.
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
              <tr><td className="px-4 py-3 font-medium">Accommodation</td><td className="px-4 py-3">AED 3,500-5,000</td><td className="px-4 py-3">AED 6,000-10,000</td></tr>
              <tr className={cardBg}><td className="px-4 py-3 font-medium">Food</td><td className="px-4 py-3">AED 1,500-2,500</td><td className="px-4 py-3">AED 3,000-5,000</td></tr>
              <tr><td className="px-4 py-3 font-medium">Transport</td><td className="px-4 py-3">AED 500-1,000</td><td className="px-4 py-3">AED 1,500-3,000</td></tr>
              <tr className={cardBg}><td className="px-4 py-3 font-medium">Coworking</td><td className="px-4 py-3">AED 1,000-2,000</td><td className="px-4 py-3">AED 2,500-4,000</td></tr>
              <tr><td className="px-4 py-3 font-medium">SIM/Internet</td><td className="px-4 py-3">AED 200-400</td><td className="px-4 py-3">AED 400-600</td></tr>
              <tr className={`font-bold ${isLight ? 'bg-violet-50' : 'bg-violet-900/20'}`}><td className="px-4 py-3">TOTAL</td><td className="px-4 py-3">AED 7,000-11,000</td><td className="px-4 py-3">AED 13,000-22,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>Roughly $1,900-3,000 (budget) to $3,500-6,000 (comfortable) per month. No income tax!</p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛂 Virtual Working Program (Remote Work Visa)</h2>
        <div className={`p-4 rounded-xl border-2 border-emerald-300 ${isLight ? 'bg-emerald-50' : 'bg-emerald-900/20'}`}>
          <p className="mb-3"><strong>Dubai's famous digital nomad visa:</strong></p>
          <ul className="text-sm space-y-2">
            <li>• <strong>Duration:</strong> 1 year (renewable)</li>
            <li>• <strong>Income requirement:</strong> $5,000/month (or $60,000/year) proven</li>
            <li>• <strong>Cost:</strong> ~AED 1,100 ($300) application fee</li>
            <li>• <strong>Health insurance:</strong> Required</li>
            <li>• <strong>Benefits:</strong> Emirates ID, bank account, legal residence</li>
            <li>• <strong>Tax:</strong> No income tax on foreign-sourced income!</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏢 Coworking Spaces</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>WeWork Dubai</h3>
            <p className="text-sm mb-1">Multiple locations (DIFC, Downtown, JLT)</p>
            <p className="text-sm"><strong>Price:</strong> AED 2,500-4,000/mo | Day passes available</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Nasab (DIFC)</h3>
            <p className="text-sm mb-1">Premium coworking in Dubai's financial center</p>
            <p className="text-sm"><strong>Price:</strong> AED 2,000-3,500/mo</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Letswork (various)</h3>
            <p className="text-sm mb-1">App-based access to hotel meeting rooms and lounges</p>
            <p className="text-sm"><strong>Price:</strong> AED 50-150/day | Flexible options</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>☕ Laptop-Friendly Cafes</h2>
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <ul className="text-sm space-y-2">
            <li>• <strong>Starbucks Reserve</strong> — Premium locations, good WiFi</li>
            <li>• <strong>Tom & Serg</strong> (Al Quoz) — Industrial vibe, popular with creatives</li>
            <li>• <strong>Nightjar Coffee</strong> — Specialty coffee, work-friendly</li>
            <li>• <strong>Costa Coffee</strong> — Reliable, many locations</li>
            <li>• <strong>Hotel lobbies</strong> — Often welcome laptop workers (buy a coffee)</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>✅ Pros & Cons</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${isLight ? 'bg-green-50' : 'bg-green-900/20'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>✅ Pros</h3>
            <ul className="text-sm space-y-1">
              <li>• No income tax</li>
              <li>• Legal remote work visa</li>
              <li>• World-class infrastructure</li>
              <li>• Very safe</li>
              <li>• Great timezone for EU/Asia</li>
              <li>• English widely spoken</li>
            </ul>
          </div>
          <div className={`p-4 rounded-xl ${isLight ? 'bg-red-50' : 'bg-red-900/20'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>❌ Cons</h3>
            <ul className="text-sm space-y-1">
              <li>• Expensive (rent, dining out)</li>
              <li>• Brutal summer heat</li>
              <li>• Car-dependent (outside central areas)</li>
              <li>• Strict alcohol/social laws</li>
              <li>• VoIP calls blocked (WhatsApp calls, etc.)</li>
            </ul>
          </div>
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
