/**
 * Countries Data
 * Tüm ülke verileri (statik data)
 * 
 * @example
 * import { countries } from '@/data/countries'
 */

import type { Country } from '@/core/types'

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
  },
  // Additional countries (for cities with country pages)
  {
    code: 'DZ', name: 'Algeria', slug: 'algeria', capital: 'Algiers',
    population: '45M', currency: 'Algerian Dinar', currencySymbol: 'DZD', phoneCode: '+213',
    languages: ['Arabic', 'Berber', 'French'], continent: 'africa',
    description: 'Algeria uses Central European Time (UTC+1) year-round without daylight saving time. Algiers is the capital and largest city, known as the "White City" for its Mediterranean architecture.',
    timezones: ['CET (UTC+1)']
  },
  {
    code: 'BG', name: 'Bulgaria', slug: 'bulgaria', capital: 'Sofia',
    population: '7M', currency: 'Bulgarian Lev', currencySymbol: 'лв', phoneCode: '+359',
    languages: ['Bulgarian'], continent: 'europe',
    description: 'Bulgaria uses Eastern European Time and observes Daylight Saving Time. Sofia is the capital and largest city, serving as the cultural and economic center of the country.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'KH', name: 'Cambodia', slug: 'cambodia', capital: 'Phnom Penh',
    population: '17M', currency: 'Cambodian Riel', currencySymbol: '៛', phoneCode: '+855',
    languages: ['Khmer'], continent: 'asia',
    description: 'Cambodia uses Indochina Time (UTC+7) year-round. Phnom Penh is the capital, and the country is famous for Angkor Wat, the largest religious monument in the world.',
    timezones: ['ICT (UTC+7)']
  },
  {
    code: 'CL', name: 'Chile', slug: 'chile', capital: 'Santiago',
    population: '19M', currency: 'Chilean Peso', currencySymbol: '$', phoneCode: '+56',
    languages: ['Spanish'], continent: 'americas',
    description: 'Chile uses Chile Standard Time and observes Daylight Saving Time opposite to the Northern Hemisphere. Santiago is the capital and home to over a third of the population.',
    timezones: ['CLT (UTC-4)', 'CLST (UTC-3)']
  },
  {
    code: 'CO', name: 'Colombia', slug: 'colombia', capital: 'Bogotá',
    population: '52M', currency: 'Colombian Peso', currencySymbol: '$', phoneCode: '+57',
    languages: ['Spanish'], continent: 'americas',
    description: 'Colombia uses Colombia Time (UTC-5) year-round without daylight saving time. Bogotá is the high-altitude capital and largest city, serving as a major South American business hub.',
    timezones: ['COT (UTC-5)']
  },
  {
    code: 'CR', name: 'Costa Rica', slug: 'costa-rica', capital: 'San José',
    population: '5M', currency: 'Costa Rican Colón', currencySymbol: '₡', phoneCode: '+506',
    languages: ['Spanish'], continent: 'americas',
    description: 'Costa Rica uses Central Standard Time (UTC-6) year-round. San José is the capital. The country is known for its biodiversity and eco-tourism.',
    timezones: ['CST (UTC-6)']
  },
  {
    code: 'HR', name: 'Croatia', slug: 'croatia', capital: 'Zagreb',
    population: '4M', currency: 'Euro', currencySymbol: '€', phoneCode: '+385',
    languages: ['Croatian'], continent: 'europe',
    description: 'Croatia uses Central European Time and observes Daylight Saving Time. Zagreb is the capital, and the country features a stunning Adriatic coastline.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'CU', name: 'Cuba', slug: 'cuba', capital: 'Havana',
    population: '11M', currency: 'Cuban Peso', currencySymbol: '$', phoneCode: '+53',
    languages: ['Spanish'], continent: 'americas',
    description: 'Cuba uses Cuba Standard Time and observes Daylight Saving Time. Havana is the capital and largest city, known for its vintage cars and colonial architecture.',
    timezones: ['CST (UTC-5)', 'CDT (UTC-4)']
  },
  {
    code: 'EE', name: 'Estonia', slug: 'estonia', capital: 'Tallinn',
    population: '1.3M', currency: 'Euro', currencySymbol: '€', phoneCode: '+372',
    languages: ['Estonian'], continent: 'europe',
    description: 'Estonia uses Eastern European Time and observes Daylight Saving Time. Tallinn is the capital, known as one of Europe\'s most digitally advanced nations.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'FJ', name: 'Fiji', slug: 'fiji', capital: 'Suva',
    population: '900K', currency: 'Fijian Dollar', currencySymbol: '$', phoneCode: '+679',
    languages: ['English', 'Fijian', 'Hindi'], continent: 'oceania',
    description: 'Fiji uses Fiji Time (UTC+12) and observes Daylight Saving Time. Suva is the capital. Fiji is among the first places to see each new day.',
    timezones: ['FJT (UTC+12)', 'FJST (UTC+13)']
  },
  {
    code: 'IS', name: 'Iceland', slug: 'iceland', capital: 'Reykjavik',
    population: '370K', currency: 'Icelandic Króna', currencySymbol: 'kr', phoneCode: '+354',
    languages: ['Icelandic'], continent: 'europe',
    description: 'Iceland uses Greenwich Mean Time (UTC+0) year-round without daylight saving time. Reykjavik is the capital and northernmost capital of a sovereign state.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'LV', name: 'Latvia', slug: 'latvia', capital: 'Riga',
    population: '1.9M', currency: 'Euro', currencySymbol: '€', phoneCode: '+371',
    languages: ['Latvian'], continent: 'europe',
    description: 'Latvia uses Eastern European Time and observes Daylight Saving Time. Riga is the capital and largest city in the Baltic states.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'LT', name: 'Lithuania', slug: 'lithuania', capital: 'Vilnius',
    population: '2.8M', currency: 'Euro', currencySymbol: '€', phoneCode: '+370',
    languages: ['Lithuanian'], continent: 'europe',
    description: 'Lithuania uses Eastern European Time and observes Daylight Saving Time. Vilnius is the capital, known for its baroque Old Town, a UNESCO World Heritage Site.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'MM', name: 'Myanmar', slug: 'myanmar', capital: 'Naypyidaw',
    population: '55M', currency: 'Myanmar Kyat', currencySymbol: 'K', phoneCode: '+95',
    languages: ['Burmese'], continent: 'asia',
    description: 'Myanmar uses Myanmar Standard Time (UTC+6:30), one of few countries with a 30-minute offset. Naypyidaw is the capital, though Yangon is the largest city.',
    timezones: ['MMT (UTC+6:30)']
  },
  {
    code: 'NP', name: 'Nepal', slug: 'nepal', capital: 'Kathmandu',
    population: '30M', currency: 'Nepalese Rupee', currencySymbol: '₨', phoneCode: '+977',
    languages: ['Nepali'], continent: 'asia',
    description: 'Nepal uses Nepal Time (UTC+5:45), one of only two countries with a 45-minute offset. Kathmandu is the capital, gateway to Mount Everest.',
    timezones: ['NPT (UTC+5:45)']
  },
  {
    code: 'PA', name: 'Panama', slug: 'panama', capital: 'Panama City',
    population: '4.4M', currency: 'Panamanian Balboa', currencySymbol: 'B/.', phoneCode: '+507',
    languages: ['Spanish'], continent: 'americas',
    description: 'Panama uses Eastern Standard Time (UTC-5) year-round. Panama City is the capital, home to the Panama Canal connecting the Atlantic and Pacific oceans.',
    timezones: ['EST (UTC-5)']
  },
  {
    code: 'PE', name: 'Peru', slug: 'peru', capital: 'Lima',
    population: '34M', currency: 'Peruvian Sol', currencySymbol: 'S/', phoneCode: '+51',
    languages: ['Spanish', 'Quechua'], continent: 'americas',
    description: 'Peru uses Peru Time (UTC-5) year-round without daylight saving time. Lima is the capital and gastronomic capital of South America, gateway to Machu Picchu.',
    timezones: ['PET (UTC-5)']
  },
  {
    code: 'RO', name: 'Romania', slug: 'romania', capital: 'Bucharest',
    population: '19M', currency: 'Romanian Leu', currencySymbol: 'lei', phoneCode: '+40',
    languages: ['Romanian'], continent: 'europe',
    description: 'Romania uses Eastern European Time and observes Daylight Saving Time. Bucharest is the capital, and the country is known for Transylvania and Dracula legend.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'RS', name: 'Serbia', slug: 'serbia', capital: 'Belgrade',
    population: '7M', currency: 'Serbian Dinar', currencySymbol: 'din', phoneCode: '+381',
    languages: ['Serbian'], continent: 'europe',
    description: 'Serbia uses Central European Time and observes Daylight Saving Time. Belgrade is the capital, one of the oldest cities in Europe.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'SK', name: 'Slovakia', slug: 'slovakia', capital: 'Bratislava',
    population: '5.4M', currency: 'Euro', currencySymbol: '€', phoneCode: '+421',
    languages: ['Slovak'], continent: 'europe',
    description: 'Slovakia uses Central European Time and observes Daylight Saving Time. Bratislava is the capital, uniquely bordering two other capitals (Vienna and Budapest).',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'SI', name: 'Slovenia', slug: 'slovenia', capital: 'Ljubljana',
    population: '2.1M', currency: 'Euro', currencySymbol: '€', phoneCode: '+386',
    languages: ['Slovenian'], continent: 'europe',
    description: 'Slovenia uses Central European Time and observes Daylight Saving Time. Ljubljana is the capital, known for its green credentials and beautiful Lake Bled.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'LK', name: 'Sri Lanka', slug: 'sri-lanka', capital: 'Sri Jayawardenepura Kotte',
    population: '22M', currency: 'Sri Lankan Rupee', currencySymbol: '₨', phoneCode: '+94',
    languages: ['Sinhala', 'Tamil'], continent: 'asia',
    description: 'Sri Lanka uses India Standard Time (UTC+5:30). Sri Jayawardenepura Kotte is the official capital, while Colombo is the commercial capital.',
    timezones: ['IST (UTC+5:30)']
  },
  {
    code: 'TN', name: 'Tunisia', slug: 'tunisia', capital: 'Tunis',
    population: '12M', currency: 'Tunisian Dinar', currencySymbol: 'DT', phoneCode: '+216',
    languages: ['Arabic', 'French'], continent: 'africa',
    description: 'Tunisia uses Central European Time (UTC+1) year-round. Tunis is the capital, and the country features ancient Carthage ruins and Mediterranean beaches.',
    timezones: ['CET (UTC+1)']
  },
  {
    code: 'UA', name: 'Ukraine', slug: 'ukraine', capital: 'Kyiv',
    population: '41M', currency: 'Ukrainian Hryvnia', currencySymbol: '₴', phoneCode: '+380',
    languages: ['Ukrainian'], continent: 'europe',
    description: 'Ukraine uses Eastern European Time and observes Daylight Saving Time. Kyiv is the capital and largest city, one of the oldest cities in Eastern Europe.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'UY', name: 'Uruguay', slug: 'uruguay', capital: 'Montevideo',
    population: '3.5M', currency: 'Uruguayan Peso', currencySymbol: '$', phoneCode: '+598',
    languages: ['Spanish'], continent: 'americas',
    description: 'Uruguay uses Uruguay Time (UTC-3) year-round. Montevideo is the capital, home to nearly half of the country\'s population.',
    timezones: ['UYT (UTC-3)']
  },
  {
    code: 'VE', name: 'Venezuela', slug: 'venezuela', capital: 'Caracas',
    population: '28M', currency: 'Venezuelan Bolívar', currencySymbol: 'Bs.', phoneCode: '+58',
    languages: ['Spanish'], continent: 'americas',
    description: 'Venezuela uses Venezuela Time (UTC-4) year-round. Caracas is the capital, nestled in a valley surrounded by the Ávila mountain.',
    timezones: ['VET (UTC-4)']
  },
  // ========== ADDITIONAL AFRICAN COUNTRIES ==========
  {
    code: 'LY', name: 'Libya', slug: 'libya', capital: 'Tripoli',
    population: '7M', currency: 'Libyan Dinar', currencySymbol: 'LD', phoneCode: '+218',
    languages: ['Arabic'], continent: 'africa',
    description: 'Libya uses Eastern European Time (UTC+2) year-round. Tripoli is the capital and largest city on the Mediterranean coast.',
    timezones: ['EET (UTC+2)']
  },
  {
    code: 'SD', name: 'Sudan', slug: 'sudan', capital: 'Khartoum',
    population: '44M', currency: 'Sudanese Pound', currencySymbol: 'SDG', phoneCode: '+249',
    languages: ['Arabic', 'English'], continent: 'africa',
    description: 'Sudan uses Central Africa Time (UTC+2). Khartoum, where the Blue and White Nile rivers meet, is the capital.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'SS', name: 'South Sudan', slug: 'south-sudan', capital: 'Juba',
    population: '11M', currency: 'South Sudanese Pound', currencySymbol: 'SSP', phoneCode: '+211',
    languages: ['English', 'Arabic'], continent: 'africa',
    description: 'South Sudan uses Central Africa Time (UTC+2). Juba is the capital of the world\'s youngest country, independent since 2011.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'UG', name: 'Uganda', slug: 'uganda', capital: 'Kampala',
    population: '46M', currency: 'Ugandan Shilling', currencySymbol: 'USh', phoneCode: '+256',
    languages: ['English', 'Swahili'], continent: 'africa',
    description: 'Uganda uses East Africa Time (UTC+3). Kampala is the capital, located on the northern shores of Lake Victoria.',
    timezones: ['EAT (UTC+3)']
  },
  {
    code: 'RW', name: 'Rwanda', slug: 'rwanda', capital: 'Kigali',
    population: '13M', currency: 'Rwandan Franc', currencySymbol: 'FRw', phoneCode: '+250',
    languages: ['Kinyarwanda', 'English', 'French'], continent: 'africa',
    description: 'Rwanda uses Central Africa Time (UTC+2). Kigali is the clean and modern capital, known as the "Land of a Thousand Hills."',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'BI', name: 'Burundi', slug: 'burundi', capital: 'Gitega',
    population: '12M', currency: 'Burundian Franc', currencySymbol: 'FBu', phoneCode: '+257',
    languages: ['Kirundi', 'French'], continent: 'africa',
    description: 'Burundi uses Central Africa Time (UTC+2). Gitega is the political capital, while Bujumbura remains the economic center.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'CD', name: 'DR Congo', slug: 'dr-congo', capital: 'Kinshasa',
    population: '92M', currency: 'Congolese Franc', currencySymbol: 'FC', phoneCode: '+243',
    languages: ['French'], continent: 'africa',
    description: 'DR Congo spans two time zones: West Africa Time (UTC+1) in the west and Central Africa Time (UTC+2) in the east. Kinshasa is the capital.',
    timezones: ['WAT (UTC+1)', 'CAT (UTC+2)']
  },
  {
    code: 'CG', name: 'Congo', slug: 'congo', capital: 'Brazzaville',
    population: '5.5M', currency: 'Central African CFA Franc', currencySymbol: 'FCFA', phoneCode: '+242',
    languages: ['French'], continent: 'africa',
    description: 'Republic of Congo uses West Africa Time (UTC+1). Brazzaville, across the river from Kinshasa, is the capital.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'ZW', name: 'Zimbabwe', slug: 'zimbabwe', capital: 'Harare',
    population: '15M', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+263',
    languages: ['English', 'Shona', 'Ndebele'], continent: 'africa',
    description: 'Zimbabwe uses Central Africa Time (UTC+2). Harare is the capital, and Victoria Falls is a major tourist attraction.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'ZM', name: 'Zambia', slug: 'zambia', capital: 'Lusaka',
    population: '19M', currency: 'Zambian Kwacha', currencySymbol: 'ZK', phoneCode: '+260',
    languages: ['English'], continent: 'africa',
    description: 'Zambia uses Central Africa Time (UTC+2). Lusaka is the capital, and the country shares Victoria Falls with Zimbabwe.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'BW', name: 'Botswana', slug: 'botswana', capital: 'Gaborone',
    population: '2.4M', currency: 'Botswana Pula', currencySymbol: 'P', phoneCode: '+267',
    languages: ['English', 'Setswana'], continent: 'africa',
    description: 'Botswana uses Central Africa Time (UTC+2). Gaborone is the capital, and the Okavango Delta is a UNESCO World Heritage Site.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'NA', name: 'Namibia', slug: 'namibia', capital: 'Windhoek',
    population: '2.5M', currency: 'Namibian Dollar', currencySymbol: 'N$', phoneCode: '+264',
    languages: ['English'], continent: 'africa',
    description: 'Namibia uses Central Africa Time (UTC+2). Windhoek is the capital, known for its German colonial architecture.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'MZ', name: 'Mozambique', slug: 'mozambique', capital: 'Maputo',
    population: '32M', currency: 'Mozambican Metical', currencySymbol: 'MT', phoneCode: '+258',
    languages: ['Portuguese'], continent: 'africa',
    description: 'Mozambique uses Central Africa Time (UTC+2). Maputo is the capital on the Indian Ocean coast.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'AO', name: 'Angola', slug: 'angola', capital: 'Luanda',
    population: '33M', currency: 'Angolan Kwanza', currencySymbol: 'Kz', phoneCode: '+244',
    languages: ['Portuguese'], continent: 'africa',
    description: 'Angola uses West Africa Time (UTC+1). Luanda is the capital and largest city on the Atlantic coast.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'CM', name: 'Cameroon', slug: 'cameroon', capital: 'Yaoundé',
    population: '27M', currency: 'Central African CFA Franc', currencySymbol: 'FCFA', phoneCode: '+237',
    languages: ['French', 'English'], continent: 'africa',
    description: 'Cameroon uses West Africa Time (UTC+1). Yaoundé is the capital, while Douala is the economic hub.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'CI', name: 'Ivory Coast', slug: 'ivory-coast', capital: 'Yamoussoukro',
    population: '27M', currency: 'West African CFA Franc', currencySymbol: 'CFA', phoneCode: '+225',
    languages: ['French'], continent: 'africa',
    description: 'Ivory Coast uses Greenwich Mean Time (UTC+0). Yamoussoukro is the political capital, Abidjan is the economic capital.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'SN', name: 'Senegal', slug: 'senegal', capital: 'Dakar',
    population: '17M', currency: 'West African CFA Franc', currencySymbol: 'CFA', phoneCode: '+221',
    languages: ['French'], continent: 'africa',
    description: 'Senegal uses Greenwich Mean Time (UTC+0). Dakar is the westernmost city in Africa and a major cultural hub.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'ML', name: 'Mali', slug: 'mali', capital: 'Bamako',
    population: '21M', currency: 'West African CFA Franc', currencySymbol: 'CFA', phoneCode: '+223',
    languages: ['French'], continent: 'africa',
    description: 'Mali uses Greenwich Mean Time (UTC+0). Bamako is the capital on the Niger River, and Timbuktu is a historic trading city.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'BF', name: 'Burkina Faso', slug: 'burkina-faso', capital: 'Ouagadougou',
    population: '21M', currency: 'West African CFA Franc', currencySymbol: 'CFA', phoneCode: '+226',
    languages: ['French'], continent: 'africa',
    description: 'Burkina Faso uses Greenwich Mean Time (UTC+0). Ouagadougou is the capital and hosts the FESPACO film festival.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'NE', name: 'Niger', slug: 'niger', capital: 'Niamey',
    population: '25M', currency: 'West African CFA Franc', currencySymbol: 'CFA', phoneCode: '+227',
    languages: ['French'], continent: 'africa',
    description: 'Niger uses West Africa Time (UTC+1). Niamey is the capital on the Niger River.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'TD', name: 'Chad', slug: 'chad', capital: 'N\'Djamena',
    population: '17M', currency: 'Central African CFA Franc', currencySymbol: 'FCFA', phoneCode: '+235',
    languages: ['French', 'Arabic'], continent: 'africa',
    description: 'Chad uses West Africa Time (UTC+1). N\'Djamena is the capital at the confluence of the Chari and Logone rivers.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'MG', name: 'Madagascar', slug: 'madagascar', capital: 'Antananarivo',
    population: '28M', currency: 'Malagasy Ariary', currencySymbol: 'Ar', phoneCode: '+261',
    languages: ['Malagasy', 'French'], continent: 'africa',
    description: 'Madagascar uses East Africa Time (UTC+3). Antananarivo is the highland capital of the world\'s fourth-largest island.',
    timezones: ['EAT (UTC+3)']
  },
  {
    code: 'MU', name: 'Mauritius', slug: 'mauritius', capital: 'Port Louis',
    population: '1.3M', currency: 'Mauritian Rupee', currencySymbol: '₨', phoneCode: '+230',
    languages: ['English', 'French', 'Creole'], continent: 'africa',
    description: 'Mauritius uses Mauritius Time (UTC+4). Port Louis is the capital of this island nation in the Indian Ocean.',
    timezones: ['MUT (UTC+4)']
  },
  {
    code: 'MW', name: 'Malawi', slug: 'malawi', capital: 'Lilongwe',
    population: '20M', currency: 'Malawian Kwacha', currencySymbol: 'MK', phoneCode: '+265',
    languages: ['English', 'Chichewa'], continent: 'africa',
    description: 'Malawi uses Central Africa Time (UTC+2). Lilongwe is the capital, and Lake Malawi covers a third of the country.',
    timezones: ['CAT (UTC+2)']
  },
  {
    code: 'SO', name: 'Somalia', slug: 'somalia', capital: 'Mogadishu',
    population: '16M', currency: 'Somali Shilling', currencySymbol: 'Sh.So.', phoneCode: '+252',
    languages: ['Somali', 'Arabic'], continent: 'africa',
    description: 'Somalia uses East Africa Time (UTC+3). Mogadishu is the capital on the Indian Ocean coast.',
    timezones: ['EAT (UTC+3)']
  },
  {
    code: 'ER', name: 'Eritrea', slug: 'eritrea', capital: 'Asmara',
    population: '3.6M', currency: 'Eritrean Nakfa', currencySymbol: 'Nfk', phoneCode: '+291',
    languages: ['Tigrinya', 'Arabic', 'English'], continent: 'africa',
    description: 'Eritrea uses East Africa Time (UTC+3). Asmara is the capital, known for its Italian colonial architecture.',
    timezones: ['EAT (UTC+3)']
  },
  {
    code: 'DJ', name: 'Djibouti', slug: 'djibouti', capital: 'Djibouti City',
    population: '1M', currency: 'Djiboutian Franc', currencySymbol: 'Fdj', phoneCode: '+253',
    languages: ['French', 'Arabic'], continent: 'africa',
    description: 'Djibouti uses East Africa Time (UTC+3). Djibouti City is the capital, strategically located at the entrance to the Red Sea.',
    timezones: ['EAT (UTC+3)']
  },
  {
    code: 'GA', name: 'Gabon', slug: 'gabon', capital: 'Libreville',
    population: '2.3M', currency: 'Central African CFA Franc', currencySymbol: 'FCFA', phoneCode: '+241',
    languages: ['French'], continent: 'africa',
    description: 'Gabon uses West Africa Time (UTC+1). Libreville is the capital, and the country is known for its rainforests.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'GQ', name: 'Equatorial Guinea', slug: 'equatorial-guinea', capital: 'Malabo',
    population: '1.5M', currency: 'Central African CFA Franc', currencySymbol: 'FCFA', phoneCode: '+240',
    languages: ['Spanish', 'French', 'Portuguese'], continent: 'africa',
    description: 'Equatorial Guinea uses West Africa Time (UTC+1). Malabo on Bioko Island is the capital.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'CF', name: 'Central African Republic', slug: 'central-african-republic', capital: 'Bangui',
    population: '5M', currency: 'Central African CFA Franc', currencySymbol: 'FCFA', phoneCode: '+236',
    languages: ['French', 'Sango'], continent: 'africa',
    description: 'Central African Republic uses West Africa Time (UTC+1). Bangui is the capital on the Ubangi River.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'GW', name: 'Guinea-Bissau', slug: 'guinea-bissau', capital: 'Bissau',
    population: '2M', currency: 'West African CFA Franc', currencySymbol: 'CFA', phoneCode: '+245',
    languages: ['Portuguese'], continent: 'africa',
    description: 'Guinea-Bissau uses Greenwich Mean Time (UTC+0). Bissau is the capital of this small West African nation.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'GN', name: 'Guinea', slug: 'guinea', capital: 'Conakry',
    population: '13M', currency: 'Guinean Franc', currencySymbol: 'FG', phoneCode: '+224',
    languages: ['French'], continent: 'africa',
    description: 'Guinea uses Greenwich Mean Time (UTC+0). Conakry is the capital and largest city on the Atlantic coast.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'SL', name: 'Sierra Leone', slug: 'sierra-leone', capital: 'Freetown',
    population: '8M', currency: 'Sierra Leonean Leone', currencySymbol: 'Le', phoneCode: '+232',
    languages: ['English'], continent: 'africa',
    description: 'Sierra Leone uses Greenwich Mean Time (UTC+0). Freetown is the capital, founded as a settlement for freed slaves.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'LR', name: 'Liberia', slug: 'liberia', capital: 'Monrovia',
    population: '5M', currency: 'Liberian Dollar', currencySymbol: 'L$', phoneCode: '+231',
    languages: ['English'], continent: 'africa',
    description: 'Liberia uses Greenwich Mean Time (UTC+0). Monrovia is the capital, named after US President James Monroe.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'TG', name: 'Togo', slug: 'togo', capital: 'Lomé',
    population: '8M', currency: 'West African CFA Franc', currencySymbol: 'CFA', phoneCode: '+228',
    languages: ['French'], continent: 'africa',
    description: 'Togo uses Greenwich Mean Time (UTC+0). Lomé is the capital and main port on the Gulf of Guinea.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'BJ', name: 'Benin', slug: 'benin', capital: 'Porto-Novo',
    population: '12M', currency: 'West African CFA Franc', currencySymbol: 'CFA', phoneCode: '+229',
    languages: ['French'], continent: 'africa',
    description: 'Benin uses West Africa Time (UTC+1). Porto-Novo is the capital, while Cotonou is the economic center.',
    timezones: ['WAT (UTC+1)']
  },
  {
    code: 'MR', name: 'Mauritania', slug: 'mauritania', capital: 'Nouakchott',
    population: '4.6M', currency: 'Mauritanian Ouguiya', currencySymbol: 'UM', phoneCode: '+222',
    languages: ['Arabic'], continent: 'africa',
    description: 'Mauritania uses Greenwich Mean Time (UTC+0). Nouakchott is the capital, one of the largest cities in the Sahara.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'GM', name: 'Gambia', slug: 'gambia', capital: 'Banjul',
    population: '2.5M', currency: 'Gambian Dalasi', currencySymbol: 'D', phoneCode: '+220',
    languages: ['English'], continent: 'africa',
    description: 'Gambia uses Greenwich Mean Time (UTC+0). Banjul is the capital of Africa\'s smallest mainland country.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'CV', name: 'Cape Verde', slug: 'cape-verde', capital: 'Praia',
    population: '560K', currency: 'Cape Verdean Escudo', currencySymbol: 'CVE', phoneCode: '+238',
    languages: ['Portuguese'], continent: 'africa',
    description: 'Cape Verde uses Cape Verde Time (UTC-1). Praia is the capital of this Atlantic island nation.',
    timezones: ['CVT (UTC-1)']
  },
  {
    code: 'ST', name: 'São Tomé and Príncipe', slug: 'sao-tome-and-principe', capital: 'São Tomé',
    population: '220K', currency: 'São Tomé Dobra', currencySymbol: 'Db', phoneCode: '+239',
    languages: ['Portuguese'], continent: 'africa',
    description: 'São Tomé and Príncipe uses Greenwich Mean Time (UTC+0). São Tomé is the capital of this island nation.',
    timezones: ['GMT (UTC+0)']
  },
  {
    code: 'SC', name: 'Seychelles', slug: 'seychelles', capital: 'Victoria',
    population: '100K', currency: 'Seychellois Rupee', currencySymbol: 'SCR', phoneCode: '+248',
    languages: ['English', 'French', 'Seychellois Creole'], continent: 'africa',
    description: 'Seychelles uses Seychelles Time (UTC+4). Victoria is the capital of this Indian Ocean archipelago.',
    timezones: ['SCT (UTC+4)']
  },
  {
    code: 'KM', name: 'Comoros', slug: 'comoros', capital: 'Moroni',
    population: '890K', currency: 'Comorian Franc', currencySymbol: 'CF', phoneCode: '+269',
    languages: ['Comorian', 'Arabic', 'French'], continent: 'africa',
    description: 'Comoros uses East Africa Time (UTC+3). Moroni is the capital of this volcanic archipelago.',
    timezones: ['EAT (UTC+3)']
  },
  {
    code: 'LS', name: 'Lesotho', slug: 'lesotho', capital: 'Maseru',
    population: '2.1M', currency: 'Lesotho Loti', currencySymbol: 'L', phoneCode: '+266',
    languages: ['Sesotho', 'English'], continent: 'africa',
    description: 'Lesotho uses South Africa Standard Time (UTC+2). Maseru is the capital of this mountainous kingdom.',
    timezones: ['SAST (UTC+2)']
  },
  {
    code: 'SZ', name: 'Eswatini', slug: 'eswatini', capital: 'Mbabane',
    population: '1.2M', currency: 'Swazi Lilangeni', currencySymbol: 'E', phoneCode: '+268',
    languages: ['Swazi', 'English'], continent: 'africa',
    description: 'Eswatini uses South Africa Standard Time (UTC+2). Mbabane is the administrative capital.',
    timezones: ['SAST (UTC+2)']
  },
  // ========== ADDITIONAL EUROPEAN COUNTRIES ==========
  {
    code: 'LU', name: 'Luxembourg', slug: 'luxembourg', capital: 'Luxembourg City',
    population: '640K', currency: 'Euro', currencySymbol: '€', phoneCode: '+352',
    languages: ['Luxembourgish', 'French', 'German'], continent: 'europe',
    description: 'Luxembourg uses Central European Time (UTC+1/+2). Luxembourg City is both capital and a major EU financial center.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'MC', name: 'Monaco', slug: 'monaco', capital: 'Monaco',
    population: '40K', currency: 'Euro', currencySymbol: '€', phoneCode: '+377',
    languages: ['French'], continent: 'europe',
    description: 'Monaco uses Central European Time (UTC+1/+2). The city-state is famous for its casino and Formula 1 Grand Prix.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'AD', name: 'Andorra', slug: 'andorra', capital: 'Andorra la Vella',
    population: '80K', currency: 'Euro', currencySymbol: '€', phoneCode: '+376',
    languages: ['Catalan'], continent: 'europe',
    description: 'Andorra uses Central European Time (UTC+1/+2). Andorra la Vella is the highest capital city in Europe.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'LI', name: 'Liechtenstein', slug: 'liechtenstein', capital: 'Vaduz',
    population: '39K', currency: 'Swiss Franc', currencySymbol: 'CHF', phoneCode: '+423',
    languages: ['German'], continent: 'europe',
    description: 'Liechtenstein uses Central European Time (UTC+1/+2). Vaduz is the capital of this tiny Alpine principality.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'SM', name: 'San Marino', slug: 'san-marino', capital: 'San Marino',
    population: '34K', currency: 'Euro', currencySymbol: '€', phoneCode: '+378',
    languages: ['Italian'], continent: 'europe',
    description: 'San Marino uses Central European Time (UTC+1/+2). It is one of the world\'s oldest republics.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'VA', name: 'Vatican City', slug: 'vatican-city', capital: 'Vatican City',
    population: '800', currency: 'Euro', currencySymbol: '€', phoneCode: '+39',
    languages: ['Italian', 'Latin'], continent: 'europe',
    description: 'Vatican City uses Central European Time (UTC+1/+2). It is the smallest country in the world and center of the Catholic Church.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'MT', name: 'Malta', slug: 'malta', capital: 'Valletta',
    population: '520K', currency: 'Euro', currencySymbol: '€', phoneCode: '+356',
    languages: ['Maltese', 'English'], continent: 'europe',
    description: 'Malta uses Central European Time (UTC+1/+2). Valletta is the capital of this Mediterranean island nation.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'CY', name: 'Cyprus', slug: 'cyprus', capital: 'Nicosia',
    population: '1.2M', currency: 'Euro', currencySymbol: '€', phoneCode: '+357',
    languages: ['Greek', 'Turkish'], continent: 'europe',
    description: 'Cyprus uses Eastern European Time (UTC+2/+3). Nicosia is the world\'s last divided capital city.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'ME', name: 'Montenegro', slug: 'montenegro', capital: 'Podgorica',
    population: '620K', currency: 'Euro', currencySymbol: '€', phoneCode: '+382',
    languages: ['Montenegrin'], continent: 'europe',
    description: 'Montenegro uses Central European Time (UTC+1/+2). Podgorica is the capital of this Adriatic nation.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'BA', name: 'Bosnia and Herzegovina', slug: 'bosnia-and-herzegovina', capital: 'Sarajevo',
    population: '3.3M', currency: 'Bosnia and Herzegovina Convertible Mark', currencySymbol: 'KM', phoneCode: '+387',
    languages: ['Bosnian', 'Croatian', 'Serbian'], continent: 'europe',
    description: 'Bosnia and Herzegovina uses Central European Time (UTC+1/+2). Sarajevo is the capital with a rich history.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'MK', name: 'North Macedonia', slug: 'north-macedonia', capital: 'Skopje',
    population: '2.1M', currency: 'Macedonian Denar', currencySymbol: 'ден', phoneCode: '+389',
    languages: ['Macedonian', 'Albanian'], continent: 'europe',
    description: 'North Macedonia uses Central European Time (UTC+1/+2). Skopje is the capital on the Vardar River.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'AL', name: 'Albania', slug: 'albania', capital: 'Tirana',
    population: '2.9M', currency: 'Albanian Lek', currencySymbol: 'L', phoneCode: '+355',
    languages: ['Albanian'], continent: 'europe',
    description: 'Albania uses Central European Time (UTC+1/+2). Tirana is the capital and largest city.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  {
    code: 'MD', name: 'Moldova', slug: 'moldova', capital: 'Chișinău',
    population: '2.6M', currency: 'Moldovan Leu', currencySymbol: 'L', phoneCode: '+373',
    languages: ['Romanian'], continent: 'europe',
    description: 'Moldova uses Eastern European Time (UTC+2/+3). Chișinău is the capital and largest city.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'BY', name: 'Belarus', slug: 'belarus', capital: 'Minsk',
    population: '9.4M', currency: 'Belarusian Ruble', currencySymbol: 'Br', phoneCode: '+375',
    languages: ['Belarusian', 'Russian'], continent: 'europe',
    description: 'Belarus uses Moscow Time (UTC+3) year-round. Minsk is the capital and largest city.',
    timezones: ['MSK (UTC+3)']
  },
  {
    code: 'XK', name: 'Kosovo', slug: 'kosovo', capital: 'Pristina',
    population: '1.8M', currency: 'Euro', currencySymbol: '€', phoneCode: '+383',
    languages: ['Albanian', 'Serbian'], continent: 'europe',
    description: 'Kosovo uses Central European Time (UTC+1/+2). Pristina is the capital of this partially recognized country.',
    timezones: ['CET (UTC+1)', 'CEST (UTC+2)']
  },
  // ========== ADDITIONAL ASIAN COUNTRIES ==========
  {
    code: 'AZ', name: 'Azerbaijan', slug: 'azerbaijan', capital: 'Baku',
    population: '10M', currency: 'Azerbaijani Manat', currencySymbol: '₼', phoneCode: '+994',
    languages: ['Azerbaijani'], continent: 'asia',
    description: 'Azerbaijan uses Azerbaijan Time (UTC+4). Baku is the capital on the Caspian Sea coast.',
    timezones: ['AZT (UTC+4)']
  },
  {
    code: 'AM', name: 'Armenia', slug: 'armenia', capital: 'Yerevan',
    population: '3M', currency: 'Armenian Dram', currencySymbol: '֏', phoneCode: '+374',
    languages: ['Armenian'], continent: 'asia',
    description: 'Armenia uses Armenia Time (UTC+4). Yerevan is one of the world\'s oldest continuously inhabited cities.',
    timezones: ['AMT (UTC+4)']
  },
  {
    code: 'GE', name: 'Georgia', slug: 'georgia', capital: 'Tbilisi',
    population: '3.7M', currency: 'Georgian Lari', currencySymbol: '₾', phoneCode: '+995',
    languages: ['Georgian'], continent: 'asia',
    description: 'Georgia uses Georgia Standard Time (UTC+4). Tbilisi is the capital, known for its diverse architecture.',
    timezones: ['GET (UTC+4)']
  },
  {
    code: 'UZ', name: 'Uzbekistan', slug: 'uzbekistan', capital: 'Tashkent',
    population: '34M', currency: 'Uzbekistani Som', currencySymbol: 'soʻm', phoneCode: '+998',
    languages: ['Uzbek'], continent: 'asia',
    description: 'Uzbekistan uses Uzbekistan Time (UTC+5). Tashkent is the capital, and Samarkand is on the ancient Silk Road.',
    timezones: ['UZT (UTC+5)']
  },
  {
    code: 'KZ', name: 'Kazakhstan', slug: 'kazakhstan', capital: 'Astana',
    population: '19M', currency: 'Kazakhstani Tenge', currencySymbol: '₸', phoneCode: '+7',
    languages: ['Kazakh', 'Russian'], continent: 'asia',
    description: 'Kazakhstan spans two time zones: UTC+5 and UTC+6. Astana is the capital of the world\'s largest landlocked country.',
    timezones: ['AQTT (UTC+5)', 'ALMT (UTC+6)']
  },
  {
    code: 'TM', name: 'Turkmenistan', slug: 'turkmenistan', capital: 'Ashgabat',
    population: '6M', currency: 'Turkmenistan Manat', currencySymbol: 'm', phoneCode: '+993',
    languages: ['Turkmen'], continent: 'asia',
    description: 'Turkmenistan uses Turkmenistan Time (UTC+5). Ashgabat is the marble-clad capital city.',
    timezones: ['TMT (UTC+5)']
  },
  {
    code: 'TJ', name: 'Tajikistan', slug: 'tajikistan', capital: 'Dushanbe',
    population: '10M', currency: 'Tajikistani Somoni', currencySymbol: 'SM', phoneCode: '+992',
    languages: ['Tajik'], continent: 'asia',
    description: 'Tajikistan uses Tajikistan Time (UTC+5). Dushanbe is the capital surrounded by mountains.',
    timezones: ['TJT (UTC+5)']
  },
  {
    code: 'KG', name: 'Kyrgyzstan', slug: 'kyrgyzstan', capital: 'Bishkek',
    population: '6.5M', currency: 'Kyrgyzstani Som', currencySymbol: 'с', phoneCode: '+996',
    languages: ['Kyrgyz', 'Russian'], continent: 'asia',
    description: 'Kyrgyzstan uses Kyrgyzstan Time (UTC+6). Bishkek is the capital at the foot of the Tian Shan mountains.',
    timezones: ['KGT (UTC+6)']
  },
  {
    code: 'MN', name: 'Mongolia', slug: 'mongolia', capital: 'Ulaanbaatar',
    population: '3.3M', currency: 'Mongolian Tögrög', currencySymbol: '₮', phoneCode: '+976',
    languages: ['Mongolian'], continent: 'asia',
    description: 'Mongolia uses two time zones. Ulaanbaatar uses UTC+8. The country is known for its vast steppes.',
    timezones: ['ULAT (UTC+8)', 'HOVT (UTC+7)']
  },
  {
    code: 'LA', name: 'Laos', slug: 'laos', capital: 'Vientiane',
    population: '7.4M', currency: 'Lao Kip', currencySymbol: '₭', phoneCode: '+856',
    languages: ['Lao'], continent: 'asia',
    description: 'Laos uses Indochina Time (UTC+7). Vientiane is the capital on the Mekong River.',
    timezones: ['ICT (UTC+7)']
  },
  {
    code: 'BN', name: 'Brunei', slug: 'brunei', capital: 'Bandar Seri Begawan',
    population: '440K', currency: 'Brunei Dollar', currencySymbol: 'B$', phoneCode: '+673',
    languages: ['Malay'], continent: 'asia',
    description: 'Brunei uses Brunei Time (UTC+8). Bandar Seri Begawan is the capital of this oil-rich sultanate.',
    timezones: ['BNT (UTC+8)']
  },
  {
    code: 'TL', name: 'Timor-Leste', slug: 'timor-leste', capital: 'Dili',
    population: '1.3M', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+670',
    languages: ['Portuguese', 'Tetum'], continent: 'asia',
    description: 'Timor-Leste uses Timor-Leste Time (UTC+9). Dili is the capital of this young nation.',
    timezones: ['TLT (UTC+9)']
  },
  {
    code: 'MV', name: 'Maldives', slug: 'maldives', capital: 'Malé',
    population: '540K', currency: 'Maldivian Rufiyaa', currencySymbol: 'Rf', phoneCode: '+960',
    languages: ['Dhivehi'], continent: 'asia',
    description: 'Maldives uses Maldives Time (UTC+5). Malé is the capital of this Indian Ocean island nation.',
    timezones: ['MVT (UTC+5)']
  },
  {
    code: 'BT', name: 'Bhutan', slug: 'bhutan', capital: 'Thimphu',
    population: '780K', currency: 'Bhutanese Ngultrum', currencySymbol: 'Nu.', phoneCode: '+975',
    languages: ['Dzongkha'], continent: 'asia',
    description: 'Bhutan uses Bhutan Time (UTC+6). Thimphu is the capital of this Himalayan kingdom.',
    timezones: ['BTT (UTC+6)']
  },
  {
    code: 'AF', name: 'Afghanistan', slug: 'afghanistan', capital: 'Kabul',
    population: '40M', currency: 'Afghan Afghani', currencySymbol: '؋', phoneCode: '+93',
    languages: ['Pashto', 'Dari'], continent: 'asia',
    description: 'Afghanistan uses Afghanistan Time (UTC+4:30). Kabul is the capital and largest city.',
    timezones: ['AFT (UTC+4:30)']
  },
  {
    code: 'IQ', name: 'Iraq', slug: 'iraq', capital: 'Baghdad',
    population: '41M', currency: 'Iraqi Dinar', currencySymbol: 'ع.د', phoneCode: '+964',
    languages: ['Arabic', 'Kurdish'], continent: 'asia',
    description: 'Iraq uses Arabia Standard Time (UTC+3). Baghdad is the capital on the Tigris River.',
    timezones: ['AST (UTC+3)']
  },
  {
    code: 'SY', name: 'Syria', slug: 'syria', capital: 'Damascus',
    population: '18M', currency: 'Syrian Pound', currencySymbol: '£S', phoneCode: '+963',
    languages: ['Arabic'], continent: 'asia',
    description: 'Syria uses Eastern European Time (UTC+3). Damascus is one of the oldest continuously inhabited cities.',
    timezones: ['EET (UTC+3)']
  },
  {
    code: 'JO', name: 'Jordan', slug: 'jordan', capital: 'Amman',
    population: '10M', currency: 'Jordanian Dinar', currencySymbol: 'JD', phoneCode: '+962',
    languages: ['Arabic'], continent: 'asia',
    description: 'Jordan uses Eastern European Time (UTC+3). Amman is the capital, and Petra is a famous ancient city.',
    timezones: ['EET (UTC+3)']
  },
  {
    code: 'LB', name: 'Lebanon', slug: 'lebanon', capital: 'Beirut',
    population: '6.8M', currency: 'Lebanese Pound', currencySymbol: 'ل.ل', phoneCode: '+961',
    languages: ['Arabic', 'French'], continent: 'asia',
    description: 'Lebanon uses Eastern European Time (UTC+2/+3). Beirut is the capital on the Mediterranean coast.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  {
    code: 'YE', name: 'Yemen', slug: 'yemen', capital: 'Sanaa',
    population: '30M', currency: 'Yemeni Rial', currencySymbol: '﷼', phoneCode: '+967',
    languages: ['Arabic'], continent: 'asia',
    description: 'Yemen uses Arabia Standard Time (UTC+3). Sanaa is the capital with ancient architecture.',
    timezones: ['AST (UTC+3)']
  },
  {
    code: 'OM', name: 'Oman', slug: 'oman', capital: 'Muscat',
    population: '5M', currency: 'Omani Rial', currencySymbol: 'ر.ع.', phoneCode: '+968',
    languages: ['Arabic'], continent: 'asia',
    description: 'Oman uses Gulf Standard Time (UTC+4). Muscat is the capital on the Gulf of Oman.',
    timezones: ['GST (UTC+4)']
  },
  {
    code: 'BH', name: 'Bahrain', slug: 'bahrain', capital: 'Manama',
    population: '1.5M', currency: 'Bahraini Dinar', currencySymbol: 'BD', phoneCode: '+973',
    languages: ['Arabic'], continent: 'asia',
    description: 'Bahrain uses Arabia Standard Time (UTC+3). Manama is the capital of this island kingdom.',
    timezones: ['AST (UTC+3)']
  },
  {
    code: 'KW', name: 'Kuwait', slug: 'kuwait', capital: 'Kuwait City',
    population: '4.3M', currency: 'Kuwaiti Dinar', currencySymbol: 'KD', phoneCode: '+965',
    languages: ['Arabic'], continent: 'asia',
    description: 'Kuwait uses Arabia Standard Time (UTC+3). Kuwait City is the capital and economic center.',
    timezones: ['AST (UTC+3)']
  },
  {
    code: 'PS', name: 'Palestine', slug: 'palestine', capital: 'Ramallah',
    population: '5M', currency: 'Israeli Shekel', currencySymbol: '₪', phoneCode: '+970',
    languages: ['Arabic'], continent: 'asia',
    description: 'Palestine uses Eastern European Time (UTC+2/+3). Ramallah serves as the administrative capital.',
    timezones: ['EET (UTC+2)', 'EEST (UTC+3)']
  },
  // ========== ADDITIONAL AMERICAS COUNTRIES ==========
  {
    code: 'JM', name: 'Jamaica', slug: 'jamaica', capital: 'Kingston',
    population: '3M', currency: 'Jamaican Dollar', currencySymbol: 'J$', phoneCode: '+1-876',
    languages: ['English'], continent: 'americas',
    description: 'Jamaica uses Eastern Standard Time (UTC-5) year-round. Kingston is the capital and largest city.',
    timezones: ['EST (UTC-5)']
  },
  {
    code: 'TT', name: 'Trinidad and Tobago', slug: 'trinidad-and-tobago', capital: 'Port of Spain',
    population: '1.4M', currency: 'Trinidad and Tobago Dollar', currencySymbol: 'TT$', phoneCode: '+1-868',
    languages: ['English'], continent: 'americas',
    description: 'Trinidad and Tobago uses Atlantic Standard Time (UTC-4). Port of Spain is the capital.',
    timezones: ['AST (UTC-4)']
  },
  {
    code: 'BS', name: 'Bahamas', slug: 'bahamas', capital: 'Nassau',
    population: '400K', currency: 'Bahamian Dollar', currencySymbol: 'B$', phoneCode: '+1-242',
    languages: ['English'], continent: 'americas',
    description: 'The Bahamas uses Eastern Time (UTC-5/-4). Nassau is the capital on New Providence Island.',
    timezones: ['EST (UTC-5)', 'EDT (UTC-4)']
  },
  {
    code: 'BB', name: 'Barbados', slug: 'barbados', capital: 'Bridgetown',
    population: '290K', currency: 'Barbadian Dollar', currencySymbol: 'Bds$', phoneCode: '+1-246',
    languages: ['English'], continent: 'americas',
    description: 'Barbados uses Atlantic Standard Time (UTC-4). Bridgetown is the capital of this island nation.',
    timezones: ['AST (UTC-4)']
  },
  {
    code: 'HT', name: 'Haiti', slug: 'haiti', capital: 'Port-au-Prince',
    population: '11M', currency: 'Haitian Gourde', currencySymbol: 'G', phoneCode: '+509',
    languages: ['French', 'Haitian Creole'], continent: 'americas',
    description: 'Haiti uses Eastern Time (UTC-5/-4). Port-au-Prince is the capital on the island of Hispaniola.',
    timezones: ['EST (UTC-5)', 'EDT (UTC-4)']
  },
  {
    code: 'DO', name: 'Dominican Republic', slug: 'dominican-republic', capital: 'Santo Domingo',
    population: '11M', currency: 'Dominican Peso', currencySymbol: 'RD$', phoneCode: '+1-809',
    languages: ['Spanish'], continent: 'americas',
    description: 'Dominican Republic uses Atlantic Standard Time (UTC-4). Santo Domingo is the oldest European city in the Americas.',
    timezones: ['AST (UTC-4)']
  },
  {
    code: 'GT', name: 'Guatemala', slug: 'guatemala', capital: 'Guatemala City',
    population: '17M', currency: 'Guatemalan Quetzal', currencySymbol: 'Q', phoneCode: '+502',
    languages: ['Spanish'], continent: 'americas',
    description: 'Guatemala uses Central Standard Time (UTC-6). Guatemala City is the capital and largest city.',
    timezones: ['CST (UTC-6)']
  },
  {
    code: 'HN', name: 'Honduras', slug: 'honduras', capital: 'Tegucigalpa',
    population: '10M', currency: 'Honduran Lempira', currencySymbol: 'L', phoneCode: '+504',
    languages: ['Spanish'], continent: 'americas',
    description: 'Honduras uses Central Standard Time (UTC-6). Tegucigalpa is the capital in the central highlands.',
    timezones: ['CST (UTC-6)']
  },
  {
    code: 'SV', name: 'El Salvador', slug: 'el-salvador', capital: 'San Salvador',
    population: '6.5M', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+503',
    languages: ['Spanish'], continent: 'americas',
    description: 'El Salvador uses Central Standard Time (UTC-6). San Salvador is the capital of Central America\'s smallest country.',
    timezones: ['CST (UTC-6)']
  },
  {
    code: 'NI', name: 'Nicaragua', slug: 'nicaragua', capital: 'Managua',
    population: '6.6M', currency: 'Nicaraguan Córdoba', currencySymbol: 'C$', phoneCode: '+505',
    languages: ['Spanish'], continent: 'americas',
    description: 'Nicaragua uses Central Standard Time (UTC-6). Managua is the capital on Lake Managua.',
    timezones: ['CST (UTC-6)']
  },
  {
    code: 'BZ', name: 'Belize', slug: 'belize', capital: 'Belmopan',
    population: '400K', currency: 'Belize Dollar', currencySymbol: 'BZ$', phoneCode: '+501',
    languages: ['English'], continent: 'americas',
    description: 'Belize uses Central Standard Time (UTC-6). Belmopan is the capital, though Belize City is larger.',
    timezones: ['CST (UTC-6)']
  },
  {
    code: 'BO', name: 'Bolivia', slug: 'bolivia', capital: 'Sucre',
    population: '12M', currency: 'Bolivian Boliviano', currencySymbol: 'Bs.', phoneCode: '+591',
    languages: ['Spanish'], continent: 'americas',
    description: 'Bolivia uses Bolivia Time (UTC-4). Sucre is the constitutional capital, La Paz is the seat of government.',
    timezones: ['BOT (UTC-4)']
  },
  {
    code: 'PY', name: 'Paraguay', slug: 'paraguay', capital: 'Asunción',
    population: '7.2M', currency: 'Paraguayan Guaraní', currencySymbol: '₲', phoneCode: '+595',
    languages: ['Spanish', 'Guaraní'], continent: 'americas',
    description: 'Paraguay uses Paraguay Time (UTC-4/-3). Asunción is the capital on the Paraguay River.',
    timezones: ['PYT (UTC-4)', 'PYST (UTC-3)']
  },
  {
    code: 'EC', name: 'Ecuador', slug: 'ecuador', capital: 'Quito',
    population: '18M', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+593',
    languages: ['Spanish'], continent: 'americas',
    description: 'Ecuador uses Ecuador Time (UTC-5). Quito is the capital, and the Galápagos Islands use UTC-6.',
    timezones: ['ECT (UTC-5)', 'GALT (UTC-6)']
  },
  {
    code: 'GY', name: 'Guyana', slug: 'guyana', capital: 'Georgetown',
    population: '790K', currency: 'Guyanese Dollar', currencySymbol: 'G$', phoneCode: '+592',
    languages: ['English'], continent: 'americas',
    description: 'Guyana uses Guyana Time (UTC-4). Georgetown is the capital on the Atlantic coast.',
    timezones: ['GYT (UTC-4)']
  },
  {
    code: 'SR', name: 'Suriname', slug: 'suriname', capital: 'Paramaribo',
    population: '590K', currency: 'Surinamese Dollar', currencySymbol: 'SRD', phoneCode: '+597',
    languages: ['Dutch'], continent: 'americas',
    description: 'Suriname uses Suriname Time (UTC-3). Paramaribo is the capital with Dutch colonial architecture.',
    timezones: ['SRT (UTC-3)']
  },
  {
    code: 'PR', name: 'Puerto Rico', slug: 'puerto-rico', capital: 'San Juan',
    population: '3.2M', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+1-787',
    languages: ['Spanish', 'English'], continent: 'americas',
    description: 'Puerto Rico uses Atlantic Standard Time (UTC-4). San Juan is the capital of this US territory.',
    timezones: ['AST (UTC-4)']
  },
  // ========== ADDITIONAL OCEANIA COUNTRIES ==========
  {
    code: 'PG', name: 'Papua New Guinea', slug: 'papua-new-guinea', capital: 'Port Moresby',
    population: '9M', currency: 'Papua New Guinean Kina', currencySymbol: 'K', phoneCode: '+675',
    languages: ['English', 'Tok Pisin', 'Hiri Motu'], continent: 'oceania',
    description: 'Papua New Guinea uses Papua New Guinea Time (UTC+10). Port Moresby is the capital.',
    timezones: ['PGT (UTC+10)']
  },
  {
    code: 'SB', name: 'Solomon Islands', slug: 'solomon-islands', capital: 'Honiara',
    population: '700K', currency: 'Solomon Islands Dollar', currencySymbol: 'SI$', phoneCode: '+677',
    languages: ['English'], continent: 'oceania',
    description: 'Solomon Islands uses Solomon Islands Time (UTC+11). Honiara is the capital on Guadalcanal.',
    timezones: ['SBT (UTC+11)']
  },
  {
    code: 'VU', name: 'Vanuatu', slug: 'vanuatu', capital: 'Port Vila',
    population: '310K', currency: 'Vanuatu Vatu', currencySymbol: 'VT', phoneCode: '+678',
    languages: ['Bislama', 'English', 'French'], continent: 'oceania',
    description: 'Vanuatu uses Vanuatu Time (UTC+11). Port Vila is the capital of this Pacific island nation.',
    timezones: ['VUT (UTC+11)']
  },
  {
    code: 'WS', name: 'Samoa', slug: 'samoa', capital: 'Apia',
    population: '200K', currency: 'Samoan Tālā', currencySymbol: 'WS$', phoneCode: '+685',
    languages: ['Samoan', 'English'], continent: 'oceania',
    description: 'Samoa uses Samoa Time (UTC+13). Apia is the capital of this Polynesian island nation.',
    timezones: ['WST (UTC+13)']
  },
  {
    code: 'TO', name: 'Tonga', slug: 'tonga', capital: 'Nukuʻalofa',
    population: '100K', currency: 'Tongan Paʻanga', currencySymbol: 'T$', phoneCode: '+676',
    languages: ['Tongan', 'English'], continent: 'oceania',
    description: 'Tonga uses Tonga Time (UTC+13). Nukuʻalofa is the capital of this Polynesian kingdom.',
    timezones: ['TOT (UTC+13)']
  },
  {
    code: 'KI', name: 'Kiribati', slug: 'kiribati', capital: 'Tarawa',
    population: '120K', currency: 'Australian Dollar', currencySymbol: 'A$', phoneCode: '+686',
    languages: ['English', 'Gilbertese'], continent: 'oceania',
    description: 'Kiribati spans three time zones from UTC+12 to UTC+14. Tarawa is the capital atoll.',
    timezones: ['GILT (UTC+12)', 'PHOT (UTC+13)', 'LINT (UTC+14)']
  },
  {
    code: 'FM', name: 'Micronesia', slug: 'micronesia', capital: 'Palikir',
    population: '115K', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+691',
    languages: ['English'], continent: 'oceania',
    description: 'Micronesia uses two time zones (UTC+10 and UTC+11). Palikir is the capital on Pohnpei.',
    timezones: ['CHUT (UTC+10)', 'PONT (UTC+11)']
  },
  {
    code: 'PW', name: 'Palau', slug: 'palau', capital: 'Ngerulmud',
    population: '18K', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+680',
    languages: ['Palauan', 'English'], continent: 'oceania',
    description: 'Palau uses Palau Time (UTC+9). Ngerulmud is the capital, though Koror is the largest city.',
    timezones: ['PWT (UTC+9)']
  },
  {
    code: 'MH', name: 'Marshall Islands', slug: 'marshall-islands', capital: 'Majuro',
    population: '60K', currency: 'US Dollar', currencySymbol: '$', phoneCode: '+692',
    languages: ['Marshallese', 'English'], continent: 'oceania',
    description: 'Marshall Islands uses Marshall Islands Time (UTC+12). Majuro is the capital atoll.',
    timezones: ['MHT (UTC+12)']
  },
  {
    code: 'NR', name: 'Nauru', slug: 'nauru', capital: 'Yaren',
    population: '10K', currency: 'Australian Dollar', currencySymbol: 'A$', phoneCode: '+674',
    languages: ['Nauruan', 'English'], continent: 'oceania',
    description: 'Nauru uses Nauru Time (UTC+12). Yaren is the de facto capital of the world\'s smallest island nation.',
    timezones: ['NRT (UTC+12)']
  },
  {
    code: 'TV', name: 'Tuvalu', slug: 'tuvalu', capital: 'Funafuti',
    population: '12K', currency: 'Australian Dollar', currencySymbol: 'A$', phoneCode: '+688',
    languages: ['Tuvaluan', 'English'], continent: 'oceania',
    description: 'Tuvalu uses Tuvalu Time (UTC+12). Funafuti is the capital of this small Pacific nation.',
    timezones: ['TVT (UTC+12)']
  }
]

