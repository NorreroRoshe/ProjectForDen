export type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  articl: string;
  count: number;
};

export interface CartSliceState {
totalPrice: number;
items: CartItem[];
};
