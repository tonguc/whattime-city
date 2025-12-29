'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

export default function WorldAlarmPage() {
  const { theme, isLight } = useCityContext()

  return (
    <ToolPageWrapper>
      {/* Mini Navigation */}
      <ToolsMiniNav isLight={isLight} theme={theme} />

      {/* Tool Hero */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
          World Alarm Clock
        </h1>
        <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          Set alarms based on any city's local time
        </p>
      </div>

      {/* Main Card */}
      <div className={`rounded-2xl p-8 mb-8 backdrop-blur-xl border text-center ${
        isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
      }`}>
        <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${theme.accentBg}`}>
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
        
        <h2 className={`text-2xl font-bold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
          Use the Alarm Button
        </h2>
        
        <p className={`text-lg mb-6 max-w-md mx-auto ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          Click the <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${theme.accentBg} text-white mx-1`}>🔔</span> button 
          in the bottom-right corner to set alarms for any city.
        </p>
        
        <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-100' : 'bg-slate-700/50'}`}>
          <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            The alarm feature uses browser notifications to alert you when it's time.
            Keep the tab open to receive notifications.
          </p>
        </div>
      </div>

      {/* SEO Content */}
      <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
        isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
          Common Use Cases
        </h2>
        <ul className={`space-y-3 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
          <li className="flex gap-3">
            <span className={`${theme.accentText} mt-1`}>•</span>
            <div><strong>International meetings</strong> — Never miss a 9 AM call with overseas colleagues.</div>
          </li>
          <li className="flex gap-3">
            <span className={`${theme.accentText} mt-1`}>•</span>
            <div><strong>Live events</strong> — Set reminders for sports, concerts, or product launches.</div>
          </li>
          <li className="flex gap-3">
            <span className={`${theme.accentText} mt-1`}>•</span>
            <div><strong>Stock market openings</strong> — Wake up for market opens in New York, London, or Tokyo.</div>
          </li>
        </ul>
      </section>

      {/* Related Tools */}
      <section className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
        isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/time-converter" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
            isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
          }`}>
            <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Converter</div>
            <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Quick conversions</div>
          </Link>
          <Link href="/meeting" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
            isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
          }`}>
            <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Meeting Planner</div>
            <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Find overlap hours</div>
          </Link>
          <Link href="/" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
            isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
          }`}>
            <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>World Clock</div>
            <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>See all time zones</div>
          </Link>
        </div>
      </section>

      <Footer isLight={isLight} />
    </ToolPageWrapper>
  )
}
