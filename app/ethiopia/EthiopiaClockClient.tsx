'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ETHIOPIA_TZ = 'Africa/Addis_Ababa'
export default function EthiopiaClockClient() {
  return <HeroClockDisplay tz={ETHIOPIA_TZ} countryCode="ET" countryName="Ethiopia" tzLabel="EAT · UTC+3" />
}
