'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiHolidaysContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const holidays2025 = [
    { date: 'Jan 1', name: "New Year's Day", impact: 'moderate', note: 'Fixed date' },
    { date: 'Mar 29 - Apr 1*', name: 'Eid Al Fitr', impact: 'extreme', note: '~4 days, depends on moon' },
    { date: 'Jun 5 - 8*', name: 'Eid Al Adha', impact: 'extreme', note: '~4 days, depends on moon' },
    { date: 'Jun 26*', name: 'Islamic New Year', impact: 'moderate', note: 'Depends on moon sighting' },
    { date: 'Sep 4*', name: 'Prophet Muhammad Birthday', impact: 'moderate', note: 'Depends on moon' },
    { date: 'Dec 1', name: 'Commemoration Day', impact: 'moderate', note: 'Fixed date' },
    { date: 'Dec 2-3', name: 'UAE National Day', impact: 'high', note: 'Major celebrations' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          UAE Holidays & What to Expect
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Ramadan, Eid, National Day & Islamic calendar holidays
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          UAE holidays follow both fixed dates and the <strong>Islamic lunar calendar</strong> (dates 
          shift ~11 days earlier each year). <strong>Ramadan</strong> (~30 days) isn't a holiday but 
          significantly changes daily life. <strong>Eid Al Fitr</strong> and <strong>Eid Al Adha</strong> 
          are the biggest celebrations — expect closures and crowds.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 2025 Public Holidays</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Date</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Impact</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {holidays2025.map((h, i) => (
                <tr key={h.date} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="px-4 py-3 font-medium whitespace-nowrap">{h.date}</td>
                  <td className="px-4 py-3">{h.name}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${
                      h.impact === 'extreme' ? 'bg-red-100 text-red-700' :
                      h.impact === 'high' ? 'bg-orange-100 text-orange-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {h.impact === 'extreme' ? 'Major' : h.impact === 'high' ? 'High' : 'Moderate'}
                    </span>
                  </td>
                  <td className={`px-4 py-3 ${mutedColor}`}>{h.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Islamic holidays depend on moon sighting and may shift by 1-2 days. Dates are approximate.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌙 Ramadan (March 2025)</h2>
        <div className={`p-6 rounded-xl border-2 border-purple-300 ${isLight ? 'bg-purple-50' : 'bg-purple-900/20'}`}>
          <p className="mb-4">
            <strong>Expected dates:</strong> ~February 28 - March 29, 2025 (depends on moon sighting)
          </p>
          <p className="mb-4">
            Ramadan is not a holiday — it's a month of fasting from dawn to sunset. Daily life 
            changes significantly:
          </p>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Eating/drinking in public:</strong> Not allowed during daylight (for everyone)</li>
            <li>• <strong>Working hours:</strong> Reduced by 2 hours for Muslims</li>
            <li>• <strong>Restaurants:</strong> Closed until Iftar (sunset) or screened off</li>
            <li>• <strong>Nightlife:</strong> Subdued — no loud music in public</li>
            <li>• <strong>Iftar time:</strong> City comes alive! Malls open late (1-2 AM)</li>
            <li>• <strong>Traffic:</strong> Crazy before Iftar, everyone rushing home</li>
          </ul>
          
          <div className={`mt-4 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <p className="text-sm">
              <strong>💡 Tip for visitors:</strong> Ramadan can be a beautiful cultural experience. 
              Hotels serve food discreetly to guests. Evening Iftar buffets are spectacular. 
              Just be respectful — no eating, drinking, or smoking in public during the day.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🎉 Eid Celebrations</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🌙 Eid Al Fitr</h3>
            <p className="text-sm mb-2">End of Ramadan — the "Festival of Breaking Fast"</p>
            <ul className="text-sm space-y-1">
              <li>• 3-4 day public holiday</li>
              <li>• Family gatherings, gift-giving</li>
              <li>• Malls and attractions packed</li>
              <li>• Fireworks, special events</li>
            </ul>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🐑 Eid Al Adha</h3>
            <p className="text-sm mb-2">"Festival of Sacrifice" — follows Hajj pilgrimage</p>
            <ul className="text-sm space-y-1">
              <li>• 4 day public holiday (largest)</li>
              <li>• Many expats travel</li>
              <li>• Charitable meat distribution</li>
              <li>• Banks/govt closed extended period</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🇦🇪 UAE National Day (Dec 2-3)</h2>
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-3">
            The UAE's biggest national celebration! Marks the federation of the seven 
            emirates in 1971.
          </p>
          <ul className="text-sm space-y-1">
            <li>• Massive fireworks at Burj Khalifa, Dubai Frame</li>
            <li>• Buildings lit up in UAE flag colors (red, green, white, black)</li>
            <li>• Car parades with flags everywhere</li>
            <li>• Special events, sales, decorations</li>
            <li>• Traffic can be chaotic — plan ahead!</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 What's Open During Holidays?</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Business</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Public Holidays</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Ramadan</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Malls</td>
                <td className="px-4 py-3 text-green-600">✓ Open (busy!)</td>
                <td className="px-4 py-3 text-green-600">✓ Open late nights</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Banks</td>
                <td className="px-4 py-3 text-red-600">✗ Closed</td>
                <td className="px-4 py-3 text-yellow-600">⚠ Reduced hours</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Government</td>
                <td className="px-4 py-3 text-red-600">✗ Closed</td>
                <td className="px-4 py-3 text-yellow-600">⚠ Reduced hours</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Restaurants</td>
                <td className="px-4 py-3 text-green-600">✓ Open</td>
                <td className="px-4 py-3 text-yellow-600">⚠ After Iftar only</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Tourist Attractions</td>
                <td className="px-4 py-3 text-green-600">✓ Open (crowded)</td>
                <td className="px-4 py-3 text-green-600">✓ Open</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>☀️</span><span>Best Time to Visit</span>
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
