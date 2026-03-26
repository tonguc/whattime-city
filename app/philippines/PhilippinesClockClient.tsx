'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const PHILIPPINES_TZ = 'Asia/Manila'
export default function PhilippinesClockClient() {
  return <HeroClockDisplay tz={PHILIPPINES_TZ} countryCode="PH" countryName="Philippines" tzLabel="PHT · UTC+8" />
}
