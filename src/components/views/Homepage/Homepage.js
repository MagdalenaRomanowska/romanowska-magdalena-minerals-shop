import React from 'react';
import PropTypes from 'prop-types';
import MineralsList from '../MineralsList/MineralsListContainer';
import clsx from 'clsx';
import styles from './Homepage.module.scss';

const Homepage = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.allHomepage}>
      <div className={styles.background}>
      </div>
      <div className={styles.title}>ROCK YOURSELF</div>
      <div className={styles.gem2}><i className={'far fa-gem'}></i></div>
      <div className={styles.gem3}><i className={'far fa-gem'}></i></div>
      <div className={styles.gem4}><i className={'far fa-gem'}></i></div>
      <div className={styles.subtitle}>
        MINERALS JEWELRY SHOP<i className={'fa fa-angle-double-down'} aria-hidden='true'></i>
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
