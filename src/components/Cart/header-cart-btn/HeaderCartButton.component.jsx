import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import CartContext from '../../../store/cart-context';

import classes from './HeaderCartButton.module.scss';

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce(
    (curVal, item) => curVal + item.quantity,
    0
  );

  return (
    <button>
      <FontAwesomeIcon icon={faCartShopping} /> Your Cart
      <span className={classes['cart-item-count']}>{numOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
