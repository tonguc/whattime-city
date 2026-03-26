'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const LATVIA_TZ = 'Europe/Riga'
export default function LatviaClockClient() {
  return <HeroClockDisplay tz={LATVIA_TZ} countryCode="LV" countryName="Latvia" tzLabel="EET · UTC+2" />
}
