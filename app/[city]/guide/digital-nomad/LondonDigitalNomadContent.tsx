'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LondonDigitalNomadContent({ city }: Props) {
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
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to London Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Digital Nomad Guide to London
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Working remotely from the UK capital — costs, coworking, and connectivity
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Answer</h2>
        <p>
          London is expensive but worth it for global connectivity, English-speaking environment, 
          and excellent transport. GMT/BST timezone allows easy overlap with Europe, Africa, and 
          manageable calls with Americas. Coworking from £200-500/month, cafés with WiFi everywhere, 
          but prepare for £2,500+ monthly living costs.
        </p>
      </section>
      
      <section className="mb-10 space-y-4">
        <p>
          London isn't the cheapest digital nomad destination — not by a long shot. But it offers 
          something many places can't: a genuine global hub with world-class connectivity, 
          English as the primary language, and a time zone that bridges continents.
        </p>
        <p>
          Whether you're here for a week or considering a longer stay, here's everything you need 
          to know about working remotely from London.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💰 Cost of Living Overview</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Expense</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Budget</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Mid-Range</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Comfortable</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">Accommodation (room/studio)</td>
                <td className="px-4 py-3">£800-1,200/mo</td>
                <td className="px-4 py-3">£1,200-1,800/mo</td>
                <td className="px-4 py-3">£1,800-3,000/mo</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Coworking</td>
                <td className="px-4 py-3">Cafés/libraries</td>
                <td className="px-4 py-3">£150-300/mo</td>
                <td className="px-4 py-3">£350-600/mo</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Food</td>
                <td className="px-4 py-3">£200-350/mo</td>
                <td className="px-4 py-3">£350-500/mo</td>
                <td className="px-4 py-3">£500-800/mo</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">Transport (Oyster)</td>
                <td className="px-4 py-3">£100-150/mo</td>
                <td className="px-4 py-3">£150-200/mo</td>
                <td className="px-4 py-3">£200-300/mo</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">Entertainment/Social</td>
                <td className="px-4 py-3">£100-200/mo</td>
                <td className="px-4 py-3">£200-400/mo</td>
                <td className="px-4 py-3">£400-800/mo</td>
              </tr>
              <tr className={`font-bold ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
                <td className="px-4 py-3">TOTAL</td>
                <td className="px-4 py-3">£1,400-2,000/mo</td>
                <td className="px-4 py-3">£2,000-3,200/mo</td>
                <td className="px-4 py-3">£3,200-5,500/mo</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          *Short-term (Airbnb) accommodation typically costs 50-100% more than monthly rentals.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏢 Coworking Spaces</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>WeWork</h3>
            <p className="text-sm mb-2">Multiple locations across London</p>
            <p className="text-sm"><strong>Price:</strong> £300-500/mo for hot desk, day passes available</p>
            <p className={`text-sm ${mutedColor}`}>Corporate vibe, great networking, excellent facilities</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Second Home</h3>
            <p className="text-sm mb-2">Spitalfields, Holland Park, London Fields</p>
            <p className="text-sm"><strong>Price:</strong> £350-450/mo</p>
            <p className={`text-sm ${mutedColor}`}>Design-focused, creative crowd, beautiful spaces</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Huckletree</h3>
            <p className="text-sm mb-2">Shoreditch, White City, Westminster</p>
            <p className="text-sm"><strong>Price:</strong> £300-450/mo</p>
            <p className={`text-sm ${mutedColor}`}>Tech/startup focus, great community events</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>The Hoxton (Working From)</h3>
            <p className="text-sm mb-2">Southwark, Holborn</p>
            <p className="text-sm"><strong>Price:</strong> £20-35/day</p>
            <p className={`text-sm ${mutedColor}`}>Hotel-style workspace, good for occasional use</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Impact Hub</h3>
            <p className="text-sm mb-2">King's Cross, Brixton</p>
            <p className="text-sm"><strong>Price:</strong> £200-350/mo</p>
            <p className={`text-sm ${mutedColor}`}>Social enterprise focus, diverse community</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>☕ Best Cafés for Working</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Central London</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Timberyard</strong> (Soho) — Laptop-friendly, all-day</li>
              <li>• <strong>Workshop Coffee</strong> (Holborn) — Power outlets, fast WiFi</li>
              <li>• <strong>Store Street Espresso</strong> (Bloomsbury) — Near British Museum</li>
              <li>• <strong>TAP Coffee</strong> (Multiple) — No WiFi time limits</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>East London</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Allpress</strong> (Shoreditch) — Spacious, great for groups</li>
              <li>• <strong>Climpson's Arch</strong> (Hackney) — Under the railway, huge space</li>
              <li>• <strong>The Attendant</strong> (Shoreditch) — Quirky, converted toilet</li>
              <li>• <strong>Ozone Coffee</strong> (Old Street) — All-day working spot</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>South London</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>Federation Coffee</strong> (Brixton) — Great breakfast, good WiFi</li>
              <li>• <strong>Four Corners</strong> (Peckham) — Hipster vibes, spacious</li>
              <li>• <strong>WatchHouse</strong> (Bermondsey) — In an old watch house</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Free WiFi Options</h3>
            <ul className="text-sm space-y-1">
              <li>• <strong>British Library</strong> — Free, quiet, long hours</li>
              <li>• <strong>Barbican Library</strong> — Brutalist beauty</li>
              <li>• <strong>Most public libraries</strong> — Check local borough</li>
              <li>• <strong>Pret A Manger</strong> — Free WiFi, power outlets vary</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🌍 Time Zone Advantage</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <p className="mb-4">
            London's GMT/BST timezone is genuinely useful for remote work. Here's how it overlaps 
            with major markets:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium mb-2 ${headingColor}`}>Morning (8 AM - 12 PM London)</h4>
              <ul className="space-y-1">
                <li>✅ Europe: Full working day</li>
                <li>✅ Middle East/Africa: Perfect overlap</li>
                <li>⚠️ Asia: End of day (5-9 PM)</li>
                <li>❌ US East Coast: 3-7 AM (too early)</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium mb-2 ${headingColor}`}>Afternoon (2-6 PM London)</h4>
              <ul className="space-y-1">
                <li>✅ US East Coast: 9 AM - 1 PM (prime time)</li>
                <li>✅ US West Coast: 6-10 AM (workable)</li>
                <li>✅ Europe: Still working hours</li>
                <li>⚠️ Asia: Night (9 PM - 1 AM)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className={`mt-4 text-sm ${mutedColor}`}>
          <strong>Pro tip:</strong> Schedule US calls for 2-6 PM London time (9 AM - 1 PM NYC). 
          For Asia-Pacific, early morning London (7-9 AM) catches end of their workday.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📱 Connectivity & SIM Cards</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Best SIM Options</h3>
            <ul className="text-sm space-y-2">
              <li>• <strong>giffgaff</strong> — £10-25/mo, good data, easy top-up</li>
              <li>• <strong>Three</strong> — £10-20/mo, great data allowances, EU roaming</li>
              <li>• <strong>VOXI</strong> — £10-15/mo, unlimited social media data</li>
              <li>• <strong>Lebara</strong> — Cheap international calls included</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>WiFi Quality</h3>
            <p className="text-sm">
              London has excellent 4G/5G coverage and most cafés/coworking spaces have reliable 
              WiFi (50-200 Mbps typical). TfL WiFi is available in Tube stations (limited underground).
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏠 Best Areas for Digital Nomads</h2>
        
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Shoreditch / Hackney</h3>
            <p className="text-sm">Tech hub, endless cafés, young creative crowd. More expensive but most "digital nomad-friendly." Great for networking.</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Brixton</h3>
            <p className="text-sm">South London culture hub, more affordable, diverse community. Excellent food scene, good transport links.</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>Peckham / Camberwell</h3>
            <p className="text-sm">Up-and-coming creative area, lower rents, good cafés. Less central but lively local scene.</p>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold ${headingColor}`}>King's Cross / Camden</h3>
            <p className="text-sm">Central location, Google/Facebook offices nearby, lots of coworking. Well-connected to everywhere.</p>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🛂 Visa Considerations</h2>
        
        <div className={`p-4 rounded-xl border-2 border-amber-300 ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>⚠️ Important</h3>
          <p className="text-sm mb-4">
            The UK doesn't have a digital nomad visa. Working remotely for a foreign company while 
            on a Standard Visitor visa is technically not allowed. Options include:
          </p>
          <ul className="text-sm space-y-2">
            <li>• <strong>Youth Mobility Visa</strong> — For certain nationalities, ages 18-30</li>
            <li>• <strong>Global Talent Visa</strong> — For tech/creative leaders</li>
            <li>• <strong>Skilled Worker Visa</strong> — Requires UK employer sponsorship</li>
            <li>• <strong>Short trips</strong> — Some digital nomads visit for tourism (not technically working)</li>
          </ul>
          <p className={`text-sm mt-3 ${mutedColor}`}>
            Check gov.uk for current visa rules. This is not legal advice.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is London worth it for digital nomads given the cost?</h3>
            <p className="text-sm">
              If you value networking opportunities, English-speaking environment, and excellent 
              global connectivity — yes. If you're purely optimizing for cost, places like Lisbon, 
              Budapest, or Bali offer better value.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Can I use cafés as my main workspace?</h3>
            <p className="text-sm">
              Yes, but with limitations. Many cafés get busy at lunch and may have unwritten 
              time limits. Buying regularly is expected. For video calls, coworking is more reliable.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What's the best time of year to be in London?</h3>
            <p className="text-sm">
              May-September for weather and outdoor options. November-February is cheapest but 
              dark (sunset 4 PM in December). See our{' '}
              <Link href={`/${city.slug}/guide/best-time-to-visit/`} className={linkColor}>Best Time to Visit guide</Link>.
            </p>
          </div>
        </div>
      </section>
      
      <section className={`p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-4 ${headingColor}`}>Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href={`/${city.slug}/guide/remote-work/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💻</span><span>Remote Work Guide</span>
          </Link>
          <Link href={`/${city.slug}/guide/business-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>💼</span><span>Business Hours</span>
          </Link>
          <Link href={`/${city.slug}/guide/time-difference/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌐</span><span>Time Difference</span>
          </Link>
          <Link href={`/${city.slug}/guide/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>📖</span><span>Complete London Guide</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
