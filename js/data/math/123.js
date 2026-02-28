export const lesson123 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "123",
    "title": "BÀI 52. LUYỆN TẬP: THỂ TÍCH HÌNH HỘP CHỮ NHẬT",
    "desc": "Bài 52: Luyện tập vận dụng công thức tính thể tích hình hộp chữ nhật vào các bài toán thực tế (Trang 53).",
    "content": `
        <div class="space-y-12 md:space-y-20">
            <!-- 🎯 Mục tiêu -->
            <div class="bg-indigo-50 p-8 md:p-10 rounded-[32px] md:rounded-[48px] border-l-[12px] border-indigo-600 shadow-sm text-xl md:text-2xl font-bold text-indigo-900 leading-relaxed">
                Hôm nay chúng ta sẽ cùng luyện tập tính thể tích các hình khối phức tạp (ghép từ nhiều khối) và ứng dụng đo thể tích vật thể bằng phương pháp choán chỗ trong nước.
            </div>

            <!-- 🖍️ Kiến thức cần nhớ -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div class="bg-emerald-600 p-10 rounded-[40px] text-white shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-all">
                    <p class="text-xl md:text-2xl font-bold opacity-80 mb-2 italic text-emerald-100">Thể tích hình hộp chữ nhật</p>
                    <p class="text-4xl md:text-6xl font-black tracking-tighter shadow-sm">V = a × b × c</p>
                </div>
                <div class="bg-amber-600 p-10 rounded-[40px] text-white shadow-xl flex flex-col items-center justify-center transform hover:scale-105 transition-all text-center">
                    <p class="text-xl md:text-2xl font-bold opacity-80 mb-2 italic text-amber-100">Thể tích hình khối ghép</p>
                    <p class="text-3xl md:text-4xl font-black leading-tight mt-2 uppercase tracking-tight">Chia nhỏ khối hình <br> thành các hình cơ bản</p>
                </div>
            </div>

            [[TUTOR|math-123-luyen-tap|Chào bé! Để giải bài toán hình khối ghép, bé hãy tưởng tượng mình đang dùng một con dao ảo để 'cắt' khối đó thành các mảnh hình chữ nhật nhỏ hơn nhé. Tổng thể tích sẽ bằng tổng các phần cộng lại đó!]]
        </div>
    `,
    "practice": `
        <div class="space-y-12 md:space-y-20">
            <!-- Bài tập 1 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-indigo-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">1</span>
                    Nam muốn xếp các khối gỗ (4cm x 1cm x 1cm) vào một chiếc hộp lớn (8cm x 4cm x 4cm). Hỏi có thể xếp được bao nhiêu khối gỗ?
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/123-b1-box.png" alt="Xếp khối gỗ" class="w-full h-auto rounded-[32px] border-4 border-indigo-50 shadow-lg">
                    </div>
                    <div class="flex-1 w-full grid grid-cols-2 gap-6">
                        <button onclick="select1('A')" id="btn-123-1A" class="py-10 rounded-[32px] border-4 border-gray-100 text-3xl font-black text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition-all">A. 8 khối</button>
                        <button onclick="select1('B')" id="btn-123-1B" class="py-10 rounded-[32px] border-4 border-gray-100 text-3xl font-black text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition-all">B. 16 khối</button>
                        <button onclick="select1('C')" id="btn-123-1C" class="py-10 rounded-[32px] border-4 border-gray-100 text-3xl font-black text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition-all">C. 32 khối</button>
                        <button onclick="select1('D')" id="btn-123-1D" class="py-10 rounded-[32px] border-4 border-gray-100 text-3xl font-black text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition-all">D. 64 khối</button>
                    </div>
                </div>
                <input type="hidden" id="ans-123-1">
            </div>

            <!-- Bài tập 2 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute -right-20 -top-20 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-50"></div>
                <p class="font-black text-3xl md:text-5xl mb-12 text-amber-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-amber-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">2</span>
                    Tính thể tích của khối gỗ có hình dạng như hình dưới đây.
                </p>
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/123-b2-l-shape.png" alt="Khối gỗ chữ L" class="w-full h-auto rounded-[32px] border-4 border-amber-50 shadow-xl">
                    </div>
                    <div class="flex-1 w-full space-y-6">
                        <div class="bg-amber-50 p-8 rounded-[40px] border-4 border-dashed border-amber-200">
                             <p class="text-xl font-bold text-amber-800 mb-2 italic">Gợi ý: Chia thành 2 khối</p>
                             <ul class="text-lg text-amber-700 space-y-2">
                                <li>• Khối trên: 3cm × 5cm × 6cm</li>
                                <li>• Khối dưới: 8cm × 5cm × 2cm</li>
                             </ul>
                        </div>
                        <div class="flex items-center gap-6 bg-white p-10 rounded-[48px] shadow-2xl border-4 border-amber-100 group transition-all focus-within:border-amber-400">
                            <input type="number" id="ans-123-2" class="w-full text-7xl font-black text-amber-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                            <span class="text-4xl font-black text-amber-200 group-focus-within:text-amber-400">cm³</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl bg-gradient-to-br from-white to-blue-50/30">
                <p class="font-black text-3xl md:text-5xl mb-12 text-blue-700 flex items-baseline gap-6 leading-tight">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shrink-0">3</span>
                    Tính thể tích của tảng đá nằm trong bể nước (Kích thước đáy là 10dm x 6dm).
                </p>
                <div class="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    <div class="w-full lg:w-1/2">
                        <img src="hinh_anh/toan/toan_tap_2/123-b3-stone.png" alt="Tảng đá trong bể" class="w-full h-auto rounded-[32px] border-4 border-blue-100 shadow-lg">
                    </div>
                    <div class="flex-1 w-full space-y-8">
                         <div class="bg-blue-600 p-10 rounded-[48px] text-white shadow-2xl shadow-blue-200">
                            <p class="font-black text-2xl mb-4 italic text-blue-100 uppercase tracking-widest text-center">Thể tích tảng đá = <br> Diện tích đáy × Chiều cao mực nước tăng</p>
                            <div class="flex items-center gap-6">
                                <input type="number" id="ans-123-3" class="w-full bg-blue-500 p-8 rounded-[32px] text-7xl font-black text-white border-4 border-blue-400 shadow-inner text-right placeholder-blue-300" placeholder="?">
                                <span class="text-4xl font-black text-blue-100">dm³</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center py-10">
                <button id="btn-submit-123" onclick="submit123()" class="px-24 py-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-[56px] font-black text-5xl shadow-2xl shadow-indigo-200 active:scale-95 transition-all flex items-center gap-8 group">
                    <span>HOÀN THÀNH</span>
                    <svg class="w-14 h-14 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <script>
                window.select1 = function(opt) {
                    document.getElementById('ans-123-1').value = opt;
                    ['A','B','C','D'].forEach(o => {
                        const btn = document.getElementById('btn-123-1' + o);
                        if(o === opt) {
                            btn.className = "py-10 rounded-[32px] border-4 border-indigo-600 bg-indigo-600 text-3xl font-black text-white shadow-lg shadow-indigo-200";
                        } else {
                            btn.className = "py-10 rounded-[32px] border-4 border-gray-100 text-3xl font-black text-gray-500 hover:border-indigo-600 hover:text-indigo-600 transition-all";
                        }
                    });
                }

                window.submit123 = function() {
                    const a1 = document.getElementById('ans-123-1').value;
                    const a2 = document.getElementById('ans-122-2'); // Oops name conflict? No, 123-2 below.
                    const a2v = document.getElementById('ans-123-2').value;
                    const a3 = document.getElementById('ans-123-3').value;

                    if (!a1 || !a2v || !a3) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành tất cả các bài tập trước khi nộp nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // Bài 1: C (32 khối)
                    if (a1 === 'C') { score += 3; feedback += "✅ Bài 1: Quá chuẩn! (128 ÷ 4 = 32 khối).\\n"; } else { feedback += "❌ Bài 1: Bé ơi, tổng thể tích hộp là 128, chia 4 được 32 đó.\\n"; }

                    // Bài 2: 170
                    if (parseInt(a2v) === 170) { score += 4; feedback += "✅ Bài 2: Chính xác! Tổng là 170 cm³.\\n"; } else { feedback += "❌ Bài 2: Bé tính lại tổng (90 + 80) nhé.\\n"; }

                    // Bài 3: 60
                    if (parseInt(a3) === 60) { score += 3; feedback += "✅ Bài 3: Tuyệt đỉnh! Đá chiếm thể tích là 60 dm³.\\n"; } else { feedback += "❌ Bài 3: Mực nước tăng (4-3)=1dm, lấy cao nhân đáy (1x60=60).\\n"; }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        const report = "1: " + a1 + " | 2: " + a2v + " | 3: " + a3;
                        window.submitMathLesson(report, status, "btn-submit-123");
                    }

                    alert(feedback + "\\nĐiểm của bé: " + score + "/10");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Một khối hình ghép từ 5 khối lập phương 1cm³. Thể tích là:", "options": ["1 cm³", "5 cm³", "10 cm³", "25 cm³"], "answer": 1, "level": 1 },
        { "question": "Khi cho một vật vào bể nước, chiều cao nước tăng 2cm. Đáy bể là 50cm². Thể tích vật là:", "options": ["50 cm³", "100 cm³", "25 cm³", "10 cm³"], "answer": 1, "level": 2 },
        { "question": "Một hộp thể tích 20cm³. Có thể xếp bao nhiêu khối 2cm³ vào hộp?", "options": ["5 khối", "10 khối", "20 khối", "40 khối"], "answer": 1, "level": 1 }
    ]
};
