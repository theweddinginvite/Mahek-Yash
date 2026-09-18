import fs from 'fs';
import path from 'path';

const helper = `
// Helper to force download without opening a new tab and with the correct filename (fixes Firefox mobile)
function forceDownloadPdf(doc, filename) {
  const isFirefoxMobile = /Android/i.test(navigator.userAgent) && /Firefox/i.test(navigator.userAgent);
  if (isFirefoxMobile) {
    const dataStr = doc.output("datauristring");
    const a = document.createElement("a");
    a.href = dataStr;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 250);
  }
}
`;

function patchFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (!content.includes('function forceDownloadPdf')) {
    // Insert helper near top, after imports
    const lines = content.split('\n');
    let insertIdx = 0;
    while(lines[insertIdx].startsWith('import ')) insertIdx++;
    lines.splice(insertIdx, 0, helper);
    content = lines.join('\n');
  }

  // Replace doc.save(filename) with forceDownloadPdf(doc, filename)
  content = content.replace(/doc\.save\(filename\);/g, 'forceDownloadPdf(doc, filename);');
  
  fs.writeFileSync(filePath, content);
  console.log('Patched', filePath);
}

const repos = ['Mahek-Yash', 'Yash-Mahek'];
const files = ['src/utils/generateEventPdf.js', 'src/utils/generateVenuePdf.js'];

repos.forEach(repo => {
  files.forEach(file => {
    patchFile(`/Users/kyratna/theweddinginvite_workspace/${repo}/${file}`);
  });
});
