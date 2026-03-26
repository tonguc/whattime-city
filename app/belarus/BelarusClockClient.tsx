'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BELARUS_TZ = 'Europe/Minsk'
export default function BelarusClockClient() {
  return <HeroClockDisplay tz={BELARUS_TZ} countryCode="BY" countryName="Belarus" tzLabel="MSK · UTC+3" />
}
