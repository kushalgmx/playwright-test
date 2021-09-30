import { test, expect } from '@playwright/test';

test('test', async ({ browser }) => {

  for (let i = 0; i < 10; i++) {
    const context = await browser.newContext();
    const page = await context.newPage();
    // Go to https://coloradoquiz.web.app/
    await page.goto('https://coloradoquiz.web.app/');

    // Click button:has-text("Quizzes")
    await page.click('button:has-text("Quizzes")');

    // Click button[role="menuitem"]:has-text("US History")
    await page.click('button[role="menuitem"]:has-text("US History")');
    await expect(page).toHaveURL('https://coloradoquiz.web.app/quiz/us-history');

    // Click button:has-text("A. 1732")
    await page.click('button:has-text("A. 1732")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("2")
    await page.click('mat-step-header[role="tab"]:has-text("2")');

    // Click #cdk-step-content-0-1 button:has-text("D. 1722")
    await page.click('#cdk-step-content-0-1 button:has-text("D. 1722")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("3")
    await page.click('mat-step-header[role="tab"]:has-text("3")');

    // Click #cdk-step-content-0-2 button:has-text("B. 1961")
    await page.click('#cdk-step-content-0-2 button:has-text("B. 1961")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("4")
    await page.click('mat-step-header[role="tab"]:has-text("4")');

    // Click button:has-text("B. 1946")
    await page.click('button:has-text("B. 1946")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("5")
    await page.click('mat-step-header[role="tab"]:has-text("5")');

    // Click button:has-text("B. 1924")
    await page.click('button:has-text("B. 1924")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("6")
    await page.click('mat-step-header[role="tab"]:has-text("6")');

    // Click #cdk-step-content-0-5 button:has-text("B. 1946")
    await page.click('#cdk-step-content-0-5 button:has-text("B. 1946")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("7")
    await page.click('mat-step-header[role="tab"]:has-text("7")');

    // Click button:has-text("B. 1911")
    await page.click('button:has-text("B. 1911")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("8")
    await page.click('mat-step-header[role="tab"]:has-text("8")');

    // Click button:has-text("B. 1913")
    await page.click('button:has-text("B. 1913")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("9")
    await page.click('mat-step-header[role="tab"]:has-text("9")');

    // Click #cdk-step-content-0-8 button:has-text("B. 1913")
    await page.click('#cdk-step-content-0-8 button:has-text("B. 1913")');

    // Click button:has-text("Dandy!")
    await page.click('button:has-text("Dandy!")');

    // Click mat-step-header[role="tab"]:has-text("10")
    await page.click('mat-step-header[role="tab"]:has-text("10")');

    // Click #cdk-step-content-0-9 button:has-text("B. 1924")
    await page.click('#cdk-step-content-0-9 button:has-text("B. 1924")');

    // Click button:has-text("Swell!")
    await page.click('button:has-text("Swell!")');
    await context.close();
  }
  await browser.close();
});