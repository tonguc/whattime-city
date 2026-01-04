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
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0
      }
    )
    
    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    })
    
    return () => observer.disconnect()
  }, [items])
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }
  
  const cardBg = isLight ? 'bg-white/80' : 'bg-slate-800/80'
  const borderColor = isLight ? 'border-slate-200' : 'border-slate-700'
  const textColor = isLight ? 'text-slate-600' : 'text-slate-300'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const activeColor = isLight ? 'text-amber-600 bg-amber-50' : 'text-amber-400 bg-amber-900/30'
  const hoverColor = isLight ? 'hover:bg-slate-50' : 'hover:bg-slate-700/50'
  
  return (
    <>
      {/* Desktop: Sticky Sidebar */}
      <nav className={`hidden lg:block sticky top-24 ${cardBg} backdrop-blur-xl rounded-xl border ${borderColor} p-4 max-h-[calc(100vh-120px)] overflow-y-auto`}>
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
      
      {/* Mobile: Collapsible ToC */}
      <MobileToC 
        items={items} 
        activeId={activeId}
        scrollToSection={scrollToSection}
        isLight={isLight}
        title={title}
      />
    </>
  )
}

// Mobile Table of Contents
function MobileToC({ items, activeId, scrollToSection, isLight, title }: {
  items: TocItem[]
  activeId: string
  scrollToSection: (id: string) => void
  isLight: boolean
  title: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  
  const cardBg = isLight ? 'bg-white' : 'bg-slate-800'
  const borderColor = isLight ? 'border-slate-200' : 'border-slate-700'
  const textColor = isLight ? 'text-slate-600' : 'text-slate-300'
  const headingColor = isLight ? 'text-slate-800' : 'text-white'
  const activeColor = isLight ? 'text-amber-600 bg-amber-50' : 'text-amber-400 bg-amber-900/30'
  
  const handleClick = (id: string) => {
    scrollToSection(id)
    setIsOpen(false)
  }
  
  return (
    <div className={`lg:hidden sticky top-[53px] sm:top-[57px] z-30 ${cardBg} border-b ${borderColor}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 flex items-center justify-between ${headingColor}`}
      >
        <span className="flex items-center gap-2 text-sm font-medium">
          <span>📑</span>
          <span>{title}</span>
        </span>
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className={`px-4 pb-4 max-h-64 overflow-y-auto border-t ${borderColor}`}>
          <ul className="space-y-1 pt-2">
            {items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleClick(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm ${
                    item.level === 'h3' ? 'pl-6' : ''
                  } ${
                    activeId === item.id ? activeColor : textColor
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
        </div>
      )}
    </div>
  )
}
