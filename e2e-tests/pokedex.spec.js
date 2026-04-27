/* eslint-disable */
const { test, expect, describe } = require('@playwright/test');

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    // We point to localhost where the CI will run the app
    await page.goto('http://localhost:8080');
    await expect(page.getByText('ivysaur')).toBeVisible();
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible();
  });
});