/**
 * Firebase Manager for EduRobot
 * Handles Firestore data saving and Storage uploads
 */

// Placeholder Configuration - PLEASE UPDATE WITH REAL CREDENTIALS IN NETLIFY/LOCAL
const firebaseConfig = {
    apiKey: "AIzaSyC6zlWn8BKYU7P6A2-PYq6IIWOzaqJWFhc",
    authDomain: "gamhoctap.firebaseapp.com",
    projectId: "gamhoctap",
    storageBucket: "gamhoctap.firebasestorage.app",
    messagingSenderId: "833329613932",
    appId: "1:833329613932:web:0d8574827bcfe50b535c49"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
window.db = firebase.firestore();
window.storage = null;
try {
    if (firebase.storage) {
        window.storage = firebase.storage();
    } else {
        console.warn("Firebase Storage SDK not loaded.");
    }
} catch (e) {
    console.warn("Storage init skipped:", e);
}

/**
 * Standard Slugify for Document IDs
 */
window.getSlug = function (str) {
    if (!str) return "unknown";
    return str.toString().toLowerCase()
        .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
        .replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")
        .replace(/ì|í|ị|ỉ|ĩ/g, "i")
        .replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")
        .replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")
        .replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")
        .replace(/đ/g, "d")
        .replace(/[^a-z0-9]/g, "_")
        .replace(/_+/g, "_")
        .replace(/^_+|_+$/g, "");
};

/**
 * Global helper to get common student data
 */
function getStudentInfo() {
    let name = document.getElementById('studentName')?.value.trim();
    let cls = document.getElementById('studentClass')?.value;
    let schoolSelect = document.getElementById('schoolSelect')?.value;
    let otherSchool = document.getElementById('otherSchool')?.value.trim();

    // Fallback to localStorage if DOM elements don't provide it
    if (!name) name = localStorage.getItem('eduMathName') || "";
    if (!cls) cls = localStorage.getItem('eduMathClass') || "";
    if (!schoolSelect) schoolSelect = localStorage.getItem('eduMathSchool') || "";

    const school = schoolSelect === 'Khác' ? (otherSchool || localStorage.getItem('eduMathOtherSchool') || "") : schoolSelect;

    return { name, cls, school, schoolSelect };
}

/**
 * Handle Student Info Modal & LocalStorage
 */
let pendingSubmission = null; // Store submission data if modal needs to be shown

window.openStudentModal = function () {
    const { name, cls, schoolSelect } = getStudentInfo();

    const nameInput = document.getElementById('studentName');
    const classSelect = document.getElementById('studentClass');
    const schoolSel = document.getElementById('schoolSelect');
    const otherSchoolInput = document.getElementById('otherSchool');

    if (nameInput && name) nameInput.value = name;
    if (classSelect && cls) classSelect.value = cls;
    if (schoolSel && schoolSelect) {
        schoolSel.value = schoolSelect;
        if (schoolSelect === 'Khác') {
            document.getElementById('otherSchoolContainer').classList.remove('hidden');
            if (otherSchoolInput) otherSchoolInput.value = localStorage.getItem('eduMathOtherSchool') || "";
        }
    }

    const modal = document.getElementById('student-modal');
    const content = document.getElementById('student-modal-content');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => content.classList.replace('scale-95', 'scale-100'), 10);
};

window.closeStudentModal = function () {
    const modal = document.getElementById('student-modal');
    const content = document.getElementById('student-modal-content');
    content.classList.replace('scale-100', 'scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        pendingSubmission = null;
    }, 300);
};

window.saveStudentInfo = function () {
    const name = document.getElementById('studentName').value.trim();
    const cls = document.getElementById('studentClass').value;
    const schoolSel = document.getElementById('schoolSelect').value;
    const otherSchool = document.getElementById('otherSchool').value.trim();

    const check = window.isValidStudentName(name);
    if (!check.valid) {
        alert(check.msg);
        return;
    }
    if (!cls) {
        alert("Em hãy chọn Lớp của mình nhé!");
        return;
    }
    if (!schoolSel || (schoolSel === 'Khác' && !otherSchool)) {
        alert("Em hãy chọn hoặc nhập tên Trường nhé!");
        return;
    }

    localStorage.setItem('eduMathName', name);
    localStorage.setItem('eduMathClass', cls);
    localStorage.setItem('eduMathSchool', schoolSel);
    if (schoolSel === 'Khác') {
        localStorage.setItem('eduMathOtherSchool', otherSchool);
    }

    closeStudentModal();

    // Resume submission if there was one pending
    if (pendingSubmission) {
        window.submitMathLesson(
            pendingSubmission.content,
            pendingSubmission.score,
            pendingSubmission.btnId
        );
        pendingSubmission = null;
    } else {
        alert("Đã lưu thông tin! Bây giờ em có thể bấm Nộp Bài nhé.");
    }
};

/**
 * NEW: Device Fingerprinting for security
 */
window.getDeviceId = function () {
    let devId = localStorage.getItem('eduRobotDeviceId');
    if (!devId) {
        // Generate a simple unique ID
        devId = 'dev_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        localStorage.setItem('eduRobotDeviceId', devId);
    }
    return devId;
};

/**
 * NEW: Check if device is blacklisted
 */
window.isBlacklisted = async function () {
    const devId = window.getDeviceId();
    try {
        const doc = await db.collection("blacklisted_devices").doc(devId).get();
        return doc.exists;
    } catch (e) {
        console.error("Blacklist check failed:", e);
        return false;
    }
};

/**
 * NEW: Centralized Student Name Validator
 */
window.isValidStudentName = function (name) {
    if (!name || name.trim().length === 0) {
        return { valid: false, msg: "Em hãy điền Tên trước khi nộp nhé!" };
    }
    const trimmed = name.trim();
    const words = trimmed.split(/\s+/).filter(w => w.length > 0);

    // Rule 1: At least 3 words
    if (words.length < 3) {
        return { valid: false, msg: "Bạn cần nhập đầy đủ Họ và Tên (ít nhất 3 từ), lớp, trường để nộp bài nhé!" };
    }

    // Rule 2: No numbers only
    if (/^\d+$/.test(trimmed.replace(/\s/g, ''))) {
        return { valid: false, msg: "Tên không hợp lệ. Bạn cần nhập đầy đủ họ và tên thật nhé!" };
    }

    // Rule 3: Meaningless repetitive chars (4+ same chars in a row)
    if (/(.)\1{3,}/.test(trimmed.replace(/\s/g, ''))) {
        return { valid: false, msg: "Tên có vẻ không hợp lệ (lặp lại ký tự quá nhiều). Em hãy nhập tên thật nhé!" };
    }

    // Rule 4: Blacklist (Common Vietnamese vulgar terms)
    const blacklist = ['dm', 'vcl', 'clm', 'cc', 'cl', 'đm', 'vờ lờ', 'vl', 'đệt', 'đéo', 'cac', 'concac'];
    const lowerName = trimmed.toLowerCase();
    for (const term of blacklist) {
        if (lowerName.includes(term)) {
            return { valid: false, msg: "Tên chứa từ ngữ không phù hợp. Em hãy nhập lại tên thật nhé!" };
        }
    }

    return { valid: true };
};

/**
 * Submit main essay to Firestore (essays_v2)
 */
async function submitEssay(event) {
    const { name, cls, school } = getStudentInfo();
    const content = document.getElementById('ai-main-essay')?.value.trim();
    const lessonTitle = document.title.replace(" - EduRobot", "");

    // Use Centralized Validator
    const check = window.isValidStudentName(name);
    if (!check.valid) {
        alert(check.msg);
        return;
    }

    // NEW: Blacklist Check
    if (await window.isBlacklisted()) {
        alert("Thiết bị của em đã bị tạm khóa chức năng nộp bài do vi phạm quy định. Hãy liên hệ Thầy/Cô nhé!");
        return;
    }

    if (!cls) {
        alert("Em hãy điền Lớp trước khi nộp nhé!");
        return;
    }

    if (!content) {
        alert("Em hãy viết bài làm trước khi nộp nhé!");
        return;
    }

    const btn = event ? (event.currentTarget || event.target) : null;
    let originalText = "";
    if (btn) {
        originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<div class="w-4 h-4 bg-white rounded flex items-center justify-center text-blue-600 font-black text-[8px] shadow-sm animate-spin">E</div> <span>Đang gửi bài...</span>';
    }

    try {
        const docId = window.getSlug(`${name}_${cls}_${school}_${lessonTitle}`);
        await db.collection("essays_v2").doc(docId).set({
            studentName: name,
            studentClass: cls,
            studentSchool: school,
            content: content,
            lessonTitle: lessonTitle,
            deviceId: window.getDeviceId(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Chưa chấm",
            type: "essay"
        });

        alert("Tuyệt vời! Bài làm của em đã được gửi tới Thầy/Cô thành công.");
        if (typeof celebrate === 'function') celebrate();
        else if (typeof confetti === 'function') confetti();
    } catch (error) {
        console.error("Error submitting essay:", error);
        alert("Có lỗi xảy ra khi nộp bài. Em hãy thử lại nhé!\nChi tiết: " + error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    }
}

/**
 * Submit Math Lesson to Firestore (reuses essays_v2)
 */
window.submitMathLesson = async function (content, score, btnId) {
    const { name, cls, school } = getStudentInfo();

    // If info is missing, prompt user
    if (!name || !cls || !school) {
        pendingSubmission = { content, score, btnId };
        window.openStudentModal();
        return;
    }

    // Verify name
    const check = window.isValidStudentName(name);
    if (!check.valid) {
        pendingSubmission = { content, score, btnId };
        alert(check.msg);
        window.openStudentModal();
        return;
    }

    // Blacklist Note
    if (await window.isBlacklisted()) {
        alert("Thiết bị của em đã bị tạm khóa chức năng nộp bài do vi phạm quy định. Hãy liên hệ Thầy/Cô nhé!");
        return;
    }

    const btn = document.getElementById(btnId);
    let originalText = "";
    if (btn) {
        originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<div class="w-5 h-5 bg-white rounded flex items-center justify-center text-emerald-600 font-black text-[10px] shadow-sm animate-spin mr-2">O</div> Gửi dữ liệu...';
    }

    try {
        const lessonTitle = document.title.replace(" - EduRobot", "");
        const docId = window.getSlug(`${name}_${cls}_${school}_${lessonTitle}_${Date.now()}`);

        // Lưu vào diem_tieng_viet_lop5 cho Trắc nghiệm (đồng bộ với Teacher.html)
        if (typeof content === 'string' && content.includes("Trắc nghiệm tổng:")) {
            await db.collection("diem_tieng_viet_lop5").doc(docId).set({
                studentName: name,
                studentClass: cls,
                school: school, // Tương thích ngược với teacher.html
                studentSchool: school, // Tương thích mới
                score: parseInt(score) || 0,
                totalQuestions: 10,
                correctCount: (parseInt(score) || 0) / 10,
                lessonTitle: lessonTitle,
                deviceId: window.getDeviceId(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                subject: "Toán học"
            });
        } else {
            // Mặc định lưu vào bài tự luận Toán học
            await db.collection("essays_v2").doc(docId).set({
                studentName: name,
                studentClass: cls,
                studentSchool: school,
                content: content,
                lessonTitle: lessonTitle,
                aiScore: score, // Store parsed score
                deviceId: window.getDeviceId(),
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                status: "Chưa chấm",
                subject: "Toán học",
                type: "math_lesson"
            });
        }

        alert("Tuyệt vời! Kết quả đã được gửi tới Thầy/Cô thành công.");
        pendingSubmission = null; // Clear pending
        if (typeof confetti === 'function') confetti();
    } catch (error) {
        console.error("Error submitting:", error);
        alert("Có lỗi xảy ra khi nộp. Em hãy thử lại nhé!\n" + error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    }
};

/**
 * Submit Project (Tab 2) to Firestore & Storage
 */
async function submitProject(projectId, projectTitle) {
    const { name, cls, school } = getStudentInfo();
    const content = document.getElementById(`project-desc-${projectId}`)?.value.trim() || "";
    const fileInput = document.getElementById(`project-file-${projectId}`);
    const lessonTitle = document.title.replace(" - EduRobot", "");

    const check = window.isValidStudentName(name);
    if (!check.valid) {
        alert(check.msg);
        return;
    }

    // NEW: Blacklist Check
    if (await window.isBlacklisted()) {
        alert("Thiết bị của em đã bị tạm khóa chức năng nộp bài do vi phạm quy định. Hãy liên hệ Thầy/Cô nhé!");
        return;
    }

    if (!cls) {
        alert("Em hãy điền Lớp trước nhé!");
        return;
    }

    const btn = event ? (event.currentTarget || event.target) : null;
    let originalText = "";
    if (btn) {
        originalText = btn.innerHTML;
        btn.disabled = true;
        btn.innerHTML = '<div class="w-4 h-4 bg-white rounded flex items-center justify-center text-blue-600 font-black text-[8px] shadow-sm animate-spin">E</div> <span>Đang tải lên...</span>';
    }

    let fileUrl = "";

    try {
        // Upload file if exists
        if (fileInput && fileInput.files[0]) {
            const file = fileInput.files[0];
            const storageRef = storage.ref(`projects/${Date.now()}_${file.name}`);
            const snapshot = await storageRef.put(file);
            fileUrl = await snapshot.ref.getDownloadURL();
        }

        const docId = window.getSlug(`${name}_${cls}_${school}_${lessonTitle}_${projectId}`);
        await db.collection("projects").doc(docId).set({
            studentName: name,
            studentClass: cls,
            studentSchool: school,
            content: content,
            fileUrl: fileUrl,
            projectType: projectTitle,
            lessonTitle: lessonTitle,
            deviceId: window.getDeviceId(),
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            status: "Đã nộp"
        });

        alert("Dự án của em đã được gửi tới Thầy/Cô thành công! Chờ Thầy/Cô nhận xét nhé.");
        if (typeof celebrate === 'function') celebrate();
        else if (typeof confetti === 'function') confetti();
    } catch (error) {
        console.error("Error submitting project:", error);
        alert("Lỗi khi gửi dự án. Em hãy thử lại nhé!\nChi tiết: " + error.message);
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    }
}

/**
 * Load Teacher Feedback
 */
function checkTeacherFeedback() {
    const { name } = getStudentInfo();
    const lessonTitle = document.title.replace(" - EduRobot", "");
    if (!name) return;

    db.collection("essays_v2")
        .where("studentName", "==", name)
        .where("lessonTitle", "==", lessonTitle)
        .orderBy("timestamp", "desc")
        .limit(1)
        .onSnapshot((snapshot) => {
            snapshot.forEach(doc => {
                const data = doc.data();
                if (data.teacherFeedback) {
                    displayTeacherFeedback(data.teacherFeedback, data.teacherGrade);
                }
            });
        });
}

function displayTeacherFeedback(message, grade) {
    const container = document.getElementById('teacher-feedback-box');
    if (!container) return;

    container.classList.remove('hidden');
    container.innerHTML = `
        <div class="p-6 bg-blue-50 border-2 border-blue-200 rounded-[32px] shadow-sm animate-bounce-subtle">
            <h4 class="text-blue-700 font-black text-sm uppercase mb-3 flex items-center">
                <span class="mr-2">👩‍🏫</span> Lời khen từ Thầy/Cô
            </h4>
            <p class="text-gray-700 font-bold serif-font italic text-lg leading-relaxed mb-4">"${message}"</p>
            <div class="flex justify-end">
                <span class="bg-blue-600 text-white px-4 py-2 rounded-xl font-black text-xl shadow-lg">
                    Điểm của Thầy/Cô: ${grade}/10
                </span>
            </div>
        </div>
    `;
}

// Global functions for UI interaction (if not inline)
window.checkSchool = function () {
    const select = document.getElementById('schoolSelect');
    const otherInput = document.getElementById('otherSchool');
    if (select && otherInput) {
        if (select.value === 'Khác') {
            otherInput.classList.remove('hidden');
        } else {
            otherInput.classList.add('hidden');
        }
    }
};
