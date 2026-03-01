export const lesson_222_viet = {
    "topic": "Tiếng Việt 5",
    "week": "22",
    "period": "222",
    "title": "VIẾT BÀI VĂN TẢ NGƯỜI",
    "desc": "Viết bài văn tả người",
    "subject": "Viết",
    "theme": "Vẻ đẹp cuộc sống",
    "audio": "",
    "content": `

<div class='space-y-8'><!-- Phần 1: Chọn Đề --><section class='space-y-4'><h2 class='text-xl font-black text-blue-800 flex items-center gap-2'><span class='bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm'>1</span>Chọn đề bài</h2><div class='grid grid-cols-1 gap-6'><button onclick='viet222_selectTopic(1)' id='viet222-topic-1' class='viet222-topic-btn group relative p-6 rounded-[24px] border-4 border-gray-100 hover:border-teal-400 transition-all text-left bg-blue-50 hover:bg-blue-100'><div class='absolute top-6 right-6 text-4xl opacity-50'>👀</div><h3 class='text-2xl font-black text-gray-800 mb-3'>Đề 1: Người mới gặp</h3><p class='text-gray-700 text-lg font-medium'>Tả một người em chỉ gặp một vài lần nhưng nhớ mãi.</p><div class='check-icon mt-4 hidden inline-block px-4 py-2 bg-teal-500 text-white font-bold text-base rounded-full'>Đã chọn ✓</div></button><button onclick='viet222_selectTopic(2)' id='viet222-topic-2' class='viet222-topic-btn group relative p-6 rounded-[24px] border-4 border-gray-100 hover:border-teal-400 transition-all text-left bg-pink-50 hover:bg-pink-100'><div class='absolute top-6 right-6 text-4xl opacity-50'>🎭</div><h3 class='text-2xl font-black text-gray-800 mb-3'>Đề 2: Nhân vật phim/kịch</h3><p class='text-gray-700 text-lg font-medium'>Tả nhân vật chính trong phim/kịch mà em đã xem.</p><div class='check-icon mt-4 hidden inline-block px-4 py-2 bg-teal-500 text-white font-bold text-base rounded-full'>Đã chọn ✓</div></button></div><div id='viet222-badge' class='hidden text-center'><span class='px-4 py-1 bg-teal-100 text-teal-700 rounded-full font-bold text-sm'>Đã chọn đề bài</span></div></section><!-- Phần 2: Viết Bài --><section id='viet222-p2' class='space-y-6 opacity-50 pointer-events-none grayscale transition-all duration-500'><h2 class='text-xl font-black text-blue-800 flex items-center gap-2'><span class='bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm'>2</span>Thực hành viết</h2><div class='bg-blue-50/80 p-4 rounded-[24px] border border-blue-200 text-blue-800 text-base font-bold flex items-center gap-3 animate-in slide-in-from-left-4'><span>💡 Mẹo: Em có thể nhấn vào nút 🎙️ cạnh tiêu đề mỗi phần để nhập bài bằng giọng nói cho nhanh nhé!</span></div><div class='bg-yellow-50 p-6 rounded-[24px] border border-yellow-200 shadow-sm'><label class='block text-yellow-800 font-bold text-base mb-2'>🌅 Mở bài</label><textarea id='viet222-mb' rows='3' class='w-full p-4 rounded-xl border-2 border-yellow-300 focus:outline-none focus:border-yellow-500 text-base bg-white' placeholder='Giới thiệu người định tả...'></textarea></div><div class='bg-blue-50 p-6 rounded-[24px] border border-blue-200 shadow-sm space-y-4'><label class='block text-blue-800 font-bold text-base'>📖 Thân bài</label><textarea id='viet222-tb' rows='10' class='w-full p-4 rounded-xl border-2 border-blue-200 mt-1 focus:outline-none focus:border-blue-500 bg-white' placeholder='Tả chi tiết về ngoại hình, tính cách, hoạt động...'></textarea></div><div class='bg-green-50 p-6 rounded-[24px] border border-green-200 shadow-sm'><label class='block text-green-800 font-bold text-base mb-2'>❤️ Kết bài</label><textarea id='viet222-kb' rows='3' class='w-full p-4 rounded-xl border-2 border-green-300 focus:outline-none focus:border-green-500 text-base bg-white' placeholder='Cảm nghĩ của em...'></textarea></div><!-- Image Upload --><div class='bg-indigo-50 p-6 rounded-[24px] border border-indigo-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4'><div class='flex-1'><label class='block text-indigo-800 font-bold text-base mb-1'>📷 Nộp ảnh chụp bài làm (nếu không nhập máy)</label><p class='text-sm text-indigo-600'>Em có thể viết ra giấy rồi chụp ảnh nộp cho thầy nhé!</p></div><div class='relative'><input type='file' id='viet222-file' accept='image/*' capture='environment' class='hidden' onchange='document.getElementById("file-status").innerText = "✅ Đã chọn ảnh: " + this.files[0].name; document.getElementById("file-status").classList.remove("hidden")'><label for='viet222-file' class='cursor-pointer bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl border-2 border-indigo-300 hover:bg-indigo-50 transition-all flex items-center gap-2 shadow-sm'><div class="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div><span> Chọn / Chụp Ảnh</span></label></div></div><div id='file-status' class='hidden text-center text-green-600 font-bold bg-green-50 p-2 rounded-lg border border-green-200'></div><div class='text-center flex flex-col md:flex-row items-center justify-center gap-4'><button id='viet222-aicheck-btn' onclick='viet222_aiCheck()' class='bg-white text-teal-600 border-2 border-teal-500 font-black text-lg py-3 px-8 rounded-full shadow-md hover:bg-teal-50 hover:scale-105 transition-transform flex items-center gap-2'><div class="w-6 h-6 bg-teal-600 rounded flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div><span> NHẬN XÉT & GỢI Ý</span></button><button id='viet222-submit-btn' onclick='viet222_submit()' class='bg-gradient-to-r from-orange-400 to-orange-600 text-white font-black text-lg py-3 px-10 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2'><div class="w-6 h-6 bg-white rounded flex items-center justify-center text-orange-600 font-black text-[10px] shadow-sm">E</div><span> NỘP BÀI CHẤM ĐIỂM</span></button></div><div id='viet222-pre-feedback' class='hidden mt-6'></div></section><!-- Phần 3: Kết quả --><section id='viet222-result' class='hidden'><div class='bg-white rounded-[30px] p-8 shadow-xl border-4 border-indigo-100 text-center'><h3 class='text-xl font-black text-indigo-600 mb-6'>KẾT QUẢ ĐÁNH GIÁ</h3><div class='flex flex-col items-center justify-center mb-6'><span class='text-5xl font-black text-indigo-600' id='viet222-score'></span><div id='viet222-stars' class='text-2xl text-yellow-400 mt-2 gap-1 flex'></div></div><div class='grid grid-cols-1 md:grid-cols-2 gap-4 text-left'><div class='bg-green-50 p-4 rounded-xl border border-green-200'><h4 class='font-bold text-green-700 mb-1'>Điểm mạnh</h4><div id='viet222-feedback-good' class='text-gray-700 text-sm'></div></div><div class='bg-orange-50 p-4 rounded-xl border border-orange-200'><h4 class='font-bold text-orange-700 mb-1'>Góp ý</h4><div id='viet222-feedback-bad' class='text-gray-700 text-sm'></div></div></div><div class='mt-6 text-center'><button onclick='window.location.reload()' class='text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-blue-500'>Làm lại bài khác</button></div></div></section></div>
`,
    "practice": `

`,
    "quizPool": [
    {
        "question": "Bài văn tả người thường có mấy phần?",
        "options": [
            "2 phần: Mở bài, Thân bài",
            "3 phần: Mở bài, Thân bài, Kết bài",
            "1 phần duy nhất",
            "4 phần: Mở bài, Thân bài, Kết bài, Bài học"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Mở bài dùng để làm gì?",
        "options": [
            "Tả chi tiết ngoại hình",
            "Giới thiệu người định tả",
            "Nêu cảm nghĩ về người đó",
            "Kể chuyện về người đó"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Khi tả ngoại hình, em nên chú ý điều gì?",
        "options": [
            "Tả tất cả mọi thứ",
            "Chỉ tả quần áo",
            "Chọn tả những đặc điểm nổi bật nhất",
            "Chỉ tả khuôn mặt"
        ],
        "answer": 2,
        "level": 1
    },
    {
        "question": "Để bài văn sinh động, em nên dùng biện pháp nghệ thuật nào?",
        "options": [
            "Liệt kê",
            "So sánh và Nhân hóa",
            "Viết câu ngắn",
            "Lặp lại từ ngữ"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Tính cách của người được tả thể hiện qua đâu?",
        "options": [
            "Chỉ qua lời nói",
            "Chỉ qua ngoại hình",
            "Qua lời nói, cử chỉ, hành động",
            "Qua trang phục"
        ],
        "answer": 2,
        "level": 1
    },
    {
        "question": "Kết bài dùng để làm gì?",
        "options": [
            "Nêu tình cảm, suy nghĩ về người được tả",
            "Giới thiệu tên tuổi",
            "Tả hoạt động",
            "Kể lại kỷ niệm"
        ],
        "answer": 0,
        "level": 1
    },
    {
        "question": "Câu nào dưới đây có hình ảnh so sánh?",
        "options": [
            "Bà em năm nay 60 tuổi.",
            "Tóc bà bạc trắng như cước.",
            "Bà thường kể chuyện cho em nghe.",
            "Bà rất yêu thương em."
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Từ nào sau đây gợi tả vóc dáng?",
        "options": [
            "Hiền lành",
            "Vui vẻ",
            "Dong dỏng",
            "Thông minh"
        ],
        "answer": 2,
        "level": 1
    },
    {
        "question": "Mở bài gián tiếp là như thế nào?",
        "options": [
            "Giới thiệu ngay người định tả",
            "Nói một chuyện khác để dẫn vào giới thiệu người định tả",
            "Không giới thiệu gì cả",
            "Chỉ nói tên người đó"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Khi tả hoạt động của em bé, chi tiết nào phù hợp?",
        "options": [
            "Đôi mắt sáng long lanh",
            "Tập đi lẫm chẫm",
            "Mái tóc đen nhánh",
            "Làn da trắng hồng"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Kết bài mở rộng thường có nội dung gì?",
        "options": [
            "Chỉ kết thúc câu chuyện",
            "Bình luận thêm, mở rộng ý nghĩa",
            "Lặp lại mở bài",
            "Tả lại ngoại hình"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Chi tiết 'khuôn mặt trái xoan' tả về bộ phận nào?",
        "options": [
            "Dáng người",
            "Khuôn mặt",
            "Đôi mắt",
            "Mái tóc"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Để tả người mẹ đang nấu cơm, em nên quan sát bằng những giác quan nào?",
        "options": [
            "Chỉ bằng mắt",
            "Chỉ bằng mũi",
            "Bằng mắt, tai, mũi (ngửi mùi thơm)...",
            "Không cần quan sát"
        ],
        "answer": 2,
        "level": 1
    },
    {
        "question": "Tình cảm của em đối với người được tả cần như thế nào?",
        "options": [
            "Chân thật, sâu sắc",
            "Hời hợt",
            "Giả tạo",
            "Bình thường"
        ],
        "answer": 0,
        "level": 1
    },
    {
        "question": "Bước cuối cùng quan trọng sau khi viết xong bài văn là gì?",
        "options": [
            "Nộp ngay lập tức",
            "Đọc lại và sửa lỗi (soát lỗi)",
            "Viết lại bài mới",
            "Đi chơi"
        ],
        "answer": 1,
        "level": 1
    }
]
};

if (!lesson_222_viet.period) lesson_222_viet.period = "222";
if (!lesson_222_viet.id) lesson_222_viet.id = "222-viet";
