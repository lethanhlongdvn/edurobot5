export const lesson126 = {
    "topic": "Hình học và Đo lường",
    "week": "26",
    "period": "126",
    "title": "BÀI 54. THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG THỂ TÍCH",
    "desc": "Bài 54: Vận dụng kiến thức thể tích để tính số lượng hộp xếp vừa vào thùng chứa, ước lượng không gian thực tế (Trang 58).",
    "content": `
        <div class="space-y-2 text-amber-900">
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 p-4 md:p-6 rounded-[32px] border-2 border-orange-100 flex items-center gap-4">
                <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg shrink-0">
                    <span class="text-3xl">📦</span>
                </div>
                <div>
                    <h3 class="text-xl md:text-2xl font-black">Thực hành hình khối</h3>
                    <p class="text-sm md:text-lg font-bold opacity-80 italic">Ước lượng không gian và kiểm tra sức chứa thùng đồ.</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-126-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-orange-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Xếp hộp (cạnh 2dm) vào thùng (6x4x4):
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-gray-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/126-b1-box.png" alt="Box" class="w-full max-w-[200px] h-auto rounded-xl shadow-lg border-2 border-white">
                    <div class="w-full space-y-1">
                        <div class="bg-white p-2 rounded-2xl border border-orange-100">
                            <p class="text-[10px] font-bold text-gray-400">a) Thể tích hộp (dm³)</p>
                            <input type="number" id="ans-126-1a" class="w-full text-2xl font-black text-amber-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                        </div>
                        <div class="bg-amber-100 p-2 rounded-2xl">
                            <p class="text-[10px] font-bold text-amber-900">b) Số hộp trong 1 thùng?</p>
                            <select id="ans-126-1b" class="w-full bg-white border-none rounded-lg text-orange-700 font-black text-sm p-1">
                                <option value="">Chọn số hộp...</option>
                                <option value="8">8 hộp</option>
                                <option value="12">12 hộp</option>
                                <option value="16">16 hộp</option>
                                <option value="24">24 hộp</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-126-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Ước lượng sức chứa căn phòng:
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-blue-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/126-b2-room.png" alt="Room" class="w-full max-w-[250px] h-auto rounded-xl">
                    <div class="bg-white p-4 rounded-3xl shadow-inner w-full">
                        <p class="text-[10px] font-bold text-blue-400 mb-1">Số thùng 1m³ (8m x 6m x 3m):</p>
                        <div class="flex items-center gap-2">
                            <input type="number" id="ans-126-2" class="w-full text-5xl font-black text-blue-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                            <span class="text-xl font-bold text-blue-200">thùng</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-126" onclick="submit126()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.submit126 = function() {
                    const a1a = document.getElementById('ans-126-1a').value;
                    const a1b = document.getElementById('ans-126-1b').value;
                    const a2 = document.getElementById('ans-126-2').value;

                    if (!a1a || !a1b || !a2) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành hết bài nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    
                    // Feedback resets
                    ['1', '2'].forEach(id => {
                        const box = document.getElementById('box-126-' + id);
                        box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                        box.classList.add('border-2');
                    });

                    let c1 = (parseInt(a1a) === 8 && a1b === "12");
                    let c2 = (parseInt(a2) === 144);

                    if (c1) { score += 6; document.getElementById('box-126-1').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-126-1').classList.add('border-red-400', 'bg-red-50'); }
                    if (c2) { score += 4; document.getElementById('box-126-2').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-126-2').classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-126");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
