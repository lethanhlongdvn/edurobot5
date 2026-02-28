export const lesson123 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "123",
    "title": "BÀI 52. LUYỆN TẬP: THỂ TÍCH HÌNH HỘP CHỮ NHẬT",
    "desc": "Bài 52: Luyện tập vận dụng công thức tính thể tích hình hộp chữ nhật vào các bài toán thực tế (Trang 53).",
    "content": `
        <div class="space-y-2 text-indigo-900">
            <!-- 🎯 Mục tiêu -->
            <div class="bg-indigo-50 p-4 md:p-6 rounded-[32px] border-l-[12px] border-indigo-600 shadow-sm font-bold text-xl md:text-2xl leading-tight">
                Luyện tập tính thể tích hình khối phức tạp (ghép khối) và đo thể tích vật thể bằng mực nước tăng thêm.
            </div>

            <!-- 🖍️ Kiến thức cần nhớ -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div class="bg-emerald-600 p-4 rounded-[24px] text-white shadow-lg text-center">
                    <p class="text-sm font-bold opacity-80 uppercase">Thể tích (V)</p>
                    <p class="text-2xl md:text-4xl font-black">V = a × b × c</p>
                </div>
                <div class="bg-amber-600 p-4 rounded-[24px] text-white shadow-lg text-center">
                    <p class="text-sm font-bold opacity-80 uppercase">Khối ghép</p>
                    <p class="text-lg md:text-2xl font-black leading-tight uppercase">Chia nhỏ khối hình</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài tập 1 -->
            <div id="box-123-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl relative overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Xếp khối gỗ (4x1x1) vào hộp (8x4x4):
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-gray-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/123-b1-box.png" alt="Xếp khối" class="w-full max-w-[250px] h-auto rounded-xl">
                    <div class="grid grid-cols-2 gap-1 w-full">
                        <button onclick="select1('A')" id="btn-123-1A" class="py-4 rounded-2xl border-2 bg-white text-lg font-black text-gray-500 transition-all">A. 8</button>
                        <button onclick="select1('B')" id="btn-123-1B" class="py-4 rounded-2xl border-2 bg-white text-lg font-black text-gray-500 transition-all">B. 16</button>
                        <button onclick="select1('C')" id="btn-123-1C" class="py-4 rounded-2xl border-2 bg-white text-lg font-black text-gray-500 transition-all">C. 32</button>
                        <button onclick="select1('D')" id="btn-123-1D" class="py-4 rounded-2xl border-2 bg-white text-lg font-black text-gray-500 transition-all">D. 64</button>
                    </div>
                </div>
                <input type="hidden" id="ans-123-1">
            </div>

            <!-- Bài tập 2 -->
            <div id="box-123-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl md:text-2xl mb-1 text-amber-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-amber-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Thể tích khối gỗ chữ L (cm³):
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-amber-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/123-b2-l-shape.png" alt="L-shape" class="w-full max-w-[200px] h-auto rounded-xl">
                    <div class="flex items-center gap-2 bg-white p-4 rounded-3xl shadow-inner w-full">
                        <input type="number" id="ans-123-2" class="w-full text-5xl font-black text-amber-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                        <span class="text-2xl font-black text-amber-200 uppercase">cm³</span>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-123-3" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl">
                <p class="font-black text-xl md:text-2xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">3</span>
                    Thể tích tảng đá (dm³):
                </p>
                <div class="flex flex-col md:grid md:grid-cols-2 gap-2 items-center bg-blue-50 p-1 rounded-[32px]">
                    <img src="hinh_anh/toan/toan_tap_2/123-b3-stone.png" alt="Stone" class="w-full max-w-[250px] h-auto rounded-xl">
                    <div class="bg-blue-600 p-4 rounded-3xl shadow-lg w-full">
                        <input type="number" id="ans-123-3" class="w-full bg-blue-500 p-2 rounded-2xl text-5xl font-black text-white border-2 border-blue-400 shadow-inner text-right placeholder-blue-300" placeholder="?">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-123" onclick="submit123()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.select1 = function(opt) {
                    document.getElementById('ans-123-1').value = opt;
                    ['A','B','C','D'].forEach(o => {
                        const btn = document.getElementById('btn-123-1' + o);
                        btn.className = (o === opt) ? "py-4 rounded-2xl bg-indigo-600 border-2 border-transparent text-lg font-black text-white shadow-lg" : "py-4 rounded-2xl border-2 bg-white text-lg font-black text-gray-500 transition-all";
                    });
                }

                window.submit123 = function() {
                    const a1 = document.getElementById('ans-123-1').value;
                    const a2v = document.getElementById('ans-123-2').value;
                    const a3 = document.getElementById('ans-123-3').value;

                    if (!a1 || !a2v || !a3) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành hết bài nhé! 🚀");
                        return;
                    }

                    let score = 0;
                    
                    // Feedback resets
                    ['1', '2', '3'].forEach(id => {
                        const box = document.getElementById('box-123-' + id);
                        box.className = box.className.replace(/border-emerald-400|bg-emerald-50|border-red-400|bg-red-50/g, '').trim();
                        box.classList.add('border-2');
                    });

                    let c1 = (a1 === 'C');
                    let c2 = (parseInt(a2v) === 170);
                    let c3 = (parseInt(a3) === 60);

                    if (c1) { score += 3; document.getElementById('box-123-1').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-123-1').classList.add('border-red-400', 'bg-red-50'); }
                    if (c2) { score += 4; document.getElementById('box-123-2').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-123-2').classList.add('border-red-400', 'bg-red-50'); }
                    if (c3) { score += 3; document.getElementById('box-123-3').classList.add('border-emerald-400', 'bg-emerald-50'); } else { document.getElementById('box-123-3').classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-123");
                    }
                    alert("Điểm của bé: " + score + "/10. 🌟");
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
