import React from 'react';
import logo from '../logo.svg';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
import prometheus from '../promlogo.png';
import Profile from './Profile';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/sign-in'}>
            <img src={prometheus} className="promLogo"/>
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            
            <Route exact path="/sign-in" element={<Login />} />
            <Route exact path="/sign-up" element={<SignUp />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}
export default App;
