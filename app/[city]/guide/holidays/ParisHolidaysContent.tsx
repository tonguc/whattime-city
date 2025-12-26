'use client'

import { City } from '@/lib/cities'

interface Props {
  city: City
}

export default function ParisHolidaysContent({ city }: Props) {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>French Public Holidays 2025: Paris Closures & What's Open</h1>
      
      <p className="lead">
        France has 11 public holidays ("jours fériés"). On these days, most businesses close, 
        but Paris has its own rules. Here's what you need to know.
      </p>

      <div className="not-prose my-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
        <h2 className="text-xl font-bold mb-4">🗓️ 2025 French Public Holidays</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>New Year's Day (Jour de l'An)</span><span className="font-mono">Wed, Jan 1</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>Easter Monday (Lundi de Pâques)</span><span className="font-mono">Mon, Apr 21</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>Labour Day (Fête du Travail)</span><span className="font-mono">Thu, May 1</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>Victory in Europe Day</span><span className="font-mono">Thu, May 8</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>Ascension Day</span><span className="font-mono">Thu, May 29</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>Whit Monday (Lundi de Pentecôte)</span><span className="font-mono">Mon, Jun 9</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>Bastille Day (Fête Nationale)</span><span className="font-mono">Mon, Jul 14</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>Assumption (Assomption)</span><span className="font-mono">Fri, Aug 15</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>All Saints' Day (Toussaint)</span><span className="font-mono">Sat, Nov 1</span>
          </div>
          <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
            <span>Armistice Day</span><span className="font-mono">Tue, Nov 11</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Christmas Day (Noël)</span><span className="font-mono">Thu, Dec 25</span>
          </div>
        </div>
      </div>

      <h2>May 1st: The Day Everything Closes</h2>

      <div className="not-prose my-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
        <strong>⚠️ Labour Day (May 1) is France's only mandatory holiday.</strong>
        <p className="text-sm mt-2">
          Unlike other holidays where businesses can choose to open, May 1st legally requires 
          closure of almost everything. Even supermarkets and most restaurants close. Only 
          essential services operate.
        </p>
      </div>

      <h2>What's Open on French Holidays?</h2>

      <h3>Usually Open</h3>
      <ul>
        <li><strong>Major museums:</strong> Louvre, Orsay (check specific holiday)</li>
        <li><strong>Tourist areas:</strong> Champs-Élysées shops, Marais boutiques</li>
        <li><strong>Boulangeries:</strong> Morning hours (often close afternoon)</li>
        <li><strong>Some restaurants:</strong> Especially in tourist zones</li>
        <li><strong>Metro & buses:</strong> Sunday/holiday schedule</li>
      </ul>

      <h3>Usually Closed</h3>
      <ul>
        <li><strong>Banks:</strong> All closed on public holidays</li>
        <li><strong>Government offices:</strong> Closed</li>
        <li><strong>Post offices:</strong> Closed</li>
        <li><strong>Local shops:</strong> Most neighborhood stores</li>
        <li><strong>Business offices:</strong> Closed</li>
      </ul>

      <h2>Key Holidays Explained</h2>

      <h3>🇫🇷 Bastille Day (July 14)</h3>
      <p>
        France's national day celebrates the 1789 storming of the Bastille. Expect:
      </p>
      <ul>
        <li>Military parade on Champs-Élysées (morning)</li>
        <li>Fireworks at the Eiffel Tower (night)</li>
        <li>Firefighters' balls ("Bals des Pompiers") at fire stations</li>
        <li>Many businesses closed, but tourist areas active</li>
        <li>Metro runs on Sunday schedule</li>
      </ul>

      <h3>🎄 Christmas Season</h3>
      <ul>
        <li><strong>December 24:</strong> Shops close early (around 5 PM)</li>
        <li><strong>December 25:</strong> Most things closed (not a work holiday by law, but observed)</li>
        <li><strong>December 26:</strong> Normal day in France (unlike UK/Germany)</li>
        <li><strong>December 31:</strong> Normal day until evening closures</li>
        <li><strong>January 1:</strong> Public holiday - most closed</li>
      </ul>

      <h3>🌸 Easter Weekend</h3>
      <ul>
        <li><strong>Good Friday:</strong> Normal working day in France</li>
        <li><strong>Easter Sunday:</strong> Sunday rules apply</li>
        <li><strong>Easter Monday:</strong> Public holiday - many closed</li>
      </ul>

      <h2>The "Pont" Tradition</h2>

      <p>
        When a holiday falls on Tuesday or Thursday, French workers often take Monday or Friday 
        off to create a 4-day weekend. This is called "faire le pont" (making the bridge).
      </p>

      <div className="not-prose my-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
        <strong>2025 "Pont" Opportunities:</strong>
        <ul className="text-sm mt-2 space-y-1">
          <li>• May 1-4 (Thu-Sun with May 1 & Fri bridge)</li>
          <li>• May 8-11 (Thu-Sun with Fri bridge)</li>
          <li>• May 29 - Jun 1 (Ascension Thu + Fri bridge)</li>
          <li>• Aug 15-17 (Fri-Sun long weekend)</li>
          <li>• Nov 11 (Tue - Mon bridge possible)</li>
        </ul>
      </div>

      <h2>Museum Closures</h2>

      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800">
            <tr>
              <th className="p-3 text-left">Museum</th>
              <th className="p-3 text-left">Weekly Closure</th>
              <th className="p-3 text-left">Holiday Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr><td className="p-3">Louvre</td><td className="p-3">Tuesday</td><td className="p-3">Open most holidays (closed May 1, Dec 25, Jan 1)</td></tr>
            <tr><td className="p-3">Musée d'Orsay</td><td className="p-3">Monday</td><td className="p-3">Open most holidays (closed May 1, Dec 25, Jan 1)</td></tr>
            <tr><td className="p-3">Centre Pompidou</td><td className="p-3">Tuesday</td><td className="p-3">Open most holidays (closed May 1)</td></tr>
            <tr><td className="p-3">Versailles</td><td className="p-3">Monday</td><td className="p-3">Open most holidays</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Transport on Holidays</h2>

      <ul>
        <li><strong>Metro:</strong> Sunday/holiday schedule (reduced frequency)</li>
        <li><strong>Buses:</strong> Sunday/holiday schedule</li>
        <li><strong>RER trains:</strong> Reduced service</li>
        <li><strong>Taxis/Uber:</strong> Available, may have surge pricing</li>
        <li><strong>Vélib' bikes:</strong> Available 24/7</li>
      </ul>

      <h2>Shopping Tips for Holidays</h2>

      <ol>
        <li><strong>Stock up the day before</strong> - Supermarkets will be closed</li>
        <li><strong>Check restaurant hours</strong> - Many close, book in advance</li>
        <li><strong>Tourist areas stay open</strong> - Champs-Élysées, Marais, Montmartre</li>
        <li><strong>Morning boulangeries</strong> - Usually open until noon</li>
        <li><strong>Department stores</strong> - Often open on holidays (except May 1)</li>
      </ol>

      <div className="not-prose my-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl">
        <h3 className="font-bold mb-3">🛍️ Holiday Shopping Survival</h3>
        <ul className="text-sm space-y-1">
          <li>• <strong>Galeries Lafayette:</strong> Usually open on holidays</li>
          <li>• <strong>Printemps:</strong> Usually open on holidays</li>
          <li>• <strong>Monoprix:</strong> Check specific store</li>
          <li>• <strong>Franprix:</strong> Some locations open</li>
          <li>• <strong>Champs-Élysées:</strong> Most shops open</li>
        </ul>
      </div>
    </article>
  )
}
