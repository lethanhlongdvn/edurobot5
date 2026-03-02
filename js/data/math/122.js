export const lesson122 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "122",
    "title": "BÀI 52. THỂ TÍCH CỦA HÌNH HỘP CHỮ NHẬT (TIẾT 1)",
    "desc": "Bài 52: Cách tính thể tích hình hộp chữ nhật bằng công thức V = a × b × c (Trang 51-52).",
    "content": `
        <div class="space-y-4 text-indigo-900 animate-fade-in">
            <!-- 🎯 Mục tiêu & Khám phá -->
            <div class="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-[40px] text-white shadow-2xl flex flex-col md:flex-row items-center gap-6">
                <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-5xl shadow-lg">🧊</div>
                <div>
                    <h3 class="text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Tính Thể Tích Hình Hộp Chữ Nhật</h3>
                    <p class="text-xl md:text-2xl font-bold opacity-90 leading-tight">
                        Muốn tính thể tích hình hộp chữ nhật, ta lấy chiều dài nhân với chiều rộng rồi nhân với chiều cao (cùng một đơn vị đo).
                    </p>
                </div>
            </div>

            <!-- 🧪 Phòng Thí Nghiệm (Tương tác) -->
            <div class="bg-white p-2 rounded-[40px] shadow-xl border border-indigo-50">
                <div class="p-4 bg-indigo-50 rounded-[32px] mb-2">
                    <p class="text-indigo-900 font-black text-xl md:text-2xl mb-4 flex items-center gap-2">
                        <span class="animate-bounce">👉</span> Thí nghiệm: Thay đổi cạnh để xem Thể tích biến thiên
                    </p>
                    \${Lesson.renderDynamicGeometryLab('lab-122', 'cube_volume', {a: 5})}
                </div>
            </div>

            <!-- 🖍️ Công thức Ghi nhớ -->
            <div class="bg-rose-500 p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl transition-all group-hover:scale-150"></div>
                <div class="relative z-10 flex flex-col md:flex-row items-center justify-around gap-8">
                   <div class="text-center md:text-left space-y-2">
                        <p class="text-lg font-black uppercase tracking-[0.2em] text-rose-200">Công thức tổng quát</p>
                        <p class="text-6xl md:text-8xl font-black drop-shadow-lg italic">V = a &times; b &times; c</p>
                        <p class="text-xl font-bold opacity-80 mt-4 bg-black/10 p-3 rounded-2xl inline-block">V: Thể tích | a, b, c: Ba kích thước</p>
                   </div>
                   <div class="w-full max-w-[300px] bg-white/20 p-6 rounded-[32px] backdrop-blur-md border border-white/30 shadow-inner">
                        <p class="text-2xl font-black leading-tight text-center">
                            Nếu là Hình lập phương:<br>
                            <span class="text-4xl md:text-5xl block mt-2 underline decoration-4 underline-offset-8">V = a &times; a &times; a</span>
                        </p>
                   </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài tập 1 -->
            <div id="box-122-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl">
                <p class="font-black text-xl md:text-2xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Tính V (8cm, 5cm, 6cm):
                </p>
                <div class="flex items-center gap-4 bg-gray-50 p-4 rounded-3xl border-2 border-transparent">
                    <span class="text-2xl font-black text-gray-400">V = </span>
                    <input type="number" id="ans-122-1" class="w-full text-5xl font-black text-indigo-600 bg-white p-2 rounded-2xl shadow-inner border-none focus:ring-0 text-right" placeholder="?">
                    <span class="text-2xl font-black text-gray-300">cm³</span>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-122-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-emerald-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Thể tích bể cá:
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-emerald-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/122-b2-beca.png" alt="Bể cá" class="w-full max-w-[250px] h-auto rounded-xl">
                    <div class="bg-white p-4 rounded-3xl flex items-center gap-2 w-full">
                        <span class="text-xl font-black text-emerald-900">V=</span>
                        <input type="number" id="ans-122-2" class="w-full text-5xl font-black text-emerald-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                        <span class="text-xl font-black text-emerald-300">dm³</span>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-122-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl">
                <p class="font-black text-xl md:text-2xl mb-1 text-amber-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    Ghép 6 khối (10cm, 5cm, 2cm):
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-1 bg-amber-50 rounded-[32px] items-center">
                    <img src="hinh_anh/toan/toan_tap_2/122-b3-blocks.png" alt="Khối" class="w-full max-w-[200px] h-auto mx-auto rounded-xl">
                    <div class="space-y-1 w-full">
                        <div class="bg-white p-2 rounded-2xl border border-amber-100 flex items-center justify-between">
                            <span class="text-xs font-bold text-gray-400 uppercase">1 khối (cm³)</span>
                            <input type="number" id="ans-122-3a" class="w-24 text-2xl font-black text-amber-900 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                        </div>
                        <div class="bg-amber-600 p-2 rounded-2xl flex items-center justify-between text-white">
                            <span class="text-xs font-bold uppercase">Tổng (cm³)</span>
                            <input type="number" id="ans-122-3b" class="w-32 text-4xl font-black text-right bg-transparent border-none focus:ring-0 placeholder-white/50" placeholder="?">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-122" onclick="submit122()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.submit122 = function() {
                    const a1 = document.getElementById('ans-122-1').value;
                    const a2 = document.getElementById('ans-122-2').value;
                    const a3a = document.getElementById('ans-122-3a').value;
                    const a3b = document.getElementById('ans-122-3b').value;

                    if (!a1 || !a2 || !a3a || !a3b) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành hết bài nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    
                    // Feedback resets
                    ['1', '2', '3'].forEach(id => {
                        const box = document.getElementById('box-122-' + id);
                        box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                        box.classList.add('border-2');
                    });

                    let c1 = (parseInt(a1) === 240);
                    let c2 = (parseInt(a2) === 480);
                    let c3 = (parseInt(a3a) === 100 && parseInt(a3b) === 600);

                    if (c1) { score += 3; document.getElementById('box-122-1').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-122-1').classList.add('border-red-400', 'bg-red-50'); }
                    if (c2) { score += 3; document.getElementById('box-122-2').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-122-2').classList.add('border-red-400', 'bg-red-50'); }
                    if (c3) { score += 4; document.getElementById('box-122-3').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-122-3').classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 6 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-122");
                    }
                    alert("Điểm của bé: " + score + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Công thức tính thể tích hình hộp chữ nhật là gì?", "options": ["V = a + b + c", "V = a × b × c", "V = (a + b) × c", "V = a × b ÷ c"], "answer": 1, "level": 1 },
        { "question": "Một hình hộp chữ nhật có ba kích thước: 2dm, 3dm, 4dm. Thể tích là:", "options": ["9 dm³", "24 dm³", "12 dm³", "20 dm³"], "answer": 1, "level": 1 },
        { "question": "Nếu gấp mỗi kích thước của hình hộp chữ nhật lên 2 lần thì thể tích gấp lên mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 3, "level": 2 }
    ]
};
