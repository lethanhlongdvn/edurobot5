export const lesson108 = {
    "topic": "Hình học và Đo lường",
    "week": "22",
    "period": "108",
    "title": "BÀI 45: THỂ TÍCH CỦA MỘT HÌNH",
    "desc": "Làm quen với khái niệm thể tích của một hình. So sánh thể tích các hình thông qua đếm hình lập phương đơn vị.",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">📦</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">Thể tích</h3>
                    <p class="text-sm font-bold opacity-80">Không gian mà vật chiếm chỗ.</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-108-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Đếm hình lập phương (Số?):
                </p>
                <div class="bg-blue-50 p-2 rounded-[32px] grid grid-cols-1 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center justify-between">
                        <span class="font-bold">Hình A có 4 lớp, mỗi lớp 9 khối:</span>
                        <input type="text" id="b108-1a" onchange="checkB108Num('1a', '36')" class="w-20 bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="Số khối?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center justify-between">
                        <span class="font-bold">Hình B có 2 lớp, mỗi lớp 12 khối:</span>
                        <input type="text" id="b108-1b" onchange="checkB108Num('1b', '24')" class="w-20 bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="Số khối?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-108-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    So sánh:
                </p>
                <div class="bg-indigo-50 p-2 rounded-[32px] grid grid-cols-1 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center justify-between">
                        <span class="font-bold italic">Thể tích hình A ... thể tích hình B?</span>
                        <select id="b108-2a" onchange="checkB108Sel('2a', '>') " class="w-24 bg-indigo-100 border-none rounded-lg font-black text-xs p-1">
                            <option value="">Chọn?</option>
                            <option value=">">Lớn hơn</option>
                            <option value="<">Bé hơn</option>
                            <option value="=">Bằng nhau</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-108" onclick="submit108()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.checkB108Num = function(id, correct) {
                    const el = document.getElementById('b108-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.checkB108Sel = function(id, correct) {
                    const el = document.getElementById('b108-' + id);
                    const val = el.value;
                    const isCorrect = val === correct;
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-indigo-100');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.submit108 = function() {
                    let score = 0;
                    if (document.getElementById('b108-1a').value == '36') score += 3.5;
                    if (document.getElementById('b108-1b').value == '24') score += 3.5;
                    if (document.getElementById('b108-2a').value == '>') score += 3;
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-108");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
