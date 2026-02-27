const xlsx = require('xlsx');
const fs = require('fs');

try {
    const workbook = xlsx.readFile('PPCT TV 5.xlsx');
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    fs.writeFileSync('ppct_tv.json', JSON.stringify(data, null, 2), 'utf8');
    console.log('Successfully saved to ppct_tv.json, rows:', data.length);
} catch (error) {
    console.error('Error parsing:', error.message);
}
