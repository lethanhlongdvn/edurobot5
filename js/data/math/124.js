export const lesson124 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "124",
    "title": "BÀI 53. THỂ TÍCH CỦA HÌNH LẬP PHƯƠNG",
    "desc": "Bài 53: Cách tính thể tích hình lập phương dựa trên công thức của hình hộp chữ nhật (Trang 54-55).",
    "content": `
        <div class="space-y-12 md:space-y-20">
            <!-- 🎯 Khám phá -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-bl-[100px] -z-10"></div>
                <h3 class="text-purple-900 font-black text-4xl md:text-6xl mb-10 flex items-center gap-6">
                    <span class="p-4 bg-purple-600 rounded-3xl shadow-lg shadow-purple-200">
                        <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    </span>
                    Khám phá
                </h3>
                
                <div class="flex flex-col items-center gap-10">
                    <img src="hinh_anh/toan/toan_tap_2/124-khampha.png" alt="Khám phá thể tích hình lập phương" class="w-full max-w-4xl h-auto rounded-[32px] border-4 border-purple-50 shadow-xl">
                    
                    <div class="bg-purple-50 p-10 rounded-[40px] text-2xl md:text-3xl font-bold text-purple-900 leading-relaxed shadow-inner w-full flex items-center gap-8">
                        <div class="w-20 h-20 bg-purple-600 rounded-2xl flex-shrink-0 flex items-center justify-center text-white font-black text-4xl">!</div>
                        <p>Hình lập phương chính là hình hộp chữ nhật đặc biệt có <span class="text-purple-600 font-black">chiều dài = chiều rộng = chiều cao</span>.</p>
                    </div>
                </div>
            </div>

            <!-- 🖍️ Công thức -->
            <div class="bg-pink-500 p-12 md:p-16 rounded-[48px] md:rounded-[64px] text-white shadow-2xl shadow-pink-200 transform hover:scale-[1.02] transition-all relative overflow-hidden">
                <div class="absolute -left-10 -bottom-10 w-60 h-60 bg-white/20 rounded-full blur-3xl"></div>
                <h4 class="text-2xl md:text-3xl font-bold opacity-90 mb-6 uppercase tracking-widest text-center">Ghi nhớ công thức</h4>
                <div class="flex flex-col flex-wrap items-center gap-12">
                   <img src="hinh_anh/toan/toan_tap_2/124-formula.png" alt="Công thức thể tích hình lập phương" class="w-full max-w-4xl h-auto rounded-[32px] border-4 border-pink-400/50 shadow-lg">
                   <div class="text-center space-y-4">
                        <p class="text-5xl md:text-8xl font-black tracking-tighter shadow-sm text-pink-50">V = a × a × a</p>
                        <p class="text-xl md:text-2xl font-medium opacity-90 italic">(Với a là độ dài cạnh của hình lập phương)</p>
                   </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-20">
            <!-- Bài tập 1 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl">
                <p class="font-black text-3xl md:text-5xl mb-12 text-teal-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">1</span>
                    Hoàn thành bảng tính thể tích hình lập phương sau:
                </p>
                <div class="overflow-x-auto overflow-y-hidden pb-4">
                    <table class="w-full text-center border-collapse">
                        <thead>
                            <tr>
                                <th class="p-6 bg-teal-50 border-4 border-teal-100 text-2xl font-bold text-teal-900 rounded-tl-[32px]">Cạnh (a)</th>
                                <th class="p-6 bg-teal-50 border-4 border-teal-100 text-2xl font-bold text-teal-900">10 cm</th>
                                <th class="p-6 bg-teal-50 border-4 border-teal-100 text-2xl font-bold text-teal-900">2,5 dm</th>
                                <th class="p-6 bg-teal-50 border-4 border-teal-100 text-2xl font-bold text-teal-900 rounded-tr-[32px]">0,4 m</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-6 bg-teal-50 border-4 border-teal-100 text-2xl font-bold text-teal-900 rounded-bl-[32px]">Thể tích (V)</td>
                                <td class="p-6 border-4 border-teal-100 bg-white group hover:bg-teal-50 transition-colors">
                                    <div class="flex items-center justify-center gap-2">
                                        <input type="number" id="ans-124-1a" class="w-32 text-3xl font-black text-teal-600 bg-gray-50 p-4 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-0 text-center transition-all" placeholder="?">
                                        <span class="text-xl font-bold text-gray-500">cm³</span>
                                    </div>
                                </td>
                                <td class="p-6 border-4 border-teal-100 bg-white group hover:bg-teal-50 transition-colors">
                                    <div class="flex items-center justify-center gap-2">
                                        <input type="number" step="0.001" id="ans-124-1b" class="w-40 text-3xl font-black text-teal-600 bg-gray-50 p-4 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-0 text-center transition-all" placeholder="?">
                                        <span class="text-xl font-bold text-gray-500">dm³</span>
                                    </div>
                                </td>
                                <td class="p-6 border-4 border-teal-100 bg-white group hover:bg-teal-50 transition-colors rounded-br-[32px]">
                                    <div class="flex items-center justify-center gap-2">
                                        <input type="number" step="0.001" id="ans-124-1c" class="w-40 text-3xl font-black text-teal-600 bg-gray-50 p-4 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-0 text-center transition-all" placeholder="?">
                                        <span class="text-xl font-bold text-gray-500">m³</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-orange-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-orange-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">2</span>
                    Bài toán về chiếc bánh bông lan
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/124-b2-cake.png" alt="Chiếc bánh bông lan" class="w-full h-auto rounded-[32px] border-4 border-orange-50 shadow-xl">
                    </div>
                    <div class="flex-1 w-full space-y-8">
                        <div class="bg-orange-50 p-8 rounded-[40px]">
                            <p class="text-xl font-bold text-orange-800 mb-4">a) Tính thể tích của chiếc bánh ban đầu (đáy là hình vuông 12cm, cao 6cm):</p>
                            <div class="flex items-center gap-4">
                                <span class="text-3xl font-black text-orange-600">V =</span>
                                <input type="number" id="ans-124-2a" class="w-full bg-white p-6 rounded-[24px] text-4xl font-black text-orange-700 border-4 border-orange-200 text-right focus:border-orange-500" placeholder="?">
                                <span class="text-2xl font-bold text-orange-700">cm³</span>
                            </div>
                        </div>
                        
                        <div class="bg-amber-100 p-8 rounded-[40px]">
                            <p class="text-xl font-bold text-amber-900 mb-4">b) Tính thể tích phần bánh còn lại (sau khi cắt miếng bánh lập phương cạnh 6cm):</p>
                            <div class="flex items-center gap-4">
                                <span class="text-3xl font-black text-amber-700">V_còn =</span>
                                <input type="number" id="ans-124-2b" class="w-full bg-white p-6 rounded-[24px] text-4xl font-black text-amber-800 border-4 border-amber-300 text-right focus:border-amber-600" placeholder="?">
                                <span class="text-2xl font-bold text-amber-800">cm³</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center py-10">
                <button id="btn-submit-124" onclick="submit124()" class="px-24 py-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[56px] font-black text-5xl shadow-2xl shadow-indigo-200 active:scale-95 transition-all flex items-center gap-8 group">
                    <span>HOÀN THÀNH</span>
                    <svg class="w-14 h-14 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <script>
                window.submit124 = function() {
                    const a1a = document.getElementById('ans-124-1a').value;
                    const a1b = document.getElementById('ans-124-1b').value;
                    const a1c = document.getElementById('ans-124-1c').value;
                    const a2a = document.getElementById('ans-124-2a').value;
                    const a2b = document.getElementById('ans-124-2b').value;

                    if (!a1a || !a1b || !a1c || !a2a || !a2b) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành tất cả các ô trống trước khi nộp nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // Bài 1: 
                    // 10 * 10 * 10 = 1000
                    if (parseFloat(a1a) === 1000) { score += 2; feedback += "✅ Bài 1.a: Tính đúng 10 × 10 × 10 = 1000!\\n"; } else { feedback += "❌ Bài 1.a: Thể tích lấy cạnh × cạnh × cạnh nha.\\n"; }
                    // 2.5 * 2.5 * 2.5 = 15.625
                    if (parseFloat(a1b) === 15.625) { score += 2; feedback += "✅ Bài 1.b: Tính đúng 15,625! Rất chính xác!\\n"; } else { feedback += "❌ Bài 1.b: Bé tính lại 2,5 × 2,5 × 2,5 nhé.\\n"; }
                    // 0.4 * 0.4 * 0.4 = 0.064
                    if (parseFloat(a1c) === 0.064) { score += 2; feedback += "✅ Bài 1.c: Tính số thập phân giỏi lắm (0,064)!\\n"; } else { feedback += "❌ Bài 1.c: Phép tính là 0,4 × 0,4 × 0,4 nhé.\\n"; }

                    // Bài 2:
                    // a) V = 12 * 12 * 6 = 864
                    if (parseInt(a2a) === 864) { score += 2; feedback += "✅ Bài 2.a: Khối lượng bánh đúng rồi (12 × 12 × 6 = 864 cm³).\\n"; } else { feedback += "❌ Bài 2.a: Bánh có đáy vuông 12cm, cao 6cm. Công thức 12 × 12 × 6.\\n"; }
                    // b) V còn = 864 - (6*6*6) = 864 - 216 = 648
                    if (parseInt(a2b) === 648) { score += 2; feedback += "✅ Bài 2.b: Xuất sắc! Phần bánh còn lại là 648 cm³.\\n"; } else { feedback += "❌ Bài 2.b: Lấy thể tích bánh trừ đi thể tích hộp lập phương (6×6×6 = 216) bé nhé.\\n"; }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        const report = "1: " + a1a + "," + a1b + "," + a1c + " | 2: " + a2a + "," + a2b;
                        window.submitMathLesson(report, status, "btn-submit-124");
                    }

                    alert(feedback + "\\nĐiểm của bé: " + score + "/10");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Thể tích hình lập phương có cạnh 5cm là:", "options": ["15 cm³", "25 cm³", "125 cm³", "50 cm³"], "answer": 2, "level": 1 },
        { "question": "Muốn tính thể tích hình lập phương, ta làm thế nào?", "options": ["Cạnh × cạnh", "Cạnh × cạnh × 6", "Cạnh × cạnh × cạnh", "Cạnh × cạnh × 4"], "answer": 2, "level": 1 },
        { "question": "Nếu tăng cạnh hình lập phương lên gấp đôi, thể tích thay đổi thế nào?", "options": ["Gấp 2 lần", "Gấp 4 lần", "Gấp 6 lần", "Gấp 8 lần"], "answer": 3, "level": 2 }
    ]
};
