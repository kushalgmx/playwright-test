import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    viewport: { width: 1366, height: 768 },
    ignoreHTTPSErrors: true,
    video: 'on'
  },
  timeout: 3300000,
  reporter: [['list'], ['json', { outputFile: 'test-results/desktop/desktop-report.json' }]],
};
export default config;
