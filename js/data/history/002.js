// Bài 1 Tiết 2: Quốc kỳ, Quốc huy, Quốc ca
// VBT Lịch sử & Địa lí 5 - KNTT: Bài 1 (Phần 3)
export const lesson002 = {
    topic: 'Địa lý Việt Nam',
    week: '1',
    period: '2',
    title: 'Bài 1: Quốc kỳ, Quốc huy, Quốc ca (Tiết 2)',
    description: 'Tìm hiểu và khám phá ý nghĩa các biểu tượng quốc gia Việt Nam.',

    content() {
        return `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-red-600 via-red-500 to-amber-500 p-8 md:p-12 mb-8 text-white shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
            <div class="relative z-10">
                <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-black uppercase tracking-widest backdrop-blur-sm">
                    <span>🇻🇳</span> Chủ đề: Địa lý Việt Nam
                </div>
                <h1 class="text-3xl md:text-4xl font-black mb-3 leading-tight">Các biểu tượng quốc gia</h1>
                <p class="text-lg md:text-xl font-bold opacity-90 max-w-2xl leading-relaxed">Tìm hiểu ý nghĩa thiêng liêng của Quốc kì, Quốc huy và Quốc ca nước Cộng hoà xã hội chủ nghĩa Việt Nam.</p>
            </div>
        </div>

        <!-- ====== 2. BIỂU TƯỢNG QUỐC GIA ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl font-black">🇻🇳</div>
                <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100">Các biểu tượng quốc gia</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="p-6 bg-red-50 dark:bg-red-900/20 rounded-2xl border-2 border-red-200 text-center">
                    <span class="text-6xl block mb-3">🚩</span>
                    <h3 class="text-xl font-black text-red-800 mb-2">Quốc kỳ</h3>
                    <p class="text-base font-bold text-red-700">Cờ đỏ sao vàng. Nền đỏ tượng trưng cho cách mạng, ngôi sao vàng năm cánh tượng trưng cho sự đoàn kết các tầng lớp nhân dân.</p>
                </div>
                <div class="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl border-2 border-yellow-200 text-center">
                    <span class="text-6xl block mb-3">🏅</span>
                    <h3 class="text-xl font-black text-yellow-800 mb-2">Quốc huy</h3>
                    <p class="text-base font-bold text-yellow-700">Hình tròn, nền đỏ, có ngôi sao vàng năm cánh, bông lúa, bánh xe răng và dòng chữ "Cộng hòa Xã hội Chủ nghĩa Việt Nam".</p>
                </div>
                <div class="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border-2 border-amber-200 text-center">
                    <span class="text-6xl block mb-3">🎵</span>
                    <h3 class="text-xl font-black text-amber-800 mb-2">Quốc ca</h3>
                    <p class="text-base font-bold text-amber-700">Bài "Tiến quân ca" do nhạc sĩ <b>Văn Cao</b> sáng tác năm 1944. Là bài ca tập hợp, kêu gọi toàn dân đứng lên.</p>
                </div>
            </div>

            <!-- Ghi nhớ -->
            <div class="mt-6 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border-2 border-emerald-200">
                <h3 class="text-xl font-black text-emerald-800 mb-3">📝 Ghi nhớ</h3>
                <ul class="space-y-2 text-base font-bold text-emerald-700">
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Quốc kỳ: Cờ đỏ sao vàng | Quốc ca: Tiến quân ca (Văn Cao)</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Quốc huy có hình tròn, nền đỏ, có ngôi sao vàng năm cánh, bông lúa, bánh xe răng.</li>
                </ul>
            </div>
        </div>
        `;
    },

    // Practice is a FUNCTION → gets called at render time when Lesson is loaded
    practice() {
        return `
        <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100 mb-6">🏋️ Luyện tập (Tiết 2)</h2>

        <!-- ====== 1. ĐIỀN VÀO CHỖ TRỐNG (VBT Bài 4) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mb-2">Bài tập 1 (VBT trang 6)</h3>
        <p class="text-base font-bold text-slate-700 dark:text-slate-300 mb-4">Hoàn thành đoạn thông tin mô tả về Quốc kì và Quốc huy nước Cộng hoà xã hội chủ nghĩa Việt Nam.</p>
        ${Lesson.renderFillBlanks(
            'ls-fb-1',
            '- Quốc kì hình {0}, chiều rộng bằng {1} chiều dài, nền {2}, ở giữa có {3}.<br><br>- Quốc huy hình {4}, nền {5}, ở giữa có {6}, xung quanh có {7}, ở dưới có {8} và dòng chữ {9}. Trong đó, hình ảnh {10} tượng trưng cho nông nghiệp; {11} tượng trưng cho công nghiệp.',
            ['chữ nhật', 'hai phần ba', 'đỏ', 'ngôi sao vàng năm cánh', 'tròn', 'đỏ', 'ngôi sao vàng năm cánh', 'bông lúa', 'nửa bánh xe răng', 'Cộng hòa xã hội chủ nghĩa Việt Nam', 'bông lúa vàng', 'bánh xe', 'vuông', 'xanh', 'ngôi sao trắng'],
            ['chữ nhật', 'hai phần ba', 'đỏ', 'ngôi sao vàng năm cánh', 'tròn', 'đỏ', 'ngôi sao vàng năm cánh', 'bông lúa', 'nửa bánh xe răng', 'Cộng hòa xã hội chủ nghĩa Việt Nam', 'bông lúa vàng', 'bánh xe']
        )}

        <!-- ====== 2. ĐÚNG / SAI (VBT Bài 5) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">Bài tập 2 (VBT trang 6)</h3>
        <p class="text-base font-bold text-slate-700 dark:text-slate-300 mb-4">Các nhận định sau đúng hay sai?</p>
        ${Lesson.renderTrueFalse('ls-tf-1', [
            {
                text: 'Trên Quốc kì, nền đỏ tượng trưng cho cách mạng.',
                answer: true,
                explanation: 'Đúng! Nền đỏ tượng trưng cho máu, cho cách mạng.'
            },
            {
                text: 'Màu vàng của ngôi sao trên Quốc kì tượng trưng cho dân tộc Việt Nam.',
                answer: true,
                explanation: 'Đúng! Ngôi sao vàng tượng trưng cho linh hồn dân tộc và sự đoàn kết.'
            },
            {
                text: 'Quốc ca nước Cộng hoà xã hội chủ nghĩa Việt Nam là bài Tiến quân ca.',
                answer: true,
                explanation: 'Đúng! Tiến quân ca do nhạc sĩ Văn Cao sáng tác là Quốc ca Việt Nam.'
            },
            {
                text: 'Quốc huy có hình vuông, nền xanh.',
                answer: false,
                explanation: 'Sai! Quốc huy hình tròn, nền đỏ.'
            }
        ])}

        <!-- ====== 3. NỐI CẶP ĐÔI (VBT Bài 6) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">Bài tập 3 (VBT trang 7)</h3>
        <p class="text-base font-bold text-slate-700 dark:text-slate-300 mb-4">Nối các biểu tượng với ý nghĩa tương ứng.</p>
        ${Lesson.renderMatchingExercise(
            'ls-match-1',
            'Ý nghĩa các biểu tượng quốc gia',
            ['Quốc kì', 'Quốc huy', 'Quốc ca'],
            [
                'Khát vọng nền hòa bình, độc lập, tự do và phát triển thịnh vượng sánh vai các cường quốc.',
                'Thể hiện sự thống nhất, độc lập, tự chủ và hòa bình của dân tộc.',
                'Sự hi sinh to lớn, chiến thắng vinh quang của thế hệ đi trước.'
            ],
            [{ leftIdx: 0, rightIdx: 1 }, { leftIdx: 1, rightIdx: 0 }, { leftIdx: 2, rightIdx: 2 }]
        )}

        <!-- ====== 4. HỎI ĐÁP VỚI AI (VBT Bài 8 & Trải nghiệm) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">Vận dụng & Liên hệ (VBT trang 8)</h3>
        ${AIInteraction.renderTutor(
            'ls-tutor-1',
            'Em hãy kể lại trải nghiệm của bản thân khi tham gia lễ chào cờ và hát Quốc ca tại trường học. Cảm xúc của em lúc đó như thế nào?',
            'Khi đứng dưới cờ Tổ quốc và hát vang bài Quốc ca, em cảm thấy...'
        )}
        `;
    },

    quizPool: [
        // Level 1 - Nhận biết
        {
            level: 1,
            question: 'Quốc ca Việt Nam có tên gọi là gì?',
            options: ['Giải phóng miền Nam', 'Tiến quân ca', 'Hành quân ca', 'Chiến sĩ ca'],
            answer: 1
        },
        {
            level: 1,
            question: 'Ai là tác giả bài Quốc ca Việt Nam?',
            options: ['Phạm Tuyên', 'Đỗ Nhuận', 'Văn Cao', 'Lưu Hữu Phước'],
            answer: 2
        },
        {
            level: 1,
            question: 'Trên Quốc huy Việt Nam có những hình ảnh nào sau đây?',
            options: ['Bông lúa và bánh xe răng', 'Núi non và sông ngòi', 'Cây tre và hoa sen', 'Cột cờ Lũng Cú'],
            answer: 0
        },
        // Level 2 - Thông hiểu
        {
            level: 2,
            question: 'Ngôi sao vàng năm cánh trên Quốc kỳ tượng trưng cho điều gì?',
            options: [
                'Năm vùng miền đất nước',
                'Sự đoàn kết các tầng lớp nhân dân',
                'Năm châu lục trên thế giới',
                'Năm nền văn minh cổ đại'
            ],
            answer: 1
        },
        {
            level: 2,
            question: 'Quốc huy nước ta thể hiện khát vọng gì của dân tộc?',
            options: [
                'Trở thành nước đông dân nhất',
                'Phát triển công nghiệp vũ trụ',
                'Nền hòa bình, độc lập, tự do và phát triển thịnh vượng',
                'Mở rộng lãnh thổ ra xung quanh'
            ],
            answer: 2
        },
        // Level 3 - Vận dụng
        {
            level: 3,
            question: 'Vì sao Quốc kỳ, Quốc huy, Quốc ca là biểu tượng thiêng liêng?',
            options: [
                'Vì chúng rất đẹp',
                'Vì chúng đại diện cho chủ quyền, lịch sử và tinh thần đoàn kết dân tộc',
                'Vì chúng được nước ngoài công nhận',
                'Vì chúng được sử dụng hằng ngày'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Bài Tiến quân ca được Quốc hội khóa I chọn làm Quốc ca vào thời điểm nào?',
            options: [
                'Năm 1944 khi vừa sáng tác',
                'Năm 1945 sau Cách mạng tháng Tám',
                'Năm 1946',
                'Năm 1954 sau chiến thắng Điện Biên Phủ'
            ],
            answer: 2
        },
        {
            level: 3,
            question: 'Trong Quốc huy, hình ảnh bánh xe răng tượng trưng cho điều gì?',
            options: [
                'Giao thông vận tải',
                'Công nghiệp',
                'Nông nghiệp',
                'Bưu chính viễn thông'
            ],
            answer: 1
        }
    ]
};
