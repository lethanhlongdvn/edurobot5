import { lesson111 } from './111.js';
import { lesson112 } from './112.js';
import { lesson113 } from './113.js';
import { lesson114 } from './114.js';
import { lesson115 } from './115.js';
import { lesson116 } from './116.js';
import { lesson117 } from './117.js';
import { lesson118 } from './118.js';
import { lesson119 } from './119.js';
import { lesson120 } from './120.js';
import { lesson121 } from './121.js';
import { lessonTemplate } from './template.js';
import { placeholderLessons } from './placeholders.js';

export const mathData = [
    lesson111,
    lesson112,
    lesson113,
    lesson114,
    lesson115,
    lesson116,
    lesson117,
    lesson118,
    lesson119,
    lesson120,
    lesson121,
    ...placeholderLessons,
    lessonTemplate
].sort((a, b) => {
    // Attempt to sort by period (numerical value)
    const pA = parseInt(a.period);
    const pB = parseInt(b.period);
    if (!isNaN(pA) && !isNaN(pB)) {
        return pA - pB;
    }
    // Put non-numerical periods (like TEMPLATE) at the end
    if (isNaN(pA) && isNaN(pB)) return 0;
    if (isNaN(pA)) return 1;
    return -1;
});
