export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  articl: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ProductSliceState {
  items: Product[];
  status: Status;
}

export type ProductParams = {
  typeChand?: number;
  sortBy?: 'raiting' | 'price' | 'name';
  order?: 'desc' | 'asc';
  search?: string;
};
