'use client'
import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DubaiRemoteWorkContent({ city }: Props) {
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Dubai Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Working with Dubai Teams Remotely</h1>
        <p className={`text-lg ${mutedColor}`}>Time zone overlap, meeting times & the Friday-Saturday weekend</p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-blue-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          Dubai (GST, UTC+4) has <strong>excellent overlap with Europe, India, and East Africa</strong>. 
          US teams have a ~9 hour gap. Key challenge: <strong>Friday-Saturday weekend</strong> means 
          Sunday is a work day but Friday isn't!
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Time Zone Overlap</h2>
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium mb-2 ${headingColor}`}>Dubai Morning (9 AM GST)</h4>
              <ul className="space-y-1">
                <li>• New York: 12 AM midnight</li>
                <li>• London: 5 AM</li>
                <li>• Mumbai: 10:30 AM ✓</li>
                <li>• Singapore: 1 PM ✓</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium mb-2 ${headingColor}`}>Dubai Afternoon (3 PM GST)</h4>
              <ul className="space-y-1">
                <li>• New York: 6 AM</li>
                <li>• London: 11 AM ✓</li>
                <li>• Mumbai: 4:30 PM ✓</li>
                <li>• Singapore: 7 PM</li>
              </ul>
            </div>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          <strong>Sweet spot:</strong> 1-3 PM Dubai = 9-11 AM London = 6:30-8:30 PM Mumbai. 
          Perfect for Europe/India/Dubai triangles!
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>⚠️ The Weekend Trap</h2>
        <div className={`p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
          <p className="mb-3">Dubai's work week is <strong>Sunday - Thursday</strong>:</p>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
              <div key={day} className={`p-2 rounded ${i < 5 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {day}
                <div className="text-xs">{i < 5 ? 'Work' : 'Off'}</div>
              </div>
            ))}
          </div>
          <p className={`mt-3 text-sm ${mutedColor}`}>
            This means Friday calls with Dubai won't work, but Sunday meetings will!
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💡 Collaboration Strategies</h2>
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🌍 With European Teams</h3>
            <p className="text-sm">Perfect! 4-hour difference. Full overlap during business hours. 
            Schedule calls 10 AM - 2 PM Dubai (6 AM - 10 AM London).</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🇺🇸 With US Teams</h3>
            <p className="text-sm">Challenging. 9-hour gap with East Coast. Best: 5-7 PM Dubai 
            catches 8-10 AM NYC, or early morning Dubai (7 AM) for late US (10 PM).</p>
          </div>
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>🇮🇳 With India Teams</h3>
            <p className="text-sm">Excellent! Only 1.5 hour difference. Near-complete business 
            day overlap. Dubai is a major hub for India business.</p>
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
