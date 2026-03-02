const fs = require('fs');
const path = require('path');
const url = require('url');

const dir = path.resolve('js/data/vietnamese/lessons');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

function escapeHTMLString(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

async function run() {
    for (const file of files) {
        const filePath = path.join(dir, file);
        const moduleUrl = url.pathToFileURL(filePath).href;
        let mod;
        try {
            mod = await import(moduleUrl);
        } catch (e) {
            console.error('Failed to import ' + file, e);
            continue;
        }

        const varName = Object.keys(mod)[0];
        const data = mod[varName];

        let htmlContent = '';
        let htmlPractice = '';
        let quizPool = [];

        if (data.tabs) {
            const lessonBlocks = data.tabs.lesson?.blocks || data.tabs.study?.blocks || [];
            htmlContent = lessonBlocks.map(b => b.content || '').join('\n');

            const practiceBlocks = data.tabs.practice?.blocks || [];
            htmlPractice = practiceBlocks.map(b => b.content || '').join('\n');

            const questions = data.tabs.quiz?.questions || [];
            if (questions.length > 0) {
                quizPool = questions.map(q => ({
                    question: q.q,
                    options: q.a,
                    answer: q.c,
                    level: q.level || 1
                }));
            }
        } else if (data.blocks) {
            htmlContent = data.blocks.map(b => b.content || '').join('\n');
        }

        const newStructure = `export const ${varName} = {
    "topic": "Tiếng Việt 5",
    "week": "${data.week || ''}",
    "period": "${data.period || ''}",
    "title": "${(data.title || '').toUpperCase()}",
    "desc": "${data.title || ''}",
    "subject": "${data.subject || ''}",
    "theme": "${data.theme || ''}",
    "audio": "${data.audio || ''}",
    "content": \`\n${escapeHTMLString(htmlContent)}\n\`,
    "practice": \`\n${escapeHTMLString(htmlPractice)}\n\`,
    "quizPool": ${JSON.stringify(quizPool, null, 4)}
};
`;
        fs.writeFileSync(filePath, newStructure);
        console.log('Converted', file);
    }
}

run().catch(console.error);
