import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.main}>
      <div className={styles.allLinks}>
        <Link to={`/`} className={styles.links}>Home</Link>
        <Link to={`/myOrder`} className={styles.links}>My order</Link>
      </div>
    </div>
    <div className={styles.line}></div>
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Header;
