import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://techmeme.com/
  await page.goto('https://techmeme.com/');

  // Click text=River
  await page.click('text=River');
  await expect(page).toHaveURL('https://techmeme.com/river');

  // Click text=About
  await page.click('text=About');
  await expect(page).toHaveURL('https://techmeme.com/about');

  // Click :nth-match(:text("memeorandum"), 3)
  await page.click(':nth-match(:text("memeorandum"), 3)');
  await expect(page).toHaveURL('https://www.memeorandum.com/');

  // Go to https://www.memeorandum.com/river
  await page.goto('https://www.memeorandum.com/river');

});