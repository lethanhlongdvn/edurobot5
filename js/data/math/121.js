export const lesson121 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "121",
    "title": "LUYỆN TẬP: DIỆN TÍCH HÌNH LẬP PHƯƠNG",
    "desc": "Bài 51: Luyện tập về diện tích xung quanh và diện tích toàn phần của hình lập phương (Trang 50).",
    "content": `
        <div class="space-y-2 text-indigo-900">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-emerald-50 p-4 md:p-6 rounded-[32px] border-l-[12px] border-emerald-600 shadow-sm font-bold text-xl md:text-2xl leading-tight">
                Vận dụng linh hoạt công thức Sxq và Stp vào thực tế: dán đèn lồng, phủ kem bánh, chậu cây...
            </div>

            <!-- 🖍️ Nhắc lại kiến thức -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div class="bg-indigo-600 p-4 rounded-[24px] text-white shadow-lg text-center">
                    <p class="text-sm font-bold opacity-80 uppercase">S xung quanh (4 mặt)</p>
                    <p class="text-2xl md:text-4xl font-black">S<sub>xq</sub> = (a × a) × 4</p>
                </div>
                <div class="bg-purple-600 p-4 rounded-[24px] text-white shadow-lg text-center">
                    <p class="text-sm font-bold opacity-80 uppercase">S toàn phần (6 mặt)</p>
                    <p class="text-2xl md:text-4xl font-black">S<sub>tp</sub> = (a × a) × 6</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài tập 1 -->
            <div id="box-121-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl">
                <p class="font-black text-xl md:text-2xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Diện tích các mảnh nhựa màu (6 mặt):
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-gray-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/121-b1-lamps.png" alt="Đèn" class="w-full max-w-[300px] h-auto rounded-xl">
                    <div class="w-full space-y-1">
                        <div class="bg-white p-2 rounded-2xl flex items-center justify-between border border-gray-200">
                            <span class="font-black text-lg">25 cm:</span>
                            <div class="flex items-center gap-1">
                                <input type="number" id="ans-121-1a" class="w-24 text-2xl font-black text-indigo-600 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                                <span class="text-xs font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                        <div class="bg-white p-2 rounded-2xl flex items-center justify-between border border-gray-200">
                            <span class="font-black text-lg">15 cm:</span>
                            <div class="flex items-center gap-1">
                                <input type="number" id="ans-121-1b" class="w-24 text-2xl font-black text-indigo-600 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                                <span class="text-xs font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                        <div class="bg-white p-2 rounded-2xl flex items-center justify-between border border-gray-200">
                            <span class="font-black text-lg">30 cm:</span>
                            <div class="flex items-center gap-1">
                                <input type="number" id="ans-121-1c" class="w-24 text-2xl font-black text-indigo-600 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                                <span class="text-xs font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-121-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-pink-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-pink-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Phủ kem 5 mặt (xung quanh + trên):
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-pink-50 p-1 rounded-[32px]">
                    <div class="bg-white p-4 rounded-3xl shadow-inner w-full flex items-center gap-2">
                        <input type="number" id="ans-121-2" class="w-full text-5xl font-black text-pink-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                        <span class="text-2xl font-black text-gray-300">cm²</span>
                    </div>
                    <img src="hinh_anh/toan/toan_tap_2/121-b2-mai-cake.png" alt="Bánh" class="w-full max-w-[200px] h-auto rounded-xl">
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-121-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl">
                <p class="font-black text-xl md:text-2xl mb-1 text-amber-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    Trang trí chậu cây (Sxq × 25đ):
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-amber-50 p-1 rounded-[32px]">
                    <div class="w-full space-y-1">
                        <div class="bg-white p-2 rounded-2xl border border-amber-100 flex items-center justify-between">
                            <span class="text-xs font-bold text-gray-400">Sxq (cm²)</span>
                            <input type="number" id="ans-121-3a" class="w-24 text-xl font-black text-gray-800 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                        </div>
                        <div class="bg-amber-600 p-2 rounded-2xl flex items-center justify-between text-white">
                            <span class="text-xs font-bold">Tiền (đ)</span>
                            <input type="number" id="ans-121-3b" class="w-32 text-2xl font-black text-right bg-transparent border-none focus:ring-0 placeholder-white/50" placeholder="?">
                        </div>
                    </div>
                    <img src="hinh_anh/toan/toan_tap_2/121-b3-robot-pot.png" alt="Chậu" class="w-full max-w-[150px] h-auto rounded-xl">
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div id="box-121-4" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                    Ghép 2 khối 4cm. Mai nói Stp gấp 2?
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-1 bg-blue-50 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/121-b4-kids-cubes.png" alt="Ghép" class="w-full h-auto rounded-xl">
                    <div class="flex gap-2 items-center">
                        <button id="btn-121-4-true" onclick="select4(true)" class="flex-1 py-4 rounded-2xl border-2 bg-white/50 text-emerald-700 font-black text-2xl hover:bg-emerald-600 hover:text-white transition-all">ĐÚNG</button>
                        <button id="btn-121-4-false" onclick="select4(false)" class="flex-1 py-4 rounded-2xl border-2 bg-white/50 text-rose-700 font-black text-2xl hover:bg-rose-600 hover:text-white transition-all">SAI</button>
                    </div>
                    <input type="hidden" id="ans-121-4">
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-121" onclick="submit121()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.select4 = function(val) {
                    document.getElementById('ans-121-4').value = val ? "true" : "false";
                    document.getElementById('btn-121-4-true').className = val ? "flex-1 py-4 rounded-2xl bg-emerald-600 border-2 border-transparent text-white font-black text-2xl" : "flex-1 py-4 rounded-2xl bg-white/50 border-2 border-emerald-200 text-emerald-700 font-black text-2xl";
                    document.getElementById('btn-121-4-false').className = !val ? "flex-1 py-4 rounded-2xl bg-rose-600 border-2 border-transparent text-white font-black text-2xl" : "flex-1 py-4 rounded-2xl bg-white/50 border-2 border-rose-200 text-rose-700 font-black text-2xl";
                };

                window.submit121 = function() {
                    const a1a = document.getElementById('ans-121-1a').value;
                    const a1b = document.getElementById('ans-121-1b').value;
                    const a1c = document.getElementById('ans-121-1c').value;
                    const a2 = document.getElementById('ans-121-2').value;
                    const a3a = document.getElementById('ans-121-3a').value;
                    const a3b = document.getElementById('ans-121-3b').value;
                    const a4 = document.getElementById('ans-121-4').value;

                    if (!a1a || !a1b || !a1c || !a2 || !a3a || !a3b || !a4) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành hết bài nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    
                    // Reset feedback
                    ['1', '2', '3', '4'].forEach(id => {
                        const box = document.getElementById('box-121-' + id);
                        box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                        box.classList.add('border-2');
                    });

                    let c1 = (parseInt(a1a) === 3750 && parseInt(a1b) === 1350 && parseInt(a1c) === 5400);
                    let c2 = (parseInt(a2) === 500);
                    let c3 = (parseInt(a3a) === 1600 && parseInt(a3b) === 40000);
                    let c4 = (a4 === "false");

                    if (c1) { score += 3; document.getElementById('box-121-1').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-121-1').classList.add('border-red-400', 'bg-red-50'); }
                    if (c2) { score += 2; document.getElementById('box-121-2').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-121-2').classList.add('border-red-400', 'bg-red-50'); }
                    if (c3) { score += 3; document.getElementById('box-121-3').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-121-3').classList.add('border-red-400', 'bg-red-50'); }
                    if (c4) { score += 2; document.getElementById('box-121-4').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-121-4').classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-121");
                    }
                    alert("Điểm của bé: " + score + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Một hộp không có nắp hình lập phương cạnh 10cm. Diện tích cần dán giấy là bao nhiêu mặt?", "options": ["4 mặt", "5 mặt", "6 mặt", "1 mặt"], "answer": 1, "level": 1 },
        { "question": "Hai hình lập phương cạnh 1cm xếp cạnh nhau. Diện tích toàn phần khối mới là bao nhiêu?", "options": ["12 cm²", "10 cm²", "6 cm²", "8 cm²"], "answer": 1, "level": 2 },
        { "question": "Diện tích một mặt hình lập phương là 9 cm². Diện tích toàn phần là:", "options": ["36 cm²", "54 cm²", "81 cm²", "45 cm²"], "answer": 1, "level": 1 }
    ]
};
