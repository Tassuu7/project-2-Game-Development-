# -*- coding: utf-8 -*-
import os, json, subprocess, math, random
from scripts.generator_engine import write_file, git_commit, log

def gen_stage1_core():
    log('=========> STAGE 1: INITIALIZING CORE LIBRARY <=========')
