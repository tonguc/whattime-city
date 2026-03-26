'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ALGERIA_TZ = 'Africa/Algiers'
export default function AlgeriaClockClient() {
  return <HeroClockDisplay tz={ALGERIA_TZ} countryCode="DZ" countryName="Algeria" tzLabel="CET · UTC+1" />
}
