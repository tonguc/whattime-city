'use client'

import { useThemeClasses } from '@/lib/useThemeClasses'
import TimeConverter from '@/components/TimeConverter'

interface ConverterSectionProps {
  currentCitySlug: string
}

export default function ConverterSection({ currentCitySlug }: ConverterSectionProps) {
  const { text, textMuted, isLight } = useThemeClasses()

  return (
    <section className={`rounded-2xl p-4 md:p-5 mt-4 border-2 ${
      isLight 
        ? 'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200' 
        : 'bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-blue-700/50'
    }`}>
      {/* Section Header */}
      <div className="mb-4">
        <h2 className={`text-lg font-semibold flex items-center gap-2 ${text}`}>
          🔄 Compare Time Between Cities
        </h2>
        <p className={`text-sm mt-1 ${textMuted}`}>
          Select cities to see current time differences
        </p>
      </div>
      
      {/* Converter Widget */}
      <TimeConverter currentCitySlug={currentCitySlug} />
    </section>
  )
}
