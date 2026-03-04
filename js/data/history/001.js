// Bài 1 Tiết 1: Vị trí địa lý, lãnh thổ, đơn vị hành chính
// VBT Lịch sử & Địa lí 5 - KNTT: Bài 1 (Phần 1 & 2)
export const lesson001 = {
    topic: 'Địa lý Việt Nam',
    week: '1',
    period: '1',
    title: 'Bài 1: Vị trí địa lý, lãnh thổ, đơn vị hành chính (Tiết 1)',
    description: 'Khám phá vị trí đặc biệt của Việt Nam trên bản đồ thế giới, hình dạng lãnh thổ và đơn vị hành chính.',

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

        <!-- ====== 2. LÃNH THỔ VÀ ĐƠN VỊ HÀNH CHÍNH ====== -->
        <div class="bg-white dark:bg-slate-800 rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-100 dark:border-slate-700 mb-6">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center text-2xl font-black">🇻🇳</div>
                <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100">Lãnh thổ và đơn vị hành chính</h2>
            </div>
            
            <p class="text-lg font-bold text-gray-700 dark:text-slate-200 mb-6 leading-relaxed">
                Lãnh thổ Việt Nam gồm vùng đất, vùng trời và vùng biển. Vùng đất của nước ta gồm toàn bộ phần đất liền và các đảo, quần đảo trên Biển Đông, có tổng diện tích hơn 331 nghìn km².
            </p>

            <ul class="space-y-4 mb-6">
                 <li class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                    <div class="text-3xl mt-1">🧩</div>
                    <div>
                        <h3 class="text-lg font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Phần đất liền</h3>
                        <p class="text-base font-bold text-slate-600 dark:text-slate-300 mt-1">Nước ta có dạng hình chữ S, hẹp ngang và trải dài theo chiều bắc – nam.</p>
                    </div>
                </li>
                <li class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                    <div class="text-3xl mt-1">🌊</div>
                    <div>
                        <h3 class="text-lg font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Vùng biển</h3>
                        <p class="text-base font-bold text-slate-600 dark:text-slate-300 mt-1">Vùng biển nước ta có diện tích khoảng 1 triệu km².</p>
                    </div>
                </li>
                <li class="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-2xl">
                    <div class="text-3xl mt-1">📍</div>
                    <div>
                        <h3 class="text-lg font-black text-slate-800 dark:text-slate-100 uppercase tracking-widest">Đơn vị hành chính</h3>
                        <p class="text-base font-bold text-slate-600 dark:text-slate-300 mt-1">Việt Nam có 63 tỉnh, thành phố trực thuộc Trung ương. Trong đó, 5 thành phố trực thuộc Trung ương là: Hà Nội, Hải Phòng, Đà Nẵng, Thành phố Hồ Chí Minh và Cần Thơ.</p>
                    </div>
                </li>
            </ul>

            <!-- Ghi nhớ -->
            <div class="mt-6 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border-2 border-emerald-200">
                <h3 class="text-xl font-black text-emerald-800 mb-3">📝 Ghi nhớ</h3>
                <ul class="space-y-2 text-base font-bold text-emerald-700">
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Việt Nam nằm ở khu vực Đông Nam Á, trên bán đảo Đông Dương</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> Lãnh thổ hình chữ S, diện tích đất liền khoảng 331 nghìn km²</li>
                    <li class="flex items-start gap-2"><span class="text-emerald-500 mt-1">✅</span> 63 tỉnh, thành phố trực thuộc trung ương</li>
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
        <h2 class="text-2xl font-black text-gray-800 dark:text-slate-100 mb-6">🏋️ Luyện tập (Tiết 1)</h2>

        <!-- ====== 1. ĐÚNG / SAI (VBT Bài 1.1 - 1.4) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mb-2">Bài tập 1 (VBT trang 5)</h3>
        ${Lesson.renderTrueFalse('ls-tf-1', [
            {
                text: 'Việt Nam nằm ở khu vực Đông Nam Á.',
                answer: true,
                explanation: 'Đúng! Nước ta thuộc khu vực Đông Nam Á của châu Á.'
            },
            {
                text: 'Việt Nam có chung đường biên giới đất liền với Thái Lan.',
                answer: false,
                explanation: 'Sai! Việt Nam có chung đường biên giới với Trung Quốc, Lào, và Cam-pu-chia, không giáp Thái Lan.'
            },
            {
                text: 'Lãnh thổ phần đất liền nước ta có dạng hình chữ S.',
                answer: true,
                explanation: 'Đúng! Hình dạng đất liền nước ta có dạng chữ S.'
            },
            {
                text: 'Hải Phòng là một trong các thành phố trực thuộc Trung ương của nước ta.',
                answer: true,
                explanation: 'Đúng! 5 thành phố là: Hà Nội, Hải Phòng, Đà Nẵng, TP Hồ Chí Minh, Cần Thơ.'
            }
        ])}

        <!-- ====== 2. ĐIỀN VÀO CHỖ TRỐNG (VBT Bài 2 - Sơ đồ) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">Bài tập 2 (VBT trang 5)</h3>
        <p class="text-base font-bold text-slate-700 dark:text-slate-300 mb-4">Hoàn thành đoạn thông tin mô tả sơ đồ ảnh hưởng của vị trí địa lí đối với tự nhiên và hoạt động sản xuất.</p>
        ${Lesson.renderFillBlanks(
            'ls-fb-1',
            'Thiên nhiên nước ta mang tính chất {0} ẩm gió mùa, thích hợp phát triển cây trồng, vật nuôi của vùng nhiệt đới. Vị trí địa lí thuận lợi phát triển loại hình giao thông {1} và hoạt động {2}. Tuy nhiên, nước ta cũng gặp nhiều thiên tai, đặc biệt là {3}.',
            ['nhiệt đới', 'vận tải biển', 'xuất nhập khẩu', 'bão', 'ôn đới', 'đường sắt', 'đóng băng'],
            ['nhiệt đới', 'vận tải biển', 'xuất nhập khẩu', 'bão']
        )}

        <!-- ====== 3. PHÂN LOẠI (VBT Bài 3) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">Bài tập 3 (VBT trang 6)</h3>
        <p class="text-base font-bold text-slate-700 dark:text-slate-300 mb-4">Mô tả đặc điểm lãnh thổ và đơn vị hành chính của Việt Nam bằng cách đưa thông tin vào cột đúng.</p>
        ${Lesson.renderCategorizing(
            'ls-cat-1',
            'Phân loại thông tin Lãnh thổ & Đơn vị hành chính',
            [
                { name: '🗺️ Bộ phận lãnh thổ', color: 'blue' },
                { name: '📍 Hình dạng đất liền', color: 'green' },
                { name: '🏛️ Đơn vị hành chính', color: 'purple' }
            ],
            [
                { text: 'Vùng đất, vùng biển, vùng trời', categoryIdx: 0 },
                { text: 'Dạng hình chữ S', categoryIdx: 1 },
                { text: 'Hẹp ngang, trải dài Bắc - Nam', categoryIdx: 1 },
                { text: '63 tỉnh, thành phố', categoryIdx: 2 },
                { text: '5 thành phố trực thuộc Trung ương', categoryIdx: 2 }
            ]
        )}

        <!-- ====== 4. HỎI ĐÁP VỚI AI (VBT Bài 7 & Trải nghiệm) ====== -->
        <h3 class="text-lg font-black text-gray-500 uppercase tracking-widest mt-8 mb-2">Vận dụng & Liên hệ (VBT trang 7)</h3>
        ${AIInteraction.renderTutor(
            'ls-tutor-1',
            'Em hãy kể tên 5 thành phố trực thuộc Trung ương của nước ta. Tỉnh hoặc thành phố nơi em đang sống có tên là gì? Nó tiếp giáp với những tỉnh/thành phố nào?',
            'Ví dụ: 5 thành phố là... Em đang sống ở...'
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
            question: 'Việt Nam không có chung đường biên giới đất liền với quốc gia nào sau đây?',
            options: ['Thái Lan', 'Lào', 'Cam-pu-chia', 'Trung Quốc'],
            answer: 0
        },
        {
            level: 1,
            question: 'Việt Nam có bao nhiêu tỉnh, thành phố trực thuộc trung ương?',
            options: ['53', '58', '63', '68'],
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
            question: 'Lãnh thổ Việt Nam có hình dạng giống chữ gì?',
            options: ['Chữ C', 'Chữ S', 'Chữ L', 'Chữ V'],
            answer: 1
        },
        // Level 3 - Vận dụng
        {
            level: 3,
            question: 'Vị trí ven Biển Đông mang lại thuận lợi gì cho Việt Nam?',
            options: [
                'Có khí hậu ôn đới lạnh quanh năm',
                'Thuận lợi phát triển giao thông vận tải biển và xuất nhập khẩu',
                'Không bị ảnh hưởng bởi bão',
                'Có nhiều sa mạc rộng lớn'
            ],
            answer: 1
        },
        {
            level: 3,
            question: 'Thành phố nào sau đây KHÔNG PHẢI là thành phố trực thuộc Trung ương?',
            options: [
                'Hà Nội',
                'Đà Nẵng',
                'Cần Thơ',
                'Huế'
            ],
            answer: 3
        },
        {
            level: 3,
            question: 'Khí hậu nhiệt đới ẩm gió mùa của Việt Nam ảnh hưởng tới tự nhiên như thế nào?',
            options: [
                'Chỉ trồng được lúa mì',
                'Thích hợp phát triển cây trồng, vật nuôi của vùng nhiệt đới',
                'Nông nghiệp kém phát triển',
                'Chỉ có băng tuyết quanh năm'
            ],
            answer: 1
        }
    ]
};
