import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

console.log('App component...');

function App() {
  const showCart = useSelector(state => state.cart.showCart);
  const cartItemList = useSelector(state => state.cart.cartItemList);

  useEffect(() => {
    fetch('https://react-http-a4628-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cartItemList)
    });
  }, [cartItemList]);

  return (
    <Layout>
      { showCart && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
