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
// SINGAPORE
// ===================
export const singaporeGuide: GuideConfig = {
  citySlug: 'singapore',
  cityName: 'Singapore',
  timezone: 'Asia/Singapore',
  timezoneAbbr: 'SGT',
  timezoneName: 'Singapore Standard Time',
  utcOffset: 8,
  icon: '🇸🇬',
  tagline: 'Your complete guide to time in Asia\'s premier financial hub',
  
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
  icon: '🇫🇷',
  tagline: 'Your complete guide to time in the City of Light',
  
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
// GUIDE REGISTRY
// ===================
export const guideConfigs: Record<string, GuideConfig> = {
  'new-york': newYorkGuide,
  'london': londonGuide,
  'tokyo': tokyoGuide,
  'dubai': dubaiGuide,
  'singapore': singaporeGuide,
  'paris': parisGuide,
}

export function getGuideConfig(citySlug: string): GuideConfig | null {
  return guideConfigs[citySlug] || null
}

export function getSupportedGuideCities(): string[] {
  return Object.keys(guideConfigs)
}
