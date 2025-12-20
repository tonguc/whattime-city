'use client'

import Link from 'next/link'

interface FooterProps {
  isLight: boolean
}

export default function Footer({ isLight }: FooterProps) {
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  
  return (
    <footer className={`mt-12 py-8 border-t ${isLight ? 'border-slate-200 bg-white/50' : 'border-slate-800 bg-slate-900/50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/map" className={`flex items-center gap-2 text-sm ${textMuted} hover:opacity-80 transition-colors group`} title="Interactive world time map">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth={2}/>
              <path strokeWidth={2} d="M2 12h20"/>
              <path strokeWidth={2} d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span className="group-hover:underline">World Map</span>
          </Link>
          <Link href="/country" className={`flex items-center gap-2 text-sm ${textMuted} hover:opacity-80 transition-colors group`} title="Browse cities by country">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <span className="group-hover:underline">Countries</span>
          </Link>
          <Link href="/tools" className={`flex items-center gap-2 text-sm ${textMuted} hover:opacity-80 transition-colors group`} title="Time zone tools">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="group-hover:underline">Tools</span>
          </Link>
          <Link href="/widget" className={`flex items-center gap-2 text-sm ${textMuted} hover:opacity-80 transition-colors group`} title="Embed a clock on your site">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="group-hover:underline">Free Widget</span>
          </Link>
        </nav>
        
        {/* Time of day legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <div className={`flex items-center gap-1.5 text-xs ${textMuted}`} title="Dawn">
            <svg className="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4 12H2M22 12h-2"/>
            </svg>
            <span>Dawn</span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs ${textMuted}`} title="Day">
            <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <span>Day</span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs ${textMuted}`} title="Dusk">
            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2"/>
            </svg>
            <span>Dusk</span>
          </div>
          <div className={`flex items-center gap-1.5 text-xs ${textMuted}`} title="Night">
            <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
            <span>Night</span>
          </div>
        </div>
        
        {/* Copyright */}
        <p className={`text-center text-sm ${textMuted}`}>
          © {new Date().getFullYear()} whattime.city
        </p>
      </div>
    </footer>
  )
}
