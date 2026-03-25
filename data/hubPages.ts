/**
 * Hub Page Mappings
 * Hangi ülkenin/bölgenin özel hub sayfası olduğunu merkezi olarak tanımlar.
 *
 * Key   = Country slug (data/countries.ts'deki slug)
 * Value = Hub page route slug (app/[slug]/ dizini)
 *
 * Yeni bir hub page eklendiğinde buraya tek satır eklenir.
 */
export const COUNTRY_HUB_SLUGS: Record<string, string> = {
  // Americas
  'argentina':         'argentina',
  'brazil':            'brazil',
  'canada':            'canada',
  'chile':             'chile',
  'colombia':          'colombia',
  'cuba':              'cuba',
  'mexico':            'mexico',
  'peru':              'peru',
  'venezuela':         'venezuela',
  // Europe
  'france':            'france',
  'germany':           'germany',
  'greece':            'greece',
  'italy':             'italy',
  'netherlands':       'netherlands',
  'poland':            'poland',
  'portugal':          'portugal',
  'russia':            'russia',
  'spain':             'spain',
  'sweden':            'sweden',
  'turkey':            'turkey',
  'ukraine':           'ukraine',
  'united-kingdom':    'uk',
  // Asia
  'bangladesh':        'bangladesh',
  'china':             'china',
  'india':             'india',
  'indonesia':         'indonesia',
  'iran':              'iran',
  'japan':             'japan',
  'malaysia':          'malaysia',
  'myanmar':           'myanmar',
  'nepal':             'nepal',
  'pakistan':          'pakistan',
  'philippines':       'philippines',
  'saudi-arabia':      'saudi-arabia',
  'singapore':         'singapore',
  'south-korea':       'south-korea',
  'thailand':          'thailand',
  'uzbekistan':        'uzbekistan',
  'vietnam':           'vietnam',
  // Africa
  'angola':            'angola',
  'cameroon':          'cameroon',
  'egypt':             'egypt',
  'ethiopia':          'ethiopia',
  'ghana':             'ghana',
  'ivory-coast':       'ivory-coast',
  'kenya':             'kenya',
  'morocco':           'morocco',
  'nigeria':           'nigeria',
  'senegal':           'senegal',
  'south-africa':      'south-africa',
  'tanzania':          'tanzania',
  // Oceania
  'australia':         'australia',
  'new-zealand':       'new-zealand',
}

/**
 * US State Hub Pages — ülke listesinde görünmez ama ayrıca yönetilir.
 * Sitemap ve diğer yerlerden referans almak için burada tutulur.
 */
export const US_STATE_HUB_SLUGS: string[] = [
  'alabama', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut',
  'florida', 'georgia-state', 'illinois', 'indiana', 'iowa', 'kansas',
  'kentucky', 'louisiana', 'maryland', 'massachusetts', 'michigan',
  'minnesota', 'mississippi', 'missouri', 'nebraska', 'nevada',
  'new-jersey', 'new-mexico', 'new-york-state', 'north-carolina',
  'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
  'south-carolina', 'tennessee', 'texas', 'utah', 'virginia',
  'washington-state', 'west-virginia', 'wisconsin',
]
