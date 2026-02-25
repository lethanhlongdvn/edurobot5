import os
import re

def precision_fix():
    target_dir = "js/data/vietnamese"
    if not os.path.exists(target_dir):
        return

    fix_count = 0
    for file in os.listdir(target_dir):
        if file.endswith(".js") and file != "index.js":
            path = os.path.join(target_dir, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read().strip()
            
            # 1. Ensure it ends with exactly one };
            # First, remove ALL trailing } and ;
            content = re.sub(r'[}; \n\r\t]+$', '', content)
            
            # 2. Count braces in the remaining content
            open_count = content.count('{')
            # However, many { might be in strings or template literals.
            # This is hard to count perfectly without a parser.
            # But since we are looking for EXTRA } at the end...
            
            # Let's try to find the last opening { that corresponds to the export
            # export const lessonN = {
            # Everything after that { should have balanced braces.
            
            match = re.search(r'export const lesson\d+ = \{', content)
            if match:
                obj_content = content[match.end()-1:] # starts with {
                
                # Simple brace balancer for the object content
                balanced_obj = ""
                depth = 0
                for char in obj_content:
                    if char == '{':
                        depth += 1
                    elif char == '}':
                        depth -= 1
                    
                    balanced_obj += char
                    
                    if depth == 0:
                        # We closed the main object!
                        break
                
                new_content = content[:match.end()-1] + balanced_obj + ";"
                
                if new_content != (content + ";"): # comparing with original-ish
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    fix_count += 1

    print(f"Successfully precision fixed {fix_count} lessons.")

if __name__ == "__main__":
    precision_fix()
