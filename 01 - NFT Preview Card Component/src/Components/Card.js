import React from 'react';
import CardImg from './CardImg';
import CardDetails from './CardDetails';
import styles from './Card.module.css';

const Card = () => {
  return (
    <div className={styles.card}>
      <CardImg />
      <CardDetails />
    </div>
  );
};

export default Card;
