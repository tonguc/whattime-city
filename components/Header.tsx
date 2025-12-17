'use client'

import Link from 'next/link'
import { Theme } from '@/lib/themes'

interface HeaderProps {
  isLight: boolean
  theme: Theme
  searchComponent?: React.ReactNode
  rightContent?: React.ReactNode
  currentPage?: 'home' | 'tools' | 'tool-detail'
}

/**
 * Shared Header Component - used by ALL pages
 * 
 * STABLE STRUCTURE - NEVER CHANGES HEIGHT OR POSITION:
 * - Fixed height: h-[60px] on all pages
 * - Logo: always same size (h-10 sm:h-12)
 * - Search: centered, same width everywhere
 * - Nav: right-aligned, consistent spacing
 */
export default function Header({ 
  isLight, 
  theme, 
  searchComponent,
  rightContent,
  currentPage = 'home'
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 h-[60px] flex items-center justify-between gap-3 mb-6 -mx-4 px-4 backdrop-blur-xl">
      {/* LEFT: Logo - MUST match WorldClock exactly: h-11 sm:h-14 */}
      <div className="flex-shrink-0">
        <Link href="/" className="hover:opacity-80 transition-opacity inline-flex items-center">
          <img 
            src={isLight ? "/logo.svg" : "/logo-dark.svg"} 
            alt="whattime.city" 
            className="h-11 sm:h-14"
          />
        </Link>
      </div>

      {/* CENTER: Search - always present, same position */}
      <div className="flex-1 flex justify-center max-w-md mx-4">
        {searchComponent || <div className="w-full" />}
      </div>

      {/* RIGHT: Navigation - consistent on all pages */}
      <div className="flex-shrink-0 flex items-center gap-2">
        {rightContent ? (
          rightContent
        ) : (
          <nav className="flex items-center gap-2">
            {currentPage !== 'home' && (
              <Link 
                href="/"
                className={`whitespace-nowrap px-3 py-2 rounded-full text-sm font-medium transition-all ${
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
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
                <span className="hidden sm:inline">Tools</span>
              </Link>
            )}
            {(currentPage === 'tools' || currentPage === 'tool-detail') && (
              <Link 
                href="/tools"
                className={`px-3 py-2 rounded-full text-sm font-medium ${theme.accentBg} text-white`}
              >
                Tools
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
