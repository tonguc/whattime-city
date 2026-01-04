'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import TableOfContents, { TocItem } from '@/components/TableOfContents'

interface Props {
  city: City
}

export default function WorkRemoteContent({ city }: Props) {
  const { isLight, time } = useCityContext()
  
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const currentHour = cityTime.getHours()
  const timeStr = cityTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  
  const isWorkingHours = currentHour >= 9 && currentHour < 18
  
  const tocItems: TocItem[] = [
    { id: 'overview', title: 'Overview', icon: '⚡' },
    { id: 'remote-work', title: 'Remote Work Guide', icon: '💻' },
    { id: 'timezone-overlap', title: 'Timezone Overlap', icon: '🌐', level: 'h3' },
    { id: 'internet', title: 'Internet & Connectivity', icon: '📶', level: 'h3' },
    { id: 'work-tips', title: 'Work Tips', icon: '💡', level: 'h3' },
    { id: 'coworking', title: 'Coworking Spaces', icon: '🏢' },
    { id: 'coworking-pricing', title: 'Pricing Guide', icon: '💰', level: 'h3' },
    { id: 'coworking-amenities', title: 'Amenities', icon: '✅', level: 'h3' },
    { id: 'nomad', title: 'Digital Nomad', icon: '🎒' },
    { id: 'cost-of-living', title: 'Cost of Living', icon: '💵', level: 'h3' },
    { id: 'visa-info', title: 'Visa Information', icon: '🛂', level: 'h3' },
    { id: 'nomad-community', title: 'Nomad Community', icon: '🤝', level: 'h3' },
    { id: 'tools', title: 'Useful Tools', icon: '🛠️' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to {city.city} Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Work From {city.city}
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Complete guide to remote work, coworking spaces, and digital nomad life
        </p>
        <div className={`mt-4 flex flex-wrap gap-3`}>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
            <span className={`w-2 h-2 rounded-full ${isWorkingHours ? 'bg-green-500' : 'bg-amber-500'}`}></span>
            <span className="text-sm">{isWorkingHours ? 'Business Hours' : 'After Hours'}</span>
          </div>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
            <span className="text-sm">🕐 {timeStr} local time</span>
          </div>
        </div>
      </header>
      
      <div className="flex gap-8">
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <TableOfContents items={tocItems} isLight={isLight} />
        </aside>
        
        <div className="flex-1 min-w-0 space-y-12">
          
          <section id="overview" className={`p-6 rounded-2xl border-l-4 border-blue-500 ${cardBg} scroll-mt-24`}>
            <h2 className={`text-xl font-semibold mb-3 ${headingColor}`}>⚡ Quick Overview</h2>
            <p>{city.city} offers excellent infrastructure for remote work with reliable internet, numerous cafes with WiFi, and a growing number of coworking spaces. The timezone ({city.timezone}) works well for collaborating with teams in various regions.</p>
          </section>
          
          <section id="remote-work" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>💻 Remote Work Guide</h2>
            
            <div id="timezone-overlap" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🌐 Timezone Overlap for Remote Teams</h3>
              <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
                <table className="w-full text-sm">
                  <thead className={cardBg}><tr><th className="text-left p-3 font-medium">Region</th><th className="text-left p-3 font-medium">Overlap Hours</th><th className="text-left p-3 font-medium">Best For</th></tr></thead>
                  <tbody>
                    <tr className={`border-t ${tableBorder}`}><td className="p-3">🇺🇸 US East Coast</td><td className="p-3 font-medium">3-5 hours</td><td className="p-3">Afternoon meetings</td></tr>
                    <tr className={`border-t ${tableBorder}`}><td className="p-3">🇺🇸 US West Coast</td><td className="p-3 font-medium">1-3 hours</td><td className="p-3">Late afternoon/evening</td></tr>
                    <tr className={`border-t ${tableBorder}`}><td className="p-3">🇪🇺 Europe</td><td className="p-3 font-medium">6-8 hours</td><td className="p-3">Full business day</td></tr>
                    <tr className={`border-t ${tableBorder}`}><td className="p-3">🇦🇺 Australia</td><td className="p-3 font-medium">2-4 hours</td><td className="p-3">Morning meetings</td></tr>
                    <tr className={`border-t ${tableBorder}`}><td className="p-3">🇯🇵 Asia</td><td className="p-3 font-medium">3-5 hours</td><td className="p-3">Morning sync</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div id="internet" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>📶 Internet & Connectivity</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>🏠 Residential</h4><p className="text-sm opacity-80">50-200 Mbps average</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>📱 Mobile Data</h4><p className="text-sm opacity-80">4G/5G excellent coverage</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>☕ Cafe WiFi</h4><p className="text-sm opacity-80">Widely available, quality varies</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>🏢 Coworking</h4><p className="text-sm opacity-80">100-500 Mbps business-grade</p></div>
              </div>
            </div>
            
            <div id="work-tips" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>💡 Remote Work Tips</h3>
              <div className="space-y-3">
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium ${headingColor}`}>🔌 Power Adapters</h4><p className="text-sm opacity-80">Bring correct adapter for {city.country}. Universal adapters recommended.</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium ${headingColor}`}>🎧 Noise-Canceling Headphones</h4><p className="text-sm opacity-80">Essential for calls in cafes or shared spaces</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium ${headingColor}`}>📍 Backup Locations</h4><p className="text-sm opacity-80">Scout 2-3 reliable work spots in case your primary fails</p></div>
              </div>
            </div>
          </section>
          
          <section id="coworking" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🏢 Coworking Spaces</h2>
            
            <div id="coworking-pricing" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>💰 Pricing Guide</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>Day Pass</h4><p className="text-2xl font-bold mb-1">$15-40</p><p className="text-sm opacity-70">Hot desk for a day</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>Monthly</h4><p className="text-2xl font-bold mb-1">$200-500</p><p className="text-sm opacity-70">Dedicated desk</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-2 ${headingColor}`}>Private Office</h4><p className="text-2xl font-bold mb-1">$500+</p><p className="text-sm opacity-70">Per person/month</p></div>
              </div>
            </div>
            
            <div id="coworking-amenities" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>✅ Amenities to Look For</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}><ul className="space-y-2 text-sm"><li className="flex items-center gap-2"><span className="text-green-500">✓</span>High-speed WiFi (100+ Mbps)</li><li className="flex items-center gap-2"><span className="text-green-500">✓</span>Meeting rooms</li><li className="flex items-center gap-2"><span className="text-green-500">✓</span>Phone booths for calls</li><li className="flex items-center gap-2"><span className="text-green-500">✓</span>24/7 access</li></ul></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><ul className="space-y-2 text-sm"><li className="flex items-center gap-2"><span className="text-green-500">✓</span>Free coffee/tea</li><li className="flex items-center gap-2"><span className="text-green-500">✓</span>Printing facilities</li><li className="flex items-center gap-2"><span className="text-green-500">✓</span>Locker storage</li><li className="flex items-center gap-2"><span className="text-green-500">✓</span>Community events</li></ul></div>
              </div>
            </div>
          </section>
          
          <section id="nomad" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🎒 Digital Nomad Guide</h2>
            
            <div id="cost-of-living" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>💵 Cost of Living</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-3 ${headingColor}`}>Monthly Expenses</h4><div className="space-y-2 text-sm"><div className="flex justify-between"><span>Accommodation</span><span className="font-medium">$800-2000</span></div><div className="flex justify-between"><span>Coworking</span><span className="font-medium">$200-400</span></div><div className="flex justify-between"><span>Food (daily)</span><span className="font-medium">$20-50</span></div><div className="flex justify-between"><span>Transport</span><span className="font-medium">$50-150</span></div></div></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium mb-3 ${headingColor}`}>Ratings</h4><div className="space-y-2 text-sm"><div className="flex justify-between"><span>Internet</span><span>⭐⭐⭐⭐⭐</span></div><div className="flex justify-between"><span>Safety</span><span>⭐⭐⭐⭐</span></div><div className="flex justify-between"><span>Nightlife</span><span>⭐⭐⭐⭐</span></div><div className="flex justify-between"><span>Weather</span><span>⭐⭐⭐⭐</span></div></div></div>
              </div>
            </div>
            
            <div id="visa-info" className="mb-8 scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🛂 Visa Information</h3>
              <div className={`p-4 rounded-xl ${cardBg}`}>
                <p className="mb-4">Visa requirements vary by nationality. Common options:</p>
                <div className="space-y-3">
                  <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}><h4 className={`font-medium ${headingColor}`}>🎫 Tourist Visa</h4><p className="text-sm opacity-80">30-90 days. Cannot legally work.</p></div>
                  <div className={`p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-600/50'}`}><h4 className={`font-medium ${headingColor}`}>💼 Digital Nomad Visa</h4><p className="text-sm opacity-80">Check if {city.country} offers this option.</p></div>
                </div>
                <p className="mt-4 text-sm opacity-70">⚠️ Always verify with official sources before traveling.</p>
              </div>
            </div>
            
            <div id="nomad-community" className="scroll-mt-24">
              <h3 className={`text-xl font-semibold mb-4 ${headingColor}`}>🤝 Nomad Community</h3>
              <div className="space-y-3">
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium ${headingColor}`}>🎉 Meetups & Events</h4><p className="text-sm opacity-80">Check Meetup.com and Facebook groups for local events</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium ${headingColor}`}>💬 Online Communities</h4><p className="text-sm opacity-80">Nomad List, Reddit r/digitalnomad, local Slack groups</p></div>
                <div className={`p-4 rounded-xl ${cardBg}`}><h4 className={`font-medium ${headingColor}`}>🏠 Coliving Spaces</h4><p className="text-sm opacity-80">Combine accommodation + coworking + community</p></div>
              </div>
            </div>
          </section>
          
          <section id="tools" className="scroll-mt-24">
            <h2 className={`text-2xl font-bold mb-6 ${headingColor}`}>🛠️ Useful Tools</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/meeting/" className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}><span className="text-2xl mb-2 block">📅</span><h3 className={`font-medium ${headingColor}`}>Meeting Planner</h3><p className="text-sm opacity-70">Schedule calls across time zones</p></Link>
              <Link href="/time-converter/" className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform block`}><span className="text-2xl mb-2 block">🔄</span><h3 className={`font-medium ${headingColor}`}>Time Converter</h3><p className="text-sm opacity-70">Quick timezone conversions</p></Link>
            </div>
          </section>
          
        </div>
      </div>
    </div>
  )
}
