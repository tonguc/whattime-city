'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useCityContext } from '@/lib/CityContext'

/* ───── types ───── */
type Tab = 'timer' | 'stopwatch'
type TimerState = 'idle' | 'running' | 'paused' | 'done'

/* ───── preset durations (seconds) ───── */
const PRESETS = [
  { label: '1 min', seconds: 60 },
  { label: '3 min', seconds: 180 },
  { label: '5 min', seconds: 300 },
  { label: '10 min', seconds: 600 },
  { label: '15 min', seconds: 900 },
  { label: '20 min', seconds: 1200 },
  { label: '25 min', seconds: 1500 },
  { label: '30 min', seconds: 1800 },
  { label: '45 min', seconds: 2700 },
  { label: '60 min', seconds: 3600 },
]

/* ───── format helpers ───── */
function formatTime(ms: number): { h: string; m: string; s: string; cs: string } {
  const totalSec = Math.max(0, Math.floor(ms / 1000))
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0')
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0')
  const s = String(totalSec % 60).padStart(2, '0')
  const cs = String(Math.floor((ms % 1000) / 10)).padStart(2, '0')
  return { h, m, s, cs }
}

function formatLapTime(ms: number): string {
  const { h, m, s, cs } = formatTime(ms)
  return Number(h) > 0 ? `${h}:${m}:${s}.${cs}` : `${m}:${s}.${cs}`
}

/* ───── FAQ ───── */
const faqItems = [
  { q: 'How do I set a timer for a specific time?', a: 'Choose a preset (1, 3, 5, 10, 15, 20, 25, 30, 45, or 60 minutes) or enter a custom time using the hours, minutes, and seconds inputs. Then click Start.' },
  { q: 'Will the timer alert me when it reaches zero?', a: 'Yes. When the countdown reaches zero, you\'ll hear an alarm sound and see a visual "Time\'s up!" notification. The alarm repeats until you dismiss it.' },
  { q: 'Can I use the timer and stopwatch at the same time?', a: 'You can switch between the Timer and Stopwatch tabs — each keeps its own state. The active one continues running when you switch tabs.' },
  { q: 'What is the Pomodoro Technique?', a: 'The Pomodoro Technique uses 25-minute focused work intervals followed by 5-minute breaks. Use our 25-minute preset for work sessions and switch to 5 minutes for breaks.' },
  { q: 'How do I record lap times?', a: 'Switch to the Stopwatch tab, click Start, then click the Lap button to record split times. All laps are listed with individual and cumulative times.' },
  { q: 'Does the timer work in the background?', a: 'Yes. The timer and stopwatch continue running even if you switch browser tabs. You\'ll still hear the alarm when the timer reaches zero.' },
]

/* ───── alarm sound (Web Audio API) ───── */
function playAlarm(ctx: AudioContext) {
  const now = ctx.currentTime
  for (let i = 0; i < 3; i++) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = 880
    osc.type = 'sine'
    gain.gain.setValueAtTime(0.3, now + i * 0.5)
    gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.5 + 0.4)
    osc.start(now + i * 0.5)
    osc.stop(now + i * 0.5 + 0.4)
  }
}

/* ═══════════════════════════════════════════════════════════ */
export default function TimerClient() {
  const { isLight } = useCityContext()
  const [tab, setTab] = useState<Tab>('timer')

  /* ───── TIMER STATE ───── */
  const [timerState, setTimerState] = useState<TimerState>('idle')
  const [initialMs, setInitialMs] = useState(300_000) // 5 min default
  const [remainingMs, setRemainingMs] = useState(300_000)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timerEndRef = useRef<number>(0)
  const audioCtxRef = useRef<AudioContext | null>(null)

  // Custom input
  const [inputH, setInputH] = useState('0')
  const [inputM, setInputM] = useState('5')
  const [inputS, setInputS] = useState('0')

  /* ───── STOPWATCH STATE ───── */
  const [swState, setSwState] = useState<'idle' | 'running' | 'paused'>('idle')
  const [swElapsed, setSwElapsed] = useState(0)
  const swRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const swStartRef = useRef(0)
  const swAccumRef = useRef(0)
  const [laps, setLaps] = useState<number[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  /* ───── TIMER LOGIC ───── */
  const clearTimerInterval = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null }
  }, [])

  const startTimer = useCallback(() => {
    if (timerState === 'idle' || timerState === 'done') {
      const h = Math.max(0, Math.min(99, parseInt(inputH) || 0))
      const m = Math.max(0, Math.min(59, parseInt(inputM) || 0))
      const s = Math.max(0, Math.min(59, parseInt(inputS) || 0))
      const total = (h * 3600 + m * 60 + s) * 1000
      if (total <= 0) return
      setInitialMs(total)
      setRemainingMs(total)
      timerEndRef.current = Date.now() + total
      setTimerState('running')
    } else if (timerState === 'paused') {
      timerEndRef.current = Date.now() + remainingMs
      setTimerState('running')
    }
  }, [timerState, inputH, inputM, inputS, remainingMs])

  const pauseTimer = useCallback(() => {
    clearTimerInterval()
    setTimerState('paused')
  }, [clearTimerInterval])

  const resetTimer = useCallback(() => {
    clearTimerInterval()
    setRemainingMs(initialMs)
    setTimerState('idle')
  }, [clearTimerInterval, initialMs])

  const selectPreset = useCallback((seconds: number) => {
    clearTimerInterval()
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    setInputH(String(h))
    setInputM(String(m))
    setInputS(String(s))
    setInitialMs(seconds * 1000)
    setRemainingMs(seconds * 1000)
    setTimerState('idle')
  }, [clearTimerInterval])

  // Timer tick
  useEffect(() => {
    if (timerState !== 'running') return
    timerRef.current = setInterval(() => {
      const left = timerEndRef.current - Date.now()
      if (left <= 0) {
        setRemainingMs(0)
        setTimerState('done')
        // Play alarm
        if (!audioCtxRef.current) audioCtxRef.current = new AudioContext()
        playAlarm(audioCtxRef.current)
      } else {
        setRemainingMs(left)
      }
    }, 50)
    return () => clearTimerInterval()
  }, [timerState, clearTimerInterval])

  /* ───── STOPWATCH LOGIC ───── */
  const clearSwInterval = useCallback(() => {
    if (swRef.current) { clearInterval(swRef.current); swRef.current = null }
  }, [])

  const startStopwatch = useCallback(() => {
    swStartRef.current = Date.now()
    if (swState === 'idle') swAccumRef.current = 0
    setSwState('running')
  }, [swState])

  const pauseStopwatch = useCallback(() => {
    swAccumRef.current += Date.now() - swStartRef.current
    clearSwInterval()
    setSwState('paused')
  }, [clearSwInterval])

  const resetStopwatch = useCallback(() => {
    clearSwInterval()
    swAccumRef.current = 0
    setSwElapsed(0)
    setLaps([])
    setSwState('idle')
  }, [clearSwInterval])

  const recordLap = useCallback(() => {
    if (swState === 'running') {
      setLaps(prev => [...prev, swElapsed])
    }
  }, [swState, swElapsed])

  // Stopwatch tick
  useEffect(() => {
    if (swState !== 'running') return
    swRef.current = setInterval(() => {
      setSwElapsed(swAccumRef.current + (Date.now() - swStartRef.current))
    }, 30)
    return () => clearSwInterval()
  }, [swState, clearSwInterval])

  /* ───── STYLES ───── */
  const card = isLight ? 'rounded-2xl border border-slate-200 bg-white' : 'rounded-2xl border border-slate-700/50 bg-slate-800/60'
  const nestedCard = isLight ? 'rounded-xl border border-slate-100 bg-slate-50' : 'rounded-xl border border-slate-700/50 bg-slate-800/50'
  const heading = isLight ? 'text-slate-800' : 'text-white'
  const subText = isLight ? 'text-slate-600' : 'text-slate-300'
  const mutedText = isLight ? 'text-slate-500' : 'text-slate-400'
  const inputClass = isLight
    ? 'bg-white border border-slate-200 text-slate-800 focus:ring-2 focus:ring-sky-500'
    : 'bg-slate-700 border border-slate-600 text-white focus:ring-2 focus:ring-sky-400'
  const btnPrimary = 'bg-sky-600 hover:bg-sky-700 text-white font-semibold'
  const btnDanger = 'bg-red-500 hover:bg-red-600 text-white font-semibold'
  const btnSecondary = isLight
    ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium'
    : 'bg-slate-700 hover:bg-slate-600 text-slate-200 font-medium'
  const tabActive = isLight ? 'bg-sky-600 text-white' : 'bg-sky-500 text-white'
  const tabInactive = isLight ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' : 'bg-slate-700 text-slate-300 hover:bg-slate-600'

  const timerDisplay = formatTime(remainingMs)
  const swDisplay = formatTime(swElapsed)
  const progress = initialMs > 0 ? ((initialMs - remainingMs) / initialMs) * 100 : 0

  return (
    <div className="w-full space-y-8">
      {/* Breadcrumb */}
      <nav className={`flex items-center gap-1.5 text-sm ${mutedText}`}>
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className={heading}>Timer</span>
      </nav>

      {/* Hero */}
      <header className="text-center space-y-2">
        <h1 className={`text-3xl sm:text-4xl font-bold ${heading}`}>
          Online Timer &amp; Stopwatch
        </h1>
        <p className={`text-lg ${subText}`}>
          Free countdown timer and stopwatch with alarm. Pomodoro, cooking, workout — any timer you need.
        </p>
      </header>

      {/* ───── Tab Switcher ───── */}
      <div className="flex justify-center gap-2">
        {(['timer', 'stopwatch'] as Tab[]).map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${tab === t ? tabActive : tabInactive}`}
          >
            {t === 'timer' ? 'Timer' : 'Stopwatch'}
          </button>
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* TIMER TAB */}
      {/* ═══════════════════════════════════════════════════════ */}
      {tab === 'timer' && (
        <div className="space-y-6">
          {/* Display */}
          <section className={`${card} p-8 text-center space-y-4`}>
            {/* Progress bar */}
            {timerState !== 'idle' && (
              <div className={`w-full h-2 rounded-full overflow-hidden ${isLight ? 'bg-slate-100' : 'bg-slate-700'}`}>
                <div
                  className={`h-full rounded-full transition-all duration-200 ${timerState === 'done' ? 'bg-red-500' : 'bg-sky-500'}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            {/* Time display */}
            <div
              className={`text-6xl sm:text-8xl font-bold tracking-tight ${timerState === 'done' ? 'text-red-500 animate-pulse' : heading}`}
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {Number(timerDisplay.h) > 0 && <>{timerDisplay.h}<span className={mutedText}>:</span></>}
              {timerDisplay.m}<span className={mutedText}>:</span>{timerDisplay.s}
            </div>

            {timerState === 'done' && (
              <div className="text-xl font-bold text-red-500">
                Time&apos;s up!
              </div>
            )}

            {/* Controls */}
            <div className="flex justify-center gap-3">
              {timerState === 'idle' || timerState === 'done' ? (
                <button onClick={startTimer} className={`px-8 py-3 rounded-xl ${btnPrimary}`}>
                  Start
                </button>
              ) : timerState === 'running' ? (
                <>
                  <button onClick={pauseTimer} className={`px-6 py-3 rounded-xl ${btnSecondary}`}>
                    Pause
                  </button>
                  <button onClick={resetTimer} className={`px-6 py-3 rounded-xl ${btnDanger}`}>
                    Reset
                  </button>
                </>
              ) : (
                <>
                  <button onClick={startTimer} className={`px-6 py-3 rounded-xl ${btnPrimary}`}>
                    Resume
                  </button>
                  <button onClick={resetTimer} className={`px-6 py-3 rounded-xl ${btnDanger}`}>
                    Reset
                  </button>
                </>
              )}
            </div>
          </section>

          {/* Custom Input */}
          {(timerState === 'idle' || timerState === 'done') && (
            <section className={`${card} p-6 space-y-4`}>
              <h2 className={`text-lg font-bold ${heading}`}>Set Custom Time</h2>
              <div className="flex items-center justify-center gap-2">
                {[
                  { label: 'Hours', value: inputH, set: setInputH, max: 99 },
                  { label: 'Min', value: inputM, set: setInputM, max: 59 },
                  { label: 'Sec', value: inputS, set: setInputS, max: 59 },
                ].map((field, i) => (
                  <div key={field.label} className="flex items-center gap-2">
                    {i > 0 && <span className={`text-2xl font-bold ${mutedText}`}>:</span>}
                    <div className="text-center">
                      <input
                        type="number"
                        min={0}
                        max={field.max}
                        value={field.value}
                        onChange={e => field.set(e.target.value)}
                        className={`w-20 text-center text-2xl font-bold py-2 rounded-xl outline-none ${inputClass}`}
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                      />
                      <div className={`text-xs mt-1 ${mutedText}`}>{field.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Presets */}
          <section className={`${card} p-6 space-y-4`}>
            <h2 className={`text-lg font-bold ${heading}`}>Quick Presets</h2>
            <div className="grid grid-cols-5 gap-2">
              {PRESETS.map(p => (
                <button
                  key={p.seconds}
                  onClick={() => selectPreset(p.seconds)}
                  className={`py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    initialMs === p.seconds * 1000 && timerState === 'idle'
                      ? tabActive
                      : tabInactive
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className={`${card} p-6 space-y-4`}>
            <h2 className={`text-lg font-bold ${heading}`}>Popular Timer Uses</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { title: 'Pomodoro Timer', desc: 'Work 25 minutes, break 5 minutes. Repeat 4 cycles, then take a 15–30 minute break.', preset: 1500 },
                { title: 'Cooking Timer', desc: 'Boil eggs (10 min), pasta (12 min), rice (20 min), baking (30–45 min). Never overcook again.', preset: 600 },
                { title: 'Exercise Timer', desc: 'HIIT intervals, plank holds, stretching routines. Set your workout duration and go.', preset: 300 },
                { title: 'Study Timer', desc: 'Focus sessions with timed breaks. 25 or 45 minute study blocks for maximum retention.', preset: 2700 },
              ].map(item => (
                <button
                  key={item.title}
                  onClick={() => selectPreset(item.preset)}
                  className={`${nestedCard} p-4 text-left hover:scale-[1.01] transition-transform`}
                >
                  <h3 className={`font-semibold ${heading} mb-1`}>{item.title}</h3>
                  <p className={`text-xs ${mutedText}`}>{item.desc}</p>
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════ */}
      {/* STOPWATCH TAB */}
      {/* ═══════════════════════════════════════════════════════ */}
      {tab === 'stopwatch' && (
        <div className="space-y-6">
          {/* Display */}
          <section className={`${card} p-8 text-center space-y-4`}>
            <div
              className={`text-6xl sm:text-8xl font-bold tracking-tight ${heading}`}
              style={{ fontVariantNumeric: 'tabular-nums' }}
            >
              {Number(swDisplay.h) > 0 && <>{swDisplay.h}<span className={mutedText}>:</span></>}
              {swDisplay.m}<span className={mutedText}>:</span>{swDisplay.s}
              <span className={`text-3xl sm:text-4xl ${mutedText}`}>.{swDisplay.cs}</span>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-3">
              {swState === 'idle' ? (
                <button onClick={startStopwatch} className={`px-8 py-3 rounded-xl ${btnPrimary}`}>
                  Start
                </button>
              ) : swState === 'running' ? (
                <>
                  <button onClick={recordLap} className={`px-6 py-3 rounded-xl ${btnSecondary}`}>
                    Lap
                  </button>
                  <button onClick={pauseStopwatch} className={`px-6 py-3 rounded-xl ${btnSecondary}`}>
                    Pause
                  </button>
                  <button onClick={resetStopwatch} className={`px-6 py-3 rounded-xl ${btnDanger}`}>
                    Reset
                  </button>
                </>
              ) : (
                <>
                  <button onClick={startStopwatch} className={`px-6 py-3 rounded-xl ${btnPrimary}`}>
                    Resume
                  </button>
                  <button onClick={recordLap} className={`px-6 py-3 rounded-xl ${btnSecondary}`}>
                    Lap
                  </button>
                  <button onClick={resetStopwatch} className={`px-6 py-3 rounded-xl ${btnDanger}`}>
                    Reset
                  </button>
                </>
              )}
            </div>
          </section>

          {/* Laps */}
          {laps.length > 0 && (
            <section className={`${card} p-6 space-y-3`}>
              <h2 className={`text-lg font-bold ${heading}`}>Lap Times</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className={`border-b ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
                      <th className={`text-left py-2 pr-4 font-semibold ${heading}`}>#</th>
                      <th className={`text-right py-2 pr-4 font-semibold ${heading}`}>Lap Time</th>
                      <th className={`text-right py-2 font-semibold ${heading}`}>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {laps.map((totalMs, i) => {
                      const prevMs = i > 0 ? laps[i - 1] : 0
                      const lapMs = totalMs - prevMs
                      return (
                        <tr key={i} className={`border-b ${isLight ? 'border-slate-100' : 'border-slate-700/50'}`}>
                          <td className={`py-2 pr-4 ${subText}`}>{i + 1}</td>
                          <td className={`py-2 pr-4 text-right font-medium ${heading}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                            {formatLapTime(lapMs)}
                          </td>
                          <td className={`py-2 text-right ${mutedText}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
                            {formatLapTime(totalMs)}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      )}

      {/* ───── About Section ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>About This Timer</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Countdown Timer</h3>
            <p className={`text-sm ${subText}`}>
              Set any duration from 1 second to 99 hours. Choose a quick preset or enter a custom time. An alarm sounds when the timer reaches zero.
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Stopwatch</h3>
            <p className={`text-sm ${subText}`}>
              Precise stopwatch with lap recording. Track split times for running, swimming, or any activity. Centisecond accuracy.
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Works Offline</h3>
            <p className={`text-sm ${subText}`}>
              Uses your browser&apos;s built-in timer APIs. No server connection needed — the timer keeps running even if your internet drops.
            </p>
          </div>
          <div className={`${nestedCard} p-4`}>
            <h3 className={`font-semibold ${heading} mb-1`}>Audio Alarm</h3>
            <p className={`text-sm ${subText}`}>
              Uses Web Audio API for a clean alarm tone. No files to download. Works across all modern browsers on desktop and mobile.
            </p>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className={`${card} p-6 space-y-4`}>
        <h2 className={`text-xl font-bold ${heading}`}>Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqItems.map((item, i) => (
            <div key={i} className={`${nestedCard} overflow-hidden`}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className={`w-full flex items-center justify-between p-4 text-left font-medium ${heading}`}
              >
                <span className="text-sm">{item.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''} ${mutedText}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className={`px-4 pb-4 text-sm ${subText}`}>{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related Tools */}
      <section className="space-y-3">
        <h2 className={`text-lg font-bold ${heading}`}>Related Tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: '/countdown/', label: 'Countdown' },
            { href: '/alarm/', label: 'World Alarm' },
            { href: '/meeting/', label: 'Meeting Planner' },
            { href: '/time-converter/', label: 'Time Converter' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`${nestedCard} p-3 text-center text-sm font-medium ${heading} hover:scale-[1.02] transition-transform`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
