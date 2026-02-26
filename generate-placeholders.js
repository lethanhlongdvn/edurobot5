const fs = require('fs');

const dataStr = fs.readFileSync('ppct.json', 'utf8');
const data = JSON.parse(dataStr);

const placeholders = [];

data.forEach(row => {
    let period = row['Unnamed: 2'];
    let week = row['Unnamed: 1'];
    let titleStr = row['Unnamed: 3'];

    // Check if period is a number and >= 116
    if (typeof period === 'number' && period >= 116) {
        let titleParts = titleStr.split('. ');
        let bai = titleParts[0]; // e.g., Bài 49
        let name = titleParts.slice(1).join('. '); // e.g., Hình khai triển... (tiết 2)

        let obj = {
            topic: "Ôn tập và Bổ sung",
            week: String(week),
            period: String(period),
            title: titleStr.toUpperCase(),
            desc: titleStr,
            content: `
                <div class="space-y-4 md:space-y-6">
                    <div class="bg-gray-100 p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-inner text-center">
                        <h3 class="text-gray-400 font-black text-2xl md:text-4xl mb-4">🚧 Đang xây dựng...</h3>
                        <p class="text-gray-500 font-medium text-lg">Nội dung ${titleStr} (Tiết ${period}) đang được biên soạn. Thầy Cô vui lòng quay lại sau nhé!</p>
                    </div>
                </div>
            `,
            practice: `
                <div class="space-y-4 md:space-y-6">
                    <div class="bg-gray-50 p-8 md:p-12 rounded-[32px] md:rounded-[48px] border-4 border-dashed border-gray-200 text-center">
                        <p class="text-gray-400 font-black text-xl">Luyện tập chưa có sẵn</p>
                    </div>
                </div>
            `,
            quizPool: []
        };
        placeholders.push(obj);
    }
});

let fileContent = `export const placeholderLessons = [\n`;
placeholders.forEach((p, idx) => {
    fileContent += `  ${JSON.stringify(p, null, 4)}`;
    if (idx < placeholders.length - 1) fileContent += `,`;
    fileContent += `\n`;
});
fileContent += `];\n`;

fs.writeFileSync('js/data/math/placeholders.js', fileContent, 'utf8');
console.log('Successfully generated placeholders.js with ' + placeholders.length + ' lessons.');
