'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const HONG_KONG_TZ = 'Asia/Hong_Kong'
export default function HongKongClockClient() {
  return <HeroClockDisplay tz={HONG_KONG_TZ} countryCode="HK" countryName="Hong Kong" tzLabel="HKT · UTC+8" />
}
