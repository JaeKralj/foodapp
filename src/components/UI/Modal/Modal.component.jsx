import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.scss';

const Backdrop = props => <div className={classes['backdrop']} onClick={props.onClick}></div>;

const ModalOverlay = props => (
  <div className={classes['modal']}>
    <div className={classes.content}>{props.children}</div>
  </div>
);

const portalEl = document.getElementById('overlays');

const Modal = props => (
  <div>
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart } />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </Fragment>
  </div>
);
export default Modal;
