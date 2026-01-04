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

// Long-tail keyword optimized FAQ data for Sydney
const FAQ_DATA = [
  {
    question: "What is the time difference between Sydney and New York right now?",
    answer: "Sydney is typically 16 hours ahead of New York during US Eastern Standard Time (EST). When it's 9:00 AM in New York, it's 1:00 AM the next day in Sydney. During US daylight saving (EDT), the difference can be 14-15 hours. Both countries observe DST but in opposite seasons."
  },
  {
    question: "Does Sydney use daylight saving time?",
    answer: "Yes, Sydney and New South Wales observe daylight saving time (DST). Clocks spring forward on the first Sunday of October and fall back on the first Sunday of April. Note: Not all Australian states observe DST — Queensland, Western Australia, and Northern Territory do not change clocks."
  },
  {
    question: "What time does the Australian Stock Exchange open and close?",
    answer: "The Australian Securities Exchange (ASX) in Sydney opens at 10:00 AM and closes at 4:00 PM AEST/AEDT, Monday through Friday. Pre-market trading runs 7:00-10:00 AM. For New York investors, that's 7:00 PM to 1:00 AM ET (previous evening). For London, it's 11:00 PM to 5:00 AM GMT."
  },
  {
    question: "What is the best time to call Sydney from the UK?",
    answer: "The best time to call Sydney from the UK is between 6:00 AM and 8:00 AM GMT, which reaches Sydney during their afternoon/evening (5:00 PM - 7:00 PM AEDT). Alternatively, UK evening calls (6-8 PM GMT) catch Sydney's early morning (5-7 AM AEDT) if your contact is an early riser."
  },
  {
    question: "How many hours ahead is Sydney from London?",
    answer: "Sydney is typically 11 hours ahead of London during GMT (UK winter). When it's 12:00 PM in London, it's 11:00 PM in Sydney. During British Summer Time and Australian winter (April-October overlap), the difference reduces to 9 hours due to opposite DST schedules."
  },
  {
    question: "What time zone is Sydney Australia in?",
    answer: "Sydney is in Australian Eastern Standard Time (AEST, UTC+10) during winter and Australian Eastern Daylight Time (AEDT, UTC+11) during summer. AEST/AEDT covers New South Wales, Victoria, Tasmania, and ACT. Queensland stays on AEST year-round (no DST)."
  },
  {
    question: "When do clocks change in Sydney Australia in 2025?",
    answer: "In 2025, Sydney clocks spring forward to AEDT on Sunday, October 5th at 2:00 AM (clocks move to 3:00 AM). Clocks fall back to AEST on Sunday, April 6th at 3:00 AM (clocks move to 2:00 AM). Remember: Australian seasons are opposite to the Northern Hemisphere."
  },
  {
    question: "What are typical business hours in Sydney Australia?",
    answer: "Standard Sydney business hours are 9:00 AM to 5:00 PM AEST/AEDT, Monday through Friday. The financial district in Martin Place often starts earlier (8:00 AM) to overlap with Asian markets close. Retail shops typically open 9:00 AM to 6:00 PM, with extended Thursday night shopping until 9:00 PM."
  }
]

export default function SydneyOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  }

  return (
    <div className={textColor}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <header className="mb-8">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Sydney Time Zone: The Complete Guide</h1>
        <p className={`text-lg ${mutedColor}`}>Your complete guide to time in Australia's global harbor city</p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Sydney Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>Whether you're coordinating with Australian colleagues, planning a trip to see the Sydney Opera House, or tracking the ASX opening — understanding Sydney's time zone (and Australia's unique DST situation) is essential for global business.</p>
        <p>Sydney operates on <strong>Australian Eastern Standard Time (AEST)</strong> in winter and <strong>Australian Eastern Daylight Time (AEDT)</strong> in summer. As Australia's largest city and financial hub, Sydney time drives business across the Asia-Pacific region.</p>
        <p>The tricky part? Australia's seasons are opposite to the Northern Hemisphere, and not all Australian states observe daylight saving time. Queensland (Brisbane) stays on AEST year-round, creating a 1-hour difference with Sydney in summer!</p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>⚡ Quick Facts: Sydney Time Zone</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Standard Time:</strong> AEST (UTC+10)</li>
              <li>• <strong>Daylight Time:</strong> AEDT (UTC+11)</li>
              <li>• <strong>Clocks Forward:</strong> 1st Sunday of October</li>
              <li>• <strong>Clocks Back:</strong> 1st Sunday of April</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong><Link href="/new-york/" className={linkColor}>New York</Link>:</strong> -16 hours (EST) / -14 (EDT)</li>
              <li>• <strong><Link href="/london/" className={linkColor}>London</Link>:</strong> -11 hours (GMT) / -9 (BST)</li>
              <li>• <strong><Link href="/tokyo/" className={linkColor}>Tokyo</Link>:</strong> -2 hours (AEDT)</li>
              <li>• <strong><Link href="/singapore/" className={linkColor}>Singapore</Link>:</strong> -3 hours (AEDT)</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>Need exact conversions? Try our <Link href="/time/" className={linkColor}>Time Converter</Link></p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>Explore the Complete Guide</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {config.clusters.map(cluster => (
            <Link key={cluster.slug} href={`/${city.slug}/guide/${cluster.slug}/`} className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-slate-200 hover:border-cyan-300 hover:shadow-md' : 'bg-slate-700/30 border-slate-600 hover:border-cyan-500/50'}`}>
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
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>Understanding Sydney Time</h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>Australia's Confusing DST Situation</h3>
        <p>Unlike most countries where the entire nation follows the same DST rules, Australia is divided. <strong>New South Wales</strong> (Sydney), <strong>Victoria</strong> (Melbourne), <strong>Tasmania</strong>, <strong>South Australia</strong>, and <strong>ACT</strong> observe daylight saving. <strong>Queensland</strong> (Brisbane), <strong>Western Australia</strong> (Perth), and <strong>Northern Territory</strong> do not.</p>
        <p>This means Sydney and Brisbane — just 700km apart — have a 1-hour time difference for half the year. When scheduling meetings with "Australia," always confirm which state.</p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>The Asia-Pacific Bridge</h3>
        <p>Sydney's position makes it the gateway between Asia and the Americas. Morning in Sydney overlaps with <Link href="/tokyo/" className={linkColor}>Tokyo</Link> and <Link href="/singapore/" className={linkColor}>Singapore's</Link> business day. Sydney's evening catches US West Coast waking up. This makes Sydney a strategic hub for global operations.</p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Sydney Morning (9 AM AEDT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 5 PM (prev day, EST)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 10 PM (prev day)</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 7 AM</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 6 AM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Sydney Evening (6 PM AEDT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 2 AM (same day, EST)</li>
                <li>• <Link href="/los-angeles/" className={linkColor}>Los Angeles</Link>: 11 PM (prev day)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 7 AM</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 11 AM</li>
              </ul>
            </div>
          </div>
          <p className={`mt-3 text-xs ${mutedColor}`}>Pro tip: The time difference between Sydney and Northern Hemisphere cities can swing by up to 3 hours through the year as both regions shift clocks in opposite directions.</p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>Sydney Time vs Major Cities</h2>
        <div className={`overflow-x-auto rounded-xl ${cardBg}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>When it's 12 PM in Sydney</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr><td className="px-4 py-3">🇺🇸 <Link href="/time/sydney/new-york/" className={linkColor}>New York</Link></td><td className="px-4 py-3">-16 hours*</td><td className="px-4 py-3">8:00 PM (prev)</td></tr>
              <tr><td className="px-4 py-3">🇺🇸 <Link href="/time/sydney/los-angeles/" className={linkColor}>Los Angeles</Link></td><td className="px-4 py-3">-19 hours*</td><td className="px-4 py-3">5:00 PM (prev)</td></tr>
              <tr><td className="px-4 py-3">🇬🇧 <Link href="/time/sydney/london/" className={linkColor}>London</Link></td><td className="px-4 py-3">-11 hours*</td><td className="px-4 py-3">1:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇦🇪 <Link href="/time/sydney/dubai/" className={linkColor}>Dubai</Link></td><td className="px-4 py-3">-7 hours</td><td className="px-4 py-3">5:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇮🇳 <Link href="/time/sydney/mumbai/" className={linkColor}>Mumbai</Link></td><td className="px-4 py-3">-5.5 hours</td><td className="px-4 py-3">6:30 AM</td></tr>
              <tr><td className="px-4 py-3">🇸🇬 <Link href="/time/sydney/singapore/" className={linkColor}>Singapore</Link></td><td className="px-4 py-3">-3 hours</td><td className="px-4 py-3">9:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇯🇵 <Link href="/time/sydney/tokyo/" className={linkColor}>Tokyo</Link></td><td className="px-4 py-3">-2 hours</td><td className="px-4 py-3">10:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇳🇿 <Link href="/time/sydney/auckland/" className={linkColor}>Auckland</Link></td><td className="px-4 py-3">+2 hours</td><td className="px-4 py-3">2:00 PM</td></tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>* Times vary significantly as both Sydney and Northern Hemisphere observe opposite DST. <Link href="/time/sydney/london/" className={linkColor}>See detailed time differences →</Link></p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl text-center ${isLight ? 'bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200' : 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-700/50'}`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>Need to schedule a meeting with Sydney?</h3>
        <p className={`mb-4 ${mutedColor}`}>Find the perfect meeting time across the hemispheres.</p>
        <Link href="/meeting/" className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
          <span>🚀</span><span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>Practical Tips for Dealing with Sydney Time</h2>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">Sydney-US calls are tough: <Link href="/new-york/" className={linkColor}>New York's</Link> 5 PM catches Sydney's 9 AM (workable but early). <Link href="/london/" className={linkColor}>London</Link> has better options: 7 AM GMT catches Sydney's 6 PM (end of day). For Asia, Sydney morning aligns perfectly with <Link href="/tokyo/" className={linkColor}>Tokyo</Link> and <Link href="/singapore/" className={linkColor}>Singapore</Link> business hours.</p>
        </div>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">Flying from the US or Europe? Prepare for serious jet lag — you're shifting 10-16 hours across the planet. Most overnight flights from the US arrive in Sydney morning, which helps reset your clock. Flights from Asia are much easier (2-5 hour shift). Check our <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link>.</p>
        </div>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">Working remotely with US or European teams from Sydney requires flexibility. Many adopt "split shifts" — working Sydney morning for Asia, taking a break, then late evening for US calls. The vibrant café culture and reliable infrastructure make Sydney popular for digital nomads targeting Asia-Pacific markets.</p>
        </div>
      </section>
      
      <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div key={index} className={`p-4 rounded-xl ${cardBg}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className={`font-medium mb-2 ${headingColor}`} itemProp="name">{faq.question}</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p className="text-sm" itemProp="text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-amber-50 border border-amber-200' : 'bg-amber-900/20 border border-amber-700/30'}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>Ready to Dive Deeper?</h2>
        <p className={`mb-4 ${mutedColor}`}>This overview is just the start. Explore our detailed guides:</p>
        <div className="flex flex-wrap gap-2">
          <Link href={`/${city.slug}/guide/time-business/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>🏢 Business Hours</Link>
          <Link href={`/${city.slug}/guide/stock-market/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>📈 ASX Trading</Link>
          <Link href={`/${city.slug}/guide/best-time-to-call/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>📞 Best Time to Call</Link>
          <Link href={`/${city.slug}/guide/public-holidays/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>🇦🇺 Australian Holidays</Link>
        </div>
      </section>
      
      <footer className={`text-sm ${mutedColor} border-t ${isLight ? 'border-slate-200' : 'border-slate-700'} pt-6`}>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p><strong>Last updated:</strong> January 2025</p>
          <p className="flex items-center gap-1"><span>✓</span><span>Data verified by WhatTime.city Editorial Team</span></p>
        </div>
        <p className={`mt-2 text-xs ${mutedColor}`}>Time zone data sourced from IANA Time Zone Database. This guide is regularly reviewed and updated to ensure accuracy.</p>
      </footer>
    </div>
  )
}
