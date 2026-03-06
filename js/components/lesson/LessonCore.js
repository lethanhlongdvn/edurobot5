// js/components/lesson/LessonCore.js
import { common } from '../common.js';

export const LessonCore = {
    renderLessonPage(subject, lesson, allSubjects = []) {
        const hasStudy = !!(typeof lesson.content === 'function' || (typeof lesson.content === 'string' && lesson.content.trim()));
        const hasPractice = !!(typeof lesson.practice === 'function' || lesson.practice?.trim());
        const hasQuiz = !!(lesson.quizPool && lesson.quizPool.length > 0);
        const hasPptx = !!(lesson.pptLink);
        
        let isTeacher = false;
        try {
            isTeacher = localStorage.getItem('userRole') === 'teacher';
        } catch(e) {}

        return `
            <div class="max-w-full mx-auto pb-10 px-1 pt-1">
                <div class="text-center mb-6 animate-slide-down flex items-center justify-center gap-4 relative">
                    <h1 class="${lesson.title.length > 60 ? 'text-xl md:text-2xl' : lesson.title.length > 35 ? 'text-2xl md:text-3xl' : 'text-3xl md:text-5xl'} font-black text-blue-900 dark:text-blue-400 leading-tight tracking-tight uppercase">${lesson.title}</h1>
                    ${isTeacher ? '<span class="hidden md:inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-orange-200 shadow-sm absolute right-0">Chế độ Giáo viên</span>' : ''}
                </div>

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
                        
                        ${(isTeacher && hasPptx) ? `
                        <button id="tab-pptx" onclick="router.switchTab('pptx')" class="tab-btn flex-1 py-4 rounded-full text-[16px] md:text-xl font-black uppercase tracking-[0.1em] transition-all flex items-center justify-center gap-2 active:scale-95 text-orange-500 bg-orange-50/50 border border-orange-200">
                            <span class="text-2xl">🎦</span> Bài Giảng
                        </button>` : ''}

                        ${lesson.audio ? `
                        <button id="btn-audio-play" onclick="router.toggleAudio()" title="Đọc mẫu" class="w-10 h-10 shrink-0 ml-1 bg-gradient-to-br from-indigo-50 to-cyan-50 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-blue-200/50 dark:shadow-blue-900/30">
                            <svg id="icon-audio-play" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
                            <svg id="icon-audio-pause" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                        </button>
                        <audio id="lesson-audio" src="${lesson.audio}" preload="metadata"></audio>
                        ` : ''}
                    </div>
                </div>

                <div id="tab-content" class="lesson-content min-h-[600px] animate-fade-in px-1"></div>

                <button onclick="AIInteraction.toggleChat()" class="fixed bottom-6 right-6 md:bottom-10 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl shadow-2xl shadow-blue-500/40 flex items-center justify-center text-3xl font-black transition-all active:scale-90 z-[9999] group border-4 border-white/20">
                    <span class="group-hover:scale-125 transition-transform">E</span>
                    <div class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-4 border-white animate-bounce"></div>
                </button>

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

    renderEmptyState() {
        return `
        <div class="py-32 text-center animate-fade-in">
            <div class="text-6xl mb-8 opacity-20">🏝️</div>
            <h3 class="text-2xl font-black text-gray-300 mb-2">Vùng đất này chưa có bài học</h3>
            <p class="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">EduRobot đang trên đường thám hiểm</p>
        </div>
        `;
    },

    _initFillBlanksSlotClick() {
        document.addEventListener('click', (e) => {
            const slot = e.target.closest('[id^="fb-slot-"]');
            if (!slot) return;
            const parts = slot.id.split('-');
            const id = parts[2];
            const state = window[`fbState_${id}`];
            if (!state || !state.selectedWord) return;

            if (slot.dataset.value) {
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

            state.selectedBtn.classList.add('hidden');
            state.selectedBtn.classList.remove('ring-4', 'ring-amber-400', 'scale-105');
            state.selectedWord = null;
            state.selectedBtn = null;
        });
    },

    // Inject Fullscreen capabilities for iframe
    _initFullscreenPPTX() {
        window.toggleFullscreenPPTX = function() {
            const container = document.getElementById('pptx-container');
            if (!container) return;

            if (!document.fullscreenElement) {
                if (container.requestFullscreen) {
                    container.requestFullscreen().catch(err => {
                        console.error(`Error attempting to enable fullscreen: ${err.message}`);
                    });
                } else if (container.mozRequestFullScreen) { /* Firefox */
                    container.mozRequestFullScreen();
                } else if (container.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    container.webkitRequestFullscreen();
                } else if (container.msRequestFullscreen) { /* IE/Edge */
                    container.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        };

        // Listen for fullscreen change to update buttons if necessary
        document.addEventListener('fullscreenchange', () => {
            const btnExpand = document.getElementById('btn-expand-pptx');
            const btnCollapse = document.getElementById('btn-collapse-pptx');
            if (!btnExpand || !btnCollapse) return;

            if (document.fullscreenElement) {
                btnExpand.classList.add('hidden');
                btnCollapse.classList.remove('hidden');
            } else {
                btnExpand.classList.remove('hidden');
                btnCollapse.classList.add('hidden');
            }
        });
    }
};

if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        if (LessonCore._initFullscreenPPTX) LessonCore._initFullscreenPPTX();
    });
}
