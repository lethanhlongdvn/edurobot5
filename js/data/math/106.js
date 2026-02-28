export const lesson106 = {
    "topic": "Số học",
    "week": "22",
    "period": "106",
    "title": "BÀI 44: LUYỆN TẬP CHUNG (TIẾT 1)",
    "desc": "Luyện tập các phép tính với số thập phân, tỉ số phần trăm và giải các bài toán liên quan.",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">📝</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">Luyện tập chung</h3>
                    <p class="text-sm font-bold opacity-80">Ôn tập tổng hợp tiết 1</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-106-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Đặt tính rồi tính (Số?):
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">45,6 + 3,75 =</span>
                        <input type="text" id="b106-1a" onchange="checkB106Num('1a', '49.35')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">82,4 - 15,68 =</span>
                        <input type="text" id="b106-1b" onchange="checkB106Num('1b', '66.72')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">12,5 × 0,4 =</span>
                        <input type="text" id="b106-1c" onchange="checkB106Num('1c', '5')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">19,5 : 3 =</span>
                        <input type="text" id="b106-1d" onchange="checkB106Num('1d', '6.5')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-106-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Tìm x:
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-1 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold italic">x × 4 = 10,4 => x =</span>
                        <input type="text" id="b106-2a" onchange="checkB106Num('2a', '2.6')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-106" onclick="submit106()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.checkB106Num = function(id, correct) {
                    const el = document.getElementById('b106-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100', 'bg-indigo-100', 'bg-white');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.submit106 = function() {
                    let score = 0;
                    if (document.getElementById('b106-1a').value == '49.35') score += 2;
                    if (document.getElementById('b106-1b').value == '66.72') score += 2;
                    if (document.getElementById('b106-1c').value == '5') score += 2;
                    if (document.getElementById('b106-1d').value == '6.5') score += 2;
                    if (document.getElementById('b106-2a').value == '2.6') score += 2;
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-106");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
