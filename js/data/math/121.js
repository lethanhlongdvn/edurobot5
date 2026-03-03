export const lesson121 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "121",
    "title": "BÀI 49: LUYỆN TẬP",
    "desc": "Luyện tập tính diện tích xung quanh và diện tích toàn phần của hình lập phương thông qua các bài toán vận dụng thực tế.",
    "content": `
        <div class="space-y-4 text-indigo-900 animate-fade-in">
            <!-- 🌟 Mục tiêu & Nhắc lại kiến thức -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Sxq -->
                <div class="bg-gradient-to-br from-amber-400 to-orange-500 p-4 rounded-2xl shadow-xl">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
                            <span class="text-2xl text-white font-black italic">S<sub>xq</sub></span>
                        </div>
                        <h3 class="text-xl md:text-2xl font-black text-white italic tracking-tight">Diện tích xung quanh</h3>
                    </div>
                    <div class="bg-white p-4 rounded-xl shadow-inner text-center">
                        <p class="text-3xl md:text-4xl font-black text-orange-600">S<sub>xq</sub> = (a × a) × 4</p>
                    </div>
                </div>

                <!-- Stp -->
                <div class="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-2xl shadow-xl">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-12 h-12 bg-white/30 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg">
                            <span class="text-2xl text-white font-black italic">S<sub>tp</sub></span>
                        </div>
                        <h3 class="text-xl md:text-2xl font-black text-white italic tracking-tight">Diện tích toàn phần</h3>
                    </div>
                    <div class="bg-white p-4 rounded-xl shadow-inner text-center">
                        <p class="text-3xl md:text-4xl font-black text-indigo-600">S<sub>tp</sub> = (a × a) × 6</p>
                    </div>
                </div>
            </div>

            <!-- 💡 Ghi nhớ nhanh -->
            <div class="bg-emerald-50 p-4 rounded-3xl border-2 border-emerald-100 flex items-center gap-4">
                <div class="text-3xl">💡</div>
                <p class="text-xl md:text-3xl font-black text-emerald-900 leading-tight italic">
                    Hình lập phương có 6 mặt là các hình vuông <span class="text-emerald-600 underline">bằng nhau</span>.
                </p>
            </div>

            <!-- 💡 Lưu ý quan trọng -->
            <div class="bg-blue-50 p-6 rounded-[32px] border-4 border-dashed border-blue-200">
                <p class="text-blue-600 font-black text-xl md:text-3xl uppercase mb-3 flex items-center gap-2">
                    <span>💡</span> LƯU Ý KHI GIẢI TOÁN
                </p>
                <ul class="space-y-4">
                    <li class="flex items-start gap-4 text-2xl md:text-4xl font-bold text-blue-900 leading-snug">
                        <span class="text-blue-500 text-4xl">•</span> Xác định đề bài yêu cầu tính bao nhiêu mặt (4 mặt, 5 mặt hay 6 mặt).
                    </li>
                    <li class="flex items-start gap-4 text-2xl md:text-4xl font-bold text-blue-900 leading-snug">
                        <span class="text-blue-500 text-4xl">•</span> VD: Hộp không nắp (5 mặt), Diện tích xung quanh (4 mặt).
                    </li>
                </ul>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6 animate-fade-in">
            <!-- Bài tập 1 -->
            <div id="box-121-1" class="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-5xl mb-6 text-indigo-700 flex items-center gap-4">
                        <span class="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg shadow-indigo-200">1</span>
                        Tính diện tích nhựa (S<sub>xq</sub>):
                    </p>
                    <div class="bg-indigo-50/50 p-6 rounded-3xl border-2 border-indigo-100 mb-6 font-bold text-2xl md:text-4xl text-indigo-900">
                        <div class="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                            <p class="md:col-span-3 leading-tight">
                                Tính diện tích các mảnh nhựa màu (4 mặt xung quanh) dán cho chiếc đèn hình lập phương:
                            </p>
                            <div class="md:col-span-2 flex justify-center">
                                <img src="hinh_anh/toan/toan_tap_2/121-b1-lamps.png" alt="Đèn" class="w-full max-w-[600px] h-auto rounded-3xl shadow-2xl border-8 border-white">
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div id="box-121-1a" class="bg-white p-6 rounded-2xl shadow border border-indigo-50 text-center space-y-3 transition-all">
                            <p class="font-black text-indigo-400 text-xl uppercase italic tracking-widest leading-none flex items-center justify-between">
                                <span>Cạnh 25cm</span>
                                <button onclick="checkInstant121('1a')" class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-emerald-600 shrink-0" title="Kiểm tra ngay">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                            </p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-121-1a" class="w-full text-4xl md:text-5xl font-black text-indigo-600 bg-indigo-50 rounded-2xl p-4 text-center border-none shadow-inner" placeholder="?">
                                <span class="text-2xl font-bold text-gray-300 italic">cm<sup>2</sup></span>
                            </div>
                        </div>
                        <div id="box-121-1b" class="bg-white p-6 rounded-2xl shadow border border-indigo-50 text-center space-y-3 transition-all">
                            <p class="font-black text-indigo-400 text-xl uppercase italic tracking-widest leading-none flex items-center justify-between">
                                <span>Cạnh 15cm</span>
                                <button onclick="checkInstant121('1b')" class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-emerald-600 shrink-0" title="Kiểm tra ngay">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                            </p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-121-1b" class="w-full text-4xl md:text-5xl font-black text-indigo-600 bg-indigo-50 rounded-2xl p-4 text-center border-none shadow-inner" placeholder="?">
                                <span class="text-2xl font-bold text-gray-300 italic">cm<sup>2</sup></span>
                            </div>
                        </div>
                        <div id="box-121-1c" class="bg-white p-6 rounded-2xl shadow border border-indigo-50 text-center space-y-3 transition-all">
                            <p class="font-black text-indigo-400 text-xl uppercase italic tracking-widest leading-none flex items-center justify-between">
                                <span>Cạnh 30cm</span>
                                <button onclick="checkInstant121('1c')" class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-emerald-600 shrink-0" title="Kiểm tra ngay">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                            </p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-121-1c" class="w-full text-4xl md:text-5xl font-black text-indigo-600 bg-indigo-50 rounded-2xl p-4 text-center border-none shadow-inner" placeholder="?">
                                <span class="text-2xl font-bold text-gray-300 italic">cm<sup>2</sup></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-121-2" class="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-5xl mb-6 text-emerald-700 flex items-center gap-4">
                        <span class="w-12 h-12 bg-emerald-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg shadow-emerald-200">2</span>
                        Giải bài toán:
                    </p>
                    <div class="bg-emerald-50/50 p-6 rounded-3xl border-2 border-emerald-100 mb-6">
                        <div class="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                            <p class="md:col-span-3 text-2xl md:text-4xl font-bold text-emerald-900 leading-tight">
                                Mai tính phủ kẹo 5 mặt (4 mặt XQ + 1 mặt trên) của bánh hình lập phương cạnh <span class="text-emerald-600 underline font-black">10 cm</span>. Tính diện tích cần phủ kẹo.
                            </p>
                            <div class="md:col-span-2 flex justify-center">
                                <img src="hinh_anh/toan/toan_tap_2/121-b2-mai-cake.png" alt="Mai Cake" class="w-full max-w-[500px] h-auto rounded-[40px] shadow-2xl border-8 border-white mx-auto">
                            </div>
                        </div>
                    </div>

                    <!-- 3 Bước giải bài -->
                    <div class="max-w-4xl mx-auto space-y-4 bg-white p-6 rounded-[40px] shadow-2xl border-2 border-emerald-100">
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-xl font-black shrink-0 mt-2">1</div>
                            <div class="flex-grow">
                                <textarea id="wp-solution-121-2" rows="1" class="w-full p-4 rounded-2xl border-2 border-emerald-200 outline-none focus:border-emerald-500 text-2xl font-bold placeholder:text-gray-200 transition-all resize-none shadow-sm" placeholder="Ví dụ: Diện tích cần phủ kẹo là:"></textarea>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-teal-500 text-white rounded-xl flex items-center justify-center text-xl font-black shrink-0 mt-2">2</div>
                            <div class="flex-grow">
                                <textarea id="wp-calc-121-2" rows="1" class="w-full p-4 rounded-2xl border-2 border-teal-200 outline-none focus:border-teal-500 text-3xl font-black text-emerald-700 placeholder:text-gray-200 transition-all resize-none shadow-sm" placeholder="Ví dụ: 2 x 2 x 5 = 20 (cm2)"></textarea>
                            </div>
                        </div>
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-cyan-500 text-white rounded-xl flex items-center justify-center text-xl font-black shrink-0 mt-2">3</div>
                            <div class="flex-grow flex items-center gap-4">
                                <input type="number" id="ans-121-2" class="w-full max-w-[300px] p-4 rounded-2xl border-2 border-cyan-200 outline-none focus:border-cyan-500 text-4xl font-black text-cyan-600 transition-all shadow-sm" placeholder="?">
                                <span class="text-2xl md:text-3xl font-black text-gray-300">cm<sup>2</sup></span>
                                <button onclick="checkInstant121('2')" class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-emerald-600 shrink-0" title="Kiểm tra ngay">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div class="pt-4 flex justify-center">
                            <button onclick="Lesson.submitWordProblemAI('121-2')" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-xl transition-all shadow-xl active:scale-95">
                                Thầy E chấm bài
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-121-3" class="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-50 rounded-full -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-5xl mb-6 text-orange-700 flex items-center gap-4">
                        <span class="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg shadow-orange-200">3</span>
                        Giải bài toán:
                    </p>
                    <div class="bg-orange-50/50 p-6 rounded-3xl border-2 border-orange-100 mb-6">
                        <div class="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
                            <p class="md:col-span-3 text-2xl md:text-4xl font-bold text-orange-900 leading-tight">
                                Trang trí 4 mặt xung quanh chậu cây hình lập phương cạnh <span class="text-orange-600 font-black">20 cm</span>. Giá dịch vụ: <span class="text-orange-600 underline">25 đồng</span>/cm². Tính số tiền phải trả.
                            </p>
                            <div class="md:col-span-2 flex justify-center">
                                <img src="hinh_anh/toan/toan_tap_2/121-b3-robot-pot.png" alt="Robot Pot" class="w-full max-w-[500px] h-auto rounded-[40px] shadow-2xl border-8 border-white mx-auto">
                            </div>
                        </div>
                    </div>

                    <!-- Khu vực giải toán -->
                    <div class="max-w-4xl mx-auto space-y-6 bg-white p-6 rounded-[40px] shadow-2xl border-2 border-orange-100 text-center">
                        <textarea id="wp-solution-121-3" rows="2" class="w-full p-6 rounded-2xl border-2 border-orange-200 outline-none focus:border-orange-500 text-2xl font-bold placeholder:text-gray-200 transition-all resize-none shadow-sm" placeholder="Giải: Diện tích XQ chậu là: ... x ... x 4 = ... (cm2)"></textarea>
                        <div class="flex items-center justify-center gap-4 p-4 bg-orange-50/50 rounded-2xl shadow-inner">
                            <span class="text-3xl font-black text-orange-900 uppercase italic">Số tiền:</span>
                            <input type="number" id="ans-121-3" class="w-full max-w-[320px] p-4 rounded-2xl border-2 border-orange-300 outline-none focus:border-orange-500 text-4xl font-black text-rose-600" placeholder="?">
                            <span class="text-2xl font-black text-gray-400 italic">đồng</span>
                            <button onclick="checkInstant121('3')" class="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-emerald-600 shrink-0" title="Kiểm tra ngay">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                            </button>
                        </div>
                        <div class="pt-2 flex justify-center">
                            <button onclick="Lesson.submitWordProblemAI('121-3')" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-xl transition-all shadow-xl active:scale-95">
                                Thầy E chấm bài
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div id="box-121-4" class="bg-white p-6 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-5xl mb-6 text-rose-700 flex items-center gap-4">
                        <span class="w-12 h-12 bg-rose-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg shadow-rose-200">4</span>
                        Câu hỏi tư duy:
                    </p>
                    <div class="bg-rose-50/50 p-6 rounded-3xl border-2 border-rose-100 mb-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                            <img src="hinh_anh/toan/toan_tap_2/121-b4-kids-cubes.png" alt="Logic" class="w-full max-w-[500px] h-auto rounded-3xl shadow-2xl border-8 border-white mx-auto">
                            <div class="space-y-4">
                                <p class="text-2xl md:text-4xl font-bold text-rose-900 leading-tight">
                                    Ghép 2 lập phương cạnh 4 cm thành 1 hộp chữ nhật. Mai nói: "S<sub>tp</sub> hộp chữ nhật mới bằng 2 lần S<sub>tp</sub> của 1 hình lập phương ban đầu."
                                </p>
                                <p class="text-3xl font-black text-rose-700 uppercase italic underline decoration-rose-300">Mai nói đúng hay sai?</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center gap-6 max-w-2xl mx-auto">
                        <button onclick="check121_4(true)" class="flex-1 py-6 bg-emerald-50 hover:bg-emerald-100 border-4 border-emerald-200 rounded-[32px] text-4xl font-black text-emerald-600 transition-all shadow-xl active:scale-95">ĐÚNG</button>
                        <button onclick="check121_4(false)" class="flex-1 py-6 bg-rose-50 hover:bg-rose-100 border-4 border-rose-200 rounded-[32px] text-4xl font-black text-rose-600 transition-all shadow-xl active:scale-95">SAI</button>
                    </div>
                </div>
            </div>

            <!-- Nộp bài toàn diện -->
            <div class="flex flex-col items-center pt-10 border-t-4 border-dashed border-gray-100 mt-10">
                <button id="btn-submit-121" onclick="submit121()" class="px-16 py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[40px] font-black text-3xl shadow-2xl shadow-indigo-900/20 active:scale-95 transition-all">
                    Nộp bài
                </button>
            </div>

            <script>
                window.checkInstant121 = function(id) {
                    const box = document.getElementById('box-121-' + id);
                    if (!box) {
                        // For Bài 1a, 1b, 1c targets might be inside a grid
                        const target = document.getElementById('box-121-' + id);
                        if (target) box = target;
                    }
                    let isCorrect = false;
                    let val = "";

                    if (id === '1a') isCorrect = (document.getElementById('ans-121-1a').value == '2500');
                    else if (id === '1b') isCorrect = (document.getElementById('ans-121-1b').value == '900');
                    else if (id === '1c') isCorrect = (document.getElementById('ans-121-1c').value == '3600');
                    else if (id === '2') isCorrect = (document.getElementById('ans-121-2').value == '500');
                    else if (id === '3') isCorrect = (document.getElementById('ans-121-3').value == '40000');

                    box.classList.remove('border-gray-100', 'border-emerald-400', 'bg-emerald-50', 'border-red-400', 'bg-red-50');
                    box.classList.add('border-4');

                    if (isCorrect) {
                        box.classList.add('border-emerald-400', 'bg-emerald-50');
                        alert("Chính xác! Bạn thông minh quá! ✨🎉");
                    } else {
                        box.classList.add('border-red-400', 'bg-red-50');
                        alert("Kết quả chưa đúng, bạn kiểm tra lại phép tính nhé! 🤔");
                    }
                };

                window.check121_4 = function(isCorrect) {
                   if(isCorrect) {
                       alert("Chưa chính xác! Con hãy thử tính lại xem nhé. Khi ghép 2 hình thì có 2 mặt bị 'mất đi' do dán vào nhau đấy! 😉");
                       if(window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
                   } else {
                       alert("XUẤT SẮC! 🎉 Mai nhận xét SAI. Vì khi ghép 2 hình lại, phần diện tích tiếp xúc giữa 2 hình (2 mặt) sẽ không còn thuộc bề mặt ngoài nữa.");
                       if(window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
                   }
                }

                window.submit121 = function() {
                    let score = 0;
                    
                    // Bài 1: 25*25*4=2500, 15*15*4=900, 30*30*4=3600
                    const a1 = document.getElementById('ans-121-1a').value;
                    const b1 = document.getElementById('ans-121-1b').value;
                    const c1 = document.getElementById('ans-121-1c').value;
                    if(a1 == '2500') score += 1;
                    if(b1 == '900') score += 1;
                    if(c1 == '3600') score += 1;

                    // Bài 2: 10*10*5 = 500
                    const a2 = document.getElementById('ans-121-2').value;
                    if(a2 == '500') score += 2;

                    // Bài 3: Sxq = 20*20*4 = 1600. Tiền = 1600 * 25 = 40000
                    const a3 = document.getElementById('ans-121-3').value;
                    if(a3 == '40000') score += 3;
                    
                    // Bài 4: (Có 2 câu logic)
                    score += 2;

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Tiết 121: " + score + "/10", status, "btn-submit-121");
                    }
                    alert("Kết quả của em: " + score + "/10. Hãy tiếp tục cố gắng nhé! 🌈");
                }
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Công thức tính diện tích xung quanh của hình lập phương cạnh a là:", "options": ["a × a × 6", "a × a × 4", "a × a × 2", "a × a × 8"], "answer": 1, "level": 1 },
        { "question": "Công thức tính diện tích toàn phần của hình lập phương cạnh a là:", "options": ["a × a × 4", "a × a × 12", "a × a × 6", "a × a × 6 × 6"], "answer": 2, "level": 1 },
        { "question": "Một hình lập phương có cạnh 2 cm. Diện tích xung quanh là:", "options": ["8 cm<sup>2</sup>", "24 cm<sup>2</sup>", "16 cm<sup>2</sup>", "32 cm<sup>2</sup>"], "answer": 2, "level": 1 },
        { "question": "Một hình lập phương có cạnh 3 dm. Diện tích toàn phần là:", "options": ["36 dm<sup>2</sup>", "45 dm<sup>2</sup>", "54 dm<sup>2</sup>", "90 dm<sup>2</sup>"], "answer": 2, "level": 2 },
        { "question": "Diện tích một mặt hình lập phương là 10 cm<sup>2</sup>. Diện tích toàn phần là:", "options": ["40 cm<sup>2</sup>", "60 cm<sup>2</sup>", "50 cm<sup>2</sup>", "100 cm<sup>2</sup>"], "answer": 1, "level": 1 },
        { "question": "Hình lập phương có cạnh 1 m. Diện tích xung quanh là:", "options": ["1 m<sup>2</sup>", "6 m<sup>2</sup>", "4 m<sup>2</sup>", "8 m<sup>2</sup>"], "answer": 2, "level": 1 },
        { "question": "Nếu cạnh hình lập phương tăng gấp đôi thì diện tích xung quanh tăng gấp mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 2 },
        { "question": "Tính diện tích giấy để dán kín một cái hộp không nắp cạnh 10 cm:", "options": ["400 cm<sup>2</sup>", "600 cm<sup>2</sup>", "500 cm<sup>2</sup>", "1000 cm<sup>2</sup>"], "answer": 2, "level": 2 },
        { "question": "Hình lập phương có 6 mặt, các mặt đều là hình gì?", "options": ["Hình chữ nhật", "Hình vuông", "Hình tròn", "Hình tam giác"], "answer": 1, "level": 1 },
        { "question": "Muốn tính diện tích toàn phần của hình lập phương, ta lấy diện tích một mặt nhân với:", "options": ["4", "8", "6", "2"], "answer": 2, "level": 1 },
        { "question": "Một chiếc đèn lồng hình lập phương cạnh 20 cm, diện tích 4 mặt xung quanh là:", "options": ["800 cm<sup>2</sup>", "1600 cm<sup>2</sup>", "1200 cm<sup>2</sup>", "2400 cm<sup>2</sup>"], "answer": 1, "level": 2 },
        { "question": "Diện tích toàn phần của hình lập phương cạnh 0,5 m là:", "options": ["1 m<sup>2</sup>", "1,5 m<sup>2</sup>", "1,25 m<sup>2</sup>", "2,5 m<sup>2</sup>"], "answer": 1, "level": 3 },
        { "question": "Nếu cạnh hình lập phương là 4 cm thì diện tích một mặt là:", "options": ["8 cm<sup>2</sup>", "16 cm<sup>2</sup>", "12 cm<sup>2</sup>", "24 cm<sup>2</sup>"], "answer": 1, "level": 1 },
        { "question": "Tổng diện tích 4 mặt bên của hình lập phương được gọi là:", "options": ["Diện tích toàn phần", "Chu vi đáy", "Diện tích xung quanh", "Diện tích đáy"], "answer": 2, "level": 1 },
        { "question": "Một chiếc hộp hình lập phương cạnh 1 m có diện tích đáy là bao nhiêu dm<sup>2</sup>?", "options": ["10 dm<sup>2</sup>", "100 dm<sup>2</sup>", "1000 dm<sup>2</sup>", "1 dm<sup>2</sup>"], "answer": 1, "level": 2 }
    ]
};
