'use client'

import Link from 'next/link'
import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
import { QuickFacts, CityComparisonTable } from '../components'

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

// Long-tail keyword optimized FAQ data for Singapore
const FAQ_DATA = [
  {
    question: "What is the time difference between Singapore and New York right now?",
    answer: "Singapore is 13 hours ahead of New York during Eastern Standard Time (EST). When it's 9:00 AM in New York, it's 10:00 PM the same day in Singapore. During US daylight saving time (EDT), the difference reduces to 12 hours. Singapore does not observe daylight saving time."
  },
  {
    question: "Does Singapore use daylight saving time?",
    answer: "No, Singapore does not observe daylight saving time (DST). Singapore remains on Singapore Standard Time (SST/SGT, UTC+8) year-round. This means while Singapore's clocks never change, the time difference with countries that use DST shifts twice annually."
  },
  {
    question: "What time does the Singapore Stock Exchange open and close?",
    answer: "The Singapore Exchange (SGX) opens at 9:00 AM and closes at 5:00 PM SGT, Monday through Friday. Pre-market trading runs 8:30-9:00 AM. For New York investors, that's 8:00 PM to 4:00 AM ET (previous evening to early morning). For London, it's 1:00 AM to 9:00 AM GMT."
  },
  {
    question: "What is the best time to call Singapore from the US?",
    answer: "The best time to call Singapore from the US East Coast is between 7:00 PM and 10:00 PM ET, which reaches Singapore during their morning business hours (8:00 AM - 11:00 AM SGT the next day). For US West Coast, 4:00 PM - 7:00 PM PT works similarly."
  },
  {
    question: "How many hours ahead is Singapore from London?",
    answer: "Singapore is 8 hours ahead of London during GMT (winter). When it's 12:00 PM in London, it's 8:00 PM in Singapore. During British Summer Time (BST), the difference reduces to 7 hours. This makes early morning UK calls ideal for Singapore afternoon meetings."
  },
  {
    question: "What time zone is Singapore in?",
    answer: "Singapore is in Singapore Standard Time (SGT), which is UTC+8. SGT is the same time as Hong Kong (HKT), Perth (AWST), and much of China/Taiwan. Despite its geographic position near UTC+7, Singapore adopted UTC+8 in 1982 to align with Hong Kong and China for business."
  },
  {
    question: "Is Singapore time the same as Hong Kong and China?",
    answer: "Yes, Singapore (SGT), Hong Kong (HKT), and mainland China (CST) all use UTC+8. This makes business coordination across these major Asian financial centers seamless — when it's 9:00 AM in Singapore, it's also 9:00 AM in Hong Kong and Shanghai."
  },
  {
    question: "What are typical business hours in Singapore?",
    answer: "Standard Singapore business hours are 9:00 AM to 6:00 PM SGT, Monday through Friday. The financial district often starts earlier (8:00 AM) to overlap with European markets. Malls typically open 10:00 AM to 10:00 PM. Many hawker centers and restaurants stay open late."
  }
]

export default function SingaporeOverviewContent({ city, config, isLight, timeStr }: Props) {
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
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>Singapore Time Zone: The Complete Guide</h1>
        <p className={`text-lg ${mutedColor}`}>Your complete guide to time in Asia's premier financial hub</p>
        <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full ${cardBg}`}>
          <span className="text-2xl">🕐</span>
          <span className="font-medium">Current Singapore Time: </span>
          <span className={`font-bold ${headingColor}`}>{timeStr}</span>
        </div>
      </header>
      
      <section className="mb-10 space-y-4">
        <p>Whether you're coordinating with Singapore's thriving fintech sector, planning a stopover at Changi Airport, or tracking the SGX opening — understanding Singapore's time zone is essential for anyone doing business in Southeast Asia.</p>
        <p>Singapore operates on <strong>Singapore Standard Time (SGT)</strong>, which is UTC+8 year-round. Like its neighbor Hong Kong, Singapore does not observe daylight saving time, making time calculations consistent throughout the year.</p>
        <p>Interestingly, Singapore's geographic position suggests it should be UTC+7, but the country adopted UTC+8 in 1982 to align with major trading partners Hong Kong and China — a pragmatic business decision typical of the city-state.</p>
      </section>
      
            {/* Quick Facts - Technical info only, no city links (moved to table) */}
      <QuickFacts config={config} isLight={isLight} />
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>Explore the Complete Guide</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {config.clusters.map(cluster => (
            <Link key={cluster.slug} href={`/${city.slug}/guide/${cluster.slug}/`} className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${isLight ? 'bg-white border-slate-200 hover:border-red-300 hover:shadow-md' : 'bg-slate-700/30 border-slate-600 hover:border-red-500/50'}`}>
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
        <h2 className={`text-2xl font-semibold mb-4 ${headingColor}`}>Understanding Singapore Time</h2>
        <h3 className={`text-lg font-medium mt-6 mb-2 ${headingColor}`}>The Asia Financial Hub Advantage</h3>
        <p>Singapore's UTC+8 time zone places it perfectly for Asian business. Markets in <Link href="/tokyo/" className={linkColor}>Tokyo</Link> (+1 hour), <Link href="/hong-kong/" className={linkColor}>Hong Kong</Link> (same), and <Link href="/sydney/" className={linkColor}>Sydney</Link> (+3 hours) are all within easy reach. European overlap happens in Singapore's afternoon (London morning), making it a natural bridge for global companies.</p>
        <div className={`p-4 rounded-xl ${cardBg} mt-4`}>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className={`font-medium ${headingColor}`}>Singapore Morning (9 AM SGT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 8 PM (prev day, EST)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 1 AM</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 5 AM</li>
                <li>• <Link href="/tokyo/" className={linkColor}>Tokyo</Link>: 10 AM</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-medium ${headingColor}`}>Singapore Evening (6 PM SGT)</h4>
              <ul className="mt-2 space-y-1">
                <li>• <Link href="/new-york/" className={linkColor}>New York</Link>: 5 AM (same day, EST)</li>
                <li>• <Link href="/london/" className={linkColor}>London</Link>: 10 AM</li>
                <li>• <Link href="/dubai/" className={linkColor}>Dubai</Link>: 2 PM</li>
                <li>• <Link href="/sydney/" className={linkColor}>Sydney</Link>: 9 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
            {/* Region-based City Comparison Table */}
      <CityComparisonTable config={config} isLight={isLight} />
      
      <section className={`mb-10 p-6 rounded-2xl text-center ${isLight ? 'bg-gradient-to-r from-red-50 to-orange-50 border border-red-200' : 'bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-700/50'}`}>
        <h3 className={`text-xl font-semibold mb-2 ${headingColor}`}>Need to schedule a meeting with Singapore?</h3>
        <p className={`mb-4 ${mutedColor}`}>Find the perfect meeting time across the Asia-Pacific region.</p>
        <Link href="/meeting/" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg">
          <span>🚀</span><span>Launch Meeting Planner</span>
        </Link>
      </section>
      
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>Practical Tips for Dealing with Singapore Time</h2>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>🏢 For International Business</h3>
          <p className="text-sm">The 8 AM - 11 AM SGT window catches <Link href="/london/" className={linkColor}>London's</Link> midnight-3 AM (tough) but <Link href="/dubai/" className={linkColor}>Dubai's</Link> early morning works. US calls typically happen at Singapore's evening (7-10 PM SGT). Many Singapore offices have "overlap hours" for US coordination.</p>
        </div>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>✈️ For Travellers</h3>
          <p className="text-sm">Changi Airport (regularly voted world's best) operates 24/7. Flying from Europe? Expect 7-8 hours of jet lag. From the US, the 12-16 hour time shift is significant — Singapore's perpetual summer warmth helps you stay awake during adjustment. Check our <Link href="/jet-lag-advisor/" className={linkColor}>Jet Lag Advisor</Link>.</p>
        </div>
        <div className={`p-4 rounded-xl border mb-4 ${isLight ? 'border-slate-200 bg-white' : 'border-slate-600 bg-slate-700/30'}`}>
          <h3 className={`font-medium mb-2 ${headingColor}`}>💼 For Remote Workers</h3>
          <p className="text-sm">Singapore's time zone is perfect for Asia-Pacific teams — excellent overlap with <Link href="/tokyo/" className={linkColor}>Tokyo</Link>, <Link href="/hong-kong/" className={linkColor}>Hong Kong</Link>, and <Link href="/sydney/" className={linkColor}>Sydney</Link>. European morning calls catch Singapore afternoon. US coordination requires evening availability.</p>
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
          <Link href={`/${city.slug}/guide/stock-market/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>📈 SGX Trading</Link>
          <Link href={`/${city.slug}/guide/best-time-to-call/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>📞 Best Time to Call</Link>
          <Link href={`/${city.slug}/guide/public-holidays/`} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isLight ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-amber-900/40 text-amber-300 hover:bg-amber-900/60'}`}>🇸🇬 SG Holidays</Link>
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
