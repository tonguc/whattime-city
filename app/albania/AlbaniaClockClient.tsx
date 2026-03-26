'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ALBANIA_TZ = 'Europe/Tirane'
export default function AlbaniaClockClient() {
  return <HeroClockDisplay tz={ALBANIA_TZ} countryCode="AL" countryName="Albania" tzLabel="CET · UTC+1" />
}
