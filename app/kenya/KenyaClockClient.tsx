'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const KENYA_TZ = 'Africa/Nairobi'
export default function KenyaClockClient() {
  return <HeroClockDisplay tz={KENYA_TZ} countryCode="KE" countryName="Kenya" tzLabel="EAT · UTC+3" />
}
