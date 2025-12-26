'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function SydneyDigitalNomadContent({ city }: Props) {
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Sydney Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Digital Nomad Guide to Sydney
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Coworking spaces, beach cafes, WiFi, visas, and costs for remote workers
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Summary</h2>
        <p>
          Sydney is expensive ($3,500-5,000 USD/month) but offers stunning quality of life, fast internet, 
          excellent coworking culture, and incredible work-life balance. Best for: beach lovers, APAC time 
          zone workers, and those who can afford premium pricing.
        </p>
      </section>
      
      <section className="mb-10 space-y-4">
        <p>
          Let's be honest: Sydney is one of the most expensive cities in the world. But it's also one of 
          the most livable. Where else can you finish work, hit a world-class beach in 20 minutes, and 
          still make your evening yoga class by the harbour?
        </p>
        <p>
          The digital nomad scene here is strong but different from Bali or Lisbon — it's more professionals 
          working remotely for global companies than scrappy startups. The cafe culture is incredible, WiFi 
          is reliable everywhere, and the timezone makes it perfect for APAC-focused work.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏢 Best Coworking Spaces</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>WeWork (Multiple Locations)</h3>
            <p className="text-sm mb-2">Professional, reliable, multiple CBD locations. Hot desk: $550-650 AUD/month</p>
            <p className="text-xs text-amber-600">Best for: Corporate remote workers</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Fishburners</h3>
            <p className="text-sm mb-2">Startup-focused, great community. From $350 AUD/month. Sydney CBD location.</p>
            <p className="text-xs text-amber-600">Best for: Entrepreneurs, tech workers</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>The Commons (Bondi)</h3>
            <p className="text-sm mb-2">Beach vibes! 5 min from Bondi Beach. Casual atmosphere. Day passes available.</p>
            <p className="text-xs text-amber-600">Best for: Beach lovers, casual work</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Tank Stream Labs</h3>
            <p className="text-sm mb-2">Premium space in CBD. Events and networking. From $600 AUD/month.</p>
            <p className="text-xs text-amber-600">Best for: Serious professionals</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>☕ Best Cafes for Remote Work</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-1 ${headingColor}`}>Single O (Surry Hills)</h3>
            <p className="text-sm">Large tables, excellent coffee, WiFi, power outlets. Gets busy 11 AM-2 PM.</p>
          </div>
          
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-1 ${headingColor}`}>The Grounds of Alexandria</h3>
            <p className="text-sm">Huge space, WiFi, beautiful setting. Weekend brunch crowds, weekdays quieter.</p>
          </div>
          
          <div className={`p-4 rounded-lg border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
            <h3 className={`font-medium mb-1 ${headingColor}`}>Bread & Butter (Bondi)</h3>
            <p className="text-sm">Beachside work spot. Ocean views, good WiFi. Best in off-peak hours.</p>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg ${cardBg}`}>
          <p className="text-sm">
            <strong>💡 Cafe etiquette:</strong> In Sydney, it's expected you'll buy something every 1-2 hours 
            if working from a cafe. Unlike some countries, camping all day on one coffee is frowned upon.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💰 Cost of Living (Monthly)</h2>
        
        <div className={`overflow-auto rounded-xl border ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
          <table className="w-full text-sm">
            <thead className={cardBg}>
              <tr>
                <th className="text-left p-3">Item</th>
                <th className="text-left p-3">Budget</th>
                <th className="text-left p-3">Comfortable</th>
                <th className="text-left p-3">Luxury</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3">Accommodation</td>
                <td className="p-3">$1,800-2,400</td>
                <td className="p-3">$2,500-3,500</td>
                <td className="p-3">$4,000+</td>
              </tr>
              <tr>
                <td className="p-3">Food & Dining</td>
                <td className="p-3">$600-800</td>
                <td className="p-3">$900-1,200</td>
                <td className="p-3">$1,500+</td>
              </tr>
              <tr>
                <td className="p-3">Transport</td>
                <td className="p-3">$150-200</td>
                <td className="p-3">$200-300</td>
                <td className="p-3">$400+</td>
              </tr>
              <tr>
                <td className="p-3">Coworking</td>
                <td className="p-3">$0 (cafes)</td>
                <td className="p-3">$400-600</td>
                <td className="p-3">$700+</td>
              </tr>
              <tr>
                <td className="p-3">Misc/Entertainment</td>
                <td className="p-3">$300-400</td>
                <td className="p-3">$500-700</td>
                <td className="p-3">$1,000+</td>
              </tr>
              <tr className={cardBg}>
                <td className="p-3 font-bold">Total (AUD)</td>
                <td className="p-3 font-bold">$2,850-3,800</td>
                <td className="p-3 font-bold">$4,500-6,300</td>
                <td className="p-3 font-bold">$7,600+</td>
              </tr>
              <tr>
                <td className="p-3 font-bold">Total (USD)</td>
                <td className="p-3 font-bold">~$1,900-2,500</td>
                <td className="p-3 font-bold">~$3,000-4,200</td>
                <td className="p-3 font-bold">~$5,000+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛂 Visa Options</h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Tourist Visa / Visitor Visa (subclass 600)</h3>
            <p className="text-sm mb-2"><strong>Duration:</strong> 3-12 months</p>
            <p className="text-sm mb-2"><strong>Work allowed:</strong> No (technically). Many digital nomads use this but it's a grey area.</p>
            <p className="text-sm"><strong>Cost:</strong> $145-365 AUD depending on duration</p>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Working Holiday Visa (subclass 417/462)</h3>
            <p className="text-sm mb-2"><strong>Duration:</strong> 12 months (extendable)</p>
            <p className="text-sm mb-2"><strong>Work allowed:</strong> Yes! Can work for any employer</p>
            <p className="text-sm mb-2"><strong>Age limit:</strong> 18-30 (or 18-35 for some countries)</p>
            <p className="text-sm"><strong>Cost:</strong> $635 AUD</p>
          </div>
          
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Temporary Skill Shortage Visa (subclass 482)</h3>
            <p className="text-sm mb-2"><strong>Duration:</strong> 2-4 years</p>
            <p className="text-sm mb-2"><strong>Work allowed:</strong> Yes, sponsored by Australian employer</p>
            <p className="text-sm"><strong>Best for:</strong> Professionals with in-demand skills</p>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-lg border-2 border-dashed ${isLight ? 'border-red-300' : 'border-red-500/50'}`}>
          <p className="text-sm">
            <strong>⚠️ Important:</strong> Working remotely for a foreign company while on a tourist visa 
            is technically not allowed, though enforcement is rare. For legal certainty, get a working visa. 
            Consult an immigration lawyer for your specific situation.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📶 Internet & Connectivity</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Home Internet</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Providers:</strong> Telstra, Optus, TPG</li>
              <li>• <strong>Speed:</strong> 50-100 Mbps typical</li>
              <li>• <strong>Cost:</strong> $70-120 AUD/month</li>
              <li>• <strong>NBN:</strong> National broadband (most areas)</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Mobile Data</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Prepaid SIM:</strong> $30-50 AUD/month</li>
              <li>• <strong>Data:</strong> 40-80 GB typical</li>
              <li>• <strong>Coverage:</strong> Excellent in cities</li>
              <li>• <strong>5G:</strong> Available in CBD and suburbs</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>📚 Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>💻</span>
            <span className={`font-medium ${headingColor}`}>Remote Work Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white' : 'bg-slate-800'}`}>
            <span>💼</span>
            <span className={`font-medium ${headingColor}`}>Business Hours</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
