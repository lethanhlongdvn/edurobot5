import os
import re

def fix_syntax_robust():
    target_dir = "js/data/vietnamese"
    if not os.path.exists(target_dir):
        return

    fix_count = 0
    for file in os.listdir(target_dir):
        if file.endswith(".js") and file != "index.js":
            path = os.path.join(target_dir, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Pattern: ] followed by } and then "quiz":
            # Using regex to handle whitespace/newlines
            new_content = re.sub(r'\]\s*\}\s*,\s*"quiz":', '], "quiz":', content)
            
            # Additional cleanup for extra nested braces at the end if any
            # (Matches the pattern of truncated files better)
            
            if new_content != content:
                with open(path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                fix_count += 1

    print(f"Successfully robustly fixed syntax in {fix_count} lessons.")

if __name__ == "__main__":
    fix_syntax_robust()
