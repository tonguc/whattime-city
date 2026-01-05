'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TimeDifferenceContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const nycTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const timeStr = nycTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const timeDifferences = [
    { city: 'London', flag: '🇬🇧', diff: '+5 hours', winter: '+5h (EST vs GMT)', summer: '+5h (EDT vs BST)', when12NYC: '5:00 PM' },
    { city: 'Paris', flag: '🇫🇷', diff: '+6 hours', winter: '+6h (EST vs CET)', summer: '+6h (EDT vs CEST)', when12NYC: '6:00 PM' },
    { city: 'Berlin', flag: '🇩🇪', diff: '+6 hours', winter: '+6h', summer: '+6h', when12NYC: '6:00 PM' },
    { city: 'Dubai', flag: '🇦🇪', diff: '+9 hours', winter: '+9h', summer: '+8h', when12NYC: '9:00 PM' },
    { city: 'Mumbai', flag: '🇮🇳', diff: '+10.5 hours', winter: '+10.5h', summer: '+9.5h', when12NYC: '10:30 PM' },
    { city: 'Singapore', flag: '🇸🇬', diff: '+13 hours', winter: '+13h', summer: '+12h', when12NYC: '1:00 AM +1' },
    { city: 'Hong Kong', flag: '🇭🇰', diff: '+13 hours', winter: '+13h', summer: '+12h', when12NYC: '1:00 AM +1' },
    { city: 'Tokyo', flag: '🇯🇵', diff: '+14 hours', winter: '+14h', summer: '+13h', when12NYC: '2:00 AM +1' },
    { city: 'Sydney', flag: '🇦🇺', diff: '+16 hours', winter: '+16h', summer: '+14h', when12NYC: '4:00 AM +1' },
    { city: 'Los Angeles', flag: '🇺🇸', diff: '-3 hours', winter: '-3h', summer: '-3h', when12NYC: '9:00 AM' },
    { city: 'Chicago', flag: '🇺🇸', diff: '-1 hour', winter: '-1h', summer: '-1h', when12NYC: '11:00 AM' },
    { city: 'Denver', flag: '🇺🇸', diff: '-2 hours', winter: '-2h', summer: '-2h', when12NYC: '10:00 AM' },
    { city: 'São Paulo', flag: '🇧🇷', diff: '+2 hours', winter: '+2h', summer: '+3h', when12NYC: '2:00 PM' },
    { city: 'Mexico City', flag: '🇲🇽', diff: '-1 hour', winter: '-1h', summer: '-1h', when12NYC: '11:00 AM' },
    { city: 'Toronto', flag: '🇨🇦', diff: '0 hours', winter: '0h', summer: '0h', when12NYC: '12:00 PM' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          New York Time Difference
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          How NYC compares to major cities worldwide
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-sm">Current NYC time: <strong>{timeStr}</strong></span>
        </div>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          New York is on <strong>Eastern Time (ET)</strong>: UTC-5 in winter (EST) and UTC-4 in summer (EDT). 
          It's 5 hours behind London, 6 behind Paris, and 3 hours ahead of Los Angeles.
        </p>
      </section>
      
      <section className="mb-10 space-y-4">
        <p>
          "Is New York 5 or 6 hours behind London?" — it depends on the time of year. This page 
          breaks down exactly how NYC time compares to cities around the world, including the 
          confusing parts about Daylight Saving Time.
        </p>
      </section>
      
      {/* Time Difference Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 NYC Time Difference Table</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className={`p-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>Difference</th>
                <th className={`p-3 text-left font-medium ${headingColor}`}>When it's 12 PM in NYC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {timeDifferences.map((td, i) => (
                <tr key={td.city} className={i % 2 === 1 ? cardBg : ''}>
                  <td className="p-3 font-medium">{td.flag} {td.city}</td>
                  <td className="p-3">{td.diff}</td>
                  <td className="p-3">{td.when12NYC}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className={`mt-3 text-sm ${mutedColor}`}>
          Need real-time conversion? Use our <Link href="/time/" className={linkColor}>Time Converter</Link>.
        </p>
      </section>
      
      {/* DST Explanation */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🕐 Daylight Saving Time Explained</h2>
        
        <div className={`p-5 rounded-xl ${cardBg}`}>
          <p className="mb-4">
            New York observes Daylight Saving Time, which can temporarily change time differences:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>🌷 Spring Forward</h3>
              <p className="text-sm">
                Second Sunday in March — clocks move 1 hour ahead at 2 AM. 
                NYC switches from EST (UTC-5) to EDT (UTC-4).
              </p>
            </div>
            
            <div>
              <h3 className={`font-medium mb-2 ${headingColor}`}>🍂 Fall Back</h3>
              <p className="text-sm">
                First Sunday in November — clocks move 1 hour back at 2 AM. 
                NYC returns to EST (UTC-5).
              </p>
            </div>
          </div>
          
          <div className={`mt-4 p-3 rounded-lg border-l-4 border-yellow-500 ${isLight ? 'bg-yellow-50' : 'bg-yellow-900/20'}`}>
            <p className="text-sm">
              <strong>Watch out:</strong> If the other city has different DST dates (like EU, which changes 2 weeks later), 
              the time difference temporarily shifts by 1 hour during those gap weeks.
            </p>
          </div>
        </div>
      </section>
      
      {/* Common Confusions */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Common Confusions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Is NYC EST or EDT?</h3>
            <p className="text-sm mt-1">
              Both! EST (Eastern Standard Time) from November to March, EDT (Eastern Daylight Time) from March to November. 
              If you want to be safe, just say "Eastern Time" or "ET."
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Is London always 5 hours ahead of NYC?</h3>
            <p className="text-sm mt-1">
              Usually, but not always. For ~2 weeks in March and November, when the US and UK switch DST on different dates, 
              the difference is 4 or 6 hours instead of 5.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium ${headingColor}`}>Is New York ahead or behind Tokyo?</h3>
            <p className="text-sm mt-1">
              NYC is 14 hours behind Tokyo (13 hours during DST). So when it's noon on Tuesday in NYC, 
              it's 2 AM on Wednesday in Tokyo.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>FAQ</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How many hours is New York from London?</h3>
            <p className="text-sm">London is 5 hours ahead of New York for most of the year. When it's 9 AM in NYC, it's 2 PM in London.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the time difference between NYC and California?</h3>
            <p className="text-sm">New York is 3 hours ahead of California (Pacific Time). When it's noon in NYC, it's 9 AM in LA.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is India ahead or behind New York?</h3>
            <p className="text-sm">India is 10.5 hours ahead of New York (9.5 during DST). When it's noon in NYC, it's 10:30 PM in Mumbai.</p>
          </div>
        </div>
      </section>
      
      {/* Mini Compare Time Widget */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔄 Quick Converter</h2>
        
        <div className={`p-5 rounded-2xl border-2 ${
          isLight ? 'border-amber-200 bg-amber-50' : 'border-amber-700 bg-amber-900/20'
        }`}>
          <p className="mb-4 text-sm">
            When it's <strong className="text-lg">{timeStr}</strong> in NYC:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
            {timeDifferences.slice(0, 10).map(loc => {
              // Parse the diff to get hours
              const diffMatch = loc.diff.match(/([+-]?\d+\.?\d*)/);
              const offsetHours = diffMatch ? parseFloat(diffMatch[1]) : 0;
              const sign = loc.diff.includes('-') ? -1 : 1;
              const totalOffset = sign * offsetHours;
              
              const nycHours = nycTime.getHours();
              const nycMinutes = nycTime.getMinutes();
              
              // Handle half-hour offsets
              const offsetWhole = Math.floor(Math.abs(totalOffset));
              const offsetFraction = Math.abs(totalOffset) - offsetWhole;
              const addMinutes = offsetFraction * 60;
              
              let localHour = nycHours + (sign * offsetWhole);
              let localMin = nycMinutes + (sign * addMinutes);
              
              if (localMin >= 60) { localHour++; localMin -= 60; }
              if (localMin < 0) { localHour--; localMin += 60; }
              
              let dayOffset = '';
              if (localHour >= 24) { localHour -= 24; dayOffset = ' +1'; }
              if (localHour < 0) { localHour += 24; dayOffset = ' -1'; }
              
              const period = localHour >= 12 ? 'PM' : 'AM';
              const displayHour = localHour % 12 || 12;
              
              return (
                <div key={loc.city} className={`p-3 rounded-lg text-center ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
                  <div className="text-lg mb-1">{loc.flag}</div>
                  <div className={`text-xs ${mutedColor}`}>{loc.city}</div>
                  <div className={`font-bold ${headingColor}`}>
                    {displayHour}:{Math.round(localMin).toString().padStart(2, '0')} {period}
                    {dayOffset && <span className="text-xs text-amber-500">{dayOffset}</span>}
                  </div>
                  <div className={`text-xs ${mutedColor}`}>{loc.diff}</div>
                </div>
              );
            })}
          </div>
          
          <Link 
            href="/time/"
            className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
              isLight 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'bg-amber-600 hover:bg-amber-500 text-white'
            }`}
          >
            Open Full Compare Time →
          </Link>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/time/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🔄</span><span>Compare Time Tool</span>
          </Link>
          <Link href={`/${city.slug}/guide/call-times/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📞</span><span>Best Time to Call NYC</span>
          </Link>
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete NYC Time Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2025. Time differences may shift during DST transitions.</p>
    </div>
  )
}
