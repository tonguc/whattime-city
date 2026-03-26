'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const BURUNDI_TZ = 'Africa/Bujumbura'
export default function BurundiClockClient() {
  return <HeroClockDisplay tz={BURUNDI_TZ} countryCode="BI" countryName="Burundi" tzLabel="CAT · UTC+2" />
}
