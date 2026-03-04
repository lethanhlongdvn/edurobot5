// js/components/Lesson.js - Giao diện Bài học
import { common } from './common.js';
import { AIInteraction } from './AIInteraction.js';

export const Lesson = {
    renderLessonPage(subject, lesson, allSubjects = []) {
        const color = common.getColorClasses(subject.color);

        const hasStudy = !!(typeof lesson.content === 'function' || lesson.content?.trim());
        const hasPractice = !!(typeof lesson.practice === 'function' || lesson.practice?.trim());
        const hasQuiz = !!(lesson.quizPool && lesson.quizPool.length > 0);

        return `
            <div class="max-w-full mx-auto pb-10 px-1 pt-1">
                <!-- Slim Lesson Title: Centered & Blue -->
                <div class="text-center mb-6 animate-slide-down">
                    <h1 class="${lesson.title.length > 60 ? 'text-xl md:text-2xl' : lesson.title.length > 35 ? 'text-2xl md:text-3xl' : 'text-3xl md:text-5xl'} font-black text-blue-900 dark:text-blue-400 leading-tight tracking-tight uppercase">${lesson.title}</h1>
                </div>

                <!-- Tabs Navigation: Mảnh & Rộng (Khớp Navbar) -->
                <div class="flex justify-center mb-4 overflow-x-auto px-1 sticky top-16 z-40">
                    <div class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl p-1 rounded-full border border-gray-100 dark:border-slate-800 shadow-xl shadow-blue-900/5 dark:shadow-slate-950/40 flex gap-1 w-full max-w-full px-2 items-center">
                        ${hasStudy ? `
                        <button id="tab-study" onclick="router.switchTab('study')" class="tab-btn active flex-1 py-4 rounded-full text-[16px] md:text-xl font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95">
                            <span class="text-2xl">📖</span> Tìm hiểu bài
                        </button>` : ''}
                        
                        ${hasPractice ? `
                        <button id="tab-practice" onclick="router.switchTab('practice')" class="tab-btn flex-1 py-4 rounded-full text-[16px] md:text-xl font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95 text-gray-400">
                            <span class="text-2xl">✍️</span> Luyện tập
                        </button>` : ''}
                        
                        ${hasQuiz ? `
                        <button id="tab-quiz" onclick="router.switchTab('quiz')" class="tab-btn flex-1 py-4 rounded-full text-[16px] md:text-xl font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95 text-gray-400">
                            <span class="text-2xl">🏆</span> Củng cố
                        </button>` : ''}

                        ${lesson.audio ? `
                        <button id="btn-audio-play" onclick="router.toggleAudio()" title="Đọc mẫu" class="w-10 h-10 shrink-0 ml-1 bg-gradient-to-br from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30">
                            <svg id="icon-audio-play" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                            <svg id="icon-audio-pause" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                        </button>
                        <audio id="lesson-audio" src="${lesson.audio}" preload="metadata"></audio>
                        ` : ''}
                    </div>
                </div>

                <!-- Tab Content: Dynamic & Spacious -->
                <div id="tab-content" class="lesson-content min-h-[600px] animate-fade-in px-1">
                    <!-- Loaded dynamically -->
                </div>

                <!-- Chatbot Floating Toggle -->
                <button onclick="AIInteraction.toggleChat()" class="fixed bottom-8 right-8 w-20 h-20 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl shadow-2xl shadow-blue-200 flex items-center justify-center text-3xl font-black transition-all active:scale-90 z-[60] group border-4 border-white/20">
                    <span class="group-hover:scale-125 transition-transform">E</span>
                    <div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-4 border-white animate-bounce"></div>
                </button>

                <!-- AI Chat Window -->
                <div id="ai-chat-window" class="fixed inset-4 md:inset-auto md:bottom-32 md:right-8 md:w-[420px] md:h-[600px] bg-white dark:bg-slate-900 rounded-[28px] md:rounded-[40px] shadow-2xl border border-gray-100 dark:border-slate-800 hidden flex-col z-[70] animate-scale-up overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 md:p-6 text-white flex justify-between items-center shrink-0">
                        <div class="flex items-center gap-3">
                            <div class="w-11 h-11 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl font-black">E</div>
                            <div>
                                <h3 class="text-base font-black leading-tight">AI E - Trợ lý học tập</h3>
                                <p class="text-[9px] font-bold uppercase tracking-widest opacity-70">Hỏi nhiều câu thoải mái nhé!</p>
                            </div>
                        </div>
                        <button onclick="AIInteraction.toggleChat()" class="w-10 h-10 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center text-xl">✕</button>
                    </div>
                    <div id="ai-chat-messages" class="flex-grow p-5 md:p-6 overflow-y-auto space-y-4 bg-gray-50/50 dark:bg-slate-900/50" style="min-height:0">
                        <div class="flex mb-3 animate-slide-up">
                            <div class="bg-white dark:bg-slate-800 border border-blue-50 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-gray-700 dark:text-slate-200 font-medium shadow-sm leading-relaxed">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest">AI E</span>
                                </div>
                                <p class="mb-2">Chào bạn! Mình rất vui được hỗ trợ bạn trong bài học <b>${lesson.title}</b> này.</p>
                                <p>Bạn có thắc mắc gì về bài học hay cần mình hướng dẫn làm bài tập không? <b>Hỏi bao nhiêu câu cũng được nhé!</b> 😊</p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 flex gap-2 shrink-0">
                        <input id="ai-chat-input" type="text" placeholder="Hỏi AI E điều gì đó..." 
                            class="flex-grow bg-gray-50 dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-700 rounded-2xl px-5 py-3 text-sm font-bold text-gray-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all placeholder:text-gray-300 outline-none"
                            onkeypress="if(event.key === 'Enter') AIInteraction.sendAiMessage()">
                        <button onclick="AIInteraction.sendAiMessage()" class="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 transition-all active:scale-90 shrink-0">
                            <svg class="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    renderSubjectHeader(subject) {
        const color = common.getColorClasses(subject.color);
        return `
            <div class="flex items-center gap-8 mb-16 animate-fade-in px-4">
                <div class="w-24 h-24 ${color.bg} text-white rounded-[32px] flex items-center justify-center text-5xl shadow-2xl ${color.shadow} transform rotate-3">${subject.icon}</div>
                <div>
                    <h2 class="text-4xl font-black text-gray-900 mb-2 leading-none">${subject.name}</h2>
                    <div class="flex items-center gap-3">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <p class="text-gray-400 font-bold uppercase text-[11px] tracking-[0.2em] mt-1">Danh sách bài giảng tối ưu từ NotebookLM</p>
                    </div>
                </div>
            </div>
        `;
    },

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
                        
                        <!-- Mic Button -->
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

    // Hệ thống bài tập Toán tương tác (Nâng cấp Premium)
    renderMathExercise(id, displayValue, label, actionLabel = "đọc là:", hiddenAnswer = null) {
        // Nếu không có hiddenAnswer, mặc định hiddenAnswer chính là displayValue (cho bài tập đọc số)
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
                        
                        <!-- Mic Button -->
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

        // Xóa dấu cách để so sánh chính xác
        const cleanValue = value.replace(/\s/g, '').replace(/,/g, '.');
        const cleanAnswer = answer.toString().replace(/\s/g, '').replace(/,/g, '.').toLowerCase();

        feedback.classList.remove('hidden');
        if (cleanValue === cleanAnswer) {
            feedback.innerHTML = `
                <div class="flex items-center gap-1 text-emerald-600 font-bold ml-1 animate-pop-in">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    <span>Tuyệt vời! Bạn đã trả lời đúng.</span>
                </div>
            `;
            input.classList.add('border-emerald-500', 'text-emerald-600', 'bg-transparent');
            input.classList.remove('border-blue-400', 'text-emerald-700');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerHTML = `
                <div class="flex items-center gap-1 text-orange-500 font-bold ml-1 animate-pop-in">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span>Sai mất rồi. Thử lại nhé!</span>
                </div>
            `;
            input.classList.add('border-orange-500', 'text-orange-600', 'bg-transparent');
            input.classList.remove('border-blue-400', 'text-emerald-700');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // --- BỘ CÔNG CỤ TƯƠNG TÁC CAO CẤP (NEW INFO) ---

    // 1. Module Công thức Kéo-Thả (Drag & Drop)
    renderDragDropFormula(id, questionText, draggables, slotsHtml, answerLogicParams) {
        // Tạm lưu answer vào data attribute để handle sau
        const safeParams = JSON.stringify(answerLogicParams).replace(/"/g, '&quot;');

        return `
            <div class="drag-drop-exercise p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="dd-ex-${id}">
                <div class="flex items-start gap-4 mb-6">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black shrink-0">👆</div>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">${questionText}</h3>
                </div>
                
                <div class="flex flex-wrap gap-3 mb-8 p-4 bg-gray-50 dark:bg-slate-900 rounded-2xl min-h-[80px] border-2 border-dashed border-gray-200" id="drag-source-${id}" ondragover="event.preventDefault()" ondrop="Lesson.drop(event, '${id}')">
                    ${draggables.map((item, idx) => `
                        <div draggable="true" ondragstart="Lesson.dragStart(event, '${item}')" id="drag-${id}-${idx}" 
                            class="px-4 py-2 bg-white border-2 border-blue-200 text-blue-700 font-bold rounded-xl cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                            ${item}
                        </div>
                    `).join('')}
                </div>

                <div class="formula-area flex flex-wrap items-center justify-center gap-3 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-blue-100">
                    ${slotsHtml}
                </div>

                <div class="mt-6 flex justify-end items-center gap-4">
                    <span id="dd-feedback-${id}" class="text-sm font-bold opacity-0 transition-opacity"></span>
                    <button onclick="Lesson.checkDragDrop('${id}', '${safeParams}')" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button>
                </div>
            </div>
        `;
    },

    dragStart(ev, value) {
        ev.dataTransfer.setData("text", value);
        ev.dataTransfer.setData("sourceId", ev.target.id);
    },

    allowDrop(ev) {
        ev.preventDefault();
        ev.currentTarget.classList.add('bg-blue-100');
    },

    dragleave(ev) {
        ev.currentTarget.classList.remove('bg-blue-100');
    },

    drop(ev, exId) {
        ev.preventDefault();
        ev.currentTarget.classList.remove('bg-blue-100');
        const data = ev.dataTransfer.getData("text");
        const sourceId = ev.dataTransfer.getData("sourceId");

        // Tránh thả sai chỗ 
        if (ev.currentTarget.classList.contains('drop-slot') && data) {
            const oldVal = ev.currentTarget.dataset.value;
            if (oldVal) {
                // Return old item to source
                const sourceContainer = document.getElementById(`drag-source-${exId}`);
                if (sourceContainer) {
                    const hiddenItems = sourceContainer.querySelectorAll('div');
                    for (let item of hiddenItems) {
                        if (item.innerText.trim() === oldVal && item.style.display === 'none') {
                            item.style.display = 'block';
                            break;
                        }
                    }
                }
            }

            // Thay thế text trong slot
            ev.currentTarget.innerText = data;
            ev.currentTarget.dataset.value = data;
            ev.currentTarget.classList.add('border-blue-500', 'bg-white', 'text-blue-700');
            ev.currentTarget.classList.remove('border-dashed', 'bg-transparent');

            // Ẩn element gốc đi
            if (sourceId) {
                const srcEl = document.getElementById(sourceId);
                if (srcEl) srcEl.style.display = 'none';
            }
        }
    },

    clearSlot(ev, exId) {
        const slot = ev.currentTarget;
        const val = slot.dataset.value;
        if (val) {
            slot.innerText = '?';
            slot.dataset.value = '';
            slot.classList.remove('border-blue-500', 'bg-white', 'text-blue-700');
            slot.classList.add('border-dashed', 'bg-transparent');

            // Hiện lại block đã ẩn trong source
            const sourceContainer = document.getElementById(`drag-source-${exId}`);
            if (sourceContainer) {
                const hiddenItems = sourceContainer.querySelectorAll('div');
                for (let item of hiddenItems) {
                    if (item.innerText.trim() === val && item.style.display === 'none') {
                        item.style.display = 'block';
                        break;
                    }
                }
            }
        }
    },

    checkDragDrop(id, paramsStr) {
        const params = JSON.parse(paramsStr.replace(/&quot;/g, '"'));
        const container = document.getElementById(`dd-ex-${id}`);
        const slots = container.querySelectorAll('.drop-slot');
        const feedback = document.getElementById(`dd-feedback-${id}`);

        // Thu thập values
        const userVals = Array.from(slots).map(s => s.dataset.value || "");

        let isCorrect = true;
        if (params.ordered) {
            // Check theo đúng thứ tự mảng answer
            isCorrect = userVals.every((val, i) => val === params.answer[i]);
        } else {
            // Check không cần thứ tự (cho phép đảo vị trí phép nhân/cộng)
            let answerCopy = [...params.answer];
            for (let val of userVals) {
                const idx = answerCopy.indexOf(val);
                if (idx > -1) answerCopy.splice(idx, 1);
                else isCorrect = false;
            }
            if (answerCopy.length > 0) isCorrect = false;
        }

        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (isCorrect) {
            feedback.innerText = "Chính xác! 🎉";
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Chưa đúng. Thử lại nhé!";
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // 2. Phòng thí nghiệm hình học động (Dynamic Geometry Lab)
    toggleGeoLock(id, type) {
        const checkbox = document.getElementById(`geo-lock-${id}`);
        const state = window[`geoState_${id}`];
        if (checkbox.checked) {
            state.isLocked = true;
            state.baseA = state.a;
            state.baseB = state.b;
        } else {
            state.isLocked = false;
        }
        this.updateGeometry(id, type, null, null);
    },

    renderDynamicGeometryLab(id, shapeType, initialState) {
        return `
            <div class="geometry-lab p-6 md:p-8 bg-blue-50 dark:bg-slate-900 rounded-[32px] border-2 border-blue-100 mb-8 mt-6">
                 <div class="flex items-center gap-3 mb-6">
                    <span class="text-3xl">🧮</span>
                    <h3 class="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-400">Phòng Thí Nghiệm Hình Học</h3>
                </div>
                
                <div class="flex flex-col md:flex-row gap-8">
                    <!-- Trực quan hóa (Visualization) -->
                    <div class="flex-1 min-h-[300px] bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center p-6 border-2 border-dashed border-blue-300 relative overflow-hidden">
                        <div id="geo-visual-${id}" class="w-full h-full transition-all duration-300 flex items-center justify-center relative">
                            <!-- SVG vẽ hình sẽ được gắn vào đây -->
                            <div class="text-gray-400 text-sm font-bold">Hình ảnh sẽ cập nhật trực tiếp...</div>
                        </div>
                    </div>
                    
                    <!-- Bảng điều khiển (Control Panel) -->
                    <div class="flex-1 space-y-6">
                        <div id="geo-controls-${id}">
                            <!-- Controls nạp động dựa vào shapeType -->
                        </div>
                        
                        <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-100 min-h-[120px] flex flex-col justify-center">
                            <div class="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-2">Kết quả tính toán thời gian thực</div>
                            <div id="geo-result-${id}" class="text-2xl font-black text-indigo-600 dark:text-indigo-400 font-mono leading-tight"></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Auto Init Script trigger inline -->
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="Lesson.initGeometryLab('${id}', '${shapeType}', ${JSON.stringify(initialState).replace(/"/g, "'")})" class="hidden">
        `;
    },

    initGeometryLab(id, type, stateStr) {
        // Safe parse
        let state = typeof stateStr === 'string' ? JSON.parse(stateStr.replace(/'/g, '"')) : stateStr;
        const ctrls = document.getElementById(`geo-controls-${id}`);
        if (!ctrls) return;

        let html = '';
        if (type === 'rectangle_area' || type === 'cube_volume') {
            const labelA = type === 'cube_volume' ? 'Cạnh (a)' : 'Chiều dài (a)';
            html = `
                <div class="space-y-4">
                    <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                        <div class="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            <span>${labelA}</span>
                            <span id="geo-val-a-${id}" class="text-blue-600">${state.a} cm</span>
                        </div>
                        <input type="range" class="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" min="1" max="25" value="${state.a}" oninput="Lesson.updateGeometry('${id}', '${type}', 'a', this.value)">
                    </div>
            `;

            if (type === 'rectangle_area') {
                html += `
                    <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
                        <div class="flex justify-between text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                            <span>Chiều rộng (b)</span>
                            <span id="geo-val-b-${id}" class="text-indigo-600">${state.b} cm</span>
                        </div>
                        <input type="range" class="w-full h-2 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600" min="1" max="25" value="${state.b}" oninput="Lesson.updateGeometry('${id}', 'rectangle_area', 'b', this.value)">
                    </div>
                `;
            }

            html += `
                    <div class="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border-2 border-amber-200 dark:border-amber-700 animate-pulse-subtle">
                        <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" id="geo-lock-${id}" class="w-8 h-8 rounded-lg accent-amber-600" onchange="Lesson.toggleGeoLock('${id}', '${type}')">
                            <span class="font-black text-amber-900 dark:text-amber-200 text-lg">Chốt hình so sánh</span>
                        </label>
                    </div>
                </div>
            `;
        }
        // Thêm các hình khác (circle, triangle) tương tự...

        ctrls.innerHTML = html;
        window[`geoState_${id}`] = state;
        Lesson.updateGeometry(id, type, null, null);
    },

    updateGeometry(id, type, key, val) {
        const state = window[`geoState_${id}`];
        if (key) {
            state[key] = parseFloat(val);
            const valLabel = document.getElementById(`geo-val-${key}-${id}`);
            if (valLabel) valLabel.innerText = val + " cm";
        }

        const visual = document.getElementById(`geo-visual-${id}`);
        const result = document.getElementById(`geo-result-${id}`);
        const scaleFactor = 10;
        let visualHtml = '';
        let resultHtml = '';

        if (type === 'rectangle_area') {
            const area = (state.a * state.b).toFixed(1);
            resultHtml = `S = a &times; b = <span class="text-4xl text-blue-600 font-black">${area}</span> cm²`;

            // Vẽ hình hiện tại
            visualHtml = `
                <div class="flex flex-col items-center">
                    <div class="relative mb-6" style="width: ${Math.max(state.a, state.baseA || 0) * scaleFactor}px; height: ${Math.max(state.b, state.baseB || 0) * scaleFactor}px;">
                        <div class="bg-blue-400 border-2 border-blue-600 shadow-xl transition-all duration-300 absolute left-0 bottom-0 z-10 rounded-sm" 
                             style="width: ${state.a * scaleFactor}px; height: ${state.b * scaleFactor}px; background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 10px);">
                        </div>
            `;

            if (state.isLocked) {
                const baseArea = (state.baseA * state.baseB).toFixed(1);
                const ratio = (area / baseArea).toFixed(1);
                resultHtml += `<div class="mt-2 text-lg font-bold text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-200 block">So sánh: Gấp <span class="text-2xl font-black">${ratio}</span> lần (${baseArea} cm²)</div>`;

                // Vẽ hình gốc (Ghost) LÊN TRÊN - Nét mảnh hơn
                visualHtml += `
                    <div class="absolute left-0 bottom-0 border-2 border-dashed border-amber-500 rounded-sm z-20 pointer-events-none" 
                         style="width: ${state.baseA * scaleFactor}px; height: ${state.baseB * scaleFactor}px;">
                    </div>
                `;
            }

            visualHtml += `
                    </div>
                    <!-- Chú thích legend bên dưới -->
                    <div class="flex flex-col md:flex-row gap-4 md:gap-8 bg-blue-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-blue-100">
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 bg-blue-500 rounded shadow-sm"></div>
                            <span class="font-black text-blue-900 dark:text-blue-200 text-sm">Hình hiện tại (a=${state.a}, b=${state.b})</span>
                        </div>
                        ${state.isLocked ? `
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 border-2 border-dashed border-amber-500 rounded"></div>
                            <span class="font-black text-amber-600 text-sm">Hình chốt (a=${state.baseA}, b=${state.baseB})</span>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }
        else if (type === 'cube_volume') {
            const volume = Math.pow(state.a, 3).toFixed(1);
            resultHtml = `V = a &times; a &times; a = <span class="text-4xl text-indigo-600 font-black">${volume}</span> cm³`;

            const s = state.a * 7;
            const d = s * 0.4;
            const viewSize = 320;
            const ox = 30; // Anchor Bottom-Left
            const oy = viewSize - 60;

            let svgContent = '';

            // 1. Vẽ Khối hiện tại
            svgContent += `
                <g class="transition-all duration-300">
                    <!-- Cạnh khuất (Hidden Edges) -->
                    <line x1="${ox + d}" y1="${oy - d}" x2="${ox}" y2="${oy}" stroke="#312e81" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.4" />
                    <line x1="${ox + d}" y1="${oy - d}" x2="${ox + s + d}" y2="${oy - d}" stroke="#312e81" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.4" />
                    <line x1="${ox + d}" y1="${oy - d}" x2="${ox + d}" y2="${oy - s - d}" stroke="#312e81" stroke-width="1.5" stroke-dasharray="4,2" opacity="0.4" />

                    <!-- Các mặt chính -->
                    <path d="M ${ox + s} ${oy} L ${ox + s} ${oy - s} L ${ox + s + d} ${oy - s - d} L ${ox + s + d} ${oy - d} Z" fill="#4338ca" stroke="#312e81" stroke-width="2" />
                    <path d="M ${ox} ${oy - s} L ${ox + s} ${oy - s} L ${ox + s + d} ${oy - s - d} L ${ox + d} ${oy - s - d} Z" fill="#818cf8" stroke="#312e81" stroke-width="2" />
                    <rect x="${ox}" y="${oy - s}" width="${s}" height="${s}" fill="#6366f1" stroke="#312e81" stroke-width="2.5" />
                </g>
            `;

            if (state.isLocked) {
                const baseVol = Math.pow(state.baseA, 3).toFixed(1);
                const ratio = (volume / baseVol).toFixed(1);
                resultHtml += `<div class="mt-2 text-lg font-bold text-amber-600 bg-amber-50 p-3 rounded-xl border-2 border-amber-200 block shadow-inner">So sánh: Cạnh gấp ${(state.a / state.baseA).toFixed(1)} lần \u279E V gấp <span class="text-3xl font-black">${ratio}</span> lần.</div>`;

                const sB = state.baseA * 7;
                const dB = sB * 0.4;

                // 2. Vẽ Ghost Cube (Hình chốt) LÊN LỚP TRÊN - Nét chốt mảnh lại
                svgContent += `
                    <g class="pointer-events-none">
                        <path d="M ${ox + sB} ${oy} L ${ox + sB} ${oy - sB} L ${ox + sB + dB} ${oy - sB - dB} L ${ox + sB + dB} ${oy - dB} Z" fill="none" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,2" />
                        <path d="M ${ox} ${oy - sB} L ${ox + sB} ${oy - sB} L ${ox + sB + dB} ${oy - sB - dB} L ${ox + dB} ${oy - sB - dB} Z" fill="none" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,2" />
                        <rect x="${ox}" y="${oy - sB}" width="${sB}" height="${sB}" fill="none" stroke="#f59e0b" stroke-width="1.2" stroke-dasharray="4,2" />
                    </g>
                `;
            }

            visualHtml = `
                <div class="flex flex-col items-center">
                    <svg viewBox="0 0 ${viewSize} ${viewSize}" class="w-full h-full max-w-[500px] drop-shadow-2xl overflow-visible">${svgContent}</svg>
                    <div class="mt-4 flex flex-col md:flex-row gap-4 md:gap-8 bg-indigo-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-indigo-100">
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 bg-indigo-500 rounded shadow-sm"></div>
                            <span class="font-black text-indigo-900 dark:text-indigo-200 text-sm">Khối hiện tại (a = ${state.a} cm)</span>
                        </div>
                        ${state.isLocked ? `
                        <div class="flex items-center gap-2">
                            <div class="w-4 h-4 border-2 border-dashed border-amber-500 rounded"></div>
                            <span class="font-black text-amber-600 text-sm">Hình chốt (a = ${state.baseA} cm)</span>
                        </div>
                        ` : ''}
                    </div>
                </div>
            `;
        }

        visual.innerHTML = visualHtml;
        result.innerHTML = resultHtml;
    },

    // 3. Dạng bài nối đặc sắc (Matching Exercise)
    renderMatchingExercise(id, title, leftItems, rightItems, correctPairs) {
        // Pairs data format: [{leftIdx: 0, rightIdx: 1}, ...]
        const safeParams = JSON.stringify(correctPairs).replace(/"/g, '&quot;');

        let leftHtml = leftItems.map((item, idx) => `
    < button id = "match-l-${id}-${idx}" onclick = "Lesson.selectMatch('${id}', 'left', ${idx})" class="match-btn w-full p-4 mb-3 bg-white border-2 border-indigo-100 dark:border-slate-700 text-indigo-900 dark:text-slate-200 font-bold rounded-2xl shadow-sm text-center transition-all hover:-translate-y-1 hover:border-indigo-300 relative z-20" >
        ${item}
            </button >
    `).join('');

        let rightHtml = rightItems.map((item, idx) => `
    < button id = "match-r-${id}-${idx}" onclick = "Lesson.selectMatch('${id}', 'right', ${idx})" class="match-btn w-full p-4 mb-3 bg-white border-2 border-fuchsia-100 dark:border-slate-700 text-fuchsia-900 dark:text-slate-200 font-bold rounded-2xl shadow-sm text-center transition-all hover:-translate-y-1 hover:border-fuchsia-300 relative z-20" >
        ${item}
            </button >
    `).join('');

        return `
    < div class="matching-exercise p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-fuchsia-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] mt-6 relative animate-fade-in" id = "match-ex-${id}" >
                <div class="flex items-center gap-3 mb-6 relative z-10">
                    <span class="text-3xl">🔗</span>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">${title}</h3>
                </div>
                
                <div class="flex gap-4 md:gap-12 relative z-10" id="match-container-${id}">
                    <div class="flex-1" id="match-col-left-${id}">${leftHtml}</div>
                    <div class="flex-1" id="match-col-right-${id}">${rightHtml}</div>
                </div>
                
                <!--SVG layer cho đường nối-- >
                <svg id="match-canvas-${id}" class="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"></svg>
                
                <div class="mt-6 flex justify-end items-center gap-4 relative z-20">
                    <span id="match-feedback-${id}" class="text-sm font-bold opacity-0 transition-opacity"></span>
                    <button onclick="Lesson.checkMatching('${id}', '${safeParams}')" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button>
                </div>
            </div >
            < !--Auto Init State-- >
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['matchState_${id}'] = { left: null, right: null, lines: [] }" class="hidden">
        `;
    },

    selectMatch(id, side, idx) {
        const state = window[`matchState_${id}`];
        if (!state) return;

        // Bỏ chọn cũ
        if (state[side] !== null) {
            const oldBtn = document.getElementById(`match-${side.charAt(0)}-${id}-${state[side]}`);
            if (oldBtn) oldBtn.classList.remove('ring-4', side === 'left' ? 'ring-indigo-300' : 'ring-fuchsia-300', 'scale-[1.02]');
        }

        // Chọn mới
        state[side] = idx;
        const newBtn = document.getElementById(`match-${side.charAt(0)}-${id}-${idx}`);
        if (newBtn) {
            newBtn.classList.add('ring-4', side === 'left' ? 'ring-indigo-300' : 'ring-fuchsia-300', 'scale-[1.02]');
        }

        // Nếu đã chọn đủ 2 bên => tạo đường nối
        if (state.left !== null && state.right !== null) {
            Lesson.createMatchLine(id, state.left, state.right);
            // Reset state selection
            document.getElementById(`match-l-${id}-${state.left}`).classList.remove('ring-4', 'ring-indigo-300', 'scale-[1.02]');
            document.getElementById(`match-r-${id}-${state.right}`).classList.remove('ring-4', 'ring-fuchsia-300', 'scale-[1.02]');
            state.left = null;
            state.right = null;
        }
    },

    createMatchLine(id, lIdx, rIdx) {
        const state = window[`matchState_${id}`];
        // Xóa nối cũ nếu trùng bên
        state.lines = state.lines.filter(l => l.l !== lIdx && l.r !== rIdx);
        state.lines.push({ l: lIdx, r: rIdx });
        Lesson.drawMatchLines(id);
    },

    drawMatchLines(id) {
        const canvas = document.getElementById(`match-canvas-${id}`);
        const state = window[`matchState_${id}`];
        if (!canvas || !state) return;

        // Cần reference với element cha có CSS position:relative
        const container = document.getElementById(`match-ex-${id}`);
        if (!container) return;

        const containerRect = container.getBoundingClientRect();

        let svgHtml = '';
        state.lines.forEach(line => {
            const lBtn = document.getElementById(`match-l-${id}-${line.l}`);
            const rBtn = document.getElementById(`match-r-${id}-${line.r}`);

            if (lBtn && rBtn) {
                const lr = lBtn.getBoundingClientRect();
                const rr = rBtn.getBoundingClientRect();

                // Tọa độ gắn với mép phải box trái và mép trái box phải
                const startX = lr.right - containerRect.left;
                const startY = lr.top + lr.height / 2 - containerRect.top;
                const endX = rr.left - containerRect.left;
                const endY = rr.top + rr.height / 2 - containerRect.top;

                svgHtml += `<path d="M ${startX} ${startY} C ${(startX + endX) / 2} ${startY}, ${(startX + endX) / 2} ${endY}, ${endX} ${endY}"
            fill="transparent" stroke="#6366f1" stroke-width="4" stroke-linecap="round" stroke-dasharray="8 8" class="animate-fade-in" />`;
            }
        });
        canvas.innerHTML = svgHtml;
    },

    checkMatching(id, paramsStr) {
        const correctPairs = JSON.parse(paramsStr.replace(/&quot;/g, '"'));
        const state = window[`matchState_${id}`];
        const feedback = document.getElementById(`match-feedback-${id}`);

        if (!state || state.lines.length < correctPairs.length) {
            feedback.innerText = "Em nối chưa đủ các cặp nhé!";
            feedback.classList.remove('opacity-0', 'text-emerald-500');
            feedback.classList.add('text-orange-500');
            return;
        }

        let isCorrect = true;
        for (let cp of correctPairs) {
            const found = state.lines.find(l => l.l === cp.leftIdx && l.r === cp.rightIdx);
            if (!found) {
                isCorrect = false;
                break;
            }
        }

        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (isCorrect) {
            feedback.innerText = "Hoàn thành xuất sắc! 🎉";
            feedback.classList.add('text-emerald-500', 'animate-pop-in');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Có lỗi rồi. Thử lại nhé!";
            feedback.classList.add('text-orange-500', 'animate-pop-in');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // 4. Vận Dụng Thực Tế (Real World Measurement/Upload)
    renderRealWorldMeasurement(id, title, description) {
        return `
        <div class="real-world-exercise p-6 md:p-8 bg-emerald-50 dark:bg-slate-900 rounded-[32px] border-2 border-emerald-100 mb-8 mt-6">
            <div class="flex items-center gap-3 mb-4">
                <span class="text-3xl">📸</span>
                <h3 class="text-xl md:text-2xl font-black text-emerald-900 dark:text-emerald-400">${title}</h3>
            </div>
            <p class="text-emerald-700 dark:text-emerald-300 font-bold mb-6">${description}</p>

            <div class="flex flex-col md:flex-row gap-6">
                <!-- Khu vực upload ảnh -->
                <div class="flex-1">
                    <label for="rw-upload-${id}" class="flex flex-col items-center justify-center w-full h-48 border-4 border-dashed border-emerald-300 bg-white dark:bg-slate-800 rounded-2xl cursor-pointer hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors relative overflow-hidden group">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6 text-emerald-500 group-hover:scale-110 transition-transform z-10" id="rw-placeholder-${id}">
                            <svg class="w-10 h-10 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            <p class="text-sm font-bold uppercase tracking-wide">Nhấn để tải ảnh lên</p>
                        </div>
                        <img id="rw-preview-${id}" class="absolute inset-0 w-full h-full object-cover hidden z-0 opacity-80" />
                        <input id="rw-upload-${id}" type="file" class="hidden" accept="image/*" onchange="Lesson.handleImageUpload(event, '${id}')" />
                    </label>
                </div>

                <!-- Khu vực phép tính / Báo cáo -->
                <div class="flex-1 flex flex-col justify-center space-y-4">
                    <textarea id="rw-calc-${id}" class="w-full h-24 p-4 rounded-xl border-2 border-emerald-200 outline-none focus:border-emerald-500 text-sm font-bold placeholder:text-gray-300 shadow-inner" placeholder="Ghi chép các số đo và phép tính đo đạc thực tế của em ở đây..."></textarea>

                    <button onclick="Lesson.saveRealWorld('${id}')" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95 flex justify-center items-center gap-2">
                        <span>Lưu Kết Quả</span>
                        <span class="text-xl">💾</span>
                    </button>
                    <div id="rw-feedback-${id}" class="text-sm font-bold text-emerald-600 text-center opacity-0 transition-opacity">Đã lưu ảnh và phép tính!</div>
                </div>
            </div>
        </div>
        `;
    },

    handleImageUpload(event, id) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById(`rw-preview-${id}`);
            const placeholder = document.getElementById(`rw-placeholder-${id}`);
            if (preview) {
                preview.src = e.target.result;
                preview.classList.remove('hidden');
            }
        };
        reader.readAsDataURL(file);
    },

    saveRealWorld(id) {
        const feedback = document.getElementById(`rw-feedback-${id}`);
        if (feedback) {
            feedback.classList.remove('opacity-0');
            setTimeout(() => feedback.classList.add('opacity-0'), 3000);
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        }
    },

    renderEmptyState() {
        return `
        <div class="py-32 text-center animate-fade-in">
            <div class="text-6xl mb-8 opacity-20">🏝️</div>
            <h3 class="text-2xl font-black text-gray-300 mb-2">Vùng đất này chưa có bài học</h3>
            <p class="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">EduRobot đang trên đường thám hiểm</p>
        </div>
        `;
    },

    toggleSpeechRec(id) {
        const btn = document.getElementById(`btn-mic-${id}`);
        const status = document.getElementById(`mic-status-${id}`);
        const input = document.getElementById(`input-${id}`);

        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert("Trình duyệt của bạn không hỗ trợ tính năng nhận diện giọng nói. Vui lòng dùng Chrome hoặc tải app EduRobot nhé!");
            return;
        }

        if (!window.lessonSpeechRecognitions) {
            window.lessonSpeechRecognitions = {};
        }

        if (window.lessonSpeechRecognitions[id] && btn.classList.contains('recording')) {
            window.lessonSpeechRecognitions[id].stop();
            return;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        window.lessonSpeechRecognitions[id] = recognition;

        recognition.lang = 'vi-VN';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = function () {
            btn.classList.add('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
            btn.classList.remove('bg-blue-50', 'text-blue-600', 'border-blue-100', 'bg-transparent', 'text-blue-400');
            if (status) status.classList.remove('hidden');
        };

        recognition.onresult = function (event) {
            let transcript = event.results[0][0].transcript.trim();
            // Remove trailing dot occasionally added by speech API
            if (transcript.endsWith('.')) {
                transcript = transcript.slice(0, -1);
            }
            if (input.value) {
                // Determine logic: for reading exercises maybe replace, but append is safer
                input.value = input.value + ' ' + transcript;
            } else {
                input.value = transcript;
            }
        };

        recognition.onerror = function (event) {
            if (status) status.classList.add('hidden');
            btn.classList.remove('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
            if (event.error !== 'aborted') {
                alert("Lỗi Micro: " + event.error);
            }
        };

        recognition.onend = function () {
            btn.classList.remove('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
            if (status) status.classList.add('hidden');

            // Revert classes logically based on size
            if (btn.classList.contains('w-8')) {
                btn.classList.add('bg-transparent', 'text-blue-400');
            } else {
                btn.classList.add('bg-blue-50', 'text-blue-600', 'border-blue-100');
            }
        };

        recognition.start();
    },

    // ========================================================================
    // MODULE MỚI 1: ĐẶT TÍNH RỒI TÍNH (Vertical Calculation Grid)
    // Giao diện ô ly dọc giống vở học sinh, hỗ trợ Cộng/Trừ/Nhân/Chia
    // ========================================================================
    renderVerticalCalculation(id, num1, operator, num2, answer, decimalPlaces = 0) {
        // Tách từng chữ số để render grid
        const maxLen = Math.max(
            num1.toString().replace('.', '').length,
            num2.toString().replace('.', '').length,
            answer.toString().replace('.', '').length
        ) + 1; // +1 cho nhớ

        const opSymbol = { '+': '+', '-': '−', '*': '×', 'x': '×', '/': '÷' }[operator] || operator;

        // Tách answer thành mảng chữ số (bao gồm dấu phẩy nếu có)
        const answerStr = answer.toString();
        const answerChars = answerStr.split('');
        const safeAnswer = answerStr.replace(/'/g, "\\'");

        // Pad num1, num2 để căn phải
        const padRight = (str, len) => str.padStart(len, ' ');
        const num1Str = padRight(num1.toString(), maxLen);
        const num2Str = padRight(num2.toString(), maxLen);

        // Render hàng số 1 (chỉ hiển thị, không nhập)
        const renderDisplayRow = (numStr, prefix = '') => {
            let cells = '';
            for (let i = 0; i < maxLen; i++) {
                const ch = numStr[i] || '';
                const display = ch === ' ' ? '' : ch;
                cells += `<div class="w-10 h-10 md:w-12 md:h-12 border border-blue-200 bg-white flex items-center justify-center text-lg md:text-xl font-black text-blue-900">${display}</div>`;
            }
            return `
        <div class="flex items-center gap-0">
            <div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl font-black text-gray-400">${prefix}</div>
            ${cells}
        </div>
        `;
        };

        // Render hàng kết quả (cho nhập từng ô)
        let answerCells = '';
        for (let i = 0; i < maxLen; i++) {
            answerCells += `<input type="text" maxlength="1" id="vc-cell-${id}-${i}" 
                class="w-10 h-10 md:w-12 md:h-12 border-2 border-dashed border-orange-300 bg-orange-50 text-center text-lg md:text-xl font-black text-orange-700 outline-none focus:border-orange-500 focus:bg-white transition-all rounded-sm"
                oninput="this.value=this.value.slice(-1); const next=document.getElementById('vc-cell-${id}-${i + 1}'); if(next && this.value) next.focus();"
                onkeydown="if(event.key==='Backspace' && !this.value){ const prev=document.getElementById('vc-cell-${id}-${i - 1}'); if(prev) prev.focus(); }">`;
        }

        return `
        <div class="vc-exercise p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="vc-ex-${id}">
            <div class="flex items-start gap-4 mb-6">
                <div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">📝</div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">Đặt tính rồi tính</h3>
            </div>

            <div class="inline-flex flex-col items-end gap-0 p-4 bg-gray-50 dark:bg-slate-900 rounded-2xl border border-gray-200 mx-auto">
                ${renderDisplayRow(num1Str, '')}
                ${renderDisplayRow(num2Str, opSymbol)}
                <div class="flex items-center gap-0 my-1">
                    <div class="w-10 h-10 md:w-12 md:h-12"></div>
                    <div class="border-t-[3px] border-blue-900" style="width: ${maxLen * 48}px;"></div>
                </div>
                <div class="flex items-center gap-0">
                    <div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-xl font-black text-emerald-500">=</div>
                    ${answerCells}
                </div>
            </div>

            <div class="mt-6 flex items-center gap-4">
                <button onclick="Lesson.checkVerticalCalc('${id}', '${safeAnswer}', ${maxLen})" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button>
                <span id="vc-feedback-${id}" class="text-sm font-bold opacity-0 transition-opacity"></span>
            </div>
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
            // Đổi viền ô thành xanh
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

    // ========================================================================
    // MODULE MỚI 2: PHÂN SỐ (Fraction Input)
    // Giao diện nhập tử số / mẫu số dạng trực quan có gạch ngang
    // ========================================================================
    renderFractionInput(id, questionText, answerNumerator, answerDenominator) {
        const safeNum = answerNumerator.toString().replace(/'/g, "\\'");
        const safeDen = answerDenominator.toString().replace(/'/g, "\\'");

        return `
        <div class="fraction-exercise p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="frac-ex-${id}">
            <div class="flex items-start gap-4 mb-6">
                <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">⅗</div>
                <h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">${questionText}</h3>
            </div>

            <div class="flex items-center justify-center gap-4 p-6 bg-purple-50 dark:bg-slate-900 rounded-2xl">
                <span class="text-xl font-bold text-gray-600">Kết quả =</span>
                <div class="inline-flex flex-col items-center gap-0">
                    <input type="text" id="frac-num-${id}" placeholder="Tử số"
                        class="w-20 md:w-24 h-10 text-center text-lg font-black text-purple-800 bg-white border-2 border-purple-200 rounded-t-xl outline-none focus:border-purple-500 transition-all placeholder:text-gray-300 placeholder:text-sm placeholder:font-normal">
                        <div class="w-20 md:w-24 h-[3px] bg-purple-800"></div>
                        <input type="text" id="frac-den-${id}" placeholder="Mẫu số"
                            class="w-20 md:w-24 h-10 text-center text-lg font-black text-purple-800 bg-white border-2 border-purple-200 rounded-b-xl outline-none focus:border-purple-500 transition-all placeholder:text-gray-300 placeholder:text-sm placeholder:font-normal">
                        </div>
                </div>

                <div class="mt-6 flex items-center gap-4">
                    <button onclick="Lesson.checkFraction('${id}', '${safeNum}', '${safeDen}')" class="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button>
                    <span id="frac-feedback-${id}" class="text-sm font-bold opacity-0 transition-opacity"></span>
                </div>
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

    // ========================================================================
    // MODULE MỚI 3: GIẢI TOÁN CÓ LỜI VĂN (Word Problem Solving - 3 Steps)
    // Cho HS nhập: Lời giải → Phép tính → Đáp số, rồi chấm bằng AI hoặc key
    // ========================================================================
    renderWordProblem(id, problemText, hintSteps = [], expectedAnswer = null) {
        const safeExpected = expectedAnswer ? expectedAnswer.toString().replace(/'/g, "\\'") : '';

        return `
            <div class="word-problem p-6 md:p-8 bg-white dark:bg-slate-800 rounded-[32px] shadow-sm border border-gray-100 dark:border-slate-700 mt-6 animate-fade-in" id="wp-ex-${id}">
                <div class="flex items-start gap-4 mb-6">
                    <div class="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-black shrink-0 text-xl">📖</div>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">Giải bài toán</h3>
                </div>

                <!-- Đề bài -->
                <div class="p-5 bg-amber-50 dark:bg-slate-900 rounded-2xl border-2 border-amber-200 dark:border-amber-800/30 mb-6">
                    <p class="text-lg md:text-xl font-bold text-gray-800 dark:text-slate-100 leading-relaxed">${problemText}</p>
                </div>

                <!-- 3 Bước giải bài -->
                <div class="space-y-4">
                    <!-- Bước 1: Lời giải -->
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center text-lg font-black shrink-0 mt-1">1</div>
                        <div class="flex-grow">
                            <label class="text-sm font-black text-blue-600 uppercase tracking-widest mb-1 block">Lời giải (Bài giải)</label>
                            <textarea id="wp-solution-${id}" rows="2"
                                class="w-full p-4 rounded-xl border-2 border-blue-200 outline-none focus:border-blue-500 text-lg md:text-xl font-bold placeholder:text-gray-300 shadow-inner transition-all resize-none"
                                placeholder="Ví dụ: Quãng đường ô tô đi được là:"></textarea>
                        </div>
                    </div>

                    <!-- Bước 2: Phép tính -->
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-lg font-black shrink-0 mt-1">2</div>
                        <div class="flex-grow">
                            <label class="text-sm font-black text-indigo-600 uppercase tracking-widest mb-1 block">Phép tính</label>
                            <textarea id="wp-calc-${id}" rows="2"
                                class="w-full p-4 rounded-xl border-2 border-indigo-200 outline-none focus:border-indigo-500 text-lg md:text-xl font-bold font-mono placeholder:text-gray-300 shadow-inner transition-all resize-none"
                                placeholder="Ví dụ: 45 × 2.5 = 112.5 (km)"></textarea>
                        </div>
                    </div>

                    <!-- Bước 3: Đáp số -->
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-lg font-black shrink-0 mt-1">3</div>
                        <div class="flex-grow">
                            <label class="text-sm font-black text-emerald-600 uppercase tracking-widest mb-1 block">Đáp số</label>
                            <input type="text" id="wp-answer-${id}"
                                class="w-full p-4 rounded-xl border-2 border-emerald-200 outline-none focus:border-emerald-500 text-lg md:text-xl font-bold placeholder:text-gray-300 shadow-inner transition-all"
                                placeholder="Ví dụ: 112.5 km">
                        </div>
                    </div>
                </div>

                ${hintSteps.length > 0 ? `
                    <details class="mt-4">
                        <summary class="text-xs font-black text-gray-400 uppercase tracking-widest cursor-pointer hover:text-blue-500 transition-colors">💡 Gợi ý các bước</summary>
                        <ul class="mt-2 pl-4 space-y-1 text-sm text-gray-500">
                            ${hintSteps.map(h => `<li class="list-disc">${h}</li>`).join('')}
                        </ul>
                    </details>
                ` : ''}

                <div class="mt-6 flex items-center gap-4 flex-wrap">
                    ${expectedAnswer ? `
                        <button onclick="Lesson.submitWordProblem('${id}', '${safeExpected}')" class="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra Đáp Số</button>
                    ` : ''}
                    <button onclick="Lesson.submitWordProblemAI('${id}')" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95 flex items-center gap-2">
                        <span>Gửi AI Chấm Bài</span> <span class="text-lg">🤖</span>
                    </button>
                    <span id="wp-feedback-${id}" class="text-sm font-bold opacity-0 transition-opacity"></span>
                </div>
            </div>
            `;
    },

    submitWordProblem(id, expectedAnswer) {
        const userAnswer = (document.getElementById(`wp-answer-${id}`)?.value || '').trim().replace(/\s/g, '');
        const cleanExpected = expectedAnswer.replace(/\s/g, '');
        const feedback = document.getElementById(`wp-feedback-${id}`);

        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');

        if (userAnswer === cleanExpected) {
            feedback.innerText = "Đáp số chính xác! 🎉";
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Đáp số chưa đúng. Xem lại phép tính nhé!";
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    submitWordProblemAI(id) {
        const solution = document.getElementById(`wp-solution-${id}`)?.value || '';
        const calc = document.getElementById(`wp-calc-${id}`)?.value || '';
        const answer = document.getElementById(`wp-answer-${id}`)?.value || '';

        if (!solution.trim() && !calc.trim() && !answer.trim()) {
            alert("Em chưa điền gì cả. Hãy viết lời giải, phép tính và đáp số nhé!");
            return;
        }

        const fullText = `Bài giải:\n${solution}\nPhép tính:\n${calc}\nĐáp số: ${answer}`;

        // Gửi qua AIInteraction nếu có
        if (window.AIInteraction && typeof window.AIInteraction.sendDirectMessage === 'function') {
            window.AIInteraction.sendDirectMessage(`Chấm bài Toán lời văn của em. Nội dung bài làm:\n${fullText}\n\nHãy nhận xét: Lời giải đúng/sai, Phép tính đúng/sai, Đáp số đúng/sai. Cho điểm thang 10.`);
        } else {
            // Fallback: mở chat window
            const chatInput = document.getElementById('ai-chat-input');
            if (chatInput) {
                chatInput.value = `Em giải bài Toán:\n${fullText}\n\nThầy/cô chấm giúp em với ạ!`;
                const chatWindow = document.getElementById('ai-chat-window');
                if (chatWindow && chatWindow.classList.contains('hidden')) {
                    chatWindow.classList.remove('hidden');
                    chatWindow.classList.add('flex');
                }
                chatInput.focus();
            }
        }

        const feedback = document.getElementById(`wp-feedback-${id}`);
        if (feedback) {
            feedback.classList.remove('opacity-0');
            feedback.innerText = "Đã gửi bài cho AI chấm! Xem cửa sổ chat.";
            feedback.classList.add('text-blue-500');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 1: ĐIỀN VÀO CHỖ TRỐNG (Fill-in-the-Blanks)
    // Đoạn văn có [___] → HS chọn từ danh sách từ để điền vào
    // ========================================================================
    renderFillBlanks(id, paragraph, wordBank, correctAnswers) {
        // paragraph chứa {0}, {1}, {2}... cho các chỗ trống
        // wordBank: array of words (xáo trộn)
        // correctAnswers: array of correct words theo thứ tự {0}, {1}...
        const safeAnswers = JSON.stringify(correctAnswers).replace(/"/g, '&quot;');

        let processedParagraph = paragraph;
        for (let i = 0; i < correctAnswers.length; i++) {
            processedParagraph = processedParagraph.replace(
                `{${i}}`,
                `<span id="fb-slot-${id}-${i}" class="inline-block min-w-[80px] md:min-w-[120px] px-3 py-1 mx-1 bg-amber-100 border-2 border-dashed border-amber-400 rounded-xl text-center font-black text-amber-700 cursor-pointer align-middle transition-all hover:bg-amber-200" onclick="Lesson.clearFillBlankSlot('${id}', ${i})" data-value="">[___]</span>`
            );
        }

        const shuffledBank = [...wordBank].sort(() => Math.random() - 0.5);
        const bankHtml = shuffledBank.map((word, idx) => `
            <button id="fb-word-${id}-${idx}" onclick="Lesson.selectFillBlankWord('${id}', this, '${word.replace(/'/g, "\\'")}')"
                class="px-4 py-2 bg-white border-2 border-emerald-200 text-emerald-800 font-bold rounded-xl shadow-sm hover:bg-emerald-50 hover:border-emerald-400 transition-all active:scale-95 text-base md:text-lg"
                data-word="${word}">${word}</button>
        `).join('');

        return `
        <div class="fill-blanks-exercise p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-amber-100 dark:border-slate-700 mt-6 animate-fade-in" id="fb-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-amber-500 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">✏️</div>
                <h3 class="text-xl md:text-2xl font-black text-amber-900 dark:text-amber-200">Điền vào chỗ trống</h3>
            </div>

            <div class="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-amber-200 mb-6 text-lg md:text-xl font-bold text-gray-800 dark:text-slate-100 leading-loose">
                ${processedParagraph}
            </div>

            <div class="mb-4">
                <p class="text-sm font-black text-emerald-600 uppercase tracking-widest mb-3">📦 Ngân hàng từ</p>
                <div class="flex flex-wrap gap-3" id="fb-bank-${id}">
                    ${bankHtml}
                </div>
            </div>

            <div class="mt-6 flex items-center gap-4">
                <button onclick="Lesson.checkFillBlanks('${id}', '${safeAnswers}')" class="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="fb-feedback-${id}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['fbState_${id}'] = { selectedWord: null, selectedBtn: null }" class="hidden">
        `;
    },

    selectFillBlankWord(id, btn, word) {
        const state = window[`fbState_${id}`];
        if (!state) return;
        // Remove previous selection
        if (state.selectedBtn) {
            state.selectedBtn.classList.remove('ring-4', 'ring-amber-400', 'scale-105');
        }
        state.selectedWord = word;
        state.selectedBtn = btn;
        btn.classList.add('ring-4', 'ring-amber-400', 'scale-105');
    },

    clearFillBlankSlot(id, slotIdx) {
        const slot = document.getElementById(`fb-slot-${id}-${slotIdx}`);
        if (!slot || !slot.dataset.value) return;
        // Restore word to bank
        const bank = document.getElementById(`fb-bank-${id}`);
        const btns = bank.querySelectorAll('button');
        btns.forEach(b => {
            if (b.dataset.word === slot.dataset.value && b.classList.contains('hidden')) {
                b.classList.remove('hidden');
            }
        });
        slot.textContent = '[___]';
        slot.dataset.value = '';
        slot.classList.remove('bg-emerald-100', 'border-emerald-400', 'text-emerald-700');
        slot.classList.add('bg-amber-100', 'border-amber-400', 'text-amber-700');
    },

    checkFillBlanks(id, answersStr) {
        const state = window[`fbState_${id}`];
        // If a word is selected and user clicks a slot, place it
        // This is handled by click events, so checkFillBlanks just validates
        const correctAnswers = JSON.parse(answersStr.replace(/&quot;/g, '"'));
        const feedback = document.getElementById(`fb-feedback-${id}`);
        let allCorrect = true;
        let allFilled = true;

        for (let i = 0; i < correctAnswers.length; i++) {
            const slot = document.getElementById(`fb-slot-${id}-${i}`);
            if (!slot) continue;
            const val = slot.dataset.value || '';
            if (!val) { allFilled = false; continue; }
            if (val !== correctAnswers[i]) {
                allCorrect = false;
                slot.classList.remove('bg-emerald-100', 'border-emerald-400', 'text-emerald-700', 'bg-amber-100', 'border-amber-400', 'text-amber-700');
                slot.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            } else {
                slot.classList.remove('bg-red-100', 'border-red-400', 'text-red-700', 'bg-amber-100', 'border-amber-400', 'text-amber-700');
                slot.classList.add('bg-emerald-100', 'border-emerald-400', 'text-emerald-700');
            }
        }

        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (!allFilled) {
            feedback.innerText = "Em chưa điền hết các chỗ trống!";
            feedback.classList.add('text-orange-500');
        } else if (allCorrect) {
            feedback.innerText = "Hoàn hảo! Tất cả đều đúng! 🎉";
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Có chỗ chưa đúng, thử lại nhé!";
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // Override slot click to also place selected word
    _initFillBlanksSlotClick() {
        document.addEventListener('click', (e) => {
            const slot = e.target.closest('[id^="fb-slot-"]');
            if (!slot) return;
            const parts = slot.id.split('-');
            const id = parts[2];
            const state = window[`fbState_${id}`];
            if (!state || !state.selectedWord) return;

            // Place word in slot
            if (slot.dataset.value) {
                // Already has a word, restore it first
                const bank = document.getElementById(`fb-bank-${id}`);
                const btns = bank.querySelectorAll('button');
                btns.forEach(b => {
                    if (b.dataset.word === slot.dataset.value && b.classList.contains('hidden')) {
                        b.classList.remove('hidden');
                    }
                });
            }

            slot.textContent = state.selectedWord;
            slot.dataset.value = state.selectedWord;
            slot.classList.remove('bg-amber-100', 'border-amber-400', 'text-amber-700', 'bg-red-100', 'border-red-400', 'text-red-700');
            slot.classList.add('bg-emerald-100', 'border-emerald-400', 'text-emerald-700');

            // Hide the word button
            state.selectedBtn.classList.add('hidden');
            state.selectedBtn.classList.remove('ring-4', 'ring-amber-400', 'scale-105');
            state.selectedWord = null;
            state.selectedBtn = null;
        });
    },

    // ========================================================================
    // KHOA HỌC MODULE 2: ĐÚNG / SAI (True/False with Explanation)
    // ========================================================================
    renderTrueFalse(id, statements) {
        // statements: [{text, answer: true/false, explanation}]
        const safeStatements = JSON.stringify(statements).replace(/"/g, '&quot;');

        const statementsHtml = statements.map((s, idx) => `
            <div class="tf-item p-5 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm" id="tf-item-${id}-${idx}">
                <p class="text-lg md:text-xl font-bold text-gray-800 dark:text-slate-100 mb-4 leading-relaxed">${s.text}</p>
                <div class="flex gap-3">
                    <button onclick="Lesson.answerTrueFalse('${id}', ${idx}, true, '${safeStatements}')"
                        id="tf-btn-true-${id}-${idx}"
                        class="flex-1 py-3 bg-emerald-50 border-2 border-emerald-200 text-emerald-700 font-black rounded-xl hover:bg-emerald-100 transition-all active:scale-95 text-lg">
                        ✅ Đúng
                    </button>
                    <button onclick="Lesson.answerTrueFalse('${id}', ${idx}, false, '${safeStatements}')"
                        id="tf-btn-false-${id}-${idx}"
                        class="flex-1 py-3 bg-red-50 border-2 border-red-200 text-red-700 font-black rounded-xl hover:bg-red-100 transition-all active:scale-95 text-lg">
                        ❌ Sai
                    </button>
                </div>
                <div id="tf-explain-${id}-${idx}" class="mt-3 p-4 rounded-xl text-base font-bold hidden transition-all"></div>
            </div>
        `).join('');

        return `
        <div class="true-false-exercise p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-blue-100 dark:border-slate-700 mt-6 animate-fade-in" id="tf-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">⚖️</div>
                <h3 class="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-200">Đúng hay Sai?</h3>
            </div>
            <div class="space-y-4">
                ${statementsHtml}
            </div>
        </div>
        `;
    },

    answerTrueFalse(id, idx, userAnswer, statementsStr) {
        const statements = JSON.parse(statementsStr.replace(/&quot;/g, '"'));
        const s = statements[idx];
        const explain = document.getElementById(`tf-explain-${id}-${idx}`);
        const btnTrue = document.getElementById(`tf-btn-true-${id}-${idx}`);
        const btnFalse = document.getElementById(`tf-btn-false-${id}-${idx}`);

        btnTrue.disabled = true;
        btnFalse.disabled = true;
        btnTrue.classList.add('opacity-50');
        btnFalse.classList.add('opacity-50');

        const isCorrect = userAnswer === s.answer;

        if (userAnswer) {
            btnTrue.classList.remove('opacity-50');
            btnTrue.classList.add(isCorrect ? 'ring-4 ring-emerald-400 bg-emerald-100' : 'ring-4 ring-red-400 bg-red-100');
        } else {
            btnFalse.classList.remove('opacity-50');
            btnFalse.classList.add(isCorrect ? 'ring-4 ring-emerald-400 bg-emerald-100' : 'ring-4 ring-red-400 bg-red-100');
        }

        explain.classList.remove('hidden');
        if (isCorrect) {
            explain.classList.add('bg-emerald-50', 'text-emerald-700', 'border', 'border-emerald-200');
            explain.innerHTML = `✅ Chính xác! ${s.explanation}`;
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            explain.classList.add('bg-red-50', 'text-red-700', 'border', 'border-red-200');
            explain.innerHTML = `❌ Chưa đúng! ${s.explanation}`;
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 3: SẮP XẾP THỨ TỰ (Ordering / Sequencing)
    // HS nhấn nút theo thứ tự đúng
    // ========================================================================
    renderOrdering(id, title, items, correctOrder) {
        // items: array of step descriptions (shuffled)
        // correctOrder: array of indices showing the correct sequence
        const safeOrder = JSON.stringify(correctOrder).replace(/"/g, '&quot;');
        const shuffled = items.map((item, idx) => ({ text: item, origIdx: idx })).sort(() => Math.random() - 0.5);

        const itemsHtml = shuffled.map((item, idx) => `
            <button id="ord-btn-${id}-${item.origIdx}" onclick="Lesson.selectOrderItem('${id}', ${item.origIdx})"
                class="w-full p-4 bg-white dark:bg-slate-800 border-2 border-purple-200 dark:border-slate-600 text-gray-800 dark:text-slate-100 font-bold rounded-2xl shadow-sm hover:border-purple-400 hover:shadow-md transition-all active:scale-[0.98] text-left text-base md:text-lg flex items-center gap-4"
                data-orig-idx="${item.origIdx}">
                <div class="w-10 h-10 bg-purple-100 text-purple-500 rounded-xl flex items-center justify-center font-black shrink-0 text-lg" id="ord-num-${id}-${item.origIdx}">?</div>
                <span>${item.text}</span>
            </button>
        `).join('');

        return `
        <div class="ordering-exercise p-6 md:p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-purple-100 dark:border-slate-700 mt-6 animate-fade-in" id="ord-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">🔢</div>
                <h3 class="text-xl md:text-2xl font-black text-purple-900 dark:text-purple-200">${title}</h3>
            </div>
            <p class="text-base font-bold text-purple-700 dark:text-purple-300 mb-4">👆 Nhấn vào các bước theo đúng thứ tự (bước 1, 2, 3...)</p>
            <div class="space-y-3" id="ord-list-${id}">
                ${itemsHtml}
            </div>
            <div class="mt-6 flex items-center gap-4">
                <button onclick="Lesson.resetOrdering('${id}')" class="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold rounded-xl transition-all active:scale-95">Làm lại</button>
                <button onclick="Lesson.checkOrdering('${id}', '${safeOrder}')" class="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="ord-feedback-${id}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['ordState_${id}'] = { sequence: [], step: 1 }" class="hidden">
        `;
    },

    selectOrderItem(id, origIdx) {
        const state = window[`ordState_${id}`];
        if (!state) return;
        // Check if already selected
        if (state.sequence.includes(origIdx)) return;

        state.sequence.push(origIdx);
        const btn = document.getElementById(`ord-btn-${id}-${origIdx}`);
        const numEl = document.getElementById(`ord-num-${id}-${origIdx}`);

        numEl.textContent = state.step;
        numEl.classList.remove('bg-purple-100', 'text-purple-500');
        numEl.classList.add('bg-purple-600', 'text-white');
        btn.classList.remove('border-purple-200');
        btn.classList.add('border-purple-500', 'bg-purple-50');

        state.step++;
    },

    resetOrdering(id) {
        const state = window[`ordState_${id}`];
        if (!state) return;
        state.sequence.forEach(origIdx => {
            const btn = document.getElementById(`ord-btn-${id}-${origIdx}`);
            const numEl = document.getElementById(`ord-num-${id}-${origIdx}`);
            numEl.textContent = '?';
            numEl.classList.remove('bg-purple-600', 'text-white', 'bg-emerald-600', 'bg-red-500');
            numEl.classList.add('bg-purple-100', 'text-purple-500');
            btn.classList.remove('border-purple-500', 'bg-purple-50', 'border-emerald-400', 'bg-emerald-50', 'border-red-400', 'bg-red-50');
            btn.classList.add('border-purple-200');
        });
        state.sequence = [];
        state.step = 1;
        const feedback = document.getElementById(`ord-feedback-${id}`);
        feedback.classList.add('opacity-0');
    },

    checkOrdering(id, orderStr) {
        const correctOrder = JSON.parse(orderStr.replace(/&quot;/g, '"'));
        const state = window[`ordState_${id}`];
        const feedback = document.getElementById(`ord-feedback-${id}`);

        if (state.sequence.length < correctOrder.length) {
            feedback.classList.remove('opacity-0');
            feedback.innerText = "Em chưa chọn đủ các bước!";
            feedback.classList.add('text-orange-500');
            return;
        }

        let allCorrect = true;
        for (let i = 0; i < correctOrder.length; i++) {
            const btn = document.getElementById(`ord-btn-${id}-${state.sequence[i]}`);
            const numEl = document.getElementById(`ord-num-${id}-${state.sequence[i]}`);
            if (state.sequence[i] !== correctOrder[i]) {
                allCorrect = false;
                numEl.classList.remove('bg-purple-600');
                numEl.classList.add('bg-red-500');
                btn.classList.add('border-red-400', 'bg-red-50');
            } else {
                numEl.classList.remove('bg-purple-600');
                numEl.classList.add('bg-emerald-600');
                btn.classList.add('border-emerald-400', 'bg-emerald-50');
            }
        }

        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (allCorrect) {
            feedback.innerText = "Xuất sắc! Thứ tự hoàn toàn chính xác! 🎉";
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = "Chưa đúng thứ tự. Nhấn 'Làm lại' để thử lại!";
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 4: PHÂN LOẠI (Categorizing / Sorting)
    // Kéo thả hoặc click chọn mục vào đúng nhóm
    // ========================================================================
    renderCategorizing(id, title, categories, items) {
        // categories: [{name, color}]  e.g. [{name:'Chất rắn', color:'blue'}, ...]
        // items: [{text, categoryIdx}]
        const safeItems = JSON.stringify(items).replace(/"/g, '&quot;');
        const shuffledItems = [...items].map((item, idx) => ({ ...item, origIdx: idx })).sort(() => Math.random() - 0.5);

        const catHtml = categories.map((cat, idx) => `
            <div class="flex-1 min-w-[140px]">
                <div class="bg-${cat.color}-100 dark:bg-${cat.color}-900/30 p-3 rounded-t-2xl border-2 border-b-0 border-${cat.color}-300 text-center">
                    <h4 class="font-black text-${cat.color}-800 dark:text-${cat.color}-200 text-base md:text-lg">${cat.name}</h4>
                </div>
                <div id="cat-zone-${id}-${idx}" 
                    class="min-h-[120px] p-3 bg-white dark:bg-slate-800 border-2 border-t-0 border-${cat.color}-300 rounded-b-2xl flex flex-wrap gap-2 content-start transition-all"
                    onclick="Lesson.placeInCategory('${id}', ${idx})">
                </div>
            </div>
        `).join('');

        const itemsHtml = shuffledItems.map(item => `
            <button id="cat-item-${id}-${item.origIdx}" onclick="Lesson.selectCatItem('${id}', ${item.origIdx})"
                class="px-4 py-2 bg-white border-2 border-gray-200 text-gray-800 font-bold rounded-xl shadow-sm hover:border-teal-400 hover:shadow-md transition-all active:scale-95 text-base"
                data-orig-idx="${item.origIdx}">${item.text}</button>
        `).join('');

        return `
        <div class="categorizing-exercise p-6 md:p-8 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] shadow-sm border border-teal-100 dark:border-slate-700 mt-6 animate-fade-in" id="cat-ex-${id}">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">📂</div>
                <h3 class="text-xl md:text-2xl font-black text-teal-900 dark:text-teal-200">${title}</h3>
            </div>

            <div class="flex flex-wrap gap-4 mb-6" id="cat-zones-${id}">
                ${catHtml}
            </div>

            <div class="mb-4">
                <p class="text-sm font-black text-gray-500 uppercase tracking-widest mb-3">📋 Các mục cần phân loại (nhấn chọn rồi nhấn vào nhóm)</p>
                <div class="flex flex-wrap gap-3" id="cat-bank-${id}">
                    ${itemsHtml}
                </div>
            </div>

            <div class="mt-6 flex items-center gap-4">
                <button onclick="Lesson.checkCategorizing('${id}', '${safeItems}')" class="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-black rounded-xl shadow-lg transition-all active:scale-95 text-lg">Kiểm Tra</button>
                <span id="cat-feedback-${id}" class="text-base font-bold opacity-0 transition-opacity"></span>
            </div>
        </div>
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" onload="window['catState_${id}'] = { selectedItem: null, placements: {} }" class="hidden">
        `;
    },

    selectCatItem(id, origIdx) {
        const state = window[`catState_${id}`];
        if (!state) return;
        // Remove previous selection
        document.querySelectorAll(`[id^="cat-item-${id}-"]`).forEach(b => b.classList.remove('ring-4', 'ring-teal-400', 'scale-105'));

        state.selectedItem = origIdx;
        const btn = document.getElementById(`cat-item-${id}-${origIdx}`);
        btn.classList.add('ring-4', 'ring-teal-400', 'scale-105');
    },

    placeInCategory(id, catIdx) {
        const state = window[`catState_${id}`];
        if (!state || state.selectedItem === null) return;

        const origIdx = state.selectedItem;
        const btn = document.getElementById(`cat-item-${id}-${origIdx}`);
        const zone = document.getElementById(`cat-zone-${id}-${catIdx}`);

        // Remove from previous zone if exists
        if (state.placements[origIdx] !== undefined) {
            const prevZone = document.getElementById(`cat-zone-${id}-${state.placements[origIdx]}`);
            const existing = prevZone.querySelector(`[data-cat-placed="${origIdx}"]`);
            if (existing) existing.remove();
        }

        // Place in new zone
        const chip = document.createElement('span');
        chip.className = 'px-3 py-1 bg-teal-100 text-teal-800 font-bold rounded-lg text-sm cursor-pointer hover:bg-red-100 hover:text-red-600 transition-all';
        chip.textContent = btn.textContent;
        chip.dataset.catPlaced = origIdx;
        chip.onclick = (e) => {
            e.stopPropagation();
            chip.remove();
            btn.classList.remove('hidden');
            delete state.placements[origIdx];
        };
        zone.appendChild(chip);

        state.placements[origIdx] = catIdx;
        btn.classList.add('hidden');
        btn.classList.remove('ring-4', 'ring-teal-400', 'scale-105');
        state.selectedItem = null;
    },

    checkCategorizing(id, itemsStr) {
        const items = JSON.parse(itemsStr.replace(/&quot;/g, '"'));
        const state = window[`catState_${id}`];
        const feedback = document.getElementById(`cat-feedback-${id}`);

        let correct = 0;
        let total = items.length;
        let placed = Object.keys(state.placements).length;

        if (placed < total) {
            feedback.classList.remove('opacity-0');
            feedback.innerText = `Em chưa phân loại hết! (${placed}/${total})`;
            feedback.classList.add('text-orange-500');
            return;
        }

        items.forEach((item, idx) => {
            if (state.placements[idx] === item.categoryIdx) correct++;
        });

        feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-orange-500');
        if (correct === total) {
            feedback.innerText = `Tuyệt vời! Phân loại chính xác ${correct}/${total}! 🎉`;
            feedback.classList.add('text-emerald-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
        } else {
            feedback.innerText = `Đúng ${correct}/${total}. Thử lại nhé!`;
            feedback.classList.add('text-orange-500');
            if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
        }
    },

    // ========================================================================
    // KHOA HỌC MODULE 5: THẺ LẬT (Flashcards)
    // Grid thẻ 2 mặt, click để lật
    // ========================================================================
    renderFlashcards(id, title, cards) {
        // cards: [{front, back, emoji}]
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
        <style>
            .flashcard-wrapper.flipped .flashcard-inner { transform: rotateY(180deg); }
        </style>
        `;
    },

    // ========================================================================
    // KHOA HỌC MODULE 6: GÁN NHÃN HÌNH ẢNH (Image Labeling)
    // Hình ảnh với các hotspot, HS chọn nhãn cho mỗi hotspot
    // ========================================================================
    renderImageLabeling(id, title, imageUrl, hotspots, labels) {
        // hotspots: [{x: %, y: %, correctLabel: string}]
        // labels: array of all label options
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

            <div class="relative inline-block w-full mb-6 rounded-2xl overflow-hidden border-2 border-rose-200 shadow-lg">
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
        // Find and highlight the button
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
    // Hiển thị các bước thí nghiệm, HS thực hiện từng bước
    // ========================================================================
    renderExperiment(id, title, description, steps) {
        // steps: [{instruction, result, emoji}]
        const stepsHtml = steps.map((step, idx) => `
            <div id="exp-step-${id}-${idx}" class="exp-step flex items-start gap-4 p-5 bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-slate-700 shadow-sm ${idx > 0 ? 'opacity-40 pointer-events-none' : ''} transition-all">
                <div class="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center text-2xl shrink-0">${step.emoji || '🔬'}</div>
                <div class="flex-grow">
                    <p class="font-black text-gray-800 dark:text-slate-100 text-base md:text-lg mb-2">Bước ${idx + 1}: ${step.instruction}</p>
                    <div id="exp-result-${id}-${idx}" class="hidden p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-200 text-cyan-800 dark:text-cyan-200 font-bold text-base animate-fade-in">
                        ${step.result}
                    </div>
                    <button id="exp-btn-${id}-${idx}" onclick="Lesson.doExperimentStep('${id}', ${idx}, ${steps.length})"
                        class="mt-3 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl shadow-md transition-all active:scale-95 text-sm">
                        ${idx === 0 ? '▶ Bắt đầu' : '▶ Thực hiện'}
                    </button>
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
            <div class="space-y-4">
                ${stepsHtml}
            </div>
            <div id="exp-complete-${id}" class="hidden mt-6 p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl border-2 border-emerald-300 text-center animate-fade-in">
                <span class="text-4xl">🎉</span>
                <p class="text-xl font-black text-emerald-700 dark:text-emerald-300 mt-2">Thí nghiệm hoàn tất!</p>
                <p class="text-base font-bold text-emerald-600 mt-1">Em đã quan sát được các kết quả thí nghiệm.</p>
            </div>
        </div>
        `;
    },

    doExperimentStep(id, stepIdx, totalSteps) {
        // Show result for current step
        const result = document.getElementById(`exp-result-${id}-${stepIdx}`);
        const btn = document.getElementById(`exp-btn-${id}-${stepIdx}`);

        result.classList.remove('hidden');
        btn.classList.add('hidden');

        if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');

        // Unlock next step
        if (stepIdx + 1 < totalSteps) {
            const nextStep = document.getElementById(`exp-step-${id}-${stepIdx + 1}`);
            nextStep.classList.remove('opacity-40', 'pointer-events-none');
        } else {
            // All steps done
            const complete = document.getElementById(`exp-complete-${id}`);
            complete.classList.remove('hidden');
        }
    },

    // ========================================================================
    // LS&ĐL MODULE: BẢN ĐỒ TƯƠNG TÁC (Interactive Google Map)
    // Nhúng Google Maps với các điểm đánh dấu + ghi chú giáo dục
    // ========================================================================
    renderInteractiveMap(id, title, description, locations) {
        // locations: [{ name, lat, lng, info, emoji }]
        // Default map center = first location or Vietnam
        const center = locations[0] || { lat: 16.047079, lng: 108.206230 };
        const zoom = locations.length === 1 ? 8 : 6;

        // Build markers HTML
        const markersHtml = locations.map((loc, idx) => `
            <button onclick="Lesson.flyToMapLocation('${id}', ${idx}, ${loc.lat}, ${loc.lng}, '${(loc.name || '').replace(/'/g, "\\'")}', '${(loc.info || '').replace(/'/g, "\\'")}', '${loc.emoji || '📍'}')"
                class="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-slate-700 hover:border-blue-400 hover:shadow-lg transition-all active:scale-95 text-left group"
                id="map-marker-btn-${id}-${idx}">
                <span class="text-2xl shrink-0">${loc.emoji || '📍'}</span>
                <div class="flex-grow min-w-0">
                    <p class="font-black text-gray-800 dark:text-slate-100 text-sm md:text-base truncate">${loc.name}</p>
                    <p class="text-[11px] font-bold text-gray-400 dark:text-slate-500 truncate">${loc.info || ''}</p>
                </div>
                <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        `).join('');

        // Build Google Maps embed URL - free, no API key required
        const q = encodeURIComponent(locations[0]?.name || 'Việt Nam');
        const mapSrc = `https://maps.google.com/maps?q=${center.lat},${center.lng}&z=${zoom}&output=embed&t=k`;

        return `
        <div class="interactive-map-module p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] border border-blue-100 dark:border-slate-700 mb-6 mt-6" id="map-module-${id}">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-200">🗺️</div>
                <div>
                    <h3 class="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-400">${title}</h3>
                    <p class="text-sm font-bold text-blue-600/70 dark:text-blue-400/50">${description || 'Nhấn vào các địa điểm bên dưới để khám phá trên bản đồ'}</p>
                </div>
            </div>

            <!-- Map Container -->
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200 dark:border-slate-600 mt-4">
                <iframe 
                    id="map-iframe-${id}"
                    src="${mapSrc}"
                    width="100%" 
                    height="450" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    class="w-full">
                </iframe>

                <!-- Info overlay -->
                <div id="map-info-${id}" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform translate-y-full transition-transform duration-300">
                    <div class="flex items-center gap-3">
                        <span id="map-info-emoji-${id}" class="text-3xl">📍</span>
                        <div>
                            <h4 id="map-info-name-${id}" class="text-lg font-black"></h4>
                            <p id="map-info-detail-${id}" class="text-sm font-bold opacity-80"></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Location markers grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                ${markersHtml}
            </div>

            <!-- Map type switcher -->
            <div class="flex gap-2 mt-4 justify-center">
                <button onclick="Lesson.switchMapType('${id}', 'k')" class="px-4 py-2 bg-blue-600 text-white font-black rounded-xl text-sm shadow-md active:scale-95 transition-all" title="Vệ tinh">🛰️ Vệ tinh</button>
                <button onclick="Lesson.switchMapType('${id}', 'm')" class="px-4 py-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 font-black rounded-xl text-sm shadow-md active:scale-95 transition-all border" title="Bản đồ">🗺️ Bản đồ</button>
                <button onclick="Lesson.switchMapType('${id}', 'p')" class="px-4 py-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 font-black rounded-xl text-sm shadow-md active:scale-95 transition-all border" title="Địa hình">⛰️ Địa hình</button>
            </div>
        </div>
        `;
    },

    flyToMapLocation(id, idx, lat, lng, name, info, emoji) {
        const iframe = document.getElementById(`map-iframe-${id}`);
        if (iframe) {
            iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&z=10&output=embed&t=k`;
        }

        // Show info overlay
        const overlay = document.getElementById(`map-info-${id}`);
        const nameEl = document.getElementById(`map-info-name-${id}`);
        const detailEl = document.getElementById(`map-info-detail-${id}`);
        const emojiEl = document.getElementById(`map-info-emoji-${id}`);
        if (overlay && nameEl && detailEl) {
            nameEl.textContent = name;
            detailEl.textContent = info;
            if (emojiEl) emojiEl.textContent = emoji;
            overlay.classList.remove('translate-y-full');
            setTimeout(() => overlay.classList.add('translate-y-full'), 5000);
        }

        // Highlight active button
        const module = document.getElementById(`map-module-${id}`);
        if (module) {
            module.querySelectorAll('[id^="map-marker-btn-"]').forEach(btn => {
                btn.classList.remove('border-blue-500', 'bg-blue-50', 'shadow-lg');
                btn.classList.add('border-gray-100');
            });
            const activeBtn = document.getElementById(`map-marker-btn-${id}-${idx}`);
            if (activeBtn) {
                activeBtn.classList.add('border-blue-500', 'bg-blue-50', 'shadow-lg');
                activeBtn.classList.remove('border-gray-100');
            }
        }
    },

    switchMapType(id, type) {
        const iframe = document.getElementById(`map-iframe-${id}`);
        if (iframe) {
            const src = iframe.src;
            iframe.src = src.replace(/&t=[a-z]/, `&t=${type}`);
        }
    }
};

// Init fill-blanks slot click handler
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        if (Lesson._initFillBlanksSlotClick) Lesson._initFillBlanksSlotClick();
    });
    // Also try immediate init in case DOM is already loaded
    if (document.readyState !== 'loading') {
        if (Lesson._initFillBlanksSlotClick) Lesson._initFillBlanksSlotClick();
    }
}

window.Lesson = Lesson;
