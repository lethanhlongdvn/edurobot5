import os
import re

def structural_repair():
    base_dir = "js/data/vietnamese"
    repaired_count = 0
    
    for f in os.listdir(base_dir):
        if not f.endswith(".js") or f == "index.js":
            continue
            
        path = os.path.join(base_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read().strip()
            
        # 1. Strip trailing garbage
        content = re.sub(r'[;}\s]+$', '', content)
        
        # 2. Count ACTUAL brace depth ignoring strings
        depth = 0
        in_string = None
        escaped = False
        
        # We need to find the start point: the first {
        start_idx = content.find('{')
        if start_idx == -1: continue
        
        clean_content = content[start_idx:]
        
        for char in clean_content:
            if escaped:
                escaped = False
                continue
            if char == '\\':
                escaped = True
                continue
            if in_string:
                if char == in_string:
                    in_string = None
                continue
            if char in ('"', "'", "`"):
                in_string = char
                continue
            if char == '{':
                depth += 1
            elif char == '}':
                depth -= 1
        
        # 3. Add missing braces
        if depth > 0:
            content += '}' * depth
            
        # 4. Final termination
        content += ';'
        
        with open(path, 'w', encoding='utf-8') as file:
            file.write(content)
        repaired_count += 1
            
    print(f"Structurally repaired {repaired_count} files.")

if __name__ == "__main__":
    structural_repair()
