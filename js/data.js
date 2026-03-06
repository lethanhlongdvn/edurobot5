import { lessons } from './data_loader.js';

export const subjects = [
    { id: 'math', name: 'Toán học', shortName: 'Toán 5', icon: '📐', color: 'blue', desc: 'Số học, Hình học & Logic' },
    { id: 'vietnamese', name: 'Tiếng Việt', shortName: 'TV 5', icon: '📝', color: 'pink', desc: 'Văn học & Ngôn ngữ', locked: true },
    { id: 'science', name: 'Khoa học', shortName: 'Khoa học 5', icon: '🧪', color: 'emerald', desc: 'Khám phá tự nhiên', locked: true },
    { id: 'history', name: 'Lịch sử & Địa lý', shortName: 'LS-ĐL 5', icon: '🌍', color: 'amber', desc: 'Cội nguồn & Thế giới', locked: true },
    { id: 'ethics', name: 'Đạo đức', shortName: 'Đạo đức 5', icon: '🤝', color: 'orange', desc: 'Giá trị sống & Kỹ năng', locked: true },
    { id: 'experiential', name: 'HĐ Trải nghiệm', shortName: 'Trải nghiệm 5', icon: '🏕️', color: 'indigo', desc: 'Khám phá & Sáng tạo', locked: true },
    { id: 'english', name: 'Tiếng Anh', shortName: 'English 5', icon: '🇬🇧', color: 'violet', desc: 'Giao tiếp toàn cầu', locked: true }
];

export { lessons };
