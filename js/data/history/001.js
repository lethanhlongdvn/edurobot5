// Bài 1 Tiết 1: Vị trí địa lý, lãnh thổ, đơn vị hành chính, Quốc kỳ, Quốc huy, Quốc ca
// DEMO: Tất cả các dạng tương tác áp dụng cho môn Lịch sử & Địa lý
export const lesson001 = {
    topic: 'Địa lý Việt Nam',
    week: '1',
    period: '1',
    title: 'Bài 1: Vị trí địa lý, lãnh thổ, đơn vị hành chính, Quốc kỳ, Quốc huy, Quốc ca (Tiết 1)',
    description: 'Tìm hiểu vị trí địa lý, lãnh thổ và các biểu tượng quốc gia Việt Nam.',

    content() {
        return `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-400 p-8 md:p-12 mb-8 text-white shadow-2xl">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-xl"></div>
            <div class="relative z-10">
                <div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-black uppercase tracking-widest backdrop-blur-sm">
                    <span>🌏</span> Chủ đề: Địa lý Việt Nam
                </div>
                <h1 class="text-3xl md:text-4xl font-black mb-3 leading-tight">Vị trí địa lý và lãnh thổ Việt Nam</h1>
                <p class="text-lg md:text-xl font-bold opacity-90 max-w-2xl leading-relaxed">Khám phá vị trí đặc biệt của Việt Nam trên bản đồ thế giới, hình dạng lãnh thổ và các biểu tượng thiêng liêng của đất nước.</p>
            </div>
        </div>

        <!-- ====== 1. VỊ TRÍ ĐỊA LÝ ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center text-2xl font-black">🗺️</div>
                <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100">Vị trí địa lý Việt Nam</h2>
            </div>

            <p class="text-lg font-bold text-gray-700 dark:text-slate-200 mb-6 leading-relaxed">
                Việt Nam nằm ở khu vực <b>Đông Nam Á</b>, trên bán đảo <b>Đông Dương</b>. Phía bắc giáp <b>Trung Quốc</b>, phía tây giáp <b>Lào</b> và <b>Cam-pu-chia</b>, phía đông và phía nam giáp <b>Biển Đông</b>.
            </p>

            <!-- Cards thông tin -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-5 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">📐</span>
                        <h3 class="text-lg font-black text-blue-800">Diện tích</h3>
                    </div>
                    <p class="text-base font-bold text-blue-700">Khoảng <b>331.212 km²</b>, xếp thứ 66 trên thế giới.</p>
                </div>
                <div class="p-5 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">🏖️</span>
                        <h3 class="text-lg font-black text-green-800">Đường bờ biển</h3>
                    </div>
                    <p class="text-base font-bold text-green-700">Dài hơn <b>3.260 km</b>, chạy dọc phía đông và nam đất nước.</p>
                </div>
                <div class="p-5 bg-purple-50 dark:bg-purple-900/20 rounded-2xl border border-purple-200">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">🏛️</span>
                        <h3 class="text-lg font-black text-purple-800">Đơn vị hành chính</h3>
                    </div>
                    <p class="text-base font-bold text-purple-700"><b>63 tỉnh, thành phố</b> trực thuộc trung ương. Thủ đô là <b>Hà Nội</b>.</p>
                </div>
                <div class="p-5 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200">
                    <div class="flex items-center gap-3 mb-2">
                        <span class="text-3xl">📍</span>
                        <h3 class="text-lg font-black text-red-800">Hình dạng lãnh thổ</h3>
                    </div>
                    <p class="text-base font-bold text-red-700">Hình chữ <b>S</b>, dài khoảng <b>1.650 km</b> từ Bắc vào Nam.</p>
                </div>
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
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Việt Nam nằm ở khu vực Đông Nam Á, trên bán đảo Đông Dương</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Lãnh thổ hình chữ S, diện tích khoảng 331.212 km²</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> 63 tỉnh, thành phố trực thuộc trung ương, thủ đô là Hà Nội</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Quốc kỳ: Cờ đỏ sao vàng | Quốc ca: Tiến quân ca (Văn Cao)</li>
                </ul>
            </div>
        </div>

        <!-- ====== BẢN ĐỒ TƯƠNG TÁC ====== -->
        ${Lesson.renderInteractiveMap(
            'ls-map-1',
            'Khám phá bản đồ Việt Nam',
            'Nhấn vào các địa điểm bên dưới để di chuyển trên bản đồ — chuyển chế độ Vệ tinh / Bản đồ / Địa hình',
            [
                { name: 'Toàn cảnh Việt Nam', lat: 16.047079, lng: 108.206230, info: 'Hình chữ S, trải dài 1.650 km Bắc - Nam', emoji: '🇻🇳' },
                { name: 'Thủ đô Hà Nội', lat: 21.028511, lng: 105.804817, info: 'Trung tâm chính trị, thủ đô nước CHXHCN Việt Nam', emoji: '🏛️' },
                { name: 'TP. Hồ Chí Minh', lat: 10.776530, lng: 106.700981, info: 'Thành phố lớn nhất, trung tâm kinh tế phía Nam', emoji: '🏙️' },
                { name: 'TP. Đà Nẵng', lat: 16.054407, lng: 108.202164, info: 'Thành phố trung tâm miền Trung, ven biển', emoji: '🏖️' },
                { name: 'Đảo Phú Quốc', lat: 10.289733, lng: 103.984020, info: 'Đảo lớn nhất Việt Nam, thuộc tỉnh Kiên Giang', emoji: '🏝️' },
                { name: 'Biên giới phía Bắc (Lạng Sơn)', lat: 21.853708, lng: 106.761519, info: 'Cửa khẩu quan trọng giáp Trung Quốc', emoji: '🚩' }
            ]
        )}
    `;
    },

    // Practice is a FUNCTION → gets called at render time when Lesson is loaded
    practice() {
        return `
        <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100 mb-6">🏋️ Luyện tập</h2>

        <!-- ====== 1. ĐIỀN VÀO CHỖ TRỐNG (Fill-in-the-Blanks) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mb-2">BÀI 1: Điền vào chỗ trống</h3>
        ${Lesson.renderFillBlanks(
            'ls-fb-1',
            'Việt Nam nằm ở khu vực {0}, trên bán đảo {1}. Phía bắc giáp {2}, phía tây giáp Lào và {3}. Lãnh thổ có hình chữ {4}, dài khoảng {5} km.',
            ['Đông Nam Á', 'Đông Dương', 'Trung Quốc', 'Cam-pu-chia', 'S', '1.650', 'Tây Á', 'Đông Bắc', 'O', '2.500'],
            ['Đông Nam Á', 'Đông Dương', 'Trung Quốc', 'Cam-pu-chia', 'S', '1.650']
        )}

        <!-- ====== 2. ĐÚNG / SAI (True/False) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 2: Đúng hay Sai?</h3>
        ${Lesson.renderTrueFalse('ls-tf-1', [
            {
                text: 'Việt Nam nằm ở khu vực Đông Bắc Á.',
                answer: false,
                explanation: 'Sai! Việt Nam nằm ở khu vực Đông Nam Á, trên bán đảo Đông Dương.'
            },
            {
                text: 'Thủ đô của Việt Nam là Hà Nội.',
                answer: true,
                explanation: 'Đúng! Hà Nội là thủ đô nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.'
            },
            {
                text: 'Việt Nam có 63 tỉnh, thành phố trực thuộc trung ương.',
                answer: true,
                explanation: 'Chính xác! Việt Nam có 63 đơn vị hành chính cấp tỉnh.'
            },
            {
                text: 'Quốc ca Việt Nam do nhạc sĩ Phạm Tuyên sáng tác.',
                answer: false,
                explanation: 'Sai! Quốc ca "Tiến quân ca" do nhạc sĩ Văn Cao sáng tác năm 1944.'
            },
            {
                text: 'Lãnh thổ Việt Nam có hình chữ S.',
                answer: true,
                explanation: 'Đúng! Lãnh thổ Việt Nam kéo dài theo hướng Bắc - Nam, có hình chữ S đặc trưng.'
            }
        ])}

        <!-- ====== 3. SẮP XẾP THỨ TỰ (Ordering) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 3: Sắp xếp thứ tự</h3>
        ${Lesson.renderOrdering(
            'ls-ord-1',
            'Sắp xếp các nước giáp biên giới Việt Nam theo thứ tự từ Bắc đến Tây',
            [
                'Trung Quốc (phía Bắc)',
                'Lào (phía Tây)',
                'Cam-pu-chia (phía Tây Nam)',
                'Biển Đông (phía Đông và Nam)'
            ],
            [0, 1, 2, 3]
        )}

        <!-- ====== 4. PHÂN LOẠI (Categorizing) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 4: Phân loại</h3>
        ${Lesson.renderCategorizing(
            'ls-cat-1',
            'Phân loại các thông tin về biểu tượng quốc gia',
            [
                { name: '🚩 Quốc kỳ', color: 'red' },
                { name: '🏅 Quốc huy', color: 'yellow' },
                { name: '🎵 Quốc ca', color: 'amber' }
            ],
            [
                { text: 'Nền đỏ, sao vàng năm cánh', categoryIdx: 0 },
                { text: 'Tiến quân ca', categoryIdx: 2 },
                { text: 'Nhạc sĩ Văn Cao sáng tác', categoryIdx: 2 },
                { text: 'Có bông lúa và bánh xe răng', categoryIdx: 1 },
                { text: 'Tượng trưng cho cách mạng', categoryIdx: 0 },
                { text: 'Hình tròn, nền đỏ', categoryIdx: 1 },
                { text: 'Sáng tác năm 1944', categoryIdx: 2 },
                { text: 'Năm cánh sao tượng trưng đoàn kết', categoryIdx: 0 }
            ]
        )}

        <!-- ====== 5. THẺ LẬT (Flashcards) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 5: Thẻ kiến thức</h3>
        ${Lesson.renderFlashcards('ls-fc-1', 'Ôn tập Vị trí địa lý & Biểu tượng quốc gia', [
            { front: 'Việt Nam nằm ở khu vực nào?', back: 'Đông Nam Á, trên bán đảo Đông Dương', emoji: '🌏' },
            { front: 'Diện tích Việt Nam?', back: 'Khoảng 331.212 km², xếp thứ 66 thế giới', emoji: '📐' },
            { front: 'Đường bờ biển dài bao nhiêu?', back: 'Hơn 3.260 km, chạy dọc phía đông và nam', emoji: '🏖️' },
            { front: 'Có bao nhiêu tỉnh, thành phố?', back: '63 tỉnh, thành phố trực thuộc trung ương', emoji: '🏛️' },
            { front: 'Ai sáng tác Quốc ca?', back: 'Nhạc sĩ Văn Cao sáng tác bài Tiến quân ca (1944)', emoji: '🎵' },
            { front: 'Ý nghĩa cờ đỏ sao vàng?', back: 'Nền đỏ: cách mạng. Sao vàng 5 cánh: đoàn kết các tầng lớp nhân dân', emoji: '🚩' }
        ])}

        <!-- ====== 6. NỐI CẶP ĐÔI (Matching) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 6: Nối cặp đôi</h3>
        ${Lesson.renderMatchingExercise(
            'ls-match-1',
            'Nối nước láng giềng với hướng tiếp giáp',
            ['Trung Quốc', 'Lào', 'Cam-pu-chia', 'Biển Đông'],
            ['Phía Tây', 'Phía Bắc', 'Phía Đông và Nam', 'Phía Tây Nam'],
            [{ leftIdx: 0, rightIdx: 1 }, { leftIdx: 1, rightIdx: 0 }, { leftIdx: 2, rightIdx: 3 }, { leftIdx: 3, rightIdx: 2 }]
        )}

        <!-- ====== 7. KHÁM PHÁ TỪNG BƯỚC (Experiment/Discovery) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 7: Khám phá từng bước</h3>
        ${Lesson.renderExperiment(
            'ls-exp-1',
            'Khám phá: Tìm hiểu vị trí Việt Nam trên bản đồ',
            'Cùng khám phá vị trí đặc biệt của Việt Nam trên bản đồ thế giới từng bước.',
            [
                {
                    instruction: 'Tìm châu Á trên bản đồ thế giới',
                    result: '🌍 Châu Á là châu lục lớn nhất thế giới, nằm ở phía đông bán cầu. Việt Nam là một phần của châu Á.',
                    emoji: '🗺️'
                },
                {
                    instruction: 'Xác định khu vực Đông Nam Á',
                    result: '📍 Đông Nam Á gồm 11 quốc gia, nằm ở phía đông nam châu Á. Đây là nơi Việt Nam tọa lạc.',
                    emoji: '🌏'
                },
                {
                    instruction: 'Tìm Việt Nam trên bán đảo Đông Dương',
                    result: '🇻🇳 Việt Nam nằm ở phía đông bán đảo Đông Dương, có đường bờ biển dài hơn 3.260 km dọc Biển Đông.',
                    emoji: '🏖️'
                },
                {
                    instruction: 'Xác định các nước láng giềng',
                    result: '🤝 Phía Bắc giáp <b>Trung Quốc</b>, phía Tây giáp <b>Lào</b> và <b>Cam-pu-chia</b>, phía Đông và Nam giáp <b>Biển Đông</b>.',
                    emoji: '🌐'
                }
            ]
        )}

        <!-- ====== 8. VẬN DỤNG THỰC TẾ (Real World) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 8: Vận dụng thực tế</h3>
        ${Lesson.renderRealWorldMeasurement(
            'ls-rw-1',
            'Tìm hiểu quê hương em trên bản đồ',
            'Em hãy chụp ảnh bản đồ hành chính tỉnh/thành phố nơi em sống và ghi lại: Tên tỉnh/thành, các tỉnh giáp ranh, đặc điểm nổi bật (biển, núi, sông...).'
        )}

        <!-- ====== 9. HỎI ĐÁP VỚI AI ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">BÀI 9: Hỏi đáp với AI</h3>
        ${AIInteraction.renderTutor(
            'ls-tutor-1',
            'Em hãy trả lời: Vì sao vị trí địa lý của Việt Nam được xem là thuận lợi cho việc giao lưu với các nước? Nêu ít nhất 3 lý do.',
            'Nhập câu trả lời của em vào đây...'
        )}
        `;
    },

    quizPool: [
        // Level 1 - Nhận biết
        {
            level: 1,
            question: 'Việt Nam nằm ở khu vực nào trên thế giới?',
            options: ['Đông Bắc Á', 'Đông Nam Á', 'Nam Á', 'Trung Á'],
            answer: 1
        },
        {
            level: 1,
            question: 'Thủ đô của Việt Nam là thành phố nào?',
            options: ['TP. Hồ Chí Minh', 'Đà Nẵng', 'Hà Nội', 'Huế'],
            answer: 2
        },
        {
            level: 1,
            question: 'Việt Nam có bao nhiêu tỉnh, thành phố trực thuộc trung ương?',
            options: ['53', '58', '63', '68'],
            answer: 2
        },
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
        // Level 2 - Thông hiểu
        {
            level: 2,
            question: 'Nước nào giáp Việt Nam ở phía Bắc?',
            options: ['Lào', 'Cam-pu-chia', 'Trung Quốc', 'Mi-an-ma'],
            answer: 2
        },
        {
            level: 2,
            question: 'Đường bờ biển Việt Nam dài khoảng bao nhiêu km?',
            options: ['1.650 km', '2.360 km', '3.260 km', '4.350 km'],
            answer: 2
        },
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
            question: 'Lãnh thổ Việt Nam có hình dạng giống chữ gì?',
            options: ['Chữ C', 'Chữ S', 'Chữ L', 'Chữ V'],
            answer: 1
        },
        {
            level: 2,
            question: 'Việt Nam nằm trên bán đảo nào?',
            options: ['Bán đảo Triều Tiên', 'Bán đảo Mã Lai', 'Bán đảo Đông Dương', 'Bán đảo Ả Rập'],
            answer: 2
        },
        // Level 3 - Vận dụng
        {
            level: 3,
            question: 'Vị trí ven Biển Đông mang lại thuận lợi gì cho Việt Nam?',
            options: [
                'Có khí hậu lạnh quanh năm',
                'Thuận lợi giao thương đường biển, khai thác hải sản và du lịch biển',
                'Không bị ảnh hưởng bởi bão',
                'Có nhiều sa mạc rộng lớn'
            ],
            answer: 1
        },
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
            question: 'So với các nước Đông Nam Á, diện tích Việt Nam thuộc nhóm nào?',
            options: [
                'Nhỏ nhất (như Singapore, Brunei)',
                'Trung bình (tương tự Philippines, Malaysia)',
                'Lớn nhất (như Indonesia)',
                'Rất lớn, chiếm phần lớn Đông Nam Á'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Việt Nam giáp biên giới đất liền với 3 nước. Đặc điểm này có ý nghĩa gì?',
            options: [
                'Gây khó khăn cho phát triển kinh tế',
                'Thuận lợi cho giao lưu văn hóa và thương mại với các nước láng giềng',
                'Làm cho Việt Nam bị cô lập',
                'Không có ý nghĩa đặc biệt'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Bài Tiến quân ca được sáng tác trong hoàn cảnh nào?',
            options: [
                'Sau khi hòa bình lập lại 1954',
                'Trong phong trào đấu tranh giành độc lập, năm 1944',
                'Sau ngày thống nhất đất nước 1975',
                'Trong thời kỳ đổi mới 1986'
            ],
            answer: 1
        }
    ]
};
