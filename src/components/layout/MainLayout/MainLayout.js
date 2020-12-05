import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/HeaderContainer';
import clsx from 'clsx'; //narzędzie do używania wielu klas. Dowolna ilość.
import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout, //export Componentu pod nazwą MainLayout.
  // Container as MainLayout,
  Component as MainLayoutComponent, //w testach MainLayoutComponent będziemy używać.
};
