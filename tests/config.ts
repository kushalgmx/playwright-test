import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 2560, height: 1440 },
    ignoreHTTPSErrors: true
  },
  timeout: 3300000,
  reporter: [['list'], ['json', { outputFile: 'test-results/desktop/desktop-report.json' }]],
};
export default config;
