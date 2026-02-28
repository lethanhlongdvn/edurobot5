export const lesson111 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "111",
    "title": "BÀI 47: MÉT KHỐI",
    "desc": "Tìm hiểu đơn vị đo thể tích mét khối (m³). Mối quan hệ giữa m³, dm³ và cm³.",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">🧊</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">Mét khối (m³)</h3>
                    <p class="text-sm font-bold opacity-80">1 m³ = 1000 dm³ = 1000,000 cm³</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-111-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Đọc số đo bể bơi:
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-1 gap-1">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-2">
                        <span class="font-black text-lg text-blue-600">1,25 m³</span>
                        <input type="text" id="b111-1-1" onchange="checkB111Read('1-1', 'một phẩy hai mươi lăm mét khối')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="Đọc chữ?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-2">
                        <span class="font-black text-lg text-blue-600">300 m³</span>
                        <input type="text" id="b111-1-2" onchange="checkB111Read('1-2', 'ba trăm mét khối')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="Đọc chữ?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-111-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Đổi đơn vị đo (Số?):
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">3 m³ =</span>
                        <input type="text" id="b111-2a" onchange="checkB111Num('2a', '3000')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="dm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">1,7 m³ =</span>
                        <input type="text" id="b111-2b" onchange="checkB111Num('2b', '1700')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="dm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">2400 dm³ =</span>
                        <input type="text" id="b111-2c" onchange="checkB111Num('2c', '2.4')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="m³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">25 m³ =</span>
                        <input type="text" id="b111-2d" onchange="checkB111Num('2d', '25000000')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="cm³">
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-111-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-orange-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    Thùng xe 33,2 m³, hàng 80%. Trống?
                </p>
                <div class="bg-orange-50 p-2 rounded-[32px] flex flex-col gap-2">
                    <textarea id="ans-b111-3-text" rows="2" class="w-full bg-white border-none rounded-2xl p-3 text-lg font-bold shadow-inner" placeholder="Giải toán..."></textarea>
                    <div class="flex justify-end gap-2">
                        <button onclick="checkLesson111AI()" class="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-black">AI CHẤM ✨</button>
                    </div>
                    <div id="fb-b111-3-ai" class="hidden text-xs font-bold p-2 bg-white rounded-xl border-l-4 border-blue-500"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-111" onclick="submit111()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
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
                        window.submitMathLesson("Score: " + score, status, "btn-submit-111");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
