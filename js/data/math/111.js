export const lesson111 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "111",
    "title": "BÀI 47: MÉT KHỐI",
    "desc": "Tìm hiểu đơn vị đo thể tích mét khối (m³). Mối quan hệ giữa m³, dm³ và cm³.",
    "content": `
        <div class="space-y-4 md:space-y-6">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-blue-50 p-4 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-sm animate-fade-in">
                <h3 class="text-blue-900 font-black text-xl md:text-2xl mb-2 md:mb-3">🎯 Mục tiêu bài học</h3>
                <ul class="list-disc list-inside text-blue-800 space-y-1 md:space-y-2 font-bold text-base md:text-lg">
                    <li>Nhận biết được đơn vị đo thể tích: mét khối (<span class="font-black">m³</span>).</li>
                    <li>Nắm vững mối quan hệ giữa mét khối, đề-xi-mét khối, xăng-ti-mét khối: <span class="font-black text-blue-600">1 m³ = 1 000 dm³ = 1 000 000 cm³</span>.</li>
                    <li>Vận dụng đổi đơn vị và giải bài toán thực tế chứa đo lường dạng thể tích.</li>
                </ul>
            </div>

            <!-- 📖 Hội thoại Khám phá (Trang sách động) -->
            <div class="mb-6 relative group overflow-hidden rounded-[40px] shadow-sm border border-gray-100 bg-white">
                <style>
                    @keyframes floatBubble {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-5px); }
                    }
                    @keyframes popInB111 {
                        0% { opacity: 0; transform: scale(0.8) translateY(20px); }
                        100% { opacity: 1; transform: scale(1) translateY(0); }
                    }
                    .animate-bubble-1 { animation: popInB111 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
                    .animate-bubble-2 { animation: popInB111 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards; opacity: 0; }
                    .float-idle { animation: floatBubble 3s ease-in-out infinite; }
                    
                    .water-wave {
                        background: radial-gradient(circle at 50% 100%, #38bdf8 0%, transparent 60%);
                        background-size: 200% 200%;
                        animation: waveAnim 3s ease-in-out infinite alternate;
                    }
                    @keyframes waveAnim {
                        0% { background-position: 0% 100%; border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
                        100% { background-position: 100% 100%; border-radius: 60% 40% 30% 70% / 50% 60% 40% 60%; }
                    }
                </style>
                
                <!-- Khu vực Trang Sách / Hình Ảnh (Người dùng chèn ảnh vào đây) -->
                <div class="relative w-full h-auto bg-blue-50/50 flex align-center justify-center p-4">
                    <img src="hinh_anh/111-khampha.png" alt="Khám phá bể bơi" class="w-full h-auto max-w-2xl object-contain drop-shadow-md rounded-2xl hover:scale-[1.02] transition-transform duration-500 z-10 relative" onerror="this.style.display='none'; document.getElementById('css-art-fallback').style.display='flex'">
                    
                    <!-- CSS Art Fallback (Dự phòng nếu chưa có ảnh) -->
                    <div id="css-art-fallback" class="hidden w-full h-[250px] md:h-[350px] items-end justify-center perspective-1000 relative pb-6">
                        <!-- Nền Caro -->
                        <div class="absolute inset-0 opacity-30" style="background-image: radial-gradient(#60a5fa 1px, transparent 1px); background-size: 20px 20px;"></div>
                        <!-- Bể bơi -->
                        <div class="w-[85%] max-w-lg h-32 md:h-40 water-wave border-4 border-cyan-500/50 rounded-[40px] relative shadow-inner overflow-hidden flex items-center justify-center">
                           <div class="absolute bottom-0 w-[150%] h-20 bg-blue-400/30 animate-pulse-slow blur-md"></div>
                           <span class="text-4xl md:text-5xl animate-bounce drop-shadow-md z-10 filter hover:brightness-110 active:scale-95 cursor-pointer transition-all w-16 h-16 bg-blue-600 rounded-3xl flex items-center justify-center font-black text-white">E</span>
                        </div>
                        <span class="absolute bottom-6 left-[10%] md:left-1/4 text-6xl md:text-7xl animate-[bounce_2s_infinite] drop-shadow-lg z-10 cursor-pointer hover:rotate-12 transition-transform">👦</span>
                        <span class="absolute bottom-6 right-[10%] md:right-1/4 text-6xl md:text-7xl float-idle drop-shadow-lg z-10 cursor-pointer hover:-rotate-12 transition-transform">👨💦</span>
                    </div>
                </div>

                <!-- Hội thoại động phía dưới trang sách -->
                <div class="px-4 py-8 md:p-8 bg-gradient-to-t from-white via-white to-transparent relative z-20 flex flex-col gap-6 w-full mx-auto -mt-6">
                    <!-- Lời Cậu bé -->
                    <div class="self-start animate-bubble-1 group z-10 max-w-[90%] md:max-w-[75%]">
                        <div class="relative bg-white border-2 border-orange-200 p-4 md:p-6 rounded-3xl rounded-tl-none shadow-[4px_4px_0_0_rgba(253,186,116,1)] hover:shadow-none hover:translate-y-1 hover:translate-x-1 transition-all">
                            <div class="absolute -top-6 -left-2 text-4xl float-idle drop-shadow-md">👦</div>
                            <p class="text-gray-800 font-bold leading-relaxed text-sm md:text-lg pl-2">
                                "Chú ơi! Mỗi lần sử dụng <span class="text-orange-600 font-black relative overflow-hidden inline-block group-hover:scale-105 transition-transform px-1 cursor-pointer"><span class="relative z-10">bể bơi này</span><span class="absolute bottom-0 left-0 w-full h-2 bg-orange-200 opacity-50 -z-10 rounded"></span></span> thì có tốn nhiều nước không ạ?"
                            </p>
                        </div>
                    </div>

                    <!-- Lời Người lớn -->
                    <div class="self-end animate-bubble-2 group mt-2 max-w-[90%] md:max-w-[75%]">
                        <div class="relative bg-white border-2 border-blue-300 p-4 md:p-6 rounded-3xl rounded-tr-none shadow-[-4px_4px_0_0_rgba(147,197,253,1)] hover:shadow-none hover:translate-y-1 hover:-translate-x-1 transition-all">
                            <div class="absolute -top-6 -right-2 text-4xl float-idle drop-shadow-md" style="animation-delay: 0.5s">👨</div>
                            <p class="text-gray-800 font-bold leading-relaxed text-sm md:text-lg text-right pr-2">
                                "Thể tích của bể là khoảng <span class="bg-blue-600 text-white font-black px-3 py-1.5 rounded-xl mx-1 shadow-inner inline-block group-hover:-translate-y-1 transition-transform cursor-pointer hover:bg-blue-500">3,5 mét khối</span> cháu ạ."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 📖 Khám phá kiến thức mới -->
            <div class="glass-card p-4 md:p-8 rounded-[40px] bg-white border border-blue-100 shadow-xl relative overflow-hidden md:overflow-visible">
                <div class="absolute -right-10 -top-10 w-32 h-32 md:w-40 md:h-40 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
                <h4 class="text-xl md:text-2xl font-black text-blue-800 mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                    <span class="p-1.5 md:p-2 bg-blue-600 text-white rounded-xl md:rounded-2xl">
                        <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </span>
                    Để đo thể tích, người ta còn dùng đơn vị <u class="decoration-4 decoration-yellow-400">mét khối</u>.
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                    <div class="space-y-6">
                        <div class="p-5 bg-gradient-to-r from-blue-50 to-white rounded-3xl border border-blue-100 shadow-sm">
                           <p class="text-gray-800 text-base md:text-lg leading-relaxed font-bold">
                                a) <span class="font-black text-blue-600">Mét khối</span> là thể tích của hình lập phương có cạnh dài 1 m.
                           </p>
                           <div class="mt-4 p-4 bg-white rounded-2xl border-2 border-dashed border-blue-200 inline-block">
                               <p class="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Mét khối viết tắt là:</p>
                               <p class="text-3xl md:text-4xl font-black text-blue-800">m³</p>
                           </div>
                        </div>

                        <div class="p-5 bg-gradient-to-r from-emerald-50 to-white rounded-3xl border border-emerald-100 shadow-sm">
                           <p class="text-gray-800 text-base md:text-lg leading-relaxed font-bold">
                                b) Hình lập phương cạnh 1 m gồm <span class="text-emerald-600 font-black">1 000</span> hình lập phương cạnh 1 dm.
                           </p>
                        </div>
                    </div>
                    <!-- Hình ảnh minh họa khối -->
                    <div class="flex justify-center bg-gray-50 rounded-[40px] border border-gray-100 h-full items-center shadow-inner overflow-hidden relative" style="min-height: 300px;">
                        <iframe src="3d/lapphuong.html" class="w-full h-full absolute inset-0 rounded-[40px]" frameborder="0" scrolling="no"></iframe>
                        <!-- Lớp phủ vô hình để tránh nuốt scroll chuột khi cuộn trang, chỉ tương tác 3D khi cần -->
                        <div class="absolute inset-0 z-10 pointer-events-none rounded-[40px] shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]"></div>
                        <button onclick="this.previousElementSibling.classList.toggle('pointer-events-none'); if(this.innerText==='Bật tương tác 3D') { this.innerText='Tắt tương tác'; this.classList.remove('bg-blue-600', 'text-white'); this.classList.add('bg-gray-200', 'text-gray-800'); } else { this.innerText='Bật tương tác 3D'; this.classList.remove('bg-gray-200', 'text-gray-800'); this.classList.add('bg-blue-600', 'text-white');}" class="absolute bottom-4 right-4 z-20 px-4 py-2 bg-blue-600 text-white font-bold rounded-xl text-sm shadow-md transition-colors hover:bg-blue-700">Bật tương tác 3D</button>
                    </div>
                </div>
            </div>

            <!-- 🔄 Bảng quy đổi / Ghi nhớ -->
            <div class="p-4 md:p-8 rounded-[32px] bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <h4 class="text-lg md:text-xl font-black mb-4 md:mb-6 flex items-center gap-2 relative z-10">
                    🔄 Mối liên hệ quan trọng cần Ghi nhớ
                </h4>
                <div class="space-y-3 md:space-y-4 relative z-10">
                    <div class="p-4 md:p-6 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 text-center lg:text-left flex flex-col lg:flex-row items-center gap-4 lg:gap-8 justify-between shadow-sm">
                        <div class="bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shrink-0">Ta có</div>
                        <p class="text-xl md:text-3xl font-black tracking-tight">1 m³ = <span class="text-yellow-300">1 000</span> dm³ = <span class="text-yellow-300">1 000 000</span> cm³</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        <div class="p-4 md:p-5 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 text-center lg:text-left flex items-center justify-between shadow-inner">
                            <span class="text-lg md:text-xl font-bold font-mono">1 dm³ =</span>
                            <span class="text-lg md:text-xl font-black"><span class="bg-white/20 px-2 py-0.5 rounded mr-1">1 / 1 000</span> m³</span>
                        </div>
                        <div class="p-4 md:p-5 bg-white/5 rounded-2xl backdrop-blur-md border border-white/10 text-center lg:text-left flex items-center justify-between shadow-inner">
                            <span class="text-lg md:text-xl font-bold font-mono">1 cm³ =</span>
                            <span class="text-lg md:text-xl font-black"><span class="bg-white/20 px-2 py-0.5 rounded mr-1">1 / 1 000 000</span> m³</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 🤖 AI E tương tác -->
            [[TUTOR|b111-intro|Khám phá bài học thú vị quá! Bạn hãy nhắc lại cho AI E nghe 1 mét khối bằng bao nhiêu đề-xi-mét khối nhé?]]
        </div>
    `,
    "practice": `
        <div class="space-y-4 md:space-y-8">
            <!-- Bài tập 1: Đọc -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">1</span>
                    Đọc số đo thể tích của mỗi bể bơi dưới đây.
                </p>
                <div class="space-y-3 md:space-y-4">
                    <!-- Giao diện bài tập đọc nhập xuất theo định dạng chung cho dễ bảo trì bằng Regex Edurobot -->
                    [[READING_EX|b1-b111-1|1,25 m³|Bể bơi phao nhỏ|đọc là:|Một phẩy hai mươi lăm mét khối]]
                    [[READING_EX|b1-b111-2|300 m³|Bể bơi ngoài trời|đọc là:|Ba trăm mét khối]]
                    [[READING_EX|b1-b111-3|1 875 m³|Bể bơi trong nhà|đọc là:|Một nghìn tám trăm bảy mươi lăm mét khối]]
                </div>
            </div>

            <!-- Bài tập 2: Số ? -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm overflow-hidden relative">
                <div class="absolute right-0 top-0 opacity-5 text-[150px] -translate-y-10 translate-x-10">🐝</div>
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">2</span>
                    Số ? (Đổi đơn vị đo thể tích hình tổ ong)
                </p>
                <div class="bg-yellow-50 p-4 md:p-8 rounded-[32px] border-2 border-yellow-200">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 relative z-10">
                        [[CONV_EX|b111-2a|3 m³|dm³|3000]]
                        [[CONV_EX|b111-2b|1,7 m³|dm³|1700]]
                        [[CONV_EX|b111-2c|2 400 dm³|m³|2,4]]
                        [[CONV_EX|b111-2d|25 m³|cm³|25000000]]
                        [[CONV_EX|b111-2e|1/4 m³|dm³|250]]
                        [[CONV_EX|b111-2f|800 000 cm³|m³|0,8]]
                    </div>
                </div>
            </div>

            <!-- Bài tập 3: Giải toán có lời văn -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">3</span>
                    Bài toán vận dụng
                </p>
                <div class="bg-blue-600 p-6 md:p-8 rounded-[32px] text-white overflow-hidden relative">
                    <div class="absolute top-0 right-0 p-8 opacity-20 transform rotate-12 -translate-y-4">🚚</div>
                    <p class="text-base md:text-xl leading-relaxed font-semibold mb-6 italic indent-8 relative z-10">
                        "Một thùng xe tải có thể tích là 33,2 m³, lượng hàng hoá trên thùng xe chiếm 80% thể tích của thùng xe. Tính thể tích phần còn trống trong thùng xe."
                    </p>
                    <div class="grid grid-cols-2 gap-4 relative z-10">
                        <div class="bg-blue-700/50 p-4 rounded-2xl border border-blue-500 text-center">
                            <span class="block text-xs uppercase font-black opacity-60 mb-1">Toàn bộ thùng</span>
                            <span class="text-2xl md:text-3xl font-black">33,2 <span class="text-base font-bold">m³</span></span>
                        </div>
                        <div class="bg-blue-700/50 p-4 rounded-2xl border border-blue-500 text-center">
                           <span class="block text-xs uppercase font-black opacity-60 mb-1">Hàng chiếm</span>
                           <span class="text-2xl md:text-3xl font-black text-yellow-300">80%</span>
                        </div>
                    </div>
                </div>
                
                <div class="mt-8">
                     <!-- Khu vực giải toán tương tác (Custom Implementation) -->
                     <div class="border-2 border-gray-100 bg-gray-50/50 p-6 md:p-8 rounded-[32px]">
                          <h4 class="font-black text-gray-800 text-lg mb-6 flex items-center gap-3">
                              <span class="text-xl">✍️</span> Bài giải:
                          </h4>
                          
                          <div class="space-y-4">
                              <p class="text-sm font-bold text-gray-500 italic mb-2">Bạn hãy trình bày các bước giải toán vào ô bên dưới nhé:</p>
                              
                              <div class="relative group mt-2">
                                  <textarea id="ans-b111-3-text" rows="5" 
                                      class="w-full bg-white border-2 border-blue-100 rounded-[24px] p-6 pr-14 text-base font-bold text-gray-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all placeholder:text-gray-300 shadow-inner resize-none leading-relaxed" 
                                      placeholder="Bài giải:
1. ...
2. ...
Đáp số: ..."></textarea>
                                  
                                  <!-- Nút Thu Âm (Microphone) -->
                                  <button id="btn-mic-b111" onclick="toggleSpeechRec_b111_3()" title="Nhập bằng giọng nói" class="absolute right-4 bottom-4 w-12 h-12 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center transition-all opacity-70 hover:opacity-100 active:scale-90 border border-blue-200">
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                  </button>
                                  <div id="mic-status-b111" class="absolute -top-3 right-4 px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden">Đang nghe...</div>
                              </div>
                              
                              <div class="flex flex-col sm:flex-row justify-end items-center gap-3 mt-4">
                                  <button id="btn-reset-b111-3-ai" onclick="resetLesson111B3()" class="hidden w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-black text-sm uppercase transition-all shadow-sm active:scale-95">
                                      🔄 Làm lại
                                  </button>
                                  <button onclick="checkLesson111B3_Text(this)" class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide shadow-lg shadow-blue-200 transition-all flex justify-center items-center gap-2 active:scale-95 group">
                                      EduRobot chấm bài
                                      <span class="text-xl group-hover:scale-125 transition-transform">✨</span>
                                  </button>
                              </div>
                              
                              <div id="fb-b111-3-ai" class="hidden mt-6 animate-slide-up"></div>
                          </div>
                          
                          <script>
                              window.checkLesson111B3_Text = async function(btn) {
                                  const input = document.getElementById('ans-b111-3-text');
                                  const fbBox = document.getElementById('fb-b111-3-ai');
                                  const resetBtn = document.getElementById('btn-reset-b111-3-ai');
                                  const studentWork = input.value.trim();
                                  
                                  if (!studentWork) {
                                      alert("Bạn hãy viết bài giải vào ô trống nhé!");
                                      return;
                                  }
                                  
                                  const ogHtml = btn.innerHTML;
                                  btn.disabled = true;
                                  btn.innerHTML = \`<div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>\`;
                                  
                                  fbBox.classList.remove('hidden');
                                  fbBox.innerHTML = \`
                                      <div class="bg-blue-100/50 p-5 rounded-2xl flex items-center gap-3 italic text-blue-700 text-sm font-bold border border-blue-200/50">
                                          <div class="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                          EduRobot đang xem và chấm bài của bạn, đợi xíu nhé...
                                      </div>
                                  \`;
                                  resetBtn.classList.add('hidden');
                                  
                                  try {
                                      const requirement = "Hãy đóng vai Thầy giáo Toán tiểu học nhận xét lời giải của học sinh. Bài toán gốc: Thể tích thùng tải 33.2 m3, hàng chiếm 80%. Tìm thể tích rỗng (20%). Kết quả đúng là 6.64 m3. Hãy chấm điểm, chỉ ra chỗ sai nếu có và động viên.";
                                      const feedback = await AI.tutor(studentWork, "Toán lớp 5 - Mét khối", requirement);
                                      
                                      fbBox.innerHTML = \`
                                          <div class="bg-white border-2 border-indigo-500 p-6 md:p-8 rounded-[32px] shadow-xl shadow-indigo-100 relative">
                                              <div class="absolute -top-3 left-6 px-4 py-1.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">EduRobot Nhận Xét</div>
                                              <div class="text-[15px] font-medium text-gray-800 leading-relaxed pt-2 space-y-2">\${feedback.replace(/\\n/g, '<br>')}</div>
                                          </div>
                                      \`;
                                      resetBtn.classList.remove('hidden');
                                  } catch (e) {
                                      fbBox.innerHTML = \`<div class="text-red-500 font-bold p-4 bg-red-50 rounded-2xl">Lỗi kết nối AI. Bạn hãy thử lại sau nhé.</div>\`;
                                      resetBtn.classList.remove('hidden');
                                  } finally {
                                      btn.disabled = false;
                                      btn.innerHTML = ogHtml;
                                  }
                              };

window.resetLesson111B3 = function () {
    document.getElementById('ans-b111-3-text').value = '';
    document.getElementById('fb-b111-3-ai').classList.add('hidden');
    document.getElementById('btn-reset-b111-3-ai').classList.add('hidden');
};

// --- LOGIC NỘP TOÀN BỘ BÀI LUYỆN TẬP ---
window.submitAllPractice111 = function () {
    // 1. Phân tích Bài 1
    const b1_1 = document.getElementById('b1-b111-1')?.value || "";
    const b1_2 = document.getElementById('b1-b111-2')?.value || "";
    const b1_3 = document.getElementById('b1-b111-3')?.value || "";
    
    // 2. Phân tích Bài 2
    const b2_a = document.getElementById('b111-2a')?.value || "";
    const b2_b = document.getElementById('b111-2b')?.value || "";
    const b2_c = document.getElementById('b111-2c')?.value || "";
    const b2_d = document.getElementById('b111-2d')?.value || "";
    const b2_e = document.getElementById('b111-2e')?.value || "";
    const b2_f = document.getElementById('b111-2f')?.value || "";

    // 3. Phân tích Bài 3
    const textVal = document.getElementById('ans-b111-3-text')?.value.trim();
    let aiScoreText = "Học sinh tự nộp chưa qua AI chấm";
    const fbBox = document.getElementById('fb-b111-3-ai');
    if (fbBox && !fbBox.classList.contains('hidden')) {
        const rawText = fbBox.innerText;
        aiScoreText = rawText.replace("EduRobot Nhận Xét", "").trim();
    }

    // Tổ hợp dữ liệu
    const fullContent = \`
====== BÀI 1: GHI SỐ ĐO ======
Bể phao: \${b1_1}
Bể ngoài trời: \${b1_2}
Bể trong nhà: \${b1_3}

====== BÀI 2: ĐỔI ĐƠN VỊ ======
a) 3 m³ = \${b2_a} dm³
b) 1,7 m³ = \${b2_b} dm³
c) 2 400 dm³ = \${b2_c} m³
d) 25 m³ = \${b2_d} cm³
e) 1/4 m³ = \${b2_e} dm³
f) 800 000 cm³ = \${b2_f} m³

====== BÀI 3: GIẢI TOÁN TỰ LUẬN ======
\${textVal || "(Trống)"}

=== NHẬN XÉT CỦA EDUROBOT (BÀI 3) ===
\${aiScoreText}\`;

    if (window.submitMathLesson) {
        window.submitMathLesson(fullContent, "KT Toàn phần", "btn-submit-all-practice-111");
    } else {
        alert("Chức năng nộp bài đang tải, em chờ chút nhé!");
    }
};

// Speech Recognition Logic
let recognition_b111_3 = null;
window.toggleSpeechRec_b111_3 = function () {
    const btn = document.getElementById('btn-mic-b111');
    const status = document.getElementById('mic-status-b111');
    const input = document.getElementById('ans-b111-3-text');

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        alert("Trình duyệt của bạn không hỗ trợ tính năng nhận diện giọng nói. Vui lòng dùng Chrome hoặc tải app EduRobot nhé!");
        return;
    }

    if (recognition_b111_3 && btn.classList.contains('recording')) {
        recognition_b111_3.stop();
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition_b111_3 = new SpeechRecognition();
    recognition_b111_3.lang = 'vi-VN';
    recognition_b111_3.continuous = false;
    recognition_b111_3.interimResults = false;

    recognition_b111_3.onstart = function () {
        btn.classList.add('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
        btn.classList.remove('bg-blue-50', 'text-blue-600', 'border-blue-200');
        status.classList.remove('hidden');
    };

    recognition_b111_3.onresult = function (event) {
        const transcript = event.results[0][0].transcript;
        const currentVal = input.value;
        input.value = currentVal ? (currentVal + ' \\n' + transcript) : transcript;
    };

    recognition_b111_3.onerror = function (event) {
        status.classList.add('hidden');
        btn.classList.remove('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
        alert("Lỗi Micro: " + event.error);
    };

    recognition_b111_3.onend = function () {
        btn.classList.remove('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
        btn.classList.add('bg-blue-50', 'text-blue-600', 'border-blue-200');
        status.classList.add('hidden');
    };

    recognition_b111_3.start();
};
                          </script>
                     </div>
                </div>
            </div>

            <!-- Nút Gom nộp bài toàn bộ phần Luyện Tập -->
            <div class="mt-12 bg-emerald-50 p-6 md:p-8 rounded-[40px] border-2 border-emerald-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <h3 class="text-emerald-800 font-black text-xl md:text-2xl mb-2">Hoàn thành Luyện Tập?</h3>
                    <p class="text-emerald-700 font-bold text-sm md:text-base">Hệ thống sẽ lưu lại toàn bộ bài làm để Thầy/Cô chấm điểm nhé.</p>
                </div>
                <button id="btn-submit-all-practice-111" onclick="submitAllPractice111()" class="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-3xl font-black text-base md:text-lg uppercase tracking-wide shadow-xl shadow-emerald-200 transition-all flex justify-center items-center gap-3 active:scale-95 group">
                    <span>Nộp Bài Luyện Tập</span>
                    <span class="text-2xl group-hover:translate-x-1 transition-transform">🚀</span>
                </button>
            </div>
        </div>
    `,
    "quizPool": [
        {
            "question": "Mét khối được viết tắt là gì?",
            "options": ["m²", "m³", "dm³", "cm³"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "1 m³ bằng bao nhiêu dm³?",
            "options": ["10", "100", "1 000", "1 000 000"],
            "answer": 2,
            "level": 1
        },
        {
            "question": "1 m³ bằng bao nhiêu cm³?",
            "options": ["1 000", "10 000", "100 000", "1 000 000"],
            "answer": 3,
            "level": 1
        },
        {
            "question": "Số đo 1,025 m³ được đọc là:",
            "options": [
                "Một phẩy không hai mươi lăm mét khối.",
                "Mười phẩy hai lăm mét khối.",
                "Một mét khối hai mươi lăm đề-xi-mét khối.",
                "Một nghìn không trăm hai mươi lăm mét khối."
            ],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Điền số thích hợp: 3/4 m³ = ... dm³",
            "options": ["750", "250", "75", "7500"],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Một bể bơi có thể tích 18 m³, nếu người ta bơm vào 75% thể tích nước thì số mét khối nước trong bể là:",
            "options": ["13,5 m³", "24 m³", "4,5 m³", "18 m³"],
            "answer": 0,
            "level": 3
        }
    ]
};
