// js/components/Quiz.js - Hệ thống kiểm tra (Quiz) One-by-One
import { AIInteraction } from './AIInteraction.js';

export const Quiz = {
    renderQuizContainer(lesson) {
        return `
            <div class="glass-card rounded-[40px] p-6 md:p-12 bg-white dark:bg-slate-900 min-h-[500px] animate-fade-in relative overflow-hidden">
                <!-- Background Decoration -->
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 dark:bg-orange-900/10 rounded-full blur-3xl opacity-50 border-orange-200 dark:border-orange-800/30"></div>
                <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-50 border-blue-200 dark:border-blue-800/30"></div>
                
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 md:mb-12 relative z-10">
                    <div class="flex items-center gap-4">
                        <div class="w-2 h-10 md:h-12 bg-orange-500 rounded-full"></div>
                        <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white m-0 tracking-tight">Thử thách Củng cố</h2>
                    </div>
                    
                    <div class="flex gap-4 flex-wrap justify-end">
                        <div id="streak-container" class="hidden flex-col items-center px-4 py-2 bg-rose-50 rounded-2xl border-2 border-rose-100 min-w-[90px] animate-pop-in">
                            <span class="text-[10px] md:text-xs font-black text-rose-400 uppercase tracking-widest leading-none mb-1">Combo</span>
                            <span id="quiz-streak-display" class="text-xl md:text-3xl font-black text-rose-600 leading-none">0🔥</span>
                        </div>
                        <div class="flex flex-col items-center px-4 py-2 bg-blue-50 rounded-2xl border-2 border-blue-100 min-w-[90px]">
                            <span class="text-[10px] md:text-xs font-black text-blue-400 uppercase tracking-widest leading-none mb-1">Điểm số</span>
                            <span id="quiz-score-display" class="text-xl md:text-3xl font-black text-blue-600 leading-none">0</span>
                        </div>
                        <div class="flex flex-col items-center px-4 py-2 bg-orange-50 rounded-2xl border-2 border-orange-100 min-w-[90px]">
                            <span class="text-[10px] md:text-xs font-black text-orange-400 uppercase tracking-widest leading-none mb-1">Tiến độ</span>
                            <div class="flex items-baseline gap-1">
                                <span id="quiz-progress-current" class="text-xl md:text-3xl font-black text-orange-600 leading-none">1</span>
                                <span id="quiz-progress-total" class="text-sm md:text-lg font-bold text-orange-300">/10</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-progress-bar" class="w-full h-2 md:h-3 bg-gray-100 dark:bg-slate-800 rounded-full mb-8 overflow-hidden relative z-10">
                    <div id="quiz-progress-fill" class="h-full bg-orange-500 rounded-full transition-all duration-500 w-[10%]"></div>
                </div>

                <div id="quiz-content" class="relative z-10 min-h-[300px] flex flex-col justify-center">
                    <!-- Câu hỏi sẽ được nạp tại đây -->
                </div>
                
                <!-- Gamification Visual Feedback Layer -->
                <div id="quiz-gamification-layer" class="absolute inset-0 pointer-events-none z-[100] flex items-center justify-center"></div>
            </div>

            <!-- Gamification Leaderboard: Bảng Vàng Xếp Hạng -->
            <div class="mt-8 max-w-4xl mx-auto">
                <div class="glass-card rounded-[32px] p-6 bg-white/80 dark:bg-slate-900/80 shadow-lg">
                    <div class="flex items-center gap-4 mb-6 relative">
                        <div class="w-12 h-12 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-amber-200">🏆</div>
                        <h3 class="text-2xl md:text-3xl font-black text-amber-600 uppercase tracking-tight">Bảng Vàng Xuất Sắc</h3>
                        <div class="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 text-xs font-bold text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm">
                            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                            Trực tiếp (10 Top)
                        </div>
                    </div>
                    <div id="quiz-leaderboard-list" class="flex flex-col gap-3">
                        <div class="text-center py-6 text-gray-400 text-sm font-bold uppercase tracking-widest animate-pulse">Đang tải danh sách cao thủ...</div>
                    </div>
                </div>
            </div>
        `;
    },

    currentQuiz: [],
    currentIndex: 0,
    score: 0,
    streak: 0,
    isProcessing: false,
    audioCtx: null,

    playSFX(type) {
        try {
            if (!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            if (this.audioCtx.state === 'suspended') this.audioCtx.resume();

            const o = this.audioCtx.createOscillator();
            const g = this.audioCtx.createGain();
            o.connect(g);
            g.connect(this.audioCtx.destination);

            const now = this.audioCtx.currentTime;

            if (type === 'correct') {
                o.type = 'sine';
                o.frequency.setValueAtTime(600, now);
                o.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
                g.gain.setValueAtTime(0.3, now);
                g.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                o.start(now); o.stop(now + 0.3);
            } else if (type === 'wrong') {
                o.type = 'sawtooth';
                o.frequency.setValueAtTime(300, now);
                o.frequency.exponentialRampToValueAtTime(150, now + 0.3);
                g.gain.setValueAtTime(0.3, now);
                g.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
                o.start(now); o.stop(now + 0.4);
            } else if (type === 'streak') {
                o.type = 'square';
                o.frequency.setValueAtTime(400, now);
                o.frequency.setValueAtTime(600, now + 0.1);
                o.frequency.setValueAtTime(1200, now + 0.2);
                g.gain.setValueAtTime(0.2, now);
                g.gain.linearRampToValueAtTime(0.01, now + 0.4);
                o.start(now); o.stop(now + 0.4);
            }
        } catch (e) { console.log('WebAudio API not responding:', e); }
    },

    showLottieFeedback(isCorrect) {
        const layer = document.getElementById('quiz-gamification-layer');
        if (!layer) return;

        layer.innerHTML = ''; // clear past
        const animControl = document.createElement('div');
        animControl.className = 'animate-pop-in duration-300 flex flex-col items-center';

        if (isCorrect) {
            animControl.innerHTML = `
                <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_xsnsvpbs.json" background="transparent" speed="1.5" style="width: 250px; height: 250px;" autoplay></lottie-player>
                <div class="text-3xl md:text-5xl font-black text-emerald-500 uppercase tracking-widest drop-shadow-xl -mt-8 bg-white/80 px-6 py-2 rounded-full border-4 border-emerald-400">Chính xác</div>
            `;
        } else {
            animControl.innerHTML = `
                <div class="text-[100px] mb-4">🥲</div>
                <div class="text-2xl md:text-4xl font-black text-orange-500 uppercase tracking-widest drop-shadow-xl bg-white/90 px-6 py-2 rounded-full border-4 border-orange-400">Sai rồi, làm lại nhé!</div>
            `;
        }

        layer.appendChild(animControl);
        setTimeout(() => {
            animControl.classList.remove('animate-pop-in');
            animControl.classList.add('animate-slide-out-up', 'opacity-0');
            setTimeout(() => layer.innerHTML = '', 400);
        }, 1500);
    },

    async initQuiz(lesson) {
        console.log('Quiz: Khởi tạo quiz với lesson:', lesson.title);
        let pool = lesson.quizPool || [];

        // Cố gắng tải từ file .txt nếu có (ưu tiên để người dùng dễ cập nhật)
        if (lesson.period) {
            try {
                const fetchedPool = await this.loadQuizFromFile(lesson.period);
                if (fetchedPool && fetchedPool.length > 0) {
                    pool = fetchedPool;
                    console.log(`Quiz: Đã tải động ${pool.length} câu hỏi từ cungco${lesson.period}.txt`);
                }
            } catch (e) {
                console.warn('Quiz: Không tìm thấy file củng cố riêng hoặc lỗi tải file. Dùng pool mặc định.', e);
            }
        }

        if (pool.length === 0) {
            document.getElementById('quiz-content').innerHTML = `
                <div class="text-center py-20 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200">
                    <p class="text-xl md:text-2xl text-gray-400 font-bold italic">Chưa có dữ liệu câu hỏi cho bài học này...</p>
                </div>
            `;
            document.getElementById('quiz-progress-bar').style.display = 'none';
            const counterBox = document.querySelector('.flex.gap-4');
            if (counterBox) counterBox.style.display = 'none';
            return;
        }

        // Chọn ngẫu nhiên 10 câu trong pool để tạo sự đa dạng (Phân bổ: 5 Dễ, 3 Trung bình, 2 Khó)
        const lv1 = pool.filter(q => q.level === 1).sort(() => 0.5 - Math.random()).slice(0, 5);
        const lv2 = pool.filter(q => q.level === 2).sort(() => 0.5 - Math.random()).slice(0, 3);
        const lv3 = pool.filter(q => q.level === 3 || q.level === undefined).sort(() => 0.5 - Math.random()).slice(0, 2);

        let finalPool = [...lv1, ...lv2, ...lv3];
        if (finalPool.length < 10) {
            finalPool = pool.sort(() => 0.5 - Math.random()).slice(0, 10);
        }
        finalPool.sort(() => 0.5 - Math.random());

        // Gán trực tiếp vào cả local và window để đảm bảo đồng bộ 200%
        Quiz.currentQuiz = finalPool;
        Quiz.currentIndex = 0;
        Quiz.score = 0;
        Quiz.streak = 0;
        Quiz.isProcessing = false;

        window.Quiz.currentQuiz = finalPool;
        window.Quiz.currentIndex = 0;
        window.Quiz.score = 0;
        window.Quiz.streak = 0;
        window.Quiz.isProcessing = false;
        window.Quiz.startTime = Date.now(); // Track start time

        console.log('Quiz: Đã nạp ' + finalPool.length + ' câu hỏi.');
        Quiz.renderCurrentQuestion();

        if (window.db) {
            Quiz.loadLeaderboard(lesson.title);
        }
    },

    loadLeaderboard(lessonTitle) {
        if (!window.db) return;
        const listDiv = document.getElementById('quiz-leaderboard-list');
        if (!listDiv) return;

        window.db.collection("diem_tieng_viet_lop5")
            .where("lessonTitle", "==", lessonTitle)
            .orderBy("score", "desc")
            .limit(10)
            .onSnapshot((snapshot) => {
                if (snapshot.empty) {
                    listDiv.innerHTML = '<div class="text-center py-6 text-gray-400 text-sm font-bold italic">Chưa có ai hoàn thành bài thử thách này. Hãy là người đầu tiên!</div>';
                    return;
                }

                let html = '';
                let rank = 1;
                snapshot.forEach(doc => {
                    const data = doc.data();
                    let rankIcon = rank === 1 ? '🥇' : (rank === 2 ? '🥈' : (rank === 3 ? '🥉' : `<span class="bg-gray-100 text-gray-500 rounded-full w-6 h-6 flex items-center justify-center text-xs font-black shadow-inner">${rank}</span>`));
                    let rowClass = rank === 1 ? 'bg-amber-50 border-amber-200' : (rank <= 3 ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100');

                    html += `
                        <div class="flex items-center justify-between p-3 md:p-4 rounded-2xl border-2 ${rowClass} hover:scale-[1.01] transition-transform">
                            <div class="flex items-center gap-3 md:gap-4">
                                <div class="text-2xl">${rankIcon}</div>
                                <div>
                                    <div class="text-sm md:text-base font-black text-gray-800">${data.studentName}</div>
                                    <div class="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider">${data.studentClass || 'Lớp 5'}</div>
                                </div>
                            </div>
                            <div class="text-lg md:text-xl font-black text-amber-500 bg-white px-3 py-1 rounded-xl shadow-sm border border-amber-100">
                                ${data.score}
                            </div>
                        </div>
                    `;
                    rank++;
                });
                listDiv.innerHTML = html;
            });
    },

    async loadQuizFromFile(period) {
        try {
            const url = `js/data/math/cungco/cungco${period}.txt`;
            const response = await fetch(url);
            if (!response.ok) return null;

            const text = await response.text();
            const lines = text.split('\n').filter(l => l.trim().includes('|'));

            return lines.map(line => {
                const parts = line.split('|').map(p => p.trim());
                if (parts.length < 3) return null;

                // Loại bỏ số thứ tự ở đầu câu hỏi (ví dụ: "1. ", "11: ", "11. ")
                let questionText = parts[0].replace(/^\d+[\.\:]\s*/, '').trim();

                return {
                    question: questionText,
                    options: parts[1].split(',').map(o => o.trim()),
                    answer: parseInt(parts[2]) - 1, // Chuyển từ 1-based sang 0-based
                    level: parts.length > 3 ? parseInt(parts[3]) || 1 : 1
                };
            }).filter(q => q !== null);
        } catch (e) {
            return null;
        }
    },

    renderCurrentQuestion() {
        const quiz = window.Quiz; // Luôn dùng global reference
        if (quiz.currentIndex >= quiz.currentQuiz.length) {
            quiz.finishQuiz();
            return;
        }

        // Update progress UI & streak
        const qCurrent = document.getElementById('quiz-progress-current');
        const qTotal = document.getElementById('quiz-progress-total');
        const sDisplay = document.getElementById('quiz-score-display');
        const pFill = document.getElementById('quiz-progress-fill');
        const strContainer = document.getElementById('streak-container');
        const strDisplay = document.getElementById('quiz-streak-display');

        if (qCurrent) qCurrent.innerText = quiz.currentIndex + 1;
        if (qTotal) qTotal.innerText = `/${quiz.currentQuiz.length}`;
        if (sDisplay) sDisplay.innerText = quiz.score;
        if (pFill) pFill.style.width = `${((quiz.currentIndex) / quiz.currentQuiz.length) * 100}%`;

        if (strContainer && strDisplay) {
            if (quiz.streak > 1) {
                strContainer.classList.remove('hidden', 'flex-col'); // fallback tailwind flex issue
                strContainer.classList.add('flex', 'flex-col');
                strDisplay.innerText = `${quiz.streak}🔥`;
            } else {
                strContainer.classList.add('hidden');
            }
        }

        const q = quiz.currentQuiz[quiz.currentIndex];
        const container = document.getElementById('quiz-content');

        if (!container) return;

        container.innerHTML = `
            <div class="animate-slide-in-right relative z-30">
                <h3 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 mb-3 leading-snug text-center sm:text-left">
                    <span class="text-orange-500 font-black mr-2">Q${quiz.currentIndex + 1}.</span> ${q.question}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 relative z-50" id="opts-container">
                    ${q.options.map((opt, optIdx) => `
                         <button onclick="Quiz.selectAnswer(${optIdx})" class="quiz-opt-btn relative w-full text-left p-3 md:p-4 rounded-2xl border-2 border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800/50 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-200 dark:hover:border-orange-800 hover:shadow-lg hover:-translate-y-1 transition-all group overflow-hidden cursor-pointer text-gray-700 dark:text-slate-200">
                            <div class="flex items-center pointer-events-none">
                                <div class="w-8 h-8 md:w-10 md:h-10 border-3 border-gray-200 dark:border-slate-700 rounded-full flex-shrink-0 mr-3 md:mr-4 group-hover:border-orange-400 transition-colors flex items-center justify-center opt-indicator"></div>
                                <span class="text-2xl md:text-3xl font-bold group-hover:text-orange-900 dark:group-hover:text-orange-300 transition-colors leading-tight">${opt}</span>
                            </div>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    },

    selectAnswer(selectedIndex) {
        const quiz = window.Quiz;
        console.log('Quiz: User chọn đáp án:', selectedIndex, 'Trạng thái xử lý:', quiz.isProcessing);

        if (quiz.isProcessing) return;
        quiz.isProcessing = true;

        if (!quiz.currentQuiz || quiz.currentQuiz.length === 0) {
            console.error('Quiz: currentQuiz trống rỗng! Đang cố gắng khôi phục...');
            quiz.isProcessing = false;
            if (window.currentLessonData) quiz.initQuiz(window.currentLessonData);
            return;
        }

        const q = quiz.currentQuiz[quiz.currentIndex];
        const isCorrect = (selectedIndex === q.answer);

        if (isCorrect) {
            quiz.streak++;
            let earnedPoints = 10;
            let comboMulti = false;

            // Streak Bonus
            if (quiz.streak >= 3) {
                earnedPoints += 5; // combo bonus x3
                quiz.playSFX('streak');
                comboMulti = 3;
            } else if (quiz.streak >= 5) {
                earnedPoints += 10; // combo bonus x5
                quiz.playSFX('streak');
                comboMulti = 5;
            } else {
                quiz.playSFX('correct');
            }

            quiz.score += earnedPoints;
            const sDisplay = document.getElementById('quiz-score-display');
            if (sDisplay) {
                sDisplay.innerText = quiz.score;
                sDisplay.classList.add('animate-bounce-subtle', 'text-emerald-500');
                setTimeout(() => sDisplay.classList.remove('animate-bounce-subtle', 'text-emerald-500'), 500);
            }

            quiz.showLottieFeedback(true);
            if (comboMulti) {
                // Flash combo message
                const layer = document.getElementById('quiz-gamification-layer');
                if (layer) {
                    const combo = document.createElement('div');
                    combo.className = 'absolute bottom-10 animate-bounce text-2xl font-black text-rose-500 bg-white/90 px-4 py-1 rounded-full border-2 border-rose-300 drop-shadow-lg z-50';
                    combo.innerText = `COMBO X${quiz.streak}! +${earnedPoints} Điểm`;
                    layer.appendChild(combo);
                }
            }

            if (typeof confetti === 'function') confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
        } else {
            quiz.playSFX('wrong');
            quiz.showLottieFeedback(false);
            quiz.streak = 0;
            const strContainer = document.getElementById('streak-container');
            if (strContainer) strContainer.classList.add('hidden');
        }

        const buttons = document.querySelectorAll('.quiz-opt-btn');
        const indicators = document.querySelectorAll('.opt-indicator');

        // Vô hiệu hóa và hiển thị kết quả
        buttons.forEach((btn, idx) => {
            btn.onclick = null;
            btn.classList.remove('hover:bg-orange-50', 'hover:border-orange-200', 'hover:-translate-y-1', 'hover:shadow-lg', 'cursor-pointer');
            btn.classList.add('cursor-default', 'opacity-60');

            const indicatorEl = indicators[idx];
            if (idx === q.answer) {
                btn.classList.remove('border-gray-100', 'bg-gray-50', 'opacity-60');
                btn.classList.add('border-emerald-500', 'bg-emerald-50', 'shadow-md', 'shadow-emerald-100', 'scale-[1.02]', 'opacity-100', 'z-10');
                const span = btn.querySelector('span');
                if (span) span.classList.add('!text-emerald-800');
                if (indicatorEl) {
                    indicatorEl.classList.add('border-emerald-500', 'bg-emerald-500');
                    indicatorEl.innerHTML = `<svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>`;
                }
            } else if (idx === selectedIndex && !isCorrect) {
                btn.classList.remove('border-gray-100', 'bg-gray-50', 'opacity-60');
                btn.classList.add('border-red-500', 'bg-red-50', 'opacity-100');
                const span = btn.querySelector('span');
                if (span) span.classList.add('!text-red-800');
                if (indicatorEl) {
                    indicatorEl.classList.add('border-red-500', 'bg-red-500');
                    indicatorEl.innerHTML = `<svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 18L18 6M6 6l12 12"></path></svg>`;
                }
            }
        });

        // Chờ rồi chuyển câu
        const waitTime = isCorrect ? 1500 : 2500;
        setTimeout(() => {
            const currentContainer = document.querySelector('.animate-slide-in-right');
            if (currentContainer) {
                currentContainer.classList.remove('animate-slide-in-right');
                currentContainer.classList.add('animate-slide-out-left');
            }

            setTimeout(() => {
                quiz.currentIndex++;
                quiz.isProcessing = false;
                quiz.renderCurrentQuestion();
            }, 300);
        }, waitTime);
    },

    finishQuiz() {
        console.log('Quiz: Hoàn thành trắc nghiệm.');
        const quiz = window.Quiz;
        quiz.timeTaken = Math.round((Date.now() - (quiz.startTime || Date.now())) / 1000); // Time in seconds
        quiz.playSFX('correct'); // Fanfare on completion
        const pFill = document.getElementById('quiz-progress-fill');
        if (pFill) pFill.style.width = '100%';

        const container = document.getElementById('quiz-content');
        if (!container) return;

        container.innerHTML = `
            <div class="text-center animate-fade-in py-8">
                <div class="text-6xl md:text-8xl mb-6">${quiz.score >= 80 ? '🏆' : (quiz.score >= 50 ? '🌟' : '💪')}</div>
                <h3 class="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Hoàn thành xuất sắc!</h3>
                <p class="text-xl md:text-3xl font-bold text-gray-500 dark:text-slate-400 mb-12">Điểm của bạn: <span class="${quiz.score >= 80 ? 'text-emerald-600' : 'text-orange-600'} text-4xl md:text-6xl font-black bg-white dark:bg-slate-800 px-4 py-2 rounded-2xl shadow-sm border-2 border-gray-100 dark:border-slate-700">${quiz.score} / 100</span></p>
                
                <div class="flex justify-center">
                    <button id="btn-submit-final-score" onclick="Quiz.submitToFirebase()" class="bg-blue-600 hover:bg-blue-700 text-white px-10 md:px-16 py-5 md:py-6 rounded-[32px] font-black text-xl md:text-2xl uppercase tracking-widest shadow-2xl shadow-blue-300 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4">
                        Nộp điểm cho Cô/Thầy <span class="text-3xl">🚀</span>
                    </button>
                </div>
            </div>
        `;

        if (typeof confetti === 'function') {
            setTimeout(() => confetti({ particleCount: 150, spread: 100 }), 300);
        }
    },

    submitToFirebase() {
        const quiz = window.Quiz;
        const fullContent = `Trắc nghiệm tổng: ${quiz.score} điểm (${quiz.score / 10}/10 câu đúng).`;
        const score = quiz.score;
        const timeTaken = quiz.timeTaken || 0;

        if (window.submitMathLesson) {
            window.submitMathLesson(fullContent, score, "btn-submit-final-score", timeTaken);
        } else {
            alert("Bạn hãy tải lại trang để nộp điểm nhé! (Hệ thống nộp bài đang bận)");
        }
    }
};

// Đảm bảo Quiz luôn có mặt trên window sớm nhất có thể
window.Quiz = Quiz;
