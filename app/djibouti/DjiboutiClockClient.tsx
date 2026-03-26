'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const DJIBOUTI_TZ = 'Africa/Djibouti'
export default function DjiboutiClockClient() {
  return <HeroClockDisplay tz={DJIBOUTI_TZ} countryCode="DJ" countryName="Djibouti" tzLabel="EAT · UTC+3" />
}
