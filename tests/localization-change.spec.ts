import { test, expect } from '@playwright/test';

test('Localization change from EN to ES', async ({ page }) => {
  await page.goto('https://csgoempire.com/roulette');
  await expect(page.locator('#nav-1')).toContainText('Marketplace');
  await page.getByTestId('empire-header').getByRole('button', { name: 'United-Kingdom ENG' }).click();
  await page.getByText('Español', { exact: true }).click();
  await page.getByTestId('empire-header').getByRole('heading', { name: 'Mercado' }).click();
  await page.getByTestId('modal-close-button').click();
});