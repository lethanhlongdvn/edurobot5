// js/components/Quiz.js - Hệ thống kiểm tra (Quiz) One-by-One
import { AIInteraction } from './AIInteraction.js';

export const Quiz = {
    renderQuizContainer(lesson) {
        return `
            <div class="glass-card rounded-[40px] p-6 md:p-12 bg-white min-h-[500px] animate-fade-in relative overflow-hidden">
                <!-- Background Decoration -->
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl opacity-50 border-orange-200"></div>
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50 border-blue-200"></div>
                
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12 relative z-10">
                    <div class="flex items-center gap-4">
                        <div class="w-2 h-10 md:h-12 bg-orange-500 rounded-full"></div>
                        <h2 class="text-3xl md:text-4xl font-black text-gray-900 m-0 tracking-tight">Thử thách Củng cố</h2>
                    </div>
                    
                    <div class="flex gap-4">
                        <div class="flex flex-col items-center px-4 py-2 bg-blue-50 rounded-2xl border-2 border-blue-100 min-w-[100px]">
                            <span class="text-[10px] md:text-xs font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Điểm số</span>
                            <span id="quiz-score-display" class="text-xl md:text-3xl font-black text-blue-600 leading-none">0</span>
                        </div>
                        <div class="flex flex-col items-center px-4 py-2 bg-orange-50 rounded-2xl border-2 border-orange-100 min-w-[100px]">
                            <span class="text-[10px] md:text-xs font-black text-orange-400 uppercase tracking-widest leading-none mb-1">Tiến độ</span>
                            <div class="flex items-baseline gap-1">
                                <span id="quiz-progress-current" class="text-xl md:text-3xl font-black text-orange-600 leading-none">1</span>
                                <span class="text-sm md:text-lg font-bold text-orange-300">/10</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-progress-bar" class="w-full h-2 md:h-3 bg-gray-100 rounded-full mb-8 overflow-hidden relative z-10">
                    <div id="quiz-progress-fill" class="h-full bg-orange-500 rounded-full transition-all duration-500 w-[10%]"></div>
                </div>

                <div id="quiz-content" class="relative z-10 min-h-[300px] flex flex-col justify-center">
                    <!-- Câu hỏi sẽ được nạp tại đây -->
                </div>
            </div>
        `;
    },

    currentQuiz: [],
    currentIndex: 0,
    score: 0,
    isProcessing: false,

    initQuiz(lesson) {
        const pool = lesson.quizPool || [];
        if (pool.length === 0) {
            document.getElementById('quiz-content').innerHTML = `
                <div class="text-center py-20 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200">
                    <p class="text-xl md:text-2xl text-gray-400 font-bold italic">Chưa có dữ liệu câu hỏi cho bài học này...</p>
                </div>
            `;
            document.getElementById('quiz-progress-bar').style.display = 'none';
            document.querySelector('.flex.gap-4').style.display = 'none'; // Hide score/progress counters
            return;
        }

        // Chọn 10 câu (ví dụ 5 dễ, 4 TB, 1 khó)
        const lv1 = pool.filter(q => q.level === 1).sort(() => 0.5 - Math.random()).slice(0, 5);
        const lv2 = pool.filter(q => q.level === 2).sort(() => 0.5 - Math.random()).slice(0, 4);
        const lv3 = pool.filter(q => q.level === 3).sort(() => 0.5 - Math.random()).slice(0, 1);

        this.currentQuiz = [...lv1, ...lv2, ...lv3];
        // Nếu không đủ bộ phân cấp thì cứ lấy đủ 10 câu ngẫu nhiên
        if(this.currentQuiz.length < 10) {
             this.currentQuiz = pool.sort(() => 0.5 - Math.random()).slice(0, 10);
        }
        
        // Xáo trộn lần cuối
        this.currentQuiz.sort(() => 0.5 - Math.random());
        
        // Cắt đúng 10 câu phòng hờ
        if(this.currentQuiz.length > 10) this.currentQuiz = this.currentQuiz.slice(0, 10);

        this.currentIndex = 0;
        this.score = 0;
        this.isProcessing = false;

        this.renderCurrentQuestion();
    },

    renderCurrentQuestion() {
        if (this.currentIndex >= this.currentQuiz.length) {
            this.finishQuiz();
            return;
        }

        // Update progress UI
        document.getElementById('quiz-progress-current').innerText = this.currentIndex + 1;
        document.getElementById('quiz-score-display').innerText = this.score;
        document.getElementById('quiz-progress-fill').style.width = `${((this.currentIndex) / this.currentQuiz.length) * 100}%`;

        const q = this.currentQuiz[this.currentIndex];
        const container = document.getElementById('quiz-content');
        
        // Tối ưu UI cho TV: text-2xl/3xl, card to, gap lớn
        container.innerHTML = `
            <div class="animate-slide-in-right">
                <h3 class="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 md:mb-12 leading-relaxed text-center sm:text-left">
                    <span class="text-orange-500 font-black mr-2">Q${this.currentIndex + 1}.</span> ${q.question}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" id="opts-container">
                    ${q.options.map((opt, optIdx) => `
                         <button onclick="Quiz.selectAnswer(${optIdx})" class="quiz-opt-btn relative w-full text-left p-6 md:p-8 rounded-[24px] md:rounded-[32px] border-4 border-gray-100 bg-gray-50 hover:bg-orange-50 hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all group overflow-hidden">
                            <div class="flex items-center">
                                <div class="w-8 h-8 md:w-10 md:h-10 border-4 border-gray-200 rounded-full flex-shrink-0 mr-4 md:mr-6 group-hover:border-orange-400 transition-colors flex items-center justify-center opt-indicator"></div>
                                <span class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 group-hover:text-orange-900 transition-colors leading-tight">${opt}</span>
                            </div>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    selectAnswer(selectedIndex) {
        if (this.isProcessing) return;
        this.isProcessing = true;

        const q = this.currentQuiz[this.currentIndex];
        const isCorrect = (selectedIndex === q.answer);
        
        if (isCorrect) {
            this.score += 10;
            document.getElementById('quiz-score-display').innerText = this.score;
            document.getElementById('quiz-score-display').classList.add('animate-bounce-subtle');
            setTimeout(() => document.getElementById('quiz-score-display').classList.remove('animate-bounce-subtle'), 500);
            if(typeof confetti === 'function') confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        }

        const buttons = document.querySelectorAll('.quiz-opt-btn');
        const indicators = document.querySelectorAll('.opt-indicator');
        
        // Disable all buttons immediately
        buttons.forEach(btn => {
            btn.onclick = null;
            btn.classList.remove('hover:bg-orange-50', 'hover:border-orange-200', 'hover:-translate-y-1', 'hover:shadow-lg', 'cursor-pointer');
            btn.classList.add('cursor-default', 'opacity-60');
        });

        // Bôi màu đáp án
        buttons.forEach((btn, idx) => {
            const indicatorEl = indicators[idx];
            
            if (idx === q.answer) {
                // Đáp án đúng luôn xanh
                btn.classList.remove('border-gray-100', 'bg-gray-50', 'opacity-60');
                btn.classList.add('border-emerald-500', 'bg-emerald-50', 'shadow-md', 'shadow-emerald-100', 'scale-[1.02]', 'opacity-100', 'z-10');
                btn.querySelector('span').classList.add('!text-emerald-800');
                indicatorEl.classList.add('border-emerald-500', 'bg-emerald-500');
                indicatorEl.innerHTML = `<svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>`;
            } else if (idx === selectedIndex && !isCorrect) {
                // Nhấn sai chỗ nào thì chỗ đó đỏ
                btn.classList.remove('border-gray-100', 'bg-gray-50', 'opacity-60');
                btn.classList.add('border-red-500', 'bg-red-50', 'opacity-100');
                btn.querySelector('span').classList.add('!text-red-800');
                indicatorEl.classList.add('border-red-500', 'bg-red-500');
                indicatorEl.innerHTML = `<svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12"></path></svg>`;
            }
        });

        // Chờ 1.5s - 2s rồi qua câu mới
        const waitTime = isCorrect ? 1500 : 2500; // Khuyến khích đọc câu sai lâu hơn xíu
        
        setTimeout(() => {
            const currentContainer = document.querySelector('.animate-slide-in-right');
            currentContainer.classList.remove('animate-slide-in-right');
            currentContainer.classList.add('animate-slide-out-left');
            
            setTimeout(() => {
                this.currentIndex++;
                this.isProcessing = false;
                this.renderCurrentQuestion();
            }, 300); // 300ms cho animation slide ra
        }, waitTime);
    },

    finishQuiz() {
        document.getElementById('quiz-progress-fill').style.width = '100%';
        
        const container = document.getElementById('quiz-content');
        container.innerHTML = `
            <div class="text-center animate-fade-in py-8">
                <div class="text-6xl md:text-8xl mb-6">${this.score >= 80 ? '🏆' : (this.score >= 50 ? '🌟' : '💪')}</div>
                <h3 class="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Hoàn thành xuất sắc!</h3>
                <p class="text-xl md:text-3xl font-bold text-gray-500 mb-12">Điểm của bạn: <span class="${this.score >= 80 ? 'text-emerald-600' : 'text-orange-600'} text-4xl md:text-6xl font-black bg-white px-4 py-2 rounded-2xl shadow-sm border-2 border-gray-100">${this.score} / 100</span></p>
                
                <div class="flex justify-center">
                    <button id="btn-submit-final-score" onclick="Quiz.submitToFirebase()" class="bg-blue-600 hover:bg-blue-700 text-white px-10 md:px-16 py-5 md:py-6 rounded-[32px] font-black text-xl md:text-2xl uppercase tracking-widest shadow-2xl shadow-blue-300 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4">
                        Nộp điểm cho Cô/Thầy <span class="text-3xl">🚀</span>
                    </button>
                </div>
            </div>
        `;
        
        if(typeof celebrate === 'function') celebrate();
        else if (typeof confetti === 'function') setTimeout(() => confetti({ particleCount: 150, spread: 100 }), 300);
    },
    
    submitToFirebase() {
        const fullContent = `Trắc nghiệm tổng: ${this.score} điểm (${this.score/10}/10 câu đúng).`;
        const score = this.score;
        
        if (window.submitMathLesson) {
            window.submitMathLesson(fullContent, score, "btn-submit-final-score");
        } else {
            alert("Bạn hãy tải lại trang để nộp điểm nhé! (Hệ thống nộp bài đang bận)");
        }
    }
};

window.Quiz = Quiz;
