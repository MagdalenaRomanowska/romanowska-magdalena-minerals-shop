import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './PostEdit.module.scss';
import { Link } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';

const PostEdit = ({ className, userState, post }) => (
  <div className={clsx(className, styles.root)}>
    <div>
      {userState === 'loggedUser' && (
        <div>
          <div className={styles.postEditTitle}>
            <b>Edit of post number: {post.id} </b>
          </div>
          <div className={styles.postEdit}>
            <div className={styles.postDetail}>Author email: </div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.author}</textarea></div>
            <br />
            <div className={styles.postDetail}>Title: </div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.title}</textarea></div>
            <br />
            <div className={styles.postDetail}>Text: </div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.text}</textarea></div>
            <br />
            <div className={styles.postDetail}>Photo:</div>
            <input type="file" name="picField" id="picField" size="24" />
            <br />
            <div className={styles.postDetail}>Price: </div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.price}</textarea></div>
            <br />
            <div className={styles.postDetail}>Phone:</div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.phone}</textarea></div>
            <br />
            <div className={styles.postDetail}>Location:</div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.location}</textarea></div>
          </div>
          <div className={styles.login}>
            <Link to={`/`}>Save post and go back to Homepage</Link>
          </div>
        </div>
      )}
      {userState === 'admin' && (
        <div>
          <div className={styles.postEditTitle}>
            <b>Edit of post number: {post.id} </b>
          </div>
          <div className={styles.postEdit}>
            <div className={styles.postDetail}>Author email: </div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.author}</textarea></div>
            <br />
            <div className={styles.postDetail}>Title: </div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.title}</textarea></div>
            <br />
            <div className={styles.postDetail}>Text: </div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.text}</textarea></div>
            <br />
            <div className={styles.postDetail}>Photo:</div>
            <input type="file" name="picField" id="picField" size="24" />
            <br />
            <div className={styles.postDetail}>Price: </div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.price}</textarea></div>
            <br />
            <div className={styles.postDetail}>Phone:</div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.phone}</textarea></div>
            <br />
            <div className={styles.postDetail}>Location:</div>
            <div className={styles.postDetail2}><textarea className={styles.textareaDetail2}>{post.location}</textarea></div>
          </div>
          <div className={styles.login}>
            <Link to={`/`}>Save post and go back to Homepage</Link>
          </div>
        </div>        
      )}  
      {userState === 'nonLoggedUser' && (
        <div>
          <NotFound />
        </div>        
      )}     
    </div>
  </div>
);

PostEdit.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  userState: PropTypes.any,
  post: PropTypes.any,
};

export default PostEdit;
