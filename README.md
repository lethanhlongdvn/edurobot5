# 🎓 EduRobot 5 - Hệ thống Học tập Thông minh Lớp 5

> **Cùng EduRobot chinh phục tri thức, vững bước vào tương lai.**

## 📖 Giới thiệu

EduRobot 5 là ứng dụng web hỗ trợ dạy và học dành cho học sinh Lớp 5, tích hợp trí tuệ nhân tạo (AI) để tạo trải nghiệm học tập tương tác, sinh động. Hệ thống bao phủ đầy đủ chương trình theo Phân phối chương trình (PPCT) của Bộ Giáo dục.

## ✨ Tính năng chính

- 🤖 **AI Tutor (Thầy E)** - Chatbot AI hỗ trợ giải bài, chấm điểm và phản hồi chi tiết
- 📐 **Toán học** - 175 tiết học đầy đủ theo PPCT, bao gồm bài giảng tương tác, luyện tập và trắc nghiệm
- 📝 **Tiếng Việt** - 210 bài học theo chương trình TV Lớp 5
- 🧪 **Khoa học, Lịch sử, Đạo đức, Tiếng Anh** - Đang phát triển
- 📊 **Quiz thông minh** - Hệ thống trắc nghiệm 3 cấp độ (Dễ - Trung bình - Khó)
- 🔥 **Firebase** - Nộp bài tự luận và lưu điểm trắc nghiệm trực tuyến
- 👨‍🏫 **Dashboard Giáo viên** - Quản lý bài nộp và bảng điểm học sinh
- 🎨 **Giao diện Premium** - Glassmorphism, 3D tương tác, micro-animations

## 🛠️ Công nghệ

| Thành phần | Công nghệ |
|-----------|-----------|
| Frontend | HTML5, JavaScript (ES Modules), TailwindCSS |
| AI | Google Gemini API |
| Database | Firebase Firestore |
| 3D Visual | CSS 3D Transforms |
| Routing | Hash-based SPA Router |

## 📁 Cấu trúc dự án

```
edurobot5/
├── index.html              # Trang chính SPA
├── teacher.html            # Dashboard điểm trắc nghiệm
├── teacher-dashboard.html  # Dashboard bài tự luận
├── css/
│   └── index.css           # Design system chính
├── js/
│   ├── app.js              # Entry point
│   ├── router.js           # SPA Router (hash-based)
│   ├── ai.js               # AI Tutor integration
│   ├── firebase-logic.js   # Firebase connection
│   ├── data.js             # Data registry
│   ├── data_loader.js      # Module loader
│   ├── components/         # UI Components
│   │   ├── Dashboard.js    # Trang chủ
│   │   ├── Lesson.js       # Giao diện bài học
│   │   ├── Quiz.js         # Hệ thống trắc nghiệm
│   │   ├── AIInteraction.js# Chat AI
│   │   ├── Visuals.js      # 3D & Visual effects
│   │   └── common.js       # Utilities
│   └── data/               # Dữ liệu bài học
│       ├── math/           # Toán học (175 tiết)
│       └── vietnamese/     # Tiếng Việt (210 bài)
├── hinh_anh/               # Hình ảnh minh họa
├── am_thanh/               # Âm thanh bài học
└── 3d/                     # Mô hình 3D tương tác
```

## 🚀 Cách sử dụng

1. Mở file `index.html` bằng trình duyệt (hoặc dùng Live Server)
2. Chọn môn học từ trang chủ
3. Chọn tuần và tiết học
4. Học bài qua 3 tab: **Tìm hiểu bài** → **Luyện tập** → **Củng cố**

## 👨‍💻 Tác giả

**Lê Thành Long** - Phát triển bởi tình yêu giáo dục 💙

---

© 2026 EduRobot - Hệ thống học tập thông minh
