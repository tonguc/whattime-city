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
        rootMargin: '-150px 0px -70% 0px',
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
      const offset = 120
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  const cardBg = isLight ? 'bg-white' : 'bg-slate-800'
  const borderColor = isLight ? 'border-slate-200' : 'border-slate-700'
  const textColor = isLight ? 'text-slate-600' : 'text-slate-300'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const activeColor = isLight ? 'text-amber-700 bg-amber-100 font-medium' : 'text-amber-300 bg-amber-900/50 font-medium'
  const hoverColor = isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700/50'
  
  return (
    <nav className={`sticky top-24 ${cardBg} rounded-xl border ${borderColor} p-4 max-h-[calc(100vh-120px)] overflow-y-auto shadow-lg`}>
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
// MOBILE TABLE OF CONTENTS - SOLID & STABLE
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
        rootMargin: '-150px 0px -70% 0px',
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
    setIsOpen(false)
    
    // Small delay to allow dropdown to close first
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        // Calculate total header height: main header (~57px) + time bar (~40px) + TOC bar (~48px) + buffer
        const offset = 180
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }
  
  // ✅ SOLID backgrounds - no transparency!
  const containerBg = isLight ? 'bg-white' : 'bg-slate-900'
  const borderColor = isLight ? 'border-slate-200' : 'border-slate-700'
  const textColor = isLight ? 'text-slate-600' : 'text-slate-300'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const activeColor = isLight ? 'text-amber-700 bg-amber-100 font-medium' : 'text-amber-300 bg-amber-900/50 font-medium'
  const hoverBg = isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-800'
  
  // Find active item for display
  const activeItem = items.find(item => item.id === activeId) || items[0]
  
  return (
    <div className={`lg:hidden sticky top-[145px] z-30 ${containerBg} border-y ${borderColor} shadow-md -mx-6 md:-mx-8 px-4 md:px-6`}>
      {/* Toggle Button - Full Width Toolbar Style */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full py-3 flex items-center justify-between ${hoverBg} transition-colors`}
      >
        <div className="flex items-center gap-2">
          <span className="text-base">☰</span>
          <span className={`font-medium text-sm ${headingColor}`}>{title}</span>
        </div>
        <div className="flex items-center gap-2">
          {activeItem && (
            <span className={`text-xs px-2 py-1 rounded ${isLight ? 'bg-amber-100 text-amber-700' : 'bg-amber-900/50 text-amber-300'}`}>
              {activeItem.icon} {activeItem.title}
            </span>
          )}
          <span className={`transition-transform duration-200 text-xs ${isOpen ? 'rotate-180' : ''} ${textColor}`}>
            ▼
          </span>
        </div>
      </button>
      
      {/* Dropdown Menu - Also Solid */}
      {isOpen && (
        <div className={`${containerBg} border-t ${borderColor} max-h-64 overflow-y-auto pb-2`}>
          <ul className="py-1">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center gap-2 ${
                    item.level === 'h3' ? 'pl-8' : ''
                  } ${
                    activeId === item.id 
                      ? activeColor 
                      : `${textColor} ${hoverBg}`
                  }`}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span className="flex-1">{item.title}</span>
                  {activeId === item.id && (
                    <span className="text-amber-500">●</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
