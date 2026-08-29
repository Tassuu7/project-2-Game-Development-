# -*- coding: utf-8 -*-
import os, subprocess

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True) if os.path.dirname(path) else None
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    lines = len(content.splitlines())
    print(f"[NOVAFORGE] Wrote {path}: {lines} lines")

def git_commit(msg):
    subprocess.run(["git", "add", "."], check=True)
    subprocess.run(["git", "commit", "-m", msg], check=True)
    print(f"[NOVAFORGE-GIT] Committed: {msg}")
