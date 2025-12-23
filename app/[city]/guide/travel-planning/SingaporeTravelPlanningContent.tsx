'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props { city: City }

export default function SingaporeTravelPlanningContent({ city }: Props) {
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
          Singapore Travel Planning
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Flight times, Changi Airport, jet lag tips, and getting around
        </p>
      </header>
      
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-green-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>⚡ Quick Facts</h2>
        <p>
          Singapore Changi Airport (SIN) is consistently rated the world's best airport! 
          Flights from <strong>London: 13h</strong>, <strong>NYC: 19h</strong>, 
          <strong>Sydney: 8h</strong>. Visa-free for most nationalities (30-90 days). 
          Getting to city center: 30 mins by MRT, S$2.
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>✈️ Flight Times to Singapore</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>From</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Flight Time</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Time Difference</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Airlines</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr>
                <td className="px-4 py-3 font-medium">🇬🇧 London (LHR)</td>
                <td className="px-4 py-3">12-13 hours</td>
                <td className="px-4 py-3">+8 hours</td>
                <td className="px-4 py-3">Singapore Airlines, BA</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇺🇸 New York (JFK)</td>
                <td className="px-4 py-3">18-19 hours</td>
                <td className="px-4 py-3">+13 hours</td>
                <td className="px-4 py-3">Singapore Airlines (direct!)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇺🇸 Los Angeles (LAX)</td>
                <td className="px-4 py-3">17-18 hours</td>
                <td className="px-4 py-3">+16 hours</td>
                <td className="px-4 py-3">Singapore Airlines, United</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇦🇺 Sydney (SYD)</td>
                <td className="px-4 py-3">7-8 hours</td>
                <td className="px-4 py-3">-3 hours</td>
                <td className="px-4 py-3">Singapore Airlines, Qantas</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇯🇵 Tokyo (NRT/HND)</td>
                <td className="px-4 py-3">6-7 hours</td>
                <td className="px-4 py-3">-1 hour</td>
                <td className="px-4 py-3">Singapore Airlines, ANA, JAL</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇮🇳 Mumbai (BOM)</td>
                <td className="px-4 py-3">5-6 hours</td>
                <td className="px-4 py-3">+2.5 hours</td>
                <td className="px-4 py-3">Singapore Airlines, IndiGo</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🇦🇪 Dubai (DXB)</td>
                <td className="px-4 py-3">7-8 hours</td>
                <td className="px-4 py-3">+4 hours</td>
                <td className="px-4 py-3">Emirates, Singapore Airlines</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🇭🇰 Hong Kong (HKG)</td>
                <td className="px-4 py-3">3-4 hours</td>
                <td className="px-4 py-3">0 hours</td>
                <td className="px-4 py-3">Singapore Airlines, Cathay</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🏆 Changi Airport Guide</h2>
        
        <div className={`p-6 rounded-xl border-2 border-green-300 ${isLight ? 'bg-green-50' : 'bg-green-900/20'}`}>
          <p className="mb-4 font-semibold text-green-700">
            World's Best Airport for 12 consecutive years! 🌟
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Terminals</h3>
              <ul className="text-sm space-y-1">
                <li>• <strong>T1, T2, T3:</strong> Main terminals, connected by Skytrain</li>
                <li>• <strong>T4:</strong> Separate (budget airlines), shuttle bus</li>
                <li>• <strong>Jewel:</strong> Amazing indoor waterfall, shopping</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Amenities</h3>
              <ul className="text-sm space-y-1">
                <li>• Free WiFi everywhere</li>
                <li>• Free movie theaters</li>
                <li>• Butterfly garden, rooftop pool</li>
                <li>• 24-hour food courts</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-2 ${headingColor}`}>🌊 Jewel Changi</h3>
          <p className="text-sm">
            Don't miss the HSBC Rain Vortex - world's tallest indoor waterfall! Located between T1-T3. 
            Light & sound shows at 7:30 PM and 8:30 PM. Worth a visit even if just transiting.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>🚇 Getting to the City</h2>
        
        <div className={`overflow-x-auto rounded-xl border ${tableBorder}`}>
          <table className="w-full text-sm">
            <thead className={isLight ? 'bg-slate-100' : 'bg-slate-700'}>
              <tr>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Option</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Time</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Cost</th>
                <th className={`px-4 py-3 text-left ${headingColor}`}>Notes</th>
              </tr>
            </thead>
            <tbody className={`divide-y ${tableBorder}`}>
              <tr className={isLight ? 'bg-green-50' : 'bg-green-900/20'}>
                <td className="px-4 py-3 font-medium">🚇 MRT (Recommended)</td>
                <td className="px-4 py-3">27-35 mins</td>
                <td className="px-4 py-3">S$2-3</td>
                <td className="px-4 py-3">East-West line direct to CBD</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🚕 Taxi/Grab</td>
                <td className="px-4 py-3">20-30 mins</td>
                <td className="px-4 py-3">S$25-40</td>
                <td className="px-4 py-3">Metered or flat rate, +surcharges</td>
              </tr>
              <tr className={cardBg}>
                <td className="px-4 py-3 font-medium">🚌 Public Bus</td>
                <td className="px-4 py-3">60+ mins</td>
                <td className="px-4 py-3">S$2-3</td>
                <td className="px-4 py-3">Bus 36 to Orchard, cheapest</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">🚐 Private Transfer</td>
                <td className="px-4 py-3">20-30 mins</td>
                <td className="px-4 py-3">S$50-80</td>
                <td className="px-4 py-3">Book ahead, meet & greet</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className={`mt-4 p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-blue-900/20 border border-blue-700'}`}>
          <p className="text-sm">
            <strong>💡 Pro Tip:</strong> Get a Singapore Tourist Pass (S$22/day unlimited MRT & bus) 
            at the airport MRT station. Or just use contactless credit card to tap in/out.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>😴 Jet Lag Tips</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>From USA/Americas</h3>
            <ul className="text-sm space-y-1">
              <li>• Hardest adjustment (13-16 hours)</li>
              <li>• Take overnight flight, arrive morning</li>
              <li>• Stay awake until 9-10 PM local</li>
              <li>• Expect 4-5 days to fully adjust</li>
              <li>• Melatonin can help reset</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>From Europe</h3>
            <ul className="text-sm space-y-1">
              <li>• Moderate adjustment (7-8 hours)</li>
              <li>• Night flight arrives evening SGT</li>
              <li>• Sleep on plane, power through first day</li>
              <li>• Expect 2-3 days to adjust</li>
              <li>• Get morning sunlight</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>From Australia</h3>
            <ul className="text-sm space-y-1">
              <li>• Easy adjustment (2-3 hours)</li>
              <li>• Minimal jet lag</li>
              <li>• Can jump into activities immediately</li>
              <li>• Short flight, no recovery needed</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>General Tips</h3>
            <ul className="text-sm space-y-1">
              <li>• Stay hydrated on flight</li>
              <li>• Avoid alcohol first 24 hours</li>
              <li>• Singapore's heat will tire you - good for sleep!</li>
              <li>• AC everywhere - bring light jacket</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>📋 Entry Requirements</h2>
        
        <div className={`p-4 rounded-xl ${cardBg}`}>
          <div className="space-y-4">
            <div>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>Visa-Free Entry</h3>
              <p className="text-sm mb-2">Most nationalities get 30-90 days visa-free:</p>
              <ul className="text-sm space-y-1">
                <li>• 🇺🇸 🇬🇧 🇦🇺 🇪🇺 - 90 days</li>
                <li>• 🇮🇳 🇨🇳 - Visa required (e-Visa available)</li>
                <li>• Valid passport (6+ months validity)</li>
                <li>• Return/onward ticket may be requested</li>
              </ul>
            </div>
            
            <div className={`p-3 rounded-lg ${isLight ? 'bg-amber-50' : 'bg-amber-900/20'}`}>
              <h3 className={`font-semibold mb-2 ${headingColor}`}>🆕 SG Arrival Card</h3>
              <p className="text-sm">
                Submit online within 3 days before arrival at 
                <a href="https://eservices.ica.gov.sg/sgarrivalcard" className={linkColor}> ICA website</a>. 
                It's free and takes 5 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>💳 Money & SIM</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>💰 Money</h3>
            <ul className="text-sm space-y-1">
              <li>• Currency: Singapore Dollar (SGD/S$)</li>
              <li>• Cards accepted everywhere</li>
              <li>• Contactless payment universal</li>
              <li>• ATMs at airport, malls, MRT stations</li>
              <li>• Tipping NOT expected</li>
            </ul>
          </div>
          
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>📱 SIM Card</h3>
            <ul className="text-sm space-y-1">
              <li>• Buy at airport arrival hall</li>
              <li>• Singtel, Starhub, M1 available</li>
              <li>• Tourist SIM: S$15-30 (7-30 days)</li>
              <li>• Typically 100GB data</li>
              <li>• Passport required to activate</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>❓ Frequently Asked Questions</h2>
        
        <div className="space-y-3">
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>How early should I arrive at Changi?</h3>
            <p className="text-sm">
              2 hours for international flights is usually enough - immigration is 
              fast and efficient. But arrive earlier to enjoy Jewel!
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Is Changi Airport far from the city?</h3>
            <p className="text-sm">
              About 20km from the CBD. MRT takes 30 minutes, taxi 20-25 minutes. 
              It's very accessible compared to most international airports.
            </p>
          </div>
          
          <div className={`p-4 rounded-lg ${cardBg}`}>
            <h3 className={`font-medium mb-2 ${headingColor}`}>What should I NOT bring to Singapore?</h3>
            <p className="text-sm">
              Chewing gum (for personal use is fine, just don't import), drugs (severe penalties), 
              e-cigarettes/vapes (illegal), more than 1 carton of cigarettes.
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
          <Link href={`/${city.slug}/guide/24-hours/`} className={`flex items-center gap-2 p-3 rounded-lg ${isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'}`}>
            <span>🌆</span><span>24 Hours in Singapore</span>
          </Link>
        </div>
      </section>
      
      <p className={`mt-8 text-sm ${mutedColor}`}>Last updated: December 2024.</p>
    </div>
  )
}
