import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 2560, height: 1440 },
    ignoreHTTPSErrors: true,
    video: 'on'
  },
  timeout: 3300000
};
export default config;
