'use client'

import { City } from '@/lib/cities'

interface Props {
  city: City
}

export default function ParisRemoteWorkContent({ city }: Props) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Working with Paris Teams Remotely: Time Zone Overlap & Meeting Guide</h1>
      
      <p className="lead">
        Paris operates on Central European Time (CET/CEST). For remote workers collaborating with 
        French teams, understanding the overlap windows and work culture is essential.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">⏰ Paris Working Hours at a Glance</h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong>Standard office hours:</strong> 9:00 AM - 6:00 PM CET<br/>
            <strong>Core meeting time:</strong> 10:00 AM - 12:00 PM, 2:00 PM - 5:00 PM<br/>
            <strong>Lunch break:</strong> 12:00 PM - 2:00 PM (sacred!)
          </div>
          <div>
            <strong>Winter (CET):</strong> UTC+1<br/>
            <strong>Summer (CEST):</strong> UTC+2<br/>
            <strong>DST:</strong> Late March → Late October
          </div>
        </div>
      </div>

      <h2>Time Zone Overlap Windows</h2>

      <h3>🇺🇸 Paris ↔ US East Coast (New York, Boston)</h3>
      <ul>
        <li><strong>Overlap:</strong> 3:00 PM - 6:00 PM Paris = 9:00 AM - 12:00 PM ET</li>
        <li><strong>Best meeting time:</strong> 4:00 PM Paris / 10:00 AM New York</li>
        <li><strong>Challenge:</strong> Limited to afternoon in Paris</li>
      </ul>

      <h3>🇺🇸 Paris ↔ US West Coast (SF, LA)</h3>
      <ul>
        <li><strong>Overlap:</strong> 6:00 PM - 7:00 PM Paris = 9:00 AM - 10:00 AM PT</li>
        <li><strong>Best meeting time:</strong> 6:00 PM Paris / 9:00 AM SF</li>
        <li><strong>Challenge:</strong> Very limited window, evening calls for Paris</li>
      </ul>

      <h3>🇬🇧 Paris ↔ London</h3>
      <ul>
        <li><strong>Difference:</strong> Paris is 1 hour ahead</li>
        <li><strong>Overlap:</strong> 9:00 AM - 6:00 PM (nearly full day)</li>
        <li><strong>Best meeting time:</strong> 10:00 AM - 5:00 PM either city</li>
        <li><strong>Easy:</strong> Same workday, just 1 hour shift</li>
      </ul>

      <h3>🇦🇪 Paris ↔ Dubai</h3>
      <ul>
        <li><strong>Difference:</strong> Dubai is 3 hours ahead</li>
        <li><strong>Overlap:</strong> 9:00 AM - 3:00 PM Paris = 12:00 PM - 6:00 PM Dubai</li>
        <li><strong>Best meeting time:</strong> 10:00 AM Paris / 1:00 PM Dubai</li>
      </ul>

      <h3>🇸🇬 Paris ↔ Singapore</h3>
      <ul>
        <li><strong>Difference:</strong> Singapore is 7 hours ahead</li>
        <li><strong>Overlap:</strong> 9:00 AM - 11:00 AM Paris = 4:00 PM - 6:00 PM Singapore</li>
        <li><strong>Best meeting time:</strong> 9:00 AM Paris / 4:00 PM Singapore</li>
      </ul>

      <h3>🇯🇵 Paris ↔ Tokyo</h3>
      <ul>
        <li><strong>Difference:</strong> Tokyo is 8 hours ahead</li>
        <li><strong>Overlap:</strong> 9:00 AM - 10:00 AM Paris = 5:00 PM - 6:00 PM Tokyo</li>
        <li><strong>Best meeting time:</strong> 9:00 AM Paris / 5:00 PM Tokyo</li>
        <li><strong>Alternative:</strong> 6:00 PM Paris / 2:00 AM Tokyo (next day) - tough</li>
      </ul>

      <h3>🇦🇺 Paris ↔ Sydney</h3>
      <ul>
        <li><strong>Difference:</strong> Sydney is 9-10 hours ahead (varies with DST)</li>
        <li><strong>Overlap:</strong> 8:00 AM Paris = 5:00 PM Sydney (winter)</li>
        <li><strong>Challenge:</strong> Almost no overlap during business hours</li>
        <li><strong>Best:</strong> Early morning Paris / end of day Sydney</li>
      </ul>

      <h2>French Work Culture</h2>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
        <h3 className="font-bold mb-2">🍽️ The Sacred Lunch Hour</h3>
        <p className="text-sm">
          Never schedule meetings between 12:00 PM - 2:00 PM Paris time. The French lunch break 
          is culturally important and often used for team bonding. Expect delayed responses 
          during this window.
        </p>
      </div>

      <h3>Key Cultural Points</h3>
      <ul>
        <li><strong>Formality:</strong> Business communication tends to be more formal initially</li>
        <li><strong>"Bonjour" first:</strong> Always start with a greeting, even in quick messages</li>
        <li><strong>Work-life balance:</strong> French law protects "right to disconnect" after hours</li>
        <li><strong>August:</strong> Many take the entire month off - plan accordingly</li>
        <li><strong>Friday afternoons:</strong> Often end early, especially in summer</li>
      </ul>

      <h2>Optimal Meeting Times by Region</h2>

      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-3 text-left">Your Location</th>
              <th className="p-3 text-left">Best Time (Your Local)</th>
              <th className="p-3 text-left">Paris Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td className="p-3">New York</td><td className="p-3">9:00 AM - 12:00 PM</td><td className="p-3">3:00 PM - 6:00 PM</td></tr>
            <tr><td className="p-3">Los Angeles</td><td className="p-3">9:00 AM - 10:00 AM</td><td className="p-3">6:00 PM - 7:00 PM</td></tr>
            <tr><td className="p-3">London</td><td className="p-3">9:00 AM - 5:00 PM</td><td className="p-3">10:00 AM - 6:00 PM</td></tr>
            <tr><td className="p-3">Dubai</td><td className="p-3">12:00 PM - 6:00 PM</td><td className="p-3">9:00 AM - 3:00 PM</td></tr>
            <tr><td className="p-3">Singapore</td><td className="p-3">4:00 PM - 6:00 PM</td><td className="p-3">9:00 AM - 11:00 AM</td></tr>
            <tr><td className="p-3">Tokyo</td><td className="p-3">5:00 PM - 6:00 PM</td><td className="p-3">9:00 AM - 10:00 AM</td></tr>
            <tr><td className="p-3">Sydney</td><td className="p-3">5:00 PM - 7:00 PM</td><td className="p-3">8:00 AM - 10:00 AM</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Async Collaboration Tips</h2>

      <ol>
        <li><strong>Record meetings:</strong> For team members in incompatible time zones</li>
        <li><strong>Use Loom/video updates:</strong> Instead of requiring live attendance</li>
        <li><strong>Set clear response windows:</strong> "Will respond within 24h"</li>
        <li><strong>Overlap hours for urgent:</strong> Define when real-time is required</li>
        <li><strong>Respect the disconnect:</strong> Don't expect after-hours responses</li>
      </ol>

      <h2>French Public Holidays to Note</h2>

      <p>
        French teams will be unavailable on these days. Plan around them:
      </p>
      <ul>
        <li><strong>May 1:</strong> Labour Day (everything closes)</li>
        <li><strong>May 8:</strong> Victory in Europe Day</li>
        <li><strong>July 14:</strong> Bastille Day</li>
        <li><strong>August 15:</strong> Assumption</li>
        <li><strong>November 1:</strong> All Saints' Day</li>
        <li><strong>November 11:</strong> Armistice Day</li>
      </ul>

      <div className="not-prose my-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <h3 className="font-bold mb-3">📧 Email Timing Tips</h3>
        <ul className="text-sm space-y-1">
          <li>• Send before 9:00 AM Paris for morning attention</li>
          <li>• Avoid sending 12:00 PM - 2:00 PM (lunch)</li>
          <li>• After 6:00 PM may not get response until next day</li>
          <li>• Friday afternoon emails often wait until Monday</li>
        </ul>
      </div>
    </article>
  )
}
