const fs = require('fs');
const content = fs.readFileSync('js/data/math/123.js', 'utf8');
const cMatch = content.match(/content:\s*\`([\s\S]*?)\`,/);
const pMatch = content.match(/practice:\s*\`([\s\S]*?)\`,/);

if (cMatch) {
    const c = cMatch[1];
    console.log('Content (DIV counts): open=', (c.match(/<div\b/g) || []).length, 'close=', (c.match(/<\/div>/g) || []).length);
}
if (pMatch) {
    const p = pMatch[1];
    console.log('Practice (DIV counts): open=', (p.match(/<div\b/g) || []).length, 'close=', (p.match(/<\/div>/g) || []).length);
}
