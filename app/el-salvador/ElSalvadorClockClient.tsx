'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const EL_SALVADOR_TZ = 'America/El_Salvador'
export default function ElSalvadorClockClient() {
  return <HeroClockDisplay tz={EL_SALVADOR_TZ} countryCode="SV" countryName="El Salvador" tzLabel="CST · UTC-6" />
}
