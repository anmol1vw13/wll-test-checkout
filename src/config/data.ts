import {
  BillOffer,
  Offer,
  OfferValueType,
  ProductOffer,
} from "../models/Offer";
import { Product } from "../models/Product";

export const productData = [
  new Product("CA6", "Cake", 200),
  new Product("A21", "Kitty Litter", 1899),
  new Product("G95", "Asparagus", 83),
];

export const offerData: Offer[] = [
  {
    offerType: "PRODUCT",
    productCode: "G95",
    sourceQuantity: 1,
    targetQuantity: 1,
    offerValueType: OfferValueType.PER_OFF,
    offerValue: 100,
  },
  {
    offerType: "BILL",
    conditionalAmount: 10,
    offerValueType: OfferValueType.PER_OFF,
    offerValue: 20,
  },
];

export let productOffers: Record<string, ProductOffer> = offerData.reduce(
  (offers: Record<string, ProductOffer>, offer: Offer) => {
    if (offer.offerType === "PRODUCT") {
      offers[offer.productCode] = offer;
    }
    return offers;
  },
  {}
);
export let billOffers: BillOffer[] = offerData
  .reduce((offers: BillOffer[], offer: Offer) => {
    if (offer.offerType === "BILL") {
      offers.push(offer);
    }
    return offers;
  }, [])
  .sort(
    (o1: BillOffer, o2: BillOffer) =>
      o2.conditionalAmount - o1.conditionalAmount
  );
