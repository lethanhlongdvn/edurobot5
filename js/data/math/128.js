export const lesson128 = {
    topic: "Hình học và Đo lường",
    week: "26",
    period: "128",
    title: "BÀI 55. LUYỆN TẬP CHUNG (TIẾT 2)",
    desc: "Ôn tập tổng hợp về Diện tích xung quanh, Diện tích toàn phần và Thể tích của Hình hộp chữ nhật và Hình lập phương (Trang 61).",
    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Header Ghi nhớ -->
            <div class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[32px] md:rounded-[48px] p-8 md:p-12 text-white shadow-xl relative overflow-hidden">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div class="w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center text-5xl md:text-7xl shadow-inner shrink-0 transform -rotate-3 font-black italic">!</div>
                    <div>
                        <h2 class="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">Ôn tập công thức</h2>
                        <p class="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed">Hãy cùng nhắc lại các quy tắc tính Diện tích và Thể tích của các hình khối đã học nhé!</p>
                    </div>
                </div>
                <!-- Abstract figures -->
                <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Hình hộp chữ nhật -->
                <div class="bg-white dark:bg-slate-800 p-8 rounded-[40px] border-2 border-blue-100 shadow-sm space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl">📦</div>
                        <h3 class="text-2xl md:text-3xl font-black text-blue-900 dark:text-blue-100">Hình hộp chữ nhật</h3>
                    </div>
                    
                    <div class="space-y-6">
                        <div class="p-5 bg-blue-50/50 dark:bg-slate-900 rounded-3xl border border-blue-100">
                            <p class="text-lg font-bold text-blue-700 mb-3">1. Diện tích xung quanh & Toàn phần</p>
                            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-inner font-mono text-xl md:text-2xl text-center">
                                <p class="mb-2"><span class="text-blue-600 font-black">S<sub>xq</sub></span> = <span class="text-gray-500">(a + b) × 2 × c</span></p>
                                <p><span class="text-blue-600 font-black">S<sub>tp</sub></span> = <span class="text-gray-500">S<sub>xq</sub> + S<sub>đáy</sub> × 2</span></p>
                            </div>
                        </div>

                        <div class="p-5 bg-indigo-50/50 dark:bg-slate-900 rounded-3xl border border-indigo-100">
                            <p class="text-lg font-bold text-indigo-700 mb-3">2. Thể tích</p>
                            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-inner font-mono text-xl md:text-2xl text-center">
                                <p><span class="text-indigo-600 font-black">V</span> = <span class="text-gray-500">a × b × c</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Hình lập phương -->
                <div class="bg-white dark:bg-slate-800 p-8 rounded-[40px] border-2 border-teal-100 shadow-sm space-y-6">
                    <div class="flex items-center gap-4 mb-2">
                        <div class="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center text-2xl">🧊</div>
                        <h3 class="text-2xl md:text-3xl font-black text-teal-900 dark:text-teal-100">Hình lập phương</h3>
                    </div>
                    
                    <div class="space-y-6">
                        <div class="p-5 bg-teal-50/50 dark:bg-slate-900 rounded-3xl border border-teal-100">
                            <p class="text-lg font-bold text-teal-700 mb-3">1. Diện tích xung quanh & Toàn phần</p>
                            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-inner font-mono text-xl md:text-2xl text-center">
                                <p class="mb-2"><span class="text-teal-600 font-black">S<sub>xq</sub></span> = <span class="text-gray-500">(a × a) × 4</span></p>
                                <p><span class="text-teal-600 font-black">S<sub>tp</sub></span> = <span class="text-gray-500">(a × a) × 6</span></p>
                            </div>
                        </div>

                        <div class="p-5 bg-emerald-50/50 dark:bg-slate-900 rounded-3xl border border-emerald-100">
                            <p class="text-lg font-bold text-emerald-700 mb-3">2. Thể tích</p>
                            <div class="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-inner font-mono text-xl md:text-2xl text-center">
                                <p><span class="text-emerald-600 font-black">V</span> = <span class="text-gray-500">a × a × a</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Ghi chú nhanh -->
            <div class="bg-amber-50 dark:bg-amber-900/20 p-6 md:p-8 rounded-[32px] border-l-8 border-amber-400">
                <div class="flex gap-4">
                    <span class="text-4xl shrink-0">💡</span>
                    <div>
                        <p class="text-xl md:text-2xl font-bold text-amber-900 dark:text-amber-200">Lưu ý cực kỳ quan trọng:</p>
                        <p class="text-lg md:text-xl text-amber-800 dark:text-amber-300 mt-2">Khi tính diện tích và thể tích, các số đo (chiều dài, chiều rộng, chiều cao, cạnh) phải được đưa về <b class="text-amber-900 border-b-2 border-amber-400">cùng một đơn vị đo</b> đấy nhé!</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    practice: `
        <div class="space-y-12 animate-fade-in pb-10">
            <!-- Bài 1: Chọn câu trả lời đúng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-blue-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-128-1">
                <div class="p-8 md:p-12 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">1</div>
                        <div>
                            <p class="text-3xl md:text-5xl font-black text-blue-900 dark:text-blue-100 leading-tight">Chọn câu trả lời đúng.</p>
                            <p class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-200 mt-4 leading-relaxed">
                                Hình nào dưới đây là hình khai triển của một hình hộp chữ nhật?
                            </p>
                        </div>
                    </div>

                    <!-- MCQ Buttons -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        <button onclick="lesson128.selectMCQ('128-1', 'A')" id="btn-128-1-A" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-3xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-4 h-full shadow-sm group">
                            <div class="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                                <img src="hinh_anh/toan/toan_tap_2/128-1-A.png" alt="Hình A" class="max-w-full max-h-full object-contain">
                            </div>
                            <span class="group-hover:text-blue-600">Hình A</span>
                        </button>
                        <button onclick="lesson128.selectMCQ('128-1', 'B')" id="btn-128-1-B" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-3xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-4 h-full shadow-sm group">
                            <div class="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                                <img src="hinh_anh/toan/toan_tap_2/128-1-B.png" alt="Hình B" class="max-w-full max-h-full object-contain">
                            </div>
                            <span class="group-hover:text-blue-600">Hình B</span>
                        </button>
                        <button onclick="lesson128.selectMCQ('128-1', 'C')" id="btn-128-1-C" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-3xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-4 h-full shadow-sm group">
                            <div class="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                                <img src="hinh_anh/toan/toan_tap_2/128-1-C.png" alt="Hình C" class="max-w-full max-h-full object-contain">
                            </div>
                            <span class="group-hover:text-blue-600">Hình C</span>
                        </button>
                        <button onclick="lesson128.selectMCQ('128-1', 'D')" id="btn-128-1-D" class="mcq-btn p-5 bg-white border-2 border-blue-100 rounded-3xl font-black text-2xl text-gray-400 hover:border-blue-400 transition-all flex flex-col items-center justify-center gap-4 h-full shadow-sm group">
                            <div class="w-full aspect-square bg-slate-50 rounded-2xl flex items-center justify-center p-4">
                                <img src="hinh_anh/toan/toan_tap_2/128-1-D.png" alt="Hình D" class="max-w-full max-h-full object-contain">
                            </div>
                            <span class="group-hover:text-blue-600">Hình D</span>
                        </button>
                    </div>
                    <div id="feedback-128-1" class="mt-8 text-center text-xl md:text-2xl font-black opacity-0 transition-opacity p-6 rounded-[24px]"></div>
                </div>
            </div>

            <!-- Bài 2: Tính thể tích -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-128-2">
                <div class="p-8 md:p-12 bg-teal-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                        <h3 class="text-3xl md:text-5xl font-black text-teal-900 dark:text-teal-100 leading-tight">Tính thể tích của mỗi hình dưới đây.</h3>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- a) HHCN -->
                        <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-teal-100 shadow-sm flex flex-col items-center">
                            <p class="w-full text-2xl font-black text-teal-700 mb-6">a) Hình hộp chữ nhật</p>
                            <img src="hinh_anh/toan/toan_tap_2/128-2-a.png" alt="HHCN" class="w-full max-w-[400px] h-auto rounded-2xl mb-8">
                            <div class="w-full space-y-4">
                                <div class="flex items-center justify-center gap-3">
                                    <input type="number" step="0.1" id="ans-128-2-a" class="w-32 md:w-48 text-3xl md:text-5xl font-black text-teal-600 bg-teal-50 rounded-2xl text-center outline-none focus:ring-4 focus:ring-teal-200 p-4 border-2 border-transparent transition-all" placeholder="?">
                                    <span class="text-2xl font-black text-gray-500">dm³</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <button onclick="lesson128.checkEx2('a')" class="w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center mt-2 group" title="Kiểm tra">
                                        <svg class="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                    </button>
                                    <div id="fb-128-2-a" class="mt-4 text-xl font-bold"></div>
                                </div>
                            </div>
                        </div>

                        <!-- b) HLP -->
                        <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-teal-100 shadow-sm flex flex-col items-center">
                            <p class="w-full text-2xl font-black text-blue-700 mb-6">b) Hình lập phương</p>
                            <img src="hinh_anh/toan/toan_tap_2/128-2-b.png" alt="HLP" class="w-full max-w-[300px] h-auto rounded-2xl mb-8 transform scale-90">
                            <div class="w-full space-y-4">
                                <div class="flex items-center justify-center gap-3">
                                    <input type="number" id="ans-128-2-b" class="w-32 md:w-48 text-3xl md:text-5xl font-black text-blue-600 bg-blue-50 rounded-2xl text-center outline-none focus:ring-4 focus:ring-blue-200 p-4 border-2 border-transparent transition-all" placeholder="?">
                                    <span class="text-2xl font-black text-gray-500">cm³</span>
                                </div>
                                <div class="flex flex-col items-center">
                                    <button onclick="lesson128.checkEx2('b')" class="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center mt-2 group" title="Kiểm tra">
                                        <svg class="w-8 h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                    </button>
                                    <div id="fb-128-2-b" class="mt-4 text-xl font-bold"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 3: Bể bơi -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-purple-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-128-3">
                <div class="p-8 md:p-12 bg-purple-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                        <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                            Một bể bơi dạng hình hộp chữ nhật có chiều dài <b class="text-purple-600">25 m</b>, chiều rộng <b class="text-purple-600">8 m</b> và sâu <b class="text-purple-600">1,4 m</b>. Người ta lát ở đáy và xung quanh hồ bơi bằng những viên gạch hoa. Tính diện tích lát gạch.
                        </p>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                        <!-- Hình ảnh -->
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-purple-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/128-3.png" alt="Bể bơi" class="w-full h-auto rounded-2xl">
                        </div>
                        
                        <!-- Bài làm -->
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-purple-200 shadow-sm flex flex-col relative">
                            <p class="text-lg md:text-2xl font-black text-purple-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                            <div class="relative flex-grow">
                                <textarea id="ans-128-3" rows="6" class="w-full p-6 pr-14 rounded-2xl border-2 border-purple-200 bg-purple-50/50 dark:bg-slate-900 outline-none focus:border-purple-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;&#10;&#10;Đáp số: ..."></textarea>
                                <button id="btn-mic-128-3" onclick="Lesson.toggleSpeechRec('ans-128-3')" class="absolute right-4 top-4 text-purple-400 hover:text-purple-600 p-2" title="Giọng nói">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                                <div id="mic-status-128-3" class="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                            </div>
                            <div class="mt-6 flex justify-end">
                                <button onclick="Lesson.submitWordProblemAI('128-3')" class="w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white font-black text-2xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm bài">E</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 4: Xếp hộp loa -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-amber-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-128-4">
                <div class="p-8 md:p-12 bg-amber-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">4</div>
                        <p class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                            Chú Tư xếp các hộp đựng loa lên xe tải có kích thước thùng xe như trong hình vẽ. Biết các hộp đều có dạng hình hộp chữ nhật với chiều dài <b class="text-amber-600">0,5 m</b>, chiều rộng <b class="text-amber-600">0,4 m</b> và chiều cao <b class="text-amber-600">0,3 m</b>. Hỏi chú Tư có thể xếp được <b class="text-amber-700 font-black">64 hộp</b> như vậy lên thùng xe hay không?
                        </p>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-8 items-stretch">
                        <!-- Hình ảnh -->
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-amber-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/128-4.png" alt="Xe tải" class="w-full h-auto rounded-2xl">
                        </div>
                        
                        <!-- Bài làm -->
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-amber-200 shadow-sm flex flex-col">
                            <p class="text-lg md:text-2xl font-black text-amber-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                            <textarea id="ans-128-4" rows="6" class="w-full flex-grow p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/50 dark:bg-slate-900 outline-none focus:border-amber-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;&#10;&#10;Kết luận: ..."></textarea>
                            <div class="mt-6 flex justify-end">
                                <button onclick="Lesson.submitWordProblemAI('128-4')" class="w-14 h-14 bg-amber-600 hover:bg-amber-700 text-white font-black text-2xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm bài">E</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành Luyện tập chung 128', 100)" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-xl shadow-indigo-200 dark:shadow-none transition-all active:scale-95 flex items-center gap-4">
                    NỘP BÀI <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        { "question": "Muốn tính diện tích xung quanh HHCN, ta lấy chu vi đáy nhân với:", "options": ["Chiều dài", "Chiều rộng", "Chiều cao", "Diện tích đáy"], "answer": 2, "level": 1 },
        { "question": "Thể tích HLP cạnh 2 cm là:", "options": ["4 cm³", "8 cm³", "12 cm³", "16 cm³"], "answer": 1, "level": 1 },
        { "question": "HHCN có 3 kích thước: 4dm, 3dm, 2dm. Thể tích là:", "options": ["24 dm³", "24 dm²", "14 dm³", "9 dm³"], "answer": 0, "level": 1 },
        { "question": "Sxq của HLP cạnh 5m là:", "options": ["25 m²", "100 m²", "150 m²", "125 m²"], "answer": 1, "level": 1 },
        { "question": "Diện tích toàn phần HLP bằng diện tích một mặt nhân với mấy?", "options": ["2", "4", "6", "8"], "answer": 2, "level": 1 },

        { "question": "HHCN dài 5cm, rộng 4cm, cao 3cm. Diện tích mặt đáy là:", "options": ["20 cm²", "12 cm²", "15 cm²", "60 cm²"], "answer": 0, "level": 2 },
        { "question": "HLP có cạnh 0,5m. Thể tích là:", "options": ["0,25 m³", "0,125 m³", "1,25 m³", "0,125 m²"], "answer": 1, "level": 2 },
        { "question": "Chu vi đáy của HHCN là 20cm, cao 5cm. Sxq là:", "options": ["100 cm²", "100 cm³", "50 cm²", "400 cm²"], "answer": 0, "level": 2 },
        { "question": "Một hình khai triển của HHCN gồm có mấy mặt?", "options": ["4 mặt", "5 mặt", "6 mặt", "8 mặt"], "answer": 2, "level": 2 },
        { "question": "Đơn vị đo thể tích thường gặp là:", "options": ["cm", "cm²", "cm³", "kg"], "answer": 2, "level": 2 },

        { "question": "HLP có Sxq là 36 cm². Thể tích của nó là:", "options": ["9 cm³", "27 cm³", "54 cm³", "81 cm³"], "answer": 1, "level": 3 },
        { "question": "Gấp cạnh HLP lên 3 lần thì thể tích tăng lên:", "options": ["3 lần", "9 lần", "27 lần", "81 lần"], "answer": 2, "level": 3 },
        { "question": "HHCN có thể tích 60 cm³, dài 5cm, rộng 4cm. Chiều cao là:", "options": ["3 cm", "4 cm", "5 cm", "12 cm"], "answer": 0, "level": 3 },
        { "question": "Bể bơi dài 10m, rộng 5m, sâu 2m. Thể tích nước đầy bể là:", "options": ["50 m³", "100 m³", "70 m³", "100 m²"], "answer": 1, "level": 3 },
        { "question": "Để tính diện tích lát gạch bể bơi (không nắp), ta tính:", "options": ["Sxq", "Stp", "Sxq + S đáy", "Sxq + 2 × S đáy"], "answer": 2, "level": 3 }
    ],
    // Logic tương tác
    selectMCQ(exId, option) {
        if (exId === '128-1') {
            const allBtns = document.querySelectorAll(`[id^="btn-128-1-"]`);
            allBtns.forEach(btn => {
                btn.classList.remove('border-blue-500', 'bg-blue-50', 'text-blue-600', 'ring-4', 'ring-blue-100');
                btn.classList.add('border-blue-100', 'bg-white', 'text-gray-400');
            });

            const selectedBtn = document.getElementById(`btn-128-1-${option}`);
            selectedBtn.classList.remove('border-blue-100', 'bg-white', 'text-gray-400');
            selectedBtn.classList.add('border-blue-500', 'bg-blue-50', 'text-blue-600', 'ring-4', 'ring-blue-100');

            const feedback = document.getElementById('feedback-128-1');
            feedback.classList.remove('opacity-0', 'text-emerald-600', 'text-red-500', 'bg-emerald-50', 'bg-red-50');

            if (option === 'D') {
                feedback.innerText = "Tuyệt vời! Hình D chính là hình khai triển của một hình lập phương. 🌟";
                feedback.classList.add('text-emerald-600', 'bg-emerald-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
            } else {
                feedback.innerText = "Tiếc quá, chưa chính xác! Bạn hãy xem kĩ vị trí các mặt và ký hiệu nhé. 🧐";
                feedback.classList.add('text-red-500', 'bg-red-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
            }
            feedback.classList.add('opacity-100');
        }
    },
    checkEx2(part) {
        const input = document.getElementById(`ans-128-2-${part}`);
        const feedback = document.getElementById(`fb-128-2-${part}`);
        const val = input.value.trim().replace(',', '.');

        input.classList.remove('text-red-600', 'border-red-400', 'text-emerald-600', 'border-emerald-400', 'ring-4', 'ring-red-100', 'ring-emerald-100');

        let isCorrect = false;
        if (part === 'a') {
            // V = 2 * 1 * 1.5 = 3
            isCorrect = (val === '3' || val === '3.0' || val === '3,0');
        } else {
            // V = 15 * 15 * 15 = 3375
            isCorrect = (val === '3375');
        }

        if (isCorrect) {
            feedback.innerHTML = `<span class="text-emerald-600">Đúng rồi! 🎉</span>`;
            input.classList.add('text-emerald-600', 'border-emerald-400', 'ring-4', 'ring-emerald-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerHTML = `<span class="text-red-500">Chưa đúng, thử lại nhé!</span>`;
            input.classList.add('text-red-600', 'border-red-400', 'ring-4', 'ring-red-100');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    }
};

window.lesson128 = lesson128;
