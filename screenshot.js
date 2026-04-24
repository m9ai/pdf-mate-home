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
  
  // Generate Small Promo Tile (440x280)
  await captureScreenshot('small-promo.html', 'pdf-mate-small-promo.png', 440, 280);
  
  // Generate Large Promo Tile (1400x560)
  await captureScreenshot('large-promo.html', 'pdf-mate-large-promo.png', 1400, 560);
  
  // Generate Screenshots (1280x800) — no "Install it now", clean feature showcase
  await captureScreenshot('screenshot-template.html?feature=merge', 'screenshot-01-merge.png', 1280, 800);
  await captureScreenshot('screenshot-template.html?feature=split', 'screenshot-02-split.png', 1280, 800);
  await captureScreenshot('screenshot-template.html?feature=rotate', 'screenshot-03-rotate.png', 1280, 800);
  await captureScreenshot('screenshot-template.html?feature=delete', 'screenshot-04-delete.png', 1280, 800);
  await captureScreenshot('screenshot-template.html?feature=reorder', 'screenshot-05-reorder.png', 1280, 800);
  
  console.log('All images generated successfully!');
})();
