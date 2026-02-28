export const lesson112 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "112",
    "title": "LUYỆN TẬP: MÉT KHỐI",
    "desc": "Thực hành viết, đổi đơn vị đo thể tích và giải bài toán thực thực tế tính tiền nước.",
    "content": `
        <div class="space-y-6 md:space-y-10 animate-fade-in">
            <!-- Header Card Section -->
            <div class="relative group overflow-hidden rounded-[48px] shadow-2xl bg-gradient-to-br from-indigo-600 via-blue-700 to-blue-900 text-white p-8 md:p-14">
                <div class="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl mix-blend-overlay group-hover:scale-110 transition-transform duration-1000"></div>
                
                <div class="flex flex-col md:flex-row items-center gap-10 md:gap-14 relative z-10">
                    <div class="w-40 h-40 md:w-48 md:h-48 bg-white/10 backdrop-blur-xl rounded-[40px] flex items-center justify-center border-[8px] border-white/20 shadow-2xl animate-float">
                        <span class="text-7xl md:text-8xl filter drop-shadow-2xl">📏</span>
                    </div>
                    
                    <div class="text-center md:text-left flex-grow">
                        <div class="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-100 font-black uppercase tracking-[0.2em] text-xs md:text-sm border border-white/10 mb-6">
                            Bài 47 • Luyện tập tiết 112
                        </div>
                        <h3 class="font-black text-4xl md:text-6xl mb-6 leading-[1.1] tracking-tight">
                            Luyện tập chuyên sâu<br>
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Đơn vị Mét khối</span>
                        </h3>
                        <p class="text-blue-100/80 font-bold text-lg md:text-2xl leading-relaxed max-w-2xl">
                            Cùng Rô-bốt ôn tập lại cách sử dụng các đơn vị đo thể tích và giải quyết bài toán tính tiền nước thực tế nhé!
                        </p>
                    </div>
                </div>
            </div>

            <!-- Objective Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-blue-50 p-8 rounded-[40px] border-2 border-blue-100 flex items-start gap-6 shadow-sm">
                    <div class="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-200 shrink-0">🎯</div>
                    <div>
                        <h4 class="text-xl font-black text-blue-900 mb-2">Mục tiêu 1</h4>
                        <p class="text-blue-800 font-bold text-lg">Thành thạo kỹ năng đọc, viết và chuyển đổi giữa m³, dm³, cm³.</p>
                    </div>
                </div>
                <div class="bg-emerald-50 p-8 rounded-[40px] border-2 border-emerald-100 flex items-start gap-6 shadow-sm">
                    <div class="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-emerald-200 shrink-0">💰</div>
                    <div>
                        <h4 class="text-xl font-black text-emerald-900 mb-2">Mục tiêu 2</h4>
                        <p class="text-emerald-800 font-bold text-lg">Vận dụng giải bài toán tính tiền nước sinh hoạt theo các mức giá khác nhau.</p>
                    </div>
                </div>
            </div>

            <!-- Memory Anchor -->
            <div class="p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-2xl relative overflow-hidden text-center">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <h4 class="text-xl font-black mb-8 relative z-10 flex items-center justify-center gap-3">
                    <span class="bg-white/20 p-2 rounded-lg">🔄</span> BẢNG QUY ĐỔI THỂ TÍCH QUAN TRỌNG
                </h4>
                <div class="inline-flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-white/10 backdrop-blur-xl p-8 rounded-[32px] border border-white/20 relative z-10">
                    <div class="flex flex-col">
                        <span class="text-4xl md:text-6xl font-black tracking-tighter">1 m³</span>
                        <span class="text-blue-300 font-bold uppercase tracking-widest text-xs mt-2">Bằng</span>
                    </div>
                    <div class="text-4xl md:text-5xl font-black text-yellow-300">1 000 dm³</div>
                    <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                    </div>
                    <div class="text-4xl md:text-5xl font-black text-yellow-300">1 000 000 cm³</div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-16 py-10">
            <!-- Section 1: Chọn đơn vị phù hợp -->
            <section>
                <div class="inline-flex items-center gap-4 bg-blue-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-blue-200">
                    <span class="text-3xl">1️⃣</span> Chọn số đo phù hợp
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Hộp 1 -->
                    <div class="bg-white rounded-[40px] p-8 border-2 border-gray-100 shadow-xl hover:border-blue-500 transition-all group flex flex-col items-center">
                        <div class="w-32 h-32 bg-yellow-50 rounded-3xl flex items-center justify-center mb-8 border border-yellow-100 group-hover:scale-110 transition-transform">
                             <img src="hinh_anh/toan/112-b1-1.png" alt="Hộp nhỏ" class="w-20 h-20 object-contain drop-shadow-md">
                        </div>
                        <h4 class="text-lg font-black text-gray-800 mb-6">Hộp phấn nhỏ</h4>
                        <select id="b112-1a" class="w-full bg-gray-50 border-4 border-gray-100 rounded-2xl py-4 px-6 font-black text-xl text-center text-blue-900 outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                            <option value="">-- Chọn --</option>
                            <option value="1 cm3">1 cm³</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>

                    <!-- Hộp 2 -->
                    <div class="bg-white rounded-[40px] p-8 border-2 border-gray-100 shadow-xl hover:border-blue-500 transition-all group flex flex-col items-center">
                        <div class="w-32 h-32 bg-blue-50 rounded-3xl flex items-center justify-center mb-8 border border-blue-100 group-hover:scale-110 transition-transform">
                             <img src="hinh_anh/toan/112-b1-2.png" alt="Hộp vừa" class="w-24 h-24 object-contain drop-shadow-md">
                        </div>
                        <h4 class="text-lg font-black text-gray-800 mb-6">Chiếc máy giặt</h4>
                        <select id="b112-1b" class="w-full bg-gray-50 border-4 border-gray-100 rounded-2xl py-4 px-6 font-black text-xl text-center text-blue-900 outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                            <option value="">-- Chọn --</option>
                            <option value="1 cm3">1 cm³</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>

                    <!-- Hộp 3 -->
                    <div class="bg-white rounded-[40px] p-8 border-2 border-gray-100 shadow-xl hover:border-blue-500 transition-all group flex flex-col items-center">
                        <div class="w-32 h-32 bg-emerald-50 rounded-3xl flex items-center justify-center mb-8 border border-emerald-100 group-hover:scale-110 transition-transform">
                             <img src="hinh_anh/toan/112-b1-3.png" alt="Thùng to" class="w-28 h-20 object-contain drop-shadow-md">
                        </div>
                        <h4 class="text-lg font-black text-gray-800 mb-6">Thùng Container</h4>
                        <select id="b112-1c" class="w-full bg-gray-50 border-4 border-gray-100 rounded-2xl py-4 px-6 font-black text-xl text-center text-blue-900 outline-none focus:border-blue-500 transition-all appearance-none cursor-pointer">
                            <option value="">-- Chọn --</option>
                            <option value="1 cm3">1 cm³</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                        </select>
                    </div>
                </div>

                <div class="mt-8 flex justify-center">
                    <button onclick="checkB112B1(this)" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-3xl font-black text-lg uppercase tracking-widest shadow-xl shadow-blue-200 transition-all active:scale-95 group">
                        Kiểm tra kết quả
                    </button>
                </div>
                <div id="fb-b112-1" class="hidden mt-6 animate-slide-up text-center"></div>

                <script>
                    window.checkB112B1 = function(btn) {
                        var a = document.getElementById('b112-1a').value;
                        var b = document.getElementById('b112-1b').value;
                        var c = document.getElementById('b112-1c').value;
                        var fb = document.getElementById('fb-b112-1');
                        
                        fb.classList.remove('hidden');
                        if(!a || !b || !c) {
                            fb.innerHTML = '<div class="bg-amber-100 text-amber-800 p-6 rounded-3xl font-bold border-2 border-amber-200">⚠️ Bạn hãy chọn đủ 3 đáp án nhé!</div>';
                            return;
                        }

                        var correct = (a === '1 cm3' && b === '1 dm3' && c === '1 m3');
                        if(correct) {
                            fb.innerHTML = '<div class="bg-emerald-100 text-emerald-800 p-6 rounded-3xl font-black border-2 border-emerald-200 text-xl">✨ QUÁ CHÍNH XÁC! Bạn thật là tinh mắt.</div>';
                            btn.classList.replace('bg-blue-600', 'bg-emerald-600');
                        } else {
                            fb.innerHTML = '<div class="bg-red-100 text-red-800 p-6 rounded-3xl font-bold border-2 border-red-200">🤔 Có chỗ chưa đúng rồi. Hãy quan sát kỹ kích thước thực tế của đồ vật nhé!</div>';
                        }
                    };
                </script>
            </section>

            <!-- Section 2: Chuyển đổi đơn vị -->
            <section>
                <div class="inline-flex items-center gap-4 bg-indigo-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-indigo-200 -rotate-1">
                    <span class="text-3xl">2️⃣</span> Thợ săn Số đo (Số?)
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div class="bg-white p-8 rounded-[48px] border-2 border-blue-50 shadow-xl">
                        <div class="flex items-center gap-3 mb-8">
                            <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">a</span>
                            <h4 class="text-xl font-black text-gray-800 tracking-tight">Viết theo đơn vị <span class="text-blue-600 underline">đề-xi-mét khối</span></h4>
                        </div>
                        <div class="space-y-6">
                            [[CONV_EX|b112-2a-1|2,5 m³|dm³|2500]]
                            [[CONV_EX|b112-2a-2|3 900 cm³|dm³|3,9]]
                        </div>
                    </div>

                    <div class="bg-white p-8 rounded-[48px] border-2 border-indigo-50 shadow-xl">
                        <div class="flex items-center gap-3 mb-8">
                            <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">b</span>
                            <h4 class="text-xl font-black text-gray-800 tracking-tight">Viết theo đơn vị <span class="text-indigo-600 underline">mét khối</span></h4>
                        </div>
                        <div class="space-y-6">
                            [[CONV_EX|b112-2b-1|4 600 dm³|m³|4,6]]
                            [[CONV_EX|b112-2b-2|7 500 000 cm³|m³|7,5]]
                        </div>
                    </div>
                </div>
            </section>

            <!-- Section 3: Tính toán -->
            <section>
                <div class="inline-flex items-center gap-4 bg-purple-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-purple-200 rotate-1">
                    <span class="text-3xl">3️⃣</span> Phép tính Thể tích
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-2 border-4 border-dashed border-purple-100 rounded-[48px]">
                        [[MATH_EX|b112-3a-1|3,5 m³ + 6,05 m³|Tính tổng|bằng|9,55 m3]]
                    </div>
                    <div class="p-2 border-4 border-dashed border-pink-100 rounded-[48px]">
                        [[MATH_EX|b112-3b-1|8,5 m³ × 0,5|Tính tích|bằng|4,25 m3]]
                    </div>
                    <div class="p-2 border-4 border-dashed border-blue-100 rounded-[48px]">
                        [[MATH_EX|b112-3a-2|1 000 m³ – 510 m³|Tính hiệu|bằng|490 m3]]
                    </div>
                    <div class="p-2 border-4 border-dashed border-emerald-100 rounded-[48px]">
                        [[MATH_EX|b112-3b-2|1 875 m³ : 5|Tính thương|bằng|375 m3]]
                    </div>
                </div>
            </section>

            <!-- Section 4: Tính tiền nước (Premium Word Problem) -->
            <section>
                <div class="inline-flex items-center gap-4 bg-orange-600 text-white px-8 py-4 rounded-3xl font-black text-xl uppercase tracking-widest mb-10 shadow-xl shadow-orange-200">
                    <span class="text-3xl">4️⃣</span> Bài toán Thực tế: Tiền Nước
                </div>

                <div class="bg-white rounded-[48px] border-4 border-orange-100 p-8 md:p-14 relative overflow-hidden shadow-2xl">
                    <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl opacity-60"></div>
                    
                    <div class="space-y-10 relative z-10">
                        <!-- Hàng 1: Bảng giá (trái) + Thử thách (phải) -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div class="bg-blue-50 p-8 rounded-[40px] border-2 border-blue-100">
                                <h5 class="text-blue-900 font-black text-xl mb-6 flex items-center gap-3">
                                    <span class="text-2xl">📋</span> Bảng giá nước sinh hoạt:
                                </h5>
                                <div class="space-y-3 font-bold text-gray-700">
                                    <div class="flex justify-between bg-white p-4 rounded-2xl shadow-sm">
                                        <span>💧 10 m³ đầu tiên</span>
                                        <span class="text-blue-600">5 973 đ/m³</span>
                                    </div>
                                    <div class="flex justify-between bg-white p-4 rounded-2xl shadow-sm">
                                        <span>💧 Từ 11 m³ đến 20 m³</span>
                                        <span class="text-blue-600">7 052 đ/m³</span>
                                    </div>
                                    <div class="flex justify-between bg-white p-4 rounded-2xl shadow-sm">
                                        <span>💧 Từ 21 m³ đến 30 m³</span>
                                        <span class="text-blue-600">8 669 đ/m³</span>
                                    </div>
                                    <div class="flex justify-between bg-white p-4 rounded-2xl shadow-sm">
                                        <span>💧 Trên 30 m³</span>
                                        <span class="text-blue-600">15 929 đ/m³</span>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-orange-50/50 p-8 rounded-[40px] border-2 border-orange-100 flex flex-col justify-center">
                                <p class="text-2xl font-black text-orange-900 leading-tight mb-4 tracking-tighter italic">🤔 THỬ THÁCH CHO BẠN:</p>
                                <p class="text-xl font-medium text-gray-800 leading-relaxed text-justify">
                                    Tháng trước nhà Việt dùng hết <strong class="text-blue-700 font-black text-3xl">15 m³</strong> nước. Việt hãy tính xem tháng đó gia đình mình phải trả bao nhiêu tiền nước nhé?
                                </p>
                            </div>
                        </div>

                        <!-- Hàng 2: Ô nhập bài làm + Nút chấm (full width) -->
                        <div class="space-y-6">
                            <div class="relative">
                                <textarea id="ans-b112-4-text" class="w-full bg-gray-50 border-4 border-gray-100 rounded-[40px] p-8 text-xl font-bold text-gray-800 focus:border-blue-500 outline-none transition-all placeholder:text-gray-300 shadow-inner min-h-[200px]" placeholder="Trình bày bài giải của bạn tại đây..."></textarea>
                                
                                <button onclick="toggleSpeechRec_112()" class="absolute right-6 bottom-6 w-16 h-16 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-[24px] flex items-center justify-center transition-all shadow-md active:scale-95 border border-blue-100">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                            </div>
                            
                            <button onclick="checkLesson112B4_Text(this)" class="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 rounded-3xl font-black text-xl uppercase tracking-widest shadow-xl shadow-orange-200 transition-all flex justify-center items-center gap-3 group active:scale-95">
                                EduRobot Chấm Điểm
                                <span class="group-hover:translate-x-2 transition-transform">🤖</span>
                            </button>
                            <div id="fb-b112-4-ai" class="hidden w-full animate-slide-up"></div>
                        </div>
                    </div>
                </div>

                <script>
                    window.checkLesson112B4_Text = async function(btn) {
                        var input = document.getElementById('ans-b112-4-text');
                        var fb = document.getElementById('fb-b112-4-ai');
                        var val = input.value.trim();
                        if(!val) { alert("Nhập bài giải trước nha!"); return; }

                        var og = btn.innerHTML;
                        btn.disabled = true;
                        btn.innerHTML = '<div class="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>';
                        
                        fb.classList.remove('hidden');
                        fb.innerHTML = '<div class="bg-gray-100 p-6 rounded-3xl font-bold italic animate-pulse">EduRobot đang nghiên cứu lời giải của bạn...</div>';

                        try {
                            var req = "Hãy chấm bài toán tính tiền nước. Đề bài: 15 m3 nước. 10 m3 đầu giá 5973, 5 m3 sau giá 7052. Tổng tiền đúng là 10*5973 + 5*7052 = 94990 đồng. Hãy đóng vai thầy giáo tiểu học nhận xét vui vẻ, khích lệ.";
                            var res = await AI.tutor(val, "Toán 5 - Tiết 112", req);
                            var feedbackHtml = '<div class="bg-white border-4 border-orange-500 p-8 rounded-[40px] shadow-2xl relative">' +
                                '<div class="absolute -top-4 left-8 px-4 py-1 bg-orange-600 text-white text-xs font-black uppercase rounded-full">KẾT QUẢ CHẤM BÀI</div>' +
                                '<div class="text-gray-800 font-medium leading-relaxed">' + res.replace(/\\n/g, '<br>') + '</div>' +
                                '</div>';
                            fb.innerHTML = feedbackHtml;
                        } catch(e) {
                            fb.innerHTML = '<div class="text-red-500 font-bold p-4">Lỗi kết nối AI.</div>';
                        } finally {
                            btn.disabled = false;
                            btn.innerHTML = og;
                        }
                    };

                    window.toggleSpeechRec_112 = function() {
                        if (!('webkitSpeechRecognition' in window)) { alert("Trình duyệt không hỗ trợ giọng nói."); return; }
                        var recognition = new webkitSpeechRecognition();
                        recognition.lang = 'vi-VN';
                        recognition.onresult = function(e) {
                            document.getElementById('ans-b112-4-text').value += ' ' + e.results[0][0].transcript;
                        };
                        recognition.start();
                    };
                </script>
            </section>

            <!-- Final Submission -->
            <div class="mt-20 bg-gray-900 p-10 md:p-16 rounded-[56px] shadow-3xl flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden group">
                <div class="absolute inset-0 bg-white/5 opacity-30"></div>
                
                <div class="relative z-10 text-center md:text-left">
                    <h3 class="text-white font-black text-3xl md:text-5xl mb-4 tracking-tight uppercase">Kết thúc Luyện tập 112!</h3>
                    <p class="text-gray-400 font-bold text-lg md:text-2xl max-w-xl">Hệ thống sẽ tổng hợp toàn bộ năng lực của em ngày hôm nay để báo cáo Thầy Cô!</p>
                </div>
                
                <button id="btn-submit-all-practice-112" onclick="submitAllPractice112()" class="relative z-10 w-full md:w-auto bg-white text-gray-900 px-12 py-6 rounded-3xl font-black text-2xl uppercase tracking-widest shadow-2xl hover:-translate-y-2 transition-all active:scale-95 flex items-center justify-center gap-4">
                    NỘP BÀI HOÀN TẤT
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
            </div>
        </div>
    `,
    "quizPool": []
};

// Global Submit Function
window.submitAllPractice112 = function () {
    var b1a = document.getElementById('b112-1a') ? document.getElementById('b112-1a').value : "";
    var b1b = document.getElementById('b112-1b') ? document.getElementById('b112-1b').value : "";
    var b1c = document.getElementById('b112-1c') ? document.getElementById('b112-1c').value : "";

    var b2a1 = document.getElementById('input-b112-2a-1') ? document.getElementById('input-b112-2a-1').value : "";
    var b2a2 = document.getElementById('input-b112-2a-2') ? document.getElementById('input-b112-2a-2').value : "";
    var b4text = document.getElementById('ans-b112-4-text') ? document.getElementById('ans-b112-4-text').value : "";

    var summary = "====== BÀI 112: LUYỆN TẬP ======\n";
    summary += "1. Chọn đơn vị: Hộp phấn: " + b1a + ", Máy giặt: " + b1b + ", Container: " + b1c + "\n";
    summary += "2. Đổi đơn vị: 2.5m3 = " + b2a1 + "dm3, 3900cm3 = " + b2a2 + "dm3\n";
    summary += "4. Bài toán nước: " + b4text + "\n";
    summary += "=================================";

    if (window.submitMathLesson) {
        window.submitMathLesson(summary, "Kết quả Tiết 112", "btn-submit-all-practice-112");
    } else {
        alert("Bài làm đã được hệ thống ghi nhận!");
    }
};
