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

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                    <div class="space-y-10">
                        <div class="p-8 md:p-10 bg-amber-50 rounded-[48px] border-4 border-amber-200 relative shadow-inner">
                            <p class="text-amber-800 font-bold text-xl md:text-2xl mb-8 italic text-center">
                                "Bốn mặt xung quanh của hình hộp chữ nhật có thể được trải thành một hình chữ nhật lớn."
                            </p>
                            <div class="flex justify-center p-6 md:p-10 bg-white/70 rounded-[40px] shadow-sm">
                                <svg viewBox="0 0 400 150" class="w-full h-auto drop-shadow-xl">
                                    <!-- Net of lateral faces - increased height from 40 to 60 -->
                                    <rect x="20" y="20" width="80" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5" />
                                    <rect x="100" y="20" width="100" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5" />
                                    <rect x="200" y="20" width="80" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5" />
                                    <rect x="280" y="20" width="100" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5" />
                                    <!-- Labels - increased font size -->
                                    <text x="60" y="105" text-anchor="middle" class="text-[18px] font-black fill-amber-700">4m</text>
                                    <text x="150" y="105" text-anchor="middle" class="text-[18px] font-black fill-amber-700">5m</text>
                                    <text x="240" y="105" text-anchor="middle" class="text-[18px] font-black fill-amber-700">4m</text>
                                    <text x="330" y="105" text-anchor="middle" class="text-[18px] font-black fill-amber-700">5m</text>
                                    <text x="390" y="55" text-anchor="start" class="text-[18px] font-black fill-blue-700">2m</text>
                                    <!-- Brace for 2m height -->
                                    <line x1="385" y1="20" x2="385" y2="80" stroke="#ca8a04" stroke-width="2" />
                                    <line x1="380" y1="20" x2="390" y2="20" stroke="#ca8a04" stroke-width="2" />
                                    <line x1="380" y1="80" x2="390" y2="80" stroke="#ca8a04" stroke-width="2" />
                                </svg>
                            </div>
                        </div>

                        <div class="p-10 bg-blue-600 rounded-[48px] shadow-2xl transform hover:scale-[1.03] transition-transform">
                            <p class="text-blue-200 text-lg uppercase font-black mb-4 tracking-widest text-center">Ví dụ tính toán</p>
                            <div class="flex flex-col items-center gap-4">
                                <p class="text-white text-3xl md:text-5xl font-black text-center">
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
        <div class="space-y-12 md:space-y-20">
            <!-- Bài tập 1 -->
            <div class="p-8 md:p-14 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-48 h-48 bg-indigo-50 rounded-bl-full opacity-50 -mr-16 -mt-16"></div>
                <p class="font-black text-3xl md:text-5xl mb-12 text-indigo-700 flex items-baseline gap-6">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-indigo-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shadow-indigo-200">1</span>
                    Tính diện tích xung quanh của hình hộp chữ nhật:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
                    <!-- Câu a -->
                    <div class="bg-gray-50 p-8 md:p-12 rounded-[48px] border-4 border-transparent hover:border-indigo-200 transition-all group shadow-inner">
                        <div class="flex items-center gap-6 mb-10">
                            <span class="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-black text-2xl md:text-3xl">a</span>
                            <p class="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed">
                                Dài <span class="text-indigo-600">7 dm</span>, rộng <span class="text-indigo-600">5 dm</span>, cao <span class="text-indigo-600">4 dm</span>.
                            </p>
                        </div>
                        <div class="space-y-6">
                            <div class="bg-white p-6 md:p-8 rounded-[32px] shadow-xl border-2 border-gray-50">
                                <p class="text-sm md:text-base font-black text-gray-400 uppercase mb-4 tracking-widest text-center">Đáp án (dm²)</p>
                                <input type="number" id="ans-117-1a" class="w-full text-5xl md:text-7xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 placeholder-gray-100 text-center" placeholder="?">
                            </div>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-gray-50 p-8 md:p-12 rounded-[48px] border-4 border-transparent hover:border-indigo-200 transition-all group shadow-inner">
                        <div class="flex items-center gap-6 mb-10">
                            <span class="w-12 h-12 md:w-16 md:h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-black text-2xl md:text-3xl">b</span>
                            <p class="text-2xl md:text-3xl font-bold text-gray-700 leading-relaxed">
                                Dài <span class="text-indigo-600">6,5 cm</span>, rộng <span class="text-indigo-600">3,5 cm</span>, cao <span class="text-indigo-600">5 cm</span>.
                            </p>
                        </div>
                        <div class="space-y-6">
                            <div class="bg-white p-6 md:p-8 rounded-[32px] shadow-xl border-2 border-gray-50">
                                <p class="text-sm md:text-base font-black text-gray-400 uppercase mb-4 tracking-widest text-center">Đáp án (cm²)</p>
                                <input type="number" id="ans-117-1b" class="w-full text-5xl md:text-7xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 placeholder-gray-100 text-center" placeholder="?">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-8 md:p-16 bg-white rounded-[48px] md:rounded-[64px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-3xl md:text-5xl mb-12 text-emerald-700 flex items-baseline gap-6">
                    <span class="w-16 h-16 md:w-20 md:h-20 bg-emerald-600 text-white rounded-[24px] md:rounded-[32px] flex items-center justify-center font-black shadow-xl shadow-emerald-200">2</span>
                    Bài toán về bể bơi
                </p>
                <div class="bg-emerald-600 p-10 md:p-14 rounded-[56px] text-white shadow-2xl relative overflow-hidden mb-12">
                    <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                    <div class="absolute top-10 right-14 opacity-20 scale-150">
                        <svg class="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M1.5 21C2.33 21 3 20.33 3 19.5V11C3 9.9 3.9 9 5 9H13C14.1 9 15 9.9 15 11V19.5C15 20.33 15.67 21 16.5 21S18 20.33 18 19.5V11C18 8.24 15.76 6 13 6H5C2.24 6 0 8.24 0 11V19.5C0 20.33 0.67 21 1.5 21M22.5 10C21.67 10 21 10.67 21 11.5V19C21 20.1 20.1 21 19 21S17 20.1 17 19V11.5C17 8.46 19.46 6 22.5 6S28 8.46 28 11.5V19C28 20.1 27.1 21 26 21S24 20.1 24 19V11.5C24 10.67 23.33 10 22.5 10Z"/></svg>
                    </div>
                    <p class="text-2xl md:text-4xl leading-relaxed md:leading-[1.4] font-medium italic mb-12 relative z-10 text-center md:text-left">
                        "Một bể bơi dạng hình hộp chữ nhật có chiều dài <span class="text-yellow-300 font-black">10 m</span>, chiều rộng <span class="text-yellow-300 font-black">4 m</span> và sâu <span class="text-yellow-300 font-black">1,5 m</span>. Người ta muốn ốp gạch men xung quanh thành bể bơi. Tính diện tích được ốp gạch."
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        <div class="bg-white/20 p-6 rounded-[32px] border-2 border-white/20 backdrop-blur-md flex flex-col items-center">
                            <p class="text-xs font-black uppercase opacity-60 mb-2">Chiều dài</p>
                            <p class="text-3xl md:text-4xl font-black text-yellow-300">10 m</p>
                        </div>
                        <div class="bg-white/20 p-6 rounded-[32px] border-2 border-white/20 backdrop-blur-md flex flex-col items-center">
                            <p class="text-xs font-black uppercase opacity-60 mb-2">Chiều rộng</p>
                            <p class="text-3xl md:text-4xl font-black text-yellow-300">4 m</p>
                        </div>
                        <div class="bg-white/20 p-6 rounded-[32px] border-2 border-white/20 backdrop-blur-md flex flex-col items-center">
                            <p class="text-xs font-black uppercase opacity-60 mb-2">Sâu (Chiều cao)</p>
                            <p class="text-3xl md:text-4xl font-black text-yellow-300">1,5 m</p>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-50 p-8 md:p-14 rounded-[56px] shadow-inner border-2 border-gray-100">
                    <p class="text-gray-400 font-black text-xs md:text-sm uppercase mb-6 tracking-widest text-center md:text-left">Lời giải & đáp số</p>
                    <div class="space-y-8">
                        <textarea id="ans-117-2-text" rows="5" class="w-full p-8 md:p-10 text-2xl md:text-3xl font-bold text-gray-700 bg-white rounded-[40px] border-4 border-gray-100 shadow-xl focus:border-emerald-500 focus:ring-0 transition-all resize-none" placeholder="Cùng giải bài toán này nhé..."></textarea>
                        
                        <div class="flex flex-col xl:flex-row items-stretch gap-8">
                            <div class="flex-1 bg-white p-8 md:p-10 rounded-[40px] shadow-xl border-4 border-gray-50 flex items-center justify-between gap-6">
                                <span class="text-emerald-600 font-black text-2xl md:text-3xl whitespace-nowrap">Đáp số (m²):</span>
                                <input type="number" id="ans-117-2-num" class="w-full text-4xl md:text-6xl font-black text-emerald-600 bg-transparent border-none focus:ring-0 text-right" placeholder="?">
                            </div>
                            
                            <button id="btn-submit-117" onclick="submit117()" class="xl:w-[350px] bg-emerald-600 hover:bg-emerald-700 text-white p-8 md:p-10 rounded-[40px] font-black text-3xl md:text-4xl shadow-2xl shadow-emerald-200 active:scale-95 transition-all flex justify-center items-center gap-6 group">
                                <span class="tracking-widest">NỘP BÀI</span>
                                <svg class="w-10 h-10 group-hover:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <script>
                window.submit117 = function() {
                    const a1a = document.getElementById('ans-117-1a').value;
                    const a1b = document.getElementById('ans-117-1b').value;
                    const a2n = document.getElementById('ans-117-2-num').value;
                    const a2t = document.getElementById('ans-117-2-text').value;

                    if (!a1a || !a1b || !a2n) {
                        alert("Em hãy hoàn thành các ô trống trước khi nộp bài nhé!");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // Check 1a: (7+5)*2*4 = 96
                    if (parseInt(a1a) === 96) { score += 3.33; feedback += "✅ Bài 1a đúng! "; } 
                    else { feedback += "❌ Bài 1a chưa đúng (Gợi ý: (7+5)x2x4). "; }

                    // Check 1b: (6.5+3.5)*2*5 = 100
                    if (parseFloat(a1b) === 100) { score += 3.33; feedback += "✅ Bài 1b đúng! "; }
                    else { feedback += "❌ Bài 1b chưa đúng. "; }

                    // Check 2: (10+4)*2*1.5 = 42
                    if (parseFloat(a2n) === 42) { score += 3.34; feedback += "✅ Bài 2 đúng!"; }
                    else { feedback += "❌ Bài 2 chưa đúng (Đáp số đúng là 42 m²)."; }

                    const finalScore = Math.round(score);
                    const status = finalScore >= 7 ? "XS" : (finalScore >= 5 ? "Đ" : "CĐ");

                    if (window.submitMathLesson) {
                        const report = \`Bài 1a: \${a1a}\\nBài 1b: \${a1b}\\nBài 2 (Lời giải): \${a2t}\\nSố đo: \${a2n}\`;
                        window.submitMathLesson(report, status, "btn-submit-117");
                        alert(feedback + "\\n\\nĐiểm của em: " + finalScore + "/10");
                    }
                };
            </script>
        </div>
    `,
    "quizPool": [
        {
            "question": "Công thức tính diện tích xung quanh của hình hộp chữ nhật là:",
            "options": [
                "S = (a + b) × 2 × h",
                "S = a × b × h",
                "S = (a + b) × h",
                "S = a × b × 2"
            ],
            "answer": 0,
            "level": 1
        },
        {
            "question": "Một hình hộp chữ nhật có chu vi đáy là 20cm, chiều cao 5cm. Diện tích xung quanh là:",
            "options": [
                "50 cm²",
                "100 cm²",
                "100 cm",
                "25 cm²"
            ],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Diện tích xung quanh là tổng diện tích của mấy mặt bên?",
            "options": [
                "2 mặt",
                "4 mặt",
                "6 mặt",
                "5 mặt"
            ],
            "answer": 1,
            "level": 1
        }
    ]
};
