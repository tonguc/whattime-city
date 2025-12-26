'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function TokyoRemoteWorkContent({ city }: Props) {
  const { isLight } = useCityContext()
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'

  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Tokyo Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Working with Tokyo Teams Remotely</h1>
        <p className={`text-lg ${mutedColor}`}>Time zone overlap, meeting times & async strategies</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-blue-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Tokyo (JST) is <strong>14 hours ahead of New York</strong>, <strong>9 hours ahead of London</strong>. 
          Best overlap: <strong>8-10 AM Tokyo = 6-8 PM previous day NYC</strong>. 
          Consider async workflows — real-time collaboration with Western teams is challenging.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Time Zone Overlap</h2>
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium mb-2 ${headingColor}`}>Tokyo Morning (8-10 AM JST)</h4>
              <ul className="space-y-1">
                <li>• New York: 6-8 PM previous day (EST)</li>
                <li>• London: 11 PM - 1 AM (GMT)</li>
                <li>• Sydney: 10 AM - 12 PM (AEDT)</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium mb-2 ${headingColor}`}>Tokyo Evening (6-8 PM JST)</h4>
              <ul className="space-y-1">
                <li>• New York: 4-6 AM same day (EST)</li>
                <li>• London: 9-11 AM (GMT)</li>
                <li>• Sydney: 8-10 PM (AEDT)</li>
              </ul>
            </div>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          <strong>Pro tip:</strong> For US teams, early morning Tokyo meetings (7-9 AM JST) catch end of US workday. 
          This requires Japanese colleagues to come in early, so use sparingly for important sync-ups.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💡 Async-First Strategies</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📹 Recorded Standups</h3>
            <p className="text-sm">Instead of live standups, use Loom or recorded video updates. Tokyo team records at their EOD, US team watches at their start of day.</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>📝 Detailed Documentation</h3>
            <p className="text-sm">Japanese teams often excel at documentation. Leverage this — use Notion, Confluence, or shared docs to reduce need for live meetings.</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🔄 Handoff Workflow</h3>
            <p className="text-sm">Structure work so Tokyo team's end-of-day = US team's start-of-day handoff. Create a "follow the sun" development cycle.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/call-times/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📞</span><span>Best Time to Call</span>
          </Link>
          <Link href={`/${city.slug}/guide/digital-nomad/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🎒</span><span>Digital Nomad Guide</span>
          </Link>
        </div>
      </section>
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
