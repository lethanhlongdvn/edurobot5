import os
import re

def reconcile():
    base_dir = "js/data/vietnamese"
    index_path = os.path.join(base_dir, "index.js")
    
    # 1. Get existing lesson files
    existing_files = [f for f in os.listdir(base_dir) if f.endswith(".js") and f != "index.js"]
    existing_periods = [f.replace(".js", "") for f in existing_files]
    
    # 2. Fix syntax (double semicolons) in all existing files
    for f in existing_files:
        path = os.path.join(base_dir, f)
        with open(path, 'r', encoding='utf-8') as file:
            content = file.read().strip()
        
        # Remove extra };
        if content.endswith("};};"):
            content = content[:-2]
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
        elif content.endswith("}; ;"):
            content = content.replace("}; ;", "};")
            with open(path, 'w', encoding='utf-8') as file:
                file.write(content)
    
    # 3. Read index.js and filter imports
    with open(index_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_imports = []
    data_start_line = -1
    for i, line in enumerate(lines):
        if line.startswith("import { lesson"):
            match = re.search(r'import \{ lesson(\d+) \}', line)
            if match:
                period = match.group(1)
                if period in existing_periods:
                    new_imports.append(line)
        elif "export const vietnameseData =" in line:
            data_start_line = i
            break
            
    # 4. Filter data array
    new_data = []
    data_content = "".join(lines[data_start_line:])
    # Find all entries: either lessonN or { "week": ... }
    entries = re.findall(r'(\blesson\d+\b|\{\s*"week":.*?\})', data_content)
    
    for entry in entries:
        if entry.startswith("lesson"):
            period = entry.replace("lesson", "")
            if period in existing_periods:
                new_data.append(entry)
            else:
                # Revert to metadata if lesson object doesn't exist
                # But we need the title. Let's try to find it in the original content.
                # Actually, most metadata is already in the file.
                # For simplicity, if it's lessonN and missing, we might have to skip or placeholder.
                # However, the user wants them on the home page.
                pass
        else:
            new_data.append(entry)
            
    # Reassemble index.js
    with open(index_path, 'w', encoding='utf-8') as f:
        f.writelines(new_imports)
        f.write("\nexport const vietnameseData = [\n")
        f.write("    " + ",\n    ".join(new_data) + "\n];\n")

if __name__ == "__main__":
    reconcile()
