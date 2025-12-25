'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesTravelPlanningContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'text-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  const tableBorder = isLight ? 'border-slate-200' : 'border-slate-600'
  const greenBg = isLight ? 'bg-green-50' : 'bg-green-900/20'
  const blueBg = isLight ? 'bg-blue-50' : 'bg-blue-900/20'
  const amberBg = isLight ? 'bg-amber-50' : 'bg-amber-900/20'
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Travel Planning for Los Angeles
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          LAX arrival tips, jet lag strategies, and timezone adjustments for your LA trip
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Arrive at <strong>LAX 3 hours before international flights, 2 hours domestic</strong>. 
          For jet lag: <strong>from Asia, arrive afternoon and stay up till 9 PM</strong>; from Europe, 
          take morning flights and stay active. Best arrival window is <strong>10 AM-2 PM</strong> to 
          avoid rush hour traffic (7-10 AM, 4-7 PM). Book hotels near your activities — LA sprawl makes 
          location critical.
        </p>
      </section>

      {/* LAX Arrival Guide */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          ✈️ LAX Airport Guide
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className={`p-5 rounded-xl ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>✅ Best Arrival Times</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>10:00 AM - 2:00 PM:</strong> Avoid morning rush, easier traffic</li>
              <li><strong>After 8:00 PM:</strong> Light traffic, quick hotel check-in</li>
              <li><strong>Early morning (6-7 AM):</strong> Pre-rush, fresh start</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${
            isLight ? 'bg-red-50' : 'bg-red-900/20'
          }`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>❌ Worst Arrival Times</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>4:00-7:00 PM:</strong> Peak rush hour nightmare</li>
              <li><strong>7:30-9:30 AM:</strong> Morning commute chaos</li>
              <li><strong>Friday 3:00-8:00 PM:</strong> Weekend exodus begins</li>
            </ul>
          </div>
        </div>

        <div className={`p-5 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Getting From LAX</h3>
          <ul className="space-y-2">
            <li>
              <strong>Uber/Lyft:</strong> $30-60 to Santa Monica, $50-80 to Hollywood<br/>
              <span className="text-sm">Pickup at designated LAX-it lot (shuttle from terminals)</span>
            </li>
            <li>
              <strong>Rental Car:</strong> $40-80/day + gas<br/>
              <span className="text-sm">Essential if staying more than 3 days. Shuttle to off-site lots.</span>
            </li>
            <li>
              <strong>FlyAway Bus:</strong> $10 to Union Station (downtown)<br/>
              <span className="text-sm">Budget option, runs every 30 min, connects to Metro</span>
            </li>
            <li>
              <strong>Taxi:</strong> $50-90 (metered)<br/>
              <span className="text-sm">Slower than rideshare, pickup outside terminals</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Jet Lag Strategies */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          😴 Jet Lag Strategies by Origin
        </h2>
        
        <div className="space-y-4">
          <div className={`p-5 rounded-xl ${greenBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌏 From Asia (Tokyo, Singapore, Sydney)</h3>
            <p className="text-sm mb-3">
              <strong>Challenge:</strong> Massive time difference (15-19 hours ahead)<br/>
              <strong>Flight duration:</strong> 11-15 hours
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Strategy:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Book afternoon arrival flights (land 2-4 PM PST)</li>
                <li>• Sleep on plane (your nighttime = their morning)</li>
                <li>• Upon arrival: Stay active till 9-10 PM PST</li>
                <li>• Get sunlight immediately (helps reset circadian rhythm)</li>
                <li>• Day 1: Light activities, avoid naps</li>
                <li>• Day 2-3: Usually adjusted</li>
              </ul>
            </div>
          </div>

          <div className={`p-5 rounded-xl ${amberBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇪🇺 From Europe (London, Paris)</h3>
            <p className="text-sm mb-3">
              <strong>Challenge:</strong> 8-9 hours ahead<br/>
              <strong>Flight duration:</strong> 10-11 hours
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Strategy:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Take morning flights (arrive LA early afternoon)</li>
                <li>• Try to sleep first half of flight</li>
                <li>• Upon arrival: Force yourself to stay up till 9 PM</li>
                <li>• Exercise or walk to fight drowsiness</li>
                <li>• Avoid caffeine after 2 PM</li>
                <li>• Recovery: 2-4 days typically</li>
              </ul>
            </div>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🇺🇸 From US East Coast</h3>
            <p className="text-sm mb-3">
              <strong>Challenge:</strong> Minimal (3 hours behind)<br/>
              <strong>Flight duration:</strong> 5-6 hours
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Strategy:</strong></p>
              <ul className="space-y-1 ml-4">
                <li>• Red-eye flights work great (sleep on plane)</li>
                <li>• Arrive morning, start your day normally</li>
                <li>• Adjustment: 1-2 days max</li>
                <li>• Going back East is harder (lose sleep)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timing Activities */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          📅 When to Schedule Activities
        </h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className="text-left p-3 font-medium">Activity</th>
                <th className="text-left p-3 font-medium">Best Time</th>
                <th className="text-left p-3 font-medium">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 font-medium">Beach Day</td>
                <td className="p-3">10 AM - 4 PM</td>
                <td className="p-3">Best weather, warmest water</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Hollywood Sign Hike</td>
                <td className="p-3">Sunrise (6-7 AM)</td>
                <td className="p-3">Cool, less crowded, golden light</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Theme Parks</td>
                <td className="p-3">Arrive at opening</td>
                <td className="p-3">Beat crowds, cooler morning temps</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Rodeo Drive Shopping</td>
                <td className="p-3">10 AM - 2 PM</td>
                <td className="p-3">Stores open, before tourist rush</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Downtown Arts District</td>
                <td className="p-3">10 AM - 3 PM</td>
                <td className="p-3">Galleries open, safer in daylight</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Sunset Watching</td>
                <td className="p-3">6:00-7:30 PM (summer)</td>
                <td className="p-3">Griffith Observatory or beach</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Traffic Planning */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-red-500 ${
        isLight ? 'bg-red-50' : 'bg-red-900/20'
      }`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          🚗 Critical: Traffic Planning
        </h2>
        <div className="space-y-3">
          <p>
            <strong>LA traffic can ruin your trip if you don't plan around it.</strong> A 10-mile drive 
            can take 15 minutes or 90 minutes depending on timing.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium mb-2">Avoid Driving:</p>
              <ul className="text-sm space-y-1">
                <li>• 7:00-10:00 AM (morning rush)</li>
                <li>• 4:00-7:00 PM (evening rush)</li>
                <li>• Fridays 3:00-8:00 PM (worst)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Best Driving Times:</p>
              <ul className="text-sm space-y-1">
                <li>• Before 7:00 AM</li>
                <li>• 10:00 AM - 3:00 PM</li>
                <li>• After 8:00 PM</li>
                <li>• Weekends (better but still busy)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Packing Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎒 What to Pack for LA
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl ${greenBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>✅ Must Haves</h3>
            <ul className="text-sm space-y-1">
              <li>• Sunscreen (SPF 50+)</li>
              <li>• Sunglasses</li>
              <li>• Light layers</li>
              <li>• Comfortable walking shoes</li>
              <li>• Reusable water bottle</li>
              <li>• Light jacket (evenings cool)</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>🌡️ By Season</h3>
            <ul className="text-sm space-y-1">
              <li><strong>Summer:</strong> Swimsuit, hat</li>
              <li><strong>Winter:</strong> Light rain jacket</li>
              <li><strong>Year-round:</strong> Layers essential</li>
              <li><em>Never heavy winter coat</em></li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>📱 Tech</h3>
            <ul className="text-sm space-y-1">
              <li>• Phone charger/power bank</li>
              <li>• Car charger</li>
              <li>• Google Maps (offline maps)</li>
              <li>• Uber/Lyft apps</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Hotel Location Guide */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🏨 Where to Stay (By Priority)
        </h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>Beach Vacation</h3>
              <span className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">Stay: Santa Monica</span>
            </div>
            <p className="text-sm">Walkable pier, bike path, easy beach access. Can Uber to other areas.</p>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>Tourist Attractions</h3>
              <span className="text-sm px-2 py-1 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400">Stay: Hollywood</span>
            </div>
            <p className="text-sm">Central to Walk of Fame, Griffith Observatory, studios. Tourist-heavy.</p>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>Business Trip</h3>
              <span className="text-sm px-2 py-1 rounded bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">Stay: Century City/Beverly Hills</span>
            </div>
            <p className="text-sm">Near offices, upscale, good restaurants. Expensive but convenient.</p>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className={`font-semibold ${headingColor}`}>Budget/Hip Vibe</h3>
              <span className="text-sm px-2 py-1 rounded bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">Stay: Silver Lake/Echo Park</span>
            </div>
            <p className="text-sm">Cool cafes, cheaper hotels, local vibe. Requires car for most attractions.</p>
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-blue-500 ${blueBg}`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          💡 Insider Travel Tips
        </h2>
        <ul className="space-y-2">
          <li>🚗 <strong>Rent a car:</strong> Public transit won't work for most itineraries</li>
          <li>🎫 <strong>Theme parks:</strong> Buy tickets online, arrive at opening time</li>
          <li>🌅 <strong>Sunset timing:</strong> 5 PM winter, 8 PM summer (plan viewpoints)</li>
          <li>🍽️ <strong>Reservations:</strong> Book popular restaurants 2-4 weeks ahead</li>
          <li>📱 <strong>Download apps:</strong> SpotHero (parking), Waze (traffic), AllTrails (hiking)</li>
          <li>💵 <strong>Budget extra:</strong> Everything costs 20-30% more than you expect</li>
          <li>🏖️ <strong>Beach parking:</strong> $15-25/day, arrive before 10 AM for spots</li>
          <li>☀️ <strong>Hydrate constantly:</strong> Dry climate, you'll dehydrate faster</li>
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
            href={`/${city.slug}/guide/best-time-to-visit/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🌴</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Best Time to Visit</span>
              <p className={`text-xs ${mutedColor}`}>Seasonal planning</p>
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
              <p className={`text-xs ${mutedColor}`}>PST calculations</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
