import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItemList: [], // item: { title: 'Test Item', quantity: 3, total: 18, price: 6 }
  showCart: false
}

const cartSlice = createSlice({
  initialState,
  reducers: {
    addItem(state, action) {

    },
    removeItem(state, action) {

    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    }
  },
  name: 'cart'
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
