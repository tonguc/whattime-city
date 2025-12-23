'use client'

import { City } from '@/lib/cities'

interface Props {
  city: City
}

export default function ParisTimeDifferenceContent({ city }: Props) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Paris Time Difference: CET/CEST vs World Cities</h1>
      
      <p className="lead">
        Paris uses Central European Time (CET, UTC+1) in winter and Central European Summer Time 
        (CEST, UTC+2) from late March to late October.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">🕐 Paris Time Zone Basics</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Winter (CET):</strong> UTC+1<br/>
            <strong>Summer (CEST):</strong> UTC+2<br/>
            <strong>DST starts:</strong> Last Sunday of March
          </div>
          <div>
            <strong>DST ends:</strong> Last Sunday of October<br/>
            <strong>Same timezone as:</strong> Berlin, Rome, Madrid, Amsterdam, Brussels
          </div>
        </div>
      </div>

      <h2>Paris vs Major World Cities</h2>

      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-3 text-left">City</th>
              <th className="p-3 text-left">Winter Diff</th>
              <th className="p-3 text-left">Summer Diff</th>
              <th className="p-3 text-left">When Paris 12 PM</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td className="p-3">🇺🇸 New York</td><td className="p-3">-6 hours</td><td className="p-3">-6 hours</td><td className="p-3">6:00 AM</td></tr>
            <tr><td className="p-3">🇺🇸 Los Angeles</td><td className="p-3">-9 hours</td><td className="p-3">-9 hours</td><td className="p-3">3:00 AM</td></tr>
            <tr><td className="p-3">🇺🇸 Chicago</td><td className="p-3">-7 hours</td><td className="p-3">-7 hours</td><td className="p-3">5:00 AM</td></tr>
            <tr><td className="p-3">🇬🇧 London</td><td className="p-3">-1 hour</td><td className="p-3">-1 hour</td><td className="p-3">11:00 AM</td></tr>
            <tr><td className="p-3">🇩🇪 Berlin</td><td className="p-3">Same</td><td className="p-3">Same</td><td className="p-3">12:00 PM</td></tr>
            <tr><td className="p-3">🇪🇸 Madrid</td><td className="p-3">Same</td><td className="p-3">Same</td><td className="p-3">12:00 PM</td></tr>
            <tr><td className="p-3">🇮🇹 Rome</td><td className="p-3">Same</td><td className="p-3">Same</td><td className="p-3">12:00 PM</td></tr>
            <tr><td className="p-3">🇦🇪 Dubai</td><td className="p-3">+3 hours</td><td className="p-3">+2 hours</td><td className="p-3">3:00 PM</td></tr>
            <tr><td className="p-3">🇮🇳 Mumbai</td><td className="p-3">+4:30</td><td className="p-3">+3:30</td><td className="p-3">4:30 PM</td></tr>
            <tr><td className="p-3">🇸🇬 Singapore</td><td className="p-3">+7 hours</td><td className="p-3">+6 hours</td><td className="p-3">7:00 PM</td></tr>
            <tr><td className="p-3">🇭🇰 Hong Kong</td><td className="p-3">+7 hours</td><td className="p-3">+6 hours</td><td className="p-3">7:00 PM</td></tr>
            <tr><td className="p-3">🇯🇵 Tokyo</td><td className="p-3">+8 hours</td><td className="p-3">+7 hours</td><td className="p-3">8:00 PM</td></tr>
            <tr><td className="p-3">🇦🇺 Sydney</td><td className="p-3">+10 hours</td><td className="p-3">+8 hours*</td><td className="p-3">10:00 PM</td></tr>
          </tbody>
        </table>
        <p className="text-xs mt-2 text-slate-500">*Sydney and Paris have opposite DST seasons, affecting the difference.</p>
      </div>

      <h2>Cities in the Same Timezone as Paris</h2>

      <p>These cities share Central European Time with Paris:</p>

      <ul>
        <li>🇩🇪 Berlin, Frankfurt, Munich (Germany)</li>
        <li>🇪🇸 Madrid, Barcelona (Spain)</li>
        <li>🇮🇹 Rome, Milan (Italy)</li>
        <li>🇳🇱 Amsterdam (Netherlands)</li>
        <li>🇧🇪 Brussels (Belgium)</li>
        <li>🇦🇹 Vienna (Austria)</li>
        <li>🇨🇭 Zürich, Geneva (Switzerland)</li>
        <li>🇵🇱 Warsaw (Poland)</li>
        <li>🇨🇿 Prague (Czech Republic)</li>
        <li>🇭🇺 Budapest (Hungary)</li>
        <li>🇸🇪 Stockholm (Sweden)</li>
        <li>🇳🇴 Oslo (Norway)</li>
        <li>🇩🇰 Copenhagen (Denmark)</li>
      </ul>

      <h2>Daylight Saving Time Impact</h2>

      <p>
        Paris switches to summer time (CEST) on the <strong>last Sunday of March</strong> at 2:00 AM 
        (clocks forward to 3:00 AM), and back to winter time (CET) on the <strong>last Sunday of 
        October</strong> at 3:00 AM (clocks back to 2:00 AM).
      </p>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
        <strong>DST Transition Dates 2025:</strong>
        <ul className="text-sm mt-2">
          <li>• <strong>Spring forward:</strong> Sunday, March 30, 2025 (2 AM → 3 AM)</li>
          <li>• <strong>Fall back:</strong> Sunday, October 26, 2025 (3 AM → 2 AM)</li>
        </ul>
      </div>

      <h3>DST Complications</h3>

      <p>During DST transitions, the time difference with some cities changes:</p>

      <ul>
        <li><strong>US cities:</strong> Different DST dates (March 9 / Nov 2 in 2025) create 3-week periods where the difference is off by 1 hour</li>
        <li><strong>Australia/NZ:</strong> Southern hemisphere DST is opposite, creating complex variations</li>
        <li><strong>Asia (no DST):</strong> Difference changes by 1 hour when Paris switches</li>
      </ul>

      <h2>Common Time Comparisons</h2>

      <div className="not-prose my-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <h3 className="font-bold mb-3">When it's 9:00 AM in Paris (Winter CET):</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div>🇺🇸 NYC: 3:00 AM</div>
          <div>🇺🇸 LA: 12:00 AM</div>
          <div>🇬🇧 London: 8:00 AM</div>
          <div>🇦🇪 Dubai: 12:00 PM</div>
          <div>🇮🇳 Mumbai: 1:30 PM</div>
          <div>🇸🇬 Singapore: 4:00 PM</div>
          <div>🇯🇵 Tokyo: 5:00 PM</div>
          <div>🇦🇺 Sydney: 7:00 PM</div>
        </div>
      </div>

      <div className="not-prose my-6 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl">
        <h3 className="font-bold mb-3">When it's 6:00 PM in Paris (Winter CET):</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div>🇺🇸 NYC: 12:00 PM</div>
          <div>🇺🇸 LA: 9:00 AM</div>
          <div>🇬🇧 London: 5:00 PM</div>
          <div>🇦🇪 Dubai: 9:00 PM</div>
          <div>🇮🇳 Mumbai: 10:30 PM</div>
          <div>🇸🇬 Singapore: 1:00 AM*</div>
          <div>🇯🇵 Tokyo: 2:00 AM*</div>
          <div>🇦🇺 Sydney: 4:00 AM*</div>
        </div>
        <p className="text-xs mt-2 text-slate-500">*Next day</p>
      </div>

      <h2>Business Overlap Windows</h2>

      <h3>Paris ↔ New York</h3>
      <p>
        With a 6-hour difference, the main overlap is <strong>3:00 PM - 6:00 PM Paris</strong> = 
        <strong>9:00 AM - 12:00 PM New York</strong>. This is the prime window for transatlantic calls.
      </p>

      <h3>Paris ↔ Asia</h3>
      <p>
        Morning in Paris overlaps with end-of-day Asia. <strong>9:00 AM Paris</strong> = 
        <strong>4:00 PM Singapore / 5:00 PM Tokyo</strong>. This gives about 1-2 hours of overlap.
      </p>

      <h3>Paris ↔ London</h3>
      <p>
        Just 1 hour difference makes collaboration easy. Full business day overlap from 
        9:00 AM - 5:00 PM (either city's time).
      </p>

      <h2>Fun Time Facts</h2>

      <ul>
        <li>Paris was actually on GMT until 1940 when Germany imposed CET during occupation</li>
        <li>France is geographically aligned with UK/Portugal but uses CET</li>
        <li>Spain also uses CET despite being further west than UK</li>
        <li>The EU has debated abolishing DST, but no decision yet</li>
        <li>France's overseas territories span 12 different time zones</li>
      </ul>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h3 className="font-bold mb-3">📱 Quick Reference</h3>
        <p className="text-sm">
          <strong>Paris timezone:</strong> CET (UTC+1) winter / CEST (UTC+2) summer<br/>
          <strong>NYC difference:</strong> Always 6 hours behind Paris<br/>
          <strong>London difference:</strong> Always 1 hour behind Paris<br/>
          <strong>Tokyo difference:</strong> 8 hours ahead (winter) / 7 hours ahead (summer)
        </p>
      </div>
    </article>
  )
}
