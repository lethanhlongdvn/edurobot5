// FINAL PATCH FOR LTVC AND 221-VIET SCORING - 2026-01-31 V9
console.log("LTVC Patch V9 Loaded: Defining submitLesson221VietData");

// --- 1. Define the specific handler expected by confirmSubmitQuiz for Lesson 221 Viet ---
window.submitLesson221VietData = async function (nameClient, clsClient, schoolClient) {
    console.log("submitLesson221VietData TRAPPED!");

    // Re-fetch to be safe (or use args)
    const name = nameClient || document.getElementById('studentName').value.trim();
    const cls = nameClient ? (clsClient || "5/1") : document.getElementById('studentClass').value;
    const school = nameClient ? (schoolClient || "Tiểu học") : document.getElementById('schoolSelect').value;

    const check = (typeof window.isValidStudentName === 'function')
        ? window.isValidStudentName(name)
        : { valid: !!name, msg: "Thiếu tên em ơi!" };

    if (!check.valid) {
        alert(check.msg);
        return;
    }

    // NEW: Blacklist Check
    if (typeof window.isBlacklisted === 'function' && await window.isBlacklisted()) {
        alert("Thiết bị của bạn đã bị CHẶN VĨNH VIỄN do nộp bài không nghiêm túc. Hãy liên hệ Giáo viên để được hỗ trợ.");
        return;
    }

    try {
        // Gather Data inline (Robust Mode: Count yellow stars)
        let ratings = {};
        let debugStars = [];
        if (document.querySelectorAll('.star-group').length > 0) {
            document.querySelectorAll('.star-group').forEach(group => {
                // Priority 1: Dataset rating (set by onClick)
                let val = parseInt(group.dataset.rating) || 0;

                // Priority 2: Visual check (Count yellow stars)
                if (val === 0) {
                    val = group.querySelectorAll('.star-btn.text-yellow-400').length;
                }

                debugStars.push(`Row ${group.dataset.row}: ${val}`);
                ratings[`Row_${group.dataset.row}`] = val;
            });
        }
        console.log("Scoring Debug:", debugStars.join(","));

        const textA = document.getElementById('ai-write-3a')?.value || document.getElementById('viet-inputA')?.value || "";
        const textB = document.getElementById('ai-write-3b')?.value || document.getElementById('viet-inputB')?.value || "";

        // Calculate Score (Simple: Sum of stars)
        let totalStars = 0;
        let startCount = 0;
        Object.values(ratings).forEach(r => { totalStars += parseInt(r) || 0; startCount++; });

        // If user didn't rate anything, default to 3 criteria * 5 = 15 max
        if (startCount === 0) startCount = 3;

        const maxStars = startCount * 5;
        const finalScore = maxStars > 0 ? Math.round((totalStars / maxStars) * 10) : 0;
        console.log(`Final Score Calc: ${totalStars}/${maxStars} -> ${finalScore}`);

        const contentSummary = `[TỰ ĐÁNH GIÁ]\n- Các tiêu chí: ${Object.values(ratings).join(', ')}/5\n\n[BÀI VIẾT LẠI]\na) ${textA}\nb) ${textB}`;

        const slug = (str) => str.toLowerCase().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/\s+/g, '-');
        const docId = `${slug(name)}_${slug(cls)}_${Date.now()}`;

        const db = window.db || firebase.firestore();

        await db.collection("essays_v2").doc(docId).set({
            studentName: name,
            studentClass: cls,
            studentSchool: school,
            content: contentSummary,
            lessonTitle: (document.title || "") + " (Tự đánh giá)",
            deviceId: (typeof window.getDeviceId === 'function') ? window.getDeviceId() : 'unknown',
            aiFeedback: `Điểm tự đánh giá: ${finalScore}/10`,
            aiGrade: finalScore,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Chưa chấm",
            type: 'lesson_221_viet'
        });
        alert(`🎉 Nộp bài thành công!\nĐiểm tự đánh giá: ${finalScore}/10`);

        if (typeof closeStudentModal === 'function') closeStudentModal();
        if (typeof celebrate === 'function') celebrate();

    } catch (error) {
        console.error("221-Viet Submit Error:", error);
        alert("Có lỗi xảy ra: " + error.message);
    }
};

// --- Star Rating Helper (Global) ---
window.rateStar = function (btn, val) {
    const group = btn.closest('.star-group');
    if (group) {
        group.dataset.rating = val;
        const stars = group.querySelectorAll('.star-btn');
        stars.forEach((s, i) => {
            if (i < val) {
                s.classList.remove('text-gray-300');
                s.classList.add('text-yellow-400');
            } else {
                s.classList.add('text-gray-300');
                s.classList.remove('text-yellow-400');
            }
        });
    }
};

// --- 2. Override handleSubmission for LTVC Full support ---
window.addEventListener('load', function () {
    console.log("LTVC Patch: Hooking handleSubmission");
    const originalHandleSubmission = window.handleSubmission;

    window.handleSubmission = async function () {
        if (window.currentSubmissionType === 'ltvc_full') {
            console.log("LTVC Patch: Handling ltvc_full submission");
            const name = document.getElementById('studentName').value.trim();
            const cls = document.getElementById('studentClass').value;
            const schoolSel = document.getElementById('schoolSelect').value;
            const schoolOther = document.getElementById('otherSchool').value.trim();
            const school = schoolSel === 'Khác' ? schoolOther : schoolSel;

            const check = (typeof window.isValidStudentName === 'function')
                ? window.isValidStudentName(name)
                : { valid: !!name, msg: "Thiếu tên em ơi!" };

            if (!check.valid) {
                alert(check.msg);
                return;
            }

            const btn = document.querySelector('#studentInfoContent button:last-child');
            if (btn) { btn.innerHTML = "⏳ Đang gửi..."; btn.disabled = true; }

            try {
                // Determine Data Source
                let d = window.currentLTVCData;
                if (!d && window.ltvcFullData) d = window.ltvcFullData;

                if (!d) {
                    // Try to rescue by calling submitFullLessonLTVC with dummy ID if needed, or error out
                    console.warn("Missing LTVC Data, attempting generic gather...");
                    // (Minimal Gather Logic could go here, but let's assume submitFullLessonLTVC was called)
                    throw new Error("Dữ liệu chưa được thu thập (currentLTVCData is missing).");
                }

                // Calculate Weighted Scores
                const score1a = d.ex1a.total > 0 ? (d.ex1a.score / d.ex1a.total) * 5 : 0;
                const score1b = d.ex1b.total > 0 ? (d.ex1b.score / d.ex1b.total) * 5 : 0;
                const score2 = d.ex2.total > 0 ? (d.ex2.score / d.ex2.total) * 10 : 0;
                const score3 = d.ex3.score;

                const totalWeighted = score1a + score1b + score2 + score3;
                const finalScore10 = Math.min(10, Math.round((totalWeighted / 30) * 10));

                const summary = `Bài 1a: ${Math.round(score1a * 10) / 10}/5đ, Bài 1b: ${Math.round(score1b * 10) / 10}/5đ, Bài 2: ${Math.round(score2 * 10) / 10}/10đ, Bài 3: ${score3}/10đ`;

                const slug = (str) => str.toLowerCase().replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a").replace(/\s+/g, '-');
                const docId = `${slug(name)}_${slug(cls)}_${Date.now()}`;

                const db = window.db || firebase.firestore();

                await db.collection("essays_v2").doc(docId).set({
                    studentName: name,
                    studentClass: cls,
                    studentSchool: school,
                    content: `[BÀI VIẾT]\n${d.ex3.content}\n\n[CHI TIẾT TRẮC NGHIỆM]\n${summary}`,
                    lessonTitle: (document.title || "").replace(" - EduRobot", "") + " (LTVC Full)",
                    deviceId: (typeof window.getDeviceId === 'function') ? window.getDeviceId() : 'unknown',
                    aiFeedback: d.ex3.feedback || "Chưa chấm EduRobot",
                    aiGrade: finalScore10,
                    rawScores: { ex1a: d.ex1a, ex1b: d.ex1b, ex2: d.ex2, ex3: d.ex3 },
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                    status: "Hoàn thành",
                    type: 'ltvc_full'
                });
                alert(`🎉 Nộp bài thành công! Điểm tổng kết: ${finalScore10}/10\n\n${summary}`);
                if (typeof closeStudentModal === 'function') closeStudentModal();
                if (typeof celebrate === 'function') celebrate();

            } catch (error) {
                console.error("LTVC Full Submit Error:", error);
                alert("Có lỗi xảy ra: " + error.message);
            } finally {
                if (btn) { btn.innerHTML = '<div class="w-6 h-6 bg-white rounded flex items-center justify-center text-rose-600 font-black text-[10px] shadow-sm">E</div> <span>NỘP BÀI</span>'; btn.disabled = false; }
            }
        }
        else if (window.currentSubmissionType === 'lesson_221_viet') {
            // Redundant fail-safe if somehow handleSubmission is called instead of submitLesson221VietData
            await window.submitLesson221VietData();
        } else {
            console.log("Original handleSubmission fallback");
            if (originalHandleSubmission) return originalHandleSubmission();
        }
    };
});
