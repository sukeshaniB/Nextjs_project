import React from 'react';
import ChildComponent from './ChildComponent';
import styles from '../styles/Components.module.css';

const ParentComponent = () => {
  return (
    <div className={styles.parent}>
      <h2> This is the Parent Component</h2>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
