'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const UNITED_ARAB_EMIRATES_TZ = 'Asia/Dubai'
export default function UnitedArabEmiratesClockClient() {
  return <HeroClockDisplay tz={UNITED_ARAB_EMIRATES_TZ} countryCode="AE" countryName="United Arab Emirates" tzLabel="GST · UTC+4" />
}
