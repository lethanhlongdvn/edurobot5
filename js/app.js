// app.js - Điểm khởi đầu của ứng dụng
import { router } from './router.js';
import { common } from './components/common.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('EduRobot Lớp 5 2.0 - Khởi tạo thành hệ thống module');

    // Khởi tạo router sau một khoảng trễ nhỏ để tạo hiệu ứng mượt mà
    setTimeout(() => {
        try {
            common.injectTCStyles();
            router.init();
        } catch (e) {
            console.error('Lỗi khi khởi tạo router:', e);
            const container = document.getElementById('app-content');
            if (container) {
                container.innerHTML = `<div class="p-8 text-red-600 font-bold">Lỗi hệ thống: ${e.message}<br>Vui lòng khởi động lại server hoặc F5 trang web.</div>`;
            }
        }
    }, 300);
});
