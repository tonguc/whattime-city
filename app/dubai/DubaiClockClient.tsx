'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const DUBAI_TZ = 'Asia/Dubai'
export default function DubaiClockClient() {
  return <HeroClockDisplay tz={DUBAI_TZ} countryCode="AE" countryName="Dubai" tzLabel="Dubai" />
}
