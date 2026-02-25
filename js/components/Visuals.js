// js/components/Visuals.js - Thành phần trực quan và 3D
export const Visuals = {
    renderCube3D(label) {
        return `
            <div class="cube-container mt-2 mb-4 flex flex-col items-center animate-fade-in">
                <div class="bg-blue-50/50 px-4 py-1.5 rounded-full border border-blue-100 mb-6">
                    <span class="text-[9px] font-black uppercase text-blue-600 tracking-[0.2em]">${label}</span>
                </div>
                
                <div class="scene-3d" 
                     onmousedown="Visuals.startCubeRotate(event)" 
                     ontouchstart="Visuals.startCubeRotate(event)">
                    <div class="cube-3d" id="cube3d">
                        <div class="cube-face front"></div>
                        <div class="cube-face back"></div>
                        <div class="cube-face right"></div>
                        <div class="cube-face left"></div>
                        <div class="cube-face top"></div>
                        <div class="cube-face bottom"></div>
                        
                        <!-- Labels -->
                        <div class="cube-label label-w">1 m</div>
                        <div class="cube-label label-h">1 m</div>
                        <div class="cube-label label-d">1 m</div>
                    </div>
                </div>

                <div class="mt-6 flex gap-4">
                    <button onclick="Visuals.resetCube()" class="p-3 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95 text-lg">🔄</button>
                    <div class="px-5 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm text-[9px] font-bold text-gray-400 flex items-center gap-3">
                        <span class="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Dùng chuột hoặc ngón tay để xoay khối 3D
                    </div>
                </div>
            </div>
        `;
    },

    cubeState: { isDragging: false, currentX: 35, currentY: -22, lastMouseX: 0, lastMouseY: 0 },

    startCubeRotate(e) {
        this.cubeState.isDragging = true;
        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        this.cubeState.lastMouseX = clientX;
        this.cubeState.lastMouseY = clientY;

        const handleMove = (moveEvt) => {
            if (!this.cubeState.isDragging) return;
            const currentX = moveEvt.type === 'touchmove' ? moveEvt.touches[0].clientX : moveEvt.clientX;
            const currentY = moveEvt.type === 'touchmove' ? moveEvt.touches[0].clientY : moveEvt.clientY;

            const deltaX = currentX - this.cubeState.lastMouseX;
            const deltaY = currentY - this.cubeState.lastMouseY;

            this.cubeState.currentX += deltaX * 0.5;
            this.cubeState.currentY -= deltaY * 0.5;

            const cube = document.getElementById('cube3d');
            if (cube) {
                cube.style.transform = `rotateX(${this.cubeState.currentY}deg) rotateY(${this.cubeState.currentX}deg)`;
            }

            this.cubeState.lastMouseX = currentX;
            this.cubeState.lastMouseY = currentY;
            moveEvt.preventDefault();
        };

        const stopMove = () => {
            this.cubeState.isDragging = false;
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', stopMove);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', stopMove);
        };

        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', stopMove);
        document.addEventListener('touchmove', handleMove, { passive: false });
        document.addEventListener('touchend', stopMove);
    },

    resetCube() {
        this.cubeState.currentX = 35;
        this.cubeState.currentY = -22;
        const cube = document.getElementById('cube3d');
        if (cube) {
            cube.style.transform = `rotateX(${this.cubeState.currentY}deg) rotateY(${this.cubeState.currentX}deg)`;
        }
    }
};

window.Visuals = Visuals;
