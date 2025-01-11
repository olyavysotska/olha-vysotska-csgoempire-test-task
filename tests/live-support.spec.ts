import { test, expect } from '@playwright/test';

test('Live support', async ({ page }) => {
  await page.goto('https://csgoempire.com/roulette');
  await page.locator('.fixed > .popover-container > #popover-reference > .flex').click();
  await expect(page.locator('iframe[name="intercom-messenger-frame"]').contentFrame().locator('h2')).toContainText('How can we help?');
  await expect(page.locator('iframe[name="intercom-messenger-frame"]').contentFrame().getByTestId('spaces-home')).toContainText('Ask a questionAI Agent and team can help');
});