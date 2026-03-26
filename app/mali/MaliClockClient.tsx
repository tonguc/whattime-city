'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MALI_TZ = 'Africa/Bamako'
export default function MaliClockClient() {
  return <HeroClockDisplay tz={MALI_TZ} countryCode="ML" countryName="Mali" tzLabel="GMT · UTC+0" />
}
