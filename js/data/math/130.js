export const lesson130 = {
    "topic": "Số đo thời gian",
    "week": "26",
    "period": "130",
    "title": "BÀI 56: CÁC ĐƠN VỊ ĐO THỜI GIAN",
    "desc": "Ôn tập các đơn vị đo thời gian đã học, mối quan hệ giữa một số đơn vị đo thời gian thông dụng và cách đổi đơn vị.",
    "content": `
        <div class="space-y-4 text-indigo-900 animate-fade-in">
            <!-- 🌟 Bảng đơn vị đo thời gian -->
            <div class="bg-gradient-to-br from-indigo-500 to-purple-600 p-10 rounded-[40px] shadow-2xl text-white">
                <h3 class="text-4xl md:text-7xl font-black mb-10 text-center italic tracking-tight uppercase border-b-4 border-white/20 pb-6">Bảng Đơn Vị Đo Thời Gian</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12 text-4xl md:text-5xl font-black">
                    <div class="bg-white/20 p-8 rounded-3xl backdrop-blur-md border-2 border-white/40 space-y-6 shadow-xl leading-relaxed">
                        <p class="flex justify-between items-center"><span class="text-white/80">1 thế kỉ</span> <span class="text-yellow-300 text-5xl md:text-6xl">= 100</span> <span class="text-white/80 text-3xl">năm</span></p>
                        <p class="flex justify-between items-center"><span class="text-white/80">1 năm</span> <span class="text-yellow-300 text-5xl md:text-6xl">= 12</span> <span class="text-white/80 text-3xl">tháng</span></p>
                        <p class="flex justify-between items-center"><span class="text-white/80">1 năm</span> <span class="text-yellow-300 text-5xl md:text-6xl">= 365</span> <span class="text-white/80 text-3xl">ngày</span></p>
                        <p class="flex justify-between items-center"><span class="text-white/80">1 năm nhuận</span> <span class="text-yellow-300 text-5xl md:text-6xl">= 366</span> <span class="text-white/80 text-3xl">ngày</span></p>
                    </div>
                    <div class="bg-white/20 p-8 rounded-3xl backdrop-blur-md border-2 border-white/40 space-y-6 shadow-xl leading-relaxed">
                        <p class="flex justify-between items-center"><span class="text-white/80">1 tuần lễ</span> <span class="text-yellow-300 text-5xl md:text-6xl">= 7</span> <span class="text-white/80 text-3xl">ngày</span></p>
                        <p class="flex justify-between items-center"><span class="text-white/80">1 ngày</span> <span class="text-yellow-300 text-5xl md:text-6xl">= 24</span> <span class="text-white/80 text-3xl">giờ</span></p>
                        <p class="flex justify-between items-center"><span class="text-white/80">1 giờ</span> <span class="text-yellow-300 text-5xl md:text-6xl">= 60</span> <span class="text-white/80 text-3xl">phút</span></p>
                        <p class="flex justify-between items-center"><span class="text-white/80">1 phút</span> <span class="text-yellow-300 text-5xl md:text-6xl">= 60</span> <span class="text-white/80 text-3xl">giây</span></p>
                    </div>
                </div>
            </div>

            <!-- 💡 Số ngày trong tháng -->
            <div class="bg-gradient-to-br from-indigo-50 to-white p-10 rounded-[40px] border-4 border-indigo-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-100/50 rounded-full blur-3xl -z-0"></div>
                <p class="text-4xl md:text-6xl font-black text-indigo-900 mb-10 flex items-center gap-6">
                    <span class="p-4 bg-indigo-600 rounded-2xl text-white shadow-lg">📦</span> Mẹo ghi nhớ số ngày trong tháng
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-3xl md:text-4xl font-black">
                    <div class="p-8 bg-white rounded-3xl border-4 border-indigo-50 shadow-xl scale-100 hover:scale-[1.02] transition-transform duration-300">
                        <p class="text-rose-600 mb-6 underline decoration-rose-200 decoration-8 underline-offset-8">Tháng có 31 ngày:</p>
                        <p class="text-indigo-800 text-5xl md:text-6xl tracking-widest bg-indigo-50/50 p-4 rounded-2xl">1, 3, 5, 7, 8, 10, 12</p>
                    </div>
                    <div class="p-8 bg-white rounded-3xl border-4 border-indigo-50 shadow-xl scale-100 hover:scale-[1.02] transition-transform duration-300">
                        <p class="text-emerald-600 mb-6 underline decoration-emerald-200 decoration-8 underline-offset-8">Tháng có 30 ngày:</p>
                        <p class="text-indigo-800 text-5xl md:text-6xl tracking-widest bg-emerald-50/30 p-4 rounded-2xl">4, 6, 9, 11</p>
                    </div>
                    <div class="md:col-span-2 p-10 bg-amber-100 rounded-[40px] border-4 border-amber-300 shadow-xl relative mt-4">
                        <div class="absolute -top-6 left-10 bg-rose-600 text-white px-6 py-2 rounded-full text-2xl font-black shadow-lg uppercase">Đặc biệt</div>
                        <p class="text-amber-950 italic text-3xl md:text-4xl leading-relaxed">
                            Riêng <span class="font-black text-rose-600 text-5xl mx-2">Tháng 2</span> có 28 ngày (năm thường) hoặc 29 ngày (năm nhuận).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6 animate-fade-in">
            <!-- Bài tập 1 -->
            <div id="box-130-1" class="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full -z-0"></div>
                <div class="relative z-10 text-center space-y-4">
                    <p class="font-black text-4xl md:text-6xl text-indigo-900 leading-tight">1. Các đơn vị đo thời gian</p>
                    <p class="text-2xl md:text-4xl text-indigo-600 font-medium italic">Khám phá mối liên hệ giữa các đơn vị đo thời gian</p>
                </div>
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-4xl mb-6 text-indigo-700 flex items-center gap-4">
                        <span class="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg shadow-indigo-200 shrink-0 text-3xl">1</span>
                        <span>Dưới đây là năm (khoảng thời gian) xảy ra các sự kiện trong lịch sử Việt Nam. Em hãy cho biết mỗi sự kiện xảy ra vào thế kỉ nào?</span>
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <!-- Sự kiện 1 -->
                        <div id="item-130-1-1" class="bg-indigo-50/50 p-6 rounded-3xl border-4 border-indigo-100 space-y-6">
                            <p class="text-3xl font-black text-indigo-900 leading-tight">Hai Bà Trưng phát cờ khởi nghĩa năm 40.</p>
                            <img src="hinh_anh/toan/toan_tap_2/130-1-HBT.png" alt="Sự kiện 1" class="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white-500">
                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl border-2 border-indigo-50 shadow-inner">
                                <span class="font-black text-3xl text-indigo-500">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-1" class="w-32 text-4xl font-black text-indigo-700 bg-indigo-50 rounded-xl p-3 text-center border-none shadow-inner uppercase" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 2 -->
                        <div id="item-130-1-2" class="bg-indigo-50/50 p-6 rounded-3xl border-4 border-indigo-100 space-y-6">
                            <p class="text-3xl font-black text-indigo-900 leading-tight">Đinh Bộ Lĩnh lên ngôi Hoàng đế năm 968.</p>
                            <img src="hinh_anh/toan/toan_tap_2/130-1-DBL.png" alt="Sự kiện 2" class="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white-500">
                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl border-2 border-indigo-50 shadow-inner">
                                <span class="font-black text-3xl text-indigo-500">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-2" class="w-32 text-4xl font-black text-indigo-700 bg-indigo-50 rounded-xl p-3 text-center border-none shadow-inner uppercase" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 3 -->
                        <div id="item-130-1-3" class="bg-indigo-50/50 p-6 rounded-3xl border-4 border-indigo-100 space-y-6">
                            <p class="text-3xl font-black text-indigo-900 leading-tight">Vua Lý Công Uẩn dời đô / Thăng Long năm 1010.</p>
                            <img src="hinh_anh/toan/toan_tap_2/130-1-LCU.png" alt="Sự kiện 3" class="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white-500">
                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl border-2 border-indigo-50 shadow-inner">
                                <span class="font-black text-3xl text-indigo-500">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-3" class="w-32 text-4xl font-black text-indigo-700 bg-indigo-50 rounded-xl p-3 text-center border-none shadow-inner uppercase" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 4 -->
                        <div id="item-130-1-4" class="bg-indigo-50/50 p-6 rounded-3xl border-4 border-indigo-100 space-y-6">
                            <p class="text-3xl font-black text-indigo-900 leading-tight">Nhà Trần đánh bại quân Nguyên Mông năm 1285.</p>
                            <img src="hinh_anh/toan/toan_tap_2/130-1-NT.png" alt="Sự kiện 4" class="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white-500">
                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl border-2 border-indigo-50 shadow-inner">
                                <span class="font-black text-3xl text-indigo-500">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-4" class="w-32 text-4xl font-black text-indigo-700 bg-indigo-50 rounded-xl p-3 text-center border-none shadow-inner uppercase" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 5 -->
                        <div id="item-130-1-5" class="bg-indigo-50/50 p-6 rounded-3xl border-4 border-indigo-100 space-y-6">
                            <p class="text-3xl font-black text-indigo-900 leading-tight">Chiến thắng Điện Biên Phủ năm 1954.</p>
                            <img src="hinh_anh/toan/toan_tap_2/130-1-ĐBP.png" alt="Sự kiện 5" class="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white-500">
                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl border-2 border-indigo-50 shadow-inner">
                                <span class="font-black text-3xl text-indigo-500">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-5" class="w-32 text-4xl font-black text-indigo-700 bg-indigo-50 rounded-xl p-3 text-center border-none shadow-inner uppercase" placeholder="?">
                            </div>
                        </div>

                        <!-- Sự kiện 6 -->
                        <div id="item-130-1-6" class="bg-indigo-50/50 p-6 rounded-3xl border-4 border-indigo-100 space-y-6">
                            <p class="text-3xl font-black text-indigo-900 leading-tight">Giải phóng miền Nam năm 1975.</p>
                            <img src="hinh_anh/toan/toan_tap_2/130-1-GPMN.png" alt="Sự kiện 6" class="w-full h-80 object-cover rounded-2xl shadow-lg border-4 border-white-500">
                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl border-2 border-indigo-50 shadow-inner">
                                <span class="font-black text-3xl text-indigo-500">Thế kỉ:</span>
                                <input type="text" id="ans-130-1-6" class="w-32 text-4xl font-black text-indigo-700 bg-indigo-50 rounded-xl p-3 text-center border-none shadow-inner uppercase" placeholder="?">
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center mt-6">
                        <button onclick="check130_1()" class="bg-indigo-500 text-white font-bold py-3 px-8 rounded-full shadow-lg active:scale-95 transition-all outline-none hover:bg-indigo-600">Kiểm tra bài 1</button>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-130-2" class="bg-white p-8 rounded-3xl border-2 border-emerald-50 shadow-2xl relative overflow-hidden">
                <div class="absolute -top-10 -right-10 w-48 h-48 bg-emerald-50 rounded-full -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-4xl md:text-6xl mb-10 text-emerald-700 flex items-center gap-6">
                        <span class="w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-emerald-200">2</span>
                        Số ?
                    </p>

                    <!-- Mẫu hướng dẫn -->
                    <div class="bg-purple-50 p-8 rounded-3xl border-4 border-purple-200 mb-10 w-fit mx-auto shadow-inner text-center">
                        <p class="text-3xl md:text-4xl font-black tracking-wider text-purple-900 flex items-center justify-center gap-6 flex-wrap leading-relaxed">
                            <span class="bg-purple-600 text-white px-4 py-1 rounded-xl">Mẫu:</span> 
                            <span>72 phút = <span class="bg-white px-5 py-2 rounded-xl shadow-lg inline-flex flex-col items-center justify-center align-middle mx-1 border-2 border-purple-100" style="line-height: 1.1;"><span class="border-b-2 border-purple-900 block px-2">72</span><span>60</span></span> giờ = <span class="text-rose-600 font-black decoration-rose-200 underline decoration-4">1,2</span> giờ</span>
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <!-- Câu a -->
                        <div class="bg-emerald-50/50 p-8 rounded-[40px] border-4 border-emerald-100 space-y-10">
                            <div class="flex items-center gap-6 text-3xl md:text-4xl font-black text-emerald-900 flex-wrap">
                                <span class="text-5xl font-black text-emerald-500">a)</span>
                                <span>90 phút =</span>
                                <input type="number" id="ans-130-2-a1" step="0.1" class="w-32 text-5xl font-black text-emerald-700 bg-white border-4 border-emerald-200 rounded-2xl p-4 text-center outline-none focus:border-emerald-500 shadow-xl transition-all" placeholder="?">
                                <span>giờ</span>
                            </div>
                            <div class="flex items-center gap-6 text-3xl md:text-4xl font-black text-emerald-900 lg:pl-16 flex-wrap">
                                <span>42 giây =</span>
                                <input type="number" id="ans-130-2-a2" step="0.1" class="w-32 text-5xl font-black text-emerald-700 bg-white border-4 border-emerald-200 rounded-2xl p-4 text-center outline-none focus:border-emerald-500 shadow-xl transition-all" placeholder="?">
                                <span>phút</span>
                            </div>
                        </div>

                        <!-- Câu b -->
                        <div class="bg-emerald-50/50 p-8 rounded-[40px] border-4 border-emerald-100 space-y-10">
                            <div class="flex items-center gap-6 text-3xl md:text-4xl font-black text-emerald-900 flex-wrap">
                                <span class="text-5xl font-black text-emerald-500">b)</span>
                                <span>1 giờ 15 phút =</span>
                                <input type="number" id="ans-130-2-b1" step="0.1" class="w-32 text-5xl font-black text-emerald-700 bg-white border-4 border-emerald-200 rounded-2xl p-4 text-center outline-none focus:border-emerald-500 shadow-xl transition-all" placeholder="?">
                                <span>giờ</span>
                            </div>
                            <div class="flex items-center gap-6 text-3xl md:text-4xl font-black text-emerald-900 lg:pl-16 flex-wrap">
                                <span>2 phút 27 giây =</span>
                                <input type="number" id="ans-130-2-b2" step="0.1" class="w-32 text-5xl font-black text-emerald-700 bg-white border-4 border-emerald-200 rounded-2xl p-4 text-center outline-none focus:border-emerald-500 shadow-xl transition-all" placeholder="?">
                                <span>phút</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center mt-12">
                        <button onclick="check130_2()" class="bg-emerald-500 text-white font-black text-3xl py-4 px-12 rounded-full shadow-lg active:scale-95 transition-all outline-none hover:bg-emerald-600">Kiểm tra bài 2</button>
                    </div>
                </div>
            </div>

            <!-- Nộp bài toàn diện -->
            <div class="flex flex-col items-center pt-10 border-t-4 border-dashed border-gray-100 mt-10">
                <button id="btn-submit-130" onclick="submit130()" class="btn-submit-global">Nộp bài</button>
            </div>

            <script>
                window.check130_1 = function() {
                    const answers = ["I", "X", "XI", "XIII", "XX", "XX"];
                    let allCorrect = true;

                    for (let i = 0; i < 6; i++) {
                        const inputE = document.getElementById('ans-130-1-' + (i+1));
                        const val = inputE.value.trim().toUpperCase();
                        if (val === answers[i]) {
                            inputE.classList.remove('bg-red-100', 'text-red-700');
                            inputE.classList.add('bg-emerald-100', 'text-emerald-700');
                        } else {
                            inputE.classList.remove('bg-emerald-100', 'text-emerald-700');
                            inputE.classList.add('bg-red-100', 'text-red-700');
                            allCorrect = false;
                        }
                    }

                    if (allCorrect) {
                        alert("Xuất sắc! Em đã đoán đúng thế kỉ của các sự kiện lịch sử! 🏆🎉");
                        if(window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
                    } else {
                        alert("Có một vài sự kiện em xác định chưa đúng thế kỉ. Em thử xem lại và viết số La Mã nhé! 🤔");
                        if(window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
                    }
                };

                window.check130_2 = function() {
                    const ans = [
                        {id: 'ans-130-2-a1', val: '1.5', val2: '1,5'}, 
                        {id: 'ans-130-2-a2', val: '0.7', val2: '0,7'},
                        {id: 'ans-130-2-b1', val: '1.25', val2: '1,25'}, 
                        {id: 'ans-130-2-b2', val: '2.45', val2: '2,45'}
                    ];
                    let allCorrect = true;

                    for(let i=0; i<ans.length; i++) {
                        const el = document.getElementById(ans[i].id);
                        const userVal = el.value.trim().replace(',', '.'); // Allow both comma and dot input
                        if(userVal === ans[i].val || userVal === ans[i].val2) {
                            el.classList.remove('border-emerald-200', 'border-red-400', 'text-red-600', 'bg-red-50');
                            el.classList.add('border-emerald-500', 'text-emerald-700', 'bg-emerald-50');
                        } else {
                            el.classList.remove('border-emerald-200', 'border-emerald-500', 'text-emerald-700', 'bg-emerald-50');
                            el.classList.add('border-red-400', 'text-red-600', 'bg-red-50');
                            allCorrect = false;
                        }
                    }

                    if (allCorrect) {
                        alert("Chính xác tuyệt đối! Em đổi đơn vị số thập phân rất giỏi! ✨");
                        if(window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
                    } else {
                        alert("Chưa chính xác hoàn toàn. Hãy nhớ lại kiến thức đổi ra số thập phân ở phần Mẫu nhé (Chia cho 60)! 🤔");
                        if(window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
                    }
                };

                window.submit130 = function() {
                    let score = 0;
                    const answers = ["I", "X", "XI", "XIII", "XX", "XX"];
                    for (let i = 0; i < 6; i++) {
                        const inputE = document.getElementById('ans-130-1-' + (i+1));
                        if(inputE.value.trim().toUpperCase() === answers[i]) score += 1;
                    }

                    const ans2 = ['1.5', '0.7', '1.25', '2.45'];
                    const ids2 = ['ans-130-2-a1', 'ans-130-2-a2', 'ans-130-2-b1', 'ans-130-2-b2'];
                    for (let i = 0; i < 4; i++) {
                        const inputE = document.getElementById(ids2[i]);
                        const val = inputE.value.trim().replace(',', '.');
                        if(val === ans2[i]) score += 1;
                    }

                    const finalScore = Math.min(10, Math.round(score));
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Tiết 130: " + finalScore + "/10", finalScore * 10, "btn-submit-130");
                    }
                    alert("Kết quả của em: " + finalScore + "/10. Hãy lưu lại trong nhật ký Toán học nhé! 🌈");
                }
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Năm 2024 thuộc thế kỉ thứ mấy?", "options": ["XX", "XXI", "XV", "XIX"], "answer": 1, "level": 1 },
        { "question": "1 năm nhuận có bao nhiêu ngày?", "options": ["365 ngày", "366 ngày", "364 ngày", "360 ngày"], "answer": 1, "level": 1 },
        { "question": "Tháng nào sau đây chỉ có 28 hoặc 29 ngày?", "options": ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"], "answer": 1, "level": 1 },
        { "question": "Thế kỉ thứ XV kéo dài từ năm nào đến năm nào?", "options": ["Từ năm 1400 đến 1499", "Từ năm 1500 đến 1599", "Từ năm 1401 đến 1500", "Từ năm 1501 đến 1600"], "answer": 2, "level": 2 },
        { "question": "1 thế kỉ bằng bao nhiêu năm?", "options": ["10 năm", "50 năm", "100 năm", "1000 năm"], "answer": 2, "level": 1 },
        { "question": "Tháng nào sau đây có 31 ngày?", "options": ["Tháng 4", "Tháng 6", "Tháng 8", "Tháng 11"], "answer": 2, "level": 1 },
        { "question": "Tháng nào sau đây có 30 ngày?", "options": ["Tháng 3", "Tháng 9", "Tháng 10", "Tháng 12"], "answer": 1, "level": 1 },
        { "question": "Đổi 120 phút bằng bao nhiêu giờ?", "options": ["1,5 giờ", "2 giờ", "2,5 giờ", "1,2 giờ"], "answer": 1, "level": 1 },
        { "question": "Đổi 2,5 năm bằng bao nhiêu tháng?", "options": ["25 tháng", "30 tháng", "24 tháng", "12 tháng"], "answer": 1, "level": 2 },
        { "question": "Năm 1010 Vua Lý Công Uẩn dời đô về Thăng Long. Kỉ niệm 1000 năm Thăng Long - Hà Nội vào thế kỉ nào?", "options": ["Thế kỉ XX", "Thế kỉ XXI", "Thế kỉ XIX", "Thế kỉ X"], "answer": 1, "level": 3 }
    ]
};
