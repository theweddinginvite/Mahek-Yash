export function forceDownload(doc, filename) {
  // Mobile Firefox often ignores the download attribute on Blob URLs and navigates to the blob directly.
  // Using a data URI avoids this issue for moderately sized PDFs.
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
    // Standard approach for other browsers
    const blob = doc.output("blob");
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }
}
