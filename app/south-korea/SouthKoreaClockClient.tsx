'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SOUTH_KOREA_TZ = 'Asia/Seoul'
export default function SouthKoreaClockClient() {
  return <HeroClockDisplay tz={SOUTH_KOREA_TZ} countryCode="KR" countryName="South Korea" tzLabel="KST · UTC+9" />
}
