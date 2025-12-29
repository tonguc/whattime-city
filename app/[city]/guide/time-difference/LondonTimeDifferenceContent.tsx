'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function LondonTimeDifferenceContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const londonTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const timeStr = londonTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const timeDifferences = [
    { city: 'New York', flag: '🇺🇸', diff: '-5 hours', winter: '-5h (GMT vs EST)', summer: '-5h (BST vs EDT)', when12London: '7:00 AM' },
    { city: 'Los Angeles', flag: '🇺🇸', diff: '-8 hours', winter: '-8h', summer: '-8h', when12London: '4:00 AM' },
    { city: 'Chicago', flag: '🇺🇸', diff: '-6 hours', winter: '-6h', summer: '-6h', when12London: '6:00 AM' },
    { city: 'Paris', flag: '🇫🇷', diff: '+1 hour', winter: '+1h', summer: '+1h', when12London: '1:00 PM' },
    { city: 'Berlin', flag: '🇩🇪', diff: '+1 hour', winter: '+1h', summer: '+1h', when12London: '1:00 PM' },
    { city: 'Dubai', flag: '🇦🇪', diff: '+4 hours', winter: '+4h', summer: '+3h', when12London: '4:00 PM' },
    { city: 'Mumbai', flag: '🇮🇳', diff: '+5.5 hours', winter: '+5.5h', summer: '+4.5h', when12London: '5:30 PM' },
    { city: 'Singapore', flag: '🇸🇬', diff: '+8 hours', winter: '+8h', summer: '+7h', when12London: '8:00 PM' },
    { city: 'Hong Kong', flag: '🇭🇰', diff: '+8 hours', winter: '+8h', summer: '+7h', when12London: '8:00 PM' },
    { city: 'Tokyo', flag: '🇯🇵', diff: '+9 hours', winter: '+9h', summer: '+8h', when12London: '9:00 PM' },
    { city: 'Sydney', flag: '🇦🇺', diff: '+11 hours', winter: '+11h', summer: '+9h', when12London: '11:00 PM' },
    { city: 'Auckland', flag: '🇳🇿', diff: '+13 hours', winter: '+13h', summer: '+11h', when12London: '1:00 AM +1' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          London Time Difference
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          How London compares to major cities worldwide
        </p>
        
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-sm">Current London time: <strong>{timeStr}</strong></span>
        </div>
      </header>
      
      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          London uses <strong>GMT (UTC+0)</strong> in winter and <strong>BST (UTC+1)</strong> in summer. 
          It's 5 hours ahead of New York, 8 hours ahead of LA, and 9 hours behind Tokyo. As the home of 
          the Prime Meridian, London time is often used as the global reference point.
        </p>
      </section>
      
      {/* Time Difference Table */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 London Time vs World Cities</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>When it's 12 PM in London</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              {timeDifferences.map(t => (
                <tr key={t.city} className={isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/30'}>
                  <td className="px-4 py-3">{t.flag} {t.city}</td>
                  <td className="px-4 py-3 font-medium">{t.diff}</td>
                  <td className="px-4 py-3">{t.when12London}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      
      {/* GMT vs BST */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🕐 GMT vs BST Explained</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>GMT (Winter)</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>UTC+0</strong> — the baseline for world time</li>
              <li>• Late October → Late March</li>
              <li>• Clocks go back on last Sunday of October</li>
              <li>• Earlier sunsets, darker evenings</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>BST (Summer)</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>UTC+1</strong> — one hour ahead of GMT</li>
              <li>• Late March → Late October</li>
              <li>• Clocks go forward on last Sunday of March</li>
              <li>• Longer evenings, more daylight</li>
            </ul>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl border-l-4 border-amber-500 ${cardBg}`}>
          <p className="text-sm">
            <strong>DST Tip:</strong> For 2-3 weeks in spring and autumn, time differences shift when 
            the UK and other countries change clocks on different dates. Always verify during March and October.
          </p>
        </div>
      </section>
      
      {/* Quick Converter Widget */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🔄 Quick Converter</h2>
        
        <div className={`p-5 rounded-2xl border-2 ${
          isLight ? 'border-amber-200 bg-amber-50' : 'border-amber-700 bg-amber-900/20'
        }`}>
          <p className="mb-4 text-sm">
            When it's <strong className="text-lg">{timeStr}</strong> in London:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {timeDifferences.slice(0, 8).map(loc => {
              const diffMatch = loc.diff.match(/([+-]?\d+\.?\d*)/);
              const offsetHours = diffMatch ? parseFloat(diffMatch[1]) : 0;
              const sign = loc.diff.includes('-') ? -1 : 1;
              const totalOffset = sign * offsetHours;
              
              const londonHours = londonTime.getHours();
              const localHour = (londonHours + totalOffset + 24) % 24;
              const period = localHour >= 12 ? 'PM' : 'AM';
              const displayHour = localHour % 12 || 12;
              
              return (
                <div key={loc.city} className={`p-3 rounded-lg text-center ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
                  <div className="text-lg mb-1">{loc.flag}</div>
                  <div className={`text-xs ${mutedColor}`}>{loc.city}</div>
                  <div className={`font-bold ${headingColor}`}>
                    {displayHour}:{londonTime.getMinutes().toString().padStart(2, '0')} {period}
                  </div>
                </div>
              );
            })}
          </div>
          
          <Link 
            href="/time-converter/"
            className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${
              isLight 
                ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                : 'bg-amber-600 hover:bg-amber-500 text-white'
            }`}
          >
            Open Full Time Converter →
          </Link>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is London ahead or behind New York?</h3>
            <p className="text-sm">London is 5 hours ahead of New York. When it's noon in London, it's 7 AM in NYC.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the time difference between London and Dubai?</h3>
            <p className="text-sm">Dubai is 4 hours ahead of London in winter (GMT), 3 hours in summer (BST). Dubai doesn't observe DST.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Why is GMT based in London?</h3>
            <p className="text-sm">
              The Prime Meridian (0° longitude) passes through the Royal Observatory in Greenwich, London. 
              This was established internationally in 1884, making London the reference point for global timekeeping.
            </p>
          </div>
        </div>
      </section>
      
      {/* Related Guides */}
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/time-converter/" className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🔄</span><span>Time Converter Tool</span>
          </Link>
          <Link href={`/${city.slug}/guide/call-times/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📞</span><span>Best Time to Call London</span>
          </Link>
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete London Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024. Time differences may shift during DST transitions.</p>
    </div>
  )
}
