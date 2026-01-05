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

// Long-tail keyword optimized FAQ data for Paris
const FAQ_DATA = [
  {
    question: "What is the time difference between Paris and New York right now?",
    answer: "Paris is typically 6 hours ahead of New York. When it's 9:00 AM in New York, it's 3:00 PM in Paris. However, for 2-3 weeks in March and November, the difference shifts to 5 or 7 hours because the US and Europe change clocks on different dates."
  },
  {
    question: "Is Paris on CET or CEST right now?",
    answer: "Paris uses CET (Central European Time, UTC+1) from the last Sunday of October to the last Sunday of March. During summer months (late March to late October), Paris switches to CEST (Central European Summer Time, UTC+2). Most of continental Europe follows the same schedule."
  },
  {
    question: "When do the clocks change in France in 2025?",
    answer: "In 2025, French clocks spring forward to CEST on Sunday, March 30th at 2:00 AM (clocks move to 3:00 AM). Clocks fall back to CET on Sunday, October 26th at 3:00 AM (clocks move to 2:00 AM). Note: EU may abolish daylight saving changes in future years."
  },
  {
    question: "What time does the Paris Stock Exchange open and close?",
    answer: "Euronext Paris opens at 9:00 AM and closes at 5:30 PM CET/CEST, Monday through Friday. Pre-market trading starts at 7:15 AM. For New York investors, that's 3:00 AM to 11:30 AM ET (winter) or 3:00 AM to 11:30 AM ET (summer). Trading halts for major French holidays."
  },
  {
    question: "What is the best time to call Paris from California?",
    answer: "The best time to call Paris from California is between 6:00 AM and 9:00 AM PST, which reaches Paris during their afternoon (3:00 PM - 6:00 PM CET). Avoid calling before 12:00 AM PST (9:00 AM Paris) as French businesses typically start at 9 AM or later."
  },
  {
    question: "How many hours ahead is Paris from Los Angeles?",
    answer: "Paris is 9 hours ahead of Los Angeles during standard time (CET vs PST). When it's 9:00 AM in Los Angeles, it's 6:00 PM in Paris. During daylight saving periods, this can temporarily shift to 8 or 10 hours depending on when each region changes clocks."
  },
  {
    question: "Is France in the same time zone as Germany and Spain?",
    answer: "Yes, France, Germany, Spain, Italy, and most of Western/Central Europe share the same time zone: CET (UTC+1) in winter and CEST (UTC+2) in summer. Interestingly, Spain and France are geographically west enough to be in the UK's time zone but chose CET for economic alignment."
  },
  {
    question: "What are typical business hours in Paris France?",
    answer: "Standard Paris business hours are 9:00 AM to 6:00 PM CET/CEST, Monday through Friday, with a lunch break tradition (12:30-2:00 PM) still observed by many. Banks typically close at 5:00 PM. Shops often open 10:00 AM to 7:00 PM. Many businesses close on Sundays and some on Monday mornings."
  }
]

export default function ParisOverviewContent({ city, config, isLight, timeStr }: Props) {
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-50' : 'bg-slate-700/50'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-sky-400 hover:text-sky-300 hover:underline'

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
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Paris Time Zone: The Complete Guide</h1>
        <p className={`text-lg ${mutedColor}`}>Your complete guide to time in the City of Light</p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Paris Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>Whether you're scheduling a meeting with French colleagues, planning a trip to see the Eiffel Tower, or tracking Euronext Paris trading — understanding Paris's time zone is essential for business and travel across Europe.</p>
        <p>Paris operates on <strong>Central European Time (CET)</strong> in winter and <strong>Central European Summer Time (CEST)</strong> in summer. As the heart of the European Union and a major financial center, Paris time aligns with most of continental Europe.</p>
        <p>The French approach to time includes a rich tradition of the long lunch break — something to consider when scheduling calls. Don't expect immediate responses between 12:30 PM and 2:00 PM!</p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl ${cardBg}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>⚡ Quick Facts: Paris Time Zone</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Time Zone Basics</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong>Standard Time:</strong> CET (UTC+1)</li>
              <li>• <strong>Summer Time:</strong> CEST (UTC+2)</li>
              <li>• <strong>Clocks Forward:</strong> Last Sunday of March</li>
              <li>• <strong>Clocks Back:</strong> Last Sunday of October</li>
            </ul>
          </div>
          <div>
            <h3 className={`font-medium mb-2 ${headingColor}`}>Key Time Differences</h3>
            <ul className="space-y-1 text-sm">
              <li>• <strong><Link href="/new-york/" className={linkColor}>New York</Link>:</strong> -6 hours (usually)</li>
              <li>• <strong><Link href="/london/" className={linkColor}>London</Link>:</strong> -1 hour</li>
              <li>• <strong><Link href="/dubai/" className={linkColor}>Dubai</Link>:</strong> +3 hours</li>
              <li>• <strong><Link href="/tokyo/" className={linkColor}>Tokyo</Link>:</strong> +8 hours</li>
            </ul>
          </div>
        </div>
        <p className={`mt-4 text-sm ${mutedColor}`}>Need exact conversions? Try our <Link href="/time/" className={linkColor}>Time Converter</Link></p>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>Explore the Complete Guide</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {config.clusters.map(cluster => (
            <Link key={cluster.slug} href={`/${city.slug}/guide/${cluster.slug}/`} className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md' : 'bg-slate-700/30 border-slate-600 hover:border-blue-500/50'}`}>
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
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>Understanding Paris Time</h2>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>CET vs CEST: The European Standard</h3>
        <p>Paris follows the same time zone as Berlin, Rome, Madrid, Amsterdam, and most of continental Europe. <strong>CET (Central European Time)</strong> is UTC+1, used from late October to late March. <strong>CEST (Central European Summer Time)</strong> is UTC+2, used from late March to late October.</p>
        <p>The EU has debated abolishing daylight saving time changes, but no final decision has been implemented yet. Until then, expect the biannual clock changes to continue.</p>
        
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>The French Business Rhythm</h3>
        <p>French business culture respects the tradition of the long lunch. Many offices empty between 12:30 PM and 2:00 PM as employees enjoy a proper meal. Scheduling calls during this window may result in voicemails. The classic French workday runs 9 AM - 6 PM with this midday break.</p>
        
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Paris Morning (9 AM CET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 3 AM (EST)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 8 AM</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 12 PM</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 5 PM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Paris Evening (6 PM CET)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 12 PM (noon, EST)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 5 PM</li>
                <li>• <Link href="/singapore/" className={linkColor}>Singapore</Link>: 1 AM (+1)</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 4 AM (+1)</li>
              </ul>
            </div>
          </div>
          <p className={`mt-3 text-xs ${mutedColor}`}>Pro tip: The weeks when the US and Europe change clocks on different dates cause temporary shifts. Paris-NYC is usually 6 hours but briefly becomes 5 hours in late March and 7 hours in early November.</p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>Paris Time vs Major Cities</h2>
        <div className={`overflow-x-auto rounded-xl ${cardBg}`}>
          <table className="w-full text-sm">
            <thead>
              <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-600'}`}>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>City</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>Difference</th>
                <th className={`px-4 py-3 text-left font-medium ${headingColor}`}>When it's 12 PM in Paris</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr><td className="px-4 py-3">🇺🇸 <Link href="/time/paris/new-york/" className={linkColor}>New York</Link></td><td className="px-4 py-3">-6 hours*</td><td className="px-4 py-3">6:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇺🇸 <Link href="/time/paris/los-angeles/" className={linkColor}>Los Angeles</Link></td><td className="px-4 py-3">-9 hours*</td><td className="px-4 py-3">3:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇬🇧 <Link href="/time/paris/london/" className={linkColor}>London</Link></td><td className="px-4 py-3">-1 hour</td><td className="px-4 py-3">11:00 AM</td></tr>
              <tr><td className="px-4 py-3">🇩🇪 <Link href="/time/paris/berlin/" className={linkColor}>Berlin</Link></td><td className="px-4 py-3">0 hours</td><td className="px-4 py-3">12:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇦🇪 <Link href="/time/paris/dubai/" className={linkColor}>Dubai</Link></td><td className="px-4 py-3">+3 hours</td><td className="px-4 py-3">3:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇮🇳 <Link href="/time/paris/mumbai/" className={linkColor}>Mumbai</Link></td><td className="px-4 py-3">+4.5 hours</td><td className="px-4 py-3">4:30 PM</td></tr>
              <tr><td className="px-4 py-3">🇸🇬 <Link href="/time/paris/singapore/" className={linkColor}>Singapore</Link></td><td className="px-4 py-3">+7 hours</td><td className="px-4 py-3">7:00 PM</td></tr>
              <tr><td className="px-4 py-3">🇯🇵 <Link href="/time/paris/tokyo/" className={linkColor}>Tokyo</Link></td><td className="px-4 py-3">+8 hours</td><td className="px-4 py-3">8:00 PM</td></tr>
            </tbody>
          </table>
        </div>
        <p className={`mt-3 text-sm ${mutedColor}`}>* Times vary during daylight saving transitions. <Link href="/time/paris/new-york/" className={linkColor}>See detailed time differences →</Link></p>
      </section>
      
      <section className={`mb-10 p-6 rounded-2xl text-center ${isLight ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200' : 'bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-700/50'}`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>Need to schedule a meeting with Paris?</h3>
        <p className={`mb-4 ${mutedColor}`}>Find the perfect meeting time (and avoid the French lunch hour!).</p>
        <Link href="/meeting/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
          <span>🚀</span><span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>Practical Tips for Dealing with Paris Time</h2>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">The golden window for US-Paris calls is 9 AM - 12 PM ET (3-6 PM Paris) — catching French afternoon before end of day. For Asian partners, Paris morning (9-11 AM) aligns with <Link href="/singapore/" className={linkColor}>Singapore</Link>/<Link href="/hong-kong/" className={linkColor}>Hong Kong</Link> end of day (4-6 PM). UK overlap is near-perfect.</p>
        </div>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">Flying from the US East Coast? You'll "lose" 6 hours traveling east. Take an overnight flight, arrive at Paris CDG in the morning, and push through the first day. From Asia, the jet lag is more manageable (6-8 hours). Check our <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link> for recovery tips.</p>
        </div>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">Paris offers excellent European coverage and reasonable Americas overlap in the afternoon. Many cafés have WiFi, though "work from café" culture is less prevalent than in <Link href="/london/" className={linkColor}>London</Link>. August is notoriously quiet as much of France takes vacation.</p>
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
          <Link href={`/${city.slug}/guide/stock-market/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>📈 Euronext Paris</Link>
          <Link href={`/${city.slug}/guide/best-time-to-call/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>📞 Best Time to Call</Link>
          <Link href={`/${city.slug}/guide/public-holidays/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>🇫🇷 French Holidays</Link>
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
