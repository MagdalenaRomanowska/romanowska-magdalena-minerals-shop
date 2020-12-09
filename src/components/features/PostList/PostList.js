import React from "react";
import PropTypes from "prop-types";
import styles from "./PostList.module.scss";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => (
  <div className={styles.productDescription}>
    <div className={styles.squaresLeftSided}>
      <ul className={styles.squares}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div className={styles.allProducts}>
      {posts.length ? (
        posts.map((post) => (
          <div className={styles.product}>
            <div className={styles.mineralText}>
              <div className={styles.mineralName}>
                <div className={styles.mineralNameTitle}>Mineral name:</div>
                <div className={styles.mineralNameContent}>{post.title}</div>
                <br />
              </div>
              <div className={styles.mineralPrice}>
                <div className={styles.mineralPriceTitle}>Minimal price:</div>
                <div className={styles.mineralPriceContent}>{post.price}</div>
                <br />
              </div>
            </div>
            <Link key={post.title} to={`/${post.title}`} className={styles.photoInside}>
              <img src={post.photo} alt={"mineralPhoto"} />
            </Link>
            <div className={styles.line}></div>
          </div>
        ))
      ) : (
        <p>Sorry, no results found.</p>
      )}
    </div>
    
  </div>
);

PostList.propTypes = {
  posts: PropTypes.any,
  title: PropTypes.any,
};

export default PostList;
