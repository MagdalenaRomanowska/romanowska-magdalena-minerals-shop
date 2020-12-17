import React from 'react';
import PropTypes from 'prop-types';
import styles from './MineralsList.module.scss';
import { Link } from 'react-router-dom';

const MineralsList = ({ posts }) => (
  <div className={styles.productDescription}>
    <div className={styles.squaresLeftSided}>
      <ul className={styles.squares}>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
        <li><i className={'far fa-gem'}></i></li>
      </ul>
    </div>
    <div className={styles.exploreMinerals}>Explore Our Minerals</div>
    <div className={styles.allProducts}>
      {posts.length ? (
        posts.map((post) => (
          <div className={styles.product} key={post.title}>
            <Link key={post.title} to={`/minerals/${post.title}`} className={styles.photoInside}>
              <img src={post.photo} alt={'mineralPhoto'} />
            </Link>
            <div className={styles.mineralText}>
              <div className={styles.mineralName}>
                <div className={styles.mineralNameContent}><b>{post.title}</b></div>                
              </div>
              <div className={styles.mineralPrice}>
                <div className={styles.mineralPriceTitle}>Minimal price:</div>
                <div className={styles.mineralPriceContent}>{post.price}</div>
              </div>
            </div>            
          </div>
        ))
      ) : (
        <p>Sorry, no results found.</p>
      )}
    </div>
    
  </div>
);

MineralsList.propTypes = {
  posts: PropTypes.any,
  title: PropTypes.any,
};

export default MineralsList;
