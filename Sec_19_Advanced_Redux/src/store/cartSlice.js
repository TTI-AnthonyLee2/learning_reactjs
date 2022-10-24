import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItemList: [], // item: { id: 'IDENTIFIER', title: 'Test Item', quantity: 3, total: 18, price: 6 }
  showCart: false,
}

const cartSlice = createSlice({
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, title, price } = action.payload;
      const existingItem = state.cartItemList.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += price;
      } else {
        state.cartItemList.push({
          id,
          title,
          price,
          quantity: 1,
          total: price, 
        });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItemList.find(item => item.id === id);

      if (!existingItem) {
        console.log('something went wrong...');
        return;
      }

      if (existingItem.quantity === 1) {
        state.cartItemList = state.cartItemList.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    }
  },
  name: 'cart'
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
