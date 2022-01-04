import React from 'react';
import ethIcon from '../Images/icon-ethereum.svg';
import clockIcon from '../Images/icon-clock.svg';
import creatorIcon from '../Images/image-avatar.png';
import styles from './CardDetails.module.css';

const CardDetails = () => {
  return (
    <div className={styles.cardDetails}>
      <p className={styles.cardTitle}>Equilibrium #3429</p>
      <p className={styles.cardDesc}>
        Our Equilibrium collection promotes balance and calm
      </p>

      <div className={styles.cardDetailsSmall}>
        <p className={styles.cardPrice}>
          <img src={ethIcon} alt="eth price" /> 0.041 ETH
        </p>
        <p className={styles.cardDay}>
          <img src={clockIcon} alt="eth price" /> 3 days left
        </p>
      </div>

      <div className={styles.cardCreator}>
        <img src={creatorIcon} alt="creator" />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
