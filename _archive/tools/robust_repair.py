import os
import re

def robust_repair():
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
            
            period = file.replace(".js", "")
            
            # The files now look like: 
            # export const lesson172 = { "id": "172", "period": "172", JUNK_JS_CODE "title": "...", ... }
            # We want to find the "JUNK_JS_CODE" and remove it.
            # JUNK_JS_CODE usually ends just before "title" or "week".
            
            # We look for the first occurrence of "title":
            match = re.search(r'"title":', content)
            if not match:
                match = re.search(r'"week":', content)
            
            if match:
                start_index = match.start()
                # The content from start_index onwards is the original object's properties.
                # We need to prepend the correct export and start of the object.
                
                original_tail = content[start_index:]
                new_content = f'export const lesson{period} = {{ "id": "{period}", "period": "{period}", {original_tail}'
                
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                repair_count += 1

    print(f"Successfully robustly repaired {repair_count} lessons.")

if __name__ == "__main__":
    robust_repair()
