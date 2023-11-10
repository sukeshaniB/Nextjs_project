import React from 'react';
import SubComponent from './SubComponent';
import styles from '../styles/Components.module.css';

const ChildComponent = () => {
  return (
    <div className={styles.child}>
      <h3>This is the Child Component</h3>
      <SubComponent />
    </div>
  );
};

export default ChildComponent;
