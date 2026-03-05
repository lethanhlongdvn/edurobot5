export const lesson126 = {
    topic: "Hình học và Đo lường",
    week: "26",
    period: "126",
    title: "BÀI 54. THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG THỂ TÍCH",
    desc: "Bài 54: Vận dụng kiến thức thể tích để tính số lượng hộp xếp vừa vào thùng chứa, ước lượng không gian thực tế và trò chơi Đường đua (Trang 58-59).",
    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Hero -->
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 border border-orange-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div class="w-20 h-20 md:w-28 md:h-28 bg-orange-600 rounded-3xl flex items-center justify-center text-5xl md:text-7xl shadow-xl shadow-orange-200 dark:shadow-orange-900/40 shrink-0 transform rotate-6 text-white">📦</div>
                    <p class="text-2xl md:text-4xl text-orange-700 dark:text-orange-400 font-bold italic leading-relaxed text-center md:text-left">Thực hành tính toán và ước lượng thể tích một số hình khối trong thực tế.</p>
                </div>
            </div>
        </div>
    `,
    practice: `
        <div class="space-y-12 animate-fade-in pb-10">
            <!-- Bài 1: Xếp hộp vào thùng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-orange-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-126-1">
                <div class="p-8 md:p-12 bg-orange-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-6">
                        <div class="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">1</div>
                        <div>
                            <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                Công ty của mẹ Mai đặt mua 100 chậu cây tái chế của lớp 5A để làm quà tặng cho mỗi nhân viên nhân ngày Môi trường Thế giới. Lớp 5A đã chọn mẫu hộp dạng hình lập phương cạnh <b class="text-orange-600">2 dm</b> như hình bên để đựng mỗi chậu cây.
                            </p>
                        </div>
                    </div>

                    <!-- Hình bên trái + Câu hỏi bên phải -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-orange-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/126-b1-box.png" alt="Hộp và thùng" class="w-full h-auto rounded-2xl">
                        </div>
                        <div class="w-full lg:w-1/2 flex flex-col gap-6">
                            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-orange-100 shadow-sm">
                                <p class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                    <span class="text-orange-600 font-black">a)</span> Tính thể tích của mẫu hộp đó.
                                </p>
                            </div>
                            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-orange-100 shadow-sm flex-1">
                                <p class="text-3xl md:text-5xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                    <span class="text-orange-600 font-black">b)</span> Các bạn lớp 5A dự định xếp các hộp đó vào thùng để thuận tiện cho việc vận chuyển. Quan sát kích thước thùng và ước lượng số hộp có thể xếp vào 1 thùng.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài làm -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-orange-200 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-orange-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                        <textarea id="ans-126-1" rows="5" class="w-full p-6 rounded-2xl border-2 border-orange-200 bg-orange-50/50 dark:bg-slate-900 outline-none focus:border-orange-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;a) Thể tích mẫu hộp: ...&#10;b) Thể tích thùng: ...&#10;   Số hộp xếp được: ...&#10;Đáp số: ..."></textarea>
                        <div class="mt-6 flex justify-end">
                            <button onclick="Lesson.submitWordProblemAI('126-1')" class="w-14 h-14 bg-orange-600 hover:bg-orange-700 text-white font-black text-2xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm bài">E</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 2: Ước lượng phòng học -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-blue-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-126-2">
                <div class="p-8 md:p-12 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-6">
                        <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                        <div>
                            <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                Em hãy ước lượng chiều rộng, chiều dài, chiều cao phòng học của em. Nếu trường em có một phòng kho cùng kích thước với phòng học của em thì phòng kho đó có thể xếp được nhiều nhất bao nhiêu thùng đồ dạng hình lập phương có thể tích <b class="text-blue-600">1 m³</b>?
                            </p>
                        </div>
                    </div>

                    <!-- Hình bên trái + Bài làm bên phải -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-blue-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/126-b2-room.png" alt="Phòng học" class="w-full h-auto rounded-2xl">
                        </div>
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-blue-200 shadow-sm flex flex-col">
                            <p class="text-lg md:text-2xl font-black text-blue-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                            <textarea id="ans-126-2" rows="5" class="w-full flex-grow p-6 rounded-2xl border-2 border-blue-200 bg-blue-50/50 dark:bg-slate-900 outline-none focus:border-blue-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;Ước lượng phòng học: dài ... m, rộng ... m, cao ... m&#10;Thể tích phòng: ...&#10;Số thùng 1m³ xếp được: ...&#10;Đáp số: ... thùng"></textarea>
                            <div class="mt-6 flex justify-end">
                                <button onclick="Lesson.submitWordProblemAI('126-2')" class="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white font-black text-2xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm bài">E</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TRÒ CHƠI: ĐƯỜNG ĐUA -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-emerald-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-126-game">
                <div class="p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-teal-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-center gap-5 mb-8">
                        <div class="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🏁</div>
                        <h3 class="text-3xl md:text-5xl font-black text-emerald-800 dark:text-emerald-100 leading-tight uppercase">Trò chơi: Đường đua</h3>
                    </div>

                    <!-- Luật chơi + Hình -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                        <div class="w-full lg:w-1/2 space-y-6">
                            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-emerald-100 shadow-sm">
                                <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-4">📋 Chuẩn bị</p>
                                <p class="text-xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">Một số hộp có dạng hình hộp chữ nhật và hình lập phương đặt ở xung quanh lớp học.</p>
                            </div>
                            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-emerald-100 shadow-sm">
                                <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-4">🎯 Cách chơi</p>
                                <ul class="space-y-4 text-xl md:text-2xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                    <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Chơi theo nhóm.</li>
                                    <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Tại mỗi lượt chơi, giáo viên đọc một số đo thể tích. Các nhóm quan sát, ước lượng và lựa chọn một hộp có số đo thể tích bằng hoặc gần bằng số đo thể tích giáo viên vừa đọc.</li>
                                    <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Nhóm tìm được hộp có số đo thể tích bằng hoặc gần nhất với số đo thể tích của giáo viên thì được <b class="text-emerald-600">cộng 1 điểm</b>.</li>
                                    <li class="flex items-start gap-3"><span class="text-emerald-500 shrink-0">▸</span> Trò chơi kết thúc sau <b class="text-emerald-600">5 lượt chơi</b>. Nhóm giành được nhiều điểm nhất là nhóm thắng cuộc.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-emerald-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/126-game.png" alt="Trò chơi Đường đua" class="w-full h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- Bảng điểm trò chơi -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-emerald-200 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-emerald-600 uppercase tracking-widest mb-6">🏆 Bảng điểm</p>
                        <div class="overflow-auto rounded-2xl border-2 border-emerald-200">
                            <table class="w-full text-center">
                                <thead>
                                    <tr>
                                        <th class="p-4 bg-emerald-600 text-white text-xl font-black">Lượt</th>
                                        <th class="p-4 bg-emerald-600 text-white text-xl font-black border-l border-emerald-500">GV đọc (cm³/dm³)</th>
                                        <th class="p-4 bg-blue-600 text-white text-xl font-black border-l border-blue-500">Nhóm 1</th>
                                        <th class="p-4 bg-rose-600 text-white text-xl font-black border-l border-rose-500">Nhóm 2</th>
                                        <th class="p-4 bg-amber-600 text-white text-xl font-black border-l border-amber-500">Nhóm 3</th>
                                        <th class="p-4 bg-purple-600 text-white text-xl font-black border-l border-purple-500">Nhóm 4</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-t border-emerald-100"><td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">1</td><td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="..."></td><td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-purple-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td></tr>
                                    <tr class="border-t border-emerald-100"><td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">2</td><td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="..."></td><td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-purple-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td></tr>
                                    <tr class="border-t border-emerald-100"><td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">3</td><td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="..."></td><td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-purple-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td></tr>
                                    <tr class="border-t border-emerald-100"><td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">4</td><td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="..."></td><td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-purple-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td></tr>
                                    <tr class="border-t border-emerald-100"><td class="p-3 bg-emerald-50 font-black text-xl text-emerald-800">5</td><td class="p-3 border-l border-emerald-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="..."></td><td class="p-3 border-l border-blue-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-rose-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-amber-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td><td class="p-3 border-l border-purple-100"><input class="w-full text-center text-xl font-bold bg-transparent outline-none" placeholder="—"></td></tr>
                                    <tr class="border-t-4 border-emerald-300 bg-emerald-50"><td colspan="2" class="p-4 font-black text-2xl text-emerald-800 text-right">TỔNG ĐIỂM</td><td class="p-4 border-l border-blue-200"><input class="w-full text-center text-2xl font-black text-blue-600 bg-transparent outline-none" placeholder="0"></td><td class="p-4 border-l border-rose-200"><input class="w-full text-center text-2xl font-black text-rose-600 bg-transparent outline-none" placeholder="0"></td><td class="p-4 border-l border-amber-200"><input class="w-full text-center text-2xl font-black text-amber-600 bg-transparent outline-none" placeholder="0"></td><td class="p-4 border-l border-purple-200"><input class="w-full text-center text-2xl font-black text-purple-600 bg-transparent outline-none" placeholder="0"></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành Thực hành thể tích', 100)" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-3">
                    NỘP BÀI <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        // Level 1
        { "question": "Thể tích hình lập phương cạnh 2 dm là:", "options": ["4 dm³", "8 dm³", "12 dm³", "16 dm³"], "answer": 1, "level": 1 },
        { "question": "1 m³ bằng bao nhiêu dm³?", "options": ["10 dm³", "100 dm³", "1000 dm³", "10000 dm³"], "answer": 2, "level": 1 },
        { "question": "Hộp hình lập phương cạnh 5 cm. Thể tích là:", "options": ["25 cm³", "75 cm³", "125 cm³", "150 cm³"], "answer": 2, "level": 1 },
        { "question": "Khối rubik cạnh 6 cm có thể tích:", "options": ["36 cm²", "216 cm²", "36 cm³", "216 cm³"], "answer": 3, "level": 1 },
        { "question": "1 dm³ bằng bao nhiêu cm³?", "options": ["10 cm³", "100 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 1 },
        // Level 2
        { "question": "Thùng hình hộp chữ nhật 6×4×4 dm. Xếp hộp LP cạnh 2dm. Được bao nhiêu hộp?", "options": ["8 hộp", "12 hộp", "16 hộp", "24 hộp"], "answer": 1, "level": 2 },
        { "question": "Phòng học dài 8m, rộng 6m, cao 3m. Thể tích phòng là:", "options": ["48 m³", "96 m³", "144 m³", "288 m³"], "answer": 2, "level": 2 },
        { "question": "Phòng 144 m³ xếp thùng 1 m³. Xếp được tối đa:", "options": ["14 thùng", "48 thùng", "100 thùng", "144 thùng"], "answer": 3, "level": 2 },
        { "question": "Hộp LP cạnh 2 dm, thể tích = 8 dm³. Cần bao nhiêu hộp để xếp đầy thùng 96 dm³?", "options": ["8 hộp", "10 hộp", "12 hộp", "16 hộp"], "answer": 2, "level": 2 },
        { "question": "100 hộp LP cạnh 2dm. Cần ít nhất bao nhiêu thùng (mỗi thùng chứa 12 hộp)?", "options": ["8 thùng", "9 thùng", "10 thùng", "12 thùng"], "answer": 1, "level": 2 },
        // Level 3
        { "question": "Thùng 6×4×4 dm chứa hộp LP cạnh 2dm: theo chiều dài xếp được:", "options": ["2 hộp", "3 hộp", "4 hộp", "6 hộp"], "answer": 1, "level": 3 },
        { "question": "Ước lượng: vật nào có thể tích khoảng 1 dm³?", "options": ["Cục tẩy", "Hộp sữa", "Tủ lạnh", "Bàn học"], "answer": 1, "level": 3 },
        { "question": "Phòng 10m × 8m × 4m. Xếp thùng LP cạnh 2m. Số thùng tối đa:", "options": ["10 thùng", "20 thùng", "40 thùng", "80 thùng"], "answer": 2, "level": 3 },
        { "question": "1 m³ = ? dm³ = ? cm³", "options": ["100 dm³ = 10000 cm³", "1000 dm³ = 100000 cm³", "1000 dm³ = 1000000 cm³", "100 dm³ = 1000000 cm³"], "answer": 2, "level": 3 },
        { "question": "Hộp LP cạnh 0,5m. Bao nhiêu hộp xếp đầy thùng 1 m³?", "options": ["2 hộp", "4 hộp", "8 hộp", "16 hộp"], "answer": 2, "level": 3 }
    ]
};

window.lesson126 = lesson126;
