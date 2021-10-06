import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://live-election2020.pantheonsite.io/
  await page.goto('https://live-election2020.pantheonsite.io/');

  // Click text=Welcome
  await page.click('text=Welcome');
  await expect(page).toHaveURL('https://live-election2020.pantheonsite.io/welcome');

  // Click text=Election 2020
  await page.click('text=Election 2020');
  await expect(page).toHaveURL('https://live-election2020.pantheonsite.io/');

});