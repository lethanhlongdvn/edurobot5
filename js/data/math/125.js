export const lesson125 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "125",
    "title": "BÀI 53. LUYỆN TẬP (TIẾT 2)",
    "desc": "Bài 53: Luyện tập tính thể tích hình lập phương qua các bài tập ghép hình và giải toán thực tế (Trang 56-57).",
    "content": `
        <div class="space-y-6 md:space-y-8">
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 p-8 md:p-12 rounded-[40px] shadow-lg border-2 border-green-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-green-200/40 rounded-full blur-3xl"></div>
                
                <div class="w-24 h-24 md:w-32 md:h-32 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl flex-shrink-0 animate-bounce">
                    <svg class="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>

                <div class="text-emerald-900 z-10 text-center md:text-left">
                    <h3 class="text-3xl md:text-4xl font-black mb-4 tracking-tight">Cùng luyện tập nào!</h3>
                    <p class="text-xl md:text-2xl font-medium leading-relaxed opacity-90">
                        Hôm nay chúng ta sẽ tiếp tục luyện tập tính <b class="text-emerald-700">thể tích hình lập phương</b> nhé! Hãy nhớ công thức siêu cấp: 
                        <br/><span class="inline-block mt-4 px-6 py-2 bg-white rounded-2xl text-green-700 font-black shadow-md">V = a × a × a</span>
                    </p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-20">
            <!-- Bài 1 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-blue-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">1</span>
                    Chọn câu trả lời đúng
                </p>
                <div class="bg-blue-50 p-8 rounded-[32px]">
                    <p class="text-2xl font-bold text-blue-900 mb-8 leading-relaxed">
                        Khối ru-bích của Việt có dạng hình lập phương cạnh 6 cm. Thể tích của khối ru-bích đó là:
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <label class="flex items-center p-6 bg-white rounded-2xl border-4 border-transparent hover:border-blue-300 cursor-pointer shadow-sm group transition-all">
                            <input type="radio" name="ans-125-1" value="A" class="w-8 h-8 text-blue-600 focus:ring-blue-500">
                            <span class="ml-4 text-3xl font-bold text-gray-700 group-hover:text-blue-700">A. 36 cm²</span>
                        </label>
                        <label class="flex items-center p-6 bg-white rounded-2xl border-4 border-transparent hover:border-blue-300 cursor-pointer shadow-sm group transition-all">
                            <input type="radio" name="ans-125-1" value="B" class="w-8 h-8 text-blue-600 focus:ring-blue-500">
                            <span class="ml-4 text-3xl font-bold text-gray-700 group-hover:text-blue-700">B. 216 cm²</span>
                        </label>
                        <label class="flex items-center p-6 bg-white rounded-2xl border-4 border-transparent hover:border-blue-300 cursor-pointer shadow-sm group transition-all">
                            <input type="radio" name="ans-125-1" value="C" class="w-8 h-8 text-blue-600 focus:ring-blue-500">
                            <span class="ml-4 text-3xl font-bold text-gray-700 group-hover:text-blue-700">C. 36 cm³</span>
                        </label>
                        <label class="flex items-center p-6 bg-white rounded-2xl border-4 border-transparent hover:border-blue-300 cursor-pointer shadow-sm group transition-all">
                            <input type="radio" name="ans-125-1" value="D" class="w-8 h-8 text-blue-600 focus:ring-blue-500">
                            <span class="ml-4 text-3xl font-bold text-gray-700 group-hover:text-blue-700">D. 216 cm³</span>
                        </label>
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl">
                <p class="font-black text-3xl md:text-5xl mb-12 text-teal-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-teal-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">2</span>
                    Hoàn thành bảng sau
                </p>
                <div class="flex flex-col items-center gap-8">
                    <img src="hinh_anh/toan/toan_tap_2/125-b2-items.png" alt="Đồ vật dạng hình lập phương" class="w-full max-w-3xl h-auto rounded-[32px] border-4 border-teal-50 shadow-md">
                    
                    <div class="w-full grid md:grid-cols-2 gap-8">
                        <div class="bg-teal-50 p-8 rounded-[32px] flex flex-col items-center">
                            <p class="text-xl font-bold text-teal-800 mb-4 whitespace-nowrap">Thể tích viên xúc xắc (cạnh 3cm):</p>
                            <div class="flex items-center gap-3">
                                <input type="number" id="ans-125-2a" class="w-40 bg-white p-4 rounded-xl text-3xl font-black text-teal-700 border-2 border-teal-200 text-center focus:border-teal-500" placeholder="?">
                                <span class="text-2xl font-bold text-teal-700">cm³</span>
                            </div>
                        </div>
                        <div class="bg-cyan-50 p-8 rounded-[32px] flex flex-col items-center">
                            <p class="text-xl font-bold text-cyan-800 mb-4 whitespace-nowrap">Thể tích bể cá nhỏ (cạnh 1,5dm):</p>
                            <div class="flex items-center gap-3">
                                <input type="number" step="0.001" id="ans-125-2b" class="w-40 bg-white p-4 rounded-xl text-3xl font-black text-cyan-700 border-2 border-cyan-200 text-center focus:border-cyan-500" placeholder="?">
                                <span class="text-2xl font-bold text-cyan-700">dm³</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-fuchsia-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-fuchsia-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">3</span>
                    Ghép khối lập phương
                </p>
                <div class="flex flex-col items-center gap-10">
                    <img src="hinh_anh/toan/toan_tap_2/125-b3-blocks.png" alt="Các khối lập phương ghép" class="w-full max-w-4xl h-auto rounded-[32px] border-4 border-fuchsia-50 shadow-xl">
                    
                    <div class="w-full space-y-8">
                        <div class="bg-fuchsia-50 p-8 rounded-[32px]">
                            <p class="text-2xl font-bold text-fuchsia-900 mb-6 flex gap-4"><span class="text-fuchsia-600 tracking-tighter shrink-0 block">a)</span>Quan sát hình vẽ và cho biết 2 khối hình nào ghép được thành hình lập phương.</p>
                            <div class="flex gap-6 items-center flex-wrap">
                                <label class="flex items-center gap-4 cursor-pointer group">
                                    <input type="radio" name="ans-125-3a" value="AB" class="w-8 h-8 text-fuchsia-500 focus:ring-fuchsia-400">
                                    <span class="text-3xl font-bold text-fuchsia-800 group-hover:text-fuchsia-600 transition-colors">A và B</span>
                                </label>
                                <label class="flex items-center gap-4 cursor-pointer group ml-10">
                                    <input type="radio" name="ans-125-3a" value="AC" class="w-8 h-8 text-fuchsia-500 focus:ring-fuchsia-400">
                                    <span class="text-3xl font-bold text-fuchsia-800 group-hover:text-fuchsia-600 transition-colors">A và C</span>
                                </label>
                                <label class="flex items-center gap-4 cursor-pointer group ml-10">
                                    <input type="radio" name="ans-125-3a" value="BC" class="w-8 h-8 text-fuchsia-500 focus:ring-fuchsia-400">
                                    <span class="text-3xl font-bold text-fuchsia-800 group-hover:text-fuchsia-600 transition-colors">B và C</span>
                                </label>
                            </div>
                        </div>

                        <div class="bg-purple-50 p-8 rounded-[32px]">
                            <p class="text-2xl font-bold text-purple-900 mb-6 flex gap-4"><span class="text-purple-600 tracking-tighter shrink-0 block">b)</span>Biết mỗi hình lập phương nhỏ trong hình trên có cạnh 2 cm. Hãy tính thể tích của hình lập phương lớn được ghép ở câu a.</p>
                            <div class="flex items-center gap-4 mt-6">
                                <span class="text-3xl font-black text-purple-700">V =</span>
                                <input type="number" id="ans-125-3b" class="w-48 bg-white p-4 rounded-xl text-4xl font-black text-purple-800 border-4 border-purple-200 text-center focus:border-purple-500" placeholder="?">
                                <span class="text-3xl font-bold text-purple-800">cm³</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài 4 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-amber-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-amber-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">4</span>
                    Tháp chất lỏng của Rô-bốt
                </p>
                <p class="text-2xl font-bold text-amber-900 mb-8 leading-relaxed">
                    Hỏi phần chất lỏng nào có thể tích lớn nhất và thể tích đó bằng bao nhiêu?
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="w-full lg:w-5/12">
                        <img src="hinh_anh/toan/toan_tap_2/125-b4-tower.png" alt="Tháp chất lỏng" class="w-full h-auto rounded-[32px] border-4 border-amber-50 shadow-xl bg-white p-4 object-contain">
                    </div>
                    <div class="flex-1 w-full space-y-8">
                        <div class="bg-amber-50 p-8 rounded-[32px]">
                            <p class="text-xl font-bold text-amber-800 mb-6">Chất lỏng có thể tích lớn nhất là:</p>
                            <select id="ans-125-4a" class="w-full p-6 bg-white border-4 border-amber-200 rounded-[24px] text-2xl font-bold text-amber-900 focus:border-amber-500 focus:ring-0 outline-none">
                                <option value="">-- Chọn chất lỏng --</option>
                                <option value="dauthucvat">Dầu thực vật</option>
                                <option value="nuoc">Nước</option>
                                <option value="nuocruabat">Nước rửa bát</option>
                            </select>
                        </div>
                        
                        <div class="bg-orange-50 p-8 rounded-[32px]">
                            <p class="text-xl font-bold text-orange-800 mb-6">Thể tích lớn nhất đó là:</p>
                            <div class="flex items-center gap-4">
                                <input type="number" id="ans-125-4b" class="flex-1 bg-white p-6 rounded-[24px] text-4xl font-black text-orange-700 border-4 border-orange-200 text-right focus:border-orange-500 outline-none" placeholder="?">
                                <span class="text-2xl font-bold text-orange-800">cm³</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center py-10">
                <button id="btn-submit-125" onclick="submit125()" class="px-24 py-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[56px] font-black text-5xl shadow-2xl shadow-indigo-200 active:scale-95 transition-all flex items-center gap-8 group">
                    <span>HOÀN THÀNH</span>
                    <svg class="w-14 h-14 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <script>
                window.submit125 = function() {
                    const a1 = document.querySelector('input[name="ans-125-1"]:checked')?.value;
                    const a2a = document.getElementById('ans-125-2a').value;
                    const a2b = document.getElementById('ans-125-2b').value;
                    const a3a = document.querySelector('input[name="ans-125-3a"]:checked')?.value;
                    const a3b = document.getElementById('ans-125-3b').value;
                    const a4a = document.getElementById('ans-125-4a').value;
                    const a4b = document.getElementById('ans-125-4b').value;

                    if (!a1 || !a2a || !a2b || !a3a || !a3b || !a4a || !a4b) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành tất cả các bài tập trước khi nộp nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // Bài 1: 6*6*6 = 216 cm^3
                    if (a1 === "D") { score += 1.5; feedback += "✅ Bài 1: Chọn đúng D. 216 cm³! (6×6×6 = 216)\\n"; } else { feedback += "❌ Bài 1: Thể tích là cạnh × cạnh × cạnh, đơn vị thể tích là cm³. Nhớ chọn đúng đơn vị nhé!\\n"; }
                    
                    // Bài 2:
                    if (parseInt(a2a) === 27) { score += 1; feedback += "✅ Bài 2.1: Xúc xắc 27 cm³ là xuất sắc!\\n"; } else { feedback += "❌ Bài 2.1: 3 × 3 × 3 = 27 nhé.\\n"; }
                    if (parseFloat(a2b) === 3.375) { score += 1.5; feedback += "✅ Bài 2.2: Bể cá 3,375 dm³ rất chính xác!\\n"; } else { feedback += "❌ Bài 2.2: 1,5 × 1,5 × 1,5 = 3,375 nhé.\\n"; }

                    // Bài 3:
                    if (a3a === "AC") { score += 1.5; feedback += "✅ Bài 3.a: Khối A và C ghép lại sẽ vừa khít thành hình lập phương!\\n"; } else { feedback += "❌ Bài 3.a: Khối A bị khuyết một góc hình chữ L, nên phải ghép với khối C nhé.\\n"; }
                    
                    // Thể tích = 4 blocks edge = 8cm edge => 512 cm^3
                    if (parseInt(a3b) === 512) { score += 1.5; feedback += "✅ Bài 3.b: Hình lập phương mới có cạnh gồm 4 khối (8cm), thể tích 512 cm³. Chúc mừng!\\n"; } else { feedback += "❌ Bài 3.b: Mỗi khối cạnh 2cm, lập phương ghép được có cạnh 4 khối (8cm). 8×8×8=512 nhé.\\n"; }

                    // Bài 4:
                    // Dầu: 15*15*10 = 2250, Nước: 15*15*12 = 2700, Nước rửa bát: 15*15*15 = 3375
                    if (a4a === "nuocruabat") { score += 1.5; feedback += "✅ Bài 4.a: Nước rửa bát có thể tích lớn nhất!\\n"; } else { feedback += "❌ Bài 4.a: Xem kĩ chiều cao: dầu 10cm, nước 12cm, nước rửa bát 15cm. Cùng đáy nền cột nào cao nhất sẽ có thể tích lớn nhất.\\n"; }
                    if (parseInt(a4b) === 3375) { score += 1.5; feedback += "✅ Bài 4.b: Thể tích là 15 × 15 × 15 = 3375 cm³. Wow!\\n"; } else { feedback += "❌ Bài 4.b: Nước rửa bát có đáy 15x15 và cao 15. Tính bằng 15×15×15 nha.\\n"; }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        const report = "1:" + a1 + " | 2:" + a2a + "," + a2b + " | 3:" + a3a + "," + a3b + " | 4:" + a4a + "," + a4b;
                        window.submitMathLesson(report, status, "btn-submit-125");
                    }

                    alert(feedback + "\\nĐiểm của bé: " + Math.round(score*10)/10 + "/10");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
