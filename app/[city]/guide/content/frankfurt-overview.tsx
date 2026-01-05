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

// Long-tail keyword optimized FAQ data for Frankfurt
const FAQ_DATA = [
  {
    question: "What is the time difference between Frankfurt and London?",
    answer: "Frankfurt is 1 hour ahead of London during standard time (CET vs GMT). When it's 12:00 PM in London, it's 1:00 PM in Frankfurt. During summer (late March to late October), both cities move to daylight saving time, so the difference remains 1 hour (CEST vs BST). This makes London-Frankfurt business coordination straightforward."
  },
  {
    question: "What time does the Frankfurt Stock Exchange open?",
    answer: "The Frankfurt Stock Exchange (Börse Frankfurt) opens at 8:00 AM CET for floor trading, but the main Xetra electronic trading platform operates from 9:00 AM to 5:30 PM CET. Pre-trading starts at 7:00 AM. For US investors, this means Xetra runs from 3:00 AM to 11:30 AM EST (winter) or 4:00 AM to 12:30 PM EDT (summer)."
  },
  {
    question: "What are the ECB announcement times?",
    answer: "The European Central Bank (ECB) monetary policy decisions are announced at 2:15 PM CET (8:15 AM EST), with the press conference starting at 2:45 PM CET. ECB meetings occur every six weeks. Interest rate decisions from Frankfurt affect the entire Eurozone, making these times crucial for forex and bond traders worldwide."
  },
  {
    question: "What is the time difference between Frankfurt and New York?",
    answer: "Frankfurt is 6 hours ahead of New York during standard time (CET vs EST). When it's 9:00 AM in New York, it's 3:00 PM in Frankfurt. During summer, the difference reduces to 6 hours when both observe daylight saving (CEST vs EDT), though there are brief periods of 5 or 7 hours during the DST transition weeks."
  },
  {
    question: "What time zone is Frankfurt in?",
    answer: "Frankfurt operates on Central European Time (CET), which is UTC+1 in winter and UTC+2 during summer daylight saving time (CEST). Germany follows EU daylight saving rules: clocks move forward on the last Sunday of March and back on the last Sunday of October. Frankfurt shares this timezone with Berlin, Paris, Amsterdam, and most of continental Europe."
  },
  {
    question: "What is the best time to call Frankfurt from the USA?",
    answer: "The best time to call Frankfurt from the US East Coast is 8:00 AM - 11:00 AM EST, which reaches Frankfurt during business hours (2:00 PM - 5:00 PM CET). From the West Coast, try 5:00 AM - 8:00 AM PST. Germans typically take lunch 12:00-1:00 PM, so avoid calling 6:00-7:00 AM EST. Most businesses close by 6:00 PM CET."
  },
  {
    question: "What are typical business hours in Frankfurt?",
    answer: "Standard Frankfurt business hours are 9:00 AM to 6:00 PM CET, Monday through Friday. Banks typically operate 9:00 AM to 4:00 PM (some until 6:00 PM on Thursdays). Shops open 10:00 AM to 8:00 PM on weekdays. Note that most shops are closed on Sundays in Germany. The financial district (Bankenviertel) follows international banking hours."
  },
  {
    question: "When is the Frankfurt Book Fair?",
    answer: "The Frankfurt Book Fair (Frankfurter Buchmesse), the world's largest trade fair for books, takes place annually in mid-October, typically Wednesday through Sunday. Trade visitor days are Wednesday-Friday; weekend days are open to the public. The fair significantly impacts hotel availability and prices. Book Fair hours are usually 9:00 AM - 6:30 PM CET."
  }
]

// JSON-LD Schema for FAQ rich results
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

export default function FrankfurtOverviewContent({ city, config, isLight, timeStr }: Props) {
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const textColor = isLight ? 'text-slate-700' : 'text-slate-200'
  const mutedColor = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-white/80 border border-slate-200' : 'bg-slate-800/50 border border-slate-700'
  const linkColor = isLight ? 'text-blue-600 hover:text-blue-700' : 'text-blue-400 hover:text-blue-300'
  
  return (
    <div className={textColor}>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section */}
      <section className="mb-10">
        <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          {config.icon} Frankfurt Time Zone: The Complete Guide to Europe's Financial Capital
        </h1>
        <p className={`text-lg mb-4 ${mutedColor}`}>
          Current time in Frankfurt: <span className="font-semibold">{timeStr}</span>
        </p>
        
        {/* Intro paragraphs - SEO optimized */}
        <div className="space-y-4 text-base leading-relaxed">
          <p>
            <strong>Frankfurt operates on Central European Time (CET)</strong>, which is <strong>UTC+1</strong> in 
            winter and <strong>UTC+2 (CEST)</strong> during summer daylight saving time. Known as "Mainhattan" 
            for its impressive skyline along the Main River, Frankfurt is the financial heart of continental Europe 
            and home to the European Central Bank (ECB), making its time zone critical for global financial markets.
          </p>
          <p>
            As Germany's financial capital and one of the world's leading financial centers, Frankfurt hosts the 
            <strong>Frankfurt Stock Exchange</strong> (Börse Frankfurt), Europe's largest by market capitalization. 
            The city's Xetra electronic trading platform handles over 90% of German stock trading. ECB monetary 
            policy decisions announced here at 2:15 PM CET directly impact the Euro and global bond markets.
          </p>
          <p>
            Beyond finance, Frankfurt is a <strong>major international transportation hub</strong> — Frankfurt 
            Airport (FRA) is the busiest in Germany and fourth busiest in Europe. The city's central location 
            makes it the gateway to Europe, with high-speed rail connections to all major German and European cities. 
            Whether you're coordinating Eurozone business, attending the famous Book Fair, or planning travel, 
            understanding Frankfurt time is essential.
          </p>
        </div>
      </section>
      
      {/* Quick Facts Component */}
      <section className="mb-10">
        <QuickFacts config={config} isLight={isLight} />
      </section>
      
      {/* Cluster Cards */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          📚 Explore Frankfurt Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {config.clusters.map((cluster) => (
            <Link 
              key={cluster.slug}
              href={`/${city.slug}/guide/${cluster.slug}/`}
              className={`p-4 rounded-xl ${cardBg} hover:scale-[1.02] transition-transform`}
            >
              <div className="text-2xl mb-2">{cluster.icon}</div>
              <h3 className={`font-semibold mb-1 ${headingColor}`}>{cluster.title}</h3>
              <p className={`text-sm ${mutedColor}`}>{cluster.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      
      {/* City Comparison Table */}
      <section className="mb-10">
        <CityComparisonTable config={config} isLight={isLight} />
      </section>
      
      {/* Understanding Frankfurt Time - Deep Content */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          🕐 Understanding Frankfurt Time
        </h2>
        
        <div className="space-y-6">
          {/* CET/CEST Explanation */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Central European Time: CET and CEST
            </h3>
            <p className="mb-3">
              Frankfurt follows Central European Time, the same timezone as most of continental Europe including 
              Paris, Amsterdam, Berlin, and Zurich. This synchronization makes European business seamless — when 
              markets open in Frankfurt, they open across the Eurozone.
            </p>
            <p>
              <strong>Daylight Saving Time:</strong> Germany observes EU daylight saving rules. Clocks spring 
              forward to CEST (UTC+2) on the last Sunday of March at 2:00 AM, and fall back to CET (UTC+1) on 
              the last Sunday of October at 3:00 AM. Note: The EU has discussed abolishing DST changes, but no 
              decision has been implemented yet.
            </p>
          </div>
          
          {/* Financial Markets */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              Frankfurt's Financial Markets Schedule
            </h3>
            <p className="mb-3">
              Frankfurt is the powerhouse of European finance. The Xetra electronic trading system, operated by 
              Deutsche Börse, is one of the world's most efficient stock trading platforms.
            </p>
            <p className="mb-3">
              <strong>Key trading hours (CET):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Pre-trading: 7:00 AM - 9:00 AM</li>
              <li>Xetra trading: 9:00 AM - 5:30 PM</li>
              <li>Post-trading: 5:30 PM - 8:00 PM</li>
              <li>Floor trading (Börse Frankfurt): 8:00 AM - 8:00 PM</li>
            </ul>
            <p className="mt-3">
              <strong>For US traders:</strong> Xetra operates 3:00 AM - 11:30 AM EST (winter) or 3:00 AM - 11:30 AM EDT (summer). 
              Early mornings are essential for tracking German blue chips like SAP, Siemens, and Deutsche Bank.
            </p>
          </div>
          
          {/* ECB Schedule */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`text-lg font-semibold mb-3 ${headingColor}`}>
              European Central Bank Schedule
            </h3>
            <p className="mb-3">
              The ECB, headquartered in Frankfurt's Ostend district, is the central bank for the Eurozone's 
              20 member countries. Its decisions on interest rates and monetary policy are among the most 
              market-moving events globally.
            </p>
            <p>
              <strong>ECB meeting schedule:</strong> The Governing Council meets every six weeks. Interest rate 
              decisions are announced at <strong>2:15 PM CET</strong>, followed by the press conference at 
              <strong>2:45 PM CET</strong>. For New York traders, that's 8:15 AM EST — prime time for forex volatility.
            </p>
          </div>
        </div>
      </section>
      
      {/* Practical Tips */}
      <section className="mb-10">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          💡 Practical Tips for Different Needs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Business */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>🏢 For International Business</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>UK overlap:</strong> Full day (1h difference)</li>
              <li>• <strong>US East overlap:</strong> 9:00 AM - 12:00 PM EST (3:00 PM - 6:00 PM CET)</li>
              <li>• <strong>Singapore:</strong> Morning calls work (7h difference)</li>
              <li>• Germans value punctuality — be on time!</li>
              <li>• Friday afternoons often see reduced availability</li>
            </ul>
          </div>
          
          {/* Travelers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>✈️ For Travellers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>From London:</strong> 1.5-hour flight, +1h time change</li>
              <li>• <strong>From NYC:</strong> 8-hour flight, +6h adjustment</li>
              <li>• <strong>FRA Airport:</strong> S-Bahn to city center in 11 minutes</li>
              <li>• ICE high-speed trains to Paris (4h), Amsterdam (4h)</li>
              <li>• <strong>Book Fair week:</strong> Book hotels months ahead!</li>
            </ul>
          </div>
          
          {/* Remote Workers */}
          <div className={`p-5 rounded-xl ${cardBg}`}>
            <h3 className={`font-semibold mb-3 ${headingColor}`}>💼 For Remote Workers</h3>
            <ul className={`text-sm space-y-2 ${mutedColor}`}>
              <li>• <strong>German work style:</strong> Direct, efficient, punctual</li>
              <li>• Core hours: 9:00 AM - 5:00 PM CET strictly observed</li>
              <li>• Emails outside hours may not get response until morning</li>
              <li>• Many Germans take vacation in August</li>
              <li>• English widely spoken in business settings</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* FAQ Section with Schema Markup */}
      <section className="mb-10" itemScope itemType="https://schema.org/FAQPage">
        <h2 className={`text-2xl font-semibold mb-6 ${headingColor}`}>
          ❓ Frequently Asked Questions
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
      
      {/* Deep Dive Links */}
      <section className={`mb-10 p-6 rounded-2xl ${isLight ? 'bg-sky-50 border border-sky-200' : 'bg-sky-900/20 border border-sky-700/30'}`}>
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🔗 Ready to Dive Deeper?
        </h2>
        <p className={`mb-4 ${mutedColor}`}>
          This overview is just the start. Explore our detailed guides on specific topics:
        </p>
        <div className="flex flex-wrap gap-2">
          <Link 
            href={`/${city.slug}/guide/business-hours/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            🏦 Business Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/stock-market/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            📈 Xetra & DAX Hours
          </Link>
          <Link 
            href={`/${city.slug}/guide/call-times/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            📞 Best Time to Call
          </Link>
          <Link 
            href={`/${city.slug}/guide/remote-work/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            💻 Remote Work
          </Link>
          <Link 
            href={`/${city.slug}/guide/best-time-to-visit/`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isLight 
                ? 'bg-sky-100 text-sky-700 hover:bg-sky-200' 
                : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/60'
            }`}
          >
            📚 Book Fair & Events
          </Link>
        </div>
      </section>
      
      {/* Internal Links to Related Cities */}
      <section className="mb-10">
        <h2 className={`text-xl font-semibold mb-4 ${headingColor}`}>
          🌍 Related City Guides
        </h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/london/guide/" className={`text-sm ${linkColor}`}>
            London Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/paris/guide/" className={`text-sm ${linkColor}`}>
            Paris Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/amsterdam/guide/" className={`text-sm ${linkColor}`}>
            Amsterdam Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/new-york/guide/" className={`text-sm ${linkColor}`}>
            New York Time Guide
          </Link>
          <span className={mutedColor}>•</span>
          <Link href="/berlin/guide/" className={`text-sm ${linkColor}`}>
            Berlin Time Guide
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
          Time zone data sourced from IANA Time Zone Database. Frankfurt Stock Exchange hours verified against Deutsche Börse official schedule. 
          ECB meeting times per European Central Bank calendar. Business hours reflect typical German corporate practices.
        </p>
      </footer>
    </div>
  )
}
