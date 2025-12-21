'use client'

import { useState, useEffect } from 'react'
import SimpleHeader from '@/components/SimpleHeader'
import Footer from '@/components/Footer'

export default function ContactContent() {
  const [isLight, setIsLight] = useState(false)
  
  useEffect(() => {
    const savedTheme = localStorage.getItem('themeMode')
    if (savedTheme === 'light') {
      setIsLight(true)
    } else if (savedTheme === 'dark') {
      setIsLight(false)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsLight(!prefersDark)
    }
  }, [])
  
  const textMain = isLight ? 'text-slate-800' : 'text-white'
  const textMuted = isLight ? 'text-slate-600' : 'text-slate-300'
  const textSubtle = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-100/80 border-slate-200' : 'bg-slate-800/50 border-slate-700'
  const cardBgLight = isLight ? 'bg-slate-50/80 border-slate-200/50' : 'bg-slate-800/30 border-slate-700/50'
  const highlightBg = isLight ? 'bg-indigo-50/50 border-indigo-200/50' : 'bg-indigo-900/30 border-indigo-700/50'
  
  return (
    <div className={`min-h-screen ${isLight 
      ? 'bg-gradient-to-br from-slate-100 via-white to-slate-100' 
      : 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950'
    }`}>
      <SimpleHeader isLight={isLight} />
      
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className={`text-4xl font-bold ${textMain} mb-8`}>Contact Us</h1>
        
        <p className={`text-lg ${textMuted} mb-8`}>
          Have a question, suggestion, or feedback? We'd love to hear from you!
        </p>
        
        <div className={`rounded-2xl p-8 border ${cardBg}`}>
          <h2 className={`text-xl font-semibold ${textMain} mb-4 flex items-center gap-3`}>
            <svg className="w-6 h-6 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Us
          </h2>
          <p className={`${textMuted} mb-4`}>
            For general inquiries, suggestions, or support:
          </p>
          <a 
            href="mailto:whattimecity@gmail.com" 
            className="text-xl text-cyan-500 hover:text-cyan-400 font-medium"
          >
            whattimecity@gmail.com
          </a>
        </div>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className={`rounded-xl p-6 border ${cardBgLight}`}>
            <h3 className={`text-lg font-medium ${textMain} mb-2`}>🐛 Bug Reports</h3>
            <p className={`${textSubtle} text-sm`}>
              Found something that's not working? Let us know and we'll fix it as soon as possible.
            </p>
          </div>
          
          <div className={`rounded-xl p-6 border ${cardBgLight}`}>
            <h3 className={`text-lg font-medium ${textMain} mb-2`}>💡 Feature Requests</h3>
            <p className={`${textSubtle} text-sm`}>
              Have an idea to make whattime.city better? We're always looking to improve.
            </p>
          </div>
          
          <div className={`rounded-xl p-6 border ${cardBgLight}`}>
            <h3 className={`text-lg font-medium ${textMain} mb-2`}>🤝 Partnerships</h3>
            <p className={`${textSubtle} text-sm`}>
              Interested in working together? Reach out to discuss opportunities.
            </p>
          </div>
          
          <div className={`rounded-xl p-6 border ${cardBgLight}`}>
            <h3 className={`text-lg font-medium ${textMain} mb-2`}>📰 Press</h3>
            <p className={`${textSubtle} text-sm`}>
              Media inquiries and press-related questions are welcome.
            </p>
          </div>
        </div>
        
        <div className={`mt-12 p-6 rounded-xl border ${highlightBg}`}>
          <h3 className={`text-lg font-medium ${textMain} mb-2`}>Response Time</h3>
          <p className={textMuted}>
            We typically respond within 24-48 hours. For urgent matters, please indicate so in your email subject line.
          </p>
        </div>
      </main>
      
      <Footer isLight={isLight} />
    </div>
  )
}
