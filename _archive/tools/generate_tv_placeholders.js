const fs = require('fs');

const rawData = JSON.parse(fs.readFileSync('../ppct_tv.json', 'utf8'));

// Find header row
let startIndex = 0;
for (let i = 0; i < rawData.length; i++) {
    if (rawData[i][0] === 'STT') {
        startIndex = i + 1;
        break;
    }
}

const lessons = [];
let currentLesson = null;

for (let i = startIndex; i < rawData.length; i++) {
    const row = rawData[i];
    if (!row || typeof row[0] === 'undefined' || isNaN(row[0]) || row[0] === '') continue; // skip empty or invalid rows

    const stt = row[0];
    const week = row[1];
    const period = row[2];
    let title = row[3] || '';

    // Normalize reviews periods 4 & 5 to be grouped together
    if (/(Ôn tập|Đánh giá).*\(tiết [45]\)/i.test(title)) {
        title = title.replace(/\(tiết [45]\)/i, "(Tiết 4+5)");
    }

    let strWeek = week ? week.toString() : "";
    let strPeriod = period ? period.toString() : "";

    if (currentLesson && currentLesson.week === strWeek && currentLesson.desc === title) {
        currentLesson.periods.push(strPeriod);
    } else {
        if (currentLesson) {
            lessons.push(finalizeLesson(currentLesson));
        }
        currentLesson = {
            topic: "Chương trình Tiếng Việt 5",
            week: strWeek,
            periods: [strPeriod],
            title: title.toUpperCase(),
            desc: title,
        };
    }
}

if (currentLesson) {
    lessons.push(finalizeLesson(currentLesson));
}

function finalizeLesson(lesson) {
    let p = lesson.periods;
    let periodStr = p.length > 1 ? (p[0] + '-' + p[p.length - 1]) : p[0];

    return {
        topic: lesson.topic,
        week: lesson.week,
        period: periodStr,
        title: lesson.title,
        desc: lesson.desc,
        content: `
                    <div class="space-y-4 md:space-y-6">
                        <div class="bg-gray-100 p-8 md:p-12 rounded-[32px] md:rounded-[48px] shadow-inner text-center">
                            <h3 class="text-gray-400 font-black text-2xl md:text-4xl mb-4">🚧 Đang xây dựng...</h3>
                            <p class="text-gray-500 font-medium text-lg">Nội dung ${lesson.desc} (Tiết ${periodStr}) đang được biên soạn. Thầy Cô vui lòng quay lại sau nhé!</p>
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
    }
}

const fileContent = `export const placeholderLessons = ${JSON.stringify(lessons, null, 2)};`;
fs.writeFileSync('../js/data/vietnamese/placeholders.js', fileContent, 'utf8');
console.log('Generated ' + lessons.length + ' placeholders in js/data/vietnamese/placeholders.js');
