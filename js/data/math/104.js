export const lesson104 = {
    "topic": "Số học",
    "week": "21",
    "period": "104",
    "title": "BÀI 42: MÁY TÍNH CẦM TAY (TIẾT 2)",
    "desc": "Thực hành sử dụng các phím chức năng trên máy tính cầm tay để giải quyết các bài toán về tỉ số phần trăm.",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">🎛️</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">Máy tính tiết 2</h3>
                    <p class="text-sm font-bold opacity-80">Phím chức năng và Tỉ số %</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-104-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Tính bằng máy tính (Số?):
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">65,8 : 1,4 =</span>
                        <input type="text" id="b104-1a" onchange="checkB104Num('1a', '47')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">0,25 × 3,6 =</span>
                        <input type="text" id="b104-1b" onchange="checkB104Num('1b', '0.9')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-104-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Tỉ số % (Số?):
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-1 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold italic">Một trường có 500 HS, 240 HS nam. Tỉ số % HS nam:</span>
                        <input type="text" id="b104-2a" onchange="checkB104Num('2a', '48')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="%">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-104" onclick="submit104()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.checkB104Num = function(id, correct) {
                    const el = document.getElementById('b104-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100', 'bg-indigo-100', 'bg-white');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.submit104 = function() {
                    let score = 0;
                    if (document.getElementById('b104-1a').value == '47') score += 3.5;
                    if (document.getElementById('b104-1b').value == '0.9') score += 3.5;
                    if (document.getElementById('b104-2a').value == '48') score += 3;
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-104");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
