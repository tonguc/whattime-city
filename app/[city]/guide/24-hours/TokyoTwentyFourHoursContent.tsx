'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoTwentyFourHoursContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const tokyoTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = tokyoTime.getHours()
  const timeStr = tokyoTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const hourlyBreakdown = [
    { hour: '5-7 AM', icon: '🌅', title: 'Early morning', desc: `Tsukiji Outer Market opens for the freshest sushi. First trains start running. Temples and shrines are peaceful and empty. Perfect for photography without crowds.` },
    { hour: '7-9 AM', icon: '🚃', title: 'Rush hour begins', desc: `Tokyo's legendary commuter crush. Avoid Yamanote Line major stations if possible. Train pushers (oshiya) help pack passengers in. Not for the claustrophobic.` },
    { hour: '9-10 AM', icon: '💼', title: 'Business starts', desc: `Offices fill up. Banks open at 9 AM (close at 3 PM!). Rush hour eases. Museums and attractions start opening. Coffee shops are busy with morning meetings.` },
    { hour: '10-12 PM', icon: '🏯', title: 'Tourist prime time', desc: `Attractions fully open. TeamLab, Skytree, temples get busy. Department stores open at 10. Perfect time for popular spots before lunch crowds.` },
    { hour: '12-2 PM', icon: '🍜', title: 'Lunch rush', desc: `Ramen shops have lines out the door. Business district konbini mobbed. Popular restaurants packed. Consider early (11:30) or late (1:30) lunch.` },
    { hour: '2-5 PM', icon: '☀️', title: 'Afternoon lull', desc: `Post-lunch calm. Many restaurants close until dinner (check hours!). Good time for museums, shopping. Cafes fill with people avoiding heat/cold.` },
    { hour: '5-7 PM', icon: '🚶', title: 'Evening rush', desc: `Second rush hour begins. Izakayas start filling with after-work crowds. Golden hour light perfect for Shibuya/Shinjuku photography.` },
    { hour: '7-9 PM', icon: '🍺', title: 'Dinner peak', desc: `Izakayas and restaurants at peak. Salary workers drinking with colleagues. Neon lights blazing in entertainment districts. Great energy in the streets.` },
    { hour: '9-11 PM', icon: '🌃', title: 'Night life begins', desc: `Last train countdown starts. Late-night ramen shops fill up. Golden Gai and Shinjuku bars buzzing. Entertainment districts fully alive.` },
    { hour: '11 PM-1 AM', icon: '🚃', title: 'Last train rush', desc: `The famous "last train" (shūden) departures. Stations suddenly packed with tipsy workers. Miss it and you're stuck until 5 AM.` },
    { hour: '1-5 AM', icon: '🌙', title: 'Dead hours', desc: `Trains stopped. Options: taxi (expensive), karaoke (common), manga café (cheap sleep), izakaya (some 24h), or just wander Kabukicho. Tokyo's quiet hours.` },
  ]
  
  const getCurrentPeriod = () => {
    if (currentHour >= 5 && currentHour < 7) return 0
    if (currentHour >= 7 && currentHour < 9) return 1
    if (currentHour >= 9 && currentHour < 10) return 2
    if (currentHour >= 10 && currentHour < 12) return 3
    if (currentHour >= 12 && currentHour < 14) return 4
    if (currentHour >= 14 && currentHour < 17) return 5
    if (currentHour >= 17 && currentHour < 19) return 6
    if (currentHour >= 19 && currentHour < 21) return 7
    if (currentHour >= 21 && currentHour < 23) return 8
    if (currentHour >= 23 || currentHour < 1) return 9
    return 10
  }
  
  const currentPeriod = getCurrentPeriod()
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>24 Hours in Tokyo</h1>
        <p className={`text-lg ${mutedColor}`}>The city's daily rhythm from first train to last</p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">{hourlyBreakdown[currentPeriod]?.icon || '🕐'}</span>
          <span className="text-sm">Tokyo: {timeStr} — <strong>{hourlyBreakdown[currentPeriod]?.title || 'Current'}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-rose-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Tokyo is NOT a 24-hour city like New York. Trains stop around midnight-1 AM and don't restart 
          until 5 AM. But konbini are always open, some izakayas run all night, and there's a 
          thriving "missed the last train" culture of karaoke boxes and manga cafés.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>🕐 Hour by Hour</h2>
        <div className="space-y-4">
          {hourlyBreakdown.map((period, index) => (
            <div key={index} className={`p-4 rounded-xl border-l-4 ${index === currentPeriod ? 'border-rose-500 ring-2 ring-rose-200' : 'border-transparent'} ${cardBg}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{period.icon}</span>
                <div>
                  <span className={`text-sm ${mutedColor}`}>{period.hour}</span>
                  <h3 className={`font-semibold ${headingColor}`}>{period.title}</h3>
                </div>
                {index === currentPeriod && (
                  <span className="ml-auto px-2 py-1 text-xs font-medium rounded-full bg-rose-100 text-rose-700">NOW</span>
                )}
              </div>
              <p className="text-sm ml-11">{period.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌙 Missed the Last Train? Your Options</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🎤 Karaoke (カラオケ)</h3>
            <p className="text-sm">¥1,500-3,000 for all-night package with drinks. Comfortable, fun, and socially acceptable. Many have food too.</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📚 Manga Café (漫画喫茶)</h3>
            <p className="text-sm">¥1,500-2,500 for private booth with reclining seat, manga, drinks, showers. Budget travelers' secret.</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🍺 All-Night Izakaya</h3>
            <p className="text-sm">Keep drinking and eating until morning. Check if they're 24h (終夜営業). Golden Gai has options.</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🚕 Taxi</h3>
            <p className="text-sm">Expensive but direct. ¥5,000-15,000+ depending on distance. Late night surcharge (22:00-05:00) adds 20%.</p>
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
            <span>🌸</span><span>Best Time to Visit</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
