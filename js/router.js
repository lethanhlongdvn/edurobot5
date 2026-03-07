// router.js - Quản lý việc chuyển đổi giữa các trang (views)
import { subjects, lessons } from './data.js';
import { UI } from './components/components.js';

export const router = {
    currentSubject: 'math',
    currentWeek: 1,
    currentPeriod: 'GIỮA KỲ 1',
    currentLessonPeriod: null,
    periodRanges: {
        'GIỮA KỲ 1': { start: 1, end: 9 },
        'CUỐI KỲ 1': { start: 10, end: 18 },
        'GIỮA KỲ 2': { start: 19, end: 27 },
        'CUỐI KỲ 2': { start: 28, end: 35 }
    },

    init() {
        window.router = this; // Phải gán trước khi renderHome vì renderHome gọi các UI component dùng router toàn cục
        window.UI = UI;
        window.subjects = subjects;
        window.lessons = lessons;
        if (!window.__lessonCache) window.__lessonCache = new Map();

        // Phục hồi trạng thái (kỳ, tuần) nếu có
        try {
            const savedState = sessionStorage.getItem('edurobot_router_state');
            if (savedState) {
                const state = JSON.parse(savedState);
                if (state.currentSubject) this.currentSubject = state.currentSubject;
                if (state.currentWeek) this.currentWeek = state.currentWeek;
                if (state.currentPeriod) this.currentPeriod = state.currentPeriod;
            }
        } catch (e) {
            console.error('Lỗi đọc state:', e);
        }

        window.addEventListener('hashchange', () => this.handleHashChange());

        // Xử lý route ban đầu
        if (window.location.hash && window.location.hash !== '#' && window.location.hash !== '#/') {
            this.handleHashChange();
        } else {
            this.renderHome();
        }
    },

    saveState() {
        sessionStorage.setItem('edurobot_router_state', JSON.stringify({
            currentSubject: this.currentSubject,
            currentWeek: this.currentWeek,
            currentPeriod: this.currentPeriod
        }));
    },

    handleHashChange() {
        let hash = window.location.hash.slice(1);
        if (hash.startsWith('/')) {
            hash = hash.slice(1);
        }

        if (!hash || hash === '') {
            this.renderHome(true);
            return;
        }

        const parts = hash.split('/');
        if (parts[0] === 'lesson' && parts[1] && parts[2]) {
            this.renderLesson(parts[1], parts[2], true);
        } else if (parts[0] === 'subject' && parts[1]) {
            this.renderSubject(parts[1], true);
        } else {
            this.renderHome(true);
        }
    },

    // Phương thức điều hướng môn học tập trung
    navigateSubject(subId) {
        const sub = subjects.find(s => s.id === subId);
        if (!sub) return;

        const isAdmin = localStorage.getItem('edurobot_admin') === 'true';
        if (sub.locked && !isAdmin) {
            alert('Môn học này đang trong quá trình phát triển. Vui lòng quay lại sau!');
            return;
        }

        if (sub.externalUrl) {
            window.location.href = sub.externalUrl;
        } else {
            this.selectDashboardSubject(subId);
        }
    },

    renderHome(fromHash = false) {
        if (UI && UI.cleanupQuiz) UI.cleanupQuiz();
        this.saveState();
        const currentHash = window.location.hash;
        if (!fromHash && currentHash !== '' && currentHash !== '#' && currentHash !== '#/') {
            window.location.hash = '/';
            return;
        }

        // Đảm bảo hiển thị Header chính của index.html khi quay về trang chủ
        const globalHeader = document.querySelector('header');
        if (globalHeader) globalHeader.style.display = 'block';

        const metaContainer = document.getElementById('navbar-metadata');
        if (metaContainer) metaContainer.classList.add('hidden');

        const badge = document.getElementById('subject-badge');
        if (badge) badge.classList.add('hidden');

        const subjectsContainer = document.getElementById('menu-subjects-container');
        if (subjectsContainer) subjectsContainer.classList.add('hidden');

        const container = document.getElementById('app-content');
        if (!container) return;

        // Lấy dữ liệu cho Dashboard
        const currentLessons = lessons[this.currentSubject] || [];
        const range = this.periodRanges[this.currentPeriod];

        // Lọc tuần dựa trên Kỳ học (period)
        const subjectWeeks = [...new Set(currentLessons.map(l => parseInt(l.week)))]
            .filter(w => w >= range.start && w <= range.end)
            .sort((a, b) => a - b);

        // Đảm bảo currentWeek hợp lệ trong kỳ mới chọn
        if (!subjectWeeks.includes(this.currentWeek)) {
            this.currentWeek = subjectWeeks.length > 0 ? subjectWeeks[0] : range.start;
        }

        const filteredLessons = currentLessons.filter(l => parseInt(l.week) === this.currentWeek);

        // Lấy bài học cuối cùng (Continue Learning)
        const lastLessonData = localStorage.getItem('edurobot_last_lesson');
        const lastLesson = lastLessonData ? JSON.parse(lastLessonData) : null;

        container.innerHTML = UI.renderDashboard(
            subjects,
            this.currentSubject,
            this.currentPeriod,
            subjectWeeks,
            filteredLessons,
            lastLesson
        );
        window.scrollTo(0, 0);
    },

    selectDashboardSubject(subjectId) {
        this.currentSubject = subjectId;
        this.currentWeek = 1; // Reset về tuần 1 khi đổi môn
        this.renderHome();
    },

    selectDashboardWeek(week) {
        this.currentWeek = parseInt(week);
        this.renderHome();
    },

    selectDashboardPeriod(period) {
        this.currentPeriod = period;
        // Tự động nhảy về tuần đầu tiên của kỳ đó
        this.currentWeek = this.periodRanges[period].start;
        this.renderHome();
    },

    renderSubject(subId, fromHash = false) {
        if (!fromHash) {
            window.location.hash = `/subject/${subId}`;
            return;
        }

        const subject = subjects.find(s => s.id === subId);
        if (!subject) return;

        this.currentSubject = subId;
        this.saveState();

        // Đảm bảo hiển thị Header chính của index.html
        const globalHeader = document.querySelector('header');
        if (globalHeader) globalHeader.style.display = 'block';

        // Cập nhật Breadcrumb
        const bcContainer = document.getElementById('breadcrumb-container');
        const bcCurrent = document.getElementById('breadcrumb-current');
        if (bcContainer) bcContainer.classList.remove('hidden');
        if (bcCurrent) bcCurrent.innerHTML = subject.name;

        const container = document.getElementById('app-content');
        if (!container) return;

        const subjectLessons = lessons[subId] || [];

        let html = `
            <div class="max-w-5xl mx-auto">
                ${UI.renderSubjectHeader(subject)}
                
                <!-- Thanh tìm kiếm thông minh -->
                <div class="mb-10 relative group">
                    <div class="absolute inset-y-0 left-6 flex items-center pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="text" 
                        id="lesson-search" 
                        oninput="router.handleSearch(this.value)"
                        placeholder="Tìm theo tuần (vd: Tuần 23), tiết (vd: 111) hoặc tên bài học..." 
                        class="w-full bg-white dark:bg-slate-900 border-none rounded-[28px] pl-16 pr-8 py-6 text-sm shadow-xl shadow-gray-100/50 dark:shadow-slate-900/50 focus:ring-2 focus:ring-blue-600 transition-all font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300"
                    >
                </div>

                <div id="lesson-list" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                    ${UI.renderLessonList(subjectLessons, subject.color)}
                </div>
            </div>
        `;

        container.innerHTML = html;
        window.scrollTo(0, 0);
    },

    handleSearch(query) {
        const subId = this.currentSubject;
        const subject = subjects.find(s => s.id === subId);
        const subjectLessons = lessons[subId] || [];

        const filtered = subjectLessons.filter(l => {
            const q = query.toLowerCase().trim();
            return l.title.toLowerCase().includes(q) ||
                l.period.toLowerCase().includes(q) ||
                `tuần ${l.week}`.toLowerCase().includes(q);
        });

        const listContainer = document.getElementById('dashboard-lesson-list');
        if (listContainer) {
            listContainer.innerHTML = UI.renderLessonList(filtered, subject.color);
        }
    },

    async renderLesson(subId, period, fromHash = false) {
        if (!fromHash) {
            window.location.hash = `/lesson/${subId}/${period}`;
            return;
        }

        const subject = subjects.find(s => s.id === subId);
        let lesson = lessons[subId]?.find(l => (l.id === period) || (l.period === period));

        if (!subject || !lesson) return;

        const loadingHost = document.getElementById('app-content');
        if (loadingHost) {
            loadingHost.innerHTML = `
                <div class="flex flex-col items-center justify-center h-64">
                    <div class="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-4"></div>
                    <p class="text-blue-800 font-bold animate-pulse">Đang nạp nội dung bài học...</p>
                </div>
            `;
        }

        if (subId === 'math' && !lesson.content) {
            try {
                const cache = window.__lessonCache;
                if (cache && cache.has(lesson.period)) {
                    Object.assign(lesson, cache.get(lesson.period));
                } else {
                    const mod = await import(`./data/math/${lesson.period}.js`);
                    const key = `lesson${lesson.period}`;
                    const full = mod[key] || Object.values(mod)[0];
                    if (full) {
                        Object.assign(lesson, full);
                        if (cache) cache.set(lesson.period, full);
                    }
                }
                const list = lessons['math'] || [];
                const idx = list.findIndex(l => (l.id === lesson.period) || (l.period === lesson.period));
                if (idx >= 0 && idx + 1 < list.length) {
                    const nextPeriod = list[idx + 1].period;
                    const cache2 = window.__lessonCache;
                    if (cache2 && !cache2.has(nextPeriod)) {
                        import(`./data/math/${nextPeriod}.js`).then(mod2 => {
                            const key2 = `lesson${nextPeriod}`;
                            const full2 = mod2[key2] || Object.values(mod2)[0];
                            if (full2) cache2.set(nextPeriod, full2);
                        }).catch(() => {});
                    }
                }
            } catch (e) {
                console.error('Không thể nạp bài học động:', e);
            }
        }
        if (subId === 'vietnamese' && (!lesson.content && lesson.modulePath)) {
            try {
                const cache = window.__lessonCache;
                const cacheKey = lesson.id || lesson.period;
                if (cache && cache.has(cacheKey)) {
                    Object.assign(lesson, cache.get(cacheKey));
                } else {
                    const cleanPath = (lesson.modulePath || '').replace('./', '').replace(/\.js$/i, '');
                    const mod = await import(`./data/vietnamese/${cleanPath}.js`);
                    const full = (lesson.exportName && mod[lesson.exportName]) ? mod[lesson.exportName] : Object.values(mod)[0];
                    if (full) {
                        Object.assign(lesson, full);
                        if (cache) cache.set(cacheKey, full);
                    }
                }
                const list = lessons['vietnamese'] || [];
                const idx = list.findIndex(l => (l.id === lesson.id) || (l.period === lesson.period));
                const prefetchNext = (offset) => {
                    const next = list[idx + offset];
                    if (!next) return;
                    const cache2 = window.__lessonCache;
                    const key2 = next.id || next.period;
                    if (cache2 && !cache2.has(key2) && next.modulePath) {
                        const np = (next.modulePath || '').replace('./', '').replace(/\.js$/i, '');
                        import(`./data/vietnamese/${np}.js`).then(mod2 => {
                            const full2 = (next.exportName && mod2[next.exportName]) ? mod2[next.exportName] : Object.values(mod2)[0];
                            if (full2) cache2.set(key2, full2);
                        }).catch(() => {});
                    }
                };
                if (idx >= 0) {
                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(() => { prefetchNext(1); prefetchNext(2); });
                    } else {
                        setTimeout(() => { prefetchNext(1); prefetchNext(2); }, 500);
                    }
                }
            } catch (e) {
                console.error('Không thể nạp bài Tiếng Việt động:', e);
                const c = document.getElementById('app-content');
                if (c) {
                    c.innerHTML = `
                        <div class="max-w-xl mx-auto p-8 bg-red-50 rounded-3xl border border-red-200 text-red-800">
                            <div class="font-black text-lg mb-2">Không thể tải bài học</div>
                            <div class="text-sm font-bold">Vui lòng thử lại sau hoặc chọn bài khác.</div>
                        </div>
                    `;
                }
            }
        }
        if (subId === 'science' && !lesson.content) {
            try {
                const cache = window.__lessonCache;
                const cacheKey = lesson.id || lesson.period;
                if (cache && cache.has(cacheKey)) {
                    Object.assign(lesson, cache.get(cacheKey));
                } else {
                    const padded = String(lesson.period).padStart(3, '0');
                    const mod = await import(`./data/science/${padded}.js`);
                    const full = mod[`lesson${padded}`] || Object.values(mod)[0];
                    if (full) {
                        Object.assign(lesson, full);
                        if (cache) cache.set(cacheKey, full);
                    }
                }
                const list = lessons['science'] || [];
                const idx = list.findIndex(l => (l.id === cacheKey) || (l.period === lesson.period));
                const prefetchNext = (offset) => {
                    const n = list[idx + offset];
                    if (!n) return;
                    const nextPadded = String(n.period).padStart(3, '0');
                    const cache2 = window.__lessonCache;
                    if (cache2 && !cache2.has(n.id || n.period)) {
                        import(`./data/science/${nextPadded}.js`).then(mod2 => {
                            const full2 = mod2[`lesson${nextPadded}`] || Object.values(mod2)[0];
                            if (full2) cache2.set(n.id || n.period, full2);
                        }).catch(() => {});
                    }
                };
                if (idx >= 0) {
                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(() => { prefetchNext(1); prefetchNext(2); });
                    } else {
                        setTimeout(() => { prefetchNext(1); prefetchNext(2); }, 500);
                    }
                }
            } catch (e) {
                console.error('Không thể nạp bài Khoa học động:', e);
                const c = document.getElementById('app-content');
                if (c) {
                    c.innerHTML = `
                        <div class="max-w-xl mx-auto p-8 bg-red-50 rounded-3xl border border-red-200 text-red-800">
                            <div class="font-black text-lg mb-2">Không thể tải bài học</div>
                            <div class="text-sm font-bold">Vui lòng thử lại sau hoặc chọn bài khác.</div>
                        </div>
                    `;
                }
            }
        }
        if (subId === 'history' && !lesson.content) {
            try {
                const cache = window.__lessonCache;
                const cacheKey = lesson.id || lesson.period;
                if (cache && cache.has(cacheKey)) {
                    Object.assign(lesson, cache.get(cacheKey));
                } else {
                    const padded = String(lesson.period).padStart(3, '0');
                    const mod = await import(`./data/history/${padded}.js`);
                    const full = mod[`lesson${padded}`] || Object.values(mod)[0];
                    if (full) {
                        Object.assign(lesson, full);
                        if (cache) cache.set(cacheKey, full);
                    }
                }
                const list = lessons['history'] || [];
                const idx = list.findIndex(l => (l.id === cacheKey) || (l.period === lesson.period));
                const prefetchNext = (offset) => {
                    const n = list[idx + offset];
                    if (!n) return;
                    const nextPadded = String(n.period).padStart(3, '0');
                    const cache2 = window.__lessonCache;
                    if (cache2 && !cache2.has(n.id || n.period)) {
                        import(`./data/history/${nextPadded}.js`).then(mod2 => {
                            const full2 = mod2[`lesson${nextPadded}`] || Object.values(mod2)[0];
                            if (full2) cache2.set(n.id || n.period, full2);
                        }).catch(() => {});
                    }
                };
                if (idx >= 0) {
                    if ('requestIdleCallback' in window) {
                        requestIdleCallback(() => { prefetchNext(1); prefetchNext(2); });
                    } else {
                        setTimeout(() => { prefetchNext(1); prefetchNext(2); }, 500);
                    }
                }
            } catch (e) {
                console.error('Không thể nạp bài Lịch sử & Địa lý động:', e);
                const c = document.getElementById('app-content');
                if (c) {
                    c.innerHTML = `
                        <div class="max-w-xl mx-auto p-8 bg-red-50 rounded-3xl border border-red-200 text-red-800">
                            <div class="font-black text-lg mb-2">Không thể tải bài học</div>
                            <div class="text-sm font-bold">Vui lòng thử lại sau hoặc chọn bài khác.</div>
                        </div>
                    `;
                }
            }
        }

        this.currentSubject = subId;
        this.currentLessonPeriod = lesson.period; // Fix: Always use the period as the identifier
        this.saveState();

        window.currentLessonData = lesson; // Lưu trữ dữ liệu bài học hiện tại để các component truy cập
        document.title = `${lesson.title} - EduRobot`;

        // Lưu bài học cuối cùng
        localStorage.setItem('edurobot_last_lesson', JSON.stringify({
            subjectId: subId,
            period: lesson.period,
            title: lesson.title,
            week: lesson.week
        }));

        // Đánh dấu bài học đã mở để tính tiến độ
        const openedLessons = JSON.parse(localStorage.getItem('edurobot_opened_lessons') || '{}');
        const lessonKey = `${subId}-w${lesson.week}-p${lesson.period}`;
        openedLessons[lessonKey] = true;
        localStorage.setItem('edurobot_opened_lessons', JSON.stringify(openedLessons));

        const container = document.getElementById('app-content');
        if (container) {
            // Cập nhật Badge môn học (vd: TOÁN 5, TV5)
            const badge = document.getElementById('subject-badge');
            if (badge) {
                badge.classList.remove('hidden');
                badge.className = `px-2 py-0.5 rounded-lg text-[9px] font-black text-white uppercase tracking-tighter ${subject.id === 'math' ? 'bg-orange-500' : 'bg-blue-500'}`;
                badge.textContent = subject.id === 'math' ? 'TOÁN 5' : 'TV5';
            }

            // Cập nhật Metadata chuẩn Hình 1
            const metaContainer = document.getElementById('navbar-metadata');
            if (metaContainer) {
                metaContainer.classList.remove('hidden');
                metaContainer.innerHTML = `
                    <div class="flex items-center gap-3 text-[9px] font-black uppercase tracking-wider">
                        <span class="w-[1px] h-4 bg-gray-100 mx-1"></span>
                        <span class="text-gray-400">Chủ điểm:</span>
                        <span class="text-blue-800">${lesson.topic || 'Khám phá tri thức'}</span>
                        <span class="w-[1px] h-4 bg-gray-100 mx-1"></span>
                        <span class="text-gray-400">Tuần ${lesson.week}</span>
                        <span class="text-blue-800">Bài: ${lesson.title}</span>
                    </div>
                `;
            }

            // Hiển thị Dropdown môn học trên Navbar
            const subjectsContainer = document.getElementById('menu-subjects-container');
            if (subjectsContainer) {
                subjectsContainer.classList.remove('hidden');
                subjectsContainer.innerHTML = UI.renderNavbarSubjectSwitcher(subject, subjects);
            }

            container.innerHTML = UI.renderLessonPage(subject, lesson, subjects);
            window.scrollTo(0, 0);

            const hasStudy = !!(typeof lesson.content === 'function' || (typeof lesson.content === 'string' && lesson.content.trim()));
            const hasPractice = !!(typeof lesson.practice === 'function' || lesson.practice?.trim());
            const hasQuiz = !!(lesson.quizPool && lesson.quizPool.length > 0);

            let defaultTab = 'study';
            if (hasStudy) defaultTab = 'study';
            else if (hasPractice) defaultTab = 'practice';
            else if (hasQuiz) defaultTab = 'quiz';

            this.switchTab(defaultTab);
        }
    },

    goHome() {
        window.location.hash = '/';
    },

    switchTab(tabId) {
        const subject = subjects.find(s => s.id === this.currentSubject);
        const subjectLessons = lessons[this.currentSubject] || [];
        const lesson = subjectLessons.find(l => l.period === this.currentLessonPeriod);

        if (!lesson) return;
        if (tabId !== 'quiz' && UI && UI.cleanupQuiz) UI.cleanupQuiz();

        // Cập nhật giao diện Button Active
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active', 'text-blue-600');
            btn.classList.add('text-gray-400');
        });

        const activeBtn = document.getElementById(`tab-${tabId}`);
        if (activeBtn) {
            activeBtn.classList.add('active', 'text-blue-600');
            activeBtn.classList.remove('text-gray-400');
        }

        const container = document.getElementById('tab-content');
        if (!container) return;

        // Render nội dung tùy theo Tab
        let html = '';
        if (tabId === 'study') {
            const rawContent = typeof lesson.content === 'function' ? lesson.content() : lesson.content;
            const studyContent = rawContent ||
                (lesson.tabs?.study?.blocks?.find(b => b.type === 'html')?.content) ||
                (lesson.tabs?.lesson?.blocks?.find(b => b.type === 'html')?.content) ||
                (lesson.blocks?.find(b => b.type === 'html')?.content) ||
                UI.renderEmptyContent();

            html = `
                <div class="glass-card rounded-[40px] p-8 md:p-12 bg-white dark:bg-slate-900 min-h-[500px] animate-fade-in text-gray-700 dark:text-slate-200">
                    <div id="lesson-study-container" class="lesson-body">${UI.parseTutor(studyContent)}</div>
                </div>
            `;
        } else if (tabId === 'practice') {
            const rawPractice = typeof lesson.practice === 'function' ? lesson.practice() : lesson.practice;
            const practiceContent = rawPractice ||
                (lesson.tabs?.practice?.blocks?.find(b => b.type === 'html')?.content) ||
                UI.renderEmptyPractice();

            html = `
                <div class="glass-card rounded-[40px] p-8 md:p-12 bg-white dark:bg-slate-900 min-h-[500px] animate-fade-in text-gray-700 dark:text-slate-200">
                    <div id="lesson-practice-container" class="space-y-6">
                        ${UI.parseTutor(practiceContent)}
                    </div>
                </div>
            `;
        } else if (tabId === 'quiz') {
            // Compatibility: Convert TiengViet5 'quiz' format to EduRobot5 Math 'quizPool' format
            const tvQuiz = lesson.tabs?.quiz?.questions || lesson.quiz?.questions;
            if (!lesson.quizPool && tvQuiz && Array.isArray(tvQuiz)) {
                lesson.quizPool = tvQuiz.map(item => ({
                    question: item.q,
                    options: item.a,
                    answer: item.c,
                    level: item.level || 1
                }));
            }
            html = UI.renderQuizContainer(lesson);
        } else if (tabId === 'pptx') {
            const pptLink = lesson.pptLink || '';
            html = `
                <div id="pptx-container" class="glass-card rounded-[40px] p-2 md:p-4 bg-white dark:bg-slate-900 min-h-[600px] animate-fade-in relative flex flex-col">
                    <div class="flex justify-between items-center mb-4 px-4">
                        <h3 class="text-xl font-black text-gray-800 dark:text-gray-100 flex items-center gap-2">
                            <span class="text-orange-500">🎦</span> Bài giảng PowerPoint
                        </h3>
                        <div class="flex gap-2">
                            <button id="btn-expand-pptx" onclick="Lesson.toggleFullscreenPPTX()" class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>
                                Toàn màn hình
                            </button>
                            <button id="btn-collapse-pptx" onclick="Lesson.toggleFullscreenPPTX()" class="hidden bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded-xl font-bold text-sm transition-all flex items-center gap-2">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                Thu nhỏ
                            </button>
                        </div>
                    </div>
                    <div class="flex-grow w-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 dark:border-slate-700 bg-gray-50 dark:bg-slate-800">
                        ${pptLink ? `
                            <iframe src="${pptLink}" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" scrolling="no" class="w-full h-[600px] md:h-[800px]"></iframe>
                        ` : `
                            <div class="flex flex-col items-center justify-center h-full text-gray-400 py-32 space-y-4 text-center px-4">
                                <span class="text-6xl mb-4">📭</span>
                                <h4 class="text-xl font-black text-gray-600">Chưa có link bài giảng</h4>
                                <p class="text-sm font-bold max-w-md">Thầy/Cô hãy thêm link nhúng (embed link) từ <span class="text-blue-500">Google Slides</span> hoặc <span class="text-orange-500">Microsoft PowerPoint Online (Office 365)</span> vào biến <code class="bg-gray-200 px-2 py-1 rounded text-orange-600">pptLink</code> trong file dữ liệu bài học nhé.</p>
                            </div>
                        `}
                    </div>
                </div>
            `;
        }

        container.innerHTML = html;

        // Execute scripts embedded in the loaded HTML (since innerHTML doesn't execute them)
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
            newScript.appendChild(document.createTextNode(oldScript.innerHTML));
            oldScript.parentNode.replaceChild(newScript, oldScript);
        });

        if (tabId === 'quiz') UI.initQuiz(lesson);

        // Cuộn lên đầu trang mượt mà khi đổi tab
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    // ===== AUDIO PLAYER CONTROLS =====
    _audioInterval: null,

    _formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    },

    _updateAudioUI() {
        const audio = document.getElementById('lesson-audio');
        const progress = document.getElementById('audio-progress');
        const timeDisplay = document.getElementById('audio-time');
        if (!audio || !progress || !timeDisplay) return;

        const percent = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
        progress.style.width = percent + '%';
        timeDisplay.textContent = `${this._formatTime(audio.currentTime)} / ${this._formatTime(audio.duration)}`;
    },

    toggleAudio() {
        const audio = document.getElementById('lesson-audio');
        if (!audio) return;

        const btn = document.getElementById('btn-audio-play');
        const playIcon = document.getElementById('icon-audio-play');
        const pauseIcon = document.getElementById('icon-audio-pause');

        if (audio.paused) {
            audio.play();
            if (playIcon) playIcon.classList.add('hidden');
            if (pauseIcon) pauseIcon.classList.remove('hidden');
            if (btn) btn.classList.add('animate-pulse', 'ring-2', 'ring-white/50');

            // Khi audio kết thúc
            audio.onended = () => {
                this.stopAudio();
            };
        } else {
            audio.pause();
            if (playIcon) playIcon.classList.remove('hidden');
            if (pauseIcon) pauseIcon.classList.add('hidden');
            if (btn) btn.classList.remove('animate-pulse', 'ring-2', 'ring-white/50');
        }
    },

    stopAudio() {
        const audio = document.getElementById('lesson-audio');
        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;

        const btn = document.getElementById('btn-audio-play');
        const playIcon = document.getElementById('icon-audio-play');
        const pauseIcon = document.getElementById('icon-audio-pause');

        if (playIcon) playIcon.classList.remove('hidden');
        if (pauseIcon) pauseIcon.classList.add('hidden');
        if (btn) btn.classList.remove('animate-pulse', 'ring-2', 'ring-white/50');
    },

    seekAudio(event) {
        const audio = document.getElementById('lesson-audio');
        if (!audio || !audio.duration) return;

        const bar = event.currentTarget;
        const rect = bar.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const percent = clickX / rect.width;
        audio.currentTime = percent * audio.duration;
        this._updateAudioUI();
    }
};
