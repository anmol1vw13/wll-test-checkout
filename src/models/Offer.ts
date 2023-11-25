export enum OfferValueType {
  PER_OFF,
  PRICE_OFF,
  FIXED_PRICE,
}

export type ProductOffer = {
  offerType: "PRODUCT";
  productCode: string;
  sourceQuantity: number;
  targetQuantity: number;
  offerValueType: OfferValueType;
  offerValue: number;
};

export type BillOffer = {
  offerType: "BILL";
  conditionalAmount: number;
  offerValueType: OfferValueType;
  offerValue: number;
};

export type Offer = ProductOffer | BillOffer;
