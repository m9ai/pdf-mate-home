const { chromium } = require('playwright');
const path = require('path');

async function captureScreenshot(htmlFile, outputFile, width, height) {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width, height }
  });
  
  const filePath = path.resolve(htmlFile);
  await page.goto('file://' + filePath);
  
  // Wait for fonts to load
  await page.waitForTimeout(1000);
  
  await page.screenshot({
    path: outputFile,
    type: 'png'
  });
  
  await browser.close();
  console.log(`Generated: ${outputFile} (${width}x${height})`);
}

(async () => {
  // Generate Cover Image (1280x720)
  await captureScreenshot('cover-image.html', 'pdf-mate-cover.png', 1280, 720);
  
  // Generate Thumbnail (600x600)
  await captureScreenshot('thumbnail-image.html', 'pdf-mate-thumbnail.png', 600, 600);
  
  console.log('All images generated successfully!');
})();
