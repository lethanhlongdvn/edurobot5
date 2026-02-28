export const lesson120 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "120",
    "title": "DIỆN TÍCH XUNG QUANH VÀ TOÀN PHẦN HÌNH LẬP PHƯƠNG",
    "desc": "Bài 51: Diện tích xung quanh và diện tích toàn phần của hình lập phương (Tiết 1 - Trang 48-49).",
    "content": `
        <div class="space-y-12 md:space-y-20">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-indigo-50 p-8 md:p-10 rounded-[32px] md:rounded-[48px] border-l-[12px] border-indigo-600 shadow-sm animate-fade-in">
                <h3 class="text-indigo-900 font-black text-2xl md:text-4xl mb-6 flex items-center gap-4">
                    <span class="text-4xl md:text-5xl">🎯</span> Mục tiêu bài học
                </h3>
                <ul class="list-disc list-inside text-indigo-800 space-y-4 font-bold text-xl md:text-2xl leading-relaxed">
                    <li>Nắm vững công thức tính diện tích xung quanh (Sxq) của hình lập phương.</li>
                    <li>Nắm vững công thức tính diện tích toàn phần (Stp) của hình lập phương.</li>
                    <li>Biết cách vận dụng vào các bài toán thực tế như dán giấy, may gối, quấn quà.</li>
                </ul>
            </div>

            <!-- 📖 Khám phá kiến thức -->
            <div class="glass-card p-8 md:p-14 rounded-[48px] md:rounded-[64px] bg-white border border-indigo-100 shadow-2xl relative overflow-hidden">
                <div class="absolute -right-20 -top-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                
                <h4 class="text-3xl md:text-5xl font-black text-indigo-800 mb-12 flex items-center gap-6">
                    <span class="p-4 md:p-6 bg-indigo-600 text-white rounded-[24px] md:rounded-[32px] shadow-xl shadow-indigo-200">
                        <svg class="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </span>
                    1. Diện tích xung quanh
                </h4>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div class="space-y-8">
                        <div class="bg-amber-50 p-8 rounded-[40px] border-2 border-amber-200 shadow-inner">
                            <p class="text-amber-900 font-bold text-xl md:text-2xl italic leading-relaxed">
                                "Hình lập phương là hình hộp chữ nhật đặc biệt có 6 mặt là các hình vuông bằng nhau."
                            </p>
                        </div>
                        <p class="text-gray-700 text-xl md:text-2xl leading-relaxed">
                            Vì các mặt đều bằng nhau, nên diện tích xung quanh (4 mặt bên) chính bằng diện tích một mặt nhân với 4.
                        </p>
                        <div class="bg-indigo-600 p-8 rounded-[32px] text-white shadow-xl">
                            <p class="text-3xl md:text-4xl font-black text-center">
                                S<sub>xq</sub> = (a × a) × 4
                            </p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-xq.png" alt="Khám phá Dtxq" class="w-full max-w-md h-auto rounded-[32px] shadow-2xl border-4 border-indigo-100">
                    </div>
                </div>

                <h4 class="text-3xl md:text-5xl font-black text-purple-800 mb-12 flex items-center gap-6">
                    <span class="p-4 md:p-6 bg-purple-600 text-white rounded-[24px] md:rounded-[32px] shadow-xl shadow-purple-200">
                        <svg class="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                    </span>
                    2. Diện tích toàn phần
                </h4>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="flex justify-center order-2 lg:order-1">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-tp.png" alt="Khám phá Dttp" class="w-full max-w-md h-auto rounded-[32px] shadow-2xl border-4 border-purple-100">
                    </div>
                    <div class="space-y-8 order-1 lg:order-2">
                        <p class="text-gray-700 text-xl md:text-2xl leading-relaxed">
                            Diện tích toàn phần là tổng diện tích của tất cả 6 mặt. Do đó, ta tính diện tích một mặt rồi nhân với 6.
                        </p>
                        <div class="bg-purple-600 p-8 rounded-[32px] text-white shadow-xl">
                            <p class="text-3xl md:text-4xl font-black text-center">
                                S<sub>tp</sub> = (a × a) × 6
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 🤖 Thầy E hướng dẫn -->
            [[TUTOR|math-51-cube|Chào các em! Hình lập phương rất thú vị vì 6 mặt của nó đều là hình vuông bằng nhau. Vì vậy, các em chỉ cần tính diện tích của MỘT MẶT (cạnh x cạnh) rồi nhân với 4 (xung quanh) hoặc nhân với 6 (toàn phần) là xong ngay!]]
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-20">
            <!-- Bài tập 1 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative">
                <p class="font-black text-3xl md:text-5xl mb-12 text-indigo-700 flex items-baseline gap-6">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shadow-indigo-200">1</span>
                    Tính diện tích xung quanh và diện tích toàn phần của hình lập phương có độ dài cạnh là:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <!-- Câu a -->
                    <div class="bg-gray-50 p-8 rounded-[40px] border-4 border-transparent hover:border-indigo-200 transition-all shadow-inner">
                        <p class="text-3xl font-black text-indigo-700 mb-8 underline decoration-double decoration-indigo-200 underline-offset-8">a) Cạnh dài 12 cm</p>
                        <div class="space-y-6">
                            <div>
                                <label class="block text-gray-500 font-bold mb-2 uppercase text-xs">Diện tích xung quanh:</label>
                                <div class="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-md border-2 border-gray-50">
                                    <input type="number" id="ans-120-1a-xq" class="w-full text-4xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                    <span class="text-2xl font-black text-gray-300">cm²</span>
                                </div>
                            </div>
                            <div>
                                <label class="block text-gray-500 font-bold mb-2 uppercase text-xs">Diện tích toàn phần:</label>
                                <div class="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-md border-2 border-gray-50">
                                    <input type="number" id="ans-120-1a-tp" class="w-full text-4xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                    <span class="text-2xl font-black text-gray-300">cm²</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-gray-50 p-8 rounded-[40px] border-4 border-transparent hover:border-indigo-200 transition-all shadow-inner">
                        <p class="text-3xl font-black text-emerald-700 mb-8 underline decoration-double decoration-emerald-200 underline-offset-8">b) Cạnh dài 1,5 m</p>
                        <div class="space-y-6">
                            <div>
                                <label class="block text-gray-500 font-bold mb-2 uppercase text-xs">Diện tích xung quanh:</label>
                                <div class="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-md border-2 border-gray-50">
                                    <input type="number" step="0.01" id="ans-120-1b-xq" class="w-full text-4xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                    <span class="text-2xl font-black text-gray-300">m²</span>
                                </div>
                            </div>
                            <div>
                                <label class="block text-gray-500 font-bold mb-2 uppercase text-xs">Diện tích toàn phần:</label>
                                <div class="flex items-center gap-4 bg-white p-5 rounded-3xl shadow-md border-2 border-gray-50">
                                    <input type="number" step="0.01" id="ans-120-1b-tp" class="w-full text-4xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                    <span class="text-2xl font-black text-gray-300">m²</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-amber-700 flex items-baseline gap-6">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-amber-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shadow-amber-200">2</span>
                    Bài toán quấn túi bóng
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="flex-1 space-y-8">
                        <div class="bg-amber-50 p-8 rounded-[40px] border-2 border-amber-100 text-xl md:text-2xl text-amber-900 font-bold leading-relaxed shadow-inner">
                            Cửa hàng bánh ngọt thường bảo quản bánh bằng cách cuốn một lớp túi bóng trong suốt vừa đủ quanh chiếc bánh như hình bên. Biết chiếc bánh bên có dạng hình lập phương cạnh 9 cm. Hãy tính diện tích phần túi bóng cần sử dụng.
                        </div>
                        <div class="bg-white p-8 rounded-[40px] shadow-xl border-4 border-gray-50 flex items-center justify-center gap-6">
                            <input type="number" id="ans-120-2" class="w-full text-5xl md:text-7xl font-black text-amber-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                            <span class="text-3xl md:text-5xl font-black text-gray-300">cm²</span>
                        </div>
                    </div>
                    <div class="w-full lg:w-[400px]">
                        <img src="hinh_anh/toan/toan_tap_2/120-b2-cake.png" alt="Bánh quấn túi bóng" class="w-full h-auto rounded-[48px] shadow-2xl border-4 border-amber-200 rotate-2">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center py-10">
                <button id="btn-submit-120" onclick="submit120()" class="px-20 py-8 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[48px] font-black text-4xl shadow-2xl shadow-indigo-200 active:scale-95 transition-all flex items-center gap-6 group">
                    <span>NỘP BÀI</span>
                    <svg class="w-12 h-12 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <script>
                window.submit120 = function() {
                    const a1ax = document.getElementById('ans-120-1a-xq').value;
                    const a1at = document.getElementById('ans-120-1a-tp').value;
                    const a1bx = document.getElementById('ans-120-1b-xq').value;
                    const a1bt = document.getElementById('ans-120-1b-tp').value;
                    const a2 = document.getElementById('ans-120-2').value;

                    if (!a1ax || !a1at || !a1bx || !a1bt || !a2) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành tất cả các ô trống trước khi nộp bài nhé! 🌟");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // a) 12cm -> Sxq=576, Stp=864
                    if (parseInt(a1ax) === 576) { score += 2; feedback += "✅ 1a: Sxq = 576 đúng!\\n"; } else { feedback += "❌ 1a: Sxq sai rồi (12x12x4=576).\\n"; }
                    if (parseInt(a1at) === 864) { score += 2; feedback += "✅ 1a: Stp = 864 đúng!\\n"; } else { feedback += "❌ 1a: Stp sai rồi (12x12x6=864).\\n"; }

                    // b) 1.5m -> Sxq=9, Stp=13.5
                    if (parseFloat(a1bx) === 9) { score += 2; feedback += "✅ 1b: Sxq = 9 đúng!\\n"; } else { feedback += "❌ 1b: Sxq sai rồi (1.5x1.5x4=9).\\n"; }
                    if (parseFloat(a1bt) === 13.5) { score += 2; feedback += "✅ 1b: Stp = 13.5 đúng!\\n"; } else { feedback += "❌ 1b: Stp sai rồi (1.5x1.5x6=13.5).\\n"; }

                    // 2) 9cm -> wrap around sides = 324
                    if (parseInt(a2) === 324) { score += 2; feedback += "✅ 2: Chính xác, diện tích túi bóng là 324 cm²!\\n"; } else { feedback += "❌ 2: Bé kiểm tra lại nhé, quấn QUANH bánh là tính diện tích xung quanh (9x9x4=324).\\n"; }

                    const finalScore = score;
                    const status = finalScore >= 8 ? "XS" : (finalScore >= 5 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        const report = "1a: " + a1ax + "," + a1at + " | 1b: " + a1bx + "," + a1bt + " | 2: " + a2;
                        window.submitMathLesson(report, status, "btn-submit-120");
                    }

                    alert(feedback + "\\nĐiểm của bé: " + finalScore + "/10");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Một hình lập phương có cạnh 5 cm. Diện tích xung quanh là:", "options": ["25 cm²", "100 cm²", "125 cm²", "150 cm²"], "answer": 1, "level": 1 },
        { "question": "Diện tích toàn phần của hình lập phương có cạnh 2 dm là:", "options": ["16 dm²", "24 dm²", "4 dm²", "8 dm²"], "answer": 1, "level": 1 },
        { "question": "Nếu cạnh của hình lập phương gấp lên 2 lần thì diện tích xung quanh gấp lên mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 2 }
    ]
};
