import { useState } from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Products from '../components/Products/Products';
import Cart from '../components/Cart/Cart';
import CartProvider from '../store/CartProvider';
import SingleProduct from '../components/Products/SingleProduct';

function Home() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [popUpIsShown, setPopUpIsShown] = useState(false);

  const showPopUpHandler = () => {
    setPopUpIsShown(true);
  };

  const hidePopUpHandler = () => {
    setPopUpIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {popUpIsShown && <SingleProduct onClose={hidePopUpHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Products onShowPopUp={showPopUpHandler} />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default Home;
