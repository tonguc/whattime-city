import { MetadataRoute } from 'next'
import { cities, countries, getTier1Cities } from '@/lib/cities'
import { COUNTRY_HUB_SLUGS } from '@/data/hubPages'
import { areaCodeList } from '@/data/area-codes'
import { SITE_URL } from '@/lib/constants'

// Cache sitemap segments for 24h
export const revalidate = 86400

/**
 * Sitemap segmentation for better crawl budget allocation:
 *
 *  /sitemap/0.xml  — core (tools, converters, TZ explainers, articles, hub pages)
 *  /sitemap/1.xml  — cities (all 2046 city pages — high-frequency content)
 *  /sitemap/2.xml  — time pairs (tier1×tier1 city comparison pages)
 *  /sitemap/3.xml  — extended (sun pages, guide pages, country pages, area codes)
 *
 *  /sitemap.xml    → Next.js auto-generates sitemap index pointing to all 4 segments
 */
export async function generateSitemaps() {
  return [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }]
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL
  const now = new Date()

  // ── Segment 0: Core (tools, converters, articles, hub standalone pages) ──────
  if (id === 0) {
    const staticRoutes: MetadataRoute.Sitemap = [
      { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1 },
      { url: `${baseUrl}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
      { url: `${baseUrl}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${baseUrl}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
      { url: `${baseUrl}/privacy/`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
      { url: `${baseUrl}/map/`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
      { url: `${baseUrl}/country/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
      { url: `${baseUrl}/widget/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
      { url: `${baseUrl}/tools/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ]

    const toolSlugs = [
      // Tools
      { slug: 'time', priority: 0.9 }, { slug: 'time-converter', priority: 0.8 },
      { slug: 'meeting', priority: 0.8 }, { slug: 'military-time', priority: 0.8 },
      { slug: 'flight-time', priority: 0.7 }, { slug: 'jet-lag-advisor', priority: 0.7 },
      { slug: 'event-time', priority: 0.7 }, { slug: 'world-alarm', priority: 0.7 },
      { slug: 'days-from-today', priority: 0.8 }, { slug: 'days-ago', priority: 0.8 },
      { slug: 'hours-ago', priority: 0.8 }, { slug: 'hours-from-now', priority: 0.8 },
      { slug: 'week-number', priority: 0.9 }, { slug: 'stopwatch', priority: 0.9 },
      { slug: 'date-calculator', priority: 0.8 }, { slug: 'countdown', priority: 0.8 },
      { slug: 'timer', priority: 0.9 }, { slug: 'todays-date', priority: 0.9 },
      { slug: 'calendar', priority: 0.9 }, { slug: 'sunrise-sunset', priority: 0.8 },
      { slug: 'prayer-times', priority: 0.8 },
      // TZ converter pairs
      { slug: 'pst-to-est', priority: 0.8 }, { slug: 'gmt-to-est', priority: 0.8 },
      { slug: 'cst-to-est', priority: 0.8 }, { slug: 'est-to-pst', priority: 0.8 },
      { slug: 'ist-to-est', priority: 0.8 }, { slug: 'est-to-gmt', priority: 0.8 },
      { slug: 'cst-to-pst', priority: 0.8 }, { slug: 'ist-to-pst', priority: 0.8 },
      { slug: 'pst-to-ist', priority: 0.8 }, { slug: 'ist-to-cst', priority: 0.8 },
      { slug: 'cst-to-ist', priority: 0.8 }, { slug: 'ist-to-gmt', priority: 0.8 },
      { slug: 'est-to-ist', priority: 0.8 }, { slug: 'mst-to-ist', priority: 0.7 },
      { slug: 'jst-to-est', priority: 0.7 }, { slug: 'aest-to-est', priority: 0.7 },
      { slug: 'cet-to-est', priority: 0.7 }, { slug: 'est-to-cst', priority: 0.8 },
      { slug: 'gmt-to-pst', priority: 0.8 }, { slug: 'pst-to-gmt', priority: 0.8 },
      { slug: 'gmt-to-cst', priority: 0.8 }, { slug: 'cst-to-gmt', priority: 0.8 },
      { slug: 'cst-to-mst', priority: 0.8 }, { slug: 'mst-to-cst', priority: 0.8 },
      { slug: 'utc-to-mst', priority: 0.8 }, { slug: 'mst-to-utc', priority: 0.8 },
      { slug: 'jst-to-pst', priority: 0.8 }, { slug: 'aest-to-pst', priority: 0.7 },
      { slug: 'cet-to-pst', priority: 0.7 }, { slug: 'bst-to-est', priority: 0.8 },
      { slug: 'bst-to-pst', priority: 0.8 }, { slug: 'bst-to-cst', priority: 0.8 },
      { slug: 'ist-to-mst', priority: 0.8 }, { slug: 'jst-to-cst', priority: 0.8 },
      { slug: 'jst-to-gmt', priority: 0.8 }, { slug: 'aest-to-cst', priority: 0.7 },
      { slug: 'aest-to-gmt', priority: 0.7 }, { slug: 'cet-to-cst', priority: 0.8 },
      { slug: 'cet-to-gmt', priority: 0.8 }, { slug: 'gmt-to-mst', priority: 0.8 },
      { slug: 'mst-to-gmt', priority: 0.8 }, { slug: 'jst-to-mst', priority: 0.8 },
      { slug: 'jst-to-utc', priority: 0.8 }, { slug: 'ist-to-utc', priority: 0.8 },
      { slug: 'utc-to-ist', priority: 0.8 }, { slug: 'aest-to-mst', priority: 0.7 },
      { slug: 'aest-to-utc', priority: 0.7 }, { slug: 'utc-to-jst', priority: 0.8 },
      { slug: 'gmt-to-ist', priority: 0.8 }, { slug: 'cet-to-ist', priority: 0.8 },
      { slug: 'ist-to-cet', priority: 0.8 }, { slug: 'jst-to-ist', priority: 0.7 },
      { slug: 'ist-to-jst', priority: 0.7 }, { slug: 'pst-to-cst', priority: 0.8 },
      { slug: 'mst-to-est', priority: 0.8 }, { slug: 'est-to-mst', priority: 0.8 },
      { slug: 'utc-to-est', priority: 0.8 }, { slug: 'utc-to-pst', priority: 0.8 },
      { slug: 'utc-to-cst', priority: 0.8 }, { slug: 'est-to-utc', priority: 0.8 },
      { slug: 'pst-to-utc', priority: 0.8 }, { slug: 'cst-to-utc', priority: 0.8 },
      { slug: 'mst-to-pst', priority: 0.8 }, { slug: 'pst-to-mst', priority: 0.8 },
      // TZ explainers
      { slug: 'us-time-zones', priority: 0.9 }, { slug: 'eastern-time-zone', priority: 0.9 },
      { slug: 'central-time-zone', priority: 0.9 }, { slug: 'mountain-time-zone', priority: 0.9 },
      { slug: 'pacific-time-zone', priority: 0.9 }, { slug: 'alaska-time-zone', priority: 0.8 },
      { slug: 'hawaii-time-zone', priority: 0.8 }, { slug: 'cest-timezone', priority: 0.8 },
      { slug: 'bst-timezone', priority: 0.8 },
      // TZ abbreviation hubs
      { slug: 'est', priority: 0.9 }, { slug: 'pst', priority: 0.9 },
      { slug: 'cst', priority: 0.9 }, { slug: 'mst', priority: 0.9 },
      { slug: 'edt', priority: 0.8 }, { slug: 'cdt', priority: 0.8 },
      { slug: 'pdt', priority: 0.8 }, { slug: 'ist', priority: 0.9 },
      { slug: 'utc', priority: 0.9 }, { slug: 'gmt', priority: 0.9 },
      // DST cluster
      { slug: 'daylight-saving-time', priority: 0.8 },
      { slug: 'daylight-saving-time/usa', priority: 0.8 },
      { slug: 'daylight-saving-time/uk', priority: 0.8 },
      { slug: 'daylight-saving-time/europe', priority: 0.8 },
      { slug: 'daylight-saving-time/australia', priority: 0.8 },
      { slug: 'daylight-saving-time/canada', priority: 0.8 },
      { slug: 'daylight-saving-time/new-zealand', priority: 0.7 },
      { slug: 'daylight-saving-time/mexico', priority: 0.7 },
      { slug: 'daylight-saving-time/countries', priority: 0.8 },
    ]

    const toolRoutes: MetadataRoute.Sitemap = toolSlugs.map(({ slug, priority }) => ({
      url: `${baseUrl}/${slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority,
    }))

    // Standalone country/state hub pages (ClockClient pattern)
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
      'alaska','washington-dc','hawaii','montana','idaho','wyoming','south-dakota',
    ])
    const hubRoutes: MetadataRoute.Sitemap = Object.values(COUNTRY_HUB_SLUGS)
      .filter(slug => !hubSlugsInToolRoutes.has(slug))
      .map(slug => ({
        url: `${baseUrl}/${slug}/`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      }))

    // Articles
    const articleRoutes: MetadataRoute.Sitemap = [
      'how-many-weeks-in-a-year', 'how-many-days-in-a-year', 'how-many-hours-in-a-year',
      'how-many-seconds-in-a-year', 'how-many-months-in-a-year', 'am-pm',
      'how-many-minutes-in-a-year',
    ].map(slug => ({
      url: `${baseUrl}/articles/${slug}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

    // Days from today / days ago / hours ago / hours from now
    const numericDays = [7, 8, 10, 14, 15, 17, 20, 22, 25, 29, 30, 42, 45, 60, 90, 100, 120, 150, 180, 365]
    const numericHours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 18, 20, 24, 36, 48, 72]

    const numericsRoutes: MetadataRoute.Sitemap = [
      ...numericDays.map(d => ({ url: `${baseUrl}/days-from-today/${d}/`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.7 })),
      ...numericDays.map(d => ({ url: `${baseUrl}/days-ago/${d}/`, lastModified: now, changeFrequency: 'daily' as const, priority: 0.7 })),
      ...numericHours.map(h => ({ url: `${baseUrl}/hours-ago/${h}/`, lastModified: now, changeFrequency: 'hourly' as const, priority: 0.7 })),
      ...numericHours.map(h => ({ url: `${baseUrl}/hours-from-now/${h}/`, lastModified: now, changeFrequency: 'hourly' as const, priority: 0.7 })),
    ]

    return [
      ...staticRoutes,
      ...toolRoutes,
      ...hubRoutes,
      { url: `${baseUrl}/articles/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
      ...articleRoutes,
      ...numericsRoutes,
    ]
  }

  // ── Segment 1: Cities (all 2046 city pages) ───────────────────────────────────
  if (id === 1) {
    return cities.map(city => ({
      url: `${baseUrl}/${city.slug}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: city.tier === 1 ? 0.9 : city.tier === 2 ? 0.8 : 0.7,
    }))
  }

  // ── Segment 2: Time comparison pairs (tier1 × tier1) ─────────────────────────
  if (id === 2) {
    const tier1Slugs = getTier1Cities().map(c => c.slug)
    const routes: MetadataRoute.Sitemap = []
    for (const from of tier1Slugs) {
      for (const to of tier1Slugs) {
        if (from !== to) {
          routes.push({
            url: `${baseUrl}/time/${from}/${to}/`,
            lastModified: now,
            changeFrequency: 'daily',
            priority: 0.6,
          })
        }
      }
    }
    return routes
  }

  // ── Segment 3: Extended (sun pages, guides, country/[slug], area codes) ───────
  if (id === 3) {
    // Sun pages — tier1 explicitly, tier2+ discovered via city page internal links
    const sunRoutes: MetadataRoute.Sitemap = [
      { url: `${baseUrl}/sunrise-sunset/`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
      ...getTier1Cities().map(c => ({
        url: `${baseUrl}/${c.slug}/sun/`,
        lastModified: now,
        changeFrequency: 'daily' as const,
        priority: 0.7,
      })),
    ]

    // Guide pages — 9 premium cities × 11 cluster pages
    const premiumGuideCities = ['new-york', 'london', 'tokyo', 'dubai', 'singapore', 'paris', 'sydney', 'istanbul', 'los-angeles']
    const premiumClusterSlugs = ['', 'business-hours', 'best-time-to-visit', 'remote-work', '24-hours', 'call-times', 'stock-market', 'holidays', 'digital-nomad', 'time-difference', 'travel-planning']
    const guideRoutes: MetadataRoute.Sitemap = premiumGuideCities.flatMap(citySlug =>
      premiumClusterSlugs.map(slug => ({
        url: slug ? `${baseUrl}/${citySlug}/guide/${slug}/` : `${baseUrl}/${citySlug}/guide/`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: slug ? 0.7 : 0.8,
      }))
    )

    // /country/[country]/ pages
    const countryRoutes: MetadataRoute.Sitemap = countries.map(country => ({
      url: `${baseUrl}/country/${country.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))

    // Area code pages
    const highValueCodes = new Set([
      '929','917','437','754','646',
      '914','647','513','661','732','708','678','727','757','903','908',
      '760','773','516','615','480','303','602','919','817',
    ])
    const areaCodeRoutes: MetadataRoute.Sitemap = [
      { url: `${baseUrl}/area-code/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
      ...areaCodeList.map(code => ({
        url: `${baseUrl}/area-code/${code}/`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: highValueCodes.has(code) ? 0.8 : 0.6,
      })),
    ]

    return [...sunRoutes, ...guideRoutes, ...countryRoutes, ...areaCodeRoutes]
  }

  return []
}
