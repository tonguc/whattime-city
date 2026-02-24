#!/usr/bin/env python3
"""
Growth Agent v4.5 - Tonguc Karacay
Full SEO Growth Engine — GSC Connected, Scheduler, Diff Analyzer
Faz 4.5: Decision Log + Lessons Memory + GSC Priority Queue v2
"""

import os
import json
import asyncio
import logging
import re
import base64
import sqlite3
import hashlib
import threading
import time as time_module
from datetime import datetime, timedelta
from pathlib import Path

from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
import anthropic
import requests

# GSC imports
try:
    from google.oauth2 import service_account
    from googleapiclient.discovery import build
    GSC_AVAILABLE = True
except ImportError:
    GSC_AVAILABLE = False
    logging.warning("Google API libraries not installed")

# ============================================================
# LOGGING
# ============================================================

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO,
    handlers=[
        logging.FileHandler('agent.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# ============================================================
# SEO AGENCY SYSTEM PROMPT
# ============================================================

SEO_SYSTEM_PROMPT = """You are a senior SEO strategist and content execution lead at a top-tier digital agency.
You specialize in timezone and world clock websites, with deep expertise in:

SEARCH INTELLIGENCE:
- AEO (Answer Engine Optimization): Direct answers first, structured for featured snippets
- GEO (Generative Engine Optimization): Entity-first writing, quotable statements, fact density
- E-E-A-T: Experience, Expertise, Authority, Trust signals in every piece
- Long-tail keyword targeting: conversational, question-based, high-intent

WHATTIME.CITY DOMAIN EXPERTISE:
- Primary keywords: "time in [city]", "what time is it in [city]", "[city] timezone"
- URL structure: /time/[from]/[to]/ for city comparisons (NEVER just /[city]/)
- Tool URLs: /meeting/, /jet-lag-advisor/, /time-converter/
- Guide URLs: /[city]/guide/[cluster]/
- Internal linking is a ranking signal — use it strategically

FAQ STANDARDS (8 questions, high search volume patterns):
1. "What time is it in [City] right now?" — 1M-10M searches
2. "What time zone is [City] in?" — 100K-1M searches  
3. "Does [City] observe daylight saving time?" — high commercial intent
4. "What is the time difference between [City] and New York?" — 10K-100K
5. "What is the time difference between [City] and London?" — 10K-100K
6. "What time does the stock exchange open in [City]?" — business intent
7. "What is the best time to call [City] from the US?" — high conversion intent
8. "What are typical business hours in [City]?" — business intent

QUALITY NON-NEGOTIABLES:
- Every FAQ answer: direct answer first (Yes/No or specific fact), 2-3 sentences context
- No generic content — every word must be city-specific
- Accurate facts: real UTC offsets, real DST dates, real exchange hours
- Entity-first: always name full timezone (e.g., "Central European Time (CET/UTC+1)")
- Quotable statements: one memorable fact per content block
- Internal links: ALWAYS /time/[city1]/[city2]/ format
- E-E-A-T footer: mandatory

RETURN ONLY valid JSON. No markdown, no explanations, no backticks."""

PREMIUM_CRITERIA = """
WHATTIME.CITY PAGE STRUCTURE:
- FAQ: 8 questions, JSON-LD Schema + HTML Microdata
- TimeDifferenceTable: 8 cities ALL LINKED /time/[from]/[to]/
- E-E-A-T footer: "Last updated: [Month Year] | ✓ Verified by WhatTime.city Editorial Team | Timezone data sourced from IANA Time Zone Database."
- Internal links: /time/[city1]/[city2]/ format ONLY
"""


# ============================================================
# FAILURE REASON CODES (Faz 4.5 — Decision Log)
# ============================================================

FAILURE_CODES = {
    "faq_missing":              "FAQ section missing or < 8 questions",
    "schema_missing":           "JSON-LD FAQPage schema absent",
    "eeat_missing":             "E-E-A-T footer not present",
    "internal_links_low":       "Internal /time/ links missing or wrong format",
    "thin_content":             "Content blocks < 3 or wordcount too low",
    "meta_desc_short":          "Meta description < 100 characters",
    "placeholder_text":         "Template placeholders not replaced",
    "intent_missing":           "Primary search intent not addressed",
    "semantic_gap":             "Key timezone/DST entities missing",
    "heading_structure":        "H1/H2 hierarchy inconsistent",
    "duplicate_risk":           "Content too similar to other cities",
    "readability_low":          "Answers not direct or too verbose",
    "factual_risk":             "UTC offset or DST dates may be inaccurate",
}

def classify_failure_codes(issues: list) -> list:
    """Map validator issue strings to standardized failure reason codes"""
    codes = []
    issue_text = " ".join(issues).lower()
    
    if "faq" in issue_text and ("missing" in issue_text or "/8" in issue_text):
        codes.append("faq_missing")
    if "schema" in issue_text:
        codes.append("schema_missing")
    if "e-e-a-t" in issue_text or "footer" in issue_text:
        codes.append("eeat_missing")
    if "link" in issue_text:
        codes.append("internal_links_low")
    if "block" in issue_text or "content" in issue_text:
        codes.append("thin_content")
    if "meta" in issue_text or "desc" in issue_text:
        codes.append("meta_desc_short")
    if "placeholder" in issue_text:
        codes.append("placeholder_text")
    if "short" in issue_text and "faq" in issue_text:
        codes.append("readability_low")
    
    return codes if codes else ["intent_missing"]

# ============================================================
# CONFIG
# ============================================================

def load_config(site_name: str = None) -> dict:
    config_file = f"config-{site_name}.env" if site_name else "config-whattime.env"
    config = {}
    if Path(config_file).exists():
        with open(config_file) as f:
            for line in f:
                line = line.strip()
                if line and '=' in line and not line.startswith('#'):
                    key, value = line.split('=', 1)
                    config[key.strip()] = value.strip()
    return config

state = {
    "active_site": "whattime",
    "auto_mode": False,
    "queue": [],
    "processed": 0,
    "failed": 0,
    "token_used": 0,
    "monthly_budget": 30.0,
    "config": {},
    "scheduler_running": False,
    "last_gsc_refresh": None,
    "telegram_app": None
}

def get_config():
    state["config"] = load_config(state["active_site"])
    return state["config"]

# ============================================================
# MEMORY LAYER (SQLite)
# ============================================================

DB_PATH = "growth_agent.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    
    c.execute('''CREATE TABLE IF NOT EXISTS city_history (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        city_slug TEXT NOT NULL,
        processed_at TEXT NOT NULL,
        quality_score INTEGER,
        pr_url TEXT,
        issues TEXT,
        model_used TEXT,
        tokens_used INTEGER,
        improvement_notes TEXT,
        status TEXT DEFAULT 'completed',
        failure_reason_codes TEXT,
        what_fixed_it TEXT,
        retry_count INTEGER DEFAULT 0,
        last_failure_score INTEGER,
        last_success_score INTEGER
    )''')
    
    # Migrate existing table
    for col, defn in [
        ("failure_reason_codes", "TEXT"),
        ("what_fixed_it", "TEXT"),
        ("retry_count", "INTEGER DEFAULT 0"),
        ("last_failure_score", "INTEGER"),
        ("last_success_score", "INTEGER"),
    ]:
        try:
            c.execute(f"ALTER TABLE city_history ADD COLUMN {col} {defn}")
        except:
            pass
    
    c.execute('''CREATE TABLE IF NOT EXISTS city_priority (
        city_slug TEXT PRIMARY KEY,
        priority_score REAL DEFAULT 50.0,
        last_processed TEXT,
        process_count INTEGER DEFAULT 0,
        avg_quality_score REAL DEFAULT 0,
        tier INTEGER DEFAULT 3,
        continent TEXT,
        -- GSC signals
        gsc_impressions INTEGER DEFAULT 0,
        gsc_clicks INTEGER DEFAULT 0,
        gsc_ctr REAL DEFAULT 0,
        gsc_position REAL DEFAULT 0,
        gsc_top_query TEXT,
        gsc_updated TEXT,
        updated_at TEXT
    )''')
    
    c.execute('''CREATE TABLE IF NOT EXISTS gsc_keywords (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        query TEXT NOT NULL,
        city_slug TEXT,
        impressions INTEGER,
        clicks INTEGER,
        ctr REAL,
        position REAL,
        date_range TEXT,
        fetched_at TEXT,
        opportunity_type TEXT
    )''')
    
    c.execute('''CREATE TABLE IF NOT EXISTS weekly_reports (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        report_date TEXT,
        cities_processed INTEGER,
        avg_quality_score REAL,
        total_tokens INTEGER,
        total_cost REAL,
        top_opportunities TEXT,
        report_text TEXT
    )''')
    
    conn.commit()
    conn.close()

def db_record_processing(city_slug, quality_score, pr_url, issues, model, tokens, notes, status="completed",
                         failure_codes=None, what_fixed_it=None, retry_count=0,
                         last_failure_score=None, last_success_score=None):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    now = datetime.now().isoformat()
    
    c.execute('''INSERT INTO city_history 
                 (city_slug, processed_at, quality_score, pr_url, issues, model_used, tokens_used,
                  improvement_notes, status, failure_reason_codes, what_fixed_it, retry_count,
                  last_failure_score, last_success_score)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''',
              (city_slug, now, quality_score, pr_url, json.dumps(issues), model, tokens, notes, status,
               json.dumps(failure_codes or []), what_fixed_it or "",
               retry_count, last_failure_score, last_success_score))
    
    c.execute('''INSERT OR REPLACE INTO city_priority 
                 (city_slug, last_processed, process_count, avg_quality_score, updated_at,
                  priority_score, tier, continent, gsc_impressions, gsc_clicks, gsc_ctr, gsc_position, gsc_top_query, gsc_updated)
                 VALUES (?, ?, 
                     COALESCE((SELECT process_count FROM city_priority WHERE city_slug=?)+1, 1),
                     ?,
                     ?,
                     COALESCE((SELECT priority_score FROM city_priority WHERE city_slug=?), 50),
                     COALESCE((SELECT tier FROM city_priority WHERE city_slug=?), 3),
                     COALESCE((SELECT continent FROM city_priority WHERE city_slug=?), 'unknown'),
                     COALESCE((SELECT gsc_impressions FROM city_priority WHERE city_slug=?), 0),
                     COALESCE((SELECT gsc_clicks FROM city_priority WHERE city_slug=?), 0),
                     COALESCE((SELECT gsc_ctr FROM city_priority WHERE city_slug=?), 0),
                     COALESCE((SELECT gsc_position FROM city_priority WHERE city_slug=?), 0),
                     COALESCE((SELECT gsc_top_query FROM city_priority WHERE city_slug=?), ''),
                     COALESCE((SELECT gsc_updated FROM city_priority WHERE city_slug=?), '')
                 )''',
              (city_slug, now, city_slug, quality_score, now,
               city_slug, city_slug, city_slug, city_slug, city_slug,
               city_slug, city_slug, city_slug, city_slug))
    
    conn.commit()
    conn.close()

def db_get_city_history(city_slug):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''SELECT processed_at, quality_score, pr_url, issues, improvement_notes 
                 FROM city_history WHERE city_slug=? ORDER BY processed_at DESC LIMIT 5''',
              (city_slug,))
    rows = c.fetchall()
    conn.close()
    return rows

def db_get_priority_queue(limit=20):
    """Get cities ordered by GSC-enhanced priority score"""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''SELECT city_slug, priority_score, gsc_impressions, gsc_position, gsc_ctr
                 FROM city_priority 
                 WHERE (last_processed IS NULL OR datetime(last_processed) < datetime('now', '-30 days'))
                 ORDER BY priority_score DESC LIMIT ?''', (limit,))
    rows = c.fetchall()
    conn.close()
    return rows

def db_get_stats():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT COUNT(*) FROM city_history WHERE status="completed"')
    processed = c.fetchone()[0]
    c.execute('SELECT COUNT(*) FROM city_history WHERE status="failed"')
    failed = c.fetchone()[0]
    c.execute('SELECT AVG(quality_score) FROM city_history WHERE quality_score > 0')
    avg_score = c.fetchone()[0] or 0
    c.execute('SELECT COUNT(*) FROM city_priority')
    total = c.fetchone()[0]
    c.execute('SELECT COUNT(*) FROM city_priority WHERE last_processed IS NOT NULL')
    done = c.fetchone()[0]
    c.execute('SELECT COUNT(*) FROM gsc_keywords')
    gsc_count = c.fetchone()[0]
    conn.close()
    return {"processed": processed, "failed": failed, "avg_score": round(avg_score, 1),
            "total_cities": total, "processed_cities": done, "gsc_keywords": gsc_count}

# ============================================================
# GSC CONNECTOR
# ============================================================

GSC_CREDENTIALS_PATH = "gsc-credentials.json"
GSC_SITE_URL = "https://whattime.city/"

def get_gsc_service():
    if not GSC_AVAILABLE:
        return None
    if not Path(GSC_CREDENTIALS_PATH).exists():
        logger.warning("GSC credentials file not found")
        return None
    try:
        creds = service_account.Credentials.from_service_account_file(
            GSC_CREDENTIALS_PATH,
            scopes=['https://www.googleapis.com/auth/webmasters.readonly']
        )
        return build('searchconsole', 'v1', credentials=creds)
    except Exception as e:
        logger.error(f"GSC service error: {e}")
        return None

def fetch_gsc_data(days=28, limit=500):
    """
    Fetch keyword data from GSC.
    Returns list of {query, impressions, clicks, ctr, position}
    """
    service = get_gsc_service()
    if not service:
        return []
    
    end_date = datetime.now().strftime('%Y-%m-%d')
    start_date = (datetime.now() - timedelta(days=days)).strftime('%Y-%m-%d')
    
    try:
        result = service.searchanalytics().query(
            siteUrl=GSC_SITE_URL,
            body={
                'startDate': start_date,
                'endDate': end_date,
                'dimensions': ['query', 'page'],
                'rowLimit': limit,
                'orderBy': [{'fieldName': 'impressions', 'sortOrder': 'DESCENDING'}]
            }
        ).execute()
        
        rows = []
        for row in result.get('rows', []):
            rows.append({
                'query': row['keys'][0],
                'page': row['keys'][1] if len(row['keys']) > 1 else '',
                'impressions': int(row.get('impressions', 0)),
                'clicks': int(row.get('clicks', 0)),
                'ctr': row.get('ctr', 0),
                'position': row.get('position', 0)
            })
        
        return rows
    except Exception as e:
        logger.error(f"GSC fetch error: {e}")
        return []

def extract_city_from_url(url: str) -> str:
    """Extract city slug from whattime.city URL"""
    url = url.replace('https://whattime.city/', '').strip('/')
    parts = url.split('/')
    if parts and parts[0] and parts[0] not in ['time', 'meeting', 'jet-lag-advisor']:
        return parts[0]
    return ""

def extract_city_from_query(query: str) -> str:
    """
    Try to extract city slug from search query.
    e.g. "current time in london" → "london"
    """
    query = query.lower()
    
    # Common patterns
    patterns = [
        r'time in ([a-z\s-]+?)(?:\s+now|$)',
        r'what time is it in ([a-z\s-]+?)(?:\s+now|$)',
        r'([a-z\s-]+?) time zone',
        r'([a-z\s-]+?) timezone',
        r'time difference.*?and ([a-z\s-]+?)$',
        r'call ([a-z\s-]+?) from',
        r'([a-z\s-]+?) business hours',
    ]
    
    for pattern in patterns:
        match = re.search(pattern, query)
        if match:
            city = match.group(1).strip().replace(' ', '-')
            if len(city) > 2 and city not in ['the', 'now', 'utc', 'gmt']:
                return city
    
    return ""

def get_position_multiplier(position: float) -> tuple:
    """
    Graduated position multiplier for GSC Priority Queue v2.
    Returns (multiplier, zone_name)
    
    Zone logic:
    - 1-3:   0.6x  Already ranking well, diminishing returns
    - 4-7:   1.2x  First page but not top — worth improving
    - 8-12:  3.5x  HIGH VALUE push zone — small effort, big jump
    - 13-20: 2.5x  Still push zone but harder
    - 21-50: 1.3x  Content gap — needs work
    - 50+:   1.0x  Deep gap — possible but slow
    """
    if position <= 3:
        return 0.6, 'top3'
    elif position <= 7:
        return 1.2, 'first_page'
    elif position <= 12:
        return 3.5, 'push_zone_high'
    elif position <= 20:
        return 2.5, 'push_zone_mid'
    elif position <= 50:
        return 1.3, 'content_gap'
    else:
        return 1.0, 'deep_gap'

def calculate_opportunity_score(row: dict) -> tuple:
    """
    GSC Priority Queue v2 — spec-compliant opportunity scoring.
    
    Formula:
      base = impressions × position_multiplier
      ctr_gap_bonus = max(0, expected_ctr - current_ctr) × impressions × 50
      quality_deficit_bonus = applied downstream when quality score known
    
    Types:
    - push_zone_high: pos 8-12 (3.5x) → highest ROI
    - push_zone_mid:  pos 13-20 (2.5x) → good ROI
    - ctr_fix:        pos 1-7 but CTR < 5% → fix title/meta
    - content_gap:    pos 21-50 → create/strengthen content
    - deep_gap:       pos 50+ → significant content needed
    - quick_win:      high impressions regardless of position
    """
    impressions = row['impressions']
    clicks = row['clicks']
    ctr = row['ctr']
    position = row['position']
    
    if impressions < 5:
        return 0, 'insufficient_data'
    
    pos_multiplier, zone = get_position_multiplier(position)
    
    # Expected CTR by position (approximate industry benchmarks)
    expected_ctr_map = {
        'top3': 0.25, 'first_page': 0.08,
        'push_zone_high': 0.03, 'push_zone_mid': 0.02,
        'content_gap': 0.01, 'deep_gap': 0.005
    }
    expected_ctr = expected_ctr_map.get(zone, 0.01)
    ctr_gap = max(0, expected_ctr - ctr)
    
    # Base score
    base = impressions * pos_multiplier
    
    # CTR gap bonus
    ctr_bonus = ctr_gap * impressions * 50
    
    score = base + ctr_bonus
    
    # Determine opportunity type
    if zone == 'top3' and ctr < 0.15:
        opp_type = 'ctr_fix'
    elif zone == 'first_page' and ctr < 0.05:
        opp_type = 'ctr_fix'
    elif zone in ('push_zone_high', 'push_zone_mid'):
        opp_type = 'push'
    elif zone == 'content_gap':
        opp_type = 'content_gap'
    elif zone == 'deep_gap':
        opp_type = 'content_gap'
    elif impressions >= 50:
        opp_type = 'quick_win'
    else:
        opp_type = 'low_priority'
    
    return score, opp_type

def refresh_gsc_and_update_priority():
    """
    Full GSC refresh cycle:
    1. Fetch all keyword data
    2. Map to cities
    3. Calculate opportunity scores
    4. Update priority queue
    """
    logger.info("Starting GSC refresh...")
    
    rows = fetch_gsc_data(days=28, limit=1000)
    if not rows:
        logger.warning("No GSC data returned")
        return 0
    
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    now = datetime.now().isoformat()
    date_range = f"{(datetime.now() - timedelta(days=28)).strftime('%Y-%m-%d')} to {datetime.now().strftime('%Y-%m-%d')}"
    
    # Clear old GSC keywords
    c.execute("DELETE FROM gsc_keywords WHERE fetched_at < datetime('now', '-7 days')")
    
    city_gsc_data = {}  # city_slug → aggregated data
    
    for row in rows:
        opp_score, opp_type = calculate_opportunity_score(row)
        
        if opp_score <= 0:
            continue
        
        # Try to map to a city
        city = extract_city_from_url(row['page'])
        if not city:
            city = extract_city_from_query(row['query'])
        
        if city:
            # Aggregate per city
            if city not in city_gsc_data:
                city_gsc_data[city] = {
                    'total_impressions': 0,
                    'total_clicks': 0,
                    'avg_position': [],
                    'avg_ctr': [],
                    'top_query': '',
                    'top_impressions': 0,
                    'opportunity_score': 0,
                    'opportunity_type': opp_type
                }
            
            d = city_gsc_data[city]
            d['total_impressions'] += row['impressions']
            d['total_clicks'] += row['clicks']
            d['avg_position'].append(row['position'])
            d['avg_ctr'].append(row['ctr'])
            d['opportunity_score'] += opp_score
            
            if row['impressions'] > d['top_impressions']:
                d['top_impressions'] = row['impressions']
                d['top_query'] = row['query']
        
        # Save to gsc_keywords table
        c.execute('''INSERT INTO gsc_keywords 
                     (query, city_slug, impressions, clicks, ctr, position, date_range, fetched_at, opportunity_type)
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                  (row['query'], city or '', row['impressions'], row['clicks'],
                   row['ctr'], row['position'], date_range, now, opp_type))
    
    # Update priority scores with GSC intelligence
    for city_slug, data in city_gsc_data.items():
        avg_pos = sum(data['avg_position']) / len(data['avg_position']) if data['avg_position'] else 50
        avg_ctr = sum(data['avg_ctr']) / len(data['avg_ctr']) if data['avg_ctr'] else 0
        
        # GSC-enhanced priority score:
        # impressions × opportunity multiplier + position bonus + CTR gap bonus
        gsc_priority = (
            data['opportunity_score'] * 0.1 +
            data['total_impressions'] * 0.5 +
            max(0, (50 - avg_pos)) * 2 +
            max(0, (0.1 - avg_ctr)) * 100
        )
        
        # Cap at 100, combine with existing tier score
        c.execute('''INSERT OR REPLACE INTO city_priority 
                     (city_slug, priority_score, gsc_impressions, gsc_clicks, gsc_ctr, 
                      gsc_position, gsc_top_query, gsc_updated, updated_at,
                      last_processed, process_count, avg_quality_score, tier, continent)
                     VALUES (?, ?,
                         ?, ?, ?, ?, ?, ?, ?,
                         COALESCE((SELECT last_processed FROM city_priority WHERE city_slug=?), NULL),
                         COALESCE((SELECT process_count FROM city_priority WHERE city_slug=?), 0),
                         COALESCE((SELECT avg_quality_score FROM city_priority WHERE city_slug=?), 0),
                         COALESCE((SELECT tier FROM city_priority WHERE city_slug=?), 3),
                         COALESCE((SELECT continent FROM city_priority WHERE city_slug=?), 'unknown')
                     )''',
                  (city_slug, min(100, gsc_priority),
                   data['total_impressions'], data['total_clicks'],
                   avg_ctr, avg_pos, data['top_query'], now, now,
                   city_slug, city_slug, city_slug, city_slug, city_slug))
    
    conn.commit()
    conn.close()
    
    state["last_gsc_refresh"] = now
    logger.info(f"GSC refresh complete: {len(rows)} queries, {len(city_gsc_data)} cities mapped")
    return len(city_gsc_data)

def get_gsc_opportunities(limit=10) -> list:
    """Get top opportunities from GSC data"""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''SELECT query, city_slug, impressions, clicks, ctr, position, opportunity_type
                 FROM gsc_keywords 
                 WHERE opportunity_type NOT IN ('insufficient_data', 'low_priority')
                 ORDER BY impressions DESC LIMIT ?''', (limit,))
    rows = c.fetchall()
    conn.close()
    return rows

# ============================================================
# DIFF ANALYZER
# ============================================================

def analyze_diff(old_content: str, new_content: dict) -> dict:
    """
    Compare old and new content to generate meaningful diff.
    Returns structured diff for PR description.
    """
    if not old_content:
        return {"is_new": True, "summary": "Fresh content created — no previous version"}
    
    diff = {
        "is_new": False,
        "changes": [],
        "improvements": [],
        "metrics": {}
    }
    
    # Word count comparison
    old_words = len(old_content.split())
    new_text = json.dumps(new_content)
    new_words = len(new_text.split())
    word_delta = new_words - old_words
    diff["metrics"]["word_delta"] = word_delta
    
    if word_delta > 0:
        diff["improvements"].append(f"Word count +{word_delta} words")
    
    # FAQ analysis
    new_faqs = new_content.get("faq", [])
    if "faq" not in old_content.lower():
        diff["improvements"].append(f"FAQ section ADDED ({len(new_faqs)} questions)")
        diff["changes"].append("new_faq")
    elif len(new_faqs) > 0:
        diff["improvements"].append(f"FAQ updated ({len(new_faqs)} questions with Schema markup)")
    
    # Schema check
    if "faq_schema" in new_content and "@type" in str(new_content.get("faq_schema", {})):
        if "FAQPage" not in old_content:
            diff["improvements"].append("JSON-LD FAQ Schema ADDED")
            diff["changes"].append("schema_added")
        else:
            diff["improvements"].append("JSON-LD FAQ Schema updated")
    
    # E-E-A-T footer
    if new_content.get("eeat_footer"):
        if "WhatTime.city Editorial Team" not in old_content:
            diff["improvements"].append("E-E-A-T footer ADDED")
            diff["changes"].append("eeat_added")
        else:
            diff["improvements"].append("E-E-A-T footer updated")
    
    # Internal links
    new_links = new_content.get("internal_links", [])
    old_time_links = len(re.findall(r'/time/', old_content))
    new_time_links = len(re.findall(r'/time/', json.dumps(new_content)))
    link_delta = new_time_links - old_time_links
    
    if link_delta > 0:
        diff["improvements"].append(f"Internal /time/ links +{link_delta}")
    elif new_time_links > 0:
        diff["improvements"].append(f"Internal /time/ links maintained ({new_time_links})")
    
    # Content blocks
    blocks = new_content.get("content_blocks", [])
    if blocks and "content_blocks" not in old_content:
        diff["improvements"].append(f"Content blocks ADDED ({len(blocks)} blocks)")
    
    # Build summary
    if diff["improvements"]:
        diff["summary"] = " | ".join(diff["improvements"][:5])
    else:
        diff["summary"] = "Content refreshed and updated"
    
    return diff

# ============================================================
# CLAUDE API
# ============================================================

COST_PER_TOKEN = {
    "claude-haiku-4-5-20251001": 0.0000008,
    "claude-sonnet-4-5": 0.000003,
}

def ask_claude(prompt: str, system: str = None, task_type: str = "simple",
               max_tokens: int = None) -> tuple:
    config = get_config()
    api_key = config.get("CLAUDE_API_KEY", "")
    if not api_key:
        return "ERROR: Claude API key not found", 0, ""
    
    model = "claude-sonnet-4-5" if task_type in ["generate_content", "research", "report", "audit"] else "claude-haiku-4-5-20251001"
    if max_tokens is None:
        max_tokens = 4000 if task_type in ["generate_content", "research", "report"] else 1500
    
    cost_so_far = state["token_used"] * 0.000003
    if cost_so_far > state["monthly_budget"] * 0.95:
        return "ERROR: Monthly budget limit reached", 0, model
    
    client = anthropic.Anthropic(api_key=api_key)
    kwargs = {
        "model": model,
        "max_tokens": max_tokens,
        "messages": [{"role": "user", "content": prompt}]
    }
    if system:
        kwargs["system"] = system
    
    message = client.messages.create(**kwargs)
    tokens = 0
    if hasattr(message, 'usage'):
        tokens = message.usage.input_tokens + message.usage.output_tokens
        state["token_used"] += tokens
    
    return message.content[0].text, tokens, model

# ============================================================
# GITHUB
# ============================================================

def github_get_file(file_path: str) -> str:
    config = get_config()
    token = config.get("GITHUB_TOKEN", "")
    branch = config.get("GITHUB_BRANCH", "staging")
    repo = config.get("GITHUB_REPO", "")
    
    # Use raw URL for large files (API has 1MB limit)
    r = requests.get(
        f"https://raw.githubusercontent.com/{repo}/{branch}/{file_path}",
        headers={"Authorization": f"token {token}"},
        timeout=30
    )
    if r.status_code == 200:
        return r.text
    
    # Fallback: API with base64
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }
    r = requests.get(
        f"https://api.github.com/repos/{repo}/contents/{file_path}?ref={branch}",
        headers=headers, timeout=15
    )
    if r.status_code == 200 and r.json().get("content"):
        return base64.b64decode(r.json()["content"]).decode("utf-8")
    return ""

def github_create_pr(title: str, branch_name: str, body: str, files: dict) -> str:
    config = get_config()
    token = config.get("GITHUB_TOKEN", "")
    repo = config.get("GITHUB_REPO", "")
    base_branch = config.get("GITHUB_BRANCH", "staging")
    
    if not all([token, repo]):
        return "ERROR: GitHub config missing"
    
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    r = requests.get(f"https://api.github.com/repos/{repo}/git/ref/heads/{base_branch}",
                     headers=headers, timeout=15)
    if r.status_code != 200:
        return f"ERROR: Base branch: {r.text[:150]}"
    sha = r.json()["object"]["sha"]
    
    new_branch = f"growth-agent/{branch_name}-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    r = requests.post(f"https://api.github.com/repos/{repo}/git/refs",
                      headers=headers,
                      json={"ref": f"refs/heads/{new_branch}", "sha": sha},
                      timeout=15)
    if r.status_code not in [200, 201]:
        return f"ERROR: Branch create: {r.text[:150]}"
    
    for file_path, content in files.items():
        encoded = base64.b64encode(content.encode()).decode()
        r_check = requests.get(
            f"https://api.github.com/repos/{repo}/contents/{file_path}?ref={new_branch}",
            headers=headers, timeout=15
        )
        payload = {"message": f"Growth Agent v4: {title}", "content": encoded, "branch": new_branch}
        if r_check.status_code == 200:
            payload["sha"] = r_check.json()["sha"]
        
        r = requests.put(f"https://api.github.com/repos/{repo}/contents/{file_path}",
                         headers=headers, json=payload, timeout=15)
        if r.status_code not in [200, 201]:
            return f"ERROR: Commit {file_path}: {r.text[:150]}"
    
    r = requests.post(f"https://api.github.com/repos/{repo}/pulls",
                      headers=headers,
                      json={"title": title, "body": body, "head": new_branch, "base": base_branch},
                      timeout=15)
    if r.status_code not in [200, 201]:
        return f"ERROR: PR create: {r.text[:150]}"
    
    return f"SUCCESS: {r.json()['html_url']}"

# ============================================================
# CONTENT ENGINE
# ============================================================

def parse_json_robust(response: str) -> dict:
    for strategy in [
        lambda r: json.loads(r.strip()),
        lambda r: json.loads(re.search(r'```(?:json)?\s*(.*?)\s*```', r, re.DOTALL).group(1)),
        lambda r: json.loads(r[r.find('{'):r.rfind('}')+1])
    ]:
        try:
            return strategy(response)
        except:
            pass
    return None

def validate_content(content: dict, city_slug: str) -> dict:
    issues = []
    score = 100
    
    faqs = content.get("faq", [])
    if len(faqs) < 8:
        issues.append(f"FAQ: {len(faqs)}/8")
        score -= 20
    
    for i, faq in enumerate(faqs[:8]):
        if len(faq.get("answer", "")) < 50:
            issues.append(f"FAQ #{i+1} too short")
            score -= 5
    
    if not content.get("faq_schema"):
        issues.append("JSON-LD Schema missing")
        score -= 15
    
    footer = content.get("eeat_footer", "")
    if "WhatTime.city" not in footer:
        issues.append("E-E-A-T footer missing")
        score -= 15
    
    links = content.get("internal_links", [])
    bad = [l for l in links if l and not l.startswith('/time/') and '/' in l]
    if bad:
        issues.append(f"Link format: {bad[0]}")
        score -= 10
    
    if len(content.get("content_blocks", [])) < 3:
        issues.append("Content blocks < 3")
        score -= 10
    
    if len(content.get("seo_description", "")) < 100:
        issues.append("Meta desc too short")
        score -= 10
    
    full = json.dumps(content)
    if any(ph in full for ph in ["[City]", "[city]", "PLACEHOLDER"]):
        issues.append("Placeholder text found")
        score -= 25
    
    failure_codes = classify_failure_codes(issues)
    
    suggested_fixes = []
    if "faq_missing" in failure_codes:
        suggested_fixes.append("Add all 8 FAQ questions with direct answers")
    if "schema_missing" in failure_codes:
        suggested_fixes.append("Build JSON-LD FAQPage schema from FAQ data")
    if "eeat_missing" in failure_codes:
        suggested_fixes.append("Add E-E-A-T footer with WhatTime.city attribution")
    if "internal_links_low" in failure_codes:
        suggested_fixes.append("Add /time/[city]/[other]/ format links")
    if "thin_content" in failure_codes:
        suggested_fixes.append("Expand content blocks to 150+ words each")
    if "meta_desc_short" in failure_codes:
        suggested_fixes.append("Write 130-160 char meta description")
    if "placeholder_text" in failure_codes:
        suggested_fixes.append("Replace all [City] placeholders with real data")
    
    return {
        "score": max(0, score),
        "issues": issues,
        "passed": score >= 70,
        "content": content,
        "failure_reason_codes": failure_codes,
        "suggested_fixes": suggested_fixes,
    }

def generate_city_seo(city_slug: str, existing: dict = None, retry_issues: list = None,
                      gsc_data: dict = None) -> tuple:
    city_name = city_slug.replace('-', ' ').title()
    
    existing_ctx = ""
    if existing:
        if existing.get("city_page"):
            existing_ctx += f"\n\nEXISTING PAGE:\n{existing['city_page'][:1200]}"
        if existing.get("seo_data"):
            existing_ctx += f"\n\nEXISTING SEO:\n{existing['seo_data'][:800]}"
    
    gsc_ctx = ""
    if gsc_data:
        gsc_ctx = f"""
GSC REAL DATA for {city_name}:
- Impressions (28d): {gsc_data.get('impressions', 0)}
- Avg Position: {gsc_data.get('position', 0):.1f}
- CTR: {gsc_data.get('ctr', 0)*100:.1f}%
- Top Query: "{gsc_data.get('top_query', 'N/A')}"
- Opportunity: {gsc_data.get('opportunity_type', 'unknown')}
STRATEGY: {"Improve title/meta for CTR" if gsc_data.get('opportunity_type') == 'ctr_fix' else "Strengthen content for ranking push" if gsc_data.get('opportunity_type') == 'push' else "Create comprehensive content to capture impressions"}
"""
    
    retry_ctx = ""
    if retry_issues:
        retry_ctx = f"\nPREVIOUS ISSUES TO FIX:\n" + "\n".join(f"- {i}" for i in retry_issues)
    
    system = SEO_SYSTEM_PROMPT + "\n\n" + PREMIUM_CRITERIA
    
    prompt = f"""Generate comprehensive SEO content for {city_name} on whattime.city.
{existing_ctx}
{gsc_ctx}
{retry_ctx}

Return ONLY this JSON:
{{
  "faq": [
    {{"question": "What time is it in {city_name} right now?", "answer": "...accurate answer with full timezone name and UTC offset..."}},
    {{"question": "What time zone is {city_name} in?", "answer": "..."}},
    {{"question": "Does {city_name} observe daylight saving time?", "answer": "Yes/No. [specific details]"}},
    {{"question": "What is the time difference between {city_name} and New York?", "answer": "...specific hours, mention DST impact..."}},
    {{"question": "What is the time difference between {city_name} and London?", "answer": "..."}},
    {{"question": "What time does the stock exchange open in {city_name}?", "answer": "...real exchange name, real hours..."}},
    {{"question": "What is the best time to call {city_name} from the US?", "answer": "...specific hours EST/PST..."}},
    {{"question": "What are typical business hours in {city_name}?", "answer": "...culturally accurate hours..."}}
  ],
  "faq_schema": {{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[]}},
  "seo_description": "150-160 char description for 'time in {city_name}'",
  "seo_title": "Current Time in {city_name} — Timezone, UTC Offset & World Clock",
  "content_blocks": [
    {{"title": "{city_name} Time Zone Guide", "content": "150+ words, entity-first, real UTC offset, DST details, link to /time/{city_slug}/new-york/"}},
    {{"title": "Business Hours in {city_name}", "content": "150+ words, specific hours, overlap with US/EU, link to /meeting/"}},
    {{"title": "Calling {city_name} Internationally", "content": "150+ words, best times from US/UK, link to /time/{city_slug}/london/"}}
  ],
  "internal_links": ["/time/{city_slug}/new-york/","/time/{city_slug}/london/","/time/{city_slug}/tokyo/","/time/{city_slug}/dubai/","/time/{city_slug}/sydney/"],
  "time_difference_table": [
    {{"city":"New York","slug":"new-york","difference":"X hours","link":"/time/{city_slug}/new-york/"}},
    {{"city":"London","slug":"london","difference":"X hours","link":"/time/{city_slug}/london/"}},
    {{"city":"Tokyo","slug":"tokyo","difference":"X hours","link":"/time/{city_slug}/tokyo/"}},
    {{"city":"Dubai","slug":"dubai","difference":"X hours","link":"/time/{city_slug}/dubai/"}},
    {{"city":"Sydney","slug":"sydney","difference":"X hours","link":"/time/{city_slug}/sydney/"}},
    {{"city":"Singapore","slug":"singapore","difference":"X hours","link":"/time/{city_slug}/singapore/"}},
    {{"city":"Paris","slug":"paris","difference":"X hours","link":"/time/{city_slug}/paris/"}},
    {{"city":"Los Angeles","slug":"los-angeles","difference":"X hours","link":"/time/{city_slug}/los-angeles/"}}
  ],
  "eeat_footer": "Last updated: {datetime.now().strftime('%B %Y')} | ✓ Verified by WhatTime.city Editorial Team | Timezone data sourced from IANA Time Zone Database.",
  "timezone_facts": {{"full_name":"","abbreviation":"","utc_offset":"","dst_observed":true,"dst_start":"","dst_end":"","dst_offset":""}},
  "improvement_notes": "What specifically was created or improved"
}}

REQUIREMENTS: All facts must be accurate. Replace ALL template text. UTC offsets mathematically correct. DST dates real."""

    response, tokens, model = ask_claude(prompt, system, task_type="generate_content")
    if response.startswith("ERROR:"):
        return None, tokens, model
    
    result = parse_json_robust(response)
    if result and result.get("faq"):
        result["faq_schema"] = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": f["question"],
                 "acceptedAnswer": {"@type": "Answer", "text": f["answer"]}}
                for f in result["faq"]
            ]
        }
    
    return result, tokens, model

def generate_tsx(city_slug: str, seo_data: dict, quality_score: int, diff: dict) -> str:
    city_name = city_slug.replace('-', ' ').title()
    var = city_slug.replace('-', '_')
    changes = " | ".join(diff.get("improvements", [])[:3])
    
    return f"""// ============================================================
// Growth Agent v4.0 — GSC-Optimized SEO Content
// City: {city_name}
// Generated: {datetime.now().isoformat()}
// Quality Score: {quality_score}/100
// Changes: {changes}
// ============================================================

import type {{ CityPageSEO }} from '@/core/types/city';

export const {var}SEOData: CityPageSEO = {json.dumps(seo_data, indent=2, ensure_ascii=False)};

export const {var}FAQSchema = {json.dumps(seo_data.get('faq_schema', {}), indent=2, ensure_ascii=False)};

export const {var}TimezoneFacts = {json.dumps(seo_data.get('timezone_facts', {}), indent=2, ensure_ascii=False)};
"""

# ============================================================
# FULL PROCESSING PIPELINE
# ============================================================

async def process_city_full(city_slug: str, update, max_retries: int = 2) -> tuple:
    """Complete pipeline: read → GSC → generate → validate → retry → PR"""
    tokens_total = 0
    last_issues = None
    attempt_scores = []          # Track score per attempt
    attempt_failure_codes = []   # Track failure codes per attempt
    
    # Get GSC data for this city
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''SELECT gsc_impressions, gsc_clicks, gsc_ctr, gsc_position, gsc_top_query
                 FROM city_priority WHERE city_slug=?''', (city_slug,))
    gsc_row = c.fetchone()
    conn.close()
    
    gsc_data = None
    if gsc_row and gsc_row[0]:
        gsc_data = {
            "impressions": gsc_row[0], "clicks": gsc_row[1],
            "ctr": gsc_row[2], "position": gsc_row[3],
            "top_query": gsc_row[4] or "", "opportunity_type": "push"
        }
    
    # Read existing content
    existing = {
        "city_page": github_get_file(f"app/{city_slug}/page.tsx")[:2000] or "",
        "seo_data": github_get_file(f"data/seo/{city_slug}-seo.ts")[:1500] or ""
    }
    old_content = existing.get("seo_data", "") or existing.get("city_page", "")
    
    for attempt in range(max_retries + 1):
        if attempt > 0:
            await update.message.reply_text(f"🔄 Retry {attempt}/{max_retries}...")
        
        seo_data, tokens, model = generate_city_seo(
            city_slug, existing, last_issues, gsc_data
        )
        tokens_total += tokens
        
        if not seo_data:
            last_issues = ["JSON parse failed"]
            continue
        
        validation = validate_content(seo_data, city_slug)
        seo_data = validation["content"]
        attempt_scores.append(validation["score"])
        attempt_failure_codes = validation.get("failure_reason_codes", [])
        
        if validation["passed"]:
            # Build what_fixed_it if this was a retry
            what_fixed = None
            if attempt > 0 and len(attempt_scores) > 1:
                prev_score = attempt_scores[-2]
                curr_score = attempt_scores[-1]
                diff_temp = analyze_diff(old_content, seo_data)
                improvements = diff_temp.get("improvements", [])
                what_fixed = f"Score {prev_score}→{curr_score} | Fixed: {', '.join(attempt_failure_codes[:3])} | {'; '.join(improvements[:3])}"
            
            validation["what_fixed_it"] = what_fixed
            validation["retry_count"] = attempt
            validation["last_failure_score"] = attempt_scores[-2] if len(attempt_scores) > 1 else None
            validation["last_success_score"] = validation["score"]
            
            diff = analyze_diff(old_content, seo_data)
            return seo_data, validation, diff, tokens_total, model
        
        last_issues = validation["issues"]
    
    # All retries exhausted
    validation["what_fixed_it"] = None
    validation["retry_count"] = max_retries
    validation["last_failure_score"] = attempt_scores[-1] if attempt_scores else 0
    validation["last_success_score"] = None
    diff = analyze_diff(old_content, seo_data) if seo_data else {"summary": "Failed", "improvements": []}
    return seo_data, validation, diff, tokens_total, model

# ============================================================
# SCHEDULER
# ============================================================

async def scheduled_friday_batch(app):
    """Auto-process 10 priority cities every Friday"""
    logger.info("Scheduler: Friday batch starting...")
    
    priority_rows = db_get_priority_queue(limit=10)
    cities = [r[0] for r in priority_rows]
    
    if not cities:
        cities = ["amsterdam", "barcelona", "berlin", "brussels", "vienna",
                  "warsaw", "stockholm", "oslo", "lisbon", "rome"]
    
    config = get_config()
    chat_id = config.get("TELEGRAM_CHAT_ID", "")
    
    if not chat_id:
        logger.warning("No TELEGRAM_CHAT_ID in config, skipping notification")
        return
    
    await app.bot.send_message(
        chat_id=chat_id,
        text=f"🤖 *Haftalık Otomatik Batch Başladı*\n{len(cities)} şehir işlenecek:\n" + 
             "\n".join([f"• {c}" for c in cities])
    )
    
    success = 0
    for city in cities:
        try:
            # Simplified run for scheduler
            existing = {"seo_data": github_get_file(f"data/seo/{city}-seo.ts")[:1500]}
            seo_data, tokens, model = generate_city_seo(city, existing)
            
            if seo_data:
                validation = validate_content(seo_data, city)
                seo_data = validation["content"]
                tsx = generate_tsx(city, seo_data, validation["score"], {"improvements": []})
                result = github_create_pr(
                    f"SEO v4 Auto: {city.replace('-',' ').title()}",
                    city,
                    f"Automated weekly SEO for {city}\nScore: {validation['score']}/100",
                    {f"data/seo/{city}-seo.ts": tsx}
                )
                if result.startswith("SUCCESS"):
                    success += 1
                    db_record_processing(city, validation["score"], result.replace("SUCCESS: ", ""),
                                        validation["issues"], model, tokens, "Auto weekly batch")
        except Exception as e:
            logger.error(f"Scheduler error for {city}: {e}")
        
        await asyncio.sleep(5)
    
    await app.bot.send_message(
        chat_id=chat_id,
        text=f"✅ *Haftalık Batch Tamamlandı*\n{success}/{len(cities)} başarılı"
    )

async def scheduled_monday_report(app):
    """Send weekly SEO report every Monday"""
    config = get_config()
    chat_id = config.get("TELEGRAM_CHAT_ID", "")
    if not chat_id:
        return
    
    stats = db_get_stats()
    opps = get_gsc_opportunities(limit=5)
    
    opp_text = ""
    for opp in opps:
        query, city, imp, clk, ctr, pos, opp_type = opp
        opp_text += f"• `{query}` — {imp} imp, pos {pos:.0f} ({opp_type})\n"
    
    cost = state["token_used"] * 0.000003
    
    report = f"""📊 *Haftalık SEO Raporu*
{datetime.now().strftime('%d %B %Y')}

*Bu Hafta:*
✅ İşlenen: {state["processed"]} şehir
⭐ Ort. kalite: {stats["avg_score"]}/100
💰 Maliyet: ~${cost:.4f}

*Toplam Coverage:*
🏙️ {stats["processed_cities"]}/{stats["total_cities"]} şehir
🔑 {stats["gsc_keywords"]} GSC keyword

*Top GSC Fırsatları:*
{opp_text if opp_text else "GSC verisi yok — /gsc ile yenile"}

*Bu Hafta Önerilen Şehirler:*
/queue ile gör"""
    
    await app.bot.send_message(chat_id=chat_id, text=report)

def run_scheduler(app):
    """Background scheduler thread"""
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    async def scheduler_loop():
        logger.info("Scheduler thread started")
        while state["scheduler_running"]:
            now = datetime.now()
            
            # GSC refresh: daily at 06:00
            if now.hour == 6 and now.minute < 5:
                try:
                    count = refresh_gsc_and_update_priority()
                    logger.info(f"Daily GSC refresh: {count} cities updated")
                except Exception as e:
                    logger.error(f"GSC refresh error: {e}")
            
            # Friday batch: 09:00
            if now.weekday() == 4 and now.hour == 9 and now.minute < 5 and state["auto_mode"]:
                try:
                    await scheduled_friday_batch(app)
                except Exception as e:
                    logger.error(f"Friday batch error: {e}")
            
            # Monday report: 08:00
            if now.weekday() == 0 and now.hour == 8 and now.minute < 5 and state["auto_mode"]:
                try:
                    await scheduled_monday_report(app)
                except Exception as e:
                    logger.error(f"Monday report error: {e}")
            
            await asyncio.sleep(60)  # Check every minute
    
    loop.run_until_complete(scheduler_loop())

# ============================================================
# TELEGRAM HANDLERS
# ============================================================

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("""🚀 *Growth Agent v4.0*
GSC Connected \\| Scheduler \\| Diff Analyzer

*İçerik:*
/run [city] — GSC-aware içerik üret
/batch [n] — Priority queue'dan toplu
/research [city] — Rakip analizi

*GSC:*
/gsc — GSC verisi yenile
/opportunities — Top keyword fırsatları
/gscstats [city] — Şehir GSC verisi

*Sistem:*
/status — Durum
/budget — Bütçe
/stats — İstatistikler
/history [city] — Geçmiş
/queue — Priority queue
/seed — Queue doldur
/auto on/off — Scheduler
/site [isim] — Site seç

*Analiz:*
/report — Haftalık rapor""")

async def status_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    config = get_config()
    stats = db_get_stats()
    cost = state["token_used"] * 0.000003
    pct = (cost / state["monthly_budget"]) * 100
    gsc_ok = "✅" if GSC_AVAILABLE and Path(GSC_CREDENTIALS_PATH).exists() else "❌"
    sched_ok = "✅ Çalışıyor" if state["scheduler_running"] else "❌ Durdu"
    last_gsc = state.get("last_gsc_refresh", "Henüz yok")
    if last_gsc and last_gsc != "Henüz yok":
        last_gsc = last_gsc[:16].replace('T', ' ')
    
    msg = f"""📊 *Growth Agent v4.0 — Durum*

🌐 Site: `{state["active_site"]}`
🔌 GSC: {gsc_ok}
⏰ Scheduler: {sched_ok}
🔄 Auto batch: {"✅" if state["auto_mode"] else "❌"}
🕐 Son GSC refresh: {last_gsc}

*Bu Session:*
✅ {state["processed"]} şehir | ❌ {state["failed"]} fail
🔤 {state["token_used"]:,} token | 💰 ${cost:.4f} ({pct:.1f}%)

*Toplam:*
📈 {stats["processed_cities"]}/{stats["total_cities"]} şehir | ⭐ {stats["avg_score"]}/100
🔑 {stats["gsc_keywords"]} GSC keyword

⚙️ `{config.get("GITHUB_REPO","?")}` → `{config.get("GITHUB_BRANCH","?")}`"""
    
    await update.message.reply_text(msg)

async def gsc_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🔄 GSC verisi yenileniyor...")
    try:
        count = refresh_gsc_and_update_priority()
        if count > 0:
            await update.message.reply_text(
                f"✅ GSC güncellendi!\n\n"
                f"🏙️ {count} şehir priority güncellendi\n"
                f"Top fırsatlar: /opportunities"
            )
        else:
            await update.message.reply_text("⚠️ GSC'den veri gelmedi. Credentials kontrol et.")
    except Exception as e:
        await update.message.reply_text(f"❌ GSC hata: {str(e)[:200]}")

async def opportunities_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    opps = get_gsc_opportunities(limit=10)
    
    if not opps:
        await update.message.reply_text("📊 GSC fırsatı yok. /gsc ile yenile.")
        return
    
    msg = "🎯 *Top GSC Fırsatları*\n\n"
    icons = {"push": "🚀", "ctr_fix": "📝", "content_gap": "📄", "quick_win": "⚡"}
    
    for opp in opps:
        query, city, imp, clk, ctr, pos, opp_type = opp
        icon = icons.get(opp_type, "📌")
        city_str = f" → `{city}`" if city else ""
        msg += f"{icon} `{query[:40]}`{city_str}\n"
        msg += f"   {imp} imp | pos {pos:.0f} | CTR {ctr*100:.1f}% | {opp_type}\n\n"
    
    await update.message.reply_text(msg[:3500])

async def gscstats_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /gscstats london")
        return
    
    city_slug = "-".join(context.args).lower()
    
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''SELECT gsc_impressions, gsc_clicks, gsc_ctr, gsc_position, gsc_top_query, gsc_updated, priority_score
                 FROM city_priority WHERE city_slug=?''', (city_slug,))
    row = c.fetchone()
    
    c.execute('''SELECT query, impressions, clicks, ctr, position, opportunity_type
                 FROM gsc_keywords WHERE city_slug=? ORDER BY impressions DESC LIMIT 5''',
              (city_slug,))
    keywords = c.fetchall()
    conn.close()
    
    city_name = city_slug.replace('-', ' ').title()
    
    if not row or not row[0]:
        await update.message.reply_text(f"📊 {city_name} için GSC verisi yok. /gsc ile yenile.")
        return
    
    imp, clk, ctr, pos, top_q, updated, priority = row
    
    lines = [
        f"📊 {city_name} — GSC Verisi",
        f"",
        f"📈 Impressions: {imp:,}",
        f"👆 Clicks: {clk:,}",
        f"📊 CTR: {ctr*100:.1f}%",
        f"📍 Avg Position: {pos:.1f}",
        f"🔑 Top Query: {top_q}",
        f"🎯 Priority Score: {priority:.0f}/100",
        f"",
        f"Top Keywords:",
    ]
    for kw in keywords:
        q, i, cl, ct, p, ot = kw
        lines.append(f"• {q[:40]} — {i} imp | pos {p:.0f} | {ot}")
    lines.append(f"")
    lines.append(f"Son güncelleme: {(updated or 'N/A')[:16]}")
    
    await update.message.reply_text("\n".join(lines))

async def run_city_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /run london")
        return
    
    city_slug = "-".join(context.args).lower()
    city_name = city_slug.replace('-', ' ').title()
    
    await update.message.reply_text(
        f"🔍 *{city_name}* işleniyor...\n"
        f"1️⃣ GSC veri yükle\n2️⃣ Mevcut içerik oku\n"
        f"3️⃣ İçerik üret (Sonnet)\n4️⃣ Validate\n5️⃣ Diff analiz\n6️⃣ GitHub PR"
    )
    
    try:
        seo_data, validation, diff, tokens, model = await process_city_full(
            city_slug, update, max_retries=2
        )
        
        if not seo_data:
            state["failed"] += 1
            await update.message.reply_text(f"❌ {city_name}: İçerik üretilemedi")
            return
        
        tsx = generate_tsx(city_slug, seo_data, validation["score"], diff)
        
        # Build rich PR body with diff
        issues_text = "\n".join([f"- ⚠️ {i}" for i in validation["issues"]]) or "✅ Tüm kontroller geçti"
        diff_text = "\n".join([f"- ✅ {imp}" for imp in diff.get("improvements", [])]) or "- İçerik oluşturuldu"
        
        pr_body = f"""## SEO Content: {city_name}
**Growth Agent v4.0** | {datetime.now().strftime('%Y-%m-%d %H:%M')} | {model}

### Quality Score: {validation['score']}/100 {"✅" if validation['passed'] else "⚠️"}

### Diff — What Changed:
{diff_text}

### Validator:
{issues_text}

### GSC Context:
{f"Position: {seo_data.get('_gsc_position', 'N/A')} | Impressions: {seo_data.get('_gsc_impressions', 'N/A')}" if seo_data.get('_gsc_position') else "No GSC data for this city yet"}

### Tokens: {tokens:,} | Est. Cost: ${tokens * 0.000003:.4f}

### Review:
- [ ] UTC offsets accurate
- [ ] DST dates correct  
- [ ] No placeholder text
- [ ] Internal links working"""
        
        result = github_create_pr(
            f"SEO v4: {city_name} — {validation['score']}/100",
            city_slug, pr_body,
            {f"data/seo/{city_slug}-seo.ts": tsx}
        )
        
        if result.startswith("SUCCESS"):
            state["processed"] += 1
            pr_url = result.replace("SUCCESS: ", "")
            db_record_processing(city_slug, validation["score"], pr_url,
                                 validation["issues"], model, tokens,
                                 seo_data.get("improvement_notes", "")[:200])
            
            diff_summary = diff.get("summary", "")[:120]
            
            await update.message.reply_text(
                f"✅ *{city_name}* tamamlandı!\n\n"
                f"⭐ Skor: {validation['score']}/100\n"
                f"📝 {diff_summary}\n"
                f"🔤 {tokens:,} token (~${tokens * 0.000003:.4f})\n\n"
                f"📎 {pr_url}"
            )
        else:
            state["failed"] += 1
            await update.message.reply_text(f"❌ GitHub: {result[:200]}")
    
    except Exception as e:
        state["failed"] += 1
        logger.error(f"run_city error {city_slug}: {e}", exc_info=True)
        await update.message.reply_text(f"❌ Hata: {str(e)[:200]}")

async def batch_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    n = int(context.args[0]) if context.args else 5
    if n > 15:
        await update.message.reply_text("❌ Max 15 şehir")
        return
    
    # Get from GSC-enhanced priority queue
    priority_rows = db_get_priority_queue(limit=n)
    cities = [r[0] for r in priority_rows]
    
    if not cities:
        cities = ["amsterdam","barcelona","berlin","brussels","vienna",
                  "warsaw","stockholm","oslo","lisbon","rome",
                  "madrid","zurich","athens","prague","budapest"][:n]
        await update.message.reply_text("ℹ️ GSC queue boş, varsayılan liste. /seed + /gsc çalıştır.")
    else:
        # Show GSC context
        ctx = "\n".join([f"{i+1}. {r[0]} (score:{r[1]:.0f}, {r[2]} imp, pos:{r[3]:.0f})"
                         for i, r in enumerate(priority_rows[:n])])
        await update.message.reply_text(f"🎯 *GSC Priority Queue:*\n```\n{ctx}\n```")
    
    state["queue"] = cities.copy()
    success = 0
    
    for i, city in enumerate(cities):
        city_name = city.replace('-', ' ').title()
        await update.message.reply_text(f"⏳ [{i+1}/{n}] {city_name}...")
        
        try:
            existing = {"seo_data": github_get_file(f"data/seo/{city}-seo.ts")[:1500]}
            seo_data, tokens, model = generate_city_seo(city, existing)
            
            if seo_data:
                validation = validate_content(seo_data, city)
                tsx = generate_tsx(city, validation["content"], validation["score"], {})
                result = github_create_pr(
                    f"SEO v4: {city_name} — {validation['score']}/100",
                    city,
                    f"Batch SEO for {city_name}\nScore: {validation['score']}/100",
                    {f"data/seo/{city}-seo.ts": tsx}
                )
                if result.startswith("SUCCESS"):
                    success += 1
                    state["processed"] += 1
                    pr_url = result.replace("SUCCESS: ", "")
                    db_record_processing(city, validation["score"], pr_url,
                                        validation["issues"], model, tokens, "Batch")
                    await update.message.reply_text(f"✅ {city_name}: {validation['score']}/100\n{pr_url}")
                else:
                    state["failed"] += 1
                    await update.message.reply_text(f"❌ {city_name}: {result[:100]}")
            else:
                state["failed"] += 1
                await update.message.reply_text(f"❌ {city_name}: üretilemedi")
        
        except Exception as e:
            state["failed"] += 1
            await update.message.reply_text(f"❌ {city_name}: {str(e)[:100]}")
        
        state["queue"] = state["queue"][1:] if state["queue"] else []
        await asyncio.sleep(4)
    
    cost = state["token_used"] * 0.000003
    await update.message.reply_text(
        f"🎉 *Batch tamamlandı!*\n✅ {success}/{n} | 💰 ~${cost:.4f}"
    )

async def auto_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /auto on veya /auto off")
        return
    state["auto_mode"] = context.args[0].lower() == "on"
    if state["auto_mode"]:
        await update.message.reply_text(
            "✅ *Otomasyon açıldı*\n\n"
            "📅 Cuma 09:00 → 10 şehir batch\n"
            "📊 Pazartesi 08:00 → haftalık rapor\n"
            "🔄 Her gün 06:00 → GSC refresh\n\n"
            "⚠️ `TELEGRAM_CHAT_ID` config'de olmalı!",
            parse_mode='Markdown'
        )
    else:
        await update.message.reply_text("❌ Otomasyon kapatıldı")

async def seed_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("🌱 cities.ts okunuyor...")
    try:
        cities_ts = github_get_file("data/cities.ts")
        if not cities_ts:
            await update.message.reply_text("❌ data/cities.ts okunamadı")
            return
        
        # Extract cities
        matches = re.finditer(r"slug:\s*'([^']+)'.*?tier:\s*(\d+).*?continent:\s*'([^']+)'",
                              cities_ts, re.DOTALL)
        
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        now = datetime.now().isoformat()
        count = 0
        
        for m in matches:
            slug, tier, continent = m.group(1), int(m.group(2)), m.group(3)
            base_score = {1: 80, 2: 60, 3: 40, 4: 20}.get(tier, 30)
            c.execute('''INSERT OR IGNORE INTO city_priority 
                         (city_slug, priority_score, tier, continent, updated_at)
                         VALUES (?, ?, ?, ?, ?)''',
                      (slug, base_score, tier, continent, now))
            count += 1
        
        conn.commit()
        conn.close()
        
        await update.message.reply_text(
            f"✅ *{count} şehir yüklendi!*\n\n"
            f"Şimdi /gsc ile GSC verisi ekle, sonra /queue ile sırayı gör.",
            parse_mode='Markdown'
        )
    except Exception as e:
        await update.message.reply_text(f"❌ Seed hatası: {str(e)[:200]}")

async def queue_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    rows = db_get_priority_queue(limit=10)
    if not rows:
        await update.message.reply_text("📋 Queue boş. /seed + /gsc çalıştır.")
        return
    
    msg = "📋 *Priority Queue (GSC-Enhanced)*\n\n"
    for i, row in enumerate(rows):
        city, score, imp, pos, ctr = row
        gsc_info = f" | {imp} imp, pos {pos:.0f}" if imp else ""
        msg += f"{i+1}. `{city}` — {score:.0f}/100{gsc_info}\n"
    
    await update.message.reply_text(msg)

async def history_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /history london")
        return
    city_slug = "-".join(context.args).lower()
    history = db_get_city_history(city_slug)
    if not history:
        await update.message.reply_text(f"📋 {city_slug} için kayıt yok")
        return
    
    msg = f"📋 *{city_slug} Geçmişi*\n\n"
    for row in history:
        at, score, pr, issues_j, notes = row
        issues = json.loads(issues_j) if issues_j else []
        msg += f"📅 {at[:10]} — {score}/100\n"
        if pr:
            msg += f"🔗 {pr}\n"
        if issues:
            msg += f"⚠️ {', '.join(issues[:2])}\n"
        msg += "\n"
    
    await update.message.reply_text(msg[:3000])

async def stats_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    stats = db_get_stats()
    cost = state["token_used"] * 0.000003
    pct = (stats["processed_cities"] / max(stats["total_cities"], 1)) * 100
    
    await update.message.reply_text(
        f"📈 *İstatistikler*\n\n"
        f"🏙️ Coverage: {stats['processed_cities']}/{stats['total_cities']} ({pct:.1f}%)\n"
        f"✅ Tamamlanan: {stats['processed']}\n"
        f"⭐ Ort. kalite: {stats['avg_score']}/100\n"
        f"🔑 GSC keywords: {stats['gsc_keywords']}\n\n"
        f"Session: {state['processed']} şehir | ${cost:.4f}"
    )

async def budget_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    cost = state["token_used"] * 0.000003
    remaining = state["monthly_budget"] - cost
    pct = min(100, (cost / state["monthly_budget"]) * 100)
    bar = "█" * int(pct/5) + "░" * (20-int(pct/5))
    
    await update.message.reply_text(
        f"💰 *Bütçe*\n\n"
        f"`[{bar}]` {pct:.1f}%\n\n"
        f"Harcanan: ${cost:.4f}\n"
        f"Kalan: ${remaining:.2f}\n"
        f"Limit: ${state['monthly_budget']:.0f}\n"
        f"Token: {state['token_used']:,}"
    )

async def research_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /research london")
        return
    city_slug = "-".join(context.args).lower()
    city_name = city_slug.replace('-', ' ').title()
    await update.message.reply_text(f"🔬 {city_name} rakip analizi...")
    
    prompt = f"""Analyze competitive SEO landscape for {city_name} on whattime.city vs timeanddate.com, time.is.
Return JSON: {{
  "gaps": ["3 content gaps"],
  "keywords": [{{"kw":"...", "intent":"...", "priority":"high/med"}}],
  "angle": "differentiation strategy",
  "aeo": ["2 AEO opportunities"]
}}"""
    
    try:
        resp, tokens, model = ask_claude(prompt, task_type="research")
        result = parse_json_robust(resp)
        if result:
            msg = f"🔬 *{city_name}*\n\n"
            msg += "📌 *Boşluklar:*\n" + "\n".join(f"• {g}" for g in result.get("gaps", [])[:3])
            msg += "\n\n🎯 *Strateji:*\n" + result.get("angle", "")[:200]
            await update.message.reply_text(msg[:3500])
        else:
            await update.message.reply_text(f"📊 {resp[:1000]}")
    except Exception as e:
        await update.message.reply_text(f"❌ {str(e)[:200]}")

async def report_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("📊 Rapor hazırlanıyor...")
    stats = db_get_stats()
    opps = get_gsc_opportunities(5)
    opp_text = "\n".join([f"- {o[0]} ({o[2]} imp, pos {o[5]:.0f})" for o in opps]) or "GSC verisi yok"
    
    prompt = f"""SEO report for whattime.city (timezone site, 1600+ cities).
Stats: {stats["processed_cities"]} processed, avg score {stats["avg_score"]}/100.
Top GSC opportunities: {opp_text}

Give: 3 priorities, 5 keyword opportunities, 2 competitor gaps, 1 quick win.
Be specific and actionable. Agency level."""
    
    try:
        report, _, _ = ask_claude(prompt, task_type="report")
        await update.message.reply_text(f"📊 *Rapor*\n\n{report[:3500]}")
    except Exception as e:
        await update.message.reply_text(f"❌ {str(e)}")

async def site_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /site whattime")
        return
    site = context.args[0]
    if not Path(f"config-{site}.env").exists():
        await update.message.reply_text(f"❌ config-{site}.env yok")
        return
    state["active_site"] = site
    await update.message.reply_text(f"✅ Site: *{site}*")

async def help_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("""📖 *v4.0 Komutlar*

*İçerik:*
/run [city], /batch [n], /research [city]

*GSC:*
/gsc, /opportunities, /gscstats [city], /lessons

*Sistem:*
/status, /budget, /stats, /queue, /seed
/history [city], /site [isim]
/auto on/off, /report""")


async def lessons_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    """Show what the agent has learned — failure patterns and fixes"""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    
    # Most common failure codes
    c.execute('''SELECT failure_reason_codes, COUNT(*) as cnt 
                 FROM city_history 
                 WHERE failure_reason_codes IS NOT NULL AND failure_reason_codes != "[]"
                 GROUP BY failure_reason_codes ORDER BY cnt DESC LIMIT 10''')
    failures = c.fetchall()
    
    # Successful retries with what_fixed_it
    c.execute('''SELECT city_slug, last_failure_score, last_success_score, what_fixed_it, retry_count
                 FROM city_history 
                 WHERE what_fixed_it IS NOT NULL AND what_fixed_it != "" AND last_success_score IS NOT NULL
                 ORDER BY processed_at DESC LIMIT 5''')
    fixes = c.fetchall()
    
    # Overall retry stats
    c.execute('SELECT AVG(retry_count), MAX(retry_count), COUNT(*) FROM city_history WHERE retry_count > 0')
    retry_stats = c.fetchone()
    conn.close()
    
    msg = "🧠 Agent Lessons — Decision Log\n\n"
    
    if failures:
        msg += "Most Common Failures:\n"
        code_counter = {}
        for codes_json, cnt in failures:
            try:
                codes = json.loads(codes_json)
                for code in codes:
                    code_counter[code] = code_counter.get(code, 0) + cnt
            except:
                pass
        for code, cnt in sorted(code_counter.items(), key=lambda x: -x[1])[:6]:
            msg += f"  {cnt}x {code}\n"
    
    if fixes:
        msg += "\nRecent Successful Fixes:\n"
        for city, fail_score, success_score, fix, retries in fixes:
            msg += f"  {city}: {fail_score}→{success_score} ({retries} retries)\n"
            if fix:
                msg += f"    {fix[:80]}\n"
    
    if retry_stats and retry_stats[2]:
        msg += f"\nRetry Stats: avg {retry_stats[0]:.1f}, max {retry_stats[1]}, total {retry_stats[2]} cities retried"
    else:
        msg += "\nNo retry data yet — run more cities to build lessons"
    
    await update.message.reply_text(msg[:3500])

# ============================================================
# MAIN
# ============================================================

def main():
    init_db()
    logger.info("DB initialized")
    
    config = get_config()
    token = config.get("TELEGRAM_TOKEN", "")
    if not token:
        logger.error("TELEGRAM_TOKEN missing!")
        return
    
    logger.info(f"Growth Agent v4.0 starting — site: {state['active_site']}")
    
    app = Application.builder().token(token).build()
    state["telegram_app"] = app
    
    # Register handlers
    handlers = [
        ("start", start), ("status", status_cmd), ("budget", budget_cmd),
        ("site", site_cmd), ("run", run_city_cmd), ("batch", batch_cmd),
        ("auto", auto_cmd), ("queue", queue_cmd), ("seed", seed_cmd),
        ("gsc", gsc_cmd), ("opportunities", opportunities_cmd),
        ("gscstats", gscstats_cmd), ("research", research_cmd),
        ("history", history_cmd), ("stats", stats_cmd),
        ("report", report_cmd), ("lessons", lessons_cmd), ("help", help_cmd),
    ]
    for cmd, handler in handlers:
        app.add_handler(CommandHandler(cmd, handler))
    
    # Start scheduler in background thread
    state["scheduler_running"] = True
    scheduler_thread = threading.Thread(
        target=run_scheduler,
        args=(app,),
        daemon=True
    )
    scheduler_thread.start()
    logger.info("Scheduler started")
    
    logger.info("Growth Agent v4.0 active!")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()
