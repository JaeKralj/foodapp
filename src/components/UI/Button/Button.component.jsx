import React from 'react';
import classes from './Button.module.scss';
const Button = props => (
  <button
    className={`${classes.btn} ${props.className}`}
    onClick={props.onClick}
    type={true && props.type}
  >
    {props.children}
  </button>
);
export default Button;
