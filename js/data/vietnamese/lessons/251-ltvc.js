export const lesson_251_ltvc = {
    "topic": "Tiếng Việt 5",
    "week": "25",
    "period": "251",
    "title": "LTVC: LIÊN KẾT CÂU BẰNG TỪ NGỮ THAY THẾ",
    "desc": "LTVC: Liên kết câu bằng từ ngữ thay thế",
    "subject": "LTVC",
    "theme": "Hương sắc trăm miền",
    "audio": "",
    "content": `

<div class="space-y-8 animate-in fade-in duration-700">
                        <!-- I. KHÁM PHÁ -->
                        <section class="w-full">
                            <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-blue-100">
                                <div class="flex items-center space-x-4 mb-8">
                                    <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                    </div>
                                    <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tight">I. Khám phá</h2>
                                </div>

                                <!-- Exercise 1 -->
                                <div class="mb-12">
                                    <h3 class="text-xl font-bold text-blue-700 mb-4 italic">
                                        1. Mỗi từ in đậm trong đoạn văn dưới đây thay thế cho từ ngữ nào? Nêu tác dụng của việc thay thế từ ngữ trong đoạn văn.
                                    </h3>
                                    
                                    <div class="bg-blue-50/50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-inner mb-6">
                                        <div class="serif-font text-2xl leading-relaxed text-gray-800">
                                            <p class="mb-4 indent-10">
                                                Cánh đồng cỏ của cao nguyên Gia Lai, Đắk Lắk vào mùa mưa có rất nhiều hồ nước. <span class="bg-amber-200 px-2 rounded-lg font-bold">Đó</span> là những vạt đất trũng, phơi nắng suốt mấy tháng mùa khô. Bước vào mùa mưa, <span class="bg-amber-200 px-2 rounded-lg font-bold">chúng</span> trở thành những hồ nước đầy ăm ắp như những chiếc gương lớn.
                                            </p>
                                            <p class="text-right text-base italic text-gray-500 mt-2">(Theo Thiên Lương)</p>
                                        </div>
                                    </div>

                                    <div class="flex flex-col gap-6">
                                        <div class="bg-white/60 p-6 rounded-3xl border border-blue-100 shadow-sm">
                                            <div class="flex items-center gap-3 mb-4">
                                                <p class="font-bold text-blue-800 text-xl md:text-2xl italic">Câu trả lời của bạn:</p>
                                                <button onclick="toggleSpeech('ai-251-ltvc-ex1')" class="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all text-sm shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                            </div>
                                           <textarea id="ai-251-ltvc-ex1" rows="3" class="w-full p-4 rounded-2xl border border-blue-200 outline-none serif-font text-xl md:text-2xl shadow-inner bg-white" placeholder="Từ 'Đó' thay thế cho..., từ 'chúng' thay thế cho... Tác dụng là..."></textarea>
                                        </div>
                                    </div>

                                    <div class="mt-6 flex flex-wrap gap-4">
                                        <button onclick="check251LTVCEx1AI()" class="px-8 py-3 bg-indigo-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-indigo-600 font-black text-xs shadow-sm">E</div>
                                            CHẤM BÀI
                                        </button>
                                        <button onclick="resetLTVC('ai-251-ltvc-ex1'); document.getElementById('fb-251-ltvc-ex1').classList.add('hidden');" class="px-6 py-3 bg-gray-200 text-gray-700 text-lg font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                                    </div>
                                    <div id="fb-251-ltvc-ex1" class="hidden mt-4 p-5 bg-white border-2 border-indigo-100 rounded-3xl shadow-sm italic text-lg text-indigo-900 animate-in slide-in-from-top-4 duration-500"></div>
                                </div>

                                <!-- Exercise 2 -->
                                <div class="mb-10">
                                    <h3 class="text-xl font-bold text-blue-700 mb-4 italic">
                                        2. Các từ ngữ in đậm trong đoạn văn dưới đây nói về ai? Việc dùng những từ ngữ đó có tác dụng gì?
                                    </h3>
                                    
                                    <div class="bg-blue-50/50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-inner mb-6">
                                        <div class="flex flex-col md:flex-row gap-6 items-center">
                                            <div class="serif-font text-2xl leading-relaxed text-gray-800 flex-1">
                                                <p class="mb-4 indent-10">
                                                    Xúc động trước tình cảm của người cha dành cho con gái và tiếng dương cầm da diết của người thiếu nữ mù, <span class="bg-amber-200 px-2 rounded-lg font-bold">Bét-tô-ven</span> đến bên cây đàn, ngồi xuống và bắt đầu chơi. Những nốt nhạc ngẫu hứng vang lên, tràn đầy cảm xúc yêu thương của <span class="bg-amber-200 px-2 rounded-lg font-bold">nhà soạn nhạc thiên tài</span>, lúc êm ái, nhẹ nhàng như ánh trăng, lúc lại mạnh mẽ như sóng sông Đa-nuýp.
                                                </p>
                                                <p class="text-right text-base italic text-gray-500 mt-2">(Theo Tiếng Việt 4, tập một, NXB Giáo dục Việt Nam, 2022)</p>
                                            </div>
                                            <div class="w-full md:w-1/3">
                                                <img src="hinh_anh/beethoven_piano_v2.png" alt="Beethoven" class="w-full h-auto rounded-3xl shadow-lg border-2 border-white">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex flex-col gap-6">
                                        <div class="bg-white/60 p-6 rounded-3xl border border-blue-100 shadow-sm">
                                            <div class="flex items-center gap-3 mb-4">
                                                <p class="font-bold text-blue-800 text-xl md:text-2xl italic">Câu trả lời của bạn:</p>
                                                <button onclick="toggleSpeech('ai-251-ltvc-ex2')" class="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-all text-sm shadow-sm" title="Nhập bằng giọng nói">🎙️</button>
                                            </div>
                                           <textarea id="ai-251-ltvc-ex2" rows="3" class="w-full p-4 rounded-2xl border border-blue-200 outline-none serif-font text-xl md:text-2xl shadow-inner bg-white" placeholder="Các từ in đậm nói về... Tác dụng là..."></textarea>
                                        </div>
                                    </div>

                                    <div class="mt-6 flex flex-wrap gap-4">
                                        <button onclick="check251LTVCEx2AI()" class="px-8 py-3 bg-indigo-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-indigo-600 font-black text-xs shadow-sm">E</div>
                                            CHẤM BÀI
                                        </button>
                                        <button onclick="resetLTVC('ai-251-ltvc-ex2'); document.getElementById('fb-251-ltvc-ex2').classList.add('hidden');" class="px-6 py-3 bg-gray-200 text-gray-700 text-lg font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                                    </div>
                                    <div id="fb-251-ltvc-ex2" class="hidden mt-4 p-5 bg-white border-2 border-indigo-100 rounded-3xl shadow-sm italic text-lg text-indigo-900 animate-in slide-in-from-top-4 duration-500"></div>
                                </div>

                                <!-- II. GHI NHỚ -->
                                <div class="bg-amber-100/80 border-l-8 border-amber-400 rounded-[32px] p-8 shadow-md">
                                    <div class="flex items-start gap-6">
                                        <div class="text-5xl drop-shadow-sm">📎</div>
                                        <div>
                                            <h4 class="text-2xl font-black text-amber-800 uppercase mb-3 tracking-wide">Ghi nhớ</h4>
                                            <div class="text-2xl serif-font text-amber-900 leading-relaxed space-y-4">
                                                <p class="indent-10">Các câu trong đoạn văn có thể liên kết với nhau bằng cách dùng <strong>đại từ, danh từ,...</strong> ở câu sau thay thế cho từ ngữ đã dùng ở câu trước.</p>
                                                <p class="indent-10">Ngoài tác dụng liên kết, việc dùng từ ngữ thay thế còn tránh được sự trùng lặp từ ngữ trong đoạn văn.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <!-- III. LUYỆN TẬP -->
                        <section class="w-full">
                            <div class="glass-card rounded-[40px] p-6 md:p-10 shadow-2xl border-t-8 border-green-500 bg-green-50/20">
                                <div class="flex items-center space-x-4 mb-8">
                                    <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg text-white">
                                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                                    </div>
                                    <h2 class="text-3xl font-black text-gray-800 uppercase tracking-tight">II. Luyện tập</h2>
                                </div>

                                <!-- Exercise 3 -->
                                <div class="mb-12">
                                    <h3 class="text-xl font-bold text-green-700 mb-6 italic leading-relaxed">
                                        3. Các từ ngữ in đậm trong mỗi đoạn văn dưới đây thay thế cho những từ ngữ nào?
                                    </h3>
                                    <div class="space-y-6">
                                        <!-- a -->
                                        <div class="bg-white/80 p-8 rounded-[32px] border border-green-100 shadow-lg">
                                            <div class="serif-font text-2xl leading-relaxed mb-4">
                                                a. Đến Tây Bắc, bạn sẽ gặp <span class="text-blue-600 font-bold">những nghệ nhân người Mông</span> thổi khèn nơi đỉnh núi mênh mang lộng gió. Hình bóng <span class="bg-amber-200 px-2 rounded-lg font-bold">họ</span> in trên nền trời xanh hệt như một tuyệt tác của thiên nhiên.
                                            </div>
                                            <div class="flex flex-wrap gap-3 items-center">
                                                <span class="text-lg font-bold text-gray-600">"họ" thay thế cho: </span>
                                                <select id="ex251-3-a" class="px-4 py-2 bg-green-50 border-2 border-green-200 rounded-xl font-bold outline-none focus:border-green-500 transition-all">
                                                    <option value="">-- Chọn đáp án --</option>
                                                    <option value="Tây Bắc">Tây Bắc</option>
                                                    <option value="đỉnh núi">đỉnh núi</option>
                                                    <option value="những nghệ nhân người Mông">những nghệ nhân người Mông</option>
                                                </select>
                                            </div>
                                        </div>
                                        <!-- b -->
                                        <div class="bg-white/80 p-8 rounded-[32px] border border-green-100 shadow-lg">
                                            <div class="serif-font text-2xl leading-relaxed mb-4">
                                                b. Một giây... hai giây... ba giây. Vèo một cái, <span class="text-blue-600 font-bold">con dơi</span> buông người nhảy dù vào không trung rồi biến mất như một tia chớp. Chúng tôi vỗ tay reo hò ầm ĩ. Tối hôm ấy, chúng tôi rước đèn, chúng tôi phá cỗ, thỉnh thoảng lại ngước lên vòm trời trong biếc xem có thấy “<span class="bg-amber-200 px-2 rounded-lg font-bold">nhà du hành</span>” bay trở lại hay không.
                                            </div>
                                            <div class="flex flex-wrap gap-3 items-center">
                                                <span class="text-lg font-bold text-gray-600">"nhà du hành" thay thế cho: </span>
                                                <select id="ex251-3-b" class="px-4 py-2 bg-green-50 border-2 border-green-200 rounded-xl font-bold outline-none focus:border-green-500 transition-all">
                                                    <option value="">-- Chọn đáp án --</option>
                                                    <option value="tia chớp">tia chớp</option>
                                                    <option value="con dơi">con dơi</option>
                                                    <option value="vòm trời">vòm trời</option>
                                                </select>
                                            </div>
                                        </div>
                                        <!-- c -->
                                        <div class="bg-white/80 p-8 rounded-[32px] border border-green-100 shadow-lg">
                                            <div class="serif-font text-2xl leading-relaxed mb-4">
                                                c. Chiều nào cũng vậy, <span class="text-blue-600 font-bold">con chim hoạ mi</span> ấy không biết tự phương nào bay đến đậu trong bụi tầm xuân ở vườn nhà tôi mà hót... Hót một lúc lâu, “<span class="bg-amber-200 px-2 rounded-lg font-bold">nhạc sĩ giang hồ</span>” không tên, không tuổi ấy từ từ nhắm hai mắt lại, thu đầu vào lông cổ, im lặng ngủ...
                                            </div>
                                            <div class="flex flex-wrap gap-3 items-center">
                                                <span class="text-lg font-bold text-gray-600">"nhạc sĩ giang hồ" thay thế cho: </span>
                                                <select id="ex251-3-c" class="px-4 py-2 bg-green-50 border-2 border-green-200 rounded-xl font-bold outline-none focus:border-green-500 transition-all">
                                                    <option value="">-- Chọn đáp án --</option>
                                                    <option value="bụi tầm xuân">bụi tầm xuân</option>
                                                    <option value="vườn nhà">vườn nhà</option>
                                                    <option value="con chim hoạ mi">con chim hoạ mi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-8 flex items-center gap-4">
                                        <button onclick="checkEx251_3()" class="px-8 py-3 bg-green-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-green-700 transition-all active:scale-95 flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-green-600 font-black text-xs shadow-sm">E</div>
                                            KIỂM TRA
                                        </button>
                                        <button onclick="resetEx251_3()" class="px-6 py-3 bg-gray-200 text-gray-700 text-lg font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                                        <div id="fb-251-ltvc-ex3" class="hidden text-2xl font-black"></div>
                                    </div>
                                </div>

                                <!-- Exercise 4 -->
                                <div class="mb-12">
                                    <h3 class="text-xl font-bold text-green-700 mb-6 italic leading-relaxed">
                                        4. Chọn từ ngữ thay thế cho từ in đậm để liên kết các câu trong đoạn văn dưới đây:
                                    </h3>
                                    <div class="bg-white/90 rounded-[40px] p-8 md:p-12 border-2 border-green-100 shadow-2xl">
                                        <div class="flex flex-wrap gap-3 mb-8 justify-center">
                                            <span class="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full font-bold border border-amber-200 shadow-sm">thành phố ngàn hoa</span>
                                            <span class="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full font-bold border border-blue-200 shadow-sm">thành phố du lịch</span>
                                            <span class="bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full font-bold border border-purple-200 shadow-sm">thiên đường du lịch</span>
                                        </div>
                                        <div class="serif-font text-2xl md:text-3xl leading-[2] text-gray-800">
                                            <p class="mb-6 indent-10 text-justify">
                                                Đà Lạt là địa danh du lịch nổi tiếng của nước ta. 
                                                <select id="ex251-4-1" class="px-2 py-0 border-b-2 border-green-400 bg-transparent text-green-700 font-bold outline-none focus:bg-green-50 transition-all"><option value="">...</option><option value="thành phố ngàn hoa">thành phố ngàn hoa</option><option value="thành phố du lịch">thành phố du lịch</option><option value="thiên đường du lịch">thiên đường du lịch</option></select> 
                                                níu chân du khách không chỉ vì khí hậu nơi đây quanh năm mát mẻ mà còn bởi nhiều điểm du lịch hấp dẫn. Trong những ngày lưu lại ở 
                                                <select id="ex251-4-2" class="px-2 py-0 border-b-2 border-green-400 bg-transparent text-green-700 font-bold outline-none focus:bg-green-50 transition-all"><option value="">...</option><option value="thành phố ngàn hoa">thành phố ngàn hoa</option><option value="thành phố du lịch">thành phố du lịch</option><option value="thiên đường du lịch">thiên đường du lịch</option></select>, 
                                                du khách không thể không ghé thăm thung lũng Tình yêu, núi Lang Bi-ang, hồ Xuân Hương,... Đó là những địa danh huyền thoại đã làm nên một Đà Lạt mộng mơ. Để làm mới mình trong mắt du khách, gần đây, Đà Lạt xây dựng thêm một số điểm du lịch mới như làng Cù Lần, đồi chè Cầu Đất, vườn dâu tây Đà Lạt,... Những điểm du lịch này sẽ góp phần làm nên một 
                                                <select id="ex251-4-3" class="px-2 py-0 border-b-2 border-green-400 bg-transparent text-green-700 font-bold outline-none focus:bg-green-50 transition-all"><option value="">...</option><option value="thành phố ngàn hoa">thành phố ngàn hoa</option><option value="thành phố du lịch">thành phố du lịch</option><option value="thiên đường du lịch">thiên đường du lịch</option></select> 
                                                vừa truyền thống vừa hiện đại, giàu sức hút đối với du khách trong nước và quốc tế.
                                            </p>
                                            <p class="text-right text-base italic text-gray-500 mt-4">(Theo Lâm Anh)</p>
                                        </div>
                                    </div>
                                    <div class="mt-8 flex items-center gap-4">
                                        <button onclick="checkEx251_4()" class="px-8 py-3 bg-green-600 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-green-700 transition-all active:scale-95 flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-green-600 font-black text-xs shadow-sm">E</div>
                                            HOÀN THÀNH
                                        </button>
                                        <button onclick="resetEx251_4()" class="px-6 py-3 bg-gray-200 text-gray-700 text-lg font-bold rounded-2xl hover:bg-gray-300 transition-all">LÀM LẠI</button>
                                        <button onclick="submitLTVCUnified('251-ltvc-ex4')" class="px-8 py-3 bg-gray-800 text-white text-lg font-black rounded-2xl shadow-lg hover:bg-black transition-all flex items-center gap-2">
                                            <div class="w-6 h-6 bg-white rounded-lg flex items-center justify-center text-gray-800 font-black text-xs shadow-sm">E</div>
                                            <span>NỘP BÀI</span>
                                        </button>
                                        <div id="fb-251-ltvc-ex4" class="hidden text-2xl font-black"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
`,
    "practice": `

`,
    "quizPool": [
    {
        "question": "Liên kết câu bằng từ ngữ thay thế là việc sử dụng từ ngữ nào ở câu sau để thay cho từ ở câu trước?",
        "options": [
            "Danh từ, tính từ",
            "Đại từ, danh từ",
            "Động từ, trạng từ",
            "Số từ, lương từ"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Tác dụng quan trọng nhất của việc dùng từ ngữ thay thế là gì?",
        "options": [
            "Làm câu dài ra",
            "Tránh lặp từ đơn điệu và liên kết câu",
            "Làm câu khó hiểu hơn",
            "Để khoe vốn từ vựng"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Trong đoạn văn về các hồ nước, từ 'Đó' thay thế cho từ ngữ nào?",
        "options": [
            "Cánh đồng cỏ",
            "Mùa mưa",
            "Nhiều hồ nước",
            "Mùa khô"
        ],
        "answer": 2,
        "level": 1
    },
    {
        "question": "Trong đoạn văn về các hồ nước, từ 'chúng' thay thế cho từ ngữ nào?",
        "options": [
            "Cánh đồng cỏ",
            "Những vạt đất trũng",
            "Những chiếc gương",
            "Đắk Lắk"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Cụm từ 'nhà soạn nhạc thiên tài' thay thế cho tên riêng nào?",
        "options": [
            "Mô-da",
            "Bét-tô-ven",
            "Sô-panh",
            "Bách"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Từ 'họ' thường được dùng để thay thế cho đối tượng nào?",
        "options": [
            "Một người duy nhất",
            "Nhóm người (số nhiều)",
            "Sự vật, hiện tượng",
            "Địa điểm, nơi chốn"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Từ 'nhà du hành' trong bài tập 3 được dùng để gọi tên con vật nào một cách sáng tạo?",
        "options": [
            "Con chim",
            "Con dơi",
            "Con báo",
            "Con hươu"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Biệt danh 'nhạc sĩ giang hồ' thay thế cho loài chim nào?",
        "options": [
            "Chim sẻ",
            "Chim họa mi",
            "Chim bồ câu",
            "Chim đại bàng"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Để thay thế cho từ 'Đà Lạt', ta có thể dùng cụm từ nào?",
        "options": [
            "Thành phố cảng",
            "Thành phố ngàn hoa",
            "Thành phố mang tên Bác",
            "Thủ đô văn hiến"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Việc dùng đại từ 'Nó' để thay cho 'Cây bút' là phép liên kết gì?",
        "options": [
            "Phép lặp",
            "Phép thế",
            "Phép nối",
            "Phép liên tưởng"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Liên kết câu bằng từ ngữ thay thế giúp bài văn như thế nào?",
        "options": [
            "Rời rạc",
            "Lặp lại nhàm chán",
            "Mạch lạc và phong phú",
            "Khó đọc"
        ],
        "answer": 2,
        "level": 1
    },
    {
        "question": "Trong câu 'Em rất thích chú mèo này. Nó rất ngoan.', từ 'Nó' đóng vai trò gì?",
        "options": [
            "Tính từ",
            "Từ ngữ thay thế (Đại từ)",
            "Danh từ riêng",
            "Động từ"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Để thay thế cho 'Bác Hồ', ta có thể dùng cụm từ nào?",
        "options": [
            "Người",
            "Vị lãnh tụ kính yêu",
            "Bác",
            "Tất cả các đáp án trên"
        ],
        "answer": 3,
        "level": 1
    },
    {
        "question": "Sử dụng từ ngữ thay thế giúp tránh lỗi gì trong hành văn?",
        "options": [
            "Lỗi chính tả",
            "Lỗi lặp từ",
            "Lỗi thiếu dấu câu",
            "Lỗi viết hoa"
        ],
        "answer": 1,
        "level": 1
    },
    {
        "question": "Cụm từ 'Thiên đường du lịch' trong đoạn văn về Đà Lạt dùng để làm gì?",
        "options": [
            "Quảng cáo",
            "Liên kết câu bằng cách thay thế cho từ 'Đà Lạt'",
            "Miêu tả khí hậu",
            "Kể tên các địa danh"
        ],
        "answer": 1,
        "level": 1
    }
]
};

// --- Logic functions implementation ---
window.check251LTVCEx1AI = async function () {
    const val = document.getElementById('ai-251-ltvc-ex1').value.trim();
    if (!val) { alert('Bạn hãy nhập câu trả lời nhé!'); return; }

    const fb = document.getElementById('fb-251-ltvc-ex1');
    fb.classList.remove('hidden');
    fb.innerHTML = `<div class="flex items-center gap-2 text-indigo-600 animate-pulse"><div class="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div> <span>EduRobot đang đọc bài của bạn...</span></div>`;

    if (typeof askAI === 'function') {
        const prompt = `Đoạn văn về hồ nước ở Gia Lai. 
        Yêu cầu: "Đó" thay cho "nhiều hồ nước", "chúng" thay cho "những vạt đất trũng". Tác dụng: liên kết câu, tránh lặp từ.
        Câu trả lời của bạn: "${val}"
        Hãy đánh giá và nhận xét khích lệ. Nhấn mạnh nếu thiếu ý nào. Xưng hô với người làm bài là 'bạn'.`;
        await askAI('251-ltvc-ex1', prompt, 'single', 'ltvc', 25);
    } else {
        fb.innerHTML = "✅ Tốt lắm! 'Đó' thay cho 'nhiều hồ nước', 'chúng' thay cho 'những vạt đất trũng'. Việc thay thế giúp đoạn văn mạch lạc hơn.";
    }
};

window.check251LTVCEx2AI = async function () {
    const val = document.getElementById('ai-251-ltvc-ex2').value.trim();
    if (!val) { alert('Bạn hãy nhập câu trả lời nhé!'); return; }

    const fb = document.getElementById('fb-251-ltvc-ex2');
    fb.classList.remove('hidden');
    fb.innerHTML = `<div class="flex items-center gap-2 text-indigo-600 animate-pulse"><div class="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-black text-[10px] shadow-sm">E</div> <span>EduRobot đang phân tích câu trả lời...</span></div>`;

    if (typeof askAI === 'function') {
        const prompt = `Đoạn văn về Beethoven chơi đàn.
        Yêu cầu: Các từ in đậm đều nói về Bét-tô-ven. Tác dụng: liên kết câu, tránh lặp lại tên riêng, làm cách diễn đạt phong phú (nhà soạn nhạc thiên tài).
        Câu trả lời của bạn: "${val}"
        Hãy đánh giá: Nếu nói đúng là về Bét-tô-ven và có tác dụng liên kết/tránh lặp là đạt. Nhận xét nhẹ nhàng, xưng hô là 'bạn'.`;
        await askAI('251-ltvc-ex2', prompt, 'single', 'ltvc', 25);
    } else {
        fb.innerHTML = "✅ Chính xác! Các từ này đều chỉ Bét-tô-ven, giúp tránh lặp từ và tôn vinh tài năng của ông.";
    }
};

window.checkEx251_3 = function () {
    const a = document.getElementById('ex251-3-a').value;
    const b = document.getElementById('ex251-3-b').value;
    const c = document.getElementById('ex251-3-c').value;
    const fb = document.getElementById('fb-251-ltvc-ex3');
    fb.classList.remove('hidden');

    if (a === 'những nghệ nhân người Mông' && b === 'con dơi' && c === 'con chim hoạ mi') {
        fb.innerHTML = "🎉 Tuyệt vời! Bạn đã xác định đúng tất cả các từ ngữ được thay thế.";
        fb.className = "text-green-600 font-bold mt-4 animate-bounce";
        if (typeof celebrate === 'function') celebrate();
    } else {
        fb.innerHTML = "❌ Có chỗ chưa đúng, em hãy đọc kỹ lại đoạn văn nhé!";
        fb.className = "text-red-500 font-bold mt-4";
    }
};

window.resetEx251_3 = function () {
    ['ex251-3-a', 'ex251-3-b', 'ex251-3-c'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('fb-251-ltvc-ex3').classList.add('hidden');
};

window.checkEx251_4 = function () {
    const v1 = document.getElementById('ex251-4-1').value;
    const v2 = document.getElementById('ex251-4-2').value;
    const v3 = document.getElementById('ex251-4-3').value;
    const fb = document.getElementById('fb-251-ltvc-ex4');
    fb.classList.remove('hidden');

    // Các lựa chọn hợp lý nhất theo phong cách văn học
    const isCorrect = (v1 !== "" && v2 !== "" && v3 !== "") && (v1 !== v2 && v2 !== v3 && v1 !== v3);

    if (isCorrect) {
        fb.innerHTML = "✅ Giỏi quá! Bạn đã sử dụng các từ thay thế rất linh hoạt để đoạn văn về Đà Lạt hay hơn hẳn.";
        fb.className = "text-green-600 font-bold mt-4 animate-bounce";
        if (typeof celebrate === 'function') celebrate();
    } else {
        fb.innerHTML = "❌ Bạn hãy chọn các cụm từ khác nhau và điền vào đủ 3 chỗ trống nhé!";
        fb.className = "text-red-500 font-bold mt-4";
    }
};

window.resetEx251_4 = function () {
    ['ex251-4-1', 'ex251-4-2', 'ex251-4-3'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('fb-251-ltvc-ex4').classList.add('hidden');
};

if (!lesson_251_ltvc.period) lesson_251_ltvc.period = "251";
if (!lesson_251_ltvc.id) lesson_251_ltvc.id = "251-ltvc";
