const { test, expect, describe } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    // This assumes your app runs on port 8080 during testing
    // You might need to change the URL depending on your setup
    await page.goto('http://localhost:8080')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})