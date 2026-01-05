'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

// FAQ Data for both display and schema
const FAQ_DATA = [
  {
    question: "Is Istanbul in Europe or Asia time zone?",
    answer: "Istanbul uses Turkey Time (TRT, UTC+3), which is technically closer to Eastern European time zones. The city physically spans both continents, with the Bosphorus dividing European and Asian districts, but the entire city uses the same time zone."
  },
  {
    question: "Does Turkey change clocks for daylight saving?",
    answer: "No. Since 2016, Turkey has maintained UTC+3 year-round. This means the time difference with European countries changes when they switch to/from summer time, even though Turkey's clocks don't move."
  },
  {
    question: "What's the best time to call Istanbul from the US?",
    answer: "For US East Coast: 8-10 AM EST catches Istanbul's late afternoon (4-6 PM). For US West Coast: 6-8 AM PST works well. Avoid calling before 9 AM Istanbul time — Turkish business culture tends to start a bit later than Northern Europe."
  },
  {
    question: "What are typical business hours in Istanbul?",
    answer: "Most businesses operate 9 AM - 6 PM, Monday through Friday. However, the Grand Bazaar and many shops close on Sundays. Restaurants typically serve lunch 12-3 PM and dinner 7-11 PM. Banks usually close at 5 PM."
  }
]

export default function IstanbulOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'

  // Generate FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className={textColor}>
      {/* FAQ Schema JSON-LD for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          Istanbul Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the city where East meets West
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Istanbul Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Whether you're scheduling a meeting with Turkish colleagues, planning a trip to the 
          historic Grand Bazaar, or timing a call to catch the Borsa Istanbul opening, understanding 
          Istanbul's time zone is essential for seamless coordination.
        </p>
        <p>
          Istanbul operates on <strong>Turkey Time (TRT)</strong>, which is UTC+3 year-round. 
          Since 2016, Turkey has maintained permanent summer time, eliminating the twice-yearly 
          clock changes that can complicate international scheduling.
        </p>
        <p>
          As the only major city straddling two continents, Istanbul serves as a natural bridge 
          between European and Asian business hours, making it a strategic hub for international 
          commerce.
        </p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: Istanbul Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Time Zone:</strong> TRT (UTC+3)</li>
              <li>• <strong>Daylight Saving:</strong> Not observed (since 2016)</li>
              <li>• <strong>Weekend:</strong> Saturday-Sunday</li>
              <li>• <strong>Same as:</strong> <Link href="/moscow/" className={linkColor}>Moscow</Link>, Riyadh, Nairobi</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong><Link href="/new-york/" className={linkColor}>New York</Link>:</strong> +8 hours (winter) / +7 (summer)</li>
              <li>• <strong><Link href="/london/" className={linkColor}>London</Link>:</strong> +3 hours (winter) / +2 (summer)</li>
              <li>• <strong><Link href="/dubai/" className={linkColor}>Dubai</Link>:</strong> -1 hour</li>
              <li>• <strong><Link href="/tokyo/" className={linkColor}>Tokyo</Link>:</strong> -6 hours</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>
          Need exact conversions? Try our{' '}
          <Link href="/time/" className={linkColor}>Time Converter</Link>
        </p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Explore the Complete Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {config.clusters.map(cluster => (
            <Link
              key={cluster.slug}
              href={`/${city.slug}/guide/${cluster.slug}/`}
              className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                isLight 
                  ? 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-md' 
                  : 'bg-slate-700/30 border-slate-600 hover:border-amber-500/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{cluster.icon}</span>
                <div>
                  <h3 className={`font-semibold ${headingColor}`}>{cluster.title}</h3>
                  <p className={`text-sm mt-1 ${mutedColor}`}>{cluster.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="mb-10 space-y-4">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Understanding Istanbul Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          TRT vs Europe: The Permanent Summer Time Decision
        </h3>
        <p>
          In 2016, Turkey made a significant decision: instead of switching back to winter time, 
          the country stayed on permanent "summer time" (UTC+3). This means Istanbul is now 
          always 3 hours ahead of <Link href="/london/" className={linkColor}>London</Link> in winter, but only 2 hours ahead in summer when the 
          UK observes BST.
        </p>
        <p>
          For business travelers, this creates a variable gap with Western Europe. When scheduling 
          meetings, always verify the current offset — it changes with European DST while Turkey 
          stays fixed.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          The Bridge Between Continents
        </h3>
        <p>
          Istanbul's unique position spanning Europe and Asia isn't just geographical — it's 
          temporal too. A 9 AM meeting in Istanbul catches late night in <Link href="/new-york/" className={linkColor}>New York</Link> (1 AM), 
          morning in <Link href="/london/" className={linkColor}>London</Link> (6 AM in winter), and mid-afternoon in <Link href="/singapore/" className={linkColor}>Singapore</Link> (2 PM). This makes 
          Istanbul ideal for businesses coordinating across multiple time zones.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Istanbul Morning (9 AM TRT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 1 AM (winter) / 2 AM (summer)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 6 AM (winter) / 7 AM (summer)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 10 AM</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 2 PM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Istanbul Evening (6 PM TRT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 10 AM (winter) / 11 AM (summer)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 3 PM (winter) / 4 PM (summer)</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 7 PM</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 11 PM</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          When Istanbul Changes Time (It Doesn't!)
        </h3>
        <p>
          Unlike most of Europe, Turkey no longer observes daylight saving time. This 
          simplifies scheduling with Middle Eastern and Asian partners (who also don't 
          change clocks) but requires attention when working with European and American 
          colleagues whose time difference with Istanbul shifts twice a year.
        </p>
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Winter (Nov-Mar)</h4>
              <p className="mt-1">London/Istanbul: 3 hours difference</p>
              <p>New York/Istanbul: 8 hours difference</p>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Summer (Mar-Oct)</h4>
              <p className="mt-1">London/Istanbul: 2 hours difference</p>
              <p>New York/Istanbul: 7 hours difference</p>
            </div>
          </div>
          <p className={`mt-3 text-xs ${mutedColor}`}>
            Pro tip: During the weeks when the US and UK change clocks on different dates, the time difference shifts temporarily. 
            Always double-check during late March and early November.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          Istanbul Time vs Major Cities
        </h2>
        <div className={`overflow-x-auto rounded-xl ${cardBg}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>When it's 12 PM in Istanbul</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="px-4 py-3">🇺🇸 <Link href="/time/istanbul/new-york/" className={linkColor}>New York</Link></td>
                <td className="px-4 py-3">-8 hours*</td>
                <td className="px-4 py-3">4:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇺🇸 <Link href="/time/istanbul/los-angeles/" className={linkColor}>Los Angeles</Link></td>
                <td className="px-4 py-3">-11 hours*</td>
                <td className="px-4 py-3">1:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇬🇧 <Link href="/time/istanbul/london/" className={linkColor}>London</Link></td>
                <td className="px-4 py-3">-3 hours*</td>
                <td className="px-4 py-3">9:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇫🇷 <Link href="/time/istanbul/paris/" className={linkColor}>Paris</Link></td>
                <td className="px-4 py-3">-2 hours*</td>
                <td className="px-4 py-3">10:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇦🇪 <Link href="/time/istanbul/dubai/" className={linkColor}>Dubai</Link></td>
                <td className="px-4 py-3">+1 hour</td>
                <td className="px-4 py-3">1:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇮🇳 <Link href="/time/istanbul/mumbai/" className={linkColor}>Mumbai</Link></td>
                <td className="px-4 py-3">+2.5 hours</td>
                <td className="px-4 py-3">2:30 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇸🇬 <Link href="/time/istanbul/singapore/" className={linkColor}>Singapore</Link></td>
                <td className="px-4 py-3">+5 hours</td>
                <td className="px-4 py-3">5:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇯🇵 <Link href="/time/istanbul/tokyo/" className={linkColor}>Tokyo</Link></td>
                <td className="px-4 py-3">+6 hours</td>
                <td className="px-4 py-3">6:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇦🇺 <Link href="/time/istanbul/sydney/" className={linkColor}>Sydney</Link></td>
                <td className="px-4 py-3">+8 hours*</td>
                <td className="px-4 py-3">8:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Times shown are approximate and may vary during daylight saving transitions.{' '}
          <Link href={`/time/istanbul/london/`} className={linkColor}>See detailed time differences →</Link>
        </p>
      </section>
      
      {/* Dynamic CTA - Meeting Planner */}
      <section className={`mb-10 p-6 rounded-2xl text-center ${
        isLight 
          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200' 
          : 'bg-gradient-to-r from-blue-900/30 to-cyan-900/30 border border-blue-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting across time zones?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for everyone in Istanbul and beyond.
        </p>
        <Link 
          href="/meeting/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg"
        >
          <span>🚀</span>
          <span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Practical Tips for Dealing with Istanbul Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            Istanbul's position is ideal for bridging time zones. A 2 PM meeting in Istanbul 
            catches 11 AM in <Link href="/london/" className={linkColor}>London</Link> (winter), early morning (7 AM) in <Link href="/new-york/" className={linkColor}>New York</Link>, and early 
            evening (7 PM) in <Link href="/singapore/" className={linkColor}>Singapore</Link> — one of the best times for a truly global call.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from Western Europe? You'll land 2-3 hours "later" than departure suggests. 
            From the US East Coast, add 7-8 hours to your body clock. Istanbul's vibrant nightlife 
            and late dinner culture (restaurants fill up after 8 PM) can actually help with jet lag 
            adjustment. Check our <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for personalized tips.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            Istanbul offers excellent overlap with European business hours (near-perfect with 
            Central Europe), reasonable morning overlap with the US East Coast, and afternoon 
            overlap with India and Southeast Asia. The city's growing digital nomad scene benefits 
            from fast internet and affordable cost of living.
          </p>
        </div>
      </section>
      
      {/* FAQ Section with Schema Markup */}
      <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl ${cardBg}`}
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <h3 className={`font-medium mb-2 ${headingColor}`} itemProp="name">
                {faq.question}
              </h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-sm" itemProp="text">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700/30'}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          Ready to Dive Deeper?
        </h2>
        <p className={`mb-4 ${mutedColor}`}>
          This overview is just the start. Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link 
            href={`/${city.slug}/guide/time-business/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🏢 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            📈 Borsa Istanbul
          </Link>
          <Link 
            href={`/${city.slug}/guide/best-time-to-call/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/public-holidays/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' 
                : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'
            }`}
          >
            🇹🇷 Turkish Holidays
          </Link>
        </div>
      </section>
      
      {/* E-E-A-T Footer with Last Updated & Trust Signal */}
      <footer className={`text-sm ${mutedColor} border-t ${isLight ? 'border-slate-200' : 'border-slate-700'} pt-6`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>
            <strong>Last updated:</strong> January 2025
          </p>
          <p className="flex items-center gap-1">
            <span>✓</span>
            <span>Data verified by WhatTime.city Editorial Team</span>
          </p>
        </div>
        <p className={`mt-2 text-xs ${mutedColor}`}>
          Time zone data sourced from IANA Time Zone Database. This guide is regularly reviewed and updated to ensure accuracy.
        </p>
      </footer>
    </div>
  )
}
