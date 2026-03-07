export const lesson115 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "115",
    "title": "HÌNH KHAI TRIỂN CỦA HLP, HHCN VÀ HÌNH TRỤ",
    "desc": "Bài 49: Hình khai triển của hình lập phương, hình hộp chữ nhật và hình trụ (Trang 40-41).",
    "content": `
        <div class="space-y-6 text-indigo-900">
            <div class="bg-gradient-to-r from-indigo-600 to-blue-700 p-8 md:p-10 rounded-[40px] shadow-2xl flex items-center gap-6 text-white">
                <div class="w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-4xl md:text-5xl">📐</span>
                </div>
                <div>
                    <h3 class="text-2xl md:text-4xl font-black italic tracking-tight">Hình khai triển</h3>
                    <p class="text-base md:text-2xl font-bold opacity-90">Gấp lại thành hình khối</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6">
            <!-- Bài 1 -->
            <div id="box-115-1" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-4 text-blue-700 flex items-center gap-3">
                    <span class="w-12 h-12 md:w-14 md:h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black">1</span>
                    Ghép đèn lồng với hình khai triển:
                </p>
                <div class="bg-blue-50 p-4 md:p-6 rounded-[32px]">
                    <img src="hinh_anh/toan/115_b1.png" alt="SGK B1" class="w-full max-w-[640px] h-auto mx-auto rounded-2xl mb-4 border-2 border-white shadow-md">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 px-1 pb-1">
                        <div class="bg-white/80 p-4 rounded-2xl">
                            <p class="text-sm md:text-base font-black text-gray-400">Đèn vuông (HLP)</p>
                            <select id="b115-1-1" class="w-full bg-yellow-100 border-none rounded-xl text-yellow-700 font-black text-base p-2">
                                <option value="">Chọn...</option>
                                <option value="A">Hình A</option>
                                <option value="B">Hình B</option>
                                <option value="C">Hình C</option>
                            </select>
                        </div>
                        <div class="bg-white/80 p-4 rounded-2xl">
                            <p class="text-sm md:text-base font-black text-gray-400">Đèn chữ nhật</p>
                            <select id="b115-1-2" class="w-full bg-green-100 border-none rounded-xl text-green-700 font-black text-base p-2">
                                <option value="">Chọn...</option>
                                <option value="A">Hình A</option>
                                <option value="B">Hình B</option>
                                <option value="C">Hình C</option>
                            </select>
                        </div>
                        <div class="bg-white/80 p-4 rounded-2xl">
                            <p class="text-sm md:text-base font-black text-gray-400">Đèn hình trụ</p>
                            <select id="b115-1-3" class="w-full bg-blue-100 border-none rounded-xl text-blue-700 font-black text-base p-2">
                                <option value="">Chọn...</option>
                                <option value="A">Hình A</option>
                                <option value="B">Hình B</option>
                                <option value="C">Hình C</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-115-2" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-4 text-emerald-700 flex items-center gap-3">
                    <span class="w-12 h-12 md:w-14 md:h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black">2</span>
                    Đèn con cá (Chọn C):
                </p>
                <div class="bg-emerald-50 p-4 md:p-6 rounded-[32px]">
                    <div class="flex flex-col md:grid md:grid-cols-2 gap-3 items-center">
                        <img src="hinh_anh/toan/115_b2_ca.png" alt="Cá" class="w-full max-w-[240px] h-auto rounded-2xl">
                        <div class="grid grid-cols-2 gap-3 w-full">
                            <button onclick="check115MCQ('A', '2', 'C')" class="b115-2-opt bg-white p-3 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b2A.png" class="h-16 object-contain mb-1"><span class="text-sm font-black text-gray-500">A</span>
                            </button>
                            <button onclick="check115MCQ('B', '2', 'C')" class="b115-2-opt bg-white p-3 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b2B.png" class="h-16 object-contain mb-1"><span class="text-sm font-black text-gray-500">B</span>
                            </button>
                            <button onclick="check115MCQ('C', '2', 'C')" class="b115-2-opt bg-white p-3 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b2C.png" class="h-16 object-contain mb-1"><span class="text-sm font-black text-gray-500">C</span>
                            </button>
                            <button onclick="check115MCQ('D', '2', 'C')" class="b115-2-opt bg-white p-3 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b2D.png" class="h-16 object-contain mb-1"><span class="text-sm font-black text-gray-500">D</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-115-3" class="p-6 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-4 text-indigo-700 flex items-center gap-3">
                    <span class="w-12 h-12 md:w-14 md:h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black">3</span>
                    Khai triển hình trụ (Chọn C):
                </p>
                <div class="bg-indigo-50 p-4 md:p-6 rounded-[32px]">
                    <div class="flex flex-col md:grid md:grid-cols-2 gap-3 items-center">
                        <img src="hinh_anh/toan/115_b3_tru.png" alt="Trụ" class="w-full max-w-[240px] h-auto rounded-2xl">
                        <div class="grid grid-cols-2 gap-3 w-full">
                            <button onclick="check115MCQ('A', '3', 'C')" class="b115-3-opt bg-white p-3 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b3A.png" class="h-16 object-contain mb-1"><span class="text-sm font-black text-gray-500">A</span>
                            </button>
                            <button onclick="check115MCQ('B', '3', 'C')" class="b115-3-opt bg-white p-3 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b3B.png" class="h-16 object-contain mb-1"><span class="text-sm font-black text-gray-500">B</span>
                            </button>
                            <button onclick="check115MCQ('C', '3', 'C')" class="b115-3-opt bg-white p-3 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b3C.png" class="h-16 object-contain mb-1"><span class="text-sm font-black text-gray-500">C</span>
                            </button>
                            <button onclick="check115MCQ('D', '3', 'C')" class="b115-3-opt bg-white p-3 rounded-2xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b3D.png" class="h-16 object-contain mb-1"><span class="text-sm font-black text-gray-500">D</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="box-115-4" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-orange-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                    Gấp từ tấm bìa (Chọn D):
                </p>
                <div class="bg-orange-50 p-1 rounded-[32px]">
                    <div class="flex flex-col md:grid md:grid-cols-2 gap-1 items-center">
                        <img src="hinh_anh/toan/115_b4_bia.png" alt="Bìa" class="w-full max-w-[150px] h-auto rounded-xl">
                        <div class="grid grid-cols-2 gap-1 w-full">
                            <button onclick="check115MCQ('A', '4', 'D')" class="b115-4-opt bg-white p-1 rounded-xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b4A.png" class="h-10 object-contain"><span class="text-xs font-black text-gray-400">A</span>
                            </button>
                            <button onclick="check115MCQ('B', '4', 'D')" class="b115-4-opt bg-white p-1 rounded-xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b4B.png" class="h-10 object-contain"><span class="text-xs font-black text-gray-400">B</span>
                            </button>
                            <button onclick="check115MCQ('C', '4', 'D')" class="b115-4-opt bg-white p-1 rounded-xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b4C.png" class="h-10 object-contain"><span class="text-xs font-black text-gray-400">C</span>
                            </button>
                            <button onclick="check115MCQ('D', '4', 'D')" class="b115-4-opt bg-white p-1 rounded-xl border-2 border-gray-100 flex flex-col items-center">
                                <img src="hinh_anh/toan/115_b4D.png" class="h-10 object-contain"><span class="text-xs font-black text-gray-400">D</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-115" onclick="submit115()" class="btn-submit-global">Nộp bài</button>
            </div>

            <script>
                window.check115MCQ = function(choice, boxId, correct) {
                    window['ans115B' + boxId] = choice;
                    const box = document.getElementById('box-115-' + boxId);
                    box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                    box.classList.add('border-2');
                    
                    const opts = document.querySelectorAll('.b115-' + boxId + '-opt');
                    opts.forEach(o => o.classList.add('border-gray-100'));
                    
                    if (choice === correct) {
                        box.classList.add('border-emerald-400', 'bg-emerald-50');
                    } else {
                        box.classList.add('border-red-400', 'bg-red-50');
                    }
                };

                window.submit115 = function() {
                    let score = 0;
                    const v1 = document.getElementById('b115-1-1').value;
                    const v2 = document.getElementById('b115-1-2').value;
                    const v3 = document.getElementById('b115-1-3').value;
                    
                    const box1 = document.getElementById('box-115-1');
                    box1.className = box1.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                    box1.classList.add('border-2');
                    if (v1 === 'B' && v2 === 'A' && v3 === 'C') { score += 2.5; box1.classList.add('border-emerald-400', 'bg-emerald-50'); } else { box1.classList.add('border-red-400', 'bg-red-50'); }

                    if (window.ans115B2 === 'C') score += 2.5;
                    if (window.ans115B3 === 'C') score += 2.5;
                    if (window.ans115B4 === 'D') score += 2.5;

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-115");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
