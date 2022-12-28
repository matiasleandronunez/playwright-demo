import { test, expect } from '@playwright/test';
import { StorefrontPage } from '../pages/storefront_page';
import { TilePage } from '../pages/tile_page';

test('add item to cart', async ({ page }) => {
  const storefront_page = new StorefrontPage(page);
  const first_tile_page = new TilePage(page,'');
  
  await storefront_page.go();

  await expect(storefront_page.headerTitle).toHaveText('Welcome to the atsea shop');

  await first_tile_page.addProductToCart();

  await expect(storefront_page.itemsInCartText).toContainText('1');
});
