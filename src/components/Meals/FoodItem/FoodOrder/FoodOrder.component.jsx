import React, { useCallback, useContext, useRef, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../UI/Button/Button.component';

import classes from './FoodOrder.module.scss';

const FoodOrder = ({ id, onAddToCart }) => {
  const [quantity, setQuantity] = useState('1');
  const [isQuantityValid, setQuantityValid] = useState(true);

  const handleChange = useCallback(
    e => {
      setQuantity(e.target.value);
    },
    [quantity]
  );

  const submitHandler = event => {
    event.preventDefault();

    const quantityNum = +quantity;

    if (quantity.trim().length === 0 || quantityNum < 1) {
      setQuantityValid(false);
      return;
    }

    onAddToCart(quantityNum);
  };

  return (
    <form id={id} className={classes['food-order']} onSubmit={submitHandler}>
      <div className={classes['order-input-wrap']}>
        <label className={classes.amount}>Quantity</label>
        <input
          type='number'
          value={quantity}
          min='1'
          onChange={handleChange}
          className={classes.quantity}
        />
      </div>
      <Button type='submit' htmlFor={id} className={classes['order-btn']}>
        <FontAwesomeIcon icon={faPlus} /> Add
      </Button>
      {!isQuantityValid && <p>Enter a valid quantity</p>}
    </form>
  );
};
export default FoodOrder;
