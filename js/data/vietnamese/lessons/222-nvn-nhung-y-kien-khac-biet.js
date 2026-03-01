export const lesson_222_nvn_nhung_y_kien_khac_biet = {
    "title": "Tranh biện: Học sinh giữ tiền riêng?",
    "week": 22,
    "subject": "Nói và nghe",
    "theme": "Chúng mình lớn khôn",
    "tabs": {
        "lesson": {
            "title": "Góc Tranh Biện",
            "blocks": [
                { "type": "header", "text": "Thảo luận: Học sinh có nên giữ tiền riêng?" },
                {
                    "type": "html",
                    "content": `
                            <div class="max-w-4xl mx-auto">
                                <div class="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-blue-100">
                                    <div class="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 flex items-center gap-4 text-white">
                                        <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl shadow-inner">👦</div>
                                        <div>
                                            <h2 class="text-2xl font-black uppercase tracking-tight">Góc Tranh Biện Minh Trí_EduRobot</h2>
                                            <p class="opacity-90 font-medium">Người bạn máy lém lỉnh của lớp mình!</p>
                                        </div>
                                    </div>
                                    
                                    <!-- Chat Area -->
                                    <div id="nvn-chat-history" class="h-[500px] p-6 overflow-y-auto bg-gray-50 flex flex-col gap-4 scroll-smooth">
                                        <!-- Welcome Message -->
                                        <div class="self-start max-w-[80%] animate-in slide-in-from-left-5 fade-in duration-500">
                                            <div class="flex items-center gap-2 mb-2">
                                                <div class="inline-flex w-6 h-6 bg-blue-600 rounded-lg items-center justify-center text-white font-black text-[10px] shadow-sm mr-1">E</div>
                                                <span class="text-xs font-black text-amber-600 uppercase bg-amber-100 px-2 py-1 rounded-lg">Minh Trí_EduRobot</span>
                                            </div>
                                            <div class="bg-white p-4 rounded-3xl rounded-tl-none border border-gray-100 shadow-sm text-gray-800 text-lg leading-relaxed">
                                                Chào cậu! 👋 Tuần này lớp mình đang sốt sình sịch vụ <b>"Học sinh giữ tiền riêng"</b>. 
                                                <br><br>
                                                Tớ thì có cả nghìn lí do để tranh luận đấy! Cậu thuộc phe nào? Ủng hộ hay Phản đối? Nói thử tớ nghe xem nào! 😎
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Controls -->
                                    <div class="p-4 bg-white border-t border-gray-100">
                                        <div class="flex gap-3 items-center">
                                            <div class="flex-1 relative">
                                                <input type="text" id="btn-nvn-input" 
                                                    class="w-full px-5 py-4 rounded-2xl bg-gray-100 border-2 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none font-medium text-lg placeholder-gray-400"
                                                    placeholder="Nhập ý kiến của cậu... (Ví dụ: Tớ nghĩ là nên vì...)"
                                                    onkeydown="if(event.key === 'Enter') nvn222_send()">
                                            </div>
                                            
                                            <button onclick="nvn222_send()" 
                                                class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-200 flex items-center gap-2 flex-shrink-0">
                                                <div class="w-6 h-6 bg-white rounded flex items-center justify-center text-blue-600 font-black text-[10px] shadow-sm">E</div>
                                                <span>Gửi</span>
                                            </button>
                                        </div>
                                        <div class="mt-3 flex justify-between items-center px-2">
                                            <p class="text-xs font-bold text-gray-400">💡 Mẹo: Hãy dùng từ "bởi vì", "ví dụ" để thuyết phục tớ nhé!</p>
                                            <button onclick="nvn222_summary()" class="text-xs font-black text-amber-500 hover:text-amber-600 bg-amber-50 hover:bg-amber-100 px-3 py-1.5 rounded-lg transition-colors uppercase tracking-wider">
                                                <div class="flex items-center gap-1.5 transition-all">
                                                    <div class="w-5 h-5 bg-amber-500 rounded flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div>
                                                    <span>Tổng kết tranh biện</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `
                }
            ]
        },
        "quiz": {
            "settings": { "pick": 20 },
            "questions": [
                { "q": "Khi nghe bạn trình bày ý kiến khác mình, em nên làm gì?", "a": ["Ngắt lời bạn ngay lập tức", "Lắng nghe tôn trọng và ghi chép", "Bỏ đi chỗ khác", "Cười chê ý kiến của bạn"], "c": 1 },
                { "q": "Nếu em không đồng ý với bạn, em nên nói thế nào?", "a": ["Cậu nói sai bét rồi!", "Tớ nghĩ cậu chẳng biết gì cả.", "Tớ hiểu ý cậu, nhưng tớ nghĩ khác một chút...", "Im đi để tớ nói!"], "c": 2 },
                { "q": "Người điều hành cuộc thảo luận có nhiệm vụ gì?", "a": ["Tóm tắt và nêu điểm thống nhất", "Chỉ ngồi chơi", "Ra lệnh cho mọi người", "Viết bài văn"], "c": 0 },
                { "q": "Khi thảo luận, lời nói cần như thế nào?", "a": ["Gắt gỏng, khó chịu", "Nhỏ lí nhí không ai nghe", "Rõ ràng, ôn hòa, lịch sự", "Hét lớn vào mặt bạn"], "c": 2 },
                { "q": "Tại sao cần ghi chép khi nghe bạn nói?", "a": ["Để vẽ tranh", "Để nắm được thông tin và ý chính", "Để làm bài tập toán", "Để viết thư"], "c": 1 },
                { "q": "Mục đích chính của việc thảo luận là gì?", "a": ["Để cãi nhau xem ai thắng", "Để tìm ra lẽ phải và giải pháp tốt nhất", "Để khoe khoang kiến thức", "Để làm mất thời gian"], "c": 1 },
                { "q": "Khi bạn đang nói, em có nên nói chen vào không?", "a": ["Có, nếu mình nảy ra ý hay", "Không, cần đợi bạn nói xong", "Có, để bạn dừng lại", "Tùy hứng"], "c": 1 },
                { "q": "Biểu cảm nào phù hợp khi thảo luận?", "a": ["Nhăn nhó, cau có", "Cười đùa cợt nhả", "Nghiêm túc, chăm chú, thân thiện", "Ngáp ngắn ngáp dài"], "c": 2 },
                { "q": "Nếu bạn nói sai thông tin, em nên làm gì?", "a": ["Cười to cho cả lớp biết", "Nhẹ nhàng đính chính sau khi bạn nói xong", "Mắng bạn ngay lập tức", "Không quan tâm"], "c": 1 },
                { "q": "Lợi ích của việc thảo luận nhóm là gì?", "a": ["Học hỏi được nhiều ý kiến hay từ bạn bè", "Đỡ phải làm việc một mình", "Được nói chuyện thoải mái", "Không có lợi ích gì"], "c": 0 },
                { "q": "Trước khi phát biểu ý kiến, em cần làm gì?", "a": ["Giơ tay xin phép", "Đứng dậy hét to", "Đập bàn", "Chạy lên bảng"], "c": 0 },
                { "q": "Ý kiến thuyết phục là ý kiến như thế nào?", "a": ["Nói thật to", "Nói thật dài", "Có lí lẽ và dẫn chứng rõ ràng", "Nói lặp đi lặp lại"], "c": 2 },
                { "q": "Khi thống nhất ý kiến, cả nhóm cần dựa trên nguyên tắc nào?", "a": ["Ý kiến của người học giỏi nhất", "Ý kiến của đa số và phù hợp lí lẽ", "Ý kiến của người nói to nhất", "Bốc thăm"], "c": 1 },
                { "q": "Câu nào thể hiện sự đồng tình lịch sự?", "a": ["Tớ hoàn toàn nhất trí với cậu.", "Cũng tạm được.", "Cậu nói đúng đấy nhưng tớ chả thích.", "Ờ, sao cũng được."], "c": 0 },
                { "q": "Câu nào dùng để hỏi lại khi chưa rõ?", "a": ["Nói lại xem nào!", "Cậu nói gì tớ chả hiểu?", "Tớ chưa rõ ý này lắm, cậu giải thích thêm được không?", "Nói bé thế ai nghe được!"], "c": 2 },
                { "q": "Trong cuộc thảo luận về giữ tiền riêng, phe phản đối thường lo ngại điều gì?", "a": ["Học sinh sẽ học giỏi hơn", "Học sinh có thể tiêu xài hoang phí", "Học sinh sẽ tiết kiệm", "Học sinh sẽ ngoan hơn"], "c": 1 },
                { "q": "Trong cuộc thảo luận về giữ tiền riêng, phe ủng hộ thường nhấn mạnh điều gì?", "a": ["Học sinh học được cách sài tiền", "Học sinh học được cách quản lí tài chính và tự lập", "Học sinh mua được nhiều đồ chơi", "Học sinh không cần xin tiền mẹ"], "c": 1 },
                { "q": "Để kết thúc buổi thảo luận, chúng ta cần làm gì?", "a": ["Ai về nhà nấy", "Tổng kết lại những điều đã thống nhất và chưa thống nhất", "Tiếp tục tranh cãi", "Đi ăn liên hoan"], "c": 1 },
                { "q": "Thái độ tôn trọng sự khác biệt nghĩa là gì?", "a": ["Chấp nhận rằng mỗi người có góc nhìn riêng", "Bắt mọi người phải nghĩ giống mình", "Ghét những ai nghĩ khác mình", "Chỉ chơi với bạn cùng quan điểm"], "c": 0 },
                { "q": "Minh Trí trong bài thảo luận đóng vai trò là gì?", "a": ["Người phán xử", "Người bạn cùng tranh biện và học hỏi", "Thầy giáo", "Người quan sát"], "c": 1 }
            ]
        }
    }
};

if (!lesson_222_nvn_nhung_y_kien_khac_biet.period) lesson_222_nvn_nhung_y_kien_khac_biet.period = "222";
if (!lesson_222_nvn_nhung_y_kien_khac_biet.id) lesson_222_nvn_nhung_y_kien_khac_biet.id = "222-nvn-nhung-y-kien-khac-biet";

