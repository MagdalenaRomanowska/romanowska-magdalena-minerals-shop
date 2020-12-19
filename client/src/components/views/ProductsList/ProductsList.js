import React from "react";
import PropTypes from "prop-types";
import styles from "./ProductsList.module.scss";
import { Link } from "react-router-dom";

class ProductsList extends React.Component {
  componentDidMount() {
    const { loadMinerals, loadProducts } = this.props;
    loadMinerals();
    loadProducts();
  }

  render() {
    const { minerals, products } = this.props;

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
        <div className={styles.exploreMinerals}>
          Our Products
        </div>
        <div className={styles.allProductsToChoose}>
         
          <div className={styles.allProducts}>
            {products !== undefined && products.length ? (
              products.map((product) => (
                <div className={styles.product} key={product.addressProduct}>
                  <Link
                    key={product.addressProduct}
                    to={`/product/${product.addressProduct}`}
                    className={styles.photoInside}
                  >
                    <img
                      src={product.photoProductHomepage}
                      alt={"PhotoProduct"}
                    />
                  </Link>
                  <div className={styles.mineralText}>
                    <div className={styles.mineralName}>
                      <div className={styles.mineralNameContent}>
                        <b>{product.titleProduct}</b>
                      </div>
                    </div>
                    <div className={styles.mineralPrice}>
                      <div className={styles.mineralPriceTitle}>
                        Minimal price:
                      </div>
                      <div className={styles.mineralPriceContent}>
                        {product.priceProduct}
                      </div>
                      <div className={styles.empty}></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry, no results found.</p>
            )}
          </div>
          
        </div>
        <div className={styles.exploreMinerals}>
          Explore Our Minerals Used In Jewelry Production
        </div>
        <div className={styles.allMinerals}>
          {minerals.length ? (
            minerals.map((mineral) => (
              <div className={styles.product} key={mineral.title}>
                <Link
                  key={mineral.title}
                  to={`/minerals/${mineral.title}`}
                  className={styles.photoInsideMaterial}
                >
                  <img src={mineral.photo} alt={"mineralPhoto"} />
                </Link>
                <div className={styles.mineralText}>
                  <div className={styles.mineralName}>
                    <div className={styles.mineralNameContent}>
                      <b>{mineral.title}</b>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Sorry, no results found.</p>
          )}
        </div>
      </div>
    );
  }
}

ProductsList.propTypes = {
  minerals: PropTypes.any,
  products: PropTypes.any,
};

export default ProductsList;
