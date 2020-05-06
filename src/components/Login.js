import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Login.scss';
import Auth from '../lib/auth';
import notify from '../lib/notify';

const Login = () => {

  const history = useHistory();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleUsernameChange = (e) => {
    setEmailInput(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  }

  const handleLogin = (e) => {

    e.preventDefault();
      Auth.login({name: emailInput, pass: passwordInput});
      history.push('/list');
      notify("You're in! Welcome back :)");
  }

  return (
    <div>
      <div className="login-form-wrapper">
        <h1 className="title">
          <span 
            className="fire" 
            role="img" 
            aria-label="fireEmoji">🔥</span><br/>
        </h1>
        <form 
          onSubmit={handleLogin}>
          <div className="login-input-wrapper">
            <input 
              type="text" 
              className="credentials" 
              placeholder="username" 
              onChange={handleUsernameChange} />
          </div>
          <div className="login-input-wrapper">
            <input 
              type="password" 
              className="credentials" 
              placeholder="password" 
              onChange={handlePasswordChange} />
          </div>
          <div className="login-input-wrapper">
            <button 
              type="submit" 
              className="login">login</button>
          </div>
        </form>
      </div>
      <div className="large-logo">drgnz.</div>
    </div>
  );
}

export default Login;
