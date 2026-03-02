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
            <div class="max-w-7xl mx-auto pb-24 px-4 pt-1">
                <!-- Slim Lesson Title: Centered & Blue -->
                <div class="text-center mb-3 animate-slide-down">
                    <h1 class="text-2xl md:text-3xl font-black text-blue-900 dark:text-blue-400 leading-tight tracking-tight uppercase">${lesson.title}</h1>
                </div>

                <!-- Tabs Navigation: Mảnh & Rộng (Khớp Navbar) -->
                <div class="flex justify-center mb-10 overflow-x-auto px-4 sticky top-16 z-40">
                    <div class="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl p-1 rounded-full border border-gray-100 dark:border-slate-800 shadow-xl shadow-blue-900/5 dark:shadow-slate-950/40 flex gap-1 w-full max-w-7xl px-8 items-center">
                        ${hasStudy ? `
                        <button id="tab-study" onclick="router.switchTab('study')" class="tab-btn active flex-1 py-3 rounded-full text-[14px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95">
                            <span class="text-base">📖</span> Tìm hiểu bài
                        </button>` : ''}
                        
                        ${hasPractice ? `
                        <button id="tab-practice" onclick="router.switchTab('practice')" class="tab-btn flex-1 py-3 rounded-full text-[14px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95 text-gray-400">
                            <span class="text-base">✍️</span> Luyện tập
                        </button>` : ''}
                        
                        ${hasQuiz ? `
                        <button id="tab-quiz" onclick="router.switchTab('quiz')" class="tab-btn flex-1 py-3 rounded-full text-[14px] font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95 text-gray-400">
                            <span class="text-base">🏆</span> Củng cố
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
                <div id="tab-content" class="lesson-content min-h-[600px] animate-fade-in px-4">
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
                <div class="flex items-center gap-1 text-emerald-600 font-bold ml-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                    <span>Tuyệt vời! Bạn tính đúng rồi.</span>
                </div>
            `;
            input.classList.add('border-emerald-500', 'text-emerald-600', 'bg-transparent');
            input.classList.remove('border-blue-400', 'text-emerald-700');
        } else {
            feedback.innerHTML = `
                <div class="flex items-center gap-1 text-orange-500 font-bold ml-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <span>Sai mất rồi. Thử lại nhé!</span>
                </div>
            `;
            input.classList.add('border-orange-500', 'text-orange-600', 'bg-transparent');
            input.classList.remove('border-blue-400', 'text-emerald-700');
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
    }
};

window.Lesson = Lesson;
