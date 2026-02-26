export const lesson114 = {\n    "topic": "Hình học và Đo lường",\n    "week": "23",\n    "period": "114",\n    "title": "LUYỆN TẬP CHUNG (Tiết 2)",\n    "desc": "Bài 48: Luyện tập giải các bài toán thực tế về thể tích (Trang 39).",\n    "content": `        <div class="space-y-4 md:space-y-6">
            <div class="bg-gradient-to-r from-emerald-600 to-teal-700 p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <!-- Background decoration -->
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
                <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl mix-blend-overlay"></div>
                
                <div class="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border-[8px] border-white/20 shrink-0 relative z-10 animate-bounce-short">
                    <span class="text-6xl md:text-8xl">🎯</span>
                </div>
                
                <div class="relative z-10 text-center md:text-left flex-grow">
                    <div class="inline-block px-4 py-1.5 bg-emerald-500/30 backdrop-blur-md rounded-full text-emerald-100 font-bold uppercase tracking-widest text-xs md:text-sm border border-emerald-400/30 mb-4">Bài 48 (Tiết 114)</div>
                    <h3 class="text-white font-black text-3xl md:text-5xl mb-4 leading-tight">Luyện tập chung<br>Trang 39</h3>
                    <p class="text-emerald-100 font-medium text-base md:text-xl leading-relaxed max-w-2xl">
                        Cùng EduRobot giải các bài toán thực tế về thể tích vô cùng thú vị nhé!
                    </p>
                    <button onclick="router.switchTab('practice')" class="mt-8 bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-emerald-900/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto md:mx-0 group">
                        Bắt đầu ngay
                        <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </div>
        </div>`,\n    "practice": `        <div class="space-y-12">
            <!-- ====== PHẦN 2: TIẾT 114 (Trang 39) ====== --> -->
            <div class="bg-emerald-50/50 p-6 md:p-8 rounded-[40px] border-4 border-emerald-100 mt-12">
                <div class="inline-flex items-center gap-3 bg-emerald-600 text-white px-6 py-3 rounded-full font-black text-lg md:text-xl uppercase tracking-widest mb-8 shadow-md">
                    <span class="text-2xl">2️⃣</span> Luyện Tập (Trang 39)
                </div>

                <div class="space-y-8">
                    <!-- Bài 1: Khối lượng xếp lớn nhất -->
                    <div class="p-6 md:p-8 bg-white rounded-[32px] shadow-sm border border-gray-100">
                        <p class="font-black text-lg md:text-xl mb-4 text-emerald-700 flex items-center gap-3">
                            <span class="w-10 h-10 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex items-center justify-center font-black text-emerald-800 shrink-0">1</span>
                            Chọn câu trả lời đúng.
                        </p>
                        <p class="text-xl font-medium text-gray-800 mb-8 border-l-4 border-emerald-300 pl-4">Mỗi hình dưới đây được xếp từ các hình lập phương <strong class="text-pink-600">1 cm³</strong>. Hỏi hình nào dưới đây có thể tích lớn nhất?</p>

                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-center font-sans tracking-wide">
                            <button onclick="checkB114B1(this, 'A')" class="b114-1-opt bg-white border-2 border-gray-200 p-4 rounded-3xl hover:border-emerald-400 hover:shadow-lg transition-all group pt-6">
                                <img src="hinh_anh/114-b1-A.png" class="h-28 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform" alt="Hình A">
                                <span class="font-black text-3xl text-gray-300 group-hover:text-emerald-400 transition-colors">A</span>
                            </button>
                            <button onclick="checkB114B1(this, 'B')" class="b114-1-opt bg-white border-2 border-gray-200 p-4 rounded-3xl hover:border-emerald-400 hover:shadow-lg transition-all group pt-6">
                                <img src="hinh_anh/114-b1-B.png" class="h-28 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform" alt="Hình B">
                                <span class="font-black text-3xl text-gray-300 group-hover:text-emerald-400 transition-colors">B</span>
                            </button>
                            <button onclick="checkB114B1(this, 'C')" class="b114-1-opt bg-white border-2 border-gray-200 p-4 rounded-3xl hover:border-emerald-400 hover:shadow-lg transition-all group pt-6">
                                <img src="hinh_anh/114-b1-C.png" class="h-28 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform" alt="Hình C">
                                <span class="font-black text-3xl text-gray-300 group-hover:text-emerald-400 transition-colors">C</span>
                            </button>
                            <button onclick="checkB114B1(this, 'D')" class="b114-1-opt bg-white border-2 border-gray-200 p-4 rounded-3xl hover:border-emerald-400 hover:shadow-lg transition-all group pt-6">
                                <img src="hinh_anh/114-b1-D.png" class="h-28 mx-auto mb-4 object-contain group-hover:scale-110 transition-transform" alt="Hình D">
                                <span class="font-black text-3xl text-gray-300 group-hover:text-emerald-400 transition-colors">D</span>
                            </button>
                        </div>
                        <div id="fb-b114-1" class="hidden text-center text-lg font-bold px-6 py-4 rounded-2xl animate-fade-in border-2"></div>

                        <script>
                            window.checkB114B1 = function(btn, ans) {
                                const opts = document.querySelectorAll('.b114-1-opt');
                                opts.forEach(o => {
                                    o.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-red-400', 'bg-red-50', 'scale-105', 'shadow-xl');
                                    o.querySelector('span').classList.remove('!text-emerald-600', '!text-red-500');
                                    o.classList.add('border-gray-200', 'bg-white');
                                });

                                const fb = document.getElementById('fb-b114-1');
                                fb.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-800', 'border-emerald-300', 'bg-red-50', 'text-red-700', 'border-red-200');

                                // Tính toán: A: 3x3x2 = 18. B: 3x3x3 = 27. C: (1 cột 4 + 2 cột 3) ... (đếm theo mắt là B 27 hộp lớn nhất). D là 4x2x2 = 16
                                if (ans === 'B') {
                                    btn.classList.add('border-emerald-500', 'bg-emerald-50', 'scale-105', 'shadow-xl');
                                    btn.classList.remove('border-gray-200', 'bg-white');
                                    btn.querySelector('span').classList.add('!text-emerald-600');
                                    
                                    fb.classList.add('bg-emerald-100', 'text-emerald-800', 'border-emerald-300');
                                    fb.innerHTML = '🎉 <b>Hình B</b> xuất sắc! Hình B là khối lập phương 3x3x3 có tổng cộng 27 ô lập phương nhỏ, nhiều nhất trong 4 hình nhé!';
                                } else {
                                    btn.classList.add('border-red-400', 'bg-red-50');
                                    btn.classList.remove('border-gray-200', 'bg-white');
                                    btn.querySelector('span').classList.add('!text-red-500');

                                    fb.classList.add('bg-red-50', 'text-red-700', 'border-red-200');
                                    fb.innerHTML = '🤔 Bạn đếm lại thật kĩ số hình lập phương nhỏ của hình ' + ans + ' và hình B xem sao nhé. Hình B trông kín khối hơn đấy!';
                                }
                            };
                        </script>
                    </div>

                    <!-- Bài 2: Bài toán đố nước sinh hoạt -->
                    <div class="p-6 md:p-8 bg-white rounded-[32px] shadow-sm border border-gray-100 relative overflow-hidden">
                        <div class="absolute -right-10 top-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
                        <p class="font-black text-lg md:text-xl mb-4 text-emerald-700 flex items-center gap-3 relative z-10">
                            <span class="w-10 h-10 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex items-center justify-center font-black text-emerald-800 shrink-0">2</span>
                            Số?
                        </p>
                        
                        <div class="text-xl leading-relaxed text-gray-800 font-medium mb-6 relative z-10 p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                            Trong cả năm 2022, nhà Nam đã sử dụng <strong class="text-blue-700 bg-white px-2 py-0.5 rounded shadow-sm">174 m³</strong> nước sinh hoạt. Vậy trung bình mỗi tháng, nhà Nam dùng hết 
                            <input type="text" id="b114-2-ans" class="w-24 inline-block text-center mx-2 font-black text-blue-800 border-2 border-blue-300 bg-white rounded-xl py-1 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 shadow-inner" placeholder="?"> 
                            m³ nước sinh hoạt.
                        </div>

                        <div class="flex items-center gap-4 relative z-10">
                            <button onclick="checkB114B2()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-black text-sm shadow-md transition-all active:scale-95 flex items-center gap-2">
                                Nộp đáp án <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </button>
                            <div id="fb-b114-2" class="hidden font-bold text-sm px-4 py-3 rounded-xl border-l-4"></div>
                        </div>

                        <script>
                            window.checkB114B2 = function() {
                                const input = document.getElementById('b114-2-ans');
                                const fb = document.getElementById('fb-b114-2');
                                const val = input.value.trim().replace(/,/g, '.');

                                fb.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-700', 'border-emerald-500', 'bg-red-50', 'text-red-700', 'border-red-500');
                                
                                if (!val) return;

                                // Lời giải: 1 năm có 12 tháng. 174 / 12 = 14,5 m3.
                                if (val === '14.5') {
                                    fb.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-500');
                                    fb.innerHTML = 'Thật tuyệt! Tính trung bình: 174 : 12 = 14,5 m³.';
                                    input.classList.remove('border-blue-300', 'border-red-500', 'text-red-700');
                                    input.classList.add('border-emerald-500', 'bg-emerald-100', 'text-emerald-800');
                                } else {
                                    fb.classList.add('bg-red-50', 'text-red-700', 'border-red-500');
                                    fb.innerHTML = 'Một năm có 12 tháng. Bạn hãy thử đặt tính <code>174 : 12</code> ra nháp xem sao nhé!';
                                    input.classList.remove('border-blue-300', 'border-emerald-500');
                                    input.classList.add('border-red-500', 'text-red-700', 'bg-red-50');
                                }
                            };
                        </script>
                    </div>

                    <!-- Bài 3: Hộp màu xanh đỏ vàng -->
                    <div class="p-6 md:p-8 bg-white rounded-[32px] shadow-sm border border-gray-100">
                        <p class="font-black text-lg md:text-xl mb-4 text-emerald-700 flex items-center gap-3">
                            <span class="w-10 h-10 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex items-center justify-center font-black text-emerald-800 shrink-0">3</span>
                            So sánh thể tích.
                        </p>
                        <p class="text-lg md:text-xl leading-relaxed text-gray-800 mb-6 bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100">
                            Rô-bốt có 3 hộp màu xanh, đỏ và vàng. Thể tích của các hộp là: <strong>25 cm³</strong>; <strong>24,5 cm³</strong>; <strong>25,75 dm³</strong>. Biết hộp màu <b>vàng</b> có thể tích <i>lớn nhất</i> và hộp màu <b>xanh</b> có thể tích <i>lớn hơn</i> hộp màu <b>đỏ</b>. Hãy cho biết thể tích của mỗi chiếc hộp.
                        </p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in relative z-10 pt-4">
                            <!-- Đỏ -->
                            <div class="bg-red-50 border-2 border-red-200 rounded-[24px] p-6 text-center transform transition-all hover:scale-105 relative pt-12 mt-4">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-red-500 rounded-2xl shadow-lg border-4 border-white transform rotate-12 flex items-center justify-center text-white text-2xl">🎁</div>
                                <h3 class="font-black text-red-800 mb-4 uppercase tracking-widest text-sm">Hộp Đỏ</h3>
                                <select id="b114-3-do" class="w-full p-3 rounded-xl border-2 border-red-300 text-red-900 font-bold bg-white focus:outline-none focus:ring-4 focus:ring-red-100 appearance-none text-center cursor-pointer shadow-sm">
                                    <option value="">-- Chọn thể tích --</option>
                                    <option value="25 cm3">25 cm³</option>
                                    <option value="24.5 cm3">24,5 cm³</option>
                                    <option value="25.75 dm3">25,75 dm³</option>
                                </select>
                            </div>
                            
                            <!-- Xanh -->
                            <div class="bg-blue-50 border-2 border-blue-200 rounded-[24px] p-6 text-center transform transition-all hover:scale-105 relative pt-12 mt-4">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-2xl shadow-lg border-4 border-white transform -rotate-6 flex items-center justify-center text-white text-2xl">🎁</div>
                                <h3 class="font-black text-blue-800 mb-4 uppercase tracking-widest text-sm">Hộp Xanh</h3>
                                <select id="b114-3-xanh" class="w-full p-3 rounded-xl border-2 border-blue-300 text-blue-900 font-bold bg-white focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none text-center cursor-pointer shadow-sm">
                                    <option value="">-- Chọn thể tích --</option>
                                    <option value="25 cm3">25 cm³</option>
                                    <option value="24.5 cm3">24,5 cm³</option>
                                    <option value="25.75 dm3">25,75 dm³</option>
                                </select>
                            </div>

                            <!-- Vàng -->
                            <div class="bg-yellow-50 border-2 border-yellow-200 rounded-[24px] p-6 text-center transform transition-all hover:scale-105 relative pt-12 mt-4">
                                <div class="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-400 rounded-2xl shadow-lg border-4 border-white transform rotate-6 flex items-center justify-center text-white text-2xl">🎁</div>
                                <h3 class="font-black text-yellow-800 mb-4 uppercase tracking-widest text-sm">Hộp Vàng</h3>
                                <select id="b114-3-vang" class="w-full p-3 rounded-xl border-2 border-yellow-400 text-yellow-900 font-bold bg-white focus:outline-none focus:ring-4 focus:ring-yellow-100 appearance-none text-center cursor-pointer shadow-sm">
                                    <option value="">-- Chọn thể tích --</option>
                                    <option value="25 cm3">25 cm³</option>
                                    <option value="24.5 cm3">24,5 cm³</option>
                                    <option value="25.75 dm3">25,75 dm³</option>
                                </select>
                            </div>
                        </div>

                        <div class="mt-8 flex justify-center flex-col items-center">
                            <button onclick="checkB114B3(this)" class="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-full font-black text-sm uppercase shadow-lg shadow-emerald-200 transition-all active:scale-95 tracking-wide">
                                So sánh & Xác nhận
                            </button>
                            <div id="fb-b114-3" class="hidden font-bold mt-4 px-6 py-3 rounded-2xl border-2"></div>
                        </div>

                        <script>
                            window.checkB114B3 = function(btn) {
                                const d = document.getElementById('b114-3-do').value;
                                const x = document.getElementById('b114-3-xanh').value;
                                const v = document.getElementById('b114-3-vang').value;
                                const fb = document.getElementById('fb-b114-3');

                                fb.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-700', 'border-emerald-300', 'bg-amber-50', 'text-amber-700', 'border-amber-300');

                                if (!d || !x || !v) {
                                    fb.classList.add('bg-amber-50', 'text-amber-700', 'border-amber-300');
                                    fb.innerHTML = '⚠️ Hãy chia đủ 3 đáp án vào 3 hộp nhé!';
                                    return;
                                }

                                // 25.75 dm3 lớn nhất -> Vàng. Xanh > Đỏ => Xanh = 25 cm3, Đỏ = 24.5 cm3
                                if (d === '24.5 cm3' && x === '25 cm3' && v === '25.75 dm3') {
                                    fb.classList.add('bg-emerald-50', 'text-emerald-700', 'border-emerald-300');
                                    fb.innerHTML = '🎉 Tuyệt vời! Bạn nhớ rằng 25,75 dm³ = 25750 cm³ nên nó là số lớn nhất. Và 25 cm³ > 24,5 cm³ !';
                                    btn.classList.replace('bg-emerald-600', 'bg-gray-400');
                                    btn.classList.replace('hover:bg-emerald-700', 'hover:bg-gray-400');
                                    btn.textContent = 'Hoàn hảo! ✨';
                                    btn.disabled = true;
                                    
                                    document.getElementById('b114-3-do').disabled = true;
                                    document.getElementById('b114-3-xanh').disabled = true;
                                    document.getElementById('b114-3-vang').disabled = true;
                                } else {
                                    fb.classList.add('bg-amber-50', 'text-amber-700', 'border-amber-300');
                                    fb.innerHTML = '🤔 Sai mất rồi. Gợi ý: Hộp vàng có đơn vị dm³ (bằng 1 000 cm³), hãy đổi ra cùng đơn vị cm³ để so sánh cho dễ nha.';
                                }
                            };
                        </script>
                    </div>

                    <!-- Bài 4: Giải Toán %  (EduRobot ngầm định) -->
                    <div class="p-6 md:p-8 bg-white rounded-[32px] shadow-sm border border-gray-100">
                        <p class="font-black text-lg md:text-xl mb-6 text-emerald-700 flex items-center gap-3">
                            <span class="w-10 h-10 bg-emerald-50 border-2 border-emerald-200 rounded-xl flex items-center justify-center font-black text-emerald-800 shrink-0">4</span>
                            Giải toán có lời văn
                        </p>
                        
                        <div class="text-lg md:text-xl leading-relaxed text-gray-800 font-semibold mb-8 text-justify">
                            <p>
                                Bể nước ngầm của một toà nhà có <strong>240 m³</strong> nước. Người ta đang hút toàn bộ nước từ bể ra ngoài. Sau một thời gian kể từ khi bắt đầu hút, lượng nước trong bể giảm đi <strong>15%</strong>. Hỏi trong bể còn lại bao nhiêu mét khối nước?
                            </p>
                        </div>

                        <!-- Vùng giải Toán AI y chang mẫu 112 -->
                        <div class="border-2 border-gray-100 bg-gray-50/50 p-6 md:p-8 rounded-[32px]">
                            <h4 class="font-black text-gray-800 text-lg mb-6 flex items-center gap-3">
                                <span class="text-xl">✍️</span> Bài giải của em:
                            </h4>
                            
                            <div class="relative group mt-2">
                                <textarea id="ans-b114-4-text" rows="5" 
                                    class="w-full bg-white border-2 border-blue-100 rounded-[24px] p-6 pr-14 text-base font-bold text-gray-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300 shadow-inner resize-none leading-relaxed" 
                                    placeholder="Ví dụ:\nLượng nước đã hút ra là: ...\nSố nước còn lại trong bể là: ...\nĐáp số: ..."></textarea>
                                
                                <button id="btn-mic-b114" onclick="toggleSpeechRec_b114()" title="Nhập bằng giọng nói" class="absolute right-4 bottom-4 w-12 h-12 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center transition-all opacity-70 hover:opacity-100 active:scale-90 border border-blue-200">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                                <div id="mic-status-b114" class="absolute -top-3 right-4 px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden">Đang nghe...</div>
                            </div>
                            
                            <div class="flex flex-col sm:flex-row justify-end items-center gap-3 mt-4">
                                <button id="btn-reset-b114-4-ai" onclick="resetLesson114B4()" class="hidden w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-black text-sm uppercase transition-all shadow-sm active:scale-95">
                                    🔄 Không lưu
                                </button>
                                <button onclick="checkLesson114AI(this)" class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide shadow-lg shadow-blue-200 transition-all flex justify-center items-center gap-2 active:scale-95 group">
                                    Nộp & Gọi AI Chấm
                                    <span class="text-xl group-hover:scale-125 transition-transform">✨</span>
                                </button>
                            </div>
                            
                            <div id="fb-b114-4-ai" class="hidden mt-6 animate-slide-up"></div>
                        </div>

                        <script>
                            window.checkLesson114AI = async function(btn) {
                                const input = document.getElementById('ans-b114-4-text');
                                const fbBox = document.getElementById('fb-b114-4-ai');
                                const resetBtn = document.getElementById('btn-reset-b114-4-ai');
                                const studentWork = input.value.trim();
                                
                                if (!studentWork) {
                                    alert("Nhập bài giải vào nhé bạn nhỏ ơi!");
                                    return;
                                }
                                
                                const ogHtml = btn.innerHTML;
                                btn.disabled = true;
                                btn.innerHTML = '<div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>';
                                
                                fbBox.classList.remove('hidden');
                                fbBox.innerHTML = \`
                                    <div class="bg-blue-50 p-5 rounded-2xl flex items-center gap-3 italic text-blue-700 text-sm font-bold border border-blue-200/50">
                                        <div class="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                        EduRobot đang cắm cúi chấm phần trăm % lượng nước...
                                    </div>
                                \`;
                                resetBtn.classList.add('hidden');
                                
                                try {
                                    const requirement = "Tỉ số phần trăm của 240 m3, giảm 15%. Tính số nước MỚI CÒN LẠI (Tức là cách 1: 100% - 15% = 85%, 240 x 85/100 = 204. Hoặc Cách 2: 240 x 15 / 100 = 36 m3 bị hút, 240 - 36 = 204 m3). Đúng thì khen học sinh bằng giọng toán học, nhắc nhở nếu sai.";
                                    const feedback = await AI.tutor(studentWork, "Toán Lớp 5 - Tỉ số %, Thể Tích", requirement);
                                    
                                    fbBox.innerHTML = \`
                                        <div class="bg-white border-2 border-emerald-500 p-6 md:p-8 rounded-[32px] shadow-xl shadow-emerald-100 relative">
                                            <div class="absolute -top-3 left-6 px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">Nhận xét của Cố Vấn AI</div>
                                            <div class="text-[15px] font-medium text-gray-800 leading-relaxed pt-2 space-y-2">\${feedback.replace(/\\n/g, '<br>')}</div>
                                        </div>
                                    \`;
                                    resetBtn.classList.remove('hidden');
                                } catch (e) {
                                    fbBox.innerHTML = \`<div class="text-red-500 font-bold p-4 bg-red-50 rounded-2xl">Lỗi kết nối AI.</div>\`;
                                    resetBtn.classList.remove('hidden');
                                } finally {
                                    btn.disabled = false;
                                    btn.innerHTML = ogHtml;
                                }
                            };

                            window.resetLesson114B4 = function () {
                                document.getElementById('ans-b114-4-text').value = '';
                                document.getElementById('fb-b114-4-ai').classList.add('hidden');
                                document.getElementById('btn-reset-b114-4-ai').classList.add('hidden');
                            };

                            let recognition_b114 = null;
                            window.toggleSpeechRec_b114 = function () {
                                const btn = document.getElementById('btn-mic-b114');
                                const status = document.getElementById('mic-status-b114');
                                const input = document.getElementById('ans-b114-4-text');

                                if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                                    alert("Trình duyệt không hỗ trợ Mic.");
                                    return;
                                }

                                if (recognition_b114 && btn.classList.contains('recording')) {
                                    recognition_b114.stop();
                                    return;
                                }

                                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                                recognition_b114 = new SpeechRecognition();
                                recognition_b114.lang = 'vi-VN';

                                recognition_b114.onstart = function () {
                                    btn.classList.add('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
                                    btn.classList.remove('bg-blue-50', 'text-blue-600', 'border-blue-200');
                                    status.classList.remove('hidden');
                                };
                                recognition_b114.onresult = function (event) {
                                    input.value += (input.value ? ' \\n' : '') + event.results[0][0].transcript;
                                };
                                recognition_b114.onerror = function (event) {
                                    status.classList.add('hidden');
                                    btn.classList.remove('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
                                };
                                recognition_b114.onend = function () {
                                    btn.classList.remove('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
                                    btn.classList.add('bg-blue-50', 'text-blue-600', 'border-blue-200');
                                    status.classList.add('hidden');
                                };
                                recognition_b114.start();
                            };
                        </script>
                    </div>
                </div>
            </div>

            
            <!-- Tổng kết Nộp -->
            <div class="mt-12 bg-gray-900 p-8 rounded-[40px] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <div class="relative z-10 text-center md:text-left">
                    <h3 class="text-white font-black text-2xl md:text-3xl mb-2">Hoàn thành Bài 48 (Tiết 2)?</h3>
                    <p class="text-gray-400 font-bold">Lưu lại bài làm của Tiết 114 để Thầy Cô xem lại nhé!</p>
                </div>
                <button onclick="submitAllPractice114()" class="relative z-10 w-full md:w-auto bg-white text-gray-900 px-8 py-5 rounded-3xl font-black text-lg uppercase shadow-xl hover:-translate-y-1 transition-transform active:scale-95 flex items-center justify-center gap-2">
                    Nộp bài 📤
                </button>
            </div>
            
            <script>
                window.submitAllPractice114 = function () {
                    const t39b2 = document.getElementById('b114-2-ans')?.value || "";
                    const dt39b4 = document.getElementById('ans-b114-4-text')?.value || "";
                    
                    const fullContent = "\nBÀI 48 - LUYỆN TẬP CHUNG (Tiết 114)\n=====================================\n[TRANG 39]\nBài 2: Tính ra dùng hết " + t39b2 + " m3 / tháng.\nBài 4: (Tự luận học sinh)\n" + dt39b4 + "\n=====================================\n";
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson(fullContent, "KT Luyện tập chung 114", "Nộp Tiết 114");
                    } else {
                        alert("Hệ thống nộp bài cục bộ đã ghi nhận!");
                    }
                };
            </script>
        </div>`,\n    "quizPool": []\n};\n