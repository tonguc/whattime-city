'use client'

import { useParams, usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cities } from '@/lib/cities'
import { useCityContext } from '@/lib/CityContext'
import { getCityDisplayConfig } from '@/lib/cityDisplayConfig'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const params = useParams()
  const pathname = usePathname()
  const citySlug = params.city as string
  const city = cities.find(c => c.slug === citySlug)
  const { theme, isLight, time, setActiveCity } = useCityContext()
  
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Sync activeCity when navigating between different city guides
  useEffect(() => {
    if (city) {
      setActiveCity(city)
    }
  }, [city, setActiveCity])
  
  // Scroll detection for sticky bar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  if (!city) return null
  
  const cityConfig = getCityDisplayConfig(citySlug)
  const cityTime = new Date(time.toLocaleString('en-US', { timeZone: city.timezone }))
  const localTime = time
  const cityTimeStr = cityTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  const localTimeStr = localTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  
  const cityOffset = cityConfig.utcOffset
  const localOffset = -localTime.getTimezoneOffset() / 60
  const hourDiff = localOffset - cityOffset
  const diffText = hourDiff === 0 ? 'Same time' : hourDiff > 0 ? `+${hourDiff}h ahead` : `${hourDiff}h behind`
  
  const guideLinks = [
    { slug: '', label: 'Overview', icon: '📖', shortLabel: 'Overview' },
    { slug: 'time-business', label: 'Time & Business', icon: '💼', shortLabel: 'Business' },
    { slug: 'travel-guide', label: 'Travel Guide', icon: '✈️', shortLabel: 'Travel' },
    { slug: 'work-remote', label: 'Work Remote', icon: '💻', shortLabel: 'Remote' },
    { slug: 'time-zones', label: 'Time Zones', icon: '🌍', shortLabel: 'Zones' },
    { slug: '24-hours-itinerary', label: '24 Hours in City', icon: '🌆', shortLabel: '24h' },
  ]
  
  // More robust path matching - extract last segment
  const pathSegments = pathname.split('/').filter(Boolean)
  const lastSegment = pathSegments[pathSegments.length - 1] || ''
  
  // Check if we're on guide overview or a subpage
  const isGuideOverview = lastSegment === 'guide' || pathname.endsWith('/guide') || pathname.endsWith('/guide/')
  const currentSlug = isGuideOverview ? '' : lastSegment
  
  // Find active page
  const activePage = guideLinks.find(link => link.slug === currentSlug) || guideLinks[0]
  
  // Build breadcrumb items
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cities', href: '/cities/' },
    { label: city.city, href: `/${citySlug}/` },
    { label: activePage.label }
  ]
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg} transition-colors duration-300`}>
      <Header />
      
      {/* Time Bar - sticky */}
      <div className="sticky top-[53px] sm:top-[57px] z-40">
        <div className={`${isLight ? 'bg-amber-50' : 'bg-amber-900'} border-y ${
          isLight ? 'border-amber-200' : 'border-amber-700'
        } transition-colors duration-300`}>
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 md:gap-4">
              <span className={`font-medium whitespace-nowrap ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {cityConfig.icon} {cityConfig.displayName}: {cityTimeStr}
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
        
        {/* Mobile: Horizontal Scroll Navigation */}
        <div className={`lg:hidden ${isLight ? 'bg-white/95' : 'bg-slate-900/95'} backdrop-blur-sm border-b ${
          isLight ? 'border-slate-200' : 'border-slate-700'
        }`}>
          <div className="overflow-x-auto scrollbar-hide">
            <nav className="flex px-4 py-2 gap-1 min-w-max">
              {guideLinks.map(link => {
                const href = link.slug ? `/${citySlug}/guide/${link.slug}/` : `/${citySlug}/guide/`
                const isActive = link.slug === currentSlug
                
                return (
                  <Link
                    key={link.slug || 'overview'}
                    href={href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-amber-500 text-white font-semibold shadow-md'
                        : isLight 
                          ? 'text-slate-600 hover:bg-slate-100' 
                          : 'text-slate-400 hover:bg-slate-800'
                    }`}
                  >
                    <span>{link.icon}</span>
                    <span>{link.shortLabel}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </div>
      
      <main className="max-w-6xl mx-auto px-4 py-4 md:py-8">
        {/* Breadcrumb */}
        <div className="mb-4 md:mb-6">
          <Breadcrumb items={breadcrumbItems} isLight={isLight} />
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Sidebar Navigation - Desktop only */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className={`sticky top-36 rounded-2xl p-4 ${
              isLight ? 'bg-white/80' : 'bg-slate-800/80'
            } backdrop-blur-xl border ${
              isLight ? 'border-slate-200' : 'border-slate-700'
            } shadow-lg`}>
              <h3 className={`font-semibold mb-4 ${isLight ? 'text-slate-800' : 'text-white'}`}>
                {city.city} Guide
              </h3>
              <nav className="space-y-1">
                {guideLinks.map(link => {
                  const href = link.slug ? `/${citySlug}/guide/${link.slug}/` : `/${citySlug}/guide/`
                  const isActive = link.slug === currentSlug
                  
                  return (
                    <Link
                      key={link.slug || 'overview'}
                      href={href}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all ${
                        isActive
                          ? 'bg-amber-500 text-white font-semibold shadow-md'
                          : isLight 
                            ? 'hover:bg-slate-100 text-slate-600' 
                            : 'hover:bg-slate-700 text-slate-300'
                      }`}
                    >
                      <span className="text-base">{link.icon}</span>
                      <span>{link.label}</span>
                      {isActive && <span className="ml-auto">→</span>}
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
                    href="/time/"
                    className={`block px-3 py-2 rounded-lg text-sm ${
                      isLight 
                        ? 'bg-amber-50 text-amber-700 hover:bg-amber-100' 
                        : 'bg-amber-900/30 text-amber-400 hover:bg-amber-900/50'
                    }`}
                  >
                    🔄 Time Converter
                  </Link>
                  <Link
                    href="/meeting/"
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
            isLight ? 'bg-white/90' : 'bg-slate-800/80'
          } backdrop-blur-xl border ${
            isLight ? 'border-slate-200' : 'border-slate-700'
          } shadow-lg`}>
            {children}
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
