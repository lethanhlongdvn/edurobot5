export const lesson115 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "115",
    "title": "HÌNH KHAI TRIỂN CỦA HÌNH LẬP PHƯƠNG, HÌNH HỘP CHỮ NHẬT VÀ HÌNH TRỤ",
    "desc": "Bài 49: Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ (Trang 40-41).",
    "content": `
        <div class="space-y-4 md:space-y-6">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-700 p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
                <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl mix-blend-overlay"></div>
                
                <div class="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border-[8px] border-white/20 shrink-0 relative z-10 animate-bounce-short">
                    <span class="text-6xl md:text-8xl">📐</span>
                </div>
                
                <div class="relative z-10 text-center md:text-left flex-grow">
                    <div class="inline-block px-4 py-1.5 bg-indigo-500/30 backdrop-blur-md rounded-full text-indigo-100 font-bold uppercase tracking-widest text-xs md:text-sm border border-indigo-400/30 mb-4">Bài 49 (Tiết 115)</div>
                    <h3 class="text-white font-black text-2xl md:text-4xl mb-4 leading-tight">Hình khai triển của<br>HLP, HHCN & Hình trụ</h3>
                    <p class="text-indigo-100 font-medium text-base md:text-xl leading-relaxed max-w-2xl">
                        Hình khai triển của một hình khối là hình có thể gấp lại để được hình khối đó. Cùng EduRobot làm lồng đèn nhé!
                    </p>
                    <button onclick="router.switchTab('practice')" class="mt-8 bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-indigo-900/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto md:mx-0 group">
                        Bắt đầu ngay
                        <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-10 py-4">

            <!-- ==================== BÀI 1 ==================== -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">1</span>
                    <h4 class="text-3xl font-black text-gray-800">Tìm miếng bìa là hình khai triển thích hợp với mỗi chiếc đèn lồng.</h4>
                </div>
                <div class="space-y-8">
                    <!-- Hàng 1: Ảnh SGK (full width) -->
                    <div class="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex items-center justify-center">
                        <img src="hinh_anh/toan/115_b1.png" alt="Hình SGK bài 1" class="max-w-full h-auto rounded-2xl max-h-[450px] object-contain" onerror="this.parentElement.innerHTML='<div class=\\'text-center\\'><p class=\\'text-gray-400 font-bold text-3xl mb-2\\'>📷</p><p class=\\'text-gray-400 font-bold text-xl\\'>115_b1.png</p><p class=\\'text-gray-300 text-base mt-1\\'>Ảnh đèn lồng & hình khai triển A, B, C</p></div>'">
                    </div>
                    <!-- Hàng 2: 3 lựa chọn ngang -->
                    <p class="text-2xl font-bold text-gray-700">Ghép đèn lồng với hình khai triển:</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <!-- Đèn 1: HLP -->
                        <div class="bg-yellow-50 p-5 rounded-2xl border-2 border-yellow-200">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="text-3xl">🟨</span>
                                <p class="font-bold text-2xl text-gray-800">Đèn hộp vuông (HLP)</p>
                            </div>
                            <select id="b115-1-1" class="w-full bg-white border-2 border-yellow-400 p-3 rounded-xl font-bold text-2xl text-gray-800 outline-none focus:ring-4 ring-yellow-200">
                                <option value="">-- Chọn --</option>
                                <option value="A">Hình A</option>
                                <option value="B">Hình B</option>
                                <option value="C">Hình C</option>
                            </select>
                        </div>
                        <!-- Đèn 2: HHCN -->
                        <div class="bg-green-50 p-5 rounded-2xl border-2 border-green-200">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="text-3xl">🟩</span>
                                <p class="font-bold text-2xl text-gray-800">Đèn hộp chữ nhật</p>
                            </div>
                            <select id="b115-1-2" class="w-full bg-white border-2 border-green-400 p-3 rounded-xl font-bold text-2xl text-gray-800 outline-none focus:ring-4 ring-green-200">
                                <option value="">-- Chọn --</option>
                                <option value="A">Hình A</option>
                                <option value="B">Hình B</option>
                                <option value="C">Hình C</option>
                            </select>
                        </div>
                        <!-- Đèn 3: Hình trụ -->
                        <div class="bg-blue-50 p-5 rounded-2xl border-2 border-blue-200">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="text-3xl">🔵</span>
                                <p class="font-bold text-2xl text-gray-800">Đèn hình trụ</p>
                            </div>
                            <select id="b115-1-3" class="w-full bg-white border-2 border-blue-400 p-3 rounded-xl font-bold text-2xl text-gray-800 outline-none focus:ring-4 ring-blue-200">
                                <option value="">-- Chọn --</option>
                                <option value="A">Hình A</option>
                                <option value="B">Hình B</option>
                                <option value="C">Hình C</option>
                            </select>
                        </div>
                    </div>
                    <!-- Nút kiểm + kết quả -->
                    <div class="flex items-center gap-3">
                        <button onclick="checkB115B1()" class="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0"><svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button>
                        <span id="r-b115-1" class="font-black text-3xl"></span>
                        <button id="r-b115-1-retry" onclick="retryB115B1()" class="hidden w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-xl flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                    </div>
                </div>
            </section>

            <!-- ==================== BÀI 2 ==================== -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">2</span>
                    <h4 class="text-3xl font-black text-gray-800">Chọn câu trả lời đúng.</h4>
                </div>
                <p class="text-2xl font-bold text-gray-700 mb-6 leading-relaxed">Rô-bốt dùng miếng bìa nào dưới đây để làm chiếc đèn hình con cá?</p>
                <div class="space-y-8">
                    <!-- Hàng 1: Ảnh đèn con cá (full width) -->
                    <div class="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex items-center justify-center">
                        <img src="hinh_anh/toan/115_b2_ca.png" alt="Đèn hình con cá" class="max-w-full h-auto rounded-2xl max-h-[350px] object-contain" onerror="this.parentElement.innerHTML='<div class=\'text-center\'><p class=\'text-gray-400 font-bold text-3xl mb-2\'>🐟</p><p class=\'text-gray-400 font-bold text-xl\'>115_b2_ca.png</p><p class=\'text-gray-300 text-base\'>Ảnh đèn con cá</p></div>'">
                    </div>
                    <!-- Hàng 2: 4 lựa chọn -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button onclick="check115MCQ(this, 'A', 'b115-2', 'C')" class="b115-2-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-emerald-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b2A.png" alt="A" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b2A.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-emerald-500 transition-colors">A</span>
                        </button>
                        <button onclick="check115MCQ(this, 'B', 'b115-2', 'C')" class="b115-2-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-emerald-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b2B.png" alt="B" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b2B.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-emerald-500 transition-colors">B</span>
                        </button>
                        <button onclick="check115MCQ(this, 'C', 'b115-2', 'C')" class="b115-2-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-emerald-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b2C.png" alt="C" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b2C.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-emerald-500 transition-colors">C</span>
                        </button>
                        <button onclick="check115MCQ(this, 'D', 'b115-2', 'C')" class="b115-2-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-emerald-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b2D.png" alt="D" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b2D.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-emerald-500 transition-colors">D</span>
                        </button>
                    </div>
                    <div class="flex items-center gap-3">
                        <span id="r-b115-2" class="font-black text-3xl"></span>
                        <button id="r-b115-2-retry" onclick="retry115MCQ('b115-2')" class="hidden w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-xl flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                    </div>
                </div>
            </section>

            <!-- ==================== BÀI 3 ==================== -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">3</span>
                    <h4 class="text-3xl font-black text-gray-800">Chọn câu trả lời đúng.</h4>
                </div>
                <p class="text-2xl font-bold text-gray-700 mb-6 leading-relaxed">Hình nào dưới đây là hình khai triển của hình trụ?</p>
                <div class="space-y-8">
                    <!-- Hàng 1: Ảnh hình trụ tham chiếu (full width) -->
                    <div class="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex items-center justify-center">
                        <img src="hinh_anh/toan/115_b3_tru.png" alt="Hình trụ" class="max-w-full h-auto rounded-2xl max-h-[350px] object-contain" onerror="this.parentElement.innerHTML='<div class=\'text-center\'><p class=\'text-gray-400 font-bold text-3xl mb-2\'>🧊</p><p class=\'text-gray-400 font-bold text-xl\'>115_b3_tru.png</p><p class=\'text-gray-300 text-base\'>Ảnh cô bé & hình trụ</p></div>'">
                    </div>
                    <!-- Hàng 2: 4 lựa chọn -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button onclick="check115MCQ(this, 'A', 'b115-3', 'C')" class="b115-3-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-indigo-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b3A.png" alt="A" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b3A.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-indigo-500 transition-colors">A</span>
                        </button>
                        <button onclick="check115MCQ(this, 'B', 'b115-3', 'C')" class="b115-3-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-indigo-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b3B.png" alt="B" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b3B.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-indigo-500 transition-colors">B</span>
                        </button>
                        <button onclick="check115MCQ(this, 'C', 'b115-3', 'C')" class="b115-3-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-indigo-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b3C.png" alt="C" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b3C.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-indigo-500 transition-colors">C</span>
                        </button>
                        <button onclick="check115MCQ(this, 'D', 'b115-3', 'C')" class="b115-3-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-indigo-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b3D.png" alt="D" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b3D.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-indigo-500 transition-colors">D</span>
                        </button>
                    </div>
                    <div class="flex items-center gap-3">
                        <span id="r-b115-3" class="font-black text-3xl"></span>
                        <button id="r-b115-3-retry" onclick="retry115MCQ('b115-3')" class="hidden w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-xl flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                    </div>
                </div>
            </section>

            <!-- ==================== BÀI 4 ==================== -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">4</span>
                    <h4 class="text-3xl font-black text-gray-800">Chọn câu trả lời đúng.</h4>
                </div>
                <p class="text-2xl font-bold text-gray-700 mb-6 leading-relaxed">Rô-bốt có tấm bìa như hình bên. Hỏi Rô-bốt có thể gấp được hình nào dưới đây?</p>
                <div class="space-y-8">
                    <!-- Hàng 1: Ảnh tấm bìa (full width) -->
                    <div class="bg-gray-50 rounded-3xl p-6 border border-gray-100 flex items-center justify-center">
                        <img src="hinh_anh/toan/115_b4_bia.png" alt="Tấm bìa khai triển" class="max-w-full h-auto rounded-2xl max-h-[350px] object-contain" onerror="this.parentElement.innerHTML='<div class=\'text-center\'><p class=\'text-gray-400 font-bold text-3xl mb-2\'>📄</p><p class=\'text-gray-400 font-bold text-xl\'>115_b4_bia.png</p><p class=\'text-gray-300 text-base\'>Ảnh tấm bìa & Rô-bốt</p></div>'">
                    </div>
                    <!-- Hàng 2: 4 lựa chọn -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <button onclick="check115MCQ(this, 'A', 'b115-4', 'D')" class="b115-4-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-orange-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b4A.png" alt="A" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b4A.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-orange-500 transition-colors">A</span>
                        </button>
                        <button onclick="check115MCQ(this, 'B', 'b115-4', 'D')" class="b115-4-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-orange-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b4B.png" alt="B" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b4B.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-orange-500 transition-colors">B</span>
                        </button>
                        <button onclick="check115MCQ(this, 'C', 'b115-4', 'D')" class="b115-4-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-orange-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b4C.png" alt="C" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b4C.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-orange-500 transition-colors">C</span>
                        </button>
                        <button onclick="check115MCQ(this, 'D', 'b115-4', 'D')" class="b115-4-opt bg-white border-3 border-gray-200 p-5 rounded-2xl hover:border-orange-400 hover:shadow-lg transition-all text-center group">
                            <div class="bg-gray-50 rounded-xl p-3 mb-3 min-h-[110px] flex items-center justify-center">
                                <img src="hinh_anh/toan/115_b4D.png" alt="D" class="max-h-[100px] object-contain" onerror="this.parentElement.innerHTML='<span class=\'text-gray-300 text-base\'>115_b4D.png</span>'">
                            </div>
                            <span class="font-black text-3xl text-gray-400 group-hover:text-orange-500 transition-colors">D</span>
                        </button>
                    </div>
                    <div class="flex items-center gap-3">
                        <span id="r-b115-4" class="font-black text-3xl"></span>
                        <button id="r-b115-4-retry" onclick="retry115MCQ('b115-4')" class="hidden w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-xl flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                    </div>
                </div>
            </section>

            <!-- NỘP BÀI -->
            <div class="flex items-center justify-between py-6 px-4">
                <div></div>
                <button id="btn-submit-all-practice-115" onclick="submitAllPractice115()" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-base uppercase tracking-wider shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center gap-2">Nộp Bài <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></button>
            </div>

            <!-- ========== SCRIPTS ========== -->
            <script>
                // Bài 1: Check ghép đèn lồng
                window.checkB115B1 = function() {
                    var v1 = (document.getElementById('b115-1-1')||{}).value || '';
                    var v2 = (document.getElementById('b115-1-2')||{}).value || '';
                    var v3 = (document.getElementById('b115-1-3')||{}).value || '';
                    var sp = document.getElementById('r-b115-1');
                    var retryBtn = document.getElementById('r-b115-1-retry');
                    if (!v1 || !v2 || !v3) { return; }
                    // Đáp án: HLP=B, HHCN=A, Trụ=C
                    if (v1 === 'B' && v2 === 'A' && v3 === 'C') {
                        if (sp) { sp.textContent = 'Đ'; sp.className = 'font-black text-3xl text-emerald-600'; }
                    } else {
                        if (sp) { sp.textContent = 'S'; sp.className = 'font-black text-3xl text-red-600'; }
                    }
                    if (retryBtn) retryBtn.classList.remove('hidden');
                };
                window.retryB115B1 = function() {
                    document.getElementById('b115-1-1').value = '';
                    document.getElementById('b115-1-2').value = '';
                    document.getElementById('b115-1-3').value = '';
                    var sp = document.getElementById('r-b115-1');
                    var retryBtn = document.getElementById('r-b115-1-retry');
                    if (sp) sp.textContent = '';
                    if (retryBtn) retryBtn.classList.add('hidden');
                };

                // Generic MCQ check for Bài 2, 3, 4
                window.check115MCQ = function(btn, selected, prefix, correct) {
                    var opts = document.querySelectorAll('.' + prefix + '-opt');
                    opts.forEach(function(o) {
                        o.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-red-400', 'bg-red-50', 'scale-105', 'shadow-xl');
                        o.classList.add('border-gray-200', 'bg-white');
                        var sp = o.querySelector('span');
                        if (sp) { sp.classList.remove('text-emerald-600', 'text-red-500'); sp.classList.add('text-gray-400'); }
                    });
                    var sp = document.getElementById('r-' + prefix);
                    var retryBtn = document.getElementById('r-' + prefix + '-retry');
                    if (selected === correct) {
                        btn.classList.remove('border-gray-200', 'bg-white');
                        btn.classList.add('border-emerald-500', 'bg-emerald-50', 'scale-105', 'shadow-xl');
                        var label = btn.querySelector('span');
                        if (label) { label.classList.remove('text-gray-400'); label.classList.add('text-emerald-600'); }
                        if (sp) { sp.textContent = 'Đ'; sp.className = 'font-black text-3xl text-emerald-600'; }
                    } else {
                        btn.classList.remove('border-gray-200', 'bg-white');
                        btn.classList.add('border-red-400', 'bg-red-50');
                        var label = btn.querySelector('span');
                        if (label) { label.classList.remove('text-gray-400'); label.classList.add('text-red-500'); }
                        if (sp) { sp.textContent = 'S'; sp.className = 'font-black text-3xl text-red-600'; }
                    }
                    if (retryBtn) retryBtn.classList.remove('hidden');
                };

                // Retry MCQ
                window.retry115MCQ = function(prefix) {
                    var opts = document.querySelectorAll('.' + prefix + '-opt');
                    opts.forEach(function(o) {
                        o.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-red-400', 'bg-red-50', 'scale-105', 'shadow-xl');
                        o.classList.add('border-gray-200', 'bg-white');
                        var sp = o.querySelector('span');
                        if (sp) { sp.classList.remove('text-emerald-600', 'text-red-500'); sp.classList.add('text-gray-400'); }
                    });
                    var sp = document.getElementById('r-' + prefix);
                    var retryBtn = document.getElementById('r-' + prefix + '-retry');
                    if (sp) sp.textContent = '';
                    if (retryBtn) retryBtn.classList.add('hidden');
                };

                // Submit all
                window.submitAllPractice115 = function() {
                    var s = "BAI 49 - TIET 115 - HINH KHAI TRIEN\\n";
                    s += "[B1] HLP=" + ((document.getElementById('b115-1-1')||{}).value||'') + " HHCN=" + ((document.getElementById('b115-1-2')||{}).value||'') + " Tru=" + ((document.getElementById('b115-1-3')||{}).value||'') + "\\n";
                    s += "[B2] " + ((document.getElementById('r-b115-2')||{}).textContent||'') + "\\n";
                    s += "[B3] " + ((document.getElementById('r-b115-3')||{}).textContent||'') + "\\n";
                    s += "[B4] " + ((document.getElementById('r-b115-4')||{}).textContent||'');
                    if (window.submitMathLesson) { window.submitMathLesson(s, "KT Hinh Khai Trien 115", "btn-submit-all-practice-115"); }
                    else { alert("Da nhan bai!"); }
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Hình khai triển của hình lập phương có bao nhiêu mặt?", "options": ["4 mặt", "5 mặt", "6 mặt", "8 mặt"], "answer": 2, "level": 1 },
        { "question": "Hình khai triển của hình hộp chữ nhật gồm:", "options": ["4 hình chữ nhật", "6 hình chữ nhật", "6 hình vuông", "4 hình vuông"], "answer": 1, "level": 1 },
        { "question": "Hình khai triển của hình trụ gồm:", "options": ["2 hình tròn và 1 hình chữ nhật", "1 hình tròn và 1 hình chữ nhật", "2 hình vuông và 1 hình chữ nhật", "3 hình tròn"], "answer": 0, "level": 2 },
        { "question": "Khi gấp hình khai triển thành hình lập phương, hai mặt đối diện:", "options": ["Nằm cạnh nhau", "Không chạm nhau", "Cách nhau 1 mặt", "Cách nhau 2 mặt"], "answer": 2, "level": 2 },
        { "question": "Một hình lập phương có cạnh 5 cm. Diện tích toàn phần là:", "options": ["100 cm²", "150 cm²", "125 cm²", "50 cm²"], "answer": 1, "level": 3 }
    ]
};
