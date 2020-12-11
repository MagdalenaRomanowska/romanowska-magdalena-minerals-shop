import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const Component = ({className, children}) => (
  <div className={styles.main}>
    <div className={styles.text}>Sorry... Page Not Found</div>
    <div className={styles.login}><Link to={`/`}>Back to homepage</Link></div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as NotFound,
  Component as NotFoundComponent,
};
