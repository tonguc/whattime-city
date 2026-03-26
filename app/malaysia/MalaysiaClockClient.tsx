'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MALAYSIA_TZ = 'Asia/Kuala_Lumpur'
export default function MalaysiaClockClient() {
  return <HeroClockDisplay tz={MALAYSIA_TZ} countryCode="MY" countryName="Malaysia" tzLabel="MYT · UTC+8" />
}
