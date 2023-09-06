import { Product } from "./context";
import {
  PersonalDiscountStrategy,
  SeasonalDiscountStrategy,
} from "./strategies";

const product = new Product("Iphone", 1000, new PersonalDiscountStrategy());
product.setDiscountStrategy(new SeasonalDiscountStrategy());
