// --- CONFIGURATION ---
window.AI_API_URL = window.AI_API_URL || 'https://tiengviet5.netlify.app/.netlify/functions/chat';
const API_ENDPOINT = window.AI_API_URL;
console.log('AI Grader using endpoint:', API_ENDPOINT);

// --- DATA & STATE ---
let graderCurriculumData = null;

async function loadCurriculumData() {
    if (graderCurriculumData) return graderCurriculumData;
    try {
        const response = await fetch('/data/du_lieu_giang_day.json');
        if (response.ok) {
            graderCurriculumData = await response.json();
            console.log('✅ Đã tải dữ liệu giảng dạy thành công');
        }
    } catch (e) {
        console.warn('⚠️ Không tải được dữ liệu giảng dạy:', e);
    }
    return graderCurriculumData;
}

// Tìm kiến thức theo tuần học
function getCurriculumByWeek(weekNumber) {
    if (!graderCurriculumData) return null;

    const weekStr = `Tuần ${weekNumber}`;

    // Tìm trong Học kỳ 1
    for (const [key, value] of Object.entries(graderCurriculumData["Học kỳ 1"] || {})) {
        if (key.includes(weekStr) || key === weekStr) {
            return { ...value, tuanHoc: key, hocKy: 1 };
        }
    }

    // Tìm trong Học kỳ 2
    for (const [key, value] of Object.entries(graderCurriculumData["Học kỳ 2"] || {})) {
        if (key.includes(weekStr) || key === weekStr) {
            return { ...value, tuanHoc: key, hocKy: 2 };
        }
    }

    return null;
}

// Tạo ngữ cảnh giảng dạy từ curriculum
function buildCurriculumContext(weekNumber) {
    const data = getCurriculumByWeek(weekNumber);
    if (!data) return "";

    return `
📚 KIẾN THỨC TUẦN ${weekNumber} (Chương trình Kết nối tri thức):
- Tên bài: ${data["Tên bài"]}
- Nội dung: ${data["Nội dung"]}
- Kiến thức cần đánh giá: ${data["Kiến thức"]}

Hãy chấm bài dựa trên kiến thức này.
`;
}

// ============================================================================
// DỮ LIỆU VIẾT VĂN THEO CHƯƠNG TRÌNH KẾT NỐI TRI THỨC LỚP 5
// ============================================================================
let writingCurriculumData = null;

async function loadWritingCurriculumData() {
    if (writingCurriculumData) return writingCurriculumData;
    try {
        const response = await fetch('/data/du_lieu_viet_van.json');
        if (response.ok) {
            writingCurriculumData = await response.json();
            console.log('✅ Đã tải dữ liệu Viết văn thành công');
        }
    } catch (e) {
        console.warn('⚠️ Không tải được dữ liệu Viết văn:', e);
    }
    return writingCurriculumData;
}

// Tìm kiến thức Viết văn theo tuần học
function getWritingCurriculumByWeek(weekNumber) {
    if (!writingCurriculumData) return null;

    // Tìm trong Học kỳ 1
    for (const [key, value] of Object.entries(writingCurriculumData["Học_ky_1"] || {})) {
        const weekRange = key.match(/\d+/g);
        if (weekRange) {
            const start = parseInt(weekRange[0]);
            const end = weekRange[1] ? parseInt(weekRange[1]) : start;
            if (weekNumber >= start && weekNumber <= end) {
                return { ...value, tuanHoc: key, hocKy: 1 };
            }
        }
    }

    // Tìm trong Học kỳ 2
    for (const [key, value] of Object.entries(writingCurriculumData["Học_ky_2"] || {})) {
        const weekRange = key.match(/\d+/g);
        if (weekRange) {
            const start = parseInt(weekRange[0]);
            const end = weekRange[1] ? parseInt(weekRange[1]) : start;
            if (weekNumber >= start && weekNumber <= end) {
                return { ...value, tuanHoc: key, hocKy: 2 };
            }
        }
    }

    return null;
}

// Xây dựng ngữ cảnh Viết văn cho AI
function buildWritingContext(weekNumber) {
    const data = getWritingCurriculumByWeek(weekNumber);
    if (!data) return "";

    let context = `
📝 KIẾN THỨC VIẾT VĂN TUẦN ${weekNumber} (Chương trình Kết nối tri thức):
- Thể loại: ${data["Thể_loại"] || "Không xác định"}`;

    if (data["Đối_tượng"]) context += `\n- Đối tượng: ${data["Đối_tượng"]}`;
    if (data["Trọng_tâm"]) context += `\n- Trọng tâm: ${data["Trọng_tâm"]}`;
    if (data["Kỹ_thuật"]) context += `\n- Kỹ thuật: ${data["Kỹ_thuật"]}`;
    if (data["Bố_cục"]) context += `\n- Bố cục: ${data["Bố_cục"]}`;
    if (data["Yêu_cầu"]) context += `\n- Yêu cầu: ${data["Yêu_cầu"]}`;
    if (data["Hình_thức"]) context += `\n- Hình thức: ${data["Hình_thức"]}`;

    context += `

📊 TIÊU CHÍ CHẤM ĐIỂM VĂN:
1. Đúng thể loại (4đ): Bài viết có đúng yêu cầu không?
2. Cảm xúc & Hình ảnh (3đ): Có sử dụng biện pháp tu từ (so sánh, nhân hóa) không?
3. Cấu trúc (2đ): Có đủ Mở - Thân - Kết bài không?
4. Sáng tạo (1đ): Có chi tiết mới lạ hoặc cách diễn đạt độc đáo không?

📌 PHƯƠNG PHÁP NHẬN XÉT:
- Không chỉ nói "Sai", hãy gợi ý cách viết tốt hơn.
- Ví dụ: Thay vì "Cánh đồng xanh", gợi ý "Cánh đồng khoác lên mình chiếc áo màu xanh mướt mải".
- Kiểm tra tính logic của các đoạn văn và sự liên kết giữa các câu.
`;

    return context;
}

// Load curriculum on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCurriculumData();
    loadWritingCurriculumData();
});

async function askAI(id, prefix = "", mode = "single", persona = "auto", weekNumber = null, customContent = null) {
    const feedback = document.getElementById('fb-' + id);
    let userInput = "";

    // Đảm bảo đã tải dữ liệu giảng dạy
    await loadCurriculumData();
    await loadWritingCurriculumData();

    // Lấy ngữ cảnh curriculum nếu có tuần học (sẽ xác định sau khi biết persona)
    let curriculumContext = "";

    // Determine persona based on checking context if "auto"
    if (persona === "auto") {
        const lowerPrefix = prefix.toLowerCase();
        if (lowerPrefix.includes("câu ghép") || lowerPrefix.includes("từ nối") ||
            lowerPrefix.includes("quan hệ từ") || lowerPrefix.includes("vế câu") ||
            lowerPrefix.includes("dấu câu") || lowerPrefix.includes("kết từ") ||
            lowerPrefix.includes("thay cho") || lowerPrefix.includes("điền") ||
            (lowerPrefix.includes("...") && lowerPrefix.length < 100)) {
            persona = "ltvc"; // Grammar Teacher
        } else {
            persona = "tlv";  // Creative Writing Teacher
        }
    }

    // Xây dựng ngữ cảnh curriculum dựa trên persona
    if (weekNumber) {
        if (persona === "ltvc") {
            curriculumContext = buildCurriculumContext(weekNumber);
        } else {
            curriculumContext = buildWritingContext(weekNumber);
        }
    }

    if (customContent) {
        userInput = customContent;
    } else if (mode === "table") {
        const q1 = document.getElementById(`ai-${id}-q1`)?.value?.trim() || "";
        const q2 = document.getElementById(`ai-${id}-q2`)?.value?.trim() || "";
        const q3 = document.getElementById(`ai-${id}-q3`)?.value?.trim() || "";

        if (!q1 && !q2 && !q3) {
            alert("Bạn hãy điền thông tin vào bảng trước nhé!");
            return;
        }
        userInput = `1. Nhân vật: ${q1}\n2. Từ ngữ nổi bật: ${q2}\n3. Chi tiết ấn tượng: ${q3}`;
    } else {
        const input = document.getElementById('ai-' + id);
        if (!input) {
            userInput = prefix; // Fallback to prefix if input missing (prefix might contain the whole thing)
        } else {
            userInput = input.value.trim();
        }

        if (!userInput && !prefix) {
            alert("Bạn hãy viết câu trước nhé!");
            return;
        }
    }

    const wordCount = userInput.split(/\s+/).filter(w => w.length > 0).length;
    const sentence = userInput; // Chỉ gửi bài làm của học sinh làm text chính

    // UI: Loading state with Persona
    const teacherName = persona === "ltvc" ? "Thầy E (Ngữ pháp)" : "Thầy E (Tập làm văn)";
    feedback.classList.remove('hidden');
    feedback.innerHTML = `
        <div class="flex items-center space-x-2 p-4 bg-purple-50 rounded-xl border border-purple-200">
            <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs shadow-sm mr-2 shrink-0">E</div>
            <span class="font-bold text-purple-800">${teacherName} đang chấm bài...</span>
        </div>
    `;

    // SIMULATION MODE: Set to false to use REAL AI
    const isMockable = false;

    if (isMockable) {
        setTimeout(() => {
            const mockData = generateMockResponse(userInput, persona, prefix);
            renderFeedback(feedback, mockData);
            if (typeof celebrate === 'function' && mockData.grade >= 8) celebrate();
        }, 1500);
        return;
    }

    try {
        // Xây dựng prompt với ngữ cảnh curriculum và prefix hướng dẫn
        let systemNote = "";
        if (persona === "ltvc") {
            systemNote = "Bạn là chuyên gia Ngữ pháp Tiếng Việt. Đây là bài tập về Luyện từ và câu (LTVC), yêu cầu trả lời ngắn gọn một vấn đề ngữ pháp. ĐỪNG yêu cầu cấu trúc Mở bài/Thân bài/Kết bài.";
        }

        const fullPrompt = `${curriculumContext} \n${systemNote} \n\n🎯 HƯỚNG DẪN CHẤM: ${prefix} \n\n📝 BÀI LÀM CỦA BẠN: \n"${userInput}"`;

        const response = await fetch('https://tiengviet5.netlify.app/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sentence: fullPrompt,
                weekNumber: weekNumber,
                persona: persona
            })
        });

        if (!response.ok) {
            throw new Error(`Lỗi kết nối(${response.status})`);
        }

        const data = await response.json();
        // Ensure persona is set for rendering
        if (!data.persona) data.persona = persona;
        data.word_count = wordCount; // Override word_count để hiển thị đúng thực tế
        renderFeedback(feedback, data);
        const gradeNum = parseFloat(data.diem) || data.grade || 0;
        if (typeof celebrate === 'function' && gradeNum >= 8) celebrate();

    } catch (error) {
        console.warn('AI API failed, falling back to simulation:', error);

        // FALLBACK SIMULATION using the SAME logic as the mock mode
        setTimeout(() => {
            const mockData = generateMockResponse(userInput, persona, prefix);
            renderFeedback(feedback, mockData);
            if (typeof celebrate === 'function' && mockData.grade >= 8) celebrate();
        }, 1000);
    }
}

function generateMockResponse(userInput, persona, prefix = "") {
    const lowerInput = userInput.toLowerCase();
    const length = userInput.length;
    const wordCount = userInput.split(' ').length;
    let mockData;

    if (persona === "ltvc") { // --- GRAMMAR TEACHER ---
        // Detect requirements from prefix
        const lowerPrefix = prefix.toLowerCase();
        let targetConnectors = [];
        let requirementDesc = "từ nối phù hợp";

        // Group 1: Cause-Effect (Vì, Bởi, Do, Nhờ)
        if (lowerPrefix.includes("vì") || lowerPrefix.includes("bởi") || lowerPrefix.includes("do") || lowerPrefix.includes("nhờ") || lowerPrefix.includes("nguyên nhân")) {
            targetConnectors.push('vì', 'bởi', 'do', 'nhờ', 'nên', 'mà');
            requirementDesc = "quan hệ Nguyên nhân - Kết quả (Vì... nên..., Nhờ... mà...)";
        }

        // Group 2: Condition-Result (Nếu, Hễ, Giá)
        if (lowerPrefix.includes("nếu") || lowerPrefix.includes("hễ") || lowerPrefix.includes("giá") || lowerPrefix.includes("điều kiện")) {
            targetConnectors.push('nếu', 'hễ', 'giá', 'thì');
            requirementDesc = "quan hệ Điều kiện - Kết quả (Nếu... thì..., Hễ... thì...)";
        }

        // Group 3: Contrast (Tuy, Dù, Mặc dù)
        if (lowerPrefix.includes("tuy") || lowerPrefix.includes("dù") || lowerPrefix.includes("mặc dù") || lowerPrefix.includes("nhưng") || lowerPrefix.includes("tương phản")) {
            targetConnectors.push('tuy', 'dù', 'mặc dù', 'nhưng');
            requirementDesc = "quan hệ Tương phản (Tuy... nhưng...)";
        }

        // Group 4: Progression (Chẳng những, Không những)
        if (lowerPrefix.includes("không những") || lowerPrefix.includes("chẳng những") || lowerPrefix.includes("tăng tiến")) {
            targetConnectors.push('không những', 'chẳng những', 'mà còn', 'lại còn');
            requirementDesc = "quan hệ Tăng tiến (Chẳng những... mà còn...)";
        }

        // Group 5: Correlative (Hô ứng: vừa... đã..., càng... càng...)
        if (lowerPrefix.includes("hô ứng") || lowerPrefix.includes("vừa") || lowerPrefix.includes("càng") || lowerPrefix.includes("bao nhiêu") || lowerPrefix.includes("bấy nhiêu")) {
            targetConnectors.push('vừa', 'đã', 'càng', 'bao nhiêu', 'bấy nhiêu', 'đâu', 'đấy', 'nào', 'nấy');
            requirementDesc = "cặp từ hô ứng (Vừa... đã..., Càng... càng...)";
        }

        // Group 6: Repetition/Linkage explanation (Phép lặp/Liên kết)
        if (lowerPrefix.includes("lặp") || lowerPrefix.includes("liên kết") || lowerPrefix.includes("tác dụng")) {
            targetConnectors.push('lặp', 'liên kết', 'nối', 'giúp', 'tác dụng');
            requirementDesc = "giải thích về phép lặp hoặc liên kết câu";
        }


        // Fallback if no specific requirements detected
        if (targetConnectors.length === 0) {
            targetConnectors = ['vì', 'nên', 'tuy', 'nhưng', 'nếu', 'thì', 'chẳng những', 'mà còn', 'vừa', 'đã', 'bởi', 'do', 'nhờ', 'mà'];
            requirementDesc = "cặp quan hệ từ";
        }

        const foundConnectors = targetConnectors.filter(c => lowerInput.includes(c));
        const hasConnectors = foundConnectors.length >= 1;

        if (length < 20) {
            mockData = {
                status: "incomplete", diem: "Chưa đạt", grade: 4,
                uu_diem: "Bạn đã bắt đầu làm bài.",
                loi_sai: "Câu quá ngắn, chưa đủ thành phần.",
                huong_dan: "Bạn hãy viết câu ghép hoàn chỉnh (có 2 vế câu) nhé.",
                missing_parts: ["Vế câu"], word_count: wordCount,
                persona: "ltvc"
            };
        } else if (!hasConnectors) {
            mockData = {
                status: "incomplete", diem: "Sai yêu cầu", grade: 6,
                uu_diem: "Câu văn rõ nghĩa.",
                loi_sai: `Chưa đúng yêu cầu về ${requirementDesc}.`,
                huong_dan: `Đề bài yêu cầu dùng ${requirementDesc}. Bạn thử lại nhé!`,
                missing_parts: ["Từ nối đúng loại"], word_count: wordCount,
                persona: "ltvc"
            };
        } else {
            mockData = {
                status: "complete", diem: "10/10", grade: 10,
                uu_diem: `Chính xác! Bạn đã sử dụng đúng ${requirementDesc}.`,
                loi_sai: "Không có.",
                huong_dan: "Câu ghép của bạn rất chuẩn xác. Giỏi lắm!",
                word_count: wordCount,
                analysis: { mo_bai: "Đúng ngữ pháp", than_bai: "Đủ vế câu", ket_bai: "Đúng từ nối yêu cầu" },
                persona: "ltvc"
            };
        }
    } else { // --- CREATIVE WRITING TEACHER ---
        const adjectives = ['xanh', 'đẹp', 'cao', 'rộng', 'mênh mông', 'lung linh', 'rực rỡ', 'lấp lánh', 'vui', 'buồn', 'nhớ', 'thương'];
        const foundAdj = adjectives.filter(a => lowerInput.includes(a));
        const isShort = length < 50;

        if (isShort) {
            mockData = {
                status: "incomplete", diem: "Viết thêm nhé", grade: 5,
                uu_diem: "Bạn đã có ý tưởng.",
                loi_sai: "Đoạn văn hơi ngắn.",
                huong_dan: "Bạn hãy miêu tả kỹ hơn để bài văn sinh động hơn nhé (tối thiểu 50 ký tự).",
                missing_parts: ["Chi tiết miêu tả"], word_count: wordCount,
                persona: "tlv"
            };
        } else if (foundAdj.length < 1) {
            mockData = {
                status: "complete", diem: "8/10", grade: 8,
                uu_diem: "Bài viết mạch lạc, đủ ý.",
                loi_sai: "Hơi ít từ ngữ gợi tả.",
                huong_dan: "Hệ thống gợi ý bạn thêm các từ chỉ màu sắc, cảm xúc vào bài nhé. Xưng hô là 'bạn'.",
                word_count: wordCount,
                persona: "tlv"
            };
        } else {
            mockData = {
                status: "complete", diem: "9.5/10", grade: 9.5,
                uu_diem: "Bài viết giàu hình ảnh, cảm xúc.",
                loi_sai: "Không có lỗi lớn.",
                huong_dan: "Hệ thống rất thích cách bạn dùng từ ngữ miêu tả. Bài làm rất tốt!",
                word_count: wordCount,
                analysis: { mo_bai: "Hấp dẫn", than_bai: "Chi tiết", ket_bai: "Cảm xúc" },
                persona: "tlv"
            };
        }
    }

    // Default analysis if missing
    if (!mockData.analysis) {
        mockData.analysis = {
            mo_bai: persona === "ltvc" ? "Đúng chủ đề" : "Mở bài",
            than_bai: persona === "ltvc" ? "Đúng cấu trúc" : "Thân bài",
            ket_bai: persona === "ltvc" ? "Hoàn chỉnh" : "Kết bài"
        };
    }

    return mockData;
}

function renderFeedback(container, data) {
    const isComplete = data.status === "complete";
    const missingParts = data.missing_parts || [];
    const wordCount = data.word_count || 0;
    const persona = data.persona || "tlv";

    let labels = {
        mo_bai: "Mở bài",
        than_bai: "Thân bài",
        ket_bai: "Kết bài"
    };

    // Yêu cầu độ dài khác nhau theo persona
    let wordCountRequirement = "";
    if (persona === "ltvc") {
        labels = {
            mo_bai: "Ngữ pháp",
            than_bai: "Thành phần",
            ket_bai: "Kết nối"
        };
        wordCountRequirement = `Độ dài: ${wordCount} từ(Viết câu hoàn chỉnh)`;
    } else if (persona === "paragraph") {
        labels = {
            mo_bai: "Mở đoạn",
            than_bai: "Thân đoạn",
            ket_bai: "Kết đoạn"
        };
        wordCountRequirement = `Độ dài: ${wordCount} từ(Yêu cầu: 3 - 5 câu)`;
    } else {
        wordCountRequirement = `Độ dài: ${wordCount} từ(Yêu cầu: > 50 từ)`;
    }

    let html = `
        <div class="space-y-4 animate-in fade-in duration-500">
            <!--Summary Header-->
            <div class="p-6 ${isComplete ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'} rounded-[32px] border-2 shadow-sm relative overflow-hidden">
                <div class="flex justify-between items-start">
                    <div>
                        <h5 class="font-black ${isComplete ? 'text-green-700' : 'text-orange-700'} uppercase text-[10px] mb-2 tracking-widest flex items-center">
                            <span class="mr-2">${isComplete ? '✅' : '⚠️'}</span> Trạng thái bài làm
                        </h5>
                        <p class="text-xl font-black ${isComplete ? 'text-green-900' : 'text-orange-900'}">
                            ${isComplete ? 'Chúc mừng! Bài làm đã đạt yêu cầu.' : 'Bài làm cần hoàn thiện thêm.'}
                        </p>
                        <p class="text-sm font-bold opacity-70 mt-1">${wordCountRequirement}</p>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] font-black uppercase opacity-40 block mb-1">Điểm hệ thống E tạm tính</span>
                        <span class="text-4xl font-black ${isComplete ? 'text-green-600' : 'text-orange-600'}">${data.diem || "?/10"}</span>
                    </div>
                </div>
                ${!isComplete && missingParts.length > 0 ? `
                    <div class="mt-4 flex flex-wrap gap-2">
                        <span class="text-xs font-bold text-orange-800">Cần bổ sung:</span>
                        ${missingParts.map(p => `<span class="px-3 py-1 bg-white/50 rounded-full text-[10px] font-black text-orange-600 border border-orange-200">${p}</span>`).join('')}
                    </div>
                ` : ''}
            </div>

            <!--Detailed Analysis parts(Hidden for LTVC) -->
        ${persona !== 'ltvc' ? `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${['mo_bai', 'than_bai', 'ket_bai'].map(part => {
        const partLabel = labels[part];
        const partContent = data.analysis ? data.analysis[part] : null;
        const isMissing = missingParts.includes(partLabel);
        return `
                        <div class="p-4 rounded-2xl border ${isMissing ? 'bg-gray-50 border-gray-100 opacity-50' : 'bg-white border-blue-100 shadow-sm'}">
                            <h6 class="text-[10px] font-black ${isMissing ? 'text-gray-400' : 'text-blue-500'} uppercase tracking-widest mb-2">${partLabel}</h6>
                            <p class="text-xs font-bold leading-relaxed text-gray-600">
                                ${isMissing ? '<i>Chưa có nội dung...</i>' : partContent || 'Đã ghi nhận.'}
                            </p>
                        </div>
                    `;
    }).join('')}
            </div>
            ` : ''
        }

            <!--Feedback Sections-->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-5 bg-blue-50/50 rounded-2xl border border-blue-100">
                    <h5 class="font-black text-blue-700 uppercase text-[10px] mb-3 tracking-widest">✨ Điểm sáng</h5>
                    <p class="text-sm text-gray-700 font-bold leading-relaxed">${data.uu_diem || "Bài làm có cố gắng."}</p>
                </div>
                <div class="p-5 bg-amber-50/50 rounded-2xl border border-amber-100">
                    <h5 class="font-black text-amber-700 uppercase text-[10px] mb-3 tracking-widest">🔧 Cần cải thiện</h5>
                    <p class="text-sm text-gray-700 font-bold leading-relaxed">${data.loi_sai || "Chú ý diễn đạt mạch lạc hơn."}</p>
                </div>
            </div>

            <!--Teacher Note & Action-->
        <div class="p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[32px] text-white shadow-xl relative overflow-hidden">
            <div class="relative z-10">
                <h5 class="font-black uppercase text-[10px] mb-3 tracking-widest opacity-80">💡 Hướng dẫn hệ thống</h5>
                <p class="serif-font text-lg italic font-bold leading-relaxed mb-6">"${data.huong_dan || data.loi_nhan || "Cố gắng lên nhé!"}"</p>

                ${!isComplete ? `
                        <button onclick="continueWriting('${data.huong_dan || ''}')" 
                                class="w-full bg-white text-blue-700 font-black py-4 rounded-2xl shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-3">
                            <span>✍️</span> TIẾP TỤC LÀM BÀI
                        </button>
                    ` : `
                        <div class="flex items-center gap-3 text-green-300 font-black uppercase text-xs">
                            <span class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">✓</span>
                            Bài làm đã hoàn thành, bạn có thể nộp bài ngay!
                        </div>
                    `}
            </div>
        </div>
        </div>
        `;

    container.innerHTML = html;
}

function continueWriting(hint) {
    const textarea = document.getElementById('ai-main-essay') || document.getElementById('ai-final');
    if (!textarea) return;

    // Scroll to textarea
    textarea.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Set focus
    setTimeout(() => {
        textarea.focus();
        // Add a visual hint if needed
        if (hint) {
            const hintBoxId = 'ai-writing-hint';
            let hintBox = document.getElementById(hintBoxId);
            if (!hintBox) {
                hintBox = document.createElement('div');
                hintBox.id = hintBoxId;
                hintBox.className = "mt-2 p-3 bg-blue-50 border-2 border-blue-200 rounded-xl text-blue-700 text-xs font-bold animate-pulse";
                textarea.parentNode.appendChild(hintBox);
            }
            hintBox.innerHTML = `🌟 <b>Gợi ý của Thầy:</b> ${hint} `;
        }
    }, 500);
}

// Expose globally
window.askAI = askAI;

/**
 * Chấm điểm đoạn văn theo cấu trúc: Mở đoạn - Thân đoạn - Kết đoạn
 * @param {string} studentText - Bài làm của học sinh
 * @param {string} requirements - Yêu cầu của đề bài (VD: Viết đoạn văn tả người...)
 * @param {number} weekNumber - Tuần học để lấy ngữ cảnh (tùy chọn)
 */
async function gradeParagraph(studentText, requirements, weekNumber = null) {
    // 1. Loading State (nếu có element hiển thị)
    // Hàm này trả về data, việc hiển thị UI do nơi gọi hàm xử lý

    // 2. Load context
    await loadCurriculumData();
    await loadWritingCurriculumData();
    let context = "";
    if (weekNumber) {
        context = buildWritingContext(weekNumber);
    }

    // 3. Build Prompt
    const prompt = `
    ${context}
    
    🎯 YÊU CẦU ĐỀ BÀI: ${requirements}
    
    📝 BÀI LÀM CỦA BẠN:
    "${studentText}"
    
    👮 YÊU CẦU CHẤM:
    Bạn là giáo viên Tiếng Việt lớp 5. Hãy phân tích và chấm điểm đoạn văn trên.
    Đoạn văn cần có đủ 3 phần:
    1. Câu mở đoạn(Giới thiệu đối tượng)
    2. Các câu thân đoạn(Miêu tả / Kể chi tiết)
    3. Câu kết đoạn(Cảm nghĩ / Nhận xét)

    Hãy trả về kết quả dưới dạng JSON(Chỉ JSON, không markdown) theo mẫu:
    {
        "parts": {
            "open": { "text": "Trích câu mở đoạn (nếu có, không thì để null)", "comment": "Nhận xét câu mở đoạn" },
            "body": { "text": "Trích các câu thân đoạn", "comment": "Nhận xét nội dung, từ ngữ, hình ảnh trong thân đoạn" },
            "close": { "text": "Trích câu kết đoạn", "comment": "Nhận xét câu kết đoạn" }
        },
        "general_comment": "Nhận xét chung về cả đoạn văn (ưu điểm/nhược điểm)",
        "score": 8.5,
        "advice": "Lời khuyên cụ thể để bạn viết tốt hơn. Xưng hô là 'bạn'."
    }
    `;

    // 4. Mock Logic (Simulation)
    const isMock = false; // Set true to tes without API
    if (isMock) {
        return new Promise(resolve => {
            setTimeout(() => {
                const sentences = studentText.split(/[.!?]+/).filter(s => s.trim().length > 0);
                const score = sentences.length >= 3 ? 9 : 6;
                resolve({
                    parts: {
                        open: { text: sentences[0] || "", comment: sentences.length > 0 ? "Bạn đã có câu mở đoạn." : "Thiếu câu mở đoạn." },
                        body: { text: sentences.slice(1, -1).join(". "), comment: "Nội dung khá chi tiết." },
                        close: { text: sentences[sentences.length - 1] || "", comment: "Câu kết đoạn giàu cảm xúc." }
                    },
                    general_comment: "Bài làm có cố gắng.",
                    score: score,
                    advice: "Bạn hãy viết câu văn dài hơn và dùng nhiều hình ảnh so sánh nhé."
                });
            }, 1500);
        });
    }

    // 5. Call AI API
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sentence: prompt,
                weekNumber: weekNumber,
                mode: 'json' // Hint to backend to return JSON
            })
        });

        if (!response.ok) throw new Error("API Error");

        const data = await response.json();
        let jsonStr = typeof data === 'string' ? data : (data.response || data.content);

        // Clean JSON formatting
        if (typeof jsonStr !== 'string') jsonStr = JSON.stringify(jsonStr);
        jsonStr = jsonStr.replace(/```json/g, '').replace(/```/g, '').trim();

        return JSON.parse(jsonStr);

    } catch (e) {
        console.error("AI Grade Paragraph Failed:", e);
        // Fallback
        return {
            parts: {
                open: { text: "...", comment: "Chưa xác định" },
                body: { text: "...", comment: "Chưa xác định" },
                close: { text: "...", comment: "Chưa xác định" }
            },
            general_comment: "Hệ thống đang bận, bạn hãy kiểm tra lại bài làm nhé.",
            score: 7,
            advice: "Bạn hãy đọc lại bài và soát lỗi chính tả nhé."
        };
    }
}


// --- UPDATED LOGIC FOR PARAGRAPH GRADING ---
window.renderFeedback = renderFeedback;

async function gradeParagraphV2(studentText, requirements, weekNumber = null) {
    // 1. Loading State (handled by caller)

    // 2. Load context
    await loadCurriculumData();
    await loadWritingCurriculumData();
    let context = "";
    if (weekNumber) {
        context = buildWritingContext(weekNumber);
    }

    // 3. Build Prompt
    const prompt = `
    ${context}
    
    🎯 YÊU CẦU ĐỀ BÀI: ${requirements}
    
    📝 BÀI LÀM CỦA BẠN:
    "${studentText}"
    
    👮 YÊU CẦU CHẤM:
    Bạn là giáo viên Tiếng Việt lớp 5. Hãy phân tích và chấm điểm ĐOẠN VĂN này.
    Lưu ý: Đây là một đoạn văn ngắn (3-5 câu).
    Cần có: Câu mở đoạn + Các câu thân đoạn + Câu kết đoạn.
    Tìm xem học sinh có dùng CÂU GHÉP có KẾT TỪ hay chưa.

    Hãy trả về kết quả dưới dạng JSON (Chỉ JSON, không markdown) theo mẫu:
    {
        "parts": {
            "open": { "text": "trích dẫn...", "comment": "Nhận xét ngắn gọn câu mở đoạn" },
            "body": { "text": "trích dẫn...", "comment": "Nhận xét ngắn gọn thân đoạn" },
            "close": { "text": "trích dẫn...", "comment": "Nhận xét ngắn gọn câu kết đoạn" }
        },
        "general_comment": "Nhận xét chung ngắn gọn (ưu điểm)",
        "score": 8.5,
        "advice": "Lời khuyên ngắn gọn để cải thiện"
    }
    `;

    // 4. Call AI API
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sentence: prompt,
                weekNumber: weekNumber,
                mode: 'json'
            })
        });

        if (!response.ok) throw new Error("API Error");

        const data = await response.json();
        let jsonStr = typeof data === 'string' ? data : (data.response || data.content);

        if (typeof jsonStr !== 'string') jsonStr = JSON.stringify(jsonStr);
        jsonStr = jsonStr.replace(/```json/g, '').replace(/```/g, '').trim();

        let rawResult;
        try {
            rawResult = JSON.parse(jsonStr);
        } catch (e) {
            console.error("JSON Parse Error", e);
            rawResult = { score: 5, general_comment: "Lỗi phân tích bài làm", advice: "Hãy thử lại" };
        }

        return {
            persona: "paragraph",
            status: (rawResult.score || 0) >= 5 ? "complete" : "incomplete",
            diem: (rawResult.score || 0) + "/10",
            score: rawResult.score,
            uu_diem: rawResult.general_comment || "Đã ghi nhận bài làm.",
            loi_sai: rawResult.advice || "Bạn hãy kiểm tra lại yêu cầu.",
            huong_dan: rawResult.advice || "Cố gắng viết đúng yêu cầu đề bài nhé. Xưng hô là 'bạn'.",
            analysis: {
                mo_bai: rawResult.parts?.open?.comment || "Chưa có nhận xét",
                than_bai: rawResult.parts?.body?.comment || "Chưa có nhận xét",
                ket_bai: rawResult.parts?.close?.comment || "Chưa có nhận xét"
            },
            word_count: studentText.split(/\s+/).length
        };

    } catch (e) {
        console.error("AI Grade Paragraph Failed (API), switching to Heuristic:", e);

        // --- HEURISTIC FALLBACK (Offline Mode) ---
        const cleanText = studentText.trim();
        const sentences = cleanText.split(/[.!?]+/).filter(s => s.trim().length > 0);
        const sentenceCount = sentences.length;
        const wordCount = cleanText.split(/\s+/).length;

        let score = 5;
        let advice = "Bạn hãy viết thêm nhé.";
        let generalComment = "Bài làm sơ sài.";

        // Scoring logic
        if (sentenceCount >= 3) score += 2;
        if (sentenceCount >= 5) score += 1;
        if (wordCount > 30) score += 1;

        // Keyword check
        const lowerText = cleanText.toLowerCase();
        const keywords = ['vì', 'nên', 'nếu', 'thì', 'tuy', 'nhưng', 'bởi', 'do', 'mà', 'càng', 'vừa', 'đã'];
        const hasKeywords = keywords.some(k => lowerText.includes(k));
        if (hasKeywords) score += 1;

        if (score >= 8) {
            generalComment = "Bài viết tốt, đúng cấu trúc.";
            advice = "Bạn hãy phát huy cách dùng từ này nhé.";
        } else if (score >= 6) {
            generalComment = "Bài viết tạm được.";
            advice = "Bạn nên viết các câu dài hơn và dùng từ ngữ gợi tả.";
        } else {
            advice = "Bạn nhớ viết đủ 3 phần: Mở đoạn, Thân đoạn, Kết đoạn.";
        }

        return {
            persona: "paragraph",
            status: score >= 5 ? "complete" : "incomplete",
            diem: score + "/10",
            score: score,
            uu_diem: hasKeywords ? "Đã dùng từ nối câu." : "Đã có nội dung.",
            loi_sai: sentenceCount < 3 ? "Đoạn văn quá ngắn." : "Cần trau chuốt hơn.",
            huong_dan: advice,
            analysis: {
                mo_bai: sentences[0] || "Thiếu",
                than_bai: sentences.length > 2 ? "Đã có thân đoạn" : "Sơ sài",
                ket_bai: sentences.length > 1 ? sentences[sentences.length - 1] : "Thiếu"
            },
            word_count: wordCount
        };
    }
}
window.gradeParagraph = gradeParagraphV2;

