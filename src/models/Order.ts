import { billOffers, productOffers } from "../config/data";
import { Offer, OfferValueType } from "./Offer";
import { Product } from "./Product";

export type Item = {
  product: Product;
  quantity: number;
  price: number;
};

export interface Order {
  items: Item[];
  total: number;
  finalTotal: number;
}

export namespace Order {
  export function initialState(): Order {
    return {
      items: [],
      total: 0,
      finalTotal: 0,
    };
  }
  export function addItem(order: Order, product: Product) {
    const item = order.items.find((item) => item.product.code === product.code);
    if (item) {
      item.quantity++;
      item.price = item.product.price * item.quantity;
    } else {
      order.items = [
        ...order.items,
        { product, quantity: 1, price: product.price },
      ];
    }
  }

  export function computeTotal(order: Order) {
    computeProductOffers(order);
    const total = order.items.reduce((sum, item) => sum + item.price, 0);
    console.log("Computed total", total);
    order.total = total;
    computeBillOffer(order);
  }

  function computeProductOffers(order: Order) {
    order.items.forEach((item) => {
      if (!productOffers[item.product.code]) {
        return;
      }
      const offer = productOffers[item.product.code];
      if (item.quantity <= offer.sourceQuantity) {
        return;
      }
      let itemQuantity = item.quantity;
      let totalPrice = 0;
      while (itemQuantity >= offer.sourceQuantity + offer.targetQuantity) {
        totalPrice += offer.sourceQuantity * item.product.price;
        totalPrice += computeOfferPrice(
          offer.targetQuantity * item.product.price,
          offer
        );
        itemQuantity -= offer.sourceQuantity + offer.targetQuantity;
      }
      // Adding the price of the left over quantity
      item.price = totalPrice + Math.max(0, itemQuantity) * item.product.price;
    });
  }

  function computeBillOffer(order: Order) {
    const eligibleOffer = billOffers.find(
      (offer) => order.total > offer.conditionalAmount * 100
    );
    if (eligibleOffer) {
      order.finalTotal = computeOfferPrice(order.total, eligibleOffer);
    }
  }

  function computeOfferPrice(price: number, offer: Offer) {
    switch (offer.offerValueType) {
      case OfferValueType.PER_OFF:
        return price - (price * offer.offerValue) / 100;
      case OfferValueType.PRICE_OFF:
        return Math.max(0, price - offer.offerValue * 100);
      case OfferValueType.FIXED_PRICE:
        return offer.offerValue * 100;
      default:
        return price;
    }
  }
}
