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

  // Europe
  { slug: 'manchester', city: 'Manchester', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.48, lng: -2.24, tier: 3, continent: 'europe',
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
  { slug: 'tripoli', city: 'Tripoli', timezone: 'Africa/Tripoli', country: 'Libya', countryCode: 'LY', lat: 32.89, lng: 13.19, tier: 2, continent: 'africa' },
  { slug: 'khartoum', city: 'Khartoum', timezone: 'Africa/Khartoum', country: 'Sudan', countryCode: 'SD', lat: 15.59, lng: 32.53, tier: 2, continent: 'africa' },
  { slug: 'juba', city: 'Juba', timezone: 'Africa/Juba', country: 'South Sudan', countryCode: 'SS', lat: 4.85, lng: 31.58, tier: 3, continent: 'africa' },
  { slug: 'kampala', city: 'Kampala', timezone: 'Africa/Kampala', country: 'Uganda', countryCode: 'UG', lat: 0.31, lng: 32.58, tier: 2, continent: 'africa' },
  { slug: 'kigali', city: 'Kigali', timezone: 'Africa/Kigali', country: 'Rwanda', countryCode: 'RW', lat: -1.94, lng: 30.06, tier: 2, continent: 'africa' },
  { slug: 'gitega', city: 'Gitega', timezone: 'Africa/Bujumbura', country: 'Burundi', countryCode: 'BI', lat: -3.43, lng: 29.93, tier: 3, continent: 'africa' },
  { slug: 'kinshasa', city: 'Kinshasa', timezone: 'Africa/Kinshasa', country: 'DR Congo', countryCode: 'CD', lat: -4.44, lng: 15.27, tier: 2, continent: 'africa' },
  { slug: 'brazzaville', city: 'Brazzaville', timezone: 'Africa/Brazzaville', country: 'Congo', countryCode: 'CG', lat: -4.27, lng: 15.28, tier: 2, continent: 'africa' },
  { slug: 'harare', city: 'Harare', timezone: 'Africa/Harare', country: 'Zimbabwe', countryCode: 'ZW', lat: -17.83, lng: 31.05, tier: 2, continent: 'africa' },
  { slug: 'lusaka', city: 'Lusaka', timezone: 'Africa/Lusaka', country: 'Zambia', countryCode: 'ZM', lat: -15.39, lng: 28.32, tier: 2, continent: 'africa' },
  { slug: 'gaborone', city: 'Gaborone', timezone: 'Africa/Gaborone', country: 'Botswana', countryCode: 'BW', lat: -24.65, lng: 25.91, tier: 2, continent: 'africa' },
  { slug: 'windhoek', city: 'Windhoek', timezone: 'Africa/Windhoek', country: 'Namibia', countryCode: 'NA', lat: -22.56, lng: 17.08, tier: 2, continent: 'africa' },
  { slug: 'maputo', city: 'Maputo', timezone: 'Africa/Maputo', country: 'Mozambique', countryCode: 'MZ', lat: -25.97, lng: 32.58, tier: 2, continent: 'africa' },
  { slug: 'luanda', city: 'Luanda', timezone: 'Africa/Luanda', country: 'Angola', countryCode: 'AO', lat: -8.84, lng: 13.23, tier: 2, continent: 'africa' },
  { slug: 'yaounde', city: 'Yaoundé', timezone: 'Africa/Douala', country: 'Cameroon', countryCode: 'CM', lat: 3.87, lng: 11.52, tier: 2, continent: 'africa' },
  { slug: 'yamoussoukro', city: 'Yamoussoukro', timezone: 'Africa/Abidjan', country: 'Ivory Coast', countryCode: 'CI', lat: 6.82, lng: -5.28, tier: 3, continent: 'africa' },
  { slug: 'dakar', city: 'Dakar', timezone: 'Africa/Dakar', country: 'Senegal', countryCode: 'SN', lat: 14.69, lng: -17.44, tier: 2, continent: 'africa' },
  { slug: 'bamako', city: 'Bamako', timezone: 'Africa/Bamako', country: 'Mali', countryCode: 'ML', lat: 12.64, lng: -8.00, tier: 2, continent: 'africa' },
  { slug: 'ouagadougou', city: 'Ouagadougou', timezone: 'Africa/Ouagadougou', country: 'Burkina Faso', countryCode: 'BF', lat: 12.37, lng: -1.52, tier: 2, continent: 'africa' },
  { slug: 'niamey', city: 'Niamey', timezone: 'Africa/Niamey', country: 'Niger', countryCode: 'NE', lat: 13.51, lng: 2.11, tier: 2, continent: 'africa' },
  { slug: 'ndjamena', city: "N'Djamena", timezone: 'Africa/Ndjamena', country: 'Chad', countryCode: 'TD', lat: 12.13, lng: 15.05, tier: 2, continent: 'africa' },
  { slug: 'antananarivo', city: 'Antananarivo', timezone: 'Indian/Antananarivo', country: 'Madagascar', countryCode: 'MG', lat: -18.91, lng: 47.54, tier: 2, continent: 'africa' },
  { slug: 'port-louis', city: 'Port Louis', timezone: 'Indian/Mauritius', country: 'Mauritius', countryCode: 'MU', lat: -20.16, lng: 57.50, tier: 3, continent: 'africa' },
  { slug: 'lilongwe', city: 'Lilongwe', timezone: 'Africa/Blantyre', country: 'Malawi', countryCode: 'MW', lat: -13.98, lng: 33.79, tier: 3, continent: 'africa' },
  { slug: 'mogadishu', city: 'Mogadishu', timezone: 'Africa/Mogadishu', country: 'Somalia', countryCode: 'SO', lat: 2.04, lng: 45.34, tier: 2, continent: 'africa' },
  { slug: 'asmara', city: 'Asmara', timezone: 'Africa/Asmara', country: 'Eritrea', countryCode: 'ER', lat: 15.34, lng: 38.93, tier: 3, continent: 'africa' },
  { slug: 'djibouti-city', city: 'Djibouti City', timezone: 'Africa/Djibouti', country: 'Djibouti', countryCode: 'DJ', lat: 11.59, lng: 43.15, tier: 3, continent: 'africa' },
  { slug: 'libreville', city: 'Libreville', timezone: 'Africa/Libreville', country: 'Gabon', countryCode: 'GA', lat: 0.39, lng: 9.45, tier: 2, continent: 'africa' },
  { slug: 'malabo', city: 'Malabo', timezone: 'Africa/Malabo', country: 'Equatorial Guinea', countryCode: 'GQ', lat: 3.75, lng: 8.78, tier: 3, continent: 'africa' },
  { slug: 'bangui', city: 'Bangui', timezone: 'Africa/Bangui', country: 'Central African Republic', countryCode: 'CF', lat: 4.39, lng: 18.56, tier: 3, continent: 'africa' },
  { slug: 'bissau', city: 'Bissau', timezone: 'Africa/Bissau', country: 'Guinea-Bissau', countryCode: 'GW', lat: 11.86, lng: -15.60, tier: 3, continent: 'africa' },
  { slug: 'conakry', city: 'Conakry', timezone: 'Africa/Conakry', country: 'Guinea', countryCode: 'GN', lat: 9.64, lng: -13.58, tier: 3, continent: 'africa' },
  { slug: 'freetown', city: 'Freetown', timezone: 'Africa/Freetown', country: 'Sierra Leone', countryCode: 'SL', lat: 8.48, lng: -13.23, tier: 3, continent: 'africa' },
  { slug: 'monrovia', city: 'Monrovia', timezone: 'Africa/Monrovia', country: 'Liberia', countryCode: 'LR', lat: 6.31, lng: -10.80, tier: 3, continent: 'africa' },
  { slug: 'lome', city: 'Lomé', timezone: 'Africa/Lome', country: 'Togo', countryCode: 'TG', lat: 6.14, lng: 1.21, tier: 3, continent: 'africa' },
  { slug: 'porto-novo', city: 'Porto-Novo', timezone: 'Africa/Porto-Novo', country: 'Benin', countryCode: 'BJ', lat: 6.50, lng: 2.60, tier: 3, continent: 'africa' },
  { slug: 'nouakchott', city: 'Nouakchott', timezone: 'Africa/Nouakchott', country: 'Mauritania', countryCode: 'MR', lat: 18.09, lng: -15.98, tier: 3, continent: 'africa' },
  { slug: 'banjul', city: 'Banjul', timezone: 'Africa/Banjul', country: 'Gambia', countryCode: 'GM', lat: 13.45, lng: -16.58, tier: 3, continent: 'africa' },
  { slug: 'praia', city: 'Praia', timezone: 'Atlantic/Cape_Verde', country: 'Cape Verde', countryCode: 'CV', lat: 14.93, lng: -23.51, tier: 3, continent: 'africa' },
  { slug: 'sao-tome', city: 'São Tomé', timezone: 'Africa/Sao_Tome', country: 'São Tomé and Príncipe', countryCode: 'ST', lat: 0.34, lng: 6.73, tier: 3, continent: 'africa' },
  { slug: 'victoria-seychelles', city: 'Victoria', timezone: 'Indian/Mahe', country: 'Seychelles', countryCode: 'SC', lat: -4.62, lng: 55.45, tier: 3, continent: 'africa' },
  { slug: 'moroni', city: 'Moroni', timezone: 'Indian/Comoro', country: 'Comoros', countryCode: 'KM', lat: -11.70, lng: 43.26, tier: 3, continent: 'africa' },
  { slug: 'maseru', city: 'Maseru', timezone: 'Africa/Maseru', country: 'Lesotho', countryCode: 'LS', lat: -29.31, lng: 27.48, tier: 3, continent: 'africa' },
  { slug: 'mbabane', city: 'Mbabane', timezone: 'Africa/Mbabane', country: 'Eswatini', countryCode: 'SZ', lat: -26.32, lng: 31.13, tier: 3, continent: 'africa' },

  // Europe Capitals
  { slug: 'luxembourg-city', city: 'Luxembourg City', timezone: 'Europe/Luxembourg', country: 'Luxembourg', countryCode: 'LU', lat: 49.61, lng: 6.13, tier: 3, continent: 'europe' },
  { slug: 'monaco', city: 'Monaco', timezone: 'Europe/Monaco', country: 'Monaco', countryCode: 'MC', lat: 43.73, lng: 7.42, tier: 3, continent: 'europe' },
  { slug: 'andorra-la-vella', city: 'Andorra la Vella', timezone: 'Europe/Andorra', country: 'Andorra', countryCode: 'AD', lat: 42.51, lng: 1.52, tier: 3, continent: 'europe' },
  { slug: 'vaduz', city: 'Vaduz', timezone: 'Europe/Vaduz', country: 'Liechtenstein', countryCode: 'LI', lat: 47.14, lng: 9.52, tier: 3, continent: 'europe' },
  { slug: 'san-marino', city: 'San Marino', timezone: 'Europe/San_Marino', country: 'San Marino', countryCode: 'SM', lat: 43.94, lng: 12.46, tier: 3, continent: 'europe' },
  { slug: 'vatican-city', city: 'Vatican City', timezone: 'Europe/Vatican', country: 'Vatican City', countryCode: 'VA', lat: 41.90, lng: 12.45, tier: 3, continent: 'europe' },
  { slug: 'valletta', city: 'Valletta', timezone: 'Europe/Malta', country: 'Malta', countryCode: 'MT', lat: 35.90, lng: 14.51, tier: 3, continent: 'europe' },
  { slug: 'nicosia', city: 'Nicosia', timezone: 'Asia/Nicosia', country: 'Cyprus', countryCode: 'CY', lat: 35.17, lng: 33.37, tier: 3, continent: 'europe' },
  { slug: 'podgorica', city: 'Podgorica', timezone: 'Europe/Podgorica', country: 'Montenegro', countryCode: 'ME', lat: 42.44, lng: 19.26, tier: 3, continent: 'europe' },
  { slug: 'sarajevo', city: 'Sarajevo', timezone: 'Europe/Sarajevo', country: 'Bosnia and Herzegovina', countryCode: 'BA', lat: 43.86, lng: 18.41, tier: 3, continent: 'europe' },
  { slug: 'skopje', city: 'Skopje', timezone: 'Europe/Skopje', country: 'North Macedonia', countryCode: 'MK', lat: 42.00, lng: 21.43, tier: 3, continent: 'europe' },
  { slug: 'tirana', city: 'Tirana', timezone: 'Europe/Tirane', country: 'Albania', countryCode: 'AL', lat: 41.33, lng: 19.82, tier: 3, continent: 'europe' },
  { slug: 'chisinau', city: 'Chișinău', timezone: 'Europe/Chisinau', country: 'Moldova', countryCode: 'MD', lat: 47.01, lng: 28.86, tier: 3, continent: 'europe' },
  { slug: 'minsk', city: 'Minsk', timezone: 'Europe/Minsk', country: 'Belarus', countryCode: 'BY', lat: 53.90, lng: 27.57, tier: 2, continent: 'europe' },
  { slug: 'pristina', city: 'Pristina', timezone: 'Europe/Belgrade', country: 'Kosovo', countryCode: 'XK', lat: 42.66, lng: 21.17, tier: 3, continent: 'europe' },

  // Asia Capitals
  { slug: 'baku', city: 'Baku', timezone: 'Asia/Baku', country: 'Azerbaijan', countryCode: 'AZ', lat: 40.41, lng: 49.87, tier: 2, continent: 'asia' },
  { slug: 'yerevan', city: 'Yerevan', timezone: 'Asia/Yerevan', country: 'Armenia', countryCode: 'AM', lat: 40.18, lng: 44.51, tier: 3, continent: 'asia' },
  { slug: 'tbilisi', city: 'Tbilisi', timezone: 'Asia/Tbilisi', country: 'Georgia', countryCode: 'GE', lat: 41.72, lng: 44.79, tier: 3, continent: 'asia' },
  { slug: 'tashkent', city: 'Tashkent', timezone: 'Asia/Tashkent', country: 'Uzbekistan', countryCode: 'UZ', lat: 41.30, lng: 69.28, tier: 2, continent: 'asia' },
  { slug: 'astana', city: 'Astana', timezone: 'Asia/Almaty', country: 'Kazakhstan', countryCode: 'KZ', lat: 51.17, lng: 71.43, tier: 2, continent: 'asia' },
  { slug: 'ashgabat', city: 'Ashgabat', timezone: 'Asia/Ashgabat', country: 'Turkmenistan', countryCode: 'TM', lat: 37.95, lng: 58.38, tier: 3, continent: 'asia' },
  { slug: 'dushanbe', city: 'Dushanbe', timezone: 'Asia/Dushanbe', country: 'Tajikistan', countryCode: 'TJ', lat: 38.54, lng: 68.77, tier: 3, continent: 'asia' },
  { slug: 'bishkek', city: 'Bishkek', timezone: 'Asia/Bishkek', country: 'Kyrgyzstan', countryCode: 'KG', lat: 42.87, lng: 74.59, tier: 3, continent: 'asia' },
  { slug: 'ulaanbaatar', city: 'Ulaanbaatar', timezone: 'Asia/Ulaanbaatar', country: 'Mongolia', countryCode: 'MN', lat: 47.91, lng: 106.91, tier: 3, continent: 'asia' },
  { slug: 'vientiane', city: 'Vientiane', timezone: 'Asia/Vientiane', country: 'Laos', countryCode: 'LA', lat: 17.97, lng: 102.60, tier: 3, continent: 'asia' },
  { slug: 'bandar-seri-begawan', city: 'Bandar Seri Begawan', timezone: 'Asia/Brunei', country: 'Brunei', countryCode: 'BN', lat: 4.89, lng: 114.94, tier: 3, continent: 'asia' },
  { slug: 'dili', city: 'Dili', timezone: 'Asia/Dili', country: 'Timor-Leste', countryCode: 'TL', lat: -8.56, lng: 125.57, tier: 3, continent: 'asia' },
  { slug: 'male', city: 'Malé', timezone: 'Indian/Maldives', country: 'Maldives', countryCode: 'MV', lat: 4.18, lng: 73.51, tier: 3, continent: 'asia' },
  { slug: 'thimphu', city: 'Thimphu', timezone: 'Asia/Thimphu', country: 'Bhutan', countryCode: 'BT', lat: 27.47, lng: 89.64, tier: 3, continent: 'asia' },
  { slug: 'kabul', city: 'Kabul', timezone: 'Asia/Kabul', country: 'Afghanistan', countryCode: 'AF', lat: 34.53, lng: 69.17, tier: 2, continent: 'asia' },
  { slug: 'baghdad', city: 'Baghdad', timezone: 'Asia/Baghdad', country: 'Iraq', countryCode: 'IQ', lat: 33.31, lng: 44.37, tier: 2, continent: 'asia' },
  { slug: 'damascus', city: 'Damascus', timezone: 'Asia/Damascus', country: 'Syria', countryCode: 'SY', lat: 33.51, lng: 36.29, tier: 2, continent: 'asia' },
  { slug: 'amman', city: 'Amman', timezone: 'Asia/Amman', country: 'Jordan', countryCode: 'JO', lat: 31.95, lng: 35.93, tier: 2, continent: 'asia' },
  { slug: 'beirut', city: 'Beirut', timezone: 'Asia/Beirut', country: 'Lebanon', countryCode: 'LB', lat: 33.89, lng: 35.50, tier: 2, continent: 'asia' },
  { slug: 'sanaa', city: 'Sanaa', timezone: 'Asia/Aden', country: 'Yemen', countryCode: 'YE', lat: 15.37, lng: 44.19, tier: 3, continent: 'asia' },
  { slug: 'muscat', city: 'Muscat', timezone: 'Asia/Muscat', country: 'Oman', countryCode: 'OM', lat: 23.59, lng: 58.41, tier: 3, continent: 'asia' },
  { slug: 'manama', city: 'Manama', timezone: 'Asia/Bahrain', country: 'Bahrain', countryCode: 'BH', lat: 26.23, lng: 50.59, tier: 3, continent: 'asia' },
  { slug: 'kuwait-city', city: 'Kuwait City', timezone: 'Asia/Kuwait', country: 'Kuwait', countryCode: 'KW', lat: 29.38, lng: 47.99, tier: 2, continent: 'asia' },
  { slug: 'ramallah', city: 'Ramallah', timezone: 'Asia/Gaza', country: 'Palestine', countryCode: 'PS', lat: 31.90, lng: 35.20, tier: 3, continent: 'asia' },

  // Americas Capitals
  { slug: 'kingston', city: 'Kingston', timezone: 'America/Jamaica', country: 'Jamaica', countryCode: 'JM', lat: 18.00, lng: -76.79, tier: 3, continent: 'americas' },
  { slug: 'port-of-spain', city: 'Port of Spain', timezone: 'America/Port_of_Spain', country: 'Trinidad and Tobago', countryCode: 'TT', lat: 10.66, lng: -61.51, tier: 3, continent: 'americas' },
  { slug: 'nassau', city: 'Nassau', timezone: 'America/Nassau', country: 'Bahamas', countryCode: 'BS', lat: 25.08, lng: -77.34, tier: 3, continent: 'americas' },
  { slug: 'bridgetown', city: 'Bridgetown', timezone: 'America/Barbados', country: 'Barbados', countryCode: 'BB', lat: 13.10, lng: -59.61, tier: 3, continent: 'americas' },
  { slug: 'port-au-prince', city: 'Port-au-Prince', timezone: 'America/Port-au-Prince', country: 'Haiti', countryCode: 'HT', lat: 18.54, lng: -72.34, tier: 3, continent: 'americas' },
  { slug: 'santo-domingo', city: 'Santo Domingo', timezone: 'America/Santo_Domingo', country: 'Dominican Republic', countryCode: 'DO', lat: 18.49, lng: -69.90, tier: 2, continent: 'americas' },
  { slug: 'guatemala-city', city: 'Guatemala City', timezone: 'America/Guatemala', country: 'Guatemala', countryCode: 'GT', lat: 14.63, lng: -90.51, tier: 2, continent: 'americas' },
  { slug: 'tegucigalpa', city: 'Tegucigalpa', timezone: 'America/Tegucigalpa', country: 'Honduras', countryCode: 'HN', lat: 14.07, lng: -87.19, tier: 3, continent: 'americas' },
  { slug: 'san-salvador', city: 'San Salvador', timezone: 'America/El_Salvador', country: 'El Salvador', countryCode: 'SV', lat: 13.69, lng: -89.19, tier: 3, continent: 'americas' },
  { slug: 'managua', city: 'Managua', timezone: 'America/Managua', country: 'Nicaragua', countryCode: 'NI', lat: 12.13, lng: -86.25, tier: 3, continent: 'americas' },
  { slug: 'belmopan', city: 'Belmopan', timezone: 'America/Belize', country: 'Belize', countryCode: 'BZ', lat: 17.25, lng: -88.77, tier: 3, continent: 'americas' },
  { slug: 'sucre', city: 'Sucre', timezone: 'America/La_Paz', country: 'Bolivia', countryCode: 'BO', lat: -19.04, lng: -65.26, tier: 3, continent: 'americas' },
  { slug: 'asuncion', city: 'Asunción', timezone: 'America/Asuncion', country: 'Paraguay', countryCode: 'PY', lat: -25.28, lng: -57.57, tier: 3, continent: 'americas' },
  { slug: 'quito', city: 'Quito', timezone: 'America/Guayaquil', country: 'Ecuador', countryCode: 'EC', lat: -0.18, lng: -78.47, tier: 2, continent: 'americas' },
  { slug: 'georgetown', city: 'Georgetown', timezone: 'America/Guyana', country: 'Guyana', countryCode: 'GY', lat: 6.80, lng: -58.16, tier: 3, continent: 'americas' },
  { slug: 'paramaribo', city: 'Paramaribo', timezone: 'America/Paramaribo', country: 'Suriname', countryCode: 'SR', lat: 5.85, lng: -55.20, tier: 3, continent: 'americas' },
  { slug: 'san-juan', city: 'San Juan', timezone: 'America/Puerto_Rico', country: 'Puerto Rico', countryCode: 'PR', lat: 18.47, lng: -66.11, tier: 3, continent: 'americas' },

  // Oceania Capitals
  { slug: 'port-moresby', city: 'Port Moresby', timezone: 'Pacific/Port_Moresby', country: 'Papua New Guinea', countryCode: 'PG', lat: -9.44, lng: 147.18, tier: 2, continent: 'oceania' },
  { slug: 'honiara', city: 'Honiara', timezone: 'Pacific/Guadalcanal', country: 'Solomon Islands', countryCode: 'SB', lat: -9.43, lng: 159.95, tier: 3, continent: 'oceania' },
  { slug: 'port-vila', city: 'Port Vila', timezone: 'Pacific/Efate', country: 'Vanuatu', countryCode: 'VU', lat: -17.74, lng: 168.32, tier: 3, continent: 'oceania' },
  { slug: 'apia', city: 'Apia', timezone: 'Pacific/Apia', country: 'Samoa', countryCode: 'WS', lat: -13.83, lng: -171.76, tier: 2, continent: 'oceania' },
  { slug: 'nukualofa', city: 'Nukuʻalofa', timezone: 'Pacific/Tongatapu', country: 'Tonga', countryCode: 'TO', lat: -21.21, lng: -175.20, tier: 3, continent: 'oceania' },
  { slug: 'tarawa', city: 'Tarawa', timezone: 'Pacific/Tarawa', country: 'Kiribati', countryCode: 'KI', lat: 1.33, lng: 172.98, tier: 3, continent: 'oceania' },
  { slug: 'palikir', city: 'Palikir', timezone: 'Pacific/Pohnpei', country: 'Micronesia', countryCode: 'FM', lat: 6.91, lng: 158.16, tier: 3, continent: 'oceania' },
  { slug: 'ngerulmud', city: 'Ngerulmud', timezone: 'Pacific/Palau', country: 'Palau', countryCode: 'PW', lat: 7.50, lng: 134.62, tier: 3, continent: 'oceania' },
  { slug: 'majuro', city: 'Majuro', timezone: 'Pacific/Majuro', country: 'Marshall Islands', countryCode: 'MH', lat: 7.09, lng: 171.38, tier: 3, continent: 'oceania' },
  { slug: 'yaren', city: 'Yaren', timezone: 'Pacific/Nauru', country: 'Nauru', countryCode: 'NR', lat: -0.55, lng: 166.92, tier: 3, continent: 'oceania' },
  { slug: 'funafuti', city: 'Funafuti', timezone: 'Pacific/Funafuti', country: 'Tuvalu', countryCode: 'TV', lat: -8.52, lng: 179.19, tier: 3, continent: 'oceania' },

  // === PHASE 1: Additional Cities for G20 + Europe ===
  
  // UK - Additional Cities
  { slug: 'liverpool', city: 'Liverpool', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.41, lng: -2.98, tier: 2, continent: 'europe' },
  { slug: 'leeds', city: 'Leeds', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.80, lng: -1.55, tier: 2, continent: 'europe' },
  { slug: 'bristol', city: 'Bristol', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 51.45, lng: -2.59, tier: 2, continent: 'europe' },
  { slug: 'newcastle', city: 'Newcastle', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 54.98, lng: -1.61, tier: 2, continent: 'europe' },
  { slug: 'cardiff', city: 'Cardiff', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 51.48, lng: -3.18, tier: 2, continent: 'europe' },
  
  // Germany - Additional Cities
  { slug: 'hamburg', city: 'Hamburg', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 53.55, lng: 9.99, tier: 2, continent: 'europe' },
  { slug: 'cologne', city: 'Cologne', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.94, lng: 6.96, tier: 2, continent: 'europe' },
  { slug: 'stuttgart', city: 'Stuttgart', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 48.78, lng: 9.18, tier: 2, continent: 'europe' },
  { slug: 'dusseldorf', city: 'Düsseldorf', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.23, lng: 6.78, tier: 2, continent: 'europe' },
  
  // France - Additional Cities
  { slug: 'marseille', city: 'Marseille', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.30, lng: 5.37, tier: 2, continent: 'europe' },
  { slug: 'toulouse', city: 'Toulouse', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.60, lng: 1.44, tier: 2, continent: 'europe' },
  { slug: 'bordeaux', city: 'Bordeaux', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 44.84, lng: -0.58, tier: 2, continent: 'europe' },
  { slug: 'strasbourg', city: 'Strasbourg', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 48.57, lng: 7.75, tier: 2, continent: 'europe' },
  
  // Italy - Additional Cities
  { slug: 'naples', city: 'Naples', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 40.85, lng: 14.27, tier: 2, continent: 'europe' },
  { slug: 'turin', city: 'Turin', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.07, lng: 7.69, tier: 2, continent: 'europe' },
  { slug: 'bologna', city: 'Bologna', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 44.49, lng: 11.34, tier: 2, continent: 'europe' },
  
  // Spain - Additional Cities
  { slug: 'valencia', city: 'Valencia', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 39.47, lng: -0.38, tier: 2, continent: 'europe' },
  { slug: 'seville', city: 'Seville', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 37.39, lng: -5.98, tier: 2, continent: 'europe' },
  { slug: 'bilbao', city: 'Bilbao', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 43.26, lng: -2.93, tier: 2, continent: 'europe' },
  { slug: 'malaga', city: 'Málaga', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 36.72, lng: -4.42, tier: 2, continent: 'europe' },
  
  // Netherlands - Additional Cities
  { slug: 'rotterdam', city: 'Rotterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.92, lng: 4.48, tier: 2, continent: 'europe' },
  { slug: 'the-hague', city: 'The Hague', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.08, lng: 4.31, tier: 2, continent: 'europe' },
  { slug: 'utrecht', city: 'Utrecht', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.09, lng: 5.12, tier: 2, continent: 'europe' },
  
  // Belgium - Additional Cities
  { slug: 'antwerp', city: 'Antwerp', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 51.22, lng: 4.40, tier: 2, continent: 'europe' },
  { slug: 'ghent', city: 'Ghent', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 51.05, lng: 3.72, tier: 2, continent: 'europe' },
  
  // Switzerland - Additional Cities
  { slug: 'basel', city: 'Basel', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 47.56, lng: 7.59, tier: 2, continent: 'europe' },
  { slug: 'lausanne', city: 'Lausanne', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 46.52, lng: 6.63, tier: 2, continent: 'europe' },
  { slug: 'lucerne', city: 'Lucerne', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 47.05, lng: 8.31, tier: 3, continent: 'europe' },
  
  // Austria - Additional Cities
  { slug: 'salzburg', city: 'Salzburg', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 47.80, lng: 13.04, tier: 2, continent: 'europe' },
  { slug: 'innsbruck', city: 'Innsbruck', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 47.26, lng: 11.39, tier: 3, continent: 'europe' },
  { slug: 'graz', city: 'Graz', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 47.07, lng: 15.44, tier: 2, continent: 'europe' },
  
  // Poland - Additional Cities
  { slug: 'krakow', city: 'Kraków', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 50.06, lng: 19.94, tier: 2, continent: 'europe' },
  { slug: 'gdansk', city: 'Gdańsk', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 54.35, lng: 18.65, tier: 2, continent: 'europe' },
  { slug: 'wroclaw', city: 'Wrocław', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 51.11, lng: 17.04, tier: 2, continent: 'europe' },
  
  // Portugal - Additional Cities
  { slug: 'porto', city: 'Porto', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 41.16, lng: -8.63, tier: 2, continent: 'europe' },
  { slug: 'faro', city: 'Faro', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 37.02, lng: -7.93, tier: 3, continent: 'europe' },
  
  // Greece - Additional Cities
  { slug: 'thessaloniki', city: 'Thessaloniki', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 40.64, lng: 22.94, tier: 2, continent: 'europe' },
  { slug: 'heraklion', city: 'Heraklion', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 35.34, lng: 25.13, tier: 3, continent: 'europe' },
  { slug: 'patras', city: 'Patras', timezone: 'Europe/Athens', country: 'Greece', countryCode: 'GR', lat: 38.25, lng: 21.73, tier: 3, continent: 'europe' },
  
  // Sweden - Additional Cities
  { slug: 'gothenburg', city: 'Gothenburg', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 57.71, lng: 11.97, tier: 2, continent: 'europe' },
  { slug: 'malmo', city: 'Malmö', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 55.61, lng: 13.00, tier: 2, continent: 'europe' },
  { slug: 'uppsala', city: 'Uppsala', timezone: 'Europe/Stockholm', country: 'Sweden', countryCode: 'SE', lat: 59.86, lng: 17.64, tier: 3, continent: 'europe' },
  
  // Norway - Additional Cities
  { slug: 'bergen', city: 'Bergen', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 60.39, lng: 5.32, tier: 2, continent: 'europe' },
  { slug: 'trondheim', city: 'Trondheim', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 63.43, lng: 10.40, tier: 2, continent: 'europe' },
  { slug: 'stavanger', city: 'Stavanger', timezone: 'Europe/Oslo', country: 'Norway', countryCode: 'NO', lat: 58.97, lng: 5.73, tier: 3, continent: 'europe' },
  
  // Denmark - Additional Cities
  { slug: 'aarhus', city: 'Aarhus', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 56.16, lng: 10.20, tier: 2, continent: 'europe' },
  { slug: 'odense', city: 'Odense', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 55.40, lng: 10.39, tier: 3, continent: 'europe' },
  { slug: 'aalborg', city: 'Aalborg', timezone: 'Europe/Copenhagen', country: 'Denmark', countryCode: 'DK', lat: 57.05, lng: 9.92, tier: 3, continent: 'europe' },
  
  // Finland - Additional Cities
  { slug: 'tampere', city: 'Tampere', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 61.50, lng: 23.79, tier: 2, continent: 'europe' },
  { slug: 'turku', city: 'Turku', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 60.45, lng: 22.27, tier: 2, continent: 'europe' },
  { slug: 'oulu', city: 'Oulu', timezone: 'Europe/Helsinki', country: 'Finland', countryCode: 'FI', lat: 65.01, lng: 25.47, tier: 3, continent: 'europe' },
  
  // Ireland - Additional Cities
  { slug: 'cork', city: 'Cork', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 51.90, lng: -8.47, tier: 2, continent: 'europe' },
  { slug: 'galway', city: 'Galway', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 53.27, lng: -9.06, tier: 2, continent: 'europe' },
  { slug: 'limerick', city: 'Limerick', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 52.67, lng: -8.63, tier: 3, continent: 'europe' },
  
  // Czechia - Additional Cities
  { slug: 'brno', city: 'Brno', timezone: 'Europe/Prague', country: 'Czechia', countryCode: 'CZ', lat: 49.20, lng: 16.61, tier: 2, continent: 'europe' },
  { slug: 'ostrava', city: 'Ostrava', timezone: 'Europe/Prague', country: 'Czechia', countryCode: 'CZ', lat: 49.84, lng: 18.29, tier: 2, continent: 'europe' },
  { slug: 'pilsen', city: 'Pilsen', timezone: 'Europe/Prague', country: 'Czechia', countryCode: 'CZ', lat: 49.75, lng: 13.38, tier: 3, continent: 'europe' },
  
  // Hungary - Additional Cities
  { slug: 'debrecen', city: 'Debrecen', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 47.53, lng: 21.63, tier: 2, continent: 'europe' },
  { slug: 'szeged', city: 'Szeged', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 46.25, lng: 20.15, tier: 3, continent: 'europe' },
  { slug: 'pecs', city: 'Pécs', timezone: 'Europe/Budapest', country: 'Hungary', countryCode: 'HU', lat: 46.07, lng: 18.23, tier: 3, continent: 'europe' },
  
  // Romania - Additional Cities
  { slug: 'cluj-napoca', city: 'Cluj-Napoca', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 46.77, lng: 23.60, tier: 2, continent: 'europe' },
  { slug: 'timisoara', city: 'Timișoara', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 45.76, lng: 21.23, tier: 2, continent: 'europe' },
  { slug: 'constanta', city: 'Constanța', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 44.18, lng: 28.63, tier: 2, continent: 'europe' },
  
  // Turkey - Additional Cities
  { slug: 'antalya', city: 'Antalya', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 36.90, lng: 30.70, tier: 2, continent: 'europe' },
  { slug: 'bursa', city: 'Bursa', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 40.19, lng: 29.06, tier: 2, continent: 'europe' },
  { slug: 'adana', city: 'Adana', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.00, lng: 35.32, tier: 2, continent: 'europe' },
  { slug: 'gaziantep', city: 'Gaziantep', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.07, lng: 37.38, tier: 2, continent: 'europe' },
  { slug: 'konya', city: 'Konya', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 37.87, lng: 32.48, tier: 2, continent: 'europe' },
  
  // Russia - Additional Cities
  { slug: 'saint-petersburg', city: 'Saint Petersburg', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 59.93, lng: 30.34, tier: 1, continent: 'europe' },
  { slug: 'novosibirsk', city: 'Novosibirsk', timezone: 'Asia/Novosibirsk', country: 'Russia', countryCode: 'RU', lat: 55.04, lng: 82.93, tier: 2, continent: 'asia' },
  { slug: 'yekaterinburg', city: 'Yekaterinburg', timezone: 'Asia/Yekaterinburg', country: 'Russia', countryCode: 'RU', lat: 56.84, lng: 60.60, tier: 2, continent: 'asia' },
  { slug: 'kazan', city: 'Kazan', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 55.80, lng: 49.11, tier: 2, continent: 'europe' },
  { slug: 'sochi', city: 'Sochi', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 43.60, lng: 39.73, tier: 2, continent: 'europe' },
  { slug: 'vladivostok', city: 'Vladivostok', timezone: 'Asia/Vladivostok', country: 'Russia', countryCode: 'RU', lat: 43.12, lng: 131.89, tier: 2, continent: 'asia' },
  
  // Japan - Additional Cities
  { slug: 'yokohama', city: 'Yokohama', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.44, lng: 139.64, tier: 2, continent: 'asia' },
  { slug: 'nagoya', city: 'Nagoya', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.18, lng: 136.91, tier: 2, continent: 'asia' },
  { slug: 'sapporo', city: 'Sapporo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 43.06, lng: 141.35, tier: 2, continent: 'asia' },
  { slug: 'fukuoka', city: 'Fukuoka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 33.59, lng: 130.40, tier: 2, continent: 'asia' },
  { slug: 'kobe', city: 'Kobe', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.69, lng: 135.20, tier: 2, continent: 'asia' },
  
  // South Korea - Additional Cities
  { slug: 'busan', city: 'Busan', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.18, lng: 129.08, tier: 2, continent: 'asia' },
  { slug: 'incheon', city: 'Incheon', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.46, lng: 126.71, tier: 2, continent: 'asia' },
  { slug: 'daegu', city: 'Daegu', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.87, lng: 128.60, tier: 2, continent: 'asia' },
  
  // China - Additional Cities
  { slug: 'guangzhou', city: 'Guangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 23.13, lng: 113.26, tier: 1, continent: 'asia' },
  { slug: 'shenzhen', city: 'Shenzhen', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 22.54, lng: 114.06, tier: 1, continent: 'asia' },
  { slug: 'chengdu', city: 'Chengdu', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.57, lng: 104.07, tier: 2, continent: 'asia' },
  { slug: 'xian', city: "Xi'an", timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 34.34, lng: 108.94, tier: 2, continent: 'asia' },
  
  // India - Additional Cities
  { slug: 'chennai', city: 'Chennai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 13.08, lng: 80.27, tier: 2, continent: 'asia' },
  { slug: 'hyderabad', city: 'Hyderabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 17.39, lng: 78.49, tier: 2, continent: 'asia' },
  { slug: 'pune', city: 'Pune', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 18.52, lng: 73.86, tier: 2, continent: 'asia' },
  { slug: 'ahmedabad', city: 'Ahmedabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 23.02, lng: 72.57, tier: 2, continent: 'asia' },
  
  // Indonesia - Additional Cities
  { slug: 'surabaya', city: 'Surabaya', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -7.25, lng: 112.75, tier: 2, continent: 'asia' },
  { slug: 'bandung', city: 'Bandung', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.91, lng: 107.61, tier: 2, continent: 'asia' },
  { slug: 'medan', city: 'Medan', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: 3.59, lng: 98.67, tier: 2, continent: 'asia' },
  { slug: 'denpasar', city: 'Denpasar', timezone: 'Asia/Makassar', country: 'Indonesia', countryCode: 'ID', lat: -8.65, lng: 115.22, tier: 2, continent: 'asia' },
  
  // Saudi Arabia - Additional Cities
  { slug: 'jeddah', city: 'Jeddah', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 21.49, lng: 39.19, tier: 2, continent: 'asia' },
  { slug: 'dammam', city: 'Dammam', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 26.43, lng: 50.10, tier: 2, continent: 'asia' },
  { slug: 'medina', city: 'Medina', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 24.47, lng: 39.61, tier: 2, continent: 'asia' },
  
  // Australia - Additional Cities
  { slug: 'brisbane', city: 'Brisbane', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -27.47, lng: 153.03, tier: 2, continent: 'oceania' },
  { slug: 'perth', city: 'Perth', timezone: 'Australia/Perth', country: 'Australia', countryCode: 'AU', lat: -31.95, lng: 115.86, tier: 2, continent: 'oceania' },
  { slug: 'adelaide', city: 'Adelaide', timezone: 'Australia/Adelaide', country: 'Australia', countryCode: 'AU', lat: -34.93, lng: 138.60, tier: 2, continent: 'oceania' },
  { slug: 'gold-coast', city: 'Gold Coast', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -28.02, lng: 153.43, tier: 2, continent: 'oceania' },
  
  // Brazil - Additional Cities
  { slug: 'rio-de-janeiro', city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -22.91, lng: -43.17, tier: 1, continent: 'americas' },
  { slug: 'salvador', city: 'Salvador', timezone: 'America/Bahia', country: 'Brazil', countryCode: 'BR', lat: -12.97, lng: -38.50, tier: 2, continent: 'americas' },
  { slug: 'brasilia', city: 'Brasília', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -15.79, lng: -47.88, tier: 2, continent: 'americas' },
  { slug: 'fortaleza', city: 'Fortaleza', timezone: 'America/Fortaleza', country: 'Brazil', countryCode: 'BR', lat: -3.72, lng: -38.54, tier: 2, continent: 'americas' },
  { slug: 'belo-horizonte', city: 'Belo Horizonte', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -19.92, lng: -43.94, tier: 2, continent: 'americas' },
  { slug: 'recife', city: 'Recife', timezone: 'America/Recife', country: 'Brazil', countryCode: 'BR', lat: -8.05, lng: -34.88, tier: 2, continent: 'americas' },
  
  // Mexico - Additional Cities
  { slug: 'guadalajara', city: 'Guadalajara', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 20.67, lng: -103.35, tier: 2, continent: 'americas' },
  { slug: 'monterrey', city: 'Monterrey', timezone: 'America/Monterrey', country: 'Mexico', countryCode: 'MX', lat: 25.67, lng: -100.31, tier: 2, continent: 'americas' },
  
  // Argentina - Additional Cities
  { slug: 'cordoba-argentina', city: 'Córdoba', timezone: 'America/Argentina/Cordoba', country: 'Argentina', countryCode: 'AR', lat: -31.42, lng: -64.18, tier: 2, continent: 'americas' },
  { slug: 'rosario', city: 'Rosario', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR', lat: -32.95, lng: -60.65, tier: 2, continent: 'americas' },
  { slug: 'mendoza', city: 'Mendoza', timezone: 'America/Argentina/Mendoza', country: 'Argentina', countryCode: 'AR', lat: -32.89, lng: -68.83, tier: 2, continent: 'americas' },
  { slug: 'mar-del-plata', city: 'Mar del Plata', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR', lat: -38.00, lng: -57.55, tier: 3, continent: 'americas' },
  
  // South Africa - Additional Cities
  { slug: 'cape-town', city: 'Cape Town', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -33.93, lng: 18.42, tier: 2, continent: 'africa' },
  { slug: 'durban', city: 'Durban', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -29.86, lng: 31.02, tier: 2, continent: 'africa' },
  { slug: 'port-elizabeth', city: 'Port Elizabeth', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -33.96, lng: 25.60, tier: 2, continent: 'africa' },
  
  // Canada - Additional Cities
  { slug: 'calgary', city: 'Calgary', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA', lat: 51.05, lng: -114.07, tier: 2, continent: 'americas' },
  { slug: 'ottawa', city: 'Ottawa', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 45.42, lng: -75.70, tier: 2, continent: 'americas' },

  // ============ PHASE 1: CRITICAL EXPANSION (50+ cities) ============
  
  // INDIA - Additional Major Cities (8 new)
  { slug: 'surat', city: 'Surat', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 21.17, lng: 72.83, tier: 2, continent: 'asia' },
  { slug: 'jaipur', city: 'Jaipur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 26.92, lng: 75.79, tier: 2, continent: 'asia' },
  { slug: 'lucknow', city: 'Lucknow', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 26.85, lng: 80.95, tier: 2, continent: 'asia' },
  { slug: 'kanpur', city: 'Kanpur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 26.45, lng: 80.35, tier: 3, continent: 'asia' },
  { slug: 'nagpur', city: 'Nagpur', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 21.15, lng: 79.09, tier: 3, continent: 'asia' },
  { slug: 'indore', city: 'Indore', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 22.72, lng: 75.86, tier: 3, continent: 'asia' },
  { slug: 'patna', city: 'Patna', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 25.59, lng: 85.14, tier: 3, continent: 'asia' },
  { slug: 'bhopal', city: 'Bhopal', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 23.26, lng: 77.41, tier: 3, continent: 'asia' },
  { slug: 'visakhapatnam', city: 'Visakhapatnam', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 17.69, lng: 83.22, tier: 3, continent: 'asia' },
  { slug: 'vadodara', city: 'Vadodara', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 22.31, lng: 73.19, tier: 3, continent: 'asia' },
  { slug: 'ghaziabad', city: 'Ghaziabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 28.67, lng: 77.42, tier: 3, continent: 'asia' },
  { slug: 'ludhiana', city: 'Ludhiana', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 30.90, lng: 75.85, tier: 3, continent: 'asia' },
  { slug: 'agra', city: 'Agra', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 27.18, lng: 78.02, tier: 3, continent: 'asia' },
  { slug: 'nashik', city: 'Nashik', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 20.00, lng: 73.79, tier: 3, continent: 'asia' },
  { slug: 'coimbatore', city: 'Coimbatore', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 11.02, lng: 76.97, tier: 3, continent: 'asia' },
  { slug: 'kochi', city: 'Kochi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 9.93, lng: 76.27, tier: 3, continent: 'asia' },

  // CHINA - Additional Major Cities (10 new)
  { slug: 'chongqing', city: 'Chongqing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 29.56, lng: 106.55, tier: 2, continent: 'asia' },
  { slug: 'tianjin', city: 'Tianjin', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 39.14, lng: 117.18, tier: 2, continent: 'asia' },
  { slug: 'wuhan', city: 'Wuhan', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.59, lng: 114.31, tier: 2, continent: 'asia' },
  { slug: 'chengdu', city: 'Chengdu', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.57, lng: 104.07, tier: 2, continent: 'asia' },
  { slug: 'nanjing', city: 'Nanjing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 32.06, lng: 118.80, tier: 2, continent: 'asia' },
  { slug: 'xian', city: "Xi'an", timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 34.34, lng: 108.94, tier: 2, continent: 'asia' },
  { slug: 'hangzhou', city: 'Hangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.25, lng: 120.17, tier: 2, continent: 'asia' },
  { slug: 'suzhou', city: 'Suzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 31.30, lng: 120.62, tier: 3, continent: 'asia' },
  { slug: 'harbin', city: 'Harbin', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 45.80, lng: 126.53, tier: 3, continent: 'asia' },
  { slug: 'qingdao', city: 'Qingdao', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 36.07, lng: 120.38, tier: 3, continent: 'asia' },
  { slug: 'dalian', city: 'Dalian', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 38.91, lng: 121.60, tier: 3, continent: 'asia' },
  { slug: 'xiamen', city: 'Xiamen', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 24.48, lng: 118.09, tier: 3, continent: 'asia' },
  { slug: 'zhengzhou', city: 'Zhengzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 34.75, lng: 113.63, tier: 3, continent: 'asia' },
  { slug: 'changsha', city: 'Changsha', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 28.23, lng: 112.94, tier: 3, continent: 'asia' },

  // PAKISTAN - Major Cities (4 new)
  { slug: 'lahore', city: 'Lahore', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 31.55, lng: 74.34, tier: 2, continent: 'asia' },
  { slug: 'faisalabad', city: 'Faisalabad', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 31.42, lng: 73.09, tier: 3, continent: 'asia' },
  { slug: 'rawalpindi', city: 'Rawalpindi', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 33.60, lng: 73.04, tier: 3, continent: 'asia' },
  { slug: 'multan', city: 'Multan', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 30.20, lng: 71.45, tier: 3, continent: 'asia' },
  { slug: 'peshawar', city: 'Peshawar', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 34.01, lng: 71.58, tier: 3, continent: 'asia' },
  { slug: 'islamabad', city: 'Islamabad', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 33.69, lng: 73.06, tier: 2, continent: 'asia' },

  // BANGLADESH - Major Cities (3 new)
  { slug: 'chittagong', city: 'Chittagong', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 22.36, lng: 91.78, tier: 2, continent: 'asia' },
  { slug: 'khulna', city: 'Khulna', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 22.82, lng: 89.55, tier: 3, continent: 'asia' },
  { slug: 'rajshahi', city: 'Rajshahi', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 24.37, lng: 88.60, tier: 3, continent: 'asia' },
  { slug: 'sylhet', city: 'Sylhet', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 24.90, lng: 91.87, tier: 3, continent: 'asia' },

  // NIGERIA - Major Cities (5 new)
  { slug: 'lagos', city: 'Lagos', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 6.52, lng: 3.38, tier: 1, continent: 'africa' },
  { slug: 'kano', city: 'Kano', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 12.00, lng: 8.52, tier: 3, continent: 'africa' },
  { slug: 'ibadan', city: 'Ibadan', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 7.38, lng: 3.90, tier: 3, continent: 'africa' },
  { slug: 'abuja', city: 'Abuja', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 9.07, lng: 7.40, tier: 2, continent: 'africa' },
  { slug: 'port-harcourt', city: 'Port Harcourt', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 4.82, lng: 7.03, tier: 3, continent: 'africa' },
  { slug: 'benin-city', city: 'Benin City', timezone: 'Africa/Lagos', country: 'Nigeria', countryCode: 'NG', lat: 6.34, lng: 5.63, tier: 3, continent: 'africa' },

  // INDONESIA - Additional Cities (4 new)
  { slug: 'bandung', city: 'Bandung', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.91, lng: 107.61, tier: 2, continent: 'asia' },
  { slug: 'medan', city: 'Medan', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: 3.59, lng: 98.67, tier: 2, continent: 'asia' },
  { slug: 'semarang', city: 'Semarang', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.97, lng: 110.42, tier: 3, continent: 'asia' },
  { slug: 'makassar', city: 'Makassar', timezone: 'Asia/Makassar', country: 'Indonesia', countryCode: 'ID', lat: -5.14, lng: 119.42, tier: 3, continent: 'asia' },
  { slug: 'palembang', city: 'Palembang', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -2.99, lng: 104.76, tier: 3, continent: 'asia' },
  { slug: 'yogyakarta', city: 'Yogyakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -7.80, lng: 110.36, tier: 3, continent: 'asia' },

  // PHILIPPINES - Major Cities (3 new)
  { slug: 'cebu', city: 'Cebu City', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 10.32, lng: 123.89, tier: 2, continent: 'asia' },
  { slug: 'davao', city: 'Davao', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 7.19, lng: 125.46, tier: 2, continent: 'asia' },
  { slug: 'quezon-city', city: 'Quezon City', timezone: 'Asia/Manila', country: 'Philippines', countryCode: 'PH', lat: 14.68, lng: 121.04, tier: 2, continent: 'asia' },

  // VIETNAM - Additional Cities (3 new)
  { slug: 'da-nang', city: 'Da Nang', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 16.05, lng: 108.22, tier: 2, continent: 'asia' },
  { slug: 'can-tho', city: 'Can Tho', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 10.03, lng: 105.78, tier: 3, continent: 'asia' },
  { slug: 'hai-phong', city: 'Hai Phong', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 20.86, lng: 106.68, tier: 3, continent: 'asia' },

  // EGYPT - Additional Cities (3 new)
  { slug: 'alexandria', city: 'Alexandria', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 31.20, lng: 29.92, tier: 2, continent: 'africa' },
  { slug: 'giza', city: 'Giza', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 30.01, lng: 31.21, tier: 2, continent: 'africa' },
  { slug: 'sharm-el-sheikh', city: 'Sharm el-Sheikh', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 27.92, lng: 34.33, tier: 3, continent: 'africa' },
  { slug: 'luxor', city: 'Luxor', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 25.69, lng: 32.64, tier: 3, continent: 'africa' },

  // ETHIOPIA - Additional Cities (2 new)
  { slug: 'dire-dawa', city: 'Dire Dawa', timezone: 'Africa/Addis_Ababa', country: 'Ethiopia', countryCode: 'ET', lat: 9.60, lng: 41.85, tier: 3, continent: 'africa' },
  { slug: 'mekelle', city: 'Mekelle', timezone: 'Africa/Addis_Ababa', country: 'Ethiopia', countryCode: 'ET', lat: 13.50, lng: 39.47, tier: 3, continent: 'africa' },

  // KENYA - Additional Cities (2 new)
  { slug: 'mombasa', city: 'Mombasa', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE', lat: -4.05, lng: 39.67, tier: 2, continent: 'africa' },
  { slug: 'kisumu', city: 'Kisumu', timezone: 'Africa/Nairobi', country: 'Kenya', countryCode: 'KE', lat: -0.10, lng: 34.75, tier: 3, continent: 'africa' },

  // MOROCCO - Additional Cities (2 new)
  { slug: 'marrakech', city: 'Marrakech', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 31.63, lng: -8.00, tier: 2, continent: 'africa' },
  { slug: 'fes', city: 'Fes', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 34.03, lng: -5.00, tier: 3, continent: 'africa' },

  // GHANA - Additional Cities (2 new)
  { slug: 'kumasi', city: 'Kumasi', timezone: 'Africa/Accra', country: 'Ghana', countryCode: 'GH', lat: 6.69, lng: -1.62, tier: 3, continent: 'africa' },
  { slug: 'tamale', city: 'Tamale', timezone: 'Africa/Accra', country: 'Ghana', countryCode: 'GH', lat: 9.40, lng: -0.84, tier: 3, continent: 'africa' },

  // TANZANIA - Additional Cities (2 new)
  { slug: 'dar-es-salaam', city: 'Dar es Salaam', timezone: 'Africa/Dar_es_Salaam', country: 'Tanzania', countryCode: 'TZ', lat: -6.79, lng: 39.28, tier: 2, continent: 'africa' },
  { slug: 'zanzibar', city: 'Zanzibar City', timezone: 'Africa/Dar_es_Salaam', country: 'Tanzania', countryCode: 'TZ', lat: -6.17, lng: 39.19, tier: 3, continent: 'africa' },

  // JAPAN - Additional Cities (3 new)
  { slug: 'fukuoka', city: 'Fukuoka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 33.59, lng: 130.40, tier: 2, continent: 'asia' },
  { slug: 'sapporo', city: 'Sapporo', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 43.06, lng: 141.35, tier: 2, continent: 'asia' },
  { slug: 'kobe', city: 'Kobe', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.69, lng: 135.20, tier: 2, continent: 'asia' },
  { slug: 'nagoya', city: 'Nagoya', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.18, lng: 136.91, tier: 2, continent: 'asia' },

  // SOUTH KOREA - Additional Cities (2 new)
  { slug: 'daegu', city: 'Daegu', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.87, lng: 128.60, tier: 2, continent: 'asia' },
  { slug: 'daejeon', city: 'Daejeon', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 36.35, lng: 127.38, tier: 3, continent: 'asia' },

  // TAIWAN - Additional Cities (2 new)
  { slug: 'kaohsiung', city: 'Kaohsiung', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW', lat: 22.62, lng: 120.31, tier: 2, continent: 'asia' },
  { slug: 'taichung', city: 'Taichung', timezone: 'Asia/Taipei', country: 'Taiwan', countryCode: 'TW', lat: 24.15, lng: 120.67, tier: 2, continent: 'asia' },

  // MALAYSIA - Additional Cities (2 new)
  { slug: 'penang', city: 'George Town', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY', lat: 5.41, lng: 100.34, tier: 2, continent: 'asia' },
  { slug: 'johor-bahru', city: 'Johor Bahru', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY', lat: 1.49, lng: 103.74, tier: 3, continent: 'asia' },

  // THAILAND - Additional Cities (2 new)
  { slug: 'chiang-mai', city: 'Chiang Mai', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 18.79, lng: 98.98, tier: 2, continent: 'asia' },
  { slug: 'pattaya', city: 'Pattaya', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 12.93, lng: 100.88, tier: 3, continent: 'asia' },

  // IRAN - Tehran (if missing)
  { slug: 'tehran', city: 'Tehran', timezone: 'Asia/Tehran', country: 'Iran', countryCode: 'IR', lat: 35.69, lng: 51.39, tier: 1, continent: 'asia' },
  { slug: 'mashhad', city: 'Mashhad', timezone: 'Asia/Tehran', country: 'Iran', countryCode: 'IR', lat: 36.30, lng: 59.60, tier: 2, continent: 'asia' },
  { slug: 'isfahan', city: 'Isfahan', timezone: 'Asia/Tehran', country: 'Iran', countryCode: 'IR', lat: 32.65, lng: 51.68, tier: 3, continent: 'asia' },

  // IRAQ - Major Cities
  { slug: 'baghdad', city: 'Baghdad', timezone: 'Asia/Baghdad', country: 'Iraq', countryCode: 'IQ', lat: 33.31, lng: 44.37, tier: 2, continent: 'asia' },
  { slug: 'basra', city: 'Basra', timezone: 'Asia/Baghdad', country: 'Iraq', countryCode: 'IQ', lat: 30.51, lng: 47.81, tier: 3, continent: 'asia' },

  // ALGERIA - Additional Cities
  { slug: 'algiers', city: 'Algiers', timezone: 'Africa/Algiers', country: 'Algeria', countryCode: 'DZ', lat: 36.75, lng: 3.06, tier: 2, continent: 'africa' },
  { slug: 'oran', city: 'Oran', timezone: 'Africa/Algiers', country: 'Algeria', countryCode: 'DZ', lat: 35.70, lng: -0.63, tier: 3, continent: 'africa' },

  // SUDAN - Khartoum
  { slug: 'khartoum', city: 'Khartoum', timezone: 'Africa/Khartoum', country: 'Sudan', countryCode: 'SD', lat: 15.50, lng: 32.56, tier: 2, continent: 'africa' },

  // UGANDA - Kampala
  { slug: 'kampala', city: 'Kampala', timezone: 'Africa/Kampala', country: 'Uganda', countryCode: 'UG', lat: 0.35, lng: 32.58, tier: 2, continent: 'africa' },

  // ANGOLA - Luanda
  { slug: 'luanda', city: 'Luanda', timezone: 'Africa/Luanda', country: 'Angola', countryCode: 'AO', lat: -8.84, lng: 13.23, tier: 2, continent: 'africa' },

  // MOZAMBIQUE - Maputo
  { slug: 'maputo', city: 'Maputo', timezone: 'Africa/Maputo', country: 'Mozambique', countryCode: 'MZ', lat: -25.97, lng: 32.58, tier: 3, continent: 'africa' },

  // COTE D'IVOIRE - Abidjan
  { slug: 'abidjan', city: 'Abidjan', timezone: 'Africa/Abidjan', country: "Côte d'Ivoire", countryCode: 'CI', lat: 5.36, lng: -4.01, tier: 2, continent: 'africa' },

  // SENEGAL - Dakar
  { slug: 'dakar', city: 'Dakar', timezone: 'Africa/Dakar', country: 'Senegal', countryCode: 'SN', lat: 14.69, lng: -17.44, tier: 2, continent: 'africa' },

  // CAMEROON - Major Cities
  { slug: 'douala', city: 'Douala', timezone: 'Africa/Douala', country: 'Cameroon', countryCode: 'CM', lat: 4.05, lng: 9.70, tier: 3, continent: 'africa' },
  { slug: 'yaounde', city: 'Yaoundé', timezone: 'Africa/Douala', country: 'Cameroon', countryCode: 'CM', lat: 3.87, lng: 11.52, tier: 3, continent: 'africa' },

  // DR CONGO - Kinshasa
  { slug: 'kinshasa', city: 'Kinshasa', timezone: 'Africa/Kinshasa', country: 'DR Congo', countryCode: 'CD', lat: -4.32, lng: 15.31, tier: 2, continent: 'africa' },

  // ZIMBABWE - Harare
  { slug: 'harare', city: 'Harare', timezone: 'Africa/Harare', country: 'Zimbabwe', countryCode: 'ZW', lat: -17.83, lng: 31.05, tier: 3, continent: 'africa' },

  // ZAMBIA - Lusaka
  { slug: 'lusaka', city: 'Lusaka', timezone: 'Africa/Lusaka', country: 'Zambia', countryCode: 'ZM', lat: -15.39, lng: 28.32, tier: 3, continent: 'africa' },

  // USA - Additional Major Cities
  { slug: 'san-antonio', city: 'San Antonio', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 29.42, lng: -98.49, tier: 3, continent: 'americas' },
  { slug: 'jacksonville', city: 'Jacksonville', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 30.33, lng: -81.66, tier: 3, continent: 'americas' },
  { slug: 'charlotte', city: 'Charlotte', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 35.23, lng: -80.84, tier: 3, continent: 'americas' },
  { slug: 'columbus', city: 'Columbus', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 39.96, lng: -83.00, tier: 3, continent: 'americas' },
  { slug: 'indianapolis', city: 'Indianapolis', timezone: 'America/Indiana/Indianapolis', country: 'United States', countryCode: 'US', lat: 39.77, lng: -86.16, tier: 3, continent: 'americas' },
  { slug: 'fort-worth', city: 'Fort Worth', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 32.75, lng: -97.33, tier: 3, continent: 'americas' },

  // BRAZIL - Additional Cities
  { slug: 'curitiba', city: 'Curitiba', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -25.43, lng: -49.27, tier: 2, continent: 'americas' },
  { slug: 'porto-alegre', city: 'Porto Alegre', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -30.03, lng: -51.23, tier: 2, continent: 'americas' },
  { slug: 'manaus', city: 'Manaus', timezone: 'America/Manaus', country: 'Brazil', countryCode: 'BR', lat: -3.12, lng: -60.02, tier: 3, continent: 'americas' },

  // COLOMBIA - Additional Cities
  { slug: 'medellin', city: 'Medellín', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 6.25, lng: -75.57, tier: 2, continent: 'americas' },
  { slug: 'cali', city: 'Cali', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 3.45, lng: -76.53, tier: 2, continent: 'americas' },
  { slug: 'barranquilla', city: 'Barranquilla', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 10.96, lng: -74.80, tier: 3, continent: 'americas' },

  // PERU - Additional Cities
  { slug: 'arequipa', city: 'Arequipa', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE', lat: -16.41, lng: -71.54, tier: 3, continent: 'americas' },
  { slug: 'cusco', city: 'Cusco', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE', lat: -13.52, lng: -71.97, tier: 3, continent: 'americas' },

  // CHILE - Additional Cities
  { slug: 'valparaiso', city: 'Valparaíso', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL', lat: -33.05, lng: -71.62, tier: 3, continent: 'americas' },

  // VENEZUELA - Additional Cities
  { slug: 'maracaibo', city: 'Maracaibo', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE', lat: 10.67, lng: -71.64, tier: 3, continent: 'americas' },
  { slug: 'valencia-venezuela', city: 'Valencia', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE', lat: 10.16, lng: -67.99, tier: 3, continent: 'americas' },

  // AUSTRALIA - Additional Cities
  { slug: 'gold-coast', city: 'Gold Coast', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -28.02, lng: 153.43, tier: 3, continent: 'oceania' },
  { slug: 'canberra', city: 'Canberra', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU', lat: -35.28, lng: 149.13, tier: 2, continent: 'oceania' },
  { slug: 'newcastle', city: 'Newcastle', timezone: 'Australia/Sydney', country: 'Australia', countryCode: 'AU', lat: -32.93, lng: 151.78, tier: 3, continent: 'oceania' },

  // NEW ZEALAND - Additional Cities
  { slug: 'queenstown', city: 'Queenstown', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ', lat: -45.03, lng: 168.66, tier: 3, continent: 'oceania' },

  // FIJI - Suva
  { slug: 'suva', city: 'Suva', timezone: 'Pacific/Fiji', country: 'Fiji', countryCode: 'FJ', lat: -18.14, lng: 178.44, tier: 3, continent: 'oceania' },

  // PAPUA NEW GUINEA - Port Moresby
  { slug: 'port-moresby', city: 'Port Moresby', timezone: 'Pacific/Port_Moresby', country: 'Papua New Guinea', countryCode: 'PG', lat: -9.44, lng: 147.18, tier: 3, continent: 'oceania' },
]
