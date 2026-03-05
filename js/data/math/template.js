export const lessonTemplate = {
    "topic": "Chủ đề (Ví dụ: Hình học và Đo lường)",
    "week": "1",
    "period": "TEMPLATE",
    "title": "⚡ Template Bài học Mẫu (Dành cho Giáo viên)",
    "desc": "Hướng dẫn sử dụng các thành phần tương tác: Mục tiêu, Khám phá kiến thức, Luyện tập và Hệ thống Củng cố bài học.",
    "content": `
        <div class="space-y-4 md:space-y-6">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-blue-50 p-4 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-sm animate-fade-in">
                <h3 class="text-blue-900 font-black text-xl md:text-2xl mb-2 md:mb-3">🎯 Mục tiêu bài học</h3>
                <ul class="list-disc list-inside text-blue-800 space-y-1 md:space-y-2 font-bold text-base md:text-lg">
                    <li>Mục tiêu 1: Kiến thức cần nắm...</li>
                    <li>Mục tiêu 2: Kỹ năng cần luyện tập...</li>
                    <li>Mục tiêu 3: Thái độ, phẩm chất...</li>
                </ul>
            </div>

            <!-- 📖 Khám phá kiến thức mới -->
            <div class="glass-card p-4 md:p-8 rounded-[40px] bg-white border border-blue-100 shadow-xl relative overflow-hidden md:overflow-visible">
                <div class="absolute -right-10 -top-10 w-32 h-32 md:w-40 md:h-40 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <h4 class="text-xl md:text-2xl font-black text-blue-800 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <span class="p-1.5 md:p-2 bg-blue-600 text-white rounded-xl md:rounded-2xl">
                        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </span>
                    Tên phần kiến thức mới
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                    <div class="space-y-3 md:space-y-4">
                        <p class="text-gray-700 text-base md:text-lg leading-relaxed">
                            <span class="font-black text-blue-600">Định nghĩa/Khái niệm</span> là...
                        </p>
                        <div class="p-3 md:p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <p class="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Kí hiệu hoặc Công thức</p>
                            <p class="text-2xl md:text-3xl font-black text-gray-800">S = a × b</p>
                        </div>
                    </div>
                    <!-- Hình ảnh minh họa hoặc Khối 3D -->
                    <div class="flex justify-center py-2 md:py-4">
                        [[CUBE3D|Mô tả hình mẫu]]
                    </div>
                </div>
            </div>

            <!-- 🔄 Bảng quy đổi / Ghi nhớ -->
            <div class="p-4 md:p-8 rounded-[32px] bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-2xl">
                <h4 class="text-lg md:text-xl font-black mb-4 md:mb-6 flex items-center gap-2">
                    🔄 Ghi nhớ / Quy tắc
                </h4>
                <div class="space-y-3 md:space-y-4">
                    <div class="p-3 md:p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 text-left">
                        <p class="text-[10px] uppercase font-bold opacity-60 mb-1">Dòng 1</p>
                        <p class="text-lg md:text-xl font-black">Nội dung 1</p>
                    </div>
                    <div class="p-3 md:p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 text-left">
                        <p class="text-[10px] uppercase font-bold opacity-60 mb-1">Dòng 2</p>
                        <p class="text-lg md:text-xl font-black">Nội dung 2</p>
                    </div>
                    <div class="p-3 md:p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 text-left">
                        <p class="text-[10px] uppercase font-bold opacity-60 mb-1">Dòng 3</p>
                        <p class="text-lg md:text-xl font-black">Nội dung 3</p>
                    </div>
                </div>
                <div class="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/10 text-xs md:text-sm italic opacity-80 text-center">
                    Lời dặn dò hoặc lưu ý quan trọng.
                </div>
            </div>

            <!-- 🤖 Thầy E tương tác -->
            [[TUTOR|template-id|Em hãy nêu lại quy tắc tính...]]
        </div>
    `,
    "practice": `
        <div class="space-y-4 md:space-y-8">
            <!-- Bài tập 1: Đọc/Viết -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">1</span>
                    Bài 1: Đọc/Viết các số đo
                </p>
                <div class="space-y-3 md:space-y-4">
                    [[READING_EX|ref-1|Giá trị 1|Mô tả 1|đọc là:|Cách đọc 1]]
                    [[READING_EX|ref-2|Giá trị 2|Mô tả 2|đọc là:|Cách đọc 2]]
                </div>
            </div>

            <!-- Bài tập 2: Tính toán/Đổi đơn vị -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">2</span>
                    Bài 2: Tính toán hoặc Đổi đơn vị
                </p>
                <div class="bg-gray-50 p-4 md:p-8 rounded-[32px]">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        [[MATH_EX|calc-1|Phép tính 1|Nhãn|kết quả là:|đáp án 1]]
                        [[MATH_EX|calc-2|Phép tính 2|Nhãn|kết quả là:|đáp án 2]]
                    </div>
                </div>
            </div>

            <!-- Bài tập 3: Giải toán có lời văn -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">3</span>
                    Bài 3: Giải toán có lời văn
                </p>
                <div class="bg-blue-600 p-4 md:p-8 rounded-[32px] text-white">
                    <p class="text-base md:text-lg leading-relaxed font-medium mb-4 italic">"Đề bài toán có lời văn tại đây..."</p>
                    <div class="flex items-center gap-2 md:gap-4 py-3 md:py-4 px-4 md:px-6 bg-white/10 rounded-2xl border border-white/20">
                        <span class="text-xl md:text-2xl">📝</span>
                        <div>
                            <p class="text-[10px] md:text-xs uppercase font-black opacity-60">Dữ kiện 1</p>
                            <p class="text-lg md:text-2xl font-black">Giá trị 1</p>
                        </div>
                        <div class="ml-auto text-right">
                            <p class="text-[10px] md:text-xs uppercase font-black opacity-60">Dữ kiện 2</p>
                            <p class="text-lg md:text-2xl font-black">Giá trị 2</p>
                        </div>
                    </div>
                </div>
                [[MATH_EX|solve-id|Đề tóm tắt|Giải toán|Đáp số:|kết quả]]
            </div>

            <!-- Nút Gom nộp bài toàn bộ phần Luyện Tập -->
            <div class="mt-12 bg-emerald-50 p-6 md:p-8 rounded-[40px] border-2 border-emerald-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 class="text-emerald-800 font-black text-xl md:text-2xl mb-2">Hoàn thành Luyện Tập?</h3>
                    <p class="text-emerald-700 font-bold text-sm md:text-base">Hệ thống sẽ lưu lại toàn bộ bài làm để Thầy/Cô chấm điểm nhé.</p>
                </div>
                <button id="btn-submit-all-practice-template" onclick="submitAllPracticeTemplate()" class="btn-submit-global">Nộp bài</button>
            </div>
            
            <script>
window.submitAllPracticeTemplate = function () {
    // 1. Phân tích Bài 1 (trắc nghiệm / điền khuyết)
    const b1_1 = document.getElementById('ref-1')?.value || "";
    // ...
    
    // 2. Phân tích Bài 2 (tự luận / có AI chấm nếu cần)
    // const textVal = document.getElementById('ans-bXXX-text')?.value.trim();
    // ...

    // 3. Tổ hợp dữ liệu
    const fullContent = \`====== BÀI GHI MẪU (BÀI 1) ======\\n1) \${b1_1}\\n\`;

    // 4. Gọi Firebase lưu điểm tổng
    if (window.submitMathLesson) {
        window.submitMathLesson(fullContent, "KT Toàn phần", "btn-submit-all-practice-template");
    } else {
        alert("Chức năng nộp bài đang tải, em chờ chút nhé!");
    }
};
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Câu hỏi mức độ 1?", "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"], "answer": 0, "level": 1 },
        { "question": "Câu hỏi mức độ 2?", "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"], "answer": 1, "level": 2 },
        { "question": "Câu hỏi mức độ 3?", "options": ["Lựa chọn A", "Lựa chọn B", "Lựa chọn C", "Lựa chọn D"], "answer": 2, "level": 3 }
    ]
};
