'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MYANMAR_TZ = 'Asia/Yangon'
export default function MyanmarClockClient() {
  return <HeroClockDisplay tz={MYANMAR_TZ} countryCode="MM" countryName="Myanmar" tzLabel="MMT · UTC+6:30" />
}
