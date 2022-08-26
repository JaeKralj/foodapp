import { Fragment } from 'react/cjs/react.production.min';
import FoodList from './FoodList/FoodList.component';
import classes from './Meals.module.scss';
import MealSummary from './MealSummary/MealSummary.component';
const Meals = () => (
  <section className={classes['meals-wrap']}>
    <MealSummary />
    <FoodList />
  </section>
);
export default Meals;
