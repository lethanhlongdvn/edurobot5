import { Lesson } from '../../components/Lesson.js';

export const lesson124 = {
    id: "math_5_124",
    subject: "Toán học",
    title: "Bài 53. Thể tích của hình lập phương",
    subtitle: "Chủ điểm: Hình học và Đo lường",
    week: "25",
    period: "124",
    content: `
        <div class="space-y-6 md:space-y-8 animate-fade-in pb-10">
            <!-- Hero Section -->
            <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-purple-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-6">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-3xl flex items-center justify-center text-3xl md:text-5xl shadow-xl shadow-purple-200 dark:shadow-purple-900/40 shrink-0 transform -rotate-6">🧊</div>
                    <div class="text-center md:text-left">
                        <h2 class="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-2 leading-tight">Khám phá Thể tích Hình lập phương</h2>
                        <p class="text-gray-500 dark:text-slate-400 font-bold text-sm md:text-base">Hình lập phương là một hình hộp chữ nhật đặc biệt có 3 cạnh bằng nhau: Dài = Rộng = Cao.</p>
                    </div>
                </div>
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-10"></div>
                <div class="absolute -left-10 -top-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-10"></div>
            </div>

            <!-- Khám phá qua hình ảnh -->
            <div class="bg-white dark:bg-slate-800 p-2 rounded-[40px] shadow-xl border border-purple-50">
                <div class="p-4 md:p-8 bg-purple-50/50 dark:bg-slate-900/50 rounded-[32px]">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div class="space-y-4">
                            <h3 class="text-2xl font-black text-purple-900 dark:text-purple-400 flex items-center gap-2">
                                <span class="p-2 bg-purple-600 rounded-xl text-white text-lg">!</span>
                                Quan sát và Suy luận
                            </h3>
                            <p class="text-lg font-bold text-gray-700 dark:text-slate-300 leading-relaxed italic">
                                "Muốn tính thể tích hình hộp chữ nhật, ta lấy chiều dài nhân chiều rộng rồi nhân với chiều cao. Với hình lập phương, cả 3 kích thước này đều bằng nhau!"
                            </p>
                            <div class="bg-white dark:bg-slate-800 p-6 rounded-3xl border-2 border-purple-100 shadow-inner">
                                <p class="text-xl font-black text-purple-600">Nếu gọi cạnh là a:</p>
                                <p class="text-3xl md:text-4xl font-black text-purple-900 dark:text-white mt-2">V = a &times; a &times; a</p>
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/124-khampha.png" alt="Khám phá" class="w-full max-w-[500px] h-auto rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 transition-all">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lab Hình học Động -->
            ${Lesson.renderDynamicGeometryLab('124-geo-lab', 'cube_volume', { a: 10 })}

            <!-- Kéo thả Công thức -->
            ${Lesson.renderDragDropFormula(
        '124-dd-formula',
        'Kéo các thẻ vào ô trống để lập hoàn chỉnh công thức tính thể tích (V) hình lập phương cạnh (a):',
        ['a', 'a', 'a', '+', 'x', 'V', 'S'],
        '<div class="text-3xl font-black text-purple-900 mr-2">V =</div>' +
        '<div class="drop-slot w-14 h-14 border-4 border-dashed border-purple-300 rounded-2xl flex items-center justify-center font-black text-2xl text-purple-300 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'124-dd-formula\')" onclick="Lesson.clearSlot(event, \'124-dd-formula\')">?</div>' +
        '<div class="text-2xl font-black text-purple-400">&times;</div>' +
        '<div class="drop-slot w-14 h-14 border-4 border-dashed border-purple-300 rounded-2xl flex items-center justify-center font-black text-2xl text-purple-300 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'124-dd-formula\')" onclick="Lesson.clearSlot(event, \'124-dd-formula\')">?</div>' +
        '<div class="text-2xl font-black text-purple-400">&times;</div>' +
        '<div class="drop-slot w-14 h-14 border-4 border-dashed border-purple-300 rounded-2xl flex items-center justify-center font-black text-2xl text-purple-300 bg-white/50 transition-all cursor-pointer hover:bg-white" data-value="" ondragover="Lesson.allowDrop(event)" ondragleave="Lesson.dragleave(event)" ondrop="Lesson.drop(event, \'124-dd-formula\')" onclick="Lesson.clearSlot(event, \'124-dd-formula\')">?</div>',
        { ordered: true, answer: ['a', 'a', 'a'] }
    )}
        </div>
    `,
    practice: `
        <div class="space-y-6 md:space-y-10 animate-fade-in pb-10">
            <!-- Bài 1: Bảng thể tích -->
            <div class="p-1 bg-white dark:bg-slate-800 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-xl overflow-hidden">
                <p class="p-6 font-black text-2xl text-teal-700 dark:text-teal-400 flex items-center gap-3">
                    <span class="w-12 h-12 bg-teal-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-teal-100">1</span>
                    Hoàn thành bảng tính Thể tích (V) sau đây:
                </p>
                <div class="p-4 bg-teal-50 dark:bg-slate-900 rounded-[32px] overflow-x-auto">
                    <table class="w-full text-center border-spacing-2 border-separate min-w-[500px]">
                        <thead>
                            <tr class="text-sm font-black text-teal-800 dark:text-teal-200 uppercase tracking-widest">
                                <th class="p-4 bg-white/50 dark:bg-slate-800 rounded-2xl">Cạnh (a)</th>
                                <th class="p-4 bg-white/50 dark:bg-slate-800 rounded-2xl">10 cm</th>
                                <th class="p-4 bg-white dark:bg-slate-700 rounded-2xl ring-4 ring-teal-200">2,5 dm</th>
                                <th class="p-4 bg-white/50 dark:bg-slate-800 rounded-2xl">0,4 m</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-4 font-black text-teal-900 dark:text-white uppercase text-xs">Thể tích (V)</td>
                                <td class="p-2">
                                    <div class="relative">
                                        <input type="number" id="ans-124-1a" class="w-full p-4 text-2xl font-black text-teal-600 bg-white dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-teal-500 shadow-sm transition-all text-center" placeholder="?">
                                        <span class="absolute bottom-1 right-2 text-[10px] font-bold text-gray-300">cm³</span>
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="relative">
                                        <input type="number" step="0.001" id="ans-124-1b" class="w-full p-4 text-2xl font-black text-teal-600 bg-white dark:bg-slate-800 rounded-2xl border-2 border-teal-200 focus:border-teal-500 shadow-md transition-all text-center" placeholder="?">
                                        <span class="absolute bottom-1 right-2 text-[10px] font-bold text-gray-300">dm³</span>
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="relative">
                                        <input type="number" step="0.001" id="ans-124-1c" class="w-full p-4 text-2xl font-black text-teal-600 bg-white dark:bg-slate-800 rounded-2xl border-2 border-transparent focus:border-teal-500 shadow-sm transition-all text-center" placeholder="?">
                                        <span class="absolute bottom-1 right-2 text-[10px] font-bold text-gray-300">m³</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Bài 2: Giải toán bánh bông lan -->
            ${Lesson.renderWordProblem(
        '124-wp-cake',
        'Mai có một chiếc bánh bông lan dạng hình hộp chữ nhật dài 30 cm, rộng 24 cm và cao 12 cm. Mai cắt chiếc bánh đó thành các miếng nhỏ dạng hình lập phương có cạnh 4 cm. Hỏi Mai cắt được bao nhiêu miếng bánh như vậy?',
        ['Tính Thể tích bánh bông lan ban đầu (V1 = d \u00d7 r \u00d7 c)', 'Tính Thể tích một miếng bánh nhỏ (V2 = a \u00d7 a \u00d7 a)', 'Số miếng bánh = V1 \u00f7 V2'],
        '135'
    )}

            <!-- Bài 3: Mai Robot -->
            <div id="box-124-3" class="p-1 bg-white dark:bg-slate-800 rounded-[40px] border border-gray-100 dark:border-slate-700 shadow-2xl overflow-hidden group">
                <p class="p-6 font-black text-2xl text-rose-700 dark:text-rose-400 flex items-center gap-3">
                    <span class="w-12 h-12 bg-rose-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-rose-100">3</span>
                    Thử tài quan sát: Rô-bốt của Mai
                </p>
                <div class="bg-rose-50 dark:bg-slate-900/50 p-6 md:p-10 rounded-[32px] m-1 border-2 border-rose-100 dark:border-rose-900/30">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <img src="hinh_anh/toan/toan_tap_2/124-b3-mairobot.png" alt="Mai Robot" class="w-full max-w-[400px] mx-auto rounded-3xl shadow-2xl border-8 border-white dark:border-slate-800 group-hover:rotate-2 transition-transform">
                        <div class="space-y-6">
                            <div class="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-rose-100">
                                <p class="text-sm font-black text-rose-900 dark:text-rose-400 uppercase tracking-widest mb-3">a) Mai đã dùng bao nhiêu khối lập phương 1cm để tạo thành hình bên?</p>
                                <select id="ans-124-3a" class="w-full p-4 bg-rose-50 dark:bg-slate-900 border-2 border-rose-100 rounded-2xl text-xl font-black text-rose-700 focus:ring-4 focus:ring-rose-200 outline-none">
                                    <option value="">-- Chọn đáp án --</option>
                                    <option value="8">8 khối</option>
                                    <option value="10">10 khối</option>
                                    <option value="12">12 khối</option>
                                    <option value="16">16 khối</option>
                                </select>
                            </div>
                            <div class="bg-white dark:bg-slate-800 p-6 rounded-3xl shadow-lg border border-pink-100">
                                <p class="text-sm font-black text-pink-900 dark:text-pink-400 uppercase tracking-widest mb-3">b) Thể tích của cả khối hình đó là bao nhiêu cm³?</p>
                                <div class="flex items-center gap-4">
                                    <input type="number" id="ans-124-3b" class="w-full p-4 bg-pink-50 dark:bg-slate-900 border-2 border-pink-100 rounded-2xl text-2xl font-black text-pink-700 text-right focus:ring-4 focus:ring-pink-200 outline-none" placeholder="?">
                                    <span class="text-xl font-black text-pink-300 uppercase">cm³</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="submit124()" id="btn-submit-124" class="bg-purple-600 hover:bg-purple-700 text-white px-12 md:px-20 py-5 md:py-7 rounded-[32px] font-black text-2xl md:text-3xl uppercase tracking-widest shadow-2xl shadow-purple-300 dark:shadow-purple-900/40 transition-all transform hover:-translate-y-2 active:scale-95 flex items-center gap-4">
                    Nộp Bài <span class="text-4xl">🚀</span>
                </button>
            </div>

            <script>
                window.submit124 = function() {
                    const a1a = document.getElementById('ans-124-1a').value;
                    const a1b = document.getElementById('ans-124-1b').value;
                    const a1c = document.getElementById('ans-124-1c').value;
                    const a3a = document.getElementById('ans-124-3a').value;
                    const a3b = document.getElementById('ans-124-3b').value;

                    if (!a1a || !a1b || !a1c || !a3a || !a3b) {
                        alert("Thầy E nhắc bé: Hãy hoàn thành hết bài tập để đạt huy chương nhé! 🏆");
                        return;
                    }

                    let score = 0;
                    if (parseFloat(a1a) === 1000) score += 2;
                    if (parseFloat(a1b) === 15.625) score += 2;
                    if (parseFloat(a1c) === 0.064) score += 2;
                    if (a3a === '10') score += 2;
                    if (parseFloat(a3b) === 10) score += 2; // Giả sử mỗi khối là 1cm3 và có 10 khối

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Tiết 124: " + score + "/10", status, "btn-submit-124");
                    }
                    
                    if (score === 10) {
                        alert("XUẤT SẮC! 🎉 Bé đạt điểm 10 tuyệt đối. Thầy E rất tự hào về bé!");
                    } else {
                        alert("Bé làm tốt lắm! Điểm của bé là " + score + "/10. Hãy kiểm tra lại những câu chưa đúng nhé! ✨");
                    }
                };
            </script>
        </div>
    `,
    quizPool: [
        { "question": "Thể tích hình lập phương có cạnh 5cm là:", "options": ["15 cm³", "25 cm³", "125 cm³", "50 cm³"], "answer": 2, "level": 1 },
        { "question": "Muốn tính thể tích hình lập phương, ta làm thế nào?", "options": ["Cạnh × cạnh", "Cạnh × cạnh × 6", "Cạnh × cạnh × cạnh", "Cạnh × cạnh × 4"], "answer": 2, "level": 1 },
        { "question": "Nếu tăng cạnh hình lập phương lên gấp đôi, thể tích thay đổi thế nào?", "options": ["Gấp 2 lần", "Gấp 4 lần", "Gấp 6 lần", "Gấp 8 lần"], "answer": 3, "level": 2 },
        { "question": "Cạnh hình lập phương là 0,5m. Thể tích hình đó là:", "options": ["0,25 m³", "1,25 m³", "0,125 m³", "0,15 m³"], "answer": 2, "level": 1 },
        { "question": "Một hình lập phương có diện tích một mặt là 36 cm². Thể tích của nó là:", "options": ["216 cm³", "36 cm³", "72 cm³", "108 cm³"], "answer": 0, "level": 2 }
    ]
};
