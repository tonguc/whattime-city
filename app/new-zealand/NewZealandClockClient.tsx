'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const NEW_ZEALAND_TZ = 'Pacific/Auckland'
export default function NewZealandClockClient() {
  return <HeroClockDisplay tz={NEW_ZEALAND_TZ} countryCode="NZ" countryName="New Zealand" tzLabel="NZST · UTC+12" />
}
