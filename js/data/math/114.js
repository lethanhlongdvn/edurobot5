export const lesson114 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "114",
    "title": "LUYỆN TẬP CHUNG (Tiết 2)",
    "desc": "Bài 48: Luyện tập giải các bài toán thực tế về thể tích (Trang 39).",
    "content": `
        <div class="space-y-6 text-emerald-900">
            <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 md:p-10 rounded-[40px] shadow-2xl flex items-center gap-6 text-white">
                <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-4xl md:text-5xl">🎯</span>
                </div>
                <div>
                    <h3 class="text-2xl md:text-4xl font-black italic tracking-tight">Luyện tập chung</h3>
                    <p class="text-base md:text-2xl font-bold opacity-90">Giải toán thực tế về thể tích</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6">
            <!-- Bài 1 -->
            <div id="box-114-1" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-4 text-emerald-700 flex items-center gap-3">
                    <span class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black">1</span>
                    Hình nào có thể tích lớn nhất?
                </p>
                <div class="bg-emerald-50 p-4 md:p-6 rounded-[32px] grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button onclick="checkB114B1('A')" class="b114-1-opt bg-white p-4 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                        <img src="hinh_anh/toan/114-b1-A.png" class="h-24 md:h-28 object-contain mb-2">
                        <span class="font-black text-xl text-gray-300">A</span>
                    </button>
                    <button onclick="checkB114B1('B')" class="b114-1-opt bg-white p-4 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                        <img src="hinh_anh/toan/114-b1-B.png" class="h-24 md:h-28 object-contain mb-2">
                        <span class="font-black text-xl text-gray-300">B</span>
                    </button>
                    <button onclick="checkB114B1('C')" class="b114-1-opt bg-white p-4 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                        <img src="hinh_anh/toan/114-b1-C.png" class="h-24 md:h-28 object-contain mb-2">
                        <span class="font-black text-xl text-gray-300">C</span>
                    </button>
                    <button onclick="checkB114B1('D')" class="b114-1-opt bg-white p-4 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                        <img src="hinh_anh/toan/114-b1-D.png" class="h-24 md:h-28 object-contain mb-2">
                        <span class="font-black text-xl text-gray-300">D</span>
                    </button>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-114-2" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-4 text-emerald-700 flex items-center gap-3">
                    <span class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black">2</span>
                    Dùng hết 174m³ nước/năm. Trung bình mỗi tháng?
                </p>
                <div class="bg-emerald-50 p-4 md:p-6 rounded-[32px] flex flex-col gap-3">
                    <textarea id="ans-b114-2-text" rows="3" class="w-full bg-white border-none rounded-2xl p-4 text-xl md:text-2xl font-bold shadow-inner" placeholder="Nhập lời giải..."></textarea>
                    <div class="flex justify-end gap-2">
                        <button onclick="checkLesson114AI('2')" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl text-sm md:text-base font-black">AI CHẤM ✨</button>
                    </div>
                    <div id="fb-b114-2-ai" class="hidden text-sm md:text-base font-bold p-3 bg-white rounded-xl border-l-4 border-blue-500"></div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-114-3" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-4 text-emerald-700 flex items-center gap-3">
                    <span class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black">3</span>
                    Hộp đỏ, xanh, vàng: 25cm³; 24,5cm³; 25,75dm³.
                </p>
                <div class="bg-yellow-50 p-4 md:p-6 rounded-[32px] grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div class="bg-white p-4 rounded-2xl">
                        <p class="text-sm md:text-base font-bold text-red-500">Hộp Đỏ</p>
                        <select id="b114-3-do" class="w-full bg-red-50 border-none rounded-xl text-base font-black p-2">
                            <option value="">Chọn...</option>
                            <option value="25 cm3">25 cm³</option>
                            <option value="24.5 cm3">24,5 cm³</option>
                            <option value="25.75 dm3">25,75 dm³</option>
                        </select>
                    </div>
                    <div class="bg-white p-4 rounded-2xl">
                        <p class="text-sm md:text-base font-bold text-blue-500">Hộp Xanh</p>
                        <select id="b114-3-xanh" class="w-full bg-blue-50 border-none rounded-xl text-base font-black p-2">
                            <option value="">Chọn...</option>
                            <option value="25 cm3">25 cm³</option>
                            <option value="24.5 cm3">24,5 cm³</option>
                            <option value="25.75 dm3">25,75 dm³</option>
                        </select>
                    </div>
                    <div class="bg-white p-4 rounded-2xl">
                        <p class="text-sm md:text-base font-bold text-yellow-500">Hộp Vàng</p>
                        <select id="b114-3-vang" class="w-full bg-yellow-50 border-none rounded-xl text-base font-black p-2">
                            <option value="">Chọn...</option>
                            <option value="25 cm³">25 cm³</option>
                            <option value="24.5 cm3">24,5 cm³</option>
                            <option value="25.75 dm3">25,75 dm³</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="box-114-4" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-4 text-emerald-700 flex items-center gap-3">
                    <span class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black">4</span>
                    Bể 240 m³, giảm 15%. Còn lại?
                </p>
                <div class="bg-emerald-50 p-4 md:p-6 rounded-[32px] flex flex-col gap-3">
                    <textarea id="ans-b114-4-text" rows="3" class="w-full bg-white border-none rounded-2xl p-4 text-xl md:text-2xl font-bold shadow-inner" placeholder="Nhập lời giải..."></textarea>
                    <div class="flex justify-end gap-2">
                        <button onclick="checkLesson114AI('4')" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl text-sm md:text-base font-black">AI CHẤM ✨</button>
                    </div>
                    <div id="fb-b114-4-ai" class="hidden text-sm md:text-base font-bold p-3 bg-white rounded-xl border-l-4 border-blue-500"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-4">
                <button id="btn-submit-114" onclick="submit114()" class="btn-submit-global">Nộp bài</button>
            </div>

            <script>
                window.checkB114B1 = function(ans) {
                    window.ans114B1 = ans;
                    const box = document.getElementById('box-114-1');
                    box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                    box.classList.add('border-2');
                    if (ans === 'B') box.classList.add('border-emerald-400', 'bg-emerald-50');
                    else box.classList.add('border-red-400', 'bg-red-50');
                };

                window.checkLesson114AI = async function(id) {
                    const text = document.getElementById('ans-b114-' + id + '-text').value;
                    const fb = document.getElementById('fb-b114-' + id + '-ai');
                    if (!text) return;
                    fb.classList.remove('hidden');
                    fb.innerHTML = "Đang chấm...";
                    const req = id === '2' ? "174/12 = 14,5 m3" : "240 * (1-0.15) = 204 m3";
                    try {
                        const res = await AI.tutor(text, "Toán 5", req);
                        fb.innerHTML = res;
                    } catch(e) { fb.innerHTML = "Lỗi kết nối AI."; }
                };

                window.submit114 = function() {
                    let score = 0;
                    if (window.ans114B1 === 'B') score += 2.5;
                    const r3 = document.getElementById('b114-3-do').value;
                    const b3 = document.getElementById('b114-3-xanh').value;
                    const v3 = document.getElementById('b114-3-vang').value;
                    
                    const box3 = document.getElementById('box-114-3');
                    box3.className = box3.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                    box3.classList.add('border-2');
                    if (r3 === '24.5 cm3' && b3 === '25 cm3' && v3 === '25.75 dm3') {
                        score += 2.5; box3.classList.add('border-emerald-400', 'bg-emerald-50');
                    } else box3.classList.add('border-red-400', 'bg-red-50');

                    // AI questions marked as Đ/S manually or just 2.5 each for completion
                    score += 5; // Placeholder for AI questions

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-114");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
