'use client'

import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

type GuideTab = 'overview' | 'attractions' | 'transport' | 'tips' | 'emergency' | 'holidays'

interface UltimateGuideProps {
  city: City
  offset?: string
  guideTab: GuideTab
  onTabChange: (tab: GuideTab) => void
}

export default function UltimateGuide({ city, offset, guideTab, onTabChange }: UltimateGuideProps) {
  const { card, text, textMuted, accentText, isLight } = useThemeClasses()
  
  if (!city.info) return null

  const info = city.info
  const seoContent = info.seoContent

  return (
    <div className={`rounded-3xl backdrop-blur-xl border ${card} mt-4 overflow-hidden`}>
      {/* Header */}
      <div className="p-6 pb-0">
        <h2 className={`text-2xl font-bold mb-2 ${text}`}>
          Ultimate Guide to {city.city}
        </h2>
        <div className="flex items-center gap-4 text-sm mb-4">
          <span className={textMuted}>
            <span className="font-medium">{info.population}</span> population
          </span>
          <span className={textMuted}>•</span>
          <span className={textMuted}>{info.language}</span>
          {offset && (
            <>
              <span className={textMuted}>•</span>
              <span className={textMuted}>{offset}</span>
            </>
          )}
        </div>
      </div>
      
      {/* Horizontal Tabs */}
      <div className={`px-6 border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
        <div className="flex overflow-x-auto gap-1 -mb-px scrollbar-hide">
          <TabButton 
            active={guideTab === 'overview'} 
            onClick={() => onTabChange('overview')}
            icon="🌍" 
            label="Overview"
            accentText={accentText}
            textMuted={textMuted}
          />
          
          {info.attractions && (
            <TabButton 
              active={guideTab === 'attractions'} 
              onClick={() => onTabChange('attractions')}
              icon="🏛️" 
              label="Attractions"
              accentText={accentText}
              textMuted={textMuted}
            />
          )}
          
          {seoContent?.transportation && (
            <TabButton 
              active={guideTab === 'transport'} 
              onClick={() => onTabChange('transport')}
              icon="🚇" 
              label="Transport"
              accentText={accentText}
              textMuted={textMuted}
            />
          )}
          
          {seoContent?.localTips && (
            <TabButton 
              active={guideTab === 'tips'} 
              onClick={() => onTabChange('tips')}
              icon="💡" 
              label="Tips"
              accentText={accentText}
              textMuted={textMuted}
            />
          )}
          
          {seoContent?.emergencyNumbers && (
            <TabButton 
              active={guideTab === 'emergency'} 
              onClick={() => onTabChange('emergency')}
              icon="🚨" 
              label="Emergency"
              accentText={accentText}
              textMuted={textMuted}
            />
          )}
          
          {seoContent?.publicHolidays && (
            <TabButton 
              active={guideTab === 'holidays'} 
              onClick={() => onTabChange('holidays')}
              icon="📅" 
              label="Holidays"
              accentText={accentText}
              textMuted={textMuted}
            />
          )}
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="p-6">
        {/* Overview Tab */}
        {guideTab === 'overview' && (
          <div className="space-y-4">
            <p className={`leading-relaxed ${textMuted}`}>{info.demographics}</p>
            {info.climate && (
              <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span>🌡️</span>
                  <span className={`font-medium ${text}`}>Climate</span>
                </div>
                <p className={`text-sm ${textMuted}`}>{info.climate}</p>
              </div>
            )}
          </div>
        )}
        
        {/* Attractions Tab */}
        {guideTab === 'attractions' && info.attractions && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {info.attractions.map((attraction, i) => (
              <div key={i} className={`p-4 rounded-xl ${isLight ? 'bg-slate-50 hover:bg-slate-100' : 'bg-slate-800/50 hover:bg-slate-700/50'} transition-all`}>
                <div className={`font-medium ${text}`}>{attraction}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Transport Tab */}
        {guideTab === 'transport' && seoContent?.transportation && (
          <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
            <p className={`leading-relaxed ${textMuted}`}>{seoContent.transportation}</p>
          </div>
        )}
        
        {/* Tips Tab */}
        {guideTab === 'tips' && seoContent?.localTips && (
          <div className={`p-4 rounded-xl ${isLight ? 'bg-blue-50 border border-blue-100' : 'bg-blue-900/20 border border-blue-800/30'}`}>
            <p className={`leading-relaxed ${textMuted}`}>{seoContent.localTips}</p>
          </div>
        )}
        
        {/* Emergency Tab */}
        {guideTab === 'emergency' && seoContent?.emergencyNumbers && (
          <div className={`p-4 rounded-xl ${isLight ? 'bg-red-50 border border-red-100' : 'bg-red-900/20 border border-red-800/30'}`}>
            <p className={`leading-relaxed ${textMuted}`}>{seoContent.emergencyNumbers}</p>
          </div>
        )}
        
        {/* Holidays Tab */}
        {guideTab === 'holidays' && seoContent?.publicHolidays && (
          <div className={`p-4 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-800/50'}`}>
            <p className={`leading-relaxed ${textMuted}`}>{seoContent.publicHolidays}</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Helper component for tab buttons - receives classes as props
function TabButton({ 
  active, 
  onClick, 
  icon, 
  label,
  accentText,
  textMuted
}: { 
  active: boolean
  onClick: () => void
  icon: string
  label: string
  accentText: string
  textMuted: string
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
        active
          ? `${accentText} border-current`
          : `${textMuted} border-transparent hover:border-slate-300`
      }`}
    >
      <span>{icon}</span> {label}
    </button>
  )
}

// Export type for use in parent
export type { GuideTab }
