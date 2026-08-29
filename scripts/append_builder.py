# -*- coding: utf-8 -*-
import base64

def append_chunk(filename, b64_str):
    with open(filename, 'ab') as file:
        file.write(base64.b64decode(b64_str))

def write_chunk(filename, b64_str):
    with open(filename, 'wb') as file:
        file.write(base64.b64decode(b64_str))
