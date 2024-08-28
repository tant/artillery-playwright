import { test, expect } from '@playwright/test';

test('vo trang home', async ({ page }) => {
  await page.goto('https://example.com/');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

