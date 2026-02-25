import os
import re

def repair():
    target_dir = "js/data/vietnamese"
    if not os.path.exists(target_dir):
        print("Target directory not found.")
        return

    repair_count = 0
    for file in os.listdir(target_dir):
        if file.endswith(".js") and file != "index.js":
            path = os.path.join(target_dir, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # The files look like:
            # export const lesson127 = { "id": "127", "period": "127", "content": `...`, { "id": "127", ... }
            # We want to remove the first "content": `...`, and just keep the original object starting AFTER it.
            # Actually, the original object's first { was replaced by my injection.
            
            # Pattern: { "id": "...", "period": "...", "content": `...`, 
            # We need to find the FIRST closing backtick specifically.
            
            match = re.search(r'\{ "id": "\d+", "period": "\d+", "content": `(.*?)`, ', content, re.DOTALL)
            if match:
                # We found the injection.
                # However, the injected content might contain backticks itself (which is what broke it).
                # So re.DOTALL (.*?) might stop at the wrong place.
                
                # Let's try to find the start of the original object:
                # { "id": "N", "period": "N", "content": `...`, {
                # The original object starts at the SECOND {
                
                parts = content.split('{', 2)
                if len(parts) >= 3:
                    # parts[0] is 'export const lessonN = '
                    # parts[1] is ' "id": "N", "period": "N", "content": `...`, '
                    # parts[2] is the original object content (starting with the original properties)
                    
                    # We want: parts[0] + '{ "id": "' + period + '", ' + parts[2]
                    # This restores the id and period but removes my messy content.
                    
                    period = file.replace(".js", "")
                    new_content = parts[0] + '{ "id": "' + period + '", "period": "' + period + '", ' + parts[2]
                    
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    repair_count += 1

    print(f"Successfully repaired {repair_count} lessons.")

if __name__ == "__main__":
    repair()
