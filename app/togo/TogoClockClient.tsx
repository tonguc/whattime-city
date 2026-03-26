'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TOGO_TZ = 'Africa/Lome'
export default function TogoClockClient() {
  return <HeroClockDisplay tz={TOGO_TZ} countryCode="TG" countryName="Togo" tzLabel="GMT · UTC+0" />
}
