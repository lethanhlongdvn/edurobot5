export const lesson111 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "111",
    "title": "BÀI 47: MÉT KHỐI",
    "desc": "Tìm hiểu đơn vị đo thể tích mét khối (m³). Mối quan hệ giữa m³, dm³ và cm³.",
    "content": `
        <div class="space-y-6 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-10 rounded-[40px] shadow-2xl flex items-center gap-6 text-white">
                <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-4xl md:text-5xl">🧊</span>
                </div>
                <div>
                    <h3 class="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tight">Mét khối (m³)</h3>
                    <p class="text-xl md:text-3xl lg:text-4xl font-bold opacity-90">1 m³ = 1 000 dm³ = 1 000 000 cm³</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6">
            <!-- Bài 1 -->
            <div id="box-111-1" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-blue-700 flex items-center gap-3">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl">1</span>
                    Đọc số đo bể bơi:
                </p>
                <div class="bg-blue-50 p-4 md:p-6 rounded-[32px] grid grid-cols-1 gap-3">
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-black text-3xl md:text-4xl lg:text-5xl text-blue-600">1,25 m³</span>
                        <input type="text" id="b111-1-1" onchange="checkB111Read('1-1', 'một phẩy hai mươi lăm mét khối')" class="flex-1 bg-blue-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="Đọc chữ?">
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-black text-3xl md:text-4xl lg:text-5xl text-blue-600">300 m³</span>
                        <input type="text" id="b111-1-2" onchange="checkB111Read('1-2', 'ba trăm mét khối')" class="flex-1 bg-blue-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="Đọc chữ?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-111-2" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-indigo-700 flex items-center gap-3">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl">2</span>
                    Đổi đơn vị đo (Số?):
                </p>
                <div class="bg-indigo-50 p-4 md:p-6 rounded-[32px] grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-bold text-lg md:text-2xl lg:text-3xl">3 m³ =</span>
                        <input type="text" id="b111-2a" onchange="checkB111Num('2a', '3000')" class="flex-1 bg-indigo-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="dm³">
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-bold text-lg md:text-2xl lg:text-3xl">1,7 m³ =</span>
                        <input type="text" id="b111-2b" onchange="checkB111Num('2b', '1700')" class="flex-1 bg-indigo-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="dm³">
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-bold text-lg md:text-2xl lg:text-3xl">2400 dm³ =</span>
                        <input type="text" id="b111-2c" onchange="checkB111Num('2c', '2.4')" class="flex-1 bg-indigo-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="m³">
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-bold text-lg md:text-2xl lg:text-3xl">25 m³ =</span>
                        <input type="text" id="b111-2d" onchange="checkB111Num('2d', '25000000')" class="flex-1 bg-indigo-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="cm³">
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-111-3" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-orange-700 flex items-center gap-3">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl">3</span>
                    Thùng xe 33,2 m³, hàng 80%. Trống?
                </p>
                <div class="bg-orange-50 p-4 md:p-6 rounded-[32px] flex flex-col gap-3">
                    <textarea id="ans-b111-3-text" rows="4" class="w-full bg-white border-none rounded-2xl p-4 text-xl md:text-3xl lg:text-4xl font-bold shadow-inner" placeholder="Giải toán..."></textarea>
                    <div class="flex justify-end gap-2">
                        <button onclick="checkLesson111AI()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl text-base md:text-xl lg:text-2xl font-black">AI CHẤM ✨</button>
                    </div>
                    <div id="fb-b111-3-ai" class="hidden text-base md:text-xl lg:text-2xl font-bold p-4 bg-white rounded-xl border-l-4 border-blue-500"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-4">
                <button id="btn-submit-111" onclick="submit111()" class="btn-submit-global">Nộp bài</button>
            </div>

            <script>
                window.checkB111Read = function(id, correct) {
                    const el = document.getElementById('b111-' + id);
                    const val = (el.value || '').toLowerCase().trim();
                    const isCorrect = val === correct.toLowerCase();
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.checkB111Num = function(id, correct) {
                    const el = document.getElementById('b111-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-indigo-100', 'bg-white');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.checkLesson111AI = async function() {
                    const text = document.getElementById('ans-b111-3-text').value;
                    const fb = document.getElementById('fb-b111-3-ai');
                    if (!text) return;
                    fb.classList.remove('hidden');
                    fb.innerHTML = "Đang chấm...";
                    try {
                        const res = await AI.tutor(text, "Toán 5", "33.2 * 0.2 = 6.64");
                        fb.innerHTML = res;
                    } catch(e) { fb.innerHTML = "Lỗi kết nối AI."; }
                };

                window.submit111 = function() {
                    let score = 0;
                    if (document.getElementById('b111-1-1').value.includes('một phẩy hai mươi lăm')) score += 1.5;
                    const v2a = document.getElementById('b111-2a').value;
                    if (v2a == '3000') score += 1.5;
                    // ... other checks
                    score += 4; // AI completion
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-111");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "1 m³ bằng bao nhiêu dm³?", "options": ["10 dm³", "100 dm³", "1000 dm³", "10 000 dm³"], "answer": 2, "level": 1 }
    ]
};
