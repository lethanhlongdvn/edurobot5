export const lesson120 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "120",
    "title": "DIỆN TÍCH XUNG QUANH VÀ TOÀN PHẦN HÌNH LẬP PHƯƠNG",
    "desc": "Bài 51: Diện tích xung quanh và diện tích toàn phần của hình lập phương (Tiết 1 - Trang 48-49).",
    "content": `
        <div class="space-y-2 text-indigo-900 animate-fade-in">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-gradient-to-br from-indigo-600 to-blue-700 p-4 rounded-2xl text-white shadow-xl flex items-center gap-4">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-3xl">🎯</div>
                <div>
                    <h3 class="text-xl font-black uppercase tracking-tight mb-1">Mục tiêu bài học</h3>
                    <ul class="list-disc list-inside font-bold text-lg opacity-95 space-y-1">
                        <li>Tính Diện tích xung quanh (Sxq) hình lập phương.</li>
                        <li>Tính Diện tích toàn phần (Stp) hình lập phương.</li>
                    </ul>
                </div>
            </div>

            <!-- 📖 Khám phá a: Thùng gỗ -->
            <div class="bg-white p-3 rounded-2xl border border-indigo-100 shadow-xl overflow-hidden relative">
                <div class="absolute top-0 right-0 w-24 h-24 bg-amber-100 rounded-bl-full -z-0 opacity-50"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div class="space-y-3">
                        <div class="flex items-center gap-2">
                            <span class="bg-amber-500 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-lg">a</span>
                            <h4 class="text-xl font-black text-amber-700 uppercase">Dán giấy cho thùng gỗ</h4>
                        </div>
                        <p class="text-xl font-bold leading-snug text-gray-700">
                            Việt dán giấy màu cho 4 mặt <span class="text-amber-600 font-black">xung quanh</span> của thùng gỗ cạnh 30 cm.
                        </p>
                        <div class="bg-amber-50 p-3 rounded-xl border-l-4 border-amber-400">
                            <p class="font-black text-amber-900 text-base leading-snug italic">"Sxq hình lập phương bằng diện tích một mặt nhân với 4."</p>
                        </div>
                        <div class="bg-indigo-600 p-4 rounded-2xl text-white shadow-lg text-center">
                            <p class="text-4xl font-black">S<sub>xq</sub> = (a × a) × 4</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-xq.png" alt="Sxq" class="w-full max-w-[240px] h-auto rounded-2xl shadow-lg border-4 border-white">
                    </div>
                </div>
            </div>

            <!-- 📖 Khám phá b: Chiếc gối -->
            <div class="bg-white p-3 rounded-2xl border border-purple-100 shadow-xl overflow-hidden relative">
                <div class="absolute top-0 left-0 w-24 h-24 bg-purple-100 rounded-br-full -z-0 opacity-50"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
                    <div class="flex justify-center order-2 lg:order-1">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-tp.png" alt="Stp" class="w-full max-w-[240px] h-auto rounded-2xl shadow-lg border-4 border-white">
                    </div>
                    <div class="space-y-3 order-1 lg:order-2">
                        <div class="flex items-center gap-2">
                            <span class="bg-purple-500 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black text-lg">b</span>
                            <h4 class="text-xl font-black text-purple-700 uppercase">Vỏ gối hình lập phương</h4>
                        </div>
                        <p class="text-xl font-bold leading-snug text-gray-700">
                            Diện tích vải để may <span class="text-purple-600 font-black">tất cả 6 mặt</span> của gối cạnh 30 cm.
                        </p>
                        <div class="bg-purple-50 p-3 rounded-xl border-l-4 border-purple-400">
                            <p class="font-black text-purple-900 text-base leading-snug italic">"Stp hình lập phương bằng diện tích một mặt nhân với 6."</p>
                        </div>
                        <div class="bg-purple-600 p-4 rounded-2xl text-white shadow-lg text-center">
                            <p class="text-4xl font-black">S<sub>tp</sub> = (a × a) × 6</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 💡 Ghi nhớ -->
            <div class="bg-emerald-50 p-4 rounded-2xl border-2 border-emerald-100 shadow-inner flex items-center gap-4">
                <div class="text-4xl">💡</div>
                <div class="text-xl font-black text-emerald-900 leading-tight">
                    Hình lập phương có 6 mặt là các hình vuông <span class="text-emerald-600 underline">bằng nhau</span>.
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-4 animate-fade-in">
            <!-- Bài tập 1 -->
            <div id="box-120-1" class="bg-white p-3 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -z-0 opacity-40"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl mb-4 text-indigo-700 flex items-center gap-3">
                        <span class="w-10 h-10 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-black shadow-lg shadow-indigo-200">1</span>
                        Tính diện tích xung quanh và toàn phần:
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- a) 12 cm -->
                        <div id="box-120-1a" class="bg-gray-50 p-3 rounded-2xl border-2 border-transparent transition-all">
                            <h4 class="text-xl font-black text-indigo-800 mb-4 flex items-center gap-2">
                                <span>a) Cạnh a = 12 cm</span>
                            </h4>
                            <div class="grid grid-cols-1 gap-3">
                                <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                    <label class="block text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">Diện tích xung quanh</label>
                                    <div class="flex items-center gap-2">
                                        <input type="number" id="ans-120-1a-xq" class="w-full text-3xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-xl font-black text-gray-300">cm²</span>
                                    </div>
                                </div>
                                <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                    <label class="block text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">Diện tích toàn phần</label>
                                    <div class="flex items-center gap-2">
                                        <input type="number" id="ans-120-1a-tp" class="w-full text-3xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-xl font-black text-gray-300">cm²</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- b) 1.5 m -->
                        <div id="box-120-1b" class="bg-gray-50 p-3 rounded-2xl border-2 border-transparent transition-all">
                            <h4 class="text-xl font-black text-emerald-800 mb-4 flex items-center gap-2">
                                <span>b) Cạnh a = 1,5 m</span>
                            </h4>
                            <div class="grid grid-cols-1 gap-3">
                                <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                    <label class="block text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">Diện tích xung quanh</label>
                                    <div class="flex items-center gap-2">
                                        <input type="number" step="0.01" id="ans-120-1b-xq" class="w-full text-3xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-xl font-black text-gray-300">m²</span>
                                    </div>
                                </div>
                                <div class="bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                                    <label class="block text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1">Diện tích toàn phần</label>
                                    <div class="flex items-center gap-2">
                                        <input type="number" step="0.01" id="ans-120-1b-tp" class="w-full text-3xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-xl font-black text-gray-300">m²</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-120-2" class="bg-white p-3 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-24 h-24 bg-amber-50 rounded-br-full -z-0 opacity-40"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl mb-4 text-amber-700 flex items-center gap-3">
                        <span class="w-10 h-10 bg-amber-600 text-white rounded-lg flex items-center justify-center font-black shadow-lg shadow-amber-200">2</span>
                        Giải bài toán:
                    </p>
                    <div class="bg-amber-50/50 p-4 rounded-2xl border-2 border-amber-100 mb-4">
                        <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                            <div class="lg:col-span-3 space-y-2">
                                <p class="text-xl font-bold text-amber-900 leading-snug">
                                    Cửa hàng bảo quản bằng cách cuốn túi bóng <span class="text-amber-600 font-black">vừa đủ quanh chiếc bánh</span> hình lập phương cạnh <span class="text-amber-600 font-black underline">9 cm</span>. Tính diện tích túi bóng cần dùng.
                                </p>
                            </div>
                            <div class="lg:col-span-2 flex justify-center">
                                <img src="hinh_anh/toan/toan_tap_2/120-b2-cake.png" alt="Bánh" class="w-full max-w-[180px] h-auto rounded-3xl shadow-lg border-4 border-white mb-2">
                            </div>
                        </div>
                    </div>

                    <!-- Khu vực giải toán có lời văn -->
                    <div class="max-w-4xl mx-auto space-y-3 bg-white p-4 rounded-3xl shadow-lg border border-amber-100">
                        <!-- Bước 1: Lời giải -->
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-amber-500 text-white rounded-lg flex items-center justify-center text-base font-black shrink-0 mt-1">1</div>
                            <div class="flex-grow">
                                <textarea id="wp-solution-120-2" rows="1" 
                                    class="w-full p-2 rounded-xl border border-amber-200 outline-none focus:border-amber-500 text-lg font-bold placeholder:text-gray-200 transition-all resize-none shadow-sm" 
                                    placeholder="Lời giải..."></textarea>
                            </div>
                        </div>
                        
                        <!-- Bước 2: Phép tính -->
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-base font-black shrink-0 mt-1">2</div>
                            <div class="flex-grow">
                                <textarea id="wp-calc-120-2" rows="1" 
                                    class="w-full p-2 rounded-xl border border-orange-200 outline-none focus:border-orange-500 text-xl font-black text-blue-800 placeholder:text-gray-200 transition-all resize-none shadow-sm" 
                                    placeholder="Phép tính..."></textarea>
                            </div>
                        </div>
                        
                        <!-- Bước 3: Đáp số -->
                        <div class="flex items-start gap-2">
                            <div class="w-8 h-8 bg-rose-500 text-white rounded-lg flex items-center justify-center text-base font-black shrink-0 mt-1">3</div>
                            <div class="flex-grow flex items-center gap-2">
                                <input type="number" id="ans-120-2" 
                                    class="w-full max-w-[200px] p-2 rounded-xl border border-rose-200 outline-none focus:border-rose-500 text-2xl font-black text-rose-600 shadow-sm transition-all" 
                                    placeholder="?">
                                <span class="text-lg font-black text-gray-300">cm²</span>
                            </div>
                        </div>

                        <div class="mt-4 flex justify-center">
                            <button onclick="Lesson.submitWordProblemAI('120-2')" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-black text-sm transition-all shadow-md">
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
        { "question": "Muốn tính diện tích xung quanh của hình lập phương, ta lấy diện tích một mặt nhân với mấy?", "options": ["4", "6", "2", "8"], "answer": 0, "level": 1 },
        { "question": "Tính diện tích xung quanh của hình lập phương có cạnh 5 cm.", "options": ["25 cm²", "100 cm²", "150 cm²", "50 cm²"], "answer": 1, "level": 1 },
        { "question": "Hình lập phương có cạnh 2 dm. Diện tích toàn phần của nó là bao nhiêu?", "options": ["16 dm²", "24 dm²", "8 dm²", "4 dm²"], "answer": 1, "level": 1 },
        { "question": "Diện tích một mặt của hình lập phương là 9 cm². Diện tích toàn phần của nó là:", "options": ["36 cm²", "54 cm²", "81 cm²", "45 cm²"], "answer": 1, "level": 1 },
        { "question": "Diện tích xung quanh của hình lập phương là 64 cm². Diện tích một mặt của nó là:", "options": ["16 cm²", "8 cm²", "4 cm²", "32 cm²"], "answer": 0, "level": 1 },
        { "question": "Nếu cạnh của hình lập phương gấp lên 2 lần thì diện tích xung quanh gấp lên mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 1, "level": 2 },
        { "question": "Nếu cạnh của hình lập phương gấp lên 3 lần thì diện tích toàn phần gấp lên mấy lần?", "options": ["3 lần", "6 lần", "9 lần", "27 lần"], "answer": 2, "level": 2 },
        { "question": "Một cái hộp không nắp hình lập phương cạnh 10 cm. Diện tích giấy cần để dán bên ngoài hộp là:", "options": ["400 cm²", "600 cm²", "500 cm²", "1000 cm²"], "answer": 2, "level": 2 },
        { "question": "Hình lập phương có cạnh 0,5 m. Tính diện tích xung quanh.", "options": ["1 m²", "1,5 m²", "0,25 m²", "2 m²"], "answer": 0, "level": 1 },
        { "question": "Tính diện tích toàn phần của hình lập phương có cạnh 1,2 dm.", "options": ["5,76 dm²", "8,64 dm²", "1,44 dm²", "7,2 dm²"], "answer": 1, "level": 1 },
        { "question": "Chiều dài các cạnh của hình lập phương bằng nhau đúng hay sai?", "options": ["Đúng", "Sai"], "answer": 0, "level": 1 },
        { "question": "Công thức tính diện tích toàn phần hình lập phương cạnh a là:", "options": ["S = a × a × 4", "S = a × a × 6", "S = a × 4", "S = a × 6"], "answer": 1, "level": 1 },
        { "question": "Diện tích toàn phần của hình lập phương cạnh 1 cm là bao nhiêu?", "options": ["4 cm²", "1 cm²", "6 cm²", "10 cm²"], "answer": 2, "level": 1 },
        { "question": "Một hình lập phương có diện tích toàn phần là 96 cm². Cạnh của nó là:", "options": ["4 cm", "16 cm", "6 cm", "8 cm"], "answer": 0, "level": 3 },
        { "question": "Tổng độ dài các cạnh của một hình lập phương là 36 cm. Diện tích xung quanh của nó là:", "options": ["36 cm²", "54 cm²", "9 cm²", "81 cm²"], "answer": 0, "level": 3 }
    ]
};
