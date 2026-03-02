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
                        <h2 class="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">Demo 7 Công cụ Tương tác</h2>
                        <p class="text-gray-500 dark:text-slate-400 font-bold text-sm md:text-base">Kiểm tra trải nghiệm toàn bộ hệ thống bài tập: Kéo thả, Phòng lab, Nối ghép, Tải ảnh, Đặt tính, Phân số, Giải toán.</p>
                    </div>
                </div>
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10"></div>
                <div class="absolute -left-10 -top-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
            </div>

            <!-- ★ MODULE 1: KÉO THẢ (Drag & Drop) -->
            ${Lesson.renderDragDropFormula(
        '127-dd-1',
        'Kéo thả vào ô trống để lập công thức diện tích tam giác (S)',
        ['a', 'b', 'h', '2', '÷', '×', '+'],
        '<span class="text-2xl font-black text-blue-900">S =</span>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>' +
        '<div class="drop-slot w-12 h-12 border-2 border-dashed border-gray-400 rounded-xl flex items-center justify-center font-black text-xl text-gray-400 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'127-dd-1\')" onclick="Lesson.clearSlot(event, \'127-dd-1\')">?</div>',
        { ordered: true, answer: ['a', '×', 'h', '÷', '2'] }
    )}

            <!-- ★ MODULE 2: PHÒNG LAB HÌNH HỌC (Geometry Lab) -->
            ${Lesson.renderDynamicGeometryLab(
        '127-geo-1',
        'rectangle_area',
        { a: 5, b: 3 }
    )}

            <!-- ★ MODULE 5 (MỚI): ĐẶT TÍNH RỒI TÍNH (Vertical Calculation Grid) -->
            ${Lesson.renderVerticalCalculation('127-vc-1', '36.5', '+', '14.8', '51.3')}
            ${Lesson.renderVerticalCalculation('127-vc-2', '125', '*', '4', '500')}

            <!-- ★ MODULE 6 (MỚI): PHÂN SỐ (Fraction Input) -->
            ${Lesson.renderFractionInput('127-frac-1', 'Rút gọn phân số: 12/18 = ?', '2', '3')}
            ${Lesson.renderFractionInput('127-frac-2', 'Tính: 1/4 + 2/4 = ?', '3', '4')}
        </div>
    `,
    practice: `
        <div class="space-y-6 md:space-y-8 animate-fade-in pb-10">
            <!-- ★ MODULE 3: BÀI TẬP NỐI GHÉP (Matching) -->
            ${Lesson.renderMatchingExercise(
        '127-match-1',
        'Nối tên gọi với công thức diện tích tương ứng:',
        ['Hình chữ nhật', 'Hình tam giác', 'Hình thang'],
        ['(a + b) × h ÷ 2', 'a × b', 'a × h ÷ 2'],
        [{ leftIdx: 0, rightIdx: 1 }, { leftIdx: 1, rightIdx: 2 }, { leftIdx: 2, rightIdx: 0 }]
    )}

            <!-- ★ MODULE 4: TẢI ẢNH THỰC TẾ (Real World Measurement) -->
            ${Lesson.renderRealWorldMeasurement(
        '127-real-1',
        'Thực hành đo đạc thực tế',
        'Hãy chụp ảnh một vật có dạng hình hộp chữ nhật và ghi lại các số đo của nó.'
    )}

            <!-- ★ MODULE 7 (MỚI): GIẢI TOÁN CÓ LỜI VĂN (Word Problem - 3 Steps) -->
            ${Lesson.renderWordProblem(
        '127-wp-1',
        'Một ô tô đi từ A đến B với vận tốc 45 km/giờ hết 2,5 giờ. Tính quãng đường từ A đến B.',
        ['Nhớ công thức: s = v × t', 'Vận tốc (v) = 45 km/giờ', 'Thời gian (t) = 2,5 giờ'],
        '112.5km'
    )}

            <!-- Nút nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành bài Demo Interactive', 100)" class="bg-blue-600 hover:bg-blue-700 text-white px-10 md:px-16 py-4 md:py-6 rounded-[32px] font-black text-xl md:text-2xl uppercase tracking-widest shadow-2xl shadow-blue-300 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4">
                    Nộp Bài <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        { question: "Diện tích hình chữ nhật có chiều dài 8cm, chiều rộng 5cm là:", options: ["40 cm²", "26 cm²", "13 cm²", "35 cm²"], answer: 0, level: 1 },
        { question: "3/5 + 1/5 = ?", options: ["4/5", "4/10", "2/5", "3/10"], answer: 0, level: 1 },
        { question: "36.5 + 14.8 = ?", options: ["51.3", "50.3", "51.8", "50.13"], answer: 0, level: 1 },
        { question: "Chu vi hình vuông cạnh 7cm là:", options: ["28 cm", "49 cm²", "14 cm", "21 cm"], answer: 0, level: 1 },
        { question: "125 × 4 = ?", options: ["500", "450", "520", "400"], answer: 0, level: 1 },
        { question: "Rút gọn phân số 12/18 được:", options: ["2/3", "3/4", "4/6", "6/9"], answer: 0, level: 2 },
        { question: "Diện tích tam giác đáy 10cm cao 6cm:", options: ["30 cm²", "60 cm²", "16 cm²", "32 cm²"], answer: 0, level: 2 },
        { question: "Ô tô đi 45 km/h trong 2,5 giờ. Quãng đường đi là:", options: ["112,5 km", "47,5 km", "90 km", "67,5 km"], answer: 0, level: 2 },
        { question: "3/4 - 1/2 = ?", options: ["1/4", "2/4", "1/2", "2/6"], answer: 0, level: 2 },
        { question: "Diện tích hình thang có đáy lớn 12cm, đáy nhỏ 8cm, cao 5cm:", options: ["50 cm²", "100 cm²", "60 cm²", "40 cm²"], answer: 0, level: 3 }
    ]
};
