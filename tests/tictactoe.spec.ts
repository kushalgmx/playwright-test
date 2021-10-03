import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://mycreatereactapp.vercel.app/
  await page.goto('https://mycreatereactapp.vercel.app/');

  // Click button
  await page.click('button');

  // Click #root div div div div >> :nth-match(button, 3)
  await page.click('#root div div div div >> :nth-match(button, 3)');

  // Click div:nth-child(3) button
  await page.click('div:nth-child(3) button');

  // Click div div:nth-child(2) button
  await page.click('div div:nth-child(2) button');

  // Click div:nth-child(3) button:nth-child(3)
  await page.click('div:nth-child(3) button:nth-child(3)');

  // Click text=XX >> :nth-match(button, 2)
  await page.click('text=XX >> :nth-match(button, 2)');

  // Click div div:nth-child(2) button:nth-child(2)
  await page.click('div div:nth-child(2) button:nth-child(2)');

  // Click text=Go to game start
  await page.click('text=Go to game start');

  // Click #root div div div div >> :nth-match(button, 3)
  await page.click('#root div div div div >> :nth-match(button, 3)');

  // Click div:nth-child(3) button
  await page.click('div:nth-child(3) button');

  // Click button
  await page.click('button');

  // Click text=XX >> :nth-match(button, 2)
  await page.click('text=XX >> :nth-match(button, 2)');

  // Click div:nth-child(3) button:nth-child(3)
  await page.click('div:nth-child(3) button:nth-child(3)');

  // Click div div:nth-child(2) button:nth-child(2)
  await page.click('div div:nth-child(2) button:nth-child(2)');

  // Click div div:nth-child(2) button:nth-child(3)
  await page.click('div div:nth-child(2) button:nth-child(3)');

  // Click text=Go to game start
  await page.click('text=Go to game start');

  // Click button
  await page.click('button');

  // Click div:nth-child(3) button
  await page.click('div:nth-child(3) button');

  // Click #root div div div div >> :nth-match(button, 3)
  await page.click('#root div div div div >> :nth-match(button, 3)');

  // Click text=XX >> :nth-match(button, 2)
  await page.click('text=XX >> :nth-match(button, 2)');

  // Click div:nth-child(3) button:nth-child(3)
  await page.click('div:nth-child(3) button:nth-child(3)');

  // Click div div:nth-child(2) button:nth-child(3)
  await page.click('div div:nth-child(2) button:nth-child(3)');

  // Click div div:nth-child(2) button:nth-child(2)
  await page.click('div div:nth-child(2) button:nth-child(2)');

});