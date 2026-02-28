export const lesson125 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "125",
    "title": "BÀI 53. LUYỆN TẬP (TIẾT 2)",
    "desc": "Bài 53: Luyện tập tính thể tích hình lập phương qua các bài tập ghép hình và giải toán thực tế (Trang 56-57).",
    "content": `
        <div class="space-y-2 text-emerald-900">
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6 rounded-[32px] border-2 border-green-100 flex items-center gap-4">
                <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shrink-0">
                    <span class="text-3xl">🚀</span>
                </div>
                <div>
                    <h3 class="text-xl md:text-2xl font-black">Luyện tập thể tích</h3>
                    <p class="text-sm md:text-lg font-bold opacity-80">Ghi nhớ: <span class="text-emerald-700">V = a × a × a</span></p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-125-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Ru-bích cạnh 6cm. Thể tích là:
                </p>
                <div class="bg-blue-50 p-2 rounded-[32px]">
                    <select id="ans-125-1" class="w-full p-4 bg-white border-none rounded-2xl text-2xl font-black text-blue-900 focus:ring-0">
                        <option value="">-- Chọn đáp án --</option>
                        <option value="A">A. 36 cm²</option>
                        <option value="B">B. 216 cm²</option>
                        <option value="C">C. 36 cm³</option>
                        <option value="D">D. 216 cm³</option>
                    </select>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-125-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl">
                <p class="font-black text-xl md:text-2xl mb-1 text-teal-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-teal-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Tính thể tích vật dụng:
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-teal-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/125-b2-items.png" alt="Items" class="w-full max-w-[200px] h-auto rounded-xl">
                    <div class="w-full space-y-1">
                        <div class="bg-white p-2 rounded-2xl flex items-center justify-between border border-teal-100">
                            <span class="text-xs font-bold text-gray-400">Xúc xắc (cm³)</span>
                            <input type="number" id="ans-125-2a" class="w-24 text-2xl font-black text-teal-700 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                        </div>
                        <div class="bg-white p-2 rounded-2xl flex items-center justify-between border border-cyan-100">
                            <span class="text-xs font-bold text-gray-400">Bể cá (dm³)</span>
                            <input type="number" step="0.001" id="ans-125-2b" class="w-24 text-2xl font-black text-cyan-700 text-right bg-transparent border-none focus:ring-0" placeholder="?">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div id="box-125-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-fuchsia-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-fuchsia-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    Ghép khối lập phương lớn:
                </p>
                <div class="bg-fuchsia-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/125-b3-blocks.png" alt="Blocks" class="w-full max-w-[250px] h-auto mx-auto rounded-xl mb-1">
                    <div class="grid grid-cols-2 gap-1">
                        <div class="bg-white p-2 rounded-2xl">
                            <p class="text-[10px] font-bold text-fuchsia-900 leading-tight">a) Khối nào ghép được?</p>
                            <select id="ans-125-3a" class="w-full bg-fuchsia-100 border-none rounded-lg text-fuchsia-700 font-bold text-xs p-1">
                                <option value="">Chọn...</option>
                                <option value="AB">A và B</option>
                                <option value="AC">A và C</option>
                                <option value="BC">B và C</option>
                            </select>
                        </div>
                        <div class="bg-white p-2 rounded-2xl">
                            <p class="text-[10px] font-bold text-purple-900 leading-tight">b) Thể tích (cm³)?</p>
                            <input type="number" id="ans-125-3b" class="w-full bg-purple-100 border-none rounded-lg text-purple-800 font-black text-right p-1" placeholder="?">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div id="box-125-4" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-amber-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center font-black">4</span>
                    Tháp chất lỏng Rô-bốt:
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-amber-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/125-b4-tower.png" alt="Tower" class="w-full max-w-[150px] h-auto rounded-xl bg-white p-1">
                    <div class="w-full space-y-1">
                        <div class="bg-white p-2 rounded-2xl border border-amber-200">
                            <p class="text-[10px] font-bold text-amber-800">Lớn nhất?</p>
                            <select id="ans-125-4a" class="w-full bg-amber-50 border-none rounded-lg text-amber-900 font-bold text-xs p-1">
                                <option value="">-- Chọn --</option>
                                <option value="dauthucvat">Dầu thực vật</option>
                                <option value="nuoc">Nước</option>
                                <option value="nuocruabat">Nước rửa bát</option>
                            </select>
                        </div>
                        <div class="bg-orange-600 p-2 rounded-2xl text-white">
                            <p class="text-[10px] font-bold opacity-80">Thể tích (cm³)</p>
                            <input type="number" id="ans-125-4b" class="w-full bg-orange-500 border-none rounded-lg text-2xl font-black text-right text-white p-1" placeholder="?">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-125" onclick="submit125()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.submit125 = function() {
                    const a1 = document.getElementById('ans-125-1').value;
                    const a2a = document.getElementById('ans-125-2a').value;
                    const a2b = document.getElementById('ans-125-2b').value;
                    const a3a = document.getElementById('ans-125-3a').value;
                    const a3b = document.getElementById('ans-125-3b').value;
                    const a4a = document.getElementById('ans-125-4a').value;
                    const a4b = document.getElementById('ans-125-4b').value;

                    if (!a1 || !a2a || !a2b || !a3a || !a3b || !a4a || !a4b) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành hết bài nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    
                    // Feedback resets
                    ['1', '2', '3', '4'].forEach(id => {
                        const box = document.getElementById('box-125-' + id);
                        box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                        box.classList.add('border-2');
                    });

                    let c1 = (a1 === "D");
                    let c2 = (parseInt(a2a) === 27 && parseFloat(a2b) === 3.375);
                    let c3 = (a3a === "AC" && parseInt(a3b) === 512);
                    let c4 = (a4a === "nuocruabat" && parseInt(a4b) === 3375);

                    if (c1) { score += 2; document.getElementById('box-125-1').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-125-1').classList.add('border-red-400', 'bg-red-50'); }
                    if (c2) { score += 3; document.getElementById('box-125-2').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-125-2').classList.add('border-red-400', 'bg-red-50'); }
                    if (c3) { score += 3; document.getElementById('box-125-3').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-125-3').classList.add('border-red-400', 'bg-red-50'); }
                    if (c4) { score += 2; document.getElementById('box-125-4').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-125-4').classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-125");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
