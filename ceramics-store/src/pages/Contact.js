import { useState } from 'react';
import Header from '../components/Layout/Header';
// import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';
import CartProvider from '../store/CartProvider';

function Contact() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
       <h1>Contact</h1>
      </main>
    </CartProvider>
  );
}

export default Contact;