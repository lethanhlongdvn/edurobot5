export const lesson120 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "120",
    "title": "DIỆN TÍCH XUNG QUANH VÀ TOÀN PHẦN HÌNH LẬP PHƯƠNG",
    "desc": "Bài 51: Diện tích xung quanh và diện tích toàn phần của hình lập phương (Tiết 1 - Trang 48-49).",
    "content": `
        <div class="space-y-2 text-indigo-900">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-indigo-50 p-4 md:p-6 rounded-[32px] border-l-[12px] border-indigo-600 shadow-sm">
                <h3 class="font-black text-2xl md:text-3xl mb-2 flex items-center gap-4">
                    <span class="text-3xl md:text-4xl">🎯</span> Mục tiêu
                </h3>
                <ul class="list-disc list-inside space-y-1 font-bold text-xl md:text-2xl leading-tight opacity-80">
                    <li>Tính Sxq và Stp hình lập phương.</li>
                    <li>Vận dụng vào toán thực tế: quấn quà, may gối...</li>
                </ul>
            </div>

            <!-- 📖 Khám phá kiến thức -->
            <div class="bg-white p-2 md:p-4 rounded-[40px] border border-indigo-100 shadow-xl overflow-hidden">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="space-y-2">
                        <div class="bg-amber-50 p-4 rounded-[24px] border-2 border-amber-200">
                            <p class="text-amber-900 font-bold text-lg md:text-2xl italic leading-tight">
                                "Hình lập phương có 6 mặt là các hình vuông bằng nhau."
                            </p>
                        </div>
                        <div class="bg-indigo-600 p-4 rounded-[24px] text-white shadow-lg">
                            <p class="text-indigo-100 font-black text-sm uppercase">1. Diện tích xung quanh (4 mặt)</p>
                            <p class="text-2xl md:text-4xl font-black text-center">S<sub>xq</sub> = (a × a) × 4</p>
                        </div>
                        <div class="bg-purple-600 p-4 rounded-[24px] text-white shadow-lg">
                            <p class="text-purple-100 font-black text-sm uppercase">2. Diện tích toàn phần (6 mặt)</p>
                            <p class="text-2xl md:text-4xl font-black text-center">S<sub>tp</sub> = (a × a) × 6</p>
                        </div>
                    </div>
                    <div class="flex justify-center items-center bg-gray-50 rounded-[32px] p-2">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-xq.png" alt="Khám phá" class="w-full max-w-sm h-auto rounded-xl shadow-md">
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài tập 1 -->
            <div class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl relative">
                <p class="font-black text-xl md:text-2xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Tính Sxq và Stp:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div id="box-120-1a" class="bg-gray-50 p-2 rounded-[32px] border-2 border-transparent">
                        <p class="text-xl font-black text-indigo-700 mb-1">a) Cạnh 12 cm</p>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="bg-white p-2 rounded-2xl shadow">
                                <label class="block text-gray-400 font-bold text-[10px] uppercase">Sxq</label>
                                <div class="flex items-center gap-1">
                                    <input type="number" id="ans-120-1a-xq" class="w-full text-3xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                    <span class="text-sm font-black text-gray-300">cm²</span>
                                </div>
                            </div>
                            <div class="bg-white p-2 rounded-2xl shadow">
                                <label class="block text-gray-400 font-bold text-[10px] uppercase">Stp</label>
                                <div class="flex items-center gap-1">
                                    <input type="number" id="ans-120-1a-tp" class="w-full text-3xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                    <span class="text-sm font-black text-gray-300">cm²</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="box-120-1b" class="bg-gray-50 p-2 rounded-[32px] border-2 border-transparent">
                        <p class="text-xl font-black text-emerald-700 mb-1">b) Cạnh 1,5 m</p>
                        <div class="grid grid-cols-2 gap-2">
                            <div class="bg-white p-2 rounded-2xl shadow">
                                <label class="block text-gray-400 font-bold text-[10px] uppercase">Sxq</label>
                                <div class="flex items-center gap-1">
                                    <input type="number" step="0.01" id="ans-120-1b-xq" class="w-full text-3xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                    <span class="text-sm font-black text-gray-300">m²</span>
                                </div>
                            </div>
                            <div class="bg-white p-2 rounded-2xl shadow">
                                <label class="block text-gray-400 font-bold text-[10px] uppercase">Stp</label>
                                <div class="flex items-center gap-1">
                                    <input type="number" step="0.01" id="ans-120-1b-tp" class="w-full text-3xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                    <span class="text-sm font-black text-gray-300">m²</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-120-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl relative overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-amber-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Quấn túi bóng chiếc bánh (cạnh 9 cm)?
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-amber-50 rounded-[32px] p-1">
                    <div class="bg-white p-4 rounded-3xl shadow-inner w-full flex items-center gap-4">
                        <input type="number" id="ans-120-2" class="w-full text-5xl font-black text-amber-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                        <span class="text-2xl font-black text-gray-300">cm²</span>
                    </div>
                    <img src="hinh_anh/toan/toan_tap_2/120-b2-cake.png" alt="Bánh" class="w-full max-w-[200px] h-auto rounded-3xl shadow-lg border-2 border-white">
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-120" onclick="submit120()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.submit120 = function() {
                    const a1ax = document.getElementById('ans-120-1a-xq').value;
                    const a1at = document.getElementById('ans-120-1a-tp').value;
                    const a1bx = document.getElementById('ans-120-1b-xq').value;
                    const a1bt = document.getElementById('ans-120-1b-tp').value;
                    const a2 = document.getElementById('ans-120-2').value;

                    if (!a1ax || !a1at || !a1bx || !a1bt || !a2) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành tất cả các ô trống nhé! 🌟");
                        return;
                    }

                    let score = 0;
                    
                    // Reset visual feedback
                    ['1a', '1b', '2'].forEach(id => {
                        const box = document.getElementById('box-120-' + id);
                        box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50|border-transparent/g, '').trim();
                        box.classList.add('border-2');
                    });

                    let c1a = (parseInt(a1ax) === 576 && parseInt(a1at) === 864);
                    let c1b = (parseFloat(a1bx) === 9 && parseFloat(a1bt) === 13.5);
                    let c2 = (parseInt(a2) === 324);

                    if (c1a) { score += 3; document.getElementById('box-120-1a').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-120-1a').classList.add('border-red-400', 'bg-red-50'); }
                    if (c1b) { score += 3; document.getElementById('box-120-1b').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-120-1b').classList.add('border-red-400', 'bg-red-50'); }
                    if (c2) { score += 4; document.getElementById('box-120-2').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-120-2').classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 6 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-120");
                    }
                    alert("Bé hoàn thành bài rồi! Điểm của bé: " + score + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Một hình lập phương có cạnh 5 cm. Diện tích xung quanh là:", "options": ["25 cm²", "100 cm²", "125 cm²", "150 cm²"], "answer": 1, "level": 1 },
        { "question": "Diện tích toàn phần của hình lập phương có cạnh 2 dm là:", "options": ["16 dm²", "24 dm²", "4 dm²", "8 dm²"], "answer": 1, "level": 1 },
        { "question": "Nếu cạnh của hình lập phương gấp lên 2 lần thì diện tích xung quanh gấp lên mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 2 }
    ]
};
