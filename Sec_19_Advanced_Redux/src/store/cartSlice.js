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
      const itemIndex = state.cartItemList.findIndex(item => item.id === id);
      
      if (itemIndex >= 0) {
        const target = state.cartItemList[itemIndex];
        target.quantity++;
        target.total += price;
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
      const itemIndex = state.cartItemList.findIndex(item => item.id === id);

      if (itemIndex < 0) {
        console.log('something went wrong...');
        return;
      }

      const target = state.cartItemList[itemIndex]; 
      const numOfItem = target.quantity;

      if (numOfItem === 1) {
        state.cartItemList = state.cartItemList.filter(item => item.id !== id);
      } else {
        target.quantity--;
        target.total -= target.price;
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
