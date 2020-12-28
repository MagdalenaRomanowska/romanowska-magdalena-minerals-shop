import React from "react";
import clsx from "clsx";
import styles from "./MyOrder.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Row, Col } from "react-flexbox-grid";

class MyOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phoneNumber: "",
      email: "",
    };
  }

  render() {
    const { className, orders, sendOrder } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.cart}>
          <div className={styles.cartContent}>
            <div className={styles.cartContentTitle}>
              <i className={"far fa-gem"}></i> Order summary{" "}
              <i className={"far fa-gem"}></i>
            </div>
            <form className={styles.cartOrder}>
              <ul className={styles.orderedMinerals}>
                <li>
                  <div
                    className={`${styles.orderedItems} ${styles.hideOnMobiles}`}
                  >
                    <b>ORDERED ITEMS</b>
                  </div>
                  <div
                    className={`${styles.amountAll} ${styles.hideOnMobiles}`}
                  >
                    <b>AMOUNT</b>
                  </div>
                  <div className={`${styles.price} ${styles.hideOnMobiles}`}>
                    <b>PRICE</b>
                  </div>
                  <div className={`${styles.comment} ${styles.hideOnMobiles}`}>
                    <b>YOUR COMMENT</b>
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
                          <div className={styles.amount}>{order.amountAll}</div>
                        </div>
                      </div>
                      <div className={styles.price}>
                        {order.price * order.amountAll} $
                      </div>
                      <div className={styles.comment}>
                        <div>{order.comment}</div>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>Sorry, no results found.</p>
                )}
              </ul>
              <div className={styles.line}></div>
              <ul className={styles.cartOrderPrice}>
                <li className={styles.cartOrderTotal}>
                  <span className={styles.cartOrderPriceName}>
                    <strong>Total: </strong>
                  </span>
                  <span className={styles.cartOrderPriceSum}>
                    <strong>
                      {orders !== undefined && orders.length
                        ? orders.reduce(
                            (total, order) =>
                              total + order.price * order.amountAll,
                            0
                          )
                        : ""}
                    </strong>
                    $
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
                      <input
                        type="text"
                        name="name"
                        size="80"
                        value={this.state.value}
                        onChange={(event) =>
                          this.setState({ name: event.target.value })
                        }
                      />
                    </label>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className={styles.clientData}>
                    <div className={styles.nameOfParameter}>
                      Address: &nbsp;{" "}
                    </div>
                    <label>
                      <input
                        type="text"
                        name="address"
                        size="80"
                        value={this.state.value}
                        onChange={(event) =>
                          this.setState({ address: event.target.value })
                        }
                      />
                    </label>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className={styles.clientData}>
                    <div className={styles.nameOfParameter}>
                      Phone number: &nbsp;{" "}
                    </div>
                    <label>
                      <input
                        type="text"
                        name="phoneNumber"
                        size="80"
                        value={this.state.value}
                        onChange={(event) =>
                          this.setState({ phoneNumber: event.target.value })
                        }
                      />
                    </label>
                  </div>
                </Col>
                <Col lg={12}>
                  <div className={styles.clientData}>
                    <div className={styles.nameOfParameter}>Email: &nbsp; </div>
                    <label>
                      <input
                        type="text"
                        name="email"
                        size="80"
                        value={this.state.value}
                        onChange={(event) =>
                          this.setState({ email: event.target.value })
                        }
                      />
                    </label>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
          <Link
            to={"/orderSent"}
            className={styles.clickToOrder}
            onClick={(event) => {
              event.preventDefault();
              sendOrder({
                orders: orders,
                name: this.state.name,
                address: this.state.address,
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
              });
            }}            
          >
            Click &nbsp;to &nbsp;order
          </Link>
        </div>
      </div>
    );
  }
}

MyOrder.propTypes = {
  className: PropTypes.any,
  orders: PropTypes.any,
  sendOrder: PropTypes.func,
};

export default MyOrder;
