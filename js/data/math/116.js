export const lesson116 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "116",
    "title": "LUYỆN TẬP",
    "desc": "Bài 49: Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ (Tiết 116 - Luyện tập - Trang 42-43).",
    "content": `
        <div class="space-y-2">
            <div class="bg-gradient-to-r from-cyan-600 to-blue-700 p-4 md:p-6 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">📦</span>
                </div>
                <div>
                    <h3 class="text-xl md:text-2xl font-black italic">Hình khai triển</h3>
                    <p class="text-sm md:text-lg font-bold opacity-80">Nhận diện và cắt ghép các hình khối kỳ diệu.</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-116-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Đây là khai triển của hình nào?
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px]">
                    <div class="bg-white rounded-2xl p-2 mb-1 flex justify-center border border-blue-100">
                        <img src="hinh_anh/toan_tap_2/116_b1_de.png" class="w-full h-auto max-w-[250px] object-contain drop-shadow-sm mix-blend-multiply" />
                    </div>
                    <div class="grid grid-cols-3 gap-1">
                        <button onclick="check116B1('A')" class="b116-opt bg-white p-2 rounded-xl border-2 border-gray-100 flex flex-col items-center gap-1 group">
                             <img src="hinh_anh/toan_tap_2/116_b1_a.png" class="h-20 object-contain drop-shadow-sm mix-blend-multiply" />
                            <span class="font-black text-2xl text-gray-400 group-hover:text-blue-600">A</span>
                        </button>
                        <button onclick="check116B1('B')" class="b116-opt bg-white p-2 rounded-xl border-2 border-gray-100 flex flex-col items-center gap-1 group">
                             <img src="hinh_anh/toan_tap_2/116_b1_b.png" class="h-20 object-contain drop-shadow-sm mix-blend-multiply" />
                            <span class="font-black text-2xl text-gray-400 group-hover:text-blue-600">B</span>
                        </button>
                        <button onclick="check116B1('C')" class="b116-opt bg-white p-2 rounded-xl border-2 border-gray-100 flex flex-col items-center gap-1 group">
                             <img src="hinh_anh/toan_tap_2/116_b1_c.png" class="h-10 md:h-12 object-contain drop-shadow-sm mix-blend-multiply" />
                            <span class="font-black text-2xl text-gray-400 group-hover:text-blue-600">C</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-116-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <div class="flex items-center justify-between mb-1">
                    <p class="font-black text-xl md:text-2xl text-indigo-700 flex items-center gap-2">
                        <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                        Chọn hình lập phương (A, C):
                    </p>
                    <button onclick="check116B3()" class="bg-indigo-600 text-white px-4 py-1 rounded-lg font-bold text-xs">Kiểm tra</button>
                </div>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-3 gap-1">
                    <button onclick="this.classList.toggle('selected');" id="116-3a" class="b116-3-btn bg-white p-2 rounded-2xl flex flex-col items-center gap-1 border-2 border-transparent [&.selected]:border-indigo-500 [&.selected]:bg-indigo-100">
                        <img src="hinh_anh/toan_tap_2/116_b3_a.png" class="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm max-h-[140px]" />
                        <span class="font-black text-lg text-gray-400">A</span>
                    </button>
                    <button onclick="this.classList.toggle('selected');" id="116-3b" class="b116-3-btn bg-white p-2 rounded-2xl flex flex-col items-center gap-1 border-2 border-transparent [&.selected]:border-indigo-500 [&.selected]:bg-indigo-100">
                        <img src="hinh_anh/toan_tap_2/116_b3_b.png" class="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm max-h-[140px]" />
                        <span class="font-black text-lg text-gray-400">B</span>
                    </button>
                    <button onclick="this.classList.toggle('selected');" id="116-3c" class="b116-3-btn bg-white p-2 rounded-2xl flex flex-col items-center gap-1 border-2 border-transparent [&.selected]:border-indigo-500 [&.selected]:bg-indigo-100">
                        <img src="hinh_anh/toan_tap_2/116_b3_c.png" class="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm max-h-[140px]" />
                        <span class="font-black text-lg text-gray-400">C</span>
                    </button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="box-116-4" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <div class="flex items-center justify-between mb-1">
                    <p class="font-black text-xl md:text-2xl text-orange-700 flex items-center gap-2">
                        <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                        Cắt 1 hình để thành HHCN:
                    </p>
                    <button onclick="check116B4()" class="bg-orange-600 text-white px-4 py-1 rounded-lg font-bold text-xs">Kiểm tra</button>
                </div>
                <div class="bg-slate-50 p-2 rounded-[32px] flex justify-center items-center scale-75 md:scale-100 origin-center">
                    <div class="flex items-center">
                        <div id="cut-green" onclick="toggleCut116('green')" class="w-12 h-24 bg-[#22c55e] border-2 border-[#15803d] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl font-black">✕</div></div>
                        <div class="flex flex-col">
                            <div id="cut-purple" onclick="toggleCut116('purple')" class="w-24 h-12 bg-[#a855f7] border-2 border-[#7e22ce] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl font-black">✕</div></div>
                            <div id="cut-blue" onclick="toggleCut116('blue')" class="w-24 h-24 bg-[#3b82f6] border-2 border-[#1d4ed8] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-4xl font-black">✕</div></div>
                            <div id="cut-white" onclick="toggleCut116('white')" class="w-24 h-12 bg-white border-2 border-gray-400 relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl font-black">✕</div></div>
                        </div>
                        <div id="cut-red" onclick="toggleCut116('red')" class="w-12 h-24 bg-[#ef4444] border-2 border-[#b91c1c] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl font-black">✕</div></div>
                        <div id="cut-orange" onclick="toggleCut116('orange')" class="w-24 h-24 bg-[#f97316] border-2 border-[#c2410c] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-4xl font-black">✕</div></div>
                        <div id="cut-yellow" onclick="toggleCut116('yellow')" class="w-12 h-24 bg-[#fde047] border-2 border-[#a16207] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl font-black">✕</div></div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-116" onclick="submit116()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.check116B1 = function(choice) {
                    window.ans116B1 = choice;
                    const box = document.getElementById('box-116-1');
                    box.classList.add('border-2');
                    if (choice === 'B') {
                        box.classList.add('border-emerald-400', 'bg-emerald-50');
                    } else {
                        box.classList.add('border-red-400', 'bg-red-50');
                    }
                };

                window.check116B3 = function() {
                    const a = document.getElementById('116-3a').classList.contains('selected');
                    const b = document.getElementById('116-3b').classList.contains('selected');
                    const c = document.getElementById('116-3c').classList.contains('selected');
                    const box = document.getElementById('box-116-3');
                    box.classList.add('border-2');
                    if (a && !b && c) {
                        box.classList.add('border-emerald-400', 'bg-emerald-50');
                    } else {
                        box.classList.add('border-red-400', 'bg-red-50');
                    }
                };

                window.toggleCut116 = function(id) {
                    const marks = document.querySelectorAll('#box-116-4 .x-mark');
                    marks.forEach(m => m.classList.add('hidden'));
                    document.querySelector('#cut-' + id + ' .x-mark').classList.remove('hidden');
                    window.lastCut116 = id;
                };

                window.check116B4 = function() {
                    const box = document.getElementById('box-116-4');
                    box.classList.add('border-2');
                    if (window.lastCut116 === 'green' || window.lastCut116 === 'yellow') {
                        box.classList.add('border-emerald-400', 'bg-emerald-50');
                    } else {
                        box.classList.add('border-red-400', 'bg-red-50');
                    }
                };

                window.submit116 = function() {
                    let score = 0;
                    if (window.ans116B1 === 'B') score += 3.5;
                    const a3 = document.getElementById('116-3a').classList.contains('selected');
                    const b3 = document.getElementById('116-3b').classList.contains('selected');
                    const c3 = document.getElementById('116-3c').classList.contains('selected');
                    if (a3 && !b3 && c3) score += 3.5;
                    if (window.lastCut116 === 'green' || window.lastCut116 === 'yellow') score += 3;

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-116");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Hình khai triển của hình trụ gồm mặt bên là hình gì?", "options": ["Hình vuông", "Hình tròn", "Hình chữ nhật", "Hình tam giác"], "answer": 2, "level": 1 },
        { "question": "Có bao nhiêu hình khai triển cơ bản của hình lập phương?", "options": ["6 hình", "8 hình", "11 hình", "12 hình"], "answer": 2, "level": 2 },
        { "question": "Một hình khai triển của hình lập phương có mấy mặt?", "options": ["4 mặt", "6 mặt", "8 mặt", "4 mặt bên và 1 mặt đáy"], "answer": 1, "level": 1 }
    ]
};
