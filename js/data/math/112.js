export const lesson112 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "112",
    "title": "LUYỆN TẬP: MÉT KHỐI",
    "desc": "Thực hành viết, đổi đơn vị đo thể tích và giải bài toán thực thực tế tính tiền nước.",
    "content": `
        <div class="space-y-6 text-indigo-900">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-700 p-8 md:p-10 rounded-[40px] shadow-2xl flex items-center gap-6 text-white">
                <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-4xl md:text-5xl">📏</span>
                </div>
                <div>
                    <h3 class="text-3xl md:text-5xl lg:text-6xl font-black italic tracking-tight">Luyện tập Mét khối</h3>
                    <p class="text-xl md:text-3xl lg:text-4xl font-bold opacity-90">1 m³ = 1 000 dm³ = 1 000 000 cm³</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6">
            <!-- Bài 1 -->
            <div id="box-112-1" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-blue-700 flex items-center gap-3">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl">1</span>
                    <span class="flex-1">Chọn số đo phù hợp:</span>
                    <button title="Kiểm tra" onclick="checkBox112_1()" class="btn-check-mini bg-emerald-600 text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                </p>
                <div class="bg-blue-50 p-4 md:p-6 rounded-[32px] grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div class="bg-white p-4 rounded-2xl flex flex-col items-center">
                        <img src="hinh_anh/toan/112-b1-1.png" class="h-28 md:h-40 lg:h-48 object-contain mb-3">
                        <p class="text-base md:text-xl lg:text-2xl font-black text-gray-400">Hộp phấn</p>
                        <select id="b112-1a" onchange="checkB112B1()" class="w-full bg-blue-50 border-none rounded-xl text-lg md:text-2xl lg:text-3xl font-black p-3">
                            <option value="">Chọn...</option>
                            <option value="1 cm3">1 cm³</option>
                            <option value="1 dm3">1 dm³</option>
                        </select>
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex flex-col items-center">
                        <img src="hinh_anh/toan/112-b1-2.png" class="h-28 md:h-40 lg:h-48 object-contain mb-3">
                        <p class="text-base md:text-xl lg:text-2xl font-black text-gray-400">Máy giặt</p>
                        <select id="b112-1b" onchange="checkB112B1()" class="w-full bg-blue-50 border-none rounded-xl text-lg md:text-2xl lg:text-3xl font-black p-3">
                            <option value="">Chọn...</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex flex-col items-center">
                        <img src="hinh_anh/toan/112-b1-3.png" class="h-28 md:h-40 lg:h-48 object-contain mb-3">
                        <p class="text-base md:text-xl lg:text-2xl font-black text-gray-400">Container</p>
                        <select id="b112-1c" onchange="checkB112B1()" class="w-full bg-blue-50 border-none rounded-xl text-lg md:text-2xl lg:text-3xl font-black p-3">
                            <option value="">Chọn...</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-112-2" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-indigo-700 flex items-center gap-3">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl">2</span>
                    <span class="flex-1">Đổi đơn vị đo (Số?):</span>
                    <button title="Kiểm tra" onclick="checkBox112_2()" class="btn-check-mini bg-emerald-600 text-white">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                </p>
                <div class="bg-indigo-50 p-4 md:p-6 rounded-[32px] grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-bold text-lg md:text-2xl lg:text-3xl">2,5 m³ =</span>
                        <input type="text" id="b112-2a-1" onchange="checkB112Num('2a-1', '2500')" class="flex-1 bg-indigo-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="dm³">
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-bold text-lg md:text-2xl lg:text-3xl">3900 cm³ =</span>
                        <input type="text" id="b112-2a-2" onchange="checkB112Num('2a-2', '3.9')" class="flex-1 bg-indigo-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="dm³">
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-bold text-lg md:text-2xl lg:text-3xl">4600 dm³ =</span>
                        <input type="text" id="b112-2b-1" onchange="checkB112Num('2b-1', '4.6')" class="flex-1 bg-indigo-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="m³">
                    </div>
                    <div class="bg-white p-4 rounded-2xl flex items-center gap-3">
                        <span class="font-bold text-lg md:text-2xl lg:text-3xl">7,5M cm³ =</span>
                        <input type="text" id="b112-2b-2" onchange="checkB112Num('2b-2', '7.5')" class="flex-1 bg-indigo-100 border-none rounded-xl font-black text-lg md:text-2xl lg:text-3xl p-4" placeholder="m³">
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="box-112-4" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-3xl md:text-4xl lg:text-5xl mb-4 text-orange-700 flex items-center gap-3">
                    <span class="w-14 h-14 md:w-16 md:h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-2xl md:text-3xl">4</span>
                    Nhà Việt dùng 15 m³ nước. Tính tiền?
                </p>
                <div class="bg-orange-50 p-4 md:p-6 rounded-[32px] flex flex-col gap-3">
                    <div class="bg-white/80 p-4 rounded-2xl text-base md:text-xl lg:text-2xl font-bold text-gray-600">
                        10m³ đầu: 5973đ. 5m³ sau: 7052đ.
                    </div>
                    <textarea id="ans-b112-4-text" rows="4" class="w-full bg-white border-none rounded-2xl p-4 text-xl md:text-3xl lg:text-4xl font-bold shadow-inner" placeholder="Nhập lời giải..."></textarea>
                    <div class="flex justify-end gap-2">
                        <button onclick="checkLesson112AI()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-2xl text-base md:text-xl lg:text-2xl font-black">AI CHẤM ✨</button>
                    </div>
                    <div id="fb-b112-4-ai" class="hidden text-base md:text-xl lg:text-2xl font-bold p-4 bg-white rounded-xl border-l-4 border-blue-500"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-4">
                <button id="btn-submit-112" onclick="submit112()" class="btn-submit-global">Nộp bài</button>
            </div>

            <script>
                window.checkB112B1 = function() {
                    const a = document.getElementById('b112-1a').value;
                    const b = document.getElementById('b112-1b').value;
                    const c = document.getElementById('b112-1c').value;
                    const box = document.getElementById('box-112-1');
                    box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                    box.classList.add('border-2');
                    if (a === '1 cm3' && b === '1 m3' && c === '1 m3') {
                        box.classList.add('border-emerald-400', 'bg-emerald-50');
                    } else if (a && b && c) {
                        box.classList.add('border-red-400', 'bg-red-50');
                    }
                };

                window.checkB112Num = function(id, correct) {
                    const el = document.getElementById('b112-' + id);
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-indigo-100', 'bg-white');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.checkLesson112AI = async function() {
                    const text = document.getElementById('ans-b112-4-text').value;
                    const fb = document.getElementById('fb-b112-4-ai');
                    if (!text) return;
                    fb.classList.remove('hidden');
                    fb.innerHTML = "Đang chấm...";
                    try {
                        const res = await AI.tutor(text, "Toán 5", "10*5973 + 5*7052 = 94990");
                        fb.innerHTML = res;
                    } catch(e) { fb.innerHTML = "Lỗi kết nối AI."; }
                };

                window.checkBox112_1 = function() {
                    window.checkB112B1();
                };

                window.checkBox112_2 = function() {
                    window.checkB112Num('2a-1', '2500');
                    window.checkB112Num('2a-2', '3.9');
                    window.checkB112Num('2b-1', '4.6');
                    window.checkB112Num('2b-2', '7.5');
                };

                window.submit112 = function() {
                    let score = 0;
                    const a = document.getElementById('b112-1a').value;
                    const b = document.getElementById('b112-1b').value;
                    const c = document.getElementById('b112-1c').value;
                    if (a === '1 cm3' && b === '1 m3' && c === '1 m3') score += 3.5;
                    
                    const v21 = document.getElementById('b112-2a-1').value;
                    if (v21 == '2500') score += 3.5;
                    
                    score += 3; // AI completion

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-112");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "1 dm³ bằng bao nhiêu cm³?", "options": ["10 cm³", "100 cm³", "1000 cm³", "10 000 cm³"], "answer": 2, "level": 1 }
    ]
};
