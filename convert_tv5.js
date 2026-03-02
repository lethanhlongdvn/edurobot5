const fs = require('fs');
const path = require('path');
const url = require('url');

const dir = path.resolve('js/data/vietnamese/lessons');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));

global.window = {};
global.document = { querySelector: () => null };
function createBlock() { return ''; }
global.window.createBlock = createBlock;
global.createBlock = createBlock;

function escapeHTMLString(str) {
    if (!str) return '';
    return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

async function run() {
    for (const file of files) {
        const filePath = path.join(dir, file);
        const fileRawContent = fs.readFileSync(filePath, 'utf8');

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

        // Extract extra code (window.funcs, etc) after the object
        // Usually the object ends with `};\n` or similar. Let's find the closing of the object.
        const exportMatch = fileRawContent.match(new RegExp(`export\\s+const\\s+${varName}\\s*=\\s*\\{`));
        let extraCode = '';
        if (exportMatch) {
            const startIdx = exportMatch.index;
            let braceCount = 0;
            let inString = false;
            let inTemplate = false;
            let escapeNext = false;
            let endObjIdx = -1;

            for (let i = startIdx; i < fileRawContent.length; i++) {
                const char = fileRawContent[i];
                if (escapeNext) {
                    escapeNext = false;
                    continue;
                }
                if (char === '\\') {
                    escapeNext = true;
                    continue;
                }
                if (char === '`' && !inString) {
                    inTemplate = !inTemplate;
                }
                if ((char === '"' || char === "'") && !inTemplate) {
                    inString = !inString;
                }

                if (!inString && !inTemplate) {
                    if (char === '{') braceCount++;
                    else if (char === '}') {
                        braceCount--;
                        if (braceCount === 0) {
                            endObjIdx = i;
                            break;
                        }
                    }
                }
            }

            if (endObjIdx !== -1) {
                // Get anything after the semicolon or newlines
                let rest = fileRawContent.substring(endObjIdx + 1);
                rest = rest.replace(/^;/, '').trim();
                extraCode = rest;
            }
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

${extraCode}
`;
        fs.writeFileSync(filePath, newStructure, 'utf8');
        console.log('Converted', file);
    }
}

run().catch(console.error);
