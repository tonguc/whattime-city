'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const ERITREA_TZ = 'Africa/Asmara'
export default function EritreaClockClient() {
  return <HeroClockDisplay tz={ERITREA_TZ} countryCode="ER" countryName="Eritrea" tzLabel="EAT · UTC+3" />
}
