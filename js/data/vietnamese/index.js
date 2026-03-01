import { lesson191 } from './191.js';
import { lesson192 } from './192.js';
import { lesson201 } from './201.js';
import { lesson202 } from './202.js';
import { placeholderLessons } from './placeholders.js';
import { convertedVietnameseData } from './converted.js';

export const vietnameseData = [
    lesson191,
    lesson192,
    lesson201,
    lesson202,
    ...convertedVietnameseData,
    ...placeholderLessons
].sort((a, b) => {
    const pA = parseInt(a.period);
    const pB = parseInt(b.period);
    if (!isNaN(pA) && !isNaN(pB)) {
        return pA - pB;
    }
    if (isNaN(pA) && isNaN(pB)) return 0;
    if (isNaN(pA)) return 1;
    return -1;
});
