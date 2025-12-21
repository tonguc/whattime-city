'use client'

import Link from 'next/link'

interface FooterProps {
  isLight: boolean
}

export default function Footer({ isLight }: FooterProps) {
  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'
  
  return (
    <footer className={`py-6 border-t ${isLight ? 'border-slate-200 bg-white/50' : 'border-slate-800 bg-slate-900/50'}`}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Links Row */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-3">
          <Link href="/map" className={`text-sm ${textMuted} hover:underline`}>World Map</Link>
          <Link href="/country" className={`text-sm ${textMuted} hover:underline`}>Countries</Link>
          <Link href="/tools" className={`text-sm ${textMuted} hover:underline`}>Tools</Link>
          <Link href="/widget" className={`text-sm ${textMuted} hover:underline`}>Widget</Link>
          <span className={textMuted}>|</span>
          <Link href="/about" className={`text-sm ${textMuted} hover:underline`}>About</Link>
          <Link href="/privacy" className={`text-sm ${textMuted} hover:underline`}>Privacy</Link>
          <Link href="/contact" className={`text-sm ${textMuted} hover:underline`}>Contact</Link>
        </nav>
        
        {/* Copyright Row */}
        <p className={`text-center text-sm ${textMuted}`}>© {new Date().getFullYear()} whattime.city</p>
      </div>
    </footer>
  )
}
