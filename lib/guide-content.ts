// Guide content configuration for each city
// Structure mirrors NYC as the gold standard

// Region types for smart city recommendations (5 regions + hybrid approach)
export type CityRegion = 'AMERICAS' | 'EUROPE' | 'MENA' | 'ASIA' | 'OCEANIA'

export interface GuideConfig {
  citySlug: string
  cityName: string
  timezone: string
  timezoneAbbr: string
  timezoneName: string
  utcOffset: number // hours from UTC (e.g., NYC = -5, London = 0)
  icon: string
  tagline: string
  region: CityRegion // For smart city recommendations
  coordinates: { lat: number; lng: number } // For technical Quick Facts
  
  // SEO
  seo: {
    title: string
    description: string
    keywords: string[]
    ogTitle: string
    ogDescription: string
  }
  
  // Page-specific SEO
  pages: {
    overview: PageSEO
    businessHours: PageSEO
    bestTimeToVisit: PageSEO
    remoteWork: PageSEO
    twentyFourHours: PageSEO
    callTimes: PageSEO
    stockMarket: PageSEO
    holidays: PageSEO
    digitalNomad: PageSEO
    timeDifference: PageSEO
    travelPlanning: PageSEO
  }
  
  // Cluster cards for overview page
  clusters: ClusterCard[]
}

interface PageSEO {
  title: string
  description: string
  keywords: string[]
}

interface ClusterCard {
  slug: string
  icon: string
  title: string
  desc: string
}

// ===================
// NEW YORK (Gold Standard)
// ===================
export const newYorkGuide: GuideConfig = {
  citySlug: 'new-york',
  cityName: 'New York',
  timezone: 'America/New_York',
  timezoneAbbr: 'EST/EDT',
  timezoneName: 'Eastern Time',
  utcOffset: -5,
  icon: '🗽',
  tagline: 'Everything you need to know about time in the city that never sleeps',
  region: 'AMERICAS',
  coordinates: { lat: 40.7128, lng: -74.0060 },
  
  seo: {
    title: 'New York Time Zone Guide | EST/EDT, Business Hours & More',
    description: 'Complete NYC time zone guide. Business hours, Wall Street trading times, best time to call NYC, remote work overlap, holidays, and local tips. Updated regularly.',
    keywords: ['new york time zone', 'nyc time now', 'est edt time', 'new york business hours', 'wall street hours', 'best time to call new york', 'nyc time difference', 'eastern time zone guide'],
    ogTitle: 'New York Time Zone Guide | Complete NYC Time Resource',
    ogDescription: 'Everything about NYC time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'New York Time Zone Guide | EST/EDT, Business Hours & More',
      description: 'Complete NYC time zone guide. Business hours, Wall Street trading times, best time to call NYC, remote work overlap, holidays, and local tips.',
      keywords: ['new york time zone', 'nyc time', 'est edt'],
    },
    businessHours: {
      title: 'NYC Business Hours | Banks, Stores, Restaurants & More',
      description: 'What time do businesses open in NYC? Complete guide to New York store hours, bank schedules, restaurant times, museum hours, and government offices.',
      keywords: ['nyc business hours', 'new york store hours', 'what time do banks open nyc', 'nyc restaurant hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit NYC | Weather, Crowds & Prices by Month',
      description: 'When to visit New York? Month-by-month guide with weather, tourist crowds, hotel prices, and major events. Plus Manhattanhenge dates and locals-only tips.',
      keywords: ['best time to visit new york', 'best month to visit nyc', 'new york weather by month', 'nyc crowd calendar'],
    },
    remoteWork: {
      title: 'Working with NYC Teams Remotely | Time Zone Overlap & Meeting Times',
      description: 'Remote work guide for NYC collaboration. Find overlap hours with London, Tokyo, Sydney. Best meeting times, async tips, and NYC work culture.',
      keywords: ['remote work new york time zone', 'working with nyc team', 'time zone overlap calculator', 'best meeting time new york'],
    },
    twentyFourHours: {
      title: "NYC 24 Hour Guide | What's Open & When in New York City",
      description: "NYC hour-by-hour: when New Yorkers wake up, rush hours, lunch crowds, happy hour, nightlife peaks, and what's open at 3 AM.",
      keywords: ['24 hours in new york', 'nyc rush hour times', 'when do bars close nyc', 'late night food new york'],
    },
    callTimes: {
      title: 'Best Time to Call New York | From UK, India, Australia & More',
      description: 'When to call NYC? Best calling times from London, Mumbai, Tokyo, Sydney, Dubai. Business hours overlap and optimal windows for personal calls.',
      keywords: ['best time to call new york', 'best time to call usa from uk', 'call new york from london time'],
    },
    stockMarket: {
      title: 'NYSE & NASDAQ Trading Hours | Pre-Market, Regular & After-Hours',
      description: 'NYSE opens 9:30 AM ET. Complete Wall Street trading schedule with pre-market (4 AM), regular hours, after-hours, and market holidays.',
      keywords: ['nyse trading hours', 'nasdaq opening time', 'wall street hours', 'stock market hours est', 'pre market hours nyse'],
    },
    holidays: {
      title: "NYC Holidays | Bank Closures, Store Hours & What's Open",
      description: "New York public holidays calendar. What's closed on Thanksgiving, Christmas, July 4th? Bank hours, store schedules, transit changes.",
      keywords: ['new york public holidays', 'nyc bank holidays', 'what is closed thanksgiving nyc'],
    },
    digitalNomad: {
      title: 'Digital Nomad NYC Guide | Coworking, WiFi Cafes & Costs',
      description: 'Work remotely from New York. Best coworking spaces ($200-600/mo), laptop-friendly cafes, free WiFi spots, cost of living breakdown.',
      keywords: ['digital nomad new york', 'best coworking spaces nyc', 'cafes with wifi manhattan'],
    },
    timeDifference: {
      title: 'NYC Time Difference Calculator | EST/EDT vs World Cities',
      description: 'New York time difference to London (+5h), Tokyo (+14h), Dubai (+9h), Sydney (+16h) and 50+ cities. EST vs GMT explained.',
      keywords: ['new york time difference', 'nyc vs london time', 'est vs gmt hours'],
    },
    travelPlanning: {
      title: 'NYC Travel Guide | Flight Times, Jet Lag & Airport Tips',
      description: 'Flying to New York? Flight times from London (7h), Tokyo (14h), Sydney (22h). Jet lag recovery tips, JFK/EWR/LGA to Manhattan transport.',
      keywords: ['flight time to new york', 'jet lag new york tips', 'jfk to manhattan best way'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Banks, offices, stores, and government hours in NYC' },
    { slug: 'best-time-to-visit', icon: '🗽', title: 'Best Time to Visit', desc: 'Month-by-month weather, crowds, and events guide' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with NYC teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in NYC', desc: "The city's daily rhythm from dawn to night" },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities worldwide' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'NYSE & NASDAQ trading times for global investors' },
    { slug: 'holidays', icon: '📅', title: 'Public Holidays', desc: 'Bank holidays, closures, and what to expect' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Coworking, cafes, WiFi, and cost of living' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'NYC time compared to London, Tokyo, Dubai, and more' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, jet lag tips, and arrival advice' },
  ],
}

// ===================
// LONDON
// ===================
export const londonGuide: GuideConfig = {
  citySlug: 'london',
  cityName: 'London',
  timezone: 'Europe/London',
  timezoneAbbr: 'GMT/BST',
  timezoneName: 'Greenwich Mean Time',
  utcOffset: 0,
  icon: '🎡',
  tagline: 'Your complete guide to time in the capital of the United Kingdom',
  region: 'EUROPE',
  coordinates: { lat: 51.5074, lng: -0.1278 },
  
  seo: {
    title: 'London Time Zone Guide | GMT/BST, Business Hours & More',
    description: 'Complete London time zone guide. Business hours, stock market times, best time to call London, remote work overlap, UK holidays, and local tips.',
    keywords: ['london time zone', 'uk time now', 'gmt bst time', 'london business hours', 'london stock exchange hours', 'best time to call london', 'uk time difference', 'greenwich mean time guide'],
    ogTitle: 'London Time Zone Guide | Complete UK Time Resource',
    ogDescription: 'Everything about London time: business hours, stock market, UK holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'London Time Zone Guide | GMT/BST, Business Hours & More',
      description: 'Complete London time zone guide. Business hours, LSE trading times, best time to call London, remote work overlap, UK holidays, and local tips.',
      keywords: ['london time zone', 'uk time', 'gmt bst'],
    },
    businessHours: {
      title: 'London Business Hours | Banks, Shops, Restaurants & More',
      description: 'What time do businesses open in London? Complete guide to UK store hours, bank schedules, restaurant times, museum hours, and government offices.',
      keywords: ['london business hours', 'uk shop hours', 'what time do banks open uk', 'london restaurant hours', 'sunday trading hours uk'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit London | Weather, Crowds & Prices by Month',
      description: 'When to visit London? Month-by-month guide with weather, tourist crowds, hotel prices, and major events. Plus Chelsea Flower Show dates and locals-only tips.',
      keywords: ['best time to visit london', 'best month to visit uk', 'london weather by month', 'london crowd calendar', 'cheapest time to visit london'],
    },
    remoteWork: {
      title: 'Working with London Teams Remotely | Time Zone Overlap & Meeting Times',
      description: 'Remote work guide for London collaboration. Find overlap hours with NYC, Tokyo, Sydney. Best meeting times, async tips, and UK work culture.',
      keywords: ['remote work london time zone', 'working with uk team', 'time zone overlap calculator', 'best meeting time london'],
    },
    twentyFourHours: {
      title: "London 24 Hour Guide | What's Open & When in the UK Capital",
      description: "London hour-by-hour: when Londoners wake up, rush hours, lunch crowds, pub hours, nightlife peaks, and what's open late.",
      keywords: ['24 hours in london', 'london rush hour times', 'when do pubs close london', 'late night food london'],
    },
    callTimes: {
      title: 'Best Time to Call London | From USA, India, Australia & More',
      description: 'When to call London? Best calling times from New York, Mumbai, Tokyo, Sydney, Dubai. Business hours overlap and optimal windows for personal calls.',
      keywords: ['best time to call london', 'best time to call uk from usa', 'call london from new york time'],
    },
    stockMarket: {
      title: 'London Stock Exchange Hours | LSE Trading Times for Global Investors',
      description: 'LSE opens 8:00 AM GMT. Complete London Stock Exchange trading schedule with auction periods, regular hours, and market holidays.',
      keywords: ['london stock exchange hours', 'lse trading times', 'ftse 100 hours', 'uk market hours', 'lse opening time'],
    },
    holidays: {
      title: "UK Bank Holidays | London Closures, Store Hours & What's Open",
      description: "UK public holidays calendar. What's closed on Boxing Day, Christmas, Easter? Bank hours, store schedules, transport changes.",
      keywords: ['uk bank holidays', 'london public holidays', 'what is closed boxing day uk', 'bank holiday monday'],
    },
    digitalNomad: {
      title: 'Digital Nomad London Guide | Coworking, WiFi Cafes & Costs',
      description: 'Work remotely from London. Best coworking spaces (£200-500/mo), laptop-friendly cafes, free WiFi spots, cost of living breakdown.',
      keywords: ['digital nomad london', 'best coworking spaces london', 'cafes with wifi london', 'remote work london'],
    },
    timeDifference: {
      title: 'London Time Difference Calculator | GMT/BST vs World Cities',
      description: 'London time difference to New York (-5h), Tokyo (+9h), Dubai (+4h), Sydney (+11h) and 50+ cities. GMT vs EST explained.',
      keywords: ['london time difference', 'uk vs new york time', 'gmt vs est hours', 'london tokyo time difference'],
    },
    travelPlanning: {
      title: 'London Travel Guide | Flight Times, Jet Lag & Airport Tips',
      description: 'Flying to London? Flight times from New York (7h), Tokyo (12h), Sydney (23h). Jet lag recovery tips, Heathrow/Gatwick to central London transport.',
      keywords: ['flight time to london', 'jet lag london tips', 'heathrow to central london'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Banks, shops, restaurants, and government hours in London' },
    { slug: 'best-time-to-visit', icon: '🇬🇧', title: 'Best Time to Visit', desc: 'Month-by-month weather, crowds, and events guide' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with London teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in London', desc: "The city's daily rhythm from dawn to night" },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities worldwide' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'LSE & FTSE trading times for global investors' },
    { slug: 'holidays', icon: '📅', title: 'UK Bank Holidays', desc: 'Public holidays, closures, and what to expect' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Coworking, cafes, WiFi, and cost of living' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'London time compared to NYC, Tokyo, Dubai, and more' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, jet lag tips, and arrival advice' },
  ],
}

// ===================
// TOKYO
// ===================
export const tokyoGuide: GuideConfig = {
  citySlug: 'tokyo',
  cityName: 'Tokyo',
  timezone: 'Asia/Tokyo',
  timezoneAbbr: 'JST',
  timezoneName: 'Japan Standard Time',
  utcOffset: 9,
  icon: '🍣',
  tagline: 'Your complete guide to time in Japan\'s bustling capital',
  region: 'ASIA',
  coordinates: { lat: 35.6762, lng: 139.6503 },
  
  seo: {
    title: 'Tokyo Time Zone Guide | JST, Business Hours & More',
    description: 'Complete Tokyo time zone guide. Business hours, stock market times, best time to call Tokyo, remote work overlap, Japanese holidays, and local tips.',
    keywords: ['tokyo time zone', 'japan time now', 'jst time', 'tokyo business hours', 'tokyo stock exchange hours', 'best time to call tokyo', 'japan time difference'],
    ogTitle: 'Tokyo Time Zone Guide | Complete Japan Time Resource',
    ogDescription: 'Everything about Tokyo time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Tokyo Time Zone Guide | JST, Business Hours & More',
      description: 'Complete Tokyo time zone guide. Business hours, TSE trading times, best time to call Tokyo, remote work overlap, Japanese holidays, and local tips.',
      keywords: ['tokyo time zone', 'japan time', 'jst'],
    },
    businessHours: {
      title: 'Tokyo Business Hours | Shops, Banks, Restaurants & Konbini',
      description: 'What time do businesses open in Tokyo? Complete guide to Japanese store hours, bank schedules, restaurant times, and 24-hour konbini convenience stores.',
      keywords: ['tokyo business hours', 'japan shop hours', 'what time do banks open tokyo', 'konbini hours', 'japanese restaurant hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Tokyo | Cherry Blossoms, Weather & Crowds',
      description: 'When to visit Tokyo? Month-by-month guide with weather, cherry blossom dates, tourist crowds, and prices. Plus Golden Week warnings and locals-only tips.',
      keywords: ['best time to visit tokyo', 'tokyo cherry blossom season', 'japan weather by month', 'golden week japan', 'tokyo crowd calendar'],
    },
    remoteWork: {
      title: 'Working with Tokyo Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Tokyo collaboration. Find overlap hours with NYC, London, Sydney. Best meeting times, async tips, and Japanese work culture.',
      keywords: ['remote work tokyo time zone', 'working with japan team', 'jst time zone overlap', 'best meeting time tokyo'],
    },
    twentyFourHours: {
      title: 'Tokyo 24 Hour Guide | What\'s Open & When in Japan\'s Capital',
      description: 'Tokyo hour-by-hour: morning rush, lunch crowds, after-work izakaya, last train times, and what\'s open at 3 AM. The city that actually does sleep.',
      keywords: ['24 hours in tokyo', 'tokyo rush hour times', 'last train tokyo', 'late night food tokyo', 'izakaya hours'],
    },
    callTimes: {
      title: 'Best Time to Call Tokyo | From USA, UK, Australia & More',
      description: 'When to call Tokyo? Best calling times from New York, London, Sydney. Business hours overlap and optimal windows for personal calls to Japan.',
      keywords: ['best time to call tokyo', 'best time to call japan from usa', 'call tokyo from london time'],
    },
    stockMarket: {
      title: 'Tokyo Stock Exchange Hours | TSE & Nikkei Trading Times',
      description: 'TSE opens 9:00 AM JST with lunch break. Complete Tokyo Stock Exchange schedule with morning/afternoon sessions, Nikkei 225, and market holidays.',
      keywords: ['tokyo stock exchange hours', 'tse trading times', 'nikkei 225 hours', 'japan market hours', 'tse lunch break'],
    },
    holidays: {
      title: 'Japanese Holidays | Golden Week, Obon & What\'s Closed',
      description: 'Japan public holidays calendar. What\'s closed during Golden Week, Obon, New Year? Bank hours, store schedules, travel warnings.',
      keywords: ['japan public holidays', 'golden week dates', 'obon holiday japan', 'japanese new year closures'],
    },
    digitalNomad: {
      title: 'Digital Nomad Tokyo Guide | Coworking, WiFi Cafes & Costs',
      description: 'Work remotely from Tokyo. Best coworking spaces (¥20,000-50,000/mo), laptop-friendly cafes, pocket WiFi, cost of living breakdown, and visa options.',
      keywords: ['digital nomad tokyo', 'best coworking spaces tokyo', 'cafes with wifi tokyo', 'japan digital nomad visa'],
    },
    timeDifference: {
      title: 'Tokyo Time Difference Calculator | JST vs World Cities',
      description: 'Tokyo time difference to New York (+14h), London (+9h), Sydney (+2h) and 50+ cities. JST vs EST/GMT explained. Live converter included.',
      keywords: ['tokyo time difference', 'japan vs new york time', 'jst vs est hours', 'tokyo london time difference'],
    },
    travelPlanning: {
      title: 'Tokyo Travel Guide | Flight Times, Jet Lag & Airport Tips',
      description: 'Flying to Tokyo? Flight times from NYC (14h), London (12h), Sydney (10h). Jet lag recovery tips, Narita vs Haneda, JR Pass, and getting to the city.',
      keywords: ['flight time to tokyo', 'jet lag tokyo tips', 'narita vs haneda', 'jr pass worth it'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Shops, banks, restaurants, and konbini in Tokyo' },
    { slug: 'best-time-to-visit', icon: '🌸', title: 'Best Time to Visit', desc: 'Cherry blossoms, weather, crowds, and events' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with Tokyo teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in Tokyo', desc: 'The city\'s daily rhythm from dawn to last train' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities worldwide' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'TSE & Nikkei trading times for global investors' },
    { slug: 'holidays', icon: '📅', title: 'Japanese Holidays', desc: 'Golden Week, Obon, and what to expect' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Coworking, cafes, WiFi, and cost of living' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Tokyo time compared to NYC, London, Sydney' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, jet lag tips, and arrival advice' },
  ],
}

// ===================
// DUBAI
// ===================
export const dubaiGuide: GuideConfig = {
  citySlug: 'dubai',
  cityName: 'Dubai',
  timezone: 'Asia/Dubai',
  timezoneAbbr: 'GST',
  timezoneName: 'Gulf Standard Time',
  utcOffset: 4,
  icon: '🏙️',
  tagline: 'Your complete guide to time in the UAE\'s global hub',
  region: 'MENA',
  coordinates: { lat: 25.2048, lng: 55.2708 },
  
  seo: {
    title: 'Dubai Time Zone Guide | GST, Business Hours & More',
    description: 'Complete Dubai time zone guide. Business hours, DFM stock market times, Friday-Saturday weekend, Islamic holidays, and local tips.',
    keywords: ['dubai time zone', 'uae time now', 'gst time', 'dubai business hours', 'dfm trading hours', 'dubai friday weekend'],
    ogTitle: 'Dubai Time Zone Guide | Complete UAE Time Resource',
    ogDescription: 'Everything about Dubai time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Dubai Time Zone Guide | GST, Business Hours & More',
      description: 'Complete Dubai time zone guide. Business hours, DFM trading times, Friday-Saturday weekend, Islamic holidays, and local tips.',
      keywords: ['dubai time zone', 'uae time', 'gst', 'gulf standard time'],
    },
    businessHours: {
      title: 'Dubai Business Hours | Shops, Banks, Malls & Souks',
      description: 'What time do businesses open in Dubai? Complete guide to UAE store hours, bank schedules, mall times, and the Friday-Saturday weekend.',
      keywords: ['dubai business hours', 'uae shop hours', 'dubai mall hours', 'dubai bank hours', 'friday weekend dubai'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Dubai | Weather, Events & Prices',
      description: 'When to visit Dubai? Month-by-month guide with weather (avoid summer heat!), tourist crowds, Ramadan dates, and prices.',
      keywords: ['best time to visit dubai', 'dubai weather by month', 'dubai summer heat', 'ramadan dubai', 'dubai tourist season'],
    },
    remoteWork: {
      title: 'Working with Dubai Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Dubai collaboration. Find overlap hours with NYC, London, Singapore. Best meeting times and UAE work culture.',
      keywords: ['remote work dubai time zone', 'working with uae team', 'gst time zone overlap', 'best meeting time dubai'],
    },
    twentyFourHours: {
      title: 'Dubai 24 Hour Guide | What\'s Open & When in the City',
      description: 'Dubai hour-by-hour: morning prayers, mall hours, evening souk life, and the 24-hour city that never sleeps.',
      keywords: ['24 hours in dubai', 'dubai nightlife hours', 'dubai mall opening times', 'late night dubai'],
    },
    callTimes: {
      title: 'Best Time to Call Dubai | From USA, UK, India & More',
      description: 'When to call Dubai? Best calling times from New York, London, Mumbai. Business hours overlap and optimal windows.',
      keywords: ['best time to call dubai', 'call dubai from usa', 'call dubai from uk time'],
    },
    stockMarket: {
      title: 'Dubai Stock Exchange Hours | DFM & ADX Trading Times',
      description: 'DFM opens 10:00 AM GST. Complete Dubai Financial Market schedule, ADX Abu Dhabi hours, and market holidays.',
      keywords: ['dubai stock exchange hours', 'dfm trading times', 'adx hours', 'uae market hours'],
    },
    holidays: {
      title: 'UAE Holidays | Ramadan, Eid & What\'s Closed',
      description: 'UAE public holidays calendar. What changes during Ramadan? Eid celebrations, National Day, and business impacts.',
      keywords: ['uae public holidays', 'ramadan dubai', 'eid holiday uae', 'dubai national day'],
    },
    digitalNomad: {
      title: 'Digital Nomad Dubai Guide | Coworking, WiFi & Remote Work Visa',
      description: 'Work remotely from Dubai. Best coworking spaces, laptop-friendly cafes, cost of living, and the famous UAE remote work visa.',
      keywords: ['digital nomad dubai', 'dubai remote work visa', 'coworking dubai', 'dubai cost of living'],
    },
    timeDifference: {
      title: 'Dubai Time Difference Calculator | GST vs World Cities',
      description: 'Dubai time difference to New York (+9h), London (+4h), Mumbai (+1.5h) and 50+ cities. GST explained. Live converter included.',
      keywords: ['dubai time difference', 'uae vs new york time', 'gst vs est hours', 'dubai london time difference'],
    },
    travelPlanning: {
      title: 'Dubai Travel Guide | Flight Times, Visa & Airport Tips',
      description: 'Flying to Dubai? Flight times from NYC (14h), London (7h), Mumbai (3h). DXB airport guide, visa on arrival, and getting around.',
      keywords: ['flight time to dubai', 'dubai airport guide', 'dxb terminal', 'dubai visa on arrival'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Shops, banks, malls, and the Friday-Saturday weekend' },
    { slug: 'best-time-to-visit', icon: '☀️', title: 'Best Time to Visit', desc: 'Weather, Ramadan, events, and avoiding summer heat' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with Dubai teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in Dubai', desc: 'The city\'s daily rhythm from dawn prayers to late nights' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities worldwide' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'DFM & ADX trading times for global investors' },
    { slug: 'holidays', icon: '📅', title: 'UAE Holidays', desc: 'Ramadan, Eid, National Day, and what to expect' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Coworking, remote work visa, and cost of living' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Dubai time compared to NYC, London, Mumbai' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, visa tips, and airport advice' },
  ],
}

// ===================
// SINGAPORE
// ===================
export const singaporeGuide: GuideConfig = {
  citySlug: 'singapore',
  cityName: 'Singapore',
  timezone: 'Asia/Singapore',
  timezoneAbbr: 'SGT',
  timezoneName: 'Singapore Standard Time',
  utcOffset: 8,
  icon: '🦁',
  tagline: 'Your complete guide to time in Asia\'s premier financial hub',
  region: 'ASIA',
  coordinates: { lat: 1.3521, lng: 103.8198 },
  
  seo: {
    title: 'Singapore Time Zone Guide | SGT, Business Hours & More',
    description: 'Complete Singapore time zone guide. Business hours, SGX stock market times, hawker center hours, public holidays, and local tips for the Lion City.',
    keywords: ['singapore time zone', 'singapore time now', 'sgt time', 'singapore business hours', 'sgx trading hours', 'singapore public holidays'],
    ogTitle: 'Singapore Time Zone Guide | Complete SGT Time Resource',
    ogDescription: 'Everything about Singapore time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Singapore Time Zone Guide | SGT, Business Hours & More',
      description: 'Complete Singapore time zone guide. Business hours, SGX trading times, hawker hours, public holidays, and local tips.',
      keywords: ['singapore time zone', 'singapore time', 'sgt', 'singapore standard time'],
    },
    businessHours: {
      title: 'Singapore Business Hours | Shops, Banks, Malls & Hawkers',
      description: 'What time do businesses open in Singapore? Complete guide to store hours, bank schedules, mall times, and 24-hour hawker centers.',
      keywords: ['singapore business hours', 'singapore shop hours', 'singapore bank hours', 'orchard road opening times', 'hawker center hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Singapore | Weather, Events & Prices',
      description: 'When to visit Singapore? Month-by-month guide with weather (it\'s always hot!), festival dates, F1 Grand Prix, and tourist tips.',
      keywords: ['best time to visit singapore', 'singapore weather by month', 'singapore f1 grand prix', 'singapore tourist season'],
    },
    remoteWork: {
      title: 'Working with Singapore Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Singapore collaboration. Find overlap hours with NYC, London, Sydney. Best meeting times and Singapore work culture.',
      keywords: ['remote work singapore time zone', 'working with singapore team', 'sgt time zone overlap', 'best meeting time singapore'],
    },
    twentyFourHours: {
      title: 'Singapore 24 Hour Guide | What\'s Open & When in the Lion City',
      description: 'Singapore hour-by-hour: morning kopi, lunch crowds, after-work drinks at Clarke Quay, and 24-hour hawker centers.',
      keywords: ['24 hours in singapore', 'singapore nightlife hours', 'late night food singapore', 'clarke quay hours'],
    },
    callTimes: {
      title: 'Best Time to Call Singapore | From USA, UK, Australia & More',
      description: 'When to call Singapore? Best calling times from New York, London, Sydney. Business hours overlap and optimal windows.',
      keywords: ['best time to call singapore', 'call singapore from usa', 'call singapore from uk time'],
    },
    stockMarket: {
      title: 'Singapore Stock Exchange Hours | SGX Trading Times',
      description: 'SGX opens 9:00 AM SGT. Complete Singapore Exchange schedule with pre-market, trading sessions, and market holidays.',
      keywords: ['singapore stock exchange hours', 'sgx trading times', 'singapore market hours', 'sgx pre market'],
    },
    holidays: {
      title: 'Singapore Public Holidays | CNY, Deepavali & What\'s Closed',
      description: 'Singapore public holidays calendar. Chinese New Year, Hari Raya, Deepavali, National Day - what\'s closed and what to expect.',
      keywords: ['singapore public holidays', 'chinese new year singapore', 'singapore national day', 'hari raya singapore'],
    },
    digitalNomad: {
      title: 'Digital Nomad Singapore Guide | Coworking, WiFi & Cost of Living',
      description: 'Work remotely from Singapore. Best coworking spaces, laptop-friendly cafes, fast WiFi everywhere, cost of living breakdown, and visa options.',
      keywords: ['digital nomad singapore', 'coworking singapore', 'singapore cost of living', 'singapore work visa'],
    },
    timeDifference: {
      title: 'Singapore Time Difference Calculator | SGT vs World Cities',
      description: 'Singapore time difference to New York (+13h), London (+8h), Sydney (-3h) and 50+ cities. SGT explained. Live converter included.',
      keywords: ['singapore time difference', 'singapore vs new york time', 'sgt vs est hours', 'singapore london time difference'],
    },
    travelPlanning: {
      title: 'Singapore Travel Guide | Flight Times, Changi & Getting Around',
      description: 'Flying to Singapore? Flight times from NYC (19h), London (13h), Sydney (8h). Changi Airport tips, MRT guide, and getting around.',
      keywords: ['flight time to singapore', 'changi airport guide', 'singapore mrt', 'singapore tourist pass'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Shops, banks, malls, and hawker centers' },
    { slug: 'best-time-to-visit', icon: '☀️', title: 'Best Time to Visit', desc: 'Weather, festivals, F1, and avoiding crowds' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with Singapore teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in Singapore', desc: 'The city\'s daily rhythm from kopi to supper' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities worldwide' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'SGX trading times for global investors' },
    { slug: 'holidays', icon: '📅', title: 'Public Holidays', desc: 'CNY, Deepavali, Hari Raya, and what to expect' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Coworking, WiFi, and cost of living' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Singapore time compared to NYC, London, Sydney' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, Changi tips, and getting around' },
  ],
}

// ===================
// PARIS GUIDE CONFIG
// ===================
export const parisGuide: GuideConfig = {
  citySlug: 'paris',
  cityName: 'Paris',
  timezone: 'Europe/Paris',
  timezoneAbbr: 'CET/CEST',
  timezoneName: 'Central European Time',
  utcOffset: 1,
  icon: '🗼',
  tagline: 'Your complete guide to time in the City of Light',
  region: 'EUROPE',
  coordinates: { lat: 48.8566, lng: 2.3522 },
  
  seo: {
    title: 'Paris Time Zone Guide | CET/CEST, Business Hours & More',
    description: 'Complete Paris time zone guide. Business hours, Euronext trading times, best time to call Paris, remote work overlap, French holidays, and local tips.',
    keywords: ['paris time zone', 'france time now', 'cet cest time', 'paris business hours', 'euronext paris hours', 'best time to call paris', 'french time difference'],
    ogTitle: 'Paris Time Zone Guide | Complete France Time Resource',
    ogDescription: 'Everything about Paris time: business hours, stock market, French holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Paris Time Zone Guide | CET/CEST, Business Hours & More',
      description: 'Complete Paris time zone guide. Business hours, Euronext trading times, best time to call Paris, remote work overlap, French holidays, and local tips.',
      keywords: ['paris time zone', 'france time', 'cet cest'],
    },
    businessHours: {
      title: 'Paris Business Hours | Shops, Banks, Restaurants & Museums',
      description: 'What time do businesses open in Paris? Complete guide to French store hours, bank schedules, restaurant times, museum hours, and Sunday closures.',
      keywords: ['paris business hours', 'france shop hours', 'what time do shops open paris', 'paris restaurant hours', 'sunday shopping paris'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Paris | Weather, Crowds & Prices by Month',
      description: 'When to visit Paris? Month-by-month guide with weather, tourist crowds, hotel prices, and major events. Fashion Week, Bastille Day, and locals-only tips.',
      keywords: ['best time to visit paris', 'best month to visit france', 'paris weather by month', 'paris crowd calendar', 'cheapest time to visit paris'],
    },
    remoteWork: {
      title: 'Working with Paris Teams Remotely | Time Zone Overlap & Meeting Times',
      description: 'Remote work guide for Paris collaboration. Find overlap hours with NYC, Tokyo, Sydney. Best meeting times, async tips, and French work culture.',
      keywords: ['remote work paris time zone', 'working with french team', 'time zone overlap calculator', 'best meeting time paris'],
    },
    twentyFourHours: {
      title: "Paris 24 Hour Guide | What's Open & When in the City of Light",
      description: "Paris hour-by-hour: when Parisians wake up, rush hours, lunch crowds, café terraces, nightlife peaks, and what's open late.",
      keywords: ['24 hours in paris', 'paris rush hour times', 'when do restaurants close paris', 'late night food paris'],
    },
    callTimes: {
      title: 'Best Time to Call Paris | From USA, UK, Australia & More',
      description: 'When to call Paris? Best calling times from New York, London, Tokyo, Sydney, Dubai. Business hours overlap and optimal windows for personal calls.',
      keywords: ['best time to call paris', 'best time to call france from usa', 'call paris from new york time'],
    },
    stockMarket: {
      title: 'Euronext Paris Hours | CAC 40 Trading Times for Global Investors',
      description: 'Euronext Paris opens 9:00 AM CET. Complete Paris stock exchange trading schedule with auction periods, regular hours, and market holidays.',
      keywords: ['euronext paris hours', 'cac 40 trading times', 'paris stock exchange hours', 'france market hours', 'euronext opening time'],
    },
    holidays: {
      title: "French Public Holidays | Paris Closures, Store Hours & What's Open",
      description: "French public holidays calendar. What's closed on Bastille Day, Christmas, Easter? Bank hours, store schedules, transport changes in Paris.",
      keywords: ['french public holidays', 'paris holidays', 'what is closed bastille day', 'france bank holidays'],
    },
    digitalNomad: {
      title: 'Digital Nomad Paris Guide | Coworking, WiFi Cafes & Costs',
      description: 'Work remotely from Paris. Best coworking spaces (€200-400/mo), laptop-friendly cafés, free WiFi spots, cost of living breakdown.',
      keywords: ['digital nomad paris', 'best coworking spaces paris', 'cafes with wifi paris', 'remote work paris'],
    },
    timeDifference: {
      title: 'Paris Time Difference Calculator | CET/CEST vs World Cities',
      description: 'Paris time difference to New York (-6h), Tokyo (+8h), Dubai (+3h), Sydney (+10h) and 50+ cities. CET vs EST explained.',
      keywords: ['paris time difference', 'france vs new york time', 'cet vs est hours', 'paris tokyo time difference'],
    },
    travelPlanning: {
      title: 'Paris Travel Time Guide | Flights, Jet Lag Tips & Getting Around',
      description: 'Plan your Paris trip: flight times from major cities, jet lag recovery tips, CDG vs Orly airports, and getting into central Paris.',
      keywords: ['paris flight times', 'cdg to paris', 'paris jet lag tips', 'how long flight to paris'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Shop, bank, and restaurant hours in Paris' },
    { slug: 'best-time-to-visit', icon: '☀️', title: 'Best Time to Visit', desc: 'Weather, crowds, and events by season' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work', desc: 'Working with Paris teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in Paris', desc: 'How Parisians live around the clock' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling windows from any country' },
    { slug: 'stock-market', icon: '📈', title: 'Euronext Paris', desc: 'CAC 40 trading hours and market info' },
    { slug: 'holidays', icon: '📅', title: 'French Holidays', desc: 'Public holidays and what closes' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad', desc: 'Coworking, cafés, and costs' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Paris time compared to major cities' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flights, airports, and jet lag tips' },
  ],
}

// ===================
// SYDNEY
// ===================
export const sydneyGuide: GuideConfig = {
  citySlug: 'sydney',
  cityName: 'Sydney',
  timezone: 'Australia/Sydney',
  timezoneAbbr: 'AEST/AEDT',
  timezoneName: 'Australian Eastern Time',
  utcOffset: 10,
  icon: '🦘',
  tagline: 'Your complete guide to time in Australia\'s harbour city',
  region: 'OCEANIA',
  coordinates: { lat: -33.8688, lng: 151.2093 },
  
  seo: {
    title: 'Sydney Time Zone Guide | AEST/AEDT, Business Hours & More',
    description: 'Complete Sydney time zone guide. Business hours, ASX trading times, best time to call Sydney, remote work overlap, Australian holidays, and local tips.',
    keywords: ['sydney time zone', 'australia time now', 'aest aedt time', 'sydney business hours', 'asx hours', 'best time to call sydney', 'sydney time difference'],
    ogTitle: 'Sydney Time Zone Guide | Complete Australia Time Resource',
    ogDescription: 'Everything about Sydney time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Sydney Time Zone Guide | AEST/AEDT, Business Hours & More',
      description: 'Complete Sydney time zone guide. Business hours, ASX trading times, best time to call Sydney, remote work overlap, Australian holidays, and local tips.',
      keywords: ['sydney time zone', 'australia time', 'aest aedt'],
    },
    businessHours: {
      title: 'Sydney Business Hours | Banks, Stores, Restaurants & More',
      description: 'What time do businesses open in Sydney? Complete guide to Australian store hours, bank schedules, restaurant times, and public holiday surcharges.',
      keywords: ['sydney business hours', 'australia shop hours', 'what time do banks open sydney', 'sydney restaurant hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Sydney | Weather, Crowds & Prices by Month',
      description: 'When to visit Sydney? Month-by-month guide with weather, tourist crowds, hotel prices, and major events. Summer is Dec-Feb!',
      keywords: ['best time to visit sydney', 'best month to visit australia', 'sydney weather by month', 'sydney crowd calendar'],
    },
    remoteWork: {
      title: 'Working with Sydney Teams Remotely | Time Zone Overlap & Meeting Times',
      description: 'Remote work guide for Sydney collaboration. Find overlap hours with NYC, London, Tokyo. Best meeting times, async tips, and Australian work culture.',
      keywords: ['remote work sydney time zone', 'working with sydney team', 'time zone overlap calculator', 'best meeting time sydney'],
    },
    twentyFourHours: {
      title: "Sydney 24 Hour Guide | What's Open & When in the Harbour City",
      description: "Sydney hour-by-hour: when Sydneysiders wake up, rush hours, beach crowds, happy hour, nightlife peaks, and what's open late.",
      keywords: ['24 hours in sydney', 'sydney rush hour times', 'when do bars close sydney', 'late night food sydney'],
    },
    callTimes: {
      title: 'Best Time to Call Sydney | From USA, UK, Asia & More',
      description: 'When to call Sydney? Best calling times from New York, London, Tokyo, Singapore. Business hours overlap and optimal windows for personal calls.',
      keywords: ['best time to call sydney', 'best time to call australia from usa', 'call sydney from new york time'],
    },
    stockMarket: {
      title: 'ASX Trading Hours | Sydney Stock Exchange Times for Global Investors',
      description: 'ASX opens 10:00 AM AEST. Complete Sydney stock exchange trading schedule with auction periods, regular hours, and market holidays.',
      keywords: ['asx hours', 'sydney stock exchange hours', 'australia market hours', 'asx opening time'],
    },
    holidays: {
      title: "Australian Public Holidays | Sydney Closures, Store Hours & What's Open",
      description: "Australian public holidays calendar. What's closed on Australia Day, Anzac Day, Christmas? Bank hours, store schedules, public holiday surcharges.",
      keywords: ['australian public holidays', 'sydney holidays', 'what is closed australia day', 'nsw bank holidays'],
    },
    digitalNomad: {
      title: 'Digital Nomad Sydney Guide | Coworking, Beach Cafes & Costs',
      description: 'Work remotely from Sydney. Best coworking spaces (A$400-600/mo), beach-side cafés, WiFi spots, cost of living breakdown, visa options.',
      keywords: ['digital nomad sydney', 'best coworking spaces sydney', 'cafes with wifi sydney', 'remote work sydney'],
    },
    timeDifference: {
      title: 'Sydney Time Difference Calculator | AEST/AEDT vs World Cities',
      description: 'Sydney time difference to New York (+16h), London (+11h), Tokyo (+1h), Singapore (+3h) and 50+ cities. AEST vs EST explained.',
      keywords: ['sydney time difference', 'australia vs new york time', 'aest vs est hours', 'sydney tokyo time difference'],
    },
    travelPlanning: {
      title: 'Sydney Travel Time Guide | Flights, Jet Lag Tips & Getting Around',
      description: 'Plan your Sydney trip: flight times from major cities, jet lag recovery tips, Sydney Airport to CBD, and getting around the harbour city.',
      keywords: ['sydney flight times', 'syd to city', 'sydney jet lag tips', 'how long flight to sydney'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Bank, shop, and restaurant hours in Sydney' },
    { slug: 'best-time-to-visit', icon: '🏖️', title: 'Best Time to Visit', desc: 'Weather, crowds, and events by season' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work', desc: 'Working with Sydney teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in Sydney', desc: 'How Sydneysiders live around the clock' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling windows from any country' },
    { slug: 'stock-market', icon: '📈', title: 'ASX Hours', desc: 'Australian stock exchange trading times' },
    { slug: 'holidays', icon: '📅', title: 'Public Holidays', desc: 'Australian holidays and what closes' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad', desc: 'Coworking, beach cafés, and costs' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Sydney time compared to major cities' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flights, airports, and jet lag tips' },
  ],
}

// ===================
// ISTANBUL
// ===================
export const istanbulGuide: GuideConfig = {
  citySlug: 'istanbul',
  cityName: 'Istanbul',
  timezone: 'Europe/Istanbul',
  timezoneAbbr: 'TRT',
  timezoneName: 'Turkey Time',
  utcOffset: 3,
  icon: '🕌',
  tagline: 'Your complete guide to time in the city where East meets West',
  region: 'MENA',
  coordinates: { lat: 41.0082, lng: 28.9784 },
  
  seo: {
    title: 'Istanbul Time Zone Guide | TRT, Business Hours & More',
    description: 'Complete Istanbul time zone guide. Business hours, Borsa Istanbul trading times, best time to call Istanbul, remote work overlap, Turkish holidays, and local tips.',
    keywords: ['istanbul time zone', 'turkey time now', 'trt time', 'istanbul business hours', 'borsa istanbul hours', 'best time to call istanbul', 'istanbul time difference'],
    ogTitle: 'Istanbul Time Zone Guide | Complete Turkey Time Resource',
    ogDescription: 'Everything about Istanbul time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Istanbul Time Zone Guide | TRT, Business Hours & More',
      description: 'Complete Istanbul time zone guide. Business hours, Borsa Istanbul trading times, best time to call Istanbul, remote work overlap, Turkish holidays, and local tips.',
      keywords: ['istanbul time zone', 'turkey time', 'trt'],
    },
    businessHours: {
      title: 'Istanbul Business Hours | Banks, Grand Bazaar, Restaurants & More',
      description: 'What time do businesses open in Istanbul? Complete guide to Turkish store hours, bank schedules, Grand Bazaar times, and restaurant hours.',
      keywords: ['istanbul business hours', 'turkey shop hours', 'what time do banks open istanbul', 'grand bazaar hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Istanbul | Weather, Crowds & Prices by Month',
      description: 'When to visit Istanbul? Month-by-month guide with weather, tourist crowds, hotel prices, and major events. Spring and fall are ideal!',
      keywords: ['best time to visit istanbul', 'best month to visit turkey', 'istanbul weather by month', 'istanbul crowd calendar'],
    },
    remoteWork: {
      title: 'Working with Istanbul Teams Remotely | Time Zone Overlap & Meeting Times',
      description: 'Remote work guide for Istanbul collaboration. Find overlap hours with NYC, London, Dubai. Best meeting times, async tips, and Turkish work culture.',
      keywords: ['remote work istanbul time zone', 'working with istanbul team', 'time zone overlap calculator', 'best meeting time istanbul'],
    },
    twentyFourHours: {
      title: "Istanbul 24 Hour Guide | What's Open & When in the Bosphorus City",
      description: "Istanbul hour-by-hour: when Istanbulites wake up, rush hours, bazaar crowds, iftar times, nightlife peaks, and what's open late.",
      keywords: ['24 hours in istanbul', 'istanbul rush hour times', 'when do bars close istanbul', 'late night food istanbul'],
    },
    callTimes: {
      title: 'Best Time to Call Istanbul | From USA, UK, Europe & More',
      description: 'When to call Istanbul? Best calling times from New York, London, Dubai, Singapore. Business hours overlap and optimal windows for personal calls.',
      keywords: ['best time to call istanbul', 'best time to call turkey from usa', 'call istanbul from london time'],
    },
    stockMarket: {
      title: 'Borsa Istanbul Hours | BIST Trading Times for Global Investors',
      description: 'Borsa Istanbul opens 10:00 AM TRT. Complete Turkish stock exchange trading schedule with auction periods, regular hours, and market holidays.',
      keywords: ['borsa istanbul hours', 'bist trading times', 'istanbul stock exchange hours', 'turkey market hours', 'bist opening time'],
    },
    holidays: {
      title: "Turkish Public Holidays | Istanbul Closures, Store Hours & What's Open",
      description: "Turkish public holidays calendar. What's closed on Republic Day, Eid, New Year? Bank hours, store schedules, Grand Bazaar closures in Istanbul.",
      keywords: ['turkish public holidays', 'istanbul holidays', 'what is closed eid istanbul', 'turkey bank holidays'],
    },
    digitalNomad: {
      title: 'Digital Nomad Istanbul Guide | Coworking, Cafes & Costs',
      description: 'Work remotely from Istanbul. Best coworking spaces (affordable!), laptop-friendly cafés, WiFi spots, cost of living breakdown, visa options.',
      keywords: ['digital nomad istanbul', 'best coworking spaces istanbul', 'cafes with wifi istanbul', 'remote work istanbul'],
    },
    timeDifference: {
      title: 'Istanbul Time Difference Calculator | TRT vs World Cities',
      description: 'Istanbul time difference to New York (+8h), London (+3h), Dubai (-1h), Tokyo (-6h) and 50+ cities. TRT vs GMT explained.',
      keywords: ['istanbul time difference', 'turkey vs new york time', 'trt vs gmt hours', 'istanbul tokyo time difference'],
    },
    travelPlanning: {
      title: 'Istanbul Travel Time Guide | Flights, Jet Lag Tips & Getting Around',
      description: 'Plan your Istanbul trip: flight times from major cities, jet lag recovery tips, Istanbul Airport to city center, and navigating the Bosphorus.',
      keywords: ['istanbul flight times', 'istanbul airport to city', 'istanbul jet lag tips', 'how long flight to istanbul'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Bank, bazaar, and restaurant hours in Istanbul' },
    { slug: 'best-time-to-visit', icon: '🕌', title: 'Best Time to Visit', desc: 'Weather, crowds, and events by season' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work', desc: 'Working with Istanbul teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in Istanbul', desc: 'How Istanbulites live around the clock' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling windows from any country' },
    { slug: 'stock-market', icon: '📈', title: 'Borsa Istanbul', desc: 'BIST trading hours and market info' },
    { slug: 'holidays', icon: '📅', title: 'Turkish Holidays', desc: 'Public holidays and what closes' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad', desc: 'Coworking, cafés, and costs' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Istanbul time compared to major cities' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flights, airports, and jet lag tips' },
  ],
}

// ===================
// LOS ANGELES
// ===================
export const losAngelesGuide: GuideConfig = {
  citySlug: 'los-angeles',
  cityName: 'Los Angeles',
  timezone: 'America/Los_Angeles',
  timezoneAbbr: 'PST/PDT',
  timezoneName: 'Pacific Time',
  utcOffset: -8,
  icon: '🌴',
  tagline: 'Your complete guide to time in the City of Angels',
  region: 'AMERICAS',
  coordinates: { lat: 34.0522, lng: -118.2437 },
  
  seo: {
    title: 'Los Angeles Time Zone Guide | PST/PDT, Business Hours & More',
    description: 'Complete LA time zone guide. Business hours, Hollywood schedules, best time to call LA, remote work overlap, California holidays, and local tips.',
    keywords: ['los angeles time zone', 'la time now', 'pst pdt time', 'la business hours', 'best time to call la', 'la time difference', 'pacific time zone guide'],
    ogTitle: 'Los Angeles Time Zone Guide | Complete LA Time Resource',
    ogDescription: 'Everything about LA time: business hours, entertainment industry schedules, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Los Angeles Time Zone Guide | PST/PDT, Business Hours & More',
      description: 'Complete LA time zone guide. Business hours, entertainment schedules, best time to call LA, remote work overlap, California holidays, and local tips.',
      keywords: ['los angeles time zone', 'la time', 'pst pdt'],
    },
    businessHours: {
      title: 'LA Business Hours | Banks, Stores, Restaurants & More',
      description: 'What time do businesses open in LA? Complete guide to Los Angeles store hours, bank schedules, restaurant times, and Hollywood offices.',
      keywords: ['la business hours', 'los angeles store hours', 'what time do banks open la', 'la restaurant hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Los Angeles | Weather, Crowds & Prices by Month',
      description: 'When to visit LA? Month-by-month guide with weather, tourist crowds, hotel prices, and major events. Year-round sunshine!',
      keywords: ['best time to visit los angeles', 'best month to visit la', 'la weather by month', 'la crowd calendar'],
    },
    remoteWork: {
      title: 'Working with LA Teams Remotely | Time Zone Overlap & Meeting Times',
      description: 'Remote work guide for LA collaboration. Find overlap hours with NYC, London, Tokyo. Best meeting times, async tips, and West Coast work culture.',
      keywords: ['remote work la time zone', 'working with la team', 'time zone overlap calculator', 'best meeting time los angeles'],
    },
    twentyFourHours: {
      title: "LA 24 Hour Guide | What's Open & When in Los Angeles",
      description: "LA hour-by-hour: when Angelenos wake up, rush hours, beach crowds, happy hour, nightlife peaks, and what's open 24/7.",
      keywords: ['24 hours in los angeles', 'la rush hour times', 'when do bars close la', 'late night food la'],
    },
    callTimes: {
      title: 'Best Time to Call Los Angeles | From USA, UK, Asia & More',
      description: 'When to call LA? Best calling times from New York, London, Tokyo, Sydney. Business hours overlap and optimal windows for personal calls.',
      keywords: ['best time to call la', 'best time to call california from usa', 'call la from new york time'],
    },
    stockMarket: {
      title: 'NASDAQ Trading Hours | LA Market Times for West Coast Investors',
      description: 'NASDAQ opens 6:30 AM PST (9:30 AM EST). Complete stock market schedule from Pacific Time perspective with trading hours and market holidays.',
      keywords: ['nasdaq hours pst', 'stock market hours la', 'west coast trading hours', 'market opening time pacific'],
    },
    holidays: {
      title: "California Public Holidays | LA Closures, Store Hours & What's Open",
      description: "California public holidays calendar. What's closed on Memorial Day, July 4th, Thanksgiving? Bank hours, store schedules, and holiday traffic.",
      keywords: ['california public holidays', 'la holidays', 'what is closed memorial day', 'california bank holidays'],
    },
    digitalNomad: {
      title: 'Digital Nomad LA Guide | Coworking, Beach Cafes & Costs',
      description: 'Work remotely from LA. Best coworking spaces ($300-500/mo), Venice Beach cafés, WiFi spots, cost of living breakdown, visa options.',
      keywords: ['digital nomad la', 'best coworking spaces los angeles', 'cafes with wifi la', 'remote work los angeles'],
    },
    timeDifference: {
      title: 'Los Angeles Time Difference Calculator | PST/PDT vs World Cities',
      description: 'LA time difference to New York (+3h), London (+8h), Tokyo (+17h), Sydney (+19h) and 50+ cities. PST vs EST explained.',
      keywords: ['la time difference', 'california vs new york time', 'pst vs est hours', 'la tokyo time difference'],
    },
    travelPlanning: {
      title: 'Los Angeles Travel Time Guide | Flights, Jet Lag Tips & Getting Around',
      description: 'Plan your LA trip: flight times from major cities, jet lag recovery tips, LAX to city, and navigating the sprawling metropolis.',
      keywords: ['la flight times', 'lax to downtown', 'la jet lag tips', 'how long flight to los angeles'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Bank, shop, and restaurant hours in LA' },
    { slug: 'best-time-to-visit', icon: '🌴', title: 'Best Time to Visit', desc: 'Weather, crowds, and events by season' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work', desc: 'Working with LA teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in LA', desc: 'How Angelenos live around the clock' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling windows from any country' },
    { slug: 'stock-market', icon: '📈', title: 'Market Hours', desc: 'West Coast perspective on trading times' },
    { slug: 'holidays', icon: '📅', title: 'Public Holidays', desc: 'California holidays and what closes' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad', desc: 'Coworking, beach cafés, and costs' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'LA time compared to major cities' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flights, airports, and jet lag tips' },
  ],
}

// ===================
// HONG KONG
// ===================
export const hongKongGuide: GuideConfig = {
  citySlug: 'hong-kong',
  cityName: 'Hong Kong',
  timezone: 'Asia/Hong_Kong',
  timezoneAbbr: 'HKT',
  timezoneName: 'Hong Kong Time',
  utcOffset: 8,
  icon: '🌃',
  tagline: 'Your complete guide to time in Asia\'s World City',
  region: 'ASIA',
  coordinates: { lat: 22.3193, lng: 114.1694 },
  
  seo: {
    title: 'Hong Kong Time Zone Guide | HKT, Business Hours & More',
    description: 'Complete Hong Kong time zone guide. Business hours, HKEX stock market times, best time to call HK, remote work overlap, public holidays, and local tips.',
    keywords: ['hong kong time zone', 'hong kong time now', 'hkt time', 'hong kong business hours', 'hkex trading hours', 'best time to call hong kong', 'hong kong time difference'],
    ogTitle: 'Hong Kong Time Zone Guide | Complete HK Time Resource',
    ogDescription: 'Everything about Hong Kong time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Hong Kong Time Zone Guide | HKT, Business Hours & More',
      description: 'Complete Hong Kong time zone guide. Business hours, HKEX trading times, best time to call HK, remote work overlap, public holidays, and local tips.',
      keywords: ['hong kong time zone', 'hong kong time', 'hkt', 'hong kong standard time'],
    },
    businessHours: {
      title: 'Hong Kong Business Hours | Banks, Shops, Restaurants & Markets',
      description: 'What time do businesses open in Hong Kong? Complete guide to HK store hours, bank schedules, dim sum times, and night market hours.',
      keywords: ['hong kong business hours', 'hk shop hours', 'what time do banks open hong kong', 'hong kong restaurant hours', 'central business hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Hong Kong | Weather, Events & Prices by Month',
      description: 'When to visit Hong Kong? Month-by-month guide with weather, festival dates, Chinese New Year, Rugby Sevens, and tourist tips.',
      keywords: ['best time to visit hong kong', 'hong kong weather by month', 'hong kong chinese new year', 'hong kong tourist season'],
    },
    remoteWork: {
      title: 'Working with Hong Kong Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Hong Kong collaboration. Find overlap hours with NYC, London, Sydney. Best meeting times and HK work culture.',
      keywords: ['remote work hong kong time zone', 'working with hong kong team', 'hkt time zone overlap', 'best meeting time hong kong'],
    },
    twentyFourHours: {
      title: 'Hong Kong 24 Hour Guide | What\'s Open & When in the City',
      description: 'Hong Kong hour-by-hour: morning dim sum, lunch crowds, after-work drinks in Lan Kwai Fong, and 24-hour dai pai dongs.',
      keywords: ['24 hours in hong kong', 'hong kong nightlife hours', 'late night food hong kong', 'lan kwai fong hours'],
    },
    callTimes: {
      title: 'Best Time to Call Hong Kong | From USA, UK, Australia & More',
      description: 'When to call Hong Kong? Best calling times from New York, London, Sydney. Business hours overlap and optimal windows.',
      keywords: ['best time to call hong kong', 'call hong kong from usa', 'call hong kong from uk time'],
    },
    stockMarket: {
      title: 'HKEX Trading Hours | Hong Kong Stock Exchange Times',
      description: 'HKEX opens 9:30 AM HKT. Complete Hong Kong Stock Exchange schedule with pre-market, trading sessions, lunch break, and market holidays.',
      keywords: ['hkex trading hours', 'hong kong stock exchange times', 'hong kong market hours', 'hkex lunch break'],
    },
    holidays: {
      title: 'Hong Kong Public Holidays | CNY, Buddha\'s Birthday & What\'s Closed',
      description: 'Hong Kong public holidays calendar. Chinese New Year, Mid-Autumn Festival, Buddha\'s Birthday - what\'s closed and what to expect.',
      keywords: ['hong kong public holidays', 'chinese new year hong kong', 'hong kong bank holidays', 'mid-autumn festival hong kong'],
    },
    digitalNomad: {
      title: 'Digital Nomad Hong Kong Guide | Coworking, WiFi & Cost of Living',
      description: 'Work remotely from Hong Kong. Best coworking spaces, laptop-friendly cafes, fast WiFi everywhere, cost of living breakdown, and visa options.',
      keywords: ['digital nomad hong kong', 'coworking hong kong', 'hong kong cost of living', 'hong kong work visa'],
    },
    timeDifference: {
      title: 'Hong Kong Time Difference Calculator | HKT vs World Cities',
      description: 'Hong Kong time difference to New York (+13h), London (+8h), Sydney (-3h) and 50+ cities. HKT explained. Live converter included.',
      keywords: ['hong kong time difference', 'hong kong vs new york time', 'hkt vs est hours', 'hong kong london time difference'],
    },
    travelPlanning: {
      title: 'Hong Kong Travel Guide | Flight Times, HKG Airport & Getting Around',
      description: 'Flying to Hong Kong? Flight times from NYC (16h), London (12h), Sydney (9h). HKG Airport tips, MTR guide, and getting around.',
      keywords: ['flight time to hong kong', 'hong kong airport guide', 'hong kong mtr', 'hkg to central'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Banks, shops, malls, and markets' },
    { slug: 'best-time-to-visit', icon: '🌸', title: 'Best Time to Visit', desc: 'Weather, festivals, and avoiding humidity' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with HK teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in Hong Kong', desc: 'The city\'s rhythm from dim sum to nightlife' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'HKEX trading times for global investors' },
    { slug: 'holidays', icon: '📅', title: 'Public Holidays', desc: 'CNY, Mid-Autumn, and what to expect' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Coworking, WiFi, and cost of living' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'HK time compared to NYC, London, Sydney' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, HKG tips, and getting around' },
  ],
}

// ===================
// TORONTO
// ===================
export const torontoGuide: GuideConfig = {
  citySlug: 'toronto',
  cityName: 'Toronto',
  timezone: 'America/Toronto',
  timezoneAbbr: 'EST/EDT',
  timezoneName: 'Eastern Time',
  utcOffset: -5,
  icon: '🍁',
  tagline: 'Your complete guide to time in Canada\'s largest city',
  region: 'AMERICAS',
  coordinates: { lat: 43.6532, lng: -79.3832 },
  
  seo: {
    title: 'Toronto Time Zone Guide | EST/EDT, Business Hours & More',
    description: 'Complete Toronto time zone guide. Business hours, TSX stock market times, best time to call Toronto, remote work overlap, Canadian holidays, and local tips.',
    keywords: ['toronto time zone', 'toronto time now', 'est edt canada', 'toronto business hours', 'tsx trading hours', 'best time to call toronto', 'toronto time difference'],
    ogTitle: 'Toronto Time Zone Guide | Complete Canada Time Resource',
    ogDescription: 'Everything about Toronto time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Toronto Time Zone Guide | EST/EDT, Business Hours & More',
      description: 'Complete Toronto time zone guide. Business hours, TSX trading times, best time to call Toronto, remote work overlap, Canadian holidays, and local tips.',
      keywords: ['toronto time zone', 'toronto time', 'est edt canada', 'eastern time toronto'],
    },
    businessHours: {
      title: 'Toronto Business Hours | Banks, Shops, Restaurants & Government',
      description: 'What time do businesses open in Toronto? Complete guide to Canadian store hours, bank schedules, LCBO times, and government office hours.',
      keywords: ['toronto business hours', 'canada shop hours', 'what time do banks open toronto', 'lcbo hours', 'toronto restaurant hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Toronto | Weather, Events & Prices by Month',
      description: 'When to visit Toronto? Month-by-month guide with weather, TIFF dates, Caribana, hockey season, and tourist tips. Avoid the brutal winter!',
      keywords: ['best time to visit toronto', 'toronto weather by month', 'tiff toronto', 'toronto tourist season'],
    },
    remoteWork: {
      title: 'Working with Toronto Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Toronto collaboration. Find overlap hours with London, Sydney, Singapore. Best meeting times and Canadian work culture.',
      keywords: ['remote work toronto time zone', 'working with toronto team', 'est time zone overlap', 'best meeting time toronto'],
    },
    twentyFourHours: {
      title: 'Toronto 24 Hour Guide | What\'s Open & When in the Six',
      description: 'Toronto hour-by-hour: morning Tim Hortons runs, Bay Street lunch, after-work drinks on King West, and late-night poutine spots.',
      keywords: ['24 hours in toronto', 'toronto nightlife hours', 'late night food toronto', 'king west hours'],
    },
    callTimes: {
      title: 'Best Time to Call Toronto | From UK, India, Australia & More',
      description: 'When to call Toronto? Best calling times from London, Mumbai, Sydney. Business hours overlap and optimal windows.',
      keywords: ['best time to call toronto', 'call toronto from uk', 'call canada from india time'],
    },
    stockMarket: {
      title: 'TSX Trading Hours | Toronto Stock Exchange Times for Global Investors',
      description: 'TSX opens 9:30 AM ET. Complete Toronto Stock Exchange schedule with pre-market, regular hours, and market holidays.',
      keywords: ['tsx trading hours', 'toronto stock exchange times', 'tsx market hours', 'tsx pre market'],
    },
    holidays: {
      title: 'Canadian Holidays in Toronto | Statutory Holidays & What\'s Closed',
      description: 'Toronto statutory holidays calendar. Canada Day, Thanksgiving, Victoria Day - what\'s closed and what to expect in Ontario.',
      keywords: ['toronto holidays', 'canadian statutory holidays', 'ontario holidays', 'canada day toronto'],
    },
    digitalNomad: {
      title: 'Digital Nomad Toronto Guide | Coworking, WiFi & Cost of Living',
      description: 'Work remotely from Toronto. Best coworking spaces, laptop-friendly cafes, fast WiFi, cost of living breakdown, and work permit options.',
      keywords: ['digital nomad toronto', 'coworking toronto', 'toronto cost of living', 'canada work permit'],
    },
    timeDifference: {
      title: 'Toronto Time Difference Calculator | EST/EDT vs World Cities',
      description: 'Toronto time difference to London (+5h), Tokyo (+14h), Sydney (+16h) and 50+ cities. EST vs GMT explained. Live converter included.',
      keywords: ['toronto time difference', 'toronto vs london time', 'est vs gmt hours', 'toronto uk time difference'],
    },
    travelPlanning: {
      title: 'Toronto Travel Guide | Flight Times, Pearson Airport & Getting Around',
      description: 'Flying to Toronto? Flight times from London (8h), NYC (1.5h), LA (5h). YYZ Pearson tips, UP Express, and getting downtown.',
      keywords: ['flight time to toronto', 'pearson airport guide', 'yyz to downtown', 'up express toronto'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Banks, shops, LCBO, and government hours' },
    { slug: 'best-time-to-visit', icon: '🍁', title: 'Best Time to Visit', desc: 'Weather, TIFF, festivals, and avoiding winter' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with Toronto teams across time zones' },
    { slug: '24-hours', icon: '🌆', title: '24 Hours in Toronto', desc: 'The city\'s rhythm from dawn to late night' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'TSX trading times for global investors' },
    { slug: 'holidays', icon: '📅', title: 'Canadian Holidays', desc: 'Statutory holidays and what\'s closed' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Coworking, WiFi, and cost of living' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Toronto time compared to London, Tokyo, Sydney' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, Pearson tips, and getting around' },
  ],
}

// ===================
// SHANGHAI
// ===================
export const shanghaiGuide: GuideConfig = {
  citySlug: 'shanghai',
  cityName: 'Shanghai',
  timezone: 'Asia/Shanghai',
  timezoneAbbr: 'CST',
  timezoneName: 'China Standard Time',
  utcOffset: 8,
  icon: '🏙️',
  tagline: 'Your complete guide to time in China\'s financial powerhouse',
  region: 'ASIA',
  coordinates: { lat: 31.2304, lng: 121.4737 },
  
  seo: {
    title: 'Shanghai Time Zone Guide | CST, Business Hours & More',
    description: 'Complete Shanghai time zone guide. Business hours, SSE stock market times, best time to call Shanghai, remote work overlap, Chinese holidays, and local tips.',
    keywords: ['shanghai time zone', 'shanghai time now', 'china standard time', 'shanghai business hours', 'sse trading hours', 'best time to call shanghai', 'shanghai time difference'],
    ogTitle: 'Shanghai Time Zone Guide | Complete China Time Resource',
    ogDescription: 'Everything about Shanghai time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Shanghai Time Zone Guide | CST, Business Hours & More',
      description: 'Complete Shanghai time zone guide. Business hours, SSE trading times, best time to call Shanghai, remote work overlap, Chinese holidays, and local tips.',
      keywords: ['shanghai time zone', 'shanghai time', 'china standard time', 'cst china'],
    },
    businessHours: {
      title: 'Shanghai Business Hours | Banks, Shops, Malls & Government',
      description: 'What time do businesses open in Shanghai? Complete guide to Chinese store hours, bank schedules, mall hours, and government office times.',
      keywords: ['shanghai business hours', 'china shop hours', 'what time do banks open shanghai', 'shanghai mall hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Shanghai | Weather, Events & Prices by Month',
      description: 'When to visit Shanghai? Month-by-month guide with weather, Chinese New Year, National Day, and tourist tips. Avoid humid summers!',
      keywords: ['best time to visit shanghai', 'shanghai weather by month', 'shanghai tourist season', 'shanghai spring autumn'],
    },
    remoteWork: {
      title: 'Working with Shanghai Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Shanghai collaboration. Find overlap hours with London, New York, Sydney. Best meeting times and Chinese work culture.',
      keywords: ['remote work shanghai time zone', 'working with shanghai team', 'cst time zone overlap', 'best meeting time shanghai'],
    },
    twentyFourHours: {
      title: 'Shanghai 24 Hour Guide | What\'s Open & When in the City',
      description: 'Shanghai hour-by-hour: morning tai chi on the Bund, Lujiazui business lunch, evening Nanjing Road shopping, and late-night street food.',
      keywords: ['24 hours in shanghai', 'shanghai nightlife hours', 'late night food shanghai', 'nanjing road hours'],
    },
    callTimes: {
      title: 'Best Time to Call Shanghai | From UK, USA, Australia & More',
      description: 'When to call Shanghai? Best calling times from London, New York, Sydney. Business hours overlap and optimal windows.',
      keywords: ['best time to call shanghai', 'call shanghai from uk', 'call china from usa time'],
    },
    stockMarket: {
      title: 'SSE Trading Hours | Shanghai Stock Exchange Times for Global Investors',
      description: 'SSE opens 9:30 AM CST with lunch break. Complete Shanghai Stock Exchange schedule with morning session, afternoon session, and market holidays.',
      keywords: ['sse trading hours', 'shanghai stock exchange times', 'sse market hours', 'china stock market hours'],
    },
    holidays: {
      title: 'Chinese Holidays in Shanghai | Public Holidays & Golden Week',
      description: 'Shanghai public holidays calendar. Chinese New Year, National Day Golden Week, Mid-Autumn Festival - what\'s closed and what to expect.',
      keywords: ['shanghai holidays', 'chinese public holidays', 'golden week china', 'chinese new year shanghai'],
    },
    digitalNomad: {
      title: 'Digital Nomad Shanghai Guide | Coworking, WiFi & Cost of Living',
      description: 'Work remotely from Shanghai. Best coworking spaces, laptop-friendly cafes, VPN considerations, cost of living, and visa options.',
      keywords: ['digital nomad shanghai', 'coworking shanghai', 'shanghai cost of living', 'china work visa'],
    },
    timeDifference: {
      title: 'Shanghai Time Difference Calculator | CST vs World Cities',
      description: 'Shanghai time difference to London (+8h), New York (+13h), Sydney (-2h) and 50+ cities. CST vs GMT explained. Live converter included.',
      keywords: ['shanghai time difference', 'shanghai vs london time', 'cst vs gmt hours', 'shanghai uk time difference'],
    },
    travelPlanning: {
      title: 'Shanghai Travel Guide | Flight Times, Pudong Airport & Getting Around',
      description: 'Flying to Shanghai? Flight times from London (11h), NYC (15h), Sydney (10h). PVG Pudong tips, Maglev train, and getting to the city.',
      keywords: ['flight time to shanghai', 'pudong airport guide', 'pvg to shanghai', 'maglev shanghai'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Banks, shops, malls, and government hours' },
    { slug: 'best-time-to-visit', icon: '🌸', title: 'Best Time to Visit', desc: 'Weather, Golden Week, and avoiding crowds' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with Shanghai teams across time zones' },
    { slug: '24-hours', icon: '🌃', title: '24 Hours in Shanghai', desc: 'The city\'s rhythm from dawn to late night' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'SSE trading times for global investors' },
    { slug: 'holidays', icon: '🧧', title: 'Chinese Holidays', desc: 'Public holidays and Golden Week planning' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Coworking, WiFi, and cost of living' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Shanghai time compared to London, NYC, Sydney' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, Pudong tips, and getting around' },
  ],
}

// ===================
// SEOUL
// ===================
export const seoulGuide: GuideConfig = {
  citySlug: 'seoul',
  cityName: 'Seoul',
  timezone: 'Asia/Seoul',
  timezoneAbbr: 'KST',
  timezoneName: 'Korea Standard Time',
  utcOffset: 9,
  icon: '🏯',
  tagline: 'Your complete guide to time in South Korea\'s dynamic capital',
  region: 'ASIA',
  coordinates: { lat: 37.5665, lng: 126.9780 },
  
  seo: {
    title: 'Seoul Time Zone Guide | KST, Business Hours & More',
    description: 'Complete Seoul time zone guide. Business hours, KOSPI stock market times, best time to call Seoul, remote work overlap, Korean holidays, and local tips.',
    keywords: ['seoul time zone', 'seoul time now', 'korea standard time', 'seoul business hours', 'kospi trading hours', 'best time to call seoul', 'seoul time difference'],
    ogTitle: 'Seoul Time Zone Guide | Complete Korea Time Resource',
    ogDescription: 'Everything about Seoul time: business hours, stock market, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Seoul Time Zone Guide | KST, Business Hours & More',
      description: 'Complete Seoul time zone guide. Business hours, KOSPI trading times, best time to call Seoul, remote work overlap, Korean holidays, and local tips.',
      keywords: ['seoul time zone', 'seoul time', 'korea standard time', 'kst korea'],
    },
    businessHours: {
      title: 'Seoul Business Hours | Banks, Shops, Malls & Offices',
      description: 'What time do businesses open in Seoul? Complete guide to Korean store hours, bank schedules, department store hours, and office times.',
      keywords: ['seoul business hours', 'korea shop hours', 'what time do banks open seoul', 'seoul mall hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Seoul | Weather, Cherry Blossoms & K-pop Events',
      description: 'When to visit Seoul? Month-by-month guide with weather, cherry blossom season, autumn foliage, and K-pop concert schedules.',
      keywords: ['best time to visit seoul', 'seoul weather by month', 'seoul cherry blossom', 'seoul autumn foliage'],
    },
    remoteWork: {
      title: 'Working with Seoul Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Seoul collaboration. Find overlap hours with London, New York, Sydney. Best meeting times and Korean work culture.',
      keywords: ['remote work seoul time zone', 'working with korean team', 'kst time zone overlap', 'best meeting time seoul'],
    },
    twentyFourHours: {
      title: 'Seoul 24 Hour Guide | What\'s Open & When in the City',
      description: 'Seoul hour-by-hour: morning temple visits, Gangnam business lunch, Myeongdong shopping, and late-night Korean BBQ in Hongdae.',
      keywords: ['24 hours in seoul', 'seoul nightlife hours', 'late night food seoul', 'hongdae nightlife'],
    },
    callTimes: {
      title: 'Best Time to Call Seoul | From UK, USA, Australia & More',
      description: 'When to call Seoul? Best calling times from London, New York, Sydney. Business hours overlap and optimal windows.',
      keywords: ['best time to call seoul', 'call seoul from uk', 'call korea from usa time'],
    },
    stockMarket: {
      title: 'KOSPI Trading Hours | Korea Stock Exchange Times for Global Investors',
      description: 'KRX opens 9:00 AM KST. Complete Korea Exchange schedule with regular hours, after-hours trading, and market holidays.',
      keywords: ['kospi trading hours', 'korea stock exchange times', 'krx market hours', 'kospi market open'],
    },
    holidays: {
      title: 'Korean Holidays in Seoul | Public Holidays & Chuseok Guide',
      description: 'Seoul public holidays calendar. Seollal (Lunar New Year), Chuseok, Liberation Day - what\'s closed and what to expect.',
      keywords: ['seoul holidays', 'korean public holidays', 'chuseok korea', 'seollal korea'],
    },
    digitalNomad: {
      title: 'Digital Nomad Seoul Guide | Coworking, WiFi & Cost of Living',
      description: 'Work remotely from Seoul. Best coworking spaces, legendary WiFi speeds, cost of living breakdown, and visa options.',
      keywords: ['digital nomad seoul', 'coworking seoul', 'seoul cost of living', 'korea digital nomad visa'],
    },
    timeDifference: {
      title: 'Seoul Time Difference Calculator | KST vs World Cities',
      description: 'Seoul time difference to London (+9h), New York (+14h), Sydney (-2h) and 50+ cities. KST vs GMT explained. Live converter included.',
      keywords: ['seoul time difference', 'seoul vs london time', 'kst vs gmt hours', 'seoul uk time difference'],
    },
    travelPlanning: {
      title: 'Seoul Travel Guide | Flight Times, Incheon Airport & Getting Around',
      description: 'Flying to Seoul? Flight times from London (11h), NYC (14h), Sydney (10h). ICN Incheon tips, AREX train, and getting to the city.',
      keywords: ['flight time to seoul', 'incheon airport guide', 'icn to seoul', 'arex train seoul'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Banks, shops, chaebols, and office culture' },
    { slug: 'best-time-to-visit', icon: '🌸', title: 'Best Time to Visit', desc: 'Cherry blossoms, autumn foliage, and festivals' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with Korean teams across time zones' },
    { slug: '24-hours', icon: '🌃', title: '24 Hours in Seoul', desc: 'The city that never sleeps, literally' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'KOSPI & KRX trading times' },
    { slug: 'holidays', icon: '🎎', title: 'Korean Holidays', desc: 'Seollal, Chuseok, and public holidays' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'World\'s fastest WiFi and coworking' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Seoul time compared to London, NYC, Sydney' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, Incheon tips, and transit' },
  ],
}

// ===================
// BERLIN
// ===================
export const berlinGuide: GuideConfig = {
  citySlug: 'berlin',
  cityName: 'Berlin',
  timezone: 'Europe/Berlin',
  timezoneAbbr: 'CET/CEST',
  timezoneName: 'Central European Time',
  utcOffset: 1,
  icon: '🐻',
  tagline: 'Your complete guide to time in Germany\'s capital and Europe\'s startup hub',
  region: 'EUROPE',
  coordinates: { lat: 52.5200, lng: 13.4050 },
  
  seo: {
    title: 'Berlin Time Zone Guide | CET/CEST, Business Hours & More',
    description: 'Complete Berlin time zone guide. Business hours, German work culture, best time to call Berlin, remote work overlap, public holidays, and local tips.',
    keywords: ['berlin time zone', 'berlin time now', 'central european time', 'berlin business hours', 'german work hours', 'best time to call berlin', 'berlin time difference'],
    ogTitle: 'Berlin Time Zone Guide | Complete Germany Time Resource',
    ogDescription: 'Everything about Berlin time: business hours, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Berlin Time Zone Guide | CET/CEST, Business Hours & More',
      description: 'Complete Berlin time zone guide. Business hours, German work culture, best time to call Berlin, remote work overlap, public holidays, and local tips.',
      keywords: ['berlin time zone', 'berlin time', 'central european time', 'cet cest germany'],
    },
    businessHours: {
      title: 'Berlin Business Hours | Shops, Banks, Offices & Sundays',
      description: 'What time do businesses open in Berlin? Complete guide to German store hours, strict Sunday closures, bank schedules, and Spätis.',
      keywords: ['berlin business hours', 'germany shop hours', 'sunday shopping berlin', 'späti berlin hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Berlin | Weather, Events & Prices by Month',
      description: 'When to visit Berlin? Month-by-month guide with weather, Berlinale, Christmas markets, and avoiding cold winters.',
      keywords: ['best time to visit berlin', 'berlin weather by month', 'berlinale festival', 'berlin christmas markets'],
    },
    remoteWork: {
      title: 'Working with Berlin Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Berlin collaboration. Find overlap hours with New York, Singapore, Sydney. Best meeting times and German work culture.',
      keywords: ['remote work berlin time zone', 'working with german team', 'cet time zone overlap', 'best meeting time berlin'],
    },
    twentyFourHours: {
      title: 'Berlin 24 Hour Guide | What\'s Open & When in the City',
      description: 'Berlin hour-by-hour: morning coffee culture, Mitte business lunch, Kreuzberg evening, and legendary Berghain nights.',
      keywords: ['24 hours in berlin', 'berlin nightlife hours', 'berghain hours', 'kreuzberg nightlife'],
    },
    callTimes: {
      title: 'Best Time to Call Berlin | From UK, USA, Australia & More',
      description: 'When to call Berlin? Best calling times from London, New York, Sydney. Business hours overlap and optimal windows.',
      keywords: ['best time to call berlin', 'call berlin from uk', 'call germany from usa time'],
    },
    stockMarket: {
      title: 'German Stock Market Hours | Xetra & Frankfurt Exchange Times',
      description: 'Xetra opens 9:00 AM CET. Complete Frankfurt Stock Exchange schedule for DAX trading, market hours, and holidays.',
      keywords: ['xetra trading hours', 'frankfurt stock exchange times', 'dax market hours', 'german stock market'],
    },
    holidays: {
      title: 'German Holidays in Berlin | Public Holidays & Regional Days',
      description: 'Berlin public holidays calendar. Tag der Deutschen Einheit, Christmas, Easter - what\'s closed and regional differences.',
      keywords: ['berlin holidays', 'german public holidays', 'tag der deutschen einheit', 'german christmas holidays'],
    },
    digitalNomad: {
      title: 'Digital Nomad Berlin Guide | Coworking, WiFi & Cost of Living',
      description: 'Work remotely from Berlin. Best coworking spaces, laptop-friendly cafes, affordable living, and freelancer visa options.',
      keywords: ['digital nomad berlin', 'coworking berlin', 'berlin cost of living', 'germany freelancer visa'],
    },
    timeDifference: {
      title: 'Berlin Time Difference Calculator | CET/CEST vs World Cities',
      description: 'Berlin time difference to London (+1h), New York (+6h), Sydney (-9h) and 50+ cities. CET vs GMT explained. Live converter included.',
      keywords: ['berlin time difference', 'berlin vs london time', 'cet vs gmt hours', 'berlin uk time difference'],
    },
    travelPlanning: {
      title: 'Berlin Travel Guide | Flight Times, BER Airport & Getting Around',
      description: 'Flying to Berlin? Flight times from London (2h), NYC (9h), Sydney (22h). BER Brandenburg tips and getting to the city.',
      keywords: ['flight time to berlin', 'ber airport guide', 'berlin brandenburg airport', 'berlin public transport'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Shops, banks, and strict Sunday rules' },
    { slug: 'best-time-to-visit', icon: '🎄', title: 'Best Time to Visit', desc: 'Weather, Berlinale, and Christmas markets' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with German teams across time zones' },
    { slug: '24-hours', icon: '🌃', title: '24 Hours in Berlin', desc: 'The city with no closing time' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'Xetra & DAX trading times' },
    { slug: 'holidays', icon: '🎊', title: 'German Holidays', desc: 'Public holidays and regional differences' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Europe\'s startup capital for remote workers' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Berlin time compared to London, NYC, Sydney' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, BER tips, and getting around' },
  ],
}

// ===================
// AMSTERDAM
// ===================
export const amsterdamGuide: GuideConfig = {
  citySlug: 'amsterdam',
  cityName: 'Amsterdam',
  timezone: 'Europe/Amsterdam',
  timezoneAbbr: 'CET/CEST',
  timezoneName: 'Central European Time',
  utcOffset: 1,
  icon: '🌷',
  tagline: 'Your complete guide to time in the Netherlands\' creative capital',
  region: 'EUROPE',
  coordinates: { lat: 52.3676, lng: 4.9041 },
  
  seo: {
    title: 'Amsterdam Time Zone Guide | CET/CEST, Business Hours & More',
    description: 'Complete Amsterdam time zone guide. Business hours, Dutch work culture, best time to call Amsterdam, remote work overlap, public holidays, and local tips.',
    keywords: ['amsterdam time zone', 'amsterdam time now', 'netherlands time', 'amsterdam business hours', 'dutch work hours', 'best time to call amsterdam', 'amsterdam time difference'],
    ogTitle: 'Amsterdam Time Zone Guide | Complete Netherlands Time Resource',
    ogDescription: 'Everything about Amsterdam time: business hours, holidays, remote work tips. The definitive guide.',
  },
  
  pages: {
    overview: {
      title: 'Amsterdam Time Zone Guide | CET/CEST, Business Hours & More',
      description: 'Complete Amsterdam time zone guide. Business hours, Dutch work culture, best time to call Amsterdam, remote work overlap, public holidays, and local tips.',
      keywords: ['amsterdam time zone', 'amsterdam time', 'netherlands time', 'cet cest netherlands'],
    },
    businessHours: {
      title: 'Amsterdam Business Hours | Shops, Banks, Museums & Koopzondag',
      description: 'What time do businesses open in Amsterdam? Complete guide to Dutch store hours, Sunday shopping (koopzondag), bank schedules, and museum times.',
      keywords: ['amsterdam business hours', 'netherlands shop hours', 'koopzondag amsterdam', 'amsterdam museum hours'],
    },
    bestTimeToVisit: {
      title: 'Best Time to Visit Amsterdam | Tulip Season, King\'s Day & Weather',
      description: 'When to visit Amsterdam? Month-by-month guide with weather, tulip season (April), King\'s Day, and avoiding summer crowds.',
      keywords: ['best time to visit amsterdam', 'amsterdam weather by month', 'tulip season amsterdam', 'kings day amsterdam'],
    },
    remoteWork: {
      title: 'Working with Amsterdam Teams Remotely | Time Zone Overlap Guide',
      description: 'Remote work guide for Amsterdam collaboration. Find overlap hours with New York, Singapore, Sydney. Best meeting times and Dutch work culture.',
      keywords: ['remote work amsterdam time zone', 'working with dutch team', 'cet time zone overlap', 'best meeting time amsterdam'],
    },
    twentyFourHours: {
      title: 'Amsterdam 24 Hour Guide | What\'s Open & When in the City',
      description: 'Amsterdam hour-by-hour: morning canal walks, Zuidas business lunch, Jordaan evening, and late-night Leidseplein.',
      keywords: ['24 hours in amsterdam', 'amsterdam nightlife hours', 'leidseplein nightlife', 'jordaan evening'],
    },
    callTimes: {
      title: 'Best Time to Call Amsterdam | From UK, USA, Australia & More',
      description: 'When to call Amsterdam? Best calling times from London, New York, Sydney. Business hours overlap and optimal windows.',
      keywords: ['best time to call amsterdam', 'call amsterdam from uk', 'call netherlands from usa time'],
    },
    stockMarket: {
      title: 'Euronext Amsterdam Hours | AEX Stock Exchange Times',
      description: 'Euronext Amsterdam opens 9:00 AM CET. Complete AEX trading schedule, market hours, and Dutch market holidays.',
      keywords: ['euronext amsterdam hours', 'aex trading hours', 'amsterdam stock exchange times', 'dutch stock market'],
    },
    holidays: {
      title: 'Dutch Holidays in Amsterdam | Public Holidays & King\'s Day Guide',
      description: 'Amsterdam public holidays calendar. Koningsdag (King\'s Day), Liberation Day, Christmas - what\'s closed and what to expect.',
      keywords: ['amsterdam holidays', 'dutch public holidays', 'koningsdag kings day', 'bevrijdingsdag'],
    },
    digitalNomad: {
      title: 'Digital Nomad Amsterdam Guide | Coworking, WiFi & Cost of Living',
      description: 'Work remotely from Amsterdam. Best coworking spaces, laptop-friendly cafes, high cost of living reality, and visa options.',
      keywords: ['digital nomad amsterdam', 'coworking amsterdam', 'amsterdam cost of living', 'netherlands freelancer visa'],
    },
    timeDifference: {
      title: 'Amsterdam Time Difference Calculator | CET/CEST vs World Cities',
      description: 'Amsterdam time difference to London (+1h), New York (+6h), Sydney (-9h) and 50+ cities. CET vs GMT explained. Live converter included.',
      keywords: ['amsterdam time difference', 'amsterdam vs london time', 'cet vs gmt hours', 'amsterdam uk time difference'],
    },
    travelPlanning: {
      title: 'Amsterdam Travel Guide | Flight Times, Schiphol Airport & Getting Around',
      description: 'Flying to Amsterdam? Flight times from London (1h), NYC (8h), Sydney (22h). Schiphol tips, trains to Centraal, and cycling culture.',
      keywords: ['flight time to amsterdam', 'schiphol airport guide', 'amsterdam centraal', 'amsterdam by bike'],
    },
  },
  
  clusters: [
    { slug: 'business-hours', icon: '💼', title: 'Business Hours', desc: 'Shops, banks, and koopzondag rules' },
    { slug: 'best-time-to-visit', icon: '🌷', title: 'Best Time to Visit', desc: 'Tulips, King\'s Day, and canal season' },
    { slug: 'remote-work', icon: '💻', title: 'Remote Work Guide', desc: 'Working with Dutch teams across time zones' },
    { slug: '24-hours', icon: '🌃', title: '24 Hours in Amsterdam', desc: 'From morning canals to late-night bars' },
    { slug: 'call-times', icon: '📞', title: 'Best Time to Call', desc: 'Optimal calling times from major cities' },
    { slug: 'stock-market', icon: '📈', title: 'Stock Market Hours', desc: 'Euronext AEX trading times' },
    { slug: 'holidays', icon: '👑', title: 'Dutch Holidays', desc: 'Koningsdag, Bevrijdingsdag & more' },
    { slug: 'digital-nomad', icon: '🎒', title: 'Digital Nomad Guide', desc: 'Europe\'s most bike-friendly remote work hub' },
    { slug: 'time-difference', icon: '🌐', title: 'Time Difference', desc: 'Amsterdam time compared to London, NYC, Sydney' },
    { slug: 'travel-planning', icon: '✈️', title: 'Travel Planning', desc: 'Flight times, Schiphol tips, and cycling' },
  ],
}

// ===================
// GUIDE REGISTRY
// ===================
export const guideConfigs: Record<string, GuideConfig> = {
  'new-york': newYorkGuide,
  'london': londonGuide,
  'tokyo': tokyoGuide,
  'dubai': dubaiGuide,
  'singapore': singaporeGuide,
  'hong-kong': hongKongGuide,
  'toronto': torontoGuide,
  'shanghai': shanghaiGuide,
  'seoul': seoulGuide,
  'berlin': berlinGuide,
  'amsterdam': amsterdamGuide,
  'paris': parisGuide,
  'sydney': sydneyGuide,
  'istanbul': istanbulGuide,
  'los-angeles': losAngelesGuide,
}

// All Tier 1 cities that should have guide pages
const TIER1_GUIDE_CITIES = [
  'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore', 'hong-kong', 'shanghai',
  'sydney', 'los-angeles', 'toronto', 'berlin', 'chicago', 'miami', 'san-francisco',
  'vancouver', 'mexico-city', 'sao-paulo', 'buenos-aires', 'madrid', 'barcelona',
  'amsterdam', 'rome', 'vienna', 'zurich', 'frankfurt', 'lisbon', 'dublin', 'moscow',
  'saint-petersburg', 'istanbul', 'mumbai', 'delhi', 'bangkok', 'seoul', 'beijing',
  'shenzhen', 'guangzhou', 'jakarta', 'kuala-lumpur', 'melbourne', 'rio-de-janeiro',
  'cairo', 'johannesburg'
]

// Helper to create generic guide config for cities without custom content
function createGenericGuideConfig(citySlug: string, city: { city: string; timezone: string; country: string }): GuideConfig {
  const cityName = city.city
  const timezone = city.timezone
  const timezoneAbbr = timezone.split('/').pop()?.replace('_', ' ') || 'Local'
  
  // Determine region based on timezone
  let region: CityRegion = 'EUROPE' // default
  if (timezone.startsWith('America/')) {
    region = 'AMERICAS'
  } else if (timezone.startsWith('Asia/') || timezone.startsWith('Pacific/')) {
    if (timezone.includes('Dubai') || timezone.includes('Riyadh') || timezone.includes('Istanbul')) {
      region = 'MENA'
    } else {
      region = 'ASIA'
    }
  } else if (timezone.startsWith('Australia/') || timezone.includes('Auckland')) {
    region = 'OCEANIA'
  } else if (timezone.startsWith('Europe/')) {
    if (timezone.includes('Istanbul')) {
      region = 'MENA'
    } else {
      region = 'EUROPE'
    }
  } else if (timezone.startsWith('Africa/')) {
    region = 'EUROPE' // Africa mostly aligns with European business hours
  }
  
  return {
    citySlug,
    cityName,
    timezone,
    timezoneAbbr,
    timezoneName: timezone,
    utcOffset: 0, // Will be calculated dynamically
    icon: '🌍',
    tagline: `Your complete guide to ${cityName} time zones and local insights`,
    region,
    coordinates: { lat: 0, lng: 0 }, // Generic - will be overridden by specific configs
    seo: {
      title: `${cityName} Time Zone Guide`,
      description: `Complete guide to ${cityName} time zone, business hours, best time to visit, and local tips for travelers and remote workers.`,
      keywords: [`${cityName} time`, `${cityName} timezone`, `${cityName} business hours`, `${cityName} travel guide`],
      ogTitle: `${cityName} Time Zone Guide | WhatTime.city`,
      ogDescription: `Everything you need to know about ${cityName} time zones, business hours, and travel planning.`,
    },
    pages: {
      overview: {
        title: `${cityName} Guide - Time Zone & Travel Tips`,
        description: `Complete guide to ${cityName}: time zone info, business hours, travel tips, and more.`,
        keywords: [`${cityName} guide`, `${cityName} time zone`, `${cityName} travel`],
      },
      businessHours: {
        title: `${cityName} Business Hours Guide`,
        description: `Typical business hours in ${cityName}, including banks, offices, and retail stores.`,
        keywords: [`${cityName} business hours`, `${cityName} office hours`, `${cityName} bank hours`],
      },
      bestTimeToVisit: {
        title: `Best Time to Visit ${cityName}`,
        description: `Find the best time to visit ${cityName} based on weather, crowds, and events.`,
        keywords: [`best time to visit ${cityName}`, `${cityName} weather`, `${cityName} seasons`],
      },
      remoteWork: {
        title: `Remote Work in ${cityName}`,
        description: `Guide to remote work in ${cityName}: coworking spaces, internet, and digital nomad tips.`,
        keywords: [`remote work ${cityName}`, `coworking ${cityName}`, `digital nomad ${cityName}`],
      },
      twentyFourHours: {
        title: `24 Hours in ${cityName}`,
        description: `How to spend 24 hours in ${cityName}: morning, afternoon, and evening itinerary.`,
        keywords: [`24 hours ${cityName}`, `one day ${cityName}`, `${cityName} itinerary`],
      },
      callTimes: {
        title: `Best Times to Call ${cityName}`,
        description: `Find the best times to schedule calls with ${cityName} from anywhere in the world.`,
        keywords: [`call ${cityName}`, `${cityName} meeting times`, `${cityName} work hours`],
      },
      stockMarket: {
        title: `${cityName} Stock Market Hours`,
        description: `Stock market trading hours in ${cityName} and global market overlap times.`,
        keywords: [`${cityName} stock market`, `${cityName} trading hours`, `${cityName} exchange`],
      },
      holidays: {
        title: `${cityName} Public Holidays`,
        description: `Complete list of public holidays in ${cityName} and ${city.country}.`,
        keywords: [`${cityName} holidays`, `${city.country} public holidays`, `${cityName} bank holidays`],
      },
      digitalNomad: {
        title: `Digital Nomad Guide to ${cityName}`,
        description: `Everything digital nomads need to know about living and working in ${cityName}.`,
        keywords: [`digital nomad ${cityName}`, `${cityName} nomad guide`, `work from ${cityName}`],
      },
      timeDifference: {
        title: `${cityName} Time Difference Calculator`,
        description: `Calculate time difference between ${cityName} and major world cities.`,
        keywords: [`${cityName} time difference`, `${cityName} time zone converter`, `${cityName} vs`],
      },
      travelPlanning: {
        title: `${cityName} Travel Planning Guide`,
        description: `Essential travel planning tips for ${cityName}: visas, transport, and accommodation.`,
        keywords: [`${cityName} travel planning`, `visit ${cityName}`, `${cityName} trip`],
      },
    },
    clusters: [
      { slug: 'time-business', icon: '💼', title: 'Time & Business', desc: `Business hours and market times in ${cityName}` },
      { slug: 'travel-guide', icon: '✈️', title: 'Travel Guide', desc: `Best time to visit and travel tips for ${cityName}` },
      { slug: 'work-remote', icon: '💻', title: 'Work Remote', desc: `Remote work and digital nomad guide for ${cityName}` },
      { slug: 'time-zones', icon: '🌍', title: 'Time Zones', desc: `Time zone info and differences for ${cityName}` },
      { slug: '24-hours-itinerary', icon: '🌆', title: '24 Hours', desc: `One day itinerary for ${cityName}` },
    ],
  }
}

// Import cities for generic config creation
import { cities } from '@/lib/cities'

// Premium cities with quality guide content
const PREMIUM_GUIDE_CITIES = [
  'new-york',
  'london',
  'tokyo',
  'dubai',
  'singapore',
  'paris',
  'sydney',
  'istanbul',
  'los-angeles',
  'hong-kong',
  'toronto',
  'shanghai',
  'seoul',
  'berlin',
  'amsterdam'
]

export function getGuideConfig(citySlug: string): GuideConfig | null {
  // Only return config for premium cities with custom content
  if (guideConfigs[citySlug]) {
    return guideConfigs[citySlug]
  }
  
  // For premium cities without custom guideConfig, create generic
  if (PREMIUM_GUIDE_CITIES.includes(citySlug)) {
    const city = cities.find(c => c.slug === citySlug)
    if (city) {
      return createGenericGuideConfig(citySlug, city)
    }
  }
  
  return null
}

export function getSupportedGuideCities(): string[] {
  return PREMIUM_GUIDE_CITIES
}

// ===================
// REGION-BASED CITY RECOMMENDATIONS (HYBRID APPROACH)
// ===================

export interface RecommendedCity {
  slug: string
  name: string
  icon: string
  reason: string // Why this city is relevant
}

// City-specific overrides for maximum relevance
// These cities have unique business/travel connections that don't fit regional defaults
const CITY_TABLE_OVERRIDES: Record<string, string[]> = {
  // Istanbul: Bridge between Europe, Middle East, and Russia
  'istanbul': ['dubai', 'london', 'frankfurt', 'new-york', 'paris', 'berlin', 'singapore', 'moscow'],
  // Dubai: Global hub connecting East and West
  'dubai': ['london', 'mumbai', 'singapore', 'istanbul', 'new-york', 'hong-kong', 'frankfurt', 'riyadh'],
  // Singapore: True global hub, connects everyone
  'singapore': ['hong-kong', 'tokyo', 'sydney', 'london', 'new-york', 'dubai', 'shanghai', 'mumbai'],
  // Hong Kong: Asia finance, strong China/West connections
  'hong-kong': ['shanghai', 'singapore', 'tokyo', 'london', 'new-york', 'sydney', 'dubai', 'taipei'],
  // Sydney: Oceania hub, strong Asia-Pacific focus
  'sydney': ['auckland', 'singapore', 'tokyo', 'hong-kong', 'los-angeles', 'london', 'dubai', 'seoul'],
  // London: Global financial center
  'london': ['new-york', 'paris', 'frankfurt', 'dubai', 'singapore', 'hong-kong', 'tokyo', 'sydney'],
  // New York: Americas anchor, global finance
  'new-york': ['london', 'los-angeles', 'toronto', 'paris', 'tokyo', 'hong-kong', 'sao-paulo', 'dubai'],
  // Tokyo: Asia's largest economy
  'tokyo': ['singapore', 'hong-kong', 'shanghai', 'seoul', 'sydney', 'london', 'new-york', 'los-angeles'],
}

// Default cities per region (used when no override exists)
const REGION_TABLE_DEFAULTS: Record<CityRegion, string[]> = {
  AMERICAS: ['london', 'paris', 'tokyo', 'singapore', 'sydney', 'dubai', 'hong-kong', 'berlin', 'seoul'],
  EUROPE: ['new-york', 'los-angeles', 'tokyo', 'singapore', 'sydney', 'dubai', 'hong-kong', 'toronto', 'shanghai'],
  MENA: ['london', 'new-york', 'singapore', 'mumbai', 'tokyo', 'frankfurt', 'hong-kong', 'paris', 'sydney'],
  ASIA: ['london', 'new-york', 'los-angeles', 'sydney', 'dubai', 'paris', 'frankfurt', 'toronto', 'auckland'],
  OCEANIA: ['singapore', 'tokyo', 'hong-kong', 'los-angeles', 'london', 'auckland', 'dubai', 'seoul', 'shanghai'],
}

// Get table cities for "City Time vs Major Cities" section
// Uses override if available, otherwise falls back to regional defaults
export function getTableCities(currentCity: string, region: CityRegion): string[] {
  // Check for city-specific override first
  const override = CITY_TABLE_OVERRIDES[currentCity]
  if (override) {
    return override.filter(city => city !== currentCity).slice(0, 8)
  }
  
  // Fall back to regional defaults
  return REGION_TABLE_DEFAULTS[region].filter(city => city !== currentCity).slice(0, 8)
}

// Recommended cities for Quick Facts "For Overlap" section
const REGION_CALL_TARGETS: Record<CityRegion, { targetSlug: string; targetName: string }> = {
  AMERICAS: { targetSlug: 'london', targetName: 'Europe' },
  EUROPE: { targetSlug: 'new-york', targetName: 'US East' },
  MENA: { targetSlug: 'london', targetName: 'Europe' },
  ASIA: { targetSlug: 'london', targetName: 'Europe' },
  OCEANIA: { targetSlug: 'singapore', targetName: 'Asia' },
}

export function getCallTarget(region: CityRegion): { targetSlug: string; targetName: string } {
  return REGION_CALL_TARGETS[region]
}

// Get region display name for UI
export function getRegionDisplayName(region: CityRegion): string {
  const names: Record<CityRegion, string> = {
    AMERICAS: 'Americas',
    EUROPE: 'Europe',
    MENA: 'Middle East & Turkey',
    ASIA: 'Asia',
    OCEANIA: 'Oceania',
  }
  return names[region]
}
