#!/usr/bin/env node
/**
 * warm-isr.js — Post-deploy ISR cache warmer
 *
 * Fetches tier-2 and high-value ISR pages after deployment so Googlebot
 * always hits a warm cache instead of waiting for on-demand generation.
 *
 * Usage:
 *   node scripts/warm-isr.js                          # default: https://whattime.city
 *   node scripts/warm-isr.js https://staging.example.com
 *   WARM_CONCURRENCY=5 node scripts/warm-isr.js
 *
 * Recommended: add to Vercel post-deploy hook or run from CI after deploy.
 */

const BASE_URL = process.argv[2] || process.env.NEXT_PUBLIC_SITE_URL || 'https://whattime.city'
const CONCURRENCY = parseInt(process.env.WARM_CONCURRENCY || '4', 10)
const TIMEOUT_MS = 15_000

// ── Tier 2 city pages (NOT pre-rendered at build, high SEO value) ─────────────
const TIER2_CITIES = [
  // Europe
  'amsterdam', 'berlin', 'paris', 'madrid', 'rome', 'vienna', 'zurich',
  'brussels', 'lisbon', 'stockholm', 'oslo', 'copenhagen', 'helsinki',
  'warsaw', 'prague', 'budapest', 'athens', 'bucharest',
  // Americas
  'chicago', 'los-angeles', 'toronto', 'vancouver', 'mexico-city',
  'sao-paulo', 'buenos-aires', 'bogota', 'lima', 'santiago',
  // Asia-Pacific
  'singapore', 'hong-kong', 'seoul', 'beijing', 'shanghai', 'bangkok',
  'jakarta', 'kuala-lumpur', 'manila', 'taipei', 'melbourne', 'sydney',
  // Middle East / Africa / Other
  'dubai', 'riyadh', 'tel-aviv', 'cairo', 'johannesburg', 'nairobi',
  'moscow', 'istanbul', 'mumbai', 'delhi',
]

// ── High-value time pair pages ────────────────────────────────────────────────
const TIME_PAIRS = [
  ['london', 'new-york'], ['new-york', 'london'],
  ['london', 'dubai'], ['dubai', 'london'],
  ['london', 'singapore'], ['singapore', 'london'],
  ['london', 'sydney'], ['sydney', 'london'],
  ['new-york', 'los-angeles'], ['los-angeles', 'new-york'],
  ['new-york', 'tokyo'], ['tokyo', 'new-york'],
  ['new-york', 'paris'], ['paris', 'new-york'],
  ['new-york', 'berlin'], ['berlin', 'new-york'],
  ['dubai', 'new-york'], ['new-york', 'dubai'],
  ['singapore', 'dubai'], ['dubai', 'singapore'],
]

// ── Sun pages for tier-2 cities ───────────────────────────────────────────────
const SUN_CITIES = [
  'london', 'paris', 'berlin', 'amsterdam', 'dubai', 'singapore',
  'tokyo', 'sydney', 'new-york', 'los-angeles', 'toronto', 'chicago',
  'hong-kong', 'seoul', 'istanbul', 'cairo', 'moscow', 'mumbai',
]

// ── Build URL list ─────────────────────────────────────────────────────────────
function buildUrls() {
  const urls = []

  for (const slug of TIER2_CITIES) {
    urls.push(`${BASE_URL}/${slug}/`)
  }

  for (const [from, to] of TIME_PAIRS) {
    urls.push(`${BASE_URL}/time/${from}/${to}/`)
  }

  for (const slug of SUN_CITIES) {
    urls.push(`${BASE_URL}/${slug}/sun/`)
  }

  return urls
}

// ── Fetch with timeout ─────────────────────────────────────────────────────────
async function warmUrl(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  const start = Date.now()
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': 'WhatTimeCity-ISRWarmer/1.0' },
      redirect: 'follow',
    })
    const ms = Date.now() - start
    const status = res.status
    const warm = res.headers.get('x-vercel-cache') || res.headers.get('cf-cache-status') || '?'
    console.log(`  ${status === 200 ? '✓' : '✗'} ${status} [${ms}ms] cache:${warm}  ${url}`)
    return { url, status, ms, ok: status === 200 }
  } catch (err) {
    const ms = Date.now() - start
    const msg = err.name === 'AbortError' ? `timeout (${TIMEOUT_MS}ms)` : err.message
    console.log(`  ✗ ERR [${ms}ms] ${msg}  ${url}`)
    return { url, status: 0, ms, ok: false }
  } finally {
    clearTimeout(timer)
  }
}

// ── Concurrency pool ───────────────────────────────────────────────────────────
async function warmAll(urls) {
  const results = []
  let i = 0

  async function worker() {
    while (i < urls.length) {
      const url = urls[i++]
      results.push(await warmUrl(url))
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, urls.length) }, worker)
  await Promise.all(workers)
  return results
}

// ── Main ───────────────────────────────────────────────────────────────────────
async function main() {
  const urls = buildUrls()
  console.log(`\n🔥 ISR Warmer — ${BASE_URL}`)
  console.log(`   Pages: ${urls.length}  Concurrency: ${CONCURRENCY}  Timeout: ${TIMEOUT_MS}ms\n`)

  const t0 = Date.now()
  const results = await warmAll(urls)
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1)

  const ok = results.filter(r => r.ok).length
  const fail = results.length - ok
  const avgMs = Math.round(results.reduce((s, r) => s + r.ms, 0) / results.length)

  console.log(`\n── Summary ──────────────────────────────`)
  console.log(`   Total: ${results.length}  ✓ ${ok}  ✗ ${fail}`)
  console.log(`   Avg TTFB: ${avgMs}ms  Wall time: ${elapsed}s`)

  if (fail > 0) {
    console.log(`\n── Failed URLs ──`)
    results.filter(r => !r.ok).forEach(r => console.log(`   ${r.url}`))
    process.exit(1)
  }
  console.log()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
