'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cities } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const citySlug = params.city as string
  const city = cities.find(c => c.slug === citySlug)
  const { theme, isLight, time } = useCityContext()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Scroll detection for sticky bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150) // Show after scrolling 150px
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  if (!city) return null
  
  // Calculate times
  const nycTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const localTime = time
  const nycTimeStr = nycTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  const localTimeStr = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  // Calculate hour difference
  const nycOffset = -5 // EST (simplified, should use actual offset)
  const localOffset = -localTime.getTimezoneOffset() / 60
  const hourDiff = localOffset - nycOffset
  const diffText = hourDiff === 0 ? 'Same time' : hourDiff > 0 ? `+${hourDiff}h ahead` : `${hourDiff}h behind`
  
  const guideLinks = [
    { slug: '', label: 'Overview', icon: '📖' },
    { slug: 'business-hours', label: 'Business Hours', icon: '💼' },
    { slug: 'best-time-to-visit', label: 'Best Time to Visit', icon: '🗽' },
    { slug: 'remote-work', label: 'Remote Work', icon: '💻' },
    { slug: '24-hours', label: '24 Hours', icon: '🌆' },
    { slug: 'call-times', label: 'Call Times', icon: '📞' },
    { slug: 'stock-market', label: 'Stock Market', icon: '📈' },
    { slug: 'holidays', label: 'Holidays', icon: '📅' },
    { slug: 'digital-nomad', label: 'Digital Nomad', icon: '🎒' },
    { slug: 'time-difference', label: 'Time Difference', icon: '🌐' },
    { slug: 'travel-planning', label: 'Travel', icon: '✈️' },
  ]
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />
      
      {/* Time Bar - always visible, becomes sticky on scroll */}
      <div className="sticky top-[55px] md:top-[63px] z-40 -mt-[1px]">
        <div className={`${isLight ? 'bg-amber-50' : 'bg-amber-900'} border-b ${
          isLight ? 'border-amber-200' : 'border-amber-700'
        }`}>
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 md:gap-4">
              <span className={`font-medium whitespace-nowrap ${isLight ? 'text-slate-800' : 'text-white'}`}>
                🗽 NYC: {nycTimeStr}
              </span>
              <span className="px-2 py-0.5 rounded text-xs whitespace-nowrap bg-blue-100 text-blue-700">
                {diffText}
              </span>
              <span className={`hidden md:inline ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>|</span>
              <span className={`hidden md:inline whitespace-nowrap ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                📍 You: {localTimeStr}
              </span>
            </div>
            <Link 
              href={`/${citySlug}/`}
              className={`text-xs whitespace-nowrap ml-2 ${isLight ? 'text-amber-600 hover:text-amber-700' : 'text-amber-400 hover:text-amber-300'}`}
            >
              ← {city.city}
            </Link>
          </div>
        </div>
      </div>
      
      <main className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        {/* Breadcrumb */}
        <nav className={`text-sm mb-3 md:mb-6 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href={`/${citySlug}/`} className="hover:underline">{city.city}</Link>
          <span className="mx-2">›</span>
          <span className={isLight ? 'text-slate-700' : 'text-white'}>Guide</span>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Sidebar Navigation - Collapsible on mobile */}
          <aside className="lg:w-64 flex-shrink-0">
            {/* Mobile: Collapsible menu */}
            <div className="lg:hidden mb-2">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${
                  isLight 
                    ? 'bg-white/80 text-slate-700 border border-slate-200' 
                    : 'bg-slate-800/80 text-slate-200 border border-slate-700'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>📑</span>
                  <span>NYC Guide Menu</span>
                </span>
                <span className={`transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              
              {/* Collapsible content */}
              <div className={`overflow-hidden transition-all duration-300 ${
                isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}>
                <div className={`rounded-xl p-3 ${
                  isLight ? 'bg-white/80 border border-slate-200' : 'bg-slate-800/80 border border-slate-700'
                }`}>
                  <nav className="grid grid-cols-2 gap-2">
                    {guideLinks.map(link => {
                      const href = `/${citySlug}/guide/${link.slug}`
                      return (
                        <Link
                          key={link.slug}
                          href={href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                            isLight 
                              ? 'hover:bg-slate-100 text-slate-600' 
                              : 'hover:bg-slate-700 text-slate-300'
                          }`}
                        >
                          <span>{link.icon}</span>
                          <span className="truncate">{link.label}</span>
                        </Link>
                      )
                    })}
                  </nav>
                </div>
              </div>
            </div>
            
            {/* Desktop: Vertical sticky sidebar */}
            <div className={`hidden lg:block sticky top-24 rounded-2xl p-4 ${
              isLight ? 'bg-white/60' : 'bg-slate-800/60'
            } backdrop-blur-xl border ${
              isLight ? 'border-white/50' : 'border-slate-700/50'
            }`}>
              <h3 className={`font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {city.city} Guide
              </h3>
              <nav className="space-y-1">
                {guideLinks.map(link => {
                  const href = `/${citySlug}/guide/${link.slug}`
                  return (
                    <Link
                      key={link.slug}
                      href={href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all ${
                        isLight 
                          ? 'hover:bg-slate-100 text-slate-600' 
                          : 'hover:bg-slate-700 text-slate-300'
                      }`}
                    >
                      <span>{link.icon}</span>
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
              </nav>
              
              {/* Quick Tools */}
              <div className={`mt-6 pt-4 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                <h4 className={`text-xs uppercase tracking-wide mb-3 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Quick Tools
                </h4>
                <div className="space-y-2">
                  <Link
                    href="/tools/converter/"
                    className={`block px-3 py-2 rounded-lg text-sm ${
                      isLight 
                        ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' 
                        : 'bg-amber-900/30 text-amber-400 hover:bg-amber-900/50'
                    }`}
                  >
                    🔄 Time Converter
                  </Link>
                  <Link
                    href="/tools/meeting-planner/"
                    className={`block px-3 py-2 rounded-lg text-sm ${
                      isLight 
                        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' 
                        : 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50'
                    }`}
                  >
                    📅 Meeting Planner
                  </Link>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main Content */}
          <article className={`flex-1 min-w-0 rounded-2xl p-6 md:p-8 ${
            isLight ? 'bg-white/80' : 'bg-slate-800/60'
          } backdrop-blur-xl border ${
            isLight ? 'border-white/50' : 'border-slate-700/50'
          }`}>
            {children}
          </article>
        </div>
      </main>
      
      <Footer isLight={isLight} />
    </div>
  )
}
