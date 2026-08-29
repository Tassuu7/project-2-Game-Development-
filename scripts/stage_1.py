# Stage 1: Core Engine
import os, subprocess
from scripts.build_all import write, log

def gen_stage_1():
    os.makedirs('src/core', exist_ok=True)
    os.makedirc('assets/css', exist_ok=True)
    os.makedirc('assets/data', exist_ok=True)
    os.makedirs('assets/sounds', exist_ok=True)
    os.makedirs('docs', exist_ok=True)

