import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base_page';

export class StorefrontPage extends BasePage{
  readonly checkoutButton: Locator;
  readonly itemsInCartText: Locator;
  readonly headerTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.checkoutButton = page.locator('div.checkout-button div', { hasText: 'Checkout' });
    this.itemsInCartText = page.locator('div.cartDigit');
    this.headerTitle = page.locator('div.headerTitle');
  }

  async go() {
    await this.page.goto('http://localhost:8080/index.html');
  }
}