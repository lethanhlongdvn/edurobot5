export const lesson121 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "121",
    "title": "BÀI 49: LUYỆN TẬP",
    "desc": "Luyện tập tính diện tích xung quanh và diện tích toàn phần của hình lập phương thông qua các bài toán vận dụng thực tế.",
    "content": `
        <div class="space-y-2">
            <!-- 🌟 Mục tiêu & Nhắc lại kiến thức -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <!-- Sxq -->
                <div class="bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-2xl shadow-xl">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-md border border-white/20">
                            <span class="text-xl text-white font-black italic">Sxq</span>
                        </div>
                        <h3 class="text-lg font-black text-white italic">Diện tích xung quanh</h3>
                    </div>
                    <div class="bg-white p-3 rounded-xl shadow-inner text-center">
                        <p class="text-2xl font-black text-orange-600">Sxq = (a × a) × 4</p>
                    </div>
                </div>

                <!-- Stp -->
                <div class="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-2xl shadow-xl">
                    <div class="flex items-center gap-3 mb-2">
                        <div class="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-md border border-white/20">
                            <span class="text-xl text-white font-black italic">Stp</span>
                        </div>
                        <h3 class="text-lg font-black text-white italic">Diện tích toàn phần</h3>
                    </div>
                    <div class="bg-white p-3 rounded-xl shadow-inner text-center">
                        <p class="text-2xl font-black text-indigo-600">Stp = (a × a) × 6</p>
                    </div>
                </div>
            </div>

            <!-- 💡 Lưu ý quan trọng -->
            <div class="bg-blue-50 p-4 rounded-2xl border-2 border-dashed border-blue-200">
                <p class="text-blue-600 font-black text-sm uppercase mb-1">💡 LƯU Ý</p>
                <ul class="space-y-1">
                    <li class="flex items-start gap-2 text-lg font-bold text-blue-900 leading-snug">
                        <span class="text-blue-500">•</span> Xác định đề bài tính mấy mặt.
                    </li>
                    <li class="flex items-start gap-2 text-lg font-bold text-blue-900 leading-snug">
                        <span class="text-blue-500">•</span> VD: Không nắp (5 mặt), Xung quanh (4 mặt).
                    </li>
                </ul>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-4">
            <!-- Bài tập 1 -->
            <div id="box-121-1" class="bg-white p-3 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-full -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl mb-4 text-indigo-700 flex items-center gap-3">
                        <span class="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-black shadow-lg shadow-indigo-200">1</span>
                        Tính diện tích mảnh nhựa (Sxq):
                    </p>
                    <div class="bg-indigo-50/50 p-4 rounded-2xl border-2 border-indigo-100 mb-4">
                        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                            <p class="md:col-span-3 text-lg font-bold text-indigo-900 leading-tight">
                                Tính diện tích các mảnh nhựa màu (4 mặt xung quanh) dán cho các đèn hình lập phương dưới đây:
                            </p>
                            <div class="md:col-span-2 flex justify-center">
                                <img src="hinh_anh/toan/toan_tap_2/121-b1-lamps.png" alt="Đèn" class="w-full max-w-[200px] h-auto rounded-xl shadow-lg border-2 border-white">
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div class="bg-white p-3 rounded-xl shadow border border-indigo-50 text-center space-y-1">
                            <p class="font-black text-indigo-400 text-[10px] uppercase">Cạnh 25cm</p>
                            <div class="flex items-center justify-center gap-1">
                                <input type="number" id="ans-121-1a" class="w-full text-2xl font-black text-indigo-600 bg-indigo-50 rounded-xl p-2 text-center border-none" placeholder="?">
                                <span class="text-sm font-bold text-gray-400 italic">cm²</span>
                            </div>
                        </div>
                        <div class="bg-white p-3 rounded-xl shadow border border-indigo-50 text-center space-y-1">
                            <p class="font-black text-indigo-400 text-[10px] uppercase">Cạnh 15cm</p>
                            <div class="flex items-center justify-center gap-1">
                                <input type="number" id="ans-121-1b" class="w-full text-2xl font-black text-indigo-600 bg-indigo-50 rounded-xl p-2 text-center border-none" placeholder="?">
                                <span class="text-sm font-bold text-gray-400 italic">cm²</span>
                            </div>
                        </div>
                        <div class="bg-white p-3 rounded-xl shadow border border-indigo-50 text-center space-y-1">
                            <p class="font-black text-indigo-400 text-[10px] uppercase">Cạnh 30cm</p>
                            <div class="flex items-center justify-center gap-1">
                                <input type="number" id="ans-121-1c" class="w-full text-2xl font-black text-indigo-600 bg-indigo-50 rounded-xl p-2 text-center border-none" placeholder="?">
                                <span class="text-sm font-bold text-gray-400 italic">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-121-2" class="bg-white p-3 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute -top-10 -left-10 w-40 h-40 bg-emerald-50 rounded-full -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl mb-4 text-emerald-700 flex items-center gap-3">
                        <span class="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-black shadow-lg shadow-emerald-200">2</span>
                        Giải bài toán:
                    </p>
                    <div class="bg-emerald-50/50 p-4 rounded-2xl border-2 border-emerald-100 mb-4">
                        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                            <p class="md:col-span-3 text-lg font-bold text-emerald-900 leading-tight">
                                Mai tính phủ kẹo 5 mặt (4 mặt XQ + mặt trên) của chiếc bánh hình lập phương cạnh <span class="text-emerald-600 underline font-black">10 cm</span>. Tính diện tích cần phủ kẹo.
                            </p>
                            <div class="md:col-span-2 flex justify-center">
                                <img src="hinh_anh/toan/toan_tap_2/121-b2-mai-cake.png" alt="Mai Cake" class="w-full max-w-[180px] h-auto rounded-xl shadow-lg border-2 border-white mx-auto">
                            </div>
                        </div>
                    </div>

                    <!-- 3 Bước giải bài -->
                    <div class="max-w-4xl mx-auto space-y-3 bg-white p-4 rounded-2xl shadow-lg border border-emerald-50">
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-base font-black shrink-0 mt-1">1</div>
                            <div class="flex-grow">
                                <textarea id="wp-solution-121-2" rows="1" class="w-full p-2 rounded-xl border border-emerald-100 outline-none focus:border-emerald-500 text-lg font-bold placeholder:text-gray-200 shadow-sm transition-all resize-none" placeholder="Lời giải..."></textarea>
                            </div>
                        </div>
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-teal-500 text-white rounded-lg flex items-center justify-center text-base font-black shrink-0 mt-1">2</div>
                            <div class="flex-grow">
                                <textarea id="wp-calc-121-2" rows="1" class="w-full p-2 rounded-xl border border-teal-100 outline-none focus:border-teal-500 text-xl font-black text-emerald-700 placeholder:text-gray-200 shadow-sm transition-all resize-none" placeholder="Phép tính..."></textarea>
                            </div>
                        </div>
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-cyan-500 text-white rounded-lg flex items-center justify-center text-base font-black shrink-0 mt-1">3</div>
                            <div class="flex-grow flex items-center gap-2">
                                <input type="number" id="ans-121-2" class="w-48 p-2 rounded-xl border border-cyan-100 outline-none focus:border-cyan-500 text-2xl font-black text-cyan-600 shadow-sm transition-all" placeholder="?">
                                <span class="text-lg font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                        <div class="pt-2 flex justify-center">
                            <button onclick="Lesson.submitWordProblemAI('121-2')" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-black text-sm transition-all shadow-md">
                                Thầy E chấm bài
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-121-3" class="bg-white p-3 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-50 rounded-full -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl mb-4 text-orange-700 flex items-center gap-3">
                        <span class="w-10 h-10 bg-orange-600 text-white rounded-lg flex items-center justify-center font-black shadow-lg shadow-orange-200">3</span>
                        Giải bài toán:
                    </p>
                    <div class="bg-orange-50/50 p-4 rounded-2xl border-2 border-orange-100 mb-4">
                        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                            <p class="md:col-span-3 text-lg font-bold text-orange-900 leading-tight">
                                Trang trí các mặt xung quanh chậu cây hình lập phương cạnh <span class="text-orange-600 font-black">20 cm</span>. Giá dịch vụ: <span class="text-orange-600 underline">25 đồng</span>/cm². Tính số tiền phải trả.
                            </p>
                            <div class="md:col-span-2 flex justify-center">
                                <img src="hinh_anh/toan/toan_tap_2/121-b3-robot-pot.png" alt="Robot Pot" class="w-full max-w-[180px] h-auto rounded-xl shadow-lg border-2 border-white mx-auto">
                            </div>
                        </div>
                    </div>

                    <!-- 3 Bước giải bài -->
                    <div class="max-w-4xl mx-auto space-y-4 bg-white p-4 rounded-2xl shadow-lg border border-orange-50 text-center">
                        <textarea id="wp-solution-121-3" rows="3" class="w-full p-4 rounded-xl border border-orange-100 outline-none focus:border-orange-500 text-lg font-bold placeholder:text-gray-200 shadow-sm transition-all resize-none" placeholder="Lời giải và phép tính..."></textarea>
                        <div class="flex items-center justify-center gap-3 p-3 bg-orange-50/50 rounded-xl">
                            <span class="text-base font-black text-orange-900">Tiền:</span>
                            <input type="number" id="ans-121-3" class="w-48 p-2 rounded-xl border border-orange-200 outline-none focus:border-orange-500 text-2xl font-black text-orange-600" placeholder="?">
                            <span class="text-sm font-black text-gray-400 italic">đồng</span>
                        </div>
                        <div class="pt-2 flex justify-center">
                            <button onclick="Lesson.submitWordProblemAI('121-3')" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-black text-sm transition-all shadow-md">
                                Thầy E chấm bài
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 4 -->
            <div id="box-121-4" class="bg-white p-3 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                    <p class="font-black text-2xl mb-4 text-rose-700 flex items-center gap-3">
                        <span class="w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-black shadow-lg shadow-rose-200">4</span>
                        Câu hỏi tư duy:
                    </p>
                    <div class="bg-rose-50/50 p-4 rounded-2xl border-2 border-rose-100 mb-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                            <img src="hinh_anh/toan/toan_tap_2/121-b4-kids-cubes.png" alt="Logic" class="w-full max-w-[200px] h-auto rounded-xl shadow-lg border-2 border-white mx-auto">
                            <div class="space-y-2">
                                <p class="text-lg font-bold text-rose-900 leading-tight">
                                    Ghép 2 lập phương cạnh 4 cm thành 1 hộp chữ nhật. Mai nói: "Stp hộp chữ nhật gấp 2 lần Stp lập phương ban đầu."
                                </p>
                                <p class="text-xl font-black text-rose-700 uppercase italic">Mai nói đúng hay sai?</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center gap-4 max-w-lg mx-auto">
                        <button onclick="check121_4(true)" class="flex-1 py-4 bg-emerald-50 hover:bg-emerald-100 border-2 border-emerald-200 rounded-xl text-2xl font-black text-emerald-600 transition-all shadow">ĐÚNG</button>
                        <button onclick="check121_4(false)" class="flex-1 py-4 bg-rose-50 hover:bg-rose-100 border-2 border-rose-200 rounded-xl text-2xl font-black text-rose-600 transition-all shadow">SAI</button>
                    </div>
                </div>
            </div>

            <!-- Nộp bài toàn diện -->
            <div class="flex flex-col items-center pt-4 border-t border-dashed border-gray-100 mt-4">
                <button id="btn-submit-121" onclick="submit121()" class="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black text-lg shadow-lg active:scale-95 transition-all">
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
        { "question": "Công thức tính diện tích xung quanh của hình lập phương cạnh a là:", "options": ["a × a × 4", "a × a × 6", "a × a × 2", "a × a × 8"], "answer": 0, "level": 1 },
        { "question": "Công thức tính diện tích toàn phần của hình lập phương cạnh a là:", "options": ["a × a × 4", "a × a × 6", "a × a × 12", "a × a × 6 × 6"], "answer": 1, "level": 1 },
        { "question": "Một hình lập phương có cạnh 2cm. Diện tích xung quanh là:", "options": ["8 cm²", "16 cm²", "24 cm²", "32 cm²"], "answer": 1, "level": 1 },
        { "question": "Một hình lập phương có cạnh 3dm. Diện tích toàn phần là:", "options": ["36 dm²", "54 dm²", "45 dm²", "90 dm²"], "answer": 1, "level": 2 },
        { "question": "Diện tích một mặt hình lập phương là 10cm². Diện tích toàn phần là:", "options": ["40 cm²", "50 cm²", "60 cm²", "100 cm²"], "answer": 2, "level": 1 },
        { "question": "Hình lập phương có cạnh 1m. Diện tích xung quanh là:", "options": ["1 m²", "4 m²", "6 m²", "8 m²"], "answer": 1, "level": 1 },
        { "question": "Nếu cạnh hình lập phương tăng gấp đôi thì diện tích xung quanh tăng gấp mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 2 },
        { "question": "Tính diện tích giấy để dán kín một cái hộp không nắp cạnh 10cm:", "options": ["400 cm²", "500 cm²", "600 cm²", "1000 cm²"], "answer": 1, "level": 2 },
        { "question": "Hình lập phương có 6 mặt, các mặt đều là hình gì?", "options": ["Hình chữ nhật", "Hình vuông", "Hình tròn", "Hình tam giác"], "answer": 1, "level": 1 },
        { "question": "Muốn tính diện tích toàn phần của hình lập phương, ta lấy diện tích một mặt nhân với:", "options": ["4", "6", "8", "2"], "answer": 1, "level": 1 },
        { "question": "Một chiếc đèn lồng hình lập phương cạnh 20cm, diện tích 4 mặt xung quanh là:", "options": ["800 cm²", "1200 cm²", "1600 cm²", "2400 cm²"], "answer": 2, "level": 2 },
        { "question": "Diện tích toàn phần của hình lập phương cạnh 0,5m là:", "options": ["1 m²", "1,25 m²", "1,5 m²", "2,5 m²"], "answer": 2, "level": 3 },
        { "question": "Nếu cạnh hình lập phương là 4cm thì diện tích một mặt là:", "options": ["8 cm²", "12 cm²", "16 cm²", "24 cm²"], "answer": 2, "level": 1 },
        { "question": "Tổng diện tích 4 mặt bên của hình lập phương được gọi là:", "options": ["Diện tích toàn phần", "Diện tích xung quanh", "Chu vi đáy", "Diện tích đáy"], "answer": 1, "level": 1 },
        { "question": "Một chiếc hộp hình lập phương cạnh 1m có diện tích đáy là bao nhiêu dm²?", "options": ["10 dm²", "100 dm²", "1000 dm²", "1 dm²"], "answer": 1, "level": 2 }
    ]
};
