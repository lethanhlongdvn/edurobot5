export const lesson120B = {
    "topic": "Số thập phân",
    "week": "24",
    "period": "120B",
    "title": "ÔN TẬP: CỘNG, TRỪ, NHÂN, CHIA SỐ THẬP PHÂN",
    "desc": "Luyện tập đặt tính và tính 4 phép tính cơ bản với số thập phân (64 bài tập).",
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
    "practice": `
        <div class="space-y-4 animate-fade-in" id="container-120B">
            <div class="flex flex-wrap justify-center gap-2 mb-4">
                <button onclick="switchTab120B('add')" class="tab-btn-120B active bg-blue-600 text-white px-6 py-2 rounded-full font-black shadow-lg">Cộng (+)</button>
                <button onclick="switchTab120B('sub')" class="tab-btn-120B bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full font-black">Trừ (-)</button>
                <button onclick="switchTab120B('mul')" class="tab-btn-120B bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-black">Nhân (×)</button>
                <button onclick="switchTab120B('div')" class="tab-btn-120B bg-amber-100 text-amber-700 px-6 py-2 rounded-full font-black">Chia (:)</button>
            </div>

            <div id="section-add" class="operation-section grid md:grid-cols-1 lg:grid-cols-2 gap-4"></div>
            <div id="section-sub" class="operation-section hidden grid md:grid-cols-1 lg:grid-cols-2 gap-4"></div>
            <div id="section-mul" class="operation-section hidden grid md:grid-cols-1 lg:grid-cols-2 gap-4"></div>
            <div id="section-div" class="operation-section hidden grid md:grid-cols-1 lg:grid-cols-2 gap-4"></div>

            <div class="flex flex-col items-center pt-6 border-t border-dashed border-gray-100">
                 <button id="btn-submit-120B" onclick="submit120B()" class="btn-submit-global">Gửi bài làm</button>
            </div>

            <style>
                .grid-120B { 
                    display: grid; 
                    grid-template-columns: repeat(6, 60px); 
                    grid-template-rows: repeat(6, 60px); 
                    gap: 0px; 
                    border: 2px solid #1e3a8a; 
                    width: fit-content; 
                    background: white; 
                    position: relative; 
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 25px -5px rgba(30, 58, 138, 0.2);
                }
                .cell-120B { 
                    border: 1px solid #e2e8f0; 
                    width: 60px; 
                    height: 60px; 
                    display: flex; 
                    align-items: center; 
                    justify-content: center; 
                }
                .cell-120B input { 
                    width: 100%; 
                    height: 100%; 
                    border: none; 
                    text-align: center; 
                    background: transparent; 
                    font-size: 32px; 
                    font-weight: 800; 
                    color: #1e3a8a; 
                    outline: none; 
                    padding: 0;
                }
                .cell-120B input:focus { background: #f0f7ff; }
                
                .op-sign-120B { 
                    position: absolute; 
                    left: 8px; 
                    top: 75px; 
                    font-size: 40px; 
                    font-weight: 900; 
                    color: #1e3a8a; 
                    z-index: 10;
                    pointer-events: none;
                    text-shadow: 2px 2px 0 white;
                }
                
                .line-120B { 
                    grid-column: 1 / span 6; 
                    height: 4px; 
                    background: #1e3a8a; 
                    margin-top: -2px;
                    z-index: 5;
                }

                .div-v-line { border-right: 4px solid #1e3a8a !important; }
                .div-h-line { border-bottom: 4px solid #1e3a8a !important; }
                
                .final-row { background: #fffbeb; }

                .check-v-btn {
                    width: 64px;
                    height: 64px;
                    background: #10b981;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 36px;
                    font-weight: 900;
                    border-radius: 16px;
                    box-shadow: 0 8px 15px -3px rgba(16, 185, 129, 0.3);
                    cursor: pointer;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                    border: none;
                }
                .check-v-btn:hover { background: #059669; transform: translateY(-3px) scale(1.05); box-shadow: 0 12px 20px -5px rgba(16, 185, 129, 0.4); }
                .check-v-btn:active { transform: scale(0.95); }

                .hidden { display: none !important; }
                
                @media (max-width: 768px) {
                    .grid-120B { scale: 0.85; origin: left top; }
                    .cell-120B { width: 50px; height: 50px; }
                    .check-v-btn { width: 56px; height: 56px; font-size: 28px; }
                }
            </style>

            <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
            <script>
                (function() {
                    const problems120B = {
                        add: [
                            {a: 12.5, b: 3.48, r: 15.98}, {a: 45.12, b: 7.8, r: 52.92}, {a: 125.5, b: 3.1, r: 128.6}, {a: 0.45, b: 0.89, r: 1.34},
                            {a: 67.8, b: 32.2, r: 100.0}, {a: 19.12, b: 0.88, r: 20}, {a: 5.67, b: 12.3, r: 17.97}, {a: 8.9, b: 1.11, r: 10.01},
                            {a: 100.5, b: 0.5, r: 101}, {a: 44.44, b: 55.56, r: 100}, {a: 1.234, b: 5.676, r: 6.91}, {a: 12.3, b: 45.67, r: 57.97},
                            {a: 0.1, b: 0.09, r: 0.19}, {a: 9.9, b: 0.1, r: 10}, {a: 15.6, b: 4.4, r: 20}, {a: 7.89, b: 1.11, r: 9}
                        ],
                        sub: [
                            {a: 15.98, b: 3.48, r: 12.5}, {a: 52.92, b: 7.8, r: 45.12}, {a: 128.6, b: 3.1, r: 125.5}, {a: 1.34, b: 0.89, r: 0.45},
                            {a: 100, b: 32.2, r: 67.8}, {a: 20, b: 0.88, r: 19.12}, {a: 17.97, b: 12.3, r: 5.67}, {a: 10.01, b: 1.11, r: 8.9},
                            {a: 101, b: 0.5, r: 100.5}, {a: 100, b: 55.56, r: 44.44}, {a: 6.91, b: 5.676, r: 1.234}, {a: 57.97, b: 45.67, r: 12.3},
                            {a: 0.19, b: 0.09, r: 0.1}, {a: 10, b: 0.1, r: 9.9}, {a: 20, b: 4.4, r: 15.6}, {a: 6.78, b: 0.78, r: 6}
                        ],
                        mul: [
                            {a: 12.5, b: 3, r: 37.5}, {a: 4.5, b: 1.2, r: 5.4}, {a: 0.25, b: 4, r: 1}, {a: 1.5, b: 1.5, r: 2.25},
                            {a: 6.1, b: 2, r: 12.2}, {a: 0.4, b: 0.5, r: 0.2}, {a: 12.3, b: 0.1, r: 1.23}, {a: 8.5, b: 10, r: 85},
                            {a: 0.15, b: 0.3, r: 0.045}, {a: 7.2, b: 0.5, r: 3.6}, {a: 10.5, b: 2, r: 21}, {a: 1.25, b: 0.8, r: 1},
                            {a: 9.1, b: 1.1, r: 10.01}, {a: 0.2, b: 0.2, r: 0.04}, {a: 5.5, b: 4, r: 22}, {a: 0.125, b: 8, r: 1}
                        ],
                        div: [
                            {a: 37.5, b: 3, r: 12.5}, {a: 5.4, b: 1.2, r: 4.5}, {a: 1, b: 4, r: 0.25}, {a: 2.25, b: 1.5, r: 1.5},
                            {a: 12.2, b: 2, r: 6.1}, {a: 0.2, b: 0.5, r: 0.4}, {a: 1.23, b: 0.1, r: 12.3}, {a: 85, b: 10, r: 8.5},
                            {a: 0.045, b: 0.3, r: 0.15}, {a: 3.6, b: 0.5, r: 7.2}, {a: 21, b: 2, r: 10.5}, {a: 1, b: 0.8, r: 1.25},
                            {a: 10.01, b: 1.1, r: 9.1}, {a: 0.04, b: 0.2, r: 0.2}, {a: 22, b: 4, r: 5.5}, {a: 1, b: 8, r: 0.125}
                        ]
                    };

                    window.switchTab120B = function(type) {
                        const btns = document.querySelectorAll('.tab-btn-120B');
                        btns.forEach(btn => {
                            btn.classList.remove('active', 'bg-blue-600', 'text-white', 'bg-indigo-600', 'bg-purple-600', 'bg-amber-600');
                            btn.classList.add('bg-indigo-100', 'text-indigo-700');
                        });
                        const labels = {add: 'Cộng', sub: 'Trừ', mul: 'Nhân', div: 'Chia'};
                        const currentBtn = Array.from(btns).find(b => b.textContent.includes(labels[type]));
                        if (currentBtn) {
                            currentBtn.classList.add('active', 'text-white');
                            const colors = {add: 'bg-blue-600', sub: 'bg-indigo-600', mul: 'bg-purple-600', div: 'bg-amber-600'};
                            currentBtn.classList.add(colors[type]);
                            currentBtn.classList.remove('bg-indigo-100', 'text-indigo-700');
                        }
                        document.querySelectorAll('.operation-section').forEach(s => s.classList.add('hidden'));
                        const section = document.getElementById('section-' + type);
                        if(section) section.classList.remove('hidden');
                    };

                    function renderGrids120B() {
                        const types = ['add', 'sub', 'mul', 'div'];
                        const signs = {add: '+', sub: '-', mul: '×', div: ':'};

                        types.forEach(type => {
                            const section = document.getElementById('section-' + type);
                            if (!section) return;
                            section.innerHTML = '';
                            problems120B[type].forEach((p, i) => {
                                const card = document.createElement('div');
                                card.className = 'bg-white p-8 rounded-[40px] border-2 border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform-gpu';
                                
                                let cellsHtml = '';
                                for (let r = 1; r <= 6; r++) {
                                    for (let c = 1; c <= 6; c++) {
                                        let extraClass = '';
                                        if (type === 'div') {
                                            if (c === 4) extraClass += ' div-v-line';
                                            if (r === 1 && c >= 5) extraClass += ' div-h-line';
                                        }
                                        
                                        // Final result row logic
                                        if (type === 'mul' && r === 6) extraClass += ' final-row';
                                        if ((type === 'add' || type === 'sub') && r === 3) extraClass += ' final-row';
                                        if (type === 'div' && r === 6) extraClass += ' final-row';
                                        
                                        cellsHtml += `
        < div class= "cell-120B ${extraClass}" >
            <input type="text" maxlength="1" id="grid-120B-${type}-${i}-r${r}-c${c}" autocomplete="off">
            </div>
                                        `;
                                    }
                                    // Line placement logic
                                    if ((type === 'add' || type === 'sub') && r === 2) cellsHtml += '<div class="line-120B"></div>';
                                    if (type === 'mul' && (r === 2 || r === 5)) cellsHtml += '<div class="line-120B"></div>';
                                }

                                card.innerHTML = `
    < div class="flex flex-col gap-6" >
                                        <div class="w-full text-left px-2">
                                            <p class="text-4xl font-black text-indigo-900 tracking-tight leading-tight"><span class="text-blue-500 mr-2">${i+1}.</span>${p.a} ${signs[type]} ${p.b} = ?</p>
                                        </div>
                                        <div class="flex flex-row items-center gap-10 px-2 flex-wrap sm:flex-nowrap">
                                            <div class="grid-120B bg-slate-50">
                                                ${(type !== 'div') ? `<div class="op-sign-120B" style="top: ${(type==='mul') ? '75px' : '75px'}">${signs[type]}</div>` : ''}
                                                ${cellsHtml}
                                            </div>
                                            <div class="flex flex-row sm:flex-col gap-4 items-center">
                                                <button onclick="checkOne120B('${type}', ${i})" class="check-v-btn" title="Kiểm tra">V</button>
                                                <button onclick="clearGrid120B('${type}', ${i})" class="flex items-center gap-1 px-4 py-2 text-sm font-black text-slate-400 hover:text-rose-500 transition-colors uppercase tracking-widest">
                                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                    Xóa
                                                </button>
                                            </div>
                                        </div>
                                    </div >
    `;
                                section.appendChild(card);
                            });
                        });
                    }

                    window.clearGrid120B = function(type, i) {
                        for(let r=1; r<=6; r++) {
                            for(let c=1; c<=6; c++) {
                                const el = document.getElementById(`grid - 120B - ${ type } -${ i } -r${ r } -c${ c } `);
                                if(el) el.value = '';
                            }
                        }
                    };

                    window.checkOne120B = function(type, i) {
                        const prob = problems120B[type][i];
                        let resStr = "";
                        if (type === 'mul') {
                            for(let c=1; c<=6; c++) {
                                const el = document.getElementById(`grid - 120B - ${ type } -${ i } -r6 - c${ c } `);
                                if(el && el.value.trim() !== '') resStr += el.value.trim();
                            }
                        } else if (type === 'add' || type === 'sub') {
                            for(let c=1; c<=6; c++) {
                                const el = document.getElementById(`grid - 120B - ${ type } -${ i } -r3 - c${ c } `);
                                if(el && el.value.trim() !== '') resStr += el.value.trim();
                            }
                        } else if (type === 'div') {
                            for(let r=2; r<=6; r++) {
                                for(let c=5; c<=6; c++) {
                                    const el = document.getElementById(`grid - 120B - div - ${ i } -r${ r } -c${ c } `);
                                    if(el && el.value.trim() !== '') resStr += el.value.trim();
                                }
                            }
                        }
                        
                        const studentVal = parseFloat(resStr.replace(',', '.'));
                        const isCorrect = (!isNaN(studentVal) && Math.abs(studentVal - prob.r) < 0.001);
                        if (isCorrect) {
                            if(window.Quiz) window.Quiz.playSFX('correct');
                            if(typeof confetti === 'function') {
                                confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#10b981', '#3b82f6', '#f59e0b'] });
                            }
                            alert("Tuyệt vời! Kết quả hoàn toàn chính xác. 🎉");
                        } else {
                            if(window.Quiz) window.Quiz.playSFX('wrong');
                            alert("Chưa đúng rồi! Em hãy rà soát lại các bước tính và đặt dấu phẩy nhé. 💪");
                        }
                    };

                    window.submit120B = function() {
                        let correctCount = 0;
                        ['add', 'sub', 'mul', 'div'].forEach(type => {
                            problems120B[type].forEach((p, i) => {
                                let resStr = "";
                                if (type === 'mul') {
                                    for(let c=1; c<=6; c++) {
                                        const el = document.getElementById(`grid - 120B - ${ type } -${ i } -r6 - c${ c } `);
                                        if(el && el.value.trim() !== '') resStr += el.value.trim();
                                    }
                                } else if (type === 'add' || type === 'sub') {
                                    for(let c=1; c<=6; c++) {
                                        const el = document.getElementById(`grid - 120B - ${ type } -${ i } -r3 - c${ c } `);
                                        if(el && el.value.trim() !== '') resStr += el.value.trim();
                                    }
                                } else if (type === 'div') {
                                    for(let r=2; r<=6; r++) {
                                        for(let c=5; c<=6; c++) {
                                            const el = document.getElementById(`grid - 120B - div - ${ i } -r${ r } -c${ c } `);
                                            if(el && el.value.trim() !== '') resStr += el.value.trim();
                                        }
                                    }
                                }
                                const studentVal = parseFloat(resStr.replace(',', '.'));
                                if (!isNaN(studentVal) && Math.abs(studentVal - p.r) < 0.001) correctCount++;
                            });
                        });
                        const totalPoints = Math.round((correctCount / 64) * 100);
                        if (window.submitMathLesson) {
                            window.submitMathLesson("Đúng " + correctCount + "/64 câu", totalPoints, "btn-submit-120B");
                        }
                        if (totalPoints >= 80 && typeof confetti === 'function') {
                            confetti({ particleCount: 200, spread: 160, origin: { y: 0.6 } });
                        }
                        alert("Kết quả: " + correctCount + "/64 câu đúng.\nSố điểm của em: " + totalPoints + " / 100 điểm.");
                    };

                    setTimeout(renderGrids120B, 100);
                })();
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Khi cộng hai số thập phân, ta phải đặt các chữ số ở cùng một hàng ............... với nhau.", "options": ["ngang", "thẳng cột", "chéo", "tùy ý"], "answer": 1, "level": 1 },
        { "question": "Kết quả của 0,5 + 0,5 là:", "options": ["0,1", "1,0", "0,10", "10"], "answer": 1, "level": 1 }
    ]
};
