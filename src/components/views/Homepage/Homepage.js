import React from "react";
import PropTypes from "prop-types";
import PostList from "../../features/PostList/PostListContainer";
import clsx from "clsx";
import styles from "./Homepage.module.scss";

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.allHomepage}>
      <div className={styles.background}>
      </div>
      <div className={styles.title}>YOU ROCK! </div>
      <div className={styles.subtitle}>
        Minerals jewelry shop<i class="fa fa-angle-double-down" aria-hidden="true"></i>
      </div>
    </div>
    <div className={styles.posts}>
      <div  className={styles.stars}></div>
      <div  className={styles.twinkling}></div>
      <PostList />
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Homepage,
  Component as HomepageComponent,
};
