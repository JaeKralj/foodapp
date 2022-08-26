import classes from './CartItem.module.css';

import Button from '../../UI/Button/Button.component';

const CartItem = props => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.quantity}>x {props.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onRemove}>−</Button>
        <Button onClick={props.onAdd}>+</Button>
      </div>
    </li>
  );
};

export default CartItem;
