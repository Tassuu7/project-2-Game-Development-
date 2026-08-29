# -*- coding: utf-8 -*-
import os

pkg_path = 'package.json'
if os.path.exists(pkg_path):
    with open(pkg_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('"license": "MIT"', '"license": "UNLICENSED"')
    with open(pkg_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Updated package.json license to UNLICENSED')

readme_path = 'README.md'
if os.path.exists(readme_path):
    with open(readme_path, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('License-MIT-green.svg', 'License-Proprietary-red.svg')
    content = content.replace('License: MIT', 'License: Proprietary (All Rights Reserved)')
    with open(readme_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print('Updated README.md license')

for root, dirs, files in os.walk('.'):
    if '.git' in root or '__pycache__' in root:
        continue
    for file in files:
        if file.endswith(('.js', '.py', '.md', '.html')):
            p = os.path.join(root, file)
            with open(p, 'r', encoding='utf-8', errors='ignore') as f:
                c = f.read()
            if '@license Proprietary - All Rights Reserved' in c or 'MIT' in c:
                c = c.replace('@license Proprietary - All Rights Reserved', '@license Proprietary - All Rights Reserved')
                with open(p, 'w', encoding='utf-8') as f:
                    f.write(c)

print('License update complete!')
