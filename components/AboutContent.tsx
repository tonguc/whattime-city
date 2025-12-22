'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCityContext } from '@/lib/CityContext'

export default function AboutContent() {
  const { theme, isLight } = useCityContext()
  
  const textMain = isLight ? 'text-slate-800' : 'text-white'
  const textMuted = isLight ? 'text-slate-600' : 'text-slate-300'
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className={`text-4xl font-bold ${textMain} mb-8`}>About whattime.city</h1>
        
        <div className="space-y-8">
          <p className={`text-lg ${textMuted}`}>
            whattime.city is a free, instant world clock designed to help you check the current local time in any city around the globe.
          </p>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Our Mission</h2>
            <p className={textMuted}>
              We believe checking world time should be fast, beautiful, and free. Whether you're scheduling international meetings, planning travels, or staying connected with loved ones abroad, whattime.city provides accurate, real-time information at your fingertips.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Features</h2>
            <ul className={`${textMuted} space-y-2`}>
              <li>• Real-time local time for 200+ cities worldwide</li>
              <li>• Sunrise and sunset times</li>
              <li>• Live weather information</li>
              <li>• Meeting planner for multiple time zones</li>
              <li>• Time converter between cities</li>
              <li>• Interactive world map</li>
              <li>• Free embeddable clock widget</li>
            </ul>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Accuracy</h2>
            <p className={textMuted}>
              Our time data is synchronized with reliable sources and accounts for daylight saving time changes automatically. Weather data is provided by WeatherAPI.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Free Forever</h2>
            <p className={textMuted}>
              whattime.city is completely free to use. We may display non-intrusive ads to support the service, but we'll never charge for access to our core features.
            </p>
          </section>
        </div>
      </main>
      
      <Footer isLight={isLight} />
    </div>
  )
}
