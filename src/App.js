import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import List from './components/List';
import Info from './components/Info';
import Create from './components/Create';
import Auth from './lib/auth';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => 
        Auth.getAuth() ? (
          <div className="wrapper">
          <ToastContainer 
            autoClose={2000}
          />
          <Header />
          <Component {...props} />
          <Footer />
          </div>
        ) : 
        (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
      }
    />
  );


  return (
    <Router 
      onUpdate={() => window.scrollTo(0, 0)}
    >
      <Switch>
        <Route path={["/", "/login"]} component={Login} />
        <PrivateRoute path="/list" component={List} />
        <PrivateRoute path="/info/:id" component={Info} />
        <PrivateRoute path="/create" component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
