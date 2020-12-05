import React from 'react';
import PropTypes from 'prop-types';
import PostList from '../../features/PostList/PostListContainer';
import clsx from 'clsx';
import styles from './Homepage.module.scss';

const Component = ({className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.allHomepage}>
      <div className={styles.title}>YOU ROCK !</div>
      <div className={styles.subtitle}>Minerals shop<i className="fas fa-level-down-alt"></i></div>
    </div>
    <div className={styles.posts}><PostList /></div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
