'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiTwentyFourHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const dubaiTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = dubaiTime.getHours()
  const timeStr = dubaiTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const hourlyBreakdown = [
    { hour: '5-6 AM', icon: '🌅', title: 'Dawn & Fajr', desc: 'First prayer call (Fajr). Sunrise around 5:30-6:30 AM depending on season. Early beach walkers, construction crews start.' },
    { hour: '6-9 AM', icon: '☀️', title: 'Morning rush', desc: 'Traffic builds on Sheikh Zayed Road. Schools start 7:30-8 AM. Best time for outdoor activities before heat builds.' },
    { hour: '9-12 PM', icon: '💼', title: 'Business morning', desc: 'Offices in full swing. DFM stock market opens at 10 AM. Temperature climbing — stay indoors or in AC.' },
    { hour: '12-1 PM', icon: '🕌', title: 'Dhuhr prayer', desc: 'Midday prayer. Some shops close briefly. Lunch break begins. Peak heat outside (40°C+ in summer).' },
    { hour: '1-4 PM', icon: '🔥', title: 'Afternoon heat', desc: 'Hottest part of day. Mall time! AC is king. Outdoor workers take extended breaks. Siesta culture for some.' },
    { hour: '4-6 PM', icon: '🏙️', title: 'Evening begins', desc: 'Asr prayer. Temperature easing. Beach clubs fill up. Rush hour traffic starts. Stock market closed.' },
    { hour: '6-8 PM', icon: '🌆', title: 'Golden hour', desc: 'Maghrib (sunset) prayer. Perfect weather for outdoor dining, beach walks. Families head to malls.' },
    { hour: '8-10 PM', icon: '🍽️', title: 'Dinner peak', desc: 'Restaurants busiest. Dubai Marina and Downtown come alive. Fountains show at Dubai Mall. Pleasant outdoor temps.' },
    { hour: '10 PM-12 AM', icon: '🌃', title: 'Night life', desc: 'Clubs and bars peak. Malls still open. Shisha cafes buzzing. Late dining culture. Isha prayer around 8-9 PM.' },
    { hour: '12-2 AM', icon: '🎉', title: 'Late night', desc: 'Clubs going strong. 24-hour cafeterias busy. Food delivery boom. Cooler temps finally!' },
    { hour: '2-5 AM', icon: '🌙', title: 'Quiet hours', desc: 'Most venues closing. 24-hour supermarkets, some restaurants. Construction night shifts. Pre-dawn calm before Fajr.' },
  ]
  
  const getCurrentPeriod = () => {
    if (currentHour >= 5 && currentHour < 6) return 0
    if (currentHour >= 6 && currentHour < 9) return 1
    if (currentHour >= 9 && currentHour < 12) return 2
    if (currentHour >= 12 && currentHour < 13) return 3
    if (currentHour >= 13 && currentHour < 16) return 4
    if (currentHour >= 16 && currentHour < 18) return 5
    if (currentHour >= 18 && currentHour < 20) return 6
    if (currentHour >= 20 && currentHour < 22) return 7
    if (currentHour >= 22 || currentHour < 0) return 8
    if (currentHour >= 0 && currentHour < 2) return 9
    return 10
  }
  
  const currentPeriod = getCurrentPeriod()
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>24 Hours in Dubai</h1>
        <p className={`text-lg ${mutedColor}`}>The city's daily rhythm from Fajr to late night</p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">{hourlyBreakdown[currentPeriod]?.icon || '🕐'}</span>
          <span className="text-sm">Dubai: {timeStr} — <strong>{hourlyBreakdown[currentPeriod]?.title || 'Current'}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-emerald-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Dubai IS a 24-hour city — many supermarkets, cafeterias, and services run around the clock. 
          Life revolves around <strong>avoiding daytime heat</strong> (especially summer) and the 
          <strong>five daily prayer times</strong>. Malls stay open until 10 PM-midnight. The city 
          truly comes alive after sunset.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>🕐 Hour by Hour</h2>
        <div className="space-y-4">
          {hourlyBreakdown.map((period, index) => (
            <div key={index} className={`p-4 rounded-xl border-l-4 ${index === currentPeriod ? 'border-emerald-500 ring-2 ring-emerald-200' : 'border-transparent'} ${cardBg}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{period.icon}</span>
                <div>
                  <span className={`text-sm ${mutedColor}`}>{period.hour}</span>
                  <h3 className={`font-semibold ${headingColor}`}>{period.title}</h3>
                </div>
                {index === currentPeriod && (
                  <span className="ml-auto px-2 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">NOW</span>
                )}
              </div>
              <p className="text-sm ml-11">{period.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🕌 Prayer Times Shape the Day</h2>
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-3">Five daily prayers (times shift with sunrise/sunset):</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <div className="text-center p-2 rounded bg-slate-100 dark:bg-slate-600">
              <div className="font-medium">Fajr</div>
              <div className={mutedColor}>~5 AM</div>
            </div>
            <div className="text-center p-2 rounded bg-slate-100 dark:bg-slate-600">
              <div className="font-medium">Dhuhr</div>
              <div className={mutedColor}>~12:30 PM</div>
            </div>
            <div className="text-center p-2 rounded bg-slate-100 dark:bg-slate-600">
              <div className="font-medium">Asr</div>
              <div className={mutedColor}>~3:30 PM</div>
            </div>
            <div className="text-center p-2 rounded bg-slate-100 dark:bg-slate-600">
              <div className="font-medium">Maghrib</div>
              <div className={mutedColor}>~6 PM</div>
            </div>
            <div className="text-center p-2 rounded bg-slate-100 dark:bg-slate-600">
              <div className="font-medium">Isha</div>
              <div className={mutedColor}>~8 PM</div>
            </div>
          </div>
          <p className={`mt-3 text-sm ${mutedColor}`}>
            Some shops may close briefly during prayer. The call to prayer (Adhan) is broadcast 
            from mosques and in malls.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌡️ Summer vs Winter Schedule</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>☀️ Summer (Jun-Sep)</h3>
            <ul className="text-sm space-y-1">
              <li>• Outdoor activities: Before 8 AM or after 7 PM only</li>
              <li>• Daytime: Malls, indoor attractions</li>
              <li>• Beach: Early morning or sunset</li>
              <li>• City feels quiet midday — everyone's in AC</li>
            </ul>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>❄️ Winter (Nov-Mar)</h3>
            <ul className="text-sm space-y-1">
              <li>• Perfect outdoor weather all day</li>
              <li>• Beach clubs, brunch culture peak</li>
              <li>• Outdoor dining, desert safaris</li>
              <li>• Tourist high season — book ahead!</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>☀️</span><span>Best Time to Visit</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
