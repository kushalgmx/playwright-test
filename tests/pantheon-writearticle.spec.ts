import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://live-testautomation.pantheonsite.io/user/login
  await page.goto('https://live-testautomation.pantheonsite.io/user/login');

  // Click input[name="name"]
  await page.click('input[name="name"]');

  // Fill input[name="name"]
  await page.fill('input[name="name"]', 'testauthor');

  // Press Tab
  await page.press('input[name="name"]', 'Tab');

  // Fill input[name="pass"]
  await page.fill('input[name="pass"]', 'QamXnceV4gJBN2X');

  // Click input:has-text("Log in")
  await page.click('input:has-text("Log in")');
  await expect(page).toHaveURL('https://live-testautomation.pantheonsite.io/user/2');

  // Click text=Add content
  await page.click('text=Add content');
  await expect(page).toHaveURL('https://live-testautomation.pantheonsite.io/node/add');

  // Click text=Article
  await page.click('text=Article');
  await expect(page).toHaveURL('https://live-testautomation.pantheonsite.io/node/add/article');

  // Click input[name="title[0][value]"]
  await page.click('input[name="title[0][value]"]');

  // Fill input[name="title[0][value]"]
  await page.fill('input[name="title[0][value]"]', 'look ma no hands');

  // Click p
  await page.frame({
    url: 'about:blank'
  }).click('p');

  // Click input[name="field_tags[target_id]"]
  await page.click('input[name="field_tags[target_id]"]');

  // Fill input[name="field_tags[target_id]"]
  await page.fill('input[name="field_tags[target_id]"]', 'test,automation,playwright');

  // Click textarea[name="revision_log[0][value]"]
  await page.click('textarea[name="revision_log[0][value]"]');

  // Fill textarea[name="revision_log[0][value]"]
  await page.fill('textarea[name="revision_log[0][value]"]', 'add an article');

  // Click input:has-text("Save")
  await page.click('input:has-text("Save")');
//   await expect(page).toHaveURL('https://live-testautomation.pantheonsite.io/node/3');

});