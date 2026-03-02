import { Lesson } from '../../components/Lesson.js';

export const lesson127 = {
    id: "math_5_127",
    subject: "Toán học",
    title: "Bài 55. Luyện tập chung (Demo Tương tác)",
    subtitle: "Chủ điểm: Ôn tập Hình học & Đo lường",
    week: "26",
    period: "127",
    content: `
        <div class="space-y-6 md:space-y-8 animate-fade-in pb-10">
            <!-- Hero Title -->
            <div class="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-blue-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-3xl flex items-center justify-center text-3xl md:text-5xl shadow-xl shadow-blue-200 dark:shadow-blue-900/40 shrink-0 transform -rotate-6">✨</div>
                    <div class="text-center md:text-left">
                        <h2 class="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">Bài Học Interactive Demo</h2>
                        <p class="text-gray-500 dark:text-slate-400 font-bold text-sm md:text-base">Kiểm tra trải nghiệm 4 tính năng tương tác mới: Kéo thả, Phòng lab, Nối ghép và Tải ảnh thực tế.</p>
                    </div>
                </div>
                <!-- Background decoration -->
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
                <div class="absolute -left-10 -top-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
            </div>

            <!-- 1. KÉO THẢ (Drag & Drop) -->
            ${Lesson.renderDragDropFormula(
        '127-dd-1',
        'Kéo thả hình vào ô trống lập công thức diện tích tam giác (S)',
        ['a', 'b', 'h', '2', '÷', '×', '+'],
        // Use a single line string to avoid nested template literals
        '<span class="text-2xl font-black text-blue-900">S =</span>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>',
        { ordered: true, answer: ['a', '×', 'h', '÷', '2'] }
    )}

            <!-- 2. PHÒNG LAB HÌNH HỌC (Geometry Lab) -->
            ${Lesson.renderDynamicGeometryLab(
        '127-geo-1',
        'rectangle_area',
        { a: 5, b: 3 }
    )}
        </div>
    `,
    practice: `
        <div class="space-y-6 md:space-y-8 animate-fade-in pb-10">
            <!-- 3. BÀI TẬP NỐI GHÉP (Matching) -->
            ${Lesson.renderMatchingExercise(
        '127-match-1',
        'Nối tên gọi với công thức diện tích tương ứng:',
        ['Hình chữ nhật', 'Hình tam giác', 'Hình thang'],
        ['(a + b) × h ÷ 2', 'a × b', 'a × h ÷ 2'],
        [{ leftIdx: 0, rightIdx: 1 }, { leftIdx: 1, rightIdx: 2 }, { leftIdx: 2, rightIdx: 0 }]
    )}

            <!-- 4. THỰC HÀNH TẢI ẢNH (Real World Measurement) -->
            ${Lesson.renderRealWorldMeasurement(
        '127-real-1',
        'Thực hành đo đạc thực tế',
        'Hãy chụp ảnh một vật có dạng hình hộp chữ nhật (như quyển sách, hộp quà) và ghi lại các số đo của nó vào khung bên dưới.'
    )}

            <!-- Nút nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành bài Demo Interactive', 100)" class="bg-blue-600 hover:bg-blue-700 text-white px-10 md:px-16 py-4 md:py-6 rounded-[32px] font-black text-xl md:text-2xl uppercase tracking-widest shadow-2xl shadow-blue-300 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4">
                    Nộp Bài <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: []
};
