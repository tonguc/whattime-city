'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PERU_TZ = 'America/Lima'
export default function PeruClockClient() {
  return <HeroClockDisplay tz={PERU_TZ} countryCode="PE" countryName="Peru" tzLabel="PET · UTC-5" />
}
