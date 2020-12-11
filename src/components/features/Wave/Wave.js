import React from "react";
import PropTypes from "prop-types";
import styles from "./Wave.module.scss";

const Component = ({ className, children }) => (
  <div className={styles.main}>
    <div className={styles.ocean}>
      <div className={styles.wave}></div>
      <div className={styles.wave}></div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export { Component as Wave, Component as WaveComponent };
