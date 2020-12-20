import React from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 1,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    if (this.state.clicks > 1) {
      this.setState({ clicks: this.state.clicks - 1 });
    } else {
      this.setState({ clicks: 1 });
    }
  };

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
        <div className={styles.textProduct}>Price: {product.priceProduct} $</div>
        <div className={styles.selectQuantity}>
          <div>Select quantity</div>
          <div className={styles.plusAndMinus}>
            <button onClick={this.DecreaseItem} className={styles.minus}>
              -
            </button>
            <div className={styles.amount}>{this.state.clicks}</div>
            <button onClick={this.IncrementItem} className={styles.plus}>
              +
            </button>
          </div>
          <div className={styles.totalPrice}>
            <div className={styles.total}>Total price: {product.priceProduct * this.state.clicks} $</div>
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
