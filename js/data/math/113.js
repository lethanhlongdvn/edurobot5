export const lesson113 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "113",
    "title": "LUYỆN TẬP CHUNG (Tiết 1)",
    "desc": "Bài 48: Ôn tập về đọc, viết, đổi đơn vị đo thể tích (Trang 38).",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 md:p-6 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">🧊</span>
                </div>
                <div>
                    <h3 class="text-xl md:text-2xl font-black italic">Luyện tập chung</h3>
                    <p class="text-sm md:text-lg font-bold opacity-80">Ôn tập đo lường thể tích.</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-113-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Hoàn thành bảng đọc viết:
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px]">
                    <div class="grid grid-cols-2 gap-1 text-[10px] items-center">
                        <div class="p-2 bg-white rounded-2xl">
                            <p class="text-gray-400 font-black">Một trăm phẩy không năm m³</p>
                            <input type="text" id="b113-t1-w1" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="Số?">
                        </div>
                        <div class="p-2 bg-white rounded-2xl">
                            <p class="text-gray-400 font-black">0,015 m³</p>
                            <input type="text" id="b113-t1-r2" class="w-full bg-blue-100 border-none rounded-lg font-black text-[10px] p-1" placeholder="Chữ?">
                        </div>
                        <div class="p-2 bg-white rounded-2xl">
                            <p class="text-gray-400 font-black">Tám trăm hai mươi mốt dm³</p>
                            <input type="text" id="b113-t1-w3" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="Số?">
                        </div>
                        <div class="p-2 bg-white rounded-2xl">
                            <p class="text-gray-400 font-black">100,2 cm³</p>
                            <input type="text" id="b113-t1-r4" class="w-full bg-blue-100 border-none rounded-lg font-black text-[10px] p-1" placeholder="Chữ?">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-113-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-emerald-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Thể tích khối băng khoảng (Chọn C):
                </p>
                <div class="bg-emerald-50 p-1 rounded-[32px] flex flex-col md:flex-row items-center gap-1">
                    <img src="hinh_anh/toan/113_b2.png" class="w-full max-w-[150px] h-auto rounded-xl border-2 border-white shadow-sm">
                    <select id="b113-2-sel" onchange="checkB113Sel()" class="w-full bg-white border-2 border-emerald-300 rounded-xl py-2 px-4 font-black text-lg">
                        <option value="">Chọn đáp án...</option>
                        <option value="A">1 cm³</option>
                        <option value="B">1 dm³</option>
                        <option value="C">1 m³</option>
                    </select>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-113-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    Thể tích hình bên (cm³):
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] flex flex-col md:flex-row items-center gap-1">
                    <img src="hinh_anh/toan/113_b3.png" class="w-full max-w-[150px] h-auto rounded-xl border-2 border-white shadow-sm">
                    <input type="number" id="b113-3-ans" onchange="checkB113Num('3', '44')" class="w-full bg-white border-2 border-indigo-300 rounded-xl py-2 px-4 text-center font-black text-2xl" placeholder="?">
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="box-113-4" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-purple-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                    Đổi đơn vị đo:
                </p>
                <div class="bg-purple-50 p-1 rounded-[32px] grid grid-cols-2 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">5 m³ =</span>
                        <input type="text" id="b113-4a1" onchange="checkB113Num('4a1', '5000')" class="w-full bg-purple-100 border-none rounded-lg font-black text-xs p-1" placeholder="dm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">480 dm³ =</span>
                        <input type="text" id="b113-4a2" onchange="checkB113Num('4a2', '0.48')" class="w-full bg-purple-100 border-none rounded-lg font-black text-xs p-1" placeholder="m³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">0,25 m³ =</span>
                        <input type="text" id="b113-4b1" onchange="checkB113Num('4b1', '250000')" class="w-full bg-purple-100 border-none rounded-lg font-black text-xs p-1" placeholder="cm³">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-1">
                        <span class="font-bold">5000 cm³ =</span>
                        <input type="text" id="b113-4b2" onchange="checkB113Num('4b2', '0.005')" class="w-full bg-purple-100 border-none rounded-lg font-black text-xs p-1" placeholder="m³">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-113" onclick="submit113()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.checkB113Sel = function() {
                    const sel = document.getElementById('b113-2-sel');
                    const box = document.getElementById('box-113-2');
                    box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                    box.classList.add('border-2');
                    if (sel.value === 'C') box.classList.add('border-emerald-400', 'bg-emerald-50');
                    else if (sel.value) box.classList.add('border-red-400', 'bg-red-50');
                };

                window.checkB113Num = function(id, correct) {
                    const el = document.getElementById('b113-' + id + (id === '3' ? '-ans' : ''));
                    const val = el.value.replace(/,/g, '.');
                    const isCorrect = parseFloat(val) == parseFloat(correct);
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-purple-100', 'bg-indigo-100', 'bg-white');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.submit113 = function() {
                    let score = 0;
                    const v11 = document.getElementById('b113-t1-w1').value;
                    const v13 = document.getElementById('b113-t1-w3').value;
                    if (v11.includes('100,05') || v11.includes('100.05')) score += 1.25;
                    if (v13 === '821') score += 1.25;

                    if (document.getElementById('b113-2-sel').value === 'C') score += 2.5;
                    if (document.getElementById('b113-3-ans').value == '44') score += 2.5;
                    
                    const v4a1 = document.getElementById('b113-4a1').value;
                    if (v4a1 == '5000') score += 2.5;

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-113");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
