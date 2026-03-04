// DEMO TẤT CẢ TƯƠNG TÁC
// File này chứa toàn bộ các dạng bài tập tương tác có thể sử dụng
export const lessonDemo = {
    topic: 'Mẫu Tương Tác',
    week: '0',
    period: '0',
    title: 'Bài 0: Demo tất cả các dạng tương tác',
    description: 'Tổng hợp toàn bộ các dạng bài tập tương tác: Trắc nghiệm, Điền khuyết, Sắp xếp, Phân loại, Thẻ lật, Kéo thả...',

    content() {
        return `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 p-8 md:p-12 mb-8 text-white shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
            <div class="relative z-10">
                <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-black uppercase tracking-widest backdrop-blur-sm">
                    <span>✨</span> Hướng dẫn thiết kế
                </div>
                <h1 class="text-3xl md:text-4xl font-black mb-3 leading-tight">Mẫu tương tác chuẩn</h1>
                <p class="text-lg md:text-xl font-bold opacity-90 max-w-2xl leading-relaxed">Sử dụng file này làm tài liệu tham khảo (copy-paste) khi soạn bài để có đầy đủ các dạng bài tập tương tác.</p>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
            <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100 mb-4">Các dạng tương tác hỗ trợ</h2>
            <ul class="space-y-3 text-lg font-bold text-slate-600 dark:text-slate-300">
                <li class="flex items-center gap-3"><span class="text-2xl">📝</span> 1. Điền vào chỗ trống (Fill-in-the-Blanks)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">✅</span> 2. Đúng / Sai (True/False)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">🔢</span> 3. Sắp xếp thứ tự (Ordering)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">🗂️</span> 4. Phân loại (Categorizing)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">🎴</span> 5. Thẻ kiến thức (Flashcards)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">🔗</span> 6. Nối cặp đôi (Matching)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">🔎</span> 7. Khám phá từng bước (Experiment/Discovery)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">📸</span> 8. Vận dụng thực tế (Real World)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">🤖</span> 9. Hỏi đáp với AI (AI Tutor)</li>
                <li class="flex items-center gap-3"><span class="text-2xl">🗺️</span> 10. Bản đồ tương tác (Interactive Map)</li>
            </ul>
        </div>

        <!-- ====== BẢN ĐỒ TƯƠNG TÁC (Map) ====== -->
        <h3 class="text-xl font-black text-gray-800 dark:text-slate-100 mt-8 mb-4">10. Bản đồ tương tác</h3>
        ${Lesson.renderInteractiveMap(
            'demo-map-1',
            'Bản đồ vị trí địa lý',
            'Nhấn vào các địa điểm bên dưới để xem sự chuyển động mượt mà trên bản đồ.',
            [
                { name: 'Hà Nội', lat: 21.028511, lng: 105.804817, info: 'Thủ đô của Việt Nam', emoji: '🏛️' },
                { name: 'Hồ Chí Minh', lat: 10.776530, lng: 106.700981, info: 'Thành phố lớn nhất', emoji: '🏙️' }
            ]
        )}
        `;
    },

    practice() {
        return `
        <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100 mb-6">🏋️ Kho Bài Tập Tương Tác</h2>

        <!-- ====== 1. ĐIỀN VÀO CHỖ TRỐNG (Fill-in-the-Blanks) ====== -->
        <h3 class="text-lg font-black text-blue-600 uppercase tracking-widest mt-8 mb-2">Dạng 1: Điền vào chỗ trống</h3>
        <p class="text-sm text-gray-500 mb-4">Học sinh kéo thả các từ khóa vào đoạn văn bản.</p>
        ${Lesson.renderFillBlanks(
            'demo-fb-1',
            'Đoạn văn mẫu: Kéo từ {0} vào ô đầu tiên. Kéo từ {1} vào ô thứ hai. Điền từ {2} vào ô thứ ba.',
            ['Từ khóa 1', 'Từ khóa 2', 'Từ khóa 3', 'Từ gây nhiễu 1', 'Từ gây nhiễu 2'], // Danh sách tất cả các từ (bao gồm từ nhiễu)
            ['Từ khóa 1', 'Từ khóa 2', 'Từ khóa 3'] // Danh sách các từ đúng theo thứ tự {0}, {1}, {2}...
        )}

        <!-- ====== 2. ĐÚNG / SAI (True/False) ====== -->
        <h3 class="text-lg font-black text-green-600 uppercase tracking-widest mt-12 mb-2">Dạng 2: Đúng hay Sai?</h3>
        <p class="text-sm text-gray-500 mb-4">Học sinh chọn True hoặc False, hiển thị giải thích lập tức.</p>
        ${Lesson.renderTrueFalse('demo-tf-1', [
            {
                text: 'Đây là một câu nhận định đúng.',
                answer: true,
                explanation: 'Đúng! Lời giải thích sẽ hiện ra ở đây.'
            },
            {
                text: 'Đây là một câu nhận định sai.',
                answer: false,
                explanation: 'Sai! Lý do sai sẽ được giải thích ở đây.'
            }
        ])}

        <!-- ====== 3. SẮP XẾP THỨ TỰ (Ordering) ====== -->
        <h3 class="text-lg font-black text-purple-600 uppercase tracking-widest mt-12 mb-2">Dạng 3: Sắp xếp thứ tự</h3>
        <p class="text-sm text-gray-500 mb-4">Học sinh kéo thả các mục lên xuống để sắp xếp theo đúng trình tự.</p>
        ${Lesson.renderOrdering(
            'demo-ord-1',
            'Sắp xếp các bước theo thứ tự từ 1 đến 4',
            [
                'Bước 1: Làm việc A',
                'Bước 2: Làm việc B',
                'Bước 3: Làm việc C',
                'Bước 4: Làm việc D'
            ],
            [0, 1, 2, 3] // Thứ tự đáp án đúng tương ứng với index của mảng trên
        )}

        <!-- ====== 4. PHÂN LOẠI (Categorizing) ====== -->
        <h3 class="text-lg font-black text-amber-600 uppercase tracking-widest mt-12 mb-2">Dạng 4: Phân loại</h3>
        <p class="text-sm text-gray-500 mb-4">Học sinh kéo thả các thẻ vào các nhóm tương ứng.</p>
        ${Lesson.renderCategorizing(
            'demo-cat-1',
            'Phân loại các khái niệm',
            [
                { name: 'Nhóm 1', color: 'blue' }, // Hỗ trợ màu: blue, red, green, amber, purple, emerald
                { name: 'Nhóm 2', color: 'emerald' }
            ],
            [
                { text: 'Mục A thuộc nhóm 1', categoryIdx: 0 },
                { text: 'Mục B thuộc nhóm 2', categoryIdx: 1 },
                { text: 'Mục C thuộc nhóm 1', categoryIdx: 0 },
                { text: 'Mục D thuộc nhóm 2', categoryIdx: 1 }
            ]
        )}

        <!-- ====== 5. THẺ LẬT (Flashcards) ====== -->
        <h3 class="text-lg font-black text-rose-600 uppercase tracking-widest mt-12 mb-2">Dạng 5: Thẻ kiến thức</h3>
        <p class="text-sm text-gray-500 mb-4">Học sinh nhấn vào thẻ để lật xem đáp án mặt sau.</p>
        ${Lesson.renderFlashcards('demo-fc-1', 'Nhấn vào để lật thẻ', [
            { front: 'Mặt trước: Khái niệm 1', back: 'Mặt sau: Giải thích 1', emoji: '💡' },
            { front: 'Mặt trước: Khái niệm 2', back: 'Mặt sau: Giải thích 2', emoji: '🚀' },
            { front: 'Mặt trước: Khái niệm 3', back: 'Mặt sau: Giải thích 3', emoji: '🎯' }
        ])}

        <!-- ====== 6. NỐI CẶP ĐÔI (Matching) ====== -->
        <h3 class="text-lg font-black text-orange-600 uppercase tracking-widest mt-12 mb-2">Dạng 6: Nối cặp đôi</h3>
        <p class="text-sm text-gray-500 mb-4">Học sinh click chọn cột trái rồi chọn cột phải tương ứng.</p>
        ${Lesson.renderMatchingExercise(
            'demo-match-1',
            'Nối cột trái với cột phải',
            ['Cột trái 1', 'Cột trái 2', 'Cột trái 3'],
            ['Cột phải A', 'Cột phải B', 'Cột phải C'],
            [{ leftIdx: 0, rightIdx: 1 }, { leftIdx: 1, rightIdx: 2 }, { leftIdx: 2, rightIdx: 0 }] // Định nghĩa các cặp đúng
        )}

        <!-- ====== 7. KHÁM PHÁ TỪNG BƯỚC (Experiment/Discovery) ====== -->
        <h3 class="text-lg font-black text-cyan-600 uppercase tracking-widest mt-12 mb-2">Dạng 7: Khám phá từng bước</h3>
        <p class="text-sm text-gray-500 mb-4">Học sinh nhấn "Làm thử" từng bước để hiện giải thích/hiện tượng.</p>
        ${Lesson.renderExperiment(
            'demo-exp-1',
            'Mô phỏng 1 quá trình',
            'Mô tả ngắn gọn về quá trình',
            [
                {
                    instruction: 'Bước 1: Làm gì đó',
                    result: 'Kết quả của bước 1 <b>(hỗ trợ thẻ b)</b>',
                    emoji: '🧪'
                },
                {
                    instruction: 'Bước 2: Chờ đợi',
                    result: 'Hiện tượng của bước 2',
                    emoji: '⏳'
                }
            ]
        )}

        <!-- ====== 8. VẬN DỤNG THỰC TẾ (Real World) ====== -->
        <h3 class="text-lg font-black text-teal-600 uppercase tracking-widest mt-12 mb-2">Dạng 8: Vận dụng thực tế</h3>
        <p class="text-sm text-gray-500 mb-4">Bài tập khuyến khích học sinh thực hành ngoài đời thực (chụp ảnh, ghi chép).</p>
        ${Lesson.renderRealWorldMeasurement(
            'demo-rw-1',
            'Thực hành cuối bài',
            'Yêu cầu học sinh làm một bài tập thực tế tại nhà và ghi chú lại.'
        )}

        <!-- ====== 9. HỎI ĐÁP VỚI AI ====== -->
        <h3 class="text-lg font-black text-indigo-600 uppercase tracking-widest mt-12 mb-2">Dạng 9: Hỏi đáp với AI</h3>
        <p class="text-sm text-gray-500 mb-4">Học sinh gõ câu trả lời tự do, AI sẽ chấm điểm và phản hồi.</p>
        ${AIInteraction.renderTutor(
            'demo-tutor-1',
            'Học sinh hãy trình bày suy nghĩ tự do về một chủ đề...',
            'Placeholder gợi ý nhập liệu...'
        )}
        `;
    },

    quizPool: [
        // Level 1 - Nhận biết
        {
            level: 1,
            question: 'Câu hỏi nhận biết 1?',
            options: ['Đáp án A (Sai)', 'Đáp án B (Đúng)', 'Đáp án C (Sai)', 'Đáp án D (Sai)'],
            answer: 1
        },
        // Level 2 - Thông hiểu
        {
            level: 2,
            question: 'Câu hỏi thông hiểu 1?',
            options: ['A', 'B', 'C (Đúng)', 'D'],
            answer: 2
        },
        // Level 3 - Vận dụng
        {
            level: 3,
            question: 'Câu hỏi vận dụng 1?',
            options: ['Đúng ở đây', 'Sai', 'Sai', 'Sai'],
            answer: 0
        }
    ]
};
