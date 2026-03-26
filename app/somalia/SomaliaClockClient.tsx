'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SOMALIA_TZ = 'Africa/Mogadishu'
export default function SomaliaClockClient() {
  return <HeroClockDisplay tz={SOMALIA_TZ} countryCode="SO" countryName="Somalia" tzLabel="EAT · UTC+3" />
}
