'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useCityContext } from '@/lib/CityContext'

export default function ContactContent() {
  const { theme, isLight } = useCityContext()
  
  const textMain = isLight ? 'text-slate-800' : 'text-white'
  const textMuted = isLight ? 'text-slate-600' : 'text-slate-300'
  const textSubtle = isLight ? 'text-slate-500' : 'text-slate-400'
  const cardBg = isLight ? 'bg-slate-100/80 border-slate-200' : 'bg-slate-800/50 border-slate-700'
  const cardBgLight = isLight ? 'bg-slate-50/80 border-slate-200/50' : 'bg-slate-800/30 border-slate-700/50'
  const highlightBg = isLight ? 'bg-indigo-50/50 border-indigo-200/50' : 'bg-indigo-900/30 border-indigo-700/50'
  
  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bg}`}>
      <Header />
      
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
        
        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className={`text-2xl font-semibold ${textMain} mb-6`}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className={`p-5 rounded-xl border ${cardBgLight}`}>
              <h3 className={`font-medium ${textMain} mb-2`}>How do I report an incorrect time or timezone?</h3>
              <p className={`${textMuted} text-sm`}>
                If you notice any time or timezone discrepancies, please email us with the city name, the incorrect time shown, 
                and what you believe the correct time should be. Include your timezone and any relevant details about daylight 
                saving time if applicable.
              </p>
            </div>
            
            <div className={`p-5 rounded-xl border ${cardBgLight}`}>
              <h3 className={`font-medium ${textMain} mb-2`}>Can I request a new city to be added?</h3>
              <p className={`${textMuted} text-sm`}>
                Absolutely! We're always looking to expand our coverage. Send us the city name, country, and timezone, 
                and we'll work on adding it to our database. Priority is given to larger cities and frequently requested locations.
              </p>
            </div>
            
            <div className={`p-5 rounded-xl border ${cardBgLight}`}>
              <h3 className={`font-medium ${textMain} mb-2`}>Is whattime.city available as a mobile app?</h3>
              <p className={`${textMuted} text-sm`}>
                Currently, whattime.city is a web application optimized for both desktop and mobile browsers. You can add it 
                to your home screen on most mobile devices for quick access. We're considering native apps for the future.
              </p>
            </div>
            
            <div className={`p-5 rounded-xl border ${cardBgLight}`}>
              <h3 className={`font-medium ${textMain} mb-2`}>Do you offer an API for developers?</h3>
              <p className={`${textMuted} text-sm`}>
                We don't currently offer a public API, but we're open to discussing integration possibilities for 
                legitimate use cases. Contact us with details about your project and requirements.
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className={`mt-12 p-6 rounded-xl ${cardBgLight}`}>
          <h3 className={`text-lg font-medium ${textMain} mb-4`}>Other Ways to Connect</h3>
          <p className={`${textMuted} mb-4`}>
            While email is our primary support channel, you can also:
          </p>
          <ul className={`${textMuted} space-y-2 text-sm`}>
            <li>• Bookmark our site and check back for updates and new features</li>
            <li>• Use the feedback button on any page to report issues</li>
            <li>• Share whattime.city with friends and colleagues who work across time zones</li>
          </ul>
        </div>
      </main>
      
      <Footer isLight={isLight} />
    </div>
  )
}
