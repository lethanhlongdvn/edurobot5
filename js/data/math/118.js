export const lesson118 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "118",
    "title": "DIỆN TÍCH TOÀN PHẦN HÌNH HỘP CHỮ NHẬT",
    "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (Tiết 118 - Trang 45-46).",
    "content": `
        <div class="space-y-4 md:space-y-6">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-indigo-50 p-4 md:p-6 rounded-[32px] border-l-[12px] border-indigo-600 shadow-xl">
                <h3 class="text-indigo-900 font-black text-2xl md:text-3xl mb-2 flex items-center gap-4">
                    <span class="text-3xl md:text-4xl text-indigo-600">🎯</span> Mục tiêu
                </h3>
                <ul class="list-disc list-inside text-indigo-800 space-y-1 font-bold text-xl md:text-2xl leading-tight">
                    <li>Nắm vững khái niệm diện tích toàn phần (Stp).</li>
                    <li>Công thức: S_tp = S_xq + S_2đáy.</li>
                </ul>
            </div>

            <!-- 📖 Khám phá kiến thức -->
            <div class="glass-card p-2 md:p-4 rounded-[48px] bg-white border border-indigo-100 shadow-2xl relative overflow-hidden">
                <h4 class="text-3xl md:text-5xl font-black text-indigo-800 mb-4 flex items-center gap-4">
                    <span class="p-3 bg-indigo-600 text-white rounded-[20px] shadow-xl">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </span>
                    Diện tích toàn phần là gì?
                </h4>

                <div class="space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div class="bg-blue-50 p-4 rounded-[32px] border-2 border-blue-100 flex flex-col items-center justify-center">
                            <p class="text-blue-800 font-black italic text-xl md:text-2xl text-center leading-tight">
                                "Diện tích 4 mặt xung quanh (Sxq)."
                            </p>
                        </div>
                        <div class="bg-purple-50 p-4 rounded-[32px] border-2 border-purple-100 flex flex-col items-center justify-center">
                            <p class="text-purple-800 font-black italic text-xl md:text-2xl text-center leading-tight">
                                "Thêm 2 mặt đáy nữa là Diện tích toàn phần (Stp)."
                            </p>
                        </div>
                    </div>

                    <div class="flex flex-col items-center gap-4 bg-gray-50 p-2 rounded-[32px]">
                        <img src="hinh_anh/toan/toan_tap_2/118-khampha-illus.png" alt="Khám phá tiết 118" class="w-full h-auto rounded-[24px] shadow-lg border-4 border-white">
                    </div>

                    <div class="bg-indigo-900 p-6 rounded-[40px] text-white shadow-2xl relative overflow-hidden border-2 border-indigo-400/20">
                        <p class="text-center font-black text-xl md:text-2xl text-yellow-300 mb-6 uppercase tracking-wider">Cách tính Stp:</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div class="bg-white/5 p-4 rounded-[24px] border border-white/10 text-center">
                                <p class="text-sm text-indigo-200">1. S xung quanh:</p>
                                <p class="text-xl md:text-2xl text-white font-black">(25 + 20)×2×30 = 2700 cm²</p>
                            </div>
                            <div class="bg-white/5 p-4 rounded-[24px] border border-white/10 text-center">
                                <p class="text-sm text-indigo-200">2. S hai đáy:</p>
                                <p class="text-xl md:text-2xl text-white font-black">25 × 20 × 2 = 1000 cm²</p>
                            </div>
                            <div class="bg-indigo-600 p-4 rounded-[24px] border-2 border-yellow-400 text-center">
                                <p class="text-sm text-yellow-200 uppercase font-black">3. S TOÀN PHẦN</p>
                                <p class="text-2xl md:text-3xl text-yellow-400 font-black">2700 + 1000 = 3700 cm²</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 bg-pink-600 rounded-[40px] border-l-[16px] border-pink-400 shadow-xl">
                        <p class="text-white text-xl md:text-3xl font-black leading-tight">
                            📌 Stp = Sxq + S hai đáy
                        </p>
                    </div>
                </div>
            </div>
            [[TUTOR|math-50-tp|Bạn nhớ nhé: Muốn tính diện tích toàn phần, ta lấy diện tích xung quanh cộng với diện tích hai mặt đáy!]]
        </div>
    `,
    "practice": `
        <div class="space-y-2 md:space-y-4">
            <!-- Bài tập 1 -->
            <div class="p-1 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-1 text-blue-700 flex items-baseline gap-2">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-blue-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-xl">1</span>
                    Tính diện tích toàn phần mỗi hình:
                </p>

                <div class="bg-gray-50 p-1 rounded-[32px] border-2 border-dashed border-blue-200 shadow-inner flex flex-col items-center gap-2">
                    <img src="hinh_anh/toan/toan_tap_2/118-b1-images.png" alt="Các hình khối bài 1" class="w-full max-w-4xl h-auto rounded-[24px] shadow-lg">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
                        <div id="box-118-1a" class="bg-white p-2 rounded-[24px] shadow-md border-2 border-gray-100">
                            <p class="text-lg font-black text-center text-orange-600 mb-1">HÌNH A</p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-118-1a" class="w-full text-4xl md:text-5xl font-black text-indigo-700 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-xl font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                        <div id="box-118-1b" class="bg-white p-2 rounded-[24px] shadow-md border-2 border-gray-100">
                            <p class="text-lg font-black text-center text-cyan-600 mb-1">HÌNH B</p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-118-1b" class="w-full text-4xl md:text-5xl font-black text-indigo-700 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-xl font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                        <div id="box-118-1c" class="bg-white p-2 rounded-[24px] shadow-md border-2 border-gray-100">
                            <p class="text-lg font-black text-center text-emerald-600 mb-1">HÌNH C</p>
                            <div class="flex items-center justify-center gap-2">
                                <input type="number" id="ans-118-1c" class="w-full text-4xl md:text-5xl font-black text-indigo-700 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-xl font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 flex items-center gap-4">
                        <button onclick="check118B1()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl font-black text-lg shadow-lg active:scale-95 transition-all flex items-center gap-2">
                            Kiểm tra B1
                        </button>
                        <span id="r-118-1" class="font-black text-2xl italic"></span>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-1 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden text-center">
                <p class="font-black text-2xl md:text-3xl mb-1 text-indigo-700 flex items-center justify-center gap-2">
                    <span class="w-12 h-12 md:w-16 md:h-16 bg-indigo-600 text-white rounded-[20px] flex items-center justify-center font-black shadow-xl">2</span>
                    Chọn hộp có Stp lớn nhất?
                </p>

                <div class="bg-indigo-950 p-2 rounded-[32px] shadow-inner flex flex-col items-center gap-2">
                    <img src="hinh_anh/toan/toan_tap_2/118-b2-boxes.png" alt="So sánh các hộp bài 2" class="w-full max-w-4xl h-auto rounded-[24px] shadow-lg">
                    <div class="grid grid-cols-3 gap-2 w-full">
                        <button onclick="selectBox118('A')" id="btn-118-A" class="bg-white/5 border border-white/10 p-2 rounded-[24px] hover:bg-white/10 transition-all">
                            <p class="text-yellow-400 font-black text-2xl">A</p>
                        </button>
                        <button onclick="selectBox118('B')" id="btn-118-B" class="bg-white/5 border border-white/10 p-2 rounded-[24px] hover:bg-white/10 transition-all">
                            <p class="text-blue-400 font-black text-2xl">B</p>
                        </button>
                        <button onclick="selectBox118('C')" id="btn-118-C" class="bg-white/5 border border-white/10 p-2 rounded-[24px] hover:bg-white/10 transition-all">
                            <p class="text-pink-400 font-black text-2xl">C</p>
                        </button>
                    </div>
                    <div class="mt-2 flex items-center gap-4">
                        <button onclick="check118B2()" class="bg-yellow-500 hover:bg-yellow-600 text-indigo-950 px-4 py-2 rounded-xl font-black text-lg shadow-lg active:scale-95 transition-all">
                            Kiểm tra B2
                        </button>
                        <span id="r-118-2" class="font-black text-2xl italic text-yellow-300"></span>
                    </div>
                </div>
            </div>

            <!-- Nút Nộp Bài Tổng Kết -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-118-final" onclick="submitFinal118()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                // Bài 1 logic
                window.check118B1 = function() {
                    const a = document.getElementById('ans-118-1a').value;
                    const b = document.getElementById('ans-118-1b').value;
                    const c = document.getElementById('ans-118-1c').value;
                    const sp = document.getElementById('r-118-1');
                    
                    let ca = parseInt(a) === 5200;
                    let cb = parseInt(b) === 6250;
                    let cc = parseInt(c) === 5350;

                    document.getElementById('box-118-1a').className = "bg-white p-2 rounded-[24px] shadow-md border-4 " + (ca ? "border-emerald-400 bg-emerald-50" : "border-red-400 bg-red-50");
                    document.getElementById('box-118-1b').className = "bg-white p-2 rounded-[24px] shadow-md border-4 " + (cb ? "border-emerald-400 bg-emerald-50" : "border-red-400 bg-red-50");
                    document.getElementById('box-118-1c').className = "bg-white p-2 rounded-[24px] shadow-md border-4 " + (cc ? "border-emerald-400 bg-emerald-50" : "border-red-400 bg-red-50");

                    if (ca && cb && cc) { sp.textContent = "Giỏi quá! ✨"; sp.className = "font-black text-2xl italic text-emerald-600"; }
                    else { sp.textContent = "Kiểm tra lại nhé! 👉"; sp.className = "font-black text-2xl italic text-red-500"; }
                };

                // Bài 2 logic
                let selectedBox118 = null;
                window.selectBox118 = function(id) {
                    selectedBox118 = id;
                    ['A', 'B', 'C'].forEach(x => {
                        const btn = document.getElementById('btn-118-' + x);
                        btn.className = (x === id) ? "bg-white/20 border-2 border-yellow-400 p-2 rounded-[24px] scale-105 transition-all" : "bg-white/5 border border-white/10 p-2 rounded-[24px] transition-all opacity-50";
                    });
                };

                window.check118B2 = function() {
                    const sp = document.getElementById('r-118-2');
                    if (!selectedBox118) { alert("Bạn chọn một hộp nhé!"); return; }
                    if (selectedBox118 === 'B') { sp.textContent = "Chính xác! 🌟"; }
                    else { sp.textContent = "Chưa đúng rồi! 👉"; }
                };

                // Nộp bài tổng quát
                window.submitFinal118 = function() {
                    const a1a = document.getElementById('ans-118-1a').value;
                    const a1b = document.getElementById('ans-118-1b').value;
                    const a1c = document.getElementById('ans-118-1c').value;

                    if (!a1a || !a1b || !a1c || !selectedBox118) {
                        alert("Thầy E nhắc bạn: Hãy hoàn thành cả Bài 1 và Bài 2 trước nhé! ✨");
                        return;
                    }

                    let score = 0;
                    if (parseInt(a1a) === 5200) score += 2;
                    if (parseInt(a1b) === 6250) score += 2;
                    if (parseInt(a1c) === 5350) score += 2;
                    if (selectedBox118 === 'B') score += 4;

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    const report = "B1: " + a1a + ", " + a1b + ", " + a1c + " | B2: " + selectedBox118;

                    if (window.submitMathLesson) {
                        window.submitMathLesson(report, status, "btn-submit-118-final");
                    }
                    alert("🎉 Tuyệt vời! Bài làm của bạn đã được gửi tới Thầy E!");
                };
            </script>
        </div>
    `,

    "quizPool": []
};
