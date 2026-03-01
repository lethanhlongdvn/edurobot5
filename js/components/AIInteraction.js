// js/components/AIInteraction.js - Thành phần Chat và Tutor AI
import { AI } from '../ai.js';

export const AIInteraction = {
    quizStates: {},

    toggleChat() {
        const chatWindow = document.getElementById('ai-chat-window');
        if (chatWindow.classList.contains('hidden')) {
            chatWindow.classList.remove('hidden');
            chatWindow.classList.add('flex');
            // Focus input khi mở chat
            setTimeout(() => {
                const input = document.getElementById('ai-chat-input');
                if (input) input.focus();
            }, 100);
        } else {
            chatWindow.classList.add('hidden');
            chatWindow.classList.remove('flex');
        }
    },

    async sendAiMessage() {
        const input = document.getElementById('ai-chat-input');
        const message = input.value.trim();
        if (!message) return;

        const chatMessages = document.getElementById('ai-chat-messages');
        const bcCurrent = document.getElementById('breadcrumb-current');
        const lessonTitle = bcCurrent ? bcCurrent.innerText : "Tổng quát";

        // Lấy nội dung bài học hiện tại để AI nghiên cứu trước khi trả lời
        const lessonData = window.currentLessonData;
        const lessonContent = lessonData ? (lessonData.content || '') + '\n' + (lessonData.practice || '') : '';

        // Thêm tin nhắn học sinh
        chatMessages.innerHTML += `
            <div class="flex justify-end mb-4 animate-slide-up">
                <div class="bg-blue-600 text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-medium shadow-md">
                    ${message}
                </div>
            </div>
        `;

        input.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Loading
        const loadingId = 'ai-loading-' + Date.now();
        chatMessages.innerHTML += `
            <div id="${loadingId}" class="flex mb-4 animate-fade-in">
                <div class="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-gray-500 text-xs italic shadow-sm flex items-center gap-2">
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div class="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    Đang suy nghĩ...
                </div>
            </div>
        `;
        chatMessages.scrollTop = chatMessages.scrollHeight;

        try {
            const response = await AI.ask(message, lessonTitle, lessonContent);
            document.getElementById(loadingId).remove();

            chatMessages.innerHTML += `
                <div class="flex mb-4 animate-slide-up">
                    <div class="bg-white dark:bg-slate-800 border border-blue-100 dark:border-slate-700 p-4 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-gray-700 dark:text-slate-200 font-medium shadow-sm leading-relaxed">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="text-[10px] font-black uppercase text-blue-600 dark:text-blue-400 tracking-widest">AI E</span>
                        </div>
                        ${response}
                    </div>
                </div>
            `;
            chatMessages.scrollTop = chatMessages.scrollHeight;
        } catch (e) {
            document.getElementById(loadingId).innerText = "Lỗi kết nối Robot!";
        }
    },

    renderTutor(id, requirement, placeholder = "Con hãy nhập câu trả lời hoặc nội dung bài làm vào đây nhé...") {
        return `
            <div class="tutor-container my-12 animate-fade-in" id="tutor-${id}">
                <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[48px] p-10 md:p-14 border border-blue-100/50 relative overflow-hidden group">
                    <div class="absolute -right-4 -top-4 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                    <div class="flex flex-col md:flex-row items-center gap-10 relative z-10">
                        <div class="shrink-0">
                            <div class="w-24 h-24 bg-blue-600 rounded-[32px] flex items-center justify-center text-5xl font-black text-white shadow-xl shadow-blue-900/5 transform group-hover:rotate-6 transition-transform">E</div>
                        </div>
                        <div class="flex-grow text-center md:text-left">
                            <h4 class="text-2xl font-black text-blue-900 mb-4 tracking-tight">EduRobot đang đợi bài của bạn!</h4>
                            <p class="text-blue-700/70 font-bold uppercase text-[10px] tracking-[0.2em] mb-8">${requirement}</p>
                             <div class="flex flex-col md:flex-row gap-5">
                                <textarea id="tutor-input-${id}" placeholder="${placeholder}" 
                                    class="flex-grow bg-white/80 dark:bg-slate-800/80 border-none rounded-[32px] px-8 py-6 text-sm font-bold text-gray-800 dark:text-slate-100 min-h-[150px] shadow-inner focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-blue-200"></textarea>
                                <button onclick="AIInteraction.submitTutor('${id}', '${requirement.replace(/'/g, "\\'")}')" 
                                    class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-[32px] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-500/20 transition-all active:scale-95 shrink-0 h-fit self-end group">
                                    NỘP BÀI CHO EDUROBOT <span class="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </div>
                            <div id="tutor-response-${id}" class="mt-8 hidden animate-fade-in"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    async submitTutor(id, requirement) {
        const input = document.getElementById(`tutor-input-${id}`);
        const responseBox = document.getElementById(`tutor-response-${id}`);
        const studentWork = input.value.trim();

        if (!studentWork) {
            alert("Bạn vui lòng nhập câu trả lời nhé!");
            return;
        }

        const btn = event.currentTarget;
        const originalHtml = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = `<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>`;

        try {
            const bcCurrent = document.getElementById('breadcrumb-current');
            const lessonTitle = bcCurrent ? bcCurrent.innerText : "Toán lớp 5";

            // Lấy nội dung bài học để AI chấm bài chính xác hơn
            const lessonData = window.currentLessonData;
            const lessonContent = lessonData ? (lessonData.content || '') + '\n' + (lessonData.practice || '') : '';

            responseBox.classList.remove('hidden');
            responseBox.innerHTML = `
                <div class="bg-blue-100/50 p-4 rounded-2xl flex items-center gap-3 italic text-blue-600 text-xs font-bold">
                    <div class="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    EduRobot đang xem bài của bạn...
                </div>
            `;

            const feedback = await AI.tutor(studentWork, lessonTitle, requirement, lessonContent);

            responseBox.innerHTML = `
                <div class="bg-white dark:bg-slate-800 border-2 border-blue-500 p-6 rounded-[28px] shadow-lg shadow-blue-100 dark:shadow-blue-900/20 animate-slide-up relative">
                    <div class="absolute -top-3 left-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Nhận xét từ EduRobot</div>
                    <div class="text-sm font-medium text-gray-700 dark:text-slate-200 leading-relaxed pt-2">${feedback.replace(/\n/g, '<br>')}</div>
                    <button 
                        onclick="this.parentElement.parentElement.classList.add('hidden')"
                        class="mt-4 text-[10px] font-black text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 uppercase tracking-widest transition-colors"
                    >Đóng nhận xét</button>
                </div>
            `;
        } catch (e) {
            responseBox.innerHTML = `<div class="text-red-500 font-bold p-4">Lỗi rồi! Bạn hãy thử lại sau nhé.</div>`;
        } finally {
            btn.disabled = false;
            btn.innerHTML = originalHtml;
        }
    },

    showAiModal(title, content) {
        let modal = document.getElementById('ai-modal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'ai-modal';
            modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md hidden animate-fade-in';
            document.body.appendChild(modal);
        }

        modal.innerHTML = `
            <div class="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-[40px] shadow-2xl overflow-hidden animate-scale-up border border-white/20 dark:border-slate-800">
                <div class="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 flex justify-between items-center text-white">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl font-black text-white">E</div>
                        <div>
                            <h3 class="text-xl font-black">${title}</h3>
                            <p class="text-[10px] font-bold uppercase tracking-widest opacity-70">Phản hồi thông minh từ AI E</p>
                        </div>
                    </div>
                    <button onclick="AIInteraction.closeAiModal()" class="w-10 h-10 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <div class="p-8 md:p-12 max-h-[60vh] overflow-y-auto">
                    <div class="text-lg font-medium text-gray-700 dark:text-slate-200 leading-relaxed">${content}</div>
                </div>
                <div class="p-6 bg-gray-50 dark:bg-slate-800 border-t border-gray-100 dark:border-slate-700 flex justify-end">
                    <button onclick="AIInteraction.closeAiModal()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-blue-200">Đã hiểu bài!</button>
                </div>
            </div>
        `;
        modal.classList.remove('hidden');
    },

    closeAiModal() {
        const modal = document.getElementById('ai-modal');
        if (modal) modal.classList.add('hidden');
    },

    // Hệ thống Chat Quiz mới (Multi-turn)
    renderChatQuiz(id, lessonKey) {
        return `
            <div id="chat-quiz-${id}" class="my-8 animate-fade-in chat-quiz-container">
                <div class="bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[40px] p-10 md:p-12 shadow-2xl relative overflow-hidden border border-white/10 group">
                    <div class="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-1000"></div>
                    <div class="relative z-10">
                        <div class="flex items-center gap-5 mb-8">
                            <div class="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl border border-white/20 font-black text-white">E</div>
                            <div>
                                <h4 class="text-xl font-black text-white leading-tight">AI E tương tác</h4>
                                <p class="text-[10px] font-bold text-blue-200 uppercase tracking-[0.2em]">Ôn tập kiến thức thông minh</p>
                            </div>
                        </div>
                        <div id="quiz-chat-area-${id}" class="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-4 scroll-smooth">
                            <div class="flex animate-slide-up">
                                <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl rounded-tl-none text-white font-medium text-sm leading-relaxed max-w-[85%]">
                                    Chào bạn! Mình rất vui được hỗ trợ bạn ôn lại kiến thức. Bạn đã sẵn sàng để bắt đầu thử thách chưa?
                                </div>
                            </div>
                        </div>
                        <div id="quiz-input-area-${id}" class="flex justify-center">
                            <button onclick="AIInteraction.startChatQuiz('${id}', '${lessonKey}')" 
                                class="bg-white text-blue-900 px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
                                Mình sẵn sàng!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    startChatQuiz(id, lessonKey) {
        console.log('Bắt đầu Chat Quiz:', id, lessonKey);
        let lesson = window.currentLessonData;

        // Fallback: Tìm lại nếu bị mất (do refresh hoặc navigate)
        if (!lesson && window.router && window.router.currentSubject && window.router.currentLessonPeriod) {
            const lessons = window.lessons || (window.router.lessons); // Tùy vào cách data.js được global hóa
            if (lessons && lessons[window.router.currentSubject]) {
                lesson = lessons[window.router.currentSubject].find(l => l.period === window.router.currentLessonPeriod);
            }
        }

        console.log('Dữ liệu bài học tìm thấy:', lesson);

        if (!lesson || !lesson.chatQuizzes || !lesson.chatQuizzes[lessonKey]) {
            console.error('Không tìm thấy dữ liệu Quiz cho key:', lessonKey);
            return;
        }

        const quizData = lesson.chatQuizzes[lessonKey];
        this.quizStates[id] = { index: 0, questions: quizData.questions };

        const chatArea = document.getElementById(`quiz-chat-area-${id}`);
        const inputArea = document.getElementById(`quiz-input-area-${id}`);

        // Thêm tin nhắn của học sinh
        chatArea.innerHTML += `
            <div class="flex justify-end animate-slide-up">
                <div class="bg-blue-500 text-white p-4 rounded-2xl rounded-tr-none text-sm font-bold shadow-lg">
                    Mình sẵn sàng!
                </div>
            </div>
        `;

        setTimeout(() => {
            const firstQ = quizData.questions[0];
            chatArea.innerHTML += `
                <div class="flex animate-slide-up">
                    <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl rounded-tl-none text-white font-medium text-sm leading-relaxed max-w-[85%]">
                         ${firstQ.question}
                    </div>
                </div>
            `;

            inputArea.innerHTML = `
                <div class="relative w-full max-w-md">
                    <input type="text" id="quiz-input-field-${id}" 
                        class="w-full bg-white/20 border-2 border-white/30 rounded-2xl px-6 py-4 text-white font-bold placeholder:text-blue-200 outline-none focus:border-white focus:bg-white/30 transition-all shadow-inner"
                        placeholder="Nhập câu trả lời..."
                        onkeypress="if(event.key === 'Enter') AIInteraction.submitChatQuizAnswer('${id}', '${lessonKey}')">
                    <button onclick="AIInteraction.submitChatQuizAnswer('${id}', '${lessonKey}')" 
                        class="absolute right-2 top-2 bottom-2 bg-white text-blue-900 px-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors">
                        Gửi
                    </button>
                </div>
            `;
            document.getElementById(`quiz-input-field-${id}`).focus();
            chatArea.scrollTop = chatArea.scrollHeight;
        }, 600);
    },

    async submitChatQuizAnswer(id, lessonKey) {
        const state = this.quizStates[id];
        const input = document.getElementById(`quiz-input-field-${id}`);
        const chatArea = document.getElementById(`quiz-chat-area-${id}`);
        const inputArea = document.getElementById(`quiz-input-area-${id}`);
        const answer = input.value.trim();

        if (!answer) return;

        // Hiển thị câu trả lời của học sinh
        chatArea.innerHTML += `
            <div class="flex justify-end animate-slide-up">
                <div class="bg-blue-500 text-white p-4 rounded-2xl rounded-tr-none text-sm font-bold shadow-lg">
                    ${answer}
                </div>
            </div>
        `;
        input.value = '';
        chatArea.scrollTop = chatArea.scrollHeight;

        const currentQ = state.questions[state.index];
        const isCorrect = answer.toLowerCase().replace(/\s/g, '').replace(/,/g, '.') === currentQ.answer.toLowerCase().replace(/\s/g, '').replace(/,/g, '.');

        // Hiệu ứng Loading
        const loadingId = 'quiz-loading-' + Date.now();
        chatArea.innerHTML += `
            <div id="${loadingId}" class="flex animate-fade-in">
                <div class="bg-white/5 p-3 rounded-2xl text-blue-200 text-[10px] italic flex items-center gap-2">
                    <div class="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></div>
                    AI E đang xem...
                </div>
            </div>
        `;
        chatArea.scrollTop = chatArea.scrollHeight;

        try {
            // Có thể dùng AI để nhận xét nếu muốn, nhưng ở đây dùng feedback cứng để nhanh & ổn định
            const feedback = isCorrect
                ? (currentQ.correctMsg || "Tuyệt vời! Bạn trả lời đúng rồi.")
                : (currentQ.wrongMsg || `Gần đúng rồi, kết quả chính xác phải là ${currentQ.answer}. Bạn cố gắng câu sau nhé!`);

            setTimeout(() => {
                document.getElementById(loadingId).remove();
                chatArea.innerHTML += `
                    <div class="flex animate-slide-up">
                        <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl rounded-tl-none text-white font-medium text-sm leading-relaxed max-w-[85%]">
                            <span class="block mb-2 text-lg">${isCorrect ? '🌟' : '💡'}</span>
                            ${feedback}
                        </div>
                    </div>
                `;
                chatArea.scrollTop = chatArea.scrollHeight;

                state.index++;
                if (state.index < state.questions.length) {
                    // Tiếp tục câu tiếp theo sau 1.5s
                    setTimeout(() => {
                        const nextQ = state.questions[state.index];
                        chatArea.innerHTML += `
                            <div class="flex animate-slide-up">
                                <div class="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl rounded-tl-none text-white font-medium text-sm leading-relaxed max-w-[85%]">
                                    ${nextQ.question}
                                </div>
                            </div>
                        `;
                        chatArea.scrollTop = chatArea.scrollHeight;
                        document.getElementById(`quiz-input-field-${id}`).focus();
                    }, 1500);
                } else {
                    // Kết thúc
                    setTimeout(() => {
                        chatArea.innerHTML += `
                            <div class="flex animate-slide-up">
                                <div class="bg-gradient-to-r from-emerald-400 to-teal-500 p-6 rounded-3xl text-white font-black text-center w-full shadow-xl">
                                    🎉 Chúc mừng bạn đã hoàn thành phần ôn tập!
                                </div>
                            </div>
                        `;
                        inputArea.innerHTML = `
                             <button onclick="AIInteraction.startChatQuiz('${id}', '${lessonKey}')" 
                                class="bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all">
                                Ôn tập lại
                            </button>
                        `;
                        chatArea.scrollTop = chatArea.scrollHeight;
                    }, 1500);
                }
            }, 800);
        } catch (e) {
            document.getElementById(loadingId).innerHTML = "Lỗi kết nối!";
        }
    }
};

window.AIInteraction = AIInteraction;
