'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function CallTimesContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const nycTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = nycTime.getHours()
  const timeStr = nycTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const callTimes = [
    { from: 'London', flag: '🇬🇧', diff: '+5h', bestBusiness: '2 PM - 5 PM', bestPersonal: '6 PM - 10 PM', yourTime: 'Afternoon', nycIs: 'Morning-Midday' },
    { from: 'Paris/Berlin', flag: '🇫🇷', diff: '+6h', bestBusiness: '3 PM - 6 PM', bestPersonal: '7 PM - 11 PM', yourTime: 'Late Afternoon', nycIs: 'Morning-Midday' },
    { from: 'Dubai', flag: '🇦🇪', diff: '+9h', bestBusiness: '5 PM - 8 PM', bestPersonal: '9 PM - 1 AM', yourTime: 'Evening', nycIs: 'Morning' },
    { from: 'Mumbai', flag: '🇮🇳', diff: '+10.5h', bestBusiness: '7 PM - 10 PM', bestPersonal: '10 PM - 2 AM', yourTime: 'Night', nycIs: 'Morning' },
    { from: 'Singapore', flag: '🇸🇬', diff: '+13h', bestBusiness: '9 PM - 11 PM', bestPersonal: '8 AM - 10 AM', yourTime: 'Night/Morning', nycIs: 'Morning/Evening' },
    { from: 'Tokyo', flag: '🇯🇵', diff: '+14h', bestBusiness: '10 PM - 12 AM', bestPersonal: '7 AM - 9 AM', yourTime: 'Late Night/Morning', nycIs: 'Morning/Evening' },
    { from: 'Sydney', flag: '🇦🇺', diff: '+16h', bestBusiness: '12 AM - 2 AM', bestPersonal: '7 AM - 10 AM', yourTime: 'Very Late/Morning', nycIs: 'Morning/Evening' },
    { from: 'Los Angeles', flag: '🇺🇸', diff: '-3h', bestBusiness: '9 AM - 3 PM', bestPersonal: '6 AM - 10 PM', yourTime: 'Flexible', nycIs: 'Midday-Evening' },
    { from: 'São Paulo', flag: '🇧🇷', diff: '+2h', bestBusiness: '11 AM - 6 PM', bestPersonal: '7 PM - 11 PM', yourTime: 'Most of Day', nycIs: 'Business Hours' },
  ]
  
  const isGoodTime = currentHour >= 9 && currentHour < 21
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Best Time to Call New York
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Optimal calling times from major cities worldwide
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className={`w-2 h-2 rounded-full ${isGoodTime ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
          <span className="text-sm">
            NYC: {timeStr} — {isGoodTime ? 'Good time to call' : 'May be inconvenient'}
          </span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          The best time to call New York for <strong>business</strong> is during their morning: 
          <strong> 9 AM - 12 PM Eastern Time</strong>. For <strong>personal calls</strong>, evenings 
          (6 PM - 9 PM Eastern) work well. Find your city below to see what that means in your local time.
        </p>
      </section>
      
      <section className="mb-10 space-y-4">
        <p>
          Calling someone in New York? The last thing you want is to wake them up at 3 AM or catch 
          them in the middle of rush hour. This guide shows you the best windows to reach NYC from 
          anywhere in the world — for both business and personal calls.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📞 Best Calling Times by City</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Your Location</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Diff</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Business Calls</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Personal Calls</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {callTimes.map((ct, i) => (
                <tr key={ct.from} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="p-3 font-medium">{ct.flag} {ct.from}</td>
                  <td className="p-3">{ct.diff}</td>
                  <td className="p-3">{ct.bestBusiness}</td>
                  <td className="p-3">{ct.bestPersonal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className={`mt-3 text-sm ${mutedColor}`}>
          All times are YOUR local time. Need exact conversion? Use our{' '}
          <Link href="/tools/converter/" className={linkColor}>Time Converter</Link>.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💡 Calling Tips</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>For Business Calls</h3>
            <p className="text-sm mt-1">
              NYC business hours are 9 AM - 6 PM Eastern. The best time is mid-morning (10-11 AM NYC) 
              when people have settled in but aren't yet in lunch meetings.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>For Personal Calls</h3>
            <p className="text-sm mt-1">
              Evenings (7-9 PM NYC) are usually best — people are home from work but not yet asleep. 
              Weekends are flexible but avoid Sunday mornings (brunch culture is real).
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Times to Avoid</h3>
            <p className="text-sm mt-1">
              Morning commute (7-9 AM NYC), lunch rush (12-1 PM NYC), and after 10 PM unless 
              you know they're night owls. Sunday mornings before 11 AM are sacred brunch time.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What time can I call New York from the UK?</h3>
            <p className="text-sm">
              For business: 2 PM - 5 PM UK time (9 AM - 12 PM NYC). For personal: 6 PM - 10 PM UK time 
              (1 PM - 5 PM NYC). Avoid calling after 1 AM UK time.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>When should I call NYC from India?</h3>
            <p className="text-sm">
              This is tricky due to the 10.5 hour difference. Business: 7:30 PM - 10:30 PM IST. 
              For personal calls, 10:30 PM - 2 AM IST catches NYC's afternoon/evening.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is it okay to call New York on weekends?</h3>
            <p className="text-sm">
              For personal calls, yes — though avoid early Sunday morning (brunch culture). 
              For business, stick to weekdays unless you have a specific arrangement.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>NYC Time Difference</span>
          </Link>
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>NYC Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete NYC Time Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2025.</p>
    </div>
  )
}
