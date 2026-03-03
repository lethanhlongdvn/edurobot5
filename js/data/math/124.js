export const lesson124 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "124",
    "title": "BÀI 53. THỂ TÍCH CỦA HÌNH LẬP PHƯƠNG",
    "desc": "Bài 53: Cách tính thể tích hình lập phương dựa trên công thức của hình hộp chữ nhật (Trang 54-55).",
    "content": `
        <div class="space-y-2 text-purple-900">
            <!-- 🎯 Khám phá -->
            <div class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <h3 class="font-black text-2xl md:text-3xl mb-1 flex items-center gap-2">
                    <span class="p-2 bg-purple-600 rounded-xl shadow-lg">💡</span>
                    Khám phá
                </h3>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 p-1 bg-purple-50 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/124-khampha.png" alt="Khám phá" class="w-full h-auto rounded-xl shadow-md border-2 border-white">
                    <div class="bg-white p-4 rounded-3xl flex items-center gap-4">
                        <div class="w-12 h-12 bg-purple-600 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-black text-2xl">!</div>
                        <p class="text-lg md:text-xl font-bold">Hình lập phương có <span class="text-purple-600">dài = rộng = cao</span>.</p>
                    </div>
                </div>
            </div>

            <!-- 🖍️ Công thức -->
            <div class="bg-pink-500 p-2 md:p-4 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                <div class="flex flex-col md:flex-row items-center gap-4">
                   <img src="hinh_anh/toan/toan_tap_2/124-formula.png" alt="Công thức" class="w-full max-w-[200px] h-auto rounded-xl border border-pink-400">
                   <div class="text-center md:text-left">
                        <p class="text-xs font-black uppercase opacity-60">Ghi nhớ</p>
                        <p class="text-4xl md:text-6xl font-black">V = a × a × a</p>
                        <p class="text-sm italic opacity-80">(a là độ dài cạnh)</p>
                   </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài tập 1 -->
            <div id="box-124-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-teal-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Hoàn thành bảng thể tích (V):
                </p>
                <div class="p-1 bg-teal-50 rounded-[32px]">
                    <table class="w-full text-center border-spacing-1 border-separate">
                        <thead>
                            <tr class="text-[10px] md:text-sm font-black text-teal-800 uppercase">
                                <th class="p-1">Cạnh (a)</th>
                                <th class="p-1 bg-white rounded-t-xl">10 cm</th>
                                <th class="p-1 bg-white rounded-t-xl">2,5 dm</th>
                                <th class="p-1 bg-white rounded-t-xl">0,4 m</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-1 font-black text-teal-900 text-xs uppercase">Thể tích (V)</td>
                                <td class="p-1 bg-white">
                                    <input type="number" id="ans-124-1a" class="w-full text-xl font-black text-teal-600 bg-gray-50 p-1 rounded-lg border-none text-center" placeholder="?">
                                </td>
                                <td class="p-1 bg-white text-teal-600">
                                    <input type="number" step="0.001" id="ans-124-1b" class="w-full text-xl font-black text-teal-600 bg-gray-50 p-1 rounded-lg border-none text-center" placeholder="?">
                                </td>
                                <td class="p-1 bg-white rounded-br-xl">
                                    <input type="number" step="0.001" id="ans-124-1c" class="w-full text-xl font-black text-teal-600 bg-gray-50 p-1 rounded-lg border-none text-center" placeholder="?">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-124-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-orange-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Bánh bông lan:
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-orange-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/124-b2-cake.png" alt="Bánh" class="w-full max-w-[200px] h-auto rounded-xl">
                    <div class="space-y-1 w-full">
                        <div class="bg-white p-2 rounded-2xl border border-orange-100 flex items-center justify-between">
                            <span class="text-xs font-bold text-gray-400">V ban đầu (cm³)</span>
                            <input type="number" id="ans-124-2a" class="w-24 text-2xl font-black text-orange-700 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                        </div>
                        <div class="bg-amber-100 p-2 rounded-2xl flex items-center justify-between">
                            <span class="text-xs font-bold text-amber-900">V còn lại (cm³)</span>
                            <input type="number" id="ans-124-2b" class="w-24 text-2xl font-black text-amber-800 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-124-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-rose-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-rose-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    Thử tài tinh mắt:
                </p>
                <div class="bg-rose-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/124-b3-mairobot.png" alt="Mai Robot" class="w-full max-w-[300px] h-auto mx-auto rounded-xl mb-1">
                    <div class="grid grid-cols-2 gap-1 px-1 pb-1">
                        <div class="bg-white/80 p-2 rounded-2xl">
                            <p class="text-[10px] font-black text-rose-900 mb-1">a) Mai bỏ bao nhiêu hình?</p>
                            <select id="ans-124-3a" class="w-full bg-rose-100 border-none rounded-lg text-rose-700 font-bold text-xs p-1">
                                <option value="">Chọn...</option>
                                <option value="A">12 hình</option>
                                <option value="B">10 hình</option>
                                <option value="C">8 hình</option>
                                <option value="D">6 hình</option>
                            </select>
                        </div>
                        <div class="bg-white/80 p-2 rounded-2xl">
                            <p class="text-[10px] font-black text-pink-900 mb-1">b) Thể tích Rô-bốt (cm³)?</p>
                            <select id="ans-124-3b" class="w-full bg-pink-100 border-none rounded-lg text-pink-700 font-bold text-xs p-1">
                                <option value="">Chọn...</option>
                                <option value="A">96</option>
                                <option value="B">72</option>
                                <option value="C">64</option>
                                <option value="D">32</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-124" onclick="submit124()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.submit124 = function() {
                    const a1a = document.getElementById('ans-124-1a').value;
                    const a1b = document.getElementById('ans-124-1b').value;
                    const a1c = document.getElementById('ans-124-1c').value;
                    const a2a = document.getElementById('ans-124-2a').value;
                    const a2b = document.getElementById('ans-124-2b').value;
                    const a3a = document.getElementById('ans-124-3a').value;
                    const a3b = document.getElementById('ans-124-3b').value;

                    if (!a1a || !a1b || !a1c || !a2a || !a2b || !a3a || !a3b) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành hết bài nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    
                    // Feedback resets
                    ['1', '2', '3'].forEach(id => {
                        const box = document.getElementById('box-124-' + id);
                        box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                        box.classList.add('border-2');
                    });

                    let c1 = (parseFloat(a1a) === 1000 && parseFloat(a1b) === 15.625 && parseFloat(a1c) === 0.064);
                    let c2 = (parseFloat(a2a) === 864 && parseFloat(a2b) === 648);
                    let c3 = (a3a === 'B' && a3b === 'C');

                    if (c1) { score += 3.5; document.getElementById('box-124-1').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-124-1').classList.add('border-red-400', 'bg-red-50'); }
                    if (c2) { score += 3.5; document.getElementById('box-124-2').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-124-2').classList.add('border-red-400', 'bg-red-50'); }
                    if (c3) { score += 3; document.getElementById('box-124-3').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-124-3').classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-124");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
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
