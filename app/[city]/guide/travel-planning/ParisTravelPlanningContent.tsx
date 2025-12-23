'use client'

import { City } from '@/lib/cities'

interface Props {
  city: City
}

export default function ParisTravelPlanningContent({ city }: Props) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Paris Travel Time Guide: Flights, Airports & Jet Lag Tips</h1>
      
      <p className="lead">
        Planning your trip to Paris? Here's everything you need to know about flight times, 
        airports, and beating jet lag.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">✈️ Paris at a Glance</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>Main Airport:</strong><br/>
            CDG (Charles de Gaulle)<br/>
            25 km from city center
          </div>
          <div>
            <strong>Secondary Airport:</strong><br/>
            ORY (Orly)<br/>
            14 km from city center
          </div>
          <div>
            <strong>Timezone:</strong><br/>
            CET (UTC+1) / CEST (UTC+2)<br/>
            6 hours ahead of NYC
          </div>
        </div>
      </div>

      <h2>Flight Times to Paris</h2>

      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-3 text-left">From</th>
              <th className="p-3 text-left">Flight Time</th>
              <th className="p-3 text-left">Time Difference</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td className="p-3">🇺🇸 New York (JFK)</td><td className="p-3">7-8 hours</td><td className="p-3">+6 hours</td></tr>
            <tr><td className="p-3">🇺🇸 Los Angeles (LAX)</td><td className="p-3">10-11 hours</td><td className="p-3">+9 hours</td></tr>
            <tr><td className="p-3">🇺🇸 Chicago (ORD)</td><td className="p-3">8-9 hours</td><td className="p-3">+7 hours</td></tr>
            <tr><td className="p-3">🇬🇧 London (LHR)</td><td className="p-3">1 hour 15 min</td><td className="p-3">+1 hour</td></tr>
            <tr><td className="p-3">🇦🇪 Dubai (DXB)</td><td className="p-3">6-7 hours</td><td className="p-3">-3 hours</td></tr>
            <tr><td className="p-3">🇸🇬 Singapore (SIN)</td><td className="p-3">12-13 hours</td><td className="p-3">-7 hours</td></tr>
            <tr><td className="p-3">🇯🇵 Tokyo (NRT/HND)</td><td className="p-3">12-13 hours</td><td className="p-3">-8 hours</td></tr>
            <tr><td className="p-3">🇦🇺 Sydney (SYD)</td><td className="p-3">21-24 hours</td><td className="p-3">-10 hours</td></tr>
            <tr><td className="p-3">🇧🇷 São Paulo (GRU)</td><td className="p-3">11-12 hours</td><td className="p-3">+4 hours</td></tr>
            <tr><td className="p-3">🇨🇦 Toronto (YYZ)</td><td className="p-3">7-8 hours</td><td className="p-3">+6 hours</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Paris Airports</h2>

      <h3>Charles de Gaulle (CDG)</h3>
      <ul>
        <li><strong>Distance:</strong> 25 km northeast of Paris</li>
        <li><strong>Best for:</strong> Long-haul flights, Air France hub</li>
        <li><strong>Terminals:</strong> 3 main terminals (1, 2, 3)</li>
        <li><strong>To city:</strong> RER B train (35 min, €11), taxi (€55 flat rate), bus</li>
      </ul>

      <h3>Orly (ORY)</h3>
      <ul>
        <li><strong>Distance:</strong> 14 km south of Paris</li>
        <li><strong>Best for:</strong> Domestic, European, some transatlantic</li>
        <li><strong>Terminals:</strong> Orly 1, 2, 3, 4</li>
        <li><strong>To city:</strong> Orlyval + RER B (40 min, €14), taxi (€35 flat rate)</li>
      </ul>

      <h3>Beauvais (BVA)</h3>
      <ul>
        <li><strong>Distance:</strong> 85 km north of Paris</li>
        <li><strong>Best for:</strong> Budget airlines (Ryanair, Wizz Air)</li>
        <li><strong>Warning:</strong> Very far - add 2+ hours for transport</li>
        <li><strong>To city:</strong> Bus only (€17, 75+ minutes)</li>
      </ul>

      <h2>Getting from Airport to Paris</h2>

      <div className="not-prose my-6 space-y-4">
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
          <h4 className="font-bold text-green-800 dark:text-green-200">🚆 Recommended: RER B Train (from CDG)</h4>
          <p className="text-sm">€11.80 | 35 minutes | Every 10-15 minutes</p>
          <p className="text-sm mt-1">Direct to central Paris (Châtelet, Saint-Michel, Luxembourg). Avoid rush hour with luggage.</p>
        </div>
        
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h4 className="font-bold">🚕 Taxi (Flat Rate)</h4>
          <p className="text-sm">CDG: €55 (Right Bank) / €62 (Left Bank) | 45-75 minutes</p>
          <p className="text-sm">Orly: €35 (Left Bank) / €41 (Right Bank) | 30-45 minutes</p>
        </div>
        
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h4 className="font-bold">🚌 Roissybus (CDG) / Orlybus</h4>
          <p className="text-sm">€16.20 | 60+ minutes | To Opéra (Roissybus) or Denfert-Rochereau (Orlybus)</p>
        </div>
      </div>

      <h2>Jet Lag Guide by Origin</h2>

      <h3>🇺🇸 From USA (East Coast)</h3>
      <div className="not-prose my-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
        <p className="text-sm">
          <strong>Difficulty:</strong> Moderate (6 hours ahead)<br/>
          <strong>Recovery time:</strong> 2-4 days<br/>
          <strong>Tips:</strong> Fly overnight, arrive morning Paris time, stay awake until 9-10 PM, 
          get morning sunlight.
        </p>
      </div>

      <h3>🇺🇸 From USA (West Coast)</h3>
      <div className="not-prose my-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
        <p className="text-sm">
          <strong>Difficulty:</strong> Hard (9 hours ahead)<br/>
          <strong>Recovery time:</strong> 4-6 days<br/>
          <strong>Tips:</strong> Start adjusting 2-3 days before, avoid naps longer than 20 min, 
          use melatonin at Paris bedtime.
        </p>
      </div>

      <h3>🇬🇧 From UK</h3>
      <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
        <p className="text-sm">
          <strong>Difficulty:</strong> None (1 hour ahead)<br/>
          <strong>Recovery time:</strong> Instant<br/>
          <strong>Tips:</strong> No jet lag! Eurostar from London is often easier than flying.
        </p>
      </div>

      <h3>🇸🇬🇭🇰🇯🇵 From Asia</h3>
      <div className="not-prose my-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
        <p className="text-sm">
          <strong>Difficulty:</strong> Moderate (6-8 hours behind)<br/>
          <strong>Recovery time:</strong> 2-4 days<br/>
          <strong>Tips:</strong> Arrive afternoon/evening Paris time, avoid sleeping on the plane 
          if arriving in morning, get evening light.
        </p>
      </div>

      <h3>🇦🇺 From Australia</h3>
      <div className="not-prose my-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
        <p className="text-sm">
          <strong>Difficulty:</strong> Very hard (9-10 hours behind + long flight)<br/>
          <strong>Recovery time:</strong> 5-7 days<br/>
          <strong>Tips:</strong> Consider stopover (Dubai, Singapore). Give yourself 2 recovery days 
          before important activities.
        </p>
      </div>

      <h2>Entry Requirements</h2>

      <ul>
        <li><strong>EU/EEA citizens:</strong> ID card or passport, no visa needed</li>
        <li><strong>US/UK/Canada/Australia:</strong> Passport valid 3+ months, no visa for stays under 90 days</li>
        <li><strong>Schengen rules:</strong> 90 days in any 180-day period across all Schengen countries</li>
        <li><strong>ETIAS (coming 2025):</strong> New pre-travel authorization for visa-exempt visitors</li>
      </ul>

      <h2>Money & SIM Cards</h2>

      <h3>Currency</h3>
      <ul>
        <li><strong>Currency:</strong> Euro (€)</li>
        <li><strong>ATMs:</strong> Widely available, use bank ATMs to avoid fees</li>
        <li><strong>Cards:</strong> Visa/Mastercard widely accepted, some places cash-only</li>
        <li><strong>Tipping:</strong> Service included; round up or leave €1-2 for good service</li>
      </ul>

      <h3>SIM Cards</h3>
      <ul>
        <li><strong>Free Mobile:</strong> €2/month prepaid, excellent coverage</li>
        <li><strong>Orange Holiday:</strong> Tourist SIM at airport, 20GB for 2 weeks</li>
        <li><strong>Lebara/Lycamobile:</strong> Available at tabacs (tobacco shops)</li>
        <li><strong>EU roaming:</strong> EU SIM cards work at home rates</li>
      </ul>

      <h2>First Day in Paris Tips</h2>

      <ol>
        <li><strong>Set your watch immediately</strong> - Commit to Paris time</li>
        <li><strong>Get sunlight</strong> - Walk around, visit a park</li>
        <li><strong>Eat at local mealtimes</strong> - Even if not hungry</li>
        <li><strong>Avoid alcohol on day 1</strong> - Worsens jet lag</li>
        <li><strong>No naps after 3 PM</strong> - Or keep under 20 minutes</li>
        <li><strong>Light dinner, early bed</strong> - Aim for 9-10 PM Paris time</li>
      </ol>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h3 className="font-bold mb-3">🎒 Paris Arrival Checklist</h3>
        <ul className="text-sm space-y-1">
          <li>☐ Passport valid 3+ months beyond stay</li>
          <li>☐ Hotel/accommodation address for customs</li>
          <li>☐ Some cash (€50-100) for first day</li>
          <li>☐ Phone charger (European Type C/E plugs)</li>
          <li>☐ Transport ticket/Navigo app ready</li>
          <li>☐ Basic French phrases downloaded</li>
        </ul>
      </div>
    </article>
  )
}
