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
                            <img src="hinh_anh/toan/toan_tap_2/122-khampha.png" alt="Khám phá" class="w-full max-w-[600px] h-auto rounded-[40px] shadow-2xl border-8 border-white transform group-hover:rotate-1 transition-transform" onclick="if(window.openZoom) window.openZoom(this.src)">
                            
                            <!-- Overlay Action Buttons -->
                            <div class="absolute bottom-6 right-6 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button onclick="if(window.openZoom) window.openZoom('hinh_anh/toan/toan_tap_2/122-khampha.png'); event.stopPropagation();" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-2xl font-black shadow-2xl flex items-center gap-2 transform active:scale-95 transition-all outline-none">
                                    <span class="text-2xl">🔍</span> Phóng to ảnh
                                </button>
                                <button onclick="window.openKhamPhaModal(); event.stopPropagation();" class="bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-2xl font-black shadow-2xl flex items-center gap-2 transform active:scale-95 transition-all outline-none">
                                    <span class="text-2xl">🧊</span> Mô phỏng 3D
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
                        <div class="flex-grow flex flex-col md:flex-row p-6 gap-6 overflow-hidden relative">
                            <!-- Left: Image Reference -->
                            <div class="flex-1 flex flex-col gap-4 bg-white p-4 lg:p-6 rounded-[32px] shadow-lg border border-indigo-100 overflow-y-auto">
                                <div class="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-black text-xs md:text-sm uppercase tracking-widest text-center self-start">Hình vẽ trong bài</div>
                                <div class="relative group cursor-pointer h-full max-h-[400px]" onclick="if(window.openZoom) window.openZoom('hinh_anh/toan/toan_tap_2/122-khampha.png')">
                                    <img src="hinh_anh/toan/toan_tap_2/122-khampha.png" alt="Khám phá" class="w-full h-full rounded-2xl md:rounded-3xl object-contain shadow-md border-4 border-indigo-50">
                                    <div class="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                        <div class="bg-indigo-600/90 text-white px-4 py-2 md:px-6 md:py-3 rounded-2xl font-black shadow-lg flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                                            <span class="text-xl md:text-2xl">🔍</span> Phóng to ảnh
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-amber-50 rounded-2xl p-6 border-l-8 border-amber-400 mt-auto">
                                    <p class="text-xl font-bold text-amber-900 text-center">🤖 Robot nói: "Có một cách nhanh hơn là dùng cách tính thể tích của hình hộp chữ nhật."</p>
                                </div>
                            </div>

                            <!-- Right: 3D Simulator -->
                            <div class="lg:flex-[1.5] flex flex-col items-center justify-between gap-6 bg-gradient-to-br from-slate-800 to-indigo-950 p-6 rounded-[32px] shadow-2xl border-4 border-indigo-200 overflow-hidden relative">
                                <div class="absolute top-4 left-4 inline-block bg-sky-500/20 border border-sky-400/50 text-sky-300 px-4 py-1.5 rounded-full font-bold text-sm uppercase tracking-wider backdrop-blur-sm z-10 w-auto">Mô phỏng 3D Tương tác</div>
                                <!-- 3D SCENE -->
                                <div class="flex-grow flex items-center justify-center w-full relative perspective-[1500px]" id="scene-122">
                                    <div id="cube-wrapper-122" class="relative transform-style-3d transition-transform duration-[0.1s] ease-out cursor-grab active:cursor-grabbing" style="width: 300px; height: 200px; transform: rotateX(-20deg) rotateY(-30deg);">
                                        <!-- Container for mini blocks -->
                                        <div id="cube-layers-122" class="absolute inset-0 transform-style-3d"></div>

                                        <!-- The Container Box -->
                                        <div class="absolute inset-0 transform-style-3d pointer-events-none">
                                            <!-- Outside Faces -->
                                            <!-- Back -->
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 300px; height: 200px; transform: rotateY(180deg) translateZ(125px);"></div>
                                            <!-- Left -->
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 250px; height: 200px; transform: rotateY(-90deg) translateZ(150px);"></div>
                                            <!-- Bottom -->
                                            <div class="absolute border-2 border-indigo-400/60 bg-indigo-500/10 grid-bg-122" style="width: 300px; height: 250px; transform: rotateX(-90deg) translateZ(100px);"></div>
                                            <!-- Top (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] bg-sky-300/10 grid-bg-122" style="width: 300px; height: 250px; transform: rotateX(90deg) translateZ(100px);"></div>
                                            <!-- Right (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-122 flex items-center justify-center" style="width: 250px; height: 200px; transform: rotateY(90deg) translateZ(150px);">
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 transform -rotate-y-90 shadow-md text-sm">5 dm</div>
                                            </div>
                                            <!-- Front (transparent grid) -->
                                            <div class="absolute border-2 border-sky-400 bg-sky-300/10 grid-bg-122 flex items-center justify-center flex-col justify-end pb-4 gap-2" style="width: 300px; height: 200px; transform: translateZ(125px);">
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md translate-y-[100px] absolute text-sm">Chiều dài: 6 dm</div>
                                                <div class="bg-indigo-900/80 px-3 py-1.5 rounded-lg text-sky-200 font-bold border border-sky-500/50 shadow-md -translate-x-[180px] absolute text-sm">Cao: 4 dm</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Controls -->
                                <div class="flex flex-wrap items-center justify-center gap-3 z-10 w-full mb-4">
                                    <button onclick="window.animKhamPha122()" class="px-5 py-3 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-bold text-lg shadow-md active:scale-95 transition-all flex items-center gap-2">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                        Xoay mô hình
                                    </button>
                                    <button onclick="window.fillKhamPha122()" id="btn-fill-122" class="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white rounded-xl font-bold text-lg shadow-md active:scale-95 transition-all flex items-center gap-2">
                                        🧊 Xếp lập phương 1 dm³
                                    </button>
                                    <button onclick="window.resetKhamPha122()" class="px-5 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-xl font-bold text-lg shadow-md active:scale-95 transition-all">
                                        ↺ Đặt lại
                                    </button>
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
                        if(container.children.length > 0) return; // already filling
                        
                        btn.disabled = true;
                        btn.classList.add('opacity-50', 'cursor-not-allowed');

                        let delay = 0;
                        const totalX = 6, totalY = 4, totalZ = 5;
                        const size = 50;

                        // Add block text indicator
                        const counter = document.createElement('div');
                        counter.className = 'absolute bottom-4 left-4 bg-indigo-900/60 text-amber-300 font-bold text-xl px-4 py-2 border border-amber-300/30 rounded-xl transform-style-flat z-50 backdrop-blur-md shadow-lg transition-all';
                        counter.innerHTML = '0 / 120 khối';
                        container.appendChild(counter);

                        let count = 0;

                        // Fill layer by layer (bottom to top)
                        // In screen coordinates, Y is down. Bottom of box is y = positive.
                        // So bottom layer is Y = 3, top layer is Y = 0.
                        for(let y = totalY-1; y >= 0; y--) {
                            for(let z = 0; z < totalZ; z++) {
                                for(let x = 0; x < totalX; x++) {
                                    // Top-left-back corner center of the 300x200x250 box
                                    const tx = -125 + (x * size);
                                    const ty = -75 + (y * size);
                                    const tz = -100 + (z * size);

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
                                        counter.innerHTML = \`\${count} / 120 khối\`;
                                        if (count === 120) {
                                            btn.disabled = false;
                                            btn.classList.remove('opacity-50', 'cursor-not-allowed');
                                            btn.innerHTML = '✅ Đã lấp đầy (120 khối) = 120 dm³';
                                            btn.classList.replace('from-amber-400', 'from-emerald-500');
                                            btn.classList.replace('to-orange-500', 'to-emerald-600');
                                        }
                                    }, delay);

                                    delay += 30; // 30ms per block
                                }
                            }
                        }
                    };

                    window.resetKhamPha122 = function() {
                        const container = document.getElementById('cube-layers-122');
                        container.innerHTML = '';
                        // Remove counter if exists
                        // Remove counter if exists
                        const lastChild = container.lastElementChild;
                        if(lastChild && lastChild.innerHTML.includes('khối')) {
                            container.removeChild(lastChild);
                        }
                        const btn = document.getElementById('btn-fill-122');
                        btn.disabled = false;
                        btn.classList.remove('opacity-50', 'cursor-not-allowed');
                        btn.innerHTML = '🧊 Xếp lập phương 1 dm³';
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
                            <p class="text-4xl md:text-6xl font-black tracking-widest italic drop-shadow-md">V = a &times; b &times; c</p>
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
                <div class="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-bl-full transition-all group-hover:scale-110"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl md:text-4xl mb-6 text-indigo-700 flex items-center gap-4">
                        <span class="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-indigo-200">1</span>
                        Tính thể tích hình hộp chữ nhật:
                    </p>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div class="col-span-1 space-y-4">
                            <div class="bg-indigo-50 p-6 rounded-3xl border-2 border-indigo-100 h-full flex flex-col justify-center">
                                <p class="text-2xl md:text-3xl font-black text-indigo-900 border-b-2 border-indigo-200 pb-2 mb-3">Thông số:</p>
                                <p class="text-xl md:text-2xl font-bold text-gray-700">Chiều dài: <span class="text-indigo-600 font-black">8 cm</span></p>
                                <p class="text-xl md:text-2xl font-bold text-gray-700">Chiều rộng: <span class="text-indigo-600 font-black">5 cm</span></p>
                                <p class="text-xl md:text-2xl font-bold text-gray-700">Chiều cao: <span class="text-indigo-600 font-black">6 cm</span></p>
                            </div>
                        </div>
                        <div class="col-span-2">
                             <div class="bg-gray-50 p-6 rounded-[40px] border-2 border-dashed border-gray-200 text-center flex flex-col justify-center items-center gap-4 h-full">
                                <label class="text-gray-400 font-black text-xs uppercase tracking-widest">Thể tích tính được</label>
                                <div class="flex items-center gap-4">
                                    <input type="number" id="ans-122-1" class="w-full max-w-[200px] text-4xl md:text-6xl font-black text-indigo-600 bg-white p-3 rounded-2xl shadow-xl border-none focus:ring-4 focus:ring-indigo-200 text-right transition-all" placeholder="?">
                                    <span class="text-2xl md:text-3xl font-black text-gray-300">cm³</span>
                                    <button onclick="checkInstant122('1')" class="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-emerald-600 shrink-0" title="Kiểm tra ngay">
                                        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                                    </button>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bài tập 2 -->
            <div id="box-122-2" class="bg-white p-6 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden">
                <p class="font-black text-2xl md:text-4xl mb-6 text-emerald-700 flex items-center gap-4">
                    <span class="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-emerald-200">2</span>
                    Giải bài toán về bể cá:
                </p>
                <div class="bg-emerald-50/50 p-8 rounded-[40px] border-2 border-emerald-100 mb-6">
                    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                        <div class="lg:col-span-3 space-y-6">
                            <p class="text-2xl md:text-3xl font-bold text-emerald-900 leading-snug italic bg-white p-6 rounded-3xl shadow-sm border-l-8 border-emerald-500">
                                "Bố của Mai vừa làm một bể cá dạng hình hộp chữ nhật với kích thước như hình bên. Tính thể tích của bể cá đó."
                            </p>
                        </div>
                        <div class="lg:col-span-2 flex justify-center">
                            <img src="hinh_anh/toan/toan_tap_2/122-b2-beca.png" alt="Bể cá" class="w-full max-w-[400px] h-auto rounded-[32px] shadow-2xl border-4 border-white transition-all hover:scale-105">
                        </div>
                    </div>
                </div>

                <!-- Khu vực giải toán có lời văn -->
                <div class="max-w-4xl mx-auto space-y-4 bg-white p-8 rounded-[48px] shadow-2xl border-2 border-emerald-100">
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-xl font-black mt-2 shrink-0 shadow-lg">1</div>
                        <textarea id="wp-solution-122-2" rows="1" class="w-full p-4 rounded-2xl border-2 border-emerald-100 focus:border-emerald-500 outline-none text-xl font-bold transition-all shadow-inner placeholder:text-gray-100 resize-none" placeholder="Ví dụ: Thể tích bể cá là:"></textarea>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-blue-500 text-white rounded-2xl flex items-center justify-center text-xl font-black mt-2 shrink-0 shadow-lg">2</div>
                        <textarea id="wp-calc-122-2" rows="1" class="w-full p-4 rounded-2xl border-2 border-blue-100 focus:border-blue-500 outline-none text-2xl font-black text-blue-800 transition-all shadow-inner placeholder:text-gray-100 resize-none" placeholder="Ví dụ: 10 x 6 x 8 = 480 (dm3)"></textarea>
                    </div>
                    <div class="flex items-start gap-4">
                        <div class="w-10 h-10 bg-rose-500 text-white rounded-2xl flex items-center justify-center text-xl font-black mt-2 shrink-0 shadow-lg">3</div>
                        <div class="flex-grow flex items-center gap-4 bg-rose-50 p-3 rounded-2xl border-2 border-rose-100">
                            <input type="number" id="ans-122-2" class="w-full max-w-[150px] p-3 rounded-xl border-none outline-none text-3xl font-black text-rose-600 text-right bg-white shadow-md" placeholder="?">
                            <span class="text-xl font-black text-rose-300">dm³</span>
                            <button onclick="checkInstant122('2')" class="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all hover:bg-emerald-600 shrink-0" title="Kiểm tra ngay">
                                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div class="pt-6 flex justify-center">
                        <button onclick="Lesson.submitWordProblemAI('122-2')" class="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-3xl font-black text-2xl transition-all shadow-2xl active:scale-95 flex items-center gap-3">
                            <span>Thầy E chấm lời giải</span>
                            <span class="text-3xl">👨‍🏫</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bài tập 3 -->
            <div id="box-122-3" class="bg-white p-6 rounded-[40px] border border-gray-100 shadow-2xl relative overflow-hidden group">
                <div class="absolute top-0 left-0 w-32 h-32 bg-amber-50 rounded-br-full -z-0"></div>
                <div class="relative z-10">
                    <p class="font-black text-2xl md:text-4xl mb-6 text-amber-700 flex items-center gap-4">
                        <span class="w-12 h-12 bg-amber-600 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-amber-200">3</span>
                        Khối hình ghép độc đáo:
                    </p>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-amber-50 p-8 rounded-[40px] border-2 border-dashed border-amber-200">
                        <img src="hinh_anh/toan/toan_tap_2/122-b3-blocks.png" alt="Khối hình" class="w-full max-w-[450px] h-auto rounded-[32px] shadow-2xl border-4 border-white mx-auto">
                        <div class="space-y-6">
                            <p class="text-2xl font-bold text-amber-900 leading-tight">
                                Để tạo ra hình bên, Việt ghép <b>6 hình hộp chữ nhật</b> giống nhau. Mỗi hình có kích thước: <b>10 cm, 5 cm và 2 cm</b>.
                            </p>
                            <div class="space-y-4">
                                <div class="bg-white p-4 rounded-2xl shadow-sm border border-amber-100 flex items-center justify-between">
                                    <span class="text-lg font-black text-gray-400">V₁ (1 khối):</span>
                                    <div class="flex items-center gap-3">
                                        <input type="number" id="ans-122-3a" class="w-24 text-2xl font-black text-amber-700 text-right bg-amber-50 rounded-xl p-2 outline-none" placeholder="?">
                                        <span class="text-lg font-black text-gray-300">cm³</span>
                                    </div>
                                </div>
                                <div class="bg-amber-600 p-6 rounded-[32px] shadow-xl text-white flex flex-col gap-3">
                                    <span class="text-xl font-black uppercase tracking-widest text-center">Thể tích cả khối</span>
                                    <div class="flex items-center justify-center gap-4">
                                        <input type="number" id="ans-122-3b" class="w-full max-w-[150px] text-4xl font-black text-right bg-white text-amber-700 rounded-2xl p-3 shadow-inner outline-none placeholder:text-amber-100" placeholder="?">
                                        <span class="text-2xl font-black text-white/80">cm³</span>
                                        <button onclick="checkInstant122('3')" class="w-16 h-16 bg-white text-emerald-500 rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-all shrink-0" title="Kiểm tra ngay">
                                            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
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
                window.checkInstant122 = function(id) {
                    const box = document.getElementById('box-122-' + id);
                    let isCorrect = false;

                    if (id === '1') {
                        const val = document.getElementById('ans-122-1').value;
                        if (!val) { alert("Thầy E nhắc: Bạn hãy điền kết quả vào ô trống nhé! ✏️"); return; }
                        isCorrect = (parseInt(val) === 240);
                    } else if (id === '2') {
                        const val = document.getElementById('ans-122-2').value;
                        if (!val) { alert("Thầy E nhắc: Bạn hãy điền đáp số nhé! ✏️"); return; }
                        isCorrect = (parseInt(val) === 480);
                    } else if (id === '3') {
                        const valA = document.getElementById('ans-122-3a').value;
                        const valB = document.getElementById('ans-122-3b').value;
                        if (!valA || !valB) { alert("Thầy E nhắc: Bạn hãy điền đủ cả 2 ô nhé! ✏️"); return; }
                        isCorrect = (parseInt(valA) === 100 && parseInt(valB) === 600);
                    }

                    box.classList.remove('border-gray-100', 'border-emerald-400', 'bg-emerald-50', 'border-red-400', 'bg-red-50');
                    box.classList.add('border-4');

                    if (isCorrect) {
                        box.classList.add('border-emerald-400', 'bg-emerald-50');
                        alert("XUẤT SẮC! Phép tính chính xác rồi đấy! ✨🎉");
                    } else {
                        box.classList.add('border-red-400', 'bg-red-50');
                        alert("Chưa đúng rồi, bạn thử tính lại theo công thức V = a x b x c nhé! 🤔");
                    }
                };

                window.submit122 = function() {
                    const a1 = document.getElementById('ans-122-1').value;
                    const a2 = document.getElementById('ans-122-2').value;
                    const a3a = document.getElementById('ans-122-3a').value;
                    const a3b = document.getElementById('ans-122-3b').value;

                    if (!a1 || !a2 || !a3a || !a3b) {
                        alert("Thầy E nhắc bạn: Hãy hoàn thành tất cả các bài tập để Robot chấm điểm nhé! 🌟");
                        return;
                    }

                    let score = 0;
                    if (parseInt(a1) === 240) score += 3;
                    if (parseInt(a2) === 480) score += 3;
                    if (parseInt(a3a) === 100 && parseInt(a3b) === 600) score += 4;

                    const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
                    if (window.submitMathLesson) {
                        window.submitMathLesson("Tiết 122: " + score + "/10", status, "btn-submit-122");
                    }
                    if (score === 10) alert("TUYỆT VỜI! 🏆 Bạn đã đạt điểm 10 tối đa!");
                    else alert("Bạn tuyệt lắm! Điểm của bạn là: " + score + "/10. Hãy cố gắng luyện tập thêm nhé! 🌈");
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
