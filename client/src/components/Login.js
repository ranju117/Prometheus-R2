import React, { Component, Button } from 'react';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom';
import Profile from './Profile';

export default class Login extends Component {
  
  constructor(){
        super();
        this.state = {
            
            username:'',
            password:''
        }
    };

    handleClick = (e) => {
   //var navigate = useNavigate();

        e.preventDefault();
        console.log(this.state.username);
        fetch(
            "http://localhost:5000/api/v1/get?" + new URLSearchParams({username:this.state.username}))
                        .then((res) => res.json())
                        .then((json) => {
                            this.setState({
                                username: json.username,
                                password: json.password
                            }
                           
                            );
                            localStorage.setItem('username',json.username) 
                        });
                        //navigate('/profile');  
            //this.props.history.push('/profile')                                  
      };
  render() {
 
    return (
      <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            ref = "username"
            onChange = {(e) => this.setState({ username: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange = {(e) => this.setState({ password: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
        
        <Link to={{ pathname: '/profile', URLSearchParams: { the: 'query' } }}>
        <button className="btn btn-primary" >Sign in</button>
        </Link>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    )
  }
}
