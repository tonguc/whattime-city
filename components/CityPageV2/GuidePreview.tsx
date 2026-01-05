'use client'

import { useState } from 'react'
import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface GuidePreviewProps {
  city: City
}

type PreviewTab = 'overview' | 'attractions' | 'transport' | 'tips' | 'emergency' | 'holidays'

export default function GuidePreview({ city }: GuidePreviewProps) {
  const { card, text, textMuted, accentText, isLight } = useThemeClasses()
  const [activeTab, setActiveTab] = useState<PreviewTab>('overview')
  
  const info = city.info
  if (!info) return null
  
  const seoContent = info.seoContent
  
  // Extract preview text (2-3 sentences)
  const getPreview = (text: string | undefined, sentences: number = 2): string => {
    if (!text) return 'Information not available.'
    const parts = text.split('. ')
    return parts.slice(0, sentences).join('. ') + (parts.length > sentences ? '...' : '')
  }
  
  const tabs: { id: PreviewTab; icon: string; label: string; content: string }[] = [
    {
      id: 'overview',
      icon: '🌍',
      label: 'Overview',
      content: info.demographics || seoContent?.intro || `${city.city} is a major city in ${city.country}.`
    },
    {
      id: 'attractions',
      icon: '🏛️',
      label: 'Attractions',
      content: info.attractions?.slice(0, 5).join(', ') + (info.attractions && info.attractions.length > 5 ? '...' : '') || 'See full guide for attractions.'
    },
    {
      id: 'transport',
      icon: '🚇',
      label: 'Transport',
      content: seoContent?.transportation || 'Transportation information in full guide.'
    },
    {
      id: 'tips',
      icon: '💡',
      label: 'Tips',
      content: seoContent?.localTips || 'Local tips available in full guide.'
    },
    {
      id: 'emergency',
      icon: '🚨',
      label: 'Emergency',
      content: seoContent?.emergencyNumbers || 'Emergency numbers in full guide.'
    },
    {
      id: 'holidays',
      icon: '📅',
      label: 'Holidays',
      content: seoContent?.publicHolidays || 'Public holidays in full guide.'
    }
  ]
  
  const activeContent = tabs.find(t => t.id === activeTab)

  return (
    <section className={`rounded-2xl border ${card} overflow-hidden mt-4`}>
      {/* Header with PREVIEW badge */}
      <div className="p-4 pb-0 flex items-start justify-between">
        <div>
          <h2 className={`text-lg font-semibold flex items-center gap-2 ${text}`}>
            📚 {city.city} Guide
          </h2>
          <p className={`text-xs mt-1 ${textMuted}`}>
            Essential info for visitors & business travelers
          </p>
        </div>
        <span className={`px-2 py-0.5 rounded text-xs font-medium uppercase tracking-wide ${
          isLight ? 'bg-amber-100 text-amber-700' : 'bg-amber-900/50 text-amber-300'
        }`}>
          Preview
        </span>
      </div>
      
      {/* Horizontal Tabs */}
      <div className={`px-4 mt-3 border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
        <div className="flex overflow-x-auto gap-1 -mb-px scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-3 py-2 text-xs font-medium border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? `${accentText} border-current`
                  : `${textMuted} border-transparent hover:border-slate-300`
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content - Compact */}
      <div className="p-4">
        <div className={`rounded-xl p-3 text-sm ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
          <p className={`leading-relaxed ${textMuted}`}>
            {getPreview(activeContent?.content, 2)}
          </p>
        </div>
        
        {/* CTA - View Full Guide */}
        <div className="mt-3 flex justify-end">
          <a
            href={`/${city.slug}/guide/`}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              isLight 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            <span>View Full Guide</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
