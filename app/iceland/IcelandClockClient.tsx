'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ICELAND_TZ = 'Atlantic/Reykjavik'
export default function IcelandClockClient() {
  return <HeroClockDisplay tz={ICELAND_TZ} countryCode="IS" countryName="Iceland" tzLabel="GMT · UTC+0" />
}
