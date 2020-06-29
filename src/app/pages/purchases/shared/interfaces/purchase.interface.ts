export interface IPurchase {
  id: number;
  productId?: number | null;
  productName?: string;
  quantityPurchased?: number | null;
  unitPrice?: number | null;
  sellerId?: number | null;
  sellerName?: string;
  purchaseCurrency?: string;
  purchaseDate?: string | Date;
}
