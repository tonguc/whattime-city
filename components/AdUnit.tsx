'use client'

import { useEffect, useRef } from 'react'

/**
 * Google AdSense birimi — whattime.city
 * Client ID: ca-pub-9352058741490976
 *
 * Her variant AdSense panelinden oluşturulmuş bir reklam birimine karşılık gelir.
 * Script layout.tsx'te strategy="lazyOnload" ile yüklenir → LCP/FCP etkilenmez.
 *
 * Kullanım:
 *   <AdUnit variant="display" />       — responsive display, her yerde uyumlu
 *   <AdUnit variant="multiplex" />     — grid "related content" reklamlar
 *
 * NOT: Tool sayfalarına (time-converter, flight-time vs.) koyulmaz — CTR 0.
 */

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

type AdVariant = 'display' | 'multiplex'

interface AdUnitProps {
  variant: AdVariant
  className?: string
}

const AD_CONFIG: Record<AdVariant, { slot: string; format: string; minHeight: string }> = {
  display:   { slot: '3610856414', format: 'auto',        minHeight: '90px' },
  multiplex: { slot: '8224888849', format: 'autorelaxed', minHeight: '280px' },
}

const CLIENT_ID = 'ca-pub-9352058741490976'

export default function AdUnit({ variant, className = '' }: AdUnitProps) {
  const pushed = useRef(false)
  const { slot, format, minHeight } = AD_CONFIG[variant]

  useEffect(() => {
    if (pushed.current) return
    pushed.current = true
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      // AdSense script henüz yüklenmedi veya blocker aktif — sessizce geç
      if (process.env.NODE_ENV === 'development') {
        console.debug('[AdUnit]', err)
      }
    }
  }, [])

  return (
    <div className={`ad-container my-4 text-center ${className}`} aria-hidden="true">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', minHeight }}
        data-ad-client={CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
