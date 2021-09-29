import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://myreactivematerial.web.app/
  await page.goto('https://myreactivematerial.web.app/');

  // Click button:has-text("Refresh")
  await page.click('button:has-text("Refresh")');

});