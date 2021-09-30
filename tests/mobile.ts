// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 3300000,
  projects: [
    // "Pixel 4" tests use Chromium browser.
    {
      name: 'Pixel 4',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 4'],
        video: 'on'
      },
    },

    // "iPhone 11" tests use WebKit browser.
    {
      name: 'iPhone 11',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 11'],
        video: 'on'
      },
    },
  ],
};
export default config;
