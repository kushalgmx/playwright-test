import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://pendo.netlify.app/
  await page.goto('https://pendo.netlify.app/');

  // Click input[type="email"]
  await page.click('input[type="email"]');

  // Fill [placeholder="kus@tilde.team"]
  await page.fill('[placeholder="kus@tilde.team"]', 'kushal@gmx.com');

  // Press Tab
  await page.press('[placeholder="kus@tilde.team"]', 'Tab');

  // Fill [placeholder="Peter Parker"]
  await page.fill('[placeholder="Peter Parker"]', 'Kushal Hada');

  // Press Tab
  await page.press('[placeholder="Peter Parker"]', 'Tab');

  // Fill [placeholder="Facebook"]
  await page.fill('[placeholder="Facebook"]', 'Microsoft');

  // Press Enter
  await page.press('[placeholder="Facebook"]', 'Enter');

  // Click button:has-text("Enter")
  await page.click('button:has-text("Enter")');

  // Click button:has-text("Enter")
  await page.click('button:has-text("Enter")');

  // Click button:has-text("Enter")
  await page.click('button:has-text("Enter")');

});