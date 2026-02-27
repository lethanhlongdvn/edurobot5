export const lesson115 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "115",
    "title": "HÌNH KHAI TRIỂN CỦA HÌNH KHỐI",
    "desc": "Bài 49: Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ (Trang 41).",
    "content": `
        <div class="space-y-4 md:space-y-6">
            <div class="bg-gradient-to-r from-orange-500 to-red-600 p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <!-- Background decoration -->
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
                <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl mix-blend-overlay"></div>
                
                <div class="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border-[8px] border-white/20 shrink-0 relative z-10 animate-bounce-short">
                    <span class="text-6xl md:text-8xl">📦</span>
                </div>
                
                <div class="relative z-10 text-center md:text-left flex-grow">
                    <div class="inline-block px-4 py-1.5 bg-orange-500/50 backdrop-blur-md rounded-full text-white font-bold uppercase tracking-widest text-xs md:text-sm border border-orange-300/50 mb-4">Chủ đề 9 - Bài 49 (Tiết 115)</div>
                    <h3 class="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">Hình Khai Triển<br>Trang 41</h3>
                    <p class="text-orange-100 font-medium text-base md:text-xl leading-relaxed max-w-2xl">
                        Hình khai triển của một hình khối là hình có thể gấp lại để được hình khối đó. Cùng EduRobot làm lồng đèn nhé!
                    </p>
                    <button onclick="router.switchTab('practice')" class="mt-8 bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-orange-900/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto md:mx-0 group">
                        Bắt đầu ngay
                        <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-12">
            <!-- HEADER -->
            <div class="bg-orange-50 p-6 md:p-8 rounded-[40px] border-4 border-orange-200">
                <div class="inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3 rounded-full font-black text-lg md:text-xl uppercase tracking-widest mb-8 shadow-md">
                    <span class="text-2xl">✨</span> Khám Phá & Luyện Tập (Trang 42, 43)
                </div>

                <div class="space-y-8">
                    <!-- Bài 1: Ghép hình -->
                    <div class="p-6 md:p-8 bg-white rounded-[32px] shadow-sm border border-gray-100">
                        <p class="font-black text-lg md:text-xl mb-6 text-orange-600 flex items-center gap-3">
                            <span class="w-10 h-10 bg-orange-100 border-2 border-orange-300 rounded-xl flex items-center justify-center font-black text-orange-700 shrink-0">1</span>
                            Tìm miếng bìa là hình khai triển thích hợp với mỗi chiếc đèn lồng.
                        </p>
                        
                        <div class="flex justify-center mb-8">
                            <img src="hinh_anh/115-b1.png" alt="Tìm miếng bìa ghép lồng đèn" class="max-w-full rounded-2xl drop-shadow-lg" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%23fb923c\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\\'/></svg>'">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <!-- Đèn 1 -->
                            <div class="bg-yellow-50 p-6 rounded-[24px] border-2 border-yellow-200 text-center group hover:bg-yellow-100 transition-colors">
                                <span class="text-5xl block mb-4 group-hover:scale-110 transition-transform">🟨</span>
                                <p class="font-bold text-gray-700 mb-4 h-12">Đèn hộp vuông (Hình lập phương)</p>
                                <select id="b115-1-1" class="w-full bg-white border-2 border-yellow-400 p-3 rounded-xl font-bold text-gray-800 outline-none focus:ring-4 ring-yellow-200" onchange="checkB115B1()">
                                    <option value="">-- Chọn hình khai triển --</option>
                                    <option value="A">Hình A</option>
                                    <option value="B">Hình B</option>
                                    <option value="C">Hình C</option>
                                </select>
                            </div>
                            
                            <!-- Đèn 2 -->
                            <div class="bg-blue-50 p-6 rounded-[24px] border-2 border-blue-200 text-center group hover:bg-blue-100 transition-colors">
                                <span class="text-5xl block mb-4 group-hover:scale-110 transition-transform">🔵</span>
                                <p class="font-bold text-gray-700 mb-4 h-12">Đèn hình trụ (Màu xanh)</p>
                                <select id="b115-1-2" class="w-full bg-white border-2 border-blue-400 p-3 rounded-xl font-bold text-gray-800 outline-none focus:ring-4 ring-blue-200" onchange="checkB115B1()">
                                    <option value="">-- Chọn hình khai triển --</option>
                                    <option value="A">Hình A</option>
                                    <option value="B">Hình B</option>
                                    <option value="C">Hình C</option>
                                </select>
                            </div>

                            <!-- Đèn 3 -->
                            <div class="bg-green-50 p-6 rounded-[24px] border-2 border-green-200 text-center group hover:bg-green-100 transition-colors">
                                <span class="text-5xl block mb-4 group-hover:scale-110 transition-transform">🟩</span>
                                <p class="font-bold text-gray-700 mb-4 h-12">Đèn hộp chữ nhật (Màu xanh lá)</p>
                                <select id="b115-1-3" class="w-full bg-white border-2 border-green-400 p-3 rounded-xl font-bold text-gray-800 outline-none focus:ring-4 ring-green-200" onchange="checkB115B1()">
                                    <option value="">-- Chọn hình khai triển --</option>
                                    <option value="A">Hình A</option>
                                    <option value="B">Hình B</option>
                                    <option value="C">Hình C</option>
                                </select>
                            </div>
                        </div>

                        <div id="fb-b115-1" class="hidden mt-6 text-center font-bold text-lg px-6 py-4 rounded-xl border-2"></div>

                        <script>
                            window.checkB115B1 = function() {
                                const v1 = document.getElementById('b115-1-1').value;
                                const v2 = document.getElementById('b115-1-2').value;
                                const v3 = document.getElementById('b115-1-3').value;
                                const fb = document.getElementById('fb-b115-1');

                                if (!v1 || !v2 || !v3) {
                                    fb.classList.add('hidden');
                                    return;
                                }

                                fb.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-700', 'border-emerald-300', 'bg-red-100', 'text-red-700', 'border-red-300');
                                
                                if (v1 === 'B' && v2 === 'C' && v3 === 'A') {
                                    fb.classList.add('bg-emerald-100', 'text-emerald-700', 'border-emerald-300');
                                    fb.innerHTML = '🎉 Chính xác cực kỳ! Đèn vuông ghép với Hình B (khối lập phương). Đèn tròn ghép với Hình C (khối trụ). Đèn dài ghép Hình A (hộp chữ nhật) nhé!';
                                } else {
                                    fb.classList.add('bg-red-100', 'text-red-700', 'border-red-300');
                                    fb.innerHTML = '🤔 Chưa khớp rồi rứa ơi. Khối lập phương có các mặt vuông bằng nhau. Khối trụ có 2 hình tròn... Chọn lại xem sao!';
                                }
                            };
                        </script>
                    </div>

                    <!-- Bài 2: Rô bốt làm lồng đèn cá -->
                    <div class="p-6 md:p-8 bg-white rounded-[32px] shadow-sm border border-gray-100">
                        <p class="font-black text-lg md:text-xl mb-6 text-orange-600 flex items-center gap-3">
                            <span class="w-10 h-10 bg-orange-100 border-2 border-orange-300 rounded-xl flex items-center justify-center font-black text-orange-700 shrink-0">2</span>
                            Chọn câu trả lời đúng. Rô-bốt dùng miếng bìa nào dưới đây để làm chiếc đèn hình con cá?
                        </p>
                        
                        <div class="flex flex-col lg:flex-row gap-8 items-center">
                            <div class="w-full lg:w-1/3 flex justify-center bg-orange-50 p-6 rounded-3xl border border-orange-200">
                                <img src="hinh_anh/115-b2.png" alt="Đèn lồng hình cá" class="max-w-full drop-shadow-xl" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%23f97316\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z\\'/></svg>'">
                            </div>

                            <div class="w-full lg:w-2/3 grid grid-cols-2 gap-4">
                                <!-- Options -->
                                <button onclick="checkB115B2(this, 'A')" class="b115-2-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-orange-400 rounded-2xl flex flex-col items-center transition-all">
                                    <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 text-orange-600 font-black flex items-center justify-center group-hover:bg-orange-100">A</span>
                                    <div class="h-32 flex items-center mt-6">
                                        <div class="grid grid-cols-2 gap-0.5">
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div>
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div>
                                            <div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div>
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div>
                                            <div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div>
                                        </div>
                                    </div>
                                    <span class="mt-2 text-sm text-gray-500">(Hình A - Trùng nắp)</span>
                                </button>
                                
                                <button onclick="checkB115B2(this, 'B')" class="b115-2-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-orange-400 rounded-2xl flex flex-col items-center transition-all">
                                    <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 text-orange-600 font-black flex items-center justify-center group-hover:bg-orange-100">B</span>
                                    <div class="h-32 flex items-center mt-6">
                                        <div class="grid grid-cols-3 gap-0.5">
                                            <div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div>
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div>
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div>
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div>
                                        </div>
                                    </div>
                                    <span class="mt-2 text-sm text-gray-500">(Hình B - Thừa/thiếu mặt)</span>
                                </button>

                                <button onclick="checkB115B2(this, 'C')" class="b115-2-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-orange-400 rounded-2xl flex flex-col items-center transition-all">
                                    <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 text-orange-600 font-black flex items-center justify-center group-hover:bg-orange-100">C</span>
                                    <div class="h-32 flex items-center justify-center mt-6 w-full">
                                        <!-- Khai triển đúng: 1-4-1 (chữ thập) -->
                                        <div class="grid grid-cols-3 gap-0.5">
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-emerald-300 border-2 border-emerald-600"></div><div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div>
                                            <div class="w-6 h-6 bg-emerald-300 border-2 border-emerald-600"></div><div class="w-6 h-6 bg-emerald-300 border-2 border-emerald-600"></div><div class="w-6 h-6 bg-emerald-300 border-2 border-emerald-600"></div>
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-emerald-300 border-2 border-emerald-600"></div><div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div>
                                            <div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div><div class="w-6 h-6 bg-emerald-300 border-2 border-emerald-600"></div><div class="w-6 h-6 border-2 border-gray-400 opacity-0"></div>
                                        </div>
                                    </div>
                                    <span class="mt-2 text-sm text-gray-500">(Hình chữ thập, 6 ô vuông)</span>
                                </button>

                                <button onclick="checkB115B2(this, 'D')" class="b115-2-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-orange-400 rounded-2xl flex flex-col items-center transition-all">
                                    <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 text-orange-600 font-black flex items-center justify-center group-hover:bg-orange-100">D</span>
                                    <div class="h-32 flex items-center mt-6">
                                        <div class="grid grid-cols-1 gap-0.5">
                                            <div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div><div class="w-6 h-6 bg-orange-200 border-2 border-orange-500"></div>
                                        </div>
                                    </div>
                                    <span class="mt-2 text-sm text-gray-500">(Chỉ có 5 ô, xếp dọc)</span>
                                </button>
                            </div>
                        </div>

                        <div id="fb-b115-2" class="hidden mt-6 text-center font-bold text-lg px-6 py-4 rounded-xl border-2"></div>

                        <script>
                            window.b115_b2_ans = "";
                            window.checkB115B2 = function(btn, ans) {
                                window.b115_b2_ans = ans;
                                const opts = document.querySelectorAll('.b115-2-opt');
                                opts.forEach(o => {
                                    o.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-red-500', 'bg-red-50');
                                    o.classList.add('border-gray-100', 'bg-white');
                                });

                                const fb = document.getElementById('fb-b115-2');
                                fb.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-700', 'border-emerald-300', 'bg-red-100', 'text-red-700', 'border-red-300');

                                if (ans === 'C') {
                                    btn.classList.add('border-emerald-500', 'bg-emerald-50');
                                    btn.classList.remove('border-gray-100', 'bg-white');
                                    fb.classList.add('bg-emerald-100', 'text-emerald-700', 'border-emerald-300');
                                    fb.innerHTML = '🎉 Rất xuất sắc! Hình C là hình khai triển đúng chuẩn của hình lập phương (khối cá) vì có đủ 6 ô vuông và có thể gấp vừa khít mảng đáy-nắp.';
                                } else {
                                    btn.classList.add('border-red-500', 'bg-red-50');
                                    btn.classList.remove('border-gray-100', 'bg-white');
                                    fb.classList.add('bg-red-100', 'text-red-700', 'border-red-300');
                                    fb.innerHTML = '🤔 Chưa đúng rồi. Để gấp được hộp vuông kín cần 6 mặt (4 mặt bao quanh và 2 nắp úp đối diện nhau). Hãy tìm hình trải ra dạng chữ thập nhé!';
                                }
                            };
                        </script>
                    </div>

                    <!-- Bài 3: Khai triển khối trụ -->
                    <div class="p-6 md:p-8 bg-white rounded-[32px] shadow-sm border border-gray-100">
                        <p class="font-black text-lg md:text-xl mb-6 text-orange-600 flex items-center gap-3">
                            <span class="w-10 h-10 bg-orange-100 border-2 border-orange-300 rounded-xl flex items-center justify-center font-black text-orange-700 shrink-0">3</span>
                            Chọn câu trả lời đúng. Hình nào dưới đây là hình khai triển của hình trụ?
                        </p>
                        
                        <div class="flex flex-col lg:flex-row gap-8 items-center">
                            <div class="w-full lg:w-1/3 flex justify-center bg-blue-50 p-6 rounded-3xl border border-blue-200">
                                <img src="hinh_anh/115-b3.png" alt="Khai triển trụ" class="max-w-full drop-shadow-xl" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%233b82f6\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10\\'/></svg>'">
                            </div>

                            <div class="w-full lg:w-2/3 grid grid-cols-2 gap-4">
                                <button onclick="checkB115B3(this, 'A')" class="b115-3-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-blue-400 rounded-2xl flex justify-center items-center transition-all h-32">
                                    <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 text-blue-600 font-black flex items-center justify-center group-hover:bg-blue-100">A</span>
                                    <span class="font-bold text-gray-500 text-sm mt-4">2 hình tròn cùng bên trên</span>
                                </button>
                                
                                <button onclick="checkB115B3(this, 'B')" class="b115-3-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-blue-400 rounded-2xl flex justify-center items-center transition-all h-32">
                                    <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 text-blue-600 font-black flex items-center justify-center group-hover:bg-blue-100">B</span>
                                    <span class="font-bold text-gray-500 text-sm mt-4">Có mỗi 1 hình tròn (1 đáy)</span>
                                </button>

                                <button onclick="checkB115B3(this, 'C')" class="b115-3-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-blue-400 rounded-2xl flex justify-center items-center transition-all h-32">
                                    <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 text-blue-600 font-black flex items-center justify-center group-hover:bg-blue-100">C</span>
                                    <span class="font-bold text-emerald-600 text-base mt-4">2 hình tròn đối xứng nhau<br>(Chính xác)</span>
                                </button>

                                <button onclick="checkB115B3(this, 'D')" class="b115-3-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-blue-400 rounded-2xl flex justify-center items-center transition-all h-32">
                                    <span class="absolute top-4 left-4 w-8 h-8 rounded-full bg-gray-100 text-blue-600 font-black flex items-center justify-center group-hover:bg-blue-100">D</span>
                                    <span class="font-bold text-gray-500 text-sm mt-4">1 hình tròn trên, 1 bên hông</span>
                                </button>
                            </div>
                        </div>

                        <div id="fb-b115-3" class="hidden mt-6 text-center font-bold text-lg px-6 py-4 rounded-xl border-2"></div>

                        <script>
                            window.b115_b3_ans = "";
                            window.checkB115B3 = function(btn, ans) {
                                window.b115_b3_ans = ans;
                                const opts = document.querySelectorAll('.b115-3-opt');
                                opts.forEach(o => {
                                    o.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-red-500', 'bg-red-50');
                                    o.classList.add('border-gray-100', 'bg-white');
                                });

                                const fb = document.getElementById('fb-b115-3');
                                fb.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-700', 'border-emerald-300', 'bg-red-100', 'text-red-700', 'border-red-300');

                                if (ans === 'C') {
                                    btn.classList.add('border-emerald-500', 'bg-emerald-50');
                                    btn.classList.remove('border-gray-100', 'bg-white');
                                    fb.classList.add('bg-emerald-100', 'text-emerald-700', 'border-emerald-300');
                                    fb.innerHTML = '🎉 Quá đỉnh! Hình C có 1 mảnh thân hộp chữ nhật bao tròn, và 2 nắp tròn nằm đối lập nhau (trên-dưới).';
                                } else {
                                    btn.classList.add('border-red-500', 'bg-red-50');
                                    btn.classList.remove('border-gray-100', 'bg-white');
                                    fb.classList.add('bg-red-100', 'text-red-700', 'border-red-300');
                                    fb.innerHTML = '🤔 Không ổn rồi! Khối trụ (như hộp sữa bò) phải có 2 đáy tròn đậy kín ở 2 đầu khác nhau. Cuộn lại xem bị cấn chỗ nào không nhé?';
                                }
                            };
                        </script>
                    </div>

                    <!-- Bài 4: Chắp bìa màu -->
                    <div class="p-6 md:p-8 bg-white rounded-[32px] shadow-sm border border-gray-100">
                        <p class="font-black text-lg md:text-xl mb-6 text-orange-600 flex items-center gap-3">
                            <span class="w-10 h-10 bg-orange-100 border-2 border-orange-300 rounded-xl flex items-center justify-center font-black text-orange-700 shrink-0">4</span>
                            Rô-bốt có tấm bìa như hình. Rô-bốt có thể gấp được hình nào dưới đây?
                        </p>
                        
                        <div class="flex flex-col mb-8 items-center bg-gray-50 rounded-3xl border border-gray-200 p-8 shadow-inner">
                            <img src="hinh_anh/115-b4.png" alt="Khối màu" class="max-w-full drop-shadow-md rounded-xl" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%236b7280\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z\\'/></svg>'">
                            <p class="mt-4 text-center font-bold text-gray-500">Gợi ý: Quét mắt tìm 2 mặt ĐỐI DIỆN nhau thì KHÔNG THỂ hiển thị cùng lúc ở 1 góc nhìn có 3 mặt nhé!</p>
                        </div>

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <!-- Đáp án D đúng: Đỏ, Xanh Lam, Xanh Lá -->
                            <button onclick="checkB115B4(this, 'A')" class="b115-4-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-orange-400 rounded-2xl flex flex-col items-center transition-all py-8">
                                <span class="absolute top-2 left-2 w-8 h-8 rounded-full bg-gray-100 text-orange-600 font-black flex items-center justify-center group-hover:bg-orange-100">A</span>
                                <span class="font-bold text-gray-700 mt-4 text-center">Hiển thị:<br>Đỏ, Đỏ..(?)</span>
                            </button>
                            <button onclick="checkB115B4(this, 'B')" class="b115-4-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-orange-400 rounded-2xl flex flex-col items-center transition-all py-8">
                                <span class="absolute top-2 left-2 w-8 h-8 rounded-full bg-gray-100 text-orange-600 font-black flex items-center justify-center group-hover:bg-orange-100">B</span>
                                <span class="font-bold text-gray-700 mt-4 text-center">Có 2 mặt Xanh Lá?</span>
                            </button>
                            <button onclick="checkB115B4(this, 'C')" class="b115-4-opt group relative p-4 bg-white border-4 border-gray-100 hover:border-orange-400 rounded-2xl flex flex-col items-center transition-all py-8">
                                <span class="absolute top-2 left-2 w-8 h-8 rounded-full bg-gray-100 text-orange-600 font-black flex items-center justify-center group-hover:bg-orange-100">C</span>
                                <span class="font-bold text-gray-700 mt-4 text-center">Có 2 mặt Xanh Dương?</span>
                            </button>
                            <button onclick="checkB115B4(this, 'D')" class="b115-4-opt group relative p-4 bg-white border-4 border-emerald-400 rounded-2xl flex flex-col items-center transition-all py-8" id="btn-4-D">
                                <span class="absolute top-2 left-2 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 font-black flex items-center justify-center group-hover:bg-emerald-200">D</span>
                                <span class="font-bold text-emerald-700 mt-4 text-center">Đỏ, Lam, Xanh lá<br>(Mỗi màu 1 mặt)</span>
                            </button>
                        </div>
                        
                        <div id="fb-b115-4" class="hidden mt-6 text-center font-bold text-lg px-6 py-4 rounded-xl border-2"></div>

                        <!-- Mặc định chọn D logic -->
                        <script>
                            window.b115_b4_ans = "";
                            window.checkB115B4 = function(btn, ans) {
                                window.b115_b4_ans = ans;
                                const opts = document.querySelectorAll('.b115-4-opt');
                                opts.forEach(o => {
                                    o.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-red-500', 'bg-red-50');
                                    o.classList.add('border-gray-100', 'bg-white');
                                });

                                const fb = document.getElementById('fb-b115-4');
                                fb.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-700', 'border-emerald-300', 'bg-red-100', 'text-red-700', 'border-red-300');

                                if (ans === 'D') {
                                    btn.classList.add('border-emerald-500', 'bg-emerald-50');
                                    btn.classList.remove('border-gray-100', 'bg-white');
                                    fb.classList.add('bg-emerald-100', 'text-emerald-700', 'border-emerald-300');
                                    fb.innerHTML = '🎉 Chuẩn không cần chỉnh! Hình D thể hiện 3 mặt: Đỏ, Xanh Dương và Xanh Lá. Đây là 3 mặt gặp nhau ở một đỉnh - hoàn toàn hợp lệ vì không có 2 màu nào ở cùng phía đối lập.';
                                } else {
                                    btn.classList.add('border-red-500', 'bg-red-50');
                                    btn.classList.remove('border-gray-100', 'bg-white');
                                    fb.classList.add('bg-red-100', 'text-red-700', 'border-red-300');
                                    fb.innerHTML = '🤔 Ở hình chưa gấp, 2 hình chữ nhật Đỏ/Xanh Lam nằm cách nhau 1 xen kẽ -> nên chúng sẽ đối diện/úp lưng vào nhau, không thể cùng lọt thỏm vào góc nhìn được đâu nhé! Hãy chọn D!';
                                }
                            };
                        </script>

                    </div>
                </div>
            </div>

            <!-- Tổng kết Nộp -->
            <div class="mt-12 bg-gray-900 p-8 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <div class="relative z-10 text-center md:text-left">
                    <h3 class="text-white font-black text-2xl md:text-3xl mb-2">Lời giải & Nộp bài?</h3>
                    <p class="text-gray-400 font-bold">Lưu lại bài làm của Tiết 115 (Hình học không gian) để Thầy Cô xem lại nhé!</p>
                </div>
                <button onclick="submitAllPractice115()" class="relative z-10 w-full md:w-auto bg-orange-600 text-white hover:bg-orange-500 px-8 py-5 rounded-3xl font-black text-lg uppercase shadow-xl hover:-translate-y-1 transition-transform active:scale-95 flex items-center justify-center gap-2">
                    NỘP BÀI
                </button>
            </div>
            
            <script>
                window.submitAllPractice115 = function () {
                    const b1_1 = document.getElementById('b115-1-1')?.value || "Chưa làm";
                    const b1_2 = document.getElementById('b115-1-2')?.value || "Chưa làm";
                    const b1_3 = document.getElementById('b115-1-3')?.value || "Chưa làm";

                    let b2_ans = window.b115_b2_ans || "Chưa làm";
                    let b3_ans = window.b115_b3_ans || "Chưa làm";
                    let b4_ans = window.b115_b4_ans || "Chưa làm";
                    
                    const fullContent = \`
BÀI 49 - HÌNH KHAI TRIỂN KHỐI (Tiết 115)
=====================================
Bài 1 (Trang 41):
- Đèn hộp vuông chọn: \${b1_1}
- Đèn hình trụ chọn: \${b1_2}
- Đèn hộp chữ nhật chọn: \${b1_3}

Bài 2: Đèn hình cá chọn: \${b2_ans}
Bài 3: Khai triển Trụ chọn: \${b3_ans}
Bài 4: Gấp khối D chọn: \${b4_ans}
=====================================
\`;
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson(fullContent, "KT Hình Không Gian 115", "Nộp Tiết 115");
                    } else {
                        alert("Hệ thống nộp bài cục bộ đã ghi nhận!");
                    }
                };
            </script>
        </div>
    `,
    "quizPool": []
};
