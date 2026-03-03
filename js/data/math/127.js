export const lesson127 = {
    topic: "Hình học và Đo lường",
    week: "26",
    period: "127",
    title: "BÀI 55. LUYỆN TẬP CHUNG (TIẾT 1)",
    desc: "Bài 55: Ôn tập về hình khai triển, tính diện tích xung quanh, toàn phần và thể tích của hình hộp chữ nhật, hình lập phương (Trang 60).",
    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Hero -->
            <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 border border-indigo-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div class="w-20 h-20 md:w-28 md:h-28 bg-indigo-600 rounded-3xl flex items-center justify-center text-5xl md:text-7xl shadow-xl shadow-indigo-200 dark:shadow-indigo-900/40 shrink-0 transform rotate-6 text-white font-black italic">!</div>
                    <p class="text-2xl md:text-4xl text-indigo-700 dark:text-indigo-400 font-bold italic leading-relaxed text-center md:text-left">Luyện tập chung: Diện tích và thể tích của Hình hộp chữ nhật, Hình lập phương.</p>
                </div>
            </div>
        </div>
    `,
    practice: `
        <div class="space-y-12 animate-fade-in pb-10">
            <!-- Bài 1: Chọn câu trả lời đúng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-blue-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-127-1">
                <div class="p-8 md:p-12 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">1</div>
                        <div>
                            <p class="text-3xl md:text-5xl font-black text-blue-900 dark:text-blue-100 leading-tight">Chọn câu trả lời đúng.</p>
                            <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 mt-4 leading-relaxed">
                                Mai có thể gấp hình khai triển ở trên thành chiếc hộp nào?
                            </p>
                        </div>
                    </div>

                    <!-- Hình khai triển -->
                    <div class="flex justify-center mb-8">
                        <div class="p-8 bg-white dark:bg-slate-800 rounded-[32px] border border-blue-100 shadow-md">
                            <img src="hinh_anh/toan/toan_tap_2/127-b1-box.png" alt="Hình khai triển" class="w-full max-w-[600px] h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- MCQ Buttons -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                        <button onclick="lesson127.selectMCQ('127-1', 'A')" id="btn-127-1-A" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-3xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center gap-4">
                            Hộp A
                        </button>
                        <button onclick="lesson127.selectMCQ('127-1', 'B')" id="btn-127-1-B" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-3xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center gap-4">
                            Hộp B
                        </button>
                        <button onclick="lesson127.selectMCQ('127-1', 'C')" id="btn-127-1-C" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-3xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center gap-4">
                            Hộp C
                        </button>
                        <button onclick="lesson127.selectMCQ('127-1', 'D')" id="btn-127-1-D" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-3xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center gap-4">
                            Hộp D
                        </button>
                    </div>
                    <div id="feedback-127-1" class="mt-6 text-center text-xl md:text-2xl font-black opacity-0 transition-opacity p-4 rounded-3xl"></div>
                </div>
            </div>

            <!-- Bài 2: Hoàn thành bảng sau -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-127-2">
                <div class="p-8 md:p-12 bg-teal-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                        <h3 class="text-3xl md:text-5xl font-black text-teal-900 dark:text-teal-100 leading-tight">Hoàn thành bảng sau.</h3>
                    </div>

                    <div class="overflow-x-auto rounded-[32px] border-2 border-teal-200 bg-white">
                        <table class="w-full text-center min-w-[600px]">
                            <thead>
                                <tr>
                                    <th class="p-6 bg-rose-200/50 text-rose-900 text-2xl md:text-3xl font-black border-b border-rose-200">Hình lập phương</th>
                                    <th class="p-6 bg-rose-200/50 text-rose-900 text-2xl md:text-3xl font-black border-l border-b border-rose-200">Hộp thứ nhất</th>
                                    <th class="p-6 bg-rose-200/50 text-rose-900 text-2xl md:text-3xl font-black border-l border-b border-rose-200">Hộp thứ hai</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="p-6 bg-rose-100/30 text-2xl md:text-3xl font-bold text-rose-800 border-b border-rose-100">Độ dài cạnh</td>
                                    <td class="p-6 bg-white border-l border-b border-rose-100 text-3xl font-black text-teal-700">8 dm</td>
                                    <td class="p-6 bg-white border-l border-b border-rose-100 text-3xl font-black text-blue-700">0,5 m</td>
                                </tr>
                                <tr>
                                    <td class="p-6 bg-rose-100/30 text-2xl md:text-3xl font-bold text-rose-800 border-b border-rose-100">Diện tích xung quanh</td>
                                    <td class="p-4 bg-white border-l border-b border-rose-100">
                                        <div class="flex items-center justify-center gap-2">
                                            <input type="number" id="ans-127-2-sxq-1" class="w-24 md:w-32 text-3xl md:text-4xl font-black text-teal-600 bg-teal-50 rounded-xl text-center outline-none focus:ring-2 focus:ring-teal-400 p-2" placeholder="?">
                                            <span class="text-xl font-bold text-gray-500">dm²</span>
                                        </div>
                                    </td>
                                    <td class="p-4 bg-white border-l border-b border-rose-100">
                                        <div class="flex items-center justify-center gap-2">
                                            <input type="number" step="0.01" id="ans-127-2-sxq-2" class="w-24 md:w-32 text-3xl md:text-4xl font-black text-blue-600 bg-blue-50 rounded-xl text-center outline-none focus:ring-2 focus:ring-blue-400 p-2" placeholder="?">
                                            <span class="text-xl font-bold text-gray-500">m²</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-6 bg-rose-100/30 text-2xl md:text-3xl font-bold text-rose-800">Diện tích toàn phần</td>
                                    <td class="p-4 bg-white border-l border-rose-100">
                                        <div class="flex items-center justify-center gap-2">
                                            <input type="number" id="ans-127-2-stp-1" class="w-24 md:w-32 text-3xl md:text-4xl font-black text-teal-600 bg-teal-50 rounded-xl text-center outline-none focus:ring-2 focus:ring-teal-400 p-2" placeholder="?">
                                            <span class="text-xl font-bold text-gray-500">dm²</span>
                                        </div>
                                    </td>
                                    <td class="p-4 bg-white border-l border-rose-100">
                                        <div class="flex items-center justify-center gap-2">
                                            <input type="number" step="0.01" id="ans-127-2-stp-2" class="w-24 md:w-32 text-3xl md:text-4xl font-black text-blue-600 bg-blue-50 rounded-xl text-center outline-none focus:ring-2 focus:ring-blue-400 p-2" placeholder="?">
                                            <span class="text-xl font-bold text-gray-500">m²</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Bài 3: Nam làm chiếc hộp -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-purple-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-127-3">
                <div class="p-8 md:p-12 bg-purple-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                        <h3 class="text-3xl md:text-5xl font-bold text-purple-900 dark:text-purple-100 leading-tight">Nam làm một chiếc hộp từ hình khai triển dưới đây.</h3>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                        <!-- Hình bên trái -->
                        <div class="w-full lg:w-3/5 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-purple-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/127-b3-deploy.png" alt="Mảnh giấy khai triển" class="w-full max-w-[600px] h-auto rounded-xl">
                        </div>

                        <!-- Câu hỏi bên phải -->
                        <div class="w-full lg:w-2/5 flex flex-col justify-center">
                            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-purple-100 shadow-sm flex-1">
                                <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                    Tính <b class="text-purple-600">thể tích</b> của chiếc hộp đó.
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bài làm -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-purple-200 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-purple-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                        <textarea id="ans-127-3" rows="5" class="w-full p-6 rounded-2xl border-2 border-purple-200 bg-purple-50/50 dark:bg-slate-900 outline-none focus:border-purple-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;&#10;&#10;&#10;Đáp số: ..."></textarea>
                        <div class="mt-4 flex items-center gap-4">
                            <button onclick="Lesson.submitWordProblemAI('127-3')" class="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-black text-xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-3">Kiểm tra <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M5 13l4 4L19 7'></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 4: Việt sơn hộp gỗ -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-amber-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-127-4">
                <div class="p-8 md:p-12 bg-amber-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">4</div>
                        <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                            Việt có một chiếc hộp gỗ (có nắp) dạng hình hộp chữ nhật có chiều dài <b class="text-amber-600">25 cm</b>, chiều rộng <b class="text-amber-600">20 cm</b> và chiều cao <b class="text-amber-600">10 cm</b>. Việt đã sơn màu nâu lên các mặt xung quanh và màu vàng lên 2 mặt đáy của chiếc hộp đó. Tính diện tích phần được <b class="text-amber-700">sơn màu nâu</b>.
                        </p>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                        <!-- Hình ảnh -->
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-amber-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/127-b4-paint.png" alt="Việt sơn hộp" class="w-full h-auto rounded-2xl">
                        </div>
                        
                        <!-- Bài làm -->
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-amber-200 shadow-sm flex flex-col">
                            <div class="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-2xl mb-6">
                                <p class="text-xl md:text-2xl font-bold text-amber-800 dark:text-amber-200 italic shadow-sm">💡 Gợi ý: Diện tích phần sơn màu nâu chính là <b>Diện tích xung quanh</b> của hình hộp chữ nhật đấy!</p>
                            </div>
                            <p class="text-lg md:text-2xl font-black text-amber-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                            <textarea id="ans-127-4" rows="4" class="w-full flex-grow p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/50 dark:bg-slate-900 outline-none focus:border-amber-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;&#10;&#10;Đáp số: ..."></textarea>
                            <div class="mt-4 flex items-center gap-4">
                                <button onclick="Lesson.submitWordProblemAI('127-4')" class="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-black text-xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-3">Kiểm tra <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M5 13l4 4L19 7'></path></svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành Luyện tập chung 127', 100)" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-3">
                    NỘP BÀI <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        // Level 1
        { "question": "Muốn tính diện tích xung quanh hình lập phương, ta lấy:", "options": ["S một mặt × 4", "S một mặt × 6", "cạnh × cạnh", "cạnh × 4"], "answer": 0, "level": 1 },
        { "question": "Diện tích một mặt hình lập phương cạnh 3 cm là:", "options": ["9 cm²", "6 cm²", "3 cm²", "27 cm²"], "answer": 0, "level": 1 },
        { "question": "Hình nào có 6 mặt đều là hình chữ nhật?", "options": ["Hình lập phương", "Hình hộp chữ nhật", "Hình cầu", "Hình trụ"], "answer": 1, "level": 1 },
        { "question": "Diện tích toàn phần hình lập phương bằng diện tích một mặt nhân với:", "options": ["2", "4", "6", "8"], "answer": 2, "level": 1 },
        { "question": "Hình hộp chữ nhật có mấy mặt xung quanh?", "options": ["2", "4", "6", "8"], "answer": 1, "level": 1 },
        // Level 2
        { "question": "Diện tích xung quanh HLP cạnh 5 cm là:", "options": ["25 cm²", "100 cm²", "125 cm²", "150 cm²"], "answer": 1, "level": 2 },
        { "question": "Diện tích toàn phần HLP cạnh 4 cm là:", "options": ["16 cm²", "64 cm²", "96 cm²", "64 cm³"], "answer": 2, "level": 2 },
        { "question": "Sxq của HHCN chiều dài 5cm, rộng 3cm, cao 2cm là:", "options": ["16 cm²", "32 cm²", "62 cm²", "30 cm²"], "answer": 1, "level": 2 },
        { "question": "HHCN dài 5m, rộng 2m, cao 1m. Chu vi mặt đáy là:", "options": ["10 m", "14 m", "7 m", "14 m²"], "answer": 1, "level": 2 },
        { "question": "Một cái hộp không nắp hình LP cạnh 1 dm. Số mặt cần tính là:", "options": ["4 mặt", "5 mặt", "6 mặt", "1 mặt"], "answer": 1, "level": 2 },
        // Level 3
        { "question": "Stp của HLP là 150 cm². Diện tích 1 mặt là:", "options": ["15 cm²", "25 cm²", "30 cm²", "50 cm²"], "answer": 1, "level": 3 },
        { "question": "HHCN dài 8cm, rộng 6cm, cao 5cm. Stp là:", "options": ["140 cm²", "236 cm²", "48 cm²", "240 cm²"], "answer": 1, "level": 3 },
        { "question": "Nếu tăng cạnh HLP lên gấp 2 lần, thì Sxq tăng gấp mấy lần?", "options": ["2 lần", "4 lần", "8 lần", "Không đổi"], "answer": 1, "level": 3 },
        { "question": "Quyển thước HHCN có kích thước 25×20×10 cm. Sxq là:", "options": ["900 cm²", "1000 cm²", "500 cm²", "1900 cm²"], "answer": 0, "level": 3 },
        { "question": "Một căn phòng HHCN dài 8m, rộng 5m, cao 4m. Sxq của tường là:", "options": ["104 m²", "40 m²", "184 m²", "200 m²"], "answer": 0, "level": 3 }
    ],
    // Logic MCQ
    selectMCQ(exId, option) {
        if (exId === '127-1') {
            const allBtns = document.querySelectorAll(`[id^="btn-127-1-"]`);
            allBtns.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white', 'border-transparent');
                btn.classList.add('bg-white', 'text-gray-400', 'border-blue-100');
            });

            const selectedBtn = document.getElementById(`btn-127-1-${option}`);
            selectedBtn.classList.remove('bg-white', 'text-gray-400', 'border-blue-100');
            selectedBtn.classList.add('bg-blue-600', 'text-white', 'border-transparent');

            const feedback = document.getElementById('feedback-127-1');
            feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-red-500', 'bg-emerald-50', 'bg-red-50');

            // Đáp án: C. Hình hộp chữ nhật (vì có 4 hcn dài, 2 nắp tròn) -> Không. Đó là hình trụ.
            // Phân tích hình: 1 hcn dài ở giữa, 2 hình tròn ở trên và dưới = HÌNH TRỤ D. Wait, hình trụ trên là B, cầu D, HHCN là C, HLP là A.
            // Trong hình khai triển: 1 hình chữ nhật, ở giữa nó có 2 hình tròn (trên và dưới). Đó là KHAI TRIỂN HÌNH TRỤ (Hình B).

            if (option === 'B') {
                feedback.innerText = "Chính xác! 🎉 Khai triển gồm 1 hình chữ nhật và 2 hình tròn sẽ gấp được thành Hình trụ (Hộp B).";
                feedback.classList.add('text-emerald-500', 'bg-emerald-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
            } else {
                feedback.innerText = "Chưa đúng hình! Hãy nhìn kĩ có 2 hình tròn làm đáy, gấp lại sẽ thành hình gì tròn tròn giống cái ống nhỉ? 📦";
                feedback.classList.add('text-red-500', 'bg-red-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
            }
            feedback.classList.add('opacity-100');
        }
    }
};

window.lesson127 = lesson127;
