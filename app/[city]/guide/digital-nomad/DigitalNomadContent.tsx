'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function DigitalNomadContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  const coworkingSpaces = [
    { name: 'WeWork', price: '$350-700/mo', vibe: 'Corporate, polished', locations: '50+ NYC locations', wifi: '100+ Mbps' },
    { name: 'The Wing', price: '$250-350/mo', vibe: 'Women-focused, design-forward', locations: 'Flatiron, SoHo, Dumbo', wifi: 'Fast' },
    { name: 'Industrious', price: '$400-800/mo', vibe: 'Premium, quiet', locations: 'Midtown, FiDi', wifi: '200+ Mbps' },
    { name: 'Spacious', price: 'Free-$29/mo', vibe: 'Restaurants by day', locations: 'Various Manhattan', wifi: 'Varies' },
    { name: 'Brooklyn Creative League', price: '$275/mo', vibe: 'Creative, community', locations: 'Gowanus', wifi: 'Fast' },
    { name: 'NYU/Columbia Libraries', price: 'Free (if affiliated)', vibe: 'Academic, quiet', locations: 'Greenwich Village, Morningside', wifi: 'Fast' },
  ]
  
  const cafes = [
    { name: 'Think Coffee', area: 'Multiple locations', outlets: '✅', wifi: 'Good', stay: '2-3 hrs', notes: 'Nomad-friendly, busy' },
    { name: 'Toby\'s Estate', area: 'Williamsburg, Flatiron', outlets: '⚠️', wifi: 'Fast', stay: '2 hrs', notes: 'Great coffee, limited seating' },
    { name: 'Joe Coffee', area: 'Multiple locations', outlets: '⚠️', wifi: 'Good', stay: '1-2 hrs', notes: 'Small spaces, high turnover' },
    { name: 'Stumptown', area: 'Greenwich Village', outlets: '✅', wifi: 'Fast', stay: '2-3 hrs', notes: 'Basement has more space' },
    { name: 'Café Grumpy', area: 'Chelsea, Greenpoint', outlets: '⚠️', wifi: 'Good', stay: '1-2 hrs', notes: 'Famous from "Girls"' },
    { name: 'Le Pain Quotidien', area: 'Multiple locations', outlets: '✅', wifi: 'Good', stay: '3+ hrs', notes: 'Big tables, food ordering expected' },
  ]
  
  return (
    <div className={textColor}>
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to NYC Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Digital Nomad Guide to NYC
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Where to work, what it costs, and how to survive
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ The Honest Truth</h2>
        <p>
          NYC is <strong>not a budget digital nomad destination</strong>. Expect $3,000-5,000/month minimum. 
          But if you can afford it: world-class food, endless inspiration, and the East Coast time zone 
          works well for Europe and Americas. Just don't come here to save money.
        </p>
      </section>
      
      <section className="mb-10 space-y-4">
        <p>
          So you want to be a digital nomad in New York City. Bold choice. This isn't Bali or 
          Lisbon — you won't find $500/month apartments or $3 lunches. What you will find is 
          one of the most dynamic cities on Earth, incredible networking opportunities, and 
          genuinely fast WiFi almost everywhere.
        </p>
        <p>
          Here's what you actually need to know.
        </p>
      </section>
      
      {/* Cost of Living */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💰 Real Cost of Living</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-3 ${headingColor}`}>Monthly Expenses (Solo)</h3>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>Room in shared apt</span><span>$1,200-1,800</span></li>
              <li className="flex justify-between"><span>Studio apartment</span><span>$2,500-3,500</span></li>
              <li className="flex justify-between"><span>Coworking</span><span>$200-500</span></li>
              <li className="flex justify-between"><span>Food (cooking + eating out)</span><span>$600-1,000</span></li>
              <li className="flex justify-between"><span>Transport (MetroCard)</span><span>$127</span></li>
              <li className="flex justify-between"><span>Phone/data</span><span>$50-80</span></li>
              <li className="flex justify-between border-t pt-2 font-medium"><span>Total</span><span>$3,000-5,500</span></li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-3 ${headingColor}`}>Money-Saving Tips</h3>
            <ul className="text-sm space-y-2">
              <li>• Live in Brooklyn/Queens (30% cheaper than Manhattan)</li>
              <li>• Use NYPL for free workspace + WiFi</li>
              <li>• $1 pizza slices still exist</li>
              <li>• Happy hour culture is strong</li>
              <li>• Sublet furnished rooms (Craigslist, Facebook groups)</li>
              <li>• Walk — it's faster than the subway sometimes</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Coworking */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏢 Coworking Spaces</h2>
        
        <div className="space-y-3">
          {coworkingSpaces.map(space => (
            <div key={space.name} className={`p-4 rounded-xl border ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-800/50'}`}>
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className={`font-semibold ${headingColor}`}>{space.name}</h3>
                <span className="text-sm font-mono">{space.price}</span>
              </div>
              <p className={`text-sm mt-1 ${mutedColor}`}>{space.vibe}</p>
              <div className="flex flex-wrap gap-3 mt-2 text-xs">
                <span>📍 {space.locations}</span>
                <span>📶 {space.wifi}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Cafes */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>☕ Laptop-Friendly Cafes</h2>
        
        <p className="mb-4">
          Fair warning: NYC cafes aren't always nomad-friendly. Many are tiny, packed, and give you 
          side-eye if you camp out. Here are the ones that work:
        </p>
        
        <div className="space-y-3">
          {cafes.map(cafe => (
            <div key={cafe.name} className={`p-4 rounded-xl ${cardBg}`}>
              <div className="flex flex-wrap justify-between items-start gap-2">
                <h3 className={`font-medium ${headingColor}`}>{cafe.name}</h3>
                <span className={`text-sm ${mutedColor}`}>{cafe.area}</span>
              </div>
              <div className="flex flex-wrap gap-3 mt-2 text-sm">
                <span>🔌 Outlets: {cafe.outlets}</span>
                <span>📶 WiFi: {cafe.wifi}</span>
                <span>⏱️ Stay: {cafe.stay}</span>
              </div>
              <p className={`text-sm mt-2 ${mutedColor}`}>{cafe.notes}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Free Options */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🆓 Free Work Spots</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>NY Public Library</h3>
            <p className="text-sm">Free WiFi, outlets, quiet spaces. The main branch on 42nd St has stunning reading rooms. Get a library card (free for anyone).</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Bryant Park</h3>
            <p className="text-sm">Free WiFi, outdoor tables, beautiful setting. Best in spring/fall. Has a cafe for food/drinks. Closes at dusk.</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Hotel Lobbies</h3>
            <p className="text-sm">Ace Hotel lobby is famous for this. Look confident, buy a coffee, and work. WiFi usually available.</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Whole Foods / Trader Joe's</h3>
            <p className="text-sm">Seating areas with WiFi. Buy something, stay a while. Not glamorous but reliable.</p>
          </div>
        </div>
      </section>
      
      {/* Time Zone */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Time Zone Advantage</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-3">
            NYC's Eastern Time zone is actually pretty good for remote work:
          </p>
          <ul className="text-sm space-y-2">
            <li>✅ <strong>Europe:</strong> 5-6 hour overlap in afternoon (2-6 PM NYC = evening EU)</li>
            <li>✅ <strong>West Coast US:</strong> Full overlap (just 3 hours difference)</li>
            <li>⚠️ <strong>Asia:</strong> Challenging (NYC morning = Asia night)</li>
            <li>✅ <strong>Latin America:</strong> Great overlap (0-3 hours difference)</li>
          </ul>
        </div>
        
        <p className={`mt-4 text-sm ${mutedColor}`}>
          See our <Link href={`/${city.slug}/guide/remote-work/`} className={linkColor}>Remote Work Guide</Link> for detailed scheduling strategies.
        </p>
      </section>
      
      {/* FAQ */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>FAQ</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How fast is WiFi in NYC?</h3>
            <p className="text-sm">Generally excellent. Most cafes: 20-50 Mbps. Coworking spaces: 100+ Mbps. Apartments: 100-500 Mbps (Verizon Fios is common). You won't have speed issues.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Can I get a short-term apartment?</h3>
            <p className="text-sm">Yes, but not cheap. Furnished sublets on Craigslist, Facebook groups ("Gypsy Housing NYC"), or Furnished Finder. Expect $2,500-4,000/month for a studio. Airbnb is technically illegal for &lt;30 days in NYC.</p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is NYC worth it for digital nomads?</h3>
            <p className="text-sm">If you value energy, networking, food, and culture over cost savings — absolutely. If you're looking for a cheap base, look elsewhere. NYC is for when you want to invest in experiences, not savings.</p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Time Zones</span>
          </Link>
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in NYC</span>
          </Link>
          <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🗽</span><span>Best Time to Visit</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete NYC Time Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2025. Prices are estimates and change frequently.</p>
    </div>
  )
}
