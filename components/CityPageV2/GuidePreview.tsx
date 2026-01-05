'use client'

import { useState } from 'react'
import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface GuidePreviewProps {
  city: City
}

type PreviewTab = 'overview' | 'climate' | 'visit'

export default function GuidePreview({ city }: GuidePreviewProps) {
  const { card, text, textMuted, accentText, isLight } = useThemeClasses()
  const [activeTab, setActiveTab] = useState<PreviewTab>('overview')
  
  const info = city.info
  if (!info) return null
  
  const seoContent = info.seoContent
  
  // Extract first 2-3 sentences for preview
  const getPreview = (text: string | undefined, sentences: number = 2): string => {
    if (!text) return ''
    const parts = text.split('. ')
    return parts.slice(0, sentences).join('. ') + (parts.length > sentences ? '.' : '')
  }
  
  const tabContent: Record<PreviewTab, { icon: string; title: string; content: string }> = {
    overview: {
      icon: '🌍',
      title: 'Overview',
      content: info.demographics || seoContent?.intro || `${city.city} is a major city in ${city.country}.`
    },
    climate: {
      icon: '🌡️',
      title: 'Climate',
      content: info.climate || 'Climate information not available.'
    },
    visit: {
      icon: '✈️',
      title: 'Best Time to Visit',
      content: seoContent?.bestTimeToVisit || 'Visit any time of year.'
    }
  }

  return (
    <section className={`rounded-2xl border ${card} overflow-hidden`}>
      {/* Header */}
      <div className="p-5 pb-0">
        <h2 className={`text-xl font-semibold mb-1 ${text}`}>
          📚 {city.city} Quick Guide
        </h2>
        <p className={`text-sm ${textMuted}`}>
          Essential info for visitors and business travelers
        </p>
      </div>
      
      {/* Tabs */}
      <div className={`px-5 mt-4 border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
        <div className="flex gap-1 -mb-px">
          {(Object.keys(tabContent) as PreviewTab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-all ${
                activeTab === tab
                  ? `${accentText} border-current`
                  : `${textMuted} border-transparent hover:border-slate-300`
              }`}
            >
              <span>{tabContent[tab].icon}</span>
              <span>{tabContent[tab].title}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-5">
        <div className={`rounded-xl p-4 ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
          <p className={`leading-relaxed ${textMuted}`}>
            {getPreview(tabContent[activeTab].content, 3)}
          </p>
        </div>
        
        {/* CTA - View Full Guide */}
        <div className="mt-4 flex justify-end">
          <a
            href={`/${city.slug}/guide/`}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
              isLight 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <span>View Full {city.city} Guide</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
