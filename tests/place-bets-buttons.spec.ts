import { test, expect } from '@playwright/test';

async function waitForCountdownToBeGreaterThan(page, value) {
  await page.waitForFunction((expectedValue) => {
    const countdownElement = document.querySelector('[data-testid="countdown-time"]');
    if (!countdownElement) return false;
    const countdownValue = parseFloat(countdownElement.textContent || '0'); 
    return countdownValue > expectedValue; 
  }, value);
}


async function testBetButton(page, buttonTestId) {
  await waitForCountdownToBeGreaterThan(page, 10); 
  await page.getByTestId(buttonTestId).click(); 
  await page.locator('h2').filter({ hasText: 'Log In' }).click(); 
  await expect(page.locator('h2').filter({ hasText: 'Log In' })).toBeVisible();
  await page.getByText('Please register or log in to').click();
  await page.getByTestId('modal-close-button').click(); 
}


test.beforeEach(async ({ page }) => {
  await page.goto('https://csgoempire.com/roulette');
});


test('Bet button CT', async ({ page }) => {
  await testBetButton(page, 'bet-button-ct');
});

test('Bet button bonus', async ({ page }) => {
  await testBetButton(page, 'bet-button-bonus');
});

test('Bet button T', async ({ page }) => {
  await testBetButton(page, 'bet-button-T');
});