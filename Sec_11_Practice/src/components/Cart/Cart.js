import { useContext } from 'react';

import CartContext from '../../store/CartContext';
import ModalContext from '../../store/ModalContext';

import { StyledCartActions, StyledCartItem, StyledCartItems, StyledCartTotal } from '../../styles/Cart.styled';

import Modal from '../UI/Modal';

const Cart = () => {
  const modalCtx = useContext(ModalContext);
  const cartCtx = useContext(CartContext);

  const mealsList = cartCtx.mealsList;
  const isCartEmpty = mealsList.length === 0;

  const addMealHandler = (item, e) => {
    cartCtx.addMeal({
      ...item,
      amount: 1
    })
  }

  const removeMealHandler = (id, e) => {
    cartCtx.removeMeal(id);
  }
  
  // [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}]
  const cartItems = mealsList.map(item => (
    <StyledCartItem key={item.id}>
      <div>
        <h2>{item.name}</h2>
        <div>
          <span>{`$${item.price.toFixed(2)}`}</span>
          <span>{`x ${item.amount}`}</span>
        </div>
      </div>
      <div>
        <button onClick={removeMealHandler.bind(null, item.id)}>-</button>
        <button onClick={addMealHandler.bind(null, item)}>+</button>
      </div>
    </StyledCartItem>
  ));

  return (
    <>
      {
        modalCtx.shouldShowModal && <Modal>
          <StyledCartItems>
            {cartItems}
          </StyledCartItems>
          <StyledCartTotal>
            <span>Total Amount</span>
            <span>{`$${cartCtx.totalPrice.toFixed(2)}`}</span>
          </StyledCartTotal>
          <StyledCartActions>
            <button onClick={modalCtx.hideModal} >Close</button>
            {!isCartEmpty && <button>Order</button>}
          </StyledCartActions>
        </Modal>
      }
    </>
  );
}

export default Cart;