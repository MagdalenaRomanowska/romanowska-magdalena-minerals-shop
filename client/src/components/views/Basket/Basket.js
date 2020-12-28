import React from 'react';
import clsx from 'clsx';
import styles from './Basket.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Basket extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clicks: 1,
  //   };
  // }

  // IncrementItem = () => {
  //   this.setState({ clicks: this.state.clicks + 1 });
  // };
  // DecreaseItem = () => {
  //   if (this.state.clicks > 1) {
  //     this.setState({ clicks: this.state.clicks - 1 });
  //   } else {
  //     this.setState({ clicks: 1 });
  //   }
  // };

  render() {
    const { className, orders, increaseAmount, decreaseAmount } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <div className={styles.cartContentTitle}>
              <i className={'far fa-gem'}></i> Complete your order{' '}
              <i className={'far fa-gem'}></i>
            </div>
            <form className={styles.cartOrder}>
              <ul className={styles.orderedJewelry}>
                <li>
                  <div className={`${styles.orderedItems} ${styles.hideOnMobiles}`}>
                    <b>ORDERED ITEMS</b>
                  </div>
                  <div className={`${styles.amountAll} ${styles.hideOnMobiles}`}>
                    <b>AMOUNT</b>
                  </div>
                  <div className={`${styles.price} ${styles.hideOnMobiles}`}>
                    <b>PRICE</b>
                  </div>
                  <div className={`${styles.comment} ${styles.hideOnMobiles}`}>
                    <b>COMMENT YOUR ORDER (size etc.)</b>
                  </div>
                  <div className={styles.icons}></div>
                </li>
                {orders !== undefined && orders.length ? (
                  orders.map((order) => (
                    <li key={order.price}>
                      <div className={styles.orderedItems}>
                        {order.orderedItems}
                      </div>
                      <div className={styles.amountAll}>
                        <div className={styles.plusAndMinus}>
                          <button
                            onClick={this.decreaseAmount}
                            className={styles.minus}
                          >
                            -
                          </button>
                          <div className={styles.amount}>{order.amountAll}</div>
                          <button
                            onClick={this.increaseAmount}
                            className={styles.plus}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className={styles.price}>{order.price} $</div>
                      <div className={styles.comment}>
                        <input type='text' name='name' value={order.comment} />
                      </div>
                      <div className={styles.icons}>
                        <i className={'fas fa-trash-alt'}></i>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>Sorry, no results found.</p>
                )}
              </ul>
              <div className={styles.line}></div>
              <ul className={styles.cartOrderPrice}>
                <li className={styles.cartOrderSubtotal}>
                  <span className={styles.cartOrderPriceName}>Subtotal:</span>
                  <span className={styles.cartOrderPriceSum}>
                    $<strong></strong>
                  </span>
                </li>
                <li className={styles.cartOrderDelivery}>
                  <span className={styles.cartOrderPriceName}>Delivery:</span>
                  <span className={styles.cartOrderPriceSum}>20$</span>
                </li>
                <li className={styles.cartOrderTotal}>
                  <span className={styles.cartOrderPriceName}>
                    <strong>Total:</strong>
                  </span>
                  <span className={styles.cartOrderPriceSum}>
                    <strong>0</strong>$
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
  }
}

Basket.propTypes = {
  className: PropTypes.any,
  orders: PropTypes.any,
  increaseAmount: PropTypes.func,
  decreaseAmount: PropTypes.func,
};

export default Basket;
