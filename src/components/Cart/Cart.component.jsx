import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Button from '../UI/Button/Button.component';
import Modal from '../UI/Modal/Modal.component';

import classes from './Cart.module.scss';
import CartItem from './CartItem/CartItem.component';

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartItemAddHandler = item => {
    cartCtx.addCartItem({ ...item, quantity: 1 });
  };

  const cartItemRemoveHandler = id => {
    cartCtx.removeCartItem(id);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.unitPrice}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={classes['total']}>
        <span>Total Amount</span>
        <span className={classes['total-amount']}>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {cartCtx.items.length > 0 && (
          <Button className={classes['btn-order']}>Order</Button>
        )}
        <Button className={classes['btn-close']} onClick={onHideCart}>
          Close
        </Button>
      </div>
    </Modal>
  );
};
export default Cart;
