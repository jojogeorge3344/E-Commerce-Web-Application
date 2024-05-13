export interface BasketItem {
  productId: number;
  productName: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
}


export interface Basket {
  id: number;
  buyerId: string;
  basketItemDtos: BasketItem[];
}
