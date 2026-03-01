export const lesson116 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "116",
    "title": "HÌNH KHAI TRIỂN CỦA HÌNH HỘP CHỮ NHẬT, HÌNH LẬP PHƯƠNG, HÌNH TRỤ",
    "desc": "Bài 49: Hình khai triển của hình hộp chữ nhật, hình lập phương, hình trụ",
    "content": `
        <div class="space-y-8 md:space-y-12">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-blue-50 p-8 md:p-10 rounded-[32px] md:rounded-[48px] border-l-[12px] border-blue-600 shadow-sm animate-fade-in">
                <h3 class="text-blue-900 font-black text-2xl md:text-4xl mb-6 flex items-center gap-4">
                    <span class="text-4xl md:text-5xl">🎯</span> Mục tiêu bài học
                </h3>
                <ul class="list-disc list-inside text-blue-800 space-y-4 font-bold text-xl md:text-2xl leading-relaxed">
                    <li>Nhận biết được hình khai triển của hình trụ, hình lập phương, hình hộp chữ nhật.</li>
                    <li>Biết cách gấp và kiểm tra các hình khai triển.</li>
                </ul>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6 md:space-y-8">
            <!-- Bài 1 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 -mr-8 -mt-8"></div>
                <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div class="flex-1">
                        <p class="font-black text-2xl md:text-3xl mb-6 text-blue-700 flex items-center gap-3">
                            <span class="w-14 h-14 bg-blue-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-lg shrink-0">1</span>
                            Chọn câu trả lời đúng. Hình bên là khai triển của hình nào dưới đây?
                        </p>
                    </div>
                    <div class="w-full md:w-1/3 flex justify-center">
                        <img src="hinh_anh/toan/toan_tap_2/116_b1_de.png" alt="Đề bài" class="h-40 md:h-56 object-contain drop-shadow-md">
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <button class="ans-btn-1 flex flex-col items-center justify-between p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl hover:border-blue-400 hover:bg-blue-50 hover:scale-[1.02] transition-all shadow-sm group min-h-[220px]" onclick="selectBai1('A', this)">
                        <span class="text-4xl mb-4 font-black text-blue-500">A</span>
                        <img src="hinh_anh/toan/toan_tap_2/116_b1_a.png" class="h-32 object-contain group-hover:scale-110 transition-transform">
                    </button>
                    <button class="ans-btn-1 flex flex-col items-center justify-between p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl hover:border-blue-400 hover:bg-blue-50 hover:scale-[1.02] transition-all shadow-sm group min-h-[220px]" onclick="selectBai1('B', this)">
                        <span class="text-4xl mb-4 font-black text-blue-500">B</span>
                        <img src="hinh_anh/toan/toan_tap_2/116_b1_b.png" class="h-24 object-contain group-hover:scale-110 transition-transform mt-auto mb-auto">
                    </button>
                    <button class="ans-btn-1 flex flex-col items-center justify-between p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl hover:border-blue-400 hover:bg-blue-50 hover:scale-[1.02] transition-all shadow-sm group min-h-[220px]" onclick="selectBai1('C', this)">
                        <span class="text-4xl mb-4 font-black text-blue-500">C</span>
                        <img src="hinh_anh/toan/toan_tap_2/116_b1_c.png" class="h-16 object-contain group-hover:scale-110 transition-transform mt-auto mb-auto">
                    </button>
                </div>
                
                <div class="mt-8 h-12 flex justify-center items-center">
                    <p id="res-116-1" class="font-black text-2xl md:text-3xl text-center"></p>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-6 text-emerald-700 flex items-start gap-4">
                    <span class="w-14 h-14 shrink-0 bg-emerald-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-lg">2</span>
                    <span>Dưới đây là một số hình khai triển của hình lập phương. Bạn hãy chọn một hình khai triển và làm theo từng bước dưới đây để gấp được một hình lập phương.</span>
                </p>
                
                <div class="flex flex-col items-center gap-12 my-12 relative">
                    <img src="hinh_anh/toan/toan_tap_2/116_b2_shapes.png" alt="Các hình khai triển" class="w-full max-w-2xl h-auto object-contain drop-shadow-md">
                    
                    <div class="w-full max-w-2xl border-t-4 border-dashed border-emerald-200 mt-4 relative">
                        <span class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-emerald-400 font-black text-lg uppercase tracking-widest">Thực hành cùng Rô-bốt</span>
                    </div>

                    <img src="hinh_anh/toan/toan_tap_2/116_b2_robot.png" alt="Rô-bốt thực hành" class="w-full max-w-3xl h-auto object-contain drop-shadow-xl rounded-3xl">
                </div>

                <div class="flex flex-col items-center gap-4 bg-emerald-50 p-8 rounded-[32px] border-2 border-emerald-100">
                    <p class="text-xl md:text-2xl font-bold text-emerald-800 text-center">Bạn hãy lấy giấy, kéo và hồ dán ra thực hành cùng Rô-bốt nhé!</p>
                    <button onclick="checkBai2()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-[28px] text-2xl font-black shadow-xl shadow-emerald-200 active:scale-95 transition-transform flex items-center gap-3 mt-4">
                        <span>✂️</span> Thực hành xong!
                    </button>
                    <p id="res-116-2" class="text-center font-black text-2xl mt-2 h-8 text-emerald-600"></p>
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-6 text-purple-700 flex items-start gap-4">
                    <span class="w-14 h-14 shrink-0 bg-purple-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-lg">3</span>
                    <span>Bằng cách thực hành như bài tập trên, bạn hãy kiểm tra trong những hình dưới đây, hình nào là hình khai triển của hình lập phương.</span>
                </p>

                <div class="bg-purple-50 p-8 rounded-[32px] border-4 border-purple-100 mt-8 shadow-inner">
                    <p class="text-lg md:text-xl font-black text-purple-600 mb-8 uppercase tracking-widest text-center animate-pulse">Bạn hãy bấm vào nhân vật cầm hình khai triển ĐÚNG:</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="flex flex-col items-center gap-4">
                            <button onclick="checkBai3('Mai', this)" class="group flex flex-col items-center focus:outline-none transition-all duration-300 b3-btn">
                                <img src="hinh_anh/toan/toan_tap_2/116_b3_a.png" class="h-64 object-contain group-hover:scale-105 transition-transform drop-shadow-lg">
                                <span class="text-3xl font-black text-purple-700 mt-4 p-4 w-full bg-white rounded-[24px] border-4 border-transparent shadow-sm group-hover:bg-purple-50 group-hover:border-purple-200 transition-all">Mai</span>
                            </button>
                        </div>
                        <div class="flex flex-col items-center gap-4">
                            <button onclick="checkBai3('Nam', this)" class="group flex flex-col items-center focus:outline-none transition-all duration-300 b3-btn">
                                <img src="hinh_anh/toan/toan_tap_2/116_b3_b.png" class="h-64 object-contain -mt-8 group-hover:scale-105 transition-transform drop-shadow-lg">
                                <span class="text-3xl font-black text-purple-700 mt-4 p-4 w-full bg-white rounded-[24px] border-4 border-transparent shadow-sm group-hover:bg-purple-50 group-hover:border-purple-200 transition-all">Nam</span>
                            </button>
                        </div>
                        <div class="flex flex-col items-center gap-4">
                            <button onclick="checkBai3('Việt', this)" class="group flex flex-col items-center focus:outline-none transition-all duration-300 b3-btn">
                                <img src="hinh_anh/toan/toan_tap_2/116_b3_c.png" class="h-64 object-contain group-hover:scale-105 transition-transform drop-shadow-lg">
                                <span class="text-3xl font-black text-purple-700 mt-4 p-4 w-full bg-white rounded-[24px] border-4 border-transparent shadow-sm group-hover:bg-purple-50 group-hover:border-purple-200 transition-all">Việt</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-8 h-12 flex justify-center items-center">
                    <p id="res-116-3" class="font-black text-2xl md:text-3xl text-center"></p>
                </div>
            </div>

            <!-- Bài 4 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-6 text-orange-700 flex items-start gap-4">
                    <span class="w-14 h-14 shrink-0 bg-orange-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-lg">4</span>
                    <span>Rô-bốt cần cắt đi <span class="text-orange-600 underline decoration-4 underline-offset-4">01 hình chữ nhật</span> nào trong hình dưới đây để phần còn lại là hình khai triển của một hình hộp chữ nhật?</span>
                </p>
                <p class="text-gray-500 font-bold text-xl italic mb-6 text-center animate-pulse">(Bạn hãy bấm trực tiếp vào hình chữ nhật muốn cắt nhé 👇)</p>
                
                <div class="w-full max-w-4xl overflow-x-auto mx-auto pb-8">
                    <div class="w-[600px] sm:w-[700px] md:w-[800px] grid grid-cols-9 gap-[2px] mx-auto p-8 border-4 border-orange-100 bg-emerald-950 shadow-xl rounded-3xl" id="b4-grid" style="grid-template-rows: 90px 180px 90px;">
                        <!-- Row 1 -->
                        <div class="col-start-2 col-span-3 border-[6px] border-black bg-[#9A51A1] cursor-pointer hover:border-white focus:outline-none transition-all duration-300 transform origin-center b4-rect" onclick="toggleB4(this, 'màu tím')"></div>
                        
                        <!-- Row 2 -->
                        <div class="col-start-1 col-span-1 border-[6px] border-black bg-[#4EAF4B] cursor-pointer hover:border-white focus:outline-none transition-all duration-300 transform origin-center b4-rect" onclick="toggleB4(this, 'màu xanh lá')"></div>
                        <div class="col-start-2 col-span-3 border-[6px] border-black bg-[#3770B8] cursor-pointer hover:border-white focus:outline-none transition-all duration-300 transform origin-center b4-rect" onclick="toggleB4(this, 'màu xanh dương')"></div>
                        <div class="col-start-5 col-span-1 border-[6px] border-black bg-[#E83539] cursor-pointer hover:border-white focus:outline-none transition-all duration-300 transform origin-center b4-rect" onclick="toggleB4(this, 'màu đỏ')"></div>
                        <div class="col-start-6 col-span-3 border-[6px] border-black bg-[#F18821] cursor-pointer hover:border-white focus:outline-none transition-all duration-300 transform origin-center b4-rect" onclick="toggleB4(this, 'màu cam')"></div>
                        <div class="col-start-9 col-span-1 border-[6px] border-black bg-[#FCEDB3] cursor-pointer hover:border-white focus:outline-none transition-all duration-300 transform origin-center b4-rect" onclick="toggleB4(this, 'màu vàng nhạt')"></div>

                        <!-- Row 3 -->
                        <div class="col-start-2 col-span-3 border-[6px] border-black bg-white cursor-pointer hover:border-white focus:outline-none transition-all duration-300 transform origin-center b4-rect" onclick="toggleB4(this, 'màu trắng')"></div>
                    </div>
                </div>

                <div class="mt-8 h-16 flex justify-center items-center">
                    <p id="res-116-4" class="font-black text-2xl md:text-3xl text-center px-4"></p>
                </div>
            </div>

            <!-- Nút Nộp Bài Tổng Kết -->
            <div class="flex justify-center mt-10">
                <button id="btn-submit-116" onclick="submitFinal116()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-[32px] font-black text-2xl shadow-2xl shadow-indigo-300 active:scale-95 transition-all flex items-center gap-3">
                    NỘP BÀI TỔNG KẾT <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
            </div>

            <script>
                // Bài 1
                window.selectBai1 = function(answer, btn) {
                    const res = document.getElementById('res-116-1');
                    const btns = document.querySelectorAll('.ans-btn-1');
                    
                    btns.forEach(b => {
                        b.classList.remove('border-emerald-500', 'bg-emerald-100', 'border-red-500', 'bg-red-100', 'border-blue-400', 'bg-blue-50');
                        b.classList.add('border-gray-100', 'bg-gray-50');
                    });

                    if (answer === 'B') {
                        res.textContent = "Chính xác! Bạn giỏi quá! ✨";
                        res.className = "font-black text-2xl md:text-3xl text-emerald-600 animate-bounce";
                        btn.classList.add('border-emerald-500', 'bg-emerald-100');
                    } else {
                        res.textContent = "Chưa đúng rồi, bạn xem kĩ lại nhé! 🤔";
                        res.className = "font-bold text-2xl md:text-3xl text-red-500";
                        btn.classList.add('border-red-500', 'bg-red-100');
                    }
                    window.ans116_1 = answer; // Lưu nhãn để nộp bài
                };

                // Bài 2
                window.checkBai2 = function() {
                    document.getElementById('res-116-2').textContent = 'Tuyệt vời! Bạn rất khéo tay! 🎉';
                };

                // Bài 3
                window.checkBai3 = function(name, btn) {
                    const res = document.getElementById('res-116-3');
                    const allLabels = document.querySelectorAll('.b3-btn span');
                    allLabels.forEach(s => s.classList.remove('border-emerald-500', 'bg-emerald-50', 'border-red-500', 'bg-red-50'));

                    const label = btn.querySelector('span');
                    if (name === 'Việt') {
                        res.textContent = "Chính xác! Bạn Việt cầm hình khai triển đúng! 🎉";
                        res.className = "font-black text-2xl md:text-3xl text-emerald-600 animate-bounce";
                        label.classList.add('border-emerald-500', 'bg-emerald-50');
                    } else {
                        res.textContent = "Chưa đúng rồi, bạn xem lại hình của " + name + " nhé! 🤔";
                        res.className = "font-bold text-2xl md:text-3xl text-red-500";
                        label.classList.add('border-red-500', 'bg-red-50');
                    }
                    window.ans116_3 = name;
                }

                // Bài 4
                let selectedB4 = [];
                window.toggleB4 = function(el, color) {
                    if (el.classList.contains('opacity-20')) {
                        el.classList.remove('opacity-20', 'scale-90');
                        selectedB4 = selectedB4.filter(c => c !== color);
                    } else {
                        // Chỉ cho phép cắt 1 hình tại 1 thời điểm để trực quan
                        const allRects = document.querySelectorAll('.b4-rect');
                        allRects.forEach(r => r.classList.remove('opacity-20', 'scale-90'));
                        selectedB4 = [color];
                        el.classList.add('opacity-20', 'scale-90');
                    }
                    validateB4();
                }

                function validateB4() {
                    const res = document.getElementById('res-116-4');
                    if (selectedB4.length === 0) {
                        res.textContent = "";
                        return;
                    }
                    const color = selectedB4[0];
                    if (color === 'màu xanh lá' || color === 'màu vàng nhạt') {
                        res.innerHTML = "Chính xác! Bạn cắt hình <b>" + color + "</b> là đúng rồi! ✨";
                        res.className = "font-black text-2xl md:text-3xl text-emerald-600 animate-bounce text-center px-4";
                    } else {
                        res.innerHTML = "Nếu cắt <b>" + color + "</b> thì không ráp được đâu. Bạn thử lại nhé! 🤔";
                        res.className = "font-bold text-2xl md:text-3xl text-red-500 text-center px-4";
                    }
                }

                // Nộp bài chung
                window.submitFinal116 = function() {
                    if (!window.ans116_1) {
                        alert("Thầy E nhắc bạn: Hãy hoàn thành Bài 1 trước nhé! ✨");
                        return;
                    }

                    const btn = document.getElementById('btn-submit-116');
                    btn.disabled = true;
                    btn.innerHTML = '<span class="animate-pulse">ĐANG GỬI BÀI...</span>';

                    let report = "Bài 1: Chọn " + window.ans116_1 + "\\nBài 3: Đã chọn " + (window.ans116_3 || 'Chưa bấm') + "\\nBài 4: Đã cắt " + (selectedB4.join(', ') || 'Chưa cắt');
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson(report, "Đ", "btn-submit-116");
                    }
                    alert("🎉 Tuyệt vời! Bài làm của bạn đã được gửi tới Thầy E!");
                    btn.disabled = false;
                    btn.innerHTML = 'ĐÃ NỘP BÀI <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
                    btn.className = btn.className.replace('bg-indigo-600', 'bg-emerald-600').replace('hover:bg-indigo-700', 'hover:bg-emerald-700');
                };
            </script>
        </div>
    `,
    "quizPool": []
};
