'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const MONGOLIA_TZ = 'Asia/Ulaanbaatar'
export default function MongoliaClockClient() {
  return <HeroClockDisplay tz={MONGOLIA_TZ} countryCode="MN" countryName="Mongolia" tzLabel="ULAT · UTC+8" />
}
