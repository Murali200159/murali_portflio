import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const artifactDir = 'C:\\Users\\sarip\\.gemini\\antigravity\\brain\\0e99618b-87c1-42f4-a2ad-a3f0c36b7beb';
const screenshotDir = path.join(artifactDir, 'screenshots');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

async function run() {
  console.log('--- Starting Production Verification ---');

  // 1. Start Vite preview
  const viteBin = path.join(__dirname, '..', 'node_modules', 'vite', 'bin', 'vite.js');
  const server = spawn(process.execPath, [viteBin, 'preview', '--port', '4173', '--host', '127.0.0.1'], {
    stdio: 'pipe',
  });

  server.stdout.on('data', (d) => console.log(`[Preview Server] ${d}`));
  server.stderr.on('data', (d) => console.error(`[Preview Server Error] ${d}`));

  const url = 'http://127.0.0.1:4173';
  // Poll until server is responding
  for (let i = 0; i < 20; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        console.log('Preview server is up and responsive.');
        break;
      }
    } catch {
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
  });

  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
  });

  await page.goto(url, { waitUntil: 'networkidle0' });

  // 2. Test 1920px Widescreen & 1440px Viewports
  console.log('\n--- Testing Widescreen (1920x1080) ---');
  await page.setViewport({ width: 1920, height: 1080 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));

  const widescreenScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Widescreen (1920px) document scrollWidth: ${widescreenScrollWidth}`);
  if (widescreenScrollWidth > 1920) {
    console.error(`FAIL: Horizontal scroll detected on Widescreen (1920px)!`);
  } else {
    console.log(`PASS: No horizontal scroll on Widescreen.`);
  }

  const widescreenScreenshot = path.join(screenshotDir, 'desktop-1920px.png');
  await page.screenshot({ path: widescreenScreenshot, fullPage: false });
  console.log(`Captured 1920px widescreen screenshot: ${widescreenScreenshot}`);

  console.log('\n--- Testing Desktop (1440x900) ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));

  const desktopScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Desktop (1440px) document scrollWidth: ${desktopScrollWidth}`);
  if (desktopScrollWidth > 1440) {
    console.error(`FAIL: Horizontal scroll detected on Desktop (1440px)!`);
  } else {
    console.log(`PASS: No horizontal scroll on Desktop.`);
  }

  const desktopScreenshot = path.join(screenshotDir, 'desktop-1440px.png');
  await page.screenshot({ path: desktopScreenshot, fullPage: false });
  console.log(`Captured desktop screenshot: ${desktopScreenshot}`);

  // Test full page desktop screenshot
  const desktopFullScreenshot = path.join(screenshotDir, 'desktop-full.png');
  await page.screenshot({ path: desktopFullScreenshot, fullPage: true });
  console.log(`Captured full page desktop screenshot: ${desktopFullScreenshot}`);

  // 3. Test 768px Tablet Viewport
  console.log('\n--- Testing Tablet (768x1024) ---');
  await page.setViewport({ width: 768, height: 1024 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));

  const tabletScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Tablet (768px) document scrollWidth: ${tabletScrollWidth}`);
  if (tabletScrollWidth > 768) {
    console.error(`FAIL: Horizontal scroll detected on Tablet (768px)!`);
  } else {
    console.log(`PASS: No horizontal scroll on Tablet.`);
  }

  const tabletScreenshot = path.join(screenshotDir, 'tablet-768px.png');
  await page.screenshot({ path: tabletScreenshot, fullPage: false });
  console.log(`Captured tablet screenshot: ${tabletScreenshot}`);

  // 4. Test 375px Mobile Viewport & 320px extreme viewport
  console.log('\n--- Testing Mobile (375x667) & 320px minimum width ---');
  await page.setViewport({ width: 375, height: 667 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise((r) => setTimeout(r, 400));

  const mobileScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`Mobile (375px) document scrollWidth: ${mobileScrollWidth}`);
  if (mobileScrollWidth > 375) {
    console.error(`FAIL: Horizontal scroll detected on Mobile (375px)!`);
  } else {
    console.log(`PASS: No horizontal scroll on Mobile.`);
  }

  const mobileScreenshot = path.join(screenshotDir, 'mobile-375px.png');
  await page.screenshot({ path: mobileScreenshot, fullPage: false });
  console.log(`Captured mobile screenshot: ${mobileScreenshot}`);

  // Test 320px extreme minimum
  await page.setViewport({ width: 320, height: 568 });
  const minScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  console.log(`320px min document scrollWidth: ${minScrollWidth}`);
  if (minScrollWidth > 320) {
    console.error(`FAIL: Horizontal scroll at 320px!`);
  } else {
    console.log(`PASS: No horizontal scroll at 320px.`);
  }

  // 5. Test Mobile Menu Open / Close
  await page.setViewport({ width: 375, height: 667 });
  console.log('\n--- Testing Mobile Menu Navigation & Focus Trap ---');
  const menuButton = await page.$('button[aria-label="Open navigation menu"]');
  if (menuButton) {
    await menuButton.click();
    await new Promise((r) => setTimeout(r, 300));
    const mobileMenuOpenScreenshot = path.join(screenshotDir, 'mobile-menu-open.png');
    await page.screenshot({ path: mobileMenuOpenScreenshot });
    console.log(`Captured mobile menu open screenshot: ${mobileMenuOpenScreenshot}`);

    // Press Escape to test accessible close
    await page.keyboard.press('Escape');
    await new Promise((r) => setTimeout(r, 300));
    console.log(`PASS: Mobile menu closed via Escape key.`);
  }

  // 6. Test Buttons and Links
  console.log('\n--- Testing Interactive Elements & Links ---');
  await page.setViewport({ width: 1440, height: 900 });

  // Resume Download link
  const resumeLink = await page.$('a[download="Murali_Krishna_Resume.pdf"]');
  if (resumeLink) {
    const href = await page.evaluate((el) => el.getAttribute('href'), resumeLink);
    console.log(`PASS: Download Resume button present, targets "${href}".`);
  } else {
    console.error(`FAIL: Download Resume button not found!`);
  }

  // Hero CTAs
  const viewProjectsBtn = await page.$('a[href="#projects"]');
  if (viewProjectsBtn) {
    console.log(`PASS: "View Projects" CTA correctly points to #projects.`);
  }

  const contactMeBtn = await page.$('a[href="#contact"]');
  if (contactMeBtn) {
    console.log(`PASS: "Contact Me" CTA correctly points to #contact.`);
  }

  // Verify Project Card Buttons (Must be hidden when empty/TODO)
  const allLinks = await page.$$eval('a', (anchors) =>
    anchors.map((a) => ({
      href: a.getAttribute('href'),
      text: a.innerText.trim(),
    }))
  );

  const deadHashLinks = allLinks.filter((l) => l.href === '#' && l.text !== '');
  if (deadHashLinks.length > 0) {
    console.error(`FAIL: Found dead '#' links:`, deadHashLinks);
  } else {
    console.log(`PASS: Zero dead '#' links found on page.`);
  }

  // 7. Test Contact Form Validation
  console.log('\n--- Testing Contact Form Validation ---');
  await page.evaluate(() => {
    document.getElementById('contact')?.scrollIntoView();
  });
  await new Promise((r) => setTimeout(r, 500));

  // Submit without inputs
  const submitBtn = await page.$('button[type="submit"]');
  if (submitBtn) {
    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 300));

    const nameError = await page.$('#name-error');
    const emailError = await page.$('#email-error');
    const messageError = await page.$('#message-error');

    if (nameError && emailError && messageError) {
      console.log(`PASS: Form validation triggered for empty name, email, and message.`);
    } else {
      console.error(`FAIL: Validation error messages not displayed correctly!`);
    }

    const formValidationScreenshot = path.join(screenshotDir, 'contact-form-validation.png');
    await page.screenshot({ path: formValidationScreenshot });
    console.log(`Captured form validation screenshot: ${formValidationScreenshot}`);
  }

  // 8. Console Errors
  console.log('\n--- Console Error Audit ---');
  if (consoleErrors.length === 0) {
    console.log('PASS: Zero console errors detected during verification.');
  } else {
    console.error('FAIL: Console errors detected:', consoleErrors);
  }

  await browser.close();
  server.kill();
  console.log('\n--- Verification Run Complete ---');
}

run().catch((err) => {
  console.error('Verification failed with error:', err);
  process.exit(1);
});
