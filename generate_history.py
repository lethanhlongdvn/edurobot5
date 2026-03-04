# -*- coding: utf-8 -*-
"""Generate 70 lesson placeholder files for Lịch sử & Địa lý module."""
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), 'js', 'data', 'history')
os.makedirs(OUTPUT_DIR, exist_ok=True)

# PPCT data: (stt, week, period, title, topic, desc)
LESSONS = [
    (1, 1, 1, "Bài 1: Vị trí địa lý, lãnh thổ, đơn vị hành chính, Quốc kỳ, Quốc huy, Quốc ca (Tiết 1)", "Địa lý Việt Nam", "Tìm hiểu vị trí địa lý, lãnh thổ và các biểu tượng quốc gia Việt Nam."),
    (2, 1, 2, "Bài 1: Vị trí địa lý, lãnh thổ, đơn vị hành chính, Quốc kỳ, Quốc huy, Quốc ca (Tiết 2)", "Địa lý Việt Nam", "Tiếp tục tìm hiểu đơn vị hành chính, Quốc kỳ, Quốc huy, Quốc ca."),
    (3, 2, 3, "Bài 2: Thiên nhiên Việt Nam (Tiết 1)", "Địa lý Việt Nam", "Khám phá đặc điểm tự nhiên và địa hình Việt Nam."),
    (4, 2, 4, "Bài 2: Thiên nhiên Việt Nam (Tiết 2)", "Địa lý Việt Nam", "Tìm hiểu khí hậu và sông ngòi Việt Nam."),
    (5, 3, 5, "Bài 2: Thiên nhiên Việt Nam (Tiết 3)", "Địa lý Việt Nam", "Tìm hiểu tài nguyên thiên nhiên Việt Nam."),
    (6, 3, 6, "Bài 2: Thiên nhiên Việt Nam (Tiết 4)", "Địa lý Việt Nam", "Ôn tập và mở rộng về thiên nhiên Việt Nam."),
    (7, 4, 7, "Bài 3: Biển, đảo Việt Nam (Tiết 1)", "Địa lý Việt Nam", "Tìm hiểu vùng biển và hệ thống đảo của Việt Nam."),
    (8, 4, 8, "Bài 3: Biển, đảo Việt Nam (Tiết 2)", "Địa lý Việt Nam", "Vai trò kinh tế của biển, đảo và bảo vệ chủ quyền biển đảo."),
    (9, 5, 9, "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 1)", "Địa lý Việt Nam", "Tìm hiểu đặc điểm dân cư Việt Nam."),
    (10, 5, 10, "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 2)", "Địa lý Việt Nam", "Tìm hiểu các dân tộc và phân bố dân cư Việt Nam."),
    (11, 6, 11, "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 3)", "Địa lý Việt Nam", "Đa dạng văn hoá các dân tộc Việt Nam."),
    (12, 6, 12, "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 4)", "Địa lý Việt Nam", "Ôn tập và mở rộng về dân cư, dân tộc."),
    (13, 7, 13, "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 1)", "Lịch sử Việt Nam", "Tìm hiểu về sự ra đời của nhà nước Văn Lang."),
    (14, 7, 14, "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 2)", "Lịch sử Việt Nam", "Tìm hiểu đời sống cư dân Văn Lang - Âu Lạc."),
    (15, 8, 15, "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 3)", "Lịch sử Việt Nam", "Nhà nước Âu Lạc và thành Cổ Loa."),
    (16, 8, 16, "Bài 6: Vương quốc Phù Nam", "Lịch sử Việt Nam", "Tìm hiểu về Vương quốc Phù Nam cổ đại."),
    (17, 9, 17, "Bài 7: Vương quốc Chăm-pa (Tiết 1)", "Lịch sử Việt Nam", "Tìm hiểu sự hình thành và phát triển của Vương quốc Chăm-pa."),
    (18, 9, 18, "Bài 7: Vương quốc Chăm-pa (Tiết 2)", "Lịch sử Việt Nam", "Di sản văn hoá Chăm-pa và những thành tựu nổi bật."),
    (19, 10, 19, "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 1)", "Lịch sử Việt Nam", "Tìm hiểu hoàn cảnh và các cuộc khởi nghĩa thời Bắc thuộc."),
    (20, 10, 20, "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 2)", "Lịch sử Việt Nam", "Khởi nghĩa Hai Bà Trưng và các cuộc đấu tranh tiêu biểu."),
    (21, 11, 21, "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 3)", "Lịch sử Việt Nam", "Chiến thắng Bạch Đằng và nền độc lập dân tộc."),
    (22, 11, 22, "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 1)", "Lịch sử Việt Nam", "Tìm hiểu về Triều Lý và quyết định dời đô về Thăng Long."),
    (23, 12, 23, "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 2)", "Lịch sử Việt Nam", "Xây dựng và phát triển đất nước dưới triều Lý."),
    (24, 12, 24, "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 3)", "Lịch sử Việt Nam", "Những thành tựu văn hoá, giáo dục thời Lý."),
    (25, 13, 25, "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông - Nguyên xâm lược (Tiết 1)", "Lịch sử Việt Nam", "Triều Trần và công cuộc xây dựng đất nước."),
    (26, 13, 26, "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông - Nguyên xâm lược (Tiết 2)", "Lịch sử Việt Nam", "Cuộc kháng chiến lần thứ nhất chống quân Mông - Nguyên."),
    (27, 14, 27, "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông - Nguyên xâm lược (Tiết 3)", "Lịch sử Việt Nam", "Cuộc kháng chiến lần thứ hai và ba chống quân Nguyên."),
    (28, 14, 28, "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông - Nguyên xâm lược (Tiết 4)", "Lịch sử Việt Nam", "Ý nghĩa lịch sử của ba lần kháng chiến chống quân Mông - Nguyên."),
    (29, 15, 29, "Bài 11: Ôn tập (Tiết 1)", "Ôn tập", "Ôn tập kiến thức Lịch sử và Địa lý đã học."),
    (30, 15, 30, "Bài 11: Ôn tập (Tiết 2)", "Ôn tập", "Ôn tập và hệ thống hoá kiến thức."),
    (31, 16, 31, "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 1)", "Lịch sử Việt Nam", "Hoàn cảnh và diễn biến khởi nghĩa Lam Sơn."),
    (32, 16, 32, "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 2)", "Lịch sử Việt Nam", "Triều Hậu Lê và công cuộc xây dựng đất nước."),
    (33, 17, 33, "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 3)", "Lịch sử Việt Nam", "Những thành tựu nổi bật của Triều Hậu Lê."),
    (34, 17, 34, "Bài 13: Triều Nguyễn (Tiết 1)", "Lịch sử Việt Nam", "Sự thành lập và tổ chức bộ máy nhà nước triều Nguyễn."),
    (35, 18, 35, "Ôn tập cuối kỳ I", "Ôn tập", "Hệ thống hoá kiến thức LS&ĐL học kỳ I."),
    (36, 18, 36, "Kiểm tra và đánh giá cuối học kỳ I", "Kiểm tra", "Kiểm tra đánh giá cuối học kỳ I."),
    (37, 19, 37, "Bài 13: Triều Nguyễn (Tiết 2)", "Lịch sử Việt Nam", "Kinh đô Huế và di sản văn hoá triều Nguyễn."),
    (38, 19, 38, "Bài 13: Triều Nguyễn (Tiết 3)", "Lịch sử Việt Nam", "Tình hình kinh tế - xã hội thời Nguyễn."),
    (39, 20, 39, "Bài 14: Cách mạng tháng Tám năm 1945 (Tiết 1)", "Lịch sử Việt Nam", "Bối cảnh và diễn biến Cách mạng tháng Tám."),
    (40, 20, 40, "Bài 14: Cách mạng tháng Tám năm 1945 (Tiết 2)", "Lịch sử Việt Nam", "Ý nghĩa lịch sử của Cách mạng tháng Tám."),
    (41, 21, 41, "Bài 15: Chiến dịch Điện Biên Phủ năm 1954 (Tiết 1)", "Lịch sử Việt Nam", "Bối cảnh và diễn biến chiến dịch Điện Biên Phủ."),
    (42, 21, 42, "Bài 15: Chiến dịch Điện Biên Phủ năm 1954 (Tiết 2)", "Lịch sử Việt Nam", "Ý nghĩa lịch sử của chiến thắng Điện Biên Phủ."),
    (43, 22, 43, "Bài 16: Chiến dịch Hồ Chí Minh năm 1975 (Tiết 1)", "Lịch sử Việt Nam", "Bối cảnh và diễn biến chiến dịch Hồ Chí Minh."),
    (44, 22, 44, "Bài 16: Chiến dịch Hồ Chí Minh năm 1975 (Tiết 2)", "Lịch sử Việt Nam", "Ngày thống nhất đất nước và ý nghĩa lịch sử."),
    (45, 23, 45, "Bài 17: Đất nước đổi mới (Tiết 1)", "Lịch sử Việt Nam", "Đường lối đổi mới và những thành tựu ban đầu."),
    (46, 23, 46, "Bài 17: Đất nước đổi mới (Tiết 2)", "Lịch sử Việt Nam", "Thành tựu đổi mới và Việt Nam hội nhập quốc tế."),
    (47, 24, 47, "Bài 18: Nước Cộng hoà Nhân dân Trung Hoa (Tiết 1)", "Lịch sử & Địa lý thế giới", "Tìm hiểu vị trí địa lý và đặc điểm tự nhiên Trung Quốc."),
    (48, 24, 48, "Bài 18: Nước Cộng hoà Nhân dân Trung Hoa (Tiết 2)", "Lịch sử & Địa lý thế giới", "Dân cư, kinh tế và quan hệ Việt - Trung."),
    (49, 25, 49, "Bài 19: Cộng hoà Dân chủ Nhân dân Lào (Tiết 1)", "Lịch sử & Địa lý thế giới", "Tìm hiểu vị trí địa lý và đặc điểm Lào."),
    (50, 25, 50, "Bài 19: Cộng hoà Dân chủ Nhân dân Lào (Tiết 2)", "Lịch sử & Địa lý thế giới", "Quan hệ hữu nghị Việt Nam - Lào."),
    (51, 26, 51, "Bài 20: Vương quốc Cam-pu-chia (Tiết 1)", "Lịch sử & Địa lý thế giới", "Tìm hiểu vị trí địa lý và đặc điểm Cam-pu-chia."),
    (52, 26, 52, "Bài 20: Vương quốc Cam-pu-chia (Tiết 2)", "Lịch sử & Địa lý thế giới", "Quan hệ hữu nghị Việt Nam - Cam-pu-chia."),
    (53, 27, 53, "Bài 21: Hiệp hội các quốc gia Đông Nam Á (Tiết 1)", "Lịch sử & Địa lý thế giới", "Tìm hiểu về ASEAN và mục tiêu hoạt động."),
    (54, 27, 54, "Bài 21: Hiệp hội các quốc gia Đông Nam Á (Tiết 2)", "Lịch sử & Địa lý thế giới", "Vai trò và vị thế của Việt Nam trong ASEAN."),
    (55, 28, 55, "Bài 22: Các châu lục và đại dương trên thế giới (Tiết 1)", "Lịch sử & Địa lý thế giới", "Tìm hiểu các châu lục trên thế giới."),
    (56, 28, 56, "Bài 22: Các châu lục và đại dương trên thế giới (Tiết 2)", "Lịch sử & Địa lý thế giới", "Tìm hiểu các đại dương trên thế giới."),
    (57, 29, 57, "Bài 22: Các châu lục và đại dương trên thế giới (Tiết 3)", "Lịch sử & Địa lý thế giới", "Đặc điểm nổi bật của các châu lục."),
    (58, 29, 58, "Bài 22: Các châu lục và đại dương trên thế giới (Tiết 4)", "Lịch sử & Địa lý thế giới", "Vai trò của đại dương và mối liên hệ giữa các châu lục."),
    (59, 30, 59, "Bài 22: Các châu lục và đại dương trên thế giới (Tiết 5)", "Lịch sử & Địa lý thế giới", "Ôn tập và tổng hợp kiến thức các châu lục, đại dương."),
    (60, 30, 60, "Bài 23: Dân số và các chủng tộc trên thế giới (Tiết 1)", "Lịch sử & Địa lý thế giới", "Tìm hiểu dân số thế giới và sự phân bố."),
    (61, 31, 61, "Bài 23: Dân số và các chủng tộc trên thế giới (Tiết 2)", "Lịch sử & Địa lý thế giới", "Các chủng tộc trên thế giới và sự đa dạng văn hoá."),
    (62, 31, 62, "Bài 24: Văn minh Ai Cập", "Lịch sử & Địa lý thế giới", "Tìm hiểu về nền văn minh Ai Cập cổ đại."),
    (63, 32, 63, "Bài 25: Văn minh Hy Lạp", "Lịch sử & Địa lý thế giới", "Tìm hiểu về nền văn minh Hy Lạp cổ đại."),
    (64, 32, 64, "Bài 26: Xây dựng thế giới xanh - sạch - đẹp (Tiết 1)", "Lịch sử & Địa lý thế giới", "Vấn đề ô nhiễm môi trường và biến đổi khí hậu."),
    (65, 33, 65, "Bài 26: Xây dựng thế giới xanh - sạch - đẹp (Tiết 2)", "Lịch sử & Địa lý thế giới", "Giải pháp bảo vệ môi trường và phát triển bền vững."),
    (66, 33, 66, "Bài 27: Xây dựng thế giới hoà bình (Tiết 1)", "Lịch sử & Địa lý thế giới", "Ý nghĩa của hoà bình và hợp tác quốc tế."),
    (67, 34, 67, "Bài 27: Xây dựng thế giới hoà bình (Tiết 2)", "Lịch sử & Địa lý thế giới", "Vai trò của Việt Nam trong xây dựng hoà bình thế giới."),
    (68, 34, 68, "Bài 28: Ôn tập (Tiết 1)", "Ôn tập", "Ôn tập kiến thức Lịch sử & Địa lý học kỳ II."),
    (69, 35, 69, "Bài 28: Ôn tập (Tiết 2)", "Ôn tập", "Hệ thống hoá kiến thức cả năm."),
    (70, 35, 70, "Kiểm tra và đánh giá cuối học kỳ II", "Kiểm tra", "Kiểm tra đánh giá cuối năm học."),
]

# Topic to emoji/color mapping
TOPIC_STYLES = {
    "Địa lý Việt Nam": {"emoji": "🗺️", "gradient": "from-amber-600 via-yellow-500 to-orange-400", "badge_emoji": "🌏", "badge_text": "Địa lý Việt Nam", "icon_bg": "bg-amber-100 text-amber-600"},
    "Lịch sử Việt Nam": {"emoji": "⚔️", "gradient": "from-red-700 via-rose-600 to-amber-500", "badge_emoji": "🏛️", "badge_text": "Lịch sử Việt Nam", "icon_bg": "bg-red-100 text-red-600"},
    "Lịch sử & Địa lý thế giới": {"emoji": "🌍", "gradient": "from-indigo-600 via-purple-500 to-blue-400", "badge_emoji": "🌐", "badge_text": "Lịch sử & Địa lý thế giới", "icon_bg": "bg-indigo-100 text-indigo-600"},
    "Ôn tập": {"emoji": "📝", "gradient": "from-teal-600 via-emerald-500 to-green-400", "badge_emoji": "📚", "badge_text": "Ôn tập", "icon_bg": "bg-teal-100 text-teal-600"},
    "Kiểm tra": {"emoji": "📋", "gradient": "from-slate-700 via-gray-600 to-zinc-500", "badge_emoji": "✅", "badge_text": "Kiểm tra & Đánh giá", "icon_bg": "bg-gray-100 text-gray-600"},
}

# Extract short title (without Tiết info) for display
def get_short_title(title):
    # Remove "(Tiết X)" part for cleaner display
    import re
    return re.sub(r'\s*\(Tiết \d+\)', '', title)

def generate_lesson_file(stt, week, period, title, topic, desc):
    style = TOPIC_STYLES.get(topic, TOPIC_STYLES["Ôn tập"])
    short_title = get_short_title(title)
    num = str(period).zfill(3)
    
    content = f'''export const lesson{num} = {{
    "topic": "{topic}",
    "week": "{week}",
    "period": "{period}",
    "title": "{title}",
    "desc": "{desc}",
    "content": `
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
            <div class="p-6 bg-gray-50 dark:bg-slate-700/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-slate-600 text-center">
                <span class="text-5xl mb-4 block">{style['emoji']}</span>
                <p class="text-lg font-bold text-gray-500 dark:text-slate-400">Nội dung bài học đang được biên soạn chi tiết...</p>
                <p class="text-sm font-bold text-gray-400 dark:text-slate-500 mt-2">Tuần {week} • Tiết {period}</p>
            </div>
        </div>
    `,
    "practice": `
        <div class="p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-gray-100 dark:border-slate-700 shadow-xl">
            <p class="text-lg font-bold text-amber-700 dark:text-amber-400 flex items-center gap-2">
                <span class="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center font-black">?</span>
                Bài tập thực hành đang được xây dựng.
            </p>
        </div>
    `,
    "quizPool": []
}};
'''
    
    filepath = os.path.join(OUTPUT_DIR, f'{num}.js')
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f'  Created {num}.js')

# Generate all 70 lessons
print(f'Generating {len(LESSONS)} lesson files in {OUTPUT_DIR}...')
for lesson in LESSONS:
    generate_lesson_file(*lesson)

# Generate template.js
template_content = '''export const lessonTemplate = {
    "topic": "Lịch sử & Địa lý 5",
    "week": "1",
    "period": "TEMPLATE",
    "title": "📚 Bài học Mẫu (Dành cho Giáo viên)",
    "desc": "Hướng dẫn sử dụng các thành phần tương tác cho môn Lịch sử & Địa lý.",
    "content": `
        <div class="space-y-4 md:space-y-6">
            <div class="bg-amber-50 p-4 md:p-8 rounded-[32px] border-l-8 border-amber-600 shadow-sm animate-fade-in">
                <h3 class="text-amber-900 font-black text-xl md:text-2xl mb-2 md:mb-3">🎯 Mục tiêu bài học</h3>
                <ul class="list-disc list-inside text-amber-800 space-y-1 md:space-y-2 font-bold text-base md:text-lg">
                    <li>Mục tiêu 1...</li>
                </ul>
            </div>
            <div class="glass-card p-4 md:p-8 rounded-[40px] bg-white border border-amber-100 shadow-xl">
                <h4 class="text-xl md:text-2xl font-black text-amber-800 mb-4 flex items-center gap-2">Kiến thức mới</h4>
                <p class="text-gray-700 text-base md:text-lg">Nội dung mẫu cho môn Lịch sử & Địa lý lớp 5...</p>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-4 md:space-y-6">
            <div class="bg-gray-50 p-8 md:p-12 rounded-[32px] md:rounded-[48px] border-4 border-dashed border-gray-200 text-center">
                <p class="text-gray-400 font-black text-xl">Luyện tập chưa có sẵn</p>
            </div>
        </div>
    `,
    "quizPool": []
};
'''

with open(os.path.join(OUTPUT_DIR, 'template.js'), 'w', encoding='utf-8') as f:
    f.write(template_content)
print('  Created template.js')

# Generate index.js
imports = []
exports = []
for lesson in LESSONS:
    num = str(lesson[2]).zfill(3)
    imports.append(f"import {{ lesson{num} }} from './{num}.js';")
    exports.append(f"    lesson{num},")

index_content = '\n'.join(imports)
index_content += "\n\nimport { lessonTemplate } from './template.js';\n\n"
index_content += "export const historyData = [\n"
index_content += '\n'.join(exports)
index_content += "\n    lessonTemplate\n"
index_content += """].sort((a, b) => {
    const pA = parseInt(a.period);
    const pB = parseInt(b.period);
    if (!isNaN(pA) && !isNaN(pB)) {
        return pA - pB;
    }
    if (isNaN(pA) && isNaN(pB)) return 0;
    if (isNaN(pA)) return 1;
    return -1;
});
"""

with open(os.path.join(OUTPUT_DIR, 'index.js'), 'w', encoding='utf-8') as f:
    f.write(index_content)
print('  Created index.js')

print(f'\nDone! Generated {len(LESSONS) + 2} files in {OUTPUT_DIR}')
