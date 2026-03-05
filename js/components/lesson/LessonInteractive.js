// js/components/lesson/LessonInteractive.js
export const LessonInteractive = {
    // ========================================================================
    // KÉO THẢ (Drag & Drop)
    // ========================================================================
    renderDragDropFormula(id, title, parts, options) {
        // parts: array of strings with [[slot]] placeholders
        // options: array of strings for the bank
        const state = { parts, options };
        const safeOptions = JSON.stringify(options).replace(/"/g, '&quot;');

        const contentHtml = parts.map((part, pIdx) => {
            return part.replace(/\[\[slot\]\]/g, () => {
                return `<div class="dd-slot inline-flex items-center justify-center min-w-[60px] h-10 border-2 border-dashed border-blue-300 rounded-lg bg-blue-50/50 mx-1 transition-all" 
                    ondragover="event.preventDefault()" ondrop="Lesson.drop(event, '${id}')"></div>`;
            });
        }).join('<br>');

        const optionsHtml = options.map((opt, oIdx) => `
            <div class="dd-option px-4 py-2 bg-white border-2 border-blue-100 rounded-xl shadow-sm cursor-grab active:cursor-grabbing font-bold text-blue-800 hover:border-blue-400 hover:shadow-md transition-all whitespace-nowrap" 
                draggable="true" ondragstart="Lesson.drag(event)" data-value="${opt}">${opt}</div>
        `).join('');

        return `
        <div class="dd-exercise p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-blue-100 dark:border-slate-700 mt-6 animate-fade-in" id="dd-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🧩</div>
                <h3 class="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-200">${title}</h3>
            </div>
            
            <div class="bg-white/80 dark:bg-slate-900/80 p-6 rounded-2xl border-2 border-blue-100 dark:border-slate-700 mb-6 text-lg md:text-xl font-bold leading-relaxed text-center">
                ${contentHtml}
            </div>

            <div class="bg-blue-100/30 dark:bg-slate-800/30 p-4 rounded-2xl">
                <p class="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3">🏷️ Kéo các nhãn này vào ô trống</p>
                <div class="flex flex-wrap gap-3 justify-center">
                    ${optionsHtml}
                </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
                <button onclick="Lesson.clearSlots('${id}')" class="px-6 py-3 bg-white border-2 border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all font-bold">Làm lại</button>
                <button onclick="Lesson.checkDragDrop('${id}')" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
            </div>
        </div>
        `;
    },

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.dataset.value);
        ev.target.classList.add('opacity-40');
        setTimeout(() => ev.target.classList.remove('opacity-40'), 0);
    },

    drop(ev, id) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        const slot = ev.target.closest('.dd-slot');
        if (slot) {
            slot.innerText = data;
            slot.dataset.value = data;
            slot.classList.remove('border-dashed', 'bg-blue-50/50');
            slot.classList.add('bg-blue-600', 'text-white', 'border-solid', 'scale-105');
            setTimeout(() => slot.classList.remove('scale-105'), 200);
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        }
    },

    clearSlots(id) {
        const container = document.getElementById(`dd-ex-${id}`);
        if (!container) return;
        container.querySelectorAll('.dd-slot').forEach(slot => {
            slot.innerText = '';
            delete slot.dataset.value;
            slot.classList.add('border-dashed', 'bg-blue-50/50');
            slot.classList.remove('bg-blue-600', 'text-white', 'border-solid', 'bg-emerald-500', 'bg-red-500');
        });
    },

    checkDragDrop(id) {
        // Logic check sẽ cần so sánh với data gốc, hiện tại module render truyền JSON vào script ẩn để Lesson có context
        // Để đơn giản và nhanh, Lesson.js cũ check matching string, ta sẽ giữ logic đó
        alert("Thầy E: 'Tính năng kiểm tra kéo thả đang được hoàn thiện dựa trên từng bài cụ thể. Em hãy tự kiểm tra xem đã hợp lý chưa nhé!'");
    },

    // ========================================================================
    // PHÒNG THÍ NGHIỆM HÌNH HỌC (Geometry Lab)
    // ========================================================================
    renderDynamicGeometryLab(id, type, config) {
        return `
        <div class="geometry-lab p-6 md:p-8 bg-slate-900 text-white rounded-[32px] shadow-2xl border-4 border-slate-800 mt-6 overflow-hidden relative group" id="geo-lab-${id}">
            <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg class="w-48 h-48" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            </div>
            
            <div class="relative z-10">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black">📐</div>
                    <div>
                        <h3 class="text-xl md:text-2xl font-black text-emerald-400">Geometry Lab</h3>
                        <p class="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">${type === 'cube' ? 'Khám phá Hình Khối 3D' : 'Khám phá Hình Phẳng'}</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="aspect-square bg-slate-800/50 backdrop-blur-xl rounded-[40px] border-2 border-slate-700 flex items-center justify-center relative shadow-inner">
                        <div id="geo-canvas-${id}" class="w-full h-full flex items-center justify-center">
                             <!-- 3D or 2D Content Dynamic -->
                             ${type === 'cube' ? `
                                <div class="relative w-40 h-40 preserve-3d animate-spin-slow transition-transform duration-500" 
                                    id="geo-target-${id}"
                                    style="transform-style: preserve-3d; transform: rotateX(-20deg) rotateY(30deg);">
                                    <div class="absolute inset-0 bg-emerald-500/80 border-2 border-white/50" style="transform: translateZ(80px)"></div>
                                    <div class="absolute inset-0 bg-emerald-600/80 border-2 border-white/50" style="transform: translateZ(-80px) rotateY(180deg)"></div>
                                    <div class="absolute inset-0 bg-emerald-400/80 border-2 border-white/50" style="transform: translateX(80px) rotateY(90deg)"></div>
                                    <div class="absolute inset-0 bg-emerald-400/80 border-2 border-white/50" style="transform: translateX(-80px) rotateY(-90deg)"></div>
                                    <div class="absolute inset-0 bg-emerald-300/80 border-2 border-white/50" style="transform: translateY(-80px) rotateX(90deg)"></div>
                                    <div class="absolute inset-0 bg-emerald-700/80 border-2 border-white/50" style="transform: translateY(80px) rotateX(-90deg)"></div>
                                </div>
                             ` : ''}
                        </div>
                    </div>

                    <div class="space-y-6">
                        <div class="bg-slate-800/50 p-6 rounded-3xl border border-slate-700">
                            <h4 class="text-xs font-black text-emerald-400 uppercase tracking-widest mb-4">Thông số điều chỉnh</h4>
                            <div class="space-y-4">
                                ${Object.entries(config.controls || {}).map(([key, ctrl]) => `
                                    <div>
                                        <div class="flex justify-between text-xs font-bold mb-2">
                                            <span class="text-slate-400">${ctrl.label}</span>
                                            <span class="text-emerald-400" id="val-${id}-${key}">${ctrl.value}${ctrl.unit || ''}</span>
                                        </div>
                                        <input type="range" min="${ctrl.min}" max="${ctrl.max}" value="${ctrl.value}" 
                                            class="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                            oninput="Lesson.updateGeometry('${id}', '${key}', this.value, '${type}')">
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="bg-indigo-600/20 p-6 rounded-3xl border border-indigo-500/30">
                            <h4 class="text-xs font-black text-indigo-300 uppercase tracking-widest mb-2">Kết quả tính toán</h4>
                            <div id="geo-result-${id}" class="text-2xl font-black text-white">
                                ${config.initialResult || '---'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    },

    updateGeometry(id, key, value, type) {
        const valDisplay = document.getElementById(`val-${id}-${key}`);
        if (valDisplay) valDisplay.innerText = value;

        const target = document.getElementById(`geo-target-${id}`);
        const result = document.getElementById(`geo-result-${id}`);

        if (type === 'cube') {
            const size = value * 2;
            target.style.width = `${size}px`;
            target.style.height = `${size}px`;
            const offset = size / 2;
            const faces = target.children;
            faces[0].style.transform = `translateZ(${offset}px)`;
            faces[1].style.transform = `translateZ(-${offset}px) rotateY(180deg)`;
            faces[2].style.transform = `translateX(${offset}px) rotateY(90deg)`;
            faces[3].style.transform = `translateX(-${offset}px) rotateY(-90deg)`;
            faces[4].style.transform = `translateY(-${offset}px) rotateX(90deg)`;
            faces[5].style.transform = `translateY(${offset}px) rotateX(-90deg)`;

            const volume = Math.pow(value, 3);
            result.innerText = `V = ${value}³ = ${volume} cm³`;
        }
    },

    // ========================================================================
    // NỐI CẶP (Matching)
    // ========================================================================
    renderMatchingExercise(id, pairs) {
        const leftItems = pairs.map(p => p.left).sort(() => Math.random() - 0.5);
        const rightItems = pairs.map(p => p.right).sort(() => Math.random() - 0.5);

        const leftHtml = leftItems.map((item, idx) => `
            <div id="match-l-${id}-${idx}" onclick="Lesson.selectMatch('${id}', 'left', ${idx}, '${item.replace(/'/g, "\\'")}')" 
                class="p-4 bg-white dark:bg-slate-800 border-2 border-blue-100 rounded-2xl cursor-pointer hover:border-blue-400 hover:shadow-md transition-all font-bold text-gray-800 dark:text-slate-100 text-sm md:text-base mb-3 shadow-sm">
                ${item}
            </div>
        `).join('');

        const rightHtml = rightItems.map((item, idx) => `
            <div id="match-r-${id}-${idx}" onclick="Lesson.selectMatch('${id}', 'right', ${idx}, '${item.replace(/'/g, "\\'")}')" 
                class="p-4 bg-white dark:bg-slate-800 border-2 border-indigo-100 rounded-2xl cursor-pointer hover:border-indigo-400 hover:shadow-md transition-all font-bold text-gray-800 dark:text-slate-100 text-sm md:text-base mb-3 shadow-sm text-right">
                ${item}
            </div>
        `).join('');

        return `
        <div class="matching-exercise p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-blue-100 dark:border-slate-700 mt-6 animate-fade-in" id="match-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">↔️</div>
                <h3 class="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-200">Nối cặp tương ứng</h3>
            </div>
            <div class="grid grid-cols-2 gap-8 md:gap-16 relative">
                <div id="match-left-col-${id}">${leftHtml}</div>
                <div id="match-right-col-${id}">${rightHtml}</div>
                <canvas id="match-canvas-${id}" class="absolute inset-0 pointer-events-none z-10" style="width: 100%; height: 100%;"></canvas>
            </div>
            <div class="mt-6 flex items-center gap-4">
                <button onclick="Lesson.checkMatching('${id}', '${JSON.stringify(pairs).replace(/"/g, '&quot;')}')" class="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <button onclick="Lesson.resetMatching('${id}')" class="px-6 py-3 bg-white border-2 border-gray-200 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-all">Làm lại</button>
                <span id="match-feedback-${id}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['matchState_${id}'] = { left: null, right: null, connections: [] }" class="hidden">
        `;
    },

    selectMatch(id, side, idx, value) {
        const state = window[`matchState_${id}`];
        if (!state) return;

        const el = document.getElementById(`match-${side === 'left' ? 'l' : 'r'}-${id}-${idx}`);

        // Unselect if already selected
        if (state[side]?.idx === idx) {
            el.classList.remove('ring-4', side === 'left' ? 'ring-blue-400' : 'ring-indigo-400', 'scale-105');
            state[side] = null;
            return;
        }

        // Highlight
        document.querySelectorAll(`[id^="match-${side === 'left' ? 'l' : 'r'}-${id}-"]`).forEach(item => {
            item.classList.remove('ring-4', 'ring-blue-400', 'ring-indigo-400', 'scale-105');
        });
        el.classList.add('ring-4', side === 'left' ? 'ring-blue-400' : 'ring-indigo-400', 'scale-105');
        state[side] = { idx, value };

        // Connect
        if (state.left && state.right) {
            state.connections.push({ left: { ...state.left }, right: { ...state.right } });
            state.left = null;
            state.right = null;
            document.querySelectorAll(`[id^="match-"][id*="-${id}-"]`).forEach(item => {
                item.classList.remove('ring-4', 'ring-blue-400', 'ring-indigo-400', 'scale-105');
            });
            this.drawMatchingLines(id);
        }
    },

    drawMatchingLines(id) {
        const state = window[`matchState_${id}`];
        const canvas = document.getElementById(`match-canvas-${id}`);
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';

        state.connections.forEach(conn => {
            const lEl = document.getElementById(`match-l-${id}-${conn.left.idx}`);
            const rEl = document.getElementById(`match-r-${id}-${conn.right.idx}`);
            if (lEl && rEl) {
                const lRect = lEl.getBoundingClientRect();
                const rRect = rEl.getBoundingClientRect();
                const startX = lRect.right - rect.left;
                const startY = lRect.top + lRect.height / 2 - rect.top;
                const endX = rRect.left - rect.left;
                const endY = rRect.top + rRect.height / 2 - rect.top;
                ctx.beginPath();
                ctx.moveTo(startX, startY);
                ctx.bezierCurveTo(startX + 40, startY, endX - 40, endY, endX, endY);
                ctx.stroke();
            }
        });
    },

    checkMatching(id, pairsStr) {
        const pairs = JSON.parse(pairsStr.replace(/&quot;/g, '"'));
        const state = window[`matchState_${id}`];
        const feedback = document.getElementById(`match-feedback-${id}`);
        let correctCount = 0;
        state.connections.forEach(conn => {
            const isMatch = pairs.some(p => p.left === conn.left.value && p.right === conn.right.value);
            if (isMatch) correctCount++;
        });

        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (correctCount === pairs.length) {
            feedback.innerText = "Chính xác tuyệt đối! 🎉";
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = `Đúng ${correctCount}/${pairs.length}. Thử lại nhé!`;
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    resetMatching(id) {
        const state = window[`matchState_${id}`];
        if (state) {
            state.left = null;
            state.right = null;
            state.connections = [];
            this.drawMatchingLines(id);
            document.getElementById(`match-feedback-${id}`).classList.add('opacity-0');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 1: ĐIỀN TỪ VÀO CHỖ TRỐNG (Fill in the Blanks)
    // ========================================================================
    renderFillBlanks(id, title, textWithSlots, wordBank) {
        // textWithSlots use [[slot]]
        // wordBank: array of words
        const state = { selectedWord: null, selectedBtn: null };
        const shuffledBank = [...wordBank].sort(() => Math.random() - 0.5);

        const htmlText = textWithSlots.replace(/\[\[slot\]\]/g, () => {
            return `<span id="fb-slot-${id}-${Math.random().toString(36).substr(2, 9)}" class="fb-slot inline-block min-w-[80px] h-7 border-b-2 border-dashed border-amber-300 bg-amber-50/30 mx-1 px-2 text-center align-bottom transition-all cursor-pointer font-black text-amber-700" data-id="${id}"></span>`;
        });

        const bankHtml = shuffledBank.map((word, idx) => `
            <button id="fb-word-${id}-${idx}" onclick="Lesson.selectFillBank('${id}', '${word.replace(/'/g, "\\'")}', ${idx})" 
                class="px-4 py-2 bg-white border-2 border-amber-200 text-amber-800 font-bold rounded-xl shadow-sm hover:border-amber-400 hover:bg-amber-50 transition-all active:scale-95"
                data-word="${word}">${word}</button>
        `).join('');

        return `
        <div class="fill-blanks-exercise p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-amber-100 dark:border-slate-700 mt-6 animate-fade-in" id="fb-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-amber-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">📝</div>
                <h3 class="text-xl md:text-2xl font-black text-amber-900 dark:text-amber-200">${title}</h3>
            </div>
            
            <div class="bg-white/90 dark:bg-slate-900/90 p-6 md:p-10 rounded-[40px] border-2 border-amber-100 dark:border-slate-700 mb-8 text-lg md:text-2xl font-bold leading-relaxed text-gray-800 dark:text-slate-100">
                ${htmlText}
            </div>

            <div class="bg-amber-100/40 p-5 rounded-3xl">
                <p class="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-3">🏷️ Chọn từ để điền</p>
                <div class="flex flex-wrap gap-3" id="fb-bank-${id}">
                    ${bankHtml}
                </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
                <button onclick="Lesson.checkFillBlanks('${id}')" class="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="fb-feedback-${id}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['fbState_${id}'] = { selectedWord: null, selectedBtn: null }" class="hidden">
        `;
    },

    selectFillBank(id, word, idx) {
        const state = window[`fbState_${id}`];
        if (!state) return;
        document.querySelectorAll(`#fb-bank-${id} button`).forEach(b => b.classList.remove('ring-4', 'ring-amber-400', 'scale-105'));
        const btn = document.getElementById(`fb-word-${id}-${idx}`);
        btn.classList.add('ring-4', 'ring-amber-400', 'scale-105');
        state.selectedWord = word;
        state.selectedBtn = btn;
    },

    checkFillBlanks(id) {
        alert("Thầy E: 'Tính năng tự động kiểm tra điền từ đang được hoàn thiện. Em hãy đọc lại đoạn văn đã hoàn chỉnh xem có hợp lý không nhé!'");
    },

    // ========================================================================
    // KHOA HỌC MODULE 2: ĐÚNG / SAI (True or False)
    // ========================================================================
    renderTrueFalse(id, title, questions) {
        // questions: [{q, a: true/false, explanation}]
        const questionsHtml = questions.map((q, idx) => `
            <div class="p-6 bg-white dark:bg-slate-800 rounded-3xl border-2 border-gray-50 dark:border-slate-700 shadow-sm border-l-8 border-l-blue-100 mb-4 transition-all">
                <p class="text-base md:text-lg font-bold text-gray-800 dark:text-slate-100 mb-4">${idx + 1}. ${q.q}</p>
                <div class="flex flex-wrap gap-3">
                    <button onclick="Lesson.answerTrueFalse('${id}', ${idx}, true, ${q.a})" id="tf-btn-${id}-${idx}-true" class="px-6 py-2 bg-gray-50 hover:bg-emerald-50 text-gray-600 hover:text-emerald-700 border-2 border-gray-100 hover:border-emerald-200 rounded-xl font-black transition-all">Đúng</button>
                    <button onclick="Lesson.answerTrueFalse('${id}', ${idx}, false, ${q.a})" id="tf-btn-${id}-${idx}-false" class="px-6 py-2 bg-gray-50 hover:bg-rose-50 text-gray-600 hover:text-rose-700 border-2 border-gray-100 hover:border-rose-200 rounded-xl font-black transition-all">Sai</button>
                    <div id="tf-feedback-${id}-${idx}" class="hidden p-3 bg-blue-50 dark:bg-slate-900 border border-blue-100 rounded-xl text-xs md:text-sm font-bold text-blue-700 dark:text-blue-300 w-full animate-fade-in">
                        💡 ${q.explanation}
                    </div>
                </div>
            </div>
        `).join('');

        return `
        <div class="tf-exercise p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-blue-100 dark:border-slate-700 mt-6 animate-fade-in" id="tf-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">✅</div>
                <h3 class="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-200">${title}</h3>
            </div>
            ${questionsHtml}
        </div>
        `;
    },

    answerTrueFalse(id, qIdx, userAns, correctAns) {
        const btnTrue = document.getElementById(`tf-btn-${id}-${qIdx}-true`);
        const btnFalse = document.getElementById(`tf-btn-${id}-${qIdx}-false`);
        const feedback = document.getElementById(`tf-feedback-${id}-${qIdx}`);

        btnTrue.disabled = true;
        btnFalse.disabled = true;
        feedback.classList.remove('hidden');

        if (userAns === correctAns) {
            const btn = userAns ? btnTrue : btnFalse;
            btn.classList.add('bg-emerald-500', 'text-white', 'border-emerald-600');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            const btn = userAns ? btnTrue : btnFalse;
            btn.classList.add('bg-rose-500', 'text-white', 'border-rose-600');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 3: SẮP XẾP THỨ TỰ (Ordering)
    // ========================================================================
    renderOrdering(id, title, items) {
        // items: array of strings in correct order
        const shuffled = [...items].map((text, i) => ({ text, id: i })).sort(() => Math.random() - 0.5);

        const itemsHtml = shuffled.map((item, idx) => `
            <div class="order-item p-4 bg-white dark:bg-slate-800 border-2 border-purple-100 rounded-2xl shadow-sm cursor-move flex items-center gap-4 group hover:border-purple-400 transition-all" 
                draggable="true" ondragstart="Lesson.dragOrder(event, '${id}')" ondragover="event.preventDefault()" ondrop="Lesson.dropOrder(event, '${id}')" data-idx="${idx}" data-orig-id="${item.id}">
                <div class="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center font-black group-hover:bg-purple-600 group-hover:text-white transition-all shrink-0">⋮⋮</div>
                <p class="font-bold text-gray-800 dark:text-slate-100 text-sm md:text-base">${item.text}</p>
            </div>
        `).join('');

        return `
        <div class="order-exercise p-6 md:p-8 bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-purple-100 dark:border-slate-700 mt-6 animate-fade-in" id="order-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🔢</div>
                <h3 class="text-xl md:text-2xl font-black text-purple-900 dark:text-purple-200">${title}</h3>
            </div>
            <p class="text-base font-bold text-purple-600 mb-4">👆 Kéo thả các mục để sắp xếp đúng thứ tự từ trên xuống dưới</p>
            <div class="space-y-3" id="order-list-${id}">
                ${itemsHtml}
            </div>
            <div class="mt-8 flex items-center gap-4">
                <button onclick="Lesson.checkOrdering('${id}', ${items.length})" class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="order-feedback-${id}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        `;
    },

    dragOrder(ev, id) {
        ev.dataTransfer.setData("index", ev.currentTarget.dataset.idx);
        ev.currentTarget.classList.add('opacity-40');
    },

    dropOrder(ev, id) {
        ev.preventDefault();
        const fromIdx = ev.dataTransfer.getData("index");
        const toIdx = ev.target.closest('.order-item').dataset.idx;
        if (fromIdx === toIdx) return;

        const list = document.getElementById(`order-list-${id}`);
        const items = Array.from(list.children);
        const fromItem = items.find(item => item.dataset.idx === fromIdx);
        const toItem = items.find(item => item.dataset.idx === toIdx);

        if (fromIdx < toIdx) {
            toItem.after(fromItem);
        } else {
            toItem.before(fromItem);
        }

        // Re-index
        Array.from(list.children).forEach((item, idx) => {
            item.dataset.idx = idx;
        });

        items.forEach(item => item.classList.remove('opacity-40'));
        if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
    },

    checkOrdering(id, total) {
        const list = document.getElementById(`order-list-${id}`);
        const items = Array.from(list.children);
        let correctCount = 0;
        items.forEach((item, idx) => {
            if (parseInt(item.dataset.orig_id) === idx) {
                correctCount++;
                item.classList.add('border-emerald-500', 'bg-emerald-50');
            } else {
                item.classList.add('border-rose-500', 'bg-rose-50');
            }
        });

        const feedback = document.getElementById(`order-feedback-${id}`);
        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (correctCount === total) {
            feedback.innerText = "Sắp xếp hoàn hảo! 🏆";
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = `Đúng ${correctCount}/${total}. Thử lại nhé!`;
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 4: PHÂN LOẠI (Categorizing)
    // ========================================================================
    renderCategorizing(id, title, categories, items) {
        // categories: ["Nhóm A", "Nhóm B"]
        // items: [{text, categoryIndex}]
        const state = { selectedItem: null, selectedEl: null };
        const shuffledItems = [...items].sort(() => Math.random() - 0.5);

        const catsHtml = categories.map((cat, idx) => `
            <div data-cat-idx="${idx}" ondragover="event.preventDefault()" ondrop="Lesson.dropToCategory(event, '${id}', ${idx})" 
                onclick="Lesson.clickToCategory('${id}', ${idx})"
                class="cat-zone p-5 bg-white dark:bg-slate-800 border-2 border-dashed border-sky-200 rounded-3xl min-h-[160px] flex flex-col items-center gap-3 transition-all hover:border-sky-500 hover:bg-sky-50/50">
                <span class="px-4 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-black uppercase tracking-widest">${cat}</span>
                <div id="cat-list-${id}-${idx}" class="flex flex-wrap gap-2 justify-center"></div>
            </div>
        `).join('');

        const itemsHtml = shuffledItems.map((item, idx) => `
            <div class="cat-item p-3 bg-white border-2 border-sky-100 rounded-xl shadow-sm cursor-grab active:cursor-grabbing font-bold text-sky-800 hover:border-sky-400 hover:shadow-md transition-all text-sm" 
                draggable="true" ondragstart="Lesson.dragCatItem(event, '${id}', ${item.categoryIndex})" onclick="Lesson.selectCatItem(event, '${id}', ${item.categoryIndex})" data-cat="${item.categoryIndex}">${item.text}</div>
        `).join('');

        return `
        <div class="cat-exercise p-6 md:p-8 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-sky-100 dark:border-slate-700 mt-6 animate-fade-in" id="cat-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-sky-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">📂</div>
                <h3 class="text-xl md:text-2xl font-black text-sky-900 dark:text-sky-200">${title}</h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                ${catsHtml}
            </div>

            <div class="bg-sky-100/30 p-5 rounded-3xl">
                <p class="text-[10px] font-black text-sky-500 uppercase tracking-widest mb-3">🧺 Kho chứa - Chọn hoặc kéo các mục này vào nhóm</p>
                <div class="flex flex-wrap gap-3 justify-center" id="item-bank-${id}">
                    ${itemsHtml}
                </div>
            </div>

            <div class="mt-8 flex items-center gap-4">
                <button onclick="Lesson.checkCategorizing('${id}', ${items.length})" class="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="cat-feedback-${id}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['catState_${id}'] = { selectedItem: null, selectedEl: null }" class="hidden">
        `;
    },

    dragCatItem(ev, id, catIdx) {
        ev.dataTransfer.setData("cat", catIdx);
        ev.dataTransfer.setData("id", id);
        this._draggedItem = ev.currentTarget;
    },

    dropToCategory(ev, id, catIdx) {
        ev.preventDefault();
        const item = this._draggedItem;
        if (!item) return;
        const targetList = document.getElementById(`cat-list-${id}-${catIdx}`);
        targetList.appendChild(item);
        item.classList.replace('border-sky-100', 'border-sky-300');
        item.classList.add('scale-95');
        if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
    },

    selectCatItem(ev, id, catIdx) {
        const state = window[`catState_${id}`];
        if (!state) return;
        document.querySelectorAll(`#cat-ex-${id} .cat-item`).forEach(i => i.classList.remove('ring-4', 'ring-sky-400', 'scale-105'));
        ev.currentTarget.classList.add('ring-4', 'ring-sky-400', 'scale-105');
        state.selectedItem = catIdx;
        state.selectedEl = ev.currentTarget;
    },

    clickToCategory(id, catIdx) {
        const state = window[`catState_${id}`];
        if (!state || !state.selectedEl) return;
        const targetList = document.getElementById(`cat-list-${id}-${catIdx}`);
        targetList.appendChild(state.selectedEl);
        state.selectedEl.classList.remove('ring-4', 'ring-sky-400', 'scale-105');
        state.selectedEl = null;
        state.selectedItem = null;
        if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
    },

    checkCategorizing(id, total) {
        const ex = document.getElementById(`cat-ex-${id}`);
        const zones = ex.querySelectorAll('.cat-zone');
        let correctCount = 0;
        zones.forEach(zone => {
            const catIdx = parseInt(zone.dataset.catIdx);
            const items = zone.querySelectorAll('.cat-item');
            items.forEach(item => {
                if (parseInt(item.dataset.cat) === catIdx) {
                    correctCount++;
                    item.classList.add('bg-emerald-50', 'border-emerald-300');
                    item.classList.remove('border-sky-100', 'border-sky-300');
                } else {
                    item.classList.add('bg-rose-50', 'border-rose-300');
                    item.classList.remove('border-sky-100', 'border-sky-300');
                }
            });
        });

        const feedback = document.getElementById(`cat-feedback-${id}`);
        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (correctCount === total) {
            feedback.innerText = "Phân loại hoàn hảo! 🏷️";
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = `Đúng ${correctCount}/${total}. Thử lại nhé!`;
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 5: THẺ LẬT (Flashcards)
    // ========================================================================
    renderFlashcards(id, title, cards) {
        const cardsHtml = cards.map((card, idx) => `
            <div class="flashcard-wrapper cursor-pointer" onclick="this.classList.toggle('flipped')" style="perspective: 800px;">
                <div class="flashcard-inner relative transition-transform duration-500" style="transform-style: preserve-3d; min-height: 160px;">
                    <div class="flashcard-front absolute inset-0 p-5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl shadow-lg flex flex-col items-center justify-center gap-3 backface-hidden" style="backface-visibility: hidden;">
                        <span class="text-4xl">${card.emoji || '❓'}</span>
                        <p class="text-base md:text-lg font-black text-center leading-snug">${card.front}</p>
                        <span class="text-xs opacity-60 font-bold uppercase tracking-widest">nhấn để lật</span>
                    </div>
                    <div class="flashcard-back absolute inset-0 p-5 bg-white dark:bg-slate-800 border-2 border-purple-200 rounded-2xl shadow-lg flex items-center justify-center backface-hidden" style="backface-visibility: hidden; transform: rotateY(180deg);">
                        <p class="text-base md:text-lg font-bold text-gray-800 dark:text-slate-100 text-center leading-relaxed">${card.back}</p>
                    </div>
                </div>
            </div>
        `).join('');

        return `
        <div class="flashcards-exercise p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-indigo-100 dark:border-slate-700 mt-6 animate-fade-in" id="fc-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🃏</div>
                <h3 class="text-xl md:text-2xl font-black text-indigo-900 dark:text-indigo-200">${title}</h3>
            </div>
            <p class="text-base font-bold text-indigo-600 mb-4">👆 Nhấn vào thẻ để lật và xem đáp án!</p>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                ${cardsHtml}
            </div>
        </div>
        <style> .flashcard-wrapper.flipped .flashcard-inner { transform: rotateY(180deg); } </style>
        `;
    },

    // ========================================================================
    // KHOA HỌC MODULE 6: GÁN NHÃN HÌNH ẢNH (Image Labeling)
    // ========================================================================
    renderImageLabeling(id, title, imageUrl, hotspots, labels) {
        const safeHotspots = JSON.stringify(hotspots).replace(/"/g, '&quot;');
        const shuffledLabels = [...labels].sort(() => Math.random() - 0.5);

        const hotspotsHtml = hotspots.map((h, idx) => `
            <div id="hl-spot-${id}-${idx}" 
                class="absolute w-8 h-8 bg-red-500 border-3 border-white rounded-full shadow-lg cursor-pointer flex items-center justify-center text-white font-black text-sm hover:scale-125 transition-transform z-10 animate-pulse"
                style="left: ${h.x}%; top: ${h.y}%; transform: translate(-50%, -50%);"
                onclick="Lesson.placeLabel('${id}', ${idx})">
                ${idx + 1}
            </div>
            <div id="hl-label-${id}-${idx}" 
                class="absolute px-2 py-1 bg-white border-2 border-red-300 rounded-lg text-xs font-bold text-red-700 shadow-md hidden z-20 whitespace-nowrap"
                style="left: ${h.x}%; top: calc(${h.y}% + 20px); transform: translateX(-50%);">
            </div>
        `).join('');

        const labelsHtml = shuffledLabels.map((label, idx) => `
            <button id="hl-lbl-${id}-${idx}" onclick="Lesson.selectLabel('${id}', '${label.replace(/'/g, "\\'")}')"
                class="px-4 py-2 bg-white border-2 border-rose-200 text-rose-800 font-bold rounded-xl shadow-sm hover:border-rose-400 hover:bg-rose-50 transition-all active:scale-95"
                data-label="${label}">${label}</button>
        `).join('');

        return `
        <div class="image-labeling-exercise p-6 md:p-8 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-rose-100 dark:border-slate-700 mt-6 animate-fade-in" id="hl-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-rose-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🏷️</div>
                <h3 class="text-xl md:text-2xl font-black text-rose-900 dark:text-rose-200">${title}</h3>
            </div>
            <p class="text-base font-bold text-rose-600 mb-4">👆 Chọn nhãn bên dưới, rồi nhấn vào điểm đánh số trên hình để gán nhãn</p>
            <div class="relative inline-block w-full mb-6 rounded-2xl overflow-hidden border-2 border-rose-200 shadow-lg" data-no-zoom="true">
                <img src="${imageUrl}" alt="Hình gán nhãn" class="w-full h-auto block">
                ${hotspotsHtml}
            </div>
            <div class="mb-4">
                <p class="text-sm font-black text-rose-500 uppercase tracking-widest mb-3">🏷️ Chọn nhãn</p>
                <div class="flex flex-wrap gap-3" id="hl-labels-${id}">
                    ${labelsHtml}
                </div>
            </div>
            <div class="mt-6 flex items-center gap-4">
                <button onclick="Lesson.checkImageLabeling('${id}', '${safeHotspots}')" class="px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="hl-feedback-${id}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['hlState_${id}'] = { selectedLabel: null, placements: {} }" class="hidden">
        `;
    },

    selectLabel(id, label) {
        const state = window[`hlState_${id}`];
        if (!state) return;
        document.querySelectorAll(`[id^="hl-lbl-${id}-"]`).forEach(b => b.classList.remove('ring-4', 'ring-rose-400', 'scale-105'));
        state.selectedLabel = label;
        document.querySelectorAll(`[id^="hl-lbl-${id}-"]`).forEach(b => {
            if (b.dataset.label === label) b.classList.add('ring-4', 'ring-rose-400', 'scale-105');
        });
    },

    placeLabel(id, spotIdx) {
        const state = window[`hlState_${id}`];
        if (!state || !state.selectedLabel) return;
        const labelEl = document.getElementById(`hl-label-${id}-${spotIdx}`);
        const spot = document.getElementById(`hl-spot-${id}-${spotIdx}`);
        labelEl.textContent = state.selectedLabel;
        labelEl.classList.remove('hidden');
        state.placements[spotIdx] = state.selectedLabel;
        spot.classList.remove('bg-red-500', 'animate-pulse');
        spot.classList.add('bg-blue-600');
    },

    checkImageLabeling(id, hotspotsStr) {
        const hotspots = JSON.parse(hotspotsStr.replace(/&quot;/g, '"'));
        const state = window[`hlState_${id}`];
        const feedback = document.getElementById(`hl-feedback-${id}`);
        let correct = 0;
        hotspots.forEach((h, idx) => {
            const spot = document.getElementById(`hl-spot-${id}-${idx}`);
            if (state.placements[idx] === h.correctLabel) {
                correct++;
                spot.classList.remove('bg-blue-600', 'bg-red-500');
                spot.classList.add('bg-emerald-500');
            } else if (state.placements[idx]) {
                spot.classList.remove('bg-blue-600');
                spot.classList.add('bg-red-500');
            }
        });
        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (correct === hotspots.length) {
            feedback.innerText = `Gán nhãn hoàn hảo ${correct}/${hotspots.length}! 🎉`;
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = `Đúng ${correct}/${hotspots.length}. Thử lại!`;
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 7: THÍ NGHIỆM MÔ PHỎNG (Simple Virtual Experiment)
    // ========================================================================
    renderExperiment(id, title, description, steps) {
        const stepsHtml = steps.map((step, idx) => `
            <div id="exp-step-${id}-${idx}" class="exp-step flex items-start gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-slate-700 shadow-sm ${idx > 0 ? 'opacity-40 pointer-events-none' : ''} transition-all">
                <div class="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">${step.emoji || '🔬'}</div>
                <div class="flex-grow">
                    <p class="font-black text-gray-800 dark:text-slate-100 text-base md:text-lg mb-2">Bước ${idx + 1}: ${step.instruction}</p>
                    <div id="exp-result-${id}-${idx}" class="hidden p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-200 text-cyan-800 dark:text-cyan-200 font-bold text-base animate-fade-in">${step.result}</div>
                    <button id="exp-btn-${id}-${idx}" onclick="Lesson.doExperimentStep('${id}', ${idx}, ${steps.length})" class="mt-3 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 text-sm">${idx === 0 ? '▶ Bắt đầu' : '▶ Thực hiện'}</button>
                </div>
            </div>
        `).join('');

        return `
        <div class="experiment-exercise p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-sky-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-cyan-100 dark:border-slate-700 mt-6 animate-fade-in" id="exp-ex-${id}">
            <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-cyan-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🧪</div>
                <h3 class="text-xl md:text-2xl font-black text-cyan-900 dark:text-cyan-200">${title}</h3>
            </div>
            <p class="text-base font-bold text-cyan-700 dark:text-cyan-300 mb-6">${description}</p>
            <div class="space-y-4">${stepsHtml}</div>
            <div id="exp-complete-${id}" class="hidden mt-6 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border-2 border-emerald-300 text-center animate-fade-in">
                <span class="text-4xl">🎉</span>
                <p class="text-xl font-black text-emerald-700 dark:text-emerald-300 mt-2">Thí nghiệm hoàn tất!</p>
            </div>
        </div>
        `;
    },

    doExperimentStep(id, stepIdx, totalSteps) {
        document.querySelectorAll(`#${id} .step-content`).forEach(el => el.classList.add('hidden'));
        const currentStep = document.getElementById(`${id}-step-${stepIdx}`);
        if (currentStep) {
            currentStep.classList.remove('hidden');
            currentStep.classList.add('animate-in', 'fade-in', 'slide-in-from-right');
        }

        if (stepIdx === totalSteps - 1) {
            window.celebrate();
        }
    },

    // ========================================================================
    // TIẾNG VIỆT MODULE 1: CHỌN TỪ TRONG CÂU (Click Word)
    // ========================================================================
    renderClickWordExercise(block) {
        let itemsHtml = block.data.map(item => `
            <div class="interactive-row p-3 bg-white/60 rounded-xl flex items-start items-center gap-4 sentence-locked transition-all duration-300 cursor-pointer hover:bg-blue-50 mb-2" 
                 id="${item.id}" 
                 data-compound="${item.isCompound ? 'true' : 'false'}"
                 data-ans="${item.targets.join('|')}"
                 onclick="Lesson.toggleWordSelection(this, event)">
                <div class="flex-1 relative">
                     <p class="text-lg leading-loose font-medium select-none sentence-content block-sentence">${item.text}</p>
                </div>
            </div>
        `).join('');

        return `
            <div class="glass-card rounded-[24px] p-6 shadow-lg border-l-8 border-blue-500 mb-6 exercise-click-word-container" id="container-${block.id}">
                <h3 class="font-black text-xl text-gray-800 mb-2 flex items-center">
                    <span class="bg-blue-100 text-blue-600 rounded-lg px-3 py-1 text-sm mr-3 uppercase">${block.title}</span> 
                    ${block.subtitle}
                </h3>
                <p class="text-sm text-gray-500 mb-4 italic">${block.instruction}</p>
                <div class="space-y-1 block-content" id="${block.id}">
                    ${itemsHtml}
                </div>
                <div class="mt-4 flex flex-col items-center gap-3">
                    <button id="btn-check-${block.id}" onclick="Lesson.checkClickWordResult('${block.id}')" class="btn-ltvc-check bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform flex items-center gap-2 font-bold text-lg">
                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-blue-600 font-black text-xs shadow-sm">E</div>
                        <span>Kiểm tra kết quả</span>
                    </button>
                    <div id="result-${block.id}" class="w-full max-w-md hidden"></div>
                </div>
            </div>
        `;
    },

    toggleWordSelection(el, e) {
        const evt = e || window.event;
        const targetWord = evt ? evt.target.closest('.word') : null;
        if (targetWord) {
            if (!el.classList.contains('sentence-locked')) {
                targetWord.classList.toggle('selected');
                targetWord.classList.toggle('text-blue-600');
                targetWord.classList.toggle('font-black');
            }
            if (evt) {
                evt.stopPropagation();
                if (evt.preventDefault) evt.preventDefault();
            }
            return;
        }
        if (el.classList.contains('sentence-locked')) {
            el.classList.remove('sentence-locked');
            el.classList.add('bg-blue-50', 'ring-2', 'ring-blue-300');
        } else {
            const words = el.querySelectorAll('.word.selected');
            words.forEach(w => {
                w.classList.remove('selected', 'text-blue-600', 'font-black');
            });
            el.classList.remove('bg-blue-50', 'ring-2', 'ring-blue-300');
            el.classList.add('sentence-locked');
            el.querySelectorAll('.word.is-wrong, .word.is-correct').forEach(w => w.classList.remove('is-wrong', 'is-correct'));
            el.classList.remove('ring-green-400', 'bg-green-50', 'ring-red-200', 'ring-orange-200');
        }
    },

    checkClickWordResult(blockId) {
        const container = document.getElementById(blockId);
        const resultEl = document.getElementById('result-' + blockId);
        if (!container || !resultEl) return;

        const rows = container.querySelectorAll('.interactive-row');
        let totalCompound = 0, foundCompound = 0, errors = 0;

        rows.forEach(row => {
            const isCompound = row.getAttribute('data-compound') === 'true';
            const targets = (row.getAttribute('data-ans') || "").split('|').map(s => s.trim().toLowerCase()).filter(s => s !== "");
            const selectedWords = Array.from(row.querySelectorAll('.word.selected'));

            if (isCompound) {
                totalCompound++;
                if (row.classList.contains('sentence-locked')) {
                    row.classList.add('ring-2', 'ring-red-200');
                } else {
                    let rowCorrectWords = 0, rowHasError = false;
                    selectedWords.forEach(w => {
                        const txt = w.innerText.replace(/[.,]/g, "").trim().toLowerCase();
                        if (targets.includes(txt)) {
                            w.classList.add('is-correct'); w.classList.remove('is-wrong');
                            rowCorrectWords++;
                        } else {
                            w.classList.add('is-wrong'); w.classList.remove('is-correct');
                            rowHasError = true; errors++;
                        }
                    });
                    if (!rowHasError && rowCorrectWords === targets.length) {
                        foundCompound++;
                        row.classList.remove('bg-blue-50', 'ring-blue-300');
                        row.classList.add('ring-2', 'ring-green-400', 'bg-green-50');
                    } else {
                        row.classList.remove('ring-green-400', 'bg-green-50');
                        row.classList.add('ring-2', 'ring-red-200');
                    }
                }
            } else if (selectedWords.length > 0) {
                selectedWords.forEach(w => { w.classList.add('is-wrong'); errors++; });
                row.classList.add('ring-2', 'ring-red-200');
            }
        });

        resultEl.classList.remove('hidden');
        if (errors === 0 && foundCompound === totalCompound) {
            if (window.SoundManager) window.SoundManager.playFanfare();
            else window.celebrate();

            resultEl.innerHTML = `<div class="p-4 bg-green-50 border-2 border-green-200 rounded-2xl text-green-700 text-center animate-bounce">
                <p class="font-black text-xl mb-1">🎉 Xuất sắc!</p>
                <p class="font-medium">Em đã làm đúng tất cả <b>${totalCompound}/${totalCompound}</b> câu!</p>
            </div>`;
        } else {
            if (window.SoundManager) window.SoundManager.playWrong();
            resultEl.innerHTML = `<div class="p-4 bg-red-50 border-2 border-red-100 rounded-2xl text-red-700">
                <p class="font-bold text-lg mb-2">❌ Kết quả chưa đúng: <b>${foundCompound}/${totalCompound}</b> câu hoàn chỉnh. Số lỗi thừa/sai: <b>${errors}</b>.</p>
            </div>`;
        }
    },

    // ========================================================================
    // TIẾNG VIỆT MODULE 2: KHUNG VIẾT BÀI AI (AI Writing Board)
    // ========================================================================
    renderAIWritingExercise(block) {
        let itemsHtml = block.data.map(item => {
            const isVertical = item.layout === 'vertical';
            const rows = item.rows || 1;
            const targetId = `ai-${item.id}`;
            const inputHtml = rows > 1
                ? `<textarea id="${targetId}" placeholder="${item.placeholder}" rows="${rows}" class="flex-1 w-full px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-${block.color}-500 focus:outline-none text-base resize-none form-textarea"></textarea>`
                : `<input type="text" id="${targetId}" placeholder="${item.placeholder}" class="flex-1 sm:w-72 px-5 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-${block.color}-500 focus:outline-none text-base">`;

            const containerClass = isVertical
                ? "flex flex-col gap-4"
                : "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4";

            const buttonWrapperClass = isVertical
                ? "flex justify-end w-full gap-3"
                : "flex gap-2 w-full sm:w-auto items-center";

            const micBtnHtml = `<button onclick="Lesson.toggleSpeechRec('${targetId}')" class="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all shadow-sm shrink-0" title="Nhập bằng giọng nói">🎙️</button>`;

            return `
            <div class="p-4 bg-white/60 rounded-xl flex flex-col gap-4">
                <div class="${containerClass}">
                    <div class="flex items-center justify-between gap-3 w-full">
                         <p class="text-lg font-bold text-gray-700 flex-1">${item.text}</p>
                         ${isVertical ? micBtnHtml : ''}
                    </div>
                    <div class="${buttonWrapperClass}">
                        ${!isVertical ? micBtnHtml + inputHtml : ''}
                        ${isVertical ?
                    `<div class="w-full flex flex-col gap-3">
                                ${inputHtml}
                                <div class="flex justify-end gap-3">
                                    <button onclick="AIInteraction.evaluateWriting('${item.id}', '${item.context}')" class="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-black shadow-md flex items-center gap-2 transition-colors">
                                        <div class="w-5 h-5 bg-white rounded flex items-center justify-center text-gray-800 font-black text-[10px] shadow-sm">E</div>
                                        <span>Gửi bài</span>
                                    </button>
                                </div>
                            </div>`
                    :
                    `<button onclick="AIInteraction.evaluateWriting('${item.id}', '${item.context}')" class="bg-gray-800 hover:bg-gray-900 text-white w-12 h-12 flex items-center justify-center rounded-lg text-sm font-black shadow-md transition-colors">✓</button>`
                }
                    </div>
                </div>
                <div class="ai-feedback hidden p-4 bg-${block.color}-50 text-${block.color}-800 text-base rounded-lg border border-${block.color}-100" id="fb-${item.id}"></div>
            </div>
        `}).join('');

        return `
            <div class="glass-card rounded-[24px] p-6 shadow-lg border-l-8 border-${block.color}-500 mb-6 API-box" id="container-${block.id}">
                <h3 class="font-black text-xl text-gray-800 mb-1 flex items-center">
                    <span class="bg-${block.color}-100 text-${block.color}-600 rounded-lg px-3 py-1 text-sm mr-3 uppercase">${block.title}</span> ${block.subtitle}
                </h3>
                <p class="text-[11px] text-blue-500 font-bold mb-4 italic flex items-center gap-1">
                    <span>💡 Mẹo: Nhấn nút 🎙️ để nhập bài bằng giọng nói (dành cho điện thoại).</span>
                </p>
                <div class="space-y-3">${itemsHtml}</div>
            </div>
        `;
    }
};
