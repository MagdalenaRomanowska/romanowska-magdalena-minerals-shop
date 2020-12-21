import React from 'react';
import clsx from 'clsx';
import styles from './MyOrder.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';

const MyOrder = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.cart}>
      <div className={styles.cartContent}>
        <div className={styles.cartContentTitle}>
          <i className={'far fa-gem'}></i> Order summary{' '}
          <i className={'far fa-gem'}></i>
        </div>
        <form className={styles.cartOrder}>
          <ul className={styles.orderedMinerals}>
            <li>
              <div className={styles.orderedItems}>
                <b>ORDERED ITEMS</b>
              </div>
              <div className={styles.amountAll}>
                <b>AMOUNT</b>
              </div>
              <div className={styles.price}>
                <b>PRICE</b>
              </div>
              <div className={styles.comment}>
                <b>YOUR COMMENT</b>
              </div>
            </li>
            <li>
              <div className={styles.orderedItems}>Ammonite bracelet</div>
              <div className={styles.amountAll}>1</div>
              <div className={styles.price}>xxx</div>
              <div className={styles.comment}>xyz</div>
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
        </form>
        <form className={styles.contactForm}>
          <div className={styles.yourContactData}>Your contact data</div>
          <Row>
            <Col lg={12}>
              <div className={styles.clientData}>
                <div className={styles.nameOfParameter}>Name: &nbsp; </div>
                <label>
                  <input type='text' name='name' size='80' />
                </label>
              </div>
            </Col>
            <Col lg={12}>
              <div className={styles.clientData}>
                <div className={styles.nameOfParameter}>Address: &nbsp; </div>
                <label>
                  <input type='text' name='address' size='80' />
                </label>
              </div>
            </Col>
            <Col lg={12}>
              <div className={styles.clientData}>
                <div className={styles.nameOfParameter}>
                  Phone number: &nbsp;{' '}
                </div>
                <label>
                  <input type='text' name='phone' size='80' />
                </label>
              </div>
            </Col>
            <Col lg={12}>
              <div className={styles.clientData}>
                <div className={styles.nameOfParameter}>Email: &nbsp; </div>
                <label>
                  <input type='text' name='email' size='80' />
                </label>
              </div>
            </Col>
          </Row>
        </form>
      </div>
      <Link to={'/'} className={styles.clickToOrder}>
        Click &nbsp;to &nbsp;order
      </Link>
    </div>
  </div>
);

MyOrder.propTypes = {
  className: PropTypes.any,
};

export default MyOrder;
