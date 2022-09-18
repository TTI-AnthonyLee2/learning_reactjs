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
      const existingMealIndex = state.mealsList.findIndex(meal => meal.id === action.payload.id);
      let newList = [...state.mealsList];

      if (existingMealIndex >= 0) {
        newList[existingMealIndex].amount += action.payload.amount;
      } else {
        newList = [...newList, action.payload];
      }

      const newTotalPrice = state.totalPrice + action.payload.amount * action.payload.price;

      return { 
        mealsList: newList,
        totalPrice: Math.abs(newTotalPrice)
      };
    }
    case CART_ACTIONS.REMOVE: {
      const existingMealIndex = state.mealsList.findIndex(meal => meal.id === action.payload);
      
      if (existingMealIndex === -1) return new Error('It seems something went wrong...');
      
      const existingMeal = state.mealsList[existingMealIndex];
      const newTotalPrice = state.totalPrice - existingMeal.price;
      let newList = [...state.mealsList];

      if (existingMeal.amount === 1) {
        newList = newList.filter(meal => meal.id !== action.payload);
      } else {
        newList[existingMealIndex].amount -= 1;
      }

      return {
        mealsList: newList,
        totalPrice: Math.abs(newTotalPrice)
      };
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