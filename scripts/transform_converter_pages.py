#!/usr/bin/env python3
"""Transform converter pages to use ConverterPageShell component."""

import os
import re

APP_DIR = '/home/user/whattime-city/app'
TZ_PREFIXES = ['gmt', 'utc', 'ist', 'bst', 'cst', 'est', 'pst', 'mst', 'aest', 'cet', 'jst']


def find_matching_close_div(content, div_start):
    """Find end position (before </div>) of the matching closing tag for the <div> at div_start."""
    tag_end = content.index('>', div_start)
    pos = tag_end + 1
    depth = 1
    while depth > 0 and pos < len(content):
        next_open = content.find('<div', pos)
        next_close = content.find('</div>', pos)
        if next_close == -1:
            return -1, -1
        if next_open == -1 or next_close < next_open:
            depth -= 1
            if depth == 0:
                return content[tag_end + 1:next_close].strip(), next_close + len('</div>')
            pos = next_close + 6
        else:
            depth += 1
            pos = next_open + 4
    return None, -1


def extract_h1(content):
    m = re.search(r'<h1 className="[^"]+">(.+?)</h1>', content, re.DOTALL)
    if m:
        return m.group(1).strip()
    return None


def extract_subtitle(content):
    # dangerouslySetInnerHTML variant
    m = re.search(
        r'''<p className="text-lg [^"]*"[^>]*dangerouslySetInnerHTML=\{\{ __html: '(.+?)' \}\} />''',
        content, re.DOTALL
    )
    if m:
        return m.group(1).strip()
    # Normal variant (potentially multi-line)
    m = re.search(r'<p className="text-lg [^"]+">(.+?)</p>', content, re.DOTALL)
    if m:
        return m.group(1).strip()
    return None


def extract_info_title(content):
    m = re.search(r'<h2 className="text-xl font-semibold[^"]+">(.+?)</h2>', content, re.DOTALL)
    if m:
        return m.group(1).strip()
    return None


def extract_body(content):
    """Find the space-y-3 body div and extract its content (handling nesting)."""
    # Try both with and without dark: variant
    for pattern in ['<div className="space-y-3 text-slate-600 dark:text-slate-300',
                     '<div className="space-y-3 text-slate-600 text-sm']:
        body_start = content.find(pattern)
        if body_start != -1:
            body_content, _ = find_matching_close_div(content, body_start)
            if body_content is not None:
                # Remove className from <strong> elements
                body_content = re.sub(r' className="text-slate-700[^"]*"', '', body_content)
                body_content = re.sub(r' className="text-slate-700"', '', body_content)
                return body_content
    return None


def extract_extra_section(content, first_h2_pos):
    """Check if there's an extra section (table) between info section and FAQ section."""
    # Find all h2 elements
    h2s = list(re.finditer(r'<h2 className="[^"]+">(.+?)</h2>', content, re.DOTALL))
    if len(h2s) < 3:
        return None

    # Second h2 (index 1) is the extra section title
    second_h2 = h2s[1]
    title = second_h2.group(1).strip()

    # Skip if it's "Frequently Asked Questions"
    if 'Frequently' in title:
        return None

    # Find the card div that contains the second h2
    # Look for the nearest <section> before the second h2
    section_start = content.rfind('<section', 0, second_h2.start())
    if section_start == -1:
        return None

    # Find the card div inside this section
    card_start = content.find('<div className="rounded-2xl', section_start)
    if card_start == -1 or card_start > second_h2.start() + 200:
        return None

    # Find the h2's closing and extract content after it until the section closes
    h2_end = second_h2.end()
    # Find what comes after the h2 within the card div
    card_content_start = h2_end
    # Find the closing </div> of the card
    card_body_start = content.find('\n', h2_end) + 1
    # Extract everything from after h2 to before card div closes
    card_div_body, _ = find_matching_close_div(content, card_start)
    if card_div_body is None:
        return None

    # Remove the h2 from card_div_body to get just the content
    h2_in_body = re.search(r'<h2 className="[^"]+">' + re.escape(title) + r'</h2>', card_div_body, re.DOTALL)
    if h2_in_body:
        section_content = card_div_body[h2_in_body.end():].strip()
    else:
        section_content = card_div_body.strip()

    return title, section_content


def transform_page(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Skip if already transformed
    if 'ConverterPageShell' in content:
        return f'SKIP: {filepath}'

    # Skip if doesn't use ContentPageWrapper
    if 'ContentPageWrapper' not in content:
        return f'SKIP (no wrapper): {filepath}'

    # Get function name
    fn_match = re.search(r'export default function (\w+)\(\)', content)
    if not fn_match:
        return f'ERROR (no func): {filepath}'
    fn_name = fn_match.group(1)

    h1_text = extract_h1(content)
    if not h1_text:
        return f'ERROR (no h1): {filepath}'

    subtitle_content = extract_subtitle(content)
    if not subtitle_content:
        return f'ERROR (no subtitle): {filepath}'

    info_title = extract_info_title(content)
    if not info_title:
        return f'ERROR (no h2): {filepath}'

    body_content = extract_body(content)
    if body_content is None:
        return f'ERROR (no body): {filepath}'

    # Check for extra section (table)
    extra_result = extract_extra_section(content, 0)

    # Build preamble
    return_start = content.find('export default function ' + fn_name)
    preamble = content[:return_start]

    preamble = preamble.replace(
        "import ContentPageWrapper from '@/components/ContentPageWrapper'",
        "import ConverterPageShell from '@/components/ConverterPageShell'"
    )
    preamble = re.sub(
        r"import TZPairClient, \{ TZPairConfig \} from '@/components/TZPairClient'",
        "import type { TZPairConfig } from '@/components/TZPairClient'",
        preamble
    )

    # Build extra sections prop
    extra_sections_prop = ''
    if extra_result:
        extra_title, extra_content = extra_result
        extra_sections_prop = (
            f'\n      extraSections={{[{{\n'
            f'        title: "{extra_title}",\n'
            f'        content: <>{extra_content}</>,\n'
            f'      }}]}}'
        )

    new_function = (
        f'export default function {fn_name}() {{\n'
        f'  return (\n'
        f'    <ConverterPageShell\n'
        f'      title="{h1_text}"\n'
        f'      subtitle={{<>{subtitle_content}</>}}\n'
        f'      config={{config}}\n'
        f'      infoTitle="{info_title}"\n'
        f'      infoBody={{<>\n'
        f'        {body_content}\n'
        f'      </>}}{extra_sections_prop}\n'
        f'      faqSchema={{faqSchema}}\n'
        f'    />\n'
        f'  )\n'
        f'}}\n'
    )

    new_content = preamble + new_function

    with open(filepath, 'w') as f:
        f.write(new_content)

    return f'OK: {filepath}'


def main():
    results = []
    for dirname in sorted(os.listdir(APP_DIR)):
        if '-to-' in dirname and any(dirname.startswith(p + '-to-') for p in TZ_PREFIXES):
            page_path = os.path.join(APP_DIR, dirname, 'page.tsx')
            if os.path.exists(page_path):
                result = transform_page(page_path)
                results.append(result)
                print(result)

    ok = sum(1 for r in results if r.startswith('OK'))
    skip = sum(1 for r in results if r.startswith('SKIP'))
    errors = [r for r in results if r.startswith('ERROR')]
    print(f'\nSonuç: {ok} dönüştürüldü, {skip} atlandı, {len(errors)} hata')
    for e in errors:
        print(f'  {e}')


if __name__ == '__main__':
    main()
