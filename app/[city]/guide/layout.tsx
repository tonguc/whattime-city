'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
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
  const { theme, isLight } = useCityContext()
  
  if (!city) return null
  
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
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className={`text-sm mb-6 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href={`/${citySlug}/`} className="hover:underline">{city.city}</Link>
          <span className="mx-2">›</span>
          <span className={isLight ? 'text-slate-700' : 'text-white'}>Guide</span>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className={`sticky top-24 rounded-2xl p-4 ${
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
