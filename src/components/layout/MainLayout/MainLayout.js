import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/HeaderContainer';
import Footer from '../Footer/FooterContainer';
import clsx from 'clsx'; //narzędzie do używania wielu klas. Dowolna ilość.
import styles from './MainLayout.module.scss';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    {children}
    <Footer />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as MainLayout, 
  Component as MainLayoutComponent, 
};
