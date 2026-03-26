'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BELIZE_TZ = 'America/Belize'
export default function BelizeClockClient() {
  return <HeroClockDisplay tz={BELIZE_TZ} countryCode="BZ" countryName="Belize" tzLabel="CST · UTC-6" />
}
