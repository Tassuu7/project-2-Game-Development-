# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partA():
    # 1. .gitignore
    write_file(".gitignore", """# Dependencies
node_modules/
package-lock.json

# Environment and sensitive data
.env
.env.local
.env.*.local
*.pem
*.key

# Build and distribution archives
dist/
build/
*.zip
*.tar.gz

# IDE and OS files
.DS_Store
Thumbs.db
.vscode/
.idea/
*.swp
*.swo

# Logs
*.log
npm-debug.log*
yarn-debug.log*
""")

    # 2. package.json
    write_file("package.json", """{
  "name": "novaforge-game-engine-studio",
  "version": "2.4.0",
  "description": "TrainPlex-ready Game Development Suite, Physics Engine and Multi-Game Arcade Studio in pure vanilla HTML5/CSS3/JavaScript",
  "main": "src/core/Engine.js",
  "scripts": {
    "start": "node -e \\"const http = require('http'); const fs = require('fs'); const path = require('path'); const server = http.createServer((req, res) => { let filePath = '.' + (req.url === '/' ? '/index.html' : req.url); const ext = path.extname(filePath); const mime = {'.html':'text/html','.css':'text/css','.js':'application/javascript','.json':'application/json','.png':'image/png'}[ext] || 'text/plain'; fs.readFile(filePath, (err, data) => { if (err) { res.writeHead(404); res.end('Not Found'); } else { res.writeHead(200, {'Content-Type': mime}); res.end(data); } }); }); server.listen(8080, () => console.log('NovaForge Game Hub running at http://localhost:8080'));\\"",
    "test": "node src/tests/test_runner.js",
    "count-loc": "node -e \\"const fs = require('fs'); const path = require('path'); let total = 0; function scan(dir) { fs.readdirSync(dir).forEach(f => { const p = path.join(dir, f); if (f === '.git' || f === 'node_modules' || f.endsWith('.zip')) return; const stat = fs.statSync(p); if (stat.isDirectory()) scan(p); else if (/\\\\.(js|css|html|json|md)$/.test(f)) { const lines = fs.readFileSync(p, 'utf-8').split('\\\\n').length; total += lines; console.log(p.padEnd(50) + ': ' + lines + ' lines'); } }); } scan('.'); console.log('===================================='); console.log('TOTAL LINES OF CODE: ' + total);\\""
  },
  "keywords": [
    "game-engine",
    "html5-games",
    "physics-simulation",
    "raycasting",
    "chiptune-synthesizer",
    "trainplex-ready",
    "arcade-studio"
  ],
  "author": "NovaForge Engineering Team",
  "license": "MIT"
}
""")
