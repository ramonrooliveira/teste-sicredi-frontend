import React from 'react';
import { useHistory } from 'react-router-dom';
import Auth from '../lib/auth';
import notify from '../lib/notify';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    Auth.logout();
    history.push('/login');
    notify("You're logged out! Come back any time :)");
  }

  return (
    <div>
      <button 
        type="button" 
        className="outline primary" 
        onClick={handleLogout}>
          logout
      </button>
    </div>
  );
}

export default Logout;
