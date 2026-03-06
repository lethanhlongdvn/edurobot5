export const lesson120C = {
    "topic": "Số thập phân",
    "week": "24",
    "period": "120C",
    "title": "ÔN TẬP: CỘNG, TRỪ, NHÂN, CHIA SỐ THẬP PHÂN (NÂNG CAO)",
    "desc": "Luyện tập đặt tính và tính 4 phép tính nâng cao với số thập phân (64 bài tập).",
    "content": `
        <div class="space-y-4 text-indigo-900 animate-fade-in">
            <div class="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-[32px] text-white shadow-xl flex items-center gap-6">
                <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-4xl">📚</div>
                <div>
                    <h3 class="text-xl md:text-2xl font-black uppercase tracking-tight mb-1">Cần nhớ</h3>
                    <ul class="list-disc list-inside font-bold text-lg md:text-xl opacity-95 space-y-1">
                        <li>Cộng/Trừ: Phải đặt thẳng cột dấu phẩy.</li>
                        <li>Nhân: Đếm tổng số chữ số ở phần thập phân để đặt dấu phẩy ở tích.</li>
                        <li>Chia: Chuyển về chia cho số tự nhiên bằng cách dời dấu phẩy.</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    "practice": function () {
        // Data for 64 problems
        const problems = {
            add: [
                { a: 125.45, b: 8.9, r: 134.35 }, { a: 45.123, b: 27.88, r: 73.003 }, { a: 12.5, b: 103.18, r: 115.68 }, { a: 0.456, b: 0.89, r: 1.346 },
                { a: 867.8, b: 32.22, r: 900.02 }, { a: 119.12, b: 0.88, r: 120 }, { a: 55.67, b: 112.35, r: 168.02 }, { a: 8.95, b: 1.11, r: 10.06 },
                { a: 100.55, b: 0.5, r: 101.05 }, { a: 44.444, b: 55.556, r: 100 }, { a: 11.234, b: 5.676, r: 16.91 }, { a: 12.35, b: 445.67, r: 458.02 },
                { a: 0.15, b: 0.095, r: 0.245 }, { a: 99.9, b: 0.11, r: 100.01 }, { a: 15.68, b: 4.42, r: 20.1 }, { a: 78.89, b: 11.11, r: 90 }
            ],
            sub: [
                { a: 134.35, b: 8.9, r: 125.45 }, { a: 73.003, b: 27.88, r: 45.123 }, { a: 115.68, b: 12.5, r: 103.18 }, { a: 1.346, b: 0.89, r: 0.456 },
                { a: 900.02, b: 32.22, r: 867.8 }, { a: 120, b: 0.88, r: 119.12 }, { a: 168.02, b: 112.35, r: 55.67 }, { a: 10.06, b: 1.11, r: 8.95 },
                { a: 101.05, b: 0.5, r: 100.55 }, { a: 100, b: 55.556, r: 44.444 }, { a: 16.91, b: 5.676, r: 11.234 }, { a: 458.02, b: 445.67, r: 12.35 },
                { a: 0.245, b: 0.095, r: 0.15 }, { a: 100.01, b: 0.11, r: 99.9 }, { a: 20.1, b: 4.42, r: 15.68 }, { a: 90, b: 11.11, r: 78.89 }
            ],
            mul: [
                { a: 1.25, b: 3.4, r: 4.25 }, { a: 4.5, b: 1.22, r: 5.49 }, { a: 0.25, b: 1.4, r: 0.35 }, { a: 1.55, b: 1.5, r: 2.325 },
                { a: 6.1, b: 2.5, r: 15.25 }, { a: 0.44, b: 0.5, r: 0.22 }, { a: 12.3, b: 0.15, r: 1.845 }, { a: 8.55, b: 1.0, r: 8.55 },
                { a: 0.15, b: 0.35, r: 0.0525 }, { a: 7.22, b: 0.5, r: 3.61 }, { a: 10.5, b: 2.2, r: 23.1 }, { a: 1.25, b: 0.8, r: 1 },
                { a: 9.1, b: 1.15, r: 10.465 }, { a: 0.25, b: 0.2, r: 0.05 }, { a: 5.5, b: 4.5, r: 24.75 }, { a: 0.8, b: 1.25, r: 1 }
            ],
            div: [
                { a: 4.25, b: 3.4, r: 1.25 }, { a: 5.49, b: 1.22, r: 4.5 }, { a: 0.35, b: 1.4, r: 0.25 }, { a: 2.325, b: 1.5, r: 1.55 },
                { a: 15.25, b: 2.5, r: 6.1 }, { a: 0.22, b: 0.5, r: 0.44 }, { a: 1.845, b: 0.15, r: 12.3 }, { a: 8.55, b: 1.0, r: 8.55 },
                { a: 0.0525, b: 0.35, r: 0.15 }, { a: 3.61, b: 0.5, r: 7.22 }, { a: 23.1, b: 2.2, r: 10.5 }, { a: 1, b: 0.8, r: 1.25 },
                { a: 10.465, b: 1.15, r: 9.1 }, { a: 0.05, b: 0.2, r: 0.25 }, { a: 24.75, b: 4.5, r: 5.5 }, { a: 1, b: 1.25, r: 0.8 }
            ]
        };

        // Expose problems to window for global access
        window.problems120C = problems;

        const signs = { add: '+', sub: '-', mul: '×', div: ':' };

        const generateGridHtml = (type, p, i) => {
            let cellsHtml = '';
            let numRows = 6;
            if (type === 'add' || type === 'sub') numRows = 3;

            let numCols = type === 'div' ? 8 : 6;

            for (let r = 1; r <= numRows; r++) {
                for (let c = 1; c <= numCols; c++) {
                    let extraClass = '';
                    if (type === 'div') {
                        if (c === 4) extraClass += ' div-v-line';
                        if (r === 1 && c >= 5) extraClass += ' div-h-line';
                    }
                    if (type === 'mul' && r === 6) extraClass += ' final-row';
                    if ((type === 'add' || type === 'sub') && r === 3) extraClass += ' final-row';
                    if (type === 'div' && r === 6) extraClass += ' final-row';

                    cellsHtml += `
                        <div class="cell-120C ${extraClass}">
                            <input type="text" maxlength="1" id="grid-120C-${type}-${i}-r${r}-c${c}" autocomplete="off">
                        </div>
                    `;
                }
                if ((type === 'add' || type === 'sub') && r === 2) cellsHtml += `<div class="line-120C" style="grid-column: 1 / span ${numCols}"></div>`;
                if (type === 'mul' && (r === 2 || r === 5)) cellsHtml += `<div class="line-120C" style="grid-column: 1 / span ${numCols}"></div>`;
            }

            return `
                <div class="bg-white p-8 rounded-[40px] border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div class="flex flex-col gap-6">
                        <div class="w-full text-center px-2">
                            <p class="text-4xl font-black text-indigo-900 tracking-tight leading-tight"><span class="text-blue-500 mr-2">${i + 1}.</span>${p.a} ${signs[type]} ${p.b} = ?</p>
                        </div>
                        <div class="flex flex-col items-center gap-6 px-2">
                            <div class="grid-120C bg-slate-50" style="grid-template-rows: repeat(${numRows}, 60px); grid-template-columns: repeat(${numCols}, 60px);">
                                ${(type !== 'div') ? `<div class="op-sign-120C" style="top: 75px">${signs[type]}</div>` : ''}
                                ${cellsHtml}
                            </div>
                            <div class="flex flex-row gap-6 items-center justify-center">
                                <button onclick="window.checkOne120C('${type}', ${i})" class="check-v-btn shrink-0" title="Kiểm tra">
                                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path></svg>
                                </button>
                                <button onclick="window.clearGrid120C('${type}', ${i})" class="flex items-center gap-1 px-4 py-2 text-sm font-black text-slate-400 hover:text-rose-500 transition-colors uppercase tracking-widest shrink-0">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };

        const renderSection = (type) => {
            return problems[type].map((p, i) => generateGridHtml(type, p, i)).join('');
        };

        // Actions: Define global handlers (only once)
        window.switchTab120C = function (type) {
            const btns = document.querySelectorAll('.tab-btn-120C');
            btns.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white', 'bg-indigo-600', 'bg-purple-600', 'bg-amber-600');
                btn.classList.add('bg-indigo-100', 'text-indigo-700');
            });
            const labels = { add: 'Cộng', sub: 'Trừ', mul: 'Nhân', div: 'Chia' };
            const currentBtn = Array.from(btns).find(b => b.textContent.includes(labels[type]));
            if (currentBtn) {
                currentBtn.classList.add('active', 'text-white');
                const colors = { add: 'bg-blue-600', sub: 'bg-indigo-600', mul: 'bg-purple-600', div: 'bg-amber-600' };
                currentBtn.classList.add(colors[type]);
                currentBtn.classList.remove('bg-indigo-100', 'text-indigo-700');
            }
            document.querySelectorAll('.operation-section').forEach(s => s.classList.add('hidden'));
            const section = document.getElementById('section-' + type);
            if (section) section.classList.remove('hidden');
        };

        window.clearGrid120C = function (type, i) {
            let numRows = (type === 'add' || type === 'sub') ? 3 : 6;
            let numCols = type === 'div' ? 8 : 6;
            for (let r = 1; r <= numRows; r++) {
                for (let c = 1; c <= numCols; c++) {
                    const el = document.getElementById(`grid-120C-${type}-${i}-r${r}-c${c}`);
                    if (el) el.value = '';
                }
            }
        };

        window.checkOne120C = function (type, i) {
            const prob = window.problems120C[type][i];
            let resStr = "";
            if (type === 'mul') {
                for (let c = 1; c <= 6; c++) {
                    const el = document.getElementById(`grid-120C-${type}-${i}-r6-c${c}`);
                    if (el && el.value.trim() !== '') resStr += el.value.trim();
                }
            } else if (type === 'add' || type === 'sub') {
                for (let c = 1; c <= 6; c++) {
                    const el = document.getElementById(`grid-120C-${type}-${i}-r3-c${c}`);
                    if (el && el.value.trim() !== '') resStr += el.value.trim();
                }
            } else if (type === 'div') {
                for (let r = 2; r <= 6; r++) {
                    for (let c = 5; c <= 8; c++) {
                        const el = document.getElementById(`grid-120C-div-${i}-r${r}-c${c}`);
                        if (el && el.value.trim() !== '') resStr += el.value.trim();
                    }
                }
            }
            const studentVal = parseFloat(resStr.replace(',', '.'));
            const isCorrect = (!isNaN(studentVal) && Math.abs(studentVal - prob.r) < 0.001);
            if (isCorrect) {
                if (window.Quiz) window.Quiz.playSFX('correct');
                if (typeof confetti === 'function') {
                    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#10b981', '#3b82f6', '#f59e0b'] });
                }
                UI.showToast("Chính xác! 🎉", "success");
            } else {
                if (window.Quiz) window.Quiz.playSFX('wrong');
                UI.showToast("Chưa đúng rồi! Em hãy kiểm tra lại nhé.", "error");
            }
        };

        window.submit120C = function () {
            let correctCount = 0;
            ['add', 'sub', 'mul', 'div'].forEach(type => {
                window.problems120C[type].forEach((p, i) => {
                    let resStr = "";
                    if (type === 'mul') {
                        for (let c = 1; c <= 6; c++) {
                            const el = document.getElementById(`grid-120C-${type}-${i}-r6-c${c}`);
                            if (el && el.value.trim() !== '') resStr += el.value.trim();
                        }
                    } else if (type === 'add' || type === 'sub') {
                        for (let c = 1; c <= 6; c++) {
                            const el = document.getElementById(`grid-120C-${type}-${i}-r3-c${c}`);
                            if (el && el.value.trim() !== '') resStr += el.value.trim();
                        }
                    } else if (type === 'div') {
                        for (let r = 1; r <= 6; r++) {
                            for (let c = 5; c <= 8; c++) {
                                const el = document.getElementById(`grid-120C-div-${i}-r${r}-c${c}`);
                                if (el && el.value.trim() !== '') resStr += el.value.trim();
                            }
                        }
                    }
                    const studentVal = parseFloat(resStr.replace(',', '.'));
                    if (!isNaN(studentVal) && Math.abs(studentVal - p.r) < 0.001) correctCount++;
                });
            });
            const totalPoints = Math.round((correctCount / 64) * 100);
            if (window.submitMathLesson) window.submitMathLesson("Đúng " + correctCount + "/64 câu", totalPoints, "btn-submit-120C");
            if (totalPoints >= 80 && typeof confetti === 'function') confetti({ particleCount: 200, spread: 160, origin: { y: 0.6 } });
            UI.showToast("Đã gửi bài! Kết quả: " + correctCount + "/64 đúng.", "success", 3000);
        };

        return `
            <div class="space-y-4 animate-fade-in" id="container-120C">
                <div class="flex flex-wrap justify-center gap-2 mb-8">
                    <button onclick="window.switchTab120C('add')" class="tab-btn-120C active bg-blue-600 text-white px-8 py-3 rounded-full font-black shadow-lg transition-all">Cộng (+)</button>
                    <button onclick="window.switchTab120C('sub')" class="tab-btn-120C bg-indigo-100 text-indigo-700 px-8 py-3 rounded-full font-black transition-all">Trừ (-)</button>
                    <button onclick="window.switchTab120C('mul')" class="tab-btn-120C bg-purple-100 text-purple-700 px-8 py-3 rounded-full font-black transition-all">Nhân (×)</button>
                    <button onclick="window.switchTab120C('div')" class="tab-btn-120C bg-amber-100 text-amber-700 px-8 py-3 rounded-full font-black transition-all">Chia (:)</button>
                </div>

                <div id="section-add" class="operation-section grid md:grid-cols-1 lg:grid-cols-2 gap-8">${renderSection('add')}</div>
                <div id="section-sub" class="operation-section hidden grid md:grid-cols-1 lg:grid-cols-2 gap-8">${renderSection('sub')}</div>
                <div id="section-mul" class="operation-section hidden grid md:grid-cols-1 lg:grid-cols-2 gap-8">${renderSection('mul')}</div>
                <div id="section-div" class="operation-section hidden grid md:grid-cols-1 lg:grid-cols-2 gap-8">${renderSection('div')}</div>

                <div class="flex flex-col items-center pt-10 border-t-4 border-dashed border-gray-100">
                     <button id="btn-submit-120C" onclick="window.submit120C()" class="btn-submit-global p-8 text-3xl">Gửi bài làm</button>
                </div>

                <style>
                    .grid-120C { display: grid; gap: 0px; border: 2px solid #1e3a8a; width: fit-content; background: white; position: relative; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(30, 58, 138, 0.2); }
                    .cell-120C { border: 1px solid #e2e8f0; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; }
                    .cell-120C input { width: 100%; height: 100%; border: none; text-align: center; background: transparent; font-size: 32px; font-weight: 800; color: #1e3a8a; outline: none; padding: 0; }
                    .cell-120C input:focus { background: #f0f7ff; }
                    .op-sign-120C { position: absolute; left: 8px; top: 75px; font-size: 40px; font-weight: 900; color: #1e3a8a; z-index: 10; pointer-events: none; text-shadow: 2px 2px 0 white; }
                    .line-120C { grid-column: 1 / span 6; height: 4px; background: #1e3a8a; margin-top: -2px; z-index: 5; }
                    .div-v-line { border-right: 4px solid #1e3a8a !important; }
                    .div-h-line { border-bottom: 4px solid #1e3a8a !important; }
                    .final-row { background: #fffbeb; }
                    .check-v-btn { width: 64px; height: 64px; background: #10b981; color: white; display: flex; align-items: center; justify-content: center; border-radius: 18px; box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.4); cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); border: none; }
                    .check-v-btn:hover { background: #059669; transform: translateY(-3px) scale(1.05); }
                    .hidden { display: none !important; }
                    @media (max-width: 768px) { .grid-120C { transform: scale(0.8); transform-origin: left top; } .cell-120C { width: 45px; height: 45px; } .cell-120C input { font-size: 24px; } }
                </style>
                <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
            </div>
        `;
    },
    "quizPool": [
        { "question": "Muốn nhân một số thập phân với một số thập phân ta làm thế nào?", "options": ["Nhân như nhân các số tự nhiên, đếm xem trong phần thập phân của cả hai thừa số có bao nhiêu chữ số rồi dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số.", "Nhân như nhân các số tự nhiên, đếm xem trong phần thập phân của thừa số thứ nhất có bao nhiêu chữ số rồi dùng dấu phẩy tách ở tích ra bấy nhiêu chữ số.", "Nhân như nhân các số tự nhiên", "Cả A, B, C đều sai"], "answer": 0, "level": 1 },
        { "question": "Kết quả phép tính 12,3 × 4,5 là:", "options": ["55,35", "553,5", "5,535", "5535"], "answer": 0, "level": 2 }
    ]
};
