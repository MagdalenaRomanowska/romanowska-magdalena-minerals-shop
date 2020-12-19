import React from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.scss";

class Product extends React.Component {
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
            <div className={styles.minus}>-</div>
            <div className={styles.amount}>1</div>
            <div className={styles.plus}>+</div>
          </div>
          <div className={styles.totalPrice}>
            <div className={styles.total}>Total price:</div>
            <div className={styles.totalBox}></div>
          </div>
          <div className={styles.addToChartContainer}>
            <p className={styles.addToChart}>Add to cart</p>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.any,
};

export default Product;
