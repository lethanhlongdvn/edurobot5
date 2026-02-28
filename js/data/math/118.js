export const lesson118 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "118",
    "title": "DIỆN TÍCH TOÀN PHẦN HÌNH HỘP CHỮ NHẬT",
    "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (Tiết 118 - Trang 46-47).",
    "content": `
        <div class="space-y-12 md:space-y-20">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-indigo-50 p-8 md:p-12 rounded-[48px] border-l-[16px] border-indigo-600 shadow-xl animate-fade-in">
                <h3 class="text-indigo-900 font-black text-3xl md:text-5xl mb-8 flex items-center gap-6">
                    <span class="text-5xl md:text-6xl text-indigo-600">🎯</span> Mục tiêu bài học
                </h3>
                <ul class="list-disc list-inside text-indigo-800 space-y-6 font-bold text-2xl md:text-3xl leading-relaxed">
                    <li>Nắm vững khái niệm diện tích toàn phần.</li>
                    <li>Biết cách tính diện tích toàn phần bằng cách cộng diện tích xung quanh và diện tích hai đáy.</li>
                    <li>Giải thành thạo các bài toán so sánh diện tích thực tế.</li>
                </ul>
            </div>

            <!-- 📖 Khám phá kiến thức -->
            <div class="glass-card p-8 md:p-16 rounded-[48px] md:rounded-[64px] bg-white border border-indigo-100 shadow-2xl relative overflow-hidden">
                <div class="absolute -right-32 -top-32 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                
                <h4 class="text-4xl md:text-6xl font-black text-indigo-800 mb-16 flex items-center gap-8">
                    <span class="p-6 md:p-8 bg-indigo-600 text-white rounded-[32px] shadow-2xl shadow-indigo-200">
                        <svg class="w-12 h-12 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </span>
                    Diện tích toàn phần là gì?
                </h4>

                <!-- Tình huống mở đầu - Layout 1 cột cho TV -->
                <div class="space-y-12">
                    <div class="grid grid-cols-1 gap-10">
                        <div class="bg-blue-50 p-10 rounded-[56px] border-4 border-blue-100 shadow-inner flex flex-col items-center gap-6">
                            <p class="text-blue-800 font-black italic text-2xl md:text-4xl leading-relaxed text-center">
                                "Tớ chỉ bọc 4 mặt xung quanh của đèn lồng thôi (Diện tích xung quanh)."
                            </p>
                        </div>
                        <div class="bg-purple-50 p-10 rounded-[56px] border-4 border-purple-100 shadow-inner flex flex-col items-center gap-6">
                            <p class="text-purple-800 font-black italic text-2xl md:text-4xl leading-relaxed text-center">
                                "Còn tớ bọc cả mặt trên và mặt dưới nữa thì cần bao nhiêu giấy tất cả nhỉ?"
                            </p>
                        </div>
                    </div>

                    <!-- Layout 1 cột lớn cho TV -->
                    <div class="grid grid-cols-1 gap-16 items-start mt-12 text-center">
                        <div class="p-10 md:p-14 bg-amber-50 rounded-[56px] border-4 border-amber-200 relative shadow-2xl">
                            <p class="text-amber-800 font-black text-2xl md:text-3xl mb-12 italic">
                                "Diện tích tất cả các mặt của một hình hộp chữ nhật là diện tích toàn phần."
                            </p>
                            <div class="flex justify-center p-10 bg-white rounded-[40px] shadow-sm">
                                <svg viewBox="0 0 400 300" class="w-full max-w-lg h-auto drop-shadow-2xl">
                                    <!-- Top base -->
                                    <rect x="130" y="20" width="100" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5" />
                                    <!-- Lateral faces -->
                                    <rect x="50" y="80" width="80" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5" />
                                    <rect x="130" y="80" width="100" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5" />
                                    <rect x="230" y="80" width="80" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5" />
                                    <rect x="310" y="80" width="100" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5" />
                                    <!-- Bottom base -->
                                    <rect x="130" y="200" width="100" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5" />
                                    
                                    <!-- Labels - To và rõ cho TV -->
                                    <text x="180" y="145" text-anchor="middle" class="text-[20px] font-black fill-blue-800">30 cm</text>
                                    <text x="180" y="240" text-anchor="middle" class="text-[18px] font-black fill-amber-800">25 cm</text>
                                    <text x="270" y="195" text-anchor="middle" class="text-[16px] font-black fill-amber-800">20 cm</text>
                                </svg>
                            </div>
                        </div>

                        <div class="bg-indigo-950 p-12 md:p-16 rounded-[64px] text-white shadow-3xl relative overflow-hidden border-4 border-indigo-400/20">
                            <div class="absolute -right-20 -top-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
                            <h5 class="text-3xl md:text-5xl font-black mb-12 flex items-center justify-center gap-6 text-indigo-300">
                                💡 CÁCH TÍNH CHI TIẾT
                            </h5>
                            <div class="space-y-8 font-black">
                                <div class="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 p-8 rounded-[40px] border-2 border-white/10">
                                    <p class="text-2xl md:text-3xl text-indigo-100">1. Diện tích xung quanh:</p>
                                    <p class="text-3xl md:text-5xl text-yellow-300">(25 + 20) × 2 × 30 = 2700 <span class="text-xl">cm²</span></p>
                                </div>
                                <div class="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 p-8 rounded-[40px] border-2 border-white/10">
                                    <p class="text-2xl md:text-3xl text-indigo-100">2. Diện tích hai đáy:</p>
                                    <p class="text-3xl md:text-5xl text-yellow-300">25 × 20 × 2 = 1000 <span class="text-xl">cm²</span></p>
                                </div>
                                <div class="bg-indigo-600 p-10 md:p-12 rounded-[48px] border-4 border-yellow-400 shadow-2xl relative">
                                    <div class="mb-4 text-indigo-200 text-xl md:text-2xl uppercase tracking-[0.2em] font-black">3. DIỆN TÍCH TOÀN PHẦN</div>
                                    <p class="text-4xl md:text-7xl text-yellow-400">
                                        2700 + 1000 = 3700 <span class="text-2xl">cm²</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="p-12 bg-pink-600 rounded-[56px] border-l-[24px] border-pink-400 shadow-2xl">
                            <h6 class="text-white font-black text-3xl md:text-5xl mb-6 flex items-center gap-6">
                                📌 QUY TẮC CẦN NHỚ
                            </h6>
                            <p class="text-pink-50 text-2xl md:text-4xl font-bold leading-relaxed">
                                Diện tích toàn phần của hình hộp chữ nhật là <span class="text-yellow-300 underline underline-offset-8">tổng diện tích xung quanh</span> và <span class="text-yellow-300 underline underline-offset-8">diện tích hai đáy</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 🤖 Thầy E hướng dẫn -->
            [[TUTOR|math-50-tp|Các bé hãy nhớ nhé: S_tp = S_xq + S_2đáy. Chúng mình cứ tính từng bước một là sẽ ra kết quả chính xác thôi!]]
        </div>
    `,
    "practice": `
        <div class="space-y-16 md:space-y-24">
            <!-- Bài tập 1 -->
            <div class="p-10 md:p-16 bg-white rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-br-full opacity-50 -ml-16 -mt-16"></div>
                <p class="font-black text-3xl md:text-5xl mb-16 text-blue-700 flex items-baseline gap-8">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 text-white rounded-[32px] flex items-center justify-center font-black shadow-2xl shadow-blue-200">1</span>
                    Tính diện tích toàn phần của mỗi hình hộp chữ nhật:
                </p>

                <div class="grid grid-cols-1 gap-12">
                    <!-- Hình a -->
                    <div class="bg-gray-50 p-10 md:p-14 rounded-[56px] border-4 border-transparent hover:border-orange-300 transition-all group shadow-inner flex flex-col items-center">
                        <div class="bg-white p-10 rounded-[48px] shadow-xl mb-12 w-full max-w-xl flex justify-center border-4 border-gray-50">
                            <svg viewBox="0 0 200 150" class="w-full h-auto opacity-100 transform group-hover:scale-110 transition-transform duration-500">
                                <path d="M40 100 L120 100 L160 70 L80 70 Z" fill="#fdba74" stroke="#c2410c" stroke-width="2.5" />
                                <path d="M40 100 L40 40 L120 40 L120 100 Z" fill="#fb923c" stroke="#c2410c" stroke-width="2.5" />
                                <path d="M120 100 L120 40 L160 10 L160 70 Z" fill="#f97316" stroke="#c2410c" stroke-width="2.5" />
                                <text x="80" y="120" text-anchor="middle" class="text-[12px] font-black fill-orange-950">30 cm</text>
                                <text x="145" y="95" text-anchor="middle" class="text-[12px] font-black fill-orange-950">20 cm</text>
                                <text x="35" y="70" text-anchor="end" class="text-[12px] font-black fill-orange-950">40 cm</text>
                            </svg>
                        </div>
                        <div class="w-full max-w-xl space-y-8">
                            <div class="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-4 border-orange-100 flex items-center justify-center gap-8 relative">
                                <input type="number" id="ans-118-1a" class="w-full text-5xl md:text-8xl font-black text-orange-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-4xl md:text-6xl font-black text-orange-600/30">cm²</span>
                            </div>
                        </div>
                    </div>

                    <!-- Hình b -->
                    <div class="bg-gray-50 p-10 md:p-14 rounded-[56px] border-4 border-transparent hover:border-cyan-300 transition-all group shadow-inner flex flex-col items-center">
                        <div class="bg-white p-10 rounded-[48px] shadow-xl mb-12 w-full max-w-xl flex justify-center border-4 border-gray-50">
                            <svg viewBox="0 0 200 150" class="w-full h-auto opacity-100 transform group-hover:scale-110 transition-transform duration-500">
                                <path d="M20 90 L140 90 L170 60 L50 60 Z" fill="#67e8f9" stroke="#0e7490" stroke-width="2.5" />
                                <path d="M20 90 L20 50 L140 50 L140 90 Z" fill="#22d3ee" stroke="#0e7490" stroke-width="2.5" />
                                <path d="M140 90 L140 50 L170 20 L170 60 Z" fill="#06b6d4" stroke="#0e7490" stroke-width="2.5" />
                                <text x="80" y="110" text-anchor="middle" class="text-[12px] font-black fill-cyan-950">50 cm</text>
                                <text x="160" y="85" text-anchor="middle" class="text-[12px] font-black fill-cyan-950">25 cm</text>
                                <text x="15" y="70" text-anchor="end" class="text-[12px] font-black fill-cyan-950">25 cm</text>
                            </svg>
                        </div>
                        <div class="w-full max-w-xl space-y-8">
                            <div class="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-4 border-cyan-100 flex items-center justify-center gap-8 relative">
                                <input type="number" id="ans-118-1b" class="w-full text-5xl md:text-8xl font-black text-cyan-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-4xl md:text-6xl font-black text-cyan-600/30">cm²</span>
                            </div>
                        </div>
                    </div>

                    <!-- Hình c -->
                    <div class="bg-gray-50 p-10 md:p-14 rounded-[56px] border-4 border-transparent hover:border-emerald-300 transition-all group shadow-inner flex flex-col items-center">
                        <div class="bg-white p-10 rounded-[48px] shadow-xl mb-12 w-full max-w-xl flex justify-center border-4 border-gray-50">
                            <svg viewBox="0 0 200 150" class="w-full h-auto opacity-100 transform group-hover:scale-110 transition-transform duration-500">
                                <path d="M40 90 L120 90 L150 60 L70 60 Z" fill="#6ee7b7" stroke="#059669" stroke-width="2.5" />
                                <path d="M40 90 L40 40 L120 40 L120 90 Z" fill="#34d399" stroke="#059669" stroke-width="2.5" />
                                <path d="M120 90 L120 40 L150 10 L150 60 Z" fill="#10b981" stroke="#059669" stroke-width="2.5" />
                                <text x="80" y="110" text-anchor="middle" class="text-[12px] font-black fill-emerald-950">35 cm</text>
                                <text x="140" y="85" text-anchor="middle" class="text-[12px] font-black fill-emerald-950">30 cm</text>
                                <text x="35" y="65" text-anchor="end" class="text-[12px] font-black fill-emerald-950">25 cm</text>
                            </svg>
                        </div>
                        <div class="w-full max-w-xl space-y-8">
                            <div class="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border-4 border-emerald-100 flex items-center justify-center gap-8 relative">
                                <input type="number" id="ans-118-1c" class="w-full text-5xl md:text-8xl font-black text-emerald-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                                <span class="text-4xl md:text-6xl font-black text-emerald-600/30">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-10 md:p-20 bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-[64px] text-white shadow-3xl relative overflow-hidden text-center">
                <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                
                <p class="font-black text-3xl md:text-5xl mb-16 flex items-center justify-center gap-8">
                    <span class="w-16 h-16 md:w-24 md:h-24 bg-white text-indigo-950 rounded-[32px] flex items-center justify-center font-black shadow-2xl">2</span>
                    Chọn hộp có diện tích toàn phần lớn nhất?
                </p>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
                    <!-- Hộp A -->
                    <button onclick="selectBox('A')" id="btn-box-A" class="bg-white/5 border-4 border-white/10 p-10 rounded-[56px] hover:bg-white/10 hover:border-yellow-400 transition-all group relative perspective-1000">
                        <div class="bg-yellow-400 text-indigo-900 font-black w-14 h-14 rounded-2xl mb-8 flex items-center justify-center text-3xl mx-auto shadow-xl shadow-yellow-400/20">A</div>
                        <p class="text-2xl md:text-3xl font-black leading-relaxed mb-10 text-indigo-200">
                            Dài: 1,5 dm<br>Rộng: 2 dm<br>Cao: 2,3 dm
                        </p>
                        <div class="bg-indigo-800/50 p-6 rounded-[32px] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
                            <svg viewBox="0 0 100 80" class="w-32 h-auto mx-auto" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="10" y="25" width="40" height="50" />
                                <path d="M10 25 L35 10 L85 10 L85 60 L60 75 M60 25 L85 10" />
                            </svg>
                        </div>
                    </button>

                    <!-- Hộp B -->
                    <button onclick="selectBox('B')" id="btn-box-B" class="bg-white/5 border-4 border-white/10 p-10 rounded-[56px] hover:bg-white/10 hover:border-yellow-400 transition-all group relative perspective-1000">
                        <div class="bg-blue-400 text-indigo-900 font-black w-14 h-14 rounded-2xl mb-8 flex items-center justify-center text-3xl mx-auto shadow-xl shadow-blue-400/20">B</div>
                        <p class="text-2xl md:text-3xl font-black leading-relaxed mb-10 text-blue-200">
                            Dài: 3,7 dm<br>Rộng: 3 dm<br>Cao: 1 dm
                        </p>
                        <div class="bg-indigo-800/50 p-6 rounded-[32px] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
                            <svg viewBox="0 0 120 80" class="w-40 h-auto mx-auto" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="10" y="45" width="70" height="25" />
                                <path d="M10 45 L40 30 L110 30 L110 55 L80 70 M80 45 L110 30" />
                            </svg>
                        </div>
                    </button>

                    <!-- Hộp C -->
                    <button onclick="selectBox('C')" id="btn-box-C" class="bg-white/5 border-4 border-white/10 p-10 rounded-[56px] hover:bg-white/10 hover:border-yellow-400 transition-all group relative perspective-1000">
                        <div class="bg-pink-400 text-indigo-900 font-black w-14 h-14 rounded-2xl mb-8 flex items-center justify-center text-3xl mx-auto shadow-xl shadow-pink-400/20">C</div>
                        <p class="text-2xl md:text-3xl font-black leading-relaxed mb-10 text-pink-200">
                            Dài: 13 cm<br>Rộng: 25 cm<br>Cao: 10 cm
                        </p>
                        <div class="bg-indigo-800/50 p-6 rounded-[32px] opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
                            <svg viewBox="0 0 100 80" class="w-28 h-auto mx-auto" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="25" y="35" width="40" height="30" />
                                <path d="M25 35 L50 20 L95 20 L95 50 L70 65 M70 35 L95 20" />
                            </svg>
                        </div>
                    </button>
                </div>

                <div class="flex flex-col items-center gap-10">
                    <div id="selected-indicator" class="text-2xl font-black text-yellow-300 animate-pulse hidden">
                        Bé đã chọn hộp <span id="box-letter" class="text-5xl">?</span>
                    </div>
                    <button id="btn-submit-118" onclick="submit118()" class="bg-yellow-400 hover:bg-yellow-500 text-indigo-950 px-16 py-10 rounded-[40px] font-black text-4xl md:text-5xl shadow-3xl shadow-yellow-400/20 transition-all active:scale-90 flex items-center gap-6 group">
                        <span>NỘP BÀI</span>
                        <svg class="w-12 h-12 group-hover:translate-x-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                </div>
            </div>

            <script>
                let selectedBox = null;
                window.selectBox = function(boxId) {
                    selectedBox = boxId;
                    document.getElementById('selected-indicator').classList.remove('hidden');
                    document.getElementById('box-letter').innerText = boxId;
                    
                    ['A', 'B', 'C'].forEach(id => {
                        const btn = document.getElementById('btn-box-' + id);
                        if (id === boxId) {
                            btn.classList.add('border-yellow-400', 'bg-white/20', 'scale-105');
                            btn.classList.remove('border-white/10', 'bg-white/5');
                        } else {
                            btn.classList.remove('border-yellow-400', 'bg-white/20', 'scale-105');
                            btn.classList.add('border-white/10', 'bg-white/5');
                        }
                    });
                };

                window.submit118 = function() {
                    const a1a = document.getElementById('ans-118-1a').value;
                    const a1b = document.getElementById('ans-118-1b').value;
                    const a1c = document.getElementById('ans-118-1c').value;

                    if (!a1a || !a1b || !a1c || !selectedBox) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành hết các câu hỏi trước khi nộp bài nhé! 🌟");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // Chấm bài 1: a-5200, b-6250, c-5350
                    if (parseInt(a1a) === 5200) { score += 2.5; feedback += "✅ Hình a đúng!\\n"; } else { feedback += "❌ Hình a chưa đúng (5200).\\n"; }
                    if (parseInt(a1b) === 6250) { score += 2.5; feedback += "✅ Hình b đúng!\\n"; } else { feedback += "❌ Hình b chưa đúng (6250).\\n"; }
                    if (parseInt(a1c) === 5350) { score += 2.5; feedback += "✅ Hình c đúng!\\n"; } else { feedback += "❌ Hình c chưa đúng (5350).\\n"; }
                    
                    // Chấm bài 2: Box B is largest: 35.6 dm2
                    if (selectedBox === 'B') { 
                        score += 2.5; 
                        feedback += "✅ Bài 2 chính xác! Hộp B có Stp = 35,6 dm² là lớn nhất."; 
                    } else { 
                        feedback += "❌ Bài 2 sai rồi. Hộp B mới là hộp lớn nhất đó bé!"; 
                    }

                    const finalScore = Math.round(score);
                    const status = finalScore >= 8 ? "XS" : (finalScore >= 5 ? "Đ" : "CĐ");

                    if (window.submitMathLesson) {
                        const report = "1a: " + a1a + ", 1b: " + a1b + ", 1c: " + a1c + ", Bài 2: " + selectedBox;
                        window.submitMathLesson(report, status, "btn-submit-118");
                    }
                    
                    alert(feedback + "\\n\\nĐiểm của bé: " + finalScore + "/10");
                };
            </script>
        </div>
    `,
    "quizPool": [
        {
            "question": "Tính diện tích toàn phần hình hộp chữ nhật ta lấy diện tích xung quanh cộng với:",
            "options": [
                "Diện tích một mặt đáy",
                "Diện tích hai mặt đáy",
                "Chu vi mặt đáy",
                "Chiều cao"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Một hình hộp chữ nhật có Sxq = 100cm², diện tích một mặt đáy là 20cm². Diện tích toàn phần là:",
            "options": [
                "120 cm²",
                "140 cm²",
                "240 cm²",
                "80 cm²"
            ],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Diện tích toàn phần là tổng diện tích của tất cả mấy mặt?",
            "options": [
                "4 mặt",
                "2 mặt",
                "6 mặt",
                "5 mặt"
            ],
            "answer": 2,
            "level": 1
        }
    ]
};
