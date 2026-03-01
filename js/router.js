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

        if (sub.externalUrl) {
            window.location.href = sub.externalUrl;
        } else {
            this.selectDashboardSubject(subId);
        }
    },

    renderHome(fromHash = false) {
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

    renderLesson(subId, period, fromHash = false) {
        if (!fromHash) {
            window.location.hash = `/lesson/${subId}/${period}`;
            return;
        }

        this.currentSubject = subId;
        this.currentLessonPeriod = period;
        this.saveState();

        const subject = subjects.find(s => s.id === subId);
        const lesson = lessons[subId].find(l => l.period === period);

        if (!subject || !lesson) return;

        window.currentLessonData = lesson; // Lưu trữ dữ liệu bài học hiện tại để các component truy cập

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
            this.switchTab('study');
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
            const studyContent = lesson.content ||
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
            const practiceContent = lesson.practice ||
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
            html = UI.renderQuizContainer(lesson);
        }

        container.innerHTML = html;

        // NEW LOGIC FOR TIENG VIET 5 BLOCKS
        // Nếu bài học có .blocks (từ json Tiếng Việt 5), ta sẽ ưu tiên parse ra DOM nodes
        if (typeof window.createBlock === 'function') {
            if (tabId === 'study') {
                const blocks = lesson.tabs?.lesson?.blocks || lesson.tabs?.study?.blocks || lesson.blocks;
                if (blocks && Array.isArray(blocks) && blocks.length > 0) {
                    const studyContainer = document.getElementById('lesson-study-container');
                    if (studyContainer) {
                        studyContainer.innerHTML = ''; // Xóa HTML fallback
                        blocks.forEach(block => {
                            const blockEl = window.createBlock(block);
                            if (blockEl) studyContainer.appendChild(blockEl);
                        });
                    }
                }
            } else if (tabId === 'practice') {
                const blocks = lesson.tabs?.practice?.blocks;
                if (blocks && Array.isArray(blocks) && blocks.length > 0) {
                    const practiceContainer = document.getElementById('lesson-practice-container');
                    if (practiceContainer) {
                        practiceContainer.innerHTML = '';
                        blocks.forEach(block => {
                            const blockEl = window.createBlock(block);
                            if (blockEl) practiceContainer.appendChild(blockEl);
                        });
                    }
                }
            }
        }

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
    }
};
