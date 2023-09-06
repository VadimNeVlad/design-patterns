import { DiscountStrategy } from "./strategies";

export class Product {
  constructor(
    public name = "",
    public price = 0,
    public discount: DiscountStrategy | null = null
  ) {}

  getDiscountPrice(): number {
    if (!this.discount) return this.price;
    return this.discount.calculate(this.price);
  }

  setDiscountStrategy(discountStrategy: DiscountStrategy): void {
    this.discount = discountStrategy;
  }
}
