import React from 'react';
import ParentComponent from '../components/ParentComponent';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to my Next.js App</h1>
      <ParentComponent />
    </div>
  );
};

export default Home;
