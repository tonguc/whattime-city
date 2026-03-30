import { cities, countries, getTier1Cities } from '@/lib/cities'
import { COUNTRY_HUB_SLUGS } from '@/data/hubPages'
import { areaCodeList } from '@/data/area-codes'

export default async function sitemap() {
  const baseUrl = 'https://whattime.city'
  const now = new Date()

  // Ana sayfalar (trailing slash ile)
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/map/`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/country/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/widget/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Tool + content sayfaları
  const toolRoutes = [
    { slug: 'time', priority: 0.9 },
    { slug: 'time-converter', priority: 0.8 },
    { slug: 'meeting', priority: 0.8 },
    { slug: 'india', priority: 0.9 },
    { slug: 'brazil', priority: 0.9 },
    { slug: 'nigeria', priority: 0.9 },
    { slug: 'california', priority: 0.9 },
    { slug: 'philippines', priority: 0.9 },
    { slug: 'uk', priority: 0.9 },
    { slug: 'australia', priority: 0.9 },
    { slug: 'japan', priority: 0.9 },
    { slug: 'germany', priority: 0.9 },
    { slug: 'canada', priority: 0.9 },
    { slug: 'france', priority: 0.9 },
    { slug: 'mexico', priority: 0.9 },
    { slug: 'dubai', priority: 0.9 },
    { slug: 'singapore', priority: 0.9 },
    { slug: 'south-korea', priority: 0.9 },
    { slug: 'china', priority: 0.9 },
    { slug: 'texas', priority: 0.9 },
    { slug: 'turkey', priority: 0.9 },
    { slug: 'pakistan', priority: 0.9 },
    { slug: 'florida', priority: 0.9 },
    { slug: 'new-york-state', priority: 0.9 },
    { slug: 'indonesia', priority: 0.9 },
    { slug: 'egypt', priority: 0.9 },
    { slug: 'illinois', priority: 0.9 },
    { slug: 'washington-state', priority: 0.9 },
    { slug: 'vietnam', priority: 0.9 },
    { slug: 'russia', priority: 0.9 },
    { slug: 'netherlands', priority: 0.9 },
    { slug: 'spain', priority: 0.9 },
    { slug: 'ohio', priority: 0.9 },
    { slug: 'georgia-state', priority: 0.9 },
    { slug: 'michigan', priority: 0.9 },
    { slug: 'new-zealand', priority: 0.9 },
    { slug: 'sweden', priority: 0.9 },
    { slug: 'italy', priority: 0.9 },
    { slug: 'argentina', priority: 0.9 },
    { slug: 'saudi-arabia', priority: 0.9 },
    { slug: 'north-carolina', priority: 0.9 },
    { slug: 'pennsylvania', priority: 0.9 },
    { slug: 'arizona', priority: 0.9 },
    { slug: 'colorado', priority: 0.9 },
    { slug: 'virginia', priority: 0.9 },
    { slug: 'minnesota', priority: 0.9 },
    { slug: 'south-africa', priority: 0.9 },
    { slug: 'kenya', priority: 0.9 },
    { slug: 'thailand', priority: 0.9 },
    { slug: 'malaysia', priority: 0.9 },
    { slug: 'colombia', priority: 0.9 },
    { slug: 'morocco', priority: 0.9 },
    { slug: 'tennessee', priority: 0.9 },
    { slug: 'nevada', priority: 0.9 },
    { slug: 'oregon', priority: 0.9 },
    { slug: 'massachusetts', priority: 0.9 },
    { slug: 'poland', priority: 0.9 },
    { slug: 'ukraine', priority: 0.9 },
    { slug: 'bangladesh', priority: 0.9 },
    { slug: 'ethiopia', priority: 0.9 },
    { slug: 'wisconsin', priority: 0.9 },
    { slug: 'maryland', priority: 0.9 },
    { slug: 'new-jersey', priority: 0.9 },
    { slug: 'utah', priority: 0.9 },
    { slug: 'peru', priority: 0.9 },
    { slug: 'chile', priority: 0.9 },
    { slug: 'greece', priority: 0.9 },
    { slug: 'portugal', priority: 0.9 },
    { slug: 'connecticut', priority: 0.9 },
    { slug: 'missouri', priority: 0.9 },
    { slug: 'indiana', priority: 0.9 },
    { slug: 'iowa', priority: 0.9 },
    { slug: 'ghana', priority: 0.9 },
    { slug: 'tanzania', priority: 0.9 },
    { slug: 'venezuela', priority: 0.9 },
    { slug: 'myanmar', priority: 0.9 },
    { slug: 'kansas', priority: 0.9 },
    { slug: 'alabama', priority: 0.9 },
    { slug: 'south-carolina', priority: 0.9 },
    { slug: 'kentucky', priority: 0.9 },
    { slug: 'iran', priority: 0.9 },
    { slug: 'nepal', priority: 0.9 },
    { slug: 'cuba', priority: 0.9 },
    { slug: 'cameroon', priority: 0.9 },
    { slug: 'oklahoma', priority: 0.9 },
    { slug: 'louisiana', priority: 0.9 },
    { slug: 'arkansas', priority: 0.9 },
    { slug: 'mississippi', priority: 0.9 },
    { slug: 'senegal', priority: 0.9 },
    { slug: 'ivory-coast', priority: 0.9 },
    { slug: 'angola', priority: 0.9 },
    { slug: 'uzbekistan', priority: 0.9 },
    { slug: 'north-dakota', priority: 0.9 },
    { slug: 'west-virginia', priority: 0.9 },
    { slug: 'nebraska', priority: 0.9 },
    { slug: 'new-mexico', priority: 0.9 },
    { slug: 'alaska', priority: 0.8 },
    { slug: 'washington-dc', priority: 0.8 },
    { slug: 'hawaii', priority: 0.8 },
    { slug: 'montana', priority: 0.8 },
    { slug: 'idaho', priority: 0.8 },
    { slug: 'wyoming', priority: 0.8 },
    { slug: 'south-dakota', priority: 0.8 },
    { slug: 'daylight-saving-time', priority: 0.8 },
    // DST cluster subpages
    { slug: 'daylight-saving-time/usa', priority: 0.8 },
    { slug: 'daylight-saving-time/uk', priority: 0.8 },
    { slug: 'daylight-saving-time/europe', priority: 0.8 },
    { slug: 'daylight-saving-time/australia', priority: 0.8 },
    // Timezone pair pages — high-volume abbreviation queries
    { slug: 'pst-to-est', priority: 0.8 },
    { slug: 'gmt-to-est', priority: 0.8 },
    { slug: 'cst-to-est', priority: 0.8 },
    { slug: 'est-to-pst', priority: 0.8 },
    { slug: 'ist-to-est', priority: 0.8 },
    { slug: 'est-to-gmt', priority: 0.8 },
    { slug: 'cst-to-pst', priority: 0.8 },
    // New TZ pairs — India corridor + Asia/Pacific
    { slug: 'ist-to-pst', priority: 0.8 },
    { slug: 'pst-to-ist', priority: 0.8 },
    { slug: 'ist-to-cst', priority: 0.8 },
    { slug: 'cst-to-ist', priority: 0.8 },
    { slug: 'ist-to-gmt', priority: 0.8 },
    { slug: 'est-to-ist', priority: 0.8 },
    { slug: 'mst-to-ist', priority: 0.7 },
    { slug: 'jst-to-est', priority: 0.7 },
    { slug: 'aest-to-est', priority: 0.7 },
    { slug: 'cet-to-est', priority: 0.7 },
    // US Timezone hub
    { slug: 'us-time-zones', priority: 0.9 },
    // European TZ explainers
    { slug: 'cest-timezone', priority: 0.8 },
    { slug: 'bst-timezone', priority: 0.8 },
    // US Timezone explainer pages — high search volume
    { slug: 'eastern-time-zone', priority: 0.9 },
    { slug: 'central-time-zone', priority: 0.9 },
    { slug: 'mountain-time-zone', priority: 0.9 },
    { slug: 'pacific-time-zone', priority: 0.9 },
    { slug: 'alaska-time-zone', priority: 0.8 },
    { slug: 'hawaii-time-zone', priority: 0.8 },
    // New TZ pair pages — US domestic + UTC
    { slug: 'est-to-cst', priority: 0.8 },
    { slug: 'gmt-to-pst', priority: 0.8 },
    { slug: 'pst-to-gmt', priority: 0.8 },
    { slug: 'gmt-to-cst', priority: 0.8 },
    { slug: 'cst-to-gmt', priority: 0.8 },
    { slug: 'cst-to-mst', priority: 0.8 },
    { slug: 'mst-to-cst', priority: 0.8 },
    { slug: 'utc-to-mst', priority: 0.8 },
    { slug: 'mst-to-utc', priority: 0.8 },
    { slug: 'jst-to-pst', priority: 0.8 },
    { slug: 'aest-to-pst', priority: 0.7 },
    { slug: 'cet-to-pst', priority: 0.7 },
    { slug: 'bst-to-est', priority: 0.8 },
    { slug: 'bst-to-pst', priority: 0.8 },
    { slug: 'bst-to-cst', priority: 0.8 },
    { slug: 'ist-to-mst', priority: 0.8 },
    { slug: 'jst-to-cst', priority: 0.8 },
    { slug: 'jst-to-gmt', priority: 0.8 },
    { slug: 'aest-to-cst', priority: 0.7 },
    { slug: 'aest-to-gmt', priority: 0.7 },
    { slug: 'cet-to-cst', priority: 0.8 },
    { slug: 'cet-to-gmt', priority: 0.8 },
    { slug: 'gmt-to-mst', priority: 0.8 },
    { slug: 'mst-to-gmt', priority: 0.8 },
    { slug: 'jst-to-mst', priority: 0.8 },
    { slug: 'jst-to-utc', priority: 0.8 },
    { slug: 'ist-to-utc', priority: 0.8 },
    { slug: 'utc-to-ist', priority: 0.8 },
    { slug: 'aest-to-mst', priority: 0.7 },
    { slug: 'aest-to-utc', priority: 0.7 },
    { slug: 'utc-to-jst', priority: 0.8 },
    { slug: 'gmt-to-ist', priority: 0.8 },
    { slug: 'cet-to-ist', priority: 0.8 },
    { slug: 'ist-to-cet', priority: 0.8 },
    { slug: 'jst-to-ist', priority: 0.7 },
    { slug: 'ist-to-jst', priority: 0.7 },
    { slug: 'pst-to-cst', priority: 0.8 },
    { slug: 'mst-to-est', priority: 0.8 },
    { slug: 'est-to-mst', priority: 0.8 },
    { slug: 'utc-to-est', priority: 0.8 },
    { slug: 'utc-to-pst', priority: 0.8 },
    { slug: 'utc-to-cst', priority: 0.8 },
    { slug: 'est-to-utc', priority: 0.8 },
    { slug: 'pst-to-utc', priority: 0.8 },
    { slug: 'cst-to-utc', priority: 0.8 },
    { slug: 'mst-to-pst', priority: 0.8 },
    { slug: 'pst-to-mst', priority: 0.8 },
    { slug: 'military-time', priority: 0.8 },
    { slug: 'flight-time', priority: 0.7 },
    { slug: 'jet-lag-advisor', priority: 0.7 },
    { slug: 'event-time', priority: 0.7 },
    { slug: 'world-alarm', priority: 0.7 },
    { slug: 'days-from-today', priority: 0.8 },
    { slug: 'days-ago', priority: 0.8 },
    { slug: 'hours-ago', priority: 0.8 },
    { slug: 'hours-from-now', priority: 0.8 },
    { slug: 'week-number', priority: 0.9 },
    { slug: 'stopwatch', priority: 0.9 },
    { slug: 'date-calculator', priority: 0.8 },
    { slug: 'countdown', priority: 0.8 },
    { slug: 'timer', priority: 0.9 },
    { slug: 'todays-date', priority: 0.9 },
    { slug: 'calendar', priority: 0.9 },
    { slug: 'sunrise-sunset', priority: 0.8 },
    { slug: 'prayer-times', priority: 0.8 },
    // TZ abbreviation hub pages — high-volume abbreviation queries
    { slug: 'est', priority: 0.9 },
    { slug: 'pst', priority: 0.9 },
    { slug: 'cst', priority: 0.9 },
    { slug: 'mst', priority: 0.9 },
    { slug: 'edt', priority: 0.8 },
    { slug: 'cdt', priority: 0.8 },
    { slug: 'pdt', priority: 0.8 },
    { slug: 'ist', priority: 0.9 },
    { slug: 'utc', priority: 0.9 },
    { slug: 'gmt', priority: 0.9 },
    // State/city current-time hub pages
    { slug: 'hawaii', priority: 0.9 },
    // DST cluster — new subpages
    { slug: 'daylight-saving-time/canada', priority: 0.8 },
    { slug: 'daylight-saving-time/new-zealand', priority: 0.7 },
    { slug: 'daylight-saving-time/mexico', priority: 0.7 },
    { slug: 'daylight-saving-time/countries', priority: 0.8 },
  ].map((tool) => ({
    url: `${baseUrl}/${tool.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: tool.priority,
  }))

  // Area code hub page
  const areaCodeHubRoute = [{
    url: `${baseUrl}/area-code/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }]

  // Area code pages — tiered priority based on Ubersuggest search volume
  const highValueCodes = new Set([
    // 200K+ vol (SD 14-29)
    '929','917','437','754','646',
    // 110K vol (SD 14-23) — timeanddate absent, ultra-low SD
    '914','647','513','661','732','708','678','727','757','903','908',
    // 135K vol (SD 21-28)
    '727','678','760','773','516','615','480','303','602','919','817',
  ])
  const areaCodeRoutes = areaCodeList.map(code => ({
    url: `${baseUrl}/area-code/${code}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: highValueCodes.has(code) ? 0.8 : 0.6,
  }))

  // Days From Today — individual pages (pre-generated)
  const daysFromTodayDays = [7, 8, 10, 14, 15, 17, 20, 22, 25, 29, 30, 42, 45, 60, 90, 100, 120, 150, 180, 365]
  const daysFromTodayRoutes = daysFromTodayDays.map(d => ({
    url: `${baseUrl}/days-from-today/${d}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  // Days Ago — individual pages (pre-generated)
  const daysAgoRoutes = daysFromTodayDays.map(d => ({
    url: `${baseUrl}/days-ago/${d}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  // Articles
  const articleRoutes = [
    'how-many-weeks-in-a-year',
    'how-many-days-in-a-year',
    'how-many-hours-in-a-year',
    'how-many-seconds-in-a-year',
    'how-many-months-in-a-year',
    'am-pm',
    'how-many-minutes-in-a-year',
  ].map(slug => ({
    url: `${baseUrl}/articles/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const articlesHubRoute = [{
    url: `${baseUrl}/articles/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }]

  // Hours-ago and hours-from-now individual pages (pre-generated)
  const hoursPregenerated = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20, 24, 36, 48, 72]
  const hoursAgoRoutes = hoursPregenerated.map(h => ({
    url: `${baseUrl}/hours-ago/${h}/`,
    lastModified: now,
    changeFrequency: 'hourly' as const,
    priority: 0.7,
  }))
  const hoursFromNowRoutes = hoursPregenerated.map(h => ({
    url: `${baseUrl}/hours-from-now/${h}/`,
    lastModified: now,
    changeFrequency: 'hourly' as const,
    priority: 0.7,
  }))

  // Sunrise/sunset hub
  const sunriseRoutes = [{
    url: `${baseUrl}/sunrise-sunset/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }]

  // City sun pages (tier 1 cities only for sitemap — others discovered via internal links)
  const tier1SunRoutes = getTier1Cities().map(c => ({
    url: `${baseUrl}/${c.slug}/sun/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))

  // Guide sayfaları - SADECE 8 PREMIUM ŞEHİR (kaliteli içerik var)
  // Her biri pillar + 10 cluster = 11 sayfa
  const premiumGuideCities = [
    'new-york', 'london', 'tokyo', 'dubai',
    'singapore', 'paris', 'sydney', 'istanbul', 'los-angeles'
  ]

  const premiumClusterSlugs = [
    '', // pillar page (overview)
    'business-hours',
    'best-time-to-visit',
    'remote-work',
    '24-hours',
    'call-times',
    'stock-market',
    'holidays',
    'digital-nomad',
    'time-difference',
    'travel-planning',
  ]

  const guideRoutes = premiumGuideCities.flatMap((citySlug) =>
    premiumClusterSlugs.map((slug) => ({
      url: slug ? `${baseUrl}/${citySlug}/guide/${slug}/` : `${baseUrl}/${citySlug}/guide/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: slug ? 0.7 : 0.8,
    }))
  )

  // Tüm şehir sayfaları (trailing slash ile)
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/${city.slug}/`,
    lastModified: now,
    changeFrequency: 'daily' as const,
    priority: city.tier === 1 ? 0.9 : city.tier === 2 ? 0.8 : 0.7,
  }))

  // Tüm ülke sayfaları (trailing slash ile)
  const countryRoutes = countries.map((country) => ({
    url: `${baseUrl}/country/${country.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Hub sayfaları — COUNTRY_HUB_SLUGS'tan dinamik (232 ülke/bölge)
  const hubSlugsInToolRoutes = new Set([
    'india','brazil','nigeria','california','philippines','uk','australia','japan',
    'germany','canada','france','mexico','dubai','singapore','south-korea','china',
    'texas','turkey','pakistan','florida','new-york-state','indonesia','egypt',
    'illinois','washington-state','vietnam','russia','netherlands','spain','ohio',
    'georgia-state','michigan','new-zealand','sweden','italy','argentina','saudi-arabia',
    'north-carolina','pennsylvania','arizona','colorado','virginia','minnesota',
    'south-africa','kenya','thailand','malaysia','colombia','morocco','tennessee',
    'nevada','oregon','massachusetts','poland','ukraine','bangladesh','ethiopia',
    'wisconsin','maryland','new-jersey','utah','peru','chile','greece','portugal',
    'connecticut','missouri','indiana','iowa','ghana','tanzania','venezuela','myanmar',
    'kansas','alabama','south-carolina','kentucky','iran','nepal','cuba','cameroon',
    'oklahoma','louisiana','arkansas','mississippi','senegal','ivory-coast','angola',
    'uzbekistan','north-dakota','west-virginia','nebraska','new-mexico',
  ])
  const hubRoutes = Object.values(COUNTRY_HUB_SLUGS)
    .filter(slug => !hubSlugsInToolRoutes.has(slug))
    .map(slug => ({
      url: `${baseUrl}/${slug}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

  // /time/[from]/[to] — Tier 1 şehirler arası kombinasyonlar
  const tier1Slugs = getTier1Cities().map(c => c.slug)
  const timeComparisonRoutes: Array<{
    url: string
    lastModified: Date
    changeFrequency: 'daily' | 'weekly' | 'monthly'
    priority: number
  }> = []

  for (const fromSlug of tier1Slugs) {
    for (const toSlug of tier1Slugs) {
      if (fromSlug !== toSlug) {
        timeComparisonRoutes.push({
          url: `${baseUrl}/time/${fromSlug}/${toSlug}/`,
          lastModified: now,
          changeFrequency: 'daily' as const,
          priority: 0.6,
        })
      }
    }
  }

  return [
    ...staticRoutes,
    ...toolRoutes,
    ...hubRoutes,
    ...areaCodeHubRoute,
    ...areaCodeRoutes,
    ...articlesHubRoute,
    ...articleRoutes,
    ...daysFromTodayRoutes,
    ...daysAgoRoutes,
    ...hoursAgoRoutes,
    ...hoursFromNowRoutes,
    ...sunriseRoutes,
    ...tier1SunRoutes,
    ...guideRoutes,
    ...cityRoutes,
    ...countryRoutes,
    ...timeComparisonRoutes,
  ]
}
