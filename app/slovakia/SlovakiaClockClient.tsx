'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SLOVAKIA_TZ = 'Europe/Bratislava'
export default function SlovakiaClockClient() {
  return <HeroClockDisplay tz={SLOVAKIA_TZ} countryCode="SK" countryName="Slovakia" tzLabel="CET · UTC+1" />
}
