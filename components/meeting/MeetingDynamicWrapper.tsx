'use client'

import { ReactNode } from 'react'
import { useCityContext } from '@/lib/CityContext'

interface Props {
  children: ReactNode
}

export default function MeetingDynamicWrapper({ children }: Props) {
  const { theme, isLight } = useCityContext()
  
  return (
    <div className={`rounded-2xl p-6 mt-8 backdrop-blur-xl border relative z-10 ${theme.card}`}>
      <div className={isLight ? 'text-slate-600' : 'text-slate-300'}>
        {children}
      </div>
    </div>
  )
}
