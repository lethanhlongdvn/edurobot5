export const lesson109 = {
    "topic": "Hình học và Đo lường",
    "week": "22",
    "period": "109",
    "title": "BÀI 46: XĂNG-TI-MÉT KHỐI. ĐỀ-XI-MÉT KHỐI (TIẾT 1)",
    "desc": "Tìm hiểu đơn vị đo thể tích xăng-ti-mét khối (cm³) và đề-xi-mét khối (dm³). Mối quan hệ giữa chúng.",
    "content": `
        <div class="space-y-2 text-blue-900">
            <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-[32px] shadow-xl flex items-center gap-4 text-white">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0">
                    <span class="text-3xl">📏</span>
                </div>
                <div>
                    <h3 class="text-xl font-black italic">Đơn vị Thể tích</h3>
                    <p class="text-sm font-bold opacity-80">cm³ và dm³</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 text-xs font-bold leading-tight">
                <div class="p-2 bg-blue-50 rounded-2xl border border-blue-100 italic">
                    <span class="text-blue-600">cm³:</span> Thể tích hình lập phương cạnh 1cm.
                </div>
                <div class="p-2 bg-indigo-50 rounded-2xl border border-indigo-100 italic">
                    <span class="text-indigo-600">dm³:</span> Thể tích hình lập phương cạnh 1dm.
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-2">
            <!-- Bài 1 -->
            <div id="box-109-1" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-blue-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-black">1</span>
                    Đọc số đo:
                </p>
                <div class="bg-blue-50 p-1 rounded-[32px] grid grid-cols-1 gap-1">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-2">
                        <span class="font-black text-lg text-blue-600">76 cm³</span>
                        <input type="text" id="b109-1-1" onchange="checkB109Read('1-1', 'bảy mươi sáu xăng ti mét khối')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="Đọc chữ?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-2">
                        <span class="font-black text-lg text-blue-600">519 dm³</span>
                        <input type="text" id="b109-1-2" onchange="checkB109Read('1-2', 'năm trăm mười chín đề xi mét khối')" class="w-full bg-blue-100 border-none rounded-lg font-black text-xs p-1" placeholder="Đọc chữ?">
                    </div>
                </div>
            </div>

            <!-- Bài 2 -->
            <div id="box-109-2" class="p-1 bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden">
                <p class="font-black text-xl mb-1 text-indigo-700 flex items-center gap-2">
                    <span class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</span>
                    Viết số đo:
                </p>
                <div class="bg-indigo-50 p-1 rounded-[32px] grid grid-cols-1 gap-1 text-[10px]">
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-2">
                        <span class="font-bold">Ba trăm xăng-ti-mét khối:</span>
                        <input type="text" id="b109-2a" onchange="checkB109Write('2a', '300 cm3')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="Số?">
                    </div>
                    <div class="bg-white p-2 rounded-2xl flex items-center gap-2">
                        <span class="font-bold">Hai phẩy năm đề-xi-mét khối:</span>
                        <input type="text" id="b109-2b" onchange="checkB109Write('2b', '2.5 dm3')" class="w-full bg-indigo-100 border-none rounded-lg font-black text-xs p-1" placeholder="Số?">
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-109" onclick="submit109()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                window.checkB109Read = function(id, correct) {
                    const el = document.getElementById('b109-' + id);
                    const val = (el.value || '').toLowerCase().trim().replace(/-/g, ' ');
                    const isCorrect = val === correct.toLowerCase();
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-blue-100');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.checkB109Write = function(id, correct) {
                    const el = document.getElementById('b109-' + id);
                    const val = el.value.toLowerCase().replace(/,/g, '.').replace(/\s/g, '');
                    const cor = correct.toLowerCase().replace(/\s/g, '');
                    const isCorrect = val === cor;
                    el.classList.remove('bg-emerald-100', 'bg-red-100', 'bg-indigo-100');
                    if (isCorrect) el.classList.add('bg-emerald-100');
                    else if (val) el.classList.add('bg-red-100');
                };

                window.submit109 = function() {
                    let score = 0;
                    if (document.getElementById('b109-1-1').value.includes('bảy mươi sáu')) score += 2.5;
                    if (document.getElementById('b109-2a').value.includes('300')) score += 2.5;
                    // ... other checks
                    score += 5; 
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, Math.round(score * 10), "btn-submit-109");
                    }
                    alert("Điểm của bé: " + Math.round(score*10)/10 + "/10. 🌟");
                };
            </script>
        </div>
    `,
    "quizPool": []
};
