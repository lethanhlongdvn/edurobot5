export const lesson118 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "118",
    "title": "DIỆN TÍCH TOÀN PHẦN HÌNH HỘP CHỮ NHẬT",
    "desc": "Bài 50: Diện tích xung quanh và diện tích toàn phần của hình hộp chữ nhật (Tiết 118 - Trang 46-47).",
    "content": `
        <div class="space-y-6 md:space-y-10">
            <!-- 📖 Khám phá kiến thức -->
            <div class="glass-card p-6 md:p-10 rounded-[48px] bg-white border border-indigo-100 shadow-xl relative overflow-hidden">
                <div class="absolute -right-16 -top-16 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
                
                <h4 class="text-2xl md:text-3xl font-black text-indigo-800 mb-8 flex items-center gap-4">
                    <span class="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                    </span>
                    Diện tích toàn phần là gì?
                </h4>

                <!-- Tình huống mở đầu -->
                <div class="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-blue-50 p-6 rounded-[32px] border-2 border-blue-100 flex items-start gap-4">
                        <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black flex-shrink-0 mt-1">1</div>
                        <div>
                            <p class="text-blue-800 font-bold italic leading-relaxed">
                                "Tớ chỉ bọc 4 mặt xung quanh của đèn lồng thôi (Diện tích xung quanh)."
                            </p>
                        </div>
                    </div>
                    <div class="bg-purple-50 p-6 rounded-[32px] border-2 border-purple-100 flex items-start gap-4">
                        <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-black flex-shrink-0 mt-1">2</div>
                        <div>
                            <p class="text-purple-800 font-bold italic leading-relaxed">
                                "Còn tớ bọc cả mặt trên và mặt dưới nữa thì cần bao nhiêu giấy tất cả nhỉ?"
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="space-y-6">
                        <div class="bg-gray-50 p-8 rounded-[40px] border-2 border-gray-100 shadow-inner flex flex-col items-center">
                            <p class="text-gray-400 font-black text-xs uppercase mb-6 tracking-widest">Sơ đồ khai triển</p>
                            <svg viewBox="0 0 400 300" class="w-full max-w-sm h-auto drop-shadow-2xl">
                                <!-- Top base -->
                                <rect x="130" y="30" width="100" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
                                <!-- Lateral faces -->
                                <rect x="50" y="90" width="80" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                                <rect x="130" y="90" width="100" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                                <rect x="230" y="90" width="80" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                                <rect x="310" y="90" width="100" height="120" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
                                <!-- Bottom base -->
                                <rect x="130" y="210" width="100" height="60" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
                                
                                <!-- Labels -->
                                <text x="180" y="150" text-anchor="middle" class="text-[12px] font-bold fill-blue-700">30 cm</text>
                                <text x="180" y="240" text-anchor="middle" class="text-[12px] font-bold fill-amber-700">25 cm</text>
                                <text x="270" y="200" text-anchor="middle" class="text-[12px] font-bold fill-amber-700">20 cm</text>
                            </svg>
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="bg-indigo-900 p-8 rounded-[40px] text-white shadow-2xl relative">
                            <h5 class="text-xl font-black mb-6 text-indigo-300">💡 Các bước tính:</h5>
                            <div class="space-y-4 font-bold">
                                <div class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                                    <span class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs">1</span>
                                    <p>S<sub class="text-[10px]">xq</sub> = (25 + 20) × 2 × 30 = <span class="text-yellow-400">2700 cm²</span></p>
                                </div>
                                <div class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                                    <span class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs">2</span>
                                    <p>S<sub class="text-[10px]">2 đáy</sub> = 25 × 20 × 2 = <span class="text-yellow-400">1000 cm²</span></p>
                                </div>
                                <div class="flex items-center gap-4 bg-indigo-600 p-5 rounded-3xl border-2 border-indigo-400">
                                    <span class="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-indigo-900">✨</span>
                                    <p class="text-lg">S<sub class="text-[10px]">tp</sub> = 2700 + 1000 = <span class="text-yellow-300 font-black">3700 cm²</span></p>
                                </div>
                            </div>
                        </div>

                        <div class="p-6 bg-pink-100 rounded-[32px] border-l-8 border-pink-500">
                            <h6 class="text-pink-900 font-black text-lg mb-2">📌 Ghi nhớ:</h6>
                            <p class="text-pink-800 font-bold leading-relaxed">
                                Diện tích toàn phần của hình hộp chữ nhật là tổng diện tích xung quanh và diện tích hai đáy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- [[TUTOR|math-50-tp|Diện tích toàn phần giống như việc em bọc kín tất cả các mặt của một món quà vậy. Nhớ cộng thêm diện tích 2 đáy nhé!]] -->
        </div>
    `,
    "practice": `
        <div class="space-y-8 md:space-y-12">
            <!-- Bài tập 1 -->
            <div class="p-6 md:p-10 bg-white rounded-[48px] border border-gray-100 shadow-xl relative">
                <p class="font-black text-2xl mb-8 text-blue-700 flex items-baseline gap-3">
                    <span class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-blue-200">1</span>
                    Tính diện tích toàn phần của mỗi hình hộp chữ nhật dưới đây:
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Hình a -->
                    <div class="bg-orange-50 p-6 rounded-[40px] border-2 border-orange-100 flex flex-col items-center group">
                        <div class="bg-white p-4 rounded-3xl shadow-sm mb-6 w-full flex justify-center">
                            <svg viewBox="0 0 200 150" class="w-32 h-auto opacity-80 group-hover:opacity-100 transition-opacity">
                                <path d="M40 100 L120 100 L160 70 L80 70 Z" fill="#fdba74" stroke="#c2410c" stroke-width="2" />
                                <path d="M40 100 L40 40 L120 40 L120 100 Z" fill="#fb923c" stroke="#c2410c" stroke-width="2" />
                                <path d="M120 100 L120 40 L160 10 L160 70 Z" fill="#f97316" stroke="#c2410c" stroke-width="2" />
                                <text x="80" y="115" text-anchor="middle" class="text-[10px] font-bold fill-orange-800">30 cm</text>
                                <text x="145" y="90" text-anchor="middle" class="text-[10px] font-bold fill-orange-800">20 cm</text>
                                <text x="35" y="70" text-anchor="end" class="text-[10px] font-bold fill-orange-800">40 cm</text>
                            </svg>
                        </div>
                        <div class="w-full space-y-3">
                            <p class="text-sm font-black text-orange-400 uppercase text-center">Hình a</p>
                            <div class="relative">
                                <input type="number" id="ans-118-1a" class="w-full bg-white border-2 border-orange-200 rounded-2xl p-4 text-center text-2xl font-black text-orange-600 focus:border-orange-500 focus:ring-0" placeholder="?">
                                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-orange-300 font-bold">cm²</span>
                            </div>
                        </div>
                    </div>

                    <!-- Hình b -->
                    <div class="bg-cyan-50 p-6 rounded-[40px] border-2 border-cyan-100 flex flex-col items-center group">
                        <div class="bg-white p-4 rounded-3xl shadow-sm mb-6 w-full flex justify-center">
                            <svg viewBox="0 0 200 150" class="w-40 h-auto opacity-80 group-hover:opacity-100 transition-opacity">
                                <path d="M20 90 L140 90 L170 60 L50 60 Z" fill="#67e8f9" stroke="#0e7490" stroke-width="2" />
                                <path d="M20 90 L20 50 L140 50 L140 90 Z" fill="#22d3ee" stroke="#0e7490" stroke-width="2" />
                                <path d="M140 90 L140 50 L170 20 L170 60 Z" fill="#06b6d4" stroke="#0e7490" stroke-width="2" />
                                <text x="80" y="105" text-anchor="middle" class="text-[10px] font-bold fill-cyan-800">50 cm</text>
                                <text x="160" y="80" text-anchor="middle" class="text-[10px] font-bold fill-cyan-800">25 cm</text>
                                <text x="15" y="70" text-anchor="end" class="text-[10px] font-bold fill-cyan-800">25 cm</text>
                            </svg>
                        </div>
                        <div class="w-full space-y-3">
                            <p class="text-sm font-black text-cyan-400 uppercase text-center">Hình b</p>
                            <div class="relative">
                                <input type="number" id="ans-118-1b" class="w-full bg-white border-2 border-cyan-200 rounded-2xl p-4 text-center text-2xl font-black text-cyan-600 focus:border-cyan-500 focus:ring-0" placeholder="?">
                                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-cyan-300 font-bold">cm²</span>
                            </div>
                        </div>
                    </div>

                    <!-- Hình c -->
                    <div class="bg-emerald-50 p-6 rounded-[40px] border-2 border-emerald-100 flex flex-col items-center group">
                        <div class="bg-white p-4 rounded-3xl shadow-sm mb-6 w-full flex justify-center">
                            <svg viewBox="0 0 200 150" class="w-32 h-auto opacity-80 group-hover:opacity-100 transition-opacity">
                                <path d="M40 90 L120 90 L150 60 L70 60 Z" fill="#6ee7b7" stroke="#059669" stroke-width="2" />
                                <path d="M40 90 L40 40 L120 40 L120 90 Z" fill="#34d399" stroke="#059669" stroke-width="2" />
                                <path d="M120 90 L120 40 L150 10 L150 60 Z" fill="#10b981" stroke="#059669" stroke-width="2" />
                                <text x="80" y="105" text-anchor="middle" class="text-[10px] font-bold fill-emerald-800">35 cm</text>
                                <text x="140" y="80" text-anchor="middle" class="text-[10px] font-bold fill-emerald-800">30 cm</text>
                                <text x="35" y="65" text-anchor="end" class="text-[10px] font-bold fill-emerald-800">25 cm</text>
                            </svg>
                        </div>
                        <div class="w-full space-y-3">
                            <p class="text-sm font-black text-emerald-400 uppercase text-center">Hình c</p>
                            <div class="relative">
                                <input type="number" id="ans-118-1c" class="w-full bg-white border-2 border-emerald-200 rounded-2xl p-4 text-center text-2xl font-black text-emerald-600 focus:border-emerald-500 focus:ring-0" placeholder="?">
                                <span class="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-300 font-bold">cm²</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-6 md:p-10 bg-gradient-to-br from-gray-900 to-indigo-950 rounded-[48px] text-white shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
                
                <p class="font-black text-2xl mb-8 flex items-baseline gap-3">
                    <span class="w-12 h-12 bg-white text-indigo-950 rounded-2xl flex items-center justify-center font-black">2</span>
                    Chọn câu trả lời đúng. Chiếc hộp nào dưới đây có diện tích toàn phần lớn nhất?
                </p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <!-- Hộp A -->
                    <button onclick="selectBox('A')" id="btn-box-A" class="bg-white/5 border-2 border-white/10 p-6 rounded-[40px] hover:bg-white/10 hover:border-yellow-400 transition-all group relative">
                        <div class="bg-yellow-400 text-indigo-950 font-black w-8 h-8 rounded-lg mb-4 flex items-center justify-center">A</div>
                        <p class="text-lg font-bold mb-4">Dài: 1,5 dm<br>Rộng: 2 dm<br>Cao: 2,3 dm</p>
                        <div class="opacity-40 group-hover:opacity-100 transition-opacity">
                            <svg viewBox="0 0 100 80" class="w-20 h-auto">
                                <rect x="10" y="20" width="40" height="50" fill="none" stroke="currentColor" stroke-width="1.5" />
                                <path d="M10 20 L30 10 L70 10 L70 60 L50 70 M50 20 L70 10" fill="none" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </div>
                    </button>

                    <!-- Hộp B -->
                    <button onclick="selectBox('B')" id="btn-box-B" class="bg-white/5 border-2 border-white/10 p-6 rounded-[40px] hover:bg-white/10 hover:border-yellow-400 transition-all group relative">
                        <div class="bg-blue-400 text-indigo-950 font-black w-8 h-8 rounded-lg mb-4 flex items-center justify-center">B</div>
                        <p class="text-lg font-bold mb-4">Dài: 3,7 dm<br>Rộng: 3 dm<br>Cao: 1 dm</p>
                        <div class="opacity-40 group-hover:opacity-100 transition-opacity">
                            <svg viewBox="0 0 100 80" class="w-24 h-auto">
                                <rect x="10" y="40" width="60" height="20" fill="none" stroke="currentColor" stroke-width="1.5" />
                                <path d="M10 40 L30 30 L90 30 L90 50 L70 60 M70 40 L90 30" fill="none" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </div>
                    </button>

                    <!-- Hộp C -->
                    <button onclick="selectBox('C')" id="btn-box-C" class="bg-white/5 border-2 border-white/10 p-6 rounded-[40px] hover:bg-white/10 hover:border-yellow-400 transition-all group relative border-pink-500/30">
                        <div class="bg-pink-400 text-indigo-950 font-black w-8 h-8 rounded-lg mb-4 flex items-center justify-center">C</div>
                        <p class="text-lg font-bold mb-4">Dài: 13 cm<br>Rộng: 25 cm<br>Cao: 10 cm</p>
                        <div class="opacity-40 group-hover:opacity-100 transition-opacity">
                            <svg viewBox="0 0 100 80" class="w-16 h-auto">
                                <rect x="20" y="30" width="40" height="30" fill="none" stroke="currentColor" stroke-width="1.5" />
                                <path d="M20 30 L40 20 L80 20 L80 50 L60 60 M60 30 L80 20" fill="none" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </div>
                    </button>
                </div>

                <div class="flex justify-center">
                    <button id="btn-submit-118" onclick="submit118()" class="bg-yellow-400 hover:bg-yellow-500 text-indigo-950 px-12 py-5 rounded-3xl font-black text-2xl shadow-2xl shadow-yellow-400/20 transition-all hover:scale-105 active:scale-95">
                        NỘP BÀI KIỂM TRA
                    </button>
                </div>
            </div>

            <script>
                let selectedBox = null;
                window.selectBox = function(boxId) {
                    selectedBox = boxId;
                    ['A', 'B', 'C'].forEach(id => {
                        const btn = document.getElementById('btn-box-' + id);
                        if (id === boxId) {
                            btn.classList.add('border-yellow-400', 'bg-white/20');
                            btn.classList.remove('border-white/10', 'bg-white/5');
                        } else {
                            btn.classList.remove('border-yellow-400', 'bg-white/20');
                            btn.classList.add('border-white/10', 'bg-white/5');
                        }
                    });
                };

                window.submit118 = function() {
                    const a1a = document.getElementById('ans-118-1a').value;
                    const a1b = document.getElementById('ans-118-1b').value;
                    const a1c = document.getElementById('ans-118-1c').value;

                    if (!a1a || !a1b || !a1c || !selectedBox) {
                        alert("Em hãy hoàn thành các bài tập và chọn hộp ở bài 2 nhé!");
                        return;
                    }

                    let score = 0;
                    let feedback = "";

                    // a: 5200
                    if (parseInt(a1a) === 5200) { score += 2.5; feedback += "✅ 1a đúng! "; } else { feedback += "❌ 1a sai (Đáp án: 5200). "; }
                    // b: 6250
                    if (parseInt(a1b) === 6250) { score += 2.5; feedback += "✅ 1b đúng! "; } else { feedback += "❌ 1b sai (Đáp án: 6250). "; }
                    // c: 5350
                    if (parseInt(a1c) === 5350) { score += 2.5; feedback += "✅ 1c đúng! "; } else { feedback += "❌ 1c sai (Đáp án: 5350). "; }
                    
                    // Box B is largest: 35.6 dm2
                    if (selectedBox === 'B') { score += 2.5; feedback += "✅ Bài 2 đúng!"; } else { feedback += "❌ Bài 2 chưa đúng (Hộp B có S_tp lớn nhất)."; }

                    const finalScore = Math.round(score);
                    const status = finalScore >= 7.5 ? "XS" : (finalScore >= 5 ? "Đ" : "CĐ");

                    if (window.submitMathLesson) {
                        const report = \`1a: \${a1a}, 1b: \${a1b}, 1c: \${a1c}, Bài 2 chọn: \${selectedBox}\`;
                        window.submitMathLesson(report, status, "btn-submit-118");
                        alert(feedback + "\\n\\nKết quả: " + Math.round(score*10)/10 + "/10");
                    }
                };
            </script>
        </div>
    `,
    "quizPool": [
        {
            "question": "Muốn tính diện tích toàn phần hình hộp chữ nhật, ta lấy diện tích xung quanh cộng với:",
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
        }
    ]
};
