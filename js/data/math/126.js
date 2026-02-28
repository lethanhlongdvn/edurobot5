export const lesson126 = {
    "topic": "Hình học và Đo lường",
    "week": "26",
    "period": "126",
    "title": "BÀI 54. THỰC HÀNH TÍNH TOÁN VÀ ƯỚC LƯỢNG THỂ TÍCH MỘT SỐ HÌNH KHỐI",
    "desc": "Bài 54: Vận dụng kiến thức thể tích để tính số lượng hộp xếp vừa vào thùng chứa, ước lượng không gian thực tế (Trang 58).",
    "content": `
        <div class="space-y-6 md:space-y-8">
            <div class="bg-gradient-to-br from-orange-50 to-amber-50 p-8 md:p-12 rounded-[40px] shadow-lg border-2 border-orange-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-orange-200/40 rounded-full blur-3xl"></div>
                
                <div class="w-24 h-24 md:w-32 md:h-32 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-xl flex-shrink-0 animate-bounce">
                    <svg class="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>

                <div class="text-amber-900 z-10 text-center md:text-left">
                    <h3 class="text-3xl md:text-4xl font-black mb-4 tracking-tight">Thực hành cùng hình khối!</h3>
                    <p class="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
                        Hôm nay chúng ta sẽ làm quen với việc <b class="text-orange-700">kiểm tra không gian chứa đồ</b> và <b class="text-orange-700">ước lượng kích thước thật</b> trong đời sống nhé! Rất thực tế và thú vị.
                    </p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-20">
            <!-- Bài 1 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-orange-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-orange-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">1</span>
                    Đóng thùng chậu cây tái chế
                </p>
                <div class="flex flex-col xl:flex-row gap-12 items-center xl:items-start group">
                    <div class="flex-1 space-y-8 relative z-10">
                        <div class="bg-gray-50/80 p-8 rounded-[32px] backdrop-blur-sm border-2 border-orange-100 group-hover:border-orange-300 transition-colors">
                            <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed mb-6">
                                Công ty của mẹ Mai đặt mua 100 chậu cây tái chế của lớp 5A để làm quà tặng cho mỗi nhân viên nhân ngày Môi trường Thế giới. Lớp 5A đã chọn mẫu hộp dạng hình lập phương cạnh 2 dm để đựng mỗi chậu cây.
                            </p>
                            <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                                Các bạn dự định xếp hộp đó vào thùng lớn. Quan sát kích thước thùng và ước lượng số hộp có thể xếp vào 1 thùng.
                            </p>
                        </div>
                    </div>
                    <div class="w-full xl:w-5/12 max-w-lg shrink-0 group-hover:scale-105 transition-transform duration-500">
                        <img src="hinh_anh/toan/toan_tap_2/126-b1-box.png" alt="Mẫu hộp chậu cây và thùng chứa" class="w-full h-auto rounded-[32px] shadow-2xl border-8 border-orange-50 bg-white">
                    </div>
                </div>
                
                <div class="mt-12 w-full grid md:grid-cols-2 gap-8">
                    <!-- Câu a -->
                    <div class="bg-amber-50 p-8 md:p-10 rounded-[40px] shadow-sm flex flex-col items-center group/card hover:bg-amber-100 transition-colors">
                        <p class="text-2xl font-black text-amber-900 mb-6 flex gap-3 text-center">
                            <span class="text-orange-500 block shrink-0">a)</span>Tính thể tích của mẫu hộp đựng cây (cạnh 2 dm)
                        </p>
                        <div class="flex items-center gap-4 bg-white/60 p-6 rounded-3xl w-full max-w-sm justify-center">
                            <input type="number" id="ans-126-1a" class="w-32 bg-white px-4 py-3 rounded-2xl text-4xl font-black text-amber-600 border-4 border-amber-200 text-center focus:border-amber-400 outline-none transition-all shadow-inner" placeholder="?">
                            <span class="text-4xl font-black text-amber-800">dm³</span>
                        </div>
                    </div>
                    <!-- Câu b -->
                    <div class="bg-orange-50 p-8 md:p-10 rounded-[40px] shadow-sm flex flex-col items-center group/card hover:bg-orange-100 transition-colors">
                        <p class="text-2xl font-black text-orange-900 mb-6 flex gap-3 text-center">
                            <span class="text-orange-500 block shrink-0">b)</span>Số hộp đựng cây có thể xếp được vào một thùng lớn
                        </p>
                        <div class="flex items-center gap-3 w-full flex-col">
                            <div class="flex gap-4">
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="ans-126-1b" value="8" class="w-8 h-8 text-orange-500 focus:ring-orange-400">
                                    <span class="text-2xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors">8 hộp</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group ml-10">
                                    <input type="radio" name="ans-126-1b" value="12" class="w-8 h-8 text-orange-500 focus:ring-orange-400">
                                    <span class="text-2xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors">12 hộp</span>
                                </label>
                            </div>
                            <div class="flex gap-4 mt-4">
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input type="radio" name="ans-126-1b" value="16" class="w-8 h-8 text-orange-500 focus:ring-orange-400">
                                    <span class="text-2xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors">16 hộp</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group ml-10">
                                    <input type="radio" name="ans-126-1b" value="24" class="w-8 h-8 text-orange-500 focus:ring-orange-400">
                                    <span class="text-2xl font-bold text-orange-800 group-hover:text-orange-600 transition-colors">24 hộp</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-blue-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">2</span>
                    Ước lượng sức chứa của căn phòng
                </p>
                <div class="flex flex-col items-center gap-10">
                    <img src="hinh_anh/toan/toan_tap_2/126-b2-room.png" alt="Rô bốt sắp xếp kho hàng" class="w-full max-w-4xl h-auto rounded-[32px] border-4 border-blue-50 shadow-xl object-contain">
                    <p class="text-2xl font-bold text-blue-900 leading-relaxed text-center max-w-4xl">
                        Em hãy ước lượng chiều rộng, chiều dài, chiều cao phòng học của em. Giả sử phòng có dạng hình hộp chữ nhật dài 8m, rộng 6m và cao 3m. 
                        Nếu trường em có một phòng kho với kích thước như thế, nó xếp được nhiều nhất bao nhiêu thùng đồ dạng hình lập phương có thể tích 1 m³?
                    </p>
                    
                    <div class="bg-cyan-50 p-10 rounded-[40px] shadow-sm flex flex-col items-center group/card hover:bg-cyan-100 transition-colors w-full max-w-2xl mt-4">
                        <p class="text-2xl font-black text-cyan-900 mb-6 text-center">
                            Tổng số thùng (mỗi thùng 1 m³) xếp được là:
                        </p>
                        <div class="flex items-center gap-4 bg-white/60 p-6 rounded-3xl w-full justify-center">
                            <input type="number" id="ans-126-2" class="w-40 bg-white px-4 py-3 rounded-2xl text-4xl font-black text-blue-600 border-4 border-blue-200 text-center focus:border-blue-400 outline-none transition-all shadow-inner" placeholder="?">
                            <span class="text-3xl font-black text-blue-800">thùng đồ</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center py-10 z-50 relative">
                <button id="btn-submit-126" onclick="submit126()" class="px-24 py-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[56px] font-black text-5xl shadow-2xl shadow-indigo-200 active:scale-95 transition-all flex items-center gap-8 group">
                    <span>HOÀN THÀNH</span>
                    <svg class="w-14 h-14 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <script>
                window.submit126 = function() {
                    const a1a = document.getElementById('ans-126-1a').value;
                    const a1b = document.querySelector('input[name="ans-126-1b"]:checked')?.value;
                    const a2 = document.getElementById('ans-126-2').value;

                    if (!a1a || !a1b || !a2) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành tất cả các bài tập tính toán và trắc nghiệm trước khi nộp nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // Bài 1:
                    // 1a: V của hộp nhỏ = 2 * 2 * 2 = 8 dm^3
                    if (parseInt(a1a) === 8) { score += 3; feedback += "✅ Bài 1.a: Tính đúng thể tích mỗi hộp là 8 dm³!\\n"; } else { feedback += "❌ Bài 1.a: Hộp hình lập phương cạnh 2dm, nên thể tích là 2×2×2 = 8 bé nhé.\\n"; }
                    
                    // 1b: V thùng lớn = 6 * 4 * 4 = 96 dm^3 --> 96 / 8 = 12 hộp.
                    // Hoàn toàn có thể nhét được vì đáy nhét được 3x2=6 hộp, cao 2 hộp => 6x2 = 12 (kích thước thùng 6x4x4 chia chặn 2)
                    if (a1b === "12") { score += 4; feedback += "✅ Bài 1.b: Tuyệt vời! Thùng có kích thước 6x4x4 (96 dm³), nên đựng được 96 : 8 = 12 hộp.\\n"; } else { feedback += "❌ Bài 1.b: Bé tính thể tích thùng lớn trước (6×4×4=96 dm³), rồi chia cho 8 dm³ để tiệm ra số hộp nhé!\\n"; }

                    // Bài 2:
                    // V = 8 * 6 * 3 = 144 m^3. Một thùng chiếm 1 m^3 ==> 144 thùng
                    if (parseInt(a2) === 144) { score += 3; feedback += "✅ Bài 2: Rất lanh lợi! Thể tích kho là 144 m³ nên chứa được đúng 144 thùng 1m³.\\n"; } else { feedback += "❌ Bài 2: Tính thể tích kho là 8 × 6 × 3, rồi lấy tổng m³ đó ra số thùng nhé (vì mỗi thùng là 1 m³).\\n"; }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        const report = "1:" + a1a + "," + a1b + " | 2:" + a2;
                        window.submitMathLesson(report, status, "btn-submit-126");
                    }

                    alert(feedback + "\\nĐiểm của bé: " + Math.round(score*10)/10 + "/10");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
