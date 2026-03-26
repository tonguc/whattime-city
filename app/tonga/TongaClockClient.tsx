'use client'
import HeroClockDisplay from '@/components/HeroClockDisplay'
const TONGA_TZ = 'Pacific/Tongatapu'
export default function TongaClockClient() {
  return <HeroClockDisplay tz={TONGA_TZ} countryCode="TO" countryName="Tonga" tzLabel="TOT · UTC+13" />
}
