import React from 'react';
import styles from './MainLayout.css';
import Header from './Header';

const MainLayout = ({ children, location }) => (
  <div className={styles.normal}>
    <Header location={location} />
    <div className={styles.content}>
      <div className={styles.main}>
        {children}
      </div>
    </div>
  </div>
);

export default MainLayout;