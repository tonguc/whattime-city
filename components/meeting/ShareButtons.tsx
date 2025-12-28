'use client'

/**
 * Share Buttons Component
 * Allows users to share meeting plans via link, email, calendar
 */

import { useState } from 'react'
import { City } from '@/lib/cities'

interface Props {
  city1: City
  city2: City
  isLight: boolean
}

export default function ShareButtons({ city1, city2, isLight }: Props) {
  const [copied, setCopied] = useState(false)
  
  const shareUrl = typeof window !== 'undefined' 
    ? window.location.href 
    : `https://whattime.city/meeting/${city1.slug}-${city2.slug}/`

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleEmailShare = () => {
    const subject = `Meeting Time: ${city1.city} ↔ ${city2.city}`
    const body = `Check out this meeting planner for ${city1.city} and ${city2.city}:\n\n${shareUrl}\n\nFind the best time for our call!`
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSlackShare = () => {
    // Slack share URL format
    const text = `Check out this meeting time planner: ${shareUrl}`
    window.open(`https://slack.com/intl/en-tr/help/articles/202009176-Share-links-in-Slack?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={handleCopyLink}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          copied
            ? isLight
              ? 'bg-green-500 text-white'
              : 'bg-green-600 text-white'
            : isLight
              ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
        }`}
      >
        {copied ? (
          <>
            <span>✓</span>
            <span>Copied!</span>
          </>
        ) : (
          <>
            <span>📋</span>
            <span>Copy Link</span>
          </>
        )}
      </button>

      <button
        onClick={handleEmailShare}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          isLight
            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
        }`}
      >
        <span>📧</span>
        <span>Email Team</span>
      </button>

      <button
        onClick={handleSlackShare}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          isLight
            ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
        }`}
      >
        <span>💬</span>
        <span>Share to Slack</span>
      </button>

      {/* Calendar Download - Coming Soon */}
      <button
        disabled
        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed ${
          isLight
            ? 'bg-slate-100 text-slate-700'
            : 'bg-slate-700 text-slate-300'
        }`}
        title="Coming soon"
      >
        <span>📅</span>
        <span>Add to Calendar</span>
      </button>
    </div>
  )
}
