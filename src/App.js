import { useState } from 'react';
import './App.scss';
import Cart from './components/Cart/Cart.component';

import Header from './components/Layout/Header/Header.component';
import Meals from './components/Meals/Meals.component';

import CartProvider from './store/CartProvider.component';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
