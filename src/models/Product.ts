import { formatAsPennies } from "../utils/NumberUtil";

export class Product {
  public code: string;
  public name: string;
  public price: number;

  /**
   * @param {string} code - unique product code
   * @param {string} name - user-facing name
   * @param {number} price - represented as an integer of pennies
   */
  constructor(code: string, name: string, price: number) {
    this.code = code;
    this.name = name;
    this.price = price;
  }

  getFormattedPrice() {
    return formatAsPennies(this.price);
  }
}
