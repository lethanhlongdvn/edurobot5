export const lesson_221_viet = {
    "topic": "Tiếng Việt 5",
    "week": "22",
    "period": "221",
    "title": "ĐÁNH GIÁ, CHỈNH SỬA BÀI VĂN TẢ NGƯỜI",
    "desc": "Đánh giá, chỉnh sửa bài văn tả người",
    "subject": "Viết",
    "theme": "Vẻ đẹp cuộc sống",
    "audio": "",
    "content": `

<div class="mb-6 text-gray-800 bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
<p class="text-lg"><span class="font-bold">Nghe thầy cô giáo nhận xét về bài làm.</span></p>
<p class="mt-2 text-gray-600 ml-8 italic">Em hãy lắng nghe và ghi chép lại những nhận xét chung của thầy cô về bài văn của cả lớp nhé.</p>
</div>

                        <div class="glass-card rounded-[24px] p-6 md:p-8 shadow-lg mb-8 border-l-8 border-orange-400">
                            <h3 class="font-black text-xl text-gray-800 mb-6 flex items-center">
                                <span class="bg-orange-100 text-orange-600 rounded-lg px-3 py-1 text-sm mr-3">2. Tự đánh giá</span>
                                Đọc lại và tự đánh giá bài làm
                            </h3>
                            <p class="text-gray-600 mb-4 italic">Em hãy đọc lại bài văn của mình và tự đánh giá theo các tiêu chí dưới đây nhé (Bấm vào sao để chọn):</p>
                            
                            <div class="space-y-4">
                                <!-- Tiêu chí 1 -->
                                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 bg-white/50 rounded-xl star-group" data-row="1">
                                    <div class="font-bold text-gray-700">1. Nội dung (Miêu tả ngoại hình, hoạt động nổi bật đặc điểm riêng):</div>
                                    <div class="flex gap-1">
                                        <button onclick="rateViet(this, 1)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 2)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 3)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 4)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 5)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                    </div>
                                </div>
                                <!-- Tiêu chí 2 -->
                                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 bg-white/50 rounded-xl star-group" data-row="2">
                                    <div class="font-bold text-gray-700">2. Cấu trúc (Đủ 3 phần: Mở bài, Thân bài, Kết bài):</div>
                                    <div class="flex gap-1">
                                        <button onclick="rateViet(this, 1)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 2)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 3)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 4)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 5)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                    </div>
                                </div>
                                <!-- Tiêu chí 3 -->
                                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 bg-white/50 rounded-xl star-group" data-row="3">
                                    <div class="font-bold text-gray-700">3. Tình cảm (Thể hiện rõ tình cảm với người được tả):</div>
                                    <div class="flex gap-1">
                                        <button onclick="rateViet(this, 1)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 2)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 3)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 4)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 5)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                    </div>
                                </div>
                                <!-- Tiêu chí 4 -->
                                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 bg-white/50 rounded-xl star-group" data-row="4">
                                    <div class="font-bold text-gray-700">4. Trình bày (Sạch đẹp, đúng chính tả, không lỗi diễn đạt):</div>
                                    <div class="flex gap-1">
                                        <button onclick="rateViet(this, 1)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 2)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 3)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 4)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                        <button onclick="rateViet(this, 5)" class="star-btn text-2xl text-gray-300 hover:scale-125 transition-transform">☆</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="glass-card rounded-[24px] p-6 md:p-8 shadow-lg mb-8 border-l-8 border-purple-500">
                            <h3 class="font-black text-xl text-gray-800 mb-6 flex items-center">
                                <span class="bg-purple-100 text-purple-600 rounded-lg px-3 py-1 text-sm mr-3">3. Chỉnh sửa bài văn</span>
                                Viết lại câu văn hay hơn
                            </h3>
                            
                            <!-- Câu a -->
                            <div class="mb-6 p-4 bg-white/60 rounded-2xl">
                                <p class="font-bold text-gray-700 mb-2">a. Sử dụng từ ngữ giàu sức gợi tả hoặc hình ảnh so sánh gây ấn tượng:</p>
                                <div class="flex gap-2 mb-3">
                                    <input type="text" id="viet-inputA" placeholder="Ví dụ: Giọng nói của bà trầm bổng như tiếng chuông..." class="flex-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                                    <button onclick="checkVietAI('a')" class="bg-purple-600 text-white font-bold px-5 py-2 rounded-xl hover:bg-purple-700 transition-all flex items-center gap-2 shadow-md active:scale-95">
                                        <div class="w-5 h-5 bg-white rounded flex items-center justify-center text-purple-600 font-black text-[10px] shadow-sm">E</div>
                                        <span>Xem nhận xét</span>
                                    </button>
                                </div>
                                <div id="feedback-viet-inputA" class="hidden p-4 bg-purple-50 border border-purple-100 rounded-xl text-sm"></div>
                            </div>

                            <!-- Câu b -->
                            <div class="mb-6 p-4 bg-white/60 rounded-2xl">
                                <p class="font-bold text-gray-700 mb-2">b. Bộc lộ suy nghĩ, cảm xúc với người được tả:</p>
                                <div class="flex gap-2 mb-3">
                                    <input type="text" id="viet-inputB" placeholder="Ví dụ: Em sẽ không bao giờ quên..." class="flex-1 w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:outline-none">
                                    <button onclick="checkVietAI('b')" class="px-8 py-3 bg-rose-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-rose-700 active:scale-95 flex items-center gap-2">
                                        <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-rose-600 font-black text-xs shadow-sm">E</div>
                                        CHẤM BÀI
                                    </button>
                                </div>
                                <div id="feedback-viet-inputB" class="hidden p-4 bg-purple-50 border border-purple-100 rounded-xl text-sm"></div>
                            </div>
                        </div>

                        <!-- Image Upload for Mobile Students -->
                        <div class="glass-card rounded-[24px] p-6 md:p-8 shadow-lg mb-8 border-l-8 border-indigo-500 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div class="flex-1">
                                <label class="block text-indigo-800 font-bold text-base mb-1">📷 Nộp ảnh chụp bài làm (nếu không nhập máy)</label>
                                <p class="text-sm text-indigo-600">Em có thể viết ra giấy rồi chụp ảnh nộp cho thầy nhé!</p>
                            </div>
                            <div class="relative">
                                <input type="file" id="viet221-file" accept="image/*" capture="environment" class="hidden" 
                                    onchange="const s = document.getElementById('file-status-221'); if(s) { s.innerText = '✅ Đã chọn ảnh: ' + this.files[0].name; s.classList.remove('hidden'); }">
                                <label for="viet221-file" class="cursor-pointer bg-white text-indigo-600 font-bold py-3 px-6 rounded-xl border-2 border-indigo-300 hover:bg-indigo-50 transition-all flex items-center gap-2 shadow-sm">
                                    <div class="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div>
                                    <span>Chọn / Chụp Ảnh</span>
                                </label>
                            </div>
                        </div>
                        <div id="file-status-221" class="hidden text-center text-green-600 font-bold bg-green-50 p-2 rounded-lg border border-green-200 mb-6"></div>

                        <!-- Submit Button Container -->
                        <div class="text-center mt-8">
                            <button onclick="startSubmitLesson221Viet()" class="bg-gradient-to-r from-teal-500 to-teal-700 text-white font-black text-lg py-4 px-10 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mx-auto">
                                <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-teal-600 font-black text-sm shadow-sm">E</div>
                                <span>NỘP BÀI TỰ ĐÁNH GIÁ & SỬA LỖI</span>
                            </button>
                        </div>
                        
`,
    "practice": `

`,
    "quizPool": []
};

if (!lesson_221_viet.period) lesson_221_viet.period = "221";
if (!lesson_221_viet.id) lesson_221_viet.id = "221-viet";
