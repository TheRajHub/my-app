import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import styles from './LeftSidebar.module.css'; // Import the CSS module

const LeftSidebar = ({ userName }) => {
  return (
    <div className={styles.sidebar}>
      {/* Heading */}
      <h2 className={styles.heading}>AI Note</h2>

      {/* Home Button */}
      <button className={styles.button}>
        <HomeIcon className={styles.icon} />
        Home
      </button>

      {/* Favorite Button */}
      <button className={styles.button}>
        <StarIcon className={styles.icon} />
        Favorite
      </button>

      {/* User Name */}
      <div className={styles.userName}>
        {userName}
      </div>
    </div>
  );
};

export default LeftSidebar;