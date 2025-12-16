'use client'

import Link from 'next/link'
import { Theme } from '@/lib/themes'

interface HeaderProps {
  isLight: boolean
  theme: Theme
  showSearch?: boolean
  searchComponent?: React.ReactNode
  currentPage?: 'home' | 'tools' | 'tool-detail'
}

/**
 * Shared Header Component - used by ALL pages
 * 
 * STABLE 3-ZONE STRUCTURE:
 * [LEFT: Logo - fixed width] [CENTER: Search - flex-1] [RIGHT: Nav - fixed width]
 * 
 * This component NEVER changes structure between pages.
 * Only content within zones may vary.
 */
export default function Header({ 
  isLight, 
  theme, 
  showSearch = false,
  searchComponent,
  currentPage = 'home'
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 mb-6 py-3 -mx-4 px-4 backdrop-blur-xl">
      {/* LEFT ZONE: Logo - fixed width basis */}
      <div className="flex-shrink-0 w-[140px] sm:w-[160px]">
        <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
          <img 
            src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
            alt="whattime.city" 
            className="h-11 sm:h-14"
          />
        </Link>
      </div>

      {/* CENTER ZONE: Search - flex-1 (always present for spacing) */}
      <div className="flex-1 flex justify-center">
        {showSearch && searchComponent ? (
          searchComponent
        ) : (
          // Invisible placeholder to maintain spacing
          <div className="w-0" />
        )}
      </div>

      {/* RIGHT ZONE: Navigation - fixed width basis */}
      <div className="flex-shrink-0 w-[140px] sm:w-[160px] flex justify-end">
        <nav className="flex items-center gap-2 sm:gap-3">
          {currentPage !== 'home' && (
            <Link 
              href="/"
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isLight ? 'text-slate-600 hover:bg-white/60' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              World Clock
            </Link>
          )}
          {currentPage === 'home' && (
            <Link 
              href="/tools"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all ${
                isLight 
                  ? 'bg-white/60 text-slate-600 hover:bg-white/80' 
                  : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
              } backdrop-blur-xl`}
              title="Tools"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
            </Link>
          )}
          {(currentPage === 'tools' || currentPage === 'tool-detail') && (
            <Link 
              href="/tools"
              className={`px-3 sm:px-4 py-2 rounded-full text-sm font-medium ${theme.accentBg} text-white`}
            >
              Tools
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
