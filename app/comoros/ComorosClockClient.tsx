'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const COMOROS_TZ = 'Indian/Comoro'
export default function ComorosClockClient() {
  return <HeroClockDisplay tz={COMOROS_TZ} countryCode="KM" countryName="Comoros" tzLabel="EAT · UTC+3" />
}
