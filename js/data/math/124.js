import { Lesson } from '../../components/Lesson.js';

export const lesson124 = {
    id: "math_5_124",
    subject: "Toán học",
    title: "Bài 53. Thể tích hình lập phương",
    subtitle: "Dựa trên thể tích hình hộp chữ nhật để tính thể tích hình lập phương (Trang 54-55)",
    week: "25",
    period: "124",
    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Hero Title -->
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] md:rounded-[48px] p-8 md:p-12 border border-purple-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div class="w-20 h-20 md:w-28 md:h-28 bg-purple-600 rounded-3xl flex items-center justify-center text-4xl md:text-7xl shadow-xl shadow-purple-200 dark:shadow-purple-900/40 shrink-0 transform rotate-6 text-white">🧊</div>
                    <div class="text-center md:text-left">
                        <h2 class="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 leading-tight uppercase">Thể tích hình lập phương</h2>
                        <p class="text-lg md:text-2xl text-purple-700 dark:text-purple-400 font-bold italic leading-relaxed">Vì hình lập phương là hình hộp chữ nhật có ba kích thước bằng nhau nên việc tính toán vô cùng đơn giản!</p>
                    </div>
                </div>
            </div>

            <!-- Khám phá -->
            <div class="bg-white p-3 rounded-[40px] shadow-xl border border-purple-100 dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
                <div class="p-8 md:p-12 bg-purple-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-black shrink-0">💡</div>
                        <h3 class="text-2xl md:text-4xl font-bold text-purple-900 dark:text-purple-100 leading-tight">Khám phá công thức</h3>
                    </div>
                    
                    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-center">
                        <img src="hinh_anh/toan/toan_tap_2/124-khampha.png" alt="Khám phá" class="w-full max-w-[500px] h-auto rounded-3xl shadow-xl border-4 border-white transition-transform hover:scale-105">
                        <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm flex items-center gap-6 border-2 border-dashed border-purple-200">
                            <div class="w-16 h-16 bg-purple-600 rounded-2xl shrink-0 flex items-center justify-center text-white font-black text-4xl shadow-lg">!</div>
                            <p class="text-xl md:text-3xl font-black text-gray-800 dark:text-white leading-tight">Hình lập phương có <span class="text-purple-600 underline underline-offset-8 decoration-4">Dài = Rộng = Cao</span>.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Công thức Ghi nhớ -->
            <div class="bg-gradient-to-r from-pink-500 to-rose-600 p-8 md:p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
                <div class="flex flex-col md:flex-row items-center gap-10">
                   <img src="hinh_anh/toan/toan_tap_2/124-formula.png" alt="Công thức" class="w-full max-w-[280px] h-auto rounded-3xl border-4 border-pink-400/50 shadow-2xl group-hover:rotate-3 transition-transform">
                   <div class="text-center md:text-left space-y-4">
                        <p class="text-sm font-black uppercase tracking-[0.3em] opacity-80 bg-white/20 inline-block px-4 py-1 rounded-full">Ghi nhớ quan trọng</p>
                        <p class="text-5xl md:text-8xl font-black drop-shadow-lg tracking-tight">V = a &times; a &times; a</p>
                        <p class="text-xl md:text-2xl italic font-bold opacity-90">(Trong đó <span class="text-yellow-300">a</span> là độ dài của một cạnh)</p>
                   </div>
                </div>
                <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    `,
    practice: `
        <div class="space-y-12 animate-fade-in pb-10">
            <!-- Bài tập 1: Bảng tính -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-124-1">
                <div class="p-8 md:p-12 bg-teal-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-10">
                        <div class="w-12 h-12 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-xl font-black shrink-0">1</div>
                        <h3 class="text-2xl md:text-4xl font-bold text-teal-800 dark:text-teal-100 leading-tight">Hoàn thành bảng tính thể tích cho các hình lập phương dưới đây:</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full border-separate border-spacing-4">
                            <thead>
                                <tr class="text-lg md:text-2xl font-black text-teal-900 uppercase">
                                    <th class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm text-left">Đại lượng</th>
                                    <th class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (1)</th>
                                    <th class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (2)</th>
                                    <th class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (3)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td class="p-8 bg-teal-100 dark:bg-teal-900/40 rounded-3xl font-black text-xl md:text-2xl text-teal-900">Cạnh (a)</td>
                                    <td class="p-8 bg-white dark:bg-slate-800 rounded-3xl font-black text-2xl md:text-4xl text-rose-500">10 cm</td>
                                    <td class="p-8 bg-white dark:bg-slate-800 rounded-3xl font-black text-2xl md:text-4xl text-rose-500">2,5 dm</td>
                                    <td class="p-8 bg-white dark:bg-slate-800 rounded-3xl font-black text-2xl md:text-4xl text-rose-500">0,4 m</td>
                                </tr>
                                <tr class="text-center">
                                    <td class="p-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-3xl font-bold text-xl md:text-2xl text-emerald-900 uppercase">Thể tích (V)</td>
                                    <td class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-4 border-teal-200">
                                        <input type="number" id="ans-124-1a" class="w-full text-3xl md:text-5xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?">
                                    </td>
                                    <td class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-4 border-teal-200">
                                        <input type="number" step="0.001" id="ans-124-1b" class="w-full text-3xl md:text-5xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?">
                                    </td>
                                    <td class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-4 border-teal-200">
                                        <input type="number" step="0.001" id="ans-124-1c" class="w-full text-3xl md:text-5xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2: Bánh bông lan -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-orange-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-124-2">
                <div class="p-8 md:p-12 bg-orange-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                        <h3 class="text-3xl md:text-5xl font-black text-orange-900 dark:text-orange-100 leading-tight">Bài toán về bánh bông lan</h3>
                    </div>

                    <!-- Đề bài 1 bên + Dữ kiện 1 bên -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                        <!-- Đề bài bên trái -->
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-orange-100 shadow-sm">
                            <p class="text-2xl md:text-3xl font-bold text-orange-900 dark:text-orange-100 leading-relaxed">
                                Một chiếc bánh bông lan hình hộp chữ nhật có đáy là <b class="text-orange-600">hình vuông cạnh 12 cm</b>, chiều cao <b class="text-orange-600">6 cm</b>.
                            </p>
                            <div class="mt-6 space-y-4">
                                <p class="text-xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                    <span class="text-orange-600 font-black">a)</span> Tính thể tích của chiếc bánh đó.
                                </p>
                                <p class="text-xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                    <span class="text-orange-600 font-black">b)</span> Rô-bốt đã cắt một miếng bánh <b class="text-orange-600">hình lập phương cạnh 6 cm</b> của chiếc bánh đó để mời Mi. Tính thể tích phần bánh còn lại.
                                </p>
                            </div>
                        </div>

                        <!-- Dữ kiện quan trọng bên phải -->
                        <div class="w-full lg:w-1/2 flex flex-col gap-6">
                            <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-dashed border-orange-300 flex-1 flex flex-col justify-center">
                                <p class="text-sm font-black text-orange-400 uppercase tracking-widest mb-4">📋 Dữ kiện</p>
                                <div class="space-y-4">
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-xl">🍰</div>
                                        <p class="text-2xl md:text-3xl font-black text-orange-800">Bánh: 12 × 12 × 6 cm</p>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <div class="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center text-xl">✂️</div>
                                        <p class="text-2xl md:text-3xl font-black text-rose-600">Cắt: lập phương cạnh 6 cm</p>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-orange-100 dark:bg-orange-900/30 p-6 rounded-2xl">
                                <p class="text-lg md:text-xl font-bold text-orange-700 italic">💡 Gợi ý: Đáy hình vuông → chiều dài = chiều rộng = 12 cm</p>
                            </div>
                        </div>
                    </div>

                    <!-- Khu vực bài làm -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-orange-200 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-orange-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                        <textarea id="ans-124-2" rows="5" class="w-full p-6 rounded-2xl border-2 border-orange-200 bg-orange-50/50 dark:bg-slate-900 outline-none focus:border-orange-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;a) Thể tích chiếc bánh: V = 12 × 12 × 6 = ...&#10;b) Thể tích miếng cắt: V = 6 × 6 × 6 = ...&#10;   Thể tích phần còn lại: ...&#10;Đáp số: a) ... cm³   b) ... cm³"></textarea>
                        <div class="mt-4 flex items-center gap-4">
                            <button onclick="Lesson.submitWordProblemAI('124-2')" class="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black text-xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-3">Kiểm tra <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M5 13l4 4L19 7'></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3: Chọn câu trả lời đúng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-rose-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-124-3">
                <div class="p-8 md:p-12 bg-rose-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-6">
                        <div class="w-14 h-14 bg-rose-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                        <h3 class="text-3xl md:text-5xl font-black text-rose-900 dark:text-rose-100 leading-tight">Chọn câu trả lời đúng.</h3>
                    </div>

                    <!-- Đề bài bên trái + Hình bên phải -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-rose-100 shadow-sm">
                            <p class="text-2xl md:text-3xl font-bold text-rose-900 dark:text-rose-100 leading-relaxed">
                                Mai và Rô-bốt xếp được hai hình từ các hình lập phương nhỏ như hình sau.
                            </p>
                        </div>
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-rose-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/124-b3-mairobot.png" alt="Hình của Mai và Rô-bốt" class="w-full h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- Câu a -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-rose-100 mb-6">
                        <p class="text-xl md:text-3xl font-black text-rose-600 mb-6"><span class="text-rose-800">a)</span> Mai cần bỏ đi bao nhiêu hình lập phương nhỏ để nhận được hình như của Rô-bốt?</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button onclick="lesson124.selectMCQ('124-3a', 'A')" id="btn-124-3a-A" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">A. 12 hình</button>
                            <button onclick="lesson124.selectMCQ('124-3a', 'B')" id="btn-124-3a-B" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">B. 10 hình</button>
                            <button onclick="lesson124.selectMCQ('124-3a', 'C')" id="btn-124-3a-C" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">C. 8 hình</button>
                            <button onclick="lesson124.selectMCQ('124-3a', 'D')" id="btn-124-3a-D" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">D. 6 hình</button>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-rose-100 mb-6">
                        <p class="text-xl md:text-3xl font-black text-rose-600 mb-6"><span class="text-rose-800">b)</span> Nếu mỗi hình lập phương nhỏ có cạnh <b class="text-rose-800">2 cm</b> thì thể tích hình của Rô-bốt là bao nhiêu xăng-ti-mét khối?</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button onclick="lesson124.selectMCQ('124-3b', 'A')" id="btn-124-3b-A" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">A. 96 cm³</button>
                            <button onclick="lesson124.selectMCQ('124-3b', 'B')" id="btn-124-3b-B" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">B. 72 cm³</button>
                            <button onclick="lesson124.selectMCQ('124-3b', 'C')" id="btn-124-3b-C" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">C. 64 cm³</button>
                            <button onclick="lesson124.selectMCQ('124-3b', 'D')" id="btn-124-3b-D" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">D. 32 cm³</button>
                        </div>
                    </div>

                    <div id="feedback-124-3" class="text-center text-xl md:text-2xl font-black opacity-0 transition-opacity p-6 rounded-3xl"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành Bài Thể tích hình lập phương', 100)" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-3">
                    NỘP BÀI <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        { "question": "Thể tích hình lập phương có cạnh 5cm là:", "options": ["15 cm³", "25 cm³", "125 cm³", "50 cm³"], "answer": 2, "level": 1 },
        { "question": "Muốn tính thể tích hình lập phương, ta làm thế nào?", "options": ["Cạnh × cạnh", "Cạnh × cạnh × 6", "Cạnh × cạnh × cạnh", "Cạnh × cạnh × 4"], "answer": 2, "level": 1 },
        { "question": "Nếu tăng cạnh hình lập phương lên gấp đôi, thể tích thay đổi thế nào?", "options": ["Gấp 2 lần", "Gấp 4 lần", "Gấp 6 lần", "Gấp 8 lần"], "answer": 3, "level": 2 }
    ],
    // Logic cho MCQ 
    selectMCQ(exId, option) {
        // Get all buttons in the same group
        const allBtns = document.querySelectorAll(`[id^="btn-${exId}-"]`);
        allBtns.forEach(btn => {
            btn.classList.remove('bg-rose-600', 'text-white', 'border-transparent');
            btn.classList.add('bg-rose-50', 'text-gray-400', 'border-rose-100');
        });

        const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
        selectedBtn.classList.remove('bg-rose-50', 'text-gray-400', 'border-rose-100');
        selectedBtn.classList.add('bg-rose-600', 'text-white', 'border-transparent');

        // Track state
        if (!window.lesson124State) window.lesson124State = { a: null, b: null };
        if (exId === '124-3a') window.lesson124State.a = option;
        if (exId === '124-3b') window.lesson124State.b = option;

        const feedback = document.getElementById('feedback-124-3');
        if (window.lesson124State.a && window.lesson124State.b) {
            feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-red-500', 'bg-emerald-50', 'bg-red-50');
            // Đáp án đúng: a) B (10 hình), b) C (64 cm³)
            if (window.lesson124State.a === 'B' && window.lesson124State.b === 'C') {
                feedback.innerText = "Chính xác cả hai câu! 🎉 Mai cần bỏ 10 hình. Rô-bốt gồm 8 hình LP nhỏ → V = 8 × (2×2×2) = 64 cm³.";
                feedback.classList.add('text-emerald-500', 'bg-emerald-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
            } else {
                feedback.innerText = "Có câu chưa đúng rồi. Hãy đếm kỹ số hình lập phương trong mỗi hình nhé!";
                feedback.classList.add('text-red-500', 'bg-red-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
            }
            feedback.classList.add('opacity-100');
        }
    }
};

window.lesson124 = lesson124;
