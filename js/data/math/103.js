export const lesson103 = {
    "topic": "Số học",
    "week": "21",
    "period": "103",
    "title": "BÀI 42: MÁY TÍNH CẦM TAY (TIẾT 1)",
    "desc": "Làm quen với các phím cơ bản trên máy tính cầm tay và thực hành các phép tính cộng, trừ, nhân, chia cơ bản.",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">⌨️</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">Máy tính tiết 1</h3>
                    <p class="text-sm font-bold opacity-80">Làm quen các phím số và phép tính.</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-103-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Thực hành phím (Số?):
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">25 + 75 =</span>
                        <input type="text" id="b103-1a" onchange="checkB103Num('1a', '100')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">120 - 45 =</span>
                        <input type="text" id="b103-1b" onchange="checkB103Num('1b', '75')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-103-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Nhân chia (Số?):
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-1 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold italic">15 × 8 =</span>
                        <input type="text" id="b103-2a" onchange="checkB103Num('2a', '120')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="?">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-103" onclick="submit103()" class="btn-submit-global">Nộp bài</button>
            </div>

            <script>
                window.checkB103Num = function(id, correct) {
                    const el = document.getElementById('b103-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100', 'bg-indigo-100', 'bg-white');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.submit103 = function() {
                    let score = 0;
                    if (document.getElementById('b103-1a').value == '100') score += 3.5;
                    if (document.getElementById('b103-1b').value == '75') score += 3.5;
                    if (document.getElementById('b103-2a').value == '120') score += 3;
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-103");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
