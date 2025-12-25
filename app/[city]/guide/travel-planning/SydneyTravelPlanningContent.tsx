'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyTravelPlanningContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Sydney Travel Planning Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Flight times, jet lag tips, and arrival advice
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Essential Info</h2>
        <p>
          Sydney Kingsford Smith Airport (SYD) is 8km from CBD. Typical flight times: LA (13h), London (22h), 
          Singapore (8h). Jet lag is real — plan 2-3 days to adjust.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>✈️ Flight Times to Sydney</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From USA</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Los Angeles:</strong> 13-14 hours direct</li>
              <li>• <strong>San Francisco:</strong> 14-15 hours direct</li>
              <li>• <strong>New York:</strong> 20+ hours (1+ stop)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From Europe</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>London:</strong> 22 hours (1 stop)</li>
              <li>• <strong>Paris:</strong> 23 hours (1 stop)</li>
              <li>• <strong>Frankfurt:</strong> 21 hours (1 stop)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From Asia</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Singapore:</strong> 8 hours direct</li>
              <li>• <strong>Tokyo:</strong> 9.5 hours direct</li>
              <li>• <strong>Hong Kong:</strong> 9 hours direct</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>From Middle East</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Dubai:</strong> 14 hours direct</li>
              <li>• <strong>Doha:</strong> 14.5 hours direct</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>😴 Jet Lag Survival Guide</h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Before You Fly</h3>
            <ul className="text-sm space-y-1">
              <li>• Gradually shift sleep schedule 1-2 hours</li>
              <li>• Book daytime arrival if possible</li>
              <li>• Download sleep/meditation apps</li>
            </ul>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>During Flight</h3>
            <ul className="text-sm space-y-1">
              <li>• Set watch to Sydney time immediately</li>
              <li>• Drink water (1L per 3 hours flying)</li>
              <li>• Sleep on Sydney's night time</li>
              <li>• Avoid alcohol (dehydrates)</li>
            </ul>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>First 48 Hours</h3>
            <ul className="text-sm space-y-1">
              <li>• Get sunlight ASAP (resets circadian rhythm)</li>
              <li>• Stay awake until 9 PM Sydney time</li>
              <li>• Melatonin 30 min before bed</li>
              <li>• Light activities only (no marathons!)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚖 Airport to City</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Train</h3>
            <p className="text-sm mb-2"><strong>Time:</strong> 13 minutes to CBD</p>
            <p className="text-sm mb-2"><strong>Cost:</strong> $19 AUD one-way</p>
            <p className="text-xs text-amber-600">Fastest option</p>
          </div>
          
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Taxi/Uber</h3>
            <p className="text-sm mb-2"><strong>Time:</strong> 20-40 min (traffic)</p>
            <p className="text-sm mb-2"><strong>Cost:</strong> $50-70 AUD</p>
            <p className="text-xs text-amber-600">Door-to-door convenience</p>
          </div>
          
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Shuttle Bus</h3>
            <p className="text-sm mb-2"><strong>Time:</strong> 30-50 minutes</p>
            <p className="text-sm mb-2"><strong>Cost:</strong> $20-25 AUD</p>
            <p className="text-xs text-amber-600">Budget option</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>📚 Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>🏖️</span>
            <span className={`font-medium ${headingColor}`}>Best Time to Visit</span>
          </Link>
          <Link href="/tools/jet-lag/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>😴</span>
            <span className={`font-medium ${headingColor}`}>Jet Lag Calculator</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
