import React from 'react';
import rlogo from './images/rlogo.svg';
import flogo from './images/flogo.svg';

const Header = () => {
  return (
    <div className="app-header">
      <img src={rlogo} className="app-logo" alt="logo" />
      <img src={flogo} className="app-logo" alt="logo" />
      <div className="app-title">
        <h1>Daily Bucket</h1>
      </div>
    </div>
  );
};

export default Header;
