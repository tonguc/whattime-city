'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MOROCCO_TZ = 'Africa/Casablanca'
export default function MoroccoClockClient() {
  return <HeroClockDisplay tz={MOROCCO_TZ} countryCode="MA" countryName="Morocco" tzLabel="WEST · UTC+1" />
}
