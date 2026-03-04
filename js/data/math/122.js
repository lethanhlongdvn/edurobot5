export const lesson122 = {
    "topic": "Hình học và Đo lường",
    "week": "25",
    "period": "122",
    "title": "THỂ TÍCH CỦA HÌNH HỘP CHỮ NHẬT",
    "desc": "Bài 52: Cách tính thể tích hình hộp chữ nhật bằng công thức V = a × b × c (Tiết 1 - Trang 51-52).",
    "content": `
        <div class="space-y-6 text-indigo-900 animate-fade-in">
            <!-- 🎯 Mục tiêu bài học -->
            <div class="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 rounded-[40px] text-white shadow-2xl flex items-center gap-8 relative overflow-hidden group">
                <div class="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-all"></div>
                <div class="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shrink-0 text-5xl shadow-lg">🎯</div>
                <div>
                    <h3 class="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2">Mục tiêu bài học</h3>
                    <ul class="list-disc list-inside font-bold text-lg md:text-2xl opacity-95 space-y-1">
                        <li>Biết quy tắc và công thức tính thể tích hình hộp chữ nhật.</li>
                        <li>Vận dụng giải quyết các vấn đề thực tế liên quan đến thể tích.</li>
                    </ul>
                </div>
            </div>

            <!-- 📖 Khám phá -->
            <div class="bg-white p-8 rounded-[40px] border border-indigo-100 shadow-2xl overflow-hidden relative">
                <div class="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-bl-full -z-0 opacity-40"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <span class="bg-amber-500 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl shadow-lg">?</span>
                            <h4 class="text-3xl md:text-4xl font-black text-amber-700 uppercase">Tìm hiểu về thể tích</h4>
                        </div>
                        <p class="text-xl md:text-2xl font-bold leading-tight text-gray-700 italic border-l-8 border-amber-400 pl-4 bg-amber-50 py-4 rounded-r-2xl">
                            "Để biết chiếc hộp chứa được bao nhiêu khối lập phương 1dm³, ta có thể xếp chúng vào hộp và đếm."
                        </p>
                        <div class="bg-indigo-50 p-6 rounded-3xl border-2 border-indigo-100">
                            <p class="text-xl md:text-2xl font-black text-indigo-900 space-y-2">
                                <span class="block">📏 Chiều dài: 6 dm</span>
                                <span class="block">📏 Chiều rộng: 5 dm</span>
                                <span class="block">📏 Chiều cao: 4 dm</span>
                                <span class="block mt-4 text-2xl text-indigo-600">6 &times; 5 &times; 4 = 120 (khối)</span>
                            </p>
                        </div>
                    </div>
                        <div class="relative group cursor-pointer inline-block">
                            <!-- Image with openZoom -->
                            <img src="hinh_anh/toan/toan_tap_2/122-khampha.png" alt="Khám phá" class="w-full max-w-[600px] h-auto rounded-[40px] shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-transform" onclick="Lesson.openZoom(this.src)">
                            
                            <!-- Overlay Action Buttons -->
                            <div class="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button onclick="Lesson.openZoom('hinh_anh/toan/toan_tap_2/122-khampha.png'); event.stopPropagation();" class="w-12 h-12 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-black shadow-2xl flex items-center justify-center transform active:scale-95 transition-all outline-none" title="Phóng to ảnh">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                                <button onclick="window.openKhamPhaModal(); event.stopPropagation();" class="w-12 h-12 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-black shadow-2xl flex items-center justify-center transform active:scale-95 transition-all outline-none text-lg" title="Mô phỏng 3D">
                                    3D
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 💥 MODAL 3D FULLSCREEN 💥 -->
                <div id="modal-122-khampha" class="fixed inset-0 z-[9999] bg-slate-900/95 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300 backdrop-blur-md" onclick="window.closeKhamPhaModal()">
                    <div class="bg-indigo-50 w-[96%] h-[92%] max-w-[1400px] rounded-[40px] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col" onclick="event.stopPropagation()">
                        <!-- Header -->
                        <div class="bg-indigo-600 bg-gradient-to-r from-indigo-700 to-blue-600 text-white p-5 flex justify-between items-center shrink-0 shadow-lg z-20 relative">
                            <h3 class="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-4">
                                <span class="bg-white/20 p-2 rounded-2xl">🧊</span> Khám phá thể tích 3D
                            </h3>
                            <button onclick="window.closeKhamPhaModal()" class="w-14 h-14 bg-white/20 hover:bg-rose-500 rounded-full flex items-center justify-center transition-all shadow-md active:scale-90">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <!-- Body -->
                        <div class="flex-grow flex flex-col p-6 gap-6 overflow-hidden relative">
                            <!-- Left: 3D Simulator -->
                            <div class="flex-1 flex flex-col items-center justify-between gap-6 bg-gradient-to-br from-slate-800 to-indigo-950 p-6 rounded-[32px] shadow-2xl border-4 border-indigo-200 overflow-hidden relative">
                                <div class="absolute top-4 left-4 inline-block bg-sky-500/20 border border-sky-400/50 text-sky-300 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-sm z-10 w-auto">Mô phỏng 3D Tương tác</div>
                                <!-- 3D SCENE -->
                                <div class="flex-grow flex items-center justify-center w-full relative perspective-[1500px]" id="scene-122">
                                    <div id="cube-wrapper-122" class="relative transform-style-3d transition-transform duration-[0.1s] ease-out cursor-grab active:cursor-grabbing" style="width: 300px; height: 200px; transform: rotateX(-20deg) rotateY(-30deg);">
                                        <!-- Container for mini blocks -->
                                        <div id="cube-layers-122" class="absolute left-[50%] top-[50%] transform-style-3d"></div>

                                        <!-- The Container Box -->
                                        <div class="absolute inset-0 transform-style-3d pointer-events-none">
                                            <!-- Outside Faces - centered relative to 300x200 container -> center is at (150, 100) -->
                                            <!-- Back -->
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 300px; height: 200px; left: 50%; top: 50%; margin-left: -150px; margin-top: -100px; transform: rotateY(180deg) translateZ(125px);"></div>
                                            <!-- Left -->
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 250px; height: 200px; left: 50%; top: 50%; margin-left: -125px; margin-top: -100px; transform: rotateY(-90deg) translateZ(150px);"></div>
                                            <!-- Bottom -->
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 300px; height: 250px; left: 50%; top: 50%; margin-left: -150px; margin-top: -125px; transform: rotateX(-90deg) translateZ(100px);"></div>
                                            <!-- Top (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] bg-sky-300/10 grid-bg-122" style="width: 300px; height: 250px; left: 50%; top: 50%; margin-left: -150px; margin-top: -125px; transform: rotateX(90deg) translateZ(100px);"></div>
                                            <!-- Right (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-122 flex items-end justify-center pb-2" style="width: 250px; height: 200px; left: 50%; top: 50%; margin-left: -125px; margin-top: -100px; transform: rotateY(90deg) translateZ(150px);">
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md text-sm">Rộng: 5 dm</div>
                                            </div>
                                            <!-- Front (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-122 flex items-center justify-center flex-col justify-end pb-4 gap-2" style="width: 300px; height: 200px; left: 50%; top: 50%; margin-left: -150px; margin-top: -100px; transform: translateZ(125px);">
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md translate-y-[100px] absolute text-sm">Dài: 6 dm</div>
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md -translate-x-[180px] absolute text-sm">Cao: 4 dm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Controls -->
                                <div class="flex flex-wrap items-center justify-center gap-3 z-10 w-full mb-4">

                                    <button onclick="window.fillKhamPha122()" id="btn-fill-122" class="px-4 py-2 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-xl font-bold text-sm md:text-base shadow-md active:scale-95 transition-all flex items-center gap-2">
                                        🧊 Bấm lần 1: Xếp 1 hình
                                    </button>
                                    <button onclick="window.resetKhamPha122()" class="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-xl font-bold text-sm md:text-base shadow-md active:scale-95 transition-all">
                                        ↺ Đặt lại
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>
                    /* Grid lines for box faces */
                    .grid-bg-122 {
                        background-size: 50px 50px;
                        background-image: 
                            linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px);
                    }
                    .transform-style-3d {
                        transform-style: preserve-3d;
                    }
                    
                    /* Mini Blocks */
                    .minicube-122 {
                        position: absolute;
                        width: 50px; height: 50px;
                        margin-left: -25px; margin-top: -25px;
                        transform-style: preserve-3d;
                    }
                    .minicube-122 .face {
                        position: absolute; width: 50px; height: 50px;
                        border: 1px solid rgba(251, 191, 36, 0.9);
                        background: rgba(253, 230, 138, 0.95); /* amber-200 */
                        box-shadow: inset 0 0 10px rgba(251, 191, 36, 0.5);
                    }
                    .minicube-122 .face.top { transform: translateY(-25px) rotateX(90deg); background: #fef3c7; }
                    .minicube-122 .face.front { transform: translateZ(25px); }
                    .minicube-122 .face.right { transform: translateX(25px) rotateY(90deg); background: #fcd34d; }

                    
                    /* Animation class */
                    .rotate-anim-122 {
                        animation: spinBox122 15s linear infinite;
                    }
                    @keyframes spinBox122 {
                        0% { transform: rotateX(-20deg) rotateY(-30deg); }
                        100% { transform: rotateX(-20deg) rotateY(330deg); }
                    }
                </style>

                <script>
                    (function() {
                    let isDragging122 = false;
                    let startX122, startY122;
                    let currentRotX = -20;
                    let currentRotY = -30;
                    let dragInit = false;

                    window.openKhamPhaModal = function() {
                        const modal = document.getElementById('modal-122-khampha');
                        modal.classList.remove('hidden');
                        modal.classList.add('flex');
                        setTimeout(() => {
                            modal.classList.remove('opacity-0');
                        }, 10);

                        if (!dragInit) {
                            const scene122 = document.getElementById('scene-122');
                            const wrapper122 = document.getElementById('cube-wrapper-122');
                            
                            if (scene122 && wrapper122) {
                                function handleDragStart(e) {
                                    if (wrapper122.classList.contains('rotate-anim-122')) return;
                                    isDragging122 = true;
                                    wrapper122.classList.replace('cursor-grab', 'cursor-grabbing');
                                    
                                    if (e.type === 'touchstart') {
                                        startX122 = e.touches[0].clientX;
                                        startY122 = e.touches[0].clientY;
                                    } else {
                                        startX122 = e.clientX;
                                        startY122 = e.clientY;
                                    }
                                }

                                function handleDragMove(e) {
                                    if (!isDragging122) return;
                                    e.preventDefault();

                                    let currentX, currentY;
                                    if (e.type === 'touchmove') {
                                        currentX = e.touches[0].clientX;
                                        currentY = e.touches[0].clientY;
                                    } else {
                                        currentX = e.clientX;
                                        currentY = e.clientY;
                                    }

                                    const deltaX = currentX - startX122;
                                    const deltaY = currentY - startY122;

                                    const sensitivity = 0.5;
                                    currentRotY += deltaX * sensitivity;
                                    currentRotX -= deltaY * sensitivity;

                                    currentRotX = Math.max(-80, Math.min(80, currentRotX));
                                    wrapper122.style.transform = 'rotateX(' + currentRotX + 'deg) rotateY(' + currentRotY + 'deg)';

                                    startX122 = currentX;
                                    startY122 = currentY;
                                }

                                function handleDragEnd() {
                                    if (!isDragging122) return;
                                    isDragging122 = false;
                                    wrapper122.classList.replace('cursor-grabbing', 'cursor-grab');
                                }

                                scene122.addEventListener('mousedown', handleDragStart);
                                document.addEventListener('mousemove', handleDragMove);
                                document.addEventListener('mouseup', handleDragEnd);

                                scene122.addEventListener('touchstart', handleDragStart, {passive: false});
                                document.addEventListener('touchmove', handleDragMove, {passive: false});
                                document.addEventListener('touchend', handleDragEnd);
                                
                                dragInit = true;
                            }
                        }
                    };

                    window.closeKhamPhaModal = function() {
                        const modal = document.getElementById('modal-122-khampha');
                        modal.classList.add('opacity-0');
                        setTimeout(() => {
                            modal.classList.add('hidden');
                            modal.classList.remove('flex');
                            window.resetKhamPha122(); // reset on close
                        }, 300);
                    };

                    window.animKhamPha122 = function() {
                        const wrapper = document.getElementById('cube-wrapper-122');
                        wrapper.classList.toggle('rotate-anim-122');
                    };

                    window.fillKhamPha122 = function() {
                        const container = document.getElementById('cube-layers-122');
                        const btn = document.getElementById('btn-fill-122');
                        
                        if (typeof window.fillStage122 === 'undefined') window.fillStage122 = 0;
                        if (typeof window.currentBlockIdx122 === 'undefined') window.currentBlockIdx122 = 0;
                        
                        if (window.fillStage122 >= 6) return; // Already full

                        btn.disabled = true;
                        btn.classList.add('opacity-50', 'cursor-not-allowed');

                        let delay = 0;
                        const totalX = 6, totalY = 4, totalZ = 5;
                        const size = 50;

                        if (!window.blocksData122) {
                            window.blocksData122 = [];
                            for(let y = totalY-1; y >= 0; y--) {
                                for(let z = 0; z < totalZ; z++) {
                                    for(let x = 0; x < totalX; x++) {
                                        window.blocksData122.push({x, y, z});
                                    }
                                }
                            }
                        }

                        const stageCounts = [1, 5, 24, 30, 30, 30];
                        const blocksToStack = stageCounts[window.fillStage122];
                        let count = 0;

                        for(let i = 0; i < blocksToStack; i++) {
                            if (window.currentBlockIdx122 >= window.blocksData122.length) break;
                            const b = window.blocksData122[window.currentBlockIdx122++];
                            const tx = -125 + (b.x * size);
                            const ty = -75 + (b.y * size);
                            const tz = -100 + (b.z * size);

                            const block = document.createElement('div');
                            block.className = 'minicube-122';
                            block.style.transform = \`translate3d(\${tx}px, \${ty}px, \${tz}px) scale(0)\`;
                            block.style.opacity = '0';
                            block.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

                            block.innerHTML = \`
                                <div class="face top"></div>
                                <div class="face front"></div>
                                <div class="face right"></div>
                            \`;

                            container.appendChild(block);

                            setTimeout(() => {
                                block.style.opacity = '1';
                                block.style.transform = \`translate3d(\${tx}px, \${ty}px, \${tz}px) scale(1)\`;
                                count++;
                                
                                if (count === blocksToStack) {
                                    window.fillStage122++;
                                    const stageBtnTexts = [
                                        "🧊 Bấm lần 2: Xếp 1 hàng",
                                        "🧊 Bấm lần 3: Xếp lớp 1",
                                        "🧊 Bấm lần 4: Xếp lớp 2",
                                        "🧊 Bấm lần 5: Xếp lớp 3",
                                        "🧊 Bấm lần 6: Xếp lớp 4",
                                        "✅ Đã lấp đầy"
                                    ];
                                    
                                    btn.innerHTML = stageBtnTexts[window.fillStage122 - 1];
                                    
                                    if (window.fillStage122 < 6) {
                                        btn.disabled = false;
                                        btn.classList.remove('opacity-50', 'cursor-not-allowed');
                                    } else {
                                        btn.classList.remove('opacity-50', 'cursor-not-allowed');
                                        btn.classList.replace('from-amber-400', 'from-emerald-500');
                                        btn.classList.replace('to-orange-500', 'to-emerald-600');
                                    }
                                }
                            }, delay);

                            delay += 30; // 30ms per block
                        }
                    };

                    window.resetKhamPha122 = function() {
                        const container = document.getElementById('cube-layers-122');
                        container.innerHTML = '';
                        const lastChild = container.lastElementChild;
                        if(lastChild && lastChild.innerHTML.includes('khối')) {
                            container.removeChild(lastChild);
                        }
                        const btn = document.getElementById('btn-fill-122');
                        btn.disabled = false;
                        btn.classList.remove('opacity-50', 'cursor-not-allowed');
                        window.fillStage122 = 0;
                        window.currentBlockIdx122 = 0;
                        btn.innerHTML = '🧊 Bấm lần 1: Xếp 1 hình';
                        btn.classList.replace('from-emerald-500', 'from-amber-400');
                        btn.classList.replace('to-emerald-600', 'to-orange-500');
                        
                        const wrapper = document.getElementById('cube-wrapper-122');
                        if (wrapper) {
                            wrapper.classList.remove('rotate-anim-122');
                            currentRotX = -20;
                            currentRotY = -30;
                            wrapper.style.transform = 'rotateX(' + currentRotX + 'deg) rotateY(' + currentRotY + 'deg)';
                        }
                    };
                    })();
                </script>
            </div>

            <!-- 🖍️ Công thức Ghi nhớ -->
            <div class="bg-rose-50 p-8 rounded-[48px] border-4 border-rose-200 shadow-xl relative overflow-hidden">
                <div class="absolute -left-10 -bottom-10 w-40 h-40 bg-rose-200/50 rounded-full blur-2xl"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div class="flex justify-center">
                        <img src="hinh_anh/toan/toan_tap_2/122-formula.png" alt="Công thức" class="w-full max-w-[400px] h-auto rounded-3xl shadow-xl">
                    </div>
                    <div class="bg-white p-8 rounded-[40px] shadow-inner border-2 border-rose-100">
                        <h4 class="text-xl font-black text-rose-600 uppercase mb-3 tracking-widest text-center">Quy tắc cần nhớ</h4>
                        <p class="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed text-center italic">
                            "Thể tích <span class="text-rose-600 font-black">V</span> của hình hộp chữ nhật bằng chiều dài <span class="text-rose-600 font-black italic text-3xl">a</span> nhân với chiều rộng <span class="text-rose-600 font-black italic text-3xl">b</span> rồi nhân với chiều cao <span class="text-rose-600 font-black italic text-3xl">c</span>."
                        </p>
                        <div class="mt-6 bg-rose-600 p-4 rounded-3xl text-white text-center shadow-lg">
                            <p class="text-3xl md:text-5xl font-black tracking-wide italic drop-shadow-md">V = a &times; b &times; c</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    "practice": `
        <div class="space-y-6 animate-fade-in">
            <!-- Bài tập 1 -->
            <div id="box-122-1" class="bg-white p-6 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div class="relative z-10 flex items-center mb-6 gap-4">
                    <span class="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-lg shadow-indigo-200">1</span>
                    <p class="font-black text-2xl md:text-3xl text-indigo-700">
                        Tính thể tích hình hộp chữ nhật có chiều dài 8 cm, chiều rộng 5 cm và chiều cao 6 cm.
                    </p>
                </div>
                
                <div class="max-w-4xl mx-auto space-y-4 bg-indigo-50/30 p-8 rounded-[48px] border-2 border-indigo-50">
                    <div class="w-full relative">
                        <textarea id="wp-full-122-1" rows="4" class="w-full p-6 pr-14 rounded-3xl border-2 border-indigo-100 focus:border-indigo-500 outline-none text-xl font-bold transition-all shadow-inner placeholder:text-indigo-200 resize-y bg-white leading-relaxed" placeholder="Viết bài giải của em vào đây..."></textarea>
                        <button onclick="Lesson.startDictation('wp-full-122-1')" class="absolute right-4 top-4 text-indigo-400 hover:text-indigo-600 transition-colors p-2 bg-indigo-50 rounded-xl" title="Nhập bằng giọng nói">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                    </div>
                    
                    <div class="pt-4 flex justify-end">
                        <button onclick="submitWordProblemAILocal('122-1')" class="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm lời giải">
                            E
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-122-2" class="bg-white p-6 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden group mt-8">
                <div class="relative z-10 flex items-center mb-6 gap-4">
                    <span class="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-200">2</span>
                    <p class="font-black text-2xl md:text-3xl text-emerald-700">
                        Bố của Mai vừa làm một bể cá dạng hình hộp chữ nhật với kích thước như hình bên. Tính thể tích của bể cá đó.
                    </p>
                </div>
                
                <div class="flex justify-center mb-8">
                    <img src="hinh_anh/toan/toan_tap_2/122-b2-beca.png" alt="Bể cá" class="w-full max-w-[400px] h-auto rounded-[32px] shadow-xl border-4 border-white transition-all hover:scale-105">
                </div>

                <div class="max-w-4xl mx-auto space-y-4 bg-emerald-50/30 p-8 rounded-[48px] border-2 border-emerald-50">
                    <div class="w-full relative">
                        <textarea id="wp-full-122-2" rows="4" class="w-full p-6 pr-14 rounded-3xl border-2 border-emerald-100 focus:border-emerald-500 outline-none text-xl font-bold transition-all shadow-inner placeholder:text-emerald-200 resize-y bg-white leading-relaxed" placeholder="Viết bài giải của em vào đây..."></textarea>
                        <button onclick="Lesson.startDictation('wp-full-122-2')" class="absolute right-4 top-4 text-emerald-400 hover:text-emerald-600 transition-colors p-2 bg-emerald-50 rounded-xl" title="Nhập bằng giọng nói">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                        </button>
                    </div>

                    <div class="pt-4 flex justify-end">
                        <button onclick="submitWordProblemAILocal('122-2')" class="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm lời giải">
                            E
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-122-3" class="bg-amber-50/50 p-6 rounded-[40px] border-2 border-dashed border-amber-200 shadow-xl relative overflow-hidden group mt-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <img src="hinh_anh/toan/toan_tap_2/122-b3-blocks.png" alt="Khối hình" class="w-full max-w-[450px] h-auto rounded-[32px] shadow-xl border-4 border-white mx-auto bg-white mb-6">
                    </div>
                    <div class="space-y-6">
                        <p class="text-2xl font-bold text-amber-900 leading-tight">
                            Để tạo ra hình bên, Việt ghép <b>6 hình hộp chữ nhật</b> giống nhau. Mỗi hình có kích thước: <b>10 cm, 5 cm và 2 cm</b>.
                        </p>

                        <!-- Area for word problem steps -->
                        <div class="space-y-4">
                            <div class="w-full relative">
                                <textarea id="wp-full-122-3" rows="6" class="w-full p-6 pr-14 rounded-3xl border-2 border-amber-100 focus:border-amber-500 outline-none text-xl font-bold transition-all shadow-inner placeholder:text-amber-200 resize-y bg-white leading-relaxed" placeholder="Viết bài giải của em vào đây..."></textarea>
                                <button onclick="Lesson.startDictation('wp-full-122-3')" class="absolute right-4 top-4 text-amber-400 hover:text-amber-600 transition-colors p-2 bg-amber-50 rounded-xl" title="Nhập bằng giọng nói">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                                </button>
                            </div>

                        </div>

                        <div class="pt-6 flex justify-end">
                            <button onclick="submitWordProblemAILocal('122-3')" class="w-14 h-14 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl font-black text-2xl transition-all shadow-lg active:scale-95 flex items-center justify-center shrink-0" title="Thầy E chấm lời giải">
                                E
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Nộp bài -->
            <div class="pt-8 border-t-4 border-dashed border-gray-100 flex flex-col items-center">
                <button id="btn-submit-122" onclick="submit122()" class="bg-indigo-600 hover:bg-indigo-700 text-white px-20 py-6 rounded-[32px] font-black text-3xl shadow-2xl active:scale-95 transition-all transform hover:-translate-y-2 uppercase tracking-widest">
                    Nộp bài cho Robot
                </button>
            </div>

            <script>
                window.submitWordProblemAILocal = function(id) {
                    const solution = document.getElementById('wp-full-' + id)?.value || '';

                    if (!solution.trim()) {
                        alert("Thầy E nhắc: Em chưa viết bài giải. Hãy viết lời giải, phép tính và đáp số đầy đủ nhé! ✏️");
                        return;
                    }

                    // Tùy chỉnh prompt tùy theo bài
                    let prompt = "";
                    if (id === '122-1') {
                        prompt = \`Đề bài: Tính thể tích hình hộp chữ nhật có chiều dài 8 cm, chiều rộng 5 cm và chiều cao 6 cm.\n\nBài giải của học sinh:\n\${solution}\`;
                    } else if (id === '122-2') {
                        prompt = \`Đề bài: Bố của Mai vừa làm một bể cá dạng hình hộp chữ nhật với kích thước chiều dài 10 dm, chiều rộng 6 dm, chiều cao 8 dm. Tính thể tích của bể cá đó.\n\nBài giải của học sinh:\n\${solution}\`;
                    } else if (id === '122-3') {
                        prompt = \`Đề bài: Để tạo ra khối hình chữ T ngược, Việt ghép 6 hình hộp chữ nhật giống nhau. Mỗi hình có kích thước: 10 cm, 5 cm và 2 cm.\n\nBài giải của học sinh:\n\${solution}\`;
                    }

                    const hiddenPrompt = \`\n\n[HƯỚNG DẪN DÀNH RIÊNG CHO AI]:
- NẾU HỌC SINH LÀM ĐÚNG (đáp số đúng, cách làm đúng): Khen ngợi và có thể nhắc lại ngắn gọn bước giải.
- ⛔ NẾU HỌC SINH LÀM SAI(tính sai, sai công thức, thiếu bước):
  + TUYỆT ĐỐI KHÔNG ĐƯỢC tính ra đáp số đúng hoặc tiết lộ kết quả cuối cùng.
  + CHỈ chỉ ra lỗi sai ở đâu(ví dụ: "Bạn tính nhầm phép nhân" hoặc "nhầm công thức").
  + Hướng dẫn bước tiếp theo để học sinh TỰ TÍNH LẠI. NHỚ RÕ: KHÔNG ĐƯỢC ĐƯA ĐÁP ÁN!\`;

                    // Hiển thị dạng Popup Modal ưu tiên
                    if (window.AIInteraction && typeof window.AIInteraction.gradeWithModal === 'function') {
                        window.AIInteraction.gradeWithModal("👨‍🏫 Thầy E Nhận Xét", prompt + hiddenPrompt);
                    } else if (window.AIInteraction && typeof window.AIInteraction.sendDirectMessage === 'function') {
                        window.AIInteraction.sendDirectMessage(prompt, hiddenPrompt);
                    } else {
                        // Fallback: nếu gọi bằng chat thông thường
                        const chatInput = document.getElementById('ai-chat-input');
                        if (chatInput) {
                            chatInput.value = prompt; // Chỉ hiện nội dung bài giải lên ô input
                            const chatWindow = document.getElementById('ai-chat-window');
                            if (chatWindow && chatWindow.classList.contains('hidden')) {
                                chatWindow.classList.remove('hidden');
                                chatWindow.classList.add('flex');
                            }
                            // Gắn lén propmt nếu có thể
                            window.tempHiddenAiContext = hiddenPrompt;
                            chatInput.focus();
                        }
                    }
                };

                window.submit122 = function() {
                    const a1 = document.getElementById('wp-full-122-1')?.value || '';
                    const a2 = document.getElementById('wp-full-122-2')?.value || '';
                    const a3 = document.getElementById('wp-full-122-3')?.value || '';

                    if (!a1.trim() || !a2.trim() || !a3.trim()) {
                        alert("Thầy E nhắc bạn: Hãy hoàn thành tất cả các bài tập để duyệt bài nhé! 🌟");
                        return;
                    }

                    if (window.submitMathLesson) {
                        window.submitMathLesson("Tiết 122: Đã nộp bài giải", "Đ", "btn-submit-122");
                    }
                    alert("Giỏi quá! Bạn đã nộp bài thành công! Thầy E sẽ chấm bài giải ở phần Chat nhé! 🌈");
                };
            </script>
        </div>
    `,
    "quizPool": [
        { "question": "Công thức tính thể tích của hình hộp chữ nhật có 3 kích thước a, b, c là:", "options": ["V = a + b + c", "V = a × b + c", "V = a × b × c", "V = a + b × c"], "answer": 2, "level": 1 },
        { "question": "Muốn tính thể tích hình hộp chữ nhật, ta lấy chiều dài nhân chiều rộng rồi nhân với:", "options": ["Chu vi đáy", "Diện tích đáy", "Chiều cao", "Chiều rộng"], "answer": 2, "level": 1 },
        { "question": "Đơn vị đo thể tích thường gặp là:", "options": ["cm<sup>2</sup>, dm<sup>2</sup>, m<sup>2</sup>", "cm, dm, m", "cm<sup>3</sup>, dm<sup>3</sup>, m<sup>3</sup>", "kg, g, tấn"], "answer": 2, "level": 1 },
        { "question": "Nếu một hình hộp chữ nhật có ba kích thước: 2 dm, 3 dm, 4 dm thì thể tích là:", "options": ["24 dm<sup>3</sup>", "12 dm<sup>3</sup>", "9 dm<sup>3</sup>", "18 dm<sup>3</sup>"], "answer": 0, "level": 1 },
        { "question": "Một hình hộp chữ nhật có chiều dài 10 cm, chiều rộng 5 cm, chiều cao 2 cm. Thể tích là:", "options": ["50 cm<sup>3</sup>", "100 cm<sup>3</sup>", "150 cm<sup>3</sup>", "20 cm<sup>3</sup>"], "answer": 1, "level": 1 },
        { "question": "Công thức V = S × h (trong đó S là diện tích đáy, h là chiều cao) có dùng để tính thể tích hình hộp chữ nhật không?", "options": ["Không dùng được", "Có dùng được", "Chỉ dùng cho hình vuông", "Chỉ dùng cho hình tròn"], "answer": 1, "level": 2 },
        { "question": "Một bể cá dài 2 m, rộng 1,5 m, cao 1 m. Thể tích bể cá đó là:", "options": ["3 m<sup>3</sup>", "4,5 m<sup>3</sup>", "2 m<sup>3</sup>", "3,5 m<sup>3</sup>"], "answer": 0, "level": 2 },
        { "question": "Nếu gấp chiều dài hình hộp chữ nhật lên 2 lần, các kích thước khác giữ nguyên thì thể tích tăng mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 0, "level": 2 },
        { "question": "Nếu gấp tất cả ba kích thước của hình hộp chữ nhật lên 2 lần thì thể tích tăng mấy lần?", "options": ["2 lần", "4 lần", "6 lần", "8 lần"], "answer": 3, "level": 3 },
        { "question": "Một hình hộp chữ nhật có diện tích đáy là 20 cm<sup>2</sup>, chiều cao là 5 cm. Thể tích là:", "options": ["100 cm<sup>3</sup>", "40 cm<sup>3</sup>", "25 cm<sup>3</sup>", "200 cm<sup>3</sup>"], "answer": 0, "level": 2 },
        { "question": "Nếu thể tích của hình hộp chữ nhật là 60 cm<sup>3</sup>, chiều dài 5 cm, chiều rộng 4 cm thì chiều cao là:", "options": ["2 cm", "3 cm", "4 cm", "5 cm"], "answer": 1, "level": 3 },
        { "question": "1 m<sup>3</sup> bằng bao nhiêu dm<sup>3</sup>?", "options": ["10 dm<sup>3</sup>", "100 dm<sup>3</sup>", "1000 dm<sup>3</sup>", "10000 dm<sup>3</sup>"], "answer": 2, "level": 1 },
        { "question": "Một chiếc hộp sữa 10 cm, 5 cm và 20 cm có thể tích là:", "options": ["1000 cm<sup>3</sup>", "500 cm<sup>3</sup>", "200 cm<sup>3</sup>", "1500 cm<sup>3</sup>"], "answer": 0, "level": 2 },
        { "question": "Hình hộp chữ nhật đặc biệt có ba kích thước bằng nhau được gọi là:", "options": ["Hình vuông", "Hình lập phương", "Hình cầu", "Hình trụ"], "answer": 1, "level": 1 },
        { "question": "Diện tích một mặt của hình hộp chữ nhật là 15 cm<sup>2</sup>, chiều cao 4 cm. Thể tích là:", "options": ["60 cm<sup>3</sup>", "30 cm<sup>3</sup>", "19 cm<sup>3</sup>", "40 cm<sup>3</sup>"], "answer": 0, "level": 1 }
    ]
};
