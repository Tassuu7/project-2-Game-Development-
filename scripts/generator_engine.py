# -*- coding: utf-8 -*-
import os, sys, subprocess, math, random, json

def log(msg):
    print(f'[NOVAFORGE] {msg}')

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True) if os.path.dirname(path) else None
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    lines = len(content.splitlines())
    log(f'Wrote {path}:  {lines} lines')

def git_commit(message):
    subprocess.run(['git', 'add', '.'], check=True)
    subprocess.run(['git', 'commit', '-m', message], check=True)
    log(f'=========> GIT COMMIT SUCCESS: {message}')

