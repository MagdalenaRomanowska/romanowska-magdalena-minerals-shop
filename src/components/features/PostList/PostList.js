import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostList.module.scss';
import { Link } from 'react-router-dom';

const PostList = ({ posts }) => (
  <div className={styles.productDescription}>
    {posts.length ? (
      posts.map((post) => <Link key={post.id} to={`/post/${post.id}`}>
        Mineral name:{post.title}<br/>
        Minimal price:{post.price}<br/>
        <img src={post.photo} alt={'mineralPhoto'} /><br/><br/>
      </Link>)
    ) : (
      <p>Sorry, no results found.</p>
    )}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.any,
  id: PropTypes.any,
};

export default PostList;
