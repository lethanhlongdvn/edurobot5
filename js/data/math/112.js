export const lesson112 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "112",
    "title": "LUYỆN TẬP: MÉT KHỐI",
    "desc": "Thực hành viết, đổi đơn vị đo thể tích và giải bài toán thực thực tế tính tiền nước.",
    "content": `
        <div class="space-y-2 text-indigo-900">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-700 p-4 md:p-6 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">📏</span>
                </div>
                <div>
                    <h3 class="text-xl md:text-2xl font-black italic">Luyện tập Mét khối</h3>
                    <p class="text-sm md:text-lg font-bold opacity-80">1 m³ = 1 000 dm³ = 1 000 000 cm³</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-112-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Chọn số đo phù hợp:
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-3 gap-1">
                    <div class="bg-white p-2 rounded-2xl flex flex-col items-center">
                        <img src="hinh_anh/toan/112-b1-1.png" class="h-10 object-contain mb-1">
                        <p class="text-[10px] font-black text-gray-400">Hộp phấn</p>
                        <select id="b112-1a" onchange="checkB112B1()" class="w-full bg-blue-50 border-none rounded-lg text-xs font-black p-1">
                            <option value="">Chọn...</option>
                            <option value="1 cm3">1 cm³</option>
                            <option value="1 dm3">1 dm³</option>
                        </select>
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex flex-col items-center">
                        <img src="hinh_anh/toan/112-b1-2.png" class="h-10 object-contain mb-1">
                        <p class="text-[10px] font-black text-gray-400">Máy giặt</p>
                        <select id="b112-1b" onchange="checkB112B1()" class="w-full bg-blue-50 border-none rounded-lg text-xs font-black p-1">
                            <option value="">Chọn...</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex flex-col items-center">
                        <img src="hinh_anh/toan/112-b1-3.png" class="h-10 object-contain mb-1">
                        <p class="text-[10px] font-black text-gray-400">Container</p>
                        <select id="b112-1c" onchange="checkB112B1()" class="w-full bg-blue-50 border-none rounded-lg text-xs font-black p-1">
                            <option value="">Chọn...</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-112-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Đổi đơn vị đo (Số?):
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">2,5 m³ =</span>
                        <input type="text" id="b112-2a-1" onchange="checkB112Num('2a-1', '2500')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="dm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">3900 cm³ =</span>
                        <input type="text" id="b112-2a-2" onchange="checkB112Num('2a-2', '3.9')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="dm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">4600 dm³ =</span>
                        <input type="text" id="b112-2b-1" onchange="checkB112Num('2b-1', '4.6')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="m³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">7,5M cm³ =</span>
                        <input type="text" id="b112-2b-2" onchange="checkB112Num('2b-2', '7.5')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="m³">
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="box-112-4" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-orange-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                    Nhà Việt dùng 15 m³ nước. Tính tiền?
                </p>
                <div class="bg-orange-50 p-2 rounded-[32px] flex flex-col gap-2">
                    <div class="bg-white/80 p-2 rounded-xl text-[10px] font-bold text-gray-600">
                        10m³ đầu: 5973đ. 5m³ sau: 7052đ.
                    </div>
                    <textarea id="ans-b112-4-text" rows="2" class="w-full bg-white border-none rounded-2xl p-3 text-lg font-bold shadow-inner" placeholder="Nhập lời giải..."></textarea>
                    <div class="flex justify-end gap-2">
                        <button onclick="checkLesson112AI()" class="bg-blue-600 text-white px-4 py-2 rounded-xl text-xs font-black">AI CHẤM ✨</button>
                    </div>
                    <div id="fb-b112-4-ai" class="hidden text-xs font-bold p-2 bg-white rounded-xl border-l-4 border-blue-500"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-112" onclick="submit112()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
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
                        window.submitMathLesson("Score: " + score, status, "btn-submit-112");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
