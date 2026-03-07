// js/components/lesson/LessonMedia.js
export const LessonMedia = {
    _zoomLevel: 1,
    _zoomOffsetX: 0,
    _zoomOffsetY: 0,
    _isDragging: false,
    _dragStart: { x: 0, y: 0 },

    openZoom(src, caption) {
        this._zoomLevel = 1;
        this._zoomOffsetX = 0;
        this._zoomOffsetY = 0;

        const existing = document.getElementById('edu-zoom-modal');
        if (existing) existing.remove();

        const isIframe = src.startsWith('http') && (src.includes('maps.google') || src.includes('youtube') || src.includes('embed'));

        const modal = document.createElement('div');
        modal.id = 'edu-zoom-modal';
        modal.className = 'fixed inset-0 z-[9999] flex items-center justify-center';
        modal.innerHTML = `
            <div class="absolute inset-0 bg-black/90 backdrop-blur-sm" onclick="Lesson.closeZoom()"></div>
            <div class="relative z-10 w-full h-full flex flex-col">
                <div class="flex items-center justify-between p-4 shrink-0">
                    <div class="flex items-center gap-2">
                        <button onclick="Lesson.zoomIn()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Phóng to (Ctrl +)">🔍+</button>
                        <button onclick="Lesson.zoomOut()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Thu nhỏ (Ctrl -)">🔍−</button>
                        <button onclick="Lesson.zoomReset()" class="w-12 h-12 bg-white/20 hover:bg-white/30 text-white rounded-2xl flex items-center justify-center text-lg font-black backdrop-blur-md transition-all active:scale-90" title="Về gốc">↺</button>
                        <span id="edu-zoom-level" class="ml-3 text-white/70 font-black text-sm backdrop-blur-md bg-white/10 px-3 py-1.5 rounded-xl">100%</span>
                    </div>
                    ${caption ? `<span class="text-white font-bold text-sm bg-white/10 px-4 py-2 rounded-xl backdrop-blur-md max-w-[40%] truncate">${caption}</span>` : ''}
                    <button onclick="Lesson.closeZoom()" class="w-12 h-12 bg-red-500/80 hover:bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black backdrop-blur-md transition-all active:scale-90" title="Đóng (Esc)">✕</button>
                </div>
                <div id="edu-zoom-content" class="flex-grow flex items-center justify-center overflow-hidden px-4 pb-4" ${!isIframe ? 'onwheel="Lesson._handleZoomWheel(event)"' : ''}>
                    ${isIframe ? `
                        <iframe src="${src}" class="w-full h-full rounded-2xl border-2 border-white/20" allowfullscreen loading="lazy" style="min-height:80vh"></iframe>
                    ` : `
                        <img id="edu-zoom-img" src="${src}" alt="${caption || ''}" 
                            class="max-w-none transition-transform duration-200 ease-out rounded-xl shadow-2xl select-none"
                            style="transform: scale(1) translate(0px, 0px); cursor: grab;"
                            draggable="false"
                            onmousedown="Lesson._startDrag(event)"
                            ontouchstart="Lesson._startDragTouch(event)"
                        />
                    `}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        this._zoomKeyHandler = (e) => {
            if (e.key === 'Escape') this.closeZoom();
            else if (e.key === '+' || e.key === '=') this.zoomIn();
            else if (e.key === '-') this.zoomOut();
            else if (e.key === '0') this.zoomReset();
        };
        document.addEventListener('keydown', this._zoomKeyHandler);

        this._dragMoveHandler = (e) => this._handleDragMove(e);
        this._dragEndHandler = () => this._endDrag();
        document.addEventListener('mousemove', this._dragMoveHandler);
        document.addEventListener('mouseup', this._dragEndHandler);
        document.addEventListener('touchmove', this._dragMoveHandler, { passive: false });
        document.addEventListener('touchend', this._dragEndHandler);
    },

    closeZoom() {
        const modal = document.getElementById('edu-zoom-modal');
        if (modal) modal.remove();
        document.body.style.overflow = '';
        if (this._zoomKeyHandler) document.removeEventListener('keydown', this._zoomKeyHandler);
        if (this._dragMoveHandler) {
            document.removeEventListener('mousemove', this._dragMoveHandler);
            document.removeEventListener('touchmove', this._dragMoveHandler);
        }
        if (this._dragEndHandler) {
            document.removeEventListener('mouseup', this._dragEndHandler);
            document.removeEventListener('touchend', this._dragEndHandler);
        }
    },

    _updateZoomTransform() {
        const img = document.getElementById('edu-zoom-img');
        const label = document.getElementById('edu-zoom-level');
        if (img) img.style.transform = `scale(${this._zoomLevel}) translate(${this._zoomOffsetX}px, ${this._zoomOffsetY}px)`;
        if (label) label.textContent = `${Math.round(this._zoomLevel * 100)}%`;
    },

    zoomIn() { this._zoomLevel = Math.min(this._zoomLevel + 0.25, 5); this._updateZoomTransform(); },
    zoomOut() { this._zoomLevel = Math.max(this._zoomLevel - 0.25, 0.25); this._updateZoomTransform(); },
    zoomReset() { this._zoomLevel = 1; this._zoomOffsetX = 0; this._zoomOffsetY = 0; this._updateZoomTransform(); },

    _handleZoomWheel(event) {
        event.preventDefault();
        this._zoomLevel = event.deltaY < 0 ? Math.min(this._zoomLevel + 0.15, 5) : Math.max(this._zoomLevel - 0.15, 0.25);
        this._updateZoomTransform();
    },

    _startDrag(event) {
        event.preventDefault();
        this._isDragging = true;
        this._dragStart = { x: event.clientX - this._zoomOffsetX, y: event.clientY - this._zoomOffsetY };
        const img = document.getElementById('edu-zoom-img');
        if (img) img.style.cursor = 'grabbing';
    },

    _startDragTouch(event) {
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            this._isDragging = true;
            this._dragStart = { x: touch.clientX - this._zoomOffsetX, y: touch.clientY - this._zoomOffsetY };
        }
    },

    _handleDragMove(event) {
        if (!this._isDragging) return;
        if (event.type === 'touchmove') {
            event.preventDefault();
            const touch = event.touches[0];
            this._zoomOffsetX = touch.clientX - this._dragStart.x;
            this._zoomOffsetY = touch.clientY - this._dragStart.y;
        } else {
            this._zoomOffsetX = event.clientX - this._dragStart.x;
            this._zoomOffsetY = event.clientY - this._dragStart.y;
        }
        this._updateZoomTransform();
    },

    _endDrag() {
        this._isDragging = false;
        const img = document.getElementById('edu-zoom-img');
        if (img) img.style.cursor = 'grab';
    },

    _initImageZoom() {
        if (typeof document === 'undefined') return;
        let zoomBtn = document.getElementById('global-zoom-btn');
        if (!zoomBtn) {
            zoomBtn = document.createElement('button');
            zoomBtn.id = 'global-zoom-btn';
            zoomBtn.className = 'fixed z-[100] w-12 h-12 bg-indigo-600/90 text-white rounded-xl shadow-2xl flex items-center justify-center opacity-0 pointer-events-none scale-75 transition-all duration-300 outline-none';
            zoomBtn.innerHTML = `<svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path></svg>`;
            document.body.appendChild(zoomBtn);
            zoomBtn.addEventListener('mouseenter', () => {
                clearTimeout(this._zoomBtnTimeout);
                zoomBtn.classList.remove('opacity-0', 'pointer-events-none', 'scale-75');
                zoomBtn.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
            });
            zoomBtn.addEventListener('mouseleave', () => {
                this._zoomBtnTimeout = setTimeout(() => {
                    zoomBtn.classList.add('opacity-0', 'pointer-events-none', 'scale-75');
                    zoomBtn.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
                }, 300);
            });
            zoomBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this._activeTargetImg) {
                    this.openZoom(this._activeTargetImg.src, this._activeTargetImg.alt || this._activeTargetImg.title || '');
                }
            });
        }

        const handleMouseEnter = (e) => {
            const img = e.currentTarget;
            this._activeTargetImg = img;
            clearTimeout(this._zoomBtnTimeout);
            const rect = img.getBoundingClientRect();
            const btnSize = 48;
            const offset = 12;
            zoomBtn.style.top = `${rect.bottom - btnSize - offset}px`;
            zoomBtn.style.left = `${rect.right - btnSize - offset}px`;
            zoomBtn.classList.remove('opacity-0', 'pointer-events-none', 'scale-75');
            zoomBtn.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
        };

        const handleMouseLeave = () => {
            this._zoomBtnTimeout = setTimeout(() => {
                zoomBtn.classList.add('opacity-0', 'pointer-events-none', 'scale-75');
                zoomBtn.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
            }, 300);
        };

        const attachZoom = (container) => {
            if (!container) return;
            const images = container.querySelectorAll('img:not([data-no-zoom]):not([data-zoom-ready])');
            images.forEach(img => {
                img.setAttribute('data-zoom-ready', 'true');
                img.classList.add('zoom-active-cursor');
                img.addEventListener('mouseenter', handleMouseEnter);
                img.addEventListener('mouseleave', handleMouseLeave);
                img.addEventListener('click', (e) => {
                    e.preventDefault(); e.stopPropagation();
                    this.openZoom(img.src, img.alt || img.title || '');
                });
            });
        };

        attachZoom(document.getElementById('tab-content'));
        if (!this._zoomObserver) {
            this._zoomObserver = new MutationObserver((mutations) => {
                mutations.forEach(m => {
                    m.addedNodes.forEach(node => {
                        if (node.nodeType === 1) {
                            if (node.tagName === 'IMG') attachZoom(node.parentElement);
                            else attachZoom(node);
                        }
                    });
                });
            });
            const tabContent = document.getElementById('tab-content');
            if (tabContent) this._zoomObserver.observe(tabContent, { childList: true, subtree: true });
        }
    },

    renderInteractiveMap(id, title, description, locations) {
        const center = locations[0] || { lat: 16.047079, lng: 108.206230 };
        const zoom = locations.length === 1 ? 8 : 6;
        const markersHtml = locations.map((loc, idx) => `
            <button onclick="Lesson.flyToMapLocation('${id}', ${idx}, ${loc.lat}, ${loc.lng}, '${(loc.name || '').replace(/'/g, "\\'")}', '${(loc.info || '').replace(/'/g, "\\'")}', '${loc.emoji || '📍'}')"
                class="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl border-2 border-gray-100 dark:border-slate-700 hover:border-blue-400 hover:shadow-lg transition-all active:scale-95 text-left group"
                id="map-marker-btn-${id}-${idx}">
                <span class="text-2xl shrink-0">${loc.emoji || '📍'}</span>
                <div class="flex-grow min-w-0">
                    <p class="font-black text-gray-800 dark:text-slate-100 text-sm md:text-base truncate">${loc.name}</p>
                    <p class="text-[11px] font-bold text-gray-400 dark:text-slate-500 truncate">${loc.info || ''}</p>
                </div>
                <svg class="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        `).join('');
        const mapSrc = `https://maps.google.com/maps?q=${center.lat},${center.lng}&z=${zoom}&output=embed&t=k`;

        return `
        <div class="interactive-map-module p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-900 rounded-[32px] border border-blue-100 dark:border-slate-700 mb-6 mt-6" id="map-module-${id}">
            <div class="flex items-center gap-3 mb-2">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-lg shadow-blue-200">🗺️</div>
                <div><h3 class="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-400">${title}</h3><p class="text-sm font-bold text-blue-600/70 dark:text-blue-400/50">${description || 'Nhấn vào các địa điểm bên dưới để khám phá trên bản đồ'}</p></div>
            </div>
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-200 dark:border-slate-600 mt-4">
                <iframe id="map-iframe-${id}" src="${mapSrc}" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full"></iframe>
                <div id="map-info-${id}" class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transform translate-y-full transition-transform duration-300">
                    <div class="flex items-center gap-3"><span id="map-info-emoji-${id}" class="text-3xl">📍</span><div><h4 id="map-info-name-${id}" class="text-lg font-black"></h4><p id="map-info-detail-${id}" class="text-sm font-bold opacity-80"></p></div></div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">${markersHtml}</div>
            <div class="flex gap-2 mt-4 justify-center flex-wrap">
                <button onclick="Lesson.switchMapType('${id}', 'k')" class="px-4 py-2 bg-blue-600 text-white font-black rounded-xl text-sm shadow-md active:scale-95 transition-all">🛰️ Vệ tinh</button>
                <button onclick="Lesson.switchMapType('${id}', 'm')" class="px-4 py-2 bg-white dark:bg-slate-700 text-gray-700 dark:text-slate-200 font-black rounded-xl text-sm shadow-md active:scale-95 transition-all border">🗺️ Bản đồ</button>
                <button onclick="Lesson.openMapFullscreen('${id}')" class="px-4 py-2 bg-emerald-600 text-white font-black rounded-xl text-sm shadow-md active:scale-95 transition-all">🔍 Phóng to</button>
            </div>
        </div>
        `;
    },

    flyToMapLocation(id, idx, lat, lng, name, info, emoji) {
        const iframe = document.getElementById(`map-iframe-${id}`);
        if (iframe) iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&z=10&output=embed&t=k`;
        const overlay = document.getElementById(`map-info-${id}`);
        if (overlay) {
            document.getElementById(`map-info-name-${id}`).textContent = name;
            document.getElementById(`map-info-detail-${id}`).textContent = info;
            document.getElementById(`map-info-emoji-${id}`).textContent = emoji;
            overlay.classList.remove('translate-y-full');
            setTimeout(() => overlay.classList.add('translate-y-full'), 5000);
        }
        const activeBtn = document.getElementById(`map-marker-btn-${id}-${idx}`);
        if (activeBtn) {
            document.querySelectorAll(`[id^="map-marker-btn-${id}-"]`).forEach(btn => btn.classList.remove('border-blue-500', 'bg-blue-50', 'shadow-lg'));
            activeBtn.classList.add('border-blue-500', 'bg-blue-50', 'shadow-lg');
        }
    },

    switchMapType(id, type) {
        const iframe = document.getElementById(`map-iframe-${id}`);
        if (iframe) iframe.src = iframe.src.replace(/&t=[a-z]/, `&t=${type}`);
    },

    openMapFullscreen(id) {
        const iframe = document.getElementById(`map-iframe-${id}`);
        if (iframe) this.openZoom(iframe.src, 'Bản đồ tương tác — cuộn chuột để zoom | kéo để di chuyển');
    },

    // =========================================
    // NATIVE WEB PRESENTATION FEATURE
    // =========================================
    _currentSlideIndex: 0,
    _presentationActive: false,

    startPresentation(lessonId) {
        // Find the lesson object from window globally (assuming it's loaded like window.lesson123)
        const lessonObj = window[`lesson${lessonId.split('_').pop()}`] || window.currentLessonData;
        
        if (!lessonObj) {
            alert('Không tìm thấy dữ liệu bài học để trình chiếu.');
            return;
        }

        if (!Array.isArray(lessonObj.presentation) || lessonObj.presentation.length === 0) {
            alert('Bài học này chưa được cấu hình nội dung trình chiếu (mảng `presentation` trống).');
            return;
        }

        const overlay = document.getElementById('presentation-overlay');
        const wrapper = document.getElementById('slides-wrapper');
        
        if (!overlay || !wrapper) {
            console.error('Không tìm thấy khung Presentation Overlay trong HTML.');
            return;
        }

        // Tạo các Slide từ mảng presentation
        wrapper.innerHTML = '';
        lessonObj.presentation.forEach((slideHTML, index) => {
            const section = document.createElement('section');
            section.className = `web-slide ${index === 0 ? 'active' : ''}`;
            section.innerHTML = slideHTML;
            wrapper.appendChild(section);
        });

        this._currentSlideIndex = 0;
        this._presentationActive = true;
        
        // Hiện Overlay
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Khoá cuộn trang nền

        // Đảm bảo nút điều hướng luôn hiển thị đúng text
        const navBtns = overlay.querySelectorAll('.nav-controls button');
        if (navBtns.length >= 2) {
            navBtns[0].innerHTML = '&#10094; Trước';
            navBtns[1].innerHTML = 'Sau &#10095;';
        }

        // Đăng ký sự kiện bàn phím nếu chưa có
        if (!this._pptKeyHandler) {
            this._pptKeyHandler = (e) => {
                if (!this._presentationActive) return;
                if (e.key === "ArrowRight" || e.key === "Space") {
                    e.preventDefault();
                    this.moveSlide(1);
                }
                if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    this.moveSlide(-1);
                }
                if (e.key === "Escape") {
                    e.preventDefault();
                    this.stopPresentation();
                }
            };
            document.addEventListener('keydown', this._pptKeyHandler);
        }
    },

    stopPresentation() {
        this._presentationActive = false;
        const overlay = document.getElementById('presentation-overlay');
        if (overlay) {
            overlay.classList.add('hidden');
        }
        document.body.style.overflow = ''; // Mở lại cuộn trang nền
    },

    moveSlide(step) {
        if (!this._presentationActive) return;
        const overlay = document.getElementById('presentation-overlay');
        if (!overlay) return;

        const slides = overlay.querySelectorAll('.web-slide');
        if (slides.length === 0) return;

        // Xóa class active ở slide hiện tại
        if (slides[this._currentSlideIndex]) {
            slides[this._currentSlideIndex].classList.remove('active');
        }

        // Tính slide tiếp theo (vòng lặp)
        this._currentSlideIndex = (this._currentSlideIndex + step + slides.length) % slides.length;

        // Thêm class active
        if (slides[this._currentSlideIndex]) {
            slides[this._currentSlideIndex].classList.add('active');
        }
    }
};
