(function () {
    // EduRobot Core Engine (LTVC-CORE-V2)
    // Absolute Stealth Mode - No Debug Banners

    // --- CLEANUP ROUTINE (Removes any old debug leftovers forcefully) ---
    const cleanResiduals = function () {
        ['v1000-lock', 'v1000-lock-style', 'version-banner', 'v1000-style', 'v900-banner', 'v800-banner'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.remove();
        });
        // Remove pulse-lock style if it exists
        const styles = document.querySelectorAll('style[id*="v1000"], style[id*="v900"]');
        styles.forEach(s => s.remove());

        // Final override for the top banner if it somehow persists in DOM
        const banner = document.querySelector('[id*="banner"]');
        if (banner && (banner.innerText.includes('V1000') || banner.innerText.includes('SINGULARITY'))) {
            banner.remove();
        }
    };

    // --- CORE LOGIC ---

    const toggleSentence = function (el, e) {
        const evt = e || window.event;
        const targetWord = (evt && evt.target) ? evt.target.closest('.word') : null;
        const row = el.closest('.interactive-row, .sentence-box') || el;
        const isLocked = row.classList.contains('sentence-locked') || row.classList.contains('locked');

        if (isLocked) { row.classList.remove('sentence-locked', 'locked'); row.classList.add('bg-sky-50', 'ring-2', 'ring-sky-400'); if (evt) evt.stopPropagation(); return; }

        if (targetWord) {
            targetWord.classList.toggle('selected');
            if (targetWord.classList.contains('selected')) {
                targetWord.style.backgroundColor = '#0369a1';
                targetWord.style.color = 'white';
                targetWord.style.borderRadius = '4px';
                targetWord.style.padding = '2px 6px';
            } else {
                targetWord.style.backgroundColor = '';
                targetWord.style.color = '';
            }
            if (evt) { evt.stopPropagation(); if (evt.preventDefault) evt.preventDefault(); }
        } else {
            const words = row.querySelectorAll('.word.selected');
            words.forEach(w => { w.classList.remove('selected'); w.style.backgroundColor = ''; w.style.color = ''; });
            row.classList.remove('bg-sky-50', 'ring-2', 'ring-sky-400');
            row.classList.add('sentence-locked');
            row.querySelectorAll('.word.is-wrong, .word.is-correct').forEach(w => { w.classList.remove('is-wrong', 'is-correct'); w.style.backgroundColor = ''; });
            row.classList.remove('ring-green-400', 'bg-green-50', 'ring-red-400');
        }
    };

    const evaluateLTVC = function (blockId) {
        const container = document.getElementById(blockId);
        const resultEl = document.getElementById('result-' + blockId) || document.getElementById('result-p1a') || document.getElementById('result-p1b');

        if (!container) return;

        // Find the block data from window.currentLesson
        let blockData = null;
        if (window.currentLesson && window.currentLesson.tabs && window.currentLesson.tabs.lesson) {
            blockData = window.currentLesson.tabs.lesson.blocks.find(b => b.id === blockId);
        }

        const rows = Array.from(container.querySelectorAll('.interactive-row, .sentence-box'));
        const compRows = rows.filter(r => (r.getAttribute('data-compound') === 'true') || (r.getAttribute('data-is-compound') === 'true'));
        let total = compRows.length || 0;
        let correct = 0;
        let errors = 0;
        let missedComp = 0;

        rows.forEach(row => {
            const isComp = (row.getAttribute('data-compound') === 'true') || (row.getAttribute('data-is-compound') === 'true');
            const rawAns = row.getAttribute('data-ans') || row.getAttribute('data-connectors') || "";

            // Tách các mục tiêu từ data-ans, hỗ trợ cả cụm từ và dấu phẩy
            let targets = [];
            let parts = rawAns.includes('|') ? rawAns.split('|') : (rawAns === ',' ? [','] : rawAns.split(','));
            parts.forEach(part => {
                let trimmedPart = part.trim().toLowerCase();
                if (trimmedPart.includes(' ')) {
                    trimmedPart.split(/\s+/).forEach(w => { if (w) targets.push(w); });
                } else if (trimmedPart || part === ",") {
                    targets.push(trimmedPart || ",");
                }
            });

            const sel = Array.from(row.querySelectorAll('.word.selected'));

            row.classList.remove('ring-4', 'ring-green-400', 'bg-green-50', 'ring-red-500', 'bg-red-50');

            if (isComp) {
                let matches = 0;
                let misclicks = 0;

                // Đếm xem thực tế trong đoạn này có bao nhiêu từ khớp với targets
                let totalTargetOccurrences = 0;
                row.querySelectorAll('.word').forEach(w => {
                    const txt = (w.innerText || w.textContent).toLowerCase().trim();
                    const isMatch = targets.some(t => t === txt || t === txt.replace(/[.,?!:;]/g, "").replace(/\.\.\./g, ""));
                    if (isMatch) totalTargetOccurrences++;
                });

                sel.forEach(w => {
                    const txt = (w.innerText || w.textContent).toLowerCase().trim();
                    const isMatch = targets.some(t => t === txt || t === txt.replace(/[.,?!:;]/g, "").replace(/\.\.\./g, ""));
                    if (isMatch) {
                        w.classList.add('is-correct');
                        w.style.backgroundColor = '#10b981';
                        matches++;
                    } else {
                        w.classList.add('is-wrong');
                        w.style.backgroundColor = '#ef4444';
                        misclicks++;
                        errors++;
                    }
                });

                if (misclicks === 0 && matches >= totalTargetOccurrences && matches > 0) {
                    correct++;
                    row.classList.add('ring-4', 'ring-green-400', 'bg-green-50');
                } else {
                    row.classList.add('ring-4', 'ring-red-500', 'bg-red-50');
                    if (sel.length === 0) missedComp++;
                }
            } else {
                if (sel.length > 0) {
                    sel.forEach(w => {
                        w.classList.add('is-wrong');
                        w.style.backgroundColor = '#ef4444';
                        errors++;
                    });
                    row.classList.add('ring-4', 'ring-red-500', 'bg-red-50');
                }
            }
        });

        if (resultEl) {
            resultEl.classList.remove('hidden');
            const isPerfect = (errors === 0 && correct === total);

            if (isPerfect) {
                // Ưu tiên lấy từ data-feedback-correct của container, sau đó mới đến blockData
                const feedbackText = container.getAttribute('data-feedback-correct') ||
                    ((blockData && blockData.feedback && blockData.feedback.correct)
                        ? blockData.feedback.correct
                        : `Hoàn thành xuất sắc! (${correct}/${total})`);

                resultEl.innerHTML = `
                    <div class="mt-4 p-4 bg-green-100 text-green-700 font-bold rounded-2xl border border-green-200 flex flex-col items-start justify-center gap-2 animate-in zoom-in-95">
                        <div class="text-left text-sm leading-relaxed">${feedbackText}</div>
                    </div>`;

                if (typeof window.celebrate === 'function') window.celebrate();
                const sound = document.getElementById('clapSound');
                if (sound) { sound.currentTime = 0; sound.play().catch(e => { }); }
            } else {
                // Ưu tiên lấy từ data-feedback-wrong của container, sau đó mới đến blockData
                const feedbackText = container.getAttribute('data-feedback-wrong') ||
                    ((blockData && blockData.feedback && blockData.feedback.wrong)
                        ? blockData.feedback.wrong
                        : `Bạn chọn sai rồi, thử lại nhé!`);

                resultEl.innerHTML = `
                    <div class="mt-4 p-4 bg-red-50 text-red-600 font-bold rounded-2xl border border-red-100 flex flex-col items-start justify-center gap-2 animate-in shake">
                        <div class="text-left text-sm leading-relaxed">${feedbackText}</div>
                    </div>`;

                const sound = document.getElementById('saiSound');
                if (sound) { sound.currentTime = 0; sound.play().catch(e => { }); }
            }
        }
    };

    const resetLTVC = function (id) {
        const container = document.getElementById(id);
        if (!container) return;
        container.querySelectorAll('.word').forEach(w => {
            w.classList.remove('selected', 'is-correct', 'is-wrong');
            w.style.backgroundColor = ''; w.style.color = ''; w.style.borderRadius = ''; w.style.padding = '';
        });
        container.querySelectorAll('.interactive-row, .sentence-box').forEach(r => {
            r.classList.remove('ring-4', 'ring-green-400', 'bg-green-50', 'ring-red-500', 'bg-red-50', 'sentence-locked', 'locked', 'bg-sky-50', 'ring-2', 'ring-sky-400');
        });
        container.querySelectorAll('input, select, textarea').forEach(el => {
            if (el.tagName === 'SELECT') el.selectedIndex = 0; else el.value = '';
        });
        const resultEl = document.getElementById('result-' + id) || document.getElementById('fb-' + id);
        if (resultEl) { resultEl.classList.add('hidden'); resultEl.innerHTML = ''; }
    };

    const corePulse = function () {
        window.evaluateLTVCE1 = evaluateLTVC;
        window.checkParagraph = evaluateLTVC;
        window.toggleSentence = toggleSentence;
        window.ltvc22_check1 = evaluateLTVC;
        window.resetLTVC = resetLTVC;
        window.toggleWord = function (el) { toggleSentence(el.closest('.sentence-box, .interactive-row'), { target: el }); };
        cleanResiduals();
    };

    setInterval(corePulse, 50);
    window.addEventListener('load', () => { cleanResiduals(); /* localStorage.clear(); sessionStorage.clear(); */ });
    window.forceRefresh = function () { /* localStorage.clear(); sessionStorage.clear(); */ window.location.reload(true); };
})();
