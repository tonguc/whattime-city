'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { cities, City, getTier1Cities } from '@/lib/cities'
import { getTimeOfDay } from '@/lib/sun-calculator'
import { themes } from '@/lib/themes'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'

export default function WidgetGenerator() {
  const { theme: pageTheme, isLight, time } = useCityContext()
  const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [copied, setCopied] = useState(false)
  
  // Widget options
  const [widgetTheme, setWidgetTheme] = useState<'auto' | 'light' | 'dark'>('auto')
  const [widgetSize, setWidgetSize] = useState<'small' | 'medium' | 'large'>('medium')
  const [showDate, setShowDate] = useState(true)
  const [showTimezone, setShowTimezone] = useState(true)
  const [transparent, setTransparent] = useState(false)
  
  // Initialize with first city
  useEffect(() => {
    if (!selectedCity) {
      setSelectedCity(cities.find(c => c.slug === 'new-york') || cities[0])
    }
  }, [selectedCity])
  
  // Filter cities based on search
  const filteredCities = useMemo(() => {
    if (!searchQuery.trim()) {
      return getTier1Cities()
    }
    const query = searchQuery.toLowerCase()
    return cities.filter(c => 
      c.city.toLowerCase().includes(query) || 
      c.country.toLowerCase().includes(query)
    ).slice(0, 10)
  }, [searchQuery])
  
  // Generate embed code
  const generateEmbedCode = () => {
    if (!selectedCity) return ''
    
    const params = new URLSearchParams()
    if (widgetTheme !== 'auto') params.set('theme', widgetTheme)
    if (widgetSize !== 'medium') params.set('size', widgetSize)
    if (!showDate) params.set('showDate', 'false')
    if (!showTimezone) params.set('showTimezone', 'false')
    if (transparent) params.set('transparent', 'true')
    
    const queryString = params.toString()
    const url = `https://whattime.city/embed/${selectedCity.slug}${queryString ? '?' + queryString : ''}`
    
    // Determine iframe dimensions based on size
    const dimensions = {
      small: { width: 200, height: 130 },
      medium: { width: 280, height: 160 },
      large: { width: 400, height: 200 }
    }
    const dim = dimensions[widgetSize]
    
    return `<iframe src="${url}" width="${dim.width}" height="${dim.height}" frameborder="0" style="border-radius: 16px; overflow: hidden;"></iframe>`
  }
  
  const embedCode = generateEmbedCode()
  
  // Copy to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(embedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback
      const textarea = document.createElement('textarea')
      textarea.value = embedCode
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }
  
  // Preview URL
  const previewUrl = selectedCity 
    ? `/embed/${selectedCity.slug}?theme=${widgetTheme}&size=${widgetSize}&showDate=${showDate}&showTimezone=${showTimezone}&transparent=${transparent}`
    : ''
  
  return (
    <div className={`min-h-screen transition-colors duration-700 bg-gradient-to-br ${pageTheme.bg}`}>
      {/* Shared Header */}
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className={`text-3xl sm:text-4xl font-bold mb-3 ${isLight ? 'text-slate-800' : 'text-white'}`}>
            Free Clock Widget
          </h1>
          <p className={`text-lg ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
            Add a beautiful live clock to your website or blog
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Options */}
          <div className={`p-6 rounded-3xl backdrop-blur-xl border ${
            isLight ? 'bg-white/50 border-white/60' : 'bg-slate-800/50 border-slate-700/60'
          }`}>
            <h2 className={`text-xl font-semibold mb-6 ${isLight ? 'text-slate-800' : 'text-white'}`}>
              Customize Your Widget
            </h2>
            
            {/* City Selection */}
            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Select City
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery || selectedCity?.city || ''}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setShowDropdown(true)
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search cities..."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    isLight 
                      ? 'bg-white border-slate-200 text-slate-800 placeholder-slate-400'
                      : 'bg-slate-700 border-slate-600 text-white placeholder-slate-400'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                
                {showDropdown && (
                  <div className={`absolute top-full left-0 right-0 mt-1 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto ${
                    isLight ? 'bg-white border border-slate-200' : 'bg-slate-700 border border-slate-600'
                  }`}>
                    {filteredCities.map(city => (
                      <button
                        key={city.slug}
                        onClick={() => {
                          setSelectedCity(city)
                          setSearchQuery('')
                          setShowDropdown(false)
                        }}
                        className={`w-full px-4 py-3 text-left transition-colors ${
                          isLight 
                            ? 'hover:bg-slate-100 text-slate-800'
                            : 'hover:bg-slate-600 text-white'
                        } ${selectedCity?.slug === city.slug ? (isLight ? 'bg-blue-50' : 'bg-blue-900/30') : ''}`}
                      >
                        <span className="font-medium">{city.city}</span>
                        <span className={`ml-2 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                          {city.country}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Theme Selection */}
            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Theme
              </label>
              <div className="flex gap-2">
                {(['auto', 'light', 'dark'] as const).map(t => (
                  <button
                    key={t}
                    onClick={() => setWidgetTheme(t)}
                    className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all ${
                      widgetTheme === t
                        ? 'bg-blue-500 text-white'
                        : isLight
                          ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {t === 'auto' ? '🌓 Auto' : t === 'light' ? '☀️ Light' : '🌙 Dark'}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                Size
              </label>
              <div className="flex gap-2">
                {(['small', 'medium', 'large'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setWidgetSize(s)}
                    className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all capitalize ${
                      widgetSize === s
                        ? 'bg-blue-500 text-white'
                        : isLight
                          ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Options */}
            <div className="space-y-3">
              <label className={`flex items-center gap-3 cursor-pointer ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <input
                  type="checkbox"
                  checked={showDate}
                  onChange={(e) => setShowDate(e.target.checked)}
                  className="w-5 h-5 rounded accent-blue-500"
                />
                Show Date
              </label>
              
              <label className={`flex items-center gap-3 cursor-pointer ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <input
                  type="checkbox"
                  checked={showTimezone}
                  onChange={(e) => setShowTimezone(e.target.checked)}
                  className="w-5 h-5 rounded accent-blue-500"
                />
                Show Timezone
              </label>
              
              <label className={`flex items-center gap-3 cursor-pointer ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
                <input
                  type="checkbox"
                  checked={transparent}
                  onChange={(e) => setTransparent(e.target.checked)}
                  className="w-5 h-5 rounded accent-blue-500"
                />
                Transparent Background
              </label>
            </div>
          </div>
          
          {/* Right: Preview & Code */}
          <div className="space-y-6">
            {/* Preview */}
            <div className={`p-6 rounded-3xl backdrop-blur-xl border ${
              isLight ? 'bg-white/50 border-white/60' : 'bg-slate-800/50 border-slate-700/60'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Preview
              </h2>
              
              <div className={`rounded-2xl overflow-hidden ${
                transparent 
                  ? (isLight ? 'bg-slate-100' : 'bg-slate-900') + ' p-4 border border-dashed ' + (isLight ? 'border-slate-300' : 'border-slate-600')
                  : ''
              }`}>
                {selectedCity && (
                  <iframe 
                    src={previewUrl}
                    width={widgetSize === 'small' ? 200 : widgetSize === 'large' ? 400 : 280}
                    height={widgetSize === 'small' ? 130 : widgetSize === 'large' ? 200 : 160}
                    className="rounded-2xl"
                    style={{ border: 'none' }}
                  />
                )}
              </div>
            </div>
            
            {/* Embed Code */}
            <div className={`p-6 rounded-3xl backdrop-blur-xl border ${
              isLight ? 'bg-white/50 border-white/60' : 'bg-slate-800/50 border-slate-700/60'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                Embed Code
              </h2>
              
              <div className={`relative rounded-xl p-4 font-mono text-sm ${
                isLight ? 'bg-slate-100 text-slate-800' : 'bg-slate-900 text-slate-200'
              }`}>
                <pre className="overflow-x-auto whitespace-pre-wrap break-all">
                  {embedCode}
                </pre>
              </div>
              
              <button
                onClick={copyToClipboard}
                className={`mt-4 w-full py-3 rounded-xl font-semibold transition-all ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {copied ? '✓ Copied!' : '📋 Copy Embed Code'}
              </button>
              
              <p className={`mt-4 text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Paste this code into your website's HTML where you want the clock to appear.
              </p>
            </div>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '🎨', title: 'Customizable', desc: 'Choose theme, size, and display options' },
            { icon: '⚡', title: 'Lightweight', desc: 'Fast loading, no impact on your site speed' },
            { icon: '🌍', title: '168 Cities', desc: 'World clocks for any city you need' }
          ].map((benefit, idx) => (
            <div key={idx} className={`p-5 rounded-2xl backdrop-blur-xl border text-center ${
              isLight ? 'bg-white/30 border-white/40' : 'bg-slate-800/30 border-slate-700/40'
            }`}>
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <h3 className={`font-semibold mb-1 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {benefit.title}
              </h3>
              <p className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className={`border-t mt-16 ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <p className={`text-sm ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} whattime.city - Free Clock Widget for Your Website
          </p>
          <div className={`flex justify-center gap-4 mt-3 text-xs ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
            <a href="/about" className="hover:underline">About</a>
            <span>•</span>
            <a href="/privacy" className="hover:underline">Privacy</a>
            <span>•</span>
            <a href="/contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
