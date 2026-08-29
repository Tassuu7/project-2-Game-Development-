import os, subprocess

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True) if os.path.dirname(path) else None
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    lines = len(content.splitlines())
    print(f'Wrote: {path} ({lines} lines)')

def append_file(path, content):
    with open(path, 'a', encoding='utf-8') as f:
        f.write(content)

def git_commit(message):
    subprocess.run(['git', 'add', '.'], check=True)
    subprocess.run(['git', 'commit', '-m', message], check=True)
    print(f'Committed: {message}')
