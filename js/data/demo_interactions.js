// js/data/demo_interactions.js
// DEMO TẤT CẢ TƯƠNG TÁC
// File này chứa toàn bộ các dạng bài tập tương tác có thể sử dụng cho tất cả các môn

export const lessonDemo = {
    topic: 'Mẫu Tương Tác Chuẩn',
    week: '0',
    period: 'DEMO',
    title: 'BÀI HỌC MẪU: TỔNG HỢP CÁC TÍNH NĂNG TƯƠNG TÁC',
    description: 'Tài liệu tham khảo đầy đủ nhất về các dạng bài tập tương tác: Toán học 3D, Khoa học mô phỏng, Tiếng Việt kéo thả...',

    content() {
        return `
        <!-- ====== HERO SECTION ====== -->
        <div class="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 p-8 md:p-16 mb-12 text-white shadow-2xl animate-fade-in">
            <div class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/4 -translate-x-1/4 blur-2xl"></div>
            <div class="relative z-10 text-center md:text-left">
                <div class="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full mb-6 text-sm font-black uppercase tracking-widest backdrop-blur-md border border-white/30">
                    <span>🌟</span> Premium Interactive System
                </div>
                <h1 class="text-4xl md:text-6xl font-black mb-6 leading-tight italic tracking-tighter">Hệ Thống Tương Tác Đa Năng</h1>
                <p class="text-xl md:text-2xl font-bold opacity-90 max-w-3xl leading-relaxed mx-auto md:mx-0">EduRobot cung cấp bộ công cụ tương tác mạnh mẽ, giúp bài giảng sinh động và lôi cuốn học sinh hơn bao giờ hết.</p>
            </div>
        </div>

        <!-- ====== PHÒNG THÍ NGHIỆM HÌNH HỌC 3D (Geometry Lab) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-indigo-900 border-l-8 border-indigo-500 pl-4 mb-6 uppercase italic">1. Khám phá Hình học 3D</h2>
            <p class="text-lg font-bold text-gray-600 mb-6">Học sinh có thể trực tiếp điều chỉnh kích thước và nhìn thấy sự thay đổi của hình khối cùng kết quả tính toán ngay lập tức.</p>
            ${Lesson.renderDynamicGeometryLab(
            'demo-geo-3d',
            'cube',
            {
                controls: {
                    size: { label: 'Cạnh của hình lập phương', min: 20, max: 100, value: 50, unit: ' cm' }
                },
                initialResult: 'Sơ đồ khối 3D trực quan'
            }
        )}
        </div>

        <!-- ====== BẢN ĐỒ TƯƠNG TÁC (Map) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-rose-800 border-l-8 border-rose-500 pl-4 mb-6 uppercase italic">2. Bản đồ tương tác</h2>
            <p class="text-lg font-bold text-gray-600 mb-6">Tích hợp bản đồ Leaflet mượt mà, phù hợp cho môn Lịch sử và Địa lý.</p>
            ${Lesson.renderInteractiveMap(
            'demo-map-1',
            'Địa lý Việt Nam',
            'Nhấn vào các biểu tượng để khám phá thông tin từng khu vực.',
            [
                { name: 'Hà Nội', lat: 21.028511, lng: 105.804817, info: 'Thủ đô ngàn năm văn hiến', emoji: '🏛️' },
                { name: 'TP. Hồ Chí Minh', lat: 10.776530, lng: 106.700981, info: 'Thành phố năng động và sầm uất', emoji: '🏙️' },
                { name: 'Đà Nẵng', lat: 16.0544, lng: 108.2022, info: 'Thành phố của những cây cầu', emoji: '🌉' }
            ]
        )}
        </div>

        <!-- ====== KÉO THẢ CÔNG THỨC (Math Formula) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-blue-900 border-l-8 border-blue-500 pl-4 mb-6 uppercase italic">3. Xây dựng công thức</h2>
            ${Lesson.renderDragDropFormula(
            'demo-formula-1',
            'Công thức tính Diện tích hình chữ nhật',
            ['S = [[slot]] x [[slot]]'],
            ['Chiều dài', 'Chiều rộng', 'Chiều cao', 'Bán kính']
        )}
        </div>
        `;
    },

    practice() {
        return `
        <!-- ====== PHÉP TÍNH DỌC (Math Vertical) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-emerald-900 border-l-8 border-emerald-500 pl-4 mb-6 uppercase italic">4. Phép tính đặt dọc</h2>
            <p class="text-lg font-bold text-gray-600 mb-4">Hỗ trợ các phép tính đặt dọc chuyên nghiệp với kiểm tra kết quả tự động.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${Lesson.renderVerticalCalculation('demo-calc-1', '125.5', 'x', '3', '376.5', 1)}
                ${Lesson.renderVerticalCalculation('demo-calc-2', '1000', '-', '456', '544', 0)}
            </div>
        </div>

        <!-- ====== NHẬP PHÂN SỐ (Fraction Input) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-amber-900 border-l-8 border-amber-500 pl-4 mb-6 uppercase italic">5. Nhập phân số</h2>
            ${Lesson.renderFractionInput('demo-frac-1', 'Phân số biểu thị một nửa là:', '1', '2')}
        </div>

        <!-- ====== NỐI CẶP ĐÔI (Matching) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-indigo-900 border-l-8 border-indigo-500 pl-4 mb-6 uppercase italic">6. Nối cặp thông minh</h2>
            ${Lesson.renderMatchingExercise('demo-match-1', [
            { left: '1 thế kỉ', right: '100 năm' },
            { left: '1 năm', right: '12 tháng' },
            { left: '1 tuần', right: '7 ngày' }
        ])}
        </div>

        <!-- ====== ĐÚNG / SAI (True/False) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-cyan-900 border-l-8 border-cyan-500 pl-4 mb-6 uppercase italic">7. Đúng hay Sai?</h2>
            ${Lesson.renderTrueFalse('demo-tf-1', 'Kiểm tra nhận định', [
            { q: '1 năm nhuận có 366 ngày.', a: true, explanation: 'Chính xác! Cứ 4 năm lại có 1 năm nhuận.' },
            { q: 'Số 0 là số tự nhiên bé nhất.', a: true, explanation: 'Đúng vậy, tập hợp N bắt đầu từ số 0.' }
        ])}
        </div>

        <!-- ====== PHÂN LOẠI (Categorizing) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-purple-900 border-l-8 border-purple-500 pl-4 mb-6 uppercase italic">8. Phân loại đối tượng</h2>
            ${Lesson.renderCategorizing(
            'demo-cat-1',
            'Phân loại động vật',
            ['Động vật dưới nước', 'Động vật trên cạn'],
            [
                { text: 'Con Cá', categoryIndex: 0 },
                { text: 'Con Bò', categoryIndex: 1 },
                { text: 'Con Tôm', categoryIndex: 0 },
                { text: 'Con Gà', categoryIndex: 1 }
            ]
        )}
        </div>

        <!-- ====== HỎI ĐÁP VỚI AI (AI Tutor) ====== -->
        <div class="mb-12">
            <h2 class="text-3xl font-black text-slate-900 border-l-8 border-slate-500 pl-4 mb-6 uppercase italic">9. Gia sư AI thông minh</h2>
            <p class="text-lg font-bold text-gray-600 mb-4">Học sinh gõ lời giải bài toán, AI sẽ phân tích và gợi ý hướng đi đúng đắn.</p>
            ${AIInteraction.renderTutor(
            'demo-ai-1',
            'Em hãy giải thích cách tính chu vi hình tròn nếu biết bán kính.',
            'Nhập câu trả lời của em tại đây...'
        )}
        </div>
        `;
    },

    quizPool: [
        {
            level: 1,
            question: 'Dạng tương tác nào giúp quan sát hình khối trực quan nhất?',
            options: ['Điền khuyết', 'Geometry Lab 3D', 'Nối cặp', 'Đúng/Sai'],
            answer: 1
        },
        {
            level: 2,
            question: 'EduRobot hỗ trợ các môn học nào?',
            options: ['Chỉ môn Toán', 'Chỉ môn Tiếng Việt', 'Đa môn học (Toán, TV, Khoa học...)', 'Không hỗ trợ môn nào'],
            answer: 2
        }
    ]
};
