import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.pages';

test('User can login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto('https://www.saucedemo.com/');

  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL('https://www.saucedemo.com/fake');

});

test('Login fails with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user', 'wrong_password');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});
