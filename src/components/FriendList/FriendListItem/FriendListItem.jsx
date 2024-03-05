import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friend}>
    <img src={avatar} alt={`Avatar of ${name}`} width="48" />
    <p>{name}</p>
    <p className={isOnline ? styles.online : styles.offline}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </div>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;