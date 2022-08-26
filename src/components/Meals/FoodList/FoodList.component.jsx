import React, { useState } from 'react';

import classes from './FoodList.module.scss';

import { DUMMY_MEALS } from '../dummy_meals.data';
import FoodItem from '../FoodItem/FoodItem.component';

const FoodList = () => {
  const [availableMeals] = useState(DUMMY_MEALS);

  return (
    <section className={classes['foodlist-wrap']}>
      {availableMeals.map((item, idx, arr) => (
        <FoodItem
          description={item.description}
          price={item.unitPrice}
          name={item.name}
          lastElement={idx == arr.length - 1 ? 'lastElement' : ''}
          key={item.id}
          item={item}
        />
      ))}
    </section>
  );
};

export default FoodList;
