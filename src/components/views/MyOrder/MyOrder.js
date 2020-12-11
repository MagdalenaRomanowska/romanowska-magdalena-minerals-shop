import React from 'react';
import clsx from 'clsx';
import styles from './MyOrder.module.scss';
import {Wave} from '../../features/Wave/Wave';

const MyOrder = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.colorForMoment}>0123456789</div>
    <Wave />
  </div>
);

MyOrder.propTypes = {
  
};

export default MyOrder;
