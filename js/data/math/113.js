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
        </div>`,

    "practice": `        
        <div class="space-y-12 py-6">
            <!-- Nhãn Luyện tập -->
            <div class="flex items-center gap-3 mb-2">
                <span class="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full font-black text-sm uppercase tracking-widest">✍️ Luyện tập</span>
            </div>

            <!-- ============================================ -->
            <!-- BÀI 1: HOÀN THÀNH BẢNG SAU (Dạng Table) -->
            <!-- ============================================ -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-8">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">1</span>
                    <h4 class="text-xl font-black text-gray-800">Hoàn thành bảng sau.</h4>
                </div>

                <!-- Table Header -->
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-base">
                        <thead>
                            <tr>
                                <th class="bg-red-50 text-red-700 font-black text-center py-4 px-6 border border-gray-200 rounded-tl-2xl w-1/3">Đọc</th>
                                <th class="bg-red-50 text-red-700 font-black text-center py-4 px-6 border border-gray-200 w-1/3">Viết</th>
                                <th class="bg-red-50 text-red-700 font-black text-center py-4 px-4 border border-gray-200 rounded-tr-2xl w-[80px]">Chấm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Row 1: Cho sẵn cách đọc, HS viết -->
                            <tr>
                                <td class="border border-gray-200 py-4 px-6 text-gray-700 font-medium">Một trăm phẩy không năm mét khối</td>
                                <td class="border border-gray-200 py-4 px-4">
                                    <input type="text" id="b113-t1-write1" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-center font-bold text-lg text-blue-800 focus:border-blue-500 outline-none transition-all" placeholder="?">
                                </td>
                                <td class="border border-gray-200 text-center">
                                    <button onclick="checkB113Table(1)" class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto transition-all active:scale-90 shadow-sm">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 2: Cho sẵn cách viết, HS điền cách viết (biến đổi) -->
                            <tr>
                                <td class="border border-gray-200 py-4 px-6 text-gray-700 font-medium"></td>
                                <td class="border border-gray-200 py-4 px-4">
                                    <input type="text" id="b113-t1-write2" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-center font-bold text-lg text-blue-800 focus:border-blue-500 outline-none transition-all" placeholder="?" value="0,001 m³" disabled>
                                </td>
                                <td class="border border-gray-200 text-center">
                                    <button onclick="checkB113Table(2)" class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto transition-all active:scale-90 shadow-sm">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 3: Cho sẵn cách đọc, HS viết -->
                            <tr>
                                <td class="border border-gray-200 py-4 px-6 text-gray-700 font-medium">Tám trăm hai mươi mốt đề-xi-mét khối</td>
                                <td class="border border-gray-200 py-4 px-4">
                                    <input type="text" id="b113-t1-write3" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-center font-bold text-lg text-blue-800 focus:border-blue-500 outline-none transition-all" placeholder="?">
                                </td>
                                <td class="border border-gray-200 text-center">
                                    <button onclick="checkB113Table(3)" class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto transition-all active:scale-90 shadow-sm">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 4: Cho sẵn cách viết, HS đọc -->
                            <tr>
                                <td class="border border-gray-200 py-4 px-4">
                                    <input type="text" id="b113-t1-read4" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-center font-bold text-lg text-blue-800 focus:border-blue-500 outline-none transition-all" placeholder="?">
                                </td>
                                <td class="border border-gray-200 py-4 px-6 text-gray-700 font-bold text-center text-lg">100,2 cm³</td>
                                <td class="border border-gray-200 text-center">
                                    <button onclick="checkB113Table(4)" class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto transition-all active:scale-90 shadow-sm">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div id="fb-b113-table" class="hidden mt-4 animate-slide-up"></div>

                <script>
                    window.checkB113Table = function(row) {
                        var fb = document.getElementById('fb-b113-table');
                        fb.classList.remove('hidden');
                        var correct = false;
                        var val = '';

                        if (row === 1) {
                            val = (document.getElementById('b113-t1-write1').value || '').trim().replace(/\\s/g,'').toLowerCase();
                            correct = val === '100,05m3' || val === '100,05m³' || val === '100.05m3' || val === '100.05m³';
                        } else if (row === 2) {
                            correct = true;
                            fb.innerHTML = '<div class="bg-blue-50 text-blue-700 p-4 rounded-2xl font-bold border border-blue-100">ℹ️ Dòng này là ví dụ mẫu: 0,001 m³ đọc là "Không phẩy không không một mét khối".</div>';
                            return;
                        } else if (row === 3) {
                            val = (document.getElementById('b113-t1-write3').value || '').trim().replace(/\\s/g,'').toLowerCase();
                            correct = val === '821dm3' || val === '821dm³';
                        } else if (row === 4) {
                            val = (document.getElementById('b113-t1-read4').value || '').trim().toLowerCase();
                            correct = val.includes('trăm') && val.includes('hai') && val.includes('xăng-ti-mét khối') || val.includes('xăng ti mét khối');
                        }

                        if (correct) {
                            fb.innerHTML = '<div class="bg-emerald-50 text-emerald-700 p-4 rounded-2xl font-bold border border-emerald-200">✅ Chính xác! Bạn giỏi lắm!</div>';
                        } else {
                            fb.innerHTML = '<div class="bg-red-50 text-red-700 p-4 rounded-2xl font-bold border border-red-200">❌ Chưa đúng rồi. Hãy kiểm tra lại nhé!</div>';
                        }
                    };
                </script>
            </section>

            <!-- ============================================ -->
            <!-- BÀI 2: CHỌN CÂU TRẢ LỜI ĐÚNG -->
            <!-- ============================================ -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">2</span>
                    <h4 class="text-xl font-black text-gray-800">Chọn câu trả lời đúng.</h4>
                </div>
                
                <p class="text-gray-600 font-medium mb-6">Thể tích của khối băng có dạng hình lập phương trong hình vẽ khoảng:</p>
                
                <div class="flex flex-col lg:flex-row items-start gap-8">
                    <div class="w-full lg:w-1/2">
                        <!-- Dropdown chọn đáp án -->
                        <select id="b113-2-select" class="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 px-6 font-bold text-lg text-gray-700 outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer mb-4">
                            <option value="">Chọn đáp án...</option>
                            <option value="A">A. 1 cm³</option>
                            <option value="B">B. 1 dm³</option>
                            <option value="C">C. 1 m³</option>
                        </select>
                        <button onclick="checkB113B2Select()" class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                        <div id="fb-b113-2" class="hidden mt-4 animate-slide-up"></div>
                    </div>
                    
                    <div class="w-full lg:w-1/2 flex justify-center">
                        <div class="bg-gray-50 rounded-3xl p-4 border border-gray-100">
                            <img src="hinh_anh/113_bg_khoibang.png" alt="Khối băng" class="max-w-full h-auto rounded-2xl max-h-[280px] object-contain"
                                onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%2360a5fa%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4%22/></svg>'">
                        </div>
                    </div>
                </div>

                <script>
                    window.checkB113B2Select = function() {
                        var sel = document.getElementById('b113-2-select');
                        var fb = document.getElementById('fb-b113-2');
                        var val = sel.value;
                        fb.classList.remove('hidden');
                        
                        if (!val) {
                            fb.innerHTML = '<div class="bg-amber-50 text-amber-700 p-4 rounded-2xl font-bold border border-amber-200">⚠️ Bạn chưa chọn đáp án!</div>';
                            return;
                        }
                        if (val === 'C') {
                            fb.innerHTML = '<div class="bg-emerald-50 text-emerald-700 p-4 rounded-2xl font-bold border border-emerald-200">✅ Chính xác! Khối băng to như vậy có thể tích khoảng 1 m³.</div>';
                            window.b113_ans_2 = 'C';
                        } else {
                            fb.innerHTML = '<div class="bg-red-50 text-red-700 p-4 rounded-2xl font-bold border border-red-200">❌ Chưa đúng. Hãy nhớ: 1 cm³ chỉ bằng hạt đậu, 1 dm³ chỉ bằng hộp sữa. Khối băng này to hơn nhiều!</div>';
                        }
                    };
                </script>
            </section>

            <!-- ============================================ -->
            <!-- BÀI 3: SỐ ? (Đếm khối lập phương) -->
            <!-- ============================================ -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">3</span>
                    <h4 class="text-xl font-black text-gray-800">Số ?</h4>
                </div>
                
                <div class="flex flex-col lg:flex-row items-center gap-10">
                    <div class="w-full lg:w-1/2">
                        <p class="text-gray-700 font-medium mb-4">Rô-bốt đã xếp các hình lập phương 1 cm³ thành hình bên.</p>
                        <p class="text-gray-800 font-bold text-lg mb-6">Thể tích của hình bên là: 
                            <input type="number" id="b113-3-ans" class="w-20 bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center text-xl font-black text-blue-700 focus:border-blue-500 outline-none transition-all mx-1 inline-block" placeholder="?">
                            cm³
                        </p>
                        <button onclick="checkB113B3()" class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                        <div id="fb-b113-3" class="hidden mt-4 animate-slide-up"></div>
                    </div>
                    
                    <div class="w-full lg:w-1/2 flex justify-center">
                        <div class="bg-gray-50 rounded-3xl p-4 border border-gray-100">
                            <img src="hinh_anh/113_b3.png" alt="Hình lập phương xếp" class="max-w-full h-auto rounded-2xl max-h-[280px] object-contain"
                                onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%236366f1%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z%22/></svg>'">
                        </div>
                    </div>
                </div>

                <script>
                    window.checkB113B3 = function() {
                        var input = document.getElementById('b113-3-ans');
                        var fb = document.getElementById('fb-b113-3');
                        var val = input.value.trim();
                        fb.classList.remove('hidden');
                        if (!val) return;
                        if (val === '10') {
                            fb.innerHTML = '<div class="bg-emerald-50 text-emerald-700 p-4 rounded-2xl font-bold border border-emerald-200">✅ Tuyệt quá! 4 + 3 + 2 + 1 = 10 cm³.</div>';
                        } else {
                            fb.innerHTML = '<div class="bg-red-50 text-red-700 p-4 rounded-2xl font-bold border border-red-200">❌ Chưa đúng. Đếm kỹ từng bậc: 4 + 3 + 2 + 1 = ?</div>';
                        }
                    };
                </script>
            </section>

            <!-- ============================================ -->
            <!-- BÀI 4: SỐ ? (Đổi đơn vị) -->
            <!-- ============================================ -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-8">
                    <span class="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">4</span>
                    <h4 class="text-xl font-black text-gray-800">Số ?</h4>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    <!-- Row 1 -->
                    <div class="flex items-center gap-3 py-3">
                        <span class="text-lg font-bold text-gray-700 whitespace-nowrap">a) 5 m³ =</span>
                        <input type="text" id="b113-4-a1" class="w-24 bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-lg text-blue-700 focus:border-blue-500 outline-none" placeholder="?">
                        <span class="text-lg font-bold text-gray-700">dm³</span>
                        <button onclick="checkB113Conv('b113-4-a1','5000')" class="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                    <div class="flex items-center gap-3 py-3">
                        <span class="text-lg font-bold text-gray-700 whitespace-nowrap">480 dm³ =</span>
                        <input type="text" id="b113-4-a2" class="w-24 bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-lg text-blue-700 focus:border-blue-500 outline-none" placeholder="?">
                        <span class="text-lg font-bold text-gray-700">m³</span>
                        <button onclick="checkB113Conv('b113-4-a2','0,48')" class="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                    <!-- Row 2 -->
                    <div class="flex items-center gap-3 py-3">
                        <span class="text-lg font-bold text-gray-700 whitespace-nowrap">b) 0,25 m³ =</span>
                        <input type="text" id="b113-4-b1" class="w-24 bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-lg text-blue-700 focus:border-blue-500 outline-none" placeholder="?">
                        <span class="text-lg font-bold text-gray-700">cm³</span>
                        <button onclick="checkB113Conv('b113-4-b1','250000')" class="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                    <div class="flex items-center gap-3 py-3">
                        <span class="text-lg font-bold text-gray-700 whitespace-nowrap">5 000 cm³ =</span>
                        <input type="text" id="b113-4-b2" class="w-24 bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-lg text-blue-700 focus:border-blue-500 outline-none" placeholder="?">
                        <span class="text-lg font-bold text-gray-700">m³</span>
                        <button onclick="checkB113Conv('b113-4-b2','0,005')" class="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                    <!-- Row 3 -->
                    <div class="flex items-center gap-3 py-3">
                        <span class="text-lg font-bold text-gray-700 whitespace-nowrap">c) 1,9 dm³ =</span>
                        <input type="text" id="b113-4-c1" class="w-24 bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-lg text-blue-700 focus:border-blue-500 outline-none" placeholder="?">
                        <span class="text-lg font-bold text-gray-700">cm³</span>
                        <button onclick="checkB113Conv('b113-4-c1','1900')" class="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                    <div class="flex items-center gap-3 py-3">
                        <span class="text-lg font-bold text-gray-700 whitespace-nowrap">2 650 cm³ =</span>
                        <input type="text" id="b113-4-c2" class="w-24 bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-lg text-blue-700 focus:border-blue-500 outline-none" placeholder="?">
                        <span class="text-lg font-bold text-gray-700">dm³</span>
                        <button onclick="checkB113Conv('b113-4-c2','2,65')" class="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                </div>

                <script>
                    window.checkB113Conv = function(inputId, answer) {
                        var input = document.getElementById(inputId);
                        var val = (input.value || '').trim().replace(/\\s/g, '').replace(/,/g, '.');
                        var cleanAns = answer.replace(/\\s/g, '').replace(/,/g, '.');
                        if (!val) return;
                        if (val === cleanAns) {
                            input.classList.remove('border-gray-200', 'border-red-400');
                            input.classList.add('border-emerald-500', 'bg-emerald-50');
                        } else {
                            input.classList.remove('border-gray-200', 'border-emerald-500', 'bg-emerald-50');
                            input.classList.add('border-red-400', 'bg-red-50');
                        }
                    };
                </script>
            </section>

            <!-- ============================================ -->
            <!-- BÀI 5: SỐ ? (Bài toán thực tế) -->
            <!-- ============================================ -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">5</span>
                    <h4 class="text-xl font-black text-gray-800">Số ?</h4>
                </div>
                
                <div class="flex flex-col lg:flex-row gap-8">
                    <div class="w-full lg:w-2/3">
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6">
                            <p class="text-gray-700 font-medium leading-relaxed">
                                Rô-bốt có một cái thùng dạng hình hộp chữ nhật với chiều dài <strong class="text-blue-700">6 dm</strong>, chiều rộng <strong class="text-blue-700">4 dm</strong>, chiều cao <strong class="text-blue-700">3 dm</strong>.
                            </p>
                            <p class="text-gray-800 font-bold mt-4 text-lg">
                                Vậy Rô-bốt có thể xếp được 
                                <input type="number" id="b113-5-ans" class="w-20 bg-white border-2 border-gray-200 rounded-xl py-2 px-3 text-center text-xl font-black text-orange-700 focus:border-orange-500 outline-none transition-all mx-1 inline-block" placeholder="?">
                                hộp đèn hình lập phương có thể tích 1 dm³ để đầy chiếc thùng đó.
                            </p>
                        </div>

                        <!-- Trình bày lời giải -->
                        <div class="mb-4">
                            <p class="text-gray-600 font-bold text-sm mb-2">Trình bày lời giải:</p>
                            <textarea id="b113-5-explain" class="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 px-5 text-base font-medium text-gray-800 focus:border-blue-500 outline-none transition-all min-h-[120px] resize-none" placeholder="Hãy trình bày chi tiết tại đây..."></textarea>
                        </div>

                        <button onclick="checkB113B5()" class="w-10 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                        <div id="fb-b113-5" class="hidden mt-4 animate-slide-up"></div>
                    </div>
                    
                    <div class="w-full lg:w-1/3 flex justify-center items-start">
                        <div class="bg-gray-50 rounded-3xl p-4 border border-gray-100">
                            <img src="hinh_anh/113_b5.png" alt="Rô bốt xếp hàng" class="max-w-full h-auto rounded-2xl max-h-[300px] object-contain"
                                onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22%23f97316%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4%22/></svg>'">
                        </div>
                    </div>
                </div>

                <script>
                    window.checkB113B5 = function() {
                        var input = document.getElementById('b113-5-ans');
                        var fb = document.getElementById('fb-b113-5');
                        var val = input.value.trim();
                        fb.classList.remove('hidden');
                        if (!val) return;
                        if (val === '72') {
                            fb.innerHTML = '<div class="bg-emerald-50 text-emerald-700 p-4 rounded-2xl font-bold border border-emerald-200">✅ Hợp lý! Thể tích thùng: 6 x 4 x 3 = 72 dm³. Mỗi hộp 1 dm³ nên xếp được 72 hộp.</div>';
                        } else {
                            fb.innerHTML = '<div class="bg-red-50 text-red-700 p-4 rounded-2xl font-bold border border-red-200">❌ Tính lại nào! Em hãy tính V = Dài x Rộng x Cao trước nhé!</div>';
                        }
                    };
                </script>
            </section>

            <!-- ============================================ -->
            <!-- NỘP BÀI -->
            <!-- ============================================ -->
            <div class="flex items-center justify-between py-6 px-4">
                <p class="text-gray-400 font-bold text-sm">Bài tập thực hành chương Thể tích</p>
                <button id="btn-submit-all-practice-113" onclick="submitAllPractice113()" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-base uppercase tracking-wider shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center gap-2">
                    Nộp Bài
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                </button>
            </div>
            
            <script>
                window.submitAllPractice113 = function () {
                    var b1w1 = document.getElementById('b113-t1-write1') ? document.getElementById('b113-t1-write1').value : '';
                    var b1w3 = document.getElementById('b113-t1-write3') ? document.getElementById('b113-t1-write3').value : '';
                    var b1r4 = document.getElementById('b113-t1-read4') ? document.getElementById('b113-t1-read4').value : '';
                    
                    var b2 = window.b113_ans_2 || 'Chua chon';
                    var b3 = document.getElementById('b113-3-ans') ? document.getElementById('b113-3-ans').value : '';
                    
                    var b4a1 = document.getElementById('b113-4-a1') ? document.getElementById('b113-4-a1').value : '';
                    var b4a2 = document.getElementById('b113-4-a2') ? document.getElementById('b113-4-a2').value : '';
                    var b4b1 = document.getElementById('b113-4-b1') ? document.getElementById('b113-4-b1').value : '';
                    var b4b2 = document.getElementById('b113-4-b2') ? document.getElementById('b113-4-b2').value : '';
                    var b4c1 = document.getElementById('b113-4-c1') ? document.getElementById('b113-4-c1').value : '';
                    var b4c2 = document.getElementById('b113-4-c2') ? document.getElementById('b113-4-c2').value : '';
                    
                    var b5ans = document.getElementById('b113-5-ans') ? document.getElementById('b113-5-ans').value : '';
                    var b5exp = document.getElementById('b113-5-explain') ? document.getElementById('b113-5-explain').value : '';
                    
                    var summary = "BAI 48 - LUYEN TAP CHUNG (Tiet 113)\\n";
                    summary += "=====================================\\n";
                    summary += "[BAI 1] Doc/Viet:\\n";
                    summary += "- 100,05 m3: " + b1w1 + "\\n";
                    summary += "- 821 dm3: " + b1w3 + "\\n";
                    summary += "- 100,2 cm3: " + b1r4 + "\\n";
                    summary += "[BAI 2] Uoc luong: " + b2 + "\\n";
                    summary += "[BAI 3] Dem khoi: " + b3 + " cm3\\n";
                    summary += "[BAI 4] Doi don vi:\\n";
                    summary += "- 5m3=" + b4a1 + "dm3, 480dm3=" + b4a2 + "m3\\n";
                    summary += "- 0.25m3=" + b4b1 + "cm3, 5000cm3=" + b4b2 + "m3\\n";
                    summary += "- 1.9dm3=" + b4c1 + "cm3, 2650cm3=" + b4c2 + "dm3\\n";
                    summary += "[BAI 5] So hop: " + b5ans + "\\n";
                    summary += "Loi giai: " + b5exp + "\\n";
                    summary += "=====================================";
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson(summary, "Tong hop Bai 113", "btn-submit-all-practice-113");
                    } else {
                        alert("He thong da nhan bai lam cua em!");
                    }
                };
            </script>
        </div>`,
    "quizPool": [
        { "question": "Số đo 13,05 m³ viết bằng chữ là:", "options": ["Mười ba phẩy không năm mét khối", "Mười ba nghìn không trăm linh năm mét khối", "Mười ba phẩy năm mét khối", "Mười ba phẩy không không năm mét khối"], "answer": 0, "level": 1 },
        { "question": "Điền số thích hợp: 0,5 m³ = ... dm³", "options": ["5", "50", "500", "5000"], "answer": 2, "level": 2 },
        { "question": "Lớp học có thể tích khoảng 150 ... (chọn đơn vị phù hợp)", "options": ["cm³", "dm³", "m³", "lít"], "answer": 2, "level": 2 }
    ]
}; 
