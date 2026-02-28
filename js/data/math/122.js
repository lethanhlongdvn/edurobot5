export const lesson122 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "122",
    "title": "BÀI 52. THỂ TÍCH CỦA HÌNH HỘP CHỮ NHẬT (TIẾT 1)",
    "desc": "Bài 52: Cách tính thể tích hình hộp chữ nhật bằng công thức V = a × b × c (Trang 51-52).",
    "content": `
        <div class="space-y-12 md:space-y-20">
            <!-- 🎯 Khám phá -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-[100px] -z-10"></div>
                <h3 class="text-indigo-900 font-black text-4xl md:text-6xl mb-10 flex items-center gap-6">
                    <span class="p-4 bg-indigo-600 rounded-3xl shadow-lg shadow-indigo-200">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </span>
                    Khám phá
                </h3>
                
                <div class="flex flex-col items-center gap-10">
                    <img src="hinh_anh/toan/toan_tap_2/122-khampha.png" alt="Khám phá thể tích" class="w-full max-w-4xl h-auto rounded-[32px] border-4 border-blue-50 shadow-xl">
                    
                    <div class="bg-blue-50 p-10 rounded-[40px] text-2xl md:text-3xl font-bold text-blue-900 leading-relaxed shadow-inner w-full">
                        <p class="mb-4">Hình hộp chữ nhật trên chứa được: <span class="text-indigo-600 font-black">6 × 5 × 4 = 120</span> (hình lập phương 1dm³).</p>
                        <p>Thể tích của hình hộp chữ nhật đó là: <span class="text-indigo-600 font-black text-4xl">120 dm³</span>.</p>
                    </div>
                </div>
            </div>

            <!-- 🖍️ Công thức -->
            <div class="bg-pink-600 p-12 md:p-16 rounded-[48px] md:rounded-[64px] text-white shadow-2xl shadow-pink-200 transform hover:scale-[1.02] transition-all relative overflow-hidden">
                <div class="absolute -left-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
                <h4 class="text-2xl md:text-3xl font-bold opacity-80 mb-6 uppercase tracking-widest text-center">Ghi nhớ công thức</h4>
                <div class="flex flex-col items-center gap-12">
                   <img src="hinh_anh/toan/toan_tap_2/122-formula.png" alt="Công thức thể tích" class="w-full max-w-4xl h-auto rounded-[32px] border-4 border-pink-400/50 shadow-2xl">
                   <div class="text-center space-y-4">
                        <p class="text-5xl md:text-8xl font-black tracking-tighter shadow-sm">V = a × b × c</p>
                        <p class="text-xl md:text-2xl font-medium opacity-90 italic">(a, b, c là ba kích thước cùng đơn vị đo)</p>
                   </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-20">
            <!-- Bài tập 1 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl">
                <p class="font-black text-3xl md:text-5xl mb-12 text-indigo-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">1</span>
                    Tính thể tích hình hộp chữ nhật có chiều dài 8 cm, chiều rộng 5 cm và chiều cao 6 cm.
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="flex-1 w-full space-y-6">
                        <div class="bg-gray-50 p-8 rounded-[40px] border-4 border-indigo-50 flex items-center gap-6">
                            <span class="text-3xl font-black text-gray-400">V = </span>
                            <input type="number" id="ans-122-1" class="w-full text-5xl font-black text-indigo-600 bg-white p-6 rounded-3xl shadow-inner border-none focus:ring-4 focus:ring-indigo-300 text-right" placeholder="?">
                            <span class="text-3xl font-black text-gray-500">cm³</span>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/3 bg-indigo-50 p-10 rounded-[40px] border-2 border-indigo-100 flex flex-col items-center">
                        <p class="text-2xl font-black text-indigo-900 mb-4 opacity-70 italic">Gợi ý</p>
                        <p class="text-3xl font-black text-indigo-600">8 × 5 × 6 = ?</p>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl">
                <p class="font-black text-3xl md:text-5xl mb-12 text-emerald-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">2</span>
                    Bố của Mai vừa làm một bể cá dạng hình hộp chữ nhật với kích thước như hình dưới đây. Tính thể tích của bể cá đó.
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/122-b2-beca.png" alt="Bể cá" class="w-full h-auto rounded-[32px] border-4 border-emerald-50 shadow-lg">
                    </div>
                    <div class="flex-1 w-full space-y-8">
                        <div class="bg-emerald-50 p-10 rounded-[40px] border-4 border-emerald-100">
                             <div class="flex items-center gap-6">
                                <span class="text-3xl font-black text-emerald-900">V = </span>
                                <input type="number" id="ans-122-2" class="w-full text-6xl font-black text-emerald-600 bg-white p-8 rounded-[32px] shadow-2xl border-none focus:ring-4 focus:ring-emerald-300 text-right" placeholder="?">
                                <span class="text-3xl font-black text-emerald-300">dm³</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl">
                <p class="font-black text-3xl md:text-5xl mb-12 text-amber-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-amber-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">3</span>
                    Việt tạo một khối hình bằng cách ghép 6 hình hộp chữ nhật (mỗi hình có chiều dài 10 cm, chiều rộng 5 cm và chiều cao 2 cm). Thể tích của khối hình đó là bao nhiêu?
                </p>
                <div class="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/122-b3-blocks.png" alt="Khối ghép" class="w-full h-auto rounded-[32px] border-4 border-amber-50 shadow-lg">
                    </div>
                    <div class="flex-1 w-full space-y-8">
                        <div class="bg-amber-50 p-8 rounded-[32px]">
                            <p class="font-bold text-amber-800 mb-2 uppercase tracking-widest text-sm">Bước 1: Tính thể tích 1 hình nhỏ</p>
                            <input type="number" id="ans-122-3a" class="w-full bg-white p-5 rounded-2xl text-3xl font-black text-amber-900 border-2 border-amber-200 text-right" placeholder="cm³">
                        </div>
                        <div class="bg-amber-600 p-10 rounded-[48px] text-white shadow-2xl shadow-amber-200">
                            <p class="font-bold mb-4 uppercase tracking-widest text-sm opacity-80">Bước 2: Tổng thể tích (× 6)</p>
                            <div class="flex items-center gap-6">
                                <input type="number" id="ans-122-3b" class="w-full bg-amber-500 p-8 rounded-[32px] text-6xl font-black text-white border-4 border-amber-400 shadow-inner text-right placeholder-amber-300" placeholder="?">
                                <span class="text-4xl font-black text-amber-100">cm³</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center py-10">
                <button id="btn-submit-122" onclick="submit122()" class="px-24 py-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[56px] font-black text-5xl shadow-2xl shadow-indigo-200 active:scale-95 transition-all flex items-center gap-8 group">
                    <span>HOÀN THÀNH</span>
                    <svg class="w-14 h-14 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <script>
                window.submit122 = function() {
                    const a1 = document.getElementById('ans-122-1').value;
                    const a2 = document.getElementById('ans-122-2').value;
                    const a3a = document.getElementById('ans-122-3a').value;
                    const a3b = document.getElementById('ans-122-3b').value;

                    if (!a1 || !a2 || !a3a || !a3b) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành tất cả các bài tập trước khi nộp nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // Bài 1: 8 * 5 * 6 = 240
                    if (parseInt(a1) === 240) { score += 3; feedback += "✅ Bài 1: Chính xác! 8 × 5 × 6 = 240 cm³.\\n"; } else { feedback += "❌ Bài 1: Sai rồi, bé tính lại nhé (8 × 5 × 6).\\n"; }

                    // Bài 2: 10 * 6 * 8 = 480
                    if (parseInt(a2) === 480) { score += 3; feedback += "✅ Bài 2: Tuyệt vời! Thể tích bể cá là 480 dm³.\\n"; } else { feedback += "❌ Bài 2: Bé tính lại tích 10 × 6 × 8 nhé.\\n"; }

                    // Bài 3: 1 block = 10*5*2 = 100. 6 blocks = 600
                    if (parseInt(a3a) === 100) { score += 2; feedback += "✅ Bài 3a: Thể tích 1 khối nhỏ đúng rồi!\\n"; } else { feedback += "❌ Bài 3a: Tính lại 10 × 5 × 2 bé ơi.\\n"; }
                    if (parseInt(a3b) === 600) { score += 2; feedback += "✅ Bài 3b: Tổng thể tích 6 khối là 600 cm³! Quá giỏi!\\n"; } else { feedback += "❌ Bài 3b: Lấy 100 nhân với 6 khối nhé.\\n"; }

                    const finalScore = score;
                    const status = finalScore >= 8 ? "XS" : (finalScore >= 5 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        const report = "1: " + a1 + " | 2: " + a2 + " | 3: " + a3a + "," + a3b;
                        window.submitMathLesson(report, status, "btn-submit-122");
                    }

                    alert(feedback + "\\nĐiểm của bé: " + finalScore + "/10");
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
