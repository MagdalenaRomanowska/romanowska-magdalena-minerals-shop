import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Mineral.module.scss';

const Mineral = ({ mineral }) => (
  <div className={styles.main}>
    <div className={styles.background}>
      <ul className={styles.squares}>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
        <li><i className={"far fa-gem"}></i></li>
      </ul>
      <div className={styles.postContent}>
        <div className={styles.detailTitle}><i className={'far fa-gem'}></i> &nbsp; {mineral ? mineral.title : ''}  &nbsp; <i className={'far fa-gem'}></i></div>
        <div className={styles.detailText}>{mineral ? mineral.text : ''}</div>
        <div className={styles.photoDescription}>
          {mineral ? mineral.photoDescription : ''}
        </div>
        <div className={styles.detailPhoto}>
          <img src={mineral ? mineral.photo : ''} alt={'mineralPhoto'} />
          <img src={mineral ? mineral.photo2 : ''} alt={'mineralPhoto2'} />
          <img src={mineral ? mineral.photo3 : ''} alt={'mineralPhoto3'} />
        </div>
        <div className={styles.homepageContainer}>
          <Link to={`/`} className={styles.backToHomepage}>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Mineral.propTypes = {
  mineral: PropTypes.any,
};

export default Mineral;
