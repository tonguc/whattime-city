'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const FINLAND_TZ = 'Europe/Helsinki'
export default function FinlandClockClient() {
  return <HeroClockDisplay tz={FINLAND_TZ} countryCode="FI" countryName="Finland" tzLabel="EET · UTC+2" />
}
