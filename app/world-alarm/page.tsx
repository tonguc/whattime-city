'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

export default function WorldAlarmPage() {
  const { theme, isLight } = useCityContext()

  // Dynamic styles based on theme (like HomePage)
  const cardClass = `rounded-2xl p-6 backdrop-blur-xl border ${theme.card}`
  const boxClass = isLight 
    ? 'bg-white/60 border border-white/70 rounded-xl' 
    : 'bg-slate-800/60 border border-slate-600/60 rounded-xl'

  return (
    <ToolPageWrapper>
      <ToolsMiniNav isLight={isLight} theme={theme} />

      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${theme.text}`}>
          World Alarm Clock
        </h1>
        <p className={`text-lg ${theme.textMuted}`}>
          Set alarms based on any city's local time
        </p>
      </div>

      <div className={`${cardClass} p-8 mb-8 text-center`}>
        <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${theme.accentBg}`}>
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
        
        <h2 className={`text-2xl font-bold mb-4 ${theme.text}`}>
          Use the Alarm Button
        </h2>
        
        <p className={`text-lg mb-6 max-w-md mx-auto ${theme.textMuted}`}>
          Click the <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${theme.accentBg} text-white mx-1`}>🔔</span> button 
          in the bottom-right corner to set alarms for any city.
        </p>
        
        <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-100' : 'bg-slate-700/50'}`}>
          <p className={`text-sm ${theme.textMuted}`}>
            The alarm feature uses browser notifications to alert you when it's time.
            Keep the tab open to receive notifications.
          </p>
        </div>
      </div>

      <section className={`${cardClass} mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Common Use Cases</h2>
        <ul className={`space-y-3 ${theme.textMuted}`}>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>International meetings</strong> — Never miss a 9 AM call with overseas colleagues.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Live events</strong> — Set reminders for sports, concerts, or product launches.</div></li>
          <li className="flex gap-3"><span className={`${theme.accentText} mt-1`}>•</span><div><strong>Stock market openings</strong> — Wake up for market opens in New York, London, or Tokyo.</div></li>
        </ul>
      </section>

      <section className={`${cardClass} mb-8`}>
        <h2 className={`text-xl font-semibold mb-4 ${theme.text}`}>Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/time-converter" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Time Converter</div>
            <div className={`text-xs ${theme.textMuted}`}>Quick conversions</div>
          </Link>
          <Link href="/meeting" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>Meeting Planner</div>
            <div className={`text-xs ${theme.textMuted}`}>Find overlap hours</div>
          </Link>
          <Link href="/" className={`p-4 ${boxClass} transition-all hover:scale-[1.02]`}>
            <div className={`text-sm font-medium ${theme.text}`}>World Clock</div>
            <div className={`text-xs ${theme.textMuted}`}>See all time zones</div>
          </Link>
        </div>
      </section>

      <Footer isLight={isLight} />
    </ToolPageWrapper>
  )
}
