import { useContext } from 'react';
import ModalContext from '../../store/ModalContext';
import { StyledCartActions, StyledCartItems, StyledCartTotal } from '../../styles/Cart.styled';
import Modal from '../UI/Modal';

const Cart = () => {
  const cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(item => (
    <li>{item.name}</li>
  ));

  const modalCtx = useContext(ModalContext);

  return (
    <>
      {
        modalCtx.shouldShowModal && <Modal>
          <StyledCartItems>
            {cartItems}
          </StyledCartItems>
          <StyledCartTotal>
            <span>Total Amount</span>
            <span>100</span>
          </StyledCartTotal>
          <StyledCartActions>
            <button onClick={modalCtx.hideModal} >Close</button>
            <button>Order</button>
          </StyledCartActions>
        </Modal>
      }
    </>
  );
}

export default Cart;