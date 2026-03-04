export const lesson119 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "119",
    "title": "LUYỆN TẬP: DIỆN TÍCH XUNG QUANH & TOÀN PHẦN",
    "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (Tiết 119 - Trang 47).",
    "content": `
        <div class="space-y-4 md:space-y-6 text-indigo-900">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-indigo-50 p-4 md:p-6 rounded-[32px] border-l-[12px] border-indigo-600 shadow-lg">
                <h3 class="font-black text-2xl md:text-3xl mb-2 flex items-center gap-4">
                    <span class="text-3xl md:text-4xl">🎯</span> Mục tiêu
                </h3>
                <ul class="list-disc list-inside space-y-1 font-bold text-xl md:text-2xl leading-tight opacity-80">
                    <li>Rèn luyện tính Sxq và Stp.</li>
                    <li>Vận dụng vào thực tế: bể cá, đố vui.</li>
                </ul>
            </div>

            <section class="bg-white p-2 md:p-4 rounded-[40px] border border-gray-100 shadow-xl">
                <h4 class="text-2xl md:text-4xl font-black mb-4 flex items-center gap-4">
                    <span class="p-2 bg-amber-500 text-white rounded-xl">⚠️</span> GHI NHỚ
                </h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div class="bg-blue-600 p-4 rounded-[24px] text-white shadow-lg">
                        <p class="text-sm font-black uppercase opacity-60">S xung quanh</p>
                        <p class="text-xl md:text-3xl font-black">Chu vi đáy × Chiều cao</p>
                    </div>
                    <div class="bg-emerald-600 p-4 rounded-[24px] text-white shadow-lg">
                        <p class="text-sm font-black uppercase opacity-60">S toàn phần</p>
                        <p class="text-xl md:text-3xl font-black">Sxq + 2 × S đáy</p>
                    </div>
                </div>

                <div class="bg-amber-50 p-4 rounded-[24px] border-2 border-amber-200 mt-2">
                    <p class="text-amber-900 font-bold text-lg md:text-2xl italic text-center">
                        "Bể cá KHÔNG NẮP: Chỉ cộng thêm 1 mặt đáy."
                    </p>
                </div>
            </section>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài tập 1 -->
            <div class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl relative overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Tính diện tích xung quanh:
                </p>
                
                <div class="bg-gray-50 p-1 rounded-[24px] border border-gray-100 flex flex-col items-center gap-1">
                    <img src="hinh_anh/toan/toan_tap_2/119-b1.png" alt="Bài 1 Tiết 119" class="w-full max-w-3xl h-auto rounded-xl">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                        <div id="box-119-b1a" class="bg-white p-2 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                            <p class="text-sm font-black text-orange-600 uppercase">Hình a</p>
                            <div class="flex items-center gap-2">
                                <input type="number" id="ans-119-1a" class="w-full text-4xl font-black text-indigo-700 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-xl font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                        <div id="box-119-b1b" class="bg-white p-2 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                            <p class="text-sm font-black text-cyan-600 uppercase">Hình b</p>
                            <div class="flex items-center gap-2">
                                <input type="number" id="ans-119-1b" class="w-full text-4xl font-black text-indigo-700 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-xl font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-emerald-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Tính diện tích kính (KHÔNG NẮP):
                </p>
                <div class="bg-blue-900 p-1 rounded-[24px] flex flex-col items-center gap-1">
                    <img src="hinh_anh/toan/toan_tap_2/119-b2.png" alt="Bài 2 Tiết 119" class="w-full max-w-3xl h-auto rounded-xl">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-1 w-full text-white">
                        <div class="bg-white/10 p-2 rounded-2xl border border-white/20 text-center">
                            <p class="font-black text-sm mb-1 uppercase opacity-60">Bể a</p>
                            <div id="box-119-b2a" class="flex items-center bg-white/5 rounded-xl border border-white/20">
                                <input type="number" id="ans-119-2a" class="w-full text-3xl font-black text-yellow-300 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-lg font-black opacity-30 pr-2">m²</span>
                            </div>
                        </div>
                        <div class="bg-white/10 p-2 rounded-2xl border border-white/20 text-center">
                            <p class="font-black text-sm mb-1 uppercase opacity-60">Bể b</p>
                            <div id="box-119-b2b" class="flex items-center bg-white/5 rounded-xl border border-white/20">
                                <input type="number" id="ans-119-2b" class="w-full text-3xl font-black text-yellow-400 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-lg font-black opacity-30 pr-2">cm²</span>
                            </div>
                        </div>
                        <div class="bg-white/10 p-2 rounded-2xl border border-white/20 text-center">
                            <p class="font-black text-sm mb-1 uppercase opacity-60">Bể c</p>
                            <div id="box-119-b2c" class="flex items-center bg-white/5 rounded-xl border border-white/20">
                                <input type="number" id="ans-119-2c" class="w-full text-3xl font-black text-yellow-300 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-lg font-black opacity-30 pr-2">dm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div class="p-1 bg-amber-600 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 flex items-center gap-2">
                    <span class="w-10 h-10 bg-white text-amber-600 rounded-xl flex items-center justify-center font-black">3</span>
                    Khuôn bánh vuông 16,5cm (Thanh gỗ 55cm?)
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-1 bg-white/10 rounded-2xl border border-white/20">
                    <img src="hinh_anh/toan/toan_tap_2/119-b3.png" alt="Bài 3 Tiết 119" class="w-full h-auto rounded-xl">
                    <div class="flex gap-2 items-center">
                        <button onclick="selectChoice119('3', 'CO')" id="btn-119-3-yes" class="flex-1 py-4 rounded-2xl bg-white/20 border-2 border-white/30 text-2xl font-black hover:bg-emerald-500 transition-all uppercase">Có</button>
                        <button onclick="selectChoice119('3', 'KHONG')" id="btn-119-3-no" class="flex-1 py-4 rounded-2xl bg-white/20 border-2 border-white/30 text-2xl font-black hover:bg-rose-500 transition-all uppercase">Không</button>
                    </div>
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-indigo-900 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                    So sánh 4 khối lập phương:
                </p>
                <div class="bg-gray-100 p-1 rounded-[24px] flex flex-col items-center gap-2">
                    <img src="hinh_anh/toan/toan_tap_2/119-b4.png" alt="Bài 4 Tiết 119" class="w-full max-w-2xl h-auto rounded-xl shadow-md border-4 border-white">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                        <div class="bg-white p-2 rounded-2xl shadow border border-indigo-50">
                            <p class="text-xs font-black text-indigo-900 mb-1 uppercase opacity-50">A. Sxq lớn nhất?</p>
                            <div class="grid grid-cols-3 gap-1">
                                <button onclick="selectChoice119('4a', 'MAI')" id="btn-119-4a-MAI" class="py-2 rounded-xl bg-indigo-50 border border-indigo-200 font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all">Mai</button>
                                <button onclick="selectChoice119('4a', 'VIET')" id="btn-119-4a-VIET" class="py-2 rounded-xl bg-indigo-50 border border-indigo-200 font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all">Việt</button>
                                <button onclick="selectChoice119('4a', 'NAM')" id="btn-119-4a-NAM" class="py-2 rounded-xl bg-indigo-50 border border-indigo-200 font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all">Nam</button>
                            </div>
                        </div>
                        <div class="bg-white p-2 rounded-2xl shadow border border-indigo-50">
                            <p class="text-xs font-black text-indigo-900 mb-1 uppercase opacity-50">B. Stp bé nhất?</p>
                            <div class="grid grid-cols-3 gap-1">
                                <button onclick="selectChoice119('4b', 'MAI')" id="btn-119-4b-MAI" class="py-2 rounded-xl bg-indigo-50 border border-indigo-200 font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all">Mai</button>
                                <button onclick="selectChoice119('4b', 'VIET')" id="btn-119-4b-VIET" class="py-2 rounded-xl bg-indigo-50 border border-indigo-200 font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all">Việt</button>
                                <button onclick="selectChoice119('4b', 'NAM')" id="btn-119-4b-NAM" class="py-2 rounded-xl bg-indigo-50 border border-indigo-200 font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all">Nam</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-center mt-2">
                <button onclick="submit119()" id="submit-btn-119" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>
        </div>
        
        <script>
            var selected119 = { '3': null, '4a': null, '4b': null };
            
            function selectChoice119(q, val) {
                selected119[q] = val;
                if (q === '3') {
                    ['yes', 'no'].forEach(id => {
                        const btn = document.getElementById('btn-119-3-' + id);
                        btn.className = "flex-1 py-4 rounded-2xl bg-white/20 border-2 border-white/30 text-2xl font-black transition-all uppercase";
                    });
                    const target = document.getElementById('btn-119-3-' + (val === 'CO' ? 'yes' : 'no'));
                    target.className = "flex-1 py-4 rounded-2xl bg-" + (val === 'CO' ? 'emerald' : 'rose') + "-600 border-2 border-transparent text-white text-2xl font-black transition-all uppercase";
                } else {
                    ['MAI', 'VIET', 'NAM'].forEach(v => {
                        const btn = document.getElementById('btn-119-' + q + '-' + v);
                        btn.className = "py-2 rounded-xl bg-indigo-50 border border-indigo-200 font-bold text-lg text-indigo-900 transition-all";
                    });
                    const target = document.getElementById('btn-119-' + q + '-' + val);
                    target.className = "py-2 rounded-xl bg-indigo-600 border border-transparent font-bold text-lg text-white transition-all";
                }
            }

            function submit119() {
                const a1a = document.getElementById('ans-119-1a').value;
                const a1b = document.getElementById('ans-119-1b').value;
                const a2a = document.getElementById('ans-119-2a').value;
                const a2b = document.getElementById('ans-119-2b').value;
                const a2c = document.getElementById('ans-119-2c').value;

                if (!a1a || !a1b || !a2a || !a2b || !a2c || !selected119['3'] || !selected119['4a'] || !selected119['4b']) {
                    alert("Thầy E nhắc bé: Hãy hoàn thành hết các câu hỏi nhé! ✨");
                    return;
                }

                let score = 0;
                
                // Visual feedback resets
                const ids = ['1a', '1b', '2a', '2b', '2c'];
                ids.forEach(id => {
                    const box = document.getElementById('box-119-b' + id);
                    if (box) box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                });

                if (parseInt(a1a) === 126) { score += 10; document.getElementById('box-119-b1a').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-119-b1a').classList.add('border-red-400', 'bg-red-50'); }
                if (parseInt(a1b) === 126) { score += 10; document.getElementById('box-119-b1b').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-119-b1b').classList.add('border-red-400', 'bg-red-50'); }
                if (parseFloat(a2a) === 8) { score += 20; document.getElementById('box-119-b2a').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-119-b2a').classList.add('border-red-400', 'bg-red-50'); }
                if (parseInt(a2b) === 140000) { score += 20; document.getElementById('box-119-b2b').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-119-b2b').classList.add('border-red-400', 'bg-red-50'); }
                if (parseInt(a2c) === 250) { score += 20; document.getElementById('box-119-b2c').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-119-b2c').classList.add('border-red-400', 'bg-red-50'); }

                if (selected119['3'] === 'KHONG') score += 10;
                if (selected119['4a'] === 'MAI') score += 5;
                if (selected119['4b'] === 'NAM') score += 5;

                const status = score >= 80 ? "XS" : (score >= 50 ? "Đ" : "CĐ");
                if (window.submitMathLesson) {
                    window.submitMathLesson("Score: " + score, Math.round(score * 10), "submit-btn-119");
                }
                alert("Bé được " + score + "/100 điểm! Thầy E rất tự hào về bé! 🌟");
            }
        </script>
    `,
    "quizPool": []
};
