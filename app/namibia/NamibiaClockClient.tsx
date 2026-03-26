'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NAMIBIA_TZ = 'Africa/Windhoek'
export default function NamibiaClockClient() {
  return <HeroClockDisplay tz={NAMIBIA_TZ} countryCode="NA" countryName="Namibia" tzLabel="CAT · UTC+2" />
}
