'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeTimeDifferenceContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const sgTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const timeStr = sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Singapore Time Difference
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          SGT (UTC+8) compared to major world cities
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-sm">🕐 Current time in Singapore: <strong>{timeStr}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Reference</h2>
        <p>
          Singapore is <strong>UTC+8</strong> year-round (no daylight saving). 
          That's <strong>13 hours ahead</strong> of New York, <strong>8 hours ahead</strong> of London, 
          and <strong>3 hours behind</strong> Sydney.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Time Difference Table</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>When SG is 9 AM</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>When SG is 6 PM</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇺🇸 New York</td>
                <td className="px-4 py-3">-13 hours</td>
                <td className="px-4 py-3">8:00 PM (prev day)</td>
                <td className="px-4 py-3">5:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇺🇸 Los Angeles</td>
                <td className="px-4 py-3">-16 hours</td>
                <td className="px-4 py-3">5:00 PM (prev day)</td>
                <td className="px-4 py-3">2:00 AM</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇬🇧 London</td>
                <td className="px-4 py-3">-8 hours</td>
                <td className="px-4 py-3">1:00 AM</td>
                <td className="px-4 py-3">10:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇩🇪 Berlin</td>
                <td className="px-4 py-3">-7 hours</td>
                <td className="px-4 py-3">2:00 AM</td>
                <td className="px-4 py-3">11:00 AM</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇦🇪 Dubai</td>
                <td className="px-4 py-3">-4 hours</td>
                <td className="px-4 py-3">5:00 AM</td>
                <td className="px-4 py-3">2:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇮🇳 Mumbai</td>
                <td className="px-4 py-3">-2.5 hours</td>
                <td className="px-4 py-3">6:30 AM</td>
                <td className="px-4 py-3">3:30 PM</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇭🇰 Hong Kong</td>
                <td className="px-4 py-3">0 hours</td>
                <td className="px-4 py-3">9:00 AM</td>
                <td className="px-4 py-3">6:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇯🇵 Tokyo</td>
                <td className="px-4 py-3">+1 hour</td>
                <td className="px-4 py-3">10:00 AM</td>
                <td className="px-4 py-3">7:00 PM</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇦🇺 Sydney</td>
                <td className="px-4 py-3">+3 hours</td>
                <td className="px-4 py-3">12:00 PM</td>
                <td className="px-4 py-3">9:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇳🇿 Auckland</td>
                <td className="px-4 py-3">+5 hours</td>
                <td className="px-4 py-3">2:00 PM</td>
                <td className="px-4 py-3">11:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className={`mt-2 text-sm ${mutedColor}`}>
          * Times shown for standard time. Adjust for daylight saving in those locations.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌐 Same Timezone Cities</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-3 text-sm">These cities share the same time as Singapore (UTC+8):</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
            <span className={`px-3 py-2 rounded ${isLight ? 'bg-white' : 'bg-slate-800'}`}>🇭🇰 Hong Kong</span>
            <span className={`px-3 py-2 rounded ${isLight ? 'bg-white' : 'bg-slate-800'}`}>🇲🇾 Kuala Lumpur</span>
            <span className={`px-3 py-2 rounded ${isLight ? 'bg-white' : 'bg-slate-800'}`}>🇨🇳 Beijing</span>
            <span className={`px-3 py-2 rounded ${isLight ? 'bg-white' : 'bg-slate-800'}`}>🇨🇳 Shanghai</span>
            <span className={`px-3 py-2 rounded ${isLight ? 'bg-white' : 'bg-slate-800'}`}>🇹🇼 Taipei</span>
            <span className={`px-3 py-2 rounded ${isLight ? 'bg-white' : 'bg-slate-800'}`}>🇵🇭 Manila</span>
            <span className={`px-3 py-2 rounded ${isLight ? 'bg-white' : 'bg-slate-800'}`}>🇮🇩 Bali (WITA)</span>
            <span className={`px-3 py-2 rounded ${isLight ? 'bg-white' : 'bg-slate-800'}`}>🇧🇳 Brunei</span>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>⏰ DST Impact on Singapore</h2>
        
        <div className={`p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'}`}>
          <h3 className={`font-semibold mb-2 ${headingColor}`}>Singapore doesn't observe DST</h3>
          <p className="text-sm mb-3">
            But many countries Singapore works with DO observe daylight saving. Here's how it affects time differences:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-medium mb-1">🇬🇧 London</p>
              <ul>
                <li>• Winter (GMT): -8 hours</li>
                <li>• Summer (BST): -7 hours</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">🇺🇸 New York</p>
              <ul>
                <li>• Winter (EST): -13 hours</li>
                <li>• Summer (EDT): -12 hours</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">🇦🇺 Sydney</p>
              <ul>
                <li>• Winter (AEST): +2 hours</li>
                <li>• Summer (AEDT): +3 hours</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-1">🇪🇺 Europe (CET)</p>
              <ul>
                <li>• Winter: -7 hours</li>
                <li>• Summer: -6 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📊 Singapore's Position</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Global Time Position</h3>
          <p className="text-sm mb-3">
            Singapore is positioned perfectly to bridge Asia and Europe within a single workday:
          </p>
          <ul className="text-sm space-y-2">
            <li>• <strong>Morning (9 AM SGT):</strong> Connect with Australia (noon), Asia-Pacific active</li>
            <li>• <strong>Afternoon (2 PM SGT):</strong> Europe starting their day (6-8 AM)</li>
            <li>• <strong>Evening (6 PM SGT):</strong> Full overlap with European business hours</li>
            <li>• <strong>Late night (10 PM SGT):</strong> US East Coast starting (9 AM)</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is Singapore GMT+8?</h3>
            <p className="text-sm">
              Yes, Singapore is UTC+8 (same as GMT+8) year-round. The timezone is called 
              Singapore Standard Time (SGT).
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does Singapore change clocks?</h3>
            <p className="text-sm">
              No, Singapore does not observe daylight saving time. The time stays 
              constant throughout the year at UTC+8.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Why is Singapore UTC+8 and not UTC+7?</h3>
            <p className="text-sm">
              Geographically Singapore should be UTC+7, but it uses UTC+8 to align with 
              Malaysia, Hong Kong, and China for business convenience.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/call-times/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📞</span><span>Best Time to Call</span>
          </Link>
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
