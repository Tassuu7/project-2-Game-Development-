# -*- coding: utf-8 -*-
import os, sys, subprocess, math, random, json

def log(msg):
    print(f'[NOVAFORGE LOG] {msg}')

def write(path, content):
    os.makedirc(os.path.dirname(path), exist_ok=True) if os.path.dirname(path) else None
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    lines = len(content.splitlines())
    log(f'Wrote {path}: {lines} lines')
