export interface CityInfo {
  currency: string
  currencySymbol: string
  population: string
  metroPopulation?: string
  phoneCode: string
  language: string
  climate: string
  attractions: string[]
  demographics: string
  seoContent?: {
    intro: string
    timezoneFacts: string
    bestTimeToVisit: string
    businessHours: string
    timeDifference?: string
    daylightSaving?: string
    localTips?: string
    transportation?: string
    emergencyNumbers?: string
    publicHolidays?: string
  }
}

export interface Country {
  code: string
  name: string
  slug: string
  capital: string
  population: string
  currency: string
  currencySymbol: string
  phoneCode: string
  languages: string[]
  continent: 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'
  description: string
  timezones: string[]
}

export interface City {
  slug: string
  city: string
  timezone: string
  country: string
  countryCode: string
  lat: number
  lng: number
  tier?: number // 1 = Global hub, 2 = Major city, 3 = Notable city
  continent?: 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'
  info?: CityInfo
}

// Country data for SEO pages
export const countries: Country[] = [
  // Americas
  {
    code: 'US', name: 'United States', slug: 'united-states', capital: 'Washington D.C.',
    population: '331M', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+1',
    languages: ['English', 'Spanish'], continent: 'americas',
    description: 'The United States spans six time zones from Eastern to Hawaii-Aleutian. Major business hubs include New York (EST), Chicago (CST), Denver (MST), and Los Angeles (PST). The country observes Daylight Saving Time from March to November.',
    timezones: ['EST (UTC-5)', 'CST (UTC-6)', 'MST (UTC-7)', 'PST (UTC-8)', 'AKST (UTC-9)', 'HST (UTC-10)']
  },
  {
    code: 'CA', name: 'Canada', slug: 'canada', capital: 'Ottawa',
    population: '38M', currency: 'Canadian Dollar', currencySymbol: 'C$', phoneCode: '+1',
    languages: ['English', 'French'], continent: 'americas',
    description: 'Canada covers six time zones from Newfoundland to Pacific. Most provinces observe Daylight Saving Time. Quebec and Ontario use Eastern Time, while British Columbia follows Pacific Time.',
    timezones: ['NST (UTC-3:30)', 'AST (UTC-4)', 'EST (UTC-5)', 'CST (UTC-6)', 'MST (UTC-7)', 'PST (UTC-8)']
  },
  {
    code: 'MX', name: 'Mexico', slug: 'mexico', capital: 'Mexico City',
    population: '128M', currency: 'Mexican Peso', currencySymbol: '$', phoneCode: '+52',
    languages: ['Spanish'], continent: 'americas',
    description: 'Mexico spans four time zones. Most of the country, including Mexico City, uses Central Time. The northwestern states use Pacific Time, while Quintana Roo uses Eastern Time year-round.',
    timezones: ['EST (UTC-5)', 'CST (UTC-6)', 'MST (UTC-7)', 'PST (UTC-8)']
  },
  {
    code: 'BR', name: 'Brazil', slug: 'brazil', capital: 'Brasília',
    population: '214M', currency: 'Brazilian Real', currencySymbol: 'R$', phoneCode: '+55',
    languages: ['Portuguese'], continent: 'americas',
    description: 'Brazil spans four time zones. São Paulo and Rio de Janeiro use Brasília Time (BRT). The western Amazon region is two hours behind. Brazil no longer observes Daylight Saving Time.',
    timezones: ['BRT (UTC-3)', 'AMT (UTC-4)', 'ACT (UTC-5)']
  },
  {
    code: 'AR', name: 'Argentina', slug: 'argentina', capital: 'Buenos Aires',
    population: '45M', currency: 'Argentine Peso', currencySymbol: '$', phoneCode: '+54',
    languages: ['Spanish'], continent: 'americas',
    description: 'Argentina uses a single time zone (ART) across the entire country. Despite its large size, Argentina does not observe Daylight Saving Time. Buenos Aires is the main business and cultural hub.',
    timezones: ['ART (UTC-3)']
  },
  // Europe
  {
    code: 'GB', name: 'United Kingdom', slug: 'united-kingdom', capital: 'London',
    population: '67M', currency: 'British Pound', currencySymbol: '£', phoneCode: '+44',
    languages: ['English', 'Welsh', 'Scottish Gaelic'], continent: 'europe',
    description: 'The United Kingdom uses Greenwich Mean Time (GMT) in winter and British Summer Time (BST/UTC+1) from late March to late October. London is a major global financial center.',
    timezones: ['GMT (UTC+0)', 'BST (UTC+1)']
  },
  {
    code: 'DE', name: 'Germany', slug: 'germany', capital: 'Berlin',
    population: '83M', currency: 'Euro', currencySymbol: '€', phoneCode: '+49',
    languages: ['German'], continent: 'europe',
    description: 'Germany uses Central European Time (CET) and observes Daylight Saving Time. As Europe\'s largest economy, Germany is a key business hub with Frankfurt as its financial center.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'FR', name: 'France', slug: 'france', capital: 'Paris',
    population: '67M', currency: 'Euro', currencySymbol: '€', phoneCode: '+33',
    languages: ['French'], continent: 'europe',
    description: 'Metropolitan France uses Central European Time. Including overseas territories, France spans 12 time zones - more than any other country. Paris is a global center for art, fashion, and culture.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'IT', name: 'Italy', slug: 'italy', capital: 'Rome',
    population: '60M', currency: 'Euro', currencySymbol: '€', phoneCode: '+39',
    languages: ['Italian'], continent: 'europe',
    description: 'Italy uses Central European Time throughout the country. Rome, Milan, and Florence are major cultural and business centers. Italy observes Daylight Saving Time from March to October.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'ES', name: 'Spain', slug: 'spain', capital: 'Madrid',
    population: '47M', currency: 'Euro', currencySymbol: '€', phoneCode: '+34',
    languages: ['Spanish', 'Catalan', 'Basque', 'Galician'], continent: 'europe',
    description: 'Spain uses Central European Time despite being geographically aligned with GMT. The Canary Islands use Western European Time (UTC+0). Spain observes Daylight Saving Time.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)', 'WET (UTC+0)']
  },
  {
    code: 'NL', name: 'Netherlands', slug: 'netherlands', capital: 'Amsterdam',
    population: '17M', currency: 'Euro', currencySymbol: '€', phoneCode: '+31',
    languages: ['Dutch'], continent: 'europe',
    description: 'The Netherlands uses Central European Time. Amsterdam is a major European business hub and tourist destination. The country observes Daylight Saving Time.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'TR', name: 'Turkey', slug: 'turkey', capital: 'Ankara',
    population: '85M', currency: 'Turkish Lira', currencySymbol: '₺', phoneCode: '+90',
    languages: ['Turkish'], continent: 'europe',
    description: 'Turkey uses a single time zone (TRT/UTC+3) year-round and no longer observes Daylight Saving Time since 2016. Istanbul is the largest city and main business hub, while Ankara is the capital.',
    timezones: ['TRT (UTC+3)']
  },
  {
    code: 'RU', name: 'Russia', slug: 'russia', capital: 'Moscow',
    population: '144M', currency: 'Russian Ruble', currencySymbol: '₽', phoneCode: '+7',
    languages: ['Russian'], continent: 'europe',
    description: 'Russia spans 11 time zones from Kaliningrad (UTC+2) to Kamchatka (UTC+12). Moscow Time is the reference for much of European Russia. Russia does not observe Daylight Saving Time.',
    timezones: ['KALT (UTC+2)', 'MSK (UTC+3)', 'SAMT (UTC+4)', 'YEKT (UTC+5)', 'OMST (UTC+6)', 'KRAT (UTC+7)', 'IRKT (UTC+8)', 'YAKT (UTC+9)', 'VLAT (UTC+10)', 'MAGT (UTC+11)', 'PETT (UTC+12)']
  },
  {
    code: 'PL', name: 'Poland', slug: 'poland', capital: 'Warsaw',
    population: '38M', currency: 'Polish Zloty', currencySymbol: 'zł', phoneCode: '+48',
    languages: ['Polish'], continent: 'europe',
    description: 'Poland uses Central European Time and observes Daylight Saving Time. Warsaw is the capital and largest city, serving as a major business center in Central Europe.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'SE', name: 'Sweden', slug: 'sweden', capital: 'Stockholm',
    population: '10M', currency: 'Swedish Krona', currencySymbol: 'kr', phoneCode: '+46',
    languages: ['Swedish'], continent: 'europe',
    description: 'Sweden uses Central European Time. Stockholm is the capital and home to many tech companies. In summer, northern Sweden experiences midnight sun, while winters have very short days.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'CH', name: 'Switzerland', slug: 'switzerland', capital: 'Bern',
    population: '8.7M', currency: 'Swiss Franc', currencySymbol: 'CHF', phoneCode: '+41',
    languages: ['German', 'French', 'Italian', 'Romansh'], continent: 'europe',
    description: 'Switzerland uses Central European Time. Zurich and Geneva are major financial centers. The country is known for precision timekeeping and is home to many luxury watch manufacturers.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'AT', name: 'Austria', slug: 'austria', capital: 'Vienna',
    population: '9M', currency: 'Euro', currencySymbol: '€', phoneCode: '+43',
    languages: ['German'], continent: 'europe',
    description: 'Austria uses Central European Time. Vienna, the capital, is a major cultural center and hosts many international organizations. Austria observes Daylight Saving Time.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'BE', name: 'Belgium', slug: 'belgium', capital: 'Brussels',
    population: '11.5M', currency: 'Euro', currencySymbol: '€', phoneCode: '+32',
    languages: ['Dutch', 'French', 'German'], continent: 'europe',
    description: 'Belgium uses Central European Time. Brussels is the de facto capital of the European Union and hosts NATO headquarters. The country observes Daylight Saving Time.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'PT', name: 'Portugal', slug: 'portugal', capital: 'Lisbon',
    population: '10M', currency: 'Euro', currencySymbol: '€', phoneCode: '+351',
    languages: ['Portuguese'], continent: 'europe',
    description: 'Mainland Portugal uses Western European Time (same as UK). The Azores are one hour behind. Portugal observes Daylight Saving Time. Lisbon is a popular tourist and business destination.',
    timezones: ['WET (UTC+0)', 'WEST (UTC+1)', 'AZOT (UTC-1)']
  },
  {
    code: 'GR', name: 'Greece', slug: 'greece', capital: 'Athens',
    population: '10.7M', currency: 'Euro', currencySymbol: '€', phoneCode: '+30',
    languages: ['Greek'], continent: 'europe',
    description: 'Greece uses Eastern European Time (UTC+2). Athens is the capital and largest city. The country observes Daylight Saving Time, switching to EEST (UTC+3) in summer.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  // Asia
  {
    code: 'JP', name: 'Japan', slug: 'japan', capital: 'Tokyo',
    population: '125M', currency: 'Japanese Yen', currencySymbol: '¥', phoneCode: '+81',
    languages: ['Japanese'], continent: 'asia',
    description: 'Japan uses a single time zone (JST/UTC+9) and does not observe Daylight Saving Time. Tokyo is the world\'s most populous metropolitan area and a global financial center.',
    timezones: ['JST (UTC+9)']
  },
  {
    code: 'CN', name: 'China', slug: 'china', capital: 'Beijing',
    population: '1.4B', currency: 'Chinese Yuan', currencySymbol: '¥', phoneCode: '+86',
    languages: ['Mandarin Chinese'], continent: 'asia',
    description: 'Despite its vast size, China uses a single time zone (CST/UTC+8) across the entire country. This means western regions like Xinjiang experience late sunrises. China does not observe Daylight Saving Time.',
    timezones: ['CST (UTC+8)']
  },
  {
    code: 'IN', name: 'India', slug: 'india', capital: 'New Delhi',
    population: '1.4B', currency: 'Indian Rupee', currencySymbol: '₹', phoneCode: '+91',
    languages: ['Hindi', 'English'], continent: 'asia',
    description: 'India uses a single time zone (IST/UTC+5:30) - one of few countries with a 30-minute offset. India does not observe Daylight Saving Time. Mumbai and Delhi are major business hubs.',
    timezones: ['IST (UTC+5:30)']
  },
  {
    code: 'AE', name: 'United Arab Emirates', slug: 'united-arab-emirates', capital: 'Abu Dhabi',
    population: '10M', currency: 'UAE Dirham', currencySymbol: 'د.إ', phoneCode: '+971',
    languages: ['Arabic', 'English'], continent: 'asia',
    description: 'The UAE uses Gulf Standard Time (UTC+4) year-round with no Daylight Saving Time. Dubai is a major global business and tourism hub, while Abu Dhabi is the capital.',
    timezones: ['GST (UTC+4)']
  },
  {
    code: 'SG', name: 'Singapore', slug: 'singapore', capital: 'Singapore',
    population: '5.9M', currency: 'Singapore Dollar', currencySymbol: 'S$', phoneCode: '+65',
    languages: ['English', 'Mandarin', 'Malay', 'Tamil'], continent: 'asia',
    description: 'Singapore uses Singapore Standard Time (UTC+8). As a city-state, it has a single timezone. Singapore is a major global financial center and shipping hub.',
    timezones: ['SGT (UTC+8)']
  },
  {
    code: 'HK', name: 'Hong Kong', slug: 'hong-kong', capital: 'Hong Kong',
    population: '7.4M', currency: 'Hong Kong Dollar', currencySymbol: 'HK$', phoneCode: '+852',
    languages: ['Cantonese', 'English'], continent: 'asia',
    description: 'Hong Kong uses Hong Kong Time (UTC+8), the same as mainland China. It does not observe Daylight Saving Time. Hong Kong is a major financial center connecting East and West.',
    timezones: ['HKT (UTC+8)']
  },
  {
    code: 'KR', name: 'South Korea', slug: 'south-korea', capital: 'Seoul',
    population: '52M', currency: 'South Korean Won', currencySymbol: '₩', phoneCode: '+82',
    languages: ['Korean'], continent: 'asia',
    description: 'South Korea uses Korea Standard Time (UTC+9). Seoul is a major tech and business hub, home to Samsung, Hyundai, and LG. South Korea does not observe Daylight Saving Time.',
    timezones: ['KST (UTC+9)']
  },
  {
    code: 'TH', name: 'Thailand', slug: 'thailand', capital: 'Bangkok',
    population: '70M', currency: 'Thai Baht', currencySymbol: '฿', phoneCode: '+66',
    languages: ['Thai'], continent: 'asia',
    description: 'Thailand uses Indochina Time (UTC+7) throughout the country. Bangkok is the capital and main business center. Thailand does not observe Daylight Saving Time.',
    timezones: ['ICT (UTC+7)']
  },
  {
    code: 'ID', name: 'Indonesia', slug: 'indonesia', capital: 'Jakarta',
    population: '273M', currency: 'Indonesian Rupiah', currencySymbol: 'Rp', phoneCode: '+62',
    languages: ['Indonesian'], continent: 'asia',
    description: 'Indonesia spans three time zones: Western (UTC+7), Central (UTC+8), and Eastern (UTC+9). Jakarta and Bali use different time zones. Indonesia does not observe Daylight Saving Time.',
    timezones: ['WIB (UTC+7)', 'WITA (UTC+8)', 'WIT (UTC+9)']
  },
  {
    code: 'MY', name: 'Malaysia', slug: 'malaysia', capital: 'Kuala Lumpur',
    population: '32M', currency: 'Malaysian Ringgit', currencySymbol: 'RM', phoneCode: '+60',
    languages: ['Malay', 'English'], continent: 'asia',
    description: 'Malaysia uses Malaysia Standard Time (UTC+8) across both Peninsular Malaysia and East Malaysia. Kuala Lumpur is the capital and main business center.',
    timezones: ['MYT (UTC+8)']
  },
  {
    code: 'PH', name: 'Philippines', slug: 'philippines', capital: 'Manila',
    population: '110M', currency: 'Philippine Peso', currencySymbol: '₱', phoneCode: '+63',
    languages: ['Filipino', 'English'], continent: 'asia',
    description: 'The Philippines uses Philippine Standard Time (UTC+8). Manila is the capital and main business hub. The country has a large English-speaking population and is a major BPO destination.',
    timezones: ['PHT (UTC+8)']
  },
  {
    code: 'VN', name: 'Vietnam', slug: 'vietnam', capital: 'Hanoi',
    population: '98M', currency: 'Vietnamese Dong', currencySymbol: '₫', phoneCode: '+84',
    languages: ['Vietnamese'], continent: 'asia',
    description: 'Vietnam uses Indochina Time (UTC+7) throughout the country. Ho Chi Minh City is the largest city and business hub, while Hanoi is the capital.',
    timezones: ['ICT (UTC+7)']
  },
  {
    code: 'SA', name: 'Saudi Arabia', slug: 'saudi-arabia', capital: 'Riyadh',
    population: '35M', currency: 'Saudi Riyal', currencySymbol: 'ر.س', phoneCode: '+966',
    languages: ['Arabic'], continent: 'asia',
    description: 'Saudi Arabia uses Arabia Standard Time (UTC+3) year-round. Riyadh is the capital, while Jeddah is the main port city. Saudi Arabia does not observe Daylight Saving Time.',
    timezones: ['AST (UTC+3)']
  },
  {
    code: 'IL', name: 'Israel', slug: 'israel', capital: 'Jerusalem',
    population: '9.2M', currency: 'Israeli Shekel', currencySymbol: '₪', phoneCode: '+972',
    languages: ['Hebrew', 'Arabic'], continent: 'asia',
    description: 'Israel uses Israel Standard Time (UTC+2) and observes Daylight Saving Time (IDT/UTC+3). Tel Aviv is the main business center, while Jerusalem is the capital.',
    timezones: ['IST (UTC+2)', 'IDT (UTC+3)']
  },
  {
    code: 'QA', name: 'Qatar', slug: 'qatar', capital: 'Doha',
    population: '2.9M', currency: 'Qatari Riyal', currencySymbol: 'ر.ق', phoneCode: '+974',
    languages: ['Arabic', 'English'], continent: 'asia',
    description: 'Qatar uses Arabia Standard Time (UTC+3) year-round. Doha is the capital and main city, hosting major international events and serving as a regional business hub.',
    timezones: ['AST (UTC+3)']
  },
  // Africa
  {
    code: 'EG', name: 'Egypt', slug: 'egypt', capital: 'Cairo',
    population: '104M', currency: 'Egyptian Pound', currencySymbol: 'E£', phoneCode: '+20',
    languages: ['Arabic'], continent: 'africa',
    description: 'Egypt uses Eastern European Time (UTC+2). Cairo is the largest city in Africa and the Arab world. Egypt resumed Daylight Saving Time in 2023 after several years without it.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'ZA', name: 'South Africa', slug: 'south-africa', capital: 'Pretoria',
    population: '60M', currency: 'South African Rand', currencySymbol: 'R', phoneCode: '+27',
    languages: ['Zulu', 'Xhosa', 'Afrikaans', 'English'], continent: 'africa',
    description: 'South Africa uses South Africa Standard Time (UTC+2). Johannesburg is the largest city and economic hub, while Cape Town and Pretoria are also major centers.',
    timezones: ['SAST (UTC+2)']
  },
  {
    code: 'NG', name: 'Nigeria', slug: 'nigeria', capital: 'Abuja',
    population: '211M', currency: 'Nigerian Naira', currencySymbol: '₦', phoneCode: '+234',
    languages: ['English', 'Hausa', 'Yoruba', 'Igbo'], continent: 'africa',
    description: 'Nigeria uses West Africa Time (UTC+1). Lagos is the largest city and economic center, while Abuja is the capital. Nigeria is Africa\'s most populous country.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'KE', name: 'Kenya', slug: 'kenya', capital: 'Nairobi',
    population: '54M', currency: 'Kenyan Shilling', currencySymbol: 'KSh', phoneCode: '+254',
    languages: ['Swahili', 'English'], continent: 'africa',
    description: 'Kenya uses East Africa Time (UTC+3). Nairobi is the capital and a major business hub for East Africa. Kenya does not observe Daylight Saving Time.',
    timezones: ['EAT (UTC+3)']
  },
  {
    code: 'MA', name: 'Morocco', slug: 'morocco', capital: 'Rabat',
    population: '37M', currency: 'Moroccan Dirham', currencySymbol: 'د.م.', phoneCode: '+212',
    languages: ['Arabic', 'Berber', 'French'], continent: 'africa',
    description: 'Morocco uses Western European Time (UTC+0) but permanently observes Daylight Saving Time since 2018, effectively using UTC+1 year-round. Casablanca is the largest city.',
    timezones: ['WEST (UTC+1)']
  },
  // Oceania
  {
    code: 'AU', name: 'Australia', slug: 'australia', capital: 'Canberra',
    population: '26M', currency: 'Australian Dollar', currencySymbol: 'A$', phoneCode: '+61',
    languages: ['English'], continent: 'oceania',
    description: 'Australia spans three time zones: Eastern (UTC+10), Central (UTC+9:30), and Western (UTC+8). Some states observe Daylight Saving Time while others don\'t, creating up to five time differences.',
    timezones: ['AWST (UTC+8)', 'ACST (UTC+9:30)', 'AEST (UTC+10)', 'AEDT (UTC+11)']
  },
  {
    code: 'NZ', name: 'New Zealand', slug: 'new-zealand', capital: 'Wellington',
    population: '5M', currency: 'New Zealand Dollar', currencySymbol: 'NZ$', phoneCode: '+64',
    languages: ['English', 'Māori'], continent: 'oceania',
    description: 'New Zealand uses New Zealand Standard Time (UTC+12) and observes Daylight Saving Time (NZDT/UTC+13). Auckland is the largest city, while Wellington is the capital.',
    timezones: ['NZST (UTC+12)', 'NZDT (UTC+13)']
  },
  // More European countries
  {
    code: 'IE', name: 'Ireland', slug: 'ireland', capital: 'Dublin',
    population: '5M', currency: 'Euro', currencySymbol: '€', phoneCode: '+353',
    languages: ['English', 'Irish'], continent: 'europe',
    description: 'Ireland uses Greenwich Mean Time (GMT) in winter and Irish Standard Time (IST/UTC+1) in summer. Dublin is the capital and a major tech hub hosting European HQs of many US companies.',
    timezones: ['GMT (UTC+0)', 'IST (UTC+1)']
  },
  {
    code: 'CZ', name: 'Czech Republic', slug: 'czech-republic', capital: 'Prague',
    population: '10.7M', currency: 'Czech Koruna', currencySymbol: 'Kč', phoneCode: '+420',
    languages: ['Czech'], continent: 'europe',
    description: 'Czech Republic uses Central European Time. Prague is a major tourist destination known for its historic architecture and beer culture.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'HU', name: 'Hungary', slug: 'hungary', capital: 'Budapest',
    population: '9.7M', currency: 'Hungarian Forint', currencySymbol: 'Ft', phoneCode: '+36',
    languages: ['Hungarian'], continent: 'europe',
    description: 'Hungary uses Central European Time. Budapest, divided by the Danube into Buda and Pest, is famous for its thermal baths and historic architecture.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'NO', name: 'Norway', slug: 'norway', capital: 'Oslo',
    population: '5.4M', currency: 'Norwegian Krone', currencySymbol: 'kr', phoneCode: '+47',
    languages: ['Norwegian'], continent: 'europe',
    description: 'Norway uses Central European Time. Oslo is the capital. Northern Norway experiences midnight sun in summer and polar night in winter.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'DK', name: 'Denmark', slug: 'denmark', capital: 'Copenhagen',
    population: '5.8M', currency: 'Danish Krone', currencySymbol: 'kr', phoneCode: '+45',
    languages: ['Danish'], continent: 'europe',
    description: 'Denmark uses Central European Time. Copenhagen is known for design, cycling culture, and the concept of hygge. Greenland and Faroe Islands have different time zones.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'FI', name: 'Finland', slug: 'finland', capital: 'Helsinki',
    population: '5.5M', currency: 'Euro', currencySymbol: '€', phoneCode: '+358',
    languages: ['Finnish', 'Swedish'], continent: 'europe',
    description: 'Finland uses Eastern European Time (UTC+2), one hour ahead of Central Europe. Helsinki is the capital. Finland experiences extreme daylight variation throughout the year.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  // More Asian countries
  {
    code: 'TW', name: 'Taiwan', slug: 'taiwan', capital: 'Taipei',
    population: '24M', currency: 'New Taiwan Dollar', currencySymbol: 'NT$', phoneCode: '+886',
    languages: ['Mandarin'], continent: 'asia',
    description: 'Taiwan uses Taiwan Standard Time (UTC+8). Taipei is the capital and a major tech manufacturing hub. Taiwan does not observe Daylight Saving Time.',
    timezones: ['TST (UTC+8)']
  },
  {
    code: 'PK', name: 'Pakistan', slug: 'pakistan', capital: 'Islamabad',
    population: '220M', currency: 'Pakistani Rupee', currencySymbol: 'Rs', phoneCode: '+92',
    languages: ['Urdu', 'English'], continent: 'asia',
    description: 'Pakistan uses Pakistan Standard Time (UTC+5). Karachi is the largest city and economic hub, while Islamabad is the capital.',
    timezones: ['PKT (UTC+5)']
  },
  {
    code: 'BD', name: 'Bangladesh', slug: 'bangladesh', capital: 'Dhaka',
    population: '165M', currency: 'Bangladeshi Taka', currencySymbol: '৳', phoneCode: '+880',
    languages: ['Bengali'], continent: 'asia',
    description: 'Bangladesh uses Bangladesh Standard Time (UTC+6). Dhaka is the capital and one of the world\'s most densely populated cities.',
    timezones: ['BST (UTC+6)']
  },
  // More African countries  
  {
    code: 'GH', name: 'Ghana', slug: 'ghana', capital: 'Accra',
    population: '32M', currency: 'Ghanaian Cedi', currencySymbol: 'GH₵', phoneCode: '+233',
    languages: ['English'], continent: 'africa',
    description: 'Ghana uses Greenwich Mean Time (UTC+0) year-round. Accra is the capital and main economic center. Ghana was the first sub-Saharan African country to gain independence.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'TZ', name: 'Tanzania', slug: 'tanzania', capital: 'Dodoma',
    population: '62M', currency: 'Tanzanian Shilling', currencySymbol: 'TSh', phoneCode: '+255',
    languages: ['Swahili', 'English'], continent: 'africa',
    description: 'Tanzania uses East Africa Time (UTC+3). Dar es Salaam is the largest city, while Dodoma is the capital. Home to Mount Kilimanjaro and Serengeti.',
    timezones: ['EAT (UTC+3)']
  },
  {
    code: 'ET', name: 'Ethiopia', slug: 'ethiopia', capital: 'Addis Ababa',
    population: '118M', currency: 'Ethiopian Birr', currencySymbol: 'Br', phoneCode: '+251',
    languages: ['Amharic'], continent: 'africa',
    description: 'Ethiopia uses East Africa Time (UTC+3). Addis Ababa is the capital and seat of the African Union. Ethiopia uses a unique calendar that is 7-8 years behind the Gregorian calendar.',
    timezones: ['EAT (UTC+3)']
  }
]

// Get country by slug
export function getCountryBySlug(slug: string): Country | undefined {
  return countries.find(c => c.slug === slug)
}

// Get all country slugs
export function getAllCountrySlugs(): string[] {
  return countries.map(c => c.slug)
}

// Get cities by country code
export function getCitiesByCountryCode(countryCode: string): City[] {
  return cities.filter(c => c.countryCode === countryCode)
}

export type Continent = 'all' | 'americas' | 'europe' | 'asia' | 'africa' | 'oceania'

export const continentLabels: Record<Continent, string> = {
  all: 'Top Cities',
  americas: 'Americas',
  europe: 'Europe',
  asia: 'Asia',
  africa: 'Africa',
  oceania: 'Oceania'
}

// Countries that use 12-hour (AM/PM) format
export const amPmCountries = ['US', 'CA', 'AU', 'PH', 'MY', 'IN', 'PK', 'BD', 'EG', 'SA', 'CO', 'MX']

export function uses12HourFormat(countryCode: string): boolean {
  return amPmCountries.includes(countryCode)
}

// Get cities by continent
export function getCitiesByContinent(continent: Continent): City[] {
  if (continent === 'all') {
    // Return Tier 1 cities (global hubs)
    return cities.filter(c => c.tier === 1)
  }
  // Return all cities for the selected continent
  return cities.filter(c => c.continent === continent)
}

// Tier 1: Global financial/cultural hubs - shown on homepage
export const tier1Slugs = [
  'new-york', 'london', 'tokyo', 'paris', 'dubai', 'singapore', 
  'hong-kong', 'shanghai', 'sydney', 'los-angeles', 'toronto', 'berlin'
]

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
    slug: 'chicago', city: 'Chicago', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 41.88, lng: -87.63, tier: 2, continent: 'americas',
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
    slug: 'miami', city: 'Miami', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 25.76, lng: -80.19, tier: 2, continent: 'americas',
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
    slug: 'san-francisco', city: 'San Francisco', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 37.77, lng: -122.42, tier: 2, continent: 'americas',
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
  { slug: 'vancouver', city: 'Vancouver', timezone: 'America/Vancouver', country: 'Canada', countryCode: 'CA', lat: 49.28, lng: -123.12, tier: 2, continent: 'americas',
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
  { slug: 'mexico-city', city: 'Mexico City', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 19.43, lng: -99.13, tier: 2, continent: 'americas',
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
  { slug: 'sao-paulo', city: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brazil', countryCode: 'BR', lat: -23.55, lng: -46.63, tier: 2, continent: 'americas',
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
  { slug: 'buenos-aires', city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina', countryCode: 'AR', lat: -34.60, lng: -58.38, tier: 2, continent: 'americas',
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
  { slug: 'madrid', city: 'Madrid', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 40.42, lng: -3.70, tier: 2, continent: 'europe',
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
  { slug: 'barcelona', city: 'Barcelona', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 41.39, lng: 2.17, tier: 2, continent: 'europe',
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
  { slug: 'rome', city: 'Rome', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 41.90, lng: 12.50, tier: 2, continent: 'europe',
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
  { slug: 'amsterdam', city: 'Amsterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 52.37, lng: 4.90, tier: 2, continent: 'europe',
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
  { slug: 'vienna', city: 'Vienna', timezone: 'Europe/Vienna', country: 'Austria', countryCode: 'AT', lat: 48.21, lng: 16.37, tier: 2, continent: 'europe',
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
  { slug: 'zurich', city: 'Zurich', timezone: 'Europe/Zurich', country: 'Switzerland', countryCode: 'CH', lat: 47.37, lng: 8.54, tier: 2, continent: 'europe',
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
  { slug: 'frankfurt', city: 'Frankfurt', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.11, lng: 8.68, tier: 2, continent: 'europe',
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
  { slug: 'moscow', city: 'Moscow', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 55.76, lng: 37.62, tier: 2, continent: 'europe',
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
    slug: 'istanbul', city: 'Istanbul', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 41.01, lng: 28.97, tier: 2, continent: 'europe',
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
  { slug: 'lisbon', city: 'Lisbon', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 38.72, lng: -9.14, tier: 2, continent: 'europe',
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
  { slug: 'dublin', city: 'Dublin', timezone: 'Europe/Dublin', country: 'Ireland', countryCode: 'IE', lat: 53.35, lng: -6.26, tier: 2, continent: 'europe',
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
  { slug: 'beijing', city: 'Beijing', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 39.90, lng: 116.41, tier: 2, continent: 'asia',
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
  { slug: 'seoul', city: 'Seoul', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 37.57, lng: 126.98, tier: 2, continent: 'asia',
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
  { slug: 'mumbai', city: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 19.08, lng: 72.88, tier: 2, continent: 'asia',
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
  { slug: 'delhi', city: 'New Delhi', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 28.61, lng: 77.21, tier: 2, continent: 'asia',
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
  { slug: 'bangkok', city: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 13.76, lng: 100.50, tier: 2, continent: 'asia',
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
  { slug: 'jakarta', city: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia', countryCode: 'ID', lat: -6.21, lng: 106.85, tier: 2, continent: 'asia',
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
  { slug: 'kuala-lumpur', city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Malaysia', countryCode: 'MY', lat: 3.14, lng: 101.69, tier: 2, continent: 'asia',
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
  { slug: 'melbourne', city: 'Melbourne', timezone: 'Australia/Melbourne', country: 'Australia', countryCode: 'AU', lat: -37.81, lng: 144.96, tier: 2, continent: 'oceania',
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
  { slug: 'cairo', city: 'Cairo', timezone: 'Africa/Cairo', country: 'Egypt', countryCode: 'EG', lat: 30.04, lng: 31.24, tier: 2, continent: 'africa',
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
  { slug: 'johannesburg', city: 'Johannesburg', timezone: 'Africa/Johannesburg', country: 'South Africa', countryCode: 'ZA', lat: -26.20, lng: 28.05, tier: 2, continent: 'africa',
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
  { slug: 'san-diego', city: 'San Diego', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 32.72, lng: -117.16, tier: 3, continent: 'americas' },
  { slug: 'austin', city: 'Austin', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 30.27, lng: -97.74, tier: 3, continent: 'americas' },
  { slug: 'philadelphia', city: 'Philadelphia', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 39.95, lng: -75.17, tier: 3, continent: 'americas' },
  { slug: 'detroit', city: 'Detroit', timezone: 'America/Detroit', country: 'United States', countryCode: 'US', lat: 42.33, lng: -83.05, tier: 3, continent: 'americas' },
  { slug: 'minneapolis', city: 'Minneapolis', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 44.98, lng: -93.27, tier: 3, continent: 'americas' },
  { slug: 'portland', city: 'Portland', timezone: 'America/Los_Angeles', country: 'United States', countryCode: 'US', lat: 45.52, lng: -122.68, tier: 3, continent: 'americas' },
  { slug: 'nashville', city: 'Nashville', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 36.16, lng: -86.78, tier: 3, continent: 'americas' },
  { slug: 'new-orleans', city: 'New Orleans', timezone: 'America/Chicago', country: 'United States', countryCode: 'US', lat: 29.95, lng: -90.07, tier: 3, continent: 'americas' },
  { slug: 'orlando', city: 'Orlando', timezone: 'America/New_York', country: 'United States', countryCode: 'US', lat: 28.54, lng: -81.38, tier: 3, continent: 'americas' },
  { slug: 'honolulu', city: 'Honolulu', timezone: 'Pacific/Honolulu', country: 'United States', countryCode: 'US', lat: 21.31, lng: -157.86, tier: 3, continent: 'oceania' },
  { slug: 'anchorage', city: 'Anchorage', timezone: 'America/Anchorage', country: 'United States', countryCode: 'US', lat: 61.22, lng: -149.90, tier: 3, continent: 'americas' },

  // Canada
  { slug: 'calgary', city: 'Calgary', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA', lat: 51.05, lng: -114.07, tier: 3, continent: 'americas' },
  { slug: 'ottawa', city: 'Ottawa', timezone: 'America/Toronto', country: 'Canada', countryCode: 'CA', lat: 45.42, lng: -75.70, tier: 3, continent: 'americas' },
  { slug: 'edmonton', city: 'Edmonton', timezone: 'America/Edmonton', country: 'Canada', countryCode: 'CA', lat: 53.55, lng: -113.49, tier: 3, continent: 'americas' },

  // Latin America
  { slug: 'santiago', city: 'Santiago', timezone: 'America/Santiago', country: 'Chile', countryCode: 'CL', lat: -33.45, lng: -70.67, tier: 3, continent: 'americas' },
  { slug: 'bogota', city: 'Bogotá', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 4.71, lng: -74.07, tier: 3, continent: 'americas' },
  { slug: 'lima', city: 'Lima', timezone: 'America/Lima', country: 'Peru', countryCode: 'PE', lat: -12.05, lng: -77.04, tier: 3, continent: 'americas' },
  { slug: 'caracas', city: 'Caracas', timezone: 'America/Caracas', country: 'Venezuela', countryCode: 'VE', lat: 10.48, lng: -66.90, tier: 3, continent: 'americas' },
  { slug: 'medellin', city: 'Medellín', timezone: 'America/Bogota', country: 'Colombia', countryCode: 'CO', lat: 6.25, lng: -75.56, tier: 3, continent: 'americas' },
  { slug: 'montevideo', city: 'Montevideo', timezone: 'America/Montevideo', country: 'Uruguay', countryCode: 'UY', lat: -34.90, lng: -56.19, tier: 3, continent: 'americas' },
  { slug: 'havana', city: 'Havana', timezone: 'America/Havana', country: 'Cuba', countryCode: 'CU', lat: 23.11, lng: -82.37, tier: 3, continent: 'americas' },
  { slug: 'panama-city', city: 'Panama City', timezone: 'America/Panama', country: 'Panama', countryCode: 'PA', lat: 8.98, lng: -79.52, tier: 3, continent: 'americas' },
  { slug: 'san-jose-cr', city: 'San José', timezone: 'America/Costa_Rica', country: 'Costa Rica', countryCode: 'CR', lat: 9.93, lng: -84.09, tier: 3, continent: 'americas' },
  { slug: 'guadalajara', city: 'Guadalajara', timezone: 'America/Mexico_City', country: 'Mexico', countryCode: 'MX', lat: 20.67, lng: -103.35, tier: 3, continent: 'americas' },
  { slug: 'monterrey', city: 'Monterrey', timezone: 'America/Monterrey', country: 'Mexico', countryCode: 'MX', lat: 25.69, lng: -100.32, tier: 3, continent: 'americas' },
  { slug: 'cancun', city: 'Cancún', timezone: 'America/Cancun', country: 'Mexico', countryCode: 'MX', lat: 21.16, lng: -86.85, tier: 3, continent: 'americas' },

  // Europe
  { slug: 'manchester', city: 'Manchester', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 53.48, lng: -2.24, tier: 3, continent: 'europe' },
  { slug: 'birmingham', city: 'Birmingham', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 52.49, lng: -1.90, tier: 3, continent: 'europe' },
  { slug: 'edinburgh', city: 'Edinburgh', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 55.95, lng: -3.19, tier: 3, continent: 'europe' },
  { slug: 'glasgow', city: 'Glasgow', timezone: 'Europe/London', country: 'United Kingdom', countryCode: 'GB', lat: 55.86, lng: -4.25, tier: 3, continent: 'europe' },
  { slug: 'lyon', city: 'Lyon', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 45.76, lng: 4.84, tier: 3, continent: 'europe' },
  { slug: 'marseille', city: 'Marseille', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.30, lng: 5.37, tier: 3, continent: 'europe' },
  { slug: 'nice', city: 'Nice', timezone: 'Europe/Paris', country: 'France', countryCode: 'FR', lat: 43.71, lng: 7.26, tier: 3, continent: 'europe' },
  { slug: 'hamburg', city: 'Hamburg', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 53.55, lng: 9.99, tier: 3, continent: 'europe' },
  { slug: 'cologne', city: 'Cologne', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 50.94, lng: 6.96, tier: 3, continent: 'europe' },
  { slug: 'dusseldorf', city: 'Düsseldorf', timezone: 'Europe/Berlin', country: 'Germany', countryCode: 'DE', lat: 51.23, lng: 6.78, tier: 3, continent: 'europe' },
  { slug: 'florence', city: 'Florence', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 43.77, lng: 11.25, tier: 3, continent: 'europe' },
  { slug: 'venice', city: 'Venice', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 45.44, lng: 12.32, tier: 3, continent: 'europe' },
  { slug: 'naples', city: 'Naples', timezone: 'Europe/Rome', country: 'Italy', countryCode: 'IT', lat: 40.85, lng: 14.27, tier: 3, continent: 'europe' },
  { slug: 'valencia', city: 'Valencia', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 39.47, lng: -0.38, tier: 3, continent: 'europe' },
  { slug: 'seville', city: 'Seville', timezone: 'Europe/Madrid', country: 'Spain', countryCode: 'ES', lat: 37.39, lng: -5.99, tier: 3, continent: 'europe' },
  { slug: 'porto', city: 'Porto', timezone: 'Europe/Lisbon', country: 'Portugal', countryCode: 'PT', lat: 41.15, lng: -8.61, tier: 3, continent: 'europe' },
  { slug: 'rotterdam', city: 'Rotterdam', timezone: 'Europe/Amsterdam', country: 'Netherlands', countryCode: 'NL', lat: 51.92, lng: 4.48, tier: 3, continent: 'europe' },
  { slug: 'antwerp', city: 'Antwerp', timezone: 'Europe/Brussels', country: 'Belgium', countryCode: 'BE', lat: 51.22, lng: 4.40, tier: 3, continent: 'europe' },
  { slug: 'krakow', city: 'Krakow', timezone: 'Europe/Warsaw', country: 'Poland', countryCode: 'PL', lat: 50.06, lng: 19.94, tier: 3, continent: 'europe' },
  { slug: 'bucharest', city: 'Bucharest', timezone: 'Europe/Bucharest', country: 'Romania', countryCode: 'RO', lat: 44.43, lng: 26.10, tier: 3, continent: 'europe' },
  { slug: 'sofia', city: 'Sofia', timezone: 'Europe/Sofia', country: 'Bulgaria', countryCode: 'BG', lat: 42.70, lng: 23.32, tier: 3, continent: 'europe' },
  { slug: 'belgrade', city: 'Belgrade', timezone: 'Europe/Belgrade', country: 'Serbia', countryCode: 'RS', lat: 44.82, lng: 20.46, tier: 3, continent: 'europe' },
  { slug: 'zagreb', city: 'Zagreb', timezone: 'Europe/Zagreb', country: 'Croatia', countryCode: 'HR', lat: 45.81, lng: 15.98, tier: 3, continent: 'europe' },
  { slug: 'bratislava', city: 'Bratislava', timezone: 'Europe/Bratislava', country: 'Slovakia', countryCode: 'SK', lat: 48.15, lng: 17.11, tier: 3, continent: 'europe' },
  { slug: 'ljubljana', city: 'Ljubljana', timezone: 'Europe/Ljubljana', country: 'Slovenia', countryCode: 'SI', lat: 46.06, lng: 14.51, tier: 3, continent: 'europe' },
  { slug: 'tallinn', city: 'Tallinn', timezone: 'Europe/Tallinn', country: 'Estonia', countryCode: 'EE', lat: 59.44, lng: 24.75, tier: 3, continent: 'europe' },
  { slug: 'riga', city: 'Riga', timezone: 'Europe/Riga', country: 'Latvia', countryCode: 'LV', lat: 56.95, lng: 24.11, tier: 3, continent: 'europe' },
  { slug: 'vilnius', city: 'Vilnius', timezone: 'Europe/Vilnius', country: 'Lithuania', countryCode: 'LT', lat: 54.69, lng: 25.28, tier: 3, continent: 'europe' },
  { slug: 'reykjavik', city: 'Reykjavik', timezone: 'Atlantic/Reykjavik', country: 'Iceland', countryCode: 'IS', lat: 64.15, lng: -21.94, tier: 3, continent: 'europe' },
  { slug: 'kyiv', city: 'Kyiv', timezone: 'Europe/Kiev', country: 'Ukraine', countryCode: 'UA', lat: 50.45, lng: 30.52, tier: 3, continent: 'europe' },
  { slug: 'saint-petersburg', city: 'Saint Petersburg', timezone: 'Europe/Moscow', country: 'Russia', countryCode: 'RU', lat: 59.93, lng: 30.34, tier: 3, continent: 'europe' },

  // Turkey
  { slug: 'ankara', city: 'Ankara', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 39.93, lng: 32.86, tier: 3, continent: 'europe' },
  { slug: 'izmir', city: 'İzmir', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 38.42, lng: 27.13, tier: 3, continent: 'europe' },
  { slug: 'antalya', city: 'Antalya', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 36.90, lng: 30.70, tier: 3, continent: 'europe' },
  { slug: 'bursa', city: 'Bursa', timezone: 'Europe/Istanbul', country: 'Turkey', countryCode: 'TR', lat: 40.19, lng: 29.06, tier: 3, continent: 'europe' },

  // Asia
  { slug: 'osaka', city: 'Osaka', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 34.69, lng: 135.50, tier: 3, continent: 'asia' },
  { slug: 'kyoto', city: 'Kyoto', timezone: 'Asia/Tokyo', country: 'Japan', countryCode: 'JP', lat: 35.01, lng: 135.77, tier: 3, continent: 'asia' },
  { slug: 'shenzhen', city: 'Shenzhen', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 22.54, lng: 114.06, tier: 3, continent: 'asia' },
  { slug: 'guangzhou', city: 'Guangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 23.13, lng: 113.26, tier: 3, continent: 'asia' },
  { slug: 'chengdu', city: 'Chengdu', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.57, lng: 104.07, tier: 3, continent: 'asia' },
  { slug: 'hangzhou', city: 'Hangzhou', timezone: 'Asia/Shanghai', country: 'China', countryCode: 'CN', lat: 30.27, lng: 120.15, tier: 3, continent: 'asia' },
  { slug: 'busan', city: 'Busan', timezone: 'Asia/Seoul', country: 'South Korea', countryCode: 'KR', lat: 35.18, lng: 129.08, tier: 3, continent: 'asia' },
  { slug: 'hanoi', city: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 21.03, lng: 105.85, tier: 3, continent: 'asia' },
  { slug: 'ho-chi-minh', city: 'Ho Chi Minh City', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam', countryCode: 'VN', lat: 10.82, lng: 106.63, tier: 3, continent: 'asia' },
  { slug: 'chennai', city: 'Chennai', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 13.08, lng: 80.27, tier: 3, continent: 'asia' },
  { slug: 'kolkata', city: 'Kolkata', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 22.57, lng: 88.36, tier: 3, continent: 'asia' },
  { slug: 'hyderabad', city: 'Hyderabad', timezone: 'Asia/Kolkata', country: 'India', countryCode: 'IN', lat: 17.39, lng: 78.49, tier: 3, continent: 'asia' },
  { slug: 'phuket', city: 'Phuket', timezone: 'Asia/Bangkok', country: 'Thailand', countryCode: 'TH', lat: 7.88, lng: 98.40, tier: 3, continent: 'asia' },
  { slug: 'bali', city: 'Bali', timezone: 'Asia/Makassar', country: 'Indonesia', countryCode: 'ID', lat: -8.41, lng: 115.19, tier: 3, continent: 'asia' },
  { slug: 'jerusalem', city: 'Jerusalem', timezone: 'Asia/Jerusalem', country: 'Israel', countryCode: 'IL', lat: 31.77, lng: 35.23, tier: 3, continent: 'asia' },
  { slug: 'abu-dhabi', city: 'Abu Dhabi', timezone: 'Asia/Dubai', country: 'United Arab Emirates', countryCode: 'AE', lat: 24.45, lng: 54.37, tier: 3, continent: 'asia' },
  { slug: 'doha', city: 'Doha', timezone: 'Asia/Qatar', country: 'Qatar', countryCode: 'QA', lat: 25.29, lng: 51.53, tier: 3, continent: 'asia' },
  { slug: 'riyadh', city: 'Riyadh', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 24.77, lng: 46.74, tier: 3, continent: 'asia' },
  { slug: 'jeddah', city: 'Jeddah', timezone: 'Asia/Riyadh', country: 'Saudi Arabia', countryCode: 'SA', lat: 21.49, lng: 39.19, tier: 3, continent: 'asia' },
  { slug: 'karachi', city: 'Karachi', timezone: 'Asia/Karachi', country: 'Pakistan', countryCode: 'PK', lat: 24.86, lng: 67.01, tier: 3, continent: 'asia' },
  { slug: 'dhaka', city: 'Dhaka', timezone: 'Asia/Dhaka', country: 'Bangladesh', countryCode: 'BD', lat: 23.81, lng: 90.41, tier: 3, continent: 'asia' },
  { slug: 'kathmandu', city: 'Kathmandu', timezone: 'Asia/Kathmandu', country: 'Nepal', countryCode: 'NP', lat: 27.72, lng: 85.32, tier: 3, continent: 'asia' },
  { slug: 'colombo', city: 'Colombo', timezone: 'Asia/Colombo', country: 'Sri Lanka', countryCode: 'LK', lat: 6.93, lng: 79.85, tier: 3, continent: 'asia' },
  { slug: 'yangon', city: 'Yangon', timezone: 'Asia/Yangon', country: 'Myanmar', countryCode: 'MM', lat: 16.87, lng: 96.20, tier: 3, continent: 'asia' },
  { slug: 'phnom-penh', city: 'Phnom Penh', timezone: 'Asia/Phnom_Penh', country: 'Cambodia', countryCode: 'KH', lat: 11.56, lng: 104.92, tier: 3, continent: 'asia' },

  // Oceania
  { slug: 'brisbane', city: 'Brisbane', timezone: 'Australia/Brisbane', country: 'Australia', countryCode: 'AU', lat: -27.47, lng: 153.03, tier: 3, continent: 'oceania' },
  { slug: 'perth', city: 'Perth', timezone: 'Australia/Perth', country: 'Australia', countryCode: 'AU', lat: -31.95, lng: 115.86, tier: 3, continent: 'oceania' },
  { slug: 'wellington', city: 'Wellington', timezone: 'Pacific/Auckland', country: 'New Zealand', countryCode: 'NZ', lat: -41.29, lng: 174.78, tier: 3, continent: 'oceania' },
  { slug: 'fiji', city: 'Suva', timezone: 'Pacific/Fiji', country: 'Fiji', countryCode: 'FJ', lat: -18.14, lng: 178.44, tier: 3, continent: 'oceania' },

  // Africa
  { slug: 'marrakech', city: 'Marrakech', timezone: 'Africa/Casablanca', country: 'Morocco', countryCode: 'MA', lat: 31.63, lng: -8.01, tier: 3, continent: 'africa' },
  { slug: 'tunis', city: 'Tunis', timezone: 'Africa/Tunis', country: 'Tunisia', countryCode: 'TN', lat: 36.81, lng: 10.17, tier: 3, continent: 'africa' },
  { slug: 'algiers', city: 'Algiers', timezone: 'Africa/Algiers', country: 'Algeria', countryCode: 'DZ', lat: 36.74, lng: 3.09, tier: 3, continent: 'africa' },
  { slug: 'addis-ababa', city: 'Addis Ababa', timezone: 'Africa/Addis_Ababa', country: 'Ethiopia', countryCode: 'ET', lat: 9.02, lng: 38.75, tier: 3, continent: 'africa' },
  { slug: 'accra', city: 'Accra', timezone: 'Africa/Accra', country: 'Ghana', countryCode: 'GH', lat: 5.56, lng: -0.19, tier: 3, continent: 'africa' },
  { slug: 'dar-es-salaam', city: 'Dar es Salaam', timezone: 'Africa/Dar_es_Salaam', country: 'Tanzania', countryCode: 'TZ', lat: -6.79, lng: 39.21, tier: 3, continent: 'africa' },
]

// Get cities by tier
export function getTier1Cities(): City[] {
  return cities.filter(c => c.tier === 1)
}

export function getTier2Cities(): City[] {
  return cities.filter(c => c.tier === 2)
}

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

export function getAllSlugs(): string[] {
  return cities.map(c => c.slug)
}

export function getCitiesByCountry(countryCode: string): City[] {
  return cities.filter(c => c.countryCode === countryCode)
}

export function searchCities(query: string): City[] {
  const q = query.toLowerCase()
  return cities.filter(c => 
    c.city.toLowerCase().includes(q) || 
    c.country.toLowerCase().includes(q) ||
    c.slug.includes(q)
  )
}
