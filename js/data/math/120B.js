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
        <div class="space-y-4 animate-fade-in" id="container-120B"> <!-- Giảm dãn cách container chính -->
            <div class="flex flex-wrap justify-center gap-2 mb-4">
                <button onclick="switchTab120B('add')" class="tab-btn-120B active bg-blue-600 text-white px-6 py-2 rounded-full font-black shadow-lg">Cộng (+)</button>
                <button onclick="switchTab120B('sub')" class="tab-btn-120B bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full font-black">Trừ (-)</button>
                <button onclick="switchTab120B('mul')" class="tab-btn-120B bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-black">Nhân (×)</button>
                <button onclick="switchTab120B('div')" class="tab-btn-120B bg-amber-100 text-amber-700 px-6 py-2 rounded-full font-black">Chia (:)</button>
            </div>

            <div id="section-add" class="operation-section grid md:grid-cols-2 gap-4"></div>
            <div id="section-sub" class="operation-section hidden grid md:grid-cols-2 gap-4"></div>
            <div id="section-mul" class="operation-section hidden grid md:grid-cols-2 gap-4"></div>
            <div id="section-div" class="operation-section hidden grid md:grid-cols-2 gap-4"></div>

            <div class="flex flex-col items-center pt-6 border-t border-dashed border-gray-100">
                 <button id="btn-submit-120B" onclick="submit120B()" class="btn-submit-global">Gửi bài làm</button>
            </div>

            <style>
                /* Cấu hình lưới cực đại cho TV */
                .grid-120B { display: grid; grid-template-columns: repeat(6, 60px); grid-template-rows: repeat(3, 60px); gap: 0px; border: 2px solid #e2e8f0; width: fit-content; background: white; position: relative; }
                .cell-120B { border: 1px solid #cbd5e1; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: 800; color: #1e3a8a; }
                .cell-120B input { width: 100%; height: 100%; border: none; text-align: center; background: transparent; font-size: 32px; font-weight: 800; color: #1e3a8a; outline: none; }
                .cell-120B input:focus { background: #f0f7ff; }
                .op-sign { position: absolute; left: -45px; top: 75px; font-size: 36px; font-weight: 900; color: #64748b; }
                .line-120B { grid-column: 1 / span 6; height: 3px; background: #1e3a8a; margin: 0; }
                .result-cell { background: #fffbeb; border: 2px dashed #f59e0b !important; }
                
                /* Lưới chia cực đại */
                .division-grid { display: grid; grid-template-columns: 180px 3px 140px; grid-template-rows: 60px 3px 180px; gap: 0; margin: 10px 0; background: white; position: relative; border-radius: 8px; overflow: hidden; }
                .div-dividend { grid-column: 1; grid-row: 1; display: flex; justify-content: flex-end; align-items: center; gap: 2px; padding-right: 15px; }
                .div-line-v { grid-column: 2; grid-row: 1 / span 3; background: #1e3a8a; }
                .div-divisor { grid-column: 3; grid-row: 1; display: flex; align-items: center; padding-left: 15px; gap: 2px; }
                .div-line-h { grid-column: 3; grid-row: 2; background: #1e3a8a; }
                .div-quotient { grid-column: 3; grid-row: 3; display: flex; align-items: flex-start; padding-left: 15px; padding-top: 10px; gap: 2px; flex-wrap: wrap; }
                .div-steps { grid-column: 1; grid-row: 3; display: flex; flex-direction: column; align-items: flex-end; padding-right: 15px; padding-top: 10px; gap: 8px; }
                .div-cell { width: 28px; height: 40px; border: 1px solid #e2e8f0; display: flex; align-items: center; justify-content: center; font-weight: 800; }
                .div-cell input { width: 100%; height: 100%; border: none; text-align: center; background: transparent; font-size: 24px; font-weight: 800; outline: none; padding: 0; }
                
                .hidden { display: none !important; }
                
                /* Nút kiểm tra bên phải */
                .check-btn-right { height: fit-content; align-self: center; padding: 6px 14px; font-size: 16px; border-radius: 12px !important; }
            </style>

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
                            {a: 0.19, b: 0.09, r: 0.1}, {a: 10, b: 0.1, r: 9.9}, {a: 20, b: 4.4, r: 15.6}, {a: 7.89, b: 1.11, r: 7.89}
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
                        const currentBtn = Array.from(btns).find(b => b.textContent.includes(type === 'add' ? 'Cộng' : type === 'sub' ? 'Trừ' : type === 'mul' ? 'Nhân' : 'Chia'));
                        if (currentBtn) {
                            currentBtn.classList.add('active', 'text-white');
                            currentBtn.classList.remove('bg-indigo-100', 'text-indigo-700');
                            if(type === 'add') currentBtn.classList.add('bg-blue-600');
                            else if(type === 'sub') currentBtn.classList.add('bg-indigo-600');
                            else if(type === 'mul') currentBtn.classList.add('bg-purple-600');
                            else if(type === 'div') currentBtn.classList.add('bg-amber-600');
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
                                card.className = 'bg-white p-4 rounded-3xl border border-gray-100 shadow-md relative overflow-hidden';
                                
                                let gridHtml = '';
                                if (type !== 'div') {
                                    gridHtml = \`
                                        <div class="flex flex-row items-center gap-4"> <!-- Giảm gap -->
                                            <div class="grid-120B scale-90 origin-left"> <!-- Thu nhỏ grid một chút để vừa 2 cột -->
                                                <div class="op-sign">\${signs[type]}</div>
                                                \${Array(6).fill().map((_, c) => \`<div class="cell-120B"><input type="text" maxlength="1" id="grid-120B-\${type}-\${i}-r1-c\${c}"></div>\`).join('')}
                                                \${Array(6).fill().map((_, c) => \`<div class="cell-120B"><input type="text" maxlength="1" id="grid-120B-\${type}-\${i}-r2-c\${c}"></div>\`).join('')}
                                                <div class="line-120B"></div>
                                                \${Array(6).fill().map((_, c) => \`<div class="cell-120B result-cell"><input type="text" maxlength="1" id="grid-120B-\${type}-\${i}-res-c\${c}"></div>\`).join('')}
                                            </div>
                                            <button onclick="checkOne120B('\${type}', \${i})" class="check-btn-right bg-emerald-500 text-white font-black shadow-lg active:scale-95">Kiểm tra</button>
                                        </div>
                                    \`;
                                } else {
                                    gridHtml = \`
                                        <div class="flex flex-row items-center gap-4">
                                            <div class="division-grid scale-90 origin-left">
                                                <div class="div-dividend">
                                                    \${Array(6).fill().map((_, c) => \`<div class="div-cell"><input type="text" maxlength="1" id="grid-120B-div-\${i}-dividend-c\${c}"></div>\`).join('')}
                                                </div>
                                                <div class="div-line-v"></div>
                                                <div class="div-divisor">
                                                    \${Array(4).fill().map((_, c) => \`<div class="div-cell"><input type="text" maxlength="1" id="grid-120B-div-\${i}-divisor-c\${c}"></div>\`).join('')}
                                                </div>
                                                <div class="div-line-h"></div>
                                                <div class="div-quotient">
                                                    \${Array(4).fill().map((_, c) => \`<div class="div-cell"><input type="text" maxlength="1" id="grid-120B-div-\${i}-quotient-c\${c}"></div>\`).join('')}
                                                </div>
                                                <div class="div-steps">
                                                    <div class="flex gap-[2px]">\${Array(4).fill().map((_, c) => \`<div class="div-cell border-none opacity-40"><input type="text" maxlength="1"></div>\`).join('')}</div>
                                                    <div class="flex gap-[2px]">\${Array(4).fill().map((_, c) => \`<div class="div-cell border-none opacity-40"><input type="text" maxlength="1"></div>\`).join('')}</div>
                                                </div>
                                            </div>
                                            <button onclick="checkOne120B('div', \${i})" class="check-btn-right bg-amber-500 text-white rounded-2xl font-black shadow-lg active:scale-95">Kiểm tra</button>
                                        </div>
                                    \`;
                                }

                                card.innerHTML = \`
                                    <div class="flex flex-col gap-3">
                                        <div class="w-full text-left px-2"> <!-- Đề bài sang trái -->
                                            <p class="text-3xl font-black text-indigo-700">\${i+1}. \${p.a} \${signs[type]} \${p.b} = ?</p>
                                        </div>
                                        <div class="flex justify-start px-2">
                                            \${gridHtml}
                                        </div>
                                    </div>
                                \`;
                                section.appendChild(card);
                            });
                        });
                    }

                    window.checkOne120B = function(type, i) {
                        const prob = problems120B[type][i];
                        let resStr = "";
                        if (type !== 'div') {
                            for(let c=0; c<6; c++) {
                                const el = document.getElementById(\`grid-120B-\${type}-\${i}-res-c\${c}\`);
                                if(el) resStr += el.value;
                            }
                        } else {
                            for(let c=0; c<4; c++) {
                                const el = document.getElementById(\`grid-120B-div-\${i}-quotient-c\${c}\`);
                                if(el) resStr += el.value;
                            }
                        }
                        const studentVal = parseFloat(resStr.trim().replace(',', '.'));
                        const isCorrect = (!isNaN(studentVal) && Math.abs(studentVal - prob.r) < 0.001);
                        
                        if (isCorrect) {
                            if(window.Quiz) window.Quiz.playSFX('correct');
                            alert("Chính xác!");
                        } else {
                            if(window.Quiz) window.Quiz.playSFX('wrong');
                            alert("Chưa đúng, hãy kiểm tra lại kết quả.");
                        }
                    };

                    window.submit120B = function() {
                        let correctCount = 0;
                        ['add', 'sub', 'mul', 'div'].forEach(type => {
                            problems120B[type].forEach((p, i) => {
                                let resStr = "";
                                if (type !== 'div') {
                                    for(let c=0; c<6; c++) {
                                        const el = document.getElementById(\`grid-120B-\${type}-\${i}-res-c\${c}\`);
                                        if(el) resStr += el.value;
                                    }
                                } else {
                                    for(let c=0; c<4; c++) {
                                        const el = document.getElementById(\`grid-120B-div-\${i}-quotient-c\${c}\`);
                                        if(el) resStr += el.value;
                                    }
                                }
                                const studentVal = parseFloat(resStr.trim().replace(',', '.'));
                                if (!isNaN(studentVal) && Math.abs(studentVal - p.r) < 0.001) correctCount++;
                            });
                        });
                        const totalPoints = correctCount * 10;
                        if (window.submitMathLesson) {
                            window.submitMathLesson("Đúng " + correctCount + "/64 câu", totalPoints, "btn-submit-120B");
                        }
                        alert("Kết quả: " + correctCount + "/64 câu đúng.\\nTổng điểm: " + totalPoints + "/640 điểm.");
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
