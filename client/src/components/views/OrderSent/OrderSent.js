import React from 'react';
import clsx from 'clsx';
import styles from './OrderSent.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OrderSent = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.title}>
          <span className={styles.block}></span>
          <h1>
            S u c c e s s ! &nbsp; <i className={'far fa-gem'}></i>
          </h1>
        </div>

        <div className={styles.role}>
          <div className={styles.block}></div>
          <p>Your order has been sent</p>
        </div>
      </div>
    </div>
    <Link to={`/`} className={styles.backToHomepage}>
      Back to Homepage
    </Link>
  </div>
);

OrderSent.propTypes = {
  className: PropTypes.any,
};

export default OrderSent;
