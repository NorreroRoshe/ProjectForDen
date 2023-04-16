import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProduct } from './asyncActions';
import { Product, ProductSliceState, Status } from './types';

const initialState: ProductSliceState = {
  items: [],
  status: Status.LOADING,                       //loading, success, error    -     это isLoading;
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];    
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS; 
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];   
    });
  }

  // extraReducers: {
  //   [fetchProduct.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];                     //очищаем пиццы в момент загрузки старые, чтобы получить новые 
  //   },
  //   [fetchProduct.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchProduct.rejected]: (state) => {
  //     state.status = 'error';
  //     state.items = [];                    //если прошла ошибка то очищаем пиццы
  //   },
  // },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
