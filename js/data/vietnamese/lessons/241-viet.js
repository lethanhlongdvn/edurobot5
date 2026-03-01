export const lesson_241_viet = {
    "title": "Viết: Đoạn văn thể hiện tình cảm, cảm xúc về một sự việc",
    "week": 24,
    "subject": "Viết",
    "theme": "Hương sắc trăm miền",
    "tabs": {
        "lesson": {
            "blocks": [
                {
                    "type": "html",
                    "content": `<style>
                                .label-viet { color: #ef4444; font-weight: 800; border: 2px solid #ef4444; padding: 2px 16px; display: inline-block; border-top-right-radius: 20px; border-bottom-right-radius: 20px; margin-bottom: 24px; letter-spacing: 0.05em; background: rgba(254, 226, 226, 0.3); }
                                .topic-box { border: 2px solid #3b82f6; border-radius: 20px; padding: 20px; background: #eff6ff; margin-bottom: 24px; }
                                .side-label { writing-mode: vertical-rl; transform: rotate(180deg); display: flex; align-items: center; justify-content: center; font-weight: 900; color: white; text-transform: uppercase; letter-spacing: 0.1em; border-radius: 16px; padding: 12px; width: 60px; min-height: 120px; flex-shrink: 0; }
                                .writing-block { display: flex; gap: 16px; margin-bottom: 20px; align-items: stretch; transition: transform 0.3s; }
                                .writing-block:hover { transform: translateX(5px); }
                                .writing-content { flex: 1; position: relative; }
                                .writing-prompt { position: absolute; top: -12px; left: 24px; background: white; padding: 2px 12px; font-size: 0.9rem; font-weight: 700; border-radius: 10px; z-index: 10; border: 1px solid currentColor; }
                                .writing-textarea { width: 100%; border-radius: 24px; padding: 24px 20px 20px 20px; border: 2px solid #e2e8f0; background: #fff; min-height: 120px; font-family: 'Merriweather', serif; font-size: 1.15rem; line-height: 1.8; outline: none; transition: all 0.3s; }
                                .writing-textarea:focus { border-color: currentColor; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
                                .star-rating { color: #d1d5db; cursor: pointer; font-size: 1.5rem; transition: 0.2s; }
                                .star-rating.active { color: #facc15; }
                            </style>
                            <div class="max-w-4xl mx-auto">
                                <div class="label-viet">VIẾT</div>
                                <h1 class="text-3xl md:text-4xl font-black text-center text-blue-800 mb-8 uppercase tracking-tight">VIẾT ĐOẠN VĂN<br>THỂ HIỆN TÌNH CẢM, CẢM XÚC VỀ MỘT SỰ VIỆC</h1>

                                <div class="topic-box shadow-sm mb-10">
                                    <p class="font-bold text-blue-700 mb-4 italic text-lg">Chọn một trong những đề dưới đây:</p>
                                    <ul class="space-y-3">
                                        <li class="flex items-start gap-3">
                                            <span class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-1">1</span>
                                            <p class="font-medium text-gray-800"><b>Đề 1:</b> Viết đoạn văn thể hiện tình cảm, cảm xúc về một lễ hội của quê hương.</p>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-1">2</span>
                                            <p class="font-medium text-gray-800"><b>Đề 2:</b> Viết đoạn văn thể hiện tình cảm, cảm xúc về một buổi hoạt động ngoại khoá của trường hoặc lớp em.</p>
                                        </li>
                                        <li class="flex items-start gap-3">
                                            <span class="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm mt-1">3</span>
                                            <p class="font-medium text-gray-800"><b>Đề 3:</b> Viết đoạn văn thể hiện tình cảm, cảm xúc về hoạt động gói bánh chưng hoặc bánh tét ngày Tết.</p>
                                        </li>
                                    </ul>
                                </div>

                                <div class="mb-10">
                                    <p class="text-lg mb-8 flex items-baseline">
                                        <span class="text-red-500 font-extrabold mr-2 text-2xl">1.</span>
                                        <span class="font-bold text-gray-800">Dựa vào các ý đã tìm được trong hoạt động Viết ở Bài 10, viết bài văn theo yêu cầu của đề bài.</span>
                                    </p>
                                    
                                    <p class="text-sm text-orange-600 font-bold mb-6 italic flex items-center gap-1">
                                        <span>💡 Mẹo: Nhấn nút 🎙️ cạnh câu hỏi để trả lời bằng giọng nói cho nhanh nhé!</span>
                                    </p>

                                    <!-- REDESIGNED WRITING SECTION -->
                                    <div class="space-y-6 mb-10">
                                        <!-- Mở bài -->
                                        <div class="writing-block" style="color: #f97316;">
                                            <div class="side-label bg-gradient-to-t from-orange-400 to-orange-600 shadow-lg shadow-orange-100">Mở bài</div>
                                            <div class="writing-content">
                                                <div class="writing-prompt text-orange-600 flex items-center gap-2">
                                                    <span>Sự việc mà em muốn thể hiện tình cảm, cảm xúc là gì? Sự việc đó diễn ra khi nào? Ở đâu?</span>
                                                    <button onclick="toggleSpeech('viet241-mb')" class="p-1 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-all text-[10px] shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                                </div>
                                                <textarea id="viet241-mb" class="writing-textarea border-orange-100 focus:border-orange-500" placeholder="Nhập ý của em..."></textarea>
                                            </div>
                                        </div>

                                        <!-- Thân bài -->
                                        <div class="writing-block" style="color: #06b6d4;">
                                            <div class="side-label bg-gradient-to-t from-cyan-400 to-cyan-600 shadow-lg shadow-cyan-100">Thân bài</div>
                                            <div class="writing-content">
                                                <div class="writing-prompt text-cyan-600 flex items-center gap-2">
                                                    <span>Em có tình cảm, cảm xúc gì về những chi tiết nổi bật của sự việc (khung cảnh, hoạt động, người tham gia,...)?</span>
                                                    <button onclick="toggleSpeech('viet241-tb')" class="p-1.5 bg-cyan-100 text-cyan-600 rounded-full hover:bg-cyan-200 transition-all text-xs shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                                </div>
                                                <textarea id="viet241-tb" class="writing-textarea border-cyan-100 focus:border-cyan-500" placeholder="Nhập ý của em..." style="min-height: 350px;"></textarea>
                                            </div>
                                        </div>

                                        <!-- Kết bài -->
                                        <div class="writing-block" style="color: #10b981;">
                                            <div class="side-label bg-gradient-to-t from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-100">Kết bài</div>
                                            <div class="writing-content">
                                                <div class="writing-prompt text-emerald-600 flex items-center gap-2">
                                                    <span>Nêu ý nghĩa của sự việc; khẳng định lại tình cảm, cảm xúc đối với sự việc.</span>
                                                    <button onclick="toggleSpeech('viet241-kb')" class="p-1.5 bg-emerald-100 text-emerald-600 rounded-full hover:bg-emerald-200 transition-all text-xs shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                                </div>
                                                <textarea id="viet241-kb" class="writing-textarea border-emerald-100 focus:border-emerald-500" placeholder="Nhập ý của em..."></textarea>
                                            </div>
                                        </div>

                                        <div class="flex justify-end pt-2">
                                            <button onclick="checkVietAI('241-v2')" class="px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-black shadow-lg hover:scale-105 transition-all flex items-center gap-3">
                                                <div class="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-teal-600 font-black text-sm shadow-sm">E</div>
                                                <span>XEM NHẬN XÉT CỦA EDUROBOT</span>
                                            </button>
                                        </div>
                                        <div id="feedback-viet241-v2" class="hidden mt-6 p-8 rounded-[32px] bg-white border-4 border-amber-100 text-gray-800 shadow-xl animate-in fade-in slide-in-from-top-4"></div>
                                    </div>

                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                                        <div class="p-4 rounded-2xl border-2 border-emerald-400 bg-emerald-50 text-emerald-800 font-medium italic">
                                            Nên dựa vào diễn biến của sự việc để thể hiện tình cảm, cảm xúc.
                                        </div>
                                        <div class="p-4 rounded-2xl border-2 border-rose-400 bg-rose-50 text-rose-800 font-medium italic">
                                            Đoạn văn cần tập trung thể hiện tình cảm, cảm xúc về sự việc, tránh lạc sang kể chuyện hoặc miêu tả.
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-12">
                                    <p class="text-lg mb-6 flex items-baseline">
                                        <span class="text-red-500 font-extrabold mr-2 text-2xl">2.</span>
                                        <span class="font-bold text-gray-800">Đọc soát và chỉnh sửa bài viết.</span>
                                    </p>
                                    
                                    <div class="bg-cyan-50 rounded-3xl p-8 border-2 border-cyan-200 shadow-sm">
                                        <p class="font-bold text-cyan-800 mb-6 italic text-lg">a. Tự nhận xét bài làm của em theo những yêu cầu dưới đây:</p>
                                        <div class="space-y-4">
                                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                                <span class="font-medium text-gray-700 text-lg">– Giới thiệu được sự việc và nêu ấn tượng chung về sự việc.</span>
                                                <div class="star-group flex gap-1" data-row="1">
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 1)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 2)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 3)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 4)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 5)">☆</span>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                                <span class="font-medium text-gray-700 text-lg">– Thể hiện được tình cảm, cảm xúc về khung cảnh, hoạt động... sự việc.</span>
                                                <div class="star-group flex gap-1" data-row="2">
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 1)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 2)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 3)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 4)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 5)">☆</span>
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                                <span class="font-medium text-gray-700 text-lg">– Sử dụng từ ngữ phong phú, câu văn đúng và hay.</span>
                                                <div class="star-group flex gap-1" data-row="3">
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 1)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 2)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 3)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 4)">☆</span>
                                                    <span class="star-btn cursor-pointer text-3xl" onclick="rateViet(this, 5)">☆</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="font-bold text-cyan-800 mt-8 italic text-lg">b. Chỉnh sửa lỗi (nếu có).</p>
                                    </div>
                                </div>

                                <!-- Photo Upload Support -->
                                <div class="bg-indigo-50 p-8 rounded-[32px] border border-indigo-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                                    <div class="flex-1 text-center md:text-left">
                                        <label class="block text-indigo-800 font-bold text-xl mb-2">📷 Nộp ảnh chụp bài làm (nếu không nhập máy)</label>
                                        <p class="text-indigo-600">Em có thể viết ra giấy rồi chụp ảnh nộp cho thầy nhé!</p>
                                    </div>
                                    <div class="relative">
                                        <input type="file" id="viet241-file" accept="image/*" capture="environment" class="hidden" 
                                            onchange="const s = document.getElementById('file-status-241'); if(s) { s.innerText = '✅ Đã chọn ảnh: ' + this.files[0].name; s.classList.remove('hidden'); }">
                                        <label for="viet241-file" class="cursor-pointer bg-white text-indigo-600 font-black py-4 px-8 rounded-2xl border-2 border-indigo-300 hover:bg-indigo-50 transition-all flex items-center gap-3 shadow-sm hover:shadow-md">
                                            <span class="text-3xl">📸</span> CHỌN ẢNH
                                        </label>
                                    </div>
                                </div>
                                <div id="file-status-241" class="hidden text-center text-green-600 font-bold bg-green-50 p-4 rounded-2xl border border-green-200 mb-10"></div>

                                <!-- Submit Button -->
                                <div class="flex justify-center my-8">
                                    <button onclick="startSubmitLesson221Viet()" class="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-2xl font-black text-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                                        <div class="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-rose-600 font-black text-sm shadow-sm">E</div>
                                        <span>NỘP BÀI CHO THẦY</span>
                                    </button>
                                </div>

                                <div class="mt-8 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-center gap-6 bg-orange-50/50 p-6 rounded-[32px]">
                                    <div class="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg text-orange-500 flex-shrink-0">
                                        <span class="text-2xl">🏠</span>
                                    </div>
                                    <p class="text-gray-700 italic font-medium text-lg text-center md:text-left leading-relaxed">
                                        Trao đổi với người thân về một hoạt động của lớp hoặc của trường đã để lại cho em nhiều cảm xúc.
                                    </p>
                                </div>
                            </div>
`
                }
            ]
        },
        "quiz": {
            "settings": { "pick": 5 },
            "questions": [
                { "q": "Cấu trúc của đoạn văn thể hiện tình cảm, cảm xúc gồm mấy phần?", "a": ["2 phần", "3 phần (Mở bài, Thân bài, Kết bài)", "1 phần duy nhất", "4 phần"], "c": 1 },
                { "q": "Trong phần Thân bài, chúng ta nên viết gì?", "a": ["Chỉ kể tên sự việc", "Tả chi tiết trang phục con người", "Thể hiện tình cảm về các chi tiết nổi bật", "Viết về thời tiết"], "c": 2 },
                { "q": "Khi viết bài văn thể hiện cảm xúc, chúng ta nên tránh điều gì?", "a": ["Dùng từ ngữ gợi tả", "Lạc sang kể chuyện hoặc miêu tả quá nhiều", "Bộc lộ cảm xúc trực tiếp", "Dùng phép so sánh"], "c": 1 },
                { "q": "Phần Kết bài có nhiệm vụ gì?", "a": ["Giới thiệu sự việc", "Kể lại diễn biến", "Khẳng định lại tình cảm, cảm xúc", "Tả khung cảnh"], "c": 2 },
                { "q": "Tại sao nên dùng từ ngữ biểu cảm trực tiếp?", "a": ["Để bài văn ngắn hơn", "Để người đọc dễ cảm nhận tình cảm của người viết", "Để không phải viết câu văn", "Để bài văn đẹp hơn"], "c": 1 }
            ]
        }
    }
};

if (!lesson_241_viet.period) lesson_241_viet.period = "241";
if (!lesson_241_viet.id) lesson_241_viet.id = "241-viet";

