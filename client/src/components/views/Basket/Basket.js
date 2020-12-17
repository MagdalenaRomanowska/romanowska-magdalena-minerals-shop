import React from 'react';
import clsx from 'clsx';
import styles from './Basket.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Basket = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.cart}>
      <div className={styles.cartContent}>
        <div className={styles.cartContentTitle}><i className={'far fa-gem'}></i> Complete your order <i className={'far fa-gem'}></i></div>
        <form className={styles.cartOrder}>
          <ul className={styles.orderedMinerals}>
            <li>
              <div className={styles.chosenItems}>
                <b>CHOSEN ITEMS</b>
              </div>
              <div className={styles.amountAll}>
                <b>AMOUNT</b>
              </div>
              <div className={styles.price}>
                <b>PRICE OF 1 ITEM</b>
              </div>
              <div className={styles.comment}>
                <b>COMMENT YOUR ORDER (size etc.)</b>
              </div>
              <div className={styles.icons}></div>
            </li>
            <li>
              <div className={styles.chosenItems}>Ammonite bracelet</div>
              <div className={styles.amountAll}>
                <div className={styles.plusAndMinus}>
                  <div className={styles.minus}>-</div>
                  <div className={styles.amount}>1</div>
                  <div className={styles.plus}>+</div>
                </div>
              </div>
              <div className={styles.price}>xxx</div>
              <div className={styles.comment}>
                <form>
                  <input type='text' name='name' />
                </form>
              </div>
              <div className={styles.icons}>
                <i className={'fas fa-trash-alt'}></i>
              </div>
            </li>
            <li>
              <div className={styles.chosenItems}>Fluorite ring</div>
              <div className={styles.amountAll}>
                <div className={styles.plusAndMinus}>
                  <div className={styles.minus}>-</div>
                  <div className={styles.amount}>1</div>
                  <div className={styles.plus}>+</div>
                </div>
              </div>
              <div className={styles.price}>xxx</div>
              <div className={styles.comment}>
                <form>
                  <input type='text' name='name' />
                </form>
              </div>
              <div className={styles.icons}>
                <i className={'fas fa-trash-alt'}></i>
              </div>
            </li>
          </ul>
          <div className={styles.line}></div>
          <ul className={styles.cartOrderPrice}>
            <li className={styles.cartOrderSubtotal}>
              <span className={styles.cartOrderPriceName}>Subtotal:</span>
              <span className={styles.cartOrderPriceSum}>
                $<strong>0</strong>
              </span>
            </li>
            <li className={styles.cartOrderDelivery}>
              <span className={styles.cartOrderPriceName}>Delivery:</span>
              <span className={styles.cartOrderPriceSum}>$20</span>
            </li>
            <li className={styles.cartOrderTotal}>
              <span className={styles.cartOrderPriceName}>
                <strong>Total:</strong>
              </span>
              <span className={styles.cartOrderPriceSum}>
                $<strong>0</strong>
              </span>
            </li>
          </ul>
          <Link to={'/myOrder'} className={styles.clickToContinue}>
            Click &nbsp;to &nbsp;continue
          </Link>
        </form>
      </div>
    </div>
  </div>
);

Basket.propTypes = {
  className: PropTypes.any,
};

export default Basket;
