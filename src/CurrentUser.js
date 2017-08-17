import React, { PropTypes } from 'react';
import { auth } from './firebase';
import './CurrentUser.css';

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      <img
        src={user.photoURL}
        alt={user.displayName}
        className="CurrentUser-photo"
      />
      <div className="CurrentUser-info">
        <h2>
          {user.displayName}
        </h2>
        <p>
          {user.email}
        </p>
        <button onClick={auth.signOut}>Sign out</button>
      </div>
    </div>
  );
};

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string.isRequired,
    photoURL: PropTypes.string,
    uid: PropTypes.string.isRequired
  })
};

export default CurrentUser;
