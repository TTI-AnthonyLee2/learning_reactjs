import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItemList = useSelector(state => state.cart.cartItemList);
  const isCartEmpty = cartItemList.length === 0;

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      { isCartEmpty && <p>Your cart is empty, please pick up some products!</p> }
      <ul>
        {cartItemList.map(item => (
          <CartItem item={{...item}} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
