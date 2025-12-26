'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeDigitalNomadContent({ city }: Props) {
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
          Digital Nomad Singapore Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Coworking spaces, WiFi, cost of living, and visa options
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Take</h2>
        <p>
          Singapore is <strong>expensive but extremely convenient</strong>. World-class 
          infrastructure, English everywhere, blazing fast internet, but expect to spend 
          <strong> S$3,500-5,000/month</strong> minimum. Great for short stays, challenging 
          for long-term budget nomads.
        </p>
      </section>
      
      <section className={`mb-8 p-4 rounded-xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700'}`}>
        <h3 className={`font-semibold mb-2 ${headingColor}`}>💡 Singapore's Digital Nomad Appeal</h3>
        <p className="text-sm">
          Ultra-safe, ultra-efficient, English-speaking, and positioned perfectly in Asia. 
          If you work with clients in Asia-Pacific, Singapore's timezone is ideal. 
          Just be prepared for the price tag!
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏢 Coworking Spaces</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Space</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Location</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Day Pass</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Monthly</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">WeWork</td>
                <td className="px-4 py-3">Multiple locations</td>
                <td className="px-4 py-3">S$50+</td>
                <td className="px-4 py-3">S$500-800</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">JustCo</td>
                <td className="px-4 py-3">CBD, Bugis, One-North</td>
                <td className="px-4 py-3">S$35-50</td>
                <td className="px-4 py-3">S$350-600</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">The Working Capitol</td>
                <td className="px-4 py-3">Keong Saik</td>
                <td className="px-4 py-3">S$45</td>
                <td className="px-4 py-3">S$450-550</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">The Hive</td>
                <td className="px-4 py-3">Lavender, Carpenter St</td>
                <td className="px-4 py-3">S$35</td>
                <td className="px-4 py-3">S$380-500</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">WORQ</td>
                <td className="px-4 py-3">City Hall</td>
                <td className="px-4 py-3">S$30</td>
                <td className="px-4 py-3">S$300-400</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Pro Tip:</strong> Many coworking spaces offer free trial days. 
            Book through their websites or platforms like Deskimo for day passes across 
            multiple spaces.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>☕ Laptop-Friendly Cafes</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🏆 Best for Work</h3>
            <ul className="text-sm space-y-2">
              <li><strong>Huggs Coffee (various)</strong> - Power outlets, fast WiFi</li>
              <li><strong>The Coffee Academics</strong> - Scotts Square, spacious</li>
              <li><strong>Starbucks Reserve</strong> - Jewel Changi, comfortable</li>
              <li><strong>Atlas Coffeehouse</strong> - Bukit Timah, work-friendly</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>⚠️ Café Culture Notes</h3>
            <ul className="text-sm space-y-2">
              <li>• Many cafes have 2-hour limits during peak</li>
              <li>• "No laptop" signs at some popular brunch spots</li>
              <li>• Coffee typically S$5-8</li>
              <li>• Food courts - not ideal but cheap</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📶 Internet & Connectivity</h2>
        
        <div className={`p-6 rounded-xl border-2 border-green-300 ${isLight ? 'bg-green-50' : 'bg-green-900/20'}`}>
          <p className="mb-4 font-semibold text-green-700">
            Singapore has some of the fastest internet in the world! 🚀
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Average Speeds</h3>
              <ul className="space-y-1">
                <li>• <strong>Home fiber:</strong> 1Gbps common</li>
                <li>• <strong>Mobile 4G:</strong> 50-100 Mbps</li>
                <li>• <strong>Mobile 5G:</strong> 200-500 Mbps</li>
                <li>• <strong>Café WiFi:</strong> 20-50 Mbps</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>SIM Cards</h3>
              <ul className="space-y-1">
                <li>• <strong>Singtel, Starhub, M1</strong> - Main carriers</li>
                <li>• <strong>Tourist SIM:</strong> S$15-30 at airport</li>
                <li>• <strong>Data:</strong> 100GB for ~S$20/month</li>
                <li>• <strong>Activation:</strong> Passport required</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💰 Cost of Living</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Expense</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Budget</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Comfortable</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">🏠 Accommodation</td>
                <td className="px-4 py-3">S$1,200-1,800 (room)</td>
                <td className="px-4 py-3">S$2,500-4,000 (studio)</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🏢 Coworking</td>
                <td className="px-4 py-3">S$0 (cafes)</td>
                <td className="px-4 py-3">S$400-600</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🍜 Food</td>
                <td className="px-4 py-3">S$600 (hawker)</td>
                <td className="px-4 py-3">S$1,000-1,500</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🚇 Transport</td>
                <td className="px-4 py-3">S$80-120 (MRT/bus)</td>
                <td className="px-4 py-3">S$200-300 (+ Grab)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">📱 Phone/Internet</td>
                <td className="px-4 py-3">S$20-30</td>
                <td className="px-4 py-3">S$50-80</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🎯 Entertainment</td>
                <td className="px-4 py-3">S$200</td>
                <td className="px-4 py-3">S$500+</td>
              </tr>
              <tr className={isLight ? 'bg-amber-50' : 'bg-amber-900/20'}>
                <td className="px-4 py-3 font-bold">Monthly Total</td>
                <td className="px-4 py-3 font-bold">S$2,500-3,500</td>
                <td className="px-4 py-3 font-bold">S$4,500-6,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'}`}>
          <p className="text-sm">
            <strong>💡 Budget Hack:</strong> Hawker centers are your best friend - delicious 
            meals for S$4-6. Eat there 2x daily and save S$500+/month vs restaurants.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏠 Accommodation Options</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Short-Term (1-3 months)</h3>
            <ul className="text-sm space-y-2">
              <li><strong>Airbnb</strong> - S$100-200/night (30% discount monthly)</li>
              <li><strong>Serviced apartments</strong> - S$4,000-6,000/month</li>
              <li><strong>Hostels</strong> - S$30-50/night (dorms)</li>
              <li><strong>Co-living</strong> - Hmlet, Lyf from S$2,000/month</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Best Neighborhoods</h3>
            <ul className="text-sm space-y-2">
              <li><strong>Tiong Bahru</strong> - Hip cafes, central</li>
              <li><strong>Bugis/Arab St</strong> - Vibrant, affordable</li>
              <li><strong>Holland Village</strong> - Expat favorite</li>
              <li><strong>East Coast</strong> - Beach vibes, quieter</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📋 Visa Options</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <div className="space-y-4">
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Tourist Visa (Most Countries)</h3>
              <p className="text-sm">30-90 days visa-free depending on nationality. US, UK, EU, Australia get 90 days.</p>
            </div>
            
            <div className={`p-3 rounded-lg ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>⚠️ No Digital Nomad Visa</h3>
              <p className="text-sm">
                Singapore doesn't have a specific digital nomad visa. Working remotely 
                on a tourist visa is technically a gray area. For long-term stays, 
                you'd need an Employment Pass or EntrePass.
              </p>
            </div>
            
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Long-Term Options</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>EntrePass</strong> - For entrepreneurs starting a company</li>
                <li>• <strong>Employment Pass</strong> - Requires job offer (min S$5,000 salary)</li>
                <li>• <strong>Tech.Pass</strong> - For established tech leaders (very competitive)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>✅ Pros & Cons</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl border-2 border-green-300 ${isLight ? 'bg-green-50' : 'bg-green-900/20'}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>👍 Pros</h3>
            <ul className="text-sm space-y-1">
              <li>• Ultra-fast, reliable internet</li>
              <li>• English everywhere</li>
              <li>• Incredibly safe</li>
              <li>• World-class infrastructure</li>
              <li>• Great food scene</li>
              <li>• Gateway to SE Asia travel</li>
              <li>• Perfect APAC timezone</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl border-2 border-red-300 ${isLight ? 'bg-red-50' : 'bg-red-900/20'}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>👎 Cons</h3>
            <ul className="text-sm space-y-1">
              <li>• Very expensive</li>
              <li>• Hot and humid all year</li>
              <li>• Small island, can feel limiting</li>
              <li>• No DN visa</li>
              <li>• Strict laws (chewing gum!)</li>
              <li>• High alcohol prices</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in Singapore</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
