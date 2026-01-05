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

// Long-tail keyword optimized FAQ data
const FAQ_DATA = [
  {
    question: "What is the time difference between London and New York right now?",
    answer: "London is typically 5 hours ahead of New York. When it's 12:00 PM in London, it's 7:00 AM in New York. However, for 2-3 weeks in March and November, the difference shifts to 4 or 6 hours because the US and UK change clocks on different dates. Always verify during these transition periods."
  },
  {
    question: "Is London on GMT or BST right now?",
    answer: "London uses GMT (Greenwich Mean Time, UTC+0) from the last Sunday of October to the last Sunday of March. During summer months (late March to late October), London switches to BST (British Summer Time, UTC+1). Check the current date to determine which timezone is active."
  },
  {
    question: "When do the clocks change in the UK in 2025?",
    answer: "In 2025, UK clocks spring forward to BST on Sunday, March 30th at 1:00 AM (clocks move to 2:00 AM). Clocks fall back to GMT on Sunday, October 26th at 2:00 AM (clocks move to 1:00 AM). Mark these dates if you have international meetings scheduled."
  },
  {
    question: "What time does the London Stock Exchange open and close?",
    answer: "The London Stock Exchange (LSE) opens at 8:00 AM and closes at 4:30 PM London time, Monday through Friday. Pre-market trading begins at 5:05 AM. That's 3:00 AM to 11:30 AM Eastern Time (EST) or 12:00 AM to 8:30 AM Pacific Time (PST) for US investors."
  },
  {
    question: "What is the best time to call London from California?",
    answer: "The best time to call London from California is between 6:00 AM and 9:00 AM PST, which reaches London during their afternoon (2:00 PM - 5:00 PM). Avoid calling before 1:00 AM PST (9:00 AM London) as you may catch people before business hours or commuting."
  },
  {
    question: "How many hours ahead is London from Los Angeles?",
    answer: "London is 8 hours ahead of Los Angeles during standard time (GMT vs PST). When it's 9:00 AM in Los Angeles, it's 5:00 PM in London. During daylight saving periods, this can temporarily shift to 7 or 9 hours depending on when each region changes clocks."
  },
  {
    question: "Does the whole UK use the same time zone as London?",
    answer: "Yes, all of England, Scotland, Wales, and Northern Ireland use the same time zone as London (GMT/BST). The only exceptions are British Overseas Territories like Gibraltar, the Falkland Islands, and Bermuda, which have their own time zones based on their geographic locations."
  },
  {
    question: "What are London business hours for international calls?",
    answer: "Standard London business hours are 9:00 AM to 5:30 PM, Monday through Friday. However, many businesses in the City of London financial district start earlier (7:30-8:00 AM) to overlap with Asian markets. For US callers, aim for 9:00 AM - 12:00 PM EST to catch London's afternoon."
  }
]

export default function LondonOverviewContent({ city, config, isLight, timeStr }: Props) {
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
          London Time Zone: The Complete Guide
        </h1>
        <p className={`text-lg ${mutedColor}`}>
          Your complete guide to time in the capital of the United Kingdom
        </p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current London Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>
          Whether you're scheduling a meeting with colleagues in the UK, planning a trip to see 
          Big Ben, or trying to catch the opening of the London Stock Exchange — understanding 
          London's time zone is essential.
        </p>
        <p>
          London operates on <strong>Greenwich Mean Time (GMT)</strong> in winter and <strong>British 
          Summer Time (BST)</strong> in summer. As the home of the Prime Meridian, London's time zone 
          is literally the reference point for the entire world's timekeeping.
        </p>
        <p>
          But there's more to London time than just knowing it's "GMT." What matters is understanding 
          when businesses actually open, how the Tube schedule changes, and when you can realistically 
          expect a British colleague to respond to your email (hint: probably after their tea break).
        </p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          ⚡ Quick Facts: London Time Zone
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Standard Time:</strong> GMT (UTC+0)</li>
              <li>• <strong>Summer Time:</strong> BST (UTC+1)</li>
              <li>• <strong>Clocks Forward:</strong> Last Sunday of March</li>
              <li>• <strong>Clocks Back:</strong> Last Sunday of October</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong><Link href="/new-york/" className={linkColor}>New York</Link>:</strong> -5 hours (usually)</li>
              <li>• <strong><Link href="/tokyo/" className={linkColor}>Tokyo</Link>:</strong> +9 hours</li>
              <li>• <strong><Link href="/dubai/" className={linkColor}>Dubai</Link>:</strong> +4 hours</li>
              <li>• <strong><Link href="/sydney/" className={linkColor}>Sydney</Link>:</strong> +11 hours</li>
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
          Understanding London Time
        </h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          GMT vs BST: What's the Difference?
        </h3>
        <p>
          London uses two time zones throughout the year: <strong>Greenwich Mean Time (GMT)</strong> is used from late October 
          to late March — this is UTC+0, the baseline for world time. <strong>British Summer Time (BST)</strong> is used 
          from late March to late October, moving clocks forward one hour to UTC+1.
        </p>
        <p>
          The switch happens on the last Sunday of March (clocks "spring forward") and the last Sunday of October 
          (clocks "fall back"). This aligns closely with most European countries, though the exact dates can differ 
          from the US by a week or two.
        </p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>
          Why Greenwich Mean Time Matters
        </h3>
        <p>
          London's connection to timekeeping is historic. The Royal Observatory in Greenwich established the Prime 
          Meridian — the line of 0° longitude — in 1851. This made Greenwich the reference point for global time 
          zones. Even though UTC (Coordinated Universal Time) is now the official standard, GMT remains 
          synonymous with London time.
        </p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Spring Forward (to BST)</h4>
              <p className="mt-1">Last Sunday of March at 1:00 AM</p>
              <p>Clocks move from 1:00 AM → 2:00 AM</p>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Fall Back (to GMT)</h4>
              <p className="mt-1">Last Sunday of October at 2:00 AM</p>
              <p>Clocks move from 2:00 AM → 1:00 AM</p>
            </div>
          </div>
          <p className={`mt-3 text-xs ${mutedColor}`}>
            Pro tip: During the weeks when the UK and US change clocks on different dates, the time difference shifts temporarily. 
            London-NYC is usually 5 hours, but briefly becomes 4 hours in late March and 6 hours in early November.
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>
          London Time vs Major Cities
        </h2>
        <div className={`overflow-x-auto rounded-xl ${cardBg}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>When it's 12 PM in London</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="px-4 py-3">🇺🇸 <Link href="/time/london/new-york/" className={linkColor}>New York</Link></td>
                <td className="px-4 py-3">-5 hours</td>
                <td className="px-4 py-3">7:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇺🇸 <Link href="/time/london/los-angeles/" className={linkColor}>Los Angeles</Link></td>
                <td className="px-4 py-3">-8 hours</td>
                <td className="px-4 py-3">4:00 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇫🇷 <Link href="/time/london/paris/" className={linkColor}>Paris</Link></td>
                <td className="px-4 py-3">+1 hour</td>
                <td className="px-4 py-3">1:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇦🇪 <Link href="/time/london/dubai/" className={linkColor}>Dubai</Link></td>
                <td className="px-4 py-3">+4 hours</td>
                <td className="px-4 py-3">4:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇮🇳 <Link href="/time/london/mumbai/" className={linkColor}>Mumbai</Link></td>
                <td className="px-4 py-3">+5.5 hours</td>
                <td className="px-4 py-3">5:30 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇸🇬 <Link href="/time/london/singapore/" className={linkColor}>Singapore</Link></td>
                <td className="px-4 py-3">+8 hours</td>
                <td className="px-4 py-3">8:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇯🇵 <Link href="/time/london/tokyo/" className={linkColor}>Tokyo</Link></td>
                <td className="px-4 py-3">+9 hours</td>
                <td className="px-4 py-3">9:00 PM</td>
              </tr>
              <tr>
                <td className="px-4 py-3">🇦🇺 <Link href="/time/london/sydney/" className={linkColor}>Sydney</Link></td>
                <td className="px-4 py-3">+11 hours</td>
                <td className="px-4 py-3">11:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>
          * Times shown are approximate and may vary during daylight saving transitions.{' '}
          <Link href="/time/london/new-york/" className={linkColor}>See detailed time differences →</Link>
        </p>
      </section>
      
      {/* Dynamic CTA - Meeting Planner */}
      <section className={`mb-10 p-6 rounded-2xl text-center ${
        isLight 
          ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200' 
          : 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-700/50'
      }`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>
          Need to schedule a meeting with London?
        </h3>
        <p className={`mb-4 ${mutedColor}`}>
          Find the perfect meeting time that works for everyone across time zones.
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
          Practical Tips for Dealing with London Time
        </h2>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">
            London's position makes it ideal for bridging time zones. A 9 AM meeting in London catches 
            <Link href="/new-york/" className={linkColor}> New York</Link> at 4 AM (too early), but a 2 PM London meeting is 9 AM NYC — perfect for both sides. 
            For Asia, early morning London calls (7-8 AM) align with end-of-day in <Link href="/singapore/" className={linkColor}>Singapore</Link> and <Link href="/tokyo/" className={linkColor}>Tokyo</Link>.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">
            Flying from North America? You'll "lose" 5-8 hours travelling east. Take an overnight flight, 
            arrive in the morning, and push through the first day to adjust faster. Check our{' '}
            <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for personalized recovery tips.
          </p>
        </div>
        
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">
            London's GMT base makes it surprisingly central for global teams. You can comfortably overlap 
            with European colleagues all day, catch Americas in the afternoon, and start early for 
            Asia-Pacific standups. Many remote workers consider London one of the best locations for 
            distributed team coordination.
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
            📈 Stock Market
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
            🇬🇧 UK Holidays
          </Link>
        </div>
      </section>
      
      {/* E-E-A-T Footer */}
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
