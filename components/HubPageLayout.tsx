'use client'

import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

export interface HubFaqItem {
  name: string
  text: string
}

export interface HubNavLink {
  label: string
  href: string
}

interface Props {
  faqItems: HubFaqItem[]
  links: HubNavLink[]
  linksTitle: string
  footerText: string
}

export default function HubPageLayout({ faqItems, links, linksTitle, footerText }: Props) {
  const { isLight } = useCityContext()

  const card = isLight
    ? 'rounded-2xl border border-slate-200 bg-white p-6'
    : 'rounded-2xl border border-slate-700 bg-slate-800 p-6'
  const innerCard = isLight
    ? 'rounded-xl border border-slate-100 bg-slate-50 p-4'
    : 'rounded-xl border border-slate-600 bg-slate-700 p-4'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const qText = isLight ? 'text-slate-800' : 'text-white'
  const aText = isLight ? 'text-slate-600' : 'text-slate-300'
  const footerClass = isLight ? 'text-slate-400' : 'text-slate-500'
  const linkClass = isLight
    ? 'px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center'
    : 'px-3 py-2 rounded-xl border border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500 transition-colors text-center'

  return (
    <>
      <section className="mt-4 mb-4">
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className={innerCard}>
                <div className={`font-medium text-sm mb-1 ${qText}`}>{item.name}</div>
                <div className={`text-sm leading-relaxed ${aText}`}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mb-4">
        <div className={card}>
          <h2 className={`text-xl font-semibold mb-4 ${heading}`}>{linksTitle}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            {links.map(lnk => (
              <Link key={lnk.href} href={lnk.href} className={linkClass}>{lnk.label}</Link>
            ))}
          </div>
        </div>
      </section>
      <footer className={`text-xs text-center mt-2 mb-4 ${footerClass}`}>{footerText}</footer>
    </>
  )
}
