export const lesson129 = {
    topic: "Hình học và Đo lường",
    week: "26",
    period: "129",
    title: "BÀI 55. LUYỆN TẬP CHUNG (TIẾT 3)",
    desc: "Tiếp tục ôn tập các bài toán thực tế về Diện tích và Thể tích của Hình hộp chữ nhật và Hình lập phương (Trang 62).",
    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Header Ghi nhớ -->
            <div class="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[32px] md:rounded-[48px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div class="w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center text-5xl md:text-7xl shadow-inner shrink-0 transform rotate-3 font-black italic">★</div>
                    <div>
                        <h2 class="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Kỹ năng giải toán</h2>
                        <p class="text-xl md:text-2xl text-indigo-100 font-medium leading-relaxed">Vận dụng linh hoạt các công thức để giải quyết các tình huống thực tế đầy thú vị!</p>
                    </div>
                </div>
                <!-- Abstract figures -->
                <div class="absolute -left-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Nhắc lại công thức diện tích -->
                <div class="bg-white dark:bg-slate-800 p-8 rounded-[40px] border-2 border-indigo-100 shadow-sm space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center text-2xl">📐</div>
                        <h3 class="text-2xl md:text-3xl font-black text-indigo-900 dark:text-indigo-100">Diện tích</h3>
                    </div>
                    <div class="space-y-4">
                        <div class="p-6 bg-indigo-50/50 dark:bg-slate-900 rounded-2xl border border-indigo-50 leading-relaxed text-center">
                            <p class="font-bold text-indigo-700 text-xl md:text-2xl mb-2">Hình lập phương:</p>
                            <p class="text-2xl md:text-4xl font-black tracking-tight">S<sub>tp</sub> = a × a × 6</p>
                        </div>
                        <div class="p-6 bg-blue-50/50 dark:bg-slate-900 rounded-2xl border border-blue-50 leading-relaxed text-center">
                            <p class="font-bold text-blue-700 text-xl md:text-2xl mb-2">Hình hộp chữ nhật:</p>
                            <p class="text-2xl md:text-4xl font-black tracking-tight">S<sub>tp</sub> = S<sub>xq</sub> + S<sub>đáy</sub> × 2</p>
                        </div>
                    </div>
                </div>

                <!-- Nhắc lại công thức thể tích -->
                <div class="bg-white dark:bg-slate-800 p-8 rounded-[40px] border-2 border-emerald-100 shadow-sm space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl">🧪</div>
                        <h3 class="text-2xl md:text-3xl font-black text-emerald-900 dark:text-emerald-100">Thể tích</h3>
                    </div>
                    <div class="space-y-4">
                        <div class="p-6 bg-emerald-50/50 dark:bg-slate-900 rounded-2xl border border-emerald-50 leading-relaxed text-center">
                            <p class="font-bold text-emerald-700 text-xl md:text-2xl mb-2">Thể tích (V):</p>
                            <p class="text-2xl md:text-4xl font-black tracking-tight uppercase">V = S<sub>đ</sub> × C</p>
                        </div>
                        <div class="p-6 bg-teal-50/50 dark:bg-slate-900 rounded-2xl border border-teal-50 leading-relaxed text-center">
                            <p class="font-bold text-teal-700 text-xl md:text-2xl mb-2">Quan hệ:</p>
                            <p class="text-2xl md:text-4xl font-black tracking-tight uppercase">C = V : S<sub>đ</sub></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    practice: `
        <div class="space-y-12 animate-fade-in pb-10">
            <!-- Bài 1: Chọn câu trả lời đúng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-blue-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-129-1">
                <div class="p-8 md:p-12 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">1</div>
                        <div>
                            <p class="text-3xl md:text-5xl font-black text-blue-900 dark:text-blue-100 leading-tight">Chọn câu trả lời đúng.</p>
                            <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 mt-6 leading-relaxed">
                                Mai có hình khai triển như hình bên. Hỏi Mai có thể gấp được hình lập phương nào dưới đây?
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row gap-8 items-center justify-center mb-10">
                        <div class="bg-white p-6 rounded-[32px] shadow-md border-2 border-blue-100 max-w-[400px]">
                            <img src="hinh_anh/toan/toan_tap_2/129-1-de.png" alt="Hình khai triển" class="w-full h-auto">
                        </div>
                    </div>

                    <!-- MCQ Buttons -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        <button onclick="lesson129.selectMCQ('129-1', 'A')" id="btn-129-1-A" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-3xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-4 h-full shadow-sm group">
                            <div class="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                                <img src="hinh_anh/toan/toan_tap_2/129-1-A.png" alt="Hình A" class="max-w-full max-h-full object-contain">
                            </div>
                            <span class="group-hover:text-blue-600">Hình A</span>
                        </button>
                        <button onclick="lesson129.selectMCQ('129-1', 'B')" id="btn-129-1-B" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-3xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-4 h-full shadow-sm group">
                            <div class="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                                <img src="hinh_anh/toan/toan_tap_2/129-1-B.png" alt="Hình B" class="max-w-full max-h-full object-contain">
                            </div>
                            <span class="group-hover:text-blue-600">Hình B</span>
                        </button>
                        <button onclick="lesson129.selectMCQ('129-1', 'C')" id="btn-129-1-C" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-3xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-4 h-full shadow-sm group">
                            <div class="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                                <img src="hinh_anh/toan/toan_tap_2/129-1-C.png" alt="Hình C" class="max-w-full max-h-full object-contain">
                            </div>
                            <span class="group-hover:text-blue-600">Hình C</span>
                        </button>
                        <button onclick="lesson129.selectMCQ('129-1', 'D')" id="btn-129-1-D" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-3xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-4 h-full shadow-sm group">
                            <div class="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                                <img src="hinh_anh/toan/toan_tap_2/129-1-D.png" alt="Hình D" class="max-w-full max-h-full object-contain">
                            </div>
                            <span class="group-hover:text-blue-600">Hình D</span>
                        </button>
                    </div>
                    <div id="feedback-129-1" class="mt-8 text-center text-xl md:text-2xl font-black opacity-0 transition-opacity p-6 rounded-[24px]"></div>
                </div>
            </div>

            <!-- Bài 2: Hộp nhựa -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-129-2">
                <div class="p-8 md:p-12 bg-teal-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                        <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                            Chú Nhân vừa hoàn thành mô hình quả bóng bằng các miếng gỗ. Chú muốn làm một chiếc hộp hình lập phương bằng nhựa cứng cạnh <b class="text-teal-600">2,5 dm</b> để bảo quản quả bóng. Tính diện tích nhựa cứng mà chú cần dùng để làm chiếc hộp đó.
                        </p>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-teal-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/129-2.png" alt="Hộp nhựa" class="w-full h-auto rounded-2xl max-w-[400px]">
                        </div>
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-teal-200 shadow-sm flex flex-col">
                            <p class="text-lg md:text-2xl font-black text-teal-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                            <div class="flex-grow flex flex-col gap-5">
                                <p class="text-xl font-bold text-teal-800 dark:text-teal-200 uppercase tracking-tighter">— Trình bày bài giải —</p>
                                <textarea id="wp-full-129-2" rows="5" class="w-full p-6 rounded-3xl border-2 border-teal-100 bg-teal-50/30 dark:bg-slate-900 outline-none focus:border-teal-400 text-xl md:text-2xl font-medium text-gray-700 dark:text-slate-200 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Lời giải: ...&#10;Phép tính: ..."></textarea>
                                
                                <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-teal-200 flex items-center justify-between gap-4 shadow-sm">
                                    <span class="text-xl md:text-2xl font-black text-teal-800 dark:text-teal-200">Đáp số:</span>
                                    <div class="flex items-center gap-3">
                                        <input type="number" step="0.1" id="ans-129-2" class="w-32 md:w-44 text-2xl md:text-4xl font-black text-teal-600 bg-teal-50 rounded-xl text-center outline-none p-3 border border-teal-100 focus:ring-4 focus:ring-teal-200 transition-all" placeholder="?">
                                        <span class="text-xl md:text-2xl font-black text-gray-500">dm²</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 flex justify-between items-center">
                                <div id="fb-129-2" class="text-xl font-bold"></div>
                                <button onclick="lesson129.checkEx2()" class="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center group" title="Kiểm tra">
                                    <svg class="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 3: Khối gỗ còn lại -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-purple-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-129-3">
                <div class="p-8 md:p-12 bg-purple-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                        <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                            Bác thợ mộc có một khối gỗ dạng hình hộp chữ nhật có kích thước như hình vẽ. Bác cắt đi một phần gỗ có dạng hình lập phương cạnh <b class="text-purple-600">2 dm</b> để làm đế đỡ chậu cây và phần còn lại dùng làm ghế. Tính thể tích phần khối gỗ dùng làm ghế.
                        </p>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-purple-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/129-3.png" alt="Khối gỗ" class="w-full h-auto rounded-2xl">
                        </div>
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-purple-200 shadow-sm flex flex-col">
                            <p class="text-lg md:text-2xl font-black text-purple-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                            <div class="flex-grow flex flex-col gap-5">
                                <p class="text-xl font-bold text-purple-800 dark:text-purple-200 uppercase tracking-tighter">— Trình bày bài giải —</p>
                                <textarea id="wp-full-129-3" rows="5" class="w-full p-6 rounded-3xl border-2 border-purple-100 bg-purple-50/30 dark:bg-slate-900 outline-none focus:border-purple-400 text-xl md:text-2xl font-medium text-gray-700 dark:text-slate-200 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Lời giải: ...&#10;Phép tính: ..."></textarea>
                                
                                <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-purple-200 flex items-center justify-between gap-4 shadow-sm">
                                    <span class="text-xl md:text-2xl font-black text-purple-800 dark:text-purple-200">Đáp số:</span>
                                    <div class="flex items-center gap-3">
                                        <input type="number" id="ans-129-3" class="w-32 md:w-44 text-2xl md:text-4xl font-black text-purple-600 bg-purple-50 rounded-xl text-center outline-none p-3 border border-purple-100 focus:ring-4 focus:ring-purple-200 transition-all" placeholder="?">
                                        <span class="text-xl md:text-2xl font-black text-gray-500">dm³</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 flex justify-between items-center">
                                <div id="fb-129-3" class="text-xl font-bold"></div>
                                <button onclick="lesson129.checkEx3()" class="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center group" title="Kiểm tra">
                                    <svg class="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 4: Bể nước xoay -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-amber-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-129-4">
                <div class="p-8 md:p-12 bg-amber-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">4</div>
                        <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                            Khi đặt hộp đứng như hình 1, phần nước có chiều cao là <b class="text-amber-600">8 cm</b>. Vậy khi xoay hộp đó như hình 2 thì phần nước có chiều cao là bao nhiêu cm?
                        </p>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-amber-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/129-4.png" alt="Bể nước" class="w-full h-auto rounded-2xl">
                        </div>
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-amber-200 shadow-sm flex flex-col">
                            <p class="text-lg md:text-2xl font-black text-amber-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                            <div class="flex-grow flex flex-col gap-5">
                                <p class="text-xl font-bold text-amber-800 dark:text-amber-200 uppercase tracking-tighter">— Trình bày bài giải —</p>
                                <textarea id="wp-full-129-4" rows="5" class="w-full p-6 rounded-3xl border-2 border-amber-100 bg-amber-50/30 dark:bg-slate-900 outline-none focus:border-amber-400 text-xl md:text-2xl font-medium text-gray-700 dark:text-slate-200 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Lời giải: ...&#10;Phép tính: ..."></textarea>
                                
                                <div class="p-5 bg-white dark:bg-slate-900 rounded-2xl border-2 border-dashed border-amber-200 flex items-center justify-between gap-4 shadow-sm">
                                    <span class="text-xl md:text-2xl font-black text-amber-800 dark:text-amber-200">Đáp số:</span>
                                    <div class="flex items-center gap-3">
                                        <input type="number" id="ans-129-4" class="w-32 md:w-44 text-2xl md:text-4xl font-black text-amber-600 bg-amber-50 rounded-xl text-center outline-none p-3 border border-amber-100 focus:ring-4 focus:ring-amber-200 transition-all" placeholder="?">
                                        <span class="text-xl md:text-2xl font-black text-gray-500">cm</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-6 flex justify-between items-center">
                                <div id="fb-129-4" class="text-xl font-bold"></div>
                                <button onclick="lesson129.checkEx4()" class="w-14 h-14 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center group" title="Kiểm tra">
                                    <svg class="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành Luyện tập chung 129', 100)" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl shadow-indigo-200 dark:shadow-none transition-all active:scale-95 flex items-center gap-4">
                    NỘP BÀI <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        { "question": "Một khối gỗ dạng HHCN có các kích thước 5dm, 3dm, 3dm. Thể tích là:", "options": ["45 dm³", "11 dm³", "30 dm³", "15 dm³"], "answer": 0, "level": 1 },
        { "question": "Hộp lập phương cạnh 2,5dm. Diện tích một mặt là:", "options": ["6,25 dm²", "2,5 dm²", "5 dm²", "6,25 dm³"], "answer": 0, "level": 1 },
        { "question": "Nếu cắt đi một khối gỗ thể tích 8dm³ từ khối gỗ 45dm³ thì phần còn lại là:", "options": ["37 dm³", "53 dm³", "35 dm³", "40 dm³"], "answer": 0, "level": 1 },
        { "question": "Mực nước trong bể Fig 1 cao 8cm, đáy 8x8. Thể tích nước là:", "options": ["512 cm³", "64 cm³", "192 cm³", "256 cm³"], "answer": 0, "level": 1 },
        { "question": "Thể tích nước 512 cm³, đáy mới 16x8. Chiều cao h là:", "options": ["4 cm", "8 cm", "2 cm", "16 cm"], "answer": 0, "level": 1 },

        { "question": "Diện tích toàn phần của hình lập phương cạnh a là:", "options": ["a × a × 4", "a × a × 6", "a × a × a", "a × 4 × 6"], "answer": 1, "level": 2 },
        { "question": "Một hình lập phương có diện tích một mặt là 9 cm². Thể tích của nó là:", "options": ["27 cm³", "18 cm³", "54 cm³", "81 cm³"], "answer": 0, "level": 2 },
        { "question": "Đổi 2,5 dm² sang cm² ta được:", "options": ["250 cm²", "25 cm²", "2500 cm²", "0,25 cm²"], "answer": 0, "level": 2 },
        { "question": "Muốn tính thể tích HHCN khi biết diện tích đáy S và chiều cao h:", "options": ["V = S × h", "V = S : h", "V = h : S", "V = S + h"], "answer": 0, "level": 2 },
        { "question": "HHCN có V = 120 cm³, đáy có diện tích 30 cm². Chiều cao là:", "options": ["4 cm", "40 cm", "4 dm", "4 mm"], "answer": 0, "level": 2 },

        { "question": "Gấp cạnh hình lập phương lên 2 lần thì diện tích toàn phần tăng:", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 3 },
        { "question": "Gấp cạnh hình lập phương lên 2 lần thì thể tích tăng:", "options": ["2 lần", "4 lần", "8 lần", "16 lần"], "answer": 2, "level": 3 },
        { "question": "Bình chứa 1 lít nước (1 dm³). Đổ vào hộp đáy 10x10 cm thì h là:", "options": ["10 cm", "1 cm", "100 cm", "0,1 cm"], "answer": 0, "level": 3 },
        { "question": "Một mặt hình lập phương có chu vi 20 cm. Thể tích là:", "options": ["125 cm³", "100 cm³", "150 cm³", "20 cm³"], "answer": 0, "level": 3 },
        { "question": "Khối gỗ 3dm x 3dm x 3dm. Cắt đi 1dm x 1dm x 1dm ở góc. Sxq có đổi không?", "options": ["Không đổi", "Tăng lên", "Giảm đi", "Tùy vị trí cắt"], "answer": 0, "level": 3 }
    ],
    // Logic tương tác
    selectMCQ(exId, option) {
        if (exId === '129-1') {
            const allBtns = document.querySelectorAll(`[id^="btn-129-1-"]`);
            allBtns.forEach(btn => {
                btn.classList.remove('border-blue-500', 'bg-blue-50', 'text-blue-600', 'ring-4', 'ring-blue-100');
                btn.classList.add('border-blue-100', 'bg-white', 'text-gray-400');
            });

            const selectedBtn = document.getElementById(`btn-129-1-${option}`);
            selectedBtn.classList.remove('border-blue-100', 'bg-white', 'text-gray-400');
            selectedBtn.classList.add('border-blue-500', 'bg-blue-50', 'text-blue-600', 'ring-4', 'ring-blue-100');

            const feedback = document.getElementById('feedback-129-1');
            feedback.classList.remove('opacity-0', 'text-emerald-600', 'text-red-500', 'bg-emerald-50', 'bg-red-50');

            if (option === 'B') {
                feedback.innerText = "Chính xác! Hình B chính là hình lập phương Mai gấp được. Một tư duy hình học không gian rất tốt! 🌟";
                feedback.classList.add('text-emerald-600', 'bg-emerald-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
            } else {
                feedback.innerText = "Tiếc quá, chưa đúng rồi! Hãy chú ý cặp mặt đối diện (Ngôi sao đối diện Hình vuông, Vòng tròn đối diện chữ X) không bao giờ đứng cạnh nhau nhé. 🧐";
                feedback.classList.add('text-red-500', 'bg-red-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
            }
            feedback.classList.add('opacity-100');
        }
    },
    checkEx2() {
        const input = document.getElementById('ans-129-2');
        const feedback = document.getElementById('fb-129-2');
        const val = input.value.trim().replace(',', '.');
        // 2.5 * 2.5 * 6 = 37.5
        if (val === '37.5' || val === '37,5') {
            feedback.innerHTML = `<span class="text-emerald-600">Tuyệt vời! 37,5 dm² là đáp án đúng. 🎉</span>`;
            input.classList.add('text-emerald-600', 'border-emerald-400', 'ring-4', 'ring-emerald-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerHTML = `<span class="text-red-500">Chưa đúng! Tính: 2,5 × 2,5 × 6 nhé.</span>`;
            input.classList.add('text-red-600', 'border-red-400', 'ring-4', 'ring-red-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },
    checkEx3() {
        const input = document.getElementById('ans-129-3');
        const feedback = document.getElementById('fb-129-3');
        const val = input.value.trim();
        // (5 * 3 * 3) - (2 * 2 * 2) = 45 - 8 = 37
        if (val === '37') {
            feedback.innerHTML = `<span class="text-emerald-600">Đúng rồi! Thể tích còn lại là 37 dm³. 🌟</span>`;
            input.classList.add('text-emerald-600', 'border-emerald-400', 'ring-4', 'ring-emerald-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerHTML = `<span class="text-red-500">Sai rồi! Gợi ý: V_tổng (45) - V_cắt (8).</span>`;
            input.classList.add('text-red-600', 'border-red-400', 'ring-4', 'ring-red-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },
    checkEx4() {
        const input = document.getElementById('ans-129-4');
        const feedback = document.getElementById('fb-129-4');
        const val = input.value.trim();
        // V = 8 * 8 * 8 = 512. New S đáy = 16 * 8 = 128. h = 512 / 128 = 4.
        if (val === '4') {
            feedback.innerHTML = `<span class="text-emerald-600">Chính xác! Chiều cao mực nước mới là 4 cm. 🏆</span>`;
            input.classList.add('text-emerald-600', 'border-emerald-400', 'ring-4', 'ring-emerald-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerHTML = `<span class="text-red-500">Thử lại nhé! V nước không đổi, đáy mới là 16 × 8.</span>`;
            input.classList.add('text-red-600', 'border-red-400', 'ring-4', 'ring-red-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    }
};

window.lesson129 = lesson129;
