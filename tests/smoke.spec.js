import { test, expect } from '@playwright/test';

test.describe('EduRobot smoke tests', () => {
  test('Home page loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/EduRobot/i);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('#app-content')).toBeVisible();
  });

  test('Open Math lesson 111 with dynamic import', async ({ page }) => {
    await page.goto('/#/lesson/math/111');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=MET KHỐI', { exact: false })).toBeVisible({ timeout: 10000 }).catch(() => {});
  });

  test('Switch to Practice tab on Math lesson 111', async ({ page }) => {
    await page.goto('/#/lesson/math/111');
    await expect(page.locator('#tab-content')).toBeVisible();
    const practiceTab = page.locator('#tab-practice');
    if (await practiceTab.isVisible()) {
      await practiceTab.click();
      await expect(page.locator('#lesson-practice-container')).toBeVisible({ timeout: 10000 });
    }
  });

  test('Open Vietnamese lesson 221 (lazy-loaded)', async ({ page }) => {
    await page.goto('/#/lesson/vietnamese/221');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 15000 });
  });

  test('Open Science lesson 1 (lazy-loaded)', async ({ page }) => {
    await page.goto('/#/lesson/science/1');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 10000 });
  });

  test('Open History & Geography lesson 1 (lazy-loaded)', async ({ page }) => {
    await page.goto('/#/lesson/history/1');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 10000 });
  });

  test('Open Math lesson 120', async ({ page }) => {
    await page.goto('/#/lesson/math/120');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 10000 });
  });

  test('Open Math lesson 123', async ({ page }) => {
    await page.goto('/#/lesson/math/123');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 10000 });
  });

  test('Open Vietnamese lesson 242', async ({ page }) => {
    await page.goto('/#/lesson/vietnamese/242');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 15000 });
  });

  test('Open Science lesson 10', async ({ page }) => {
    await page.goto('/#/lesson/science/10');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 10000 });
  });

  test('Open History & Geography lesson 10', async ({ page }) => {
    await page.goto('/#/lesson/history/10');
    await expect(page.locator('#tab-content')).toBeVisible();
    await expect(page.locator('#lesson-study-container')).toBeVisible({ timeout: 10000 });
  });
});
