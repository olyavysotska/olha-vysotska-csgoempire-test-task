import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://csgoempire.com/roulette');
});

async function placeBetAndVerify(page, inputValue, testId, expectedValue) {
  await page.getByPlaceholder('Enter bet amount...').click();
  await page.getByPlaceholder('Enter bet amount...').fill(inputValue);

  await page.getByTestId(testId).click();

  await expect(page.getByPlaceholder('Enter bet amount...')).toBeVisible();
  await expect(page.getByPlaceholder('Enter bet amount...')).toHaveValue(expectedValue);
}

test('Place bet - clear', async ({ page }) => {
  await placeBetAndVerify(page, '12', 'roulette-bet-input-clearundefined', '0');
});

test('Place bet - add (+0.01)', async ({ page }) => {
  await placeBetAndVerify(page, '14', 'roulette-bet-input-+0.01', '14.01');
});

test('Place bet - add (+0.1)', async ({ page }) => {
  await placeBetAndVerify(page, '14', 'roulette-bet-input-+0.1', '14.1');
});

test('Place bet - add (+1)', async ({ page }) => {
  await placeBetAndVerify(page, '14', 'roulette-bet-input-+1', '15');
});

test('Place bet - add (+10)', async ({ page }) => {
  await placeBetAndVerify(page, '14', 'roulette-bet-input-+10', '24');
});

test('Place bet - add (+100)', async ({ page }) => {
  await placeBetAndVerify(page, '14', 'roulette-bet-input-+100', '114');
});

test('Place bet - add (1/2)', async ({ page }) => {
  await placeBetAndVerify(page, '14', 'roulette-bet-input-1/2', '7');
});

test('Place bet - add (x2)', async ({ page }) => {
  await placeBetAndVerify(page, '14', 'roulette-bet-input-x2', '28');
});

test('Place bet - add (max)', async ({ page }) => {
  await placeBetAndVerify(page, '14', 'roulette-bet-input-maxundefined', '14');
});