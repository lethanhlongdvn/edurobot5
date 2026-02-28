import { common } from './common.js';

export const Dashboard = {
    renderHero(title, subtitle, tag) {
        return `
            <section class="max-w-4xl mx-auto text-center mb-20 animate-fade-in px-4">
                ${tag ? `<span class="inline-block bg-blue-50 text-blue-600 text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] mb-8 border border-blue-100/50 shadow-sm">${tag}</span>` : ''}
                <h2 class="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.1]">${title}</h2>
                <p class="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">${subtitle}</p>
            </section>
        `;
    },

    renderSubjectCard(sub) {
        const color = common.getColorClasses(sub.color);
        return `
            <div class="subject-card group rounded-[48px] bg-white p-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 flex flex-col items-center text-center cursor-pointer relative overflow-hidden" 
                 onclick="router.navigateSubject('${sub.id}')">
                <div class="absolute top-0 left-0 w-full h-2.5 ${color.bg} opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="w-24 h-24 ${color.light} ${color.text} rounded-[36px] flex items-center justify-center text-5xl mb-10 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">${sub.icon}</div>
                <h3 class="text-3xl font-black text-gray-800 mb-4 tracking-tighter">${sub.name}</h3>
                <p class="text-gray-400 font-black uppercase text-[11px] tracking-widest mb-10">${sub.shortName}</p>
                <button class="mt-auto w-full py-5 rounded-[24px] ${color.bg} text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl ${color.shadow} transition-all active:scale-95 group-hover:translate-y-[-4px]">Bắt đầu học ngay</button>
            </div>
        `;
    },

    renderLessonList(lessons, color) {
        const colorClass = common.getColorClasses(color);
        if (lessons.length === 0) {
            return `
                <div class="col-span-full py-16 md:py-20 bg-white/40 rounded-2xl md:rounded-[48px] border-2 border-dashed border-gray-100 text-center animate-fade-in">
                    <div class="text-5xl mb-6 opacity-20">📚</div>
                    <p class="text-gray-400 font-black italic mb-2 text-lg md:text-xl">Vùng kiến thức này đang được chuẩn bị...</p>
                    <p class="text-gray-400 text-[9px] font-black uppercase tracking-[0.3em]">Hệ thống EduRobot 5.0</p>
                </div>
            `;
        }
        return lessons.map(lesson => this.renderLessonCard(lesson, color)).join('');
    },

    renderLessonCard(lesson, subjectColor) {
        const color = common.getColorClasses(subjectColor);
        return `
            <div class="touch-feedback flex items-center p-4 md:p-5 bg-white rounded-xl border border-gray-200 shadow-sm 
                 hover:shadow-md hover:border-blue-100 cursor-pointer group border-l-4 ${color.border} transition-all" 
                 onclick="router.renderLesson('${router.currentSubject}', '${lesson.period}')">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-1.5 mb-1">
                        <span class="w-1.5 h-1.5 ${color.bg} rounded-full"></span>
                        <span class="text-[10px] font-bold uppercase ${color.text} tracking-widest">Tiết ${lesson.period}</span>
                    </div>
                    <h3 class="text-sm md:text-base font-bold text-gray-800 leading-snug truncate">${lesson.title}</h3>
                </div>
                <div class="ml-3 shrink-0 p-2.5 ${color.light} rounded-lg group-hover:rotate-6 transition-transform">
                    <span class="text-lg">📖</span>
                </div>
            </div>
        `;
    },

    renderDashboard(subjects, activeSubject, activePeriod, weeks, lessons, lastLesson) {
        const subject = subjects.find(s => s.id === activeSubject);
        const color = common.getColorClasses(subject.color);

        return `
            <div class="flex min-h-[calc(100vh-120px)] animate-fade-in">
                <!-- Desktop Sidebar (ẩn trên mobile) -->
                <aside class="hidden md:flex w-56 lg:w-64 flex-col shrink-0 pt-2 pr-0">
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-28">
                        <nav class="flex flex-col p-2 space-y-1">
                            ${subjects.map(s => {
            const isActive = activeSubject === s.id;
            return `
                                    <a onclick="router.navigateSubject('${s.id}')" 
                                       class="${isActive
                    ? 'sidebar-active'
                    : 'text-gray-500 hover:bg-gray-50'} px-4 py-3.5 rounded-xl flex items-center justify-between font-bold text-sm tracking-wide cursor-pointer transition-all">
                                        <span class="flex items-center gap-3">
                                            <span class="text-lg">${s.icon}</span>
                                            ${s.name}
                                        </span>
                                        ${isActive ? `<svg class="w-4 h-4 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></svg>` : ''}
                                    </a>
                                `;
        }).join('')}
                        </nav>
                    </div>
                </aside>

                <!-- Main Content Area -->
                <div class="flex-1 overflow-y-auto pb-24 md:pb-0">
                    <div class="bg-white md:rounded-3xl md:shadow-sm md:border md:border-gray-100 p-4 md:p-8 min-h-full md:ml-4">
                        
                        <!-- Semester/Period Tabs (Centered Pills) -->
                        <div class="flex gap-2 overflow-x-auto no-scrollbar justify-start md:justify-center mb-6 md:mb-10 -mx-4 px-4 md:mx-0 md:px-0">
                            ${Object.keys(router.periodRanges).map(period => `
                                <button onclick="router.selectDashboardPeriod('${period}')" 
                                    class="shrink-0 h-10 px-5 md:px-8 rounded-full text-xs font-bold uppercase tracking-wide transition-all ${activePeriod === period
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-500'
            }">
                                    ${period}
                                </button>
                            `).join('')}
                        </div>

                        <!-- Title Section -->
                        <div class="mb-2 md:mb-4">
                            <nav class="text-[10px] font-bold text-blue-500 mb-1 md:mb-2 uppercase tracking-wider">
                                <span>${subject.name}</span> / <span class="text-gray-400">Tuần ${router.currentWeek}</span>
                            </nav>
                            <h2 class="text-2xl md:text-3xl font-extrabold text-gray-800 tracking-tight">${subject.name} - Tuần ${router.currentWeek}</h2>
                            <p class="text-sm text-gray-400 mt-1 md:hidden">Lớp 5 • Chương trình mới</p>
                        </div>

                        <!-- Week Selector (Horizontal Timeline) -->
                        <div class="border-y border-gray-200 my-4 md:my-8 py-3">
                            <div class="flex items-center gap-5 md:gap-8 overflow-x-auto no-scrollbar px-1 md:justify-center">
                                ${weeks.map(w => {
                const isActive = router.currentWeek === w;
                return `
                                        <a onclick="router.selectDashboardWeek(${w})" 
                                           class="flex flex-col items-center shrink-0 py-1 cursor-pointer group transition-all ${isActive ? '' : 'opacity-40 hover:opacity-70'}">
                                            <span class="text-[9px] font-bold uppercase mb-1 ${isActive ? 'text-blue-600' : 'text-gray-400'}">Tuần</span>
                                            ${isActive
                        ? `<span class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white text-base font-black shadow-lg shadow-blue-200">${w}</span>`
                        : `<span class="text-sm font-bold text-gray-500">${w}</span>`
                    }
                                        </a>
                                    `;
            }).join('')}
                            </div>
                        </div>

                        <!-- Lesson Grid -->
                        <div id="dashboard-lesson-list" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 animate-slide-up">
                            ${this.renderLessonList(lessons, subject.color)}
                        </div>

                        <!-- Progress Summary -->
                        <div class="mt-6 md:mt-8 bg-gray-50 md:bg-white rounded-2xl md:rounded-[32px] p-5 md:p-8 border border-gray-100 shadow-sm relative overflow-hidden group">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform"></div>
                            <div class="flex items-center gap-3 mb-4 md:mb-6 relative z-10">
                                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-base shadow-lg shadow-blue-200">📊</div>
                                <h3 class="font-black text-gray-900 text-[10px] uppercase tracking-[0.25em]">Tóm tắt tiến độ tuần</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
                                <div class="bg-white md:bg-gray-50/50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-50">
                                    <p class="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Số tiết học</p>
                                    <p class="text-xl font-black text-gray-800">${lessons.length} tiết</p>
                                </div>
                                <div class="bg-white md:bg-gray-50/50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-50">
                                    <p class="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Thời lượng</p>
                                    <p class="text-xl font-black text-gray-800">${lessons.length * 35} phút</p>
                                </div>
                                <div class="bg-white md:bg-gray-50/50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-gray-50">
                                    ${(() => {
                const openedLessons = JSON.parse(localStorage.getItem('edurobot_opened_lessons') || '{}');
                const weekOpenedCount = lessons.filter(l => {
                    const key = `${activeSubject}-w${l.week}-p${l.period}`;
                    return openedLessons[key];
                }).length;
                const percent = lessons.length > 0 ? Math.round((weekOpenedCount / lessons.length) * 100) : 0;
                return `
                                            <div class="flex justify-between items-end mb-2">
                                                <p class="text-[8px] text-gray-400 font-black uppercase tracking-widest">Mục tiêu đã đạt</p>
                                                <p class="text-sm font-black text-blue-600">${percent}%</p>
                                            </div>
                                            <div class="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                                <div class="h-full bg-blue-600 rounded-full transition-all duration-1000" style="width: ${percent}%"></div>
                                            </div>
                                        `;
            })()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Tab Bar (Mobile Only) -->
            <nav class="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 px-2 py-2 flex justify-around items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
                ${subjects.filter(s => !s.externalUrl).map(s => {
                const isActive = activeSubject === s.id;
                return `
                        <a onclick="router.selectDashboardSubject('${s.id}')" 
                           class="flex flex-col items-center gap-0.5 cursor-pointer group min-w-[56px]">
                            <div class="flex h-10 w-10 items-center justify-center rounded-full transition-all ${isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105' : 'text-gray-400 group-hover:bg-gray-100'
                    }">
                                <span class="text-lg leading-none">${s.icon}</span>
                            </div>
                            <p class="text-[9px] font-bold uppercase tracking-wide ${isActive ? 'text-blue-600' : 'text-gray-400'}">${s.shortName.split(' ')[0]}</p>
                        </a>
                    `;
            }).join('')}
            </nav>
        `;
    }
};
