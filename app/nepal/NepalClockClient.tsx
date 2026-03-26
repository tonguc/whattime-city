'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NEPAL_TZ = 'Asia/Kathmandu'
export default function NepalClockClient() {
  return <HeroClockDisplay tz={NEPAL_TZ} countryCode="NP" countryName="Nepal" tzLabel="NPT · UTC+5:45" />
}
