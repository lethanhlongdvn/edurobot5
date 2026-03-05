global.window = {};
import { lesson123 } from './js/data/math/123.js';
const c = lesson123.content;
const p = lesson123.practice;
console.log('Content (DIV counts): open=', (c.match(/<div\b/g) || []).length, 'close=', (c.match(/<\/div>/g) || []).length);
console.log('Practice (DIV counts): open=', (p.match(/<div\b/g) || []).length, 'close=', (p.match(/<\/div>/g) || []).length);
