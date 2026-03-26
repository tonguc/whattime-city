'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const AZERBAIJAN_TZ = 'Asia/Baku'
export default function AzerbaijanClockClient() {
  return <HeroClockDisplay tz={AZERBAIJAN_TZ} countryCode="AZ" countryName="Azerbaijan" tzLabel="AZT · UTC+4" />
}
