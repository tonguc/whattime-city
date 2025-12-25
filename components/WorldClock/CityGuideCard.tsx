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
  {
    slug: 'new-york',
    emoji: '📖',
    title: 'NYC Time Guide',
    description: 'Business hours, holidays, best times to visit & more',
    colorLight: 'bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 hover:border-amber-400',
    colorDark: 'bg-gradient-to-r from-amber-900/50 to-orange-900/50 border-2 border-amber-600 hover:border-amber-500',
    buttonColor: 'bg-amber-500 group-hover:bg-amber-600 dark:group-hover:bg-amber-400'
  },
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
    slug: 'tokyo',
    emoji: '🇯🇵',
    title: 'Tokyo Time Guide',
    description: 'TSE hours, Golden Week, cherry blossoms & more',
    colorLight: 'bg-gradient-to-r from-rose-100 to-pink-100 border-2 border-rose-300 hover:border-rose-400',
    colorDark: 'bg-gradient-to-r from-rose-900/50 to-pink-900/50 border-2 border-rose-600 hover:border-rose-500',
    buttonColor: 'bg-rose-500 group-hover:bg-rose-600 dark:group-hover:bg-rose-400'
  },
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
    slug: 'singapore',
    emoji: '🇸🇬',
    title: 'Singapore Time Guide',
    description: 'SGX hours, hawker times, CNY & more',
    colorLight: 'bg-gradient-to-r from-red-100 to-rose-100 border-2 border-red-300 hover:border-red-400',
    colorDark: 'bg-gradient-to-r from-red-900/50 to-rose-900/50 border-2 border-red-600 hover:border-red-500',
    buttonColor: 'bg-red-500 group-hover:bg-red-600 dark:group-hover:bg-red-400'
  },
  {
    slug: 'paris',
    emoji: '🇫🇷',
    title: 'Paris Time Guide',
    description: 'Euronext hours, café culture, French holidays & more',
    colorLight: 'bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300 hover:border-blue-400',
    colorDark: 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border-2 border-blue-600 hover:border-blue-500',
    buttonColor: 'bg-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400'
  },
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
  isLight: boolean
}

export default function CityGuideCard({ citySlug, isLight }: CityGuideCardProps) {
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
        <div className={`font-bold ${isLight ? 'text-slate-800' : 'text-white'}`}>{guide.title}</div>
        <div className={`text-sm ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
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
