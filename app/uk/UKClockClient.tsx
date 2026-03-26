'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const UK_TZ = 'Europe/London'
export default function UkClockClient() {
  return <HeroClockDisplay tz={UK_TZ} countryCode="GB" countryName="United Kingdom" tzLabel="GMT · UTC+0" />
}
