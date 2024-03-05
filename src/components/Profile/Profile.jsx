import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={image} alt="User avatar" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span>Followers:</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views:</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes:</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;