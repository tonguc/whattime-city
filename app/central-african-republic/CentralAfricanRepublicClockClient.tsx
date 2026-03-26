'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const CENTRAL_AFRICAN_REPUBLIC_TZ = 'Africa/Bangui'
export default function CentralAfricanRepublicClockClient() {
  return <HeroClockDisplay tz={CENTRAL_AFRICAN_REPUBLIC_TZ} countryCode="CF" countryName="Central African Republic" tzLabel="WAT · UTC+1" />
}
