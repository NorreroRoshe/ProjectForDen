import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product, ProductParams } from './types';

export const fetchProduct = createAsyncThunk<Product[], ProductParams>(
  'product/fetchProductStatus',
  async (params) => {
    const { data } = await axios.get<Product[]>(
      'https://6348f1f20b382d796c7a79b1.mockapi.io/Pizza',
      {
        params,
      },
    );
    // return data as Product[];                  //С помощю as объяснаяем что такое data, а это массив продукта коьорое мы получаем из бэка , поэтому мы берем камАйтем
    return data;
  },
);
