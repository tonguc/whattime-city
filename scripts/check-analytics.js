#!/usr/bin/env node
/**
 * ⚠️ CRITICAL: Analytics Check Script
 * ====================================
 * This script runs before every build to ensure Google Analytics
 * is properly configured. If analytics is missing, the build FAILS.
 * 
 * DO NOT DELETE THIS FILE
 */

const fs = require('fs');
const path = require('path');

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

console.log('\n🔍 Checking Google Analytics configuration...\n');

let errors = [];
let warnings = [];

// Check 1: GoogleAnalytics.tsx exists
const gaComponentPath = path.join(__dirname, '../components/analytics/GoogleAnalytics.tsx');
if (!fs.existsSync(gaComponentPath)) {
  errors.push('❌ components/analytics/GoogleAnalytics.tsx is MISSING!');
} else {
  const gaContent = fs.readFileSync(gaComponentPath, 'utf-8');
  
  // Check GA ID is present
  if (!gaContent.includes('G-060GV967M0')) {
    warnings.push('⚠️  GA Measurement ID might be incorrect in GoogleAnalytics.tsx');
  }
  
  // Check send_page_view: false
  if (!gaContent.includes('send_page_view: false')) {
    errors.push('❌ GoogleAnalytics.tsx missing "send_page_view: false" - SPA tracking will break!');
  }
  
  console.log('✅ components/analytics/GoogleAnalytics.tsx exists');
}

// Check 2: RouteTracker.tsx exists
const routeTrackerPath = path.join(__dirname, '../components/analytics/RouteTracker.tsx');
if (!fs.existsSync(routeTrackerPath)) {
  errors.push('❌ components/analytics/RouteTracker.tsx is MISSING!');
} else {
  const rtContent = fs.readFileSync(routeTrackerPath, 'utf-8');
  
  // Check gtag call exists
  if (!rtContent.includes('gtag')) {
    errors.push('❌ RouteTracker.tsx missing gtag call - page views won\'t be tracked!');
  }
  
  console.log('✅ components/analytics/RouteTracker.tsx exists');
}

// Check 3: layout.tsx imports analytics
const layoutPath = path.join(__dirname, '../app/layout.tsx');
if (!fs.existsSync(layoutPath)) {
  errors.push('❌ app/layout.tsx is MISSING!');
} else {
  const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
  
  // Check imports
  if (!layoutContent.includes('GoogleAnalytics') || !layoutContent.includes('@/components/analytics')) {
    errors.push('❌ layout.tsx not importing GoogleAnalytics from @/components/analytics');
  }
  
  if (!layoutContent.includes('RouteTracker') || !layoutContent.includes('@/components/analytics')) {
    errors.push('❌ layout.tsx not importing RouteTracker from @/components/analytics');
  }
  
  // Check component usage
  if (!layoutContent.includes('<GoogleAnalytics')) {
    errors.push('❌ layout.tsx not rendering <GoogleAnalytics /> component');
  }
  
  if (!layoutContent.includes('<RouteTracker')) {
    errors.push('❌ layout.tsx not rendering <RouteTracker /> component');
  }
  
  if (errors.filter(e => e.includes('layout.tsx')).length === 0) {
    console.log('✅ app/layout.tsx imports and renders analytics components');
  }
}

// Check 4: index.ts exports
const indexPath = path.join(__dirname, '../components/analytics/index.ts');
if (!fs.existsSync(indexPath)) {
  errors.push('❌ components/analytics/index.ts is MISSING!');
} else {
  console.log('✅ components/analytics/index.ts exists');
}

// Report results
console.log('');

if (warnings.length > 0) {
  console.log(`${YELLOW}Warnings:${RESET}`);
  warnings.forEach(w => console.log(`  ${w}`));
  console.log('');
}

if (errors.length > 0) {
  console.log(`${RED}═══════════════════════════════════════════════════════════${RESET}`);
  console.log(`${RED}  🚨 GOOGLE ANALYTICS CHECK FAILED - BUILD ABORTED 🚨${RESET}`);
  console.log(`${RED}═══════════════════════════════════════════════════════════${RESET}`);
  console.log('');
  console.log('Errors found:');
  errors.forEach(e => console.log(`  ${e}`));
  console.log('');
  console.log('📖 See CRITICAL_FILES.md for how to fix this.');
  console.log('');
  process.exit(1);
}

console.log(`${GREEN}═══════════════════════════════════════════════════════════${RESET}`);
console.log(`${GREEN}  ✅ Google Analytics check passed!${RESET}`);
console.log(`${GREEN}═══════════════════════════════════════════════════════════${RESET}`);
console.log('');
