import fs from 'fs';

const p1 = '/Users/kyratna/theweddinginvite_workspace/Mahek-Yash/src/utils/generateVenuePdf.js';
const p2 = '/Users/kyratna/theweddinginvite_workspace/Yash-Mahek/src/utils/generateVenuePdf.js';

let c1 = fs.readFileSync(p1, 'utf8');
c1 = c1.replace('undefined', 'export async function createVenuePdfDocument');
fs.writeFileSync(p1, c1);

let c2 = fs.readFileSync(p2, 'utf8');
c2 = c2.replace('undefined', 'export async function createVenuePdfDocument');
fs.writeFileSync(p2, c2);
