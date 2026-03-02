// js/components/Lesson.js - Giao diện Bài học
import { common } from './common.js';
import { AIInteraction } from './AIInteraction.js';

export const Lesson = {
    renderLessonPage(subject, lesson, allSubjects = []) {
        const color = common.getColorClasses(subject.color);

        const hasStudy = !!(lesson.content?.trim());
        const hasPractice = !!(lesson.practice?.trim());
        const hasQuiz = !!(lesson.quizPool && lesson.quizPool.length > 0);

        return `
            <div class="max-w-full mx-auto pb-10 px-1 pt-1">
                <!-- Slim Lesson Title: Centered & Blue -->
                <div class="text-center mb-6 animate-slide-down">
                    <h1 class="text-3xl md:text-5xl font-black text-blue-900 dark:text-blue-400 leading-tight tracking-tight uppercase">${lesson.title}</h1>
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
                            <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">${label}</p>
                            <h4 class="text-2xl font-black text-blue-900">${displayValue}</h4>
                        </div>
                    </div>
                    <span class="text-sm font-bold text-gray-400 uppercase tracking-tighter whitespace-nowrap shrink-0 md:ml-4">${actionLabel}</span>
                    <div class="relative flex-grow w-full">
                        <input type="text" id="input-${id}" 
                            class="w-full bg-white dark:bg-slate-800 border-2 border-white dark:border-slate-700 rounded-2xl px-6 py-4 pr-28 text-sm font-bold text-gray-800 dark:text-slate-100 shadow-sm focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-200"
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

            if (state.isLocked) {
                const baseArea = (state.baseA * state.baseB).toFixed(1);
                const ratio = (area / baseArea).toFixed(1);
                resultHtml += `<div class="mt-2 text-lg font-bold text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-200 block">So sánh: Gấp <span class="text-2xl font-black">${ratio}</span> lần (${baseArea} cm²)</div>`;

                // Vẽ hình gốc (Shadow)
                visualHtml += `
                    <div class="absolute border-4 border-dashed border-gray-300 rounded-sm opacity-40 z-0" 
                         style="width: ${state.baseA * scaleFactor}px; height: ${state.baseB * scaleFactor}px; left: 50%; top: 50%; transform: translate(-50%, -50%);">
                         <div class="absolute -top-6 left-0 text-[10px] font-bold text-gray-400">Hình gốc</div>
                    </div>
                `;
            }

            // Vẽ hình hiện tại
            visualHtml += `
                <div class="bg-blue-400 border-2 border-blue-600 shadow-2xl transition-all duration-300 relative z-10 flex items-center justify-center rounded-sm" 
                     style="width: ${state.a * scaleFactor}px; height: ${state.b * scaleFactor}px; background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 10px);">
                    <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 font-black text-lg text-blue-900 bg-white/80 px-2 rounded-md shadow-sm">a = ${state.a}</div>
                    <div class="absolute -right-14 top-1/2 -translate-y-1/2 font-black text-lg text-blue-900 bg-white/80 px-2 rounded-md shadow-sm rotate-90 origin-center whitespace-nowrap">b = ${state.b}</div>
                </div>
            `;
        } else if (type === 'cube_volume') {
            const volume = Math.pow(state.a, 3).toFixed(1);
            resultHtml = `V = a &times; a &times; a = <span class="text-4xl text-indigo-600 font-black">${volume}</span> cm³`;

            if (state.isLocked) {
                const baseVol = Math.pow(state.baseA, 3).toFixed(1);
                const ratio = (volume / baseVol).toFixed(1);
                resultHtml += `<div class="mt-2 text-lg font-bold text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-200 block">So sánh: Gấp <span class="text-2xl font-black">${ratio}</span> lần (${baseVol} cm³)</div>`;

                // Vẽ hình khối gốc (Isometric 2D projection)
                const bS = state.baseA * 5;
                visualHtml += `
                    <div class="absolute opacity-20 z-0" style="width: ${bS * 2}px; height: ${bS * 2}px; left: 50%; top: 50%; transform: translate(-50%, -50%);">
                        <div class="border-2 border-indigo-200 border-dashed w-full h-full relative" style="transform: skewY(-20deg);"></div>
                    </div>
                `;
            }

            // Vẽ hình khối hiện tại (Projected 2D)
            const s = state.a * 6; // Scale cho Cube
            visualHtml += `
                <div class="relative z-10 transition-all duration-300" style="width: ${s}px; height: ${s}px;">
                    <!-- Mặt trước -->
                    <div class="absolute inset-0 bg-indigo-500 border-2 border-indigo-700 shadow-lg flex items-center justify-center">
                        <span class="text-white font-black text-xl">${state.a}</span>
                    </div>
                    <!-- Mặt trên -->
                    <div class="absolute top-0 left-0 w-full h-[30%] bg-indigo-400 border-2 border-indigo-700 origin-bottom" style="transform: translateY(-100%) skewX(45deg);"></div>
                    <!-- Mặt phải -->
                    <div class="absolute top-0 right-0 h-full w-[30%] bg-indigo-600 border-2 border-indigo-700 origin-left" style="transform: translateX(100%) skewY(45deg);"></div>
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
            <button id="match-l-${id}-${idx}" onclick="Lesson.selectMatch('${id}', 'left', ${idx})" class="match-btn w-full p-4 mb-3 bg-white border-2 border-indigo-100 dark:border-slate-700 text-indigo-900 dark:text-slate-200 font-bold rounded-2xl shadow-sm text-center transition-all hover:-translate-y-1 hover:border-indigo-300 relative z-20">
                ${item}
            </button>
        `).join('');

        let rightHtml = rightItems.map((item, idx) => `
            <button id="match-r-${id}-${idx}" onclick="Lesson.selectMatch('${id}', 'right', ${idx})" class="match-btn w-full p-4 mb-3 bg-white border-2 border-fuchsia-100 dark:border-slate-700 text-fuchsia-900 dark:text-slate-200 font-bold rounded-2xl shadow-sm text-center transition-all hover:-translate-y-1 hover:border-fuchsia-300 relative z-20">
                ${item}
            </button>
        `).join('');

        return `
            <div class="matching-exercise p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-fuchsia-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] mt-6 relative animate-fade-in" id="match-ex-${id}">
                <div class="flex items-center gap-3 mb-6 relative z-10">
                    <span class="text-3xl">🔗</span>
                    <h3 class="text-xl font-bold text-gray-800 dark:text-slate-100">${title}</h3>
                </div>
                
                <div class="flex gap-4 md:gap-12 relative z-10" id="match-container-${id}">
                    <div class="flex-1" id="match-col-left-${id}">${leftHtml}</div>
                    <div class="flex-1" id="match-col-right-${id}">${rightHtml}</div>
                </div>
                
                <!-- SVG layer cho đường nối -->
                <svg id="match-canvas-${id}" class="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-70"></svg>
                
                <div class="mt-6 flex justify-end items-center gap-4 relative z-20">
                    <span id="match-feedback-${id}" class="text-sm font-bold opacity-0 transition-opacity"></span>
                    <button onclick="Lesson.checkMatching('${id}', '${safeParams}')" class="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-xl shadow-md transition-transform active:scale-95">Kiểm Tra</button>
                </div>
            </div>
            <!-- Auto Init State -->
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
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-blue-500 text-white rounded-lg flex items-center justify-center text-sm font-black shrink-0 mt-1">1</div>
                        <div class="flex-grow">
                            <label class="text-xs font-black text-blue-600 uppercase tracking-widest mb-1 block">Lời giải (Bài giải)</label>
                            <textarea id="wp-solution-${id}" rows="2" 
                                class="w-full p-3 rounded-xl border-2 border-blue-200 outline-none focus:border-blue-500 text-sm font-bold placeholder:text-gray-300 shadow-inner transition-all resize-none" 
                                placeholder="Ví dụ: Quãng đường ô tô đi được là:"></textarea>
                        </div>
                    </div>
                    
                    <!-- Bước 2: Phép tính -->
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-indigo-500 text-white rounded-lg flex items-center justify-center text-sm font-black shrink-0 mt-1">2</div>
                        <div class="flex-grow">
                            <label class="text-xs font-black text-indigo-600 uppercase tracking-widest mb-1 block">Phép tính</label>
                            <textarea id="wp-calc-${id}" rows="2" 
                                class="w-full p-3 rounded-xl border-2 border-indigo-200 outline-none focus:border-indigo-500 text-sm font-bold font-mono placeholder:text-gray-300 shadow-inner transition-all resize-none" 
                                placeholder="Ví dụ: 45 × 2.5 = 112.5 (km)"></textarea>
                        </div>
                    </div>
                    
                    <!-- Bước 3: Đáp số -->
                    <div class="flex items-start gap-3">
                        <div class="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-sm font-black shrink-0 mt-1">3</div>
                        <div class="flex-grow">
                            <label class="text-xs font-black text-emerald-600 uppercase tracking-widest mb-1 block">Đáp số</label>
                            <input type="text" id="wp-answer-${id}" 
                                class="w-full p-3 rounded-xl border-2 border-emerald-200 outline-none focus:border-emerald-500 text-sm font-bold placeholder:text-gray-300 shadow-inner transition-all" 
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
    }
};

window.Lesson = Lesson;
