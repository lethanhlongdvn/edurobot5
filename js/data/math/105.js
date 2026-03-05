export const lesson105 = {
    "topic": "Số học",
    "week": "21",
    "period": "105",
    "title": "BÀI 43: SỬ DỤNG MÁY TÍNH CẦM TAY",
    "desc": "Thực hành sử dụng máy tính cầm tay để tính toán các phép tính phức tạp và tỉ số phần trăm.",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">📟</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">Máy tính cầm tay</h3>
                    <p class="text-sm font-bold opacity-80">Công cụ hỗ trợ tính toán nhanh.</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-105-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Thực hành ấn máy tính (Số?):
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">123,4 + 56,7 =</span>
                        <input type="text" id="b105-1a" onchange="checkB105Num('1a', '180.1')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">45,6 × 2,3 =</span>
                        <input type="text" id="b105-1b" onchange="checkB105Num('1b', '104.88')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-105-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Tính tỉ số phần trăm:
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-1 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold italic">Tỉ số % của 12 và 40: (12 : 40) × 100 =</span>
                        <input type="text" id="b105-2a" onchange="checkB105Num('2a', '30')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="%">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-105" onclick="submit105()" class="btn-submit-global">Nộp bài</button>
            </div>

            <script>
                window.checkB105Num = function(id, correct) {
                    const el = document.getElementById('b105-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100', 'bg-indigo-100', 'bg-white');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.submit105 = function() {
                    let score = 0;
                    if (document.getElementById('b105-1a').value == '180.1') score += 3.5;
                    if (document.getElementById('b105-1b').value == '104.88') score += 3.5;
                    if (document.getElementById('b105-2a').value == '30') score += 3;
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-105");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
