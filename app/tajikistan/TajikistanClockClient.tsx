'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TAJIKISTAN_TZ = 'Asia/Dushanbe'
export default function TajikistanClockClient() {
  return <HeroClockDisplay tz={TAJIKISTAN_TZ} countryCode="TJ" countryName="Tajikistan" tzLabel="TJT · UTC+5" />
}
