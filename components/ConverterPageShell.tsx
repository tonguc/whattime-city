'use client'

import { ReactNode } from 'react'
import { useCityContext } from '@/lib/CityContext'
import ContentPageWrapper from '@/components/ContentPageWrapper'
import TZPairClient, { TZPairConfig } from '@/components/TZPairClient'

interface FaqItem {
  '@type': string
  name: string
  acceptedAnswer: { '@type': string; text: string }
}

interface ExtraSection {
  title: string
  content: ReactNode
}

interface ConverterPageShellProps {
  title: string
  subtitle: ReactNode
  config: TZPairConfig
  infoTitle: string
  infoBody: ReactNode
  extraSections?: ExtraSection[]
  faqSchema: {
    '@context': string
    '@type': string
    mainEntity: FaqItem[]
  }
}

export default function ConverterPageShell({
  title,
  subtitle,
  config,
  infoTitle,
  infoBody,
  extraSections,
  faqSchema,
}: ConverterPageShellProps) {
  const { theme, isLight } = useCityContext()

  const nestedCardClass = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-700/50 bg-slate-800/50 p-4'

  const footerClass = isLight
    ? 'rounded-xl border border-slate-200 p-4 bg-slate-50 text-xs text-slate-500'
    : 'rounded-xl border border-slate-700/50 p-4 bg-slate-800/50 text-xs text-slate-400'

  return (
    <ContentPageWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${theme.text}`}>{title}</h1>
      <p className={`text-lg ${theme.textMuted} mb-6`}>{subtitle}</p>
      <TZPairClient config={config} />
      <section className="mt-4 mb-4">
        <div className={`rounded-2xl ${theme.card} p-6`}>
          <h2 className={`text-xl font-semibold ${theme.text} mb-4`}>{infoTitle}</h2>
          <div className={`space-y-3 ${theme.textMuted} text-sm leading-relaxed`}>
            {infoBody}
          </div>
        </div>
      </section>
      {extraSections?.map((section, i) => (
        <section key={i} className="mb-4">
          <div className={`rounded-2xl ${theme.card} p-6`}>
            <h2 className={`text-xl font-semibold ${theme.text} mb-4`}>{section.title}</h2>
            {section.content}
          </div>
        </section>
      ))}
      <section className="mb-4">
        <div className={`rounded-2xl ${theme.card} p-6`}>
          <h2 className={`text-xl font-semibold ${theme.text} mb-4`}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((item, i) => (
              <div key={i} className={nestedCardClass}>
                <h3 className={`font-semibold ${theme.text} text-sm mb-1`}>{item.name}</h3>
                <p className={`text-sm ${theme.textMuted}`}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className={footerClass}>
        Timezone data sourced from{' '}
        <a href="https://www.iana.org/time-zones" target="_blank" rel="noopener noreferrer" className="underline">
          IANA Time Zone Database
        </a>
        . Last updated March 2026.
      </footer>
    </ContentPageWrapper>
  )
}
