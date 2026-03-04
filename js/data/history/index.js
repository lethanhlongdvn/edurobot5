import { lessonDemo } from '../demo_interactions.js';
import { lesson001 } from './001.js';
import { lesson002 } from './002.js';
import { lesson003 } from './003.js';
import { lesson004 } from './004.js';
import { lesson005 } from './005.js';
import { lesson006 } from './006.js';
import { lesson007 } from './007.js';
import { lesson008 } from './008.js';
import { lesson009 } from './009.js';
import { lesson010 } from './010.js';
import { lesson011 } from './011.js';
import { lesson012 } from './012.js';
import { lesson013 } from './013.js';
import { lesson014 } from './014.js';
import { lesson015 } from './015.js';
import { lesson016 } from './016.js';
import { lesson017 } from './017.js';
import { lesson018 } from './018.js';
import { lesson019 } from './019.js';
import { lesson020 } from './020.js';
import { lesson021 } from './021.js';
import { lesson022 } from './022.js';
import { lesson023 } from './023.js';
import { lesson024 } from './024.js';
import { lesson025 } from './025.js';
import { lesson026 } from './026.js';
import { lesson027 } from './027.js';
import { lesson028 } from './028.js';
import { lesson029 } from './029.js';
import { lesson030 } from './030.js';
import { lesson031 } from './031.js';
import { lesson032 } from './032.js';
import { lesson033 } from './033.js';
import { lesson034 } from './034.js';
import { lesson035 } from './035.js';
import { lesson036 } from './036.js';
import { lesson037 } from './037.js';
import { lesson038 } from './038.js';
import { lesson039 } from './039.js';
import { lesson040 } from './040.js';
import { lesson041 } from './041.js';
import { lesson042 } from './042.js';
import { lesson043 } from './043.js';
import { lesson044 } from './044.js';
import { lesson045 } from './045.js';
import { lesson046 } from './046.js';
import { lesson047 } from './047.js';
import { lesson048 } from './048.js';
import { lesson049 } from './049.js';
import { lesson050 } from './050.js';
import { lesson051 } from './051.js';
import { lesson052 } from './052.js';
import { lesson053 } from './053.js';
import { lesson054 } from './054.js';
import { lesson055 } from './055.js';
import { lesson056 } from './056.js';
import { lesson057 } from './057.js';
import { lesson058 } from './058.js';
import { lesson059 } from './059.js';
import { lesson060 } from './060.js';
import { lesson061 } from './061.js';
import { lesson062 } from './062.js';
import { lesson063 } from './063.js';
import { lesson064 } from './064.js';
import { lesson065 } from './065.js';
import { lesson066 } from './066.js';
import { lesson067 } from './067.js';
import { lesson068 } from './068.js';
import { lesson069 } from './069.js';
import { lesson070 } from './070.js';

import { lessonTemplate } from './template.js';

export const historyData = [
    lessonDemo,
    lesson001,
    lesson002,
    lesson003,
    lesson004,
    lesson005,
    lesson006,
    lesson007,
    lesson008,
    lesson009,
    lesson010,
    lesson011,
    lesson012,
    lesson013,
    lesson014,
    lesson015,
    lesson016,
    lesson017,
    lesson018,
    lesson019,
    lesson020,
    lesson021,
    lesson022,
    lesson023,
    lesson024,
    lesson025,
    lesson026,
    lesson027,
    lesson028,
    lesson029,
    lesson030,
    lesson031,
    lesson032,
    lesson033,
    lesson034,
    lesson035,
    lesson036,
    lesson037,
    lesson038,
    lesson039,
    lesson040,
    lesson041,
    lesson042,
    lesson043,
    lesson044,
    lesson045,
    lesson046,
    lesson047,
    lesson048,
    lesson049,
    lesson050,
    lesson051,
    lesson052,
    lesson053,
    lesson054,
    lesson055,
    lesson056,
    lesson057,
    lesson058,
    lesson059,
    lesson060,
    lesson061,
    lesson062,
    lesson063,
    lesson064,
    lesson065,
    lesson066,
    lesson067,
    lesson068,
    lesson069,
    lesson070,
    lessonTemplate
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
