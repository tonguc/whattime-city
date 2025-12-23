'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeCallTimesContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const sgTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = sgTime.getHours()
  const timeStr = sgTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const isBusinessHours = currentHour >= 9 && currentHour < 18
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call Singapore
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Optimal calling windows from USA, UK, Australia, and worldwide
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isBusinessHours ? 'bg-green-500' : 'bg-amber-500'}`}></span>
          <span className="text-sm">Singapore ({timeStr}): {isBusinessHours ? 'Business hours' : 'Outside office hours'}</span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          <strong>From USA (EST):</strong> Call at 7-9 PM your time (8-10 AM Singapore). 
          <strong>From UK:</strong> Call at 9 AM-12 PM your time (5-8 PM Singapore). 
          <strong>From Australia:</strong> Perfect overlap - call during your business hours!
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📞 Best Calling Times by Region</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>From</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Your Time</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Singapore Time</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className="px-4 py-3 font-medium">🇺🇸 New York</td>
                <td className="px-4 py-3">7:00 PM - 9:00 PM</td>
                <td className="px-4 py-3">8:00 AM - 10:00 AM</td>
                <td className="px-4 py-3">✅ Morning - Fresh start</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇺🇸 Los Angeles</td>
                <td className="px-4 py-3">4:00 PM - 6:00 PM</td>
                <td className="px-4 py-3">8:00 AM - 10:00 AM</td>
                <td className="px-4 py-3">Your afternoon, their morning</td>
              </tr>
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className="px-4 py-3 font-medium">🇬🇧 London</td>
                <td className="px-4 py-3">9:00 AM - 12:00 PM</td>
                <td className="px-4 py-3">5:00 PM - 8:00 PM</td>
                <td className="px-4 py-3">✅ Their evening works well</td>
              </tr>
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className="px-4 py-3 font-medium">🇦🇺 Sydney</td>
                <td className="px-4 py-3">10:00 AM - 6:00 PM</td>
                <td className="px-4 py-3">7:00 AM - 3:00 PM</td>
                <td className="px-4 py-3">✅ Nearly same timezone!</td>
              </tr>
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className="px-4 py-3 font-medium">🇮🇳 Mumbai</td>
                <td className="px-4 py-3">9:00 AM - 6:00 PM</td>
                <td className="px-4 py-3">11:30 AM - 8:30 PM</td>
                <td className="px-4 py-3">✅ Great overlap all day</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇯🇵 Tokyo</td>
                <td className="px-4 py-3">9:00 AM - 6:00 PM</td>
                <td className="px-4 py-3">8:00 AM - 5:00 PM</td>
                <td className="px-4 py-3">Just 1 hour difference</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇩🇪 Berlin</td>
                <td className="px-4 py-3">9:00 AM - 11:00 AM</td>
                <td className="px-4 py-3">4:00 PM - 6:00 PM</td>
                <td className="px-4 py-3">Catch them before EOD</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇦🇪 Dubai</td>
                <td className="px-4 py-3">9:00 AM - 6:00 PM</td>
                <td className="px-4 py-3">1:00 PM - 10:00 PM</td>
                <td className="px-4 py-3">4-hour difference, flexible</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Visual Time Comparison</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>When it's 9:00 AM in Singapore...</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
              <p className="font-medium">🇺🇸 New York</p>
              <p className="text-lg">8:00 PM (prev)</p>
              <p className={mutedColor}>Evening</p>
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
              <p className="font-medium">🇬🇧 London</p>
              <p className="text-lg">1:00 AM</p>
              <p className={mutedColor}>Night</p>
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
              <p className="font-medium">🇦🇺 Sydney</p>
              <p className="text-lg">12:00 PM</p>
              <p className={mutedColor}>Noon</p>
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
              <p className="font-medium">🇮🇳 Mumbai</p>
              <p className="text-lg">6:30 AM</p>
              <p className={mutedColor}>Early morning</p>
            </div>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>When it's 6:00 PM in Singapore...</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
              <p className="font-medium">🇺🇸 New York</p>
              <p className="text-lg">5:00 AM</p>
              <p className={mutedColor}>Early morning</p>
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
              <p className="font-medium">🇬🇧 London</p>
              <p className="text-lg">10:00 AM</p>
              <p className={mutedColor}>Morning ✅</p>
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
              <p className="font-medium">🇦🇺 Sydney</p>
              <p className="text-lg">9:00 PM</p>
              <p className={mutedColor}>Evening</p>
            </div>
            <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
              <p className="font-medium">🇮🇳 Mumbai</p>
              <p className="text-lg">3:30 PM</p>
              <p className={mutedColor}>Afternoon ✅</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📱 Calling Tips</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>📞 Country Code</h3>
            <p className="text-2xl font-bold mb-2">+65</p>
            <p className="text-sm">Singapore phone numbers are 8 digits. Mobile numbers start with 8 or 9.</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>📲 Popular Apps</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>WhatsApp</strong> - Most common for personal</li>
              <li>• <strong>Telegram</strong> - Growing popularity</li>
              <li>• <strong>Zoom/Teams</strong> - Business standard</li>
              <li>• <strong>WeChat</strong> - Chinese contacts</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>⚠️ Times to Avoid</h2>
        
        <div className={`p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
          <ul className="space-y-2 text-sm">
            <li>• <strong>12:00 PM - 1:30 PM SGT</strong> - Lunch hour, people may not answer</li>
            <li>• <strong>Before 8:00 AM SGT</strong> - Too early for business</li>
            <li>• <strong>After 9:00 PM SGT</strong> - Too late for business calls</li>
            <li>• <strong>Chinese New Year</strong> - 2-day public holiday, many on leave</li>
            <li>• <strong>Weekends</strong> - For business calls, stick to weekdays</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the best time to call Singapore from the US?</h3>
            <p className="text-sm">
              Evening US time (7-10 PM EST) reaches Singapore in the morning (8-11 AM). 
              This catches them fresh at the start of their workday.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Does Singapore have good phone connectivity?</h3>
            <p className="text-sm">
              Excellent! Singapore has world-class telecommunications. 4G/5G coverage 
              is universal, and call quality is typically crystal clear.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Do Singaporeans use WhatsApp for business?</h3>
            <p className="text-sm">
              Yes, WhatsApp is very common even for business communication in Singapore. 
              It's acceptable to WhatsApp clients and colleagues for quick questions.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>Time Difference Calculator</span>
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
