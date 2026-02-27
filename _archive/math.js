export const mathData = [
    {
        "week": "1",
        "period": "1",
        "title": "Bài 1. Ôn tập số tự nhiên (tiết 1)",
        "content": `
        <div class="space-y-6">
            <div class="bg-blue-50 p-8 rounded-[32px] border-l-8 border-blue-600 shadow-sm animate-fade-in">
                <h3 class="text-blue-900 font-black text-2xl mb-3">🎯 Mục tiêu bài học</h3>
                <ul class="list-disc list-inside text-blue-800 space-y-2 font-bold text-lg">
                    <li>Ôn tập cách đọc, viết các số tự nhiên đến lớp triệu.</li>
                    <li>Củng cố kiến thức về cấu tạo thập phân của số tự nhiên.</li>
                    <li>Rèn luyện kỹ năng xác định giá trị của chữ số theo vị trí.</li>
                </ul>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div class="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-blue-500">
                    <h4 class="font-black text-xl text-gray-900 mb-4 flex items-center gap-2">
                        <span class="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-black">E</span>
                        Đọc số tự nhiên
                    </h4>
                    <p class="text-gray-600 leading-relaxed font-medium">Để đọc số tự nhiên, ta tách số thành từng lớp (lớp triệu, lớp nghìn, lớp đơn vị) từ phải sang trái, mỗi lớp có ba hàng.</p>
                </div>
                <div class="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-indigo-500">
                    <h4 class="font-black text-xl text-gray-900 mb-4 flex items-center gap-2">
                        <span class="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-black">E</span>
                        Hàng và Lớp
                    </h4>
                    <p class="text-gray-600 leading-relaxed font-medium">Mỗi chữ số nằm ở một hàng khác nhau thì có giá trị khác nhau. Ví dụ: Số 5 trong hàng chục có giá trị là 50.</p>
                </div>
            </div>

            <!-- Tutor tương tác trong bài học -->
            [[TUTOR|study-1|Thử thách: Em hãy viết cách đọc số sau bằng chữ: 45 000 708]]

            <div class="p-8 rounded-[32px] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-100">
                <h4 class="text-xl font-black mb-4">💡 Ghi nhớ nhanh</h4>
                <p class="opacity-90 leading-relaxed">Để đọc số tự nhiên, ta tách số thành từng lớp (từ phải sang trái), mỗi lớp có 3 hàng. Sau đó đọc từ trái sang phải.</p>
            </div>
        </div>
    `,
        "practice": `
        <div class="space-y-8">
            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-xl mb-6 text-blue-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài tập 1: Đọc các số sau
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-50 p-6 rounded-3xl font-mono font-black text-2xl text-center text-gray-700 border border-gray-100">45 708 320</div>
                    <div class="bg-gray-50 p-6 rounded-3xl font-mono font-black text-2xl text-center text-gray-700 border border-gray-100">9 005 600</div>
                </div>
                
                <!-- Tutor tương tác trong bài tập -->
                [[TUTOR|pract-1|Bài tập chuyên sâu: Số 102 345 009 đọc là gì?]]
            </div>
            
            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-xl mb-6 text-blue-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài tập 2: Cấu tạo số
                </p>
                <div class="bg-blue-50/30 p-8 rounded-3xl border border-blue-100">
                    <p class="italic text-gray-600 mb-6 text-lg font-bold">Số 5 702 341 gồm:</p>
                    <ul class="space-y-4 font-black text-gray-700 text-lg">
                        <li class="flex items-center gap-4"><div class="w-3 h-3 bg-blue-500 rounded-full"></div> ... triệu, ... trăm nghìn</li>
                        <li class="flex items-center gap-4"><div class="w-3 h-3 bg-blue-500 rounded-full"></div> ... nghìn, ... trăm</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
        "quizPool": [
            { "question": "Số 45 000 708 đọc là:", "options": ["Bốn mươi lăm triệu bảy trăm linh tám", "Bốn mươi lăm nghìn bảy trăm linh tám", "Bốn mươi lăm triệu không nghìn bảy trăm linh tám", "Bốn trăm năm mươi triệu bảy trăm linh tám"], "answer": 0, "level": 1 },
            { "question": "Chữ số 7 trong số 175 403 210 thuộc hàng nào?", "options": ["Hàng triệu", "Hàng chục triệu", "Hàng nghìn", "Hàng đơn vị"], "answer": 1, "level": 1 },
            { "question": "Số 'Hai mươi triệu không trăm linh năm nghìn' viết là:", "options": ["20 005 000", "20 050 000", "2 005 000", "200 005 000"], "answer": 0, "level": 1 },
            { "question": "Giá trị của chữ số 3 trong số 45 308 000 là:", "options": ["300", "300 000", "30 000", "3 000 000"], "answer": 1, "level": 1 },
            { "question": "Số lớn nhất có 7 chữ số khác nhau là:", "options": ["9 999 999", "9 876 543", "1 023 456", "9 000 000"], "answer": 1, "level": 1 },
            { "question": "Số gồm 5 triệu, 4 trăm và 3 đơn vị là:", "options": ["5 403", "5 000 403", "5 400 003", "5 004 300"], "answer": 1, "level": 2 },
            { "question": "Viết số 4 050 700 dưới dạng tổng các lớp:", "options": ["4 000 000 + 50 000 + 700", "4 000 000 + 5 000 + 700", "400 000 + 50 000 + 7", "4 000 + 50 + 7"], "answer": 0, "level": 2 },
            { "question": "Số liền sau của số 99 999 999 là:", "options": ["100 000 000", "99 999 998", "1 000 000", "10 000 000"], "answer": 0, "level": 2 },
            { "question": "Xếp các số sau theo thứ tự từ bé đến lớn: 5 000, 50 000, 500, 5 500", "options": ["500; 5 000; 5 500; 50 000", "50 000; 5 500; 5 000; 500", "500; 5 500; 5 000; 50 000", "5 000; 500; 5 500; 50 000"], "answer": 0, "level": 2 },
            { "question": "Số nào dưới đây có giá trị chữ số 5 là 50 000?", "options": ["5 700 000", "150 200", "2 050 100", "500 000"], "answer": 2, "level": 2 },
            { "question": "Từ các chữ số 0, 1, 2, 3, viết được bao nhiêu số có 3 chữ số khác nhau?", "options": ["18 số", "24 số", "12 số", "6 số"], "answer": 0, "level": 3 },
            { "question": "Tìm X, biết X là số tròn triệu và 3 000 000 < X < 5 000 000", "options": ["4 000 000", "3 500 000", "4 500 000", "Không có số nào"], "answer": 0, "level": 3 },
            { "question": "Tìm số tự nhiên nhỏ nhất có tổng các chữ số bằng 15", "options": ["69", "159", "78", "149"], "answer": 0, "level": 3 },
            { "question": "Nếu tăng một số tự nhiên thêm 10 đơn vị rồi gấp lên 3 lần thì được 39. Số đó là:", "options": ["3", "13", "9", "29"], "answer": 0, "level": 3 },
            { "question": "Lớp triệu gồm các hàng nào?", "options": ["Triệu, chục triệu, trăm triệu", "Đơn vị, chục, trăm", "Nghìn, chục nghìn, trăm nghìn", "Tất cả các hàng"], "answer": 0, "level": 1 },
            { "question": "Số 0 là số tự nhiên nhỏ nhất?", "options": ["Đúng", "Sai"], "answer": 0, "level": 1 },
            { "question": "Khi viết số tự nhiên, ta dùng mấy chữ số?", "options": ["10 chữ số", "9 chữ số", "vô số chữ số", "100 chữ số"], "answer": 0, "level": 1 },
            { "question": "Có bao nhiêu số có 1 chữ số?", "options": ["10", "9", "8", "11"], "answer": 0, "level": 1 },
            { "question": "Số lớn nhất không có?", "options": ["Đúng", "Sai"], "answer": 0, "level": 1 },
            { "question": "Hai số tự nhiên liên tiếp hơn kém nhau bao nhiêu đơn vị?", "options": ["1", "2", "10", "100"], "answer": 0, "level": 1 }
        ]
    },
    {
        "week": "1",
        "period": "2",
        "title": "Bài 1. Ôn tập số tự nhiên (tiết 2)",
        "content": `
        <div class="space-y-6">
            <div class="bg-emerald-50 p-8 rounded-[32px] border-l-8 border-emerald-600 shadow-sm animate-fade-in">
                <h3 class="text-emerald-900 font-black text-2xl mb-3">🎯 Mục tiêu bài học</h3>
                <ul class="list-disc list-inside text-emerald-800 space-y-2 font-bold text-lg">
                    <li>Ôn tập về so sánh các số tự nhiên.</li>
                    <li>Sắp xếp các số tự nhiên theo thứ tự từ bé đến lớn và ngược lại.</li>
                    <li>Củng cố kiến thức về số chẵn, số lẻ và các đặc điểm của dãy số tự nhiên.</li>
                </ul>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div class="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-emerald-500">
                    <h4 class="font-black text-xl text-gray-900 mb-4 flex items-center gap-2">
                        <span class="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-sm font-black">E</span>
                        So sánh số tự nhiên
                    </h4>
                    <p class="text-gray-600 leading-relaxed font-medium">Số nào có nhiều chữ số hơn thì lớn hơn. Nếu số chữ số bằng nhau, ta so sánh từng cặp chữ số ở cùng một hàng kể từ trái sang phải.</p>
                </div>
                <div class="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-teal-500">
                    <h4 class="font-black text-xl text-gray-900 mb-4 flex items-center gap-2">
                        <span class="w-8 h-8 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center text-sm font-black">E</span>
                        Số chẵn và số lẻ
                    </h4>
                    <p class="text-gray-600 leading-relaxed font-medium">Số chẵn có chữ số tận cùng là 0, 2, 4, 6, 8. Số lẻ có chữ số tận cùng là 1, 3, 5, 7, 9.</p>
                </div>
            </div>

            [[TUTOR|study-2-1|Em hãy so sánh hai số sau và giải thích vì sao: 120 345 000 và 120 354 000]]

            <div class="p-8 rounded-[32px] bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-xl shadow-emerald-100">
                <h4 class="text-xl font-black mb-4">💡 Ghi nhớ nhanh</h4>
                <p class="opacity-90 leading-relaxed font-medium">Trong dãy số tự nhiên 0, 1, 2, 3... hai số liên tiếp hơn kém nhau 1 đơn vị. Số 0 là số tự nhiên nhỏ nhất, không có số tự nhiên lớn nhất.</p>
            </div>
        </div>
    `,
        "practice": `
        <div class="space-y-8">
            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-xl mb-6 text-emerald-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài tập 1: Sắp xếp thứ tự
                </p>
                <p class="text-gray-600 mb-4 font-bold">Hãy sắp xếp các số sau theo thứ tự từ bé đến lớn:</p>
                <div class="bg-gray-50 p-6 rounded-3xl font-mono font-black text-xl text-center text-gray-700 border border-gray-100">
                    67 340; 67 430; 67 034; 67 043
                </div>
                [[TUTOR|pract-2-1|Em hãy viết kết quả sắp xếp của mình vào đây nhé!]]
            </div>

            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-xl mb-6 text-emerald-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài tập 2: Số chẵn - Số lẻ
                </p>
                <div class="bg-teal-50/30 p-8 rounded-3xl border border-teal-100">
                    <p class="italic text-gray-600 mb-4 text-lg font-bold">Viết 5 số chẵn liên tiếp, biết số lớn nhất là 100:</p>
                    <div class="flex justify-center gap-2">
                        <div class="w-12 h-12 bg-white rounded-lg border border-teal-200 flex items-center justify-center font-black text-teal-600 shadow-sm">...</div>
                        <div class="w-12 h-12 bg-white rounded-lg border border-teal-200 flex items-center justify-center font-black text-teal-600 shadow-sm">...</div>
                        <div class="w-12 h-12 bg-white rounded-lg border border-teal-200 flex items-center justify-center font-black text-teal-600 shadow-sm">...</div>
                        <div class="w-12 h-12 bg-white rounded-lg border border-teal-200 flex items-center justify-center font-black text-teal-600 shadow-sm">...</div>
                        <div class="w-12 h-12 bg-teal-600 rounded-lg border border-teal-600 flex items-center justify-center font-black text-white shadow-sm">100</div>
                    </div>
                </div>
                [[TUTOR|pract-2-2|4 số còn lại là những số nào con nhỉ?]]
            </div>
        </div>
    `,
        "quizPool": [
            { "question": "Số nào lớn nhất trong các số sau: 45 700; 45 070; 45 007; 45 707", "options": ["45 700", "45 070", "45 007", "45 707"], "answer": 0, "level": 1 },
            { "question": "Số bé nhất có 5 chữ số khác nhau là:", "options": ["10 000", "12 345", "10 234", "10 230"], "answer": 2, "level": 1 },
            { "question": "Số chẵn bèn nhất có 4 chữ số là:", "options": ["1 000", "1 002", "1 110", "1 001"], "answer": 0, "level": 1 },
            { "question": "Dãy số nào sau đây gồm các số tự nhiên liên tiếp?", "options": ["1, 2, 4, 5", "10, 11, 12, 13", "0, 2, 4, 6", "1, 3, 5, 7"], "answer": 1, "level": 1 },
            { "question": "Số 'Chín triệu không trăm linh chín' viết là:", "options": ["9 000 009", "9 009 000", "9 090 000", "9 000 090"], "answer": 0, "level": 1 },
            { "question": "Số tự nhiên nhỏ nhất là số nào?", "options": ["1", "0", "9", "Không có"], "answer": 1, "level": 1 },
            { "question": "Điền dấu thích hợp: 1 234 567 ... 1 234 657", "options": ["<", ">", "=", "Không so sánh được"], "answer": 0, "level": 1 },
            { "question": "Số lẻ lớn nhất có 3 chữ số là:", "options": ["999", "997", "901", "101"], "answer": 0, "level": 1 },
            { "question": "Hai số tự nhiên liên tiếp hơn kém nhau:", "options": ["1 đơn vị", "2 đơn vị", "10 đơn vị", "0 đơn vị"], "answer": 0, "level": 1 },
            { "question": "Số 0 là số tự nhiên chẵn hay lẻ?", "options": ["Số chẵn", "Số lẻ", "Không chẵn không lẻ", "Cả hai"], "answer": 0, "level": 2 },
            { "question": "Tìm X, biết X là số lẻ và 10 < X < 14", "options": ["11", "13", "11 và 13", "12"], "answer": 2, "level": 2 },
            { "question": "Có bao nhiêu số có 2 chữ số?", "options": ["90 số", "99 số", "100 số", "89 số"], "answer": 0, "level": 2 },
            { "question": "Số nào sau đây không phải số tự nhiên?", "options": ["0", "100", "1,5", "999 999"], "answer": 2, "level": 2 },
            { "question": "Viết số 4 507 thành tổng giá trị các chữ số:", "options": ["4000 + 500 + 7", "4000 + 50 + 7", "400 + 50 + 7", "4000 + 500 + 70"], "answer": 0, "level": 2 },
            { "question": "Dãy số tự nhiên có kết thúc bằng số nào?", "options": ["1 tỉ", "999...9", "Không có số cuối cùng", "10 tỉ"], "answer": 2, "level": 1 },
            { "question": "Tổng của số tự nhiên nhỏ nhất và số tự nhiên lớn nhất có 1 chữ số là:", "options": ["9", "10", "8", "0"], "answer": 0, "level": 2 },
            { "question": "Tìm số tự nhiên X sao cho 12 < X < 13", "options": ["12,5", "Không có số nào", "12", "13"], "answer": 1, "level": 3 },
            { "question": "Có bao nhiêu số chẵn có 2 chữ số?", "options": ["45 số", "50 số", "44 số", "46 số"], "answer": 0, "level": 3 },
            { "question": "Tìm số tự nhiên lớn nhất có các chữ số khác nhau và tổng các chữ số bằng 6", "options": ["3210", "60", "321", "210"], "answer": 0, "level": 3 },
            { "question": "Một dãy số có 10 số tự nhiên liên tiếp, số cuối là 20. Số đầu là:", "options": ["11", "10", "12", "9"], "answer": 0, "level": 3 }
        ]
    },
    {
        "week": "1",
        "period": "3",
        "title": "Bài 2. Ôn tập các phép tính với số tự nhiên (Tiết 1)",
        "content": `
        <div class="space-y-6">
            <div class="bg-indigo-50 p-8 rounded-[32px] border-l-8 border-indigo-600 shadow-sm animate-fade-in">
                <h3 class="text-indigo-900 font-black text-2xl mb-3">🎯 Mục tiêu bài học</h3>
                <ul class="list-disc list-inside text-indigo-800 space-y-2 font-bold text-lg">
                    <li>Ôn tập kỹ thuật tính cộng, trừ các số tự nhiên có nhiều chữ số.</li>
                    <li>Củng cố tính chất giao hoán, kết hợp của phép cộng.</li>
                    <li>Rèn luyện kỹ năng giải bài toán tìm X liên quan đến phép cộng, trừ.</li>
                </ul>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div class="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-indigo-500">
                    <h4 class="font-black text-xl text-gray-900 mb-4 flex items-center gap-2">
                        <span class="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm font-black">E</span>
                        Tính chất phép cộng
                    </h4>
                    <ul class="text-gray-600 leading-relaxed font-bold space-y-2">
                        <li>Giao hoán: a + b = b + a</li>
                        <li>Kết hợp: (a + b) + c = a + (b + c)</li>
                        <li>Cộng với 0: a + 0 = 0 + a = a</li>
                    </ul>
                </div>
                <div class="p-8 bg-white border border-gray-100 rounded-[32px] shadow-sm hover:shadow-xl transition-all border-b-4 border-b-purple-500">
                    <h4 class="font-black text-xl text-gray-900 mb-4 flex items-center gap-2">
                        <span class="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm font-black">E</span>
                        Phép trừ
                    </h4>
                    <p class="text-gray-600 leading-relaxed font-medium">Muốn thử lại phép trừ, ta lấy hiệu cộng với số trừ. Nếu kết quả bằng số bị trừ thì phép tính đúng.</p>
                </div>
            </div>

            [[TUTOR|study-3-1|Bạn hãy tính nhanh tổng sau bằng cách áp dụng tính chất kết hợp nhé: 235 + 456 + 765]]

            <div class="p-8 rounded-[32px] bg-gradient-to-br from-indigo-600 to-purple-700 text-white shadow-xl shadow-indigo-100">
                <h4 class="text-xl font-black mb-4">💡 Mẹo tìm X</h4>
                <ul class="opacity-90 leading-relaxed space-y-2 font-bold">
                    <li>Tìm số hạng: X = Tổng - Số hạng đã biết</li>
                    <li>Tìm số bị trừ: X = Hiệu + Số trừ</li>
                    <li>Tìm số trừ: X = Số bị trừ - Hiệu</li>
                </ul>
            </div>
        </div>
    `,
        "practice": `
        <div class="space-y-8">
            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-xl mb-6 text-indigo-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài tập 1: Đặt tính rồi tính
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100 italic font-black text-2xl text-gray-700">45 678 + 32 109</div>
                    <div class="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100 italic font-black text-2xl text-gray-700">100 000 - 45 678</div>
                </div>
                [[TUTOR|pract-3-1|Hãy viết kết quả phép tính trừ (100 000 - 45 678) vào đây nhé!]]
            </div>

            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-xl mb-6 text-indigo-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài tập 2: Tìm X
                </p>
                <div class="bg-indigo-50/30 p-8 rounded-3xl border border-indigo-100">
                    <p class="font-black text-2xl text-center text-gray-800">X - 450 = 3 200</p>
                </div>
                [[TUTOR|pract-3-2|Trong bài toán này X đóng vai trò là gì? Và kết quả X bằng bao nhiêu con nhỉ?]]
            </div>
        </div>
    `,
        "quizPool": [
            { "question": "Kết quả của phép tính 4500 + 3500 là:", "options": ["8000", "7000", "7500", "9000"], "answer": 0, "level": 1 },
            { "question": "Hiệu của 10 000 and 4 500 là:", "options": ["5 500", "6 500", "4 500", "14 500"], "answer": 0, "level": 1 },
            { "question": "Tính chất a + b = b + a gọi là tính chất gì?", "options": ["Giao hoán", "Kết hợp", "Phân phối", "Cộng với 0"], "answer": 0, "level": 1 },
            { "question": "Nếu x - 200 = 500 thì x bằng:", "options": ["700", "300", "200", "500"], "answer": 0, "level": 1 },
            { "question": "Số nào cộng với 0 cũng bằng chính nó?", "options": ["Số 0", "Số 1", "Mọi số tự nhiên", "Không có số nào"], "answer": 2, "level": 1 },
            { "question": "Tính nhanh: 125 + 34 + 75", "options": ["234", "209", "159", "300"], "answer": 0, "level": 1 },
            { "question": "Nếu 800 - x = 300 thì x bằng:", "options": ["500", "1100", "300", "800"], "answer": 0, "level": 1 },
            { "question": "Kết quả phép tính 1 234 + 0 là:", "options": ["1 234", "0", "1 235", "1"], "answer": 0, "level": 1 },
            { "question": "Trong phép cộng, các thành phần gọi là gì?", "options": ["Số hạng và Tổng", "Số bị trừ, số trừ, hiệu", "Thừa số, tích", "Số bị chia, số chia, thương"], "answer": 0, "level": 1 },
            { "question": "Kết quả của (12 + 8) + 15 là:", "options": ["35", "20", "25", "30"], "answer": 0, "level": 1 },
            { "question": "Tổng của số lẻ bé nhất có 2 chữ số và số chẵn lớn nhất có 2 chữ số là:", "options": ["109", "110", "100", "108"], "answer": 0, "level": 2 },
            { "question": "Hiệu của số lớn nhất có 4 chữ số và số nhỏ nhất có 4 chữ số là:", "options": ["8 999", "9 000", "9 999", "1 000"], "answer": 0, "level": 2 },
            { "question": "Tìm X: 450 + X = 1000", "options": ["550", "650", "450", "1450"], "answer": 0, "level": 2 },
            { "question": "Tính nhanh: 99 + 98 + 1 + 2", "options": ["200", "199", "100", "201"], "answer": 0, "level": 2 },
            { "question": "Một cửa hàng có 500kg gạo, buổi sáng bán 120kg, buổi chiều bán 150kg. Còn lại:", "options": ["230kg", "270kg", "380kg", "130kg"], "answer": 0, "level": 2 },
            { "question": "Nếu giảm số bị trừ đi 10 đơn vị thì hiệu sẽ:", "options": ["Giảm 10 đơn vị", "Tăng 10 đơn vị", "Không đổi", "Giảm 20 đơn vị"], "answer": 0, "level": 2 },
            { "question": "Tìm X: (X + 100) - 50 = 200", "options": ["150", "250", "100", "300"], "answer": 0, "level": 3 },
            { "question": "Tổng của 5 số lẻ liên tiếp bắt đầu từ 1 là:", "options": ["25", "15", "20", "30"], "answer": 0, "level": 3 },
            { "question": "Tìm một số biết rằng nếu lấy số đó cộng with 120 rồi trừ đi 50 thì được 200", "options": ["130", "370", "170", "230"], "answer": 0, "level": 3 },
            { "question": "Hiệu giữa số lớn nhất có 5 chữ số và số lớn nhất có 4 chữ số là:", "options": ["90 000", "9 000", "99 999", "10 000"], "answer": 0, "level": 3 }
        ]
    },
    {
        "week": "23",
        "period": "111",
        "title": "Bài 47. Mét khối (tiết 1)",
        "content": `
        <div class="space-y-6">
            <div class="bg-blue-50 p-8 rounded-[32px] border-l-8 border-blue-600 shadow-sm animate-fade-in">
                <h3 class="text-blue-900 font-black text-2xl mb-3">🎯 Mục tiêu bài học</h3>
                <ul class="list-disc list-inside text-blue-800 space-y-2 font-bold text-lg">
                    <li>Làm quen với đơn vị đo thể tích: mét khối (m³).</li>
                    <li>Biết đọc, viết và hiểu giá trị của mét khối.</li>
                    <li>Nắm vững mối quan hệ giữa m³, dm³ và cm³.</li>
                </ul>
            </div>

            <div class="glass-card p-8 rounded-[40px] bg-white border border-blue-100 shadow-xl relative">
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <h4 class="text-2xl font-black text-blue-800 mb-6 flex items-center gap-3">
                    <span class="p-2 bg-blue-600 text-white rounded-2xl">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </span>
                    Khái niệm Mét khối (m³)
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="space-y-4">
                        <p class="text-gray-700 text-lg leading-relaxed">
                            <span class="font-black text-blue-600">Mét khối</span> là thể tích của hình lập phương có cạnh dài <span class="font-black">1 m</span>.
                        </p>
                        <div class="p-4 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <p class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Kí hiệu viết tắt</p>
                            <p class="text-3xl font-black text-gray-800">m³</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        [[CUBE3D|1 m³]]
                    </div>
                </div>
            </div>

            <div class="p-8 rounded-[32px] bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-2xl">
                <h4 class="text-xl font-black mb-6 flex items-center gap-2">
                    🔄 Mối quan hệ giữa các đơn vị
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 text-center">
                        <p class="text-[10px] uppercase font-bold opacity-60 mb-1">1 m³ bằng</p>
                        <p class="text-xl font-black">1 000 dm³</p>
                    </div>
                    <div class="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 text-center">
                        <p class="text-[10px] uppercase font-bold opacity-60 mb-1">1 m³ bằng</p>
                        <p class="text-xl font-black">1 000 000 cm³</p>
                    </div>
                    <div class="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 text-center">
                        <p class="text-[10px] uppercase font-bold opacity-60 mb-1">1 dm³ bằng</p>
                        <p class="text-xl font-black">1/1000 m³</p>
                    </div>
                </div>
                <div class="mt-6 pt-6 border-t border-white/10 text-sm italic opacity-80 text-center">
                    Mỗi đơn vị đo thể tích gấp 1000 lần đơn vị bé hơn tiếp liền.
                </div>
            </div>

            [[TUTOR|study-47-1|Em hãy thử tài: Một bể bơi có thể tích là 3,5 m³. Vậy bể đó chứa được bao nhiêu đề-xi-mét khối nước nhỉ?]]
        </div>
    `,
        "practice": `
        <div class="space-y-8">
            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-xl mb-6 text-blue-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài 1: Đọc số đo thể tích
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="group p-6 bg-blue-50 rounded-3xl text-center hover:bg-blue-600 transition-all cursor-pointer">
                        <p class="text-2xl font-black text-blue-600 group-hover:text-white">1,25 m³</p>
                        <p class="text-[10px] font-bold text-blue-300 mt-2 uppercase group-hover:text-blue-100">Bể bơi mini</p>
                    </div>
                    <div class="group p-6 bg-indigo-50 rounded-3xl text-center hover:bg-indigo-600 transition-all cursor-pointer">
                        <p class="text-2xl font-black text-indigo-600 group-hover:text-white">300 m³</p>
                        <p class="text-[10px] font-bold text-indigo-300 mt-2 uppercase group-hover:text-blue-100">Bể bơi gia đình</p>
                    </div>
                    <div class="group p-6 bg-purple-50 rounded-3xl text-center hover:bg-purple-600 transition-all cursor-pointer">
                        <p class="text-2xl font-black text-purple-600 group-hover:text-white">1 875 m³</p>
                        <p class="text-[10px] font-bold text-purple-300 mt-2 uppercase group-hover:text-blue-100">Bể bơi thi đấu</p>
                    </div>
                </div>
            </div>

            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden">
                <p class="font-black text-xl mb-6 text-blue-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài 2: Thử thách đổi đơn vị
                </p>
                <div class="bg-gray-50 p-8 rounded-[32px] relative">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 font-black">
                        <div class="bg-white p-4 rounded-2xl border border-gray-200">3 m³ = ? dm³</div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200">1,7 m³ = ? dm³</div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200">2 400 dm³ = ? m³</div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200">25 m³ = ? cm³</div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200">1/4 m³ = ? dm³</div>
                        <div class="bg-white p-4 rounded-2xl border border-gray-200">800 000 cm³ = ? m³</div>
                    </div>
                </div>
                [[TUTOR|pract-47-1|Em chọn 1 phép tính ở trên và giải đố cùng Thầy E nhé!]]
            </div>

            <div class="p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-xl mb-6 text-blue-600 flex items-center gap-3">
                    <span class="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">E</span>
                    Bài 3: Bài toán xe tải
                </p>
                <div class="bg-blue-600 p-8 rounded-[32px] text-white">
                    <p class="text-lg leading-relaxed font-medium mb-4 italic">"Một thùng xe tải có thể tích là 33,2 m³. Lượng hàng hóa trên thùng xe chiếm 80% thể tích của thùng xe. Tính thể tích phần còn trống trong thùng xe."</p>
                    <div class="flex items-center gap-4 py-4 px-6 bg-white/10 rounded-2xl border border-white/20">
                        <span class="text-2xl">🚛</span>
                        <div>
                            <p class="text-xs uppercase font-black opacity-60">Tổng thể tích</p>
                            <p class="text-2xl font-black">33,2 m³</p>
                        </div>
                        <div class="ml-auto text-right">
                            <p class="text-xs uppercase font-black opacity-60">Đã chiếm</p>
                            <p class="text-2xl font-black">80%</p>
                        </div>
                    </div>
                </div>
                [[TUTOR|pract-47-2|Thầy E gợi ý: Con có thể tính 20% thể tích còn lại, hoặc tính thể tích hàng rồi lấy Tổng trừ đi nhé. Con định làm cách nào?]]
            </div>
        </div>
    `,
        "quizPool": [
            { "question": "Đơn vị đo thể tích mét khối kí hiệu là:", "options": ["m²", "m", "m³", "cm³"], "answer": 2, "level": 1 },
            { "question": "1 m³ bằng bao nhiêu dm³?", "options": ["10", "100", "1 000", "10 000"], "answer": 2, "level": 1 },
            { "question": "Hình lập phương có cạnh 1m thì có thể tích là:", "options": ["1 m²", "1 m³", "100 dm³", "10 m³"], "answer": 1, "level": 1 },
            { "question": "1 m³ bằng bao nhiêu cm³?", "options": ["100", "10 000", "1 000 000", "1 000"], "answer": 2, "level": 1 },
            { "question": "Số 'Hai phẩy năm mét khối' viết là:", "options": ["2,5 m²", "2,5 m³", "25 m³", "0,25 m³"], "answer": 1, "level": 1 },
            { "question": "Để đo thể tích lớn như bể bơi, người ta dùng đơn vị:", "options": ["cm³", "mm³", "m³", "dm³"], "answer": 2, "level": 1 },
            { "question": "Đổi 5 m³ sang dm³ được kết quả:", "options": ["50", "500", "5 000", "50 000"], "answer": 2, "level": 1 },
            { "question": "0,5 m³ đọc là:", "options": ["Năm mét khối", "Không phẩy năm mét khối", "Năm phần mười mét khối", "Năm đề-xi-mét khối"], "answer": 1, "level": 1 },
            { "question": "Đúng hay Sai: 1 m³ = 100 dm³", "options": ["S", "Đ"], "answer": 0, "level": 1 },
            { "question": "Chọn dấu thích hợp: 2 m³ ... 2 000 dm³", "options": ["<", ">", "=", "Khác"], "answer": 2, "level": 1 },
            { "question": "Đổi 1,2 m³ sang dm³, kết quả là:", "options": ["12 dm³", "120 dm³", "1 200 dm³", "12 000 dm³"], "answer": 2, "level": 2 },
            { "question": "Đổi 2 500 dm³ sang m³, kết quả là:", "options": ["25 m³", "2,5 m³", "0,25 m³", "250 m³"], "answer": 1, "level": 2 },
            { "question": "Một khối bê tông có thể tích 3 m³. Mỗi mét khối bê tông nặng 2,5 tấn. Khối đó nặng:", "options": ["7,5 tấn", "5,5 tấn", "6 tấn", "4,5 tấn"], "answer": 0, "level": 2 },
            { "question": "Tính: 3 m³ + 450 dm³ = ... dm³", "options": ["453", "3450", "750", "3045"], "answer": 1, "level": 2 },
            { "question": "Phân số 1/4 m³ bằng bao nhiêu dm³?", "options": ["250 dm³", "25 dm³", "400 dm³", "500 dm³"], "answer": 0, "level": 2 },
            { "question": "7,005 m³ đọc là:", "options": ["Bảy phẩy năm mét khối", "Bảy phẩy không không năm mét khối", "Bảy trăm linh năm mét khối", "Bảy mét khối năm phần nghìn"], "answer": 1, "level": 2 },
            { "question": "Một bể cá chứa được 1,5 m³ nước. Hiện bể đang trống 20%. Lượng nước hiện có là:", "options": ["1,2 m³", "0,3 m³", "1,3 m³", "1,1 m³"], "answer": 0, "level": 3 },
            { "question": "Một khối gỗ hình lập phương cạnh 2m. Thể tích khối gỗ là:", "options": ["4 m³", "8 m³", "6 m³", "2 m³"], "answer": 1, "level": 3 },
            { "question": "Đổi 0,001 m³ sang cm³. Kết quả là:", "options": ["1 000 cm³", "100 cm³", "10 cm³", "1 cm³"], "answer": 0, "level": 3 },
            { "question": "Tỉ số thể tích giữa 1m³ and 1dm³ là:", "options": ["1/1000", "1000", "100", "10"], "answer": 1, "level": 3 }
        ]
    }
];
