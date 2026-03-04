# 📘 HƯỚNG DẪN SỬ DỤNG CÁC CÔNG CỤ TƯƠNG TÁC
## Môn Lịch sử & Địa lý — EduRobot 5

---

## 📁 Cấu trúc file bài học

Mỗi bài học là 1 file JS trong `js/data/history/XXX.js`:

```javascript
export const lesson001 = {
    topic: 'Tên chủ đề',
    week: '1',
    period: '1',
    title: 'Tên bài học',
    description: 'Mô tả ngắn',

    // Tab "Tìm hiểu bài" — dùng content() nếu có gọi Lesson.renderXXX
    content() {
        return `<div>Nội dung HTML...</div>
        ${Lesson.renderInteractiveMap(...)}  // Gọi module tương tác
        `;
    },

    // Tab "Luyện tập" — luôn là function
    practice() {
        return `
        ${Lesson.renderFillBlanks(...)}
        ${Lesson.renderTrueFalse(...)}
        `;
    },

    // Tab "Củng cố" — mảng câu hỏi trắc nghiệm
    quizPool: [
        { level: 1, question: '...', options: ['A', 'B', 'C', 'D'], answer: 0 }
    ]
};
```

> ⚠️ **Lưu ý**: Nếu `content` gọi `Lesson.renderXXX()`, phải viết dạng `content() { return \`...\`; }` (function), KHÔNG dùng `content: \`...\`` (template literal) — vì Lesson chưa load khi import file.

---

## 🗺️ 1. BẢN ĐỒ GOOGLE MAPS

Nhúng bản đồ Google Maps tương tác. Học sinh nhấn vào từng địa điểm để bay đến trên bản đồ.

```javascript
${Lesson.renderInteractiveMap(
    'map-id',                        // ID duy nhất
    'Tiêu đề bản đồ',               // Ví dụ: 'Khám phá bản đồ Việt Nam'
    'Mô tả ngắn',                   // Hiển thị dưới tiêu đề
    [
        {
            name: 'Thủ đô Hà Nội',  // Tên địa điểm
            lat: 21.028511,          // Vĩ độ (lấy từ Google Maps)
            lng: 105.804817,         // Kinh độ
            info: 'Trung tâm chính trị',  // Ghi chú
            emoji: '🏛️'             // Icon hiển thị
        },
        // Thêm địa điểm khác...
    ]
)}
```

**Tính năng**: Vệ tinh / Bản đồ / Địa hình | Phóng to toàn màn hình | Click bay đến địa điểm

---

## 📝 2. ĐIỀN VÀO CHỖ TRỐNG

```javascript
${Lesson.renderFillBlanks(
    'fb-id',                         // ID duy nhất
    'Điền vào chỗ trống',            // Tiêu đề
    'Việt Nam nằm ở khu vực [___], trên bán đảo [___]. Phía bắc giáp [___].',
    ['Đông Nam Á', 'Đông Dương', 'Trung Quốc']  // Đáp án theo thứ tự [___]
)}
```

> Dùng `[___]` để đánh dấu chỗ trống. Học sinh kéo thả đáp án vào.

---

## ✅ 3. ĐÚNG / SAI

```javascript
${Lesson.renderTrueFalse(
    'tf-id',
    'Đúng hay Sai?',
    [
        {
            statement: 'Việt Nam nằm ở khu vực Đông Nam Á.',
            answer: true,
            explanation: 'Đúng! VN thuộc khu vực ĐNA, trên bán đảo Đông Dương.'
        },
        {
            statement: 'Việt Nam có 64 tỉnh thành.',
            answer: false,
            explanation: 'Sai! VN có 63 tỉnh, thành phố trực thuộc trung ương.'
        }
    ]
)}
```

---

## 🔢 4. SẮP XẾP THỨ TỰ

Rất phù hợp cho sắp xếp niên đại lịch sử, trình tự sự kiện.

```javascript
${Lesson.renderOrdering(
    'ord-id',
    'Sắp xếp theo thứ tự từ lớn đến nhỏ',
    [
        'Diện tích: 331.212 km²',     // Thứ tự đúng = thứ tự trong mảng
        'Đường bờ biển: 3.260 km',
        'Chiều dài lãnh thổ: 1.650 km'
    ]
)}
```

> Mảng viết theo **thứ tự đúng**. Hệ thống tự xáo trộn khi hiển thị.

---

## 📂 5. PHÂN LOẠI

Phân nhóm các khái niệm, vùng miền, thời kỳ lịch sử.

```javascript
${Lesson.renderCategorizing(
    'cat-id',
    'Phân loại đúng nhóm',
    {
        'Nước láng giềng': ['Trung Quốc', 'Lào', 'Cam-pu-chia'],
        'Biểu tượng quốc gia': ['Cờ đỏ sao vàng', 'Tiến quân ca', 'Quốc huy']
    }
)}
```

---

## 🃏 6. THẺ LẬT (Flashcards)

Ôn tập kiến thức bằng thẻ lật — mặt trước là câu hỏi, mặt sau là đáp án.

```javascript
${Lesson.renderFlashcards(
    'fc-id',
    'Ôn tập nhanh',
    [
        { front: 'Quốc kỳ Việt Nam là gì?', back: 'Cờ đỏ sao vàng 🚩' },
        { front: 'Thủ đô Việt Nam?', back: 'Hà Nội 🏛️' },
        { front: 'Quốc ca Việt Nam?', back: 'Tiến quân ca — Văn Cao 🎵' },
        { front: 'Diện tích Việt Nam?', back: '331.212 km² 📐' }
    ]
)}
```

---

## 🔗 7. NỐI CẶP ĐÔI

Ghép nối sự kiện ↔ niên đại, nước ↔ thủ đô, nhân vật ↔ thành tựu.

```javascript
${Lesson.renderMatchingExercise(
    'match-id',
    'Nối nước láng giềng với hướng tiếp giáp',
    ['Trung Quốc', 'Lào', 'Cam-pu-chia', 'Biển Đông'],     // Cột trái
    ['Phía Bắc', 'Phía Tây', 'Phía Tây', 'Phía Đông & Nam'], // Cột phải
    [
        { leftIdx: 0, rightIdx: 0 },  // Trung Quốc ↔ Phía Bắc
        { leftIdx: 1, rightIdx: 1 },  // Lào ↔ Phía Tây
        { leftIdx: 2, rightIdx: 2 },  // Cam-pu-chia ↔ Phía Tây
        { leftIdx: 3, rightIdx: 3 }   // Biển Đông ↔ Phía Đông & Nam
    ]
)}
```

---

## 🔬 8. KHÁM PHÁ TỪNG BƯỚC

Dẫn dắt học sinh qua từng bước khám phá kiến thức.

```javascript
${Lesson.renderExperiment(
    'exp-id',
    'Khám phá vị trí Việt Nam',
    'Mô tả ngắn về hoạt động khám phá',
    [
        {
            instruction: 'Tìm châu Á trên bản đồ',       // Tên bước (KHÔNG thêm "Bước X:")
            result: '🌍 Châu Á là châu lục lớn nhất...',  // Kết quả hiện ra
            emoji: '🗺️'                                   // Icon của bước
        },
        {
            instruction: 'Xác định khu vực Đông Nam Á',
            result: '📍 ĐNA gồm 11 quốc gia...',
            emoji: '🌏'
        }
    ]
)}
```

> ⚠️ KHÔNG viết "Bước 1:", "Bước 2:" trong `instruction` — hệ thống tự thêm!

---

## 📸 9. VẬN DỤNG THỰC TẾ

Cho học sinh tải ảnh lên hoặc mô tả thực tế.

```javascript
${Lesson.renderRealWorldMeasurement(
    'rw-id',
    'Tìm hiểu quê hương em trên bản đồ',
    'Em hãy chụp ảnh bản đồ hành chính tỉnh/thành phố nơi em sống...'
)}
```

---

## 🤖 10. HỎI ĐÁP VỚI AI (AI Tutor)

```javascript
${AIInteraction.renderTutor(
    'tutor-id',
    'Câu hỏi gợi ý cho học sinh',
    'Placeholder cho ô nhập...'
)}
```

---

## 🔍 11. PHÓNG TO / THU NHỎ (Tự động)

- **Hình ảnh**: Tất cả ảnh `<img>` trong bài tự động có chức năng phóng to khi nhấn
- **Bản đồ**: Nhấn nút "🔍 Phóng to" bên dưới bản đồ
- **Phím tắt**: `+` phóng to | `-` thu nhỏ | `0` reset | `Esc` đóng
- **Cuộn chuột**: Scroll wheel zoom khi đang trong chế độ phóng to
- **Kéo thả**: Giữ chuột kéo hình khi đã phóng to

> Không cần thêm code gì — tự động áp dụng cho tất cả hình ảnh!

---

## 🏆 12. CÂU HỎI TRẮC NGHIỆM (Tab Củng cố)

```javascript
quizPool: [
    {
        level: 1,              // 1 = Nhận biết, 2 = Thông hiểu, 3 = Vận dụng
        question: 'Việt Nam nằm ở khu vực nào?',
        options: [
            'Đông Á',
            'Đông Nam Á',       // Đáp án đúng
            'Nam Á',
            'Tây Á'
        ],
        answer: 1               // Index đáp án đúng (bắt đầu từ 0)
    },
    // Thêm câu hỏi khác...
]
```

---

## 💡 MẸO SOẠN BÀI

| Mẹo | Chi tiết |
|-----|---------|
| **Lấy tọa độ** | Chuột phải trên Google Maps → Copy tọa độ |
| **Xem demo** | Mở bài 1 LS&ĐL để tham khảo cách dùng tất cả công cụ |
| **Test nhanh** | `python -m http.server 8080` rồi mở `localhost:8080` |
| **Thêm ảnh** | Đặt trong `images/history/` rồi `<img src="images/history/ten.jpg">` |
| **content dạng function** | Bắt buộc khi gọi `Lesson.renderXXX()` hoặc `AIInteraction.renderXXX()` |
| **Emoji** | Dùng Windows + . (dấu chấm) để chọn emoji |

---

*File tham khảo: `js/data/history/001.js` — Demo đầy đủ tất cả 10 công cụ*
