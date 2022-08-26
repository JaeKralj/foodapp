import React from 'react';
import classes from './MealSummary.module.scss';

const MealSummary = () => (
  <div className={classes['mealsum-wrap']}>
    <h1 className={classes['mealsum-heading']}>Lorem ipsum, Dolor sit.</h1>
    <p className={classes['mealsum-text']}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
      dolores sit ipsum voluptates ad repellendus nostrum placeat, recusandae
      veritatis earum.
    </p>
    <p className={classes['mealsum-text']}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
      dolores sit ipsum voluptates ad repellendus nostrum placeat, recusandae
      veritatis earum.
    </p>
  </div>
);

export default MealSummary;
