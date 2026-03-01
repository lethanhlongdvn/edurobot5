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
            
            <div class="flex justify-center p-6 bg-white rounded-3xl shadow">
                <p class="text-gray-500 italic text-xl font-bold">[Chỗ chèn ảnh phần Khám Phá - nếu có]</p>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6 md:space-y-8">
            <!-- Bài 1 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 -mr-8 -mt-8"></div>
                <p class="font-black text-2xl md:text-3xl mb-6 text-blue-700 flex items-center gap-3">
                    <span class="w-14 h-14 bg-blue-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-lg">1</span>
                    Chọn câu trả lời đúng. Hình bên là khai triển của hình nào dưới đây?
                </p>
                
                <div class="flex justify-center my-8 bg-blue-50/50 p-6 md:p-10 rounded-[32px] border-2 border-dashed border-blue-200">
                    <div class="text-center w-full max-w-2xl">
                        <span class="text-5xl mb-4 block">🖼️</span>
                        <p class="text-blue-800 font-black text-xl md:text-2xl">[Chỗ chèn ảnh BÀI 1]</p>
                        <p class="text-blue-600 font-medium mt-2">Tên file ảnh: <code class="bg-blue-100 px-2 py-1 rounded">anh_bai1_116.png</code></p>
                        <p class="text-base text-gray-500 mt-2 italic">(Hình một trục lăn / khối trụ và các đáp án A, B, C)</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <button class="ans-btn-1 flex flex-col items-center justify-center p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl text-3xl font-black text-gray-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:scale-[1.02] transition-all shadow-sm" onclick="selectBai1('A', this)">
                        <span class="text-5xl mb-2 block text-blue-500">A</span>
                    </button>
                    <button class="ans-btn-1 flex flex-col items-center justify-center p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl text-3xl font-black text-gray-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:scale-[1.02] transition-all shadow-sm" onclick="selectBai1('B', this)">
                        <span class="text-5xl mb-2 block text-blue-500">B</span>
                    </button>
                    <button class="ans-btn-1 flex flex-col items-center justify-center p-6 bg-gray-50 border-4 border-gray-100 rounded-3xl text-3xl font-black text-gray-500 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:scale-[1.02] transition-all shadow-sm" onclick="selectBai1('C', this)">
                        <span class="text-5xl mb-2 block text-blue-500">C</span>
                    </button>
                </div>
                <input type="hidden" id="ans-116-1" value="">
                
                <div class="mt-8 flex items-center gap-4 justify-center">
                    <button onclick="checkBai1()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-[24px] font-black text-xl shadow-xl active:scale-95 transition-all">Kiểm tra Bài 1</button>
                    <p id="res-116-1" class="font-bold text-2xl h-8 text-blue-600"></p>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-6 text-emerald-700 flex items-start gap-4">
                    <span class="w-14 h-14 shrink-0 bg-emerald-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-lg">2</span>
                    <span>Dưới đây là một số hình khai triển của hình lập phương. Em hãy chọn một hình khai triển và làm theo từng bước dưới đây để gấp được một hình lập phương.</span>
                </p>
                
                <div class="flex justify-center my-8 bg-emerald-50/50 p-6 md:p-10 rounded-[32px] border-2 border-dashed border-emerald-200">
                    <div class="text-center w-full max-w-2xl">
                        <span class="text-5xl mb-4 block">🖼️</span>
                        <p class="text-emerald-800 font-black text-xl md:text-2xl">[Chỗ chèn ảnh BÀI 2]</p>
                        <p class="text-emerald-600 font-medium mt-2">Tên file ảnh: <code class="bg-emerald-100 px-2 py-1 rounded">anh_bai2_116.png</code></p>
                        <p class="text-base text-gray-500 mt-2 italic">(Hình các dạng khai triển và Rô-bốt đang cắt / gấp hình)</p>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-4 bg-emerald-50 p-8 rounded-[32px]">
                    <p class="text-xl md:text-2xl font-bold text-emerald-800 text-center">Bé hãy lấy giấy, kéo và hồ dán ra thực hành cùng Rô-bốt nhé!</p>
                    <button onclick="checkBai2()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-[28px] text-2xl font-black shadow-xl shadow-emerald-200 active:scale-95 transition-transform flex items-center gap-3 mt-4">
                        <span>✂️</span> Đã thực hành xong!
                    </button>
                    <p id="res-116-2" class="text-center font-black text-2xl mt-2 h-8 text-emerald-600"></p>
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-6 text-purple-700 flex items-start gap-4">
                    <span class="w-14 h-14 shrink-0 bg-purple-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-lg">3</span>
                    <span>Bằng cách thực hành như bài tập trên, em hãy kiểm tra trong những hình dưới đây, hình nào là hình khai triển của hình lập phương.</span>
                </p>
                
                <div class="flex justify-center my-8 bg-purple-50/50 p-6 md:p-10 rounded-[32px] border-2 border-dashed border-purple-200">
                    <div class="text-center w-full max-w-2xl">
                        <span class="text-5xl mb-4 block">🖼️</span>
                        <p class="text-purple-800 font-black text-xl md:text-2xl">[Chỗ chèn ảnh BÀI 3]</p>
                        <p class="text-purple-600 font-medium mt-2">Tên file ảnh: <code class="bg-purple-100 px-2 py-1 rounded">anh_bai3_116.png</code></p>
                        <p class="text-base text-gray-500 mt-2 italic">(Hình 3 bạn nhỏ cầm 3 tấm bảng có vẽ hình khai triển)</p>
                    </div>
                </div>

                <div class="bg-gray-50 p-8 rounded-[32px] border-2 border-gray-100">
                    <p class="text-lg md:text-xl font-bold text-gray-600 mb-6 uppercase tracking-widest text-center">Tích chọn vào hình ĐÚNG là hình khai triển:</p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <label class="flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border-4 border-gray-100 cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all shadow-sm group">
                            <input type="checkbox" class="w-10 h-10 text-purple-600 rounded-xl" id="ans-116-3-h1">
                            <span class="text-2xl font-black text-gray-700 group-hover:text-purple-700">Hình bạn Nữ (Trái)</span>
                        </label>
                        <label class="flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border-4 border-gray-100 cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all shadow-sm group">
                            <input type="checkbox" class="w-10 h-10 text-purple-600 rounded-xl" id="ans-116-3-h2">
                            <span class="text-2xl font-black text-gray-700 group-hover:text-purple-700">Hình bạn Nam (Giữa)</span>
                        </label>
                        <label class="flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border-4 border-gray-100 cursor-pointer hover:border-purple-300 hover:bg-purple-50 transition-all shadow-sm group">
                            <input type="checkbox" class="w-10 h-10 text-purple-600 rounded-xl" id="ans-116-3-h3">
                            <span class="text-2xl font-black text-gray-700 group-hover:text-purple-700">Hình bạn Nam (Phải)</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-6 text-orange-700 flex items-start gap-4">
                    <span class="w-14 h-14 shrink-0 bg-orange-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-lg">4</span>
                    <span>Rô-bốt cần cắt đi hình chữ nhật nào trong hình dưới đây để phần còn lại là hình khai triển của một hình hộp chữ nhật?</span>
                </p>
                
                <div class="flex justify-center my-8 bg-orange-50/50 p-6 md:p-10 rounded-[32px] border-2 border-dashed border-orange-200">
                    <div class="text-center w-full max-w-2xl">
                        <span class="text-5xl mb-4 block">🖼️</span>
                        <p class="text-orange-800 font-black text-xl md:text-2xl">[Chỗ chèn ảnh BÀI 4]</p>
                        <p class="text-orange-600 font-medium mt-2">Tên file ảnh: <code class="bg-orange-100 px-2 py-1 rounded">anh_bai4_116.png</code></p>
                        <p class="text-base text-gray-500 mt-2 italic">(Hình Rô-bốt cầm kéo chuẩn bị cắt hình chữ nhật có nhiều màu)</p>
                    </div>
                </div>

                <div class="p-8 bg-gray-50 rounded-[32px] border-2 border-gray-100 shadow-inner">
                    <p class="font-black text-gray-400 mb-4 uppercase text-lg tracking-widest">Câu trả lời của em:</p>
                    <div class="relative group">
                        <textarea id="ans-116-4" rows="3" class="w-full p-6 pb-16 rounded-[24px] border-2 border-gray-200 text-2xl font-bold text-orange-800 placeholder-gray-300 focus:border-orange-500 focus:ring-0 outline-none resize-none shadow-sm transition-all" placeholder="Ví dụ: Rô-bốt cần cắt đi hình chữ nhật màu..."></textarea>
                        
                        <!-- Nút mic -->
                        <button onclick="startVoiceInput('ans-116-4')" class="absolute bottom-6 right-6 p-4 bg-orange-100 text-orange-600 rounded-2xl hover:bg-orange-600 hover:text-white transition-all shadow-md active:scale-90 group-hover:flex">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Nút Nộp Bài Tổng Kết -->
            <div class="flex justify-center mt-10">
                <button id="btn-submit-116" onclick="submitFinal116()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-[32px] font-black text-2xl shadow-2xl shadow-indigo-300 active:scale-95 transition-all flex items-center gap-3">
                    NỘP BÀI TỔNG KẾT <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
            </div>

            <script>
                // Xử lý Bài 1
                window.selectBai1 = function(answer, btn) {
                    document.getElementById('ans-116-1').value = answer;
                    const btns = document.querySelectorAll('.ans-btn-1');
                    btns.forEach(b => {
                        b.classList.remove('border-blue-500', 'bg-blue-100', 'text-blue-800');
                        b.classList.add('border-gray-100', 'bg-gray-50', 'text-gray-500');
                    });
                    btn.classList.remove('border-gray-100', 'bg-gray-50', 'text-gray-500');
                    btn.classList.add('border-blue-500', 'bg-blue-100', 'text-blue-800');
                };

                window.checkBai1 = function() {
                    const ans = document.getElementById('ans-116-1').value;
                    const res = document.getElementById('res-116-1');
                    if (!ans) {
                        res.textContent = "Bé chưa chọn đáp án kìa!";
                        res.className = "font-bold text-2xl h-8 text-orange-500";
                        return;
                    }
                    if (ans === 'A') { // Tùy chỉnh đáp án đúng tùy theo ảnh
                        res.textContent = "Chính xác! Bé giỏi quá! ✨";
                        res.className = "font-black text-2xl h-8 text-emerald-600 animate-bounce";
                    } else {
                        res.textContent = "Chưa đúng rồi, bé xem kĩ lại nhé! 🤔";
                        res.className = "font-bold text-2xl h-8 text-red-500";
                    }
                };

                // Xử lý Bài 2
                window.checkBai2 = function() {
                    document.getElementById('res-116-2').textContent = 'Tuyệt vời! Bé rất khéo tay! 🎉';
                };

                // Nhập giọng nói
                window.startVoiceInput = function(targetId) {
                    if (window.eduRobotVoice) {
                        window.eduRobotVoice(targetId);
                    } else {
                        const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                        if (Recognition) {
                            const recognition = new Recognition();
                            recognition.lang = 'vi-VN';
                            recognition.onresult = (event) => {
                                document.getElementById(targetId).value = event.results[0][0].transcript;
                            };
                            recognition.start();
                        } else {
                            alert("Bé hãy gõ bằng bàn phím nhé! ⌨️");
                        }
                    }
                };

                // Nộp bài chung
                window.submitFinal116 = function() {
                    const ans1 = document.getElementById('ans-116-1').value;
                    const ans4 = document.getElementById('ans-116-4').value;
                    
                    if (!ans1) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành Bài 1 trước nhé! ✨");
                        return;
                    }

                    const btn = document.getElementById('btn-submit-116');
                    btn.disabled = true;
                    btn.innerHTML = '<span class="animate-pulse">ĐANG GỬI BÀI...</span>';

                    let report = "Bài 1 đã làm (Chọn " + ans1 + ")\\nBài 3 đã thực hành đánh dấu.\\nBài 4 trả lời: " + ans4;
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson(report, "Đ", "btn-submit-116");
                    }
                    alert("🎉 Tuyệt vời! Bài làm của bé đã được gửi tới Thầy E!");
                    btn.disabled = false;
                    btn.innerHTML = 'ĐÃ NỘP BÀI <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>';
                    btn.className = btn.className.replace('bg-indigo-600', 'bg-emerald-600').replace('hover:bg-indigo-700', 'hover:bg-emerald-700');
                };
            </script>
        </div>
    `,
    "quizPool": []
};
