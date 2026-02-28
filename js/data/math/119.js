export const lesson119 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "119",
    "title": "LUYỆN TẬP: DIỆN TÍCH XUNG QUANH & TOÀN PHẦN",
    "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (Tiết 119 - Trang 47).",
    "content": `
        <div class="space-y-12 md:space-y-20">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-indigo-50 p-8 md:p-12 rounded-[48px] border-l-[16px] border-indigo-600 shadow-xl">
                <h3 class="text-indigo-900 font-black text-3xl md:text-5xl mb-8 flex items-center gap-6">
                    <span class="text-5xl md:text-6xl text-indigo-600">🎯</span> Mục tiêu bài học
                </h3>
                <ul class="list-disc list-inside text-indigo-800 space-y-6 font-bold text-2xl md:text-3xl leading-relaxed">
                    <li>Củng cố kỹ năng tính diện tích xung quanh và diện tích toàn phần.</li>
                    <li>Vận dụng linh hoạt vào các bài toán thực tế (bể cá, khuôn bánh).</li>
                    <li>Rèn luyện tư duy không gian và so sánh diện tích.</li>
                </ul>
            </div>

            <section class="space-y-12">
                <h4 class="text-4xl md:text-6xl font-black text-indigo-950 flex items-center gap-8 mb-16">
                    <span class="p-6 bg-indigo-600 text-white rounded-[32px] shadow-lg">⚠️</span>
                    GHI NHỚ QUY TẮC
                </h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="bg-blue-600 p-10 rounded-[56px] text-white shadow-2xl border-4 border-blue-400">
                        <p class="text-xl font-black uppercase opacity-60 mb-4">1. Diện tích xung quanh</p>
                        <p class="text-3xl md:text-4xl font-black leading-relaxed">
                            S<sub>xq</sub> = Chu vi đáy × Chiều cao
                        </p>
                    </div>

                    <div class="bg-emerald-600 p-10 rounded-[56px] text-white shadow-2xl border-4 border-emerald-400">
                        <p class="text-xl font-black uppercase opacity-60 mb-4">2. Diện tích toàn phần</p>
                        <p class="text-3xl md:text-4xl font-black leading-relaxed">
                            S<sub>tp</sub> = S<sub>xq</sub> + 2 × S<sub>đáy</sub>
                        </p>
                    </div>
                </div>

                <div class="bg-amber-100 p-10 rounded-[56px] border-4 border-amber-300">
                    <p class="text-amber-900 font-black text-2xl md:text-4xl italic text-center leading-relaxed">
                        "Lưu ý: Với các vật không nắp (như bể cá), ta chỉ cộng thêm diện tích 1 đáy khi tính diện tích toàn phần."
                    </p>
                </div>
            </section>
        </div>
    `,
    "practice": `
        <div class="space-y-24">
            <!-- Bài tập 1 -->
            <section class="animate-slide-up">
                <h4 class="text-3xl md:text-5xl font-black text-indigo-900 mb-12 flex items-center gap-6">
                    <span class="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg">1</span>
                    Tính diện tích xung quanh:
                </h4>
                
                <div class="bg-white p-10 md:p-14 rounded-[64px] border-4 border-indigo-100 shadow-2xl flex flex-col items-center gap-12 text-center">
                    <img src="hinh_anh/toan/toan_tap_2/119-b1.png" alt="Bài 1 Tiết 119" class="w-full max-w-4xl h-auto rounded-[48px] shadow-xl border-4 border-white">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                        <div class="space-y-6">
                            <p class="text-2xl font-black text-orange-600 uppercase">Hình a</p>
                            <div class="bg-orange-50 p-8 rounded-[40px] border-4 border-orange-200 flex items-center justify-center gap-6 box-shadow-2xl">
                                <input type="number" id="ans-119-1a" class="w-full text-5xl md:text-7xl font-black text-orange-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-3xl md:text-5xl font-black text-orange-600/30">cm²</span>
                            </div>
                        </div>
                        <div class="space-y-6">
                            <p class="text-2xl font-black text-cyan-600 uppercase">Hình b</p>
                            <div class="bg-cyan-50 p-8 rounded-[40px] border-4 border-cyan-200 flex items-center justify-center gap-6 box-shadow-2xl">
                                <input type="number" id="ans-119-1b" class="w-full text-5xl md:text-7xl font-black text-cyan-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-3xl md:text-5xl font-black text-cyan-600/30">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bài tập 2 -->
            <section class="animate-slide-up">
                <h4 class="text-3xl md:text-5xl font-black text-indigo-900 mb-12 flex items-center gap-6">
                    <span class="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg">2</span>
                    Tính diện tích kính bể cá (KHÔNG NẮP):
                </h4>
                
                <div class="bg-blue-900 p-10 md:p-16 rounded-[72px] shadow-3xl flex flex-col items-center gap-12">
                    <img src="hinh_anh/toan/toan_tap_2/119-b2.png" alt="Bài 2 Tiết 119" class="w-full max-w-5xl h-auto rounded-[56px] shadow-2xl border-4 border-blue-400/30">
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-white">
                        <div class="bg-white/10 p-8 rounded-[40px] border-2 border-white/20">
                            <p class="text-center font-black text-2xl mb-6">Bể a</p>
                            <div class="flex items-center gap-4 bg-white/5 p-6 rounded-[32px] border-2 border-white/10">
                                <input type="number" id="ans-119-2a" class="w-full text-4xl md:text-6xl font-black text-yellow-300 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-2xl font-black opacity-50">m²</span>
                            </div>
                        </div>
                        <div class="bg-white/10 p-8 rounded-[40px] border-2 border-white/20">
                            <p class="text-center font-black text-2xl mb-6">Bể b</p>
                            <div class="flex items-center gap-4 bg-white/5 p-6 rounded-[32px] border-2 border-white/10">
                                <input type="number" id="ans-119-2b" class="w-full text-4xl md:text-6xl font-black text-yellow-300 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-2xl font-black opacity-50">cm²</span>
                            </div>
                        </div>
                        <div class="bg-white/10 p-8 rounded-[40px] border-2 border-white/20">
                            <p class="text-center font-black text-2xl mb-6">Bể c</p>
                            <div class="flex items-center gap-4 bg-white/5 p-6 rounded-[32px] border-2 border-white/10">
                                <input type="number" id="ans-119-2c" class="w-full text-4xl md:text-6xl font-black text-yellow-300 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-2xl font-black opacity-50">dm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bài tập 3 -->
            <section class="animate-slide-up">
                <div class="bg-amber-600 p-12 md:p-16 rounded-[64px] text-white shadow-3xl relative overflow-hidden">
                    <h4 class="text-3xl md:text-5xl font-black mb-8 flex items-center gap-6">
                        <span class="w-16 h-16 bg-white text-amber-600 rounded-2xl flex items-center justify-center shadow-lg">3</span>
                        Đố vui: Làm khuôn bánh chưng
                    </h4>
                    
                    <div class="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
                        <img src="hinh_anh/toan/toan_tap_2/119-b3.png" alt="Bài 3 Tiết 119" class="w-full h-auto rounded-[48px] shadow-2xl border-4 border-amber-400">
                        <div class="space-y-8 bg-white/10 p-10 rounded-[48px] border-2 border-white/20 h-full flex flex-col justify-center">
                            <p class="text-2xl md:text-3xl leading-relaxed italic font-medium">
                                "Thanh gỗ dài 55cm có đủ để làm một chiếc khuôn vuông 16,5cm không?"
                            </p>
                            <div class="flex gap-6">
                                <button onclick="selectChoice119('3', 'CO')" id="btn-119-3-yes" class="flex-1 py-8 rounded-[32px] bg-white/20 border-4 border-white/30 text-3xl font-black hover:bg-emerald-500 transition-all uppercase">Có</button>
                                <button onclick="selectChoice119('3', 'KHONG')" id="btn-119-3-no" class="flex-1 py-8 rounded-[32px] bg-white/20 border-4 border-white/30 text-3xl font-black hover:bg-rose-500 transition-all uppercase">Không</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Bài tập 4 -->
            <section class="animate-slide-up pb-12">
                <h4 class="text-3xl md:text-5xl font-black text-indigo-900 mb-12 flex items-center gap-6">
                    <span class="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg">4</span>
                    So sánh các hình xếp (4 khối lập phương):
                </h4>
                
                <div class="bg-gray-100 p-10 md:p-14 rounded-[64px] shadow-inner flex flex-col items-center gap-12">
                    <img src="hinh_anh/toan/toan_tap_2/119-b4.png" alt="Bài 4 Tiết 119" class="w-full max-w-6xl h-auto rounded-[56px] shadow-2xl border-8 border-white">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
                        <div class="bg-white p-8 rounded-[48px] shadow-xl border-4 border-indigo-50">
                            <p class="text-xl font-black text-indigo-900 mb-6 uppercase tracking-wider">A. S<sub>xq</sub> lớn nhất?</p>
                            <div class="grid grid-cols-3 gap-4">
                                <button onclick="selectChoice119('4a', 'MAI')" id="btn-119-4a-MAI" class="py-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all">Mai</button>
                                <button onclick="selectChoice119('4a', 'VIET')" id="btn-119-4a-VIET" class="py-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all">Việt</button>
                                <button onclick="selectChoice119('4a', 'NAM')" id="btn-119-4a-NAM" class="py-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all">Nam</button>
                            </div>
                        </div>
                        <div class="bg-white p-8 rounded-[48px] shadow-xl border-4 border-indigo-50">
                            <p class="text-xl font-black text-indigo-900 mb-6 uppercase tracking-wider">B. S<sub>tp</sub> bé nhất?</p>
                            <div class="grid grid-cols-3 gap-4">
                                <button onclick="selectChoice119('4b', 'MAI')" id="btn-119-4b-MAI" class="py-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all">Mai</button>
                                <button onclick="selectChoice119('4b', 'VIET')" id="btn-119-4b-VIET" class="py-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all">Việt</button>
                                <button onclick="selectChoice119('4b', 'NAM')" id="btn-119-4b-NAM" class="py-6 rounded-3xl bg-indigo-50 border-2 border-indigo-200 font-bold text-xl hover:bg-indigo-600 hover:text-white transition-all">Nam</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Submit Button -->
            <div class="flex justify-center p-12">
                <button onclick="submit119()" id="submit-btn-119" class="group relative px-20 py-10 bg-indigo-600 text-white rounded-[40px] text-4xl font-black shadow-3xl hover:bg-indigo-700 active:scale-95 transition-all">
                    <span class="relative z-10 flex items-center gap-6">
                        🚀 NỘP BÀI
                    </span>
                    <div class="absolute inset-0 bg-white/20 rounded-[40px] blur-xl group-hover:blur-2xl transition-all"></div>
                </button>
            </div>
        </div>
        
        <script>
            var selected119 = { '3': null, '4a': null, '4b': null };
            
            function selectChoice119(q, val) {
                selected119[q] = val;
                
                // Clear state for this question
                if (q === '3') {
                    ['yes', 'no'].forEach(id => {
                        document.getElementById('btn-119-3-' + id).classList.remove('bg-emerald-600', 'bg-rose-600', 'text-white', 'border-transparent');
                    });
                    document.getElementById('btn-119-3-' + (val === 'CO' ? 'yes' : 'no')).classList.add('bg-' + (val === 'CO' ? 'emerald' : 'rose') + '-600', 'text-white', 'border-transparent');
                } else {
                    ['MAI', 'VIET', 'NAM'].forEach(v => {
                        document.getElementById('btn-119-' + q + '-' + v).classList.remove('bg-indigo-600', 'text-white', 'border-transparent');
                    });
                    document.getElementById('btn-119-' + q + '-' + val).classList.add('bg-indigo-600', 'text-white', 'border-transparent');
                }
            }

            function submit119() {
                const btn = document.getElementById('submit-btn-119');
                btn.disabled = true;
                btn.innerHTML = '⌛ ĐANG CHẤM...';

                let score = 0;
                let feedback = "";

                // Grading 1
                const a1a = document.getElementById('ans-119-1a').value;
                const a1b = document.getElementById('ans-119-1b').value;
                if (a1a == 126) score += 20; // (3+4)*2*9 = 126
                if (a1b == 126) score += 20; // (5+4)*2*7 = 126

                // Grading 2 (Diện tích kính = Sxq + 1 đáy)
                const a2a = document.getElementById('ans-119-2a').value; // (2+1)*2*1 + 2*1 = 6 + 2 = 8
                const a2b = document.getElementById('ans-119-2b').value; // (200+100)*2*200 + 200*100 = 120000 + 20000 = 140000
                const a2c = document.getElementById('ans-119-2c').value; // (15+4)*2*5 + 15*4 = 190 + 60 = 250
                if (a2a == 8) score += 10;
                if (a2b == 140000) score += 10;
                if (a2c == 250) score += 10;

                // Grading 3
                if (selected119['3'] === 'KHONG') score += 10;

                // Grading 4
                // Mai: 1x1x4. Việt: 4x1x1. Nam: 2x2x1.
                // Sxq: Mai=(1+1)*2*4=16. Việt=(4+1)*2*1=10. Nam=(2+2)*2*1=8. -> Mai max.
                // Stp: Mai=16+2=18. Việt=10+8=18. Nam=8+8=16. -> Nam min.
                if (selected119['4a'] === 'MAI') score += 10;
                if (selected119['4b'] === 'NAM') score += 10;

                if (score === 100) {
                    feedback = "TUYỆT VỜI! 🥳 Bạn đã hoàn thành xuất sắc bài luyện tập!";
                } else if (score >= 70) {
                    feedback = "RẤT TỐT! 😊 Bạn gần như đã làm đúng hết rồi!";
                } else {
                    feedback = "CỐ GẮNG LÊN! 💪 Hãy kiểm tra kỹ lại các phép tính nhé!";
                }

                alert(feedback + " (Điểm của bạn: " + score + "/100)");
                window.submitMathLesson(score);
                btn.disabled = false;
                btn.innerHTML = '🚀 NỘP BÀI';
            }
        </script>
    `,
    "quizPool": []
};
