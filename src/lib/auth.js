
const Auth = {
  isAuthenticated: false,
  authToken: '123456abcdef',
  login({name, pass}) {
    let credentials = {
      email: 'admin',
      password: 'admin'
    }

    if ((name === credentials.email) && (pass === credentials.password)) {
      sessionStorage.setItem('auth-token', this.authToken);
    } else {
      alert('The username and/or password do not match. Try again.');
    }
  },
  logout() {
    sessionStorage.removeItem('auth-token');
  },
  getAuth() {
    if (!sessionStorage.getItem('auth-token')) {
      return false;
    } else {
      if (sessionStorage.getItem('auth-token') === this.authToken) {
        return true;
      } else {
        return false;
      }
    }
  }
};

export default Auth;