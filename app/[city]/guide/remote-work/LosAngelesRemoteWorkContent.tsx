'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesRemoteWorkContent({ city }: Props) {
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
          Remote Work from Los Angeles
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Silicon Beach tech culture, coworking spaces, and timezone overlap strategies
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Los Angeles is <strong>excellent for remote work</strong>, especially in tech. You get 3 hours of overlap 
          with East Coast (9 AM-12 PM PST = 12-3 PM EST), reasonable overlap with Europe (early mornings), and 
          access to world-class coworking spaces in Silicon Beach (Santa Monica, Venice, Playa Vista). 
          The challenge? Asia-Pacific calls require late evenings.
        </p>
      </section>

      {/* Introduction */}
      <section className="mb-10 space-y-4">
        <p>
          Los Angeles has transformed into a major remote work hub, driven by its booming tech scene 
          (Snap, SpaceX, TikTok), entertainment industry flexibility, and year-round perfect weather. 
          The city's "Silicon Beach" nickname reflects its startup density along the coast from Santa 
          Monica to El Segundo.
        </p>
        <p>
          Working remotely from LA means navigating Pacific Time's pros and cons: you're one of the last 
          major business hubs to wake up, which can be frustrating for East Coast colleagues but provides 
          quiet morning focus time. The city's cafe culture, abundant coworking spaces, and outdoor work-friendly 
          climate make it ideal for digital workers.
        </p>
      </section>

      {/* Timezone Overlap Analysis */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🌍 Working with Different Time Zones
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* East Coast */}
          <div className={`p-5 rounded-xl border-2 border-green-300 dark:border-green-700 ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🗽 East Coast (NYC, Boston, Miami)</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Time Difference:</strong> -3 hours (9 AM LA = 12 PM NYC)</li>
              <li><strong>Overlap:</strong> 9 AM - 6 PM PST = 12-9 PM EST (excellent!)</li>
              <li><strong>Best Practice:</strong> Start 9 AM sharp for full day overlap</li>
              <li><strong>Challenge:</strong> NYC colleagues finish at 3 PM your time</li>
              <li><strong>Solution:</strong> Schedule key meetings 9 AM-12 PM PST</li>
            </ul>
            <p className="mt-3 text-sm font-medium text-green-700 dark:text-green-400">
              ✅ EXCELLENT - Easy to sync, full work day overlap
            </p>
          </div>

          {/* Europe */}
          <div className={`p-5 rounded-xl border-2 border-amber-300 dark:border-amber-700 ${amberBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇪🇺 Europe (London, Paris, Berlin)</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Time Difference:</strong> -8/9 hours (9 AM LA = 5/6 PM London)</li>
              <li><strong>Overlap:</strong> 8 AM-12 PM PST = 4-8 PM GMT (limited)</li>
              <li><strong>Best Practice:</strong> Early LA mornings = EU afternoons</li>
              <li><strong>Challenge:</strong> Europe done by noon PST</li>
              <li><strong>Solution:</strong> Async communication + 8-9 AM calls</li>
            </ul>
            <p className="mt-3 text-sm font-medium text-amber-700 dark:text-amber-400">
              ⚠️ MODERATE - Requires early starts or async workflows
            </p>
          </div>

          {/* Asia */}
          <div className={`p-5 rounded-xl border-2 border-red-300 dark:border-red-700 ${redBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌏 Asia (Tokyo, Singapore, Sydney)</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Time Difference:</strong> -15/16/17 hours (huge gap!)</li>
              <li><strong>Overlap:</strong> Minimal (4-8 PM PST = morning Asia next day)</li>
              <li><strong>Best Practice:</strong> Evening calls or very early mornings</li>
              <li><strong>Challenge:</strong> Nearly opposite schedules</li>
              <li><strong>Solution:</strong> Heavy async + rotating call times</li>
            </ul>
            <p className="mt-3 text-sm font-medium text-red-700 dark:text-red-400">
              ❌ DIFFICULT - Major overlap challenges, async essential
            </p>
          </div>

          {/* Domestic */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇺🇸 Domestic (Central, Mountain Time)</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Central (Chicago):</strong> -2 hours (9 AM LA = 11 AM Chicago)</li>
              <li><strong>Mountain (Denver):</strong> -1 hour (9 AM LA = 10 AM Denver)</li>
              <li><strong>Overlap:</strong> Nearly perfect all day</li>
              <li><strong>Best Practice:</strong> Normal 9-5 schedule works great</li>
              <li><strong>Advantage:</strong> Natural sync, no adjustment needed</li>
            </ul>
            <p className="mt-3 text-sm font-medium text-green-700 dark:text-green-400">
              ✅ PERFECT - Minimal timezone friction
            </p>
          </div>
        </div>
      </section>

      {/* Recommended Schedules */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ⏰ Recommended Work Schedules
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Team Location</th>
                <th className="text-left p-3 font-medium">Your LA Schedule</th>
                <th className="text-left p-3 font-medium">Overlap Quality</th>
                <th className="text-left p-3 font-medium">Tips</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className={greenBg}>
                <td className="p-3 font-medium">East Coast Team</td>
                <td className="p-3">9:00 AM - 6:00 PM PST</td>
                <td className="p-3">Excellent (9 hours)</td>
                <td className="p-3">Standard schedule works perfectly</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Europe Team</td>
                <td className="p-3">7:00 AM - 3:00 PM PST</td>
                <td className="p-3">Good (4-5 hours)</td>
                <td className="p-3">Early start catches EU afternoons</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Asia Team</td>
                <td className="p-3">Flexible + evening calls</td>
                <td className="p-3">Limited</td>
                <td className="p-3">Async-first, 4-7 PM calls work</td>
              </tr>
              <tr className={greenBg}>
                <td className="p-3 font-medium">Global Team</td>
                <td className="p-3">8:00 AM - 5:00 PM PST</td>
                <td className="p-3">Balanced</td>
                <td className="p-3">Early for EU, normal for US, async for Asia</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">West Coast Only</td>
                <td className="p-3">10:00 AM - 6:00 PM PST</td>
                <td className="p-3">Perfect</td>
                <td className="p-3">Flex schedule, avoid traffic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Coworking Spaces */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏢 Best Coworking Spaces in LA
        </h2>
        
        <p className="mb-4">
          LA's coworking scene is concentrated in Silicon Beach (Santa Monica, Venice, Playa Vista) and Downtown LA.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Premium */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💎 Premium Spaces</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Cross Campus (Santa Monica)</strong><br/>
                <span className={mutedColor}>$400-600/mo • Tech-focused • Great community</span>
              </li>
              <li>
                <strong>WeWork (Multiple locations)</strong><br/>
                <span className={mutedColor}>$350-550/mo • Professional • Global access</span>
              </li>
              <li>
                <strong>The Riveter (DTLA)</strong><br/>
                <span className={mutedColor}>$300-500/mo • Women-focused • Modern</span>
              </li>
              <li>
                <strong>NeueHouse (Hollywood)</strong><br/>
                <span className={mutedColor}>$500-800/mo • Creative industry • Ultra-premium</span>
              </li>
            </ul>
          </div>

          {/* Budget-Friendly */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💰 Budget-Friendly Options</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <strong>The Hatchery (Playa Vista)</strong><br/>
                <span className={mutedColor}>$250-400/mo • Startup vibe • Tech community</span>
              </li>
              <li>
                <strong>Impact Hub LA (DTLA)</strong><br/>
                <span className={mutedColor}>$200-350/mo • Social impact focus • Affordable</span>
              </li>
              <li>
                <strong>MakeOffices (DTLA)</strong><br/>
                <span className={mutedColor}>$300-450/mo • Flexible plans • Good amenities</span>
              </li>
              <li>
                <strong>Library memberships + Day passes</strong><br/>
                <span className={mutedColor}>$20-40/day • Various locations • Try before committing</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best Cafes */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ☕ Best Cafes for Remote Work
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🌴 Santa Monica</h3>
            <ul className="space-y-1 text-sm">
              <li>• Blue Bottle Coffee (3rd St)</li>
              <li>• Urth Caffé (Main St)</li>
              <li>• Copa Vida</li>
              <li>• Philz Coffee</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🎨 Venice/Abbot Kinney</h3>
            <ul className="space-y-1 text-sm">
              <li>• Intelligentsia Coffee</li>
              <li>• The Butcher's Daughter</li>
              <li>• Menotti's Coffee Stop</li>
              <li>• Groundwork Coffee</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🏙️ Downtown LA</h3>
            <ul className="space-y-1 text-sm">
              <li>• Verve Coffee Roasters</li>
              <li>• Blue Bottle (Arts District)</li>
              <li>• G&B Coffee</li>
              <li>• Stumptown Coffee</li>
            </ul>
          </div>
        </div>
        
        <p className="mt-4 text-sm italic">
          <strong>Pro tip:</strong> Most cafes expect you to buy something every 2-3 hours. WiFi is usually free. 
          Power outlets can be limited during peak hours (9-11 AM).
        </p>
      </section>

      {/* Internet & Infrastructure */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📡 Internet & Infrastructure
        </h2>
        
        <div className={`p-5 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Residential Internet Options</h3>
          <ul className="space-y-2">
            <li><strong>Spectrum:</strong> 300-1000 Mbps, $50-90/mo, widely available</li>
            <li><strong>AT&T Fiber:</strong> 300-5000 Mbps, $55-180/mo, best for uploads</li>
            <li><strong>Google Fiber:</strong> 1-2 Gbps, $70-100/mo, limited availability (West LA)</li>
            <li><strong>Starry Internet:</strong> 200-500 Mbps, $50-80/mo, newer option (apartments)</li>
          </ul>
          <p className="mt-4 text-sm">
            <strong>Recommendation:</strong> AT&T Fiber if available (symmetrical speeds), otherwise Spectrum. 
            Most apartments in Santa Monica/Venice have fiber options.
          </p>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💵 Monthly Cost Breakdown for Remote Workers
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Expense</th>
                <th className="text-left p-3 font-medium">Budget</th>
                <th className="text-left p-3 font-medium">Mid-Range</th>
                <th className="text-left p-3 font-medium">Premium</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 font-medium">Rent (1BR)</td>
                <td className="p-3">$1,800-2,200</td>
                <td className="p-3">$2,500-3,500</td>
                <td className="p-3">$4,000-6,000+</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Coworking</td>
                <td className="p-3">$200-300</td>
                <td className="p-3">$400-500</td>
                <td className="p-3">$600-800</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Internet</td>
                <td className="p-3">$50-70</td>
                <td className="p-3">$70-90</td>
                <td className="p-3">$100-150</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Food</td>
                <td className="p-3">$400-600</td>
                <td className="p-3">$800-1,200</td>
                <td className="p-3">$1,500-2,000</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Transportation</td>
                <td className="p-3">$150-250</td>
                <td className="p-3">$300-400</td>
                <td className="p-3">$500-700</td>
              </tr>
              <tr className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
                <td className="p-3 font-bold">TOTAL</td>
                <td className="p-3 font-bold">$2,600-3,400</td>
                <td className="p-3 font-bold">$4,100-5,700</td>
                <td className="p-3 font-bold">$6,700-9,650</td>
              </tr>
            </tbody>
          </table>
        </div>
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
            href={`/${city.slug}/guide/business-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🏢</span>
            <div>
              <span className={`font-medium ${headingColor}`}>LA Business Hours</span>
              <p className={`text-xs ${mutedColor}`}>Tech startup schedules</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/time-difference/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🌍</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Time Difference</span>
              <p className={`text-xs ${mutedColor}`}>Calculate overlap hours</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
