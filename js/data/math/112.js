export const lesson112 = {
    "topic": "Hình học và Đo lường",
    "week": "23",
    "period": "112",
    "title": "LUYỆN TẬP",
    "desc": "Luyện tập về đơn vị đo thể tích. Giải bài toán thực tế tính tiền nước sinh hoạt.",
    "content": `
        <!-- Đây là tiết Luyện tập nên phần Khám phá sẽ dẫn dắt nhanh vào Luyện tập -->
        <div class="space-y-4 md:space-y-6">
            <div class="bg-blue-50 p-4 md:p-8 rounded-[32px] border-l-8 border-blue-600 shadow-sm animate-fade-in">
                <h3 class="text-blue-900 font-black text-xl md:text-2xl mb-2 md:mb-3">🎯 Mục tiêu bài học</h3>
                <ul class="list-disc list-inside text-blue-800 space-y-1 md:space-y-2 font-bold text-base md:text-lg">
                    <li>Luyện tập viết các số đo và đổi các đơn vị đo thể tích xăng-ti-mét khối, đề-xi-mét khối, mét khối.</li>
                    <li>Thực hiện các phép tính cộng, trừ, nhân, chia với các số đo thể tích.</li>
                    <li>Vận dụng giải bài toán thực tế về tính tiền nước sinh hoạt.</li>
                </ul>
            </div>
            
             <!-- Ghi nhớ -->
            <div class="p-4 md:p-8 rounded-[32px] bg-gradient-to-br from-blue-700 to-indigo-900 text-white shadow-2xl relative overflow-hidden">
                <h4 class="text-lg md:text-xl font-black mb-4 flex items-center gap-2 relative z-10">
                    🔄 Ghi nhớ bảng quy đổi
                </h4>
                <div class="flex items-center gap-4 justify-center bg-white/10 p-4 rounded-3xl backdrop-blur-md">
                     <p class="text-xl md:text-3xl font-black tracking-tight">1 m³ = <span class="text-yellow-300">1 000</span> dm³ = <span class="text-yellow-300">1 000 000</span> cm³</p>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-4 md:space-y-8">
            <!-- Bài tập 1 -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black text-blue-800">1</span>
                    Chọn số đo thể tích phù hợp cho mỗi chiếc hộp dưới đây.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <!-- Hộp 1 -->
                    <div class="bg-yellow-50 rounded-3xl p-6 flex flex-col items-center justify-center border-2 border-yellow-200 shadow-sm hover:scale-105 transition-transform group relative">
                        <img src="hinh_anh/112-b1-1.png" alt="Hộp nhỏ gọn" class="w-24 h-24 object-contain mb-4 animate-[bounce_2s_infinite] drop-shadow-md" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'currentColor\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z\\'/></svg>'">
                        <select id="b112-1a" class="w-full text-center p-3 rounded-2xl border-2 border-yellow-400 font-black text-yellow-800 outline-none focus:ring-4 focus:ring-yellow-200 appearance-none bg-white">
                            <option value="">-- Chọn --</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                            <option value="1 cm3">1 cm³</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-4 flex items-center pt-28 text-yellow-600">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                    
                    <!-- Hộp 2 -->
                    <div class="bg-blue-50 rounded-3xl p-6 flex flex-col items-center justify-center border-2 border-blue-200 shadow-sm hover:scale-105 transition-transform group relative">
                        <img src="hinh_anh/112-b1-2.png" alt="Hộp vừa" class="w-32 h-32 object-contain mb-4 float-idle drop-shadow-md" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'currentColor\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4\\'/></svg>'">
                        <select id="b112-1b" class="w-full text-center p-3 rounded-2xl border-2 border-blue-400 font-black text-blue-800 outline-none focus:ring-4 focus:ring-blue-200 appearance-none bg-white">
                            <option value="">-- Chọn --</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                            <option value="1 cm3">1 cm³</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-4 flex items-center pt-36 text-blue-600">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>

                    <!-- Hộp 3 -->
                    <div class="bg-emerald-50 rounded-3xl p-6 flex flex-col items-center justify-center border-2 border-emerald-200 shadow-sm hover:scale-105 transition-transform group relative">
                        <img src="hinh_anh/112-b1-3.png" alt="Thùng lớn" class="w-48 h-32 object-contain mb-4 animate-[bounce_3s_infinite] drop-shadow-md" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' fill=\\'none\\' viewBox=\\'0 0 24 24\\' stroke=\\'currentColor\\'><path stroke-linecap=\\'round\\' stroke-linejoin=\\'round\\' stroke-width=\\'2\\' d=\\'M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z\\'/></svg>'">
                        <select id="b112-1c" class="w-full text-center p-3 rounded-2xl border-2 border-emerald-400 font-black text-emerald-800 outline-none focus:ring-4 focus:ring-emerald-200 appearance-none bg-white">
                            <option value="">-- Chọn --</option>
                            <option value="1 dm3">1 dm³</option>
                            <option value="1 m3">1 m³</option>
                            <option value="1 cm3">1 cm³</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-4 flex items-center pt-36 text-emerald-600">
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>
                
                <!-- Khu vực Nút Kiểm tra và Kết quả cho Bài 1 -->
                <div class="mt-6 flex flex-col md:flex-row items-center justify-between bg-blue-50/50 p-4 rounded-3xl border border-blue-100 gap-4">
                     <div id="fb-b112-1" class="hidden text-sm md:text-base font-bold animate-fade-in flex-1"></div>
                     <button onclick="checkB112B1(this)" class="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-wide shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 active:scale-95 group shrink-0">
                          Kiểm tra Bài 1
                          <span class="text-xl group-hover:scale-125 transition-transform">✨</span>
                     </button>
                </div>

                <script>
                    window.checkB112B1 = function(btn) {
                        const a = document.getElementById('b112-1a').value;
                        const b = document.getElementById('b112-1b').value;
                        const c = document.getElementById('b112-1c').value;
                        const fb = document.getElementById('fb-b112-1');

                        if (!a || !b || !c) {
                            fb.innerHTML = '<span class="text-amber-600 bg-amber-100 px-4 py-2 rounded-xl">⚠️ Bạn cần chọn đủ 3 đáp án nhé!</span>';
                            fb.classList.remove('hidden');
                            return;
                        }

                        let score = 0;
                        if (a === '1 cm3') score++;
                        if (b === '1 dm3') score++;
                        if (c === '1 m3') score++;

                        if (score === 3) {
                            fb.innerHTML = '<span class="text-emerald-600 bg-emerald-100 px-4 py-2 rounded-xl flex items-center gap-2">🎉 Giỏi quá! Cả 3 đáp án đều chính xác rồi!</span>';
                            btn.classList.replace('bg-blue-600', 'bg-emerald-600');
                            btn.classList.replace('hover:bg-blue-700', 'hover:bg-emerald-700');
                            btn.innerHTML = 'Xuất sắc! ✨';
                        } else {
                            fb.innerHTML = '<span class="text-red-500 bg-red-100 px-4 py-2 rounded-xl flex items-center gap-2">🤔 Bạn bị sai ' + (3 - score) + ' chỗ. Hãy quan sát kỹ kích thước tay và hộp xem sao nhé!</span>';
                        }
                        fb.classList.remove('hidden');
                    };
                </script>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black text-blue-800">2</span>
                    a) Viết các số đo: 2,5 m³; 3 900 cm³ theo đơn vị đề-xi-mét khối.
                </p>
                <div class="mb-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        [[CONV_EX|b112-2a-1|2,5 m³|dm³|2500]]
                        [[CONV_EX|b112-2a-2|3 900 cm³|dm³|3,9]]
                    </div>
                </div>

                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black opacity-0"></span>
                    b) Viết các số đo: 4 600 dm³; 7 500 000 cm³ theo đơn vị mét khối.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    [[CONV_EX|b112-2b-1|4 600 dm³|m³|4,6]]
                    [[CONV_EX|b112-2b-2|7 500 000 cm³|m³|7,5]]
                </div>
            </div>

            <!-- Bài 3 -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black text-blue-800">3</span>
                    Tính.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <p class="font-bold text-gray-800">a)</p>
                        <div class="flex items-center gap-3">
                            <span class="font-bold whitespace-nowrap">3,5 m³ + 6,05 m³ =</span>
                            <input type="text" id="b112-3a-1" class="w-24 p-2 text-center border-b-2 border-blue-400 font-black text-blue-800 outline-none bg-transparent focus:border-blue-600" placeholder="...">
                            <span class="font-bold">m³</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="font-bold whitespace-nowrap">1 000 m³ – 510 m³ =</span>
                            <input type="text" id="b112-3a-2" class="w-24 p-2 text-center border-b-2 border-blue-400 font-black text-blue-800 outline-none bg-transparent focus:border-blue-600" placeholder="...">
                            <span class="font-bold">m³</span>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <p class="font-bold text-gray-800">b)</p>
                        <div class="flex items-center gap-3">
                            <span class="font-bold whitespace-nowrap">8,5 m³ × 0,5 =</span>
                            <input type="text" id="b112-3b-1" class="w-24 p-2 text-center border-b-2 border-blue-400 font-black text-blue-800 outline-none bg-transparent focus:border-blue-600" placeholder="...">
                            <span class="font-bold">m³</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="font-bold whitespace-nowrap">1 875 m³ : 5 =</span>
                            <input type="text" id="b112-3b-2" class="w-24 p-2 text-center border-b-2 border-blue-400 font-black text-blue-800 outline-none bg-transparent focus:border-blue-600" placeholder="...">
                            <span class="font-bold">m³</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 4: Giải toán có lời văn -->
            <div class="p-4 md:p-8 bg-white rounded-[40px] border border-gray-100 shadow-sm">
                <p class="font-black text-lg md:text-xl mb-4 md:mb-6 text-blue-600 flex items-center gap-2 md:gap-3">
                    <span class="w-8 h-8 md:w-10 md:h-10 bg-blue-50 rounded-xl flex items-center justify-center font-black">4</span>
                    Biết giá nước sinh hoạt được tính theo các mức sử dụng như sau:
                </p>
                
                <div class="overflow-x-auto mb-6">
                    <table class="w-full text-left font-medium border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-pink-100">
                        <thead>
                            <tr class="bg-pink-100 text-pink-900 border-b-2 border-pink-200">
                                <th class="p-4 font-black">Mức sử dụng nước</th>
                                <th class="p-4 font-black text-center whitespace-nowrap">Giá của 1 m³ nước</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-700 divide-y divide-pink-50">
                            <tr class="hover:bg-pink-50 transition-colors">
                                <td class="p-4">Mức thứ nhất: 10 m³ đầu tiên</td>
                                <td class="p-4 text-center">5 973 đồng</td>
                            </tr>
                            <tr class="hover:bg-pink-50 transition-colors">
                                <td class="p-4">Mức thứ hai: Từ 11 m³ đến 20 m³</td>
                                <td class="p-4 text-center">7 052 đồng</td>
                            </tr>
                            <tr class="hover:bg-pink-50 transition-colors">
                                <td class="p-4">Mức thứ ba: Từ 21 m³ đến 30 m³</td>
                                <td class="p-4 text-center">8 669 đồng</td>
                            </tr>
                            <tr class="hover:bg-pink-50 transition-colors">
                                <td class="p-4">Mức cuối cùng: Trên 30 m³</td>
                                <td class="p-4 text-center">15 929 đồng</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-gray-50 p-6 rounded-[24px] border border-gray-200 text-gray-700 leading-relaxed mb-6">
                    <p>
                        Ví dụ: Nếu gia đình sử dụng 12 m³ nước sinh hoạt thì 10 m³ đầu tiên được tính với giá 5 973 đồng cho 1 m³ nước và 2 m³ sau được tính với giá 7 052 đồng cho 1 m³ nước.
                    </p>
                </div>

                <div class="text-gray-800 text-base md:text-xl leading-relaxed font-semibold relative z-10 text-justify">
                    <p>
                        Trong tháng trước nhà Việt sử dụng hết 15 m³ nước sinh hoạt. Hãy giúp Việt tính số tiền nước sinh hoạt sử dụng trong tháng đó.
                    </p>
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
                                  <textarea id="ans-b112-4-text" rows="5" 
                                      class="w-full bg-white border-2 border-emerald-100 rounded-[24px] p-6 pr-14 text-base font-bold text-gray-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all placeholder:text-gray-300 shadow-inner resize-none leading-relaxed" 
                                      placeholder="Bài giải:
1. ...
2. ...
Đáp số: ..."></textarea>
                                  
                                  <!-- Nút Thu Âm (Microphone) -->
                                  <button id="btn-mic-b112" onclick="toggleSpeechRec_b112_4()" title="Nhập bằng giọng nói" class="absolute right-4 bottom-4 w-12 h-12 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center transition-all opacity-70 hover:opacity-100 active:scale-90 border border-emerald-200">
                                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                  </button>
                                  <div id="mic-status-b112" class="absolute -top-3 right-4 px-3 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full animate-pulse hidden">Đang nghe...</div>
                              </div>
                              
                              <div class="flex flex-col sm:flex-row justify-end items-center gap-3 mt-4">
                                  <button id="btn-reset-b112-4-ai" onclick="resetLesson112B4()" class="hidden w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-4 rounded-2xl font-black text-sm uppercase transition-all shadow-sm active:scale-95">
                                      🔄 Làm lại
                                  </button>
                                  <button onclick="checkLesson112B4_Text(this)" class="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-wide shadow-lg shadow-emerald-200 transition-all flex justify-center items-center gap-2 active:scale-95 group">
                                      EduRobot chấm bài
                                      <span class="text-xl group-hover:scale-125 transition-transform">✨</span>
                                  </button>
                              </div>
                              
                              <div id="fb-b112-4-ai" class="hidden mt-6 animate-slide-up"></div>
                          </div>
                          
                          <script>
                              window.checkLesson112B4_Text = async function(btn) {
                                  const input = document.getElementById('ans-b112-4-text');
                                  const fbBox = document.getElementById('fb-b112-4-ai');
                                  const resetBtn = document.getElementById('btn-reset-b112-4-ai');
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
                                      <div class="bg-emerald-100/50 p-5 rounded-2xl flex items-center gap-3 italic text-emerald-700 text-sm font-bold border border-emerald-200/50">
                                          <div class="w-5 h-5 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                                          EduRobot đang xem và chấm bài của bạn, đợi xíu nhé...
                                      </div>
                                  \`;
                                  resetBtn.classList.add('hidden');
                                  
                                  try {
                                      const requirement = "Đóng vai Thầy giáo Toán tiểu học nhận xét lời giải tính tiền nước chuẩn với sách giáo khoa 100%. Khách thụ hưởng bài toán sử dụng 15 m3 nước. Theo bảng giá, 10 m3 đầu giá 5 973 đồng/m3, 5 m3 sau giá 7 052 đồng/m3. Lời giải kỳ vọng: Tiền 10 m3 đầu: 10 * 5973 = 59730, tiền 5 m3 sau: 5 * 7052 = 35260. Tổng tiền: 59730 + 35260 = 94990 đồng. Hãy đối chiếu chi tiết từng bước học sinh đã giải và động viên học sinh.";
                                      const feedback = await AI.tutor(studentWork, "Toán lớp 5 - Tính tiền nước", requirement);
                                      
                                      fbBox.innerHTML = \`
                                          <div class="bg-white border-2 border-emerald-500 p-6 md:p-8 rounded-[32px] shadow-xl shadow-emerald-100 relative">
                                              <div class="absolute -top-3 left-6 px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-md">EduRobot Nhận Xét</div>
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

                              window.resetLesson112B4 = function () {
                                  document.getElementById('ans-b112-4-text').value = '';
                                  document.getElementById('fb-b112-4-ai').classList.add('hidden');
                                  document.getElementById('btn-reset-b112-4-ai').classList.add('hidden');
                              };

                              // --- LOGIC NỘP TOÀN BỘ BÀI LUYỆN TẬP ---
                              window.submitAllPractice112 = function () {
                                  // Bài 1
                                  const b1_a = document.getElementById('b112-1a')?.value || "";
                                  const b1_b = document.getElementById('b112-1b')?.value || "";
                                  const b1_c = document.getElementById('b112-1c')?.value || "";
                                  
                                  // Bài 2
                                  const b2_a1 = document.getElementById('b112-2a-1')?.value || "";
                                  const b2_a2 = document.getElementById('b112-2a-2')?.value || "";
                                  const b2_b1 = document.getElementById('b112-2b-1')?.value || "";
                                  const b2_b2 = document.getElementById('b112-2b-2')?.value || "";

                                  // Bài 3
                                  const b3_a1 = document.getElementById('b112-3a-1')?.value || "";
                                  const b3_a2 = document.getElementById('b112-3a-2')?.value || "";
                                  const b3_b1 = document.getElementById('b112-3b-1')?.value || "";
                                  const b3_b2 = document.getElementById('b112-3b-2')?.value || "";

                                  // Bài 4
                                  const textVal = document.getElementById('ans-b112-4-text')?.value.trim();
                                  let aiScoreText = "Học sinh tự nộp chưa qua AI chấm";
                                  const fbBox = document.getElementById('fb-b112-4-ai');
                                  if (fbBox && !fbBox.classList.contains('hidden')) {
                                      const rawText = fbBox.innerText;
                                      aiScoreText = rawText.replace("EduRobot Nhận Xét", "").trim();
                                  }

                                  const fullContent = \`
====== BÀI 1: CHỌN SỐ ĐO ======
Hộp mút ngón tay: \${b1_a}
Hộp quà: \${b1_b}
Thùng hàng: \${b1_c}

====== BÀI 2: ĐỔI ĐƠN VỊ ======
a) 2,5 m³ = \${b2_a1} dm³
   3 900 cm³ = \${b2_a2} dm³
b) 4 600 dm³ = \${b2_b1} m³
   7 500 000 cm³ = \${b2_b2} m³

====== BÀI 3: TÍNH ======
a) 3,5 + 6,05 = \${b3_a1}
   1 000 - 510 = \${b3_a2}
b) 8,5 x 0,5 = \${b3_b1}
   1 875 : 5 = \${b3_b2}

====== BÀI 4: BÀI TOÁN TÍNH TIỀN NƯỚC ======
\${textVal || "(Trống)"}

=== NHẬN XÉT CỦA EDUROBOT (BÀI 4) ===
\${aiScoreText}
\`;

                                  if (window.submitMathLesson) {
                                      window.submitMathLesson(fullContent, "KT Toàn phần", "btn-submit-all-practice-112");
                                  } else {
                                      alert("Chức năng nộp bài đang tải, em chờ chút nhé!");
                                  }
                              };

                              let recognition_b112_4 = null;
                              window.toggleSpeechRec_b112_4 = function () {
                                  const btn = document.getElementById('btn-mic-b112');
                                  const status = document.getElementById('mic-status-b112');
                                  const input = document.getElementById('ans-b112-4-text');

                                  if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
                                      alert("Trình duyệt của bạn không hỗ trợ tính năng nhận diện giọng nói. Vui lòng dùng Chrome hoặc tải app EduRobot nhé!");
                                      return;
                                  }

                                  if (recognition_b112_4 && btn.classList.contains('recording')) {
                                      recognition_b112_4.stop();
                                      return;
                                  }

                                  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                                  recognition_b112_4 = new SpeechRecognition();
                                  recognition_b112_4.lang = 'vi-VN';
                                  recognition_b112_4.continuous = false;
                                  recognition_b112_4.interimResults = false;

                                  recognition_b112_4.onstart = function () {
                                      btn.classList.add('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
                                      btn.classList.remove('bg-emerald-50', 'text-emerald-600', 'border-emerald-200');
                                      status.classList.remove('hidden');
                                  };

                                  recognition_b112_4.onresult = function (event) {
                                      const transcript = event.results[0][0].transcript;
                                      const currentVal = input.value;
                                      input.value = currentVal ? (currentVal + ' \\n' + transcript) : transcript;
                                  };

                                  recognition_b112_4.onerror = function (event) {
                                      status.classList.add('hidden');
                                      btn.classList.remove('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
                                      alert("Lỗi Micro: " + event.error);
                                  };

                                  recognition_b112_4.onend = function () {
                                      btn.classList.remove('recording', 'bg-red-100', 'text-red-600', 'border-red-300', 'animate-pulse');
                                      btn.classList.add('bg-emerald-50', 'text-emerald-600', 'border-emerald-200');
                                      status.classList.add('hidden');
                                  };

                                  recognition_b112_4.start();
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
                <button id="btn-submit-all-practice-112" onclick="submitAllPractice112()" class="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-5 rounded-3xl font-black text-base md:text-lg uppercase tracking-wide shadow-xl shadow-emerald-200 transition-all flex justify-center items-center gap-3 active:scale-95 group">
                    <span>Nộp Bài Luyện Tập</span>
                    <span class="text-2xl group-hover:translate-x-1 transition-transform">🚀</span>
                </button>
            </div>
        </div>
    `,
    "quizPool": [
        {
            "question": "1 m³ bằng bao nhiêu dm³?",
            "options": ["10", "100", "1 000", "10 000"],
            "answer": 2,
            "level": 1
        },
        {
            "question": "Tính: 3,5 m³ + 6,05 m³ = ?",
            "options": ["9,5 m³", "9,55 m³", "9,1 m³", "10 m³"],
            "answer": 1,
            "level": 1
        },
        {
            "question": "Tính: 8,5 m³ × 0,5 = ?",
            "options": ["4,25 m³", "4,5 m³", "42,5 m³", "4 m³"],
            "answer": 0,
            "level": 2
        },
        {
            "question": "Số đo 3 900 cm³ được viết dưới đơn vị dm³ là:",
            "options": ["39 dm³", "3,9 dm³", "0,39 dm³", "390 dm³"],
            "answer": 1,
            "level": 2
        },
        {
            "question": "Số đo 4 600 dm³ được viết dưới đơn vị m³ là:",
            "options": ["46 m³", "0,46 m³", "4,6 m³", "460 m³"],
            "answer": 2,
            "level": 2
        },
        {
            "question": "Khối hộp nào sau đây có thể tích dự đoán khoảng 1 cm³?",
            "options": ["Khối ru-bích", "Cục tẩy nhỏ", "Hộp đựng giày", "Thùng các tông to"],
            "answer": 1,
            "level": 3
        }
    ]
};
