/**
 * useAlarm Hook
 * Alarm state ve logic yönetimi
 * 
 * @example
 * const { alarms, activeAlarm, addAlarm, removeAlarm, dismissAlarm } = useAlarm()
 */

import { useState, useEffect, useCallback } from 'react'
import type { Alarm } from '@/core/types'

interface UseAlarmReturn {
  /** Tüm alarmlar listesi */
  alarms: Alarm[]
  /** Tetiklenmiş aktif alarm (popup için) */
  activeAlarm: Alarm | null
  /** Yeni alarm ekle */
  addAlarm: (alarm: Alarm) => void
  /** Alarm sil */
  removeAlarm: (id: number) => void
  /** Aktif alarmı kapat */
  dismissAlarm: () => void
  /** Direkt alarm listesini güncelle (AlarmModal uyumluluğu için) */
  setAlarms: React.Dispatch<React.SetStateAction<Alarm[]>>
}

export function useAlarm(): UseAlarmReturn {
  const [alarms, setAlarms] = useState<Alarm[]>([])
  const [activeAlarm, setActiveAlarm] = useState<Alarm | null>(null)

  // Add new alarm
  const addAlarm = useCallback((alarm: Alarm) => {
    setAlarms(prev => [...prev, alarm])
  }, [])

  // Remove alarm by id
  const removeAlarm = useCallback((id: number) => {
    setAlarms(prev => prev.filter(a => a.id !== id))
  }, [])

  // Dismiss active alarm popup
  const dismissAlarm = useCallback(() => {
    setActiveAlarm(null)
  }, [])

  // Check alarms every second (effect only, not during render)
  useEffect(() => {
    const checkAlarms = () => {
      const now = Date.now()
      
      alarms.forEach(alarm => {
        // Trigger if active and within 60 second window
        if (alarm.active && alarm.localTriggerTime <= now && alarm.localTriggerTime > now - 60000) {
          setActiveAlarm(alarm)
          
          // Browser notification
          if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
            new Notification(`⏰ ${alarm.label}`, {
              body: `It's ${alarm.displayTime} in ${alarm.city.city}!`
            })
          }
          
          // Play sound
          try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleogAAAGqzN3YpHVRQmm01NvOq3dPOVah0+Dpv4lfPWee0OfTq3JGP3Cn0+bcoXJDPXGl0OXZn29APXCjz+TYn25APHCjz+TYn25APHCjzuTYn25APHCjzuTYn25APHCjzuTYn25APHCjzuTYn25APHCjzuTYn25APHCjzuTYn25A')
            audio.play()
          } catch (e) {
            // Ignore audio errors
          }
          
          // Mark as triggered (deactivate)
          setAlarms(prev => prev.map(a => 
            a.id === alarm.id ? { ...a, active: false } : a
          ))
        }
      })
    }
    
    const interval = setInterval(checkAlarms, 1000)
    return () => clearInterval(interval)
  }, [alarms])

  return {
    alarms,
    activeAlarm,
    addAlarm,
    removeAlarm,
    dismissAlarm,
    setAlarms
  }
}
