import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { product } = this.props;

    return (
      <div className={styles.productDescription}>
        <div className={styles.squaresLeftSided}>
          <ul className={styles.squares}>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
            <li>
              <i className={"far fa-gem"}></i>
            </li>
          </ul>
        </div>
        <div className={styles.titleProduct}>{product.titleProduct}</div>
        <div className={styles.textProduct}>{product.textProduct}</div>
        <div className={styles.productDetailPhotos} key={product.titleProduct}>
          <img
            src={product.photoProductDetail01}
            alt={"photoProductDetail01"}
            className={"col-lg-4"}
          />
          <img
            src={product.photoProductDetail02}
            alt={"photoProductDetail02"}
            className={"col-lg-4"}
          />
          <img
            src={product.photoProductDetail03}
            alt={"photoProductDetail03"}
            className={"col-lg-4"}
          />
        </div>
        <div className={styles.selectQuantity}>
          <div>Select quantity</div>
          <div className={styles.plusAndMinus}>
            <div>
              <button onClick={this.IncrementItem}>
                +
              </button>
              <button onClick={this.DecreaseItem}>
                -
              </button>
              <button onClick={this.ToggleClick}>
                {this.state.show ? "Hide number" : "Show number"}
              </button>
              {this.state.show ? <h2>{this.state.clicks}</h2> : ""}
            </div>
          </div>
          <div className={styles.totalPrice}>
            <div className={styles.total}>Total price:</div>
            <div className={styles.totalBox}></div>
          </div>
          <div className={styles.addToCartContainer}>
            <p className={styles.addToCart}>Add to cart</p>
          </div>
          <Link to={"/basket"} className={styles.goToBasket}>
            Go &nbsp;to &nbsp;basket
          </Link>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.any,
};

export default Product;
