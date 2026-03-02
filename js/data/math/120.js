export const lesson120 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "120",
    "title": "DIỆN TÍCH XUNG QUANH VÀ TOÀN PHẦN HÌNH LẬP PHƯƠNG",
    "desc": "Bài 51: Diện tích xung quanh và diện tích toàn phần của hình lập phương (Tiết 1 - Trang 48-49).",
    "content": `
        <div class="space-y-2 text-indigo-900 animate-fade-in">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-3xl text-white shadow-xl flex items-center gap-6">
                <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-4xl">🎯</div>
                <div>
                    <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight mb-1">Mục tiêu bài học</h3>
                    <ul class="list-disc list-inside font-bold text-lg md:text-2xl opacity-95 space-y-1">
                        <li>Tính Diện tích xung quanh (Sxq) hình lập phương.</li>
                        <li>Tính Diện tích toàn phần (Stp) hình lập phương.</li>
                    </ul>
                </div>
            </div>

            <!-- 📖 Khám phá a: Thùng gỗ -->
            <div class="bg-white p-6 rounded-3xl border border-indigo-100 shadow-xl overflow-hidden relative">
                <div class="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -z-0 opacity-50"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="bg-amber-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-2xl">a</span>
                            <h4 class="text-2xl md:text-4xl font-black text-amber-700 uppercase">Dán giấy cho thùng gỗ</h4>
                        </div>
                        <p class="text-xl md:text-2xl font-bold leading-tight text-gray-700">
                            Việt dán giấy màu cho 4 mặt <span class="text-amber-600 font-black">xung quanh</span> của thùng gỗ cạnh 30 cm.
                        </p>
                        <div class="bg-amber-50 p-4 rounded-2xl border-l-8 border-amber-400">
                            <p class="font-black text-amber-900 text-lg md:text-xl leading-snug italic">"Sxq hình lập phương bằng diện tích một mặt nhân với 4."</p>
                        </div>
                        <div class="bg-indigo-600 p-4 rounded-2xl text-white shadow-lg text-center">
                            <p class="text-3xl md:text-5xl font-black">S<sub>xq</sub> = (a × a) × 4</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-xq.png" alt="Sxq" class="w-full max-w-[320px] h-auto rounded-3xl shadow-2xl border-8 border-white">
                    </div>
                </div>
            </div>

            <!-- 📖 Khám phá b: Chiếc gối -->
            <div class="bg-white p-6 rounded-3xl border border-purple-100 shadow-xl overflow-hidden relative">
                <div class="absolute top-0 left-0 w-24 h-24 bg-purple-100 rounded-br-full -z-0 opacity-50"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    <div class="flex justify-center order-2 lg:order-1">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-tp.png" alt="Stp" class="w-full max-w-[320px] h-auto rounded-3xl shadow-2xl border-8 border-white">
                    </div>
                    <div class="space-y-4 order-1 lg:order-2">
                        <div class="flex items-center gap-3">
                            <span class="bg-purple-500 text-white w-10 h-10 rounded-xl flex items-center justify-center font-black text-2xl">b</span>
                            <h4 class="text-2xl md:text-4xl font-black text-purple-700 uppercase">Vỏ gối hình lập phương</h4>
                        </div>
                        <p class="text-xl md:text-2xl font-bold leading-tight text-gray-700">
                            Diện tích vải để may <span class="text-purple-600 font-black">tất cả 6 mặt</span> của gối cạnh 30 cm.
                        </p>
                        <div class="bg-purple-50 p-4 rounded-2xl border-l-8 border-purple-400">
                            <p class="font-black text-purple-900 text-lg md:text-xl leading-snug italic">"Stp hình lập phương bằng diện tích một mặt nhân với 6."</p>
                        </div>
                        <div class="bg-purple-600 p-4 rounded-2xl text-white shadow-lg text-center">
                            <p class="text-3xl md:text-5xl font-black">S<sub>tp</sub> = (a × a) × 6</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 💡 Ghi nhớ -->
            <div class="bg-emerald-50 p-6 rounded-[32px] border-4 border-emerald-200 shadow-xl flex items-center gap-6 animate-pulse-subtle">
                <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-5xl shadow-inner shrink-0">💡</div>
                <div class="text-2xl md:text-4xl font-black text-emerald-900 leading-tight">
                    Hình lập phương có 6 mặt là các hình vuông <span class="text-emerald-600 underline decoration-4 underline-offset-8">bằng nhau</span>.
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-4 animate-fade-in">
            <!-- Bài tập 1 -->
            <div id="box-120-1" class="bg-white p-4 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -z-0 opacity-40"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl md:text-3xl mb-4 text-indigo-700 flex items-center gap-4">
                        <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg shadow-indigo-200">1</span>
                        Tính diện tích xung quanh và toàn phần:
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- a) 12 cm -->
                        <div id="box-120-1a" class="bg-gray-50 p-6 rounded-3xl border-2 border-transparent transition-all text-center md:text-left">
                            <h4 class="text-2xl md:text-4xl font-black text-indigo-800 mb-6 flex items-center justify-center md:justify-start gap-3">
                                <span>a) Cạnh a = 12 cm</span>
                            </h4>
                            <div class="grid grid-cols-1 gap-4">
                                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <label class="block text-gray-400 font-black text-xs md:text-sm uppercase tracking-widest mb-2">Diện tích xung quanh</label>
                                    <div class="flex items-center gap-3">
                                        <input type="number" id="ans-120-1a-xq" class="w-full text-4xl md:text-6xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-2xl md:text-3xl font-black text-gray-300">cm²</span>
                                    </div>
                                </div>
                                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <label class="block text-gray-400 font-black text-xs md:text-sm uppercase tracking-widest mb-2">Diện tích toàn phần</label>
                                    <div class="flex items-center gap-3">
                                        <input type="number" id="ans-120-1a-tp" class="w-full text-4xl md:text-6xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-2xl md:text-3xl font-black text-gray-300">cm²</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- b) 1.5 m -->
                        <div id="box-120-1b" class="bg-gray-50 p-6 rounded-3xl border-2 border-transparent transition-all text-center md:text-left">
                            <h4 class="text-2xl md:text-4xl font-black text-emerald-800 mb-6 flex items-center justify-center md:justify-start gap-3">
                                <span>b) Cạnh a = 1,5 m</span>
                            </h4>
                            <div class="grid grid-cols-1 gap-4">
                                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <label class="block text-gray-400 font-black text-xs md:text-sm uppercase tracking-widest mb-2">Diện tích xung quanh</label>
                                    <div class="flex items-center gap-3">
                                        <input type="number" step="0.01" id="ans-120-1b-xq" class="w-full text-4xl md:text-6xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-2xl md:text-3xl font-black text-gray-300">m²</span>
                                    </div>
                                </div>
                                <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                    <label class="block text-gray-400 font-black text-xs md:text-sm uppercase tracking-widest mb-2">Diện tích toàn phần</label>
                                    <div class="flex items-center gap-3">
                                        <input type="number" step="0.01" id="ans-120-1b-tp" class="w-full text-4xl md:text-6xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-2xl md:text-3xl font-black text-gray-300">m²</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-120-2" class="bg-white p-4 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-24 h-24 bg-amber-50 rounded-br-full -z-0 opacity-40"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl md:text-3xl mb-4 text-amber-700 flex items-center gap-4">
                        <span class="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center font-black shadow-lg shadow-amber-200">2</span>
                        Giải bài toán:
                    </p>
                    <div class="bg-amber-50/50 p-4 rounded-2xl border-2 border-amber-100 mb-4">
                        <div class="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                            <div class="lg:col-span-3 space-y-4">
                                <p class="text-xl md:text-2xl font-bold text-amber-900 leading-tight">
                                    Cửa hàng bảo quản bằng cách cuốn túi bóng <span class="text-amber-600 font-black">vừa đủ quanh chiếc bánh</span> hình lập phương cạnh <span class="text-amber-600 font-black underline">9 cm</span>. Tính diện tích túi bóng cần dùng.
                                </p>
                            </div>
                            <div class="lg:col-span-2 flex justify-center">
                                <img src="hinh_anh/toan/toan_tap_2/120-b2-cake.png" alt="Bánh" class="w-full max-w-[200px] h-auto rounded-[32px] shadow-2xl border-4 border-white mb-2">
                            </div>
                        </div>
                    </div>

                    <!-- Khu vực giải toán có lời văn -->
                    <div class="max-w-4xl mx-auto space-y-4 bg-white p-6 rounded-[40px] shadow-2xl border-2 border-amber-100">
                        <!-- Bước 1: Lời giải -->
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center text-xl font-black shrink-0 mt-2">1</div>
                            <div class="flex-grow">
                                <textarea id="wp-solution-120-2" rows="1" 
                                    class="w-full p-4 rounded-2xl border-2 border-amber-200 outline-none focus:border-amber-500 text-2xl font-bold placeholder:text-gray-200 transition-all resize-none shadow-sm" 
                                    placeholder="Lời giải..."></textarea>
                            </div>
                        </div>
                        
                        <!-- Bước 2: Phép tính -->
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center text-xl font-black shrink-0 mt-2">2</div>
                            <div class="flex-grow">
                                <textarea id="wp-calc-120-2" rows="1" 
                                    class="w-full p-4 rounded-2xl border-2 border-orange-200 outline-none focus:border-orange-500 text-3xl font-black text-blue-800 placeholder:text-gray-200 transition-all resize-none shadow-sm" 
                                    placeholder="Phép tính..."></textarea>
                            </div>
                        </div>
                        
                        <!-- Bước 3: Đáp số -->
                        <div class="flex items-start gap-3">
                            <div class="w-10 h-10 bg-rose-500 text-white rounded-xl flex items-center justify-center text-xl font-black shrink-0 mt-2">3</div>
                            <div class="flex-grow flex items-center gap-4">
                                <input type="number" id="ans-120-2" 
                                    class="w-full max-w-[300px] p-4 rounded-2xl border-2 border-rose-200 outline-none focus:border-rose-500 text-4xl font-black text-rose-600 shadow-sm transition-all" 
                                    placeholder="?">
                                <span class="text-2xl md:text-3xl font-black text-gray-300">cm²</span>
                            </div>
                        </div>

                        <div class="mt-8 flex justify-center">
                            <button onclick="Lesson.submitWordProblemAI('120-2')" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-xl transition-all shadow-xl active:scale-95">
                                Thầy E chấm bài
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex flex-col items-center pt-4 border-t border-dashed border-gray-100 mt-4">
                <button id="btn-submit-120" onclick="submit120()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-black text-lg shadow-lg active:scale-95 transition-all">
                    Nộp bài
                </button>
            </div>

            <script>
                window.submit120 = function() {
                    const a1ax = document.getElementById('ans-120-1a-xq').value;
                    const a1at = document.getElementById('ans-120-1a-tp').value;
                    const a1bx = document.getElementById('ans-120-1b-xq').value;
                    const a1bt = document.getElementById('ans-120-1b-tp').value;
                    const a2 = document.getElementById('ans-120-2').value;

                    if (!a1ax || !a1at || !a1bx || !a1bt || !a2) {
                        alert("Thầy E nhắc bạn: Hãy hoàn thành tất cả các ô trống để nộp bài nhé! 🌟");
                        return;
                    }

                    let score = 0;
                    
                    // Reset visual feedback
                    ['1a', '1b', '2'].forEach(id => {
                        const box = document.getElementById('box-120-' + id);
                        box.classList.remove('border-emerald-400', 'bg-emerald-50', 'border-red-400', 'bg-red-50');
                        box.classList.add('border-4', 'border-transparent');
                    });

                    // Check results
                    // 1a: a=12 -> Sxq = 12*12*4 = 576, Stp = 12*12*6 = 864
                    let c1a = (parseInt(a1ax) === 576 && parseInt(a1at) === 864);
                    // 1b: a=1.5 -> Sxq = 1.5*1.5*4 = 9, Stp = 1.5*1.5*6 = 13.5
                    let c1b = (parseFloat(a1bx.replace(',', '.')) === 9 && parseFloat(a1bt.replace(',', '.')) === 13.5);
                    // 2: a=9 -> Sxq (cuốn quanh) = 9*9*4 = 324
                    let c2 = (parseInt(a2) === 324);

                    const box1a = document.getElementById('box-120-1a');
                    const box1b = document.getElementById('box-120-1b');
                    const box2 = document.getElementById('box-120-2');

                    if (c1a) { score += 3; box1a.classList.replace('border-transparent', 'border-emerald-400'); box1a.classList.add('bg-emerald-50'); } 
                    else { box1a.classList.replace('border-transparent', 'border-red-400'); box1a.classList.add('bg-red-50'); }
                    
                    if (c1b) { score += 3; box1b.classList.replace('border-transparent', 'border-emerald-400'); box1b.classList.add('bg-emerald-50'); } 
                    else { box1b.classList.replace('border-transparent', 'border-red-400'); box1b.classList.add('bg-red-50'); }
                    
                    if (c2) { score += 4; box2.classList.add('border-emerald-400', 'bg-emerald-50'); } 
                    else { box2.classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 6 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-120");
                    }
                    
                    if (score === 10) {
                        alert("Chúc mừng! Bạn đạt điểm tuyệt đối 10/10. Bạn thật xuất sắc! 🌟");
                    } else {
                        alert("Bạn đã hoàn thành bài rồi! Điểm của bạn: " + score + "/10. Hãy kiểm tra các ô màu đỏ nhé! 📚");
                    }
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Hình lập phương có mấy mặt bằng nhau?", "options": ["6 mặt", "4 mặt", "8 mặt", "12 mặt"], "answer": 0, "level": 1 },
        { "question": "Diện tích một mặt của hình lập phương có cạnh a là:", "options": ["a × a", "a × 4", "a × 6", "a × a × 4"], "answer": 0, "level": 1 },
        { "question": "Công thức tính diện tích xung quanh của hình lập phương cạnh a là:", "options": ["Sxq = (a × a) × 4", "Sxq = (a × a) × 6", "Sxq = a × 4", "Sxq = a × a"], "answer": 0, "level": 1 },
        { "question": "Công thức tính diện tích toàn phần của hình lập phương cạnh a là:", "options": ["Stp = (a × a) × 6", "Stp = (a × a) × 4", "Stp = a × 6", "Stp = a × a"], "answer": 0, "level": 1 },
        { "question": "Một hình lập phương có cạnh 2cm. Diện tích xung quanh của nó là:", "options": ["16 cm²", "8 cm²", "24 cm²", "4 cm²"], "answer": 0, "level": 1 },
        { "question": "Một hình lập phương có cạnh 3dm. Diện tích toàn phần của nó là:", "options": ["54 dm²", "36 dm²", "9 dm²", "27 dm²"], "answer": 0, "level": 1 },
        { "question": "Nếu cạnh của hình lập phương gấp lên 3 lần thì diện tích xung quanh gấp lên mấy lần?", "options": ["9 lần", "3 lần", "6 lần", "12 lần"], "answer": 0, "level": 2 },
        { "question": "Diện tích toàn phần của hình lập phương có cạnh 1,1m là:", "options": ["7,26 m²", "4,84 m²", "1,21 m²", "6,6 m²"], "answer": 0, "level": 1 },
        { "question": "Một cái hộp hình lập phương không có nắp cạnh 5dm. Diện tích giấy cần để dán mặt ngoài của hộp là:", "options": ["125 dm²", "100 dm²", "150 dm²", "25 dm²"], "answer": 0, "level": 2 },
        { "question": "Hình lập phương là hình hộp chữ nhật đặc biệt có:", "options": ["Chiều dài = Chiều rộng = Chiều cao", "Chiều dài > Chiều rộng", "Có 6 mặt là hình chữ nhật", "Có 12 cạnh không bằng nhau"], "answer": 0, "level": 1 },
        { "question": "Muốn tính diện tích toàn phần hình lập phương, ta lấy diện tích một mặt nhân với mấy?", "options": ["6", "4", "12", "2"], "answer": 0, "level": 1 },
        { "question": "Một hình lập phương có diện tích một mặt là 25 cm². Cạnh của hình lập phương đó là:", "options": ["5 cm", "4 cm", "6 cm", "25 cm"], "answer": 0, "level": 1 },
        { "question": "Một hình lập phương có diện tích xung quanh là 100 cm². Diện tích một mặt của nó là:", "options": ["25 cm²", "20 cm²", "50 cm²", "400 cm²"], "answer": 0, "level": 1 },
        { "question": "Một hình lập phương có diện tích toàn phần là 96 dm². Diện tích một mặt của nó là:", "options": ["16 dm²", "24 dm²", "6 dm²", "12 dm²"], "answer": 0, "level": 1 },
        { "question": "Nếu diện tích một mặt của hình lập phương tăng 4 lần thì cạnh của nó tăng mấy lần?", "options": ["2 lần", "4 lần", "8 lần", "16 lần"], "answer": 0, "level": 2 }
    ]
};
