import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './MyOrder.module.scss';
import { NotFound } from '../NotFound/NotFound';

const MyOrder = ({ className, userState, addPost }) => (
  <div className={clsx(className, styles.root)}>
    {userState === 'loggedUser' && (
      <div>
        <div className={styles.postAdd}>
          <b>Add post</b>
        </div>
        <div className={styles.postAdd}>
          <div className={styles.postDetail}>Author email: </div>
          <div className={styles.postDetail2}>
            <textarea className={styles.textareaDetail2}></textarea>
          </div>
          <br />
          <div className={styles.postDetail}>Title: </div>
          <div className={styles.postDetail2}>
            <textarea className={styles.textareaDetail2}></textarea>
          </div>
          <br />
          <div className={styles.postDetail}>Text: </div>
          <div className={styles.postDetail2}>
            <textarea className={styles.textareaDetail2}></textarea>
          </div>
          <br />
          <div className={styles.postDetail}>Photo:</div>
          <input type='file' name='picField' id='picField' size='24' />
          <br />
          <div className={styles.postDetail}>Price: </div>
          <div className={styles.postDetail2}>
            <textarea className={styles.textareaDetail2}></textarea>
          </div>
          <br />
          <div className={styles.postDetail}>Phone:</div>
          <div className={styles.postDetail2}>
            <textarea className={styles.textareaDetail2}></textarea>
          </div>
          <br />
          <div className={styles.postDetail}>Location:</div>
          <div className={styles.postDetail2}>
            <textarea className={styles.textareaDetail2}></textarea>
          </div>
        </div>
        <div className={styles.login}>
          <Link
            to={`/`}
            onClick={(event) =>
              addPost({
                id: '7',
                author: 'aaa',
                created: new Date(),
                updated: new Date(),
                status: 'published',
                title: '7 - aaa',
                text: 'aaa',
                photo: null,
                price: 'aaa',
                phone: 'aaa',
                location: 'aaa',
              })
            }
          >
            Add post and go back to Homepage
          </Link>
        </div>
      </div>
    )}
    {userState === 'nonLoggedUser' && (
      <div>
        <NotFound />
      </div>
    )}
    {userState === 'admin' && (
      <div>
        <NotFound />
      </div>
    )}
  </div>
);

MyOrder.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  userState: PropTypes.any,
  addPost: PropTypes.func,
};

export default MyOrder;
