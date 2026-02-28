export const lesson107 = {
    "topic": "Số học",
    "week": "22",
    "period": "107",
    "title": "BÀI 44: LUYỆN TẬP CHUNG (TIẾT 2)",
    "desc": "Ôn tập các bài toán về tỉ số phần trăm và ứng dụng máy tính cầm tay.",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">🧮</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">Ôn tập Tỉ số %</h3>
                    <p class="text-sm font-bold opacity-80">Luyện tập tổng hợp tiết 2</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-107-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Tính bằng máy tính (Số?):
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">25% của 120 là:</span>
                        <input type="text" id="b107-1a" onchange="checkB107Num('1a', '30')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">15% của 400 là:</span>
                        <input type="text" id="b107-1b" onchange="checkB107Num('1b', '60')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-107-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Lãi suất 0,5%/tháng. Gửi 10 triệu.
                </p>
                <div class="bg-indigo-50 p-2 rounded-[32px] flex flex-col gap-2">
                    <textarea id="ans-b107-2-text" rows="2" class="w-full bg-white border-none rounded-2xl p-3 text-lg font-bold shadow-inner" placeholder="Số tiền lãi sau 1 tháng?"></textarea>
                    <div class="flex justify-end gap-2">
                        <button onclick="checkLesson107AI()" class="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-black">AI CHẤM ✨</button>
                    </div>
                    <div id="fb-b107-2-ai" class="hidden text-xs font-bold p-2 bg-white rounded-xl border-l-4 border-blue-500"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-107" onclick="submit107()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.checkB107Num = function(id, correct) {
                    const el = document.getElementById('b107-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.checkLesson107AI = async function() {
                    const text = document.getElementById('ans-b107-2-text').value;
                    const fb = document.getElementById('fb-b107-2-ai');
                    if (!text) return;
                    fb.classList.remove('hidden');
                    fb.innerHTML = "Đang chấm...";
                    try {
                        const res = await AI.tutor(text, "Toán 5", "10,000,000 * 0.005 = 50,000 đồng");
                        fb.innerHTML = res;
                    } catch(e) { fb.innerHTML = "Lỗi kết nối AI."; }
                };

                window.submit107 = function() {
                    let score = 0;
                    if (document.getElementById('b107-1a').value == '30') score += 2.5;
                    if (document.getElementById('b107-1b').value == '60') score += 2.5;
                    // ... other checks
                    score += 5; 
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-107");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
