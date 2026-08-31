# -*- coding: utf-8 -*-
import os
import json

os.makedirs(".vscode", exist_ok=True)

# 1. .vscode/launch.json
launch_config = {
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch NovaForge in Chrome",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:8080/index.html",
            "webRoot": "${workspaceFolder}",
            "sourceMaps": True
        },
        {
            "name": "Launch NovaForge in Edge",
            "type": "msedge",
            "request": "launch",
            "url": "http://localhost:8080/index.html",
            "webRoot": "${workspaceFolder}",
            "sourceMaps": True
        },
        {
            "name": "Run Automated Tests (Node)",
            "type": "node",
            "request": "launch",
            "program": "${workspaceFolder}/scripts/run_all_tests.js",
            "cwd": "${workspaceFolder}",
            "console": "integratedTerminal"
        }
    ]
}

with open(".vscode/launch.json", "w", encoding="utf-8") as f:
    json.dump(launch_config, f, indent=4)

# 2. .vscode/tasks.json
tasks_config = {
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Start Arcade Server (Python)",
            "type": "shell",
            "command": "python -m http.server 8080",
            "isBackground": True,
            "problemMatcher": [],
            "group": {
                "kind": "build",
                "isDefault": True
            }
        },
        {
            "label": "Run Automated Unit Tests",
            "type": "shell",
            "command": "npm test",
            "group": {
                "kind": "test",
                "isDefault": True
            }
        },
        {
            "label": "Run Engine Benchmark",
            "type": "shell",
            "command": "node src/tests/test_benchmark.js",
            "problemMatcher": []
        }
    ]
}

with open(".vscode/tasks.json", "w", encoding="utf-8") as f:
    json.dump(tasks_config, f, indent=4)

# 3. .vscode/settings.json
settings_config = {
    "editor.tabSize": 4,
    "editor.insertSpaces": True,
    "editor.formatOnSave": True,
    "files.eol": "\n",
    "javascript.format.semicolons": "insert",
    "liveServer.settings.port": 8080,
    "liveServer.settings.root": "/"
}

with open(".vscode/settings.json", "w", encoding="utf-8") as f:
    json.dump(settings_config, f, indent=4)

# 4. .vscode/extensions.json
ext_config = {
    "recommendations": [
        "ms-vscode.live-server",
        "ms-vscode.js-debug",
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
    ]
}

with open(".vscode/extensions.json", "w", encoding="utf-8") as f:
    json.dump(ext_config, f, indent=4)

print("Successfully created .vscode configuration files!")
