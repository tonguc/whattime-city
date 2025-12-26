'use client'

import { City } from '@/lib/cities'
import { GuideConfig } from '@/lib/guide-content'
import Link from 'next/link'

interface Props {
  city: City
  config: GuideConfig
  isLight: boolean
  timeStr: string
}

export default function LosAngelesOverviewContent({ city, config, isLight, timeStr }: Props) {
  return (
    <>
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4">
          {config.icon} {config.cityName} Time Zone: The Complete Guide
        </h1>
        <p className="text-xl mb-8">{config.tagline}</p>
        
        {/* Current Time */}
        <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 rounded-2xl p-8 border border-orange-700/30 mb-12">
          <p className="text-sm text-orange-300 mb-1">Current {config.timezoneAbbr} Time:</p>
          <p className="text-6xl font-bold">{timeStr}</p>
        </div>

        {/* Quick Facts */}
        <div className="bg-slate-900 rounded-xl p-6 mb-8 border border-slate-800">
          <h2 className="text-2xl font-bold mb-4">⚡ Quick Facts: Los Angeles Time Zone</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Standard Time (PST):</span>
              <strong className="ml-2">UTC-8 (Nov-Mar)</strong>
            </div>
            <div>
              <span className="text-gray-400">Daylight Time (PDT):</span>
              <strong className="ml-2">UTC-7 (Mar-Nov)</strong>
            </div>
            <div>
              <span className="text-gray-400">Location:</span>
              <strong className="ml-2">California, USA</strong>
            </div>
            <div>
              <span className="text-gray-400">Difference from NYC:</span>
              <strong className="ml-2">3 hours behind</strong>
            </div>
          </div>
        </div>

        {/* Intro */}
        <div className="prose prose-invert max-w-none mb-12">
          <p className="text-lg leading-relaxed">
            Los Angeles runs on <strong>Pacific Time</strong> — 3 hours behind New York. Whether you're calling East Coast clients, 
            watching morning stock markets, or coordinating with international teams, understanding LA's time zone is essential.
          </p>
        </div>

        {/* Guide Sections */}
        <h2 className="text-3xl font-bold mb-6">Explore the Complete Guide</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {config.clusters.map((cluster) => (
            <Link
              key={cluster.slug}
              href={`/${config.citySlug}/guide/${cluster.slug}`}
              className="block group"
            >
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-orange-700 hover:bg-slate-800 transition">
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{cluster.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-400 transition">
                      {cluster.title}
                    </h3>
                    <p className="text-sm text-gray-400">{cluster.desc}</p>
                  </div>
                  <span className="text-gray-600 group-hover:text-orange-400">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2 className="text-3xl font-bold mb-6">Understanding Los Angeles Time</h2>
          
          <h3 className="text-2xl font-semibold mt-8 mb-4">PST vs PDT: What's the Difference?</h3>
          <p>
            LA uses <strong>Pacific Standard Time (PST, UTC-8)</strong> in winter and <strong>Pacific Daylight Time (PDT, UTC-7)</strong> 
            in summer. The switch happens in March (spring forward) and November (fall back).
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Why Does LA Time Matter Globally?</h3>
          <p>
            Beyond beaches and movies, LA is a major business hub. Entertainment industry, tech companies, and international trade 
            all run on Pacific Time. When Wall Street opens at 9:30 AM EST, it's only 6:30 AM in LA.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">What You'll Find in This Guide</h3>
          <p>This guide covers everything about LA time:</p>
          <ul>
            <li><strong>Business Hours:</strong> When do banks, stores, and restaurants open?</li>
            <li><strong>Best Time to Visit:</strong> Weather and crowds by month</li>
            <li><strong>Remote Work:</strong> Overlap with NYC, London, Tokyo teams</li>
            <li><strong>Stock Market:</strong> NASDAQ hours from Pacific Time perspective</li>
            <li><strong>Call Times:</strong> Best windows for international calls</li>
          </ul>
        </div>
      </div>
    </>
  )
}
