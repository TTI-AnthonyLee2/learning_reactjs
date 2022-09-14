import React, { useState } from 'react';

const CartContext = React.createContext({
  mealsList: [],
  addMeal: () => {},
  deleteMeal: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [mealsList, setMealsList] = useState([]);

  const addMeal = (meal) => {
    setMealsList(prev => [...prev, meal]);
  }

  const deleteMeal = (id) => {
    setMealsList(prev => prev.filter(meal => meal.id !== id));
  }

  return (
    <CartContext.Provider value={{
      mealsList: mealsList,
      addMeal: addMeal,
      deleteMeal: deleteMeal,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;