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
                <div class="col-span-full py-20 bg-white/40 rounded-[48px] border-2 border-dashed border-gray-100 text-center animate-fade-in">
                    <div class="text-5xl mb-6 opacity-20">📚</div>
                    <p class="text-gray-400 font-black italic mb-2 text-xl">Vùng kiến thức này đang được chuẩn bị...</p>
                    <p class="text-gray-400 text-[9px] font-black uppercase tracking-[0.3em]">Hệ thống EduRobot 5.0</p>
                </div>
            `;
        }
        return lessons.map(lesson => this.renderLessonCard(lesson, color)).join('');
    },

    renderLessonCard(lesson, subjectColor) {
        const color = common.getColorClasses(subjectColor);
        return `
            <div class="lesson-card glass-card rounded-[32px] p-4 md:p-5 hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 cursor-pointer border border-transparent hover:border-white/80 group relative overflow-hidden" 
                 onclick="router.renderLesson('${router.currentSubject}', '${lesson.period}')">
                <div class="flex justify-between items-center">
                    <div class="flex flex-col">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="w-1 h-1 ${color.bg} rounded-full"></span>
                            <span class="text-[10px] font-black uppercase ${color.text} tracking-[0.2em]">Tiết ${lesson.period}</span>
                        </div>
                        <h3 class="text-base md:text-lg font-black text-gray-800 ${color.hoverText} transition-colors leading-tight tracking-tight">${lesson.title}</h3>
                    </div>
                    <div class="w-10 h-10 ${color.light} rounded-xl flex items-center justify-center text-lg shadow-sm group-hover:rotate-12 transition-transform opacity-70">📖</div>
                </div>
            </div>
        `;
    },

    renderDashboard(subjects, activeSubject, activePeriod, weeks, lessons, lastLesson) {
        const subject = subjects.find(s => s.id === activeSubject);
        const color = common.getColorClasses(subject.color);

        return `
            <div class="flex h-[calc(100vh-64px)] overflow-hidden animate-fade-in shadow-2xl">
                <!-- Cột 1: Sidebar Môn học (Dọc kiểu TC) -->
                <aside class="w-16 md:w-20 bg-blue-600 p-3 flex flex-col gap-3 overflow-y-auto custom-scrollbar shrink-0 shadow-2xl z-20">
                    ${subjects.map(s => {
            const sColor = common.getColorClasses(s.color);
            const isActive = activeSubject === s.id;
            return `
                            <div onclick="router.selectDashboardSubject('${s.id}')" 
                                 class="flex flex-col items-center ${isActive ? 'bg-white' : 'bg-white/10 hover:bg-white/20'} rounded-xl py-5 px-1 transition-all cursor-pointer border-2 ${isActive ? 'border-transparent shadow-lg' : 'border-white/10'} group">
                                <span class="vertical-text font-black ${isActive ? 'text-blue-600' : 'text-white/80'} text-[12px] uppercase tracking-[0.2em] whitespace-nowrap group-hover:scale-105 transition-transform">${s.name}</span>
                            </div>
                        `;
        }).join('')}
                </aside>

                <!-- Cột 2: Danh sách Tuần (Dạng nút vuông Slim) -->
                <div class="w-16 md:w-20 bg-blue-700/95 flex flex-col items-center py-6 gap-4 overflow-y-auto custom-scrollbar shrink-0 z-10 shadow-inner">
                    ${weeks.map(w => {
            const isActive = router.currentWeek === w;
            return `
                <div onclick="router.selectDashboardWeek(${w})" 
                     class="group relative flex flex-col items-center justify-center w-12 h-12 rounded-2xl transition-all cursor-pointer ${isActive ? 'bg-white text-blue-700 shadow-xl scale-105' : 'bg-white/10 text-white/40 hover:bg-white/20 hover:text-white'}">
                    <span class="text-[6px] font-black uppercase leading-none mb-0.5">Tuần</span>
                    <span class="text-sm font-black leading-none">${w < 10 ? '0' + w : w}</span>
                </div>
            `;
        }).join('')}
                </div>

                <!-- Cột 3: Nội dung chi tiết (Main Content) -->
                <div class="flex-1 overflow-y-auto custom-scrollbar bg-gray-50/50 dark:bg-slate-950/50 p-4 md:p-8">
                    <div class="w-full mx-auto px-2">
                        <!-- Header Nội dung -->
                        <div class="mb-8">
                            <div class="flex items-center gap-3 mb-3">
                                <span class="bg-blue-100 text-blue-600 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest">${subject.name}</span>
                                <span class="text-gray-300">/</span>
                                <span class="text-gray-400 text-[9px] font-black uppercase tracking-widest">Tuần ${router.currentWeek}</span>
                            </div>
                            
                            <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div>
                                    <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-4">${subject.name} - Tuần ${router.currentWeek}</h2>
                                    <div class="flex flex-wrap gap-1.5">
                                        ${Object.keys(router.periodRanges).map(period => `
                                            <button onclick="router.selectDashboardPeriod('${period}')" 
                                                class="px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-wider transition-all ${activePeriod === period ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white dark:bg-slate-800 text-gray-400 hover:text-gray-600'}">
                                                ${period}
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                                <div class="bg-white dark:bg-slate-800 p-4 rounded-[28px] shadow-sm border border-gray-100 dark:border-slate-700 flex items-center gap-4">
                                    <div class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 text-xl">📈</div>
                                    <div>
                                        <p class="text-[8px] font-black text-gray-400 uppercase tracking-widest">Tiến độ tuần</p>
                                        <p class="text-lg font-black text-emerald-600 leading-none">100%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Lưới bài học -->
                        <div id="dashboard-lesson-list" class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
                            ${this.renderLessonList(lessons, subject.color)}
                        </div>

                        <!-- Tóm tắt Tiến độ (Cập nhật theo yêu cầu) -->
                        <div class="mt-8 bg-white dark:bg-slate-800 rounded-[32px] p-8 border border-gray-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                            <div class="absolute right-0 top-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform"></div>
                            <div class="flex items-center gap-3 mb-6 relative z-10">
                                <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-base shadow-lg shadow-blue-200">📊</div>
                                <h3 class="font-black text-gray-900 dark:text-white text-[10px] uppercase tracking-[0.25em]">Tóm tắt tiến độ tuần</h3>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                                <div class="bg-gray-50/50 dark:bg-slate-900/50 p-5 rounded-2xl border border-gray-50 dark:border-slate-700">
                                    <p class="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Số tiết học</p>
                                    <p class="text-xl font-black text-gray-800 dark:text-white">${lessons.length} tiết</p>
                                </div>
                                <div class="bg-gray-50/50 dark:bg-slate-900/50 p-5 rounded-2xl border border-gray-50 dark:border-slate-700">
                                    <p class="text-[8px] text-gray-400 font-black uppercase tracking-widest mb-1">Thời lượng</p>
                                    <p class="text-xl font-black text-gray-800 dark:text-white">${lessons.length * 35} phút</p>
                                </div>
                                <div class="bg-gray-50/50 dark:bg-slate-900/50 p-5 rounded-2xl border border-gray-50 dark:border-slate-700">
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
                                            <div class="w-full h-2.5 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
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
        `;
    }
};
