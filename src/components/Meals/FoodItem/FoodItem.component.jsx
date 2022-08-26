import React, { useContext } from 'react';

import classes from './FoodItem.module.scss';

import FoodOrder from './FoodOrder/FoodOrder.component';
import CartContext from '../../../store/cart-context';

const FoodItem = ({ item }) => {
  const { name, description, unitPrice, lastElement } = item;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = quantity => {
    
    cartCtx.addCartItem({
      id: item.id,
      name,
      unitPrice,
      quantity: quantity,
    });
  };

  return (
    <div
      className={`${classes['fooditem-wrap']} ${
        lastElement && classes.lastElement
      }`}
    >
      <div className={classes.food}>
        <span className={classes['food-name']}>{name}</span>
        <span className={classes['food-description']}>{description}</span>
        <span className={classes['food-price']}>${unitPrice}</span>
      </div>
      <FoodOrder onAddToCart={addToCartHandler} id={item.id} />
    </div>
  );
};

export default FoodItem;
