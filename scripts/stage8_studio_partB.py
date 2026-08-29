# -*- coding: utf-8 -*-
import json
from scripts.code_gen_lib import write_file, git_commit

def build_partB():
    # 1. assets/data/item_database.json
    items = {
        "weapons": [
            { "id": "w1", "name": "Plasma Blade", "damage": 25, "tier": 1, "type": "melee", "cost": 50 },
            { "id": "w2", "name": "Laser Carbine", "damage": 40, "tier": 2, "type": "ranged", "cost": 120 },
            { "id": "w3", "name": "Hyperion Cannon", "damage": 100, "tier": 3, "type": "heavy", "cost": 350 }
        ],
        "armors": [
            { "id": "a1", "name": "Carbon Fiber Suit", "defense": 15, "healthBonus": 50, "cost": 80 },
            { "id": "a2", "name": "Nano-Shield Exoskeleton", "defense": 45, "healthBonus": 150, "cost": 250 }
        ],
        "consumables": [
            { "id": "c1", "name": "Nano-Medkit", "heal": 50, "cost": 20 },
            { "id": "c2", "name": "Energy Overcharge", "mana": 100, "cost": 35 }
        ]
    }
    write_file("assets/data/item_database.json", json.dumps(items, indent=2) + "\n")

    # 2. assets/data/level_presets.json
    levels = {
        "presets": [
            {
                "id": "level_01",
                "name": "Orbital Station Alpha",
                "width": 40,
                "height": 25,
                "theme": "space_station",
                "spawns": [
                    { "type": "player", "x": 64, "y": 64 },
                    { "type": "drone", "x": 300, "y": 150 },
                    { "type": "turret", "x": 600, "y": 200 }
                ]
            },
            {
                "id": "level_02",
                "name": "Cyberpunk Neon Alleys",
                "width": 50,
                "height": 20,
                "theme": "cyber_city",
                "spawns": [
                    { "type": "player", "x": 100, "y": 200 },
                    { "type": "runner", "x": 400, "y": 200 }
                ]
            }
        ]
    }
    write_file("assets/data/level_presets.json", json.dumps(levels, indent=2) + "\n")

    # 3. assets/data/dialogue_trees.json
    dialogues = {
        "npc_commander": {
            "start": {
                "text": "Pilot, the orbital station is under siege. Are you ready for deployment?",
                "choices": [
                    { "label": "I'm ready. Launch my ship!", "next": "launch" },
                    { "label": "I need more supplies first.", "next": "supplies" }
                ]
            },
            "launch": {
                "text": "Godspeed! Watch out for enemy interceptors.",
                "action": "START_MISSION"
            },
            "supplies": {
                "text": "Check the armory and stock up on shield cells.",
                "action": "OPEN_SHOP"
            }
        }
    }
    write_file("assets/data/dialogue_trees.json", json.dumps(dialogues, indent=2) + "\n")

    # 4. assets/data/quest_definitions.json
    quests = [
        {
            "id": "q1",
            "title": "First Contact",
            "description": "Defeat 5 rogue scout drones in Sector 4.",
            "target": 5,
            "reward": { "exp": 100, "credits": 150 }
        },
        {
            "id": "q2",
            "title": "Core Meltdown",
            "description": "Destroy the Orbital Dreadnought boss.",
            "target": 1,
            "reward": { "exp": 500, "credits": 1000 }
        }
    ]
    write_file("assets/data/quest_definitions.json", json.dumps(quests, indent=2) + "\n")

    git_commit("feat(studio): develop in-browser level editor, particle designer, and sound FX creator")
