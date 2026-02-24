#!/usr/bin/env python3
"""
Growth Agent - Tonguc Karacay
Multi-site SEO automation with Telegram control
"""

import os
import json
import asyncio
import logging
import re
from datetime import datetime
from pathlib import Path

from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes
import anthropic
import requests

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO,
    handlers=[
        logging.FileHandler('agent.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

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
    "config": {}
}

def get_config():
    state["config"] = load_config(state["active_site"])
    return state["config"]

def ask_claude(prompt: str, system: str = None) -> str:
    config = get_config()
    api_key = config.get("CLAUDE_API_KEY", "")
    if not api_key:
        return "ERROR: Claude API key not found"
    client = anthropic.Anthropic(api_key=api_key)
    kwargs = {
        "model": "claude-haiku-4-5-20251001",
        "max_tokens": 2000,
        "messages": [{"role": "user", "content": prompt}]
    }
    if system:
        kwargs["system"] = system
    message = client.messages.create(**kwargs)
    return message.content[0].text

def github_create_pr(title: str, branch: str, body: str, files: dict) -> str:
    import base64
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
    r = requests.get(f"https://api.github.com/repos/{repo}/git/ref/heads/{base_branch}", headers=headers)
    if r.status_code != 200:
        return f"ERROR: Cannot get base branch: {r.text}"
    sha = r.json()["object"]["sha"]
    new_branch = f"growth-agent/{branch}-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
    r = requests.post(f"https://api.github.com/repos/{repo}/git/refs", headers=headers, json={
        "ref": f"refs/heads/{new_branch}",
        "sha": sha
    })
    if r.status_code not in [200, 201]:
        return f"ERROR: Cannot create branch: {r.text}"
    for file_path, content in files.items():
        encoded = base64.b64encode(content.encode()).decode()
        r_check = requests.get(f"https://api.github.com/repos/{repo}/contents/{file_path}?ref={new_branch}", headers=headers)
        payload = {
            "message": f"Growth Agent: {title}",
            "content": encoded,
            "branch": new_branch
        }
        if r_check.status_code == 200:
            payload["sha"] = r_check.json()["sha"]
        r = requests.put(f"https://api.github.com/repos/{repo}/contents/{file_path}", headers=headers, json=payload)
        if r.status_code not in [200, 201]:
            return f"ERROR: Cannot commit {file_path}: {r.text}"
    r = requests.post(f"https://api.github.com/repos/{repo}/pulls", headers=headers, json={
        "title": title,
        "body": body,
        "head": new_branch,
        "base": base_branch
    })
    if r.status_code not in [200, 201]:
        return f"ERROR: Cannot create PR: {r.text}"
    return f"SUCCESS: {r.json()['html_url']}"

def generate_city_content(city_slug: str) -> dict:
    system = """You are an expert SEO content writer for a world clock and timezone website.
Generate comprehensive, unique, locally-relevant content for city pages.
CRITICAL: Return ONLY a valid JSON object. No markdown, no backticks, no explanations. Just the raw JSON."""
    
    prompt = f"""Generate SEO content for: {city_slug}

Return ONLY this JSON structure (no other text):
{{
  "faq": [
    {{"question": "...", "answer": "..."}},
    {{"question": "...", "answer": "..."}},
    {{"question": "...", "answer": "..."}},
    {{"question": "...", "answer": "..."}},
    {{"question": "...", "answer": "..."}},
    {{"question": "...", "answer": "..."}},
    {{"question": "...", "answer": "..."}},
    {{"question": "...", "answer": "..."}}
  ],
  "seo_description": "150 word description about timezone and time in {city_slug}",
  "content_blocks": [
    {{"title": "...", "content": "150 words about timezone"}},
    {{"title": "...", "content": "150 words about business hours"}},
    {{"title": "...", "content": "150 words about travel tips"}}
  ],
  "internal_links": ["city1", "city2", "city3", "city4", "city5"]
}}"""
    
    response = ask_claude(prompt, system)
    
    # Try 1: direct parse
    try:
        return json.loads(response.strip())
    except:
        pass
    
    # Try 2: extract from markdown
    try:
        json_match = re.search(r'```(?:json)?\s*(.*?)\s*```', response, re.DOTALL)
        if json_match:
            return json.loads(json_match.group(1))
    except:
        pass
    
    # Try 3: find JSON object
    try:
        start = response.find('{')
        end = response.rfind('}') + 1
        if start >= 0 and end > start:
            return json.loads(response[start:end])
    except:
        pass
    
    # Fallback
    logger.error(f"Failed to parse response: {response[:200]}")
    return {
        "faq": [{"question": f"What time is it in {city_slug}?", "answer": f"Check current local time in {city_slug} on our world clock."}],
        "seo_description": f"Current local time in {city_slug}. Timezone, UTC offset, business hours and best times to call {city_slug}.",
        "content_blocks": [{"title": f"Time in {city_slug}", "content": f"Accurate current time for {city_slug} with full timezone details."}],
        "internal_links": ["london", "new-york", "tokyo", "dubai", "paris"]
    }

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    msg = """🚀 *Growth Agent*

/status - Sistem durumu
/site [isim] - Site seç
/run [city] - Tek şehir işle
/batch [n] - N şehir işle
/auto on/off - Otomatik mod
/queue - Kuyruk
/report - SEO raporu
/help - Yardım"""
    await update.message.reply_text(msg, parse_mode='Markdown')

async def status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    config = get_config()
    msg = f"""📊 *Durum*

🌐 Site: `{state["active_site"]}`
🔄 Otomatik: {"✅" if state["auto_mode"] else "❌"}
📋 Kuyruk: {len(state["queue"])} şehir
✅ İşlenen: {state["processed"]}
⚙️ Repo: `{config.get("GITHUB_REPO", "?")}`
🌿 Branch: `{config.get("GITHUB_BRANCH", "?")}`"""
    await update.message.reply_text(msg, parse_mode='Markdown')

async def site_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /site whattime")
        return
    site_name = context.args[0]
    if not Path(f"config-{site_name}.env").exists():
        await update.message.reply_text(f"❌ config-{site_name}.env bulunamadı")
        return
    state["active_site"] = site_name
    await update.message.reply_text(f"✅ Aktif site: *{site_name}*", parse_mode='Markdown')

async def run_city(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /run london")
        return
    city_slug = context.args[0].lower()
    await update.message.reply_text(f"⏳ *{city_slug}* işleniyor...", parse_mode='Markdown')
    try:
        content = generate_city_content(city_slug)
        file_content = f"""// Growth Agent - Auto-generated
// City: {city_slug}
// Date: {datetime.now().isoformat()}

export const {city_slug.replace('-', '_')}SEOData = {json.dumps(content, indent=2, ensure_ascii=False)};
"""
        result = github_create_pr(
            f"SEO: {city_slug} content upgrade",
            city_slug,
            f"Auto-generated SEO content for {city_slug}\n\n- 8 FAQs\n- 3 content blocks\n- Meta description",
            {f"data/seo/{city_slug}-seo.ts": file_content}
        )
        if result.startswith("SUCCESS"):
            state["processed"] += 1
            await update.message.reply_text(
                f"✅ *{city_slug}* tamamlandı!\n\n📎 {result.replace('SUCCESS: ', '')}",
                parse_mode='Markdown'
            )
        else:
            await update.message.reply_text(f"❌ {result}")
    except Exception as e:
        logger.error(f"Error: {e}")
        await update.message.reply_text(f"❌ Hata: {str(e)}")

async def batch_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    n = int(context.args[0]) if context.args else 5
    default_cities = [
        "amsterdam", "barcelona", "brussels", "vienna", "warsaw",
        "prague", "budapest", "bucharest", "athens", "helsinki",
        "oslo", "stockholm", "copenhagen", "lisbon", "rome",
        "milan", "madrid", "zurich", "geneva", "dubai"
    ]
    cities = default_cities[:n]
    state["queue"] = cities.copy()
    await update.message.reply_text(
        f"🚀 *{n} şehir başlıyor*\n\n" + "\n".join([f"• {c}" for c in cities]),
        parse_mode='Markdown'
    )
    for city in cities:
        await update.message.reply_text(f"⏳ {city}...")
        try:
            content = generate_city_content(city)
            file_content = f"// Growth Agent\n// City: {city}\nexport const {city.replace('-','_')}SEOData = {json.dumps(content, indent=2, ensure_ascii=False)};\n"
            result = github_create_pr(f"SEO: {city}", city, f"SEO content for {city}", {f"data/seo/{city}-seo.ts": file_content})
            if result.startswith("SUCCESS"):
                state["processed"] += 1
                await update.message.reply_text(f"✅ {city}: {result.replace('SUCCESS: ', '')}")
            else:
                await update.message.reply_text(f"❌ {city}: {result}")
        except Exception as e:
            await update.message.reply_text(f"❌ {city}: {str(e)}")
        state["queue"] = state["queue"][1:] if state["queue"] else []
        await asyncio.sleep(3)
    await update.message.reply_text(f"🎉 Batch tamamlandı! {n} şehir işlendi.")

async def auto_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not context.args:
        await update.message.reply_text("Kullanım: /auto on veya /auto off")
        return
    mode = context.args[0].lower()
    state["auto_mode"] = mode == "on"
    status_text = "✅ açıldı" if state["auto_mode"] else "❌ kapatıldı"
    await update.message.reply_text(f"Otomatik mod {status_text}")

async def queue_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    if not state["queue"]:
        await update.message.reply_text("📋 Kuyruk boş")
        return
    await update.message.reply_text(
        "📋 *Kuyruk:*\n\n" + "\n".join([f"{i+1}. {c}" for i, c in enumerate(state["queue"])]),
        parse_mode='Markdown'
    )

async def report_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("⏳ Rapor hazırlanıyor...")
    try:
        report = ask_claude("""Generate a brief SEO strategy report for whattime.city (world clock/timezone website).
Include: top 5 keyword opportunities, 3 content suggestions, 5 priority cities, quick wins this week.
Be concise and actionable.""")
        await update.message.reply_text(f"📊 *SEO Raporu*\n\n{report[:3000]}", parse_mode='Markdown')
    except Exception as e:
        await update.message.reply_text(f"❌ {str(e)}")

async def help_cmd(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("""📖 *Komutlar*

/site [isim] - Site seç
/status - Durum
/run [city] - Tek şehir
/batch [n] - Toplu işlem
/auto on/off - Otomasyon
/queue - Kuyruk
/report - SEO raporu""", parse_mode='Markdown')

def main():
    config = get_config()
    token = config.get("TELEGRAM_TOKEN", "")
    if not token:
        logger.error("TELEGRAM_TOKEN bulunamadı!")
        return
    logger.info(f"Growth Agent başlatıldı - site: {state['active_site']}")
    app = Application.builder().token(token).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("status", status))
    app.add_handler(CommandHandler("site", site_cmd))
    app.add_handler(CommandHandler("run", run_city))
    app.add_handler(CommandHandler("batch", batch_cmd))
    app.add_handler(CommandHandler("auto", auto_cmd))
    app.add_handler(CommandHandler("queue", queue_cmd))
    app.add_handler(CommandHandler("report", report_cmd))
    app.add_handler(CommandHandler("help", help_cmd))
    logger.info("Bot aktif!")
    app.run_polling(allowed_updates=Update.ALL_TYPES)

if __name__ == "__main__":
    main()
