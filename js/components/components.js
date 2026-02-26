// js/components/components.js - Aggregator cho hệ thống UI
import { common } from './common.js';
import { Dashboard } from './Dashboard.js';
import { Lesson } from './Lesson.js';
import { AIInteraction } from './AIInteraction.js';
import { Visuals } from './Visuals.js';
import { Quiz } from './Quiz.js';

export const UI = {
    ...common,
    ...Dashboard,
    ...Lesson,
    ...AIInteraction,
    ...Visuals,
    ...Quiz,

    renderNavbarSubjectSwitcher(currentSubject, allSubjects) {
        return `
            <button class="text-gray-500 hover:text-blue-600 transition-colors py-2 flex items-center gap-2 group">
                Bài học
                <svg class="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-gray-50 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50">
                ${allSubjects.map(s => `
                    <button onclick="router.navigateSubject('${s.id}')" 
                        class="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-black text-[10px] uppercase tracking-wide ${currentSubject.id === s.id ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-900'}">
                        <span class="text-lg">${s.icon}</span>
                        ${s.name}
                    </button>
                `).join('')}
            </div>
        `;
    },

    // Bộ giải mã placeholder [[TUTOR|id|requirement]] hoặc [[CUBE3D|label]]
    parseTutor(content) {
        if (!content) return '';

        // Xử lý [[TUTOR|id|req]]
        content = content.replace(/\[\[TUTOR\|([^|]+)\|([^\]]+)\]\]/g, (match, id, req) => {
            return this.renderTutor(id, req);
        });

        // Xử lý [[CUBE3D|label]]
        content = content.replace(/\[\[CUBE3D\|([^\]]+)\]\]/g, (match, label) => {
            return this.renderCube3D(label);
        });

        // Xử lý [[MATH_EX|id|display|label|action|answer]] hoặc [[READING_EX|...]]
        // Universal Parser: Tự động thích ứng với số lượng đối số khác nhau (2-5 đối số)
        content = content.replace(/\[\[(MATH_EX|READING_EX)\|([^|\]]+)\|([^|\]]+)(?:\|([^|\]]*))?(?:\|([^|\]]*))?(?:\|([^\]]*))?\]\]/g, (match, type, id, display, label, action, answer) => {
            return this.renderMathExercise(id, display, label || "Bài tập", action || "đọc là:", answer);
        });

        // Xử lý [[CONV_EX|id|display|unit|answer]]
        content = content.replace(/\[\[CONV_EX\|([^|\]]+)\|([^|\]]+)\|([^|\]]+)\|([^\]]*)\]\]/g, (match, id, display, unit, answer) => {
            return this.renderUnitConversionExercise(id, display, unit, answer);
        });

        // Xử lý [[CHAT_QUIZ|id|lesson_key]]
        content = content.replace(/\[\[CHAT_QUIZ\|([^|\]]+)\|([^\]]+)\]\]/g, (match, id, lessonKey) => {
            return AIInteraction.renderChatQuiz(id, lessonKey);
        });

        return content;
    }
};

window.UI = UI;
