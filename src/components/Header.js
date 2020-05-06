import React from 'react';
import Logout from './Logout';
import '../styles/Header.scss';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
      <Link to="/list">drgnz.</Link>
      </div>
      <div className="links">
        <Link to="/list">list</Link>
        <Link to="/create">CREATE</Link>
        <Logout />
      </div>
    </div>
  );
}

export default Header;
