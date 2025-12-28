# 🚀 VERCEL DEPLOYMENT GUIDE - whattime.city

## ✅ PHASE 1: CODE UPDATES (15 minutes)

### Step 1: Update Core Files

Replace these files in your GitHub repo:

1. **next.config.js** ← Remove `output: 'export'`
2. **app/time/[from]/[to]/page.tsx** ← Add `dynamicParams = true`
3. **vercel.json** ← New file (deployment config)
4. **.gitignore** ← Update for Vercel

### Step 2: Commit and Push

```bash
git add .
git commit -m "feat: migrate to Vercel with dynamic rendering"
git push origin main
```

---

## 🌐 PHASE 2: VERCEL SETUP (10 minutes)

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Sign up with GitHub
3. Authorize Vercel to access your repos

### Step 2: Import Project

1. Click "Add New..." → "Project"
2. Select **whattime-city** from GitHub repos
3. Click "Import"

### Step 3: Configure Build Settings

**Framework Preset:** Next.js (auto-detected) ✅

**Build & Development Settings:**
- Build Command: `npm run build` ✅
- Output Directory: `.next` ✅  
- Install Command: `npm install` ✅

**Root Directory:** `./` (keep default)

**Environment Variables:** (None needed for now)

### Step 4: Deploy!

1. Click "Deploy"
2. Wait 3-5 minutes for build
3. You'll get a URL like: `whattime-city-xxx.vercel.app`

### Step 5: Test Preview

Visit the Vercel URL and test:

✅ Popular cities: `/time/istanbul/barcelona`
✅ Rare cities: `/time/reykjavik/montevideo`
✅ Header theme changes on swap
✅ Timezone display working
✅ Compare widget functional

---

## 🌍 PHASE 3: DOMAIN MIGRATION (1-2 hours)

### Step 1: Add Domain in Vercel

1. In Vercel project → "Settings" → "Domains"
2. Add domain: `whattime.city`
3. Vercel will show DNS records needed

### Step 2: Update DNS Records

**In Cloudflare DNS:**

1. Go to Cloudflare dashboard
2. Select `whattime.city` domain
3. Go to "DNS" → "Records"

**Delete old records:**
- Delete CNAME for `whattime-city.pages.dev`

**Add new records:**

```
Type: A
Name: @
Value: 76.76.21.21
Proxy: OFF (DNS only)

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
Proxy: OFF (DNS only)
```

### Step 3: Verify in Vercel

1. Back to Vercel → Domains
2. Click "Verify" next to whattime.city
3. Wait for verification (1-5 minutes)
4. SSL certificate auto-provisions (2-10 minutes)

### Step 4: Test Production

Wait 10-30 minutes for DNS propagation, then:

✅ Visit https://whattime.city
✅ Check SSL certificate (🔒 lock icon)
✅ Test city combinations
✅ Verify SEO meta tags (view source)

---

## 🎯 PHASE 4: VALIDATION (30 minutes)

### SEO Checks

**View Page Source** (Ctrl+U):
```html
✅ <title> tag with city names
✅ <meta name="description"> with full content
✅ <meta property="og:title"> for social sharing
✅ <meta property="og:image"> present
✅ Content visible in HTML (not just JavaScript)
```

### Performance Tests

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Enter: `https://whattime.city/time/istanbul/barcelona/`
   - Target: 90+ score

2. **Vercel Analytics**
   - Enable in Vercel dashboard
   - Monitor real user metrics

### Functionality Tests

```
✅ Popular city pair: /time/new-york/london/
✅ Rare city pair: /time/reykjavik/montevideo/  
✅ Swap button updates header theme
✅ Timezone display shows correctly
✅ All 395 cities searchable
✅ Compare widget works
✅ Mobile responsive
```

---

## 📊 PHASE 5: POST-MIGRATION (Ongoing)

### Monitor Performance

**Vercel Dashboard:**
- Build times (should be ~3-5 min)
- Bandwidth usage (free tier: 100GB/month)
- Function executions
- Error rates

**Analytics:**
- Enable Vercel Analytics (free)
- Or use Google Analytics

### Google Search Console

1. Add property: `https://whattime.city`
2. Verify ownership (Vercel auto-verifies)
3. Submit sitemap: `https://whattime.city/sitemap.xml`
4. Request indexing for key pages

### SEO Strategy

**Priority Pages to Index:**
1. Home: `/`
2. Top 20 cities: `/istanbul/`, `/new-york/`, etc.
3. Top 50 combinations: `/time/istanbul/barcelona/`, etc.

**Submit to Google:**
- Use "Request Indexing" in Search Console
- 10-20 URLs per day (avoid spam detection)

---

## 🚨 TROUBLESHOOTING

### Build Fails

**Error: "Module not found"**
```bash
# Check package.json dependencies
npm install
npm run build  # Test locally
```

**Error: "Lambda size exceeded"**
```bash
# Check bundle size
npm run build
# If >4.5MB, analyze with:
npx @next/bundle-analyzer
```

### Domain Issues

**DNS not resolving:**
- Wait up to 48 hours for full propagation
- Use https://dnschecker.org to check globally
- Clear browser cache

**SSL certificate pending:**
- Usually auto-provisions in 5-10 minutes
- Check Vercel → Domains → SSL status
- If stuck, remove and re-add domain

### Dynamic Pages 404

**Rare cities showing 404:**
```tsx
// Verify in app/time/[from]/[to]/page.tsx:
export const dynamicParams = true  ✅
```

---

## 📈 SUCCESS METRICS

After 24 hours:

✅ All city combinations accessible
✅ Build time: 3-5 minutes
✅ Page load: <2 seconds
✅ Google PageSpeed: 90+
✅ No 404 errors in Vercel logs
✅ SEO meta tags present in all pages

After 1 week:

✅ Google indexing popular pages
✅ Bandwidth usage tracked
✅ Core Web Vitals: Good
✅ No deployment errors

---

## 💡 OPTIMIZATION TIPS

### Enable Edge Functions (Optional)

For even faster global performance:

```tsx
// Add to page.tsx
export const runtime = 'edge'
```

### Reduce Build Time

If builds are slow (>5 min):

```tsx
// Reduce static pages
const popularSlugs = tier1Slugs  // Only Tier 1 (~15 cities)
// Others render on-demand anyway!
```

### Add OG Images

Create dynamic Open Graph images:

```bash
npm install @vercel/og
```

Then create API route: `/api/og/[from]/[to]/route.tsx`

---

## 🎉 MIGRATION COMPLETE!

Your Next.js app is now:

✅ Running on Vercel with SSR
✅ All 395 cities accessible
✅ Perfect SEO with server-rendered HTML
✅ Fast global delivery via Vercel Edge Network
✅ Auto-scaling serverless functions
✅ ISR caching for optimal performance

**Estimated monthly cost:** $0 (Free tier, 100GB bandwidth)

**Next steps:**
1. Monitor analytics
2. Submit to Google Search Console  
3. Build backlinks for SEO
4. Create more content pages
5. Add monetization (ads/affiliate)

---

## 📞 NEED HELP?

**Vercel Support:**
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

**Next.js Issues:**
- GitHub: https://github.com/vercel/next.js/issues
- Docs: https://nextjs.org/docs

Good luck! 🚀
