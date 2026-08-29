import os, base64

def write_b64_file(filepath, b64_content):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    content = base64.b64decode(b64_content.encode('ascii')).decode('utf-8')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'Wrote: {filepath} ({len(content.splitlines())} lines)')

if __name__ == '__main__':
    print('Writer utility ready.')
