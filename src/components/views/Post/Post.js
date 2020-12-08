import React from "react";
import PropTypes from "prop-types";
import styles from "./Post.module.scss";

const Post = ({ post }) => (
  <div className={styles.main}>
    <div className={styles.background}>
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
      </ul>
      <div className={styles.postContent}>
        <div className={styles.detailTitle}>{post ? post.title : ""}</div>
        <div className={styles.detailText}>{post ? post.text : ""}</div>
        <div className={styles.photoDescription}>{post ? post.photoDescription : ""}</div>
        <div className={styles.detailPhoto}>
          <img src={post ? post.photo : ""} alt={"mineralPhoto"} />
          <img src={post ? post.photo2 : ""} alt={"mineralPhoto2"} />
          <img src={post ? post.photo3 : ""} alt={"mineralPhoto3"} />
        </div>
        <div className={styles.photoDescription2}>{post ? post.photoDescription2 : ""}</div>
        <div className={styles.detailPhoto}>
          <img src={post ? post.photoBracelet : ""} alt={"mineralPhoto"} />
          <img src={post ? post.photoEarings : ""} alt={"mineralPhoto2"} />
          <img src={post ? post.photoRing : ""} alt={"mineralPhoto3"} />
        </div>
        <div className={styles.postDetailPrice}>Price: {post ? post.price : ""}</div>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.any,
};

export default Post;
