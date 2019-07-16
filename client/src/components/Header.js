import React from 'react';
import GoogleAuth from './GoogleAuth';

const Header = () => {
  return (
    <div className="ui menu">
      <div className="header item">
        InterVue
    </div>
      <div className="item">
        <GoogleAuth />
      </div>
    </div>
  )
}

export default Header;