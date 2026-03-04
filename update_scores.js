const fs = require('fs');
const path = require('path');

const dir = 'C:\\Users\\Admin\\Desktop\\edurobot5\\edurobot5\\js\\data\\math';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern 1: window.submitMathLesson(..., status, ...) -> window.submitMathLesson(..., Math.round(score * 10), ...)
    // Many files have: const status = score >= 8 ? "XS" : (score >= 5 ? "Đ" : "CĐ");
    // followed by: window.submitMathLesson("Score: " + score, status, "btn-submit-1xx");

    // Pattern 2: window.submitMathLesson("Tiết 122: Đã nộp bài giải", "Đ", "btn-submit-122"); 
    // This is for complete-only lessons. Let's send 100 instead of "Đ".

    // Case 1: Calculate score * 10
    if (content.match(/window\.submitMathLesson\([\S\s]*?, status,/)) {
        content = content.replace(/window\.submitMathLesson\((.*?),\s*status,\s*(.*?)\)/g, 'window.submitMathLesson($1, Math.round(score * 10), $2)');
        modified = true;
    }

    // Case 2: Replace "Đ" with 100
    if (content.match(/window\.submitMathLesson\([\S\s]*?, "Đ",/)) {
        content = content.replace(/window\.submitMathLesson\((.*?),\s*"Đ",\s*(.*?)\)/g, 'window.submitMathLesson($1, 100, $2)');
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated " + file);
    }
});
