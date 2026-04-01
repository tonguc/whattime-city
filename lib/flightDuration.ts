/**
 * Flight duration estimator
 * Priority: 1) Static lookup table (real-world averages)
 *           2) Haversine distance + speed model fallback
 */

export interface FlightRange {
  min: number  // minutes
  max: number  // minutes
  mid: number  // minutes — used as default in calculator
}

// ---------------------------------------------------------------------------
// Static lookup table — real-world average durations for popular routes
// Keys are sorted alphabetically: "city-a:city-b" (a < b)
// Both directions included where east/westbound differ significantly
// ---------------------------------------------------------------------------
const ROUTES: Record<string, FlightRange> = {
  // ── North America ↔ Europe ──────────────────────────────────────────────
  'boston:london':          { min: 395, max: 455, mid: 420 },  // 6h35–7h35
  'boston:paris':           { min: 410, max: 460, mid: 430 },
  'chicago:london':         { min: 470, max: 530, mid: 500 },  // 7h50–8h50
  'chicago:paris':          { min: 480, max: 540, mid: 510 },
  'los-angeles:london':     { min: 620, max: 700, mid: 660 },  // 10h20–11h40
  'los-angeles:paris':      { min: 640, max: 720, mid: 680 },
  'los-angeles:frankfurt':  { min: 640, max: 720, mid: 680 },
  'miami:london':           { min: 510, max: 570, mid: 535 },
  'miami:madrid':           { min: 475, max: 535, mid: 505 },
  'new-york:amsterdam':     { min: 450, max: 510, mid: 480 },
  'new-york:frankfurt':     { min: 465, max: 540, mid: 500 },
  'new-york:lisbon':        { min: 420, max: 470, mid: 445 },
  'london:new-york':        { min: 415, max: 455, mid: 435 },  // shorter westbound
  'new-york:london':        { min: 425, max: 465, mid: 445 },  // asymmetric: jet stream
  'new-york:madrid':        { min: 450, max: 510, mid: 475 },
  'new-york:paris':         { min: 440, max: 510, mid: 470 },
  'new-york:rome':          { min: 500, max: 560, mid: 530 },
  'toronto:london':         { min: 435, max: 490, mid: 460 },
  'washington-dc:london':   { min: 430, max: 490, mid: 455 },

  // ── North America ↔ Asia ────────────────────────────────────────────────
  'los-angeles:beijing':    { min: 685, max: 745, mid: 720 },
  'los-angeles:hong-kong':  { min: 740, max: 810, mid: 775 },
  'los-angeles:seoul':      { min: 640, max: 700, mid: 670 },
  'los-angeles:shanghai':   { min: 700, max: 760, mid: 730 },
  'los-angeles:singapore':  { min: 840, max: 920, mid: 880 },
  'los-angeles:tokyo':      { min: 645, max: 715, mid: 680 },
  'new-york:beijing':       { min: 820, max: 880, mid: 850 },
  'new-york:hong-kong':     { min: 870, max: 945, mid: 905 },
  'new-york:seoul':         { min: 835, max: 905, mid: 870 },
  'new-york:shanghai':      { min: 845, max: 915, mid: 880 },
  'new-york:singapore':     { min: 1015, max: 1105, mid: 1060 },
  'new-york:tokyo':         { min: 830, max: 900, mid: 865 },

  // ── North America internal ───────────────────────────────────────────────
  'chicago:los-angeles':    { min: 250, max: 285, mid: 265 },
  'chicago:new-york':       { min: 135, max: 155, mid: 145 },
  'denver:new-york':        { min: 235, max: 265, mid: 250 },
  'los-angeles:new-york':   { min: 310, max: 345, mid: 330 },
  'miami:new-york':         { min: 165, max: 195, mid: 180 },
  'los-angeles:seattle':    { min: 150, max: 175, mid: 160 },
  'chicago:miami':          { min: 195, max: 225, mid: 210 },
  'los-angeles:mexico-city':{ min: 220, max: 255, mid: 235 },
  'new-york:toronto':       { min: 80,  max: 100, mid: 90  },

  // ── Europe ↔ Middle East ────────────────────────────────────────────────
  'amsterdam:dubai':        { min: 415, max: 455, mid: 435 },
  'frankfurt:dubai':        { min: 400, max: 440, mid: 420 },
  'istanbul:dubai':         { min: 195, max: 225, mid: 210 },
  'london:dubai':           { min: 400, max: 440, mid: 420 },
  'london:istanbul':        { min: 220, max: 250, mid: 235 },
  'paris:dubai':            { min: 420, max: 460, mid: 440 },
  'frankfurt:istanbul':     { min: 195, max: 225, mid: 210 },
  'moscow:dubai':           { min: 235, max: 265, mid: 250 },

  // ── Europe ↔ Asia ───────────────────────────────────────────────────────
  'amsterdam:singapore':    { min: 760, max: 825, mid: 790 },
  'amsterdam:tokyo':        { min: 685, max: 735, mid: 710 },
  'frankfurt:beijing':      { min: 590, max: 640, mid: 615 },
  'frankfurt:hong-kong':    { min: 650, max: 710, mid: 680 },
  'frankfurt:singapore':    { min: 700, max: 760, mid: 730 },
  'frankfurt:tokyo':        { min: 680, max: 740, mid: 710 },
  'london:beijing':         { min: 590, max: 645, mid: 615 },
  'london:delhi':           { min: 505, max: 550, mid: 525 },
  'london:hong-kong':       { min: 685, max: 740, mid: 715 },
  'london:mumbai':          { min: 535, max: 580, mid: 555 },
  'london:singapore':       { min: 760, max: 820, mid: 790 },
  'london:sydney':          { min: 1220, max: 1320, mid: 1270 }, // ~21h via Asia
  'london:tokyo':           { min: 685, max: 740, mid: 715 },
  'paris:beijing':          { min: 600, max: 650, mid: 625 },
  'paris:hong-kong':        { min: 680, max: 730, mid: 705 },
  'paris:tokyo':            { min: 700, max: 755, mid: 725 },
  'moscow:beijing':         { min: 445, max: 490, mid: 465 },
  'moscow:tokyo':           { min: 555, max: 605, mid: 580 },

  // ── Europe internal ──────────────────────────────────────────────────────
  'amsterdam:istanbul':     { min: 210, max: 240, mid: 225 },
  'amsterdam:london':       { min: 70,  max: 90,  mid: 80  },
  'amsterdam:paris':        { min: 65,  max: 80,  mid: 72  },
  'amsterdam:rome':         { min: 135, max: 160, mid: 148 },
  'barcelona:london':       { min: 130, max: 155, mid: 142 },
  'barcelona:paris':        { min: 110, max: 130, mid: 120 },
  'berlin:london':          { min: 125, max: 150, mid: 135 },
  'berlin:paris':           { min: 105, max: 130, mid: 115 },
  'frankfurt:london':       { min: 115, max: 140, mid: 125 },
  'frankfurt:paris':        { min: 85,  max: 105, mid: 95  },
  'istanbul:london':        { min: 215, max: 250, mid: 232 },
  'istanbul:moscow':        { min: 200, max: 230, mid: 215 },
  'istanbul:paris':         { min: 205, max: 240, mid: 220 },
  'london:madrid':          { min: 140, max: 165, mid: 150 },
  'london:paris':           { min: 80,  max: 100, mid: 90  },
  'london:rome':            { min: 160, max: 185, mid: 170 },
  'madrid:paris':           { min: 120, max: 145, mid: 130 },
  'milan:london':           { min: 140, max: 165, mid: 152 },
  'milan:paris':            { min: 95,  max: 115, mid: 105 },
  'munich:london':          { min: 130, max: 155, mid: 140 },
  'paris:rome':             { min: 130, max: 155, mid: 140 },
  'rome:london':            { min: 160, max: 185, mid: 172 },
  'vienna:london':          { min: 155, max: 180, mid: 165 },
  'warsaw:london':          { min: 175, max: 205, mid: 188 },
  'zurich:london':          { min: 110, max: 135, mid: 120 },

  // ── Middle East ↔ Asia ──────────────────────────────────────────────────
  'dubai:hong-kong':        { min: 430, max: 475, mid: 452 },
  'dubai:kuala-lumpur':     { min: 385, max: 425, mid: 405 },
  'dubai:mumbai':           { min: 175, max: 205, mid: 190 },
  'dubai:singapore':        { min: 415, max: 455, mid: 435 },
  'dubai:tokyo':            { min: 565, max: 615, mid: 590 },
  'dubai:delhi':            { min: 205, max: 235, mid: 220 },
  'dubai:bangkok':          { min: 380, max: 420, mid: 400 },

  // ── Asia internal ────────────────────────────────────────────────────────
  'bangkok:hong-kong':      { min: 165, max: 195, mid: 180 },
  'bangkok:singapore':      { min: 130, max: 155, mid: 140 },
  'beijing:hong-kong':      { min: 195, max: 225, mid: 210 },
  'beijing:seoul':          { min: 125, max: 150, mid: 135 },
  'beijing:shanghai':       { min: 125, max: 150, mid: 135 },
  'beijing:singapore':      { min: 380, max: 420, mid: 400 },
  'beijing:tokyo':          { min: 215, max: 245, mid: 230 },
  'delhi:hong-kong':        { min: 320, max: 360, mid: 340 },
  'delhi:singapore':        { min: 330, max: 370, mid: 350 },
  'delhi:tokyo':            { min: 480, max: 530, mid: 505 },
  'hong-kong:singapore':    { min: 220, max: 255, mid: 237 },
  'hong-kong:tokyo':        { min: 220, max: 255, mid: 237 },
  'kuala-lumpur:singapore': { min: 45,  max: 60,  mid: 52  },
  'kuala-lumpur:tokyo':     { min: 385, max: 425, mid: 405 },
  'mumbai:singapore':       { min: 315, max: 355, mid: 335 },
  'seoul:singapore':        { min: 360, max: 400, mid: 380 },
  'seoul:tokyo':            { min: 130, max: 155, mid: 140 },
  'shanghai:singapore':     { min: 320, max: 360, mid: 340 },
  'shanghai:tokyo':         { min: 175, max: 205, mid: 190 },
  'singapore:sydney':       { min: 465, max: 510, mid: 487 },
  'singapore:tokyo':        { min: 385, max: 425, mid: 405 },
  'sydney:tokyo':           { min: 555, max: 610, mid: 583 },

  // ── Americas ────────────────────────────────────────────────────────────
  'bogota:miami':           { min: 190, max: 220, mid: 205 },
  'buenos-aires:miami':     { min: 525, max: 575, mid: 550 },
  'buenos-aires:new-york':  { min: 605, max: 660, mid: 632 },
  'buenos-aires:sao-paulo': { min: 155, max: 185, mid: 170 },
  'lima:miami':             { min: 320, max: 360, mid: 340 },
  'mexico-city:new-york':   { min: 285, max: 325, mid: 305 },
  'sao-paulo:miami':        { min: 490, max: 540, mid: 515 },
  'sao-paulo:new-york':     { min: 590, max: 650, mid: 620 },

  // ── Africa ──────────────────────────────────────────────────────────────
  'cairo:dubai':            { min: 215, max: 250, mid: 232 },
  'cairo:london':           { min: 290, max: 325, mid: 308 },
  'johannesburg:dubai':     { min: 495, max: 545, mid: 520 },
  'johannesburg:london':    { min: 635, max: 695, mid: 665 },
  'nairobi:dubai':          { min: 290, max: 325, mid: 308 },
  'nairobi:london':         { min: 515, max: 565, mid: 540 },

  // ── Oceania ─────────────────────────────────────────────────────────────
  'melbourne:singapore':    { min: 445, max: 490, mid: 467 },
  'sydney:singapore':       { min: 465, max: 510, mid: 487 },
}

// ---------------------------------------------------------------------------
// Haversine great-circle distance (km)
// ---------------------------------------------------------------------------
function haversineKm(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

// ---------------------------------------------------------------------------
// Speed model — avg cruise speed by distance bracket (km/h)
// Short flights spend more time climbing/descending, true airspeed lower
// ---------------------------------------------------------------------------
function cruiseSpeed(km: number): number {
  if (km < 500)  return 600
  if (km < 1500) return 750
  if (km < 4000) return 850
  if (km < 8000) return 890
  return 905
}

// Overhead: taxi + takeoff + approach + landing (minutes)
function overhead(km: number): number {
  if (km < 500)  return 30
  if (km < 2000) return 40
  if (km < 6000) return 50
  return 60
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export function estimateFlightDuration(
  depSlug: string, depLat: number, depLng: number,
  arrSlug: string, arrLat: number, arrLng: number,
): FlightRange {
  // Lookup — try both orderings
  const keyA = [depSlug, arrSlug].sort().join(':')
  if (ROUTES[keyA]) return ROUTES[keyA]

  // Haversine fallback
  const km = haversineKm(depLat, depLng, arrLat, arrLng)
  // Add ~5% for ATC routing vs great-circle
  const routedKm = km * 1.05
  const speed = cruiseSpeed(routedKm)
  const flightMins = Math.round((routedKm / speed) * 60)
  const totalMins = flightMins + overhead(routedKm)

  // Range: ±10% short, ±13% long
  const pct = routedKm > 6000 ? 0.13 : 0.10
  const minMins = Math.round(totalMins * (1 - pct))
  const maxMins = Math.round(totalMins * (1 + pct))

  return { min: minMins, max: maxMins, mid: totalMins }
}

export function formatDuration(minutes: number): string {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? `${h}h` : `${h}h ${m}m`
}
