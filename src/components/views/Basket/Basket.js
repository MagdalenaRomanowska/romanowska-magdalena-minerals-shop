import React from 'react';
import clsx from 'clsx';
import styles from './Basket.module.scss';
import { Link } from 'react-router-dom';
import { Wave } from '../../features/Wave/Wave';
import PropTypes from 'prop-types';

const Basket = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.cart}>
      <div className={styles.cartContent}>
        <div className={styles.cartContentTitle}>Complete your order</div>
        <form className={styles.cartOrder}>
          <ul className={styles.orderedMinerals}>
            <li>
              Ammonite bracelet <div className={styles.icons}><i className={'fas fa-edit'}></i><i className={'fas fa-trash-alt'}></i></div>
            </li>
            <li>
              Fluorite ring <div className={styles.icons}><i className={'fas fa-edit'}></i><i className={'fas fa-trash-alt'}></i></div>
            </li>
          </ul>
          <div className={styles.line}></div>
          <ul className={styles.cartOrderPrice}>
            <li className={styles.cartOrderSubtotal}>
              <span className={styles.cartOrderPriceName}>Subtotal:</span>
              <span className={styles.cartOrderPriceSum}>$<strong>0</strong></span>
            </li>
            <li className={styles.cartOrderDelivery}>
              <span className={styles.cartOrderPriceName}>Delivery:</span>
              <span className={styles.cartOrderPriceSum}>$20</span>
            </li>
            <li className={styles.cartOrderTotal}>
              <span className={styles.cartOrderPriceName}><strong>Total:</strong></span>
              <span className={styles.cartOrderPriceSum}>$<strong>0</strong></span>
            </li>
          </ul>
          <Link to={'/myOrder'} className={styles.clickToOrder}>Click to order</Link>
        </form>
      </div>
    </div>

    <Wave />
  </div>
);

Basket.propTypes = {
  className: PropTypes.any,
};

export default Basket;
