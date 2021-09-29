import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://broncos.neocities.org/index.html
  await page.goto('https://broncos.neocities.org/index.html');

  // Click img[alt="mood boost"]
  await page.click('img[alt="mood boost"]');
  await expect(page).toHaveURL('https://broncos.neocities.org/end.html');

});