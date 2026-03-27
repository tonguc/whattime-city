'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCityContext } from '@/lib/CityContext'
import { countries } from '@/lib/cities'
import { getFlagUrl } from '@/shared/utils'

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
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const filteredCountries = searchQuery.trim().length > 0
    ? countries.filter(c =>
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.capital.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 8)
    : []

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

  const textMuted = isLight ? 'text-slate-500' : 'text-slate-400'

  return (
    <>
      {/* Country search bar */}
      <div ref={searchRef} className="relative max-w-sm mb-4">
        <div className="relative">
          <svg className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textMuted}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={e => { setSearchQuery(e.target.value); setShowDropdown(true) }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Search another country…"
            className={`w-full pl-9 pr-4 py-2 rounded-xl border text-sm outline-none transition-colors ${
              isLight
                ? 'bg-white border-slate-300 focus:border-cyan-400 text-slate-800 placeholder-slate-400'
                : 'bg-slate-800 border-slate-600 focus:border-cyan-500 text-white placeholder-slate-500'
            }`}
            autoComplete="off"
          />
        </div>
        {showDropdown && filteredCountries.length > 0 && (
          <div className={`absolute z-50 mt-1 w-full rounded-xl shadow-lg border overflow-hidden ${
            isLight ? 'bg-white border-slate-200' : 'bg-slate-800 border-slate-700'
          }`}>
            {filteredCountries.map(c => (
              <button
                key={c.slug}
                onMouseDown={() => {
                  setShowDropdown(false)
                  setSearchQuery('')
                  router.push(`/country/${c.slug}/`)
                }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm text-left transition-colors ${
                  isLight ? 'hover:bg-slate-50 text-slate-700' : 'hover:bg-slate-700 text-slate-200'
                }`}
              >
                <img src={getFlagUrl(c.code, 'sm')} alt="" className="w-5 h-3.5 object-cover rounded-sm" />
                <span className="font-medium">{c.name}</span>
                <span className={`ml-auto text-xs ${textMuted}`}>{c.capital}</span>
              </button>
            ))}
          </div>
        )}
      </div>

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
