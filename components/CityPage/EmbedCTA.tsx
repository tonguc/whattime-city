'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { City } from '@/lib/cities'
import { useThemeClasses } from '@/lib/useThemeClasses'

interface EmbedCTAProps {
  city: City
}

export default function EmbedCTA({ city }: EmbedCTAProps) {
  const { card, text, textMuted, isLight } = useThemeClasses()
  const [copied, setCopied] = useState(false)

  const embedCode = `<iframe src="https://whattime.city/embed/${city.slug}" width="280" height="160" frameborder="0" style="border-radius:16px;overflow:hidden;"></iframe>`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(embedCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = embedCode
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section className={`rounded-3xl p-6 backdrop-blur-xl border ${card} mt-4`}>
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h2 className={`text-lg font-bold ${text}`}>
            Embed the {city.city} Clock on Your Site
          </h2>
          <p className={`text-sm mt-1 ${textMuted}`}>
            Free, auto-updating live clock for {city.city}, {city.country}. Works on WordPress, Notion, Squarespace — paste the code below.
          </p>
        </div>
      </div>

      <pre
        className={`text-xs font-mono p-3 rounded-xl overflow-x-auto whitespace-pre-wrap break-all ${
          isLight ? 'bg-slate-100 text-slate-700' : 'bg-slate-800/70 text-slate-300'
        }`}
      >
        {embedCode}
      </pre>

      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={handleCopy}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            copied
              ? 'bg-emerald-500 text-white'
              : isLight
                ? 'bg-slate-800 text-white hover:bg-slate-700'
                : 'bg-white text-slate-800 hover:bg-slate-100'
          }`}
        >
          {copied ? '✓ Copied!' : '📋 Copy embed code'}
        </button>
        <Link
          href="/widget"
          className={`text-sm font-medium underline-offset-2 hover:underline ${textMuted}`}
        >
          Customize size, theme, options →
        </Link>
      </div>
    </section>
  )
}
