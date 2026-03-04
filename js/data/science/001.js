// Bài 1 Tiết 1: Thành phần và vai trò của đất đối với cây trồng
// DEMO: Tất cả các dạng tương tác
export const lesson001 = {
    topic: 'Chất',
    week: '1',
    period: '1',
    title: 'Thành phần và vai trò của đất đối với cây trồng (Tiết 1)',
    description: 'Tìm hiểu về các thành phần chính của đất và vai trò của đất đối với sự sinh trưởng của cây trồng.',

    content: `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-600 via-green-500 to-lime-400 p-8 md:p-12 mb-8 text-white shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
            <div class="relative z-10">
                <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-black uppercase tracking-widest backdrop-blur-sm">
                    <span>🌱</span> Chủ đề: Chất
                </div>
                <h1 class="text-3xl md:text-4xl font-black mb-3 leading-tight">Thành phần và vai trò của đất</h1>
                <p class="text-lg md:text-xl font-bold opacity-90 max-w-2xl leading-relaxed">Đất là ngôi nhà của cây trồng. Hôm nay chúng ta sẽ khám phá đất gồm những gì và đất quan trọng với cây như thế nào.</p>
            </div>
        </div>

        <!-- ====== LÝ THUYẾT: 4 THÀNH PHẦN CỦA ĐẤT ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-black">📖</div>
                <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100">Đất gồm những gì?</h2>
            </div>
            
            <p class="text-lg font-bold text-gray-700 dark:text-slate-200 mb-6 leading-relaxed">
                Đất được cấu tạo từ <b>4 thành phần chính</b>. Mỗi thành phần đều có vai trò quan trọng giúp cây trồng phát triển.
            </p>

            <!-- Cards 4 thành phần -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-5 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-200">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">🪨</span>
                        <h3 class="text-lg font-black text-amber-800">Chất khoáng (~45%)</h3>
                    </div>
                    <p class="text-base font-bold text-amber-700">Gồm cát, sỏi, đất sét. Cung cấp khoáng chất cho cây.</p>
                </div>
                <div class="p-5 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">🍂</span>
                        <h3 class="text-lg font-black text-green-800">Mùn (chất hữu cơ ~5%)</h3>
                    </div>
                    <p class="text-base font-bold text-green-700">Từ xác sinh vật phân hủy. Làm đất tơi xốp, giàu dinh dưỡng.</p>
                </div>
                <div class="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">💧</span>
                        <h3 class="text-lg font-black text-blue-800">Nước (~25%)</h3>
                    </div>
                    <p class="text-base font-bold text-blue-700">Hòa tan chất khoáng thành dung dịch cho rễ cây hấp thụ.</p>
                </div>
                <div class="p-5 bg-sky-50 dark:bg-sky-900/20 rounded-2xl border border-sky-200">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">💨</span>
                        <h3 class="text-lg font-black text-sky-800">Không khí (~25%)</h3>
                    </div>
                    <p class="text-base font-bold text-sky-700">Chứa trong các khe hở của đất. Giúp rễ cây hô hấp.</p>
                </div>
            </div>

            <!-- Vai trò -->
            <div class="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border-2 border-emerald-200 mb-4">
                <h3 class="text-xl font-black text-emerald-800 mb-3">🌳 Vai trò của đất đối với cây trồng</h3>
                <ul class="space-y-2 text-base font-bold text-emerald-700">
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Giữ cho cây đứng vững (rễ bám vào đất)</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Cung cấp chất dinh dưỡng (khoáng, mùn)</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Cung cấp nước cho cây</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Cung cấp không khí cho rễ hô hấp</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Là môi trường sống của nhiều sinh vật</li>
                </ul>
            </div>
        </div>
    `,

    // Practice is a FUNCTION → gets called at render time when Lesson is loaded
    practice() {
        return `
        <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100 mb-6">🏋️ Luyện tập</h2>

        <!-- ====== 1. ĐIỀN VÀO CHỖ TRỐNG (Fill-in-the-Blanks) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mb-2">BÀI 1: Điền vào chỗ trống</h3>
        ${Lesson.renderFillBlanks(
            'kh-fb-1',
            'Đất gồm 4 thành phần chính: {0}, {1}, {2} và {3}. Trong đó, {4} chiếm tỉ lệ lớn nhất khoảng 45%.',
            ['chất khoáng', 'mùn', 'nước', 'không khí', 'chất khoáng', 'sinh vật', 'ánh sáng'],
            ['chất khoáng', 'mùn', 'nước', 'không khí', 'chất khoáng']
        )}

        <!-- ====== 2. ĐÚNG / SAI (True/False) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 2: Đúng hay Sai?</h3>
        ${Lesson.renderTrueFalse('kh-tf-1', [
            {
                text: 'Đất chỉ gồm 2 thành phần: cát và nước.',
                answer: false,
                explanation: 'Đất gồm 4 thành phần: chất khoáng, mùn, nước và không khí.'
            },
            {
                text: 'Mùn (chất hữu cơ) được tạo thành từ xác sinh vật phân hủy.',
                answer: true,
                explanation: 'Đúng! Lá cây, cành cây, xác động vật... phân hủy tạo thành mùn, làm đất tơi xốp và giàu dinh dưỡng.'
            },
            {
                text: 'Rễ cây không cần không khí trong đất.',
                answer: false,
                explanation: 'Sai! Rễ cây cần không khí để hô hấp. Đó là lý do ta cần xới đất cho thoáng.'
            },
            {
                text: 'Đất giúp cây đứng vững nhờ rễ bám vào đất.',
                answer: true,
                explanation: 'Chính xác! Rễ cây đâm vào đất giúp giữ cây đứng vững, không bị gió làm đổ.'
            }
        ])}

        <!-- ====== 3. SẮP XẾP THỨ TỰ (Ordering) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 3: Sắp xếp thứ tự</h3>
        ${Lesson.renderOrdering(
            'kh-ord-1',
            'Sắp xếp các bước thí nghiệm tìm thành phần của đất',
            [
                'Cho một ít đất vào cốc nước, khuấy đều',
                'Để yên cốc nước trong 5 phút',
                'Quan sát: có bọt khí nổi lên → đất có không khí',
                'Quan sát: chất nặng lắng xuống đáy → chất khoáng',
                'Quan sát: chất nhẹ nổi trên mặt → mùn hữu cơ'
            ],
            [0, 1, 2, 3, 4]
        )}

        <!-- ====== 4. PHÂN LOẠI (Categorizing) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 4: Phân loại</h3>
        ${Lesson.renderCategorizing(
            'kh-cat-1',
            'Phân loại các vai trò của đất',
            [
                { name: '🌱 Vai trò với cây', color: 'emerald' },
                { name: '🪱 Vai trò với sinh vật', color: 'amber' }
            ],
            [
                { text: 'Giữ cây đứng vững', categoryIdx: 0 },
                { text: 'Cung cấp chất dinh dưỡng cho cây', categoryIdx: 0 },
                { text: 'Cung cấp nước cho cây', categoryIdx: 0 },
                { text: 'Là nơi ở của giun đất', categoryIdx: 1 },
                { text: 'Cung cấp không khí cho rễ hô hấp', categoryIdx: 0 },
                { text: 'Là nơi sinh sống của vi sinh vật', categoryIdx: 1 },
                { text: 'Là nơi trú ẩn của côn trùng', categoryIdx: 1 }
            ]
        )}

        <!-- ====== 5. THẺ LẬT (Flashcards) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 5: Thẻ kiến thức</h3>
        ${Lesson.renderFlashcards('kh-fc-1', 'Ôn tập thành phần đất', [
            { front: 'Thành phần chiếm ~45% trong đất?', back: 'Chất khoáng (cát, sỏi, đất sét)', emoji: '🪨' },
            { front: 'Mùn là gì?', back: 'Chất hữu cơ từ xác sinh vật phân hủy, chiếm ~5%', emoji: '🍂' },
            { front: 'Nước trong đất có vai trò gì?', back: 'Hòa tan chất khoáng thành dung dịch cho rễ hấp thụ', emoji: '💧' },
            { front: 'Tại sao cần xới đất?', back: 'Để không khí lưu thông, giúp rễ cây hô hấp tốt hơn', emoji: '💨' },
            { front: 'Cây có thể sống trên đá không?', back: 'Rất khó vì đá không có mùn và nước như đất', emoji: '🏔️' },
            { front: 'Đất có mấy vai trò chính với cây?', back: '5 vai trò: giữ đứng vững, dinh dưỡng, nước, không khí, môi trường sống', emoji: '🌳' }
        ])}

        <!-- ====== 6. THÍ NGHIỆM MÔ PHỎNG (Virtual Experiment) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 6: Thí nghiệm mô phỏng</h3>
        ${Lesson.renderExperiment(
            'kh-exp-1',
            'Thí nghiệm: Tìm thành phần của đất',
            'Chúng ta sẽ mô phỏng thí nghiệm cho đất vào nước để phân tách các thành phần.',
            [
                {
                    instruction: 'Chuẩn bị: Lấy 1 cốc nước trong và 1 ít đất vườn',
                    result: '✅ Đã chuẩn bị xong cốc nước trong suốt và một nắm đất vườn ẩm.',
                    emoji: '🥛'
                },
                {
                    instruction: 'Thả đất vào cốc nước, dùng que khuấy đều',
                    result: '🫧 Quan sát: Có <b>bọt khí</b> nổi lên mặt nước → Chứng tỏ trong đất có <b>không khí</b>!',
                    emoji: '🌊'
                },
                {
                    instruction: 'Để yên cốc trong 5 phút, quan sát hiện tượng',
                    result: '⬇️ Các hạt nặng (cát, sỏi) <b>lắng xuống đáy</b> cốc → Đây là <b>chất khoáng</b>!<br>⬆️ Các mảnh nhẹ (lá mục, xác sinh vật) <b>nổi trên mặt</b> → Đây là <b>mùn</b> (chất hữu cơ)!',
                    emoji: '⏱️'
                },
                {
                    instruction: 'Kết luận: Kể tên các thành phần của đất',
                    result: '📋 <b>Kết luận</b>: Đất gồm 4 thành phần:<br>1️⃣ <b>Chất khoáng</b> (lắng đáy)<br>2️⃣ <b>Mùn</b> - chất hữu cơ (nổi trên)<br>3️⃣ <b>Nước</b> (hòa tan trong cốc)<br>4️⃣ <b>Không khí</b> (bọt khí)',
                    emoji: '📝'
                }
            ]
        )}

        <!-- ====== 7. BÀI NỐI (Matching) - ĐÃ CÓ SẴN ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 7: Nối cặp đôi</h3>
        ${Lesson.renderMatchingExercise(
            'kh-match-1',
            'Nối thành phần đất với đặc điểm',
            ['Chất khoáng', 'Mùn', 'Nước', 'Không khí'],
            ['Bọt khí nổi lên khi thả đất vào nước', 'Lắng xuống đáy cốc', 'Nổi trên mặt nước', 'Hòa tan chất khoáng cho rễ hấp thụ'],
            [{ leftIdx: 0, rightIdx: 1 }, { leftIdx: 1, rightIdx: 2 }, { leftIdx: 2, rightIdx: 3 }, { leftIdx: 3, rightIdx: 0 }]
        )}

        <!-- ====== 8. AI TUTOR - ĐÃ CÓ SẴN ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 8: Hỏi đáp với AI</h3>
        ${AIInteraction.renderTutor(
            'kh-tutor-1',
            'Em hãy trả lời: Tại sao đất lại quan trọng với cây trồng? Nêu ít nhất 3 vai trò của đất.',
            'Nhập câu trả lời của em vào đây...'
        )}
        `;
    },

    quizPool: [
        // Level 1 - Nhận biết
        {
            level: 1,
            question: 'Đất gồm mấy thành phần chính?',
            options: ['2 thành phần', '3 thành phần', '4 thành phần', '5 thành phần'],
            answer: 2
        },
        {
            level: 1,
            question: 'Thành phần nào chiếm tỉ lệ lớn nhất trong đất?',
            options: ['Mùn', 'Nước', 'Chất khoáng', 'Không khí'],
            answer: 2
        },
        {
            level: 1,
            question: 'Mùn trong đất được tạo thành từ đâu?',
            options: ['Từ cát và sỏi', 'Từ xác sinh vật phân hủy', 'Từ nước mưa', 'Từ phân bón'],
            answer: 1
        },
        {
            level: 1,
            question: 'Khi thả đất vào nước, bọt khí nổi lên chứng tỏ điều gì?',
            options: ['Đất có nước', 'Đất có mùn', 'Đất có không khí', 'Đất có chất khoáng'],
            answer: 2
        },
        {
            level: 1,
            question: 'Đất giúp cây đứng vững là nhờ bộ phận nào của cây?',
            options: ['Lá', 'Thân', 'Rễ', 'Hoa'],
            answer: 2
        },
        // Level 2 - Thông hiểu
        {
            level: 2,
            question: 'Tại sao cần xới đất cho cây trồng?',
            options: [
                'Để đất đẹp hơn',
                'Để không khí lưu thông, rễ hô hấp tốt',
                'Để giun đất bò lên',
                'Để nước chảy đi'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Chất nào trong đất giúp hòa tan khoáng chất cho rễ cây hấp thụ?',
            options: ['Không khí', 'Mùn', 'Nước', 'Cát'],
            answer: 2
        },
        {
            level: 2,
            question: 'Khi đất bị khô cằn, cây sẽ thiếu thành phần nào?',
            options: ['Chất khoáng', 'Mùn', 'Nước và không khí', 'Nước và dung dịch khoáng'],
            answer: 3
        },
        {
            level: 2,
            question: 'Đất tơi xốp tốt hơn đất nén chặt vì:',
            options: [
                'Đất tơi xốp có nhiều cát hơn',
                'Đất tơi xốp chứa nhiều không khí và nước hơn',
                'Đất tơi xốp có ít sinh vật hơn',
                'Đất tơi xốp ít bị ô nhiễm hơn'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Trong thí nghiệm, chất nào lắng xuống đáy cốc nước?',
            options: ['Mùn', 'Không khí', 'Chất khoáng (cát, sỏi)', 'Lá cây'],
            answer: 2
        },
        // Level 3 - Vận dụng
        {
            level: 3,
            question: 'Cây ngô mọc trong kẽ đá nhưng không mọc trên mặt đá. Giải thích:',
            options: [
                'Vì mặt đá quá cứng để rễ cắm vào',
                'Vì kẽ đá có đất tích tụ chứa đủ khoáng, nước, mùn',
                'Vì mặt đá có gió mạnh',
                'Vì kẽ đá ấm hơn mặt đá'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Khu vườn A bón phân rải rác, khu vườn B không bón phân. Sau thời gian, cây ở vườn A tốt hơn vì:',
            options: [
                'Phân bón làm tăng mùn trong đất, cung cấp thêm chất dinh dưỡng',
                'Phân bón làm cây có nhiều lá hơn',
                'Phân bón giúp cây cao hơn',
                'Phân bón làm đất cứng hơn'
            ],
            answer: 0
        },
        {
            level: 3,
            question: 'Sau cơn mưa lớn, mặt đất bị trũng nước. Điều này ảnh hưởng gì đến cây?',
            options: [
                'Cây được tưới nước nên tốt hơn',
                'Nước đọng lâu đẩy không khí ra → rễ thiếu oxy → cây có thể chết',
                'Nước mưa cung cấp thêm khoáng chất',
                'Mưa lớn giúp rửa sạch đất'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Nếu trồng cây trong cát sạch (không có mùn), cây sẽ:',
            options: [
                'Phát triển bình thường',
                'Phát triển tốt hơn vì cát thoáng',
                'Phát triển kém vì thiếu chất dinh dưỡng từ mùn',
                'Không ảnh hưởng gì'
            ],
            answer: 2
        },
        {
            level: 3,
            question: 'Vì sao đất rừng thường tơi xốp và màu mỡ hơn đất trống?',
            options: [
                'Vì rừng có gió mạnh hơn',
                'Vì rừng có nhiều lá rụng phân hủy tạo mùn, giun đất hoạt động tốt',
                'Vì rừng ít mưa hơn',
                'Vì rừng có ít cây hơn'
            ],
            answer: 1
        }
    ]
};
