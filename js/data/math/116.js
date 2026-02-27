export const lesson116 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "116",
    "title": "LUYỆN TẬP",
    "desc": "Bài 49: Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ (Tiết 116 - Luyện tập - Trang 42-43).",
    "content": `
        <div class="space-y-4 md:space-y-6">
            <div class="bg-gradient-to-r from-cyan-600 to-blue-700 p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <div class="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
                <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl mix-blend-overlay"></div>
                
                <div class="w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border-[8px] border-white/20 shrink-0 relative z-10 animate-pulse">
                    <span class="text-6xl md:text-8xl">📦</span>
                </div>
                
                <div class="relative z-10 text-center md:text-left flex-grow">
                    <div class="inline-block px-4 py-1.5 bg-cyan-500/30 backdrop-blur-md rounded-full text-cyan-100 font-bold uppercase tracking-widest text-xs md:text-sm border border-cyan-400/30 mb-4">Bài 49 (Tiết 116)</div>
                    <h3 class="text-white font-black text-2xl md:text-4xl mb-4 leading-tight">Luyện tập về<br>Hình khai triển</h3>
                    <p class="text-cyan-100 font-medium text-base md:text-xl leading-relaxed max-w-2xl">
                        Chào mừng bạn đến với tiết luyện tập! Hôm nay chúng ta sẽ cùng Rô-bốt thực hành nhận diện và cắt ghép các hình khai triển kỳ diệu nhé!
                    </p>
                    <button onclick="router.switchTab('practice')" class="mt-8 bg-white text-cyan-700 hover:bg-cyan-50 px-8 py-4 rounded-full font-black text-lg shadow-xl shadow-cyan-900/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto md:mx-0 group">
                        Bắt đầu luyện tập
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
                    <h4 class="text-3xl font-black text-gray-800">Chọn câu trả lời đúng.</h4>
                </div>
                <p class="text-2xl font-bold text-gray-700 mb-6 leading-relaxed">Hình bên là khai triển của hình nào dưới đây?</p>
                <div class="flex flex-col lg:flex-row gap-8">
                    <!-- Ảnh Hình khai triển (SVG) -->
                    <div class="w-full lg:w-1/2">
                        <div class="bg-blue-50 rounded-3xl p-8 border border-blue-100 flex items-center justify-center min-h-[300px]">
                            <svg viewBox="0 0 400 200" class="w-full h-auto max-w-[350px]">
                                <!-- Hình chữ nhật khai triển -->
                                <rect x="50" y="60" width="280" height="80" fill="#bae6fd" stroke="#0284c7" stroke-width="3" />
                                <!-- Hai đáy tròn -->
                                <circle cx="330" cy="30" r="30" fill="#fca5a5" stroke="#ef4444" stroke-width="3" />
                                <circle cx="330" cy="170" r="30" fill="#fca5a5" stroke="#ef4444" stroke-width="3" />
                                <!-- Kích thước minh họa -->
                                <text x="190" y="105" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="20">Mặt bên</text>
                            </svg>
                        </div>
                    </div>
                    <!-- Chọn đáp án -->
                    <div class="w-full lg:w-1/2">
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            <button onclick="check116B1(this, 'A')" class="b116-b1-opt bg-white border-3 border-gray-100 p-4 rounded-2xl hover:border-blue-400 transition-all flex flex-col items-center gap-4 group">
                                <div class="bg-gray-50 p-4 rounded-xl w-full flex justify-center">
                                    <!-- A: Hình trụ cao -->
                                    <svg viewBox="0 0 100 150" class="w-16 h-24">
                                        <ellipse cx="50" cy="20" rx="30" ry="10" fill="#fca5a5" stroke="#ef4444" stroke-width="2" />
                                        <rect x="20" y="20" width="60" height="100" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                                        <path d="M20 120 Q50 135 80 120" fill="none" stroke="#0284c7" stroke-width="2" />
                                        <ellipse cx="50" cy="120" rx="30" ry="10" fill="#fca5a5" stroke="#ef4444" stroke-width="2" fill-opacity="0.5" />
                                    </svg>
                                </div>
                                <span class="font-black text-3xl text-gray-400 group-hover:text-blue-600">A</span>
                            </button>
                            <button onclick="check116B1(this, 'B')" class="b116-b1-opt bg-white border-3 border-gray-100 p-4 rounded-2xl hover:border-blue-400 transition-all flex flex-col items-center gap-4 group">
                                <div class="bg-gray-50 p-4 rounded-xl w-full flex justify-center">
                                    <!-- B: Hình trụ thấp -->
                                    <svg viewBox="0 0 100 150" class="w-20 h-24">
                                        <ellipse cx="50" cy="60" rx="45" ry="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2" />
                                        <rect x="5" y="60" width="90" height="40" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                                        <path d="M5 100 Q50 120 95 100" fill="none" stroke="#0284c7" stroke-width="2" />
                                        <ellipse cx="50" cy="100" rx="45" ry="15" fill="#fca5a5" stroke="#ef4444" stroke-width="2" fill-opacity="0.5" />
                                    </svg>
                                </div>
                                <span class="font-black text-3xl text-gray-400 group-hover:text-blue-600">B</span>
                            </button>
                            <button onclick="check116B1(this, 'C')" class="b116-b1-opt bg-white border-3 border-gray-100 p-4 rounded-2xl hover:border-blue-400 transition-all flex flex-col items-center gap-4 group">
                                <div class="bg-gray-50 p-4 rounded-xl w-full flex justify-center">
                                    <!-- C: Hình trụ nằm ngang -->
                                    <svg viewBox="0 0 150 100" class="w-32 h-24 pt-4">
                                        <ellipse cx="30" cy="50" rx="10" ry="30" fill="#fca5a5" stroke="#ef4444" stroke-width="2" />
                                        <rect x="30" y="20" width="100" height="60" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                                        <path d="M130 20 Q145 50 130 80" fill="none" stroke="#0284c7" stroke-width="2" />
                                        <ellipse cx="130" cy="50" rx="10" ry="30" fill="#fca5a5" stroke="#ef4444" stroke-width="2" fill-opacity="0.5" />
                                    </svg>
                                </div>
                                <span class="font-black text-3xl text-gray-400 group-hover:text-blue-600">C</span>
                            </button>
                        </div>
                        <div class="flex items-center gap-4">
                            <span id="r-116-1" class="font-black text-4xl"></span>
                            <button id="retry-116-1" onclick="retry116B1()" class="hidden bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-all"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ==================== BÀI 2 ==================== -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">2</span>
                    <h4 class="text-3xl font-black text-gray-800">Khám phá các hình khai triển của hình lập phương.</h4>
                </div>
                <div class="bg-emerald-50 rounded-3xl p-6 mb-8 border border-emerald-100">
                    <p class="text-xl font-medium text-emerald-800 mb-6">Em hãy quan sát các hình khai triển dưới đây và ghi nhớ cách gấp:</p>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div class="bg-white p-4 rounded-2xl shadow-sm border border-emerald-200">
                            <svg viewBox="0 0 100 100" class="w-full h-auto">
                                <rect x="30" y="10" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="10" y="30" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="30" y="30" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="50" y="30" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="70" y="30" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="30" y="50" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                            </svg>
                        </div>
                        <div class="bg-white p-4 rounded-2xl shadow-sm border border-emerald-200">
                            <svg viewBox="0 0 100 100" class="w-full h-auto">
                                <rect x="40" y="10" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="40" y="30" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="20" y="50" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="40" y="50" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="60" y="50" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="40" y="70" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                            </svg>
                        </div>
                        <div class="bg-white p-4 rounded-2xl shadow-sm border border-emerald-200">
                            <svg viewBox="0 0 100 100" class="w-full h-auto">
                                <rect x="10" y="10" width="20" height="20" fill="#86efac" stroke="#16a34a" />
                                <rect x="10" y="30" width="20" height="20" fill="#86efac" stroke="#16a34a" />
                                <rect x="30" y="30" width="20" height="20" fill="#86efac" stroke="#16a34a" />
                                <rect x="30" y="50" width="20" height="20" fill="#86efac" stroke="#16a34a" />
                                <rect x="50" y="50" width="20" height="20" fill="#86efac" stroke="#16a34a" />
                                <rect x="50" y="70" width="20" height="20" fill="#86efac" stroke="#16a34a" />
                            </svg>
                        </div>
                        <div class="bg-white p-4 rounded-2xl shadow-sm border border-emerald-200">
                            <svg viewBox="0 0 100 100" class="w-full h-auto">
                                <rect x="10" y="10" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="30" y="10" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="30" y="30" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="50" y="30" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="50" y="50" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="70" y="50" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                            </svg>
                        </div>
                    </div>
                </div>
                <!-- Bước thực hành -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="flex flex-col items-center text-center gap-3">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-black">1</div>
                        <p class="font-bold text-gray-700">Vẽ lên giấy ô vuông</p>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-black">2</div>
                        <p class="font-bold text-gray-700">Tô màu các mặt</p>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-black">3</div>
                        <p class="font-bold text-gray-700">Cắt theo đường viền</p>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-black">4</div>
                        <p class="font-bold text-gray-700">Gấp thành khối</p>
                    </div>
                </div>
            </section>

            <!-- ==================== BÀI 3 ==================== -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">3</span>
                    <h4 class="text-3xl font-black text-gray-800">Hình nào là hình khai triển của hình lập phương?</h4>
                </div>
                <p class="text-xl text-gray-600 mb-8">Hãy chọn những hình có thể gấp thành hình lập phương (có thể chọn nhiều hình):</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Hình A -->
                    <button onclick="toggle116B3(this, 'A')" id="b116-3a" class="b116-3-opt group relative bg-gray-50 border-3 border-transparent rounded-[40px] p-8 transition-all hover:translate-y-[-8px]">
                        <div class="mb-6 flex justify-center h-48 items-center">
                            <svg viewBox="0 0 140 120" class="w-full h-full max-w-[150px]">
                                <rect x="40" y="10" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="20" y="30" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="40" y="30" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="60" y="30" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="80" y="30" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                                <rect x="60" y="50" width="20" height="20" fill="#fde047" stroke="#ca8a04" />
                            </svg>
                        </div>
                        <div class="text-center">
                            <span class="inline-block px-6 py-2 bg-white rounded-full font-black text-2xl text-gray-500 group-[.selected]:text-indigo-600 group-[.selected]:shadow-lg transition-all shadow-sm">Hình A</span>
                        </div>
                        <div class="absolute top-4 right-4 opacity-0 group-[.selected]:opacity-100 transition-opacity">
                            <div class="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>
                        </div>
                    </button>
                    <!-- Hình B -->
                    <button onclick="toggle116B3(this, 'B')" id="b116-3b" class="b116-3-opt group relative bg-gray-50 border-3 border-transparent rounded-[40px] p-8 transition-all hover:translate-y-[-8px]">
                        <div class="mb-6 flex justify-center h-48 items-center">
                            <svg viewBox="0 0 140 120" class="w-full h-full max-w-[150px]">
                                <rect x="40" y="10" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="60" y="10" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="20" y="30" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="40" y="30" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="60" y="30" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                                <rect x="80" y="30" width="20" height="20" fill="#7dd3fc" stroke="#0ea5e9" />
                            </svg>
                        </div>
                        <div class="text-center">
                            <span class="inline-block px-6 py-2 bg-white rounded-full font-black text-2xl text-gray-500 group-[.selected]:text-indigo-600 group-[.selected]:shadow-lg transition-all shadow-sm">Hình B</span>
                        </div>
                        <div class="absolute top-4 right-4 opacity-0 group-[.selected]:opacity-100 transition-opacity">
                            <div class="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>
                        </div>
                    </button>
                    <!-- Hình C -->
                    <button onclick="toggle116B3(this, 'C')" id="b116-3c" class="b116-3-opt group relative bg-gray-50 border-3 border-transparent rounded-[40px] p-8 transition-all hover:translate-y-[-8px]">
                        <div class="mb-6 flex justify-center h-48 items-center">
                            <svg viewBox="0 0 140 120" class="w-full h-full max-w-[150px]">
                                <rect x="20" y="10" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="40" y="10" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="40" y="30" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="60" y="30" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="60" y="50" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                                <rect x="80" y="50" width="20" height="20" fill="#f9a8d4" stroke="#db2777" />
                            </svg>
                        </div>
                        <div class="text-center">
                            <span class="inline-block px-6 py-2 bg-white rounded-full font-black text-2xl text-gray-500 group-[.selected]:text-indigo-600 group-[.selected]:shadow-lg transition-all shadow-sm">Hình C</span>
                        </div>
                        <div class="absolute top-4 right-4 opacity-0 group-[.selected]:opacity-100 transition-opacity">
                            <div class="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>
                        </div>
                    </button>
                </div>
                <div class="mt-10 flex items-center gap-4">
                    <button onclick="check116B3()" class="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-indigo-700 transition-all active:scale-95">Kiểm tra</button>
                    <span id="r-116-3" class="font-black text-4xl"></span>
                    <button id="retry-116-3" onclick="retry116B3()" class="hidden bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-all"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                </div>
            </section>

            <!-- ==================== BÀI 4 ==================== -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black text-xl shadow-md">4</span>
                    <h4 class="text-3xl font-black text-gray-800">Cắt hình để hoàn thiện hình khai triển.</h4>
                </div>
                <p class="text-xl font-bold text-gray-700 mb-8 leading-relaxed">
                    Rô-bốt cần cắt đi hình chữ nhật nào trong hình dưới đây để phần còn lại là hình khai triển của một hình hộp chữ nhật? 
                    <span class="text-lg font-medium text-blue-500 ml-2">(Nhấn vào hình để cắt)</span>
                </p>
                
                <div class="bg-slate-50 rounded-[40px] p-8 md:p-16 flex justify-center overflow-x-auto">
                    <div class="flex items-center">
                        <!-- 1. Mặt Xanh lá -->
                        <div id="cut-green" onclick="toggleCut('green')" class="cut-opt w-16 h-32 bg-[#22c55e] border-2 border-[#15803d] cursor-pointer transition-all hover:brightness-110 relative flex items-center justify-center">
                            <span class="text-white font-bold text-xs pointer-events-none">Xanh lá</span>
                            <div class="x-mark hidden absolute inset-0 bg-white/80 flex items-center justify-center text-red-600 font-black text-2xl">✕</div>
                        </div>

                        <!-- 2. Cột chính (Tím - Xanh dương - Trắng) -->
                        <div class="flex flex-col items-center">
                            <!-- Mặt Tím (Gắn vào Xanh dương) -->
                            <div id="cut-purple" onclick="toggleCut('purple')" class="cut-opt w-32 h-16 bg-[#a855f7] border-2 border-[#7e22ce] cursor-pointer transition-all hover:brightness-110 relative flex items-center justify-center mb-[-2px]">
                                <span class="text-white font-bold text-xs pointer-events-none">Tím</span>
                                <div class="x-mark hidden absolute inset-0 bg-white/80 flex items-center justify-center text-red-600 font-black text-2xl">✕</div>
                            </div>
                            <!-- Mặt Xanh dương -->
                            <div id="cut-blue" onclick="toggleCut('blue')" class="cut-opt w-32 h-32 bg-[#3b82f6] border-2 border-[#1d4ed8] cursor-pointer transition-all hover:brightness-110 relative flex items-center justify-center z-10">
                                <span class="text-white font-bold text-xs pointer-events-none">Xanh dương</span>
                                <div class="x-mark hidden absolute inset-0 bg-white/80 flex items-center justify-center text-red-600 font-black text-3xl">✕</div>
                            </div>
                            <!-- Mặt Trắng (Gắn vào Xanh dương) -->
                            <div id="cut-white" onclick="toggleCut('white')" class="cut-opt w-32 h-16 bg-white border-2 border-gray-400 cursor-pointer transition-all hover:bg-gray-50 relative flex items-center justify-center mt-[-2px]">
                                <span class="text-gray-500 font-bold text-xs pointer-events-none">Trắng</span>
                                <div class="x-mark hidden absolute inset-0 bg-gray-200/80 flex items-center justify-center text-red-600 font-black text-3xl">✕</div>
                            </div>
                        </div>

                        <!-- 3. Mặt Đỏ -->
                        <div id="cut-red" onclick="toggleCut('red')" class="cut-opt w-16 h-32 bg-[#ef4444] border-2 border-[#b91c1c] cursor-pointer transition-all hover:brightness-110 relative flex items-center justify-center">
                            <span class="text-white font-bold text-xs pointer-events-none">Đỏ</span>
                            <div class="x-mark hidden absolute inset-0 bg-white/80 flex items-center justify-center text-red-600 font-black text-xl">✕</div>
                        </div>

                        <!-- 4. Mặt Cam -->
                        <div id="cut-orange" onclick="toggleCut('orange')" class="cut-opt w-32 h-32 bg-[#f97316] border-2 border-[#c2410c] cursor-pointer transition-all hover:brightness-110 relative flex items-center justify-center">
                            <span class="text-white font-bold text-xs pointer-events-none">Cam</span>
                            <div class="x-mark hidden absolute inset-0 bg-white/80 flex items-center justify-center text-red-600 font-black text-3xl">✕</div>
                        </div>

                        <!-- 5. Mặt Vàng -->
                        <div id="cut-yellow" onclick="toggleCut('yellow')" class="cut-opt w-16 h-32 bg-[#fde047] border-2 border-[#a16207] cursor-pointer transition-all hover:brightness-110 relative flex items-center justify-center">
                            <span class="text-[#a16207] font-bold text-xs pointer-events-none">Vàng</span>
                            <div class="x-mark hidden absolute inset-0 bg-white/80 flex items-center justify-center text-red-600 font-black text-xl">✕</div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <button onclick="check116B4()" class="bg-orange-600 text-white px-8 py-3 rounded-2xl font-black shadow-lg hover:bg-orange-700 transition-all active:scale-95">Kiểm tra</button>
                    <span id="r-116-4" class="font-black text-4xl"></span>
                    <button id="retry-116-4" onclick="retry116B4()" class="hidden bg-gray-100 hover:bg-gray-200 p-3 rounded-xl transition-all"><svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                </div>
            </section>

            <!-- NỘP BÀI -->
            <div class="flex items-center justify-between py-6 px-4">
                <div></div>
                <button id="btn-submit-all-math-116" onclick="submitAll116()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black text-base uppercase tracking-wider shadow-lg shadow-indigo-200 transition-all active:scale-95 flex items-center gap-2">Nộp Bài <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></button>
            </div>

            <!-- ========== SCRIPTS ========== -->
            <script>
                // Bài 1
                window.check116B1 = function(btn, choice) {
                    var opts = document.querySelectorAll('.b116-b1-opt');
                    opts.forEach(o => {
                        o.classList.remove('border-blue-500', 'bg-blue-50', 'border-red-400', 'bg-red-50', 'scale-105', 'shadow-xl');
                        o.classList.add('border-gray-100', 'bg-white');
                    });
                    
                    var sp = document.getElementById('r-116-1');
                    var retryBtn = document.getElementById('retry-116-1');
                    
                    if (choice === 'B') {
                        btn.classList.add('border-blue-500', 'bg-blue-50', 'scale-105', 'shadow-xl');
                        sp.textContent = 'Đ'; sp.className = 'font-black text-4xl text-emerald-600';
                    } else {
                        btn.classList.add('border-red-400', 'bg-red-50');
                        sp.textContent = 'S'; sp.className = 'font-black text-4xl text-red-600';
                    }
                    retryBtn.classList.remove('hidden');
                };
                window.retry116B1 = function() {
                    var opts = document.querySelectorAll('.b116-b1-opt');
                    opts.forEach(o => {
                        o.classList.remove('border-blue-500', 'bg-blue-50', 'border-red-400', 'bg-red-50', 'scale-105', 'shadow-xl');
                        o.classList.add('border-gray-100', 'bg-white');
                    });
                    document.getElementById('r-116-1').textContent = '';
                    document.getElementById('retry-116-1').classList.add('hidden');
                };

                // Bài 3
                window.toggle116B3 = function(btn, id) {
                    btn.classList.toggle('selected');
                    btn.classList.toggle('border-indigo-500');
                    btn.classList.toggle('bg-indigo-50');
                };
                window.check116B3 = function() {
                    var a = document.getElementById('b116-3a').classList.contains('selected');
                    var b = document.getElementById('b116-3b').classList.contains('selected');
                    var c = document.getElementById('b116-3c').classList.contains('selected');
                    var sp = document.getElementById('r-116-3');
                    var retryBtn = document.getElementById('retry-116-3');
                    
                    // Correct: A and C
                    if (a && !b && c) {
                        sp.textContent = 'Đ'; sp.className = 'font-black text-4xl text-emerald-600';
                    } else {
                        sp.textContent = 'S'; sp.className = 'font-black text-4xl text-red-600';
                    }
                    retryBtn.classList.remove('hidden');
                };
                window.retry116B3 = function() {
                    var opts = document.querySelectorAll('.b116-3-opt');
                    opts.forEach(o => {
                        o.classList.remove('selected', 'border-indigo-500', 'bg-indigo-50');
                    });
                    document.getElementById('r-116-3').textContent = '';
                    document.getElementById('retry-116-3').classList.add('hidden');
                };

                // Bài 4
                window.toggleCut = function(id) {
                    var el = document.getElementById('cut-' + id);
                    var marks = document.querySelectorAll('.x-mark');
                    marks.forEach(m => m.classList.add('hidden'));
                    
                    var mark = el.querySelector('.x-mark');
                    mark.classList.toggle('hidden');
                    window.lastCut = id;
                };
                window.check116B4 = function() {
                    var sp = document.getElementById('r-116-4');
                    var retryBtn = document.getElementById('retry-116-4');
                    // Correct: EITHER green OR yellow
                    if (window.lastCut === 'green' || window.lastCut === 'yellow') {
                        sp.textContent = 'Đ'; sp.className = 'font-black text-4xl text-emerald-600';
                    } else {
                        sp.textContent = 'S'; sp.className = 'font-black text-4xl text-red-600';
                    }
                    retryBtn.classList.remove('hidden');
                };
                window.retry116B4 = function() {
                    var marks = document.querySelectorAll('.x-mark');
                    marks.forEach(m => m.classList.add('hidden'));
                    document.getElementById('r-116-4').textContent = '';
                    document.getElementById('retry-116-4').classList.add('hidden');
                    window.lastCut = null;
                };

                // Submit all
                window.submitAll116 = function() {
                    var res = "BAI 49 - TIET 116\\n";
                    res += "B1: " + document.getElementById('r-116-1').textContent + "\\n";
                    res += "B3: " + document.getElementById('r-116-3').textContent + "\\n";
                    res += "B4: " + document.getElementById('r-116-4').textContent;
                    if (window.submitMathLesson) window.submitMathLesson(res, "Tiết 116 - Luyện tập", "btn-submit-all-math-116");
                    else alert("Nộp bài thành công!");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Hình khai triển của hình trụ gồm mặt bên là hình gì?", "options": ["Hình vuông", "Hình tròn", "Hình chữ nhật", "Hình tam giác"], "answer": 2, "level": 1 },
        { "question": "Có bao nhiêu hình khai triển cơ bản của hình lập phương?", "options": ["6 hình", "8 hình", "11 hình", "12 hình"], "answer": 2, "level": 2 },
        { "question": "Một hình khai triển của hình lập phương có mấy mặt?", "options": ["4 mặt", "6 mặt", "8 mặt", "4 mặt bên và 1 mặt đáy"], "answer": 1, "level": 1 },
        { "question": "Khi cắt bỏ 1 mặt thừa từ tấm bìa 7 mặt để được HHCN, ta cần giữ lại mấy cặp mặt đối diện?", "options": ["2 cặp", "3 cặp", "4 cặp", "6 cặp"], "answer": 1, "level": 2 },
        { "question": "Nếu hình trụ có chu vi đáy là 10cm và chiều cao 5cm, diện tích xung quanh là:", "options": ["15 cm²", "50 cm²", "25 cm²", "100 cm²"], "answer": 1, "level": 3 }
    ]
};
