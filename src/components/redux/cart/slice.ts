import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../../utils/calcTotalPrice';
import { getCartFromLS } from '../../../utils/getCartFromLS';
import { CartItem, CartSliceState } from './types';

const { items, totalPrice } = getCartFromLS(); //Функция localStorage

const initialState: CartSliceState = {
  totalPrice,
  items,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id); // Если этот объект нашелся ->

      if (findItem) {
        findItem.count++; // -> то мы не добовляем одно и тоже
      } else {
        state.items.push({
          //Иначе такого объека нету и мы добовляем его в массив
          ...action.payload, //берем все что пришло с компонента ->
          count: 1, // -> и в конец добовляем count 1  говоря о том что мы добовляем всего 1 продукт
        });
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;

        if (findItem.count === 0) {
          const index = state.items.findIndex((obj) => obj.id === action.payload); // с помощю индекс находим индекс элемента
          state.items.splice(index, 1); // С этим методом менише одного это удаление

          // this.removeItem(state, { payload: findItem.id });                   //С этим методом доходит до 1 и стоит
        }
      }

      if (state.items.length === 0) {
        state.totalPrice = 0;
      }

      state.totalPrice = calcTotalPrice(state.items);
    },
    removeItem(state, action: PayloadAction<string>) {
      // state.items = state.items.filter((obj) => obj.id !== action.payload);             //проходится по всему элементу и фильтрует
      console.log('remove item');
      const findItem = state.items.findIndex((obj) => obj.id === action.payload); // с помощю индекс находим индекс элемента
      state.items.splice(findItem, 1); //С помощю сплайс удалит элемент
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0; //2 способа оба работают

      // return initialState;
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
