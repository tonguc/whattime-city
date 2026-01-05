'use client'

import { useThemeClasses } from '@/lib/useThemeClasses'

interface CityGuideConfig {
  slug: string
  emoji: string
  title: string
  description: string
  colorLight: string
  colorDark: string
  buttonColor: string
}

const CITY_GUIDES: CityGuideConfig[] = [
  // AMERICAS
  {
    slug: 'new-york',
    emoji: '🗽',
    title: 'NYC Time Guide',
    description: 'Wall Street hours, holidays, best times to visit & more',
    colorLight: 'bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 hover:border-amber-400',
    colorDark: 'bg-gradient-to-r from-amber-900/50 to-orange-900/50 border-2 border-amber-600 hover:border-amber-500',
    buttonColor: 'bg-amber-500 group-hover:bg-amber-600 dark:group-hover:bg-amber-400'
  },
  {
    slug: 'los-angeles',
    emoji: '🎬',
    title: 'LA Time Guide',
    description: 'Hollywood hours, beach life, California culture & more',
    colorLight: 'bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-300 hover:border-purple-400',
    colorDark: 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-600 hover:border-purple-500',
    buttonColor: 'bg-purple-500 group-hover:bg-purple-600 dark:group-hover:bg-purple-400'
  },
  {
    slug: 'chicago',
    emoji: '🌬️',
    title: 'Chicago Time Guide',
    description: 'CME hours, deep dish, Windy City business & more',
    colorLight: 'bg-gradient-to-r from-blue-100 to-slate-100 border-2 border-blue-300 hover:border-blue-400',
    colorDark: 'bg-gradient-to-r from-blue-900/50 to-slate-900/50 border-2 border-blue-600 hover:border-blue-500',
    buttonColor: 'bg-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400'
  },
  {
    slug: 'toronto',
    emoji: '🍁',
    title: 'Toronto Time Guide',
    description: 'TSX hours, Canadian holidays, multicultural hub & more',
    colorLight: 'bg-gradient-to-r from-red-100 to-rose-100 border-2 border-red-300 hover:border-red-400',
    colorDark: 'bg-gradient-to-r from-red-900/50 to-rose-900/50 border-2 border-red-600 hover:border-red-500',
    buttonColor: 'bg-red-500 group-hover:bg-red-600 dark:group-hover:bg-red-400'
  },
  {
    slug: 'sao-paulo',
    emoji: '🇧🇷',
    title: 'São Paulo Time Guide',
    description: 'B3 Bovespa hours, Carnival, Brazilian business & more',
    colorLight: 'bg-gradient-to-r from-green-100 to-yellow-100 border-2 border-green-300 hover:border-green-400',
    colorDark: 'bg-gradient-to-r from-green-900/50 to-yellow-900/50 border-2 border-green-600 hover:border-green-500',
    buttonColor: 'bg-green-500 group-hover:bg-green-600 dark:group-hover:bg-green-400'
  },
  // EUROPE
  {
    slug: 'london',
    emoji: '🇬🇧',
    title: 'London Time Guide',
    description: 'LSE hours, UK holidays, best times to visit & more',
    colorLight: 'bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300 hover:border-blue-400',
    colorDark: 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-2 border-blue-600 hover:border-blue-500',
    buttonColor: 'bg-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400'
  },
  {
    slug: 'paris',
    emoji: '🇫🇷',
    title: 'Paris Time Guide',
    description: 'Euronext hours, café culture, French holidays & more',
    colorLight: 'bg-gradient-to-r from-blue-100 to-rose-100 border-2 border-blue-300 hover:border-blue-400',
    colorDark: 'bg-gradient-to-r from-blue-900/50 to-rose-900/50 border-2 border-blue-600 hover:border-blue-500',
    buttonColor: 'bg-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400'
  },
  {
    slug: 'berlin',
    emoji: '🇩🇪',
    title: 'Berlin Time Guide',
    description: 'German business hours, holidays, startup scene & more',
    colorLight: 'bg-gradient-to-r from-slate-100 to-yellow-100 border-2 border-slate-300 hover:border-slate-400',
    colorDark: 'bg-gradient-to-r from-slate-900/50 to-yellow-900/50 border-2 border-slate-600 hover:border-slate-500',
    buttonColor: 'bg-slate-500 group-hover:bg-slate-600 dark:group-hover:bg-slate-400'
  },
  {
    slug: 'frankfurt',
    emoji: '🏦',
    title: 'Frankfurt Time Guide',
    description: 'ECB hours, Xetra trading, German finance hub & more',
    colorLight: 'bg-gradient-to-r from-blue-100 to-slate-100 border-2 border-blue-300 hover:border-blue-400',
    colorDark: 'bg-gradient-to-r from-blue-900/50 to-slate-900/50 border-2 border-blue-600 hover:border-blue-500',
    buttonColor: 'bg-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400'
  },
  {
    slug: 'amsterdam',
    emoji: '🇳🇱',
    title: 'Amsterdam Time Guide',
    description: 'Euronext hours, Dutch culture, canal city life & more',
    colorLight: 'bg-gradient-to-r from-orange-100 to-blue-100 border-2 border-orange-300 hover:border-orange-400',
    colorDark: 'bg-gradient-to-r from-orange-900/50 to-blue-900/50 border-2 border-orange-600 hover:border-orange-500',
    buttonColor: 'bg-orange-500 group-hover:bg-orange-600 dark:group-hover:bg-orange-400'
  },
  // MENA
  {
    slug: 'dubai',
    emoji: '🇦🇪',
    title: 'Dubai Time Guide',
    description: 'DFM hours, Ramadan, Friday weekend & more',
    colorLight: 'bg-gradient-to-r from-emerald-100 to-teal-100 border-2 border-emerald-300 hover:border-emerald-400',
    colorDark: 'bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border-2 border-emerald-600 hover:border-emerald-500',
    buttonColor: 'bg-emerald-500 group-hover:bg-emerald-600 dark:group-hover:bg-emerald-400'
  },
  {
    slug: 'istanbul',
    emoji: '🇹🇷',
    title: 'Istanbul Time Guide',
    description: 'BIST hours, Turkish holidays, bridge between continents & more',
    colorLight: 'bg-gradient-to-r from-red-100 to-rose-100 border-2 border-red-300 hover:border-red-400',
    colorDark: 'bg-gradient-to-r from-red-900/50 to-rose-900/50 border-2 border-red-600 hover:border-red-500',
    buttonColor: 'bg-red-500 group-hover:bg-red-600 dark:group-hover:bg-red-400'
  },
  // ASIA
  {
    slug: 'tokyo',
    emoji: '🇯🇵',
    title: 'Tokyo Time Guide',
    description: 'TSE hours, Golden Week, cherry blossoms & more',
    colorLight: 'bg-gradient-to-r from-rose-100 to-pink-100 border-2 border-rose-300 hover:border-rose-400',
    colorDark: 'bg-gradient-to-r from-rose-900/50 to-pink-900/50 border-2 border-rose-600 hover:border-rose-500',
    buttonColor: 'bg-rose-500 group-hover:bg-rose-600 dark:group-hover:bg-rose-400'
  },
  {
    slug: 'singapore',
    emoji: '🇸🇬',
    title: 'Singapore Time Guide',
    description: 'SGX hours, hawker times, CNY & more',
    colorLight: 'bg-gradient-to-r from-red-100 to-rose-100 border-2 border-red-300 hover:border-red-400',
    colorDark: 'bg-gradient-to-r from-red-900/50 to-rose-900/50 border-2 border-red-600 hover:border-red-500',
    buttonColor: 'bg-red-500 group-hover:bg-red-600 dark:group-hover:bg-red-400'
  },
  {
    slug: 'hong-kong',
    emoji: '🇭🇰',
    title: 'Hong Kong Time Guide',
    description: 'HKEX hours, dim sum timing, Asia finance hub & more',
    colorLight: 'bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 hover:border-red-400',
    colorDark: 'bg-gradient-to-r from-red-900/50 to-pink-900/50 border-2 border-red-600 hover:border-red-500',
    buttonColor: 'bg-red-500 group-hover:bg-red-600 dark:group-hover:bg-red-400'
  },
  {
    slug: 'shanghai',
    emoji: '🇨🇳',
    title: 'Shanghai Time Guide',
    description: 'SSE hours, Chinese holidays, Bund nightlife & more',
    colorLight: 'bg-gradient-to-r from-red-100 to-yellow-100 border-2 border-red-300 hover:border-red-400',
    colorDark: 'bg-gradient-to-r from-red-900/50 to-yellow-900/50 border-2 border-red-600 hover:border-red-500',
    buttonColor: 'bg-red-500 group-hover:bg-red-600 dark:group-hover:bg-red-400'
  },
  {
    slug: 'seoul',
    emoji: '🇰🇷',
    title: 'Seoul Time Guide',
    description: 'KRX hours, K-culture, Korean business etiquette & more',
    colorLight: 'bg-gradient-to-r from-blue-100 to-red-100 border-2 border-blue-300 hover:border-blue-400',
    colorDark: 'bg-gradient-to-r from-blue-900/50 to-red-900/50 border-2 border-blue-600 hover:border-blue-500',
    buttonColor: 'bg-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400'
  },
  {
    slug: 'mumbai',
    emoji: '🇮🇳',
    title: 'Mumbai Time Guide',
    description: 'BSE/NSE hours, Bollywood, IST timezone & more',
    colorLight: 'bg-gradient-to-r from-orange-100 to-green-100 border-2 border-orange-300 hover:border-orange-400',
    colorDark: 'bg-gradient-to-r from-orange-900/50 to-green-900/50 border-2 border-orange-600 hover:border-orange-500',
    buttonColor: 'bg-orange-500 group-hover:bg-orange-600 dark:group-hover:bg-orange-400'
  },
  {
    slug: 'bangkok',
    emoji: '🇹🇭',
    title: 'Bangkok Time Guide',
    description: 'SET hours, Songkran, digital nomad paradise & more',
    colorLight: 'bg-gradient-to-r from-blue-100 to-red-100 border-2 border-blue-300 hover:border-blue-400',
    colorDark: 'bg-gradient-to-r from-blue-900/50 to-red-900/50 border-2 border-blue-600 hover:border-blue-500',
    buttonColor: 'bg-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400'
  },
  // OCEANIA
  {
    slug: 'sydney',
    emoji: '🦘',
    title: 'Sydney Time Guide',
    description: 'ASX hours, beach culture, Aussie holidays & more',
    colorLight: 'bg-gradient-to-r from-sky-100 to-cyan-100 border-2 border-sky-300 hover:border-sky-400',
    colorDark: 'bg-gradient-to-r from-sky-900/50 to-cyan-900/50 border-2 border-sky-600 hover:border-sky-500',
    buttonColor: 'bg-sky-500 group-hover:bg-sky-600 dark:group-hover:bg-sky-400'
  }
]

interface CityGuideCardProps {
  citySlug: string
}

export default function CityGuideCard({ citySlug }: CityGuideCardProps) {
  const { text, textMuted, isLight } = useThemeClasses()
  
  const guide = CITY_GUIDES.find(g => g.slug === citySlug)
  
  if (!guide) return null
  
  return (
    <a 
      href={`/${guide.slug}/guide/`}
      className={`group rounded-2xl p-4 flex items-center gap-3 col-span-2 md:col-span-4 transition-all hover:scale-[1.01] hover:shadow-lg ${
        isLight ? guide.colorLight : guide.colorDark
      }`}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? 'bg-white/80' : 'bg-slate-800/80'}`}>
        <span className="text-2xl">{guide.emoji}</span>
      </div>
      <div className="flex-1">
        <div className={`font-bold ${text}`}>{guide.title}</div>
        <div className={`text-sm ${textMuted}`}>
          {guide.description}
        </div>
      </div>
      <div className={`px-4 py-2 rounded-full text-sm font-medium text-white transition-all ${guide.buttonColor}`}>
        Explore →
      </div>
    </a>
  )
}

// Export for checking if city has guide
export function hasCityGuide(citySlug: string): boolean {
  return CITY_GUIDES.some(g => g.slug === citySlug)
}
