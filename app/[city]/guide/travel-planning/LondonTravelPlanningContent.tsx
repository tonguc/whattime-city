'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LondonTravelPlanningContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const flightTimes = [
    { from: 'New York (JFK)', time: '7-8 hours', jetLag: 'Moderate', direction: 'Eastbound (+5h)' },
    { from: 'Los Angeles', time: '10-11 hours', jetLag: 'Significant', direction: 'Eastbound (+8h)' },
    { from: 'Dubai', time: '7 hours', jetLag: 'Moderate', direction: 'Westbound (-4h)' },
    { from: 'Singapore', time: '13 hours', jetLag: 'Significant', direction: 'Westbound (-8h)' },
    { from: 'Tokyo', time: '12 hours', jetLag: 'Significant', direction: 'Westbound (-9h)' },
    { from: 'Sydney', time: '22-24 hours', jetLag: 'Severe', direction: 'Westbound (-11h)' },
    { from: 'Paris', time: '1 hour', jetLag: 'None', direction: '+1h summer' },
    { from: 'Frankfurt', time: '1.5 hours', jetLag: 'None', direction: '+1h summer' },
    { from: 'Mumbai', time: '9 hours', jetLag: 'Moderate', direction: 'Westbound (-5.5h)' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Travel Planning: Flying to London
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Flight times, jet lag tips, and getting from the airport to central London
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          London has 6 airports — <strong>Heathrow</strong> (LHR) is the main hub, <strong>Gatwick</strong> (LGW) 
          second largest, and <strong>City Airport</strong> (LCY) is closest to central London. From Heathrow, 
          the Elizabeth Line takes 30-45 minutes to central London for £12.80. Jet lag from the US 
          typically lasts 3-5 days; from Asia/Australia, 5-7 days.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>✈️ Flight Times to London</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>From</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Flight Time</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Jet Lag</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Time Change</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {flightTimes.map((flight, i) => (
                <tr key={flight.from} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="px-4 py-3 font-medium">{flight.from}</td>
                  <td className="px-4 py-3">{flight.time}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      flight.jetLag === 'None' ? 'bg-green-100 text-green-700' :
                      flight.jetLag === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                      flight.jetLag === 'Significant' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {flight.jetLag}
                    </span>
                  </td>
                  <td className="px-4 py-3">{flight.direction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛬 London's Airports</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Heathrow (LHR)</h3>
            <p className="text-sm mb-2">London's main international hub — 15 miles west of central London</p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Elizabeth Line:</strong> 30-45 min to Paddington, £12.80</li>
              <li>• <strong>Heathrow Express:</strong> 15 min to Paddington, £25</li>
              <li>• <strong>Piccadilly Line:</strong> 50-60 min to central London, £5.60</li>
              <li>• <strong>Taxi/Uber:</strong> 45-90 min depending on traffic, £50-100</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Gatwick (LGW)</h3>
            <p className="text-sm mb-2">Second largest — 30 miles south of central London</p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Gatwick Express:</strong> 30 min to Victoria, £19.90</li>
              <li>• <strong>Southern/Thameslink:</strong> 30-45 min, £10-15</li>
              <li>• <strong>National Express Bus:</strong> 80-120 min, £10-15</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>London City (LCY)</h3>
            <p className="text-sm mb-2">Closest to central London — in Docklands, East London</p>
            <ul className="text-sm space-y-1">
              <li>• <strong>DLR:</strong> 20 min to Bank station, £3-5</li>
              <li>• <strong>Elizabeth Line:</strong> Custom House station nearby</li>
              <li>• <strong>Best for:</strong> Business travellers, European short-haul</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Stansted (STN)</h3>
            <p className="text-sm mb-2">Budget airline hub — 40 miles northeast of London</p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Stansted Express:</strong> 47 min to Liverpool Street, £19.40</li>
              <li>• <strong>National Express:</strong> 60-90 min to Victoria, £10-15</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Luton (LTN)</h3>
            <p className="text-sm mb-2">Budget airline hub — 35 miles north of London</p>
            <ul className="text-sm space-y-1">
              <li>• <strong>Thameslink:</strong> 25-40 min to St Pancras, then shuttle bus</li>
              <li>• <strong>National Express:</strong> 60-90 min to Victoria, £10-12</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>😴 Jet Lag Tips</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🇺🇸 From North America (Eastbound)</h3>
            <p className="text-sm mb-2">
              Flying east is harder because you "lose" time. Take an overnight flight, arrive in the 
              morning, and push through the first day.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Don't nap on arrival (or keep it under 20 minutes)</li>
              <li>• Get daylight exposure immediately — walk outside</li>
              <li>• Go to bed at a normal London time (10-11 PM)</li>
              <li>• Recovery: Typically 3-5 days</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🌏 From Asia/Australia (Westbound)</h3>
            <p className="text-sm mb-2">
              Flying west is easier but longer journeys mean more fatigue. You "gain" time so 
              evenings feel late.
            </p>
            <ul className="text-sm space-y-1">
              <li>• Arrive in the afternoon if possible</li>
              <li>• Stay awake until at least 9 PM London time</li>
              <li>• Avoid heavy meals late in the evening</li>
              <li>• Recovery: Typically 5-7 days from Australia</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>💡 General Jet Lag Tips</h3>
            <ul className="text-sm space-y-1">
              <li>• Start shifting your sleep schedule 2-3 days before departure</li>
              <li>• Stay hydrated on the flight (avoid alcohol)</li>
              <li>• Consider melatonin for the first few nights (check local rules)</li>
              <li>• Plan light activities for Day 1 — don't schedule important meetings</li>
              <li>• Exercise lightly on arrival — it helps reset your body clock</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚇 Getting Around London</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-3 ${headingColor}`}>Oyster Card vs Contactless</h3>
          <p className="text-sm mb-3">
            You can use <strong>contactless payment</strong> (Visa, Mastercard, Apple Pay, Google Pay) 
            on all London transport — no need to buy an Oyster card unless you prefer it. Daily and 
            weekly price caps apply automatically.
          </p>
          <ul className="text-sm space-y-1">
            <li>• <strong>Zone 1-2 daily cap:</strong> £8.10</li>
            <li>• <strong>Zone 1-6 daily cap:</strong> £14.90</li>
            <li>• <strong>Weekly cap:</strong> £40.70 (Zone 1-2)</li>
            <li>• <strong>Single Tube journey:</strong> £2.70 (Zone 1)</li>
            <li>• <strong>Bus fare:</strong> £1.75 (any journey)</li>
          </ul>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🚶 Walking in London</h3>
          <p className="text-sm">
            London is surprisingly walkable. Central London attractions are often closer together than 
            the Tube map suggests. Walking from Covent Garden to the British Museum is 10 minutes, 
            Big Ben to Westminster Abbey is 2 minutes.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 When to Arrive</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>✅ Best Arrival Time</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Morning (7-10 AM):</strong> Best for jet lag adjustment</li>
              <li>• Gives you a full day to acclimate</li>
              <li>• Hotels usually allow early luggage drop</li>
              <li>• Check-in typically from 3 PM</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>⚠️ Avoid If Possible</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Late evening arrivals:</strong> Harder to stay awake</li>
              <li>• <strong>Rush hour (5-7 PM):</strong> Transport is packed</li>
              <li>• <strong>After 11 PM:</strong> Limited public transport options</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Which London airport is best?</h3>
            <p className="text-sm">
              <strong>Heathrow</strong> for long-haul and most international flights — excellent 
              connections. <strong>City Airport</strong> for European business travel (quickest to 
              the City). <strong>Gatwick/Stansted/Luton</strong> for budget airlines.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How much should I budget for transport from the airport?</h3>
            <p className="text-sm">
              Budget option: £6-15 (Tube/train). Mid-range: £15-25 (Express trains). Premium: £50-100 
              (taxi/private transfer). The Elizabeth Line from Heathrow offers the best value at £12.80.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Do I need to exchange currency before arriving?</h3>
            <p className="text-sm">
              Not really. Contactless payment works everywhere (including on the Tube). ATMs are 
              widely available. If you want cash, airport rates are poor — use a UK ATM instead.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How long does immigration take at Heathrow?</h3>
            <p className="text-sm">
              UK/EU e-passport holders: 10-30 minutes using e-gates. Other nationalities: 30-90 
              minutes depending on time of day. Early morning arrivals often have shorter queues.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🇬🇧</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>Time Difference Calculator</span>
          </Link>
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in London</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete London Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
