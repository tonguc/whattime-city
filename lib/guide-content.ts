// Guide content configuration for each city
// Structure mirrors NYC as the gold standard

export interface GuideConfig {
  citySlug: string
  cityName: string
  timezone: string
  timezoneAbbr: string
  timezoneName: string
  utcOffset: number // hours from UTC (e.g., NYC = -5, London = 0)
  icon: string
  tagline: string
  
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
  icon: '🇬🇧',
  tagline: 'Your complete guide to time in the capital of the United Kingdom',
  
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
  icon: '🇯🇵',
  tagline: 'Your complete guide to time in Japan\'s bustling capital',
  
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
  icon: '🇦🇪',
  tagline: 'Your complete guide to time in the UAE\'s global hub',
  
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
// GUIDE REGISTRY
// ===================
export const guideConfigs: Record<string, GuideConfig> = {
  'new-york': newYorkGuide,
  'london': londonGuide,
  'tokyo': tokyoGuide,
  'dubai': dubaiGuide,
}

export function getGuideConfig(citySlug: string): GuideConfig | null {
  return guideConfigs[citySlug] || null
}

export function getSupportedGuideCities(): string[] {
  return Object.keys(guideConfigs)
}
