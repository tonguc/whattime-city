'use client'

import { ReactNode } from 'react'

interface NarrativeSectionProps {
  title: string
  children: ReactNode
  card: string
  heading: string
  subText: string
}

export default function NarrativeSection({ title, children, card, heading, subText }: NarrativeSectionProps) {
  return (
    <div className={`${card} mt-6`}>
      <h2 className={`text-lg font-semibold mb-3 ${heading}`}>{title}</h2>
      <div className={`text-sm leading-relaxed space-y-3 ${subText}`}>
        {children}
      </div>
    </div>
  )
}
