import React from 'react';
import PropTypes from 'prop-types';
import MineralsList from '../MineralsList/MineralsListContainer';
import clsx from 'clsx';
import styles from './Homepage.module.scss';

const Homepage = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.allHomepage}>
      <div className={styles.background}></div>
      <div className={styles.title}>
        R<i className={'far fa-gem'}></i>CK <br></br>Y<i className={'far fa-gem'}></i>URSELF<br></br>
        <div className={styles.subtitle}>
          MINERALS JEWELRY SHOP
        </div>
      </div>
    </div>
    <div className={styles.posts}>
      <MineralsList />
    </div>
  </div>
);

Homepage.propTypes = {
  className: PropTypes.string,
};

export default Homepage;
