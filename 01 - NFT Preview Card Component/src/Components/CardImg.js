import React, { useState } from 'react';
import styles from './CardImg.module.css';
import cardImg from '../images/image-equilibrium.jpg';
import viewIcon from '../images/icon-view.svg';

const Card_Img = () => {
  return (
    <div className={styles.cardImgContainer}>
      <div className={styles.overlay}>
        <img src={viewIcon} alt="view" />
      </div>

      <img src={cardImg} alt="equilibrium" className={styles.cardImg} />
    </div>
  );
};

export default Card_Img;
