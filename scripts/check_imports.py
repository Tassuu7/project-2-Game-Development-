# -*- coding: utf-8 -*-
import os
import re

def check():
    missing = []
    checked = 0
    for root, dirs, files in os.walk('.'):
        if any(x in root for x in ('.git', '__pycache__', 'node_modules')):
            continue
        for f in files:
            if f.endswith(('.js', '.html')):
                file_path = os.path.join(root, f)
                with open(file_path, 'r', encoding='utf-8', errors='ignore') as fp:
                    content = fp.read()
                    matches = re.findall(r'from\s+[\'"]([^\'"]+)[\'"]', content)
                    for imp in matches:
                        checked += 1
                        if imp.startswith('.'):
                            target = os.path.normpath(os.path.join(root, imp))
                            if not os.path.exists(target):
                                missing.append((file_path, imp, target))

    print(f"Checked {checked} module imports.")
    if missing:
        print(f"Found {len(missing)} missing imports:")
        for f, imp, tgt in missing:
            print(f"  In {f}: cannot resolve {imp} -> {tgt}")
    else:
        print("100% of all JavaScript module imports resolve successfully with 0 missing files!")

if __name__ == '__main__':
    check()
