export const lesson113 = {

    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "113",
    "title": "LUYỆN TẬP CHUNG (Tiết 1)",
    "desc": "Bài 48: Ôn tập về đọc, viết, đổi đơn vị đo thể tích xăng-ti-mét khối, đề-xi-mét khối, mét khối (Trang 38).",
    "content": `        
        <div class="space-y-6 md:space-y-10 animate-fade-in">
            <!-- Header Card Section -->
            <div class="relative group overflow-hidden rounded-[48px] shadow-2xl bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 text-white p-8 md:p-14">
                <div class="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
                <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
                
                <div class="flex flex-col md:flex-row items-center gap-10 md:gap-14 relative z-10">
                    <div class="w-40 h-40 md:w-56 md:h-56 bg-white/10 backdrop-blur-xl rounded-[40px] flex items-center justify-center border-[10px] border-white/20 shadow-2xl animate-float">
                        <span class="text-7xl md:text-9xl filter drop-shadow-2xl">🧊</span>
                    </div>
                    
                    <div class="text-center md:text-left flex-grow">
                        <div class="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-100 font-black uppercase tracking-[0.2em] text-xs md:text-sm border border-white/10 mb-6">
                            <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                            Bài 48 • Tiết 113
                        </div>
                        <h3 class="font-black text-4xl md:text-6xl mb-6 leading-[1.1] tracking-tight">
                            Luyện tập chung<br>
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">Đo lường thể tích</span>
                        </h3>
                        <p class="text-blue-100/80 font-bold text-lg md:text-2xl leading-relaxed max-w-2xl mb-10">
                            Hôm nay chúng ta sẽ cùng EduRobot chinh phục các thử thách về đọc, viết và chuyển đổi các đơn vị đo thể tích quen thuộc nhé!
                        </p>
                        <button onclick="router.switchTab('practice')" class="group relative px-10 py-5 bg-white text-blue-700 rounded-3xl font-black text-xl shadow-2xl hover:shadow-blue-900/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto md:mx-0 overflow-hidden">
                            <span class="relative z-10 uppercase tracking-wider">Khám phá ngay</span>
                            <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Knowledge Summary Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-8 bg-blue-50 rounded-[40px] border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-200">📏</div>
                    <h4 class="text-xl font-black text-blue-900 mb-2">Mét khối (m³)</h4>
                    <p class="text-blue-700 font-bold">1 m³ = 1 000 dm³</p>
                    <p class="text-blue-600/60 font-medium text-sm mt-1">Lớn nhất trong các đơn vị đã học</p>
                </div>
                <div class="p-8 bg-indigo-50 rounded-[40px] border-2 border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-indigo-200">📦</div>
                    <h4 class="text-xl font-black text-indigo-900 mb-2">Đề-xi-mét khối (dm³)</h4>
                    <p class="text-indigo-700 font-bold">1 dm³ = 1 000 cm³</p>
                    <p class="text-indigo-600/60 font-medium text-sm mt-1">Tương đương với 1 Lít</p>
                </div>
                <div class="p-8 bg-purple-50 rounded-[40px] border-2 border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                    <div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-purple-200">🎲</div>
                    <h4 class="text-xl font-black text-purple-900 mb-2">Xăng-ti-mét khối (cm³)</h4>
                    <p class="text-purple-700 font-bold">1 m³ = 1 000 000 cm³</p>
                    <p class="text-purple-600/60 font-medium text-sm mt-1">Đơn vị nhỏ nhất ở đây</p>
                </div>
            </div>

            <!-- Robot Tutor Section -->
            <div class="bg-white rounded-[40px] p-8 border-2 border-dashed border-gray-200 flex flex-col md:flex-row items-center gap-8">
                <div class="w-32 h-32 md:w-32 md:h-32 bg-gray-100 rounded-full flex items-center justify-center text-5xl shrink-0 animate-bounce-short">🤖</div>
                <div class="flex-grow">
                     [[TUTOR|b113-intro|Chào các bạn nhỏ! Để chuẩn bị cho phần thực hành, các bạn hãy thử nhắc lại: Muốn đổi từ Mét khối ra Đề-xi-mét khối thì mình làm phép tính gì nhỉ?]]
                </div>
            </div>
        </div>`,

    "practice": `        
        <div class="space-y-16 py-10">
            <!-- Section 1: Đọc và Viết số đo -->
            <section class="relative">
                <div class="inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-blue-200 -rotate-2">
                    <span class="text-3xl">1️⃣</span> Thử thách Đọc & Viết
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Pair 1 -->
                    <div class="p-2 border-4 border-dashed border-blue-100 rounded-[48px]">
                        [[MATH_EX|b113-1-a|?|Mười ba phẩy không năm mét khối|viết là|13,05 m3]]
                    </div>
                    <!-- Pair 2 -->
                    <div class="p-2 border-4 border-dashed border-pink-100 rounded-[48px]">
                        [[READING_EX|b113-1-b|0,857 m³|Đo thể tích|đọc là|Không phẩy tám trăm năm mươi bảy mét khối]]
                    </div>
                    <!-- Pair 3 -->
                    <div class="p-2 border-4 border-dashed border-emerald-100 rounded-[48px]">
                        [[MATH_EX|b113-1-c|?|Tám trăm hai mươi mốt đề-xi-mét khối|viết là|821 dm3]]
                    </div>
                    <!-- Pair 4 -->
                    <div class="p-2 border-4 border-dashed border-indigo-100 rounded-[48px]">
                        [[READING_EX|b113-1-d|100,5 cm³|Đo thể tích|đọc là|Một trăm phẩy năm xăng-ti-mét khối]]
                    </div>
                </div>
            </section>

            <!-- Section 2: Ước lượng thể tích -->
            <section>
                <div class="inline-flex items-center gap-4 bg-emerald-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-emerald-200">
                    <span class="text-3xl">2️⃣</span> Ước lượng thể tích khoảng
                </div>
                
                <div class="bg-white rounded-[48px] p-8 md:p-12 shadow-xl border border-gray-100 overflow-hidden relative">
                    <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10"></div>
                    
                    <p class="text-2xl font-black text-gray-800 mb-10 text-center leading-tight">
                        Chọn câu trả lời đúng:<br>
                        <span class="text-blue-600">Thể tích của khối băng trong hình vẽ khoảng bao nhiêu?</span>
                    </p>

                    <div class="flex flex-col lg:flex-row items-center gap-12">
                        <!-- Image Area -->
                        <div class="w-full lg:w-1/2 relative group">
                            <div class="absolute -inset-4 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <div class="relative bg-white p-4 rounded-[40px] border-2 border-blue-50 flex items-center justify-center">
                                <img src="hinh_anh/113-bg-khoibang.png" alt="Khối băng to" class="max-w-full h-auto rounded-3xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]" 
                                    onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%2360a5fa\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4\\'/></svg>'">
                            </div>
                            <div class="mt-4 text-center">
                                <span class="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-black text-sm uppercase tracking-widest">Khối băng so với người đi đường</span>
                            </div>
                        </div>

                        <!-- Options Area -->
                        <div class="w-full lg:w-1/2 space-y-6">
                            <button onclick="checkB113B2(this, 'A')" class="b113-2-opt group w-full bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-blue-500 p-8 rounded-[32px] transition-all flex items-center text-2xl font-black text-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                <span class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">A</span>
                                1 cm³
                            </button>
                            <button onclick="checkB113B2(this, 'B')" class="b113-2-opt group w-full bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-blue-500 p-8 rounded-[32px] transition-all flex items-center text-2xl font-black text-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                <span class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">B</span>
                                1 dm³
                            </button>
                            <button onclick="checkB113B2(this, 'C')" class="b113-2-opt group w-full bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-blue-500 p-8 rounded-[32px] transition-all flex items-center text-2xl font-black text-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                <span class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">C</span>
                                1 m³
                            </button>
                            
                            <div id="fb-b113-2" class="hidden animate-slide-up bg-blue-50 p-6 rounded-3xl border-2 border-blue-200 text-xl font-bold text-blue-800 text-center"></div>
                        </div>
                    </div>
                </div>

                <script>
                    window.checkB113B2 = function(btn, ans) {
                        const opts = document.querySelectorAll('.b113-2-opt');
                        opts.forEach(o => {
                            o.classList.remove('border-emerald-500', 'bg-white', 'shadow-emerald-100', 'border-red-400', 'shadow-red-50');
                            o.querySelector('span').classList.remove('bg-emerald-600', 'bg-red-500', 'text-white');
                        });

                        const fb = document.getElementById('fb-b113-2');
                        fb.classList.remove('hidden', 'bg-emerald-50', 'border-emerald-200', 'text-emerald-800', 'bg-red-50', 'border-red-200', 'text-red-800');

                        if (ans === 'C') {
                            btn.classList.add('border-emerald-500', 'bg-white', 'shadow-xl', 'shadow-emerald-100');
                            btn.querySelector('span').classList.add('bg-emerald-600', 'text-white');
                            fb.classList.remove('hidden');
                            fb.classList.add('bg-emerald-50', 'border-emerald-200', 'text-emerald-800');
                            fb.innerHTML = '✨ <b>Chính xác!</b> Một khối băng khổng lồ như vậy chắc chắn phải có thể tích khoảng 1 mét khối (1 m³).';
                            window.b113_ans_2 = "C";
                        } else {
                            btn.classList.add('border-red-400', 'bg-white', 'shadow-xl', 'shadow-red-50');
                            btn.querySelector('span').classList.add('bg-red-500', 'text-white');
                            fb.classList.remove('hidden');
                            fb.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
                            fb.innerHTML = '😞 <b>Chưa đúng rồi!</b> Hãy nhớ: 1 cm³ chỉ bằng hạt đậu, 1 dm³ chỉ bằng hộp sữa. Khối băng này to hơn nhiều đúng không nào? Thử lại nhé!';
                        }
                    };
                </script>
            </section>

            <!-- Section 3: Đếm khối lập phương -->
            <section>
                <div class="inline-flex items-center gap-4 bg-indigo-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-indigo-200 rotate-1">
                    <span class="text-3xl">3️⃣</span> Đếm khối lập phương
                </div>

                <div class="bg-gray-50 rounded-[48px] p-8 md:p-14 border-2 border-gray-100 shadow-inner">
                    <div class="flex flex-col lg:flex-row items-center gap-16">
                        <div class="w-full lg:w-1/2 flex flex-col items-center">
                            <div class="relative group bg-white p-8 rounded-[40px] shadow-2xl border-2 border-indigo-50">
                                <img src="hinh_anh/113-b3.png" alt="Hình lập phương xếp" class="max-w-full h-auto object-contain hover:scale-110 transition-transform duration-700" 
                                    onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%236366f1\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\\'/></svg>'">
                                <div class="absolute -bottom-4 -left-4 bg-indigo-600 text-white px-4 py-2 rounded-2xl font-black text-xs">Mỗi khối nhỏ là 1 cm³</div>
                            </div>
                        </div>
                        
                        <div class="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                            <h4 class="text-3xl font-black text-gray-800 leading-tight">Rô-bốt đã xếp được một hình bậc thang.<br><span class="text-indigo-600">Thể tích của hình đó là bao nhiêu?</span></h4>
                            
                            <div class="flex flex-col items-center lg:items-start gap-6">
                                <div class="flex items-center gap-4 p-4 bg-white rounded-[32px] shadow-xl border-2 border-indigo-100">
                                    <input type="number" id="b113-3-ans" class="w-32 h-20 bg-gray-50 border-4 border-indigo-100 rounded-2xl text-center text-4xl font-black text-indigo-700 focus:border-indigo-500 focus:bg-white outline-none transition-all" placeholder="?">
                                    <span class="text-3xl font-black text-gray-400 mr-4">cm³</span>
                                    <button onclick="checkB113B3()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-20 rounded-2xl font-black text-xl uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-indigo-100">Xác nhận</button>
                                </div>
                                <div id="fb-b113-3" class="hidden mt-2 p-6 rounded-3xl text-lg font-bold w-full max-w-md animate-slide-up"></div>
                            </div>
                            
                            <div class="p-6 bg-white/50 rounded-3xl border-2 border-dashed border-gray-200">
                                <p class="text-gray-500 font-bold italic tracking-wide">💡 Mẹo nhỏ: Em hãy đếm số khối ở từng cột (từ trái qua phải hoặc từ phải qua trái) rồi cộng tất cả lại nhé!</p>
                            </div>
                        </div>
                    </div>
                </div>

                <script>
                    window.checkB113B3 = function() {
                        const input = document.getElementById('b113-3-ans');
                        const fb = document.getElementById('fb-b113-3');
                        const val = input.value.trim();

                        fb.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-800', 'border-2', 'border-emerald-200', 'bg-red-100', 'text-red-800', 'border-red-200');
                        
                        if (!val) return;

                        if (val === '10') {
                            fb.classList.add('bg-emerald-100', 'text-emerald-800', 'border-2', 'border-emerald-200');
                            fb.innerHTML = '🎉 <b>Tuyệt quá!</b> 4 + 3 + 2 + 1 = 10 khối. Vậy thể tích là 10 cm³.';
                            input.classList.add('border-emerald-500', 'text-emerald-700');
                        } else {
                            fb.classList.add('bg-red-100', 'text-red-800', 'border-2', 'border-red-200');
                            fb.innerHTML = '🤔 <b>Chưa đúng rồi!</b> Hãy đếm kỹ từng bậc thang nào: bậc 1 có 4 hình, bậc 2 có 3 hình... Tổng là bao nhiêu nhỉ?';
                            input.classList.add('border-red-400', 'text-red-700');
                        }
                    };
                </script>
            </section>

            <!-- Section 4: Đổi đơn vị đo -->
            <section>
                <div class="inline-flex items-center gap-4 bg-purple-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-purple-200">
                    <span class="text-3xl">4️⃣</span> Thợ săn Số đo (Số?)
                </div>

                <div class="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-[48px] p-8 md:p-12 border-2 border-purple-100">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-white p-6 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                            <div class="text-purple-600 font-black text-xs uppercase tracking-[0.2em] mb-4">Câu A</div>
                            <div class="space-y-4">
                                [[CONV_EX|b113-4-a1|5 m³|dm³|5000]]
                                [[CONV_EX|b113-4-a2|480 dm³|m³|0,48]]
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                            <div class="text-purple-600 font-black text-xs uppercase tracking-[0.2em] mb-4">Câu B</div>
                            <div class="space-y-4">
                                [[CONV_EX|b113-4-b1|0,25 m³|cm³|250000]]
                                [[CONV_EX|b113-4-b2|5 000 cm³|m³|0,005]]
                            </div>
                        </div>

                        <div class="bg-white p-6 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
                            <div class="text-purple-600 font-black text-xs uppercase tracking-[0.2em] mb-4">Câu C</div>
                            <div class="space-y-4">
                                [[CONV_EX|b113-4-c1|1,9 dm³|cm³|1900]]
                                [[CONV_EX|b113-4-c2|2 650 cm³|dm³|2,65]]
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 5: Giải toán thực tế -->
            <section>
                <div class="inline-flex items-center gap-4 bg-orange-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-orange-200 -rotate-1">
                    <span class="text-3xl">5️⃣</span> Rô-bốt xếp hàng hóa
                </div>

                <div class="bg-white rounded-[48px] border-4 border-orange-100 p-8 md:p-14 relative overflow-hidden shadow-2xl">
                    <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-60"></div>
                    
                    <div class="flex flex-col lg:flex-row gap-12 relative z-10">
                        <div class="w-full lg:w-2/3">
                            <div class="bg-orange-50/50 p-8 rounded-[40px] border-2 border-orange-100 mb-8">
                                <p class="text-2xl font-medium text-gray-800 leading-[1.6] text-justify">
                                    Rô-bốt có một cái thùng dạng hình hộp chữ nhật với:<br>
                                    • Chiều dài: <strong class="text-blue-700 font-black text-3xl">6 dm</strong><br>
                                    • Chiều rộng: <strong class="text-blue-700 font-black text-3xl">4 dm</strong><br>
                                    • Chiều cao: <strong class="text-blue-700 font-black text-3xl">3 dm</strong><br><br>
                                    Vậy Rô-bốt có thể xếp được bao nhiêu hộp đèn hình lập phương có thể tích <strong class="text-red-500 bg-red-50 px-2 rounded">1 dm³</strong> để đầy chiếc thùng đó?
                                </p>
                            </div>

                            <div class="flex flex-col sm:flex-row items-center gap-6">
                                <div class="flex items-center gap-4 bg-white p-4 rounded-3xl shadow-xl border-2 border-orange-100 w-full sm:w-auto">
                                    <input type="number" id="b113-5-ans" class="w-32 h-16 bg-gray-50 border-4 border-orange-100 rounded-2xl text-center text-3xl font-black text-orange-700 focus:border-orange-500 outline-none transition-all" placeholder="?">
                                    <span class="text-xl font-black text-gray-400 mr-2 uppercase">hộp</span>
                                </div>
                                <button onclick="checkB113B5()" class="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-[24px] font-black text-lg uppercase tracking-widest shadow-lg shadow-orange-200 transition-all active:scale-95 group flex items-center justify-center gap-3">
                                    Kiểm tra
                                    <span class="group-hover:rotate-12 transition-transform">📦</span>
                                </button>
                            </div>
                            <div id="fb-b113-5" class="hidden mt-6 p-6 rounded-3xl text-xl font-bold animate-slide-up border-2"></div>
                        </div>

                        <div class="w-full lg:w-1/3 flex justify-center items-center">
                            <div class="relative group">
                                <div class="absolute inset-0 bg-orange-400 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <img src="hinh_anh/113-b5.png" alt="Rô bốt" class="relative max-w-full h-auto drop-shadow-2xl animate-float" 
                                    onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'%23f97316\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4\\'/></svg>'">
                            </div>
                        </div>
                    </div>
                </div>

                <script>
                    window.checkB113B5 = function() {
                        const input = document.getElementById('b113-5-ans');
                        const fb = document.getElementById('fb-b113-5');
                        const val = input.value.trim();

                        fb.classList.remove('hidden', 'bg-emerald-50', 'text-emerald-800', 'border-emerald-200', 'bg-red-50', 'text-red-800', 'border-red-200');
                        
                        if (!val) return;

                        if (val === '72') {
                            fb.classList.add('bg-emerald-50', 'text-emerald-800', 'border-emerald-200');
                            fb.innerHTML = '✨ <b>Hợp lý!</b> Thể tích thùng là: 6 × 4 × 3 = 72 dm³. Mỗi hộp là 1 dm³ nên xếp được 72 hộp.';
                            input.classList.add('border-emerald-500', 'bg-emerald-50');
                        } else {
                            fb.classList.add('bg-red-50', 'text-red-800', 'border-red-200');
                            fb.innerHTML = '🤔 <b>Tính lại nào!</b> Em hãy tính thể tích của thùng (Dài × Rộng × Cao) trước nhé!';
                            input.classList.add('border-red-400', 'bg-red-50');
                        }
                    };
                </script>
            </section>

            <!-- Final Submission Section -->
            <div class="mt-20 bg-gray-900 p-10 md:p-16 rounded-[56px] shadow-3xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30 group-hover:opacity-40 transition-opacity"></div>
                <div class="absolute -top-1/2 -left-1/4 w-full h-full bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
                
                <div class="relative z-10 text-center md:text-left">
                    <h3 class="text-white font-black text-3xl md:text-5xl mb-4 tracking-tight uppercase">Hoàn thành thử thách Tiết 113!</h3>
                    <p class="text-gray-400 font-bold text-lg md:text-2xl max-w-xl">Hệ thống sẽ tổng hợp tất cả câu trả lời của em để gửi đến Thầy Cô nhé!</p>
                </div>
                
                <button id="btn-submit-all-practice-113" onclick="submitAllPractice113()" class="relative z-10 w-full md:w-auto bg-white text-gray-900 px-12 py-6 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:-translate-y-2 hover:bg-blue-50 transition-all active:scale-95 flex items-center justify-center gap-4 group">
                    NỘP BÀI TẬP
                    <svg class="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
            </div>
            
            <script>
                window.submitAllPractice113 = function () {
                    // Collect all values
                    const b1a = document.getElementById('input-b113-1-a')?.value || "";
                    const b1b = document.getElementById('input-b113-1-b')?.value || "";
                    const b1c = document.getElementById('input-b113-1-c')?.value || "";
                    const b1d = document.getElementById('input-b113-1-d')?.value || "";
                    
                    const b2 = window.b113_ans_2 || "Chưa chọn";
                    
                    const b3 = document.getElementById('b113-3-ans')?.value || "";
                    
                    const b4_a1 = document.getElementById('input-b113-4-a1')?.value || "";
                    const b4_a2 = document.getElementById('input-b113-4-a2')?.value || "";
                    const b4_b1 = document.getElementById('input-b113-4-b1')?.value || "";
                    const b4_b2 = document.getElementById('input-b113-4-b2')?.value || "";
                    const b4_c1 = document.getElementById('input-b113-4-c1')?.value || "";
                    const b4_c2 = document.getElementById('input-b113-4-c2')?.value || "";
                    
                    const b5 = document.getElementById('b113-5-ans')?.value || "";
                    
                    const fullContent = \`
BÀI 48 - LUYỆN TẬP CHUNG (Tiết 113)
=====================================
[BÀI 1: ĐỌC VIẾT]
- 13,05 m³: \${b1a}
- 0,857 m³: \${b1b}
- 821 dm³: \${b1c}
- 100,5 cm³: \${b1d}

[BÀI 2: ƯỚC LƯỢNG]
- Kết quả chọn: \${b2}

[BÀI 3: ĐẾM KHỐI]
- Thể tích đếm được: \${b3} cm³

[BÀI 4: ĐỔI ĐƠN VỊ]
- 5 m³ = \${b4_a1} dm³
- 480 dm³ = \${b4_a2} m³
- 0,25 m³ = \${b4_b1} cm³
- 5 000 cm³ = \${b4_b2} m³
- 1,9 dm³ = \${b4_c1} cm³
- 2 650 cm³ = \${b4_c2} dm³

[BÀI 5: GIẢI TOÁN]
- Số hộp xếp được: \${b5} hộp
=====================================\`;
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson(fullContent, "Tổng hợp Bài 113", "btn-submit-all-practice-113");
                    } else {
                        alert("Hệ thống đã nhận bài làm của em!");
                    }
                };
            </script>
        </div>\`, 
    "quizPool": [
        { "question": "Số đo 13,05 m³ viết bằng chữ là:", "options": ["Mười ba phẩy không năm mét khối", "Mười ba nghìn không trăm linh năm mét khối", "Mười ba phẩy năm mét khối", "Mười ba phẩy không không năm mét khối"], "answer": 0, "level": 1 },
        { "question": "Điền số thích hợp: 0,5 m³ = ... dm³", "options": ["5", "50", "500", "5000"], "answer": 2, "level": 2 },
        { "question": "Lớp học có thể tích khoảng 150 ... (chọn đơn vị phù hợp)", "options": ["cm³", "dm³", "m³", "lít"], "answer": 2, "level": 2 }
    ]

}; 
