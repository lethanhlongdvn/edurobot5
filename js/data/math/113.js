export const lesson113 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "113",
    "title": "LUYỆN TẬP CHUNG (Tiết 1)",
    "desc": "Bài 48: Ôn tập về đọc, viết, đổi đơn vị đo thể tích (Trang 38).",
    "content": `
        <div class="space-y-6 md:space-y-10 animate-fade-in">
            <div class="relative group overflow-hidden rounded-[48px] shadow-2xl bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-900 text-white p-8 md:p-14">
                <div class="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
                <div class="flex flex-col md:flex-row items-center gap-10 md:gap-14 relative z-10">
                    <div class="w-40 h-40 md:w-56 md:h-56 bg-white/10 backdrop-blur-xl rounded-[40px] flex items-center justify-center border-[10px] border-white/20 shadow-2xl animate-float">
                        <span class="text-7xl md:text-9xl filter drop-shadow-2xl">🧊</span>
                    </div>
                    <div class="text-center md:text-left flex-grow">
                        <div class="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-100 font-black uppercase tracking-[0.2em] text-xs md:text-sm border border-white/10 mb-6">
                            <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span> Bài 48 • Tiết 113
                        </div>
                        <h3 class="font-black text-4xl md:text-6xl mb-6 leading-[1.1] tracking-tight">Luyện tập chung<br><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-100">Đo lường thể tích</span></h3>
                        <p class="text-blue-100/80 font-bold text-lg md:text-2xl leading-relaxed max-w-2xl mb-10">Ôn tập đọc, viết và chuyển đổi các đơn vị đo thể tích.</p>
                        <button onclick="router.switchTab('practice')" class="group relative px-10 py-5 bg-white text-blue-700 rounded-3xl font-black text-xl shadow-2xl hover:shadow-blue-900/40 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto md:mx-0">
                            <span class="relative z-10 uppercase tracking-wider">Khám phá ngay</span>
                            <svg class="w-6 h-6 group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-8 bg-blue-50 rounded-[40px] border-2 border-blue-100"><div class="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-200">📏</div><h4 class="text-xl font-black text-blue-900 mb-2">Mét khối (m³)</h4><p class="text-blue-700 font-bold">1 m³ = 1 000 dm³</p></div>
                <div class="p-8 bg-indigo-50 rounded-[40px] border-2 border-indigo-100"><div class="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-indigo-200">📦</div><h4 class="text-xl font-black text-indigo-900 mb-2">Đề-xi-mét khối (dm³)</h4><p class="text-indigo-700 font-bold">1 dm³ = 1 000 cm³</p></div>
                <div class="p-8 bg-purple-50 rounded-[40px] border-2 border-purple-100"><div class="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-purple-200">🎲</div><h4 class="text-xl font-black text-purple-900 mb-2">Xăng-ti-mét khối (cm³)</h4><p class="text-purple-700 font-bold">1 m³ = 1 000 000 cm³</p></div>
            </div>
        </div>`,

    "practice": `
        <div class="space-y-10 py-4">

            <!-- BÀI 1: BẢNG ĐỌC VIẾT -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-8">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">1</span>
                    <h4 class="text-2xl font-black text-gray-800">Hoàn thành bảng sau.</h4>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-lg">
                        <thead>
                            <tr>
                                <th class="bg-red-50 text-red-700 font-black text-center py-4 px-6 border border-gray-200 w-[40%]">Đọc</th>
                                <th class="bg-red-50 text-red-700 font-black text-center py-4 px-6 border border-gray-200 w-[40%]">Viết</th>
                                <th class="bg-red-50 text-red-700 font-black text-center py-4 px-4 border border-gray-200 w-[20%]">Chấm</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-gray-200 py-4 px-6 text-gray-700 font-semibold text-lg">Một trăm phẩy không năm mét khối</td>
                                <td class="border border-gray-200 py-4 px-4"><input type="text" id="b113-t1-w1" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-center font-bold text-xl text-blue-800 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="border border-gray-200 text-center"><div class="flex items-center justify-center gap-2"><button onclick="c113('b113-t1-w1','100,05 m3','r1')" class="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button><span id="r1" class="font-black text-2xl"></span><button id="r1-retry" onclick="retry113('b113-t1-w1','r1')" class="hidden w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div></td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 py-4 px-4"><input type="text" id="b113-t1-r2" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-center font-bold text-xl text-blue-800 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="border border-gray-200 py-4 px-6 text-gray-700 font-bold text-center text-xl">0,015 m³</td>
                                <td class="border border-gray-200 text-center"><div class="flex items-center justify-center gap-2"><button onclick="c113Read('b113-t1-r2','không phẩy không trăm mười lăm mét khối','r2')" class="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button><span id="r2" class="font-black text-2xl"></span><button id="r2-retry" onclick="retry113('b113-t1-r2','r2')" class="hidden w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div></td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 py-4 px-6 text-gray-700 font-semibold text-lg">Tám trăm hai mươi mốt đề-xi-mét khối</td>
                                <td class="border border-gray-200 py-4 px-4"><input type="text" id="b113-t1-w3" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-center font-bold text-xl text-blue-800 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="border border-gray-200 text-center"><div class="flex items-center justify-center gap-2"><button onclick="c113('b113-t1-w3','821 dm3','r3')" class="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button><span id="r3" class="font-black text-2xl"></span><button id="r3-retry" onclick="retry113('b113-t1-w3','r3')" class="hidden w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div></td>
                            </tr>
                            <tr>
                                <td class="border border-gray-200 py-4 px-4"><input type="text" id="b113-t1-r4" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-4 text-center font-bold text-xl text-blue-800 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="border border-gray-200 py-4 px-6 text-gray-700 font-bold text-center text-xl">100,2 cm³</td>
                                <td class="border border-gray-200 text-center"><div class="flex items-center justify-center gap-2"><button onclick="c113Read('b113-t1-r4','một trăm phẩy hai xăng-ti-mét khối','r4')" class="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button><span id="r4" class="font-black text-2xl"></span><button id="r4-retry" onclick="retry113('b113-t1-r4','r4')" class="hidden w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- BÀI 2: CHỌN CÂU TRẢ LỜI ĐÚNG -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-4">
                    <span class="w-10 h-10 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">2</span>
                    <h4 class="text-2xl font-black text-gray-800">Chọn câu trả lời đúng.</h4>
                </div>
                <p class="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">Thể tích của khối băng có dạng hình lập phương trong hình vẽ khoảng:</p>
                <div class="flex flex-col sm:flex-row items-center gap-4 mb-4">
                    <select id="b113-2-sel" class="w-full sm:w-96 bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 px-6 font-bold text-xl text-gray-700 outline-none focus:border-blue-500 appearance-none cursor-pointer">
                        <option value="">Chọn đáp án...</option>
                        <option value="A">A. 1 cm³</option>
                        <option value="B">B. 1 dm³</option>
                        <option value="C">C. 1 m³</option>
                    </select>
                    <button onclick="c113Sel()" class="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button>
                    <span id="r-b2" class="font-black text-2xl"></span>
                    <button id="r-b2-retry" onclick="retry113Sel()" class="hidden w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                </div>
            </section>

            <!-- BÀI 3: ĐẾM KHỐI -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">3</span>
                    <h4 class="text-2xl font-black text-gray-800">Số ?</h4>
                </div>
                <div class="flex flex-col lg:flex-row items-center gap-10">
                    <div class="w-full lg:w-1/2">
                        <p class="text-xl font-medium text-gray-700 mb-4">Rô-bốt đã xếp các hình lập phương 1 cm³ thành hình bên.</p>
                        <div class="flex items-center gap-3 flex-wrap mb-2">
                            <span class="text-xl font-bold text-gray-800">Thể tích của hình bên là:</span>
                            <input type="number" id="b113-3-ans" class="w-24 bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-3 text-center text-2xl font-black text-blue-700 focus:border-blue-500 outline-none" placeholder="?">
                            <span class="text-xl font-bold text-gray-800">cm³</span>
                            <button onclick="c113Num('b113-3-ans','44','r-b3')" class="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button>
                            <span id="r-b3" class="font-black text-2xl"></span>
                            <button id="r-b3-retry" onclick="retry113('b113-3-ans','r-b3')" class="hidden w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 flex justify-center">
                        <div class="bg-gray-50 rounded-3xl p-4 border border-gray-100">
                            <img src="hinh_anh/113_b3.png" alt="Hình xếp khối" class="max-w-full h-auto rounded-2xl max-h-[300px] object-contain">
                        </div>
                    </div>
                </div>
            </section>

            <!-- BÀI 4: ĐỔI ĐƠN VỊ - THẲNG CỘT -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-8">
                    <span class="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">4</span>
                    <h4 class="text-2xl font-black text-gray-800">Số ?</h4>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full border-collapse text-lg">
                        <tbody>
                            <tr>
                                <td class="py-3 pr-2 text-right font-bold text-gray-700 whitespace-nowrap w-[30%]">a) 5 m³ =</td>
                                <td class="py-3 w-[15%]"><input type="text" id="b113-4a1" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-xl text-blue-700 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="py-3 pl-2 font-bold text-gray-700 w-[10%]">dm³</td>
                                <td class="py-3 text-center w-[5%]"><button onclick="c113Num('b113-4a1','5000','r-4a1')" class="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button></td>
                                <td class="py-3 w-[5%]"><span id="r-4a1" class="font-black text-xl"></span></td>
                                <td class="py-3 w-[3%]"><button id="r-4a1-retry" onclick="retry113('b113-4a1','r-4a1')" class="hidden w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></td>
                            </tr>
                            <tr>
                                <td class="py-3 pr-2 text-right font-bold text-gray-700 whitespace-nowrap">480 dm³ =</td>
                                <td class="py-3"><input type="text" id="b113-4a2" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-xl text-blue-700 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="py-3 pl-2 font-bold text-gray-700">m³</td>
                                <td class="py-3 text-center"><button onclick="c113Num('b113-4a2','0,48','r-4a2')" class="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button></td>
                                <td class="py-3"><span id="r-4a2" class="font-black text-xl"></span></td>
                                <td class="py-3"><button id="r-4a2-retry" onclick="retry113('b113-4a2','r-4a2')" class="hidden w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></td>
                            </tr>
                            <tr>
                                <td class="py-3 pr-2 text-right font-bold text-gray-700 whitespace-nowrap">b) 0,25 m³ =</td>
                                <td class="py-3"><input type="text" id="b113-4b1" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-xl text-blue-700 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="py-3 pl-2 font-bold text-gray-700">cm³</td>
                                <td class="py-3 text-center"><button onclick="c113Num('b113-4b1','250000','r-4b1')" class="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button></td>
                                <td class="py-3"><span id="r-4b1" class="font-black text-xl"></span></td>
                                <td class="py-3"><button id="r-4b1-retry" onclick="retry113('b113-4b1','r-4b1')" class="hidden w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></td>
                            </tr>
                            <tr>
                                <td class="py-3 pr-2 text-right font-bold text-gray-700 whitespace-nowrap">5 000 cm³ =</td>
                                <td class="py-3"><input type="text" id="b113-4b2" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-xl text-blue-700 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="py-3 pl-2 font-bold text-gray-700">m³</td>
                                <td class="py-3 text-center"><button onclick="c113Num('b113-4b2','0,005','r-4b2')" class="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button></td>
                                <td class="py-3"><span id="r-4b2" class="font-black text-xl"></span></td>
                                <td class="py-3"><button id="r-4b2-retry" onclick="retry113('b113-4b2','r-4b2')" class="hidden w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></td>
                            </tr>
                            <tr>
                                <td class="py-3 pr-2 text-right font-bold text-gray-700 whitespace-nowrap">c) 1,9 dm³ =</td>
                                <td class="py-3"><input type="text" id="b113-4c1" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-xl text-blue-700 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="py-3 pl-2 font-bold text-gray-700">cm³</td>
                                <td class="py-3 text-center"><button onclick="c113Num('b113-4c1','1900','r-4c1')" class="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button></td>
                                <td class="py-3"><span id="r-4c1" class="font-black text-xl"></span></td>
                                <td class="py-3"><button id="r-4c1-retry" onclick="retry113('b113-4c1','r-4c1')" class="hidden w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></td>
                            </tr>
                            <tr>
                                <td class="py-3 pr-2 text-right font-bold text-gray-700 whitespace-nowrap">2 650 cm³ =</td>
                                <td class="py-3"><input type="text" id="b113-4c2" class="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-2 px-3 text-center font-bold text-xl text-blue-700 focus:border-blue-500 outline-none" placeholder="?"></td>
                                <td class="py-3 pl-2 font-bold text-gray-700">dm³</td>
                                <td class="py-3 text-center"><button onclick="c113Num('b113-4c2','2,65','r-4c2')" class="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button></td>
                                <td class="py-3"><span id="r-4c2" class="font-black text-xl"></span></td>
                                <td class="py-3"><button id="r-4c2-retry" onclick="retry113('b113-4c2','r-4c2')" class="hidden w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- BÀI 5: BÀI TOÁN - CHỮ TO, BỎ ẢNH -->
            <section class="bg-white rounded-[32px] p-6 md:p-10 shadow-lg border border-gray-100">
                <div class="flex items-center gap-3 mb-6">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black text-lg shadow-md">5</span>
                    <h4 class="text-2xl font-black text-gray-800">Số ?</h4>
                </div>
                <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-6">
                    <p class="text-2xl font-medium text-gray-800 leading-relaxed">Rô-bốt có một cái thùng dạng hình hộp chữ nhật với chiều dài <strong class="text-blue-700 text-3xl">6 dm</strong>, chiều rộng <strong class="text-blue-700 text-3xl">4 dm</strong>, chiều cao <strong class="text-blue-700 text-3xl">3 dm</strong>.</p>
                </div>
                <div class="flex items-center gap-3 flex-wrap mb-6">
                    <span class="text-2xl font-bold text-gray-800">Vậy Rô-bốt có thể xếp được</span>
                    <input type="number" id="b113-5-ans" class="w-24 bg-gray-50 border-2 border-gray-200 rounded-xl py-3 px-3 text-center text-2xl font-black text-orange-700 focus:border-orange-500 outline-none" placeholder="?">
                    <span class="text-2xl font-bold text-gray-800">hộp đèn hình lập phương có thể tích 1 dm³ để đầy chiếc thùng đó.</span>
                    <button onclick="c113Num('b113-5-ans','72','r-b5')" class="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-sm shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></button>
                    <span id="r-b5" class="font-black text-2xl"></span>
                    <button id="r-b5-retry" onclick="retry113('b113-5-ans','r-b5')" class="hidden w-9 h-9 bg-gray-200 hover:bg-gray-300 rounded-lg flex items-center justify-center transition-all active:scale-90" title="Làm lại"><svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button>
                </div>
                <div class="mb-4">
                    <p class="text-xl text-gray-600 font-bold mb-2">Trình bày lời giải:</p>
                    <textarea id="b113-5-exp" class="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 px-5 text-xl font-medium text-gray-800 focus:border-blue-500 outline-none min-h-[120px] resize-none" placeholder="Hãy trình bày chi tiết tại đây..."></textarea>
                </div>
            </section>

            <!-- NỘP BÀI -->
            <div class="flex items-center justify-between py-6 px-4">
                <p class="text-gray-400 font-bold text-sm">Bài tập thực hành chương Thể tích</p>
                <button id="btn-submit-all-practice-113" onclick="submitAllPractice113()" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-black text-base uppercase tracking-wider shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center gap-2">Nộp Bài <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg></button>
            </div>

            <!-- SCRIPTS -->
            <script>
                // Check write answer (normalize spaces, commas, superscript)
                window.c113 = function(inputId, answer, rId) {
                    var el = document.getElementById(inputId);
                    var sp = document.getElementById(rId);
                    var retryBtn = document.getElementById(rId + '-retry');
                    if (!el || !sp) return;
                    var val = (el.value||'').trim().replace(/\\s+/g,' ').toLowerCase().replace(/³/g,'3');
                    var ans = answer.toLowerCase().replace(/³/g,'3');
                    if (!val) return;
                    if (val === ans) {
                        sp.textContent = 'Đ'; sp.className = 'font-black text-2xl text-emerald-600';
                        el.classList.add('border-emerald-500','bg-emerald-50');
                        el.classList.remove('border-gray-200','border-red-400','bg-red-50');
                    } else {
                        sp.textContent = 'S'; sp.className = 'font-black text-2xl text-red-600';
                        el.classList.add('border-red-400','bg-red-50');
                        el.classList.remove('border-gray-200','border-emerald-500','bg-emerald-50');
                    }
                    if (retryBtn) retryBtn.classList.remove('hidden');
                };
                // Check reading answer (flexible matching)
                window.c113Read = function(inputId, answer, rId) {
                    var el = document.getElementById(inputId);
                    var sp = document.getElementById(rId);
                    var retryBtn = document.getElementById(rId + '-retry');
                    if (!el || !sp) return;
                    var val = (el.value||'').trim().toLowerCase().replace(/-/g,' ').replace(/\\s+/g,' ');
                    var ans = answer.toLowerCase().replace(/-/g,' ').replace(/\\s+/g,' ');
                    if (!val) return;
                    if (val === ans || val.replace(/\\s/g,'') === ans.replace(/\\s/g,'')) {
                        sp.textContent = 'Đ'; sp.className = 'font-black text-2xl text-emerald-600';
                        el.classList.add('border-emerald-500','bg-emerald-50');
                        el.classList.remove('border-gray-200','border-red-400','bg-red-50');
                    } else {
                        sp.textContent = 'S'; sp.className = 'font-black text-2xl text-red-600';
                        el.classList.add('border-red-400','bg-red-50');
                        el.classList.remove('border-gray-200','border-emerald-500','bg-emerald-50');
                    }
                    if (retryBtn) retryBtn.classList.remove('hidden');
                };
                // Check numeric/conversion
                window.c113Num = function(inputId, answer, rId) {
                    var el = document.getElementById(inputId);
                    var sp = document.getElementById(rId);
                    var retryBtn = document.getElementById(rId + '-retry');
                    if (!el || !sp) return;
                    var val = (el.value||'').trim().replace(/\\s/g,'').replace(/,/g,'.');
                    var ans = answer.replace(/\\s/g,'').replace(/,/g,'.');
                    if (!val) return;
                    if (val === ans) {
                        sp.textContent = 'Đ'; sp.className = 'font-black text-2xl text-emerald-600';
                        el.classList.add('border-emerald-500','bg-emerald-50');
                        el.classList.remove('border-gray-200','border-red-400','bg-red-50');
                    } else {
                        sp.textContent = 'S'; sp.className = 'font-black text-2xl text-red-600';
                        el.classList.add('border-red-400','bg-red-50');
                        el.classList.remove('border-gray-200','border-emerald-500','bg-emerald-50');
                    }
                    if (retryBtn) retryBtn.classList.remove('hidden');
                };
                // Check select Bai 2
                window.c113Sel = function() {
                    var sel = document.getElementById('b113-2-sel');
                    var sp = document.getElementById('r-b2');
                    var retryBtn = document.getElementById('r-b2-retry');
                    if (!sel || !sp) return;
                    var val = sel.value;
                    if (!val) return;
                    if (val === 'C') {
                        sp.textContent = 'Đ'; sp.className = 'font-black text-2xl text-emerald-600';
                        sel.classList.add('border-emerald-500','bg-emerald-50');
                        sel.classList.remove('border-gray-200','border-red-400','bg-red-50');
                    } else {
                        sp.textContent = 'S'; sp.className = 'font-black text-2xl text-red-600';
                        sel.classList.add('border-red-400','bg-red-50');
                        sel.classList.remove('border-gray-200','border-emerald-500','bg-emerald-50');
                    }
                    if (retryBtn) retryBtn.classList.remove('hidden');
                };
                window.retry113Sel = function() {
                    var sel = document.getElementById('b113-2-sel');
                    var sp = document.getElementById('r-b2');
                    var retryBtn = document.getElementById('r-b2-retry');
                    if (sel) { sel.value = ''; sel.className = sel.className.replace(/border-emerald-500|bg-emerald-50|border-red-400|bg-red-50/g,'').trim(); sel.classList.add('border-gray-200'); }
                    if (sp) { sp.textContent = ''; }
                    if (retryBtn) retryBtn.classList.add('hidden');
                };
                // Retry generic
                window.retry113 = function(inputId, rId) {
                    var el = document.getElementById(inputId);
                    var sp = document.getElementById(rId);
                    var retryBtn = document.getElementById(rId + '-retry');
                    if (el) { el.value = ''; el.className = el.className.replace(/border-emerald-500|bg-emerald-50|border-red-400|bg-red-50/g,'').trim(); el.classList.add('border-gray-200'); }
                    if (sp) sp.textContent = '';
                    if (retryBtn) retryBtn.classList.add('hidden');
                };
                // Submit all
                window.submitAllPractice113 = function() {
                    var s = "BAI 48 - TIET 113\\n";
                    s += "[B1] " + (document.getElementById('b113-t1-w1')||{}).value + " | " + (document.getElementById('b113-t1-r2')||{}).value + " | " + (document.getElementById('b113-t1-w3')||{}).value + " | " + (document.getElementById('b113-t1-r4')||{}).value + "\\n";
                    s += "[B2] " + (document.getElementById('b113-2-sel')||{}).value + "\\n";
                    s += "[B3] " + (document.getElementById('b113-3-ans')||{}).value + "\\n";
                    s += "[B4] " + (document.getElementById('b113-4a1')||{}).value + "|" + (document.getElementById('b113-4a2')||{}).value + "|" + (document.getElementById('b113-4b1')||{}).value + "|" + (document.getElementById('b113-4b2')||{}).value + "|" + (document.getElementById('b113-4c1')||{}).value + "|" + (document.getElementById('b113-4c2')||{}).value + "\\n";
                    s += "[B5] " + (document.getElementById('b113-5-ans')||{}).value + " | " + (document.getElementById('b113-5-exp')||{}).value;
                    if (window.submitMathLesson) { window.submitMathLesson(s, "Bai 113", "btn-submit-all-practice-113"); }
                    else { alert("Da nhan bai!"); }
                };
            </script>
        </div>`,
    "quizPool": [
        { "question": "Số đo 13,05 m³ viết bằng chữ là:", "options": ["Mười ba phẩy không năm mét khối", "Mười ba nghìn không trăm linh năm mét khối", "Mười ba phẩy năm mét khối", "Mười ba phẩy không không năm mét khối"], "answer": 0, "level": 1 },
        { "question": "Điền số thích hợp: 0,5 m³ = ... dm³", "options": ["5", "50", "500", "5000"], "answer": 2, "level": 2 },
        { "question": "Lớp học có thể tích khoảng 150 ... (chọn đơn vị phù hợp)", "options": ["cm³", "dm³", "m³", "lít"], "answer": 2, "level": 2 }
    ]
};
