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
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Our Tools</h2>
            <p className={`${textMuted} mb-4`}>
              Beyond simple time checking, we offer a suite of specialized tools designed for international coordination:
            </p>
            <ul className={`${textMuted} space-y-3`}>
              <li><strong>Time Converter:</strong> Instantly convert any time between two cities. Perfect for scheduling calls and deadlines across time zones.</li>
              <li><strong>Meeting Planner:</strong> Find the best meeting time for participants in multiple cities by visualizing overlapping business hours.</li>
              <li><strong>Flight Time Calculator:</strong> Calculate your arrival time in local time when traveling across time zones.</li>
              <li><strong>Jet Lag Advisor:</strong> Get personalized recommendations for adjusting to a new time zone based on your travel route.</li>
              <li><strong>Event Time Converter:</strong> Share event times that automatically display in each viewer's local time zone.</li>
              <li><strong>World Alarm:</strong> Set alarms based on any city's local time, perfect for international deadlines.</li>
            </ul>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Technology</h2>
            <p className={textMuted}>
              whattime.city is built with modern web technologies to ensure fast loading times and a smooth user experience on any device. Our sunrise and sunset calculations use astronomical algorithms for precise timing based on geographic coordinates. Weather data is updated regularly from reliable meteorological sources.
            </p>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className={`font-medium ${textMain} mb-1`}>How accurate is the time displayed?</h3>
                <p className={`${textMuted} text-sm`}>
                  Our time is synchronized with your device's clock and uses the IANA Time Zone Database for accurate timezone calculations, including automatic daylight saving time adjustments.
                </p>
              </div>
              <div>
                <h3 className={`font-medium ${textMain} mb-1`}>How do you detect my location?</h3>
                <p className={`${textMuted} text-sm`}>
                  We use your IP address to approximate your location and display relevant local time. We don't store or share your location data.
                </p>
              </div>
              <div>
                <h3 className={`font-medium ${textMain} mb-1`}>Can I embed a clock on my website?</h3>
                <p className={`${textMuted} text-sm`}>
                  Yes! Visit our <Link href="/widget" className="text-cyan-500 hover:underline">Widget page</Link> to generate a free, customizable clock widget for your website.
                </p>
              </div>
              <div>
                <h3 className={`font-medium ${textMain} mb-1`}>How many cities do you support?</h3>
                <p className={`${textMuted} text-sm`}>
                  We currently support over 200 major cities across all continents, with detailed information including time zones, weather, sunrise/sunset times, and more.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className={`text-2xl font-semibold ${textMain} mb-4`}>Contact Us</h2>
            <p className={textMuted}>
              Have questions, suggestions, or feedback? We'd love to hear from you! Visit our <Link href="/contact" className="text-cyan-500 hover:underline">Contact page</Link> to get in touch.
            </p>
          </section>
        </div>
      </main>
      
      <Footer isLight={isLight} />
    </div>
  )
}
