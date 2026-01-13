/**
 * Cities Data
 * Tüm şehir verileri (statik data)
 * 
 * @example
 * import { cities } from '@/data/cities'
 */

import type { City } from '@/core/types'

export const cities: City[] = [
  // ============ TIER 1: Global Hubs ============
  { 
    slug: 'new-york', city: 'New York', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 40.71, lng: -74.01, tier: 1, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '8.3M', metroPopulation: '20M', phoneCode: '+1 212/718', language: 'English',
      climate: 'Humid subtropical with hot summers (25-35°C) and cold winters (-5 to 5°C). Expect snow December-March.',
      attractions: ['Statue of Liberty', 'Central Park', 'Empire State Building', 'Times Square', 'Brooklyn Bridge', 'Metropolitan Museum of Art', '9/11 Memorial', 'Broadway', 'High Line', 'Grand Central Terminal'],
      demographics: 'One of the most diverse cities globally with over 800 languages spoken. Major communities from Latin America, Asia, Europe, and the Caribbean. The global capital of finance, media, arts, and fashion.',
      seoContent: {
        intro: 'New York City, the largest city in the United States, operates on Eastern Standard Time (EST/UTC-5) during winter and Eastern Daylight Time (EDT/UTC-4) during summer. Known as "The City That Never Sleeps," NYC is the world\'s financial capital and home to the United Nations, Wall Street, Broadway, and countless iconic landmarks.',
        timezoneFacts: 'New York observes Daylight Saving Time from the second Sunday in March to the first Sunday in November. The city shares its timezone with major East Coast cities including Boston, Philadelphia, Washington D.C., and Miami. Wall Street trading hours (9:30 AM - 4:00 PM EST) set the rhythm for global financial markets. When it\'s noon in NYC: London 5:00 PM, Tokyo 2:00 AM (next day), Dubai 9:00 PM.',
        bestTimeToVisit: 'Spring (April-June) brings blooming Central Park and mild temperatures. Fall (September-November) offers spectacular foliage and pleasant weather. Summer is hot but vibrant with outdoor concerts and events. Winter (December-February) is cold but magical with holiday decorations, ice skating, and New Year\'s Eve in Times Square.',
        businessHours: 'Standard business hours are 9:00 AM to 5:00 PM, Monday through Friday. Wall Street operates 9:30 AM to 4:00 PM. Many restaurants serve until midnight or later. Banks typically open 9:00 AM to 5:00 PM weekdays, some with Saturday hours. Stores generally open 10:00 AM to 9:00 PM.',
        timeDifference: 'NYC is UTC-5 (winter) / UTC-4 (summer). When it\'s noon in New York: London 5:00 PM (winter) / 5:00 PM (summer), Paris 6:00 PM, Dubai 9:00 PM, Singapore 1:00 AM (+1), Tokyo 2:00 AM (+1), Sydney 4:00 AM (+1).',
        daylightSaving: 'DST begins second Sunday of March at 2:00 AM (clocks spring forward), ends first Sunday of November at 2:00 AM (clocks fall back). During DST, NYC is only 4 hours behind London instead of 5.',
        localTips: 'The subway runs 24/7 but can be confusing - download the MTA app. Tipping 18-20% is expected at restaurants. Yellow cabs are everywhere but Uber/Lyft often cheaper. Many museums have "pay what you wish" hours. Avoid Times Square for dining - overpriced and touristy.',
        transportation: 'NYC has extensive subway (24/7), bus, and commuter rail. MetroCard or OMNY tap-to-pay works on all MTA services. JFK (international) and LaGuardia (domestic) airports serve the city. Penn Station connects Amtrak and NJ Transit. Grand Central serves Metro-North to suburbs.',
        emergencyNumbers: 'Emergency: 911, Non-emergency NYPD: 311, Poison Control: 1-800-222-1222. NYC has excellent hospitals including NYU Langone, Mount Sinai, and NewYork-Presbyterian.',
        publicHolidays: 'New Year\'s Day (Jan 1), MLK Day (3rd Mon Jan), Presidents Day (3rd Mon Feb), Memorial Day (last Mon May), Independence Day (Jul 4), Labor Day (1st Mon Sep), Columbus Day (2nd Mon Oct), Veterans Day (Nov 11), Thanksgiving (4th Thu Nov), Christmas (Dec 25).'
      }
    }
  },
  { 
    slug: 'london', city: 'London', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 51.51, lng: -0.13, tier: 1, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '9M', metroPopulation: '14M', phoneCode: '+44 20', language: 'English',
      climate: 'Temperate oceanic with mild year-round temperatures (5-25°C). Frequent rain but rarely extreme. Summers pleasant, winters mild but grey.',
      attractions: ['Big Ben', 'Tower of London', 'British Museum', 'Buckingham Palace', 'London Eye', 'Westminster Abbey', 'Tower Bridge', 'Hyde Park', 'Tate Modern', 'St Paul\'s Cathedral'],
      demographics: 'Multicultural metropolis with over 300 languages spoken. Major communities from South Asia, Africa, Europe, and the Middle East. One of the world\'s leading financial centers.',
      seoContent: {
        intro: 'London, the capital of the United Kingdom and home of the Prime Meridian, uses Greenwich Mean Time (GMT/UTC+0) in winter and British Summer Time (BST/UTC+1) from late March to late October. As the birthplace of standardized world time, London remains the reference point for global timekeeping and a critical hub for international business.',
        timezoneFacts: 'The Royal Observatory in Greenwich is where GMT was established in 1884 - you can literally stand on the Prime Meridian (0° longitude). London is 5 hours ahead of New York during winter and maintains this difference during summer due to synchronized DST changes. The city bridges Asian morning markets and American afternoon trading, making it the world\'s forex capital.',
        bestTimeToVisit: 'Late spring (May-June) offers longer days, blooming parks, and pleasant temperatures around 15-20°C. Early fall (September-October) has mild weather and cultural events. Summer brings festivals and outdoor activities. Winter is festive with Christmas markets and New Year fireworks over the Thames.',
        businessHours: 'Standard office hours are 9:00 AM to 5:30 PM. The City of London financial district operates 8:00 AM to 6:00 PM. Shops typically open 10:00 AM to 6:00 PM (9:00 PM on Thursdays in West End). Pubs traditionally close at 11:00 PM but many have later licenses. Sunday trading is limited (usually 10:00 AM - 4:00 PM for large stores).',
        timeDifference: 'London is UTC+0 (winter) / UTC+1 (summer). When it\'s noon in London: New York 7:00 AM, Dubai 4:00 PM, Singapore 8:00 PM, Tokyo 9:00 PM, Sydney 11:00 PM.',
        daylightSaving: 'BST begins last Sunday of March at 1:00 AM (clocks spring forward), ends last Sunday of October at 2:00 AM (clocks fall back). UK DST is synchronized with the EU, keeping consistent time differences with European capitals.',
        localTips: 'Stand on the right on escalators, walk on the left. Oyster card or contactless payment is cheapest for transport. Tipping 10-12.5% at restaurants if service not included. Pubs don\'t have table service - order at the bar. Book popular attractions online in advance.',
        transportation: 'The Tube (Underground) is extensive - runs 5:00 AM to midnight (24h on some lines Fri/Sat). Buses run 24/7. Contactless or Oyster cap daily spending. Heathrow (LHR) is 15 miles west, Gatwick (LGW) 30 miles south. Eurostar connects to Paris/Brussels from St Pancras.',
        emergencyNumbers: 'Emergency: 999 or 112, Non-emergency police: 101, NHS non-emergency: 111. Major hospitals include St Thomas\', Guy\'s, and University College Hospital.',
        publicHolidays: 'New Year\'s Day (Jan 1), Good Friday, Easter Monday, Early May Bank Holiday (1st Mon May), Spring Bank Holiday (last Mon May), Summer Bank Holiday (last Mon Aug), Christmas Day (Dec 25), Boxing Day (Dec 26).'
      }
    }
  },
  { 
    slug: 'tokyo', city: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.68, lng: 139.69, tier: 1, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '14M', metroPopulation: '37M', phoneCode: '+81 3', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (25-35°C) and mild winters (2-10°C). Rainy season (tsuyu) in June. Typhoon season August-October.',
      attractions: ['Tokyo Tower', 'Senso-ji Temple', 'Shibuya Crossing', 'Meiji Shrine', 'Akihabara', 'Tokyo Skytree', 'Tsukiji Outer Market', 'Shinjuku Gyoen', 'Imperial Palace', 'Harajuku'],
      demographics: 'World\'s most populous metropolitan area with 37 million people. Predominantly Japanese (98%) with growing international community. Global center for technology, finance, pop culture, and cuisine.',
      seoContent: {
        intro: 'Tokyo, Japan\'s capital and the world\'s most populous metropolitan area, uses Japan Standard Time (JST/UTC+9) year-round. Japan does not observe Daylight Saving Time, making Tokyo consistently 14 hours ahead of New York (EST), 9 hours ahead of London (GMT), and 6 hours ahead of Dubai. This ultra-modern megacity seamlessly blends ancient temples with cutting-edge technology.',
        timezoneFacts: 'Japan adopted JST in 1888, using the 135°E meridian through Akashi as reference. The consistent time without DST makes international scheduling straightforward. Tokyo\'s financial markets (TSE) operate 9:00 AM - 3:00 PM JST with an 11:30 AM - 12:30 PM lunch break. When New York markets close, Tokyo\'s morning trading begins.',
        bestTimeToVisit: 'Spring (March-May) for world-famous cherry blossoms (sakura) - peak usually late March to early April. Fall (September-November) for spectacular autumn colors (koyo). Summer is hot and humid but has major festivals (matsuri). Winter is cold and dry with fewer tourists and beautiful illuminations.',
        businessHours: 'Japanese businesses typically operate 9:00 AM to 6:00 PM, though overtime culture means many work later. Department stores open 10:00 AM to 8:00 PM. Convenience stores (konbini like 7-Eleven, Lawson, FamilyMart) are open 24/7. Banks operate 9:00 AM to 3:00 PM weekdays only. Restaurants often close between lunch and dinner (2:00-5:00 PM).',
        timeDifference: 'Tokyo is UTC+9 year-round. When it\'s noon in Tokyo: London 3:00 AM, New York 10:00 PM (previous day), Dubai 7:00 AM, Singapore 11:00 AM, Sydney 2:00 PM.',
        daylightSaving: 'Japan does not observe Daylight Saving Time. This means the time difference with countries that do (US, UK, EU) changes seasonally. Tokyo is 14 hours ahead of New York EST but 13 hours ahead during EDT.',
        localTips: 'Carry cash - many places don\'t accept cards. Bow when greeting. Remove shoes when entering homes/temples. Don\'t tip - it\'s considered rude. Trains are punctual to the second. Download Suica/Pasmo for transit. Quiet in trains - no phone calls.',
        transportation: 'Tokyo has the world\'s most complex but efficient rail network. Get a Suica or Pasmo IC card for all trains and buses. JR Pass good for tourists using shinkansen. Narita Airport (NRT) is 60km east, Haneda (HND) is 15km south and more convenient. Last trains around midnight.',
        emergencyNumbers: 'Emergency: 110 (police), 119 (fire/ambulance). English emergency helpline: 03-3501-0110. Most operators don\'t speak English - try Google Translate or ask hotel staff.',
        publicHolidays: 'New Year (Jan 1-3), Coming of Age Day (2nd Mon Jan), National Foundation Day (Feb 11), Vernal Equinox (Mar 20/21), Showa Day (Apr 29), Constitution Day (May 3), Greenery Day (May 4), Children\'s Day (May 5), Marine Day (3rd Mon Jul), Mountain Day (Aug 11), Respect for Aged Day (3rd Mon Sep), Autumnal Equinox (Sep 22/23), Sports Day (2nd Mon Oct), Culture Day (Nov 3), Labor Thanksgiving (Nov 23).'
      }
    }
  },
  { 
    slug: 'paris', city: 'Paris', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 48.86, lng: 2.35, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '2.2M', metroPopulation: '12M', phoneCode: '+33 1', language: 'French',
      climate: 'Oceanic with warm summers (20-25°C) and cool winters (3-8°C). Rain possible year-round but rarely heavy. Spring and fall most pleasant.',
      attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées', 'Sacré-Cœur', 'Palace of Versailles', 'Musée d\'Orsay', 'Arc de Triomphe', 'Montmartre', 'Seine River Cruise'],
      demographics: 'Diverse population with significant communities from North Africa, Sub-Saharan Africa, and Southeast Asia. World capital of art, fashion, gastronomy, and culture. UNESCO World Heritage site.',
      seoContent: {
        intro: 'Paris, the City of Light and capital of France, operates on Central European Time (CET/UTC+1) in winter and Central European Summer Time (CEST/UTC+2) from late March to late October. One of the most visited cities on Earth, Paris is the global epicenter of art, fashion, gastronomy, and culture, home to iconic landmarks like the Eiffel Tower, Louvre, and Notre-Dame.',
        timezoneFacts: 'France adopted CET in 1940 during German occupation and kept it post-war. Paris shares its timezone with Berlin, Rome, Madrid, and Amsterdam. The city is perfectly positioned for business: 1 hour ahead of London, 6 hours ahead of New York, and within reasonable hours of most of Africa and the Middle East.',
        bestTimeToVisit: 'Spring (April-June) brings mild weather, blooming gardens, and outdoor café culture. Fall (September-October) offers pleasant temperatures, fashion weeks, and harvest festivals. Summer is warm but touristy with some August closures. Winter brings magical Christmas markets, sales, and fewer crowds.',
        businessHours: 'French businesses typically operate 9:00 AM to 6:00 PM with a sacred lunch break (12:00-2:00 PM) especially in smaller establishments. Many shops close Sundays and some Mondays. Banks open 9:00 AM to 5:00 PM, often closed for lunch. Department stores like Galeries Lafayette open 10:00 AM to 8:00 PM.',
        timeDifference: 'Paris is UTC+1 (winter) / UTC+2 (summer). When it\'s noon in Paris: London 11:00 AM, New York 6:00 AM, Dubai 3:00 PM, Tokyo 8:00 PM, Sydney 10:00 PM.',
        daylightSaving: 'CEST begins last Sunday of March at 2:00 AM (clocks spring forward), ends last Sunday of October at 3:00 AM (clocks fall back). France follows EU DST rules, synchronized with most European countries.',
        localTips: 'Basic French phrases appreciated - start with "Bonjour." Service is included in bills (service compris) but small tips welcome. Most museums closed Tuesdays. Book Eiffel Tower tickets online weeks ahead. August sees many closures as Parisians vacation.',
        transportation: 'Paris Métro is extensive and efficient (14 lines). Tickets work on Métro, bus, and RER within city. Navigo pass for weekly unlimited travel. Charles de Gaulle (CDG) is 25km northeast, Orly (ORY) 14km south. TGV high-speed trains connect to London, Brussels, and beyond.',
        emergencyNumbers: 'Emergency: 112, Police: 17, Fire: 18, Ambulance: 15. SOS Médecins for house calls: 01 47 07 77 77. Most pharmacies (green cross) offer medical advice.',
        publicHolidays: 'New Year\'s Day (Jan 1), Easter Monday, Labor Day (May 1), Victory Day (May 8), Ascension Day, Whit Monday, Bastille Day (Jul 14), Assumption (Aug 15), All Saints\' Day (Nov 1), Armistice Day (Nov 11), Christmas (Dec 25).'
      }
    }
  },
  { 
    slug: 'dubai', city: 'Dubai', timezone: 'Asia/Dubai', country: 'United Arab Emirates', countryCode: 'AE', lat: 25.20, lng: 55.27, tier: 1, continent: 'asia',
    info: {
      currency: 'UAE Dirham', currencySymbol: 'د.إ', population: '3.5M', metroPopulation: '4.5M', phoneCode: '+971 4', language: 'Arabic, English',
      climate: 'Hot desert climate. Summer (May-Sep) extremely hot 40-50°C. Winter (Nov-Mar) pleasant 20-30°C. Minimal rainfall. Occasional sandstorms.',
      attractions: ['Burj Khalifa', 'Palm Jumeirah', 'Dubai Mall', 'Burj Al Arab', 'Dubai Marina', 'Dubai Creek', 'Dubai Frame', 'Museum of the Future', 'Desert Safari', 'Gold Souk'],
      demographics: 'Expatriates make up over 85% of population, primarily from India, Pakistan, Bangladesh, Philippines, and Western countries. A truly global city and major business/tourism hub.',
      seoContent: {
        intro: 'Dubai, the glittering jewel of the United Arab Emirates, operates on Gulf Standard Time (GST/UTC+4) year-round without Daylight Saving Time. This ultra-modern city rose from desert sands to become a global hub for business, tourism, and luxury, featuring the world\'s tallest building (Burj Khalifa), largest mall, and most ambitious architectural projects.',
        timezoneFacts: 'Dubai\'s fixed UTC+4 timezone makes it an ideal connector between Asian and European/American markets. When London markets close at 4:30 PM GMT, it\'s 8:30 PM in Dubai. When Tokyo opens at 9:00 AM JST, Dubai is at 6:00 AM. The UAE workweek runs Sunday to Thursday, aligning with regional business practices.',
        bestTimeToVisit: 'November to March offers perfect weather (20-30°C) for beaches and outdoor activities. This is peak season with events like Dubai Shopping Festival (Jan) and Dubai Food Festival. Summer (June-September) is extremely hot (40-50°C) but offers major discounts, indoor attractions, and summer camps. Ramadan timing varies annually and affects dining/entertainment.',
        businessHours: 'The UAE workweek is Sunday to Thursday. Offices typically operate 8:00 AM to 6:00 PM. Dubai Mall and major shopping centers open 10:00 AM to midnight (or later on weekends). Many restaurants stay open until 2:00 AM. During Ramadan, working hours are reduced and eating in public during daylight is prohibited.',
        timeDifference: 'Dubai is UTC+4 year-round. When it\'s noon in Dubai: London 8:00 AM (winter) / 9:00 AM (summer), New York 3:00 AM / 4:00 AM, Singapore 4:00 PM, Tokyo 5:00 PM, Sydney 7:00 PM / 8:00 PM.',
        daylightSaving: 'UAE does not observe Daylight Saving Time. This means the time difference with Europe and Americas changes seasonally. Dubai is 4 hours ahead of London in winter, 3 hours in summer.',
        localTips: 'Dress modestly in public (shoulders and knees covered, especially in malls). Alcohol only in licensed venues (hotels, clubs). Public displays of affection frowned upon. Photography of people requires permission. Respect Ramadan etiquette. Bargain at souks, not in malls.',
        transportation: 'Dubai Metro is modern and efficient (Red and Green lines). Taxis are affordable and plentiful. Dubai International (DXB) is 5km from downtown - one of world\'s busiest airports. Water taxis (abras) cross Dubai Creek. RTA Nol card for all public transport.',
        emergencyNumbers: 'Emergency: 999, Police: 901, Ambulance: 998, Fire: 997. Tourist Police for assistance. Most hospitals have excellent English-speaking staff.',
        publicHolidays: 'New Year\'s Day (Jan 1), Eid al-Fitr (varies), Eid al-Adha (varies), Islamic New Year (varies), Prophet\'s Birthday (varies), Commemoration Day (Nov 30), National Day (Dec 2-3). Islamic holidays follow lunar calendar.'
      }
    }
  },
  { 
    slug: 'singapore', city: 'Singapore', timezone: 'Asia/Singapore', country: 'Singapore', countryCode: 'SG', lat: 1.35, lng: 103.82, tier: 1, continent: 'asia',
    info: {
      currency: 'Singapore Dollar', currencySymbol: 'S$', population: '5.9M', phoneCode: '+65', language: 'English, Mandarin, Malay, Tamil',
      climate: 'Tropical rainforest - hot and humid year-round (25-32°C). Monsoon seasons: Northeast (Nov-Mar) and Southwest (Jun-Sep). Afternoon thunderstorms common.',
      attractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island', 'Orchard Road', 'Merlion Park', 'Singapore Zoo', 'Chinatown', 'Little India', 'Clarke Quay', 'Universal Studios Singapore'],
      demographics: 'Multiethnic city-state: Chinese (74%), Malay (13%), Indian (9%), others (4%). Four official languages reflect diversity. One of world\'s leading financial centers and busiest ports.',
      seoContent: {
        intro: 'Singapore, the Lion City, operates on Singapore Standard Time (SGT/UTC+8) year-round without Daylight Saving Time. This ultra-modern city-state at the tip of the Malay Peninsula is a global financial hub, shipping gateway, and melting pot of Asian cultures - consistently ranked among the world\'s safest, cleanest, and most efficient cities.',
        timezoneFacts: 'Singapore adopted UTC+8 in 1982, aligning with Hong Kong, Beijing, and Perth despite being geographically in the UTC+7 zone. This means late sunrises and sunsets. Singapore\'s timezone makes it perfectly positioned for business with all of Asia (same day) and overlaps with European afternoon and American morning hours.',
        bestTimeToVisit: 'Singapore is a year-round destination with consistent tropical weather (25-32°C daily). February-April slightly drier. Major events: Chinese New Year (Jan/Feb), Singapore Food Festival (Jul), F1 Grand Prix (Sep), Christmas on Orchard Road (Dec). Book ahead during peak seasons.',
        businessHours: 'Standard business hours are 9:00 AM to 6:00 PM, Monday through Friday. Shopping malls open 10:00 AM to 10:00 PM daily. Hawker centers and food courts often open early (6:00 AM) for breakfast. Many bars and clubs open until 2:00 AM (later on weekends).',
        timeDifference: 'Singapore is UTC+8 year-round. When it\'s noon in Singapore: London 4:00 AM (winter) / 5:00 AM (summer), New York 11:00 PM / midnight (previous day), Dubai 8:00 AM, Tokyo 1:00 PM, Sydney 3:00 PM / 2:00 PM.',
        daylightSaving: 'Singapore does not observe Daylight Saving Time. The time difference with countries that do (US, UK, EU) changes seasonally. Singapore is 8 hours ahead of London GMT, but only 7 hours during BST.',
        localTips: 'Strict laws: no gum, heavy fines for littering, drug trafficking = death penalty. Tap water safe to drink. MRT (metro) is excellent. Hawker centers offer amazing cheap food. Singlish (local English) can be confusing - "lah," "lor," "can" are common endings. Always air-conditioned indoors.',
        transportation: 'MRT (metro) is world-class - covers most of the island. EZ-Link or NETS FlashPay cards for all public transport. Changi Airport (SIN) consistently voted world\'s best, 20km from city center. Taxis metered and affordable. Grab (ride-hailing) widely used.',
        emergencyNumbers: 'Emergency: 999 (police), 995 (ambulance/fire). Non-emergency police: 1800-255-0000. Most staff speak English. Hospitals include Singapore General, Mount Elizabeth, and Raffles Hospital.',
        publicHolidays: 'New Year\'s Day (Jan 1), Chinese New Year (2 days, Jan/Feb), Good Friday, Labour Day (May 1), Vesak Day (May), Hari Raya Puasa (varies), National Day (Aug 9), Hari Raya Haji (varies), Deepavali (Oct/Nov), Christmas (Dec 25).'
      }
    }
  },
  { 
    slug: 'hong-kong', city: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'Hong Kong', countryCode: 'HK', lat: 22.32, lng: 114.17, tier: 1, continent: 'asia',
    info: {
      currency: 'Hong Kong Dollar', currencySymbol: 'HK$', population: '7.4M', phoneCode: '+852', language: 'Cantonese, English',
      climate: 'Humid subtropical. Hot humid summers (28-33°C) with typhoons Jun-Sep. Mild dry winters (15-20°C). Spring/fall pleasant but humid.',
      attractions: ['Victoria Peak', 'Victoria Harbour', 'Big Buddha', 'Star Ferry', 'Temple Street Night Market', 'Hong Kong Disneyland', 'Ocean Park', 'Lan Kwai Fong', 'Ladies Market', 'Avenue of Stars'],
      demographics: 'Predominantly Cantonese Chinese (92%) with significant Filipino, Indonesian domestic workers and Western expatriate communities. Major financial hub connecting East and West.',
      seoContent: {
        intro: 'Hong Kong, the "Pearl of the Orient," operates on Hong Kong Time (HKT/UTC+8) year-round, the same as mainland China. This Special Administrative Region is a unique blend of East and West - a former British colony now part of China, maintaining its own currency, legal system, and way of life. Its dramatic skyline, harbor, and surrounding mountains create one of the world\'s most iconic cityscapes.',
        timezoneFacts: 'Hong Kong shares UTC+8 with Beijing, Singapore, and Perth, despite being geographically suited to UTC+7. This alignment facilitates business with mainland China. Hong Kong\'s stock exchange (HKEX) operates 9:30 AM - 4:00 PM HKT, overlapping with Shanghai and connecting Asian to European trading.',
        bestTimeToVisit: 'October to December offers the best weather - clear skies, low humidity, and comfortable temperatures (20-25°C). Spring (March-May) is pleasant but humid. Summer (June-September) is hot, humid, and typhoon-prone. Winter (January-February) is mild with Chinese New Year festivities.',
        businessHours: 'Standard office hours are 9:00 AM to 6:00 PM, Monday through Friday. Banks operate 9:00 AM to 4:30 PM weekdays, some Saturday mornings. Shopping malls typically open 10:00 AM to 10:00 PM. Many restaurants and bars open late, especially in Lan Kwai Fong and Wan Chai.',
        timeDifference: 'Hong Kong is UTC+8 year-round. When it\'s noon in Hong Kong: London 4:00 AM (winter) / 5:00 AM (summer), New York 11:00 PM / midnight (previous day), Dubai 8:00 AM, Tokyo 1:00 PM, Sydney 3:00 PM / 2:00 PM.',
        daylightSaving: 'Hong Kong does not observe Daylight Saving Time since 1979. This keeps the city synchronized with mainland China year-round.',
        localTips: 'Octopus card essential for MTR, buses, ferries, and many shops. Tipping not expected but appreciated. Most speak Cantonese first, English widely understood. Dim sum best for breakfast/brunch. Typhoon signals (T8+) close businesses and transport.',
        transportation: 'MTR is world-class - fast, clean, extensive. Octopus card works everywhere. Iconic Star Ferry crosses the harbour (cheapest scenic ride). Trams on Hong Kong Island. Hong Kong International Airport (HKG) on Lantau Island, 35km from Central. Airport Express to Central in 24 minutes.',
        emergencyNumbers: 'Emergency: 999 (police, fire, ambulance). Non-emergency police: 2527-7177. English widely spoken by emergency services. Major hospitals include Queen Mary and Prince of Wales.',
        publicHolidays: 'New Year\'s Day (Jan 1), Chinese New Year (3 days), Ching Ming (Apr), Easter (Good Friday to Easter Monday), Labour Day (May 1), Buddha\'s Birthday (May), Dragon Boat Festival (Jun), HKSAR Day (Jul 1), Mid-Autumn Festival (Sep), National Day (Oct 1), Chung Yeung Festival (Oct), Christmas (Dec 25-26).'
      }
    }
  },
  { 
    slug: 'shanghai', city: 'Shanghai', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 31.23, lng: 121.47, tier: 1, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '26M', metroPopulation: '29M', phoneCode: '+86 21', language: 'Mandarin, Shanghainese',
      climate: 'Humid subtropical with hot humid summers (28-35°C) and chilly damp winters (2-8°C). Plum rain season in June.',
      attractions: ['The Bund', 'Oriental Pearl Tower', 'Yu Garden', 'Shanghai Tower', 'Nanjing Road', 'Jade Buddha Temple', 'French Concession', 'Zhujiajiao Water Town', 'Shanghai Museum', 'Tianzifang'],
      demographics: 'China\'s largest city and global financial center. Mix of longtime residents and migrants from across China. Growing international community of over 200,000 expats.',
      seoContent: {
        intro: 'Shanghai, China\'s largest city and global financial hub, operates on China Standard Time (CST/UTC+8) year-round. Despite China\'s vast east-west span, the entire country uses a single timezone. Shanghai is the world\'s busiest container port and home to the iconic Bund waterfront.',
        timezoneFacts: 'China adopted a single timezone in 1949 for national unity. This means Shanghai shares the same time as cities 3,000km west like Kashgar. Shanghai Stock Exchange operates 9:30 AM - 3:00 PM CST with a lunch break.',
        bestTimeToVisit: 'Spring (April-May) and autumn (October-November) offer the best weather with mild temperatures (15-25°C). Summer is hot and humid with occasional typhoons. Winter is cold and damp but less crowded.',
        businessHours: 'Standard business hours are 9:00 AM to 6:00 PM, Monday through Friday. Shops and malls typically open 10:00 AM to 10:00 PM. Many restaurants serve until late. Banks open 9:00 AM to 5:00 PM.',
        timeDifference: 'Shanghai is UTC+8 year-round. When it\'s noon in Shanghai: London 4:00 AM (winter) / 5:00 AM (summer), New York 11:00 PM / midnight (previous day), Dubai 8:00 AM, Tokyo 1:00 PM, Sydney 3:00 PM.',
        daylightSaving: 'China does not observe Daylight Saving Time. The time difference with Western countries changes seasonally based on their DST schedules.',
        localTips: 'VPN required for Google, Facebook, WhatsApp. WeChat Pay and Alipay essential - many places don\'t accept cash or international cards. Download Didi for taxis. Basic Mandarin very helpful.',
        transportation: 'Shanghai Metro is extensive (18 lines) and efficient. Maglev train connects Pudong Airport to city in 8 minutes (430 km/h). Pudong (PVG) is the main international airport, 30km from city center. Hongqiao (SHA) serves domestic flights.',
        emergencyNumbers: 'Police: 110, Ambulance: 120, Fire: 119. English service limited - use translation apps or ask hotel for assistance.',
        publicHolidays: 'New Year (Jan 1), Chinese New Year (7 days, Jan/Feb), Qingming Festival (Apr 4-6), Labor Day (May 1-5), Dragon Boat Festival (Jun), Mid-Autumn Festival (Sep), National Day (Oct 1-7).'
      }
    }
  },
  { 
    slug: 'sydney', city: 'Sydney', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU', lat: -33.87, lng: 151.21, tier: 1, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '5.4M', phoneCode: '+61 2', language: 'English',
      climate: 'Humid subtropical with warm summers (20-28°C) and mild winters (8-17°C). Bushfire risk in summer. Occasional storms.',
      attractions: ['Sydney Opera House', 'Harbour Bridge', 'Bondi Beach', 'Darling Harbour', 'Taronga Zoo', 'Royal Botanic Garden', 'The Rocks', 'Manly Beach', 'Blue Mountains', 'Circular Quay'],
      demographics: 'Highly multicultural with over 250 languages spoken. Large communities from UK, China, India, Philippines, and Vietnam. Australia\'s economic capital.',
      seoContent: {
        intro: 'Sydney, Australia\'s largest and most iconic city, operates on Australian Eastern Standard Time (AEST/UTC+10) and observes Daylight Saving Time (AEDT/UTC+11) from October to April. Note: Australia\'s DST is opposite to the Northern Hemisphere - summer is December to February.',
        timezoneFacts: 'Sydney is 16-17 hours ahead of New York and 10-11 hours ahead of London. Australia has three main time zones, with Sydney on the east coast. The Opera House and Harbour Bridge form one of the world\'s most recognizable skylines.',
        bestTimeToVisit: 'September to November (spring) and March to May (autumn) offer ideal weather. Summer (December-February) is hot but perfect for beaches. Winter (June-August) is mild and good for hiking.',
        businessHours: 'Standard business hours are 9:00 AM to 5:00 PM, Monday through Friday. Shops typically open 9:00 AM to 5:30 PM (9:00 PM Thursdays). Cafés often open early (6:00-7:00 AM).',
        timeDifference: 'Sydney is UTC+10 (AEST) / UTC+11 (AEDT). When it\'s noon in Sydney: London 1:00/2:00 AM, New York 8:00/9:00 PM (previous day), Tokyo 11:00 AM, Singapore 9:00/10:00 AM.',
        daylightSaving: 'DST runs first Sunday of October to first Sunday of April. Clocks go forward 1 hour in spring, back in autumn. Note: This is opposite to Northern Hemisphere timing.',
        localTips: 'Slip-slop-slap (sunscreen, shirt, hat) essential. Swim between the flags at beaches. Coffee culture is excellent - skip the chains. Tipping not expected but appreciated. Tap water safe everywhere.',
        transportation: 'Opal card for trains, buses, ferries, and light rail. Sydney Airport (SYD) is 8km from CBD. Ferries are scenic transport to Manly and Taronga Zoo. Uber widely available.',
        emergencyNumbers: 'Emergency: 000. Police assistance: 131 444. Lifeline (mental health): 13 11 14.',
        publicHolidays: 'New Year (Jan 1), Australia Day (Jan 26), Good Friday, Easter Monday, Anzac Day (Apr 25), Queen\'s Birthday (Jun), Christmas (Dec 25), Boxing Day (Dec 26).'
      }
    }
  },
  { 
    slug: 'los-angeles', city: 'Los Angeles', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 34.05, lng: -118.24, tier: 1, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '4M', metroPopulation: '13M', phoneCode: '+1 213/310/323', language: 'English, Spanish',
      climate: 'Mediterranean with warm dry summers (22-30°C) and mild winters (10-18°C). Minimal rainfall. Occasional Santa Ana winds and wildfire risk.',
      attractions: ['Hollywood Sign', 'Santa Monica Pier', 'Universal Studios', 'Getty Center', 'Griffith Observatory', 'Venice Beach', 'Rodeo Drive', 'Disneyland', 'Hollywood Walk of Fame', 'LACMA'],
      demographics: 'Majority-minority city with large Hispanic/Latino population (48%). Significant Asian and African American communities. Entertainment capital of the world.',
      seoContent: {
        intro: 'Los Angeles, the City of Angels, operates on Pacific Standard Time (PST/UTC-8) in winter and Pacific Daylight Time (PDT/UTC-7) in summer. LA is the entertainment capital of the world, home to Hollywood, major film studios, and the global music industry.',
        timezoneFacts: 'LA is 3 hours behind New York, 8 hours behind London. Pacific Time covers the US West Coast including San Francisco, Seattle, and Las Vegas. Hollywood premiere schedules often drive global entertainment timing.',
        bestTimeToVisit: 'Year-round destination with 284 sunny days annually. March-May and September-November are ideal. Summer is hot but perfect for beaches. Winter is mild with occasional rain.',
        businessHours: 'Business hours 9:00 AM to 5:00 PM. Entertainment industry works irregular hours. Shops typically 10:00 AM to 9:00 PM. Restaurants often open late.',
        timeDifference: 'LA is UTC-8 (PST) / UTC-7 (PDT). When it\'s noon in LA: New York 3:00 PM, London 8:00 PM, Dubai 12:00 AM (+1), Tokyo 5:00 AM (+1), Sydney 7:00 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. Clocks spring forward and fall back 1 hour, same as all US states except Arizona and Hawaii.',
        localTips: 'Car essential - LA is very spread out. Traffic notorious, avoid rush hours (7-9 AM, 4-7 PM). Tipping 18-20% expected. Beach communities have distinct vibes. Bring layers - temperature varies by area.',
        transportation: 'Metro expanding but car still king. LAX airport is 20km from downtown. Uber/Lyft everywhere. Rent a car for exploring. Some areas walkable (Santa Monica, Downtown).',
        emergencyNumbers: 'Emergency: 911. LAPD non-emergency: 877-275-5273.',
        publicHolidays: 'New Year (Jan 1), MLK Day (Jan), Presidents Day (Feb), Memorial Day (May), Independence Day (Jul 4), Labor Day (Sep), Thanksgiving (Nov), Christmas (Dec 25).'
      }
    }
  },
  { 
    slug: 'toronto', city: 'Toronto', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 43.65, lng: -79.38, tier: 1, continent: 'americas',
    info: {
      currency: 'Canadian Dollar', currencySymbol: 'C$', population: '2.9M', metroPopulation: '6.5M', phoneCode: '+1 416/647', language: 'English, French',
      climate: 'Humid continental with warm humid summers (20-27°C) and cold snowy winters (-7 to 0°C). Four distinct seasons.',
      attractions: ['CN Tower', 'Royal Ontario Museum', 'Ripley\'s Aquarium', 'St. Lawrence Market', 'Toronto Islands', 'Distillery District', 'Kensington Market', 'Art Gallery of Ontario', 'Hockey Hall of Fame', 'Casa Loma'],
      demographics: 'One of world\'s most multicultural cities with over 200 ethnic groups. Half of residents born outside Canada. Major immigration destination.',
      seoContent: {
        intro: 'Toronto, Canada\'s largest city and financial capital, operates on Eastern Standard Time (EST/UTC-5), the same timezone as New York. It observes Daylight Saving Time (EDT/UTC-4) from March to November. Toronto is one of the world\'s most multicultural cities.',
        timezoneFacts: 'Toronto shares its timezone with New York, Miami, and Montreal. Same-day business dealings with NYC are easy. Canada spans 6 time zones from Newfoundland to Pacific.',
        bestTimeToVisit: 'June to September for warm weather and festivals (Pride, TIFF, Caribana). Fall offers beautiful colors. Winter is cold but offers skating and holiday markets. Spring is unpredictable.',
        businessHours: 'Standard business hours 9:00 AM to 5:00 PM. Shops typically 10:00 AM to 9:00 PM. Banks 9:30 AM to 4:00 PM. Tim Hortons often 24 hours.',
        timeDifference: 'Toronto is UTC-5 (EST) / UTC-4 (EDT). When it\'s noon in Toronto: London 5:00 PM, Dubai 9:00 PM, Tokyo 2:00 AM (+1), Sydney 4:00 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November, same as the United States. Clocks change 1 hour.',
        localTips: 'Very polite culture - say "sorry" and "thank you" often. Tipping 15-20% expected. TTC for public transit. Multicultural food scene exceptional. Winters require proper gear.',
        transportation: 'TTC (subway, streetcars, buses) covers the city. Presto card for transit. Pearson Airport (YYZ) is 27km from downtown, connected by UP Express (25 min). Billy Bishop Airport for regional flights.',
        emergencyNumbers: 'Emergency: 911. Police non-emergency: 416-808-2222. Telehealth Ontario: 1-866-797-0000.',
        publicHolidays: 'New Year (Jan 1), Family Day (Feb), Good Friday, Victoria Day (May), Canada Day (Jul 1), Civic Holiday (Aug), Labour Day (Sep), Thanksgiving (Oct), Christmas (Dec 25), Boxing Day (Dec 26).'
      }
    }
  },
  { 
    slug: 'berlin', city: 'Berlin', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 52.52, lng: 13.41, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '3.6M', metroPopulation: '6M', phoneCode: '+49 30', language: 'German',
      climate: 'Oceanic/humid continental with warm summers (18-25°C) and cold winters (-1 to 4°C). Four distinct seasons.',
      attractions: ['Brandenburg Gate', 'Berlin Wall Memorial', 'Museum Island', 'Reichstag Building', 'Checkpoint Charlie', 'East Side Gallery', 'Tiergarten', 'Alexanderplatz', 'Pergamon Museum', 'Holocaust Memorial'],
      demographics: 'Young, creative population with large Turkish community and growing international expat scene. Known for arts, nightlife, and startup culture.',
      seoContent: {
        intro: 'Berlin, Germany\'s capital and largest city, operates on Central European Time (CET/UTC+1) in winter and Central European Summer Time (CEST/UTC+2) from late March to late October. The city is a hub of history, culture, and creativity.',
        timezoneFacts: 'Berlin shares its timezone with most of Western Europe including Paris, Rome, Madrid, and Amsterdam. 1 hour ahead of London, 6 hours ahead of New York. Germany is Europe\'s largest economy.',
        bestTimeToVisit: 'May to September offers warm weather and outdoor events. Christmas markets (late Nov-Dec) are magical. Winter is cold but cultural events continue. Spring brings blooming gardens.',
        businessHours: 'Standard business hours 9:00 AM to 6:00 PM. Shops typically close 6:00-8:00 PM weekdays and 4:00 PM Saturdays. Almost everything closed Sundays (except restaurants and some tourist areas).',
        timeDifference: 'Berlin is UTC+1 (CET) / UTC+2 (CEST). When it\'s noon in Berlin: London 11:00 AM, New York 6:00 AM, Dubai 3:00 PM, Tokyo 8:00 PM, Sydney 10:00 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, synchronized with EU countries. Clocks change at 2:00/3:00 AM.',
        localTips: 'Cash preferred in many places (EC-Karte more common than credit cards). Sundays everything closed - plan ahead. World-class nightlife (clubs often open all weekend). English widely spoken.',
        transportation: 'Excellent U-Bahn and S-Bahn network. BVG ticket valid on all public transport. Berlin has two airports merging into BER (45 min from center). Cycling very popular.',
        emergencyNumbers: 'Emergency: 112 (EU-wide). Police: 110. Fire/Ambulance: 112.',
        publicHolidays: 'New Year (Jan 1), Good Friday, Easter Monday, Labour Day (May 1), Ascension Day, Whit Monday, German Unity Day (Oct 3), Christmas (Dec 25-26).'
      }
    }
  },

  // ============ TIER 2: Major Cities ============
  // Americas
  { 
    slug: 'chicago', city: 'Chicago', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 41.88, lng: -87.63, tier: 1, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '2.7M', metroPopulation: '9.5M', phoneCode: '+1 312', language: 'English',
      climate: 'Humid continental with hot summers (22-30°C) and cold winters (-6 to 2°C). Famous for wind off Lake Michigan.',
      attractions: ['Millennium Park', 'Willis Tower', 'Art Institute', 'Navy Pier', 'Magnificent Mile', 'Wrigley Field', 'Cloud Gate', 'Chicago Riverwalk', 'Field Museum', 'Lincoln Park Zoo'],
      demographics: 'Third-largest US city. Diverse with significant African American, Hispanic, and Polish communities. Major financial and transportation hub.',
      seoContent: {
        intro: 'Chicago, the Windy City, operates on Central Standard Time (CST/UTC-6) in winter and Central Daylight Time (CDT/UTC-5) in summer. Located on Lake Michigan\'s shores, it\'s America\'s third-largest city and a global center for finance, culture, and architecture.',
        timezoneFacts: 'Chicago is 1 hour behind New York, 6 hours behind London. Central Time covers major cities like Houston, Dallas, and New Orleans. Chicago Mercantile Exchange is a major global derivatives marketplace.',
        bestTimeToVisit: 'Late spring (May-Jun) and early fall (Sep-Oct) offer pleasant weather. Summer has festivals and outdoor events. Winter is cold but has holiday markets and indoor attractions.',
        businessHours: 'Standard business hours 9:00 AM to 5:00 PM. Shops typically 10:00 AM to 9:00 PM. Chicago Board of Trade opens 8:30 AM CST.',
        timeDifference: 'Chicago is UTC-6 (CST) / UTC-5 (CDT). When it\'s noon in Chicago: New York 1:00 PM, London 6:00 PM, Tokyo 3:00 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. Clocks spring forward at 2:00 AM in March, fall back in November. Same schedule as most US states.',
        localTips: 'Deep dish pizza is a must-try. Tipping 18-20% expected. CTA "L" train is efficient. Summers are busy with festivals. Winters require warm clothing.',
        transportation: 'CTA "L" trains and buses cover the city. Ventra card for transit. O\'Hare (ORD) is one of world\'s busiest airports, 27km from downtown. Midway (MDW) closer for budget airlines.',
        emergencyNumbers: 'Emergency: 911. Chicago Police non-emergency: 311.',
        publicHolidays: 'US Federal holidays plus local events like St. Patrick\'s Day (green river), Taste of Chicago (Jul), Lollapalooza (Aug).'
      }
    }
  },
  { 
    slug: 'miami', city: 'Miami', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 25.76, lng: -80.19, tier: 1, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '440K', metroPopulation: '6.2M', phoneCode: '+1 305', language: 'English, Spanish',
      climate: 'Tropical monsoon with hot humid summers (28-33°C) and warm dry winters (15-25°C). Hurricane season Jun-Nov.',
      attractions: ['South Beach', 'Art Deco District', 'Little Havana', 'Wynwood Walls', 'Vizcaya Museum', 'Everglades', 'Bayside Marketplace', 'Key Biscayne', 'Design District', 'Pérez Art Museum'],
      demographics: 'Majority Hispanic city with strong Cuban influence. Gateway to Latin America. International banking and cruise ship capital.',
      seoContent: {
        intro: 'Miami, the Magic City, operates on Eastern Standard Time (EST/UTC-5), same as New York. This tropical metropolis is the gateway between North and Latin America, famous for beaches, art deco architecture, and vibrant nightlife.',
        timezoneFacts: 'Same timezone as New York, Atlanta, and Toronto. 5 hours behind London. Miami\'s position makes it ideal for business with Latin America and Caribbean.',
        bestTimeToVisit: 'November to April for pleasant weather and dry season. Summer is hot, humid, and hurricane season. Art Basel in December draws global crowds.',
        businessHours: 'Standard hours 9:00 AM to 5:00 PM. Beach businesses and nightlife run late. Many businesses conduct bilingual operations.',
        timeDifference: 'Miami is UTC-5 (EST) / UTC-4 (EDT). When it\'s noon in Miami: London 5:00 PM, São Paulo 2:00 PM, Los Angeles 9:00 AM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November, same as all US Eastern Time cities. Florida has proposed year-round DST but federal approval pending.',
        localTips: 'Spanish widely spoken - helpful but not required. Tipping 18-20% expected. Don\'t underestimate summer heat and humidity. Beach has strong currents.',
        transportation: 'Metrorail and Metromover cover limited areas. Car recommended for exploring. Miami International (MIA) 13km from downtown. Uber/Lyft popular.',
        emergencyNumbers: 'Emergency: 911. Miami Beach Police: 305-673-7900.',
        publicHolidays: 'US Federal holidays. Calle Ocho Festival (Mar), Ultra Music Festival (Mar), Art Basel (Dec).'
      }
    }
  },
  { 
    slug: 'san-francisco', city: 'San Francisco', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 37.77, lng: -122.42, tier: 1, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '870K', metroPopulation: '4.7M', phoneCode: '+1 415', language: 'English',
      climate: 'Mediterranean with mild summers (15-22°C) and cool foggy winters. Famous for microclimates and fog.',
      attractions: ['Golden Gate Bridge', 'Alcatraz', 'Fisherman\'s Wharf', 'Cable Cars', 'Chinatown', 'Golden Gate Park', 'Union Square', 'Haight-Ashbury', 'Lombard Street', 'SFMOMA'],
      demographics: 'Tech hub with highly educated, diverse population. Large Asian and LGBTQ+ communities. Most expensive US housing market.',
      seoContent: {
        intro: 'San Francisco, the City by the Bay, operates on Pacific Standard Time (PST/UTC-8) in winter and PDT (UTC-7) in summer. This hilly peninsula city is the heart of Silicon Valley, known for the Golden Gate Bridge, tech innovation, and progressive culture.',
        timezoneFacts: '3 hours behind New York, 8 hours behind London. Pacific Time is the US West Coast standard. Tech companies\' schedules influence global software releases.',
        bestTimeToVisit: 'September and October (Indian summer) best for clear skies. Summer is foggy and cool. Spring and fall pleasant. "Coldest winter I ever spent was a summer in San Francisco."',
        businessHours: 'Tech culture means flexible hours. Traditional business 9:00 AM to 5:00 PM. Many cafés and coworking spaces open early.',
        timeDifference: 'SF is UTC-8 (PST) / UTC-7 (PDT). When it\'s noon in SF: New York 3:00 PM, London 8:00 PM, Tokyo 5:00 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. California voters approved year-round DST in 2018 but federal approval still required.',
        localTips: 'Bring layers - weather changes block to block. Cable car lines are long - use early morning. Tipping 18-20%. Hills are steep - wear comfortable shoes.',
        transportation: 'BART connects Bay Area cities. Muni buses and iconic cable cars. SFO airport 21km south. Oakland (OAK) alternative. Uber/Lyft started here.',
        emergencyNumbers: 'Emergency: 911. SFPD non-emergency: 415-553-0123.',
        publicHolidays: 'US Federal holidays. Pride Parade (Jun), Outside Lands (Aug), Fleet Week (Oct).'
      }
    }
  },
  { slug: 'seattle', city: 'Seattle', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 47.61, lng: -122.33, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '740K', metroPopulation: '4M', phoneCode: '+1 206', language: 'English',
      climate: 'Oceanic with mild wet winters (4-8°C) and warm dry summers (16-24°C). Less rainy than reputation suggests - more drizzle than downpours.',
      attractions: ['Space Needle', 'Pike Place Market', 'Museum of Pop Culture', 'Chihuly Garden', 'Seattle Waterfront', 'Capitol Hill', 'Kerry Park', 'Olympic Sculpture Park', 'Pioneer Square', 'Ballard Locks'],
      demographics: 'Tech hub home to Amazon, Microsoft (nearby), and Starbucks HQ. Highly educated population with strong Asian and Scandinavian heritage.',
      seoContent: {
        intro: 'Seattle, the Emerald City, operates on Pacific Standard Time (PST/UTC-8) in winter and PDT (UTC-7) in summer. Nestled between Puget Sound and the Cascade Mountains, Seattle is a major tech hub and cultural center of the Pacific Northwest.',
        timezoneFacts: 'Same timezone as Los Angeles and San Francisco. 3 hours behind New York, 8 hours behind London. Tech companies here influence global software release schedules.',
        bestTimeToVisit: 'June to September offers the best weather with long sunny days. Spring has cherry blossoms. Fall is pleasant but rainy. Winter is mild but gray.',
        businessHours: 'Business hours 9 AM to 5 PM. Tech culture means flexible schedules. Pike Place Market opens 9 AM to 6 PM.',
        timeDifference: 'Seattle is UTC-8 (PST) / UTC-7 (PDT). When noon in Seattle: NYC 3 PM, London 8 PM, Tokyo 5 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. Washington state passed legislation for permanent DST, awaiting federal approval.',
        localTips: 'Coffee culture is serious here. Bring layers - weather changes quickly. Don\'t jaywalk - locals actually wait for lights. Uber to Capitol Hill for nightlife.',
        transportation: 'Link Light Rail connects airport to downtown (40 min). Good bus network. Water taxis and ferries to islands. Sea-Tac Airport (SEA) is 23km south.',
        emergencyNumbers: 'Emergency: 911. Seattle Police non-emergency: 206-625-5011.',
        publicHolidays: 'US Federal holidays. Seafair (Jul-Aug), Bumbershoot (Labor Day weekend).'
      }
    }
  },
  { slug: 'boston', city: 'Boston', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 42.36, lng: -71.06, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '690K', metroPopulation: '4.9M', phoneCode: '+1 617', language: 'English',
      climate: 'Humid continental with warm summers (20-28°C) and cold snowy winters (-4 to 3°C). Beautiful fall foliage.',
      attractions: ['Freedom Trail', 'Fenway Park', 'Harvard University', 'MIT', 'Boston Common', 'North End', 'New England Aquarium', 'Museum of Fine Arts', 'Faneuil Hall', 'Cambridge'],
      demographics: 'Historic city with world-class universities. Large Irish-American population. Major biotech and financial center.',
      seoContent: {
        intro: 'Boston, the Cradle of Liberty, operates on Eastern Standard Time (EST/UTC-5), same as New York. One of America\'s oldest cities, Boston combines Revolutionary War history with world-leading universities and innovation.',
        timezoneFacts: 'Same timezone as NYC, Atlanta, and Miami. 5 hours behind London. Harvard and MIT make Boston a global academic hub.',
        bestTimeToVisit: 'Fall (Sep-Nov) for stunning foliage. Spring (Apr-Jun) for pleasant weather. Summer is warm with outdoor events. Winter is cold but festive.',
        businessHours: 'Business hours 9 AM to 5 PM. Last call at bars is 2 AM. Many student-oriented businesses stay open late.',
        timeDifference: 'Boston is UTC-5 (EST) / UTC-4 (EDT). When noon in Boston: London 5 PM, Dubai 9 PM, Tokyo 2 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. Massachusetts has considered year-round DST but hasn\'t enacted it yet.',
        localTips: 'The "T" (subway) is America\'s oldest. Parking is expensive and scarce. Walk the Freedom Trail. Sox games at Fenway are a must.',
        transportation: 'MBTA "The T" covers city well. Logan Airport (BOS) is just 5km from downtown - one of closest major US airports. Water taxis available.',
        emergencyNumbers: 'Emergency: 911. Boston Police: 617-343-4911.',
        publicHolidays: 'US Federal holidays plus Patriots Day (3rd Monday April) - Boston Marathon day.'
      }
    }
  },
  { slug: 'washington-dc', city: 'Washington D.C.', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 38.91, lng: -77.04, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '690K', metroPopulation: '6.4M', phoneCode: '+1 202', language: 'English',
      climate: 'Humid subtropical with hot summers (25-32°C) and cool winters (0-8°C). Famous cherry blossoms in spring.',
      attractions: ['Capitol Building', 'White House', 'Smithsonian Museums', 'Lincoln Memorial', 'National Mall', 'Arlington Cemetery', 'Washington Monument', 'Georgetown', 'Library of Congress', 'National Zoo'],
      demographics: 'Nation\'s capital with highly educated population. Diverse city with large African American community and international diplomatic presence.',
      seoContent: {
        intro: 'Washington D.C., the capital of the United States, operates on Eastern Standard Time (EST/UTC-5). This planned city is the center of American government, home to iconic monuments, world-class museums, and historic neighborhoods.',
        timezoneFacts: 'Same timezone as NYC and Boston. Government schedules here affect the nation. Congress typically works Tuesday-Thursday when in session.',
        bestTimeToVisit: 'Late March to early April for cherry blossoms. Fall has pleasant weather. Summer is hot and humid. Winter is mild but can have snow.',
        businessHours: 'Government hours 9 AM to 5 PM. Smithsonian museums open 10 AM to 5:30 PM (FREE admission). Happy hour culture strong.',
        timeDifference: 'D.C. is UTC-5 (EST) / UTC-4 (EDT). When noon in D.C.: London 5 PM, Paris 6 PM, Tokyo 2 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. Federal government operations follow this schedule nationwide.',
        localTips: 'Most museums are free! Reserve White House tours through your congressperson months ahead. Metro is clean and efficient. Georgetown has no Metro station - walk or bus.',
        transportation: 'Metro (WMATA) is excellent. Reagan National (DCA) is closest airport - 6km. Dulles (IAD) is 42km. BWI also serves the area.',
        emergencyNumbers: 'Emergency: 911. Capitol Police: 202-224-2823.',
        publicHolidays: 'US Federal holidays. Inauguration Day (every 4 years, Jan 20). Independence Day celebrations are massive.'
      }
    }
  },
  { slug: 'atlanta', city: 'Atlanta', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 33.75, lng: -84.39, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '500K', metroPopulation: '6.1M', phoneCode: '+1 404', language: 'English',
      climate: 'Humid subtropical with hot summers (26-32°C) and mild winters (3-12°C). Occasional ice storms in winter.',
      attractions: ['Georgia Aquarium', 'World of Coca-Cola', 'Martin Luther King Jr. Site', 'Centennial Olympic Park', 'Atlanta Botanical Garden', 'Piedmont Park', 'High Museum of Art', 'Ponce City Market', 'Fox Theatre', 'Stone Mountain'],
      demographics: 'Major business hub and CNN headquarters. Large African American population and cultural center. Home to many Fortune 500 companies.',
      seoContent: {
        intro: 'Atlanta, the capital of the New South, operates on Eastern Standard Time (EST/UTC-5). This booming metropolis is a major business hub, birthplace of Coca-Cola and Martin Luther King Jr., and home to the world\'s busiest airport.',
        timezoneFacts: 'Same timezone as NYC and Miami. Hartsfield-Jackson is the world\'s busiest airport, handling 93+ million passengers annually.',
        bestTimeToVisit: 'Spring (Mar-May) for dogwood blooms. Fall is pleasant. Summer is hot and humid. Winter is mild with occasional cold snaps.',
        businessHours: 'Business hours 9 AM to 5 PM. Southern hospitality means slower pace. Many restaurants open until 10-11 PM.',
        timeDifference: 'Atlanta is UTC-5 (EST) / UTC-4 (EDT). When noon in Atlanta: London 5 PM, Dubai 9 PM, LA 9 AM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November, same as most US states.',
        localTips: 'Car is essential - sprawling city. MARTA rail is limited. Sweet tea is default. "Hot-lanta" summers require AC everywhere.',
        transportation: 'MARTA rail connects airport to downtown/midtown (20 min). Hartsfield-Jackson (ATL) is 16km south - world\'s busiest airport.',
        emergencyNumbers: 'Emergency: 911. Atlanta Police: 404-614-6544.',
        publicHolidays: 'US Federal holidays. DragonCon (Labor Day). Peach Drop (New Year\'s Eve).'
      }
    }
  },
  { slug: 'houston', city: 'Houston', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 29.76, lng: -95.37, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '2.3M', metroPopulation: '7.1M', phoneCode: '+1 713', language: 'English, Spanish',
      climate: 'Humid subtropical with hot humid summers (28-35°C) and mild winters (6-16°C). Hurricane risk June-November.',
      attractions: ['Space Center Houston', 'Museum District', 'Houston Zoo', 'Discovery Green', 'The Galleria', 'San Jacinto Monument', 'Buffalo Bayou', 'Minute Maid Park', 'Hermann Park', 'Kemah Boardwalk'],
      demographics: 'America\'s 4th largest city. Extremely diverse with large Hispanic and Asian populations. Energy capital and NASA\'s mission control.',
      seoContent: {
        intro: 'Houston, Space City, operates on Central Standard Time (CST/UTC-6) in winter and CDT (UTC-5) in summer. America\'s 4th largest city is the energy capital, home to NASA\'s Mission Control, and one of the most diverse cities in the nation.',
        timezoneFacts: 'Same timezone as Chicago and Dallas. 1 hour behind New York. "Houston, we have a problem" came from Mission Control here.',
        bestTimeToVisit: 'February to April and October to November for mild weather. Summer is brutally hot and humid. Hurricane season is June-November.',
        businessHours: 'Business hours 8 AM to 5 PM. Energy industry often starts early. Galleria open 10 AM to 9 PM.',
        timeDifference: 'Houston is UTC-6 (CST) / UTC-5 (CDT). When noon in Houston: NYC 1 PM, London 6 PM, Tokyo 3 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November, same as most US states.',
        localTips: 'Car is absolutely essential. AC runs 24/7 in summer. No zoning laws make for interesting neighborhoods. Tex-Mex is a must.',
        transportation: 'METRORail is limited. Extensive freeway system but heavy traffic. Two airports: George Bush (IAH) 37km north, Hobby (HOU) 18km southeast.',
        emergencyNumbers: 'Emergency: 911. Houston Police: 713-884-3131.',
        publicHolidays: 'US Federal holidays. Houston Livestock Show & Rodeo (Feb-Mar).'
      }
    }
  },
  { slug: 'dallas', city: 'Dallas', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 32.78, lng: -96.80, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '1.3M', metroPopulation: '7.6M', phoneCode: '+1 214', language: 'English, Spanish',
      climate: 'Humid subtropical with hot summers (30-38°C) and mild winters (3-14°C). Occasional severe thunderstorms and tornadoes.',
      attractions: ['Sixth Floor Museum', 'Dallas Arboretum', 'Reunion Tower', 'Perot Museum', 'Deep Ellum', 'AT&T Stadium', 'Dallas Arts District', 'Klyde Warren Park', 'Bishop Arts District', 'Dallas World Aquarium'],
      demographics: 'Major financial and tech hub. Part of DFW metroplex. Corporate headquarters for AT&T, Southwest Airlines, and many others.',
      seoContent: {
        intro: 'Dallas, Big D, operates on Central Standard Time (CST/UTC-6). This sprawling Texas metropolis is a major financial center, corporate hub, and cultural destination known for its arts district, JFK history, and Cowboys football.',
        timezoneFacts: 'Same timezone as Houston and Chicago. 1 hour behind New York. DFW is one of the largest and busiest airports in the world.',
        bestTimeToVisit: 'March to May and September to November for pleasant weather. Summer is very hot. Winter is mild with occasional ice storms.',
        businessHours: 'Business hours 9 AM to 5 PM. Texan hospitality means friendly service. Cowboys games affect Sunday traffic.',
        timeDifference: 'Dallas is UTC-6 (CST) / UTC-5 (CDT). When noon in Dallas: NYC 1 PM, London 6 PM, LA 10 AM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November, same as most US states.',
        localTips: 'Everything is bigger in Texas - including distances. Car essential. BBQ and Tex-Mex are outstanding. Dress is business casual.',
        transportation: 'DART light rail covers Dallas and suburbs. DFW Airport is massive - between Dallas and Fort Worth. Love Field (DAL) is closer for Southwest.',
        emergencyNumbers: 'Emergency: 911. Dallas Police: 214-671-3001.',
        publicHolidays: 'US Federal holidays. State Fair of Texas (Sep-Oct).'
      }
    }
  },
  { slug: 'denver', city: 'Denver', timezone: 'America/Denver', country: 'United States', countryCode: 'US', lat: 39.74, lng: -104.99, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '720K', metroPopulation: '2.9M', phoneCode: '+1 303', language: 'English, Spanish',
      climate: 'Semi-arid with sunny days (300+/year), mild winters (-2 to 8°C) and warm summers (18-32°C). Low humidity. Snow common but melts quickly.',
      attractions: ['Red Rocks Amphitheatre', 'Denver Art Museum', 'Union Station', 'Larimer Square', '16th Street Mall', 'Coors Field', 'Denver Botanic Gardens', 'Rocky Mountain National Park', 'LoDo District', 'Mile High Stadium'],
      demographics: 'Mile High City at 5,280 feet elevation. Young, active, educated population. Major outdoor recreation hub with booming tech scene.',
      seoContent: {
        intro: 'Denver, the Mile High City, operates on Mountain Standard Time (MST/UTC-7) in winter and MDT (UTC-6) in summer. Sitting exactly one mile above sea level at the base of the Rocky Mountains, Denver combines outdoor adventure with urban sophistication.',
        timezoneFacts: 'Mountain Time is between Pacific and Central. 2 hours behind New York, 1 hour ahead of LA. Only major US city on Mountain Time.',
        bestTimeToVisit: 'Year-round destination. Summer for hiking and festivals. Winter for skiing (resorts 1-2 hours away). Fall has beautiful aspens. 300+ sunny days annually.',
        businessHours: 'Business hours 9 AM to 5 PM. Outdoor culture means early starts. Craft breweries open late.',
        timeDifference: 'Denver is UTC-7 (MST) / UTC-6 (MDT). When noon in Denver: NYC 2 PM, LA 11 AM, London 7 PM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. Colorado follows standard US DST rules.',
        localTips: 'Altitude affects newcomers - drink water, go easy on alcohol. Legal cannabis is available. Casual dress code. Broncos games are religion.',
        transportation: 'RTD light rail connects airport to downtown (37 min). Good bus network. DIA (DEN) is 40km northeast - iconic tent roof.',
        emergencyNumbers: 'Emergency: 911. Denver Police: 720-913-2000.',
        publicHolidays: 'US Federal holidays. Great American Beer Festival (Oct). National Western Stock Show (Jan).'
      }
    }
  },
  { slug: 'phoenix', city: 'Phoenix', timezone: 'America/Phoenix', country: 'United States', countryCode: 'US', lat: 33.45, lng: -112.07, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '1.6M', metroPopulation: '4.9M', phoneCode: '+1 602', language: 'English, Spanish',
      climate: 'Hot desert with extremely hot summers (35-42°C) and mild winters (12-21°C). Very dry year-round. 300+ sunny days.',
      attractions: ['Desert Botanical Garden', 'Camelback Mountain', 'Heard Museum', 'Papago Park', 'Phoenix Zoo', 'Musical Instrument Museum', 'Taliesin West', 'South Mountain Park', 'Phoenix Art Museum', 'Old Town Scottsdale'],
      demographics: '5th largest US city. Large Hispanic population. Retirement destination and growing tech hub. Sprawling desert metropolis.',
      seoContent: {
        intro: 'Phoenix, the Valley of the Sun, operates on Mountain Standard Time (MST/UTC-7) year-round. Unlike most of the US, Arizona does NOT observe Daylight Saving Time, making Phoenix one of the few US cities with a consistent UTC offset all year.',
        timezoneFacts: 'Arizona (except Navajo Nation) ignores DST. In summer, Phoenix is same time as LA; in winter, same as Denver. This can cause confusion!',
        bestTimeToVisit: 'October to April is ideal (20-30°C). Summer is extremely hot (40°C+) but hotels are cheap. Snowbirds arrive November.',
        businessHours: 'Many businesses open early (7-8 AM) to beat the heat in summer. Pools are essential. Outdoor activities done by 10 AM in summer.',
        timeDifference: 'Phoenix is always UTC-7. When noon in Phoenix: NYC 2 PM (winter) or 3 PM (summer), LA 11 AM (winter) or noon (summer).',
        daylightSaving: 'Arizona does NOT observe Daylight Saving Time (except Navajo Nation). Phoenix stays on MST (UTC-7) year-round. In summer, Phoenix is same time as California; in winter, same as Colorado.',
        localTips: 'Summer heat is dangerous - carry water always. Don\'t touch metal surfaces outdoors in summer. Golf courses everywhere. Casual dress.',
        transportation: 'Valley Metro light rail is limited. Car essential in this sprawling city. Sky Harbor (PHX) is just 5km from downtown - very convenient.',
        emergencyNumbers: 'Emergency: 911. Phoenix Police: 602-262-6151.',
        publicHolidays: 'US Federal holidays. Note: No DST means time difference with other cities changes seasonally.'
      }
    }
  },
  { slug: 'las-vegas', city: 'Las Vegas', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 36.17, lng: -115.14, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '640K', metroPopulation: '2.3M', phoneCode: '+1 702', language: 'English, Spanish',
      climate: 'Hot desert with scorching summers (35-42°C) and mild winters (5-15°C). Very dry year-round. Monsoon storms possible July-September.',
      attractions: ['The Strip', 'Fremont Street', 'Bellagio Fountains', 'Grand Canyon Tours', 'Hoover Dam', 'Red Rock Canyon', 'High Roller', 'The Mob Museum', 'Neon Museum', 'Shows & Casinos'],
      demographics: 'Entertainment and hospitality capital. 24/7 city that never sleeps. Growing residential population beyond the Strip.',
      seoContent: {
        intro: 'Las Vegas, Sin City, operates on Pacific Standard Time (PST/UTC-8) in winter and PDT (UTC-7) in summer. This desert oasis is the entertainment capital of the world, famous for casinos, shows, and 24-hour excitement.',
        timezoneFacts: 'Same timezone as Los Angeles. Note: Nevada uses DST while neighboring Arizona doesn\'t - crossing the border can be confusing!',
        bestTimeToVisit: 'March to May and September to November for pleasant weather. Summer is brutally hot (40°C+). Winter is mild and affordable.',
        businessHours: 'Casinos and many restaurants/clubs open 24/7. The Strip never sleeps. Pool season is March to October.',
        timeDifference: 'Vegas is UTC-8 (PST) / UTC-7 (PDT). When noon in Vegas: NYC 3 PM, London 8 PM, Tokyo 5 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. Note: Neighboring Arizona doesn\'t observe DST - crossing the border can shift time!',
        localTips: 'Stay hydrated - desert climate is deceptive. Free drinks while gambling. The Strip is 4 miles long - distances are deceiving. Tipping expected everywhere.',
        transportation: 'Monorail runs along the Strip. Uber/Lyft everywhere. McCarran Airport (LAS) is just 8km from Strip - very convenient.',
        emergencyNumbers: 'Emergency: 911. Las Vegas Metro Police: 702-828-3111.',
        publicHolidays: 'US Federal holidays. Casinos open every day. Major conventions throughout year (CES in January, etc.).'
      }
    }
  },
  { slug: 'vancouver', city: 'Vancouver', timezone: 'America/Vancouver', country: 'Canada', countryCode: 'CA', lat: 49.28, lng: -123.12, tier: 1, continent: 'americas',
    info: {
      currency: 'Canadian Dollar', currencySymbol: 'C$', population: '675K', metroPopulation: '2.6M', phoneCode: '+1 604', language: 'English, Chinese',
      climate: 'Oceanic with mild wet winters (2-8°C) and warm dry summers (15-22°C). Surrounded by mountains and ocean.',
      attractions: ['Stanley Park', 'Granville Island', 'Capilano Suspension Bridge', 'Gastown', 'Science World', 'Grouse Mountain', 'Vancouver Aquarium', 'English Bay', 'Chinatown', 'Whistler'],
      demographics: 'Canada\'s Pacific gateway. Large Asian population (40%+). Film industry hub - "Hollywood North". Very multicultural.',
      seoContent: {
        intro: 'Vancouver, Canada\'s Pacific jewel, operates on Pacific Standard Time (PST/UTC-8). Consistently ranked among the world\'s most livable cities, Vancouver offers stunning natural beauty with mountains, ocean, and urban sophistication.',
        timezoneFacts: 'Same timezone as Seattle and San Francisco. 3 hours behind Toronto. Gateway to Asia with strong business ties to Hong Kong and China.',
        bestTimeToVisit: 'June to September for best weather and outdoor activities. Ski season December-April at nearby Whistler. Spring has cherry blossoms.',
        businessHours: 'Business hours 9 AM to 5 PM. Many Asian businesses keep different hours. Granville Island market closes at 7 PM.',
        timeDifference: 'Vancouver is UTC-8 (PST) / UTC-7 (PDT). When noon in Vancouver: Toronto 3 PM, London 8 PM, Hong Kong 4 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November, synchronized with the United States.',
        localTips: 'Rainproof jacket essential. Sushi is exceptional. Don\'t call it "Hongcouver" - locals find it offensive. Bike lanes everywhere.',
        transportation: 'SkyTrain connects airport to downtown (25 min). SeaBus to North Vancouver. YVR airport is 15km south. Very bike-friendly city.',
        emergencyNumbers: 'Emergency: 911. Vancouver Police: 604-717-3321.',
        publicHolidays: 'Canadian federal holidays plus BC Day (first Monday August). Celebration of Light fireworks (July-August).'
      }
    }
  },
  { slug: 'montreal', city: 'Montreal', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 45.50, lng: -73.57, tier: 2, continent: 'americas',
    info: {
      currency: 'Canadian Dollar', currencySymbol: 'C$', population: '1.8M', metroPopulation: '4.3M', phoneCode: '+1 514', language: 'French, English',
      climate: 'Humid continental with warm summers (20-26°C) and cold snowy winters (-12 to -4°C). Four distinct seasons.',
      attractions: ['Old Montreal', 'Mount Royal', 'Notre-Dame Basilica', 'Jean-Talon Market', 'Biodome', 'St. Joseph\'s Oratory', 'Plateau Mont-Royal', 'Montreal Museum of Fine Arts', 'Underground City', 'La Ronde'],
      demographics: 'Second-largest French-speaking city in the world after Paris. Vibrant cultural scene with festivals year-round.',
      seoContent: {
        intro: 'Montreal, Canada\'s cultural capital, operates on Eastern Standard Time (EST/UTC-5). This bilingual metropolis combines European charm with North American energy, offering world-class festivals, cuisine, and a unique joie de vivre.',
        timezoneFacts: 'Same timezone as New York and Toronto. Montreal is the second-largest French-speaking city in the world after Paris.',
        bestTimeToVisit: 'Summer (Jun-Aug) for festivals (Jazz Fest, Just for Laughs). Fall for colors. Winter is cold but has underground city. Spring has sugar shacks.',
        businessHours: 'Business hours 9 AM to 5 PM. Shops open later on Thursdays and Fridays. Many restaurants serve until midnight.',
        timeDifference: 'Montreal is UTC-5 (EST) / UTC-4 (EDT). When noon in Montreal: Paris 6 PM, Vancouver 9 AM, London 5 PM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November, synchronized with the United States.',
        localTips: 'Learn basic French - appreciated even if they reply in English. Poutine is the local specialty. Bagels rival NYC\'s. BYOB restaurants common.',
        transportation: 'Metro (STM) is efficient and artistic. BIXI bike share popular. Trudeau Airport (YUL) is 20km from downtown.',
        emergencyNumbers: 'Emergency: 911. Montreal Police: 514-280-2222.',
        publicHolidays: 'Canadian federal plus Quebec-specific: Saint-Jean-Baptiste Day (June 24), National Patriots\' Day (May).'
      }
    }
  },
  { slug: 'mexico-city', city: 'Mexico City', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 19.43, lng: -99.13, tier: 1, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: 'MX$', population: '9.2M', metroPopulation: '21.8M', phoneCode: '+52 55', language: 'Spanish',
      climate: 'Subtropical highland with mild temperatures year-round (12-25°C) thanks to 2,240m elevation. Rainy season May-October.',
      attractions: ['Zócalo', 'Chapultepec Castle', 'Teotihuacan', 'Frida Kahlo Museum', 'Palacio de Bellas Artes', 'Coyoacán', 'Xochimilco', 'National Museum of Anthropology', 'Roma & Condesa', 'Templo Mayor'],
      demographics: 'One of world\'s largest cities. Rich cultural heritage blending Aztec and Spanish colonial history. Major economic center.',
      seoContent: {
        intro: 'Mexico City (CDMX), the vibrant capital of Mexico, operates on Central Standard Time (CST/UTC-6). One of the world\'s largest and most dynamic cities, CDMX blends ancient Aztec heritage with colonial splendor and modern cosmopolitan energy.',
        timezoneFacts: 'Same timezone as Chicago and Houston. Mexico abolished DST in 2022, so CDMX stays on UTC-6 year-round now.',
        bestTimeToVisit: 'March to May for dry warm weather. September-November also good. Summer (Jun-Sep) is rainy season but afternoons clear up.',
        businessHours: 'Business hours 9 AM to 6 PM with long lunch breaks (2-4 PM). Restaurants serve late. Museums closed Mondays.',
        timeDifference: 'CDMX is UTC-6 year-round. When noon in CDMX: NYC 1 PM (winter) or 2 PM (summer), London 6 PM (winter) or 7 PM (summer).',
        daylightSaving: 'Mexico abolished Daylight Saving Time in October 2022. CDMX stays on UTC-6 year-round. The time difference with US cities now changes seasonally.',
        localTips: 'Altitude (2,240m) can cause breathlessness. Tap water not safe - drink bottled. Tipping 10-15%. Street food is amazing but be cautious.',
        transportation: 'Metro is extensive and very cheap. Uber widely used and safe. Metrobús for longer routes. AICM airport (MEX) is within city limits.',
        emergencyNumbers: 'Emergency: 911. Tourist Police: 55-5250-8221. Tourist assistance: 078.',
        publicHolidays: 'New Year, Constitution Day (Feb 5), Benito Juárez Day (Mar), Labor Day, Independence Day (Sep 16), Revolution Day (Nov 20), Christmas.'
      }
    }
  },
  { slug: 'sao-paulo', city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.55, lng: -46.63, tier: 1, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '12.3M', metroPopulation: '22M', phoneCode: '+55 11', language: 'Portuguese',
      climate: 'Humid subtropical with warm to hot temperatures year-round (18-28°C). Rainy season October-March.',
      attractions: ['Paulista Avenue', 'Ibirapuera Park', 'São Paulo Museum of Art', 'Pinacoteca', 'Municipal Market', 'Liberdade', 'Vila Madalena', 'Edifício Itália', 'Batman Alley', 'Catedral da Sé'],
      demographics: 'Largest city in South America and Southern Hemisphere. Major financial center. Extremely diverse with largest Japanese population outside Japan.',
      seoContent: {
        intro: 'São Paulo, Brazil\'s economic powerhouse, operates on Brasília Time (BRT/UTC-3). The largest city in South America and the Southern Hemisphere, São Paulo is a global financial hub with world-class dining, art, and nightlife.',
        timezoneFacts: 'Brazil eliminated DST in 2019, so São Paulo stays on UTC-3 year-round. 2 hours ahead of New York EST, 3 hours behind London.',
        bestTimeToVisit: 'April to October (dry season) is best. December-February is hot and rainy. City is less crowded during Carnival when locals leave.',
        businessHours: 'Business hours 9 AM to 6 PM. Paulistanos work hard - late nights common. Restaurants serve until midnight or later.',
        timeDifference: 'São Paulo is UTC-3 year-round. When noon in SP: NYC 10 AM (winter) or 11 AM (summer), London 3 PM (winter) or 4 PM (summer).',
        daylightSaving: 'Brazil abolished Daylight Saving Time in 2019. São Paulo stays on UTC-3 (Brasília Time) year-round. The time difference with Northern Hemisphere cities changes based on their DST.',
        localTips: 'Portuguese only - little English spoken. Uber is safer than taxis. Don\'t flash valuables. Food scene is incredible - Japanese, Italian, Brazilian.',
        transportation: 'Metro is expanding but limited. Traffic is notorious - use Metro or Uber. Congonhas (CGH) is closer for domestic; Guarulhos (GRU) for international.',
        emergencyNumbers: 'Police: 190. Ambulance: 192. Fire: 193. Tourist Police: 11-3257-4475.',
        publicHolidays: 'New Year, Carnival (Feb/Mar), Good Friday, Tiradentes Day (Apr 21), Labor Day, Independence Day (Sep 7), Christmas.'
      }
    }
  },
  { slug: 'rio-de-janeiro', city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -22.91, lng: -43.17, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '6.7M', metroPopulation: '13.5M', phoneCode: '+55 21', language: 'Portuguese',
      climate: 'Tropical with hot humid summers (25-35°C) and warm winters (20-27°C). Beaches year-round.',
      attractions: ['Christ the Redeemer', 'Copacabana Beach', 'Sugarloaf Mountain', 'Ipanema', 'Tijuca Forest', 'Maracanã Stadium', 'Santa Teresa', 'Lapa Steps', 'Botanical Garden', 'Niterói Contemporary Art Museum'],
      demographics: 'The "Cidade Maravilhosa" (Marvelous City). Famous for Carnival, samba, and stunning geography. More relaxed than São Paulo.',
      seoContent: {
        intro: 'Rio de Janeiro, the Marvelous City, operates on Brasília Time (BRT/UTC-3). Nestled between dramatic mountains and beautiful beaches, Rio is one of the world\'s most stunning cities, famous for Carnival, samba, and the iconic Christ the Redeemer statue.',
        timezoneFacts: 'Same timezone as São Paulo. Brazil spans 4 time zones but Rio and the major cities are on Brasília Time (UTC-3) year-round.',
        bestTimeToVisit: 'May to October (dry season) for pleasant weather. December-March is hot and rainy but festive. Carnival (February/March) is unforgettable but crowded.',
        businessHours: 'Cariocas (locals) have relaxed attitude. Beach culture affects schedules. Shops 9 AM to 7 PM. Nightlife starts late (11 PM+).',
        timeDifference: 'Rio is UTC-3 year-round. When noon in Rio: NYC 10 AM (winter) or 11 AM (summer), Paris 4 PM (winter) or 5 PM (summer).',
        daylightSaving: 'Brazil abolished Daylight Saving Time in 2019. Rio stays on UTC-3 year-round, making time calculations with other countries simpler.',
        localTips: 'Beach safety - don\'t bring valuables. Learn some Portuguese. Caipirinhas are strong. Favela tours only with reputable guides. Use Uber.',
        transportation: 'Metro is clean and safe but limited. Uber widely used. Santos Dumont (SDU) for domestic, Galeão (GIG) for international flights.',
        emergencyNumbers: 'Police: 190. Ambulance: 192. Tourist Police: 21-2332-2924.',
        publicHolidays: 'Same as Brazil national holidays. Carnival is the biggest event - city transforms for 5 days.'
      }
    }
  },
  { slug: 'buenos-aires', city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR', lat: -34.60, lng: -58.38, tier: 1, continent: 'americas',
    info: {
      currency: 'Argentine Peso', currencySymbol: 'AR$', population: '3M', metroPopulation: '15.6M', phoneCode: '+54 11', language: 'Spanish',
      climate: 'Humid subtropical with warm summers (24-30°C) and mild winters (8-15°C). No dry season - rain year-round.',
      attractions: ['La Boca', 'Recoleta Cemetery', 'Plaza de Mayo', 'San Telmo', 'Palermo', 'Teatro Colón', 'Casa Rosada', 'Puerto Madero', 'MALBA', 'Tigre Delta'],
      demographics: 'The "Paris of South America" with strong European (especially Italian) influence. Capital of tango and exceptional beef.',
      seoContent: {
        intro: 'Buenos Aires, the Paris of South America, operates on Argentina Time (ART/UTC-3). This sophisticated metropolis captivates with its European architecture, passionate tango culture, world-famous beef, and vibrant neighborhoods.',
        timezoneFacts: 'Argentina doesn\'t observe DST. Buenos Aires is the same time as São Paulo and Rio. 2 hours ahead of NYC EST.',
        bestTimeToVisit: 'March to May (fall) and September to November (spring) for pleasant weather. Summer (Dec-Feb) is hot. Winter is mild but can be damp.',
        businessHours: 'Argentines eat late - dinner at 9-10 PM is normal. Shops 10 AM to 8 PM. Tango shows start at midnight.',
        timeDifference: 'Buenos Aires is UTC-3 year-round. When noon in BA: NYC 10 AM (winter) or 11 AM (summer), Madrid 4 PM (winter) or 5 PM (summer).',
        daylightSaving: 'Argentina does not observe Daylight Saving Time. Buenos Aires stays on UTC-3 year-round, making it simple to calculate time differences.',
        localTips: 'Bring USD cash - blue dollar rate is much better than official. Tipping 10%. Don\'t discuss Falklands/Malvinas. Steak with chimichurri is divine.',
        transportation: 'Subte (metro) is the oldest in South America. SUBE card for all transport. Taxis are affordable. Ezeiza (EZE) is 35km; Aeroparque (AEP) is downtown.',
        emergencyNumbers: 'Emergency: 911. Police: 101. Ambulance: 107. Tourist Police: 0800-999-5000.',
        publicHolidays: 'New Year, Carnival, Malvinas Day (Apr 2), Labor Day, May Revolution (May 25), Independence Day (Jul 9), Christmas.'
      }
    }
  },

  // Europe
  { slug: 'madrid', city: 'Madrid', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 40.42, lng: -3.70, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '3.3M', metroPopulation: '6.7M', phoneCode: '+34 91', language: 'Spanish',
      climate: 'Mediterranean continental with hot summers (25-35°C) and cool winters (2-10°C). Very sunny with low humidity.',
      attractions: ['Prado Museum', 'Royal Palace', 'Retiro Park', 'Plaza Mayor', 'Puerta del Sol', 'Mercado San Miguel', 'Gran Vía', 'Reina Sofía Museum', 'Temple of Debod', 'Santiago Bernabéu'],
      demographics: 'Spain\'s capital and largest city. Cultural heart of the Spanish-speaking world. Major business and financial center.',
      seoContent: {
        intro: 'Madrid, the heart of Spain, operates on Central European Time (CET/UTC+1) in winter and CEST (UTC+2) in summer. Spain\'s capital is famous for world-class art museums, vibrant nightlife, and a passionate culture.',
        timezoneFacts: 'Despite being geographically aligned with London (UTC+0), Spain uses CET due to a Franco-era decision. This means late sunsets and late nights.',
        bestTimeToVisit: 'Spring (Apr-Jun) and fall (Sep-Nov) for pleasant weather. Summer is very hot but festive. Winter is mild compared to Northern Europe.',
        businessHours: 'Spain runs late! Lunch 2-4 PM (many shops close), dinner after 9 PM. Siesta tradition still exists. Clubs open until 6 AM.',
        timeDifference: 'Madrid is UTC+1 (CET) / UTC+2 (CEST). When noon in Madrid: London 11 AM, NYC 6 AM, Tokyo 8 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules. Spain is considering permanent standard time due to its westerly position.',
        localTips: 'Eat tapas - small plates culture. Don\'t expect anything before 9 PM for dinner. Siesta hours (2-5 PM) many shops close. Sunday is family day.',
        transportation: 'Metro is excellent and extensive. Cercanías commuter trains. Madrid-Barajas (MAD) is 12km from center. AVE high-speed trains to Barcelona.',
        emergencyNumbers: 'Emergency: 112. Police: 091. Municipal Police: 092.',
        publicHolidays: 'New Year, Epiphany (Jan 6), Good Friday, Labor Day, Assumption (Aug 15), Hispanic Day (Oct 12), All Saints, Constitution Day (Dec 6), Christmas.'
      }
    }
  },
  { slug: 'barcelona', city: 'Barcelona', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 41.39, lng: 2.17, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '1.6M', metroPopulation: '5.6M', phoneCode: '+34 93', language: 'Spanish, Catalan',
      climate: 'Mediterranean with hot summers (24-30°C) and mild winters (8-15°C). Beach city with pleasant year-round weather.',
      attractions: ['La Sagrada Familia', 'Park Güell', 'La Rambla', 'Gothic Quarter', 'Camp Nou', 'Casa Batlló', 'Casa Milà', 'Barceloneta Beach', 'Picasso Museum', 'Montjuïc'],
      demographics: 'Capital of Catalonia with distinct cultural identity. Gaudí\'s architectural masterpieces. Major Mediterranean port and tourism destination.',
      seoContent: {
        intro: 'Barcelona, the capital of Catalonia, operates on Central European Time (CET/UTC+1). This Mediterranean gem combines stunning Gaudí architecture, beautiful beaches, world-class football, and a vibrant cultural scene.',
        timezoneFacts: 'Same timezone as Madrid and Paris. Catalonia has strong regional identity - many locals prefer Catalan to Spanish.',
        bestTimeToVisit: 'May to June and September to October for ideal weather. Summer is hot and crowded. Winter is mild and less touristy.',
        businessHours: 'Similar to Madrid - late schedule. Many shops close 2-4 PM. Restaurants serve dinner from 8:30 PM. Clubs open very late.',
        timeDifference: 'Barcelona is UTC+1 (CET) / UTC+2 (CEST). When noon in Barcelona: London 11 AM, NYC 6 AM, Dubai 3 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Book Sagrada Familia weeks ahead. Beware of pickpockets on La Rambla. Catalan greeting is "Bon dia." Beach culture is big.',
        transportation: 'Metro is efficient. T-casual card for 10 trips. El Prat Airport (BCN) is 15km - Aerobus to center. High-speed AVE to Madrid (2.5h).',
        emergencyNumbers: 'Emergency: 112. Mossos d\'Esquadra (Catalan police): 088.',
        publicHolidays: 'Spanish national holidays plus Catalan: Sant Jordi (Apr 23), La Mercè (Sep 24), Diada Nacional de Catalunya (Sep 11).'
      }
    }
  },
  { slug: 'rome', city: 'Rome', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 41.90, lng: 12.50, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '2.9M', metroPopulation: '4.4M', phoneCode: '+39 06', language: 'Italian',
      climate: 'Mediterranean with hot dry summers (25-32°C) and mild wet winters (5-12°C).',
      attractions: ['Colosseum', 'Vatican City', 'Trevi Fountain', 'Pantheon', 'Roman Forum', 'Spanish Steps', 'St. Peter\'s Basilica', 'Sistine Chapel', 'Piazza Navona', 'Borghese Gallery'],
      demographics: 'Eternal City with 3,000 years of history. Capital of Italy and home of the Vatican. Major tourist destination and religious center.',
      seoContent: {
        intro: 'Rome, the Eternal City, operates on Central European Time (CET/UTC+1). With 3,000 years of history, Rome is an open-air museum, the capital of Italy, and home to Vatican City.',
        timezoneFacts: 'Same timezone as most of Western Europe. Vatican City uses the same time as Rome. Italy was among the first countries to adopt standard time zones.',
        bestTimeToVisit: 'April to June and September to October for pleasant weather and fewer crowds. Summer is hot and crowded. Winter is mild but rainy.',
        businessHours: 'Shops typically 9 AM to 1 PM and 3:30-7:30 PM (riposo in between). Restaurants open for dinner from 7:30 PM. Many sites closed Mondays.',
        timeDifference: 'Rome is UTC+1 (CET) / UTC+2 (CEST). When noon in Rome: London 11 AM, NYC 6 AM, Dubai 3 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Book Vatican and Colosseum tickets online to skip lines. Cover shoulders and knees for churches. No sitting on monuments. Coffee at the bar is cheaper.',
        transportation: 'Metro has only 3 lines but covers major sites. Buses extensive but confusing. Fiumicino (FCO) is main airport, 32km from center. Ciampino (CIA) for budget airlines.',
        emergencyNumbers: 'Emergency: 112. Carabinieri: 112. Police: 113. Ambulance: 118.',
        publicHolidays: 'New Year, Epiphany (Jan 6), Easter Monday, Liberation Day (Apr 25), Labor Day, Republic Day (Jun 2), Assumption (Aug 15), All Saints, Immaculate Conception (Dec 8), Christmas.'
      }
    }
  },
  { slug: 'milan', city: 'Milan', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.46, lng: 9.19, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '1.4M', metroPopulation: '5.2M', phoneCode: '+39 02', language: 'Italian',
      climate: 'Humid subtropical with hot summers (23-30°C) and cold foggy winters (0-8°C).',
      attractions: ['Duomo di Milano', 'The Last Supper', 'Galleria Vittorio Emanuele II', 'La Scala', 'Sforza Castle', 'Navigli District', 'Brera District', 'Pinacoteca di Brera', 'San Siro Stadium', 'Quadrilatero della Moda'],
      demographics: 'Italy\'s fashion and financial capital. More businesslike than Rome. Home to the stock exchange and major international fashion houses.',
      seoContent: {
        intro: 'Milan, Italy\'s fashion and financial capital, operates on Central European Time (CET/UTC+1). This elegant northern city is a global center for fashion, design, and business, home to the iconic Duomo and La Scala opera house.',
        timezoneFacts: 'Same timezone as Rome. Milan is the economic heart of Italy and hosts major fashion weeks that set global schedules.',
        bestTimeToVisit: 'April to June and September to November for pleasant weather. Summer can be hot and muggy. Winter is cold and foggy. Fashion weeks in Feb/Mar and Sep.',
        businessHours: 'More businesslike than southern Italy. Shops 10 AM to 7 PM (some close for lunch). Aperitivo culture 6-9 PM - free food with drinks!',
        timeDifference: 'Milan is UTC+1 (CET) / UTC+2 (CEST). When noon in Milan: London 11 AM, NYC 6 AM, Moscow 2 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Book Last Supper months ahead. Aperitivo is amazing value - buffet with drinks. Milan is expensive. Dress stylishly - it\'s the fashion capital.',
        transportation: 'Metro is efficient (4 lines). Trams are atmospheric. Malpensa (MXP) is main airport, 50km out. Linate (LIN) is closer for short-haul.',
        emergencyNumbers: 'Emergency: 112. Police: 113. Ambulance: 118.',
        publicHolidays: 'Italian national holidays plus Sant\'Ambrogio (Dec 7) - Milan\'s patron saint.'
      }
    }
  },
  { slug: 'amsterdam', city: 'Amsterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.37, lng: 4.90, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '870K', metroPopulation: '2.5M', phoneCode: '+31 20', language: 'Dutch, English',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (2-6°C). Rainy year-round but rarely heavy.',
      attractions: ['Anne Frank House', 'Van Gogh Museum', 'Rijksmuseum', 'Canal Ring', 'Dam Square', 'Vondelpark', 'Jordaan', 'Red Light District', 'Heineken Experience', 'NEMO Science Museum'],
      demographics: 'Liberal, multicultural capital known for tolerance. Major business hub. English widely spoken - almost universal.',
      seoContent: {
        intro: 'Amsterdam, the Venice of the North, operates on Central European Time (CET/UTC+1). This charming canal city is famous for its artistic heritage, cycling culture, liberal attitudes, and historic canal ring.',
        timezoneFacts: 'Same timezone as Paris and Berlin. Netherlands is one of the most connected countries - Schiphol is a major European hub.',
        bestTimeToVisit: 'April to May for tulips and King\'s Day. Summer (Jun-Aug) is pleasant but crowded. Fall and winter are quieter and cheaper.',
        businessHours: 'Shops typically 10 AM to 6 PM (9 PM Thursdays). Many shops closed Sunday mornings. Cafés and restaurants open late.',
        timeDifference: 'Amsterdam is UTC+1 (CET) / UTC+2 (CEST). When noon in Amsterdam: London 11 AM, NYC 6 AM, Dubai 3 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Rent a bike - it\'s how locals get around. Watch out for bike lanes when walking. Coffee shop ≠ café. Book Anne Frank House weeks ahead.',
        transportation: 'Trams, buses, and metro cover the city. OV-chipkaart for all public transport. Schiphol (AMS) is 20km - train to Central in 15 min.',
        emergencyNumbers: 'Emergency: 112. Police non-emergency: 0900-8844.',
        publicHolidays: 'New Year, King\'s Day (Apr 27), Liberation Day (May 5), Ascension, Whit Monday, Christmas (Dec 25-26).'
      }
    }
  },
  { slug: 'brussels', city: 'Brussels', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 50.85, lng: 4.35, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '185K', metroPopulation: '2.1M', phoneCode: '+32 2', language: 'French, Dutch',
      climate: 'Oceanic with mild temperatures year-round (3-8°C winter, 15-22°C summer). Often cloudy and rainy.',
      attractions: ['Grand Place', 'Atomium', 'Manneken Pis', 'Belgian Comic Strip Center', 'Royal Palace', 'Magritte Museum', 'European Quarter', 'Parc du Cinquantenaire', 'Cantillon Brewery', 'Mini-Europe'],
      demographics: 'Capital of Belgium and de facto capital of the EU. Bilingual (French/Dutch). Home to NATO and EU institutions.',
      seoContent: {
        intro: 'Brussels, the capital of Europe, operates on Central European Time (CET/UTC+1). As home to the European Union and NATO headquarters, Brussels is a truly international city known for chocolate, beer, waffles, and Art Nouveau architecture.',
        timezoneFacts: 'Same timezone as Paris and Amsterdam. EU decisions made here affect 450+ million Europeans.',
        bestTimeToVisit: 'April to September for best weather. May-June has flower carpet event (even years). Christmas markets in December.',
        businessHours: 'Business hours 9 AM to 6 PM. Shops close at 6-7 PM. Sunday most shops closed. EU area active weekdays only.',
        timeDifference: 'Brussels is UTC+1 (CET) / UTC+2 (CEST). When noon in Brussels: London 11 AM, NYC 6 AM, Tokyo 8 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Try Belgian frites (twice-fried), waffles, and chocolate. Beer culture is exceptional - over 1,500 varieties. City is bilingual - speak what they speak.',
        transportation: 'Metro, trams, and buses with STIB/MIVB. Brussels Airport (BRU) is 12km - train to center. Brussels South (Midi) for Eurostar to London.',
        emergencyNumbers: 'Emergency: 112. Police: 101. Ambulance/Fire: 100.',
        publicHolidays: 'New Year, Easter Monday, Labor Day, Ascension, Whit Monday, Belgian National Day (Jul 21), Assumption (Aug 15), All Saints, Armistice (Nov 11), Christmas.'
      }
    }
  },
  { slug: 'vienna', city: 'Vienna', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 48.21, lng: 16.37, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '1.9M', metroPopulation: '2.6M', phoneCode: '+43 1', language: 'German',
      climate: 'Humid continental with warm summers (20-26°C) and cold winters (-2 to 4°C). Four distinct seasons.',
      attractions: ['Schönbrunn Palace', 'St. Stephen\'s Cathedral', 'Belvedere Palace', 'Vienna State Opera', 'Prater', 'Hofburg', 'Kunsthistorisches Museum', 'Naschmarkt', 'Spanish Riding School', 'Ringstrasse'],
      demographics: 'Former imperial capital with rich Habsburg heritage. Consistently ranked world\'s most livable city. Major music and cultural center.',
      seoContent: {
        intro: 'Vienna, the City of Music, operates on Central European Time (CET/UTC+1). Once the heart of the Habsburg Empire, Vienna is a UNESCO World Heritage city famous for classical music, imperial palaces, coffee houses, and consistently ranking as the world\'s most livable city.',
        timezoneFacts: 'Same timezone as Berlin and Prague. Vienna was the capital of an empire spanning multiple time zones.',
        bestTimeToVisit: 'April to May and September to October for pleasant weather. Christmas markets (Nov-Dec) are magical. Summer has outdoor concerts.',
        businessHours: 'Shops 9 AM to 6 PM (7 PM Thursdays). Strict Sunday closing laws - plan ahead. Coffee houses are for lingering.',
        timeDifference: 'Vienna is UTC+1 (CET) / UTC+2 (CEST). When noon in Vienna: London 11 AM, NYC 6 AM, Istanbul 2 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Coffee house culture is UNESCO-listed - enjoy it slowly. Sachertorte at Hotel Sacher. Classical concerts everywhere. Dress nicely for opera.',
        transportation: 'U-Bahn (metro) is excellent. Vienna Card for unlimited transport + discounts. Vienna Airport (VIE) is 18km - CAT train to center in 16 min.',
        emergencyNumbers: 'Emergency: 112. Police: 133. Ambulance: 144. Fire: 122.',
        publicHolidays: 'New Year, Epiphany (Jan 6), Easter Monday, Labor Day, Ascension, Whit Monday, Corpus Christi, Assumption (Aug 15), National Day (Oct 26), All Saints, Immaculate Conception (Dec 8), Christmas.'
      }
    }
  },
  { slug: 'zurich', city: 'Zurich', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 47.37, lng: 8.54, tier: 1, continent: 'europe',
    info: {
      currency: 'Swiss Franc', currencySymbol: 'CHF', population: '420K', metroPopulation: '1.4M', phoneCode: '+41 44', language: 'German',
      climate: 'Oceanic with mild summers (18-24°C) and cold winters (-1 to 4°C). Snow common in winter.',
      attractions: ['Old Town (Altstadt)', 'Lake Zurich', 'Kunsthaus', 'Bahnhofstrasse', 'Grossmünster', 'Swiss National Museum', 'Uetliberg', 'Lindenhof', 'Zurich Zoo', 'FIFA World Football Museum'],
      demographics: 'Switzerland\'s largest city and global financial center. Consistently ranked among world\'s most expensive and livable cities.',
      seoContent: {
        intro: 'Zurich, Switzerland\'s largest city, operates on Central European Time (CET/UTC+1). This pristine city on Lake Zurich is a global financial center, known for its exceptional quality of life, cleanliness, and stunning Alpine backdrop.',
        timezoneFacts: 'Same timezone as Germany and France. Switzerland is famous for watchmaking - punctuality is taken seriously here.',
        bestTimeToVisit: 'June to September for warm weather and outdoor activities. December for Christmas markets. Ski season nearby from December to April.',
        businessHours: 'Shops typically 9 AM to 8 PM (6:30 PM Saturdays). Strict Sunday closing. Banks close at 4:30 PM.',
        timeDifference: 'Zurich is UTC+1 (CET) / UTC+2 (CEST). When noon in Zurich: London 11 AM, NYC 6 AM, Dubai 3 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October. Switzerland follows EU DST schedule despite not being an EU member.',
        localTips: 'Extremely expensive - budget accordingly. Tap water is excellent. Swiss punctuality is real. Tipping not expected (included in prices).',
        transportation: 'Excellent trams, buses, and S-Bahn. ZVV pass for all public transport. Zurich Airport (ZRH) is 10km - train to center in 10 min.',
        emergencyNumbers: 'Emergency: 112. Police: 117. Ambulance: 144. Fire: 118.',
        publicHolidays: 'New Year, Good Friday, Easter Monday, Labor Day, Ascension, Whit Monday, Swiss National Day (Aug 1), Christmas (Dec 25-26).'
      }
    }
  },
  { slug: 'geneva', city: 'Geneva', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 46.20, lng: 6.14, tier: 2, continent: 'europe',
    info: {
      currency: 'Swiss Franc', currencySymbol: 'CHF', population: '200K', metroPopulation: '1M', phoneCode: '+41 22', language: 'French',
      climate: 'Oceanic with mild summers (18-25°C) and cold winters (0-5°C). Lake and mountain views year-round.',
      attractions: ['Jet d\'Eau', 'United Nations', 'CERN', 'Old Town', 'Lake Geneva', 'St. Pierre Cathedral', 'Red Cross Museum', 'Patek Philippe Museum', 'Carouge', 'Mont Salève'],
      demographics: 'International city hosting UN, Red Cross, and 200+ international organizations. French-speaking. Watch industry capital.',
      seoContent: {
        intro: 'Geneva, the Peace Capital, operates on Central European Time (CET/UTC+1). Nestled at the foot of the Alps on Lake Geneva, this cosmopolitan city hosts the United Nations, Red Cross, and over 200 international organizations.',
        timezoneFacts: 'Same timezone as Zurich. Geneva hosts organizations that coordinate global time standards and international agreements.',
        bestTimeToVisit: 'May to September for best weather and lake activities. Winter for nearby skiing. Avoid August when locals vacation.',
        businessHours: 'Shops 9 AM to 7 PM (6 PM Saturdays). Everything closed Sundays. International organizations follow various schedules.',
        timeDifference: 'Geneva is UTC+1 (CET) / UTC+2 (CEST). When noon in Geneva: London 11 AM, NYC 6 AM, Tokyo 8 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October. Switzerland follows EU DST schedule despite not being an EU member.',
        localTips: 'Very expensive - among world\'s costliest cities. CERN visits must be booked ahead. French is the main language. Many work for international orgs.',
        transportation: 'Excellent trams and buses. Free bikes available. Geneva Airport (GVA) is 4km - train to center in 6 min. TGV to Paris.',
        emergencyNumbers: 'Emergency: 112. Police: 117. Ambulance: 144. Fire: 118.',
        publicHolidays: 'Swiss holidays plus Geneva-specific: Jeûne Genevois (September), Restoration Day (Dec 31).'
      }
    }
  },
  { slug: 'munich', city: 'Munich', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 48.14, lng: 11.58, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '1.5M', metroPopulation: '2.9M', phoneCode: '+49 89', language: 'German, Bavarian',
      climate: 'Humid continental with warm summers (18-25°C) and cold winters (-3 to 4°C). Alpine influence. Föhn winds can bring sudden warmth.',
      attractions: ['Marienplatz', 'Oktoberfest grounds', 'English Garden', 'BMW Museum', 'Nymphenburg Palace', 'Deutsches Museum', 'Residenz', 'Viktualienmarkt', 'Allianz Arena', 'Dachau Memorial'],
      demographics: 'Bavaria\'s capital with distinct culture. Home to BMW and major tech companies. More traditional and wealthy than Berlin.',
      seoContent: {
        intro: 'Munich, Bavaria\'s capital, operates on Central European Time (CET/UTC+1). This elegant city combines traditional Bavarian culture with cutting-edge technology, world-class museums, and of course, Oktoberfest.',
        timezoneFacts: 'Same timezone as Berlin and most of Europe. Munich is closer to Vienna than to Berlin. Bavaria has distinct identity within Germany.',
        bestTimeToVisit: 'Late September to early October for Oktoberfest. Summer for beer gardens. December for Christmas markets. Spring for day trips to Alps.',
        businessHours: 'Shops 10 AM to 8 PM. Strict Sunday closing. Beer gardens open till 11 PM. Oktoberfest tents close at 10:30 PM.',
        timeDifference: 'Munich is UTC+1 (CET) / UTC+2 (CEST). When noon in Munich: London 11 AM, NYC 6 AM, Dubai 3 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Book Oktoberfest accommodation months ahead. Weißwurst (white sausage) only eaten before noon. Lederhosen/Dirndl appreciated at festivals.',
        transportation: 'Excellent U-Bahn and S-Bahn. MVV ticket covers all zones. Munich Airport (MUC) is 40km - S-Bahn to center in 45 min.',
        emergencyNumbers: 'Emergency: 112. Police: 110.',
        publicHolidays: 'German federal holidays plus Bavarian: Epiphany (Jan 6), Corpus Christi, Assumption (Aug 15), All Saints (Nov 1).'
      }
    }
  },
  { slug: 'frankfurt', city: 'Frankfurt', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.11, lng: 8.68, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '760K', metroPopulation: '2.3M', phoneCode: '+49 69', language: 'German',
      climate: 'Oceanic with mild summers (17-25°C) and cool winters (0-5°C). Relatively mild for Germany.',
      attractions: ['Römerberg', 'Main Tower', 'Museumsufer', 'Palmengarten', 'Old Opera House', 'St. Bartholomew\'s Cathedral', 'Goethe House', 'Frankfurt Zoo', 'Sachsenhausen', 'Kleinmarkthalle'],
      demographics: 'Germany\'s financial capital and home to the European Central Bank. Major transportation hub. More international than traditional German.',
      seoContent: {
        intro: 'Frankfurt, Germany\'s financial capital, operates on Central European Time (CET/UTC+1). Known as "Mainhattan" for its impressive skyline, Frankfurt is home to the European Central Bank, major corporations, and one of Europe\'s busiest airports.',
        timezoneFacts: 'Same timezone as Berlin. Frankfurt Stock Exchange is one of the world\'s largest. ECB decisions here affect the entire Eurozone.',
        bestTimeToVisit: 'May to September for pleasant weather. Christmas markets in December. Book Fair in October. Avoid trade fair weeks unless attending.',
        businessHours: 'Business-oriented city with standard hours 9 AM to 6 PM. Many international companies. Apfelwein (apple wine) culture in Sachsenhausen.',
        timeDifference: 'Frankfurt is UTC+1 (CET) / UTC+2 (CEST). When noon in Frankfurt: London 11 AM, NYC 6 AM, Tokyo 8 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Try Apfelwein in Sachsenhausen district. Museumsufer (museum embankment) is excellent. City is surprisingly compact. English widely spoken in business.',
        transportation: 'Excellent U-Bahn and S-Bahn. Frankfurt Airport (FRA) is a major European hub - S-Bahn to center in 11 min. High-speed trains to all German cities.',
        emergencyNumbers: 'Emergency: 112. Police: 110.',
        publicHolidays: 'German federal holidays plus Hesse-specific: Corpus Christi.'
      }
    }
  },
  { slug: 'stockholm', city: 'Stockholm', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 59.33, lng: 18.07, tier: 2, continent: 'europe',
    info: {
      currency: 'Swedish Krona', currencySymbol: 'SEK', population: '980K', metroPopulation: '2.4M', phoneCode: '+46 8', language: 'Swedish, English',
      climate: 'Humid continental with mild summers (17-22°C) and cold winters (-3 to 1°C). Very long summer days, very short winter days.',
      attractions: ['Vasa Museum', 'Gamla Stan', 'ABBA Museum', 'Skansen', 'Royal Palace', 'Djurgården', 'City Hall', 'Fotografiska', 'SoFo District', 'Archipelago'],
      demographics: 'Sweden\'s capital spread across 14 islands. Very high quality of life. Tech hub - home to Spotify and many startups.',
      seoContent: {
        intro: 'Stockholm, the Venice of the North, operates on Central European Time (CET/UTC+1). Built on 14 islands where Lake Mälaren meets the Baltic Sea, Stockholm is one of the world\'s most beautiful capitals.',
        timezoneFacts: 'Same timezone as Berlin and Paris. Extreme daylight variation - 18+ hours of light in summer, just 6 hours in winter.',
        bestTimeToVisit: 'June to August for long days and outdoor café culture. December for Christmas markets and cozy atmosphere. May-September for archipelago.',
        businessHours: 'Shops 10 AM to 6 PM (7 PM in malls). Fika (coffee break) is sacred - usually 10 AM and 3 PM. Many work from home Fridays.',
        timeDifference: 'Stockholm is UTC+1 (CET) / UTC+2 (CEST). When noon in Stockholm: London 11 AM, NYC 6 AM, Tokyo 8 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Almost completely cashless - card or mobile payment everywhere. Fika culture is essential. English is nearly universal. Tap water is excellent.',
        transportation: 'T-bana (metro) is efficient and artistic. SL Access card for all transport. Arlanda Airport (ARN) is 40km - Arlanda Express in 20 min.',
        emergencyNumbers: 'Emergency: 112. Police non-emergency: 114 14.',
        publicHolidays: 'New Year, Epiphany (Jan 6), Good Friday, Easter, Labor Day, Ascension, National Day (Jun 6), Midsummer (June), All Saints, Christmas Eve/Day.'
      }
    }
  },
  { slug: 'oslo', city: 'Oslo', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 59.91, lng: 10.75, tier: 2, continent: 'europe',
    info: {
      currency: 'Norwegian Krone', currencySymbol: 'NOK', population: '700K', metroPopulation: '1M', phoneCode: '+47', language: 'Norwegian, English',
      climate: 'Humid continental with mild summers (16-22°C) and cold winters (-5 to 0°C). Fjord setting with outdoor lifestyle.',
      attractions: ['Viking Ship Museum', 'Vigeland Sculpture Park', 'Opera House', 'Akershus Fortress', 'Munch Museum', 'Holmenkollen Ski Jump', 'Karl Johans Gate', 'National Gallery', 'Nobel Peace Center', 'Fram Museum'],
      demographics: 'Norway\'s capital with high quality of life. Oil wealth funds extensive public services. Very expensive but very livable.',
      seoContent: {
        intro: 'Oslo, Norway\'s capital, operates on Central European Time (CET/UTC+1). Nestled at the head of a fjord and surrounded by forested hills, Oslo combines Nordic design, rich Viking heritage, and exceptional quality of life.',
        timezoneFacts: 'Same timezone as Stockholm and Copenhagen. Norway spans 2 time zones including Svalbard. Oil fund makes Norway one of world\'s wealthiest nations.',
        bestTimeToVisit: 'May to September for mild weather and long days. December-March for winter sports and Northern Lights (outside city). Christmas markets in December.',
        businessHours: 'Shops 10 AM to 5 PM (4 PM Saturdays). Everything closes early. Work-life balance is priority - Norwegians don\'t overwork.',
        timeDifference: 'Oslo is UTC+1 (CET) / UTC+2 (CEST). When noon in Oslo: London 11 AM, NYC 6 AM, Tokyo 8 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October. Norway follows EU DST schedule despite not being an EU member.',
        localTips: 'Extremely expensive - Norway is one of the world\'s costliest countries. Card payment universal. Right to roam (allemannsretten) allows hiking anywhere.',
        transportation: 'T-bane, trams, and buses with Ruter. Gardermoen Airport (OSL) is 50km - Flytoget train in 20 min.',
        emergencyNumbers: 'Emergency: 112. Police: 02800. Ambulance: 113. Fire: 110.',
        publicHolidays: 'New Year, Maundy Thursday, Good Friday, Easter Monday, Labor Day, Constitution Day (May 17 - huge celebrations!), Ascension, Whit Monday, Christmas.'
      }
    }
  },
  { slug: 'copenhagen', city: 'Copenhagen', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 55.68, lng: 12.57, tier: 2, continent: 'europe',
    info: {
      currency: 'Danish Krone', currencySymbol: 'DKK', population: '800K', metroPopulation: '2.1M', phoneCode: '+45', language: 'Danish, English',
      climate: 'Oceanic with mild summers (17-22°C) and cold winters (0-4°C). Windy year-round due to flat terrain.',
      attractions: ['Tivoli Gardens', 'Little Mermaid', 'Nyhavn', 'Christiansborg Palace', 'Strøget', 'Rosenborg Castle', 'National Museum', 'Christiania', 'Round Tower', 'Copenhagen Zoo'],
      demographics: 'Denmark\'s capital known for design, cycling culture, and hygge. Consistently ranked among world\'s happiest cities.',
      seoContent: {
        intro: 'Copenhagen, the capital of the happiest country on Earth, operates on Central European Time (CET/UTC+1). This bike-friendly city is famous for design, gastronomy, Tivoli Gardens, and the Danish concept of hygge (coziness).',
        timezoneFacts: 'Same timezone as Stockholm and Berlin. Denmark includes Greenland (4 time zones!) and Faroe Islands.',
        bestTimeToVisit: 'May to September for best weather. December for hygge season and Tivoli Christmas market. Summer has long days and outdoor concerts.',
        businessHours: 'Shops 10 AM to 6 PM (5 PM Saturdays). Work-life balance prioritized. Many leave work by 4 PM.',
        timeDifference: 'Copenhagen is UTC+1 (CET) / UTC+2 (CEST). When noon in Copenhagen: London 11 AM, NYC 6 AM, Tokyo 8 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Rent a bike - everyone cycles. Smørrebrød (open sandwiches) for lunch. Hygge is a lifestyle - embrace coziness. English is universal.',
        transportation: 'Metro, S-tog, and buses. Copenhagen Card includes transport + attractions. Kastrup Airport (CPH) is 8km - metro to center in 15 min.',
        emergencyNumbers: 'Emergency: 112. Police non-emergency: 114.',
        publicHolidays: 'New Year, Maundy Thursday, Good Friday, Easter Monday, Prayer Day (Apr/May), Ascension, Whit Monday, Constitution Day (Jun 5), Christmas.'
      }
    }
  },
  { slug: 'helsinki', city: 'Helsinki', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 60.17, lng: 24.94, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '660K', metroPopulation: '1.5M', phoneCode: '+358 9', language: 'Finnish, Swedish',
      climate: 'Humid continental with mild summers (16-22°C) and cold winters (-6 to -1°C). White nights in summer, polar darkness in winter.',
      attractions: ['Helsinki Cathedral', 'Suomenlinna Sea Fortress', 'Market Square', 'Design District', 'Oodi Library', 'Temppeliaukio Church', 'Kiasma', 'Esplanade Park', 'Sibelius Monument', 'Allas Sea Pool'],
      demographics: 'Finland\'s capital with exceptional education and design. Home to Nokia. Very high quality of life and tech innovation.',
      seoContent: {
        intro: 'Helsinki, Finland\'s design-forward capital, operates on Eastern European Time (EET/UTC+2). This compact coastal city blends Nordic design, cutting-edge architecture, and a thriving sauna culture on the Baltic Sea.',
        timezoneFacts: 'One hour ahead of Central Europe. Same timezone as Tallinn and Athens. Extreme daylight variation - nearly 24-hour sun in June, few hours in December.',
        bestTimeToVisit: 'June to August for white nights and outdoor terraces. December for Christmas markets and winter atmosphere. September for fall colors.',
        businessHours: 'Shops 10 AM to 6 PM (4 PM Saturdays). Finns are punctual. Work-life balance important. Many cafés open early for breakfast.',
        timeDifference: 'Helsinki is UTC+2 (EET) / UTC+3 (EEST). When noon in Helsinki: London 10 AM, NYC 5 AM, Stockholm 11 AM.',
        daylightSaving: 'EEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Sauna is essential Finnish culture - embrace it. Coffee consumption is world\'s highest. Tipping not expected. Personal space is respected.',
        transportation: 'HSL covers metro, trams, buses, and ferries. Suomenlinna ferry included in transit pass. Helsinki-Vantaa Airport (HEL) is 18km - train/bus 30 min.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'New Year, Epiphany (Jan 6), Good Friday, Easter Monday, Labor Day (May 1), Ascension, Midsummer (June), Independence Day (Dec 6), Christmas.'
      }
    }
  },
  { slug: 'moscow', city: 'Moscow', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 55.76, lng: 37.62, tier: 1, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '12.6M', metroPopulation: '17.1M', phoneCode: '+7 495', language: 'Russian',
      climate: 'Humid continental with warm summers (18-25°C) and very cold winters (-10 to -4°C). Snow covers ground November to March.',
      attractions: ['Red Square', 'Kremlin', 'St. Basil\'s Cathedral', 'Bolshoi Theatre', 'Tretyakov Gallery', 'Moscow Metro', 'GUM', 'Gorky Park', 'Arbat Street', 'Cathedral of Christ the Saviour'],
      demographics: 'Russia\'s capital and largest city in Europe. Political, economic, and cultural heart of Russia. Historic center of power.',
      seoContent: {
        intro: 'Moscow, Russia\'s vast capital, operates on Moscow Standard Time (MSK/UTC+3) year-round. The political, economic, and cultural heart of Russia, Moscow is known for the Kremlin, Red Square, world-class ballet, and one of the world\'s most beautiful metro systems.',
        timezoneFacts: 'Russia abolished DST in 2011. Moscow time (UTC+3) is used as reference for 6 other Russian time zones spanning 11 zones total.',
        bestTimeToVisit: 'May to September for warm weather. Winter (Dec-Feb) is cold but magical with snow-covered onion domes. White Nights in June.',
        businessHours: 'Business hours 9 AM to 6 PM. Shops open 10 AM to 10 PM. Metro runs 5:30 AM to 1 AM. Many restaurants open late.',
        timeDifference: 'Moscow is UTC+3 year-round. When noon in Moscow: London 9 AM, NYC 4 AM, Beijing 5 PM.',
        daylightSaving: 'Russia abolished Daylight Saving Time in 2011. Moscow stays on UTC+3 year-round. The time difference with European cities changes based on their DST schedules.',
        localTips: 'Visa required for most nationalities. Learn Cyrillic alphabet for navigation. Metro stations are underground palaces. Tipping 10% appreciated.',
        transportation: 'Metro is extensive, beautiful, and efficient. Sheremetyevo (SVO) and Domodedovo (DME) are main airports - Aeroexpress trains to center.',
        emergencyNumbers: 'Emergency: 112. Police: 102. Ambulance: 103. Fire: 101.',
        publicHolidays: 'New Year (Jan 1-8), Orthodox Christmas (Jan 7), Defender\'s Day (Feb 23), Women\'s Day (Mar 8), Labor Day (May 1), Victory Day (May 9), Russia Day (Jun 12), Unity Day (Nov 4).'
      }
    }
  },
  { 
    slug: 'istanbul', city: 'Istanbul', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 41.01, lng: 28.97, tier: 1, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '16M', metroPopulation: '20M', phoneCode: '+90 212/216', language: 'Turkish',
      climate: 'Mediterranean transitioning to oceanic with warm summers (25-30°C) and cool wet winters (5-10°C). Expect rain from November to March.',
      attractions: ['Hagia Sophia', 'Blue Mosque', 'Topkapi Palace', 'Grand Bazaar', 'Bosphorus Cruise', 'Galata Tower', 'Basilica Cistern', 'Dolmabahçe Palace', 'Spice Bazaar', 'Princes Islands'],
      demographics: 'Turkey\'s largest city spanning two continents with over 16 million residents. A vibrant melting pot where East meets West, featuring a diverse population from all regions of Turkey and a growing international community.',
      seoContent: {
        intro: 'Istanbul, the only city in the world spanning two continents, operates on Turkey Time (TRT/UTC+3) year-round. This magnificent metropolis where Europe meets Asia has been the capital of three great empires - Roman, Byzantine, and Ottoman. Since 2016, Turkey no longer observes Daylight Saving Time, keeping Istanbul consistently 3 hours ahead of London (GMT), 8 hours ahead of New York (EST), and 6 hours behind Tokyo (JST).',
        timezoneFacts: 'Turkey permanently adopted UTC+3 (former summer time) in 2016, eliminating the biannual clock changes. This places Istanbul in the same timezone as Moscow, Riyadh, and Nairobi. Interestingly, the Bosphorus strait that divides the city doesn\'t create any time difference - both the European and Asian sides share the same time. The decision to stay on permanent summer time means winter sunrises can be as late as 8:30 AM in December.',
        bestTimeToVisit: 'Spring (April-May) offers perfect weather with temperatures around 15-20°C, blooming tulips, and manageable crowds. Fall (September-November) brings similar pleasant conditions with harvest festivals. Summer (June-August) is hot and crowded but ideal for Bosphorus activities. Winter (December-February) is mild compared to Northern Europe, offering fewer tourists, lower prices, and a magical atmosphere, especially during the snow.',
        businessHours: 'Standard business hours are 9:00 AM to 6:00 PM, Monday through Friday. Banks operate 9:00 AM to 5:00 PM. The Grand Bazaar opens 8:30 AM to 7:00 PM (closed Sundays), while the Spice Bazaar operates 8:00 AM to 7:30 PM. Shopping malls are open 10:00 AM to 10:00 PM daily. Most restaurants serve from noon until midnight, with many staying open until 2:00 AM in Beyoğlu and Kadıköy.',
        timeDifference: 'Istanbul is UTC+3 year-round. When it\'s noon in Istanbul: London 9:00 AM (winter) / 10:00 AM (summer), New York 4:00 AM (winter) / 5:00 AM (summer), Dubai 1:00 PM, Singapore 5:00 PM, Sydney 8:00 PM (winter) / 9:00 PM (summer).',
        daylightSaving: 'Turkey abolished Daylight Saving Time in 2016, permanently staying on UTC+3. This means the time difference with European cities changes throughout the year - Istanbul is 2 hours ahead of Central Europe in winter but only 1 hour ahead in summer.',
        localTips: 'The call to prayer echoes five times daily across the city - a unique cultural experience. Friday afternoons see heavy traffic near mosques. Tea (çay) is offered everywhere and refusing is considered impolite. Haggling is expected at bazaars but not in malls or restaurants. The Istanbulkart is essential for public transport.',
        transportation: 'Istanbul has an extensive metro, tram, bus, and ferry network. The Istanbulkart (rechargeable transit card) works on all public transport. Ferries cross the Bosphorus frequently (15-20 min intervals). The Marmaray undersea rail tunnel connects Europe and Asia. New Istanbul Airport (IST) is 35km from the city center, while Sabiha Gökçen (SAW) serves the Asian side.',
        emergencyNumbers: 'Emergency: 112 (all services), Police: 155, Ambulance: 112, Fire: 110, Tourist Police: 153. Most emergency operators speak English.',
        publicHolidays: 'New Year\'s Day (Jan 1), National Sovereignty Day (Apr 23), Labour Day (May 1), Atatürk Memorial (May 19), Victory Day (Aug 30), Republic Day (Oct 29). Islamic holidays Eid al-Fitr and Eid al-Adha follow the lunar calendar and vary each year.'
      }
    }
  },
  { slug: 'athens', city: 'Athens', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 37.98, lng: 23.73, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '660K', metroPopulation: '3.8M', phoneCode: '+30 21', language: 'Greek',
      climate: 'Mediterranean with hot dry summers (28-35°C) and mild wet winters (7-13°C). Very sunny year-round.',
      attractions: ['Acropolis', 'Parthenon', 'Plaka', 'Ancient Agora', 'National Archaeological Museum', 'Temple of Olympian Zeus', 'Syntagma Square', 'Monastiraki', 'Mount Lycabettus', 'Panathenaic Stadium'],
      demographics: 'Cradle of Western civilization. Greece\'s capital with 3,400 years of history. Major tourism destination.',
      seoContent: {
        intro: 'Athens, the birthplace of democracy, operates on Eastern European Time (EET/UTC+2). The cradle of Western civilization, Athens blends ancient ruins with vibrant modern life.',
        timezoneFacts: 'Same timezone as Helsinki and Bucharest. One hour ahead of Central Europe. Ancient Greeks were early astronomers and timekeepers.',
        bestTimeToVisit: 'April to June and September to October for pleasant weather. Summer is very hot. Winter is mild and uncrowded.',
        businessHours: 'Shops 9 AM to 9 PM (closed Sunday). Siesta tradition means some close 2-5 PM. Restaurants open late.',
        timeDifference: 'Athens is UTC+2 (EET) / UTC+3 (EEST). When noon in Athens: London 10 AM, NYC 5 AM, Istanbul 12 PM.',
        daylightSaving: 'EEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Acropolis is best visited early morning. Greek coffee is strong. Opa! is for celebrations. Tipping 5-10%.',
        transportation: 'Metro connects airport to center. Athens Airport (ATH) is 27km east - metro 40 min.',
        emergencyNumbers: 'Emergency: 112. Police: 100. Ambulance: 166. Tourist Police: 171.',
        publicHolidays: 'New Year, Epiphany (Jan 6), Independence Day (Mar 25), Orthodox Easter, Labor Day, Assumption (Aug 15), Ochi Day (Oct 28), Christmas.'
      }
    }
  },
  { slug: 'lisbon', city: 'Lisbon', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 38.72, lng: -9.14, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '550K', metroPopulation: '2.9M', phoneCode: '+351 21', language: 'Portuguese',
      climate: 'Mediterranean with warm dry summers (20-28°C) and mild rainy winters (8-15°C). Sunniest European capital.',
      attractions: ['Belém Tower', 'Jerónimos Monastery', 'Alfama', 'Tram 28', 'Sintra', 'Time Out Market', 'São Jorge Castle', 'LX Factory', 'Bairro Alto', 'Praça do Comércio'],
      demographics: 'Portugal\'s capital on seven hills. Growing tech and startup scene. Famous for Fado music and pastéis de nata.',
      seoContent: {
        intro: 'Lisbon, Europe\'s sunniest capital, operates on Western European Time (WET/UTC+0), same as London. Built on seven hills overlooking the Tagus River, Lisbon charms with its colorful tiles, vintage trams, and melancholic Fado music.',
        timezoneFacts: 'Same timezone as London despite being further west than most of Spain. Portugal adopted WET for trade alignment with UK.',
        bestTimeToVisit: 'March to May and September to October for ideal weather. Summer is hot but festive. Winter is mild and green.',
        businessHours: 'Shops 10 AM to 7 PM. Many close for lunch. Dinner typically after 8 PM. Nightlife in Bairro Alto.',
        timeDifference: 'Lisbon is UTC+0 (WET) / UTC+1 (WEST). When noon in Lisbon: London 12 PM, NYC 7 AM, Madrid 1 PM.',
        daylightSaving: 'WEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Pastéis de nata are a must. Tram 28 is scenic but crowded - go early. Hills are steep - wear comfortable shoes.',
        transportation: 'Metro, trams, and funiculars. Lisboa Card includes transport + attractions. Humberto Delgado Airport (LIS) is 7km - metro 20 min.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'New Year, Carnival, Good Friday, Liberty Day (Apr 25), Labor Day, Portugal Day (Jun 10), Assumption, Republic Day (Oct 5), All Saints, Independence Day (Dec 1), Christmas.'
      }
    }
  },
  { slug: 'dublin', city: 'Dublin', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 53.35, lng: -6.26, tier: 1, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '550K', metroPopulation: '2M', phoneCode: '+353 1', language: 'English, Irish',
      climate: 'Oceanic with mild temperatures year-round (4-8°C winter, 15-20°C summer). Frequent rain but rarely heavy.',
      attractions: ['Trinity College', 'Temple Bar', 'Guinness Storehouse', 'Dublin Castle', 'St. Patrick\'s Cathedral', 'Grafton Street', 'Phoenix Park', 'Kilmainham Gaol', 'EPIC Museum', 'Ha\'penny Bridge'],
      demographics: 'Ireland\'s capital with rich literary and musical heritage. Major European tech hub (Google, Facebook, Apple HQs).',
      seoContent: {
        intro: 'Dublin, Ireland\'s vibrant capital, operates on Greenwich Mean Time (GMT/UTC+0) in winter and Irish Standard Time (IST/UTC+1) in summer. This literary city of Joyce and Yeats is now also Europe\'s tech hub.',
        timezoneFacts: 'Same timezone as London. Ireland\'s time is Greenwich Mean Time despite being west of Greenwich.',
        bestTimeToVisit: 'May to September for longest days and festivals. St. Patrick\'s Day (March 17) is legendary. Winter is mild but dark.',
        businessHours: 'Shops 9 AM to 6 PM (later Thursday). Pubs open 10:30 AM to 11:30 PM (later weekends).',
        timeDifference: 'Dublin is UTC+0 (GMT) / UTC+1 (IST). When noon in Dublin: NYC 7 AM, Paris 1 PM, Tokyo 9 PM.',
        daylightSaving: 'Irish Summer Time (IST) runs last Sunday of March to last Sunday of October, synchronized with UK and EU.',
        localTips: 'Guinness tastes best in Ireland. "Craic" means fun. Pubs are social centers. Temple Bar is touristy - locals go elsewhere.',
        transportation: 'Luas (tram), DART (coastal rail), and buses. Leap Card for all transport. Dublin Airport (DUB) is 10km - bus 30 min.',
        emergencyNumbers: 'Emergency: 112 or 999.',
        publicHolidays: 'New Year, St. Patrick\'s Day (Mar 17), Easter Monday, May Bank Holiday, June Bank Holiday, August Bank Holiday, October Bank Holiday, Christmas, St. Stephen\'s Day (Dec 26).'
      }
    }
  },
  { slug: 'warsaw', city: 'Warsaw', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 52.23, lng: 21.01, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Zloty', currencySymbol: 'zł', population: '1.8M', metroPopulation: '3.1M', phoneCode: '+48 22', language: 'Polish',
      climate: 'Humid continental with warm summers (18-25°C) and cold winters (-3 to 2°C). Four distinct seasons.',
      attractions: ['Old Town', 'Royal Castle', 'Palace of Culture and Science', 'Łazienki Park', 'Warsaw Uprising Museum', 'Wilanów Palace', 'POLIN Museum', 'Copernicus Science Centre', 'Praga District', 'Chopin Museum'],
      demographics: 'Poland\'s capital rebuilt after WWII destruction. Fast-growing economy. Rising tech hub with rich history.',
      seoContent: {
        intro: 'Warsaw, Poland\'s resilient capital, operates on Central European Time (CET/UTC+1). Rising from the ashes of WWII, Warsaw is a phoenix city combining reconstructed Old Town with modern skyscrapers.',
        timezoneFacts: 'Same timezone as Berlin and Paris. Poland joined EU in 2004, boosting economic connections.',
        bestTimeToVisit: 'May to September for pleasant weather. December for Christmas markets. Spring for Chopin concerts.',
        businessHours: 'Shops 10 AM to 8 PM. Sunday shopping restricted. Polish cuisine features pierogies and bigos.',
        timeDifference: 'Warsaw is UTC+1 (CET) / UTC+2 (CEST). When noon in Warsaw: London 11 AM, NYC 6 AM, Moscow 2 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Vodka is national drink. Learn "Dzień dobry" (hello). Tipping 10% expected. Old Town is UNESCO-listed reconstruction.',
        transportation: 'Metro (2 lines), trams, and buses. Chopin Airport (WAW) is 10km - train 25 min.',
        emergencyNumbers: 'Emergency: 112. Police: 997. Ambulance: 999. Fire: 998.',
        publicHolidays: 'New Year, Epiphany (Jan 6), Easter Monday, Labor Day, Constitution Day (May 3), Corpus Christi, Assumption (Aug 15), All Saints, Independence Day (Nov 11), Christmas.'
      }
    }
  },
  { slug: 'prague', city: 'Prague', timezone: 'Europe/Prague', country: 'Czech Republic', countryCode: 'CZ', lat: 50.08, lng: 14.44, tier: 2, continent: 'europe',
    info: {
      currency: 'Czech Koruna', currencySymbol: 'Kč', population: '1.3M', metroPopulation: '2.7M', phoneCode: '+420', language: 'Czech',
      climate: 'Oceanic with warm summers (17-25°C) and cold winters (-2 to 4°C). Beautiful in all seasons.',
      attractions: ['Charles Bridge', 'Prague Castle', 'Old Town Square', 'Astronomical Clock', 'St. Vitus Cathedral', 'Jewish Quarter', 'Petřín Hill', 'Dancing House', 'Wenceslas Square', 'Lennon Wall'],
      demographics: 'Bohemian capital with stunning Gothic and Baroque architecture. Major tourist destination. Beer culture capital.',
      seoContent: {
        intro: 'Prague, the City of a Hundred Spires, operates on Central European Time (CET/UTC+1). This fairy-tale capital offers stunning Gothic architecture, world-famous beer, and one of Europe\'s best-preserved historic centers.',
        timezoneFacts: 'Same timezone as Berlin and Vienna. Czech Republic uses Koruna despite EU membership.',
        bestTimeToVisit: 'April to May and September to October for pleasant weather. December for Christmas markets. Summer is crowded.',
        businessHours: 'Shops 9 AM to 6 PM (later in tourist areas). Czech beer is among world\'s best. Restaurants open until late.',
        timeDifference: 'Prague is UTC+1 (CET) / UTC+2 (CEST). When noon in Prague: London 11 AM, NYC 6 AM, Vienna 12 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Beer is cheaper than water - embrace it. Trdelník is a tourist invention. Learn "Dobrý den" (hello). Excellent public transport.',
        transportation: 'Metro (3 lines), trams, and buses. Václav Havel Airport (PRG) is 17km - bus 45 min or taxi.',
        emergencyNumbers: 'Emergency: 112. Police: 158. Ambulance: 155. Fire: 150.',
        publicHolidays: 'New Year, Easter Monday, Labor Day, Liberation Day (May 8), Cyril & Methodius Day (Jul 5), Jan Hus Day (Jul 6), Statehood Day (Sep 28), Independence Day (Oct 28), Freedom Day (Nov 17), Christmas.'
      }
    }
  },
  { slug: 'budapest', city: 'Budapest', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 47.50, lng: 19.04, tier: 2, continent: 'europe',
    info: {
      currency: 'Hungarian Forint', currencySymbol: 'Ft', population: '1.8M', metroPopulation: '3M', phoneCode: '+36 1', language: 'Hungarian',
      climate: 'Humid continental with hot summers (21-28°C) and cold winters (-2 to 4°C). Danube divides Buda from Pest.',
      attractions: ['Buda Castle', 'Hungarian Parliament', 'Chain Bridge', 'Széchenyi Thermal Bath', 'Fisherman\'s Bastion', 'Heroes\' Square', 'Ruin Bars', 'Gellért Hill', 'Central Market Hall', 'St. Stephen\'s Basilica'],
      demographics: 'Hungary\'s capital straddling the Danube. Famous for thermal baths, ruin bars, and stunning architecture.',
      seoContent: {
        intro: 'Budapest, the Pearl of the Danube, operates on Central European Time (CET/UTC+1). This stunning city is actually two - hilly Buda and flat Pest - united by iconic bridges across the Danube.',
        timezoneFacts: 'Same timezone as Prague and Vienna. Hungary uses Forint despite EU membership.',
        bestTimeToVisit: 'March to May and September to November for pleasant weather. Summer is hot but festive. Winter for thermal baths.',
        businessHours: 'Shops 10 AM to 6 PM (later in malls). Ruin bars open from afternoon until late. Thermal baths open early.',
        timeDifference: 'Budapest is UTC+1 (CET) / UTC+2 (CEST). When noon in Budapest: London 11 AM, NYC 6 AM, Vienna 12 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October, following EU DST rules.',
        localTips: 'Thermal baths are a must. Ruin bars are unique nightlife. Forint makes things seem expensive (1 EUR ≈ 380 HUF). Hungarian is difficult.',
        transportation: 'Metro (4 lines including historic M1), trams, and buses. Budapest Airport (BUD) is 16km - bus 100E to center.',
        emergencyNumbers: 'Emergency: 112. Police: 107. Ambulance: 104. Fire: 105.',
        publicHolidays: 'New Year, Revolution Day (Mar 15), Easter Monday, Labor Day, Whit Monday, St. Stephen\'s Day (Aug 20), Revolution Day (Oct 23), All Saints, Christmas.'
      }
    }
  },

  // Asia
  { slug: 'beijing', city: 'Beijing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 39.90, lng: 116.41, tier: 1, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '21.5M', metroPopulation: '24.5M', phoneCode: '+86 10', language: 'Mandarin',
      climate: 'Humid continental with hot summers (26-32°C) and cold dry winters (-6 to 2°C). Occasional dust storms in spring.',
      attractions: ['Forbidden City', 'Great Wall', 'Temple of Heaven', 'Summer Palace', 'Tiananmen Square', 'Hutongs', 'National Museum', 'Olympic Park', 'Beihai Park', 'Lama Temple'],
      demographics: 'China\'s capital with 3,000+ years of history. Political and cultural center. Home to many World Heritage sites.',
      seoContent: {
        intro: 'Beijing, China\'s ancient capital, operates on China Standard Time (CST/UTC+8). This city of 21 million blends imperial grandeur with modern power, home to the Forbidden City and the Great Wall nearby.',
        timezoneFacts: 'All of China uses single timezone despite spanning 5 geographical zones. Beijing sets the standard for 1.4 billion people.',
        bestTimeToVisit: 'September to October for clear skies and pleasant temperatures. Spring (April-May) also good. Summer is hot; winter is cold.',
        businessHours: 'Standard hours 9 AM to 6 PM. Major sites open 8:30 AM. Many restaurants open until 10 PM.',
        timeDifference: 'Beijing is UTC+8 year-round. When noon in Beijing: London 4 AM, NYC 11 PM (-1), Tokyo 1 PM.',
        daylightSaving: 'China does not observe Daylight Saving Time. The entire country uses UTC+8 year-round, making international time calculations consistent.',
        localTips: 'VPN needed for Google, Facebook, etc. Great Wall has multiple sections - Mutianyu is best. Smog can be issue. WeChat Pay essential.',
        transportation: 'Extensive metro system (20+ lines). Yikatong card for transit. Two airports: Capital (PEK) and Daxing (PKX).',
        emergencyNumbers: 'Police: 110. Ambulance: 120. Fire: 119.',
        publicHolidays: 'New Year (Jan 1), Chinese New Year (7 days), Qingming (Apr), Labor Day (May 1-5), Dragon Boat Festival, Mid-Autumn Festival, National Day (Oct 1-7).'
      }
    }
  },
  { slug: 'seoul', city: 'Seoul', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.57, lng: 126.98, tier: 1, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '9.8M', metroPopulation: '25.6M', phoneCode: '+82 2', language: 'Korean',
      climate: 'Humid continental with hot humid summers (25-32°C) and cold winters (-5 to 3°C). Monsoon season July-August.',
      attractions: ['Gyeongbokgung Palace', 'Bukchon Hanok Village', 'N Seoul Tower', 'Myeongdong', 'Insadong', 'Dongdaemun', 'Hongdae', 'Gangnam', 'Lotte World', 'DMZ'],
      demographics: 'South Korea\'s high-tech capital. K-pop and Korean Wave origin. Ultra-modern with deep traditions.',
      seoContent: {
        intro: 'Seoul, South Korea\'s dynamic capital, operates on Korea Standard Time (KST/UTC+9). This megacity of 25 million is the heart of the Korean Wave, blending ancient palaces with cutting-edge technology and K-pop culture.',
        timezoneFacts: 'Same timezone as Tokyo. Korea doesn\'t observe DST. Seoul is just 56km from North Korean border.',
        bestTimeToVisit: 'March to May for cherry blossoms, September to November for fall foliage. Summer is hot and humid. Winter is cold but has skiing.',
        businessHours: 'Shops 10 AM to 10 PM. Many restaurants 24/7. Cafés are social hubs. Nightlife runs very late.',
        timeDifference: 'Seoul is UTC+9 year-round. When noon in Seoul: London 3 AM, NYC 10 PM (-1), Tokyo 12 PM.',
        daylightSaving: 'South Korea does not observe Daylight Saving Time. Korea has considered DST but hasn\'t implemented it.',
        localTips: 'Download Naver Maps (Google Maps limited). T-money card for transit. Soju is cheap and strong. Bowing is respectful greeting.',
        transportation: 'World-class metro (9+ lines). T-money card for all transit. Incheon Airport (ICN) is 60km - AREX train 43 min.',
        emergencyNumbers: 'Emergency: 112 or 119. Tourist hotline: 1330.',
        publicHolidays: 'New Year (Jan 1), Seollal (Lunar New Year, 3 days), Independence Movement Day (Mar 1), Children\'s Day (May 5), Buddha\'s Birthday, Memorial Day (Jun 6), Liberation Day (Aug 15), Chuseok (3 days), Hangul Day (Oct 9), Christmas.'
      }
    }
  },
  { slug: 'mumbai', city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 19.08, lng: 72.88, tier: 1, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '20.7M', metroPopulation: '24.4M', phoneCode: '+91 22', language: 'Hindi, Marathi, English',
      climate: 'Tropical wet and dry with hot temperatures year-round (25-35°C). Monsoon season June-September is intense.',
      attractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Chhatrapati Shivaji Terminus', 'Dharavi', 'Haji Ali Dargah', 'Colaba', 'Juhu Beach', 'Sanjay Gandhi National Park', 'Bollywood Studios'],
      demographics: 'India\'s financial capital and Bollywood home. Maximum City of dreams and contrasts. Most expensive real estate in India.',
      seoContent: {
        intro: 'Mumbai, India\'s Maximum City, operates on India Standard Time (IST/UTC+5:30). India\'s financial capital and home of Bollywood, Mumbai is a city of dreams, contrasts, and relentless energy.',
        timezoneFacts: 'India uses a single timezone with unusual 30-minute offset. IST is 5.5 hours ahead of London, 10.5 hours ahead of NYC.',
        bestTimeToVisit: 'November to February for cooler, dry weather. Avoid monsoon (June-September) when flooding occurs. Diwali (Oct/Nov) is spectacular.',
        businessHours: 'Offices 9:30 AM to 6:30 PM. Shops 10 AM to 9 PM. Markets like Crawford stay open late.',
        timeDifference: 'Mumbai is UTC+5:30 year-round. When noon in Mumbai: London 6:30 AM, NYC 1:30 AM, Singapore 2:30 PM.',
        daylightSaving: 'India does not observe Daylight Saving Time. The unique 30-minute offset applies year-round across all of India.',
        localTips: 'Local trains are lifeline - incredibly crowded. Street food is amazing but be cautious. Bargain everywhere. Monsoon can halt the city.',
        transportation: 'Local trains (Western/Central lines) essential. Metro expanding. Mumbai Airport (BOM) is 26km - traffic can be brutal.',
        emergencyNumbers: 'Emergency: 112. Police: 100. Ambulance: 102. Fire: 101.',
        publicHolidays: 'Republic Day (Jan 26), Holi (Mar), Independence Day (Aug 15), Ganesh Chaturthi (Aug/Sep), Diwali (Oct/Nov), Christmas. Many regional variations.'
      }
    }
  },
  { slug: 'delhi', city: 'New Delhi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 28.61, lng: 77.21, tier: 1, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '16.8M', metroPopulation: '32.9M', phoneCode: '+91 11', language: 'Hindi, English',
      climate: 'Humid subtropical with hot summers (35-45°C) and cool winters (5-20°C). Monsoon July-September. Air quality issues in winter.',
      attractions: ['Red Fort', 'India Gate', 'Qutub Minar', 'Humayun\'s Tomb', 'Lotus Temple', 'Akshardham', 'Chandni Chowk', 'Jama Masjid', 'Connaught Place', 'Raj Ghat'],
      demographics: 'India\'s capital territory. Blend of Mughal heritage and modern government. Part of massive Delhi NCR metropolitan area.',
      seoContent: {
        intro: 'New Delhi, India\'s capital, operates on India Standard Time (IST/UTC+5:30). This city of power and history blends Mughal grandeur with British colonial architecture and modern Indian democracy.',
        timezoneFacts: 'Same timezone as Mumbai. Delhi is the heart of government decisions affecting 1.4 billion people.',
        bestTimeToVisit: 'October to March for pleasant weather. Avoid summer (Apr-Jun) when temperatures exceed 40°C. Republic Day (Jan 26) has spectacular parade.',
        businessHours: 'Government offices 9:30 AM to 5:30 PM (Mon-Fri). Shops 10 AM to 8 PM. Chandni Chowk markets close Sunday.',
        timeDifference: 'Delhi is UTC+5:30 year-round. When noon in Delhi: London 6:30 AM, NYC 1:30 AM, Tokyo 3:30 PM.',
        daylightSaving: 'India does not observe Daylight Saving Time. IST (UTC+5:30) applies year-round across the entire country.',
        localTips: 'Delhi Metro is excellent and safe. Autos/rickshaws use meters (insist). Spicy street food at Paranthe Wali Gali. Smog in Nov-Jan.',
        transportation: 'Delhi Metro is modern and extensive. Indira Gandhi Airport (DEL) is 15km - Metro connects. Auto-rickshaws for last mile.',
        emergencyNumbers: 'Emergency: 112. Police: 100. Women\'s helpline: 1091.',
        publicHolidays: 'Republic Day (Jan 26), Holi, Independence Day (Aug 15), Gandhi Jayanti (Oct 2), Diwali, Christmas. Delhi has many regional holidays.'
      }
    }
  },
  { slug: 'bangalore', city: 'Bangalore', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 12.97, lng: 77.59, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '12.3M', metroPopulation: '14.9M', phoneCode: '+91 80', language: 'Kannada, English, Hindi',
      climate: 'Tropical savanna with pleasant year-round temperatures (20-33°C) thanks to elevation. Cooler than other Indian cities.',
      attractions: ['Lalbagh Botanical Garden', 'Bangalore Palace', 'Cubbon Park', 'ISKCON Temple', 'Vidhana Soudha', 'UB City', 'Commercial Street', 'Tipu Sultan\'s Palace', 'Nandi Hills', 'Wonderla'],
      demographics: 'India\'s Silicon Valley and IT capital. Young, educated population. Home to major tech companies and startups.',
      seoContent: {
        intro: 'Bangalore (Bengaluru), India\'s Silicon Valley, operates on India Standard Time (IST/UTC+5:30). This garden city is India\'s tech capital, home to countless IT companies, startups, and a young, cosmopolitan population.',
        timezoneFacts: 'Same timezone as Delhi and Mumbai. Tech workers here often work US hours, making timezone math a daily exercise.',
        bestTimeToVisit: 'Year-round destination thanks to pleasant climate. October to February is ideal. Monsoon (Jun-Sep) is mild compared to rest of India.',
        businessHours: 'Tech offices often 10 AM to 7 PM but many work late for US clients. Malls open until 10 PM. Pubs have 11:30 PM curfew.',
        timeDifference: 'Bangalore is UTC+5:30 year-round. When noon in Bangalore: SF 10:30 PM (-1), London 6:30 AM, Singapore 2:30 PM.',
        daylightSaving: 'India does not observe Daylight Saving Time. This makes scheduling with US/EU clients predictable, though the 12.5-hour difference with California remains.',
        localTips: 'Traffic is notorious - plan accordingly. Great coffee culture. Craft beer scene growing. Pleasant weather but can change quickly.',
        transportation: 'Metro expanding but limited. Traffic is major challenge. Kempegowda Airport (BLR) is 35km - airport bus or taxi.',
        emergencyNumbers: 'Emergency: 112. Police: 100. Traffic: 103.',
        publicHolidays: 'National holidays plus Karnataka-specific: Kannada Rajyotsava (Nov 1). Tech companies may follow US holidays.'
      }
    }
  },
  { slug: 'bangkok', city: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 13.76, lng: 100.50, tier: 1, continent: 'asia',
    info: {
      currency: 'Thai Baht', currencySymbol: '฿', population: '8.3M', metroPopulation: '14.6M', phoneCode: '+66 2', language: 'Thai',
      climate: 'Tropical wet and dry with hot humid weather year-round (28-35°C). Rainy season May-October but rarely all day.',
      attractions: ['Grand Palace', 'Wat Arun', 'Wat Pho', 'Chatuchak Weekend Market', 'Khao San Road', 'Chao Phraya River', 'Jim Thompson House', 'Sukhumvit', 'Floating Markets', 'Chinatown'],
      demographics: 'Thailand\'s capital and economic center. Major tourist destination. Blend of traditional temples and modern malls.',
      seoContent: {
        intro: 'Bangkok, the City of Angels, operates on Indochina Time (ICT/UTC+7). Thailand\'s vibrant capital mixes glittering temples, bustling markets, world-renowned street food, and legendary nightlife.',
        timezoneFacts: 'Same timezone as Vietnam and Indonesia. Bangkok is 7 hours ahead of London. Thailand doesn\'t observe DST.',
        bestTimeToVisit: 'November to February for cooler, dry weather (25-32°C). March-May is very hot. Rainy season (May-Oct) has afternoon showers.',
        businessHours: 'Offices 8:30 AM to 5:30 PM. Malls open 10 AM to 10 PM. Markets vary - Chatuchak is weekends only.',
        timeDifference: 'Bangkok is UTC+7 year-round. When noon in Bangkok: London 5 AM, NYC midnight, Sydney 4 PM.',
        daylightSaving: 'Thailand does not observe Daylight Saving Time. UTC+7 applies year-round.',
        localTips: 'Wai (hands together) for greeting. Remove shoes at temples. Dress modestly at religious sites. Tuk-tuks negotiate price first.',
        transportation: 'BTS Skytrain and MRT are excellent for avoiding traffic. Chao Phraya boats are scenic. Suvarnabhumi (BKK) is 30km - Airport Rail Link to center.',
        emergencyNumbers: 'Emergency: 191. Tourist Police: 1155.',
        publicHolidays: 'New Year, Makha Bucha (Feb), Songkran (Apr 13-15), Coronation Day (May 4), Visakha Bucha, Queen\'s Birthday (Jun 3), King\'s Birthday (Jul 28), Mother\'s Day (Aug 12), Chulalongkorn Day (Oct 23), Father\'s Day (Dec 5).'
      }
    }
  },
  { slug: 'jakarta', city: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.21, lng: 106.85, tier: 1, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '10.6M', metroPopulation: '34.5M', phoneCode: '+62 21', language: 'Indonesian',
      climate: 'Tropical monsoon with hot humid weather year-round (27-33°C). Wet season November-March with heavy flooding possible.',
      attractions: ['National Monument (Monas)', 'Old Town (Kota Tua)', 'Istiqlal Mosque', 'National Museum', 'Thousand Islands', 'Taman Mini Indonesia', 'Ancol Dreamland', 'Grand Indonesia', 'Ragunan Zoo', 'TMII'],
      demographics: 'Indonesia\'s capital and largest city. Extremely diverse with people from across archipelago. New capital being built in Borneo.',
      seoContent: {
        intro: 'Jakarta, Indonesia\'s sprawling capital, operates on Western Indonesia Time (WIB/UTC+7). The capital of the world\'s largest archipelago nation, Jakarta is a megacity of contrasts where modern skyscrapers tower over colonial-era buildings.',
        timezoneFacts: 'Indonesia spans 3 time zones. Jakarta uses WIB (UTC+7), same as Bangkok. Government is relocating capital to Nusantara in Borneo.',
        bestTimeToVisit: 'May to September (dry season) for best weather. Wet season (Nov-Mar) brings flooding. Eid is a major holiday.',
        businessHours: 'Offices 8 AM to 5 PM. Malls open 10 AM to 10 PM. Traffic is legendary - allow extra time always.',
        timeDifference: 'Jakarta is UTC+7 year-round. When noon in Jakarta: London 5 AM, NYC midnight, Sydney 4 PM.',
        daylightSaving: 'Indonesia does not observe Daylight Saving Time. The country spans 3 time zones but none use DST.',
        localTips: 'Traffic is among world\'s worst - use TransJakarta or MRT. Bargaining is expected. Bahasa Indonesia is easy to learn basics. Spicy food.',
        transportation: 'MRT and LRT expanding. TransJakarta bus rapid transit. Soekarno-Hatta (CGK) is 20km - toll road or train.',
        emergencyNumbers: 'Emergency: 112. Police: 110. Ambulance: 118.',
        publicHolidays: 'New Year, Chinese New Year, Hindu holidays, Isra Mi\'raj, Waisak, Eid al-Fitr (Lebaran), Independence Day (Aug 17), Eid al-Adha, Islamic New Year, Prophet\'s Birthday, Christmas.'
      }
    }
  },
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY', lat: 3.14, lng: 101.69, tier: 1, continent: 'asia',
    info: {
      currency: 'Malaysian Ringgit', currencySymbol: 'RM', population: '1.8M', metroPopulation: '7.8M', phoneCode: '+60 3', language: 'Malay, English, Chinese, Tamil',
      climate: 'Tropical rainforest with hot humid weather year-round (27-33°C). Rain possible any time but usually afternoon thunderstorms.',
      attractions: ['Petronas Twin Towers', 'Batu Caves', 'KL Tower', 'Merdeka Square', 'Central Market', 'Bukit Bintang', 'Chinatown', 'Islamic Arts Museum', 'Thean Hou Temple', 'KLCC Park'],
      demographics: 'Malaysia\'s multicultural capital. Malay, Chinese, and Indian communities coexist. Modern yet affordable.',
      seoContent: {
        intro: 'Kuala Lumpur, Malaysia\'s vibrant capital, operates on Malaysia Time (MYT/UTC+8). This multicultural metropolis beneath the iconic Petronas Towers offers a blend of Malay, Chinese, and Indian cultures.',
        timezoneFacts: 'Same timezone as Singapore and Hong Kong. Malaysia adopted UTC+8 in 1982 to align with Singapore.',
        bestTimeToVisit: 'Year-round destination. May-July and December-February are drier. Chinese New Year and Hari Raya are festive.',
        businessHours: 'Offices 9 AM to 5 PM. Malls open 10 AM to 10 PM. Street food available day and night.',
        timeDifference: 'KL is UTC+8 year-round. When noon in KL: London 4 AM, NYC 11 PM (-1), Sydney 3 PM.',
        daylightSaving: 'Malaysia does not observe Daylight Saving Time. UTC+8 applies year-round.',
        localTips: 'Food is amazing and cheap. Mix of halal and non-halal eateries. Grab (ride-hailing) is universal. Respect Muslim customs.',
        transportation: 'LRT, MRT, and Monorail cover city well. Touch \'n Go card for transit. KLIA (main) is 55km - KLIA Ekspres train 28 min.',
        emergencyNumbers: 'Emergency: 999. Police: 999. Ambulance: 999. Tourist Police: 03-2149 6593.',
        publicHolidays: 'New Year, Chinese New Year (2 days), Federal Territory Day (Feb 1), Labor Day, Wesak, King\'s Birthday (Jun), Hari Raya Aidilfitri (2 days), Hari Raya Haji, Merdeka Day (Aug 31), Malaysia Day (Sep 16), Deepavali, Christmas.'
      }
    }
  },
  { slug: 'manila', city: 'Manila', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 14.60, lng: 120.98, tier: 2, continent: 'asia',
    info: {
      currency: 'Philippine Peso', currencySymbol: '₱', population: '1.8M', metroPopulation: '14.4M', phoneCode: '+63 2', language: 'Filipino, English',
      climate: 'Tropical monsoon with hot humid weather year-round (27-34°C). Typhoon season June-November.',
      attractions: ['Intramuros', 'Rizal Park', 'Manila Ocean Park', 'San Agustin Church', 'National Museum', 'Manila Bay', 'Fort Santiago', 'Binondo Chinatown', 'SM Mall of Asia', 'Poblacion Makati'],
      demographics: 'Philippines\' capital and economic center. Spanish colonial heritage. Very Westernized with strong American influence.',
      seoContent: {
        intro: 'Manila, the Pearl of the Orient, operates on Philippine Standard Time (PST/UTC+8). The capital of the Philippines, Manila blends Spanish colonial history with American influence and vibrant Filipino culture.',
        timezoneFacts: 'Same timezone as Hong Kong and Singapore. BPO industry means many workers keep US hours.',
        bestTimeToVisit: 'December to May (dry season). Avoid typhoon season (June-November). Christmas season is very festive.',
        businessHours: 'Offices 8 AM to 5 PM. Malls open 10 AM to 10 PM. Heavy traffic means flexible hours common.',
        timeDifference: 'Manila is UTC+8 year-round. When noon in Manila: London 4 AM, NYC 11 PM (-1), Sydney 3 PM.',
        daylightSaving: 'Philippines does not observe Daylight Saving Time. UTC+8 applies year-round.',
        localTips: 'Traffic is brutal - allow lots of time. English widely spoken. Malls are social centers. Filipinos are warm and hospitable.',
        transportation: 'LRT and MRT limited. Traffic is severe. Ninoy Aquino Airport (MNL) has 4 terminals - confirm which one.',
        emergencyNumbers: 'Emergency: 911. Police: 117.',
        publicHolidays: 'New Year, Chinese New Year, Araw ng Kagitingan (Apr 9), Maundy Thursday, Good Friday, Labor Day, Independence Day (Jun 12), Eid al-Fitr, Eid al-Adha, National Heroes Day (Aug), All Saints, Bonifacio Day (Nov 30), Christmas (Dec 24-25, 30-31).'
      }
    }
  },
  { slug: 'taipei', city: 'Taipei', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW', lat: 25.03, lng: 121.57, tier: 2, continent: 'asia',
    info: {
      currency: 'New Taiwan Dollar', currencySymbol: 'NT$', population: '2.6M', metroPopulation: '7M', phoneCode: '+886 2', language: 'Mandarin',
      climate: 'Humid subtropical with hot summers (28-35°C) and mild winters (12-20°C). Rainy May-June (plum rain season).',
      attractions: ['Taipei 101', 'National Palace Museum', 'Shilin Night Market', 'Longshan Temple', 'Elephant Mountain', 'Chiang Kai-shek Memorial', 'Beitou Hot Springs', 'Jiufen', 'Yangmingshan', 'Ximending'],
      demographics: 'Taiwan\'s capital with modern infrastructure and traditional culture. High-tech hub with excellent quality of life.',
      seoContent: {
        intro: 'Taipei, Taiwan\'s high-tech capital, operates on Taiwan Standard Time (TST/UTC+8). This modern metropolis offers world-class night markets, cutting-edge technology, and traditional temples against a mountain backdrop.',
        timezoneFacts: 'Same timezone as China, Hong Kong, and Singapore. Taiwan operates independently with own time standard.',
        bestTimeToVisit: 'October to December for pleasant weather. Cherry blossoms in February. Avoid plum rain season (May-June).',
        businessHours: 'Offices 9 AM to 6 PM. Night markets open 5 PM to midnight. 7-Elevens everywhere, 24/7.',
        timeDifference: 'Taipei is UTC+8 year-round. When noon in Taipei: London 4 AM, NYC 11 PM (-1), Tokyo 1 PM.',
        daylightSaving: 'Taiwan does not observe Daylight Saving Time. UTC+8 applies year-round.',
        localTips: 'MRT is world-class. Night markets are a must. EasyCard for transit + purchases. Extremely safe. Typhoon season Jul-Sep.',
        transportation: 'MRT is excellent and clean. HSR high-speed rail to other cities. Taoyuan Airport (TPE) is 40km - MRT connects.',
        emergencyNumbers: 'Emergency: 110 (police), 119 (fire/ambulance). English hotline: 0800-024-111.',
        publicHolidays: 'New Year (Jan 1-2), Chinese New Year (several days), 228 Peace Memorial Day (Feb 28), Tomb Sweeping Day (Apr 4-5), Labor Day, Dragon Boat Festival, Mid-Autumn Festival, Double Ten National Day (Oct 10).'
      }
    }
  },
  { slug: 'tel-aviv', city: 'Tel Aviv', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL', lat: 32.09, lng: 34.78, tier: 2, continent: 'asia',
    info: {
      currency: 'Israeli New Shekel', currencySymbol: '₪', population: '460K', metroPopulation: '4.2M', phoneCode: '+972 3', language: 'Hebrew, English, Arabic',
      climate: 'Mediterranean with hot dry summers (26-32°C) and mild rainy winters (10-17°C). Beach weather 8 months a year.',
      attractions: ['Old Jaffa', 'Carmel Market', 'Rothschild Boulevard', 'Tel Aviv Beach', 'Neve Tzedek', 'White City', 'Tel Aviv Museum of Art', 'Sarona Market', 'Dizengoff Street', 'HaTachana'],
      demographics: 'Israel\'s cultural and economic capital. Startup Nation hub. Young, liberal, and secular compared to Jerusalem.',
      seoContent: {
        intro: 'Tel Aviv, the White City, operates on Israel Standard Time (IST/UTC+2). Israel\'s cultural and economic heart on the Mediterranean, Tel Aviv is a high-tech hub with beautiful beaches, Bauhaus architecture, and vibrant nightlife.',
        timezoneFacts: 'Israel uses its own DST schedule, different from Europe. 2 hours ahead of London in winter.',
        bestTimeToVisit: 'April to June and September to November for ideal beach weather. Summer is hot. Winter is mild with occasional rain.',
        businessHours: 'Sunday is first workday. Shabbat (Friday sunset to Saturday sunset) closes most businesses. Many restaurants open Shabbat.',
        timeDifference: 'Tel Aviv is UTC+2 (IST) / UTC+3 (IDT). When noon in Tel Aviv: London 10 AM, NYC 5 AM, Dubai 2 PM.',
        daylightSaving: 'Israel observes DST but on its own schedule, different from Europe. IDT typically runs from late March to late October, but dates vary each year based on Jewish holidays.',
        localTips: 'Shabbat affects everything - plan ahead. Beach culture is strong. Startup ecosystem is world-class. Nightlife starts very late.',
        transportation: 'Bus network, light rail under construction. Ben Gurion Airport (TLV) is 20km - train 20 min. Sherut shared taxis.',
        emergencyNumbers: 'Emergency: 100 (police), 101 (ambulance), 102 (fire).',
        publicHolidays: 'Rosh Hashanah, Yom Kippur, Sukkot, Simchat Torah, Passover, Independence Day, Shavuot. Follows Jewish calendar.'
      }
    }
  },

  // Oceania
  { slug: 'melbourne', city: 'Melbourne', timezone: 'Australia/Melbourne', country: 'Australia', countryCode: 'AU', lat: -37.81, lng: 144.96, tier: 1, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '5.1M', metroPopulation: '5.1M', phoneCode: '+61 3', language: 'English',
      climate: 'Oceanic with warm summers (20-26°C) and mild winters (7-14°C). Famous for four seasons in one day.',
      attractions: ['Federation Square', 'Melbourne Cricket Ground', 'Royal Botanic Gardens', 'Queen Victoria Market', 'Great Ocean Road', 'St Kilda', 'Laneways', 'NGV', 'Melbourne Zoo', 'Brighton Beach Boxes'],
      demographics: 'Australia\'s cultural capital. Very multicultural. Coffee and food scene is exceptional. Sports-obsessed.',
      seoContent: {
        intro: 'Melbourne, Australia\'s cultural capital, operates on Australian Eastern Standard Time (AEST/UTC+10) and observes DST (AEDT/UTC+11) from October to April. Known for its laneways, coffee culture, and sports obsession.',
        timezoneFacts: 'Same timezone as Sydney. DST is October-April (opposite to Northern Hemisphere). Victoria observes DST.',
        bestTimeToVisit: 'Year-round destination. March for F1 Grand Prix. Summer for beach. Autumn (Mar-May) for weather. Melbourne Cup in November.',
        businessHours: 'Shops 9 AM to 5:30 PM (9 PM Thursday/Friday). Cafés open early (7 AM). Many restaurants BYO.',
        timeDifference: 'Melbourne is UTC+10 (AEST) / UTC+11 (AEDT). When noon in Melbourne: London 1 AM (winter) / 2 AM (summer), NYC 8 PM / 9 PM (-1).',
        daylightSaving: 'DST runs first Sunday of October to first Sunday of April (opposite to Northern Hemisphere). Victoria observes DST.',
        localTips: 'Coffee culture is serious - no Starbucks. Laneways have best street art. Weather changes constantly. AFL football is religion.',
        transportation: 'Trams (largest network in world), trains, buses. Myki card for all transport. Melbourne Airport (MEL) is 23km - SkyBus 30 min.',
        emergencyNumbers: 'Emergency: 000.',
        publicHolidays: 'New Year, Australia Day (Jan 26), Labour Day (Mar), Good Friday, Easter Monday, Anzac Day (Apr 25), Queen\'s Birthday (Jun), Melbourne Cup Day (Nov), Christmas, Boxing Day.'
      }
    }
  },
  { slug: 'auckland', city: 'Auckland', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ', lat: -36.85, lng: 174.76, tier: 2, continent: 'oceania',
    info: {
      currency: 'New Zealand Dollar', currencySymbol: 'NZ$', population: '1.6M', metroPopulation: '1.7M', phoneCode: '+64 9', language: 'English, Māori',
      climate: 'Oceanic with warm humid summers (20-25°C) and mild winters (10-15°C). Rain possible any time.',
      attractions: ['Sky Tower', 'Waiheke Island', 'Auckland War Memorial Museum', 'Viaduct Harbour', 'Mount Eden', 'Piha Beach', 'Rangitoto Island', 'Devonport', 'Auckland Art Gallery', 'Kelly Tarlton\'s'],
      demographics: 'New Zealand\'s largest city (1/3 of population). Most diverse NZ city. Polynesian influences. City of Sails.',
      seoContent: {
        intro: 'Auckland, the City of Sails, operates on New Zealand Standard Time (NZST/UTC+12) and NZDT (UTC+13) during daylight saving. Built on volcanic fields between two harbours, Auckland is New Zealand\'s largest and most diverse city.',
        timezoneFacts: 'New Zealand is among first places to see each new day. 12-13 hours ahead of London. Chatham Islands are 45 min ahead.',
        bestTimeToVisit: 'December to March (summer) for beaches. Wine harvest in autumn. Winter is mild. Avoid peak NZ school holidays.',
        businessHours: 'Shops 9 AM to 5:30 PM (9 PM Thursday). Cafés open early. Pubs close around midnight.',
        timeDifference: 'Auckland is UTC+12 (NZST) / UTC+13 (NZDT). When noon in Auckland: London 11 PM / midnight (-1), NYC 6 PM / 7 PM (-1).',
        daylightSaving: 'NZDT runs last Sunday of September to first Sunday of April (opposite to Northern Hemisphere). NZ is among first places to see each day.',
        localTips: 'Māori culture is integral - learn "Kia ora" (hello). Outdoor activities everywhere. Coffee is excellent. Very casual culture.',
        transportation: 'Buses and ferries. No rail to airport yet. Auckland Airport (AKL) is 20km - SkyBus 45-60 min.',
        emergencyNumbers: 'Emergency: 111.',
        publicHolidays: 'New Year (Jan 1-2), Waitangi Day (Feb 6), Good Friday, Easter Monday, ANZAC Day (Apr 25), Queen\'s Birthday (Jun), Labour Day (Oct), Christmas, Boxing Day. Auckland Anniversary Day (Jan).'
      }
    }
  },

  // Africa & Middle East
  { slug: 'cairo', city: 'Cairo', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 30.04, lng: 31.24, tier: 1, continent: 'africa',
    info: {
      currency: 'Egyptian Pound', currencySymbol: 'E£', population: '10.1M', metroPopulation: '21.3M', phoneCode: '+20 2', language: 'Arabic',
      climate: 'Hot desert with scorching summers (30-40°C) and mild winters (10-20°C). Very dry with almost no rain.',
      attractions: ['Pyramids of Giza', 'Sphinx', 'Egyptian Museum', 'Khan el-Khalili', 'Al-Azhar Mosque', 'Coptic Cairo', 'Citadel of Saladin', 'Nile River', 'Islamic Cairo', 'Grand Egyptian Museum'],
      demographics: 'Largest city in Africa and Arab world. Ancient meets chaotic modern. Traffic is legendary.',
      seoContent: {
        intro: 'Cairo, the City of a Thousand Minarets, operates on Eastern European Time (EET/UTC+2). The largest city in Africa and the Arab world, Cairo is the gateway to ancient Egypt and the iconic Pyramids of Giza.',
        timezoneFacts: 'Same timezone as Athens. Egypt occasionally observes DST. The Pyramids are actually in Giza, a Cairo suburb.',
        bestTimeToVisit: 'October to April for pleasant weather (20-25°C). Summer is extremely hot (35-40°C). Ramadan affects dining.',
        businessHours: 'Shops 10 AM to 10 PM. Friday is the weekend. Khan el-Khalili bazaar open until late.',
        timeDifference: 'Cairo is UTC+2 year-round (may vary). When noon in Cairo: London 10 AM, NYC 5 AM, Dubai 2 PM.',
        daylightSaving: 'Egypt currently does not observe Daylight Saving Time (as of 2014). The time stays on UTC+2 year-round, though this has changed multiple times historically.',
        localTips: 'Bargaining is essential at bazaars. Tipping (baksheesh) expected everywhere. Traffic is chaotic. Friday prayer time busy at mosques.',
        transportation: 'Metro has 3 lines (women-only cars available). Traffic is extreme. Cairo Airport (CAI) is 20km - taxi or Uber.',
        emergencyNumbers: 'Police: 122. Ambulance: 123. Tourist Police: 126.',
        publicHolidays: 'New Year, Revolution Day (Jan 25), Sinai Liberation Day (Apr 25), Labor Day, Revolution Day (Jul 23), Armed Forces Day (Oct 6). Islamic holidays vary.'
      }
    }
  },
  { slug: 'johannesburg', city: 'Johannesburg', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -26.20, lng: 28.05, tier: 1, continent: 'africa',
    info: {
      currency: 'South African Rand', currencySymbol: 'R', population: '5.6M', metroPopulation: '8M', phoneCode: '+27 11', language: 'English, Zulu, Afrikaans',
      climate: 'Subtropical highland with warm summers (15-27°C) and mild dry winters (4-17°C). Afternoon thunderstorms in summer.',
      attractions: ['Apartheid Museum', 'Constitution Hill', 'Gold Reef City', 'Soweto', 'Maboneng Precinct', 'Cradle of Humankind', 'Lion Park', 'Johannesburg Art Gallery', 'Neighbourgoods Market', 'Mandela House'],
      demographics: 'South Africa\'s largest city and economic engine. Post-apartheid transformation. Major African business hub.',
      seoContent: {
        intro: 'Johannesburg, the City of Gold, operates on South Africa Standard Time (SAST/UTC+2). Built on gold mining, Jo\'burg is Africa\'s economic powerhouse and a city of transformation.',
        timezoneFacts: 'South Africa uses SAST (UTC+2) without DST. Same timezone as Cairo and much of Eastern Europe.',
        bestTimeToVisit: 'April to May and August to October for pleasant weather. Summer (Nov-Feb) has afternoon storms. Winter is dry and cool.',
        businessHours: 'Offices 8 AM to 5 PM. Malls open 9 AM to 6 PM (later weekends). Many 24-hour services.',
        timeDifference: 'Jo\'burg is UTC+2 year-round. When noon in Jo\'burg: London 10 AM, NYC 5 AM, Dubai 2 PM.',
        daylightSaving: 'South Africa does not observe Daylight Saving Time. SAST (UTC+2) applies year-round.',
        localTips: 'Safety awareness important - don\'t walk alone at night. Car is essential. Uber widely used. Braai (BBQ) culture is strong.',
        transportation: 'Gautrain connects airport, Sandton, and Pretoria. Driving or Uber recommended. OR Tambo Airport (JNB) is 25km.',
        emergencyNumbers: 'Emergency: 10111 (police), 10177 (ambulance).',
        publicHolidays: 'New Year, Human Rights Day (Mar 21), Good Friday, Family Day, Freedom Day (Apr 27), Workers Day, Youth Day (Jun 16), Women\'s Day (Aug 9), Heritage Day (Sep 24), Day of Reconciliation (Dec 16), Christmas, Day of Goodwill (Dec 26).'
      }
    }
  },
  { slug: 'lagos', city: 'Lagos', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 6.52, lng: 3.38, tier: 2, continent: 'africa',
    info: {
      currency: 'Nigerian Naira', currencySymbol: '₦', population: '15.4M', metroPopulation: '21.3M', phoneCode: '+234 1', language: 'English, Yoruba, Igbo, Hausa',
      climate: 'Tropical wet with hot humid weather year-round (25-33°C). Rainy season April-October.',
      attractions: ['Lekki Beach', 'Nike Art Gallery', 'Freedom Park', 'National Museum', 'Tarkwa Bay', 'Lekki Conservation Centre', 'Terra Kulture', 'Kalakuta Museum', 'Badagry', 'Elegushi Beach'],
      demographics: 'Nigeria\'s largest city and economic hub. One of Africa\'s fastest-growing cities. Major entertainment industry.',
      seoContent: {
        intro: 'Lagos, Nigeria\'s megacity, operates on West Africa Time (WAT/UTC+1). Africa\'s most populous city is a commercial powerhouse with a booming Nollywood film industry and vibrant music scene.',
        timezoneFacts: 'Same timezone as much of Central Europe. Nigeria uses WAT (UTC+1) without DST. Lagos is projected to become world\'s largest city.',
        bestTimeToVisit: 'November to March (dry season). Rainy season (Apr-Oct) can see flooding. December is festive.',
        businessHours: 'Business hours 8 AM to 5 PM. Traffic means flexible timing. Lagos never sleeps - markets and nightlife run late.',
        timeDifference: 'Lagos is UTC+1 year-round. When noon in Lagos: London 11 AM, NYC 6 AM, Dubai 3 PM.',
        daylightSaving: 'Nigeria does not observe Daylight Saving Time. WAT (UTC+1) applies year-round.',
        localTips: 'Traffic (go-slow) is extreme - allow hours for travel. Naira cash needed for most transactions. Generators are common due to power issues.',
        transportation: 'BRT buses on dedicated lanes. Traffic is legendary. Murtala Muhammed Airport (LOS) is 22km - can take hours in traffic.',
        emergencyNumbers: 'Police: 112 or 199. Fire: 767. Ambulance: 112.',
        publicHolidays: 'New Year, Good Friday, Easter Monday, Workers Day (May 1), Democracy Day (Jun 12), Independence Day (Oct 1), Christmas. Islamic holidays vary.'
      }
    }
  },
  { slug: 'nairobi', city: 'Nairobi', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE', lat: -1.29, lng: 36.82, tier: 2, continent: 'africa',
    info: {
      currency: 'Kenyan Shilling', currencySymbol: 'KSh', population: '4.4M', metroPopulation: '5M', phoneCode: '+254 20', language: 'Swahili, English',
      climate: 'Subtropical highland with mild year-round temperatures (12-26°C) thanks to 1,795m elevation. Long rains Mar-May, short rains Oct-Dec.',
      attractions: ['Nairobi National Park', 'Giraffe Centre', 'David Sheldrick Wildlife Trust', 'Bomas of Kenya', 'Karen Blixen Museum', 'Nairobi National Museum', 'Karura Forest', 'Kazuri Beads', 'Maasai Market', 'Village Market'],
      demographics: 'Kenya\'s capital and East Africa\'s largest city. Safari gateway. Growing tech hub - "Silicon Savannah".',
      seoContent: {
        intro: 'Nairobi, the Green City in the Sun, operates on East Africa Time (EAT/UTC+3). Kenya\'s capital is unique as the only city with a national park within its borders, offering wildlife just minutes from downtown.',
        timezoneFacts: 'Same timezone as Moscow and Istanbul. East Africa uses EAT (UTC+3) without DST. Nairobi is near equator - sunrise/sunset vary little year-round.',
        bestTimeToVisit: 'June to October (dry season) best for safari. December to March also good. Avoid long rains (March-May).',
        businessHours: 'Offices 8 AM to 5 PM. Malls 10 AM to 8 PM. Safari activities start at dawn.',
        timeDifference: 'Nairobi is UTC+3 year-round. When noon in Nairobi: London 9 AM, NYC 4 AM, Dubai 1 PM.',
        daylightSaving: 'Kenya does not observe Daylight Saving Time. EAT (UTC+3) applies year-round. Near the equator, daylight hours are consistent.',
        localTips: 'Safari dress code: neutral colors. Haggling expected at markets. M-Pesa mobile money is universal. Security awareness important.',
        transportation: 'Matatus (minibuses) are local transport. Uber/Bolt available. Jomo Kenyatta Airport (NBO) is 15km.',
        emergencyNumbers: 'Emergency: 999 or 112. Police: 999.',
        publicHolidays: 'New Year, Good Friday, Easter Monday, Labour Day, Madaraka Day (Jun 1), Mashujaa Day (Oct 20), Jamhuri Day (Dec 12), Christmas, Boxing Day. Islamic holidays vary.'
      }
    }
  },
  { slug: 'cape-town', city: 'Cape Town', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -33.93, lng: 18.42, tier: 2, continent: 'africa',
    info: {
      currency: 'South African Rand', currencySymbol: 'R', population: '4.6M', metroPopulation: '4.6M', phoneCode: '+27 21', language: 'English, Afrikaans, Xhosa',
      climate: 'Mediterranean with warm dry summers (20-28°C) and mild wet winters (7-17°C). Table Mountain creates microclimates.',
      attractions: ['Table Mountain', 'V&A Waterfront', 'Robben Island', 'Cape of Good Hope', 'Kirstenbosch', 'Bo-Kaap', 'Camps Bay', 'Cape Winelands', 'Boulders Beach (penguins)', 'Signal Hill'],
      demographics: 'South Africa\'s legislative capital and tourism hub. Mother City with stunning natural beauty. Diverse but historically divided.',
      seoContent: {
        intro: 'Cape Town, the Mother City, operates on South Africa Standard Time (SAST/UTC+2). Nestled between Table Mountain and two oceans, Cape Town is consistently ranked among the world\'s most beautiful cities.',
        timezoneFacts: 'Same timezone as Johannesburg. Despite being far west, South Africa uses UTC+2. Cape Point is not the southern tip of Africa.',
        bestTimeToVisit: 'November to March (summer) for beaches. September-October for spring flowers. Winter (Jun-Aug) is rainy but good for whale watching.',
        businessHours: 'Shops 9 AM to 5 PM. V&A Waterfront open late. Wineries open 10 AM to 5 PM.',
        timeDifference: 'Cape Town is UTC+2 year-round. When noon in Cape Town: London 10 AM, NYC 5 AM, Sydney 9 PM.',
        daylightSaving: 'South Africa does not observe Daylight Saving Time. SAST (UTC+2) applies year-round.',
        localTips: 'Table Mountain cable car closes in strong wind - have backup plans. Wine tours require designated driver. Load shedding (power cuts) may occur.',
        transportation: 'MyCiTi buses in city. Uber recommended. Cape Town Airport (CPT) is 20km.',
        emergencyNumbers: 'Emergency: 10111 (police), 10177 (ambulance).',
        publicHolidays: 'Same as South Africa national holidays.'
      }
    }
  },
  { slug: 'casablanca', city: 'Casablanca', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 33.57, lng: -7.59, tier: 2, continent: 'africa',
    info: {
      currency: 'Moroccan Dirham', currencySymbol: 'MAD', population: '3.4M', metroPopulation: '4.3M', phoneCode: '+212 5', language: 'Arabic, French, Berber',
      climate: 'Mediterranean with mild winters (10-17°C) and warm summers (22-28°C). Atlantic breeze moderates temperature.',
      attractions: ['Hassan II Mosque', 'Old Medina', 'Corniche', 'Morocco Mall', 'La Sqala', 'Rick\'s Café', 'Central Market', 'Art Deco Architecture', 'Ain Diab Beach', 'Cathedral of the Sacred Heart'],
      demographics: 'Morocco\'s largest city and economic capital. Modern business hub with French colonial heritage.',
      seoContent: {
        intro: 'Casablanca, Morocco\'s economic heart, operates on Western European Time (UTC+1). Despite the famous film, Casa is a modern business city known for the stunning Hassan II Mosque and Art Deco architecture.',
        timezoneFacts: 'Morocco uses UTC+1 year-round since 2018 (abolished DST). During Ramadan, clocks may shift temporarily.',
        bestTimeToVisit: 'March to May and September to November for pleasant weather. Summer is warm but coastal breeze helps. Ramadan affects dining.',
        businessHours: 'Offices 8:30 AM to 6:30 PM (break for Friday prayer). Malls open 10 AM to 10 PM. Ramadan changes schedules.',
        timeDifference: 'Casablanca is UTC+1 year-round. When noon in Casablanca: London 11 AM, NYC 6 AM, Paris 12 PM.',
        daylightSaving: 'Morocco abolished Daylight Saving Time in 2018 and now uses UTC+1 year-round. During Ramadan, clocks may temporarily shift to UTC+0.',
        localTips: 'Hassan II Mosque is only Moroccan mosque open to non-Muslims. French widely spoken. Bargaining expected in medina. Rick\'s Café is a real place now.',
        transportation: 'Tramway covers main areas. Petit taxis for short trips (use meter). Mohammed V Airport (CMN) is 30km.',
        emergencyNumbers: 'Police: 19. Fire/Ambulance: 15. Tourist Police: 0524-384-601.',
        publicHolidays: 'New Year, Independence Manifesto (Jan 11), Labor Day, Throne Day (Jul 30), Revolution Day (Aug 20), Youth Day (Aug 21), Green March (Nov 6), Independence Day (Nov 18). Islamic holidays follow lunar calendar.'
      }
    }
  },

  // ============ TIER 3: Notable Cities ============
  // United States
  { slug: 'san-diego', city: 'San Diego', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 32.72, lng: -117.16, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '1.4M', metroPopulation: '3.3M', phoneCode: '+1 619', language: 'English, Spanish',
      climate: 'Mediterranean with warm dry summers (20-26°C) and mild winters (10-18°C). Near-perfect weather year-round.',
      attractions: ['San Diego Zoo', 'Balboa Park', 'USS Midway', 'Gaslamp Quarter', 'La Jolla Cove', 'Coronado Beach', 'SeaWorld', 'Old Town', 'Cabrillo Monument', 'Petco Park'],
      demographics: 'California\'s second-largest city. Strong military presence with multiple naval bases. Large Hispanic community.',
      seoContent: {
        intro: 'San Diego, America\'s Finest City, operates on Pacific Standard Time (PST/UTC-8) in winter and PDT (UTC-7) in summer. Known for its near-perfect climate, beautiful beaches, and the world-famous San Diego Zoo.',
        timezoneFacts: 'Same timezone as Los Angeles. 3 hours behind New York, 8 hours behind London. Border city with Tijuana, Mexico.',
        bestTimeToVisit: 'Year-round destination with mild weather. September-November offers warmest ocean temperatures. Summer is busy but pleasant.',
        businessHours: 'Standard hours 9 AM to 5 PM. Tourist areas open later. Beach towns have relaxed schedules.',
        timeDifference: 'San Diego is UTC-8 (PST) / UTC-7 (PDT). When noon in San Diego: NYC 3 PM, London 8 PM, Tokyo 5 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November, following US schedule.',
        localTips: 'Fish tacos are a must. Beaches are free. Tijuana is walkable across the border. Craft beer scene is excellent.',
        transportation: 'Trolley connects downtown to border. Limited public transit - car recommended. San Diego Airport (SAN) is 3 miles from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays. Comic-Con (July) transforms the city.'
      }
    }
  },
  { slug: 'austin', city: 'Austin', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 30.27, lng: -97.74, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '1M', metroPopulation: '2.3M', phoneCode: '+1 512', language: 'English',
      climate: 'Humid subtropical with hot summers (27-36°C) and mild winters (5-17°C). Can be humid.',
      attractions: ['6th Street', 'South Congress', 'Barton Springs', 'Texas State Capitol', 'Lady Bird Lake', 'Zilker Park', 'Rainey Street', 'Congress Avenue Bridge Bats', 'Blanton Museum', 'Mount Bonnell'],
      demographics: 'Texas capital and major tech hub. "Keep Austin Weird" culture. Young, educated population. Live music capital.',
      seoContent: {
        intro: 'Austin, the Live Music Capital of the World, operates on Central Standard Time (CST/UTC-6). Texas\'s capital combines tech innovation with creative culture, known for SXSW, live music, and vibrant food scene.',
        timezoneFacts: 'Same timezone as Dallas and Houston. 1 hour behind New York. Texas is considering permanent DST.',
        bestTimeToVisit: 'March for SXSW, October for ACL Festival. Spring and fall are pleasant. Summer is very hot.',
        businessHours: 'Tech-flexible schedules. 6th Street comes alive after dark. Food trucks operate late.',
        timeDifference: 'Austin is UTC-6 (CST) / UTC-5 (CDT). When noon in Austin: NYC 1 PM, London 6 PM, LA 10 AM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November.',
        localTips: 'BBQ requires patience (lines are worth it). Bats emerge at sunset from Congress Bridge. No state income tax.',
        transportation: 'Car-dependent city. Limited bus service. Austin-Bergstrom Airport (AUS) is 8 miles from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays. SXSW (March), ACL Festival (October).'
      }
    }
  },
  { slug: 'philadelphia', city: 'Philadelphia', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 39.95, lng: -75.17, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '1.6M', metroPopulation: '6.2M', phoneCode: '+1 215', language: 'English',
      climate: 'Humid subtropical with hot summers (24-31°C) and cold winters (-2 to 6°C). Four distinct seasons.',
      attractions: ['Independence Hall', 'Liberty Bell', 'Philadelphia Museum of Art', 'Reading Terminal Market', 'Eastern State Penitentiary', 'LOVE Park', 'Rittenhouse Square', 'South Street', 'Penn\'s Landing', 'Rocky Steps'],
      demographics: 'Birthplace of American democracy. Sixth-largest US city. Strong healthcare and education sectors.',
      seoContent: {
        intro: 'Philadelphia, the City of Brotherly Love, operates on Eastern Standard Time (EST/UTC-5). America\'s first capital and birthplace of the Constitution, Philly blends revolutionary history with modern urban culture.',
        timezoneFacts: 'Same timezone as New York and Washington D.C. 5 hours behind London. Between NYC and DC on the Northeast Corridor.',
        bestTimeToVisit: 'Spring (April-May) and fall (September-October) for pleasant weather. Summer can be hot and humid.',
        businessHours: 'Standard 9 AM to 5 PM. Reading Terminal Market opens 8 AM. Museums typically 10 AM to 5 PM.',
        timeDifference: 'Philadelphia is UTC-5 (EST) / UTC-4 (EDT). When noon in Philly: London 5 PM, LA 9 AM, Tokyo 2 AM (+1).',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November.',
        localTips: 'Cheesesteak debate: Pat\'s vs Geno\'s. SEPTA transit is affordable. "Jawn" means anything. Eagles fans are passionate.',
        transportation: 'SEPTA subway, bus, and regional rail. Amtrak hub at 30th Street. PHL Airport is 7 miles from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays. Mummers Parade (Jan 1) is a unique tradition.'
      }
    }
  },
  { slug: 'detroit', city: 'Detroit', timezone: 'America/Detroit', country: 'United States', countryCode: 'US', lat: 42.33, lng: -83.05, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '640K', metroPopulation: '4.4M', phoneCode: '+1 313', language: 'English',
      climate: 'Humid continental with warm summers (20-28°C) and cold snowy winters (-6 to 1°C). Lake effect weather.',
      attractions: ['Motown Museum', 'Detroit Institute of Arts', 'Ford Piquette Plant', 'Belle Isle', 'Eastern Market', 'Fox Theatre', 'Comerica Park', 'GM Renaissance Center', 'The Henry Ford', 'Heidelberg Project'],
      demographics: 'Motor City and birthplace of Motown. Undergoing urban renaissance. Strong automotive heritage.',
      seoContent: {
        intro: 'Detroit, the Motor City, operates on Eastern Standard Time (EST/UTC-5). Birthplace of the American auto industry and Motown sound, Detroit is experiencing a remarkable urban revival.',
        timezoneFacts: 'Same timezone as New York. Border city with Windsor, Canada. Auto industry schedules influence regional business.',
        bestTimeToVisit: 'Summer (June-August) for festivals and pleasant weather. Fall colors are beautiful. Winter is cold.',
        businessHours: 'Standard 9 AM to 5 PM. Eastern Market is Saturday mornings. Auto plants have shift schedules.',
        timeDifference: 'Detroit is UTC-5 (EST) / UTC-4 (EDT). When noon in Detroit: London 5 PM, LA 9 AM, Toronto 12 PM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November.',
        localTips: 'Coney dogs are local specialty. Belle Isle is a great urban park. Cross to Windsor for different perspective.',
        transportation: 'QLine streetcar downtown. Limited public transit. Detroit Metro Airport (DTW) is 20 miles from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays. North American Auto Show (January).'
      }
    }
  },
  { slug: 'minneapolis', city: 'Minneapolis', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 44.98, lng: -93.27, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '430K', metroPopulation: '3.7M', phoneCode: '+1 612', language: 'English',
      climate: 'Humid continental with warm summers (20-28°C) and very cold winters (-13 to -4°C). Heavy snowfall.',
      attractions: ['Mall of America', 'Chain of Lakes', 'Minneapolis Sculpture Garden', 'Stone Arch Bridge', 'First Avenue', 'Guthrie Theater', 'Walker Art Center', 'Minnehaha Falls', 'Mill City Museum', 'Target Field'],
      demographics: 'Twin Cities with St. Paul. Strong Scandinavian heritage. Corporate headquarters hub. Very bike-friendly.',
      seoContent: {
        intro: 'Minneapolis, the City of Lakes, operates on Central Standard Time (CST/UTC-6). Part of the Twin Cities with St. Paul, Minneapolis offers urban sophistication with Midwest friendliness and abundant natural beauty.',
        timezoneFacts: 'Same timezone as Chicago. 1 hour behind New York. Twin Cities form the 16th largest metro in the US.',
        bestTimeToVisit: 'Summer (June-August) for outdoor activities and festivals. Fall has beautiful foliage. Winter is brutally cold.',
        businessHours: 'Standard 9 AM to 5 PM. Skyway system connects downtown buildings (heated in winter).',
        timeDifference: 'Minneapolis is UTC-6 (CST) / UTC-5 (CDT). When noon in Minneapolis: NYC 1 PM, London 6 PM, Denver 11 AM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November.',
        localTips: 'Skyway system is essential in winter. Prince\'s Paisley Park is nearby. Juicy Lucy burgers are a must.',
        transportation: 'Light rail to airport and Mall of America. Nice Ride bike share. MSP Airport is 10 miles from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays. Aquatennial (July), State Fair (late August).'
      }
    }
  },
  { slug: 'portland', city: 'Portland', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 45.52, lng: -122.68, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '650K', metroPopulation: '2.5M', phoneCode: '+1 503', language: 'English',
      climate: 'Oceanic with mild wet winters (4-8°C) and warm dry summers (16-26°C). Famous for rain (but mostly drizzle).',
      attractions: ['Powell\'s Books', 'Portland Japanese Garden', 'Pittock Mansion', 'Washington Park', 'Pearl District', 'Hawthorne District', 'Voodoo Doughnut', 'Forest Park', 'Portland Saturday Market', 'International Rose Test Garden'],
      demographics: 'Known for "Keep Portland Weird" culture. Strong craft beer and coffee scene. Progressive politics.',
      seoContent: {
        intro: 'Portland, the City of Roses, operates on Pacific Standard Time (PST/UTC-8). Oregon\'s largest city is famous for its quirky culture, exceptional food scene, craft beer, and proximity to outdoor adventures.',
        timezoneFacts: 'Same timezone as Seattle and San Francisco. 3 hours behind New York. No sales tax in Oregon.',
        bestTimeToVisit: 'Summer (July-September) for dry weather. Spring has roses blooming. Fall is pleasant. Winter is gray and rainy.',
        businessHours: 'Relaxed schedules. Food carts operate various hours. Powell\'s Books is open until 11 PM.',
        timeDifference: 'Portland is UTC-8 (PST) / UTC-7 (PDT). When noon in Portland: NYC 3 PM, London 8 PM, Seattle 12 PM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November.',
        localTips: 'Food cart pods are everywhere. No sales tax! Bring layers for weather changes. Biking is popular.',
        transportation: 'TriMet MAX light rail and buses. Very bike-friendly. PDX Airport is 20 minutes from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays. Rose Festival (June).'
      }
    }
  },
  { slug: 'nashville', city: 'Nashville', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 36.16, lng: -86.78, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '690K', metroPopulation: '2M', phoneCode: '+1 615', language: 'English',
      climate: 'Humid subtropical with hot summers (24-32°C) and mild winters (1-10°C). Occasional ice storms.',
      attractions: ['Grand Ole Opry', 'Country Music Hall of Fame', 'Broadway Honky Tonks', 'Ryman Auditorium', 'The Parthenon', 'Belle Meade Plantation', 'Johnny Cash Museum', 'Printer\'s Alley', 'Music Row', 'Bluebird Cafe'],
      demographics: 'Music City USA. Country music capital. Rapidly growing with healthcare and tech industries.',
      seoContent: {
        intro: 'Nashville, Music City, operates on Central Standard Time (CST/UTC-6). The capital of Tennessee and country music, Nashville has evolved into a diverse cultural hub attracting musicians, entrepreneurs, and tourists.',
        timezoneFacts: 'Same timezone as Chicago and Memphis. 1 hour behind New York. Live music plays around the clock.',
        bestTimeToVisit: 'Spring and fall for pleasant weather. CMA Fest in June. Summer is hot and humid.',
        businessHours: 'Broadway honky tonks open at 10 AM, music until 3 AM. No cover charges on Lower Broadway.',
        timeDifference: 'Nashville is UTC-6 (CST) / UTC-5 (CDT). When noon in Nashville: NYC 1 PM, London 6 PM, LA 10 AM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November.',
        localTips: 'Hot chicken is the signature dish. Bluebird Cafe requires reservations. Tip your musicians. Bachelorette parties everywhere.',
        transportation: 'Car-dependent. Limited public transit. BNA Airport is 8 miles from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays. CMA Fest (June).'
      }
    }
  },
  { slug: 'new-orleans', city: 'New Orleans', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 29.95, lng: -90.07, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '390K', metroPopulation: '1.3M', phoneCode: '+1 504', language: 'English, French Creole',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (8-17°C). Hurricane season Jun-Nov.',
      attractions: ['French Quarter', 'Bourbon Street', 'Jackson Square', 'Garden District', 'St. Louis Cemetery', 'Preservation Hall', 'Cafe Du Monde', 'Frenchmen Street', 'Audubon Zoo', 'WWII Museum'],
      demographics: 'Unique French, African, and Caribbean cultural blend. Birthplace of jazz. Strong food culture.',
      seoContent: {
        intro: 'New Orleans, the Big Easy, operates on Central Standard Time (CST/UTC-6). This unique American city blends French, African, and Caribbean cultures into an intoxicating mix of jazz, cuisine, and celebration.',
        timezoneFacts: 'Same timezone as Houston and Chicago. 1 hour behind Miami. Mardi Gras date varies each year.',
        bestTimeToVisit: 'February for Mardi Gras, April-May for Jazz Fest. Fall is pleasant. Summer is very hot and humid.',
        businessHours: 'Bourbon Street never closes. Restaurants serve late. Some bars open 24 hours.',
        timeDifference: 'New Orleans is UTC-6 (CST) / UTC-5 (CDT). When noon in NOLA: NYC 1 PM, London 6 PM, LA 10 AM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November.',
        localTips: 'Go-cups allow open containers. Frenchmen Street for locals\' music scene. Beignets at Cafe Du Monde. Don\'t say "N\'awlins."',
        transportation: 'Historic streetcars are iconic. Walking in French Quarter. Louis Armstrong Airport (MSY) is 15 miles from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays plus Mardi Gras (Fat Tuesday). Jazz Fest (late April).'
      }
    }
  },
  { slug: 'orlando', city: 'Orlando', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 28.54, lng: -81.38, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '310K', metroPopulation: '2.7M', phoneCode: '+1 407', language: 'English, Spanish',
      climate: 'Humid subtropical with hot humid summers (25-33°C) and mild winters (10-22°C). Afternoon thunderstorms common.',
      attractions: ['Walt Disney World', 'Universal Studios', 'SeaWorld', 'ICON Park', 'Kennedy Space Center', 'International Drive', 'Lake Eola', 'Disney Springs', 'Universal CityWalk', 'Gatorland'],
      demographics: 'Theme park capital of the world. Major tourist destination. Growing tech sector.',
      seoContent: {
        intro: 'Orlando, the Theme Park Capital, operates on Eastern Standard Time (EST/UTC-5). Home to Walt Disney World and Universal Studios, Orlando welcomes over 75 million visitors annually.',
        timezoneFacts: 'Same timezone as Miami and New York. Major tourism hub - theme parks consider global visitors.',
        bestTimeToVisit: 'Spring and fall avoid crowds and heat. Summer is busiest and hottest. Winter holidays are crowded.',
        businessHours: 'Theme parks 9 AM to 10 PM+ (varies). Disney operates 365 days. I-Drive open late.',
        timeDifference: 'Orlando is UTC-5 (EST) / UTC-4 (EDT). When noon in Orlando: London 5 PM, LA 9 AM, São Paulo 2 PM.',
        daylightSaving: 'DST runs second Sunday of March to first Sunday of November. Florida considered permanent DST.',
        localTips: 'Buy park tickets in advance. Lightning delays afternoon rides. Genie+ for skipping lines. Stay hydrated.',
        transportation: 'Car essential for theme parks. I-Ride Trolley on International Drive. MCO Airport is 25 minutes from parks.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays. Epcot festivals throughout the year.'
      }
    }
  },
  { slug: 'honolulu', city: 'Honolulu', timezone: 'Pacific/Honolulu', country: 'United States', countryCode: 'US', lat: 21.31, lng: -157.86, tier: 2, continent: 'oceania',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '350K', metroPopulation: '1M', phoneCode: '+1 808', language: 'English, Hawaiian',
      climate: 'Tropical with consistent temperatures (23-30°C) year-round. Trade winds keep it comfortable.',
      attractions: ['Waikiki Beach', 'Diamond Head', 'Pearl Harbor', 'Hanauma Bay', 'Iolani Palace', 'North Shore', 'Ala Moana', 'Chinatown', 'Polynesian Cultural Center', 'Manoa Falls'],
      demographics: 'Hawaii\'s capital. Diverse Pacific Islander, Asian, and mainland American population. Major military presence.',
      seoContent: {
        intro: 'Honolulu, the Crossroads of the Pacific, operates on Hawaii-Aleutian Standard Time (HST/UTC-10). The capital of Hawaii offers tropical paradise with rich Polynesian culture and American convenience.',
        timezoneFacts: 'Hawaii doesn\'t observe DST - always UTC-10. 5-6 hours behind US mainland depending on season. Unique position bridging East and West.',
        bestTimeToVisit: 'Year-round destination. Winter (Dec-Mar) has best whale watching. Summer is drier. September-November least crowded.',
        businessHours: 'Relaxed "island time" mentality. Shops typically 10 AM to 9 PM. Many activities start early to avoid heat.',
        timeDifference: 'Honolulu is always UTC-10. When noon in Honolulu: LA 2 PM (winter) / 3 PM (summer), NYC 5 PM / 6 PM, Tokyo 7 AM (+1).',
        daylightSaving: 'Hawaii does NOT observe DST. Time difference with mainland US changes seasonally.',
        localTips: 'Learn basic Hawaiian: Aloha (hello/goodbye), Mahalo (thank you). Respect local culture. Reef-safe sunscreen required.',
        transportation: 'TheBus covers Oahu. Car needed for North Shore. Daniel K. Inouye Airport (HNL) is 10 miles from Waikiki.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays plus Prince Kuhio Day (Mar 26), King Kamehameha Day (Jun 11), Statehood Day (Aug).'
      }
    }
  },
  { slug: 'anchorage', city: 'Anchorage', timezone: 'America/Anchorage', country: 'United States', countryCode: 'US', lat: 61.22, lng: -149.90, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '290K', metroPopulation: '400K', phoneCode: '+1 907', language: 'English',
      climate: 'Subarctic with cool summers (13-19°C) and cold winters (-11 to -5°C). Extreme daylight variation.',
      attractions: ['Denali National Park', 'Glacier cruises', 'Alaska Wildlife Conservation Center', 'Flattop Mountain', 'Anchorage Museum', 'Tony Knowles Coastal Trail', 'Portage Glacier', 'Alyeska Resort', 'Lake Hood', 'Alaska Railroad'],
      demographics: 'Alaska\'s largest city. Gateway to wilderness adventures. Strong Native Alaskan heritage.',
      seoContent: {
        intro: 'Anchorage, Alaska\'s largest city, operates on Alaska Standard Time (AKST/UTC-9). The gateway to America\'s last frontier offers stunning wilderness, abundant wildlife, and extreme seasonal daylight.',
        timezoneFacts: '1 hour behind Pacific Time, 4 hours behind New York. Summer has nearly 20 hours of daylight; winter has barely 5.',
        bestTimeToVisit: 'June-August for midnight sun and wildlife. March for Iditarod. Winter for northern lights. Shoulder seasons less crowded.',
        businessHours: 'Standard hours but summer activities extend late due to daylight. Some businesses close in winter.',
        timeDifference: 'Anchorage is UTC-9 (AKST) / UTC-8 (AKDT). When noon in Anchorage: LA 1 PM, NYC 4 PM, London 9 PM.',
        daylightSaving: 'AKDT runs second Sunday of March to first Sunday of November. Daylight hours vary dramatically by season.',
        localTips: 'Wildlife is wild - keep distance from moose and bears. Dress in layers. Book excursions early in summer.',
        transportation: 'Car essential for exploring. Alaska Railroad for scenic routes. Ted Stevens Airport (ANC) is 6 miles from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'US Federal holidays plus Seward\'s Day (last Mon March), Alaska Day (Oct 18). Iditarod start (early March).'
      }
    }
  },

  // Canada
  { slug: 'calgary', city: 'Calgary', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA', lat: 51.05, lng: -114.07, tier: 3, continent: 'americas',
    info: {
      currency: 'Canadian Dollar', currencySymbol: 'C$', population: '1.3M', metroPopulation: '1.5M', phoneCode: '+1 403', language: 'English',
      climate: 'Semi-arid with warm summers (16-24°C) and cold winters (-11 to -1°C). Chinook winds bring sudden warmth.',
      attractions: ['Calgary Stampede', 'Calgary Tower', 'Banff nearby', 'Heritage Park', 'Prince\'s Island Park', 'Studio Bell', 'Glenbow Museum', 'TELUS Spark', 'Fish Creek Park', 'Canada Olympic Park'],
      demographics: 'Alberta\'s largest city. Oil and gas industry hub. Gateway to Rocky Mountains.',
      seoContent: {
        intro: 'Calgary, home of the Greatest Outdoor Show on Earth, operates on Mountain Standard Time (MST/UTC-7). This Alberta city combines cowboy culture with modern energy industry wealth and serves as the gateway to the Canadian Rockies.',
        timezoneFacts: 'Same timezone as Denver. 2 hours behind Toronto. Calgary Stampede attracts over 1 million visitors annually.',
        bestTimeToVisit: 'July for Stampede, summer for outdoor activities. Winter for skiing in nearby Banff. Chinook winds can warm winter days dramatically.',
        businessHours: 'Standard 9 AM to 5 PM. Energy industry influences business culture. Stampede week is festive.',
        timeDifference: 'Calgary is UTC-7 (MST) / UTC-6 (MDT). When noon in Calgary: Toronto 2 PM, London 7 PM, Vancouver 11 AM.',
        daylightSaving: 'MDT runs second Sunday of March to first Sunday of November. Alberta has debated ending DST.',
        localTips: 'White hat culture during Stampede. Banff is 90 minutes away. Plus 15 walkways connect downtown. No provincial sales tax.',
        transportation: 'CTrain light rail. Car needed for mountains. Calgary Airport (YYC) is 20 minutes from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'Canadian holidays. Calgary Stampede (July). Heritage Day (August).'
      }
    }
  },
  { slug: 'ottawa', city: 'Ottawa', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 45.42, lng: -75.70, tier: 3, continent: 'americas',
    info: {
      currency: 'Canadian Dollar', currencySymbol: 'C$', population: '1M', metroPopulation: '1.5M', phoneCode: '+1 613', language: 'English, French',
      climate: 'Humid continental with warm summers (20-26°C) and cold snowy winters (-11 to -3°C). World\'s second coldest capital.',
      attractions: ['Parliament Hill', 'Rideau Canal', 'National Gallery', 'ByWard Market', 'Canadian War Museum', 'Museum of History', 'Rideau Hall', 'Tulip Festival', 'National Arts Centre', 'Diefenbunker'],
      demographics: 'Canada\'s capital. Bilingual (English-French). Strong public sector. Tech hub (Silicon Valley North).',
      seoContent: {
        intro: 'Ottawa, Canada\'s capital, operates on Eastern Standard Time (EST/UTC-5). This bilingual city on the Ottawa River is home to Parliament Hill and world-class museums, offering a blend of government grandeur and outdoor recreation.',
        timezoneFacts: 'Same timezone as Toronto and Montreal. Border with Gatineau, Quebec. Rideau Canal becomes world\'s largest skating rink in winter.',
        bestTimeToVisit: 'May for Tulip Festival, summer for festivals, winter for skating. Fall has beautiful foliage.',
        businessHours: 'Government hours 8:30 AM to 4:30 PM. ByWard Market open daily. Museums typically 10 AM to 5 PM.',
        timeDifference: 'Ottawa is UTC-5 (EST) / UTC-4 (EDT). When noon in Ottawa: London 5 PM, Vancouver 9 AM, Paris 6 PM.',
        daylightSaving: 'EDT runs second Sunday of March to first Sunday of November.',
        localTips: 'BeaverTails pastry is iconic. Skating on Rideau Canal is free. Parliament tours available. Gatineau has different alcohol laws.',
        transportation: 'O-Train Confederation Line. Buses to Gatineau. Ottawa Airport (YOW) is 15 minutes from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'Canadian holidays. Canada Day (July 1) is huge on Parliament Hill. Winterlude (February).'
      }
    }
  },
  { slug: 'edmonton', city: 'Edmonton', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA', lat: 53.55, lng: -113.49, tier: 3, continent: 'americas',
    info: {
      currency: 'Canadian Dollar', currencySymbol: 'C$', population: '1M', metroPopulation: '1.4M', phoneCode: '+1 780', language: 'English',
      climate: 'Humid continental with warm summers (17-23°C) and very cold winters (-14 to -5°C). Extreme temperature swings.',
      attractions: ['West Edmonton Mall', 'Muttart Conservatory', 'Fort Edmonton Park', 'Art Gallery of Alberta', 'River Valley', 'Royal Alberta Museum', 'Elk Island', 'K-Days', 'Ice District', 'Old Strathcona'],
      demographics: 'Alberta\'s capital. Gateway to northern Alberta oil sands. Festival city with many summer events.',
      seoContent: {
        intro: 'Edmonton, Alberta\'s capital, operates on Mountain Standard Time (MST/UTC-7). Known as the Festival City and home to North America\'s largest mall, Edmonton serves as the gateway to Canada\'s north.',
        timezoneFacts: 'Same timezone as Calgary. Canada\'s northernmost major city. Summer has extremely long daylight hours.',
        bestTimeToVisit: 'Summer for festivals and 17+ hours of daylight. Fall for northern lights nearby. Winter is very cold.',
        businessHours: 'Standard 9 AM to 5 PM. West Edmonton Mall open until 9 PM. Festival season is busy.',
        timeDifference: 'Edmonton is UTC-7 (MST) / UTC-6 (MDT). When noon in Edmonton: Toronto 2 PM, London 7 PM, LA 11 AM.',
        daylightSaving: 'MDT runs second Sunday of March to first Sunday of November.',
        localTips: 'River Valley is North America\'s largest urban park system. Dress warmly in winter. No provincial sales tax.',
        transportation: 'LRT system. Car essential for suburbs. Edmonton Airport (YEG) is 30 minutes from downtown.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'Canadian holidays. K-Days (July), Fringe Festival (August), Heritage Festival.'
      }
    }
  },

  // Latin America
  { slug: 'santiago', city: 'Santiago', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL', lat: -33.45, lng: -70.67, tier: 2, continent: 'americas',
    info: {
      currency: 'Chilean Peso', currencySymbol: '$', population: '5.6M', metroPopulation: '7.1M', phoneCode: '+56 2', language: 'Spanish',
      climate: 'Mediterranean with warm dry summers (20-30°C) and cool wet winters (5-14°C). Andes visible on clear days.',
      attractions: ['Plaza de Armas', 'Cerro San Cristóbal', 'La Moneda', 'Mercado Central', 'Bellavista', 'Lastarria', 'Valle Nevado', 'Cajon del Maipo', 'Museo de la Memoria', 'Costanera Center'],
      demographics: 'Chile\'s capital and economic center. Modern South American city. Strong wine industry nearby.',
      seoContent: {
        intro: 'Santiago, Chile\'s capital, operates on Chile Standard Time (CLT/UTC-4 in winter, UTC-3 in summer). Nestled between the Andes and the Pacific, this modern metropolis offers urban sophistication with world-class wine country nearby.',
        timezoneFacts: 'Chile\'s DST is opposite to Northern Hemisphere - summer is December-March. 1 hour ahead of New York in Southern summer.',
        bestTimeToVisit: 'September-November (spring) and March-May (fall) for pleasant weather. Summer for beaches. Winter for skiing.',
        businessHours: 'Offices 9 AM to 6 PM. Long lunches traditional. Shops open until 9 PM.',
        timeDifference: 'Santiago is UTC-4 (winter) / UTC-3 (summer). When noon in Santiago: NYC 11 AM/12 PM, London 4 PM/5 PM.',
        daylightSaving: 'Chile uses summer time roughly September to April (Southern Hemisphere summer).',
        localTips: 'Wine tours in Maipo Valley. Smog can be bad in winter. Earthquakes occur. "Once" is afternoon tea tradition.',
        transportation: 'Metro is excellent. Buses throughout. SCL Airport is 20km from center - tolled highways.',
        emergencyNumbers: 'Emergency: 131 (ambulance), 132 (fire), 133 (police).',
        publicHolidays: 'New Year, Easter, Labor Day, Navy Day (May 21), Independence Day (Sep 18-19), Christmas.'
      }
    }
  },
  { slug: 'bogota', city: 'Bogotá', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 4.71, lng: -74.07, tier: 2, continent: 'americas',
    info: {
      currency: 'Colombian Peso', currencySymbol: '$', population: '7.4M', metroPopulation: '10.7M', phoneCode: '+57 1', language: 'Spanish',
      climate: 'Subtropical highland with mild consistent temperatures (12-19°C). Can be rainy. Cool due to altitude (2,640m).',
      attractions: ['La Candelaria', 'Gold Museum', 'Monserrate', 'Botero Museum', 'Plaza Bolívar', 'Zona Rosa', 'Usaquén', 'Salt Cathedral of Zipaquirá', 'National Museum', 'Ciclovía'],
      demographics: 'Colombia\'s capital and largest city. High altitude. Growing as regional business hub. Transforming reputation.',
      seoContent: {
        intro: 'Bogotá, Colombia\'s high-altitude capital, operates on Colombia Time (COT/UTC-5). This Andean metropolis at 2,640 meters combines colonial history, world-class museums, and emerging culinary scene.',
        timezoneFacts: 'Same as New York (EST) but Colombia doesn\'t observe DST. Always 5 hours behind London.',
        bestTimeToVisit: 'December-March and July-August (dry seasons). Year-round mild temperatures. Bring layers for rain.',
        businessHours: 'Offices 8 AM to 5 PM. Shopping centers until 9 PM. Ciclovía on Sundays closes streets to cars.',
        timeDifference: 'Bogotá is always UTC-5. When noon in Bogotá: NYC 12 PM (EST) / 1 PM (EDT), London 5 PM, LA 9 AM.',
        daylightSaving: 'Colombia does NOT observe DST. Time is constant year-round.',
        localTips: 'Altitude can cause soroche (altitude sickness). Take it easy first day. Agua de panela helps. TransMilenio can be crowded.',
        transportation: 'TransMilenio BRT system. Taxis are affordable. El Dorado Airport (BOG) is 15km from center.',
        emergencyNumbers: 'Emergency: 123. Tourist Police: 156.',
        publicHolidays: 'New Year, Epiphany, Easter, Labor Day, Independence Day (Jul 20, Aug 7), Christmas. Many Monday holidays.'
      }
    }
  },
  { slug: 'lima', city: 'Lima', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE', lat: -12.05, lng: -77.04, tier: 2, continent: 'americas',
    info: {
      currency: 'Peruvian Sol', currencySymbol: 'S/', population: '9.7M', metroPopulation: '11M', phoneCode: '+51 1', language: 'Spanish',
      climate: 'Subtropical desert with mild temperatures (15-27°C). Coastal fog (garúa) common May-November. Rarely rains.',
      attractions: ['Plaza Mayor', 'Miraflores', 'Larco Museum', 'Barranco', 'Huaca Pucllana', 'San Francisco Catacombs', 'Magic Water Circuit', 'Pachacamac', 'Costa Verde', 'Central Market'],
      demographics: 'Peru\'s capital. Gastronomic capital of South America. Blend of colonial and pre-Columbian history.',
      seoContent: {
        intro: 'Lima, Peru\'s capital, operates on Peru Time (PET/UTC-5). This coastal metropolis is South America\'s gastronomic capital, blending Incan heritage, colonial architecture, and innovative cuisine.',
        timezoneFacts: 'Same as New York (EST) but Peru doesn\'t observe DST. Gateway to Machu Picchu and Amazon.',
        bestTimeToVisit: 'December-April for sunny "summer" weather. May-November is overcast but mild. Food festivals year-round.',
        businessHours: 'Offices 9 AM to 6 PM. Restaurants serve late. Lunch is main meal (1-3 PM).',
        timeDifference: 'Lima is always UTC-5. When noon in Lima: NYC 12 PM (EST), London 5 PM, LA 9 AM.',
        daylightSaving: 'Peru does NOT observe DST. Time is constant year-round.',
        localTips: 'Ceviche for lunch only (fresh fish). Pisco sour is national drink. Miraflores is safest for tourists. Book Machu Picchu early.',
        transportation: 'Metropolitano BRT. Taxis use apps (Uber, Beat). Jorge Chávez Airport (LIM) is 12km from Miraflores.',
        emergencyNumbers: 'Emergency: 105. Tourist Police: 574-8000.',
        publicHolidays: 'New Year, Easter, Labor Day, Independence Day (Jul 28-29), St. Rose of Lima (Aug 30), Christmas.'
      }
    }
  },
  { slug: 'caracas', city: 'Caracas', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE', lat: 10.48, lng: -66.90, tier: 2, continent: 'americas',
    info: {
      currency: 'Venezuelan Bolívar', currencySymbol: 'Bs.', population: '2.9M', metroPopulation: '5.2M', phoneCode: '+58 212', language: 'Spanish',
      climate: 'Tropical with consistent temperatures (18-27°C). Mountain location keeps it cooler than coast. Rainy May-October.',
      attractions: ['Teleférico to Ávila', 'Plaza Bolívar', 'Parque del Este', 'Birthplace of Bolívar', 'Museo de Arte Contemporáneo', 'Los Roques nearby', 'Panteón Nacional', 'El Hatillo', 'Museo de Bellas Artes', 'Ávila National Park'],
      demographics: 'Venezuela\'s capital. Economic crisis has impacted daily life. Strong cultural heritage.',
      seoContent: {
        intro: 'Caracas, Venezuela\'s capital, operates on Venezuela Time (VET/UTC-4). Nestled in a valley beneath Mount Ávila, this vibrant city faces challenges but retains cultural richness and natural beauty.',
        timezoneFacts: 'UTC-4 offset was changed in 2007 to UTC-4:30, then back to UTC-4 in 2016. 1 hour ahead of New York.',
        bestTimeToVisit: 'December-April is dry season. Year-round pleasant mountain climate. Check travel advisories.',
        businessHours: 'Offices 8 AM to 5 PM. Economic situation affects business hours and availability.',
        timeDifference: 'Caracas is always UTC-4. When noon in Caracas: NYC 11 AM (EST) / 12 PM (EDT), London 4 PM.',
        daylightSaving: 'Venezuela does NOT observe DST.',
        localTips: 'Check current travel advisories. USD cash is useful. Ávila cable car offers amazing views. Arepas are staple food.',
        transportation: 'Metro system exists but limited. Taxis and rideshare. Simón Bolívar Airport (CCS) is 25km from center.',
        emergencyNumbers: 'Emergency: 171.',
        publicHolidays: 'New Year, Carnival, Easter, Independence Day (Apr 19, Jul 5), Simón Bolívar Day (Jul 24), Christmas.'
      }
    }
  },
  { slug: 'medellin', city: 'Medellín', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 6.25, lng: -75.56, tier: 3, continent: 'americas',
    info: {
      currency: 'Colombian Peso', currencySymbol: '$', population: '2.5M', metroPopulation: '3.9M', phoneCode: '+57 4', language: 'Spanish',
      climate: 'Subtropical highland with spring-like temperatures year-round (17-28°C). "City of Eternal Spring."',
      attractions: ['Comuna 13', 'Parque Arví', 'Plaza Botero', 'Museo de Antioquia', 'Metrocable', 'El Poblado', 'Jardín Botánico', 'Parque Lleras', 'Santa Elena', 'Pueblito Paisa'],
      demographics: 'Colombia\'s second city. Remarkable transformation from violent past. Innovation hub.',
      seoContent: {
        intro: 'Medellín, the City of Eternal Spring, operates on Colombia Time (COT/UTC-5). Once notorious, this transformed city is now celebrated for innovation, urban renewal, and perfect year-round climate.',
        timezoneFacts: 'Same timezone as Bogotá. No DST. Spring-like weather allows year-round outdoor activities.',
        bestTimeToVisit: 'Year-round destination due to consistent weather. August for Flower Festival. December for lights festival.',
        businessHours: 'Offices 8 AM to 5 PM. El Poblado nightlife runs late. Malls until 9 PM.',
        timeDifference: 'Medellín is always UTC-5. When noon in Medellín: NYC 12 PM (EST), London 5 PM, Miami 12 PM.',
        daylightSaving: 'Colombia does NOT observe DST.',
        localTips: 'Metrocable to Comuna 13 is a must. Bandeja paisa is local dish. "Paisa" people are known for hospitality.',
        transportation: 'Metro and Metrocable are excellent. Uber works. José María Córdova Airport (MDE) is 35km in mountains.',
        emergencyNumbers: 'Emergency: 123.',
        publicHolidays: 'Colombian holidays. Feria de las Flores (August), Alumbrados (December lights).'
      }
    }
  },
  { slug: 'montevideo', city: 'Montevideo', timezone: 'America/Montevideo', country: 'Uruguay', countryCode: 'UY', lat: -34.90, lng: -56.19, tier: 3, continent: 'americas',
    info: {
      currency: 'Uruguayan Peso', currencySymbol: '$U', population: '1.4M', metroPopulation: '2M', phoneCode: '+598 2', language: 'Spanish',
      climate: 'Humid subtropical with warm summers (22-28°C) and mild winters (7-14°C). Can be windy.',
      attractions: ['Ciudad Vieja', 'Mercado del Puerto', 'Rambla', 'Plaza Independencia', 'Palacio Salvo', 'Teatro Solís', 'Punta Carretas', 'Pocitos Beach', 'Museo Torres García', 'Carnival'],
      demographics: 'Uruguay\'s capital. Half of country lives here. Relaxed, cultured atmosphere. Progressive policies.',
      seoContent: {
        intro: 'Montevideo, Uruguay\'s laid-back capital, operates on Uruguay Time (UYT/UTC-3). This cosmopolitan city on the Río de la Plata offers colonial charm, beach culture, and one of South America\'s highest quality of life.',
        timezoneFacts: 'Same timezone as Buenos Aires and São Paulo. Uruguay abolished DST in 2015.',
        bestTimeToVisit: 'December-March for summer beach weather. Carnival (February) is vibrant. Winter is mild.',
        businessHours: 'Offices 9 AM to 6 PM. Siesta culture less common than past. Mercado del Puerto busy for lunch.',
        timeDifference: 'Montevideo is always UTC-3. When noon in Montevideo: NYC 10 AM (EST), London 3 PM, Buenos Aires 12 PM.',
        daylightSaving: 'Uruguay does NOT observe DST since 2015.',
        localTips: 'Mate is social ritual. Chivito sandwich is local specialty. Punta del Este is nearby resort. Very safe city.',
        transportation: 'Buses throughout. Car not necessary downtown. Carrasco Airport (MVD) is 20km from center.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'New Year, Carnival, Easter, Landing of the 33 (Apr 19), Labor Day, Independence Day (Aug 25), Christmas.'
      }
    }
  },
  { slug: 'havana', city: 'Havana', timezone: 'America/Havana', country: 'Cuba', countryCode: 'CU', lat: 23.11, lng: -82.37, tier: 3, continent: 'americas',
    info: {
      currency: 'Cuban Peso', currencySymbol: '$', population: '2.1M', metroPopulation: '3.7M', phoneCode: '+53 7', language: 'Spanish',
      climate: 'Tropical with hot humid summers (27-32°C) and warm dry winters (21-26°C). Hurricane season Jun-Nov.',
      attractions: ['Old Havana', 'Malecón', 'El Capitolio', 'Plaza de la Revolución', 'Museo de la Revolución', 'Fábrica de Arte', 'Tropicana', 'Fusterlandia', 'El Floridita', 'Classic Cars'],
      demographics: 'Cuba\'s capital. UNESCO World Heritage colonial center. Frozen in time aesthetic.',
      seoContent: {
        intro: 'Havana, Cuba\'s captivating capital, operates on Cuba Standard Time (CST/UTC-5). This living museum of colonial architecture, classic cars, and revolutionary history offers a unique window into a preserved past.',
        timezoneFacts: 'Same as New York (EST) with similar DST schedule. Internet access is limited.',
        bestTimeToVisit: 'November-April for dry season. December-February most pleasant. Avoid hurricane season (Jun-Nov).',
        businessHours: 'State businesses 8 AM to 5 PM. Private restaurants (paladares) have varying hours. Things move slowly.',
        timeDifference: 'Havana is UTC-5 (CST) / UTC-4 (CDT). When noon in Havana: NYC 12 PM, London 5 PM, Miami 12 PM.',
        daylightSaving: 'Cuba observes DST, roughly March to November.',
        localTips: 'Bring cash (euros or USD to exchange). WiFi limited to certain spots. Negotiate taxi prices. Two currencies existed until 2021.',
        transportation: 'Classic car taxis, cocotaxis, buses. Limited public transit. José Martí Airport (HAV) is 18km from center.',
        emergencyNumbers: 'Emergency: 106.',
        publicHolidays: 'New Year, Liberation Day (Jan 1), Labor Day, Revolution Day (Jul 26), Independence Day (Oct 10), Christmas.'
      }
    }
  },
  { slug: 'panama-city', city: 'Panama City', timezone: 'America/Panama', country: 'Panama', countryCode: 'PA', lat: 8.98, lng: -79.52, tier: 3, continent: 'americas',
    info: {
      currency: 'Panamanian Balboa / US Dollar', currencySymbol: 'B/./$', population: '880K', metroPopulation: '2M', phoneCode: '+507', language: 'Spanish',
      climate: 'Tropical with hot humid weather year-round (26-32°C). Rainy season May-November.',
      attractions: ['Panama Canal', 'Casco Viejo', 'BioMuseo', 'Causeway', 'Miraflores Locks', 'Cerro Ancón', 'Panama Viejo', 'Metropolitan Natural Park', 'Multiplaza', 'Trump Ocean Club'],
      demographics: 'Panama\'s capital. Major banking and shipping hub. Modern skyline. Uses US Dollar.',
      seoContent: {
        intro: 'Panama City, Panama\'s capital, operates on Eastern Standard Time (EST/UTC-5). This booming financial center is home to the world-famous Panama Canal and offers a bridge between North and South America.',
        timezoneFacts: 'Same as New York (EST) but Panama doesn\'t observe DST. So same as Miami in winter, 1 hour behind in summer.',
        bestTimeToVisit: 'December-April (dry season). January-March best weather. Rainy season has afternoon showers.',
        businessHours: 'Offices 8 AM to 5 PM. Banking hub means financial services are comprehensive. Malls until 9 PM.',
        timeDifference: 'Panama is always UTC-5. When noon in Panama: NYC 12 PM (EST) / 1 PM (EDT), London 5 PM, LA 9 AM.',
        daylightSaving: 'Panama does NOT observe DST.',
        localTips: 'Canal expansion completed 2016. US Dollar used everywhere. Casco Viejo is gentrified but watch belongings.',
        transportation: 'Metro Line 1 and 2. Buses (diablos rojos). Tocumen Airport (PTY) is 25km from center.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'New Year, Martyrs\' Day (Jan 9), Carnival, Easter, Labor Day, Independence Days (Nov 3, 4, 28), Christmas.'
      }
    }
  },
  { slug: 'san-jose-cr', city: 'San José', timezone: 'America/Costa_Rica', country: 'Costa Rica', countryCode: 'CR', lat: 9.93, lng: -84.09, tier: 3, continent: 'americas',
    info: {
      currency: 'Costa Rican Colón', currencySymbol: '₡', population: '340K', metroPopulation: '2.2M', phoneCode: '+506', language: 'Spanish',
      climate: 'Tropical highland with spring-like temperatures (17-26°C). Rainy season May-November.',
      attractions: ['National Museum', 'Central Market', 'National Theater', 'Jade Museum', 'Pre-Columbian Gold Museum', 'La Sabana Park', 'Barrio Amón', 'Poás Volcano nearby', 'Café Britt Tour', 'Artisan Markets'],
      demographics: 'Costa Rica\'s capital. Gateway to ecotourism. High quality of life. "Pura Vida" lifestyle.',
      seoContent: {
        intro: 'San José, Costa Rica\'s capital, operates on Central Standard Time (CST/UTC-6). This highland city serves as the gateway to Costa Rica\'s famous ecotourism destinations, embodying the "Pura Vida" lifestyle.',
        timezoneFacts: 'Same as Chicago but Costa Rica doesn\'t observe DST. 1-2 hours behind US East Coast depending on season.',
        bestTimeToVisit: 'December-April (dry season). Green season (May-Nov) has lower prices and fewer crowds.',
        businessHours: 'Offices 8 AM to 5 PM. Central Market opens early. Most tourists pass through quickly to beaches.',
        timeDifference: 'San José is always UTC-6. When noon in San José: NYC 1 PM (EST) / 2 PM (EDT), London 6 PM, LA 10 AM.',
        daylightSaving: 'Costa Rica does NOT observe DST.',
        localTips: '"Pura Vida" is greeting and lifestyle. Gallo pinto for breakfast. Colones and USD both accepted. Very safe country.',
        transportation: 'Buses throughout Central America. Taxis red (official) or Uber. Juan Santamaría Airport (SJO) is 20km from center.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'New Year, Easter, Juan Santamaría Day (Apr 11), Labor Day, Annexation of Guanacaste (Jul 25), Independence Day (Sep 15), Christmas.'
      }
    }
  },
  { slug: 'guadalajara', city: 'Guadalajara', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 20.67, lng: -103.35, tier: 3, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1.5M', metroPopulation: '5.3M', phoneCode: '+52 33', language: 'Spanish',
      climate: 'Subtropical highland with warm weather (15-30°C). Rainy season June-October. Pleasant year-round.',
      attractions: ['Hospicio Cabañas', 'Tequila Town', 'Tlaquepaque', 'Guadalajara Cathedral', 'Teatro Degollado', 'Chapultepec', 'Lake Chapala', 'Mercado San Juan de Dios', 'Tonalá', 'Mariachi Plaza'],
      demographics: 'Mexico\'s second-largest city. Birthplace of mariachi, tequila, and Mexican rodeo. Tech hub.',
      seoContent: {
        intro: 'Guadalajara, Mexico\'s second city, operates on Central Standard Time (CST/UTC-6). The birthplace of mariachi music and tequila, this vibrant metropolis offers traditional Mexican culture alongside modern innovation.',
        timezoneFacts: 'Same timezone as Mexico City. 1 hour behind New York. Silicon Valley of Mexico.',
        bestTimeToVisit: 'October-May for dry season. October for Day of the Dead. May for mariachi festival.',
        businessHours: 'Offices 9 AM to 6 PM. Siesta tradition fading. Markets open early.',
        timeDifference: 'Guadalajara is UTC-6 (CST) / UTC-5 (CDT). When noon in GDL: NYC 1 PM, London 6 PM, LA 10 AM.',
        daylightSaving: 'Mexico abolished DST in 2022 for most regions, but border areas may differ.',
        localTips: 'Tequila town is 1 hour away. Torta ahogada is local specialty. Tlaquepaque for handicrafts. Very traditional culture.',
        transportation: 'Light rail and buses. Uber works well. Miguel Hidalgo Airport (GDL) is 20km from center.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'Mexican holidays. Fiestas de Octubre, Day of the Dead, Guadalupe Day (Dec 12).'
      }
    }
  },
  { slug: 'monterrey', city: 'Monterrey', timezone: 'America/Monterrey', country: 'Mexico', countryCode: 'MX', lat: 25.69, lng: -100.32, tier: 3, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1.1M', metroPopulation: '5.3M', phoneCode: '+52 81', language: 'Spanish',
      climate: 'Semi-arid with hot summers (28-36°C) and mild winters (8-20°C). Dramatic mountain backdrop.',
      attractions: ['Cerro de la Silla', 'Macroplaza', 'Fundidora Park', 'MARCO Museum', 'Barrio Antiguo', 'Cola de Caballo', 'García Caves', 'Santa Lucía Riverwalk', 'Chipinque', 'Museo del Noreste'],
      demographics: 'Mexico\'s industrial capital. Wealthiest city per capita. Business-oriented culture.',
      seoContent: {
        intro: 'Monterrey, Mexico\'s industrial powerhouse, operates on Central Standard Time (CST/UTC-6). Surrounded by dramatic mountains, this business-oriented city offers a different face of Mexico with strong work ethic and modern infrastructure.',
        timezoneFacts: 'Same timezone as Mexico City. Close to US border (2 hours to Laredo). Business ties with Texas.',
        bestTimeToVisit: 'October-April for cooler weather. Summer is very hot. Mountains offer year-round activities.',
        businessHours: 'Offices 9 AM to 6 PM. Most business-focused Mexican city. American-influenced work culture.',
        timeDifference: 'Monterrey is UTC-6 (CST) / UTC-5 (CDT). When noon in MTY: NYC 1 PM, London 6 PM, LA 10 AM.',
        daylightSaving: 'Mexico abolished DST in 2022 for most regions except border areas.',
        localTips: 'Cabrito (roasted goat) is specialty. Mountains are dramatic. UANL Tigers football is huge. Very safe compared to reputation.',
        transportation: 'Metrorrey (2 lines). Uber common. Mariano Escobedo Airport (MTY) is 24km from center.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'Mexican holidays. Aniversario de Monterrey (Sep 20).'
      }
    }
  },
  { slug: 'cancun', city: 'Cancún', timezone: 'America/Cancun', country: 'Mexico', countryCode: 'MX', lat: 21.16, lng: -86.85, tier: 3, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '890K', metroPopulation: '900K', phoneCode: '+52 998', language: 'Spanish, English',
      climate: 'Tropical with hot humid weather (25-33°C). Hurricane season June-November. Dry season Dec-Apr.',
      attractions: ['Hotel Zone beaches', 'Chichén Itzá', 'Isla Mujeres', 'Xcaret', 'Tulum', 'Cozumel', 'Underwater Museum', 'Cenotes', 'Playa del Carmen', 'Downtown Cancún'],
      demographics: 'Mexico\'s top resort destination. Purpose-built tourism city. Gateway to Mayan ruins.',
      seoContent: {
        intro: 'Cancún, Mexico\'s premier beach resort, operates on Eastern Standard Time (EST/UTC-5). This Caribbean paradise offers pristine beaches, ancient Mayan ruins, and world-class resorts along the Riviera Maya.',
        timezoneFacts: 'Quintana Roo uses EST year-round (no DST), unlike rest of Mexico. Same as New York in winter.',
        bestTimeToVisit: 'December-April for best weather. Shoulder seasons (May, November) balance price and weather. Hurricane season June-November.',
        businessHours: 'Resorts 24/7. Mayan ruins typically 8 AM to 5 PM. Downtown has regular Mexican hours.',
        timeDifference: 'Cancún is always UTC-5. When noon in Cancún: NYC 12 PM (EST) / 1 PM (EDT), London 5 PM, LA 9 AM.',
        daylightSaving: 'Quintana Roo does NOT observe DST. Stays on EST year-round.',
        localTips: 'Downtown is cheaper than Hotel Zone. Cenotes are unique. Uber works in tourist areas. Spring break is crazy (March).',
        transportation: 'Bus R-1 from downtown to Hotel Zone. Ferries to islands. Cancún Airport (CUN) is 20km from Hotel Zone.',
        emergencyNumbers: 'Emergency: 911. Tourist Police: 998-885-2277.',
        publicHolidays: 'Mexican holidays. Spring Break (March) is unofficial but impactful holiday.'
      }
    }
  },
  { slug: 'tijuana', city: 'Tijuana', timezone: 'America/Tijuana', country: 'Mexico', countryCode: 'MX', lat: 32.53, lng: -117.02, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1.9M', phoneCode: '+52 664', language: 'Spanish, English',
      climate: 'Mediterranean with mild summers (18-26°C) and cool winters (10-18°C). Very little rain, mostly winter.',
      attractions: ['Avenida Revolución', 'Tijuana Cultural Center', 'Playas de Tijuana', 'Valle de Guadalupe nearby', 'Mercado Hidalgo'],
      demographics: 'Mexico\'s largest border city, most crossed border in the world. Major manufacturing hub with booming food and craft beer scene.'
    }
  },
  { slug: 'puebla', city: 'Puebla', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 19.04, lng: -98.20, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1.7M', phoneCode: '+52 222', language: 'Spanish',
      climate: 'Subtropical highland with mild year-round (12-25°C). Rainy season May-October. Pleasant climate.',
      attractions: ['Puebla Cathedral', 'Zócalo', 'Biblioteca Palafoxiana', 'Cholula Pyramid', 'Barrio del Artista'],
      demographics: 'UNESCO World Heritage city with stunning colonial architecture. Known for mole poblano, Talavera pottery, and Cinco de Mayo battle site.'
    }
  },
  { slug: 'leon', city: 'León', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 21.12, lng: -101.69, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1.6M', phoneCode: '+52 477', language: 'Spanish',
      climate: 'Semi-arid with warm days (20-30°C) and cool nights. Rainy season June-September.',
      attractions: ['Parque Metropolitano', 'Arco Triunfal', 'Zona Piel', 'Catedral Basílica', 'Parque Explora'],
      demographics: 'Mexico\'s leather and shoe capital, producing 60% of national footwear. Known as "Shoe Capital of the World".'
    }
  },
  { slug: 'ciudad-juarez', city: 'Ciudad Juárez', timezone: 'America/Ojinaga', country: 'Mexico', countryCode: 'MX', lat: 31.69, lng: -106.42, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1.5M', phoneCode: '+52 656', language: 'Spanish, English',
      climate: 'Hot desert with very hot summers (28-38°C) and cold winters (2-15°C). Very dry, occasional dust storms.',
      attractions: ['Misión de Guadalupe', 'Museo de la Revolución', 'Parque Central', 'Chamizal Park', 'Plaza de la Mexicanidad'],
      demographics: 'Major border city opposite El Paso, Texas. One of largest maquiladora manufacturing centers in Mexico.'
    }
  },
  { slug: 'zapopan', city: 'Zapopan', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 20.72, lng: -103.39, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1.5M', phoneCode: '+52 33', language: 'Spanish',
      climate: 'Subtropical highland with warm days (18-28°C) and cool nights. Rainy season June-October.',
      attractions: ['Basilica of Our Lady of Zapopan', 'Andares Shopping', 'Bosque Los Colomos', 'Arcos de Zapopan', 'MAZ Museum'],
      demographics: 'Part of Guadalajara metro, Mexico\'s tech hub. Home to major IT companies and startups, nicknamed "Mexican Silicon Valley".'
    }
  },
  { slug: 'merida', city: 'Mérida', timezone: 'America/Merida', country: 'Mexico', countryCode: 'MX', lat: 20.97, lng: -89.59, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1M', phoneCode: '+52 999', language: 'Spanish, Yucatec Maya',
      climate: 'Tropical savanna with hot humid weather (24-36°C). Rainy season May-October. Hottest months April-May.',
      attractions: ['Plaza Grande', 'Paseo de Montejo', 'Mayan World Museum', 'Uxmal ruins', 'Celestún Biosphere'],
      demographics: 'Capital of Yucatán, "White City" for limestone buildings. Gateway to Mayan ruins, safest large city in Mexico.'
    }
  },
  { slug: 'san-luis-potosi', city: 'San Luis Potosí', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 22.15, lng: -100.98, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '870K', phoneCode: '+52 444', language: 'Spanish',
      climate: 'Semi-arid highland with warm days (18-28°C) and cool nights (5-15°C). Rainy season June-September.',
      attractions: ['Plaza de Armas', 'Templo del Carmen', 'Museo Nacional de la Máscara', 'Real de Catorce', 'Tangamanga Park'],
      demographics: 'Colonial silver city with baroque architecture. Major automotive manufacturing hub (BMW, GM) in central Mexico.'
    }
  },
  { slug: 'aguascalientes', city: 'Aguascalientes', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 21.88, lng: -102.29, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '950K', phoneCode: '+52 449', language: 'Spanish',
      climate: 'Semi-arid with warm days (20-30°C) and cool nights. Pleasant year-round, little humidity.',
      attractions: ['Feria Nacional de San Marcos', 'Jardín de San Marcos', 'Museo Descubre', 'Baños Termales', 'Cathedral'],
      demographics: 'Named for hot springs, hosts Mexico\'s biggest fair (San Marcos). Automotive and textile manufacturing center.'
    }
  },
  { slug: 'queretaro', city: 'Querétaro', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 20.59, lng: -100.39, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1M', phoneCode: '+52 442', language: 'Spanish',
      climate: 'Semi-arid highland with warm days (18-28°C) and cool nights. Rainy season June-September.',
      attractions: ['Centro Histórico (UNESCO)', 'Aqueduct', 'Templo de Santa Rosa', 'Peña de Bernal', 'Viñedos'],
      demographics: 'UNESCO World Heritage city, fastest-growing in Mexico. Aerospace industry hub (Bombardier, Safran) with high quality of life.'
    }
  },
  { slug: 'morelia', city: 'Morelia', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 19.70, lng: -101.19, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '850K', phoneCode: '+52 443', language: 'Spanish',
      climate: 'Subtropical highland with mild temperatures (12-26°C). Rainy season June-October. Pleasant year-round.',
      attractions: ['Morelia Cathedral', 'Aqueduct', 'Santuario de Guadalupe', 'Monarch Butterfly Sanctuary', 'Janitzio Island'],
      demographics: 'Capital of Michoacán, UNESCO World Heritage city. Birthplace of independence hero Morelos, gateway to monarch butterflies.'
    }
  },
  { slug: 'saltillo', city: 'Saltillo', timezone: 'America/Monterrey', country: 'Mexico', countryCode: 'MX', lat: 25.42, lng: -101.00, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '830K', phoneCode: '+52 844', language: 'Spanish',
      climate: 'Semi-arid highland with hot summers (25-33°C) and cold winters (5-18°C). Can see snow occasionally.',
      attractions: ['Catedral de Santiago', 'Museo del Desierto', 'Plaza de Armas', 'Alameda Zaragoza', 'Sierra de Arteaga'],
      demographics: 'Capital of Coahuila, oldest city in northern Mexico. Major automotive manufacturing (Chrysler, GM) and sarape textiles.'
    }
  },
  { slug: 'hermosillo', city: 'Hermosillo', timezone: 'America/Hermosillo', country: 'Mexico', countryCode: 'MX', lat: 29.07, lng: -110.96, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '900K', phoneCode: '+52 662', language: 'Spanish',
      climate: 'Hot desert with extreme summers (35-45°C) and mild winters (10-25°C). One of Mexico\'s hottest cities.',
      attractions: ['Plaza Zaragoza', 'Cerro de la Campana', 'Museo de Sonora', 'Catedral de la Asunción', 'Bahía de Kino nearby'],
      demographics: 'Capital of Sonora, gateway to Sea of Cortez. Ford manufacturing plant, cattle ranching, and agricultural center.'
    }
  },
  { slug: 'mexicali', city: 'Mexicali', timezone: 'America/Tijuana', country: 'Mexico', countryCode: 'MX', lat: 32.66, lng: -115.47, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '1M', phoneCode: '+52 686', language: 'Spanish, English',
      climate: 'Hot desert with extreme summers (40-50°C) and mild winters (8-22°C). Hottest city in Mexico.',
      attractions: ['La Chinesca', 'Sol del Niño Museum', 'Catedral de Nuestra Señora', 'Bosque de la Ciudad', 'Cañón de Guadalupe'],
      demographics: 'Capital of Baja California, large Chinese community (La Chinesca). Major agricultural region and maquiladora manufacturing.'
    }
  },
  { slug: 'culiacan', city: 'Culiacán', timezone: 'America/Mazatlan', country: 'Mexico', countryCode: 'MX', lat: 24.81, lng: -107.39, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '960K', phoneCode: '+52 667', language: 'Spanish',
      climate: 'Semi-arid with hot summers (30-40°C) and mild winters (15-28°C). Rainy season July-September.',
      attractions: ['Centro de Ciencias', 'Catedral Basílica', 'Jardín Botánico', 'Plazuela Obregón', 'Las Riberas Park'],
      demographics: 'Capital of Sinaloa, major agricultural hub producing tomatoes and corn. University city with growing economy.'
    }
  },
  { slug: 'chihuahua', city: 'Chihuahua', timezone: 'America/Chihuahua', country: 'Mexico', countryCode: 'MX', lat: 28.63, lng: -106.07, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '930K', phoneCode: '+52 614', language: 'Spanish',
      climate: 'Semi-arid with hot summers (28-35°C) and cold winters (0-15°C). Large temperature variations.',
      attractions: ['Catedral de Chihuahua', 'Quinta Gameros', 'Chepe Train to Copper Canyon', 'Museo Casa Chihuahua', 'Grutas Nombre de Dios'],
      demographics: 'Capital of Mexico\'s largest state, gateway to Copper Canyon. Named for the dog breed, major manufacturing center.'
    }
  },
  { slug: 'toluca', city: 'Toluca', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 19.29, lng: -99.66, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '940K', phoneCode: '+52 722', language: 'Spanish',
      climate: 'Subtropical highland, one of Mexico\'s coldest cities (8-20°C). Can drop below freezing in winter.',
      attractions: ['Cosmovitral', 'Nevado de Toluca', 'Portales', 'Catedral de Toluca', 'Centro Cultural Mexiquense'],
      demographics: 'Capital of Estado de México, highest major city in Mexico (2,680m). Industrial hub near Mexico City with chorizo tradition.'
    }
  },
  { slug: 'acapulco', city: 'Acapulco', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 16.85, lng: -99.88, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '780K', phoneCode: '+52 744', language: 'Spanish',
      climate: 'Tropical with hot humid weather (26-32°C). Rainy season June-October, dry November-May.',
      attractions: ['La Quebrada Cliff Divers', 'Costera Beach', 'Fort of San Diego', 'Isla de la Roqueta', 'Pie de la Cuesta'],
      demographics: 'Mexico\'s original resort destination, famous for cliff divers. Historic Pacific port and 1950s Hollywood glamour.'
    }
  },
  { slug: 'veracruz', city: 'Veracruz', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 19.18, lng: -96.14, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '610K', phoneCode: '+52 229', language: 'Spanish',
      climate: 'Tropical with hot humid weather (24-32°C). Rainy season June-October. Norte winds in winter.',
      attractions: ['Malecón', 'San Juan de Ulúa', 'Zócalo', 'Acuario de Veracruz', 'Boca del Río'],
      demographics: 'Mexico\'s oldest and largest port, where Cortés landed. Known for music, dance (son jarocho), and seafood.'
    }
  },
  { slug: 'oaxaca', city: 'Oaxaca', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 17.07, lng: -96.72, tier: 2, continent: 'americas',
    info: {
      currency: 'Mexican Peso', currencySymbol: '$', population: '270K', phoneCode: '+52 951', language: 'Spanish, Zapotec, Mixtec',
      climate: 'Subtropical highland with mild weather (14-28°C). Rainy season May-October. Pleasant year-round.',
      attractions: ['Monte Albán', 'Zócalo', 'Santo Domingo Church', 'Hierve el Agua', 'Mezcal distilleries'],
      demographics: 'UNESCO World Heritage city, center of indigenous Zapotec culture. Famous for mezcal, mole negro, and Day of the Dead.'
    }
  },

  // Europe
  { slug: 'manchester', city: 'Manchester', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.48, lng: -2.24, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '550K', metroPopulation: '2.8M', phoneCode: '+44 161', language: 'English',
      climate: 'Oceanic with mild temperatures (4-20°C). Frequent rain. Famous for grey skies.',
      attractions: ['Old Trafford', 'Etihad Stadium', 'Museum of Science and Industry', 'Northern Quarter', 'Manchester Cathedral', 'John Rylands Library', 'Beetham Tower', 'MediaCityUK', 'Manchester Art Gallery', 'Castlefield'],
      demographics: 'England\'s second city. Birthplace of Industrial Revolution. Football mad - United and City.',
      seoContent: {
        intro: 'Manchester operates on Greenwich Mean Time (GMT/UTC+0) in winter and British Summer Time (BST/UTC+1) in summer. The birthplace of the Industrial Revolution, modern Manchester is renowned for football, music, and cultural innovation.',
        timezoneFacts: 'Same timezone as London. 5 hours ahead of New York. Home to two of the world\'s most famous football clubs.',
        bestTimeToVisit: 'May-September for warmer weather. December for Christmas markets. Football season August-May.',
        businessHours: 'Shops 9 AM to 6 PM. Northern Quarter has independent hours. Match days transform the city.',
        timeDifference: 'Manchester is UTC+0 (GMT) / UTC+1 (BST). When noon: NYC 7 AM, Dubai 4 PM, Sydney 10 PM.',
        daylightSaving: 'BST runs last Sunday of March to last Sunday of October.',
        localTips: 'Don\'t mention United to City fans (or vice versa). Curry Mile in Rusholme. Music heritage from Oasis to The Smiths.',
        transportation: 'Metrolink tram system. Good rail connections. Manchester Airport (MAN) is 10 miles from center.',
        emergencyNumbers: 'Emergency: 999 or 112.',
        publicHolidays: 'UK Bank Holidays. Pride (August) is one of UK\'s largest.'
      }
    }
  },
  { slug: 'birmingham', city: 'Birmingham', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 52.49, lng: -1.90, tier: 3, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '1.1M', metroPopulation: '4.3M', phoneCode: '+44 121', language: 'English',
      climate: 'Oceanic with mild temperatures (3-21°C). Less rainy than Manchester.',
      attractions: ['Cadbury World', 'Birmingham Museum', 'Bullring', 'Jewellery Quarter', 'Library of Birmingham', 'Symphony Hall', 'Balti Triangle', 'Brindleyplace', 'Thinktank', 'Back to Backs'],
      demographics: 'England\'s second-largest city. Very diverse. Balti curry origin. Peaky Blinders heritage.',
      seoContent: {
        intro: 'Birmingham operates on GMT/UTC+0 in winter and BST/UTC+1 in summer. This diverse industrial city has reinvented itself with world-class culture, cuisine, and connectivity.',
        timezoneFacts: 'Same timezone as London. Central England location makes it UK\'s transport hub.',
        bestTimeToVisit: 'May-September for events. Frankfurt Christmas Market (Nov-Dec) is Europe\'s largest outside Germany.',
        businessHours: 'Shops 9 AM to 6 PM. Bullring until 8 PM. Balti Triangle restaurants open late.',
        timeDifference: 'Birmingham is UTC+0 (GMT) / UTC+1 (BST). When noon: NYC 7 AM, Dubai 4 PM.',
        daylightSaving: 'BST runs last Sunday of March to last Sunday of October.',
        localTips: 'Balti was invented here. More canals than Venice. "Brummie" accent is distinct.',
        transportation: 'Metro tram. Good rail - 1h20 to London. Birmingham Airport (BHX) is 10 miles from center.',
        emergencyNumbers: 'Emergency: 999 or 112.',
        publicHolidays: 'UK Bank Holidays. Frankfurt Christmas Market (November-December).'
      }
    }
  },
  { slug: 'edinburgh', city: 'Edinburgh', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 55.95, lng: -3.19, tier: 3, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '540K', metroPopulation: '1.4M', phoneCode: '+44 131', language: 'English, Scots',
      climate: 'Oceanic with cool summers (12-19°C) and cold winters (1-7°C). Can be windy.',
      attractions: ['Edinburgh Castle', 'Royal Mile', 'Arthur\'s Seat', 'Holyrood Palace', 'Scottish Parliament', 'Calton Hill', 'Old Town', 'New Town', 'National Museum', 'Princes Street Gardens'],
      demographics: 'Scotland\'s capital. UNESCO World Heritage old and new towns. Major festival city.',
      seoContent: {
        intro: 'Edinburgh operates on GMT/UTC+0 in winter and BST/UTC+1 in summer. This UNESCO World Heritage city offers dramatic castle views, rich history, and the world\'s largest arts festival.',
        timezoneFacts: 'Same timezone as London. August Festival transforms the city entirely.',
        bestTimeToVisit: 'August for festivals (book far ahead). May-June for pleasant weather. Hogmanay is legendary.',
        businessHours: 'Shops 9 AM to 6 PM. Royal Mile touristy but essential. Pubs until 1 AM.',
        timeDifference: 'Edinburgh is UTC+0 (GMT) / UTC+1 (BST). When noon: NYC 7 AM, Dubai 4 PM.',
        daylightSaving: 'BST runs last Sunday of March to last Sunday of October.',
        localTips: 'Book Festival accommodation months ahead. Haggis is actually good. "Auld Reekie" is old nickname.',
        transportation: 'Trams to airport. Excellent walking city. Edinburgh Airport (EDI) is 8 miles from center.',
        emergencyNumbers: 'Emergency: 999 or 112.',
        publicHolidays: 'UK Bank Holidays plus Scottish holidays. Edinburgh Festival (August), Hogmanay (Dec 31).'
      }
    }
  },
  { slug: 'glasgow', city: 'Glasgow', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 55.86, lng: -4.25, tier: 3, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '635K', metroPopulation: '1.8M', phoneCode: '+44 141', language: 'English, Scots',
      climate: 'Oceanic with cool summers (12-19°C) and cold winters (1-7°C). Rainier than Edinburgh.',
      attractions: ['Kelvingrove Museum', 'Glasgow Cathedral', 'Riverside Museum', 'Necropolis', 'George Square', 'West End', 'The Barras', 'Buchanan Street', 'Mackintosh Buildings', 'Science Centre'],
      demographics: 'Scotland\'s largest city. Industrial heritage. Friendly locals. Football rivalry (Celtic/Rangers).',
      seoContent: {
        intro: 'Glasgow operates on GMT/UTC+0 in winter and BST/UTC+1 in summer. This former industrial powerhouse has transformed into a cultural capital with world-class museums and legendary nightlife.',
        timezoneFacts: 'Same timezone as London. 40 minutes from Edinburgh by train.',
        bestTimeToVisit: 'May-September for best weather. Celtic Connections (January) for music. West End Festival (June).',
        businessHours: 'Shops 9 AM to 6 PM. Legendary nightlife runs late. Sunday shopping limited.',
        timeDifference: 'Glasgow is UTC+0 (GMT) / UTC+1 (BST). When noon: NYC 7 AM, Dubai 4 PM.',
        daylightSaving: 'BST runs last Sunday of March to last Sunday of October.',
        localTips: 'Locals are famously friendly. Don\'t confuse Celtic and Rangers fans. "Pure dead brilliant" means great.',
        transportation: 'Subway (clockwork orange). Buses and trains. Glasgow Airport (GLA) is 8 miles from center.',
        emergencyNumbers: 'Emergency: 999 or 112.',
        publicHolidays: 'UK Bank Holidays plus Scottish holidays. Celtic Connections (January).'
      }
    }
  },
  { slug: 'lyon', city: 'Lyon', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 45.76, lng: 4.84, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '520K', metroPopulation: '2.3M', phoneCode: '+33 4', language: 'French',
      climate: 'Semi-continental with warm summers (20-28°C) and cold winters (1-8°C).',
      attractions: ['Vieux Lyon', 'Basilica of Notre-Dame de Fourvière', 'Traboules', 'Place Bellecour', 'Parc de la Tête d\'Or', 'Musée des Confluences', 'Les Halles de Lyon', 'Presqu\'île', 'Roman Theaters', 'Institut Lumière'],
      demographics: 'France\'s gastronomic capital. UNESCO World Heritage. Silk industry heritage.',
      seoContent: {
        intro: 'Lyon, France\'s gastronomic capital, operates on Central European Time (CET/UTC+1). This UNESCO World Heritage city at the confluence of the Rhône and Saône rivers is renowned for cuisine and Renaissance architecture.',
        timezoneFacts: 'Same timezone as Paris. 2 hours from Paris by TGV. Gateway to French Alps.',
        bestTimeToVisit: 'May-September for best weather. December for Festival of Lights. Fall for Beaujolais.',
        businessHours: 'Shops 10 AM to 7 PM. Bouchons for lunch and dinner. Markets Saturday mornings.',
        timeDifference: 'Lyon is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM, Tokyo 8 PM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Bouchons are essential. Traboules are hidden passageways. Festival of Lights (Dec 8) is magical.',
        transportation: 'Metro, trams, and buses. TGV hub. Lyon-Saint Exupéry Airport (LYS) is 25km from center.',
        emergencyNumbers: 'Emergency: 112 or 15 (medical).',
        publicHolidays: 'French holidays. Fête des Lumières (December 8).'
      }
    }
  },
  { slug: 'marseille', city: 'Marseille', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.30, lng: 5.37, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '870K', metroPopulation: '1.8M', phoneCode: '+33 4', language: 'French',
      climate: 'Mediterranean with hot dry summers (22-30°C) and mild winters (6-12°C). 300 days of sunshine.',
      attractions: ['Vieux-Port', 'Notre-Dame de la Garde', 'Calanques', 'MuCEM', 'Château d\'If', 'Le Panier', 'Cours Julien', 'Palais Longchamp', 'Corniche Kennedy', 'Frioul Islands'],
      demographics: 'France\'s oldest and second-largest city. Mediterranean melting pot. Historic port.',
      seoContent: {
        intro: 'Marseille, France\'s oldest city, operates on Central European Time (CET/UTC+1). This Mediterranean port city offers stunning coastal scenery, multicultural energy, and 2,600 years of history.',
        timezoneFacts: 'Same timezone as Paris. France\'s main Mediterranean port.',
        bestTimeToVisit: 'April-October for beach weather. Summer can be hot and crowded. Calanques best in spring/fall.',
        businessHours: 'Shops 10 AM to 7 PM. Fish market at Vieux-Port is morning only. Mediterranean pace.',
        timeDifference: 'Marseille is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Bouillabaisse is the signature dish. Pastis before dinner. Calanques require advance reservation in summer.',
        transportation: 'Metro and trams. Ferry to Corsica and North Africa. Marseille Provence Airport (MRS) is 27km.',
        emergencyNumbers: 'Emergency: 112 or 15 (medical).',
        publicHolidays: 'French holidays.'
      }
    }
  },
  { slug: 'nice', city: 'Nice', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.71, lng: 7.26, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '340K', metroPopulation: '1M', phoneCode: '+33 4', language: 'French',
      climate: 'Mediterranean with hot summers (22-28°C) and mild winters (8-14°C). 300+ days of sunshine.',
      attractions: ['Promenade des Anglais', 'Vieux Nice', 'Castle Hill', 'Place Masséna', 'Cours Saleya Market', 'Matisse Museum', 'Chagall Museum', 'Russian Orthodox Cathedral', 'Port Lympia', 'Mont Boron'],
      demographics: 'French Riviera capital. Aristocratic resort heritage. Italian influence. Art deco architecture.',
      seoContent: {
        intro: 'Nice, jewel of the French Riviera, operates on Central European Time (CET/UTC+1). This glamorous Mediterranean resort combines Belle Époque elegance, azure seas, and outstanding art museums.',
        timezoneFacts: 'Same timezone as Paris. Gateway to Monaco and Italian Riviera.',
        bestTimeToVisit: 'May-October for beach weather. February for Carnival. Year-round mild climate.',
        businessHours: 'Shops 10 AM to 7 PM. Beach clubs and restaurants open late in summer.',
        timeDifference: 'Nice is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Socca (chickpea pancake) is local specialty. Salade Niçoise from here. Monaco is 20 minutes away.',
        transportation: 'Tram line 1 connects city. Buses along coast. Nice Côte d\'Azur Airport (NCE) is 6km from center.',
        emergencyNumbers: 'Emergency: 112 or 15 (medical).',
        publicHolidays: 'French holidays. Nice Carnival (February).'
      }
    }
  },
  { slug: 'hamburg', city: 'Hamburg', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 53.55, lng: 9.99, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '1.9M', metroPopulation: '5.4M', phoneCode: '+49 40', language: 'German',
      climate: 'Oceanic with cool summers (17-22°C) and cold winters (0-5°C). Rainy. Maritime influence.',
      attractions: ['Speicherstadt', 'Elbphilharmonie', 'Miniatur Wunderland', 'Reeperbahn', 'St. Pauli', 'Hafencity', 'Planten un Blomen', 'St. Michael\'s Church', 'Fish Market', 'Blankenese'],
      demographics: 'Germany\'s second city. Major port. Media and music hub. Beatles connection.',
      seoContent: {
        intro: 'Hamburg, Germany\'s gateway to the world, operates on Central European Time (CET/UTC+1). This maritime city combines world-class culture, historic warehouses, and legendary nightlife.',
        timezoneFacts: 'Same timezone as Berlin. Germany\'s largest port. Strong ties to Scandinavia.',
        bestTimeToVisit: 'May-September for best weather. December for Christmas markets. Fish market Sunday mornings.',
        businessHours: 'Shops 10 AM to 8 PM. Reeperbahn never sleeps. Sunday shopping limited.',
        timeDifference: 'Hamburg is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Fish sandwich at the harbor is essential. Beatles played Star Club. Elbphilharmonie plaza is free.',
        transportation: 'U-Bahn and S-Bahn excellent. Harbor ferries scenic. Hamburg Airport (HAM) is 10km from center.',
        emergencyNumbers: 'Emergency: 112. Police: 110.',
        publicHolidays: 'German holidays. Hafengeburtstag (Port anniversary, May).'
      }
    }
  },
  { slug: 'cologne', city: 'Cologne', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.94, lng: 6.96, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '1.1M', metroPopulation: '2.1M', phoneCode: '+49 221', language: 'German',
      climate: 'Oceanic with warm summers (18-24°C) and mild winters (1-6°C). Can be rainy.',
      attractions: ['Cologne Cathedral', 'Old Town', 'Hohenzollern Bridge', 'Romano-Germanic Museum', 'Chocolate Museum', 'Ludwig Museum', 'Belgian Quarter', 'Rheinauhafen', '4711 House', 'Flora Botanical Garden'],
      demographics: 'Rhineland\'s largest city. 2000 year history. Carnival capital. Kölsch beer and culture.',
      seoContent: {
        intro: 'Cologne (Köln), city of the famous cathedral, operates on Central European Time (CET/UTC+1). This 2,000-year-old Roman city offers Gothic splendor and Germany\'s most exuberant Carnival.',
        timezoneFacts: 'Same timezone as Berlin. Central location for European business.',
        bestTimeToVisit: 'April-October for pleasant weather. February for Carnival. December for Christmas markets.',
        businessHours: 'Shops 10 AM to 8 PM. Kölsch beer halls open all day. Carnival means closures.',
        timeDifference: 'Cologne is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Kölsch must be drunk in Cologne. Cathedral is free. Love locks on Hohenzollern Bridge.',
        transportation: 'U-Bahn and S-Bahn. High-speed rail hub. Cologne Bonn Airport (CGN) is 15km.',
        emergencyNumbers: 'Emergency: 112. Police: 110.',
        publicHolidays: 'German holidays. Carnival (before Lent) is huge.'
      }
    }
  },
  { slug: 'dusseldorf', city: 'Düsseldorf', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.23, lng: 6.78, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '620K', metroPopulation: '1.5M', phoneCode: '+49 211', language: 'German',
      climate: 'Oceanic with warm summers (18-24°C) and mild winters (1-5°C). Similar to Cologne.',
      attractions: ['Altstadt', 'Königsallee', 'MedienHafen', 'Rheinturm', 'Kunstsammlung', 'Old Town Bars', 'Japanese Quarter', 'Schloss Benrath', 'Hofgarten', 'Neanderthal Museum'],
      demographics: 'Fashion and business capital. Strong Japanese community. Art and architecture hub.',
      seoContent: {
        intro: 'Düsseldorf, Germany\'s fashion capital, operates on Central European Time (CET/UTC+1). This elegant Rhine city combines high-end shopping, cutting-edge architecture, and the "longest bar in the world."',
        timezoneFacts: 'Same timezone as Berlin. Japan\'s largest European community. Major trade fair city.',
        bestTimeToVisit: 'May-September for best weather. December for Christmas markets. Carnival in February.',
        businessHours: 'Shops 10 AM to 8 PM. Altstadt bars open late. Königsallee for luxury shopping.',
        timeDifference: 'Düsseldorf is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Altbier is the local beer. 260+ bars in the Altstadt. Japanese food is excellent.',
        transportation: 'U-Bahn and trams. High-speed rail. Düsseldorf Airport (DUS) is 8km - Germany\'s 3rd largest.',
        emergencyNumbers: 'Emergency: 112. Police: 110.',
        publicHolidays: 'German holidays. Carnival, Japan Day (May).'
      }
    }
  },
  { slug: 'florence', city: 'Florence', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 43.77, lng: 11.25, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '380K', metroPopulation: '1M', phoneCode: '+39 055', language: 'Italian',
      climate: 'Humid subtropical with hot summers (25-32°C) and mild winters (3-11°C).',
      attractions: ['Uffizi Gallery', 'Duomo', 'Ponte Vecchio', 'Accademia Gallery', 'Palazzo Pitti', 'Piazzale Michelangelo', 'Santa Croce', 'Boboli Gardens', 'San Lorenzo Market', 'Oltrarno'],
      demographics: 'Birthplace of the Renaissance. Art capital of the world. Tuscan heritage.',
      seoContent: {
        intro: 'Florence, birthplace of the Renaissance, operates on Central European Time (CET/UTC+1). This open-air museum holds more masterpieces per square mile than anywhere on Earth.',
        timezoneFacts: 'Same timezone as Rome. Heart of Tuscany. 1.5 hours to Rome by train.',
        bestTimeToVisit: 'April-May and September-October for fewer crowds. Summer is hot and packed.',
        businessHours: 'Museums close Mondays. Restaurants 12-3 PM, 7-11 PM. Afternoon riposo observed.',
        timeDifference: 'Florence is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Book Uffizi weeks ahead. Bistecca alla fiorentina is enormous. Gelato, not ice cream.',
        transportation: 'Walking city. Buses and trams limited. Florence Airport (FLR) small; Pisa Airport 80km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Italian holidays. Calcio Storico (June).'
      }
    }
  },
  { slug: 'venice', city: 'Venice', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.44, lng: 12.32, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '260K', metroPopulation: '850K', phoneCode: '+39 041', language: 'Italian',
      climate: 'Humid subtropical with warm summers (23-28°C) and cold damp winters (0-7°C). Acqua alta flooding.',
      attractions: ['St. Mark\'s Square', 'Doge\'s Palace', 'Rialto Bridge', 'Grand Canal', 'Murano Glass', 'Burano', 'Gallerie dell\'Accademia', 'La Fenice', 'Peggy Guggenheim', 'Lido Beach'],
      demographics: 'Unique floating city. 118 islands. UNESCO World Heritage. Overtourism concerns.',
      seoContent: {
        intro: 'Venice, the floating city, operates on Central European Time (CET/UTC+1). Built on 118 islands with 400 bridges and no cars, Venice is unlike anywhere else on Earth.',
        timezoneFacts: 'Same timezone as Rome. 4 hours from Munich by train.',
        bestTimeToVisit: 'April-May and September-October ideal. Summer is crowded. Carnival in February.',
        businessHours: 'Tourist areas open long hours. Get lost in quieter sestieri.',
        timeDifference: 'Venice is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Get lost on purpose. Cicchetti (bar snacks) are essential. Vaporetto is water bus.',
        transportation: 'Vaporetto water buses. Water taxis expensive. Venice Marco Polo Airport (VCE) is 13km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Italian holidays. Carnival (February), Biennale, Regata Storica (September).'
      }
    }
  },
  { slug: 'naples', city: 'Naples', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 40.85, lng: 14.27, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '960K', metroPopulation: '3.1M', phoneCode: '+39 081', language: 'Italian, Neapolitan',
      climate: 'Mediterranean with hot summers (25-31°C) and mild winters (5-13°C). Sunny.',
      attractions: ['Pompeii', 'Amalfi Coast', 'Naples Underground', 'Castel dell\'Ovo', 'Spaccanapoli', 'Archaeological Museum', 'Mount Vesuvius', 'Capri', 'Royal Palace', 'Catacombs'],
      demographics: 'Southern Italy\'s largest city. Birthplace of pizza. Chaotic but charming.',
      seoContent: {
        intro: 'Naples, birthplace of pizza, operates on Central European Time (CET/UTC+1). This intense, chaotic city is the gateway to Pompeii, Vesuvius, and the Amalfi Coast.',
        timezoneFacts: 'Same timezone as Rome. Gateway to Southern Italy.',
        bestTimeToVisit: 'April-June and September-October. Summer is hot. Avoid August.',
        businessHours: 'Variable hours. Pizzerias open lunch and dinner. Markets morning only.',
        timeDifference: 'Naples is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Pizza here is the original. Watch for pickpockets. Embrace the chaos. Coffee is serious.',
        transportation: 'Metro Line 1 is art museum. Circumvesuviana to Pompeii. Naples Airport (NAP) is 7km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Italian holidays. San Gennaro (September 19).'
      }
    }
  },
  { slug: 'valencia', city: 'Valencia', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 39.47, lng: -0.38, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '800K', metroPopulation: '1.8M', phoneCode: '+34 96', language: 'Spanish, Valencian',
      climate: 'Mediterranean with hot summers (25-31°C) and mild winters (8-17°C). 300 days of sunshine.',
      attractions: ['City of Arts and Sciences', 'La Lonja', 'Central Market', 'Old Town', 'Beaches', 'Bioparc', 'Cathedral', 'Turia Gardens', 'Albufera', 'Barrio del Carmen'],
      demographics: 'Spain\'s third city. Paella\'s birthplace. Innovation meets tradition.',
      seoContent: {
        intro: 'Valencia, birthplace of paella, operates on Central European Time (CET/UTC+1). Spain\'s third city combines futuristic architecture, historic old town, and Mediterranean beaches.',
        timezoneFacts: 'Same timezone as Madrid despite being further east.',
        bestTimeToVisit: 'Year-round destination. March for Fallas festival. Summer for beaches.',
        businessHours: 'Shops 10 AM to 2 PM, 5-9 PM. Long lunches. Restaurants 1-4 PM, 9 PM-midnight.',
        timeDifference: 'Valencia is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Paella for lunch only (tradition). Fallas burns giant sculptures. City of Arts is stunning.',
        transportation: 'Metro and tram. Bike-friendly. Valencia Airport (VLC) is 8km from center.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Spanish holidays. Fallas (March 15-19) is UNESCO heritage.'
      }
    }
  },
  { slug: 'seville', city: 'Seville', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 37.39, lng: -5.99, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '690K', metroPopulation: '1.5M', phoneCode: '+34 95', language: 'Spanish',
      climate: 'Mediterranean with very hot summers (28-36°C) and mild winters (6-16°C). Spain\'s hottest city.',
      attractions: ['Alcázar', 'Cathedral & Giralda', 'Plaza de España', 'Barrio Santa Cruz', 'Triana', 'Metropol Parasol', 'Maria Luisa Park', 'Flamenco Shows', 'Torre del Oro', 'Archivo de Indias'],
      demographics: 'Andalusian capital. Flamenco and bullfighting heartland. Moorish heritage.',
      seoContent: {
        intro: 'Seville, the heart of Andalusia, operates on Central European Time (CET/UTC+1). This passionate city of flamenco, tapas, and Moorish palaces is the cultural soul of Southern Spain.',
        timezoneFacts: 'Same timezone as Madrid. Hottest major city in Spain.',
        bestTimeToVisit: 'March-May and October-November. Summer is brutally hot (40°C+). April for Feria.',
        businessHours: 'Long siesta tradition. Shops close 2-5 PM. Dinner after 9 PM. Tapas all evening.',
        timeDifference: 'Seville is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Tapas are often free with drinks. Flamenco in Triana. Avoid summer heat. Feria is spectacular.',
        transportation: 'Tram and metro. Walking is best. Seville Airport (SVQ) is 10km from center.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Spanish holidays. Semana Santa (Easter), Feria de Abril.'
      }
    }
  },
  { slug: 'porto', city: 'Porto', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 41.15, lng: -8.61, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '240K', metroPopulation: '1.7M', phoneCode: '+351 22', language: 'Portuguese',
      climate: 'Mediterranean with warm summers (20-26°C) and mild wet winters (6-14°C). More rain than Lisbon.',
      attractions: ['Ribeira', 'Livraria Lello', 'Dom Luís I Bridge', 'Clérigos Tower', 'Port Wine Cellars', 'São Bento Station', 'Serralves', 'Foz do Douro', 'Majestic Café', 'Crystal Palace Gardens'],
      demographics: 'Portugal\'s second city. Port wine origin. UNESCO World Heritage. Gritty and authentic.',
      seoContent: {
        intro: 'Porto, Portugal\'s northern capital, operates on Western European Time (WET/UTC+0). This UNESCO World Heritage city on the Douro River is famous for port wine and azulejo tiles.',
        timezoneFacts: 'Same timezone as London and Lisbon. Port wine cellars across the river in Gaia.',
        bestTimeToVisit: 'May-September for best weather. June for São João festival. Winter can be rainy.',
        businessHours: 'Shops 10 AM to 7 PM. Port wine cellars open all day. Restaurants 12-3 PM, 7-11 PM.',
        timeDifference: 'Porto is UTC+0 (WET) / UTC+1 (WEST). When noon: NYC 7 AM, Madrid 1 PM.',
        daylightSaving: 'WEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Francesinha sandwich is iconic. Book Livraria Lello in advance. Port wine tastings across the river.',
        transportation: 'Metro system excellent. Trams historic. Porto Airport (OPO) is 11km from center.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Portuguese holidays. São João (June 23-24).'
      }
    }
  },
  { slug: 'rotterdam', city: 'Rotterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.92, lng: 4.48, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '650K', metroPopulation: '1.4M', phoneCode: '+31 10', language: 'Dutch, English',
      climate: 'Oceanic with mild summers (17-22°C) and cold winters (2-6°C). Windy and rainy.',
      attractions: ['Cube Houses', 'Markthal', 'Erasmus Bridge', 'Euromast', 'Depot Boijmans', 'Delfshaven', 'Kunsthal', 'SS Rotterdam', 'Witte de Withstraat', 'Fenix Food Factory'],
      demographics: 'Europe\'s largest port. Rebuilt after WWII. Architecture showcase.',
      seoContent: {
        intro: 'Rotterdam, Europe\'s largest port, operates on CET/UTC+1. Rebuilt from WWII ruins, this city is now a showcase of bold modern architecture.',
        timezoneFacts: 'Same as Amsterdam. Major shipping hub.',
        bestTimeToVisit: 'April-September. King\'s Day (April 27).',
        businessHours: 'Shops 10 AM to 6 PM. Markthal open daily.',
        timeDifference: 'Rotterdam is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Architecture tours essential. Markthal for food.',
        transportation: 'Metro, trams, buses. Rotterdam The Hague Airport (RTM) small.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Dutch holidays. King\'s Day (April 27).'
      }
    }
  },
  { slug: 'antwerp', city: 'Antwerp', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 51.22, lng: 4.40, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '530K', metroPopulation: '1.2M', phoneCode: '+32 3', language: 'Dutch, French',
      climate: 'Oceanic with mild summers (17-22°C) and cold winters (1-6°C). Rainy.',
      attractions: ['Cathedral of Our Lady', 'Grote Markt', 'MAS Museum', 'Diamond District', 'Rubens House', 'Central Station', 'Het Steen', 'Meir Shopping', 'Red Star Line Museum', 'Zurenborg'],
      demographics: 'Diamond capital. Fashion hub. Rubens\' birthplace.',
      seoContent: {
        intro: 'Antwerp, the diamond capital, operates on CET/UTC+1. Belgium\'s second city combines Renaissance splendor, cutting-edge fashion, and 80% of the world\'s rough diamond trade.',
        timezoneFacts: 'Same as Brussels. 40 minutes by train.',
        bestTimeToVisit: 'April-September. Christmas market is magical.',
        businessHours: 'Shops 10 AM to 6 PM. Diamond district closes for Shabbat.',
        timeDifference: 'Antwerp is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Central Station is a cathedral. Beer variety immense.',
        transportation: 'Trams and buses. Brussels Airport (BRU) 45km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Belgian holidays.'
      }
    }
  },
  { slug: 'krakow', city: 'Krakow', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 50.06, lng: 19.94, tier: 3, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '780K', metroPopulation: '1.4M', phoneCode: '+48 12', language: 'Polish',
      climate: 'Humid continental with warm summers (18-25°C) and cold winters (-4 to 2°C).',
      attractions: ['Main Square', 'Wawel Castle', 'Kazimierz', 'St. Mary\'s Basilica', 'Cloth Hall', 'Auschwitz-Birkenau', 'Wieliczka Salt Mine', 'Schindler\'s Factory', 'Planty Park', 'Nowa Huta'],
      demographics: 'Poland\'s cultural capital. WWII history. Jewish heritage.',
      seoContent: {
        intro: 'Krakow, Poland\'s royal capital, operates on CET/UTC+1. This beautifully preserved medieval city is Poland\'s cultural heart and gateway to WWII history.',
        timezoneFacts: 'Same as Berlin. Survived WWII intact.',
        bestTimeToVisit: 'May-September. December for Christmas markets.',
        businessHours: 'Shops 10 AM to 6 PM. Kazimierz bars until late.',
        timeDifference: 'Krakow is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Auschwitz requires full day. Obwarzanek (bagel) is local.',
        transportation: 'Trams and buses. John Paul II Airport (KRK) 11km.',
        emergencyNumbers: 'Emergency: 112. Police: 997.',
        publicHolidays: 'Polish holidays.'
      }
    }
  },
  { slug: 'bucharest', city: 'Bucharest', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 44.43, lng: 26.10, tier: 3, continent: 'europe',
    info: {
      currency: 'Romanian Leu', currencySymbol: 'lei', population: '1.8M', metroPopulation: '2.5M', phoneCode: '+40 21', language: 'Romanian',
      climate: 'Humid continental with hot summers (22-30°C) and cold winters (-3 to 4°C).',
      attractions: ['Palace of Parliament', 'Old Town', 'Romanian Athenaeum', 'Village Museum', 'Herăstrău Park', 'Revolution Square', 'Carturesti Carusel', 'Stavropoleos Church', 'Arcul de Triumf', 'Therme Bucharest'],
      demographics: 'Romania\'s capital. Communist architecture alongside Belle Époque.',
      seoContent: {
        intro: 'Bucharest, Romania\'s capital, operates on EET/UTC+2. This fascinating city juxtaposes Ceausescu\'s Palace of Parliament with charming Belle Époque quarters.',
        timezoneFacts: '1 hour ahead of Berlin. Palace of Parliament is world\'s heaviest building.',
        bestTimeToVisit: 'April-June and September-October. Summer hot.',
        businessHours: 'Shops 10 AM to 8 PM. Old Town bars until late.',
        timeDifference: 'Bucharest is UTC+2 (EET) / UTC+3 (EEST). When noon: NYC 5 AM, London 10 AM.',
        daylightSaving: 'EEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Palace tours book ahead. Old Town can be touristy. Great value dining.',
        transportation: 'Metro good. Henri Coandă Airport (OTP) 18km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Romanian holidays. December 1 (National Day).'
      }
    }
  },
  { slug: 'sofia', city: 'Sofia', timezone: 'Europe/Sofia', country: 'Bulgaria', countryCode: 'BG', lat: 42.70, lng: 23.32, tier: 3, continent: 'europe',
    info: {
      currency: 'Bulgarian Lev', currencySymbol: 'лв', population: '1.3M', metroPopulation: '1.5M', phoneCode: '+359 2', language: 'Bulgarian',
      climate: 'Humid continental with warm summers (20-28°C) and cold winters (-2 to 5°C).',
      attractions: ['Alexander Nevsky Cathedral', 'Vitosha Mountain', 'Boyana Church', 'National Palace of Culture', 'Rila Monastery', 'Serdica Ruins', 'St. George Rotunda', 'Ivan Vazov Theatre', 'Central Market Hall', 'South Park'],
      demographics: 'Bulgaria\'s capital. Ancient Thracian heritage. Growing tech hub.',
      seoContent: {
        intro: 'Sofia, Bulgaria\'s capital, operates on EET/UTC+2. One of Europe\'s oldest cities, Sofia offers Roman ruins, Orthodox churches, and ski slopes on its doorstep.',
        timezoneFacts: 'Same as Bucharest and Athens. Vitosha Mountain offers city skiing.',
        bestTimeToVisit: 'April-October for city. December-March for skiing.',
        businessHours: 'Shops 10 AM to 8 PM. Vitosha Boulevard for shopping.',
        timeDifference: 'Sofia is UTC+2 (EET) / UTC+3 (EEST). When noon: NYC 5 AM, London 10 AM.',
        daylightSaving: 'EEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Extremely affordable. Rila Monastery is day trip. Nod means no, shake means yes.',
        transportation: 'Metro expanding. Sofia Airport (SOF) 10km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Bulgarian holidays. March 3 (Liberation Day).'
      }
    }
  },
  { slug: 'belgrade', city: 'Belgrade', timezone: 'Europe/Belgrade', country: 'Serbia', countryCode: 'RS', lat: 44.82, lng: 20.46, tier: 3, continent: 'europe',
    info: {
      currency: 'Serbian Dinar', currencySymbol: 'дин', population: '1.4M', metroPopulation: '1.7M', phoneCode: '+381 11', language: 'Serbian',
      climate: 'Humid continental with hot summers (22-30°C) and cold winters (-1 to 5°C).',
      attractions: ['Kalemegdan Fortress', 'Skadarlija', 'St. Sava Temple', 'Knez Mihailova', 'Ada Ciganlija', 'Zemun', 'National Museum', 'River Clubs', 'Nikola Tesla Museum', 'Royal Palace'],
      demographics: 'Serbia\'s capital. Confluence of Danube and Sava. Legendary nightlife.',
      seoContent: {
        intro: 'Belgrade, Serbia\'s capital at the confluence of two rivers, operates on CET/UTC+1. This resilient city offers rich history, legendary nightlife, and authentic Balkan hospitality.',
        timezoneFacts: 'Same as Vienna. River splavovi (floating clubs) are famous.',
        bestTimeToVisit: 'May-September for outdoor life. Summer for river beaches.',
        businessHours: 'Shops 9 AM to 8 PM. Nightlife starts after midnight.',
        timeDifference: 'Belgrade is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Nightlife is world-class. Ćevapi essential. Rakija is the drink.',
        transportation: 'Buses and trams. No metro. Nikola Tesla Airport (BEG) 18km.',
        emergencyNumbers: 'Emergency: 112 or 192 (police).',
        publicHolidays: 'Serbian holidays. Orthodox Christmas (January 7).'
      }
    }
  },
  { slug: 'zagreb', city: 'Zagreb', timezone: 'Europe/Zagreb', country: 'Croatia', countryCode: 'HR', lat: 45.81, lng: 15.98, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '800K', metroPopulation: '1.1M', phoneCode: '+385 1', language: 'Croatian',
      climate: 'Humid continental with warm summers (20-27°C) and cold winters (-1 to 5°C).',
      attractions: ['Upper Town', 'St. Mark\'s Church', 'Dolac Market', 'Museum of Broken Relationships', 'Maksimir Park', 'Ban Jelačić Square', 'Zagreb Cathedral', 'Mirogoj Cemetery', 'Tkalčićeva Street', 'Art Pavilion'],
      demographics: 'Croatia\'s capital. Central European charm. Less touristy than coast.',
      seoContent: {
        intro: 'Zagreb, Croatia\'s capital, operates on CET/UTC+1. This charming Central European city offers Austro-Hungarian architecture, vibrant café culture, and a gateway to the Adriatic.',
        timezoneFacts: 'Same as Vienna. Croatia adopted Euro in 2023.',
        bestTimeToVisit: 'April-October. December Advent markets among Europe\'s best.',
        businessHours: 'Shops 9 AM to 8 PM. Tkalčićeva for evening bars.',
        timeDifference: 'Zagreb is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Špica is Saturday morning coffee ritual. Day trips to Plitvice.',
        transportation: 'Trams throughout. No metro. Zagreb Airport (ZAG) 17km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Croatian holidays. Statehood Day (May 30).'
      }
    }
  },
  { slug: 'bratislava', city: 'Bratislava', timezone: 'Europe/Bratislava', country: 'Slovakia', countryCode: 'SK', lat: 48.15, lng: 17.11, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '440K', metroPopulation: '660K', phoneCode: '+421 2', language: 'Slovak',
      climate: 'Humid continental with warm summers (20-27°C) and cold winters (-2 to 4°C).',
      attractions: ['Bratislava Castle', 'Old Town', 'St. Martin\'s Cathedral', 'UFO Bridge', 'Cumil Statue', 'Devin Castle', 'Blue Church', 'Michael\'s Gate', 'Presidential Palace', 'Slavín Memorial'],
      demographics: 'Slovakia\'s capital. Only capital bordering two countries. Compact.',
      seoContent: {
        intro: 'Bratislava, Slovakia\'s capital, operates on CET/UTC+1. This compact city on the Danube offers Hapsburg heritage and easy day trips from Vienna.',
        timezoneFacts: 'Same as Vienna (just 60km away). Only capital bordering two countries.',
        bestTimeToVisit: 'April-October. December for Christmas markets.',
        businessHours: 'Shops 9 AM to 6 PM. Old Town cafes all day.',
        timeDifference: 'Bratislava is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Twin City Liner boat to Vienna. Bryndzové halušky is national dish.',
        transportation: 'Trams and buses. Vienna Airport often used.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Slovak holidays.'
      }
    }
  },
  { slug: 'ljubljana', city: 'Ljubljana', timezone: 'Europe/Ljubljana', country: 'Slovenia', countryCode: 'SI', lat: 46.06, lng: 14.51, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '290K', metroPopulation: '540K', phoneCode: '+386 1', language: 'Slovenian',
      climate: 'Oceanic/continental with warm summers (20-27°C) and cold winters (-2 to 4°C).',
      attractions: ['Ljubljana Castle', 'Triple Bridge', 'Dragon Bridge', 'Prešeren Square', 'Tivoli Park', 'Metelkova', 'Central Market', 'National Gallery', 'Ljubljanica River', 'Skyscraper'],
      demographics: 'Slovenia\'s capital. Green European Capital 2016. Gateway to Alps.',
      seoContent: {
        intro: 'Ljubljana, Slovenia\'s charming capital, operates on CET/UTC+1. This green, pedestrian-friendly city offers a fairytale old town and easy access to Lake Bled.',
        timezoneFacts: 'Same as Vienna. Lake Bled is 55km away.',
        bestTimeToVisit: 'May-September for outdoor events. December for festive markets.',
        businessHours: 'Shops 9 AM to 7 PM. Riverside cafes all day.',
        timeDifference: 'Ljubljana is UTC+1 (CET) / UTC+2 (CEST). When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'CEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Jože Plečnik designed much of city. Open Kitchen market Fridays.',
        transportation: 'Buses only. Ljubljana Airport (LJU) 27km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Slovenian holidays. Statehood Day (June 25).'
      }
    }
  },
  { slug: 'tallinn', city: 'Tallinn', timezone: 'Europe/Tallinn', country: 'Estonia', countryCode: 'EE', lat: 59.44, lng: 24.75, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '450K', metroPopulation: '600K', phoneCode: '+372', language: 'Estonian',
      climate: 'Humid continental with mild summers (17-22°C) and cold winters (-5 to -1°C).',
      attractions: ['Old Town', 'Toompea Castle', 'Alexander Nevsky Cathedral', 'Telliskivi Creative City', 'Kadriorg Palace', 'Lennusadam', 'St. Olav\'s Church', 'Town Hall Square', 'KGB Museum', 'Pirita Beach'],
      demographics: 'Estonia\'s capital. Most digitized country. Birthplace of Skype.',
      seoContent: {
        intro: 'Tallinn, Estonia\'s digital capital, operates on EET/UTC+2. This UNESCO medieval city is also the world\'s most digitally advanced.',
        timezoneFacts: '1 hour ahead of Stockholm. Birthplace of Skype.',
        bestTimeToVisit: 'June-August for white nights. December for Christmas markets.',
        businessHours: 'Shops 10 AM to 7 PM. Telliskivi for trendy spots.',
        timeDifference: 'Tallinn is UTC+2 (EET) / UTC+3 (EEST). When noon: NYC 5 AM, London 10 AM.',
        daylightSaving: 'EEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Free WiFi everywhere. Ferry to Helsinki 2 hours. Black bread essential.',
        transportation: 'Free transit for residents. Tallinn Airport (TLL) 4km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Estonian holidays. Independence Day (February 24).'
      }
    }
  },
  { slug: 'riga', city: 'Riga', timezone: 'Europe/Riga', country: 'Latvia', countryCode: 'LV', lat: 56.95, lng: 24.11, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '630K', metroPopulation: '1M', phoneCode: '+371', language: 'Latvian',
      climate: 'Humid continental with mild summers (17-23°C) and cold winters (-5 to 0°C).',
      attractions: ['Old Riga', 'House of the Blackheads', 'Art Nouveau District', 'Central Market', 'Freedom Monument', 'St. Peter\'s Church', 'Riga Cathedral', 'Latvian National Opera', 'Jurmala Beach', 'Mezaparks'],
      demographics: 'Latvia\'s capital. World\'s finest Art Nouveau. Baltic hub.',
      seoContent: {
        intro: 'Riga, Latvia\'s capital, operates on EET/UTC+2. The largest Baltic capital boasts the world\'s finest Art Nouveau architecture and a UNESCO Old Town.',
        timezoneFacts: 'Same as Tallinn. Largest city in Baltics.',
        bestTimeToVisit: 'May-September. June for midsummer. December for Christmas markets.',
        businessHours: 'Shops 10 AM to 7 PM. Central Market all day.',
        timeDifference: 'Riga is UTC+2 (EET) / UTC+3 (EEST). When noon: NYC 5 AM, London 10 AM.',
        daylightSaving: 'EEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Art Nouveau walking tour essential. Black Balsam is national drink.',
        transportation: 'Trams, trolleybuses, buses. Riga Airport (RIX) 10km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Latvian holidays. Independence Day (November 18).'
      }
    }
  },
  { slug: 'vilnius', city: 'Vilnius', timezone: 'Europe/Vilnius', country: 'Lithuania', countryCode: 'LT', lat: 54.69, lng: 25.28, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '580K', metroPopulation: '850K', phoneCode: '+370 5', language: 'Lithuanian',
      climate: 'Humid continental with mild summers (17-23°C) and cold winters (-6 to -1°C).',
      attractions: ['Old Town', 'Gediminas Tower', 'Užupis', 'Cathedral Square', 'Gate of Dawn', 'KGB Museum', 'Trakai Castle', 'St. Anne\'s Church', 'Hill of Three Crosses', 'Bernardine Garden'],
      demographics: 'Lithuania\'s capital. Largest baroque old town. Artistic Užupis republic.',
      seoContent: {
        intro: 'Vilnius, Lithuania\'s capital, operates on EET/UTC+2. This baroque gem has Europe\'s largest surviving medieval old town and the quirky republic of Užupis.',
        timezoneFacts: 'Same as Riga and Tallinn. Trakai Castle 28km away.',
        bestTimeToVisit: 'May-September. December for Christmas markets.',
        businessHours: 'Shops 10 AM to 7 PM. Užupis for artistic cafes.',
        timeDifference: 'Vilnius is UTC+2 (EET) / UTC+3 (EEST). When noon: NYC 5 AM, London 10 AM.',
        daylightSaving: 'EEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Užupis has its own "constitution." Cepelinai (dumplings) are huge.',
        transportation: 'Buses and trolleybuses. Vilnius Airport (VNO) 7km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Lithuanian holidays. Statehood Day (July 6).'
      }
    }
  },
  { slug: 'reykjavik', city: 'Reykjavik', timezone: 'Atlantic/Reykjavik', country: 'Iceland', countryCode: 'IS', lat: 64.15, lng: -21.94, tier: 3, continent: 'europe',
    info: {
      currency: 'Icelandic Króna', currencySymbol: 'kr', population: '140K', metroPopulation: '230K', phoneCode: '+354', language: 'Icelandic, English',
      climate: 'Subpolar oceanic with cool summers (10-15°C) and mild winters (0-3°C). Gulf Stream influence.',
      attractions: ['Hallgrímskirkja', 'Golden Circle', 'Blue Lagoon', 'Harpa', 'Northern Lights', 'Whale Watching', 'Perlan', 'Sun Voyager', 'Laugavegur', 'Reykjavik Harbor'],
      demographics: 'World\'s northernmost capital. Two-thirds of Iceland\'s population.',
      seoContent: {
        intro: 'Reykjavik, the world\'s northernmost capital, operates on GMT/UTC+0 year-round. This colorful city is the gateway to Iceland\'s dramatic landscapes and Northern Lights.',
        timezoneFacts: 'Iceland uses GMT year-round - no DST. Same as London in winter.',
        bestTimeToVisit: 'June-August for midnight sun. September-March for Northern Lights.',
        businessHours: 'Shops 10 AM to 6 PM. Nightlife starts late (after midnight).',
        timeDifference: 'Reykjavik is always UTC+0. When noon: NYC 7 AM (EST), London 12 PM.',
        daylightSaving: 'Iceland does NOT observe DST.',
        localTips: 'Expensive - bring snacks from duty-free. No tipping. Blue Lagoon books weeks ahead.',
        transportation: 'Bus system (Strætó). Car essential for exploring. Keflavík Airport (KEF) 50km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Icelandic holidays. Independence Day (June 17).'
      }
    }
  },
  { slug: 'kyiv', city: 'Kyiv', timezone: 'Europe/Kiev', country: 'Ukraine', countryCode: 'UA', lat: 50.45, lng: 30.52, tier: 3, continent: 'europe',
    info: {
      currency: 'Ukrainian Hryvnia', currencySymbol: '₴', population: '2.9M', metroPopulation: '3.4M', phoneCode: '+380 44', language: 'Ukrainian',
      climate: 'Humid continental with warm summers (20-27°C) and cold winters (-6 to -1°C).',
      attractions: ['Saint Sophia Cathedral', 'Kyiv Pechersk Lavra', 'Maidan Nezalezhnosti', 'St. Andrew\'s Descent', 'Golden Gate', 'Motherland Monument', 'Khreshchatyk', 'Podil', 'Pyrohiv Museum', 'Chernobyl (day trip)'],
      demographics: 'Ukraine\'s capital. 1,500+ year history. Cultural and political center.',
      seoContent: {
        intro: 'Kyiv, Ukraine\'s capital, operates on EET/UTC+2. This ancient city on the Dnipro River is the cradle of Eastern Slavic civilization.',
        timezoneFacts: '1 hour ahead of Central Europe. Historic Kyivan Rus\' capital.',
        bestTimeToVisit: 'Check current conditions. May-September traditionally best.',
        businessHours: 'Shops 10 AM to 8 PM. Khreshchatyk pedestrian on weekends.',
        timeDifference: 'Kyiv is UTC+2 (EET) / UTC+3 (EEST). When noon: NYC 5 AM, London 10 AM.',
        daylightSaving: 'EEST runs last Sunday of March to last Sunday of October.',
        localTips: 'Borscht and varenyky are essential. Metro is deep. Cyrillic alphabet used.',
        transportation: 'Metro (3 lines). Boryspil Airport (KBP) 29km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Ukrainian holidays. Independence Day (August 24).'
      }
    }
  },
  { slug: 'saint-petersburg', city: 'Saint Petersburg', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 59.93, lng: 30.34, tier: 3, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '5.4M', metroPopulation: '5.5M', phoneCode: '+7 812', language: 'Russian',
      climate: 'Humid continental with cool summers (18-23°C) and cold winters (-8 to -3°C). White Nights in summer.',
      attractions: ['Hermitage Museum', 'Church of the Savior on Spilled Blood', 'Peterhof', 'Catherine Palace', 'Nevsky Prospekt', 'St. Isaac\'s Cathedral', 'Peter and Paul Fortress', 'Mariinsky Theatre', 'Russian Museum', 'Canals'],
      demographics: 'Russia\'s imperial former capital. Cultural capital. UNESCO protected center.',
      seoContent: {
        intro: 'Saint Petersburg, Russia\'s imperial former capital, operates on Moscow Time (MSK/UTC+3). This "Venice of the North" houses the Hermitage and celebrates White Nights each June.',
        timezoneFacts: 'Same as Moscow. White Nights (late May-mid July) have nearly 24h daylight.',
        bestTimeToVisit: 'June for White Nights. May and September less crowded.',
        businessHours: 'Hermitage closed Mondays. White Nights mean late nights.',
        timeDifference: 'St. Petersburg is always UTC+3. When noon: NYC 4 AM, London 9 AM.',
        daylightSaving: 'Russia does NOT observe DST since 2014.',
        localTips: 'Book Hermitage in advance. Drawbridges open 1-5 AM. Learn Cyrillic basics.',
        transportation: 'Metro (5 lines). Pulkovo Airport (LED) 23km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Russian holidays. City Day (May 27), Scarlet Sails (June).'
      }
    }
  },

  // Turkey
  { slug: 'ankara', city: 'Ankara', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 39.93, lng: 32.86, tier: 3, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '5.7M', metroPopulation: '5.8M', phoneCode: '+90 312', language: 'Turkish',
      climate: 'Continental with hot dry summers (25-32°C) and cold snowy winters (-3 to 4°C). Central Anatolia.',
      attractions: ['Anıtkabir', 'Museum of Anatolian Civilizations', 'Ankara Castle', 'Kocatepe Mosque', 'Atakule Tower', 'Ulus', 'Hamamönü', 'CerModern', 'Gençlik Park', 'Beypazarı'],
      demographics: 'Turkey\'s capital since 1923. Government and university city. Less touristy than Istanbul.',
      seoContent: {
        intro: 'Ankara, Türkiye\'nin başkenti, Turkey Time (TRT/UTC+3) kullanır. Atatürk\'ün modern cumhuriyetin merkezi olarak seçtiği bu şehir, Anıtkabir ve dünya standartlarında müzelere ev sahipliği yapar.',
        timezoneFacts: 'Türkiye 2016\'dan beri kalıcı olarak UTC+3 kullanıyor. Yaz saati uygulaması yok. Londra\'dan 3 saat ileri.',
        bestTimeToVisit: 'Nisan-Haziran ve Eylül-Ekim en güzel dönemler. Yaz sıcak ve kuru. Kış karlı olabilir.',
        businessHours: 'Resmi daireler 8:30-17:30. AVM\'ler 10:00-22:00. Cuma öğle namazı için bazı yerler kapalı.',
        timeDifference: 'Ankara UTC+3. Saat 12\'de Ankara\'dayken: NYC 04:00, Londra 09:00, Dubai 11:00.',
        daylightSaving: 'Türkiye yaz saati uygulamıyor. Yıl boyunca UTC+3.',
        localTips: 'Anıtkabir çok etkileyici. Anadolu Medeniyetleri Müzesi dünya klasmanında. İstanbul\'dan daha az İngilizce konuşuluyor.',
        transportation: 'Metro ve otobüsler. İstanbul\'a hızlı tren. Esenboğa Havalimanı (ESB) merkezden 28km.',
        emergencyNumbers: 'Acil: 112.',
        publicHolidays: 'Türk resmi tatilleri. Cumhuriyet Bayramı (29 Ekim), Zafer Bayramı (30 Ağustos).'
      }
    }
  },
  { slug: 'izmir', city: 'İzmir', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 38.42, lng: 27.13, tier: 3, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '4.4M', metroPopulation: '4.5M', phoneCode: '+90 232', language: 'Turkish',
      climate: 'Mediterranean with hot dry summers (28-34°C) and mild wet winters (7-12°C).',
      attractions: ['Konak Square', 'Clock Tower', 'Kemeraltı Bazaar', 'Kadifekale', 'Kordon', 'Ephesus nearby', 'Alsancak', 'Agora', 'Alaçatı nearby', 'Çeşme Peninsula'],
      demographics: 'Turkey\'s third city. Aegean metropolis. Liberal and cosmopolitan. Gateway to Ephesus.',
      seoContent: {
        intro: 'İzmir, Türkiye\'nin Ege incisi, Turkey Time (TRT/UTC+3) kullanır. Bu liberal, kozmopolit şehir sahil kenarı gezintileri, canlı çarşıları ve antik Efes\'e kolay erişim sunar.',
        timezoneFacts: 'İstanbul ve Ankara ile aynı saat dilimi (UTC+3). Efes 80km güneyde.',
        bestTimeToVisit: 'Nisan-Haziran ve Eylül-Ekim en güzel hava. Yaz plajlar için ideal. Eylül\'de Fuar.',
        businessHours: 'Dükkanlar 09:00-20:00. Kemeraltı gün boyu açık. Kordon akşamları hareketli.',
        timeDifference: 'İzmir UTC+3. Saat 12\'de İzmir\'deyken: NYC 04:00, Londra 09:00.',
        daylightSaving: 'Türkiye yaz saati uygulamıyor. Yıl boyunca UTC+3.',
        localTips: 'Kahvaltıda boyoz şart. Kordon\'da balık restoranları. Efes, Çeşme, Alaçatı günübirlik gezi için ideal.',
        transportation: 'Metro (2 hat), otobüsler, feribotlar. Adnan Menderes Havalimanı (ADB) merkezden 18km.',
        emergencyNumbers: 'Acil: 112.',
        publicHolidays: 'Türk resmi tatilleri. İzmir Fuarı (Eylül), 9 Eylül Kurtuluş Günü.'
      }
    }
  },
  { slug: 'antalya', city: 'Antalya', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 36.90, lng: 30.70, tier: 3, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '2.6M', metroPopulation: '2.6M', phoneCode: '+90 242', language: 'Turkish',
      climate: 'Mediterranean with hot dry summers (28-35°C) and mild wet winters (10-15°C). 300 days of sunshine.',
      attractions: ['Kaleiçi Old Town', 'Düden Waterfalls', 'Aspendos', 'Perge', 'Konyaaltı Beach', 'Lara Beach', 'Antalya Museum', 'Yivli Minaret', 'Hadrian\'s Gate', 'Termessos'],
      demographics: 'Turkey\'s tourism capital. Turkish Riviera. Resort city with ancient ruins.',
      seoContent: {
        intro: 'Antalya, Türk Rivierası\'nın kapısı, Turkey Time (TRT/UTC+3) kullanır. Bu güzel sahil şehri turkuaz plajları, antik kalıntıları ve şirin tarihi Kaleiçi\'yi bir arada sunar.',
        timezoneFacts: 'İstanbul ile aynı saat dilimi (UTC+3). Turizm yıl boyunca uluslararası ziyaretçi çeker.',
        bestTimeToVisit: 'Nisan-Kasım plaj için ideal. Yaz sıcak ama plaj havası. İlkbahar ve sonbahar antik kentler için.',
        businessHours: 'Oteller 7/24. Kaleiçi dükkanları 10:00-22:00. Her şey turizm odaklı.',
        timeDifference: 'Antalya UTC+3. Saat 12\'de Antalya\'dayken: NYC 04:00, Londra 09:00, Moskova 12:00.',
        daylightSaving: 'Türkiye yaz saati uygulamıyor. Yıl boyunca UTC+3.',
        localTips: 'All-inclusive oteller yaygın. Kaleiçi şirin tarihi merkez. Antik kalıntılar her yerde. Su parkları popüler.',
        transportation: 'Sahil boyu tramvay. Otellere otobüsler. Antalya Havalimanı (AYT) merkezden 13km.',
        emergencyNumbers: 'Acil: 112.',
        publicHolidays: 'Türk resmi tatilleri.'
      }
    }
  },
  { slug: 'bursa', city: 'Bursa', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 40.19, lng: 29.06, tier: 3, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '3.1M', metroPopulation: '3.2M', phoneCode: '+90 224', language: 'Turkish',
      climate: 'Continental with warm summers (23-30°C) and cold winters (2-9°C). Snow on Uludağ.',
      attractions: ['Uludağ', 'Grand Mosque', 'Green Mosque', 'Green Tomb', 'Covered Bazaar', 'Cumalıkızık', 'Bursa Castle', 'Koza Han', 'Muradiye Complex', 'Thermal Baths'],
      demographics: 'First Ottoman capital. Industrial city. Ski resort gateway. Silk and automotive.',
      seoContent: {
        intro: 'Bursa, ilk Osmanlı başkenti, Turkey Time (TRT/UTC+3) kullanır. Uludağ\'ın eteğindeki bu tarihi şehir Osmanlı camileri, kaplıcalar ve Türkiye\'nin en popüler kayak merkezini sunar.',
        timezoneFacts: 'İstanbul ile aynı saat dilimi. İstanbul\'dan feribot ile 2-2.5 saat.',
        bestTimeToVisit: 'İlkbahar ve sonbahar şehir gezisi için. Aralık-Mart kayak sezonu. Yaz sıcak.',
        businessHours: 'Dükkanlar 09:00-19:00. Kapalı Çarşı gün boyu. Cuma namazı 13:00-14:00 kapalı.',
        timeDifference: 'Bursa UTC+3. Saat 12\'de Bursa\'dayken: NYC 04:00, Londra 09:00.',
        daylightSaving: 'Türkiye yaz saati uygulamıyor. Yıl boyunca UTC+3.',
        localTips: 'İskender kebap burada icat edildi - mutlaka deneyin. Kaplıcalar yüzyıllık. İpekçilik mirası. İstanbul\'dan günübirlik.',
        transportation: 'Metro ve otobüsler. İstanbul\'dan feribot. Yenişehir Havalimanı (YEI) 50km; İstanbul havalimanlarından transfer.',
        emergencyNumbers: 'Acil: 112.',
        publicHolidays: 'Türk resmi tatilleri.'
      }
    }
  },

  // Asia
  { slug: 'osaka', city: 'Osaka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.69, lng: 135.50, tier: 3, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '2.8M', metroPopulation: '19.3M', phoneCode: '+81 6', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (3-10°C).',
      attractions: ['Osaka Castle', 'Dotonbori', 'Universal Studios Japan', 'Shinsekai', 'Kuromon Market', 'Umeda Sky Building', 'Sumiyoshi Taisha', 'Shitennoji Temple', 'Namba', 'Tennoji'],
      demographics: 'Japan\'s kitchen. Merchant city heritage. Direct and humorous culture.',
      seoContent: {
        intro: 'Osaka, Japan\'s culinary capital, operates on Japan Standard Time (JST/UTC+9). Known as "the nation\'s kitchen," Osaka is famous for food culture, nightlife, and friendly people.',
        timezoneFacts: 'Same as Tokyo. No DST in Japan. 30 minutes from Kyoto by train.',
        bestTimeToVisit: 'March-May for cherry blossoms, October-November for autumn.',
        businessHours: 'Shops 10 AM to 8 PM. Dotonbori never sleeps. Restaurants until late.',
        timeDifference: 'Osaka is always UTC+9. When noon: NYC 10 PM (-1), London 3 AM.',
        daylightSaving: 'Japan does NOT observe DST.',
        localTips: 'Takoyaki and okonomiyaki essential. Osakans are outgoing. USJ popular.',
        transportation: 'Metro and JR trains excellent. Kansai Airport (KIX) 50km; Itami Airport (ITM) closer.',
        emergencyNumbers: 'Emergency: 110 (police), 119 (fire/ambulance).',
        publicHolidays: 'Japanese holidays. Tenjin Matsuri (July 24-25).'
      }
    }
  },
  { slug: 'kyoto', city: 'Kyoto', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.01, lng: 135.77, tier: 3, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '1.5M', metroPopulation: '2.8M', phoneCode: '+81 75', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and cold winters (2-9°C).',
      attractions: ['Fushimi Inari', 'Kinkaku-ji', 'Arashiyama', 'Gion', 'Kiyomizu-dera', 'Nijo Castle', 'Philosopher\'s Path', 'Ryoan-ji', 'Nishiki Market', 'Geisha Districts'],
      demographics: 'Japan\'s cultural heart. Former imperial capital. 17 UNESCO sites.',
      seoContent: {
        intro: 'Kyoto, Japan\'s cultural treasure, operates on Japan Standard Time (JST/UTC+9). The imperial capital for over a thousand years, Kyoto preserves Japan\'s most important temples and traditional arts.',
        timezoneFacts: 'Same as Tokyo. No DST. Preserved from WWII bombing.',
        bestTimeToVisit: 'March-May for cherry blossoms, November for autumn leaves. Both crowded.',
        businessHours: 'Temples typically 9 AM to 5 PM. Go early to avoid crowds.',
        timeDifference: 'Kyoto is always UTC+9. When noon: NYC 10 PM (-1), London 3 AM.',
        daylightSaving: 'Japan does NOT observe DST.',
        localTips: 'Book Fushimi Inari at dawn. Geisha sightings in Gion at dusk. Matcha everything.',
        transportation: 'Buses (complex), limited subway, bikes popular. Kansai Airport (KIX).',
        emergencyNumbers: 'Emergency: 110 (police), 119 (fire/ambulance).',
        publicHolidays: 'Japanese holidays. Gion Matsuri (July).'
      }
    }
  },
  { slug: 'shenzhen', city: 'Shenzhen', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 22.54, lng: 114.06, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '17.5M', metroPopulation: '18M', phoneCode: '+86 755', language: 'Mandarin, Cantonese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (12-20°C).',
      attractions: ['Window of the World', 'Shenzhen Bay', 'OCT Loft', 'Dafen Oil Painting Village', 'Splendid China', 'Dongmen', 'Shekou', 'Huaqiangbei', 'Lianhuashan Park', 'Safari Park'],
      demographics: 'China\'s Silicon Valley. From fishing village to megacity in 40 years.',
      seoContent: {
        intro: 'Shenzhen, China\'s Silicon Valley, operates on China Standard Time (CST/UTC+8). This city went from fishing village to tech megacity in just 40 years, home to Huawei and Tencent.',
        timezoneFacts: 'Same as Beijing and Hong Kong despite being just across the border.',
        bestTimeToVisit: 'October-December for pleasant weather. Avoid summer heat.',
        businessHours: 'Tech culture means flexible hours. Malls 10 AM to 10 PM.',
        timeDifference: 'Shenzhen is always UTC+8. When noon: NYC 11 PM (-1), London 4 AM.',
        daylightSaving: 'China does NOT observe DST.',
        localTips: 'Cashless society - get WeChat Pay. Hong Kong 30 minutes by train.',
        transportation: 'Metro extensive. High-speed rail to Hong Kong. Bao\'an Airport (SZX) 32km.',
        emergencyNumbers: 'Emergency: 110 (police), 120 (ambulance).',
        publicHolidays: 'Chinese holidays.'
      }
    }
  },
  { slug: 'guangzhou', city: 'Guangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 23.13, lng: 113.26, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '18.7M', metroPopulation: '22M', phoneCode: '+86 20', language: 'Mandarin, Cantonese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (12-18°C).',
      attractions: ['Canton Tower', 'Chen Clan Academy', 'Shamian Island', 'Temple of Six Banyan Trees', 'Yuexiu Park', 'Pearl River', 'Sacred Heart Cathedral', 'Chimelong', 'Beijing Road', 'Dim Sum'],
      demographics: 'Cantonese heartland. Trading hub for millennia. Food capital.',
      seoContent: {
        intro: 'Guangzhou (Canton), southern China\'s capital, operates on China Standard Time (CST/UTC+8). This ancient trading city is the heart of Cantonese culture and the original dim sum destination.',
        timezoneFacts: 'Same as Beijing despite being far south. Canton Fair brings global traders.',
        bestTimeToVisit: 'October-March for pleasant weather. Summer very hot and humid.',
        businessHours: 'Shops 10 AM to 10 PM. Dim sum starts early (7 AM).',
        timeDifference: 'Guangzhou is always UTC+8. When noon: NYC 11 PM (-1), London 4 AM.',
        daylightSaving: 'China does NOT observe DST.',
        localTips: 'Dim sum culture is morning tradition. Cantonese cuisine is refined.',
        transportation: 'Metro extensive. Baiyun Airport (CAN) 28km. High-speed rail hub.',
        emergencyNumbers: 'Emergency: 110 (police), 120 (ambulance).',
        publicHolidays: 'Chinese holidays. Canton Fair (April, October).'
      }
    }
  },
  { slug: 'chengdu', city: 'Chengdu', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.57, lng: 104.07, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '21M', metroPopulation: '22M', phoneCode: '+86 28', language: 'Mandarin, Sichuanese',
      climate: 'Humid subtropical with hot summers (26-31°C) and mild winters (4-10°C). Cloudy.',
      attractions: ['Giant Panda Base', 'Jinli Street', 'Wide and Narrow Alleys', 'Leshan Buddha', 'Wuhou Shrine', 'Du Fu Thatched Cottage', 'People\'s Park', 'Sichuan Opera', 'Tianfu Square', 'Hot Pot'],
      demographics: 'Sichuan\'s capital. Giant panda homeland. Spicy food capital.',
      seoContent: {
        intro: 'Chengdu, home of the giant panda, operates on China Standard Time (CST/UTC+8). Sichuan\'s capital offers adorable pandas, fiery cuisine, and a famously relaxed lifestyle.',
        timezoneFacts: 'Same as Beijing despite being far west. Sun rises and sets "late" compared to coast.',
        bestTimeToVisit: 'March-June and September-November. Summer hot. Winter cloudy.',
        businessHours: 'Relaxed pace. Teahouses all day. Hot pot late into night.',
        timeDifference: 'Chengdu is always UTC+8. When noon: NYC 11 PM (-1), London 4 AM.',
        daylightSaving: 'China does NOT observe DST.',
        localTips: 'Hot pot is essential. Pandas best seen early morning. Mahjong in teahouses.',
        transportation: 'Metro expanding. Shuangliu Airport (CTU) 16km.',
        emergencyNumbers: 'Emergency: 110 (police), 120 (ambulance).',
        publicHolidays: 'Chinese holidays.'
      }
    }
  },
  { slug: 'hangzhou', city: 'Hangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.27, lng: 120.15, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '12.2M', metroPopulation: '13M', phoneCode: '+86 571', language: 'Mandarin',
      climate: 'Humid subtropical with hot summers (28-34°C) and cold winters (2-8°C).',
      attractions: ['West Lake', 'Lingyin Temple', 'Six Harmonies Pagoda', 'Longjing Tea Village', 'Xixi Wetland', 'China National Tea Museum', 'Hefang Street', 'Qiantang River', 'Wuzhen nearby', 'Alibaba Campus'],
      demographics: 'Marco Polo\'s "finest city." Tech hub (Alibaba). Silk and tea heritage.',
      seoContent: {
        intro: 'Hangzhou, "Paradise on Earth," operates on China Standard Time (CST/UTC+8). Marco Polo\'s favorite city is now home to Alibaba, UNESCO-listed West Lake, and China\'s finest green tea.',
        timezoneFacts: 'Same as Beijing. 1 hour from Shanghai by high-speed rail.',
        bestTimeToVisit: 'March-May for spring, September-November for autumn.',
        businessHours: 'Tech culture influences hours. West Lake best at dawn.',
        timeDifference: 'Hangzhou is always UTC+8. When noon: NYC 11 PM (-1), London 4 AM.',
        daylightSaving: 'China does NOT observe DST.',
        localTips: 'West Lake boat ride essential. Longjing tea from source. Bike around the lake.',
        transportation: 'Metro, buses. Xiaoshan Airport (HGH) 27km. High-speed rail to Shanghai.',
        emergencyNumbers: 'Emergency: 110 (police), 120 (ambulance).',
        publicHolidays: 'Chinese holidays.'
      }
    }
  },
  { slug: 'busan', city: 'Busan', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.18, lng: 129.08, tier: 3, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '3.4M', metroPopulation: '3.6M', phoneCode: '+82 51', language: 'Korean',
      climate: 'Humid subtropical with hot humid summers (25-30°C) and mild winters (1-8°C).',
      attractions: ['Haeundae Beach', 'Gamcheon Culture Village', 'Jagalchi Fish Market', 'Haedong Yonggungsa', 'Gwangalli Beach', 'BIFF Square', 'Taejongdae', 'Beomeosa Temple', 'Busan Tower', 'Shinsegae Centum City'],
      demographics: 'Korea\'s second city. Major port. Beach culture. Film festival host.',
      seoContent: {
        intro: 'Busan, South Korea\'s beach city, operates on Korea Standard Time (KST/UTC+9). This vibrant port city offers sandy beaches, fresh seafood, and Korea\'s most important film festival.',
        timezoneFacts: 'Same as Tokyo and Seoul. No DST. KTX to Seoul 2.5 hours.',
        bestTimeToVisit: 'May-June and September-October. Summer beach season crowded. October for BIFF.',
        businessHours: 'Shops 10 AM to 10 PM. Fish markets from dawn.',
        timeDifference: 'Busan is always UTC+9. When noon: NYC 10 PM (-1), London 3 AM.',
        daylightSaving: 'South Korea does NOT observe DST.',
        localTips: 'Jagalchi Market for freshest seafood. Gamcheon colorful village. Soju culture.',
        transportation: 'Metro (4 lines). Gimhae Airport (PUS) 20km.',
        emergencyNumbers: 'Emergency: 112 (police), 119 (fire/ambulance).',
        publicHolidays: 'Korean holidays. BIFF (October).'
      }
    }
  },
  { slug: 'hanoi', city: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 21.03, lng: 105.85, tier: 3, continent: 'asia',
    info: {
      currency: 'Vietnamese Dong', currencySymbol: '₫', population: '8.4M', metroPopulation: '10M', phoneCode: '+84 24', language: 'Vietnamese',
      climate: 'Humid subtropical with hot summers (27-33°C) and cool winters (13-20°C).',
      attractions: ['Old Quarter', 'Hoan Kiem Lake', 'Temple of Literature', 'Ho Chi Minh Mausoleum', 'Water Puppet Theatre', 'West Lake', 'Train Street', 'Imperial Citadel', 'St. Joseph\'s Cathedral', 'Halong Bay nearby'],
      demographics: 'Vietnam\'s capital. 1000+ year history. French colonial heritage.',
      seoContent: {
        intro: 'Hanoi, Vietnam\'s ancient capital, operates on Indochina Time (ICT/UTC+7). This 1,000-year-old city combines French colonial architecture, ancient temples, and legendary street food.',
        timezoneFacts: 'Same as Ho Chi Minh City. Vietnam uses single timezone.',
        bestTimeToVisit: 'October-December and March-April for pleasant weather. Summer hot and humid.',
        businessHours: 'Shops 8 AM to 9 PM. Street food all hours. Cafes open early.',
        timeDifference: 'Hanoi is always UTC+7. When noon: NYC midnight, London 5 AM.',
        daylightSaving: 'Vietnam does NOT observe DST.',
        localTips: 'Pho for breakfast. Old Quarter chaos is charm. Halong Bay day or overnight trip.',
        transportation: 'Grab is essential. Metro opening. Noi Bai Airport (HAN) 25km.',
        emergencyNumbers: 'Emergency: 113 (police), 115 (ambulance).',
        publicHolidays: 'Vietnamese holidays. Tet (Lunar New Year) biggest.'
      }
    }
  },
  { slug: 'ho-chi-minh', city: 'Ho Chi Minh City', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 10.82, lng: 106.63, tier: 3, continent: 'asia',
    info: {
      currency: 'Vietnamese Dong', currencySymbol: '₫', population: '9.3M', metroPopulation: '14M', phoneCode: '+84 28', language: 'Vietnamese',
      climate: 'Tropical with hot weather year-round (27-35°C). Rainy season May-November.',
      attractions: ['War Remnants Museum', 'Cu Chi Tunnels', 'Notre-Dame Cathedral', 'Ben Thanh Market', 'Reunification Palace', 'Central Post Office', 'District 1', 'Bui Vien Street', 'Jade Emperor Pagoda', 'Mekong Delta'],
      demographics: 'Vietnam\'s largest city. Economic hub. Still called Saigon by locals.',
      seoContent: {
        intro: 'Ho Chi Minh City (Saigon), Vietnam\'s economic powerhouse, operates on Indochina Time (ICT/UTC+7). This dynamic metropolis combines French colonial elegance, war history, and modern energy.',
        timezoneFacts: 'Same as Hanoi. Vietnam uses single timezone. Still called Saigon.',
        bestTimeToVisit: 'December-April for dry season. May-November rainy but manageable.',
        businessHours: 'Shops 8 AM to 10 PM. Bui Vien backpacker area never sleeps.',
        timeDifference: 'HCMC is always UTC+7. When noon: NYC midnight, London 5 AM.',
        daylightSaving: 'Vietnam does NOT observe DST.',
        localTips: 'Banh mi sandwiches everywhere. Grab for transport. Cu Chi Tunnels half-day trip.',
        transportation: 'Grab essential. Metro opening. Tan Son Nhat Airport (SGN) 8km.',
        emergencyNumbers: 'Emergency: 113 (police), 115 (ambulance).',
        publicHolidays: 'Vietnamese holidays. Tet (Lunar New Year), Liberation Day (April 30).'
      }
    }
  },
  { slug: 'chennai', city: 'Chennai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 13.08, lng: 80.27, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '11M', metroPopulation: '15M', phoneCode: '+91 44', language: 'Tamil, English',
      climate: 'Tropical wet and dry with hot weather most of year (25-40°C). Monsoon October-December.',
      attractions: ['Marina Beach', 'Kapaleeshwarar Temple', 'Fort St. George', 'San Thome Cathedral', 'Government Museum', 'Mylapore', 'Mahabalipuram', 'Dakshinachitra', 'Valluvar Kottam', 'Guindy National Park'],
      demographics: 'Tamil Nadu capital. Auto industry hub. Classical music and dance.',
      seoContent: {
        intro: 'Chennai, gateway to South India, operates on India Standard Time (IST/UTC+5:30). This cultural capital offers ancient temples, colonial heritage, and India\'s longest urban beach.',
        timezoneFacts: 'India uses single timezone (IST). Chennai is in southeast but uses same time as Mumbai.',
        bestTimeToVisit: 'November-February for pleasant weather. April-June very hot. Monsoon Oct-Dec.',
        businessHours: 'Shops 10 AM to 9 PM. Temples early morning best.',
        timeDifference: 'Chennai is always UTC+5:30. When noon: NYC 1:30 AM, London 6:30 AM.',
        daylightSaving: 'India does NOT observe DST.',
        localTips: 'Filter coffee is essential. Mahabalipuram day trip. Classical dance performances.',
        transportation: 'Metro expanding. Suburban trains. Chennai Airport (MAA) 16km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Indian holidays. Pongal (January), Tamil New Year (April).'
      }
    }
  },
  { slug: 'kolkata', city: 'Kolkata', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 22.57, lng: 88.36, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '15M', metroPopulation: '15M', phoneCode: '+91 33', language: 'Bengali, English',
      climate: 'Tropical wet and dry with hot humid summers (30-38°C) and mild winters (12-25°C).',
      attractions: ['Victoria Memorial', 'Howrah Bridge', 'Mother Teresa\'s House', 'Kalighat Temple', 'Indian Museum', 'College Street', 'Park Street', 'Dakshineswar Temple', 'Botanical Gardens', 'New Market'],
      demographics: 'West Bengal capital. British colonial capital. Intellectual and cultural hub.',
      seoContent: {
        intro: 'Kolkata (Calcutta), the City of Joy, operates on India Standard Time (IST/UTC+5:30). This former British capital is India\'s intellectual and cultural heart, home to Nobel laureates and artistic traditions.',
        timezoneFacts: 'India uses single timezone. Kolkata is easternmost major city - sunrise early.',
        bestTimeToVisit: 'October-March for pleasant weather. Durga Puja (October) spectacular.',
        businessHours: 'Shops 10 AM to 8 PM. Durga Puja means city-wide celebration.',
        timeDifference: 'Kolkata is always UTC+5:30. When noon: NYC 1:30 AM, London 6:30 AM.',
        daylightSaving: 'India does NOT observe DST.',
        localTips: 'Bengali sweets are famous. Yellow Ambassador taxis iconic. Book Fair in January.',
        transportation: 'Metro (India\'s first), trams. Netaji Subhas Chandra Bose Airport (CCU) 17km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Indian holidays. Durga Puja (October) is biggest.'
      }
    }
  },
  { slug: 'hyderabad', city: 'Hyderabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 17.39, lng: 78.49, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '10M', metroPopulation: '10M', phoneCode: '+91 40', language: 'Telugu, Hindi, Urdu, English',
      climate: 'Tropical wet and dry with hot summers (30-42°C) and mild winters (15-28°C).',
      attractions: ['Charminar', 'Golconda Fort', 'Hussain Sagar', 'Ramoji Film City', 'Salar Jung Museum', 'HITEC City', 'Birla Mandir', 'Chowmahalla Palace', 'Laad Bazaar', 'Nehru Zoo'],
      demographics: 'Telangana capital. IT hub (HITEC City). Biryani capital. Pearl trade.',
      seoContent: {
        intro: 'Hyderabad, the City of Pearls, operates on India Standard Time (IST/UTC+5:30). This historic city combines Mughal heritage with India\'s tech boom - from Charminar to HITEC City.',
        timezoneFacts: 'India uses single timezone. Major IT outsourcing destination.',
        bestTimeToVisit: 'October-March for pleasant weather. Summers extremely hot.',
        businessHours: 'IT companies 24/7 operations. Old City markets all day.',
        timeDifference: 'Hyderabad is always UTC+5:30. When noon: NYC 1:30 AM, London 6:30 AM.',
        daylightSaving: 'India does NOT observe DST.',
        localTips: 'Hyderabadi biryani is essential. Pearls at Laad Bazaar. Irani chai cafes.',
        transportation: 'Metro modern. Rajiv Gandhi Airport (HYD) 24km.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Indian holidays. Bonalu (July/August).'
      }
    }
  },
  { slug: 'phuket', city: 'Phuket', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 7.88, lng: 98.40, tier: 3, continent: 'asia',
    info: {
      currency: 'Thai Baht', currencySymbol: '฿', population: '420K', metroPopulation: '420K', phoneCode: '+66 76', language: 'Thai, English',
      climate: 'Tropical monsoon with hot weather year-round (27-33°C). Monsoon May-October.',
      attractions: ['Patong Beach', 'Old Phuket Town', 'Big Buddha', 'Phi Phi Islands', 'Phang Nga Bay', 'Kata Beach', 'Karon Beach', 'Wat Chalong', 'Bangla Road', 'Similan Islands'],
      demographics: 'Thailand\'s largest island. Beach resort paradise. Tourism-dependent.',
      seoContent: {
        intro: 'Phuket, Thailand\'s beach paradise, operates on Indochina Time (ICT/UTC+7). Thailand\'s largest island offers stunning beaches, island hopping, and legendary nightlife.',
        timezoneFacts: 'Same as Bangkok. Island destination with international airport.',
        bestTimeToVisit: 'November-April for dry season. May-October monsoon but cheaper.',
        businessHours: 'Resort hours vary. Bangla Road comes alive after dark.',
        timeDifference: 'Phuket is always UTC+7. When noon: NYC midnight, London 5 AM.',
        daylightSaving: 'Thailand does NOT observe DST.',
        localTips: 'Phi Phi and Phang Nga Bay day trips. Patong is party central. Old Town for culture.',
        transportation: 'Songthaews and taxis. Phuket Airport (HKT) north of island.',
        emergencyNumbers: 'Emergency: 191. Tourist Police: 1155.',
        publicHolidays: 'Thai holidays. Vegetarian Festival (October).'
      }
    }
  },
  { slug: 'bali', city: 'Bali', timezone: 'Asia/Makassar', country: 'Indonesia', countryCode: 'ID', lat: -8.41, lng: 115.19, tier: 3, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '4.4M', metroPopulation: '4.4M', phoneCode: '+62 361', language: 'Indonesian, Balinese',
      climate: 'Tropical with hot weather year-round (27-30°C). Rainy season November-March.',
      attractions: ['Ubud', 'Tanah Lot', 'Uluwatu', 'Tegallalang Rice Terraces', 'Seminyak', 'Kuta Beach', 'Nusa Dua', 'Tirta Empul', 'Mount Batur', 'Besakih Temple'],
      demographics: 'Island province. Hindu majority in Muslim nation. Tourism and arts.',
      seoContent: {
        intro: 'Bali, Island of the Gods, operates on Central Indonesia Time (WITA/UTC+8). This Hindu island paradise offers temples, rice terraces, beaches, and a spiritual atmosphere.',
        timezoneFacts: '1 hour ahead of Jakarta. Indonesia spans 3 time zones.',
        bestTimeToVisit: 'April-October for dry season. December-March rainy. Always tourists.',
        businessHours: 'Tourist areas open late. Nyepi (Day of Silence) means total shutdown.',
        timeDifference: 'Bali is always UTC+8. When noon: NYC 11 PM (-1), London 4 AM.',
        daylightSaving: 'Indonesia does NOT observe DST.',
        localTips: 'Respect temple dress codes. Ubud for culture, Seminyak for beaches. Scooter rentals common.',
        transportation: 'Grab available. Ngurah Rai Airport (DPS) in south.',
        emergencyNumbers: 'Emergency: 112.',
        publicHolidays: 'Indonesian holidays. Nyepi (March), Galungan, Hindu ceremonies.'
      }
    }
  },
  { slug: 'jerusalem', city: 'Jerusalem', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL', lat: 31.77, lng: 35.23, tier: 3, continent: 'asia',
    info: {
      currency: 'Israeli Shekel', currencySymbol: '₪', population: '950K', metroPopulation: '1.3M', phoneCode: '+972 2', language: 'Hebrew, Arabic',
      climate: 'Mediterranean with hot dry summers (24-30°C) and cool wet winters (6-12°C).',
      attractions: ['Western Wall', 'Church of Holy Sepulchre', 'Dome of the Rock', 'Mount of Olives', 'Yad Vashem', 'Israel Museum', 'Via Dolorosa', 'Jewish Quarter', 'Mahane Yehuda Market', 'Dead Sea nearby'],
      demographics: 'Holy city for three religions. Capital (disputed). Ancient and modern.',
      seoContent: {
        intro: 'Jerusalem, holy to three faiths, operates on Israel Standard Time (IST/UTC+2). This ancient city sacred to Jews, Christians, and Muslims is one of the world\'s most significant religious sites.',
        timezoneFacts: 'Israel uses its own DST schedule, different from Europe.',
        bestTimeToVisit: 'March-May and September-November for pleasant weather. Avoid major holidays if crowds concern.',
        businessHours: 'Shabbat (Friday sunset to Saturday sunset) means closures. Muslim Friday prayers.',
        timeDifference: 'Jerusalem is UTC+2 (IST) / UTC+3 (IDT). When noon: NYC 5 AM, London 10 AM.',
        daylightSaving: 'Israel DST typically March to October.',
        localTips: 'Dress modestly at holy sites. Shabbat transforms the city. Dead Sea day trip.',
        transportation: 'Light rail. Buses (not on Shabbat). Ben Gurion Airport (TLV) 50km.',
        emergencyNumbers: 'Emergency: 100 (police), 101 (ambulance).',
        publicHolidays: 'Jewish holidays, Muslim holidays, Christian holidays - complex calendar.'
      }
    }
  },
  { slug: 'abu-dhabi', city: 'Abu Dhabi', timezone: 'Asia/Dubai', country: 'United Arab Emirates', countryCode: 'AE', lat: 24.45, lng: 54.37, tier: 3, continent: 'asia',
    info: {
      currency: 'UAE Dirham', currencySymbol: 'AED', population: '1.5M', metroPopulation: '2.9M', phoneCode: '+971 2', language: 'Arabic, English',
      climate: 'Hot desert with very hot summers (35-45°C) and warm winters (15-25°C).',
      attractions: ['Sheikh Zayed Grand Mosque', 'Louvre Abu Dhabi', 'Corniche', 'Ferrari World', 'Yas Island', 'Emirates Palace', 'Qasr Al Watan', 'Saadiyat Island', 'Heritage Village', 'Liwa Oasis'],
      demographics: 'UAE capital. Oil wealth. More conservative than Dubai. F1 circuit.',
      seoContent: {
        intro: 'Abu Dhabi, UAE\'s capital, operates on Gulf Standard Time (GST/UTC+4). The oil-rich emirate offers the stunning Sheikh Zayed Mosque, world-class museums, and a more traditional atmosphere than Dubai.',
        timezoneFacts: 'Same as Dubai. 4 hours ahead of London. No DST.',
        bestTimeToVisit: 'November-March for pleasant weather. Summer extremely hot.',
        businessHours: 'Friday is Islamic holy day. Malls open late.',
        timeDifference: 'Abu Dhabi is always UTC+4. When noon: NYC 3 AM, London 8 AM.',
        daylightSaving: 'UAE does NOT observe DST.',
        localTips: 'Sheikh Zayed Mosque free but dress code strict. Ferrari World for thrills. More conservative than Dubai.',
        transportation: 'Buses and taxis. Abu Dhabi Airport (AUH) 30km.',
        emergencyNumbers: 'Emergency: 999.',
        publicHolidays: 'Islamic holidays, UAE National Day (December 2).'
      }
    }
  },
  { slug: 'doha', city: 'Doha', timezone: 'Asia/Qatar', country: 'Qatar', countryCode: 'QA', lat: 25.29, lng: 51.53, tier: 3, continent: 'asia',
    info: {
      currency: 'Qatari Riyal', currencySymbol: 'QAR', population: '2.4M', metroPopulation: '2.4M', phoneCode: '+974', language: 'Arabic, English',
      climate: 'Hot desert with very hot summers (35-45°C) and mild winters (15-25°C).',
      attractions: ['Museum of Islamic Art', 'Souq Waqif', 'The Pearl', 'Katara Cultural Village', 'Aspire Zone', 'Corniche', 'National Museum', 'Education City', 'Al Zubarah Fort', 'Desert Safari'],
      demographics: 'Qatar capital. World Cup 2022 host. Wealthy and rapidly developing.',
      seoContent: {
        intro: 'Doha, Qatar\'s futuristic capital, operates on Arabia Standard Time (AST/UTC+3). This wealthy Gulf city hosted the 2022 World Cup and combines Arab tradition with ambitious modernity.',
        timezoneFacts: 'UTC+3, 1 hour behind Dubai. No DST.',
        bestTimeToVisit: 'November-March for pleasant weather. Summer unbearably hot.',
        businessHours: 'Friday is holy day. Malls open late. Ramadan affects hours.',
        timeDifference: 'Doha is always UTC+3. When noon: NYC 4 AM, London 9 AM, Dubai 1 PM.',
        daylightSaving: 'Qatar does NOT observe DST.',
        localTips: 'Museum of Islamic Art is free. Souq Waqif for atmosphere. Modest dress recommended.',
        transportation: 'Metro modern and expanding. Hamad Airport (DOH) 15km.',
        emergencyNumbers: 'Emergency: 999.',
        publicHolidays: 'Islamic holidays, Qatar National Day (December 18).'
      }
    }
  },
  { slug: 'riyadh', city: 'Riyadh', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 24.77, lng: 46.74, tier: 3, continent: 'asia',
    info: {
      currency: 'Saudi Riyal', currencySymbol: 'SAR', population: '7.7M', metroPopulation: '8M', phoneCode: '+966 11', language: 'Arabic',
      climate: 'Hot desert with very hot summers (35-45°C) and cool winters (10-20°C).',
      attractions: ['Kingdom Centre', 'Masmak Fortress', 'National Museum', 'Diriyah', 'Edge of the World', 'Boulevard Riyadh', 'Al Faisaliah Tower', 'Riyadh Zoo', 'King Abdulaziz Historical Center', 'Red Sand Dunes'],
      demographics: 'Saudi capital. Conservative Islamic city. Opening to tourism.',
      seoContent: {
        intro: 'Riyadh, Saudi Arabia\'s capital, operates on Arabia Standard Time (AST/UTC+3). The kingdom\'s largest city is transforming under Vision 2030, opening to tourism while maintaining Islamic traditions.',
        timezoneFacts: 'UTC+3. Same as Qatar and Kuwait. No DST.',
        bestTimeToVisit: 'November-February for cooler weather. Summer extremely hot.',
        businessHours: 'Prayer times affect business. Friday is holy day. Malls popular evenings.',
        timeDifference: 'Riyadh is always UTC+3. When noon: NYC 4 AM, London 9 AM.',
        daylightSaving: 'Saudi Arabia does NOT observe DST.',
        localTips: 'Tourist visas now available. Modest dress required. Edge of the World dramatic desert.',
        transportation: 'Metro opening. Taxis and Uber. King Khalid Airport (RUH) 35km.',
        emergencyNumbers: 'Emergency: 999.',
        publicHolidays: 'Islamic holidays, Saudi National Day (September 23).'
      }
    }
  },
  { slug: 'jeddah', city: 'Jeddah', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 21.49, lng: 39.19, tier: 3, continent: 'asia',
    info: {
      currency: 'Saudi Riyal', currencySymbol: 'SAR', population: '4.7M', metroPopulation: '5M', phoneCode: '+966 12', language: 'Arabic',
      climate: 'Hot desert with very hot humid summers (30-40°C) and warm winters (20-28°C). Red Sea coast.',
      attractions: ['Al-Balad Old Town', 'Jeddah Corniche', 'King Fahd Fountain', 'Red Sea Mall', 'Floating Mosque', 'Jeddah Waterfront', 'Al-Rahma Mosque', 'Nasseef House', 'Fakieh Aquarium', 'Gateway to Mecca'],
      demographics: 'Gateway to Mecca. Red Sea port. More cosmopolitan than Riyadh.',
      seoContent: {
        intro: 'Jeddah, gateway to the holy cities, operates on Arabia Standard Time (AST/UTC+3). Saudi Arabia\'s second city on the Red Sea is more cosmopolitan and the traditional entry point for Hajj pilgrims.',
        timezoneFacts: 'Same as Riyadh. Gateway to Mecca (non-Muslims cannot enter Mecca).',
        bestTimeToVisit: 'October-April for pleasant weather. Summer very hot and humid.',
        businessHours: 'Prayer times affect business. More relaxed than Riyadh.',
        timeDifference: 'Jeddah is always UTC+3. When noon: NYC 4 AM, London 9 AM.',
        daylightSaving: 'Saudi Arabia does NOT observe DST.',
        localTips: 'Al-Balad UNESCO old town. Non-Muslims cannot visit Mecca. Red Sea diving possible.',
        transportation: 'Taxis and Uber. King Abdulaziz Airport (JED) 19km.',
        emergencyNumbers: 'Emergency: 999.',
        publicHolidays: 'Islamic holidays. Hajj season (varies with lunar calendar).'
      }
    }
  },
  { slug: 'karachi', city: 'Karachi', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 24.86, lng: 67.01, tier: 3, continent: 'asia',
    info: {
      currency: 'Pakistani Rupee', currencySymbol: '₨', population: '16M', metroPopulation: '16M', phoneCode: '+92 21', language: 'Urdu, English, Sindhi',
      climate: 'Hot desert with hot summers (30-35°C) and mild winters (13-25°C). Monsoon July-August.',
      attractions: ['Clifton Beach', 'Mazar-e-Quaid', 'Port Grand', 'Mohatta Palace', 'Frere Hall', 'PAF Museum', 'National Museum', 'Empress Market', 'Sea View', 'Karachi Zoo'],
      demographics: 'Pakistan\'s largest city. Economic hub. Port city. Diverse population.',
      seoContent: {
        intro: 'Karachi, Pakistan\'s economic powerhouse, operates on Pakistan Standard Time (PKT/UTC+5). This megacity on the Arabian Sea is the country\'s financial center and largest city.',
        timezoneFacts: 'UTC+5. 30 minutes behind India despite being further west.',
        bestTimeToVisit: 'November-February for pleasant weather. Monsoon July-August.',
        businessHours: 'Shops 10 AM to 10 PM. Friday prayers 1-2 PM.',
        timeDifference: 'Karachi is always UTC+5. When noon: NYC 2 AM, London 7 AM.',
        daylightSaving: 'Pakistan does NOT observe DST.',
        localTips: 'Biryani is essential. Clifton Beach in evening. Check travel advisories.',
        transportation: 'Buses and rickshaws. Jinnah Airport (KHI) 15km.',
        emergencyNumbers: 'Emergency: 115.',
        publicHolidays: 'Pakistani and Islamic holidays. Independence Day (August 14).'
      }
    }
  },
  { slug: 'dhaka', city: 'Dhaka', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 23.81, lng: 90.41, tier: 3, continent: 'asia',
    info: {
      currency: 'Bangladeshi Taka', currencySymbol: '৳', population: '22M', metroPopulation: '22M', phoneCode: '+880 2', language: 'Bengali, English',
      climate: 'Tropical monsoon with hot humid summers (30-35°C) and mild winters (12-25°C). Monsoon June-October.',
      attractions: ['Lalbagh Fort', 'Ahsan Manzil', 'National Parliament', 'Star Mosque', 'Dhakeshwari Temple', 'Old Dhaka', 'Liberation War Museum', 'Sadarghat', 'Sonargaon', 'National Museum'],
      demographics: 'Bangladesh capital. One of world\'s most densely populated cities. Garment industry.',
      seoContent: {
        intro: 'Dhaka, Bangladesh\'s vibrant capital, operates on Bangladesh Standard Time (BST/UTC+6). One of the world\'s most densely populated cities, Dhaka is chaotic, energetic, and full of life.',
        timezoneFacts: 'UTC+6. Between India and Myanmar time zones.',
        bestTimeToVisit: 'November-February for dry and cool weather. Monsoon June-October.',
        businessHours: 'Shops 10 AM to 9 PM. Friday is holy day.',
        timeDifference: 'Dhaka is always UTC+6. When noon: NYC 1 AM, London 6 AM.',
        daylightSaving: 'Bangladesh does NOT observe DST.',
        localTips: 'Traffic is legendary. Rickshaws everywhere. Old Dhaka is fascinating chaos.',
        transportation: 'Rickshaws, buses, CNG autos. Hazrat Shahjalal Airport (DAC) 20km.',
        emergencyNumbers: 'Emergency: 999.',
        publicHolidays: 'Bangladeshi and Islamic holidays. Independence Day (March 26).'
      }
    }
  },
  { slug: 'kathmandu', city: 'Kathmandu', timezone: 'Asia/Kathmandu', country: 'Nepal', countryCode: 'NP', lat: 27.72, lng: 85.32, tier: 3, continent: 'asia',
    info: {
      currency: 'Nepalese Rupee', currencySymbol: 'Rs', population: '1.4M', metroPopulation: '3M', phoneCode: '+977 1', language: 'Nepali, English',
      climate: 'Subtropical highland with warm summers (20-30°C) and cold winters (2-12°C). Monsoon June-September.',
      attractions: ['Durbar Square', 'Swayambhunath', 'Boudhanath', 'Pashupatinath', 'Thamel', 'Patan', 'Bhaktapur', 'Garden of Dreams', 'Narayanhiti Palace', 'Everest flights'],
      demographics: 'Nepal\'s capital. Gateway to Himalayas. Buddhist and Hindu heritage.',
      seoContent: {
        intro: 'Kathmandu, Nepal\'s ancient capital, operates on Nepal Time (NPT/UTC+5:45). This Himalayan city is the gateway to Everest, filled with temples, stupas, and medieval squares.',
        timezoneFacts: 'UTC+5:45 - one of few places with 45-minute offset.',
        bestTimeToVisit: 'October-November for clear skies and festivals. March-May for spring. Avoid monsoon.',
        businessHours: 'Shops 10 AM to 8 PM. Thamel tourist area open late.',
        timeDifference: 'Kathmandu is always UTC+5:45. When noon: NYC 1:15 AM, London 6:15 AM.',
        daylightSaving: 'Nepal does NOT observe DST.',
        localTips: 'Altitude 1,400m - acclimatize before trekking. Dal bhat is staple. Negotiate taxi fares.',
        transportation: 'Taxis, tempos, buses. Tribhuvan Airport (KTM) 6km.',
        emergencyNumbers: 'Emergency: 100 (police), 102 (ambulance).',
        publicHolidays: 'Many Hindu and Buddhist festivals. Dashain (October) biggest.'
      }
    }
  },
  { slug: 'colombo', city: 'Colombo', timezone: 'Asia/Colombo', country: 'Sri Lanka', countryCode: 'LK', lat: 6.93, lng: 79.85, tier: 3, continent: 'asia',
    info: {
      currency: 'Sri Lankan Rupee', currencySymbol: 'Rs', population: '750K', metroPopulation: '5.6M', phoneCode: '+94 11', language: 'Sinhala, Tamil, English',
      climate: 'Tropical monsoon with warm weather year-round (27-32°C). Two monsoon seasons.',
      attractions: ['Galle Face Green', 'Gangaramaya Temple', 'National Museum', 'Pettah Market', 'Independence Square', 'Red Mosque', 'Beira Lake', 'Dutch Hospital', 'Mount Lavinia', 'Colombo Fort'],
      demographics: 'Sri Lanka\'s commercial capital. Colonial heritage. Multi-ethnic.',
      seoContent: {
        intro: 'Colombo, Sri Lanka\'s bustling capital, operates on Sri Lanka Standard Time (SLST/UTC+5:30). This tropical city mixes colonial heritage, Buddhist temples, and modern development.',
        timezoneFacts: 'Same as India (UTC+5:30). Official capital is Sri Jayawardenepura Kotte.',
        bestTimeToVisit: 'December-March for west coast dry season. Year-round destination.',
        businessHours: 'Shops 10 AM to 8 PM. Poya (full moon) days are holidays.',
        timeDifference: 'Colombo is always UTC+5:30. When noon: NYC 1:30 AM, London 6:30 AM.',
        daylightSaving: 'Sri Lanka does NOT observe DST.',
        localTips: 'Kottu roti street food. Galle 2 hours south. Poya days mean alcohol restrictions.',
        transportation: 'Tuk-tuks, buses, trains. Bandaranaike Airport (CMB) 32km.',
        emergencyNumbers: 'Emergency: 119.',
        publicHolidays: 'Buddhist Poya days (monthly), Sinhalese/Tamil New Year (April).'
      }
    }
  },
  { slug: 'yangon', city: 'Yangon', timezone: 'Asia/Yangon', country: 'Myanmar', countryCode: 'MM', lat: 16.87, lng: 96.20, tier: 3, continent: 'asia',
    info: {
      currency: 'Myanmar Kyat', currencySymbol: 'K', population: '5.4M', metroPopulation: '5.4M', phoneCode: '+95 1', language: 'Burmese',
      climate: 'Tropical monsoon with hot humid summers (30-38°C) and mild winters (18-32°C). Monsoon May-October.',
      attractions: ['Shwedagon Pagoda', 'Sule Pagoda', 'Bogyoke Market', 'Colonial District', 'Inya Lake', 'Kandawgyi Lake', 'People\'s Park', 'Strand Hotel', 'Chaukhtatgyi Buddha', 'Secretariat'],
      demographics: 'Myanmar\'s largest city. Former capital. Colonial architecture.',
      seoContent: {
        intro: 'Yangon (Rangoon), Myanmar\'s largest city, operates on Myanmar Time (MMT/UTC+6:30). This former capital mesmerizes with the golden Shwedagon Pagoda and crumbling colonial grandeur.',
        timezoneFacts: 'UTC+6:30 - unusual 30-minute offset. Capital moved to Naypyidaw in 2006.',
        bestTimeToVisit: 'November-February for dry and cool weather. Check current situation.',
        businessHours: 'Shops 9 AM to 9 PM. Pagodas dawn to dusk.',
        timeDifference: 'Yangon is always UTC+6:30. When noon: NYC 12:30 AM, London 5:30 AM.',
        daylightSaving: 'Myanmar does NOT observe DST.',
        localTips: 'Shwedagon at sunset is magical. Modest dress at pagodas. Check travel advisories.',
        transportation: 'Taxis and buses. Yangon Airport (RGN) 15km.',
        emergencyNumbers: 'Emergency: 199.',
        publicHolidays: 'Buddhist holidays. Thingyan Water Festival (April).'
      }
    }
  },
  { slug: 'phnom-penh', city: 'Phnom Penh', timezone: 'Asia/Phnom_Penh', country: 'Cambodia', countryCode: 'KH', lat: 11.56, lng: 104.92, tier: 3, continent: 'asia',
    info: {
      currency: 'Cambodian Riel / US Dollar', currencySymbol: '៛/$', population: '2.3M', metroPopulation: '2.3M', phoneCode: '+855 23', language: 'Khmer, English',
      climate: 'Tropical monsoon with hot weather year-round (27-35°C). Monsoon May-October.',
      attractions: ['Royal Palace', 'Silver Pagoda', 'Tuol Sleng', 'Killing Fields', 'National Museum', 'Central Market', 'Wat Phnom', 'Riverside', 'Russian Market', 'Sisowath Quay'],
      demographics: 'Cambodia\'s capital. Khmer Rouge history. French colonial heritage.',
      seoContent: {
        intro: 'Phnom Penh, Cambodia\'s capital, operates on Indochina Time (ICT/UTC+7). This riverside city combines French colonial elegance, Khmer heritage, and sobering recent history.',
        timezoneFacts: 'Same as Bangkok and Vietnam. US dollar widely used.',
        bestTimeToVisit: 'November-March for dry and cool weather. April (Khmer New Year) festive.',
        businessHours: 'Shops 8 AM to 9 PM. Riverside area lively evenings.',
        timeDifference: 'Phnom Penh is always UTC+7. When noon: NYC midnight, London 5 AM.',
        daylightSaving: 'Cambodia does NOT observe DST.',
        localTips: 'Tuol Sleng and Killing Fields are important but heavy. Fish amok is national dish.',
        transportation: 'Tuk-tuks and motos. Phnom Penh Airport (PNH) 10km.',
        emergencyNumbers: 'Emergency: 117 (police), 119 (ambulance).',
        publicHolidays: 'Cambodian holidays. Khmer New Year (April), Water Festival (November).'
      }
    }
  },
  // Oceania
  { slug: 'brisbane', city: 'Brisbane', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -27.47, lng: 153.03, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '2.5M', metroPopulation: '2.6M', phoneCode: '+61 7', language: 'English',
      climate: 'Humid subtropical with hot humid summers (21-30°C) and mild dry winters (10-21°C).',
      attractions: ['South Bank', 'Story Bridge', 'Lone Pine Koala Sanctuary', 'GOMA', 'Moreton Island', 'Mt Coot-tha', 'Queen Street Mall', 'City Botanic Gardens', 'Fortitude Valley', 'Brisbane River'],
      demographics: 'Queensland capital. Fastest growing Australian city. 2032 Olympics host.',
      seoContent: {
        intro: 'Brisbane, Queensland\'s sunny capital, operates on Australian Eastern Standard Time (AEST/UTC+10). This laid-back city on the Brisbane River will host the 2032 Olympics.',
        timezoneFacts: 'Queensland doesn\'t observe DST. Same as Sydney in winter, 1 hour behind in summer.',
        bestTimeToVisit: 'Year-round destination. Winter (June-August) is ideal. Summer hot and humid.',
        businessHours: 'Shops 9 AM to 5 PM. Late night Thursday. South Bank lively evenings.',
        timeDifference: 'Brisbane is always UTC+10. When noon: NYC 9 PM (-1), London 2 AM.',
        daylightSaving: 'Queensland does NOT observe DST.',
        localTips: 'South Bank has free beach. Koalas at Lone Pine. Gold Coast 1 hour south.',
        transportation: 'Trains, buses, ferries. Brisbane Airport (BNE) 15km.',
        emergencyNumbers: 'Emergency: 000.',
        publicHolidays: 'Australian holidays. Ekka (August).'
      }
    }
  },
  { slug: 'perth', city: 'Perth', timezone: 'Australia/Perth', country: 'Australia', countryCode: 'AU', lat: -31.95, lng: 115.86, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '2.1M', metroPopulation: '2.2M', phoneCode: '+61 8', language: 'English',
      climate: 'Mediterranean with hot dry summers (25-32°C) and mild wet winters (8-18°C).',
      attractions: ['Kings Park', 'Fremantle', 'Rottnest Island', 'Elizabeth Quay', 'Perth Mint', 'Swan Valley', 'Cottesloe Beach', 'Perth Zoo', 'Bell Tower', 'Pinnacles Desert'],
      demographics: 'Western Australia capital. Most isolated major city. Mining wealth.',
      seoContent: {
        intro: 'Perth, Australia\'s most isolated capital, operates on Australian Western Standard Time (AWST/UTC+8). This sunny city on the Swan River offers beaches, wine regions, and unique wildlife.',
        timezoneFacts: '2-3 hours behind Sydney depending on DST. Closer to Singapore than Sydney.',
        bestTimeToVisit: 'September-May for best weather. Spring wildflowers spectacular.',
        businessHours: 'Shops 9 AM to 5 PM. Fremantle weekends lively.',
        timeDifference: 'Perth is always UTC+8. When noon: NYC 11 PM (-1), London 4 AM, Sydney 3 PM.',
        daylightSaving: 'Western Australia does NOT observe DST.',
        localTips: 'Rottnest Island for quokkas. Fremantle for coffee culture. Sunset at Cottesloe.',
        transportation: 'Trains and buses. Perth Airport (PER) 12km.',
        emergencyNumbers: 'Emergency: 000.',
        publicHolidays: 'Australian holidays. WA Day (June).'
      }
    }
  },
  { slug: 'wellington', city: 'Wellington', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ', lat: -41.29, lng: 174.78, tier: 2, continent: 'oceania',
    info: {
      currency: 'New Zealand Dollar', currencySymbol: 'NZ$', population: '215K', metroPopulation: '420K', phoneCode: '+64 4', language: 'English, Māori',
      climate: 'Oceanic with mild temperatures (8-20°C). Very windy. Rain possible any time.',
      attractions: ['Te Papa Museum', 'Wellington Cable Car', 'Cuba Street', 'Mount Victoria', 'Zealandia', 'Weta Workshop', 'Parliament', 'Oriental Bay', 'Botanic Gardens', 'Lambton Quay'],
      demographics: 'New Zealand capital. Compact and creative. Film industry (Lord of the Rings).',
      seoContent: {
        intro: 'Wellington, New Zealand\'s windy capital, operates on New Zealand Standard Time (NZST/UTC+12/+13). This compact, creative city is home to Te Papa and the Weta Workshop.',
        timezoneFacts: 'Among first places to see each new day. 12-13 hours ahead of London.',
        bestTimeToVisit: 'December-March for summer. Always pack layers. Wind is constant.',
        businessHours: 'Shops 9 AM to 5 PM. Cuba Street cafes open late.',
        timeDifference: 'Wellington is UTC+12 (NZST) / UTC+13 (NZDT). When noon: NYC 6 PM (-1), London 11 PM (-1).',
        daylightSaving: 'NZDT runs last Sunday September to first Sunday April.',
        localTips: 'Te Papa is free and excellent. Weta Workshop for film fans. Craft beer scene strong.',
        transportation: 'Buses and cable car. Wellington Airport (WLG) 8km.',
        emergencyNumbers: 'Emergency: 111.',
        publicHolidays: 'NZ holidays. Wellington Anniversary (January 22).'
      }
    }
  },
  { slug: 'fiji', city: 'Suva', timezone: 'Pacific/Fiji', country: 'Fiji', countryCode: 'FJ', lat: -18.14, lng: 178.44, tier: 2, continent: 'oceania',
    info: {
      currency: 'Fijian Dollar', currencySymbol: 'FJ$', population: '95K', metroPopulation: '180K', phoneCode: '+679', language: 'Fijian, Hindi, English',
      climate: 'Tropical oceanic with hot humid weather year-round (23-30°C). Wet season November-April.',
      attractions: ['Fiji Museum', 'Colo-i-Suva Forest Park', 'Suva Municipal Market', 'Thurston Gardens', 'University of the South Pacific', 'Albert Park', 'Sacred Heart Cathedral', 'Government Buildings', 'Suva Point', 'Outer Islands'],
      demographics: 'Fiji\'s capital. Mix of Fijian and Indo-Fijian cultures. Government center.',
      seoContent: {
        intro: 'Suva, Fiji\'s capital, operates on Fiji Time (FJT/UTC+12). While most visitors head to resort islands, Suva offers authentic Fijian culture and colonial heritage.',
        timezoneFacts: 'Among first countries to see new day. Resort islands use same timezone.',
        bestTimeToVisit: 'May-October for dry season. November-April wet and humid.',
        businessHours: 'Shops 8 AM to 5 PM. Relaxed island pace.',
        timeDifference: 'Fiji is UTC+12 / +13. When noon: NYC 7 PM (-1), London midnight.',
        daylightSaving: 'Fiji observes DST November-January.',
        localTips: 'Bula means hello. Kava ceremony important. Most tourists go to resort islands.',
        transportation: 'Buses and taxis. Nausori Airport (SUV) 23km. Nadi for international.',
        emergencyNumbers: 'Emergency: 911.',
        publicHolidays: 'Fiji holidays. Fiji Day (October 10).'
      }
    }
  },

  // Africa
  { slug: 'marrakech', city: 'Marrakech', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 31.63, lng: -8.01, tier: 3, continent: 'africa',
    info: {
      currency: 'Moroccan Dirham', currencySymbol: 'MAD', population: '1M', metroPopulation: '1.3M', phoneCode: '+212 5', language: 'Arabic, Berber, French',
      climate: 'Semi-arid with hot summers (28-38°C) and mild winters (8-18°C). Very dry.',
      attractions: ['Jemaa el-Fnaa', 'Bahia Palace', 'Ben Youssef Madrasa', 'Majorelle Garden', 'Medina', 'Koutoubia Mosque', 'Saadian Tombs', 'Souks', 'El Badi Palace', 'Atlas Mountains nearby'],
      demographics: 'Morocco\'s Red City. Tourism hub. Ancient medina. Berber heritage.',
      seoContent: {
        intro: 'Marrakech, Morocco\'s Red City, operates on Western European Time (WET/UTC+0 or +1). This ancient imperial city captivates with its medina, souks, and Jemaa el-Fnaa square.',
        timezoneFacts: 'Morocco uses WET/WEST but suspends DST during Ramadan.',
        bestTimeToVisit: 'March-May and September-November. Summer extremely hot.',
        businessHours: 'Souks 9 AM to 9 PM. Friday prayers close some shops.',
        timeDifference: 'Marrakech is UTC+0 or +1. When noon: NYC 7 AM, London 12 PM.',
        daylightSaving: 'Complex DST - suspended during Ramadan.',
        localTips: 'Bargaining expected in souks. Jemaa el-Fnaa transforms at night. Riads are traditional stays.',
        transportation: 'Taxis and horse carriages. Marrakech Menara Airport (RAK) 6km.',
        emergencyNumbers: 'Emergency: 190 (police), 150 (fire).',
        publicHolidays: 'Moroccan and Islamic holidays.'
      }
    }
  },
  { slug: 'tunis', city: 'Tunis', timezone: 'Africa/Tunis', country: 'Tunisia', countryCode: 'TN', lat: 36.81, lng: 10.17, tier: 2, continent: 'africa',
    info: {
      currency: 'Tunisian Dinar', currencySymbol: 'TND', population: '700K', metroPopulation: '2.7M', phoneCode: '+216 71', language: 'Arabic, French',
      climate: 'Mediterranean with hot dry summers (26-33°C) and mild wet winters (8-16°C).',
      attractions: ['Medina of Tunis', 'Bardo Museum', 'Carthage', 'Sidi Bou Said', 'Zitouna Mosque', 'Avenue Bourguiba', 'La Marsa', 'Belvédère Park', 'Dar Ben Abdallah', 'Souk'],
      demographics: 'Tunisia\'s capital. Arab Spring birthplace. French colonial heritage.',
      seoContent: {
        intro: 'Tunis, Tunisia\'s capital, operates on Central European Time (CET/UTC+1). This North African city offers a UNESCO medina, ancient Carthage, and the charming Sidi Bou Said.',
        timezoneFacts: 'Same as Paris. Tunisia doesn\'t observe DST.',
        bestTimeToVisit: 'April-June and September-October. Summer hot. Winter mild.',
        businessHours: 'Shops 9 AM to 7 PM. Medina souks all day. Friday prayers affect hours.',
        timeDifference: 'Tunis is always UTC+1. When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'Tunisia does NOT observe DST.',
        localTips: 'Carthage is a must-see. Sidi Bou Said for blue and white charm. French widely spoken.',
        transportation: 'TGM train to suburbs. Tunis-Carthage Airport (TUN) 8km.',
        emergencyNumbers: 'Emergency: 197 (police), 198 (fire).',
        publicHolidays: 'Tunisian and Islamic holidays. Revolution Day (January 14).'
      }
    }
  },
  { slug: 'algiers', city: 'Algiers', timezone: 'Africa/Algiers', country: 'Algeria', countryCode: 'DZ', lat: 36.74, lng: 3.09, tier: 2, continent: 'africa',
    info: {
      currency: 'Algerian Dinar', currencySymbol: 'DZD', population: '3.4M', metroPopulation: '5M', phoneCode: '+213 21', language: 'Arabic, Berber, French',
      climate: 'Mediterranean with hot dry summers (25-32°C) and mild wet winters (9-17°C).',
      attractions: ['Casbah', 'Notre-Dame d\'Afrique', 'Martyrs\' Memorial', 'Jardin d\'Essai', 'Great Mosque', 'National Museum', 'Place des Martyrs', 'Mediterranean coast', 'El Hamma', 'Botanical Garden'],
      demographics: 'Algeria\'s capital. "White City" on Mediterranean. French colonial heritage.',
      seoContent: {
        intro: 'Algiers, Algeria\'s capital, operates on Central European Time (CET/UTC+1). The "White City" terraces down to the Mediterranean, with its UNESCO-listed Casbah.',
        timezoneFacts: 'Same as Paris. Algeria doesn\'t observe DST.',
        bestTimeToVisit: 'April-June and September-November. Summer hot. Winter mild and rainy.',
        businessHours: 'Shops 9 AM to 6 PM. Friday is holy day.',
        timeDifference: 'Algiers is always UTC+1. When noon: NYC 6 AM, London 11 AM.',
        daylightSaving: 'Algeria does NOT observe DST.',
        localTips: 'Casbah UNESCO site. Visa required for most. French helpful. Conservative dress.',
        transportation: 'Metro (2 lines). Houari Boumediene Airport (ALG) 20km.',
        emergencyNumbers: 'Emergency: 17 (police), 14 (fire).',
        publicHolidays: 'Algerian and Islamic holidays. Independence Day (July 5).'
      }
    }
  },
  { slug: 'addis-ababa', city: 'Addis Ababa', timezone: 'Africa/Addis_Ababa', country: 'Ethiopia', countryCode: 'ET', lat: 9.02, lng: 38.75, tier: 2, continent: 'africa',
    info: {
      currency: 'Ethiopian Birr', currencySymbol: 'ETB', population: '5.2M', metroPopulation: '5.5M', phoneCode: '+251 11', language: 'Amharic, English',
      climate: 'Subtropical highland with mild temperatures year-round (10-25°C). Rainy June-September.',
      attractions: ['National Museum (Lucy)', 'Holy Trinity Cathedral', 'Merkato', 'Entoto Hill', 'Red Terror Museum', 'Ethnological Museum', 'African Union HQ', 'Meskel Square', 'St. George Cathedral', 'Shiro Meda'],
      demographics: 'Ethiopia\'s capital. AU headquarters. Highest capital in Africa. Ancient coffee culture.',
      seoContent: {
        intro: 'Addis Ababa, Ethiopia\'s capital, operates on East Africa Time (EAT/UTC+3). Africa\'s diplomatic capital hosts the African Union and preserves "Lucy," our oldest human ancestor.',
        timezoneFacts: 'Ethiopia uses unique calendar (7-8 years behind Gregorian). New Year in September.',
        bestTimeToVisit: 'October-May for dry season. June-September rainy but green.',
        businessHours: 'Shops 8 AM to 8 PM. Ethiopian time counts differently (sunrise is 0).',
        timeDifference: 'Addis is always UTC+3. When noon: NYC 4 AM, London 9 AM.',
        daylightSaving: 'Ethiopia does NOT observe DST.',
        localTips: 'Ethiopian coffee ceremony. Injera bread with everything. Altitude 2,400m - acclimatize.',
        transportation: 'Light rail, buses. Bole Airport (ADD) 6km - major African hub.',
        emergencyNumbers: 'Emergency: 991.',
        publicHolidays: 'Ethiopian holidays. Ethiopian New Year (September 11).'
      }
    }
  },
  { slug: 'accra', city: 'Accra', timezone: 'Africa/Accra', country: 'Ghana', countryCode: 'GH', lat: 5.56, lng: -0.19, tier: 2, continent: 'africa',
    info: {
      currency: 'Ghanaian Cedi', currencySymbol: 'GH₵', population: '2.5M', metroPopulation: '4.9M', phoneCode: '+233 30', language: 'English, Akan',
      climate: 'Tropical savanna with hot weather year-round (24-32°C). Two rainy seasons.',
      attractions: ['Jamestown', 'Kwame Nkrumah Memorial', 'Independence Square', 'Makola Market', 'National Museum', 'Labadi Beach', 'W.E.B. Du Bois Center', 'Osu Castle', 'Arts Centre', 'Oxford Street'],
      demographics: 'Ghana\'s capital. Gateway to West Africa. Pan-African heritage.',
      seoContent: {
        intro: 'Accra, Ghana\'s capital, operates on Greenwich Mean Time (GMT/UTC+0). This vibrant West African capital combines colonial history, beaches, and Pan-African heritage.',
        timezoneFacts: 'Same as London in winter. Ghana doesn\'t observe DST.',
        bestTimeToVisit: 'November-March for dry season. August for Homowo festival.',
        businessHours: 'Shops 8 AM to 6 PM. Markets open early.',
        timeDifference: 'Accra is always UTC+0. When noon: NYC 7 AM, London 12 PM.',
        daylightSaving: 'Ghana does NOT observe DST.',
        localTips: '"Year of Return" resonates. Jollof rice debates are serious. Labadi Beach on weekends.',
        transportation: 'Trotros (minibuses). Kotoka Airport (ACC) 10km.',
        emergencyNumbers: 'Emergency: 191 (police), 192 (fire).',
        publicHolidays: 'Ghanaian holidays. Independence Day (March 6), Founders\' Day.'
      }
    }
  },
  { slug: 'dar-es-salaam', city: 'Dar es Salaam', timezone: 'Africa/Dar_es_Salaam', country: 'Tanzania', countryCode: 'TZ', lat: -6.79, lng: 39.21, tier: 2, continent: 'africa',
    info: {
      currency: 'Tanzanian Shilling', currencySymbol: 'TZS', population: '7.4M', metroPopulation: '7.4M', phoneCode: '+255 22', language: 'Swahili, English',
      climate: 'Tropical with hot humid weather year-round (24-32°C). Heavy rains March-May.',
      attractions: ['National Museum', 'Fish Market', 'Village Museum', 'Coco Beach', 'Kariakoo Market', 'Askari Monument', 'St. Joseph Cathedral', 'Bongoyo Island', 'Mwenge Carvers Market', 'Zanzibar ferry'],
      demographics: 'Tanzania\'s largest city. Former capital. Swahili coast. Gateway to safari and Zanzibar.',
      seoContent: {
        intro: 'Dar es Salaam, Tanzania\'s largest city, operates on East Africa Time (EAT/UTC+3). This Swahili coast city is the gateway to Serengeti safaris and exotic Zanzibar.',
        timezoneFacts: 'Same as Nairobi. Tanzania uses single timezone.',
        bestTimeToVisit: 'June-October for dry season. Avoid March-May heavy rains.',
        businessHours: 'Shops 8 AM to 6 PM. Ferry to Zanzibar runs daily.',
        timeDifference: 'Dar is always UTC+3. When noon: NYC 4 AM, London 9 AM.',
        daylightSaving: 'Tanzania does NOT observe DST.',
        localTips: 'Gateway to Zanzibar (ferry or flight). Swahili greetings appreciated. Safari capital.',
        transportation: 'Daladalas (minibuses). Julius Nyerere Airport (DAR) 13km.',
        emergencyNumbers: 'Emergency: 112 or 114.',
        publicHolidays: 'Tanzanian holidays. Union Day (April 26), Independence Day (December 9).'
      }
    }
  },

  // ========== CAPITAL CITIES FOR NEW COUNTRIES ==========
  // Africa Capitals
  { slug: 'tripoli', city: 'Tripoli', timezone: 'Africa/Tripoli', country: 'Libya', countryCode: 'LY', lat: 32.89, lng: 13.19, tier: 2, continent: 'africa',
    info: {
      currency: 'Libyan Dinar', currencySymbol: 'LD', population: '1.2M', phoneCode: '+218 21', language: 'Arabic',
      climate: 'Hot semi-arid with hot dry summers (30-38°C) and mild winters (12-18°C). Very little rainfall.',
      attractions: ['Red Castle Museum', 'Martyrs\' Square', 'Arch of Marcus Aurelius', 'Old Town Medina', 'Gurgi Mosque'],
      demographics: 'Capital and largest city of Libya on Mediterranean coast. Ancient Phoenician city with Roman and Ottoman heritage.'
    }
  },
  { slug: 'khartoum', city: 'Khartoum', timezone: 'Africa/Khartoum', country: 'Sudan', countryCode: 'SD', lat: 15.59, lng: 32.53, tier: 2, continent: 'africa',
    info: {
      currency: 'Sudanese Pound', currencySymbol: 'SDG', population: '5.3M', phoneCode: '+249 15', language: 'Arabic, English',
      climate: 'Hot desert with extreme heat (35-45°C) most of year. Brief rainy season July-September. Very dry.',
      attractions: ['Confluence of the Niles', 'Sudan National Museum', 'Tuti Island', 'Omdurman Souq', 'Republican Palace'],
      demographics: 'Capital of Sudan, located where Blue and White Nile rivers merge. One of the hottest major cities in the world.'
    }
  },
  { slug: 'juba', city: 'Juba', timezone: 'Africa/Juba', country: 'South Sudan', countryCode: 'SS', lat: 4.85, lng: 31.58, tier: 3, continent: 'africa',
    info: {
      currency: 'South Sudanese Pound', currencySymbol: 'SSP', population: '500K', phoneCode: '+211', language: 'English, Arabic, Juba Arabic',
      climate: 'Tropical with wet season (April-November) and dry season. Hot year-round (25-38°C).',
      attractions: ['Juba Bridge', 'Nile River', 'Jebel Kujur', 'Nimule National Park', 'Konyo Konyo Market'],
      demographics: 'Capital of South Sudan, world\'s newest country (2011). Located on the White Nile, growing despite challenges.'
    }
  },
  { slug: 'kampala', city: 'Kampala', timezone: 'Africa/Kampala', country: 'Uganda', countryCode: 'UG', lat: 0.31, lng: 32.58, tier: 2, continent: 'africa',
    info: {
      currency: 'Ugandan Shilling', currencySymbol: 'USh', population: '1.7M', phoneCode: '+256 41', language: 'English, Swahili, Luganda',
      climate: 'Tropical with two rainy seasons (March-May, September-November). Mild temperatures (17-27°C) due to altitude.',
      attractions: ['Kasubi Tombs', 'Uganda Museum', 'Gadaffi Mosque', 'Ndere Centre', 'Owino Market'],
      demographics: 'Capital and largest city of Uganda, built on seven hills like Rome. Gateway to mountain gorillas and East African safaris.'
    }
  },
  { slug: 'kigali', city: 'Kigali', timezone: 'Africa/Kigali', country: 'Rwanda', countryCode: 'RW', lat: -1.94, lng: 30.06, tier: 2, continent: 'africa',
    info: {
      currency: 'Rwandan Franc', currencySymbol: 'FRw', population: '1.2M', phoneCode: '+250', language: 'Kinyarwanda, English, French',
      climate: 'Tropical highland with mild temperatures year-round (15-27°C). Two rainy seasons (March-May, October-November).',
      attractions: ['Kigali Genocide Memorial', 'Kimironko Market', 'Inema Arts Center', 'Mount Kigali', 'Nyamirambo'],
      demographics: 'Capital and largest city of Rwanda, one of Africa\'s cleanest cities. Known for remarkable post-genocide transformation.'
    }
  },
  { slug: 'gitega', city: 'Gitega', timezone: 'Africa/Bujumbura', country: 'Burundi', countryCode: 'BI', lat: -3.43, lng: 29.93, tier: 3, continent: 'africa',
    info: {
      currency: 'Burundian Franc', currencySymbol: 'FBu', population: '135K', phoneCode: '+257 22', language: 'Kirundi, French',
      climate: 'Tropical highland with mild temperatures year-round (16-26°C). Two rainy seasons.',
      attractions: ['National Museum', 'Gitega Cathedral', 'Royal Drum Sanctuary', 'Mount Gikizi', 'Ruvubu National Park'],
      demographics: 'Political capital of Burundi since 2019, located in central highlands. Former royal capital with rich cultural heritage.'
    }
  },
  { slug: 'kinshasa', city: 'Kinshasa', timezone: 'Africa/Kinshasa', country: 'DR Congo', countryCode: 'CD', lat: -4.44, lng: 15.27, tier: 2, continent: 'africa',
    info: {
      currency: 'Congolese Franc', currencySymbol: 'FC', population: '17M', phoneCode: '+243 12', language: 'French, Lingala, Kikongo',
      climate: 'Tropical wet and dry with rainy season (October-May) and dry season. Hot year-round (24-33°C).',
      attractions: ['Lola ya Bonobo', 'National Museum', 'Académie des Beaux-Arts', 'Mont Ngaliema', 'Marché de la Liberté'],
      demographics: 'Capital of DR Congo, third-largest city in Africa. Largest French-speaking city in the world, faces Brazzaville across the Congo River.'
    }
  },
  { slug: 'brazzaville', city: 'Brazzaville', timezone: 'Africa/Brazzaville', country: 'Congo', countryCode: 'CG', lat: -4.27, lng: 15.28, tier: 2, continent: 'africa',
    info: {
      currency: 'Central African CFA Franc', currencySymbol: 'CFA', population: '1.8M', phoneCode: '+242', language: 'French, Lingala, Kikongo',
      climate: 'Tropical wet and dry with rainy seasons (October-December, March-May). Temperatures 21-32°C year-round.',
      attractions: ['Basilique Sainte-Anne', 'Nabemba Tower', 'Poto-Poto School of Painting', 'Pierre Savorgnan de Brazza Memorial', 'Congo River'],
      demographics: 'Capital of Republic of Congo, directly across the Congo River from Kinshasa. Closest capital cities in the world.'
    }
  },
  { slug: 'harare', city: 'Harare', timezone: 'Africa/Harare', country: 'Zimbabwe', countryCode: 'ZW', lat: -17.83, lng: 31.05, tier: 2, continent: 'africa',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '1.6M', phoneCode: '+263 4', language: 'English, Shona, Ndebele',
      climate: 'Subtropical highland with warm wet summers (18-26°C) and cool dry winters (7-21°C). Rainy season November-March.',
      attractions: ['National Gallery', 'Mukuvisi Woodlands', 'Harare Gardens', 'Mbare Musika Market', 'Chapungu Sculpture Park'],
      demographics: 'Capital and largest city of Zimbabwe, located at 1,483m elevation. Major commercial and cultural center of southern Africa.'
    }
  },
  { slug: 'lusaka', city: 'Lusaka', timezone: 'Africa/Lusaka', country: 'Zambia', countryCode: 'ZM', lat: -15.39, lng: 28.32, tier: 2, continent: 'africa',
    info: {
      currency: 'Zambian Kwacha', currencySymbol: 'ZMW', population: '3.3M', phoneCode: '+260 21', language: 'English, Nyanja, Bemba',
      climate: 'Humid subtropical with warm wet summers (20-27°C) and cool dry winters (10-23°C). Rainy season November-April.',
      attractions: ['Lusaka National Museum', 'Munda Wanga Environmental Park', 'Freedom Statue', 'Kabwata Cultural Village', 'Arcades Shopping Mall'],
      demographics: 'Capital and largest city of Zambia, one of fastest-developing cities in southern Africa. Central hub for commerce and government.'
    }
  },
  { slug: 'gaborone', city: 'Gaborone', timezone: 'Africa/Gaborone', country: 'Botswana', countryCode: 'BW', lat: -24.65, lng: 25.91, tier: 2, continent: 'africa',
    info: {
      currency: 'Botswana Pula', currencySymbol: 'P', population: '230K', phoneCode: '+267', language: 'English, Setswana',
      climate: 'Semi-arid with hot summers (25-35°C) and mild dry winters (5-22°C). Rainy season October-April.',
      attractions: ['Three Dikgosi Monument', 'Gaborone Game Reserve', 'National Museum', 'Mokolodi Nature Reserve', 'Kgale Hill'],
      demographics: 'Capital and largest city of Botswana, one of fastest-growing cities in Africa. Diamond trade and government center.'
    }
  },
  { slug: 'windhoek', city: 'Windhoek', timezone: 'Africa/Windhoek', country: 'Namibia', countryCode: 'NA', lat: -22.56, lng: 17.08, tier: 2, continent: 'africa',
    info: {
      currency: 'Namibian Dollar', currencySymbol: 'N$', population: '430K', phoneCode: '+264 61', language: 'English, Afrikaans, German',
      climate: 'Semi-arid with warm summers (25-32°C) and mild dry winters (8-22°C). Most rain December-April at 1,700m altitude.',
      attractions: ['Christuskirche', 'Independence Memorial Museum', 'Craft Centre', 'Joe\'s Beerhouse', 'Daan Viljoen Game Reserve'],
      demographics: 'Capital of Namibia, cleanest city in Africa. German colonial heritage visible in architecture, gateway to Namib Desert.'
    }
  },
  { slug: 'maputo', city: 'Maputo', timezone: 'Africa/Maputo', country: 'Mozambique', countryCode: 'MZ', lat: -25.97, lng: 32.58, tier: 2, continent: 'africa',
    info: {
      currency: 'Mozambican Metical', currencySymbol: 'MT', population: '1.1M', phoneCode: '+258 21', language: 'Portuguese',
      climate: 'Tropical with hot wet summers (25-32°C) and mild dry winters (18-26°C). Rainy season October-March.',
      attractions: ['Central Train Station', 'Fortaleza da Nossa Senhora', 'FEIMA Craft Market', 'Natural History Museum', 'Costa do Sol Beach'],
      demographics: 'Capital and largest city of Mozambique, blend of African and Portuguese colonial heritage. Major port and economic center.'
    }
  },
  { slug: 'luanda', city: 'Luanda', timezone: 'Africa/Luanda', country: 'Angola', countryCode: 'AO', lat: -8.84, lng: 13.23, tier: 2, continent: 'africa',
    info: {
      currency: 'Angolan Kwanza', currencySymbol: 'Kz', population: '8.3M', phoneCode: '+244 22', language: 'Portuguese',
      climate: 'Semi-arid with warm temperatures year-round (24-30°C). Rainy season November-April, dry and cool May-October.',
      attractions: ['Fortaleza de São Miguel', 'Ilha de Luanda', 'National Museum of Slavery', 'Marginal Promenade', 'Iron Palace'],
      demographics: 'Capital and largest city of Angola, one of Africa\'s most expensive cities. Major port and oil industry center.'
    }
  },
  { slug: 'yaounde', city: 'Yaoundé', timezone: 'Africa/Douala', country: 'Cameroon', countryCode: 'CM', lat: 3.87, lng: 11.52, tier: 2, continent: 'africa',
    info: {
      currency: 'Central African CFA Franc', currencySymbol: 'CFA', population: '4.1M', phoneCode: '+237 2', language: 'French, English',
      climate: 'Tropical with two rainy seasons (March-June, September-November). Mild due to elevation (750m), 20-28°C.',
      attractions: ['National Museum', 'Reunification Monument', 'Mvog-Betsi Zoo', 'Mount Fébé', 'Mefou National Park'],
      demographics: 'Capital of Cameroon since 1922, administrative center. Hilly "city of seven hills" with government and diplomatic functions.'
    }
  },
  { slug: 'yamoussoukro', city: 'Yamoussoukro', timezone: 'Africa/Abidjan', country: 'Ivory Coast', countryCode: 'CI', lat: 6.82, lng: -5.28, tier: 3, continent: 'africa',
    info: {
      currency: 'West African CFA Franc', currencySymbol: 'CFA', population: '360K', phoneCode: '+225 30', language: 'French, Baoulé',
      climate: 'Tropical with rainy seasons (March-June, September-November). Warm year-round (24-32°C).',
      attractions: ['Basilica of Our Lady of Peace', 'Presidential Palace', 'Sacred Crocodile Lake', 'Félix Houphouët-Boigny Foundation', 'Golf Course'],
      demographics: 'Official capital of Ivory Coast since 1983. Home to world\'s largest church (Basilica), birthplace of first president.'
    }
  },
  { slug: 'dakar', city: 'Dakar', timezone: 'Africa/Dakar', country: 'Senegal', countryCode: 'SN', lat: 14.69, lng: -17.44, tier: 2, continent: 'africa',
    info: {
      currency: 'West African CFA Franc', currencySymbol: 'CFA', population: '1.2M', phoneCode: '+221 33', language: 'French, Wolof',
      climate: 'Hot semi-arid with dry season (November-May) and wet season. Temperatures 20-32°C, ocean breezes provide relief.',
      attractions: ['Gorée Island', 'African Renaissance Monument', 'IFAN Museum', 'Lac Rose', 'Mosque of Divinity'],
      demographics: 'Capital and largest city of Senegal, westernmost city in Africa. Major port and former endpoint of Paris-Dakar Rally.'
    }
  },
  { slug: 'bamako', city: 'Bamako', timezone: 'Africa/Bamako', country: 'Mali', countryCode: 'ML', lat: 12.64, lng: -8.00, tier: 2, continent: 'africa',
    info: {
      currency: 'West African CFA Franc', currencySymbol: 'CFA', population: '2.7M', phoneCode: '+223 20', language: 'French, Bambara',
      climate: 'Tropical savanna with hot dry season (35-40°C) and rainy season June-September (25-32°C).',
      attractions: ['National Museum of Mali', 'Grand Mosque', 'Point G Hill', 'Bamako Zoo', 'Niger River Promenade'],
      demographics: 'Capital and largest city of Mali, fastest-growing city in Africa. Major trade and cultural center.'
    }
  },
  { slug: 'ouagadougou', city: 'Ouagadougou', timezone: 'Africa/Ouagadougou', country: 'Burkina Faso', countryCode: 'BF', lat: 12.37, lng: -1.52, tier: 2, continent: 'africa',
    info: {
      currency: 'West African CFA Franc', currencySymbol: 'CFA', population: '2.8M', phoneCode: '+226', language: 'French, Mossi',
      climate: 'Hot semi-arid with extreme heat (35-42°C) most of year. Rainy season June-September.',
      attractions: ['Grand Mosque', 'National Museum', 'FESPACO Film Festival', 'Bangr-Weoogo Urban Park', 'Grand Marché'],
      demographics: 'Capital and largest city of Burkina Faso, known as "Ouaga". Hosts Africa\'s largest film festival (FESPACO).'
    }
  },
  { slug: 'niamey', city: 'Niamey', timezone: 'Africa/Niamey', country: 'Niger', countryCode: 'NE', lat: 13.51, lng: 2.11, tier: 2, continent: 'africa',
    info: {
      currency: 'West African CFA Franc', currencySymbol: 'CFA', population: '1.3M', phoneCode: '+227', language: 'French, Hausa, Zarma',
      climate: 'Hot semi-arid with extreme heat (35-45°C) most of year. Brief rainy season June-September.',
      attractions: ['Grand Mosque', 'National Museum', 'Niger River', 'Grand Marché', 'Kennedy Bridge'],
      demographics: 'Capital and largest city of Niger, located on the Niger River. Fast-growing city in the Sahel region.'
    }
  },
  { slug: 'ndjamena', city: "N'Djamena", timezone: 'Africa/Ndjamena', country: 'Chad', countryCode: 'TD', lat: 12.13, lng: 15.05, tier: 2, continent: 'africa' },
  { slug: 'antananarivo', city: 'Antananarivo', timezone: 'Indian/Antananarivo', country: 'Madagascar', countryCode: 'MG', lat: -18.91, lng: 47.54, tier: 2, continent: 'africa',
    info: {
      currency: 'Malagasy Ariary', currencySymbol: 'Ar', population: '1.6M', phoneCode: '+261 20', language: 'Malagasy, French',
      climate: 'Subtropical highland with warm wet summers (20-28°C) and cool dry winters (10-20°C).',
      attractions: ['Rova of Antananarivo', 'Tsimbazaza Zoo', 'Analakely Market', 'Lake Anosy', 'Ambohimanga'],
      demographics: 'Capital and largest city of Madagascar, located at 1,280m elevation in the central highlands.'
    }
  },
  { slug: 'port-louis', city: 'Port Louis', timezone: 'Indian/Mauritius', country: 'Mauritius', countryCode: 'MU', lat: -20.16, lng: 57.50, tier: 3, continent: 'africa',
    info: {
      currency: 'Mauritian Rupee', currencySymbol: 'Rs', population: '150K', phoneCode: '+230', language: 'English, French, Creole',
      climate: 'Tropical with warm wet summers (25-30°C) and mild dry winters (18-24°C). Cyclone season November-April.',
      attractions: ['Central Market', 'Caudan Waterfront', 'Aapravasi Ghat', 'Blue Penny Museum', 'Champ de Mars'],
      demographics: 'Capital and largest city of Mauritius, major financial center. UNESCO World Heritage Site for its immigrant history.'
    }
  },
  { slug: 'lilongwe', city: 'Lilongwe', timezone: 'Africa/Blantyre', country: 'Malawi', countryCode: 'MW', lat: -13.98, lng: 33.79, tier: 3, continent: 'africa',
    info: {
      currency: 'Malawian Kwacha', currencySymbol: 'MK', population: '1.1M', phoneCode: '+265 1', language: 'English, Chichewa',
      climate: 'Subtropical highland with warm wet summers (20-28°C) and cool dry winters (10-23°C). Rainy season November-April.',
      attractions: ['Lilongwe Wildlife Centre', 'Kumbali Cultural Village', 'Old Town Market', 'Lilongwe Nature Sanctuary', 'Parliament Building'],
      demographics: 'Capital and largest city of Malawi, moved from Zomba in 1975. Planned city divided into Old Town and New City.'
    }
  },
  { slug: 'mogadishu', city: 'Mogadishu', timezone: 'Africa/Mogadishu', country: 'Somalia', countryCode: 'SO', lat: 2.04, lng: 45.34, tier: 2, continent: 'africa',
    info: {
      currency: 'Somali Shilling', currencySymbol: 'Sh', population: '2.6M', phoneCode: '+252 1', language: 'Somali, Arabic',
      climate: 'Hot semi-arid with warm temperatures year-round (25-32°C). Two rainy seasons (April-June, October-November).',
      attractions: ['Lido Beach', 'Mogadishu Cathedral', 'Bakara Market', 'Arba Rucun Mosque', 'Somali National Museum'],
      demographics: 'Capital and largest city of Somalia, "White Pearl of the Indian Ocean". Ancient port city undergoing reconstruction.'
    }
  },
  { slug: 'asmara', city: 'Asmara', timezone: 'Africa/Asmara', country: 'Eritrea', countryCode: 'ER', lat: 15.34, lng: 38.93, tier: 3, continent: 'africa',
    info: {
      currency: 'Eritrean Nakfa', currencySymbol: 'Nfk', population: '900K', phoneCode: '+291 1', language: 'Tigrinya, Arabic',
      climate: 'Semi-arid with mild temperatures year-round (15-25°C) due to high altitude. Rainy season June-September.',
      attractions: ['Fiat Tagliero Building', 'Cathedral of Asmara', 'National Museum', 'Opera House', 'Tank Graveyard'],
      demographics: 'Capital of Eritrea at 2,325m elevation, UNESCO World Heritage Site for its Modernist architecture.'
    }
  },
  { slug: 'djibouti-city', city: 'Djibouti City', timezone: 'Africa/Djibouti', country: 'Djibouti', countryCode: 'DJ', lat: 11.59, lng: 43.15, tier: 3, continent: 'africa',
    info: {
      currency: 'Djiboutian Franc', currencySymbol: 'Fdj', population: '600K', phoneCode: '+253', language: 'French, Arabic, Somali',
      climate: 'Hot desert with extreme heat (30-42°C). One of the hottest cities in the world. Minimal rainfall.',
      attractions: ['Lake Assal', 'Hamoudi Mosque', 'Central Market', 'Place du 27 Juin', 'European Quarter'],
      demographics: 'Capital of Djibouti, strategic port at entrance to Red Sea. Hosts major French, US, and Chinese military bases.'
    }
  },
  { slug: 'libreville', city: 'Libreville', timezone: 'Africa/Libreville', country: 'Gabon', countryCode: 'GA', lat: 0.39, lng: 9.45, tier: 2, continent: 'africa',
    info: {
      currency: 'Central African CFA Franc', currencySymbol: 'CFA', population: '850K', phoneCode: '+241', language: 'French',
      climate: 'Tropical with two rainy seasons and two dry seasons. Hot and humid year-round (24-31°C).',
      attractions: ['St. Michael\'s Church', 'National Museum', 'Pointe Denis Beach', 'Pongara National Park', 'Mont Bouët Market'],
      demographics: 'Capital and largest city of Gabon, one of the wealthiest cities in Africa due to oil. Founded as a settlement for freed slaves.'
    }
  },
  { slug: 'malabo', city: 'Malabo', timezone: 'Africa/Malabo', country: 'Equatorial Guinea', countryCode: 'GQ', lat: 3.75, lng: 8.78, tier: 3, continent: 'africa',
    info: {
      currency: 'Central African CFA Franc', currencySymbol: 'CFA', population: '300K', phoneCode: '+240 33', language: 'Spanish, French, Portuguese',
      climate: 'Tropical with heavy rainfall year-round (3000mm+). Warm and humid (23-30°C), wettest July-October.',
      attractions: ['Malabo Cathedral', 'Pico Basilé', 'Arena Blanca Beach', 'Casa Verde', 'Malabo National Park'],
      demographics: 'Capital of Equatorial Guinea on Bioko Island. One of Africa\'s wealthiest countries per capita due to oil reserves.'
    }
  },
  { slug: 'bangui', city: 'Bangui', timezone: 'Africa/Bangui', country: 'Central African Republic', countryCode: 'CF', lat: 4.39, lng: 18.56, tier: 3, continent: 'africa',
    info: {
      currency: 'Central African CFA Franc', currencySymbol: 'CFA', population: '900K', phoneCode: '+236', language: 'French, Sango',
      climate: 'Tropical with wet season (May-October) and dry season. Temperatures 21-34°C year-round.',
      attractions: ['Notre-Dame Cathedral', 'Boganda Museum', 'Presidential Palace', 'Ubangi River', 'Central Market'],
      demographics: 'Capital and largest city of Central African Republic, located on the Ubangi River bordering DR Congo.'
    }
  },
  { slug: 'bissau', city: 'Bissau', timezone: 'Africa/Bissau', country: 'Guinea-Bissau', countryCode: 'GW', lat: 11.86, lng: -15.60, tier: 3, continent: 'africa',
    info: {
      currency: 'West African CFA Franc', currencySymbol: 'CFA', population: '500K', phoneCode: '+245', language: 'Portuguese, Crioulo',
      climate: 'Tropical with rainy season (June-October) and dry season. Temperatures 24-32°C year-round.',
      attractions: ['Bandim Market', 'Presidential Palace', 'Bissau Cathedral', 'Pidjiguiti Memorial', 'Fortaleza de São José da Amura'],
      demographics: 'Capital and largest city of Guinea-Bissau, located on the Geba River estuary. Important port and commercial center.'
    }
  },
  { slug: 'conakry', city: 'Conakry', timezone: 'Africa/Conakry', country: 'Guinea', countryCode: 'GN', lat: 9.64, lng: -13.58, tier: 3, continent: 'africa',
    info: {
      currency: 'Guinean Franc', currencySymbol: 'FG', population: '2.0M', phoneCode: '+224', language: 'French, Susu, Fula',
      climate: 'Tropical monsoon with heavy rainy season (May-November). Temperatures 24-32°C year-round.',
      attractions: ['Grand Mosque of Conakry', 'Îles de Los', 'National Museum', 'Botanical Garden', 'Boulbinet'],
      demographics: 'Capital and largest city of Guinea, located on Tombo Island and Kaloum Peninsula. Major port for bauxite exports.'
    }
  },
  { slug: 'freetown', city: 'Freetown', timezone: 'Africa/Freetown', country: 'Sierra Leone', countryCode: 'SL', lat: 8.48, lng: -13.23, tier: 3, continent: 'africa',
    info: {
      currency: 'Sierra Leonean Leone', currencySymbol: 'Le', population: '1.2M', phoneCode: '+232 22', language: 'English, Krio',
      climate: 'Tropical monsoon with heavy rainy season (May-November). Hot and humid year-round (24-32°C).',
      attractions: ['Cotton Tree', 'Lumley Beach', 'Sierra Leone National Museum', 'Big Market', 'Tacugama Chimpanzee Sanctuary'],
      demographics: 'Capital and largest city of Sierra Leone, founded in 1792 for freed slaves. Major port on the Atlantic coast.'
    }
  },
  { slug: 'monrovia', city: 'Monrovia', timezone: 'Africa/Monrovia', country: 'Liberia', countryCode: 'LR', lat: 6.31, lng: -10.80, tier: 3, continent: 'africa',
    info: {
      currency: 'Liberian Dollar', currencySymbol: 'L$', population: '1.5M', phoneCode: '+231', language: 'English',
      climate: 'Tropical monsoon with heavy rainy season (May-October). Hot and humid year-round (24-30°C).',
      attractions: ['Providence Island', 'Liberian National Museum', 'Ducor Palace Hotel', 'Waterside Market', 'Centennial Pavilion'],
      demographics: 'Capital and largest city of Liberia, named after US President James Monroe. Founded by freed American slaves in 1822.'
    }
  },
  { slug: 'lome', city: 'Lomé', timezone: 'Africa/Lome', country: 'Togo', countryCode: 'TG', lat: 6.14, lng: 1.21, tier: 3, continent: 'africa',
    info: {
      currency: 'West African CFA Franc', currencySymbol: 'CFA', population: '1.8M', phoneCode: '+228', language: 'French, Ewe, Kabye',
      climate: 'Tropical with two rainy seasons (April-July, September-November). Warm year-round (24-32°C).',
      attractions: ['Grand Marché', 'Independence Monument', 'Lomé Cathedral', 'National Museum', 'Lomé Beach'],
      demographics: 'Capital and largest city of Togo, major port on Gulf of Guinea. Known for vibrant markets and fetish market.'
    }
  },
  { slug: 'porto-novo', city: 'Porto-Novo', timezone: 'Africa/Porto-Novo', country: 'Benin', countryCode: 'BJ', lat: 6.50, lng: 2.60, tier: 3, continent: 'africa',
    info: {
      currency: 'West African CFA Franc', currencySymbol: 'CFA', population: '280K', phoneCode: '+229', language: 'French, Yoruba, Fon',
      climate: 'Tropical with two rainy seasons (April-July, September-November). Warm year-round (25-33°C).',
      attractions: ['Royal Palace', 'Ethnographic Museum', 'Grand Mosque', 'Jardin Place Jean Bayol', 'Adjarra Village'],
      demographics: 'Official capital of Benin (legislature), though Cotonou is larger. Former capital of Dahomey Kingdom with Afro-Brazilian heritage.'
    }
  },
  { slug: 'nouakchott', city: 'Nouakchott', timezone: 'Africa/Nouakchott', country: 'Mauritania', countryCode: 'MR', lat: 18.09, lng: -15.98, tier: 3, continent: 'africa',
    info: {
      currency: 'Mauritanian Ouguiya', currencySymbol: 'UM', population: '1.3M', phoneCode: '+222', language: 'Arabic, French',
      climate: 'Hot desert with warm temperatures year-round (25-35°C). Minimal rainfall, dusty harmattan winds.',
      attractions: ['Port de Pêche', 'National Museum', 'Saudi Mosque', 'Plage des Pêcheurs', 'Cinquième Market'],
      demographics: 'Capital and largest city of Mauritania, built in 1958 as a small village. Now home to nearly a third of the country\'s population.'
    }
  },
  { slug: 'banjul', city: 'Banjul', timezone: 'Africa/Banjul', country: 'Gambia', countryCode: 'GM', lat: 13.45, lng: -16.58, tier: 3, continent: 'africa',
    info: {
      currency: 'Gambian Dalasi', currencySymbol: 'D', population: '35K', phoneCode: '+220', language: 'English, Mandinka',
      climate: 'Tropical with dry season (November-May) and wet season. Temperatures 23-34°C year-round.',
      attractions: ['Arch 22', 'Albert Market', 'Gambia National Museum', 'Kachikally Crocodile Pool', 'Banjul State House'],
      demographics: 'Capital of The Gambia, located on St Mary\'s Island at the mouth of the Gambia River.'
    }
  },
  { slug: 'praia', city: 'Praia', timezone: 'Atlantic/Cape_Verde', country: 'Cape Verde', countryCode: 'CV', lat: 14.93, lng: -23.51, tier: 3, continent: 'africa',
    info: {
      currency: 'Cape Verdean Escudo', currencySymbol: 'CVE', population: '160K', phoneCode: '+238', language: 'Portuguese, Cape Verdean Creole',
      climate: 'Hot semi-arid with warm temperatures year-round (22-28°C). Brief rainy season August-October.',
      attractions: ['Plateau district', 'Sucupira Market', 'Praia da Gamboa', 'Ethnographic Museum', 'Presidential Palace'],
      demographics: 'Capital and largest city of Cape Verde on Santiago Island. Main commercial and political center of the archipelago.'
    }
  },
  { slug: 'sao-tome', city: 'São Tomé', timezone: 'Africa/Sao_Tome', country: 'São Tomé and Príncipe', countryCode: 'ST', lat: 0.34, lng: 6.73, tier: 3, continent: 'africa',
    info: {
      currency: 'São Tomé and Príncipe Dobra', currencySymbol: 'Db', population: '80K', phoneCode: '+239', language: 'Portuguese',
      climate: 'Tropical with two dry seasons. Warm and humid year-round (24-30°C). Heavy rainfall on highlands.',
      attractions: ['Presidential Palace', 'National Museum', 'Ana Chaves Bay', 'Roça Plantation Houses', 'São Sebastião Museum'],
      demographics: 'Capital of São Tomé and Príncipe, second-smallest African country. Former Portuguese colony, cocoa and coffee history.'
    }
  },
  { slug: 'victoria-seychelles', city: 'Victoria', timezone: 'Indian/Mahe', country: 'Seychelles', countryCode: 'SC', lat: -4.62, lng: 55.45, tier: 3, continent: 'africa',
    info: {
      currency: 'Seychellois Rupee', currencySymbol: 'SCR', population: '30K', phoneCode: '+248', language: 'Seychellois Creole, English, French',
      climate: 'Tropical with warm humid weather year-round (26-30°C). Rainy season November-February.',
      attractions: ['Victoria Clock Tower', 'Sir Selwyn Clarke Market', 'Natural History Museum', 'Hindu Temple', 'Botanical Gardens'],
      demographics: 'Capital of Seychelles, one of smallest capitals in the world. Located on Mahé Island, gateway to pristine beaches and islands.'
    }
  },
  { slug: 'moroni', city: 'Moroni', timezone: 'Indian/Comoro', country: 'Comoros', countryCode: 'KM', lat: -11.70, lng: 43.26, tier: 3, continent: 'africa',
    info: {
      currency: 'Comorian Franc', currencySymbol: 'CF', population: '55K', phoneCode: '+269', language: 'Comorian, Arabic, French',
      climate: 'Tropical marine with hot humid season (November-April) and cooler dry season. Temperatures 24-30°C year-round.',
      attractions: ['Old Friday Mosque', 'Medina', 'Mount Karthala', 'Itsandra Beach', 'Volo Volo Market'],
      demographics: 'Capital of Comoros on Grande Comore island. Located near active volcano Mount Karthala, known for ylang-ylang and vanilla.'
    }
  },
  { slug: 'maseru', city: 'Maseru', timezone: 'Africa/Maseru', country: 'Lesotho', countryCode: 'LS', lat: -29.31, lng: 27.48, tier: 3, continent: 'africa',
    info: {
      currency: 'Lesotho Loti', currencySymbol: 'L', population: '330K', phoneCode: '+266 22', language: 'Sesotho, English',
      climate: 'Subtropical highland with warm wet summers (15-28°C) and cool dry winters (0-17°C). Most rain October-April.',
      attractions: ['Thaba Bosiu', 'Royal Palace', 'Pioneer Mall', 'Ha Kome Cave Houses', 'Kingsway'],
      demographics: 'Capital and largest city of Lesotho, on border with South Africa. Only country entirely above 1,000m elevation.'
    }
  },
  { slug: 'mbabane', city: 'Mbabane', timezone: 'Africa/Mbabane', country: 'Eswatini', countryCode: 'SZ', lat: -26.32, lng: 31.13, tier: 3, continent: 'africa',
    info: {
      currency: 'Swazi Lilangeni', currencySymbol: 'E', population: '95K', phoneCode: '+268 24', language: 'Swati, English',
      climate: 'Subtropical highland with warm wet summers (15-25°C) and cool dry winters (5-19°C).',
      attractions: ['Sibebe Rock', 'Swazi Market', 'Mantenga Cultural Village', 'Mlilwane Wildlife Sanctuary', 'Swazi Candles'],
      demographics: 'Administrative capital of Eswatini (formerly Swaziland), Africa\'s last absolute monarchy. Set in the Dlangeni Hills.'
    }
  },

  // Europe Capitals
  { slug: 'luxembourg-city', city: 'Luxembourg City', timezone: 'Europe/Luxembourg', country: 'Luxembourg', countryCode: 'LU', lat: 49.61, lng: 6.13, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '130K', phoneCode: '+352', language: 'Luxembourgish, French, German',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (0-5°C). Rainfall distributed throughout the year.',
      attractions: ['Old Town', 'Bock Casemates', 'Grand Ducal Palace', 'Grund Quarter', 'Philharmonie Luxembourg'],
      demographics: 'Capital of Luxembourg, UNESCO World Heritage Site. Major EU and financial center, one of the wealthiest cities in the world.'
    }
  },
  { slug: 'monaco', city: 'Monaco', timezone: 'Europe/Monaco', country: 'Monaco', countryCode: 'MC', lat: 43.73, lng: 7.42, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '40K', phoneCode: '+377', language: 'French, Monégasque',
      climate: 'Mediterranean with warm dry summers (23-28°C) and mild wet winters (10-14°C). 300+ sunny days.',
      attractions: ['Monte Carlo Casino', 'Prince\'s Palace', 'Oceanographic Museum', 'Monaco Grand Prix Circuit', 'Exotic Garden'],
      demographics: 'Second-smallest country in the world, most densely populated. Known for wealth, casinos, yacht harbor, and Formula 1.'
    }
  },
  { slug: 'andorra-la-vella', city: 'Andorra la Vella', timezone: 'Europe/Andorra', country: 'Andorra', countryCode: 'AD', lat: 42.51, lng: 1.52, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '23K', phoneCode: '+376', language: 'Catalan',
      climate: 'Alpine climate with cold snowy winters (-5 to 5°C) and mild summers (15-25°C).',
      attractions: ['Caldea Spa', 'Casa de la Vall', 'Grandvalira Ski Resort', 'Sant Esteve Church', 'Meritxell Sanctuary'],
      demographics: 'Highest capital city in Europe at 1,023m elevation, known for duty-free shopping and skiing.'
    }
  },
  { slug: 'vaduz', city: 'Vaduz', timezone: 'Europe/Vaduz', country: 'Liechtenstein', countryCode: 'LI', lat: 47.14, lng: 9.52, tier: 3, continent: 'europe',
    info: {
      currency: 'Swiss Franc', currencySymbol: 'CHF', population: '6K', phoneCode: '+423', language: 'German',
      climate: 'Oceanic with warm summers (18-25°C) and cold winters (-1 to 5°C). Alpine influence, föhn winds.',
      attractions: ['Vaduz Castle', 'Kunstmuseum Liechtenstein', 'Postal Museum', 'Red House', 'Liechtenstein National Museum'],
      demographics: 'Capital of Liechtenstein, one of world\'s smallest countries. Wealthy microstate known for banking, stamps, and Alpine scenery.'
    }
  },
  { slug: 'san-marino', city: 'San Marino', timezone: 'Europe/San_Marino', country: 'San Marino', countryCode: 'SM', lat: 43.94, lng: 12.46, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '4K', phoneCode: '+378', language: 'Italian',
      climate: 'Mediterranean with warm summers (22-28°C) and cool winters (2-10°C). Pleasant year-round.',
      attractions: ['Three Towers of San Marino', 'Palazzo Pubblico', 'Basilica di San Marino', 'State Museum', 'Monte Titano'],
      demographics: 'Capital of San Marino, world\'s oldest republic (founded 301 AD). Perched on Mount Titano, surrounded by Italy.'
    }
  },
  { slug: 'vatican-city', city: 'Vatican City', timezone: 'Europe/Vatican', country: 'Vatican City', countryCode: 'VA', lat: 41.90, lng: 12.45, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '800', phoneCode: '+39 06', language: 'Italian, Latin',
      climate: 'Mediterranean with hot dry summers (28-32°C) and mild wet winters (8-14°C).',
      attractions: ['St. Peter\'s Basilica', 'Sistine Chapel', 'Vatican Museums', 'St. Peter\'s Square', 'Vatican Gardens'],
      demographics: 'World\'s smallest independent state, headquarters of the Roman Catholic Church. Home to Pope and priceless Renaissance art.'
    }
  },
  { slug: 'valletta', city: 'Valletta', timezone: 'Europe/Malta', country: 'Malta', countryCode: 'MT', lat: 35.90, lng: 14.51, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '6K', phoneCode: '+356 21', language: 'Maltese, English',
      climate: 'Mediterranean with hot dry summers (28-34°C) and mild wet winters (12-16°C). Very sunny.',
      attractions: ['St. John\'s Co-Cathedral', 'Upper Barrakka Gardens', 'Grandmaster\'s Palace', 'Fort St. Elmo', 'Strait Street'],
      demographics: 'Capital of Malta, UNESCO World Heritage Site. Built by Knights of St. John in 16th century, smallest EU capital.'
    }
  },
  { slug: 'nicosia', city: 'Nicosia', timezone: 'Asia/Nicosia', country: 'Cyprus', countryCode: 'CY', lat: 35.17, lng: 33.37, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '340K', phoneCode: '+357 22', language: 'Greek, Turkish, English',
      climate: 'Semi-arid Mediterranean with hot dry summers (30-37°C) and mild wet winters (10-15°C).',
      attractions: ['Venetian Walls', 'Cyprus Museum', 'Ledra Street', 'Büyük Han', 'Selimiye Mosque'],
      demographics: 'Capital of Cyprus, last divided capital in the world (Greek south, Turkish north). Ancient city with over 4,500 years of history.'
    }
  },
  { slug: 'podgorica', city: 'Podgorica', timezone: 'Europe/Podgorica', country: 'Montenegro', countryCode: 'ME', lat: 42.44, lng: 19.26, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '190K', phoneCode: '+382 20', language: 'Montenegrin, Serbian',
      climate: 'Mediterranean with hot dry summers (28-35°C) and mild wet winters (5-12°C). One of Europe\'s sunniest cities.',
      attractions: ['Millennium Bridge', 'Clock Tower', 'Morača Monastery', 'Skadar Lake', 'Ribnica River'],
      demographics: 'Capital and largest city of Montenegro. Mix of Ottoman and modern architecture, gateway to coastal and mountain regions.'
    }
  },
  { slug: 'sarajevo', city: 'Sarajevo', timezone: 'Europe/Sarajevo', country: 'Bosnia and Herzegovina', countryCode: 'BA', lat: 43.86, lng: 18.41, tier: 3, continent: 'europe',
    info: {
      currency: 'Bosnia and Herzegovina Convertible Mark', currencySymbol: 'KM', population: '420K', phoneCode: '+387 33', language: 'Bosnian, Croatian, Serbian',
      climate: 'Humid continental with warm summers (20-27°C) and cold snowy winters (-2 to 5°C).',
      attractions: ['Baščaršija', 'Latin Bridge', 'Gazi Husrev-beg Mosque', 'Tunnel of Hope', 'Yellow Fortress'],
      demographics: 'Capital of Bosnia and Herzegovina, where WWI started (1914). Mix of Ottoman and Austro-Hungarian heritage, 1984 Winter Olympics host.'
    }
  },
  { slug: 'skopje', city: 'Skopje', timezone: 'Europe/Skopje', country: 'North Macedonia', countryCode: 'MK', lat: 42.00, lng: 21.43, tier: 3, continent: 'europe',
    info: {
      currency: 'Macedonian Denar', currencySymbol: 'MKD', population: '550K', phoneCode: '+389 2', language: 'Macedonian, Albanian',
      climate: 'Continental with hot summers (28-32°C) and cold winters (-2 to 5°C). Dry summers, wet winters.',
      attractions: ['Old Bazaar', 'Stone Bridge', 'Skopje Fortress', 'Mother Teresa Memorial House', 'Macedonia Square'],
      demographics: 'Capital of North Macedonia, birthplace of Mother Teresa. Rebuilt after 1963 earthquake with mix of Ottoman and modern architecture.'
    }
  },
  { slug: 'tirana', city: 'Tirana', timezone: 'Europe/Tirane', country: 'Albania', countryCode: 'AL', lat: 41.33, lng: 19.82, tier: 3, continent: 'europe',
    info: {
      currency: 'Albanian Lek', currencySymbol: 'L', population: '520K', phoneCode: '+355 4', language: 'Albanian',
      climate: 'Mediterranean with hot dry summers (28-34°C) and mild wet winters (5-12°C).',
      attractions: ['Skanderbeg Square', 'Bunk\'Art', 'Et\'hem Bey Mosque', 'National History Museum', 'Dajti Mountain'],
      demographics: 'Capital and largest city of Albania, transformed from isolated communist state to vibrant European capital. Colorful building facades.'
    }
  },
  { slug: 'chisinau', city: 'Chișinău', timezone: 'Europe/Chisinau', country: 'Moldova', countryCode: 'MD', lat: 47.01, lng: 28.86, tier: 3, continent: 'europe',
    info: {
      currency: 'Moldovan Leu', currencySymbol: 'L', population: '700K', phoneCode: '+373 22', language: 'Romanian, Russian',
      climate: 'Humid continental with warm summers (20-28°C) and cold winters (-3 to 3°C). Moderate rainfall.',
      attractions: ['Nativity Cathedral', 'Stefan cel Mare Park', 'National Museum of History', 'Triumphal Arch', 'Cricova Winery'],
      demographics: 'Capital and largest city of Moldova, main economic and cultural center. Known for wine cellars and Soviet-era architecture.'
    }
  },
  { slug: 'minsk', city: 'Minsk', timezone: 'Europe/Minsk', country: 'Belarus', countryCode: 'BY', lat: 53.90, lng: 27.57, tier: 2, continent: 'europe',
    info: {
      currency: 'Belarusian Ruble', currencySymbol: 'Br', population: '2.0M', phoneCode: '+375 17', language: 'Belarusian, Russian',
      climate: 'Humid continental with warm summers (18-24°C) and cold snowy winters (-6 to -2°C).',
      attractions: ['Independence Avenue', 'Victory Square', 'National Library', 'Trinity Suburb', 'Island of Tears'],
      demographics: 'Capital and largest city of Belarus, rebuilt after WWII destruction. Known for Soviet-era architecture and wide boulevards.'
    }
  },
  { slug: 'pristina', city: 'Pristina', timezone: 'Europe/Belgrade', country: 'Kosovo', countryCode: 'XK', lat: 42.66, lng: 21.17, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '210K', phoneCode: '+383 38', language: 'Albanian, Serbian',
      climate: 'Continental with hot summers (22-30°C) and cold winters (-2 to 5°C). Snow in winter.',
      attractions: ['Newborn Monument', 'National Library', 'Mother Teresa Cathedral', 'Ethnological Museum', 'Germia Park'],
      demographics: 'Capital and largest city of Kosovo. Young, dynamic city with rich Ottoman and modern history, independence declared 2008.'
    }
  },

  // Asia Capitals
  { slug: 'baku', city: 'Baku', timezone: 'Asia/Baku', country: 'Azerbaijan', countryCode: 'AZ', lat: 40.41, lng: 49.87, tier: 2, continent: 'asia',
    info: {
      currency: 'Azerbaijani Manat', currencySymbol: '₼', population: '2.3M', phoneCode: '+994 12', language: 'Azerbaijani',
      climate: 'Semi-arid with hot dry summers (25-35°C) and mild winters (3-8°C). Strong winds common.',
      attractions: ['Flame Towers', 'Old City (Icherisheher)', 'Heydar Aliyev Center', 'Maiden Tower', 'Highland Park'],
      demographics: 'Capital and largest city of Azerbaijan, largest city on the Caspian Sea. Major oil and gas hub.'
    }
  },
  { slug: 'yerevan', city: 'Yerevan', timezone: 'Asia/Yerevan', country: 'Armenia', countryCode: 'AM', lat: 40.18, lng: 44.51, tier: 3, continent: 'asia',
    info: {
      currency: 'Armenian Dram', currencySymbol: 'AMD', population: '1.1M', phoneCode: '+374 10', language: 'Armenian',
      climate: 'Continental with hot dry summers (28-35°C) and cold winters (-5 to 3°C). Low rainfall.',
      attractions: ['Republic Square', 'Cascade Complex', 'Matenadaran', 'Yerevan Opera House', 'Mount Ararat View'],
      demographics: 'Capital of Armenia, one of world\'s oldest continuously inhabited cities. Pink volcanic stone architecture, view of biblical Mount Ararat.'
    }
  },
  { slug: 'tbilisi', city: 'Tbilisi', timezone: 'Asia/Tbilisi', country: 'Georgia', countryCode: 'GE', lat: 41.72, lng: 44.79, tier: 3, continent: 'asia',
    info: {
      currency: 'Georgian Lari', currencySymbol: 'GEL', population: '1.2M', phoneCode: '+995 32', language: 'Georgian',
      climate: 'Humid subtropical with hot summers (25-32°C) and cool winters (2-8°C). Moderate rainfall.',
      attractions: ['Old Town', 'Narikala Fortress', 'Sulfur Baths', 'Holy Trinity Cathedral', 'Rustaveli Avenue'],
      demographics: 'Capital of Georgia, founded in 5th century. Known for thermal baths, wine culture, and unique alphabet. Rising tourism destination.'
    }
  },
  { slug: 'tashkent', city: 'Tashkent', timezone: 'Asia/Tashkent', country: 'Uzbekistan', countryCode: 'UZ', lat: 41.30, lng: 69.28, tier: 2, continent: 'asia',
    info: {
      currency: 'Uzbek Som', currencySymbol: 'UZS', population: '2.6M', phoneCode: '+998 71', language: 'Uzbek, Russian',
      climate: 'Continental with hot dry summers (30-40°C) and cold winters (-2 to 5°C). Low rainfall.',
      attractions: ['Chorsu Bazaar', 'Khast Imam Complex', 'Tashkent Metro', 'Amir Timur Square', 'Minor Mosque'],
      demographics: 'Capital of Uzbekistan, largest city in Central Asia. Rebuilt after 1966 earthquake with Soviet-era architecture and Silk Road heritage.'
    }
  },
  { slug: 'astana', city: 'Astana', timezone: 'Asia/Almaty', country: 'Kazakhstan', countryCode: 'KZ', lat: 51.17, lng: 71.43, tier: 2, continent: 'asia',
    info: {
      currency: 'Kazakhstani Tenge', currencySymbol: '₸', population: '1.4M', phoneCode: '+7 7172', language: 'Kazakh, Russian',
      climate: 'Extreme continental with very cold winters (-30 to -15°C) and warm summers (20-30°C).',
      attractions: ['Bayterek Tower', 'Khan Shatyr', 'Palace of Peace and Reconciliation', 'Nur-Astana Mosque', 'National Museum'],
      demographics: 'Capital of Kazakhstan since 1997, one of the coldest capitals in the world. Modern planned city.'
    }
  },
  { slug: 'ashgabat', city: 'Ashgabat', timezone: 'Asia/Ashgabat', country: 'Turkmenistan', countryCode: 'TM', lat: 37.95, lng: 58.38, tier: 3, continent: 'asia',
    info: {
      currency: 'Turkmenistan Manat', currencySymbol: 'm', population: '1.0M', phoneCode: '+993 12', language: 'Turkmen, Russian',
      climate: 'Desert climate with very hot summers (35-45°C) and cold winters (0-10°C). Very little rainfall.',
      attractions: ['Neutrality Monument', 'Turkmenbashi Ruhy Mosque', 'National Museum', 'Earthquake Monument', 'Wedding Palace'],
      demographics: 'Capital of Turkmenistan, known for white marble buildings and holding Guinness record for most marble buildings.'
    }
  },
  { slug: 'dushanbe', city: 'Dushanbe', timezone: 'Asia/Dushanbe', country: 'Tajikistan', countryCode: 'TJ', lat: 38.54, lng: 68.77, tier: 3, continent: 'asia',
    info: {
      currency: 'Tajikistani Somoni', currencySymbol: 'SM', population: '1.0M', phoneCode: '+992 37', language: 'Tajik, Russian',
      climate: 'Mediterranean-influenced continental with hot summers (28-38°C) and mild winters (0-8°C).',
      attractions: ['Rudaki Park', 'National Museum', 'Dushanbe Flagpole', 'Ismoil Somoni Monument', 'Hoji Yakoub Mosque'],
      demographics: 'Capital and largest city of Tajikistan, name means "Monday" (founded on a Monday market day). Growing modern capital.'
    }
  },
  { slug: 'bishkek', city: 'Bishkek', timezone: 'Asia/Bishkek', country: 'Kyrgyzstan', countryCode: 'KG', lat: 42.87, lng: 74.59, tier: 3, continent: 'asia',
    info: {
      currency: 'Kyrgyzstani Som', currencySymbol: 'с', population: '1.1M', phoneCode: '+996 312', language: 'Kyrgyz, Russian',
      climate: 'Continental with hot summers (25-35°C) and cold winters (-5 to 5°C). Low rainfall.',
      attractions: ['Ala-Too Square', 'State Historical Museum', 'Osh Bazaar', 'Victory Square', 'Panfilov Park'],
      demographics: 'Capital and largest city of Kyrgyzstan, gateway to the Tian Shan mountains. Growing tourism and tech hub.'
    }
  },
  { slug: 'ulaanbaatar', city: 'Ulaanbaatar', timezone: 'Asia/Ulaanbaatar', country: 'Mongolia', countryCode: 'MN', lat: 47.91, lng: 106.91, tier: 3, continent: 'asia',
    info: {
      currency: 'Mongolian Tugrik', currencySymbol: '₮', population: '1.5M', phoneCode: '+976 11', language: 'Mongolian',
      climate: 'Subarctic with short warm summers (17-25°C) and extremely cold winters (-25 to -15°C). Coldest capital city in the world.',
      attractions: ['Gandantegchinlen Monastery', 'Genghis Khan Square', 'National Museum', 'Zaisan Memorial', 'Winter Palace of Bogd Khan'],
      demographics: 'Capital of Mongolia, home to nearly half the country\'s population. Gateway to nomadic culture and Gobi Desert.'
    }
  },
  { slug: 'vientiane', city: 'Vientiane', timezone: 'Asia/Vientiane', country: 'Laos', countryCode: 'LA', lat: 17.97, lng: 102.60, tier: 3, continent: 'asia',
    info: {
      currency: 'Lao Kip', currencySymbol: '₭', population: '950K', phoneCode: '+856 21', language: 'Lao',
      climate: 'Tropical savanna with hot season (March-May), rainy monsoon (June-October), and cool season. Temperatures 22-35°C.',
      attractions: ['Pha That Luang', 'Patuxai', 'Buddha Park', 'Wat Si Saket', 'Morning Market'],
      demographics: 'Capital of Laos on the Mekong River, one of the most relaxed capitals in Asia. French colonial influence and Buddhist temples.'
    }
  },
  { slug: 'bandar-seri-begawan', city: 'Bandar Seri Begawan', timezone: 'Asia/Brunei', country: 'Brunei', countryCode: 'BN', lat: 4.89, lng: 114.94, tier: 3, continent: 'asia',
    info: {
      currency: 'Brunei Dollar', currencySymbol: 'B$', population: '50K', phoneCode: '+673', language: 'Malay, English',
      climate: 'Tropical rainforest with high humidity year-round. Temperatures 24-32°C with heavy rainfall.',
      attractions: ['Omar Ali Saifuddien Mosque', 'Royal Regalia Museum', 'Kampong Ayer Water Village', 'Jame Asr Hassanil Bolkiah Mosque', 'Istana Nurul Iman'],
      demographics: 'Capital of Brunei, one of the wealthiest cities in Southeast Asia due to oil and gas reserves.'
    }
  },
  { slug: 'dili', city: 'Dili', timezone: 'Asia/Dili', country: 'Timor-Leste', countryCode: 'TL', lat: -8.56, lng: 125.57, tier: 3, continent: 'asia',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '280K', phoneCode: '+670', language: 'Tetum, Portuguese',
      climate: 'Tropical with wet season (December-May) and dry season. Temperatures 24-32°C year-round.',
      attractions: ['Cristo Rei Statue', 'Santa Cruz Cemetery', 'Resistance Museum', 'Areia Branca Beach', 'Tais Market'],
      demographics: 'Capital of Timor-Leste (East Timor), one of world\'s youngest nations (independent 2002). Recovering from past conflicts.'
    }
  },
  { slug: 'male', city: 'Malé', timezone: 'Indian/Maldives', country: 'Maldives', countryCode: 'MV', lat: 4.18, lng: 73.51, tier: 3, continent: 'asia',
    info: {
      currency: 'Maldivian Rufiyaa', currencySymbol: 'Rf', population: '250K', phoneCode: '+960', language: 'Dhivehi, English',
      climate: 'Tropical monsoon with warm temperatures year-round (28-32°C). Wet southwest monsoon May-November.',
      attractions: ['Malé Friday Mosque', 'National Museum', 'Artificial Beach', 'Sultan Park', 'Fish Market'],
      demographics: 'Capital of Maldives, one of the most densely populated cities in the world. Located on a small island at risk from rising sea levels.'
    }
  },
  { slug: 'thimphu', city: 'Thimphu', timezone: 'Asia/Thimphu', country: 'Bhutan', countryCode: 'BT', lat: 27.47, lng: 89.64, tier: 3, continent: 'asia',
    info: {
      currency: 'Bhutanese Ngultrum', currencySymbol: 'Nu', population: '115K', phoneCode: '+975 2', language: 'Dzongkha',
      climate: 'Humid subtropical highland with cool summers (15-25°C) and cold winters (0-12°C) at 2,300m altitude.',
      attractions: ['Tashichho Dzong', 'Buddha Dordenma', 'Memorial Chorten', 'Folk Heritage Museum', 'Centenary Farmers Market'],
      demographics: 'Capital of Bhutan, one of few capitals without traffic lights. Center of Gross National Happiness philosophy and Buddhist culture.'
    }
  },
  { slug: 'kabul', city: 'Kabul', timezone: 'Asia/Kabul', country: 'Afghanistan', countryCode: 'AF', lat: 34.53, lng: 69.17, tier: 2, continent: 'asia',
    info: {
      currency: 'Afghan Afghani', currencySymbol: '؋', population: '4.4M', phoneCode: '+93 20', language: 'Dari, Pashto',
      climate: 'Semi-arid with hot summers (25-35°C) and cold snowy winters (-5 to 5°C). High altitude at 1,800m.',
      attractions: ['Gardens of Babur', 'Darul Aman Palace', 'National Museum', 'Blue Mosque', 'Kabul Zoo'],
      demographics: 'Capital and largest city of Afghanistan, located in a valley in the Hindu Kush. Over 3,500 years of history.'
    }
  },
  { slug: 'baghdad', city: 'Baghdad', timezone: 'Asia/Baghdad', country: 'Iraq', countryCode: 'IQ', lat: 33.31, lng: 44.37, tier: 2, continent: 'asia',
    info: {
      currency: 'Iraqi Dinar', currencySymbol: 'IQD', population: '8.8M', phoneCode: '+964 1', language: 'Arabic, Kurdish',
      climate: 'Hot desert climate with extremely hot summers (40-50°C) and mild winters (5-15°C). Very little rainfall.',
      attractions: ['Al-Shaheed Monument', 'Iraq Museum', 'Al-Mutanabbi Street', 'Al-Kadhimiya Mosque', 'Firdos Square'],
      demographics: 'Capital and largest city of Iraq, historic center of Islamic Golden Age. Located on the Tigris River.'
    }
  },
  { slug: 'damascus', city: 'Damascus', timezone: 'Asia/Damascus', country: 'Syria', countryCode: 'SY', lat: 33.51, lng: 36.29, tier: 2, continent: 'asia',
    info: {
      currency: 'Syrian Pound', currencySymbol: 'SYP', population: '2.0M', phoneCode: '+963 11', language: 'Arabic',
      climate: 'Semi-arid with hot dry summers (25-37°C) and cool wet winters (3-12°C). Snow rare but possible.',
      attractions: ['Umayyad Mosque', 'Old City', 'Azm Palace', 'Saladin\'s Tomb', 'National Museum'],
      demographics: 'Capital of Syria, one of the oldest continuously inhabited cities in the world (10,000+ years). UNESCO World Heritage Site.'
    }
  },
  { slug: 'amman', city: 'Amman', timezone: 'Asia/Amman', country: 'Jordan', countryCode: 'JO', lat: 31.95, lng: 35.93, tier: 2, continent: 'asia',
    info: {
      currency: 'Jordanian Dinar', currencySymbol: 'JD', population: '4.5M', phoneCode: '+962 6', language: 'Arabic',
      climate: 'Mediterranean with hot dry summers (25-35°C) and cool wet winters (5-12°C). Snow possible in winter.',
      attractions: ['Roman Amphitheater', 'Citadel', 'Rainbow Street', 'King Abdullah Mosque', 'Jordan Museum'],
      demographics: 'Capital and largest city of Jordan, one of the oldest continuously inhabited cities in the world.'
    }
  },
  { slug: 'beirut', city: 'Beirut', timezone: 'Asia/Beirut', country: 'Lebanon', countryCode: 'LB', lat: 33.89, lng: 35.50, tier: 2, continent: 'asia',
    info: {
      currency: 'Lebanese Pound', currencySymbol: 'L£', population: '2.4M', phoneCode: '+961 1', language: 'Arabic, French, English',
      climate: 'Mediterranean with hot dry summers (25-32°C) and mild rainy winters (10-17°C).',
      attractions: ['Pigeon Rocks', 'National Museum', 'Mohammad Al-Amin Mosque', 'Beirut Souks', 'Corniche Beirut'],
      demographics: 'Capital and largest city of Lebanon, historic crossroads of Eastern and Western cultures. Known as "Paris of the Middle East".'
    }
  },
  { slug: 'sanaa', city: 'Sanaa', timezone: 'Asia/Aden', country: 'Yemen', countryCode: 'YE', lat: 15.37, lng: 44.19, tier: 3, continent: 'asia',
    info: {
      currency: 'Yemeni Rial', currencySymbol: 'YER', population: '4.0M', phoneCode: '+967 1', language: 'Arabic',
      climate: 'Semi-arid with mild temperatures year-round (12-28°C) due to 2,300m elevation. Rainy season July-August.',
      attractions: ['Old City', 'Bab al-Yemen', 'Great Mosque of Sanaa', 'National Museum', 'Dar al-Hajar'],
      demographics: 'Capital of Yemen, one of world\'s oldest continuously inhabited cities. UNESCO World Heritage Site with distinctive tower houses.'
    }
  },
  { slug: 'muscat', city: 'Muscat', timezone: 'Asia/Muscat', country: 'Oman', countryCode: 'OM', lat: 23.59, lng: 58.41, tier: 3, continent: 'asia',
    info: {
      currency: 'Omani Rial', currencySymbol: 'OMR', population: '1.5M', phoneCode: '+968', language: 'Arabic, English',
      climate: 'Hot desert with very hot summers (30-42°C) and warm winters (18-26°C). Very little rainfall.',
      attractions: ['Sultan Qaboos Grand Mosque', 'Royal Opera House', 'Mutrah Souq', 'Al Jalali & Al Mirani Forts', 'Wadi Shab'],
      demographics: 'Capital and largest city of Oman, nestled between mountains and sea. Known for traditional architecture and modern development.'
    }
  },
  { slug: 'manama', city: 'Manama', timezone: 'Asia/Bahrain', country: 'Bahrain', countryCode: 'BH', lat: 26.23, lng: 50.59, tier: 3, continent: 'asia',
    info: {
      currency: 'Bahraini Dinar', currencySymbol: 'BD', population: '450K', phoneCode: '+973', language: 'Arabic, English',
      climate: 'Hot desert with very hot humid summers (35-45°C) and mild winters (15-22°C). Almost no rainfall.',
      attractions: ['Bahrain National Museum', 'Al-Fateh Grand Mosque', 'Bahrain Fort', 'Bab el-Bahrain', 'The Avenues Mall'],
      demographics: 'Capital of Bahrain, major financial hub in the Persian Gulf. One of the oldest continuously inhabited cities in the region.'
    }
  },
  { slug: 'kuwait-city', city: 'Kuwait City', timezone: 'Asia/Kuwait', country: 'Kuwait', countryCode: 'KW', lat: 29.38, lng: 47.99, tier: 2, continent: 'asia',
    info: {
      currency: 'Kuwaiti Dinar', currencySymbol: 'KD', population: '3.0M', phoneCode: '+965', language: 'Arabic, English',
      climate: 'Hot desert with extremely hot summers (40-50°C) and mild winters (10-20°C). Very little rainfall.',
      attractions: ['Kuwait Towers', 'Grand Mosque', 'Souq Al-Mubarakiya', 'Liberation Tower', 'Scientific Center'],
      demographics: 'Capital and largest city of Kuwait, one of the richest cities in the world. Modern skyline with traditional souqs.'
    }
  },
  { slug: 'ramallah', city: 'Ramallah', timezone: 'Asia/Gaza', country: 'Palestine', countryCode: 'PS', lat: 31.90, lng: 35.20, tier: 3, continent: 'asia',
    info: {
      currency: 'Israeli Shekel', currencySymbol: '₪', population: '40K', phoneCode: '+970 2', language: 'Arabic',
      climate: 'Mediterranean with hot dry summers (25-30°C) and mild wet winters (5-12°C).',
      attractions: ['Yasser Arafat Museum', 'Mahmoud Darwish Museum', 'Al-Manara Square', 'Ramallah Cultural Palace', 'Old Town'],
      demographics: 'De facto administrative capital of the Palestinian Authority in the West Bank. Cultural and economic center with vibrant arts scene.'
    }
  },

  // Americas Capitals
  { slug: 'kingston', city: 'Kingston', timezone: 'America/Jamaica', country: 'Jamaica', countryCode: 'JM', lat: 18.00, lng: -76.79, tier: 3, continent: 'americas',
    info: {
      currency: 'Jamaican Dollar', currencySymbol: 'J$', population: '670K', phoneCode: '+1 876', language: 'English, Jamaican Patois',
      climate: 'Tropical with warm temperatures year-round (25-33°C). Hurricane season June-November. Drier than north coast.',
      attractions: ['Bob Marley Museum', 'Devon House', 'Port Royal', 'Hope Botanical Gardens', 'National Gallery'],
      demographics: 'Capital and largest city of Jamaica, birthplace of reggae music. Cultural and economic hub of the Caribbean.'
    }
  },
  { slug: 'port-of-spain', city: 'Port of Spain', timezone: 'America/Port_of_Spain', country: 'Trinidad and Tobago', countryCode: 'TT', lat: 10.66, lng: -61.51, tier: 3, continent: 'americas',
    info: {
      currency: 'Trinidad and Tobago Dollar', currencySymbol: 'TT$', population: '40K', phoneCode: '+1 868', language: 'English, Trinidadian Creole',
      climate: 'Tropical with dry season (January-May) and wet season. Warm year-round (25-34°C). Outside hurricane belt.',
      attractions: ['Queen\'s Park Savannah', 'Magnificent Seven', 'Emperor Valley Zoo', 'National Museum', 'Maracas Bay'],
      demographics: 'Capital of Trinidad and Tobago, famous for Carnival. Major Caribbean financial center and birthplace of steel pan music.'
    }
  },
  { slug: 'nassau', city: 'Nassau', timezone: 'America/Nassau', country: 'Bahamas', countryCode: 'BS', lat: 25.08, lng: -77.34, tier: 3, continent: 'americas',
    info: {
      currency: 'Bahamian Dollar', currencySymbol: 'B$', population: '280K', phoneCode: '+1 242', language: 'English',
      climate: 'Tropical with warm temperatures year-round (22-32°C). Hurricane season June-November. Dry season December-April.',
      attractions: ['Paradise Island', 'Atlantis Resort', 'Fort Charlotte', 'Straw Market', 'Queen\'s Staircase'],
      demographics: 'Capital of the Bahamas on New Providence Island. Major cruise port and tourist destination known for beaches and resorts.'
    }
  },
  { slug: 'bridgetown', city: 'Bridgetown', timezone: 'America/Barbados', country: 'Barbados', countryCode: 'BB', lat: 13.10, lng: -59.61, tier: 3, continent: 'americas',
    info: {
      currency: 'Barbadian Dollar', currencySymbol: 'Bds$', population: '110K', phoneCode: '+1 246', language: 'English',
      climate: 'Tropical with warm temperatures year-round (24-30°C). Wet season June-November, dry season December-May.',
      attractions: ['Parliament Buildings', 'Nidhe Israel Synagogue', 'Carlisle Bay', 'Garrison Historic Area', 'Cheapside Market'],
      demographics: 'Capital and largest city of Barbados, UNESCO World Heritage Site. Major Caribbean cruise port and financial center.'
    }
  },
  { slug: 'port-au-prince', city: 'Port-au-Prince', timezone: 'America/Port-au-Prince', country: 'Haiti', countryCode: 'HT', lat: 18.54, lng: -72.34, tier: 3, continent: 'americas',
    info: {
      currency: 'Haitian Gourde', currencySymbol: 'G', population: '2.6M', phoneCode: '+509 2', language: 'French, Haitian Creole',
      climate: 'Tropical with wet season (April-November) and dry season. Warm year-round (25-35°C). Hurricane risk.',
      attractions: ['Iron Market', 'National Palace', 'Musée du Panthéon National', 'Cathédrale Notre-Dame', 'Pétion-Ville'],
      demographics: 'Capital and largest city of Haiti, on Gulf of Gonâve. Rebuilding after devastating 2010 earthquake.'
    }
  },
  { slug: 'santo-domingo', city: 'Santo Domingo', timezone: 'America/Santo_Domingo', country: 'Dominican Republic', countryCode: 'DO', lat: 18.49, lng: -69.90, tier: 2, continent: 'americas',
    info: {
      currency: 'Dominican Peso', currencySymbol: 'RD$', population: '1.0M', phoneCode: '+1 809', language: 'Spanish',
      climate: 'Tropical with warm temperatures year-round (25-32°C). Rainy season May-November, hurricane risk.',
      attractions: ['Colonial Zone', 'Alcázar de Colón', 'Cathedral of Santa María', 'National Palace', 'El Malecón'],
      demographics: 'Capital of Dominican Republic, oldest continuously inhabited European settlement in the Americas (1496). UNESCO World Heritage Site.'
    }
  },
  { slug: 'guatemala-city', city: 'Guatemala City', timezone: 'America/Guatemala', country: 'Guatemala', countryCode: 'GT', lat: 14.63, lng: -90.51, tier: 2, continent: 'americas',
    info: {
      currency: 'Guatemalan Quetzal', currencySymbol: 'Q', population: '1.0M', phoneCode: '+502 2', language: 'Spanish',
      climate: 'Tropical highland with eternal spring temperatures (15-25°C). Rainy season May-October.',
      attractions: ['Palacio Nacional', 'Central Market', 'Zona Viva', 'Kaminaljuyú', 'Relief Map of Guatemala'],
      demographics: 'Capital and largest city of Guatemala, largest city in Central America. Mix of modern development and Mayan heritage.'
    }
  },
  { slug: 'tegucigalpa', city: 'Tegucigalpa', timezone: 'America/Tegucigalpa', country: 'Honduras', countryCode: 'HN', lat: 14.07, lng: -87.19, tier: 3, continent: 'americas',
    info: {
      currency: 'Honduran Lempira', currencySymbol: 'L', population: '1.2M', phoneCode: '+504 2', language: 'Spanish',
      climate: 'Tropical highland with mild temperatures year-round (18-28°C) due to elevation. Dry season November-April.',
      attractions: ['Basilica of Suyapa', 'National Identity Museum', 'La Tigra National Park', 'Central Park', 'Chiminike Children\'s Museum'],
      demographics: 'Capital and largest city of Honduras in a mountain valley. Colonial architecture mixed with modern development.'
    }
  },
  { slug: 'san-salvador', city: 'San Salvador', timezone: 'America/El_Salvador', country: 'El Salvador', countryCode: 'SV', lat: 13.69, lng: -89.19, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '570K', phoneCode: '+503 2', language: 'Spanish',
      climate: 'Tropical with dry season (November-April) and wet season. Pleasant temperatures (20-30°C) due to elevation.',
      attractions: ['National Palace', 'Metropolitan Cathedral', 'El Boquerón Volcano', 'National Museum of Anthropology', 'Zona Rosa'],
      demographics: 'Capital and largest city of El Salvador in the Boquerón volcano valley. Central American commercial and political hub.'
    }
  },
  { slug: 'managua', city: 'Managua', timezone: 'America/Managua', country: 'Nicaragua', countryCode: 'NI', lat: 12.13, lng: -86.25, tier: 3, continent: 'americas',
    info: {
      currency: 'Nicaraguan Córdoba', currencySymbol: 'C$', population: '1.0M', phoneCode: '+505 2', language: 'Spanish',
      climate: 'Tropical with dry season (November-April) and wet season. Hot year-round (27-35°C).',
      attractions: ['Tiscapa Lagoon', 'Old Cathedral', 'National Palace', 'Masaya Volcano', 'Puerto Salvador Allende'],
      demographics: 'Capital and largest city of Nicaragua, on shores of Lake Managua. Rebuilt multiple times after earthquakes.'
    }
  },
  { slug: 'belmopan', city: 'Belmopan', timezone: 'America/Belize', country: 'Belize', countryCode: 'BZ', lat: 17.25, lng: -88.77, tier: 3, continent: 'americas',
    info: {
      currency: 'Belize Dollar', currencySymbol: 'BZ$', population: '25K', phoneCode: '+501', language: 'English, Spanish',
      climate: 'Tropical with wet season (June-November) and dry season. Temperatures 22-32°C year-round.',
      attractions: ['Belize Archives', 'George Price Centre', 'Guanacaste National Park', 'Actun Tunichil Muknal Cave', 'Belize Zoo'],
      demographics: 'Capital of Belize since 1970, one of the newest and smallest capitals in the world. Planned city after Hurricane Hattie.'
    }
  },
  { slug: 'sucre', city: 'Sucre', timezone: 'America/La_Paz', country: 'Bolivia', countryCode: 'BO', lat: -19.04, lng: -65.26, tier: 3, continent: 'americas',
    info: {
      currency: 'Bolivian Boliviano', currencySymbol: 'Bs', population: '300K', phoneCode: '+591 4', language: 'Spanish, Quechua',
      climate: 'Subtropical highland with mild temperatures year-round (12-23°C) due to 2,810m altitude. Dry season April-October.',
      attractions: ['Casa de la Libertad', 'Recoleta Monastery', 'Cretaceous Park', 'Central Market', 'Metropolitan Cathedral'],
      demographics: 'Constitutional capital of Bolivia, "White City" for its whitewashed buildings. UNESCO World Heritage Site, where Bolivian independence was declared.'
    }
  },
  { slug: 'asuncion', city: 'Asunción', timezone: 'America/Asuncion', country: 'Paraguay', countryCode: 'PY', lat: -25.28, lng: -57.57, tier: 3, continent: 'americas',
    info: {
      currency: 'Paraguayan Guaraní', currencySymbol: '₲', population: '540K', phoneCode: '+595 21', language: 'Spanish, Guaraní',
      climate: 'Humid subtropical with hot summers (25-35°C) and mild winters (12-22°C). Rainfall year-round.',
      attractions: ['Palacio de los López', 'Panteón Nacional de los Héroes', 'Casa de la Independencia', 'Costanera', 'Metropolitan Cathedral'],
      demographics: 'Capital and largest city of Paraguay, one of the oldest cities in South America founded in 1537.'
    }
  },
  { slug: 'quito', city: 'Quito', timezone: 'America/Guayaquil', country: 'Ecuador', countryCode: 'EC', lat: -0.18, lng: -78.47, tier: 2, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '2.0M', phoneCode: '+593 2', language: 'Spanish, Quechua',
      climate: 'Subtropical highland with mild temperatures year-round (10-21°C) due to 2,850m altitude. Rainy season October-May.',
      attractions: ['Historic Center', 'TelefériQo', 'Mitad del Mundo', 'La Compañía Church', 'El Panecillo'],
      demographics: 'Capital of Ecuador, highest official capital city in the world. First UNESCO World Heritage City (1978), preserved colonial center.'
    }
  },
  { slug: 'georgetown', city: 'Georgetown', timezone: 'America/Guyana', country: 'Guyana', countryCode: 'GY', lat: 6.80, lng: -58.16, tier: 3, continent: 'americas',
    info: {
      currency: 'Guyanese Dollar', currencySymbol: 'G$', population: '240K', phoneCode: '+592', language: 'English, Creole',
      climate: 'Tropical with two rainy seasons (May-July, November-January). Warm year-round (24-32°C).',
      attractions: ['St. George\'s Cathedral', 'Stabroek Market', 'Demerara Harbour Bridge', 'Guyana National Museum', 'Promenade Gardens'],
      demographics: 'Capital and largest city of Guyana, only English-speaking capital in South America. Known for wooden colonial architecture.'
    }
  },
  { slug: 'paramaribo', city: 'Paramaribo', timezone: 'America/Paramaribo', country: 'Suriname', countryCode: 'SR', lat: 5.85, lng: -55.20, tier: 3, continent: 'americas',
    info: {
      currency: 'Surinamese Dollar', currencySymbol: 'SRD', population: '250K', phoneCode: '+597', language: 'Dutch, Sranan Tongo',
      climate: 'Tropical rainforest with warm humid weather year-round (26-32°C). Two rainy seasons.',
      attractions: ['Historic Inner City', 'Independence Square', 'Central Market', 'Fort Zeelandia', 'Neveh Shalom Synagogue'],
      demographics: 'Capital and largest city of Suriname, UNESCO World Heritage Site. Unique blend of Dutch colonial architecture and multicultural heritage.'
    }
  },
  { slug: 'san-juan', city: 'San Juan', timezone: 'America/Puerto_Rico', country: 'Puerto Rico', countryCode: 'PR', lat: 18.47, lng: -66.11, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '320K', phoneCode: '+1 787', language: 'Spanish, English',
      climate: 'Tropical with warm temperatures year-round (25-31°C). Rainy season May-November, hurricane risk.',
      attractions: ['Old San Juan', 'El Morro Fortress', 'Condado Beach', 'La Fortaleza', 'Castillo San Cristóbal'],
      demographics: 'Capital of Puerto Rico, second-oldest European settlement in the Americas. Colorful colonial architecture and vibrant culture.'
    }
  },

  // Oceania Capitals
  { slug: 'port-moresby', city: 'Port Moresby', timezone: 'Pacific/Port_Moresby', country: 'Papua New Guinea', countryCode: 'PG', lat: -9.44, lng: 147.18, tier: 2, continent: 'oceania',
    info: {
      currency: 'Papua New Guinean Kina', currencySymbol: 'K', population: '400K', phoneCode: '+675', language: 'English, Tok Pisin, Motu',
      climate: 'Tropical savanna with wet season (December-May) and dry season. Warm year-round (26-32°C).',
      attractions: ['National Parliament', 'National Museum', 'Port Moresby Nature Park', 'Ela Beach', 'Varirata National Park'],
      demographics: 'Capital and largest city of Papua New Guinea, one of the world\'s most diverse countries. Gateway to PNG\'s tribal cultures.'
    }
  },
  { slug: 'honiara', city: 'Honiara', timezone: 'Pacific/Guadalcanal', country: 'Solomon Islands', countryCode: 'SB', lat: -9.43, lng: 159.95, tier: 3, continent: 'oceania',
    info: {
      currency: 'Solomon Islands Dollar', currencySymbol: 'SI$', population: '85K', phoneCode: '+677', language: 'English, Pijin',
      climate: 'Tropical rainforest with warm temperatures year-round (24-31°C). Heavy rainfall, especially November-April.',
      attractions: ['WWII Memorial', 'National Museum', 'Central Market', 'Bonegi Beach', 'Parliament Building'],
      demographics: 'Capital of Solomon Islands on Guadalcanal. Site of major WWII battles, now peaceful Pacific island capital.'
    }
  },
  { slug: 'port-vila', city: 'Port Vila', timezone: 'Pacific/Efate', country: 'Vanuatu', countryCode: 'VU', lat: -17.74, lng: 168.32, tier: 3, continent: 'oceania',
    info: {
      currency: 'Vanuatu Vatu', currencySymbol: 'VT', population: '50K', phoneCode: '+678', language: 'Bislama, English, French',
      climate: 'Tropical with wet season (November-April) and dry season. Warm year-round (24-30°C). Cyclone risk.',
      attractions: ['Iririki Island', 'Mele Cascades', 'Ekasup Village', 'Port Vila Market', 'Hideaway Island'],
      demographics: 'Capital and largest city of Vanuatu on Efate Island. Tourism-based economy with strong traditional Melanesian culture.'
    }
  },
  { slug: 'apia', city: 'Apia', timezone: 'Pacific/Apia', country: 'Samoa', countryCode: 'WS', lat: -13.83, lng: -171.76, tier: 2, continent: 'oceania',
    info: {
      currency: 'Samoan Tala', currencySymbol: 'T', population: '37K', phoneCode: '+685', language: 'Samoan, English',
      climate: 'Tropical with wet season (November-April) and dry season. Temperatures 24-30°C year-round.',
      attractions: ['Robert Louis Stevenson Museum', 'Papaseea Sliding Rocks', 'To Sua Ocean Trench', 'Palolo Deep Marine Reserve', 'Maketi Fou Market'],
      demographics: 'Capital and only city of Samoa, located on Upolu island. Important Polynesian cultural center.'
    }
  },
  { slug: 'nukualofa', city: 'Nukuʻalofa', timezone: 'Pacific/Tongatapu', country: 'Tonga', countryCode: 'TO', lat: -21.21, lng: -175.20, tier: 3, continent: 'oceania',
    info: {
      currency: 'Tongan Paʻanga', currencySymbol: 'T$', population: '25K', phoneCode: '+676', language: 'Tongan, English',
      climate: 'Tropical with warm temperatures year-round (22-29°C). Wet season November-April, cyclone risk.',
      attractions: ['Royal Palace', 'Talamahu Market', 'Royal Tombs', 'Centenary Chapel', 'Pangaimotu Island'],
      demographics: 'Capital of Tonga, the only remaining Polynesian monarchy. Located on Tongatapu island, recovering from 2022 volcanic eruption and tsunami.'
    }
  },
  { slug: 'tarawa', city: 'Tarawa', timezone: 'Pacific/Tarawa', country: 'Kiribati', countryCode: 'KI', lat: 1.33, lng: 172.98, tier: 3, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '65K', phoneCode: '+686', language: 'Gilbertese, English',
      climate: 'Equatorial with warm temperatures year-round (28-32°C). Rainfall variable, occasional droughts.',
      attractions: ['WWII Relics', 'Betio Beach', 'Parliament House', 'Sacred Heart Cathedral', 'Red Beach Landing Site'],
      demographics: 'Capital atoll of Kiribati, site of fierce WWII battle. One of the most densely populated and climate-vulnerable places on Earth.'
    }
  },
  { slug: 'palikir', city: 'Palikir', timezone: 'Pacific/Pohnpei', country: 'Micronesia', countryCode: 'FM', lat: 6.91, lng: 158.16, tier: 3, continent: 'oceania',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '6K', phoneCode: '+691', language: 'English, Pohnpeian',
      climate: 'Tropical rainforest with warm temperatures year-round (27-30°C). Very high rainfall, one of wettest places on Earth.',
      attractions: ['FSM Capitol Building', 'Nan Madol', 'Sokehs Rock', 'Kepirohi Waterfall', 'Pohnpei Island'],
      demographics: 'Capital of Federated States of Micronesia since 1989. Small government center on Pohnpei island near ancient Nan Madol ruins.'
    }
  },
  { slug: 'ngerulmud', city: 'Ngerulmud', timezone: 'Pacific/Palau', country: 'Palau', countryCode: 'PW', lat: 7.50, lng: 134.62, tier: 3, continent: 'oceania',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '400', phoneCode: '+680', language: 'Palauan, English',
      climate: 'Tropical with warm temperatures year-round (27-31°C). Heavy rainfall, wettest May-November.',
      attractions: ['Capitol Complex', 'Palau National Congress', 'Melekeok State', 'Rock Islands', 'Ngardmau Waterfall'],
      demographics: 'Capital of Palau since 2006, one of the smallest and least populated capitals in the world. Government center on Babeldaob island.'
    }
  },
  { slug: 'majuro', city: 'Majuro', timezone: 'Pacific/Majuro', country: 'Marshall Islands', countryCode: 'MH', lat: 7.09, lng: 171.38, tier: 3, continent: 'oceania',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '28K', phoneCode: '+692', language: 'Marshallese, English',
      climate: 'Tropical with warm temperatures year-round (27-32°C). Heavy rainfall, especially May-November.',
      attractions: ['Alele Museum', 'Laura Beach', 'Majuro Atoll', 'WWII Sites', 'Traditional Canoe Building'],
      demographics: 'Capital and largest city of Marshall Islands, located on a coral atoll. Vulnerable to rising sea levels from climate change.'
    }
  },
  { slug: 'yaren', city: 'Yaren', timezone: 'Pacific/Nauru', country: 'Nauru', countryCode: 'NR', lat: -0.55, lng: 166.92, tier: 3, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '1K', phoneCode: '+674', language: 'Nauruan, English',
      climate: 'Equatorial with warm temperatures year-round (26-32°C). Variable rainfall, occasional droughts.',
      attractions: ['Parliament House', 'Buada Lagoon', 'Command Ridge', 'Anibare Bay', 'Japanese WWII Relics'],
      demographics: 'De facto capital of Nauru, world\'s smallest republic. Former phosphate mining island, unique as country without official capital.'
    }
  },
  { slug: 'funafuti', city: 'Funafuti', timezone: 'Pacific/Funafuti', country: 'Tuvalu', countryCode: 'TV', lat: -8.52, lng: 179.19, tier: 3, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '6K', phoneCode: '+688', language: 'Tuvaluan, English',
      climate: 'Tropical with warm temperatures year-round (27-32°C). Heavy rainfall, especially November-February.',
      attractions: ['Funafuti Conservation Area', 'Tuvalu Parliament', 'WWII Relics', 'Fongafale Lagoon', 'Traditional Crafts'],
      demographics: 'Capital of Tuvalu, one of world\'s smallest and lowest-lying nations. Atoll at risk from rising sea levels.'
    }
  },

  // === PHASE 1: Additional Cities for G20 + Europe ===
  
  // UK - Additional Cities
  { slug: 'liverpool', city: 'Liverpool', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.41, lng: -2.98, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '500K', phoneCode: '+44 151', language: 'English',
      climate: 'Oceanic with cool summers (16-20°C) and mild winters (3-8°C). Frequent rainfall, Irish Sea influence.',
      attractions: ['The Beatles Story', 'Liverpool Cathedral', 'Albert Dock', 'Anfield Stadium', 'Walker Art Gallery'],
      demographics: 'Major port city in northwest England, UNESCO World Heritage waterfront. Birthplace of The Beatles and famous for football.'
    }
  },
  { slug: 'leeds', city: 'Leeds', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.80, lng: -1.55, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '800K', phoneCode: '+44 113', language: 'English',
      climate: 'Oceanic with cool summers (15-21°C) and mild winters (2-7°C). Frequent rainfall year-round.',
      attractions: ['Royal Armouries', 'Leeds Art Gallery', 'Kirkstall Abbey', 'Roundhay Park', 'Leeds Corn Exchange'],
      demographics: 'Third-largest city in UK, major financial and legal center. Known for shopping, universities, and vibrant nightlife.'
    }
  },
  { slug: 'bristol', city: 'Bristol', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 51.45, lng: -2.59, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '470K', phoneCode: '+44 117', language: 'English',
      climate: 'Oceanic with mild temperatures (5-22°C). Rainfall throughout the year, slightly drier than other UK cities.',
      attractions: ['Clifton Suspension Bridge', 'SS Great Britain', 'Bristol Zoo', 'Cabot Tower', 'Harbourside'],
      demographics: 'Eighth-largest city in England, historic port city. Known for aerospace industry, street art (Banksy), and vibrant music scene.'
    }
  },
  { slug: 'newcastle', city: 'Newcastle', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 54.98, lng: -1.61, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '300K', phoneCode: '+44 191', language: 'English',
      climate: 'Oceanic with cool summers (15-19°C) and mild winters (2-7°C). Frequent rainfall, often overcast.',
      attractions: ['Newcastle Castle', 'Tyne Bridge', 'BALTIC Centre', 'Grey\'s Monument', 'Quayside'],
      demographics: 'Major city in northeast England on River Tyne. Known for nightlife, universities, and passionate football culture.'
    }
  },
  { slug: 'cardiff', city: 'Cardiff', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 51.48, lng: -3.18, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '365K', phoneCode: '+44 29', language: 'English, Welsh',
      climate: 'Oceanic with mild temperatures year-round (4-21°C). Frequent rainfall, especially in winter.',
      attractions: ['Cardiff Castle', 'Millennium Stadium', 'Cardiff Bay', 'National Museum Cardiff', 'Bute Park'],
      demographics: 'Capital and largest city of Wales, major media and cultural center. Home to Welsh Government and historic coal export port.'
    }
  },
  { slug: 'sheffield', city: 'Sheffield', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.38, lng: -1.47, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '585K', phoneCode: '+44 114', language: 'English',
      climate: 'Oceanic with mild summers (16-21°C) and cool winters (2-7°C). Frequent rainfall, hilly terrain.',
      attractions: ['Winter Garden', 'Kelham Island Museum', 'Peak District Gateway', 'Millennium Gallery', 'Sheffield Cathedral'],
      demographics: 'Steel City transformed into education and tech hub. Two major universities, gateway to Peak District National Park.'
    }
  },
  { slug: 'nottingham', city: 'Nottingham', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 52.95, lng: -1.15, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '330K', phoneCode: '+44 115', language: 'English',
      climate: 'Oceanic with mild summers (16-21°C) and cool winters (2-7°C). Moderate rainfall.',
      attractions: ['Nottingham Castle', 'Old Market Square', 'City of Caves', 'Wollaton Hall', 'Sherwood Forest nearby'],
      demographics: 'Robin Hood\'s legendary home, historic lace-making center. Major university city with vibrant nightlife.'
    }
  },
  { slug: 'southampton', city: 'Southampton', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 50.90, lng: -1.40, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '260K', phoneCode: '+44 23', language: 'English',
      climate: 'Oceanic with mild summers (17-21°C) and cool winters (4-9°C). Relatively sunny for UK.',
      attractions: ['SeaCity Museum', 'Tudor House', 'Old Town Walls', 'Mayflower Park', 'Southampton FC'],
      demographics: 'Major cruise port, where Titanic departed. Historic maritime city, home to University of Southampton.'
    }
  },
  { slug: 'leicester', city: 'Leicester', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 52.63, lng: -1.13, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '355K', phoneCode: '+44 116', language: 'English, Gujarati',
      climate: 'Oceanic with mild summers (16-21°C) and cool winters (2-7°C). Moderate rainfall.',
      attractions: ['King Richard III Visitor Centre', 'Leicester Cathedral', 'National Space Centre', 'New Walk Museum', 'Golden Mile'],
      demographics: 'One of UK\'s most diverse cities, where Richard III was found. Leicester City FC\'s 2016 Premier League miracle.'
    }
  },
  { slug: 'coventry', city: 'Coventry', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 52.41, lng: -1.51, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '370K', phoneCode: '+44 24', language: 'English',
      climate: 'Oceanic with mild summers (16-21°C) and cool winters (2-7°C). Central England location.',
      attractions: ['Coventry Cathedral', 'Transport Museum', 'Herbert Art Gallery', 'St Mary\'s Guildhall', 'Belgrade Theatre'],
      demographics: 'UK City of Culture 2021, rebuilt after WWII bombing. Historic watchmaking and automotive center.'
    }
  },
  { slug: 'belfast', city: 'Belfast', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 54.60, lng: -5.93, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '345K', phoneCode: '+44 28', language: 'English, Irish',
      climate: 'Oceanic with cool summers (15-18°C) and mild winters (3-8°C). Frequent rainfall year-round.',
      attractions: ['Titanic Belfast', 'St George\'s Market', 'Cathedral Quarter', 'Botanic Gardens', 'Peace Walls'],
      demographics: 'Capital of Northern Ireland, where Titanic was built. Transformed from conflict to cultural tourism destination.'
    }
  },
  { slug: 'brighton', city: 'Brighton', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 50.82, lng: -0.14, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '290K', phoneCode: '+44 1273', language: 'English',
      climate: 'Oceanic with mild summers (18-21°C) and cool winters (4-9°C). Sunniest city in UK.',
      attractions: ['Royal Pavilion', 'Brighton Pier', 'The Lanes', 'British Airways i360', 'Brighton Beach'],
      demographics: 'London-by-the-Sea, UK\'s most LGBTQ+ friendly city. Famous for Regency architecture and bohemian culture.'
    }
  },
  { slug: 'cambridge', city: 'Cambridge', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 52.21, lng: 0.12, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '145K', phoneCode: '+44 1223', language: 'English',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (2-8°C). One of UK\'s driest cities.',
      attractions: ['King\'s College Chapel', 'The Backs', 'Fitzwilliam Museum', 'Punting on the Cam', 'Mathematical Bridge'],
      demographics: 'World-famous university city (1209), Silicon Fen tech hub. Home to 31 colleges and countless Nobel laureates.'
    }
  },
  { slug: 'oxford', city: 'Oxford', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 51.75, lng: -1.25, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '155K', phoneCode: '+44 1865', language: 'English',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (2-8°C). Thames Valley location.',
      attractions: ['Bodleian Library', 'Radcliffe Camera', 'Christ Church', 'Ashmolean Museum', 'Covered Market'],
      demographics: 'Dreaming spires of world\'s oldest English-speaking university (1096). Harry Potter filming locations.'
    }
  },
  { slug: 'aberdeen', city: 'Aberdeen', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 57.15, lng: -2.09, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '230K', phoneCode: '+44 1224', language: 'English, Scots',
      climate: 'Oceanic with cool summers (14-18°C) and cold winters (1-7°C). North Sea winds, granite grey skies.',
      attractions: ['Marischal College', 'Old Aberdeen', 'Aberdeen Art Gallery', 'Footdee', 'Dunnottar Castle nearby'],
      demographics: 'Granite City, oil capital of Europe. Scotland\'s third-largest city with rich maritime heritage.'
    }
  },
  { slug: 'dundee', city: 'Dundee', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 56.46, lng: -2.97, tier: 2, continent: 'europe',
    info: {
      currency: 'British Pound', currencySymbol: '£', population: '150K', phoneCode: '+44 1382', language: 'English, Scots',
      climate: 'Oceanic with cool summers (15-18°C) and cold winters (1-7°C). Sunniest city in Scotland.',
      attractions: ['V&A Dundee', 'RRS Discovery', 'The McManus', 'Verdant Works', 'Law Hill'],
      demographics: 'Scotland\'s fourth city, UNESCO City of Design. Video game industry hub (GTA), jute and jam heritage.'
    }
  },
  
  // Germany - Additional Cities
  { slug: 'stuttgart', city: 'Stuttgart', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 48.78, lng: 9.18, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '635K', phoneCode: '+49 711', language: 'German, Swabian',
      climate: 'Oceanic with warm summers (18-25°C) and cold winters (-1 to 4°C). Sheltered valley location.',
      attractions: ['Mercedes-Benz Museum', 'Porsche Museum', 'Staatsgalerie', 'Schlossplatz', 'TV Tower'],
      demographics: 'Capital of Baden-Württemberg, birthplace of the automobile. Home to Mercedes-Benz and Porsche headquarters.'
    }
  },
  { slug: 'hannover', city: 'Hannover', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 52.37, lng: 9.74, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '535K', phoneCode: '+49 511', language: 'German',
      climate: 'Oceanic with mild summers (17-23°C) and cold winters (-1 to 4°C). Moderate rainfall year-round.',
      attractions: ['Herrenhausen Gardens', 'New Town Hall', 'Maschsee Lake', 'Hanover Zoo', 'Sprengel Museum'],
      demographics: 'Capital of Lower Saxony, major trade fair city (Hannover Messe). Historic royal residence with connections to British monarchy.'
    }
  },
  { slug: 'leipzig', city: 'Leipzig', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.34, lng: 12.37, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '600K', phoneCode: '+49 341', language: 'German, Saxon',
      climate: 'Oceanic/Continental with warm summers (18-24°C) and cold winters (-2 to 3°C). Moderate precipitation.',
      attractions: ['St. Thomas Church', 'Monument to the Battle of Nations', 'Leipzig Zoo', 'Mädler Passage', 'Gewandhaus'],
      demographics: 'Saxony\'s largest city, cradle of peaceful 1989 revolution. Historic center of music (Bach), publishing, and trade fairs.'
    }
  },
  { slug: 'dresden', city: 'Dresden', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.05, lng: 13.74, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '560K', phoneCode: '+49 351', language: 'German, Saxon',
      climate: 'Oceanic/Continental with warm summers (18-24°C) and cold winters (-2 to 3°C). Elbe River valley climate.',
      attractions: ['Frauenkirche', 'Zwinger Palace', 'Green Vault', 'Semperoper', 'Brühl\'s Terrace'],
      demographics: 'Capital of Saxony, "Florence on the Elbe". Rebuilt baroque city, major semiconductor and tech hub (Silicon Saxony).'
    }
  },
  { slug: 'nuremberg', city: 'Nuremberg', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 49.45, lng: 11.08, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '520K', phoneCode: '+49 911', language: 'German, Franconian',
      climate: 'Continental with warm summers (18-25°C) and cold winters (-3 to 3°C). Colder than western Germany.',
      attractions: ['Nuremberg Castle', 'Old Town', 'Documentation Center', 'Germanisches Nationalmuseum', 'Nuremberg Zoo'],
      demographics: 'Second-largest city in Bavaria, historic Holy Roman Empire center. Famous for Christmas market, Lebkuchen, and WWII trials.'
    }
  },
  { slug: 'bremen', city: 'Bremen', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 53.08, lng: 8.80, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '570K', phoneCode: '+49 421', language: 'German, Low German',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (0-5°C). Maritime influence, frequent rain.',
      attractions: ['Bremen Town Musicians', 'Market Square', 'Schnoor Quarter', 'Beck\'s Brewery', 'Universum Bremen'],
      demographics: 'Free Hanseatic City, Germany\'s oldest maritime city. Major aerospace (Airbus) and automotive manufacturing center.'
    }
  },
  { slug: 'essen', city: 'Essen', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.46, lng: 7.01, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '590K', phoneCode: '+49 201', language: 'German',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (1-5°C). Frequent cloud cover and rain.',
      attractions: ['Zollverein Coal Mine (UNESCO)', 'Museum Folkwang', 'Grugapark', 'Villa Hügel', 'Baldeneysee'],
      demographics: 'Heart of Ruhr industrial region, former coal and steel capital. European Green Capital 2017, now service and tech economy.'
    }
  },
  { slug: 'dortmund', city: 'Dortmund', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.51, lng: 7.47, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '590K', phoneCode: '+49 231', language: 'German',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (1-5°C). Maritime influenced, moderate rainfall.',
      attractions: ['Signal Iduna Park', 'Westfalenpark', 'German Football Museum', 'Dortmund U', 'Phoenix Lake'],
      demographics: 'Largest city in Ruhr region, transformed from steel to tech and logistics. Home to Borussia Dortmund football club.'
    }
  },
  { slug: 'duisburg', city: 'Duisburg', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.43, lng: 6.76, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '500K', phoneCode: '+49 203', language: 'German',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (1-5°C). Rhine-Ruhr confluence climate.',
      attractions: ['Landschaftspark Duisburg-Nord', 'Inner Harbour', 'Museum Küppersmühle', 'Tiger & Turtle', 'Duisburg Zoo'],
      demographics: 'World\'s largest inland port at Rhine-Ruhr confluence. Industrial heritage transformed into cultural landmarks.'
    }
  },
  { slug: 'bochum', city: 'Bochum', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.48, lng: 7.22, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '365K', phoneCode: '+49 234', language: 'German',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (1-5°C). Typical Ruhr region weather.',
      attractions: ['German Mining Museum', 'Starlight Express Theater', 'Bochum Planetarium', 'Bermuda Triangle', 'Ruhr University Botanical Gardens'],
      demographics: 'Major Ruhr city with strong university presence. Transformed from mining to education, IT, and healthcare economy.'
    }
  },
  { slug: 'wuppertal', city: 'Wuppertal', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.26, lng: 7.17, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '355K', phoneCode: '+49 202', language: 'German',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (0-5°C). Hilly terrain, moderate rainfall.',
      attractions: ['Schwebebahn (Suspension Railway)', 'Von der Heydt Museum', 'Wuppertal Zoo', 'Historische Stadthalle', 'Hardt Park'],
      demographics: 'Famous for unique suspended monorail (Schwebebahn). Birthplace of Friedrich Engels and Bayer aspirin.'
    }
  },
  { slug: 'bielefeld', city: 'Bielefeld', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 52.03, lng: 8.53, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '335K', phoneCode: '+49 521', language: 'German, Westphalian',
      climate: 'Oceanic with mild summers (17-22°C) and cold winters (-1 to 4°C). Teutoburg Forest influence.',
      attractions: ['Sparrenburg Castle', 'Kunsthalle Bielefeld', 'Tierpark Olderdissen', 'Dr. Oetker World', 'Teutoburg Forest'],
      demographics: 'East Westphalia\'s economic center, known for food industry (Dr. Oetker) and machinery. Subject of famous "conspiracy" joke.'
    }
  },
  { slug: 'bonn', city: 'Bonn', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.73, lng: 7.10, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '330K', phoneCode: '+49 228', language: 'German',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (1-5°C). Rhine valley moderates temperatures.',
      attractions: ['Beethoven House', 'Bundesviertel', 'Poppelsdorf Palace', 'Rheinaue Park', 'Haus der Geschichte'],
      demographics: 'Former West German capital (1949-1990), birthplace of Beethoven. Now UN City with major international organizations.'
    }
  },
  { slug: 'munster', city: 'Münster', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.96, lng: 7.63, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '315K', phoneCode: '+49 251', language: 'German, Westphalian',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (0-5°C). Known for frequent rain ("either raining or bells ringing").',
      attractions: ['Prinzipalmarkt', 'St. Paul\'s Cathedral', 'Aasee Lake', 'LWL Museum', 'Palace of Münster'],
      demographics: 'Germany\'s bicycle capital with highest bike usage. Historic Peace of Westphalia city, major university town.'
    }
  },
  { slug: 'karlsruhe', city: 'Karlsruhe', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 49.01, lng: 8.40, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '310K', phoneCode: '+49 721', language: 'German, Alemannic',
      climate: 'Oceanic with warm summers (18-25°C) and mild winters (0-5°C). One of Germany\'s sunniest cities.',
      attractions: ['Karlsruhe Palace', 'ZKM Center for Art and Media', 'Botanical Garden', 'Federal Constitutional Court', 'Stadtgarten'],
      demographics: 'Seat of Germany\'s highest courts. Planned "fan city" with streets radiating from palace. Major tech and IT hub.'
    }
  },
  { slug: 'mannheim', city: 'Mannheim', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 49.49, lng: 8.47, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '310K', phoneCode: '+49 621', language: 'German, Palatine',
      climate: 'Oceanic with warm summers (18-25°C) and mild winters (0-5°C). Rhine valley warmth.',
      attractions: ['Mannheim Palace', 'Luisenpark', 'Water Tower', 'Technoseum', 'Kunsthalle Mannheim'],
      demographics: 'Second-largest city in Baden-Württemberg, birthplace of the automobile (Karl Benz). Unique grid street system.'
    }
  },
  { slug: 'augsburg', city: 'Augsburg', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 48.37, lng: 10.89, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '300K', phoneCode: '+49 821', language: 'German, Bavarian',
      climate: 'Continental with warm summers (18-24°C) and cold winters (-3 to 3°C). Alpine foothills influence.',
      attractions: ['Fuggerei', 'Augsburg Cathedral', 'Town Hall', 'Augsburg Puppet Theatre', 'Maximilianstraße'],
      demographics: 'One of Germany\'s oldest cities (2,000+ years), home to Fuggerei (world\'s oldest social housing). Fugger banking dynasty center.'
    }
  },
  { slug: 'wiesbaden', city: 'Wiesbaden', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.08, lng: 8.24, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '280K', phoneCode: '+49 611', language: 'German',
      climate: 'Oceanic with warm summers (18-24°C) and mild winters (1-5°C). Sheltered Rhine valley location, very mild.',
      attractions: ['Kurhaus', 'Nerobergbahn', 'Schlossplatz', 'Thermal Baths', 'Museum Wiesbaden'],
      demographics: 'Capital of Hesse, famous spa city since Roman times. Known for thermal springs, elegant villas, and casino.'
    }
  },
  { slug: 'braunschweig', city: 'Braunschweig', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 52.27, lng: 10.52, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '250K', phoneCode: '+49 531', language: 'German, Low German',
      climate: 'Oceanic with mild summers (17-23°C) and cold winters (-1 to 4°C). Transitional climate.',
      attractions: ['Dankwarderode Castle', 'Brunswick Lion', 'St. Blasii Cathedral', 'Happy Rizzi House', 'Magniviertel'],
      demographics: 'City of Henry the Lion, major research hub with PTB (Germany\'s standards institute). Strong automotive (VW) connections.'
    }
  },
  { slug: 'kiel', city: 'Kiel', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 54.32, lng: 10.14, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '250K', phoneCode: '+49 431', language: 'German, Low German',
      climate: 'Oceanic with cool summers (15-20°C) and mild winters (0-4°C). Strong Baltic Sea maritime influence.',
      attractions: ['Kiel Fjord', 'Kieler Woche (Sailing Week)', 'Maritime Museum', 'Laboe Naval Memorial', 'Holtenauer Schleuse'],
      demographics: 'Capital of Schleswig-Holstein, major Baltic port. World\'s largest sailing event (Kieler Woche) and naval history.'
    }
  },
  
  // France - Additional Cities
  { slug: 'toulouse', city: 'Toulouse', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.60, lng: 1.44, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '500K', phoneCode: '+33 5', language: 'French, Occitan',
      climate: 'Oceanic/Mediterranean transition with warm summers (22-28°C) and mild winters (4-10°C). Sunny climate.',
      attractions: ['Capitole de Toulouse', 'Basilica of Saint-Sernin', 'Cité de l\'Espace', 'Canal du Midi', 'Airbus Factory'],
      demographics: 'Fourth-largest city in France, "La Ville Rose" (Pink City) for terracotta brick buildings. European aerospace capital (Airbus HQ).'
    }
  },
  { slug: 'bordeaux', city: 'Bordeaux', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 44.84, lng: -0.58, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '260K', phoneCode: '+33 5', language: 'French',
      climate: 'Oceanic with mild winters (5-12°C) and warm summers (20-28°C). Moderate rainfall year-round.',
      attractions: ['Place de la Bourse', 'Cité du Vin', 'Saint-André Cathedral', 'Miroir d\'Eau', 'Grand Théâtre'],
      demographics: 'UNESCO World Heritage City, world capital of wine. Major port on the Garonne River with 18th-century architecture.'
    }
  },
  { slug: 'strasbourg', city: 'Strasbourg', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 48.57, lng: 7.75, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '290K', phoneCode: '+33 3', language: 'French, Alsatian',
      climate: 'Oceanic with warm summers (19-25°C) and cold winters (0-5°C). Moderate rainfall year-round.',
      attractions: ['Strasbourg Cathedral', 'Petite France', 'European Parliament', 'Palais Rohan', 'Covered Bridges'],
      demographics: 'Capital of Alsace, official seat of European Parliament. UNESCO World Heritage old town, blend of French and German culture.'
    }
  },
  { slug: 'nantes', city: 'Nantes', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 47.22, lng: -1.55, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '320K', phoneCode: '+33 2', language: 'French',
      climate: 'Oceanic with mild summers (18-24°C) and cool winters (4-10°C). Frequent rainfall, Atlantic influence.',
      attractions: ['Les Machines de l\'île', 'Château des Ducs', 'Passage Pommeraye', 'Jardin des Plantes', 'Île de Versailles'],
      demographics: 'Sixth-largest city in France, former Brittany capital. Creative hub famous for giant mechanical elephant, birthplace of Jules Verne.'
    }
  },
  { slug: 'montpellier', city: 'Montpellier', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.61, lng: 3.88, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '295K', phoneCode: '+33 4', language: 'French',
      climate: 'Mediterranean with hot dry summers (26-30°C) and mild winters (6-12°C). 300+ sunny days.',
      attractions: ['Place de la Comédie', 'Fabre Museum', 'Promenade du Peyrou', 'St-Pierre Cathedral', 'Antigone District'],
      demographics: 'Fastest-growing French city, major university center. Young, dynamic atmosphere near Mediterranean beaches.'
    }
  },
  { slug: 'lille', city: 'Lille', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 50.63, lng: 3.06, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '235K', phoneCode: '+33 3', language: 'French, Picard',
      climate: 'Oceanic with cool summers (16-22°C) and cold winters (2-7°C). Frequent rain and overcast skies.',
      attractions: ['Palais des Beaux-Arts', 'Grand Place', 'Vieille Bourse', 'Citadelle', 'Braderie de Lille'],
      demographics: 'Capital of French Flanders, major Eurostar hub. Flemish architecture, vibrant student life, famous flea market (Braderie).'
    }
  },
  { slug: 'rennes', city: 'Rennes', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 48.11, lng: -1.68, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '220K', phoneCode: '+33 2', language: 'French, Breton',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (4-9°C). Frequent rain year-round.',
      attractions: ['Parlement de Bretagne', 'Place des Lices', 'Thabor Garden', 'Portes Mordelaises', 'Les Champs Libres'],
      demographics: 'Capital of Brittany, major tech hub (French Silicon Valley). Young university city, gateway to Breton culture.'
    }
  },
  { slug: 'reims', city: 'Reims', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 49.25, lng: 4.03, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '185K', phoneCode: '+33 3', language: 'French',
      climate: 'Oceanic with warm summers (18-25°C) and cold winters (1-6°C). Moderate rainfall.',
      attractions: ['Reims Cathedral (UNESCO)', 'Palais du Tau', 'Champagne Houses', 'Basilica of Saint-Remi', 'Place Drouet d\'Erlon'],
      demographics: 'Coronation city of French kings, capital of Champagne. UNESCO cathedral, major champagne production (Veuve Clicquot, Taittinger).'
    }
  },
  { slug: 'toulon', city: 'Toulon', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.12, lng: 5.93, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '175K', phoneCode: '+33 4', language: 'French, Provençal',
      climate: 'Mediterranean with hot dry summers (26-30°C) and mild winters (8-13°C). Very sunny.',
      attractions: ['Toulon Harbour', 'Mont Faron', 'National Naval Museum', 'Opera House', 'Provençal Market'],
      demographics: 'France\'s main naval base on Mediterranean. Historic military port, gateway to Côte d\'Azur and Provence.'
    }
  },
  { slug: 'grenoble', city: 'Grenoble', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 45.19, lng: 5.72, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '160K', phoneCode: '+33 4', language: 'French',
      climate: 'Semi-continental with warm summers (20-28°C) and cold winters (-1 to 6°C). Alpine valley, can be foggy.',
      attractions: ['Bastille Fortress', 'Grenoble-Bastille Cable Car', 'Musée de Grenoble', 'Place Grenette', 'Chartreuse Mountains'],
      demographics: 'Capital of French Alps, major research and tech hub. Gateway to ski resorts, hosted 1968 Winter Olympics.'
    }
  },
  { slug: 'dijon', city: 'Dijon', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 47.32, lng: 5.04, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '160K', phoneCode: '+33 3', language: 'French',
      climate: 'Oceanic/Continental with warm summers (19-26°C) and cold winters (0-6°C). Four distinct seasons.',
      attractions: ['Palace of the Dukes', 'Notre-Dame de Dijon', 'Owl Trail', 'Musée des Beaux-Arts', 'Burgundy vineyards'],
      demographics: 'Capital of Burgundy, famous for mustard and wine. Historic Dukes\' palace, gateway to Côte d\'Or vineyards.'
    }
  },
  { slug: 'angers', city: 'Angers', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 47.47, lng: -0.56, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '155K', phoneCode: '+33 2', language: 'French',
      climate: 'Oceanic with mild summers (18-24°C) and cool winters (4-9°C). Moderate rainfall, Loire Valley influence.',
      attractions: ['Château d\'Angers', 'Apocalypse Tapestry', 'Cathédrale Saint-Maurice', 'Terra Botanica', 'Cointreau Distillery'],
      demographics: 'Historic Anjou capital in Loire Valley. Houses world\'s largest medieval tapestry, gateway to Loire châteaux.'
    }
  },
  { slug: 'saint-etienne', city: 'Saint-Étienne', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 45.44, lng: 4.39, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '175K', phoneCode: '+33 4', language: 'French',
      climate: 'Semi-continental with warm summers (20-26°C) and cold winters (0-6°C). Higher elevation, occasional snow.',
      attractions: ['Musée d\'Art Moderne', 'Cité du Design', 'Musée de la Mine', 'Geoffroy-Guichard Stadium', 'Pilat Regional Park'],
      demographics: 'UNESCO City of Design, former mining and manufacturing center. Transformed into design and innovation hub.'
    }
  },
  { slug: 'le-havre', city: 'Le Havre', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 49.49, lng: 0.11, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '170K', phoneCode: '+33 2', language: 'French',
      climate: 'Oceanic with cool summers (16-21°C) and mild winters (4-8°C). Windy, frequent rain, Channel influence.',
      attractions: ['UNESCO City Center', 'MuMa (André Malraux Museum)', 'Église Saint-Joseph', 'Les Jardins Suspendus', 'Beach'],
      demographics: 'France\'s second-largest port, UNESCO World Heritage. Rebuilt by Auguste Perret after WWII, concrete modernist masterpiece.'
    }
  },
  { slug: 'clermont-ferrand', city: 'Clermont-Ferrand', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 45.78, lng: 3.08, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '145K', phoneCode: '+33 4', language: 'French',
      climate: 'Semi-continental with warm summers (20-27°C) and cold winters (-1 to 6°C). Sheltered by volcanic mountains.',
      attractions: ['Clermont-Ferrand Cathedral', 'Place de Jaude', 'Puy de Dôme', 'Vulcania', 'ASM Rugby Experience'],
      demographics: 'Auvergne capital, global headquarters of Michelin tires. Black lava stone cathedral, gateway to volcanic Chaîne des Puys.'
    }
  },
  { slug: 'aix-en-provence', city: 'Aix-en-Provence', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.53, lng: 5.45, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '145K', phoneCode: '+33 4', language: 'French, Provençal',
      climate: 'Mediterranean with hot dry summers (27-32°C) and mild winters (6-12°C). Very sunny, mistral wind.',
      attractions: ['Cours Mirabeau', 'Cathédrale Saint-Sauveur', 'Cézanne\'s Studio', 'Fontaine de la Rotonde', 'Quartier Mazarin'],
      demographics: 'Historic Provence capital, city of fountains and art. Birthplace of Cézanne, major university and festival town.'
    }
  },
  { slug: 'nancy', city: 'Nancy', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 48.69, lng: 6.18, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '105K', phoneCode: '+33 3', language: 'French',
      climate: 'Semi-continental with warm summers (18-25°C) and cold winters (0-5°C). Moderate rainfall.',
      attractions: ['Place Stanislas (UNESCO)', 'Musée de l\'École de Nancy', 'Parc de la Pépinière', 'Ducal Palace', 'Porte de la Craffe'],
      demographics: 'Capital of Lorraine with UNESCO World Heritage square. Art Nouveau capital (École de Nancy), elegant 18th-century architecture.'
    }
  },
  
  // Italy - Additional Cities
  { slug: 'turin', city: 'Turin', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.07, lng: 7.69, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '850K', phoneCode: '+39 011', language: 'Italian',
      climate: 'Humid subtropical with hot summers (24-30°C) and cold winters (0-7°C). Alpine influence, foggy winters.',
      attractions: ['Egyptian Museum', 'Mole Antonelliana', 'Royal Palace', 'Piazza San Carlo', 'Shroud of Turin Chapel'],
      demographics: 'Fourth-largest city in Italy, first capital of unified Italy. Home to FIAT and Juventus FC, elegant Baroque architecture.'
    }
  },
  { slug: 'bologna', city: 'Bologna', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 44.49, lng: 11.34, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '395K', phoneCode: '+39 051', language: 'Italian',
      climate: 'Humid subtropical with hot summers (25-35°C) and cold foggy winters (0-8°C).',
      attractions: ['Piazza Maggiore', 'Two Towers', 'Basilica di San Petronio', 'University of Bologna', 'Archiginnasio'],
      demographics: 'Capital of Emilia-Romagna, home to world\'s oldest university (1088). Known as "La Dotta" (the learned), "La Grassa" (the fat), "La Rossa" (the red).'
    }
  },
  { slug: 'genoa', city: 'Genoa', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 44.41, lng: 8.93, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '575K', phoneCode: '+39 010', language: 'Italian, Ligurian',
      climate: 'Mediterranean with mild summers (24-28°C) and cool winters (6-12°C). Protected by mountains.',
      attractions: ['Aquarium of Genoa', 'Via Garibaldi (UNESCO)', 'Porto Antico', 'Palazzo Ducale', 'Cimitero di Staglieno'],
      demographics: 'Italy\'s largest seaport, birthplace of Columbus and pesto. Historic maritime republic with UNESCO palaces.'
    }
  },
  { slug: 'palermo', city: 'Palermo', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 38.12, lng: 13.36, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '650K', phoneCode: '+39 091', language: 'Italian, Sicilian',
      climate: 'Mediterranean with hot dry summers (28-35°C) and mild winters (10-15°C). Very sunny.',
      attractions: ['Palermo Cathedral', 'Palazzo dei Normanni', 'Teatro Massimo', 'Quattro Canti', 'Capuchin Catacombs'],
      demographics: 'Capital of Sicily, crossroads of Mediterranean cultures. Arab-Norman architecture (UNESCO), vibrant street food scene.'
    }
  },
  { slug: 'catania', city: 'Catania', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 37.50, lng: 15.09, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '310K', phoneCode: '+39 095', language: 'Italian, Sicilian',
      climate: 'Mediterranean with hot summers (28-35°C) and mild winters (10-15°C). In shadow of Mount Etna.',
      attractions: ['Mount Etna', 'Piazza del Duomo', 'Fish Market (La Pescheria)', 'Roman Amphitheatre', 'Via Etnea'],
      demographics: 'Sicily\'s second city at foot of Etna volcano. Black lava baroque architecture, major tech and startup hub.'
    }
  },
  { slug: 'bari', city: 'Bari', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 41.13, lng: 16.87, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '320K', phoneCode: '+39 080', language: 'Italian, Barese',
      climate: 'Mediterranean with hot summers (26-32°C) and mild winters (8-14°C). Adriatic Sea influence.',
      attractions: ['Basilica San Nicola', 'Bari Vecchia', 'Castello Normanno-Svevo', 'Lungomare', 'Petruzzelli Theatre'],
      demographics: 'Capital of Puglia, gateway to Greece and Balkans. Pilgrimage site for St. Nicholas, famous for fresh pasta.'
    }
  },
  { slug: 'verona', city: 'Verona', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.44, lng: 10.99, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '260K', phoneCode: '+39 045', language: 'Italian, Venetian',
      climate: 'Humid subtropical with hot summers (24-30°C) and cold winters (0-8°C). Moderate rainfall.',
      attractions: ['Arena di Verona', 'Juliet\'s House', 'Piazza delle Erbe', 'Castelvecchio', 'Ponte Pietra'],
      demographics: 'UNESCO World Heritage city, setting of Romeo and Juliet. Roman amphitheater hosts world-famous opera festival.'
    }
  },
  { slug: 'padua', city: 'Padua', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.41, lng: 11.88, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '210K', phoneCode: '+39 049', language: 'Italian, Venetian',
      climate: 'Humid subtropical with hot summers (24-30°C) and cold foggy winters (-1 to 7°C).',
      attractions: ['Scrovegni Chapel (Giotto)', 'Basilica di Sant\'Antonio', 'Prato della Valle', 'University of Padua', 'Botanical Garden (UNESCO)'],
      demographics: 'Ancient university city (1222), where Galileo taught. Giotto\'s frescoes are Renaissance masterpiece.'
    }
  },
  { slug: 'trieste', city: 'Trieste', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.65, lng: 13.78, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '205K', phoneCode: '+39 040', language: 'Italian, Triestine, Slovene',
      climate: 'Humid subtropical with warm summers (22-28°C) and cold winters (2-8°C). Bora wind in winter.',
      attractions: ['Piazza Unità d\'Italia', 'Miramare Castle', 'Roman Theatre', 'Caffè Storici', 'Grotta Gigante'],
      demographics: 'Border city with Austro-Hungarian heritage, Italy\'s coffee capital. Major port, historic literary center (Joyce, Svevo).'
    }
  },
  { slug: 'brescia', city: 'Brescia', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.54, lng: 10.21, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '200K', phoneCode: '+39 030', language: 'Italian, Brescian',
      climate: 'Humid subtropical with hot summers (25-32°C) and cold winters (-1 to 6°C). Pre-Alpine location.',
      attractions: ['Santa Giulia Museum (UNESCO)', 'Roman Capitolium', 'Piazza della Loggia', 'Old Cathedral', 'Brescia Castle'],
      demographics: 'Industrial powerhouse of Lombardy, UNESCO Lombard heritage. Gateway to Lake Garda and Franciacorta wine region.'
    }
  },
  { slug: 'parma', city: 'Parma', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 44.80, lng: 10.33, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '200K', phoneCode: '+39 0521', language: 'Italian, Parmigiano',
      climate: 'Humid subtropical with hot summers (25-33°C) and cold foggy winters (-1 to 6°C).',
      attractions: ['Parma Cathedral', 'Baptistery', 'Teatro Regio', 'Palazzo della Pilotta', 'Parma ham tours'],
      demographics: 'UNESCO Creative City of Gastronomy, home of Parmigiano-Reggiano and Prosciutto di Parma. Verdi\'s birthplace nearby.'
    }
  },
  { slug: 'modena', city: 'Modena', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 44.65, lng: 10.92, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '185K', phoneCode: '+39 059', language: 'Italian, Modenese',
      climate: 'Humid subtropical with hot summers (25-33°C) and cold foggy winters (-1 to 6°C).',
      attractions: ['Modena Cathedral (UNESCO)', 'Enzo Ferrari Museum', 'Piazza Grande', 'Acetaia (balsamic vinegar)', 'Palazzo Ducale'],
      demographics: 'Motor Valley capital - home to Ferrari, Maserati, Lamborghini. Traditional balsamic vinegar origin, Pavarotti\'s hometown.'
    }
  },
  { slug: 'reggio-emilia', city: 'Reggio Emilia', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 44.70, lng: 10.63, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '170K', phoneCode: '+39 0522', language: 'Italian, Reggiano',
      climate: 'Humid subtropical with hot summers (25-32°C) and cold foggy winters (-1 to 6°C).',
      attractions: ['Piazza Prampolini', 'Basilica della Ghiara', 'Musei Civici', 'Teatro Municipale', 'Palazzo del Capitano'],
      demographics: 'Birthplace of Italian flag (Il Tricolore). Known for Parmigiano-Reggiano, innovative Reggio Emilia education approach.'
    }
  },
  { slug: 'cagliari', city: 'Cagliari', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 39.22, lng: 9.12, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '155K', phoneCode: '+39 070', language: 'Italian, Sardinian',
      climate: 'Mediterranean with hot dry summers (28-32°C) and mild winters (10-15°C). Very sunny.',
      attractions: ['Castello district', 'Poetto Beach', 'Roman Amphitheatre', 'Bastione Saint Remy', 'Flamingo lagoons'],
      demographics: 'Capital of Sardinia, ancient Phoenician port. Beautiful beaches, pink flamingos, and unique Sardinian culture.'
    }
  },
  { slug: 'perugia', city: 'Perugia', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 43.11, lng: 12.39, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '165K', phoneCode: '+39 075', language: 'Italian, Umbrian',
      climate: 'Humid subtropical with warm summers (24-30°C) and cool winters (2-10°C). Hilltop location.',
      attractions: ['Piazza IV Novembre', 'Fontana Maggiore', 'Galleria Nazionale', 'Rocca Paolina', 'Eurochocolate Festival'],
      demographics: 'Capital of Umbria, major university city (Università per Stranieri). Famous for chocolate (Perugina/Baci) and jazz festival.'
    }
  },
  { slug: 'messina', city: 'Messina', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 38.19, lng: 15.55, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '230K', phoneCode: '+39 090', language: 'Italian, Sicilian',
      climate: 'Mediterranean with hot summers (27-32°C) and mild winters (11-15°C). Strait of Messina breezes.',
      attractions: ['Messina Cathedral', 'Astronomical Clock', 'Regional Museum', 'Strait of Messina', 'Santuario di Montalto'],
      demographics: 'Gateway to Sicily across the Strait. Ancient Greek foundation, rebuilt after 1908 earthquake. Major ferry port.'
    }
  },
  
  // Spain - Additional Cities
  { slug: 'bilbao', city: 'Bilbao', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 43.26, lng: -2.93, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '350K', phoneCode: '+34 94', language: 'Spanish, Basque',
      climate: 'Oceanic with mild temperatures (8-25°C). Frequent rainfall year-round, especially in autumn.',
      attractions: ['Guggenheim Museum', 'Casco Viejo', 'San Mamés Stadium', 'Puente Zubizuri', 'Mercado de la Ribera'],
      demographics: 'Largest city in the Basque Country, transformed from industrial port to cultural destination. Known for gastronomy and architecture.'
    }
  },
  { slug: 'malaga', city: 'Málaga', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 36.72, lng: -4.42, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '580K', phoneCode: '+34 95', language: 'Spanish',
      climate: 'Mediterranean with hot dry summers (28-32°C) and mild winters (12-18°C). 300+ sunny days per year.',
      attractions: ['Picasso Museum', 'Alcazaba', 'Gibralfaro Castle', 'Málaga Cathedral', 'Muelle Uno'],
      demographics: 'Sixth-largest city in Spain, birthplace of Picasso. Gateway to Costa del Sol and major tech hub in southern Europe.'
    }
  },
  { slug: 'zaragoza', city: 'Zaragoza', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 41.65, lng: -0.88, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '680K', phoneCode: '+34 976', language: 'Spanish',
      climate: 'Semi-arid Mediterranean with hot summers (26-35°C) and cold winters (2-10°C). Strong cierzo wind.',
      attractions: ['Basílica del Pilar', 'Aljafería Palace', 'Plaza del Pilar', 'La Seo Cathedral', 'Expo 2008 site'],
      demographics: 'Fifth-largest city in Spain, capital of Aragón. Strategic location between Madrid, Barcelona, and Bilbao. Major logistics hub.'
    }
  },
  { slug: 'murcia', city: 'Murcia', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 37.99, lng: -1.13, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '460K', phoneCode: '+34 968', language: 'Spanish',
      climate: 'Hot semi-arid with very hot summers (30-40°C) and mild winters (8-17°C). One of Europe\'s driest cities.',
      attractions: ['Murcia Cathedral', 'Real Casino', 'Santa Clara Monastery', 'Terra Natura', 'Salzillo Museum'],
      demographics: 'Capital of Murcia region, university city. Europe\'s fruit and vegetable garden, major agricultural export center.'
    }
  },
  { slug: 'palma', city: 'Palma de Mallorca', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 39.57, lng: 2.65, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '420K', phoneCode: '+34 971', language: 'Spanish, Catalan',
      climate: 'Mediterranean with hot summers (25-31°C) and mild winters (10-15°C). 300+ sunny days per year.',
      attractions: ['Palma Cathedral', 'Bellver Castle', 'Old Town', 'Paseo Marítimo', 'Es Baluard Museum'],
      demographics: 'Capital of Balearic Islands, major Mediterranean tourist destination. Historic trading port with Gothic architecture.'
    }
  },
  { slug: 'las-palmas', city: 'Las Palmas de Gran Canaria', timezone: 'Atlantic/Canary', country: 'Spain', countryCode: 'ES', lat: 28.10, lng: -15.41, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '380K', phoneCode: '+34 928', language: 'Spanish',
      climate: 'Subtropical desert with warm year-round (18-26°C). "Eternal spring" climate, minimal temperature variation.',
      attractions: ['Las Canteras Beach', 'Vegueta Old Town', 'Casa de Colón', 'Alfredo Kraus Auditorium', 'Poema del Mar'],
      demographics: 'Largest city in Canary Islands, major Atlantic port. Gateway to Africa, historic stopover for Columbus.'
    }
  },
  { slug: 'alicante', city: 'Alicante', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 38.35, lng: -0.48, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '340K', phoneCode: '+34 96', language: 'Spanish, Valencian',
      climate: 'Hot semi-arid Mediterranean with hot summers (28-32°C) and mild winters (10-17°C). Very sunny.',
      attractions: ['Santa Bárbara Castle', 'Explanada de España', 'MARQ Museum', 'Postiguet Beach', 'Old Town'],
      demographics: 'Major Costa Blanca resort city, important port. Growing expat and digital nomad community.'
    }
  },
  { slug: 'cordoba', city: 'Córdoba', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 37.89, lng: -4.77, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '325K', phoneCode: '+34 957', language: 'Spanish',
      climate: 'Mediterranean with very hot summers (35-45°C) and mild winters (6-14°C). Spain\'s hottest summers.',
      attractions: ['Mezquita-Catedral', 'Alcázar de los Reyes', 'Jewish Quarter', 'Roman Bridge', 'Patios Festival'],
      demographics: 'UNESCO World Heritage city, capital of Al-Andalus. The Mezquita represents peak Islamic architecture in Europe.'
    }
  },
  { slug: 'valladolid-spain', city: 'Valladolid', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 41.65, lng: -4.72, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '300K', phoneCode: '+34 983', language: 'Spanish (Castilian)',
      climate: 'Continental Mediterranean with hot summers (22-32°C) and cold winters (1-9°C). Large temperature swings.',
      attractions: ['Plaza Mayor', 'National Sculpture Museum', 'Valladolid Cathedral', 'Campo Grande Park', 'Science Museum'],
      demographics: 'Capital of Castile and León, birthplace of standard Castilian Spanish. Former capital of Spain, automotive industry (Renault).'
    }
  },
  { slug: 'vigo', city: 'Vigo', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 42.24, lng: -8.72, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '295K', phoneCode: '+34 986', language: 'Spanish, Galician',
      climate: 'Oceanic with mild summers (18-25°C) and cool rainy winters (8-14°C). High rainfall, Atlantic influence.',
      attractions: ['Cíes Islands', 'Castro Fortress', 'Praza do Rei', 'MARCO Museum', 'Samil Beach'],
      demographics: 'Galicia\'s largest city, Spain\'s biggest fishing port. Major automotive manufacturing (Citroën/Stellantis).'
    }
  },
  { slug: 'gijon', city: 'Gijón', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 43.54, lng: -5.66, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '270K', phoneCode: '+34 98', language: 'Spanish, Asturian',
      climate: 'Oceanic with cool summers (18-23°C) and mild winters (8-13°C). Frequent rain, green landscapes.',
      attractions: ['San Lorenzo Beach', 'Cimadevilla Old Town', 'Laboral Ciudad de la Cultura', 'Aquarium', 'Cerro de Santa Catalina'],
      demographics: 'Largest city in Asturias, industrial heritage transformed to culture and tourism. Famous for cider and seafood.'
    }
  },
  { slug: 'granada', city: 'Granada', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 37.18, lng: -3.60, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '230K', phoneCode: '+34 958', language: 'Spanish',
      climate: 'Continental Mediterranean with hot summers (28-36°C) and cold winters (2-12°C). Sierra Nevada nearby.',
      attractions: ['Alhambra', 'Generalife Gardens', 'Albaicín (UNESCO)', 'Granada Cathedral', 'Sierra Nevada ski'],
      demographics: 'Last Moorish kingdom in Spain, home to the magnificent Alhambra. Major university city with vibrant tapas culture.'
    }
  },
  { slug: 'vitoria-gasteiz', city: 'Vitoria-Gasteiz', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 42.85, lng: -2.67, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '250K', phoneCode: '+34 945', language: 'Spanish, Basque',
      climate: 'Oceanic/Continental with cool summers (18-25°C) and cold winters (2-10°C). Moderate rainfall.',
      attractions: ['Plaza de la Virgen Blanca', 'Santa María Cathedral', 'Artium Museum', 'Green Belt', 'Old Town'],
      demographics: 'Capital of Basque Country, European Green Capital 2012. Known for medieval old town and sustainable urban planning.'
    }
  },
  { slug: 'santander', city: 'Santander', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 43.46, lng: -3.80, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '175K', phoneCode: '+34 942', language: 'Spanish',
      climate: 'Oceanic with cool summers (18-23°C) and mild winters (8-13°C). Frequent rain, Bay of Biscay influence.',
      attractions: ['Sardinero Beach', 'Magdalena Palace', 'Altamira Cave Museum', 'Santander Cathedral', 'Centro Botín'],
      demographics: 'Capital of Cantabria, elegant seaside resort. Headquarters of Santander Bank, gateway to Picos de Europa.'
    }
  },
  { slug: 'san-sebastian', city: 'San Sebastián', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 43.32, lng: -1.98, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '190K', phoneCode: '+34 943', language: 'Spanish, Basque',
      climate: 'Oceanic with cool summers (18-24°C) and mild winters (6-12°C). Frequent rain, green surroundings.',
      attractions: ['La Concha Beach', 'Monte Urgull', 'Old Town (Parte Vieja)', 'San Telmo Museum', 'Pintxos bars'],
      demographics: 'Spain\'s culinary capital with most Michelin stars per capita. Famous film festival, Belle Époque elegance.'
    }
  },
  { slug: 'santa-cruz-tenerife', city: 'Santa Cruz de Tenerife', timezone: 'Atlantic/Canary', country: 'Spain', countryCode: 'ES', lat: 28.47, lng: -16.25, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '210K', phoneCode: '+34 922', language: 'Spanish',
      climate: 'Subtropical with warm year-round (18-26°C). "Eternal spring" climate, very pleasant.',
      attractions: ['Auditorio de Tenerife', 'Parque García Sanabria', 'Carnival', 'Mercado de Nuestra Señora', 'Teide nearby'],
      demographics: 'Co-capital of Canary Islands, major Atlantic port. Famous for second-largest carnival in the world after Rio.'
    }
  },
  
  // Netherlands - Additional Cities
  { slug: 'the-hague', city: 'The Hague', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.08, lng: 4.31, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '550K', phoneCode: '+31 70', language: 'Dutch',
      climate: 'Oceanic with cool summers (17-21°C) and mild winters (2-6°C). Frequent rainfall, North Sea influence.',
      attractions: ['Mauritshuis', 'Peace Palace', 'Binnenhof', 'Madurodam', 'Scheveningen Beach'],
      demographics: 'Seat of Dutch government and international law (ICJ, ICC). Third-largest city in Netherlands, home to royal family.'
    }
  },
  { slug: 'utrecht', city: 'Utrecht', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.09, lng: 5.12, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '360K', phoneCode: '+31 30', language: 'Dutch',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (1-6°C). Frequent rainfall year-round.',
      attractions: ['Dom Tower', 'Oudegracht Canal', 'Centraal Museum', 'Rietveld Schröder House', 'Railway Museum'],
      demographics: 'Fourth-largest city in Netherlands, geographic center of the country. Medieval center with unique wharf cellars along canals.'
    }
  },
  { slug: 'eindhoven', city: 'Eindhoven', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.44, lng: 5.47, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '240K', phoneCode: '+31 40', language: 'Dutch',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (1-6°C). Slightly warmer than north.',
      attractions: ['Van Abbemuseum', 'Strijp-S', 'Philips Museum', 'Evoluon', 'DAF Museum'],
      demographics: 'Fifth-largest city, "Brainport" tech hub. Birthplace of Philips, now design and innovation capital with TU Eindhoven.'
    }
  },
  { slug: 'groningen', city: 'Groningen', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 53.22, lng: 6.57, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '235K', phoneCode: '+31 50', language: 'Dutch, Gronings',
      climate: 'Oceanic with cool summers (16-21°C) and cold winters (0-5°C). North Sea influence, windy.',
      attractions: ['Grote Markt', 'Martinitoren', 'Groninger Museum', 'Noorderplantsoen', 'Prinsentuin'],
      demographics: 'Largest city in northern Netherlands, youngest population (25% students). Vibrant university city, cycling capital.'
    }
  },
  { slug: 'tilburg', city: 'Tilburg', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.56, lng: 5.09, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '225K', phoneCode: '+31 13', language: 'Dutch, Brabantian',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (1-6°C). Southern Netherlands climate.',
      attractions: ['De Pont Museum', 'Tilburg Textile Museum', 'Safaripark Beekse Bergen', 'Spoorzone', 'Piushaven'],
      demographics: 'Sixth-largest city, former textile capital transformed into creative hub. Major university town in North Brabant.'
    }
  },
  { slug: 'almere', city: 'Almere', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.37, lng: 5.22, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '220K', phoneCode: '+31 36', language: 'Dutch',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (1-5°C). Reclaimed land, IJsselmeer influence.',
      attractions: ['Floriade Park', 'Oostvaardersplassen', 'De Kemphaan', 'Almere Strand', 'Modern Architecture Tour'],
      demographics: 'Youngest major city, built on reclaimed land (Flevoland polder). Fastest-growing Dutch city, experimental architecture.'
    }
  },
  { slug: 'breda', city: 'Breda', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.59, lng: 4.78, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '185K', phoneCode: '+31 76', language: 'Dutch, Brabantian',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (1-6°C). Southern Netherlands.',
      attractions: ['Grote Kerk', 'Kasteel van Breda', 'Valkenberg Park', 'Grote Markt', 'Begijnhof'],
      demographics: 'Historic city in North Brabant, Nassau family roots. Known for Carnival celebration, defense academy, and pleasant city center.'
    }
  },
  { slug: 'nijmegen', city: 'Nijmegen', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.84, lng: 5.85, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '180K', phoneCode: '+31 24', language: 'Dutch',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (1-6°C). Waal River influence.',
      attractions: ['Valkhof Park', 'St. Stevenskerk', 'Hunnerpark', 'Waalbrug', 'National Liberation Museum'],
      demographics: 'Oldest city in Netherlands (2,000+ years), Roman Noviomagus. Famous for Four Days Marches, major university city.'
    }
  },
  { slug: 'arnhem', city: 'Arnhem', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.98, lng: 5.91, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '165K', phoneCode: '+31 26', language: 'Dutch',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (0-6°C). Rhine River, green surroundings.',
      attractions: ['Airborne Museum', 'John Frost Bridge', 'Netherlands Open Air Museum', 'Burgers\' Zoo', 'Sonsbeek Park'],
      demographics: 'Capital of Gelderland, famous for WWII "A Bridge Too Far" battle. Fashion city, gateway to Veluwe nature area.'
    }
  },
  { slug: 'maastricht', city: 'Maastricht', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 50.85, lng: 5.69, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '120K', phoneCode: '+31 43', language: 'Dutch, Limburgish, French',
      climate: 'Oceanic with mild summers (17-23°C) and cool winters (1-6°C). Southernmost, slightly warmer.',
      attractions: ['Vrijthof Square', 'Basilica of Saint Servatius', 'Bonnefanten Museum', 'Fort Sint Pieter', 'Bookstore Dominicanen'],
      demographics: 'Oldest city in the south, where Maastricht Treaty (EU) was signed. Burgundian lifestyle, international university town.'
    }
  },
  
  // Belgium - Additional Cities
  { slug: 'ghent', city: 'Ghent', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 51.05, lng: 3.72, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '265K', phoneCode: '+32 9', language: 'Dutch, French',
      climate: 'Oceanic with cool summers (17-22°C) and mild winters (2-7°C). Frequent rainfall year-round.',
      attractions: ['Gravensteen Castle', 'St. Bavo\'s Cathedral', 'Graslei', 'Belfry of Ghent', 'SMAK Museum'],
      demographics: 'Third-largest city in Belgium, major university town. Medieval architecture and vibrant cultural scene, often called a hidden gem.'
    }
  },
  
  // Switzerland - Additional Cities
  { slug: 'basel', city: 'Basel', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 47.56, lng: 7.59, tier: 2, continent: 'europe',
    info: {
      currency: 'Swiss Franc', currencySymbol: 'CHF', population: '180K', phoneCode: '+41 61', language: 'German, French',
      climate: 'Oceanic climate with warm summers (18-25°C) and cold winters (0-5°C). Rainfall year-round.',
      attractions: ['Basel Minster', 'Kunstmuseum Basel', 'Old Town', 'Rhine River Promenade', 'Fondation Beyeler'],
      demographics: 'Third-largest city in Switzerland, located where Switzerland, Germany, and France meet. Major pharmaceutical hub.'
    }
  },
  { slug: 'lausanne', city: 'Lausanne', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 46.52, lng: 6.63, tier: 2, continent: 'europe',
    info: {
      currency: 'Swiss Franc', currencySymbol: 'CHF', population: '140K', phoneCode: '+41 21', language: 'French',
      climate: 'Oceanic with warm summers (18-25°C) and cold winters (0-5°C). Lake Geneva moderates temperatures.',
      attractions: ['Olympic Museum', 'Lausanne Cathedral', 'Ouchy', 'Lake Geneva Waterfront', 'EPFL Campus'],
      demographics: 'Fourth-largest city in Switzerland, Olympic Capital (IOC headquarters). Major university town overlooking Lake Geneva.'
    }
  },
  { slug: 'lucerne', city: 'Lucerne', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 47.05, lng: 8.31, tier: 3, continent: 'europe',
    info: {
      currency: 'Swiss Franc', currencySymbol: 'CHF', population: '82K', phoneCode: '+41 41', language: 'German',
      climate: 'Oceanic with warm summers (17-24°C) and cold winters (-1 to 4°C). Rainfall throughout the year.',
      attractions: ['Chapel Bridge', 'Lion Monument', 'Lake Lucerne', 'Mount Pilatus', 'Old Town'],
      demographics: 'Gateway to central Switzerland, one of the most visited cities in the country. Medieval architecture and Alpine scenery.'
    }
  },
  
  // Austria - Additional Cities
  { slug: 'salzburg', city: 'Salzburg', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 47.80, lng: 13.04, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '155K', phoneCode: '+43 662', language: 'German',
      climate: 'Oceanic with warm summers (18-25°C) and cold snowy winters (-2 to 5°C). Alpine influence.',
      attractions: ['Hohensalzburg Fortress', 'Mozart\'s Birthplace', 'Mirabell Palace', 'Getreidegasse', 'Salzburg Cathedral'],
      demographics: 'Fourth-largest city in Austria, birthplace of Mozart. UNESCO World Heritage Site, famous for Sound of Music and music festivals.'
    }
  },
  { slug: 'innsbruck', city: 'Innsbruck', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 47.26, lng: 11.39, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '130K', phoneCode: '+43 512', language: 'German',
      climate: 'Oceanic with warm summers (15-25°C) and cold snowy winters (-4 to 4°C). Alpine climate influence.',
      attractions: ['Golden Roof', 'Nordkette Cable Car', 'Hofburg Palace', 'Bergisel Ski Jump', 'Ambras Castle'],
      demographics: 'Capital of Tyrol, twice hosted Winter Olympics (1964, 1976). Major Alpine sports and tourism center surrounded by mountains.'
    }
  },
  { slug: 'graz', city: 'Graz', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 47.07, lng: 15.44, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '295K', phoneCode: '+43 316', language: 'German',
      climate: 'Oceanic with warm summers (18-26°C) and cold winters (-2 to 5°C). Less rainfall than western Austria.',
      attractions: ['Schlossberg', 'Kunsthaus Graz', 'Graz Old Town', 'Eggenberg Palace', 'Murinsel'],
      demographics: 'Second-largest city in Austria, UNESCO World Heritage Site. Major university town and European Capital of Culture 2003.'
    }
  },
  
  // Poland - Additional Cities
  { slug: 'gdansk', city: 'Gdańsk', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 54.35, lng: 18.65, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '470K', phoneCode: '+48 58', language: 'Polish',
      climate: 'Oceanic with cool summers (18-22°C) and cold winters (-1 to 3°C). Baltic Sea moderates temperatures.',
      attractions: ['Long Market', 'St. Mary\'s Church', 'European Solidarity Centre', 'Neptune Fountain', 'Westerplatte'],
      demographics: 'Historic port city on Baltic Sea, birthplace of Solidarity movement. Major trade and tourism hub with reconstructed Old Town.'
    }
  },
  { slug: 'wroclaw', city: 'Wrocław', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 51.11, lng: 17.04, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '640K', phoneCode: '+48 71', language: 'Polish',
      climate: 'Oceanic with warm summers (18-25°C) and cold winters (-2 to 3°C). Moderate rainfall.',
      attractions: ['Market Square', 'Centennial Hall', 'Ostrów Tumski', 'Wrocław Dwarfs', 'Racławice Panorama'],
      demographics: 'Fourth-largest city in Poland, "Venice of Poland" for its 100+ bridges. Historic Silesian capital with over 300 bronze dwarf sculptures.'
    }
  },
  { slug: 'lodz', city: 'Łódź', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 51.76, lng: 19.46, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '670K', phoneCode: '+48 42', language: 'Polish',
      climate: 'Humid continental with warm summers (18-25°C) and cold winters (-4 to 2°C). Moderate precipitation.',
      attractions: ['Piotrkowska Street', 'Manufaktura', 'EC1 Science Center', 'Museum of Cinematography', 'Księży Młyn'],
      demographics: 'Third-largest city, Poland\'s film and textile capital. Former industrial powerhouse transformed into creative hub, "Polish Hollywood".'
    }
  },
  { slug: 'poznan', city: 'Poznań', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 52.41, lng: 16.93, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '535K', phoneCode: '+48 61', language: 'Polish',
      climate: 'Oceanic with warm summers (18-24°C) and cold winters (-2 to 3°C). Moderate rainfall year-round.',
      attractions: ['Old Market Square', 'Town Hall with Goats', 'Cathedral Island', 'Imperial Castle', 'Malta Lake'],
      demographics: 'Fifth-largest city, birthplace of Polish nation. Major trade fair city, known for St. Martin\'s croissants and business culture.'
    }
  },
  { slug: 'szczecin', city: 'Szczecin', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 53.43, lng: 14.53, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '400K', phoneCode: '+48 91', language: 'Polish',
      climate: 'Oceanic with mild summers (17-23°C) and cold winters (-1 to 3°C). Baltic Sea influence.',
      attractions: ['Pomeranian Dukes Castle', 'Wały Chrobrego', 'Philharmonic Hall', 'National Museum', 'Jasne Błonia'],
      demographics: 'Seventh-largest city, major Baltic port near German border. Historic Hanseatic city with distinctive modernist architecture.'
    }
  },
  { slug: 'lublin', city: 'Lublin', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 51.25, lng: 22.57, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '340K', phoneCode: '+48 81', language: 'Polish',
      climate: 'Humid continental with warm summers (18-25°C) and cold winters (-5 to 1°C). Eastern Poland influence.',
      attractions: ['Old Town', 'Lublin Castle', 'Majdanek Memorial', 'Krakowskie Przedmieście', 'Open Air Village Museum'],
      demographics: 'Ninth-largest city, largest city of eastern Poland. Historic multicultural center, major university town, gateway to Ukraine.'
    }
  },
  { slug: 'katowice', city: 'Katowice', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 50.26, lng: 19.03, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '290K', phoneCode: '+48 32', language: 'Polish, Silesian',
      climate: 'Humid continental with warm summers (18-24°C) and cold winters (-3 to 2°C). Industrial region climate.',
      attractions: ['Spodek Arena', 'Nikiszowiec', 'Silesian Museum', 'Market Square', 'Valley of Three Ponds'],
      demographics: 'Center of Upper Silesian metropolis (2M+). Former coal mining capital transformed into business and culture hub.'
    }
  },
  { slug: 'bialystok', city: 'Białystok', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 53.13, lng: 23.16, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '295K', phoneCode: '+48 85', language: 'Polish',
      climate: 'Humid continental with warm summers (17-24°C) and cold winters (-6 to 0°C). Coldest major Polish city.',
      attractions: ['Branicki Palace', 'Białystok Cathedral', 'Rynek Kościuszki', 'Białowieża Forest nearby', 'Orthodox Church'],
      demographics: 'Largest city in northeastern Poland, gateway to Białowieża Forest (European bison). Multicultural history with Polish, Belarusian, and Jewish heritage.'
    }
  },
  { slug: 'bydgoszcz', city: 'Bydgoszcz', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 53.12, lng: 18.01, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '345K', phoneCode: '+48 52', language: 'Polish',
      climate: 'Oceanic with warm summers (18-24°C) and cold winters (-2 to 2°C). River valley climate.',
      attractions: ['Mill Island', 'Old Town', 'Opera Nova', 'Bydgoszcz Canal', 'Regional Museum'],
      demographics: 'Eighth-largest city, "Little Berlin" for waterways. Major cultural center with opera house, gateway to Tuchola Forest.'
    }
  },
  { slug: 'torun', city: 'Toruń', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 53.01, lng: 18.60, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '200K', phoneCode: '+48 56', language: 'Polish',
      climate: 'Oceanic with warm summers (18-24°C) and cold winters (-3 to 2°C). Vistula River influence.',
      attractions: ['Old Town (UNESCO)', 'Copernicus House', 'Town Hall', 'Teutonic Castle Ruins', 'Gingerbread Museum'],
      demographics: 'UNESCO World Heritage medieval old town, birthplace of Copernicus. Famous for gingerbread (pierniki) tradition since 14th century.'
    }
  },
  { slug: 'czestochowa', city: 'Częstochowa', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 50.81, lng: 19.12, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '220K', phoneCode: '+48 34', language: 'Polish',
      climate: 'Humid continental with warm summers (18-24°C) and cold winters (-4 to 2°C). Upland climate.',
      attractions: ['Jasna Góra Monastery', 'Black Madonna', 'Aleja NMP', 'Museum of Częstochowa', 'Eagle Nests Trail'],
      demographics: 'Poland\'s spiritual capital, home to Black Madonna icon. Receives 4-5 million pilgrims annually, major Catholic pilgrimage site.'
    }
  },
  { slug: 'rzeszow', city: 'Rzeszów', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 50.04, lng: 22.00, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '195K', phoneCode: '+48 17', language: 'Polish',
      climate: 'Humid continental with warm summers (18-25°C) and cold winters (-4 to 2°C). Carpathian foothills influence.',
      attractions: ['Market Square', 'Rzeszów Castle', 'Underground Tourist Route', 'Multimedia Fountain', 'Lubomirski Palace'],
      demographics: 'Capital of Podkarpackie, Poland\'s fastest-growing city. Aviation industry hub (Aviation Valley), gateway to Bieszczady Mountains.'
    }
  },
  { slug: 'kielce', city: 'Kielce', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 50.87, lng: 20.63, tier: 2, continent: 'europe',
    info: {
      currency: 'Polish Złoty', currencySymbol: 'zł', population: '195K', phoneCode: '+48 41', language: 'Polish',
      climate: 'Humid continental with warm summers (18-24°C) and cold winters (-4 to 2°C). Holy Cross Mountains influence.',
      attractions: ['Palace of the Kraków Bishops', 'Kielce Trade Fair', 'Toy and Play Museum', 'Świętokrzyskie Mountains', 'Kadzielnia Reserve'],
      demographics: 'Capital of Świętokrzyskie, major trade fair city. Gateway to Holy Cross Mountains, oldest Polish mountains.'
    }
  },
  
  // Portugal - Additional Cities
  { slug: 'faro', city: 'Faro', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 37.02, lng: -7.93, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '65K', phoneCode: '+351 289', language: 'Portuguese',
      climate: 'Mediterranean with hot dry summers (25-30°C) and mild wet winters (10-17°C). 300+ sunny days per year.',
      attractions: ['Old Town', 'Ria Formosa Natural Park', 'Faro Cathedral', 'Arco da Vila', 'Praia de Faro'],
      demographics: 'Capital of Algarve region, main gateway for southern Portugal tourism. Historic walled old town and major airport hub.'
    }
  },
  
  // Greece - Additional Cities
  { slug: 'thessaloniki', city: 'Thessaloniki', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 40.64, lng: 22.94, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '1.1M', phoneCode: '+30 231', language: 'Greek',
      climate: 'Mediterranean with hot dry summers (28-34°C) and cool wet winters (5-12°C).',
      attractions: ['White Tower', 'Rotunda', 'Ano Poli', 'Archaeological Museum', 'Ladadika District'],
      demographics: 'Second-largest city in Greece, co-capital of Byzantine Empire. UNESCO World Heritage Byzantine churches, vibrant food scene.'
    }
  },
  { slug: 'heraklion', city: 'Heraklion', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 35.34, lng: 25.13, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '175K', phoneCode: '+30 281', language: 'Greek',
      climate: 'Mediterranean with hot dry summers (25-30°C) and mild wet winters (10-16°C). 300+ sunny days.',
      attractions: ['Knossos Palace', 'Heraklion Archaeological Museum', 'Koules Fortress', 'Old Town', 'Cretaquarium'],
      demographics: 'Largest city on Crete, fourth-largest in Greece. Gateway to Minoan civilization ruins and Cretan beaches.'
    }
  },
  { slug: 'patras', city: 'Patras', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 38.25, lng: 21.73, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '170K', phoneCode: '+30 261', language: 'Greek',
      climate: 'Mediterranean with hot dry summers (28-33°C) and mild wet winters (8-14°C).',
      attractions: ['Rio-Antirrio Bridge', 'Patras Castle', 'Saint Andrew Cathedral', 'Roman Odeon', 'Carnival of Patras'],
      demographics: 'Third-largest city in Greece, gateway to Italy via ferry. Ancient port city known for hosting Greece\'s largest carnival.'
    }
  },
  
  // Sweden - Additional Cities
  { slug: 'gothenburg', city: 'Gothenburg', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 57.71, lng: 11.97, tier: 2, continent: 'europe',
    info: {
      currency: 'Swedish Krona', currencySymbol: 'kr', population: '590K', phoneCode: '+46 31', language: 'Swedish',
      climate: 'Oceanic with cool summers (16-20°C) and cold winters (-1 to 4°C). Frequent rainfall, mild for latitude.',
      attractions: ['Liseberg Theme Park', 'Universeum', 'Gothenburg Archipelago', 'Haga District', 'Gothenburg Museum of Art'],
      demographics: 'Second-largest city in Sweden, major port and industrial center. Home to Volvo and known for sustainable urban development.'
    }
  },
  { slug: 'malmo', city: 'Malmö', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 55.61, lng: 13.00, tier: 2, continent: 'europe',
    info: {
      currency: 'Swedish Krona', currencySymbol: 'kr', population: '350K', phoneCode: '+46 40', language: 'Swedish',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (0-4°C). Rainfall year-round, milder than most of Sweden.',
      attractions: ['Turning Torso', 'Malmöhus Castle', 'Lilla Torg', 'Ribersborg Beach', 'Öresund Bridge'],
      demographics: 'Third-largest city in Sweden, connected to Copenhagen by Øresund Bridge. Diverse, multicultural city with modern architecture.'
    }
  },
  { slug: 'uppsala', city: 'Uppsala', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 59.86, lng: 17.64, tier: 3, continent: 'europe',
    info: {
      currency: 'Swedish Krona', currencySymbol: 'kr', population: '180K', phoneCode: '+46 18', language: 'Swedish',
      climate: 'Humid continental with mild summers (18-22°C) and cold winters (-5 to 0°C). Snow December-March.',
      attractions: ['Uppsala Cathedral', 'Uppsala University', 'Gamla Uppsala', 'Linnaeus Garden', 'Gustavianum Museum'],
      demographics: 'Fourth-largest city in Sweden, oldest Scandinavian university (1477). Historic religious center with Viking burial mounds.'
    }
  },
  
  // Norway - Additional Cities
  { slug: 'bergen', city: 'Bergen', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 60.39, lng: 5.32, tier: 2, continent: 'europe',
    info: {
      currency: 'Norwegian Krone', currencySymbol: 'kr', population: '285K', phoneCode: '+47', language: 'Norwegian',
      climate: 'Oceanic with mild temperatures year-round (2-18°C). One of Europe\'s rainiest cities with 240+ rainy days.',
      attractions: ['Bryggen Wharf', 'Fløibanen Funicular', 'Fish Market', 'KODE Art Museums', 'Fantoft Stave Church'],
      demographics: 'Second-largest city in Norway, UNESCO World Heritage Site. Gateway to the fjords and historic Hanseatic trading post.'
    }
  },
  { slug: 'trondheim', city: 'Trondheim', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 63.43, lng: 10.40, tier: 2, continent: 'europe',
    info: {
      currency: 'Norwegian Krone', currencySymbol: 'kr', population: '210K', phoneCode: '+47', language: 'Norwegian',
      climate: 'Oceanic with mild summers (14-18°C) and cold winters (-3 to 2°C). Frequent precipitation, snow in winter.',
      attractions: ['Nidaros Cathedral', 'Old Town Bridge', 'Kristiansten Fortress', 'Rockheim', 'Bakklandet'],
      demographics: 'Third-largest city in Norway, former Viking capital. Home to Norway\'s oldest cathedral, major tech and university hub.'
    }
  },
  { slug: 'stavanger', city: 'Stavanger', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 58.97, lng: 5.73, tier: 3, continent: 'europe',
    info: {
      currency: 'Norwegian Krone', currencySymbol: 'kr', population: '145K', phoneCode: '+47', language: 'Norwegian',
      climate: 'Oceanic with mild summers (15-18°C) and cool winters (0-5°C). Frequent rainfall, milder than latitude suggests.',
      attractions: ['Old Stavanger', 'Pulpit Rock (Preikestolen)', 'Norwegian Petroleum Museum', 'Stavanger Cathedral', 'Lysefjord'],
      demographics: 'Fourth-largest city in Norway, oil capital of the country. Gateway to dramatic fjord landscapes and hiking.'
    }
  },
  
  // Denmark - Additional Cities
  { slug: 'aarhus', city: 'Aarhus', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 56.16, lng: 10.20, tier: 2, continent: 'europe',
    info: {
      currency: 'Danish Krone', currencySymbol: 'kr', population: '285K', phoneCode: '+45', language: 'Danish',
      climate: 'Oceanic climate with cool summers (17-21°C) and mild winters (0-4°C). Frequent rainfall year-round.',
      attractions: ['ARoS Aarhus Art Museum', 'Den Gamle By', 'Moesgaard Museum', 'Aarhus Cathedral', 'Marselisborg Palace'],
      demographics: 'Second-largest city in Denmark, European Capital of Culture 2017. Major university and tech hub.'
    }
  },
  { slug: 'odense', city: 'Odense', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 55.40, lng: 10.39, tier: 3, continent: 'europe',
    info: {
      currency: 'Danish Krone', currencySymbol: 'kr', population: '180K', phoneCode: '+45', language: 'Danish',
      climate: 'Oceanic with mild summers (17-21°C) and cool winters (0-4°C). Rainfall distributed throughout the year.',
      attractions: ['Hans Christian Andersen Museum', 'Odense Cathedral', 'Funen Village', 'Brandts Kulturcenter', 'Odense Zoo'],
      demographics: 'Third-largest city in Denmark, birthplace of Hans Christian Andersen. Major cultural center on the island of Funen.'
    }
  },
  { slug: 'aalborg', city: 'Aalborg', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 57.05, lng: 9.92, tier: 3, continent: 'europe',
    info: {
      currency: 'Danish Krone', currencySymbol: 'kr', population: '120K', phoneCode: '+45', language: 'Danish',
      climate: 'Oceanic climate with mild summers (15-20°C) and cold winters (0-5°C). Rainfall throughout the year.',
      attractions: ['Aalborg Zoo', 'Utzon Center', 'Lindholm Høje Viking Burial Site', 'Aalborg Tower', 'Kunsten Museum of Modern Art'],
      demographics: 'Fourth-largest city in Denmark, major cultural and educational hub in North Jutland.'
    }
  },
  
  // Finland - Additional Cities
  { slug: 'tampere', city: 'Tampere', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 61.50, lng: 23.79, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '245K', phoneCode: '+358 3', language: 'Finnish, Swedish',
      climate: 'Humid continental with mild summers (17-22°C) and cold snowy winters (-8 to -2°C). Lakes moderate temperatures.',
      attractions: ['Särkänniemi Adventure Park', 'Moomin Museum', 'Vapriikki Museum Centre', 'Pyynikki Observation Tower', 'Tampere Cathedral'],
      demographics: 'Third-largest city in Finland, "Manchester of the North" for industrial heritage. Known for black sausage and sauna culture.'
    }
  },
  { slug: 'turku', city: 'Turku', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 60.45, lng: 22.27, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '195K', phoneCode: '+358 2', language: 'Finnish, Swedish',
      climate: 'Humid continental with mild summers (17-22°C) and cold winters (-6 to -1°C). Baltic Sea moderates temperatures.',
      attractions: ['Turku Castle', 'Turku Cathedral', 'Aboa Vetus & Ars Nova', 'Archipelago Trail', 'Forum Marinum'],
      demographics: 'Oldest city in Finland, former capital until 1812. Gateway to world\'s largest archipelago, European Capital of Culture 2011.'
    }
  },
  { slug: 'oulu', city: 'Oulu', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 65.01, lng: 25.47, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '210K', phoneCode: '+358 8', language: 'Finnish, Swedish',
      climate: 'Subarctic with short cool summers (15-20°C) and long cold winters (-10 to -4°C). Snow cover 5-6 months.',
      attractions: ['Market Square', 'Oulu Cathedral', 'Tietomaa Science Centre', 'Nallikari Beach', 'Air Guitar World Championships'],
      demographics: 'Fifth-largest city in Finland, northernmost major city in the country. Tech hub and university city near the Arctic Circle.'
    }
  },
  
  // Ireland - Additional Cities
  { slug: 'cork', city: 'Cork', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 51.90, lng: -8.47, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '210K', phoneCode: '+353 21', language: 'English, Irish',
      climate: 'Oceanic with mild temperatures year-round (5-18°C). Frequent rainfall, especially in winter.',
      attractions: ['English Market', 'Blarney Castle', 'St. Fin Barre\'s Cathedral', 'Cork City Gaol', 'Shandon Bells'],
      demographics: 'Second-largest city in Ireland, known as the "Rebel City". Major port, university town, and European Capital of Culture 2005.'
    }
  },
  { slug: 'galway', city: 'Galway', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 53.27, lng: -9.06, tier: 2, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '85K', phoneCode: '+353 91', language: 'English, Irish',
      climate: 'Oceanic with mild temperatures year-round (5-18°C). Frequent rainfall and Atlantic winds.',
      attractions: ['Spanish Arch', 'Claddagh', 'Eyre Square', 'Galway Cathedral', 'Salthill Promenade'],
      demographics: 'Fourth-largest city in Ireland, gateway to Connemara and Aran Islands. Known as Ireland\'s Cultural Heart, European Capital of Culture 2020.'
    }
  },
  { slug: 'limerick', city: 'Limerick', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 52.67, lng: -8.63, tier: 3, continent: 'europe',
    info: {
      currency: 'Euro', currencySymbol: '€', population: '100K', phoneCode: '+353 61', language: 'English, Irish',
      climate: 'Oceanic with mild temperatures year-round (5-18°C). Frequent rainfall, especially in winter.',
      attractions: ['King John\'s Castle', 'St. Mary\'s Cathedral', 'Hunt Museum', 'Treaty Stone', 'Thomond Park'],
      demographics: 'Third-largest city in Ireland, on the River Shannon. Historic medieval city known for rugby and revitalized Georgian architecture.'
    }
  },
  
  // Czechia - Additional Cities
  { slug: 'brno', city: 'Brno', timezone: 'Europe/Prague', country: 'Czechia', countryCode: 'CZ', lat: 49.20, lng: 16.61, tier: 2, continent: 'europe',
    info: {
      currency: 'Czech Koruna', currencySymbol: 'Kč', population: '380K', phoneCode: '+420 5', language: 'Czech',
      climate: 'Humid continental with warm summers (18-26°C) and cold winters (-2 to 4°C). Moderate rainfall.',
      attractions: ['Špilberk Castle', 'Villa Tugendhat', 'Cathedral of St. Peter and Paul', 'Brno Underground', 'Old Town Hall'],
      demographics: 'Second-largest city in Czechia, major university and tech hub. Known for functionalist architecture and MotoGP circuit.'
    }
  },
  { slug: 'ostrava', city: 'Ostrava', timezone: 'Europe/Prague', country: 'Czechia', countryCode: 'CZ', lat: 49.84, lng: 18.29, tier: 2, continent: 'europe',
    info: {
      currency: 'Czech Koruna', currencySymbol: 'Kč', population: '285K', phoneCode: '+420 59', language: 'Czech',
      climate: 'Humid continental with warm summers (18-25°C) and cold winters (-3 to 2°C). Moderate rainfall.',
      attractions: ['Dolní Vítkovice', 'Landek Park', 'New Town Hall Tower', 'Silesian Ostrava Castle', 'Colours of Ostrava Festival'],
      demographics: 'Third-largest city in Czechia, former industrial powerhouse. Now reinvented as cultural hub with transformed steel works.'
    }
  },
  { slug: 'pilsen', city: 'Pilsen', timezone: 'Europe/Prague', country: 'Czechia', countryCode: 'CZ', lat: 49.75, lng: 13.38, tier: 3, continent: 'europe',
    info: {
      currency: 'Czech Koruna', currencySymbol: 'Kč', population: '175K', phoneCode: '+420 37', language: 'Czech',
      climate: 'Oceanic with warm summers (17-24°C) and cold winters (-2 to 3°C). Moderate rainfall year-round.',
      attractions: ['Pilsner Urquell Brewery', 'St. Bartholomew Cathedral', 'Great Synagogue', 'Techmania Science Center', 'Republic Square'],
      demographics: 'Fourth-largest city in Czechia, birthplace of Pilsner beer. European Capital of Culture 2015, major industrial center.'
    }
  },
  
  // Hungary - Additional Cities
  { slug: 'debrecen', city: 'Debrecen', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 47.53, lng: 21.63, tier: 2, continent: 'europe',
    info: {
      currency: 'Hungarian Forint', currencySymbol: 'Ft', population: '200K', phoneCode: '+36 52', language: 'Hungarian',
      climate: 'Humid continental with hot summers (20-28°C) and cold winters (-2 to 4°C). Low rainfall.',
      attractions: ['Great Reformed Church', 'Déri Museum', 'Great Forest Park', 'Aquaticum', 'Old College'],
      demographics: 'Second-largest city in Hungary, "Calvinist Rome" for its Protestant heritage. Major university town and cultural center.'
    }
  },
  { slug: 'szeged', city: 'Szeged', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 46.25, lng: 20.15, tier: 3, continent: 'europe',
    info: {
      currency: 'Hungarian Forint', currencySymbol: 'Ft', population: '160K', phoneCode: '+36 62', language: 'Hungarian',
      climate: 'Humid continental with hot summers (22-30°C) and cold winters (-2 to 4°C). Sunniest city in Hungary.',
      attractions: ['Votive Church', 'Széchenyi Square', 'Szeged Open-Air Festival', 'Reök Palace', 'Pick Salami Museum'],
      demographics: 'Third-largest city in Hungary, "City of Sunshine". Major university town rebuilt after 1879 flood with grand boulevards.'
    }
  },
  { slug: 'pecs', city: 'Pécs', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 46.07, lng: 18.23, tier: 3, continent: 'europe',
    info: {
      currency: 'Hungarian Forint', currencySymbol: 'Ft', population: '145K', phoneCode: '+36 72', language: 'Hungarian',
      climate: 'Humid continental with warm summers (20-28°C) and mild winters (0-5°C). Mediterranean influence.',
      attractions: ['Early Christian Necropolis', 'Pécs Cathedral', 'Zsolnay Cultural Quarter', 'Mosque of Pasha Qasim', 'Széchenyi Square'],
      demographics: 'Fifth-largest city in Hungary, UNESCO World Heritage Site. European Capital of Culture 2010, known for Ottoman heritage and ceramics.'
    }
  },
  
  // Romania - Additional Cities
  { slug: 'cluj-napoca', city: 'Cluj-Napoca', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 46.77, lng: 23.60, tier: 2, continent: 'europe',
    info: {
      currency: 'Romanian Leu', currencySymbol: 'lei', population: '325K', phoneCode: '+40 264', language: 'Romanian, Hungarian',
      climate: 'Humid continental with warm summers (18-27°C) and cold snowy winters (-4 to 3°C).',
      attractions: ['St. Michael\'s Church', 'Central Park', 'National Museum of Transylvanian History', 'Botanical Garden', 'Union Square'],
      demographics: 'Second-largest city in Romania, unofficial capital of Transylvania. Major IT hub and university city with vibrant cultural scene.'
    }
  },
  { slug: 'timisoara', city: 'Timișoara', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 45.76, lng: 21.23, tier: 2, continent: 'europe',
    info: {
      currency: 'Romanian Leu', currencySymbol: 'lei', population: '320K', phoneCode: '+40 256', language: 'Romanian, Hungarian, German',
      climate: 'Humid continental with warm summers (22-28°C) and cold winters (-2 to 4°C). Moderate rainfall.',
      attractions: ['Union Square', 'Orthodox Metropolitan Cathedral', 'Timișoara Bastions', 'Revolution Memorial', 'Roses Park'],
      demographics: 'Third-largest city in Romania, "Little Vienna". First European city with electric street lighting (1884), birthplace of 1989 Revolution.'
    }
  },
  { slug: 'constanta', city: 'Constanța', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 44.18, lng: 28.63, tier: 2, continent: 'europe',
    info: {
      currency: 'Romanian Leu', currencySymbol: 'lei', population: '285K', phoneCode: '+40 241', language: 'Romanian',
      climate: 'Humid subtropical with hot summers (22-30°C) and mild winters (0-7°C). Black Sea moderates temperatures.',
      attractions: ['Constanța Casino', 'Roman Mosaic Building', 'Mamaia Beach', 'Tomis Harbor', 'Natural History Museum'],
      demographics: 'Oldest continuously inhabited city in Romania, founded by Greeks as Tomis. Major Black Sea port and summer resort.'
    }
  },
  
  // Turkey - Additional Cities
  { slug: 'adana', city: 'Adana', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.00, lng: 35.32, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '2.2M', phoneCode: '+90 322', language: 'Turkish',
      climate: 'Mediterranean climate with hot dry summers (35-40°C) and mild rainy winters (5-15°C).',
      attractions: ['Sabancı Central Mosque', 'Stone Bridge', 'Adana Archaeological Museum', 'Seyhan Dam Lake', 'Merkez Park'],
      demographics: 'Fifth-largest city in Turkey, known for Adana kebab, cotton industry, and as gateway to Çukurova region.'
    }
  },
  { slug: 'gaziantep', city: 'Gaziantep', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.07, lng: 37.38, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '2.1M', phoneCode: '+90 342', language: 'Turkish, Kurdish, Arabic',
      climate: 'Mediterranean with hot dry summers (30-38°C) and cold wet winters (2-8°C). Snow possible in winter.',
      attractions: ['Zeugma Mosaic Museum', 'Gaziantep Castle', 'Bakırcılar Bazaar', 'Defence and Heroism Panoramic Museum', 'Historic Souks'],
      demographics: 'Sixth-largest city in Turkey, UNESCO Creative City of Gastronomy. Famous for baklava, pistachios, and copper crafts.'
    }
  },
  { slug: 'konya', city: 'Konya', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.87, lng: 32.48, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '2.3M', phoneCode: '+90 332', language: 'Turkish',
      climate: 'Semi-arid with hot dry summers (28-33°C) and cold snowy winters (-2 to 5°C). Continental influence.',
      attractions: ['Mevlana Museum', 'Alaeddin Mosque', 'Karatay Madrasah', 'Ince Minaret Museum', 'Sille Village'],
      demographics: 'Seventh-largest city in Turkey, spiritual home of Whirling Dervishes and Rumi. Important religious and cultural center.'
    }
  },
  { slug: 'mersin', city: 'Mersin', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 36.80, lng: 34.64, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '1.9M', phoneCode: '+90 324', language: 'Turkish',
      climate: 'Mediterranean with hot humid summers (28-34°C) and mild rainy winters (10-15°C). Year-round sunshine.',
      attractions: ['Kızkalesi', 'Mersin Marina', 'Atatürk Park', 'Tarsus (St. Paul birthplace)', 'Cennet-Cehennem Caves'],
      demographics: 'Turkey\'s largest Mediterranean port, free trade zone. Gateway to Cilicia region, near ancient Tarsus.'
    }
  },
  { slug: 'diyarbakir', city: 'Diyarbakır', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.91, lng: 40.24, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '1.8M', phoneCode: '+90 412', language: 'Turkish, Kurdish',
      climate: 'Hot semi-arid with very hot summers (35-42°C) and cold winters (0-7°C). Low rainfall.',
      attractions: ['Diyarbakır Fortress (UNESCO)', 'Hevsel Gardens (UNESCO)', 'Ulu Mosque', 'Four-Legged Minaret', 'Gazi Mansion'],
      demographics: 'Largest city in southeastern Turkey, historic Mesopotamian center. UNESCO World Heritage walls, Kurdish cultural capital.'
    }
  },
  { slug: 'kayseri', city: 'Kayseri', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 38.73, lng: 35.49, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '1.4M', phoneCode: '+90 352', language: 'Turkish',
      climate: 'Continental with hot dry summers (28-33°C) and cold snowy winters (-5 to 3°C). At foot of Mount Erciyes.',
      attractions: ['Mount Erciyes Ski Resort', 'Kayseri Castle', 'Hunat Hatun Complex', 'Seljuk Museum', 'Develi'],
      demographics: 'Major Anatolian industrial city, known for entrepreneurship. Historic Seljuk capital, famous for pastırma and mantı.'
    }
  },
  { slug: 'eskisehir', city: 'Eskişehir', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 39.78, lng: 30.52, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '900K', phoneCode: '+90 222', language: 'Turkish',
      climate: 'Continental with warm summers (25-30°C) and cold snowy winters (-3 to 5°C). Steppe climate.',
      attractions: ['Odunpazarı (UNESCO)', 'Porsuk River', 'Sazova Park', 'Meerschaum Museum', 'Gondola rides'],
      demographics: 'Turkey\'s most livable city, major university town. UNESCO historic quarter, known for meerschaum pipes and student life.'
    }
  },
  { slug: 'samsun', city: 'Samsun', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 41.29, lng: 36.33, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '1.4M', phoneCode: '+90 362', language: 'Turkish',
      climate: 'Humid subtropical with warm summers (24-28°C) and cool wet winters (5-10°C). Black Sea climate.',
      attractions: ['Bandırma Ferry Museum', 'Atatürk Monument', 'Amazon Village', 'Amisos Hill', 'Batı Park'],
      demographics: 'Largest Black Sea port, where Atatürk launched independence movement (May 19, 1919). Major tobacco and industrial center.'
    }
  },
  { slug: 'denizli', city: 'Denizli', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.77, lng: 29.09, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '1.1M', phoneCode: '+90 258', language: 'Turkish',
      climate: 'Mediterranean transitional with hot summers (30-36°C) and mild winters (5-12°C). Inland plateau.',
      attractions: ['Pamukkale (UNESCO)', 'Hierapolis', 'Kaklik Cave', 'Laodikeia', 'Tripolis'],
      demographics: 'Gateway to Pamukkale travertines, Turkey\'s textile capital. Major rooster symbol, thermal springs region.'
    }
  },
  { slug: 'sanliurfa', city: 'Şanlıurfa', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.16, lng: 38.79, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '2.1M', phoneCode: '+90 414', language: 'Turkish, Kurdish, Arabic',
      climate: 'Hot semi-arid with very hot summers (35-43°C) and mild winters (5-12°C). Desert influence.',
      attractions: ['Göbekli Tepe (UNESCO)', 'Balıklıgöl', 'Urfa Castle', 'Bazaar', 'Harran'],
      demographics: 'City of Prophets (Abraham\'s birthplace), gateway to Göbekli Tepe (world\'s oldest temple, 12,000 years). Mesopotamian heritage.'
    }
  },
  { slug: 'trabzon', city: 'Trabzon', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 41.00, lng: 39.72, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '810K', phoneCode: '+90 462', language: 'Turkish',
      climate: 'Humid subtropical with warm summers (23-27°C) and mild rainy winters (7-11°C). Heavy rainfall, lush green.',
      attractions: ['Sumela Monastery', 'Hagia Sophia Museum', 'Uzungöl', 'Atatürk Mansion', 'Trabzon Castle'],
      demographics: 'Historic Black Sea port, former Trebizond Empire capital. Gateway to Sumela Monastery and eastern Black Sea highlands.'
    }
  },
  { slug: 'malatya', city: 'Malatya', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 38.35, lng: 38.31, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '810K', phoneCode: '+90 422', language: 'Turkish, Kurdish',
      climate: 'Continental with hot dry summers (30-38°C) and cold snowy winters (-3 to 5°C). High altitude.',
      attractions: ['Aslantepe (UNESCO)', 'Malatya Museum', 'Apricot Orchards', 'Levent Valley', 'Battalgazi'],
      demographics: 'World apricot capital (85% of dried apricots). UNESCO Aslantepe archaeological site, eastern Anatolian gateway.'
    }
  },
  { slug: 'kocaeli', city: 'Kocaeli', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 40.77, lng: 29.92, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '2M', phoneCode: '+90 262', language: 'Turkish',
      climate: 'Humid subtropical with warm summers (25-30°C) and cool wet winters (5-10°C). Marmara Sea influence.',
      attractions: ['İzmit Clock Tower', 'Seka Park', 'Kartepe Ski Resort', 'Sapanca Lake', 'Museum of Archaeology'],
      demographics: 'Major industrial hub between Istanbul and Ankara. Automotive manufacturing center (Ford, Hyundai), Sapanca Lake tourism.'
    }
  },
  { slug: 'manisa', city: 'Manisa', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 38.62, lng: 27.43, tier: 2, continent: 'europe',
    info: {
      currency: 'Turkish Lira', currencySymbol: '₺', population: '1.5M', phoneCode: '+90 236', language: 'Turkish',
      climate: 'Mediterranean with hot dry summers (32-38°C) and mild wet winters (6-12°C). Gediz valley.',
      attractions: ['Sardis Ancient City', 'Sultan Mosque', 'Mesir Festival', 'Spil Mountain', 'Manisa Museum'],
      demographics: 'Historic Ottoman sultans\' training ground. Famous for Mesir Macunu (UNESCO heritage paste), gateway to ancient Sardis.'
    }
  },
  
  // Russia - Additional Cities
  { slug: 'novosibirsk', city: 'Novosibirsk', timezone: 'Asia/Novosibirsk', country: 'Russia', countryCode: 'RU', lat: 55.04, lng: 82.93, tier: 2, continent: 'asia',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.6M', phoneCode: '+7 383', language: 'Russian',
      climate: 'Humid continental with warm short summers (18-26°C) and very cold winters (-18 to -10°C). Significant snowfall.',
      attractions: ['Novosibirsk Opera House', 'Akademgorodok', 'Novosibirsk Zoo', 'Lenin Square', 'Alexander Nevsky Cathedral'],
      demographics: 'Third-largest city in Russia, largest in Siberia. Major scientific and industrial center on the Trans-Siberian Railway.'
    }
  },
  { slug: 'yekaterinburg', city: 'Yekaterinburg', timezone: 'Asia/Yekaterinburg', country: 'Russia', countryCode: 'RU', lat: 56.84, lng: 60.60, tier: 2, continent: 'asia',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.5M', phoneCode: '+7 343', language: 'Russian',
      climate: 'Humid continental with warm short summers (18-25°C) and very cold long winters (-15 to -8°C). Significant snowfall.',
      attractions: ['Church on Blood', 'Yeltsin Center', 'Europe-Asia Border', 'Ganina Yama', 'Sevastyanov House'],
      demographics: 'Fourth-largest city in Russia, capital of the Urals. Site where last Tsar was executed, major industrial and cultural center.'
    }
  },
  { slug: 'kazan', city: 'Kazan', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 55.80, lng: 49.11, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.3M', phoneCode: '+7 843', language: 'Russian, Tatar',
      climate: 'Humid continental with warm summers (20-25°C) and cold snowy winters (-10 to -15°C).',
      attractions: ['Kazan Kremlin', 'Kul Sharif Mosque', 'Bauman Street', 'Temple of All Religions', 'Kazan Family Center'],
      demographics: 'Capital of Tatarstan, "Third Capital of Russia". UNESCO World Heritage Site blending Russian and Tatar cultures.'
    }
  },
  { slug: 'sochi', city: 'Sochi', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 43.60, lng: 39.73, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '440K', phoneCode: '+7 862', language: 'Russian',
      climate: 'Humid subtropical with warm summers (24-28°C) and mild winters (6-10°C). Wettest city in Russia.',
      attractions: ['Sochi Olympic Park', 'Rosa Khutor', 'Riviera Park', 'Stalin\'s Dacha', 'Skybridge'],
      demographics: 'Russia\'s summer capital on Black Sea coast, hosted 2014 Winter Olympics. Unique for beach and ski resorts in same area.'
    }
  },
  { slug: 'vladivostok', city: 'Vladivostok', timezone: 'Asia/Vladivostok', country: 'Russia', countryCode: 'RU', lat: 43.12, lng: 131.89, tier: 2, continent: 'asia',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '600K', phoneCode: '+7 423', language: 'Russian',
      climate: 'Humid continental with warm foggy summers (17-22°C) and cold dry winters (-14 to -5°C). Monsoon influence.',
      attractions: ['Russky Bridge', 'Eagle\'s Nest Hill', 'S-56 Submarine Museum', 'Vladivostok Fortress', 'Sportivnaya Harbor'],
      demographics: 'Russia\'s Pacific gateway, terminus of Trans-Siberian Railway. Major naval base with stunning Golden Horn Bay setting.'
    }
  },
  { slug: 'nizhny-novgorod', city: 'Nizhny Novgorod', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 56.33, lng: 44.00, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.25M', phoneCode: '+7 831', language: 'Russian',
      climate: 'Humid continental with warm summers (18-25°C) and cold snowy winters (-12 to -5°C). Volga River influence.',
      attractions: ['Nizhny Novgorod Kremlin', 'Chkalov Staircase', 'Bolshaya Pokrovskaya Street', 'Volga River Embankment', 'Pechersky Monastery'],
      demographics: 'Fifth-largest city, at Volga-Oka confluence. Historic trading center, formerly closed "Gorky" city, major automotive hub (GAZ).'
    }
  },
  { slug: 'chelyabinsk', city: 'Chelyabinsk', timezone: 'Asia/Yekaterinburg', country: 'Russia', countryCode: 'RU', lat: 55.16, lng: 61.40, tier: 2, continent: 'asia',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.2M', phoneCode: '+7 351', language: 'Russian',
      climate: 'Humid continental with warm summers (18-26°C) and very cold winters (-15 to -8°C). Ural Mountains influence.',
      attractions: ['Revolution Square', 'Kirovka Pedestrian Street', 'Regional Museum', 'Gagarin Park', 'Church of the Holy Trinity'],
      demographics: 'Major Ural industrial center, gateway to Siberia. Famous for 2013 meteorite, steel and tank production (Tankograd in WWII).'
    }
  },
  { slug: 'samara', city: 'Samara', timezone: 'Europe/Samara', country: 'Russia', countryCode: 'RU', lat: 53.20, lng: 50.15, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.15M', phoneCode: '+7 846', language: 'Russian',
      climate: 'Humid continental with hot summers (22-28°C) and cold winters (-12 to -6°C). Volga River influence.',
      attractions: ['Samara Embankment', 'Stalin\'s Bunker', 'Zhiguli Brewery', 'Samara Space Museum', 'Iversky Monastery'],
      demographics: 'Sixth-largest city on Volga bend. WWII reserve capital, aerospace capital (Soyuz rockets built here), longest river embankment in Russia.'
    }
  },
  { slug: 'omsk', city: 'Omsk', timezone: 'Asia/Omsk', country: 'Russia', countryCode: 'RU', lat: 54.99, lng: 73.37, tier: 2, continent: 'asia',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.15M', phoneCode: '+7 381', language: 'Russian',
      climate: 'Humid continental with warm summers (19-26°C) and very cold winters (-18 to -10°C). Extreme temperature range.',
      attractions: ['Assumption Cathedral', 'Omsk Fortress', 'Lyubinsky Prospekt', 'Vrubel Museum', 'Irtysh River Embankment'],
      demographics: 'Eighth-largest city, where Dostoevsky was imprisoned. Major oil refining center, former capital of White Russia (1918-1920).'
    }
  },
  { slug: 'rostov-on-don', city: 'Rostov-on-Don', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 47.23, lng: 39.72, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.15M', phoneCode: '+7 863', language: 'Russian',
      climate: 'Humid continental with hot summers (25-32°C) and mild winters (-3 to 3°C). Southern Russia, near Black Sea.',
      attractions: ['Bolshaya Sadovaya Street', 'Rostov Arena', 'Gorky Park', 'Embankment', 'Cathedral of the Nativity'],
      demographics: 'Gateway to Caucasus, "Southern Capital of Russia". Don Cossack heritage, major trade and education hub.'
    }
  },
  { slug: 'ufa', city: 'Ufa', timezone: 'Asia/Yekaterinburg', country: 'Russia', countryCode: 'RU', lat: 54.74, lng: 55.97, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.1M', phoneCode: '+7 347', language: 'Russian, Bashkir, Tatar',
      climate: 'Humid continental with warm summers (19-26°C) and cold winters (-14 to -8°C). Ural foothills.',
      attractions: ['Lala Tulip Mosque', 'Salavat Yulaev Monument', 'Congress Hall', 'Victory Park', 'Bashkir Opera House'],
      demographics: 'Capital of Bashkortostan, major oil refining center. Multicultural city with Tatar, Bashkir, and Russian heritage.'
    }
  },
  { slug: 'krasnoyarsk', city: 'Krasnoyarsk', timezone: 'Asia/Krasnoyarsk', country: 'Russia', countryCode: 'RU', lat: 56.01, lng: 92.85, tier: 2, continent: 'asia',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.1M', phoneCode: '+7 391', language: 'Russian',
      climate: 'Humid continental with warm summers (18-26°C) and very cold winters (-18 to -10°C). Yenisei River influence.',
      attractions: ['Stolby Nature Reserve', 'Paraskeva Pyatnitsa Chapel', 'Krasnoyarsk Dam', 'Regional Museum', 'Roev Ruchey Zoo'],
      demographics: 'Largest city in Siberia proper, on Yenisei River. Major aluminum production (Norilsk Nickel), famous for unique rock pillars.'
    }
  },
  { slug: 'voronezh', city: 'Voronezh', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 51.67, lng: 39.18, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.05M', phoneCode: '+7 473', language: 'Russian',
      climate: 'Humid continental with warm summers (20-27°C) and cold winters (-8 to -3°C). Black Earth region.',
      attractions: ['Admiralty Square', 'Annunciation Cathedral', 'Koltsov Square', 'Voronezh Reservoir', 'Kitten from Lizyukov Street statue'],
      demographics: 'Birthplace of Russian Navy (Peter the Great). Major aerospace center, known for cartoon kitten statue, gateway to Black Earth region.'
    }
  },
  { slug: 'perm', city: 'Perm', timezone: 'Asia/Yekaterinburg', country: 'Russia', countryCode: 'RU', lat: 58.01, lng: 56.25, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1.05M', phoneCode: '+7 342', language: 'Russian',
      climate: 'Humid continental with warm summers (17-24°C) and cold winters (-15 to -8°C). Western Urals.',
      attractions: ['Perm-36 Gulag Museum', 'Perm Ballet', 'Kama River Embankment', 'Wooden Sculpture Museum', 'Kungur Ice Cave nearby'],
      demographics: 'Major Ural city on Kama River. Gave name to Permian geological period, famous ballet company, Gulag memorial site.'
    }
  },
  { slug: 'volgograd', city: 'Volgograd', timezone: 'Europe/Volgograd', country: 'Russia', countryCode: 'RU', lat: 48.72, lng: 44.50, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '1M', phoneCode: '+7 844', language: 'Russian',
      climate: 'Semi-arid with hot summers (25-32°C) and cold winters (-8 to -2°C). Volga River, steppe climate.',
      attractions: ['Mamayev Kurgan', 'The Motherland Calls statue', 'Panorama Museum', 'Volga Embankment', 'Mill of Gerhardt'],
      demographics: 'Former Stalingrad, site of WWII\'s bloodiest battle. The Motherland Calls is Europe\'s tallest statue, powerful war memorials.'
    }
  },
  { slug: 'krasnodar', city: 'Krasnodar', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 45.04, lng: 38.98, tier: 2, continent: 'europe',
    info: {
      currency: 'Russian Ruble', currencySymbol: '₽', population: '950K', phoneCode: '+7 861', language: 'Russian',
      climate: 'Humid subtropical with hot summers (26-32°C) and mild winters (0-6°C). Southern Russia, near Black Sea.',
      attractions: ['Red Street', 'Krasnodar Park', 'Catherine Monument', 'Aurora Cinema', 'Kuban River Embankment'],
      demographics: 'Capital of Krasnodar Krai, Russia\'s agricultural heartland. Fastest-growing major city, gateway to Black Sea resorts.'
    }
  },
  
  // Japan - Additional Cities
  { slug: 'yokohama', city: 'Yokohama', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.44, lng: 139.64, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '3.8M', phoneCode: '+81 45', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (26-31°C) and mild winters (4-10°C). Rainy season June-July.',
      attractions: ['Minato Mirai 21', 'Chinatown', 'Sankeien Garden', 'Cup Noodles Museum', 'Yokohama Landmark Tower'],
      demographics: 'Second-largest city in Japan, major port since 1859. Modern waterfront and Japan\'s largest Chinatown.'
    }
  },
  { slug: 'nagoya', city: 'Nagoya', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.18, lng: 136.91, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '2.3M', phoneCode: '+81 52', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and cool winters (2-10°C). Rainy season in June.',
      attractions: ['Nagoya Castle', 'Atsuta Shrine', 'Toyota Commemorative Museum', 'Osu Shopping District', 'Higashiyama Zoo'],
      demographics: 'Fourth-largest city in Japan, center of automotive industry (Toyota). Known for manufacturing, miso cuisine, and samurai heritage.'
    }
  },
  { slug: 'sapporo', city: 'Sapporo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 43.06, lng: 141.35, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '2.0M', phoneCode: '+81 11', language: 'Japanese',
      climate: 'Humid continental with warm summers (20-26°C) and cold snowy winters (-4 to 0°C). Heavy snowfall.',
      attractions: ['Sapporo Snow Festival', 'Odori Park', 'Clock Tower', 'Sapporo Beer Museum', 'Moerenuma Park'],
      demographics: 'Fifth-largest city in Japan, capital of Hokkaido. Hosted 1972 Winter Olympics, known for ramen, beer, and skiing.'
    }
  },
  { slug: 'fukuoka', city: 'Fukuoka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 33.59, lng: 130.40, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '1.6M', phoneCode: '+81 92', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (5-10°C). Rainy season in June.',
      attractions: ['Ohori Park', 'Fukuoka Tower', 'Kushida Shrine', 'Canal City Hakata', 'Dazaifu Tenmangu'],
      demographics: 'Largest city on Kyushu island, gateway to Asia. Known for Hakata ramen, yatai food stalls, and tech startup scene.'
    }
  },
  { slug: 'kobe', city: 'Kobe', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.69, lng: 135.20, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '1.5M', phoneCode: '+81 78', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (3-10°C). Rainy season in June.',
      attractions: ['Kobe Port Tower', 'Mount Rokko', 'Nunobiki Herb Garden', 'Arima Onsen', 'Chinatown (Nankinmachi)'],
      demographics: 'Sixth-largest city in Japan, major port between mountains and sea. Famous for Kobe beef and cosmopolitan atmosphere.'
    }
  },
  { slug: 'hiroshima', city: 'Hiroshima', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.39, lng: 132.46, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '1.2M', phoneCode: '+81 82', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-32°C) and mild winters (3-10°C). Seto Inland Sea climate.',
      attractions: ['Peace Memorial Park', 'Atomic Bomb Dome (UNESCO)', 'Hiroshima Castle', 'Shukkeien Garden', 'Miyajima Island nearby'],
      demographics: 'City of peace, rebuilt after 1945. Major industrial center, gateway to Miyajima, famous for okonomiyaki.'
    }
  },
  { slug: 'sendai', city: 'Sendai', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 38.27, lng: 140.87, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '1.1M', phoneCode: '+81 22', language: 'Japanese',
      climate: 'Humid continental with warm summers (23-28°C) and cold winters (-1 to 6°C). Pacific coast influence.',
      attractions: ['Zuihoden Mausoleum', 'Sendai Castle ruins', 'Jozenji-dori Avenue', 'Matsushima Bay', 'Tanabata Festival'],
      demographics: 'Largest city in Tohoku, "City of Trees". University city, gateway to northern Japan, rebuilt after 2011 tsunami.'
    }
  },
  { slug: 'chiba', city: 'Chiba', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.61, lng: 140.12, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '980K', phoneCode: '+81 43', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (26-31°C) and mild winters (3-10°C). Tokyo Bay influence.',
      attractions: ['Chiba Port Tower', 'Makuhari Messe', 'Chiba Zoological Park', 'Inage Beach', 'Chiba Castle'],
      demographics: 'Part of Greater Tokyo, home to Tokyo Disneyland area. Major convention center and coastal developments.'
    }
  },
  { slug: 'kitakyushu', city: 'Kitakyushu', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 33.88, lng: 130.88, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '940K', phoneCode: '+81 93', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-32°C) and mild winters (4-10°C). Kanmon Straits influence.',
      attractions: ['Kokura Castle', 'Kawachi Wisteria Garden', 'Mojiko Retro', 'Space World', 'Kanmon Straits'],
      demographics: 'Northern Kyushu industrial city, gateway to Honshu via Kanmon Tunnel. Transformed from pollution to eco-model city.'
    }
  },
  { slug: 'sakai', city: 'Sakai', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.57, lng: 135.48, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '830K', phoneCode: '+81 72', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (3-10°C). Osaka Bay climate.',
      attractions: ['Daisen Kofun (UNESCO)', 'Sakai Plaza of Rikyu and Akiko', 'Sakai City Museum', 'Hamadera Park', 'Old Sakai Lighthouse'],
      demographics: 'Part of Osaka metro, historic trading port. Birthplace of Sen no Rikyu (tea ceremony), famous for knives and bicycles.'
    }
  },
  { slug: 'niigata', city: 'Niigata', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 37.90, lng: 139.02, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '790K', phoneCode: '+81 25', language: 'Japanese',
      climate: 'Humid continental with warm summers (24-30°C) and cold snowy winters (0-5°C). Sea of Japan snow effect.',
      attractions: ['Bandai Bridge', 'Niigata Furusatomura', 'Northern Culture Museum', 'Sado Island ferry', 'Sake breweries'],
      demographics: 'Largest city on Sea of Japan coast, major rice and sake producing region. Gateway to Sado Island.'
    }
  },
  { slug: 'hamamatsu', city: 'Hamamatsu', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.71, lng: 137.73, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '790K', phoneCode: '+81 53', language: 'Japanese',
      climate: 'Humid subtropical with hot summers (26-32°C) and mild winters (2-10°C). Pacific coast sunny climate.',
      attractions: ['Hamamatsu Castle', 'Act City Tower', 'Lake Hamana', 'Nakatajima Sand Dunes', 'Musical Instrument Museum'],
      demographics: 'City of music and motorcycles - birthplace of Yamaha, Kawai, Suzuki, and Honda. Major manufacturing center.'
    }
  },
  { slug: 'kumamoto', city: 'Kumamoto', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 32.80, lng: 130.71, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '740K', phoneCode: '+81 96', language: 'Japanese',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (3-10°C). Kyushu interior climate.',
      attractions: ['Kumamoto Castle', 'Suizenji Garden', 'Mount Aso', 'Kumamon mascot spots', 'Shimada Museum'],
      demographics: 'Central Kyushu city with one of Japan\'s finest castles. Gateway to Mount Aso volcano, home of Kumamon mascot.'
    }
  },
  { slug: 'okayama', city: 'Okayama', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.66, lng: 133.92, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '720K', phoneCode: '+81 86', language: 'Japanese',
      climate: 'Mediterranean-like with hot summers (27-33°C) and mild winters (2-10°C). "Land of Sunshine" - low rainfall.',
      attractions: ['Korakuen Garden', 'Okayama Castle', 'Kurashiki Bikan Historical Quarter', 'Kibitsu Shrine', 'Seto Ohashi Bridge'],
      demographics: 'Gateway between western Honshu and Shikoku. One of Japan\'s three great gardens, Momotaro (Peach Boy) legend origin.'
    }
  },
  { slug: 'shizuoka', city: 'Shizuoka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.98, lng: 138.38, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '690K', phoneCode: '+81 54', language: 'Japanese',
      climate: 'Humid subtropical with hot summers (26-31°C) and mild winters (3-11°C). Pacific coast, Mount Fuji views.',
      attractions: ['Mount Fuji views', 'Nihondaira', 'Miho no Matsubara (UNESCO)', 'Sunpu Castle', 'Green tea fields'],
      demographics: 'Between Tokyo and Nagoya with stunning Fuji views. Japan\'s largest green tea producer, Tokugawa Ieyasu\'s retirement city.'
    }
  },
  { slug: 'kagoshima', city: 'Kagoshima', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 31.60, lng: 130.55, tier: 2, continent: 'asia',
    info: {
      currency: 'Japanese Yen', currencySymbol: '¥', population: '600K', phoneCode: '+81 99', language: 'Japanese',
      climate: 'Humid subtropical with hot summers (27-32°C) and mild winters (5-12°C). Volcanic ash from Sakurajima.',
      attractions: ['Sakurajima Volcano', 'Sengan-en Garden', 'Tenmonkan shopping', 'Shiroyama Observatory', 'Ibusuki sand baths'],
      demographics: 'Southern Kyushu city facing active Sakurajima volcano. Historic Satsuma domain, gateway to southern islands.'
    }
  },
  
  // South Korea - Additional Cities
  { slug: 'incheon', city: 'Incheon', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.46, lng: 126.71, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '3.0M', phoneCode: '+82 32', language: 'Korean',
      climate: 'Humid continental with hot humid summers (24-30°C) and cold dry winters (-4 to 4°C).',
      attractions: ['Incheon Chinatown', 'Songdo Central Park', 'Wolmido Island', 'Incheon Landing Memorial', 'Jayu Park'],
      demographics: 'Third-largest city in South Korea, home to main international airport. Major port and Songdo smart city development.'
    }
  },
  { slug: 'daegu', city: 'Daegu', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.87, lng: 128.60, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '2.4M', phoneCode: '+82 53', language: 'Korean',
      climate: 'Humid continental with hot summers (25-33°C) and cold winters (-2 to 8°C). Basin location makes summers hotter.',
      attractions: ['Apsan Park', 'Seomun Market', 'Donghwasa Temple', 'E-World 83 Tower', 'Daegu Arboretum'],
      demographics: 'Fourth-largest city in South Korea, known as "Apple City" and textile industry hub. Modern medical tourism destination.'
    }
  },
  
  // China - Additional Cities
  { slug: 'xian', city: "Xi'an", timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 34.34, lng: 108.94, tier: 2, continent: 'asia' },
  
  // India - Additional Cities
  { slug: 'pune', city: 'Pune', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 18.52, lng: 73.86, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '3.7M', phoneCode: '+91 20', language: 'Marathi, Hindi, English',
      climate: 'Tropical wet and dry with hot dry pre-monsoon (35-42°C), monsoon (June-October), and mild winter (12-28°C).',
      attractions: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort', 'Osho Ashram', 'Dagdusheth Halwai Temple'],
      demographics: 'Second-largest city in Maharashtra, "Oxford of the East" for its universities. Major IT hub and cultural center of Maratha history.'
    }
  },
  { slug: 'ahmedabad', city: 'Ahmedabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 23.02, lng: 72.57, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '8.6M', phoneCode: '+91 79', language: 'Gujarati, Hindi',
      climate: 'Semi-arid with hot summers (40-45°C), mild winters (12-28°C). Monsoon June-September.',
      attractions: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Kankaria Lake', 'Sidi Saiyyed Mosque', 'Akshardham Temple'],
      demographics: 'Largest city in Gujarat, UNESCO World Heritage City. Major textile and pharmaceutical hub.'
    }
  },
  
  // Indonesia - Additional Cities
  { slug: 'surabaya', city: 'Surabaya', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -7.25, lng: 112.75, tier: 2, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '2.9M', phoneCode: '+62 31', language: 'Indonesian, Javanese',
      climate: 'Tropical monsoon with wet season (November-May) and dry season. Hot year-round (27-34°C).',
      attractions: ['House of Sampoerna', 'Suramadu Bridge', 'Submarine Monument', 'Tugu Pahlawan', 'Arab Quarter'],
      demographics: 'Second-largest city in Indonesia, "City of Heroes" for resistance against colonialism. Major port and industrial center in East Java.'
    }
  },
  { slug: 'bandung', city: 'Bandung', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.91, lng: 107.61, tier: 2, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '2.5M', phoneCode: '+62 22', language: 'Indonesian, Sundanese',
      climate: 'Tropical highland with mild temperatures (17-28°C) due to elevation. Rainy season October-April.',
      attractions: ['Tangkuban Perahu Volcano', 'Kawah Putih Crater', 'Gedung Sate', 'Trans Studio Bandung', 'Saung Angklung Udjo'],
      demographics: 'Third-largest city in Indonesia, known as "Paris of Java" for European architecture and fashion outlets.'
    }
  },
  { slug: 'medan', city: 'Medan', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: 3.59, lng: 98.67, tier: 2, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '2.5M', phoneCode: '+62 61', language: 'Indonesian, Batak',
      climate: 'Tropical rainforest with high humidity year-round (24-32°C). Rainfall throughout the year, heaviest September-January.',
      attractions: ['Maimun Palace', 'Great Mosque of Medan', 'Lake Toba', 'Tjong A Fie Mansion', 'Bukit Lawang Orangutans'],
      demographics: 'Fourth-largest city in Indonesia, capital of North Sumatra. Gateway to Lake Toba and Bukit Lawang rainforest.'
    }
  },
  { slug: 'denpasar', city: 'Denpasar', timezone: 'Asia/Makassar', country: 'Indonesia', countryCode: 'ID', lat: -8.65, lng: 115.22, tier: 2, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '730K', phoneCode: '+62 361', language: 'Indonesian, Balinese',
      climate: 'Tropical with wet season (November-March) and dry season. Temperatures 24-33°C year-round.',
      attractions: ['Bajra Sandhi Monument', 'Bali Museum', 'Badung Market', 'Jagatnatha Temple', 'Sanur Beach'],
      demographics: 'Capital of Bali province, main gateway for tourists. Blend of traditional Balinese culture and modern development.'
    }
  },
  
  // Saudi Arabia - Additional Cities
  { slug: 'dammam', city: 'Dammam', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 26.43, lng: 50.10, tier: 2, continent: 'asia',
    info: {
      currency: 'Saudi Riyal', currencySymbol: 'SAR', population: '1.2M', phoneCode: '+966 13', language: 'Arabic',
      climate: 'Hot desert with extremely hot summers (35-45°C) and mild winters (12-22°C). Humid due to Persian Gulf.',
      attractions: ['Corniche', 'King Abdulaziz Center for World Culture', 'Half Moon Bay', 'Heritage Village', 'Marjan Island'],
      demographics: 'Capital of Eastern Province, center of Saudi oil industry. Part of Dammam-Dhahran-Khobar metropolitan area.'
    }
  },
  { slug: 'medina', city: 'Medina', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 24.47, lng: 39.61, tier: 2, continent: 'asia',
    info: {
      currency: 'Saudi Riyal', currencySymbol: 'SAR', population: '1.5M', phoneCode: '+966 14', language: 'Arabic',
      climate: 'Hot desert with extremely hot summers (35-45°C) and mild winters (15-25°C). Very little rainfall.',
      attractions: ['Al-Masjid an-Nabawi', 'Quba Mosque', 'Mount Uhud', 'Qiblatain Mosque', 'Al-Baqi Cemetery'],
      demographics: 'Second holiest city in Islam, burial place of Prophet Muhammad. Receives millions of pilgrims and Hajj visitors annually.'
    }
  },
  
  // Australia - Additional Cities
  { slug: 'adelaide', city: 'Adelaide', timezone: 'Australia/Adelaide', country: 'Australia', countryCode: 'AU', lat: -34.93, lng: 138.60, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '1.4M', phoneCode: '+61 8', language: 'English',
      climate: 'Mediterranean climate with hot dry summers (25-35°C) and mild wet winters (8-16°C).',
      attractions: ['Adelaide Oval', 'Adelaide Central Market', 'Art Gallery of South Australia', 'Glenelg Beach', 'Adelaide Botanic Garden'],
      demographics: 'Capital of South Australia, known for festivals, wine regions (Barossa Valley), and quality of life.'
    }
  },
  { slug: 'gold-coast', city: 'Gold Coast', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -28.02, lng: 153.43, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '700K', phoneCode: '+61 7', language: 'English',
      climate: 'Humid subtropical with warm wet summers (22-29°C) and mild dry winters (12-21°C). 300+ sunny days.',
      attractions: ['Surfers Paradise Beach', 'Sea World', 'Currumbin Wildlife Sanctuary', 'SkyPoint Observation Deck', 'Springbrook National Park'],
      demographics: 'Sixth-largest city in Australia, famous for beaches, theme parks, and nightlife. Major tourist destination south of Brisbane.'
    }
  },
  
  // Brazil - Additional Cities
  { slug: 'salvador', city: 'Salvador', timezone: 'America/Bahia', country: 'Brazil', countryCode: 'BR', lat: -12.97, lng: -38.50, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '2.9M', phoneCode: '+55 71', language: 'Portuguese',
      climate: 'Tropical with warm temperatures year-round (24-30°C). Rainy season April-July.',
      attractions: ['Pelourinho', 'Elevador Lacerda', 'Farol da Barra', 'Mercado Modelo', 'Igreja de Nosso Senhor do Bonfim'],
      demographics: 'Capital of Bahia, first capital of Brazil (1549-1763). Heart of Afro-Brazilian culture, known for capoeira, candomblé, and Carnival.'
    }
  },
  { slug: 'brasilia', city: 'Brasília', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -15.79, lng: -47.88, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '3.1M', phoneCode: '+55 61', language: 'Portuguese',
      climate: 'Tropical savanna with distinct wet (October-April) and dry seasons. Temperatures 18-28°C year-round.',
      attractions: ['Cathedral of Brasília', 'National Congress', 'JK Memorial', 'Palácio da Alvorada', 'Praça dos Três Poderes'],
      demographics: 'Capital of Brazil since 1960, UNESCO World Heritage Site. Planned city designed by Oscar Niemeyer and Lúcio Costa.'
    }
  },
  { slug: 'fortaleza', city: 'Fortaleza', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR', lat: -3.72, lng: -38.54, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '2.7M', phoneCode: '+55 85', language: 'Portuguese',
      climate: 'Tropical with consistent warm temperatures (26-32°C). Rainy season February-May, sunny the rest of year.',
      attractions: ['Praia do Futuro', 'Beach Park', 'Dragão do Mar Cultural Center', 'Mercado Central', 'Iracema Beach'],
      demographics: 'Fifth-largest city in Brazil, capital of Ceará state. Major tourist destination known for beaches, forró music, and cashew nuts.'
    }
  },
  { slug: 'belo-horizonte', city: 'Belo Horizonte', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -19.92, lng: -43.94, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '2.7M', phoneCode: '+55 31', language: 'Portuguese',
      climate: 'Tropical highland with warm wet summers (20-28°C) and mild dry winters (15-25°C).',
      attractions: ['Pampulha Modern Ensemble', 'Mercado Central', 'Praça da Liberdade', 'Inhotim', 'Mangabeiras Park'],
      demographics: 'Third-largest city in Brazil, first planned modern city in the country. Known for food, culture, and nearby Inhotim museum.'
    }
  },
  { slug: 'recife', city: 'Recife', timezone: 'America/Recife', country: 'Brazil', countryCode: 'BR', lat: -8.05, lng: -34.88, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1.6M', phoneCode: '+55 81', language: 'Portuguese',
      climate: 'Tropical with warm temperatures year-round (25-30°C). Rainy season March-August.',
      attractions: ['Recife Antigo', 'Boa Viagem Beach', 'Marco Zero', 'Ricardo Brennand Institute', 'Olinda Historic Town'],
      demographics: 'Capital of Pernambuco, "Venice of Brazil" for its waterways and bridges. Major port and cultural center of Northeast Brazil.'
    }
  },
  
  // Mexico - Additional Cities
  
  // Argentina - Additional Cities
  { slug: 'cordoba-argentina', city: 'Córdoba', timezone: 'America/Argentina/Cordoba', country: 'Argentina', countryCode: 'AR', lat: -31.42, lng: -64.18, tier: 2, continent: 'americas',
    info: {
      currency: 'Argentine Peso', currencySymbol: '$', population: '1.5M', phoneCode: '+54 351', language: 'Spanish',
      climate: 'Humid subtropical with hot summers (20-32°C) and mild dry winters (5-18°C).',
      attractions: ['Jesuit Block', 'Manzana Jesuítica', 'Sarmiento Park', 'Plaza San Martín', 'Córdoba Cathedral'],
      demographics: 'Second-largest city in Argentina, UNESCO World Heritage Site. Major industrial center and home to Argentina\'s first university (1613).'
    }
  },
  { slug: 'rosario', city: 'Rosario', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR', lat: -32.95, lng: -60.65, tier: 2, continent: 'americas',
    info: {
      currency: 'Argentine Peso', currencySymbol: '$', population: '1.3M', phoneCode: '+54 341', language: 'Spanish',
      climate: 'Humid subtropical with hot summers (24-32°C) and mild winters (8-16°C). Rainfall year-round.',
      attractions: ['Monumento a la Bandera', 'Paraná River Waterfront', 'Parque de la Independencia', 'La Florida Beach', 'Centro Cultural Parque de España'],
      demographics: 'Third-largest city in Argentina, birthplace of Che Guevara and Lionel Messi. Major port and industrial center on the Paraná River.'
    }
  },
  { slug: 'mendoza', city: 'Mendoza', timezone: 'America/Argentina/Mendoza', country: 'Argentina', countryCode: 'AR', lat: -32.89, lng: -68.83, tier: 2, continent: 'americas',
    info: {
      currency: 'Argentine Peso', currencySymbol: '$', population: '120K', phoneCode: '+54 261', language: 'Spanish',
      climate: 'Semi-arid with hot dry summers (25-33°C) and mild winters (3-15°C). Very low rainfall, depends on Andes snowmelt.',
      attractions: ['Wine Routes', 'Aconcagua Provincial Park', 'Plaza Independencia', 'Cerro de la Gloria', 'General San Martín Park'],
      demographics: 'Capital of Mendoza province, heart of Argentina\'s wine country. Gateway to Aconcagua, the highest peak in the Americas.'
    }
  },
  { slug: 'mar-del-plata', city: 'Mar del Plata', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR', lat: -38.00, lng: -57.55, tier: 3, continent: 'americas',
    info: {
      currency: 'Argentine Peso', currencySymbol: '$', population: '620K', phoneCode: '+54 223', language: 'Spanish',
      climate: 'Oceanic with mild summers (20-25°C) and cool winters (8-14°C). Rainfall throughout the year.',
      attractions: ['Bristol Beach', 'Sea Lion Colony', 'Casino Central', 'Torre Tanque', 'Juan Manuel Fangio Museum'],
      demographics: 'Seventh-largest city in Argentina, "Pearl of the Atlantic". Major beach resort and fishing port on the Atlantic coast.'
    }
  },
  
  // South Africa - Additional Cities
  { slug: 'durban', city: 'Durban', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -29.86, lng: 31.02, tier: 2, continent: 'africa',
    info: {
      currency: 'South African Rand', currencySymbol: 'R', population: '3.7M', phoneCode: '+27 31', language: 'Zulu, English',
      climate: 'Humid subtropical with warm wet summers (23-28°C) and mild dry winters (16-23°C). Beach weather year-round.',
      attractions: ['Golden Mile Beach', 'uShaka Marine World', 'Moses Mabhida Stadium', 'Victoria Street Market', 'Durban Botanic Gardens'],
      demographics: 'Third-largest city in South Africa, largest city in KwaZulu-Natal. Busiest port in Africa and popular surfing destination.'
    }
  },
  { slug: 'port-elizabeth', city: 'Port Elizabeth', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -33.96, lng: 25.60, tier: 2, continent: 'africa',
    info: {
      currency: 'South African Rand', currencySymbol: 'R', population: '1.3M', phoneCode: '+27 41', language: 'English, Xhosa, Afrikaans',
      climate: 'Oceanic with warm summers (20-26°C) and mild winters (12-20°C). Rainfall year-round, sunny climate.',
      attractions: ['Addo Elephant Park', 'Boardwalk Casino', 'Donkin Reserve', 'Nelson Mandela Bay Stadium', 'Sardinia Bay'],
      demographics: 'Major seaport in Eastern Cape, "The Friendly City". Gateway to Garden Route and Big Five safaris.'
    }
  },
  
  // Canada - Additional Cities

  // ============ PHASE 1: CRITICAL EXPANSION (50+ cities) ============
  
  // INDIA - Additional Major Cities (8 new)
  { slug: 'surat', city: 'Surat', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 21.17, lng: 72.83, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '5.5M', phoneCode: '+91 261', language: 'Gujarati, Hindi',
      climate: 'Tropical wet and dry with hot summers (35-42°C), monsoon (June-September), and mild winters (15-30°C).',
      attractions: ['Dumas Beach', 'Dutch Garden', 'Surat Castle', 'ISKCON Temple', 'Science Centre'],
      demographics: 'Eighth-largest city in India, "Diamond City" processing 90% of world\'s diamonds. Major textile and diamond cutting center.'
    }
  },
  { slug: 'jaipur', city: 'Jaipur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 26.92, lng: 75.79, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '3.1M', phoneCode: '+91 141', language: 'Hindi, Rajasthani',
      climate: 'Semi-arid with very hot summers (35-45°C) and cool winters (8-22°C). Monsoon July-September.',
      attractions: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort'],
      demographics: 'Capital of Rajasthan, "Pink City" for its distinctive terracotta-colored buildings. UNESCO World Heritage Site since 2019.'
    }
  },
  { slug: 'lucknow', city: 'Lucknow', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 26.85, lng: 80.95, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '3.4M', phoneCode: '+91 522', language: 'Hindi, Urdu',
      climate: 'Humid subtropical with very hot summers (40-45°C) and cool winters (5-22°C). Monsoon July-September.',
      attractions: ['Bara Imambara', 'Rumi Darwaza', 'Chota Imambara', 'British Residency', 'Hazratganj Market'],
      demographics: 'Capital of Uttar Pradesh, "City of Nawabs". Known for tehzeeb (culture), kebabs, chikankari embroidery, and Mughal architecture.'
    }
  },
  { slug: 'kanpur', city: 'Kanpur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 26.45, lng: 80.35, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '3.0M', phoneCode: '+91 512', language: 'Hindi, Urdu',
      climate: 'Humid subtropical with extreme hot summers (40-48°C) and cool winters (5-20°C). Monsoon July-September.',
      attractions: ['Kanpur Zoo', 'Phool Bagh', 'Kanpur Memorial Church', 'ISKCON Temple', 'Moti Jheel'],
      demographics: 'Largest city in Uttar Pradesh by area, "Leather City of India". Major industrial hub on the Ganges River.'
    }
  },
  { slug: 'nagpur', city: 'Nagpur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 21.15, lng: 79.09, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2.9M', phoneCode: '+91 712', language: 'Marathi, Hindi',
      climate: 'Tropical wet and dry with very hot summers (40-48°C) and mild winters (10-30°C). Monsoon June-September.',
      attractions: ['Deekshabhoomi', 'Sitabuldi Fort', 'Futala Lake', 'Dragon Palace Temple', 'Ambazari Lake'],
      demographics: 'Third-largest city in Maharashtra, geographic center of India. Known as "Orange City" and winter capital of the state.'
    }
  },
  { slug: 'indore', city: 'Indore', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 22.72, lng: 75.86, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2.2M', phoneCode: '+91 731', language: 'Hindi, Marathi',
      climate: 'Tropical wet and dry with hot summers (35-42°C) and mild winters (10-25°C). Monsoon June-September.',
      attractions: ['Rajwada Palace', 'Lal Bagh Palace', 'Sarafa Bazaar', 'Patalpani Waterfall', 'Central Museum'],
      demographics: 'Largest city in Madhya Pradesh, cleanest city in India (multiple times). Major commercial and educational hub.'
    }
  },
  { slug: 'patna', city: 'Patna', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 25.59, lng: 85.14, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2.0M', phoneCode: '+91 612', language: 'Hindi, Bhojpuri',
      climate: 'Humid subtropical with very hot summers (40-46°C) and cool winters (8-22°C). Monsoon July-September.',
      attractions: ['Golghar', 'Patna Museum', 'Mahavir Temple', 'Gandhi Maidan', 'Takht Sri Patna Sahib'],
      demographics: 'Capital of Bihar, one of the oldest continuously inhabited cities in the world. Ancient name Pataliputra, capital of Mauryan Empire.'
    }
  },
  { slug: 'bhopal', city: 'Bhopal', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 23.26, lng: 77.41, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2.0M', phoneCode: '+91 755', language: 'Hindi, Urdu',
      climate: 'Humid subtropical with hot summers (35-45°C), monsoon (June-September), and mild winters (10-25°C).',
      attractions: ['Upper Lake', 'Taj-ul-Masajid', 'Bharat Bhavan', 'Van Vihar National Park', 'Sanchi Stupa'],
      demographics: 'Capital of Madhya Pradesh, known as "City of Lakes". Historic city with Mughal heritage and modern IT development.'
    }
  },
  { slug: 'visakhapatnam', city: 'Visakhapatnam', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 17.69, lng: 83.22, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2.0M', phoneCode: '+91 891', language: 'Telugu, Hindi, English',
      climate: 'Tropical wet and dry with hot summers (30-38°C) and mild winters (18-28°C). Monsoon June-October, cyclone risk.',
      attractions: ['Kailasagiri Hill', 'Submarine Museum', 'Rishikonda Beach', 'Araku Valley', 'Borra Caves'],
      demographics: 'Largest city in Andhra Pradesh, major port and industrial hub. Known as "City of Destiny" and "Jewel of the East Coast".'
    }
  },
  { slug: 'vadodara', city: 'Vadodara', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 22.31, lng: 73.19, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2.1M', phoneCode: '+91 265', language: 'Gujarati, Hindi',
      climate: 'Tropical wet and dry with hot summers (38-45°C), monsoon (June-September), and mild winters (15-30°C).',
      attractions: ['Laxmi Vilas Palace', 'Sayaji Gardens', 'Vadodara Museum', 'Kirti Mandir', 'EME Temple'],
      demographics: 'Third-largest city in Gujarat, "Cultural Capital of Gujarat". Former Gaekwad princely state with magnificent Indo-Saracenic architecture.'
    }
  },
  { slug: 'ghaziabad', city: 'Ghaziabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 28.67, lng: 77.42, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.8M', phoneCode: '+91 120', language: 'Hindi, Urdu',
      climate: 'Humid subtropical with extreme hot summers (40-47°C) and cool winters (5-20°C). Monsoon July-September.',
      attractions: ['ISKCON Temple', 'Swarna Jayanti Park', 'Shipra Mall', 'Drizzling Land', 'City Forest'],
      demographics: 'Part of Delhi NCR, one of fastest-growing cities in India. Major industrial and residential hub adjacent to New Delhi.'
    }
  },
  { slug: 'ludhiana', city: 'Ludhiana', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 30.90, lng: 75.85, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.7M', phoneCode: '+91 161', language: 'Punjabi, Hindi',
      climate: 'Humid subtropical with very hot summers (40-47°C) and cold foggy winters (4-18°C). Monsoon July-September.',
      attractions: ['Lodhi Fort', 'Punjab Agricultural University', 'Tiger Zoo', 'Gurudwara Charan Kamal', 'Nehru Rose Garden'],
      demographics: 'Largest city in Punjab, "Manchester of India" for textile and hosiery industry. Major industrial and commercial hub.'
    }
  },
  { slug: 'agra', city: 'Agra', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 27.18, lng: 78.02, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.8M', phoneCode: '+91 562', language: 'Hindi, Urdu',
      climate: 'Semi-arid with extreme summers (40-47°C) and cool winters (5-22°C). Monsoon July-September.',
      attractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itimad-ud-Daulah Tomb'],
      demographics: 'Historic city on the banks of Yamuna River, home to three UNESCO World Heritage Sites including the Taj Mahal.'
    }
  },
  { slug: 'nashik', city: 'Nashik', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 20.00, lng: 73.79, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.6M', phoneCode: '+91 253', language: 'Marathi, Hindi',
      climate: 'Tropical wet and dry with hot summers (35-42°C) and mild winters (12-30°C). Monsoon June-September.',
      attractions: ['Trimbakeshwar Temple', 'Sula Vineyards', 'Pandavleni Caves', 'Ramkund', 'Coin Museum'],
      demographics: 'Fourth-largest city in Maharashtra, known as "Wine Capital of India". Hindu pilgrimage site for Kumbh Mela every 12 years.'
    }
  },
  { slug: 'coimbatore', city: 'Coimbatore', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 11.02, lng: 76.97, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.6M', phoneCode: '+91 422', language: 'Tamil, English',
      climate: 'Semi-arid with moderate temperatures year-round (20-35°C). Pleasant climate compared to other South Indian cities.',
      attractions: ['Marudamalai Temple', 'Dhyanalinga', 'VOC Park', 'Brookfields Mall', 'Kovai Kutralam Falls'],
      demographics: 'Second-largest city in Tamil Nadu, "Manchester of South India" for textile industry. Major engineering and IT hub.'
    }
  },
  { slug: 'kochi', city: 'Kochi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 9.93, lng: 76.27, tier: 3, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '680K', phoneCode: '+91 484', language: 'Malayalam, English',
      climate: 'Tropical monsoon with heavy southwest monsoon (June-September). Warm and humid year-round (24-32°C).',
      attractions: ['Fort Kochi', 'Chinese Fishing Nets', 'Mattancherry Palace', 'Jewish Synagogue', 'Kathakali Centre'],
      demographics: 'Port city in Kerala, "Queen of the Arabian Sea". Historic spice trade center with Portuguese, Dutch, and British heritage.'
    }
  },
  { slug: 'thane', city: 'Thane', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 19.22, lng: 72.98, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2.5M', phoneCode: '+91 22', language: 'Marathi, Hindi, English',
      climate: 'Tropical wet and dry with hot summers (30-38°C) and mild winters (18-32°C). Heavy monsoon June-September.',
      attractions: ['Upvan Lake', 'Yeoor Hills', 'Talao Pali Lake', 'Kopineshwar Temple', 'Korum Mall'],
      demographics: 'Part of Mumbai Metropolitan Region, "City of Lakes" with over 30 lakes. Major IT and manufacturing hub with rapid growth.'
    }
  },
  { slug: 'pimpri-chinchwad', city: 'Pimpri-Chinchwad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 18.63, lng: 73.80, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2.1M', phoneCode: '+91 20', language: 'Marathi, Hindi, English',
      climate: 'Tropical wet and dry with hot summers (32-40°C) and pleasant winters (12-28°C). Monsoon June-September.',
      attractions: ['Bhakti Shakti Garden', 'Morya Gosavi Temple', 'Bird Valley', 'Durga Tekdi', 'Auto Cluster Exhibition Centre'],
      demographics: 'Twin city of Pune, India\'s automobile hub. Home to Tata Motors, Bajaj Auto, and major manufacturing industries.'
    }
  },
  { slug: 'rajkot', city: 'Rajkot', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 22.30, lng: 70.80, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '2M', phoneCode: '+91 281', language: 'Gujarati, Hindi, English',
      climate: 'Semi-arid with very hot summers (38-45°C) and mild winters (12-28°C). Low rainfall, mostly in monsoon.',
      attractions: ['Watson Museum', 'Kaba Gandhi No Delo', 'Aji Dam', 'Rotary Dolls Museum', 'Race Course Ground'],
      demographics: 'Fourth-largest city in Gujarat, where Mahatma Gandhi spent his childhood. Major center for auto parts and jewelry manufacturing.'
    }
  },
  { slug: 'meerut', city: 'Meerut', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 28.98, lng: 77.71, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.5M', phoneCode: '+91 121', language: 'Hindi, Urdu, English',
      climate: 'Humid subtropical with very hot summers (40-47°C) and cold winters (3-20°C). Monsoon July-September.',
      attractions: ['Augarnath Temple', 'St. John\'s Church', 'Shahid Smarak', 'Hastinapur Wildlife Sanctuary', 'Gandhi Bagh'],
      demographics: 'Historic city where 1857 Indian Rebellion began. Known as "Sports City of India" for manufacturing sports goods.'
    }
  },
  { slug: 'faridabad', city: 'Faridabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 28.41, lng: 77.31, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.5M', phoneCode: '+91 129', language: 'Hindi, Haryanvi, English',
      climate: 'Humid subtropical with extreme summers (40-47°C) and cold winters (5-20°C). Dusty in summer.',
      attractions: ['Surajkund', 'Badkhal Lake', 'Raja Nahar Singh Palace', 'Town Park', 'YMCA Tourist Hostel'],
      demographics: 'Part of Delhi NCR, largest city in Haryana. Major industrial hub for tractors, motorcycles, and refrigerators.'
    }
  },
  { slug: 'varanasi', city: 'Varanasi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 25.32, lng: 82.99, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.5M', phoneCode: '+91 542', language: 'Hindi, Bhojpuri, English',
      climate: 'Humid subtropical with very hot summers (35-45°C) and cool winters (5-20°C). Monsoon July-September.',
      attractions: ['Dashashwamedh Ghat', 'Kashi Vishwanath Temple', 'Sarnath', 'Assi Ghat', 'Ramnagar Fort'],
      demographics: 'One of world\'s oldest continuously inhabited cities, holiest city in Hinduism. Center for Banarasi silk and classical music.'
    }
  },
  { slug: 'amritsar', city: 'Amritsar', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 31.63, lng: 74.87, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.2M', phoneCode: '+91 183', language: 'Punjabi, Hindi, English',
      climate: 'Humid subtropical with very hot summers (38-45°C) and cold foggy winters (2-15°C). Monsoon July-August.',
      attractions: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Partition Museum', 'Durgiana Temple'],
      demographics: 'Holiest city of Sikhism, home to the Golden Temple. Cultural capital of Punjab, famous for Amritsari cuisine.'
    }
  },
  { slug: 'prayagraj', city: 'Prayagraj', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 25.43, lng: 81.85, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.2M', phoneCode: '+91 532', language: 'Hindi, Urdu, English',
      climate: 'Humid subtropical with very hot summers (40-47°C) and cool winters (8-22°C). Monsoon July-September.',
      attractions: ['Triveni Sangam', 'Allahabad Fort', 'Anand Bhavan', 'All Saints Cathedral', 'Khusro Bagh'],
      demographics: 'Formerly Allahabad, confluence of Ganges, Yamuna, and mythical Saraswati. Hosts world\'s largest gathering at Kumbh Mela.'
    }
  },
  { slug: 'jodhpur', city: 'Jodhpur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 26.24, lng: 73.02, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.4M', phoneCode: '+91 291', language: 'Hindi, Marwari, English',
      climate: 'Hot desert with extreme summers (38-48°C) and mild winters (8-25°C). Very low rainfall.',
      attractions: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Clock Tower', 'Mandore Gardens'],
      demographics: '"Blue City" and "Sun City" of India, gateway to Thar Desert. Known for handicrafts, furniture, and Rajasthani culture.'
    }
  },
  { slug: 'ranchi', city: 'Ranchi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 23.34, lng: 85.31, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.1M', phoneCode: '+91 651', language: 'Hindi, Nagpuri, English',
      climate: 'Humid subtropical with pleasant summers (25-35°C) and cool winters (5-20°C). Heavy monsoon rainfall.',
      attractions: ['Ranchi Lake', 'Rock Garden', 'Tagore Hill', 'Hundru Falls', 'Pahari Mandir'],
      demographics: 'Capital of Jharkhand, "City of Waterfalls". Former summer capital of Bihar, birthplace of MS Dhoni.'
    }
  },
  { slug: 'guwahati', city: 'Guwahati', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 26.14, lng: 91.74, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.1M', phoneCode: '+91 361', language: 'Assamese, Bengali, Hindi, English',
      climate: 'Humid subtropical with warm summers (28-35°C) and mild winters (10-24°C). Heavy monsoon May-September.',
      attractions: ['Kamakhya Temple', 'Umananda Island', 'Assam State Museum', 'Pobitora Wildlife Sanctuary', 'Brahmaputra River Cruise'],
      demographics: 'Gateway to Northeast India on Brahmaputra River. Largest city in Northeast, major center for tea trade and silk.'
    }
  },
  { slug: 'chandigarh', city: 'Chandigarh', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 30.73, lng: 76.78, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.1M', phoneCode: '+91 172', language: 'Hindi, Punjabi, English',
      climate: 'Humid subtropical with hot summers (35-44°C) and cold winters (4-18°C). Monsoon July-September.',
      attractions: ['Rock Garden', 'Sukhna Lake', 'Capitol Complex', 'Rose Garden', 'Elante Mall'],
      demographics: 'India\'s first planned city designed by Le Corbusier. Union Territory serving as capital for both Punjab and Haryana.'
    }
  },
  { slug: 'mysuru', city: 'Mysuru', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 12.30, lng: 76.66, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1M', phoneCode: '+91 821', language: 'Kannada, English, Hindi',
      climate: 'Tropical savanna with pleasant year-round weather (18-35°C). Mild and comfortable most of the year.',
      attractions: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens', 'St. Philomena\'s Church', 'Mysore Zoo'],
      demographics: 'Former capital of Mysore Kingdom, "City of Palaces". Known for Dasara festival, silk sarees, and sandalwood products.'
    }
  },
  { slug: 'thiruvananthapuram', city: 'Thiruvananthapuram', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 8.52, lng: 76.94, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '950K', phoneCode: '+91 471', language: 'Malayalam, English, Tamil',
      climate: 'Tropical monsoon with warm weather year-round (24-33°C). Two monsoon seasons June-September and October-November.',
      attractions: ['Padmanabhaswamy Temple', 'Kovalam Beach', 'Napier Museum', 'Kuthiramalika Palace', 'Ponmudi Hills'],
      demographics: 'Capital of Kerala, "Evergreen City of India". Major IT hub and home to ISRO\'s Vikram Sarabhai Space Centre.'
    }
  },
  { slug: 'madurai', city: 'Madurai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 9.92, lng: 78.12, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.5M', phoneCode: '+91 452', language: 'Tamil, English',
      climate: 'Semi-arid with hot summers (35-42°C) and warm winters (20-30°C). Northeast monsoon October-December.',
      attractions: ['Meenakshi Temple', 'Thirumalai Nayakkar Palace', 'Gandhi Memorial Museum', 'Alagar Kovil', 'Vandiyur Mariamman Teppakulam'],
      demographics: 'One of oldest continuously inhabited cities, over 2,500 years old. Cultural capital of Tamil Nadu, center for Tamil literature.'
    }
  },
  { slug: 'vijayawada', city: 'Vijayawada', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 16.51, lng: 80.65, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.5M', phoneCode: '+91 866', language: 'Telugu, Hindi, English',
      climate: 'Tropical wet and dry with hot summers (38-45°C) and mild winters (18-32°C). Cyclone risk October-December.',
      attractions: ['Kanaka Durga Temple', 'Prakasam Barrage', 'Undavalli Caves', 'Bhavani Island', 'Victoria Museum'],
      demographics: 'Business capital of Andhra Pradesh on Krishna River. Major trade and commercial hub, near new capital Amaravati.'
    }
  },
  { slug: 'bhubaneswar', city: 'Bhubaneswar', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 20.30, lng: 85.82, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '900K', phoneCode: '+91 674', language: 'Odia, Hindi, English',
      climate: 'Tropical savanna with hot humid summers (35-42°C) and mild winters (15-28°C). Cyclone risk in monsoon.',
      attractions: ['Lingaraja Temple', 'Udayagiri Caves', 'Nandankanan Zoo', 'Dhauli Shanti Stupa', 'Rajarani Temple'],
      demographics: 'Capital of Odisha, "Temple City of India" with 700+ temples. Ancient Kalinga capital, emerging IT and education hub.'
    }
  },
  { slug: 'dehradun', city: 'Dehradun', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 30.32, lng: 78.03, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '800K', phoneCode: '+91 135', language: 'Hindi, Garhwali, English',
      climate: 'Humid subtropical with warm summers (30-38°C) and cold winters (2-18°C). Heavy monsoon rainfall.',
      attractions: ['Robber\'s Cave', 'Sahastradhara', 'Forest Research Institute', 'Mindrolling Monastery', 'Tapkeshwar Temple'],
      demographics: 'Capital of Uttarakhand in Doon Valley. Gateway to Mussoorie and Himalayas, center for elite boarding schools and research.'
    }
  },
  { slug: 'aurangabad', city: 'Aurangabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 19.88, lng: 75.34, tier: 2, continent: 'asia',
    info: {
      currency: 'Indian Rupee', currencySymbol: '₹', population: '1.2M', phoneCode: '+91 240', language: 'Marathi, Hindi, Urdu, English',
      climate: 'Semi-arid with hot summers (35-42°C) and mild winters (12-28°C). Low rainfall, mostly in monsoon.',
      attractions: ['Ajanta Caves', 'Ellora Caves', 'Bibi Ka Maqbara', 'Daulatabad Fort', 'Panchakki'],
      demographics: 'Gateway to UNESCO World Heritage sites Ajanta and Ellora. Historic city named after Mughal Emperor Aurangzeb.'
    }
  },

  // CHINA - Additional Major Cities (10 new)
  { slug: 'chongqing', city: 'Chongqing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 29.56, lng: 106.55, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '32M', phoneCode: '+86 23', language: 'Mandarin, Sichuanese',
      climate: 'Humid subtropical with hot humid summers (28-38°C) and mild foggy winters (5-10°C). Known as one of China\'s "furnace cities".',
      attractions: ['Hongya Cave', 'Ciqikou Old Town', 'Three Gorges Museum', 'Liberation Monument', 'Yangtze River Cable Car'],
      demographics: 'Largest municipality in the world by population, major inland port on Yangtze River. Known for hotpot cuisine and mountain city layout.'
    }
  },
  { slug: 'tianjin', city: 'Tianjin', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 39.14, lng: 117.18, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '14M', phoneCode: '+86 22', language: 'Mandarin',
      climate: 'Humid continental with hot humid summers (26-32°C) and cold dry winters (-5 to 3°C). Monsoon influence.',
      attractions: ['Tianjin Eye', 'Ancient Culture Street', 'Italian Style District', 'Porcelain House', 'Five Great Avenues'],
      demographics: 'Fourth-largest city in China, major port near Beijing. Known for European concession architecture and goubuli baozi dumplings.'
    }
  },
  { slug: 'wuhan', city: 'Wuhan', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.59, lng: 114.31, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '11M', phoneCode: '+86 27', language: 'Mandarin',
      climate: 'Humid subtropical with very hot humid summers (28-34°C) and cold winters (2-8°C). Known as one of China\'s "furnace cities".',
      attractions: ['Yellow Crane Tower', 'East Lake', 'Hubei Provincial Museum', 'Yangtze River Bridge', 'Han Show Theatre'],
      demographics: 'Capital of Hubei, largest city in central China. Major transport hub at confluence of Yangtze and Han rivers.'
    }
  },
  { slug: 'nanjing', city: 'Nanjing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 32.06, lng: 118.80, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '9.5M', phoneCode: '+86 25', language: 'Mandarin',
      climate: 'Humid subtropical with hot humid summers (28-35°C) and cold winters (0-8°C). Known as one of China\'s "furnace cities".',
      attractions: ['Sun Yat-sen Mausoleum', 'Ming Xiaoling Mausoleum', 'Confucius Temple', 'Nanjing City Wall', 'Purple Mountain'],
      demographics: 'Capital of Jiangsu province, former capital of China for multiple dynasties. Major cultural and educational center.'
    }
  },
  { slug: 'suzhou', city: 'Suzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 31.30, lng: 120.62, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '10.7M', phoneCode: '+86 512', language: 'Mandarin, Wu',
      climate: 'Humid subtropical with hot summers (28-34°C) and cool winters (2-8°C). Rainy season June-July.',
      attractions: ['Classical Gardens', 'Tiger Hill', 'Pingjiang Road', 'Suzhou Museum', 'Zhouzhuang Water Town'],
      demographics: '"Venice of the East" for its canals, UNESCO World Heritage classical gardens. Major tech hub and silk production center near Shanghai.'
    }
  },
  { slug: 'harbin', city: 'Harbin', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 45.80, lng: 126.53, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '10M', phoneCode: '+86 451', language: 'Mandarin',
      climate: 'Humid continental with very cold winters (-20 to -10°C) and warm summers (20-28°C). Known as "Ice City".',
      attractions: ['Harbin Ice Festival', 'Saint Sophia Cathedral', 'Sun Island', 'Central Street', 'Siberian Tiger Park'],
      demographics: 'Capital of Heilongjiang province, largest city in Northeast China. Russian influence visible in architecture.'
    }
  },
  { slug: 'qingdao', city: 'Qingdao', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 36.07, lng: 120.38, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '10M', phoneCode: '+86 532', language: 'Mandarin',
      climate: 'Humid subtropical with warm summers (24-28°C) and cold winters (-1 to 5°C). Sea moderates temperatures.',
      attractions: ['Zhanqiao Pier', 'Tsingtao Beer Museum', 'Badaguan Scenic Area', 'Mount Lao', 'May Fourth Square'],
      demographics: 'Major seaport in Shandong, known for Tsingtao Beer (founded by German settlers). Beautiful coastal city with European architecture.'
    }
  },
  { slug: 'dalian', city: 'Dalian', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 38.91, lng: 121.60, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '7.5M', phoneCode: '+86 411', language: 'Mandarin',
      climate: 'Humid continental with warm summers (22-28°C) and cold winters (-5 to 3°C). Sea moderates temperatures.',
      attractions: ['Xinghai Square', 'Tiger Beach Ocean Park', 'Zhongshan Square', 'Bangchuidao Scenic Area', 'Dalian Forest Zoo'],
      demographics: 'Major port city in Northeast China, known for beaches, seafood, and Japanese colonial architecture. Important IT outsourcing hub.'
    }
  },
  { slug: 'xiamen', city: 'Xiamen', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 24.48, lng: 118.09, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '4.3M', phoneCode: '+86 592', language: 'Mandarin, Hokkien',
      climate: 'Humid subtropical with hot humid summers (28-33°C) and mild winters (12-18°C). Typhoon season June-September.',
      attractions: ['Gulangyu Island', 'Nanputuo Temple', 'Zhongshan Road', 'Huandao Road', 'Xiamen University'],
      demographics: 'Coastal city in Fujian province, one of China\'s most livable cities. Historic port city, gateway to Taiwan with colonial architecture on Gulangyu.'
    }
  },
  { slug: 'zhengzhou', city: 'Zhengzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 34.75, lng: 113.63, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '10.3M', phoneCode: '+86 371', language: 'Mandarin',
      climate: 'Humid subtropical with hot humid summers (27-32°C) and cold dry winters (-1 to 5°C). Monsoon July-August.',
      attractions: ['Shaolin Temple', 'Henan Museum', 'Erqi Memorial Tower', 'Yellow River Scenic Area', 'Zhengzhou Confucius Temple'],
      demographics: 'Capital of Henan, one of China\'s ancient capitals. Railway hub and gateway to Shaolin Temple, birthplace of Kung Fu.'
    }
  },
  { slug: 'changsha', city: 'Changsha', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 28.23, lng: 112.94, tier: 3, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '10M', phoneCode: '+86 731', language: 'Mandarin, Xiang',
      climate: 'Humid subtropical with hot humid summers (28-35°C) and cool winters (3-10°C). Rainy in spring.',
      attractions: ['Orange Isle', 'Yuelu Academy', 'Hunan Provincial Museum', 'Tianxin Pavilion', 'Mount Yuelu'],
      demographics: 'Capital of Hunan Province, birthplace of Mao Zedong\'s revolutionary activities. Major hub for entertainment and spicy cuisine.'
    }
  },
  { slug: 'dongguan', city: 'Dongguan', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 23.02, lng: 113.75, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '10.5M', phoneCode: '+86 769', language: 'Mandarin, Cantonese',
      climate: 'Humid subtropical with hot summers (28-33°C) and mild winters (12-20°C). Typhoon season July-September.',
      attractions: ['Keyuan Garden', 'Dongguan Museum', 'Songshan Lake', 'Opium War Museum', 'Yinping Mountain'],
      demographics: 'Major manufacturing hub in Pearl River Delta, known as "World Factory" for electronics. One of China\'s wealthiest cities per capita.'
    }
  },
  { slug: 'foshan', city: 'Foshan', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 23.02, lng: 113.12, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '9.5M', phoneCode: '+86 757', language: 'Mandarin, Cantonese',
      climate: 'Humid subtropical with hot summers (28-34°C) and mild winters (10-18°C). Rainy April-September.',
      attractions: ['Foshan Ancestral Temple', 'Nanfeng Ancient Kiln', 'Qinghui Garden', 'Wong Fei-hung Memorial', 'Xiqiao Mountain'],
      demographics: 'Historic ceramics capital and birthplace of Wing Chun kung fu. Major manufacturing center for furniture, ceramics, and home appliances.'
    }
  },
  { slug: 'shenyang', city: 'Shenyang', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 41.80, lng: 123.43, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '9.1M', phoneCode: '+86 24', language: 'Mandarin',
      climate: 'Humid continental with hot summers (24-30°C) and cold winters (-15 to -5°C). Heavy snowfall in winter.',
      attractions: ['Shenyang Imperial Palace', 'Zhaoling Tomb', 'Fuling Tomb', '9.18 History Museum', 'Beiling Park'],
      demographics: 'Largest city in Northeast China, former Manchu capital. Major industrial base for automotive, machinery, and aerospace.'
    }
  },
  { slug: 'ningbo', city: 'Ningbo', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 29.87, lng: 121.55, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '9.4M', phoneCode: '+86 574', language: 'Mandarin, Wu',
      climate: 'Humid subtropical with hot summers (28-35°C) and cool winters (3-10°C). Typhoon risk in summer.',
      attractions: ['Tianyi Pavilion', 'Dongqian Lake', 'Tianfeng Pagoda', 'Old Bund', 'Putuo Mountain nearby'],
      demographics: 'Major port city with world\'s busiest cargo port. Historic trading hub with 7,000+ year history, known for business acumen.'
    }
  },
  { slug: 'fuzhou', city: 'Fuzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 26.07, lng: 119.30, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '8.3M', phoneCode: '+86 591', language: 'Mandarin, Min Dong',
      climate: 'Humid subtropical with hot summers (28-35°C) and mild winters (8-15°C). Typhoon season July-September.',
      attractions: ['Three Lanes and Seven Alleys', 'Gu Mountain', 'West Lake Park', 'Hualin Temple', 'Mawei Shipyard'],
      demographics: 'Capital of Fujian Province, historic port on Maritime Silk Road. Major center for lacquerware, jasmine tea, and overseas Chinese ancestry.'
    }
  },
  { slug: 'jinan', city: 'Jinan', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 36.65, lng: 116.98, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '9.2M', phoneCode: '+86 531', language: 'Mandarin, Ji-Lu',
      climate: 'Humid continental with hot summers (27-32°C) and cold winters (-3 to 5°C). Four distinct seasons.',
      attractions: ['Baotu Spring', 'Daming Lake', 'Thousand Buddha Mountain', 'Quancheng Square', 'Shandong Museum'],
      demographics: 'Capital of Shandong Province, known as "City of Springs" with 72 famous springs. Major cultural and educational center.'
    }
  },
  { slug: 'changchun', city: 'Changchun', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 43.88, lng: 125.32, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '9M', phoneCode: '+86 431', language: 'Mandarin',
      climate: 'Humid continental with warm summers (22-28°C) and very cold winters (-18 to -8°C). Long snowy winters.',
      attractions: ['Puppet Emperor Palace', 'Changchun World Sculpture Park', 'Jingyuetan National Forest', 'Changchun Film Studio', 'South Lake Park'],
      demographics: 'Capital of Jilin Province, China\'s automotive capital (home of FAW). Former capital of Japanese puppet state Manchukuo.'
    }
  },
  { slug: 'shijiazhuang', city: 'Shijiazhuang', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 38.04, lng: 114.48, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '11.2M', phoneCode: '+86 311', language: 'Mandarin, Ji-Lu',
      climate: 'Semi-arid continental with hot summers (26-32°C) and cold dry winters (-5 to 3°C). Dusty springs.',
      attractions: ['Zhaozhou Bridge', 'Xibaipo Revolutionary Site', 'Longxing Temple', 'Hebei Museum', 'Cangyan Mountain'],
      demographics: 'Capital of Hebei Province, major pharmaceutical manufacturing center. Young city that grew rapidly with railway development.'
    }
  },
  { slug: 'hefei', city: 'Hefei', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 31.82, lng: 117.23, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '9.4M', phoneCode: '+86 551', language: 'Mandarin, Jianghuai',
      climate: 'Humid subtropical with hot summers (28-35°C) and cool winters (0-8°C). Rainy in spring and summer.',
      attractions: ['Lord Bao Memorial', 'Xiaoyaojin Park', 'Anhui Provincial Museum', 'Swan Lake', 'Science Island'],
      demographics: 'Capital of Anhui Province, rising tech hub with major AI and quantum computing research. Home to USTC, top science university.'
    }
  },
  { slug: 'nanchang', city: 'Nanchang', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 28.68, lng: 115.89, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '6.5M', phoneCode: '+86 791', language: 'Mandarin, Gan',
      climate: 'Humid subtropical with hot summers (29-35°C) and cool winters (3-10°C). Very hot in July-August.',
      attractions: ['Tengwang Pavilion', 'August 1st Uprising Memorial', 'Poyang Lake', 'Shengjin Tower', 'Bayi Square'],
      demographics: 'Capital of Jiangxi Province, birthplace of People\'s Liberation Army. Historic city with 2,200 years of history.'
    }
  },
  { slug: 'kunming', city: 'Kunming', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 25.04, lng: 102.71, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '8.5M', phoneCode: '+86 871', language: 'Mandarin, Yunnan',
      climate: 'Subtropical highland with spring-like weather year-round (10-24°C). Mild summers and winters.',
      attractions: ['Stone Forest', 'Dianchi Lake', 'Green Lake Park', 'Western Hills', 'Yunnan Ethnic Village'],
      demographics: 'Capital of Yunnan Province, "City of Eternal Spring" due to perfect climate. Gateway to Southeast Asia with diverse ethnic cultures.'
    }
  },
  { slug: 'taiyuan', city: 'Taiyuan', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 37.87, lng: 112.55, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '5.3M', phoneCode: '+86 351', language: 'Mandarin, Jin',
      climate: 'Semi-arid continental with warm summers (22-28°C) and cold dry winters (-10 to 2°C). Low rainfall.',
      attractions: ['Jinci Temple', 'Shanxi Museum', 'Twin Pagoda Temple', 'Chongshan Temple', 'Yingze Park'],
      demographics: 'Capital of Shanxi Province, 2,500-year-old city. Major energy base with coal and heavy industry, historic banking center.'
    }
  },
  { slug: 'nanning', city: 'Nanning', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 22.82, lng: 108.32, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '8.8M', phoneCode: '+86 771', language: 'Mandarin, Cantonese, Zhuang',
      climate: 'Humid subtropical with hot summers (28-33°C) and mild winters (12-18°C). Green city year-round.',
      attractions: ['Qingxiu Mountain', 'Guangxi Ethnic Museum', 'Nanhu Lake', 'Detian Waterfall nearby', 'China-ASEAN Expo Center'],
      demographics: 'Capital of Guangxi, "Green City" with lush vegetation. Gateway to ASEAN, hosting annual China-ASEAN Expo.'
    }
  },
  { slug: 'guiyang', city: 'Guiyang', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 26.58, lng: 106.72, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '6M', phoneCode: '+86 851', language: 'Mandarin, Southwestern',
      climate: 'Subtropical highland with mild summers (22-28°C) and cool winters (3-10°C). Foggy and rainy.',
      attractions: ['Jiaxiu Pavilion', 'Qianling Park', 'Huaxi Park', 'Guizhou Provincial Museum', 'Tianhe Pool'],
      demographics: 'Capital of Guizhou Province, China\'s Big Data Valley. Emerging tech hub surrounded by karst landscapes and ethnic minority cultures.'
    }
  },
  { slug: 'wuxi', city: 'Wuxi', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 31.49, lng: 120.31, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '7.5M', phoneCode: '+86 510', language: 'Mandarin, Wu',
      climate: 'Humid subtropical with hot summers (28-35°C) and cool winters (2-8°C). Rainy in spring.',
      attractions: ['Yuantouzhu', 'Lingshan Giant Buddha', 'Nianhua Bay', 'Huishan Ancient Town', 'Taihu Lake'],
      demographics: 'Prosperous city on Taihu Lake, known for silk, Yixing clay teapots, and classical gardens. Major semiconductor and IoT industry hub.'
    }
  },
  { slug: 'wenzhou', city: 'Wenzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 28.00, lng: 120.67, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '9.6M', phoneCode: '+86 577', language: 'Mandarin, Wu, Wenzhounese',
      climate: 'Humid subtropical with hot summers (28-35°C) and mild winters (5-12°C). Typhoon risk July-September.',
      attractions: ['Yandang Mountain', 'Jiangxin Island', 'Nanxi River', 'Wuma Street', 'Dongtou Islands'],
      demographics: 'Famous for entrepreneurial spirit and global business networks. Wenzhou merchants known worldwide, major leather and eyewear manufacturing.'
    }
  },
  { slug: 'lanzhou', city: 'Lanzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 36.06, lng: 103.83, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '4.4M', phoneCode: '+86 931', language: 'Mandarin',
      climate: 'Semi-arid with warm summers (22-30°C) and cold dry winters (-8 to 3°C). Low humidity year-round.',
      attractions: ['White Pagoda Hill', 'Yellow River Iron Bridge', 'Gansu Provincial Museum', 'Five Spring Mountain', 'Bingling Temple nearby'],
      demographics: 'Capital of Gansu Province, historic Silk Road city on Yellow River. Known for Lanzhou beef noodles and petrochemical industry.'
    }
  },
  { slug: 'urumqi', city: 'Ürümqi', timezone: 'Asia/Urumqi', country: 'China', countryCode: 'CN', lat: 43.83, lng: 87.58, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '4.1M', phoneCode: '+86 991', language: 'Mandarin, Uyghur',
      climate: 'Cold semi-arid with hot summers (25-32°C) and very cold winters (-15 to -5°C). Large temperature variations.',
      attractions: ['Xinjiang International Grand Bazaar', 'Heavenly Lake', 'Red Hill', 'Xinjiang Regional Museum', 'Nanshan Pastures'],
      demographics: 'Capital of Xinjiang, most inland major city in the world. Silk Road hub with Uyghur, Han, Kazakh, and Hui cultures.'
    }
  },
  { slug: 'shantou', city: 'Shantou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 23.35, lng: 116.68, tier: 2, continent: 'asia',
    info: {
      currency: 'Chinese Yuan', currencySymbol: '¥', population: '5.6M', phoneCode: '+86 754', language: 'Mandarin, Teochew',
      climate: 'Humid subtropical with hot summers (28-33°C) and mild winters (12-18°C). Typhoon risk in summer.',
      attractions: ['Chen Ci Hong Mansion', 'Nan\'ao Island', 'Queshi Scenic Area', 'Shantou Old Town', 'Zhongshan Park'],
      demographics: 'Special Economic Zone and ancestral home of Teochew diaspora. Major port city known for Chaoshan cuisine and toy manufacturing.'
    }
  },

  // PAKISTAN - Major Cities (4 new)
  { slug: 'lahore', city: 'Lahore', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 31.55, lng: 74.34, tier: 2, continent: 'asia',
    info: {
      currency: 'Pakistani Rupee', currencySymbol: 'Rs', population: '13M', phoneCode: '+92 42', language: 'Punjabi, Urdu, English',
      climate: 'Semi-arid with extreme hot summers (40-48°C) and cool foggy winters (5-20°C). Monsoon July-September.',
      attractions: ['Badshahi Mosque', 'Lahore Fort', 'Shalimar Gardens', 'Minar-e-Pakistan', 'Lahore Museum'],
      demographics: 'Second-largest city in Pakistan, cultural capital of Punjab. Known as "Heart of Pakistan" for arts, cuisine, and Mughal heritage.'
    }
  },
  { slug: 'faisalabad', city: 'Faisalabad', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 31.42, lng: 73.09, tier: 3, continent: 'asia',
    info: {
      currency: 'Pakistani Rupee', currencySymbol: 'Rs', population: '3.6M', phoneCode: '+92 41', language: 'Punjabi, Urdu',
      climate: 'Semi-arid with extreme hot summers (40-48°C) and mild winters (5-20°C). Monsoon July-September.',
      attractions: ['Clock Tower', 'Lyallpur Museum', 'Jinnah Garden', 'Chenab Club', 'Gatwala Wildlife Park'],
      demographics: 'Third-largest city in Pakistan, "Manchester of Pakistan" for textile industry. Major industrial and agricultural hub.'
    }
  },
  { slug: 'rawalpindi', city: 'Rawalpindi', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 33.60, lng: 73.04, tier: 3, continent: 'asia',
    info: {
      currency: 'Pakistani Rupee', currencySymbol: 'Rs', population: '2.2M', phoneCode: '+92 51', language: 'Punjabi, Urdu',
      climate: 'Humid subtropical with hot summers (35-42°C) and cool winters (3-18°C). Monsoon July-September.',
      attractions: ['Ayub National Park', 'Raja Bazaar', 'Rawalpindi Cricket Stadium', 'Army Museum', 'Liaquat Bagh'],
      demographics: 'Fourth-largest city in Pakistan, twin city of Islamabad. Major military headquarters and historic garrison town.'
    }
  },
  { slug: 'multan', city: 'Multan', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 30.20, lng: 71.45, tier: 3, continent: 'asia',
    info: {
      currency: 'Pakistani Rupee', currencySymbol: 'Rs', population: '2.0M', phoneCode: '+92 61', language: 'Punjabi, Urdu',
      climate: 'Hot desert with extremely hot summers (40-50°C) and mild winters (8-22°C). Very low rainfall.',
      attractions: ['Shrine of Bahauddin Zakariya', 'Multan Fort', 'Shah Rukn-e-Alam Tomb', 'Hussain Agahi Bazaar', 'Clock Tower'],
      demographics: 'Seventh-largest city in Pakistan, "City of Saints" for Sufi shrines. One of the oldest cities in South Asia (5,000+ years).'
    }
  },
  { slug: 'peshawar', city: 'Peshawar', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 34.01, lng: 71.58, tier: 3, continent: 'asia',
    info: {
      currency: 'Pakistani Rupee', currencySymbol: 'Rs', population: '2.0M', phoneCode: '+92 91', language: 'Pashto, Urdu',
      climate: 'Semi-arid with very hot summers (35-42°C) and cool winters (5-18°C). Monsoon July-September.',
      attractions: ['Peshawar Museum', 'Bala Hisar Fort', 'Qissa Khwani Bazaar', 'Mahabat Khan Mosque', 'Cunningham Clock Tower'],
      demographics: 'Capital of Khyber Pakhtunkhwa, one of oldest cities in South Asia. Historic gateway to Khyber Pass and Central Asia.'
    }
  },
  { slug: 'islamabad', city: 'Islamabad', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 33.69, lng: 73.06, tier: 2, continent: 'asia',
    info: {
      currency: 'Pakistani Rupee', currencySymbol: 'Rs', population: '1.1M', phoneCode: '+92 51', language: 'Urdu, English',
      climate: 'Humid subtropical with hot summers (30-40°C) and cool winters (3-18°C). Monsoon July-September.',
      attractions: ['Faisal Mosque', 'Pakistan Monument', 'Daman-e-Koh', 'Margalla Hills', 'Lok Virsa Museum'],
      demographics: 'Capital of Pakistan since 1960s, planned city designed by Greek architect. One of the most beautiful capitals in South Asia.'
    }
  },

  // BANGLADESH - Major Cities (3 new)
  { slug: 'chittagong', city: 'Chittagong', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 22.36, lng: 91.78, tier: 2, continent: 'asia',
    info: {
      currency: 'Bangladeshi Taka', currencySymbol: '৳', population: '3.0M', phoneCode: '+880 31', language: 'Bengali, Chittagonian',
      climate: 'Tropical monsoon with hot wet summers (28-35°C) and mild dry winters (15-25°C). Heavy monsoon rains June-September.',
      attractions: ['Patenga Beach', 'Foy\'s Lake', 'Ethnological Museum', 'Shrine of Bayazid Bostami', 'Chittagong War Cemetery'],
      demographics: 'Second-largest city in Bangladesh, major seaport handling 90% of country\'s trade. Gateway to Cox\'s Bazar and Hill Tracts.'
    }
  },
  { slug: 'khulna', city: 'Khulna', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 22.82, lng: 89.55, tier: 3, continent: 'asia',
    info: {
      currency: 'Bangladeshi Taka', currencySymbol: '৳', population: '1.0M', phoneCode: '+880 41', language: 'Bengali',
      climate: 'Tropical with hot wet monsoons (June-October) and mild dry winters. Temperatures 20-35°C year-round.',
      attractions: ['Sundarbans Mangrove Forest', 'Khan Jahan Ali Shrine', 'Sixty Dome Mosque', 'Shipyard', 'Rupsha River'],
      demographics: 'Third-largest city in Bangladesh, gateway to Sundarbans (world\'s largest mangrove forest). Major industrial and port city.'
    }
  },
  { slug: 'rajshahi', city: 'Rajshahi', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 24.37, lng: 88.60, tier: 3, continent: 'asia',
    info: {
      currency: 'Bangladeshi Taka', currencySymbol: '৳', population: '900K', phoneCode: '+880 721', language: 'Bengali',
      climate: 'Tropical wet and dry with hot summers (35-42°C) and mild winters (10-25°C). Monsoon June-September.',
      attractions: ['Varendra Research Museum', 'Padma River', 'Puthia Temple Complex', 'Rajshahi University', 'Shahid Zia Shishu Park'],
      demographics: 'Fourth-largest city in Bangladesh on the Padma River. Known as "Silk City" for silk production, major educational center.'
    }
  },
  { slug: 'sylhet', city: 'Sylhet', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 24.90, lng: 91.87, tier: 3, continent: 'asia',
    info: {
      currency: 'Bangladeshi Taka', currencySymbol: '৳', population: '700K', phoneCode: '+880 821', language: 'Bengali, Sylheti',
      climate: 'Humid subtropical with hot wet summers (28-35°C) and mild dry winters (12-25°C). Very high rainfall.',
      attractions: ['Shrine of Hazrat Shah Jalal', 'Ratargul Swamp Forest', 'Jaflong', 'Ali Amjad\'s Clock', 'Tea Gardens'],
      demographics: 'Spiritual capital of Bangladesh, gateway to tea estates and natural beauty. Strong diaspora connections to UK.'
    }
  },

  // NIGERIA - Major Cities (5 new)
  { slug: 'kano', city: 'Kano', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 12.00, lng: 8.52, tier: 3, continent: 'africa',
    info: {
      currency: 'Nigerian Naira', currencySymbol: '₦', population: '4.0M', phoneCode: '+234 64', language: 'Hausa, English',
      climate: 'Semi-arid with hot season (March-May, 35-42°C), rainy season (June-September), and cool harmattan (November-February).',
      attractions: ['Kano City Walls', 'Gidan Makama Museum', 'Kurmi Market', 'Emir\'s Palace', 'Kano Central Mosque'],
      demographics: 'Second-largest city in Nigeria, historic center of trans-Saharan trade. Largest Hausa city and ancient commercial hub.'
    }
  },
  { slug: 'ibadan', city: 'Ibadan', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 7.38, lng: 3.90, tier: 3, continent: 'africa',
    info: {
      currency: 'Nigerian Naira', currencySymbol: '₦', population: '3.6M', phoneCode: '+234 2', language: 'English, Yoruba',
      climate: 'Tropical savanna with rainy season (March-October) and dry season. Temperatures 22-33°C year-round.',
      attractions: ['University of Ibadan', 'Cocoa House', 'Bower\'s Tower', 'Agodi Gardens', 'Trans Amusement Park'],
      demographics: 'Third-largest city in Nigeria, largest by area in West Africa. Historic Yoruba city and major educational center.'
    }
  },
  { slug: 'abuja', city: 'Abuja', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 9.07, lng: 7.40, tier: 2, continent: 'africa',
    info: {
      currency: 'Nigerian Naira', currencySymbol: '₦', population: '3.6M', phoneCode: '+234 9', language: 'English',
      climate: 'Tropical savanna with wet season (April-October) and dry season. Temperatures 25-35°C year-round.',
      attractions: ['Aso Rock', 'Nigerian National Mosque', 'Millennium Park', 'Zuma Rock', 'National Church of Nigeria'],
      demographics: 'Purpose-built capital city since 1991, political and administrative center of Nigeria.'
    }
  },
  { slug: 'port-harcourt', city: 'Port Harcourt', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 4.82, lng: 7.03, tier: 3, continent: 'africa',
    info: {
      currency: 'Nigerian Naira', currencySymbol: '₦', population: '3.0M', phoneCode: '+234 84', language: 'English, Igbo, Ijaw',
      climate: 'Tropical monsoon with heavy rainfall year-round (25-32°C). Wettest June-September.',
      attractions: ['Port Harcourt Zoo', 'Isaac Boro Park', 'Port Harcourt Tourist Beach', 'Bonny Island', 'Liberation Stadium'],
      demographics: 'Capital of Rivers State, center of Nigeria\'s oil industry. Major industrial and commercial hub in the Niger Delta.'
    }
  },
  { slug: 'benin-city', city: 'Benin City', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 6.34, lng: 5.63, tier: 3, continent: 'africa',
    info: {
      currency: 'Nigerian Naira', currencySymbol: '₦', population: '1.8M', phoneCode: '+234 52', language: 'English, Edo',
      climate: 'Tropical with heavy rainfall (April-October) and dry season. Temperatures 23-33°C year-round.',
      attractions: ['Benin City National Museum', 'Oba Palace', 'Igun Street Bronze Casters', 'Emotan Statue', 'Holy Aruosa Cathedral'],
      demographics: 'Capital of Edo State, historic center of the ancient Benin Empire. Known for bronze casting and rich cultural heritage.'
    }
  },

  // INDONESIA - Additional Cities (4 new)
  { slug: 'semarang', city: 'Semarang', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.97, lng: 110.42, tier: 3, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '1.8M', phoneCode: '+62 24', language: 'Indonesian, Javanese',
      climate: 'Tropical monsoon with wet season (November-April) and dry season. Hot and humid year-round (27-33°C).',
      attractions: ['Sam Poo Kong Temple', 'Lawang Sewu', 'Old Town (Kota Lama)', 'Simpang Lima', 'Great Mosque of Central Java'],
      demographics: 'Capital of Central Java, fifth-largest city in Indonesia. Major port with Dutch colonial heritage and Chinese influence.'
    }
  },
  { slug: 'makassar', city: 'Makassar', timezone: 'Asia/Makassar', country: 'Indonesia', countryCode: 'ID', lat: -5.14, lng: 119.42, tier: 3, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '1.5M', phoneCode: '+62 411', language: 'Indonesian, Makassarese',
      climate: 'Tropical monsoon with wet season (November-April) and dry season. Warm year-round (26-32°C).',
      attractions: ['Fort Rotterdam', 'Losari Beach', 'Trans Studio Makassar', 'Bantimurung Waterfalls', 'Paotere Harbor'],
      demographics: 'Largest city in eastern Indonesia, capital of South Sulawesi. Major trade hub and gateway to Toraja highlands.'
    }
  },
  { slug: 'palembang', city: 'Palembang', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -2.99, lng: 104.76, tier: 3, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '1.7M', phoneCode: '+62 711', language: 'Indonesian, Palembang Malay',
      climate: 'Tropical rainforest with warm humid weather year-round (26-32°C). Rainfall throughout the year.',
      attractions: ['Ampera Bridge', 'Sultan Mahmud Badaruddin II Museum', 'Great Mosque of Palembang', 'Kemaro Island', 'Musi River'],
      demographics: 'Capital of South Sumatra, one of oldest cities in Southeast Asia. Former center of Srivijaya Empire, known for pempek fish cake.'
    }
  },
  { slug: 'yogyakarta', city: 'Yogyakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -7.80, lng: 110.36, tier: 3, continent: 'asia',
    info: {
      currency: 'Indonesian Rupiah', currencySymbol: 'Rp', population: '430K', phoneCode: '+62 274', language: 'Indonesian, Javanese',
      climate: 'Tropical monsoon with wet season (October-April) and dry season. Warm year-round (26-32°C).',
      attractions: ['Borobudur Temple', 'Prambanan Temple', 'Kraton (Sultan\'s Palace)', 'Malioboro Street', 'Taman Sari Water Castle'],
      demographics: 'Cultural heart of Java, Indonesia\'s only royal city with active sultanate. Gateway to UNESCO World Heritage temples.'
    }
  },

  // PHILIPPINES - Major Cities (3 new)
  { slug: 'cebu', city: 'Cebu City', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 10.32, lng: 123.89, tier: 2, continent: 'asia',
    info: {
      currency: 'Philippine Peso', currencySymbol: '₱', population: '1.0M', phoneCode: '+63 32', language: 'Cebuano, Filipino, English',
      climate: 'Tropical with warm temperatures year-round (25-33°C). Dry season January-May, wet season June-December.',
      attractions: ['Magellan\'s Cross', 'Basilica del Santo Niño', 'Fort San Pedro', 'Taoist Temple', 'Tops Lookout'],
      demographics: 'Oldest city in Philippines, Queen City of the South. Major trading port, BPO hub, and gateway to Visayas beaches.'
    }
  },
  { slug: 'davao', city: 'Davao', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 7.19, lng: 125.46, tier: 2, continent: 'asia',
    info: {
      currency: 'Philippine Peso', currencySymbol: '₱', population: '1.8M', phoneCode: '+63 82', language: 'Cebuano, Filipino, English',
      climate: 'Tropical rainforest with consistent temperatures (24-33°C). Outside typhoon belt, rainfall year-round.',
      attractions: ['Philippine Eagle Center', 'Mount Apo', 'Eden Nature Park', 'Crocodile Park', 'Samal Island'],
      demographics: 'Largest city in Mindanao, third-largest in Philippines. Known for durian fruit, safety, and Mount Apo (highest peak).'
    }
  },
  { slug: 'quezon-city', city: 'Quezon City', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 14.68, lng: 121.04, tier: 2, continent: 'asia',
    info: {
      currency: 'Philippine Peso', currencySymbol: '₱', population: '3.0M', phoneCode: '+63 2', language: 'Filipino, English',
      climate: 'Tropical with dry season (December-May) and wet season. Hot year-round (25-35°C). Typhoon risk.',
      attractions: ['Quezon Memorial Circle', 'La Mesa Eco Park', 'Art in Island', 'Eastwood City', 'UP Diliman Campus'],
      demographics: 'Most populous city in the Philippines, former capital (1948-1976). Part of Metro Manila, home to major universities and government offices.'
    }
  },

  // VIETNAM - Additional Cities (3 new)
  { slug: 'da-nang', city: 'Da Nang', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 16.05, lng: 108.22, tier: 2, continent: 'asia',
    info: {
      currency: 'Vietnamese Dong', currencySymbol: '₫', population: '1.2M', phoneCode: '+84 236', language: 'Vietnamese',
      climate: 'Tropical monsoon with dry season (January-August) and wet season. Temperatures 22-34°C year-round.',
      attractions: ['Golden Bridge', 'Marble Mountains', 'My Khe Beach', 'Dragon Bridge', 'Ba Na Hills'],
      demographics: 'Third-largest city in Vietnam, major port and resort destination. Gateway to Hoi An and UNESCO heritage sites.'
    }
  },
  { slug: 'can-tho', city: 'Can Tho', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 10.03, lng: 105.78, tier: 3, continent: 'asia',
    info: {
      currency: 'Vietnamese Dong', currencySymbol: '₫', population: '1.2M', phoneCode: '+84 292', language: 'Vietnamese',
      climate: 'Tropical monsoon with wet season (May-November) and dry season. Temperatures 25-35°C year-round.',
      attractions: ['Cai Rang Floating Market', 'Ninh Kieu Wharf', 'Binh Thuy Ancient House', 'Can Tho Bridge', 'Ong Pagoda'],
      demographics: 'Largest city in Mekong Delta, rice bowl of Vietnam. Major trading hub for agricultural products and river commerce.'
    }
  },
  { slug: 'hai-phong', city: 'Hai Phong', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 20.86, lng: 106.68, tier: 3, continent: 'asia',
    info: {
      currency: 'Vietnamese Dong', currencySymbol: '₫', population: '2.0M', phoneCode: '+84 225', language: 'Vietnamese',
      climate: 'Humid subtropical with hot wet summers (28-33°C) and cool dry winters (15-20°C). Typhoon risk July-November.',
      attractions: ['Cat Ba Island', 'Do Son Beach', 'Du Hang Pagoda', 'Hai Phong Opera House', 'Elephant Mountain'],
      demographics: 'Third-largest city in Vietnam, major northern port. Gateway to Ha Long Bay and Cat Ba Island.'
    }
  },

  // EGYPT - Additional Cities (3 new)
  { slug: 'alexandria', city: 'Alexandria', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 31.20, lng: 29.92, tier: 2, continent: 'africa',
    info: {
      currency: 'Egyptian Pound', currencySymbol: 'E£', population: '5.2M', phoneCode: '+20 3', language: 'Arabic',
      climate: 'Mediterranean climate with mild wet winters (10-18°C) and hot dry summers (25-32°C).',
      attractions: ['Bibliotheca Alexandrina', 'Qaitbay Citadel', 'Montaza Palace', 'Catacombs of Kom el Shoqafa', 'Corniche'],
      demographics: 'Second-largest city in Egypt, major Mediterranean port founded by Alexander the Great in 331 BC.'
    }
  },
  { slug: 'giza', city: 'Giza', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 30.01, lng: 31.21, tier: 2, continent: 'africa',
    info: {
      currency: 'Egyptian Pound', currencySymbol: 'E£', population: '4.2M', phoneCode: '+20 2', language: 'Arabic',
      climate: 'Hot desert with very hot summers (28-38°C) and mild winters (10-20°C). Almost no rainfall.',
      attractions: ['Great Pyramids of Giza', 'Great Sphinx', 'Solar Boat Museum', 'Giza Plateau', 'Sound and Light Show'],
      demographics: 'Part of Greater Cairo, home to the only surviving Ancient Wonder. Third-largest city in Egypt and major tourist destination.'
    }
  },
  { slug: 'sharm-el-sheikh', city: 'Sharm el-Sheikh', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 27.92, lng: 34.33, tier: 3, continent: 'africa',
    info: {
      currency: 'Egyptian Pound', currencySymbol: 'E£', population: '75K', phoneCode: '+20 69', language: 'Arabic, English',
      climate: 'Hot desert with very hot summers (35-42°C) and warm winters (18-24°C). Almost no rainfall.',
      attractions: ['Ras Mohammed National Park', 'Naama Bay', 'Tiran Island', 'Old Market', 'Shark\'s Bay'],
      demographics: 'Premier Red Sea resort city on Sinai Peninsula. World-class diving destination and international conference venue.'
    }
  },
  { slug: 'luxor', city: 'Luxor', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 25.69, lng: 32.64, tier: 3, continent: 'africa',
    info: {
      currency: 'Egyptian Pound', currencySymbol: 'E£', population: '510K', phoneCode: '+20 95', language: 'Arabic',
      climate: 'Hot desert with very hot summers (35-42°C) and mild winters (15-25°C). Almost no rainfall year-round.',
      attractions: ['Karnak Temple', 'Valley of the Kings', 'Luxor Temple', 'Hatshepsut Temple', 'Colossi of Memnon'],
      demographics: 'Ancient city of Thebes, "World\'s Greatest Open-Air Museum". Contains one-third of world\'s ancient monuments.'
    }
  },

  // ETHIOPIA - Additional Cities (2 new)
  { slug: 'dire-dawa', city: 'Dire Dawa', timezone: 'Africa/Addis_Ababa', country: 'Ethiopia', countryCode: 'ET', lat: 9.60, lng: 41.85, tier: 3, continent: 'africa',
    info: {
      currency: 'Ethiopian Birr', currencySymbol: 'Br', population: '500K', phoneCode: '+251 25', language: 'Amharic, Oromo, Somali',
      climate: 'Semi-arid with hot temperatures year-round (22-34°C). Light rainfall in two seasons.',
      attractions: ['Kefira Market', 'Kezira Quarter', 'Dire Dawa Railway Station', 'Lega Hare Park', 'Chat Qolla'],
      demographics: 'Second-largest city in Ethiopia, founded in 1902 as railway terminus. Important trade hub near Djibouti border.'
    }
  },
  { slug: 'mekelle', city: 'Mekelle', timezone: 'Africa/Addis_Ababa', country: 'Ethiopia', countryCode: 'ET', lat: 13.50, lng: 39.47, tier: 3, continent: 'africa',
    info: {
      currency: 'Ethiopian Birr', currencySymbol: 'Br', population: '500K', phoneCode: '+251 34', language: 'Tigrinya, Amharic',
      climate: 'Semi-arid highland with mild temperatures year-round (12-27°C). Rainy season June-September.',
      attractions: ['Martyrs Memorial', 'Mekelle Palace', 'Yohannes IV Museum', 'Abraha Atsbeha Church', 'Gheralta Mountains'],
      demographics: 'Capital of Tigray Region in northern Ethiopia. Gateway to ancient rock-hewn churches and historic sites of Axum.'
    }
  },

  // KENYA - Additional Cities (2 new)
  { slug: 'mombasa', city: 'Mombasa', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE', lat: -4.05, lng: 39.67, tier: 2, continent: 'africa',
    info: {
      currency: 'Kenyan Shilling', currencySymbol: 'KSh', population: '1.4M', phoneCode: '+254 41', language: 'Swahili, English',
      climate: 'Tropical with hot humid weather year-round (24-32°C). Long rains April-June, short rains October-December.',
      attractions: ['Fort Jesus', 'Old Town', 'Diani Beach', 'Haller Park', 'Mombasa Marine National Park'],
      demographics: 'Second-largest city in Kenya, major East African port. UNESCO World Heritage Fort Jesus reflects Swahili coastal culture.'
    }
  },
  { slug: 'kisumu', city: 'Kisumu', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE', lat: -0.10, lng: 34.75, tier: 3, continent: 'africa',
    info: {
      currency: 'Kenyan Shilling', currencySymbol: 'KSh', population: '610K', phoneCode: '+254 57', language: 'English, Swahili, Luo',
      climate: 'Tropical with warm temperatures year-round (20-30°C). Two rainy seasons (March-May, October-December).',
      attractions: ['Kisumu Impala Sanctuary', 'Kit Mikayi', 'Hippo Point', 'Dunga Beach', 'Kisumu Museum'],
      demographics: 'Third-largest city in Kenya, on shores of Lake Victoria. Major port and commercial center for western Kenya.'
    }
  },

  // MOROCCO - Additional Cities (2 new)
  { slug: 'fes', city: 'Fes', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 34.03, lng: -5.00, tier: 3, continent: 'africa',
    info: {
      currency: 'Moroccan Dirham', currencySymbol: 'MAD', population: '1.2M', phoneCode: '+212 5', language: 'Arabic, French, Berber',
      climate: 'Mediterranean with hot dry summers (30-38°C) and mild wet winters (5-15°C).',
      attractions: ['Fes el Bali Medina', 'Al-Qarawiyyin University', 'Chouara Tannery', 'Bou Inania Madrasa', 'Dar Batha Museum'],
      demographics: 'Third-largest city in Morocco, oldest imperial city. Home to world\'s oldest university (859 AD) and largest car-free urban area.'
    }
  },

  // GHANA - Additional Cities (2 new)
  { slug: 'kumasi', city: 'Kumasi', timezone: 'Africa/Accra', country: 'Ghana', countryCode: 'GH', lat: 6.69, lng: -1.62, tier: 3, continent: 'africa',
    info: {
      currency: 'Ghanaian Cedi', currencySymbol: 'GH₵', population: '3.4M', phoneCode: '+233 32', language: 'English, Twi',
      climate: 'Tropical with two rainy seasons. Warm and humid year-round (21-32°C).',
      attractions: ['Kejetia Market', 'Manhyia Palace', 'Kumasi Fort', 'National Cultural Centre', 'Lake Bosomtwe'],
      demographics: 'Second-largest city in Ghana, capital of the Ashanti Kingdom. Known as "Garden City" and center of Ashanti culture.'
    }
  },
  { slug: 'tamale', city: 'Tamale', timezone: 'Africa/Accra', country: 'Ghana', countryCode: 'GH', lat: 9.40, lng: -0.84, tier: 3, continent: 'africa',
    info: {
      currency: 'Ghanaian Cedi', currencySymbol: 'GH₵', population: '400K', phoneCode: '+233 37', language: 'English, Dagbani',
      climate: 'Tropical savanna with hot dry season (35-42°C) and wet season (May-October). Harmattan winds December-February.',
      attractions: ['Mole National Park', 'Larabanga Mosque', 'Tamale Central Market', 'Cultural Centre', 'Bolgatanga Crafts'],
      demographics: 'Largest city in northern Ghana, gateway to Mole National Park. Fast-growing commercial center with predominantly Muslim population.'
    }
  },

  // TANZANIA - Additional Cities (2 new)
  { slug: 'zanzibar', city: 'Zanzibar City', timezone: 'Africa/Dar_es_Salaam', country: 'Tanzania', countryCode: 'TZ', lat: -6.17, lng: 39.19, tier: 3, continent: 'africa',
    info: {
      currency: 'Tanzanian Shilling', currencySymbol: 'TSh', population: '500K', phoneCode: '+255 24', language: 'Swahili, English, Arabic',
      climate: 'Tropical with warm temperatures year-round (25-32°C). Long rains March-May, short rains November-December.',
      attractions: ['Stone Town', 'House of Wonders', 'Old Fort', 'Freddie Mercury House', 'Spice Plantations'],
      demographics: 'Capital of Zanzibar, UNESCO World Heritage Stone Town. Historic spice trade center with Arab, Indian, and African influences.'
    }
  },

  // JAPAN - Additional Cities (3 new)

  // SOUTH KOREA - Additional Cities (2 new)
  { slug: 'daejeon', city: 'Daejeon', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 36.35, lng: 127.38, tier: 3, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '1.5M', phoneCode: '+82 42', language: 'Korean',
      climate: 'Humid continental with hot humid summers (24-31°C) and cold dry winters (-3 to 5°C).',
      attractions: ['Expo Science Park', 'Hanbat Arboretum', 'National Science Museum', 'Yuseong Hot Springs', 'Gyejoksan Mountain'],
      demographics: 'Fifth-largest city in South Korea, known as "Silicon Valley of Korea" for research institutes and tech hub. Home to KAIST.'
    }
  },
  { slug: 'gwangju', city: 'Gwangju', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.16, lng: 126.85, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '1.5M', phoneCode: '+82 62', language: 'Korean',
      climate: 'Humid subtropical with hot humid summers (25-31°C) and cold dry winters (-2 to 5°C).',
      attractions: ['May 18th National Cemetery', 'Mudeungsan National Park', 'Gwangju Biennale', 'Art Street', 'Yangnim-dong'],
      demographics: 'Sixth-largest city, "City of Art" and democracy. Site of 1980 Gwangju Uprising, major cultural and art hub.'
    }
  },
  { slug: 'ulsan', city: 'Ulsan', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.54, lng: 129.31, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '1.1M', phoneCode: '+82 52', language: 'Korean',
      climate: 'Humid subtropical with hot humid summers (25-30°C) and cold winters (-1 to 6°C). Coastal moderation.',
      attractions: ['Daewangam Park', 'Ulsan Grand Park', 'Ganjeolgot Cape', 'Petroglyphs of Bangudae', 'Taehwagang National Garden'],
      demographics: 'Industrial powerhouse, home to Hyundai headquarters. Highest GDP per capita in Korea, major shipbuilding and automotive.'
    }
  },
  { slug: 'suwon', city: 'Suwon', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.26, lng: 127.03, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '1.2M', phoneCode: '+82 31', language: 'Korean',
      climate: 'Humid continental with hot humid summers (24-30°C) and cold dry winters (-5 to 3°C).',
      attractions: ['Hwaseong Fortress (UNESCO)', 'Korean Folk Village', 'Gwanggyo Lake Park', 'Suwon Galbi Street', 'Haenggung Palace'],
      demographics: 'Capital of Gyeonggi Province, Samsung Electronics headquarters. UNESCO fortress, famous for Korean BBQ short ribs.'
    }
  },
  { slug: 'changwon', city: 'Changwon', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.23, lng: 128.68, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '1.05M', phoneCode: '+82 55', language: 'Korean',
      climate: 'Humid subtropical with hot humid summers (25-31°C) and mild winters (0-8°C). Southern coast.',
      attractions: ['Jinhae Cherry Blossoms', 'Junam Reservoir', 'Changwon Marine Park', 'Masan Fish Market', 'House of Changwon'],
      demographics: 'Merged city (Changwon+Masan+Jinhae), major industrial center. Famous for cherry blossom festival, machinery manufacturing.'
    }
  },
  { slug: 'seongnam', city: 'Seongnam', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.44, lng: 127.14, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '940K', phoneCode: '+82 31', language: 'Korean',
      climate: 'Humid continental with hot summers (24-30°C) and cold winters (-6 to 3°C). Seoul metropolitan.',
      attractions: ['Pangyo Techno Valley', 'Bundang Central Park', 'Namhansanseong (UNESCO)', 'Seongnam Arts Center', 'Tancheon Stream'],
      demographics: 'Seoul satellite city, Korea\'s startup capital (Pangyo). Home to Naver, Kakao, and major game companies.'
    }
  },
  { slug: 'goyang', city: 'Goyang', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.66, lng: 126.83, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '1.1M', phoneCode: '+82 31', language: 'Korean',
      climate: 'Humid continental with hot summers (24-30°C) and cold winters (-7 to 2°C). Han River influence.',
      attractions: ['KINTEX', 'Ilsan Lake Park', 'Haengjusanseong Fortress', 'Aqua Planet', 'Onemount'],
      demographics: 'Northwest Seoul satellite, major convention center (KINTEX). Planned city with large parks, film studio complex.'
    }
  },
  { slug: 'yongin', city: 'Yongin', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.24, lng: 127.18, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '1.1M', phoneCode: '+82 31', language: 'Korean',
      climate: 'Humid continental with hot summers (24-30°C) and cold winters (-6 to 3°C). Hilly terrain.',
      attractions: ['Everland', 'Korean Folk Village', 'Samsung Innovation Museum', 'Hwadam Forest', 'Daejanggeum Park'],
      demographics: 'Theme park city, home to Everland (Korea\'s largest). Samsung training facilities, rapid growth area south of Seoul.'
    }
  },
  { slug: 'cheongju', city: 'Cheongju', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 36.64, lng: 127.49, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '850K', phoneCode: '+82 43', language: 'Korean',
      climate: 'Humid continental with hot summers (24-30°C) and cold winters (-5 to 3°C). Central Korea.',
      attractions: ['Suamgol Mural Village', 'Sangdangsanseong Fortress', 'Cheongju Early Printing Museum', 'Cheongnamdae', 'Daecheong Lake'],
      demographics: 'Capital of North Chungcheong, birthplace of world\'s oldest movable metal type printing (Jikji). Growing tech sector.'
    }
  },
  { slug: 'jeonju', city: 'Jeonju', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.82, lng: 127.15, tier: 2, continent: 'asia',
    info: {
      currency: 'South Korean Won', currencySymbol: '₩', population: '660K', phoneCode: '+82 63', language: 'Korean',
      climate: 'Humid subtropical with hot summers (25-31°C) and cold winters (-3 to 5°C). Basin location.',
      attractions: ['Jeonju Hanok Village', 'Gyeonggijeon Shrine', 'Omokdae Pavilion', 'Jeonju Bibimbap', 'Nambu Market'],
      demographics: 'UNESCO Creative City of Gastronomy, birthplace of bibimbap. 800+ traditional hanok houses, Korean culture hub.'
    }
  },

  // TAIWAN - Additional Cities (2 new)
  { slug: 'kaohsiung', city: 'Kaohsiung', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW', lat: 22.62, lng: 120.31, tier: 2, continent: 'asia',
    info: {
      currency: 'New Taiwan Dollar', currencySymbol: 'NT$', population: '2.7M', phoneCode: '+886 7', language: 'Mandarin, Taiwanese',
      climate: 'Tropical monsoon with hot humid summers (28-33°C) and mild winters (18-24°C). Typhoon season July-October.',
      attractions: ['Lotus Pond', 'Pier-2 Art Center', 'Fo Guang Shan Buddha Museum', 'Love River', 'Liuhe Night Market'],
      demographics: 'Second-largest city in Taiwan, major port and industrial center. Known for harbor, temples, and street food.'
    }
  },
  { slug: 'taichung', city: 'Taichung', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW', lat: 24.15, lng: 120.67, tier: 2, continent: 'asia',
    info: {
      currency: 'New Taiwan Dollar', currencySymbol: 'NT$', population: '2.8M', phoneCode: '+886 4', language: 'Mandarin, Taiwanese',
      climate: 'Humid subtropical with hot summers (28-33°C) and mild winters (14-20°C). Less rain than other Taiwan cities.',
      attractions: ['Rainbow Village', 'National Taichung Theater', 'Miyahara Eye Hospital', 'Sun Moon Lake', 'Fengjia Night Market'],
      demographics: 'Second-largest city in Taiwan, known for bubble tea origin and arts scene. Major manufacturing and cultural hub in central Taiwan.'
    }
  },

  // MALAYSIA - Additional Cities (2 new)
  { slug: 'penang', city: 'George Town', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY', lat: 5.41, lng: 100.34, tier: 2, continent: 'asia',
    info: {
      currency: 'Malaysian Ringgit', currencySymbol: 'RM', population: '720K', phoneCode: '+60 4', language: 'Malay, English, Hokkien, Tamil',
      climate: 'Tropical with warm humid weather year-round (27-32°C). Heaviest rainfall September-November.',
      attractions: ['UNESCO Heritage Zone', 'Kek Lok Si Temple', 'Penang Hill', 'Street Art Trail', 'Clan Jetties'],
      demographics: 'Capital of Penang state, UNESCO World Heritage Site. Known as "Pearl of the Orient" for multicultural heritage and street food.'
    }
  },
  { slug: 'johor-bahru', city: 'Johor Bahru', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY', lat: 1.49, lng: 103.74, tier: 3, continent: 'asia',
    info: {
      currency: 'Malaysian Ringgit', currencySymbol: 'RM', population: '500K', phoneCode: '+60 7', language: 'Malay, English, Chinese',
      climate: 'Tropical with warm humid weather year-round (25-33°C). Monsoon seasons November-February.',
      attractions: ['Legoland Malaysia', 'Sultan Abu Bakar Mosque', 'Arulmigu Sri Rajakaliamman Temple', 'Johor Zoo', 'Danga Bay'],
      demographics: 'Second-largest city in Malaysia, gateway to Singapore via causeway. Major industrial and tourism hub in southern Malaysia.'
    }
  },

  // THAILAND - Additional Cities (2 new)
  { slug: 'chiang-mai', city: 'Chiang Mai', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 18.79, lng: 98.98, tier: 2, continent: 'asia',
    info: {
      currency: 'Thai Baht', currencySymbol: '฿', population: '130K', phoneCode: '+66 53', language: 'Thai, Northern Thai',
      climate: 'Tropical savanna with hot season (March-May, 35-40°C), rainy season (June-October), cool season (November-February, 15-25°C).',
      attractions: ['Doi Suthep Temple', 'Old City', 'Night Bazaar', 'Elephant Nature Park', 'Sunday Walking Street'],
      demographics: 'Largest city in Northern Thailand, former capital of Lanna Kingdom. Major digital nomad destination and cultural hub.'
    }
  },
  { slug: 'pattaya', city: 'Pattaya', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 12.93, lng: 100.88, tier: 3, continent: 'asia',
    info: {
      currency: 'Thai Baht', currencySymbol: '฿', population: '120K', phoneCode: '+66 38', language: 'Thai, English',
      climate: 'Tropical savanna with hot season (March-May), rainy season (June-October), and cool season. Temperatures 25-35°C.',
      attractions: ['Walking Street', 'Sanctuary of Truth', 'Nong Nooch Garden', 'Coral Island', 'Big Buddha Hill'],
      demographics: 'Major beach resort city on Gulf of Thailand, two hours from Bangkok. Known for vibrant nightlife and water activities.'
    }
  },

  // IRAN - Tehran (if missing)
  { slug: 'tehran', city: 'Tehran', timezone: 'Asia/Tehran', country: 'Iran', countryCode: 'IR', lat: 35.69, lng: 51.39, tier: 1, continent: 'asia',
    info: {
      currency: 'Iranian Rial', currencySymbol: 'IRR', population: '9.0M', phoneCode: '+98 21', language: 'Persian (Farsi)',
      climate: 'Semi-arid with hot dry summers (32-38°C) and cold winters (0-8°C). Snow possible in winter.',
      attractions: ['Golestan Palace', 'Grand Bazaar', 'National Museum', 'Milad Tower', 'Darband'],
      demographics: 'Capital and largest city of Iran, 32nd largest city globally. Major economic and cultural center with 5,000+ years of regional history.'
    }
  },
  { slug: 'mashhad', city: 'Mashhad', timezone: 'Asia/Tehran', country: 'Iran', countryCode: 'IR', lat: 36.30, lng: 59.60, tier: 2, continent: 'asia',
    info: {
      currency: 'Iranian Rial', currencySymbol: 'IRR', population: '3.3M', phoneCode: '+98 51', language: 'Persian',
      climate: 'Semi-arid with hot summers (28-35°C) and cold winters (-2 to 8°C). Low rainfall, mostly in winter/spring.',
      attractions: ['Imam Reza Shrine', 'Nader Shah Tomb', 'Goharshad Mosque', 'Ferdowsi Tomb', 'Kooh Sangi Park'],
      demographics: 'Second-largest city in Iran, holiest city in the country. Receives 20+ million pilgrims annually to Imam Reza Shrine.'
    }
  },
  { slug: 'isfahan', city: 'Isfahan', timezone: 'Asia/Tehran', country: 'Iran', countryCode: 'IR', lat: 32.65, lng: 51.68, tier: 3, continent: 'asia',
    info: {
      currency: 'Iranian Rial', currencySymbol: 'IRR', population: '2.0M', phoneCode: '+98 31', language: 'Persian',
      climate: 'Semi-arid with hot dry summers (30-38°C) and cold winters (0-10°C). Low rainfall year-round.',
      attractions: ['Naqsh-e Jahan Square', 'Si-o-se-pol Bridge', 'Shah Mosque', 'Ali Qapu Palace', 'Vank Cathedral'],
      demographics: 'Third-largest city in Iran, former capital of Persia. UNESCO World Heritage Site, known as "Half of the World" for its beauty.'
    }
  },

  // IRAQ - Major Cities
  { slug: 'basra', city: 'Basra', timezone: 'Asia/Baghdad', country: 'Iraq', countryCode: 'IQ', lat: 30.51, lng: 47.81, tier: 3, continent: 'asia',
    info: {
      currency: 'Iraqi Dinar', currencySymbol: 'IQD', population: '2.5M', phoneCode: '+964 40', language: 'Arabic',
      climate: 'Hot desert climate with extremely hot summers (40-50°C) and mild winters (10-20°C). Very dry.',
      attractions: ['Basra Corniche', 'Sinbad Island', 'Basra Sports City', 'Shatt al-Arab Waterway', 'Basra Old Souq'],
      demographics: 'Second-largest city in Iraq, major port city near the Persian Gulf. Historic center of trade and commerce.'
    }
  },

  // ALGERIA - Additional Cities
  { slug: 'oran', city: 'Oran', timezone: 'Africa/Algiers', country: 'Algeria', countryCode: 'DZ', lat: 35.70, lng: -0.63, tier: 3, continent: 'africa',
    info: {
      currency: 'Algerian Dinar', currencySymbol: 'DA', population: '1.0M', phoneCode: '+213 41', language: 'Arabic, French',
      climate: 'Mediterranean with hot dry summers (28-33°C) and mild wet winters (10-17°C).',
      attractions: ['Santa Cruz Fort', 'Palais du Bey', 'Front de Mer', 'Great Mosque', 'Ahmed Zabana Museum'],
      demographics: 'Second-largest city in Algeria, major port on Mediterranean coast. Known as "El-Bahia" (The Radiant), birthplace of Raï music.'
    }
  },

  // SUDAN - Khartoum

  // UGANDA - Kampala

  // ANGOLA - Luanda

  // MOZAMBIQUE - Maputo

  // COTE D'IVOIRE - Abidjan
  { slug: 'abidjan', city: 'Abidjan', timezone: 'Africa/Abidjan', country: "Côte d'Ivoire", countryCode: 'CI', lat: 5.36, lng: -4.01, tier: 2, continent: 'africa' },

  // SENEGAL - Dakar

  // CAMEROON - Major Cities
  { slug: 'douala', city: 'Douala', timezone: 'Africa/Douala', country: 'Cameroon', countryCode: 'CM', lat: 4.05, lng: 9.70, tier: 3, continent: 'africa',
    info: {
      currency: 'Central African CFA Franc', currencySymbol: 'CFA', population: '3.0M', phoneCode: '+237', language: 'French, English',
      climate: 'Tropical monsoon with heavy rainfall (June-October). Hot and humid (24-32°C) year-round.',
      attractions: ['La Pagode', 'Doual\'Art', 'Akwa Palace', 'Wouri River Bridge', 'Bonanjo District'],
      demographics: 'Largest city and economic capital of Cameroon. Major port handling 95% of country\'s trade.'
    }
  },

  // DR CONGO - Kinshasa

  // ZIMBABWE - Harare

  // ZAMBIA - Lusaka

  // USA - Additional Major Cities
  { slug: 'san-antonio', city: 'San Antonio', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 29.42, lng: -98.49, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '1.5M', phoneCode: '+1 210', language: 'English, Spanish',
      climate: 'Humid subtropical with hot summers (30-36°C) and mild winters (6-17°C). Rainfall year-round.',
      attractions: ['The Alamo', 'River Walk', 'San Antonio Missions', 'Pearl District', 'Tower of the Americas'],
      demographics: 'Seventh-largest city in US, rich in Spanish colonial and Texan history. Home to five 18th-century Spanish missions (UNESCO).'
    }
  },
  { slug: 'jacksonville', city: 'Jacksonville', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 30.33, lng: -81.66, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '950K', phoneCode: '+1 904', language: 'English',
      climate: 'Humid subtropical with hot humid summers (27-33°C) and mild winters (8-18°C). Hurricane risk June-November.',
      attractions: ['Jacksonville Zoo', 'Cummer Museum', 'Jacksonville Beach', 'St. Johns River', 'Riverside Arts Market'],
      demographics: 'Largest city by area in continental US, largest in Florida by population. Major port, naval base, and financial center.'
    }
  },
  { slug: 'charlotte', city: 'Charlotte', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 35.23, lng: -80.84, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '880K', phoneCode: '+1 704', language: 'English',
      climate: 'Humid subtropical with hot summers (25-33°C) and mild winters (3-12°C). Rainfall year-round.',
      attractions: ['NASCAR Hall of Fame', 'Freedom Park', 'Discovery Place', 'Carowinds', 'Bank of America Stadium'],
      demographics: 'Largest city in North Carolina, second-largest US banking center after New York. Fast-growing Southern hub.'
    }
  },
  { slug: 'columbus', city: 'Columbus', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 39.96, lng: -83.00, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '910K', phoneCode: '+1 614', language: 'English',
      climate: 'Humid continental with hot summers (23-30°C) and cold snowy winters (-3 to 5°C).',
      attractions: ['Ohio State University', 'German Village', 'COSI Science Center', 'North Market', 'Columbus Zoo'],
      demographics: 'Capital and largest city of Ohio, home to Ohio State University. Major test market for retail and fast food chains.'
    }
  },
  { slug: 'indianapolis', city: 'Indianapolis', timezone: 'America/Indiana/Indianapolis', country: 'United States', countryCode: 'US', lat: 39.77, lng: -86.16, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '880K', phoneCode: '+1 317', language: 'English',
      climate: 'Humid continental with hot humid summers (24-30°C) and cold snowy winters (-4 to 4°C).',
      attractions: ['Indianapolis Motor Speedway', 'Indianapolis Zoo', 'Monument Circle', 'Children\'s Museum', 'White River State Park'],
      demographics: 'Capital and largest city of Indiana, "Crossroads of America". Famous for Indy 500 and amateur sports capital of the world.'
    }
  },
  { slug: 'fort-worth', city: 'Fort Worth', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 32.75, lng: -97.33, tier: 3, continent: 'americas',
    info: {
      currency: 'US Dollar', currencySymbol: '$', population: '960K', phoneCode: '+1 817', language: 'English',
      climate: 'Humid subtropical with hot summers (28-38°C) and mild winters (3-15°C). Occasional severe thunderstorms.',
      attractions: ['Fort Worth Stockyards', 'Kimbell Art Museum', 'Sundance Square', 'Fort Worth Zoo', 'Botanic Garden'],
      demographics: 'Fifth-largest city in Texas, "City of Cowboys and Culture". Part of Dallas-Fort Worth metroplex, major aerospace and defense hub.'
    }
  },

  // BRAZIL - Additional Cities
  { slug: 'curitiba', city: 'Curitiba', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -25.43, lng: -49.27, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1.9M', phoneCode: '+55 41', language: 'Portuguese',
      climate: 'Humid subtropical with mild summers (18-26°C) and cool winters (8-18°C). Rainfall year-round.',
      attractions: ['Botanical Garden', 'Oscar Niemeyer Museum', 'Wire Opera House', 'Barigui Park', 'Historic Center'],
      demographics: 'Capital of Paraná state, known for innovative urban planning and BRT system. One of Brazil\'s greenest cities.'
    }
  },
  { slug: 'porto-alegre', city: 'Porto Alegre', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -30.03, lng: -51.23, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1.5M', phoneCode: '+55 51', language: 'Portuguese',
      climate: 'Humid subtropical with hot summers (24-30°C) and cool winters (10-18°C). Rainfall year-round.',
      attractions: ['Mercado Público', 'Redenção Park', 'Guaíba Waterfront', 'Fundação Iberê Camargo', 'Bom Fim neighborhood'],
      demographics: 'Capital of Rio Grande do Sul, southernmost major city in Brazil. Known for gaucho culture, churrasco, and World Social Forum.'
    }
  },
  { slug: 'manaus', city: 'Manaus', timezone: 'America/Manaus', country: 'Brazil', countryCode: 'BR', lat: -3.12, lng: -60.02, tier: 3, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '2.2M', phoneCode: '+55 92', language: 'Portuguese',
      climate: 'Tropical rainforest with high humidity year-round (26-32°C). Rainy season December-May.',
      attractions: ['Amazon Theatre', 'Meeting of the Waters', 'INPA Bosque', 'Ponta Negra Beach', 'Adolpho Lisbon Market'],
      demographics: 'Largest city in the Amazon, gateway to the rainforest. Free Trade Zone makes it an industrial center in the jungle.'
    }
  },
  { slug: 'campinas', city: 'Campinas', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -22.91, lng: -47.06, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1.2M', phoneCode: '+55 19', language: 'Portuguese',
      climate: 'Humid subtropical with warm summers (22-30°C) and mild dry winters (12-25°C). Rainy October-March.',
      attractions: ['Lagoa do Taquaral', 'Bosque dos Jequitibás', 'Mercado Municipal', 'Pedreira do Chapadão', 'Campinas Cathedral'],
      demographics: 'Brazil\'s Silicon Valley with UNICAMP university and major tech companies. Third-largest economy in São Paulo state.'
    }
  },
  { slug: 'goiania', city: 'Goiânia', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -16.69, lng: -49.25, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1.5M', phoneCode: '+55 62', language: 'Portuguese',
      climate: 'Tropical savanna with hot wet summers (22-30°C) and warm dry winters (15-28°C). Distinct dry season May-September.',
      attractions: ['Parque Flamboyant', 'Bosque dos Buritis', 'Feira Hippie', 'Memorial do Cerrado', 'Goiânia Zoo'],
      demographics: 'Capital of Goiás, planned city founded in 1933. Major agribusiness hub and gateway to Brazil\'s agricultural heartland.'
    }
  },
  { slug: 'guarulhos', city: 'Guarulhos', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.45, lng: -46.53, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1.4M', phoneCode: '+55 11', language: 'Portuguese',
      climate: 'Humid subtropical with warm summers (22-28°C) and mild winters (12-22°C). Rainy season October-March.',
      attractions: ['Zoológico de Guarulhos', 'Bosque Maia', 'Parque Estadual da Cantareira', 'Centro Histórico', 'Lago dos Patos'],
      demographics: 'Part of São Paulo metro, home to Brazil\'s busiest international airport (GRU). Major industrial and logistics hub.'
    }
  },
  { slug: 'sao-luis', city: 'São Luís', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR', lat: -2.53, lng: -44.27, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1.1M', phoneCode: '+55 98', language: 'Portuguese',
      climate: 'Tropical with high humidity year-round (26-32°C). Heavy rainy season January-June.',
      attractions: ['Centro Histórico (UNESCO)', 'Praia do Calhau', 'Lençóis Maranhenses nearby', 'Casa das Minas', 'Palácio dos Leões'],
      demographics: 'Capital of Maranhão, only Brazilian city founded by France. UNESCO World Heritage colonial center with azulejo tiles.'
    }
  },
  { slug: 'maceio', city: 'Maceió', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR', lat: -9.67, lng: -35.74, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1M', phoneCode: '+55 82', language: 'Portuguese',
      climate: 'Tropical with warm temperatures year-round (24-30°C). Rainy season April-August.',
      attractions: ['Praia de Pajuçara', 'Piscinas Naturais', 'Praia do Francês', 'Museu Théo Brandão', 'Pontal da Barra'],
      demographics: 'Capital of Alagoas, "Paradise of Waters" with stunning beaches and natural pools. Growing tourism destination.'
    }
  },
  { slug: 'belem', city: 'Belém', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR', lat: -1.46, lng: -48.50, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '1.5M', phoneCode: '+55 91', language: 'Portuguese',
      climate: 'Tropical rainforest with high humidity year-round (24-32°C). Rain almost daily, heaviest January-May.',
      attractions: ['Ver-o-Peso Market', 'Teatro da Paz', 'Estação das Docas', 'Basílica de Nazaré', 'Mangal das Garças'],
      demographics: 'Capital of Pará at Amazon River mouth, gateway to Amazon. Famous for Círio de Nazaré festival and açaí culture.'
    }
  },
  { slug: 'natal', city: 'Natal', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR', lat: -5.79, lng: -35.21, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '890K', phoneCode: '+55 84', language: 'Portuguese',
      climate: 'Tropical with warm temperatures year-round (26-30°C). Mild rainy season March-July, sunny most of year.',
      attractions: ['Ponta Negra Beach', 'Forte dos Reis Magos', 'Genipabu Dunes', 'Parrachos de Maracajaú', 'Maior Cajueiro do Mundo'],
      demographics: 'Capital of Rio Grande do Norte, "City of the Sun" with 300+ sunny days. Major beach tourism and WWII history.'
    }
  },
  { slug: 'campo-grande', city: 'Campo Grande', timezone: 'America/Campo_Grande', country: 'Brazil', countryCode: 'BR', lat: -20.47, lng: -54.62, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '900K', phoneCode: '+55 67', language: 'Portuguese',
      climate: 'Tropical savanna with hot wet summers (23-32°C) and warm dry winters (15-28°C). Dry season May-September.',
      attractions: ['Parque das Nações Indígenas', 'Mercado Municipal', 'Morada dos Baís', 'Memorial da Cultura Indígena', 'Parque Estadual do Prosa'],
      demographics: 'Capital of Mato Grosso do Sul, gateway to Pantanal wetlands and Bonito. Major cattle ranching and agribusiness center.'
    }
  },
  { slug: 'teresina', city: 'Teresina', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR', lat: -5.09, lng: -42.80, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '870K', phoneCode: '+55 86', language: 'Portuguese',
      climate: 'Tropical with extreme heat (28-40°C). One of Brazil\'s hottest capitals. Short rainy season January-April.',
      attractions: ['Parque da Cidade', 'Encontro dos Rios', 'Palácio de Karnak', 'Mercado Central', 'Ponte Estaiada'],
      demographics: 'Capital of Piauí, only state capital in Northeast not on coast. Known for leather goods and cashew production.'
    }
  },
  { slug: 'sao-bernardo-do-campo', city: 'São Bernardo do Campo', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.69, lng: -46.56, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '840K', phoneCode: '+55 11', language: 'Portuguese',
      climate: 'Humid subtropical with warm summers (22-28°C) and mild winters (12-22°C). Rainy October-March.',
      attractions: ['Parque Estoril', 'Cidade da Criança', 'Museu de Santo André', 'Represa Billings', 'Centro Histórico'],
      demographics: 'Part of ABC Paulista industrial region, birthplace of Brazilian auto industry. Political base of former President Lula.'
    }
  },
  { slug: 'joao-pessoa', city: 'João Pessoa', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR', lat: -7.12, lng: -34.86, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '820K', phoneCode: '+55 83', language: 'Portuguese',
      climate: 'Tropical with warm temperatures year-round (25-30°C). Rainy season March-August.',
      attractions: ['Praia de Tambaú', 'Ponta do Seixas', 'Centro Histórico', 'Estação Cabo Branco', 'Farol do Cabo Branco'],
      demographics: 'Capital of Paraíba, easternmost point of Americas. One of Brazil\'s greenest cities and second-oldest in country.'
    }
  },
  { slug: 'sao-jose-dos-campos', city: 'São José dos Campos', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.18, lng: -45.88, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '730K', phoneCode: '+55 12', language: 'Portuguese',
      climate: 'Humid subtropical with warm summers (22-28°C) and mild winters (12-22°C). Rainy October-March.',
      attractions: ['Parque Vicentina Aranha', 'Memorial Aeroespacial Brasileiro', 'Parque da Cidade', 'Pico do Itapeva', 'Museu de Arte Sacra'],
      demographics: 'Brazil\'s aerospace capital, home to Embraer and INPE space research. Major tech and defense industry hub.'
    }
  },
  { slug: 'ribeirao-preto', city: 'Ribeirão Preto', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -21.18, lng: -47.81, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '700K', phoneCode: '+55 16', language: 'Portuguese',
      climate: 'Tropical savanna with hot wet summers (22-30°C) and mild dry winters (14-26°C). Dry May-September.',
      attractions: ['Parque Prefeito Luiz Roberto Jábali', 'Teatro Pedro II', 'Bosque Zoo Fábio Barreto', 'Pinguim Cervejaria', 'Catedral Metropolitana'],
      demographics: 'Brazil\'s "Brazilian California" - major sugarcane, coffee, and orange production. Leading healthcare and university center.'
    }
  },
  { slug: 'uberlandia', city: 'Uberlândia', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -18.92, lng: -48.28, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '700K', phoneCode: '+55 34', language: 'Portuguese',
      climate: 'Tropical savanna with hot wet summers (22-30°C) and mild dry winters (14-27°C). Distinct dry season May-September.',
      attractions: ['Parque do Sabiá', 'Mercado Municipal', 'Museu Municipal', 'Parque Siquierolli', 'Praia Clube'],
      demographics: 'Second-largest city in Minas Gerais, major logistics hub in Brazil\'s center. Known for wholesale distribution and agribusiness.'
    }
  },
  { slug: 'sorocaba', city: 'Sorocaba', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.50, lng: -47.46, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '680K', phoneCode: '+55 15', language: 'Portuguese',
      climate: 'Humid subtropical with warm summers (22-28°C) and mild winters (10-22°C). Rainy October-March.',
      attractions: ['Zoológico de Sorocaba', 'Parque das Águas', 'Mercado Municipal', 'Mosteiro de São Bento', 'Parque Natural Chico Mendes'],
      demographics: 'One of São Paulo state\'s fastest-growing cities. Major textile, metallurgy, and auto parts manufacturing center.'
    }
  },
  { slug: 'florianopolis', city: 'Florianópolis', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -27.60, lng: -48.55, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '500K', phoneCode: '+55 48', language: 'Portuguese',
      climate: 'Humid subtropical with warm summers (22-30°C) and mild winters (12-20°C). Year-round mild weather.',
      attractions: ['Praia da Joaquina', 'Lagoa da Conceição', 'Centro Histórico', 'Ponte Hercílio Luz', 'Praia Mole'],
      demographics: 'Capital of Santa Catarina, "Magic Island" with 42 beaches. Brazil\'s tech startup hub and highest quality of life.'
    }
  },
  { slug: 'vitoria', city: 'Vitória', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -20.32, lng: -40.34, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '365K', phoneCode: '+55 27', language: 'Portuguese',
      climate: 'Tropical with warm temperatures year-round (22-30°C). Rainy October-January.',
      attractions: ['Praia de Camburi', 'Convento da Penha', 'Parque Pedra da Cebola', 'Centro Histórico', 'Ilha do Frade'],
      demographics: 'Capital of Espírito Santo, island city with major port. Iron ore export hub and gateway to mountain region.'
    }
  },
  { slug: 'santos', city: 'Santos', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.96, lng: -46.33, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '430K', phoneCode: '+55 13', language: 'Portuguese',
      climate: 'Humid subtropical with warm summers (24-30°C) and mild winters (16-22°C). High humidity year-round.',
      attractions: ['Santos Beach Gardens', 'Monte Serrat', 'Coffee Museum', 'Santos FC Museum', 'Aquário de Santos'],
      demographics: 'Home to Latin America\'s largest port. Birthplace of Pelé, the "Football City". Major coffee export history.'
    }
  },
  { slug: 'cuiaba', city: 'Cuiabá', timezone: 'America/Cuiaba', country: 'Brazil', countryCode: 'BR', lat: -15.60, lng: -56.10, tier: 2, continent: 'americas',
    info: {
      currency: 'Brazilian Real', currencySymbol: 'R$', population: '620K', phoneCode: '+55 65', language: 'Portuguese',
      climate: 'Tropical savanna with extreme heat (26-40°C). One of Brazil\'s hottest cities. Rainy season October-April.',
      attractions: ['Parque Nacional de Chapada dos Guimarães', 'Arsenal do Pantanal', 'Museu do Rio Cuiabá', 'Igreja do Rosário', 'SESC Arsenal'],
      demographics: 'Capital of Mato Grosso, exact geodesic center of South America. Gateway to Pantanal wetlands and Chapada dos Guimarães.'
    }
  },

  // COLOMBIA - Additional Cities
  { slug: 'cali', city: 'Cali', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 3.45, lng: -76.53, tier: 2, continent: 'americas',
    info: {
      currency: 'Colombian Peso', currencySymbol: '$', population: '2.5M', phoneCode: '+57 2', language: 'Spanish',
      climate: 'Tropical with consistent warm temperatures (18-30°C). Two rainy seasons (March-May, October-November).',
      attractions: ['Cristo Rey', 'San Antonio neighborhood', 'Cali Zoo', 'La Ermita Church', 'Río Pance'],
      demographics: 'Third-largest city in Colombia, world capital of salsa dancing. Major industrial and agricultural center in Valle del Cauca.'
    }
  },
  { slug: 'barranquilla', city: 'Barranquilla', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 10.96, lng: -74.80, tier: 3, continent: 'americas',
    info: {
      currency: 'Colombian Peso', currencySymbol: '$', population: '1.3M', phoneCode: '+57 5', language: 'Spanish',
      climate: 'Tropical savanna with hot temperatures year-round (26-33°C). Dry season December-April.',
      attractions: ['Barranquilla Carnival', 'Museo del Caribe', 'Puerta de Oro', 'Catedral Metropolitana', 'Zoológico de Barranquilla'],
      demographics: 'Fourth-largest city in Colombia, major Caribbean port. Famous for its carnival, second largest in the world.'
    }
  },

  // PERU - Additional Cities
  { slug: 'arequipa', city: 'Arequipa', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE', lat: -16.41, lng: -71.54, tier: 3, continent: 'americas',
    info: {
      currency: 'Peruvian Sol', currencySymbol: 'S/', population: '1.1M', phoneCode: '+51 54', language: 'Spanish',
      climate: 'Semi-arid with mild temperatures year-round (10-25°C). Sunny most days with little rainfall.',
      attractions: ['Santa Catalina Monastery', 'Plaza de Armas', 'Colca Canyon', 'El Misti Volcano', 'Yanahuara Viewpoint'],
      demographics: 'Second-largest city in Peru, UNESCO World Heritage Site known as the "White City" for its volcanic stone buildings.'
    }
  },
  { slug: 'cusco', city: 'Cusco', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE', lat: -13.52, lng: -71.97, tier: 3, continent: 'americas',
    info: {
      currency: 'Peruvian Sol', currencySymbol: 'S/', population: '430K', phoneCode: '+51 84', language: 'Spanish, Quechua',
      climate: 'Subtropical highland with dry season (May-October) and wet season. Cool temperatures (5-20°C) due to altitude of 3,400m.',
      attractions: ['Machu Picchu', 'Plaza de Armas', 'Sacsayhuamán', 'Qorikancha', 'Sacred Valley'],
      demographics: 'Historic capital of the Inca Empire, UNESCO World Heritage Site. Gateway to Machu Picchu and Peru\'s top tourist destination.'
    }
  },

  // CHILE - Additional Cities
  { slug: 'valparaiso', city: 'Valparaíso', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL', lat: -33.05, lng: -71.62, tier: 3, continent: 'americas',
    info: {
      currency: 'Chilean Peso', currencySymbol: '$', population: '300K', phoneCode: '+56 32', language: 'Spanish',
      climate: 'Mediterranean with warm dry summers (18-24°C) and mild wet winters (10-15°C). Ocean moderates temperatures.',
      attractions: ['Cerro Alegre', 'Cerro Concepción', 'Historic Funiculars', 'La Sebastiana (Neruda House)', 'Sotomayor Square'],
      demographics: 'UNESCO World Heritage Site, Chile\'s cultural capital. Known for colorful hillside houses, street art, and bohemian atmosphere.'
    }
  },

  // VENEZUELA - Additional Cities
  { slug: 'maracaibo', city: 'Maracaibo', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE', lat: 10.67, lng: -71.64, tier: 3, continent: 'americas',
    info: {
      currency: 'Venezuelan Bolívar', currencySymbol: 'Bs', population: '2.0M', phoneCode: '+58 261', language: 'Spanish',
      climate: 'Tropical semi-arid with hot temperatures year-round (28-35°C). Brief rainy season October-November.',
      attractions: ['Lake Maracaibo', 'Basilica of Our Lady of Chiquinquirá', 'Catatumbo Lightning', 'Santa Lucía Historic Center', 'General Rafael Urdaneta Bridge'],
      demographics: 'Second-largest city in Venezuela, center of oil industry. Known for Catatumbo lightning phenomenon visible from the lake.'
    }
  },
  { slug: 'valencia-venezuela', city: 'Valencia', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE', lat: 10.16, lng: -67.99, tier: 3, continent: 'americas',
    info: {
      currency: 'Venezuelan Bolívar', currencySymbol: 'Bs', population: '1.5M', phoneCode: '+58 241', language: 'Spanish',
      climate: 'Tropical savanna with warm temperatures year-round (24-32°C). Dry season December-April.',
      attractions: ['Valencia Aquarium', 'Campo Carabobo', 'Metropolitan Cathedral', 'Parque Fernando Peñalver', 'Lake Valencia'],
      demographics: 'Third-largest city in Venezuela, major industrial center. Historic capital during independence era, automotive manufacturing hub.'
    }
  },

  // AUSTRALIA - Additional Cities
  { slug: 'canberra', city: 'Canberra', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU', lat: -35.28, lng: 149.13, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '460K', phoneCode: '+61 2', language: 'English',
      climate: 'Oceanic with warm dry summers (20-28°C) and cold winters (0-12°C). Four distinct seasons.',
      attractions: ['Parliament House', 'Australian War Memorial', 'National Gallery of Australia', 'Lake Burley Griffin', 'Questacon'],
      demographics: 'Capital of Australia, planned city designed by Walter Burley Griffin. Government and education hub between Sydney and Melbourne.'
    }
  },
  { slug: 'hobart', city: 'Hobart', timezone: 'Australia/Hobart', country: 'Australia', countryCode: 'AU', lat: -42.88, lng: 147.33, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '240K', phoneCode: '+61 3', language: 'English',
      climate: 'Oceanic with mild summers (17-22°C) and cool winters (5-12°C). Four distinct seasons, changeable weather.',
      attractions: ['MONA Museum', 'Salamanca Market', 'Mount Wellington', 'Battery Point', 'Port Arthur'],
      demographics: 'Capital of Tasmania, Australia\'s second-oldest city (1804). Gateway to wilderness, famous for MONA and food scene.'
    }
  },
  { slug: 'darwin', city: 'Darwin', timezone: 'Australia/Darwin', country: 'Australia', countryCode: 'AU', lat: -12.46, lng: 130.84, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '150K', phoneCode: '+61 8', language: 'English',
      climate: 'Tropical savanna with wet (Nov-Apr, 25-33°C) and dry (May-Oct, 21-32°C) seasons. Hot year-round.',
      attractions: ['Mindil Beach Sunset Market', 'Crocosaurus Cove', 'Museum and Art Gallery NT', 'Litchfield National Park', 'Darwin Waterfront'],
      demographics: 'Capital of Northern Territory, gateway to Kakadu and Top End. Most multicultural city, rebuilt after Cyclone Tracy (1974).'
    }
  },
  { slug: 'newcastle-au', city: 'Newcastle', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU', lat: -32.93, lng: 151.78, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '320K', phoneCode: '+61 2', language: 'English',
      climate: 'Humid subtropical with warm summers (22-28°C) and mild winters (8-17°C). Pleasant year-round.',
      attractions: ['Nobby\'s Beach', 'Fort Scratchley', 'Newcastle Memorial Walk', 'Honeysuckle Precinct', 'Hunter Valley nearby'],
      demographics: 'Second-largest city in NSW, transformed from steel town to creative hub. Gateway to Hunter Valley wine region.'
    }
  },
  { slug: 'wollongong', city: 'Wollongong', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU', lat: -34.43, lng: 150.89, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '310K', phoneCode: '+61 2', language: 'English',
      climate: 'Humid subtropical with warm summers (22-26°C) and mild winters (10-17°C). Coastal breezes.',
      attractions: ['Sea Cliff Bridge', 'Nan Tien Temple', 'Wollongong Botanic Garden', 'North Beach', 'Illawarra Escarpment'],
      demographics: 'Third-largest city in NSW between mountains and sea. Major university town, former steel city now diversified economy.'
    }
  },
  { slug: 'geelong', city: 'Geelong', timezone: 'Australia/Melbourne', country: 'Australia', countryCode: 'AU', lat: -38.15, lng: 144.36, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '270K', phoneCode: '+61 3', language: 'English',
      climate: 'Oceanic with warm summers (18-25°C) and cool winters (7-14°C). Corio Bay moderation.',
      attractions: ['Geelong Waterfront', 'Bollards Sculptures', 'National Wool Museum', 'Eastern Beach', 'Narana Aboriginal Centre'],
      demographics: 'Second-largest city in Victoria on Corio Bay. Gateway to Great Ocean Road, historic wool industry, AFL heartland.'
    }
  },
  { slug: 'cairns', city: 'Cairns', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -16.92, lng: 145.77, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '160K', phoneCode: '+61 7', language: 'English',
      climate: 'Tropical with wet (Dec-Apr, 24-31°C) and dry (May-Nov, 18-26°C) seasons. Hot and humid.',
      attractions: ['Great Barrier Reef', 'Daintree Rainforest', 'Cairns Esplanade', 'Kuranda Scenic Railway', 'Green Island'],
      demographics: 'Gateway to Great Barrier Reef and Wet Tropics. Tourism capital of Far North Queensland, tropical lifestyle hub.'
    }
  },
  { slug: 'townsville', city: 'Townsville', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -19.26, lng: 146.82, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '195K', phoneCode: '+61 7', language: 'English',
      climate: 'Tropical savanna with wet (Dec-Apr, 25-32°C) and dry (May-Nov, 18-28°C) seasons. 320 sunny days.',
      attractions: ['Castle Hill', 'Reef HQ Aquarium', 'The Strand', 'Magnetic Island', 'Museum of Tropical Queensland'],
      demographics: 'Largest city in North Queensland, gateway to Magnetic Island. Military hub, James Cook University, 320 sunny days per year.'
    }
  },
  { slug: 'sunshine-coast', city: 'Sunshine Coast', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -26.65, lng: 153.07, tier: 2, continent: 'oceania',
    info: {
      currency: 'Australian Dollar', currencySymbol: 'A$', population: '350K', phoneCode: '+61 7', language: 'English',
      climate: 'Humid subtropical with warm summers (22-29°C) and mild winters (12-22°C). 300 sunny days.',
      attractions: ['Noosa Heads', 'Australia Zoo', 'Glass House Mountains', 'Mooloolaba Beach', 'Eumundi Markets'],
      demographics: 'Third-largest urban area in Queensland north of Brisbane. Famous beaches, Australia Zoo (Steve Irwin), relaxed lifestyle.'
    }
  },

  // NEW ZEALAND - Additional Cities
  { slug: 'queenstown', city: 'Queenstown', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ', lat: -45.03, lng: 168.66, tier: 3, continent: 'oceania',
    info: {
      currency: 'New Zealand Dollar', currencySymbol: 'NZ$', population: '16K', phoneCode: '+64 3', language: 'English, Māori',
      climate: 'Oceanic with warm summers (15-22°C) and cold winters (-2 to 8°C). Four distinct seasons, snow in winter.',
      attractions: ['Lake Wakatipu', 'Skyline Gondola', 'Milford Sound', 'Coronet Peak', 'Shotover Jet'],
      demographics: 'Adventure capital of New Zealand in South Island. Famous for bungee jumping, skiing, and Lord of the Rings filming locations.'
    }
  },

  // FIJI - Suva
  { slug: 'suva', city: 'Suva', timezone: 'Pacific/Fiji', country: 'Fiji', countryCode: 'FJ', lat: -18.14, lng: 178.44, tier: 3, continent: 'oceania',
    info: {
      currency: 'Fijian Dollar', currencySymbol: 'FJ$', population: '95K', phoneCode: '+679', language: 'English, Fijian, Hindi',
      climate: 'Tropical rainforest with warm temperatures year-round (23-30°C). Wet season November-April, cyclone risk.',
      attractions: ['Fiji Museum', 'Colo-i-Suva Forest Park', 'Thurston Gardens', 'Municipal Market', 'University of South Pacific'],
      demographics: 'Capital of Fiji on Viti Levu island, largest city in South Pacific. Multicultural hub of Fijian, Indian, and European influences.'
    }
  },

  // PAPUA NEW GUINEA - Port Moresby
]
