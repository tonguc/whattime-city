/**
 * Alarm Types
 * Alarm özelliği için type tanımları
 */

import type { City } from './city'

export interface Alarm {
  id: number
  city: City
  hour: string
  minute: string
  period: string | null  // AM/PM for 12h format, null for 24h
  displayTime: string
  label: string
  localTriggerTime: number  // Unix timestamp
  active: boolean
}

export interface AlarmFormData {
  city: City
  hour: string
  minute: string
  period: string | null
  label: string
}
