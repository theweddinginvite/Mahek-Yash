import fs from 'fs';

const content = fs.readFileSync('./src/content.js', 'utf-8');
console.log(content.includes('mealTime: "8:00 PM"'));
