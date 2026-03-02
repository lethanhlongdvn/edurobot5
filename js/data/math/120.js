export const lesson120 = {
    "topic": "Hình học và Đo lường",
    "week": "24",
    "period": "120",
    "title": "DIỆN TÍCH XUNG QUANH VÀ TOÀN PHẦN HÌNH LẬP PHƯƠNG",
    "desc": "Bài 51: Diện tích xung quanh và diện tích toàn phần của hình lập phương (Tiết 1 - Trang 48-49).",
    "content": `
        <div class="space-y-6 text-indigo-900 animate-fade-in">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 rounded-[32px] text-white shadow-xl flex items-center gap-6">
                <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-4xl">🎯</div>
                <div>
                    <h3 class="text-2xl font-black uppercase tracking-tight">Mục tiêu bài học</h3>
                    <ul class="list-disc list-inside font-bold text-lg opacity-90">
                        <li>Biết cách tính Diện tích xung quanh (Sxq) của hình lập phương.</li>
                        <li>Biết cách tính Diện tích toàn phần (Stp) của hình lập phương.</li>
                        <li>Giải quyết các bài toán vận dụng thực tế thú vị.</li>
                    </ul>
                </div>
            </div>

            <!-- 📖 Khám phá a: Thùng gỗ -->
            <div class="bg-white p-6 md:p-8 rounded-[40px] border border-indigo-100 shadow-xl overflow-hidden relative">
                <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-[100px] -z-0 opacity-50"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="bg-amber-500 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black">a</span>
                            <h4 class="text-xl font-black text-amber-700 uppercase">Dán giấy cho thùng gỗ</h4>
                        </div>
                        <p class="text-lg font-bold leading-relaxed text-gray-700">
                            Bạn Việt muốn dán giấy màu cho các mặt <span class="text-amber-600 font-black">xung quanh</span> của một chiếc thùng gỗ hình lập phương cạnh 30 cm.
                        </p>
                        <div class="bg-amber-50 p-4 rounded-2xl border-l-8 border-amber-400">
                            <p class="font-bold text-amber-900 italic">"Diện tích xung quanh của hình lập phương bằng diện tích một mặt nhân với 4."</p>
                        </div>
                        <div class="bg-indigo-600 p-6 rounded-[24px] text-white shadow-lg text-center transform hover:scale-105 transition-transform cursor-pointer">
                            <p class="text-indigo-100 font-black text-sm uppercase mb-2">Công thức Tính Sxq</p>
                            <p class="text-3xl md:text-5xl font-black tracking-widest">S<sub>xq</sub> = (a × a) × 4</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-xq.png" alt="Sxq" class="w-full max-w-sm h-auto rounded-3xl shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-all">
                    </div>
                </div>
            </div>

            <!-- 📖 Khám phá b: Chiếc gối -->
            <div class="bg-white p-6 md:p-8 rounded-[40px] border border-purple-100 shadow-xl overflow-hidden relative">
                <div class="absolute top-0 left-0 w-32 h-32 bg-purple-100 rounded-br-[100px] -z-0 opacity-50"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="flex justify-center order-2 lg:order-1">
                        <img src="hinh_anh/toan/toan_tap_2/120-khampha-tp.png" alt="Stp" class="w-full max-w-sm h-auto rounded-3xl shadow-2xl border-4 border-white -rotate-1 hover:rotate-0 transition-all">
                    </div>
                    <div class="space-y-4 order-1 lg:order-2">
                        <div class="flex items-center gap-3">
                            <span class="bg-purple-500 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black">b</span>
                            <h4 class="text-xl font-black text-purple-700 uppercase">May vỏ gối hình lập phương</h4>
                        </div>
                        <p class="text-lg font-bold leading-relaxed text-gray-700">
                            Cô thợ may cần tính tổng diện tích vải để may <span class="text-purple-600 font-black">tất cả các mặt</span> của một chiếc gối hình lập phương cạnh 30 cm.
                        </p>
                        <div class="bg-purple-50 p-4 rounded-2xl border-l-8 border-purple-400">
                            <p class="font-bold text-purple-900 italic">"Diện tích toàn phần của hình lập phương bằng diện tích một mặt nhân với 6."</p>
                        </div>
                        <div class="bg-purple-600 p-6 rounded-[24px] text-white shadow-lg text-center transform hover:scale-105 transition-transform cursor-pointer">
                            <p class="text-purple-100 font-black text-sm uppercase mb-2">Công thức Tính Stp</p>
                            <p class="text-3xl md:text-5xl font-black tracking-widest">S<sub>tp</sub> = (a × a) × 6</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 💡 Ghi nhớ -->
            <div class="bg-emerald-50 p-6 rounded-[32px] border-2 border-emerald-200 shadow-inner flex flex-col md:flex-row items-center gap-6">
                <div class="text-5xl">💡</div>
                <div class="text-lg font-bold text-emerald-900 leading-tight">
                    Hình lập phương là hình hộp chữ nhật đặc biệt có 6 mặt là các hình vuông bằng nhau. Vì vậy, cách tính Sxq và Stp cực kỳ đơn giản!
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-8 animate-fade-in">
            <!-- Bài tập 1 -->
            <div id="box-120-1" class="bg-white p-6 md:p-10 rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -z-0 opacity-40"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl md:text-3xl mb-8 text-indigo-700 flex items-center gap-4">
                        <span class="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-indigo-200">1</span>
                        Tính diện tích xung quanh và toàn phần:
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- a) 12 cm -->
                        <div id="box-120-1a" class="bg-gray-50 p-6 rounded-[40px] border-4 border-transparent transition-all">
                            <h4 class="text-2xl font-black text-indigo-800 mb-6 flex items-center gap-3">
                                <span>a) Cạnh a =</span>
                                <span class="bg-white px-4 py-1 rounded-xl shadow-sm text-indigo-600">12 cm</span>
                            </h4>
                            <div class="grid grid-cols-1 gap-4">
                                <div class="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 group">
                                    <label class="block text-gray-400 font-black text-xs uppercase tracking-widest mb-2">Diện tích xung quanh</label>
                                    <div class="flex items-center gap-2">
                                        <input type="number" id="ans-120-1a-xq" class="w-full text-4xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-xl font-black text-gray-300">cm²</span>
                                    </div>
                                </div>
                                <div class="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 group">
                                    <label class="block text-gray-400 font-black text-xs uppercase tracking-widest mb-2">Diện tích toàn phần</label>
                                    <div class="flex items-center gap-2">
                                        <input type="number" id="ans-120-1a-tp" class="w-full text-4xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-xl font-black text-gray-300">cm²</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- b) 1.5 m -->
                        <div id="box-120-1b" class="bg-gray-50 p-6 rounded-[40px] border-4 border-transparent transition-all">
                            <h4 class="text-2xl font-black text-emerald-800 mb-6 flex items-center gap-3">
                                <span>b) Cạnh a =</span>
                                <span class="bg-white px-4 py-1 rounded-xl shadow-sm text-emerald-600">1,5 m</span>
                            </h4>
                            <div class="grid grid-cols-1 gap-4">
                                <div class="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 group">
                                    <label class="block text-gray-400 font-black text-xs uppercase tracking-widest mb-2">Diện tích xung quanh</label>
                                    <div class="flex items-center gap-2">
                                        <input type="number" step="0.01" id="ans-120-1b-xq" class="w-full text-4xl font-black text-indigo-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-xl font-black text-gray-300">m²</span>
                                    </div>
                                </div>
                                <div class="bg-white p-5 rounded-3xl shadow-sm border border-gray-100 group">
                                    <label class="block text-gray-400 font-black text-xs uppercase tracking-widest mb-2">Diện tích toàn phần</label>
                                    <div class="flex items-center gap-2">
                                        <input type="number" step="0.01" id="ans-120-1b-tp" class="w-full text-4xl font-black text-purple-600 bg-transparent border-none focus:ring-0 text-right placeholder:text-gray-100" placeholder="?">
                                        <span class="text-xl font-black text-gray-300">m²</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-120-2" class="bg-white p-6 md:p-10 rounded-[48px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-40 h-40 bg-amber-50 rounded-br-full -z-0 opacity-40"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl md:text-3xl mb-8 text-amber-700 flex items-center gap-4">
                        <span class="w-14 h-14 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-amber-200">2</span>
                        Vận dụng thực tế:
                    </p>
                    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center bg-amber-50/50 p-6 rounded-[40px] border-2 border-amber-100">
                        <div class="lg:col-span-3 space-y-4">
                            <p class="text-xl font-bold text-amber-900 leading-relaxed">
                                Cửa hàng bánh ngọt bảo quản bánh bằng cách cuốn một lớp túi bóng trong suốt <span class="text-amber-600 font-black">vừa đủ quanh chiếc bánh</span> (như hình bên).
                            </p>
                            <p class="text-xl font-bold text-amber-900">
                                Biết chiếc bánh có dạng hình lập phương cạnh <span class="bg-white px-3 py-1 rounded-lg shadow-sm">9 cm</span>. Hãy tính diện tích phần túi bóng cần sử dụng.
                            </p>
                            <div class="bg-white p-6 rounded-3xl shadow-lg border-2 border-amber-200 flex items-center gap-6 group">
                                <div class="w-full">
                                    <label class="block text-gray-400 font-black text-xs uppercase tracking-widest mb-2 text-center">Đáp số của bạn</label>
                                    <div class="flex items-center justify-center gap-4">
                                        <input type="number" id="ans-120-2" class="w-48 text-5xl font-black text-amber-600 bg-transparent border-none focus:ring-0 text-center placeholder:text-gray-100" placeholder="?">
                                        <span class="text-2xl font-black text-gray-300">cm²</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lg:col-span-2 flex justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/120-b2-cake.png" alt="Bánh" class="w-full max-w-[280px] h-auto rounded-[40px] shadow-2xl border-8 border-white transform hover:scale-105 transition-transform">
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="flex flex-col items-center gap-4 pt-10">
                <button id="btn-submit-120" onclick="submit120()" class="group relative bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-5 rounded-[24px] font-black text-2xl shadow-2xl shadow-indigo-200 active:scale-95 transition-all overflow-hidden">
                    <span class="relative z-10 flex items-center gap-3">
                        NỘP BÀI TẬP <span class="text-3xl">🚀</span>
                    </span>
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                </button>
                <p class="text-gray-400 font-bold uppercase text-[10px] tracking-[0.3em]">Hệ thống sẽ tự động chấm điểm và gửi thầy cô</p>
            </div>

            <script>
                window.submit120 = function() {
                    const a1ax = document.getElementById('ans-120-1a-xq').value;
                    const a1at = document.getElementById('ans-120-1a-tp').value;
                    const a1bx = document.getElementById('ans-120-1b-xq').value;
                    const a1bt = document.getElementById('ans-120-1b-tp').value;
                    const a2 = document.getElementById('ans-120-2').value;

                    if (!a1ax || !a1at || !a1bx || !a1bt || !a2) {
                        alert("Thầy E nhắc bạn: Hãy hoàn thành tất cả các ô trống để nộp bài nhé! 🌟");
                        return;
                    }

                    let score = 0;
                    
                    // Reset visual feedback
                    ['1a', '1b', '2'].forEach(id => {
                        const box = document.getElementById('box-120-' + id);
                        box.classList.remove('border-emerald-400', 'bg-emerald-50', 'border-red-400', 'bg-red-50');
                        box.classList.add('border-4', 'border-transparent');
                    });

                    // Check results
                    // 1a: a=12 -> Sxq = 12*12*4 = 576, Stp = 12*12*6 = 864
                    let c1a = (parseInt(a1ax) === 576 && parseInt(a1at) === 864);
                    // 1b: a=1.5 -> Sxq = 1.5*1.5*4 = 9, Stp = 1.5*1.5*6 = 13.5
                    let c1b = (parseFloat(a1bx.replace(',', '.')) === 9 && parseFloat(a1bt.replace(',', '.')) === 13.5);
                    // 2: a=9 -> Sxq (cuốn quanh) = 9*9*4 = 324
                    let c2 = (parseInt(a2) === 324);

                    const box1a = document.getElementById('box-120-1a');
                    const box1b = document.getElementById('box-120-1b');
                    const box2 = document.getElementById('box-120-2');

                    if (c1a) { score += 3; box1a.classList.replace('border-transparent', 'border-emerald-400'); box1a.classList.add('bg-emerald-50'); } 
                    else { box1a.classList.replace('border-transparent', 'border-red-400'); box1a.classList.add('bg-red-50'); }
                    
                    if (c1b) { score += 3; box1b.classList.replace('border-transparent', 'border-emerald-400'); box1b.classList.add('bg-emerald-50'); } 
                    else { box1b.classList.replace('border-transparent', 'border-red-400'); box1b.classList.add('bg-red-50'); }
                    
                    if (c2) { score += 4; box2.classList.add('border-emerald-400', 'bg-emerald-50'); } 
                    else { box2.classList.add('border-red-400', 'bg-red-50'); }

                    const status = score >= 8 ? "XS" : (score >= 6 ? "Đ" : "CĐ");
                    
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Score: " + score, status, "btn-submit-120");
                    }
                    
                    if (score === 10) {
                        alert("Chúc mừng! Bạn đạt điểm tuyệt đối 10/10. Bạn thật xuất sắc! 🌟");
                    } else {
                        alert("Bạn đã hoàn thành bài rồi! Điểm của bạn: " + score + "/10. Hãy kiểm tra các ô màu đỏ nhé! 📚");
                    }
                };
            </script>
        </div>
    `,
    "quizPool": []
};
