import React from 'react';
import clsx from 'clsx';
import styles from './NotFound.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotFound = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.text}>Sorry... Page Not Found</div>
    <div className={styles.login}><Link to={`/`}>Back to homepage</Link></div>
  </div>
);

NotFound.propTypes = {
  className: PropTypes.any,
};

export default NotFound;