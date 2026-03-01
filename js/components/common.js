// js/components/common.js - Tiện ích và UI chung
export const common = {
    // Màu sắc Tailwind tương ứng
    // CSS Utilities from TC style
    injectTCStyles() {
        if (document.getElementById('tc-styles')) return;
        const style = document.createElement('style');
        style.id = 'tc-styles';
        style.textContent = `
            .vertical-text {
                writing-mode: vertical-rl;
                text-orientation: mixed;
                transform: rotate(180deg);
            }
            .custom-scrollbar::-webkit-scrollbar {
                width: 5px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 10px;
            }
            .timeline-line {
                position: absolute;
                left: 50%;
                top: 0;
                bottom: 0;
                width: 2px;
                background: repeating-linear-gradient(
                    to bottom,
                    #3D38FF,
                    #3D38FF 4px,
                    transparent 4px,
                    transparent 8px
                );
                transform: translateX(-50%);
                z-index: 0;
                opacity: 0.1;
            }
            .week-card.active {
                background: #3D38FF !important;
                color: white !important;
                border-color: #3D38FF !important;
            }
            .week-card.active * {
                color: white !important;
            }
        `;
        document.head.appendChild(style);
    },

    getColorClasses(color) {
        const classes = {
            blue: {
                bg: 'bg-blue-600',
                text: 'text-blue-600 dark:text-blue-400',
                light: 'bg-blue-50 dark:bg-blue-900/20',
                border: 'border-blue-600',
                shadow: 'shadow-blue-200 dark:shadow-blue-900/20',
                hover: 'hover:border-blue-200 dark:hover:border-blue-800',
                hoverText: 'group-hover:text-blue-600'
            },
            pink: {
                bg: 'bg-pink-600',
                text: 'text-pink-600 dark:text-pink-400',
                light: 'bg-pink-50 dark:bg-pink-900/20',
                border: 'border-pink-600',
                shadow: 'shadow-pink-200 dark:shadow-pink-900/20',
                hover: 'hover:border-pink-200 dark:hover:border-pink-800',
                hoverText: 'group-hover:text-pink-600'
            },
            emerald: {
                bg: 'bg-emerald-600',
                text: 'text-emerald-600 dark:text-emerald-400',
                light: 'bg-emerald-50 dark:bg-emerald-900/20',
                border: 'border-emerald-600',
                shadow: 'shadow-emerald-200 dark:shadow-emerald-900/20',
                hover: 'hover:border-emerald-200 dark:hover:border-emerald-800',
                hoverText: 'group-hover:text-emerald-600'
            },
            amber: {
                bg: 'bg-amber-600',
                text: 'text-amber-600 dark:text-amber-400',
                light: 'bg-amber-50 dark:bg-amber-900/20',
                border: 'border-amber-600',
                shadow: 'shadow-amber-200 dark:shadow-amber-900/20',
                hover: 'hover:border-amber-200 dark:hover:border-amber-800',
                hoverText: 'group-hover:text-amber-600'
            },
            orange: {
                bg: 'bg-orange-600',
                text: 'text-orange-600 dark:text-orange-400',
                light: 'bg-orange-50 dark:bg-orange-900/20',
                border: 'border-orange-600',
                shadow: 'shadow-orange-200 dark:shadow-orange-900/20',
                hover: 'hover:border-orange-200 dark:hover:border-orange-800',
                hoverText: 'group-hover:text-orange-600'
            },
            indigo: {
                bg: 'bg-indigo-600',
                text: 'text-indigo-600 dark:text-indigo-400',
                light: 'bg-indigo-50 dark:bg-indigo-900/20',
                border: 'border-indigo-600',
                shadow: 'shadow-indigo-200 dark:shadow-indigo-900/20',
                hover: 'hover:border-indigo-200 dark:hover:border-indigo-800',
                hoverText: 'group-hover:text-indigo-600'
            },
            violet: {
                bg: 'bg-violet-600',
                text: 'text-violet-600 dark:text-violet-400',
                light: 'bg-violet-50 dark:bg-violet-900/20',
                border: 'border-violet-600',
                shadow: 'shadow-violet-200 dark:shadow-violet-900/20',
                hover: 'hover:border-violet-200 dark:hover:border-violet-800',
                hoverText: 'group-hover:text-violet-600'
            }
        };
        return classes[color] || classes.blue;
    },

    renderEmptyState() {
        return `
            <div class="py-24 text-center">
                <p class="text-gray-400 font-bold uppercase tracking-widest">Đang cập nhật dữ liệu...</p>
            </div>
        `;
    }
};
