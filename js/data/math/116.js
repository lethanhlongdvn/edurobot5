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
            <div id="box-116-1" class="p-4 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden flex flex-col gap-4">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p class="font-black text-xl md:text-2xl text-blue-700 flex items-center gap-2">
                        <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black shrink-0">1</span>
                        Đây là khai triển của hình nào?
                    </p>
                    <button onclick="check116B1()" class="shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-bold text-lg shadow-md transition-all active:scale-95 flex items-center gap-2">
                        <span class="font-black">✓</span> Kiểm tra
                    </button>
                </div>
                <div class="bg-blue-50 p-2 md:p-4 rounded-[32px]">
                    <div class="bg-white rounded-2xl p-4 mb-2 flex justify-center border border-blue-100">
                        <img src="hinh_anh/toan_tap_2/116_b1_de.png" class="w-full h-auto max-w-sm object-contain drop-shadow-sm mix-blend-multiply" />
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <button onclick="select116B1('A')" id="btn-116b1-a" class="b116-opt bg-white p-2 md:p-4 rounded-2xl border-2 border-transparent hover:border-blue-200 flex flex-col items-center justify-end gap-2 group min-h-[160px] [&.selected]:border-blue-500 [&.selected]:bg-blue-100">
                             <img src="hinh_anh/toan_tap_2/116_b1_a.png" class="h-28 md:h-36 object-contain drop-shadow-sm mix-blend-multiply" />
                            <span class="font-black text-2xl md:text-3xl text-gray-400 group-hover:text-blue-600">A</span>
                        </button>
                        <button onclick="select116B1('B')" id="btn-116b1-b" class="b116-opt bg-white p-2 md:p-4 rounded-2xl border-2 border-transparent hover:border-blue-200 flex flex-col items-center justify-end gap-2 group min-h-[160px] [&.selected]:border-blue-500 [&.selected]:bg-blue-100">
                             <img src="hinh_anh/toan_tap_2/116_b1_b.png" class="h-28 md:h-36 object-contain drop-shadow-sm mix-blend-multiply" />
                            <span class="font-black text-2xl md:text-3xl text-gray-400 group-hover:text-blue-600">B</span>
                        </button>
                        <button onclick="select116B1('C')" id="btn-116b1-c" class="b116-opt bg-white p-2 md:p-4 rounded-2xl border-2 border-transparent hover:border-blue-200 flex flex-col items-center justify-end gap-2 group min-h-[160px] [&.selected]:border-blue-500 [&.selected]:bg-blue-100">
                             <img src="hinh_anh/toan_tap_2/116_b1_c.png" class="h-16 md:h-20 object-contain drop-shadow-sm mix-blend-multiply" />
                            <span class="font-black text-2xl md:text-3xl text-gray-400 group-hover:text-blue-600">C</span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Bài 2 -->
            <div id="box-116-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <div class="flex items-center justify-between mb-2">
                    <p class="font-black text-xl md:text-2xl text-emerald-700 flex items-center gap-2">
                        <span class="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                        Thực hành gấp hình lập phương
                    </p>
                </div>
                <div class="bg-emerald-50 p-4 rounded-[32px] space-y-4">
                    <p class="text-emerald-900 font-bold text-lg md:text-xl text-center">Em hãy chọn một trong các hình khai triển dưới đây và làm theo bước để gấp thành hình lập phương nhé!</p>
                    <div class="flex justify-center bg-white p-2 md:p-4 rounded-3xl shadow-inner border border-emerald-100">
                        <img src="hinh_anh/toan_tap_2/116_b2_shapes.png" alt="Shapes" class="w-full max-w-2xl h-auto object-contain mix-blend-multiply drop-shadow-sm" />
                    </div>
                    <div class="flex justify-center bg-white p-2 md:p-4 rounded-3xl shadow-inner border border-emerald-100">
                        <img src="hinh_anh/toan_tap_2/116_b2_robot.png" alt="Robot folding" class="w-full max-w-2xl h-auto object-contain mix-blend-multiply drop-shadow-sm" />
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-116-3" class="p-4 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden flex flex-col gap-4">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p class="font-black text-xl md:text-2xl text-indigo-700 flex items-center gap-2">
                        <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black shrink-0">3</span>
                        Chọn khai triển của hình lập phương:
                    </p>
                    <button onclick="check116B3()" class="shrink-0 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl font-bold text-lg shadow-md transition-all active:scale-95 flex items-center gap-2">
                        <span class="font-black">✓</span> Kiểm tra
                    </button>
                </div>
                <div class="bg-indigo-50 p-2 md:p-4 rounded-[32px] grid grid-cols-3 gap-2">
                    <button onclick="this.classList.toggle('selected');" id="116-3a" class="b116-3-btn bg-white p-2 rounded-2xl flex flex-col justify-end items-center gap-2 border-2 border-transparent [&.selected]:border-indigo-500 [&.selected]:bg-indigo-100">
                        <img src="hinh_anh/toan_tap_2/116_b3_a.png" class="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm max-h-[260px]" />
                        <span class="font-black text-xl md:text-3xl text-gray-400">A</span>
                    </button>
                    <button onclick="this.classList.toggle('selected');" id="116-3b" class="b116-3-btn bg-white p-2 rounded-2xl flex flex-col justify-end items-center gap-2 border-2 border-transparent [&.selected]:border-indigo-500 [&.selected]:bg-indigo-100">
                        <img src="hinh_anh/toan_tap_2/116_b3_b.png" class="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm max-h-[260px]" />
                        <span class="font-black text-xl md:text-3xl text-gray-400">B</span>
                    </button>
                    <button onclick="this.classList.toggle('selected');" id="116-3c" class="b116-3-btn bg-white p-2 rounded-2xl flex flex-col justify-end items-center gap-2 border-2 border-transparent [&.selected]:border-indigo-500 [&.selected]:bg-indigo-100">
                        <img src="hinh_anh/toan_tap_2/116_b3_c.png" class="w-full h-auto object-contain mix-blend-multiply drop-shadow-sm max-h-[260px]" />
                        <span class="font-black text-xl md:text-3xl text-gray-400">C</span>
                    </button>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="box-116-4" class="p-4 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden flex flex-col gap-4">
                <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <p class="font-black text-xl md:text-2xl text-orange-700 flex items-center gap-2">
                        <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black shrink-0">4</span>
                        Cắt 1 hình chữ nhật để phần còn lại gấp được một hình hộp chữ nhật:
                    </p>
                    <button onclick="check116B4()" class="shrink-0 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl font-bold text-lg shadow-md transition-all active:scale-95 flex items-center gap-2">
                        <span class="font-black">✓</span> Kiểm tra
                    </button>
                </div>
                <div class="bg-slate-50 p-6 md:p-12 rounded-[32px] flex justify-center items-center overflow-x-auto">
                    <div class="flex items-center">
                        <div id="cut-green" onclick="toggleCut116('green')" class="w-12 h-24 md:w-20 md:h-40 bg-[#22c55e] border-2 border-[#15803d] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl md:text-5xl font-black">✕</div></div>
                        <div class="flex flex-col">
                            <div id="cut-purple" onclick="toggleCut116('purple')" class="w-24 h-12 md:w-40 md:h-20 bg-[#a855f7] border-2 border-[#7e22ce] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl md:text-5xl font-black">✕</div></div>
                            <div id="cut-blue" onclick="toggleCut116('blue')" class="w-24 h-24 md:w-40 md:h-40 bg-[#3b82f6] border-2 border-[#1d4ed8] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-4xl md:text-6xl font-black">✕</div></div>
                            <div id="cut-white" onclick="toggleCut116('white')" class="w-24 h-12 md:w-40 md:h-20 bg-white border-2 border-gray-400 relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl md:text-5xl font-black">✕</div></div>
                        </div>
                        <div id="cut-red" onclick="toggleCut116('red')" class="w-12 h-24 md:w-20 md:h-40 bg-[#ef4444] border-2 border-[#b91c1c] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl md:text-5xl font-black">✕</div></div>
                        <div id="cut-orange" onclick="toggleCut116('orange')" class="w-24 h-24 md:w-40 md:h-40 bg-[#f97316] border-2 border-[#c2410c] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-4xl md:text-6xl font-black">✕</div></div>
                        <div id="cut-yellow" onclick="toggleCut116('yellow')" class="w-12 h-24 md:w-20 md:h-40 bg-[#fde047] border-2 border-[#a16207] relative cursor-pointer"><div class="x-mark hidden absolute inset-0 flex items-center justify-center text-red-600 text-3xl md:text-5xl font-black">✕</div></div>
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
                window.select116B1 = function(choice) {
                    window.ans116B1 = choice;
                    document.querySelectorAll('.b116-opt').forEach(btn => btn.classList.remove('selected'));
                    document.getElementById('btn-116b1-' + choice.toLowerCase()).classList.add('selected');
                };

                window.check116B1 = function() {
                    const choice = window.ans116B1;
                    if (!choice) return;
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
                    if (!a && !b && c) {
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
                    if (!a3 && !b3 && c3) score += 3.5;
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
