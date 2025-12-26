'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiBestTimeToVisitContent({ city }: Props) {
  const { isLight } = useCityContext()
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'

  const months = [
    { name: 'January', temp: '15-24°C', crowd: 'High', price: '💰💰💰', icon: '☀️', desc: 'Perfect weather. Dubai Shopping Festival. Peak tourist season. Book early!' },
    { name: 'February', temp: '16-25°C', crowd: 'High', price: '💰💰💰', icon: '☀️', desc: 'Ideal conditions. Outdoor events. Beach weather. Still peak season.' },
    { name: 'March', temp: '18-28°C', crowd: 'Medium', price: '💰💰', icon: '🌤️', desc: 'Great weather. Ramadan may fall here (check dates). Shoulder season starts.' },
    { name: 'April', temp: '22-33°C', crowd: 'Medium', price: '💰💰', icon: '🌤️', desc: 'Getting warmer. Still pleasant for beaches. Eid celebrations possible.' },
    { name: 'May', temp: '26-38°C', crowd: 'Low', price: '💰', icon: '🔥', desc: 'Hot! Good deals. Beach/pool focus. Indoor attractions. Summer starts.' },
    { name: 'June', temp: '28-40°C', crowd: 'Low', price: '💰', icon: '🔥', desc: 'Very hot. Major discounts. Ramadan sales (if applicable). AC essential.' },
    { name: 'July', temp: '30-42°C', crowd: 'Low', price: '💰', icon: '🔥', desc: 'Peak heat (45°C+). Dubai Summer Surprises sales. Indoor focus.' },
    { name: 'August', temp: '31-42°C', crowd: 'Low', price: '💰', icon: '🔥', desc: 'Hottest month. Great hotel deals. Humid. Eid Al Adha celebrations possible.' },
    { name: 'September', temp: '28-39°C', crowd: 'Low', price: '💰', icon: '🔥', desc: 'Still very hot. Deals continue. Heat starts easing late month.' },
    { name: 'October', temp: '24-35°C', crowd: 'Medium', price: '💰💰', icon: '🌤️', desc: 'Cooling down. Outdoor events return. Season begins. Good value.' },
    { name: 'November', temp: '20-30°C', crowd: 'High', price: '💰💰💰', icon: '☀️', desc: 'Perfect weather! F1 Abu Dhabi GP. High season starts. UAE National Day.' },
    { name: 'December', temp: '17-26°C', crowd: 'Very High', price: '💰💰💰💰', icon: '☀️', desc: 'Peak season. NYE celebrations. Best weather. Highest prices. Book months ahead!' },
  ]

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Best Time to Visit Dubai</h1>
        <p className={`text-lg ${mutedColor}`}>Weather, events, Ramadan & prices by month</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>Best: November - March</strong> (perfect 20-28°C weather). <strong>Avoid: June - September</strong> 
          (40°C+ brutal heat). <strong>Budget:</strong> Summer months offer 50%+ hotel discounts. 
          <strong>Check Ramadan dates</strong> — it changes everything.
        </p>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>📅 Month by Month</h2>
        <div className="space-y-4">
          {months.map((month) => (
            <div key={month.name} className={`p-4 rounded-xl ${cardBg} border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-2xl">{month.icon}</span>
                <h3 className={`text-lg font-semibold ${headingColor}`}>{month.name}</h3>
                <span className={`text-sm px-2 py-1 rounded ${isLight ? 'bg-slate-200' : 'bg-slate-600'}`}>{month.temp}</span>
                <span className={`text-sm px-2 py-1 rounded ${
                  month.crowd === 'Low' ? 'bg-green-100 text-green-700' :
                  month.crowd === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>{month.crowd}</span>
                <span className="text-sm">{month.price}</span>
              </div>
              <p className="text-sm">{month.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌙 Ramadan Consideration</h2>
        <div className={`p-4 rounded-xl ${isLight ? 'bg-purple-50 border border-purple-200' : 'bg-purple-900/20 border border-purple-700'}`}>
          <p className="mb-3">
            Ramadan dates shift ~11 days earlier each year. During Ramadan:
          </p>
          <ul className="text-sm space-y-1">
            <li>• No eating/drinking in public during daylight</li>
            <li>• Many restaurants closed until sunset</li>
            <li>• Hotels serve guests discreetly</li>
            <li>• Alcohol sales restricted</li>
            <li>• BUT: Magical Iftar experiences, less crowds, special atmosphere</li>
          </ul>
        </div>
      </section>

      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/holidays/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📅</span><span>UAE Holidays</span>
          </Link>
          <Link href={`/${city.slug}/guide/travel-planning/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>✈️</span><span>Travel Planning</span>
          </Link>
        </div>
      </section>
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
