'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  city: City
}

export default function LosAngelesTwentyFourHoursContent({ city }: Props) {
  const { isLight } = useCityContext()
  
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'
  
  return (
    <div className={textColor}>
      {/* Header */}
      <header className="mb-8">
        <div className={`text-sm mb-2 ${mutedColor}`}>
          <Link href={`/${city.slug}/guide/`} className={linkColor}>← Back to Los Angeles Guide</Link>
        </div>
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          24-Hour Services in Los Angeles
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          LA's complete guide to all-night dining, gyms, pharmacies, and services
        </p>
      </header>

      {/* Quick Answer */}
      <section className={`mb-8 p-6 rounded-2xl border-l-4 border-amber-500 ${cardBg}`}>
        <h2 className={`text-lg font-semibold mb-2 ${headingColor}`}>
          ⚡ Quick Answer
        </h2>
        <p>
          Los Angeles has extensive <strong>24/7 services</strong> — from <strong>In-N-Out Burger</strong> and 
          <strong> 24 Hour Fitness</strong> locations to <strong>CVS/Walgreens pharmacies</strong>, all-night 
          grocery stores, and <strong>LAX airport</strong>. LA's entertainment industry and night-owl culture 
          means you'll find diners, coffee shops, and services open around the clock across the city.
        </p>
      </section>

      {/* Food & Dining */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🍔 24-Hour Food & Dining
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🍟 Fast Food</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>In-N-Out Burger:</strong> Multiple locations (Baldwin Park, Sunset Blvd)</li>
              <li><strong>Jack in the Box:</strong> Various locations</li>
              <li><strong>Del Taco:</strong> Several 24-hour spots</li>
              <li><strong>McDonald's:</strong> Select locations (check first)</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🥞 Diners & Restaurants</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Canter's Deli:</strong> Fairfax (LA institution since 1931)</li>
              <li><strong>Fred 62:</strong> Los Feliz (retro diner vibe)</li>
              <li><strong>The Original Pantry Cafe:</strong> Downtown (never closed since 1924)</li>
              <li><strong>Norm's:</strong> Multiple locations (classic LA diner)</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>☕ Coffee & Cafes</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Denny's:</strong> Multiple locations</li>
              <li><strong>IHOP:</strong> Select 24-hour locations</li>
              <li><strong>Taco Trucks:</strong> Various late-night spots (East LA, Koreatown)</li>
              <li><strong>Donut shops:</strong> Many open 24/7 (Randy's Donuts area)</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🌮 Late Night Eats</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Koreatown BBQ:</strong> Many open till 2-4 AM</li>
              <li><strong>Taco Zone:</strong> Echo Park (2 AM weekdays, 4 AM weekends)</li>
              <li><strong>Pink's Hot Dogs:</strong> Open till 2-3 AM</li>
              <li><strong>The Taco Truck:</strong> Various locations, late hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Fitness */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💪 24-Hour Gyms & Fitness
        </h2>
        
        <div className={`p-5 rounded-xl ${cardBg} mb-4`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Major 24-Hour Gym Chains</h3>
          <ul className="space-y-2">
            <li>
              <strong>24 Hour Fitness:</strong> 40+ locations across LA County<br/>
              <span className="text-sm">$30-50/mo • Full equipment • Childcare at some locations</span>
            </li>
            <li>
              <strong>LA Fitness:</strong> Many 24/7 locations<br/>
              <span className="text-sm">$35-45/mo • Basketball courts • Pools at select gyms</span>
            </li>
            <li>
              <strong>Crunch Fitness:</strong> Select 24-hour locations<br/>
              <span className="text-sm">$10-25/mo • Budget-friendly • Basic equipment</span>
            </li>
            <li>
              <strong>Anytime Fitness:</strong> Multiple LA locations<br/>
              <span className="text-sm">$40-50/mo • Smaller, neighborhood gyms • Key card access</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Pharmacies & Health */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          💊 24-Hour Pharmacies & Health Services
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Pharmacy Chains</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>CVS:</strong> 100+ locations, many 24-hour (check cvs.com)</li>
              <li><strong>Walgreens:</strong> Numerous 24-hour locations citywide</li>
              <li><strong>Rite Aid:</strong> Select 24-hour stores</li>
              <li><em>Note: Pharmacy counter may close at night, but store stays open</em></li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Emergency Care</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Cedars-Sinai ER:</strong> Beverly Hills (24/7 emergency)</li>
              <li><strong>UCLA Medical Center:</strong> Westwood (24/7 ER)</li>
              <li><strong>USC Medical Center:</strong> East LA (24/7 trauma center)</li>
              <li><strong>Urgent Care:</strong> Many open till midnight</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Groceries & Shopping */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🛒 24-Hour Grocery & Shopping
        </h2>
        
        <div className={`p-5 rounded-xl ${cardBg}`}>
          <h3 className={`font-semibold mb-3 ${headingColor}`}>Grocery Stores</h3>
          <ul className="space-y-2">
            <li>
              <strong>Ralphs:</strong> Select locations (West Hollywood, Sherman Oaks)<br/>
              <span className="text-sm">Full grocery • Pharmacy • Deli counter</span>
            </li>
            <li>
              <strong>Vons:</strong> Some 24-hour locations<br/>
              <span className="text-sm">Safeway brand • Good produce section</span>
            </li>
            <li>
              <strong>Smart & Final:</strong> A few 24/7 stores<br/>
              <span className="text-sm">Bulk items • Restaurant supplies</span>
            </li>
            <li>
              <strong>7-Eleven:</strong> Everywhere, most 24 hours<br/>
              <span className="text-sm">Convenience items • Snacks • Drinks</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Entertainment */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🎳 24-Hour Entertainment
        </h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Gaming & Activities</h3>
            <ul className="text-sm space-y-1">
              <li>• Cyberbowl (bowling/arcade)</li>
              <li>• Round1 (Puente Hills)</li>
              <li>• PC Bangs (Koreatown)</li>
              <li>• Pool halls (various)</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Nightlife</h3>
            <ul className="text-sm space-y-1">
              <li>• Hollywood clubs (till 2-4 AM)</li>
              <li>• Downtown bars</li>
              <li>• Koreatown karaoke</li>
              <li>• After-hours clubs</li>
            </ul>
          </div>

          <div className={`p-4 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-2 ${headingColor}`}>Late Night Cinema</h3>
            <ul className="text-sm space-y-1">
              <li>• ArcLight (midnight shows)</li>
              <li>• Nuart Theatre (cult films)</li>
              <li>• New Beverly Cinema</li>
              <li>• Drive-ins (seasonal)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          🚗 24-Hour Transportation & Services
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Getting Around</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>LAX Airport:</strong> Always open, 24/7 operations</li>
              <li><strong>Uber/Lyft:</strong> Available 24/7</li>
              <li><strong>Metro:</strong> Limited late night (last trains ~12:30 AM)</li>
              <li><strong>Taxis:</strong> Available but less common</li>
              <li><strong>Gas Stations:</strong> Many 24-hour (especially near highways)</li>
            </ul>
          </div>

          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>Auto Services</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>AAA Towing:</strong> 24/7 roadside assistance</li>
              <li><strong>Car Washes:</strong> Some locations (West LA, Hollywood)</li>
              <li><strong>Parking Garages:</strong> LAX, Union Station always open</li>
              <li><strong>EV Charging:</strong> Many stations accessible 24/7</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className={`mb-10 p-6 rounded-xl border-l-4 border-blue-500 ${
        isLight ? 'bg-blue-50' : 'bg-blue-900/20'
      }`}>
        <h2 className={`text-lg font-semibold mb-3 ${headingColor}`}>
          💡 Late Night Safety Tips
        </h2>
        <ul className="space-y-2">
          <li>🚗 <strong>Drive, don't walk:</strong> LA isn't a walking city, especially late night</li>
          <li>🅿️ <strong>Park in well-lit areas:</strong> Valet or attended lots when possible</li>
          <li>📱 <strong>Share your location:</strong> Use Uber/Lyft tracking features</li>
          <li>👥 <strong>Stay in groups:</strong> Especially in Hollywood/DTLA late night</li>
          <li>💳 <strong>Use cards, not cash:</strong> Safer for late-night transactions</li>
          <li>⏰ <strong>Know closing times:</strong> Some "24-hour" places have changed post-COVID</li>
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
            href={`/${city.slug}/guide/business-hours/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>🏢</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Business Hours</span>
              <p className={`text-xs ${mutedColor}`}>Normal operating hours</p>
            </div>
          </Link>
          <Link
            href={`/${city.slug}/guide/digital-nomad/`}
            className={`flex items-center gap-2 p-3 rounded-lg ${
              isLight ? 'bg-white hover:bg-slate-50' : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span>💻</span>
            <div>
              <span className={`font-medium ${headingColor}`}>Digital Nomad</span>
              <p className={`text-xs ${mutedColor}`}>Living & working in LA</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}
