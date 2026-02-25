import os
import re
import json
import unicodedata

def normalize_title(title):
    title = unicodedata.normalize('NFC', title)
    title = re.sub(r'[\s\-]+', ' ', title).strip().lower()
    return title

def extract_lesson_data(js_content):
    # Tìm object gán cho LESSON_DATA
    match = re.search(r'window\.LESSON_DATA\s*=\s*(\{.*?\});', js_content, re.DOTALL)
    if not match:
        # Thử tìm object gán cho biến hoặc export
        match = re.search(r'const\s+lesson\w+\s*=\s*(\{.*?\});', js_content, re.DOTALL)
    if not match:
        # Thử tìm object bắt đầu bằng { và kết thúc bằng };
        match = re.search(r'^\s*(\{.*?\});?\s*$', js_content, re.DOTALL | re.MULTILINE)
    
    if match:
        return match.group(1)
    
    # Fallback: tìm từ dấu { đầu tiên đến dấu } cuối cùng
    start = js_content.find('{')
    end = js_content.rfind('}')
    if start != -1 and end != -1:
        return js_content[start:end+1]
    return None

def migrate():
    source_dir = "tiengviet5/data/lessons"
    target_dir = "js/data/vietnamese"
    index_file = "js/data/vietnamese/index.js"
    
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)

    # Read index to get periods
    with open(index_file, 'r', encoding='utf-8') as f:
        index_content = f.read()
    
    # Extract periods and titles
    entries = re.findall(r'\{\s*"week":\s*"\d+",\s*"period":\s*"(\d+)",\s*"title":\s*"(.*?)"\s*\}', index_content)
    period_to_title = {p: normalize_title(t) for p, t in entries}
    
    print(f"Loaded {len(period_to_title)} entries from index.js")

    migrated_count = 0
    for file in os.listdir(source_dir):
        if file.endswith(".js"):
            period = file.replace(".js", "")
            if period in period_to_title:
                with open(os.path.join(source_dir, file), 'r', encoding='utf-8') as f:
                    content = f.read()
                
                obj_str = extract_lesson_data(content)
                if obj_str:
                    obj_str = obj_str.strip()
                    # Inject period and id at the start of the object
                    # We assume obj_str starts with {
                    if obj_str.startswith('{'):
                        injection = f'"id": "{period}", "period": "{period}", '
                        obj_str = '{' + injection + obj_str[1:]
                    
                    new_content = f"export const lesson{period} = {obj_str};"
                    
                    with open(os.path.join(target_dir, f"{period}.js"), 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    migrated_count += 1

    print(f"Successfully migrated {migrated_count} lessons.")

if __name__ == "__main__":
    migrate()
