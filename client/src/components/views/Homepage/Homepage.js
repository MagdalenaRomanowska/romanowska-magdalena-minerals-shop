import React from "react";
import PropTypes from "prop-types";
import ProductsList from "../ProductsList/ProductsListContainer";
import clsx from "clsx";
import styles from "./Homepage.module.scss";

const Homepage = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.allHomepage}>
      <div className={styles.background}></div>
      <div className={styles.title}>
        R<i className={"far fa-gem"}></i>CK <br></br>Y
        <i className={"far fa-gem"}></i>URSELF<br></br>
        <div className={styles.subtitle}>MINERALS JEWELRY SHOP</div>
        <h4 className={styles.wordCarousel}>
          <div>
            <ul className={styles.flip4}>
              <li>elegant gems</li>
              <li>timeless</li>
              <li>silver materials</li>
              <li>delightful</li>
            </ul>
          </div>
        </h4>
      </div>
    </div>
    <div className={styles.posts}>
      <ProductsList />
    </div>
  </div>
);

Homepage.propTypes = {
  className: PropTypes.string,
};

export default Homepage;
