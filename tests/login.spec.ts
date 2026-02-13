import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';

test('User can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('testuser', 'password123');

  await expect(page).toHaveURL(/dashboard/);
});
