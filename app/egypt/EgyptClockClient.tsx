'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const EGYPT_TZ = 'Africa/Cairo'
export default function EgyptClockClient() {
  return <HeroClockDisplay tz={EGYPT_TZ} countryCode="EG" countryName="Egypt" tzLabel="EET · UTC+2" />
}
