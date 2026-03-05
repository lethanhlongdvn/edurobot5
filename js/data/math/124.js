import { Lesson } from '../../components/Lesson.js';

export const lesson124 = {
    id: "math_5_124",
    subject: "Toán học",
    title: "Bài 53. Thể tích hình lập phương",
    subtitle: "Dựa trên thể tích hình hộp chữ nhật để tính thể tích hình lập phương (Trang 54-55)",
    week: "25",
    period: "124",
    content: `
        <div class="space-y-6 text-purple-900 animate-fade-in">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-gradient-to-br from-purple-600 to-indigo-700 p-8 rounded-[40px] text-white shadow-2xl flex items-center gap-8 relative overflow-hidden group">
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all"></div>
                <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-5xl shadow-lg">🎯</div>
                <div>
                    <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2">Mục tiêu bài học</h3>
                    <ul class="list-disc list-inside font-bold text-lg md:text-2xl opacity-95 space-y-1">
                        <li>Biết quy tắc và công thức tính thể tích hình lập phương.</li>
                        <li>Dựa trên thể tích hình hộp chữ nhật để tính thể tích hình lập phương.</li>
                    </ul>
                </div>
            </div>

            <!-- 📖 Khám phá -->
            <div class="bg-white p-8 rounded-[40px] border border-purple-100 shadow-2xl overflow-hidden relative">
                <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-0 opacity-40"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="bg-amber-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">?</span>
                            <h4 class="text-3xl md:text-4xl font-black text-amber-700 uppercase">Khám phá công thức</h4>
                        </div>
                        <p class="text-xl md:text-2xl font-bold leading-tight text-gray-700 italic border-l-8 border-amber-400 pl-4 bg-amber-50 py-4 rounded-r-2xl">
                            "Hình lập phương đó chứa được 3 × 3 × 3 = 27 (hình lập phương nhỏ)."
                        </p>
                        <div class="bg-purple-50 p-6 rounded-3xl border-2 border-purple-100">
                            <p class="text-xl md:text-2xl font-black text-purple-900 space-y-2">
                                <span class="block">📏 Chiều dài: 3 cm</span>
                                <span class="block">📏 Chiều rộng: 3 cm</span>
                                <span class="block">📏 Chiều cao: 3 cm</span>
                                <span class="block mt-4 text-2xl text-purple-600">3 &times; 3 &times; 3 = 27 (cm³)</span>
                            </p>
                        </div>
                    </div>
                    
                    <!-- Phần bên phải ảnh khám phá có nút 3D -->
                    <div class="relative flex justify-center lg:justify-end">
                        <div class="relative group cursor-pointer inline-block">
                            <!-- Image with openZoom -->
                            <img src="hinh_anh/toan/toan_tap_2/124-khampha.png" alt="Khám phá" class="w-full max-w-[600px] h-auto rounded-[40px] shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-transform">
                            
                            <!-- Overlay Action Buttons -->
                            <div class="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button onclick="window.openKhamPhaModal124(); event.stopPropagation();" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-black shadow-2xl flex items-center justify-center transform active:scale-95 transition-all outline-none text-lg" title="Mô phỏng 3D">
                                    3D
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <!-- 💥 MODAL 3D FULLSCREEN 💥 -->
                <div id="modal-124-khampha" class="fixed inset-0 z-[9999] bg-slate-900/95 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-md" p-4" onclick="window.closeKhamPhaModal124()">
                    <div class="bg-purple-50 w-[96%] max-w-5xl h-[94vh] max-h-[1000px] rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col" onclick="event.stopPropagation()">
                        <!-- Header -->
                        <div class="bg-purple-600 bg-gradient-to-r from-purple-700 to-indigo-600 text-white p-5 flex justify-between items-center shrink-0 shadow-lg z-20 relative">
                            <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-4">
                                <span class="bg-white/20 p-2 rounded-2xl">🧊</span> Khám phá thể tích 3D
                            </h3>
                            <button onclick="window.closeKhamPhaModal124()" class="w-14 h-14 bg-white/20 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <!-- Body -->
                        <div class="flex-grow flex flex-col p-4 md:p-6 gap-4 relative">
                            <!-- Left: 3D Simulator -->
                            <div class="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-purple-950 p-2 md:p-6 rounded-[32px] shadow-2xl border-4 border-purple-200 relative">
                                <div class="absolute top-4 left-4 inline-block bg-sky-500/20 border border-sky-400/50 text-sky-300 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-sm z-10 w-auto">Mô phỏng 3D Tương tác</div>
                                <!-- 3D SCENE -->
                                <div class="flex-grow flex items-center justify-center w-full relative perspective-[1500px]" id="scene-124">
                                    <div id="cube-wrapper-124" class="relative transform-style-3d transition-transform duration-[0.1s] ease-out cursor-grab active:cursor-grabbing scale-90 md:scale-100" style="width: 240px; height: 240px; transform: rotateX(-20deg) rotateY(-30deg);">
                                        <!-- Container for mini blocks -->
                                        <div id="cube-layers-124" class="absolute left-[50%] top-[50%] transform-style-3d"></div>

                                        <!-- The Container Box (3x3x3 blocks of 80px) -->
                                        <div class="absolute inset-0 transform-style-3d pointer-events-none">
                                            <!-- Outside Faces - centered relative to 240x240 container -> center is at (120, 120) -->
                                            <!-- Back -->
                                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(180deg) translateZ(120px);"></div>
                                            <!-- Left -->
                                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(-90deg) translateZ(120px);"></div>
                                            <!-- Bottom -->
                                            <div class="absolute border-2 border-purple-400/60 bg-purple-500/10 grid-bg-124" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateX(-90deg) translateZ(120px);"></div>
                                            <!-- Top (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] bg-sky-300/10 grid-bg-124" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateX(90deg) translateZ(120px);"></div>
                                            <!-- Right (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-124 flex items-end justify-center pb-2" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: rotateY(90deg) translateZ(120px);">
                                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md text-sm">Rộng: 3 cm</div>
                                            </div>
                                            <!-- Front (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-124 flex items-center justify-center flex-col justify-end pb-4 gap-2" style="width: 240px; height: 240px; left: 50%; top: 50%; margin-left: -120px; margin-top: -120px; transform: translateZ(120px);">
                                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md translate-y-[120px] absolute text-sm">Dài: 3 cm</div>
                                                <div class="bg-purple-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md -translate-x-[150px] absolute text-sm">Cao: 3 cm</div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Footer Controls -->
                            <div class="flex flex-wrap items-center justify-center gap-4 z-10 w-full mb-2 shrink-0">
                                <button onclick="window.fillKhamPha124()" id="btn-fill-124" class="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all flex items-center gap-3">
                                    🧊 Bấm lần 1: Xếp 1 hình
                                </button>
                                <button onclick="window.resetKhamPha124()" class="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all">
                                    ↺ Đặt lại
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <style>
                    /* Grid lines for box faces */
                    .grid-bg-124 {
                        background-size: 80px 80px;
                        background-image: 
                            linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px);
                    }
                    .transform-style-3d {
                        transform-style: preserve-3d;
                    }
                    
                    /* Mini Blocks */
                    .minicube-124 {
                        position: absolute;
                        width: 80px; height: 80px;
                        margin-left: -40px; margin-top: -40px;
                        transform-style: preserve-3d;
                    }
                    .minicube-124 .face {
                        position: absolute; width: 80px; height: 80px;
                        border: 1px solid rgba(251, 191, 36, 0.9);
                        background: rgba(253, 230, 138, 0.95); /* amber-200 */
                        box-shadow: inset 0 0 16px rgba(251, 191, 36, 0.5);
                    }
                    .minicube-124 .face.top { transform: translateY(-40px) rotateX(90deg); background: #fef3c7; }
                    .minicube-124 .face.bottom { transform: translateY(40px) rotateX(-90deg); background: #f59e0b; }
                    .minicube-124 .face.front { transform: translateZ(40px); }
                    .minicube-124 .face.back { transform: translateZ(-40px) rotateY(180deg); background: #d97706; }
                    .minicube-124 .face.right { transform: translateX(40px) rotateY(90deg); background: #fcd34d; }
                    .minicube-124 .face.left { transform: translateX(-40px) rotateY(-90deg); background: #fbbf24; }

                    .rotate-anim-124 {
                        animation: spinBox124 15s linear infinite;
                    }
                    @keyframes spinBox124 {
                        0% { transform: rotateX(-20deg) rotateY(-30deg); }
                        100% { transform: rotateX(-20deg) rotateY(330deg); }
                    }
                </style>

                <script>
                    (function() {
                    let isDragging124 = false;
                    let startX124, startY124;
                    let currentRotX124 = -20;
                    let currentRotY124 = -30;
                    let dragInit124 = false;

                    window.openKhamPhaModal124 = function() {
                        const modal = document.getElementById('modal-124-khampha');
                        modal.classList.remove('hidden');
                        modal.classList.add('flex');
                        setTimeout(() => {
                            modal.classList.remove('opacity-0');
                        }, 10);

                        if (!dragInit124) {
                            const scene124 = document.getElementById('scene-124');
                            const wrapper124 = document.getElementById('cube-wrapper-124');
                            
                            if (scene124 && wrapper124) {
                                function handleDragStart(e) {
                                    if (wrapper124.classList.contains('rotate-anim-124')) return;
                                    isDragging124 = true;
                                    wrapper124.classList.replace('cursor-grab', 'cursor-grabbing');
                                    
                                    if (e.type === 'touchstart') {
                                        startX124 = e.touches[0].clientX;
                                        startY124 = e.touches[0].clientY;
                                    } else {
                                        startX124 = e.clientX;
                                        startY124 = e.clientY;
                                    }
                                }

                                function handleDragMove(e) {
                                    if (!isDragging124) return;
                                    e.preventDefault();

                                    let currentX, currentY;
                                    if (e.type === 'touchmove') {
                                        currentX = e.touches[0].clientX;
                                        currentY = e.touches[0].clientY;
                                    } else {
                                        currentX = e.clientX;
                                        currentY = e.clientY;
                                    }

                                    const deltaX = currentX - startX124;
                                    const deltaY = currentY - startY124;

                                    const sensitivity = 0.5;
                                    currentRotY124 += deltaX * sensitivity;
                                    currentRotX124 -= deltaY * sensitivity;

                                    currentRotX124 = Math.max(-80, Math.min(80, currentRotX124));
                                    wrapper124.style.transform = 'rotateX(' + currentRotX124 + 'deg) rotateY(' + currentRotY124 + 'deg)';

                                    startX124 = currentX;
                                    startY124 = currentY;
                                }

                                function handleDragEnd() {
                                    if (!isDragging124) return;
                                    isDragging124 = false;
                                    wrapper124.classList.replace('cursor-grabbing', 'cursor-grab');
                                }

                                scene124.addEventListener('mousedown', handleDragStart);
                                document.addEventListener('mousemove', handleDragMove);
                                document.addEventListener('mouseup', handleDragEnd);

                                scene124.addEventListener('touchstart', handleDragStart, {passive: false});
                                document.addEventListener('touchmove', handleDragMove, {passive: false});
                                document.addEventListener('touchend', handleDragEnd);
                                
                                dragInit124 = true;
                            }
                        }
                    };

                    window.closeKhamPhaModal124 = function() {
                        const modal = document.getElementById('modal-124-khampha');
                        modal.classList.add('opacity-0');
                        setTimeout(() => {
                            modal.classList.add('hidden');
                            modal.classList.remove('flex');
                            window.resetKhamPha124(); // reset on close
                        }, 300);
                    };

                    window.animKhamPha124 = function() {
                        const wrapper = document.getElementById('cube-wrapper-124');
                        wrapper.classList.toggle('rotate-anim-124');
                    };

                    window.fillKhamPha124 = function() {
                        const container = document.getElementById('cube-layers-124');
                        const btn = document.getElementById('btn-fill-124');
                        
                        if (typeof window.fillStage124 === 'undefined') window.fillStage124 = 0;
                        if (typeof window.currentBlockIdx124 === 'undefined') window.currentBlockIdx124 = 0;
                        
                        // Total 4 stages:
                        // Stage 0: empty
                        // Stage 1: 1 block
                        // Stage 2: 8 blocks (1 layer minus 1 block)
                        // Stage 3: 9 blocks (second layer)
                        // Stage 4: 9 blocks (third layer) -> Total: 27
                        if (window.fillStage124 >= 4) return; // Already full

                        btn.disabled = true;
                        btn.classList.add('opacity-50', 'cursor-not-allowed');

                        let delay = 0;
                        const totalX = 3, totalY = 3, totalZ = 3;
                        const size = 80;

                        if (!window.blocksData124) {
                            window.blocksData124 = [];
                            for(let y = totalY-1; y >= 0; y--) {
                                for(let z = 0; z < totalZ; z++) {
                                    for(let x = 0; x < totalX; x++) {
                                        window.blocksData124.push({x, y, z});
                                    }
                                }
                            }
                        }

                        // Stacking 27 blocks: 1, 8, 9, 9
                        const stageCounts = [1, 8, 9, 9];
                        const blocksToStack = stageCounts[window.fillStage124];
                        let count = 0;

                        for(let i = 0; i < blocksToStack; i++) {
                            if (window.currentBlockIdx124 >= window.blocksData124.length) break;
                            const b = window.blocksData124[window.currentBlockIdx124++];
                            
                            // Center offset for 3x3x3 blocks calculation
                            const tx = -120 + (b.x * size) + (size/2);
                            const ty = -120 + (b.y * size) + (size/2);
                            const tz = -120 + (b.z * size) + (size/2);

                            const block = document.createElement('div');
                            block.className = 'minicube-124';
                            block.style.transform = \`translate3d(\${tx}px, \${ty}px, \${tz}px) scale(0)\`;
                            block.style.opacity = '0';
                            block.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

                            block.innerHTML = \`
                                <div class="face front"></div>
                                <div class="face back"></div>
                                <div class="face right"></div>
                                <div class="face left"></div>
                                <div class="face top"></div>
                                <div class="face bottom"></div>
                            \`;

                            container.appendChild(block);

                            setTimeout(() => {
                                block.style.transform = \`translate3d(\${tx}px, \${ty}px, \${tz}px) scale(1)\`;
                                block.style.opacity = '1';
                                if (window.Quiz && typeof window.Quiz.playSFX === 'function' && blocksToStack < 20) {
                                   window.Quiz.playSFX('pop', 0.2); 
                                }
                            }, delay);
                            
                            delay += (blocksToStack > 10) ? 20 : 100;
                            count++;
                        }

                        setTimeout(() => {
                            window.fillStage124++;
                            btn.disabled = false;
                            btn.classList.remove('opacity-50', 'cursor-not-allowed');
                            
                            if (window.fillStage124 === 1) btn.innerHTML = '🧊 Bấm lần 2: Đầy 1 lớp ngang';
                            else if (window.fillStage124 === 2) btn.innerHTML = '🧊 Bấm lần 3: Đầy lớp 2';
                            else if (window.fillStage124 === 3) btn.innerHTML = '🧊 Bấm lần 4: Đầy hộp !';
                            else {
                                btn.innerHTML = '✨ Đã đầy hộp (27 khối)';
                                btn.disabled = true;
                                btn.classList.add('opacity-50', 'bg-emerald-500');
                                btn.classList.remove('from-amber-400', 'to-orange-500', 'hover:from-amber-500', 'hover:to-orange-600');
                                // Không tự động xoay nữa để người dùng dùng chuột
                                // window.animKhamPha124();
                            }
                        }, delay + 300);
                    };

                    window.resetKhamPha124 = function() {
                        const container = document.getElementById('cube-layers-124');
                        if(container) container.innerHTML = '';
                        window.fillStage124 = 0;
                        window.currentBlockIdx124 = 0;
                        
                        const btn = document.getElementById('btn-fill-124');
                        if (btn) {
                            btn.disabled = false;
                            btn.innerHTML = '🧊 Bấm lần 1: Xếp 1 hình';
                            btn.classList.remove('opacity-50', 'cursor-not-allowed', 'bg-emerald-500');
                            btn.classList.add('from-amber-400', 'to-orange-500', 'hover:from-amber-500', 'hover:to-orange-600');
                        }
                        
                        const wrapper = document.getElementById('cube-wrapper-124');
                        if(wrapper) {
                            wrapper.classList.remove('rotate-anim-124');
                            currentRotX124 = -20;
                            currentRotY124 = -30;
                            wrapper.style.transform = \`rotateX(\${currentRotX124}deg) rotateY(\${currentRotY124}deg)\`;
                        }
                    };
                    })();
                </script>

            <!-- Công thức Ghi nhớ -->
            <div class="bg-gradient-to-r from-pink-500 to-rose-600 p-8 md:p-12 rounded-[48px] text-white shadow-2xl relative overflow-hidden group">
                <div class="flex flex-col lg:flex-row items-center gap-10">
                   <div class="w-full lg:w-1/2 flex justify-center">
                       <img src="hinh_anh/toan/toan_tap_2/124-formula.png" alt="Công thức" class="w-full h-auto rounded-3xl border-4 border-pink-400/50 shadow-2xl group-hover:rotate-1 transition-transform">
                   </div>
                   <div class="w-full lg:w-1/2 text-center lg:text-left space-y-4">
                        <p class="text-sm font-black uppercase tracking-[0.3em] opacity-80 bg-white/20 inline-block px-4 py-1 rounded-full">Ghi nhớ quan trọng</p>
                        <p class="text-3xl md:text-5xl font-black drop-shadow-lg tracking-tight">V = a &times; a &times; a</p>
                        <p class="text-2xl md:text-4xl italic font-bold opacity-90">(Trong đó <span class="text-yellow-300">a</span> là độ dài của một cạnh)</p>
                   </div>
                </div>
                <div class="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            </div>
        </div>
    `,
    practice: `
        <div class="space-y-12 animate-fade-in pb-10">
            <!-- Bài tập 1: Bảng tính -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-teal-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-124-1">
                <div class="p-8 md:p-12 bg-teal-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-10">
                        <div class="w-12 h-12 bg-teal-600 text-white rounded-2xl flex items-center justify-center text-xl font-black shrink-0">1</div>
                        <h3 class="text-2xl md:text-4xl font-bold text-teal-800 dark:text-teal-100 leading-tight">Hoàn thành bảng tính thể tích cho các hình lập phương dưới đây:</h3>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full border-separate border-spacing-4">
                            <thead>
                                <tr class="text-lg md:text-2xl font-black text-teal-900 uppercase">
                                    <th class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm text-left">Đại lượng</th>
                                    <th class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (1)</th>
                                    <th class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (2)</th>
                                    <th class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-sm">Hình (3)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="text-center">
                                    <td class="p-8 bg-teal-100 dark:bg-teal-900/40 rounded-3xl font-black text-xl md:text-2xl text-teal-900">Cạnh (a)</td>
                                    <td class="p-8 bg-white dark:bg-slate-800 rounded-3xl font-black text-2xl md:text-4xl text-rose-500">10 cm</td>
                                    <td class="p-8 bg-white dark:bg-slate-800 rounded-3xl font-black text-2xl md:text-4xl text-rose-500">2,5 dm</td>
                                    <td class="p-8 bg-white dark:bg-slate-800 rounded-3xl font-black text-2xl md:text-4xl text-rose-500">0,4 m</td>
                                </tr>
                                <tr class="text-center">
                                    <td class="p-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-3xl font-bold text-xl md:text-2xl text-emerald-900 uppercase">Thể tích (V)</td>
                                    <td class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-4 border-teal-200">
                                        <input type="number" id="ans-124-1a" class="w-full text-3xl md:text-5xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?">
                                    </td>
                                    <td class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-4 border-teal-200">
                                        <input type="number" step="0.001" id="ans-124-1b" class="w-full text-3xl md:text-5xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?">
                                    </td>
                                    <td class="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border-4 border-teal-200">
                                        <input type="number" step="0.001" id="ans-124-1c" class="w-full text-3xl md:text-5xl font-black text-teal-600 bg-transparent text-center outline-none" placeholder="?">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2: Bánh bông lan -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-orange-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-124-2">
                <div class="p-8 md:p-12 bg-orange-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-8">
                        <div class="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">2</div>
                        <h3 class="text-3xl md:text-5xl font-black text-orange-900 dark:text-orange-100 leading-tight">Bài toán về bánh bông lan</h3>
                    </div>

                    <!-- Đề bài 1 bên + Dữ kiện 1 bên -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                        <!-- Đề bài bên trái -->
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-orange-100 shadow-sm">
                            <p class="text-2xl md:text-3xl font-bold text-orange-900 dark:text-orange-100 leading-relaxed">
                                Một chiếc bánh bông lan hình hộp chữ nhật có đáy là <b class="text-orange-600">hình vuông cạnh 12 cm</b>, chiều cao <b class="text-orange-600">6 cm</b>.
                            </p>
                            <div class="mt-6 space-y-4">
                                <p class="text-xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                    <span class="text-orange-600 font-black">a)</span> Tính thể tích của chiếc bánh đó.
                                </p>
                                <p class="text-xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 leading-relaxed">
                                    <span class="text-orange-600 font-black">b)</span> Rô-bốt đã cắt một miếng bánh <b class="text-orange-600">hình lập phương cạnh 6 cm</b> của chiếc bánh đó để mời Mi. Tính thể tích phần bánh còn lại.
                                </p>
                            </div>
                        </div>

                        <!-- Hình minh họa bên phải -->
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-orange-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/124-b2-cake.png" alt="Bánh bông lan" class="w-full h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- Khu vực bài làm -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] border-2 border-orange-200 shadow-sm">
                        <p class="text-lg md:text-2xl font-black text-orange-600 uppercase tracking-widest mb-4">📝 Bài làm</p>
                        <textarea id="ans-124-2" rows="5" class="w-full p-6 rounded-2xl border-2 border-orange-200 bg-orange-50/50 dark:bg-slate-900 outline-none focus:border-orange-500 text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-100 placeholder:text-gray-300 transition-all resize-none shadow-inner leading-relaxed" placeholder="Bài giải:&#10;a) Thể tích chiếc bánh: V = 12 × 12 × 6 = ...&#10;b) Thể tích miếng cắt: V = 6 × 6 × 6 = ...&#10;   Thể tích phần còn lại: ...&#10;Đáp số: a) ... cm³   b) ... cm³"></textarea>
                        <div class="mt-4 flex items-center gap-4">
                            <button onclick="Lesson.submitWordProblemAI('124-2')" class="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-black text-xl rounded-2xl shadow-lg transition-all active:scale-95 flex items-center gap-3">Kiểm tra <svg class='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M5 13l4 4L19 7'></path></svg></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3: Chọn câu trả lời đúng -->
            <div class="bg-white p-3 rounded-[48px] shadow-xl border border-rose-50 dark:bg-slate-800 dark:border-slate-700 overflow-hidden" id="ex-124-3">
                <div class="p-8 md:p-12 bg-rose-50 dark:bg-slate-900 rounded-[40px]">
                    <div class="flex items-start gap-5 mb-6">
                        <div class="w-14 h-14 bg-rose-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shrink-0">3</div>
                        <h3 class="text-3xl md:text-5xl font-black text-rose-900 dark:text-rose-100 leading-tight">Chọn câu trả lời đúng.</h3>
                    </div>

                    <!-- Đề bài bên trái + Hình bên phải -->
                    <div class="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                        <div class="w-full lg:w-1/2 bg-white dark:bg-slate-800 p-8 rounded-[32px] border border-rose-100 shadow-sm">
                            <p class="text-3xl md:text-5xl font-black text-rose-900 dark:text-rose-100 leading-relaxed">
                                Mai và Rô-bốt xếp được hai hình từ các hình lập phương nhỏ như hình sau.
                            </p>
                        </div>
                        <div class="w-full lg:w-1/2 p-6 bg-white dark:bg-slate-800 rounded-[32px] border border-rose-100 shadow-md flex items-center justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/124-b3-mairobot.png" alt="Hình của Mai và Rô-bốt" class="w-full h-auto rounded-2xl">
                        </div>
                    </div>

                    <!-- Câu a -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-rose-100 mb-6">
                        <p class="text-xl md:text-3xl font-black text-rose-600 mb-6"><span class="text-rose-800">a)</span> Mai cần bỏ đi bao nhiêu hình lập phương nhỏ để nhận được hình như của Rô-bốt?</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button onclick="lesson124.selectMCQ('124-3a', 'A')" id="btn-124-3a-A" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">A. 12 hình</button>
                            <button onclick="lesson124.selectMCQ('124-3a', 'B')" id="btn-124-3a-B" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">B. 10 hình</button>
                            <button onclick="lesson124.selectMCQ('124-3a', 'C')" id="btn-124-3a-C" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">C. 8 hình</button>
                            <button onclick="lesson124.selectMCQ('124-3a', 'D')" id="btn-124-3a-D" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">D. 6 hình</button>
                        </div>
                    </div>

                    <!-- Câu b -->
                    <div class="bg-white dark:bg-slate-800 p-8 rounded-[32px] shadow-sm border border-rose-100 mb-6">
                        <p class="text-xl md:text-3xl font-black text-rose-600 mb-6"><span class="text-rose-800">b)</span> Nếu mỗi hình lập phương nhỏ có cạnh <b class="text-rose-800">2 cm</b> thì thể tích hình của Rô-bốt là bao nhiêu xăng-ti-mét khối?</p>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <button onclick="lesson124.selectMCQ('124-3b', 'A')" id="btn-124-3b-A" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">A. 96 cm³</button>
                            <button onclick="lesson124.selectMCQ('124-3b', 'B')" id="btn-124-3b-B" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">B. 72 cm³</button>
                            <button onclick="lesson124.selectMCQ('124-3b', 'C')" id="btn-124-3b-C" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">C. 64 cm³</button>
                            <button onclick="lesson124.selectMCQ('124-3b', 'D')" id="btn-124-3b-D" class="mcq-btn p-5 bg-rose-50 border-2 border-rose-100 rounded-2xl font-black text-2xl text-gray-400 hover:border-rose-400 transition-all">D. 32 cm³</button>
                        </div>
                    </div>

                    <div id="feedback-124-3" class="text-center text-xl md:text-2xl font-black opacity-0 transition-opacity p-6 rounded-3xl"></div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 flex justify-center">
                <button onclick="window.submitMathLesson('Hoàn thành Bài Thể tích hình lập phương', 100)" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-2xl font-black text-xl uppercase tracking-widest shadow-xl transition-all active:scale-95 flex items-center gap-3">
                    NỘP BÀI <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                </button>
            </div>
        </div>
    `,
    quizPool: [
        // Level 1 - Cơ bản
        { "question": "Công thức tính thể tích hình lập phương là:", "options": ["V = a × a", "V = a × a × a", "V = a × a × 6", "V = a × 4"], "answer": 1, "level": 1 },
        { "question": "Thể tích hình lập phương có cạnh 3 cm là:", "options": ["9 cm³", "18 cm³", "27 cm³", "54 cm³"], "answer": 2, "level": 1 },
        { "question": "Thể tích hình lập phương có cạnh 5 cm là:", "options": ["15 cm³", "25 cm³", "125 cm³", "50 cm³"], "answer": 2, "level": 1 },
        { "question": "Muốn tính thể tích hình lập phương, ta lấy:", "options": ["Cạnh × cạnh", "Cạnh × cạnh × 6", "Cạnh × cạnh × cạnh", "Cạnh × cạnh × 4"], "answer": 2, "level": 1 },
        { "question": "Hình lập phương có cạnh 10 cm. Thể tích là:", "options": ["100 cm³", "600 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 1 },
        // Level 2 - Nâng cao
        { "question": "Hình lập phương có thể tích 64 cm³. Cạnh của nó là:", "options": ["2 cm", "4 cm", "8 cm", "16 cm"], "answer": 1, "level": 2 },
        { "question": "Bánh bông lan hình hộp chữ nhật đáy vuông cạnh 12 cm, cao 6 cm. Thể tích bánh là:", "options": ["72 cm³", "432 cm³", "864 cm³", "1728 cm³"], "answer": 2, "level": 2 },
        { "question": "Cắt miếng bánh hình lập phương cạnh 6 cm từ chiếc bánh 864 cm³. Phần còn lại là:", "options": ["216 cm³", "432 cm³", "648 cm³", "828 cm³"], "answer": 2, "level": 2 },
        { "question": "Hình lập phương cạnh 2 cm có thể tích bao nhiêu?", "options": ["4 cm³", "6 cm³", "8 cm³", "12 cm³"], "answer": 2, "level": 2 },
        { "question": "Xếp 8 hình lập phương nhỏ cạnh 2 cm. Tổng thể tích là:", "options": ["16 cm³", "32 cm³", "48 cm³", "64 cm³"], "answer": 3, "level": 2 },
        // Level 3 - Thử thách
        { "question": "Nếu tăng cạnh hình lập phương lên gấp đôi, thể tích thay đổi thế nào?", "options": ["Gấp 2 lần", "Gấp 4 lần", "Gấp 6 lần", "Gấp 8 lần"], "answer": 3, "level": 3 },
        { "question": "Một khối rubik gồm 27 khối lập phương nhỏ cạnh 1 cm. Cạnh khối rubik là:", "options": ["3 cm", "9 cm", "27 cm", "6 cm"], "answer": 0, "level": 3 },
        { "question": "Hình lập phương cạnh 1 dm đổi sang cm³ là:", "options": ["10 cm³", "100 cm³", "1000 cm³", "10000 cm³"], "answer": 2, "level": 3 },
        { "question": "Hộp hình lập phương cạnh 8 cm. Xếp được tối đa bao nhiêu khối LP cạnh 2 cm vào hộp?", "options": ["8 khối", "16 khối", "32 khối", "64 khối"], "answer": 3, "level": 3 },
        { "question": "Diện tích toàn phần hình LP cạnh 5 cm là 150 cm². Thể tích của nó là:", "options": ["25 cm³", "75 cm³", "125 cm³", "150 cm³"], "answer": 2, "level": 3 }
    ],
    // Logic cho MCQ 
    selectMCQ(exId, option) {
        // Get all buttons in the same group
        const allBtns = document.querySelectorAll(`[id^="btn-${exId}-"]`);
        allBtns.forEach(btn => {
            btn.classList.remove('bg-rose-600', 'text-white', 'border-transparent');
            btn.classList.add('bg-rose-50', 'text-gray-400', 'border-rose-100');
        });

        const selectedBtn = document.getElementById(`btn-${exId}-${option}`);
        selectedBtn.classList.remove('bg-rose-50', 'text-gray-400', 'border-rose-100');
        selectedBtn.classList.add('bg-rose-600', 'text-white', 'border-transparent');

        // Track state
        if (!window.lesson124State) window.lesson124State = { a: null, b: null };
        if (exId === '124-3a') window.lesson124State.a = option;
        if (exId === '124-3b') window.lesson124State.b = option;

        const feedback = document.getElementById('feedback-124-3');
        if (window.lesson124State.a && window.lesson124State.b) {
            feedback.classList.remove('opacity-0', 'text-emerald-500', 'text-red-500', 'bg-emerald-50', 'bg-red-50');
            // Đáp án đúng: a) B (10 hình), b) C (64 cm³)
            if (window.lesson124State.a === 'B' && window.lesson124State.b === 'C') {
                feedback.innerText = "Chính xác cả hai câu! 🎉 Mai cần bỏ 10 hình. Rô-bốt gồm 8 hình LP nhỏ → V = 8 × (2×2×2) = 64 cm³.";
                feedback.classList.add('text-emerald-500', 'bg-emerald-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('correct');
            } else {
                feedback.innerText = "Có câu chưa đúng rồi. Hãy đếm kỹ số hình lập phương trong mỗi hình nhé!";
                feedback.classList.add('text-red-500', 'bg-red-50');
                if (window.Quiz && typeof window.Quiz.playSFX === 'function') window.Quiz.playSFX('wrong');
            }
            feedback.classList.add('opacity-100');
        }
    }
};

window.lesson124 = lesson124;

