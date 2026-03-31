#!/usr/bin/env python3
"""
Automated migration of single-zone ClockClient files to use @/components/ClockPage shared library.
Handles both isDST and non-isDST single-zone files.
Skips multi-zone files (containing setTimes).
"""

import re
import os
import glob
import sys

DRY_RUN = '--dry-run' in sys.argv
VERBOSE = '--verbose' in sys.argv

def extract_timezone(content):
    """Extract the IANA timezone from the useEffect block or TZ constant."""
    # Direct inline: timeZone: 'Asia/Kabul'
    m = re.search(r"timeZone:\s*'([^']+)'", content)
    if m:
        return m.group(1)
    # Via constant: const TZ = 'Africa/Djibouti'
    m = re.search(r"const TZ\s*=\s*'([^']+)'", content)
    if m:
        return m.group(1)
    # Via constant with double quotes
    m = re.search(r'const TZ\s*=\s*"([^"]+)"', content)
    if m:
        return m.group(1)
    return None

def extract_bg_color(content):
    """Extract background color from the hero section."""
    # Look for bg-color in the hero rounded-2xl div
    hero_section = re.search(
        r'<div className="rounded-2xl text-white[^"]*"\s*>', content
    )
    if hero_section:
        hero_str = hero_section.group(0)
        m = re.search(r'(bg-[a-z]+-\d+)', hero_str)
        if m:
            return m.group(1)
    return 'bg-blue-700'

def extract_hero_title(content):
    """Extract the hero title text."""
    m = re.search(
        r'<div className="text-sm font-bold uppercase[^"]*">\s*(.*?)\s*</div>',
        content, re.DOTALL
    )
    if m:
        title = m.group(1).strip()
        # Clean up whitespace
        title = re.sub(r'\s+', ' ', title)
        return title
    return None

def extract_badges(content):
    """Extract badge objects from the hero section."""
    # Find the flex badges container
    badges_section = re.search(
        r'<div className="flex justify-center[^"]*">(.*?)</div>\s*</div>\s*</section>',
        content, re.DOTALL
    )
    if not badges_section:
        return []

    badges_html = badges_section.group(1)
    spans = re.findall(r'<span className="([^"]*)">(.*?)</span>', badges_html, re.DOTALL)

    badges = []
    for cls, text in spans:
        text = text.strip()
        # Check if highlight (non-white badge bg)
        highlight = bool(re.search(r'bg-(?!white)[a-z]+-\d+', cls))
        badges.append({'text': text, 'highlight': highlight})

    return badges

def badge_to_tsx(badge):
    """Convert badge dict to TSX Badge object string."""
    text = badge['text']
    # Convert HTML entities for display in TSX
    # Keep as-is since TSX handles these natively
    if badge['highlight']:
        return f'{{ label: {repr(text)}, highlight: true }}'
    else:
        return f'{{ label: {repr(text)} }}'

def convert_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip if already converted
    if "from '@/components/ClockPage'" in content:
        return False, 'already_converted'

    # Skip multi-zone files
    if 'setTimes' in content or re.search(r'useState\(\s*\{', content):
        return False, 'multi_zone'

    tz = extract_timezone(content)
    if not tz:
        return False, 'no_timezone'

    has_dst = 'setIsDST' in content
    bg_color = extract_bg_color(content)
    title = extract_hero_title(content)
    badges = extract_badges(content)

    # Extract function name
    fn_match = re.search(r'export default function (\w+)', content)
    fn_name = fn_match.group(1) if fn_match else 'UnknownClient'

    # Build new header (imports + hooks)
    if has_dst:
        import_line = "import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'"
        hook_line = f"  const {{ time, date, mounted, isDST }} = useClockState('{tz}')"
    else:
        import_line = "import { useClockState, useClockTheme, ClockHero } from '@/components/ClockPage'"
        hook_line = f"  const {{ time, date, mounted }} = useClockState('{tz}')"

    theme_line = "  const { isLight, card, innerCard, heading, subText, mutedText } = useClockTheme()"

    # Build ClockHero JSX
    hero_label = title if title else f'Current Time'

    # Format badges as TSX
    badge_strs = []
    for b in badges:
        text = b['text']
        # Escape single quotes in text
        text_escaped = text.replace("'", "\\'")
        if b['highlight']:
            badge_strs.append(f"          {{ label: '{text_escaped}', highlight: true }},")
        else:
            badge_strs.append(f"          {{ label: '{text_escaped}' }},")

    badges_tsx = '\n'.join(badge_strs)

    hero_tsx = f"""      <ClockHero
        bgColor="{bg_color}"
        clocks={{[{{ label: '{hero_label}', time }}]}}
        date={{date}}
        mounted={{mounted}}
        badges={{[
{badges_tsx}
        ]}}
      />"""

    # Now build the new content by replacing the boilerplate
    # 1. Replace imports
    new_content = "'use client'\n\n"
    new_content += import_line + "\n\n"
    new_content += f"export default function {fn_name}() {{\n"
    new_content += hook_line + "\n"
    new_content += theme_line + "\n"

    # 2. Find the return statement and extract JSX
    return_match = re.search(r'(\s*return \(\s*\n\s*<div className="space-y-4">)', content)
    if not return_match:
        return False, 'no_return_statement'

    # Get the position after 'return (\n  <div className="space-y-4">'
    return_start = return_match.start()

    # Find the first <section> after the return
    first_section = content.find('<section>', return_match.end())

    # Find the end of the first hero section </section>
    # We need to find the first </section> after the hero div
    hero_section_end = content.find('</section>', first_section)
    if hero_section_end == -1:
        return False, 'no_hero_section_end'

    # Rest of the JSX (sections after hero)
    rest_jsx = content[hero_section_end + len('</section>'):].rstrip()

    # Remove the trailing ) and } from end
    # rest_jsx ends with: \n    </div>\n  )\n}
    rest_jsx = rest_jsx.rstrip()

    new_content += "\n  return (\n    <div className=\"space-y-4\">\n"
    new_content += hero_tsx + "\n"
    new_content += rest_jsx + "\n"

    if VERBOSE:
        print(f"  TZ: {tz}, BG: {bg_color}, DST: {has_dst}, Badges: {len(badges)}")

    if not DRY_RUN:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)

    return True, 'converted'

def main():
    pattern = '/home/user/whattime-city/app/**/*ClockClient.tsx'
    files = sorted(glob.glob(pattern, recursive=True))

    stats = {'converted': 0, 'already_converted': 0, 'multi_zone': 0, 'failed': 0}
    failed_files = []

    for filepath in files:
        rel = filepath.replace('/home/user/whattime-city/', '')
        success, reason = convert_file(filepath)
        stats[reason if reason in stats else 'failed'] += 1
        if not success and reason not in ('already_converted', 'multi_zone'):
            failed_files.append((rel, reason))
            if VERBOSE:
                print(f"FAIL [{reason}]: {rel}")
        elif success and VERBOSE:
            print(f"OK: {rel}")
        elif success:
            print(f"  Converted: {rel}")

    print(f"\n=== STATS ===")
    print(f"Converted:        {stats['converted']}")
    print(f"Already done:     {stats['already_converted']}")
    print(f"Multi-zone skip:  {stats['multi_zone']}")
    print(f"Failed:           {stats['failed']}")
    if failed_files:
        print("\nFailed files:")
        for f, r in failed_files:
            print(f"  {r}: {f}")

if __name__ == '__main__':
    main()
