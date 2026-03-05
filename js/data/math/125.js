export const lesson125 = {
    topic: "Hình học và Đo lường",
    week: "25",
    period: "125",
    title: "BÀI 53. LUYỆN TẬP (TIẾT 2)",
    desc: "Bài 53: Luyện tập tính thể tích hình lập phương qua các bài tập ghép hình và giải toán thực tế (Trang 56-57).",
    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- 🖍️ Công thức Ghi nhớ -->
            <div class="bg-rose-50 p-8 rounded-[48px] border-4 border-rose-200 shadow-xl relative overflow-hidden">
                <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-rose-200/50 rounded-full blur-2xl"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="flex justify-center">
                        <img src="hinh_anh/toan/toan_tap_2/124-formula.png" alt="Công thức" class="w-full max-w-[400px] h-auto rounded-3xl shadow-xl">
                    </div>
                    <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-rose-100">
                        <h4 class="text-xl font-black text-rose-600 uppercase mb-3 tracking-widest text-center">Quy tắc cần nhớ</h4>
                        <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed text-center italic">
                            "Thể tích <span class="text-rose-600 font-black">V</span> của hình lập phương có cạnh <span class="text-rose-600 font-black italic text-3xl">a</span> được tính theo công thức:"
                        </p>
                        <div class="mt-6 bg-rose-600 p-4 rounded-3xl text-white text-center shadow-lg">
                            <p class="text-3xl md:text-5xl font-black tracking-wide italic drop-shadow-md">V = a &times; a &times; a</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    practice: `
        <div class="space-y-12 animate-fade-in pb-10">
            <!-- Bài tập 1: Chọn câu trả lời đúng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-blue-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-125-1">
                <div class="p-8 md:p-12 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-6">
                        <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">1</div>
                        <h3 class="text-3xl md:text-5xl font-black text-blue-900 dark:text-blue-100 leading-tight">Chọn câu trả lời đúng.</h3>
                    </div>

                    <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed mb-8 ml-2">
                        Khối ru-bích của Việt có dạng hình lập phương cạnh <b class="text-blue-600">6 cm</b>. Thể tích của khối ru-bích đó là:
                    </p>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button onclick="lesson125.selectMCQ('125-1', 'A')" id="btn-125-1-A" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all">A. 36 cm²</button>
                        <button onclick="lesson125.selectMCQ('125-1', 'B')" id="btn-125-1-B" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all">B. 216 cm²</button>
                        <button onclick="lesson125.selectMCQ('125-1', 'C')" id="btn-125-1-C" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all">C. 36 cm³</button>
                        <button onclick="lesson125.selectMCQ('125-1', 'D')" id="btn-125-1-D" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all">D. 216 cm³</button>
                    </div>
                    <div id="feedback-125-1" class="mt-6 text-center text-xl md:text-2xl font-black opacity-0 transition-opacity p-4 rounded-3xl"></div>
                </div>
            </div>

            <!-- Bài tập 2: Hoàn thành bảng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-125-2">
                <div class="p-8 md:p-12 bg-teal-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                        <h3 class="text-3xl md:text-5xl font-black text-teal-900 dark:text-teal-100 leading-tight">Hoàn thành bảng sau.</h3>
                    </div>

                    <!-- Hình bên trái + Bảng bên phải -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-teal-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/125-b2-items.png" alt="Đồ vật" class="w-full h-auto rounded-2xl">
                        </div>
                        <div class="w-full lg:w-1/2">
                            <div class="overflow-hidden rounded-[32px] border-2 border-teal-200">
                                <table class="w-full text-center">
                                    <thead>
                                        <tr>
                                            <th class="p-6 bg-teal-600 text-white text-xl md:text-2xl font-black">Đồ vật dạng hình lập phương</th>
                                            <th class="p-6 bg-teal-500 text-white text-xl md:text-2xl font-black border-l-2 border-teal-400">🎲 Xúc xắc<br><span class="text-lg font-bold opacity-80">(cạnh 3 cm)</span></th>
                                            <th class="p-6 bg-cyan-500 text-white text-xl md:text-2xl font-black border-l-2 border-cyan-400">🐟 Bể cá<br><span class="text-lg font-bold opacity-80">(cạnh 1,5 dm)</span></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="p-6 bg-teal-50 text-xl md:text-2xl font-black text-teal-900">Thể tích của đồ vật</td>
                                            <td class="p-4 bg-white border-l-2 border-teal-100">
                                                <input type="number" id="ans-125-2a" class="w-full text-3xl md:text-4xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?">
                                                <p class="text-lg font-bold text-gray-400 mt-1">cm³</p>
                                            </td>
                                            <td class="p-4 bg-white border-l-2 border-cyan-100">
                                                <input type="number" step="0.001" id="ans-125-2b" class="w-full text-3xl md:text-4xl font-black text-cyan-600 bg-transparent text-center outline-none" placeholder="?">
                                                <p class="text-lg font-bold text-gray-400 mt-1">dm³</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mt-4 flex justify-center gap-4">
                                <button onclick="lesson125.checkEx2()" class="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white font-black text-2xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0" title="Kiểm tra đáp án">
                                    <svg class="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                                <span id="fb-125-2" class="text-xl font-black opacity-0 transition-opacity flex items-center"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3: Ghép khối lập phương -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-purple-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-125-3">
                <div class="p-8 md:p-12 bg-purple-50 dark:bg-slate-900 rounded-[40px]">
                    <!-- Câu a -->
                    <div class="flex items-start gap-5 mb-6">
                        <div class="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                        <div>
                            <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                <span class="text-purple-600 font-black">a)</span> Quan sát hình vẽ và cho biết 2 khối hình nào ghép được thành hình lập phương.
                            </p>
                        </div>
                    </div>

                    <!-- Hình minh họa -->
                    <div class="flex justify-center mb-8">
                        <div class="p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-purple-100 shadow-md inline-block">
                            <img src="hinh_anh/toan/toan_tap_2/125-b3-blocks.png" alt="Khối A, B, C" class="w-full max-w-[600px] h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- MCQ câu a -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-purple-100 mb-8">
                        <p class="text-xl md:text-3xl font-black text-purple-600 mb-6">Hai khối ghép được thành hình lập phương là:</p>
                        <div class="grid grid-cols-3 gap-4">
                            <button onclick="lesson125.selectMCQ('125-3a', 'AB')" id="btn-125-3a-AB" class="mcq-btn p-5 bg-purple-50 border-2 border-purple-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-purple-400 transition-all">A và B</button>
                            <button onclick="lesson125.selectMCQ('125-3a', 'AC')" id="btn-125-3a-AC" class="mcq-btn p-5 bg-purple-50 border-2 border-purple-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-purple-400 transition-all">A và C</button>
                            <button onclick="lesson125.selectMCQ('125-3a', 'BC')" id="btn-125-3a-BC" class="mcq-btn p-5 bg-purple-50 border-2 border-purple-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-purple-400 transition-all">B và C</button>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-purple-100">
                        <p class="text-xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed mb-6">
                            <span class="text-purple-600 font-black">b)</span> Biết mỗi hình lập phương nhỏ trong hình trên có cạnh <b class="text-purple-600">2 cm</b>. Hãy tính thể tích của hình lập phương lớn ghép được ở câu a.
                        </p>
                        <p class="hidden" id="wp-problem-text-125-3b">Quan sát hình vẽ và cho biết 2 khối hình nào ghép được thành hình lập phương. Biết mỗi hình lập phương nhỏ trong hình trên có cạnh 2 cm. Hãy tính thể tích của hình lập phương lớn ghép được ở câu a.</p>
                        <div class="relative">
                            <textarea id="wp-full-125-3b" rows="4" class="w-full p-6 pr-14 rounded-2xl border-2 border-purple-200 bg-purple-50/50 dark:bg-slate-900 outline-none focus:border-purple-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;&#10;&#10;Đáp số: ... cm³"></textarea>
                            <button id="btn-mic-125-3b" onclick="Lesson.toggleSpeechRec('wp-full-125-3b')" class="absolute right-4 top-4 text-purple-400 hover:text-purple-600 p-2" title="Giọng nói">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                            </button>
                            <div id="mic-status-125-3b" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                        </div>
                        <div class="mt-6 flex justify-end">
                            <button onclick="Lesson.submitWordProblemAI('125-3b')" class="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white font-black text-2xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm bài">E</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 4: Tháp chất lỏng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-amber-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-125-4">
                <div class="p-8 md:p-12 bg-amber-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-6">
                        <div class="w-14 h-14 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">4</div>
                        <div>
                            <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                Rô-bốt làm một tháp chất lỏng như hình dưới đây.
                            </p>
                            <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed mt-2">
                                Hỏi phần chất lỏng nào có <b class="text-amber-600">thể tích lớn nhất</b> và thể tích đó bằng bao nhiêu?
                            </p>
                        </div>
                    </div>

                    <!-- Hình bên trái + Bài làm bên phải -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-amber-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/125-b4-tower.png" alt="Tháp chất lỏng" class="w-full h-auto rounded-2xl">
                        </div>
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-amber-200 shadow-sm flex flex-col">
                            <p class="text-lg md:text-2xl font-black text-amber-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                            <p class="hidden" id="wp-problem-text-125-4">Rô-bốt làm một tháp chất lỏng như hình dưới đây. Hỏi phần chất lỏng nào có thể tích lớn nhất và thể tích đó bằng bao nhiêu?</p>
                            <div class="relative flex-grow">
                                <textarea id="wp-full-125-4" rows="6" class="w-full p-6 pr-14 rounded-2xl border-2 border-amber-200 bg-amber-50/50 dark:bg-slate-900 outline-none focus:border-amber-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;&#10;&#10;&#10;&#10;Đáp số: ..."></textarea>
                                <button id="btn-mic-125-4" onclick="Lesson.toggleSpeechRec('wp-full-125-4')" class="absolute right-4 top-4 text-amber-400 hover:text-amber-600 p-2" title="Giọng nói">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                                <div id="mic-status-125-4" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                            </div>
                            <div class="mt-6 flex justify-end">
                                <button onclick="Lesson.submitWordProblemAI('125-4')" class="w-14 h-14 bg-amber-600 hover:bg-amber-700 text-white font-black text-2xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm bài">E</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành Luyện tập Thể tích LP', 100)" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-3">
                    NỘP BÀI <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        // Level 1 - Cơ bản
        { "question": "Thể tích hình lập phương cạnh 4 cm là:", "options": ["16 cm³", "48 cm³", "64 cm³", "96 cm³"], "answer": 2, "level": 1 },
        { "question": "Hình lập phương cạnh 6 cm có thể tích là:", "options": ["36 cm³", "216 cm³", "36 cm²", "216 cm²"], "answer": 1, "level": 1 },
        { "question": "V = a × a × a là công thức tính:", "options": ["Diện tích hình vuông", "Diện tích toàn phần HLP", "Thể tích hình lập phương", "Chu vi hình vuông"], "answer": 2, "level": 1 },
        { "question": "Thể tích hình lập phương cạnh 1 dm là:", "options": ["1 dm³", "6 dm³", "10 dm³", "100 dm³"], "answer": 0, "level": 1 },
        { "question": "Xúc xắc hình lập phương cạnh 3 cm có thể tích:", "options": ["9 cm³", "18 cm³", "27 cm³", "54 cm³"], "answer": 2, "level": 1 },
        // Level 2 - Nâng cao
        { "question": "Bể cá hình lập phương cạnh 1,5 dm. Thể tích bể là:", "options": ["2,25 dm³", "3,375 dm³", "4,5 dm³", "13,5 dm³"], "answer": 1, "level": 2 },
        { "question": "Hình lập phương có thể tích 125 cm³. Cạnh là:", "options": ["5 cm", "25 cm", "10 cm", "15 cm"], "answer": 0, "level": 2 },
        { "question": "Khối LP cạnh 10 cm chứa LP cạnh 2 cm. Xếp được:", "options": ["25 khối", "50 khối", "100 khối", "125 khối"], "answer": 3, "level": 2 },
        { "question": "Hai khối A và C ghép thành LP lớn (mỗi LP nhỏ cạnh 2 cm, LP lớn 8 khối). Thể tích LP lớn:", "options": ["64 cm³", "128 cm³", "256 cm³", "512 cm³"], "answer": 0, "level": 2 },
        { "question": "1 dm³ = ? cm³", "options": ["10 cm³", "100 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 2 },
        // Level 3 - Thử thách
        { "question": "Tháp chất lỏng: tầng dưới LP cạnh 15 cm, tầng giữa HHCNhật 15×12×15, tầng trên LP cạnh 10 cm. Tầng nào lớn nhất?", "options": ["Tầng trên (dầu)", "Tầng giữa (nước)", "Tầng dưới (nước rửa bát)", "Bằng nhau"], "answer": 2, "level": 3 },
        { "question": "Thể tích hình lập phương cạnh 15 cm là:", "options": ["225 cm³", "1350 cm³", "2250 cm³", "3375 cm³"], "answer": 3, "level": 3 },
        { "question": "HLP cạnh a cm. Nếu a tăng gấp 3, thể tích tăng:", "options": ["Gấp 3", "Gấp 9", "Gấp 27", "Gấp 6"], "answer": 2, "level": 3 },
        { "question": "So sánh: HLP cạnh 8 cm và HHCN 10×6×5 cm:", "options": ["V(LP) > V(HHCN)", "V(LP) < V(HHCN)", "V(LP) = V(HHCN)", "Không so sánh được"], "answer": 0, "level": 3 },
        { "question": "Ghép 8 khối LP nhỏ cạnh 3 cm thành 1 LP lớn. Cạnh LP lớn là:", "options": ["6 cm", "9 cm", "12 cm", "24 cm"], "answer": 0, "level": 3 }
    ],
    // Logic MCQ
    selectMCQ(exId, option) {
        const allBtns = document.querySelectorAll(`[id^="btn-${exId}-"]`);
        allBtns.forEach(btn => {
            const baseColor = exId.includes('125-1') ? 'blue' : 'purple';
            btn.classList.remove(`bg-${baseColor}-600`, 'text-white', 'border-transparent');
            btn.classList.add(exId.includes('125-1') ? 'bg-white' : `bg-${baseColor}-50`, 'text-gray-400', `border-${baseColor}-100`);
        });

        const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
        const baseColor = exId.includes('125-1') ? 'blue' : 'purple';
        selectedBtn.classList.remove(exId.includes('125-1') ? 'bg-white' : `bg-${baseColor}-50`, 'text-gray-400', `border-${baseColor}-100`);
        selectedBtn.classList.add(`bg-${baseColor}-600`, 'text-white', 'border-transparent');

        // Bài 1 - Chấm ngay
        if (exId === '125-1') {
            const feedback = document.getElementById('feedback-125-1');
            feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-red-500', 'bg-emerald-50', 'bg-red-50');
            if (option === 'D') {
                feedback.innerText = "Chính xác! 🎉 V = 6 × 6 × 6 = 216 cm³";
                feedback.classList.add('text-emerald-500', 'bg-emerald-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
            } else {
                feedback.innerText = "Chưa đúng! Nhớ công thức V = a × a × a, đơn vị là cm³ nhé!";
                feedback.classList.add('text-red-500', 'bg-red-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
            }
            feedback.classList.add('opacity-100');
        }

        // Bài 3a - Chấm ngay
        if (exId === '125-3a') {
            // Đáp án đúng: A và C
            if (option === 'AC') {
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
            } else {
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
            }
        }
    },
    // Kiểm tra bài 2
    checkEx2() {
        const a = parseInt(document.getElementById('ans-125-2a').value);
        const b = parseFloat(document.getElementById('ans-125-2b').value);
        const fb = document.getElementById('fb-125-2');
        fb.classList.remove('opacity-0', 'text-emerald-500', 'text-red-500');

        const c1 = (a === 27);
        const c2 = (b === 3.375);

        if (c1 && c2) {
            fb.innerText = "✅ Đúng cả hai! 3³ = 27 cm³ và 1,5³ = 3,375 dm³";
            fb.classList.add('text-emerald-500', 'opacity-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            let msg = "❌ ";
            if (!c1) msg += "Xúc xắc: V = 3×3×3 = 27 cm³. ";
            if (!c2) msg += "Bể cá: V = 1,5×1,5×1,5 = 3,375 dm³.";
            fb.innerText = msg;
            fb.classList.add('text-red-500', 'opacity-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    }
};

window.lesson125 = lesson125;
