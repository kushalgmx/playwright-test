import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 3840, height: 2160 },
    ignoreHTTPSErrors: true,
  },
  timeout: 3300000
};
export default config;
