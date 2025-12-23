'use client'

import { City } from '@/lib/cities'

interface Props {
  city: City
}

export default function ParisDigitalNomadContent({ city }: Props) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Digital Nomad Paris Guide: Coworking, Cafés & Cost of Living</h1>
      
      <p className="lead">
        Paris may not be the cheapest digital nomad destination, but its culture, infrastructure, 
        and central European timezone make it attractive for remote workers.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">💶 Paris at a Glance</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>Monthly Budget:</strong><br/>
            €2,500-3,500 (comfortable)<br/>
            €1,800-2,200 (budget)
          </div>
          <div>
            <strong>Coworking:</strong><br/>
            €200-450/month<br/>
            €25-50/day pass
          </div>
          <div>
            <strong>Internet:</strong><br/>
            100+ Mbps common<br/>
            Excellent 4G/5G
          </div>
        </div>
      </div>

      <h2>Best Coworking Spaces</h2>

      <h3>Premium Options (€300-500/month)</h3>
      
      <div className="not-prose my-6 space-y-4">
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h4 className="font-bold">WeWork</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">Multiple locations (La Fayette, Champs-Élysées, République)</p>
          <p className="text-sm">€450+/month for hot desk. Premium facilities, networking events, 24/7 access.</p>
        </div>
        
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h4 className="font-bold">Station F</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">13e arrondissement (Bibliothèque)</p>
          <p className="text-sm">World's largest startup campus. €200-350/month. Best for tech/startups. Amazing community.</p>
        </div>
        
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h4 className="font-bold">Morning Coworking</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">Multiple locations (Marais, Opéra, Sentier)</p>
          <p className="text-sm">€350-400/month. Beautiful design, good coffee, professional vibe.</p>
        </div>
      </div>

      <h3>Budget-Friendly Options (€150-300/month)</h3>

      <div className="not-prose my-6 space-y-4">
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h4 className="font-bold">La Ruche</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">84 Quai de Jemmapes, 10e</p>
          <p className="text-sm">€180-250/month. Social enterprise focus. Canal Saint-Martin location.</p>
        </div>
        
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h4 className="font-bold">Anticafé</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">Multiple locations</p>
          <p className="text-sm">Pay by the hour (€5-8/hr). Unlimited coffee, snacks, WiFi. Great for flexibility.</p>
        </div>
        
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h4 className="font-bold">Nuage Café</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">14 Rue des Carmes, 5e</p>
          <p className="text-sm">Pay-what-you-want model. Quirky, artsy vibe in Latin Quarter.</p>
        </div>
      </div>

      <h2>Laptop-Friendly Cafés</h2>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
        <strong>⚠️ Café Etiquette:</strong> Traditional French cafés are not designed for laptop work. 
        Look for cafés that specifically welcome remote workers. Order regularly (at least once per 
        hour) and avoid peak lunch times (12-2 PM).
      </div>

      <h3>Best Cafés for Working</h3>

      <ul>
        <li><strong>Café Craft</strong> (10e, 11e) - Multiple outlets, good WiFi, outlet access</li>
        <li><strong>KB CaféShop</strong> (9e, 18e) - Specialty coffee, laptop-friendly</li>
        <li><strong>Boot Café</strong> (3e) - Tiny but welcoming, great coffee</li>
        <li><strong>Honor Café</strong> (Marais) - Bright, spacious, work-friendly</li>
        <li><strong>The Broken Arm</strong> (3e) - Concept store café, design crowd</li>
        <li><strong>Coutume</strong> (7e) - Excellent coffee, relaxed atmosphere</li>
      </ul>

      <h2>Internet & Connectivity</h2>

      <ul>
        <li><strong>Average speed:</strong> 100-300 Mbps (fiber common in Paris)</li>
        <li><strong>Mobile data:</strong> 4G/5G excellent coverage</li>
        <li><strong>Prepaid SIM:</strong> Free Mobile (€2/month), Orange, SFR</li>
        <li><strong>Public WiFi:</strong> Available in libraries, parks, some squares</li>
        <li><strong>Libraries:</strong> Free WiFi at BNF, municipal libraries</li>
      </ul>

      <h2>Cost of Living Breakdown</h2>

      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-3 text-left">Expense</th>
              <th className="p-3 text-left">Budget</th>
              <th className="p-3 text-left">Comfortable</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td className="p-3">Accommodation (room/studio)</td><td className="p-3">€800-1,200</td><td className="p-3">€1,500-2,000</td></tr>
            <tr><td className="p-3">Coworking</td><td className="p-3">€150-200</td><td className="p-3">€300-450</td></tr>
            <tr><td className="p-3">Food & Groceries</td><td className="p-3">€300-400</td><td className="p-3">€500-700</td></tr>
            <tr><td className="p-3">Transport (Navigo)</td><td className="p-3">€86</td><td className="p-3">€86</td></tr>
            <tr><td className="p-3">Entertainment</td><td className="p-3">€100-200</td><td className="p-3">€300-500</td></tr>
            <tr><td className="p-3">Phone/SIM</td><td className="p-3">€5-20</td><td className="p-3">€20-40</td></tr>
            <tr className="font-bold"><td className="p-3">Total</td><td className="p-3">€1,500-2,200</td><td className="p-3">€2,700-3,800</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Best Neighborhoods for Digital Nomads</h2>

      <ul>
        <li><strong>Le Marais (3e, 4e):</strong> Central, trendy, many cafés, expensive</li>
        <li><strong>Canal Saint-Martin (10e):</strong> Hip, affordable(ish), great café scene</li>
        <li><strong>Bastille/Oberkampf (11e):</strong> Lively, good value, young crowd</li>
        <li><strong>Belleville (20e):</strong> Up-and-coming, cheap, multicultural</li>
        <li><strong>Montmartre (18e):</strong> Artistic, charming, some budget options</li>
      </ul>

      <h2>Visa & Legal Considerations</h2>

      <div className="not-prose my-6 space-y-4">
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h3 className="font-bold mb-2">🇪🇺 EU/EEA Citizens</h3>
          <p className="text-sm">Free to live and work in France indefinitely. Register if staying 3+ months.</p>
        </div>
        
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h3 className="font-bold mb-2">🇺🇸🇬🇧🇦🇺 Tourist Visa (90 days)</h3>
          <p className="text-sm">Schengen zone rules: 90 days in any 180-day period. Technically shouldn't work, 
          but remote work for non-French clients is gray area.</p>
        </div>
        
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
          <h3 className="font-bold mb-2">🎫 Long-Stay Options</h3>
          <ul className="text-sm space-y-1">
            <li>• <strong>Talent Passport:</strong> For highly skilled workers, entrepreneurs</li>
            <li>• <strong>Visitor Visa:</strong> 1 year, no work allowed</li>
            <li>• <strong>Student Visa:</strong> If enrolled in French institution</li>
          </ul>
        </div>
      </div>

      <h2>Pros & Cons</h2>

      <div className="not-prose my-6 grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">✅ Pros</h3>
          <ul className="text-sm space-y-1">
            <li>• World-class culture & food</li>
            <li>• Excellent public transport</li>
            <li>• Central European timezone</li>
            <li>• Fast internet infrastructure</li>
            <li>• Beautiful city to explore</li>
            <li>• Gateway to all of Europe</li>
          </ul>
        </div>
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-xl">
          <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">❌ Cons</h3>
          <ul className="text-sm space-y-1">
            <li>• High cost of living</li>
            <li>• Finding affordable housing hard</li>
            <li>• Bureaucracy if staying long-term</li>
            <li>• Language barrier (French helpful)</li>
            <li>• Traditional cafés not laptop-friendly</li>
            <li>• Gray weather in winter</li>
          </ul>
        </div>
      </div>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h3 className="font-bold mb-3">🎯 Paris Nomad Tips</h3>
        <ul className="text-sm space-y-1">
          <li>• Learn basic French - it opens many doors</li>
          <li>• Get a Navigo monthly pass (€86) for unlimited metro/bus</li>
          <li>• Join Station F community events even without membership</li>
          <li>• Try Anticafé for flexible, pay-by-hour workspace</li>
          <li>• Avoid August - half the city is on vacation</li>
        </ul>
      </div>
    </article>
  )
}
