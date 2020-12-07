import React from 'react';
import styles from './AllProducts.module.scss';
import PostList from '../../features/PostList/PostListContainer';

const MyPosts = () => (
  <div className={styles.main}> All products:
    <div className={styles.posts}><PostList /></div>
  </div>
);

export default MyPosts;