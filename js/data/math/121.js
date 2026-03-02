export const lesson121 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "121",
    "title": "BÀI 49: LUYỆN TẬP",
    "desc": "Luyện tập tính diện tích xung quanh và diện tích toàn phần của hình lập phương thông qua các bài toán vận dụng thực tế.",
    "content": `
        <div class="space-y-12">
            <!-- 🌟 Mục tiêu & Nhắc lại kiến thức -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Sxq -->
                <div class="bg-gradient-to-br from-amber-400 to-orange-500 p-8 rounded-[48px] shadow-2xl transform hover:-rotate-1 transition-all">
                    <div class="flex items-center gap-5 mb-6">
                        <div class="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                            <span class="text-4xl text-white font-black italic">Sxq</span>
                        </div>
                        <h3 class="text-2xl font-black text-white italic">Diện tích xung quanh</h3>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 mb-6">
                        <p class="text-white text-lg font-bold leading-relaxed">
                            "Diện tích xung quanh của hình lập phương bằng diện tích một mặt nhân với 4."
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-[32px] shadow-inner text-center">
                        <p class="text-3xl font-black text-orange-600 tracking-wide uppercase">Sxq = (a × a) × 4</p>
                    </div>
                </div>

                <!-- Stp -->
                <div class="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-[48px] shadow-2xl transform hover:rotate-1 transition-all">
                    <div class="flex items-center gap-5 mb-6">
                        <div class="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/20">
                            <span class="text-4xl text-white font-black italic">Stp</span>
                        </div>
                        <h3 class="text-2xl font-black text-white italic">Diện tích toàn phần</h3>
                    </div>
                    <div class="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/10 mb-6">
                        <p class="text-white text-lg font-bold leading-relaxed">
                            "Diện tích toàn phần của hình lập phương bằng diện tích một mặt nhân với 6."
                        </p>
                    </div>
                    <div class="bg-white p-6 rounded-[32px] shadow-inner text-center">
                        <p class="text-3xl font-black text-indigo-600 tracking-wide uppercase">Stp = (a × a) × 6</p>
                    </div>
                </div>
            </div>

            <!-- 💡 Lưu ý quan trọng -->
            <div class="bg-blue-50 p-10 rounded-[60px] border-4 border-dashed border-blue-200 relative">
                <div class="absolute -top-8 left-10 bg-blue-600 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-lg">⚡ LƯU Ý</div>
                <ul class="space-y-6">
                    <li class="flex items-start gap-4 text-2xl font-bold text-blue-900 leading-snug">
                        <span class="text-blue-500 mt-1">●</span>
                        Cần xác định bài toán yêu cầu tính diện tích bao nhiêu mặt của hình lập phương.
                    </li>
                    <li class="flex items-start gap-4 text-2xl font-bold text-blue-900 leading-snug">
                        <span class="text-blue-500 mt-1">●</span>
                        Ví dụ: Mở nắp (5 mặt), Trang trí xung quanh (4 mặt), Sơn cả trong và ngoài (2 x 6 mặt).
                    </li>
                </ul>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-16">
            <!-- Bài tập 1 -->
            <div id="box-121-1" class="bg-white p-6 md:p-12 rounded-[56px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div class="absolute -top-10 -right-10 w-60 h-60 bg-indigo-50 rounded-full group-hover:scale-110 transition-transform -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-4xl mb-12 text-indigo-700 flex items-center gap-6">
                        <span class="w-16 h-16 bg-indigo-600 text-white rounded-[24px] flex items-center justify-center font-black shadow-xl shadow-indigo-200">1</span>
                        Tính diện tích mảnh nhựa (Sxq):
                    </p>
                    <div class="bg-indigo-50/50 p-8 rounded-[48px] border-2 border-indigo-100 mb-10">
                        <p class="text-2xl font-bold text-indigo-900 mb-8 leading-relaxed">
                            Người ta cần dán các mảnh nhựa màu vừa đủ vào khung của những chiếc đèn hình lập phương như hình bên dưới. Hãy tính diện tích các mảnh nhựa màu cần dùng cho mỗi bóng đèn (4 mặt xung quanh).
                        </p>
                        <div class="flex justify-center mb-6">
                            <img src="hinh_anh/toan/toan_tap_2/121-b1-lamps.png" alt="Đèn" class="w-full max-w-[500px] h-auto rounded-[32px] shadow-xl">
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <!-- Đèn 25cm -->
                        <div class="bg-white p-8 rounded-[40px] shadow-lg border border-indigo-50 text-center space-y-4">
                            <p class="font-black text-indigo-400 uppercase tracking-widest text-sm italic">Đèn 1 (Cạnh 25cm)</p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-121-1a" class="w-full text-4xl font-black text-indigo-600 bg-indigo-50 rounded-2xl p-4 text-center border-none focus:ring-4 focus:ring-indigo-200" placeholder="?">
                                <span class="text-xl font-bold text-gray-400">cm²</span>
                            </div>
                        </div>
                        <!-- Đèn 15cm -->
                        <div class="bg-white p-8 rounded-[40px] shadow-lg border border-indigo-50 text-center space-y-4">
                            <p class="font-black text-indigo-400 uppercase tracking-widest text-sm italic">Đèn 2 (Cạnh 15cm)</p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-121-1b" class="w-full text-4xl font-black text-indigo-600 bg-indigo-50 rounded-2xl p-4 text-center border-none focus:ring-4 focus:ring-indigo-200" placeholder="?">
                                <span class="text-xl font-bold text-gray-400">cm²</span>
                            </div>
                        </div>
                        <!-- Đèn 30cm -->
                        <div class="bg-white p-8 rounded-[40px] shadow-lg border border-indigo-50 text-center space-y-4">
                            <p class="font-black text-indigo-400 uppercase tracking-widest text-sm italic">Đèn 3 (Cạnh 30cm)</p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-121-1c" class="w-full text-4xl font-black text-indigo-600 bg-indigo-50 rounded-2xl p-4 text-center border-none focus:ring-4 focus:ring-indigo-200" placeholder="?">
                                <span class="text-xl font-bold text-gray-400">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-121-2" class="bg-white p-6 md:p-12 rounded-[56px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div class="absolute -top-10 -left-10 w-60 h-60 bg-emerald-50 rounded-full group-hover:scale-110 transition-transform -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-4xl mb-12 text-emerald-700 flex items-center gap-6">
                        <span class="w-16 h-16 bg-emerald-600 text-white rounded-[24px] flex items-center justify-center font-black shadow-xl shadow-emerald-200">2</span>
                        Giải bài toán:
                    </p>
                    <div class="bg-emerald-50/50 p-8 rounded-[48px] border-2 border-emerald-100 mb-10">
                        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                            <div class="lg:col-span-3 space-y-6">
                                <p class="text-2xl font-bold text-emerald-900 leading-relaxed">
                                    Mai muốn phủ các mặt xung quanh và mặt trên cùng của một chiếc bánh có dạng hình lập phương cạnh <span class="bg-white px-3 py-1 rounded-xl shadow-sm text-3xl font-black text-emerald-600">10 cm</span> bằng một lớp kem.
                                </p>
                                <p class="text-2xl font-bold text-emerald-900 leading-relaxed">
                                    Tính diện tích phần bánh cần phủ.
                                </p>
                            </div>
                            <div class="lg:col-span-2 text-center">
                                <img src="hinh_anh/toan/toan_tap_2/121-b2-mai-cake.png" alt="Mai Cake" class="w-full max-w-[320px] h-auto rounded-[48px] shadow-2xl border-8 border-white mx-auto">
                                <p class="text-xs font-bold text-emerald-400 italic mt-3">Gợi ý: Tính 5 mặt (4 mặt XQ + 1 mặt trên)</p>
                            </div>
                        </div>
                    </div>

                    <!-- 3 Bước giải bài -->
                    <div class="max-w-4xl mx-auto space-y-8 bg-white p-10 rounded-[56px] shadow-2xl border border-emerald-50">
                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">1</div>
                            <div class="flex-grow">
                                <label class="text-xs font-black text-emerald-600 uppercase tracking-widest mb-3 block">Lời giải (Bài giải)</label>
                                <textarea id="wp-solution-121-2" rows="2" class="w-full p-5 rounded-3xl border-2 border-emerald-100 outline-none focus:border-emerald-500 text-2xl font-bold placeholder:text-gray-200 shadow-inner transition-all resize-none" placeholder="Lời giải của em..."></textarea>
                            </div>
                        </div>
                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-teal-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                            <div class="flex-grow">
                                <label class="text-xs font-black text-teal-600 uppercase tracking-widest mb-3 block">Phép tính</label>
                                <textarea id="wp-calc-121-2" rows="2" class="w-full p-5 rounded-3xl border-2 border-teal-100 outline-none focus:border-teal-500 text-3xl font-black text-emerald-700 placeholder:text-gray-200 shadow-inner transition-all resize-none" placeholder="Ví dụ: 10 x 10 x 5 = ..."></textarea>
                            </div>
                        </div>
                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-cyan-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                            <div class="flex-grow">
                                <label class="text-xs font-black text-cyan-600 uppercase tracking-widest mb-3 block">Đáp số</label>
                                <div class="flex items-center gap-6">
                                    <input type="number" id="ans-121-2" class="w-64 p-5 rounded-3xl border-2 border-cyan-100 outline-none focus:border-cyan-500 text-5xl font-black text-cyan-600 shadow-inner transition-all" placeholder="?">
                                    <span class="text-4xl font-black text-gray-300">cm²</span>
                                </div>
                            </div>
                        </div>
                        <div class="pt-6 flex justify-center">
                            <button onclick="Lesson.submitWordProblemAI('121-2')" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-black text-base transition-all active:scale-95 shadow-lg shadow-blue-100 border-b-4 border-blue-800">
                                Thầy E chấm bài
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-121-3" class="bg-white p-6 md:p-12 rounded-[56px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div class="absolute -bottom-10 -right-10 w-80 h-80 bg-orange-50 rounded-full group-hover:scale-110 transition-transform -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-4xl mb-12 text-orange-700 flex items-center gap-6">
                        <span class="w-16 h-16 bg-orange-600 text-white rounded-[24px] flex items-center justify-center font-black shadow-xl shadow-orange-200">3</span>
                        Giải bài toán:
                    </p>
                    <div class="bg-orange-50/50 p-8 rounded-[48px] border-2 border-orange-100 mb-10">
                        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                            <div class="lg:col-span-3 space-y-6">
                                <p class="text-2xl font-bold text-orange-900 leading-relaxed italic">
                                    Rô-bốt cung cấp dịch vụ trang trí chậu cây với giá <span class="text-orange-600 font-black">25 đồng</span> cho 1 cm². 
                                </p>
                                <p class="text-2xl font-bold text-orange-900 leading-relaxed">
                                    Nam muốn trang trí các mặt xung quanh của chậu cây có dạng hình lập phương cạnh <span class="bg-white px-3 py-1 rounded-xl shadow-sm text-3xl font-black text-orange-600">20 cm</span>.
                                </p>
                                <p class="text-2xl font-black text-orange-700 underline underline-offset-8">
                                    Hãy tính số tiền mà Nam cần trả cho Rô-bốt.
                                </p>
                            </div>
                            <div class="lg:col-span-2 text-center">
                                <img src="hinh_anh/toan/toan_tap_2/121-b3-robot-pot.png" alt="Robot Pot" class="w-full max-w-[320px] h-auto rounded-[48px] shadow-2xl border-8 border-white mx-auto">
                            </div>
                        </div>
                    </div>

                    <!-- 3 Bước giải bài -->
                    <div class="max-w-4xl mx-auto space-y-8 bg-white p-10 rounded-[56px] shadow-2xl border border-orange-50">
                        <div class="space-y-4">
                            <label class="text-xs font-black text-orange-600 uppercase tracking-widest mb-3 block">Lời giải của em:</label>
                            <textarea id="wp-solution-121-3" rows="4" class="w-full p-6 rounded-[40px] border-2 border-orange-100 outline-none focus:border-orange-500 text-2xl font-bold placeholder:text-gray-200 shadow-inner transition-all resize-none" placeholder="Lời giải, phép tính và đáp số đầy đủ..."></textarea>
                        </div>
                        <div class="flex items-center gap-6 p-6 bg-orange-50/50 rounded-3xl">
                            <span class="text-xl font-black text-orange-900 shrink-0">Số tiền cuối cùng:</span>
                            <input type="number" id="ans-121-3" class="flex-grow p-4 rounded-2xl border-2 border-orange-200 outline-none focus:border-orange-500 text-4xl font-black text-orange-600" placeholder="?">
                            <span class="text-2xl font-black text-gray-400">đồng</span>
                        </div>
                        <div class="pt-6 flex justify-center">
                            <button onclick="Lesson.submitWordProblemAI('121-3')" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-black text-base transition-all active:scale-95 shadow-lg shadow-blue-100 border-b-4 border-blue-800">
                                Thầy E chấm bài
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div id="box-121-4" class="bg-white p-6 md:p-12 rounded-[56px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div class="absolute top-0 right-0 w-60 h-60 bg-rose-50 rounded-bl-full -z-0 opacity-60 group-hover:scale-110 transition-transform"></div>
                <div class="relative z-10">
                    <p class="font-black text-3xl md:text-4xl mb-12 text-rose-700 flex items-center gap-6">
                        <span class="w-16 h-16 bg-rose-600 text-white rounded-[24px] flex items-center justify-center font-black shadow-xl shadow-rose-200">4</span>
                        Câu hỏi tư duy:
                    </p>
                    <div class="bg-rose-50/50 p-10 rounded-[60px] border-2 border-rose-100 mb-10">
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
                            <img src="hinh_anh/toan/toan_tap_2/121-b4-kids-cubes.png" alt="Logic" class="w-full max-w-[420px] h-auto rounded-[48px] shadow-2xl border-8 border-white mx-auto">
                            <div class="space-y-6">
                                <p class="text-2xl font-bold text-rose-900 leading-relaxed">
                                    Nam có hai hình lập phương cạnh 4 cm. Bạn ấy đặt hai hình cạnh nhau để tạo thành một hình hộp chữ nhật.
                                </p>
                                <p class="text-2xl font-black text-rose-700 italic border-l-8 border-rose-300 pl-6">
                                    Mai nói rằng: "Diện tích toàn phần của hình hộp chữ nhật gấp 2 lần diện tích toàn phần của hình lập phương."
                                </p>
                                <p class="text-3xl font-black text-gray-900 uppercase tracking-tighter">Hỏi Mai nhận xét đúng hay sai?</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row justify-center gap-8 max-w-2xl mx-auto">
                        <button onclick="check121_4(true)" class="flex-1 py-10 bg-emerald-50 hover:bg-emerald-100 border-4 border-emerald-200 rounded-[48px] text-5xl font-black text-emerald-600 transition-all active:scale-95 shadow-xl shadow-emerald-100/50">ĐÚNG ✅</button>
                        <button onclick="check121_4(false)" class="flex-1 py-10 bg-rose-50 hover:bg-rose-100 border-4 border-rose-200 rounded-[48px] text-5xl font-black text-rose-600 transition-all active:scale-95 shadow-xl shadow-rose-100/50">SAI ❌</button>
                    </div>
                </div>
            </div>

            <!-- Nộp bài toàn diện -->
            <div class="flex flex-col items-center gap-6 pt-12 border-t-4 border-dashed border-gray-100">
                <button id="btn-submit-121" onclick="submit121()" class="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    Nộp bài
                </button>
            </div>

            <script>
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
        { "question": "Tính diện tích xung quanh hình lập phương cạnh 10cm.", "options": ["400 cm²", "600 cm²", "100 cm²", "1000 cm²"], "answer": 0, "level": 1 },
        { "question": "Một cái hộp không nắp cạnh 2dm. Diện tích toàn phần là bao nhiêu?", "options": ["16 dm²", "24 dm²", "20 dm²", "8 dm²"], "answer": 2, "level": 2 },
        { "question": "Diện tích một mặt hình lập phương là 25cm². Diện tích toàn phần là:", "options": ["100 cm²", "150 cm²", "125 cm²", "250 cm²"], "answer": 1, "level": 1 },
        { "question": "Cạnh hình lập phương gấp lên 2 lần thì Sxq gấp lên mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 2 },
        { "question": "Nếu Sxq của hình lập phương là 36cm² thì cạnh của nó là:", "options": ["3 cm", "6 cm", "4 cm", "9 cm"], "answer": 0, "level": 3 }
    ]
};
