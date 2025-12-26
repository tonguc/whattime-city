'use client'

import { City } from '@/lib/cities'

interface Props {
  city: City
}

export default function ParisBestTimeToVisitContent({ city }: Props) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Best Time to Visit Paris: Month-by-Month Weather, Crowds & Events</h1>
      
      <p className="lead">
        Paris is beautiful year-round, but each season offers a different experience. From 
        spring cherry blossoms to winter holiday markets, here's when to plan your visit.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">🎯 Quick Recommendation</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong>Best Overall:</strong><br/>
            April-June, September-October
          </div>
          <div>
            <strong>Cheapest:</strong><br/>
            January-February, November
          </div>
          <div>
            <strong>Avoid:</strong><br/>
            August (everything closed)
          </div>
        </div>
      </div>

      <h2>Paris Weather by Season</h2>

      <h3>🌸 Spring (March - May)</h3>
      <ul>
        <li><strong>Temperature:</strong> 8-18°C (46-64°F)</li>
        <li><strong>Rainfall:</strong> Moderate, pack an umbrella</li>
        <li><strong>Crowds:</strong> Growing through May</li>
        <li><strong>Highlights:</strong> Cherry blossoms, outdoor cafés reopen, gardens bloom</li>
      </ul>
      <p>
        Spring is magical in Paris. Luxembourg Gardens and Jardin des Tuileries come alive with 
        flowers. April can still be chilly, but May offers warm days perfect for strolling.
      </p>

      <h3>☀️ Summer (June - August)</h3>
      <ul>
        <li><strong>Temperature:</strong> 16-26°C (61-79°F)</li>
        <li><strong>Rainfall:</strong> Low, occasional thunderstorms</li>
        <li><strong>Crowds:</strong> Peak tourists (except August locals)</li>
        <li><strong>Highlights:</strong> Long days (sunset 10 PM!), Paris Plages, outdoor festivals</li>
      </ul>
      <p>
        June is ideal - warm weather, long days, locals still present. July sees Bastille Day 
        celebrations. August: most Parisians leave, many local spots close, but tourist sites 
        remain open and slightly less crowded.
      </p>

      <h3>🍂 Autumn (September - November)</h3>
      <ul>
        <li><strong>Temperature:</strong> 9-19°C (48-66°F)</li>
        <li><strong>Rainfall:</strong> Increasing</li>
        <li><strong>Crowds:</strong> Moderate, decreasing</li>
        <li><strong>Highlights:</strong> Fashion Week, autumn colors, "la rentrée" energy</li>
      </ul>
      <p>
        September is perfect - warm, locals back, cultural season begins. October offers fall 
        colors in parks. November gets gray but has fewer tourists and good hotel deals.
      </p>

      <h3>❄️ Winter (December - February)</h3>
      <ul>
        <li><strong>Temperature:</strong> 3-8°C (37-46°F)</li>
        <li><strong>Rainfall:</strong> Moderate (rare snow)</li>
        <li><strong>Crowds:</strong> Low (except holidays)</li>
        <li><strong>Highlights:</strong> Christmas markets, New Year's Eve, winter sales</li>
      </ul>
      <p>
        December is magical with holiday lights along Champs-Élysées. January-February are cold 
        but offer the best prices and shortest museum lines. The January sales (Les Soldes) 
        offer excellent shopping.
      </p>

      <h2>Major Events Calendar</h2>

      <div className="not-prose my-6">
        <div className="grid gap-3">
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <strong>Fashion Week</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">Ready-to-wear shows, celebrity sightings</p>
              </div>
              <span className="text-sm bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">Feb/Mar & Sep/Oct</span>
            </div>
          </div>
          
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <strong>Roland Garros (French Open)</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">Grand Slam tennis tournament</p>
              </div>
              <span className="text-sm bg-orange-100 dark:bg-orange-900 px-2 py-1 rounded">Late May - Early Jun</span>
            </div>
          </div>
          
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <strong>Fête de la Musique</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">Free concerts citywide</p>
              </div>
              <span className="text-sm bg-green-100 dark:bg-green-900 px-2 py-1 rounded">June 21</span>
            </div>
          </div>
          
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <strong>Bastille Day</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">Military parade, fireworks at Eiffel Tower</p>
              </div>
              <span className="text-sm bg-red-100 dark:bg-red-900 px-2 py-1 rounded">July 14</span>
            </div>
          </div>
          
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <strong>Tour de France Finale</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">Final stage on Champs-Élysées</p>
              </div>
              <span className="text-sm bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">Late July</span>
            </div>
          </div>
          
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <strong>Nuit Blanche</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">All-night art festival</p>
              </div>
              <span className="text-sm bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">Early October</span>
            </div>
          </div>
          
          <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <strong>Christmas Markets</strong>
                <p className="text-sm text-slate-600 dark:text-slate-400">Tuileries, Trocadéro, Champs-Élysées</p>
              </div>
              <span className="text-sm bg-red-100 dark:bg-red-900 px-2 py-1 rounded">Late Nov - Dec</span>
            </div>
          </div>
        </div>
      </div>

      <h2>Month-by-Month Guide</h2>

      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Temp (°C)</th>
            <th>Crowds</th>
            <th>Prices</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>January</td><td>3-7°</td><td>Low</td><td>💰</td><td>Sales, museums</td></tr>
          <tr><td>February</td><td>3-8°</td><td>Low</td><td>💰</td><td>Fashion Week</td></tr>
          <tr><td>March</td><td>6-12°</td><td>Medium</td><td>💰💰</td><td>Spring awakening</td></tr>
          <tr><td>April</td><td>8-16°</td><td>High</td><td>💰💰💰</td><td>Easter, gardens</td></tr>
          <tr><td>May</td><td>12-19°</td><td>High</td><td>💰💰💰</td><td>Perfect weather</td></tr>
          <tr><td>June</td><td>15-23°</td><td>High</td><td>💰💰💰</td><td>Long days, tennis</td></tr>
          <tr><td>July</td><td>17-25°</td><td>Peak</td><td>💰💰💰💰</td><td>Bastille Day</td></tr>
          <tr><td>August</td><td>17-25°</td><td>Tourists only</td><td>💰💰💰</td><td>Avoid if possible</td></tr>
          <tr><td>September</td><td>14-21°</td><td>Medium</td><td>💰💰</td><td>Best month overall</td></tr>
          <tr><td>October</td><td>10-16°</td><td>Medium</td><td>💰💰</td><td>Autumn colors</td></tr>
          <tr><td>November</td><td>6-11°</td><td>Low</td><td>💰</td><td>Beaujolais Nouveau</td></tr>
          <tr><td>December</td><td>4-8°</td><td>Medium</td><td>💰💰</td><td>Christmas magic</td></tr>
        </tbody>
      </table>

      <h2>The August Warning</h2>
      
      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
        <strong>⚠️ August Exodus:</strong> Many Parisians take the entire month off. Your favorite 
        bistro, the local boulangerie, even some museums may be closed for "congés annuels" 
        (annual leave). If you must visit in August, stick to major tourist areas.
      </div>

      <h2>Sunrise & Sunset Hours</h2>
      
      <ul>
        <li><strong>Summer solstice (June 21):</strong> Sunrise 5:47 AM, Sunset 9:58 PM</li>
        <li><strong>Winter solstice (Dec 21):</strong> Sunrise 8:42 AM, Sunset 4:54 PM</li>
        <li><strong>Spring/Autumn equinox:</strong> ~12 hours of daylight</li>
      </ul>

      <h2>Expert Recommendations</h2>
      
      <ol>
        <li><strong>First-timers:</strong> Late April to early June for ideal weather and flowers</li>
        <li><strong>Art lovers:</strong> November for empty museums and no crowds</li>
        <li><strong>Foodies:</strong> September when chefs return and markets peak</li>
        <li><strong>Romance:</strong> Early December with holiday lights and cozy cafés</li>
        <li><strong>Budget travelers:</strong> January-February (avoid Fashion Week dates)</li>
      </ol>
    </article>
  )
}
