import React from 'react';
import HeaderCartButton from '../../../Cart/header-cart-btn/HeaderCartButton.component';

import classes from './Navbar.module.scss';

const Navbar = ({ onShowCart }) => (
  <nav className={classes.navbar}>
    <ul className={classes['navbar-nav']}>
      <li className={`${classes['nav-item']} ${classes.brand}`}>
        <a href='#'>ReactMeals</a>
      </li>
      <li
        className={`${classes['nav-item']} ${classes['cart-link']}`}
        onClick={onShowCart}
      >
        <HeaderCartButton />
      </li>
    </ul>
  </nav>
);
export default Navbar;
