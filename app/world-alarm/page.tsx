'use client'

import Link from 'next/link'
import ToolPageWrapper from '@/components/ToolPageWrapper'
import ToolsMiniNav from '@/components/ToolsMiniNav'
import Footer from '@/components/Footer'

// Consistent card styling for light mode
const cardClass = 'bg-white border border-slate-200 rounded-2xl shadow-sm'
const headingClass = 'text-slate-800'
const textClass = 'text-slate-600'
const accentClass = 'text-blue-600'

export default function WorldAlarmPage() {
  return (
    <ToolPageWrapper>
      {/* Mini Navigation */}
      <ToolsMiniNav />

      {/* Tool Hero */}
      <div className="text-center mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${headingClass}`}>
          World Alarm Clock
        </h1>
        <p className={`text-lg ${textClass}`}>
          Set alarms based on any city's local time
        </p>
      </div>

      {/* Main Card */}
      <div className={`${cardClass} p-8 mb-8 text-center`}>
        <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-blue-600">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
        </div>
        
        <h2 className={`text-2xl font-bold mb-4 ${headingClass}`}>
          Use the Alarm Button
        </h2>
        
        <p className={`text-lg mb-6 max-w-md mx-auto ${textClass}`}>
          Click the <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white mx-1">🔔</span> button 
          in the bottom-right corner to set alarms for any city.
        </p>
        
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <p className="text-sm text-slate-500">
            The alarm feature uses browser notifications to alert you when it's time.
            Keep the tab open to receive notifications.
          </p>
        </div>
      </div>

      {/* SEO Content */}
      <section className={`${cardClass} p-6 mb-6`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingClass}`}>
          Common Use Cases
        </h2>
        <ul className={`space-y-3 ${textClass}`}>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div><strong>International meetings</strong> — Never miss a 9 AM call with overseas colleagues.</div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div><strong>Live events</strong> — Set reminders for sports, concerts, or product launches.</div>
          </li>
          <li className="flex gap-3">
            <span className={`${accentClass} mt-1`}>•</span>
            <div><strong>Stock market openings</strong> — Wake up for market opens in New York, London, or Tokyo.</div>
          </li>
        </ul>
      </section>

      {/* Related Tools */}
      <section className={`${cardClass} p-6 mb-8`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingClass}`}>
          Related Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/time-converter" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>Time Converter</div>
            <div className="text-xs text-slate-500">Quick conversions</div>
          </Link>
          <Link href="/meeting" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>Meeting Planner</div>
            <div className="text-xs text-slate-500">Find overlap hours</div>
          </Link>
          <Link href="/" className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all hover:scale-[1.02]">
            <div className={`text-sm font-medium ${headingClass}`}>World Clock</div>
            <div className="text-xs text-slate-500">See all time zones</div>
          </Link>
        </div>
      </section>

      <Footer isLight={true} />
    </ToolPageWrapper>
  )
}
