'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem, MobileTableOfContents } from '@/components/TableOfContents'

interface Props {
  city: City
}

export default function WorkRemoteContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const tableHeaderBg = isLight ? 'bg-slate-100' : 'bg-slate-700'
  
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Overview', icon: '⚡' },
    { id: 'visas', title: 'Visa Options', icon: '🛂' },
    { id: 'coworking', title: 'Coworking Spaces', icon: '🏢' },
    { id: 'cost', title: 'Cost of Living', icon: '💰' },
    { id: 'internet', title: 'Internet & Connectivity', icon: '📶' },
    { id: 'tips', title: 'Pro Tips', icon: '💡' },
    { id: 'related', title: 'Related Guides', icon: '📖' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-6">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to {city.city} Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Work Remotely from {city.city}
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Visa options, coworking spaces, and cost of living for remote workers
        </p>
      </header>
      
      {/* Mobile TOC */}
      <MobileTableOfContents items={tocItems} isLight={isLight} />
      
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        <div className="flex-1 min-w-0 space-y-12">
          
          <section id="overview" className={`p-4 sm:p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg} scroll-mt-48`}>
            <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>⚡ Quick Overview</h2>
            <p>{city.city} offers great opportunities for remote workers with reliable internet, coworking spaces, and a vibrant international community.</p>
          </section>
          
          <section id="visas" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🛂 Visa Options</h2>
            <div className={`-mx-4 sm:mx-0 overflow-x-auto`}>
              <div className="min-w-[450px] px-4 sm:px-0">
                <table className={`w-full text-sm rounded-xl border ${tableBorder} overflow-hidden`}>
                  <thead className={tableHeaderBg}>
                    <tr>
                      <th className="text-left p-3 font-medium">Visa Type</th>
                      <th className="text-left p-3 font-medium">Duration</th>
                      <th className="text-left p-3 font-medium">Work Allowed?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Tourist Visa</td>
                      <td className="p-3">30-90 days</td>
                      <td className="p-3 text-amber-600">Gray area</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Digital Nomad Visa</td>
                      <td className="p-3">6-12 months</td>
                      <td className="p-3 text-green-600">✓ Yes</td>
                    </tr>
                    <tr className={`border-t ${tableBorder}`}>
                      <td className="p-3">Work Visa</td>
                      <td className="p-3">1-3 years</td>
                      <td className="p-3 text-green-600">✓ Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className={`text-xs mt-2 ${mutedColor}`}>← Swipe to see more</p>
          </section>
          
          <section id="coworking" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🏢 Coworking Spaces</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>Premium Spaces</h4>
                <p className="text-sm opacity-80 mt-1">WeWork, Regus - $300-500/month</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>Budget Options</h4>
                <p className="text-sm opacity-80 mt-1">Local spaces, cafes - $50-150/month</p>
              </div>
            </div>
          </section>
          
          <section id="cost" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>💰 Cost of Living</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className={`p-3 rounded-xl ${cardBg} text-center`}>
                <p className="text-lg font-bold">🏠</p>
                <p className="text-xs opacity-70 mt-1">Rent</p>
              </div>
              <div className={`p-3 rounded-xl ${cardBg} text-center`}>
                <p className="text-lg font-bold">🍔</p>
                <p className="text-xs opacity-70 mt-1">Food</p>
              </div>
              <div className={`p-3 rounded-xl ${cardBg} text-center`}>
                <p className="text-lg font-bold">🚇</p>
                <p className="text-xs opacity-70 mt-1">Transport</p>
              </div>
              <div className={`p-3 rounded-xl ${cardBg} text-center`}>
                <p className="text-lg font-bold">📶</p>
                <p className="text-xs opacity-70 mt-1">Internet</p>
              </div>
            </div>
          </section>
          
          <section id="internet" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📶 Internet & Connectivity</h2>
            <div className={`p-4 rounded-xl ${cardBg}`}>
              <p>Most areas have reliable high-speed internet. Average speeds: 50-100 Mbps. Mobile data is affordable and fast.</p>
            </div>
          </section>
          
          <section id="tips" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>💡 Pro Tips</h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>🔌 Power Adapters</h4>
                <p className="text-sm opacity-80 mt-1">Check plug types before arrival</p>
              </div>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <h4 className={`font-medium ${headingColor}`}>📱 Local SIM</h4>
                <p className="text-sm opacity-80 mt-1">Get one at airport for best rates</p>
              </div>
            </div>
          </section>
          
          <section id="related" className="scroll-mt-48">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>📖 Related Guides</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href={`/${city.slug}/guide/time-business/`} className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}>
                <span className="text-2xl mb-2 block">💼</span>
                <h3 className={`font-medium ${headingColor}`}>Business Hours</h3>
                <p className="text-sm opacity-70">Office & bank hours</p>
              </Link>
              <Link href={`/${city.slug}/guide/time-zones/`} className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}>
                <span className="text-2xl mb-2 block">🌍</span>
                <h3 className={`font-medium ${headingColor}`}>Time Zones</h3>
                <p className="text-sm opacity-70">Work with global teams</p>
              </Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
