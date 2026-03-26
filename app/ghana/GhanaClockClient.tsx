'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const GHANA_TZ = 'Africa/Accra'
export default function GhanaClockClient() {
  return <HeroClockDisplay tz={GHANA_TZ} countryCode="GH" countryName="Ghana" tzLabel="GMT · UTC+0" />
}
