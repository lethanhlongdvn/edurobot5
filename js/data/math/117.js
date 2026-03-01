export const lesson117 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "117",
    "title": "DIỆN TÍCH XUNG QUANH HÌNH HỘP CHỮ NHẬT",
    "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (Tiết 117 - Trang 44-45).",
    "content": `
        <div class="space-y-8 md:space-y-12">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-blue-50 p-8 md:p-10 rounded-[32px] md:rounded-[48px] border-l-[12px] border-blue-600 shadow-sm animate-fade-in">
                <h3 class="text-blue-900 font-black text-2xl md:text-4xl mb-6 flex items-center gap-4">
                    <span class="text-4xl md:text-5xl">🎯</span> Mục tiêu bài học
                </h3>
                <ul class="list-disc list-inside text-blue-800 space-y-4 font-bold text-xl md:text-2xl leading-relaxed">
                    <li>Hiểu được khái niệm diện tích xung quanh của hình hộp chữ nhật.</li>
                    <li>Biết cách tính diện tích xung quanh thông qua chu vi đáy và chiều cao.</li>
                    <li>Vận dụng giải bài tập thực tế (tính diện tích lưới, ốp gạch...).</li>
                </ul>
            </div>

            <!-- 📖 Khám phá kiến thức -->
            <div class="glass-card p-8 md:p-14 rounded-[48px] md:rounded-[64px] bg-white border border-blue-100 shadow-2xl relative overflow-hidden">
                <div class="absolute -right-20 -top-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                
                <h4 class="text-3xl md:text-5xl font-black text-blue-800 mb-12 flex items-center gap-6">
                    <span class="p-4 md:p-6 bg-blue-600 text-white rounded-[24px] md:rounded-[32px] shadow-xl shadow-blue-200">
                        <svg class="w-10 h-10 md:w-14 md:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </span>
                    Khám phá diện tích xung quanh
                </h4>

                <!-- Tình huống mở đầu -->
                <div class="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div class="bg-blue-50 p-6 md:p-8 rounded-[40px] border-2 border-blue-100 relative">
                        <p class="text-blue-800 font-bold italic text-xl md:text-2xl leading-relaxed">"Mỗi chuồng cần bao nhiêu mét vuông lưới nhỉ?"</p>
                        <div class="absolute -bottom-3 left-10 w-6 h-6 bg-blue-50 border-r-2 border-b-2 border-blue-100 rotate-45"></div>
                    </div>
                    <div class="bg-indigo-50 p-6 md:p-8 rounded-[40px] border-2 border-indigo-100 relative">
                        <p class="text-indigo-800 font-bold italic text-xl md:text-2xl leading-relaxed">"Bốn mặt xung quanh của mỗi chuồng đều được làm bằng lưới!"</p>
                        <div class="absolute -bottom-3 left-10 w-6 h-6 bg-indigo-50 border-r-2 border-b-2 border-indigo-100 rotate-45"></div>
                    </div>
                    <div class="bg-emerald-50 p-6 md:p-8 rounded-[40px] border-2 border-emerald-100 relative">
                        <p class="text-emerald-800 font-bold italic text-xl md:text-2xl leading-relaxed">"Chỉ cần tính diện tích mỗi mặt xung quanh rồi cộng lại là xong!"</p>
                        <div class="absolute -bottom-3 left-10 w-6 h-6 bg-emerald-50 border-r-2 border-b-2 border-emerald-100 rotate-45"></div>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-12 md:gap-16 items-start">
                    <div class="space-y-10">
                        <div class="p-8 md:p-10 bg-amber-50 rounded-[48px] border-4 border-amber-200 relative shadow-inner">
                            <p class="text-amber-800 font-bold text-xl md:text-2xl mb-8 italic text-center">
                                "Bốn mặt xung quanh của hình hộp chữ nhật có thể được trải thành một hình chữ nhật lớn."
                            </p>
                            <div class="flex justify-center p-6 md:p-10 bg-white/70 rounded-[40px] shadow-sm">
                                <img src="hinh_anh/toan/toan_tap_2/117-khampha.png" alt="Sơ đồ khai triển tiết 117" class="w-full max-w-4xl h-auto rounded-3xl shadow-xl border-4 border-amber-200">
                            </div>
                        </div>

                        <div class="p-10 bg-blue-600 rounded-[48px] shadow-2xl transform hover:scale-[1.03] transition-transform">
                            <p class="text-blue-200 text-lg uppercase font-black mb-4 tracking-widest text-center">Ví dụ tính toán</p>
                            <div class="flex flex-col items-center gap-4">
                                <p class="text-white text-2xl md:text-4xl font-black text-center whitespace-nowrap">
                                    (4 + 5 + 4 + 5) × 2 = <span class="text-yellow-300 underline underline-offset-8">36 (m²)</span>
                                </p>
                                <div class="h-1 w-24 bg-blue-400/30 rounded-full"></div>
                                <p class="text-blue-200 text-xl md:text-2xl font-black opacity-90 text-center uppercase">
                                    Chu vi đáy × Chiều cao
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-10">
                        <div class="bg-gradient-to-br from-indigo-800 to-indigo-950 p-10 md:p-14 rounded-[56px] text-white shadow-2xl relative overflow-hidden">
                            <div class="absolute -right-10 -top-10 scale-150 opacity-10">
                                <svg class="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M19 19H5V5H19V19M11.5 7V11H15.5V13H11.5V17H9.5V13H5.5V11H9.5V7H11.5Z"/></svg>
                            </div>
                            <h5 class="text-2xl md:text-4xl font-black mb-10 flex items-center gap-4 text-cyan-300">
                                <span class="text-4xl">🔄</span> Quy tắc cần nhớ
                            </h5>
                            <div class="space-y-8">
                                <div class="p-8 bg-white/5 rounded-[32px] backdrop-blur-md border-2 border-white/10">
                                    <p class="text-sm md:text-base font-black text-cyan-400 mb-3 tracking-widest">ĐỊNH NGHĨA</p>
                                    <p class="text-2xl md:text-3xl font-medium leading-normal">
                                        Diện tích xung quanh là <span class="text-yellow-300 font-black underline decoration-4 underline-offset-8">tổng diện tích bốn mặt bên</span> của hình hộp chữ nhật.
                                    </p>
                                </div>
                                <div class="p-8 bg-white/10 rounded-[40px] border-2 border-cyan-400/30 shadow-2xl shadow-cyan-900/20">
                                    <p class="text-sm md:text-base font-black text-cyan-400 mb-4 tracking-widest">CÔNG THỨC VÀNG</p>
                                    <div class="flex flex-col gap-6">
                                        <div class="flex items-center gap-6">
                                            <span class="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center font-black text-3xl text-cyan-300 border-2 border-cyan-500/50">S<sub class="text-lg">xq</sub></span>
                                            <span class="text-4xl md:text-6xl font-black text-white"> = P<sub class="text-xl">đáy</sub> × h</span>
                                        </div>
                                        <div class="p-4 bg-cyan-950/50 rounded-2xl border border-cyan-800/50">
                                            <p class="text-lg md:text-xl font-bold text-cyan-200 italic text-center">
                                                (Chu vi mặt đáy nhân với chiều cao)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 🤖 Thầy E hướng dẫn -->
            [[TUTOR|math-50-intro|Các em hãy nhớ: Muốn tính diện tích xung quanh, mình cần tìm Chu vi đáy trước rồi mới nhân cho Chiều cao nhé! Phải cùng đơn vị đo đấy nha!]]
        </div>
    `,
    "practice": `
        <div class="space-y-2 md:space-y-4">
            <!-- Bài tập 1 -->
            <div class="p-1 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-bl-full opacity-50 -mr-16 -mt-16"></div>
                <p class="font-black text-2xl md:text-3xl mb-1 text-indigo-700 flex items-baseline gap-2">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shadow-indigo-200">1</span>
                    Tính diện tích xung quanh của hình hộp chữ nhật:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <!-- Câu a -->
                    <div class="bg-gray-50 p-1 rounded-[32px] border-2 border-transparent hover:border-indigo-200 transition-all group shadow-inner">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-black text-2xl md:text-3xl">a</span>
                            <p class="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed">
                                Dài <span class="text-indigo-600">7 dm</span>, rộng <span class="text-indigo-600">5 dm</span>, cao <span class="text-indigo-600">4 dm</span>.
                            </p>
                        </div>
                        <div class="space-y-1">
                            <div id="box-117-1a" class="bg-white p-2 rounded-[32px] shadow-xl border-4 border-gray-50 flex items-center justify-center gap-4 transition-all">
                                <input type="number" id="ans-117-1a" class="w-full text-5xl md:text-7xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 placeholder-gray-100 text-right" placeholder="?">
                                <span class="text-3xl md:text-5xl font-black text-gray-300">dm²</span>
                            </div>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-gray-50 p-1 rounded-[32px] border-2 border-transparent hover:border-indigo-200 transition-all group shadow-inner">
                        <div class="flex items-center gap-4 mb-4">
                            <span class="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-black text-2xl md:text-3xl">b</span>
                            <p class="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed">
                                Dài <span class="text-indigo-600">6,5 cm</span>, rộng <span class="text-indigo-600">3,5 cm</span>, cao <span class="text-indigo-600">5 cm</span>.
                            </p>
                        </div>
                        <div class="space-y-1">
                            <div id="box-117-1b" class="bg-white p-2 rounded-[32px] shadow-xl border-4 border-gray-50 flex items-center justify-center gap-4 transition-all">
                                <input type="number" id="ans-117-1b" class="w-full text-5xl md:text-7xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 placeholder-gray-100 text-right" placeholder="?">
                                <span class="text-3xl md:text-5xl font-black text-gray-300">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Nút Kiểm tra Bài 1 -->
                <div class="mt-2 flex items-center gap-2">
                    <button onclick="check117B1()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-[28px] font-black text-2xl shadow-xl shadow-indigo-100 active:scale-95 transition-all flex items-center gap-3">
                        Kiểm tra
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    </button>
                    <span id="r-117-1" class="font-black text-4xl italic"></span>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-1 bg-white rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-3xl mb-1 text-emerald-700 flex items-baseline gap-2">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shadow-emerald-200">2</span>
                    Bài toán về bể bơi
                </p>
                <div class="bg-emerald-600 p-2 rounded-[40px] text-white shadow-2xl relative overflow-hidden mb-2">
                    <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div class="flex flex-col items-center gap-4 mb-4">
                        <p class="text-2xl md:text-4xl leading-relaxed font-bold text-center text-white">
                            Một bể bơi dạng hình hộp chữ nhật có chiều dài 10 m, chiều rộng 4 m và sâu 1,5 m. Người ta muốn ốp gạch men xung quanh thành bể bơi. Tính phần diện tích được ốp gạch men (diện tích mạch vữa không đáng kể).
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-2 relative z-10">
                        <div class="bg-white/20 p-2 rounded-[32px] border-2 border-white/20 backdrop-blur-md flex flex-col items-center">
                            <p class="text-xs font-black uppercase opacity-60 mb-2">Chiều dài</p>
                            <p class="text-3xl md:text-4xl font-black text-yellow-300">10 m</p>
                        </div>
                        <div class="bg-white/20 p-2 rounded-[32px] border-2 border-white/20 backdrop-blur-md flex flex-col items-center">
                            <p class="text-xs font-black uppercase opacity-60 mb-2">Chiều rộng</p>
                            <p class="text-3xl md:text-4xl font-black text-yellow-300">4 m</p>
                        </div>
                        <div class="bg-white/20 p-2 rounded-[32px] border-2 border-white/20 backdrop-blur-md flex flex-col items-center">
                            <p class="text-xs font-black uppercase opacity-60 mb-2">Sâu (Chiều cao)</p>
                            <p class="text-3xl md:text-4xl font-black text-yellow-300">1,5 m</p>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 p-1 rounded-[32px] shadow-inner border-2 border-gray-100">
                    <p class="text-gray-400 font-black text-[10px] md:text-xs uppercase mb-2 tracking-widest text-center md:text-left">Lời giải của em</p>
                    <div class="space-y-4">
                        <div class="relative group">
                            <textarea id="ans-117-2-text" rows="5" class="w-full p-4 md:p-6 text-xl md:text-2xl font-bold text-indigo-800 bg-white rounded-[24px] border-2 border-gray-100 shadow-lg focus:border-emerald-500 focus:ring-0 transition-all resize-none leading-tight" placeholder="Bạn hãy viết lời giải và phép tính vào đây nhé..."></textarea>
                            <button onclick="startVoiceInput('ans-117-2-text')" class="absolute bottom-6 right-6 p-4 bg-emerald-100 text-emerald-600 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all shadow-lg active:scale-90 group-hover:block sm:hidden md:block">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                            </button>
                        </div>
                        
                        <div class="flex justify-center">
                            <button id="btn-check-117-ai" onclick="submit117B2()" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl font-black text-lg shadow-lg active:scale-95 transition-all flex items-center gap-2">
                                <span>Thầy E Chấm</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nút Nộp Bài Tổng Kết -->
            <div class="flex justify-center mt-2">
                <button id="btn-submit-117" onclick="submitFinal117()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all">
                    NỘP BÀI
                </button>
            </div>

            <script>
                // Bài 1
                window.check117B1 = function() {
                    const a1a = document.getElementById('ans-117-1a').value;
                    const a1b = document.getElementById('ans-117-1b').value;
                    const sp = document.getElementById('r-117-1');
                    const boxA = document.getElementById('box-117-1a');
                    const boxB = document.getElementById('box-117-1b');

                    let correctA = parseInt(a1a) === 96;
                    let correctB = parseFloat(a1b) === 100;

                    boxA.className = boxA.className.replace(/border-(emerald|red)-400|bg-(emerald|red)-50/g, '') + 
                        (correctA ? " border-emerald-400 bg-emerald-50 shadow-emerald-100" : " border-red-400 bg-red-50 shadow-red-100");
                    
                    boxB.className = boxB.className.replace(/border-(emerald|red)-400|bg-(emerald|red)-50/g, '') + 
                        (correctB ? " border-emerald-400 bg-emerald-50 shadow-emerald-100" : " border-red-400 bg-red-50 shadow-red-100");

                    if (correctA && correctB) {
                        sp.textContent = "Xuất sắc! ✨"; sp.className = "font-black text-4xl italic text-emerald-600 animate-bounce";
                    } else {
                        sp.textContent = "Bạn xem lại nhé! 👉"; sp.className = "font-black text-4xl italic text-red-500";
                    }
                };

                // Bài 2 - AI chấm
                window.submit117B2 = async function() {
                    const a2t = document.getElementById('ans-117-2-text').value;
                    if (!a2t || a2t.length < 10) {
                        alert("Thầy E nhắc bạn: Hãy viết lời giải chi tiết vào ô trống trước khi nhờ thầy chấm nhé! ✨");
                        return;
                    }
                    const btn = document.getElementById('btn-check-117-ai');
                    const originalContent = btn.innerHTML;
                    btn.disabled = true;
                    btn.innerHTML = '<span class="animate-pulse">Thầy E đang đọc...</span>';
                    
                    if (window.checkAIExplanation) {
                        const aiResult = await window.checkAIExplanation(
                            a2t, 
                            "Tính diện tích xung quanh bể bơi dài 10m, rộng 4m, sâu 1.5m. Đáp số đúng phải là 42 m2. Kiểm tra xem lời giải và phép tính có hợp lý không."
                        );
                        alert((aiResult.isCorrect ? "⭐ GIỎI QUÁ! \n" : "⚠️ CỐ GẮNG LÊN! \n") + aiResult.comment);
                    } else {
                        alert("Thầy E đang bận một xíu, bạn hãy thử lại sau nhé!");
                    }
                    btn.disabled = false;
                    btn.innerHTML = originalContent;
                };

                // Nộp bài tổng kết
                window.submitFinal117 = function() {
                    const a1a = document.getElementById('ans-117-1a').value;
                    const a1b = document.getElementById('ans-117-1b').value;
                    const a2t = document.getElementById('ans-117-2-text').value;
                    if (!a1a || !a1b || !a2t) {
                        alert("Thầy E nhắc bạn: Hãy hoàn thành cả Bài 1 và Bài 2 trước khi nộp bài tổng kết nhé! ✨");
                        return;
                    }
                    const btn = document.getElementById('btn-submit-117');
                    btn.disabled = true;
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = '<span class="animate-pulse">ĐANG GỬI BÀI...</span>';

                    let report = "Bài 1a: " + a1a + "\nBài 1b: " + a1b + "\nBài 2 (Lời giải): " + a2t;
                    let score = 0;
                    if (parseInt(a1a) === 96) score += 3;
                    if (parseFloat(a1b) === 100) score += 3;
                    if (a2t.length > 20) score += 4;
                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");

                    if (window.submitMathLesson) {
                        window.submitMathLesson(report, status, "btn-submit-117");
                    }
                    alert("🎉 Tuyệt vời! Bài làm của bạn đã được gửi tới Thầy E!");
                    btn.disabled = false;
                    btn.innerHTML = '<span class="tracking-widest uppercase">Đã Nộp Bài</span>';
                };

                window.startVoiceInput = function(targetId) {
                    if (window.eduRobotVoice) {
                        window.eduRobotVoice(targetId);
                    } else {
                        alert("Tính năng Microphone đang được khởi động... Bạn hãy nhấn lại sau nhé! 🎤");
                        const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                        if (Recognition) {
                            const recognition = new Recognition();
                            recognition.lang = 'vi-VN';
                            recognition.onresult = (event) => {
                                document.getElementById(targetId).value = event.results[0][0].transcript;
                            };
                            recognition.start();
                        }
                    }
                };
            </script>
        </div>
    `,
    "quizPool": []
};
