import os
import re

def sanitize_js(content):
    # Find the start of the object: export const lesson... = {
    match = re.search(r'(export const lesson\d+ = )(\{)', content)
    if not match:
        return content
    
    header = match.group(1)
    body = content[match.start(2):]
    
    sanitized_body = ""
    stack = []
    in_string = None # '"' or "'" or "`"
    escaped = False
    
    for char in body:
        if escaped:
            sanitized_body += char
            escaped = False
            continue
            
        if char == '\\':
            sanitized_body += char
            escaped = True
            continue
            
        if in_string:
            sanitized_body += char
            if char == in_string:
                in_string = None
            continue
            
        if char in ('"', "'", "`"):
            sanitized_body += char
            in_string = char
            continue
            
        if char == '{':
            stack.append('{')
            sanitized_body += char
        elif char == '}':
            if stack:
                stack.pop()
                sanitized_body += char
                if not stack:
                    # We reached the end of the root object
                    break
            else:
                # Extra closing brace, skip it
                pass
        else:
            sanitized_body += char
            
    # Force close any open strings/braces if the file was truncated
    if in_string:
        sanitized_body += in_string
    while stack:
        stack.pop()
        sanitized_body += '}'
        
    return header + sanitized_body + ";"

def main():
    target_dir = "js/data/vietnamese"
    if not os.path.exists(target_dir):
        return

    count = 0
    for file in os.listdir(target_dir):
        if file.endswith(".js") and file != "index.js":
            path = os.path.join(target_dir, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = sanitize_js(content)
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                count += 1
                
    print(f"Sanitized {count} files.")

if __name__ == "__main__":
    main()
