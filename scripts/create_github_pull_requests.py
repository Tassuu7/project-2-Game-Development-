# -*- coding: utf-8 -*-
import json
import urllib.request
import urllib.error
import subprocess

def get_github_token():
    p = subprocess.Popen(["git", "credential", "fill"], stdin=subprocess.PIPE, stdout=subprocess.PIPE, text=True)
    out, _ = p.communicate("protocol=https\nhost=github.com\n")
    for line in out.splitlines():
        if line.startswith("password="):
            return line.split("=", 1)[1].strip()
    return None

def create_prs():
    token = get_github_token()
    if not token:
        print("Error: Could not retrieve GitHub token from git credential helper.")
        return

    repo = "Tassuu7/project-2-Game-Development-"
    url = f"https://api.github.com/repos/{repo}/pulls"

    prs_to_create = [
        {
            "title": "feat(ecs): High-Performance Entity Component System & Archetype Queries",
            "head": "feature/ecs-architecture",
            "base": "main",
            "body": "### NovaForge ECS Architecture\n\n- Implements Archetype Bitmasking entity coordinator\n- 40 granular game component types\n- Iterative System update pipeline"
        },
        {
            "title": "feat(physics): GJK Collision Narrowphase & Softbody Simulation",
            "head": "feature/advanced-math-physics",
            "base": "main",
            "body": "### Advanced Physics Suite\n\n- Gilbert-Johnson-Keerthi (GJK) convex polygon collision solver\n- Bowyer-Watson Delaunay triangulation\n- Deformable pressure soft-body simulation"
        },
        {
            "title": "feat(graphics,audio): Software 3D Rasterizer & Audio DSP Rack",
            "head": "feature/rasterizer-dsp-audio",
            "base": "main",
            "body": "### Graphics & Audio DSP Systems\n\n- Software 3D perspective scanline rasterizer with depth buffering\n- 2D Convolution matrix image filters\n- Multi-effects Web Audio DSP processor rack"
        },
        {
            "title": "feat(ai): Tactical Spatial Influence Maps & GOAP Action Planner",
            "head": "feature/tactical-ai-systems",
            "base": "main",
            "body": "### Tactical AI Systems\n\n- Spatial influence grid threat heatmaps\n- Goal-Oriented Action Planning (GOAP) A* state solver\n- Fuzzy logic controller with centroid defuzzification"
        },
        {
            "title": "feat(studio): Visual Node Graph Editor & Level Scripting VM",
            "head": "feature/studio-node-graphs-games",
            "base": "main",
            "body": "### Studio Tooling & Node Graphs\n\n- Interactive dataflow node canvas editor\n- 16-tile Wang auto-tiling engine\n- Level scripting bytecode virtual machine"
        },
        {
            "title": "feat(input): Dual-Motor Gamepad Haptics & Vibration Engine",
            "head": "feature/gamepad-haptics-benchmark",
            "base": "main",
            "body": "### Gamepad Haptics Subsystem\n\n- Dual-motor rumble vibration actuators\n- Explosion, laser and damage feedback presets"
        },
        {
            "title": "feat(audio): 10-Band Parametric Spatial Equalizer & Acoustic Filters",
            "head": "feature/audio-dsp-equalizer",
            "base": "main",
            "body": "### Audio Equalizer Subsystem\n\n- 10-band peaking biquad filter bank\n- Bass boost, treble boost and arcade presets"
        },
        {
            "title": "feat(net): Peer-to-Peer WebRTC Multiplayer State Synchronization",
            "head": "feature/multiplayer-web-rtc",
            "base": "main",
            "body": "### WebRTC Multiplayer Sync\n\n- DataChannel P2P messaging protocol\n- Delta compression and ping/latency measurement"
        },
        {
            "title": "feat(ui): Responsive Mobile Virtual D-Pad & Touch Controls",
            "head": "feature/mobile-touch-controls",
            "base": "main",
            "body": "### Mobile Touch Controls\n\n- Virtual analog thumbstick with responsive touch events\n- Touch action buttons for mobile gameplay"
        }
    ]

    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
        "User-Agent": "NovaForge-Deployer",
        "X-GitHub-Api-Version": "2022-11-28"
    }

    print(f"Connecting to GitHub API for repository: {repo}...")

    created_count = 0
    for pr_data in prs_to_create:
        req = urllib.request.Request(url, data=json.dumps(pr_data).encode("utf-8"), headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req) as resp:
                result = json.loads(resp.read().decode("utf-8"))
                pr_num = result.get("number")
                pr_url = result.get("html_url")
                print(f"[SUCCESS] Created Pull Request #{pr_num}: {pr_data['title']} -> {pr_url}")
                created_count += 1
        except urllib.error.HTTPError as e:
            err_msg = e.read().decode("utf-8")
            print(f"[NOTICE] Branch {pr_data['head']}: HTTP {e.code} - {err_msg}")
        except Exception as e:
            print(f"[ERROR] Branch {pr_data['head']}: {e}")

    print(f"\nCompleted! Successfully created/verified {created_count} Pull Requests on GitHub.")

if __name__ == "__main__":
    create_prs()
