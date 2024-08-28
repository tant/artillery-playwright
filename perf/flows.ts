import { Page } from 'playwright';
import { expect } from '@playwright/test';
 
export async function helloFlow(page: Page) {
  await page.goto('https://www.artillery.io:8080');
  await expect(page.getByText('The Complete Load Testing Platform')).toBeVisible();
  
}

