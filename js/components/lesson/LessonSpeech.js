// js/components/lesson/LessonSpeech.js
export const LessonSpeech = {
    toggleSpeechRec(id) {
        const input = document.getElementById(id.startsWith('input-') || id.startsWith('wp-') ? id : `input-${id}`);
        const micBtn = document.getElementById(id.startsWith('wp-') ? `btn-mic-${id.split('-')[1]}` : `btn-mic-${id}`);
        const status = document.getElementById(id.startsWith('wp-') ? `mic-status-${id.split('-')[1]}` : `mic-status-${id}`);

        if (!('webkitSpeechRecognition' in window)) {
            alert("Trình duyệt của bạn không hỗ trợ nhận diện giọng nói. Hãy dùng Google Chrome nhé!");
            return;
        }

        if (window._isRecognitionActive) {
            window._recognition.stop();
            return;
        }

        const recognition = new webkitSpeechRecognition();
        window._recognition = recognition;
        recognition.lang = 'vi-VN';
        recognition.interimResults = false;

        recognition.onstart = () => {
            window._isRecognitionActive = true;
            if (status) status.classList.remove('hidden');
            if (micBtn) micBtn.classList.add('animate-pulse', 'text-red-500');
        };

        recognition.onresult = (event) => {
            const result = event.results[0][0].transcript;
            if (input) {
                // If it's a word problem, append. Otherwise replace.
                if (input.tagName === 'TEXTAREA') {
                    input.value += (input.value ? ' ' : '') + result;
                } else {
                    input.value = result;
                }
                // Trigger input event for math cells
                input.dispatchEvent(new Event('input'));
            }
        };

        recognition.onend = () => {
            window._isRecognitionActive = false;
            if (status) status.classList.add('hidden');
            if (micBtn) micBtn.classList.remove('animate-pulse', 'text-red-500');
        };

        recognition.start();
    }
};
