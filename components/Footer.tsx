'use client'

import Link from 'next/link'

interface FooterProps {
  isLight: boolean
}

export default function Footer({ isLight }: FooterProps) {
  const linkClass = `hover:underline transition-colors ${
    isLight ? 'text-slate-600 hover:text-slate-800' : 'text-slate-400 hover:text-white'
  }`
  
  const mutedClass = isLight ? 'text-slate-500' : 'text-slate-500'
  
  return (
    <footer className={`mt-12 pt-8 border-t ${isLight ? 'border-slate-200' : 'border-slate-800'}`}>
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-sm">
        <Link href="/" className={linkClass}>
          World Clock
        </Link>
        <Link href="/map" className={linkClass}>
          World Map
        </Link>
        <Link href="/country" className={linkClass}>
          Countries
        </Link>
        <Link href="/tools" className={linkClass}>
          Tools
        </Link>
        <Link href="/widget" className={linkClass}>
          Free Widget
        </Link>
      </nav>
      
      {/* Copyright */}
      <p className={`text-center text-sm ${mutedClass}`}>
        © {new Date().getFullYear()} whattime.city
      </p>
    </footer>
  )
}
