'use client'

import { useState, useEffect } from 'react'
import { City, cities, uses12HourFormat } from '@/lib/cities'

interface Alarm {
  id: number
  city: City
  hour: string
  minute: string
  period: string | null
  displayTime: string
  label: string
  localTriggerTime: number
  active: boolean
}

interface AlarmModalProps {
  isOpen: boolean
  onClose: () => void
  isLight: boolean
  theme: any
  alarms: Alarm[]
  setAlarms: (alarms: Alarm[]) => void
}

const BellIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
)

const TrashIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
  </svg>
)

export default function AlarmModal({ isOpen, onClose, isLight, theme, alarms, setAlarms }: AlarmModalProps) {
  const [alarmCity, setAlarmCity] = useState<City>(cities[0])
  const [alarmHour, setAlarmHour] = useState('09')
  const [alarmMinute, setAlarmMinute] = useState('00')
  const [alarmPeriod, setAlarmPeriod] = useState('AM')
  const [alarmLabel, setAlarmLabel] = useState('')

  const alarmCityUses12Hour = uses12HourFormat(alarmCity.countryCode)

  // Reset hour when switching between 12/24 hour formats
  useEffect(() => {
    if (alarmCityUses12Hour) {
      const hour = parseInt(alarmHour)
      if (hour === 0) {
        setAlarmHour('12')
        setAlarmPeriod('AM')
      } else if (hour > 12) {
        setAlarmHour((hour - 12).toString().padStart(2, '0'))
        setAlarmPeriod('PM')
      } else if (hour === 12) {
        setAlarmPeriod('PM')
      }
    }
  }, [alarmCity])

  const getLocalAlarmTime = () => {
    const now = new Date()
    let targetHour = parseInt(alarmHour)
    const targetMinute = parseInt(alarmMinute)
    
    if (alarmCityUses12Hour) {
      if (alarmPeriod === 'PM' && targetHour !== 12) {
        targetHour += 12
      } else if (alarmPeriod === 'AM' && targetHour === 12) {
        targetHour = 0
      }
    }
    
    const cityTime = new Date(now.toLocaleString('en-US', { timeZone: alarmCity.timezone }))
    
    let targetDate = new Date(cityTime)
    targetDate.setHours(targetHour, targetMinute, 0, 0)
    
    if (targetDate <= cityTime) {
      targetDate.setDate(targetDate.getDate() + 1)
    }
    
    const diff = targetDate.getTime() - cityTime.getTime()
    const localAlarmTime = new Date(now.getTime() + diff)
    
    return localAlarmTime
  }

  const addAlarm = () => {
    const localTime = getLocalAlarmTime()
    const displayTime = alarmCityUses12Hour 
      ? `${alarmHour}:${alarmMinute} ${alarmPeriod}`
      : `${alarmHour}:${alarmMinute}`
    
    const newAlarm: Alarm = {
      id: Date.now(),
      city: alarmCity,
      hour: alarmHour,
      minute: alarmMinute,
      period: alarmCityUses12Hour ? alarmPeriod : null,
      displayTime: displayTime,
      label: alarmLabel || `Alarm for ${alarmCity.city}`,
      localTriggerTime: localTime.getTime(),
      active: true
    }
    
    setAlarms([...alarms, newAlarm])
    onClose()
    setAlarmLabel('')
    
    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
  }

  const deleteAlarm = (id: number) => {
    setAlarms(alarms.filter(a => a.id !== id))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className={`w-full max-w-md rounded-3xl p-6 ${isLight ? 'bg-white' : 'bg-slate-800'} shadow-2xl`} 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className={`text-xl font-bold ${theme.text}`}>🔔 Set Time Alert</h2>
          <button 
            onClick={onClose} 
            className={`p-2 rounded-full ${isLight ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}`}
          >
            <XIcon className={`w-5 h-5 ${theme.textMuted}`} />
          </button>
        </div>

        <div className="space-y-4">
          {/* City Selection */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>City</label>
            <select 
              value={alarmCity.city}
              onChange={(e) => {
                const city = cities.find(c => c.city === e.target.value)
                if (city) setAlarmCity(city)
              }}
              className={`w-full px-4 py-3 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-700 border-slate-600'} ${theme.text} outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {cities.map(city => (
                <option key={city.slug} value={city.city}>{city.city}, {city.country}</option>
              ))}
            </select>
          </div>

          {/* Time Selection */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>
              When (in {alarmCity.city} local time)
              <span className={`ml-2 text-xs ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                {alarmCityUses12Hour ? '12-hour format' : '24-hour format'}
              </span>
            </label>
            <div className="flex gap-2">
              <select 
                value={alarmHour}
                onChange={(e) => setAlarmHour(e.target.value)}
                className={`flex-1 px-4 py-3 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-700 border-slate-600'} ${theme.text} outline-none focus:ring-2 focus:ring-blue-500`}
              >
                {alarmCityUses12Hour 
                  ? Array.from({length: 12}, (_, i) => {
                      const hour = i === 0 ? 12 : i
                      return <option key={hour} value={hour.toString().padStart(2, '0')}>{hour}</option>
                    })
                  : Array.from({length: 24}, (_, i) => (
                      <option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</option>
                    ))
                }
              </select>
              <span className={`flex items-center text-2xl ${theme.text}`}>:</span>
              <select 
                value={alarmMinute}
                onChange={(e) => setAlarmMinute(e.target.value)}
                className={`flex-1 px-4 py-3 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-700 border-slate-600'} ${theme.text} outline-none focus:ring-2 focus:ring-blue-500`}
              >
                {Array.from({length: 60}, (_, i) => (
                  <option key={i} value={i.toString().padStart(2, '0')}>{i.toString().padStart(2, '0')}</option>
                ))}
              </select>
              {alarmCityUses12Hour && (
                <select 
                  value={alarmPeriod}
                  onChange={(e) => setAlarmPeriod(e.target.value)}
                  className={`px-4 py-3 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-700 border-slate-600'} ${theme.text} outline-none focus:ring-2 focus:ring-blue-500 font-medium`}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              )}
            </div>
          </div>

          {/* Label */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${theme.textMuted}`}>Label (optional)</label>
            <input 
              type="text"
              value={alarmLabel}
              onChange={(e) => setAlarmLabel(e.target.value)}
              placeholder="Meeting, Call, Reminder..."
              className={`w-full px-4 py-3 rounded-xl border ${isLight ? 'bg-white border-slate-200' : 'bg-slate-700 border-slate-600'} ${theme.text} placeholder-slate-400 outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          {/* Local Time Preview */}
          <div className={`p-4 rounded-xl ${isLight ? 'bg-blue-50' : 'bg-blue-900/30'}`}>
            <p className={`text-sm ${isLight ? 'text-blue-700' : 'text-blue-300'}`}>
              ⏰ Your local alert time: <strong>{getLocalAlarmTime().toLocaleString('en-US', { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: true })}</strong>
            </p>
          </div>

          {/* Set Button */}
          <button 
            onClick={addAlarm}
            className={`w-full py-3 rounded-xl font-semibold text-white ${theme.accentBg} hover:opacity-90 transition-opacity`}
          >
            Set Alert
          </button>
        </div>

        {/* Active Alarms List */}
        {alarms.length > 0 && (
          <div className={`mt-6 pt-6 border-t ${isLight ? 'border-slate-200' : 'border-slate-700'}`}>
            <h3 className={`text-sm font-semibold mb-3 ${theme.textMuted}`}>
              Active Alerts ({alarms.filter(a => a.active).length})
            </h3>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {alarms.map(alarm => (
                <div 
                  key={alarm.id} 
                  className={`flex items-center justify-between p-3 rounded-xl ${isLight ? 'bg-slate-50' : 'bg-slate-700/50'} ${!alarm.active ? 'opacity-50' : ''}`}
                >
                  <div>
                    <p className={`font-medium ${theme.text}`}>{alarm.label}</p>
                    <p className={`text-xs ${theme.textMuted}`}>{alarm.displayTime} in {alarm.city.city}</p>
                  </div>
                  <button 
                    onClick={() => deleteAlarm(alarm.id)} 
                    className={`p-2 text-red-500 rounded-lg ${isLight ? 'hover:bg-red-50' : 'hover:bg-red-900/30'}`}
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Active Alarm Popup Component
export function ActiveAlarmPopup({ 
  alarm, 
  onDismiss, 
  isLight, 
  theme 
}: { 
  alarm: Alarm | null
  onDismiss: () => void
  isLight: boolean
  theme: any 
}) {
  if (!alarm) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-sm rounded-3xl p-8 text-center ${isLight ? 'bg-white' : 'bg-slate-800'} shadow-2xl animate-pulse`}>
        <div className="text-6xl mb-4">🔔</div>
        <h2 className={`text-2xl font-bold mb-2 ${theme.text}`}>{alarm.label}</h2>
        <p className={`text-lg ${theme.textMuted}`}>
          It's {alarm.displayTime} in {alarm.city.city}!
        </p>
        <button 
          onClick={onDismiss}
          className={`mt-6 w-full py-3 rounded-xl font-semibold text-white ${theme.accentBg} hover:opacity-90 transition-opacity`}
        >
          Dismiss
        </button>
      </div>
    </div>
  )
}
