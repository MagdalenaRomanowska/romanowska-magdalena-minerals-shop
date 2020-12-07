import React from "react";
import PropTypes from "prop-types";
import styles from "./PostList.module.scss";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => (
  <div className={styles.productDescription}>
    <div className={styles.squares}>
      <ul className={styles.circles}>
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
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className={styles.product}
          >
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
            <div>
              <img src={post.photo} alt={"mineralPhoto"} />{" "}
            </div>
            <div className={styles.line}></div>
          </Link>
        ))
      ) : (
        <p>Sorry, no results found.</p>
      )}
    </div>
    
  </div>
);

PostList.propTypes = {
  posts: PropTypes.any,
  id: PropTypes.any,
};

export default PostList;
