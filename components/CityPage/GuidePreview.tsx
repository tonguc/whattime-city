'use client'

import { useState } from 'react'
import { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface GuidePreviewProps {
  city: City
  weather?: any
}

type PreviewTab = 'overview' | 'attractions' | 'transport' | 'tips' | 'emergency' | 'holidays'

interface MicroCard {
  icon: string
  title: string
  value: string
  detail?: string
}

export default function GuidePreview({ city, weather }: GuidePreviewProps) {
  const { card, text, textMuted, accentText, isLight } = useThemeClasses()
  const [activeTab, setActiveTab] = useState<PreviewTab>('overview')
  
  const info = city.info
  
  // Only show for premium cities (tier 1) that have actual guide pages
  const premiumCitiesWithGuide = [
    'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore',
    'hong-kong', 'sydney', 'los-angeles', 'chicago', 'toronto',
    'frankfurt', 'amsterdam', 'berlin', 'mumbai', 'bangkok',
    'seoul', 'shanghai', 'sao-paulo', 'istanbul', 'miami'
  ]
  
  if (!info || !premiumCitiesWithGuide.includes(city.slug)) return null
  
  const seoContent = info.seoContent

  // Micro-card data per tab
  const tabMicroCards: Record<PreviewTab, MicroCard[]> = {
    overview: [
      {
        icon: '☀️',
        title: 'Best Time to Visit',
        value: getBestSeason(city),
        detail: info.climate?.split('.')[0] || 'Varied climate'
      },
      {
        icon: '💰',
        title: 'Cost Level',
        value: getCostLevel(city),
        detail: `Daily budget: ${getDailyBudget(city)}`
      },
      {
        icon: '🚇',
        title: 'Getting Around',
        value: getTransportMode(city),
        detail: getTransportDetail(city)
      }
    ],
    attractions: [
      {
        icon: '🏛️',
        title: 'Top Attraction',
        value: info.attractions?.[0] || 'Famous landmarks',
        detail: `${info.attractions?.length || 10}+ attractions`
      },
      {
        icon: '🎭',
        title: 'Culture',
        value: getCultureHighlight(city),
        detail: 'Museums, theaters, art'
      },
      {
        icon: '🌳',
        title: 'Nature',
        value: getNatureHighlight(city),
        detail: 'Parks & outdoor activities'
      }
    ],
    transport: [
      {
        icon: '✈️',
        title: 'Main Airport',
        value: getMainAirport(city),
        detail: 'International hub'
      },
      {
        icon: '🚇',
        title: 'Public Transit',
        value: getTransitSystem(city),
        detail: getTransitHours(city)
      },
      {
        icon: '🚕',
        title: 'Taxis & Rideshare',
        value: 'Uber, Lyft available',
        detail: 'Metered taxis citywide'
      }
    ],
    tips: [
      {
        icon: '💳',
        title: 'Payment',
        value: `${info.currencySymbol} ${info.currency}`,
        detail: 'Cards widely accepted'
      },
      {
        icon: '🔌',
        title: 'Power',
        value: getPlugType(city),
        detail: getVoltage(city)
      },
      {
        icon: '💬',
        title: 'Language',
        value: info.language || 'English',
        detail: 'English widely spoken'
      }
    ],
    emergency: [
      {
        icon: '🚨',
        title: 'Emergency',
        value: getEmergencyNumber(city),
        detail: 'Police, Fire, Ambulance'
      },
      {
        icon: '🏥',
        title: 'Healthcare',
        value: getHealthcareLevel(city),
        detail: '24/7 hospitals available'
      },
      {
        icon: '📞',
        title: 'Country Code',
        value: info.phoneCode || '+1',
        detail: 'International dialing'
      }
    ],
    holidays: [
      {
        icon: '🎄',
        title: 'Major Holiday',
        value: getMajorHoliday(city),
        detail: 'Banks & offices closed'
      },
      {
        icon: '📅',
        title: 'Business Days',
        value: getBusinessDays(city),
        detail: 'Standard work week'
      },
      {
        icon: '🛍️',
        title: 'Shopping',
        value: getShoppingNote(city),
        detail: 'Check local hours'
      }
    ]
  }

  const tabs: { id: PreviewTab; icon: string; label: string }[] = [
    { id: 'overview', icon: '🌍', label: 'Overview' },
    { id: 'attractions', icon: '🏛️', label: 'Attractions' },
    { id: 'transport', icon: '🚇', label: 'Transport' },
    { id: 'tips', icon: '💡', label: 'Tips' },
    { id: 'emergency', icon: '🚨', label: 'Emergency' },
    { id: 'holidays', icon: '📅', label: 'Holidays' }
  ]

  const currentCards = tabMicroCards[activeTab]

  return (
    <section className={`rounded-2xl border ${card} overflow-hidden mt-4`}>
      {/* Header with PREVIEW badge */}
      <div className="p-4 pb-0 flex items-start justify-between">
        <div>
          <h2 className={`text-lg font-semibold flex items-center gap-2 ${text}`}>
            📚 {city.city} Guide
          </h2>
          <p className={`text-xs mt-0.5 ${textMuted}`}>
            Quick facts for travelers & business
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
        <div className="flex overflow-x-auto gap-0.5 -mb-px scrollbar-hide">
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
      
      {/* Micro-Card Grid - 3 columns */}
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {currentCards.map((card, i) => (
            <div 
              key={i}
              className={`p-3 rounded-xl ${
                isLight ? 'bg-slate-50 border border-slate-100' : 'bg-slate-800/50 border border-slate-700'
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">{card.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className={`text-xs ${textMuted}`}>{card.title}</div>
                  <div className={`font-semibold text-sm truncate ${text}`}>{card.value}</div>
                  {card.detail && (
                    <div className={`text-xs mt-0.5 ${textMuted}`}>{card.detail}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA - View Full Guide + quick links */}
        <div className="mt-4 flex flex-wrap items-center gap-2 justify-between">
          <div className="flex gap-2">
            <a
              href={`/${city.slug}/guide/call-times/`}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                isLight
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-100'
                  : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              📞 Best Time to Call
            </a>
            <a
              href={`/${city.slug}/guide/holidays/`}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                isLight
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-100'
                  : 'border-slate-700 text-slate-300 hover:bg-slate-800'
              }`}
            >
              🗓 Public Holidays
            </a>
          </div>
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

// Helper functions for dynamic data
function getBestSeason(city: City): string {
  const seasons: Record<string, string> = {
    'new-york': 'Apr–Jun, Sep–Nov',
    'london': 'May–Sep',
    'tokyo': 'Mar–May, Sep–Nov',
    'paris': 'Apr–Jun, Sep–Oct',
    'dubai': 'Nov–Mar',
    'singapore': 'Feb–Apr',
    'hong-kong': 'Oct–Dec',
    'sydney': 'Sep–Nov, Mar–May',
    'los-angeles': 'Mar–May, Sep–Nov',
    'istanbul': 'Apr–May, Sep–Nov',
  }
  return seasons[city.slug] || 'Year-round'
}

function getCostLevel(city: City): string {
  const expensive = ['new-york', 'london', 'tokyo', 'paris', 'singapore', 'hong-kong', 'sydney', 'zurich']
  const moderate = ['berlin', 'amsterdam', 'seoul', 'dubai', 'los-angeles', 'chicago', 'toronto']
  if (expensive.includes(city.slug)) return 'High cost'
  if (moderate.includes(city.slug)) return 'Moderate'
  return 'Budget-friendly'
}

function getDailyBudget(city: City): string {
  const budgets: Record<string, string> = {
    'new-york': '$200–350',
    'london': '£150–250',
    'tokyo': '¥15,000–25,000',
    'paris': '€150–250',
    'dubai': 'AED 500–800',
    'singapore': 'S$200–350',
  }
  return budgets[city.slug] || '$100–200'
}

function getTransportMode(city: City): string {
  const modes: Record<string, string> = {
    'new-york': 'Subway (MTA)',
    'london': 'Tube & Bus',
    'tokyo': 'JR & Metro',
    'paris': 'Métro',
    'dubai': 'Metro & Taxi',
    'singapore': 'MRT',
    'hong-kong': 'MTR',
    'berlin': 'U-Bahn & S-Bahn',
  }
  return modes[city.slug] || 'Public transit'
}

function getTransportDetail(city: City): string {
  const details: Record<string, string> = {
    'new-york': '24/7 service available',
    'london': '5am–midnight daily',
    'tokyo': '5am–midnight, very punctual',
    'paris': '5:30am–1am daily',
  }
  return details[city.slug] || 'Efficient public transit'
}

function getCultureHighlight(city: City): string {
  const culture: Record<string, string> = {
    'new-york': 'Broadway & MoMA',
    'london': 'West End & British Museum',
    'tokyo': 'Temples & Anime',
    'paris': 'Louvre & Orsay',
  }
  return culture[city.slug] || 'Rich cultural scene'
}

function getNatureHighlight(city: City): string {
  const nature: Record<string, string> = {
    'new-york': 'Central Park',
    'london': 'Hyde Park',
    'tokyo': 'Ueno Park',
    'paris': 'Luxembourg Gardens',
    'sydney': 'Harbour & Beaches',
  }
  return nature[city.slug] || 'Parks & green spaces'
}

function getMainAirport(city: City): string {
  const airports: Record<string, string> = {
    'new-york': 'JFK / EWR / LGA',
    'london': 'Heathrow (LHR)',
    'tokyo': 'Narita / Haneda',
    'paris': 'CDG / Orly',
    'dubai': 'DXB',
    'singapore': 'Changi (SIN)',
    'hong-kong': 'HKIA',
    'sydney': 'Kingsford Smith',
  }
  return airports[city.slug] || 'International airport'
}

function getTransitSystem(city: City): string {
  const systems: Record<string, string> = {
    'new-york': 'NYC Subway',
    'london': 'London Underground',
    'tokyo': 'Tokyo Metro + JR',
    'paris': 'Paris Métro',
  }
  return systems[city.slug] || 'Metro system'
}

function getTransitHours(city: City): string {
  const hours: Record<string, string> = {
    'new-york': '24/7 operation',
    'london': '5am–midnight',
    'tokyo': '5am–midnight',
  }
  return hours[city.slug] || 'Extended hours'
}

function getPlugType(city: City): string {
  const plugs: Record<string, string> = {
    US: 'Type A/B', GB: 'Type G', DE: 'Type C/F', FR: 'Type C/E',
    JP: 'Type A/B', AU: 'Type I', CN: 'Type A/C/I', AE: 'Type G',
    SG: 'Type G', HK: 'Type G', IN: 'Type C/D/M',
  }
  return plugs[city.countryCode] || 'Type C/F'
}

function getVoltage(city: City): string {
  const voltages: Record<string, string> = {
    US: '120V, 60Hz', GB: '230V, 50Hz', DE: '230V, 50Hz',
    JP: '100V, 50/60Hz', AU: '230V, 50Hz', AE: '220V, 50Hz',
  }
  return voltages[city.countryCode] || '220-240V, 50Hz'
}

function getEmergencyNumber(city: City): string {
  const numbers: Record<string, string> = {
    US: '911', CA: '911', GB: '999', DE: '112', FR: '112',
    JP: '110 / 119', AU: '000', AE: '999', SG: '999', HK: '999',
    IN: '112', CN: '110 / 120', TR: '112', BR: '190',
  }
  return numbers[city.countryCode] || '112'
}

function getHealthcareLevel(city: City): string {
  const premium = ['new-york', 'london', 'tokyo', 'paris', 'singapore', 'sydney']
  if (premium.includes(city.slug)) return 'World-class'
  return 'Good quality'
}

function getMajorHoliday(city: City): string {
  const holidays: Record<string, string> = {
    US: 'Thanksgiving, Jul 4',
    GB: 'Christmas, Easter',
    JP: 'Golden Week, New Year',
    FR: 'Bastille Day, Aug 15',
    DE: 'Christmas, Oct 3',
    AE: 'Eid, National Day',
    CN: 'Chinese New Year',
    TR: 'Republic Day, Eid',
  }
  return holidays[city.countryCode] || 'National holidays'
}

function getBusinessDays(city: City): string {
  const arabCountries = ['AE', 'SA', 'QA', 'KW']
  if (arabCountries.includes(city.countryCode)) return 'Sun–Thu'
  return 'Mon–Fri'
}

function getShoppingNote(city: City): string {
  const notes: Record<string, string> = {
    'new-york': 'Shops open late',
    'london': 'Sunday limited',
    'tokyo': 'Open daily',
    'paris': 'Closed Sundays',
    'dubai': 'Malls until 10pm',
    'berlin': 'Closed Sundays',
  }
  return notes[city.slug] || 'Varies by area'
}
