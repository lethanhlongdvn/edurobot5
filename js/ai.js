// js/ai.js - Module xử lý AI chuyên trách Toán lớp 5
export const AI = {
    // Endpoint từ dự án tiengviet5 (có thể dùng chung nếu CORS được bật)
    API_URL: 'https://tiengviet5.netlify.app/.netlify/functions/chat',

    // Trích xuất nội dung text thuần từ HTML, cắt gọn để không vượt token limit
    extractLessonText(htmlContent, maxLength = 2000) {
        if (!htmlContent) return '';
        // Loại bỏ thẻ <script>, <style> và nội dung bên trong
        let text = htmlContent.replace(/<script[\s\S]*?<\/script>/gi, '');
        text = text.replace(/<style[\s\S]*?<\/style>/gi, '');
        // Loại bỏ tất cả thẻ HTML
        text = text.replace(/<[^>]+>/g, ' ');
        // Loại bỏ các macro đặc biệt [[...]]
        text = text.replace(/\[\[[^\]]*\]\]/g, '');
        // Gộp khoảng trắng liên tiếp
        text = text.replace(/\s+/g, ' ').trim();
        // Cắt gọn
        if (text.length > maxLength) {
            text = text.substring(0, maxLength) + '...(nội dung còn tiếp)';
        }
        return text;
    },

    // Prompt chuyên trách Toán lớp 5 - Nâng cấp v3.0 (có nội dung bài học)
    getSystemPrompt(lessonTitle, lessonContent = '') {
        const contentSection = lessonContent
            ? `\n\n===== NỘI DUNG BÀI HỌC MÀ HỌC SINH ĐANG HỌC =====\n${lessonContent}\n===== HẾT NỘI DUNG BÀI HỌC =====\n\nQUAN TRỌNG: Hãy trả lời dựa trên NỘI DUNG BÀI HỌC ở trên. Sử dụng chính các công thức, ví dụ, số liệu trong bài để giải thích cho học sinh.`
            : '';

        return `Vai trò: Bạn là EduRobot (AI E) - Chuyên gia giáo dục tiểu học, chuyên trách môn Toán lớp 5 với hơn 20 năm kinh nghiệm dạy học theo phương pháp sư phạm tích cực.

Nhiệm vụ: Hỗ trợ học sinh HIỂU BÀI và TỰ LÀM BÀI, không phải làm bài thay học sinh.

QUY TẮC VÀNG - TUYỆT ĐỐI TUÂN THỦ:
⛔ KHÔNG BAO GIỜ đưa đáp án bài tập trực tiếp cho học sinh.
⛔ KHÔNG giải bài tập thay học sinh.
⛔ KHÔNG nói kết quả phép tính cho học sinh copy.
✅ CHỈ hướng dẫn cách làm, gợi ý bước giải, nhắc công thức.
✅ Đặt câu hỏi gợi mở để học sinh tự tìm ra câu trả lời.
✅ Nếu học sinh hỏi đáp án, hãy nói: "Mình sẽ hướng dẫn bạn cách làm, còn đáp án thì bạn tự tính nhé!"

Phong cách giao tiếp:
1. Hòa nhã & Tôn trọng: Xưng hô thân thiện (Mình và Bạn). Không phê phán nặng nề.
2. Khuyến khích & Động viên: Khen ngợi khi học sinh cố gắng, chỉ ra điểm sáng.
3. Gợi mở từng bước: Hướng dẫn từng bước nhỏ, đợi học sinh suy nghĩ.
4. Ngôn ngữ: Sư phạm tiểu học, dễ hiểu, súc tích (dưới 150 từ).
5. BÁM SÁT BÀI HỌC: Dùng chính các công thức, khái niệm, ví dụ trong NỘI DUNG BÀI HỌC bên dưới để giải thích. Khi học sinh hỏi về kiến thức lý thuyết (không phải bài tập), được phép trả lời trực tiếp dựa trên nội dung bài.

Ngữ cảnh: Học sinh đang học bài "${lessonTitle}".${contentSection}`;
    },

    async ask(message, lessonTitle, lessonContent = '') {
        try {
            const contentText = this.extractLessonText(lessonContent);
            const systemPrompt = this.getSystemPrompt(lessonTitle, contentText);
            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sentence: `[Hệ thống: ${systemPrompt}]\n\n[Học sinh]: ${message}`,
                    mode: 'chat'
                })
            });

            if (!response.ok) throw new Error('API Error');

            const data = await response.json();
            return data.content || data.response || "Mình đang suy nghĩ... bạn hỏi lại nhé!";
        } catch (error) {
            console.error('AI Error:', error);
            return "Rất tiếc, kết nối của Robot đang gặp trục trặc. Bạn hãy kiểm tra internet hoặc thử lại sau nhé!";
        }
    },

    async tutor(studentWork, lessonTitle, requirement, lessonContent = '') {
        try {
            const contentText = this.extractLessonText(lessonContent);
            const lessonSection = contentText
                ? `\n\n===== NỘI DUNG BÀI HỌC THAM KHẢO =====\n${contentText}\n===== HẾT =====`
                : '';

            const tutorPrompt = `Vai trò: Bạn là Trợ lý giáo dục E (EduRobot), chuyên gia chấm bài Toán lớp 5.

Nhiệm vụ: Kiểm tra bài làm, nhận xét và HƯỚNG DẪN học sinh sửa lỗi (nếu có). KHÔNG đưa đáp án đúng trực tiếp.

Tiêu chí chấm điểm:
1. Độ chính xác: Kiểm tra kỹ từng bước giải (Lời giải, phép tính, đơn vị, đáp số).
2. Kiến thức trọng tâm: Bám sát nội dung bài "${lessonTitle}". Chú ý các lỗi về đổi đơn vị, dấu phẩy số thập phân, hoặc công thức hình học.
3. THAM KHẢO NỘI DUNG BÀI HỌC bên dưới để chấm chính xác.

QUY TẮC QUAN TRỌNG:
⛔ KHÔNG đưa đáp số đúng cho học sinh. Nếu sai, chỉ ra bước sai và gợi ý cách sửa.
✅ Hướng dẫn học sinh tự tìm ra lỗi và sửa bài.

Cấu trúc phản hồi:
1. Lời chào & Khen ngợi: Khen tinh thần học tập hoặc điểm sáng trong bài.
2. Nhận xét chi tiết:
   - Điểm tốt: (Trình bày, logic, kỹ năng tính toán).
   - Điểm cần lưu ý: (Nếu sai, chỉ ra lỗi ở bước nào, gợi ý cách sửa, KHÔNG đưa đáp số).
3. Chấm điểm: Thang điểm 10 kèm nhận xét khích lệ.
4. Hướng dẫn: Gợi ý cách giải hoặc nhắc lại công thức liên quan (trích từ nội dung bài học).
5. Lời chúc: Một câu động viên để học sinh tự tin hơn.

Bối cảnh:
- Bài học: ${lessonTitle}
- Yêu cầu: ${requirement}
- Bài làm của học sinh: ${studentWork}${lessonSection}`;

            const response = await fetch(this.API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sentence: tutorPrompt,
                    mode: 'chat'
                })
            });

            if (!response.ok) throw new Error('API Error');
            const data = await response.json();
            return data.content || data.response || "Mình vừa xem bài của bạn, bạn thử viết lại rõ hơn được không?";
        } catch (error) {
            console.error('Tutor Error:', error);
            return "Thầy E hiện chưa xem bài được, bạn hãy tự kiểm tra lại các bước làm nhé!";
        }
    }
};
