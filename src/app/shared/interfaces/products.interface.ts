export interface IProduct {
  id: number;
  name: string;
  imageUrlId?: string;
  sellingPrice?: number;
  buyingPrice?: number;
  buyingPriceCurrency?: 'USD' | 'KES' | 'EUR' | 'GBP' | 'INR' | 'ZAR';
  sellingPriceCurrency?: 'USD' | 'KES' | 'EUR' | 'GBP' | 'INR' | 'ZAR';
  maxAmountCheck?: number;
  minAmountCheck?: number;
  min?: number;
  max?: number;
  count?: number;
}
