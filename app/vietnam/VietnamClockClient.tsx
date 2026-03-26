'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const VIETNAM_TZ = 'Asia/Ho_Chi_Minh'
export default function VietnamClockClient() {
  return <HeroClockDisplay tz={VIETNAM_TZ} countryCode="VN" countryName="Vietnam" tzLabel="ICT · UTC+7" />
}
