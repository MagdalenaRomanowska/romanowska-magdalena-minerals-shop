import React from 'react';
import PropTypes from 'prop-types';   
import styles from './Post.module.scss';
import { Link } from 'react-router-dom';

const Post = ({post, userState}) => (
  <div className={styles.main}>
    <div>
      {userState === 'loggedUser' && (
        <div>
          <div className={styles.login}>
            <Link to={`/post/${post.id}/edit`}>Edit this post</Link>
          </div>
        </div>
      )}
      {userState === 'admin' && (
        <div>
          <div className={styles.login}>
            <Link to={`/post/${post.id}/edit`}>Edit this post</Link>
          </div>
        </div>
      )}
    </div>
    <div className={styles.postDetail}>Post id: </div><div className={styles.detail}>{post ? post.id : ''}</div><br/>
    <div className={styles.postDetail}>Author email: </div><div className={styles.detail}>{post ? post.author : ''}</div><br/>
    <div className={styles.postDetail}>Created: </div><div className={styles.detail}>{post ? post.created.toString() : ''}</div><br/>
    <div className={styles.postDetail}>Updated: </div><div className={styles.detail}>{post ? post.updated.toString() : ''}</div><br/>
    <div className={styles.postDetail}>Status: </div><div className={styles.detail}>{post ? post.status : ''}</div><br/>
    <div className={styles.postDetail}>Title: </div><div className={styles.detail}>{post ? post.title : ''}</div><br/>
    <div className={styles.postDetail}>Text: </div><div className={styles.detail}>{post ? post.text : ''}</div><br/>
    <div className={styles.postDetail}>Photo: </div><div className={styles.detail}>{post ? post.photo : ''}</div><br/>
    <div className={styles.postDetail}>Price: </div><div className={styles.detail}>{post ? post.price : ''}</div><br/>
    <div className={styles.postDetail}>Phone: </div><div className={styles.detail}>{post ? post.phone : ''}</div><br/>
    <div className={styles.postDetail}>Location: </div><div className={styles.detail}>{post ? post.location : ''}</div><br/>
  </div>
);

Post.propTypes = {
  post: PropTypes.any,
  userState: PropTypes.any,
};

export default Post;