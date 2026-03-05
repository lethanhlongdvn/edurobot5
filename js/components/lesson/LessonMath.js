// js/components/lesson/LessonMath.js
export const LessonMath = {
    renderUnitConversionExercise(id, displayValue, unit, answer) {
        const finalAnswer = (answer || "").toString();
        return `
            <div class="flex flex-col mb-3">
                <div class="conv-exercise py-2 flex items-center justify-between gap-3 group" data-exercise-id="${id}">
                    <div class="flex items-center gap-2 shrink-0 font-bold text-blue-900 text-base md:text-lg">
                        <span>${displayValue}</span>
                        <span class="text-gray-400 font-medium">=</span>
                    </div>
                    <div class="relative flex-grow flex items-center gap-3 justify-end">
                        <div class="relative w-16 md:w-20">
                            <input type="text" id="input-${id}" 
                                class="w-full bg-transparent border-b-2 border-blue-400 px-1 py-1 text-center text-base md:text-lg font-black text-emerald-700 focus:border-blue-700 outline-none transition-all placeholder:text-transparent"
                                placeholder="...">
                        </div>
                        <div class="relative">
                            <button id="btn-mic-${id}" onclick="Lesson.toggleSpeechRec('${id}')" title="Nhập bằng giọng nói" 
                                class="w-8 h-8 md:w-10 md:h-10 bg-transparent text-blue-400 hover:text-blue-600 rounded-full flex items-center justify-center transition-all active:scale-95">
                                <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                            </button>
                            <div id="mic-status-${id}" class="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-10 whitespace-nowrap">Đang nghe...</div>
                        </div>
                        <span class="font-bold text-blue-900 text-base md:text-lg shrink-0 min-w-[2rem] text-left">${unit}</span>
                        <button onclick="Lesson.checkMathExercise('${id}', '${finalAnswer.replace(/'/g, "\\'")}', 'Đổi đơn vị', '${displayValue.replace(/'/g, "\\'")}')" 
                            class="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 rounded-xl flex items-center justify-center transition-all active:scale-95 shadow-sm ml-1">
                            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    </div>
                </div>
                <div id="feedback-${id}" class="hidden animate-fade-in mt-1 w-full text-xs font-bold pl-2"></div>
            </div>
        `;
    },

    renderMathExercise(id, displayValue, label, actionLabel = "đọc là:", hiddenAnswer = null) {
        const finalAnswer = (hiddenAnswer || displayValue).toString();
        return `
            <div class="math-exercise p-8 bg-gray-50 rounded-[32px] border-2 border-transparent hover:border-blue-200 transition-all group scale-95" data-exercise-id="${id}">
                <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                    <div class="flex items-center gap-4 md:gap-5 shrink-0">
                        <div class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-xl shadow-sm group-hover:rotate-6 transition-transform">🔢</div>
                        <div>
                            <p class="text-xs md:text-sm font-black text-gray-400 uppercase tracking-widest mb-1">${label}</p>
                            <h4 class="text-3xl md:text-4xl font-black text-blue-900">${displayValue}</h4>
                        </div>
                    </div>
                    <span class="text-base md:text-lg font-bold text-gray-400 uppercase tracking-tighter whitespace-nowrap shrink-0 md:ml-4">${actionLabel}</span>
                    <div class="relative flex-grow w-full">
                        <input type="text" id="input-${id}" 
                            class="w-full bg-white dark:bg-slate-800 border-2 border-white dark:border-slate-700 rounded-2xl px-6 py-5 pr-28 text-lg md:text-xl font-black text-gray-800 dark:text-slate-100 shadow-sm focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-200"
                            placeholder="Nhập kết quả...">
                        <button id="btn-mic-${id}" onclick="Lesson.toggleSpeechRec('${id}')" title="Nhập bằng giọng nói" 
                            class="absolute right-14 top-2 bottom-2 w-11 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center transition-all shadow-sm active:scale-95 border border-blue-100 z-10">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                        <div id="mic-status-${id}" class="absolute -top-3 right-14 px-2 py-1 bg-red-500 text-white text-[9px] font-bold rounded-full animate-pulse hidden z-20">Đang nghe...</div>
                        <button onclick="Lesson.checkMathExercise('${id}', '${finalAnswer.replace(/'/g, "\\'")}', '${label}', '${displayValue.replace(/'/g, "\\'")}')" 
                            class="absolute right-2 top-2 bottom-2 w-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-black transition-all active:scale-95 shadow-md shadow-blue-200 flex items-center justify-center z-10">
                            <svg class="w-6 h-6 transform" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                    </div>
                </div>
                <div id="feedback-${id}" class="mt-4 hidden animate-fade-in"></div>
            </div>
        `;
    },

    checkMathExercise(id, answer, label, displayValue) {
        const input = document.getElementById(`input-${id}`);
        const feedback = document.getElementById(`feedback-${id}`);
        const value = input.value.trim().toLowerCase();
        if (!value) return;
        const cleanValue = value.replace(/\s/g, '').replace(/,/g, '.');
        const cleanAnswer = answer.toString().replace(/\s/g, '').replace(/,/g, '.').toLowerCase();
        feedback.classList.remove('hidden');
        if (cleanValue === cleanAnswer) {
            feedback.innerHTML = `<div class="flex items-center gap-1 text-emerald-600 font-bold ml-1 animate-pop-in"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg><span>Tuyệt vời! Bạn đã trả lời đúng.</span></div>`;
            input.classList.add('border-emerald-500', 'text-emerald-600', 'bg-transparent');
            input.classList.remove('border-blue-400', 'text-emerald-700');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerHTML = `<div class="flex items-center gap-1 text-orange-500 font-bold ml-1 animate-pop-in"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg><span>Sai mất rồi. Thử lại nhé!</span></div>`;
            input.classList.add('border-orange-500', 'text-orange-600', 'bg-transparent');
            input.classList.remove('border-blue-400', 'text-emerald-700');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    renderVerticalCalculation(id, num1, operator, num2, answer, decimalPlaces = 0) {
        const maxLen = Math.max(num1.toString().replace('.', '').length, num2.toString().replace('.', '').length, answer.toString().replace('.', '').length) + 1;
        const opSymbol = { '+': '+', '-': '−', '*': '×', 'x': '×', '/': '÷' }[operator] || operator;
        const answerStr = answer.toString();
        const safeAnswer = answerStr.replace(/'/g, "\\'");
        const padRight = (str, len) => str.padStart(len, ' ');
        const num1Str = padRight(num1.toString(), maxLen);
        const num2Str = padRight(num2.toString(), maxLen);

        const renderDisplayRow = (numStr, prefix = '') => {
            let cells = '';
            for (let i = 0; i < maxLen; i++) {
                const ch = numStr[i] || '';
                const display = ch === ' ' ? '' : ch;
                cells += `<div class="w-10 h-10 md:w-12 md:h-12 border border-blue-200 bg-white flex items-center justify-center text-lg md:text-xl font-black text-blue-900">${display}</div>`;
            }
            return `<div class="flex items-center gap-0"><div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl font-black text-gray-400">${prefix}</div>${cells}</div>`;
        };

        let answerCells = '';
        for (let i = 0; i < maxLen; i++) {
            answerCells += `<input type="text" maxlength="1" id="vc-cell-${id}-${i}" class="w-10 h-10 md:w-12 md:h-12 border-2 border-dashed border-orange-300 bg-orange-50 text-center text-lg md:text-xl font-black text-orange-700 outline-none focus:border-orange-500 focus:bg-white transition-all rounded-sm" oninput="this.value=this.value.slice(-1); const next=document.getElementById('vc-cell-${id}-${i + 1}'); if(next && this.value) next.focus();" onkeydown="if(event.key==='Backspace' && !this.value){ const prev=document.getElementById('vc-cell-${id}-${i - 1}'); if(prev) prev.focus(); }">`;
        }

        return `
        <div class="vc-exercise p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="vc-ex-${id}">
            <div class="flex items-start gap-4 mb-6"><div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">📝</div><h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">Đặt tính rồi tính</h3></div>
            <div class="inline-flex flex-col items-end gap-0 p-4 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 mx-auto">
                ${renderDisplayRow(num1Str, '')}
                ${renderDisplayRow(num2Str, opSymbol)}
                <div class="flex items-center gap-0 my-1"><div class="w-10 h-10 md:w-12 md:h-12"></div><div class="border-t-[3px] border-blue-900" style="width: ${maxLen * 48}px;"></div></div>
                <div class="flex items-center gap-0"><div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl font-black text-emerald-500">=</div>${answerCells}</div>
            </div>
            <div class="mt-6 flex items-center gap-4"><button onclick="Lesson.checkVerticalCalc('${id}', '${safeAnswer}', ${maxLen})" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button><span id="vc-feedback-${id}" class="text-sm font-bold opacity-0 transition-opacity"></span></div>
        </div>
        `;
    },

    checkVerticalCalc(id, answer, maxLen) {
        let userAnswer = '';
        for (let i = 0; i < maxLen; i++) {
            const cell = document.getElementById(`vc-cell-${id}-${i}`);
            if (cell) userAnswer += cell.value || '';
        }
        userAnswer = userAnswer.trim();
        const cleanAnswer = answer.replace(/\s/g, '').trim();
        const feedback = document.getElementById(`vc-feedback-${id}`);
        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (userAnswer === cleanAnswer) {
            feedback.innerText = "Chính xác! 🎉";
            feedback.classList.add('text-emerald-500');
            for (let i = 0; i < maxLen; i++) {
                const cell = document.getElementById(`vc-cell-${id}-${i}`);
                if (cell) { cell.classList.remove('border-orange-300', 'bg-orange-50'); cell.classList.add('border-emerald-400', 'bg-emerald-50'); cell.readOnly = true; }
            }
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Sai mất rồi. Thử lại nhé!";
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    renderFractionInput(id, questionText, answerNumerator, answerDenominator) {
        const safeNum = answerNumerator.toString().replace(/'/g, "\\'");
        const safeDen = answerDenominator.toString().replace(/'/g, "\\'");
        return `
        <div class="fraction-exercise p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="frac-ex-${id}">
            <div class="flex items-start gap-4 mb-6"><div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">⅗</div><h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">${questionText}</h3></div>
            <div class="flex items-center justify-center gap-4 p-6 bg-purple-50 dark:bg-slate-900 rounded-2xl">
                <span class="text-xl font-bold text-gray-600">Kết quả =</span>
                <div class="inline-flex flex-col items-center gap-0">
                    <input type="text" id="frac-num-${id}" placeholder="Tử số" class="w-20 md:w-24 h-10 text-center text-lg font-black text-purple-800 bg-white border-2 border-purple-200 rounded-t-xl outline-none focus:border-purple-500 transition-all placeholder:text-gray-300 placeholder:text-sm placeholder:font-normal">
                    <div class="w-20 md:w-24 h-[3px] bg-purple-800"></div>
                    <input type="text" id="frac-den-${id}" placeholder="Mẫu số" class="w-20 md:w-24 h-10 text-center text-lg font-black text-purple-800 bg-white border-2 border-purple-200 rounded-b-xl outline-none focus:border-purple-500 transition-all placeholder:text-gray-300 placeholder:text-sm placeholder:font-normal">
                </div>
            </div>
            <div class="mt-6 flex items-center gap-4"><button onclick="Lesson.checkFraction('${id}', '${safeNum}', '${safeDen}')" class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button><span id="frac-feedback-${id}" class="text-sm font-bold opacity-0 transition-opacity"></span></div>
        </div>
        `;
    },

    checkFraction(id, correctNum, correctDen) {
        const userNum = (document.getElementById(`frac-num-${id}`)?.value || '').trim();
        const userDen = (document.getElementById(`frac-den-${id}`)?.value || '').trim();
        const feedback = document.getElementById(`frac-feedback-${id}`);
        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (userNum === correctNum && userDen === correctDen) {
            feedback.innerText = "Xuất sắc! Phân số chính xác! 🎉";
            feedback.classList.add('text-emerald-500');
            document.getElementById(`frac-num-${id}`).classList.add('border-emerald-400', 'bg-emerald-50');
            document.getElementById(`frac-den-${id}`).classList.add('border-emerald-400', 'bg-emerald-50');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Chưa đúng. Kiểm tra lại tử số và mẫu số nhé!";
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    renderWordProblem(id, problemText, hintSteps = [], expectedAnswer = null) {
        return `
            <div class="word-problem p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="wp-ex-${id}">
                <div class="flex items-start gap-4 mb-6"><div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">📖</div><h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">Giải bài toán</h3></div>
                <div class="p-5 bg-amber-50 dark:bg-slate-900 rounded-2xl border-2 border-amber-200 dark:border-amber-800/30 mb-6"><p class="text-lg md:text-xl font-bold text-gray-800 dark:text-slate-100 leading-relaxed" id="wp-problem-text-${id}">${problemText}</p></div>
                <div class="space-y-4">
                    <div class="w-full relative">
                        <label class="text-sm font-black text-amber-600 uppercase tracking-widest mb-2 block">Bài giải của em</label>
                        <textarea id="wp-full-${id}" rows="5" class="w-full p-5 pr-14 rounded-2xl border-2 border-amber-200 outline-none focus:border-amber-500 text-lg md:text-xl font-bold placeholder:text-gray-300 shadow-inner transition-all resize-y bg-amber-50/30 leading-relaxed" placeholder="Ví dụ:\nSố đó là:\n10 + 5 = 15\nĐáp số: 15"></textarea>
                        <button onclick="Lesson.toggleSpeechRec('wp-full-${id}')" class="absolute right-4 top-10 text-amber-400 hover:text-amber-600 transition-colors bg-white p-2 rounded-xl shadow-sm" title="Nhập bằng giọng nói">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                    </div>
                </div>
                ${hintSteps.length > 0 ? `<details class="mt-4"><summary class="text-xs font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:text-blue-500 transition-colors">💡 Gợi ý các bước</summary><ul class="mt-2 pl-4 space-y-1 text-sm text-gray-500">${hintSteps.map(h => `<li class="list-disc">${h}</li>`).join('')}</ul></details>` : ''}
                <div class="mt-6 flex justify-end"><button onclick="Lesson.submitWordProblemAI('${id}')" class="btn-tutor-e w-14 h-14" title="Thầy E chấm bài">E</button></div>
            </div>
        `;
    },

    submitWordProblemAI(id) {
        const solution = document.getElementById(`wp-full-${id}`)?.value || '';
        const problemText = document.getElementById(`wp-problem-text-${id}`)?.innerText || '';
        if (!solution.trim()) { alert("Thầy E nhắc: Em chưa điền bài giải kìa. Hãy viết lời giải, phép tính và đáp số nhé! ✏️"); return; }
        const displayPrompt = `Đề bài:\n${problemText}\n\nBài giải của học sinh:\n${solution}`;
        const hiddenPrompt = `\n\n[HƯỚNG DẪN DÀNH RIÊNG CHO AI]:\n- NẾU HỌC SINH LÀM ĐÚNG: Khen ngợi.\n- ⛔ NẾU HỌC SINH LÀM SAI: CHỈ chỉ ra lỗi sai ở đâu, KHÔNG ĐƯỢC ĐƯA ĐÁP ÁN!`;
        if (window.AIInteraction && typeof window.AIInteraction.gradeWithModal === 'function') {
            window.AIInteraction.gradeWithModal("👨‍🏫 Thầy E Nhận Xét", displayPrompt + hiddenPrompt);
        } else if (window.AIInteraction && typeof window.AIInteraction.sendDirectMessage === 'function') {
            window.AIInteraction.sendDirectMessage(displayPrompt, hiddenPrompt);
        }
    }
};
