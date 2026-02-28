export const lesson121 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "121",
    "title": "LUYỆN TẬP: DIỆN TÍCH HÌNH LẬP PHƯƠNG",
    "desc": "Bài 51: Luyện tập về diện tích xung quanh và diện tích toàn phần của hình lập phương (Trang 50).",
    "content": `
        <div class="space-y-12 md:space-y-20">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-emerald-50 p-8 md:p-10 rounded-[32px] md:rounded-[48px] border-l-[12px] border-emerald-600 shadow-sm animate-fade-in text-xl md:text-2xl font-bold text-emerald-900 leading-relaxed">
                Thực hành vận dụng linh hoạt công thức tính Sxq và Stp vào các tình huống thực tế: dán đèn lồng, phủ kem bánh, trang trí chậu cây và ghép khối hình.
            </div>

            <!-- 🖍️ Nhắc lại kiến thức -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div class="bg-indigo-600 p-10 rounded-[40px] text-white shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-all">
                    <p class="text-xl md:text-2xl font-bold opacity-80 mb-2">Diện tích xung quanh (4 mặt)</p>
                    <p class="text-4xl md:text-6xl font-black">S<sub>xq</sub> = (a × a) × 4</p>
                </div>
                <div class="bg-purple-600 p-10 rounded-[40px] text-white shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-all">
                    <p class="text-xl md:text-2xl font-bold opacity-80 mb-2">Diện tích toàn phần (6 mặt)</p>
                    <p class="text-4xl md:text-6xl font-black">S<sub>tp</sub> = (a × a) × 6</p>
                </div>
            </div>

            [[TUTOR|math-51-practice|Chào các em! Hôm nay chúng ta sẽ cùng giải các bài toán thực tế nhé. Hãy nhớ kỹ: Bài nào yêu cầu tính 'xung quanh' thì nhân 4, 'toàn phần' thì nhân 6. Còn bài nào đặc biệt như 'không nắp' thì ta phải đếm số mặt thực tế nhé!]]
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-20">
            <!-- Bài tập 1 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl">
                <p class="font-black text-3xl md:text-5xl mb-12 text-indigo-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">1</span>
                    Tính diện tích các mảnh nhựa màu cần sử dụng cho mỗi bóng đèn hình lập phương dưới đây:
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/121-b1-lamps.png" alt="Đèn lồng" class="w-full h-auto rounded-[32px] border-4 border-indigo-50 shadow-lg">
                    </div>
                    <div class="flex-1 w-full space-y-6">
                        <div class="bg-gray-50 p-6 rounded-3xl flex items-center justify-between gap-6 border-2 border-transparent focus-within:border-indigo-300 transition-all">
                            <span class="font-black text-2xl text-gray-700">Đèn 25 cm:</span>
                            <div class="flex items-center gap-3">
                                <input type="number" id="ans-121-1a" class="w-32 md:w-48 text-3xl font-black text-indigo-600 text-right bg-white p-4 rounded-2xl shadow-inner border-none focus:ring-2 focus:ring-indigo-500" placeholder="?">
                                <span class="font-black text-gray-400">cm²</span>
                            </div>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-3xl flex items-center justify-between gap-6 border-2 border-transparent focus-within:border-indigo-300 transition-all">
                            <span class="font-black text-2xl text-gray-700">Đèn 15 cm:</span>
                            <div class="flex items-center gap-3">
                                <input type="number" id="ans-121-1b" class="w-32 md:w-48 text-3xl font-black text-indigo-600 text-right bg-white p-4 rounded-2xl shadow-inner border-none focus:ring-2 focus:ring-indigo-500" placeholder="?">
                                <span class="font-black text-gray-400">cm²</span>
                            </div>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-3xl flex items-center justify-between gap-6 border-2 border-transparent focus-within:border-indigo-300 transition-all">
                            <span class="font-black text-2xl text-gray-700">Đèn 30 cm:</span>
                            <div class="flex items-center gap-3">
                                <input type="number" id="ans-121-1c" class="w-32 md:w-48 text-3xl font-black text-indigo-600 text-right bg-white p-4 rounded-2xl shadow-inner border-none focus:ring-2 focus:ring-indigo-500" placeholder="?">
                                <span class="font-black text-gray-400">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-pink-50 rounded-full blur-3xl opacity-50"></div>
                <p class="font-black text-3xl md:text-5xl mb-12 text-pink-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-pink-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">2</span>
                    Mai phủ kem quanh 4 mặt xung quanh và mặt trên cùng của bánh lập phương cạnh 10 cm. Tính diện tích phủ kem.
                </p>
                <div class="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/121-b2-mai-cake.png" alt="Bánh kem" class="w-full h-auto rounded-[32px] border-4 border-pink-50 shadow-lg">
                    </div>
                    <div class="flex-1 w-full flex flex-col items-center gap-8">
                        <div class="bg-pink-50 p-8 rounded-[40px] text-center w-full">
                            <p class="text-2xl font-black text-pink-900 mb-4 italic">Mai phủ mấy mặt nhỉ?</p>
                            <p class="text-xl font-bold text-pink-700">4 mặt xung quanh + 1 mặt trên = 5 mặt</p>
                        </div>
                        <div class="flex items-center gap-6 bg-white p-10 rounded-[48px] shadow-2xl border-4 border-pink-100">
                            <input type="number" id="ans-121-2" class="w-48 md:w-64 text-6xl font-black text-pink-600 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                            <span class="text-4xl font-black text-pink-300">cm²</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl">
                <p class="font-black text-3xl md:text-5xl mb-12 text-amber-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-amber-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">3</span>
                    Rô-bốt trang trí các mặt xung quanh chậu cây với giá 25 đồng/cm². Tính số tiền Nam cần trả (Cạnh chậu 20 cm).
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/121-b3-robot-pot.png" alt="Chậu cây" class="w-full h-auto rounded-[32px] border-4 border-amber-50 shadow-lg">
                    </div>
                    <div class="flex-1 w-full space-y-8">
                        <div class="bg-gray-50 p-8 rounded-[40px]">
                            <p class="font-bold text-gray-500 mb-2 uppercase tracking-widest text-sm">Bước 1: Tính diện tích xung quanh (4 mặt)</p>
                            <div class="flex items-center gap-4">
                                <input type="number" id="ans-121-3a" class="w-full bg-white p-5 rounded-3xl text-3xl font-black text-gray-800 border-2 border-amber-100 shadow-inner text-right" placeholder="cm²">
                            </div>
                        </div>
                        <div class="bg-amber-600 p-8 rounded-[40px] text-white shadow-xl shadow-amber-200">
                            <p class="font-bold mb-2 uppercase tracking-widest text-sm opacity-80">Bước 2: Tính tổng số tiền (× 25đ)</p>
                            <div class="flex items-center gap-4">
                                <input type="number" id="ans-121-3b" class="w-full bg-amber-500 p-5 rounded-3xl text-4xl font-black text-white border-2 border-amber-400 shadow-inner text-right placeholder-amber-300" placeholder="?">
                                <span class="font-black text-2xl text-amber-100">ĐỒNG</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-blue-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">4</span>
                    Đố vui: Ghép hai hình lập phương cạnh 4cm thành hình hộp chữ nhật.
                </p>
                <div class="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/121-b4-kids-cubes.png" alt="Ghép hình" class="w-full h-auto rounded-[32px] border-4 border-blue-50 shadow-lg">
                    </div>
                    <div class="flex-1 w-full space-y-8">
                        <div class="bg-blue-50 p-8 rounded-[40px] border-2 border-blue-100 shadow-inner">
                            <p class="text-2xl font-bold text-blue-900 leading-relaxed italic">
                                Mai nói: "Diện tích toàn phần của hình hộp chữ nhật gấp 2 lần diện tích toàn phần của hình lập phương." Mai nói đúng hay sai?
                            </p>
                        </div>
                        <div class="flex gap-6">
                            <button id="btn-121-4-true" onclick="select4(true)" class="flex-1 py-10 rounded-[32px] border-4 border-emerald-200 bg-emerald-50 text-emerald-700 font-black text-4xl hover:bg-emerald-600 hover:text-white transition-all">ĐÚNG</button>
                            <button id="btn-121-4-false" onclick="select4(false)" class="flex-1 py-10 rounded-[32px] border-4 border-rose-200 bg-rose-50 text-rose-700 font-black text-4xl hover:bg-rose-600 hover:text-white transition-all">SAI</button>
                        </div>
                        <input type="hidden" id="ans-121-4">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center py-10">
                <button id="btn-submit-121" onclick="submit121()" class="px-24 py-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[56px] font-black text-5xl shadow-2xl shadow-indigo-200 active:scale-95 transition-all flex items-center gap-8 group">
                    <span>HOÀN THÀNH</span>
                    <svg class="w-14 h-14 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <script>
                window.select4 = function(val) {
                    document.getElementById('ans-121-4').value = val ? "true" : "false";
                    document.getElementById('btn-121-4-true').className = val ? "flex-1 py-10 rounded-[32px] border-4 border-emerald-600 bg-emerald-600 text-white font-black text-4xl" : "flex-1 py-10 rounded-[32px] border-4 border-emerald-200 bg-emerald-50 text-emerald-700 font-black text-4xl";
                    document.getElementById('btn-121-4-false').className = !val ? "flex-1 py-10 rounded-[32px] border-4 border-rose-600 bg-rose-600 text-white font-black text-4xl" : "flex-1 py-10 rounded-[32px] border-4 border-rose-200 bg-rose-50 text-rose-700 font-black text-4xl";
                };

                window.submit121 = function() {
                    const a1a = document.getElementById('ans-121-1a').value;
                    const a1b = document.getElementById('ans-121-1b').value;
                    const a1c = document.getElementById('ans-121-1c').value;
                    const a2 = document.getElementById('ans-121-2').value;
                    const a3a = document.getElementById('ans-121-3a').value;
                    const a3b = document.getElementById('ans-121-3b').value;
                    const a4 = document.getElementById('ans-121-4').value;

                    if (!a1a || !a1b || !a1c || !a2 || !a3a || !a3b || !a4) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành tất cả các bài tập trước khi nộp nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // Bài 1: 6 sides assumed for lantern frame stickers
                    // 25*25*6 = 3750
                    if (parseInt(a1a) === 3750) { score += 1; feedback += "✅ 1a: Đúng!\\n"; } else { feedback += "❌ 1a: Sai rồi (25x25x6=3750).\\n"; }
                    // 15*15*6 = 1350
                    if (parseInt(a1b) === 1350) { score += 1; feedback += "✅ 1b: Đúng!\\n"; } else { feedback += "❌ 1b: Sai rồi (15x15x6=1350).\\n"; }
                    // 30*30*6 = 5400
                    if (parseInt(a1c) === 5400) { score += 1; feedback += "✅ 1c: Đúng!\\n"; } else { feedback += "❌ 1c: Sai rồi (30x30x6=5400).\\n"; }

                    // Bài 2: 5 sides (Sxq + 1 top) -> 10*10*5 = 500
                    if (parseInt(a2) === 500) { score += 2; feedback += "✅ 2: Chính xác! 5 mặt là 500 cm².\\n"; } else { feedback += "❌ 2: Bé kiểm tra lại nhé, 5 mặt thôi (10x10x5=500).\\n"; }

                    // Bài 3: Sxq (4 sides) -> 20*20*4 = 1600. Cash = 1600 * 25 = 40000
                    if (parseInt(a3a) === 1600) { score += 1; feedback += "✅ 3a: Sxq đúng!\\n"; } else { feedback += "❌ 3a: Sai rồi (20x20x4=1600).\\n"; }
                    if (parseInt(a3b) === 40000) { score += 2; feedback += "✅ 3b: Tổng tiền đúng!\\n"; } else { feedback += "❌ 3b: Tính lại tiền nhé (1600x25=40000).\\n"; }

                    // Bài 4: Mai falls false. Joined surface area loses 2 faces.
                    if (a4 === "false") { score += 2; feedback += "✅ 4: Đúng rồi! Mai nói sai vì diện tích bị hụt đi 2 mặt tiếp giáp.\\n"; } else { feedback += "❌ 4: Ôi, Mai nói sai bé ạ, vì khi ghép lại ta 'mất' 2 mặt ở giữa.\\n"; }

                    const finalScore = score;
                    const status = finalScore >= 8 ? "XS" : (finalScore >= 5 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        const report = "1: " + a1a + "," + a1b + "," + a1c + " | 2: " + a2 + " | 3: " + a3a + "," + a3b + " | 4: " + a4;
                        window.submitMathLesson(report, status, "btn-submit-121");
                    }

                    alert(feedback + "\\nĐiểm của bé: " + finalScore + "/10");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Một hộp không có nắp hình lập phương cạnh 10cm. Diện tích cần dán giấy là bao nhiêu mặt?", "options": ["4 mặt", "5 mặt", "6 mặt", "1 mặt"], "answer": 1, "level": 1 },
        { "question": "Hai hình lập phương cạnh 1cm xếp cạnh nhau. Diện tích toàn phần khối mới là bao nhiêu?", "options": ["12 cm²", "10 cm²", "6 cm²", "8 cm²"], "answer": 1, "level": 2 },
        { "question": "Diện tích một mặt hình lập phương là 9 cm². Diện tích toàn phần là:", "options": ["36 cm²", "54 cm²", "81 cm²", "45 cm²"], "answer": 1, "level": 1 }
    ]
};
