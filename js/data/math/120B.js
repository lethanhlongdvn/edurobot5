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
        <div class="space-y-8 animate-fade-in" id="container-120B">
            <!-- Tabs Phép tính -->
            <div class="flex flex-wrap justify-center gap-2 mb-6">
                <button onclick="switchTab120B('add')" class="tab-btn-120B active bg-blue-600 text-white px-6 py-2 rounded-full font-black shadow-lg">Cộng (+)</button>
                <button onclick="switchTab120B('sub')" class="tab-btn-120B bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full font-black">Trừ (-)</button>
                <button onclick="switchTab120B('mul')" class="tab-btn-120B bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-black">Nhân (×)</button>
                <button onclick="switchTab120B('div')" class="tab-btn-120B bg-amber-100 text-amber-700 px-6 py-2 rounded-full font-black">Chia (:)</button>
            </div>

            <!-- Các phần bài tập -->
            <div id="section-add" class="operation-section space-y-6"></div>
            <div id="section-sub" class="operation-section hidden space-y-6"></div>
            <div id="section-mul" class="operation-section hidden space-y-6"></div>
            <div id="section-div" class="operation-section hidden space-y-6"></div>

            <div class="flex flex-col items-center pt-8 border-t border-dashed border-gray-100">
                 <button id="btn-submit-120B" onclick="submit120B()" class="btn-submit-global">Gửi bài làm</button>
            </div>

            <style>
                .grid-120B {
                    display: grid;
                    grid-template-columns: repeat(6, 40px);
                    grid-template-rows: repeat(3, 40px);
                    gap: 0px;
                    border: 1px solid #e2e8f0;
                    width: fit-content;
                    background: white;
                    position: relative;
                }
                .cell-120B {
                    border: 0.5px solid #cbd5e1;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: 800;
                    color: #1e3a8a;
                }
                .cell-120B input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    text-align: center;
                    background: transparent;
                    font-size: 20px;
                    font-weight: 800;
                    color: #1e3a8a;
                    outline: none;
                }
                .cell-120B input:focus {
                    background: #f0f7ff;
                }
                .op-sign {
                    position: absolute;
                    left: -35px;
                    top: 50px;
                    font-size: 24px;
                    font-weight: 900;
                    color: #64748b;
                }
                .line-120B {
                    grid-column: 1 / span 6;
                    height: 2px;
                    background: #1e3a8a;
                    margin: 0;
                }
                .result-cell {
                    background: #fffbeb;
                    border: 1px dashed #f59e0b !important;
                }
                .division-grid {
                    display: grid;
                    grid-template-columns: 140px 2px 100px;
                    grid-template-rows: 40px 2px 120px;
                    gap: 0;
                    margin: 20px auto;
                    background: white;
                    position: relative;
                }
                .div-dividend { grid-column: 1; grid-row: 1; display: flex; justify-content: flex-end; align-items: center; gap: 2px; padding-right: 10px; }
                .div-line-v { grid-column: 2; grid-row: 1 / span 3; background: #1e3a8a; }
                .div-divisor { grid-column: 3; grid-row: 1; display: flex; align-items: center; padding-left: 10px; gap: 2px; }
                .div-line-h { grid-column: 3; grid-row: 2; background: #1e3a8a; }
                .div-quotient { grid-column: 3; grid-row: 3; display: flex; align-items: flex-start; padding-left: 10px; padding-top: 5px; gap: 2px; flex-wrap: wrap; }
                .div-steps { grid-column: 1; grid-row: 3; display: flex; flex-direction: column; align-items: flex-end; padding-right: 10px; padding-top: 5px; gap: 5px; }
                
                .div-cell {
                    width: 20px;
                    height: 30px;
                    border: 1px solid #e2e8f0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 800;
                }
                .div-cell input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    text-align: center;
                    background: transparent;
                    font-size: 16px;
                    font-weight: 800;
                    outline: none;
                    padding: 0;
                }
                .hidden { display: none !important; }
            </style>

            <script>
                // Data Generation
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
                        {a: 0.19, b: 0.09, r: 0.1}, {a: 10, b: 0.1, r: 9.9}, {a: 20, b: 4.4, r: 15.6}, {a: 9, b: 1.11, r: 7.89}
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
                    document.querySelectorAll('.tab-btn-120B').forEach(btn => {
                        btn.classList.remove('active', 'bg-blue-600', 'text-white', 'bg-indigo-600', 'bg-purple-600', 'bg-amber-600');
                        btn.classList.add('bg-gray-100', 'text-gray-600');
                    });
                    const activeBtn = event.target;
                    activeBtn.classList.add('active', 'text-white');
                    activeBtn.classList.remove('bg-gray-100', 'text-gray-600');
                    
                    if(type === 'add') activeBtn.classList.add('bg-blue-600');
                    if(type === 'sub') activeBtn.classList.add('bg-indigo-600');
                    if(type === 'mul') activeBtn.classList.add('bg-purple-600');
                    if(type === 'div') activeBtn.classList.add('bg-amber-600');

                    document.querySelectorAll('.operation-section').forEach(s => s.classList.add('hidden'));
                    document.getElementById('section-' + type).classList.remove('hidden');
                };

                function renderGrids120B() {
                    const types = ['add', 'sub', 'mul', 'div'];
                    const signs = {add: '+', sub: '-', mul: '×', div: ':'};

                    types.forEach(type => {
                        const section = document.getElementById('section-' + type);
                        problems120B[type].forEach((p, i) => {
                            const card = document.createElement('div');
                            card.className = 'bg-white p-6 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden';
                            
                            let gridHtml = '';
                            if (type !== 'div') {
                                gridHtml = \`
                                    <div class="grid-120B mx-auto my-4">
                                        <div class="op-sign">\${signs[type]}</div>
                                        \${Array(6).fill().map((_, c) => \`<div class="cell-120B"><input type="text" maxlength="1" id="grid-120B-\${type}-\${i}-r1-c\${c}"></div>\`).join('')}
                                        \${Array(6).fill().map((_, c) => \`<div class="cell-120B"><input type="text" maxlength="1" id="grid-120B-\${type}-\${i}-r2-c\${c}"></div>\`).join('')}
                                        <div class="line-120B"></div>
                                        \${Array(6).fill().map((_, c) => \`<div class="cell-120B result-cell"><input type="text" maxlength="1" id="grid-120B-\${type}-\${i}-res-c\${c}"></div>\`).join('')}
                                    </div>
                                \`;
                            } else {
                                gridHtml = \`
                                    <div class="division-grid">
                                        <!-- Số bị chia -->
                                        <div class="div-dividend">
                                            \${Array(6).fill().map((_, c) => \`<div class="div-cell"><input type="text" maxlength="1"></div>\`).join('')}
                                        </div>
                                        <!-- Vạch đứng -->
                                        <div class="div-line-v"></div>
                                        <!-- Số chia -->
                                        <div class="div-divisor">
                                            \${Array(4).fill().map((_, c) => \`<div class="div-cell"><input type="text" maxlength="1"></div>\`).join('')}
                                        </div>
                                        <!-- Vạch ngang -->
                                        <div class="div-line-h"></div>
                                        <!-- Thương -->
                                        <div class="div-quotient">
                                            \${Array(4).fill().map((_, c) => \`<div class="div-cell"><input type="text" maxlength="1"></div>\`).join('')}
                                        </div>
                                        <!-- Các bước dư -->
                                        <div class="div-steps">
                                            <div class="flex gap-[2px]">\${Array(4).fill().map((_, c) => \`<div class="div-cell border-none opacity-20"><input type="text" maxlength="1"></div>\`).join('')}</div>
                                            <div class="flex gap-[2px]">\${Array(4).fill().map((_, c) => \`<div class="div-cell border-none opacity-20"><input type="text" maxlength="1"></div>\`).join('')}</div>
                                        </div>
                                    </div>
                                \`;
                            }

                            card.innerHTML = \`
                                <div class="flex flex-col md:flex-row items-center gap-6">
                                    <div class="w-full md:w-1/3">
                                        <p class="text-2xl font-black text-indigo-700">\${i+1}. \${p.a} \${signs[type]} \${p.b} = ?</p>
                                    </div>
                                    <div class="w-full md:w-2/3">
                                        \${gridHtml}
                                        <div class="flex items-center gap-4 mt-4 justify-center">
                                            <span class="text-lg font-bold">Đáp số:</span>
                                            <input type="text" id="ans-120B-\${type}-\${i}" class="w-32 p-2 border-2 border-indigo-200 rounded-xl font-black text-xl text-center text-indigo-600" placeholder="?">
                                            <button onclick="checkOne120B('\${type}', \${i})" class="w-10 h-10 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-lg active:scale-95"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg></button>
                                        </div>
                                    </div>
                                </div>
                            \`;
                            section.appendChild(card);
                        });
                    });
                }

                window.checkOne120B = function(type, i) {
                    const input = document.getElementById(\`ans-120B-\${type}-\${i}\`);
                    const val = parseFloat(input.value.replace(',', '.'));
                    const correct = problems120B[type][i].r;
                    
                    if (Math.abs(val - correct) < 0.001) {
                        input.classList.remove('border-red-400', 'bg-red-50');
                        input.classList.add('border-emerald-400', 'bg-emerald-50');
                        if(window.Quiz) window.Quiz.playSFX('correct');
                    } else {
                        input.classList.remove('border-emerald-400', 'bg-emerald-50');
                        input.classList.add('border-red-400', 'bg-red-50');
                        if(window.Quiz) window.Quiz.playSFX('wrong');
                    }
                };

                window.submit120B = function() {
                    let correctCount = 0;
                    const types = ['add', 'sub', 'mul', 'div'];
                    types.forEach(type => {
                        problems120B[type].forEach((p, i) => {
                            const val = parseFloat(document.getElementById(\`ans-120B-\${type}-\${i}\`).value.replace(',', '.'));
                            if (Math.abs(val - p.r) < 0.001) correctCount++;
                        });
                    });

                    const total = 64;
                    const score = (correctCount / total) * 10;
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Kết quả: " + correctCount + "/" + total, Math.round(score), "btn-submit-120B");
                    }
                    alert("Bạn đã đúng " + correctCount + "/" + total + " câu. Điểm: " + Math.round(score*10)/10);
                };

                // Initialize
                setTimeout(renderGrids120B, 100);
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Khi cộng hai số thập phân, ta phải đặt các chữ số ở cùng một hàng ............... với nhau.", "options": ["ngang", "thẳng cột", "chéo", "tùy ý"], "answer": 1, "level": 1 },
        { "question": "Kết quả của 0,5 + 0,5 là:", "options": ["0,1", "1,0", "0,10", "10"], "answer": 1, "level": 1 }
    ]
};
