'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeHolidaysContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Singapore Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Singapore Public Holidays
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          CNY, Hari Raya, Deepavali, National Day - a multicultural calendar
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Overview</h2>
        <p>
          Singapore has <strong>11 public holidays</strong>, reflecting its multicultural society. 
          Key holidays: <strong>Chinese New Year</strong> (2 days), <strong>National Day</strong> (Aug 9), 
          <strong>Deepavali</strong>, and <strong>Christmas</strong>. Most businesses stay open, 
          but banks and government offices close.
        </p>
      </section>
      
      <section className={`mb-8 p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'}`}>
        <h3 className={`font-semibold mb-2 ${headingColor}`}>🌏 Multicultural Singapore</h3>
        <p className="text-sm">
          Singapore's holidays reflect its Chinese, Malay, Indian, and Western heritage. 
          You'll experience CNY in Chinatown, Hari Raya in Kampong Glam, Deepavali in 
          Little India, and Christmas on Orchard Road - all in one small island!
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📅 2025 Public Holidays</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Holiday</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Date</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Day</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">🎊 New Year's Day</td>
                <td className="px-4 py-3">January 1</td>
                <td className="px-4 py-3">Wednesday</td>
                <td className="px-4 py-3">Countdown at Marina Bay</td>
              </tr>
              <tr className={isLight ? 'bg-red-50' : 'bg-red-900/20'}>
                <td className="px-4 py-3 font-medium">🧧 Chinese New Year</td>
                <td className="px-4 py-3">January 29-30</td>
                <td className="px-4 py-3">Wed-Thu</td>
                <td className="px-4 py-3">Year of the Snake 🐍 Many take extended leave</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🕌 Hari Raya Puasa</td>
                <td className="px-4 py-3">March 31*</td>
                <td className="px-4 py-3">Monday</td>
                <td className="px-4 py-3">End of Ramadan</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">✝️ Good Friday</td>
                <td className="px-4 py-3">April 18</td>
                <td className="px-4 py-3">Friday</td>
                <td className="px-4 py-3">Long weekend!</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">👷 Labour Day</td>
                <td className="px-4 py-3">May 1</td>
                <td className="px-4 py-3">Thursday</td>
                <td className="px-4 py-3">International Workers' Day</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">☸️ Vesak Day</td>
                <td className="px-4 py-3">May 12</td>
                <td className="px-4 py-3">Monday</td>
                <td className="px-4 py-3">Buddha's birthday</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🕌 Hari Raya Haji</td>
                <td className="px-4 py-3">June 7*</td>
                <td className="px-4 py-3">Saturday</td>
                <td className="px-4 py-3">Feast of Sacrifice</td>
              </tr>
              <tr className={isLight ? 'bg-red-50' : 'bg-red-900/20'}>
                <td className="px-4 py-3 font-medium">🇸🇬 National Day</td>
                <td className="px-4 py-3">August 9</td>
                <td className="px-4 py-3">Saturday</td>
                <td className="px-4 py-3">Singapore's 60th birthday! 🎉</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🪔 Deepavali</td>
                <td className="px-4 py-3">October 20</td>
                <td className="px-4 py-3">Monday</td>
                <td className="px-4 py-3">Festival of Lights</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🎄 Christmas Day</td>
                <td className="px-4 py-3">December 25</td>
                <td className="px-4 py-3">Thursday</td>
                <td className="px-4 py-3">Orchard Road lights spectacular</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p className={`mt-2 text-sm ${mutedColor}`}>* Islamic holidays follow the lunar calendar; dates are approximate.</p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🧧 Chinese New Year (Jan 29-30)</h2>
        
        <div className={`p-6 rounded-xl border-2 border-red-300 ${isLight ? 'bg-red-50' : 'bg-red-900/20'}`}>
          <p className="mb-4">
            The biggest holiday in Singapore! Most businesses close for at least 2 days, 
            many Chinese-owned shops close for a week.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>What's Closed</h3>
              <ul className="text-sm space-y-1">
                <li>• Most Chinese restaurants (ironic but true!)</li>
                <li>• Many hawker stalls</li>
                <li>• Banks and offices</li>
                <li>• Smaller retail shops</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>What's Open</h3>
              <ul className="text-sm space-y-1">
                <li>• Major malls (ION, VivoCity)</li>
                <li>• Hotels and attractions</li>
                <li>• Chinatown night market</li>
                <li>• Chain restaurants</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🎆 Don't Miss</h3>
            <ul className="text-sm space-y-1">
              <li>• Chinatown street light-up and market</li>
              <li>• River Hongbao at Marina Bay</li>
              <li>• Chingay Parade (Feb 14-15, 2025)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🇸🇬 National Day (August 9)</h2>
        
        <div className={`p-6 rounded-xl border-2 border-red-300 ${isLight ? 'bg-red-50' : 'bg-red-900/20'}`}>
          <p className="mb-4">
            Singapore's independence day! 2025 marks 60 years (SG60). Massive celebrations 
            at Marina Bay with parade, aerial displays, and fireworks.
          </p>
          <ul className="text-sm space-y-2">
            <li>• <strong>NDP Parade</strong> - Main event at Marina Bay (tickets via ballot)</li>
            <li>• <strong>Fighter jet flyovers</strong> - Rehearsals in late July/early August</li>
            <li>• <strong>Fireworks</strong> - Best viewed from Marina Bay, Esplanade</li>
            <li>• <strong>Red and white everywhere</strong> - Locals dress in national colors</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🕌 Hari Raya Puasa</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-3">
            End of Ramadan celebration. Kampong Glam/Geylang Serai light up spectacularly 
            during the month before.
          </p>
          <ul className="text-sm space-y-1">
            <li>• <strong>Geylang Serai Bazaar</strong> - Night market in weeks leading up</li>
            <li>• <strong>Light-up</strong> - Beautiful decorations in Malay areas</li>
            <li>• <strong>Open houses</strong> - Traditional visiting (if you're invited!)</li>
            <li>• <strong>Business impact</strong> - Muslim-owned businesses may close 1-2 days</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🪔 Deepavali (October 20)</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-3">
            Hindu Festival of Lights. Little India transforms into a dazzling light display!
          </p>
          <ul className="text-sm space-y-1">
            <li>• <strong>Little India Light-Up</strong> - Begins mid-September</li>
            <li>• <strong>Street stalls</strong> - Traditional clothes, sweets, decorations</li>
            <li>• <strong>Temples</strong> - Special prayers and ceremonies</li>
            <li>• <strong>Best photo ops</strong> - Serangoon Road at night</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💼 Business Impact</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>What Stays Open</h3>
          <ul className="text-sm space-y-1 mb-4">
            <li>• Major shopping malls (with reduced hours sometimes)</li>
            <li>• Tourist attractions (Gardens by the Bay, Sentosa)</li>
            <li>• Hotels and restaurants in tourist areas</li>
            <li>• Public transport (normal schedule)</li>
          </ul>
          
          <h3 className={`font-semibold mb-3 ${headingColor}`}>What Closes</h3>
          <ul className="text-sm space-y-1">
            <li>• Banks and government offices</li>
            <li>• Stock exchange (SGX)</li>
            <li>• Many small businesses and hawker stalls</li>
            <li>• Some restaurants (especially during CNY)</li>
          </ul>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Are shops open on public holidays?</h3>
            <p className="text-sm">
              Most malls and major shops stay open. However, smaller businesses, 
              especially during CNY, may close for extended periods.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Do I get a day off if the holiday falls on Sunday?</h3>
            <p className="text-sm">
              Yes! When a public holiday falls on Sunday, the following Monday is a 
              public holiday (day off in lieu).
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>When should I avoid visiting Singapore?</h3>
            <p className="text-sm">
              CNY weeks can be tricky - many places closed. But for festive atmosphere, 
              it's actually exciting! Just book accommodation early and plan around closures.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>☀️</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Business Hours</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
