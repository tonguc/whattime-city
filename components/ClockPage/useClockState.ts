'use client'

import { useState, useEffect } from 'react'

interface SingleClockState {
  time: string
  date: string
  mounted: boolean
  isDST: boolean
}

interface MultiClockState {
  times: Record<string, string>
  date: string
  mounted: boolean
  isDST: boolean
}

interface ClockOptions {
  hour12?: boolean
}

/**
 * Hook for a single-timezone clock with DST detection.
 */
export function useClockState(timezone: string, options?: ClockOptions): SingleClockState {
  const hour12 = options?.hour12 ?? true
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)
  const [isDST, setIsDST] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', {
        timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12,
      }))
      setDate(now.toLocaleDateString('en-US', {
        timeZone: timezone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      }))
      // DST detection: compare January offset to current offset
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: timezone })
      const nowStr = now.toLocaleString('en-US', { timeZone: timezone })
      setIsDST(new Date(nowStr).getTimezoneOffset() !== new Date(janStr).getTimezoneOffset())
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [timezone, hour12])

  return { time, date, mounted, isDST }
}

/**
 * Hook for a multi-timezone clock (e.g. Texas with CT + MT, Brazil with 3 zones).
 * Pass a record of { label: ianaTimezone }.
 */
export function useMultiClockState(
  timezones: Record<string, string>,
  primaryTimezone: string,
  options?: ClockOptions,
): MultiClockState {
  const hour12 = options?.hour12 ?? true
  const [times, setTimes] = useState<Record<string, string>>({})
  const [date, setDate] = useState('')
  const [mounted, setMounted] = useState(false)
  const [isDST, setIsDST] = useState(false)

  useEffect(() => {
    setMounted(true)
    const update = () => {
      const now = new Date()
      const newTimes: Record<string, string> = {}
      for (const [label, tz] of Object.entries(timezones)) {
        newTimes[label] = now.toLocaleTimeString('en-US', {
          timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12,
        })
      }
      setTimes(newTimes)
      setDate(now.toLocaleDateString('en-US', {
        timeZone: primaryTimezone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      }))
      const jan = new Date(now.getFullYear(), 0, 1)
      const janStr = jan.toLocaleString('en-US', { timeZone: primaryTimezone })
      const nowStr = now.toLocaleString('en-US', { timeZone: primaryTimezone })
      setIsDST(new Date(nowStr).getTimezoneOffset() !== new Date(janStr).getTimezoneOffset())
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [timezones, primaryTimezone, hour12])

  return { times, date, mounted, isDST }
}
