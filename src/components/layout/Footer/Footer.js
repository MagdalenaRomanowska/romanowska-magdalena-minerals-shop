import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.main}>
      <div className={styles.allLinks}>
        <Link to={`/`} className={styles.links}><i className={'fab fa-facebook-f'}></i></Link>
        <Link to={`/`} className={styles.links}><i className={'fab fa-instagram'}></i></Link>
        <Link to={`/`} className={styles.links}><i className={'fab fa-pinterest-p'}></i></Link>
      </div>
    </div>
    <div className={styles.line}></div>
  </div>
);

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Footer;
