import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './base_page';

export class TilePage extends BasePage{
  readonly baseTile: Locator;
  readonly imageDiv: Locator;
  readonly titleDiv: Locator;
  readonly descriptionDiv: Locator;
  readonly priceDiv: Locator;
  readonly addButton: Locator;

  constructor(page: Page, title: string) {
    super(page);
    if(title == '')
    {
      this.baseTile = page.locator("xpath=//div[div[@class='tileTitle']]").first();
    }
    else
    {
      this.baseTile = page.locator(`xpath=//div[div[@class='tileTitle'][contains(text(),'${ title }')]]`).first();
    }
    this.imageDiv = this.baseTile.locator('div.tileImage');
    this.titleDiv = this.baseTile.locator('div.tileTitle');
    this.descriptionDiv = this.baseTile.locator('div.tileDescription');
    this.priceDiv = this.baseTile.locator('div.tilePrice');
    this.addButton = this.baseTile.locator('div.tileAdd > button');
  }

  async addProductToCart() {
    this.addButton.click();
  }
}