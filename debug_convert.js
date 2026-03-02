const fs = require('fs');
const path = require('path');
const url = require('url');

global.window = {};
global.document = { querySelector: () => null };
function createBlock() { return ''; }
global.window.createBlock = createBlock;
global.createBlock = createBlock;

async function run() {
    const file = path.resolve('js/data/vietnamese/lessons/231-hoi-thoi-com-thi-o-dong-van.js');
    const moduleUrl = url.pathToFileURL(file).href;
    const mod = await import(moduleUrl);
    const varName = Object.keys(mod)[0];
    const data = mod[varName];
    // console.log(JSON.stringify(data, null, 2));
    const lessonBlocks = data.tabs.lesson?.blocks || data.tabs.study?.blocks || [];
    console.log("Found lesson blocks:", lessonBlocks.length);
    for (let i = 0; i < lessonBlocks.length; i++) {
        const b = lessonBlocks[i];
        console.log(`Block ${i} type:`, b.type, "| has content:", !!b.content);
        if (b.type === 'header') console.log("Header text:", b.text);
    }
}
run().catch(console.error);
