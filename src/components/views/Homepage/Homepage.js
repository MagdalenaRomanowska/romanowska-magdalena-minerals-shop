import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../PostList/PostListContainer';
import clsx from 'clsx';
import styles from './Homepage.module.scss';

const Homepage = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.allHomepage}>
      <div className={styles.background}>
      </div>
      <div className={styles.title}>ROCK YOURSELF</div>
      <div className={styles.subtitle}>
        MINERALS JEWELRY SHOP<i className={'fa fa-angle-double-down'} aria-hidden='true'></i>
      </div>
    </div>
    <div className={styles.posts}>
      <PostList />
    </div>
  </div>
);

Homepage.propTypes = {
  className: PropTypes.string,
};

export default Homepage;
