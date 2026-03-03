import { Lesson } from '../../components/Lesson.js';

export const lesson123 = {
    id: "math_5_123",
    subject: "Toán học",
    title: "Bài 52. Luyện tập: Thể tích hình hộp chữ nhật",
    subtitle: "Vận dụng tính toán thể tích vào thực tế (Trang 53)",
    week: "25",
    period: "123",
    content: `
        <div class="space-y-8 animate-fade-in pb-10">
            <!-- Hero Title -->
            <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] md:rounded-[40px] p-8 md:p-12 border border-blue-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div class="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-3xl flex items-center justify-center text-4xl md:text-6xl shadow-xl shadow-blue-200 dark:shadow-blue-900/40 shrink-0 transform -rotate-6 text-white">📐</div>
                    <div class="text-center md:text-left">
                        <h2 class="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 leading-tight">Luyện tập Thể tích</h2>
                        <p class="text-lg md:text-2xl text-gray-500 dark:text-slate-400 font-bold italic">Vận dụng công thức tính thể tích hình hộp chữ nhật vào thực tế và các hình khối phức tạp.</p>
                    </div>
                </div>
            </div>

            <!-- Kiến thức cần nhớ -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white p-8 rounded-[40px] border border-blue-50 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center text-xl font-black">1</div>
                        <h4 class="text-2xl font-black text-gray-800 dark:text-slate-100 uppercase">Hình hộp chữ nhật</h4>
                    </div>
                    <div class="bg-indigo-50 dark:bg-indigo-900/20 p-8 rounded-3xl text-center">
                        <p class="text-xs font-black tracking-widest text-indigo-400 uppercase mb-4">Công thức chính</p>
                        <p class="text-4xl md:text-6xl font-black text-indigo-600 dark:text-indigo-400">V = a &times; b &times; c</p>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-[40px] border border-emerald-50 shadow-sm dark:bg-slate-800 dark:border-slate-700">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-xl font-black">2</div>
                        <h4 class="text-2xl font-black text-gray-800 dark:text-slate-100 uppercase">Khối hình đặc biệt</h4>
                    </div>
                    <div class="bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-3xl text-center">
                        <p class="text-xs font-black tracking-widest text-emerald-400 uppercase mb-4">Phương pháp giải</p>
                        <p class="text-2xl md:text-3xl font-black text-emerald-700 dark:text-emerald-400 uppercase leading-tight italic">Chia nhỏ và cộng dồn các khối hình</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    practice: `
        <div class="space-y-12 animate-fade-in pb-10">
            <!-- Bài tập 1: Trắc nghiệm -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-indigo-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-123-1">
                <div class="p-8 md:p-12 bg-indigo-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-xl font-black shrink-0">1</div>
                        <h3 class="text-2xl md:text-4xl font-bold text-gray-800 dark:text-slate-100 leading-tight">Nam muốn xếp các khối gỗ dạng hình hộp chữ nhật (4cm, 1cm, 1cm) vào một chiếc hộp dạng hình hộp chữ nhật (8cm, 4cm, 4cm). Hỏi Nam có thể xếp được nhiều nhất bao nhiêu khối gỗ?</h3>
                    </div>
                    
                    <div class="flex flex-col lg:flex-row gap-10 items-center">
                        <!-- Hình ảnh -->
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-indigo-100 flex justify-center shadow-md">
                            <img src="hinh_anh/toan/toan_tap_2/123-b1-box.png" alt="Exercise 1" class="w-full max-w-[400px] h-auto rounded-2xl transition-transform hover:scale-105">
                        </div>
                        
                        <!-- Lựa chọn -->
                        <div class="w-full lg:w-1/2 grid grid-cols-2 gap-6">
                            <button onclick="lesson123.selectMCQ('123-1', 'A')" id="btn-123-1-A" class="mcq-btn flex items-center justify-center p-8 bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-slate-700 rounded-[32px] font-black text-4xl text-gray-300 hover:border-indigo-400 hover:shadow-lg transition-all">A. 8</button>
                            <button onclick="lesson123.selectMCQ('123-1', 'B')" id="btn-123-1-B" class="mcq-btn flex items-center justify-center p-8 bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-slate-700 rounded-[32px] font-black text-4xl text-gray-300 hover:border-indigo-400 hover:shadow-lg transition-all">B. 16</button>
                            <button onclick="lesson123.selectMCQ('123-1', 'C')" id="btn-123-1-C" class="mcq-btn flex items-center justify-center p-8 bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-slate-700 rounded-[32px] font-black text-4xl text-gray-300 hover:border-indigo-400 hover:shadow-lg transition-all">C. 32</button>
                            <button onclick="lesson123.selectMCQ('123-1', 'D')" id="btn-123-1-D" class="mcq-btn flex items-center justify-center p-8 bg-white dark:bg-slate-800 border-2 border-indigo-100 dark:border-slate-700 rounded-[32px] font-black text-4xl text-gray-300 hover:border-indigo-400 hover:shadow-lg transition-all">D. 64</button>
                        </div>
                    </div>
                    
                    <div id="feedback-123-1" class="mt-8 text-center text-xl md:text-2xl font-black opacity-0 transition-opacity p-6 rounded-3xl"></div>
                </div>
            </div>

            <!-- Bài tập 2: Thể tích khối ghép -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-amber-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-123-2">
                <div class="p-8 md:p-12 bg-amber-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                        <h3 class="text-3xl md:text-5xl font-black text-gray-800 dark:text-slate-100 leading-tight">Tính thể tích của khối gỗ có hình dạng và kích thước như hình dưới đây.</h3>
                    </div>

                    <!-- Hình ảnh căn giữa -->
                    <div class="flex justify-center mb-8">
                        <div class="p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-amber-100 shadow-md inline-block">
                            <img src="hinh_anh/toan/toan_tap_2/123-b2-l-shape.png" alt="Exercise 2" class="w-full max-w-[500px] h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- Khu vực làm bài -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-amber-200 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-amber-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                        <textarea id="ans-123-2" rows="5" class="w-full p-6 rounded-2xl border-2 border-amber-200 bg-amber-50/50 dark:bg-slate-900 outline-none focus:border-amber-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;Thể tích khối 1: ...&#10;Thể tích khối 2: ...&#10;Thể tích cả khối gỗ: ...&#10;Đáp số: ... cm³"></textarea>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3: Mực nước tăng thêm -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-blue-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-123-3">
                <div class="p-8 md:p-12 bg-blue-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                        <h3 class="text-3xl md:text-5xl font-black text-gray-800 dark:text-slate-100 leading-tight">Quan sát hình vẽ và tính thể tích của tảng đá nằm trong bể nước.</h3>
                    </div>

                    <!-- Hình ảnh căn giữa -->
                    <div class="flex justify-center mb-8">
                        <div class="p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-blue-100 shadow-md inline-block">
                            <img src="hinh_anh/toan/toan_tap_2/123-b3-stone.png" alt="Exercise 3" class="w-full max-w-[550px] h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- Khu vực làm bài -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-blue-200 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-blue-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                        <textarea id="ans-123-3" rows="5" class="w-full p-6 rounded-2xl border-2 border-blue-200 bg-blue-50/50 dark:bg-slate-900 outline-none focus:border-blue-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;Thể tích nước lúc sau: ...&#10;Thể tích nước lúc đầu: ...&#10;Thể tích tảng đá: ...&#10;Đáp số: ... dm³"></textarea>
                    </div>
                </div>
            </div>

            <!-- Nộp bài toàn bộ -->
            <div class="pt-12 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành Luyện tập Thể tích', 100)" class="bg-blue-600 hover:bg-blue-700 text-white px-12 md:px-20 py-6 md:py-8 rounded-[40px] font-black text-2xl md:text-4xl uppercase tracking-widest shadow-2xl shadow-blue-300 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-6">
                    Nộp bài học <svg class="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        { "question": "Một khối hình ghép từ 5 khối lập phương 1cm³. Thể tích là:", "options": ["1 cm³", "5 cm³", "10 cm³", "25 cm³"], "answer": 1, "level": 1 },
        { "question": "Khi cho một vật vào bể nước, chiều cao nước tăng 2cm. Đáy bể là 50cm². Thể tích vật là:", "options": ["50 cm³", "100 cm³", "25 cm³", "10 cm³"], "answer": 1, "level": 2 },
        { "question": "Một hộp thể tích 20cm³. Có thể xếp bao nhiêu khối 2cm³ vào hộp?", "options": ["5 khối", "10 khối", "20 khối", "40 khối"], "answer": 1, "level": 1 }
    ],
    // Logic cho MCQ bài tập 1
    selectMCQ(exId, option) {
        const btns = document.querySelectorAll(`#ex-${exId} .mcq-btn`);
        btns.forEach(btn => {
            btn.classList.replace('bg-indigo-600', 'bg-white');
            btn.classList.replace('text-white', 'text-gray-300');
            btn.classList.replace('border-transparent', 'border-indigo-100');
        });

        const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
        selectedBtn.classList.replace('bg-white', 'bg-indigo-600');
        selectedBtn.classList.replace('text-gray-300', 'text-white');
        selectedBtn.classList.replace('border-indigo-100', 'border-transparent');

        const feedback = document.getElementById(`feedback-${exId}`);
        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-red-500', 'bg-emerald-50', 'bg-red-50');

        if (option === 'C') { // Đáp án đúng là 32
            feedback.innerText = "Chính xác! 🎉 V(hộp) = 8x4x4=128cm³, V(khối gỗ) = 4x1x1=4cm³ => 128 / 4 = 32 khối.";
            feedback.classList.add('text-emerald-500', 'bg-emerald-50');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Chưa đúng rồi. Hãy tính lại thể tích hộp và thể tích khối gỗ nhé!";
            feedback.classList.add('text-red-500', 'bg-red-50');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
        feedback.classList.add('opacity-100');
    }
};

window.lesson123 = lesson123;
