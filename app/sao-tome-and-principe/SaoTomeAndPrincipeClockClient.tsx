'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const SAO_TOME_AND_PRINCIPE_TZ = 'Africa/Sao_Tome'
export default function SaoTomeAndPrincipeClockClient() {
  return <HeroClockDisplay tz={SAO_TOME_AND_PRINCIPE_TZ} countryCode="ST" countryName="São Tomé and Príncipe" tzLabel="GMT · UTC+0" />
}
