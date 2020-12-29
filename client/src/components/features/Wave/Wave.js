import React from 'react';
import styles from './Wave.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className={styles.ocean}>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
    </div>
  </div>
);

export { Component as Wave, Component as WaveComponent };
