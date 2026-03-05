export const lesson110 = {
    "topic": "Hình học và Đo lường",
    "week": "22",
    "period": "110",
    "title": "BÀI 46: XĂNG-TI-MÉT KHỐI. ĐỀ-XI-MÉT KHỐI (TIẾT 2)",
    "desc": "Luyện tập đổi đơn vị và tính toán với xăng-ti-mét khối (cm³) và đề-xi-mét khối (dm³).",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">🧊</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">dm³ và cm³</h3>
                    <p class="text-sm font-bold opacity-80">1 dm³ = 1000 cm³</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-110-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Số?
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">2 dm³ =</span>
                        <input type="text" id="b110-1a" onchange="checkB110Num('1a', '2000')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="cm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">4,5 dm³ =</span>
                        <input type="text" id="b110-1b" onchange="checkB110Num('1b', '4500')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="cm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">3000 cm³ =</span>
                        <input type="text" id="b110-1c" onchange="checkB110Num('1c', '3')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="dm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">1200 cm³ =</span>
                        <input type="text" id="b110-1d" onchange="checkB110Num('1d', '1.2')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="dm³">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-110-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Tính (Số?):
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-1 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold italic">240 cm³ + 350 cm³ =</span>
                        <input type="text" id="b110-2a" onchange="checkB110Num('2a', '590')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="cm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold italic">1,2 dm³ × 3 =</span>
                        <input type="text" id="b110-2b" onchange="checkB110Num('2b', '3.6')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="dm³">
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-110-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-orange-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    Hình lập phương cạnh 10cm. Thể tích (dm³)?
                </p>
                <div class="bg-orange-50 p-2 rounded-[32px] flex flex-col gap-2">
                    <textarea id="ans-b110-3-text" rows="2" class="w-full bg-white border-none rounded-2xl p-3 text-lg font-bold shadow-inner" placeholder="Giải toán..."></textarea>
                    <div class="flex justify-end gap-2">
                        <button onclick="checkLesson110AI()" class="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-black">AI CHẤM ✨</button>
                    </div>
                    <div id="fb-b110-3-ai" class="hidden text-xs font-bold p-2 bg-white rounded-xl border-l-4 border-blue-500"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-110" onclick="submit110()" class="btn-submit-global">Nộp bài</button>
            </div>

            <script>
                window.checkB110Num = function(id, correct) {
                    const el = document.getElementById('b110-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100', 'bg-indigo-100', 'bg-white');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.checkLesson110AI = async function() {
                    const text = document.getElementById('ans-b110-3-text').value;
                    const fb = document.getElementById('fb-b110-3-ai');
                    if (!text) return;
                    fb.classList.remove('hidden');
                    fb.innerHTML = "Đang chấm...";
                    try {
                        const res = await AI.tutor(text, "Toán 5", "V = 10 * 10 * 10 = 1000 cm³ = 1 dm³");
                        fb.innerHTML = res;
                    } catch(e) { fb.innerHTML = "Lỗi kết nối AI."; }
                };

                window.submit110 = function() {
                    let score = 0;
                    if (document.getElementById('b110-1a').value == '2000') score += 1.5;
                    if (document.getElementById('b110-2a').value == '590') score += 1.5;
                    // ... other checks
                    score += 4; // AI completion
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-110");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
