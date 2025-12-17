import WorldClock from '@/components/WorldClock'

export default function Home() {
  return (
    <>
      {/* SEO H1 - visually integrated into WorldClock design */}
      <h1 className="sr-only">World Clock - Current Local Time in Any City</h1>
      <WorldClock />
    </>
  )
}
