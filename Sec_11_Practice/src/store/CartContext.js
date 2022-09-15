import React, { useReducer } from 'react';

const CART_ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove'
}

const CartContext = React.createContext({
  mealsList: [],
  totalPrice: 0,
  addMeal: (meal) => {},
  removeMeal: (id) => {},
});

const defaultCart = {
  mealsList: [],
  totalPrice: 0,
}

const reducer = (state, action) => {

  switch(action.type) {
    case CART_ACTIONS.ADD: {
      const newList = [...state.mealsList, action.payload];
      const newTotalPrice = state.totalPrice + action.payload.amount * action.payload.price;

      return { 
        mealsList: newList,
        totalPrice: newTotalPrice
      };
    }
    case CART_ACTIONS.REMOVE: {

      return;
    }
    default:
      return state;
  }
}

export const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(reducer, defaultCart);

  const addMeal = (meal) => {
    cartDispatch({type: CART_ACTIONS.ADD, payload: meal});
  }
  
  const removeMeal = (id) => {    
    cartDispatch({type: CART_ACTIONS.REMOVE, payload: id});
  }

  return (
    <CartContext.Provider value={{
      mealsList: cartState.mealsList,
      totalPrice: cartState.totalPrice,
      addMeal: addMeal,
      removeMeal: removeMeal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;