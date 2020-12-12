import React from 'react';
import clsx from 'clsx';
import styles from './MyOrder.module.scss';
import PropTypes from 'prop-types';

const MyOrder = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.colorForMoment}>My order My order My order My order</div>
  </div>
);

MyOrder.propTypes = {
  className: PropTypes.any,
};

export default MyOrder;
