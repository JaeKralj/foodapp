import React from 'react';

import mealsImg from '../../../assets/meals.jpg';
import classes from './Header.module.scss';
import Navbar from './navbar/Navbar.component';

const Header = ({ onShowCart }) => (
  <header>
    <Navbar onShowCart={onShowCart} />
    <section className={classes.hero}>
      <div className={classes.hero}>
        <img src={mealsImg} alt='' className={classes['hero-img']} />
      </div>
    </section>
  </header>
);
export default Header;
