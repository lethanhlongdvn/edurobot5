import os
import csv
import re

base_path = r'c:\Users\Admin\Desktop\edurobot5\edurobot5\js\data\science'
csv_path = r'c:\Users\Admin\Desktop\edurobot5\edurobot5\PPCTKhoahoc_py.csv'

# Ensure directory exists
os.makedirs(base_path, exist_ok=True)

lessons = []
imports = []

# Parse the CSV manually handling the ';' separator and ignore headers
with open(csv_path, 'r', encoding='utf-8') as f:
    text = f.read()

lines = text.split('\n')
for line in lines:
    parts = line.split(',')
    if len(parts) >= 4 and parts[0].isdigit():
        indexStr = parts[0]
        weekStr = parts[1]
        periodStr = parts[2]
        titleStr = parts[3].strip().replace('"', '')
        
        # Write individual lesson file
        period = periodStr.zfill(3) # '001', '010', '070'
        js_name = f'lesson{period}'
        
        lesson_content = f"""export const {js_name} = {{
    "topic": "Khám phá Khoa học",
    "week": "{weekStr}",
    "period": "{periodStr}",
    "title": "{titleStr.upper()}",
    "desc": "Bài học Khoa học tuần {weekStr}, tiết {periodStr}.",
    "content": `
        <div class="space-y-4 text-emerald-900">
            <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">🌿</span>
                </div>
                <div>
                    <h3 class="text-2xl font-black italic">{titleStr}</h3>
                    <p class="text-sm font-bold opacity-80">Kiến thức Khoa học lớp 5</p>
                </div>
            </div>
            <div class="p-6 bg-white rounded-[32px] border border-gray-100 shadow-xl">
                <p class="text-lg font-bold text-gray-700">Nội dung bài học đang được biên soạn chi tiết...</p>
            </div>
        </div>
    `,
    "practice": `
        <div class="p-6 bg-white rounded-[32px] border border-gray-100 shadow-xl">
            <p class="text-lg font-bold text-emerald-700 flex items-center gap-2">
                <span class="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black">?</span>
                Bài tập thực hành đang được xây dựng.
            </p>
        </div>
    `,
    "quizPool": []
}};
"""
        with open(os.path.join(base_path, f'{period}.js'), 'w', encoding='utf-8') as lf:
            lf.write(lesson_content)
        
        imports.append(f"import {{ {js_name} }} from './{period}.js';")
        lessons.append(js_name)

# Script finished without overwriting index.js or data_loader.js.
