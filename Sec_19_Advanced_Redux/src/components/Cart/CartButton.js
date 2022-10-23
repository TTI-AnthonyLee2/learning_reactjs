import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = ({ onClick }) => {
  const cartItemList = useSelector(state => state.cart.cartItemList);
  const totalItems = cartItemList.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
