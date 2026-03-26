'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const THAILAND_TZ = 'Asia/Bangkok'
export default function ThailandClockClient() {
  return <HeroClockDisplay tz={THAILAND_TZ} countryCode="TH" countryName="Thailand" tzLabel="ICT · UTC+7" />
}
