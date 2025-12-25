'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesDigitalNomadContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const greenBg = isLight ? 'bg-green-50' : 'bg-green-900/20'
  const amberBg = isLight ? 'bg-amber-50' : 'bg-amber-900/20'
  const redBg = isLight ? 'bg-red-50' : 'bg-red-900/20'
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Digital Nomad Guide to Los Angeles
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Complete guide to living and working remotely in LA - neighborhoods, costs, visas, and community
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Los Angeles is <strong>excellent for digital nomads</strong> with high costs but high rewards: 
          year-round perfect weather, thriving tech scene in Silicon Beach, abundant coworking spaces, 
          strong community, and 3-hour overlap with East Coast clients. Expect <strong>$3,000-5,000/month 
          budget</strong> (modest lifestyle) or <strong>$6,000+</strong> for comfort. Best neighborhoods: 
          Santa Monica, Venice, Silver Lake, or Koreatown for affordability.
        </p>
      </section>

      {/* Best Neighborhoods */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏘️ Best Neighborhoods for Digital Nomads
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌊 Santa Monica (Premium)</h3>
            <p className="text-sm mb-3">
              <strong>Vibe:</strong> Beach town, health-conscious, tech startups<br/>
              <strong>Rent (1BR):</strong> $3,000-4,500/mo<br/>
              <strong>Internet:</strong> Excellent (fiber available)
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Beach life + coworking spaces</li>
              <li>✓ SafeCity, walkable</li>
              <li>✓ Strong tech community</li>
              <li>✗ Expensive</li>
              <li>✗ Touristy</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🎨 Venice Beach (Creative)</h3>
            <p className="text-sm mb-3">
              <strong>Vibe:</strong> Bohemian, artistic, startup culture<br/>
              <strong>Rent (1BR):</strong> $2,800-4,000/mo<br/>
              <strong>Internet:</strong> Very good
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Creative community</li>
              <li>✓ Abbot Kinney cafes</li>
              <li>✓ Beach + boardwalk</li>
              <li>✗ Can be grungy</li>
              <li>✗ Parking difficult</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${amberBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌟 Silver Lake (Hip)</h3>
            <p className="text-sm mb-3">
              <strong>Vibe:</strong> Hipster, creative professionals, LGBT-friendly<br/>
              <strong>Rent (1BR):</strong> $2,200-3,200/mo<br/>
              <strong>Internet:</strong> Good
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Cool cafes & restaurants</li>
              <li>✓ Central location</li>
              <li>✓ Creative community</li>
              <li>✗ Hilly (less walkable)</li>
              <li>✗ Gentrifying fast</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${amberBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🍜 Koreatown (Affordable)</h3>
            <p className="text-sm mb-3">
              <strong>Vibe:</strong> Dense, urban, 24/7 energy<br/>
              <strong>Rent (1BR):</strong> $1,800-2,600/mo<br/>
              <strong>Internet:</strong> Excellent
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Most affordable central area</li>
              <li>✓ Amazing food scene</li>
              <li>✓ Good public transit</li>
              <li>✗ Very dense/busy</li>
              <li>✗ Limited outdoor space</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🏙️ Downtown LA (Urban)</h3>
            <p className="text-sm mb-3">
              <strong>Vibe:</strong> City living, growing tech scene<br/>
              <strong>Rent (1BR):</strong> $2,000-3,500/mo<br/>
              <strong>Internet:</strong> Excellent
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ New high-rises</li>
              <li>✓ Walkable core</li>
              <li>✓ Arts District cool</li>
              <li>✗ Homelessness issues</li>
              <li>✗ Feels empty on weekends</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌴 Culver City (Balanced)</h3>
            <p className="text-sm mb-3">
              <strong>Vibe:</strong> Family-friendly, tech companies<br/>
              <strong>Rent (1BR):</strong> $2,400-3,400/mo<br/>
              <strong>Internet:</strong> Excellent
            </p>
            <ul className="text-sm space-y-1">
              <li>✓ Amazon Studios, Apple nearby</li>
              <li>✓ Good restaurants</li>
              <li>✓ Safer feel</li>
              <li>✗ Less nightlife</li>
              <li>✗ Car essential</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Monthly Budget */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💰 Realistic Monthly Budgets
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Expense</th>
                <th className="text-left p-3 font-medium">Budget</th>
                <th className="text-left p-3 font-medium">Comfortable</th>
                <th className="text-left p-3 font-medium">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 font-medium">Rent (1BR)</td>
                <td className="p-3">$1,800-2,200</td>
                <td className="p-3">$2,800-3,500</td>
                <td className="p-3">$4,500-6,000</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Utilities & Internet</td>
                <td className="p-3">$100-150</td>
                <td className="p-3">$150-200</td>
                <td className="p-3">$200-300</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Food & Groceries</td>
                <td className="p-3">$400-600</td>
                <td className="p-3">$800-1,200</td>
                <td className="p-3">$1,500-2,000</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Transportation</td>
                <td className="p-3">$200-300</td>
                <td className="p-3">$400-600</td>
                <td className="p-3">$800-1,000</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Coworking/Cafes</td>
                <td className="p-3">$150-250</td>
                <td className="p-3">$400-500</td>
                <td className="p-3">$600-800</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Health Insurance</td>
                <td className="p-3">$300-500</td>
                <td className="p-3">$500-700</td>
                <td className="p-3">$700-1,000</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Entertainment & Social</td>
                <td className="p-3">$200-400</td>
                <td className="p-3">$500-800</td>
                <td className="p-3">$1,000-1,500</td>
              </tr>
              <tr className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
                <td className="p-3 font-bold">TOTAL/MONTH</td>
                <td className="p-3 font-bold">$3,150-4,400</td>
                <td className="p-3 font-bold">$5,550-7,500</td>
                <td className="p-3 font-bold">$9,300-12,600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Visa Info */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🛂 Visa & Legal Requirements
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl border-l-4 border-green-500 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Tourist Visa (B-2)</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Duration:</strong> Up to 6 months</li>
              <li><strong>Work allowed:</strong> No (remote work gray area)</li>
              <li><strong>Who can stay:</strong> Most Western countries visa-free (ESTA)</li>
              <li><strong>Renewal:</strong> Can extend once, difficult</li>
              <li><em>Note: Technically, working remotely for foreign company is allowed</em></li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${redBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Work Visas</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>H-1B:</strong> Requires US employer sponsor</li>
              <li><strong>O-1:</strong> "Extraordinary ability" (artists, tech leaders)</li>
              <li><strong>L-1:</strong> Intra-company transfer</li>
              <li><strong>E-2:</strong> Investor visa ($100k+ investment)</li>
              <li><em>Reality: Most digital nomads stay on tourist visa</em></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          👥 Digital Nomad Community & Networking
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Meetups & Events</h3>
            <ul className="space-y-2">
              <li>• <strong>Silicon Beach Meetups:</strong> Weekly tech networking events</li>
              <li>• <strong>Startup Grind LA:</strong> Monthly founder events</li>
              <li>• <strong>Digital Nomad LA (Facebook Group):</strong> Active community</li>
              <li>• <strong>Cross Campus Events:</strong> Regular workshops and networking</li>
              <li>• <strong>LA Tech Happy Hour:</strong> Every Thursday at various bars</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Online Communities</h3>
            <ul className="space-y-2">
              <li>• <strong>Reddit r/LAjobs:</strong> Remote work opportunities</li>
              <li>• <strong>Slack: LA Startups:</strong> 5,000+ members</li>
              <li>• <strong>Facebook: LA Remote Workers:</strong> Tips and meetups</li>
              <li>• <strong>LinkedIn LA Tech Groups:</strong> Professional networking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ⚖️ Pros & Cons for Digital Nomads
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>✅ Pros</h3>
            <ul className="space-y-1 text-sm">
              <li>✓ Perfect weather year-round (340 days sunshine)</li>
              <li>✓ Strong tech/startup scene</li>
              <li>✓ Great timezone for US clients (PST)</li>
              <li>✓ Excellent coworking spaces</li>
              <li>✓ Diverse, international community</li>
              <li>✓ Beach + mountains + desert nearby</li>
              <li>✓ World-class food scene</li>
              <li>✓ Fiber internet widely available</li>
              <li>✓ English-speaking (easy transition)</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl border-2 border-red-300 dark:border-red-700 ${redBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>❌ Cons</h3>
            <ul className="space-y-1 text-sm">
              <li>✗ Very expensive (top 5 US cities)</li>
              <li>✗ Car absolutely necessary</li>
              <li>✗ Traffic is terrible</li>
              <li>✗ Public transit limited</li>
              <li>✗ Homelessness visible in some areas</li>
              <li>✗ Can feel isolating/spread out</li>
              <li>✗ High taxes (CA state + federal)</li>
              <li>✗ Hard to meet people (car culture)</li>
              <li>✗ No true seasons</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-blue-500 ${
        isLight ? 'bg-blue-50' : 'bg-blue-900/20'
      }`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          💡 Practical Tips for First-Timers
        </h2>
        <ul className="space-y-2">
          <li>🚗 <strong>Get a car immediately:</strong> Public transit won't cut it. Rent or lease.</li>
          <li>🏠 <strong>Try before you commit:</strong> Airbnb for 1-2 months, then sign lease</li>
          <li>💳 <strong>US bank account:</strong> Open Chase/Bank of America for ease</li>
          <li>📱 <strong>Get US phone number:</strong> T-Mobile or AT&T for best coverage</li>
          <li>🌐 <strong>Join communities fast:</strong> LA is lonely without effort</li>
          <li>☀️ <strong>Sunscreen daily:</strong> Even winter sun is strong</li>
          <li>🏋️ <strong>Gym membership:</strong> Social + fitness (24 Hour Fitness)</li>
          <li>🎬 <strong>Embrace the culture:</strong> Film screenings, concerts, hiking</li>
        </ul>
      </section>

      {/* Related Links */}
      <section className={`p-6 rounded-2xl border-2 border-dashed ${
        isLight ? 'border-amber-300 bg-amber-50' : 'border-amber-500/50 bg-amber-900/20'
      }`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          📚 Related Guides
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href={`/${city.slug}/guide/remote-work/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>💻</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Remote Work in LA</span>
              <p className={`text-xs ${mutedColor}`}>Coworking & timezone overlap</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/business-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🏢</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Business Hours</span>
              <p className={`text-xs ${mutedColor}`}>When things are open</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
