'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes, isLightTheme } from '@/lib/themes'
import { cities } from '@/lib/cities'
import ToolsMiniNav from '@/components/ToolsMiniNav'

export default function WorldAlarmPage() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedCity, setSelectedCity] = useState(cities.find(c => c.city === 'London') || cities[0])
  const [alarmHour, setAlarmHour] = useState(9)
  const [alarmMinute, setAlarmMinute] = useState(0)
  const [userLat, setUserLat] = useState(51.51)
  const [userLng, setUserLng] = useState(-0.13)
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLat(pos.coords.latitude)
          setUserLng(pos.coords.longitude)
        },
        () => {}
      )
    }
    return () => clearInterval(timer)
  }, [])
  
  const timeOfDay = getTimeOfDay(currentTime, userLat, userLng)
  const theme = themes[timeOfDay]
  const isLight = isLightTheme(timeOfDay)

  // Get current time in selected city
  const getCityTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      timeZone: selectedCity.timezone, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit',
      hour12: true 
    })
  }

  // Calculate local alarm time
  const getLocalAlarmTime = () => {
    const now = new Date()
    const cityNow = new Date(now.toLocaleString('en-US', { timeZone: selectedCity.timezone }))
    const localNow = now
    
    const diffMs = localNow.getTime() - cityNow.getTime()
    
    const alarmInCity = new Date()
    alarmInCity.setHours(alarmHour, alarmMinute, 0, 0)
    
    const alarmLocal = new Date(alarmInCity.getTime() + diffMs)
    
    return alarmLocal.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-1000`}>
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <img 
              src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
              alt="whattime.city" 
              className="h-11 sm:h-14"
            />
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/" className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isLight ? 'text-slate-600 hover:bg-white/60' : 'text-slate-300 hover:bg-slate-800/60'
            }`}>
              World Clock
            </Link>
            <Link href="/tools" className={`px-4 py-2 rounded-full text-sm font-medium ${theme.accentBg} text-white`}>
              Tools
            </Link>
          </nav>
        </header>

        {/* Mini Navigation */}
        <ToolsMiniNav isLight={isLight} theme={theme} />

        {/* Tool Hero */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            World Alarm
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Set alarms based on any city's local time
          </p>
        </div>

        {/* Tool Interface */}
        <div className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/60 border-white/50' : 'bg-slate-800/60 border-slate-700/50'
        }`}>
          {/* City Selection */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Select City
            </label>
            <select
              value={selectedCity.city}
              onChange={(e) => setSelectedCity(cities.find(c => c.city === e.target.value) || cities[0])}
              className={`w-full px-4 py-3 rounded-xl border ${
                isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
              }`}
            >
              {cities.map(city => (
                <option key={city.city} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
            <div className={`mt-2 text-center text-lg ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Current time in {selectedCity.city}: <span className="font-semibold">{getCityTime()}</span>
            </div>
          </div>

          {/* Alarm Time */}
          <div className="mb-6">
            <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Alarm Time (in {selectedCity.city})
            </label>
            <div className="flex gap-2 max-w-xs mx-auto">
              <select
                value={alarmHour}
                onChange={(e) => setAlarmHour(parseInt(e.target.value))}
                className={`flex-1 px-3 py-3 rounded-lg border text-center text-lg ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {Array.from({ length: 24 }, (_, i) => (
                  <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                ))}
              </select>
              <span className={`flex items-center text-2xl ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>:</span>
              <select
                value={alarmMinute}
                onChange={(e) => setAlarmMinute(parseInt(e.target.value))}
                className={`flex-1 px-3 py-3 rounded-lg border text-center text-lg ${
                  isLight ? 'bg-white border-slate-200 text-slate-800' : 'bg-slate-700 border-slate-600 text-white'
                }`}
              >
                {Array.from({ length: 60 }, (_, i) => (
                  <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Result */}
          <div className={`p-4 rounded-xl text-center ${isLight ? 'bg-slate-100' : 'bg-slate-700/50'}`}>
            <div className={`text-sm mb-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Set your local alarm for:
            </div>
            <div className={`text-3xl font-bold ${theme.accentText}`}>
              {getLocalAlarmTime()}
            </div>
            <div className={`text-sm mt-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              to wake up at {alarmHour.toString().padStart(2, '0')}:{alarmMinute.toString().padStart(2, '0')} in {selectedCity.city}
            </div>
          </div>
        </div>

        {/* SEO SECTION 1: Common Use Cases */}
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Common Use Cases
          </h2>
          <ul className={`space-y-3 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Catching international flights</strong> — Wake up at the right time to check in online when booking opens.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Early morning meetings abroad</strong> — Never miss a 9 AM call with overseas colleagues.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Live event broadcasts</strong> — Set reminders for sports, concerts, or product launches in other time zones.
              </div>
            </li>
            <li className="flex gap-3">
              <span className={`${theme.accentText} mt-1`}>•</span>
              <div>
                <strong>Stock market openings</strong> — Wake up for market opens in New York, London, or Tokyo.
              </div>
            </li>
          </ul>
        </section>

        {/* SEO SECTION 2: Who Is This Tool For? */}
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Who Is This Tool For?
          </h2>
          <p className={`${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Remote workers, traders, sports fans, and global business professionals who need to be awake 
            at specific times in other cities. Instead of doing mental math, simply enter the target 
            city time and get your local alarm time instantly.
          </p>
        </section>

        {/* SEO SECTION 3: Related Tools */}
        <section className={`rounded-2xl p-6 mb-6 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Related Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/tools/converter" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Time Converter</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Quick conversions</div>
            </Link>
            <Link href="/tools/jet-lag" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Jet Lag</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Sleep adjustment tips</div>
            </Link>
            <Link href="/tools/meeting-planner" className={`p-4 rounded-xl transition-all hover:scale-[1.02] ${
              isLight ? 'bg-white/60 hover:bg-white/80' : 'bg-slate-700/60 hover:bg-slate-700/80'
            }`}>
              <div className={`text-sm font-medium ${isLight ? 'text-slate-800' : 'text-white'}`}>Meeting Planner</div>
              <div className={`text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Find overlap hours</div>
            </Link>
          </div>
        </section>

        {/* SEO SECTION 4: FAQ */}
        <section className={`rounded-2xl p-6 mb-8 backdrop-blur-xl border ${
          isLight ? 'bg-white/40 border-white/50' : 'bg-slate-800/40 border-slate-700/50'
        }`}>
          <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Frequently Asked Questions
          </h2>
          <div className={`space-y-4 ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Does this set an actual alarm on my device?
              </h3>
              <p className="text-sm">
                No, it calculates what time to set on your phone or alarm clock. Set that time in your device's alarm app.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Does it account for Daylight Saving Time?
              </h3>
              <p className="text-sm">
                Yes, all calculations automatically include current DST rules for both your location and the target city.
              </p>
            </div>
            <div>
              <h3 className={`font-medium mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                What if the target time is tomorrow in that city?
              </h3>
              <p className="text-sm">
                The calculator shows your local alarm time for the next occurrence of that time in the selected city.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`pt-6 border-t ${isLight ? 'border-slate-200/50' : 'border-slate-700/50'}`}>
          <div className="text-center">
            <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              © {new Date().getFullYear()} whattime.city — All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
