// js/components/Lesson.js - Aggregator for modularized Lesson system
import { LessonCore } from './lesson/LessonCore.js';
import { LessonMath } from './lesson/LessonMath.js';
import { LessonInteractive } from './lesson/LessonInteractive.js';
import { LessonMedia } from './lesson/LessonMedia.js';
import { LessonSpeech } from './lesson/LessonSpeech.js';

export const Lesson = {
    ...LessonCore,
    ...LessonMath,
    ...LessonInteractive,
    ...LessonMedia,
    ...LessonSpeech
};

// Init Fill-Blanks slot click handler and Image Zoom
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        if (Lesson._initFillBlanksSlotClick) Lesson._initFillBlanksSlotClick();
        if (Lesson._initImageZoom) Lesson._initImageZoom();
    });
    // Also try immediate init in case DOM is already loaded
    if (document.readyState !== 'loading') {
        if (Lesson._initFillBlanksSlotClick) Lesson._initFillBlanksSlotClick();
        if (Lesson._initImageZoom) Lesson._initImageZoom();
    }
}

// Global exposure for backward compatibility with lesson data files
window.Lesson = Lesson;
