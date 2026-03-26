'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const JAPAN_TZ = 'Asia/Tokyo'
export default function JapanClockClient() {
  return <HeroClockDisplay tz={JAPAN_TZ} countryCode="JP" countryName="Japan" tzLabel="JST · UTC+9" />
}
