const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://worthify.co.uk/', { waitUntil: 'networkidle' });

  const html = await page.evaluate(() => document.documentElement.outerHTML);
  fs.writeFileSync('live_rendered.html', html);

  await browser.close();
})();
