import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MineralPost.module.scss';

const MineralPost = ({ post }) => (
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
        <div className={styles.detailTitle}><i className={'far fa-gem'}></i> &nbsp; {post ? post.title : ''}  &nbsp; <i className={'far fa-gem'}></i></div>
        <div className={styles.detailText}>{post ? post.text : ''}</div>
        <div className={styles.photoDescription}>
          {post ? post.photoDescription : ''}
        </div>
        <div className={styles.detailPhoto}>
          <img src={post ? post.photo : ''} alt={'mineralPhoto'} />
          <img src={post ? post.photo2 : ''} alt={'mineralPhoto2'} />
          <img src={post ? post.photo3 : ''} alt={'mineralPhoto3'} />
        </div>
        {/* <div className={styles.photoDescription2}>
          {post ? post.photoDescription2 : ''}
        </div> */}
        {/* <div className={styles.detailPhoto}>
          <div>
            <img src={post ? post.photoBracelet : ''} alt={'photoBracelet'} />
            <h2>Bracelet</h2>
            <div className={styles.postDetailPrice}>
              Price: {post ? post.price : ''}
            </div>
            <div className={styles.selectQuantity}>
              <div>Select quantity</div>
              <div className={styles.plusAndMinus}>
                <div className={styles.minus}>-</div>
                <div className={styles.amount}>{post.quantity}</div>
                <div className={styles.plus}>+</div>
              </div>
              <div className={styles.totalPrice}>
                <div className={styles.total}>Total price:</div>
                <div className={styles.totalBox}></div>
              </div>
              <div className={styles.addToChartContainer}>
                <p className={styles.addToChart}>Add to cart</p>
              </div>
            </div>
          </div>
          <div>
            <img src={post ? post.photoEarings : ''} alt={'photoEarings'} />
            <h2>Earings</h2>
            <div className={styles.postDetailPrice}>
              Price: {post ? post.price2 : ''}
            </div>
            <div className={styles.selectQuantity}>
              <div>Select quantity</div>
              <div className={styles.plusAndMinus}>
                <div className={styles.minus}>-</div>
                <div className={styles.amount}>{post.quantity}</div>
                <div className={styles.plus}>+</div>
              </div>
              <div className={styles.totalPrice}>
                <div className={styles.total}>Total price:</div>
                <div className={styles.totalBox}></div>
              </div>
              <div className={styles.addToChartContainer}>
                <p className={styles.addToChart}>Add to cart</p>
              </div>
            </div>
          </div>
          <div>
            <img src={post ? post.photoRing : ''} alt={'photoRing'} />
            <h2>Ring</h2>
            <div className={styles.postDetailPrice}>
              Price: {post ? post.price3 : ''}
            </div>
            <div className={styles.selectQuantity}>
              <div>Select quantity</div>
              <div className={styles.plusAndMinus}>
                <div className={styles.minus}>-</div>
                <div className={styles.amount}>{post.quantity}</div>
                <div className={styles.plus}>+</div>
              </div>
              <div className={styles.totalPrice}>
                <div className={styles.total}>Total price:</div>
                <div className={styles.totalBox}></div>
              </div>
              <div className={styles.addToChartContainer}>
                <p className={styles.addToChart}>Add to cart</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.homepageContainer}>
          <Link to={`/`} className={styles.backToHomepage}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  </div>
);

MineralPost.propTypes = {
  post: PropTypes.any,
};

export default MineralPost;
