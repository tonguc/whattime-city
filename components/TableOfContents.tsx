'use client'

import { useState, useEffect } from 'react'

export interface TocItem {
  id: string
  title: string
  icon?: string
  level?: 'h2' | 'h3'
}

interface Props {
  items: TocItem[]
  title?: string
  isLight: boolean
}

export default function TableOfContents({ items, title = 'On This Page', isLight }: Props) {
  const [activeId, setActiveId] = useState<string>('')
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0
      }
    )
    
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })
    
    return () => observer.disconnect()
  }, [items])
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 160 // Account for sticky header + mobile TOC
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  const cardBg = isLight ? 'bg-white/90' : 'bg-slate-800/90'
  const borderColor = isLight ? 'border-slate-200' : 'border-slate-700'
  const textColor = isLight ? 'text-slate-600' : 'text-slate-300'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const activeColor = isLight ? 'text-amber-700 bg-amber-100 font-medium' : 'text-amber-300 bg-amber-900/50 font-medium'
  const hoverColor = isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700/50'
  
  return (
    <nav className={`sticky top-24 ${cardBg} backdrop-blur-xl rounded-xl border ${borderColor} p-4 max-h-[calc(100vh-120px)] overflow-y-auto`}>
      <h3 className={`text-sm font-semibold uppercase tracking-wide mb-3 ${headingColor}`}>
        {title}
      </h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                item.level === 'h3' ? 'pl-6' : ''
              } ${
                activeId === item.id
                  ? activeColor
                  : `${textColor} ${hoverColor}`
              }`}
            >
              <span className="flex items-center gap-2">
                {item.icon && <span>{item.icon}</span>}
                <span>{item.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// ==========================================
// MOBILE TABLE OF CONTENTS - STANDALONE
// ==========================================
export function MobileTableOfContents({ items, title = 'Jump to Section', isLight }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>('')
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0
      }
    )
    
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })
    
    return () => observer.disconnect()
  }, [items])
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 160
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsOpen(false)
    }
  }
  
  const cardBg = isLight ? 'bg-white' : 'bg-slate-800'
  const borderColor = isLight ? 'border-slate-200' : 'border-slate-700'
  const textColor = isLight ? 'text-slate-600' : 'text-slate-300'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const activeColor = isLight ? 'text-amber-700 bg-amber-100' : 'text-amber-300 bg-amber-900/50'
  const buttonBg = isLight ? 'bg-amber-50 hover:bg-amber-100' : 'bg-amber-900/30 hover:bg-amber-900/50'
  
  // Find active item for display
  const activeItem = items.find(item => item.id === activeId) || items[0]
  
  return (
    <div className={`lg:hidden mb-6 rounded-xl border ${borderColor} overflow-hidden ${cardBg}`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 flex items-center justify-between ${buttonBg} transition-colors`}
      >
        <span className="flex items-center gap-2">
          <span className="text-lg">📑</span>
          <span className={`font-medium ${headingColor}`}>{title}</span>
        </span>
        <div className="flex items-center gap-2">
          {activeItem && (
            <span className={`text-sm ${textColor} hidden sm:inline`}>
              {activeItem.icon} {activeItem.title}
            </span>
          )}
          <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${headingColor}`}>
            ▼
          </span>
        </div>
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`border-t ${borderColor} max-h-72 overflow-y-auto`}>
          <ul className="p-2 space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2 ${
                    item.level === 'h3' ? 'pl-8' : ''
                  } ${
                    activeId === item.id ? activeColor : `${textColor} hover:bg-slate-100 dark:hover:bg-slate-700`
                  }`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.title}</span>
                  {activeId === item.id && <span className="ml-auto">←</span>}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
