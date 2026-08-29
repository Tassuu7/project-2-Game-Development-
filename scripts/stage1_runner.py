# -*- coding: utf-8 -*-
from scripts.build_full_project import write_file, git_commit, log

def run():
    log('Building Stage 1 - Core Engine')
    gitignore = '\n'.join(['# Dependencies', 'node_modules/', 'package-lock.json', '', '# Secrets', '.env', '.env.', '*.pem', '*.key', '', '# Dist', 'dist/', 'build/', '*.zip', '*.tar.gz', '', '# IFE', '.DS_Store', 'Thumbs.db', '.vscode/', '.wwp', '', '# Logs', '*.log'])
    write_file('.gitignore', gitignore)
    log('.gitignore written.')

if __name__ == '__main__':
    run()
